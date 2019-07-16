import React, { Component } from 'react'
import Image from '~base/components/image'
import { FormattedMessage, injectIntl } from 'react-intl'
import HubspotForm from 'react-hubspot-form'
import api from '~base/api'

class Footer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      classNameModal: '',
      email: '',
      subscribed: false,
    }
  }

  onChange(e) {
    const { target } = e
    this.setState({ email: target.value })
  }

  async handleSubmit(e) {
    e.preventDefault()
    const { email } = this.state
    await api.post('/public/subscribe-newsletter', {
      email_address: email,
    })
    this.setState({
      email: '',
      subscribed: true,
    })
  }

  handleModal() {
    this.setState({
      classNameModal: 'is-active',
    })
  }

  render() {
    const { email, subscribed, classNameModal } = this.state
    const { intl } = this.props
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
          <div className="column">
            {subscribed ? (
              <div className="has-text-centered">
                <h4 className="title is-4 has-text-white">
                  <FormattedMessage id="general.subscribed" />
                </h4>
                <br />
              </div>
            ) : (
              <div className="columns">
                <div className="column">
                  <form onSubmit={(e) => this.handleSubmit(e)}>
                    <div className="content mail-chimp">
                      <div className="field is-grouped">
                        <p className="control is-expanded">
                          <input
                            onChange={(e) => this.onChange(e)}
                            value={email}
                            className="input is-footer-input"
                            type="text"
                            name="email"
                            placeholder={intl.formatMessage({
                              id: `general.placeholder_email`,
                            })}
                          />
                        </p>
                        <p className="control">
                          <button
                            type="submit"
                            className="button is-primary is-inverted is-outlined"
                          >
                            <FormattedMessage id="general.subscribe" />
                          </button>
                        </p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            )}
            <div className="columns">
              <div className="column">
                <Image
                  src="/public/img/ar-footer.svg"
                  alt="arcam"
                  className="img-centered"
                />
              </div>
            </div>
          </div>
          <div className="column section">
            <div className="content has-text-centered directory">
              <div className="columns">
                <div className="column is-half">
                  <p>
                    <a href="/" className="has-text-white">
                      <FormattedMessage id="general.link_home" />
                    </a>
                  </p>
                  <p>
                    <a href="/#solutions" className="has-text-white">
                      <FormattedMessage id="general.link_solutions" />
                    </a>
                  </p>
                  <p>
                    <a href="/#blog" className="has-text-white">
                      <FormattedMessage id="general.link_blog" />
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://realidadaumentada.app/admin/login"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="has-text-white"
                    >
                      <FormattedMessage id="general.link_login" />
                    </a>
                  </p>
                </div>
                <div className="column is-half">
                  <p>
                    <a href="/#portfolio" className="has-text-white">
                      <FormattedMessage id="general.link_app" />
                    </a>
                  </p>
                  <p>
                    <a href="/#pricing" className="has-text-white">
                      <FormattedMessage id="general.link_pricing" />
                    </a>
                  </p>
                  <p>
                    <a
                      className="has-text-white"
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
        <div className={`modal ${classNameModal}`}>
          <div className="modal-background" />
          <div className="modal-content">
            <div className="box">
              <h1 className="has-text-centered title is-2 is-margin-bottom-medium">
                <FormattedMessage id="general.contact_us_footer" />
              </h1>
              <HubspotForm
                portalId="2705799"
                formId="d8b7a2ac-f5bb-4b7a-9963-d8e30844250a"
                onSubmit={() => {
                  console.info('Submit!')
                }}
                onReady={() => {
                  console.info('Form ready!')
                }}
                loading={<div>Loading...</div>}
              />
            </div>
          </div>
          <button
            type="button"
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
