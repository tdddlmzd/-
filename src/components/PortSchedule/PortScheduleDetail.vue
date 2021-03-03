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
            .transitCount{
                .el-input__suffix{
                    display: none;
                }
            }
        }
    }
    .route_detail{
        display: flex;
        justify-content: space-between;
        .route_title{
            font-size: 12px;
            line-height: 22px;
            color: #282828;
            font-weight: 600;
            margin-bottom: 20px;
        }
        .route_btn{
            display: flex;
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
    .SharedCabin_info{
        .SharedCabin_table{
            .table_line{
                display: flex;
                height: 40px;
                line-height: 40px;
                font-size: 12px;
                color: #282828;
                .type{
                    width: 137px;
                    padding-left: 11px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
                .info{
                    flex: 1;
                    width: 0;
                    padding-left: 10px;
                    display: flex;
                    flex-wrap: wrap;
                    .info_item{
                        height: 24px;
                        background-color: #f2f2f2;
                        border-radius: 2px;
                        border: solid 1px #f2f2f2;
                        font-size: 12px;
                        line-height: 22px;
                        color: #282828;
                        display: flex;
                        margin-right: 10px;
                        div{
                            padding-left: 6px;
                            padding-right: 3px;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                        }
                        i{
                            cursor: pointer;
                            width: 12px;
                            font-size: 12px;
                            line-height: 24px;
                            margin-right: 3px;
                            color: #909090;
                        }
                    }
                    .add_btn{
                        cursor: pointer;
                        font-size: 14px;
                        color: #909090;
                        margin-top: 6px;
                        margin-bottom: 12px;
                    }
                }
            }
            .table_line:first-of-type{
                background: #f2f2f2;
            }
            .table_line:last-of-type{
                background: #fff;
                height: auto;
                .type{
                    width: 135px;
                    border: solid 1px #f2f2f2;
                    border-top: none;
                    padding-left: 10px;
                    display: flex;
                    align-items: center;
                    line-height: 12px;
                }
                .info{
                    border-right: solid 1px #f2f2f2;
                    border-bottom: solid 1px #f2f2f2;
                    padding-top: 8px;
                    .info_item_box{
                        margin-bottom: 8px;
                    }
                    .noCabin{
                        color: #909090;
                        line-height: 24px;
                        margin-bottom: 8px;
                    }
                }
            }
        }
    }
    .btn_warp{
        padding: 20px 0;
        .btn_warp_box{
            width: 270px;
            display: flex;
            justify-content: space-between;
            margin: 0 auto;
            .btn{
                width: 120px;
                height: 30px;
                border-radius: 15px;
                font-size: 12px;
                line-height: 30px;
                color: #fff;
                text-align: center;
                cursor: pointer;
            }
            .invalidBtn{
                background-color: #26b4b2;
                &:hover{
                   background-color: #51c3c1; 
                }
            }
            .correctBtn{
                background-color: #072c4c;
                &:hover{
                   background-color: #395670;
                }
            }
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
            border-radius: 0;
            border-color: #d1d1d1;
            font-size: 12px;
            background: rgba(0, 0, 0, 0);
            color: #282828;
        }
        .el-select__caret{
            line-height: 34px;
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
.SharedCabinAdd{
    .el-dialog__headerbtn .el-dialog__close{
        margin-top: 1px;
    }
}
</style>
<template>
    <div>
        <!-- 港港船期详情页 -->
        <Loading v-if="loading"></Loading>
        <div class="PortScheduleDetail">
            <!-- 返回按钮 -->
            <div class="detail_title">
                <div class="back_icon" @click="goPortScheduleList"></div>
                <div class="detail_title_name">{{$t('task.ScheduleDetails')}}</div>
            </div>
            <!-- 基础信息部分 -->
            <div class="base_info">
                <div class="public_title">{{$t('task.BasicInfo')}}</div>
                <!-- 基础信息表单 -->
                <el-form
                    size="mini"
                    label-position="right"
                    :model="ruleForm"
                    ref="ruleForm"
                    label-width="66px"
                >
                    <div class="base_info_search">
                        <el-row>
                            <el-col style="width:24%">
                                <el-form-item :label="$t('table.pol')">
                                    <el-input v-model="ruleForm.pol" :disabled="true"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col style="width:24%">
                                <el-form-item :label="$t('table.pod')">
                                    <el-input v-model="ruleForm.pod" :disabled="true"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col style="width:24%"> 
                                <el-form-item :label="$t('table.carrier')" :rules="[{ required: (!isTrue && isNew)}]">
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
                                        :disabled="isTrue || !isNew"
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
                            <el-col style="width:24%">
                                <el-form-item label="ETD">
                                    <el-input v-model="ruleForm.etd" :disabled="true"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col style="width:24%">
                                <el-form-item :label="$t('table.TotalVoyage')" :rules="[{ required: true}]">
                                    <el-input 
                                    v-model="ruleForm.transitTime"
                                    :placeholder="$t('table.PleaseEnter')"
                                    @input="ruleForm.transitTime = ruleForm.transitTime.replace(/[^0-9]/g,'')">
                                    </el-input>
                                </el-form-item>
                            </el-col>
                            <el-col style="width:24%"> 
                                <el-form-item :label="$t('table.paths')">
                                    <el-select
                                    v-model="ruleForm.transitCount"
                                        style="width:100%"
                                        class="transitCount"
                                        :disabled="true"
                                        placeholder=""
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
                            <el-col style="width:24%">
                                <el-form-item :label="$t('table.type')" :rules="[{ required: isNew}]">
                                    <el-select
                                        v-model="ruleForm.state"
                                        style="width:100%;"
                                        :placeholder="$t('table.PleaseSelect')"
                                        clearable
                                        default-first-option
                                    >
                                    <!-- 新增类型没有待定 -->
                                    <template v-if="isNew">
                                        <el-option
                                            v-for="item in stateListNew"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value"
                                        >
                                        </el-option>
                                    </template>
                                    <!-- 编辑状态有待定 -->
                                    <template v-else>
                                        <el-option
                                            v-for="item in stateList"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value"
                                        >
                                        </el-option>
                                    </template>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </div>
                </el-form>
            </div>
            <!-- 路径详情部分 -->
            <div class="route_detail">
                <div class="route_title">{{$t('task.RouteDetails')}}</div>
                <!-- 新增状态下，删除，新增路径按钮 -->
                <div class="route_btn" v-if="isNew">
                    <div class="route_delete btn" @click="handleClickRouteDelete">{{$t('task.delete')}}</div>
                    <div class="route_add btn" @click="handleClickRouteAdd">{{$t('task.add')}}</div>
                </div>
            </div>
            <!-- 路径详情表格 -->
            <el-table
                :data="tableData"
                border
                style="width: 100%;"
                :header-cell-style="{background:'#3bafda',color:'#ffffff',fontSize:'12px'}"
                :row-class-name="tabRowClassName"
                tooltip-effect="dark"
                ref="table"
                @row-dblclick="tabRouteChange"
                @selection-change="handleSelectionChange"
                :header-row-class-name="headerStyle"
            >
                <el-table-column v-if="isNew" type="selection" width="45">
                        
                </el-table-column>
                <el-table-column  prop="userName" :label="$t('table.no')" :show-overflow-tooltip="true" align="left" min-width="24"> 
                    <template slot-scope="scope">
                        {{scope.$index +1}}
                    </template>
                </el-table-column>
                <el-table-column prop="transitType" :label="$t('table.modeOfTransport')" align="left" :show-overflow-tooltip="true" min-width="50">           
                </el-table-column>
                <el-table-column prop="pol" :label="$t('table.pol')" align="left" :show-overflow-tooltip="true" min-width="80">           
                </el-table-column>
                <el-table-column prop="polTerminal" :label="$t('table.Polwharf')" align="left" :show-overflow-tooltip="true" min-width="60">           
                    <template slot-scope="scope">
                        <el-select
                            v-model="scope.row.polTerminal"
                            v-if="scope.row.transitType != 'LINE' && detailStatus == 'edit'"
                            placeholder=""
                            clearable
                            :loading="selectLoading"
                            @focus="startPortFocus(scope.row.polCode)"
                            @change="startPortChange($event,scope.row.index)"
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
                        <span v-else>{{scope.row.polTerminal}}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="pod" :label="$t('table.pod')" align="left" :show-overflow-tooltip="true" min-width="80">
                </el-table-column>
                <el-table-column prop="podTerminal" :label="$t('table.Podwharf')" align="left" :show-overflow-tooltip="true" min-width="60">
                    <template slot-scope="scope">
                        <el-select
                            v-if="scope.row.transitType != 'LINE' && detailStatus == 'edit'"
                            v-model="scope.row.podTerminal"
                            placeholder=""
                            clearable
                            :loading="selectLoading"
                            @focus="endPortFocus(scope.row.podCode)"
                            @change="endPortChange($event,scope.row.index)"
                            style="width:100%"
                        >
                            <el-option
                                v-for="item in endPort"
                                :key="item.id"
                                :label="item.terminalCn"
                                :value="item.terminalCn"
                            >
                            </el-option>
                        </el-select>
                        <span v-else>{{scope.row.podTerminal}}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="routeCode" :label="$t('table.RouteCode')" align="left" :show-overflow-tooltip="true" min-width="70">   
                    <template slot-scope="scope">
                        <span v-if="scope.row.transitType == 'LINE' && detailStatus == 'edit'" style="color: #007ce3;cursor: pointer" @click="handleClickRouteCode(scope.row)">{{scope.row.routeCode != 'UNDEFINED'?scope.row.routeCode:'-'}}</span>
                        <span v-else>{{scope.row.routeCode != 'UNDEFINED'?scope.row.routeCode:'-'}}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="etd" label="ETD" align="left" :show-overflow-tooltip="true" min-width="55">
                    <template slot-scope="scope">
                        <el-select
                            v-if="scope.row.transitType != 'LINE' && detailStatus == 'edit'"
                            v-model="scope.row.etd"
                            style="width:100%;"
                            placeholder=""
                            default-first-option
                        >
                            <el-option
                                v-for="item in ETDList"
                                :key="item.id"
                                :label="item.value"
                                :value="item.label"
                            >
                            </el-option>
                        </el-select>
                        <span v-else>{{scope.row.etd}}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="eta" label="ETA" align="left" :show-overflow-tooltip="true" min-width="55">
                    <template slot-scope="scope">
                        <el-select
                            v-if="scope.row.transitType != 'LINE' && detailStatus == 'edit'"
                            v-model="scope.row.eta"
                            style="width:100%;"
                            placeholder=""
                            default-first-option
                        >
                            <el-option
                                v-for="item in ETDList"
                                :key="item.id"
                                :label="item.value"
                                :value="item.label"
                            >
                            </el-option>
                        </el-select>
                        <span v-else>{{scope.row.eta}}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="transitTime" :label="$t('table.voyage')" align="left" :show-overflow-tooltip="true" min-width="55">
                    <template slot-scope="scope">
                        <el-input
                            v-if="scope.row.transitType != 'LINE' && detailStatus == 'edit'"
                            v-model="scope.row.transitTime"
                            @input="scope.row.transitTime = scope.row.transitTime.replace(/[^0-9]/g,'')"
                        />
                        <span v-else>{{scope.row.transitTime}}</span>
                    </template>
                </el-table-column> 
            </el-table>
            <!-- 共舱信息部分 -->
            <div class="SharedCabin_info">
                <!-- 共舱信息 -->
                <div class="public_title">{{$t('task.SharedCabin')}}</div>
                <div class="SharedCabin_table">
                    <div class="table_line">
                        <!-- 类型 -->
                        <div class="type">{{$t('table.type')}}</div>
                        <!-- 共舱船公司(航线)信息 -->
                        <div class="info">{{$t('table.CabinCarrier')}}</div>
                    </div>
                    <div class="table_line">
                        <!-- 该路径常规共舱(标准) -->
                        <div class="type" v-title="$t('table.CommonCabin')">{{$t('table.CommonCabin')}}</div>
                        <div class="info" v-if="isEditCabin">
                            <template v-if="isShowCabin">
                                <div class="info_item_box" v-for="item in AllCabinList" :key="item.staticId">
                                    <div class="info_item" v-if="item.isSelect">
                                        <div>{{item.carrier + '(' + item.displayName + ')'}}</div>
                                        <i class="el-icon-close" @click="handleClickDelCabin(item)"></i>
                                    </div>
                                </div>
                            </template>
                            <!-- 删除共舱关闭按钮 -->
                            <i class="el-icon-circle-plus-outline add_btn" @click="handleClickEditCabin"></i>
                        </div>
                        <!-- 新增共舱按钮 -->
                        <div class="info" v-else>
                            <div class="noCabin">{{$t('table.noCabinCarrier')}}</div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 修改记录部分 -->
            <div class="Modification_record">
                <div class="public_title">{{$t('task.record')}}</div>
                <!-- 修改记录表格 -->
                <el-table
                    :data="recordTableData"
                    style="width: 100%;"
                    border
                    :header-cell-style="{background:'#3bafda',color:'#ffffff',fontSize:'12px'}"
                    :row-class-name="tabRowClassName"
                    tooltip-effect="dark"
                    ref="table"
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
                <!-- 新增状态下，取消，确定按钮 -->
                <div class="btn_warp_box" v-if="isNew">
                    <div class="invalidBtn btn" @click="goPortScheduleList">{{$t('task.cancel')}}</div>
                    <div class="correctBtn btn" @click="handleClickOk">{{$t('task.determine')}}</div>
                </div>
                <!-- 编辑状态下，无效并提交，确认并提交按钮 -->
                <div class="btn_warp_box" v-else>
                    <div class="invalidBtn btn" @click="handleClickSubmit('invalid')">{{$t('task.invalidBtn')}}</div>
                    <div class="correctBtn btn" @click="handleClickSubmit('correct')">{{$t('task.correctBtn')}}</div>
                </div>
            </div>
        </div>
        <!-- 新增路径弹窗 -->
        <el-dialog
            class="routeAdd"
            :visible.sync="routeAddDialogVisible"
            v-if="routeAddDialogVisible"
            :close-on-click-modal="false"
            :close-on-press-escape="false"
            width="554px"
            center
        >
            <RouteAdd
                :scac="ruleForm.scac"
                :routeTitle="routeTitle"
                ref="routeAdd"
            ></RouteAdd>
        </el-dialog>
        <!-- 编辑挂靠港口弹窗 -->
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
                :scac="ruleForm.scac"
            ></PortOfCall>
        </el-dialog>
        <!-- 编辑共舱弹窗 -->
        <el-dialog
            class="SharedCabinAdd"
            :visible.sync="SharedCabinDialogVisible"
            v-if="SharedCabinDialogVisible"
            :close-on-click-modal="false"
            :close-on-press-escape="false"
            width="428px"
            center
        >
            <SharedCabinAdd
                :AllCabinList="AllCabinList"
            ></SharedCabinAdd>
        </el-dialog>
    </div>  
</template>

<script>
    import Loading from "@components/loading";
    import ThePagination from "@components/ThePagination";
    import RouteAdd from "@components/PortSchedule/routeAdd";
    import SharedCabinAdd from "@components/PortSchedule/SharedCabinAdd";
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
                selectLoading: false,
                isNew: false,
                routeAddDialogVisible: false,//新增路径详情弹窗
                routeDetailDialogVisible: false,//航线代码弹窗
                SharedCabinDialogVisible: false,//共舱编辑弹窗
                detailStatus: '',
                routeTitle: '',//
                isTrue: false,
                isEditCabin: false,//是否可编辑共舱
                isShowCabin: false,//是否展示共舱
                ruleForm: {
                    pol: '',//起运港
                    polCode: '',//起运港五子码
                    polCityId: '',//起始港城市Id
                    polId: '',//起始港Id
                    polTerminal: '',//起始港码头
                    polTerminalId: '',//起始港码头id
                    pod: '',//目的港
                    podCode: '',//目的港五子码
                    podCityId: '',//目的港城市Id
                    podId: '',//目的港Id
                    polTerminal: '',//目的港码头
                    podTerminalId: '',//目的港码头id 
                    companyName: '',//船公司
                    companyId: '',//船公司id
                    scac: '',//船公司四字码
                    gcId: '',//新增头程共舱id
                    etd: '',//ETD
                    transitTime: '',//总航程
                    transitCount: '',//路径数
                    state: '',//类型
                },
                pathId: '',//路径ID
                gcId: '',//共舱Id
                //传给挂靠港弹窗的信息
                staticId: '',//选中的航线id
                polCode: '',
                podCode: '',
                routeCode: '',
                /////////////////////
                startPort: [],//起运港码头列表
                endPort: [],//目的港码头列表
                companyNameList: [],//船公司列表
                //ETD列表
                ETDList : [
                    {
                        value : 'MON',
                        label : 'MON',
                    },
                    {
                        value : 'TUE',
                        label : 'TUE',
                    },
                    {
                        value : 'WED',
                        label : 'WED',
                    },
                    {
                        value : 'THU',
                        label : 'THU',
                    },
                    {
                        value : 'FRI',
                        label : 'FRI',
                    },
                    {
                        value : 'SAT',
                        label : 'SAT',
                    },
                    {
                        value : 'SUN',
                        label : 'SUN',
                    },
                    {
                        value : '未知',
                        label : '未知',
                    },

                ],
                tableData: [],//基础信息表
                tableDataRow: {},//当前双击行信息
                multipleSelection: [],//多选数组
                delectableData: [],//删除的路径详情
                recordTableData: [],//修改记录列表
                PortScheduleDetail: [],//港港船期详情数据
                type: 0, //0爬虫，1人工
                AllCabinList: [],//全部共舱数据
                //类型
                stateList: [
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
                ],
                //新增页面类型
                stateListNew:[
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
                    }
                ],
                //路径数
                isTransitList: [
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
            }
        },
        methods: {
            //获取港港船期详情
            getDetail(getCabin){
                this.loading = true
                this.$Axios.get(this.GLOBAL.url + `expert/path/details?pathId=${this.pathId}`,{
                    headers: {
                        Authorization: this.getToken()
                },
                }).then(res => {
                    if(res.data.status == 1){
                        this.PortScheduleDetail = res.data.content;
                        this.type = this.PortScheduleDetail.type
                        this.tableData = this.PortScheduleDetail.pathList
                        this.recordTableData = this.PortScheduleDetail.records
                        this.gcId = this.PortScheduleDetail.gcId?this.PortScheduleDetail.gcId:''
                        this.ruleForm.pol = this.PortScheduleDetail.pol
                        this.ruleForm.polCode = this.PortScheduleDetail.polCode
                        this.ruleForm.pod = this.PortScheduleDetail.pod
                        this.ruleForm.podCode = this.PortScheduleDetail.podCode
                        this.ruleForm.companyName = this.PortScheduleDetail.carrier
                        this.ruleForm.scac = this.PortScheduleDetail.scac
                        this.ruleForm.etd = this.PortScheduleDetail.etd
                        this.ruleForm.transitTime = this.PortScheduleDetail.transitTime
                        this.ruleForm.transitCount = this.PortScheduleDetail.transitCount
                        this.ruleForm.state = this.PortScheduleDetail.state
                        // 首次进入港港详情页获取共舱信息
                        if(getCabin == 'getCabin'){
                            if(this.tableData.length == 1){
                                this.getCabinData()
                            }else{
                                this.isEditCabin = false
                            }  
                        }
                    }
                    this.loading = false
                })
            },
            // 返回列表
            goPortScheduleList(type){
                this.$parent.PortSchedule = true
            },
            // 新增状态确定按钮
            handleClickOk(){
                if(this.tableData.length === 0){
                    this.$message({//请选择航线
                        message: this.$t('task.chooseRoute'),
                        type: "warning",
                        customClass: "base-message-zindex"
                    });
                    return
                }
                //总航程为空
                if(this.ruleForm.transitTime === ''){
                    this.$message({//请输入总航程
                        message: this.$t('task.enterTransitTime'),
                        type: "warning",
                        customClass: "base-message-zindex"
                    });
                    return
                }
                //直达路径的航程必须和路径详情里的航程一致
                if(this.tableData.length == 1){
                    if(this.tableData[0].transitTime != this.ruleForm.transitTime){
                        this.$message({//页面航程需要保持一致
                            message: this.$t('task.toBeConsistent'),
                            type: "warning",
                            customClass: "base-message-zindex"
                        });
                        return
                    }
                }
                if(this.ruleForm.state === ''){
                    this.$message({//请选择类型
                        message: this.$t('task.chooseState'),
                        type: "warning",
                        customClass: "base-message-zindex"
                    });
                    return
                }
                if(this.tableData.length == 2){
                    if(this.tableData[1].polId !== this.tableData[0].podId || 
                    this.tableData[1].polTerminalId !== this.tableData[0].podTerminalId){
                        this.$message({//起始港、码头与上一段的目的港不一致
                            message: this.$t('task.Inconsistent'),
                            type: "warning",
                            customClass: "base-message-zindex"
                        });
                        return false;
                    }
                }
                if(this.tableData.length == 3){
                    if(this.tableData[2].polId !== this.tableData[1].podId ||
                    this.tableData[2].polTerminalId !== this.tableData[1].podTerminalId ||
                    this.tableData[1].polId !== this.tableData[0].podId ||
                    this.tableData[1].polTerminalId !== this.tableData[0].podTerminalId){
                        this.$message({//起始港、码头与上一段的目的港不一致
                            message: this.$t('task.Inconsistent'),
                            type: "warning",
                            customClass: "base-message-zindex"
                        });
                        return false;
                    }
                }
                if(this.tableData.length == 4){
                    if(this.tableData[3].polId !== this.tableData[2].podId ||
                    this.tableData[3].polTerminalId !== this.tableData[2].podTerminalId ||
                    this.tableData[2].polId !== this.tableData[1].podId ||
                    this.tableData[2].polTerminalId !== this.tableData[1].podTerminalId ||
                    this.tableData[1].polId !== this.tableData[0].podId ||
                    this.tableData[1].polTerminalId !== this.tableData[0].podTerminalId){
                        this.$message({//起始港、码头与上一段的目的港不一致
                            message: this.$t('task.Inconsistent'),
                            type: "warning",
                            customClass: "base-message-zindex"
                        });
                        return false;
                    }
                }
                for (let i = 0; i < this.tableData.length; i++) {
                    this.tableData[i].sortOrder = i+1 
                    this.tableData[i].transitSort = i+1 
                }
                if(this.AllCabinList.length){
                    for(let i=0; i<this.AllCabinList.length; i++){
                        if(this.AllCabinList[i].flag == 0 && this.AllCabinList[i].isSelect == false){
                            this.AllCabinList[i].delFlag = 1
                        }
                    }
                }
                let query = {
                    userId: this.userId,
                    state: this.ruleForm.state,
                    gcId: this.ruleForm.gcId?this.ruleForm.gcId:'',
                    etd: this.ruleForm.etd?this.ruleForm.etd:'',
                    carrier: this.ruleForm.companyName?this.ruleForm.companyName:'',
                    scac: this.ruleForm.scac?this.ruleForm.scac:'',
                    companyId: this.ruleForm.companyId?this.ruleForm.companyId:'',
                    pol: this.ruleForm.pol?this.ruleForm.pol:'',
                    pod: this.ruleForm.pod?this.ruleForm.pod:'',
                    polCode: this.ruleForm.polCode?this.ruleForm.polCode:'',
                    podCode: this.ruleForm.podCode?this.ruleForm.podCode:'',
                    polId: this.ruleForm.polId?this.ruleForm.polId:'',
                    polCityId: this.ruleForm.polCityId?this.ruleForm.polCityId:'',
                    podCityId: this.ruleForm.podCityId?this.ruleForm.podCityId:'',
                    transitCount: this.ruleForm.transitCount?this.ruleForm.transitCount:'',
                    transitTime: this.ruleForm.transitTime,
                    type: 1,
                    vId:0,
                    onTime:0,
                    stop:0,
                    missCount:0,
                    totalCount:0,
                    pathList: this.tableData,
                    commonIds: this.AllCabinList
                }
                this.loading = true
                this.$Axios.post(this.GLOBAL.url + `expert/path/save`, query, {
                    headers: {
                        Authorization: this.getToken()
                },
                }).then(res => {
                    if(res.data.status == 1){
                        this.$message({//保存成功
                            message: this.$t('task.submitSuccessfully'),
                            type: "success",
                            customClass: "base-message-zindex"
                        });
                        this.goPortScheduleList()
                    }else if(res.data.status == 0){
                        this.$message({//数据保存失败 请重新加载页面
                            message: this.$t('task.Failed'),
                            type: "error",
                            customClass: "base-message-zindex"
                        });
                    }else if(res.data.status == 5){
                        this.$message({//存在相同路径
                            message: this.$t('task.samePath'),
                            type: "warning",
                            customClass: "base-message-zindex"
                        });
                    }else if(res.data.status == 7){
                        this.$message({//目的港航线与认证航线不符
                            message: this.$t('task.routeMismatch'),
                            type: "warning",
                            customClass: "base-message-zindex"
                        });
                    }else if(res.data.status == 8){
                        this.$message({//起始港与认证信息不符，请联系管理员
                            message: this.$t('task.polMismatch'),
                            type: "warning",
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
                })
            },
            // 编辑状态提交按钮
            handleClickSubmit(str){
                //总航程为空
                if(this.ruleForm.transitTime === ''){
                    this.$message({//请输入总航程
                        message: this.$t('task.enterTransitTime'),
                        type: "warning",
                        customClass: "base-message-zindex"
                    });
                    return
                }
                //直达路径的航程必须和路径详情里的航程一致
                if(this.tableData.length == 1){
                    if(this.tableData[0].transitTime == null){
                        this.$message({//页面航程需要保持一致
                            message: this.$t('task.toBeConsistent'),
                            type: "warning",
                            customClass: "base-message-zindex"
                        });
                        return
                    }else if(this.tableData[0].transitTime.toString().replace(/\s/g,'') !== this.ruleForm.transitTime.toString().replace(/\s/g,'')){
                        this.$message({//页面航程需要保持一致
                            message: this.$t('task.toBeConsistent'),
                            type: "warning",
                            customClass: "base-message-zindex"
                        });
                        return
                    }
                }
                if(str == 'invalid'){
                    var state = 2
                }else{
                    var state = this.ruleForm.state
                }
                if(this.AllCabinList.length){
                    for(let i=0; i<this.AllCabinList.length; i++){
                        // 删除的共舱
                        if(this.AllCabinList[i].flag == 0 && this.AllCabinList[i].isSelect == false){
                            this.AllCabinList[i].delFlag = 1
                        }
                        // 新增的共舱
                        if(this.AllCabinList[i].flag == 1 && this.AllCabinList[i].isSelect == true){
                            this.AllCabinList[i].delFlag = 0
                        }
                    }
                    this.AllCabinList = this.AllCabinList.filter(item=>{
                        if(item.delFlag !== null){
                            return true
                        }
                    })
                }
                let query = {
                    id: this.PortScheduleDetail.id,
                    userId: this.userId,
                    transitTime: this.ruleForm.transitTime,
                    state: state,
                    type: this.type,
                    pathList: this.tableData,
                    commonIds: this.AllCabinList
                }
                this.loading = true
                this.$Axios.post(this.GLOBAL.url + `expert/path/updatePath`, query, {
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
                        this.goPortScheduleList('edit')
                    }
                    this.loading = false
                }).catch((err)=>{
                    this.$message({//数据保存失败 请重新加载页面
                        message: this.$t('task.Failed'),
                        type: "error",
                        customClass: "base-message-zindex"
                    });
                })
            },
            // 删除一条路径详情
            handleClickRouteDelete(){
                if(this.multipleSelection.length == 0){
                    this.$message({//请选择一条或者多条进行删除
                        message: this.$t('task.chooseDelete'),
                        type: "warning",
                        customClass: "base-message-zindex"
                    });
                    return
                }
                var indexList = []
                var that = this
                for (let i = 0; i < this.multipleSelection.length; i++) {
                    var index = this.multipleSelection[i].index
                    indexList.push(index)
                }
                indexList.sort((a, b)=>{ return b - a});
                indexList.forEach((item,index)=>{
                    that.tableData.splice(item, 1)
                })
                this.multipleSelection.forEach((item,index)=>{
                    if(item.id){
                        item.delFlag = 1
                        that.delectableData.push(item)
                    }
                })
            },
            //新增一条路径详情
            handleClickRouteAdd(){
                if(this.ruleForm.companyName == ''){
                    this.$message({//请选择船公司
                        message: this.$t('task.chooseCarrier'),
                        type: "warning",
                        customClass: "base-message-zindex"
                    });
                }else{
                    if(this.tableData.length > 3){
                        this.$message({//路径最多4程
                            message: this.$t('task.maxRoute'),
                            type: "warning",
                            customClass: "base-message-zindex"
                        });
                    }else{
                        this.routeTitle = '新增'
                        this.routeAddDialogVisible = true
                    }
                }
            },
            //跳转航线代码弹窗
            handleClickRouteCode(row){
                this.routeDetailDialogVisible = true
                this.staticId = row.staticId
                this.polCode = row.polCode
                this.podCode = row.podCode
                this.routeCode = row.routeCode
            },
            //双击路径详情列表
            tabRouteChange(row){
                if(this.detailStatus == 'add'){
                    this.routeTitle = '修改'
                    this.routeAddDialogVisible = true
                    this.tableDataRow = row
                }
            },
            //全选
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
            //共舱标签关闭
            handleClickDelCabin(value) {
                var item = value
                for(let i=0; i<this.AllCabinList.length; i++){
                    if(this.AllCabinList[i].staticId == item.staticId){
                        item.isSelect = false
                        this.AllCabinList.splice(i,1,item)
                    }
                }
            },
            //添加共舱信息
            handleClickEditCabin(){
                this.SharedCabinDialogVisible = true
            },
            //获取共舱信息
            getCabinData(){
                this.$Axios.get(this.GLOBAL.url + `expert/path/selectCabinPathById?gcId=${this.gcId
                }&staticId=${this.tableData[0].staticId?this.tableData[0].staticId:''
                }&polCode=${this.tableData[0].polCode?this.tableData[0].polCode:''
                }&podCode=${this.tableData[0].podCode?this.tableData[0].podCode:''}`,{
                headers: {
                    Authorization: this.getToken()
                },
                }).then(res => {
                    this.AllCabinList = res.data.content
                    if(this.AllCabinList.length){
                        this.isEditCabin = true
                        // 头程新增取共舱id
                        this.ruleForm.gcId = this.AllCabinList[0].cabinId
                        for(let i=0; i<this.AllCabinList.length; i++){
                            if(this.AllCabinList[i].flag == 0){
                                this.AllCabinList[i].isSelect = true
                            }else{
                                this.AllCabinList[i].isSelect = false
                            }
                        }
                    }else{
                        this.isEditCabin = false
                    }
                })
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
            //起始港码头focus
            startPortFocus(val){
                this.selectLoading = true
                this.startPort = []
                if(val){
                    this.$Axios.get(this.GLOBAL.url + `schedules/route/queryTerminal?portCode=${val}`,{
                        headers: {
                            Authorization: this.getToken()
                    },
                    }).then(res => {
                        if(res.data.status == 1){
                            this.startPort = res.data.content;
                        }
                        this.selectLoading = false
                    }).catch((err)=>{
                        this.selectLoading = false
                    })
                }
            },
            //起始港码头change
            startPortChange(val,index){
                if(val){ //选择了起始港码头
                    for (let i = 0; i < this.startPort.length; i++) {
                        if(this.startPort[i].terminalCn == val) {
                            this.tableData[index].polTerminalId = this.startPort[i].id
                        }
                        
                    }
                }else {
                    this.tableData[index].polTerminalId = ''
                }
            },
            //目的港码头focus
            endPortFocus(val){
                this.selectLoading = true
                this.endPort = []
                if(val){
                    this.$Axios.get(this.GLOBAL.url + `schedules/route/queryTerminal?portCode=${val}`,{
                            headers: {
                        Authorization: this.getToken()
                    },
                    }).then(res => {
                        if(res.data.status == 1){
                            this.endPort = res.data.content
                        }
                        this.selectLoading = false
                    }).catch((err)=>{
                        this.selectLoading = false
                    })
                }
            },
            //目的港码头change
            endPortChange(val,index){
                if(val){ //选择了起始港码头
                    for (let i = 0; i < this.endPort.length; i++) {
                        if(this.endPort[i].terminalCn == val) {
                            this.tableData[index].podTerminalId = this.endPort[i].id
                        }
                    }
                }else {
                    this.tableData[index].podTerminalId = ''
                }
            },
            //船公司搜索      
            companyNameRemote(value){
                var that = this
                $.ajax({ //获取航线专家起始港下拉框
                    url: that.GLOBAL.url + `expert/path/getCompany?userId=${this.userId}&companyName=${value}`, 
                    type: "GET",
                    headers: {
                        Authorization: that.getToken()
                    },
                    success: function(data) {
                        if (data.status == 1) {
                            that.companyNameList = data.content;
                        }
                    },
                    error: function(e) {
                    },
                });
            },
            //船公司Focus事件
            companyNameFocus(value){
                var that = this
                $.ajax({ //获取航线专家起始港下拉框
                    url: that.GLOBAL.url + `expert/path/getCompany?userId=${this.userId}`,
                    type: "GET",
                    headers: {
                        Authorization: that.getToken()
                    },
                    success: function(data) {
                        if (data.status == 1) {
                            that.companyNameList = data.content;
                        }
                    },
                    error: function(e) {
                    },
                });
            },
            //船公司change事件
            companyNameChange(value){
                if(value === ''){
                    this.ruleForm.scac = ''
                }else{
                    for (let i = 0; i < this.companyNameList.length; i++) {
                        if(this.companyNameList[i].companyName === value){
                            this.ruleForm.scac = this.companyNameList[i].scac
                            this.ruleForm.companyId = this.companyNameList[i].id
                        }
                    }
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
            },
            //共舱展示标签
            AllCabinList(val){
                for(let i=0; i<val.length; i++){
                    if(this.tableData[0].staticId == val[i].staticId){
                        if(val[i].isSelect == false){
                            this.isShowCabin = false
                            //共舱去掉自己时，所有共舱关系清空
                            for(let j=0; j<this.AllCabinList.length; j++){
                                this.AllCabinList[j].isSelect = false
                            }
                        }else{
                            this.isShowCabin = true
                        }
                    }
                }
            },
            //基础信息路径详情表格
            tableData(val){//监听路径的变化
                //超过两程中转状态，不可编辑共舱
                if(val.length == 1){
                    if(this.detailStatus == 'add'){
                        this.getCabinData()
                    }
                }else{
                    this.isEditCabin = false
                }
                if(this.detailStatus == 'add'){
                    if(val.length > 0){//也就是 有路径
                        this.isTrue = true //添加了路径详情 船公司不可修改
                        this.ruleForm.etd = val[0].etd // 头程第一段ETD
                        this.ruleForm.pol = val[0].pol // 头程第一段起始港
                        this.ruleForm.polCode = val[0].polCode // 头程第一段起始港五字码
                        this.ruleForm.polCityId = val[0].polCityId //头程第一段起始港Id
                        this.ruleForm.polId = val[0].polId //头程第一段起始港Id
                        this.ruleForm.polTerminal = val[0].polTerminal //头程第一段起始港码头
                        this.ruleForm.polTerminalId = val[0].polTerminalId //头程第一段起始港码头
                        this.ruleForm.pod = val[val.length - 1].pod // 最后一段的目的港
                        this.ruleForm.podCode = val[val.length - 1].podCode // 最后一段的目的港五字码
                        this.ruleForm.podCityId = val[val.length - 1].podCityId //最后一段的目的港Id
                        this.ruleForm.podId = val[val.length - 1].podId //最后一段的目的港Id
                        this.ruleForm.podTerminal = val[val.length - 1].podTerminal //最后一段的目的港码头
                        this.ruleForm.podTerminalId = val[val.length - 1].podTerminalId //最后一段的目的港码头
                        this.ruleForm.transitCount = val.length //路径数
                    }else{
                        this.isTrue = false //路径详情为空 船公司可修改
                        this.ruleForm.etd = "" // 头程第一段ETD
                        this.ruleForm.pol = "" // 头程第一段起始港
                        this.ruleForm.polCode = "" // 头程第一段起始港五字码
                        this.ruleForm.polCityId = '' //头程第一段起始港Id
                        this.ruleForm.polId = '' //头程第一段起始港Id
                        this.ruleForm.polTerminal = '' //头程第一段起始港码头
                        this.ruleForm.polTerminalId = '' //头程第一段起始港码头
                        this.ruleForm.pod = "" // 最后一段的目的港
                        this.ruleForm.podCode = "" // 最后一段的目的港五字码
                        this.ruleForm.podCityId = '' //最后一段的目的港Id
                        this.ruleForm.podId = '' //最后一段的目的港Id
                        this.ruleForm.podTerminal = '' //最后一段的目的港码头
                        this.ruleForm.podTerminalId = '' //最后一段的目的港码头
                        this.ruleForm.transitCount = '' //路径数
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
            this.userId = this.userInfo
            if(this.$parent.detailStatus == 'edit'){
                this.isNew = false
                this.detailStatus = 'edit'
                this.pathId = this.$parent.listInfo.pathId
                this.getDetail('getCabin')
            }else if(this.$parent.detailStatus == 'add'){
                this.ruleForm.pol = this.$parent.pol
                this.ruleForm.polCode = this.$parent.polCode
                this.ruleForm.polId = this.$parent.polId
                this.ruleForm.polCityId = this.$parent.polCityId
                this.isNew = true
                this.detailStatus = 'add'
            }
        },
        components: {
            ThePagination,
            Loading,
            RouteAdd,
            SharedCabinAdd,
            PortOfCall
        },
    };
</script>

