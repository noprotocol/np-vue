import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: __dirname,
    transitionOnLoad: true,
    linkActiveClass: 'active',
    routes: [{
        path: '/',
        name: 'Hello',
        component: Hello
    }]
})

router.beforeEach((route, redirect, next) => {
    next()
})

router.afterEach((to, from) => {
})

export default router
