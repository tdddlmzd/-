<style lang="scss">
.content-serach-box{
    min-height: 95px;
    border-radius: 4px; 
    margin: 20px 0;
    position: relative;
    padding: 20px 0 8px 0;
    background: #fff;
    overflow: hidden;
    border: solid 1px #f2f2f2;
    .el-form-item__label,
    .el-select__caret,
    .el-input__inner{
        font-size: 12px !important;
    }
    .el-form-item__label{
        padding: 0 10px 0 0 !important;
    }
    .el-form-item{
        margin-bottom: 12px !important;
    }
    .contentLeft{
        .el-row{
            margin-left: -14px;
        }
    }
    .contenRight{
        width: 190px;
        height: 24px;
        position: absolute;
        right: 14px;
        bottom: 20px;
        display: flex;
        justify-content: space-between;
        .resetBtn1{
            width: 90px;
            height: 25px;
            border-radius: 12px;
            background: #fff;
            border: 1px solid #f2f2f2;
            line-height: 23px;
            color: #282828;
            text-align: center;
            user-select: none;
            cursor: pointer;
            padding: 0;
            &:hover{
                background: #f2f2f2;
            }
        }
        .serachBtn{
            width: 90px;
            height: 24px;
            border-radius: 12px;
            user-select: none;
            background: #072c4c;
            text-align: center;
            line-height: 23px;
            user-select: none;
            cursor: pointer;
            color: #FFF;
            padding: 0;
            &:hover{
                background: #395670;
            }
        }
    }
}
.content-table-box{
    min-height: 620px;
    background: #fff;
    overflow: hidden;
    border-radius: 4px;
    border: solid 1px #f2f2f2;
    padding: 20px 20px 70px;  
    position: relative;
    margin-bottom: 20px;
    .table_title_bar{
        display: flex;
        margin-bottom: 20px;
        li{
            height: 18px;
            font-size: 12px;
            line-height: 12px;
            margin-right: 20px;
            color: #282828;
            position: relative;
            cursor: pointer;
        }
        .active{
            font-weight: 600;
            color: #26b4b2;
            &::after{
                content: '';
                display: block;
                width: 100%;
                height: 2px;
                background: #26b4b2;
                position: absolute;
                bottom: 0;
                left: 1px;
            }
        }
    }
    .table_btn_bar{
        margin-bottom: 20px;
        display: flex;
        justify-content: space-between;
        .btn_bar_left{
            display: flex;
            .table_btn{
                user-select: none;
                margin-right: 10px;
            }
        }
        .table_btn{
            width: 90px;
            height: 24px;
            line-height: 22px;
            border-radius: 12px;
            color: #282828;
            text-align: center;
            border: solid 1px #f2f2f2;
            cursor: pointer;
            &:hover{
                background: #26b4b2;
                border: solid 1px #26b4b2;
                color: #fff;
            }
        }
        .invalid_btn{
            &:hover{
                background: #f2f2f2;
                border: solid 1px #f2f2f2;
                color: #282828;
            }
        }
        .add_btn{
            background: #26b4b2 !important;
            border: solid 1px #26b4b2 !important;
            color: #fff !important;
            &:hover{
                background: #51c3c1 !important;
                border: solid 1px #51c3c1 !important;
            }
        }
    }
    .refPagination input {
        width: 100px !important;
    }
    .refPagination {
        width: 100%;
        background-color: #fff;
    }
    .el-table--border::after, .el-table--group::after{
        display: none;
    }
}

