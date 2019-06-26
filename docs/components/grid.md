---
title: Grid 网格布局
---

# Grid 网格布局

# 基础布局

通过将一行分成24分栏，进行快捷布局

<ClientOnly>
 <grid-demos-1></grid-demos-1>
</ClientOnly>

# 分栏间隔布局

分栏之间存在间隔

<ClientOnly>
 <grid-demos-2></grid-demos-2>
</ClientOnly>

# 分栏空隙布局

分栏之间存在空隙

<ClientOnly>
 <grid-demos-3></grid-demos-3>
</ClientOnly>

# 响应式布局

根据屏幕大小比例不同，五种宽度区间：phone（默认），ipad，narrow-pc，pc，wide-pc

<ClientOnly>
 <grid-demos-4></grid-demos-4>
</ClientOnly>

# Options

参数|说明|类型|可选值|默认值
---|:--:|---:|---:|---:
gutter|row组件属性,控制分栏之间的间隔|Number,String|---|---
span|col组件属性,控制每块分栏的占比|Number,String|---|---
offset|col组件属性,控制分栏之间的空隙|Number,String|---|---
ipad,narrow-pc,pc,wide-pc|col组件属性,控制响应式布局|Object|参照例子|---

