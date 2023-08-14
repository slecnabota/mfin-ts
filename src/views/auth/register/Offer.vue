<!-- <template>
    <div class="content">
        <div class="inner">
            <router-link :to="{ name: getLink() }" class="content__back">
                <img src="@/assets/img/back.svg" alt="">
            </router-link>
            <h1>
                MFIN
            </h1>
            <h1>
                ДОГОВОР ПУБЛИЧНОЙ ОФЕРТЫ
            </h1>
            <div class="inner-text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus magnam, explicabo exercitationem repellat voluptate in laborum similique eveniet. Reprehenderit repudiandae voluptatem architecto harum autem voluptatibus id aspernatur sint placeat corporis?
            </div>
        </div>
    </div>
</template> 
<script>
import pages from '@/const/pages.js'
export default {
    name: 'offer',
    data() {
        return {
            pages: pages,
        }
    },
    methods: {
        getLink() {
            return pages[this.$route.name].parent
        },
    }
}
</script>
<style scoped lang="scss">
.content {
    & .inner {
        max-width: 1240px;
        background: #FFFFFF;
        border-radius: 10px;
        height: 100%;
        padding: 30px;

        & h1 {
            font-weight: 700;
            font-size: 24px;
            line-height: 29px;
            text-align: center;
            color: #0C0C25;
            &:not(:last-child){
                margin-bottom: 30px;
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