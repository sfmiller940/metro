import { mount } from '@vue/test-utils'
import metros from '../../../src/metros.js'

describe('metros Object', () => {
  test('has keys of type string', () => {
    for( let id in metros ){
      expect(typeof id).toEqual('string')
    }
  })
  test('has station ids as keys',()=>{
    for( let id in metros ){
      expect(id).toEqual(metros[id].id)
    }    
  })
  test('contains station properties',()=>{
    for( let id in metros ){
      expect(typeof metros[id].name).toEqual('string')
      expect(typeof metros[id].city).toEqual('string')
      expect(typeof metros[id].coords.lat).toBe('number')
      expect(typeof metros[id].coords.lng).toBe('number')
      expect(typeof metros[id].getStations).toBe('function')
    }     
  })
})