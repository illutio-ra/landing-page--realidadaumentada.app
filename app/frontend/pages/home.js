/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import PageComponent from '~base/page-component'
import { FormattedMessage, injectIntl } from 'react-intl'
import { forcePublic } from '~base/middlewares/'
import Image from '~base/components/image'
import PreviewPortfolio from './portfolio/preview-portfolio'
import PreviewBlog from './blog/components/preview-blog'
import LetsStart from './lets-start'
import Pricing from './pricing'

class Home extends PageComponent {
  constructor(props) {
    super(props)
    this.state = {
      ...this.baseState,
      classNameModal: '',
    }
  }

  render() {
    const { formatMessage } = this.props.intl
    return (
      <section className="app section">
        <div className="container" align="center">
          <p className="has-text-black header-title">
            <FormattedMessage
              id="general.intro"
              values={{
                icon: <i className="fa fa-heart heart margin-sides-icon" />,
              }}
            />
          </p>
          <p className="has-text-black header-title">
            <FormattedMessage
              id="general.subtitle"
              values={{
                span: (
                  <span className="is-font-blue">
                    {formatMessage({ id: 'general.augmented_reality' })}
                  </span>
                ),
              }}
            />
          </p>
          <a
            href="https://realidadaumentada.app/admin/register"
            type="button"
            target="_blank"
            className="button btn-primary margin-button"
          >
            <FormattedMessage id="general.try_now" />
            <i className="fa fa-rocket margin-sides-icon" />
          </a>
        </div>
        <div className="phone">
          <Image src="/public/img/planets.svg" id="phone" alt="ra cam" />
        </div>
        <div className="planets">
          <Image src="/public/img/planet1.svg" id="planet1" alt="ra cam" />
          <Image src="/public/img/astronaut.svg" id="astronaut" alt="ra cam" />
          <Image src="/public/img/planet2.svg" id="planet2" alt="ra cam" />
          <Image src="/public/img/planet3.svg" id="planet3" alt="ra cam" />
        </div>
        <div className="container section">
          <div className="columns">
            <div className="column">
              <p className="title">
                <span className="is-font-blue">
                  <FormattedMessage id="general.create" />
                </span>
                {', '}
                <span className="is-font-blue">
                  <FormattedMessage id="general.publish" />
                  {' '}
                </span>
                <FormattedMessage id="general.and" />
                {' '}
                <span className="is-font-blue">
                  <FormattedMessage id="general.measure" />
                </span>
                <br />
                <FormattedMessage
                  id="general.awesome_campaigns"
                  values={{
                    augmented_reality: (
                      <span className="is-font-blue">
                        {formatMessage({ id: 'general.augmented_reality' })}
                      </span>
                    ),
                  }}
                />
                <br />
              </p>
            </div>
            <div className="column video" align="right">
              <p className="title is-hidden-touch">
                <strong className="is-font-blue">
                  <FormattedMessage id="general.see_how_works" />
                </strong>
              </p>
              <a
                href="https://www.youtube.com/watch?v=7T6-XYZdnRc&t=4s"
                target="_blank"
              >
                <Image
                  src="../../public/img/video.png"
                  alt="ra cam"
                  className="is-button-video"
                />
              </a>

              <div className={`modal ${this.state.classNameModal}`}>
                <div className="modal-background" />
                <div className="modal-content">
                  <div className="box">
                    <h1 className="has-text-centered title is-2 is-margin-bottom-medium">
                      Contáctanos
                    </h1>
                    {/* <HubspotForm
                      portalId="2705799"
                      formId="d8b7a2ac-f5bb-4b7a-9963-d8e30844250a"
                      onSubmit={() => console.log('Submit!')}
                      onReady={(form) => console.log('Form ready!')}
                      loading={<div>Loading...</div>}
                    /> */}
                  </div>
                </div>
                {/*  <button
                  className="modal-close is-large"
                  aria-label="close"
                  onClick={() => this.setState({ classNameModal: '' })}
                /> */}
              </div>
            </div>
          </div>
          <Image
            src="/public/img/arrow.svg"
            className="is-hidden-touch"
            id="arrow"
            alt="ra cam"
          />
        </div>

        <LetsStart />
        <PreviewPortfolio />
        <Pricing />
        <br />
        <br />
        <div className="container">
          <PreviewBlog seAll />
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
