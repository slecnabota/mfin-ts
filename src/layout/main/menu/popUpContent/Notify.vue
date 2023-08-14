<!-- <template>
    <h4>Уведомления</h4>
    <div class="notify__content">
        <div class="notify__item" v-for="valueItem in value">
            Поступил платеж от “Maint” на сумму KZT {{ valueItem }}
    </div>
    </div>
</template>

<script>
import MySelect from '@/components/ui/Select/Select.vue'
export default {
    name: 'Notify',
    components: {
        MySelect
    },
    props: {
        value: {
            type: Array,
        }
    },
    data() {
        return {
            open: false,
            activeTemplate: '',
            options: ['Банковский счет', 'Сейф', 'Касса'],
            currency: ['Тенге (тг)', 'USD ($)'],
            sumInput: `Сумма, тг`,
            category: ['Инвестиции', 'Возврат займа', 'Предоставление услуг', 'Доп продажи', 'Аванс', 'Получение кредита'],
            agent: ['Гарри Поттер', 'Андрей романов', 'Гарри Поттер', 'Ольга Ким'],
            projects: ['Мой проект 1', 'Мой проект 2'],
            customClass: 'pop-up__right',
        }
    }
}
</script>

<style scoped lang="scss">
.menu {
    h4 {
        font-weight: 500;
        font-size: 24px;
        line-height: 29px;
        color: #013832;
        margin-bottom: 20px;
    }

    & .notify__content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        row-gap: 30px;
        padding: 0 20px;

        & .notify__item {
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            color: #013832;
        }
    }
}
</style> -->
<template>
    <h1>No</h1>
</template>
<script setup>
</script>