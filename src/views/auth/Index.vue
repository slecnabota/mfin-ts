<template>
    <div class="content">
        <form @submit.prevent="login" class="form">
            <h2>Вход</h2>
            <div class="module-item">
                <default-input input-text="Ваш e-mail" v-bind="form.input('email')" />
                <div class="form__password">
                    <default-input :inputType="inputTypeIcon" input-text="Ваш пароль" v-bind="form.input('password')" />
                    <button class="input-group-text" @click.prevent="toggleInputIcon">
                        <font-awesome-icon v-if="inputTypeIcon === 'password'" icon="fa-eye" />
                        <font-awesome-icon v-else icon="eye-slash" />
                    </button>
                </div>
            </div>
            <div class="direction">
                <router-link :to="{ name: 'reset' }" class="main-text">Забыли пароль?</router-link>
                <router-link :to="{ name: 'registerpage' }" class="light-text">Зарегистрироваться</router-link>
            </div>
            <form-button :btn="main">
                <template #btn>Войти</template>
            </form-button>
        </form>
    </div>
</template>

<script lang="ts">
import FormButton from "@/components/ui/button/FormButton.vue";
import DefaultInput from "@/components/ui/input/DefaultInput.vue";
import Form from '@/libs/nast-form/index';
import Auth from '@/libs/nast-auth/index'
export default {
    name: "LogInPage",
    components: { FormButton, DefaultInput },
    data() {
        return {
            form: new Form(),
            auth: new Auth(),
            main: "main-btn",
            inputTypeIcon: "password",
        };
    },
    created() {
        this.form.init({
            email: "",
            password: "",
        })
        this.form.setRules({
            'email': ['min:5', 'max:100', 'required', 'email'],
            'password': ['min:5', 'max: 10', 'required'],
        })
    },
    methods: {
        login() {
            if (this.form.validate()) {
                this.auth.login(this.form.get(), "token")
                console.log("Форма прошла валидацию");
            } else {
                console.log("no")
            }

        },
        toggleInputIcon() {
            this.inputTypeIcon = this.inputTypeIcon === "password" ? "text" : "password";
        },
    },
};
</script>

<style scoped lang="scss">
form {
    .direction {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 45px 0;
    }

    & .module-item>div {
        &:not(:last-child) {
            margin-bottom: 20px;
        }
    }
}
</style>
