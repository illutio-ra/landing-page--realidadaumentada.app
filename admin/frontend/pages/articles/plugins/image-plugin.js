import React from 'react'

const ImagePlugin = ({ data }) => (
  <div className="columns is-centered">
    <div className="column">
      <div className="card">
        <div className="card-content has-text-centered">
          <img src={data.src} alt="RACAM" />
        </div>
      </div>
    </div>
  </div>
)

export default ImagePlugin
