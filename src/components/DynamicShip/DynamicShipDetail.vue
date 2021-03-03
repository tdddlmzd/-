<style lang="scss">
.PortScheduleDetail{
    margin: 20px 0;
    background: #fff;
    border-radius: 4px;
    border: solid 1px #f2f2f2;
    padding: 0 20px;
    .detail_title{
        padding: 20px 0 26px;
        border-bottom: solid 1px #f2f2f2;
        display: flex;
        .back_icon{
            width: 6px;
            height: 10px;
            background: url('../../assets/images/cargo/back_icon.png') no-repeat;
            background-size: 6px 10px;
            margin-right: 10px;
            margin-top: 1px;
            cursor: pointer;
            &:hover{
                background: url('../../assets/images/cargo/back_icon_hover.png') no-repeat;
                background-size: 6px 10px;
            }
        }
        .detail_title_name{
            font-size: 12px;
            line-height: 12px;
            color: #26b4b2;
            font-weight: 600;
            position: relative;
            &::after{
                content: '';
                display: block;
                position: absolute;
                bottom: -6px;
                left: 0;
                width: 100%;
                height: 2px;
                z-index: 10;
                background: #26b4b2;
            }
        }
    }
    .public_title{
        font-size: 12px;
        line-height: 12px;
        color: #282828;
        font-weight: 600;
        padding: 20px 0;
    }
    .base_info{
        .base_info_search{
            .el-row{
                margin-left: -17px;
            }
            .el-form-item{
                margin-bottom: 20px;
            }
            .el-form-item__content,.el-input--mini,.el-form-item__label,.el-input__inner{
                height: 24px;
                font-size: 12px;
                line-height: 24px;
            }
            .el-input.is-disabled .el-input__inner{
                background-color: #f2f2f2;
                border-color: #f2f2f2;
                color: #909090;
            }
            .el-select__caret{
                line-height: 24px;
            }
            .dyEtd_prefix{
                .el-input__prefix{
                    display: none;
                }
            }
            .el-input__inner{
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            .routeCode{
                font-size: 12px;
                line-height: 12px;
                width: 90%;
                color: #007ce3;
                cursor: pointer;
                position: absolute;
                top: 6px;
                left: 10px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }
        .route_btn{
            display: flex;
            flex-direction: row-reverse;
            .btn{
                width: 90px;
                height: 24px;
                border-radius: 12px;
                border: solid 1px #f2f2f2;
                font-size: 12px;
                line-height: 22px;
                color: #282828;
                text-align: center;
                cursor: pointer;
                background: #fff;
                margin-bottom: 20px;
            }
            .route_delete{
                margin-right: 10px;
                &:hover{
                    background: #f2f2f2;
                }
            }
            .route_add{
                &:hover{
                    color: #fff;
                    border: solid 1px #26b4b2;
                    background: #26b4b2;
                }
            }
        }
    }
    .Modification_record{
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
            }
            th,td{
                padding: 3px 0;
            }
            th>.cell,td>.cell{
                padding: 0 8px;
            }
            .el-input__inner{
                padding: 0 !important;
                height: 34px;
                border: none;
                font-size: 12px;
                background: rgba(0, 0, 0, 0);
                color: #282828;
            }
            .el-select__caret{
                line-height: 34px;
            }
        }
    }
    .btn_warp{
        padding: 20px 0;
        .btn_Submit{
            margin: 0 auto;
            width: 120px;
            height: 30px;
            border-radius: 15px;
            font-size: 12px;
            line-height: 30px;
            background-color: #26b4b2;
            color: #fff;
            text-align: center;
            cursor: pointer;
            &:hover{
                background-color: #51c3c1;
            }
        }
    }
    .columnPadding{
        th{
            background: #f9fafc !important;
            color: #282828 !important;
            font-weight: normal !important;
        }
    }
}
.el-dialog {
    border-radius: 4px !important;
    margin: 0 !important;
    background-color: #ffffff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .el-dialog__body{
        padding: 20px !important;
    }
}
</style>
<template>
    <div>
        <!-- 动态船舶详情页 -->
        <Loading v-if="loading"></Loading>
        <div class="PortScheduleDetail">
            <!-- 返回列表按钮 -->
            <div class="detail_title">
                <div class="back_icon" @click="goDynamicShipList"></div>
                <div class="detail_title_name">{{$t('task.VesselDetails')}}</div>
            </div>
            <!-- 基础信息表单部分 -->
            <div class="base_info">
                <div class="public_title">{{$t('task.BasicInfo')}}</div>
                <el-form
                    size="mini"
                    label-position="right"
                    :model="ruleForm"
                    ref="ruleForm"
                    label-width="80px"
                >
                    <div class="base_info_search">
                        <el-row>
                            <el-col style="width:16.6%">
                                <el-form-item :label="$t('table.pol')">
                                    <el-input v-model="ruleForm.pol" v-title="ruleForm.pol" :disabled="true"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col style="width:16.6%">
                                <el-form-item :label="$t('table.carrier')">
                                    <el-input v-model="ruleForm.companyName" v-title="ruleForm.companyName" :disabled="true"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col style="width:16.6%">
                                <el-form-item :label="$t('table.RouteCode')">
                                    <el-input readonly></el-input>
                                    <div class="routeCode" v-title="ruleForm.routeCode" @click="handleClickRouteCode">{{ruleForm.routeCode}}</div>
                                </el-form-item>
                            </el-col>
                            <el-col style="width:16.6%">
                                <el-form-item :label="$t('table.wharf')">
                                    <el-input v-model="ruleForm.terminal" v-title="ruleForm.terminal" :disabled="true"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col style="width:16.6%">
                                <el-form-item :label="$t('table.Schedule')">
                                    <el-input v-model="ruleForm.etd" v-title="ruleForm.etd" :disabled="true"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col style="width:16.6%">
                                <el-form-item :label="$t('table.type')">
                                    <el-select
                                        v-model="ruleForm.status"
                                        style="width:100%;"
                                        :placeholder="$t('table.PleaseSelect')"
                                        clearable
                                        default-first-option
                                    >
                                        <el-option
                                            v-for="item in stateList"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value"
                                        >
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col style="width:16.6%">
                                <el-form-item :label="$t('table.week')">
                                    <el-input v-model="ruleForm.weekNo" :disabled="true"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col style="width:16.6%"> 
                                <el-form-item label="ETD">
                                    <el-input v-model="ruleForm.stEtd" v-title="ruleForm.stEtd" :disabled="true"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col class="dyEtd_prefix" style="width:16.6%">
                                <el-form-item :label="$t('table.dynamicETD')" v-title="ruleForm.dyEtd" :rules="[{ required: true}]">
                                    <el-date-picker
                                        v-model="ruleForm.dyEtd"
                                        type="datetime"
                                        style="width:100%"
                                        value-format="yyyy-MM-dd HH:mm:ss"
                                        :placeholder="$t('table.PleaseSelect')"
                                    >   
                                    </el-date-picker>
                                </el-form-item>
                            </el-col>
                            <el-col style="width:16.6%"> 
                                <el-form-item :label="$t('table.vessel')" :rules="[{ required: true}]">
                                    <el-input v-model="ruleForm.vessel" v-title="ruleForm.vessel" :placeholder="$t('table.PleaseEnter')"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col style="width:16.6%">
                                <el-form-item :label="$t('table.ExportVoyage')" :rules="[{ required: true}]">
                                    <el-input v-model="ruleForm.voyage" v-title="ruleForm.voyage" :placeholder="$t('table.PleaseEnter')">
                                    </el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </div>
                </el-form>
            </div>
            <!-- 修改记录表格部分 -->
            <div class="Modification_record">
                <div class="public_title">{{$t('task.record')}}</div>
                <el-table
                    :data="recordTableData"
                    style="width: 100%;"
                    :header-cell-style="{background:'#3bafda',color:'#ffffff',fontSize:'12px'}"
                    :row-class-name="tabRowClassName"
                    tooltip-effect="dark"
                    ref="table"
                    border
                    :header-row-class-name="headerStyle"
                >
                    <el-table-column prop="updateUser" :label="$t('table.Reviser')" align="left" :show-overflow-tooltip="true" width="130">           
                    </el-table-column>
                    <el-table-column prop="updateType" :label="$t('table.RevisionPart')" align="left" :show-overflow-tooltip="true" width="120">           
                    </el-table-column>
                    <el-table-column prop="updateTime" :label="$t('table.RevisionTime')" align="left" :show-overflow-tooltip="true" width="150">           
                    </el-table-column>
                    <el-table-column prop="updateContent" :label="$t('table.RevisionContent')" align="left" :show-overflow-tooltip="true">           
                    </el-table-column>
                </el-table>
            </div>
            <div class="btn_warp">
                <div class="btn_Submit" @click="handleClickSubmit">{{$t('task.Submit')}}</div>
            </div>
        </div>
        <!-- 挂靠港口弹窗部分 -->
        <el-dialog
            class="routeDetail"
            :visible.sync="routeDetailDialogVisible"
            v-if="routeDetailDialogVisible"
            :close-on-click-modal="false"
            :close-on-press-escape="false"
            width="1040px"
            center
        >
            <PortOfCall
                :staticId="staticId"
                :polCode="polCode"
                :podCode="podCode"
                :routeCode="routeCode"
                :p2pPathId="p2pPathId"
                :scac="ruleForm.scac"
            ></PortOfCall>
        </el-dialog>
    </div>  
