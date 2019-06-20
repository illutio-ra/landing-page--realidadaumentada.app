import React from 'react'
import YouTube from 'react-youtube'

const opts = {
  height: '390',
  width: '80%',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 0,
  },
}

const ImagePlugin = ({ data }) => (
  <div className="columns is-centered">
    <div className="column">
      <div className="card">
        <div className="card-content has-text-centered">
          <YouTube videoId={data.id} opts={opts} />
        </div>
      </div>
    </div>
  </div>
)

export default ImagePlugin