.add_route_dialog{
    .el-dialog {
        width: 554px;
        border-radius: 8px !important;
        margin: 0 !important;
        background-color: #ffffff;
        box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.1);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        .el-dialog__body{
            padding: 20px !important;
        }
        .el-dialog__footer{
            padding-top: 0;
            .el-button{
                width: 130px;
                height: 30px;
                border-radius: 15px;
                line-height: 23px;
                font-size: 12px;
                padding: 0;
            }
            .el-button--default{
                border: 1px solid #f2f2f2 !important;
                color: #909090;
                background: #fff;
                &:hover{
                    background: #f2f2f2;
                }
            }
            .el-button--primary{
                background: #072c4c;
                color: #fff;
                margin-left: 50px;
                &:hover{
                    background: #395670;
                }
            }
        }
        .dialog{
            .title{
                height: 14px;
                position: relative;
                font-size: 14px;
                color: #282828;
                padding-left: 13px;
                text-align: left;
                line-height: 14px;
                margin-bottom: 20px;
                display: flex;
                .line{
                    display: inline-block;
                    width: 3px;
                    height: 14px;
                    background: #072c4c;
                    position: absolute;
                    left: 0;
                    top: 0;
                }
            }
            .add_route{
                .el-form-item__label{
                    padding: 0 10px 0 0 !important;
                    font-size: 12px !important;
                }
                .important_input1{
                    .el-form-item__label{
                        &::before{
                            content: '*';
                            position: absolute;
                            top: -1px;
                            left: 0;
                            color: #ff7676;
                        }
                    }
                }
                .important_input2{
                    .el-form-item__label{
                        &::before{
                            content: '*';
                            position: absolute;
                            top: -1px;
                            left: 12px;
                            color: #ff7676;
                        }
                    }
                }
            }
        } 
    }
}
.content-table-box{
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
        .greenColor .el-input__inner{
            color: #26b4b2 !important;
        }
        .redColor .el-input__inner{
            color: #ff7676 !important;
        }
        .grayColor .el-input__inner{
            color: #909090 !important;
        }
        .blueColor .el-input__inner{
            color: #072c4c !important;
        }
        .el-input__inner{
            height: 34px;
            padding: 0 !important;
            border: none;
            border-radius: none;
            font-weight: bold;
            font-size: 12px;
            background: rgba(0, 0, 0, 0);
            color: #072c4c;
        }
        .el-select__caret{
            display: none;
        }
    }
}
.el-select-dropdown__item.status,
.el-select-dropdown__item.status:hover{
    padding: 0 10px !important;
}
.el-form-item__label{
    color: #282828;
}
.el-input__inner{
    color: #282828;
    border: 1px solid #f2f2f2;
}
.el-input__inner::placeholder{
    color: #909090;
}
.el-dropdown-menu__item{
    color: #282828;
}
.el-table__empty-text{
    color: #909090;
}
.el-dropdown-menu__item:hover{
    background: #f2f2f2 !important;
    color: #072c4c !important;
    font-weight: bold !important;
}
.status:last-of-type{
    display: none;
}
.maxWidth{
    width: 172px !important;
}
.reviseList{
    z-index: 3003 !important;
}
</style>
<template>
    <div>
        <Loading v-if="loading"></Loading>
        <div class="content-serach-box">
            <el-form
                size="mini"
                label-position="right"
                :model="ruleForm"
                ref="ruleForm"
                label-width="82px"
            >
                <div class="contentLeft">
                    <el-row>
                        <el-col style="width:20%">
                            <el-form-item :label="$t('table.pol')">
                                <el-select
                                    remote
                                    clearable
                                    filterable
                                    v-model="ruleForm.pol"
                                    :placeholder="$t('table.PleaseEnterAndSelect')"
                                    @focus="portStartFocus"
                                    @change="portStartChange"
                                    style="width:100%"
                                >
                                    <el-option
                                        v-for="item in portStartList"
                                        :key="item.id"
                                        :label="item.portEn"
                                        :value="item.portEn"
                                        v-title='item.portEn+"("+ item.portCode+")"'
                                    >
                                        <span>{{item.portEn+"("+ item.portCode+")" }}</span>
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col style="width:20%">
                            <el-form-item :label="$t('table.pod')">
                                <el-select
                                    remote
                                    clearable
                                    filterable
                                    v-model="ruleForm.pod"
                                    :placeholder="$t('table.PleaseEnterAndSelect')"
                                    :remote-method="portEndRemote"
                                    @focus="portEndFocus"
                                    @change="portEndChange"
                                    style="width:100%"
                                >
                                    <el-option
                                        v-for="item in portEndList"
                                        :key="item.id"
                                        :label="item.portEn"
                                        :value="item.portEn"
                                        v-title='item.portEn+"("+ item.portCode+")"'
                                    >
                                        <span>{{item.portEn+"("+ item.portCode+")" }}</span>
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col style="width:20%"> 
                            <el-form-item :label="$t('table.podRoute')">
                                <el-select
                                    v-model="ruleForm.routeCn"
                                    style="width:100%;"
                                    :placeholder="$t('table.PleaseEnterAndSelect')"
                                    filterable
                                    remote
                                    clearable
                                    :remote-method="remoteRouteCnMethod"
                                    @focus="handleRouteCnFounc"
                                    @change="handleRouteCnChange"
                                >
                                    <el-option
                                        v-for="item in routeCnList"
                                        :key="item.routeId"
                                        :label="item.routeCn"
                                        :value="item.routeCn"
                                    >
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col style="width:20%">
                            <el-form-item :label="$t('table.podCountry')">
                                <el-select
                                    remote
                                    clearable
                                    filterable
                                    v-model="ruleForm.podCountry"
                                    :placeholder="$t('table.PleaseEnterAndSelect')"
                                    :remote-method="portCountryRemote"
                                    @focus="portCountryFocus"
                                    style="width:100%"
                                >
                                    <el-option
                                        v-for="item in portCountryList"
                                        :key="item.id"
                                        :label="item.countryCn"
                                        :value="item.id"
                                    >
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col style="width:20%">
                            <el-form-item :label="$t('table.carrier')">
                                <el-select
                                    remote
                                    clearable
                                    filterable
                                    v-model="ruleForm.companyName"
                                    :placeholder="$t('table.PleaseEnterAndSelect')"
                                    :remote-method="companyNameRemote"
                                    @focus="companyNameFocus"
                                    @change="companyNameChange"
                                    style="width:100%"
                                >
                                    <el-option
                                        v-for="item in companyNameList"
                                        :key="item.companyName"
                                        :label="item.companyName"
                                        :value="item.companyName"
                                    >
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col style="width:20%"> 
                            <el-form-item :label="$t('table.path')">
                                <el-input v-model="ruleForm.routeCode" :placeholder="$t('table.PleaseEnter')" clearable>
                                </el-input>
                            </el-form-item>
                        </el-col>
                        <el-col style="width:20%">
                            <el-form-item :label="$t('table.pathNum')">
                                <el-select
                                    v-model="ruleForm.transitCount"
                                    clearable
                                    style="width:100%"
                                    :placeholder="$t('table.PleaseSelect')"
                                >
                                    <el-option
                                        v-for="item in isTransitList"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value"
                                    >
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col style="width:20%">
                            <el-form-item :label="$t('table.type')">
                                <el-select
                                    v-model="ruleForm.state"
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
                </div>
                <div class="contenRight">
                    <div class="resetBtn1" @click="resetBtn">{{ $t('task.reset') }}</div>
                    <div class="serachBtn" @click="searchGetList('resetPage')">{{ $t('task.search') }}</div>
                </div>
            </el-form>
        </div>
        <div class="content-table-box">
            <ul class="table_title_bar">
                <li :class="isConfirm?'active':''" @click="handleClickSwitch('confirm')">{{ $t('task.Confirm') }}<span v-if="missionCount">{{'【' + missionCount + $t('task.tip') + '】'}}</span></li>
                <li :class="!isConfirm?'active':''" @click="handleClickSwitch('all')">{{ $t('task.schwsuleTable') }}</li>
            </ul>
            <div class="table_btn_bar">
                <div class="btn_bar_left">
                    <div class="table_btn" @click="handleClickSetStatus('correct')">{{ $t('task.correct') }}</div>
                    <div class="table_btn invalid_btn" @click="handleClickSetStatus('invalid')">{{ $t('task.invalid') }}</div>
                </div>
                <div class="table_btn add_btn" @click="goPortScheduleDetail('add')">{{ $t('task.add') }}</div>
            </div>
            <el-table
                :data="tableData"
                :header-cell-style="{background:'#3bafda',color:'#ffffff',fontSize:'12px'}"
                :row-class-name="tabRowClassName"
                tooltip-effect="dark"
                ref="table"
                style="width: 100%;"
                border
                @selection-change="handleSelectionChange"
                @row-dblclick="tabRowChange"
                :header-row-class-name="headerStyle"
            >
                <el-table-column type="selection" width="32">
                        
                </el-table-column>
                <el-table-column prop="expertStatus" :label="$t('table.state')" align="left" :show-overflow-tooltip="true" min-width="56" :sortable="sortableState" :filters="[]">           
                    <template slot-scope="scope">
                        <span v-if="scope.row.expertStatus==0">未确认</span>
                        <span v-if="scope.row.expertStatus==1">已确认</span>
                    </template>
                </el-table-column>
                <el-table-column prop="platformStatus" :label="$t('table.admin')" align="left" :show-overflow-tooltip="true" min-width="80" :sortable="sortableState" :filters="[]">           
                    <template slot-scope="scope">
                        <span v-if="scope.row.platformStatus==0">未审核</span>
                        <span v-if="scope.row.platformStatus==1">已审核</span>
                    </template>
                </el-table-column>
                <el-table-column prop="state" :label="$t('table.type')" align="left" :show-overflow-tooltip="true" min-width="60" :sortable="sortableState" :filters="[]">           
                    <template slot-scope="scope">
                        <span v-if="scope.row.state==0">常用</span>
                        <span v-if="scope.row.state==1">加班</span>
                        <span v-if="scope.row.state==2">无效</span>
                        <span v-if="scope.row.state==3">待定</span>
                    </template>
                </el-table-column>
                <el-table-column prop="standardRouteCnPinYin" :label="$t('table.route')" align="left" :show-overflow-tooltip="true" min-width="60" :sortable="sortableState" :filters="[]">           
                    <template slot-scope="scope">
                        <span>{{scope.row.standardRouteCn}}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="pod" :label="$t('table.pod')" align="left" :show-overflow-tooltip="true" min-width="72" :sortable="sortableState" :filters="[]">
                </el-table-column>
                <el-table-column prop="carrier" :label="$t('table.carrier')" align="left" :show-overflow-tooltip="true" min-width="68" :sortable="sortableState" :filters="[]">   
                </el-table-column>
                <el-table-column prop="etdNum" label="ETD" align="left" :show-overflow-tooltip="true" min-width="55" :sortable="sortableState" :filters="[]">
                    <template slot-scope="scope">
                        <span>{{scope.row.etd ? scope.row.etd.toUpperCase(): ''}}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="transitTime" :label="$t('table.voyage')" align="left" :show-overflow-tooltip="true" min-width="55" :sortable="sortableState" :filters="[]">
                    <template slot-scope="scope">
                        <span>{{scope.row.transitTime != null ? scope.row.transitTime : ''}}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="transitCount" :label="$t('table.paths')" align="left" :show-overflow-tooltip="true" min-width="68" :sortable="sortableState" :filters="[]">
                    <template slot-scope="scope">
                        <span v-if="scope.row.transitCount==1">直达</span>
                        <span v-if="scope.row.transitCount==2">2程</span>
                        <span v-if="scope.row.transitCount==3">3程</span>
                        <span v-if="scope.row.transitCount==4">4程</span>
                    </template>
                </el-table-column>
                <el-table-column prop="polTerminalPinYin" :label="$t('table.Polwharf')" align="left" :show-overflow-tooltip="true" min-width="80" :sortable="sortableState" :filters="[]">
                    <template slot-scope="scope">
                        <span>{{scope.row.polTerminal}}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="podTerminalPinYin" :label="$t('table.Podwharf')" align="left" :show-overflow-tooltip="true" min-width="80" :sortable="sortableState" :filters="[]">
                    <template slot-scope="scope">
                        <span>{{scope.row.podTerminal}}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="path" :label="$t('table.path')" align="left" :show-overflow-tooltip="true" min-width="58" :sortable="sortableState" :filters="[]">
                    <template slot-scope="scope">
                        <span>{{scope.row.path != 'UNDEFINED' ? scope.row.path : '-'}}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="updateTime" :label="$t('table.Operationtime')" align="left" :show-overflow-tooltip="true" min-width="96" :sortable="sortableState" :filters="[]">
                </el-table-column>
            </el-table>
            <!--分页-->
            <ThePagination
            ref="refPagination"  
            :pageNumber="pageNumber" 
            :attribute="paginationAttribute" 
            class="refPagination"
            ></ThePagination>
        </div>
    </div>
    
       
