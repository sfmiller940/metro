<template>
  <div class="station">
    <div class="info">
      <div class="name">{{station.name}}</div>
    </div>
    <div class="svg-wrapper">
      <svg xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 480 480"
        :height="20"
        :width="20"
        :aria-labelledby="station.name"
        role="presentation"
        style="padding: 0; margin: 0;"
      >
        <title
          :id="station.id"
          lang="en"
        >{{ station.name }}</title>

        <defs>
          <filter id="shadow">
            <feDropShadow dx="0" dy="0" stdDeviation="20" flood-color="black" flood-opacity="1" />
          </filter>
        </defs>

        <g transform="translate(-0.44606603,-678.65643)">
          <path
           :id="station.id"
           d="m 100.70352,1054.3694 c 1e-5,-91.10916 31.04903,-148.85244 99.74255,-148.85244 68.69352,0 99.74255,57.74328 99.74255,148.85244 l 99.74254,0 0,-255.17559 -149.61382,0 0,-96.32039 -49.87127,-47.25864 -49.87128,53.38477 0.82089,90.19426 -150.4347125,0 0,255.17559 z"
           style="fill:white;fill-opacity:1;stroke:black;stroke-opacity:0;stroke-width:0;filter:url(#shadow);" />
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