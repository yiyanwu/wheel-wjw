<template>
    <div class="collapse-item">
        <div class="title" @click="toggle" :data-name="name">
            {{title}}
        </div>
        <collapse-transition>
            <div class="content" v-if="show">
            <slot></slot>
        </div>
        </collapse-transition>
    </div>
</template>
<script>
import collapseTransition from './collapse-transition'
export default {
    name: 'WheelCollapseItem',
    props: {
        title: {
            type: String,
            required:true
        },
        name: {
            type: String,
            required: true
        }
    },
    components: {
        collapseTransition
    },
    data () {
        return {
            show: false
        }
    },
    inject: {
        eventBus: ['eventBus']
    },
    mounted () {
         this.eventBus && this.eventBus.$on('update:selected',(names) => {
            if (names.indexOf(this.name) >= 0) {
                this.show = true
            } else {
                this.show = false
            }
        })
    },
    methods: {
        toggle () {
            if (this.show) {
                this.eventBus && this.eventBus.$emit('update:removeSelected',this.name) 
            } else {
                this.eventBus && this.eventBus.$emit('update:addSelected',this.name) 
            }
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


