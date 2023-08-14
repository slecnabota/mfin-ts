<!-- <template>
    <div class="filter-select">
        <span>{{ title }}</span>
        <pop-up :class="customClass">
            <template #button="{ click }">
                <div class="item" @click="click">
                    {{ selectedItems.length > 0 ? selectedItems.join(', ') : heading }}
                    <img src="@/assets/img/custom-select.svg" alt=""/>
                </div>
            </template>
            <template #pop-up="{click}">
                <div class="select">
                    <div class="select__inner">
                        <label for="name" @click="selectedAll">
                            <input type="checkbox" name="name" id="name"
                                :checked="selectedItemsTemp.length === items.length" />
                            {{ heading }}
                        </label>
                        <img src="@/assets/img/custom-select.svg" alt="" @click="openSubMenu()" />
                    </div>
                    <div v-if="openSub" class="select__content">
                        <label :for="item" v-for="item in items" :key="item">
                            <input type="checkbox" :id="item" :value="item" @change="updateSelectedItems"
                                :checked="selectedItems.includes(item)" />
                            {{ item }}
                        </label>
                        <my-button class="btn" @click="selectItems(click)">
                            <template #button>
                                Выбрать
                            </template>
                        </my-button>
                    </div>
                </div>
            </template>
        </pop-up>
    </div>
</template>

<script>
import PopUp from "../../blocks/modal/PopUp.vue";
import MyButton from "../button/Button.vue";

export default {
    name: "FilterSelect",
    components: {
        PopUp,
        MyButton,
    },
    props: {
        title: {
            type: String,
        },
        heading: {
            type: String,
        },
        items: {
            type: Array,
        },
    },
    data() {
        return {
            open: false,
            openSub: false,
            customClass: "pop-up__select",
            selectedItems: [],
            selectedItemsTemp: [],
        };
    },
    methods: {
        openSubMenu() {
            this.openSub = !this.openSub;
        },
        selectItems(click) {
            this.openSub = false;
            this.selectedItems = [...this.selectedItemsTemp];
            this.selectedItemsTemp = [];
            click();
            this.$emit("closeMenus");
        },
        updateSelectedItems() {
            this.selectedItemsTemp = this.items.filter((item) =>
                this.$el.querySelector(`input[id="${item}"]`).checked
            );
            console.log(this.selectedItemsTemp)
        },
        selectedAll() {
            if (this.selectedItemsTemp.length === this.items.length) {
                this.selectedItemsTemp = [];
            } 
            else {
                this.selectedItemsTemp = [...this.items];
            }
            console.log(this.selectedItemsTemp)
        },
    },
};
</script>
  
<style scoped lang="scss">
.filter-select {
    margin-bottom: 20px;

    span {
        font-weight: 300;
        font-size: 16px;
        line-height: 19px;
        color: #777676;
    }

    .item {
        margin-top: 10px;
        background: #E1EDEA;
        border-radius: 8px;
        padding: 15px 20px;
        font-weight: 300;
        font-size: 20px;
        line-height: 24px;
        color: rgba(2, 27, 24, 0.5);
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
        cursor: pointer;
    }

    .select {
        font-weight: 300;
        font-size: 20px;
        line-height: 24px;
        color: #38635D;

        &__inner {
            display: flex;
            align-items: center;
            justify-content: space-between;

            img {
                cursor: pointer;
            }
        }

        &__content {
            display: flex;
            flex-direction: column;
            row-gap: 10px;
            margin-top: 10px;

            label {
                margin-left: 20px;
            }
        }

        label {
            display: flex;
            align-items: center;
            column-gap: 15px;
        }
    }

    .btn {
        font-weight: 400;
        width: fit-content;
        padding: 10px 30px;
        margin: 20px auto 0;
    }
}
</style>
   -->
   <template>
    <h1>No</h1>
</template>
<script setup>
</script>