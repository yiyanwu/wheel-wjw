<template>
    <div class="container" style="padding: 20px 0;">
        <g-input v-model="value"></g-input>
        <div>
            {{value}}
        </div>

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
            data:{ value: '双向绑定' }

        <g-input v-model="value"></g-input>
        <div>
            {{value}}
        </div>
            `.replace(/^ {8}/gm, '').trim(),
            show:false,
            value: '双向绑定'
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