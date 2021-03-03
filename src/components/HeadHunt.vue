<style lang="scss">
.track_contion{
    width: 100%;
	height: 80px;
    padding-top: 10px;
	background-color: #fff;
    .container{
        display: flex;
        align-items: center;
        .track_item{
            flex: 1;
            display: flex;
            padding: 10px 10px 10px 0;
            border-radius: 0px 5px 5px 0px;
            background: #fff;
            position: relative;
        }
        .truck_item_box{
            position: absolute;
            width: 10px;
            height: 100%;
            border-radius: 5px 0px 0px 5px;
            left: -10px;
            top: 0;
            background: #fff;
        }
        .track_item1{
            width: 25%;
            height: 40px;
            border-radius: 4px;
            border: solid 1px #f2f2f2;
            overflow: hidden;
            position: relative;
        }
        .track_item2{
            flex: 1;
            position: relative;
            .track_item2_2{
                height: 40px;
                overflow: hidden;
                border-radius: 4px;
                border: solid 1px #f2f2f2;
                margin-left: 20px;
            }
        }
        .track_item3{
            width: 25%;
            height: 40px;
            border-radius: 4px;
            border: solid 1px #f2f2f2;
            margin-left: 20px;
            position: relative;
            overflow: hidden;
             .el-input__inner{
                padding-left: 44px !important;
            }
        }
        .track_item3::before{
            position: absolute;
            left: 33px;
            top: 11px;
            content: "* ";
            color: #ff7676;
            z-index: 1;            
        }
        .truck_item5{
             .btnSearch {
                width: 120px;
                height: 40px;
                line-height: 40px;
                color: #fff;
                font-size: 16px;
                padding: 0;
                background-color: #26b4b2;
                text-align: center;
                border: none;
                margin-top: 0px;
                margin-left: 18px;
                outline: none;
                position: relative;
                &:hover{
                    background-color: #51c3c1;
                }
            }
             .btnSearch .span {
                margin-left: 30px;
            }
            .btnUpload {
                background-color: #072c4c;
                &:hover{
                    background-color: #395670;
                }
            }
        }
        .heatTrack_prompt{
            width: 25%;
            background: #395670;
            border-radius: 4px;
            font-size: 14px;
            color: #fff;
            padding: 10px 10px;
            text-align: center;
            box-sizing: border-box;
            pointer-events: none;
            position: absolute;
            top: 60px;
            right: 10px;
            z-index: 10;
        }
        .heatTrack_prompt .top_arrow{
            width: 8.5px;
            height: 8.5px;
            transform: rotateZ(45deg) translateY(-50%);
            background: #395670;
            pointer-events: none;
            position: absolute;
            opacity: 1;
            top: -2px;
            left: 48%;
        }
    }
    .inputClass{
        width: 100%;
        height: 40px;
        line-height: 40px;
        border-radius: 0;
        .el-input__inner{
            height: 40px;
            border-radius: 0;
            outline: none;
            border: 0;
            color: #282828;
            padding-left: 30px !important;
            padding-right: 25px !important;
        }
        .el-input__inner::-webkit-input-placeholder{
            color: #909090;
        }
    }
    .refecInputIcon{
        display: inline-block;
        vertical-align: sub;
        z-index: 2;
        position: absolute;
        left: 30px;
        top: 50%;
        transform: translateY(-50%);
    }
    .chuanInputIcon{
        display: inline-block;
        vertical-align: sub;
        z-index: 2;
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
    }
}
</style>
<style scoped>
    .el-select-dropdown{
        width: 200px !important;
    }
