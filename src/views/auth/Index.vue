<!-- <template>
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

<script>
import FormButton from "@/components/ui/button/FormButton.vue";
import DefaultInput from "@/components/ui/input/DefaultInput.vue";
import Form from '@/validation/form.js';
import { setIsAuthenticated } from '@/router/router.js';
import { mapMutations } from 'vuex';
export default {
    name: "LogInPage",
    components: { FormButton, DefaultInput },
    data() {
        return {
            form: new Form(),
            main: "main-btn",
            formName: "formLogIn",
            inputTypeIcon: "password",
        };
    },
    created() {
        this.form.init({
            email: "",
            password: "",
        }, this.formName)
        this.form.setRules({
            'email': ['min:5', 'max:100', 'required', 'email'],
            'password': ['min:5', 'max: 10', 'required'],
        })
    },
    methods: {
        ...mapMutations(['setEmail']),
        login() {
            if (this.form.validate()) {
                console.log("Форма прошла валидацию");
                this.setEmail(this.$store.state.formValues.formLogIn.email);
                setIsAuthenticated(true).then(() => {
                    this.$router.push({ name: 'payments' });
                });
            } else {
                console.log("no")
                console.log(this.$store.state.formErrors)
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
</style> -->
<template>
    <h1>No</h1>
</template>
<script setup></script>