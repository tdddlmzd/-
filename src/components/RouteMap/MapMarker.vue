<template>
  <div class="map-marker">
    <div class="map-marker--inner">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import L from './utils/Leaflet'
import Utils from './utils/Utils'
/**
 * 标记点
 */
export default {
  name: 'MapMarker',
  props: {
    // 地图对象
    map: Object,
    // 坐标
    latlng: {
      type: Array,
      require: true
    },
    // 鼠标经过悬浮显示内容
    label: String,
    transferCoordinate: {
      type: Boolean,
      default: false
    },
    // 图标地址
    iconUrl: String,
    // 图标大小
    iconSize: {
      type: Array,
      default () {
        return [30, 30]
      }
    },
    // 旋转角度
    rotate: {
      type: Number,
      default: 0
    },
    // 图标偏移量
    iconOffset: Array,
    iconClass: String,
    // 是否自动打开popup
    popupAutoOpen: {
      type: Boolean,
      default: false
    },
    // 是否在打开其他popup时关闭当前popup
    popupAutoClose: {
      type: Boolean,
      default: true
    },
    // 提示文字
    tooltip: String,
    // 提示文字是否一直显示
    tooltipAlwaysShow: {
      type: Boolean,
      default: true
    },
    // 提示背景色，可选blue/red
    tooltipBgColor: {
      type: String,
      default () {
        return 'blue'
      }
    }
  },
  data () {
    return {
      guid: Utils.guid(),
      marker: null,
      icon: null,
      popupInstance: null,
      tooltipInstance: null
    }
  },
  watch: {
    map (val) {
      if (val != null) {
        this.drawMarker(this.latlng)
      }
    },
    latlng: {
      handler: function (val) {
        if (val != null && val.length > 0) {
          this.drawMarker(val)
        }
      },
      immediate: true
    },
    iconUrl: {
      handler: function (val) {
        if (val == null) {
          this.icon = null
        } else {
          this.resetIcon()
        }
      },
      immediate: true
    },
    iconSize: {
      handler: function (val) {
        if (this.iconUrl != null) {
          this.resetIcon()
        }
      },
      immediate: true
    },
    rotate: {
      handler: function (val) {
        if (val != null) {
          this.resetIcon()
        }
      },
      immediate: true
    },
    '$slots.default': {
      handler: function (val) {
        if (val != null) {
          this.$nextTick(() => {
            let popupNode = this.$el.querySelector('.map-marker--inner')
            if (popupNode != null) {
              this.popupInstance = L.popup({
                maxWidth: 250,
                autoClose: this.popupAutoClose,
                closeOnClick: false
              }).setContent(this.$el.querySelector('.map-marker--inner'))
            }
          })
        }
      },
      immediate: true
    },
    tooltip: {
      handler: function (val) {
        if (val) {
          if (this.tooltipInstance) {
            this.tooltipInstance.setContent(val)
          } else {
            const tooltip = L.tooltip({
              direction: 'top',
              permanent: this.tooltipAlwaysShow,
              opacity: 1,
              className: 'map-marker-tooltip map-marker-tooltip-' + this.tooltipBgColor
            })
            tooltip.setContent(val)
            this.tooltipInstance = tooltip
          }
        } else if (this.tooltipInstance && this.marker) {
          this.marker.unbindTooltip()
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
        return [latlng[0], latlng[1] < 0 ? 180 * 2 + latlng[1] : latlng[1]]
      }

      return latlng
    },
    /**
     * 在地图显示标记
     * @param marker
     */
    drawMarker (latlng) {
      if (latlng != null && latlng.length > 0) {
        latlng = this.transferLatlng(latlng)
        if (this.marker != null) {
          this.marker.unbindPopup()
          this.marker.unbindTooltip()
          this.marker.remove()
        }
        this.marker = L.marker(latlng, {
          riseOnHover: true,
          title: this.label,
          ...(this.icon == null ? {} : { icon: this.icon })
        }).addTo(this.map)
        if (this.$slots.default != null) {
          this.$nextTick(() => {
            if (this.popupInstance != null) {
              this.marker.bindPopup(this.popupInstance)
              if (this.popupAutoOpen) {
                this.marker.openPopup()
              }
            }
            if (this.tooltipInstance != null) {
              this.marker.bindTooltip(this.tooltipInstance)
            }
          })
        }
        this.marker.on('click', event => {
          this.$emit('click', {
            latlng,
            event
          })
        })
      }
    },
    // 重置图标
    resetIcon () {
      if (this.iconUrl != null) {
        this.icon = L.icon({
          iconUrl: this.iconUrl,
          iconSize: this.iconSize
        })
        this.icon = L.divIcon({
          className: `${this.iconClass == null ? '' : this.iconClass} map-marker-icon`,
          html: `
            <div class="map-marker-icon">
              <img src="${this.iconUrl}" class="map-marker--img" style="transform: rotate(${this.rotate}deg);"/>
            </div>
          `,
          iconSize: this.iconSize
        })
        if (this.marker != null) {
          this.marker.setIcon(this.icon)
        }
      }
    },
    /**
     * 切换popup显示状态
     * @param open
     */
    togglePopup (open) {
      const vm = this
      if (this.marker.getPopup() == null) {
        window.setTimeout(toggle, 300)
      } else {
        toggle()
      }
      function toggle () {
        if (open != null) {
          if (open) {
            if (!vm.marker.isPopupOpen()) {
              vm.marker.openPopup()
            }
          } else {
            vm.marker.closePopup()
          }
        } else {
          vm.marker.togglePopup()
        }
      }
    }
  }
}
</script>

<style scoped>
  .map-marker {
    display: none;
  }
</style>
<style>
  .map-marker--img {
    width: 100%;
    height: 100%;
  }
  .map-marker-tooltip {
    border-radius: 50%;
    font-weight: bold;
  }
  .map-marker-tooltip-blue {
    background-color: #3388ff;
    border-color: #3388ff;
    color: white;
  }
  .map-marker-tooltip-blue::before {
    border-top-color: #3388ff
  }
  .map-marker-tooltip-red {
    background-color: #ea3b4a;
    border-color: #ea3b4a;
    color: white;
  }
  .map-marker-tooltip-red::before {
    border-top-color: #ea3b4a
  }
</style>
