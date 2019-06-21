<template>
    <div class="collapse-item">
        <div class="title" @click="open = !open">
            {{title}}
        </div>
        <div class="content" v-if="open">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    name: 'WheelCollapseItem',
    props: {
        title: {
            type: String,
            required:true
        }
    },
    data () {
        return {
            open: false
        }
    }
}
</script>
<style lang="scss" scoped>
    $border-color: #4cbcf0;
    $border-radius: 4px;
    .collapse-item {
        > .title {
            border: 1px solid $border-color;
            margin-top: -1px;
            margin-left:  -1px;
            margin-right:  -1px;
            min-height: 32px;
            display: flex;
            align-items: center;
            padding: 0 8px;
        }
        > .content {
            padding: 0 8px;
        }
        &:first-child {
            > .title {
                border-top-left-radius: $border-radius;
                border-top-right-radius: $border-radius;
            }
        }
    }
</style>


