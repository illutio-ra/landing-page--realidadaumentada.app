import React, { Component } from 'react'
import Image from '~base/components/image'
import { injectIntl } from 'react-intl'

class Footer extends Component {
  async componentDidMount() {
    await this.loadData()
  }

  render() {
    return (
      <footer className="footer">
        <div className="columns">
          <div className="column">
            <div className="columns">
              <div className="column">
                <p>
                  44 Tehama St, San Francisco, CA 94105 Office: +1 (442) 666
                  1847
                </p>
              </div>
            </div>
            <div className="columns">
              <div className="column">
                <p>
                  44 Tehama St, San Francisco, CA 94105 Office: +1 (442) 666
                  1847
                </p>
              </div>
            </div>
            <div className="columns">
              <div className="column">
                <p>
                  44 Tehama St, San Francisco, CA 94105 Office: +1 (442) 666
                  1847
                </p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="content has-text-centered">
              <div className="field is-grouped">
                <p className="control is-expanded">
                  <input
                    className="input"
                    type="text"
                    placeholder="Find a repository"
                  />
                </p>
                <p className="control">
                  <a className="button is-primary is-inverted is-outlined">
                    Suscribe
                  </a>
                </p>
              </div>

              <Image src="/public/img/ar-footer.svg" alt="arcam" />
            </div>
          </div>
          <div className="column">
            <div className="content has-text-centered">
              <p />
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default injectIntl(Footer)
