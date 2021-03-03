<style lang="scss" scoped>
    #shipdt{

    }
    .shipdt_content {
        position: relative;
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
            border-radius: 8px;
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
            border-radius: 8px;
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
            width: 89%;
            height: 40px;
        }
        .el-input__inner{
            border-radius: 6px;
            padding-right: 60px !important;
            padding-left: 19px !important;
             cursor:text
        }
        .el-input__suffix{
            right: 40px;
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
    .zwsj_content{
        position: absolute;
        width: 370px;
        left: 20px;
        top: 76px;
        max-height: 400px;
        overflow: auto;
        background-color: #fff;
        box-shadow: 0px 8px 40px 0px
                rgba(0, 0, 0, 0.2);
        border-radius: 6px;
    }
    .zwsh_title{
        display: flex;
        align-items: center;
        font-size: 14px;
        font-weight: 600;
        width: 100%;
        height: 46px;
        background-color: #072c4c;
        opacity: 0.8;
        color: #fff;
        padding: 0px 20px 0px 20px;
    }
    .zwsh_content{
        width: 100%;
        height: 218px;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        .image_zwsj{
            width: 181px;
            height: 107px;
            margin-top: 46px;
        }
        .zwsj_P{
            font-size: 12px;
            color: #282828;
            margin-top: 15px;
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
        <div class="shipdt_content">
            <div class="shipLoading" v-if="loading">
                <div class="loading_div">
                    <i class="el-icon-loading loding_icon"></i>
                    <p class="icon_p">{{$t('route.dataLoading')}}</p>
                </div>
            </div>
            <div class="shipdt_main" :style="{width: styleWidth,height:styleHeight}">
                <!-- 下拉框 -->
                <div class="main_select" id="main_select" v-if="isSelect">
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
                    <InforShip @clickEcharts='clickEcharts' @clickRoute='clickRoute' @clickShipMap='clickShipMap' @delectDate="delectDate" @parentValue="parentValue" :shipObject="shipObject" :shipTraje="shipTraje"  :tenShipData="tenShipData" :isroute=true ref="InforShip"></InforShip>
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
export default {
    name: "Mine",
    data() {
        return {
            existToken: "",
            username: '',
            password: '',
            loading:false,
            styleWidth: '', //可视区宽度
            styleHeight: '', //可视区高度
            shipName: '',//船名
            showShipName: '',// 无数据时 要显示的船名
            mmsi: '', //mmsi
            isShowInput: false, //是否显示input框
            isPackUp: false,
            isGoBack: '',
            shippCompany: [],//搜索的船公司数组
            userInfo:
                this.getCookie("authId") !== null && this.getCookie("authId") !== "" && this.getCookie("authId") !== undefined
                ? this.getCookie("authId")
                : "",
            isSelect: false,

            //船舶信息
            isInforShip: false, //是否显示船信息
            inforHeight: '', //船舶信息窗口
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

            paramDate: '',
            tranckdetail: '',

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
        //鼠标移入
        mouseover(){
            this.isOverOue = true
        },
        //鼠标移出
        mouseout(){
            this.isOverOue = false
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
        //实时输入数据获取数据
        inputSelect(val){
            var that = this
            var newVal = JSON.parse(JSON.stringify(val.replace(/\s/g, "")))
            if(this.oldVal !== newVal){
                this.oldVal = newVal
                this.$Axios.get(this.GLOBAL.url + "vessel/iframe/getVessels?kw=" + newVal,{
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
                this.$Axios.get(this.GLOBAL.url + "vessel/iframe/getVessels?kw=" + that.shipName,{
                    headers: {
                        Authorization: this.getToken()
                },
                }).then(res => {
                    if (res.data.status == 1) {
                        that.shippCompany = res.data.content
                        that.isShowInput = true
                    }else{
                        that.clearValue()
                    }
                })
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
        //获取船舶信息和船舶轨迹
        //输入框查 或者  路由第一条船
        getShipInfo(){
            this.shipName = ''
            this.loading = true
            this.clearShip()
            var that = this
            that.$Axios.all([
                that.$Axios.get(that.GLOBAL.url + "vessel/iframe/getVesselDetail?mmsi=" + that.mmsi,{
                    headers: {
                        Authorization: this.getToken()
                },}).then(res => res.data),
                that.$Axios.get(that.GLOBAL.url + "vessel/iframe/getVesselTrack?mmsi=" + that.mmsi,{
                    headers: {
                        Authorization: this.getToken()
                },}).then(res => res.data)
            ]).then(that.$Axios.spread(function (detail, track) {
                if(detail.status == 1){
                    that.shipObject = detail.content
                    that.id = detail.content.id
                }
                if(track.status == 1){
                    that.shipTraje = track.content
                }
                //接口都返回
                that.isInforShip = true
                that.loading = false
                that.tenShipData.unshift({
                    shipObject: detail.content,
                    shipTraje: track.content,
                    isZwsj: false,
                    isClick: true,
                    shipNameEn: detail.content.nameEn,
                    mmsi: detail.content.mmsi,
                })
            })).catch((error)=>{
                that.isInforShip = true
                that.loading = false
                that.tenShipData.unshift({
                    shipObject: '',
                    shipTraje: [],
                    isZwsj: true,
                    isClick: true,
                    shipNameEn: that.showShipName,
                    mmsi: that.mmsi,
                })
                that.clearShip()
            })
        },

        //掉多条船需要走的函数
        //输入框查 或者  路由第一条船
        getScottInfo(val){
            var that = this
            that.$Axios.all([
                that.$Axios.get(that.GLOBAL.url + "vessel/iframe/getVesselDetail?mmsi=" + val.mmsi,{
                    headers: {
                        Authorization: this.getToken()
                },}).then(res => res.data),
                that.$Axios.get(that.GLOBAL.url + "vessel/iframe/getVesselTrack?mmsi=" + val.mmsi,{
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
        //点击echarts关闭
        clickCloseHx(){
            this.isEcharts = false
        },
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
            this.$Axios.get(this.GLOBAL.url + "vessel/iframe/getVesselVoyage?id=" + id + '&mmsi=' + mmsi + '&startTime=' + val.startTime + '&endTime=' + val.endTime,{
                headers: {
                    Authorization: this.getToken()
            },
            }).then(res => {
                var data = res.data
                if (data.status == 1) {
                    if(data.content.length > 0){ //有数据
                        for (let i = 0; i < data.content.length; i++) {
                            data.content[i].millise = data.content[i].posTime ? new Date(data.content[i].posTime.replace(/-/g,'/')).getTime() : ''
                        }
                        that.echartsList = data.content.sort(that.compare('millise'))
                    }else{
                        that.isEcharts = false
                        that.accordPop('route.empHangx')
                        that.echartsList = []
                    }
                }else if(data.status == 0){
                    that.accordPop(data.content)
                }
            })
        },
        //排序
        compare(property){
            return function(a,b){
                var value1 = a[property];
                var value2 = b[property];
                return value1 - value2;
            }
        },
        //点击某一段的船舶获取的船舶轨迹路线
        clickShipMap(val){
            if(val.isShow){ //说明是添加的时间  该添加轨迹
                var that = this
                that.loading = true
                this.$Axios.get(this.GLOBAL.url + "vessel/iframe/getVesselVoyage?id=" + that.id + '&mmsi=' + that.mmsi + '&startTime=' + val.startTime + '&endTime=' + val.endTime,{
                    headers: {
                        Authorization: this.getToken()
                },
                }).then(res => {
                    var data = res.data
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
                    }else if(data.status == 0){
                        that.loading = false
                        that.accordPop(data.content)
                    }
                })
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
            // if(val.isZdy){ //自定义
            //     this.isRouteCont = true
            //     this.routeInfor[0] = {
            //         startTime:val.startTime,
            //         endTime:val.endTime
            //     }
            //     this.getMap(val)
            // }else{
            //     // this.routeInfor = {
            //     //     startTime:val.startTime,
            //     //     endTime:val.endTime
            //     // }
            //     this.getMap(val)
            // }
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
            this.$Axios.get(this.GLOBAL.url + "vessel/iframe/getVesselVoyage?id=" + that.id + '&mmsi=' + that.mmsi + '&startTime=' + val.startTime + '&endTime=' + val.endTime,{
                headers: {
                    Authorization: this.getToken()
            },
            }).then(res => {
                var data = res.data
                if (data.status == 1) {
                    that.loading = false
                    if(data.content.length > 0){
                        that.largeMap = data.content
                    }else{
                        that.largeMap = []
                        that.isShipShow = true
                        that.shipText = 'route.empQuri'
                    }
                }else if(data.status == 0){
                    that.loading = false
                    that.accordPop(data.content)
                }
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
        //显示提示弹窗
        accordPop(val){
            this.isShipShow = true
            this.shipText = val
        },
        //返回跟踪页
        goBack(){
            var that = this
            that.$router.push({
                path: `/track-detail/${that.tranckdetail.referenceno}/${this.paramDate}`,
            });
        },
        //调取mmsi号
        getMmsi(){
            var that = this
            this.$Axios.get(this.GLOBAL.url + "vessel/iframe/getVessels?kw=" + this.shipName,{
                headers: {
                    Authorization:  this.getToken()
            },
            }).then(res => {
                var data = res.data
                if (data.status == 1) {
                    if(data.content.length > 0){
                        data.content = data.content.sort(that.compare('lasttime'))
                        that.mmsi = data.content[data.content.length - 1].mmsi
                        that.getShipInfo()
                    }else{
                        console.log('找不到此mmsi号 请维护')
                    }
                }
            })
        },
        //轨迹对比
        traContrast(val){
            var that = this
            that.loading = true
            //当前为船舶信息接口
            this.$Axios.get(this.GLOBAL.url + "vessel/iframe/getVesselDetail?mmsi=" + val.mmsi,{
                headers: {
                    Authorization: this.getToken()
            },
            }).then(res => {
                var data = res.data
                if (data.status == 1) {
                    that.$refs.routeCont.sconed_id = data.content.id
                    that.$Axios.get(that.GLOBAL.url + "vessel/iframe/getVesselVoyage?id=" + data.content.id + '&mmsi=' + val.mmsi + '&startTime=' + val.startTime + '&endTime=' + val.endTime,{
                        headers: {
                            Authorization: this.getToken()
                    },
                    }).then(res => {
                        if (res.data.status == 1) {
                            that.loading = false
                            if(res.data.content.length > 0){
                                that.contrastMap = res.data.content
                            }else{
                                that.contrastMap = []
                                that.isShipShow = true
                                that.shipText = 'route.empQuri'
                            }
                        }else if(res.data.status == 0){
                            that.loading = false
                            that.accordPop(res.data.content)
                        }
                    })
                }else{}
            })
        },
        //清除轨迹对比
        clearContrast(){
            this.contrastMap = []
        },
        //h获取船名
        getShipName(){
            var that = this
            that.shippCompany = []
            this.$Axios.get(this.GLOBAL.url + "vessel/iframe/getVessels?kw=" + that.mmsi,{
                headers: {
                    Authorization: this.getToken()
            },
            }).then(res => {
                if (res.data.status == 1) {
                    that.shippCompany = res.data.content
                    for (let i = 0; i < that.shippCompany.length; i++) {
                        if(that.shippCompany[i].mmsi == that.mmsi){
                            that.shipName = that.shippCompany[i].name
                        }
                    }
                }
            })

        },
        //路由自带客户查的船名
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
            this.$Axios.get(this.GLOBAL.url + "vessel/iframe/getVessels?kw=" + newVal,{
                headers: {
                    Authorization: this.getToken()
            },
            }).then(res => {
                that.isSelect = true
                var data = res.data
                if (data.status == 1) {
                    if(data.content.length > 0){
                        var newContent = [] //筛选之后的船名
                        var obj = {}
                        //先把所有的数据 按照时间从小往大排
                        data.content = data.content.sort(that.compare('lasttime'))

                        //数组循环 从后往前找 进行筛选去重
                        for(var i=data.content.length-1; i >= 0; i--){
                            if(!obj[data.content[i].name]){
                                newContent.push(data.content[i])
                                obj[data.content[i].name] = true
                            }
                        }

                        that.showShipName = newContent[0].name
                        that.mmsi = newContent[0].mmsi
                        that.getShipInfo()

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
                that.isSelect = false
                if(error.response.status == 403){
                    that.$message({
                        message: that.$t('messages.contactAdmin'),
                        type: "error",
                        customClass: "base-message-zindex"
                    })
                }
                if(error.response.status == 401){
                    that.$message({
                        message: that.$t('messages.accessFail'),
                        type: "error",
                        customClass: "base-message-zindex"
                    })
                }
            })
        },
        //窗口改变
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
                that.styleHeight = document.documentElement.clientHeight + 'px'
            }
            that.inforHeight = document.documentElement.clientHeight - 10 - 76 + 'px'
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
                        that.styleHeight = document.documentElement.clientHeight + 'px'
                    }
                    if($('#input_text')){
                        $('#input_text').css({
                            'max-height': document.documentElement.clientHeight - 125 - 10 - 66 + 'px'
                        })
                    }
                    that.inforHeight = document.documentElement.clientHeight - 10 - 76 + 'px'
                })();
            }
        },
        getToken(){
            return this.existToken;
        }
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
        this.existToken = this.$route.params.basicAuth
            ? this.getVesselToken(this.$route.params.basicAuth)
            : null;

        //客户 路由本身自己携带的参数
        if (this.$route && this.$route.params && this.$route.params.shipparma) {
            this.getShipParmas(this.$route.params.shipparma);
        } else if (this.existToken) {
            this.isSelect = true;
            this.getShipParmas("");
        } else if (!this.existToken) {
            this.isSelect = false;
        }

        this.getResize();
    },
}
</script>