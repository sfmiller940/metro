import { mount } from '@vue/test-utils'
import metros from '../../../src/metros.js'

describe('metros object', () => {

  test('is of type object',()=>{
    expect(typeof metros).toBe('object')
  })

  test('has properties of type object', () => {
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

  test('get station objects with properties', async ()=>{
    for( let id in metros ){
      let stations = await metros[id].getStations()
      expect(typeof stations).toBe('object')
      stations.forEach( station => {
        expect(station).toMatchObject({
          id: expect.any(String),
          name: expect.any(String),
          coords:{
            lat: expect.any(Number),
            lng: expect.any(Number),
          }        
        })
      })
    }     
  })
})