<template>
  <div class="station">
    <div class="info">
      <div class="name">{{station.name}}</div>
    </div>
    <div class="svg-wrapper">
      <svg xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 401 376.22788"
        :height="20"
        :width="15"
        :aria-labelledby="station.name"
        role="presentation"
        style="padding: 0; margin: 0;"
      >
        <title
          :id="station.id"
          lang="en"
        >{{ station.name }}</title>
        <g transform="translate(-0.44606603,-678.65643)">
          <path
           :id="station.id"
           d="m 100.94607,1054.3843 c 10e-6,-85.69081 31.12917,-140.00004 100,-140.00004 68.87083,0 100,54.30923 100,140.00004 l 100,0 0,-240.00004 -150,0 0,-90.59212 -50,-44.44812 -50,50.20992 0.823,84.83032 -150.82300397,0 0,240.00004 z"
           style="fill:white;fill-opacity:1;stroke:black;stroke-opacity:1;stroke-width:60;" />
        </g>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StationSVG',
  data:function(){
    return{}
  },
  props: ['station']
}
</script>

<style lang="scss" scoped>
.station{
  position: relative;

  .info{
    display: none;
    position: absolute;
    left: 0;
    top: 100%;
    padding: 15px;
    border-radius: 10px;
    border: 1px solid black;
    background: rgba(255,255,255,0.75);
    color: black;
    font-size: 1rem;
    width: 200px;
    z-index: 99999;
  }

  &:hover .info{
    display: inline-block;
  }
}
</style>