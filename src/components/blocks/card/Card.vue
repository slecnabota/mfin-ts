<!-- <template>
    <div class="card">
        <div class="quantity">
            <div class="item">
                <h2>Доходы</h2>
                <div class="wrapper">
                    <div class="row">
                        <p>План</p>
                        <div class="bar">
                            <div class="bar-line" style="width: 100%"></div>
                        </div>
                        <span>{{ inPlan }} $</span>
                    </div>
                    <div class="row">
                        <p>Факт</p>
                        <div class="bar">
                            <div class="bar-line" style="width: 50%"></div>
                        </div>
                        <span>{{ inFact }} $</span>
                    </div>
                </div>
            </div>
            <div class="item">
                <h2>Расходы</h2>
                <div class="wrapper">
                    <div class="row">
                        <p>План</p>
                        <div class="bar">
                            <div class="bar-line" style="width:100%"></div>
                        </div>
                        <span>{{ exPlan }} $</span>
                    </div>
                    <div class="row">
                        <p>Факт</p>
                        <div class="bar">
                            <div class="bar-line" style="width: 50%"></div>
                        </div>
                        <span>{{ exFact }} $</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="card-bottom">
            <div class="item">
                <h3>Поступлений</h3>
                <p>116 089$</p>
            </div>
            <div class="item">
                <h3>Списаний</h3>
                <p>116 089$</p>
            </div>
            <div class="item">
                <h3>Переводов на счет</h3>
                <p>0$</p>
            </div>
            <div class="item">
                <h3>Переводов со счета</h3>
                <p>0$</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Card',
    props:{
        inPlan:{
            type: String,
        },
        inFact:{
            type: String,
        },
        exPlan:{
            type: String,
        },
        exFact:{
            type: String,
        },
    }
}
</script>

<style lang="scss" scoped>
.card {
    max-width: 720px;
    background: #FFFFFF;
    box-shadow: 1px 2px 8px #C8C8FC;
    border-radius: 35px;
    padding: 15px;
    margin-bottom: 50px;

    & .quantity {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 40px;

        & .item {
            h2 {
                text-align: center;
                font-weight: 600;
                font-size: 20px;
                line-height: 24px;
                color: #013832;
                margin-bottom: 20px;
            }

            .row {
                display: flex;
                align-items: center;
                justify-content: space-between;
                column-gap: 20px;

                p {
                    font-weight: 500;
                    font-size: 16px;
                    line-height: 19px;
                    color: #013832;
                }

                .bar {
                    width: 150px;
                    height: 12px;
                    background: #E1EDEA;
                    border-radius: 13px;
                    position: relative;

                    &-line {
                        position: absolute;
                        z-index: 1;
                        left: 0;
                        top: 0;
                        height: 12px;
                        background: #013832;
                        border-radius: 13px;
                    }
                }

                span {
                    font-weight: 500;
                    font-size: 16px;
                    line-height: 24px;
                    letter-spacing: 0.38px;
                    color: #013832;
                }
            }

            .wrapper {
                display: flex;
                flex-direction: column;
                row-gap: 20px;
            }
        }
    }

    .card-bottom {
        padding: 40px 40px 0;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        column-gap: 25px;

        & .item {
            text-align: center;

            h3 {
                font-weight: 400;
                font-size: 17px;
                line-height: 21px;
                color: #013832;
            }

            p {
                font-weight: 500;
                font-size: 17px;
                line-height: 21px;
                color: #013832;
                margin-top: 10px;
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