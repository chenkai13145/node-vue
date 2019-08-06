<template>
  <!-- 地图 -->
  <baidu-map class="bm-view" :center="getcity" @ready="handler" :scroll-wheel-zoom="true">
    <div class="searchBox">
      <input type="text" v-model="keyword" placeholder="请输入仓库名搜索">
      <button @click="seach()">搜索</button>
    </div>
    <!--地图类型，两种：一种是路线一种是绿的那种 :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']"-->
    <!-- <bm-map-type :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']" anchor="BMAP_ANCHOR_TOP_LEFT"></bm-map-type> -->
    <!--地图搜索功能，绑定上面的input，-->
    <!--display: none样式很关键，因为下面默认会有地址提示信息很长，很烦，这样搜索会很舒服，-->
    <!--zoom是搜索结果的视图比例，个人觉得12.8很舒服显示-->
    <!-- <bm-local-search :keyword="getcity" :auto-viewport="true" zoom="12.8" style="display: none"></bm-local-search> -->
    <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
    <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
      <!--鼠标比例尺控件-->
    <bm-scale anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-scale> 

    <bm-label
      v-for="(marker,key) of markers"
      :key="key"
       v-if="off"
      v-bind:content="marker.inoutwarehouse+'辆'"
      :offset="{width: -26, height: -45}"
      :position="{lng: marker.warehouse_lng, lat: marker.warehouse_lat}"
    />
    <bml-marker-clusterer :averageCenter="true">
   <div v-for="(marker,key) of markers"  :key="key">
    <bm-marker
       v-if="off"
      :icon="{url:marker.url,size: {width: 20, height: 20},opts: {anchor: {width:20,height:20},imageSize: {width:20,height:20}}}"
      :key="key"
      :position="{lng: marker.warehouse_lng, lat: marker.warehouse_lat}"
      @click="infoWindowOpen(marker)"
    >
       <bm-info-window :position="{lng: marker.warehouse_lng, lat: marker.warehouse_lat}" :show="marker.showFlag" @close="infoWindowClose(marker)" @open="infoWindowOpen(marker)">
         <p>{{marker.warehouse_name}}</p>
        <p>投资企业:{{marker.org_name}}</p>
        <p>商品车品牌:{{marker.car_brand_name}}</p>
        <p>所在城市:{{marker.factory_city_name}}</p>
       </bm-info-window>
    </bm-marker>
    
   </div>
   </bml-marker-clusterer>
  </baidu-map>
  <!-- 地图 -->
</template>

<script>
import { BmlMarkerClusterer } from "vue-baidu-map";
export default {
  name: "transport",
  components: {
    BmlMarkerClusterer
  },
  props: {
    markers: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      off:true,
      show: false,
      // 地图
      center: { lng: 0, lat: 0 },
      zoom: 3,
      keyword: "", //查询关键词
      city:'四川'
    };
  },
  mounted() {
    // this.getTrafficData()
  },
  methods: {
    handler({ BMap, map }) {
      var _that=this
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
      this.center.lng = 0;
      this.center.lat = 0;
      this.zoom = 3;
      //控制拖曳范围
      var extent=new Object();
      extent.maxY="85"; 
      map.addEventListener("dragging",function(type, target){
                  if(!(extent.maxY>this.getBounds().getNorthEast().lat)){
                  setTimeout(()=>{
                  setTimeout(()=>{
                     _that.off=true
                  })
                  _that.off=false
                },100)
                }
            })
    },
    getLocations(val) {
      var _this = this;
      if(val){
        var point = new BMap.Point(val.warehouse_lng, val.warehouse_lat)
        var gc = new BMap.Geocoder();
         gc.getLocation(point, rs => {
        _this.city = rs.address;
        });
      }
      
    },
    draw({ el, BMap, map }) {
      const pixel = map.pointToOverlayPixel(new BMap.Point(116.404, 39.915));
      el.style.left = pixel.x - 60 + "px";
      el.style.top = pixel.y - 20 + "px";
    },
     infoWindowClose (marker) {
      marker.showFlag = false
    },
    infoWindowOpen (marker) {
      marker.showFlag = true
    },
    seach(){
      this.off=false
      this.$emit('seach',this.keyword)
    }

  },
  computed: {
      getcity(){
        
        return this.city
      },
      markersc(){
        return this.markers
      }
  },
  watch:{
    markers:{
      handler(newVal,oldVal){
         if(newVal){
           if(newVal.length>0){
             this.off=true
           }
           this.getLocations(newVal[Math.floor( Math.random()*newVal.length)])
         }
      }
    }
  }
};
</script>

<style lang="scss" scoped>

// 地图
.bm-view {
  width: 100%;
  height: 100%;
  background: #000;
}
.BMap_stdMpSlider,
.BMap_zlHolder.hvr {
  display: none !important;
}
.BMap_stdMpZoom {
  position: fixed !important;
  bottom: 100px;
  top: auto !important;
  height: 60px !important;
}
.BMap_stdMpPan {
  display: none;
}
.BMap_stdMpZoomOut {
  top: 18px !important;
}
.BMap_cpyCtrl.BMap_noprint.anchorBL,
.anchorBL {
  display: none;
}
.BMapLabel {
  font-size: 14px;
  color: #333;
  border-radius: 4px;
  border: 1px solid #ccc !important;
  background: #fff !important;
  padding: 2px 5px !important;
}
.BMap_button.BMap_stdMpZoomIn{
  width: 30px!important;
  height: 30px!important;
  background: url('../../../assets/monitoring/jia.png')center center no-repeat!important;
  background-size:cover; 
}
.BMap_button.BMap_stdMpZoomOut{
  width: 30px!important;
  height: 30px!important;
  top:28px!important;
  background: url('../../../assets/monitoring/jian.png')center center no-repeat!important;
  background-size:100%; 
}
</style>