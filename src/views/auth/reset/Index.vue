<!-- <template>
  <div class="content">
    <form action="" class="form" @submit.prevent="validateEmail">
      <h2>Восстановить пароль</h2>
      <p class="main-text">
        На Ваш e-mail будет выслана ссылка для восстановления пароля
      </p>
      <div class="module-item">
        <default-input 
        v-bind="generateInputProps('text', 'Ваш e-mail', formData.email, errors.email)"
      v-model="formData.email" />
      </div>
      <form-button :btn="reset">
        <template #btn>Восстановить пароль</template>
      </form-button>
    </form>
  </div>
</template>
<script>
import FormButton from "@/components/ui/button/FormButton.vue";
import DefaultInput from "@/components/ui/input/DefaultInput.vue";
import Form from '@/validation/form.js';
export default {
  name: "ResetPage",
  components: { FormButton, DefaultInput },
  data() {
    return {
      form: null,
      reset: "reset",
      formData: {
        email: "",
      },
      errors: {},
      rules: {
        email: {
          pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          required: true,
          min: 5,
          max: 100,
        },
      },
    }
  },
  created() {
    this.form = new Form();
    this.form.setRules(this.rules);
  },
  methods: {
    generateInputProps(inputType, inputText, value, error) {
      return {
        inputType,
        inputText,
        value,
        error,
      };
    },
    validateEmail() {
      this.form.validate(this.formData);
      if (Object.keys(this.form.errors).length === 0) {
        console.log("Форма прошла валидацию");
        this.errors = {};
        this.$router.push({ name: 'loginpage' });
      } else {
        console.log("Форма содержит ошибки");
        this.errors = { ...this.form.errors };
      }
    },
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
</style> -->
<template>
  <h1>No</h1>
</template>
<script setup>
</script>