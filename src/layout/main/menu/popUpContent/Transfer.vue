<!-- <template>
    <h4>Новый перевод</h4>
    <form @submit.prevent="onSubmit" class="menu-modal">
        <div class="input-inner">
            <span>Дата списания денег</span>
            <input type="date" v-model="selectedDate" />
        </div>
        <pop-input v-for="option in options" :id="option.id" :heading="option.heading" :items="option.items"
            v-model="selectedItem"></pop-input>
        <pop-input v-for="toOption in toOptions" :id="toOption.id" :heading="toOption.heading" :items="toOption.items"
            v-model="selectedToItem"></pop-input>
        <div class="input-wrapper">
            <input type="number" v-model="inputNumber" :placeholder="'Сумма'" />
            <pop-input v-for="currency in currencies" :id="currency.id" :heading="currency.heading" :items="currency.items"
                v-model="selectedCurrency"></pop-input>
        </div>
        <hr>
        <div ref="addGroup" @click="groupClick" class="group-parent">
            <img src="@/assets/img/dotts.svg" alt="">
            <p>Добавить комментарий</p>
        </div>
        <div v-if="groupClicked" class="group">
            <textarea placeholder="Комментарий" v-model="comment"></textarea>
        </div>
        <hr>
        <div>
            <label for="file" class="input-checkbox">
                <img src="@/assets/img/file.svg" alt="img" />
                <p>Добавить файл</p>
                <input type="file" id="file" ref="fileInput" @change="handleFileChange">
            </label>

            <div v-if="selectedFile">
                Выбранный файл: {{ selectedFile.name }}
            </div>
        </div>
        <hr>
        <button>СОХРАНИТЬ</button>
    </form>
</template>

<script>
import MySelect from '@/components/ui/Select/Select.vue';
import PopInput from '@/components/ui/input/PopUpInput.vue';
export default {
    name: 'Transfer',
    components: {
        MySelect, PopInput
    },
    data() {
        return {
            groupClicked: false,
            selectedDate: null,
            selectedItem: '',
            selectedToItem: '',
            selectedFile: null,
            inputNumber: null,
            selectedCurrency: '',
            textareaValue: '',
            comment: '',
            options: [
                {
                    id: 'options',
                    heading: 'Со счета',
                    items: [
                        "Банковский счет",
                        "Сейф",
                        "Касса",
                    ]
                }
            ],
            toOptions: [
                {
                    id: 'options',
                    heading: 'На счет',
                    items: [
                        "Банковский счет",
                        "Сейф",
                        "Касса",
                    ]
                }
            ],
            currencies: [
                {
                    id: 'currencies',
                    heading: 'Тенге (тг)',
                    items: [
                        "Тенге (тг)",
                        "USD ($)",
                    ]
                }
            ],
        };
    },
    methods: {
        handleFileChange(event) {
            const file = event.target.files[0];
            this.selectedFile = file;
        },
        groupClick() {
            this.groupClicked = !this.groupClicked;
            this.$refs.addGroup.style = "display: none;"
        },
        onSubmit() {
            const formData = {
                date: this.selectedDate,
                selected: this.selectedItem,
                selectedTo: this.selectedToItem,
                inputNumber: this.inputNumber,
                selectedCurrency: this.selectedCurrency,
                comment: this.comment,
            };
            const jsonData = JSON.stringify(formData);

            console.log(jsonData);
        },
    }
};
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

    #file {
        display: none;
    }

    #file::-webkit-file-upload-button {
        visibility: hidden;
    }

    label {
        cursor: pointer;
    }

    & .group-parent {
        cursor: pointer;
        display: flex;
        align-items: center;
        column-gap: 20px;

        p {
            color: #013832;
            font-size: 20px;
            font-weight: 300;
        }
    }

    .group {
        display: flex;
        flex-direction: column;
        row-gap: 20px;
    }

    hr {
        opacity: 0.3;
    }
}
</style> -->
<template>
    <h1>No</h1>
</template>
<script setup>
</script>