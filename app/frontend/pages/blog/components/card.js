import React from 'react'
import Image from '~base/components/image'
import Link from '~base/router/link'
import { FormattedMessage } from 'react-intl'

const Card = ({ item, showLink = true }) => (
  <Link to={`/blog/${item.slug}`}>
    <div className="item-blog card card-shadow is-border-radius">
      <div className="card-content">
        <div className="columns">
          <div className="column is-paddingless has-text-centered">
            <Image className="is-border-radius" src={item.thumbnail} />
          </div>
          <div className="column">
            <span className="is-font-size-24px">{item.title}</span>
            <div className="rectangle" />
            <br />
            {item.description.substring(0, 150)}
          </div>
        </div>
      </div>
    </div>
  </Link>
)

export default Card
