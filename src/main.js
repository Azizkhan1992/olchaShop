import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css';
import './styles/styles.scss'
import './plugins/fontawesome'

Vue.config.productionTip = false

Vue.use(Antd)

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
