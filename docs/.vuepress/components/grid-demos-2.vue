<template>
    <div class="container" style="padding: 20px 0;">
        <g-row class="row" gutter="20">
            <g-col span="6"><div class="democol">6</div></g-col>
            <g-col span="6"><div class="democol">6</div></g-col>
            <g-col span="6"><div class="democol">6</div></g-col>
            <g-col span="6"><div class="democol">6</div></g-col>
        </g-row>

        </br>
        <span @click="show = !show" class="code">展示代码</span>
        <span v-if="show"><pre><code>{{content}}</code></pre></span>
    </div>
</template>
<script>
import Row from '../../../src/row'
import Col from '../../../src/col'

export default {
    components: {
        'g-row': Row,
        'g-col': Col
    },
    data(){
        return {
            content:`
            * { box-sizing: border-box;}

        <g-row class="row" gutter="20">
            <g-col span="6"><div class="democol">6</div></g-col>
            <g-col span="6"><div class="democol">6</div></g-col>
            <g-col span="6"><div class="democol">6</div></g-col>
            <g-col span="6"><div class="democol">6</div></g-col>
        </g-row>
            `.replace(/^ {8}/gm, '').trim(),
            show:false,
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
<style scoped>
* { box-sizing: border-box;}
.row { margin: 10px 0;}
.democol {
    height: 50px; border: 1px solid #ccc; background: #409eff;
    display: flex; justify-content: center; align-items: center;
    border-radius: 4px;
}
</style>
