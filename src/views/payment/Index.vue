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
    <h1>Платежи</h1>
    <div class="inner">
      <Filter />
      <div class="table-content">
        <card :inPlan="inPlan" :inFact="inFact" :exPlan="exPlan" :exFact="exFact" />
        <my-table :columnNames="columnNames" :item="item" :infos="infos">
          <template #sum="{ info }">
            {{ info.sum }} $
          </template>
          <template #parent="{ info }">
            {{ info.parent.accounts }}
            <br>
            {{ info.parent.remains }}
          </template>
          <template #edit>
            <img :src="editImg" class="content-center" @click="showModal('button2')" />
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
import Filter from '@/components/blocks/filter/Filter.vue'
import Card from '@/components/blocks/card/Card.vue'
import MyTable from '@/components/blocks/table/Table.vue'
import ModalWindow from '@/components/blocks/modal/ModalWindow.vue'
// icons
import deleteImg from '@/assets/img/delete.svg'
import editImg from '@/assets/img/edit.svg'

export default {
  name: 'PaymentIndex',
  components: {
    Filter, Card, MyTable, ModalWindow
  },
  data() {
    return {
      open: false,
      activeTemplate: '',
      deleteImg, editImg,
      deleteClass: 'delete',
      editClass: 'edit',
      modalRow: 'modal-btn',
      item: 'item',
      inPlan: '54000',
      inFact: '30340',
      exPlan: '24000',
      exFact: '54200',
      columnNames: {
        date: 'Дата',
        sum: 'Сумма',
        parent: 'Счет/остаток',
        partner: 'Контрагент',
        category: 'Категория',
        project: 'Проект',
        comments: 'Комментарий',
        edit: 'Ред',
        del: 'Удалить'
      },
      infos: [
        {
          date: '22.08.2022',
          sum: '-100',
          parent: {
            accounts: 'Сейф',
            remains: '54 000',
          },
          partner: 'Арендодатель',
          category: 'Аренда',
          project: 'Мое агенство',
          comments: 'Конфиденциальность',
        },
        {
          date: '23.08.2022',
          sum: '-100',
          parent: {
            accounts: 'Сейф',
            remains: '54 000',
          },
          partner: "Гарри поттер",
          category: "Аренда",
          project: "Мое агенство",
          comments: "Конфиденциальность",
        },
        {
          date: '23.08.2022',
          sum: '-100',
          parent: {
            accounts: 'Сейф',
            remains: '54 000',
          },
          partner: "Гарри поттер",
          category: "Аренда",
          project: "Мое агенство",
          comments: "Конфиденциальность",
        },
        {
          date: '23.08.2022',
          sum: '-100',
          parent: {
            accounts: 'Сейф',
            remains: '54 000',
          },
          partner: "Гарри поттер",
          category: "Аренда",
          project: "Мое агенство",
          comments: "Конфиденциальность",
        },
        {
          date: '23.08.2022',
          sum: '-100',
          parent: {
            accounts: 'Сейф',
            remains: '54 000',
          },
          partner: "Гарри поттер",
          category: "Аренда",
          project: "Мое агенство",
          comments: "Конфиденциальность",
        },
        {
          date: '23.08.2022',
          sum: '-100',
          parent: {
            accounts: 'Сейф',
            remains: '54 000',
          },
          partner: "Гарри поттер",
          category: "Аренда",
          project: "Мое агенство",
          comments: "Конфиденциальность",
        },
        {
          date: '23.08.2022',
          sum: '-100',
          parent: {
            accounts: 'Сейф',
            remains: '54 000',
          },
          partner: "Гарри поттер",
          category: "Аренда",
          project: "Мое агенство",
          comments: "Конфиденциальность",
        },
        {
          date: '23.08.2022',
          sum: '-100',
          parent: {
            accounts: 'Сейф',
            remains: '54 000',
          },
          partner: "Гарри поттер",
          category: "Аренда",
          project: "Мое агенство",
          comments: "Конфиденциальность",
        },
        {
          date: '23.08.2022',
          sum: '-100',
          parent: {
            accounts: 'Сейф',
            remains: '54 000',
          },
          partner: "Гарри поттер",
          category: "Аренда",
          project: "Мое агенство",
          comments: "Конфиденциальность",
        },
        {
          date: '23.08.2022',
          sum: '-100',
          parent: {
            accounts: 'Сейф',
            remains: '54 000',
          },
          partner: "Гарри поттер",
          category: "Аренда",
          project: "Мое агенство",
          comments: "Конфиденциальность",
        },
      ],
    }
  },
  methods: {
    startsWithMinus() {
      return this.infos.sum.startsWith("-");
    },


    showModal(templateName, index) {
      this.activeTemplate = templateName;
      this.rowIndex = index;
      this.open = true;
    },

    closeModal() {
      this.open = false;
    },

    deleteRow(index) {
      this.infos.splice(index, 1);
      this.$refs.paymentRows[index].closeModal();
    },
  }
}

</script>

<style scoped lang="scss">
.content {
  .icons {
    display: block;
    margin: 0 auto;
  }

  & .comments {
    min-width: 160px;
  }

  & .red {
    color: #E32222;
  }

  &-center {
    display: block;
    margin: 0 auto;
    cursor: pointer;
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
      // button decoration
      background: #38635D;
      border-radius: 8px;
      padding: 15px 30px;
      // text decoration
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