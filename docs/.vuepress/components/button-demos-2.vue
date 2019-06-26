<template>
    <div class="container" style="padding: 20px 0;">
        <g-button icon="settings"></g-button>
        <g-button icon="error">error</g-button>
        <g-button icon="info">info</g-button>
        <g-button icon="loading" :loading="true">加载</g-button>
        <g-button icon="download">下载</g-button>
        <g-button icon="thumbs-up">点赞</g-button>
        <g-button icon="down"></g-button>
        <g-button icon="right"></g-button>
        <g-button icon="left"></g-button>
        
        <br>
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
            content: `
              <g-button icon="settings"></g-button>
        <g-button icon="error">error</g-button>
        <g-button icon="info">info</g-button>
        <g-button icon="loading" :loading="true">加载</g-button>
        <g-button icon="download">下载</g-button>
        <g-button icon="thumbs-up">点赞</g-button>
        <g-button icon="down"></g-button>
        <g-button icon="right"></g-button>
        <g-button icon="left"></g-button>
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
