<template>
  <div id="app">

    <google-map
      ref="gmap"
      :center="metro.coords" 
      :zoom="12" 
      :map-type-id="'hybrid'"
      style="width: 100%; height: 100%" 
    >

      <gmap-marker
        v-for="(station,ind) in stations"
        :key="ind"
        :position="station.coords"
        :clickable="true"
        :draggable="false"
        @click="gmapObj.panTo(station.coords)"
      />
    </google-map>

    <div id="id-select">
      <select v-model="id">
        <option 
          v-for="mtr in metros"
          v-bind:value="mtr.id"
        >{{ mtr.city + ' - ' + mtr.name }}</option>
      </select>
    </div>
  
  </div>
</template>

<script>
import metros from './metros'

export default {
  name: 'App',

  data:function(){
    return{
      id: 'houmetro',
      metros: metros,
      gmapObj:''
    }
  },
  computed:{
    metro(){
      return this.metros[this.id]
    }
  },
  asyncComputed:{
    async stations(){
      return await this.metro.getStations()
    }
  },

  async mounted(){
    this.gmapObj = await this.$refs.gmap.$mapPromise
  },  
}
</script>

<style>
html, body, #app {
  float: left;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

#id-select{
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}
</style>