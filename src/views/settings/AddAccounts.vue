<!-- <template>
    <div class="content">
        <router-link :to="{ name: getLink() }" class="content__back">
            <img src="@/assets/img/back.svg" alt="">
            <h1>Новый счет</h1>
        </router-link>
        <div class="inner">
            <div class="content__form">
                <form action="#">
                    <div class="content__form-row">
                        <label for="value">
                            Валюта:
                        </label>
                        <acc-select :items="currency" :defaultName="'Валюта'"></acc-select>
                    </div>
                    <div class="content__form-row">
                        <label for="name">
                            Название:
                        </label>
                        <acc-input :type="'text'" :name="'Название'" :id="'name'"></acc-input>
                    </div>
                    <div class="content__form-row">
                        <label for="balanca">
                            Баланс:
                        </label>
                        <acc-input :type="'text'" :name="'Стартовый баланс'" :id="'balanca'"></acc-input>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import pages from '@/const/pages.js'
import AccSelect from '@/components/ui/Select/AccSelect.vue'
import AccInput from '@/components/ui/input/AccInput.vue'
export default {
    name: 'AddAccounts',
    data() {
        return {
            pages: pages,
            currency: ['Тенге (тг)', 'USD ($)'],
        }
    },
    components: {
        AccSelect, AccInput
    },
    methods: {
        getLink() {
            return pages[this.$route.name].parent
        },
    }
}
</script>
<style scoped lang="scss">
.content {
    &__form {
        background: #FFFFFF;
        box-shadow: 1px 2px 8px #C8C8FC;
        border-radius: 35px;
        padding: 45px 60px;
        min-width: 880px;
        height: 100%;

        form {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            row-gap: 30px;
        }

        &-row {
            width: 100%;
            display: flex;
            align-items: center;
        }

        label {
            width: 200px;
            padding-right: 60px;
            font-weight: 600;
            font-size: 20px;
            line-height: 24px;
            color: #013832;
        }

        input {
            width: calc(100% - 200px);
        }
    }
}
</style> -->
<template>
    <h1>No</h1>
</template>
<script setup>
</script>
