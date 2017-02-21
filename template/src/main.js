// Polyfills
import 'core-js/fn/array/find'
import Promise from 'promise-polyfill'
window.Promise = window.Promise || Promise

import Vue from 'vue'

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
