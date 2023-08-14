<template>
    <div class="content">
        <form @submit.prevent="register" action="" class="form">
            <div class="form__top">
                <h2>Регистрация</h2>
                <router-link :to="{ name: 'loginpage' }" class="main-text">
                    Есть аккаунт? Войти
                </router-link>
            </div>
            <div class="module-item">
                <default-input input-text="Ваш e-mail" v-bind="form.input('email')" />
                <div class="form__password">
                    <default-input :inputType="inputTypeIcon" input-text="Ваш пароль" v-bind="form.input('password')" />
                    <button class="input-group-text" @click.prevent="toggleInputIcon">
                        <font-awesome-icon v-if="inputTypeIcon === 'password'" icon="fa-eye" />
                        <font-awesome-icon v-else icon="eye-slash" />
                    </button>
                </div>
                <default-input input-text="Ваш телефон" v-bind="form.input('tel')" />
            </div>
            <form-button :btn="mail">
                <template #btn>Продолжить</template>
            </form-button>
            <router-link :to="{ name: 'offer' }" class="light-text">
                Нажимая кнопку “Продолжить”,<br /> Вы принимаете условия
                <span>Публичной оферты</span>
            </router-link>
        </form>
    </div>
</template>
  
<script lang="ts">
import FormButton from "@/components/ui/button/FormButton.vue";
import DefaultInput from "@/components/ui/input/DefaultInput.vue";
import Form from '@/validation/form.js';
import { setIsAuthenticated } from '@/router/router.js';
import { mapMutations } from 'vuex';

export default {
    name: "RegisterPage",
    components: { FormButton, DefaultInput },
    data() {
        return {
            form: new Form(),
            formName: 'formRegister',
            mail: "mail",
            inputTypeIcon: "password",
        };
    },
    created() {
        this.form.init({
            email: "",
            password: "",
            tel: "",
        })
        this.form.setRules({
            'email': ['min:5', 'max:100', 'required', 'email'],
            'password': ['min:5', 'max: 10', 'required'],
            'tel': ['required'],
        })
        this.form.setMasks({
            'tel': '+7(000)000-00-00',
        });
    },
    methods: {
        register() {
            if (this.form.validate()) {
                console.log("yes")
                setIsAuthenticated(true).then(() => {
                    this.$router.push({ name: 'payments' });
                });
                // this.setEmail(this.$store.state.formValues.formRegister.email);
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
.content {
    .error {
        color: red;
    }

    & .form {
        &__top {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 25px;

            & h2 {
                margin-bottom: 0;
            }
        }

        & .light-text {
            text-align: center;
            margin-top: 20px;

            span {
                text-decoration: underline;
            }
        }

        &>button {
            margin-top: 25px;
        }
    }

    & .error {
        margin-top: 15px;
    }

    & .module-item>div {
        &:not(:last-child) {
            margin-bottom: 20px;
        }
    }
}
</style>
  