<!-- <template>
  <select v-model="selectedOption">
    <option disabled :value="null">{{ defaultName }}</option>
    <option v-for="item in items" :value="item">{{ item }}</option>
  </select>
</template>
  
<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
    defaultName: {
      type: String, 
      required: true,
    },
  },
  data() {
    return {
      selectedOption: null,
    };
  },
};
</script>

<style scoped lang="scss">
select {
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

  option {
    font-weight: 300;
    font-size: 18px;
    line-height: 24px;
    display: flex;
    align-items: center;
    color: rgba(2, 27, 24, 0.5);
    background: white;
    outline: none;
  }
}
</style> -->
<template>
  <h1>No</h1>
</template>
<script lang="ts">
export default{

}
</script>