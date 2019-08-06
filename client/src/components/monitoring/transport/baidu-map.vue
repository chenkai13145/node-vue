<template>
  <!-- 地图 -->
  <baidu-map class="bm-view" center="河北" @ready="handler" :scroll-wheel-zoom="true">
    <!--鼠标比例尺控件-->
    <bm-scale anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-scale> 
    <!--缩放控件-->
    <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
    <!--state 不为3或者4就是离线  3静止 4运动。  type   0公路   1铁路    2水运-->
    <bml-marker-clusterer :averageCenter="true">
       <bm-marker 
          v-for="(marker,key) of markers" 
          :key="key" 
          :position="{lng: marker.longitude, lat: marker.latitude}"
          :icon="{url: (marker.state!=3||marker.state!=4)&&marker.type == 0? '/img/ic_tool_truck_gray.png' : 
                  (marker.state!=3||marker.state!=4)&&marker.type == 1 ? '/img/ic_tool_train_gray.png' : 
                  (marker.state!=3||marker.state!=4)&&marker.type == 2 ?'/img/ic_tool_ship_gray.png':
                  marker.state==3&&marker.type == 0 ?'/img/ic_tool_truck_blue.png':
                  marker.state==3&&marker.type == 1 ?'/img/ic_tool_train_blue.png':
                  marker.state==3&&marker.type == 2 ?'/img/ic_tool_ship_blue.png':
                  marker.state==4&&marker.type == 0 ?'/img/ic_tool_truck_green.png':
                  marker.state==4&&marker.type == 1 ?'/img/ic_tool_train_green.png':
                  '/img/ic_tool_ship_blue.png', size: {width: 30, height: 30}}"
          @click="trackOpen(marker)">
       </bm-marker>
    </bml-marker-clusterer>
    <bm-label v-for="(marker,key) of markers" :key="key" 
              v-bind:content="marker.num+'辆'" 
              :position="{lng: marker.longitude, lat: marker.latitude}"
              :labelStyle="{color: '#39394D', fontSize : '12px',background: '#FFFFFF',borderRadius: '10px', minWidth: '50px',textAlign: 'center'}"
              :offset="{width:-25,height:-32}"/>
  </baidu-map>
  <!-- 地图 -->
</template>

