/**
 * Leaflet预处理
 */
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-polylinedecorator'
// import 'leaflet.motion'
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [18, 30],
  shadowSize: [33, 33],
  iconAnchor: [8, 30],
  popupAnchor: [1, -30]
})
L.Marker.prototype.options.icon = DefaultIcon
export default L
