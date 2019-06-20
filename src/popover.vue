<template>
  <div class="popover" ref="popover">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible"
    :class="{[`position-${position}`]:true}">
      <slot name="content" :close="onEvent"></slot>
    </div>
    <span ref="triggerWrapper" style="display:inline-block;">
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
      },
      trigger: {
          type: String,
          default: 'click',
          validator (value) {
              return ['click','hover'].indexOf(value) >= 0
          }
      } 
  },
  computed: {
      openEvent () {
          if (this.trigger === 'click') {
              return 'click'
          } else {
              return 'mouseenter'
          }
      },
      closeEvent () {
          if (this.trigger === 'click') {
              return 'click'
          } else {
              return 'mouseleave'
          }
      }
  },
  data() {
    return { 
        visible: false
    }
  },
  
  mounted() {
      this.$refs.triggerWrapper.addEventListener(this.openEvent,this.onEvent)
      this.$refs.triggerWrapper.addEventListener(this.closeEvent,this.onEvent)
      document.addEventListener("click", this.onClickDocment)
  },
  destroyed() {
      document.removeEventListener("click", this.onClickDocment)
  },
  methods: {
    positionContent () {
        const {contentWrapper,triggerWrapper} = this.$refs
        document.body.appendChild(contentWrapper);
        const { width, height, top, left} = triggerWrapper.getBoundingClientRect();
        const {height: height2} = contentWrapper.getBoundingClientRect()
        let positions = {
            top: { top: top + window.scrollY, left: left + window.scrollX },
            bottom: { top: top + height + window.scrollY, left: left + window.scrollX },
            left: {
                top: top + (height - height2)/2 + window.scrollY,
                left: left + window.scrollX
            },
            right: {
                top: top + (height - height2)/2 + window.scrollY,
                left: left + width + window.scrollX
            }
        }
        contentWrapper.style.top = positions[this.position].top + 'px'
        contentWrapper.style.left = positions[this.position].left + 'px'
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
    onEvent(event) {
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
          border-bottom-style: none;
          top: 100%;
      }
      &::after {
          border-top-color: white;
          border-bottom-style: none;
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
          border-top-style: none;
          bottom: 100%;
      }
      &::after {
          border-bottom-color: white;
          border-top-style: none;
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
          border-right-style: none;
          left: 100%;
      }
      &::after {
          border-left-color: white;
          border-right-style: none;
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
          border-left-style: none;
          right: 100%;
      }
      &::after {
          border-right-color: white;
          border-left-style: none;
          right: calc(100% - 1px);
      }
  } 
}
</style>
