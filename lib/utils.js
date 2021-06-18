const path = require('path')
const fs = require('fs')
const rimraf = require('rimraf')
const cpx = require('cpx')

/**
 * resolve path, base path is `process.cwd()`
 * @param  {...string} args 
 */
function resolve (...args)  {
  return path.resolve(process.cwd(), ...args)
}
module.exports.resolve = resolve

/**
 * delete path or file
 * @param {string} path 
 */
 function rm(path) {
  rimraf.sync(resolve(path))
}
module.exports.rm = rm


/**
 * copy file or dir
 * @param {string} source source path
 * @param {string} dest target path
 */
 function copy(source, dest) {
  try {
    cpx.copySync(source, dest)
    return true
  } catch {
    return false
  }
}
module.exports.copy = copy

/**
 * exusts path
 * @param {string} path 
 * @returns 
 */
function existsSync(path) {
  return fs.existsSync(path)
}
module.exports.existsSync = existsSync


/**
 * flat object
 * @param {object} o 
 * @returns 
 */
function flatObject(o) {
  const result = {}

  for (const [key, value] of Object.entries(o)) {
    if (Array.isArray(value)) {
      continue
    }
    if (typeof value === 'object') {
      Object.assign(result, arguments.callee(value))
    } else {
      result[key] = value
    }
  }

  return result
}
module.exports.flatObject = flatObject


/**
 * write file
 * @param {string} path 
 * @param {string | Buffer} content 
 * @returns 
 */
function writeFileSync(path, content) {
  try {
    fs.writeFileSync(resolve(path), content)
    return true
  } catch(err) {
    return false
  }
}
module.exports.writeFileSync = writeFileSync


/**
 * read file
 * @param {string} path 
 */
function readFileSync(path) {
  return fs.readFileSync(resolve(path)).toString()
}
module.exports.readFileSync = readFileSync

