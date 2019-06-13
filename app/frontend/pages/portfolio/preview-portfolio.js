import React, { Component } from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import Image from '~base/components/image'
import { FormattedMessage, injectIntl } from 'react-intl'
import Link from '~base/router/link'
import PropTypes from 'prop-types'

class PreviewPortfolio extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const responsive = {
      0: { items: 1 },
      1024: { items: 5 },
    }
    const { intl } = this.props
    const { formatMessage } = intl

    const images = [
      {
        img: '/public/img/portfolio/por-1.png',
      },
      {
        img: '/public/img/portfolio/por-2.png',
      },
      {
        img: '/public/img/portfolio/por-3.png',
      },
      {
        img: '/public/img/portfolio/por-4.png',
      },
      {
        img: '/public/img/portfolio/por-5.png',
      },
      {
        img: '/public/img/portfolio/por-6.png',
      },
      {
        img: '/public/img/portfolio/por-7.png',
      },
    ]

    return (
      <div>
        <div className="section">
          <div className="columns">
            <div className="column is-offset-one-third is-4 has-text-centered">
              <p className="is-font-size-32px">
                <span>
                  <FormattedMessage
                    id="general.portfolio_preview"
                    values={{
                      discover: (
                        <span className="is-font-blue">
                          <span className="is-font-blue">
                            {formatMessage({ id: 'general.discover' })}
                          </span>
                        </span>
                      ),
                      experiences: (
                        <span className="is-font-blue">
                          <span className="is-font-blue">
                            {formatMessage({ id: 'general.experiences' })}
                          </span>
                        </span>
                      ),
                    }}
                  />
                  <br />
                </span>
              </p>
              <Link className="button is-primary" to="/blog">
                <FormattedMessage id="general.see_all" />
                <i className="fa fa-eye margin-sides-icon" />
              </Link>
            </div>
          </div>
        </div>
        <section className="hero is-light">
          <div className="hero-body">
            <AliceCarousel
              buttonsDisabled
              dotsDisabled
              mouseDragEnabled
              responsive={responsive}
            >
              {images.map((item) => (
                <div className="is-padding-left-small is-padding-right-small">
                  <Image
                    style={{
                      height: 244,
                      width: 385,
                    }}
                    className="is-border-radius"
                    src={item.img}
                    onDragStart={(e) => this.handleOnDragStart(e)}
                  />
                </div>
              ))}
            </AliceCarousel>
          </div>
        </section>
      </div>
    )
  }
}

PreviewPortfolio.propTypes = {
  intl: PropTypes.shape.isRequired,
}

export default injectIntl(PreviewPortfolio)
