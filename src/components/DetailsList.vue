<template>
    <div>
        <!-- <Loading v-if="loading" style="z-index:9999"></Loading> -->
        <div class="header">
            <p class="company" v-title="datailInfometionList.pol ? datailInfometionList.pol.toUpperCase() : ''">{{datailInfometionList.pol ? datailInfometionList.pol.toUpperCase() : '--'}}</p>
            <p class="sanjiao"><span></span></p>
            <p class="company" v-title="datailInfometionList.pod ? datailInfometionList.pod.toUpperCase() : ''">{{datailInfometionList.pod ? datailInfometionList.pod.toUpperCase() : '--'}}</p>
            <p class="HCTime">{{ $t('details.TotalVoyage')}}：{{datailInfometionList.hangcTime && datailInfometionList.hangcTime > 0 ? datailInfometionList.hangcTime + $t('details.day') : $t('details._day')}}</p>
        </div>
        <div class="main">
            <div class="main_left">
                <el-timeline class="timeline-timeline">
                    <el-timeline-item
                        v-for="(activity, index) in linerTrackStatus"
                        :key="index"
                        type="primary"
                        color="#26b4b2"
                        class="timeline-item line_active"
                        size="normal"
                    >
                        <div class="item-2 con_left">
                        <!-- 大节点标题 -->
                            <div class="item-3">
                            <div class="item-3 timeLineTitle" v-if=" $i18n.locale == 'zh-CN'">{{activity.basePortCn ? activity.basePortCn : '-'}}</div>
                            <div class="item-3 timeLineTitle" v-if=" $i18n.locale == 'en-US'">{{activity.basePortEn ? activity.basePortEn : '-'}}</div>
                            </div>
                            <!-- 小节点部分 -->
                            <ul class="item-4">
                            <li v-if="index == 0 || index == linerTrackStatus.length - 1" class="dataList yuji" >
                                <!-- 小圆点 -->
                                <span class="innerBot"></span>
                                <!-- 计划到港/计划离港 -->
                                <span class="lablePlace" v-if="activity.str">{{ $t('PlannedArrival')}}</span>
                                <span class="lablePlace" v-else>{{ $t('PlannedDeparture')}}</span>
                                <span class="lableTime">{{ activity.str !== '计划到港' ? getTimeDay(datailInfometionList.staticEtdDate) : getTimeDay(datailInfometionList.staticEtaDate)}}</span>
                                
                                
                            </li>
                            <li class="dataList zuixin" v-if="index == 0 || index == linerTrackStatus.length - 1">
                                <span style="margin-right: 10px;">{{ $t('details.Estimated')}}</span>
                                <!-- 预计时间 -->
                                <span>{{ activity.str !== '计划到港' ? getTimeDay(activity.etd) : getTimeDay(activity.eta)}}</span>
                                <!-- 状态：准点，延误，提前 -->
                                <div v-if="activity.str !== '计划到港'" style="display:inline-block">
                                    <span v-if="isLate == 0" class="stateRoute zhundian">{{ $t('list.onTime') }}</span>
                                    <span v-else-if="isLate == 1 && $i18n.locale == 'zh-CN' && datailInfometionList.differDay != 0" class="stateRoute yanwu">{{'延误' + datailInfometionList.differDay + '天'}}</span>
                                    <span v-else-if="isLate == 1 && $i18n.locale == 'zh-CN' && datailInfometionList.differDay == 0" class="stateRoute zhundian">{{ $t('list.onTime') }}</span>
                                    <span v-else-if="isLate == 1 && $i18n.locale == 'en-US'" class="stateRoute yanwu">{{'Delay' + datailInfometionList.differDay + 'day'}}</span>
                                    <span v-else-if="isLate == 2 && $i18n.locale == 'zh-CN' && datailInfometionList.differDay != 0" class="stateRoute zhundian">{{'提前' + datailInfometionList.differDay + '天'}}</span>
                                    <span v-else-if="isLate == 2 && $i18n.locale == 'zh-CN' && datailInfometionList.differDay == 0" class="stateRoute zhundian">{{ $t('list.onTime') }}</span>
                                    <span v-else-if="isLate == 2 && $i18n.locale == 'en-US'" class="stateRoute zhundian">{{'Early' + datailInfometionList.differDay + 'day'}}</span>
                                </div>
                                <div v-else style="display:inline-block">
                                    <span v-if="getDays(datailInfometionList.staticEtaDate,activity.eta) === 0" class="stateRoute zhundian">{{ $t('list.onTime') }}</span>
                                    <span v-else-if="getDays(datailInfometionList.staticEtaDate,activity.eta) < 0 && $i18n.locale == 'zh-CN' && getDays(datailInfometionList.staticEtaDate,activity.eta) != 0" class="stateRoute yanwu">{{'延误' + Math.abs(getDays(datailInfometionList.staticEtaDate,activity.eta)) + '天'}}</span>
                                    <span v-else-if="getDays(datailInfometionList.staticEtaDate,activity.eta) < 0 && $i18n.locale == 'en-US'" class="stateRoute yanwu">{{'Delay' + Math.abs(getDays(datailInfometionList.staticEtaDate,activity.eta)) + 'day'}}</span>
                                    <span v-else-if="getDays(datailInfometionList.staticEtaDate,activity.eta) > 0 && $i18n.locale == 'zh-CN' && getDays(datailInfometionList.staticEtaDate,activity.eta) != 0" class="stateRoute zhundian">{{'提前' + Math.abs(getDays(datailInfometionList.staticEtaDate,activity.eta)) + '天'}}</span>
                                    <span v-else-if="getDays(datailInfometionList.staticEtaDate,activity.eta) > 0 && $i18n.locale == 'en-US'" class="stateRoute zhundian">{{'Early' + Math.abs(getDays(datailInfometionList.staticEtaDate,activity.eta)) + 'day'}}</span>
                                </div>
                            </li>
                            </ul>
                            <!-- 船信息表格 -->
                            <div class="vessel_icon">
                                <p v-if="index !== linerTrackStatus.length-1 && activity.isShowVess" class="vessel" v-title="$t('details.vessel') + '/' + $t('details.voyage') + ':' +activity.vesselInfo.vessel + '/' +activity.vesselInfo.voyage"
                                >{{ $t('details.vessel') }}/{{ $t('details.voyage') }}:{{activity.vesselInfo.vessel}}/{{activity.vesselInfo.voyage}}</p>
                                <!-- 节点间图标 -->
                                <div v-if="index !== linerTrackStatus.length - 1 && activity.flag && activity.isShowVess" >
                                    <img src="../assets/images/cargo/che.png" class="image" v-if="activity.flag.toUpperCase() == 'TRUCK'">
                                    <img src="../assets/images/cargo/tielu.png" class="imageRailway" v-if="activity.flag.toUpperCase() == 'RAIL'">
                                    <img src="../assets/images/details/shipHover.png" class="imageLine" v-if="activity.flag.toUpperCase() == 'FEEDER'" @click="gotoShip(index,activity)">
                                    <img src="../assets/images/details/shipHover.png" class="imageLine" v-if="activity.flag.toUpperCase() == 'LINE'" @click="gotoShip(index,activity)">
                                </div>
                            </div>
                            <!-- 途经港口 -->
                            <div class="wayPort" v-if="!activity.str">
                                <div class="wayPort_high" v-if="activity.docking.length > 0" @click="() => $set(activity, 'routeShow', !activity.routeShow)" style="cursor: pointer;">
                                    {{ activity.currentRoute.disPlayName + "航线" + " 经过" + activity.docking.length  + "个港口"}}
                                    <img src="../assets/images/details/sort.png" alt="" style="margin-left:10px;">
                                </div>
                                <ul class="item-4 passLine" v-for="(item,index) in activity.docking" :key="index" v-show="activity.routeShow">
                                    <li>
                                        <span> {{item}}</span>
                                    </li>
                                </ul>
                            </div>
                          
                        </div>
                    </el-timeline-item>
                    </el-timeline>  
            </div>
            <div class="main_right">
                <div class="main_right_item" v-if="linerTrackStatus[0] && linerTrackStatus[0].flag !== 'FEEDER'">
                    <div>
                        <p>{{ $t('details.FirstVessel') }}</p>
                        <p :class="linerTrackStatus[0].vesselInfo.vessel? 'have' : 'nohave'">{{linerTrackStatus[0].vesselInfo.vessel ? linerTrackStatus[0].vesselInfo.vessel : '--'}}</p>
                    </div>
                    <div>
                        <p>IMO</p>
                        <p :class="linerTrackStatus[0].vesselInfo.imo? 'have' : 'nohave'">{{linerTrackStatus[0].vesselInfo.imo ? linerTrackStatus[0].vesselInfo.imo : '--'}}</p>
                    </div>
                    <div>
                        <p>{{ $t('details.master') }}</p>
                        <p :class="linerTrackStatus[0].vesselInfo.authority? 'have' : 'nohave'">{{linerTrackStatus[0].vesselInfo.authority ? linerTrackStatus[0].vesselInfo.authority : '--'}}</p>
                    </div>
                    <div>
                        <p>{{ $t('details.built') }}</p>
                        <p :class="linerTrackStatus[0].vesselInfo.buildDate? 'have' : 'nohave'">{{linerTrackStatus[0].vesselInfo.buildDate ? linerTrackStatus[0].vesselInfo.buildDate.split(' ')[0] : '--'}}</p>
                    </div>
                    <div>
                        <p>{{ $t('details.volume') }}</p>
                        <p :class="linerTrackStatus[0].vesselInfo.ctnrVolume? 'have' : 'nohave'">{{linerTrackStatus[0].vesselInfo.ctnrVolume ? linerTrackStatus[0].vesselInfo.ctnrVolume : '--'}}</p>
                    </div>
                    <div>
                        <p>{{ $t('details.operator') }}</p>
                        <p :class="linerTrackStatus[0].vesselInfo.operator? 'have' : 'nohave'">{{linerTrackStatus[0].vesselInfo.operator ? linerTrackStatus[0].vesselInfo.operator : '--'}}</p>
                    </div>

                </div>
                <div v-else-if="linerTrackStatus[0] && linerTrackStatus[0].flag === 'FEEDER'" class="main_right_item">
                     <div>
                        <p>{{ $t('details.FirstVessel') }}</p>
                        <p :class="linerTrackStatus[1].vesselInfo.vessel? 'have' : 'nohave'">{{linerTrackStatus[1].vesselInfo.vessel ? linerTrackStatus[1].vesselInfo.vessel : '--'}}</p>
                    </div>
                    <div>
                        <p>IMO</p>
                        <p :class="linerTrackStatus[1].vesselInfo.imo? 'have' : 'nohave'">{{linerTrackStatus[1].vesselInfo.imo ? linerTrackStatus[1].vesselInfo.imo : '--'}}</p>
                    </div>
                    <div>
                        <p>{{ $t('details.master') }}</p>
                        <p :class="linerTrackStatus[1].vesselInfo.authority? 'have' : 'nohave'">{{linerTrackStatus[1].vesselInfo.authority ? linerTrackStatus[1].vesselInfo.authority : '--'}}</p>
                    </div>
                    <div>
                        <p>{{ $t('details.built') }}</p>
                        <p :class="linerTrackStatus[1].vesselInfo.buildDate? 'have' : 'nohave'">{{linerTrackStatus[1].vesselInfo.buildDate ? linerTrackStatus[1].vesselInfo.buildDate.split(' ')[0] : '--'}}</p>
                    </div>
                    <div>
                        <p>{{ $t('details.volume') }}</p>
                        <p :class="linerTrackStatus[1].vesselInfo.ctnrVolume? 'have' : 'nohave'">{{linerTrackStatus[1].vesselInfo.ctnrVolume ? linerTrackStatus[1].vesselInfo.ctnrVolume : '--'}}</p>
                    </div>
                    <div>
                        <p>{{ $t('details.operator') }}</p>
                        <p :class="linerTrackStatus[1].vesselInfo.operator? 'have' : 'nohave'">{{linerTrackStatus[1].vesselInfo.operator ? linerTrackStatus[1].vesselInfo.operator : '--'}}</p>
                    </div>
                </div>
                <div class="main_right_item main_bottom" v-if="CBJHList" v-loading="vesselPlanLoading">
                    <div class="bg" v-if="datailInfometionList.polCode !== 'CNSHA'">
                        抱歉,{{this.shipMatou}}码头暂不提供船舶计划
                    </div>
                    <div>
                        <p>{{ $t('details.cyOpen') }}</p>
                        <p :class="CBJHList.openTime? 'have' : 'nohave'" v-title="CBJHList.openTime ? getTimeDay(CBJHList.openTime) : '--'">{{CBJHList.openTime ? getTimeDay(CBJHList.openTime) : '--'}}</p>
                    </div>
                    <div>
                        <p>{{ $t('details.cyClose') }}</p>
                        <p :class="CBJHList.closeTime? 'have' : 'nohave'" v-title="CBJHList.closeTime ? getTimeDay(CBJHList.closeTime) : '--'">{{CBJHList.closeTime ? getTimeDay(CBJHList.closeTime) : '--'}}</p>
                    </div>
                    <div>
                        <p>{{ $t('details.plannedBerth') }}</p>
                        <p :class="CBJHList.ETA? 'have' : 'nohave'" v-title="CBJHList.ETA ? getTimeDay(CBJHList.ETA) : '--'">{{CBJHList.ETA ? getTimeDay(CBJHList.ETA) : '--'}}</p>
                    </div>
                    <div>
                        <p>{{ $t('details.actualBerth') }}</p>
                        <p :class="CBJHList.ATA? 'have' : 'nohave'" v-title="CBJHList.ATA ? getTimeDay(CBJHList.ATA) : '--'">{{CBJHList.ATA ? getTimeDay(CBJHList.ATA) : '--'}}</p>
                    </div>
                    <div>
                        <p>{{ $t('details.plannedDepartured') }}</p>
                        <p :class="CBJHList.ETD? 'have' : 'nohave'" v-title="CBJHList.ETD ? getTimeDay(CBJHList.ETD) : '--'">{{CBJHList.ETD ? getTimeDay(CBJHList.ETD) : '--'}}</p>
                    </div>
                    <div>
                        <p>{{ $t('details.actualDepartured') }}</p>
                        <p :class="CBJHList.ATD? 'have' : 'nohave'" v-title="CBJHList.ATD ? getTimeDay(CBJHList.ATD) : '--'">{{CBJHList.ATD ? getTimeDay(CBJHList.ATD) : '--'}}</p>
                    </div>
                    <p class="Notice">{{ '提示，数据由' + (CBJHList.terminal || '') + '码头提供,' + '靠泊码头为:' + (CBJHList.terminalCode || '') }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Loading from "@components/loading"

import {debounce} from 'lodash';

export default {

    props: {
        datailInfometionList: {
            type: Object,
            default: () => ({})
        }
    },

    data() {
        return{
            linerTrackStatus: [], //箱子详情流程
            isLate:'',
            isShow:false,
            loading : false,
            CBJHList:{},
            shipMatou:'',
            vesselPlanLoading: false
        }
    },
    components: {
    Loading
    },
    methods:{
        //处理日期时间格式
        getTimeDay (time) {
            if (time == '') {
                return '--'
            }
            var weekDay = [
                this.$t('list.suns'),
                this.$t('list.mons'), 
                this.$t('list.tues'),
                this.$t('list.weds'), 
                this.$t('list.thus'),
                this.$t('list.fris'), 
                this.$t('list.sats')
            ];
            var geS = this.getProcessTime("YY-mm-dd HH:MM",new Date(time)) //格式化时间
            var b = geS.split(' ')[0]
            var d = geS.split(' ')[1]
            var c = weekDay[new Date(time).getDay()]
            return b + ' ' + d + ' ' + '(' + c + ') '
            },
        isPassLineShow(){
            this.isShow = !this.isShow
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
        gotoShip(index,activity){
            console.log(index,activity)
            // console.log(this.datailInfometionList.__schedule)
            this.$emit('goScheduleDetails',activity);
        },
        getDays(strDateStart,strDateEnd){
            console.log(strDateStart,strDateEnd)
            var oDate1;
            var oDate2;
            var iDays;
            oDate1= strDateStart.split(' ');
            oDate1= oDate1[0].split('-');
            oDate2= strDateEnd.split(' ');
            oDate2= oDate2[0].split('-');
            var strDateS = new Date(oDate1[0], oDate1[1]-1, oDate1[2]);
            var strDateE = new Date(oDate2[0], oDate2[1]-1, oDate2[2]);
            iDays = parseInt((strDateS - strDateE ) / 1000 / 60 / 60 /24)//把相差的毫秒数转换为天数 
            console.log(iDays)
            return iDays ;
        },
        getHc(){
            //航程
            var hangcTime = ''
            hangcTime = this.datailInfometionList.editTransitTime ? this.datailInfometionList.editTransitTime : this.datailInfometionList.transTime ? this.datailInfometionList.transTime : this.datailInfometionList.totalDuration ? this.datailInfometionList.totalDuration : 0
            this.datailInfometionList['hangcTime'] = hangcTime
            this.isLate = this.datailInfometionList.isLate

        },

        getData(){
            // this.loading = true
            console.log(this.datailInfometionList);
            // this.$emit('loadingDiagio', true);
            this.$Axios.get(this.GLOBAL.url + `schedules/web/completePath?id=${this.datailInfometionList.schedule.totalId}&wayType=${this.datailInfometionList.wayType}&voyageId=${this.datailInfometionList.voyageId}`,{
            headers: {
                Authorization: this.getToken()
            },
            }).then(res => {
            if (res.data.status == 1) {
                this.linerTrackStatus = res.data.content;
                console.log(this.linerTrackStatus,'linerTrackStatus')
                if(this.linerTrackStatus.length > 0){

                    let routeIndex = 0, routeArray = this.datailInfometionList.routeCodeList || [];

                    if(this.linerTrackStatus[0].flag !== 'FEEDER'){
                        this.linerTrackStatus[this.linerTrackStatus.length-1]['str'] = '计划到港';
                        for (let i = 0; i < this.linerTrackStatus.length; i++) {
                            if (i == 0) {
                                this.linerTrackStatus[i].basePortCn = '起运港 ' + this.linerTrackStatus[i].basePort
                                this.linerTrackStatus[i].basePortEn = 'Pol ' + this.linerTrackStatus[i].basePort
                            } else if (i == this.linerTrackStatus.length-1) {
                                this.linerTrackStatus[i].basePortCn = '目的港 ' + this.linerTrackStatus[i].basePort
                                this.linerTrackStatus[i].basePortEn = 'Pod ' + this.linerTrackStatus[i].basePort
                            } else {
                                this.linerTrackStatus[i].basePortCn = '中转港 ' + this.linerTrackStatus[i].basePort
                                this.linerTrackStatus[i].basePortEn = 'TransitPort ' + this.linerTrackStatus[i].basePort
                            }
                            this.linerTrackStatus[i].isShowVess = true
                            var c = this.linerTrackStatus[i]
                            console.log(this.linerTrackStatus[i],'this.linerTrackStatus[i]')
                            //下面的是处理是否要显示船节点的信息
                            if(c.vesselInfo.vessel == '' && c.vesselInfo.voyage == '' && c.vesselInfo.imo == '' && c.vesselInfo.mmsi == '' && c.vesselInfo.ctnrVolume == '' && c.vesselInfo.buildDate == '' && c.vesselInfo.operator == ''){
                                this.linerTrackStatus[i].isShowVess = false
                            }
                            //下面处理的是 个节点应该显示的标识（显示的应该是下一个节点应该显示的标识）
                            if(this.linerTrackStatus[i+1]){
                                this.linerTrackStatus[i].flag = this.linerTrackStatus[i+1].flag ? this.linerTrackStatus[i+1].flag : '-'
                            }

                            if(!this.linerTrackStatus[i].str) {
                                this.$set(this.linerTrackStatus[i], 'currentRoute', routeArray[routeIndex++] || {});
                            }
                        }
                    }else{
                        this.linerTrackStatus[this.linerTrackStatus.length-1]['str'] = '计划到港';
                        for (let i = 0; i < this.linerTrackStatus.length; i++) {
                            if (i == 0) {
                                this.linerTrackStatus[i].basePortCn = "NANSHA [驳船]"
                                this.linerTrackStatus[i].basePortEn = "NANSHA [驳船]"
                            } else if (i == this.linerTrackStatus.length-1) {
                                this.linerTrackStatus[i].basePortCn = '目的港 ' + this.linerTrackStatus[i].basePort
                                this.linerTrackStatus[i].basePortEn = 'Pod ' + this.linerTrackStatus[i].basePort
                            } else {
                                this.linerTrackStatus[i].basePortCn = '起始港 ' + this.linerTrackStatus[i].basePort
                                this.linerTrackStatus[i].basePortEn = 'pol ' + this.linerTrackStatus[i].basePort
                            }
                            this.linerTrackStatus[i].isShowVess = true
                            var c = this.linerTrackStatus[i]
                            console.log(this.linerTrackStatus[i],'this.linerTrackStatus[i]')
                            //下面的是处理是否要显示船节点的信息
                            if(c.vesselInfo.vessel == '' && c.vesselInfo.voyage == '' && c.vesselInfo.imo == '' && c.vesselInfo.mmsi == '' && c.vesselInfo.ctnrVolume == '' && c.vesselInfo.buildDate == '' && c.vesselInfo.operator == ''){
                                this.linerTrackStatus[i].isShowVess = false
                            }
                            //下面处理的是 个节点应该显示的标识（显示的应该是下一个节点应该显示的标识）
                            if(this.linerTrackStatus[i+1]){
                                this.linerTrackStatus[i].flag = this.linerTrackStatus[i+1].flag ? this.linerTrackStatus[i+1].flag : '-'
                            }

                            if(!this.linerTrackStatus[i].str) {
                                this.$set(this.linerTrackStatus[i], 'currentRoute', routeArray[routeIndex++] || {});
                            }
                        }
                    }
                }
                } else {}
            }).catch((err)=>{
                this.$message({
                message: this.$t('messages.erverException'),
                type: "error",
                customClass: "base-message-zindex"
                })
            })


        },

        getVesselPlanMessage() {
            this.vesselPlanLoading = false;
            if(this.datailInfometionList.polCode === 'CNSHA') {
                this.vesselPlanLoading = true;
                this.$Axios.get(this.GLOBAL.url + `schedules/web/getVesselPlanMessage`,{
                    params: {
                        polcd: this.datailInfometionList.polCode,
                        vessel: this.datailInfometionList.vessel,
                    },headers: {
                        Authorization: this.getToken()
                    },
                }).then(res => {
                    console.log(res.data)
                    this.CBJHList = res.data.content || {};
                    this.$emit("loadingDiagio" , false)
                }).finally(() => this.vesselPlanLoading = false);
            } else {
                this.CBJHList = {}
                this.$emit("loadingDiagio" , false)
            }
        },

        handle() {
            if(this.datailInfometionList.polCode === 'CNDLC'){
                this.shipMatou = '大连'
            }else if(this.datailInfometionList.polCode === 'CNTXG'){
                this.shipMatou = '天津'
            }else if(this.datailInfometionList.polCode === 'CNNSA'){
                this.shipMatou = '广州'
            }else if(this.datailInfometionList.polCode === 'CNHUA'){
                this.shipMatou = '广州'
            }else if(this.datailInfometionList.polCode === 'CNNSA'){
                this.shipMatou = '上海'
            }else if(this.datailInfometionList.polCode === 'CNNGB'){
                this.shipMatou = '宁波'
            }else if(this.datailInfometionList.polCode === 'CNTAO'){
                this.shipMatou = '青岛'
            }else if(this.datailInfometionList.polCode === 'CNYTN'){
                this.shipMatou = '深圳'
            }else if(this.datailInfometionList.polCode === 'CNSHK'){
                this.shipMatou = '深圳'
            }else if(this.datailInfometionList.polCode === 'CNDCB'){
                this.shipMatou = '深圳'
            }else if(this.datailInfometionList.polCode === 'CNXMN'){
                this.shipMatou = '厦门'
            }else if(this.datailInfometionList.polCode === 'HKHKG'){
                this.shipMatou = '香港'
            }else if(this.datailInfometionList.polCode === 'CNFOC'){
                this.shipMatou = '福州'
            }else if(this.datailInfometionList.polCode === 'CNLYG'){
                this.shipMatou = '连云港'
            }else if(this.datailInfometionList.polCode === 'CNSWA'){
                this.shipMatou = '汕头'
            }else if(this.datailInfometionList.polCode === 'CNYNT'){
                this.shipMatou = '烟台'
            }
            this.getHc()
            this.getData();
            this.getVesselPlanMessage();
        }
    },
    mounted() {
        // this.$bus.$on('datailInfometionList', data => {
        //     console.log(data)
        //     this.datailInfometionList = data;
        //
        // });

        console.log(this.datailInfometionList);

        this.$watch('datailInfometionList', () => this.handle(), {immediate: true});
    },

    created() {
        // const handle = this.handle;
        // this.handle = debounce(() => {
        //     handle.call(this);
        // }, 300);
    }
}
</script>
<style lang="scss" scoped>
    .have{
        color: #282828;
    }
    .nohave{
        color: #909090 !important;
    }
    .header{
        display: flex;
        margin-bottom: 10px;
    }
    .company{
        margin-right: 20px;
        height: 18px;
        font-size: 14px;
        font-weight: bold;
        line-height: 18px;
        color: #282828;
        overflow: hidden;/*超出部分隐藏*/
        text-overflow: ellipsis;/*超出部分显示省略号*/
        white-space: nowrap;/*规定段落中的文本不进行换行 */
    }
    .HCTime{ 
        height: 18px;
        font-size: 14px;
        font-weight: 400;
        line-height: 18px;
        color: #282828;
    }
    .sanjiao{
        width: 40px;
        height: 0px;
        border: 1px solid #D1D1D1;
        background: #D1D1D1;
        margin: 7px 20px 0 0;
        position: relative;
        border-radius: 4px;
        >span{
            position: absolute;
            width: 0;
            height: 8px;
            background: #D1D1D1;
            border: 1px solid #D1D1D1;
            transform: rotate(-45deg);
            right: 0;
            top: -6px;
            border-radius: 2px;
        }
    }
    .main{
        display: flex;
        height: 400px;
        padding-top: 20px;
        overflow: auto;
        padding-left:1px;
    }
    .main::-webkit-scrollbar {
        width: 6px;
        height: 6px;
    }

    .main:hover::-webkit-scrollbar-thumb {
        background-color: #D1D1D1;
        border-radius: 3px;
        -webkit-box-shadow: inset 1px 1px 0 #D1D1D1;
    }
    .main_left{
        width: 53%;
        height: 100%;
    }
    .main_right{
        width: 47%;
        height: 100%;
        border-left: 1px solid #F2F2F2;;
    }
     .image{
        position: absolute;
        right: 10px;
        top: 20%;
        width: 22px;
        height: 14px;
    }
    .imagePin{
        position: absolute;
        right: 10px;
        top: 20%;
        width: 20px;
        height: 19px;
    }
    .imageRailway{
        position: absolute;
        right: 10px;
        top: 20%;
        margin-top: -6px;
        width: 16px;
        height: 21px;
    }
    .imageLine{
        position: absolute;
        right: 10px;
        bottom: 0;
        top: 15%;
        width: 24px;
        height: 21px;
        cursor: pointer;
    }
    .imageLine:hover{
       background: url('../assets/images/details/ship.png') center no-repeat;
        background-position:center 0;
    }
    .con_left{
        width: 100% !important;
    }
    .vessel{
        width: 100%;
        height: 33px;
        line-height: 33px;
        background: #F8F8F8;
        opacity: 1;
        border-radius: 4px;
        font-size: 12px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #909090;
        padding: 0 15% 0 5%;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
    }
    .timeLineTitle{
        height: 20px;
        font-size: 12px;
        font-family: Source Han Sans CN;
        font-weight: bold;
        line-height: 20px;
        color: #282828;
    }
    .vessel_icon{
        position: relative;
        width: 90%;
        margin: 15px 0 30px 0;
    }
    .wayPort{
        // margin-top: 30px;
        width: 100%;
    }
    .wayPort_high{
        height: 20px;
        font-size: 12px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        line-height: 20px;
        color: #282828;
        position: relative;
        img{
            position: absolute;
            top: 40%;
            width: 8px;
            height: 4px;
        }
    }
    .passLine{
        font-size: 12px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        line-height: 20px;
        color: #282828;

        li{
            height: 12px;
            font-size: 12px;
            font-family: Source Han Sans CN;
            font-weight: 400;
            line-height: 20px;
            color: #282828;
            margin-bottom: 10px;
        }
    }
    .main_right_item{
        display: flex;
        background: #F8F8F8;
        border-radius: 4px;
        width: 320px;
        height: 180px;
        flex-wrap: wrap;
        padding: 10px;
        margin: 0 15px 10px 20px;
        >div{
            width: 50%;
            p:nth-of-type(1){
                height: 20px;
                font-size: 12px;
                font-family: Source Han Sans CN;
                font-weight: 400;
                line-height: 20px;
                color: #909090;
                margin-bottom: 3px;
            }
            p:nth-of-type(2){
                height: 20px;
                font-size: 12px;
                font-family: Source Han Sans CN;
                font-weight: 400;
                line-height: 20px;
                color: #282828;
                margin-bottom: 10px;
                overflow: hidden;
                text-overflow:ellipsis;
                white-space: nowrap;
            }
        }
        >div:nth-of-type(5),>div:nth-of-type(6){
            p:nth-of-type(2){
                margin-bottom: 0px;
            }
            
        }
    }
    .lableTime{
        color: #909090;
    }
    .stateRoute{
        padding: 3px 30px;
        font-size: 12px;
        line-height: 16px;
        color: #fff;
        // border-radius: 10px;
        width: 105px;
        text-align: center;
        margin-left: 10px;
    }
    .zhundian{
        display: inline-block;
        background: url('../assets/images/details/green.svg') no-repeat center;
        background-size: cover;
        border-radius: 2px;
        display: inline-block;
        padding: 3px 0;
    }
    .el-timeline-item__node--normal{
        width: 10px !important;
        height: 10px !important;
    }
    .el-timeline-item__tail{
        left: 3px !important;
    }
    .el-timeline-item__wrapper{
        padding-left: 20px !important;
    }
    .yanwu{
        display: inline-block;
        background: url('../assets/images/details/red.svg') no-repeat center;
        background-size: cover;
        border-radius: 2px;
        display: inline-block;
        padding: 3px 0;
    }
    .lablePlace{
        color: #909090;
        margin-right: 10px;
    }
    .zuixin{
        font-size: 12px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        line-height: 20px;
        color: #282828 !important;
    }
    .yuji{
        font-size: 12px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        line-height: 20px;
        margin: 5px 0;
    }
    
    .main_bottom{
        position: relative;
        height: 190px !important;
        .bg{
            height: 190px;
            width: 100%;
            background: #f2f2f2;
            opacity: .8;
            position: absolute;
            z-index: 1;
            top: 0;
            right: 0;
            line-height: 200px;
            text-align: center;          
            font-size: 14px;
            font-family: Source Han Sans CN;
            font-weight: bold;
            color: #282828;
        }
    }
    .Notice{ 
        height: 20px;
        font-size: 12px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        line-height: 20px;
        color: #FF7676;
        overflow: hidden;
        white-space: nowrap;
        text-overflow:ellipsis;
        margin-top: 5px;
    }
    
    
</style>