</style>
<template>
    <div class="track_contion">
        <!-- 跟踪列表页头部搜索栏 -->
        <div class="container">
            <div class="track_item">
                <div class="track_item1">
                    <img v-if="containerNumber !== ''" class="chuanInputIcon" src="../assets/images/cargo/tidan.png" width="13" height="16"/>
                    <img v-else  class="chuanInputIcon" src="../assets/images/cargo/tidanhui.png" width="13" height="16"/>
                    <el-input 
                        v-model="containerNumber" 
                        clearable 
                        :placeholder="$t('home.container')"
                        class="inputClass" 
                        @input="inputContainer"
                    >
                    </el-input>
                </div>
                <div class="track_item2">
                    <div class="track_item2_2">
                        <img v-if="billNumber !== ''" class="refecInputIcon" src="../assets/images/cargo/tidan.png" width="13" height="16"/>
                        <img v-else class="refecInputIcon" src="../assets/images/cargo/tidanhui.png" width="13" height="16"/>
                        <el-input 
                            v-model="billNumber" 
                            clearable 
                            :placeholder="$t('tracks.importNumber')"
                            class="inputClass" 
                            @input="inputTrack"
                        >
                        </el-input>
                        <span class="onlineRight"></span>
                    </div>
                </div>
                <div class="track_item3">
                    <img v-if="carrier !== ''" class="chuanInputIcon" src="../assets/images/cargo/chuangognsi.png" width="18" height="16"/>
                    <img v-else class="chuanInputIcon" src="../assets/images/cargo/chuanhui.png" width="18" height="16"/>
                    <el-select
                        v-model="carrier"
                        class="inputClass"
                        :placeholder="$t('home.company')"
                        remote
                        filterable
                        v-if="isJiuNCarr"
                    >
                        <el-option
                            v-for="item in tesCarrList"
                            :key="item.code"
                            :label="item.code"
                            :value="item.code"
                        >
                            <span>{{ item.nameScn + "(" + item.code + ")"}}</span>
                        </el-option>
                    </el-select>
                    <el-select
                        v-model="carrier" 
                        filterable
                        remote
                        clearable
                        class="inputClass"
                        :placeholder="$t('home.company')"
                        :remote-method="remoteCarrier"
                        @focus="focusCarrier"
                        v-else
                    >
                        <el-option
                            v-for="item in carrList"
                            :key="item.code"
                            :label="item.code"
                            :value="item.code"
                        >
                            <span>{{ item.nameScn + "(" + item.code + ")"}}</span>
                        </el-option>
                    </el-select>
                </div>
                <div class="heatTrack_prompt" v-if="isPrompt">
                    <div class="top_arrow"></div>
                    {{$t('messages.' + proText)}}
                </div>
            </div>
            <div class="truck_item5">
                <el-button type="primary" round class="btnSearch" @click="companyFollow">{{$t('instanceTranck.track')}}</el-button>
                <el-button type="primary" round class="btnSearch btnUpload" @click="handleClickUpload">{{$t('instanceTranck.BulkUpload')}}</el-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
        containerNumber: '',//箱号
        billNumber: '', //提单号
        carrier: '', //船公司
        isJiuNCarr: false, //是否是 9位数字
        carrList: [], //船公司列表
        tesCarrList: [// msk mcc
            {
                code: "MSK",
                nameCn: "马士基航运有限公司",
                nameEn: "MAERSK（SEALAND）SHIPPING CO.,LTD. ",
                nameScn: "马士基",
                scac: "MAEU",
            },
            {
                code: "MCC",
                nameCn: "MCC运输新加坡有限公司",
                nameEn: "Mercantile Cargo Consolidators.",
                nameScn: "MCC运输",
                scac: "MCPU",
            }
        ],
        isPrompt: false, //是否显示提示  跟踪页查询船公司为SINO和SITC时提示  跟踪页查询船公司为WHL时提示
        proText: '', //提示文案
        //用户登录
        userId:
            this.getCookie("authId") !== null && this.getCookie("authId") !== "" && this.getCookie("authId") !== undefined
            ? this.getCookie("authId")
            : 0,
      };
  },
    computed: {},
    methods: {
        //点击跟踪
        companyFollow() {
            var that = this
            if(!that.containerNumber && !that.billNumber) {
                this.$message({
                    message: '请输入提单号或者箱号',
                    type: "warning",
                    customClass:'base-message-zindex'
                });
                return
            }
            if(!that.carrier) {
                this.$message({
                    message: '请选择船公司',
                    type: "warning",
                    customClass:'base-message-zindex'
                });
                return
            }
            //查看提单号是否使用规范
            //提单号11位数字或字母
            if(that.billNumber){
                var reg = /^[A-Za-z]{3}U\d{7}$/
                if(reg.test(that.billNumber)){
                    this.$message({
                        message: that.$t('messages.boxNumber'),
                        type: "error",
                        customClass:'base-message-zindex'
                    })
                    return
                }
            }

            //提单号小于4位  属于不规范
            if(that.billNumber && that.billNumber.length <= 4){
                this.$message({
                    message: that.$t('messages.ladingIrr'),
                    type: "error",
                    customClass:'base-message-zindex'
                })
                return
            }

            //箱号 四位字母+7位数字，第四位是U
            if(!that.billNumber && that.containerNumber){
                if(that.containerNumber.length !== 11){
                    this.$message({
                        message: that.$t('messages.incorrect'),
                        type: "error",
                        customClass:'base-message-zindex'
                    })
                    return
                }

                //如果只填了箱号 并且是 SINOKOR  JINJIANG  SINO  HAL 这四家船公司
                if(that.carrier == 'SINOKOR' || that.carrier == 'JINJIANG' || that.carrier == 'HAL'){
                    this.$message({
                        message: that.$t('messages.conOnly'),
                        type: "error",
                        customClass:'base-message-zindex'
                    })
                    return
                }
            }

            //此船公司 箱号提单号必填
            if(that.carrier == 'SINO' && (!that.billNumber || !that.containerNumber)){
                this.$message({
                    message: that.$t('messages.billOnly'),
                    type: "error",
                    customClass:'base-message-zindex'
                })
                return
            }

            // SITC 此船公司 输入提单号前提下 请输入箱号
            if(that.carrier == 'SITC' && that.billNumber && !that.containerNumber){
                this.$message({
                    message: that.$t('messages.enterBill'),
                    type: "error",
                    customClass:'base-message-zindex'
                })
                return
            }

            //保存所选参数
            var params = {
                containerNumber: that.containerNumber ? that.containerNumber.toUpperCase() : '',
                billNumber: that.billNumber ? that.billNumber.toUpperCase() : '',
                carrier: that.carrier,
            }
            that.$parent.getParentTrack(params)
        },
        //批量上传
        handleClickUpload(){
            if(this.userId){
                this.$parent.$refs.Tracks.handleClickShowUploadDialog()
            }else{
                this.sampleData(1)
            }
        },
        //输入箱号获取船公司
        inputContainer(val){
            var that = this
            that.containerNumber = val.replace(/[^a-zA-Z0-9]/g,'')
            if(val && !that.billNumber){ //如果没有输入提单号 则 根据箱号匹配船公司
                that.$Axios.get(that.GLOBAL.url + "trace/fore/getContainerShipping?ref=" + val,{
                    headers: {
                        Authorization: that.getToken()
                },
                }).then(res => {
                    if(res.data.status == 1){
                        if(res.data.content.length > 0){
                            if(res.data.content[0]){
                                that.carrier = res.data.content[0].code ? res.data.content[0].code : ''
                            }
                        }
                    }
                })
            }else{
                if(!that.billNumber){ //没输入值 而且还没有填箱号 则
                    that.carrier = ''
                }
            }
        },
        //输入提单号获取对应得船公司
        inputTrack(value) {
            var that = this
            that.billNumber = value.replace(/[^a-zA-Z0-9]/g,'') //只能输入数字跟字母的组合
            if(value){
                this.$Axios.get(this.GLOBAL.url + "trace/fore/getShipping?nameCn=&ref=" + that.billNumber,{
                    headers: {
                        Authorization: this.getToken()
                },
                }).then(res => {
                    if(res.data.status == 1){
                        if(res.data.content.length > 0){
                            if(res.data.content[0]){
                                //提单号是9位数字
                                var reg = /^[0-9]*[1-9][0-9]*$/
                                if(reg.test(that.billNumber) && that.billNumber.length == 9){
                                    that.carrier = ''
                                    that.isJiuNCarr = true
                                }else{
                                    that.isJiuNCarr = false
                                    that.carrier = res.data.content[0].code ? res.data.content[0].code : ''
                                }
                            }
                        }
                    }
                })
            }else{
                that.carrier = ''
            }
        },
        //船公司搜索
        focusCarrier(){
            var that = this
            this.$Axios.get(this.GLOBAL.url + "trace/fore/getShipping?nameCn=",{
                headers: {
                    Authorization: this.getToken()
            },
            }).then(res => {
                if(res.data.status == 1){
                    that.carrList = res.data.content
                }else{
                    that.carrList = []
                }
            }).catch((err)=>{
                that.carrList = []
            })
        },
        //船公司搜索
        remoteCarrier(value){
            var that = this
            this.$Axios.get(this.GLOBAL.url + "trace/fore/getShipping?nameCn=" + value,{
                headers: {
                    Authorization: this.getToken()
            },
            }).then(res => {
                if(res.data.status == 1){
                    that.carrList = res.data.content
                }else{
                    that.carrList = []
                }
            }).catch((err)=>{
                that.carrList = []
            })
        },
    },
    watch: {
        carrier:{
            handler(newVal, oldVal) {
                if(newVal == 'WHL'){
                    // if(newVal == 'SINO' || newVal == 'SITC'){
                    //     this.proText = 'trackInput'
                    // }
                    if(newVal == 'WHL'){
                        this.proText = 'trackData'
                    }
                    this.isPrompt = true
                    setTimeout(()=>{
                        this.isPrompt = false
                    },1000 * 3)
                }
            },
            deep: true
        },
    },
    mounted() {},
};
</script>