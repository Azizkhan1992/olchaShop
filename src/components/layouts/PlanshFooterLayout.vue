<template>
    <div class="planshFooterContainer">
        <a-row type="flex" justify="space-between">
            <a-col :span="6">
                <h1 class="logo">Olcha.uz</h1>
            </a-col>
            <a-col :span="3" v-for="item in socials" :key="item.id" class="socialCol">
                <img :src="require('../../assets/images/' + item.img)" alt="">
            </a-col>
        </a-row>
        <a-row type="flex" justify="space-between">
            <a-col :span="5" class="companyCol col">
                <h3>Компания</h3>

                <router-link to="#">О нас</router-link>

                <router-link to="#">Наша команда</router-link>
            </a-col>
            <a-col :span="5" class="supportCol col">
                <h3>Поддерживать</h3>

                <router-link to="#">Связаться с нами</router-link>

                <router-link to="#">Центр помощи</router-link>
            </a-col>
            <a-col :span="5" class="contactCol">
                <h3>Номер телефона:</h3>

                <p class="commonP">+998 71 202-20-21</p>

                <p class="commonP">+998 95 144-04-40</p>
            </a-col>
            <a-col :span="5" class="contactCol">
                <h3>Email:</h3>
                <p class="commonP">olchainfo@gmail.com</p>
            </a-col>
        </a-row>

        <a-row type="flex" justify="space-between">
            <a-col v-for="pay in payments" :key="pay.id">
                <img :src="require('../../assets/images/' + pay.img)" alt="">
            </a-col>
        </a-row>
    </div>
</template>
<script>
export default {
    name: 'plansh-footer',
    data() {
        return {
            socials: this.$store.state.socials,
            payments: this.$store.state.payments
        }
    }
}
</script>

<style lang="scss">
.planshFooterContainer {
    display: flex;
    flex-direction: column;
    row-gap: 24px;
    .ant-row-flex {

        .socialCol {
            width: 40px;
            height: 40px;
            background: rgba(255, 255, 255, 0.15);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
        }

        .ant-col {
            a {
                display: block;
                color: #fff;
                font-size: 0.85rem;
            }

            p {
                color: #fff;
            }

            h3 {
                color: #fff;
            }
        }
    }
}
</style>