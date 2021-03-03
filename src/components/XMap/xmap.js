import Vue from 'vue'
import axios from 'axios'
import mixins from './xmap-mixins'
import { LMap, LTileLayer, LMarker, LPopup, LPolyline, LTooltip } from 'vue2-leaflet'
import L from 'leaflet'
import { latLng, icon } from "leaflet";
import 'leaflet/dist/leaflet.css';
import Vue2LeafletPolylineDecorator from 'vue2-leaflet-polylinedecorator'



delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});


const axiosOptions = {
    baseURL: 'https://api.shipdt.com/DataApiServer/apicall',
    key: 'bb5bfb4d105646dd8b84589ae8e08455', //这个貌似是船的信息 定死的 请求接口时 K的参数
    timeout: 60000
}

const axiosOptionsXData = {

    baseURL : "http://api.Ijingzhun.com/schedules",
    //baseURL: 'http://192.168.0.120:9000/schedules',

    headers: {
        'Authorization': Vue.prototype.getToken(),
        //"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJqaW5nemh1biIsInNjb3BlIjpbInJlYWQiLCJ3cml0ZSJdLCJyb2xlcyI6W3siaWQiOjAsInJvbGVDb2RlIjoiREVWRUxPUCIsInJvbGVOYW1lIjoi5byA5Y-RIiwiZnVuY3Rpb25zIjpudWxsLCJhdXRob3JpdHkiOiJERVZFTE9QIn1dLCJleHAiOjE1ODUyODUwMzEsInVzZXJOYW1lIjoiamluZ3podW4iLCJhdXRob3JpdGllcyI6WyJERVZFTE9QIl0sImp0aSI6IjJmYTBmNTU2LTI0YjMtNDZjOC1iMDliLWZhZTk0ZjhhZjkxZCIsImNsaWVudF9pZCI6ImFwcCJ9.raP9NUYdXGkMOWE0pzPZ9CRuECyeEDK1AjwMvjAMHLk",
        'Access-Control-Allow-Origin': '*'
    },
    timeout: 60000
}

Vue.prototype.$axios = axios.create(axiosOptions)
Vue.prototype.$axiosXData = axios.create(axiosOptionsXData)

