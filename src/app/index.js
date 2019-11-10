// application entry point

// import stuff
import Vue from 'vue'

// configure Vue
Vue.config.productionTip = false

// app itself
const app = new Vue({
  render: h => h()
})
app.$mount('#app')
