[中文](./README.zh-CN.md)

# element-plus-custom-theme

A simple [element-plus](https://element-plus.org/) theme customization tool.

This tool can be used before the official update of the theme customization tool.


- Support `config.json` files generated by [Online Theme Roller](https://element.eleme.cn/#/en-US/theme) and [Theme Roller Chrome Extension](https://chrome.google.com/webstore/detail/element-theme-roller/lifkjlojflekabbmlddfccdkphlelmim) tools.


## install

```bash
npm i -D element-plus-custom-theme
npm i -S element-plus
```

## usage
```bash
cpct src/theme/config.json -o src/theme/custom-theme/
```

element-plus has added many scss variables, you can use multiple `config.json` files to customize the theme:
```bash
cpct src/theme/config.json src/theme/config-plus.json -o src/theme/custom-theme
```