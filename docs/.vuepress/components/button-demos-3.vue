<template>
    <div class="container" style="padding: 20px 0;">
        <g-button disabled>禁用按钮</g-button>
        
        </br>
        <span @click="show = !show" class="code">展示代码</span>
        <span v-if="show"><pre><code>{{content}}</code></pre></span>
    </div>
</template>
<script>
import Button from '../../../src/button'
import ButtonGroup from '../../../src/button-group'

export default {
    components: {
        'g-button': Button
    },
    data(){
        return {
            content:`
            <g-button disabled>禁用按钮</g-button>
            `.replace(/^ {8}/gm, '').trim(),
            show:false
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