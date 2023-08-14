<!-- <template>
    <modal-window ref="modal" v-model:open="open" :modalRow="modalRow">
        <template #body v-if="activeTemplate === 'button1'">
            <h3>Уверены, что хотите удалить "Название"?</h3>
            <div class="btn">
                <button>Удалить</button>
                <button @click="closeModal()">Отмена</button>
            </div>
        </template>
        <template #body v-if="activeTemplate === 'button2'">
            2
        </template>
    </modal-window>
    <div class="content">
        <router-link :to="{ name: getLink() }" class="content__back">
            <img src="@/assets/img/back.svg" alt="">
            <h1>Счета</h1>
        </router-link>
        <div class="inner">
            <div class="content__top">
                <search-item :search="search"></search-item>
                <router-link :to="{ name: 'addPages' }">
                    <button-item :btn="btn">
                        <template #button>
                            + Добавить счет
                        </template>
                    </button-item>
                </router-link>
            </div>
            <div class="content__table table-content">
                <my-table :columnNames="columnNames" :item="item" :infos="infos">
                    <template #date="{ info }">
                        {{ info.date.from }}
                        <br>
                        {{ info.date.to }}
                    </template>
                    <template #sum="{ info }">
                        {{ info.sum }} $
                    </template>
                    <template #parent="{ info }">
                        {{ info.parent.accounts }}
                        <br>
                        {{ info.parent.remains }}
                    </template>
                    <template #hide>
                        <img :src="hideImg" class="content-center" @click="hideImage" />
                    </template>
                    <template #edit="{ info }">
                        <router-link :to="{ name: 'editPages', query: { title: info.title, balance: info.balance } }">
                            <img :src="editImg" class="content-center" />
                        </router-link>
                    </template>
                    <template #del>
                        <img :src="deleteImg" class="content-center" @click="showModal('button1')" />
                    </template>
                </my-table>
            </div>
        </div>
    </div>
</template>

<script>
import pages from '@/const/pages.js'
import ButtonItem from '@/components/ui/button/Button.vue'
import SearchItem from '@/components/blocks/filter/SearchItem.vue'
import MyTable from '@/components/blocks/table/Table.vue'
import ModalWindow from '@/components/blocks/modal/ModalWindow.vue'

import deleteImg from '@/assets/img/delete.svg'
import hideImg from '@/assets/img/hide.svg'
import editImg from '@/assets/img/edit.svg'
export default {
    name: 'Accounts',
    components: {
        SearchItem, ButtonItem, MyTable, ModalWindow
    },
    data() {
        return {
            open: false,
            activeTemplate: '',
            pages: pages,
            search: 'Поиск по названию',
            btn: 'btn',
            deleteImg, editImg, hideImg,
            item: 'item',
            modalRow: 'modal-btn',
            information: 'information',
            columnNames: {
                currency: 'Валюта',
                title: 'Название',
                balance: 'Баланс',
                hide: 'Скрыть',
                edit: 'Ред',
                del: 'Удалить'
            },
            infos: [
                {
                    currency: '$',
                    title: 'Банковский счет',
                    balance: '110000',
                },
                {
                    currency: '$',
                    title: 'Банковский счет',
                    balance: '120000',
                },
                {
                    currency: '$',
                    title: 'Банковский счет',
                    balance: '130000',
                },
                {
                    currency: '$',
                    title: 'Банковский счет',
                    balance: '140000',
                },
            ],
        }
    },
    methods: {
        getLink() {
            return pages[this.$route.name].parent
        },
        showModal(templateName) {
            this.activeTemplate = templateName;
            this.open = true;
        },
        closeModal() {
            this.open = false;
        },
        hideImage(event) {
            const row = event.target.closest("tr");
            if (row) {
                row.style.opacity = "0.5";
            }
        }
    }
}
</script>

<style scoped lang="scss">
.content {
    &__top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding: 0 25px;
    }

    &-center {
        margin: 0 auto;
        cursor: pointer;
    }

    &__table {
        margin-top: 35px;
        background: #FFFFFF;
        box-shadow: 1px 2px 8px #C8C8FC;
        border-radius: 35px;
        padding: 35px;
    }

    & .btn {
        padding: 15px;
    }

}

.modal-btn {
    h3 {
        font-weight: 400;
        font-size: 24px;
        line-height: 29px;
        color: #38635D;
        margin-bottom: 15px;
    }

    & .btn {
        display: flex;
        align-items: center;
        justify-content: space-between;

        button {
            background: #38635D;
            border-radius: 8px;
            padding: 15px 30px;
            font-weight: 600;
            font-size: 20px;
            line-height: 24px;
            letter-spacing: 0.05em;
            color: #FFFFFF;

            &:last-child {
                background: rgba(119, 118, 118, 0.7);
                border-radius: 8px;
            }
        }

    }
}
</style> -->
<template>
    <h1>No</h1>
</template>
<script setup>
</script>
