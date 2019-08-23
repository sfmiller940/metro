import { mount } from '@vue/test-utils'
import metros from '../../../src/metros.js'

describe('metros Object', () => {
  test('has keys of type string', () => {
    for( let id in metros ){
      expect(typeof id).toBe('string')
    }
  })
  test('has station ids as keys',()=>{
    for( let id in metros ){
      expect(metros[id].id).toBe(id)
    }    
  })
  test('contains station properties',()=>{
    for( let id in metros ){
      expect(metros[id]).toMatchSnapshot({
        id: expect.any(Number),
        name: expect.any(String),
        city: expect.any(String),
        coords:{
          lat: expect.any(Number),
          lng: expect.any(Number),
        },
        getStations: expect.any(Function)
      })
    }     
  })
})