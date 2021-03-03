<style lang="scss">
    .ship-map{
        width: 100%;
        height: 100%;
        // tooltip样式修改
        .leaflet-tooltip{
          border-radius: 4px;
          border: solid 1px #282828;
	        opacity: 0.7 !important;
          color: #282828;
          box-shadow: none;
        }
        .leaflet-tooltip-left:before{
          display: none;
        }
        .leaflet-tooltip-right:before{
          display: none;
        }
    }
</style>
<template >
    <div class="vue-leaflet ship-map" id="ship_map">

    </div>
</template>

<script>
import Vue from "vue"
import axios from "axios"
import {LMap, LTileLayer, LMarker, LPopup, LPolyline, LTooltip} from "vue2-leaflet"
import L, { marker } from "leaflet"
import { latLng, icon } from "leaflet"
import "leaflet/dist/leaflet.css"
import Vue2LeafletPolylineDecorator from "vue2-leaflet-polylinedecorator"
import global from '@components/_globals'
import { Icon } from 'element-ui'
import * as d3 from 'd3'

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});

const axiosOptionsXData = {
  baseURL: global.url + 'schedules/dragon', //测试环境
  timeout: 60000,
  headers: {
    Authorization: Vue.prototype.getToken(),
    "Access-Control-Allow-Origin": "*",
    "Cache-Control": "no-cache, no-store, max-age=0, must-revalidate"
  },
  timeout: 60000
};

Vue.prototype.$axios = axios.create(axiosOptionsXData);

