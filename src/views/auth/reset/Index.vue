<template>
  <div class="content">
    <form action="" class="form">
      <h2>Восстановить пароль</h2>
      <p class="main-text">
        На Ваш e-mail будет выслана ссылка для восстановления пароля
      </p>
      <div class="module-item">
        <default-input />
      </div>
      <form-button :btn="reset">
        <template #btn>Восстановить пароль</template>
      </form-button>
    </form>
  </div>
</template>
<script lang="ts">
import FormButton from "@/components/ui/button/FormButton.vue";
import DefaultInput from "@/components/ui/input/DefaultInput.vue";
import Form from '@/libs/nast-form/index';
export default {
  name: "ResetPage",
  components: { FormButton, DefaultInput },
  data() {
    return {
      form: new Form(),
      reset: "reset",
    }
  },
  
};
</script>
<style scoped lang="scss">
.content {
  & .main-text {
    font-size: 14px;
    line-height: 17px;
    margin-bottom: 15px;
  }

  .error {
    margin-top: 15px;
  }

  button {
    margin-top: 25px;
  }
}
</style>
