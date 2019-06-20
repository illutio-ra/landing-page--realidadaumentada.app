import React from 'react'
import PageComponent from '~base/page-component'
import api from '~base/api'
import { FormattedMessage, injectIntl } from 'react-intl'
import { forcePublic } from '~base/middlewares/'
import CardBlog from './components/card-blog'

class Blog extends PageComponent {
  constructor(props) {
    super(props)
    this.state = {
      ...this.baseState,
      name: 'Eric',
      unreadCount: 1000,
      items: [],
    }
  }

  async componentDidMount() {
    window.scrollTo(0, 0)
    await this.loadData()
  }

  async loadData() {
    const { data } = await api.get('/public/blog')

    this.setState({
      items: data,
    })
  }

  render() {
    const basicStates = super.getBasicStates()
    if (basicStates) {
      return basicStates
    }

    const { items } = this.state

    return (
      <div className="section blog has-background-white">
        <p className="is-font-size-32px has-text-centered is-font-bold is-margin-bottom-medium">
          <span className="is-font-blue">
            <FormattedMessage id="general.dont_miss" />
          </span>
          {' '}
          <span>
            <FormattedMessage id="general.latest_news" />
          </span>
        </p>
        <div className="section">
          <div className="columns is-vcentered is-multiline">
            {items.map((item, i) => (
              <div className="column is-4" key={i}>
                <CardBlog showLink item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

Blog.config({
  path: '/blog',
  title: 'Blog',
  validate: forcePublic,
  exact: true,
})

export default injectIntl(Blog)
