import React, { Component } from 'react'
import { MegadraftPlugin, insertDataBlock, MegadraftIcons } from 'megadraft'
import FontAwesome from 'react-fontawesome'
import VideoPlugin from './video-plugin'

const { CommonBlock } = MegadraftPlugin

const Image = (props) => {
  const blockActions = [

  ]
  return (
    <VideoPlugin {...props} data={props.data} />
  )
}

class ButtonComponent extends Component {
  onClick() {
    const id = window.prompt(
      'Ingresa el id de video, Ejemplo: https://www.youtube.com/watch?v=dsFpUW48Tnc  => dsFpUW48Tnc',
    )
    const data = { type: 'video', id }
    console.log('id', id)
    const { onChange, editorState } = this.props
    if (id) {
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
        <FontAwesome name="youtube" />
      </button>
    )
  }
}

export default {
  type: 'video',
  buttonComponent: ButtonComponent,
  blockComponent: Image,
  options: {
    defaultDisplay: 'small',
    displayOptions: [],
  },
}
