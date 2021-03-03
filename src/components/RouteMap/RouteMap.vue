<template>
  <div class="route-map">
    <Map
      :height="height"
      :width="width"
      :zoom="zoom"
      :center="center">
      <template slot-scope="scope">
        <MapPolyline
          v-if="realTimePath != null && realTimePath.length > 0"
          :map="scope.map"
          :path="realTimePath"
          :option="{lat: 'lat', lng: 'lon'}"
          :transfer-coordinate="false"
          :color="alreadyStart ? '#0d1167' : '#c41b05'"
        ></MapPolyline>
        <MapPolyline
          v-if="!alreadyStart && toPolPath != null && toPolPath.length > 0"
          :map="scope.map"
          :path="toPolPath"
          :option="{lat: 'lat', lng: 'lon'}"
          :dash-array="8"
          color="#c41b05"
          arrow
        ></MapPolyline>
        <MapPolyline
          :map="scope.map"
          :path="shipHistoryPath"
          :option="{lat: 'lat', lng: 'lon'}"
          :dash-array="8"
          fit
          arrow
        ></MapPolyline>
        <template v-for="(marker, index) of wharfs">
          <MapMarker
            v-if="(polPort == null || marker.portCode !== polPort.portCode) && (podPort == null || marker.portCode !== podPort.portCode)"
            :key="index"
            :map="scope.map"
            :latlng="[marker.lat, marker.lon]"
            :icon-url="require('./image/circle1.png')"
            :icon-size="[20, 20]"
            :label="marker.portNameCn"
            transfer-coordinate
          >
            <template>
              <div class="title">{{marker.portNameCn == null ? marker.portName : marker.portNameCn}}</div>
              <div v-if="marker.portNameCn != null">{{marker.portName}}</div>
              <div style="margin-top: 8px">
                到港时间：{{marker.eta}}
              </div>
              <div>
                离港时间：{{marker.etd}}
              </div>
            </template>
          </MapMarker>
        </template>
        <MapMarker
          v-if="polPort != null"
          ref="startMarker"
          :map="scope.map"
          :icon-url="require('./image/circle.png')"
          :latlng="[polPort.lat, polPort.lon]"
          :label="'起始港：' + polPort.portNameCn"
          popup-auto-open
          :popup-auto-close="false"
          tooltip="起"
          tooltip-always-show
          transfer-coordinate
        >
          <div class="title">
            {{polPort.portNameCn != null ? polPort.portNameCn : polPort.portName}}
            <span class="tag primary-tag">起始港</span>
          </div>
          <div v-if="polPort.portNameCn != null">{{polPort.portName}}</div>
          <div style="margin-top: 8px">离港时间：{{routeInfo.etd}}</div>
        </MapMarker>
        <MapMarker
          v-if="podPort != null"
          ref="endMarker"
          :map="scope.map"
          :icon-url="require('./image/circle.png')"
          :latlng="[podPort.lat, podPort.lon]"
          :label="'目的港-' + podPort.portNameCn"
          popup-auto-open
          :popup-auto-close="false"
          tooltip="终"
          tooltip-always-show
          tooltip-bg-color="red"
          transfer-coordinate
        >
          <div class="title">
            {{podPort.portNameCn != null ? podPort.portNameCn : podPort.portName}}
            <span class="tag primary-tag">目的港</span>
          </div>
          <div v-if="podPort.portNameCn != null">{{podPort.portName}}</div>
          <div style="margin-top: 8px">到港时间：{{routeInfo.eta}}</div>
        </MapMarker>
        <!-- 当前船位置-->
        <template v-if="currentShip != null && currentShip.detail != null">
          <MapMarker
            ref="shipMarker"
            :map="scope.map"
            :latlng="currentShip.detail.latlng"
            :label="currentShip.shipName"
            :icon-url="require('./image/map_ship.png')"
            :icon-size="[30, 30]"
            icon-class="marker-ship"
            :rotate="currentShip.detail.rotate"
            popup-auto-open
            :popup-auto-close="false"
            transfer-coordinate
          >
            <div class="title">{{currentShip.shipName}}</div>
            <div>航次：{{'--'}}</div>
            <div>状态：{{currentShipStatus ? currentShipStatus : '--'}}</div>
            <div>
              <span>航速：<b>{{(currentShip.detail.sog / 1000 * 3600 / 1000).toFixed(2)}} km/h</b></span>
              <span style="margin-left: 10px;">吃水：<b>{{currentShip.detail.draught != null ? (currentShip.detail.draught / 1000).toFixed(2) : '--'}} m</b></span>
            </div>
            <div></div>
            <div style="margin-top: 8px;">更新：{{currentShip.detail.updateTime}}</div>
          </MapMarker>
        </template>
      </template>
    </Map>
  </div>
