<template>
  <div class="popover" ref="popover">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible"
    :class="{[`position-${position}`]:true}">
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper" style="display:inline-block;"  @click="onClick">
      <slot></slot>
    </span>
  </div>
</template>
<script>
export default {
  name: "WheelPopover",
  props: {
      position: {
          type: String,
          default: 'top',
          validator (value) {
              return ['top','bottom','left','right'].indexOf(value) >= 0
          }
      }
      
  },
  data() {
    return { 
        visible: false
    }
  },
  mounted() {
      document.addEventListener("click", this.onClickDocment)
  },
  destroyed() {
      document.removeEventListener("click", this.onClickDocment)
  },
  methods: {
    positionContent () {
        const {contentWrapper,triggerWrapper} = this.$refs
        document.body.appendChild(contentWrapper);
        let { width, height, top, left} = triggerWrapper.getBoundingClientRect();
        if (this.position === 'top') {
            contentWrapper.style.left = left + window.scrollX + "px";
            contentWrapper.style.top = top + window.scrollY + "px";
        } else if (this.position === 'bottom') {
            contentWrapper.style.left = left + window.scrollX + "px";
            contentWrapper.style.top = top + height + window.scrollY + "px";
        } else if (this.position === 'left') {
            let {height: height2} = contentWrapper.getBoundingClientRect()
            contentWrapper.style.left = left + window.scrollX + "px";
            contentWrapper.style.top = top +
            (height - height2)/2 + window.scrollY + "px";
        } else if (this.position === 'right') {
            let {height: height2} = contentWrapper.getBoundingClientRect()
            contentWrapper.style.left = left + width + window.scrollX + "px";
            contentWrapper.style.top = top + 
            (height - height2)/2 + window.scrollY + "px";
        }
    },
    onClickDocment (e) {
        if (this.$refs.contentWrapper &&
            this.$refs.contentWrapper.contains(e.target) ||
            this.$refs.triggerWrapper &&
            this.$refs.triggerWrapper.contains(e.target)
        ) { 
            return;
        } else {
            this.visible = false;
        }
    },
    open () {
         this.$emit('open')
         this.$nextTick(() => {
            this.positionContent()
          });
    },
    close () {
        this.$emit('close')
    },
    onClick(event) {
        this.visible = !this.visible;
        if(this.visible) {
            this.open()
        } else {
            this.close();
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
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.5);
  max-width: 20em;
  word-break: break-all;
  padding: .5em 1em;
  border-radius: $border-radius;
  background: white; 
  display: block;
  &::before,&::after {
      content: '';
      border: 10px solid transparent;
      display: block;
      width: 0;
      height: 0;
      position: absolute;
  }
  &.position-top {
      transform: translateY(-100%);
      margin-top: -10px;
      &::before,&::after {
          left: 10px;
      }
      &::before {
          border-top-color: black;
          top: 100%;
      }
      &::after {
          border-top-color: white;
          top: calc(100% - 1px);
      }
  }
  &.position-bottom {
      margin-top: 10px;
      &::before,&::after {
          left: 10px;
      }
      &::before {
          border-bottom-color: black;
          bottom: 100%;
      }
      &::after {
          border-bottom-color: white;
          bottom: calc(100% - 1px);
      }
  }
  &.position-left {
      transform: translateX(-100%);
      margin-left: -10px;
      &::before,&::after {
          transform: translateY(-50%);
          top: 50%;
      }
      &::before {
          border-left-color: black;
          left: 100%;
      }
      &::after {
          border-left-color: white;
          left: calc(100% - 1px);
      }
  } 
  &.position-right {
      margin-left: 10px;
      &::before,&::after {
          transform: translateY(-50%);
          top: 50%;
      }
      &::before {
          border-right-color: black;
          right: 100%;
      }
      &::after {
          border-right-color: white;
          right: calc(100% - 1px);
      }
  } 
}
</style>
