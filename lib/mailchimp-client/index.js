const request = require('lib/request')
const config = require('config/mailchimp')

class MailchimpApi {
  constructor() {}

  getHeaders() {
    const encoded = Buffer.from(
      `anystring:${config.key}`,
    ).toString('base64')
    return `Basic ${encoded}`
  }

  async subscribe(email) {
    const options = {
      method: 'POST',
      headers: {
        authorization: this.getHeaders(),
      },
      body: {
        email_address: email,
        status: 'subscribed',
      },
      url: `https://us12.api.mailchimp.com/3.0/lists/${config.id}/members`,
      json: true,
      persist: true,
    }

    const res = await request(options)

    return res
  }
}

module.exports = MailchimpApi