</template>

<script>
/**
 * 轨迹地图组件，用于显示轨迹及轨迹信息
 * @author Spark
 */
import MapMixins from './map-mixins'
import api from './api'
import Utils from './utils/Utils'

import Map from './Map.vue'
import MapPolyline from './MapPolyline'
import MapMarker from './MapMarker'
export default {
  name: 'RouteMap',
  mixins: [MapMixins],
  props: {
    // 航线信息
    routeInfo: Object
  },
  data () {
    return {
      // 船舶靠港记录向前偏移时间（月），获取船舶最近靠港记录时会以此时间为界限
      portRecordDateOffset: 5,
      // 码头汇总
      wharfs: [],
      // 到起始港轨迹，未发船的情况下使用
      toPolPath: [],
      // 船舶实时轨迹
      realTimePath: [],
      // 航线中所有船舶信息
      shipsInfo: {
        // shipId: {
        //   // 从船达通获取到的船舶详细信息
        //   detail: {},
        //   // 船舶靠港计划
        //   ports: [],
        //   // 挂港记录
        //   portRecord: [],
        //   // 与航线匹配的历史挂港记录
        //   historyPorts: [],
        //   // 历史航线
        //   historyPoints: []
        // }
      },
      // 船舶状态，船达通获取到的状态列表
      navStatus: ['在航', '锚泊', '失控', '操纵受限', '吃水受限', '靠泊', '搁浅', '从事捕鱼', '靠船帆提供动力']
    }
  },
  computed: {
    // 是否已发船
    alreadyStart () {
      if (this.routeInfo != null) {
        return new Date(this.routeInfo.etd).getTime() <= new Date().getTime()
      }
      return false
    },
    // 始发港
    polPort () {
      if (this.routeInfo != null) {
        for (let port of this.wharfs) {
          if (port.portCode != null && port.portCode.toUpperCase() === this.routeInfo.polCode.toUpperCase()) {
            return port
          }
        }
      }
      return null
    },
    // 目的港
    podPort () {
      if (this.routeInfo != null) {
        for (let port of this.wharfs) {
          if (port.portCode != null && port.portCode.toUpperCase() === this.routeInfo.podCode.toUpperCase()) {
            return port
          }
        }
      }
      return null
    },

  
    ships () {
      const ships = []
      if (this.shipsInfo != null) {
        for (let shipId of Object.keys(this.shipsInfo)) {
          if (this.shipsInfo[shipId].hasOwnProperty('detail')) {
            ships.push(this.shipsInfo[shipId].detail)
          }
        }
      }
      return ships
    },
    // 当前船舶信息
    currentShip () {
      if (this.shipsInfo != null) {
        const keys = Object.keys(this.shipsInfo)
        let currentShip
        if (keys.length === 1) {
          currentShip = Utils.clone(this.shipsInfo[keys[0]])
        } else {
          for (let shipId of keys) {
            let ship = this.shipsInfo[shipId]
            let shipEtd = !Utils.isEmpty(ship.etd) ? ship.etd : ship.ports[0].etd
            let shipEta = !Utils.isEmpty(ship.eta) ? ship.eta : ship.ports[ship.ports.length - 1].eta
            if (shipEtd != null && shipEta != null) {
              const now = new Date()
              if (new Date(shipEtd).getTime() < now.getTime() && new Date(shipEta).getTime() > now.getTime()) {
                currentShip = Utils.clone(this.shipsInfo[shipId])
                break
              }
            }
          }
        }
        if (currentShip != null && currentShip.detail != null) {
          if ((this.realTimePath != null && this.realTimePath.length > 0) ||
              (this.toPolPath != null && this.toPolPath.length > 0)) {
            if (this.alreadyStart && this.realTimePath.length > 1) {
              let lastPoint = this.realTimePath[this.realTimePath.length - 1]
              currentShip.detail.latlng = [lastPoint.lat, lastPoint.lon]
              let latlng1 = [this.realTimePath[this.realTimePath.length - 2].lat, this.realTimePath[this.realTimePath.length - 2].lon]
              let latlng2 = [lastPoint.lat, lastPoint.lon]
              currentShip.detail.rotate = Utils.calcCoordinateAngle(latlng1, latlng2)
            } else if (!this.alreadyStart && this.toPolPath.length > 1) {
              // 获取船舶最新的
              let latlng1 = currentShip.detail.latlng
              let latlng2 = [this.polPort.lat, this.polPort.lon]
              currentShip.detail.rotate = Utils.calcCoordinateAngle(latlng1, latlng2)
            } else {
              currentShip.detail.rotate = 0
            }
          }
          return currentShip
        }
      }
      return null
    },
    // 当前船舶状态
    currentShipStatus () {
      if (this.currentShip != null && this.currentShip.detail != null && this.currentShip.detail.navistat != null) {
        return this.navStatus[this.currentShip.detail.navistat]
      }
      return null
    },
    // 所有船舶历史轨迹汇总
    shipHistoryPath () {
      let path = []
      const keys = Object.keys(this.shipsInfo)
      for (let shipId of keys) {
        let ship = this.shipsInfo[shipId]
        if (ship.hasOwnProperty('historyPoints')) {
          path.push(...ship.historyPoints)
        }
      }
      return path
    }
  },
  watch: {
    routeInfo: {
      handler: function (val) {
        if (val != null) {
          this.getShipInfo()
          
        } else {
          this.wharfs.length = 0
          this.shipsInfo = {}
        }
      },
      immediate: true
    },
    currentShip: {
      handler: function (val, old) {
        
        if (val != null && val.detail && JSON.stringify(val.detail) !== JSON.stringify(old.detail)) {
         
          if (this.alreadyStart) {
            this.getShipRealTimePath(val.mmsi)
          }
        }
      },
      immediate: true
    }
  },
  methods: {
    /**
     * 获取航线中所有船舶的详细信息及轨迹与挂靠港信息
     */
    getShipInfo () {
      if (this.routeInfo != null && this.routeInfo.ships && this.routeInfo.ships.length > 0) {
        const vm = this
        // 航线码头汇总
        const wharfs = []
        for (const ship of this.routeInfo.ships) {
          const shipInfo = { ...ship }
          vm.$set(vm.shipsInfo, ship.shipId, shipInfo)
          // 获取船舶详细信息
          api.getSingleVesselShip(ship.mmsi).then(res => {
            const data = res
            vm.$set(shipInfo, 'detail', {
              ...res,
              updateTime: !Utils.isEmpty(data.lasttime) ? Utils.parseTime(data.lasttime) : null,
              latlng: [data.lat, data.lon]
              // latlng: Utils.transferLatlngs([[data.lat, data.lon]])[0]
            })
            // 记录码头信息
            if (shipInfo.ports) {
              wharfs.push(...ship.ports)
              // 获取船舶最近靠港记录
              vm.getPortByShip(shipInfo.mmsi).then(res => {
                if (res && res.length > 0) {
                  vm.$set(shipInfo, 'portRecord', res)
                  // 与航线靠港码头对比，如果有历史时间，不做处理
                  vm.$set(shipInfo, 'historyPorts', vm.getHistoryPortRecord(shipInfo.ports, res))
                  if (shipInfo.historyPorts != null) {
                    vm.getShipPathByPortRecord(ship.shipId, shipInfo.mmsi, shipInfo.historyPorts)
                  }
                  if (shipInfo.shipId === vm.routeInfo.ships[0].shipId && !vm.alreadyStart) {
                    vm.getToStartPortShipPath(shipInfo.shipId)
                  }
                }
              })
            }
          }).catch(err => {
            console.warn('获取船舶信息失败', err)
          })
        }
        vm.wharfs = wharfs
      }
    },
    /**
     * 获取船舶挂靠记录
     * @param {String} mmsi 船舶ID
     */
    getPortByShip (mmsi) {
      let begin = new Date()
      begin.setMonth(begin.getMonth() - this.portRecordDateOffset)
      return new Promise((resolve, reject) => {
        api.getPortByShip(mmsi, begin).then(res => {
          resolve(res)
        }).catch(err => {
          reject(err)
        })
      })
    },
    /**
     * 丰富靠港计划中历史靠港时间
     * @param {Array} portsPlan
     * @param {Array} portRecord
     */
    getHistoryPortRecord (portsPlan, portRecord) {
      for (let i = 0; i < portsPlan.length - 1; i++) {
        let port = portsPlan[i]
        let nextPort = portsPlan[i + 1]
        // 如果两个港口之间时间不能闭合，则从历史记录中获取两个港口靠港记录时间
        if (Utils.isEmpty(port.lastEtd) || Utils.isEmpty(nextPort.lastEta)) {
          // let historyPorts = []
          outter:
          for (let m = 0; m < portRecord.length; m++) {
            if (this.comparePort(portRecord[m], port)) {
              for (let n = m; n > 0; n--) {
                if (this.comparePort(portRecord[n], nextPort)) {
                  port.lastEtd = portRecord[m].atd !== '' ? portRecord[m].atd : portRecord[m].ata
                  nextPort.lastEta = portRecord[n].ata !== '' ? portRecord[n].ata : portRecord[n].atd
                  break outter
                }
              }
            }
          }
        }
      }
      return portsPlan
    },
    /**
     * 比较港口是否是同一个
     */
    comparePort (historyPort, routePort) {
      if (historyPort != null && routePort != null) {
        // 比较五字码
        if (historyPort.portcode === routePort.portCode) {
          return true
        }
        // 比较英文名
        if (historyPort['portname_en'] && routePort.portName) {
          if (historyPort['portname_en'] === routePort.portName) {
            return true
          } else if (historyPort['portname_en'].split(' ')[0].toLowerCase() === routePort.portName.split(' ')[0].toLowerCase()) {
            return true
          }
        }
      }
      return false
    },
    /**
     * 根据港口记录查询历史轨迹
     */
    getShipPathByPortRecord (shipId, mmsi, portRecord) {
      const vm = this
      const promise = []
      for (let i = 0; i < portRecord.length - 1; i++) {
        const port = portRecord[i]
        const nextPort = portRecord[i + 1]
        const begin = !Utils.isEmpty(port.lastEtd)
          ? port.lastEtd
          : !Utils.isEmpty(port.lastEta)
            ? port.lastEta
            : null
        const end = !Utils.isEmpty(nextPort.lastEta)
          ? nextPort.lastEta
          : !Utils.isEmpty(nextPort.lastEtd)
            ? nextPort.lastEtd
            : null
        if (begin != null && end != null && new Date(begin).getTime() < new Date(end).getTime()) {
          promise.push(vm.getShipPathByDate(shipId, begin, end))
        } else {
          // 如果时间不全，则取港口的坐标
          if ((!Utils.isEmpty(port.lat) && !Utils.isEmpty(port.lon)) ||
            (i === portRecord.length - 2 &&
              !Utils.isEmpty(nextPort.lat) && !Utils.isEmpty(nextPort.lon))) {
            promise.push(new Promise(resolve => {
              let result = [
                {
                  lat: port.lat,
                  lon: port.lon,
                  date: null,
                  utc: null
                }
              ]
              if (i === portRecord.length - 2 &&
                !Utils.isEmpty(nextPort.lat) && !Utils.isEmpty(nextPort.lon)) {
                result.push({
                  lat: nextPort.lat,
                  lon: nextPort.lon,
                  date: null,
                  utc: null
                })
              }
              resolve(result)
            }))
          }
        }
      }
      if (promise.length > 0) {
        Utils.promiseAllSettled(promise).then(res => {
          if (res.length > 0) {
            const shipPath = []
            res.forEach(item => {
              if (item.status === 'fulfilled') {
                shipPath.push(...item.value)
              } else {
                console.error(item.reason)
              }
            })
            if (shipPath.length > 0) {
              vm.$set(vm.shipsInfo[shipId], 'historyPoints', shipPath)
            }
          }
        })
      }
    },
    /**
     * 获取指定时间范围内轨迹
     */
    getShipPathByDate (shipId, begin, end, callback) {
      const data = []
      const event = function (res) {
        if (callback != null) {
          callback(res)
        }
        data.push(...res)
        return data
      }
      return new Promise((resolve, reject) => {
        function _getShipPath (shipId, begin, lastBegin, end, event) {
          api.getShipVesselTrack(shipId, begin, end).then(res => {
            res = res.filter(item => !isNaN(item.lat) && !isNaN(item.lon))
            let data = event(res)
            const endDate = new Date(end)
            if ((lastBegin == null || lastBegin !== begin) && res.length > 0 && new Date(res[res.length - 1].date).getTime() < endDate.getTime()) {
              _getShipPath(shipId, res[res.length - 1].date, begin, end, event)
            } else {
              resolve(data)
            }
          }).catch(err => {
            console.error(err)
            reject(err)
          })
        }
        _getShipPath(shipId, begin, null, end, event)
      })
    },
    /**
     * 获取船舶实时航线
     */
    getShipRealTimePath (shipId, begin, end) {
      if (begin == null) {
        begin = this.routeInfo.etd
      }
      if (end == null) {
        end = this.routeInfo.eta
      }
      this.realTimePath = []
      this.getShipPathByDate(shipId, begin, end).then(res => {
        this.realTimePath = res
      })
    },
    /**
     * 获取船舶到达出发港口历史轨迹
     * @param shipId 船舶ID
     */
    getToStartPortShipPath (shipId) {
      const shipInfo = this.shipsInfo[shipId]
      if (this.routeInfo.polCode != null && shipInfo.portRecord != null) {
        let start = null
        let end = null
        let routePort = {
          portCode: this.routeInfo.polCode,
          portName: this.routeInfo.pol
        }
        const lastPort = shipInfo.portRecord[0]
        for (const port of shipInfo.portRecord) {
          if (end != null) {
            if (port.portcode === lastPort.portcode || port['portname_en'] === lastPort['portname_en']) {
              start = port
              break
            }
          } else if (this.comparePort(port, routePort)) {
            end = port
          }
        }
        if (start != null && end != null) {
          // 最近两个港口轨迹
          this.toPolPath = []
          this.getShipPathByDate(shipId, start.atd, end.ata).then(res => {
            this.toPolPath = res
          })
          // 船舶从上个港口出发后的实际轨迹
          this.realTimePath = []
          this.getShipPathByDate(shipId, lastPort.atd, this.currentShip.detail.updateTime).then(res => {
            this.realTimePath = res
          })
        }
      }
    },
    /**
     * 将整型坐标数据转为小数值，保留6位小数
     * @param num
     */
    formatCoordinate (num) {
      if (num != null) {
        let numStr = num.toString()
        return parseFloat(numStr.substr(0, numStr.length - 6) + '.' + numStr.substr(numStr.length - 6))
      }
      return null
    }
  },
  mounted () {
    this.getShipRealTimePath('311058000', '2020-09-08 00:00:00', '2020-09-23 00:00:00')
  },
  components: {
    Map,
    MapPolyline,
    MapMarker
  }
}
</script>

<style scoped>
  .title {
    font-weight: bold;
    font-size: 15px;
  }
  .tag {
    font-size: 12px;
    border-radius: 5px;
    padding: 1px 5px;
    margin: 3px auto;
    display: inline-block;
  }
  .tag.primary-tag {
    background: #0d1167;
    color: white;
  }
  .route-map >>> .marker-ship::after {
    content: " ";
    display: block;
    position: absolute;
    width: 140%;
    height: 140%;
    background-color: rgba(49, 63, 170, 0.25);
    top: -20%;
    left: -20%;
    border-radius: 50%;
    z-index: -1;
  }
</style>
