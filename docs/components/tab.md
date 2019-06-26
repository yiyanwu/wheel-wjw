---
title: Tabs 标签页
---

# Tabs 标签页

# 默认样式

<ClientOnly>
 <tabs-demos-1></tabs-demos-1>
</ClientOnly>

# 禁用某一项

在tabs-item第二项添加disabled属性 使其禁用

<ClientOnly>
 <tabs-demos-2></tabs-demos-2>
</ClientOnly>

# Options

参数|说明|类型|可选值|默认值
---|:--:|---:|---:|---:
selected|属于tabs的属性，默认展示某一项，必须值|String|推荐在name属性中取值|---
name|tabs-item和tabs-pane的属性，必须值|String|---|---
disabled|控制是否可点击|Boolean|false，true|false