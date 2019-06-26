<template>
    <div class="container" style="padding: 20px 0;">
        <g-button @click="$toast('弹出提示')">上方弹出</g-button>
        <g-button @click="$toast('弹出提示',{position:'middle'})">中间弹出</g-button>
        <g-button @click="$toast('弹出提示',{position:'bottom'})">下方弹出</g-button>
        
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
            <g-button @click="$toast('弹出提示')">上方弹出</g-button>
        <g-button @click="$toast('弹出提示',{position:'middle'})">中间弹出</g-button>
        <g-button @click="$toast('弹出提示',{position:'bottom'})">下方弹出</g-button>
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