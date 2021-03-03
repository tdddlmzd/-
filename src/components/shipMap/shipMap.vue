<style lang="scss">
    .ship-map{
        width: 100%;
        height: 100%;
        /* 以下样式为地图组件内部的修改 */
        .leaflet-popup-content-wrapper{
            border-radius: 4px !important;
        }
        .leaflet-popup-content{
            margin: 0 !important;
        }
        .leaflet-container a.leaflet-popup-close-button{
            display: none !important;
        }
        .leaflet-popup-content-wrapper, .leaflet-popup-tip{
            box-shadow: 0 3px 14px rgba(0,0,0,0) !important;
            background-color: transparent !important;
        }
        .fitmarker_left{
            border-radius: 4px;
            border: solid 1px #282828;
            opacity: 0.7 !important;
            box-shadow: none;
            position: absolute;
            left: 35px;
            top: 5px;
            background: #fff;
            transform: rotate(0deg);
            transform-origin: 0px 0px
        }
        .fitmarker_right{
            border-radius: 4px;
            border: solid 1px #282828;
            opacity: 0.7 !important;
            box-shadow: none;
            position: absolute;
            right: 35px;
            top: 5px;
            background: #fff;
            transform: rotate(0deg);
            transform-origin: 100% 100%
        }
        .marker_icon{
            height: 20px !important;
            line-height:20px !important;
            padding: 0 5px!important;
            font-size: 12px;
            color: #282828;
            overflow: hidden;
            white-space:nowrap;
            font-family: 'SourceHanSansCN' !important;
        }

        /* 以下样式为地图组件内部的修改 */
        .leaflet-tooltip-content-wrapper{
            border-radius: 4px !important;
        }
        .leaflet-tooltip{
            padding: 0 !important;
            border: 0 !important;
        }
        .leaflet-tooltip-top:before{
          border-top-color: #395670 !important;
        }
        .leaflet-tooltip-top{
          margin-top: -15px !important;
        }


        .leaflet-tooltip-left:before{
          border-left-color: #395670 !important;
        }
        .leaflet-tooltip-left{
          margin-left: -15px !important;
        }
        .shipName_tool{
          background: rgba($color: #072c4c, $alpha: .8);
          color: #fff;
          width: 100%;
          height: 100%;
          padding: 5px 10px;
          border-radius: 4px;
        }
    }
</style>
<template >
    <div class="vue-leaflet ship-map" id="ship_map">
        <l-map
          :zoom="zoom"
          :center="center"
          ref="shipMaps"
          id="shipMaps"
          @click="getOpenPopup()"
        >
          <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>

          <!-- 点击某一段出现的轨迹 -->
          <v-polyline-decorator
              :paths="watchWay.latlngs"
              :patterns="patterns1"
              ref="watchWay"
          ></v-polyline-decorator>

          <!-- 两周 一周 自定义轨迹 -->
          <v-polyline-decorator
              :paths="allShip.latlngs"
              :patterns="patterns2"
              ref="allShip"
          ></v-polyline-decorator>

          <!-- 轨迹对比 -->
          <v-polyline-decorator
              :paths="contrastShip.latlngs"
              :patterns="patterns3"
              ref="contrastShip"
          ></v-polyline-decorator>

          <!-- 标记点 与标记信息 -->
          <template v-if="fitMarker.length > 0">
            <l-marker v-for="(item,index) in fitMarker" :key="item.lat + item.lon + index" :lat-lng="[item.lat,item.lon]" :icon="icon.marker" ref="markersRef" @popupclose="openPopup">
                <!-- <l-tooltip ref="ltooltip">
                  <div>{{item.infro}}</div>
                </l-tooltip> -->
                <l-popup :class=" index % 2 == 0 ? 'fitmarker_left' : 'fitmarker_right'">
                  <div class="marker_icon" :style="item.isQihLi ? 'background: #072c4c;color:#fff;opacity: 0.6 !important;' : ''">{{item.infro}}&nbsp;{{item.qiIndex == 1 ? '起航 ' : item.qiIndex == 2 ? '离港 ' : ''}}&nbsp;{{item.ifTime}}</div>
                </l-popup>
            </l-marker>
          </template>

          <!-- 船的位置 -->
            <template>
                <v-rotated-marker v-for="(item,index) in shiplants" :key="item.latLon[0] + item.latLon[1] + index" :lat-lng="item.latLon" :icon="item.isShow ? icon.showShip : icon.hideShip" :ref="'shipMarker' + index" :rotationAngle="item.hdg" @click="clickShip(item)">
                    <l-tooltip ref='shipName_tool' class="shipName_tool" v-if="item.nameEn">
                      <div>{{item.nameEn}}</div>
                    </l-tooltip>              
                </v-rotated-marker>                
            </template>
        </l-map>
    </div>
</template>

<script>
import Vue from "vue"
import axios from "axios"
import {LMap, LTileLayer, LMarker, LPopup, LPolyline, LTooltip} from "vue2-leaflet"
import L from "leaflet"
import { latLng, icon } from "leaflet"
import "leaflet/dist/leaflet.css"
import Vue2LeafletPolylineDecorator from "vue2-leaflet-polylinedecorator"
import Vue2LeafletRotatedMarker from 'vue2-leaflet-rotatedmarker'
import global from '@components/_globals'
import { Icon } from 'element-ui'
import * as d3 from 'd3'

delete L.Icon.Default.prototype._getIconUrl
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
      'shipObject',
      'tenShipData'
    ],
    data() {
      return {
        map: '',
        url: this.mapUrl,
        attribution:'© <a href="http://osm.org/copyright">OpenStreetMap</a> Haut-Gis-Org',
        zoom: 3,
        center: [0, 0],
        mmsi: '', //当前页面船的mmsi
        direction:0,
        watchWay : [], //多段船轨迹
        allShip: [], //自定义或者 周次轨迹
        contrastShip: [], //轨迹对比
        fitMarker: [], //被标记的点坐标和信息
        shiplants: [], //所有船的坐标点
        icon: {
          // 标记点
          marker: icon({
            iconUrl: require("./images/guakao.png"),
            iconSize: [8, 8],
          }),
          //显示船
          showShip: icon({
            iconUrl: require("./images/icon_ship.png"),
            iconSize: [52, 56],
          }),
          //不显示船
          hideShip: icon({
            iconUrl: require("./images/icon_ship.png"),
            iconSize: [0, 0],
          }),
        },
        markerObjects: [],
        patterns1: [
          {
            offset: 12,
            repeat: 100,
            symbol: L.Symbol.arrowHead({
              pixelSize: 5,
              polygon: true,
              pathOptions: {
                stroke: true,
                weight: 3,
                color: "#072c4c"
              }
            })
          },
          {
            offset: 0,
            repeat: 8,
            symbol: L.Symbol.dash({
              pixelSize: 8,
              polygon: true,
              pathOptions: {
                weight: 1.5,
                color: "#072c4c" 
              }
            })
          }
        ],
        patterns2: [
          {
            offset: 12,
            repeat: 100,
            symbol: L.Symbol.arrowHead({
              pixelSize: 5,
              polygon: true,
              pathOptions: {
                stroke: true,
                weight: 3,
                color: "#e60012"
              }
            })
          },
          {
            offset: 0,
            repeat: 8,
            symbol: L.Symbol.dash({
              pixelSize: 8,
              polygon: true,
              pathOptions: {
                weight: 1.5,
                color: "#e60012" 
              }
            })
          }
        ],
        patterns3: [
          {
            offset: 12,
            repeat: 100,
            symbol: L.Symbol.arrowHead({
              pixelSize: 5,
              polygon: true,
              pathOptions: {
                stroke: true,
                weight: 3,
                color: "#17d023"
              }
            })
          },
          {
            offset: 0,
            repeat: 8,
            symbol: L.Symbol.dash({
              pixelSize: 8,
              polygon: true,
              pathOptions: {
                weight: 1.5,
                color: "#17d023" 
              }
            })
          }
        ],
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
            var that = this
            that.mmsi = val.mmsi
            if(val.lat && val.lon){
              that.center = [val.lat / 1000000.0,that.getLon(val.lon / 1000000.0)]
            }else{
              that.center = [0,0]
            }
            setTimeout(()=>{
              if(that.zoom == 6){
                that.zoom = 7
              }else{
                that.zoom = 6
              }
            },300)
          }
        },
        immediate: true
      },
      tenShipData:{
        handler: function(val){
          if(val.length > 0){ //当前船大于 0条
            var that = this
            this.shiplants = []
            for (let i = 0; i < val.length; i++) {
              var infor = val[i].shipObject
               if(infor.mmsi){
                 if(infor.lat && infor.lon){
                  var latLon = [infor.lat / 1000000.0,this.getLon(infor.lon / 1000000.0)]
                  that.shiplants.push({
                      latLon:latLon,
                      hdg: infor.hdg ? infor.hdg / 100 : 0,
                      nameEn: infor.nameEn,
                      mmsi: infor.mmsi,
                      isShow: true
                  })
                 }else{
                   var latLon = [0,this.getLon(0)]
                   that.shiplants.push({
                      latLon:latLon,
                      hdg: infor.hdg ? infor.hdg / 100 : 0,
                      nameEn: infor.nameEn,
                      mmsi: infor.mmsi,
                      isShow: true
                   })
                 }
               }
            }
            //下面的处理的是船的转向
              this.$nextTick(() => {
                for (let j = 0; j < that.shiplants.length; j++) {
                  if (that.$refs.shipMaps) {
                    if(that.shiplants[j].hdg){
                      var s = 'shipMarker' + j
                      that.$refs.shipName_tool[j].mapObject.options.permanent = 'true'
                      that.$refs.shipName_tool[j].mapObject.options.direction = 'top'
                    }
                  }
                }
              }) 
          }else{
            this.shiplants = []
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
              val[j].currentList[0].startPlace = val[j].startPlace ? val[j].startPlace : ''
              val[j].currentList[0].startPlaceTime = val[j].startPlaceTime ? val[j].startPlaceTime : ''
              val[j].currentList[0].isQihLi = true
              val[j].currentList[0].qiIndex = 1
              val[j].currentList[val[j].currentList.length - 1].endPlace = val[j].endPlace ? val[j].endPlace : ''
              val[j].currentList[val[j].currentList.length - 1].endPlaceTime = val[j].endPlaceTime ? val[j].endPlaceTime : ''
              val[j].currentList[val[j].currentList.length - 1].isQihLi = true
              val[j].currentList[val[j].currentList.length - 1].qiIndex = 2
              for (let p = 0; p < val[j].currentList.length; p++) {                
                shipmapList.push((val[j].currentList)[p])
              }
            }
            //处理坐标
            this.latLong('watchWay',shipmapList)
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
            this.latLong('allShip',val)
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
            this.latLong('contrastShip',val)
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
            // 三个数组合并
            var fitBounds = (allShip.concat(contrastShip)).concat(watchWay)

            if(fitBounds.length > 0){
              if (this.$refs.shipMaps !== undefined) {
                this.$refs.shipMaps.fitBounds(fitBounds)
              }
            }
            //标记点 与信息  总共取16个点
            var fitMarker = (val.watchWay.nameInfro.concat(val.contrastShip.nameInfro)).concat(val.allShip.nameInfro)

            // this.fitMarker = fitMarker
            this.fitMarker = this.sliceArry(fitMarker)

            //显示线段

            // 提示框显示
            if (this.$refs.shipMaps !== undefined) {
              this.$nextTick(() => {
                this.getOpenPopup()
                
                //下面是处理显示在页面上船的坐标
                if(this.fitMarker && this.fitMarker.length > 0){ //如果有坐标显示在页面上
                  for (let i = 0; i < this.shiplants.length; i++) {
                    if(this.shiplants[i].mmsi == this.mmsi){
                      var shiplants = JSON.parse(JSON.stringify(this.shiplants[i]))
                      shiplants.isShow = true
                      this.shiplants.splice(i,1,shiplants)
                    }else{
                      var shiplants = JSON.parse(JSON.stringify(this.shiplants[i]))
                      shiplants.isShow = false
                      this.shiplants.splice(i,1,shiplants)
                    }
                  }                
                  
                }else{
                  //页面无轨迹时
                  //当不是点掉轨迹时
                  for (let i = 0; i < this.shiplants.length; i++) {
                      var shiplants = JSON.parse(JSON.stringify(this.shiplants[i]))
                      shiplants.isShow = true
                      this.shiplants.splice(i,1,shiplants)
                  }
                }
              })               
             }
          }else{

          }
        },
        immediate: true,
        deep: true
      },
    },
    methods: {
      //处理传入的数组 进行轨迹坐标整理
      //需要的值 对象名 数组
      latLong(name,val){
        var val = val
        var name = name
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
          return b.posTime > a.posTime ? -1 : 1
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
          if(val.isKaiLi){

          }

          var startPlace = val[i].startPlace ? val[i].startPlace + ' ' : ''
          var endPlace = val[i].endPlace ? val[i].endPlace + ' ' : ''
          var placeTime = val[i].qiIndex == 1 ? val[i].startPlaceTime : val[i].qiIndex == 2 ? val[i].endPlaceTime :  val[i].posTime
          var qiIndex = val[i].qiIndex ? val[i].qiIndex : ''
          var infro = startPlace + endPlace

          var ifTime = (val[i].speed ? '  ' + val[i].speed / 1000 : '0.0') + 'kn' + ' ' + placeTime
          nameInfro.push({
              lat:lat,
              lon:this.getLon(lon),
              infro:infro,
              ifTime:ifTime,
              qiIndex: qiIndex,
              posTime: val[i].posTime ? (new Date(val[i].posTime.replace(/-/g,'/')).getTime()) : '',
              isQihLi:val[i].isQihLi
          })
        }
        this[name].latlngs = this.sliceLine(latlngs)
        // this[name].latlngs = latlngs
        //定一个变量 处理当前是谁的轨迹
        // 1 代表某一段  2代表周次  3代表轨迹对比
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
                ifTime:nameInfro[p].ifTime,
                qiIndex: nameInfro[p].qiIndex,
                marColor: marColor,
                posTime: nameInfro[p].posTime,
                isQihLi: nameInfro[p].isQihLi
              })
          }
        }
        // this[name].nameInfro = this.sliceArry(this[name].nameInfro)
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
      //显示坐标提醒
      getOpenPopup(){
        if(this.$refs.markersRef){
          this.$refs.markersRef.map( (ref,index) => {
            if(ref.mapObject){
              ref.mapObject._popup.options.autoClose = false
              ref.mapObject.openPopup()
            }
          })
        }
      },
      openPopup(event){
        setTimeout(()=>{
          event.target.openPopup()
        },20)
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

          //找出 点击某一段 起始点 目的点
          for (let m = 0; m < newV.length; m++) {
            if(newV[m].isQihLi){
              newLastV.push(newV[m]) //找到显示 启航 离港的点 并在  newV删除
              newV.splice(m,1)
            }
          }

          var newLength = 16 - newLastV.length
          //排序
          newV = newV.sort(function(a, b) {
            return b.posTime > a.posTime ? -1 : 1
          })
          //最后得到的数组 newV 里 筛选出 16个点

          if(newV.length > newLength){
              var tempList = []
              var count = Math.round(newV.length / newLength) + 1
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
            var sfrArry = newLastV.concat(newV)
            if(sfrArry.length > 0){
              sfrArry = sfrArry.sort(function(a, b) {
                return b.posTime > a.posTime ? -1 : 1
              })            
            }
            return sfrArry
          }

          newLastV = newLastV.sort(function(a, b) {
            return b.posTime > a.posTime ? -1 : 1
          })           
          return newLastV
        }else{
          return newLastV
        }
      },
      //清除标记点还有信息
      clearMarker(){
        if(this.watchWay.latlngs && this.allShip.latlngs && this.contrastShip.latlngs && this.watchWay.latlngs.length == 0 &&  this.allShip.latlngs.length == 0 && this.contrastShip.latlngs.length == 0){
          this.fitMarker = []   
        }
      },
      //当点击某个船
      clickShip(val){
        this.$emit('mapInfor',val)
      },
      getProcessTime(fmt, date) {
        let ret
        let opt = {
            "Y+": date.getFullYear().toString(),        // 年
            "m+": (date.getMonth() + 1).toString(),     // 月
            "d+": date.getDate().toString(),            // 日
            "H+": date.getHours().toString(),           // 时
            "M+": date.getMinutes().toString(),         // 分
            "S+": date.getSeconds().toString()          // 秒
            // 有其他格式化字符需求可以继续添加，必须转化成字符串
        };
        for (let k in opt) {
            ret = new RegExp("(" + k + ")").exec(fmt);
            if (ret) {
                fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
            };
        };
        return fmt
      }    
    },
  
    create() {},
    mounted() {},
    components: {
      LMap,
      LTileLayer,
      LMarker,
      LPopup,
      LPolyline,
      LTooltip,
      "v-polyline-decorator": Vue2LeafletPolylineDecorator,
      "v-rotated-marker": Vue2LeafletRotatedMarker
    }
};
</script>