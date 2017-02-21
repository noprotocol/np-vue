// Polyfills
import 'core-js/fn/array/find'
import Promise from 'promise-polyfill'
window.Promise = window.Promise || Promise

import Vue from 'vue'
import App from './App'
import router from './router'

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})
