/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Image from '~base/components/image'
import { FormattedMessage, injectIntl } from 'react-intl'

const Footer = () => (
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
                  Lopez Mateos Nte 400 Piso 8, Ladron de Guevara; Guadalajara.
                  Jalisco. Office: +52 (55) 8526 2143 Whatsapp: +521
                  (55)35626463
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
                  Puebla 237, Roma Norte; Mexico City, Mexico. Office: +52 (55)
                  8526 2143 Whatsapp: +52 1 (55)35626463
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="column is-6 vertically-centered is-flex-1">
        <div className="content mail-chimp">
          <div className="field is-grouped">
            <p className="control is-expanded">
              <input
                className="input"
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
        </div>
        <div className="vertically-bottom">
          <Image src="/public/img/ar-footer.svg" alt="arcam" />
        </div>
      </div>
      <div className="column is-flex">
        <div className="content has-text-centered directory">
          <div className="columns">
            <div className="column is-half is-offset-10">
              <p>
                <a href="/" className="is-link">
                  <FormattedMessage id="general.link_home" />
                </a>
              </p>
              <p>
                <a href="#solutions" className="is-link">
                  <FormattedMessage id="general.link_solutions" />
                </a>
              </p>
              <p className="is-link">Log in</p>
            </div>
            <div className="column">
              <p>
                <a href="#app" className="is-link">
                  <FormattedMessage id="general.link_app" />
                </a>
              </p>
              <p>
                <a href="#pricing" className="is-link">
                  <FormattedMessage id="general.link_pricing" />
                </a>
              </p>
              <p className="is-link">
                <FormattedMessage id="general.link_contact" />
              </p>
            </div>
          </div>
        </div>
        <div className="vertically-bottom">
          <div className="columns is-mobile">
            <div className="column">
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
    </div>
  </footer>
)

export default injectIntl(Footer)
