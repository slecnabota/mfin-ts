<template>
    <div class="content">
        <form action="" class="form">
            <h2>Письмо отправлено</h2>
            <p class="light-text">
                Перейдите по ссылке в письме для восстановления пароля
            </p>
            <router-link :to="{ name: getLink() }">
                <form-button :btn="mail">
                    <template #btn>На главную</template>
                </form-button>
            </router-link>
        </form>
    </div>
</template>
<script lang="ts">
import FormButton from "@/components/ui/button/FormButton.vue";
import pages from '@/const/pages.js'
export default {
    name: "SendMail",
    components: { FormButton },
    data() {
        return {
            mail: "mail",
            pages: pages,
        }
    },
    methods: {
        getLink() {
            const routeName = this.$route.name as keyof typeof pages;
            if (routeName && this.pages[routeName] && this.pages[routeName].parent) {
                return this.pages[routeName].parent;
            }
        },
    }
}
</script>
<style scoped lang="scss">
.content {
    & .light-text {
        margin: 30px 0;
        font-size: 14px;
        line-height: 17px;
    }
}
</style>