export default {
    name: 'XMap',
    mixins: [mixins],
    props: {
        xmapProps: Object,
    },
    data () {
      return { 
            execute: [], //实际路径 历史接口 预计要走的
            history:[], //历史路径 历史接口 已经走过的
            ports: [], //历史挂港 通过船的MMIS号得到船航行的历史挂靠港信息
            //船舶信息
            ships: { //船舶信息 通过船的MMSI号得到船的详细信息              
            },
            direction:0, //初始经纬度为 0
            icon: { //图标
                focus:icon({ //船图标
                    iconUrl: require('./images/chuan.png'),
                    iconSize: [32, 32],
                    iconAnchor: [16, 16],
                    className: "ship",
                }),
                pol:icon({ //起始港图标
                    iconUrl: require('./images/qishi.png'),
                    iconSize: [24, 35],
                    iconAnchor: [16, 16]}),
                pod:icon({ //目的港图标
                    iconUrl: require('./images/mudi.png'),
                    iconSize: [24, 35],
                    iconAnchor: [16, 16]}),
                other:icon({ //挂靠港图标
                    iconUrl: require('./images/guakao.png'),
                    iconSize: [16, 16],
                    iconAnchor: [8, 16]}),
            },
            patterns:[
                {
                    offset: 12,
                    repeat: 200, 
                    symbol: L.Symbol.arrowHead({
                        pixelSize: 8, 
                        polygon: true,
                        pathOptions: {
                          stroke: true,
                          weight: 4,
                          color: '#072c4c'
                        }
                    }),         
                },
                { 
                    offset: 0, 
                    repeat: 8, 
                    symbol: L.Symbol.dash({
                        pixelSize: 8,
                        polygon: true,
                        pathOptions:{color:'#072c4c'}
                    })
                }
            ],
            mapCenter:[],
            XLat: [], //横坐标坐标
            YLon: [], //纵坐标坐标
      }
    },
    computed: {

        shipIcon:function(){

            return icon({
                iconUrl: require('./images/chuan.png'),
                iconSize: [32, 32],
                iconAnchor: [16, 16],
                className: "ship-direction-"+(this.direction+1),
            });
        },
       
    },
    watch: {
        // 监听传入的xmapProps的变化 渲染数据 页面初次进来进渲染
        xmapProps:{
            handler: function(val, old){
  
                if(val){ 
                    //以起始港为中心 地图样式
                    // this.center = [val.pol.lat, this.getLon(val.pol.lon)]
                    if(val.pol.lat && val.pol.lon){
                        this.XLat.push(val.pol.lat)
                        this.YLon.push(val.pol.lon)
                    }
                    if(val.pod.lat && val.pod.lon){
                        this.XLat.push(val.pod.lat)
                        this.YLon.push(val.pod.lon)
                    }
                    //下面是刚进页面就调用的第一个接口
                    //val 是前端传进来的值  给接口 getMMSIByVesselName 传 mmsi进去
                    this.getMMSIByVesselName(val.mmsi).then((vesselRes)=>{
                        //vesselRes 当前返回传的部分信息
                        // ShipID: 566431000 船的id  与 mmsi十一样的
                        // mmsi: 566431000
                        // lasttime: 1586945032 //返回船信息各节点的时间                        
                        //下面返回的数据字段 暂时没有什么用
                        // MatchType: 3 shiptype: 71 name: "ASIATIC BAY" callsign: "9V9874" imo: 9366433

                        //如果返回暂无数据 直接调用历史的
                        if(!vesselRes.data){
                            //this.history.latlngs.push([val.pol.lat, val.pol.lon])
                            //this.history.latlngs.push([val.pod.lat, val.pod.lon])
                            return;
                        }
                        
                        //否则把返回的船的信息按照时间从小到大排序
                        let vessels =vesselRes.data.sort((p,c)=>{
                            return c.lasttime - p.lasttime
                        })

                        //而 mmsi 取数组的第一个的ShipID 因为大家都是一样的
                        let mmsi =  vessels[0].ShipID;
                        // vessels.forEach((v)=>{ if(v.mmsi == val.mmsi){
                        //     mmsi = v.ShipID
                        // }})

                        //有mmsi 通过船的MMSI号得到船的详细信息 
                        //时间 地点 经纬度 坐标。。。。。。。
                        this.getVesselDetailByMMSI(mmsi).then((vesselDetailRes)=>{
                            //船舶信息ships 取返回数组的第一个船的信息
                            this.ships = {
                                ...vesselDetailRes.data[0]
                            }
                            //使用传入的经纬度构造LatLng 对象，一对经纬度值代表地球上一个地点。
                            this.ships.latlng = latLng(vesselDetailRes.data[0].lat/1000000.0,vesselDetailRes.data[0].lon/1000000.0) 
                            // this.$refs.xmapRef.center = this.ships.latlng
                            //如果有船的信息
                            if(vesselDetailRes.data[0].lat && vesselDetailRes.data[0].lon){
                                this.mapCenter = [vesselDetailRes.data[0].lat/1000000.0, this.getLon(vesselDetailRes.data[0].lon/1000000.0)]
                                this.XLat.push(vesselDetailRes.data[0].lat/1000000.0)
                                this.YLon.push(this.getLon(vesselDetailRes.data[0].lon/1000000.0))
                                this.center = this.mapCenter
        
                            }else if(val.pol.lat && val.pol.lon){ // 有起始港 坐标
                                this.mapCenter = [val.pol.lat, this.getLon(val.pol.lon)]
                                this.center = this.mapCenter
                            }else if(val.pod.lat && val.pod.lon){
                                this.mapCenter = [val.pod.lat, this.getLon(val.pod.lon)]
                                this.center = this.mapCenter
                            }

                            //默认地图打开的缩放比例：能看到起运港，目的港，船的全貌；
                            // this.getZoom(this.XLat,this.YLon)    
                            var XLat = this.XLat
                            var YLon = this.YLon
                            if(XLat.length > 0){ //说明X Y 都有值
                                var minX = XLat.sort(function(a,b){return b-a;})[0]
                                var maxX = XLat.sort(function(a,b){return a-b;})[0]
                                var minY = YLon.sort(function(a,b){return b-a;})[0]
                                var maxY = YLon.sort(function(a,b){return a-b;})[0]
                                console.log(minX,maxX,minY,maxY)
                            }
                            // this.zoom = 1
                        })
                        
                        //得到挂港列表和往返一次同一港口的周期
                        //通过船的MMIS号得到船航行的历史挂靠港信息
                        //portsRes是处理完之后最后得到的数据
                        this.getPorts(mmsi, val.pol).then((portsRes)=>{  
                            //得到并更新历史跟踪路径
                            this.getTracePaths(mmsi,val.eta, portsRes.during > 0 ? portsRes.during * 1000 * 3600 * 24: val.during).then((pathsRes)=>{
                                this.history = {
                                    latlngs:[],
                                    color:"#072c4c"
                                };
                                this.execute = {
                                    latlngs:[],
                                    // color:"#072c4c"
                                    color:"#072c4c"
                                };


                                let h = []
                                for(var point in pathsRes.history){

                                    let lon = pathsRes.history[point].lon / 1000000.0 
                                    let lat = pathsRes.history[point].lat / 1000000.0
                                    //判断是否反方向环绕地球航线
                                    if(this.direction == 0){
                                        let hlimit = point>=1 && Math.abs(pathsRes.history[point-1].lon/1000000.0 -pathsRes.history[point].lon/1000000.0) > (180);
                                        if(hlimit){ 
                                            console.log("历史非连续点["+point+"]")
                                            this.direction = lon < 0 ? 1:-1
                                        }
                                    }                                 
                                    h.push([lat,this.getLon(lon)])                                                                                              
                                } 
                                this["history"].latlngs = this.sliceLine(h)

                                // console.log("转换后的历史点：START")
                                // console.log(h)
                                // console.log("转换后的历史点：END")
 
                                let h2 = []
                                // console.log("共"+pathsRes.execute.length+"点")
                                console.log(pathsRes.execute)

                                for(var point in pathsRes.execute){

                                    let lon = pathsRes.execute[point].lon / 1000000.0
                              
                                    // console.log(lon)  

                                    let lat = pathsRes.execute[point].lat / 1000000.0         
                                    //判断是否反方向环绕地球航线
                                    if(this.direction == 0){
                                        let limit = point>=1 && Math.abs(pathsRes.execute[point-1].lon/1000000.0 -pathsRes.execute[point].lon/1000000.0) > (180);
                                        if(limit){ 
                                            // console.log("非连续点["+point+"]")
                                            this.direction = lon < 0 ? 1:-1
                                            // console.log(this.direction == 1 ? "正->负": "负->正")
                                        }
                                    }

                                    let latlon = [lat,this.getLon(lon)]
                                    //console.log(this.direction)
                                    // console.log( lon +"转换为"+latlon[1])
                                    h2.push(latlon)

                                    
                                } 

                                // console.log("转换后的点：START")
                                // console.log(h2)
                                // console.log("转换后的点：END")

                                this["execute"].latlngs = this.sliceLine(h2)


                                // this.execute.latlngs.forEach((p)=>{
                                //      console.log(p)
                                // })

                                if(pathsRes.history.length + pathsRes.execute.length == 0){
    
                                    //this.history.latlngs.push([val.pol.lat, val.pol.lon])
                                    //this.history.latlngs.push([val.pod.lat, val.pod.lon])
                                    
                                }
 
                                this.ports = portsRes.ports
                                this.ships.latlng = latLng(
                                    this.ships.lat/1000000.0,
                                    this.getLon(this.ships.lon/1000000.0)
                                ) 
                                                  
                                //this.$refs.xmapRef.fitBounds(L.polyline(this.history).getBounds())
    
                            });
                           
                        })
                    })

                    //如果既有起始港坐标 也有目的港坐标 则取中间点
                    // console.log(val,'valvalvalval')
                    // if(val.pol.lat && val.pol.lon && val.pod.lat && val.pod.lon){
                    //     console.log('既有起始港坐标 也有目的港坐标')
                    //     var lat = (val.pol.lat + val.pod.lat)/2
                    //     var lon = (val.pol.lon + val.pod.lon)/2
                    //     console.log(lat,lon)
                    //     this.center = [lat, lon]
                    //     console.log(this.center)
                    // }else{
                    //     console.log('我要取船的坐标')
                    //     setTimeout(()=>{
                    //         this.center = this.mapCenter
                    //         console.log(this.mapCenter,'this.mapCenter')
                    //     },300)
                    // }           
                }
            },
            immediate: true
        },
        mapCenter:{
            handler: function(val){
                console.log(val,'immediate')
            },
            immediate: true
        },
    },
    methods: {
        //通过船名得到船的MMSI号（如果多个取一个）
        getMMSIByVesselName(kw){
            return new Promise(
                (resolve, reject) => {
                    this.$axios.get("/QueryShip",{
                        params:{  
                            k: axiosOptions.key,
                            kw: kw,
                            max: 3
                        }
                    }).then(res => {
                        if(res.data && res.data.status == 0){
                            resolve(res.data);
                        }
                        else{
                            reject(res.data);
                        }             
                    }).catch(err => {
                        reject(err)
                    })
                }
            )           
        },
        //通过船的MMSI号得到船的详细信息
        getVesselDetailByMMSI(mmsi){
            return new Promise(
                (resolve, reject) => {
                    this.$axios.get("/GetSingleVesselShip",{
                        params:{  
                            k: axiosOptions.key,
                            id: mmsi
                        }
                    }).then(res => {
                        if(res.data && res.data.status == 0){
                            resolve(res.data);
                        }
                        else{
                            reject(res.data);
                        }             
                    }).catch(err => {
                        reject(err)
                    })
                }
            )
        },
        //通过船的MMIS号得到船航行的历史路径
        getTracePaths(mmsi,eta, during){

            return new Promise(
                (resolve, reject) => {

                    let promises = [];
                    let now = new Date();
                    //每个周期时间差
                    let etd = eta + during;
                    // //根据当前时间得到开始，中间，结束
                    // let end = now - etd > 0 ? now : (now - eta < 0 ? now - 0 : etd);
                    // let mid =  now - etd > 0 ? etd : (now - eta  < 0 ? (eta - 0 - during): eta);
                    // let start =  now - etd > 0 ? eta : (now - eta < 0 ? (eta - 0 - 2 * during): (eta - during));


                    //根据当前时间得到开始，中间，结束
                    let end = now - etd > 0 ? etd : (now - eta < 0 ? now :now);
                    let mid ,start 
                    mid = start = now - etd > 0 ? eta : (now - eta  < 0 ?  (now-(2*1000*3600*24)):eta );
                    console.log(start+"->"+mid+"->"+end);

                    let days = Math.round((end - start)/(1000*3600*24))

                    console.log(days);
                    
                    //每次取两天的数据避免接口返回（continue == 1）
                    for(var i=0 ; i < days; i=i+2){

                        promises.push(

                            this.$axios.get("/GetShipVesselTrack",{
                                params:{  
                                    k: axiosOptions.key,
                                    id: mmsi,
                                    btm: Math.round(end/1000)-3600*24*(i+2),
                                    etm: Math.round(end/1000)-3600*24*i
                                }}
                            )
                        )

                    }

                    Promise.all(
                        promises
                    ).then(
                        (res)=>{
                            if(res && res[0] && res[0].data.status == 0){
                                //处理历史轨迹
                                let all = []

                                //每两天取4个样点
                                for(let r in res){
                                    if(res[r].data.points){

                                        // console.log(r);
                                        // console.log(res[r].data.points);

                                        // for(let p in res[r].data.points){
                                        //     all.push(res[r].data.points[p]);
                                        // }

                                        all.push(res[r].data.points[0]);
                                        all.push(res[r].data.points[Math.round(res[r].data.points.length/4)])
                                        all.push(res[r].data.points[Math.round(res[r].data.points.length/2)])
                                        all.push(res[r].data.points[res[r].data.points.length-1])
                                    }
                                }

                                //排序所有样点
                                all = all.sort((p,c)=>{return p.utc - c.utc})  
                                

                                //按中间时间分割样点为历史路径和执行路径
                                resolve({
                                    history: all.slice(0, Math.round((mid - start)/(1000*3600*24)) * 2),
                                    execute: all.slice(Math.round((mid - start)/(1000*3600*24)) * 2,all.length)
                                })
                            }
                            else{
                                 //无任何历史轨迹数据
                                 resolve({
                                    history: [],
                                    execute: []
                                })
                            }

                        }                      
                    ).catch(err=>{
                        reject(err)
                    })
                             
                }
            )

        },
        //通过船的MMIS号得到船航行的历史挂靠港信息
        getPorts(mmsi, pol){
            //默认历史数据的开始时间为60天前
            return new Promise(
                (resolve, reject) => {
                    this.$axios.get("/GetPortOfCallByShip",{
                        params:{  
                            k: axiosOptions.key,
                            mmsi: mmsi,
                            begin: Math.round(new Date()/1000)-3600*24*0,
                            end: Math.round(new Date()/1000)
                        }
                    }).then(res => {

                        let result = [] 

                        if(res.data){

                            if( res.data.status == 0){
                            
                            //排序
                            let all = res.data.records.sort((p,c)=>{ return p.ata - c.ata})
                            //排重
                            let hash = {}
                            let days = 0

                            all.forEach((r)=>{
                                if(!hash[r.portname_en]){
                                    hash[r.portname_en] = r
                                }
                                else{
                                    //两次经过同一港口的间隔天数
                                    if(days == 0 && r.countrycode == 'CN'){
                                        days = Math.round((new Date(hash[r.portname_en].ata.replace(/-/g,'/')) - new Date(r.atd.replace(/-/g,'/')))/(1000*3600*24))                                    
                                    }
                                    console.log(days)
                                }
                            })              
                            //取经纬度         
                            Object.keys(hash).map(p=>{
                                if(hash[p].portcode){
                                    this.$axiosXData.get("/port/getPortLocation",{
                                        params:{ 
                                            portCode:hash[p].portcode.toLowerCase()
                                        }

                                    }).then(c=>{
                                        if(c.data.content && c.data.content.LON){
                                            hash[p].lon = c.data.content.LON;
                                            hash[p].lat = c.data.content.LAT;
                                            //取到经纬度的挂港返回
                                            result.push(hash[p])
                                        }
                                    })
                                }
                            })


                            resolve({ports:result,during:days});
                            }
                            else{
                                resolve({ports:result, during:0});
                            }

                        }
                        else{

                            reject({ports:result, during:0});
                            
                        }             
                    }).catch(err => {
                        reject(err)
                    })
                }
            )

            return [];
        },
        getLon(lon){
            if(Math.abs(this.direction + lon) < Math.abs(lon)){
                
                return this.direction > 0 ? 360+lon : -360+lon
            }
            else{
               // console.log(lon)
            }
            return lon;
        },
        sliceLine(h){

            let sliceIndex = -1
                                
            for(var point in h){
                if(point>1 && Math.abs(h[point-1][1]- h[point][1]) > (180)){
                    sliceIndex = point
                }             
            }
            if(sliceIndex > 0){
                let h2 = h.slice(sliceIndex*1,h.length - 1)
                let h1 = h.slice(0,sliceIndex);
                return h2.concat(h1)

            }

            return h;
        },
        openPopup(target){
            target.openPopup()
        },
        polyLineReady(target){
            
        },
        getAnchor(point1,point2){
            return Math.round(Math.atan((point2.lat - point1.lat)/(point2.lon-point1.lon)))
        },
        //默认地图打开的缩放比例：能看到起运港，目的港，船的全貌；
        getZoom(XLat,YLon)   {
            if(XLat.length > 0){ //说明X Y 都有值
                var minX = XLat.sort(function(a,b){return b-a;})[0]
                var maxX = XLat.sort(function(a,b){return a-b;})[0]
                var minY = YLon.sort(function(a,b){return b-a;})[0]
                var maxY = YLon.sort(function(a,b){return a-b;})[0]
                console.log(minX,maxX,minY,maxY)
            }
            // this.zoom = 4
            
        },
        setZoomAround(a,b,c){
            console.log(a,b,c,'setZoomAround')
        },
        load(){
            console.log('loadloadloadloadloadloadloadloadloadloadloadloadload')
        }                  
    },
    create(){

        
    },
    mounted () {
        var map = L.map('map').setView([39.9, 116.4], 15)
        L.tileLayer(this.url, {
            attribution: this.attribution
          }).addTo(map);
    },
    filters: {
        formatTimer: function(value) {
          let date = new Date(value.replace(/-/g,'/'));
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
        shipStatus: function(value){
            let status = ["在航","错泊","失控","操作受限","吃水受限","靠泊","搁浅","捕鱼","船帆动力",
                        "保留","保留","保留","保留","保留","AIS-SART","未定义"]
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
        'v-polyline-decorator':Vue2LeafletPolylineDecorator,


    }
  }