<style lang="scss" scoped>
    #shipdt{
        
    }
    .shipdt_content {
        position: relative;
        top: 57px;
        overflow: hidden;
    }
    .shipdt_main{
        position: relative;
        .shipmaps{
            width: 100%;
            height: 100%;
        }
        .myEcharts{
            width: 532px;
            height: 316px;        
            padding: 0px 10px 10px 10px;
            background-color: #ffffff;
            box-shadow: 0px 2px 12px 0px 
                rgba(0, 0, 0, 0.1);
            border-radius: 6px;    
            position: absolute;
            left: 500px;
            top: 100px;
            overflow: hidden;
        }
        .echarts_title{
            height: 32px;
            display: flex;
            justify-content: space-between;
            padding: 15px 15px 0px 10px;
            margin-bottom: 12px;
            cursor: move;
            .title_p{
                color: #282828;
                font-size: 14px;
                font-weight: 600;
            }
            .icon_delect{
                font-size: 14px;
                cursor: pointer;
            }
        }
        .echarts_main{
            width: 532px;
            height: 258px;
        }
        .Infor_content{
            position: absolute;
            width: 370px;
            left: 20px;
            top: 76px;
            max-height: 400px;
            overflow: hidden;
            background-color: #fff;
            box-shadow: 0px 8px 40px 0px 
                    rgba(0, 0, 0, 0.2);
            border-radius: 6px;        
        }
        .Infor_content:hover{
            overflow-y: overlay;
        }
        .route_contrast{
            width: 242px;
            height: 220px;
            padding: 0px 10px 10px 10px;
            // background-color: #ffffff;
            box-shadow: 0px 2px 12px 0px 
                rgba(0, 0, 0, 0.1);
            border-radius: 6px;    
            position: absolute;
            left: 70%;
            top: 100px;
            background-color: #fff;
            overflow: hidden;
        }
        .route_title{
            height: 32px;
            display: flex;
            justify-content: space-between;
            padding: 15px 15px 0px 10px;
            margin-bottom: 12px;
            cursor: move;
            position: relative;
            .title_p{
                color: #282828;
                font-size: 14px;
                font-weight: 600;
            }
            .icon_delect{
                font-size: 14px;
                margin-top: 2px;
                cursor: pointer;
                position: absolute;
                right: 2px;
                margin-top: 7px;                
                top: 50%;
                transform: translateY(-50%);
            }
        }
    }
    .shipdt_content .main_select{
        width: 370px;
        height: 40px;
        background-color: #fff;
        border-radius: 6px;
        overflow: hidden;
        position: absolute;
        left: 20px;
        top: 27px;
        z-index: 2;
        display: flex;
        align-items: center;
        box-shadow: 0px 2px 6px 0px
		rgba(0, 0, 0, 0.2);
        .back_track{
            width: 20px;
            height: 40px;
            line-height: 40px;
            text-align: right;
            font-size: 16px;
            color: #909090;
            margin-right: -1px;
            cursor: pointer;
        }
        .el-input{
            height: 40px;
            width: 86%;
            .el-input__inner{
                border: none !important;
            }
        }
        .el-input__inner{
            border-radius: 6px;
            padding-right: 60px !important;
            padding-left: 19px !important;
            cursor:text
        }
        .el-input__suffix{
            right: 40px !important;
        }
        .iconLeft{
            position: absolute;
            width: 38px;
            height: 38px;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
            display: flex;
            align-items: center;
            cursor: pointer;
            .icon_jian{
                font-size: 20px;
                color: #072c4c;
                margin-right: 9px;
            }
            .icon_line{
                width: 1px;
                height: 20px;
                background-color: #f2f2f2;
                margin-right: 5px;
            }
        }
        .iconRight{
            position: fixed;

        }
    }
    .input_text{
        position: absolute;
        width: 370px;
        max-height: 800px;
        left: 20px;
        top: 76px;
        z-index: 100;
        background-color: #ffffff;
        box-shadow: 0px 7px 10px 0px
            rgba(0, 0, 0, 0.1);
        border-radius: 6px;   
        .input_ui{
            padding: 6px 0;
            .input_li{
                width: 100%;
                height: 34px;
                line-height: 34px;                
                cursor: pointer;
                background-color: #ffffff;
                padding: 0 20px;
                color: #282828;
            }
            .input_li:hover{
                background-color: #f2f2f2;
                font-weight: 600;
                color:  #007CE3;
            }
        } 
        .nodate{
            padding: 10px 0;
            margin: 0;
            text-align: center;
            color: #999;
            font-size: 14px;        
        }
    }
    .shipLoading{
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: transparent;
        z-index: 2000;
        .loading_div{
            padding: 15px 24px;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 6px;
            background:rgba(7,44, 76, .8)
        }
        .loding_icon{
            font-size: 18px;
            color: #fff;
        }
        .icon_p{
            font-size: 14px;
            margin-left: 10px;
            color: #fff;
        }
    }
