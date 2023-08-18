<!-- <template>
    <div class="content">
        <router-link style="font-size: 20px;border:1px solid black;" :to="{ name: getLink() }" class="content__back">
            <img src="@/assets/img/back.svg" alt="">
            <h1>Деньги/Cash Flow</h1>
        </router-link>
        <div class="inner">
            <div class="content__top">
                <cash-select />
                <label for="select">
                    <input type="checkbox" id="select">
                    Учитывать будущие платежи
                </label>
            </div>
            <div class="content__table table-content">
                <my-table :columnNames="columnNames" :item="item" :row="row" :infos="infos" :tableHeight="tableHeight">
                </my-table>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import pages from '@/const/pages.js'
import ButtonItem from '@/components/ui/button/Button.vue'
import MyTable from '@/components/blocks/table/Table.vue'
import CashSelect from '@/components/ui/select/CashSelect.vue'
import FilteringItem from '@/components/blocks/filter/FilteringItem.vue'
export default {
    name: 'Cash',
    components: {
        ButtonItem, MyTable, CashSelect, FilteringItem
    },
    data() {
        return {
            pages: pages,
            btn: 'btn', item: 'item', row: 'row', tableHeight: 'table-height',
            columnNames: {
                names: 'Название',
                // weeks: {
                firstWeek: '1-8 Янв 2022',
                secondWeek: '1-8 Янв 2022',
                thirdWeek: '1-8 Янв 2022',
                fourthWeek: '1-8 Янв 2022',
                fifthWeek: '1-8 Янв 2022',
                sixthWeek: '1-8 Янв 2022',
                // }
            },
            infos: [
                {
                    names: 'Выплаты',
                    // weeks: {
                    firstWeek: '30 000$',
                    secondWeek: '30 000$',
                    thirdWeek: '30 000$',
                    fourthWeek: '30 000$',
                    fifthWeek: '30 000$',
                    sixthWeek: '30 000$',
                    // }
                },
                {
                    names: 'Возвра кредитов',
                    // weeks: {
                    firstWeek: '30 000$',
                    secondWeek: '30 000$',
                    thirdWeek: '30 000$',
                    fourthWeek: '30 000$',
                    fifthWeek: '30 000$',
                    sixthWeek: '30 000$',
                    // }
                },
                {
                    names: 'Взятие кредитов',
                    // weeks: {
                    firstWeek: '30 000$',
                    secondWeek: '30 000$',
                    thirdWeek: '30 000$',
                    fourthWeek: '30 000$',
                    fifthWeek: '30 000$',
                    sixthWeek: '30 000$',
                    // }
                },
                {
                    names: 'Чистый денежный поток',
                    // weeks: {
                    firstWeek: '30 000$',
                    secondWeek: '30 000$',
                    thirdWeek: '30 000$',
                    fourthWeek: '30 000$',
                    fifthWeek: '30 000$',
                    sixthWeek: '30 000$',
                    // }
                },
                {
                    names: 'Остаток на начало недели',
                    // weeks: {
                    firstWeek: '30 000$',
                    secondWeek: '30 000$',
                    thirdWeek: '30 000$',
                    fourthWeek: '30 000$',
                    fifthWeek: '30 000$',
                    sixthWeek: '30 000$',
                    // }
                },
                {
                    names: 'Остаток на конец недели',
                    // weeks: {
                    firstWeek: '30 000$',
                    secondWeek: '30 000$',
                    thirdWeek: '30 000$',
                    fourthWeek: '30 000$',
                    fifthWeek: '30 000$',
                    sixthWeek: '30 000$',
                    // }
                },
                {
                    names: 'Остаток на конец недели',
                    // weeks: {
                    firstWeek: '30 000$',
                    secondWeek: '30 000$',
                    thirdWeek: '30 000$',
                    fourthWeek: '30 000$',
                    fifthWeek: '30 000$',
                    sixthWeek: '30 000$',
                    // }
                },
            ],
        }
    },
    methods: {
        getLink() {
            return pages[this.$route.name].parent
        }
    }
}
</script>

<style scoped lang="scss">
.content {
    &__top {
        display: flex;
        align-items: center;
        column-gap: 25px;
        width: 100%;
        padding: 0 25px;
    }

    &__table {
        margin-top: 35px;
        background: #FFFFFF;
        box-shadow: 1px 2px 8px #C8C8FC;
        border-radius: 35px;
        margin-top: 35px;
        padding: 35px;

        td {
            img {
                margin: 0 auto;
            }
        }
    }

    .btn {
        padding: 15px;
    }

    .names {
        text-align: left;
    }

    label {
        display: flex;
        align-items: center;
        font-weight: 600;
        font-size: 13px;
        line-height: 16px;
        color: #013832;

        input {
            margin-right: 10px;
        }

    }
}
</style> -->

<template></template><script lang='ts'></script>