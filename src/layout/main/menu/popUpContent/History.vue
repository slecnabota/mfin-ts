<template>
    <h4>История действий</h4>
    <div class="history__content">
        <div class="history__item">
            <item v-for="historyItem in history" :image="historyItem.img" :sum="historyItem.sum" :acc="historyItem.acc"
                :date="historyItem.date"></item>
        </div>
        <button>Подробнее</button>
    </div>
</template>

<script lang="ts">
import MySelect from '@/components/ui/select/Select.vue'
import Item from '@/components/blocks/history/Item.vue'

import editMinus from '@/assets/img/history-minus.svg'
export default {
    name: 'HistoryPage',
    components: {
        MySelect, Item
    },
    data() {
        return {
            open: false, editMinus,
            activeTemplate: '',
            history: [
                {
                    img: editMinus,
                    sum: '100$',
                    acc: 'Сейф',
                    date: '29 сент. 2022, 16:01:20',
                },
                {
                    img: editMinus,
                    sum: '120$',
                    acc: 'Сейф',
                    date: '29 сент. 2022, 16:01:20',
                },
                {
                    img: editMinus,
                    sum: '15    0$',
                    acc: 'Сейф',
                    date: '29 сент. 2022, 16:01:20',
                },
            ]
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

    &-modal {
        display: flex;
        flex-direction: column;
        row-gap: 20px;
    }

    & .history__item {
        display: flex;
        flex-direction: column;
        row-gap: 25px;
        margin-top: 25px;
    }

    & .history__content {
        button {
            width: 100%;
            font-weight: 600;
            font-size: 20px;
            line-height: 24px;
            letter-spacing: 0.05em;
            color: #FFFFFF;
            background: #38635C;
            border-radius: 8px;
            padding: 20px;
            margin-top: 40px;
        }
    }
}
</style>
