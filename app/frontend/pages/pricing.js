import React, { Component } from 'react'
import Image from '~base/components/image'
import { injectIntl } from 'react-intl'

class Pricing extends Component {
  async componentDidMount() {
    await this.loadData()
  }

  render() {
    return (
      <div className="section pricing">
        <div className="has-text-centered is-size-1 is-margin-bottom-large main-title">
          Choose your plan
        </div>
        <div className="field has-text-centered">
          <input
            id="switchRoundedInfo"
            type="checkbox"
            name="switchRoundedInfo"
            className="switch is-rounded is-switch-blue"
            checked="checked"
          />
          <label htmlFor="switchRoundedInfo switch-text">Monthly</label>
        </div>
        <div className="pricing-table">
          <div className="pricing-plan is-box-shadowed grow">
            <div className="plan-header card-title">Basic</div>
            <Image src="/public/img/basic.svg" alt="ra cam" />
            <div className="plan-price">
              <span className="plan-price-amount price">
                <span className="plan-price-currency price" />
$ 0.00
              </span>
            </div>
            <div className="has-text-centered">
              <div className="is-margin-bottom-small">Max 200 views</div>
              <div className="is-margin-bottom-small">2 Targets</div>
              <div className="is-margin-bottom-small">Free account</div>
            </div>
            <div className="plan-footer">
              <a
                className="button is-fullwidth is-info is-bg-blue"
                href="https://realidadaumentada.app/admin/register"
              >
                Create a new account
              </a>
            </div>
          </div>

          <div className="pricing-plan is-box-shadowed grow">
            <div className="plan-header card-title">Pro</div>
            <Image src="/public/img/pro.svg" alt="ra cam" />
            <div className="plan-price">
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
                className="button is-fullwidth is-info is-bg-blue"
                href="https://realidadaumentada.app/admin/register"
              >
                Buy it
              </a>
            </div>
          </div>

          <div className="pricing-plan is-box-shadowed grow">
            <div className="plan-header card-title">Bussiness</div>
            <Image src="/public/img/bussiness.svg" alt="ra cam" />
            <div className="plan-price">
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
                className="button is-fullwidth is-info is-bg-blue"
                href="https://realidadaumentada.app/admin/register"
              >
                Buy it
              </a>
            </div>
          </div>

          <div className="pricing-plan is-box-shadowed grow">
            <div className="plan-header card-title">Enterprise</div>
            <Image src="/public/img/enterprise.svg" alt="ra cam" />
            <div className="plan-price">
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
                className="button is-fullwidth is-info is-bg-blue"
                href="https://realidadaumentada.app/admin/register"
              >
                Buy it
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default injectIntl(Pricing)
