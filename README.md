[中文](https://github.com/ci0n/element-plus-custom-theme/blob/main/README.zh-CN.md)

# element-plus-custom-theme

A simple [element-plus](https://element-plus.org/) theme customization tool.

This tool can be used before the official update of the theme customization tool.


- Support `config.json` files generated by [Online Theme Roller](https://element.eleme.cn/#/en-US/theme) and [Theme Roller Chrome Extension](https://chrome.google.com/webstore/detail/element-theme-roller/lifkjlojflekabbmlddfccdkphlelmim) tools.


## install
element-plus must be installed, the tool will use the `theme-chalk` code to generate new theme variables:
```bash
npm i -S element-plus
```

```bash
npm i -g element-plus-custom-theme
```

It can also be installed in the project, but you need to execute the command line through `scripts`:
```bash
npm i -D element-plus-custom-theme
```


## usage
```bash
epct src/theme/config.json -o src/theme/custom-theme/
```

element-plus has added many scss variables, you can use multiple `config.json` files to customize the theme:
```bash
epct src/theme/config.json src/theme/config-plus.json -o src/theme/custom-theme
```


If installed in the project, you can use the `scripts` in the `package.json`:
```json
{
  "scripts": {
    "build:theme": "epct src/theme/config.json -o src/theme/custom-theme/"
  }
}
```
```bash
npm run build:theme
```