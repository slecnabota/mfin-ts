<template>
    <pop-up :class="customClass" class="filtering-item">
        <template #button="{ click }">
            <div class="filtering-element filter-item" @click="click">
                <img src="@/assets/img/filter.svg" alt="">
                Фильтр
            </div>
        </template>
        <template #pop-up>
            <filter-select v-for="payment in payments" :title="payment.title" :heading="payment.heading"
                :items="payment.items"></filter-select>
            <filter-select v-for="category in categories" :title="category.title" :heading="category.heading"
                :items="category.items"></filter-select>
            <filter-select v-for="counterparty in counterparties" :title="counterparty.title"
                :heading="counterparty.heading" :items="counterparty.items"></filter-select>
            <filter-select v-for="project in projects" :title="project.title" :heading="project.heading"
                :items="project.items"></filter-select>
            <filter-select v-for="account in accounts" :title="account.title" :heading="account.heading"
                :items="account.items"></filter-select>

            <div class="bottom">
                <my-button>
                    <template #button>
                        Сохранить
                    </template>
                </my-button>
                <my-button>
                    <template #button>
                        Сбросить
                    </template>
                </my-button>
            </div>
        </template>
    </pop-up>
</template>

<script lang="ts">
import PopUp from '../modal/PopUp.vue'
import FilterSelect from '../../ui/select/FilterSelect.vue'
import MyButton from '../../ui/button/Button.vue'
export default {
    name: 'FilteringItem',
    components: {
        PopUp, FilterSelect, MyButton
    },
    data() {
        return {
            open: false,
            activeTemplate: '',
            customClass: 'pop-up__right pop-up__hide',
            payments: [
                {
                    title: "Типы платежей",
                    heading: "Все типы платежей",
                    items: [
                        "Доход",
                        "Расход",
                        "Перевод",
                    ]
                }
            ],
            categories: [
                {
                    title: "Категория",
                    heading: "Все категории",
                    items: [
                        "Возврат займа",
                        "Предоставление услуг",
                        "Доп продажи",
                        "Аванс",
                        "Получение кредита",
                    ]
                }
            ],
            counterparties: [
                {
                    title: "Контрагенты",
                    heading: "Все контрагенты",
                    items: [
                        "Контрагент1",
                        "Контрагент2",
                        "Контрагент3",
                    ]
                }
            ],
            projects: [
                {
                    title: "Проекты",
                    heading: "Все проекты",
                    items: [
                        "Проект1",
                        "Проект2",
                        "Проект3",
                    ]
                }
            ],
            accounts: [
                {
                    title: "Счета",
                    heading: "Все cчета",
                    items: [
                        "QWERTY",
                        "Сейф",
                        "Банковский счет",
                    ]
                }
            ],


        }
    }
}
</script>

<style scoped lang="scss">
.filtering-item {
    .filtering-element {
        display: flex;
        align-items: center;
        column-gap: 10px;
        background: #E1EDEA;
        border-radius: 20px;
        width: fit-content;
        padding: 10px 35px;
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
        display: flex;
        align-items: center;
        letter-spacing: 0.05em;
        color: #38635D;
        cursor: pointer;
    }

    .pop-up__right {
        .pop-up__back {
            display: none;
        }
    }

    .bottom{
        margin-top: 50px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        column-gap: 60px;
        button{
            font-size: 20px;
            line-height: 24px;
            font-weight: 400;
            padding: 10px 30px;
        }
    }
}
</style>
