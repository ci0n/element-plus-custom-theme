const { existsThemeChalk, generateTheme } = require('./lib/theme')
const { getConfig } = require('./lib/config')

module.exports.main = function(configPaths, options) {

  existsThemeChalk()

  const config = getConfig(...configPaths)

  generateTheme(config, options.output)
}