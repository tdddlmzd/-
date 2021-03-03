<template>
    <div class="vue-leaflet x-map">
        <!-- <l-map
        v-if="xmapProps"
        style="width: 100%; height: 400px;"
        :zoom="zoom"
        ref="xmapRef"
        :center="center"
        @click="mapClick"
        @update:zoom="zoomUpdated"
        > -->
        <l-map
        v-if="xmapProps"
        style="width: 100%; height: 400px;"
        :zoom="zoom"
        ref="xmapRef"
        :center="center"
        class='xmap'
        >
            <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>

            <l-polyline
                :lat-lngs="execute.latlngs"
                :color="execute.color"
                :weight="2"
                ref="xmapExecutePathsRef"
            ></l-polyline>


            <!-- <v-polyline-decorator :paths="[execute.latlngs]" :patterns="patterns" ref="xmapExecutePathsRef" ></v-polyline-decorator> -->

            <!-- <v-polyline-decorator :paths="[history.latlngs]" :patterns="patterns" ref="xmapHistoryPathsRef" ></v-polyline-decorator> -->

            <template v-if="ships.latlng">
                <l-marker :lat-lng="ships.latlng" :icon="shipIcon" @ready="openPopup">
                <l-popup v-title="ships.name" class="whiteP">
                    <div class="titleHe">{{ships.name}}【{{ships.navistat|shipStatus}}】</div>
                    <!-- <div class="textTop" style="margin-top:6px">航次：{{xmapProps.voyage}}</div> -->
                    <!-- <div class="textTop">状态：<span class="tag primary-tag">{{ships.navistat|shipStatus}}</span></div> -->
                    <div class="textTop">MMSI：{{xmapProps.mmsi}}</div>
                    <!-- <div class="textTop">
                    <span>航速：<b>{{(ships.sog / 1000 * 3600 / 1000).toFixed(2)}} km/h</b></span>
                    <span style="margin-left: 10px;">吃水：<b>{{ships.draught != null ? (ships.draught / 1000).toFixed(2) : '--'}} m</b></span>
                    </div>-->
                    <div></div>
                    <div class="textTop">更新：{{(ships.lasttime * 1000)|formatTimer}}</div>
                    <img src="./images/jian.png" class="images" />
                </l-popup>
                </l-marker>
            </template>

            <l-marker
                v-if="xmapProps.pol.lat"
                :lat-lng="[xmapProps.pol.lat, getLon(xmapProps.pol.lon)]"
                :icon="icon.pol"
                @ready="openPopup"
            >
                <l-popup v-title="xmapProps.pol.name" class="PolPod">
                <div class="polPodHe">
                    {{xmapProps.pol.name}}
                    <span class="tesBox">放X</span>
                </div>
                <!-- <div class="polPodHe">
                        {{xmapProps.pol.name}}
                        <span class="tag primary-tag">起始港</span>
                    </div>
                    <div>{{xmapProps.pol.terminal}}</div>
                <div>离港日期：{{xmapProps.pol.etd}}</div>-->
                </l-popup>
            </l-marker>
            <l-marker
                v-if="xmapProps.pod.lat"
                :lat-lng="[xmapProps.pod.lat, getLon(xmapProps.pod.lon) ]"
                :icon="icon.pod"
                @ready="openPopup"
            >
                <l-popup v-title="xmapProps.pod.name" class="PolPod">
                <div class="polPodHe">
                    {{xmapProps.pod.name}}
                    <span class="tesBox">放X</span>
                </div>
                <!-- <div>
                    {{xmapProps.pod.name}}
                    <span class="tag primary-tag">目的港</span>
                </div>
                <div>{{xmapProps.pod.terminal}}</div>
                <div>到港日期：{{xmapProps.pod.eta}}</div>-->
                </l-popup>
            </l-marker>

            <template v-for="(port, index) in ports">
                <l-marker :lat-lng="[port.lat,getLon(port.lon)]" :icon="icon.other" :key="index">
                    <l-popup v-title="port.portname_en" class="PolPod">
                        <div class="polPodHe">
                            {{port.portname_en}}
                            <span class="tesBox">放X</span>
                        </div>
                        <!-- <div class="title">
                        {{port.portname_en}}
                        <span class="tag primary-tag">挂港-{{index+1}}</span>
                        </div>
                        <div>到港日期：{{port.ata}}</div>
                        <div>离港日期：{{port.atd}}</div>-->
                    </l-popup>
                </l-marker>
            </template>

            <template v-for="(item, index) in transitList">
                <l-marker :lat-lng="[item.lat,getLon(item.lon)]" :icon="icon.zhong" :key="index">
                    <l-popup v-title="item.name" class="PolPod">
                        <div class="polPodHe">
                            {{item.name}}
                            <span class="tesBox">放X</span>
                        </div>
                    </l-popup>
                </l-marker>
            </template>

            <l-control position="bottomleft" >
              <button @click="clickClearLine">
              回退
              </button>
            </l-control>
        </l-map>
    </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import mixins from "./xmap-mixins";
