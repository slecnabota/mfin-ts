<!-- <template>
    <div class="filter-element search-item">
        <img src="@/assets/img/search.svg" alt="">
        <input type="search" v-model="query" :placeholder="search">
    </div>
</template>

<script>
export default {
    name: 'SearchItem',
    props:{
        search:{
            type: String,
        }
    },
    data() {
        return {
            query: '',
            searchResults: [],
        };
    },
    watch: {
        query(newValue) {
            this.performSearch(newValue);
        },
    },
    computed: {
        filteredResults() {
            if (!this.query) {
                return this.searchResults;
            }

            const letter = this.query.charAt(0).toLowerCase();
            return this.searchResults.filter(result =>
                result.title.charAt(0).toLowerCase() === letter
            );
        },
    },
    methods: {
        performSearch(query) {
            clearTimeout(this.delayTimer);

            if (query === '') {
                this.searchResults = [];
                return;
            }

            this.delayTimer = setTimeout(() => {
                this.searchResults = this.generateResults();
            }, 500);
        },
        generateResults() {
            const results = [
                { id: 1, title: 'Результат 1' },
                { id: 2, title: 'Результат 2' },
                { id: 3, title: 'Альтернативный результат' },
                { id: 4, title: 'Еще один результат' },
            ];
            return results;
        },
    },
}
</script>

<style scoped lang="scss">
.search-item {
    width: 430px;
    display: flex;
    align-items: center;
    background: #E1EDEA;
    border-radius: 20px;
    padding: 10px;
    column-gap: 10px;

    input {
        width: 100%;

        &::placeholder {
            font-weight: 600;
            font-size: 16px;
            line-height: 19px;
            color: #38635D;
        }
    }
}
</style> -->
<template>
    <h1>No</h1>
</template>
<script setup>
</script>