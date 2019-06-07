const Route = require('lib/router/route')

const { Article } = require('models')

module.exports = new Route({
  method: 'delete',
  path: '/:uuid',
  async handler(ctx) {
    const articleId = ctx.params.uuid

    const article = await Article.findOne({ uuid: articleId })
    ctx.assert(article, 404, 'Article not found')

    article.set({ isDeleted: true })
    article.save()

    ctx.body = {
      data: article.toAdmin(),
    }
  },
})
