---
title: Toast 信息提示
---

# Toast 信息提示

# 基本样式

支持三种方向弹出，默认五秒自动关闭，可点击提前关闭

<ClientOnly>
 <toast-demos-1></toast-demos-1>
</ClientOnly>

# 弹出框支持html

<ClientOnly>
 <toast-demos-2></toast-demos-2>
</ClientOnly>

# 支持修改自动关闭时间

<ClientOnly>
 <toast-demos-3></toast-demos-3>
</ClientOnly>

# 支持修改关闭按钮

包括按钮文本和调用函数

<ClientOnly>
 <toast-demos-4></toast-demos-4>
</ClientOnly>

# Options

参数|说明|类型|可选值|默认值
---|:--:|---:|---:|---:
autoClose|控制弹框自动关闭和时间|Boolean,Number|---|5
closeButton|控制关闭按钮的文本和调用函数|Object|---|text:'关闭', callback: undefined
enableHtml|控制弹框是否支持html|Boolean|true,false|---
position|控制弹框的弹出位置|String|'top','middle','bottom'|'top'