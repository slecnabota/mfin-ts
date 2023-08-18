<template>
    <aside class="side-bar">
        <div class="logo">
            <img :src="logo" alt="">
            <h1>Maint</h1>
            <i class="arrow-down"></i>
        </div>
        <links />
        <div class="bank">
            <img :src="bank" alt="">
        </div>
    </aside>
</template>

<script lang="ts">
import Links from './Links.vue'
import logo from '@/assets/img/logo.svg'
import bank from '@/assets/img/bank.svg'

export default {
    components: { Links, },
    data() {
        return {
            logo,
            bank,
        }
    },
}
</script>

<style scoped lang="scss">
.side-bar {
    width: 20%;
    height: 80%;
    background: #FFFFFF;
    border-radius: 60px;
    padding: 60px 0 60px 45px;
    position: relative;
    h1 {
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
        color: #013832;
    }

    @media(max-width: 1650px) {
        padding: 30px 0 30px 30px;
    }

    .logo {
        display: flex;
        align-items: center;
        column-gap: 20px;
        margin-left: 20px;

        @media(max-width: 1650px) {
            img {
                width: 65px;
            }
        }
    }

    .arrow-down {
        border: solid black;
        border-width: 0 3px 3px 0;
        display: inline-block;
        padding: 4.5px;
        transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
    }

    .bank {
        position: absolute;
        left: 60px;
        bottom: 45px;

        @media(max-width: 1650px) {
            left: 30px;
            bottom: 30px;

            img {
                width: 60px;
            }
        }
    }
}
</style>
