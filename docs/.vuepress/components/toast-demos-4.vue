<template>
    <div class="container" style="padding: 20px 0;">
        <g-button @click="changeButton">上方弹出</g-button>
        
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
            <g-button @click="changeButton">上方弹出</g-button>

        methods: {
            changeButton () {
                this.$toast('你知道dota2吗？',{
                  closeButton: {
                    text: '知道哦',
                    callback: () => {
                        console.log('刀友你好')
                    }
                  }
                })
            }
        }
            `.replace(/^ {8}/gm, '').trim(),
            show:false
        }
    },
    methods: {
        changeButton () {
            this.$toast('你知道dota2吗？',{
                closeButton: {
                    text: '知道哦',
                    callback: () => {
                        console.log('刀友你好')
                    }
                }
            })
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