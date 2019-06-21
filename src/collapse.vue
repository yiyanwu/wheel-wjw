<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "WheelCollapse"
};
</script>
<style lang="scss" scoped>
  $border-color: #4cbcf0;
  $border-radius: 4px;
  .collapse {
      border: 1px solid $border-color;
      border-radius: $border-radius;
 }
</style>