// application entry point

// import stuff
import process from 'process' // shut up, ESLint
import Vue from 'vue'
import Site from './view/Site'

// configure Vue
Vue.config.productionTip = false

// app itself
const app = new Vue({
  render: h => h(Site)
})
app.$mount(process.env.NODE_ENV !== 'test'? '#app' : '')
