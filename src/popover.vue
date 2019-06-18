<template>
  <div class="popover" @click="onClick">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible">
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper">
      <slot></slot>
    </span>
  </div>
</template>
<script>
export default {
  name: "WheelPopover",
  data() {
    return { visible: false };
  },
  mounted() {},
  methods: {
    positionContent () {
        document.body.appendChild(this.$refs.contentWrapper);
        let { width, height, top, left} = this.$refs.triggerWrapper.getBoundingClientRect();
        this.$refs.contentWrapper.style.left = left + window.scrollX + "px";
        this.$refs.contentWrapper.style.top = top + window.scrollY + "px";
    },
    onClick(event) {
      if (this.$refs.triggerWrapper.contains(event.target)) {
        this.visible = !this.visible;
        if (this.visible === true) {
          setTimeout(() => {
            this.positionContent()

            let eventHandler = (e) => {
              if (this.$refs.contentWrapper && this.$refs.contentWrapper.contains(e.target)) {
                  
              } else {
                  this.visible = false;
                  document.removeEventListener("click", eventHandler);
              }
            };

            document.addEventListener("click", eventHandler);
          });
        } else {}
      }
    }
  }
};
</script>
<style scoped lang="scss">
.popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
}
.content-wrapper {
  position: absolute;
  border: 1px solid red;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
  transform: translateY(-100%);
}
</style>
