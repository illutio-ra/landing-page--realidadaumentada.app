/* eslint-disable eol-last */
import React from 'react'
import { FormattedMessage } from 'react-intl'
import ScrollAnimation from 'react-animate-on-scroll'
import Lottie from 'react-lottie'
import animation1 from './animacion-1.json'
import animation2 from './animacion-2.json'
import animation3 from './animacion-3.json'


const defaultOptions1 = {
  loop: true,
  autoplay: true,
  animationData: animation1,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

const defaultOptions2 = {
  loop: true,
  autoplay: true,
  animationData: animation2,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

const defaultOptions3 = {
  loop: true,
  autoplay: true,
  animationData: animation3,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

const LetsStart = () => (
  <section className="container section" id="lets-start">
    <div className="columns">
      <div className="column">
        <ScrollAnimation animateIn="bounceInLeft" animateOut="bounceOutLeft">
          <Lottie
            options={defaultOptions1}
            isStopped={false}
            isPaused={false}
          />
        </ScrollAnimation>
      </div>
      <div className="column is-right vertically-centered" id="solutions">
        <div className="section">
          <p className="title">
            <span className="is-font-blue">
              <FormattedMessage id="general.give" />
            </span>
            &nbsp;
            <FormattedMessage id="general.your_customers" />
            <br />
            <span className="is-font-blue">
              <FormattedMessage id="general.incredible_experiences" />
            </span>
          </p>
          <p className="text">
            <FormattedMessage id="general.upgrade_text" />
            <br />
            <strong>
              <FormattedMessage id="general.no_coding" />
            </strong>
          </p>
        </div>
      </div>
    </div>
    <div className="columns">
      <div className="column is-hidden-desktop">
        <ScrollAnimation animateIn="bounceInRight" animateOut="bounceOutRight">
          <Lottie
            options={defaultOptions3}
            isStopped={false}
            isPaused={false}
          />
        </ScrollAnimation>
      </div>
      <div className="column vertically-centered">
        <div className="section">
          <p className="title">
            <span className="is-font-blue">
              <FormattedMessage id="general.printed_images" />
            </span>
            <br />
            <FormattedMessage id="general.comes" />
            {' '}
            <span className="is-font-blue">
              <FormattedMessage id="general.to_life" />
            </span>
          </p>
        </div>
      </div>
      <div className="column is-hidden-touch">
        <ScrollAnimation animateIn="bounceInRight" animateOut="bounceOutRight">
          <Lottie
            options={defaultOptions3}
            isStopped={false}
            isPaused={false}
          />
        </ScrollAnimation>
      </div>
    </div>

    <div className="columns">
      <div className="column">
        <ScrollAnimation animateIn="bounceInLeft" animateOut="bounceOutLeft">
          <Lottie
            options={defaultOptions2}
            isStopped={false}
            isPaused={false}
          />
        </ScrollAnimation>
      </div>
      <div className="column is-right vertically-centered" id="solutions">
        <div className="section">
          <p className="title">
            <span className="is-font-blue">
              <FormattedMessage id="general.measure_uc" />
            </span>
            {' '}
            <FormattedMessage id="general.real_impact" />
            <br />
            <FormattedMessage id="general.of" />
            {' '}
            <span className="is-font-blue">
              <FormattedMessage id="general.campaigns" />
            </span>
          </p>
          <p className="text">
            <FormattedMessage id="general.about_interaction" />
          </p>
          <div className="centered-in-touch">
            <a
              href="https://realidadaumentada.app/admin/register"
              type="button"
              className="button btn-primary margin-button"
            >
              <FormattedMessage id="general.lets_start" />
              <i className="fa fa-smile-o margin-sides-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
)
export default LetsStart
