import React, { Component } from 'react'
import Image from '~base/components/image'
import Slider from 'react-slick'
import { FormattedMessage, injectIntl } from 'react-intl'
import Link from '~base/router/link'

const images = [
  {
    img: '/public/img/logos/1.png',
    imgBig: '/public/img/logos/1.png',
    width: 240,
    height: 270,
  },
  {
    img: '/public/img/logos/2.png',
    imgBig: '/public/img/logos/2.png',
    width: 440,
    height: 570,
  },
  {
    img: '/public/img/logos/3.png',
    imgBig: '/public/img/logos/3.png',
    width: 440,
    height: 570,
  },
  {
    img: '/public/img/logos/4.png',
    imgBig: '/public/img/logos/4.png',
    width: 440,
    height: 570,
  },
  {
    img: '/public/img/logos/5.png',
    imgBig: '/public/img/logos/5.png',
    width: 440,
    height: 570,
  },
  {
    img: '/public/img/logos/6.png',
    imgBig: '/public/img/logos/6.png',
    width: 440,
    height: 300,
  },
  {
    img: '/public/img/logos/7.png',
    imgBig: '/public/img/logos/7.png',
    width: 440,
    height: 300,
  },
]

class BrandSlider extends Component {
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
      slidesToShow: 6,
      speed: 500,
      slidesToScroll: 6,
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
      <div className="section">
        <Slider {...settings}>
          {images.map((item, i) => (
            <div className="container-img-portfolio is-padding-left-small is-padding-right-small is-padding-top-small is-padding-bottom-small">
              <Image class="brand-slider-2" src={item.img} />
            </div>
          ))}
        </Slider>
      </div>
    )
  }
}
export default injectIntl(BrandSlider)
