import React, { Component } from 'react'
import Image from '~base/components/image'
import { injectIntl, FormattedMessage } from 'react-intl'

class Pricing extends Component {
  state = {
    checked: false,
  }

  handlerChange(e) {
    this.setState((prevState) => ({ checked: !prevState.checked }))
  }

  render() {
    const { checked } = this.state
    const { intl } = this.props
    return (
      <div className="section pricing" id="pricing">
        <div className="has-text-centered is-size-1 is-margin-bottom-large main-title">
          <FormattedMessage id="general.plan_choose" />
        </div>

        <div className="columns">
          <div className="column is-1" />
          <div className="column">
            <div className="field has-text-centered">
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
                {checked
                  ? intl.formatMessage({ id: 'general.yearly' })
                  : intl.formatMessage({ id: 'general.monthly' })}
              </label>
            </div>
            <div className="pricing-table">
              <div className="pricing-plan card-shadow free">
                <div className="plan-header card-title free-pricing">
                  <FormattedMessage id="general.plan_basic" />
                </div>
                <Image src="/public/img/basic.svg" alt="ra cam" />
                <div className="plan-price">
                  <span className="plan-price-amount price">
                    <span className="plan-price-currency price" />
                    <FormattedMessage id="general.plan_free" />
                  </span>
                </div>
                <div className="has-text-centered">
                  <div className="is-margin-bottom-small">
                    <FormattedMessage id="general.plan_200_views" />
                  </div>
                  <div className="is-margin-bottom-small">
                    <FormattedMessage id="general.2_targets" />
                  </div>
                  <div className="is-margin-bottom-small">
                    <FormattedMessage id="general.plan_free_account" />
                  </div>
                </div>
                <div className="plan-footer">
                  <a
                    className="button is-fullwidth is-outlined is-info"
                    href="https://realidadaumentada.app/admin/register"
                  >
                    <FormattedMessage id="general.plan_create_new_account" />
                  </a>
                </div>
              </div>
              <div className="pricing-plan pricing-secondary">
                <div className="plan-header pricing-secondary card-title">
                  <FormattedMessage id="general.plan_pro" />
                </div>
                <Image src="/public/img/pro.svg" alt="ra cam" />
                <div className="plan-price pricing-secondary">
                  <span className="plan-price-amount price">
                    <span className="plan-price-currency price" />
                    {checked === false && '$ 199 USD'}
                    {checked === true && '$ 1990 USD'}
                  </span>
                </div>
                <div className="has-text-centered">
                  <div className="is-margin-bottom-small">
                    <FormattedMessage id="general.plan_2000_views" />
                  </div>
                  <div className="is-margin-bottom-small">
                    <FormattedMessage id="general.plan_20_targets" />
                  </div>
                  <div className="is-margin-bottom-small">
                    <FormattedMessage id="general.plan_analytics" />
                  </div>
                  <div className="is-margin-bottom-small">
                    <FormattedMessage id="general.plan_tech_support" />
                  </div>
                  <div className="is-margin-bottom-small">
                    <FormattedMessage id="general.plan_customer_support" />
                  </div>
                </div>
                <div className="plan-footer">
                  <a
                    className="button is-fullwidth is-outlined is-info"
                    href="https://realidadaumentada.app/admin/register"
                  >
                    <FormattedMessage id="general.plan_buy_it" />
                  </a>
                </div>
              </div>
              <div className="pricing-plan pricing-secondary">
                <div className="plan-header pricing-secondary card-title">
                  <FormattedMessage id="general.plan_business" />
                </div>
                <Image src="/public/img/bussiness.svg" alt="ra cam" />
                <div className="plan-price pricing-secondary">
                  <span className="plan-price-amount price">
                    <span className="plan-price-currency price" />
                    {checked === false && '$ 399 USD'}
                    {checked === true && '$ 3990 USD'}
                  </span>
                </div>
                <div className="has-text-centered">
                  <div className="is-margin-bottom-small">
                    <FormattedMessage id="general.plan_6000_views" />
                  </div>
                  <div className="is-margin-bottom-small">
                    <FormattedMessage id="general.plan_50_targets" />
                  </div>
                  <div className="is-margin-bottom-small">
                    <FormattedMessage id="general.plan_analytics" />
                  </div>
                  <div className="is-margin-bottom-small">
                    <FormattedMessage id="general.plan_tech_support" />
                  </div>
                  <div className="is-margin-bottom-small">
                    <FormattedMessage id="general.plan_customer_support" />
                  </div>
                </div>
                <div className="plan-footer">
                  <a
                    className="button is-fullwidth is-outlined is-info"
                    href="https://realidadaumentada.app/admin/register"
                  >
                    <FormattedMessage id="general.plan_buy_it" />
                  </a>
                </div>
              </div>
              <div className="pricing-plan pricing-secondary">
                <div className="plan-header pricing-secondary card-title">
                  <FormattedMessage id="general.plan_enterprise" />
                </div>
                <Image src="/public/img/enterprise.svg" alt="ra cam" />
                <div className="plan-price pricing-secondary">
                  <span className="plan-price-amount price">
                    <span className="plan-price-currency price" />
                    {checked === false && '$ 599 USD'}
                    {checked === true && '$ 5990 USD'}
                  </span>
                </div>
                <div className="has-text-centered">
                  <div className="is-margin-bottom-small">
                    <FormattedMessage id="general.plan_14000_views" />
                  </div>
                  <div className="is-margin-bottom-small">
                    <FormattedMessage id="general.plan_100_targets" />
                  </div>
                  <div className="is-margin-bottom-small">
                    <FormattedMessage id="general.plan_analytics" />
                  </div>
                  <div className="is-margin-bottom-small">
                    <FormattedMessage id="general.plan_tech_support" />
                  </div>
                  <div className="is-margin-bottom-small">
                    <FormattedMessage id="general.plan_customer_support" />
                  </div>
                </div>
                <div className="plan-footer">
                  <a
                    className="button is-fullwidth is-outlined is-info"
                    href="https://realidadaumentada.app/admin/register"
                  >
                    <FormattedMessage id="general.plan_buy_it" />
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
