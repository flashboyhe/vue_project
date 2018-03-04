// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'


// 引入element-ui组件
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import axios from 'axios'
Vue.use(ElementUI)

import $ from 'jquery'
Vue.config.productionTip = false

// 引入自定义组件。index.js是组件的默认入口
import Header from './components/header'
Vue.use(Header);


// 引入自定义组件。index.js是组件的默认入口
import Footer from './components/footer'
Vue.use(Footer);

Vue.prototype.axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  components: { App },
  template: '<App/>'
})
