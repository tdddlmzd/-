<template>
    <!-- 提醒设置模态框部分 -->
    <el-dialog class="settings_dialog" :visible.sync="settingsDialogVisible" :close-on-click-modal="false" :close-on-press-escape="false" :show-close="false" right>
        <div class="dialog">
            <div class="title">
                <div class="titleBox">
                    <span class="line"></span>
                    {{ $t('instanceTranck.settings') }}
                </div>
                <div v-if="!isWeChatCodeShow">
                    <div v-if="isSelectAll" class="selectAllBtn" @click="handleClickSelectNone">{{ $t('instanceTranck.selectNone') }}</div>
                    <div v-else class="selectAllBtn" @click="handleClickSelectAll">{{ $t('instanceTranck.selectAll') }}</div>
                </div>
            </div>
            <div class="settings" v-show="!isWeChatCodeShow">
                <div class="reminder" v-if="reminderData1.length">
                    <div class="reminder_title">{{ $t('instanceTranck.PortOfDeparture') }}</div>
                    <div class="checkboxs marginBottom" v-for="(item1,index) in reminderData1" :key="index">
                        <el-checkbox v-for="(item11,index) in item1" :key="index" v-model="item11.enable">{{ $t(getOptionName(item11.optionCode)) }}</el-checkbox>
                    </div>
                </div>
                <div class="reminder" v-if="reminderData2.length">
                    <div class="reminder_title reminder2">{{ $t('instanceTranck.DeliveryPlace') }}</div>
                    <div class="checkboxs marginBottom" v-for="(item2,index) in reminderData2" :key="index">
                        <el-checkbox v-for="(item21,index) in item2" :key="index" v-model="item21.enable">{{ $t(getOptionName(item21.optionCode)) }}</el-checkbox>
                    </div>
                </div>
                <div class="reminder reminder2" v-if="reminderData3.length">
                    <div class="reminder_title">{{ $t('instanceTranck.Warning')}}<span>{{' (' + $t('instanceTranck.protectBusiness') + ')'}}</span></div>
                    <div class="checkboxs marginBottom" v-for="(item3,index) in reminderData3" :key="index">
                        <el-checkbox v-for="(item31,index) in item3" :key="index" v-model="item31.enable" disabled>{{ $t(getOptionName(item31.optionCode)) }}</el-checkbox>
                    </div>
                </div>
                <div class="tip">
                    <div class="tip_title">{{ $t('instanceTranck.WeChatTipTitle') }}</div>
                    <div class="tip_info">
                        <p>{{ $t('instanceTranck.WeChatTipInfo1') }}</p>
                        <p>{{ $t('instanceTranck.WeChatTipInfo2') }}</p>
                    </div>
                </div>
            </div>
            <!-- 微信二维码 -->
            <div class="WeChat_code" v-show="isWeChatCodeShow">
                <div class="code_img">
                    <img v-if="wechatImg" :src="wechatImg">
                </div>
                <div class="code_tip_part">
                    <img class="code_icon" src="../assets/images/code_icon.png">
                    <div class="code_tip">{{ $t('instanceTranck.useWeChat') }}</div>
                </div>
                <div class="tip">
                    <div class="tip_title">{{ $t('instanceTranck.WeChatTipTitle') }}</div>
                    <div class="tip_info">
                        <p>{{ $t('instanceTranck.WeChatTipInfo1') }}</p>
                        <p>{{ $t('instanceTranck.WeChatTipInfo2') }}</p>
                    </div>
                </div>
            </div>
        </div>
        <span slot="footer" class="dialog-footer">
            <el-button v-if="isCancelShow" @click="handleClickCancel">{{ $t('instanceTranck.Cancel') }}</el-button>
            <el-button v-else @click="handleClickBack">{{ $t('instanceTranck.Back') }}</el-button>
            <el-button v-if="isNextShow" type="primary" @click="handleClickNext">{{ $t('instanceTranck.Next') }}</el-button>
            <el-button v-else type="primary" @click="handleClickFinish">{{ $t('instanceTranck.Finish') }}</el-button>
        </span>
    </el-dialog>
</template>
<script>

