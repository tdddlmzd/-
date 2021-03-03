export default {
    props: {
      width: {
        type: String,
        default: '100%'
      },
      height: {
        type: String,
        default: '100%'
      },
      url: {
          type:String,
          default: 'http://c.tile.openstreetmap.org/{z}/{x}/{y}.png',//'http://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}'
          //default: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png'
      },
      center: {
          type: Array,
      },
      attribution: {
          type: String,
          default: '© <a href="http://osm.org/copyright">OpenStreetMap</a> Haut-Gis-Org',
      },
      zoom: {
        type: Number,
        default: 6
      }
    }
  }
  