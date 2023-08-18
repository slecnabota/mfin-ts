<template>
  <div class="table" :class="tableHeight">
    <table class="table__inner">
      <thead>
        <tr class="heading grid">
          <td v-for="(head, name) in columnNames" :key="head" class="item" :class="[name]">{{ head }}</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="info in infos" class="item-row">
          <td v-for="(title, name) in columnNames" class="item item-part" :class="[name, row]">
            <slot :name="name" :info="info">{{ info[name] }}</slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
    
<script lang="ts">
export default {
  props: {
    columnNames: Object,
    infos: Array as () => any[],
    row: String,
    item: String,
    tableHeight: String,
  },
  methods: {
  },
};
</script>
  
<style scoped lang="scss">
.table {
  width: 100%;
  max-height: 400px;
  overflow: auto;
  position: relative;

  &.table-height {
    max-height: 700px;
  }

  thead {
    background: #FFFFFF;
    position: sticky;
    top: 0;
    z-index: 5;

    td {
      padding: 15px 0;
    }
  }

  &__inner {
    width: 100%;
    height: 100%;
    padding-right: 10px;

    border-collapse: separate;
    border-spacing: 0 20px;
    border: none;
  }

  tr,
  td {
    border: none;
  }

  td {
    text-align: center;
  }

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: #b0c5c0;
    border-radius: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: #38635d;
    border-radius: 6px;
  }


  & .heading {
    text-align: center;
  }

  & .item {
    font-weight: 600;
    font-size: 17px;
    line-height: 21px;
    color: #013832;
    padding: 10px 20px;

    &-part {
      font-weight: 400;
      font-size: 18px;
      line-height: 22px;
      color: #021B18;
      padding: 10px 20px;
      position: relative;
      z-index: 1;
    }

    &.names,
    &.date {
      padding-left: 40px;
    }

    &.del {
      padding-right: 40px;
    }

    &-row {
      position: relative;
      background: #FCFCFF;

      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border: 1px solid #B0C5C0;
        border-radius: 30px;
      }
    }
  }

  .row {
    padding: 25px 0;
  }

  .names {
    width: 200px;
    text-align: left;
  }
}
</style>