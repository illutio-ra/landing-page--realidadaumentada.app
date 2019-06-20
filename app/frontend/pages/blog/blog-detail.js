import React from 'react'
import PageComponent from '~base/page-component'
import { injectIntl } from 'react-intl'
import api from '~base/api'
import { forcePublic } from '~base/middlewares/'
import { MegadraftEditor, editorStateFromRaw } from 'megadraft'

import PluginImage from './plugins/image'
import PluginVideo from './plugins/video'

class Blog extends PageComponent {
  constructor(props) {
    super(props)
    this.state = {
      ...this.baseState,
      name: 'Eric',
      unreadCount: 1000,
      post: null,
      content: null,
    }
  }

  async componentDidMount() {
    await this.loadData()
  }

  async loadData() {
    const { data } = await api.get(
      `/public/blog/${this.props.match.params.slug}`,
    )

    const content = editorStateFromRaw(JSON.parse(data.content))

    this.setState({
      post: data,
      content,
    })
  }

  render() {
    const basicStates = super.getBasicStates()
    if (basicStates) {
      return basicStates
    }

    const { post, content } = this.state

    console.log('post', post)

    if (!post) {
      return <div />
    }

    return (
      <div className="container">
        <div className="section">
          <div className="card is-shadowless">
            <div className="card-header is-shadowless">
              <h1 className="card-header-title title is-2">{post.title}</h1>
            </div>
            <hr className="divider" />
            Tags:
            {' '}
            {post.tags.map((l) => (
              <span className=" margin-sides-icon tag is-info">{l}</span>
            ))}
            <div className="card-content is-paddingless">
              {content && (
                <MegadraftEditor
                  plugins={[PluginImage, PluginVideo]}
                  readOnly
                  editorState={content}
                  onChange={(e) => this.onChange(e)}
                />
              )}
            </div>
          </div>
        </div>
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
