import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    goods: [
      {
          id: 1,
          name: 'Apple iPhone 14 Pro Max 128GB Deep Purple',
          oldPrice: '16 430 000 сум',
          price: '15 096 999 сум',
          isNew: true,
          img: 'iphone.jpg'
      },
      {
          id: 2,
          name: 'Холодильник Samsung RB 29 FERNDSA/WT',
          oldPrice: '8 254 000 сум',
          price: '7 044 000 сум',
          isNew: true,
          img: 'samsung_kh.jpeg'
      },
      {
          id: 3,
          name: 'Смарт часы Huawei Band 7 Темно-серый',
          oldPrice: '678 000 сум',
          price: '549 000 сум',
          isNew: false,
          img: 'smart.jpeg'
      },
      {
          id: 4,
          name: 'Ноутбук HP Victus 16-e0148ax R7-5800H 8/256 GB SSD RTX3060 6GB 16,1 FHD',
          oldPrice: '13 140 000 сум',
          price: '12 220 000 сум',
          isNew: true,
          img: 'hp.jpg'
      },
      {
          id: 5,
          name: 'Телевизор Artel A32KH5500 android черный',
          oldPrice: '2 231 000 сум',
          price: '1 831 000 сум',
          isNew: true,
          img: 'artel.jpeg'
      }
  ],
  socials: [
    {
        id: 1,
        img: 'tg.png'
    },
    {
        id: 2,
        img: 'ins.png'
    },
    {
        id: 3,
        img: 'you.png'
    },
    {
        id: 4,
        img: 'tw.png'
    },
    {
        id: 5,
        img: 'fb.png'
    }
],
payments: [
    {
        id: 1,
        img: 'pay1.png'
    },
    {
        id: 2,
        img: 'pay2.png'
    },
    {
        id: 3,
        img: 'pay3.png'
    },
    {
        id: 4,
        img: 'pay4.png'
    }
]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
