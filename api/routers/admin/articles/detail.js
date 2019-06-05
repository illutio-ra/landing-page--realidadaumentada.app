const Route = require('lib/router/route')

const { Article } = require('models')

module.exports = new Route({
  method: 'get',
  path: '/:uuid',
  async handler(ctx) {
    const { uuid } = ctx.params

    const article = await Article.findOne({ uuid }).populate('author')
    ctx.assert(article, 404, 'Article not found')

    ctx.body = {
      data: article.toAdmin(),
    }
  },
})
