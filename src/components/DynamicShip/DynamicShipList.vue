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
        .resetBtn{
            width: 90px;
            height: 25px;
            border-radius: 12px;
            background: #fff;
            border: 1px solid #f2f2f2;
            line-height: 23px;
            color: #282828;
            cursor: pointer;
            text-align: center;
            user-select: none;
            padding: 0;
            &:hover{
                background: #f2f2f2;
            }
        }
        .serachBtn{
            width: 90px;
            height: 24px;
            border-radius: 12px;
            background: #072c4c;
            line-height: 23px;
            cursor: pointer;
            text-align: center;
            user-select: none;
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
    }
    .refPagination input {
        width: 100px !important;
    }
    .refPagination {
        width: 100%;
        background-color: #fff;
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
        <!-- 动态船舶列表 -->
        <Loading v-if="loading"></Loading>
        <!-- 搜索表单部分 -->
        <div class="content-serach-box">
            <el-form
                size="mini"
                label-position="right"
                :model="ruleForm"
                ref="ruleForm"
                label-width="80px"
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
                            <el-form-item :label="$t('table.RouteCode')">
                                <el-input v-model="ruleForm.routeCode" :placeholder="$t('table.PleaseEnter')" clearable>
                                </el-input>
                            </el-form-item>
                        </el-col>
                        <el-col style="width:20%">
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
                        <el-col style="width:20%"> 
                            <el-form-item :label="$t('table.vessel')">
                                <el-input v-model="ruleForm.vessel" :placeholder="$t('table.PleaseEnter')" clearable>
                                </el-input>
                            </el-form-item>
                        </el-col>
                        <el-col style="width:20%"> 
                            <el-form-item :label="$t('table.hangCi')">
                                <el-input v-model="ruleForm.voyage" :placeholder="$t('table.PleaseEnter')" clearable>
                                </el-input>
                            </el-form-item>
                        </el-col>
                        <el-col style="width:20%">
                            <el-form-item :label="$t('table.week')">
                                <el-select
                                    v-model="ruleForm.weekNo"
                                    style="width:100%;"
                                    :placeholder="$t('table.PleaseSelect')"
                                    clearable
                                    default-first-option
                                >
                                    <el-option
                                        v-for="item in weekList"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value"
                                    >
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col style="width:20%"> 
                            <el-form-item :label="$t('table.wharf')">
                                <el-select
                                    v-model="ruleForm.polTerminal"
                                    :placeholder="$t('table.PleaseSelect')"
                                    clearable
                                    :loading="selectLoading"
                                    @focus="startPortFocus"
                                    @change="startPortChange($event)"
                                    style="width:100%"
                                >
                                    <el-option
                                        v-for="item in startPort"
                                        :key="item.id"
                                        :label="item.terminalCn"
                                        :value="item.terminalCn"
                                    >
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </div>
                <!-- 重置，搜索按钮 -->
                <div class="contenRight">
                    <div class="resetBtn" @click="resetBtn">{{ $t('task.reset') }}</div>
                    <div class="serachBtn" @click="searchGetList('resetPage')">{{ $t('task.search') }}</div>
                </div>
                <div style="clear:both;"></div>
            </el-form>
        </div>
        <div class="content-table-box">
            <!-- 待确认，全部tab部分 -->
            <ul class="table_title_bar">
                <li :class="isConfirm?'active':''" @click="handleClickSwitch('confirm')">{{ $t('task.Confirm') }}<span v-if="missionCount">{{'【' + missionCount + $t('task.tip') + '】'}}</span></li>
                <li :class="!isConfirm?'active':''" @click="handleClickSwitch('all')">{{ $t('task.schwsuleTable') }}</li>
            </ul>
            <!-- 确认，批量上传按钮 -->
            <div class="table_btn_bar">
                <div class="btn_bar_left">
                    <div class="table_btn" @click="handleClickSetStatus">{{ $t('task.define') }}</div>
                </div>
                <div class="table_btn" @click="handleClickBulkUpload">{{ $t('task.BulkUpload') }}</div>
            </div>
            <!-- 动态船舶表格 -->
            <el-table
                :data="tableData"
                style="width: 100%;"
                :header-cell-style="{background:'#3bafda',color:'#ffffff',fontSize:'12px'}"
                :row-class-name="tabRowClassName"
                tooltip-effect="dark"
                ref="table"
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
                <el-table-column prop="platFormStatus" :label="$t('table.admin')" align="left" :show-overflow-tooltip="true" min-width="80" :sortable="sortableState" :filters="[]">           
                    <template slot-scope="scope">
                        <span v-if="scope.row.platFormStatus==0">未审核</span>
                        <span v-if="scope.row.platFormStatus==1">已审核</span>
                    </template>
                </el-table-column>
                <el-table-column prop="status" :label="$t('table.type')" align="left" :show-overflow-tooltip="true" min-width="56" :sortable="sortableState" :filters="[]">           
                    <template slot-scope="scope">
                        <span v-if="scope.row.status==0">正常</span>
                        <span v-if="scope.row.status==1">换船</span>
                        <span v-if="scope.row.status==2">空班</span>
                    </template>
                </el-table-column>
                <el-table-column prop="weekNo" :label="$t('table.week')" align="left" :show-overflow-tooltip="true" min-width="56" :sortable="sortableState" :filters="[]">           
                </el-table-column>
                <el-table-column prop="pol" :label="$t('table.pol')" align="left" :show-overflow-tooltip="true" min-width="74" :sortable="sortableState" :filters="[]">
                </el-table-column>
                <el-table-column prop="carrier" :label="$t('table.carrier')" align="left" :show-overflow-tooltip="true" min-width="68" :sortable="sortableState" :filters="[]">   
                </el-table-column>
                <el-table-column prop="routeCode" :label="$t('table.Code')" align="left" :show-overflow-tooltip="true" min-width="80" :sortable="sortableState" :filters="[]">   
                </el-table-column>
                <el-table-column prop="vessel" :label="$t('table.vessel')" align="left" :show-overflow-tooltip="true" min-width="56" :sortable="sortableState" :filters="[]">   
                </el-table-column>
                <el-table-column prop="voyage" :label="$t('table.ExportVoyage')" align="left" :show-overflow-tooltip="true" min-width="80" :sortable="sortableState" :filters="[]">   
                </el-table-column>
                <el-table-column prop="stEtd" label="ETD" align="left" :show-overflow-tooltip="true" min-width="56" :sortable="sortableState" :filters="[]">
                </el-table-column>
                <el-table-column prop="dyEtd" :label="$t('table.dynamicETD')" align="left" :show-overflow-tooltip="true" min-width="80" :sortable="sortableState" :filters="[]">
                </el-table-column>
                <el-table-column prop="terminalPinYin" :label="$t('table.wharf')" align="left" :show-overflow-tooltip="true" min-width="56" :sortable="sortableState" :filters="[]">
                    <template slot-scope="scope">
                        <span>{{scope.row.terminal}}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="updateTime" :label="$t('table.updatetime')" align="left" :show-overflow-tooltip="true" min-width="96" :sortable="sortableState" :filters="[]">
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
                selectLoading: false,
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
                startPort: [], //起始港码头列表
                companyNameList: [], //船公司
                portCountryList: [], //目的港国家
                tableData: [], //表格数据
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
                    polCode:'',//起始港五子码
                    polId:'',//起始港ID
                    polCityId:'',//起始港城市ID
                    companyName:'',//船公司
                    scac:'',//船公司四字码
                    routeCode:'',//航线代码
                    status: '',//类型
                    vessel:'',//船名
                    voyage:'',//航次
                    weekNo:'',//周次
                    polTerminal:'',//起始港码头
                    polTerminalId:'',//起始港码头id
                },
                //状态
                stateList: [
                    {
                        value: '',
                        label: "全部"
                    },
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
                ],
                weekList: [],//周次
                listInfo: {}, //动态船舶列表页面搜索信息
            }
        },
        methods: {
            //确认按钮
            handleClickSetStatus(){
                if(this.multipleSelection.length){
                    let query = {
                        userId: this.userId,
                        voyageModels: this.multipleSelection
                    }
                    this.$Axios.post(this.GLOBAL.url + `expert/dynamic/updateVoyageByIds`, query, {
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
                }else{
                    this.$message({//请选择
                        message: this.$t('task.PleaseSelect'),
                        type: "warning",
                        customClass: "base-message-zindex"
                    });
                }
            },
            //批量上传
            handleClickBulkUpload(){
                this.$parent.changeComponents('Upload')
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
            //全选
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
            //双击列表行
            tabRowChange(row) {
                this.$parent.changeComponents('Detail')
                this.$parent.rowDetail = row
                this.listInfo = {
                    pol: this.ruleForm.pol,//起始港
                    polCode: this.ruleForm.polCode,//起始港五子码
                    polId: this.ruleForm.polId,//起始港ID
                    polCityId: this.ruleForm.polCityId,//起始港城市ID
                    portStartList: this.portStartList,
                    companyName: this.ruleForm.companyName,//船公司
                    scac: this.ruleForm.scac,//船公司四字码
                    routeCode: this.ruleForm.routeCode,//航线代码
                    status: this.ruleForm.status,//类型
                    vessel: this.ruleForm.vessel,//船名
                    voyage: this.ruleForm.voyage,//航次
                    weekNo: this.ruleForm.weekNo,//周次
                    polTerminal: this.ruleForm.polTerminal,//起始港码头
                    polTerminalId: this.ruleForm.polTerminalId,//起始港码头id
                    pageNo: this.page.pageNo,
                    pageSize: this.page.pageSize,
                    switchTab: this.switchTab,
                    pathId: row.id
                }
                this.$parent.listInfo = this.listInfo
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
            //起始港码头focus
            startPortFocus(){
                this.selectLoading = true
                this.startPort = []
                this.$Axios.get(this.GLOBAL.url + `schedules/route/queryTerminal?portCode=${this.ruleForm.polCode}`,{
                    headers: {
                        Authorization: this.getToken()
                    },
                }).then(res => {
                    this.startPort = res.data.content;
                    this.selectLoading = false
                })
            },
            //起始港码头change
            startPortChange(val){
                if(val){ //选择了起始港码头
                    for (let i = 0; i < this.startPort.length; i++) {
                        if(this.startPort[i].terminalCn == val) {
                            this.ruleForm.polTerminalId = this.startPort[i].id
                        }  
                    }
                }else {
                    this.ruleForm.polTerminalId = ''
                }
            },
            //船公司搜索      
            companyNameRemote(value){
                var that = this
                //获取航线专家起始港下拉框
                this.$Axios.get(that.GLOBAL.url + `expert/path/getCompany?userId=${this.userId}&companyName=${value}`,{
                    headers: {
                        Authorization: this.getToken()
                },
                }).then(res => {
                    if(res.data.status == 1){
                        that.companyNameList = res.data.content
                    }
                }).catch((err)=>{
                    
                })
            },
            //船公司Focus事件
            companyNameFocus(value){
                var that = this
                //获取航线专家起始港下拉框
                this.$Axios.get(that.GLOBAL.url + `expert/path/getCompany?userId=${this.userId}`,{
                    headers: {
                        Authorization: this.getToken()
                },
                }).then(res => {
                    if(res.data.status == 1){
                        that.companyNameList = res.data.content
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
                this.ruleForm.companyName = ''
                this.ruleForm.scac = ''
                this.ruleForm.routeCode = ''
                this.ruleForm.vessel = ''
                this.ruleForm.weekNo = ''
                this.ruleForm.polTerminal = ''
                this.ruleForm.polTerminalId = ''
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
                    this.$Axios.get(this.GLOBAL.url + `expert/dynamic/getDynamics?userId=${this.userId
                        }&polCode=${this.ruleForm.polCode?this.ruleForm.polCode:''
                        }&pageNumber=${this.page.pageNo
                        }&pageSize=${this.page.pageSize
                        }&routeCode=${this.ruleForm.routeCode?this.ruleForm.routeCode:''
                        }&scac=${this.ruleForm.scac?this.ruleForm.scac:''
                        }&vessel=${this.ruleForm.vessel?this.ruleForm.vessel:''
                        }&weekNo=${this.ruleForm.weekNo?this.ruleForm.weekNo:''
                        }&polTerminalId=${this.ruleForm.polTerminalId?this.ruleForm.polTerminalId:''
                        }&voyage=${this.ruleForm.voyage?this.ruleForm.voyage:''
                        }&status=${this.ruleForm.status
                        }&expertStatus=${this.expertStatus
                        }`,{
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
                                    };    
                                }else{
                                    this.tableData = []
                                    this.tableData = res.data.content
                                    for(let i=0; i<this.tableData.length; i++){
                                        this.tableData[i].terminalPinYin = this.tableData[i].terminal?this.getPinYin(this.tableData[i].terminal):''
                                    }
                                    if(this.$refs.refPagination){
                                        this.$refs.refPagination.page.pageNo = this.page.pageNo;
                                        this.$refs.refPagination.page.pageSize = this.page.pageSize;
                                        this.$refs.refPagination.page.total = res.data.total;
                                        this.$refs.refPagination.changeValue()  
                                        //待确认数量
                                        this.missionCount = res.data.size
                                        this.$parent.missionCount = res.data.size
                                        if(Math.ceil(this.$refs.refPagination.page.total / this.page.pageSize) < this.page.pageNo){
                                            this.$refs.refPagination.handleCurrentChange(1);
                                        };
                                    } 
                                }
                            }
                        }
                        this.loading = false
                    }).catch((err)=>{
                        this.loading = false 
                    })
                }
            },
            //获取今年有多少周
            weekNumber() {
                var d1 = new Date()
                var Y = d1.getFullYear()
                var S = Y + '-' + '01' + '-' + '01' //一年的开始时间
                var E = Y + '-' + '12' + '-' + '31' //一年的结束时间
                let currentYearDays = this.isLeapYear(Y) ? 366 : 365
                let beforeDays = 7 - this.getDate(S)+1
                let afterDays = this.getDate(E)
                let vaildDays = currentYearDays - beforeDays - afterDays
                // 今年的周数
                this.weeks = (vaildDays / 7) + 2 //加的这一 若是这周是从星期三开始的 我减去了前面的天数
                for (let i = 1; i <= this.weeks; i++) {
                    this.weekList.push({
                        value : i,
                        label : i,
                    })
                }
            },
            //判断是否是闰年
            isLeapYear(year) {
                if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
                    return true

                } else {
                    return false
                }
            },
            //获取某年某月某日是星期几
            getDate(date) {
                let oDate = new Date(date)
                let day = oDate.getDay()
                switch (day) {
                    case 0:
                        // 星期日
                        return 0
                    case 1:
                        // 星期一
                        return 1
                    case 2:
                        // 星期二
                        return 2
                    case 3:
                        // 星期三
                        return 3
                    case 4:
                        // 星期四
                        return 4
                    case 5:
                        // 星期五
                        return 5
                    case 6:
                        // 星期六
                        return 6
                }
            },
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
            this.weekNumber() //获取今年一共有多少周 周序号全部
            this.userId = this.userInfo
            if(this.$parent.listInfo.pathId){
                this.ruleForm.pol = this.$parent.listInfo.pol
                this.ruleForm.polCode = this.$parent.listInfo.polCode
                this.ruleForm.polId = this.$parent.listInfo.polId
                this.ruleForm.polCityId = this.$parent.listInfo.polCityId
                this.portStartList = this.$parent.listInfo.portStartList
                this.ruleForm.companyName = this.$parent.listInfo.companyName
                this.ruleForm.scac = this.$parent.listInfo.scac
                this.ruleForm.routeCode = this.$parent.listInfo.routeCode
                this.ruleForm.status = this.$parent.listInfo.status
                this.ruleForm.vessel = this.$parent.listInfo.vessel
                this.ruleForm.voyage = this.$parent.listInfo.voyage
                this.ruleForm.weekNo = this.$parent.listInfo.weekNo
                this.ruleForm.polTerminal = this.$parent.listInfo.polTerminal
                this.ruleForm.polTerminalId = this.$parent.listInfo.polTerminalId
                this.page.pageNo = this.$parent.listInfo.pageNo
                this.page.pageSize = this.$parent.listInfo.pageSize
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

