<template>
  <transition name="slide">
    <div class="sider">
        <slot></slot>
    </div>
  </transition>
</template>
<script>
export default {
    name: 'WheelSider'
}
</script>
<style scoped lang="scss">
     .sider {}
</style>