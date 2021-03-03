<template>
  <div class="map">
    <div class="map--inner"
         :id="id"
         :style="{
            height: height,
            width: width
         }"></div>
    <slot :map="map"></slot>
  </div>
</template>

<script>
/**
 * 地图组件
 * @author Spark
 */
import L from './utils/Leaflet'
import MapMixins from './map-mixins'

import Utils from './utils/Utils'
export default {
  name: 'Map',
  mixins: [MapMixins],
  props: {
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '500px'
    },
    // 默认地图中心点，为空时默认为全球
    center: Array,
    // 默认缩放等级（1-18），如果有路径时，将会自动缩放
    zoom: {
      type: Number,
      default: 10
    }
  },
  data () {
    return {
      mapbox: {
        url: 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
        accessToken: 'pk.eyJ1Ijoic3BhcmtlZGVuIiwiYSI6ImNrM3pmZDEwNzAwdHQzamxxMzc3cDhvb2gifQ.MUVRQTGS82ZoftEuvYodNQ'
      },
      osm: {
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      },
      map: null
    }
  },
  computed: {
    id () {
      return 'map-' + Utils.guid()
    }
  },
  methods: {
    initMap () {
      this.map = L.map(this.id)
      let osm = new L.TileLayer(this.osm.url, {
        minZoom: 2,
        maxZoom: 16,
        zoomControl: true
      }).addTo(this.map)
      this.map.addLayer(osm)

      // L.tileLayer(this.mapbox.url, {
      //   // attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      //   maxZoom: 18,
      //   id: 'mapbox/streets-v11',
      //   zoomControl: true,
      //   accessToken: this.mapbox.accessToken
      // }).addTo(this.map)
      if (this.center) {
        this.map.setView(this.center, this.zoom)
      } else {
        this.map.fitWorld()
      }
    }
  },
  mounted () {
    this.initMap()
  }
}
</script>

<style scoped>
  .map {
    /*width: 100%;*/
    /*hei*/
  }
  .map--inner {
    width: 100%;
    height: 100%;
  }
</style>
