import React from 'react'
import Image from '~base/components/image'
import { injectIntl } from 'react-intl'

const Footer = () => (
  <footer className="footer">
    <div className="columns columns-footer">
      <div className="column">
        <div className="columns">
          <div className="column">
            <div className="columns">
              <div className="column is-2 has-text-centered">
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
              <div className="column is-2 has-text-centered">
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
              <div className="column is-2 has-text-centered">
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
      <div className="column align-self is-6">
        <div className="columns is-mobile">
          <div className="column is-half is-offset-one-quarter">
            <div className="content has-text-centered">
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
              <div className="is-margin-top-medium">
                <Image src="/public/img/ar-footer.svg" alt="arcam" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="column">
        <div className="content has-text-centered directory">
          <div className="columns">
            <div className="column is-half is-offset-one-quarter">
              <p>Home</p>
              <p>Solutions</p>
              <p>Sign in / Log in</p>
            </div>
            <div className="column">
              <p>AR app</p>
              <p>Pricing</p>
              <p>Contact</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
)

export default injectIntl(Footer)