</style>
<style lang="scss">
.main_select{
    .el-input__inner{
        border: none !important;
    }
}
.dialogCustomClass{
    width: 380px;
    height: 106px;
    overflow: hidden;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    margin-top: 0 !important;
    .footer{
        width: 100%;
        height: 24px;
        text-align: center;
    }
    .closeButton{
        font-size: 14px;
        color: #909090;
        position: absolute;
        right: 14px;
        top: 14px;
        cursor: pointer;
    }
}
</style>
<template>
    <div id="shipdt">
        <Head ref="head"></Head>
        <div class="shipdt_content">
            <div class="shipLoading" v-if="loading" style="top: 57px">
                <div class="loading_div" style="margin-top: -57px">
                    <i class="el-icon-loading loding_icon"></i>
                    <p class="icon_p">{{$t('route.dataLoading')}}</p>
                </div>
            </div>
            <div class="shipdt_main" :style="{width: styleWidth,height:styleHeight}">
                <!-- 下拉框 -->
                <div class="main_select" id="main_select">
                    <div class="el-icon-arrow-left back_track" v-if="isGoBack" @click="goBack"></div>
                    <el-input v-model="shipName" :placeholder="$t('home.TenMMSIIMO')" @input="inputSelect" @focus="focusSelect" @blur="blurSelect" clearable @clear="clearValue"></el-input>
                    <div class="iconLeft" @click="narrow()">
                        <p class="icon_line"></p>
                        <i class="el-icon-caret-left icon_jian" id="icon_jian"></i>
                    </div>
                </div>
                <!-- input框输入的内容 -->
                <div class="input_text" v-if="isShowInput" id="input_text" :style="isGoBack ? 'width:348px;left: 40px;' : 'width:370px;left: 20px;'" @mouseover="mouseover()" @mouseout="mouseout">
                    <ul class="input_ui" v-if="shippCompany.length > 0">
                        <li class="input_li" v-for="item in shippCompany" :key="item.mmsi" @click="clickShipM(item)" :style="mmsi == item.mmsi ? 'font-weight:600;background-color: #f2f2f2;' : ''">
                            <p>{{item.name + '(' + item.mmsi + ')'}}</p>
                        </li>
                    </ul>
                    <p v-else class="nodate">{{$t('no Date')}}</p>
                </div>
                <div></div>
                <!-- 地图 -->
                <div class="shipmaps" :style="{width: styleWidth,height:styleHeight}">
                    <shipMap :shipmapList="shipmapList" :largeMap="largeMap" :contrastMap="contrastMap" ref="shipMap" :shipObject="shipObject" :tenShipData="tenShipData" @mapInfor="mapInfor"></shipMap>
                </div>
                <!-- echarts -->
                <div class="myEcharts" v-drag v-if="isEcharts">
                    <div class="echarts_title" id="echarts_title">
                        <p class="title_p" id="title_p">{{$t('route.routeAnalysis')}}</p>
                        <i class="el-icon-close icon_delect" @click="clickCloseHx()"></i>
                    </div>
                    <div class="echarts_main">
                        <echarts :echartsList="echartsList"></echarts>
                    </div>
                </div>
                <div class="Infor_content" v-if="isInforShip" :style="{maxHeight: inforHeight}" id="Infor_content">
                    <InforShip @clickEcharts='clickEcharts' @delectDate="delectDate" @clickRoute='clickRoute' @parentValue="parentValue" @clickShipMap='clickShipMap' :tenShipData="tenShipData" :shipObject="shipObject" :shipTraje="shipTraje" :isroute=true ref="InforShip"></InforShip>
                </div>
                <div class="route_contrast" v-drag v-if="isRouteCont">
                    <div class="route_title" id="route_title">
                        <p class="title_p" id="title_p">{{$t('route.pathAnalysis')}}</p>
                        <i class="el-icon-close icon_delect" @click="clickCloseGj()"></i>
                    </div>
                    <routeCont @clickEcharts='clickEcharts' @traContrast="traContrast" @clearContrast="clearContrast" :routeInfor="routeInfor" @clickTime="clickTime" :shipObject="shipObject" @accordPop="accordPop" ref="routeCont"></routeCont>
                </div>
            </div>
            <!-- <div>
                <Footer></Footer>
            </div> -->
        </div>
        <div class="customerServ" @click="contactCustomer()"></div>
        <el-dialog
            :visible.sync="isShipShow"
            custom-class='dialogCustomClass'
            center
            :show-close=false
        >
            <i class="el-icon-close closeButton" @click="isShipShow=false"></i>
            <div style="width:100%;text-align:center;margin-bottom:14px;margin-top:7px;font-size:16px;color:#282828">{{$t(shipText)}}</div>
            <div class="footer">
                <el-button type="primary" @click="isShipShow=false" style="font-size: 12px;width: 90px;height: 24px;line-height: 1px;text-align: center;color: #fff;background: #072c4c;border-radius: 20px;cursor: pointer;">确 定</el-button>
            </div>
        </el-dialog>    
    </div>
