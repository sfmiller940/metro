import { mount } from '@vue/test-utils'
import StationSVG from '@/components/StationSVG'

describe('StationSVG', () => {
  const wrapper = mount(StationSVG,{
    propsData:{
      station:{
        id: 'test',
        name:'Test Name'
      }
    }
  })
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  test('is a StationSVG instance', () => {
    expect(wrapper.is(StationSVG)).toBeTruthy()
  })
  test('has correct name',()=>{
    expect(wrapper.find('.station .info .name').text()).toBe('Test Name')
  })
})