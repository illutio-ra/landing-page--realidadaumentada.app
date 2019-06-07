const Route = require('lib/router/route')

const { Article } = require('models')

module.exports = new Route({
  method: 'get',
  path: '/blog/:slug',
  async handler(ctx) {
    const { slug } = ctx.params

    const article = await Article.findOne({ slug }).populate('author')
    ctx.assert(article, 404, 'Article not found')

    ctx.body = {
      data: article.toPublic(),
    }
  },
})
