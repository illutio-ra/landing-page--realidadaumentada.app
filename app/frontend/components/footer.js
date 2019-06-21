/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import Image from '~base/components/image'
import { FormattedMessage, injectIntl } from 'react-intl'
import HubspotForm from 'react-hubspot-form'

class Footer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      classNameModal: '',
    }
  }

  handleModal() {
    this.setState({
      classNameModal: 'is-active',
    })
  }

  render() {
    return (
      <footer className="footer" id="contact">
        <div className="columns columns-footer">
          <div className="column">
            <div className="columns">
              <div className="column">
                <div className="columns">
                  <div className="column is-3 has-text-centered">
                    <Image src="/public/img/f1.svg" alt="brigde" />
                  </div>
                  <div className="column">
                    <p>
                      44 Tehama St, San Francisco, CA 94105 Office: +1 (442) 666
                      1847
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="columns">
              <div className="column">
                <div className="columns">
                  <div className="column is-3 has-text-centered">
                    <Image src="/public/img/f2.svg" alt="brigde" />
                  </div>
                  <div className="column">
                    <p>
                      Lopez Mateos Nte 400 Piso 8, Ladron de Guevara;
                      Guadalajara. Jalisco. Office: +52 (55) 8526 2143 Whatsapp:
                      +521 (55)35626463
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="columns">
              <div className="column">
                <div className="columns">
                  <div className="column is-3 has-text-centered">
                    <Image src="/public/img/f3.svg" alt="brigde" />
                  </div>
                  <div className="column">
                    <p>
                      Puebla 237, Roma Norte; Mexico City, Mexico. Office: +52
                      (55) 8526 2143 Whatsapp: +52 1 (55)35626463
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-6 vertically-centered">
            {/* Disabled because we do not have access to mailchimp */}
            {/* <div className="content mail-chimp">
              <div className="field is-grouped">
                <p className="control is-expanded">
                  <input
                    className="input is-footer-input"
                    type="text"
                    placeholder="Type your email to stay tuned."
                  />
                </p>
                <p className="control">
                  <a className="button is-primary is-inverted is-outlined">
                    Suscribe
                  </a>
                </p>
              </div>
            </div> */}
            <div className="vertically-bottom">
              <Image
                src="/public/img/ar-footer.svg"
                alt="arcam"
                className="img-centered"
              />
            </div>
          </div>
          <div className="column section">
            <div className="content has-text-centered directory">
              <div className="columns">
                <div className="column is-half">
                  <p>
                    <a href="/" className="is-link">
                      <FormattedMessage id="general.link_home" />
                    </a>
                  </p>
                  <p>
                    <a href="/#solutions" className="is-link">
                      <FormattedMessage id="general.link_solutions" />
                    </a>
                  </p>
                  <p>
                    <a href="/#blog" className="is-link">
                      <FormattedMessage id="general.link_blog" />
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://realidadaumentada.app/admin/login"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="is-link"
                    >
                      <FormattedMessage id="general.link_login" />
                    </a>
                  </p>
                </div>
                <div className="column is-half">
                  <p>
                    <a href="/#porfolio" className="is-link">
                      <FormattedMessage id="general.link_app" />
                    </a>
                  </p>
                  <p>
                    <a href="/#pricing" className="is-link">
                      <FormattedMessage id="general.link_pricing" />
                    </a>
                  </p>
                  <p>
                    <a
                      className="is-link"
                      data-target="modal"
                      aria-haspopup="true"
                      onClick={() => this.handleModal()}
                    >
                      <FormattedMessage id="general.link_contact" />
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="columns is-mobile">
              <div className="column is-offset-1">
                <a
                  href="https://facebook.com/illutio"
                  className="media-links"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-facebook" />
                </a>
              </div>
              <div className="column">
                <a
                  href="https://twitter.com/illut_io"
                  className="media-links"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-twitter" />
                </a>
              </div>
              <div className="column">
                <a
                  href="https://www.instagram.com/illutio/"
                  className="media-links"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-instagram" />
                </a>
              </div>
              <div className="column">
                <a
                  href="https://www.youtube.com/user/ILLUTIO1"
                  className="media-links"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-youtube-play" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={`modal ${this.state.classNameModal}`}>
          <div className="modal-background" />
          <div className="modal-content">
            <div className="box">
              <h1 className="has-text-centered title is-2 is-margin-bottom-medium">
                <FormattedMessage id="general.contact_us_footer" />
              </h1>
              <HubspotForm
                portalId="2705799"
                formId="d8b7a2ac-f5bb-4b7a-9963-d8e30844250a"
                onSubmit={() => console.log('Submit!')}
                onReady={(form) => console.log('Form ready!')}
                loading={<div>Loading...</div>}
              />
            </div>
          </div>
          <button
            className="modal-close is-large"
            aria-label="close"
            onClick={() => this.setState({ classNameModal: '' })}
          />
        </div>
      </footer>
    )
  }
}

export default injectIntl(Footer)
