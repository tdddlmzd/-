<style lang="scss">
.routeDetailAdd_dialog{
    .title{
        height: 14px;
        font-size: 14px;
        font-weight: 600;
        color: #282828;
        text-align: left;
        line-height: 14px;
        margin-bottom: 20px;
    }
    .el-form-item__label{
        padding: 0 10px 0 0 !important;
        font-size: 12px !important;
    }
    .left_input{
        .el-checkbox-group{
            display: flex;
            justify-content: flex-end;
        }
    }
    .important_input{
        position: relative;
        .el-form-item__label{
            &::before{
                content: '*';
                position: absolute;
                top: -1px;
                left: 10px;
                color: #ff7676;
            }
        }
    }
    .important_etaetd{
        position: relative;
        .el-form-item__label{
            &::before{
                content: '*';
                position: absolute;
                top: -1px;
                left: 48px;
                color: #ff7676;
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
    .add_route_btn{
        margin: 0 auto;
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
    .el-row{
        margin-left: -10px;
    }
    .el-checkbox__label{
        font-size: 12px;
        color: #282828;
    }
}
</style>
<template>
    <!-- 新增挂靠港口弹窗 -->
    <div class="routeDetailAdd_dialog">
        <div class="title_warp">
            <div class="title">{{ $t('task.' + title) }}</div>
        </div>
         <!-- 新增挂靠港口表单部分 -->
        <el-form
            label-position="right"
            label-width="88px"
            :model="ruleForm"
            ref="ruleForm"
            size="mini"
        >
            <el-row>
                <el-col class="left_input important_input" style="width:48%">
                    <el-form-item :label="$t('table.portEn')">
                        <el-input v-model="ruleForm.port" :placeholder="$t('table.PleaseEnter')" clearable></el-input>
                    </el-form-item>
                </el-col>
                <el-col class="important_input" style="width:51%">
                    <el-form-item :label="$t('table.portCode')">
                        <el-select
                            v-model="ruleForm.portCode"
                            style="width:100%;"
                            :placeholder="$t('table.PleaseEnterAndSelect')"
                            filterable
                            clearable
                            remote
                            :remote-method="remotePortCodeMethod"
                            @change="handlePortCodeChange"
                            @focus="handlePortCodeFounc"
                            default-first-option
                        >
                            <el-option
                                class="routeDetailAdd_option"
                                v-for="item in portCodeList"
                                :key="item.id"
                                :label="item.baseCode"
                                v-title="item.port.length > 50 ? item.port.slice(0,50) + '......' : item.port"
                                :value="item.baseCode"
                            >
                            <span>{{ item.port }}</span>
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col class="left_input" style="width:48%">
                    <el-form-item :label="$t('table.wharf')">
                        <el-input v-model="ruleForm.terminal" :placeholder="$t('table.PleaseEnter')" clearable></el-input>
                    </el-form-item>
                </el-col>
                <el-col style="width:51%">
                    <el-form-item :label="$t('table.baseTerminal')">
                        <el-select
                            v-model="ruleForm.baseTerminal"
                            style="width:100%;"
                            :placeholder="$t('table.PleaseSelect')" 
                            clearable
                            @change="handleStandardPierChange"
                            @focus="handleStandardPierFounc"
                        >
                            <el-option
                                v-for="item in standardPierList"
                                :key="item.id"
                                :label="item.terminalCn"
                                :value="item.id"
                            >
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col class="left_input important_etaetd" style="width:48%">
                    <el-form-item label="ETA">
                        <el-select
                            v-model="ruleForm.eta"
                            style="width:100%;"
                            :placeholder="$t('table.PleaseSelect')" 
                            clearable
                            default-first-option
                            
                        >
                            <el-option
                                v-for="item in ETAList"
                                :key="item.id"
                                :label="item.label"
                                :value="item.label"
                                ref="countryEn"
                            >
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col style="width:51%"  class="important_etaetd">
                    <el-form-item label="ETD">
                        <el-select
                            v-model="ruleForm.etd"
                            style="width:100%;"
                            :placeholder="$t('table.PleaseSelect')" 
                            clearable
                            default-first-option
                        >
                            <el-option
                                v-for="item in ETDList"
                                :key="item.id"
                                :label="item.label"
                                :value="item.label"
                            >
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col class="left_input" style="width:48%">
                    <el-form-item :label="$t('table.voyage')">
                        <el-input v-model="ruleForm.transitTime" :placeholder="$t('table.PleaseEnter')"  @input="ruleForm.transitTime = handleInputNo(ruleForm.transitTime)" clearable></el-input>
                    </el-form-item>
                </el-col>
                <el-col style="width:51%">
                    <el-form-item :label="$t('table.direction')">
                        <el-select
                            multiple
                            v-model="direction"
                            style="width:100%;"
                            :placeholder="$t('table.PleaseSelect')"
                            clearable
                            @change="handleDirectionChange"
                            default-first-option
                        >
                            <el-option
                                v-for="item in directionList"
                                :key="item.id"
                                :label="item.label"
                                :value="item.label"
                            >
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col class="left_input" style="width:48%">
                    <el-form-item>
                        <el-checkbox-group v-model="checkList" @change="handleCheckbox">
                            <el-checkbox label="POL"></el-checkbox>
                            <el-checkbox label="POD"></el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                </el-col>
                <el-col style="width:51%">
                    <el-form-item :label="$t('table.order')">
                        <el-input v-model="ruleForm.portNumber" :placeholder="$t('table.PleaseEnter')" @input="ruleForm.portNumber = handleInputNo(ruleForm.portNumber)" clearable></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
        <!-- 取消，保存按钮 -->
        <div class="add_route_btn">
            <div class="btn cancel_btn" @click="routeDetailAddCancel">{{ $t('task.cancel') }}</div>
            <div class="btn Ok_btn" @click="routeDetailAddOk">{{ $t('task.preserve') }}</div>
        </div>
    </div>
</template>

<script>
    export default {
        props: [
            "dialogInnerStatus",
            "scac"
        ],
        data(){
            return {
                userId: '',
                userInfo:
                this.getCookie("authId") !== null && this.getCookie("authId") !== "" && this.getCookie("authId") !== undefined
                ? this.getCookie("authId")
                : "",
                rowIndex:0,
                title : '',
                ruleForm : {
                    // 港口名
                    port : '',
                    // 港口五字码
                    portCode : '',
                    // 码头
                    terminal : '',
                    // 标准码头
                    baseTerminal : '',
                    terminalId : '',
                    // ETA
                    eta : '',
                    // ETD
                    etd : '',
                    // 航程
                    transitTime : '',
                    // 方向
                    direction : '',
                    // 0pol，1pod
                    isPol : '',
                    // 挂靠顺序
                    portNumber : '',
                    // 创建时间
                    createTime : '',
                    // 操作时间
                    updateTime : '',
                    // 运输类型 0 铁路 1 海运
                    transType : '1',
                    // 直达 0 直达 1 不直达
                    isTransit : '',
                    id : '',
                    newIsPol : 'POD',
                    isSnap: 0,
                },
                checkList: [],
                direction: [],
                standardPierList : [],
                portCodeList : [],
                ETAList : [
                    {
                        id : 0,
                        label : 'MON',
                    },
                    {
                        id : 1,
                        label : 'TUE',
                    },
                    {
                        id : 2,
                        label : 'WED',
                    },
                    {
                        id : 3,
                        label : 'THU',
                    },
                    {
                        id : 4,
                        label : 'FRI',
                    },
                    {
                        id : 5,
                        label : 'SAT',
                    },
                    {
                        id : 6,
                        label : 'SUN',
                    },
                    {
                        id : '未知',
                        label : '未知',
                    }
                ],
                ETDList : [
                    {
                        id : 0,
                        label : 'MON',
                    },
                    {
                        id : 1,
                        label : 'TUE',
                    },
                    {
                        id : 2,
                        label : 'WED',
                    },
                    {
                        id : 3,
                        label : 'THU',
                    },
                    {
                        id : 4,
                        label : 'FRI',
                    },
                    {
                        id : 5,
                        label : 'SAT',
                    },
                    {
                        id : 6,
                        label : 'SUN',
                    },
                    {
                        id : '未知',
                        label : '未知',
                    }
                ],
                directionList : [
                    {
                        id : 0,
                        label : 'W',
                    },
                    {
                        id : 1,
                        label : 'E',
                    },
                    {
                        id : 2,
                        label : 'N',
                    },
                    {
                        id : 3,
                        label : 'S',
                    },
                ]
            }
        },
        methods: {
            //取消按钮
            routeDetailAddCancel(){
                this.$parent.$parent.routeDetailAddDialogVisible = false
            },
            //保存按钮
            routeDetailAddOk(){
                if(this.ruleForm.port == ''){
                    this.$message({//请输入港口英文名
                        message: this.$t('task.enterPortEn'),
                        type: "warning",
                        customClass: "base-message-zindex"
                    });
                    return false;
                }
                if(this.ruleForm.portCode == ''){
                    this.$message({//请输入港口五字码
                        message: this.$t('task.enterPortCode'),
                        type: "warning",
                        customClass: "base-message-zindex"
                    });
                    return false;
                }
                if(!this.ruleForm.etd){
                    this.$message({//请输入ETD
                        message: this.$t('task.enterETD'),
                        type: "warning",
                        customClass: "base-message-zindex"
                    });
                    return false;
                }if(!this.ruleForm.eta){
                    this.$message({//请输入ETA
                        message: this.$t('task.enterETA'),
                        type: "warning",
                        customClass: "base-message-zindex"
                    });
                    return false;
                }
                var now = new Date()
                var year=now.getFullYear(); 
                var month=('00' + (now.getMonth()+1)).slice(-2); 
                var date=('00' + now.getDate()).slice(-2); 
                var hour=('00' + now.getHours()).slice(-2); 
                var minute=('00' + now.getMinutes()).slice(-2); 
                var second=('00' + now.getSeconds()).slice(-2); 
                if(!this.ruleForm.createTime){
                    this.ruleForm.createTime =  year+"-"+month+"-"+date+" "+hour+":"+minute+":"+second;
                }
                this.ruleForm.updateTime =  year+"-"+month+"-"+date+" "+hour+":"+minute+":"+second;
                if (this.dialogInnerStatus === "新增") {
                    for (var i = 0; i < this.$parent.$parent.dockingArray.length; i++) {
                        if (parseInt(this.ruleForm.portNumber) === parseInt(this.$parent.$parent.dockingArray[i].portNumber)) {
                            this.$message({//已有重复挂靠数据
                                message: this.$t('task.haveSameData'),
                                type: "warning",
                                customClass: "base-message-zindex"
                            });
                            return;
                        }
                    }
                    this.$parent.$parent.dockingArray.push(JSON.parse(JSON.stringify(this.ruleForm)));
                    this.$parent.$parent.dockingArray.sort(this.$parent.$parent.compare('portNumber'))
                    this.resetFrom('ruleForm');
                    this.ruleForm.isPol = '';
                    this.checkList = []
                    this.ruleForm.direction = '';
                    this.direction = []
                    this.routeDetailAddCancel();
                } else {
                    for (var i = 0; i < this.$parent.$parent.dockingArray.length; i++) {
                        if (i === this.rowIndex) {
                            continue;
                        }
                        if (parseInt(this.ruleForm.portNumber) === parseInt(this.$parent.$parent.dockingArray[i].portNumber)) {
                            this.$message({//已有重复挂靠数据
                                message: this.$t('task.haveSameData'),
                                type: "warning",
                                customClass: "base-message-zindex"
                            });
                            return;
                        }
                    }
                    this.$parent.$parent.dockingArray.splice(
                        this.rowIndex,
                        1,
                        JSON.parse(JSON.stringify(this.ruleForm))
                    );
                    this.$parent.$parent.dockingArray.sort(this.$parent.$parent.compare('portNumber'))
                    this.routeDetailAddCancel();
                }
            },
            resetFrom(ruleForm){
                this.$refs[ruleForm].resetFields();
            },
            //五字码
            handlePortCodeChange(value){
                if(this.ruleForm.baseTerminal){
                    this.ruleForm.baseTerminal = ''
                    this.ruleForm.terminalId = ''
                }
                if (value === null) {
                    return;
                };
                let obj = this.portCodeList.find(item => {
                    return (item.baseCode == value);
                });
                if(obj){
                   this.ruleForm.routeCn = obj.routeCn;
                   this.ruleForm.routeId = obj.id;
                };
                if(this.ruleForm.routeCn === ''){
                    this.ruleForm.routeCn = '';
                    this.ruleForm.routeId = '';
                };
                if(this.ruleForm.portCode){
                    this.$Axios.get(this.GLOBAL.url + `schedules/route/queryTerminal?portCode=${this.ruleForm.portCode}`,{
                        headers: {
                            Authorization: this.getToken()
                        },
                    }).then(res => {
                        this.standardPierList = res.data.content;
                        if(this.standardPierList.length > 0){
                            this.ruleForm.baseTerminal = this.standardPierList[0].terminalCn;
                            this.ruleForm.terminalId = this.standardPierList[0].id;
                        }
                    })
                }
            },
            //港口五字码
            remotePortCodeMethod(value){
                this.$Axios.get(this.GLOBAL.url + `schedules/route/queryBaseCode?scac=${this.scac}&baseCode=${value}`,{
                    headers: {
                        Authorization: this.getToken()
                    },
                }).then(res => {
                    this.portCodeList = res.data.content;
                })
            },
            handlePortCodeFounc(){
                this.portCodeList= []
                this.$Axios.get(this.GLOBAL.url + `schedules/route/queryBaseCode?scac=${this.scac}`,{
                    headers: {
                        Authorization: this.getToken()
                    },
                }).then(res => {
                    this.portCodeList = res.data.content;
                })
                
            },
            handleStandardPierChange(value){
                if (value === null) {
                    return;
                };
                let obj = this.standardPierList.find(item => {
                    return (item.id == value);
                });
                if(obj){
                    this.ruleForm.baseTerminal = obj.terminalCn;
                    this.ruleForm.terminalId = obj.id;
                };
                if(this.ruleForm.baseTerminal === ''){
                    this.ruleForm.terminalId = '';
                    this.ruleForm.baseTerminal = '';
                };
            },
            handleStandardPierFounc(){
                if(this.ruleForm.portCode){
                    this.$Axios.get(this.GLOBAL.url + `schedules/route/queryTerminal?portCode=${this.ruleForm.portCode}`,{
                        headers: {
                            Authorization: this.getToken()
                        },
                    }).then(res => {
                        this.standardPierList = res.data.content;
                    })
                }else{
                    this.$message({//请选择港口五字码
                        message: this.$t('task.SelectPortCode'),
                        type: "error",
                        customClass: "base-message-zindex"
                    });
                }
            },
            handleDirectionChange(val){
                if(val.length > 0){
                    var p = val.sort()
                    this.ruleForm.direction = p.join(',')
                }else{
                    this.ruleForm.direction = ''
                }
            },
            handleRadiooChange(value){
                this.ruleForm.newIsPol = value
                this.ruleForm.isPol = 0
            },
            handleRadioDChange(value){
                this.ruleForm.newIsPol = value
                this.ruleForm.isPol = 1
            },
            //多选
            handleCheckbox(val){
                if(val.length > 0){
                    if(val.length == 2){ //代表两个都选了
                        this.ruleForm.isPol = 3
                    }else{
                        if(val[0] == 'POL'){
                            this.ruleForm.isPol = 1
                        }else{
                            this.ruleForm.isPol = 2
                        }
                    }
                }else{
                    this.ruleForm.isPol = 0
                }
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
            //只能输入3位整数数字
            handleInputNo(value){
                value = value.replace(/[^\d]/g, '');
                value = value.replace(/^0{1,}/g,'');
                value = value.replace(/^[1-9]\d{3,}/g, 999)
                return value;
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
            this.rowIndex = this.$parent.$parent.rowIndex
            if(this.dialogInnerStatus  === '新增'){
                this.title = 'add'
            }else{
                this.title = 'edit'
                this.ruleForm = JSON.parse(JSON.stringify(this.$parent.$parent.tablePortruleForm))
                this.ruleForm.eta = this.ruleForm.eta ? this.getMounthDay(this.ruleForm.eta.toUpperCase()) : ''
                this.ruleForm.etd = this.ruleForm.etd ? this.getMounthDay(this.ruleForm.etd.toUpperCase()) : ''
                //现在POL POD多选
                if(this.ruleForm.isPol !== ''){
                    if(Number(this.ruleForm.isPol) === 0){ //说明没有选值
                        this.checkList = []
                    }else if(Number(this.ruleForm.isPol) === 1){
                        this.checkList = ['POL']
                    }else if(Number(this.ruleForm.isPol) === 2){
                        this.checkList = ['POD']
                    }else if(Number(this.ruleForm.isPol) === 3){
                        this.checkList = ['POL','POD']
                    }
                }else{
                    this.checkList = []
                }
                //方向多选
                if(this.ruleForm.direction){
                    this.direction = this.ruleForm.direction.split(',')
                }else{
                    this.direction = []
                }
            }
        }
    };
</script>

