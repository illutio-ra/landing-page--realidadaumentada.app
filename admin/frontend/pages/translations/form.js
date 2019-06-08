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

    const initialState = initialData || {
      id: '',
      modules: '',
      content: '',
    }

    this.state = {
      formData: initialState,
      schema,
      errors: {},
    }
  }

  errorHandler() {}

  changeHandler(formData) {
    this.setState({
      formData,
    })
  }

  async submitHandler(formData) {
    let { initialState, url, lang } = this.props

    const modules = formData.modules.map((l) => l.value)

    if (initialState) {
      url = `${url}/${initialState.uuid}`
    }
    const res = await api.post(url, { ...formData, modules, lang })

    return res.data
  }

  async successHandler() {
    const { finish } = this.props
    if (finish) {
      await finish()
    }
  }

  render() {
    const { schema, formData, errors } = this.state
    const { modules } = this.props

    schema.modules.options = modules.map((item) => ({
      label: item.label,
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
