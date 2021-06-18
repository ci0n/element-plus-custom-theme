[English](./README.md)

# element-plus-custom-theme

一个简单的 [element-plus](https://element-plus.org/) 主题定制工具。

在官方更新主题定制工具之前可以使用这个工具


- 支持 [在线主题编辑器](https://element.eleme.cn/#/zh-CN/theme) 和 [主题编辑器 Chrome 插件](https://chrome.google.com/webstore/detail/element-theme-roller/lifkjlojflekabbmlddfccdkphlelmim) 生成的 `config.json` 文件


## 安装

```bash
npm install -D element-plus-custom-theme
```

## 使用

```bash
cpct src/theme/config.json -o src/theme/custom-theme/
```

element-plus 新增了很多 scss 变量，可以使用多个 `config.json` 文件定制主题：
```bash
cpct src/theme/config.json src/theme/config-plus.json -o src/theme/custom-theme
```
