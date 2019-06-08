/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-quotes */
import React from 'react'
import PageComponent from '~base/page-component'
import { FormattedMessage, injectIntl } from 'react-intl'

import { forcePublic } from '~base/middlewares/'

import Image from '~base/components/image'

class Home extends PageComponent {
  constructor(props) {
    super(props)
    this.state = {
      ...this.baseState,
      name: 'Eric',
      unreadCount: 1000,
    }
  }

  render() {
    const basicStates = super.getBasicStates()
    if (basicStates) {
      return basicStates
    }

    return (
      <section className="app section">
        <div className="container" align="center">
          <p className="title">
            Let your customers <i className="fa fa-heart heart" /> your brand
          </p>
          <p className="title">
            with <span>Augmented Reality</span> experiences.
          </p>
          <a href="#" className="button is-primary">
            Try it now! &nbsp;
            <i className="fa fa-rocket" />
          </a>
        </div>
        <div className="phone">
          <Image src="../../public/img/phone.png" id="phone" alt="ra cam" />
        </div>
        <div className="planets">
          <Image src="../../public/img/planet1.png" id="planet1" alt="ra cam" />
          <Image
            src="../../public/img/astronaut.png"
            id="astronaut"
            alt="ra cam"
          />
          <Image src="../../public/img/planet2.png" id="planet2" alt="ra cam" />
          <Image src="../../public/img/arrow.png" id="planet3" alt="ra cam" />
        </div>
        <div className="container">
          <div className="columns">
            <div className="column">
              <p>
                <strong>Create</strong>, <strong>publish</strong> and{' '}
                <strong>measure</strong>
                <br />
                awesome Augmented Reality
                <br />
                campaigns
              </p>
            </div>
            <div className="column" align="center">
              <p>
                <strong>See how it works</strong>
              </p>
              <a href="#" className="button is-primary">
                Play video &nbsp;
                <i className="fa fa-play" />
              </a>
            </div>
          </div>
          <Image src="../../public/img/arrow.png" id="arrow" alt="ra cam" />
        </div>
      </section>
    )
  }
}

Home.config({
  path: '/',
  title: 'RA CAM',
  validate: forcePublic,
  exact: true,
})

export default injectIntl(Home)
