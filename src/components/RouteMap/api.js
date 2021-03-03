/**
 * 船舶信息请求API
 */
import axios from 'axios'
import Utils from './utils/Utils'
// 是否使用本地数据
const mock = false
function getCookie (name) {
  var arr,
      reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  if ((arr = document.cookie.match(reg))) return unescape(arr[2]);
  else return null;
}
const platform = {
  // 船达通请求配置
  shipdt: {
    url: 'http://api.shipdt.com/DataApiServer/apicall',
    key: 'bb5bfb4d105646dd8b84589ae8e08455'
  },
  // data360请求配置
  data360: {
    url: 'http://data.360fob.com/schedules/reptile',
    key: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJyZWFsTmFtZSI6Indhbmd3ZWkiLCJvcmdhbml6YXRpb24iOjEsImlzcyI6IlNVTkZMT1dFUiIsImV4cCI6MTU3NzI1MDg1MywidXNlck5hbWUiOiJ3YW5nd2VpIiwidXNlclJvbGUiOiJURVNUIn0.t_4ikzgqg2EW1cI78wMarxW12IgfeAqQ1DdHUbIJ3QM'
  },
  // 自有平台请求配置
  own: {
    url: 'http://120.55.234.41:9000',
    username: 'webcustomer',
    password: '123456',
    keyName: 'own-auth-key'
  }
}
const shipdtAjax = axios.create({
  baseURL: platform.shipdt.url,
  timeout: 30000
})
const data360Ajax = axios.create({
  baseURL: platform.data360.url,
  timeout: 30000,
  headers: {
    Authorization: platform.data360.key,
    'Access-Control-Allow-Origin': '*'
  }
})
let ownAjax = null
function initOwnAajax () {
  ownAjax = new Promise((resolve, reject) => {
    let ajax = null
    ajax = axios.create({
      baseURL: "http://120.55.234.41:9000",
      timeout: 30000,
      headers: {
        
        //Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJqaW5nemh1biIsInNjb3BlIjpbInJlYWQiLCJ3cml0ZSJdLCJyb2xlcyI6W3siaWQiOjAsInJvbGVDb2RlIjoiREVWRUxPUCIsInJvbGVOYW1lIjoi5byA5Y-RIiwiZnVuY3Rpb25zIjpudWxsLCJhdXRob3JpdHkiOiJERVZFTE9QIn1dLCJleHAiOjE1ODQ0MTY5MTksInVzZXJOYW1lIjoiamluZ3podW4iLCJhdXRob3JpdGllcyI6WyJERVZFTE9QIl0sImp0aSI6IjRlMzNkYjZmLTM2YTAtNDNlZS05OTdmLWIwNzI0OThkMjk5NCIsImNsaWVudF9pZCI6ImFwcCJ9.e18mmiLbghLq3jK-RJvD4aitY_Rm13Nu6RlhsuuVDLI'
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJqaW5nemh1biIsInNjb3BlIjpbInJlYWQiLCJ3cml0ZSJdLCJyb2xlcyI6W3siaWQiOjAsInJvbGVDb2RlIjoiREVWRUxPUCIsInJvbGVOYW1lIjoi5byA5Y-RIiwiZnVuY3Rpb25zIjpudWxsLCJhdXRob3JpdHkiOiJERVZFTE9QIn1dLCJleHAiOjE1ODUyODUwMzEsInVzZXJOYW1lIjoiamluZ3podW4iLCJhdXRob3JpdGllcyI6WyJERVZFTE9QIl0sImp0aSI6IjJmYTBmNTU2LTI0YjMtNDZjOC1iMDliLWZhZTk0ZjhhZjkxZCIsImNsaWVudF9pZCI6ImFwcCJ9.raP9NUYdXGkMOWE0pzPZ9CRuECyeEDK1AjwMvjAMHLk",
        //Authorization: (getCookie('token').replace("Jwt","Bearer"))
      }
    })
    resolve(ajax)
  })
}
export default {
  /**
   * 根据起始港、目的港、离港日期获取航线信息
   * @param polCode
   * @param podCode
   * @param etd
   */
  getRouteInfoByPort (id) {
    return new Promise((resolve, reject) => {
      if (mock) {
        resolve(require('./mock/routeInfo-测试').content[0])
      } else {
        if (ownAjax == null) {
          initOwnAajax()
        }
        ownAjax.then(ajax => {
          ajax.get(`/schedules/map/getMapParams?pathId=${id}`).then(res => {
            const data = res.data
            if (data.status === 1) {
              resolve(data.content[0])
            } else {
              reject(data)
            }
          })
        })
      }
    })
  },
  //获取船舶轨迹地图数据
  getShipTrajectory (staticId,vesselId) {
    return new Promise((resolve, reject) => {
      if (mock) {
        var a = require('./mock/routeInfo-已发船').content[0]
        resolve(require('./mock/routeInfo-已发船').content[0])
      } else {
        ownAjax.then(ajax => {
          ajax.get(`/schedules/map/getMapParamsByVessel`, {
            params: {
              staticId,
              vesselId
            }
          }).then(res => {
            const data = res.data
            if (data.status === 1) {
              resolve(data.content[0])
            } else {
              reject(data)
            }
          })
        })
      }
    })
  },
  /**
   * 根据船名和公司名获取航线信息
   * @param shipName
   * @param carrier
   * @returns {Promise<unknown>}
   */
  getRouteInfoByShip (shipName, carrier) {
    return new Promise((resolve, reject) => {
      if (ownAjax == null) {
        initOwnAajax()
      }
      ownAjax.then(ajax => {
        ajax.get('/schedules/web/getMapParamsByPort', {
          params: {
            vessel: shipName,
            carrier
          }
        }).then(res => {
          const data = res.data
          if (data.status === 1) {
            resolve(data.content)
          } else {
            reject(data)
          }
        })
      })
    })
  },
  /**
   * 船舶搜索
   * @param kw 关键字
   * @param max 获取最大数据条数
   */
  queryShip (kw, max) {
    return new Promise((resolve, reject) => {
      shipdtAjax.get('/QueryShip', {
        params: {
          k: platform.shipdt.key,
          kw: kw,
          max: max == null ? 3 : max
        }
      }).then(res => {
        let data = res.data
        if (data != null && data['status'] === 0) {
          resolve(data)
        } else {
          reject(data)
        }
      }).catch(err => {
        reject(err)
      })
    })
  },
  /**
   * 根据船舶ID精确查询
   * @param shipId
   * @returns {Promise<unknown>}
   */
  getSingleVesselShip (shipId) {
    return new Promise((resolve, reject) => {
      shipdtAjax.get('/GetSingleVesselShip', {
        params: {
          k: platform.shipdt.key,
          id: shipId
        }
      }).then(res => {
        let data = res.data
        if (data != null && data['status'] === 0) {
          let result = data.data[0]
          // if (mock) {
          //   result.lat = 32.87626
          //   result.lon = 126.240786
          //   result.lasttime = 1578440486
          // } else {
          result.lat = Utils.formatCoordinate(result.lat)
          result.lon = Utils.formatCoordinate(result.lon)
          // }
          resolve(result)
        } else {
          reject(data)
        }
      }).catch(err => {
        reject(err)
      })
    })
  },
  /**
   * 船舶轨迹查询
   * @param shipId
   * @param {String} btm yyyy-MM-dd 开始日期
   * @param {String} etm yyyy-MM-dd 结束日期
   */
  getShipVesselTrack (shipId, btm, etm) {
    // console.trace('轨迹', btm, etm)
    return new Promise((resolve, reject) => {
      shipdtAjax.get('/GetShipVesselTrack', {
        params: {
          k: platform.shipdt.key,
          id: shipId,
          btm: parseInt(new Date(btm).getTime() / 1000),
          etm: parseInt(new Date(etm).getTime() / 1000)
        }
      }).then(res => {
        let data = res.data
        if (data != null && data['status'] === 0) {
          for (let point of data.points) {
            point['date'] = Utils.parseTime(point.utc)
            point.lat = Utils.formatCoordinate(point.lat)
            point.lon = Utils.formatCoordinate(point.lon)
          }
          resolve(data.points)
        } else {
          reject(data)
        }
      }).catch(err => {
        reject(err)
      })
    })
  },
  /**
   * 获取船舶挂靠指定港口的记录
   * @param {String} mmsi 船舶mmsi
   * @param {Date} begin
   * @param {Date} end
   */
  getPortByShip (mmsi, begin, end) {
    if (begin == null) {
      let now = new Date()
      begin = now.setMonth(now.getMonth() - 6)
    }
    if (end == null) {
      end = new Date()
    }
    return new Promise((resolve, reject) => {
      shipdtAjax.get('/GetPortOfCallByShip', {
        params: {
          k: platform.shipdt.key,
          mmsi: mmsi,
          begin: parseInt(begin.getTime() / 1000),
          end: parseInt(end.getTime() / 1000)
        }
      }).then(res => {
        let data = res.data
        if (data != null && (data['status'] === 0 || data['status'] === '0')) {
          resolve(data.records)
        } else {
          reject(data)
        }
      }).catch(err => {
        reject(err)
      })
    })
  },
  /**
   * 获取船舶挂靠指定港口的记录
   * @param {String} shipName 船舶名称
   * @param {String} portId
   * @param {Date} begin
   * @param {Date} end
   */
  getPortByShipAndPort (shipName, portId, begin, end) {
    return new Promise((resolve, reject) => {
      shipdtAjax.get('/GetPortOfCallByShipPort', {
        params: {
          k: platform.shipdt.key,
          shipname: shipName,
          portid: portId,
          begin: begin.getTime() / 1000,
          end: end.getTime() / 1000
        }
      }).then(res => {
        let data = res.data
        if (data != null && data['status'] === 0) {
          resolve(data)
        } else {
          reject(data)
        }
      }).catch(err => {
        reject(err)
      })
    })
  },
  /**
   * 获取实时船期
   * @param vessel 船名
   * @param {String} etd 离港日期
   * @param weeksOut 偏差周数
   */
  getVesselSchedule (vessel, etd, weeksOut) {
    return new Promise((resolve, reject) => {
      data360Ajax.get('/vesselSchedule', {
        params: {
          vessel,
          etd: etd,
          weeksOut
        }
      }).then(res => {
        let data = res.data
        if (data != null && data['status'] === 1) {
          resolve(data)
        } else {
          reject(data)
        }
      })
    })
  },
  /**
   * 航线信息查询
   * @param carriercd 船公司代码
   * @param routeCode 航线代码
   */
  getStaticSchedule (carriercd, routeCode) {
    const wharfs1 = {
      shipName: 'APL CHINA',
      routeCode: 'EXX',
      carrierName: 'APL',
      etd: '2019/12/26',
      eta: '2020/1/6',
      points: [
        {
          name: 'LOS ANGELES',
          code: 'USLAX',
          wharf: '',
          standarWharf: '',
          eta: '2019/10/16',
          etd: '2019/10/18',
          lat: 33.74021,
          lng: -118.265
        },
        {
          name: 'HONOLULU',
          code: 'USHNL',
          wharf: '',
          standarWharf: '',
          eta: null,
          etd: null,
          lat: 21.2935,
          lng: -157.88285
        },
        {
          name: 'DUTCH HARBOUR',
          code: 'USDUT',
          wharf: '',
          standarWharf: '',
          eta: '2019/10/30',
          etd: '2019/10/31',
          lat: 53.8784,
          lng: -166.55135
        },
        {
          name: 'YOKOHAMA',
          code: 'JPYOK',
          wharf: 'YOKOHAMA HONMOKU TML D4',
          eta: '2019/11/8',
          etd: '2019/11/8',
          lat: 35.41215,
          lng: 139.66395
        },
        {
          name: 'BUSAN',
          code: 'KRPUS',
          wharf: '',
          standarWharf: '',
          eta: '2019/11/10',
          etd: '2019/11/11',
          lat: 35.10162,
          lng: 129.03605
        },
        {
          name: 'NINGBO',
          code: 'CNNGB',
          wharf: '',
          standarWharf: '',
          eta: '2019/11/13',
          etd: '2019/11/14',
          lat: 29.926545,
          lng: 121.8525
        },
        {
          name: 'SHANGHAI',
          code: 'CNSHA',
          wharf: '',
          standarWharf: '',
          eta: '2019/11/15',
          etd: '2019/11/15',
          lat: 31.366365,
          lng: 121.61475
        },
        {
          name: 'LOS ANGELES',
          code: 'USLAX',
          wharf: '',
          standarWharf: '',
          eta: '2019/11/26',
          etd: '2019/11/28',
          lat: 33.74021,
          lng: -118.265
        },
        {
          name: 'HONOLULU',
          code: 'USHNL',
          wharf: '',
          standarWharf: '',
          eta: null,
          etd: null,
          lat: 21.2935,
          lng: -157.88285
        },
        {
          name: 'DUTCH HARBOUR',
          code: 'USDUT',
          wharf: '',
          standarWharf: '',
          eta: null,
          etd: null,
          lat: 53.8784,
          lng: -166.55135
        },
        {
          name: 'YOKOHAMA',
          code: 'JPYOK',
          wharf: 'YOKOHAMA HONMOKU TML D4',
          eta: null,
          etd: null,
          lat: 35.41215,
          lng: 139.66395
        },
        {
          name: 'BUSAN',
          code: 'KRPUS',
          wharf: '',
          standarWharf: '',
          eta: null,
          etd: null,
          lat: 35.10162,
          lng: 129.03605
        },
        {
          name: 'NINGBO',
          code: 'CNNGB',
          wharf: '',
          standarWharf: '',
          eta: '2019/12/24',
          etd: '2019/12/25',
          lat: 29.926545,
          lng: 121.8525
        },
        {
          name: 'SHANGHAI',
          code: 'CNSHA',
          wharf: '',
          standarWharf: '',
          eta: '2019/12/26',
          etd: '2019/12/26',
          lat: 31.366365,
          lng: 121.61475
        }
      ]
    }
    const wharfs2 = [
      {
        name: 'PUSAN',
        code: 'KRPUS',
        wharf: '',
        eta: '',
        etd: '',
        lat: 35.10162,
        lng: 129.03605
      },
      {
        name: 'NINGBO',
        code: 'CNNGB',
        wharf: '',
        eta: '',
        etd: '',
        lat: 29.926545,
        lng: 121.8525
      },
      {
        name: 'SHANGHAI',
        code: 'CNSHA',
        wharf: '',
        eta: '',
        etd: '',
        lat: 31.366365,
        lng: 121.61475
      },
      {
        name: 'ROTTERDAM',
        code: 'NLRTM',
        wharf: '',
        eta: '',
        etd: '',
        lat: 51.943305,
        lng: 4.141812
      },
      {
        name: 'HAMBURG',
        code: 'DEHAM',
        wharf: '',
        eta: '',
        etd: '',
        lat: 53.507,
        lng: 9.9619
      },
      {
        name: 'ANTWERP',
        code: 'BEANR',
        wharf: '',
        eta: '',
        etd: '',
        lat: 51.30249,
        lng: 4.3114605
      },
      {
        name: 'SOUTHAMPTON',
        code: 'GBSOU',
        wharf: '',
        eta: '',
        etd: '',
        lat: 50.898175,
        lng: -1.4205025
      },
      {
        name: 'YANTIAN',
        code: 'CNYTN',
        wharf: '',
        eta: '',
        etd: '',
        lat: 22.575,
        lng: 114.2765
      },
      {
        name: 'SHANGHAI',
        code: '',
        wharf: '',
        eta: '',
        etd: '',
        lat: 31.366365,
        lng: 121.61475
      }
    ]
    const wharfs3 = {
      shipName: 'TOKYO TRADER',
      mmsi: '564913000',
      etd: '2020/1/8',
      eta: '2020/1/11',
      points: [
        {
          name: 'SHANGHAI',
          code: 'CNSHA',
          wharf: 'WAIGAOQIAO PIER #5',
          eta: null,
          etd: '2019/12/11',
          lat: 31.366365,
          lng: 121.61475
        },
        {
          name: 'NINGBO',
          code: 'CNNGB',
          wharf: 'NMICT (NINGBO MEISHAN-ISLAND INTERNATIONAL CONTAINER TERMINAL)',
          eta: null,
          etd: null,
          lat: 29.926545,
          lng: 121.8525
        },
        {
          name: 'BUSAN',
          code: 'KRPUS',
          wharf: 'BPTG',
          eta: '2019/12/15',
          etd: null,
          lat: 35.10162,
          lng: 129.03605
        },
        {
          name: 'ULSAN',
          code: 'KRUSN',
          wharf: 'JUCT',
          eta: null,
          etd: null,
          lat: 35.511065,
          lng: 129.38275
        },
        {
          name: 'KWANGYANG',
          code: 'KRKWA',
          wharf: 'GWCT, GWANGYANGPORT WEST CONTAINER TERMINAL CO,.LTD',
          eta: null,
          etd: null,
          lat: 34.884905,
          lng: 127.71855
        }
      ]
    }
    return new Promise((resolve, reject) => {
      resolve({
        data: wharfs3
      })
      // data360Ajax.get('/staticSchedule', {
      //   params: {
      //     carriercd,
      //     routeCode
      //   }
      // }).then(res => {
      //   let data = res.data
      //   if (data != null && data['status'] === 1) {
      //     resolve(data)
      //   } else {
      //     reject(data)
      //   }
      // })
    })
  }
}
