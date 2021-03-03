<style lang="scss">
.routeDetail_dialog{
    .title_warp{
        display: flex;
        justify-content: space-between;
        .title{
            height: 14px;
            font-size: 14px;
            font-weight: 600;
            color: #282828;
            text-align: left;
            line-height: 14px;
            margin-bottom: 20px;
        }
        .btn_box{
            display: flex;
            margin-right: 32px;
            margin-top: -4px;
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
                margin-left: 10px;
            }
            .delete_btn:hover{
                background: #f2f2f2;
            }
            .add_btn:hover{
                border: solid 1px #26b4b2;
                background: #26b4b2;
                color: #fff;
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
            text-align: center;
            font-size: 12px;
            background: rgba(0, 0, 0, 0);
            color: #282828;
        }
        .el-select__caret{
            line-height: 34px;
        }
    }
    .add_route_btn{
        margin: 20px auto 0 auto;
        width: 270px;
        display: flex;
        justify-content: space-between;
        .btn{
            width: 120px;
            height: 28px;
            border-radius: 15px;
            font-size: 12px;
            line-height: 26px;
            text-align: center;
            cursor: pointer;
        }
        .cancel_btn{
            background: #fff;
            border: solid 1px #f2f2f2;
            color: #282828;
            &:hover{
                background: #f2f2f2;
            }
        }
        .Ok_btn{
            background: #26b4b2;
            border: solid 1px #26b4b2;
            color: #fff;
            &:hover{
                background: #51c3c1;
                border: solid 1px #51c3c1;
            }
        }
    }
}
</style>
<template>
    <!-- 挂靠港口弹窗 -->
    <div class="routeDetail_dialog">
        <Loading v-if="loading"></Loading>
        <div class="title_warp">
            <div class="title">{{ $t('task.bertPort') }}</div>
            <!-- 删除，新增按钮 -->
            <div class="btn_box">
                <div class="btn delete_btn" @click="handleClickDelete">{{ $t('task.delete') }}</div>
                <div class="btn add_btn" @click="handleClickAdd">{{ $t('task.add') }}</div>
            </div>
        </div>
        <!-- 挂靠港口列表 -->
        <el-table
            :data="dockingArray"
            style="width: 100%"
            max-height="450px"
            :header-cell-style="{background:'#3bafda',color:'#ffffff',fontSize:'12px'}"
            :row-class-name="tabRowClassName"
            tooltip-effect="dark"
            border
            @row-dblclick="tabRowChange"
            @selection-change="handleSelectionChange"
            :header-row-class-name="headerStyle"
            ref="multipleTable"
        >
            <el-table-column type="selection" width="32">
            </el-table-column>
            <el-table-column prop="portNumber" :label="$t('table.order')" align="left" width="66" :show-overflow-tooltip="false">
                <template slot-scope="scope">
                    <el-input 
                        v-model="scope.row.portNumber"
                        @focus="frontValue(scope.row.portNumber)"
                        @keyup.enter="inputBlur(scope.row.portNumber,scope.$index)" 
                        @blur="inputBlur(scope.row.portNumber,scope.$index)" 
                        @input="scope.row.portNumber = handleInputNo(scope.row.portNumber)" 
                        />
                </template> 
            </el-table-column>
            <el-table-column prop="port" :label="$t('table.portEn')" align="left" :show-overflow-tooltip="true" width="96">
            </el-table-column>
            <el-table-column prop="portCode" :label="$t('table.portCode')" align="left" :show-overflow-tooltip="true" width="78">
            </el-table-column>
            <el-table-column prop="terminal" :label="$t('table.wharf')" align="left" :show-overflow-tooltip="true" width="98">
            </el-table-column>
            <el-table-column prop="baseTerminal" :label="$t('table.baseTerminal')" align="left" :show-overflow-tooltip="true" width="66">
            </el-table-column>
            <el-table-column prop="eta" label="ETA" align="left" :show-overflow-tooltip="true" width="46">
                <template slot-scope="scope">
                    <span>{{scope.row.eta != null ? getMounthDay(scope.row.eta.toUpperCase()) : ''}}</span>
                </template>
            </el-table-column>
            <el-table-column prop="etd" label="ETD" align="left" :show-overflow-tooltip="true" width="46">
                <template slot-scope="scope">
                    <span>{{scope.row.etd != null ? getMounthDay(scope.row.etd.toUpperCase()) : ''}}</span>
                </template>
            </el-table-column>
            <el-table-column prop="transitTime" :label="$t('table.voyage')" align="left" :show-overflow-tooltip="true" width="42">
            </el-table-column>
            <el-table-column prop="direction" :label="$t('table.direction')" align="left" :show-overflow-tooltip="true" width="48">
                <template slot-scope="scope">
                    <span>{{scope.row.direction}}</span>
                </template>
            </el-table-column>
            <el-table-column prop="isPol" label="POL" align="left" :show-overflow-tooltip="true" width="44">
                <template slot-scope="scope">
                    <span>{{scope.row.isPol === ''?'':(scope.row.isPol === 1 || scope.row.isPol === 3)?'✔':''}}</span>
                </template>
            </el-table-column>
            <el-table-column prop="isPol" label="POD" align="left" :show-overflow-tooltip="true" width="44">
                <template slot-scope="scope">
                    <span>{{scope.row.isPol === ''?'':(scope.row.isPol === 2 || scope.row.isPol === 3) ?'✔':''}}</span>
                </template>
            </el-table-column>
            <el-table-column prop="createTime" :label="$t('table.Creattime')" align="left" :show-overflow-tooltip="true" min-width="137">
            </el-table-column>
            <el-table-column prop="updateTime" :label="$t('table.Operationtime')" align="left" :show-overflow-tooltip="true" min-width="137">
            </el-table-column>
        </el-table>
        <!-- 取消，确认按钮 -->
        <div class="add_route_btn">
            <div class="btn cancel_btn" @click="routeDetailCancel">{{ $t('task.cancel') }}</div>
            <div class="btn Ok_btn" @click="routeDetailOk">{{ $t('task.determine') }}</div>
        </div>
        <!-- 确认删除弹窗 -->
        <el-dialog
            class="dialogPopup"
            :visible.sync="dialogPopup"
            width="400px"
            append-to-body
            top="0"
            :close-on-click-modal="false"
            :close-on-press-escape="false"
            :show-close="false"
        >
            <div class="iframe">
                <i class="el-icon-close" style="float:right;cursor: pointer;" @click="dialogPopup=false"></i>
                <div class="informa">
                    <p class="onlyP">{{ $t('task.isDelete') }}</p>
                </div>           
                <div class="butAll">
                    <span class="btnBorder" @click="dialogPopup=false">{{ $t('tracks.cancel') }}</span>
                    <span class="greenBorder"  @click="comfirmCheck">{{ $t('tracks.confirm') }}</span>
                </div>
            </div>
        </el-dialog>
        <!-- 新增挂靠港口弹窗 -->
        <el-dialog
            class="routeDetailAdd"
            :visible.sync="routeDetailAddDialogVisible"
            v-if="routeDetailAddDialogVisible"
            :close-on-click-modal="false"
            :close-on-press-escape="false"
            width="656px"
            append-to-body
            center
        >
            <PortOfCallAdd
                :dialogInnerStatus="dialogInnerStatus"
                :scac="scac"
            ></PortOfCallAdd>
        </el-dialog>
    </div>
