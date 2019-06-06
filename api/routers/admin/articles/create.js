const Route = require('lib/router/route')
const lov = require('lov')
const { Article } = require('models')
const slugify = require('underscore.string/slugify')

module.exports = new Route({
  method: 'post',
  path: '/',
  validator: lov.object().keys({
    title: lov.string().required(),
    description: lov.string().required(),
  }),
  async handler(ctx) {
    const data = ctx.request.body

    data.status = 'draft'
    data.author = ctx.state.user
    data.slug = slugify(`${new Date().toDateString()}-${data.title}`)
    const article = await Article.create(data)

    ctx.body = {
      data: article.toAdmin(),
    }
  },
})