</template>

<script>
import Head from "@components/Head";
import Footer from "@components/Footer";
import shipMap from '@components/shipMap/shipMap'
import echarts from '@components/shipMap/echarts'
import InforShip from '@components/shipMap/InforShip'
import routeCont from '@components/shipMap/routeCont'
import appConfig from "@src/app.config";
import map_contain from '@components/shipMap/map_contain.js'
export default {
    page: {
        title: "船舶定位-船舶动态，船舶AIS，船舶位置",
        meta: [
            {
                name: 'description',
                content: "鲸准船舶定位查询提供全球集装箱船舶的实时船舶定位，船舶AIS定位，船舶动态查询等功能"
            },
            {name: 'keywords', content: "船舶定位，船舶位置，船舶AIS，船位置，货位置，船舶跟踪，船舶动态"},
        ],
    },
    data() {
        return {
            loading:false,
            styleWidth: '', //可视区宽度
            styleHeight: '', //可视区高度
            shipName: '',//船名
            showShipName: '',// 无数据时 要显示的船名
            mmsi: '', //mmsi
            isShowInput: false, //是否显示input框
            isPackUp: false,
            isGoBack: false,
            shippCompany: [],//搜索的船公司数组
            userInfo:
                this.getCookie("authId") !== null && this.getCookie("authId") !== "" && this.getCookie("authId") !== undefined
                ? this.getCookie("authId")
                : "",
            //船舶信息
            isInforShip: false, //是否显示船信息
            inforHeight: '', //船舶信息窗口

            //显示船信息得
            shipObject:{}, //显示船舶信息
            shipTraje: [], //显示船舶轨迹

            // 船舶地图
            shipmapList: [], //点击某一段地图接收的参数
            largeMap: [], //点击自定义时间地图接收参数
            contrastMap: [], //轨迹对比地图接收参数
            //Echarts
            isEcharts: false, //是否显示Echarts表
            echartsList:[], //echarts接收的参数

            //船舶轨迹窗口
            isRouteCont: false, //是否显示船舶轨迹窗口
            routeInfor: [], //给船舶轨迹窗口传的数据

            //船舶在该事件段无轨迹
            isShipShow: false,
            shipText: '',

            // 调取船轨迹时传的id
            id:'',
            
            isOverOue: false, //鼠标是否在下拉框

            oldVal: '', //旧 input输入值

            //携带的参数
            paramId: '',
            detailInfor: '',

            //传到船信息得数据
            tenShipData: [],
      }
    },
    //注册局部组件指令
    directives: {
        drag: function(el) {
            let dragBox = el; //获取当前元素
            dragBox.onmousedown = e => {
                var id = e.target.id
                if(id == 'echarts_title' || id == 'title_p' || id == 'route_title'){
                    e.preventDefault()
                    e.stopPropagation()
                    //算出鼠标相对元素的位置
                    let disX = e.clientX - dragBox.offsetLeft;
                    let disY = e.clientY - dragBox.offsetTop;
                    document.onmousemove = e => {
                        //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
                        let left = e.clientX - disX;
                        let top = e.clientY - disY;
                        //移动当前元素
                        dragBox.style.left = left + "px";
                        dragBox.style.top = top + "px";
                    };
                    document.onmouseup = e => {
                            e.preventDefault()
                            e.stopPropagation()
                            //鼠标弹起来的时候不再移动
                            document.onmousemove = null;
                            //预防鼠标弹起来后还会循环（即预防鼠标放上去的时候还会移动）  
                            document.onmouseup = null;
                    };
                }
            };
        }
    },
    components: {
        Head,
        Footer,
        shipMap,
        echarts,
        InforShip,
        routeCont,
    },
    computed: {},
    methods: {
        /**input框与下拉框的操作**/
        //鼠标移入
        mouseover(){
            this.isOverOue = true
        },
        //鼠标移出
        mouseout(){
            this.isOverOue = false
        },
        //实时输入数据获取数据
        inputSelect(val){
            var that = this
            var newVal = JSON.parse(JSON.stringify(val.replace(/\s/g, "")))
            if(this.oldVal !== newVal){
                this.oldVal = newVal
                this.$Axios.get(this.GLOBAL.url + "schedules/web/vessels?kw=" + newVal,{
                    headers: {
                        Authorization: this.getToken()
                },
                }).then(res => {
                    if (res.data.status == 1) {
                        if(val){ //如果输入框输入的有值 取 返回的数据
                            that.shippCompany = res.data.content
                            that.isShowInput = true
                        }else{ //否则一切清空
                            that.clearValue()
                        }
                    }else{
                        that.clearValue()
                    }
                }).catch((err)=>{
                    
                })
            }else{
                that.isShowInput = true
            }
        },
        //select focus
        focusSelect(){
            //在focues时 判断isInforShip
            this.showInfr()
            // this.clearInfro()
            //input下拉框最大高度
            if($('#input_text')){
                $('#input_text').css({
                    'max-height': document.documentElement.clientHeight - 125 - 10 - 66 + 'px'
                })
            }
            var that = this
            if(that.shipName){ //如果输入有值
                $.ajax({
                    url:this.GLOBAL.url + "schedules/web/vessels?kw=" + that.shipName,
                    type: "GET",
                    headers: {
                        Authorization: this.getToken()
                    },
                    beforeSend: function() {},
                    success: function(data) {
                        if (data.status == 1) {
                            if(data.content && data.content.length > 0){
                                that.shippCompany = data.content
                                that.isShowInput = true
                            }else{
                                that.clearValue()
                            }
                        }else{
                            that.clearValue()
                        }
                    },
                    error: function(e) {}
                });
            }
        },
        blurSelect(){
            if(!this.isOverOue){ //鼠标只有移出下拉框 才能直接消失
                this.isShowInput = false
            }
        },

        //点击下拉框某一个选项时
        clickShipM(val){
            if(val.mmsi){ //有值
                for (let i = 0; i < this.shippCompany.length; i++) {
                    if(this.shippCompany[i].mmsi == val.mmsi && this.shippCompany[i].name == val.name){
                        this.shipName = this.shippCompany[i].name
                        this.showShipName = this.shippCompany[i].name
                        this.mmsi = this.shippCompany[i].mmsi
                    }
                }

                //看是不是同一条船
                for (let j = 0; j < this.tenShipData.length; j++) {
                    if(this.mmsi == this.tenShipData[j].mmsi){ //说明是同一条船 则
                        this.tenShipData.splice(j,1)
                    }
                }
                this.isOverOue = false
                this.isShowInput = false
                if(this.tenShipData.length > 9){ //说明已经有第10条数据了 则 不让用户在搜索
                    this.$message({
                        message: this.$t('route.shipNumber'),
                        type: "error",
                        customClass: "base-message-zindex"
                    });
                }else{
                    this.getShipInfo()
                }
            }
        },

        //清除input框值
        clearValue(){
            this.shipName = ''
            this.mmsi = ''
            this.shippCompany = []
            this.isOverOue = false
            this.isShowInput = false
            this.showInfr()
        },
        //船信息是否消失
        showInfr(){
            if(this.tenShipData.length > 0){
                //说明有查询记录
                this.isInforShip = true
            }else{
                this.isInforShip = false
            }
        },

        /**此页面信息获取**/
        //获取船舶信息和船舶轨迹
        getShipInfo(){
            this.shipName = ''
            this.loading = true
            this.clearShip()
            var that = this

            that.$Axios.all([
                that.$Axios.get(that.GLOBAL.url + "schedules/web/vessel/detail?mmsi=" + that.mmsi,{
                    headers: {
                        Authorization: this.getToken()
                },}).then(res => res.data),
                that.$Axios.get(that.GLOBAL.url + "schedules/web/vessel/track?mmsi=" + that.mmsi,{
                    headers: {
                        Authorization: this.getToken()
                },}).then(res => res.data)
            ]).then(that.$Axios.spread(function (detail, track) {
                if(detail.status == 9){
                    that.loading = false
                    that.sampleData(1, {
                        name: 'vessel',
                        params: {
                            shipdt: that.shipName,
                            mmsi: that.mmsi,
                        },
                    })
                    return
                }
                that.shipObject = detail.content
                that.shipTraje = track.content

                that.tenShipData.unshift({
                    shipObject: detail.content,
                    shipTraje: track.content,
                    isZwsj: false,
                    isClick: true,
                    shipNameEn: detail.content.nameEn,
                    mmsi: detail.content.mmsi,
                })
                //接口都返回
                that.isInforShip = true
                that.loading = false
            })).catch((error)=>{
                that.tenShipData.unshift({
                    shipObject: '',
                    shipTraje: [],
                    isZwsj: true,
                    isClick: true,
                    shipNameEn: that.showShipName,
                    mmsi: that.mmsi,
                })
                that.clearShip()
                that.isInforShip = true
                that.loading = false
            })
        },

        //多条船
        getShipParmas(val){
            var that = this
            that.loading = true
            var newVal = val
            if(val){
                var newArr = Array.from(new Set(val.split(',')))
                if(newArr.length > 10){ //客户查的数量大于10条
                    this.$message({
                        message: this.$t('route.tenNumber'),
                        type: "error",
                        customClass: "base-message-zindex"
                    })
                }
                var tenArr = newArr.splice(0,10)
                newVal = tenArr.join(',')
            }
            this.$Axios.get(this.GLOBAL.url + "schedules/web/vessels?kw=" + newVal,{
                headers: {
                    Authorization: this.getToken()
            },
            }).then(res => {
                var data = res.data
                if (data.status == 1) {
                    if(data.content.length > 0){

                        //先把所有的数据 按照时间从小往大排
                        data.content = data.content.sort(that.compare('lasttime'))

                        //首先先去重 看接口返回的船名是否是我传进来的船名
                        var newShip = []
                        for (let p = 0; p < tenArr.length; p++) {
                            for (let j = 0; j < data.content.length; j++) {
                                if(data.content[j].name && tenArr[p] && data.content[j].name.replace(/\s/g,'').toUpperCase() == decodeURI(tenArr[p]).replace(/\s/g,'').toUpperCase()){
                                    newShip.push(data.content[j])
                                }
                            }
                        }

                        var newContent = [] //筛选之后的船名
                        var obj = {}

                        //数组循环 从后往前找 进行筛选去重
                        for(var i=newShip.length-1; i >= 0; i--){
                            if(!obj[newShip[i].name]){
                                newContent.push(newShip[i])
                                obj[newShip[i].name] = true
                            }
                        }
                        if(newContent.length > 0){
                            that.showShipName = newContent[0].name
                            that.mmsi = newContent[0].mmsi
                            that.getShipInfo()
                        }else{
                            that.loading = false
                        }

                        for (let i = 1; i < newContent.length; i++) {
                            //其他的先放船名 mmsi  其他的慢慢加载
                            var tt = {
                                shipNameEn: newContent[i].name,
                                mmsi: newContent[i].mmsi,
                                shipObject: '',
                                shipTraje: [],
                                isClick: false,
                            }
                            that.tenShipData.push(tt)
                            that.getScottInfo(newContent[i])
                        }
                    }else{
                        that.loading = false
                        console.log('找不到此mmsi号 请维护')
                    }
                }else{
                    that.loading = false
                }
            }).catch((error)=>{
                that.loading = false
            })
        },
        //掉多条船需要走的函数
        //输入框查 或者  路由第一条船
        getScottInfo(val){
            var that = this
            that.$Axios.all([
                that.$Axios.get(that.GLOBAL.url + "schedules/web/vessel/detail?mmsi=" + val.mmsi,{
                    headers: {
                        Authorization: this.getToken()
                },}).then(res => res.data),
                that.$Axios.get(that.GLOBAL.url + "schedules/web/vessel/track?mmsi=" + val.mmsi,{
                    headers: {
                        Authorization: this.getToken()
                },}).then(res => res.data)
            ]).then(that.$Axios.spread(function (detail, track) {
                var newO = {
                    shipObject: detail.content,
                    shipTraje: track.content,
                    isZwsj: false,
                    isClick: true,
                    shipNameEn: val.name,
                    mmsi: val.mmsi,
                }
                for (let i = 0; i < that.tenShipData.length; i++) {
                    if(that.tenShipData[i].mmsi == val.mmsi){
                        that.tenShipData.splice(i,1,newO)
                        return
                    }
                }
            })).catch((error)=>{
                var newO = {
                    shipObject: '',
                    shipTraje: [],
                    isZwsj: true,
                    isClick: true,
                    shipNameEn: val.name,
                    mmsi: val.mmsi,
                }
                for (let i = 0; i < that.tenShipData.length; i++) {
                    if(that.tenShipData[i].mmsi == val.mmsi){
                        that.tenShipData.splice(i,1,newO)
                        return
                    }
                }
            })
        },
        /**页面功能操作**/
        //点击船信息图标出现echarts图表
        clickEcharts(val){
            var that = this
            that.isEcharts = true
            var id = that.id
            var mmsi = that.mmsi
            if(val.isRoute == 2){ //说明是船舶轨迹窗口出来的
                id = val.id
                mmsi = val.mmsi
            }
            $.ajax({
                url:this.GLOBAL.url + "schedules/web/vessel/voyage?id=" + id + '&mmsi=' + mmsi + '&startTime=' + val.startTime + '&endTime=' + val.endTime,
                type: "GET",
                headers: {
                    Authorization: this.getToken()
                },
                beforeSend: function() {},
                success: function(data) {
                    if (data.status == 1) {
                        if(data.content.length > 0){ //有数据
                            for (let i = 0; i < data.content.length; i++) {
                                data.content[i].millise = data.content[i].posTime ? new Date(data.content[i].posTime).getTime() : ''
                            }
                            that.echartsList = data.content.sort(that.compare('millise'))
                        }else{
                            that.isEcharts = false
                            that.accordPop('route.empHangx')
                            that.echartsList = []
                        }
                    }
                },
                error: function(e) {}
            })
        },
        //点击echarts关闭
        clickCloseHx(){
            this.isEcharts = false
        },
        //子元素切换船
        parentValue(val){
             //先判断点击的船是不是当前船
            if(val.mmsi == this.mmsi){

            }else{
                this.shipObject = val.shipObject
                this.shipTraje = val.shipTraje
                this.mmsi = val.shipObject.mmsi
                this.id = val.shipObject.id
                this.clearInfro()
            }
        },
        //删除某一项
        delectDate(val,index,currentIndex){
            this.tenShipData.splice(index,1)
            this.clearInfro()
            if(this.tenShipData.length == 0){
                this.isInforShip = false
            }else{
                if(index == currentIndex && !this.tenShipData[0].isZwsj){ //说明关掉得就是展开得
                    this.shipObject = this.tenShipData[0].shipObject
                    this.shipTraje = this.tenShipData[0].shipTraje
                    this.mmsi = this.tenShipData[0].mmsi
                    this.id = this.tenShipData[0].shipObject.id
                }
            }
        },
        //点击某一段的船舶获取的船舶轨迹路线
        clickShipMap(val){
            if(val.isShow){ //说明是添加的时间  该添加轨迹
                var that = this
                that.loading = true
                // if(val.startTime && val.endTime){ //如果有开始时间  或者 结束时间
                    $.ajax({
                        url:this.GLOBAL.url + "schedules/web/vessel/voyage?id=" + that.id + '&mmsi=' + that.mmsi + '&startTime=' + val.startTime + '&endTime=' + val.endTime,
                        type: "GET",
                        headers: {
                            Authorization: this.getToken()
                        },
                        beforeSend: function() {},
                        success: function(data) {
                            if (data.status == 1) {
                                if(data.content.length > 0){
                                    that.shipmapList.push({
                                        currentIndex: val.index,
                                        startPlace: val.startPlace,
                                        endPlace: val.endPlace,
                                        startPlaceTime: val.startPlaceTime,
                                        endPlaceTime: val.endPlaceTime,
                                        currentList: data.content //当前点击的数组
                                    })
                                }else{
                                    console.log('当前时间段无轨迹')
                                    that.isShipShow = true
                                    that.shipText = 'route.empQuri'
                                }
                                that.loading = false
                            }
                        },
                        error: function(e) {}
                    })
                // }else{
                //     console.log('时间不完整')
                // }
            }else{//是要去掉的时间 该去掉轨迹
                for (let i = 0; i < this.shipmapList.length; i++) {
                    if(this.shipmapList[i].currentIndex == val.index){
                        this.shipmapList.splice(i,1)
                    }
                    
                }
            }
        },
        //点击船信息得自定义确定 和 两周时间
        clickRoute(val){
            this.routeInfor = []
            this.isRouteCont = true
            this.routeInfor[0] = {
                startTime:val.startTime,
                endTime:val.endTime
            }
            this.getMap(val)
        },
        //船舶轨迹窗口自定义时间
        clickTime(val){
            this.$refs.InforShip.startTime = val.startTime
            this.$refs.InforShip.endTime = val.endTime
            this.getMap(val)
        },
        //点击自定义或者两周 一周的船舶轨迹
        getMap(val){
            var that = this
            that.loading = true
            $.ajax({
                url:this.GLOBAL.url + "schedules/web/vessel/voyage?id=" + that.id + '&mmsi=' + that.mmsi + '&startTime=' + val.startTime + '&endTime=' + val.endTime,
                type: "GET",
                headers: {
                    Authorization: this.getToken()
                },
                beforeSend: function() {},
                success: function(data) {
                    if (data.status == 1) {
                        that.loading = false
                        if(data.content.length > 0){
                            that.largeMap = data.content                        
                        }else{
                            that.largeMap = []
                            that.isShipShow = true
                            that.shipText = 'route.empQuri'
                        }
                    }
                },
                error: function(e) {}
            })
        },
        //点击轨迹分析得X
        clickCloseGj(){
            this.$refs.InforShip.activeIndex = ''
            this.largeMap = []
            this.contrastMap = []
            this.isRouteCont = false
        },
        //地图点击船 传达的数据
        mapInfor(val){
            //先判断点击的船是不是当前船
            if(val.mmsi == this.mmsi){

            }else{
                for (let i = 0; i < this.tenShipData.length; i++) {
                    if(this.tenShipData[i].mmsi == val.mmsi){
                        //说明点击的是这条船
                        //切换此船信息
                        this.$refs.InforShip.changeShip(this.tenShipData[i],i)
                        return
                    }
                }
            }
        },
        //排序
        compare(property){
            return function(a,b){
                var value1 = a[property];
                var value2 = b[property];
                return value1 - value2;
            }
        },
        //清除船信息
        clearShip(){
            //重新获取数据 所有东西清空
            this.shipObject = {} //船舶信息
            this.shipTraje = [] //船舶轨迹
            this.clearInfro()
        },
        //清除船得信息
        clearInfro(){
            this.$refs.shipMap.fitMarker = []
            this.shipmapList = []
            this.largeMap = []
            this.contrastMap = []
            this.isEcharts = false
            this.echartsList = []
            this.isRouteCont = false
            this.routeInfor = []
            this.isShipShow = false
            this.shipText = ''
        },
        //显示提示弹窗
        accordPop(val){
            this.isShipShow = true
            this.shipText = val
        },
        //轨迹对比
        traContrast(val){
            var that = this
            that.loading = true
            $.ajax({ //当前为船舶信息接口
                url:this.GLOBAL.url + "schedules/web/vessel/detail?mmsi=" + val.mmsi,
                type: "GET",
                headers: {
                    Authorization: this.getToken()
                },
                beforeSend: function() {},
                success: function(data) {
                    if (data.status == 1) {
                        that.$refs.routeCont.sconed_id = data.content.id
                        $.ajax({
                            url:that.GLOBAL.url + "schedules/web/vessel/voyage?id=" + data.content.id + '&mmsi=' + val.mmsi + '&startTime=' + val.startTime + '&endTime=' + val.endTime,
                            type: "GET",
                            headers: {
                                Authorization: that.getToken()
                            },
                            beforeSend: function() {},
                            success: function(data) {
                                if (data.status == 1) {
                                    that.loading = false
                                    if(data.content.length > 0){
                                        that.contrastMap = data.content                        
                                    }else{
                                        that.contrastMap = []
                                        that.isShipShow = true
                                        that.shipText = 'route.empQuri'
                                    }
                                }
                            },
                            error: function(e) {}
                        })
                    }else{}
                },
                error: function(e) {reject(data)}
            })
        },
        //清除轨迹对比
        clearContrast(){
            this.contrastMap = []
        },

        /**跟踪跳到此页做的事情**/
        //有mmsi号获取船名
        getShipName(){
            var that = this
            that.shippCompany = []
            $.ajax({
                url:this.GLOBAL.url + "schedules/web/vessels?kw=" + that.mmsi,
                type: "GET",
                headers: {
                    Authorization: this.getToken()
                },
                beforeSend: function() {},
                success: function(data) {
                    if (data.status == 1) {
                        if(data.content && data.content.length > 0){
                            that.shippCompany = data.content
                            for (let i = 0; i < that.shippCompany.length; i++) {
                                if(that.shippCompany[i].mmsi == that.mmsi){
                                    that.shipName = that.shippCompany[i].name
                                    that.showShipName = that.shippCompany[i].name
                                }
                            }
                        }else{
                            that.shippCompany = []
                            that.shipName = ''
                            that.showShipName = ''
                        }
                    }
                },
                error: function(e) {}
            });
        },

        //无mmsi号 根据船名调取mmsi号
        getMmsi(){
            var that = this
            that.loading = true
            $.ajax({
                url:this.GLOBAL.url + "schedules/web/vessels?kw=" + this.shipName,
                type: "GET",
                headers: {
                    Authorization: this.getToken()
                },
                beforeSend: function() {},
                success: function(data) {
                    if (data.status == 1) {
                        if(data.content && data.content.length > 0){
                            var newShip = []
                            for (let p = 0; p < data.content.length; p++) {
                                if(decodeURI(that.shipName).replace(/\s/g,'').toUpperCase() == data.content[p].name.replace(/\s/g,'').toUpperCase()){
                                    newShip.push(data.content[p])
                                }
                            }
                            if(newShip.length > 0){
                                newShip = newShip.sort(that.compare('lasttime'))
                                that.mmsi = newShip[newShip.length - 1].mmsi
                                that.getShipInfo()
                            }else{
                                that.loading = false
                            }
                        }else{
                            that.loading = false
                            console.log('找不到此mmsi号 请维护')
                        }
                    }
                },
                error: function(e) {}
            });
        },

        //返回详情页
        goBack(){
            var that = this
            if(that.detailInfor.cnshaTrack == '1'){ //1是上海港区
                this.$router.push({
                     path: `/port-cnsha-detail/${that.detailInfor.referenceno}/${that.paramId}`,
                })
            }else if(that.detailInfor.cnshaTrack == '2'){ //2 是跟踪
                this.$router.push({
                     path: `/track-detail/${that.detailInfor.referenceno}/${that.paramId}`,
                })
            }else if(that.detailInfor.POLPOD){ //代表是船期列表进来的
                this.$router.push({
                    path: `/route/${that.detailInfor.POLPOD}/${that.detailInfor.id}`
                });
            }
            
        },

        /**下面为页面布局改变 或者页面盒子移动效果**/
        //移动input框 和 船舶信息框
        narrow(){
            this.isPackUp = !this.isPackUp

            //收起
            if(this.isPackUp){
                $("#main_select").animate({
                    left:'-329px',
                },800)

                // 箭头旋转180
                $("#icon_jian").css({
                    'transform':'rotate(180deg)'
                },800)

                if(this.isInforShip){ //代表有船舶信息
                    $("#Infor_content").animate({
                        left:'-370px',
                    },800)
                }
                if(this.isShowInput){
                    $("#input_text").animate({
                        left:'-400px',
                    },800)
                }
            }else{
                //展开
                $("#main_select").animate({
                    left:'20px',
                },800)

                $("#icon_jian").css({
                    'transform':'rotate(0deg)'
                },800)

                if(this.isInforShip){ //代表有船舶信息
                    $("#Infor_content").animate({
                        left:'20px',
                    },800)
                }
                if(this.isShowInput){
                    $("#input_text").animate({
                        left:this.isGoBack ? '40px' : '20px',
                    },800)
                }
            }
        },
        
        /**窗口改变 这个页面的布局页改变**/
        getResize(){
            var that = this
            if(document.documentElement.clientWidth < 1200){
                that.styleWidth = 1200 + 'px'
            }else{
                that.styleWidth = document.documentElement.clientWidth + 'px'
            }
            if(document.documentElement.clientHeight < 0){
                that.styleHeight = 0 + 'px'
            }else{
                that.styleHeight = document.documentElement.clientHeight - 57 + 'px'
            }
            that.inforHeight = document.documentElement.clientHeight - 57 - 10 - 76 + 'px'
            window.onresize = () => {
                return (() => {
                    if(document.documentElement.clientWidth < 1200){
                        that.styleWidth = 1200 + 'px'
                    }else{
                        that.styleWidth = document.documentElement.clientWidth + 'px'
                    }
                    if(document.documentElement.clientHeight < 0){
                        that.styleHeight = 0 + 'px'
                    }else{
                        that.styleHeight = document.documentElement.clientHeight - 57 + 'px'
                    }
                    if($('#input_text')){
                        $('#input_text').css({
                            'max-height': document.documentElement.clientHeight - 125 - 10 - 66 + 'px'
                        })
                    }
                    that.inforHeight = document.documentElement.clientHeight - 57 - 10 - 76 + 'px'
                })();
            }
        },
    },
    created() {
        this.getResize()
    },
    watch:{
        //最多10条数据
        tenShipData:{
            handler: function(val){
                if(val.length > 10){
                    // val.pop()
                }
            },
            immediate: true
        }
    },
    mounted() {
        this.getResize()
        if(this.userInfo){//登录
            //传进来的值分为单个点击找船 还是 多个点击找船
            if(sessionStorage.getItem('isTest')){
                sessionStorage.removeItem('isTest')
                this.$router.push({ query: {} })
            }

            if(this.$route && this.$route.query && this.$route.query.id){
                sessionStorage.setItem('isTest', true)
                this.paramId = this.$route.query.id
                var paramDate = this.getParams(this.$route.query.id)
                this.detailInfor = paramDate
                //是否显示返回按钮
                this.isGoBack = paramDate.isGoBack
                if(paramDate.isDan){ //多条船
                    if(paramDate.shipdt){
                        return this.getShipParmas(paramDate.shipdt)
                    }
                }else{ //单条船
                    if(paramDate.shipdt){
                        this.shipName = paramDate.shipdt //船名
                        this.showShipName = JSON.parse(JSON.stringify(paramDate.shipdt))
                        this.mmsi =  paramDate.mmsi ? parseInt(paramDate.mmsi) : '' //mmsi
                        if(paramDate.mmsi){ //如果有传mmsi号 则直接调船舶信心接口
                            this.getShipName()
                            this.getShipInfo()
                        }else{
                            this.getMmsi()
                        }
                        return;
                    }
                }
            }
        }
        //查看接口返回值
        if(this.$route && this.$route.params){
            if(this.$route.params.shipdt){
                this.shipName = this.$route.params.shipdt //船名
                this.showShipName = JSON.parse(JSON.stringify(this.$route.params.shipdt))
                this.mmsi =  this.$route.params.mmsi ? parseInt(this.$route.params.mmsi) : '' //mmsi
                if(this.$route.params.mmsi){ //如果有传mmsi号 则直接调船舶信心接口
                    this.getShipName()
                    this.getShipInfo()
                }else{
                    this.getMmsi()
                }
            }
        }
    },
    destroyed() {
        sessionStorage.removeItem('isTest')
    }
}
</script>