<template>
    <select v-model="selectedOption">
        <option disabled :value="null">{{ defaultName }}</option>
        <option v-for="item in items" :value="item">{{ item }}</option>
    </select>
</template>
    
<script lang="ts">
export default {
    name: "AccSelect",
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
    width: 300px;
    display: block;
    border: none;
    outline: none;
    background: #FCFCFF;
    border: 1px solid #B0C5C0;
    border-radius: 16px;
    // txt
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #021B18;
    padding: 15px 20px;


    option {
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #021B18;

        background: #FCFCFF;
        outline: none;
        padding: 15px 20px;
    }
}
</style>
