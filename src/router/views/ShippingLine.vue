<style lang="scss">
.shippingLineContent{
    position: relative;
    top: 57px;
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
    .nav_bar{
        display: flex;
        .nav{
            font-size: 14px;
            color: #282828;
            line-height: 34px;
            cursor: pointer;
        }
        .active{
            font-size: 13px;
            color: #072c4c;
            font-weight: 600;
        }
        i{
            font-size: 12px;
            margin: 11px 5px;
        }
    }
    .route_info{
        width: 100%;
        background: #fff;
        box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        padding: 20px 24px 24px 24px;
        margin-bottom: 14px;
        .route_info_title{
            font-size: 14px;
            color: #282828;
            line-height: 14px;
            margin-bottom: 18px;
            padding-left: 12px;
            position: relative;
            .line{
                position: absolute;
                top: 0;
                left: 0px;
                width: 3px;
                height: 14px;
                background: #072c4c;
            }
            span{
                font-weight: bold;
            }
            span:last-of-type{
                font-size: 13px;
            }
        }
        .el-table{
            color: #282828;
            font-size: 12px;
            &::before{
                background-color: #f2f2f2;
            }
            .el-checkbox__inner:hover{
                border: 1px solid #072c4c !important;
            }
            .el-checkbox__input.is-disabled .el-checkbox__inner{
                background-color: #fff;
            }
            .el-checkbox__input.is-indeterminate .el-checkbox__inner{
                background: #072c4c !important;
                border: 1px solid #072c4c !important;
            }
            .el-checkbox__input.is-checked .el-checkbox__inner{
                background: #072c4c !important;
                border: 1px solid #072c4c !important;
                color: #fff !important;
            }
            .el-checkbox__input.is-focus .el-checkbox__inner{
                border-color: #072c4c !important;
            }
            .el-table__column-filter-trigger{
                display: none;
            }
            .caret-wrapper{
                width: 14px;
            }
            .sort-caret{
                left: 4px;
            }
            .ascending .sort-caret.ascending{
                border-bottom-color: #072c4c;
            }
            .descending  .sort-caret.descending{
                border-top-color: #072c4c;
            }
            .columnPadding{
                th{
                    background: #f9fafc !important;
                    color: #282828 !important;
                    font-weight: normal !important;
                }
            }
            th.is-leaf{
                border: none;
            }
            .el-table__row:hover td{
                background: #f2f2f2 !important;
            }
            tr{
                height: 40px;
                position: relative;
                .right_arrow{
                    position: absolute;
                    left: -5px;
                    top: 11px;
                    font-size: 16px;
                    color: #072c4c;
                }
            }
            th,td{
                padding: 3px 0;
            }
            th>.cell,td>.cell{
                padding: 0 12px;
            }
            .el-select__caret{
                display: none;
            }
        }
        .show_table{
            .el-table__row{
               &:hover{
                    td{
                        background: #fff !important;
                    }
                } 
            }
        }
        .click_table{
            .el-table__row{
               &:hover{
                    cursor: pointer;
                } 
            }
        }
    }
    .bottom_map{
        width: 100%;
        height: 912px;
        background-color: #fff;
        margin-bottom: 10px;
        position: relative;
        overflow: hidden;
        .icon_left_move{
            width: 65px;
            height: 45px;         
            position: absolute;
            left: 324px;
            top: 21px;
            cursor: pointer;
            z-index: 2;
            background: transparent;
            border-radius: 0 4px 4px 0;
            display: flex;
            align-items: center;
            justify-content: center;
            .icon_jian{
                font-size: 20px;
                color: #fff;
            }
        }
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
            left: 400px;
            top: 50px;
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
            width: 350px;
            left: 20px;
            top: 75px;
            max-height: 400px;
            overflow: hidden;
            background-color: #fff;
            box-shadow: 0px 2px 12px 0px 
		rgba(0, 0, 0, 0.1);
	        border-radius: 8px;
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
            left: 400px;
            bottom: 100px;
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
    .main_select{
        width: 350px;
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
            width: 100%;
            .el-input__inner{
                border: none !important;
            }
        }
        .el-input__inner{
            border-radius: 6px;
            // padding-right: 60px !important;
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
        width: 350px;
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
}
</style>
<template>
<!-- 航线页面 -->
    <div class="shippingLine">
        <Head ref="head"></Head>
        <div ref="shippingLineContent" class="shippingLineContent">
            <div class="shipLoading" v-if="loading">
                <div class="loading_div">
                    <i class="el-icon-loading loding_icon"></i>
                    <p class="icon_p">{{$t('route.dataLoading')}}</p>
                </div>
            </div>
            <div>
                <!-- <div class="nav_bar"> -->
                    <!-- <div class="nav" v-if="source == 'Track'" @click="handleClickGzxq">{{ $t('task.TrackingDetails') }}</div> -->
                    <!-- <div class="nav" v-else @click="handleClickCqxq">{{ $t('task.ScheduleDetails') }}</div> -->
                    <!-- <i class="el-icon-arrow-right"></i> -->
                    <!-- <div class="nav active">{{routeActive.carrierName ? routeActive.disRouteCode ? routeActive.carrierName + '-' + routeActive.disRouteCode : routeActive.carrierName : ''}}</div>
                    <i class="el-icon-arrow-right"></i> -->
                    <!-- <div class="nav active" @click="handleClickCbdw">{{ $t('route.position') }}</div> -->
                <!-- </div> -->
                <div class="bottom_map">
                    <!-- 下拉框 -->
                    <div class="main_select" id="main_select">
                        <el-input v-model="shipName" :placeholder="$t('home.TenMMSIIMO')" @input="inputSelect" @focus="focusSelect" @blur="blurSelect" clearable @clear="clearValue"></el-input>
                        <div class="iconLeft" @click="narrow()">
                            <p class="icon_line"></p>
                            <i class="el-icon-caret-left icon_jian" id="icon_jian"></i>
                        </div>
                    </div>
                    <!-- input框输入的内容 -->
                    <div class="input_text" v-if="isShowInput" id="input_text" :style="isGoBack ? 'width:348px;left: 40px;' : 'width:350px;left: 20px;'" @mouseover="mouseover()" @mouseout="mouseout">
                        <ul class="input_ui" v-if="shippCompany.length > 0">
                            <li class="input_li" v-for="item in shippCompany" :key="item.mmsi" @click="clickShipM(item)" :style="mmsi == item.mmsi ? 'font-weight:600;background-color: #f2f2f2;' : ''">
                                <p>{{item.name + '(' + item.mmsi + ')'}}</p>
                            </li>
                        </ul>
                        <p v-else class="nodate">{{$t('no Date')}}</p>
                    </div>
                    <!-- <div class="icon_left_move" id="icon_left_move" v-if='isInforShip'>
                        <i class="el-icon-caret-left icon_jian" id="icon_jian" style="font-size: 20px;color: #fff;" @click="mobile()"></i>
                    </div> -->
                    <!-- 地图 -->
                    <div class="shipmaps" :style="{width: '100%',height:'100%'}">
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
                    <div class="Infor_content" v-if='isInforShip' :style="{maxHeight: '690px'}" id="Infor_content">
                        <InforShip @clickEcharts='clickEcharts' @clickRoute='clickRoute' @clickShipMap='clickShipMap' :shipObject="shipObject" :shipTraje="shipTraje" :tenShipData="tenShipData" :isroute=false ref="InforShip"></InforShip>
                    </div>
                    <div class="route_contrast" v-drag v-if="isRouteCont">
                        <div class="route_title" id="route_title">
                            <p class="title_p" id="title_p">{{$t('route.pathAnalysis')}}</p>
                            <i class="el-icon-close icon_delect" @click="clickCloseGj()"></i>
                        </div>
                        <routeCont @clickEcharts='clickEcharts' @traContrast="traContrast" @clearContrast="clearContrast" :routeInfor="routeInfor" @clickTime="clickTime" :shipObject="shipObject" @accordPop="accordPop" ref="routeCont"></routeCont>
                    </div>
                </div>
                <!-- <div class="route_info">
                    <div class="route_info_title">
                        <div class="line"></div>
                        <span>{{ $t('route.routeInfo') }}</span>
                        <span>{{'【' + (routeActive.carrierName ? routeActive.disRouteCode ? routeActive.carrierName + '-' + routeActive.disRouteCode : routeActive.carrierName : '') + '】'}}</span>
                    </div>
                    <el-table
                        :data="routeInfo"
                        style="width: 100%;"
                        :header-cell-style="{background:'#3bafda',color:'#ffffff',fontSize:'12px'}"
                        tooltip-effect="dark"
                        ref="table"
                        class="show_table"
                        :header-row-class-name="headerStyle"
                    >
                        <el-table-column prop="port" label="港口" align="left" :show-overflow-tooltip="true" min-width="60">
                            <template slot-scope="scope">
                                <span>{{scope.row.port}}</span>
                                <i class="el-icon-caret-right right_arrow" v-if="polIndex == scope.$index"></i>
                            </template>       
                        </el-table-column>
                        <el-table-column prop="terminal" label="码头" align="left" :show-overflow-tooltip="true" min-width="95">
                        </el-table-column>
                        <el-table-column prop="eta" label="ETA" align="left" :show-overflow-tooltip="true" min-width="60">   
                        </el-table-column>
                        <el-table-column prop="etd" label="ETD" align="left" :show-overflow-tooltip="true" min-width="60">
                        </el-table-column>
                        <el-table-column prop="transitTime" label="航程" align="left" :show-overflow-tooltip="true" min-width="25">
                        </el-table-column>
                    </el-table>
                </div> -->
                <!-- <div class="route_info">
                    <div class="route_info_title">
                        <div class="line"></div>{{ $t('route.shipStatus') }}
                    </div>
                    <el-table
                        :data="shipStatus"
                        style="width: 100%;"
                        :header-cell-style="{background:'#3bafda',color:'#ffffff',fontSize:'12px'}"
                        tooltip-effect="dark"
                        ref="table"
                        class="click_table"
                        @selection-change="selectionChange"
                        @row-click="tabRouteChange"
                        :header-row-class-name="headerStyle"
                    >
                        <el-table-column prop="vessel" label="船名" align="left" :show-overflow-tooltip="true" min-width="75">
                            <template slot-scope="scope">
                                <span>{{scope.row.vessel}}</span>
                                <i class="el-icon-caret-right right_arrow" v-if="(routeActive.vessel == scope.row.vessel) && (routeActive.voyage == scope.row.voyage) && (routeActive.mmsi == scope.row.mmsi)"></i>
                            </template>           
                        </el-table-column>
                        <el-table-column prop="voyage" label="航次" align="left" :show-overflow-tooltip="true" min-width="75">
                        </el-table-column>
                        <el-table-column prop="eta" label="预计到港时间" align="left" :show-overflow-tooltip="true" min-width="70">
                            <template slot-scope="scope">
                                <span>{{scope.row.eta ? scope.row.eta + getTimeWeek(scope.row.etaWeek) : '-'}}</span>
                            </template>
                        </el-table-column>
                        <el-table-column prop="etd" label="预计离港时间" align="left" :show-overflow-tooltip="true" min-width="70">
                            <template slot-scope="scope">
                                <span>{{scope.row.etd ? scope.row.etd + getTimeWeek(scope.row.etdWeek) : '-'}}</span>
                            </template>
                        </el-table-column>
                    </el-table>
                </div> -->
            </div>
            <!-- <Footer ref="footer" class="footer"></Footer> -->
        </div>
        <el-dialog
            :visible.sync="isShipShow"
            top="50%"
            custom-class='dialogCustomClass'
            center
            :show-close=false
        >
            <i class="el-icon-close closeButton"></i>
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
        page: {
            title: '船期',
        },
        data(){
            return {
                source: '',
                polIndex: '',
                routeActive: '',
                shipName: '',//船名
                isGoBack: false,
                isShowInput: false, //是否显示input框
                routeInfo: [], //航线信息
                shipStatus: [], //动态船舶
                multipleSelection: [], //选择
                isTableLoading: true, //表格内容加载loading(航线信息，船舶动态)
                isMapLoading: true, //地图内容加载loading(船舶信息，船舶轨迹)
                userId: this.getCookie("authId") != null && this.getCookie("authId") != ""? this.getCookie("authId"): "",
                userInfo:
                    this.getCookie("authId") !== null && this.getCookie("authId") !== "" && this.getCookie("authId") !== undefined
                    ? this.getCookie("authId")
                    : "",
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
                mmsi: '', //mmsi
                id:'',

                //传到船信息得数据
                tenShipData: [],

                isPackUp: false,
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
        methods: {
            //鼠标移入
            mouseover(){
                this.isOverOue = true
            },
            //鼠标移出
            mouseout(){
                this.isOverOue = false
            },
            //获取船舶定位页面数据
            getData(query){
                this.isTableLoading = true
                var that = this
                this.$Axios.get(that.GLOBAL.url + `schedules/route/docking?id=${query.staticId}&isWeb=1`,{
                    headers: {
                        Authorization: this.getToken()
                },
                }).then(res => {
                    that.isTableLoading = false
                    if(res.data.status == 1){
                        that.routeInfo = res.data.content

                        //找出第一个目的港索引
                        var podIndex = 0
                        for (let i = 0; i < res.data.content.length; i++) {
                            if(res.data.content[i].portCode == that.routeActive.podCode){
                                podIndex = i
                                break
                            }
                        }
                        
                        if(podIndex > 0){ //前提是 目的港index 要大于0
                            //先往前找起始港
                            for (let p = podIndex; p > 0; p--) {
                                if(res.data.content[p].portCode == that.routeActive.polCode){
                                    that.polIndex = p
                                    break
                                }                                    
                            }
                        }

                        //说明目的港之前无起始港
                        if(that.polIndex === ''){
                            for (let p = podIndex; p < res.data.content.length; p++) {
                                if(res.data.content[p].portCode == that.routeActive.polCode){
                                    that.polIndex = p
                                    break
                                }                                    
                            }
                        }
                    }
                }).catch((err)=>{
                    that.isTableLoading = false
                    
                })
                that.isMapLoading = false
                if(that.routeActive.mmsi){
                    that.mmsi = that.routeActive.mmsi
                    that.getShipInfo()
                }else if(that.routeActive.vessel){
                    that.getMmsi()
                }
            },
            //单独给表头添加样式
            headerStyle({row, rowIndex}) {
                return 'columnPadding'
            },
            //全选
            selectionChange(val) {
            },
            //点击切换船舶动态
            tabRouteChange(row){
                this.routeActive.vessel = row.vessel
                this.routeActive.voyage = row.voyage
                this.routeActive.mmsi = row.mmsi
                if(row.mmsi){
                    this.mmsi = row.mmsi
                    this.getShipInfo()
                }else{
                    this.getMmsi()
                }
            },
            //点击船期详情
            handleClickCqxq(){
                if(this.userId){
                    if(this.$route.params.id){
                        this.$router.push({
                        path: `/route-detail/${this.$route.params.id}`,
                        });
                    }
                }else{ //此时应该跳到登录页
                    this.$router.push({
                        path: '/Login',
                    });        
                }
            },
            //点击跟踪详情
            handleClickGzxq(){
            //     if(this.userId){
            //         if(this.$route.query && this.$route.query.detailparams && this.$route.query.detailquery){
            //             var pol = this.$route.query.detailparams.pol ? this.$route.query.detailparams.pol : 'LiNone'// 装船港
            //             var referenceno = this.$route.query.detailparams.referenceno ? this.$route.query.detailparams.referenceno : 'LiNone' // 提单号
            //             var carriercd = this.$route.query.detailparams.carriercd ? this.$route.query.detailparams.carriercd : 'LiNone' // 船公司
            //             var datatype = this.$route.query.detailparams.datatype ? this.$route.query.detailparams.datatype : 'LiNone' // 0:箱跟踪; 1:船跟踪
            //             var voyageId = this.$route.query.detailparams.voyageId ? this.$route.query.detailparams.voyageId : 'LiNone'  // 航次Id
            //             var currentnode = this.$route.query.detailparams.currentnodeStr ? this.$route.query.detailparams.currentnodeStr : 'LiNone'

            //             var query = this.$route.query.detailquery.query //代表当前是真实数据的详情页点过去的
            //             // let routeUrl = this.$router.resolve({
            //             this.$router.push({
            //                  path: `/TrackDetail/${pol}/${referenceno}/${carriercd}/${datatype}/${voyageId}/${currentnode}`,
            //                  query: {
            //                     query: query, //携带的参数
            //                     clickHeaderIndex: this.$route.query.detailquery.clickHeaderIndex, //
            //                     xmapProps:this.$route.query.xmapProps
            //                 }
            //             });
            //         }
            //     }else{ //此时应该跳到登录页
            //         this.$router.push({
            //             path: '/Login',
            //         });        
            //     }
            },
            //点击船舶定位
            handleClickCbdw(){

            },
            //转换周次
            getTimeWeek(week){
                var weekDay = [
                    this.$t('list.mons'), 
                    this.$t('list.tues'),
                    this.$t('list.weds'), 
                    this.$t('list.thus'),
                    this.$t('list.fris'), 
                    this.$t('list.sats'),
                    this.$t('list.suns')
                ];
                var c = '(' + weekDay[week-1] + ')'
                return c
            },
            //获取船舶信息和船舶轨迹
            getShipInfo(){
                this.isMapLoading = true
                var that = this
                this.clearShip()
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
                    //接口都返回
                    that.isInforShip = true
                    that.isMapLoading = false
                    if (detail.status == 1) {
                        that.shipObject = detail.content
                        that.id = detail.content.id
                    }
                    if (track.status == 1) {
                        that.shipTraje = track.content
                    }
                    var dataDa = []
                    dataDa.unshift({
                        shipObject: detail.content,
                        shipTraje: track.content,
                        isZwsj: false,
                        isClick: true,
                        shipNameEn: detail.content.nameEn,
                        mmsi: detail.content.mmsi
                    })
                    that.tenShipData = dataDa
                })).catch((error)=>{
                    that.isInforShip = true
                    that.isMapLoading = false
                    var dataDa = []
                    dataDa.unshift({
                        shipObject: '',
                        shipTraje: [],
                        isZwsj: true,
                        isClick: false,
                        shipNameEn: that.shipName,
                        mmsi: that.mmsi,
                    })
                    that.tenShipData = dataDa
                    that.clearShip()
                })
            },
            //清除船信息
            clearShip(){
                //重新获取数据 所有东西清空
                this.$refs.shipMap.fitMarker = []
                this.shipmapList = []
                this.largeMap = []
                this.contrastMap = []
                this.shipObject = {} //船舶信息
                this.shipTraje = [] //船舶轨迹
            },
            //点击echarts关闭
            clickCloseHx(){
                this.isEcharts = false
            },
            //点击船信息图标出现echarts图表
            clickEcharts(val){
                this.isEcharts = true
                var that = this
                var id = that.id
                var mmsi = that.mmsi
                if(val.isRoute == 2){ //说明是船舶轨迹窗口出来的
                    id = val.id
                    mmsi = val.mmsi
                }

                this.$Axios.get(this.GLOBAL.url + "schedules/web/vessel/voyage?id=" + id + '&mmsi=' + mmsi + '&startTime=' + val.startTime + '&endTime=' + val.endTime,{
                    headers: {
                        Authorization: this.getToken()
                },
                }).then(res => {
                    if(res.data.status == 1){
                        if(res.data.content.length > 0){ //有数据
                            for (let i = 0; i < res.data.content.length; i++) {
                                res.data.content[i].millise = res.data.content[i].posTime ? new Date(res.data.content[i].posTime).getTime() : ''
                            }
                            that.echartsList = res.data.content.sort(that.compare('millise'))
                        }else{
                            that.isEcharts = false
                            that.accordPop('route.empHangx')
                            that.echartsList = []
                        }
                    }
                }).catch((err)=>{
                    
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
                    that.isMapLoading = true
                    this.$Axios.get(this.GLOBAL.url + "schedules/web/vessel/voyage?id=" + that.id + '&mmsi=' + that.mmsi + '&startTime=' + val.startTime + '&endTime=' + val.endTime,{
                        headers: {
                            Authorization: this.getToken()
                    },
                    }).then(res => {
                        if(res.data.status == 1){
                            if(res.data.content.length > 0){
                                that.shipmapList.push({
                                    currentIndex: val.index,
                                    startPlace: val.startPlace,
                                    endPlace: val.endPlace,
                                    startPlaceTime: val.startPlaceTime,
                                    endPlaceTime: val.endPlaceTime,
                                    currentList: res.data.content //当前点击的数组
                                })
                            }else{
                                that.isShipShow = true
                                that.shipText = 'route.empQuri'
                            }
                            that.isMapLoading = false
                        }
                    }).catch((err)=>{
                        
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
                that.isMapLoading = true
                this.$Axios.get(this.GLOBAL.url + "schedules/web/vessel/voyage?id=" + that.id + '&mmsi=' + that.mmsi + '&startTime=' + val.startTime + '&endTime=' + val.endTime,{
                    headers: {
                        Authorization: this.getToken()
                },
                }).then(res => {
                    if(res.data.status == 1){
                        console.log(res.data,'getMap')
                        that.isMapLoading = false
                        if(res.data.content.length > 0){
                            that.largeMap = res.data.content                        
                        }else{
                            that.largeMap = []
                            that.isShipShow = true
                            that.shipText = 'route.empQuri'
                        }
                    }
                }).catch((err)=>{
                    
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
            //显示提示弹窗
            accordPop(val){
                this.isShipShow = true
                this.shipText = val
            },
            //轨迹对比
            traContrast(val){
                var that = this
                that.isMapLoading = true

                //当前为船舶信息接口
                that.$Axios.get(that.GLOBAL.url + "schedules/web/vessel/detail?mmsi=" + val.mmsi,{
                    headers: {
                        Authorization: this.getToken()
                },
                }).then(res => {
                    var data = res.data
                    if (data.status == 1) {
                        that.$refs.routeCont.sconed_id = data.content.id
                        that.$Axios.get(that.GLOBAL.url + "schedules/web/vessel/voyage?id=" + data.content.id + '&mmsi=' + val.mmsi + '&startTime=' + val.startTime + '&endTime=' + val.endTime,{
                            headers: {
                                Authorization: this.getToken()
                        },
                        }).then(res => {
                            if (res.data.status == 1) {
                                that.isMapLoading = false
                                if(res.data.content.length > 0){
                                    that.contrastMap = res.data.content                        
                                }else{
                                    that.contrastMap = []
                                    that.isShipShow = true
                                    that.shipText = 'route.empQuri'
                                }
                            }
                        }).catch((err)=>{
                            
                        })
                    }else{}
                })
            },
            //调取mmsi号
            getMmsi(){
                var that = this
                this.$Axios.get(this.GLOBAL.url + "schedules/web/vessels?kw=" + this.routeActive.vessel,{
                    headers: {
                        Authorization: this.getToken()
                },
                }).then(res => {
                    if(res.data.status == 1){
                        console.log(res.data,'res.data')
                        if(res.data.content && res.data.content.length > 0){
                            res.data.content = res.data.content.sort(that.compare('lasttime'))
                            that.mmsi = res.data.content[res.data.content.length - 1].mmsi
                            that.getShipInfo()
                        }else{
                            that.isMapLoading = false
                            console.log('找不到此mmsi号 请维护')
                        }
                    }
                }).catch((err)=>{
                    
                })
            },
            //清除轨迹对比
            clearContrast(){
                this.contrastMap = []
            },
            //平移
            mobile(){
                this.isPackUp = !this.isPackUp

                //收起
                if(this.isPackUp){
                    // 箭头旋转180
                    $("#icon_left_move").animate({
                        left:0,
                    })
                    $("#icon_jian").css({
                        'transform':'rotate(180deg)',
                    })

                    if(this.isInforShip){ //代表有船舶信息
                        $("#Infor_content").animate({
                            left:'-350px',
                        })
                    }
                    $("#icon_left_move").css({
                        background: '#395670',
                    })
                }else{
                    //展开
                    $("#icon_left_move").animate({
                        left:'324px',
                    })
                    $("#icon_jian").css({
                        'transform':'rotate(0deg)',
                    })

                    if(this.isInforShip){ //代表有船舶信息
                        $("#Infor_content").animate({
                            left:'20px',
                        })
                    }
                    $("#icon_left_move").css({
                        background: 'transparent'
                    })
                }

            },
             /**下面为页面布局改变 或者页面盒子移动效果**/
        //移动input框 和 船舶信息框
        narrow(){
            this.isPackUp = !this.isPackUp

            //收起
            if(this.isPackUp){
                $("#main_select").animate({
                    left:'-312px',
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
                //船信息是否消失
        showInfr(){
            if(this.tenShipData.length > 0){
                //说明有查询记录
                this.isInforShip = true
            }else{
                this.isInforShip = false
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
        //清除input框值
        clearValue(){
            this.shipName = ''
            this.mmsi = ''
            this.shippCompany = []
            this.isOverOue = false
            this.isShowInput = false
            this.showInfr()
        },
        blurSelect(){
            if(!this.isOverOue){ //鼠标只有移出下拉框 才能直接消失
                this.isShowInput = false
            }
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
                    if(this.shipName == this.tenShipData[j].shipNameEn && this.mmsi == this.tenShipData[j].mmsi){ //说明是同一条船 则
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
        },
        computed: {
            language(){
                return localStorage.getItem('language');
            },
            loading(){
                if(!this.isTableLoading && !this.isMapLoading){
                    return false
                }else{
                    return true
                }
            }
        },
        watch: {
            language : {
                immediate: true,
                handler(newVal){
                    if(newVal == '语言'){
                        this.lang = "zh-CN";
                        this.$i18n.locale = this.lang; //关键语句
                    }else if(newVal == 'language'){
                        this.lang = "en-US";
                        this.$i18n.locale = this.lang; //关键语句
                    }
                }
            },
        },
        mounted(){
            if(this.userInfo){ //登录
            var paramDate = this.getParams(this.$route.params.id)
            this.shipName = paramDate.shipdt //船名
            }else{ //未登录的时候跳到登录页
                this.$router.push({
                    path: '/Login'
                });
            }
            if(this.$route.params && this.$route.params.id){
                var paramDate = this.getParams(this.$route.params.id)
                this.routeActive = paramDate
                this.getData(paramDate)
                this.source = paramDate.source
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
    };
</script>

<style lang="scss" scoped>

</style>