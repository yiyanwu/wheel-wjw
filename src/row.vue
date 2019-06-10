<template>
    <div class="row" :style="{marginLeft: -gutter/2 + 'px', marginRight: -gutter/2 + 'px'}">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'wheel-row',
    props: {
        gutter: {
            type: [Number,String]
        }
    },
    created () {},
    mounted () {
        this.$children.forEach((vm) => {
            vm.gutter = this.gutter
        })
    }
}
</script>
<style scoped lang="scss">
     .row { display: flex; }
</style>
