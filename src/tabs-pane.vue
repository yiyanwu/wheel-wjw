<template>
    <div class="tabs-pane" :class="classes" v-if="active">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'WheelTabsPane',
    inject: ['eventBus'],
    props: {
        name: {
            type: String | Number,
            requeired: true 
        }
    },
    computed: {
        classes() {
            return {
                active: this.active
            }
        }
    },
    data () {
        return {
            active: false
        }
    },
    created () {
        this.eventBus.$on('update:selected',(name) => {
            this.active = name === this.name;
        })
    }
}
</script>
<style scoped lang="scss">
    .tabs-pane {
        padding: 1em;
        &.active {
           
        }
    }
</style>
