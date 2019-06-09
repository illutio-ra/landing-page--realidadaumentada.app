import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Router from './router'
import { addLocaleData, IntlProvider, defineMessages } from 'react-intl'
import './styles/index.scss'
import en from 'react-intl/locale-data/en'
import es from 'react-intl/locale-data/es'
import api from '~base/api'

addLocaleData([...es, ...en])

class App extends Component {
  constructor(props) {
    super(props)
    const locale = window.localStorage.getItem('lang') || 'es-MX'
    this.state = {
      locale,
      messages: null,
    }
    window.addEventListener('lang', this.changeLanguage)
    window.localStorage.setItem('lang', locale)
  }

  changeLanguage = (e) => {
    this.setState({ locale: e.detail.lang }, this.loadTranslations)
    localStorage.setItem('lang', e.detail.lang)
  }

  async componentWillMount() {
    await this.loadTranslations()
  }

  async loadTranslations() {
    const { locale } = this.state
    const config = await api.get(`/app-config/translations/${locale}`)
    if (config) {
      this.setState({
        messages: config.data,
      })
    }
  }

  formatMessages(messages) {
    const format = {}
    if (!messages) return format
    for (const message of messages) {
      for (const module of message.modules) {
        format[`${module}.${message.id}`] = message.content
      }
    }
    return format
  }

  render() {
    const { messages, locale } = this.state
    const { Root } = this.props
    return (
      <IntlProvider messages={this.formatMessages(messages)} locale={locale}>
        <Root />
      </IntlProvider>
    )
  }
}

if (module.hot) {
  module.hot.accept('./router.js', (Root) => {
    const Router = require('./router')
    ReactDOM.render(
      <App Root={Router.default} />,
      document.getElementById('root'),
    )
  })
}

ReactDOM.render(<App Root={Router} />, document.getElementById('root'))
