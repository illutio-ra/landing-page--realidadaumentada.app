import React from 'react'
import Image from '~base/components/image'
import Link from '~base/router/link'
import { FormattedMessage } from 'react-intl'

const Card = ({ item, showLink }) => (
  <div className="item-blog card card-shadow is-border-radius">
    <div className="card-content">
      <div className="columns">
        <div className="column is-paddingless has-text-centered">
          <Image
            className="is-border-radius"
            src={item.imagePreview}
          />
        </div>
        <div className="column">
          <span className="is-font-size-24px">{item.title}</span>
          <div className="rectangle" />
          <br />
          {item.description.substring(0, 150)}
        </div>
      </div>
      {showLink && (
        <Link className="button" to={`/blog/${item.slug}`}>
          <FormattedMessage id="general.detail" />
        </Link>
      )}
    </div>
  </div>
)

export default Card
