// Polyfills
import 'babel-polyfill'
import Vue from 'vue'

Vue.config.productionTip = false

// Services
import { sync } from 'vuex-router-sync'
import router from './router'
import store from './store'
sync(store, router)

import App from './App'

// Vue instance as eventbus
// Event.$emit('EXAMPLE')
// Event.$on('EXAMPLE, () => {})
window.Event = new Vue()

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {
        App
    }
})
