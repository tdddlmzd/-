<style>
</style>
<template>
  <div id="myChart" style="width:100%;height:100%"></div>
</template>
<script>
// vue文件中引入echarts工具
// vue文件中引入echarts工具
let echarts = require("echarts/lib/echarts");
require("echarts/lib/chart/line");
// 以下的组件按需引入
require("echarts/lib/component/tooltip"); // tooltip组件
require("echarts/lib/component/title"); //  title组件
require("echarts/lib/component/legend"); // legend组件
require ('echarts/lib/component/dataZoom')

export default {
  name: "myChart",
  props: [
    'echartsList'
  ],
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      // option将要设置以下字段感觉就足够使用了
      option: {},
      interval: 0, //X轴显示的数量
    };
  },
  watch: {
    echartsList: {
      handler: function (val) {
        if (val && val.length > 0) { //说明有图标信息
            var that = this
            if(val.length > 7){
                  this.interval = parseInt(val.length / 7)
                }else{
                  this.interval = 0
                }            
              var option = {
                legend: {
                  data: ["航速", "航向"],
                  selected: {
                    '航速' : true,
                    '航向' : false
                  }
                },
                xAxis: {
                    type: "category", // 还有其他的type，可以去官网喵两眼哦
                    name: "", // x轴名称
                    boundaryGap: false,
                    nameLocation: '',
                    data: val.map((item)=>{
                      var posTime = that.getTime(item.posTime)
                      return posTime
                    }),
                    // x轴名称样式
                    nameTextStyle: {
                        fontWeight: 'normal',
                        fontSize: 12,
                    },
                    axisLabel : {//坐标轴刻度标签的相关设置。
                      align:'center',
                      // interval: that.interval,
                      rotate:"0"
                    }
                },
                yAxis:[
                    {
                        name: "航速(kn)", // y轴名称
                        type: "value", //数字类型
                        min: 0, //坐标轴最小值
                        // y轴名称样式
                        nameTextStyle: {
                            color: "#d21d20",
                            fontWeight: 'normal',
                            fontSize: 12,
                        },
                        //坐标轴轴线
                        axisLine:{
                            lineStyle:{
                                color:'#d21d20',
                            }
                        }
                    },
                    {
                        name: "航向(°)", // y轴名称
                        // y轴名称样式
                        nameTextStyle: {
                            color: "#000",
                            fontWeight: 'normal',
                            fontSize: 12,
                        },
                        //坐标轴轴线
                        axisLine:{
                            lineStyle:{
                                color:'#000',
                            }
                        }
                    }
                ],
                tooltip: {
                  trigger: "axis", // axis   item   none三个值
                },
                series: [
                  {
                    name: "航速",
                    type: 'line',
                    lineStyle: {
                        width: 1
                    },
                    data: val.map((item)=>{
                      var speed = item.speed ? item.speed / 1000 : 0
                      return speed
                    }),
                  },
                  {
                    name: '航向',
                    type: 'line',
                    yAxisIndex: 1,
                    lineStyle: {
                        width: 1
                    },
                    data: val.map((item)=>{
                      var course = item.course ? item.course / 100 : 0
                      return course
                    }),        
                  },
                ],
                //下方区域
                dataZoom: [
                  {
                    type: 'slider',//这个 dataZoom 组件是 slider 型 dataZoom 组件（只能拖动 dataZoom 组件导致窗口变化）
                    xAxisIndex: 0, //控制x轴
                    start: 0, 	// 左边在 0% 的位置
                    end: 100, 	// 右边在 100% 的位置
                    show: true,
                    realtime: true
                  },
                  {
                    type: 'inside',//这个 dataZoom 组件是 inside 型 dataZoom 组件（能在坐标系内进行拖动，以及用滚轮（或移动触屏上的两指滑动）进行缩放）
                    xAxisIndex: 0,//控制x轴
                    start: 0,
                    end: 100,
                    show: true,
                    realtime: true
                  },
              ]
            }

            let myChart = echarts.init(document.getElementById("myChart"));
            myChart.setOption(option)
        }
      },
      immediate: true,
    },
  },
  mounted() {
    
  },
  methods: {
    //时间格式  06-03(周三) 20:00
    getTime(res,year) {
        if(res){
            var geS = this.getProcessTime("YY-mm-dd HH:MM",new Date(res.replace(/-/g,'/'))) //格式化时间
            var a = geS.split(' ')
            var b = a[0].replace('/','-').replace('/','-')
            var bY = a[0].replace('/','-').replace('/','-')
            b = b.substring(b.length-5);
            var d = a[1] ? a[1].slice(0,5) : ''
            if(!year){
                return b + ' ' +  d 
            }else if(year && year == "year"){
                return bY + ' ' + d 
            }else if(year && year == "week"){
                return b
            }
        }
    },
    //处理日期时间格式
    getProcessTime(fmt, date) {
        let ret;
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
        return fmt;
    },
  },
};
</script>