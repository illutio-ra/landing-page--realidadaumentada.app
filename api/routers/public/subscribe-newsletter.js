const Route = require('lib/router/route')
const MailchimpApi = require('lib/mailchimp-client/index')

module.exports = new Route({
  method: 'post',
  path: '/subscribe-newsletter',
  async handler(ctx) {
    const data = ctx.request.body
    const mailchimp = new MailchimpApi()
    mailchimp.subscribe(data.email_address)
    ctx.body = {
      data: 'subscribed',
    }
  },
})
