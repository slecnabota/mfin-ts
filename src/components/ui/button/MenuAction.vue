<template>
    <button class="menu-action show-modal-button"  :class="nameClass">
        <slot>
            
        </slot>
    </button>
</template>

<script lang="ts">
export default {
    props: {
        nameClass: String,
    }
}
</script>

<style scoped lang="scss"></style>
