import React, { Component } from 'react'
import { branch } from 'baobab-react/higher-order'
import PropTypes from 'baobab-react/prop-types'
import api from '~base/api'

import BaseModal from '~base/components/base-modal'
import ArticleForm from './form'

const initialState = {
  title: '',
  description: '',
  imagePreview: '',
}

class CreateArticle extends Component {
  constructor(props) {
    super(props)
    this.hideModal = this.props.hideModal.bind(this)
  }

  render() {
    return (
      <BaseModal
        title="Crear artículo"
        className={this.props.className}
        hideModal={this.hideModal}
      >
        <ArticleForm
          baseUrl="/articles"
          url={this.props.url}
          finishUp={this.props.finishUp}
          initialState={initialState}
        >
          <div className="field is-grouped">
            <div className="control">
              <button className="button is-primary">Create</button>
            </div>
            <div className="control">
              <button className="button" onClick={this.hideModal}>
                Cancel
              </button>
            </div>
          </div>
        </ArticleForm>
      </BaseModal>
    )
  }
}

CreateArticle.contextTypes = {
  tree: PropTypes.baobab,
}

const BranchedCreateArticle = branch(
  (props, context) => ({
    data: props.branchName,
  }),
  CreateArticle,
)

export default BranchedCreateArticle
