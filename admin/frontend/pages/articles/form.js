import React, { Component } from 'react'
import api from '~base/api'
import MarbleForm from '~base/components/marble-form'
import PropTypes from 'prop-types'

class ArticleForm extends Component {
  constructor(props) {
    super(props)
    const { initialState } = this.props
    this.state = {
      formData: initialState,
    }
  }

  onError() {}

  onSuccess() {}

  changeHandler(formData) {
    this.setState({
      formData,
    })
  }

  clearState() {
    const { initialState } = this.props
    this.setState({
      formData: initialState,
    })
  }

  async submitHandler(formData) {
    const { url, load, finishUp } = this.props
    try {
      const method = formData.uuid ? 'put' : 'post'
      const data = await api[method](url, formData)
      if (load) await load()
      if (finishUp) finishUp(data)

      this.clearState()
    } catch (e) {
      console.error(e)
    }
  }

  render() {
    const { formData } = this.state

    const schema = {
      title: {
        widget: 'TextWidget',
        label: 'Título',
        required: true,
      },
      description: {
        widget: 'TextareaWidget',
        label: 'Descripción',
        required: true,
      },
      imagePreview: {
        widget: 'TextWidget',
        label: 'Image preview',
        required: true,
      },
    }
    const data = {
      title: formData.title,
      description: formData.description,
      imagePreview: formData.imagePreview,
    }

    return (
      <div>
        <MarbleForm
          schema={schema}
          formData={data}
          onChange={(e) => this.changeHandler(e)}
          onSubmit={(e) => this.submitHandler(e)}
          onSuccess={(e) => this.onSuccess(e)}
          onError={(e) => this.onError(e)}
          handleMessages={false}
        >
          <div className="control">
            <button type="submit" className="button is-primary">
              Save
            </button>
          </div>
        </MarbleForm>
      </div>
    )
  }
}

ArticleForm.propTypes = {
  url: PropTypes.string.isRequired,
  initialState: PropTypes.shape.isRequired,
  load: PropTypes.func.isRequired,
  finishUp: PropTypes.func.isRequired,
}

export default ArticleForm