</template>

<script>
    import Loading from "@components/loading";
    import ThePagination from "@components/ThePagination";
    import PortOfCall from "@components/PortOfCall/PortOfCall";
    export default {
        data(){
            return {
                userId: '',
                userInfo:
                this.getCookie("authId") !== null && this.getCookie("authId") !== "" && this.getCookie("authId") !== undefined
                ? this.getCookie("authId")
                : "",
                loading: false,
                routeDetailDialogVisible: false,//航线代码弹窗
                ruleForm: {
                    pol: '',//起运港
                    companyName: '',//船公司
                    scac: '',//四字码
                    routeCode: '',//航线代码
                    terminal: '',//起始港码头
                    etd: '',//班期
                    status: '',//类型
                    weekNo: '',//周次
                    stEtd: '',//静态ETD
                    dyEtd: '',//动态ETD
                    vessel: '',//船名
                    voyage: '',//出口航次
                },
                //传给挂靠港弹窗的信息
                staticId: '',//选中的航线id
                polCode: '',
                podCode: '',
                routeCode: '',
                p2pPathId: '',
                /////////////////////
                DynamicShipData: {},//动态船舶详情
                listInfo: {}, //动态船舶列表页面搜索信息
                recordTableData: [],//修改记录列表
                weekList: [],//周次列表
                startState: 0,
                //类型
                stateList: [
                    {
                        value: 0,
                        label: "正常"
                    },
                    {
                        value: 1,
                        label: "换船"
                    },
                    {
                        value: 2,
                        label: "空班"
                    }
                ]
            }
        },
        methods: {
            //获取动态船舶详情
            getDetail(){
                this.loading = true
                this.$Axios.get(this.GLOBAL.url + `expert/dynamic/getDynamicDetails?etd=${this.DynamicShipData.etd?this.DynamicShipData.etd:''
                }&userId=${this.userId
                }&dyEtD=${this.DynamicShipData.dyEtd?this.DynamicShipData.dyEtd:''
                }&p2pPathIds=${this.DynamicShipData.p2pPathId?this.DynamicShipData.p2pPathId:''
                }&ids=${this.DynamicShipData.id?this.DynamicShipData.id:''
                }&status=${this.DynamicShipData.status}`,{
                    headers: {
                        Authorization: this.getToken()
                },
                }).then(res => {
                    if(res.data.status == 1){
                        this.ruleForm.etd = this.getMounthDay(res.data.content.etd)
                        this.recordTableData = res.data.content.records
                    }
                    this.loading = false
                }).catch((err)=>{
                    this.loading = false
                })
            },
            // 返回列表
            goDynamicShipList(){
                this.$parent.changeComponents('List')
                this.$parent.listInfo = this.listInfo
            },
            // 提交按钮
            handleClickSubmit(){
                if(this.ruleForm.weekNo == ''){
                    this.$message({//请选择周次
                        message: this.$t('task.chooseWeek'),
                        type: "warning",
                        customClass: "base-message-zindex"
                    });
                    return
                }
                if(this.startState == 2 && this.ruleForm.status == 1){
                    this.$message({//空班类型不可以改成换船类型
                        message: this.$t('task.typeChange'),
                        type: "warning",
                        customClass: "base-message-zindex"
                    });
                    return
                }
                if(this.ruleForm.status == 0 && this.ruleForm.vessel != null && this.ruleForm.vessel != ''){
                    if(this.ruleForm.vessel.toUpperCase().indexOf('TO BE') !== -1 || this.ruleForm.vessel.toUpperCase().indexOf('TBN') !== -1){
                        this.$message({//正常类型船名不可包含TO BE或者TBN
                            message: this.$t('task.NotTobeTbn'),
                            type: "warning",
                            customClass: "base-message-zindex"
                        });
                        return
                    }
                }

                if(!this.ruleForm.etd || this.ruleForm.etd == '未知'){
                    this.$message({//班期不能为空或者未知，请进入航线详情页维护
                        message: this.$t('task.scheduleEmpty'),
                        type: "warning",
                        customClass: "base-message-zindex"
                    });
                    return
                }
                if(this.ruleForm.dyEtd == '' || this.ruleForm.dyEtd == null){
                    this.$message({//请选择动态ETD
                        message: this.$t('task.chooseDyEtd'),
                        type: "warning",
                        customClass: "base-message-zindex"
                    });
                    return
                }
                if(this.ruleForm.vessel == null || this.ruleForm.vessel.replace(/\s/g,'') == ''){
                    this.$message({//请输入船名
                        message: this.$t('task.enterVessel'),
                        type: "warning",
                        customClass: "base-message-zindex"
                    });
                    return
                }
                if(this.ruleForm.voyage == null || this.ruleForm.voyage.replace(/\s/g,'') == ''){
                    this.$message({//请输入出口航次
                        message: this.$t('task.enterVoyage'),
                        type: "warning",
                        customClass: "base-message-zindex"
                    });
                    return
                }
                if(!this.DynamicShipData.id){
                    this.DynamicShipData.id = ''
                }
                this.loading = true
                this.$Axios.get(this.GLOBAL.url + `expert/dynamic/updateDynamic?ids=${this.DynamicShipData.id?this.DynamicShipData.id:''
                }&p2pPathIds=${this.DynamicShipData.p2pPathId?this.DynamicShipData.p2pPathId:''
                }&voyage=${this.ruleForm.voyage?this.ruleForm.voyage:''
                }&status=${this.ruleForm.status
                }&vessel=${this.ruleForm.vessel?this.ruleForm.vessel:''
                }&dyEtd=${this.ruleForm.dyEtd?this.ruleForm.dyEtd:''
                }&weekNo=${this.ruleForm.weekNo?this.ruleForm.weekNo:''
                }&userId=${this.userId
                }&weekNumber=${this.getMounthDay(this.ruleForm.etd)
                }&carrier=${this.ruleForm.companyName?this.ruleForm.companyName:''}`,{
                    headers: {
                        Authorization: this.getToken()
                },
                }).then(res => {
                    if(res.data.status == 1){
                        this.$message({//提交成功
                            message: this.$t('task.submitSuccessfully'),
                            type: "success",
                            customClass: "base-message-zindex"
                        });
                        this.goDynamicShipList()
                    }else if(res.data.status == 7){
                        this.$message({ //正常改成换船船名需要变化
                            message: this.$t('task.changeVessel'),
                            type: "warning",
                            customClass: "base-message-zindex"
                        });
                    }else{
                        this.$message({//数据保存失败 请重新加载页面
                            message: this.$t('task.Failed'),
                            type: "error",
                            customClass: "base-message-zindex"
                        });
                    }
                    this.loading = false
                }).catch((err)=>{
                    this.$message({//数据保存失败 请重新加载页面
                        message: this.$t('task.Failed'),
                        type: "error",
                        customClass: "base-message-zindex"
                    });
                    this.loading = false
                })
            },
            //跳转航线代码弹窗
            handleClickRouteCode(){
                this.routeDetailDialogVisible = true
                this.staticId = this.DynamicShipData.staticId
                this.routeCode = this.DynamicShipData.routeCode
                this.p2pPathId = this.DynamicShipData.p2pPathId
            },
            //单独给表头添加样式
            headerStyle({row, rowIndex}) {
                return 'columnPadding'
            },
            //表格的斑马线
            tabRowClassName({ row, rowIndex }) {
                row.index = rowIndex;
                let index = rowIndex + 1;
                if (index % 2 !== 0) {
                    return "warning-row";
                }
            },
            //处理班期
            getMounthDay(data){
                data = data + ''
                let weekList = {
                    '1' : '周一',
                    '2' : '周二',
                    '3' : '周三',
                    '4' : '周四',
                    '5' : '周五',
                    '6' : '周六',
                    '7' : '周日',
                    '周一' : '1',
                    '周二' : '2',
                    '周三' : '3',
                    '周四' : '4',
                    '周五' : '5',
                    '周六' : '6',
                    '周日' : '7',
                };
                return weekList[data];
            }
        },
        computed: {
            language(){
                return localStorage.getItem('language');
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
            }
        },
        mounted(){
            if(this.userInfo){ //登录
            }else{ //未登录的时候跳到登录页
                this.$router.push({
                    path: '/Login'
                });
            }
            let time = new Date()
            this.userId = this.userInfo
            this.listInfo = this.$parent.listInfo
            this.DynamicShipData = this.$parent.rowDetail
            this.getDetail()
            if(this.DynamicShipData){
                this.ruleForm.pol = this.DynamicShipData.pol
                this.ruleForm.companyName = this.DynamicShipData.carrier
                this.ruleForm.scac = this.DynamicShipData.scac
                this.ruleForm.routeCode = this.DynamicShipData.routeCode
                this.ruleForm.terminal = this.DynamicShipData.terminal
                this.ruleForm.status = this.DynamicShipData.status
                this.ruleForm.weekNo = this.DynamicShipData.weekNo
                this.ruleForm.stEtd = this.DynamicShipData.stEtd
                this.ruleForm.dyEtd = this.DynamicShipData.dyEtd
                this.ruleForm.vessel = this.DynamicShipData.vessel
                this.ruleForm.voyage = this.DynamicShipData.voyage
                this.startState = this.DynamicShipData.status
            }
        },
        components: {
            ThePagination,
            Loading,
            PortOfCall
        },
    };
</script>