</template>

<script>
    import Loading from "@components/loading";
    import ThePagination from "@components/ThePagination";
    export default {
        data(){
            return {
                userId: '',
                userInfo:
                this.getCookie("authId") !== null && this.getCookie("authId") !== "" && this.getCookie("authId") !== undefined
                ? this.getCookie("authId")
                : "",
                loading: false,
                isConfirm: true, //待确认点击样式
                sortableState: true, //排序
                isRouterPage: true, //Pagination 分页
                switchTab: 'all',//列表状态，全部、待处理
                defaultPol: '', //默认的起始港
                defaultPolCode: '', //默认的起始港五子码
                defaultPolId: '', //默认起始港Id
                defaultPolCityId: '', //默认起始港城市Id
                missionCount: '',//待处理数量
                expertStatus: '',//默认不传 待确认 传0
                portStartList: [], //起运港
                portEndList: [], //目的港
                routeCnList: [], //航线
                companyNameList: [], //船公司
                portCountryList: [], //目的港国家
                tableData: [], //表格数据
                listInfo: {}, //港港船期列表页面搜索信息
                refPagination: {},// 引用 ThePagination组件
                paginationAttribute: {
                    handleChange: this.handleChange
                },
                pageNumber: -1, //分页默认状态
                page: {
                    // 当前页数
                    pageNo: 1,
                    // 每页默认显示条数
                    pageSize: 10,
                    // 总条数
                    total: 0
                },
                multipleSelection: [], //选择
                ruleForm: {
                    pol:'',//起始港
                    pod:'',//目的港
                    polCode:'',//起始港五子码
                    podCode:'',//目的港五子码
                    polId:'',//起始港ID
                    podId:'',//目的港ID
                    polCityId:'',//起始港城市ID
                    podCityId:'',//起始港城市ID
                    podCountry:'',//目的港国家ID
                    companyName:'',//船公司
                    scac:'',//船公司四字码
                    routeCode:'',//路径
                    transitCount:'',//路径数
                    state:'',//类型
                    routeCn:'',//航线
                    routeId:'',//航线Id
                },
                //路径数
                isTransitList: [
                    {
                        value: '',
                        label: "全部"
                    },
                    {
                        value: 1,
                        label: "直达"
                    },
                    {
                        value: 2,
                        label: "2程"
                    },
                    {
                        value: 3,
                        label: "3程"
                    },
                    {
                        value: 4,
                        label: "4程"
                    },
                ],
                //状态
                stateList: [
                    {
                        value: '',
                        label: "全部"
                    },
                    {
                        value: 0,
                        label: "常用"
                    },
                    {
                        value: 1,
                        label: "加班"
                    },
                    {
                        value: 2,
                        label: "无效"
                    },
                    {
                        value: 3,
                        label: "待定"
                    }
                ]
            }
        },
        methods: {
            //设置状态按钮
            handleClickSetStatus(type){
                if(this.multipleSelection.length == 0){
                    this.$message({//请至少选择一条或者多条进行设置
                        message: this.$t('task.PleaseSelect'),
                        type: "warning",
                        customClass: "base-message-zindex"
                    });
                    return false;
                }
                if(type == 'correct'){
                    var state = 0
                }else if(type == 'invalid'){
                    var state = 2
                }
                let ids = []
                for(let i=0; i<this.multipleSelection.length; i++){
                    ids.push(this.multipleSelection[i].pathId)
                }
                let query = {
                    ids: ids,
                    userId: this.userId,
                    state: state
                }
                this.$Axios.post(this.GLOBAL.url + `expert/mission/updatePathByIds`, query, {
                    headers: {
                        Authorization: this.getToken()
                },
                }).then(res => {
                    if(res.data.status == 1){
                        this.$message({//状态设置成功
                            message: this.$t('task.stateSuccess'),
                            type: "success",
                            customClass: "base-message-zindex"
                        });
                        this.searchGetList()
                    }else{
                        this.$message({//状态设置失败
                            message: this.$t('task.stateFail'),
                            type: "error",
                            customClass: "base-message-zindex"
                        }); 
                    }
                }).catch((err)=>{
                    this.$message({//状态设置失败
                        message: this.$t('task.stateFail'),
                        type: "error",
                        customClass: "base-message-zindex"
                    }); 
                })
            },
            goPortScheduleDetail(type){
                this.$parent.pageSize = this.page.pageSize
                if(type == 'add'){
                    this.$parent.pol = this.ruleForm.pol
                    this.$parent.polCode = this.ruleForm.polCode
                    this.$parent.polId = this.ruleForm.polId
                    this.$parent.polCityId = this.ruleForm.polCityId
                    this.$parent.PortSchedule = false
                    this.$parent.detailStatus = 'add'
                }else if(type == 'edit'){
                    this.$parent.PortSchedule = false
                    this.$parent.detailStatus = 'edit'
                    this.$parent.listInfo = this.listInfo
                }
            },
            //给分页传的属性
            handleChange(params) {
                if(this.switchTab == 'all'){
                    this.page.pageSize = params.pageSize;
                    this.page.pageNo = params.pageNo;
                    this.searchGetList();
                    this.pageNumber = -1;
                }else if(this.switchTab == 'confirm'){
                    this.page.pageSize = params.pageSize;
                    this.page.pageNo = params.pageNo;
                    this.searchGetList();
                    this.pageNumber = -1;
                }
            },
            //切换待确认
            handleClickSwitch(tab, remember){
                if(tab == 'all'){
                    this.switchTab = 'all'
                    this.isConfirm = false
                    this.expertStatus = ''
                    if(remember == 'remember'){
                        this.searchGetList('remember')
                    }else{
                        this.searchGetList('resetPage') 
                    }
                }else if(tab == 'confirm'){
                    this.switchTab = 'confirm'
                    this.isConfirm = true
                    this.expertStatus = 0
                    if(remember == 'remember'){
                        this.searchGetList('remember')
                    }else{
                        this.searchGetList('resetPage') 
                    }
                }
            },
            //获取当前起始港待处理数量
            getPendingNumber(){
                //获取修改项下拉框
                this.$Axios.get(this.GLOBAL.url + `expert/path/getCountUnConfirm?userId=${this.userId}`,{
                    headers: {
                        Authorization: this.getToken()
                },
                }).then(res => {
                    if(res.data.status == 1){
                        this.missionCount = res.data.content
                        this.$parent.missionCount = res.data.content
                    }
                }).catch((err)=>{
                    
                })
            },
            //全选
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
            //双击列表行
            tabRowChange(row) {
                this.listInfo = {
                    pol: this.ruleForm.pol,
                    polCode: this.ruleForm.polCode,
                    polId: this.ruleForm.polId,
                    polCityId: this.ruleForm.polCityId,
                    portStartList: this.portStartList,
                    pod: this.ruleForm.pod,
                    podCode: this.ruleForm.podCode,
                    podCityId: this.ruleForm.podCityId,
                    podCountry: this.ruleForm.podCountry,
                    companyName: this.ruleForm.companyName,
                    scac: this.ruleForm.scac,
                    routeCode: this.ruleForm.routeCode,
                    transitCount: this.ruleForm.transitCount,
                    state: this.ruleForm.state,
                    routeCn: this.ruleForm.routeCn,
                    routeId: this.ruleForm.routeId,
                    pageNo: this.page.pageNo,
                    switchTab: this.switchTab,
                    pathId: row.pathId
                }
                this.goPortScheduleDetail('edit')
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
            //起运港 foucs
            portStartFocus() {
                //获取航线专家起始港下拉框
                this.$Axios.get(this.GLOBAL.url + `expert/mission/pol?userId=${this.userId}`,{
                    headers: {
                        Authorization: this.getToken()
                },
                }).then(res => {
                    if(res.data.status == 1){
                        this.portStartList = res.data.content
                    }
                }).catch((err)=>{
                    
                })
            },
            //起运港 change
            portStartChange(val) {
                if(val){
                    for (let i = 0; i < this.portStartList.length; i++) {
                        if(this.portStartList[i].portEn == val){
                            this.ruleForm.polCode = this.portStartList[i].portCode
                            this.ruleForm.polId = this.portStartList[i].id
                            this.ruleForm.polCityId = this.portStartList[i].cityId
                        }
                    }
                }else{
                    this.ruleForm.polCode = ''
                    this.ruleForm.polId = ''
                    this.ruleForm.polCityId = ''
                }
            },
            //目的港 搜索
            portEndRemote(value) {
                //获取航线专家起始港下拉框
                this.$Axios.get(this.GLOBAL.url + `schedules/path/queryPort?pol=1&port=${value}`,{
                    headers: {
                        Authorization: this.getToken()
                },
                }).then(res => {
                    if(res.data.status == 1){
                        this.portEndList = res.data.content
                    }
                }).catch((err)=>{
                    
                })
            },
            //目的港 foucs
            portEndFocus() {
                //获取航线专家起始港下拉框
                this.$Axios.get(this.GLOBAL.url + `schedules/path/queryPort?pol=1`,{
                    headers: {
                        Authorization: this.getToken()
                },
                }).then(res => {
                    if(res.data.status == 1){
                        this.portEndList = res.data.content
                    }
                }).catch((err)=>{
                    
                })
            },
            //目的港 change
            portEndChange(val) {
                if(val){
                    for (let i = 0; i < this.portEndList.length; i++) {
                        if(this.portEndList[i].portEn == val){
                            this.ruleForm.podCode = this.portEndList[i].portCode
                            this.ruleForm.podId = this.portEndList[i].id
                            this.ruleForm.podCityId = this.portEndList[i].cityId
                        }
                    }
                }else{
                    this.ruleForm.podCode = ''
                    this.ruleForm.podId = ''
                    this.ruleForm.podCityId = ''
                }
            },
            //航线搜索
            remoteRouteCnMethod(value) {
                if (!value) {
                    value = '';
                }
                //获取航线专家起始港下拉框
                this.$Axios.get(this.GLOBAL.url + `schedules/route/getAllRoute?routeCn=${value}`,{
                    headers: {
                        Authorization: this.getToken()
                },
                }).then(res => {
                    if(res.data.status == 1){
                        this.routeCnList = res.data.content
                    }
                }).catch((err)=>{
                    
                })
            },
            //航线聚焦
            handleRouteCnFounc() {
                //获取航线专家起始港下拉框
                this.$Axios.get(this.GLOBAL.url + `schedules/route/getAllRoute`,{
                    headers: {
                        Authorization: this.getToken()
                },
                }).then(res => {
                    if(res.data.status == 1){
                        this.routeCnList = res.data.content
                    }
                }).catch((err)=>{
                    
                })
            },
            //航线change
            handleRouteCnChange(value){
                if(value === ''){
                    this.ruleForm.routeId = ''
                }else{
                    for (let i = 0; i < this.routeCnList.length; i++) {
                        if(this.routeCnList[i].routeCn === value){
                            this.ruleForm.routeId = this.routeCnList[i].routeId
                        }
                    }
                }
            },
            //目的港国家 远程搜索
            portCountryRemote(value) {
                this.$Axios.get(this.GLOBAL.url + `schedules/port/queryCountry?countryName=${value}`, {
                    headers: {
                        Authorization: this.getToken()
                },
                }).then(res => {
                    if (res.data.status == 1) {
                        this.portCountryList = res.data.content;
                    }
                });
            },
            //目的港国家 foucs
            portCountryFocus() {
                this.$Axios.get(this.GLOBAL.url + `schedules/port/queryCountry`, {
                headers: {
                    Authorization: this.getToken()
                },
                }).then(res => {
                    if (res.data.status == 1) {
                        this.portCountryList = res.data.content;
                    }
                });
            },
            //船公司搜索      
            companyNameRemote(value){
                //获取航线专家起始港下拉框
                this.$Axios.get(this.GLOBAL.url + `expert/path/getCompany?userId=${this.userId}&companyName=${value}`,{
                    headers: {
                        Authorization: this.getToken()
                },
                }).then(res => {
                    if(res.data.status == 1){
                        this.companyNameList = res.data.content
                    }
                }).catch((err)=>{
                    
                })
            },
            //船公司Focus事件
            companyNameFocus(){
                //获取航线专家起始港下拉框
                this.$Axios.get(this.GLOBAL.url + `expert/path/getCompany?userId=${this.userId}`,{
                    headers: {
                        Authorization: this.getToken()
                },
                }).then(res => {
                    if(res.data.status == 1){
                        this.companyNameList = res.data.content
                    }
                }).catch((err)=>{
                    
                })
            },
            //船公司change事件
            companyNameChange(value){
                if(value === ''){
                    this.ruleForm.scac = ''
                }else{
                    for (let i = 0; i < this.companyNameList.length; i++) {
                        if(this.companyNameList[i].companyName === value){
                            this.ruleForm.scac = this.companyNameList[i].scac
                        }
                    }
                }    
            },
            //重置按钮
            resetBtn(){
                this.ruleForm.pol = this.portStartList?this.portStartList[0].portEn:''
                this.ruleForm.polCode = this.portStartList?this.portStartList[0].portCode:''
                this.ruleForm.polId = this.portStartList?this.portStartList[0].id:''
                this.ruleForm.polCityId = this.portStartList?this.portStartList[0].cityId:''
                this.ruleForm.pod = ''
                this.ruleForm.podCode = ''
                this.ruleForm.podId = ''
                this.ruleForm.podCityId = ''
                this.ruleForm.routeCn = ''
                this.ruleForm.routeId = ''
                this.ruleForm.companyName = ''
                this.ruleForm.scac = ''
                this.ruleForm.routeCode = ''
                this.ruleForm.transitCount = ''
                this.ruleForm.podCountry = ''
                this.ruleForm.state = ''
            },
            //搜索按钮
            searchGetList(tableStatus){
                if(this.ruleForm.polCode == ''){
                    this.$message({//请选择起运港
                        message: this.$t('task.choosePol'),
                        type: "warning",
                        customClass: "base-message-zindex"
                    });
                    return false;
                }
                if(tableStatus == 'resetPage'){
                    this.page.pageNo = 1
                }
                if(this.ruleForm.polCode){
                    this.$refs.table.clearSort()
                    this.loading = true
                    this.$Axios.get(this.GLOBAL.url + `expert/mission/schedule?userId=${this.userId
                        }&polCode=${this.ruleForm.polCode?this.ruleForm.polCode:''
                        }&pageNumber=${this.page.pageNo
                        }&pageSize=${this.page.pageSize
                        }&podCode=${this.ruleForm.podCode?this.ruleForm.podCode:''
                        }&scac=${this.ruleForm.scac?this.ruleForm.scac:''
                        }&transitCount=${this.ruleForm.transitCount?this.ruleForm.transitCount:''
                        }&podCountry=${this.ruleForm.podCountry?this.ruleForm.podCountry:''
                        }&path=${this.ruleForm.routeCode?this.ruleForm.routeCode:''
                        }&routeId=${this.ruleForm.routeId?this.ruleForm.routeId:''
                        }&state=${this.ruleForm.state
                        }&expertStatus=${this.expertStatus}`,{
                        headers: {
                            Authorization: this.getToken()
                    },
                    }).then(res => {
                        if(res.data.status == 1){
                            if(res.data.content){
                                if(res.data.content.length <= 0){
                                    this.tableData = []
                                    if(this.$refs.refPagination){
                                        this.$refs.refPagination.page.total = res.data.total;
                                        this.$refs.refPagination.changeValue()
                                        this.getPendingNumber()                           
                                    };
                                }else{
                                    this.tableData=[]
                                    this.tableData = res.data.content
                                    for(let i=0; i<this.tableData.length; i++){
                                        if(this.tableData[i].etd.replace(/\s/g,'') !== ''){
                                            if(this.tableData[i].etd.toUpperCase().replace(/\s/g,'') == 'MON'){
                                                this.tableData[i].etdNum = 1
                                            }else if(this.tableData[i].etd.toUpperCase().replace(/\s/g,'') == 'TUE' || this.tableData[i].etd.toUpperCase().replace(/\s/g,'') == 'TUES'){
                                                this.tableData[i].etdNum = 2
                                            }else if(this.tableData[i].etd.toUpperCase().replace(/\s/g,'') == 'WED'){
                                                this.tableData[i].etdNum = 3
                                            }else if(this.tableData[i].etd.toUpperCase().replace(/\s/g,'') == 'THU' || this.tableData[i].etd.toUpperCase().replace(/\s/g,'') == 'THURS'){
                                                this.tableData[i].etdNum = 4
                                            }else if(this.tableData[i].etd.toUpperCase().replace(/\s/g,'') == 'FRI'){
                                                this.tableData[i].etdNum = 5
                                            }else if(this.tableData[i].etd.toUpperCase().replace(/\s/g,'') == 'SAT'){
                                                this.tableData[i].etdNum = 6
                                            }else if(this.tableData[i].etd.toUpperCase().replace(/\s/g,'') == 'SUN'){
                                                this.tableData[i].etdNum = 7
                                            }else{
                                                this.tableData[i].etdNum = 0
                                            }
                                        }else{
                                            this.tableData[i].etd = ''
                                            this.tableData[i].etdNum = 0
                                        }
                                        this.tableData[i].polTerminalPinYin = this.tableData[i].polTerminal?this.getPinYin(this.tableData[i].polTerminal):''
                                        this.tableData[i].podTerminalPinYin = this.tableData[i].podTerminal?this.getPinYin(this.tableData[i].podTerminal):''
                                        this.tableData[i].standardRouteCnPinYin = this.tableData[i].standardRouteCn?this.getPinYin(this.tableData[i].standardRouteCn):''
                                        if(this.$refs.refPagination){
                                            this.$refs.refPagination.page.pageNo = this.page.pageNo;
                                            this.$refs.refPagination.page.pageSize = this.page.pageSize;
                                            this.$refs.refPagination.page.total = res.data.total;
                                            this.$refs.refPagination.changeValue()
                                            this.getPendingNumber()
                                            if(Math.ceil(this.$refs.refPagination.page.total / this.page.pageSize) < this.page.pageNo){
                                                this.$refs.refPagination.handleCurrentChange(1);
                                            };
                                        } 
                                    }
                                }
                            }
                            this.loading = false
                        }
                    }).catch((err)=>{
                        this.loading = false
                    })
                }
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
            this.loading = true
            if(this.userInfo){ //登录
            }else{ //未登录的时候跳到登录页
                this.$router.push({
                    path: '/Login'
                });
            }
            this.userId = this.userInfo
            if(this.$parent.pageSize){
                this.page.pageSize = this.$parent.pageSize
            }
            // 如果从详情页回来会带搜索条件，其他默认是待处理状态
            if(this.$parent.listInfo.pathId){
                this.ruleForm.pol = this.$parent.listInfo.pol
                this.ruleForm.polCode = this.$parent.listInfo.polCode
                this.ruleForm.polId = this.$parent.listInfo.polId
                this.ruleForm.polCityId = this.$parent.listInfo.polCityId
                this.portStartList = this.$parent.listInfo.portStartList
                this.ruleForm.pod = this.$parent.listInfo.pod
                this.ruleForm.podCode = this.$parent.listInfo.podCode
                this.ruleForm.podCityId = this.$parent.listInfo.podCityId
                this.ruleForm.podCountry = this.$parent.listInfo.podCountry
                this.ruleForm.companyName = this.$parent.listInfo.companyName
                this.ruleForm.scac = this.$parent.listInfo.scac
                this.ruleForm.routeCode = this.$parent.listInfo.routeCode
                this.ruleForm.transitCount = this.$parent.listInfo.transitCount
                this.ruleForm.state = this.$parent.listInfo.state
                this.ruleForm.routeCn = this.$parent.listInfo.routeCn
                this.ruleForm.routeId = this.$parent.listInfo.routeId
                this.page.pageNo = this.$parent.listInfo.pageNo
                this.handleClickSwitch(this.$parent.listInfo.switchTab, 'remember')
            }else{
                //获取航线专家起始港下拉框
                this.$Axios.get(this.GLOBAL.url + `expert/mission/pol?userId=${this.userId}`,{
                    headers: {
                        Authorization: this.getToken()
                },
                }).then(res => {
                    if(res.data.content.length > 0){
                        this.portStartList = res.data.content
                        if(this.portStartList){
                            this.ruleForm.pol = this.portStartList[0].portEn
                            this.ruleForm.polCode = this.portStartList[0].portCode
                            this.ruleForm.polId = this.portStartList[0].id
                            this.ruleForm.polCityId = this.portStartList[0].cityId
                            this.handleClickSwitch('confirm')
                        }
                    }else{
                        this.loading = false
                    }
                }).catch((err)=>{
                    this.loading = false
                })
            }
        },
        components: {
            ThePagination,
            Loading
        },
    };
</script>