export default {
    data() {
        return{
            //提醒设置
            settingsDialogVisible: false, // 提醒设置模态框
            isSelectAll: false, //提醒设置是否全选
            reminderData: [], //提醒设置所有复选框
            reminderData1: [], //船舶提醒复选框列表
            reminderData2: [], //箱货提醒复选框列表
            reminderData3: [], //预警提醒复选框列表
            isCancelShow: true,//是否显示取消按钮
            isNextShow: true,//是否显示下一步按钮
            isWeChatCodeShow: false,//是否显示二维码
            wechatImg: '',//二维码地址
            userId:
                this.getCookie("authId") !== null && this.getCookie("authId") !== "" && this.getCookie("authId") !== undefined
                ? this.getCookie("authId")
                : "",
        }
    },
    methods: {
        //提醒设置调取的接口
        reminderSettings(){
            this.settingsDialogVisible = true
            this.isWeChatCodeShow = false
            this.isCancelShow = true //取消
            var that = this
            // 取出用户是否有关注微信公众号
            if(localStorage.getItem("weChat")) { //有
                this.isNextShow = false //完成
            }else{ //没有
                this.isNextShow = true //下一步
                this.$Axios.get(this.GLOBAL.url + "trace/wechat/getQrcode?userId=" + that.userId,{
                    headers: {
                        Authorization: this.getToken()
                },
                }).then(res => {
                    if(res.data.status == 1){
                        that.wechatImg = res.data.content
                    }
                }).catch((err)=>{
                    
                })
            }
            that.$Axios.get(that.GLOBAL.url + `schedules/web/remindOptions?userId=${that.userId}`,{
                headers: {
                    Authorization: this.getToken()
            },
            }).then(res => {
                if(res.data.status == 1){
                    //判断提醒设置的初始全选状态
                    that.reminderData = res.data.content
                    that.reminderData1 = that.group(
                        res.data.content.filter(item => {
                            if(item.optionType == 1){
                                return true
                            }
                        })
                    )
                    that.reminderData2 = that.group(
                        res.data.content.filter(item => {
                            if(item.optionType == 2){
                                return true
                            }
                        })
                    )
                    that.reminderData3 = that.group(
                        res.data.content.filter(item => {
                            if(item.optionType == 3){
                                return true
                            }
                        })
                    )
                }
            }).catch((err)=>{
                
            })
        },
        //点击提醒设置-取消按钮
        handleClickCancel(){
            this.settingsDialogVisible = false
        },
        //点击提醒设置-上一步按钮
        handleClickBack(){
            this.isWeChatCodeShow = false
            this.isCancelShow = true //取消
            // 取出用户是否有关注微信公众号
            if(localStorage.getItem("weChat")){//有
                this.isNextShow = false //完成
            }else{//没有
                this.isNextShow = true //下一步
            }
        },
        //点击提醒设置-下一步按钮
        handleClickNext(){
            this.isWeChatCodeShow = true
            this.isCancelShow = false //上一步
            this.isNextShow = false //完成  
        },
        //提醒设置全选
        handleClickSelectAll(){
            this.isSelectAll = true
            let reminderData12 = this.reminderData.filter(item => {
                if(item.optionType == 1 || item.optionType == 2){
                    return true
                }
            })
            for(let i=0; i<reminderData12.length; i++){
                reminderData12[i].enable = true
            }
             
        },
        //提醒设置取消全选
        handleClickSelectNone(){
            this.isSelectAll = false
            let reminderData12 = this.reminderData.filter(item => {
                if(item.optionType == 1 || item.optionType == 2){
                    return true
                }
            })
            for(let i=0; i<reminderData12.length; i++){
                reminderData12[i].enable = false
            }
        },
        //点击提醒设置-完成按钮
        handleClickFinish(){
            if(localStorage.getItem("weChat")){
                var that = this
                that.$Axios.put(this.GLOBAL.url + "schedules/web/updateRemind",JSON.stringify(this.reminderData),{
                    headers: {
                        Authorization: this.getToken(),
                        "Content-Type": "application/json"
                },
                }).then(res => {
                    if(res.data.status == 1){
                        that.$message({
                            message: that.$t('instanceTranck.settingsSuccess'),
                            type: "success",
                            customClass: "base-message-zindex"
                        });
                    }else{
                        that.$message({
                            message: that.$t('instanceTranck.settingsError'),
                            type: "error",
                            customClass: "base-message-zindex"
                        });
                    }
                    that.settingsDialogVisible = false
                }).catch((err)=>{
                    that.settingsDialogVisible = false
                })
                that.$emit('tiXshe')
            }else{
                this.$message({
                    message: this.$t('instanceTranck.useWeChat'),
                    type: "error",
                    customClass: "base-message-zindex"
                }); 
            }
            
        },
        //提醒设置将数组拆分成长度为3的小数组
        group(array) {
            let index = 0;
            let newArray = [];
            while(index < array.length) {
                newArray.push(array.slice(index, index += 3));
            }
            return newArray;
        },
        //处理提醒设置复选框名称 换算成中文
        getOptionName(data){
            let weekList = {
                // 提醒设置复选框
                'STSP':'instanceTranck.EmptyBox', //提空箱
                'GITM':'instanceTranck.IntoPort', //进港
                'PASS':'instanceTranck.CustomsRelease', //海关放行
                'TMPS':'instanceTranck.TerminalRelease', //码头放行
                'PRLD':'instanceTranck.Withload', //配载
                'LOBD':'instanceTranck.GetBoard', //上船
                'DSCH':'instanceTranck.Discharged', //卸船
                'BDAR':'instanceTranck.arrival', //到港
                'STCS':'instanceTranck.PickUp', //提货出场
                'RCVE':'instanceTranck.StillEmpty', //还空箱
                'OPEN':'instanceTranck.CutOffPort', //开截港
                'DOCK':'instanceTranck.ActualBerthing', //实际靠泊
                'DEPT,DLPT':'instanceTranck.ActualDeparture', //实际离泊
                'PLAN':'instanceTranck.PlanToBerth', //计划靠离泊
                'TERMINAL':'instanceTranck.TerminalChange', //码头变化
                'CHECK':'instanceTranck.Check', //检查
                'PASS_ERR':'instanceTranck.CustomsReleaseError', //海放异常
                'TMPS_ERR':'instanceTranck.TerminalReleaseError', //码放异常
                'PRLD_ERR':'instanceTranck.WithloadError', //配载异常
                'TRANS_ERR':'instanceTranck.TransError', //中转异常
            };
            if(weekList[data]){
                return weekList[data];
            }else{
                return data;
            };
        },
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
        reminderData:{
            handler(newVal, oldVal) {
                let selectData = newVal.filter(item => {
                    if((item.optionType == 1 && item.enable == false) || (item.optionType == 2 && item.enable == false)){
                        return true
                    }
                })
                if(selectData.length > 0){
                    this.isSelectAll = false
                }else{
                    this.isSelectAll = true
                }
            },
            deep: true
        },
    },
    mounted(){

    },
}
</script>
<style>
    
</style>