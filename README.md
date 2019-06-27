# wjw-UI - 一个  Vue UI 组件

[![Build Status](https://travis-ci.org/yiyanwu/wheel-wjw.svg?branch=master)](https://travis-ci.org/yiyanwu/wheel-wjw)

![GitHub](https://img.shields.io/github/license/yiyanwu/wheel-wjw.svg)

## 介绍

这是我在学习 Vue 过程中做的一个 UI 框架，希望对你有用，本框架完成度不高，还不能在生产环境中使用

## 文档

[官方文档](https://yiyanwu.github.io/wheel-wjw/)

## 开始使用

1. 添加 CSS 样式

使用本框架前，请在 CSS 中开启border-box
```
*,*::before,*::after {box-sizing: border-box;}
```
IE 8 及以上浏览器都支持此样式。

2. 安装 wheel-wjw
  ```
  npm i --save wheel-wjw
  ```
3. 引入 wheel
  ```
  import {Button, ButtonGroup, Icon} from 'wheel-wjw'
  import 'wheel-wjw/dist/index.css'

  export default {
      name: 'app',
      components: {
          'g-button': Button,
          'g-icon': Icon
      }
  }
  ```


## 提问

## 变更记录

## 联系方式



## 贡献代码

作者：yiyanwu 

