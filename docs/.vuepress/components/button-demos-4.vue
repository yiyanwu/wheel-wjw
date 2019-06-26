<template>
    <div class="container" style="padding: 20px 0;">
        <g-button-group>
            <g-button icon="left">上一页</g-button>
            <g-button icon="right" icon-position="right">下一页</g-button>
        </g-button-group>

        <g-button-group>
            <g-button icon="left"></g-button>
            <g-button icon="right"></g-button>
            <g-button icon="down"></g-button>
        </g-button-group>
        
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
        'g-button': Button,
        'g-button-group':ButtonGroup
    },
    data(){
        return {
            content:`
            <g-button-group>
            <g-button icon="left"></g-button>
            <g-button icon="right" icon-position="right"></g-button>
        </g-button-group>

        <g-button-group>
            <g-button icon="left"></g-button>
            <g-button icon="right"></g-button>
            <g-button icon="down"></g-button>
        </g-button-group>
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