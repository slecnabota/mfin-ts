<template>
    <p class="user-mail">{{ user }}</p>
    <p class="user-item">Подписка</p>
    <p class="user-item">Смена пароля</p>
    <form @submit.prevent="auth.logout()">
        <button class="user-item exit">Выход</button>
    </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapState } from 'vuex';
import Auth from '../../../../libs/nast-auth/index';
export default defineComponent({
    name: 'User',
    computed: {
        ...mapState({
            user: (state: any) => state.user.email
        })
    },
    data() {
        return {
            auth: new Auth()
        }
    }
})
</script>

<style scoped lang="scss">
.user {
    &-item {
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #013832;
        padding: 20px 10px;
        transition: all .3s;
        cursor: pointer;

        &:hover {
            background: rgba(193, 193, 193, 0.329);
        }

        &.exit {
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            color: #FF0000;
        }
    }

    &-mail {
        padding: 20px 10px;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        text-decoration-line: underline;
        color: rgba(2, 27, 24, 0.5);
    }
}
</style>
