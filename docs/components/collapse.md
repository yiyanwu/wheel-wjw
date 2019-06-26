---
title: Collapse 折叠面板
---

# Collapse 折叠面板

# 基本用法

默认打开第二项（可选）

<ClientOnly>
 <collapse-demos-1></collapse-demos-1>
</ClientOnly>

# 手风琴效果

每次只打开一个

<ClientOnly>
 <collapse-demos-2></collapse-demos-2>
</ClientOnly>

# Options

参数|说明|类型|可选值|默认值
---|:--:|---:|---:|---:
single|collapse属性,是否开启手风琴效果|Boolean|---|false
selected|collapse属性，控制默认打开某项|Array|推荐在name中取值|---
title|标题名称，为必须值|String|---|---
name|标题索引，为必须值|String|---|---