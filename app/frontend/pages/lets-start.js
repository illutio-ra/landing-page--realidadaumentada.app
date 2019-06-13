/* eslint-disable eol-last */
import React from 'react'
import { FormattedMessage } from 'react-intl'

import Image from '~base/components/image'

const LetsStart = () => (
  <section className="container section" id="lets-start">
    <div className="columns">
      <div className="column">
        <Image
          src="../../public/img/incredible_experiences.png"
          className="img-centered"
        />
      </div>
      <div className="column is-right vertically-centered">
        <div>
          <p className="title">
            <span className="is-font-blue">
              <FormattedMessage id="general.give" />
            </span>
            &nbsp;
            <FormattedMessage id="general.your_customers" />
          </p>
          <p className="title">
            <span className="is-font-blue">
              <FormattedMessage id="general.incredible_experiences" />
            </span>
          </p>
          <p className="text">
            <FormattedMessage id="general.upgrade_text" />
            <strong>
              <FormattedMessage id="general.no_coding" />
            </strong>
            <FormattedMessage id="general.it_works" />
          </p>
        </div>
      </div>
    </div>
    <div className="columns">
      <div className="column is-hidden-desktop">
        <Image
          src="../../public/img/customer_data.png"
          className="img-centered"
        />
      </div>
      <div className="column vertically-centered">
        <div>
          <p className="title">
            <span className="is-font-blue">
              <FormattedMessage id="general.take_back" />
            </span>
            <FormattedMessage id="general.control_of_your" />
          </p>
          <p className="title">
            <span className="is-font-blue">
              <FormattedMessage id="general.customers_data" />
            </span>
          </p>
          <p className="text">
            <FormattedMessage id="general.real_information" />
          </p>
          <div className="centered-in-touch">
            <button type="button" className="button is-primary">
              <FormattedMessage id="general.lets_start" />
              <i className="fa fa-smile-o margin-sides-icon" />
            </button>
          </div>
        </div>
      </div>
      <div className="column is-hidden-touch">
        <Image
          src="../../public/img/customer_data.png"
          className="img-centered"
        />
      </div>
    </div>
  </section>
)
export default LetsStart
