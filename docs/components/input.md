---
title: Input 文本输入
---

# Input 文本输入

基本的文本输入框，包含三种基本样式和双向绑定

# 基本样式

<ClientOnly>
 <input-demos-1></input-demos-1>
</ClientOnly>

# 禁用样式

通过disabled属性控制

<ClientOnly>
 <input-demos-2></input-demos-2>
</ClientOnly>

# 只读样式

通过readonly属性控制


<ClientOnly>
 <input-demos-3></input-demos-3>
</ClientOnly>

# 支持双向绑定


<ClientOnly>
 <input-demos-4></input-demos-4>
</ClientOnly>

# 错误提示

当输入不符合规则的信息时，进行提示

<ClientOnly>
 <input-demos-5></input-demos-5>
</ClientOnly>

# Options

参数|说明|类型|可选值|默认值
---|:--:|---:|---:|---:
value|输入框默认显示文字|String|---|---
disabled|控制可否进行输入|Boolean|false，true|false
readonly|控制是否只读|Boolean|false，true|false
error|不符合规则输入进行提示|String|---|---