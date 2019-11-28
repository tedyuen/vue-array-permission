import Plugin from '../src/vue-array-permission'
import { mount, createLocalVue } from '@vue/test-utils'

const localVue = createLocalVue()
localVue.use(Plugin)
localVue.prototype.$vap.authorize(['a', 'b', 'c'])

const Component = {
  template: `
    <div>
      <div class="visible-content" v-ap-v="'a'">Content</div>
      <div class="hidden-content" v-ap-v="'d'">Content</div>
      <div class="and-visible-content" v-ap-vand="['a','b']">Content</div>
      <div class="and-hidden-content" v-ap-vand="['a','d']">Content</div>
      <div class="or-visible-content" v-ap-vor="['a','d']">Content</div>
      <div class="or-hidden-content" v-ap-vor="['d','e']">Content</div>
    </div>
  `
}

describe('permission plugin test', () => {
  const wrapper = mount(Component, { localVue })
  it('Single permission visible test', () => {
    expect(wrapper.find('div .visible-content').isVisible()).toBeTruthy()
    expect(wrapper.find('div .hidden-content').isVisible()).toBeFalsy()
  })
  it('Multiple permission visible <AND> test', () => {
    expect(wrapper.find('div .and-visible-content').isVisible()).toBeTruthy()
    expect(wrapper.find('div .and-hidden-content').isVisible()).toBeFalsy()
  })
  it('Multiple permission visible <OR> test', () => {
    expect(wrapper.find('div .or-visible-content').isVisible()).toBeTruthy()
    expect(wrapper.find('div .or-hidden-content').isVisible()).toBeFalsy()
  })
})
