<!-- <template>
  <div class="filter-select">
    <pop-up :class="[customClass, id]">
      <template #button="{ click }">
        <div class="item" @click="click">
          {{ computedHeading }}
          <img src="@/assets/img/custom-select.svg" alt="" />
        </div>
      </template>
      <template #pop-up="{ click }">
        <div class="select">
          <div class="select__content">
            <label :for="item" v-for="item in items" :key="item" @change="selectItem(item, click)">
              <input type="radio" :id="item" :value="item" />
              {{ item }}
            </label>
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
  name: "PopInput",
  components: {
    PopUp,
    MyButton,
  },
  props: {
    heading: {
      type: String,
    },
    items: {
      type: Array,
    },
    id: {
      type: String,
    },
    modelValue: {
      type: String,
    }
  },
  data() {
    return {
      customClass: "pop-up__input",
    };
  },
  methods: {
    selectItem(item, click) {
      this.$emit('update:modelValue', item)
      click()
    }
  },
  computed: {
    computedHeading() {
      return this.modelValue || this.heading;
    },
  },
};
</script>
  
<style scoped lang="scss">
.filter-select {
  span {
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    color: #777676;
  }

  .item {
    background: #e1edea;
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
    color: #38635d;

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
      row-gap: 20px;
    }

    label {
      display: flex;
      align-items: center;
      column-gap: 15px;
      cursor: pointer;

      input[type="radio"] {
        display: none;
      }
    }
  }

  .btn {
    font-weight: 400;
    width: fit-content;
    padding: 10px 30px;
    margin: 20px auto 0;
  }

  .currencies {
    width: 150px;

    & .item {
      color: #013832;
      font-size: 16px;
    }
  }
}
</style>
   -->
   <template>
    <h1>No</h1>
</template>
<script setup>
</script>