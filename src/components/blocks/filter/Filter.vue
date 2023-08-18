<template>
    <div class="filter">
        <div class="filter-left">
            <select-item />
            <search-item :search="search"/>
        </div>
        <div class="filter-right">
            <filtering-item />
            <div class="filter-element download-item"><img src="@/assets/img/download.svg" alt=""></div>
        </div>
    </div>
</template>
<script lang="ts">
import SelectItem from './SelectItem.vue'
import SearchItem from './SearchItem.vue'
import FilteringItem from './FilteringItem.vue'
export default {
    components: {
        FilteringItem,
        SearchItem,
        SelectItem,
    },
    data(){
        return{
            search: "Поиск по счетам, клиентам, комментариям",
        }
    }
};
</script>

<style scoped lang="scss">
.filter {
    width: 100%;
    padding: 0 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &-element {
        background: #E1EDEA;
        cursor: pointer;
        &.download-item {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 45px;
            height: 45px;
            border-radius: 100%;
        }
    }

    &-left {
        display: flex;
        align-items: center;
        column-gap: 25px;
    }

    &-right {
        display: flex;
        align-items: center;
        column-gap: 25px;
    }
}
</style>
