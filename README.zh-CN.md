[English](https://github.com/ci0n/element-plus-custom-theme/blob/main/README.md)

# element-plus-custom-theme

一个简单的 [element-plus](https://element-plus.org/) 主题定制工具。

在官方更新主题定制工具之前可以使用这个工具


- 支持 [在线主题编辑器](https://element.eleme.cn/#/zh-CN/theme) 和 [主题编辑器 Chrome 插件](https://chrome.google.com/webstore/detail/element-theme-roller/lifkjlojflekabbmlddfccdkphlelmim) 生成的 `config.json` 文件


## 安装
element-plus 是必须安装的，该工具会使用 `theme-chalk` 代码生成新的主题变量：
```bash
npm i -S element-plus
```

```bash
npm i -g element-plus-custom-theme
```

也可以在项目中安装，但是需要通过 `scripts` 执行命令行：
```bash
npm i -D element-plus-custom-theme
```

## 使用
```bash
epct src/theme/config.json -o src/theme/custom-theme/
```

element-plus 新增了很多 scss 变量，可以使用多个 `config.json` 文件定制主题：
```bash
epct src/theme/config.json src/theme/config-plus.json -o src/theme/custom-theme
```

如果安装在项目内，可以使用 `package.json` 中的 `scripts`：
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