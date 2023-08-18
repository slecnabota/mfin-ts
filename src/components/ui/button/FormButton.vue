<template>
    <button type="submit" :class="btn" class="btn">
        <slot name="btn"></slot>
    </button>
</template>
<script lang="ts">
export default {
    name: 'FormButton',
    props:['btn']
}
</script>
<style scoped lang="scss">
.btn {
    width: 100%;
    padding: 15px;
    font-weight: 600;
    font-size: 23px;
    line-height: 28px;
    color: #144742;
    border-radius: 8px;
    &.main-btn {
        background: #99E3D2;
    }
    &.reset{
        background: #B0C5C0;
    }
    &.mail{
        background: #99E3D2;
    }
}
</style>
