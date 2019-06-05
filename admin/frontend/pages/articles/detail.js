import React from 'react'
import PageComponent from '~base/page-component'
import { loggedIn } from '~base/middlewares/'
import MarbleForm from '~base/components/marble-form'
import api from '~base/api'
import Loader from '~base/components/spinner'
import { Editor } from '@tinymce/tinymce-react'

class ArticlesDetailPage extends PageComponent {
  constructor(props) {
    super(props)
    this.state = {
      editorState: null,
      formData: {},
      article: null,
      loading: true,
      showDetails: false,
      content: null,
    }
  }

  async onPageEnter() {
    await this.loadDetail()
  }

  async loadDetail() {
    const url = `/admin/articles/${this.props.match.params.uuid}`
    const { data } = await api.get(url)

    this.setState({
      loading: false,
      article: data,
      formData: {
        title: data.title,
        status: data.status,
        description: data.description,
        tags: data.tags.map((l) => ({ value: l, label: l })),
      },
      content: data.content,
    })
  }

  onChange(editorState) {
    this.setState({ editorState })
  }

  onSuccess() {}

  onError() {}

  handleEditorChange(e) {
    this.setState({
      content: e.target.getContent(),
      isAvailableTry: false,
    })
  }

  changeHandler(formData) {
    this.setState({
      formData,
    })
  }

  async submitHandler() {
    const { content, formData } = this.state

    formData.content = content
    formData.tags = formData.tags.map((l) => l.value)
    const url = `/admin/articles/${this.props.match.params.uuid}`
    await api.post(url, formData)
    this.loadDetail()
  }

  toolbar = () => <div />

  render() {
    const { formData, content } = this.state

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
                  <div className="card-header header-color">
                    <p className="card-header-title header-color">Detalles</p>
                  </div>
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
                </div>
              </div>
            </div>
            <div className="columns">
              <div className="column">
                <div className="card">
                  <div className="card-content">
                    <Editor
                      initialValue={content}
                      init={{
                        plugins: [
                          'advlist autolink autosave lists link image charmap print preview hr anchor pagebreak',
                          'searchreplace wordcount visualblocks visualchars code fullscreen',
                          'insertdatetime media nonbreaking save table contextmenu directionality',
                          'emoticons template paste textcolor colorpicker textpattern code imagetools codesample toc help',
                        ],
                        toolbar1:
                          'code | undo redo | insert | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
                        toolbar2:
                          'print preview media | forecolor backcolor emoticons | codesample help',
                        image_advtab: true,
                        file_browser_callback_types: 'image',
                        height: 600,
                      }}
                      onChange={(e) => this.handleEditorChange(e)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="columns">
              <div className="column">
                <div className="modal-footer">
                  <div className="control">
                    <button
                      type="button"
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
