<template>
    <div class="mobileFooter">
        <a-row>
                <a-col :span="24">
                    <a-row>
                        <h1 class="logo">Olcha.uz</h1>
                    </a-row>

                    <a-row type="flex" justify="space-between">
                        <a-col v-for="item in socials" :key="item.id">
                            <img :src="require('../../assets/images/' + item.img)" alt="">
                        </a-col>
                    </a-row>
                </a-col>
            </a-row>

            <a-row>
                <a-col :span="11" class="companyCol col">
                    <h3>Компания</h3>

                    <router-link to="#">О нас</router-link>

                    <router-link to="#">Наша команда</router-link>
                </a-col>
                <a-col :span="11" class="supportCol col">
                    <h3>Поддерживать</h3>

                    <router-link to="#">Связаться с нами</router-link>

                    <router-link to="#">Центр помощи</router-link>
                </a-col>
            </a-row>

            <a-row>
                <a-col :span="11" class="contactCol">
                    <h3>Номер телефона:</h3>

                    <p>+998 71 202-20-21</p>

                    <p>+998 95 144-04-40</p>
                </a-col>
                <a-col :span="11" class="contactCol">
                    <h3>Email:</h3>
                    <p>olchainfo@gmail.com</p>
                </a-col>
            </a-row>

            <a-row type="flex" justify="space-between">
                <a-col :span="24" class="payCol">
                    <a-row type="flex" justify="space-between">
                        <a-col v-for="pay in payments" :key="pay.id">
                            <img :src="require('../../assets/images/' + pay.img)" alt="">
                        </a-col>
                    </a-row>
                </a-col>
            </a-row>
    </div>
</template>
<script>
export default {
    name: 'mobile-footer',
    data() {
        return {
            socials: this.$store.state.socials,
            payments: this.$store.state.payments
        }
    }
}
</script>