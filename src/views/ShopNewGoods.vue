<template>
  <div class="newGoods">
    <h3 class="title">Новинки</h3>
    <div class="descGoods swipe">
      <SwiperSlider :swipes="goods" :items="5" />
    </div>

    <div class="planshGoods swipe">
      <SwiperSlider :swipes="goods" :items="4" />
    </div>

    <div class="largeMobile swipe">
        <SwiperSlider :swipes="goods" :items="3" />
    </div>

    <div class="mobileGoods swipe">
      <SwiperSlider :swipes="goods" :items="1" />
    </div>
  </div>
</template>
<script>
import SwiperSlider from "../components/commons/SwiperSlider.vue";
export default {
  name: "shop-goods",
  components: { SwiperSlider },
  data() {
    return {
      goods: this.$store.state.goods,
    };
  },
};
</script>
<style lang="scss">
.newGoods {
  margin-top: 64px;

  h3.title {
    font-size: 3rem;
    line-height: 125%;
    font-weight: 700;
  }

  .mobileGoods {
    display: none;
  }

  .planshGoods {
    display: none;
  }

  .largeMobile{
    display: none;
  }
  

  .descGoods {
    margin-top: 24px;
  }

  .swipe{

    .swiper-container {
      .swiper-button-prev {
        width: 56px;
        height: 56px;
        background: rgba(255, 255, 255, 0.15);
        border-radius: 12px;
        color: #027471;
      }

      .swiper-button-next {
        width: 56px;
        height: 56px;
        background: rgba(255, 255, 255, 0.15);
        border-radius: 12px;
        color: #027471;
      }

      .swiper-wrapper {
        .swiper-slide {
          height: 580px;
          display: flex;
          flex-direction: column;
          row-gap: 24px;
          border: 1.5px solid #f1f2f6;
          border-radius: 12px;
          padding: 8px 12px;
          box-sizing: border-box;
          transition: 0.12s linear;
          position: relative;

          &:hover{
            border: 1.5px solid #FFA885;
          }

          h4 {
            position: absolute;
            top: 8px;
            right: -8px;
            padding: 4px 12px;
            box-sizing: border-box;
            font-size: 1.5rem;
            transform: rotate(45deg);
            background: #fe5f1e;
            color: #fff;
          }

          .goodTitle {
            height: calc(45% - 12px);
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;

            .ant-row-flex {
              .cartCol {
                display: flex;
                align-items: center;
                justify-content: center;
                background: #fe5f1e;
                color: #fff;
                column-gap: 4px;
                border-radius: 4px;
                padding: 4px 8px;
                box-sizing: border-box;
                cursor: pointer;
                transition: 0.12s linear;

                &:hover{
                  background: #4673AC;
                }

                p {
                  color: #fff;
                }
              }

              p {
                &.more {
                  color: #027471;
                  cursor: pointer;
                }
              }
            }
          }

          img {
            width: 100%;
            height: calc(55% - 12px);
            object-fit: contain;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 1440px) and (min-width: 1100px) {
  .newGoods {
    .descGoods {
      display: none;
    }

    .largeMobile{
        display: none;
    }

    .planshGoods {
      display: block;
      margin-top: 24px;
    }

    h3.title {
      font-size: 1.5rem !important;
    }
  }
}

@media screen and (max-width: 1100px) and (min-width: 768px) {
    .largeMobile{
        display: block !important;
    }

    .descGoods{
        display: none;
    }

    .mobileGoods{
        display: none;
    }

    .planshGoods{
        display: none;
    }
}

@media screen and (max-width: 767px) {
  .newGoods {
    .descGoods {
      display: none;
    }

    .largeMobile{
        display: none;
    }

    .planshGoods {
      display: none;
    }

    .mobileGoods {
      display: block;
    }
  }
}
</style>
