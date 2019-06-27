import React, { Component } from 'react'
import Image from '~base/components/image'
import Slider from 'react-slick'
import { FormattedMessage, injectIntl } from 'react-intl'
import ScrollAnimation from 'react-animate-on-scroll'

const images = [
  {
    id: 'chilis',
    visible: true,
    name: 'AR CAM',
    img: '/public/img/portfolio/1.png',
    imgBig: '/public/img/portfolio/1-1.png',
    width: 440,
    height: 570,
  },
  {
    id: 'superbrands',
    visible: true,
    name: 'Superbrands',
    img: '/public/img/portfolio/2.png',
    imgBig: '/public/img/portfolio/2-1.png',
    width: 440,
    height: 570,
  },
  {
    id: 'miller',
    visible: true,
    name: 'AR CAM',
    img: '/public/img/portfolio/3.png',
    imgBig: '/public/img/portfolio/3-1.png',
    width: 440,
    height: 570,
  },
  {
    id: 'castle',
    visible: true,
    name: 'AR CAM',
    img: '/public/img/portfolio/4.png',
    imgBig: '/public/img/portfolio/4-1.png',
    width: 440,
    height: 570,
  },
  {
    id: '',
    visible: false,
    name: '',
    img: '/public/img/portfolio/5.png',
    imgBig: '/public/img/portfolio/5-1.png',
    width: 440,
    height: 570,
  },
  {
    id: '',
    visible: false,
    name: '',
    img: '/public/img/portfolio/6.png',
    imgBig: '/public/img/portfolio/6-1.png',
    width: 440,
    height: 300,
  },
  {
    id: '',
    visible: false,
    name: '',
    img: '/public/img/portfolio/7.png',
    imgBig: '/public/img/portfolio/7-1.png',
    width: 440,
    height: 300,
  },
  {
    id: '',
    visible: false,
    name: '',
    img: '/public/img/portfolio/8.png',
    imgBig: '/public/img/portfolio/8-1.png',
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
      classid: 'center',
      classvisible: 'center',
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
    const {
      intl: { formatMessage },
    } = this.props

    return (
      <div className="section" id="portfolio">
        <div className="columns">
          <div className="column is-offset-2 is-8 has-text-centered">
            <ScrollAnimation animateIn="fadeIn">
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
              <p className="is-font-size-24px">
                <FormattedMessage
                  id="general.download_racam"
                  values={{
                    brand: (
                      <span className="is-font-blue">
                        <span className="is-font-blue">
                          {formatMessage({ id: 'general.brand' })}
                        </span>
                      </span>
                    ),
                  }}
                />
              </p>
            </ScrollAnimation>

            <a href="https://play.google.com/store/apps/details?id=com.illutio.realidadaumentada">
              <Image
                className="is-border-radius"
                src="/public/img/android-store.png"
              />
            </a>
            <a href="https://apps.apple.com/us/app/ra-cam/id1349482894">
              <Image
                className="is-border-radius"
                src="/public/img/ios-store.png"
              />
            </a>
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
                      {selected.name}
                    </h2>
                    <p className="has-text-white">
                      <FormattedMessage
                        id={`general.portfolio_${selected.id}`}
                      />
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

              {item.visible && (
                <button
                  type="button"
                  onClick={() => this.setActive(item)}
                  className="button btn is-primary see-detail-portfolio"
                >
                  <FormattedMessage id="general.see_detail" />
                  <i className="fa fa-eye margin-sides-icon" />
                </button>
              )}
            </div>
          ))}
        </Slider>
      </div>
    )
  }
}
export default injectIntl(SimpleSlider)
