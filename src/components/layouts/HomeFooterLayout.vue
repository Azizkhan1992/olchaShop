<template>
    <div class="footerLayout">
        <div class="footerWrapper common">
            <a-row type="flex" justify="space-between" class="topRow">
                <a-col :md="7" :lg="6" :xxl="4" class="logoCol">
                    <a-row>
                        <h1 class="logo">Olcha.uz</h1>
                    </a-row>

                    <a-row type="flex" justify="space-between">
                        <a-col v-for="item in socials" :key="item.id">
                            <img :src="require('../../assets/images/' + item.img)" alt="">
                        </a-col>
                    </a-row>
                </a-col>
                <a-col :md="4" :lg="4" :xxl="3" class="companyCol col">
                    <h3>Компания</h3>

                    <router-link to="#">О нас</router-link>

                    <router-link to="#">Наша команда</router-link>
                </a-col>
                <a-col :md="6" :lg="4" :xxl="3" class="supportCol col">
                    <h3>Поддерживать</h3>

                    <router-link to="#">Связаться с нами</router-link>

                    <router-link to="#">Центр помощи</router-link>
                </a-col>
                <a-col :md="7" :lg="4" :xxl="3" class="contactCol">
                    <h3>Номер телефона:</h3>

                    <p>+998 71 202-20-21</p>

                    <p>+998 95 144-04-40</p>
                </a-col>
                <a-col :md="1" :lg="5" :xxl="4" class="contactCol">
                    <h3>Email:</h3>
                    <p>olchainfo@gmail.com</p>
                </a-col>
            </a-row>
            <hr />

            <a-row type="flex" justify="space-between" class="bottomCol">

                <a-col :span="9" class="payCol">
                    <a-row type="flex" justify="space-between">
                        <a-col v-for="pay in payments" :key="pay.id">
                            <img :src="require('../../assets/images/' + pay.img)" alt="">
                        </a-col>
                    </a-row>
                </a-col>
            </a-row>
        </div>

        <div class="planshFooter common">
            <PlanshFooterLayout/>
        </div>

        <div class="mobileFooter common">
            <MobileFooterLayout/>
        </div>
    </div>
</template>
<script>
import MobileFooterLayout from './MobileFooterLayout.vue';
import PlanshFooterLayout from './PlanshFooterLayout.vue';
export default {
    name: 'home-footer',
    components: {MobileFooterLayout, PlanshFooterLayout},
    data() {
        return {
            socials: this.$store.state.socials,
            payments: this.$store.state.payments
        }
    }
}
</script>
<style lang="scss">
.footerLayout {
    background: #5B7489;
    margin-top: 120px;

    .mobileFooter {
        display: none;
    }

    .planshFooter{
        display: none;
    }

    h1.logo {
        font-size: 2rem;
        font-weight: 800;
        line-height: 135%;
        color: #fff;
    }

    .footerWrapper {
        padding: 55px 0 35px 0;
        box-sizing: border-box;

        hr {
            margin: 48px 0 24px 0;
            border: 1px solid #fff;
            opacity: 0.2;
        }

        .ant-row-flex {

            .bCols {
                span {
                    font-size: 1.15rem;
                    line-height: 140%;
                    font-weight: 400;
                    color: #fff;
                    opacity: 0.8;
                }
            }

            &.bottomCol {
                .ant-col {
                    p {
                        font-size: 1.15rem;
                        line-height: 140%;
                        font-weight: 400;
                        color: #fff;
                    }
                }
            }

            .contactCol {
                h3 {
                    font-size: 1.15rem;
                    line-height: 140%;
                    font-weight: 400;
                    opacity: 0.8;
                    color: #fff;
                }

                p {
                    font-size: 1.35rem;
                    line-height: 140%;
                    font-weight: 500;
                    color: #fff;
                }
            }

            .col {
                h3 {
                    font-size: 1.35rem;
                    line-height: 140%;
                    font-weight: 500;
                    color: #fff;
                }

                a {
                    display: block;
                    margin-bottom: 8px;
                    font-size: 1.15rem;
                    line-height: 140%;
                    font-weight: 400;
                    color: #fff;
                }
            }

            .logoCol {
                display: flex;
                flex-direction: column;
                row-gap: 24px;

                .ant-row-flex {

                    .ant-col {
                        width: 40px;
                        height: 40px;
                        background: rgba(255, 255, 255, 0.15);
                        border-radius: 12px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        cursor: pointer;
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 1440px) and (min-width: 1100px) {
    .footerLayout {

        .footerWrapper {

            .ant-row-flex {

                .ant-col{

                    p{
                        color: #fff;
                    }
                }

                .bCols {
                    span {
                        font-size: 0.85rem !important;
                    }
                }

                .payCol {
                    .ant-col {

                        img {
                            width: 62px;
                        }
                    }
                }

                &.bottomCol {
                    .ant-col {

                        p {
                            font-size: 0.85rem !important;
                        }
                    }
                }

                .contactCol {
                    h3 {
                        font-size: 0.85rem !important;
                    }

                    p {
                        font-size: 1rem !important;
                    }
                }

                .col {

                    h3 {
                        font-size: 1.15rem !important;
                    }

                    a {
                        font-size: 0.85rem !important;
                    }
                }

                .logoCol {

                    img.logo {
                        width: 190px;
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 1100px) and (min-width: 768px) {
    .planshFooter{
        display: block !important;
        padding: 55px 0 35px 0;
        box-sizing: border-box;
    }

    .footerWrapper{
        display: none;
    }

    .mobileFooter{
        display: none;
    }
}

@media screen and (max-width: 767px) {
    .footerLayout {

        .planshFooter{
            display: none;
        }

        .footerWrapper {
            display: none;
        }

        .mobileFooter {
            display: flex;
            flex-direction: column;
            row-gap: 24px;
            padding: 24px 0;
            box-sizing: border-box;

            .ant-row {

                .ant-col{
                    h3{
                        color: #fff;
                    }

                    p{
                        color: #fff;
                    }
                }

                .col {

                    h3{
                        color: #fff;
                    }

                    a {
                        display: block;
                        color: #fff;

                        &:hover {
                            color: #fff;
                        }
                    }
                }
            }

            .ant-row-flex {

                .payCol {

                    img {
                        width: 72px;
                    }
                }
            }
        }
    }
}
</style>