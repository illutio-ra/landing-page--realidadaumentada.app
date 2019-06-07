import React, { Component } from 'react'
import { MegadraftPlugin, insertDataBlock, MegadraftIcons } from 'megadraft'
import FontAwesome from 'react-fontawesome'
import ImagePlugin from './image-plugin'

const Image = ({ data }) => <ImagePlugin data={data} />

class ButtonComponent extends Component {
  onClick() {
    const src = window.prompt('Enter a URL')
    const data = { type: 'image', src }
    const { onChange, editorState } = this.props
    if (src) {
      onChange(insertDataBlock(editorState, data))
    }
  }

  render() {
    return (
      <button
        type="button"
        className="button is-success is-orbed"
        onClick={() => this.onClick()}
      >
        <FontAwesome name="file" />
      </button>
    )
  }
}

export default {
  type: 'image',
  buttonComponent: ButtonComponent,
  blockComponent: Image,
  options: {
    defaultDisplay: 'small',
    displayOptions: [],
  },
}
