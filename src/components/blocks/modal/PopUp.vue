  <!-- <template>
    <div class="pop-up" :class="class">
      <div class="pop-up__back" v-if="open" @click="show"></div>
      <slot name="button" :click="show">
      </slot>
      <div v-if="open" class="pop-up__window">
        <div class="pop-up__close" @click="show">
          <svg width="22" height="26" viewBox="0 0 22 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M19.7843 0.743164L11 10.7253L2.21571 0.743164L0 3.26102L8.78429 13.2432L0 23.2253L2.21571 25.7432L11 15.761L19.7843 25.7432L22 23.2253L13.2157 13.2432L22 3.26102L19.7843 0.743164Z"
              fill="#013832" />
          </svg>
        </div>
        <div class="pop-up__content">
          <slot name="pop-up" :click="show"></slot>
        </div>
      </div>
    </div>
  </template>
      
  <script>
  export default {
    data() {
      return {
        open: false,
      };
    },
    methods: {
      show() {
        this.open = !this.open;
        this.$emit('show-event');
      },
      click() {
        this.$emit('selectItems'); // Emit custom event to trigger selectItems in FilterSelect
      },
    },
    props: {
      class: {
        type: String,
      },
    },
  };
  </script>

  <style scoped lang="scss">
  .pop-up {
    position: relative;

    &__back {
      position: fixed;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      z-index: 99;
    }

    &__hide {
      .pop-up__close {
        display: none;
      }

      .pop-up__content {
        margin-top: 0;
      }
    }

    &__select {
      .pop-up__window {
        max-width: none;
        min-width: unset;
        width: 100%;
      }
    }

    &__input {
      .pop-up__close {
        display: none;
      }

      .pop-up__window {
        max-width: none;
        min-width: unset;
        width: 100%;
        padding: 20px;
      }

      .pop-up__content {
        margin: 0;
      }
    }

    &__window {
      background: #FFFFFF;
      box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.3);
      border-radius: 20px;
      border-radius: 8px;
      min-width: 420px;
      max-width: 450px;
      position: absolute;
      left: 0;
      z-index: 100;
      padding: 30px 20px;
    }

    &__close {
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

    &__content {
      margin-top: 20px;
    }

    &__right {
      & .pop-up__window {
        right: 0;
        left: auto;
      }
    }
  }
  </style> -->
  <template>
    <h1>No</h1>
</template>
<script setup>
</script>