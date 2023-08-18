<template>
  <div class="content">
    <form class="form">
      <h2>Восстановить пароль</h2>
      <div class="form__password">
        <default-input />
        <button class="input-group-text" @click.prevent="toggleInputIcon">
          <font-awesome-icon v-if="inputTypeIcon === 'password'" icon="fa-eye" />
          <font-awesome-icon v-else icon="eye-slash" />
        </button>
      </div>
      <div class="form__password">
        <default-input />
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

<script lang="ts">
import pages from '@/const/pages.js'
import FormButton from "@/components/ui/button/FormButton.vue";
import DefaultInput from "@/components/ui/input/DefaultInput.vue";
import Form from '@/libs/nast-form/index';
export default {
  name: "ResetPassword",
  components: { FormButton, DefaultInput },
  data() {
    return {
      form: new Form(),
      mail: "mail",
      pages: pages,
      inputTypeIcon: "password",
      inputTypeIcon2: "password",
    }
  },
  methods: {
    getLink() {
      const routeName = this.$route.name as keyof typeof pages;
      if (routeName && this.pages[routeName] && this.pages[routeName].parent) {
        return this.pages[routeName].parent;
      }
    },

    toggleInputIcon() {
      this.inputTypeIcon = this.inputTypeIcon === "password" ? "text" : "password";
    },

    toggleInputIcon2() {
      this.inputTypeIcon2 = this.inputTypeIcon2 === "password" ? "text" : "password";
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

    &__password {
      margin-bottom: 20px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  & .error {
    margin-top: 15px;
  }
}
</style>
