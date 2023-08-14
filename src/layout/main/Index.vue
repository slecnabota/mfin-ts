<template>
    <div class="layout-main">
        <div class="container">
            <side-bar />
            <main>
                <menu-top />
                <router-view />
            </main>
        </div>
    </div>
</template>
<script>
import SideBar from './nav/SideBar.vue'
import MenuTop from './menu/MenuTop.vue'

export default {
    name: 'LayoutMain',
    components: { SideBar, MenuTop },
}
</script>
<style lang="scss">
.layout-main {
    background-image: url("@/assets/img/background.png");
    background-repeat: no-repeat;
    background-size: cover;
    color: #013832;
    padding: 30px;
    height: 100vh;

    main {
        width: 80%;
        background: #FFFFFF;
        border-radius: 60px;
        padding: 40px;
        height: 100%;
        position: relative;

        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    & .content {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        width: 100%;
        height: 100%;
        margin-top: 35px;

        h1 {
            font-weight: 600;
            font-size: 26px;
            line-height: 31px;
            color: #013832;
        }

        & .table-content {
            width: 100%;
            height: 100%;
            background: #FFFFFF;
            box-shadow: 1px 2px 8px #C8C8FC;
            border-radius: 35px;
            margin-top: 35px;
            padding: 35px;
        }

        &__back {
            width: fit-content;
            background: none;
            border: none !important;
            display: flex;
            align-items: center;
            column-gap: 20px;
        }
    }

    & .inner {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        margin-top: 25px;
    }


    & .table-content {
        width: 100%;
    }

    & .container {
        width: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        column-gap: 40px;
        height: calc(100vh - 60px);
    }
}
</style>