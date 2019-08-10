import axios from 'axios'
import csv from 'csvtojson'

let metros = {
  'chicta':{
    id: 'chicta',
    name: 'CTA',
    city: 'Chicago',
    coords: {
      lat: 41.8787,
      lng: -87.6403
    },
  },
  'lametro':{
    id: 'lametro',
    name: 'Metro',
    city: 'Los Angeles',
    coords: {
      lat: 34.0562,
      lng: -118.2365
    },
  },
  'nycmta':{
    id: 'nycmta',
    name: 'MTA',
    city: 'New York City',
    coords: {
      lat: 40.7527,
      lng: -73.9772
    },
  },
  'phlsepta':{
    id: 'phlsepta',
    name: 'SEPTA',
    city: 'Philadelphia',
    coords: {
      lat: 39.9558,
      lng: -75.1820
    },
  }
}

for(let id in metros){
  metros[id]['getStations'] = getGetStations(id)
}

function getGetStations(id){
  return async function(){

    let stations = []
    function addStation(station, lat, lng){
      station['coords']={
        lat: lat,
        lng: lng
      }
      if( stations.indexOf(station) == -1 ) stations.push(station)
    }
    
    try{
      switch(id){
        
        case 'chicta':
          (await axios.get('https://data.cityofchicago.org/resource/8pix-ypme.json'))
            .data.forEach((station)=>{
              addStation(
                station, 
                parseFloat(station.location.latitude), 
                parseFloat(station.location.longitude)
              )
          })
          break

        case 'lametro':
          (await axios.get('https://api.metro.net/agencies/lametro-rail/routes'))
            .data.items.map( async (route)=>{
              (await axios.get('https://api.metro.net/agencies/lametro-rail/routes/'+route.id+'/stops'))
                .data.items.forEach((station)=>{
                  addStation(
                    station, 
                    station.latitude, 
                    station.longitude
                  )                
                })
            })
          break

        case 'nycmta':
          await csv().fromString( ( await axios.get( '/static/nycmta.csv' ) ).data )
            .then((response)=>{
              response.forEach((station)=>{
                addStation(
                  station,
                  parseFloat(station['GTFS Latitude']),
                  parseFloat(station['GTFS Longitude'])
                )
              })      
            })
          break
          
        case 'phlsepta':
          await axios.get('/static/phlsepta.json')
            .then((response)=>{
              response.data.forEach((station)=>{
                addStation(
                  station, 
                  parseFloat(station.location_lat), 
                  parseFloat(station.location_lon)
                )  
              })
            })
          break
      }
    }
    catch(e){ console.log('Error getting stations for '+id+':', e) }
    
    return stations
  }
}

export default metros