export default {
    name: "shipMap",
    props: [
      'shipmapList',
      'largeMap',
      'contrastMap',
      'shipObject'
    ],
    data() {
      return {
        map: '',
        url: 'http://mt3.google.cn/vt/lyrs=m&hl=zh-CN&gl=cn&x={x}&y={y}&z={z}',
        attribution:'© <a href="http://osm.org/copyright">OpenStreetMap</a> Haut-Gis-Org',
        zoom: 3,
        direction:0,
        watchWay : [], //多段船轨迹
        allShip: [], //自定义或者 周次轨迹
        contrastShip: [], //轨迹对比
        fitMarker: [], //被标记的点坐标和信息
        lants: [], //船的坐标点
        icon: {
          // 标记点
          marker: icon({
            iconUrl: require("./images/guakao.png"),
            iconSize: [8, 8],
          }),
          //船
          ship: icon({
            iconUrl: require("./images/icon_ship.png"),
            iconSize: [26, 16],
          }),
        },
        markerObjects: [],
      };
    },
    computed: {
      allLatlngs () {
        const { watchWay, allShip, contrastShip } = this
        return {
          watchWay,
          allShip,
          contrastShip,
        }
      },
    },
    watch: {
      //船信息
      shipObject:{
        handler: function(val){
          if(val.mmsi){
            if(val.lat && val.lon){
              var that = this
              this.$nextTick(() => {
                that.lants = [val.lat / 1000000.0,this.getLon(val.lon / 1000000.0)]
              })           
            }
          }
        },
        immediate: true
      },
      //多段船传进来的信息
      shipmapList: {
        handler: function(val) {
        var val = JSON.parse(JSON.stringify(val))
          if (val && val.length > 0) {
            var shipmapList = []
            for (let j = 0; j < val.length; j++) {
              for (let p = 0; p < val[j].currentList.length; p++) {
                shipmapList.push((val[j].currentList)[p])
              }
            }
            //处理坐标
            this.latLong('watchWay',shipmapList,'#072c4c')
          }else{
            this.watchWay.latlngs = []
            this.watchWay.nameInfro = []
            this.clearMarker()
          }
        },
        immediate: true
      },
      //自定义 或者 周次点进来的船
      largeMap:{
        handler: function(val) {
            var val = JSON.parse(JSON.stringify(val))
          if (val && val.length > 0) {
            //处理坐标
            this.latLong('allShip',val,'#d81e06')
          }else{
            this.allShip.latlngs = []
            this.allShip.nameInfro = []
            this.clearMarker()
          }
        },
        immediate: true
      },
      //轨迹对比
      contrastMap:{
        handler: function(val) {
            var val = JSON.parse(JSON.stringify(val))
          if (val && val.length > 0) {
            //处理坐标
            this.latLong('contrastShip',val,'#17bf00')
          }else{
            this.contrastShip.latlngs = []
            this.contrastShip.nameInfro = []
            this.clearMarker()
          }
        },
        immediate: true
      },
      //所有坐标 
      allLatlngs:{
        handler: function(val){
          if(val){
            var allShip = val.allShip.latlngs
            var contrastShip = val.contrastShip.latlngs
            var watchWay = val.watchWay.latlngs
            //标记点 与信息  总共取16个点
            var fitMarker = (val.allShip.nameInfro.concat(val.contrastShip.nameInfro)).concat(val.watchWay.nameInfro)
            this.fitMarker = this.sliceArry(fitMarker)

            var mapMarker =  allShip.concat(contrastShip).concat(watchWay)
              console.log(mapMarker,'mapMarker')
                var distanceSum = 0;
                var count = 0;
                var lineDirection = {}
              for (var i = 0; i < mapMarker.length - 1; i++) {
                    var point1 = mapMarker[i]
                    var point2 = mapMarker[i + 1]
                    var angle = this.calcLineAngle(point1, point2)

                    var distance = Math.pow(Math.pow(point2[1] - point1[1], 2) + Math.pow(point2[0] - point1[0], 2), 0.5);
                    distanceSum += distance;
                    var arrowCount = Math.floor(distanceSum / 0.01) - count;
                    count += arrowCount;
                    for (var j = 1; j <= arrowCount; j++) {
                        var lng = point1[1] + (point2[1] - point1[1]) * ((j - 0.2) / arrowCount);
                        var lat = point1[0] + (point2[0] - point1[0]) * ((j - 0.2) / arrowCount);

                        var width = 14;
                        var height = 14;
                        var html = '<img src="./images/icon_ship.png" style="width:' + width + 'px; height:' + width + 'px; transform:rotate(' + angle + 'deg) scale(0.6); " />';

                        var icon = L.divIcon({
                            html: html,
                            iconSize: [width, height],
                            iconAnchor: [width / 2.0, height / 2.0]
                        });

                        lineDirection.marker = this.addMarker(icon, lng, lat);
                        console.log(lineDirection,'lineDirectionlineDirection')
                    }
                }          
            }
        },
        immediate: true
      },
    },
    methods: {
      addMarker(icon, lng, lat){
        var latlng = new L.LatLng(lat, lng);
        var marker = new L.Marker(latlng, { icon: icon });
        // this.map.addLayer(marker);
        console.log()
        L.marker(latlng,marker).addTo(this.map)
        return marker;      
      },
calcLineAngle(point1, point2) {
    var h = point2[0] - point1[0];
    var w = point2[1] - point1[1];

    var angle = Math.atan(Math.abs(h) / Math.abs(w)) * 180 / Math.PI;
    if (w == 0) {
        if (h > 0) {
            return -90;
        }
        if (h < 0) {
            return 90;
        }
    }
    if (h == 0) {
        if (w > 0) {
            return 0;
        }
        if (w < 0) {
            return 180;
        }
    }
    if (h > 0) {
        if (w > 0) {
            return 0 - angle;
        }
        if (w < 0) {
            return angle - 180;
        }
    }
    if (h < 0) {
        if (w > 0) {
            return angle;
        }
        if (w < 0) {
            return 180 - angle;
        }
    }

    return 0;
} ,
    //处理传入的数组 进行轨迹坐标整理
      //需要的值 对象名 数组
      latLong(name,val,color){
        var val = val
        var name = name
        var color = color
        //初始坐标为空
        this[name] = {
          latlngs: [],
          nameInfro: [],
        }
        //轨迹
        var latlngs = []
        //标记点
        var nameInfro = []
        val = val.sort(function(a, b) {
          return b.posTime < a.posTime ? -1 : 1
        })
        for (let i = 0; i < val.length; i++) {
            let lon = val[i].lon / 1000000.0
            let lat = val[i].lat / 1000000.0
            //判断是否反方向环绕地球航线
            if (this.direction == 0) {
              let hlimit = i >= 1 && Math.abs(val[i - 1].lon / 1000000.0 - val[i].lon / 1000000.0) > 180
              if (hlimit) {
                this.direction = lon < 0 ? 1 : -1;
              }
            }
            latlngs.push([lat, this.getLon(lon)])
            nameInfro.push({
                lat:lat,
                lon:this.getLon(lon),
                infro:(val[i].speed ? val[i].speed / 1000 : '0.0') + 'kn' + ' ' + val[i].posTime,
                posTime: val[i].posTime ? (new Date(val[i].posTime).getTime()) : ''
            })
        }

        this[name].latlngs = this.sliceLine(latlngs)
        var marColor = 1
        if(name == 'watchWay'){
          marColor = 1
        }else if(name == 'allShip'){
          marColor = 2
        }else{
          marColor = 3
        }
        //最后确定的坐标 跟 一起坐标做对比
        for (let p = 0; p < nameInfro.length; p++) {
          for (let j = 0; j < this[name].latlngs.length; j++) {
            if(nameInfro[p].lat == this[name].latlngs[j][0] && nameInfro[p].lon == this[name].latlngs[j][1]) //说明是同一个坐标点
              this[name].nameInfro.push({
                lat:this[name].latlngs[j][0],
                lon:this[name].latlngs[j][1],
                infro:nameInfro[p].infro,
                marColor: marColor,
                posTime: nameInfro[p].posTime,
              })
          }
        }

        this.$nextTick(() => {
            var polyline  = L.polyline(this[name].latlngs, {color: color}).addTo(this.map)
            this.map.fitBounds(polyline.getBounds())
        })    
      },
      //纬度坐标转换
      getLon(lon) {
        if (Math.abs(this.direction + lon) < Math.abs(lon)) {
          return this.direction > 0 ? 360 + lon : -360 + lon
        }
        return lon
      },
      //格式化坐标点
      sliceLine(h) {
        let sliceIndex = -1;
        for (var point in h) {
          if (point > 1 && Math.abs(h[point - 1][1] - h[point][1]) > 180) {
            sliceIndex = point;
          }
        }
        if (sliceIndex > 0) {
          let h2 = h.slice(sliceIndex * 1, h.length - 1);
          let h1 = h.slice(0, sliceIndex);
          return h2.concat(h1);
        }
        return h;
      },

      //过滤坐标点数组 给数组进行切割
      sliceArry(val){
        var newLastV = []
        if(val.length > 0){
          //数组去重
          var newV = []
          for(var i = 0; i < val.length; i++){
          　　var flag = true
          　　for(var j=0;j < newV.length; j++){
          　　　　if(val[i].lat == newV[j].lat && val[i].lon == newV[j].lon){
          　　　　　　flag = false
                    break
          　　　　}
          　　}
          　　if(flag){
                newV.push(val[i])
          　　}
          }
          //排序
          newV = newV.sort(function(a, b) {
            return b.posTime < a.posTime ? -1 : 1
          })
          //最后得到的数组 newV 里 筛选出 16个点

          if(newV.length > 16){
              var tempList = []
              var count = Math.round(newV.length / 16) + 1
              for(var p = 0, len = newV.length;  p < len;  p += count){
                tempList.push(newV.slice(p, p + count))
                if(p + count > newV.length){
                  newLastV.push(tempList[0][tempList.length - 1])
                }else{
                  newLastV.push(tempList[0][0])
                }
                tempList = []
              }
          }else{
            return newV
          }
          return newLastV
        }else{
          return newLastV
        }
      },
      //清除标记点还有信息
      clearMarker(){
        if(this.watchWay.latlngs && this.allShip.latlngs && this.contrastShip.latlngs && this.watchWay.latlngs.length == 0 &&  this.allShip.latlngs.length == 0 && this.contrastShip.latlngs.length == 0){
          this.fitMarker = []     
          L.polyline([]).addTo(this.map)       
        }
        // var that = this
        // if (this.$refs.shipMaps !== undefined) {
        //   that.$refs.shipMaps.center = that.lants
        // }
      },
    },
  
    create() {},
    mounted() {
        this.map = L.map('ship_map').setView([12.505, -0.09], 4)

        L.tileLayer(this.url, {
            foo: 'bar',
            attribution: this.attribution,
            zoom: 3, //地图缩放大小
        }).addTo(this.map)
    },
    components: {
      LMap,
      LTileLayer,
      LMarker,
      LPopup,
      LPolyline,
      LTooltip,
      "v-polyline-decorator": Vue2LeafletPolylineDecorator
    }
};
</script>