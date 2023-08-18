<template>
    <div class="menu menu-top">
        <div class="menu-flex menu-left">
            <pop-up>
                <template #button="{ click }">
                    <menu-action nameClass="add" @click="click">
                        <template v-slot:default>
                            <img src="@/assets/img/add.svg" alt="" class="notification">
                            <span>Доход</span>
                        </template>
                    </menu-action>
                </template>
                <template #pop-up>
                    <add></add>
                </template>
            </pop-up>
            <pop-up>
                <template #button="{ click }">
                    <menu-action nameClass="remove" @click="click">
                        <template v-slot:default>
                            <img src="@/assets/img/minus.svg" alt="" class="notification">
                            <span>Расход</span>
                        </template>
                    </menu-action>
                </template>
                <template #pop-up>
                    <remove></remove>
                </template>
            </pop-up>
            <pop-up>
                <template #button="{ click }">
                    <menu-action nameClass="transfer" @click="click">
                        <template v-slot:default>
                            <img src="@/assets/img/transfer.svg" alt="" class="notification">
                            <span>Перевод</span>
                        </template>
                    </menu-action>
                </template>
                <template #pop-up>
                    <transfer></transfer>
                </template>
            </pop-up>
        </div>

        <div class="menu-flex menu-right">
            <pop-up :class="customClass">
                <template #button="{ click }">
                    <div class="menu-action" @click="click">
                        <img src="@/assets/img/notification.svg" alt="" class="notification">
                    </div>
                </template>
                <template #pop-up>
                    <notify :value="history"></notify>
                </template>
            </pop-up>
            <pop-up :class="customClass">
                <template #button="{ click }">
                    <div class="menu-action" @click="click">
                        <img src="@/assets/img/action-history.svg" alt="" class="action-history">
                    </div>
                </template>
                <template #pop-up>
                    <history-page></history-page>
                </template>
            </pop-up>
            <pop-up :class="customClass">
                <template #button="{ click }">
                    <div class="menu-action" @click="click">
                        <img src="@/assets/img/user.svg" alt="" class="user">
                    </div>
                </template>
                <template #pop-up>
                    <user></user>
                </template>
            </pop-up>
        </div>
    </div>
</template>
  
<script lang="ts">
import PopUp from '@/components/blocks/modal/PopUp.vue'
import Add from './popUpContent/Add.vue'
import Remove from './popUpContent/Remove.vue'
import Transfer from './popUpContent/Transfer.vue'
import Notify from './popUpContent/Notify.vue'
import HistoryPage from './popUpContent/History.vue'
import User from './popUpContent/User.vue'
import MenuAction from '@/components/ui/button/MenuAction.vue'

import { setIsAuthenticated } from '@/router/router.js';
export default {
    name: 'MenuTop',
    components: {
        // ModalWindow,
        PopUp,
        MenuAction,
        Add, Remove, Transfer, Notify, HistoryPage, User
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
            history: {
                firstN: 523155,
                secondN: 522000,
            }
        };
    },
    methods: {
        showModal(templateName:any) {
            this.activeTemplate = templateName;
            this.open = true;
        },
    }
};
</script>
  
<style scoped lang="scss">
.menu {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;

    &-modal {
        display: flex;
        flex-direction: column;
        row-gap: 20px;

        input,
        textarea {
            width: 100%;
            display: block;
            background: #E1EDEA;
            border-radius: 8px;
            padding: 15px 20px;
            font-weight: 300;
            font-size: 20px;
            line-height: 24px;
            color: rgba(2, 27, 24, 0.5);
            border: none;
            outline: none;
        }

        button {
            width: 100%;
            font-weight: 600;
            font-size: 16px;
            line-height: 19px;
            letter-spacing: 0.05em;
            color: #FFFFFF;
            padding: 20px;
            background: #38635D;
            border-radius: 8px;
            margin-top: 20px;
        }

        & .input-wrapper {
            display: flex;
            align-items: center;
            justify-content: space-between;
            column-gap: 15px;
        }

        & .input-checkbox {
            display: flex;
            align-items: center;
            column-gap: 20px;

            input {
                border: 2px solid #38635D;
                width: 25px;
                height: 25px;
            }

            p {
                font-weight: 300;
                font-size: 20px;
                line-height: 24px;
                color: #38635D;
            }
        }

        & .input-inner {
            display: flex;
            flex-direction: column;
            row-gap: 5px;
            background: #E1EDEA;
            border-radius: 8px;
            padding: 10px 20px;

            span {
                font-weight: 300;
                font-size: 12px;
                line-height: 15px;
                color: rgba(49, 49, 49, 0.76);
            }

            input {
                font-weight: 300;
                font-size: 20px;
                line-height: 24px;
                color: #38635D;
                padding: 0;
            }
        }
    }

    &-flex {
        display: flex;
        align-items: center;
        column-gap: 25px;
    }

    &-action {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 60px;
        height: 60px;
        background: #B0C5C0;
        border-radius: 100%;
        cursor: pointer;
        transition: width .3s;

        span {
            width: 0;
            opacity: 0;
            visibility: hidden;
            transition: visibility .3s;
        }

        &.add {
            background: rgba(88, 255, 73, 0.5);

            span {
                font-weight: 400;
                font-size: 17px;
                line-height: 21px;
                color: #12A005;
            }

            &:hover {
                width: fit-content;
                border-radius: 30px;
                padding: 15px 25px;

                span {
                    width: 100%;
                    opacity: 1;
                    margin-left: 20px;
                    visibility: visible;
                }
            }
        }

        &.remove {
            background: rgba(218, 88, 88, 0.5);

            span {
                font-weight: 400;
                font-size: 17px;
                line-height: 21px;
                color: #F03131;
            }

            &:hover {
                width: fit-content;
                border-radius: 30px;
                padding: 15px 25px;

                span {
                    width: 100%;
                    opacity: 1;
                    margin-left: 20px;
                    visibility: visible;
                }
            }
        }

        &.transfer {
            background: rgba(119, 118, 118, 0.5);

            span {
                font-weight: 400;
                font-size: 17px;
                line-height: 21px;
                color: #FFFFFF;
            }

            &:hover {
                width: fit-content;
                border-radius: 30px;
                padding: 15px 25px;

                span {
                    width: 100%;
                    opacity: 1;
                    margin-left: 20px;
                    visibility: visible;
                }
            }
        }
    }
}
</style>
  
