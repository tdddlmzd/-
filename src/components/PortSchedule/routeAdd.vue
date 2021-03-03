<style lang="scss">
.routeAdd_dialog{
    .title{
        height: 14px;
        font-size: 14px;
        font-weight: 600;
        color: #282828;
        text-align: left;
        line-height: 14px;
        margin-bottom: 20px;
    }
    .add_route{
        .el-form-item__label{
            padding: 0 10px 0 0 !important;
            font-size: 12px !important;
        }
        .left_input{
            .el-form-item__label{
                width: 66px !important;
            }
            .el-form-item__content{
                margin-left: 66px !important;
            }
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
        .important_input3{
            .el-form-item__label{
                &::before{
                    content: '*';
                    position: absolute;
                    top: -1px;
                    left: 25px;
                    color: #ff7676;
                }
            }
        }
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
</style>
<template>
    <!-- 新增路径弹窗 -->
    <div class="routeAdd_dialog">
        <div class="title" v-if="routeTitle == '新增'">{{ $t('task.add') }}</div>
        <div class="title" v-else>{{ $t('task.edit') }}</div>
        <div class="add_route">
            <el-form
                size="mini"
                label-position="right"
                :model="AddRouteForm"
                ref="AddRouteForm"
                label-width="90px"
            >
                <el-row>
                    <el-col class="left_input important_input1" style="width:47%">
                        <el-form-item :label="$t('table.modeOfTransport')">
                            <el-select
                                v-model="AddRouteForm.transitType"
                                style="width:100%;"
                                :placeholder="$t('table.PleaseSelect')"
                            >
                                <el-option
                                    v-for="item in AddRouteStateList"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                >
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col style="width:51%">
                        <el-form-item :label="$t('table.RouteCode')" :rules="[{ required: !isRoute}]">
                            <el-select 
                                remote  
                                clearable 
                                filterable  
                                v-model="AddRouteForm.routeCode" 
                                :placeholder="$t('table.PleaseEnterAndSelect')"
                                :remote-method="lineCodeRemote"
                                @focus="lineCodeFocus"
                                @change="lineCodeChange"
                                style="width:100%"
                                popper-class="maxWidth"
                                :disabled="isRoute"
                            >
                                <el-option
                                    v-for="item in lineCodeList"
                                    :key="item.id"
                                    :label="item.routeCode"
                                    :value="item.routeCode"
                                    v-title="item.routeCode"
                                >
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col class="left_input important_input2" style="width:47%">
                        <el-form-item :label="$t('table.pol')">
                            <el-select
                                remote
                                clearable
                                filterable
                                v-model="AddRouteForm.pol"
                                :placeholder="$t('table.PleaseEnterAndSelect')"
                                :remote-method="AddRoutePortStartRemote"
                                @focus="AddRoutePortStartFocus"
                                @change="AddRoutePortStartChange"
                                style="width:100%"
                            >
                                <el-option
                                    v-for="item in AddRoutePortStartList"
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
                    <el-col style="width:51%">
                        <el-form-item :label="$t('table.PolPortwharf')">
                            <el-select
                                clearable
                                v-model="AddRouteForm.polTerminal"
                                :placeholder="$t('table.PleaseSelect')"
                                @focus="AddRouteStartPortFocus"
                                @change="AddRouteStartPortChange"
                                style="width:100%"
                            >
                                <el-option
                                    v-for="item in AddRoutePolPort"
                                    :key="item.id"
                                    :label="item.terminalCn"
                                    :value="item.terminalCn"
                                >
                                    <span>{{item.terminalCn+"("+ item.terminal+")" }}</span>
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col class="left_input important_input2" style="width:47%">
                        <el-form-item :label="$t('table.pod')">
                            <el-select
                                remote
                                clearable
                                filterable
                                v-model="AddRouteForm.pod"
                                :placeholder="$t('table.PleaseEnterAndSelect')"
                                :remote-method="AddRoutePortEndRemote"
                                @focus="AddRoutePortEndFocus"
                                @change="AddRoutePortEndChange"
                                style="width:100%"
                            >
                                <el-option
                                    v-for="item in AddRoutePortEndList"
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
                    <el-col style="width:51%">
                        <el-form-item :label="$t('table.PodPortwharf')">
                            <el-select
                                clearable
                                v-model="AddRouteForm.podTerminal"
                                :placeholder="$t('table.PleaseSelect')"
                                @focus="AddRouteEndPortFocus"
                                @change="AddRouteEndPortChange"
                                style="width:100%"
                            >
                                <el-option
                                    v-for="item in AddRoutePodPort"
                                    :key="item.id"
                                    :label="item.terminalCn"
                                    :value="item.terminalCn"
                                >
                                    <span>{{item.terminalCn+"("+ item.terminal+")" }}</span>
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col class="left_input important_input3" style="width:47%"> 
                        <el-form-item label="ETD">
                            <el-select
                                v-model="AddRouteForm.etd"
                                style="width:100%;"
                                :placeholder="$t('table.PleaseSelect')"
                                clearable
                                default-first-option
                            >
                                <el-option
                                    v-for="item in ETDList"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                >
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col class="left_input" style="width:51%"> 
                        <el-form-item :label="$t('table.voyage')">
                            <el-input onkeyup="value=value.replace(/[^\d]/g,'')" v-model="AddRouteForm.transitTime" placeholder="请输入" clearable>
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col class="left_input important_input3"  style="width:47%"> 
                        <el-form-item label="ETA">
                            <el-select
                                v-model="AddRouteForm.eta"
                                style="width:100%;"
                                :placeholder="$t('table.PleaseSelect')"
                                clearable
                                default-first-option
                            >
                                <el-option
                                    v-for="item in ETDList"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                >
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
        </div>
        <div class="add_route_btn">
            <div class="btn cancel_btn" @click="addRouteCancel">{{ $t('task.cancel') }}</div>
            <div class="btn Ok_btn" @click="handleClickAddRouteOk">{{ $t('task.determine') }}</div>
        </div>
    </div>
</template>

<script>
    export default {
        props: [
            "scac",
            "routeTitle"
        ],
        data(){
            return {
                userId: '',
                userInfo:
                this.getCookie("authId") !== null && this.getCookie("authId") !== "" && this.getCookie("authId") !== undefined
                ? this.getCookie("authId")
                : "",
                AddRoutePortStartList: [],//新增路径起运港
                AddRoutePortEndList: [],//新增路径目的港
                AddRoutePolPort: [],//新增路径起始码头
                AddRoutePodPort: [],//新增路径目的码头
                lineCodeList: [], //新增路径航线代码
                pathIndex: '',
                AddRouteForm: {
                    id: '',
                    transitType: '',//运输类型
                    pol: "", // 起运港
                    pod: "", // 目的港
                    polId:'',//起运港Id
                    podId:'',//目的港Id
                    polCityId:'',//起运港城市Id
                    podCityId:'',//目的港城市Id
                    polCode: "", // 起始港五字码
                    podCode: "", // 目的港五字码
                    polTerminal: '',//起始港码头
                    podTerminal: '', //目的港码头
                    polTerminalId: "", // 起始港码头Id
                    podTerminalId: "", // 目的港码头Id
                    staticId: "", // 航线代码id
                    routeCode: "", // 航线代码
                    disPlayName: "", // 航线代码
                    etd: "",// etd
                    eta: "", // eta
                    transitTime: '', // 航程 ,如果返回的是0那么页面要显示-
                    delFlag: 0, //删除标志
                },
                //新增路径运输类型
                AddRouteStateList: [
                    {
                        value : 'LINE',
                        label : 'LINE',
                    },
                    {
                        value : 'FEEDER',
                        label : 'FEEDER',
                    },
                    {
                        value : 'RAIL',
                        label : 'RAIL',
                    },
                    {
                        value : 'TRUCK',
                        label : 'TRUCK',
                    },
                ],
                //班期
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
            }
        },
        methods: {
             // 新增路径取消按钮
            addRouteCancel(){
                this.$parent.$parent.routeAddDialogVisible = false
            },
            // 新增路径确定按钮
            handleClickAddRouteOk(){
                if(this.AddRouteForm.transitType == ''){
                    this.$message({
                        message: this.$t('task.chooseType'),
                        type: "warning",
                        customClass: "base-message-zindex"
                    });
                    return false;
                }
                if(this.AddRouteForm.transitType == 'LINE'){
                    if(this.AddRouteForm.staticId == ''){
                        this.$message({
                            message: this.$t('task.chooseCode'),
                            type: "warning",
                            customClass: "base-message-zindex"
                        });
                        return false;
                    }
                }
                if(this.AddRouteForm.polCode == ''){
                    this.$message({
                        message: this.$t('task.choosePol'),
                        type: "warning",
                        customClass: "base-message-zindex"
                    });
                    return false;
                }
                if(this.AddRouteForm.podCode == ''){
                    this.$message({
                        message: this.$t('task.choosePod'),
                        type: "warning",
                        customClass: "base-message-zindex"
                    });
                    return false;
                }

                if(!this.AddRouteForm.etd){
                    this.$message({//请输入ETD
                        message: this.$t('task.enterETD'),
                        type: "warning",
                        customClass: "base-message-zindex"
                    });
                    return false;
                }if(!this.AddRouteForm.eta){
                    this.$message({//请输入ETA
                        message: this.$t('task.enterETA'),
                        type: "warning",
                        customClass: "base-message-zindex"
                    });
                    return false;
                }

                if(this.routeTitle == "新增"){
                    if(this.$parent.$parent.tableData.length > 0){
                        if(this.AddRouteForm.polId == this.$parent.$parent.tableData[this.$parent.$parent.tableData.length - 1].podId && 
                        this.AddRouteForm.polTerminalId == this.$parent.$parent.tableData[this.$parent.$parent.tableData.length - 1].podTerminalId){
                            this.$parent.$parent.tableData.push(JSON.parse(JSON.stringify(this.AddRouteForm)))
                        }else{
                            this.$message({
                                message: this.$t('task.Inconsistent'),
                                type: "warning",
                                customClass: "base-message-zindex"
                            });
                            return false;
                        }
                    }else{
                        this.$parent.$parent.tableData.push(JSON.parse(JSON.stringify(this.AddRouteForm)))
                    }
                }else{
                    if(this.pathIndex > 0){
                        if(this.AddRouteForm.polId == this.$parent.$parent.tableData[this.pathIndex - 1].podId && 
                        this.AddRouteForm.polTerminalId == this.$parent.$parent.tableData[this.pathIndex - 1].podTerminalId){
                            this.$parent.$parent.tableData.splice(
                                this.pathIndex,
                                1,
                                JSON.parse(JSON.stringify(this.AddRouteForm))
                            );
                        }else{
                            this.$message({
                                message: this.$t('task.Inconsistent'),
                                type: "warning",
                                customClass: "base-message-zindex"
                            });
                            return false;
                        }
                    }else{
                        this.$parent.$parent.tableData.splice(
                            this.pathIndex,
                            1,
                            JSON.parse(JSON.stringify(this.AddRouteForm))
                        );
                    }
                }
                this.$parent.$parent.routeAddDialogVisible = false
            },
            //新增路径起运港 搜索
            AddRoutePortStartRemote(value) {
                var that = this
                if(this.$parent.$parent.tableData.length > 0){
                    $.ajax({ //获取航线专家起始港下拉框
                        url: that.GLOBAL.url + `schedules/path/queryPort?pol=2&port=${value}`,
                        type: "GET",
                        headers: {
                            Authorization: that.getToken()
                        },
                        success: function(data) {
                            if(data.status == 1){
                                that.AddRoutePortStartList = data.content
                            }
                        },
                        error: function(e) {
                        },
                    });
                }else{ 
                }
            },
            //新增路径起运港 foucs
            AddRoutePortStartFocus(){
                var that = this
                if(this.$parent.$parent.tableData.length > 0){
                    $.ajax({ //获取航线专家起始港下拉框
                        url: that.GLOBAL.url + `schedules/path/queryPort?pol=2`,
                        type: "GET",
                        headers: {
                            Authorization: that.getToken()
                        },
                        success: function(data) {
                            if(data.status == 1){
                                that.AddRoutePortStartList = data.content
                            }
                        },
                        error: function(e) {
                        },
                    });
                }else{
                    $.ajax({ //获取航线专家起始港下拉框
                        url: that.GLOBAL.url + `expert/mission/pol?userId=${that.userId}`, // 用户ID
                        type: "GET",
                        headers: {
                            Authorization: that.getToken()
                        },
                        success: function(data) {
                            that.AddRoutePortStartList = data.content
                        },
                        error: function(e) {
                        },
                    });
                }
            },
            //新增路径起运港 change
            AddRoutePortStartChange(val){
                this.AddRouteForm.polTerminal = '' // 起始港码头
                this.AddRouteForm.polTerminalId = '' // 起始港码头Id
                if(val){
                    for (let i = 0; i < this.AddRoutePortStartList.length; i++) {
                        if(this.AddRoutePortStartList[i].portEn == val){
                            this.AddRouteForm.polCode = this.AddRoutePortStartList[i].portCode
                            this.AddRouteForm.polId = this.AddRoutePortStartList[i].id
                            this.AddRouteForm.polCityId = this.AddRoutePortStartList[i].cityId
                        }
                    }
                }else{
                    this.AddRouteForm.polCode = ''
                    this.AddRouteForm.polId = ''
                    this.AddRouteForm.polCityId = ''
                }
            },
            //新增路径目的港 搜索
            AddRoutePortEndRemote(value){
                var that = this
                $.ajax({ //获取航线专家起始港下拉框
                    url: that.GLOBAL.url + `schedules/path/queryPort?pol=1&port=${value}`, 
                    type: "GET",
                    headers: {
                        Authorization: that.getToken()
                    },
                    success: function(data) {
                        if (data.status == 1) {
                            that.AddRoutePortEndList = data.content;
                        }
                    },
                    error: function(e) {
                    },
                });
            },
            //新增路径目的港 foucs
            AddRoutePortEndFocus(){
                var that = this
                $.ajax({ //获取航线专家起始港下拉框
                    url: that.GLOBAL.url + `schedules/path/queryPort?pol=1`,
                    type: "GET",
                    headers: {
                        Authorization: that.getToken()
                    },
                    success: function(data) {
                        if (data.status == 1) {
                            that.AddRoutePortEndList = data.content;
                        }
                    },
                    error: function(e) {
                    },
                });
            },
            //新增路径目的港 change
            AddRoutePortEndChange(val){
                this.AddRouteForm.podTerminal = '' // 目的港码头
                this.AddRouteForm.podTerminalId = '' // 目的港码头Id           
                if(val){
                    for (let i = 0; i < this.AddRoutePortEndList.length; i++) {
                        if(this.AddRoutePortEndList[i].portEn == val){
                            this.AddRouteForm.podCode = this.AddRoutePortEndList[i].portCode
                            this.AddRouteForm.podId = this.AddRoutePortEndList[i].id
                            this.AddRouteForm.podCityId = this.AddRoutePortEndList[i].cityId
                        }
                    }
                }else{
                    this.AddRouteForm.podCode = ''
                    this.AddRouteForm.podId = ''
                    this.AddRouteForm.podCityId = ''
                }
            },
            //新增路径起始港码头focus
            AddRouteStartPortFocus(){
                var that = this
                if(that.AddRouteForm.polCode == ''){
                    that.$message({
                        message: that.$t('task.choosePol'),
                        type: "warning",
                        customClass: "base-message-zindex"
                    });
                    return false
                }

                $.ajax({ //获取航线专家起始港下拉框
                    url: that.GLOBAL.url + `schedules/route/queryTerminal?portCode=${that.AddRouteForm.polCode}`,
                    type: "GET",
                    headers: {
                        Authorization: that.getToken()
                    },
                    success: function(data) {
                        if (data.status == 1) {
                            that.AddRoutePolPort = data.content;
                        }
                    },
                    error: function(e) {
                    },
                });
            },
            //新增路径起始港码头change
            AddRouteStartPortChange(val){
                if(val){ //选择了起始港码头
                    for (let i = 0; i < this.AddRoutePolPort.length; i++) {
                        if(this.AddRoutePolPort[i].terminalCn == val) {
                            this.AddRouteForm.polTerminalId = this.AddRoutePolPort[i].id
                        }
                    }
                }else{
                    this.AddRouteForm.polTerminalId = ''
                }
            },
            //新增路径目的港码头focus
            AddRouteEndPortFocus(val){
                var that = this
                if(that.AddRouteForm.podCode == ''){
                    that.$message({
                        message: that.$t('task.choosePod'),
                        type: "warning",
                        customClass: "base-message-zindex"
                    });
                    return false
                }
                $.ajax({ //获取航线专家起始港下拉框
                    url: that.GLOBAL.url + `schedules/route/queryTerminal?portCode=${that.AddRouteForm.podCode}`,
                    type: "GET",
                    headers: {
                        Authorization: that.getToken()
                    },
                    success: function(data) {
                        if (data.status == 1) {
                            that.AddRoutePodPort = data.content;
                        }
                    },
                    error: function(e) {
                    },
                });
            },
            //新增路径目的港码头change
            AddRouteEndPortChange(val){
                if(val){ //选择了起始港码头
                    for (let i = 0; i < this.AddRoutePodPort.length; i++) {
                        if(this.AddRoutePodPort[i].terminalCn == val) {
                            this.AddRouteForm.podTerminalId = this.AddRoutePodPort[i].id
                        }
                    }
                }else{
                    this.AddRouteForm.podTerminalId = ''
                }
            },
            //新增路径航线代码搜索
            lineCodeRemote(value){
                var that = this
                $.ajax({
                    url: that.GLOBAL.url + `schedules/route/queryRouteByScac?routeCode=${value}&scac=${this.scac}`,
                    type: "GET",
                    headers: {
                        Authorization: that.getToken()
                    },
                    success: function(data) {
                        if (data.status == 1) {
                            that.lineCodeList = data.content;
                        }
                    },
                    error: function(e) {
                    },
                });
            },
            //新增路径航线代码focus事件
            lineCodeFocus(){
                var that = this
                $.ajax({
                    url: that.GLOBAL.url + `schedules/route/queryRouteByScac?scac=${this.scac}`,
                    type: "GET",
                    headers: {
                        Authorization: that.getToken()
                    },
                    success: function(data) {
                        if (data.status == 1) {
                            that.lineCodeList = data.content;
                        }
                    },
                    error: function(e) {
                    },
                });
            },
            //新增路径航线代码change事件
            lineCodeChange(value){
                if(value){
                    for (let i = 0; i < this.lineCodeList.length; i++) {
                        if(this.lineCodeList[i].routeCode == value){
                            this.AddRouteForm.staticId = this.lineCodeList[i].id
                        }
                    }    
                }else{
                    this.AddRouteForm.staticId = ''
                }
            },
        },
        computed: {
            language(){
                return localStorage.getItem('language');
            },
            isRoute(){
                if(this.AddRouteForm.transitType == 'LINE'){
                    return false
                }else{
                    this.AddRouteForm.staticId = '' // 航线代码id
                    this.AddRouteForm.routeCode = '' // 航线代码
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
            }
        },
        mounted(){
            this.userId = this.userInfo
            let tableData = this.$parent.$parent.tableData
            let tableDataRow = this.$parent.$parent.tableDataRow
            if(this.routeTitle == '新增'){
                if(tableData.length > 0){
                    this.AddRouteForm.id = ''
                    this.AddRouteForm.pol = tableData[tableData.length - 1].pod
                    this.AddRouteForm.polId = tableData[tableData.length - 1].podId
                    this.AddRouteForm.polCode = tableData[tableData.length - 1].podCode
                    this.AddRouteForm.polCityId = tableData[tableData.length - 1].polCityId
                    this.AddRouteForm.polTerminal = tableData[tableData.length - 1].podTerminal
                    this.AddRouteForm.polTerminalId = tableData[tableData.length - 1].podTerminalId
                    this.AddRouteForm.pod = ''
                    this.AddRouteForm.podId = ''
                    this.AddRouteForm.podCode = ''
                    this.AddRouteForm.podCityId = ''
                    this.AddRouteForm.podTerminal = ''
                    this.AddRouteForm.podTerminalId = ''
                    this.AddRouteForm.transitType = ''
                    this.AddRouteForm.staticId = ''
                    this.AddRouteForm.routeCode = ''
                    this.AddRouteForm.etd = ''
                    this.AddRouteForm.eta = ''
                    this.AddRouteForm.transitTime = ''
                    this.AddRouteForm.delFlag = 0
                } else {
                    this.AddRouteForm.id = ''
                    this.AddRouteForm.pol = this.$parent.$parent.ruleForm.pol
                    this.AddRouteForm.polId = this.$parent.$parent.ruleForm.polId
                    this.AddRouteForm.polCode = this.$parent.$parent.ruleForm.polCode
                    this.AddRouteForm.polCityId = this.$parent.$parent.ruleForm.polCityId
                    this.AddRouteForm.polTerminal = ''
                    this.AddRouteForm.polTerminalId = ''
                    this.AddRouteForm.pod = ''
                    this.AddRouteForm.podId = ''
                    this.AddRouteForm.podCode = ''
                    this.AddRouteForm.podCityId = ''
                    this.AddRouteForm.podTerminal = ''
                    this.AddRouteForm.podTerminalId = ''
                    this.AddRouteForm.transitType = ''
                    this.AddRouteForm.staticId = ''
                    this.AddRouteForm.routeCode = ''
                    this.AddRouteForm.etd = ''
                    this.AddRouteForm.eta = ''
                    this.AddRouteForm.transitTime = ''
                    this.AddRouteForm.delFlag = 0
                }
            }else if(this.routeTitle == '修改'){
                this.pathIndex = tableDataRow.index
                this.AddRouteForm.pol = tableDataRow.pol
                this.AddRouteForm.polId = tableDataRow.polId
                this.AddRouteForm.polCode = tableDataRow.polCode
                this.AddRouteForm.polCityId = tableDataRow.polCityId
                this.AddRouteForm.polTerminal = tableDataRow.polTerminal
                this.AddRouteForm.polTerminalId = tableDataRow.polTerminalId
                this.AddRouteForm.pod = tableDataRow.pod
                this.AddRouteForm.podId = tableDataRow.podId
                this.AddRouteForm.podCode = tableDataRow.podCode
                this.AddRouteForm.podCityId = tableDataRow.podCityId
                this.AddRouteForm.podTerminal = tableDataRow.podTerminal
                this.AddRouteForm.podTerminalId = tableDataRow.podTerminalId
                this.AddRouteForm.transitType = tableDataRow.transitType
                this.AddRouteForm.staticId = tableDataRow.staticId
                this.AddRouteForm.routeCode = tableDataRow.routeCode
                this.AddRouteForm.etd = tableDataRow.etd
                this.AddRouteForm.eta = tableDataRow.eta
                this.AddRouteForm.transitTime = tableDataRow.transitTime
                this.AddRouteForm.delFlag = tableDataRow.delFlag
            }
        }
    };
</script>

