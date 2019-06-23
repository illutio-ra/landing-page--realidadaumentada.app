import React, { Component } from 'react'
import Image from '~base/components/image'
import { injectIntl } from 'react-intl'

class Pricing extends Component {
  state = {
    checked: true,
  }

  handlerChange(e) {
    this.setState((prevState) => ({ checked: !prevState.checked }))
  }

  render() {
    const { checked } = this.state
    return (
      <div className="section pricing" id="pricing">
        <div className="has-text-centered is-size-1 is-margin-bottom-large main-title">
          Choose your plan
        </div>

        <div className="columns">
          <div className="column is-1" />
          <div className="column">
            {/* <div className="field has-text-left">
              <input
                id="switchRoundedInfo"
                type="checkbox"
                name="switchRoundedInfo"
                className="switch is-rounded is-switch-blue"
                checked={checked}
              />
              <label
                htmlFor="switchRoundedInfo switch-text"
                onClick={() => this.handlerChange()}
              >
                Monthly
              </label>
            </div> */}
            <div className="pricing-table">
              <div className="pricing-plan card-shadow free">
                <div className="plan-header card-title free-pricing">Basic</div>
                <Image src="/public/img/basic.svg" alt="ra cam" />
                <div className="plan-price">
                  <span className="plan-price-amount price">
                    <span className="plan-price-currency price" />
                    Free
                  </span>
                </div>
                <div className="has-text-centered">
                  <div className="is-margin-bottom-small">Max 200 views</div>
                  <div className="is-margin-bottom-small">2 Targets</div>
                  <div className="is-margin-bottom-small">Free account</div>
                </div>
                <div className="plan-footer">
                  <a
                    className="button is-fullwidth is-outlined is-info"
                    href="https://realidadaumentada.app/admin/register"
                  >
                    Create a new account
                  </a>
                </div>
              </div>
              <div className="pricing-plan pricing-secondary">
                <div className="plan-header pricing-secondary card-title">
                  Pro
                </div>
                <Image src="/public/img/pro.svg" alt="ra cam" />
                <div className="plan-price pricing-secondary">
                  <span className="plan-price-amount price">
                    <span className="plan-price-currency price" />
$ 199.00
                  </span>
                </div>
                <div className="has-text-centered">
                  <div className="is-margin-bottom-small">Max 2,000 views</div>
                  <div className="is-margin-bottom-small">20 Targets</div>
                  <div className="is-margin-bottom-small">Analytics</div>
                  <div className="is-margin-bottom-small">Tech support</div>
                  <div className="is-margin-bottom-small">Customer support</div>
                </div>
                <div className="plan-footer">
                  <a
                    className="button is-fullwidth is-outlined is-info"
                    href="https://realidadaumentada.app/admin/register"
                  >
                    Buy it
                  </a>
                </div>
              </div>
              <div className="pricing-plan pricing-secondary">
                <div className="plan-header pricing-secondary card-title">
                  Business
                </div>
                <Image src="/public/img/bussiness.svg" alt="ra cam" />
                <div className="plan-price pricing-secondary">
                  <span className="plan-price-amount price">
                    <span className="plan-price-currency price" />
$ 399.00
                  </span>
                </div>
                <div className="has-text-centered">
                  <div className="is-margin-bottom-small">Max 6,000 views</div>
                  <div className="is-margin-bottom-small">50 Targets</div>
                  <div className="is-margin-bottom-small">Analytics</div>
                  <div className="is-margin-bottom-small">Tech support</div>
                  <div className="is-margin-bottom-small">Customer support</div>
                </div>
                <div className="plan-footer">
                  <a
                    className="button is-fullwidth is-outlined is-info"
                    href="https://realidadaumentada.app/admin/register"
                  >
                    Buy it
                  </a>
                </div>
              </div>
              <div className="pricing-plan pricing-secondary">
                <div className="plan-header pricing-secondary card-title">
                  Enterprise
                </div>
                <Image src="/public/img/enterprise.svg" alt="ra cam" />
                <div className="plan-price pricing-secondary">
                  <span className="plan-price-amount price">
                    <span className="plan-price-currency price" />
$ 599.00
                  </span>
                </div>
                <div className="has-text-centered">
                  <div className="is-margin-bottom-small">Max 14,000 views</div>
                  <div className="is-margin-bottom-small">100 Targets</div>
                  <div className="is-margin-bottom-small">Analytics</div>
                  <div className="is-margin-bottom-small">Tech support</div>
                  <div className="is-margin-bottom-small">Customer support</div>
                </div>
                <div className="plan-footer">
                  <a
                    className="button is-fullwidth is-outlined is-info"
                    href="https://realidadaumentada.app/admin/register"
                  >
                    Buy it
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-1" />
        </div>
      </div>
    )
  }
}
export default injectIntl(Pricing)
