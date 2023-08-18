<template>
    <div v-if="open" class="modal-shadow" @click.self="closeModal">
        <div class="modal" v-if="open" :class="modalRow">
            <div class="modal-close" @click="closeModal">
                <svg width="22" height="26" viewBox="0 0 22 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M19.7843 0.743164L11 10.7253L2.21571 0.743164L0 3.26102L8.78429 13.2432L0 23.2253L2.21571 25.7432L11 15.761L19.7843 25.7432L22 23.2253L13.2157 13.2432L22 3.26102L19.7843 0.743164Z"
                        fill="#013832" />
                </svg>
            </div>
            <div class="modal-content">
                <slot name="body"></slot>
            </div>
        </div>
    </div>
</template>
  
<script lang="ts">
export default {
    name: "ModalWindow",
    props: {
        open: { type: Boolean, default: false, },
        modalRow: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            // showModal: false
        };
    },
    methods: {
        closeModal() {
            this.$emit('update:open', false)
            // this.open = false;
        }
    }
};
</script>
  
<style scoped lang="scss">
.modal-shadow {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 100;
}

.modal {
    background: #FFFFFF;
    box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.3);
    border-radius: 20px;
    border-radius: 8px;

    min-width: 420px;
    max-width: 450px;
    position: absolute;
    top: 50px;
    left: calc(50% - 210px);
    padding: 40px 30px;
    z-index: 100;

    &-close {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 20px;
        right: 20px;
        width: 30px;
        height: 30px;
        cursor: pointer;
    }

    &-content {
        margin-top: 10px;
    }

    &-btn {
        top: calc(50% - 150px);
    }
}
</style>
  