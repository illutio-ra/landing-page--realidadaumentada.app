import React from 'react'
import PageComponent from '~base/page-component'
import { FormattedMessage, injectIntl } from 'react-intl'
import api from '~base/api'
import { forcePublic } from '~base/middlewares/'
import Link from '~base/router/link'

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

    const { name, unreadCount, items } = this.state
    const { formatMessage } = this.props.intl

    return (
      <div className="section">
        <div className="columns is-vcentered is-multiline">
          {items.map((item, index) => (
            <div className="column is-4" key={index}>
              <div className="card">
                <div className="card-header">
                  <p className="card-header-title">{item.title}</p>
                </div>
                <div className="card-content">
                  <p>{item.description}</p>
                  <br />
                  <Link className="button" to={`/blog/${item.slug}`}>
                      Detalle
                  </Link>
                </div>
              </div>
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
