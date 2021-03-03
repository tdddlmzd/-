<template>
    <div class="lineChart">
        <div class="chartLineCl">
            <p class="prompt_p">{{$t('details.polPunctuality') + polOnTime}}</p>
            <div id="chartLine"></div>
        </div>
        <div class="chartLineCls">
            <p class="prompt_p">{{$t('details.podPunctuality') + podOnTime}}</p>
            <div id="chartLines"></div>
        </div>
    </div>
</template>

<script>
    // vue文件中引入echarts工具
    let echarts = require('echarts/lib/echarts')
    require('echarts/lib/chart/line')
    // 以下的组件按需引入
    require('echarts/lib/component/tooltip')   // tooltip组件
    require('echarts/lib/component/title')   //  title组件
    require('echarts/lib/component/legend')  // legend组件
    export default {
        props : [
            'airlineScheduleObj',
        ],
        data(){
            return {
                airlineScheduleObjs: {},
                polOnTime: '',
                podOnTime: '',
                optionPol: {},
                optionPod: {},
            }
        },
        methods : {
            getContent(){
                if(this.airlineScheduleObjs.pol && this.airlineScheduleObjs.pod){
                    let optionPolXAxisData = [];
                    let temp = this.airlineScheduleObjs.pol.coordinatesModel;
                    let tempArray = new Array;
                    let tempArrayDate = new Array;
                    for(var i = 0;i < temp.length;i++){
                        tempArray.push(temp[i].x);
                        tempArrayDate.push(temp[i].y);
                    };
                    let tempD = this.airlineScheduleObjs.pod.coordinatesModel;
                    let tempArrayD = new Array;
                    let tempArrayDateD = new Array;
                    for(var i = 0;i < tempD.length;i++){
                        tempArrayD.push(tempD[i].x);
                        tempArrayDateD.push(tempD[i].y);
                    };
                    this.optionPol = {
                        xAxis: {
                            type: 'category',
                            data: tempArray,
                        },
                        yAxis: {
                            type: 'value'
                        },
                        series: [{
                            data: [0,1,2,-1,-2],
                            type: 'line',
                            itemStyle: {
                                normal: {
                                    color: '#072c4c', //改变折线点的颜色
                                    lineStyle: {
                                        color: '#072c4c' //改变折线颜色
                                    }
                                }
                            },
                            symbol:'circle'
                        }],
                        grid: {
                            // 间距是 根据x、y轴计算的；假如都是0，x、y轴的label汉字就隐藏掉了。
                            left: 40, // 默认10%，给24就挺合适的。
                            top: 10, // 默认60
                            // right: 60, // 默认10%
                            // bottom: 60, // 默认60
                            
                            width:'90%', // grid 组件的宽度。默认自适应。
                            height:'80%',
                            
                            // containLabel:true, // grid 区域是否包含坐标轴的刻度标签。(如果true的时候，上下左右可以为0了)
                            
                            // show:true, // 是否显示直角坐标系网格。是否显示grid，grid:show后，下面的一些参数生效。
                            // backgroundColor:'#ccac62',
                            // borderColor:"#072c4c",
                            tooltip:{}, // 本坐标系特定的 tooltip 设定。(可以有多个grid)
                        },
                        
                    };
                    this.optionPod = {
                        xAxis: {
                            type: 'category',
                            data: tempArrayD,
                        },
                        yAxis: {
                            type: 'value'
                        },
                        series: [{
                            data: [0,1,2,-1,-2],
                            type: 'line',
                            itemStyle: {
                                normal: {
                                    color: '#072c4c', //改变折线点的颜色
                                    lineStyle: {
                                        color: '#072c4c' //改变折线颜色
                                    }
                                }
                            },
                            symbol:'circle'
                        }],
                        grid: {
                            // 间距是 根据x、y轴计算的；假如都是0，x、y轴的label汉字就隐藏掉了。
                            left: 40, // 默认10%，给24就挺合适的。
                            top: 10, // 默认60
                            // right: 60, // 默认10%
                            // bottom: 60, // 默认60
                            
                            width:'90%', // grid 组件的宽度。默认自适应。
                            height:'80%',
                            
                            // containLabel:true, // grid 区域是否包含坐标轴的刻度标签。(如果true的时候，上下左右可以为0了)
                            
                            // show:true, // 是否显示直角坐标系网格。是否显示grid，grid:show后，下面的一些参数生效。
                            // backgroundColor:'#ccac62',
                            // borderColor:"#072c4c",
                            tooltip:{}, // 本坐标系特定的 tooltip 设定。(可以有多个grid)
                        },
                        
                    };
                };
            },
            getChart(){
                let chartLine = this.$echarts.init(document.getElementById('chartLine'))
                chartLine.showLoading({
                    text: '加载中...'
                });
                chartLine.setOption(this.optionPol)
                chartLine.hideLoading();
                window.addEventListener("resize", () => {
                    chartLine.resize();
                });
            },
            getCharts(){
                let chartLines = this.$echarts.init(document.getElementById('chartLines'))
                chartLines.showLoading({
                    text: '加载中...'
                });
                chartLines.setOption(this.optionPod);
                chartLines.hideLoading();
                window.addEventListener("resize", () => {
                    chartLines.resize();
                });
            }
        },
        watch : {
            'airlineScheduleObj' : {
                // immediate: true,
                deep: true,
                handler(newVal,oldVal){
                    this.airlineScheduleObjs = newVal;
                    if(newVal.pol.onTime){
                        this.polOnTime = newVal.pol.onTime;
                    };
                    if(newVal.pod.onTime){
                        this.podOnTime = newVal.pod.onTime;
                    };
                    this.getContent();
                    this.getChart();
                    this.getCharts();
                }
            },
        },
        mounted(){
            this.$nextTick(() => {
                if(JSON.stringify(this.airlineScheduleObj) == '{}'){
                    this.optionPol = {
                        xAxis: {
                            type: 'category',
                            data: [0,1,2,-1,-2],
                        },
                        yAxis: {
                            type: 'value'
                        },
                        series: [{
                            data: [0,1,2,-1,-2],
                            type: 'line',
                            itemStyle: {
                                normal: {
                                    color: '#072c4c', //改变折线点的颜色
                                    lineStyle: {
                                        color: '#072c4c' //改变折线颜色
                                    }
                                }
                            },
                            symbol:'circle'
                        }],
                        grid: {
                            // 间距是 根据x、y轴计算的；假如都是0，x、y轴的label汉字就隐藏掉了。
                            left: 40, // 默认10%，给24就挺合适的。
                            top: 10, // 默认60
                            // right: 60, // 默认10%
                            // bottom: 60, // 默认60
                            
                            width:'90%', // grid 组件的宽度。默认自适应。
                            height:'80%',
                            
                            // containLabel:true, // grid 区域是否包含坐标轴的刻度标签。(如果true的时候，上下左右可以为0了)
                            
                            // show:true, // 是否显示直角坐标系网格。是否显示grid，grid:show后，下面的一些参数生效。
                            // backgroundColor:'#ccac62',
                            // borderColor:"#072c4c",
                            tooltip:{}, // 本坐标系特定的 tooltip 设定。(可以有多个grid)
                        },
                        
                    };
                    this.optionPod = {
                        xAxis: {
                            type: 'category',
                            data: [0,1,2,-1,-2],
                        },
                        yAxis: {
                            type: 'value'
                        },
                        series: [{
                            data: [0,1,2,-1,-2],
                            type: 'line',
                            itemStyle: {
                                normal: {
                                    color: '#072c4c', //改变折线点的颜色
                                    lineStyle: {
                                        color: '#072c4c' //改变折线颜色
                                    }
                                }
                            },
                            symbol:'circle'
                        }],
                        grid: {
                            // 间距是 根据x、y轴计算的；假如都是0，x、y轴的label汉字就隐藏掉了。
                            left: 40, // 默认10%，给24就挺合适的。
                            top: 10, // 默认60
                            // right: 60, // 默认10%
                            // bottom: 60, // 默认60
                            
                            width:'90%', // grid 组件的宽度。默认自适应。
                            height:'80%',
                            
                            // containLabel:true, // grid 区域是否包含坐标轴的刻度标签。(如果true的时候，上下左右可以为0了)
                            
                            // show:true, // 是否显示直角坐标系网格。是否显示grid，grid:show后，下面的一些参数生效。
                            // backgroundColor:'#ccac62',
                            // borderColor:"#072c4c",
                            tooltip:{}, // 本坐标系特定的 tooltip 设定。(可以有多个grid)
                        },
                        
                    };
                    this.getChart();
                    this.getCharts();
                }
            });  
        },
    }
</script>

<style lang="scss" scoped>
    .lineChart{
        .prompt_p{
            font-size: 12px;
            color: 282828;
            margin: 21px 0 20px 0;
        }
    }
    .chartLineCl{
        width: 465px;
        height: 180px;
        display: inline-block;
        #chartLine{
            width: 100%;
            height: 100%;
        }
    }
    .chartLineCls{
        width: 465px;
        height: 180px;
        display: inline-block;
        margin-left: 55px;
        #chartLines{
            width: 100%;
            height: 100%;
        }
    }
</style>