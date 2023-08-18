<template>
    <button class="button" :class="btn">
        <slot name="button" >

        </slot>
    </button>
</template>
<script lang="ts">
export default {
    props: {
        btn:{
            type: String,
        }
    }
}
</script>

<style scoped lang="scss">
.button {
    display: flex;
    align-items: center;
    background: #38635D;
    border-radius: 8px;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0.05em;
    color: #FFFFFF;
}
</style>
