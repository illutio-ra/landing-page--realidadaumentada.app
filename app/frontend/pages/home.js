/* eslint-disable no-unused-vars */
/* eslint-disable jsx-quotes */
import React from 'react'
import PageComponent from '~base/page-component'
import { FormattedMessage, injectIntl } from 'react-intl'

import { forcePublic } from '~base/middlewares/'

import phone from '../../public/img/phone.png'
import planets from '../../public/img/planets.png'
import planet1 from '../../public/img/planet1.png'
import astronaut from '../../public/img/astronaut.png'
import planet2 from '../../public/img/planet2.png'
import planet3 from '../../public/img/planet3.png'
import arrow from '../../public/img/arrow.png'

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
          <img src={phone} id="phone" />
          <img src={planets} id="planets" />
        </div>
        <div className="planets">
          <img src={planet1} id="planet1" />
          <img src={astronaut} id="astronaut" />
          <img src={planet2} id="planet2" />
          <img src={planet3} id="planet3" />
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
          <img src={arrow} id="arrow" />
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
