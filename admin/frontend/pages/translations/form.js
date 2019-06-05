import React, { Component } from 'react'
import MarbleForm from '~base/components/marble-form'
import api from '~base/api'

class TranslationForm extends Component {
  constructor(props) {
    super(props)

    const schema = {
      id: {
        label: 'id',
        default: '',
        id: 'id',
        name: 'id',
        widget: 'TextWidget',
        required: true,
      },
      modules: {
        widget: 'MultipleSelectWidget',
        name: 'modules',
        label: 'Modules',
        required: true,
        addable: true,
      },
      content: {
        widget: 'TextareaWidget',
        name: 'content',
        label: 'Content',
        required: true,
      },
    }

    const { initialState: initialData } = this.props

    const initialState = initialData || {}

    const formData = {}
    formData.id = initialState.id || ''
    formData.modules = initialState.modules || ''
    formData.content = initialState.content || ''

    this.state = {
      formData,
      schema,
      errors: {},
    }
  }

  errorHandler(e) {}

  changeHandler(formData) {
    this.setState({
      formData,
    })
  }

  async submitHandler(formData) {
    let {
      initialState, url, lang, finish,
    } = this.props

    const modules = formData.modules.map((l) => l.value)

    if (initialState) {
      url = `${url}/${initialState.uuid}`
    }
    const res = await api.post(url, {
      ...formData,
      modules,
      lang,
    })

    if (finish) {
      await finish()
    }

    return res.data
  }

  successHandler(data) {
    const { finishUp } = this.props
    if (finishUp) {
      finishUp(data)
    }
  }

  render() {
    const { schema, formData, errors } = this.state
    const { modules } = this.props

    schema.modules.options = modules.map((item) => ({
      label: item.key,
      value: item.key,
    }))

    return (
      <div>
        <MarbleForm
          schema={schema}
          formData={formData}
          buttonLabel="Save"
          onChange={(data) => this.changeHandler(data)}
          onSuccess={(data) => this.successHandler(data)}
          onSubmit={(data) => this.submitHandler(data)}
          defaultSuccessMessage="Translations was saved correctly"
          errors={errors}
        />
      </div>
    )
  }
}

export default TranslationForm
