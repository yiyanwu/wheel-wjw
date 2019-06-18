<template>
  <div class="popover" @click="onClick" ref="popover">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible">
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper" style="display:inline-block;">
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
    onClickDocment (e) {
        if (this.$refs.contentWrapper &&
            this.$refs.contentWrapper.contains(e.target)) { 
              return } else {
              this.close()
            }
    },
    open () {
         this.visible = true
         setTimeout(() => {
            this.positionContent()
            document.addEventListener("click", this.onClickDocment)
          });
    },
    close () {
        this.visible = false;
        document.removeEventListener("click", this.onClickDocment);
    },
    onClick(event) {
      if (this.$refs.triggerWrapper.contains(event.target)) {
        if (this.visible === true) {
           this.close()
        } else { this.open()}
      }
    }
  }
};
</script>
<style scoped lang="scss">
$border-color: #333;
$border-radius: 4px;
.popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
}
.content-wrapper {
  position: absolute;
  border: 1px solid $border-color;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
  transform: translateY(-100%);
  margin-top: -10px;
  padding: .5em 1em;
  border-radius: $border-radius;
  &::before,&::after {
      content: '';
      border:10px solid transparent;
      border-top-color:black;
      display: block;
      width: 0;
      height: 0;
      position: absolute;
      top:100%;
      left: 10px;
  }
  &::before {
      border-top-color:black;
  }
  &::after {
      border-top-color:white;
      top:calc(100% - 1px);
  }
}
</style>
