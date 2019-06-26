<template>
    <div class="container">
        <g-layout style="margin-top:20px; overflow:hidden;">
            <g-header style="height:50px;  background:#4cbcf0">header</g-header>
            <g-layout>
              <g-sider style="width:200px; background:#70f3ff;">sider</g-sider>
              <g-content style="height:100px;  background:#409eff">content</g-content>
            </g-layout>
            <g-footer style="height:50px;  background:#4cbcf0">footer</g-footer>
        </g-layout>
        
        </br>
        <span @click="show = !show" class="code">展示代码</span>
        <span v-if="show"><pre><code>{{content}}</code></pre></span>
    </div>
</template>
<script>
import Layout from '../../../src/layout'
import Content from '../../../src/content'
import Header from '../../../src/header'
import Footer from '../../../src/footer'
import Sider from '../../../src/sider'

export default {
    components: {
        "g-layout": Layout,
        'g-content': Content,
        'g-header': Header,
        'g-footer': Footer,
        'g-sider': Sider
    },
    data(){
        return {
            content:`
             <g-layout style="margin-top:20px; overflow:hidden;">
            <g-header style="height:50px;  background:#4cbcf0">header</g-header>
            <g-layout>
              <g-sider style="width:200px; background:#70f3ff;">sider</g-sider>
              <g-content style="height:100px;  background:#409eff">content</g-content>
            </g-layout>
            <g-footer style="height:50px;  background:#4cbcf0">footer</g-footer>
        </g-layout>
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