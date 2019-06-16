<template>
    <div class="tabs-item" @click="xxx" :class="classes">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'WheelTabsItem',
    inject: ['eventBus'],
    props: {
        disabled: {
            type: Boolean,
            default: false
        },
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
    },
    methods: {
        xxx () {
            this.eventBus.$emit('update:selected',this.name)
        }
    }
}
</script>
<style scoped lang="scss">
    .tabs-item {
        flex-shrink: 0;
        padding: 0 2em;
        &.active {
            background:red; 
        }
    }
</style>