<script>
import { BmlMarkerClusterer } from 'vue-baidu-map'
export default {
  name: 'transport',
  components: {
    BmlMarkerClusterer
  },
  props: {
    markers: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      // 地图
      center: {lng: 0, lat: 0},
      zoom: 3,
      styles:[
        { 
        url: '/img/ic_aggregation.png', 
        size: { width: 55, height: 76 }, 
        opt_anchor: [16, 0], 
        textColor: 'white', 
        opt_textSize: 12
      } 
      // { 
      //   url: 'img/ic_aggregation.png', 
      //   size: { width: 55, height: 76 }, 
      //   opt_anchor: [40, 35], 
      //   textColor: 'white', 
      //   opt_textSize: 12
      // }, 
      // { 
      //   url: 'img/ic_aggregation.png', 
      //   size: { width: 55, height: 76 }, 
      //   opt_anchor: [32, 0], 
      //   textColor: 'white', 
      //   opt_textSize: 12
      // }
      ]//聚合点样式
    }
  },
  mounted () {
    // this.getTrafficData()
    
  },
  methods: {
    handler ({BMap, map}) {
      // 地图样式
      map.setMapStyle({
        styleJson:[
                    {
                      "featureType": "all", 
                      "elementType": "all", 
                      "stylers": {
                        "lightness": 10, 
                        "saturation": -45
                      }
                    }, 
                    {
                      "featureType": "highway", 
                      "elementType": "geometry.fill", 
                      "stylers": {
                        "color": "#b5bcd6ff", 
                        "lightness": 42
                      }
                    }, 
                    {
                      "featureType": "highway", 
                      "elementType": "geometry.stroke", 
                      "stylers": {
                        "color": "#a3a8bdff"
                      }
                    }, 
                    {
                      "featureType": "green", 
                      "elementType": "geometry.fill", 
                      "stylers": {
                        "color": "#daf1e8ff", 
                        "saturation": -36
                      }
                    }, 
                    {
                      "featureType": "water", 
                      "elementType": "geometry.fill", 
                      "stylers": {
                        "color": "#81c3ffff", 
                        "lightness": 55, 
                        "saturation": -55
                      }
                    }, 
                    {
                      "featureType": "boundary", 
                      "elementType": "geometry", 
                      "stylers": {
                        "color": "#dcddeaff"
                      }
                    }, 
                    {
                      "featureType": "land", 
                      "elementType": "geometry.fill", 
                      "stylers": {
                        "color": "#eaebf2ff", 
                        "saturation": -66
                      }
                    }, 
                    {
                      "featureType": "road", 
                      "elementType": "labels.text.fill", 
                      "stylers": {
                        "saturation": -100
                      }
                    }, 
                    {
                      "featureType": "poilabel", 
                      "elementType": "labels.text.fill", 
                      "stylers": {
                        "color": "#8b9196ff", 
                        "saturation": -100
                      }
                    }, 
                    {
                      "featureType": "subway", 
                      "elementType": "labels.icon", 
                      "stylers": {
                        "visibility": "off"
                      }
                    }, 
                    {
                      "featureType": "subway", 
                      "elementType": "geometry", 
                      "stylers": {
                        "visibility": "off"
                      }
                    }, 
                    {
                      "featureType": "manmade", 
                      "elementType": "geometry.fill", 
                      "stylers": {
                        "visibility": "off"
                      }
                    }, 
                    {
                      "featureType": "building", 
                      "elementType": "all", 
                      "stylers": {
                        "visibility": "off"
                      }
                    }, 
                    {
                      "featureType": "arterial", 
                      "elementType": "geometry.fill", 
                      "stylers": {
                        "color": "#dcddeaff"
                      }
                    }, 
                    {
                      "featureType": "arterial", 
                      "elementType": "geometry.stroke", 
                      "stylers": {
                        "color": "#c1c3d1ff"
                      }
                    }, 
                    {
                      "featureType": "poilabel", 
                      "elementType": "labels.icon", 
                      "stylers": {
                        "visibility": "off"
                      }
                    }, 
                    {
                      "featureType": "administrative", 
                      "elementType": "all", 
                      "stylers": {
                        "saturation": -87
                      }
                    }, 
                    {
                      "featureType": "district", 
                      "elementType": "labels.text.fill", 
                      "stylers": {
                        "color": "#7a7a7aff"
                      }
                    }, 
                    {
                      "featureType": "district", 
                      "elementType": "labels.text.stroke", 
                      "stylers": {
                        "color": "#ffffffff", 
                        "saturation": -100
                      }
                    }, 
                    {
                      "featureType": "poilabel", 
                      "elementType": "all", 
                      "stylers": { }
                    }, 
                    {
                      "featureType": "manmade", 
                      "elementType": "labels", 
                      "stylers": {
                        "saturation": -100
                      }
                    }, 
                    {
                      "featureType": "highway", 
                      "elementType": "labels.text.stroke", 
                      "stylers": {
                        "color": "#dfe6ffff"
                      }
                    }
                  ]
      })
      console.log(BMap, map)
      this.center.lng = 116.404
      this.center.lat = 39.915
      this.zoom = 15
    },
    trackOpen(data) {
      this.$emit('trackOpen', data)
    }
  },
  computed: {
  }
}
</script>

<style lang="scss">
// 地图
.bm-view {
width: 100%;
height: 100%;
}
.BMap_stdMpSlider,.BMap_zlHolder.hvr{
  display: none!important;
}
.BMap_stdMpZoom{
  position: fixed!important;
  bottom: 100px;
  top: auto!important;
  height: 60px!important;
}
.BMap_stdMpPan{display: none}
.BMap_cpyCtrl.BMap_noprint.anchorBL,.anchorBL{
   display: none;
}
.BMapLabel{
  font-size:14px;
  color:#333;
  border-radius:4px;
  border:1px solid #ccc!important;
  background: #fff!important;
  padding: 2px 5px!important;
}
.BMap_button.BMap_stdMpZoomIn{
  width: 30px!important;
  height: 30px!important;
  background: url('../../../assets/monitoring/jia.png')!important;
  background-size:100%; 
}
.BMap_button.BMap_stdMpZoomOut{
  width: 30px!important;
  height: 30px!important;
  top:28px!important;
  background: url('../../../assets/monitoring/jian.png')!important;
  background-size:100%; 
}
</style>
