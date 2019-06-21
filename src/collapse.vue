<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>
<script>
import Vue from 'vue'
export default {
  name: "WheelCollapse",
  props: {
      single: {
          type: Boolean,
          default: false
      }
  },
  data () {
      return {
          eventBus: new Vue()
      }
  },
  provide () {
      if (this.single) {
          return {
              eventBus: this.eventBus
          }
      }
  }
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