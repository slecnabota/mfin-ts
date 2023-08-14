<!-- <template>
  <div class="content">
    <form @submit.prevent="resetPassword" class="form">
      <h2>Восстановить пароль</h2>
      <div class="form__password">
        <default-input :input-type="inputTypeIcon" input-text="Ваш пароль" v-model="formData.password"
          :error="errors.password" />
        <button class="input-group-text" @click.prevent="toggleInputIcon">
          <font-awesome-icon v-if="inputTypeIcon === 'password'" icon="fa-eye" />
          <font-awesome-icon v-else icon="eye-slash" />
        </button>
      </div>
      <div class="form__password">
        <default-input :input-type="inputTypeIcon" input-text="Повторите пароль" v-model="formData.password2"
          :error="errors.password2" />
        <button class="input-group-text" @click.prevent="toggleInputIcon">
          <font-awesome-icon v-if="inputTypeIcon === 'password'" icon="fa-eye" />
          <font-awesome-icon v-else icon="eye-slash" />
        </button>
      </div>
      <form-button :btn="mail">
        <template #btn>Изменить пароль</template>
      </form-button>
      <router-link :to="{ name: getLink() }" class="light-text">
        Вернуться на страницу входа
      </router-link>
    </form>
  </div>
</template>

<script>
import pages from '@/const/pages.js'
import FormButton from "@/components/ui/button/FormButton.vue";
import DefaultInput from "@/components/ui/input/DefaultInput.vue";
import Form from '@/validation/form.js';
export default {
  name: "ResetPassword",
  components: { FormButton, DefaultInput },
  data() {
    return {
      form: null,
      mail: "mail",
      pages: pages,
      formData: {
        password: "",
        password2:"",
      },
      errors: {},
      rules: {
        password: {
          password: false,
          required: true,
          min: 5,
          max: 100,
        },
        password2:{
          pattern: false,
          required: true,
          min: 5,
          max: 100,
        }
      },
      inputTypeIcon: "password",
    }
  },
  created() {
    this.form = new Form();
    this.form.setRules(this.rules);
  },
  methods: {
    getLink() {
      return pages[this.$route.name].parent;
    },

    toggleInputIcon() {
      this.inputTypeIcon = this.inputTypeIcon === "password" ? "text" : "password";
    },

    toggleInputIcon2() {
      this.inputTypeIcon2 = this.inputTypeIcon2 === "password" ? "text" : "password";
    },
    resetPassword() {
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
  }
};
</script>

<style scoped lang="scss">
.content {
  & .light-text {
    font-size: 14px;
    line-height: 17px;
    margin-top: 30px;
    text-align: right;
  }

  & .form {
    &>button {
      margin-top: 25px;
    }
    &__password{
      margin-bottom: 20px;
      &:last-child{
        margin-bottom: 0;
      }
    }
  }

  & .error {
    margin-top: 15px;
  }
}
</style> -->
<template>
  <h1>No</h1>
</template>
<script setup>
</script>