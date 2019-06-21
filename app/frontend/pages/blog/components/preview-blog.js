import React, { Component } from 'react'
import api from '~base/api'
import { FormattedMessage, injectIntl } from 'react-intl'
import CardBlog from './card-blog'
import Link from '~base/router/link'

class PreviewBlog extends Component {
  constructor(props) {
    super(props)
    this.state = {
      itemsTop: [],
      items: [],
    }
  }

  async componentDidMount() {
    await this.loadDataTop()
  }

  async loadDataTop() {
    const { limit } = this.props
    const { data } = await api.get('/public/blog', { limit: limit || 6 })

    this.setState({
      items: data,
    })
  }

  render() {
    const { items } = this.state
    const { seAll } = this.props
    return (
      <section className="blog" id="blog">
        {seAll && (
          <div className="columns">
            <div className="column has-text-centered">
              <p className="is-font-size-32px">
                <span className="is-font-blue">
                  <FormattedMessage id="general.dont_miss" />
                </span>
                {' '}
                <span>
                  <FormattedMessage id="general.latest_news" />
                </span>
              </p>
              <Link className="button btn-primary" to="/blog">
                <FormattedMessage id="general.see_all" />
                <i className="fa fa-eye margin-sides-icon" />
              </Link>
            </div>
          </div>
        )}
        <div className="columns is-multiline">
          {items.map((item, i) => (
            <div className="column is-4" key={i}>
              <CardBlog showLink item={item} />
            </div>
          ))}
        </div>
      </section>
    )
  }
}

export default injectIntl(PreviewBlog)
