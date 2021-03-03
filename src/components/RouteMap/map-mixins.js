export default {
  props: {
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '800px'
    },
    // 默认地图中心点，为空时默认为全球
    center: Array,
    // 默认缩放等级（1-18），如果有路径时，将会自动缩放
    zoom: {
      type: Number,
      default: 10
    }
  }
}
