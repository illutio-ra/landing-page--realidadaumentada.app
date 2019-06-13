import React from 'react'
import PageComponent from '~base/page-component'
import { injectIntl } from 'react-intl'
import api from '~base/api'
import { forcePublic } from '~base/middlewares/'
import Card from './components/card'

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
        <div className="columns is-vcentered is-multiline">
          {items.map((item, i) => (
            <div className="column is-4" key={i}>
              <Card showLink item={item} />
            </div>
          ))}
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
