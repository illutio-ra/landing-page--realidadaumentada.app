import React from 'react'
import PageComponent from '~base/page-component'
import api from '~base/api'
import { loggedIn } from '~base/middlewares/'
import { BaseTable } from '~base/components/base-table'
import BaseModal from '~base/components/base-modal'
import { success } from '~base/components/toast'
import ConfirmButton from '~base/components/confirm-button'
import TreeMenu from 'react-simple-tree-menu'
import LabelForm from './form'

class Translations extends PageComponent {
  constructor(props) {
    super(props)
    this.state = {
      labels: [],
      classNameModal: '',
      lang: null,
      modules: [],
      module: null,
      currentLabel: null,
      node: null,
      depth: null,
      data: [],
    }
  }

  async onPageEnter() {
    let data = await this.load()
    data = data.map((l) => ({
      key: l,
      label: l,
      nodes: [],
    }))

    return {
      modules: data,
      data: [
        {
          key: 'es-MX',
          label: 'es-MX',
          nodes: data,
        },
        {
          key: 'en-US',
          label: 'en-US',
          nodes: data,
        },
      ],
    }
  }

  async load() {
    const url = '/admin/translations/'
    const body = await api.get(url)

    return body.data
  }

  getColumns() {
    return [
      {
        title: 'Id',
        property: 'id',
        default: 'N/A',
      },
      {
        title: 'Modules',
        property: 'modules',
        default: 'N/A',
        formatter: (row) => <div>{row.modules.join(', ')}</div>,
      },
      {
        title: 'Content',
        property: 'content',
        default: 'N/A',
      },
      {
        title: 'Actions',
        formatter: (row) => (
          <div className="columns">
            <div className="column">
              <button
                type="button"
                className="button"
                onClick={() => this.setObject(row)}
              >
                <i className="fa fa-eye" />
              </button>
            </div>
            <div className="column">
              <ConfirmButton
                title="Delete translation"
                className="button is-danger"
                classNameButton="button is-danger"
                onConfirm={() => this.handleRemove(row)}
              >
                <i className="fa fa-trash-o" />
              </ConfirmButton>
            </div>
          </div>
        ),
      },
    ]
  }

  async setNode(node) {
    const { lang } = this.state
    let url

    if (node.level > 0) {
      url = `/admin/translations/${lang}/${node.key}`
      this.setState({
        module: node.key,
      })
    } else {
      this.setState({
        lang: node.key,
      })
      url = `/admin/translations/${node.key}`
    }
    url = `/admin/translations/${node.key}`

    const body = await api.get(url)

    this.setState({
      labels: body.data,
      node,
    })
  }

  hideModal() {
    this.setState({
      classNameModal: false,
      currentLabel: null,
    })
  }

  finish() {
    this.setState(
      {
        classNameModal: false,
        currentLabel: null,
      },
      () => this.setNode(this.state.node),
    )
  }

  getModal() {
    const { currentLabel, lang, modules, module } = this.state

    if (currentLabel) {
      currentLabel.modules = currentLabel.modules.map((l) => ({
        value: l,
        label: l,
      }))
    }
    return (
      <BaseModal
        title="Translation"
        className="is-active"
        hideModal={() => this.hideModal()}
      >
        <LabelForm
          initialState={currentLabel}
          lang={lang}
          module={module}
          finish={() => this.finish()}
          modules={modules}
          url="/admin/translations"
        />
      </BaseModal>
    )
  }

  setObject(row) {
    this.setState({
      currentLabel: { ...row },
      classNameModal: true,
      module: row.module,
      lang: row.lang,
    })
  }

  async handleBackup() {
    await api.post('/admin/translations/backup')
    success()
  }

  async handleSynchronize() {
    await api.post('/admin/translations/synchronize')
    success()
  }

  async handleRemove(row) {
    await api.del(`/admin/translations/${row.uuid}`)
    success()
    this.setNode()
  }

  render() {
    const { labels, lang } = this.state

    return (
      <div className="section">
        <div className="columns">
          <div className="column has-text-right">
            {lang && (
              <button
                type="button"
                className="button"
                onClick={() =>
                  this.setState({ classNameModal: true, currentLabel: null })
                }
              >
                <span className="icon">
                  <i className="fa fa-plus" />
                </span>
                <span>New translation</span>
              </button>
            )}

            <button
              type="button"
              className="button"
              onClick={() => this.handleBackup()}
            >
              <span className="icon">
                <i className="fa fa-download" />
              </span>
              <span>Backup (db &gt; json)</span>
            </button>
            <button
              type="button"
              className="button"
              onClick={() => this.handleSynchronize()}
            >
              <span className="icon">
                <i className="fa fa-file" />
              </span>
              <span>Sync (json &gt; db)</span>
            </button>
          </div>
        </div>

        <div className="columns">
          <div className="column is-4">
            <div className="card">
              <div className="card-header">
                <p className="card-header-title">Translations</p>
              </div>
              <div className="card-content card-content-treeview">
                <TreeMenu
                  data={this.state.data}
                  onClickItem={(e) => this.setNode(e)}
                />
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-content">
                <BaseTable
                  handleSort={(e) => this.handleSort(e)}
                  data={labels}
                  columns={this.getColumns()}
                  sortAscending={this.state.sortAscending}
                  sortBy={this.state.sort}
                />
              </div>
            </div>
          </div>
        </div>
        {this.state.classNameModal && this.getModal()}
      </div>
    )
  }
}

Translations.config({
  path: '/devtools/translations',
  exact: true,
  title: 'Translations',
  icon: 'list',
  validate: loggedIn,
})

export default Translations
