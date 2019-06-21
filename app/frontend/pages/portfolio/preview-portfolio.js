import React, { Component } from 'react'
import Image from '~base/components/image'
import Slider from 'react-slick'
import { FormattedMessage, injectIntl } from 'react-intl'
import Link from '~base/router/link'

const images = [
  {
    img: '/public/img/portfolio/1.png',
    imgBig: '/public/img/portfolio/1-1.png',
    width: 440,
    height: 570,
  },
  {
    img: '/public/img/portfolio/2.png',
    imgBig: '/public/img/portfolio/2-1.png',
    width: 440,
    height: 570,
  },
  {
    img: '/public/img/portfolio/3.png',
    imgBig: '/public/img/portfolio/3-1.png',
    width: 440,
    height: 570,
  },
  {
    img: '/public/img/portfolio/4.png',
    imgBig: '/public/img/portfolio/4-1.png',
    width: 440,
    height: 570,
  },
  {
    img: '/public/img/portfolio/5.png',
    imgBig: '/public/img/portfolio/5-1.png',
    width: 440,
    height: 570,
  },
  {
    img: '/public/img/portfolio/6.png',
    imgBig: '/public/img/portfolio/6-1.png',
    width: 440,
    height: 300,
  },
  {
    img: '/public/img/portfolio/7.png',
    imgBig: '/public/img/portfolio/7-1.png',
    width: 440,
    height: 300,
  },
]

class SimpleSlider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: null,
    }
  }

  setActive(item) {
    this.setState({
      selected: item,
    })
  }

  render() {
    const settings = {
      className: 'center',
      centerMode: true,
      infinite: true,
      slidesToShow: 4,
      speed: 500,
      slidesToScroll: 4,
      pauseOnHover: false,
      adaptiveHeight: true,
      arrows: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    }

    const { selected } = this.state
    const { intl: { formatMessage } } = this.props

    return (
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
            <Link className="button btn-primary" to="/portfolio">
              <FormattedMessage id="general.see_all" />
              <i className="fa fa-eye margin-sides-icon" />
            </Link>
          </div>
        </div>

        {selected && (
          <div className="modal is-active">
            <div className="modal-background" />
            <div className="modal-content">
              <div className="section">
                <div className="columns">
                  <div className="column has-text-white has-text-centered">
                    <i className="fa fa-camera margin-sides-icon" />
                    <FormattedMessage id="general.scan_with_ra-cam" />
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-7 has-text-centered">
                    <Image
                      style={{
                        height: selected.height,
                        width: selected.width,
                      }}
                      className="is-border-radius"
                      src={selected.imgBig}
                    />
                  </div>
                  <div className="column">
                    <h2 className="title is-2 has-text-white">
                      ¿Qué es Lorem Ipsum?
                    </h2>
                    <p className="has-text-white">
                      Lorem Ipsum es simplemente el texto de relleno de las
                      imprentas y archivos de texto. Lorem Ipsum ha sido el
                      texto de relleno estándar de las industrias desde el año
                      1500, cuando un impresor (N. del T. persona que se dedica
                      a la imprenta) desconocido usó una galería de textos y los
                      mezcló de tal manera que logró hacer un libro de textos
                      especimen. No sólo sobrevivió 500 años, sino que tambien
                      ingresó como texto de relleno en d
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <button
              type="button"
              className="modal-close is-large"
              onClick={() => this.setState({
                selected: null,
              })
              }
              aria-label="close"
            />
          </div>
        )}

        <Slider {...settings}>
          {images.map((item, i) => (
            <div className="container-img-portfolio is-border-radius is-padding-left-small is-padding-right-small is-padding-top-small is-padding-bottom-small">
              <Image className="is-border-radius" src={item.img} />

              <button
                type="button"
                onClick={() => this.setActive(item)}
                className="button see-detail-portfolio btn-primary"
              >
                <FormattedMessage id="general.see_detail" />
                <i className="fa fa-eye margin-sides-icon" />
              </button>
            </div>
          ))}
        </Slider>
      </div>
    )
  }
}
export default injectIntl(SimpleSlider)
