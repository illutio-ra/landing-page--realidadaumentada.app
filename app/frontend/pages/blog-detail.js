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
      post: [],
    }
  }

  async componentDidMount() {
    await this.loadData()
  }

  async loadData() {
    const { data } = await api.get(
      `/public/blog/${this.props.match.params.slug}`,
    )

    this.setState({
      post: data,
    })
  }

  render() {
    const basicStates = super.getBasicStates()
    if (basicStates) {
      return basicStates
    }

    const { name, unreadCount, post } = this.state
    const { formatMessage } = this.props.intl

    return (
      <div className="section">
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    )
  }
}

Blog.config({
  path: '/blog/:slug',
  title: 'Blog',
  validate: forcePublic,
  exact: true,
})

export default injectIntl(Blog)
