import React, { Component } from 'react'
import api from '~base/api'
import { FormattedMessage, injectIntl } from 'react-intl'
import Card from './card'
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
    const { data } = await api.get('/public/blog', { limit: 5 })

    this.setState({
      itemsTop: data.slice(0, 2),
      items: data.slice(2, 5),
    })
  }

  render() {
    const { itemsTop, items } = this.state
    return (
      <section className="section blog" id="blog">
        <div className="columns">
          <div className="column is-3">
            <div className="card-content">
              <p className="is-font-size-32px">
                <span className="is-font-blue">
                  <FormattedMessage id="general.dont_miss" />
                  <br />
                </span>
                <span>
                  <FormattedMessage id="general.latest_news" />
                </span>
              </p>
              <Link className="button is-primary" to="/blog">
                <FormattedMessage id="general.see_all" />
                <i className="fa fa-eye margin-sides-icon" />
              </Link>
            </div>
          </div>
          {itemsTop.map((item, i) => (
            <div className="column" key={i}>
              <Card item={item} />
            </div>
          ))}
        </div>

        <div className="columns is-multiline">
          {items.map((item, i) => (
            <div className="column is-4" key={i}>
              <Card item={item} />
            </div>
          ))}
        </div>
      </section>
    )
  }
}

export default injectIntl(PreviewBlog)
