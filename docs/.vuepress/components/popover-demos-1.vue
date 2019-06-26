<template>
    <div class="container" style="padding: 20px 0;">
        <g-popover position="top">
            <g-button>click激活</g-button>
            <template slot="content">这是一段内容</template>
        </g-popover>
        <g-popover position="bottom">
            <g-button>click激活</g-button>
            <template slot="content">这是一段内容</template>
        </g-popover>
        <g-popover position="left" trigger="hover">
            <g-button>hover激活</g-button>
            <template slot="content">这是一段内容</template>
        </g-popover>
        <g-popover position="right" trigger="hover">
            <g-button>hover激活</g-button>
            <template slot="content">这是一段内容</template>
        </g-popover>
        
        </br>
        <span @click="show = !show" class="code">展示代码</span>
        <span v-if="show"><pre><code>{{content}}</code></pre></span>
    </div>
</template>
<script>
import Button from '../../../src/button'
import Popover from '../../../src/popover'


export default {
    components: {
        "g-button": Button,
        'g-popover':Popover
    },
    data(){
        return {
            content:`
            <g-popover position="top">
            <g-button>click激活</g-button>
            <template slot="content">这是一段内容</template>
        </g-popover>
        <g-popover position="bottom">
            <g-button>click激活</g-button>
            <template slot="content">这是一段内容</template>
        </g-popover>
        <g-popover position="left" trigger="hover">
            <g-button>hover激活</g-button>
            <template slot="content">这是一段内容</template>
        </g-popover>
        <g-popover position="right" trigger="hover">
            <g-button>hover激活</g-button>
            <template slot="content">这是一段内容</template>
        </g-popover>
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