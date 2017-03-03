import Vue from 'vue'
import Hello from 'src/components/Hello'

describe('Hello.vue', () => {
    it('should render correct contents', () => {
        const Constructor = Vue.extend(Hello)
        const vm = new Constructor().$mount()
        expect(vm.$el.querySelector('.hello h1').textContent)
        .toBe('Hello world :)')
    })
    it('renders to a nice snapshot', () => {
        const renderer = require('vue-server-renderer').createRenderer()
        const vm = new Vue({
            el: document.createElement('div'),
            render: h => h(Hello)
        })
        renderer.renderToString(vm, (_, str) => {
            expect(str).toMatchSnapshot()
        })
    })
})
