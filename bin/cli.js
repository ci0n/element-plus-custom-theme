#!/usr/bin/env node


const program = require('commander')
const { main } = require('../index')

program
  .version(require('../package.json').version)
  .usage('<configs...> [options]')


program
  .arguments('<configs...>') // 配置文件路径
  // .option('-s, --source <path>', 'Source theme path')
  // .option('-n, --name [name]', 'Theme name', 'theme-chalk')
  .option('-o, --output [path]', 'Output path', './')
  // .option('--no-build-css', 'Not compiled into CSS')
  // .option('--no-rm', 'Do not delete old files')


program.parse(process.argv)


main(program.args, program.opts())