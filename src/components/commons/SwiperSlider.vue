<template>
    <div class="swiperContainer">
        <swiper :slides-per-view="items" :space-between="30" :autoplay="true" loop :navigation="true" @swiper="onSwiper"
            @slideChange="onSlideChange" ref="swiperTag">
            <swiper-slide v-for="slide in swipes" :key="slide.id" class="test" :class="{ test_2: true }">
                <h4 v-if="slide.isNew">new</h4>
                <img :src="require('../../assets/images/' + slide.img)" class="img-fluid w-100" blank="true">

                <div class="goodTitle">
                    <a-row>
                        <h3 class="commonT">{{ slide.name }}</h3>
                    </a-row>

                    <a-row type="flex" justify="space-between">
                        <p class="commonP">{{ slide.price }}</p>

                        <span class="descP">{{ slide.oldPrice }}</span>
                    </a-row>

                    <a-row type="flex" justify="space-between">
                        <a-col :span="8" class="cartCol">
                            <a-icon type="shopping-cart" :style="{ fontSize: '20px' }" />
                            <p class="commonP">Buy</p>
                        </a-col>

                        <a-col :span="6">
                            <p class="commonP more">More</p>
                        </a-col>
                    </a-row>
                </div>
            </swiper-slide>

        </swiper>
    </div>
</template>
<script>
import {
    Navigation,
    Pagination,
    Autoplay
} from 'swiper'

import {
    SwiperCore,
    Swiper,
    SwiperSlide
} from 'swiper-vue2'

// Import Swiper styles
import 'swiper/swiper-bundle.css'

SwiperCore.use([Navigation, Pagination, Autoplay])
export default {
    name: 'app-swiper',
    components: { Swiper, SwiperSlide },
    props: {
        swipes: {
            type: Array,
            default: () => []
        },
        items: {
            type: [Number, String],
            default: 4
        }
    },
    methods: {
        onSwiper(swiper) {
            // console.log(swiper)
        },
        onSlideChange() {
            // console.log('slide change')
        }
    }
}
</script>