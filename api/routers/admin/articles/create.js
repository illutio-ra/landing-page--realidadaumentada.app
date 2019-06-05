const Route = require('lib/router/route')
const lov = require('lov')
const { Article } = require('models')
const slugify = require('underscore.string/slugify')

const defaultContent = `
<!DOCTYPE html>
<html>
<head>
</head>
<body>
<p style="text-align: center;"><span style="color: #bdc3c7;">&rarr; This is a full-featured editor demo. Please explore! &larr;</span></p>
<p style="text-align: center;">&nbsp;</p>
<h2 style="text-align: center;">TinyMCE is <span style="text-decoration: underline;">your best choice</span> for building modern, internationalized and accessible content creation experiences.</h2>
<p style="text-align: center;">&nbsp;</p>
<p style="text-align: center;"><span style="font-size: 14pt;"> <strong> <span style="color: #7e8c8d;">No matter what you're building, TinyMCE has got you covered.</span> </strong> </span></p>
<table style="border-collapse: collapse; width: 85%; margin-left: auto; margin-right: auto; border: 0;">
<tbody>
<tr>
<td style="width: 25%; text-align: center; padding: 7px;"><span style="color: #95a5a6;">🛠 50+ Plugins</span></td>
<td style="width: 25%; text-align: center; padding: 7px;"><span style="color: #95a5a6;">💡 Premium Support</span></td>
<td style="width: 25%; text-align: center; padding: 7px;"><span style="color: #95a5a6;">🖍 Custom Skins</span></td>
<td style="width: 25%; text-align: center; padding: 7px;"><span style="color: #95a5a6;">⚙ Full API Access</span></td>
</tr>
</tbody>
</table>
</body>
</html>
`

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
    data.content = defaultContent
    data.slug = slugify(`${new Date().toDateString()}-${data.title}`)
    const article = await Article.create(data)

    ctx.body = {
      data: article.toAdmin(),
    }
  },
})
