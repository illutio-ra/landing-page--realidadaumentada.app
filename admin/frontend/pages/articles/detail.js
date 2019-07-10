import React from 'react'
import PageComponent from '~base/page-component'
import { loggedIn } from '~base/middlewares/'
import {
  MegadraftEditor,
  editorStateFromRaw,
  editorStateToJSON,
} from 'megadraft'
import MarbleForm from '~base/components/marble-form'
import api from '~base/api'
import Loader from '~base/components/spinner'
import FontAwesome from 'react-fontawesome'
import { success } from '~base/components/toast'
import PluginImage from './plugins/image'
import PluginVideo from './plugins/video'

const richContent = {
  blocks: [
    {
      key: 'ag6qs',
      text: 'Titulo',
      type: 'header-one',
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {},
    },
    {
      key: '59kd9',
      text: 'Editor de artículos',
      type: 'header-two',
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {},
    },
  ],
  entityMap: {},
}

class ArticlesDetailPage extends PageComponent {
  constructor(props) {
    super(props)
    this.state = {
      editorState: null,
      formData: {},
      article: null,
      loading: true,
      showDetails: false,
    }
  }

  async onPageEnter() {
    await this.loadDetail()
  }

  async loadDetail() {
    const url = `/admin/articles/${this.props.match.params.uuid}`
    const body = await api.get(url)
    const content = body.data.content
      ? editorStateFromRaw(JSON.parse(body.data.content))
      : editorStateFromRaw(richContent)
    this.setState(
      {
        loading: false,
        formData: {
          ...body.data,
          tags: body.data.tags.map((l) => ({ value: l, label: l })),
        },
        editorState: content,
        article: body.data,
      },
      () => {
        if (!body.data.content) {
          this.submitHandler()
        }
      },
    )
  }

  onChange(editorState) {
    this.setState({ editorState })
  }

  onSuccess() {}

  onError() {}

  changeHandler(formData) {
    this.setState({
      formData,
    })
  }

  async submitHandler() {
    const { editorState, formData } = this.state
    formData.content = editorStateToJSON(editorState)
    formData.tags = formData.tags.map((l) => l.value)

    const url = `/admin/articles/${this.props.match.params.uuid}`
    await api.post(url, formData)
    this.loadDetail()
    success()
  }

  render() {
    const { formData } = this.state

    const schemaDetails = {
      title: {
        widget: 'TextWidget',
        label: 'Título',
        required: true,
        className: 'is-6',
      },
      status: {
        widget: 'SelectWidget',
        label: 'Status',
        allowEmpty: true,
        className: 'is-6',
        options: [
          { label: 'Publicado', value: 'published' },
          { label: 'Revisión', value: 'review' },
          { label: 'Edición', value: 'draft' },
        ],
        required: true,
      },
      thumbnail: {
        widget: 'TextWidget',
        label: 'Image preview',
        required: true,
        className: 'is-12',
      },
      description: {
        widget: 'TextareaWidget',
        label: 'Descripción',
        required: true,
      },
      tags: {
        widget: 'MultipleSelectWidget',
        label: 'Tags',
        addable: true,
        options: [],
        required: true,
      },
      isTop: {
        widget: 'CheckboxWidget',
        label: '¿Es top?',
        className: 'is-4',
      },
    }

    const dataDetails = {
      title: formData.title,
      status: formData.status,
      description: formData.description,
      tags: formData.tags,
      thumbnail: formData.thumbnail,
      isTop: formData.isTop,
    }

    if (this.state.loading) {
      return <Loader />
    }

    return (
      <div className="section">
        <div className="columns">{this.getBreadcrumbs()}</div>
        <div className="columns">
          <div className="column">
            <div className="columns">
              <div className="column">
                <div className="card">
                  <div
                    className="card-header header-color"
                    onClick={() =>
                      this.setState({ showDetails: !this.state.showDetails })
                    }
                  >
                    <p className="card-header-title header-color">Detalles</p>
                    <a className="card-header-icon" aria-label="more options">
                      <span className="icon">
                        {!this.state.showDetails && (
                          <FontAwesome
                            className="has-text-white"
                            name="angle-down"
                          />
                        )}
                        {this.state.showDetails && (
                          <FontAwesome
                            className="has-text-white"
                            name="angle-up"
                          />
                        )}
                      </span>
                    </a>
                  </div>
                  {this.state.showDetails && (
                    <div className="card-content">
                      <MarbleForm
                        schema={schemaDetails}
                        formData={dataDetails}
                        onChange={(data) => this.changeHandler(data)}
                        onSubmit={(data) => this.submitHandler(data)}
                        onSuccess={(data) => this.onSuccess(data)}
                        onError={(data) => this.onError(data)}
                        handleMessages={false}
                      >
                        <div />
                      </MarbleForm>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="columns">
              <div className="column">
                <div className="card">
                  <div className="card-content">
                    {this.state.editorState && (
                      <MegadraftEditor
                        plugins={[PluginImage, PluginVideo]}
                        editorState={this.state.editorState}
                        onChange={(e) => this.onChange(e)}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="columns">
              <div className="column">
                <div className="modal-footer">
                  <div className="control">
                    <button
                      className="button is-primary"
                      onClick={() => this.submitHandler()}
                    >
                      Guardar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ArticlesDetailPage.config({
  name: 'order-list',
  icon: 'shopping-cart',
  path: '/articles/:uuid',
  breadcrumbs: [
    { label: 'Dashboard', path: '/' },
    { label: 'Artículos', path: '/articles' },
    { label: '<%= article.title %>' },
  ],
  title: 'Artículo',
  exact: true,
  validate: loggedIn,
})

export default ArticlesDetailPage
