<template>
    <div class="container" style="padding: 20px 0;">
        <g-input value="中" error="姓名不能少于两个字"></g-input>
        
        </br>
        <span @click="show = !show" class="code">展示代码</span>
        <span v-if="show"><pre><code>{{content}}</code></pre></span>
    </div>
</template>
<script>
import Input from '../../../src/input'

export default {
    components: {
        'g-input': Input
    },
    data () {
        return {
            content:`
            <g-input value="中" error="姓名不能少于两个字"></g-input>
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
 }
</style>