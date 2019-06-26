<template>
    <div class="container" style="padding: 20px 0;">
        <g-collapse :selected.sync="selectedTab">
            <g-collapse-item title="文学" name="1">文学相关</g-collapse-item>
            <g-collapse-item title="体育" name="2">体育相关</g-collapse-item>
            <g-collapse-item title="财经" name="3">财经相关</g-collapse-item>
        </g-collapse>

        </br>
        <span @click="show = !show" class="code">展示代码</span>
        <span v-if="show"><pre><code>{{content}}</code></pre></span>
    </div>
</template>
<script>
import Collapse from '../../../src/collapse'
import CollapseItem from '../../../src/collapse-item'

export default {
    components: {
        'g-collapse': Collapse,
        'g-collapse-item': CollapseItem
    },
    data(){
        return {
            content:`
            data:{ selectedTab:['2'] }

        <g-collapse :selected.sync="selectedTab">
            <g-collapse-item title="文学" name="1">文学相关</g-collapse-item>
            <g-collapse-item title="体育" name="2">体育相关</g-collapse-item>
            <g-collapse-item title="财经" name="3">财经相关</g-collapse-item>
        </g-collapse>
            `.replace(/^ {8}/gm, '').trim(),
            show:false,
            selectedTab:['2']
        }
    }
}
</script>
<style scoped>
 .code { 
     color:#409eff;
     cursor: pointer;
 }
</style>