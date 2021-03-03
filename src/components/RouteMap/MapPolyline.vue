<template></template>
<script>
import L from './utils/Leaflet'
import Utils from './utils/Utils'
import 'leaflet.motion/dist/leaflet.motion.min'
/**
 * 折线组件
 */
export default {
  name: 'MapPolyline',
  props: {
    // 地图对象
    map: Object,
    // 坐标点集合
    path: Array,
    // 是否显示箭头
    arrow: {
      type: Boolean,
      default: false
    },
    // 采用对象时字段别名
    option: {
      type: Object
    },
    // 地图是否自动缩放到路径边界
    fit: {
      type: Boolean,
      default: true
    },
    // 是否动态显示路径
    dynamic: {
      type: Boolean,
      default: false
    },
    // 动态显示路径参数
    dynamicOption: Object,
    // 路径颜色
    color: {
      type: String,
      default () {
        return '#0d1167'
      }
    },
    // 线径间隔
    dashArray: {
      type: Number,
      default: 0
    },
    // 是否转换坐标（将负坐标+360）
    transferCoordinate: {
      type: Boolean,
      default: true
    },
    // 图标地址
    iconUrl: {
      type: String,
      default () {
        return require('./image/map_ship.png')
      }
    },
    // 图标大小
    iconSize: {
      type: Array,
      default () {
        return [40, 40]
      }
    },
    // 图标偏移量
    iconOffset: Array
    // 动态路径
    // antPath: {
    //   type: Boolean,
    //   default: false
    // }
  },
  data () {
    return {
      polyline: null,
      oldPath: null
    }
  },
  computed: {
    mapPath () {
      if (this.option != null && this.path != null) {
        return this.path.map(item => [item[this.option.lat], item[this.option.lng]])
      }
      return null
    },
    shipAngle () {
      if (this.mapPath != null && this.mapPath.length > 1) {
        const length = this.mapPath.length
        return Utils.calcCoordinateAngle(this.mapPath[length - 2], this.mapPath[length - 1])
      }
      return 0
    }
  },
  watch: {
    map (val) {
      if (val != null) {
        this.drawPath(this.mapPath)
      }
    },
    path: {
      handler: function (val, old) {
        if (val == null || val.length === 0) {
          this.oldPath = null
          if (this.polyline != null) {
            this.polyline.remove()
          }
        } else if (this.polyline == null) {
          this.drawPath(this.mapPath)
        } else if ((this.oldPath == null || val.length > this.oldPath.length) && this.comparePath(val, this.oldPath)) {
          if (this.oldPath == null) {
            this.oldPath = []
          }
          for (let i = this.oldPath.length; i < val.length; i++) {
            this.polyline.addLatLng(this.transferLatlng(val[i]))
            if (this.dynamic) {
              this.polyline._drawMarker(this.transferLatlng(val[i]))
              // this.polyline.motionResume()
              // this.polyline.motionStart()
            }
          }
          this.oldPath = [...val]
        } else {
          this.drawPath(this.mapPath)
        }
      },
      immediate: true
    }
  },
  methods: {
    /**
     * 转换坐标，将负经度转换为正经度
     * @param {Array} latlng 坐标点
     */
    transferLatlng (latlng) {
      if (this.transferCoordinate) {
        return L.latLng(latlng[0], latlng[1] < 0 ? 180 * 2 + latlng[1] : latlng[1])
      }
      return latlng
    },
    /**
     * 转换路径
     * @param {Array} path 路径
     */
    transferPath (path) {
      if (this.transferCoordinate) {
        return Utils.transferLatlngs(path)
        // return path.map(point => [point[0], point[1] < 0 ? 180 * 2 + point[1] : point[1]])
      }
      return path
    },
    /**
     * 在地图画出路径
     */
    drawPath (pathArray) {
      if (pathArray != null && pathArray.length > 0) {
        let path = this.transferPath(pathArray)
        if (this.polyline != null) {
          this.polyline.remove()
          // this.polyline.setLatLngs(path)
          // this.polyline.redraw()
          // if (this.dynamic) {
          //   // this.polyline.motionResume()
          //   // this.polyline.motionStart()
          // }
        }
        let polyline
        let boundPolyline
        if (this.dynamic) {
          let icon
          if (this.iconUrl != null) {
            icon = L.icon({
              iconUrl: this.iconUrl,
              iconSize: this.iconSize
            })
          }

          polyline = L.motion.polyline(path, {
            color: this.color,
            dashArray: this.dashArray
          }, {
            auto: true,
            duration: 3000
          }, {
            icon: icon
          })

          if (this.fit) {
            boundPolyline = L.polyline(path)
          }

          boundPolyline = polyline
        } else {
          polyline = L.polyline(path, {
            color: this.color,
            dashArray: this.dashArray
          })
          boundPolyline = polyline
        }
        this.polyline = polyline
        polyline.addTo(this.map)
        
        this.oldPath = [...pathArray]
        if (this.fit) {
          this.map.fitBounds(boundPolyline.getBounds())
        }
        if (this.arrow) {
          L.polylineDecorator(path, {
            patterns: [
              {
                offset: '10%',
                endOffset: '10%',
                repeat: 200,
                symbol: L.Symbol.arrowHead({
                  pixelSize: 8,
                  polygon: false,
                  pathOptions: {
                    stroke: true,
                    weight: 2,
                    color: this.color
                  }
                })
              }
            ]
          }).addTo(this.map)
        }
      }
    },
    /**
     * 比较新数组是否包含所有旧数组数据
     * @param newArr
     * @param oldArr
     */
    comparePath (newArr, oldArr) {
      let same = true
      if (newArr == null || newArr.length === 0) {
        same = false
      } else if (oldArr == null || oldArr.length === 0) {
        same = true
      } else {
        for (let i = 0; i < oldArr.length; i++) {
          if (newArr[i][0] !== oldArr[i][0] || newArr[i][1] !== oldArr[i][1]) {
            same = false
            break
          }
        }
      }
      return same
    }
  }
}
</script>

<style scoped>

</style>
