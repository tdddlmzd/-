<style lang="scss">
.road_map {
  width: 100%;
  height: 100%;
}
#container {
  width: 100%;
  height: 100%;
}

// 高德地图 本身样式
.amap-info-content{
  padding: 0 !important;
  overflow: hidden;
  border-radius: 6px;
}
.amap-info-close{
  color: #ffffff !important;
  top: 10px !important;
  right: 10px !important;
}
.top-center .amap-info-sharp{
  border-bottom: 8px solid #38566f;
}
.dituTan{
  width: 324px;
	min-height: 139px;
  .ditu_title{
    width: 100%;
    height: 34px;
    line-height: 34px;
    background: rgba(7,44, 76, .8);
    padding-left: 10px;
    color: #ffffff;
  }
  .ditu_main{
    padding: 10px 10px;
    .ditu_li{
      width: 100%;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      p{
          width: 147px;
          line-height: 20px;
          margin-bottom: 2px;
          font-size: 12px;
          color: #282828;
        &.p1{
          margin-right: 10px;
          overflow: hidden; 
          text-overflow:ellipsis;
          white-space:nowrap;
        }
        &.p2{
          overflow: hidden; 
          text-overflow:ellipsis;
          white-space:nowrap;
        }
        &.p3{
          width: 100%;
        }
      }
    }
  }
}
</style>
<template>
  <!-- 航线页面 -->
  <div class="road_map">
    <div id="container"></div>
  </div>
</template>

<script>
import { Handler } from "leaflet";
export default {
  props: [
    "vehicleList"
  ],
  data() {
    return {
      map: "", //地图
      //图标
      icon: {
        che: new AMap.Icon({
          type: 'image',
          image: require("./images/chel.png"),
          size: [49, 50],
          anchor: 'center',
        }),
        startChe: new AMap.Icon({
          type: 'image',
          image: require("./images/road_q.png"),
          size: [24, 35],
          anchor: 'center',
        }),
        endChe: new AMap.Icon({
          type: 'image',
          image: require("./images/road_z.png"),
          size: [24, 35],
          anchor: 'center',
        }),
      },
    };
  },
  watch: {
    //集卡信息
    vehicleList: {
      handler: function (val) {
        var that = this
        //每次都初始化地图 这个时候 this.map就是新的地图
        that.initMap()
        if(val && val.length > 0){
          var vehicleInfor = val[0]

          //轨迹调取
          that.getDraw(vehicleInfor.track24s)
          if(vehicleInfor && vehicleInfor.positionInfo){
            vehicleInfor.positionInfo.truckNo = vehicleInfor.truckNo
            vehicleInfor.positionInfo['updatime'] = vehicleInfor.positionInfo.utc ? that.getProcessTime("YY-mm-dd HH:MM:SS",new Date(vehicleInfor.positionInfo.utc - 0)) : ''
          }
          that.getMarker(vehicleInfor.mileageMsg,vehicleInfor.positionInfo)
        }
      },
      immediate: true,
      deep: true
    },
  },
  methods: {
    //初始话地图
    initMap(){
      // map 建立地图容器  (级别 中心)
      let map = new AMap.Map("container", {
        zoom: 10,
        center: [116.469881, 39.993599],
        showIndoorMap: false, //隐藏地图自带的室内地图图层
        resizeEnable: true,
      });
      this.map = map
    },
    //调取轨迹
    getDraw(track24s){
      var polylineList = []
      for (let i = 0; i < track24s.length; i++) {
        polylineList.push([track24s[i].lon,track24s[i].lat])
      }
      //polyline画线 折线
      var polyline = new AMap.Polyline({
        path: polylineList,
        strokeColor: "#0BE612",
        strokeOpacity: 1,
        strokeWeight: 4,
        strokeStyle: "solid",
        strokeDasharray: [10, 5],
        geodesic: true,
      })
      polyline.setMap(this.map)
      //自适应所有的点 让点显示在可视区域内
      var overlaysList = this.map.getAllOverlays("polyline")
      this.map.setFitView(overlaysList)
    },

    //处理标记点
    getMarker(mileageMsg,positionInfo){
      var that = this
      var marker = []
      // mileageMsg qishi mudid 信息

      //起始地
      if(mileageMsg && mileageMsg.startLat && mileageMsg.startLon){
        var shiMarStart = new AMap.Marker({
            position: [mileageMsg.startLon, mileageMsg.startLat],
            icon: this.icon.startChe,
        })
        marker.push(shiMarStart)
      }
      //目的地
      if(mileageMsg && mileageMsg.endLat && mileageMsg.endLon){
        var shiMarEnd = new AMap.Marker({
            position: [mileageMsg.endLon, mileageMsg.endLat],
            icon: this.icon.endChe,
        })
        marker.push(shiMarEnd)
      }
      
      // positionInfo 车的位置信息
      if(positionInfo && positionInfo.lat && positionInfo.lon){
        var shiMarChe = new AMap.Marker({
            position: [positionInfo.lon, positionInfo.lat],
            icon: this.icon.che,
            angle:positionInfo.drc ? positionInfo.drc : 0,
            offset: new AMap.Pixel(-24,-25), //设置偏移量
        })
        // this.map.setCenter([positionInfo.lon, positionInfo.lat])
        //绑定点击事件
        shiMarChe.on('click',positionResult => {
          that.openInfo(positionResult,positionInfo)
        });        
        marker.push(shiMarChe)
      }
      this.map.add(marker)
    },
    //打开marker消息窗体
    openInfo(positionResult,positionInfo) {
      var content = `<div class='dituTan'>
                        <div class='ditu_title'>
                          <div class='ti_tit'>${positionInfo.truckNo}</div>
                        </div>
                        <ul class='ditu_main'>
                          <li class='ditu_li'>
                            <p class='p1'>当前车速：${positionInfo.spd ? positionInfo.spd + 'km/h' : ''}</p>
                            <p class='p2'>行驶方向：${positionInfo.drcMsg ? positionInfo.drcMsg : ''}</p>
                          </li>
                          <li class='ditu_li'>
                            <p class='p3'>当前位置：${positionInfo.adr}</p>
                          </li>
                          <li class='ditu_li'>
                            <p class='p3'>更新：${positionInfo.updatime}</p>
                          </li>
                        </ul>
                      </div>`
      var infoWindow = new AMap.InfoWindow({
        anchor: 'bottom-center',
        content: content,
      })
      infoWindow.open(this.map, [positionInfo.lon,positionInfo.lat])
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
  mounted() {
    this.initMap()
  },
};
</script>