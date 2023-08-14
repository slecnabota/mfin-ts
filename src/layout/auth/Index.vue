<template>
    <div class="layout-auth">
        <img src="@/assets/img/logo-form.svg" alt="" class="logo">
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    name: 'AuthMainPage',
}
</script>

<style lang="scss">
.layout-auth {
    background-image: url("@/assets/img/background-form.png");
    background-repeat: no-repeat;
    background-size: cover;
    color: #013832;
    padding: 60px;
    height: 100vh;
    position: relative;

    & .logo {
        position: absolute;
        left: 60px;
        top: 60px;
    }

    & .content {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    & form {
        width: 550px;
        background: #072D29;
        border-radius: 30px;
        padding: 30px 20px 45px;

        & h2 {
            font-weight: 600;
            font-size: 27px;
            line-height: 33px;
            color: #FFFFFF;
            margin-bottom: 20px;
        }

        & input {
            width: 100%;
            background: #FBFBFF;
            border-radius: 13px;
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            padding: 20px;
            color: black;
            margin-top: 25px;

            &::placeholder {
                color: #A1A1AE;
            }

            &:last-child {
                margin-top: 0;
            }
        }

        & .main-text {
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            color: #FFFFFF;
        }

        & .light-text {
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            color: #ACE8D9;
        }
    }

    & .form__password {
        position: relative;
        // display: flex;
        // align-items: center;
        // justify-content: space-between;
        // background: #FBFBFF;
        // border-radius: 13px;
        // padding: 20px;
        // &:not(:first-child){
        //     margin-top: 25px;
        // }

        & svg {
            position: absolute;
            color: #A1A1AE;
            font-size: 20px;
            right: 20px;
            top: 20px;
        }

        // & input {
        //     padding: 0;
        //     margin-top: 0;
        //     padding-right: 10px;
        // }
    }
}</style>