import {
  LMap,
  LTileLayer,
  LMarker,
  LPopup,
  LPolyline,
  LTooltip,
  LControl,
} from "vue2-leaflet";
import L from "leaflet";
import { latLng, icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import Vue2LeafletPolylineDecorator from "vue2-leaflet-polylinedecorator";
import global from '@components/_globals'
import { Icon } from 'element-ui';
import * as d3 from 'd3';

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
// Vue.prototype.$axiosXData = axios.create(axiosOptionsXData);

export default {
  name: "XMap",
  // mixins: [mixins],
  props: {
    xmapProps: Object
  },
  data() {
    return {
      execute: [], //实际路径 历史接口 预计要走的
      history: [], //历史路径 历史接口 已经走过的
      ports: [], //历史挂港 通过船的MMIS号得到船航行的历史挂靠港信息
      //船舶信息
      ships: {
        //船舶信息 通过船的MMSI号得到船的详细信息
      },
      direction: 0, //初始经纬度为 0
      icon: {
        //图标
        focus: icon({
          //船图标
          iconUrl: require("./images/chuan.png"),
          iconSize: [28, 28],
          iconAnchor: [16, 16],
          className: "ship"
        }),
        pol: icon({
          //起始港图标
          iconUrl: require("./images/qishi.png"),
          iconSize: [24, 35],
          iconAnchor: [16, 16]
        }),
        pod: icon({
          //目的港图标
          iconUrl: require("./images/mudi.png"),
          iconSize: [24, 35],
          iconAnchor: [16, 16]
        }),
        zhong: icon({
          //中转港图标
          iconUrl: require("./images/guakao.png"),
          iconSize: [16, 16],
          iconAnchor: [8, 16]
        }),
        other: icon({
          //挂靠港图标
          iconUrl: require("./images/guakao.png"),
          iconSize: [12, 12],
          iconAnchor: [8, 16]
        })
      },
      patterns: [
        {
          offset: 12,
          repeat: 200,
          symbol: L.Symbol.arrowHead({
            pixelSize: 8,
            polygon: true,
            pathOptions: {
              stroke: true,
              weight: 4,
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
            pathOptions: { color: "#072c4c" }
          })
        }
      ],
      width: "100%",
      height: "100%",

      url: this.mapUrl,
      attribution:'© <a href="http://osm.org/copyright">OpenStreetMap</a> Haut-Gis-Org',
      //谷歌地图 域名 .com
      // url: 'http://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}',
      // attribution:'© <a href="http://osm.org/copyright">OpenStreetMap</a> Haut-Gis-Org',

      //谷歌卫星地图
      // url: 'http://mt1.google.cn/vt?lyrs=y&hl=zh-CN&gl=CN&z={z}&x={x}&y={y}',
      // attribution:'© <a href="http://osm.org/copyright">OpenStreetMap</a> Haut-Gis-Org',
      
      //高德地图
      // url: 'https://webrd01.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=7&x={x}&y={y}&z={z}',
      // attribution:'© <a href="http://osm.org/copyright">OpenStreetMap</a> Haut-Gis-Org',

      //智能地图
      // url: 'https://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}',
      // attribution:'© <a href="http://osm.org/copyright">OpenStreetMap</a> Haut-Gis-Org',

      center: [], //地图的中心 地图需要显示的
      mapCenter: [], //重新计算的地图中心 赋值给center
      // url: 'http://c.tile.openstreetmap.org/{z}/{x}/{y}.png',
      // attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      // url: 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
      // accessToken: 'pk.eyJ1Ijoic3BhcmtlZGVuIiwiYSI6ImNrM3pmZDEwNzAwdHQzamxxMzc3cDhvb2gifQ.MUVRQTGS82ZoftEuvYodNQ',
      // attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      zoom: 4,
      qiLat: [], //起始港坐标
      muLat: [], //目的港坐标
      cLat: [], //船的坐标
      transitList:[],
      clickPoints:[],
      markers:[],
    };
  },
  computed: {
    shipIcon: function() {
      return icon({
        iconUrl: require("./images/chuan.png"),
        iconSize: [28, 28],
        iconAnchor: [14, 14],
        className: "ship-direction-" + (this.direction + 1)
      });
    }
  },
  watch: {
    // 监听传入的xmapProps的变化 渲染数据 页面初次进来进渲染
    xmapProps: {
      handler: function(val, old) {
        if (val) {
          for (let i = 0; i < val.transit.length; i++) {
            val.transit[i].lon = this.getLon(val.transit[i].lon)
          }
          this.transitList = val.transit //中转港坐标
          this.qiLat = []; //起始港坐标
          this.muLat = []; //目的港坐标
          this.cLat = []; //船的坐标
          if (val.pol.lat && val.pol.lon) {//起始港坐标
            this.qiLat = [val.pol.lat, this.getLon(val.pol.lon)];
          }
          if (val.pod.lat && val.pod.lon) {//目的港坐标
            this.muLat = [val.pod.lat, this.getLon(val.pod.lon)];
          }
          //以起始港为中心 地图样式 先初始化center的值 监听 mapCenter的变化在重新赋值
          this.center = [val.pol.lat, this.getLon(val.pol.lon)]

          var that = this;
            //有mmsi 通过船的MMSI号得到当前船的详细信息
            //时间 地点 经纬度 坐标。。。。。。。
            if(val.mmsi){
              this.getVesselDetailByMMSI(val.mmsi).then(vesselDetailRes => {
                //船舶信息ships 取返回数组的第一个船的信息
                this.ships = {
                  ...vesselDetailRes.data[0]
                };
                console.log(this.ships,'this.ships')
                //使用传入的经纬度构造LatLng 对象，一对经纬度值代表地球上一个地点。
                this.ships.latlng = latLng(
                  vesselDetailRes.data[0].lat / 1000000.0,
                  vesselDetailRes.data[0].lon / 1000000.0
                );
                //地图需要显示的中心点 如果有  起始港目的港、船的信息、 起始港、 目的港
                if (
                  val.pol !== null &&
                  val.pod !== null &&
                  val.pol.lat &&
                  val.pol.lon &&
                  val.pod.lat &&
                  val.pod.lon
                ) {
                  // console.log("既有起始港坐标 也有目的港坐标");
                  var lat = (val.pol.lat + val.pod.lat) / 2;
                  var lon = (val.pol.lon + val.pod.lon) / 2;
                  that.mapCenter = [lat, lon]
                } else if (
                  vesselDetailRes.data[0].lat &&
                  vesselDetailRes.data[0].lon
                ) {
                  // console.log("我要船为中心");
                  that.mapCenter = [
                    vesselDetailRes.data[0].lat / 1000000.0,
                    vesselDetailRes.data[0].lon / 1000000.0
                  ];
                } else if (val.pol.lat && val.pol.lon) {
                  // 有起始港 坐标
                  // console.log("我要起始港");
                  that.mapCenter = [val.pol.lat, this.getLon(val.pol.lon)]
                } else if (val.pod.lat && val.pod.lon) {
                  // 目的港坐标
                  // console.log("我要目的港");
                  that.mapCenter = [val.pod.lat, this.getLon(val.pod.lon)]
                }
                this.cLat = [
                  vesselDetailRes.data[0].lat / 1000000.0,
                  vesselDetailRes.data[0].lon / 1000000.0
                ];
  
                let sortArr = []; //这个是计算坐标之间的距离
                let fitBounds = []; // 这个放的坐标
  
                //有起始港坐标
                if (this.qiLat.length > 0) {
                  fitBounds.push(this.qiLat);
  
                  //有目的港坐标
                  if (this.muLat.length > 0) {
                    let qi_mu = L.latLng(this.qiLat[0], this.qiLat[1])
                      .distanceTo(L.latLng(this.muLat[0], this.muLat[1]))
                      .toFixed(2);
                    sortArr.push(qi_mu);
                  }
  
                  //有船坐标
                  if (this.cLat.length > 0) {
                    let qi_chuan = L.latLng(this.qiLat[0], this.qiLat[1])
                      .distanceTo(L.latLng(this.cLat[0], this.cLat[1]))
                      .toFixed(2);
                    sortArr.push(qi_chuan);
                  }
                }
  
                //有目的港坐标
                if (this.muLat.length > 0) {
                  fitBounds.push(this.muLat);
  
                  //有船坐标
                  if (this.cLat.length > 0) {
                    let mu_chuan = L.latLng(this.muLat[0], this.muLat[1])
                      .distanceTo(L.latLng(this.cLat[0], this.cLat[1]))
                      .toFixed(2);
                    sortArr.push(mu_chuan);
                  }
                }
  
                if (this.cLat.length > 0) {
                  fitBounds.push(this.cLat)
                }
  
                // 下面的是根据距离匹配zoom
                if (sortArr.length > 0) {
                  let a = sortArr.sort(function(a, b) {
                    return a - b;
                  });
                }
                //方法fitBounds设置包含给定地理范围以及最大缩放级别的地图视图。
                if (fitBounds.length > 0) {
                  this.getFitBounds(fitBounds)
                }
              })
            }
        }
      },
      immediate: true
    },


    //含轨迹点
    // xmapProps: {
    //   handler: function(val, old) {
    //     if (val) {
    //       for (let i = 0; i < val.transit.length; i++) {
    //         val.transit[i].lon = this.getLon(val.transit[i].lon)
    //       }
    //       this.transitList = val.transit //中转港坐标
    //       this.qiLat = []; //起始港坐标
    //       this.muLat = []; //目的港坐标
    //       this.cLat = []; //船的坐标
    //       if (val.pol.lat && val.pol.lon) {//起始港坐标
    //         this.qiLat = [val.pol.lat, this.getLon(val.pol.lon)];
    //       }
    //       if (val.pod.lat && val.pod.lon) {//目的港坐标
    //         this.muLat = [val.pod.lat, this.getLon(val.pod.lon)];
    //       }
    //       //以起始港为中心 地图样式 先初始化center的值 监听 mapCenter的变化在重新赋值
    //       this.center = [val.pol.lat, this.getLon(val.pol.lon)]

    //       var that = this;
    //         //有mmsi 通过船的MMSI号得到当前船的详细信息
    //         //时间 地点 经纬度 坐标。。。。。。。
    //         if(val.mmsi){
    //           this.getVesselDetailByMMSI(val.mmsi).then(vesselDetailRes => {
    //             //船舶信息ships 取返回数组的第一个船的信息
    //             this.ships = {
    //               ...vesselDetailRes.data[0]
    //             };
    //             console.log(this.ships,'this.ships')
    //             //使用传入的经纬度构造LatLng 对象，一对经纬度值代表地球上一个地点。
    //             this.ships.latlng = latLng(
    //               vesselDetailRes.data[0].lat / 1000000.0,
    //               vesselDetailRes.data[0].lon / 1000000.0
    //             );
    //             //地图需要显示的中心点 如果有  起始港目的港、船的信息、 起始港、 目的港
    //             if (
    //               val.pol !== null &&
    //               val.pod !== null &&
    //               val.pol.lat &&
    //               val.pol.lon &&
    //               val.pod.lat &&
    //               val.pod.lon
    //             ) {
    //               // console.log("既有起始港坐标 也有目的港坐标");
    //               var lat = (val.pol.lat + val.pod.lat) / 2;
    //               var lon = (val.pol.lon + val.pod.lon) / 2;
    //               that.mapCenter = [lat, lon]
    //             } else if (
    //               vesselDetailRes.data[0].lat &&
    //               vesselDetailRes.data[0].lon
    //             ) {
    //               // console.log("我要船为中心");
    //               that.mapCenter = [
    //                 vesselDetailRes.data[0].lat / 1000000.0,
    //                 vesselDetailRes.data[0].lon / 1000000.0
    //               ];
    //             } else if (val.pol.lat && val.pol.lon) {
    //               // 有起始港 坐标
    //               // console.log("我要起始港");
    //               that.mapCenter = [val.pol.lat, this.getLon(val.pol.lon)]
    //             } else if (val.pod.lat && val.pod.lon) {
    //               // 目的港坐标
    //               // console.log("我要目的港");
    //               that.mapCenter = [val.pod.lat, this.getLon(val.pod.lon)]
    //             }
    //             this.cLat = [
    //               vesselDetailRes.data[0].lat / 1000000.0,
    //               vesselDetailRes.data[0].lon / 1000000.0
    //             ];
  
    //             let sortArr = []; //这个是计算坐标之间的距离
    //             let fitBounds = []; // 这个放的坐标
  
    //             //有起始港坐标
    //             if (this.qiLat.length > 0) {
    //               fitBounds.push(this.qiLat);
  
    //               //有目的港坐标
    //               if (this.muLat.length > 0) {
    //                 let qi_mu = L.latLng(this.qiLat[0], this.qiLat[1])
    //                   .distanceTo(L.latLng(this.muLat[0], this.muLat[1]))
    //                   .toFixed(2);
    //                 sortArr.push(qi_mu);
    //               }
  
    //               //有船坐标
    //               if (this.cLat.length > 0) {
    //                 let qi_chuan = L.latLng(this.qiLat[0], this.qiLat[1])
    //                   .distanceTo(L.latLng(this.cLat[0], this.cLat[1]))
    //                   .toFixed(2);
    //                 sortArr.push(qi_chuan);
    //               }
    //             }
  
    //             //有目的港坐标
    //             if (this.muLat.length > 0) {
    //               fitBounds.push(this.muLat);
  
    //               //有船坐标
    //               if (this.cLat.length > 0) {
    //                 let mu_chuan = L.latLng(this.muLat[0], this.muLat[1])
    //                   .distanceTo(L.latLng(this.cLat[0], this.cLat[1]))
    //                   .toFixed(2);
    //                 sortArr.push(mu_chuan);
    //               }
    //             }
  
    //             if (this.cLat.length > 0) {
    //               fitBounds.push(this.cLat)
    //             }
  
    //             // 下面的是根据距离匹配zoom
    //             if (sortArr.length > 0) {
    //               let a = sortArr.sort(function(a, b) {
    //                 return a - b;
    //               });
    //             }
    //             //方法fitBounds设置包含给定地理范围以及最大缩放级别的地图视图。
    //             if (fitBounds.length > 0) {
    //               this.getFitBounds(fitBounds)
    //             }
    //           });
    //           //得到挂港列表和往返一次同一港口的周期
    //           //通过船的MMIS号得到船航行的历史挂靠港信息
    //           //portsRes是处理完之后最后得到的数据
    //           this.getPorts(val.mmsi, val.pol).then(portsRes => {
    //             //得到并更新历史跟踪路径
    //             this.getTracePaths(val.mmsi,val.polTime,val.podTime,val.during,val.isEntre).then(pathsRes => {
    //               console.log(pathsRes,'pathsRespathsRes')
    //               this.history = {
    //                 latlngs: [],
    //                 color: "#072c4c"
    //               };
    //               this.execute = {
    //                 latlngs: [],
    //                 color: "#072c4c"
    //               };
  
    //               //下面是处理 history 点的轨迹
    //               let h = [];
    //               for (var point in pathsRes.history) {
    //                 let lon = pathsRes.history[point].lon / 1000000.0;
    //                 let lat = pathsRes.history[point].lat / 1000000.0;
    //                 //判断是否反方向环绕地球航线
    //                 if (this.direction == 0) {
    //                   let hlimit =
    //                     point >= 1 &&
    //                     Math.abs(
    //                       pathsRes.history[point - 1].lon / 1000000.0 -
    //                         pathsRes.history[point].lon / 1000000.0
    //                     ) > 180;
    //                   if (hlimit) {
    //                     console.log("历史非连续点[" + point + "]");
    //                     this.direction = lon < 0 ? 1 : -1;
    //                   }
    //                 }
    //                 h.push([lat, this.getLon(lon)]);
    //               }
    //               this["history"].latlngs = this.sliceLine(h);
  
    //               // console.log("转换后的历史点：START")
    //               // console.log(h)
    //               // console.log("转换后的历史点：END")
  
    //               //下面是处理 execute 点的轨迹
    //               let h2 = [];
    //               console.log(pathsRes.execute,'pathsRes.executepathsRes.execute');
  
    //               for (var point in pathsRes.execute) {
    //                 let lon = pathsRes.execute[point].lon / 1000000.0;
    //                 let lat = pathsRes.execute[point].lat / 1000000.0;
    //                 //判断是否反方向环绕地球航线
    //                 if (this.direction == 0) {
    //                   let limit =
    //                     point >= 1 &&
    //                     Math.abs(
    //                       pathsRes.execute[point - 1].lon / 1000000.0 -
    //                         pathsRes.execute[point].lon / 1000000.0
    //                     ) > 180;
    //                   if (limit) {
    //                     // console.log("非连续点["+point+"]")
    //                     this.direction = lon < 0 ? 1 : -1;
    //                     // console.log(this.direction == 1 ? "正->负": "负->正")
    //                   }
    //                 }
  
    //                 // let latlon = [lat,this.getLon(lon)]
    //                 //console.log(this.direction)
    //                 // console.log( lon +"转换为"+latlon[1])
    //                 h2.push([lat, this.getLon(lon)]);
    //               }
  
    //               // console.log("转换后的点：START")
    //               // console.log(h2)
    //               // console.log("转换后的点：END")
  
    //               this["execute"].latlngs = this.sliceLine(h2);
    //               console.log(this["execute"].latlngs,'this["execute"].latlngs')
    //               if (pathsRes.history.length + pathsRes.execute.length == 0) {
    //                 //this.history.latlngs.push([val.pol.lat, val.pol.lon])
    //                 //this.history.latlngs.push([val.pod.lat, val.pod.lon])
    //               }
    //               console.log(portsRes,'portsRes')
    //               this.ports = portsRes.ports;
    //               this.ships.latlng = latLng(
    //                 this.ships.lat / 1000000.0,
    //                 this.getLon(this.ships.lon / 1000000.0)
    //               );
    //               //this.$refs.xmapRef.fitBounds(L.polyline(this.history).getBounds())
    //             });
    //           });
    //         }
    //     }
    //   },
    //   immediate: true
    // },
    mapCenter: {
      handler: function(val) {
        if (val.length > 0) {
          setTimeout(() => {
            this.center = val;
          }, 100);
        }
      },
      immediate: true
    }
  },
  methods: {
    //通过船名得到船的MMSI号（如果多个取一个）
    getMMSIByVesselName(kw) {
      return new Promise((resolve, reject) => {
        this.$axios
          .get("/queryShip", {
            headers: axiosOptionsXData.headers,
            params: {
              kw: kw,
              max: 3
            }
          })
          .then(res => {
            if (res.data && res.data.status == 0) {
              resolve(res.data);
            } else {
              reject(res.data);
            }
          })
          .catch(err => {
            reject(err);
          });
      });
    },
    //通过船的MMSI号得到船的详细信息
    getVesselDetailByMMSI(mmsi) {
      return new Promise((resolve, reject) => {
        this.$axios
          .get("/getSingleVesselShip", {
            headers: axiosOptionsXData.headers,
            params: {
              id: mmsi
            }
          })
          .then(res => {
            if (res.data && res.data.status == 0) {
              resolve(res.data);
            } else {
              reject(res.data);
            }
          })
          .catch(err => {
            reject(err);
          });
      });
    },
    //通过船的MMIS号得到船航行的历史路径
    getTracePaths(mmsi, polTime, podTime,during,isEntre) {
      //mmsi  起始港时间  目的港时间  60天  是否中转 
      return new Promise((resolve, reject) => {
        var etd //起始港时间
        var eta //目的港时间时间
        // 时间取值规则
        // 当前时间小于起始港ETD是，路径为（当前时间-2天） 到当前时间的路径。
        // 当前时间在起始港ETD和目的港ETA间，路径为起始港ETD到当前时间。
        // 当前时间大于目的港ETA，路径为起始港MIN（ETD，当前时间-60）到目的港ETA；不显示船。
        // 目的港ETA在当前时间前60天路径信息；不显示船。
        let promises = [];
        let now = new Date().getTime();
        //每个周期时间差
        // //根据当前时间得到开始，中间，结束
        // let end = now - etd > 0 ? now : (now - eta < 0 ? now - 0 : etd);
        // let mid =  now - etd > 0 ? etd : (now - eta  < 0 ? (eta - 0 - during): eta);
        // let start =  now - etd > 0 ? eta : (now - eta < 0 ? (eta - 0 - 2 * during): (eta - during));
        

        if(isEntre == '0'){ //直达
          //有起始港时间
          if(polTime){ //起始港时间
            etd = polTime
            eta = podTime ? podTime : (polTime + during)
          }else{
            // if(podTime){ //有目的港时间 无起始港时间
            //   etd = podTime - during
            //   eta = podTime
            // }
            return
          }
        }else{ //代表中转
          if(polTime){ //起始港时间
            etd = polTime
            eta = polTime + during
          }else{
            return
          }
        }

        //比较当前时间-60 和 etd哪个时间小
        let a = new Date().getTime() - 30 * 1000 * 3600 * 24; //当前时间-30
        let minEtd = a - etd > 0 ? etd : etd;
        //根据当前时间得到开始，中间，结束
        let mid, start, end;
        mid = start = now - eta > 0 ? minEtd : now - etd < 0 ? (now - (2 * 1000 * 3600 * 24)) : etd;
        end = now - eta > 0 ? eta : now - etd < 0 ? now : now;

        //判断是否要显示船 当前时间大于目的港不显示船
        console.log(start + "->" + mid + "->" + end);
        let days = Math.round((end - start) / (1000 * 3600 * 24));

        console.log(days);

        //每次取两天的数据避免接口返回（continue == 1）
        for (var i = 0; i < days; i = i + 2) {
          var p = Math.round(end / 1000) - 3600 * 24 * (i + 2)
          if( i + 2 > days){
            p = start ? (start / 1000) : (Math.round(end / 1000) - 3600 * 24 * (i + 2))
          }
          promises.push(
            this.$axios.get("/getShipVesselTrack", {
              headers: axiosOptionsXData.headers,
              params: {
                id: mmsi,
                btm: p,
                etm: Math.round(end / 1000) - 3600 * 24 * i
              }
            })
          );
        }
        Promise.all(promises)
          .then(res => {
            if (res && res[0] && res[0].data.status == 0) {
              //处理历史轨迹
              let all = [];
              //每两天取4个样点
              for (let r in res) {
                if (res[r].data.points) {
                  // console.log(r);
                  // console.log(res[r].data.points);

                  // for(let p in res[r].data.points){
                  //     all.push(res[r].data.points[p]);
                  // }

                  // all = res[r].data.points
                  all.push(res[r].data.points[0]);
                  all.push(
                    res[r].data.points[
                      Math.round(res[r].data.points.length / 4)
                    ]
                  );
                  if(res[r].data.points.length > 1){ //数组如果只有一个 按照算法 数组[1]就是undefined
                    all.push(
                      res[r].data.points[
                        Math.round(res[r].data.points.length / 2)
                      ]
                    )
                  }
                  all.push(res[r].data.points[res[r].data.points.length - 1]);
                }
              }

              //排序所有样点
              all = all.sort((p, c) => {
                return p.utc - c.utc;
              });

              //按中间时间分割样点为历史路径和执行路径
              resolve({
                history: all.slice(0,Math.round((mid - start) / (1000 * 3600 * 24)) * 2),
                execute: all.slice(Math.round((mid - start) / (1000 * 3600 * 24)) * 2,all.length)
              });
            } else {
              //无任何历史轨迹数据
              resolve({
                history: [],
                execute: []
              });
            }
          })
          .catch(err => {
            reject(err);
          });
      });
    },
    //通过船的MMIS号得到船航行的历史挂靠港信息
    getPorts(mmsi, pol) {
      //默认历史数据的开始时间为30天前
      return new Promise((resolve, reject) => {
        this.$axios
          .get("/getPortOfCallByShip", {
            headers: axiosOptionsXData.headers,
            params: {
                mmsi: mmsi,
                begin: Math.round(new Date() / 1000) - 3600 * 24 * 0,
                end: Math.round(new Date() / 1000)
            }
          })
          .then(res => {
            let result = [];
            if (res.data) {
              if (res.data.status == 0) {
                //排序
                let all = res.data.records.sort((p, c) => {
                  return p.ata - c.ata;
                });
                //排重
                let hash = {};
                let days = 0;

                all.forEach(r => {
                  if (!hash[r.portname_en]) {
                    hash[r.portname_en] = r;
                  } else {
                    //两次经过同一港口的间隔天数
                    if (days == 0 && r.countrycode == "CN") {
                      days = Math.round(
                        (new Date(hash[r.portname_en].ata) - new Date(r.atd)) /
                          (1000 * 3600 * 24)
                      );
                    }
                    console.log(days);
                  }
                });
                //取经纬度
                Object.keys(hash).map(p => {
                  if (hash[p].portcode) {
                    this.$axios
                      .get("/getPortLocation", {
                        headers: axiosOptionsXData.headers,
                        params: {
                          portCode: hash[p].portcode.toLowerCase()
                        }
                      })
                      .then(c => {
                        if (c.data.content && c.data.content.LON) {
                          hash[p].lon = c.data.content.LON;
                          hash[p].lat = c.data.content.LAT;
                          //取到经纬度的挂港返回
                          result.push(hash[p]);
                        }
                      });
                  }
                });
                resolve({ ports: result, during: days });
              } else {
                resolve({ ports: result, during: 0 });
              }
            } else {
              reject({ ports: result, during: 0 });
            }
          })
          .catch(err => {
            reject(err);
          });
      });

      return [];
    },
    getLon(lon) {
      if (Math.abs(this.direction + lon) < Math.abs(lon)) {
        return this.direction > 0 ? 360 + lon : -360 + lon;
      } else {
        // console.log(lon)
      }
      return lon;
    },
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
    openPopup(target) {
      target.openPopup();
    },
    polyLineReady(target) {},
    getAnchor(point1, point2) {
      return Math.round(
        Math.atan((point2.lat - point1.lat) / (point2.lon - point1.lon))
      );
    },

    getFitBounds(fitBounds) {
      if (this.$refs.xmapRef !== undefined) {
        if(fitBounds.length > 1){
          this.$refs.xmapRef.fitBounds(fitBounds)
        }
      }
      
    },

    mapClick(e){

      var Icon = L.divIcon({ 
				  className: 'click-icon',
          iconSize: [6, 6],
          html: "<p style=\"color:blue\">lat:"+e.latlng.lat.toFixed(7)+"</p><p p style=\"color:blue\">lng:"+e.latlng.lng.toFixed(7)+"</p>"
        })
      
      var m = L.marker([e.latlng.lat,e.latlng.lng],{icon:Icon})
      m.addTo(e.target)
      this.markers.push(m);

      this.clickPoints.push([e.latlng.lat,e.latlng.lng])
      console.log(this.clickPoints)

      this.zoomUpdated(e)
     
    }, 
    zoomUpdated(e){

      d3.select(".leaflet-zoom-animated g path").remove()

      if(this.clickPoints.length > 1){
        var points = []
        for(var p in this.clickPoints){
          points.push(this.$refs.xmapRef.mapObject.latLngToLayerPoint(this.clickPoints[p]))
        }
        var lineFunc = d3.line()
          .x(function(d){ return d.x})
          .y(function(d){ return d.y})
          .curve(d3.curveBasis)
        d3.select(".leaflet-zoom-animated g").append("path").attr("d",lineFunc(points)).attr("stroke", "red").attr("fill", "none").attr("stroke-width", "2");

      } 
    },

    clickClearLine(e){
      
      if(this.markers.length > 0){
        this.$refs.xmapRef.mapObject.removeLayer(this.markers.pop());
      } 
      if(this.clickPoints.length > 0){
        this.clickPoints.pop();
        this.zoomUpdated(e);
      }
      
    },
    clickSaveLine(){

      if(this.clickPoints > 1){
        alert(this.clickPoints)
      }
      else{
        alert("line is null")
      }

    },
  },
 
  create() {
    
  },
  mounted() {

   

  },
  filters: {
    formatTimer: function(value) {
      let date = new Date(value);
      let y = date.getFullYear();
      let MM = date.getMonth() + 1;
      MM = MM < 10 ? "0" + MM : MM;
      let d = date.getDate();
      d = d < 10 ? "0" + d : d;
      let h = date.getHours();
      h = h < 10 ? "0" + h : h;
      let m = date.getMinutes();
      m = m < 10 ? "0" + m : m;
      let s = date.getSeconds();
      s = s < 10 ? "0" + s : s;
      return y + "-" + MM + "-" + d + " " + h + ":" + m;
    },
    shipStatus: function(value) {
      let status = [
        "在航",
        "锚泊",
        "失控",
        "操作受限",
        "吃水受限",
        "靠泊",
        "搁浅",
        "捕鱼",
        "船帆动力",
        "保留",
        "保留",
        "保留",
        "保留",
        "保留",
        "AIS-SART",
        "未定义"
      ];
      return status[value];
    }
  },
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    LPolyline,
    LTooltip,
    LControl,
    "v-polyline-decorator": Vue2LeafletPolylineDecorator
  }
};
</script>
<style src="./xmap.css"></style>