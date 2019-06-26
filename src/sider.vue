<template>
  <transition name="slide">
    <div class="sider">
        <slot></slot>
        <!-- <button @click="visible = false">close</button> -->
    </div>
  </transition>
</template>
<script>
export default {
    name: 'WheelSider',
    // data() {
    //     return {
    //         visible:true
    //     }
    // }
}
</script>
<style scoped lang="scss">
    // .sider {
    //     position: relative;
    //     > button {
    //         position: absolute;
    //         top: 0;
    //         right: 0;
    //         height: 32px;
    //         border-radius: 4px;
    //         background: #e9e7ef;
    //     }
    // }
    // .slide-enter-active, .slide-leave-active {
    //     transition: all .5s;
    // }
    // .slide-enter, .slide-leave-to {
    //     margin-left: -200px;
    // }
</style>