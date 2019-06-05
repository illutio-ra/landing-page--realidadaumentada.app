const Route = require('lib/router/route')
const lov = require('lov')

const { Article } = require('models')

module.exports = new Route({
  method: 'post',
  path: '/:uuid',
  validator: lov.object().keys({
    title: lov.string().required(),
    description: lov.string().required(),
  }),
  async handler(ctx) {
    const articleId = ctx.params.uuid
    const data = ctx.request.body

    const article = await Article.findOne({ uuid: articleId })
    ctx.assert(article, 404, 'Article not found')

    article.set(data)
    await article.save()

    ctx.body = {
      data: article.toAdmin(),
    }
  },
})
