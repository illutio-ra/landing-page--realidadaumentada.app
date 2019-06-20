import React from 'react'
import Image from '~base/components/image'
import Link from '~base/router/link'
import FontAwesome from 'react-fontawesome'

const Card = ({ item }) => (
  <Link to={`/blog/${item.slug}`}>
    <div className="card is-border-radius is-shadowless">
      <div className="card-image">
        <div className="blog-tags-preview">
          {item.tags.map((l) => (
            <span className=" margin-sides-icon tag is-info">{l}</span>
          ))}
        </div>
        <Image
          className="is-border-radius is-fullwidth"
          style={{ height: 240 }}
          src={item.imagePreview}
        />
      </div>
      <div className="card-content">
        <div className="content">
          <div className="columns is-mobile">
            <div className="column is-10">{item.title}</div>
            <div className="column is-1 has-text-centered">
              <FontAwesome
                name="facebook"
                className="is-font-blue is-font-bold"
              />
            </div>
            <div className="column is-1 has-text-centered">
              <FontAwesome
                name="twitter"
                className="is-font-blue is-font-bold"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Link>
)

export default Card
