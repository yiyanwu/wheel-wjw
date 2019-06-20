const expect = chai.expect;
import Vue from 'vue'
import Popover from '../src/popover'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Popover', () => {

    it('存在.', () => {
        expect(Popover).to.be.exist
    })

    it('接受 position 属性',(done) => {
        Vue.component('g-popover',Popover)
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
        <g-popover position="bottom" ref="a">
          <template slot="content">
          弹出内容
          </template>
          <button>点我</button>
        </g-popover>
        `
        const vm = new Vue({
            el: div
        })
        vm.$nextTick(() => {
            vm.$el.querySelector('button').click()
            vm.$nextTick(()=> {
               expect(vm.$refs.a.$refs.contentWrapper.classList.contains('position-bottom')).to.eq(true)
               done()
            })
        })
    })
    
    xit('接受 trigger 属性',(done) => {
        Vue.component('g-popover',Popover)
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
        <g-popover trigger="hover" ref="a">
          <template slot="content">
          弹出内容
          </template>
          <button>点我</button>
        </g-popover>
        `
        const vm = new Vue({
            el: div
        })
        setTimeout(() => {
            let event = new Event('mouseenter')
            vm.$el.dispatchEvent(event)
            vm.$nextTick(()=> {
                const {contentWrapper} = vm.$refs.a.$refs
                expect(contentWrapper).to.exist
                done()
            })
        })
    })
})