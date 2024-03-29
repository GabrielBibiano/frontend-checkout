import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueCurrencyFilter from 'vue-currency-filter'
import VeeValidate from 'vee-validate'
import VueTheMask from 'vue-the-mask'

import { VuePlugin } from 'vuera'

import eventbus from './eventbus'

import './registerServiceWorker'

// Directives
import './directives'

import routerMiddleware from './router/middleware'

// Router middleware
routerMiddleware({ router, store })

Vue.use(eventbus)

Vue.use(VueCurrencyFilter, {
  symbol : 'R$',
  thousandsSeparator: '.',
  fractionCount: 2,
  fractionSeparator: ',',
  symbolPosition: 'front',
  symbolSpacing: true
})

Vue.use(VeeValidate, {
  classes: true
});

Vue.use(VueTheMask, { masked : false })

Vue.use(VuePlugin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
