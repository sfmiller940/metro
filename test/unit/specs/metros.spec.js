import { mount } from '@vue/test-utils'
import metros from '../../../src/metros.js'

describe('metros object', () => {

  test('has typeof object',()=>{
    expect(typeof metros).toBe('object')
  })

  test('has keys with typeof string', () => {
    for( let id in metros ){
      expect(typeof id).toBe('string')
    }
  })

  test('has an object for each key', () => {
    for( let id in metros ){
      expect(typeof metros[id]).toBe('object')
    }
  })
})

describe('metro objects',()=>{

  test('have properties',()=>{
    for( let id in metros ){
      expect(metros[id]).toMatchObject({
        id: id,
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