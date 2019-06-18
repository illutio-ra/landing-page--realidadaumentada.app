require('../../config')
require('lib/databases/mongo')

const Task = require('lib/task')
const { Translation } = require('models')
const fs = require('fs-extra')

const task = new Task((async (argv) => {
  const langs = await Translation.find().distinct('lang')
  const translationsPath = './app/translations'
  await fs.ensureDir(translationsPath)
  for (const lang of langs) {
    let translations = await Translation.find({ lang }).sort('id')
    translations = translations.map((t) => ({
      id: t.id,
      modules: t.modules,
      content: t.content,
    }))
    fs.writeFileSync(
      `${translationsPath}/${lang}.json`,
      JSON.stringify(translations, null, 2),
    )
  }
  return langs
}))

if (require.main === module) {
  task.setCliHandlers()
  task.run()
} else {
  module.exports = task
}
