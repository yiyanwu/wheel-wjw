<template>
    <div class="wrapper" :class="{error}">
        <input :value="value" type="text" :disabled="disabled" :readonly="readonly"
            @change="$emit('change',$event.target.value)"
            @input="$emit('input',$event.target.value)"
            @focus="$emit('focus',$event.target.value)"
            @blur="$emit('blur',$event.target.value)"
        >
        <template v-if="error">
            <icon name="error" class="icon-error"></icon>
            <span class="error-message">{{error}}</span>
        </template>
    </div>
</template>
<script>
import Icon from './icon'

export default {
    components: {Icon},
    name: 'WheelInput',
    props: {
        value: {
            type: String
        },
        disabled: {
            type: Boolean,
            default: false
        },
        readonly: {
            type: Boolean,
            default: false
        },
        error: {
            type: String
        }
    }
}
</script>
<style lang='scss' scoped>
$height: 32px;
$border-color: #4cbcf0;
$border-color-hover: #409eff;
$border-radius: 4px;
$font-size: 14px;
$box-shadow-color: rgba(0,0,0,0.5);
$red: #f1453d;
     .wrapper {
         font-size: $font-size; display: inline-flex; align-items: center;
         > :not(:last-child){ margin-right: 0.5em;}
         > input {
            height: $height; border: 1px solid $border-color; padding: 0 8px;
            font-size: inherit; border-radius: $border-radius;
            &:hover { border-color: $border-color-hover;}
            &:focus { box-shadow: inset 0 1px 3px $box-shadow-color; outline: none;}
            &[disabled],&[readonly] { border-color: $border-color; color: #bbb; cursor: not-allowed; }
         }
         &.error {
             >input { border-color: $red;}
         }
         .icon-error { stroke: $red;}
         .error-message { color: $red;}
     }
</style>
