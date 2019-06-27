<template>
    <div class="container" style="padding: 20px 0;">
        <g-tabs :selected="selected">
            <g-tabs-head>
                <g-tabs-item name="1">1</g-tabs-item>
                <g-tabs-item name="2" disabled>2</g-tabs-item>
                <g-tabs-item name="3">3</g-tabs-item>
            </g-tabs-head>
            <g-tabs-body>
                <g-tabs-pane name="1">内容1</g-tabs-pane>
                <g-tabs-pane name="2">内容2</g-tabs-pane>
                <g-tabs-pane name="3">内容3</g-tabs-pane>
            </g-tabs-body>
        </g-tabs>
        
        </br>
        <span @click="show = !show" class="code">展示代码</span>
        <span v-if="show"><pre><code>{{content}}</code></pre></span>
    </div>
</template>
<script>
import Tabs from '../../../src/tabs'
import TabsItem from '../../../src/tabs-item'
import TabsBody from '../../../src/tabs-body'
import TabsPane from '../../../src/tabs-pane'
import TabsHead from '../../../src/tabs-head'

export default {
    components: {
        "g-tabs": Tabs,
        'g-tabs-head': TabsHead,
        'g-tabs-item': TabsItem,
        'g-tabs-body': TabsBody,
        'g-tabs-pane': TabsPane
    },
    data(){
        return {
            content:`
            data: { selected: '1'}

        <g-tabs :selected="selected">
            <g-tabs-head>
                <g-tabs-item name="1">标题1</g-tabs-item>
                <g-tabs-item name="2" disabled>标题2</g-tabs-item>
                <g-tabs-item name="3">标题3</g-tabs-item>
            </g-tabs-head>
            <g-tabs-body>
                <g-tabs-pane name="1">内容1</g-tabs-pane>
                <g-tabs-pane name="2">内容2</g-tabs-pane>
                <g-tabs-pane name="3">内容3</g-tabs-pane>
            </g-tabs-body>
        </g-tabs>
            `.replace(/^ {8}/gm, '').trim(),
            show:false,
            selected: '1'
        }
    }
}
</script>
<style scoped>
 .code { 
     color:#409eff;
     cursor: pointer;
     user-select: none;
 }
</style>