</template>

<script>
    import Loading from "@components/loading";
    import PortOfCallAdd from "@components/PortOfCall/PortOfCallAdd";
    export default {
        props: [
            "staticId",
            "polCode",
            "podCode",
            "routeCode",
            "p2pPathId",
            "scac"
        ],
        data(){
            return {
                userId: '',
                userInfo:
                this.getCookie("authId") !== null && this.getCookie("authId") !== "" && this.getCookie("authId") !== undefined
                ? this.getCookie("authId")
                : "",
                loading: false,
                dialogPopup: false,//挂靠港口确认删除弹窗
                inputValue: '',
                dockingArray: [], //挂靠港口
                delDockingArray: [], //删除的挂靠港
                multipleSelection: [], //全选的数据
                routeDetailAddDialogVisible: false, //新增路径弹窗
                tablePortruleForm: {},
                dialogInnerStatus: '',
                rowIndex: 0,
            }
        },
        methods: {
            // 挂靠港口取消按钮
            routeDetailCancel(){
                this.$parent.$parent.routeDetailDialogVisible = false
            },
            // 挂靠港口确定按钮
            routeDetailOk(){
                var dockingPortModels = this.dockingArray.concat(this.delDockingArray)
                this.loading = true
                let query = {
                    staticId: this.staticId,
                    polCode: this.polCode,
                    podCode: this.podCode,
                    userId: this.userId,
                    shType: 0,//前台网站编辑
                    routeCode: this.routeCode,
                    p2pPathId: this.p2pPathId,
                    dockingPortModels: dockingPortModels
                }
                this.$Axios.post(this.GLOBAL.url + `expert/path/editDocking`, query,{
                    headers: {
                        Authorization: this.getToken()
                },
                }).then(res => {
                    if(res.data.status == 1){
                        this.$message({//保存成功
                            message: this.$t('task.successfully'),
                            type: "success",
                            customClass: "base-message-zindex"
                        });
                        this.routeDetailCancel()
                        // 更新详情数据
                        this.$parent.$parent.getDetail()
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
                })
            },
            // 获取挂靠港口
            getRouteDetail(){
                this.loading = true
                this.$Axios.get(this.GLOBAL.url + `expert/path/queryPortByRouteId?id=${this.staticId}`,{
                    headers: {
                        Authorization: this.getToken()
                },
                }).then(res => {
                    if(res.data.status == 1){
                        this.dockingArray = res.data.content
                    }
                    this.loading = false
                })
            },
            // 删除按钮
            handleClickDelete(){
                var val = this.multipleSelection;
                if(val.length <= 0){
                    this.$message({//请选择一条或者多条进行删除
                        message: this.$t('task.chooseDelete'),
                        type: "warning",
                        customClass: "base-message-zindex"
                    });
                    return
                };
                this.dialogPopup = true
            },
            //确认删除弹窗的删除按钮
            comfirmCheck(){
                this.dialogPopup = false
                var indexList = []
                for (let i = 0; i < this.multipleSelection.length; i++) {
                    var index = this.multipleSelection[i].index
                    indexList.push(index)
                    if(this.multipleSelection[i].id){
                        this.multipleSelection[i].delFlag = 1
                        this.delDockingArray.push(this.multipleSelection[i])
                    }
                }
                indexList.sort((a, b)=>{ return b - a});
                for (let i = 0; i < indexList.length; i++) {
                    this.dockingArray.splice(indexList[i], 1)
                }
            },
            // 新增按钮
            handleClickAdd(){
                this.routeDetailAddDialogVisible = true
                this.dialogInnerStatus = "新增"
            },
            //挂靠顺序 聚焦时候的value
            frontValue(value){
                this.inputValue = value
            },
            //挂靠顺序 失去失去焦点时
            inputBlur(value,index){
                if(value === ''){
                    this.$message({//挂靠数据不能为空
                        message: this.$t('task.portOfCallNull'),
                        type: "warning",
                        customClass: "base-message-zindex"
                    });
                    this.dockingArray[index].portNumber = this.inputValue;
                }else{
                    if(this.dockingArray[index].portNumber == this.inputValue){
                            this.dockingArray[index].portNumber = value;
                    }else{
                        for (var i = 0; i < this.dockingArray.length; i++) {
                            if(index !== i){
                                if (parseInt(value) === parseInt(this.dockingArray[i].portNumber)) {
                                    this.$message({//已有重复挂靠数据
                                        message: this.$t('task.haveSameData'),
                                        type: "warning",
                                        customClass: "base-message-zindex"
                                    });
                                    this.dockingArray[index].portNumber = this.inputValue
                                    return;
                                }
                            }
                        }
                        this.dockingArray.sort(this.compare('portNumber'))
                    }
                }
            },
            //挂靠港口 挂靠顺序排序
            compare(portNumber){
                return function(a,b){
                    var value1 = a[portNumber];
                    var value2 = b[portNumber];
                    return value1 - value2;
                }
            }, 
            //只能输入3位整数数字
            handleInputNo(value){
                value = value.replace(/[^\d]/g, '');
                value = value.replace(/^0{1,}/g,'');
                value = value.replace(/^[1-9]\d{3,}/g, 999)
                return value;
            },
            //全选
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
            //点击修改挂靠港口
            tabRowChange(row, column, event) {
                this.rowIndex = row.index;
                this.routeDetailAddDialogVisible = true;
                this.dialogInnerStatus = "修改";
                this.tablePortruleForm = row;
            },
            //表格的斑马线
            tabRowClassName({ row, rowIndex }) {
                row.index = rowIndex;
                let index = rowIndex + 1;
                if (index % 2 !== 0) {
                    return "warning-row";
                }
            },
            //单独给表头添加样式
            headerStyle({row, rowIndex}) {
                return 'columnPadding'
            },
            getMounthDay(data){
                let weekList = {
                    'MON' : 'MON',
                    'TUE' : 'TUE',
                    'WED' : 'WED',
                    'THU' : 'THU',
                    'FRI' : 'FRI',
                    'SAT' : 'SAT',
                    'SUN' : 'SUN',

                    'mon' : 'MON',
                    'tue' : 'TUE',
                    'wed' : 'WED',
                    'thu' : 'THU',
                    'fri' : 'FRI',
                    'sat' : 'SAT',
                    'sun' : 'SUN',

                    'Mon' : 'MON',
                    'Tue' : 'TUE',
                    'Wed' : 'WED',
                    'Thu' : 'THU',
                    'Fri' : 'FRI',
                    'Sat' : 'SAT',
                    'Sun' : 'SUN',

                    '1' : 'MON',
                    '2' : 'TUE',
                    '3' : 'WED',
                    '4' : 'THU',
                    '5' : 'FRI',
                    '6' : 'SAT',
                    '7' : 'SUN',

                    '周一' : 'MON',
                    '周二' : 'TUE',
                    '周三' : 'WED',
                    '周四' : 'THU',
                    '周五' : 'FRI',
                    '周六' : 'SAT',
                    '周日' : 'SUN',
                    // 复杂日期
                    'TUES' : 'TUE',
                    'THURS' : 'THU',
                };
                if(weekList[data]){
                    return weekList[data];
                }else{
                    return data;
                };
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
            this.userId = this.userInfo
            this.getRouteDetail()
        },
        components: {
            Loading,
            PortOfCallAdd
        },
    };
</script>

