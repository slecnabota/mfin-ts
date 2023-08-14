<!-- <template>
    <p class="user-mail">{{ $store.state.email }}</p>
    <p class="user-item">Подписка</p>
    <p class="user-item">Смена пароля</p>
    <form @submit.prevent="logout">
        <button class="user-item exit">Выход</button>
    </form>
</template>

<script>
import { mapMutations } from 'vuex';
import { setIsAuthenticated } from '@/router/router.js';
export default {
    name: 'User',
    methods: {
        ...mapMutations(['setEmail']),
        logout() {
            this.setEmail('');
            setIsAuthenticated(false);
            this.$router.push({ name: 'loginpage' });
        },
    }
}
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
</style> -->
<template>
    <h1>No</h1>
</template>
<script setup>
</script>