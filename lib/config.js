const { resolve, flatObject } = require("./utils")

/**
 * resolve config
 * @param  {...string} paths file path
 */
module.exports.getConfig = (...paths) => {
  const config = {}
  paths.forEach((path) => {
    const conf = require(resolve(path))
    Object.assign(config,  flatObject(conf))
  })

  return config
}