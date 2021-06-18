const { resolve, existsSync, readFileSync, copy, writeFileSync } = require('./utils')

const themeChalkPath = 'node_modules/element-plus/packages/theme-chalk/src/'

module.exports.existsThemeChalk = function() {
  const themePath = resolve(themeChalkPath, 'common/var.scss')
  if (!existsSync(themePath)) {
    throw new Error(`element-plus can't find`)
  }
}

module.exports.generateTheme = function(config, dest) {
  const themeVar = replaceScssVar(config)
  
  copy(themeChalkPath + '**/*', dest)
  
  writeFileSync(
    resolve(dest, 'common/var.scss'),
    themeVar
  )
}



function replaceScssVar(config) {
  let scssVar = readFileSync(resolve(themeChalkPath, 'common/var.scss'))
  for (const [key, value] of Object.entries(config)) {
    const reg = new RegExp(`${key.replace(/\$/g, '\\$')}: (.*)( [!].*);`, 'igm')
    scssVar = scssVar.replace(reg, `${key}: ${value}$2;`)
  }
  return scssVar
}