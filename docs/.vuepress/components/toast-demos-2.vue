<template>
    <div class="container" style="padding: 20px 0;">
        <g-button @click="showHTML">上方弹出</g-button>
        
        </br>
        <span @click="show = !show" class="code">展示代码</span>
        <span v-if="show"><pre><code>{{content}}</code></pre></span>
    </div>
</template>
<script>
import Vue from 'vue'
import plugin from '../../../src/plugin'
import Button from '../../../src/button'

Vue.use(plugin)

export default {
    components: {
        "g-button": Button
    },
    data(){
        return {
            content:`
            <g-button @click="showHTML">上方弹出</g-button>

        methods: {
            showHTML () {
                this.$toast('<strong style="color:red;">加粗的提示</strong><a href="https://cn.vuejs.org/">Vue官网</a>',
                {enableHtml: true})
            }
        }
            `.replace(/^ {8}/gm, '').trim(),
            show:false
        }
    },
    methods: {
        showHTML () {
            this.$toast('<strong style="color:red;">加粗的提示</strong><a href="https://cn.vuejs.org/">Vue官网</a>',
            {enableHtml: true})
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