<!-- <template>
    <h4>Новый доход</h4>
    <form action="#" @submit.prevent="addIncome" class="menu-modal">
        <pop-input v-for="option in options" :id="option.id" :heading="option.heading" :items="option.items"
            v-model="selectedItem"></pop-input>
        <div class="input-wrapper">
            <input type="number" :placeholder="'Сумма'" v-model="sum" />
            <pop-input v-for="currency in currencies" :id="currency.id" :heading="currency.heading"
                :items="currency.items" v-model="selectedCurrency"></pop-input>
        </div>
        <pop-input v-for="category in categories" :id="category.id" :heading="category.heading"
            :items="category.items" v-model="selectedCategory"></pop-input>
        <pop-input v-for="agent in agents" :id="agent.id" :heading="agent.heading" :items="agent.items"
            v-model="selectedAgent"></pop-input>
        <label for="plan" class="input-checkbox">
            <input type="checkbox" id="plan" v-model="planning" />
            <p>Планирование</p>
        </label>
        <div class="p-inner">
            <span>Дата списания денег</span>
            <input type="date" v-model="selectedDate" />
        </div>
        <label for="repeating" class="input-checkbox">
            <img src="@/assets/img/again.svg" alt="img" />
            <p>Сделать повторяющимся</p>
        </label>
        <hr>
        <div ref="addGroup" @click="groupClick" class="group-parent">
            <img src="@/assets/img/dotts.svg" alt="">
            <p>Добавить проект, комментарий</p>
        </div>
        <div v-if="groupClicked" class="group">
            <pop-input v-for="project in projects" :id="project.id" :heading="project.heading" :items="project.items"
            v-model="selectedProject"></pop-input>
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
        <button>Добавить Доход</button>
    </form>
</template>
<script lang="ts">
import MySelect from '@/components/ui/Select/Select.vue'
import PopInput from '@/components/ui/input/PopUpInput.vue';
export default {
    name: 'Add',
    components: {
        MySelect, PopInput
    },
    data() {
        return {
            sum: null,
            selectedDate: null,
            selectedItem: null,
            selectedCurrency: null,
            selectedAgent: null,
            selectedCategory: null,
            selectedProject: null,
            comment: '',
            planning: '',
            open: false,
            groupClicked: false,
            activeTemplate: '',
            customClass: 'pop-up__right',
            selectedFile: null,
            projects: [
                {
                    id: 'projects',
                    heading: 'Мои проекты',
                    items: [
                        "Мой проект 1",
                        "Мой проект 2",
                    ]
                }
            ],
            categories: [
                {
                    id: 'categories',
                    heading: 'Категория',
                    items: [
                        "Инвестиции",
                        "Возврат займа",
                        "Предоставление услуг",
                        "Доп продажи",
                        "Аванс",
                        "Получение кредита",
                    ]
                }
            ],
            agents: [
                {
                    id: 'agents',
                    heading: 'Контрагент (кому заплатили)',
                    items: [
                        "Гарри Поттер",
                        "Андрей Романов",
                        "Гарри Поттер",
                    ]
                }
            ],
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
        }
    },
    methods: {
        groupClick() {
            this.groupClicked = !this.groupClicked;
            this.$refs.addGroup.style = "display: none;"
        },
        handleFileChange(event) {
            const file = event.target.files[0];
            this.selectedFile = file;
        },
        addIncome() {
            const incomeData = {
                selectedItem: this.selectedItem,
                sum: this.sum,
                currency: this.selectedCurrency,
                category: this.selectedCategory,
                agent: this.selectedAgent,
                selectedDate: this.selectedDate,
                planning: this.planning,
                selectedProject: this.selectedProject,
                comment: this.comment,
            };

            const jsonData = JSON.stringify(incomeData);
            console.log(jsonData);  // Output the JSON data
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

    label {
        cursor: pointer;
    }

    #file {
        display: none;
    }

    #file::-webkit-file-upload-button {
        visibility: hidden;
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
<template></template><script lang='ts'>
export default{
    name: 'Add'
}
</script>