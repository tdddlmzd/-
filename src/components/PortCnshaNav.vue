<style lang="scss">
.truck_contion{
    width: 100%;
	height: 80px;
    padding-top: 10px;
    background-color: #fff;
    .container{
        display: flex;
        align-items: center;
        .truck_item1{
            flex: 1;
            padding: 10px 10px 10px 0;
            border-radius: 0px 5px 5px 0px;
            display: flex;
            // overflow: hidden;
            background: #fff;
            position: relative;
            .truck_item1_1{
                width: 25%;
                height: 40px;
                border-radius: 4px;
                border: solid 1px #f2f2f2;
                overflow: hidden;
                position: relative;
                .el-input__inner{
                    border: 0;
                    padding-left: 20px !important;
                    color: #282828;
                }
                .arrow_down{
                    position: absolute;
                    color: #C0C4CC;
                    font-size: 14px;
                    right: 10px;
                    top: 13px;
                }
            }
            .truck_item1_2{
                flex: 1;
                position: relative;
                .truck_item1_2_1{
                    height: 40px;
                    overflow: hidden;
                    border-radius: 4px;
                    border: solid 1px #f2f2f2;
                    margin-left: 20px;
                }
                .truck_item1_2_1::before{
                    position: absolute;
                    left: 50px;
                    top: 11px;
                    content: "* ";
                    color: #ff7676;
                    z-index: 1;            
                }
            }
            .truck_item1_box{
                position: absolute;
                width: 10px;
                height: 100%;
                border-radius: 5px 0px 0px 5px;
                left: -10px;
                top: 0;
                background: #fff;
            }
        }
        .truck_item2{
            width: 22%;
            padding: 10px 10px 10px 10px;
            border-radius: 5px;
            background: #fff;
            overflow: hidden;
            .truck_item2_1{
                width: 100%;
                height: 40px;
                border-radius: 4px;
                border: solid 1px #f2f2f2;
                position: relative;
                overflow: hidden;
            }
        }
        .truck_item3{
            padding: 10px 10px 10px 10px;
            border-radius: 5px;
            background: #fff;
            .truck_item3_1{
                background: #fff;
                height: 40px;
                display: flex;
                align-items: center;
            }
            .home_radio{
                width: auto;
                .el-radio{
                    margin-right: 20px;
                }
                .chuRodio{
                    margin-right: 0px;
                }
                .el-radio__inner{
                border: 4px solid #d1d1d1;
                }
            }
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
                margin-left: 10px;
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
                margin-left: 20px;
                background-color: #072c4c;
                &:hover{
                    background-color: #395670;
                }
            }
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
            padding-left: 40px !important;
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
    <div class="truck_contion">
        <!-- 跟踪列表页头部搜索栏 -->
        <div class="container">
            <div class="truck_item1">
                <div class="truck_item1_1">
                    <el-select
                        v-model="isTiandan"
                        @change="changeXT"
                        style="width:100%"
                    >
                        <el-option
                            v-for="item in tidanXiang"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        >
                        </el-option>
                    </el-select>
                </div>
                <div class="truck_item1_2">
                    <div class="truck_item1_2_1">
                        <img v-if="referenceno !== ''" class="refecInputIcon" src="../assets/images/cargo/tidan.png" width="13" height="16"/>
                        <img v-else class="refecInputIcon" src="../assets/images/cargo/tidanhui.png" width="13" height="16"/>
                        <el-input 
                            v-model="referenceno" 
                            clearable 
                            :placeholder="$t(gang_place)"
                            class="inputClass" 
                            @input="referenceno = referenceno.replace(/[^a-zA-Z0-9]/g,'')"
                        >
                        </el-input>
                        <span class="onlineRight"></span>
                    </div>
                </div>
            </div>
            <div class="truck_item2">
                <div class="truck_item2_1">
                    <img v-if="vslname !== ''" class="chuanInputIcon" src="../assets/images/cargo/chuangognsi.png" width="18" height="16"/>
                    <img v-else class="chuanInputIcon" src="../assets/images/cargo/chuanhui.png" width="18" height="16"/>
                    <el-input 
                        v-model="vslname"
                        clearable
                        :placeholder="$t('tracks.vessel')"
                        @input="onVesselInput"
                        class="inputClass"
                    >
                    </el-input>
                </div>
            </div>
            <div class="truck_item3">
                <div class="truck_item3_1">
                    <div class="home_radio">
                        <el-radio v-model="ieid" label='E'>{{ $t('home.out') }}</el-radio>
                        <el-radio v-model="ieid" label='I' class="chuRodio">{{ $t('home.in') }}</el-radio>
                    </div>
                </div>
            </div>
            <div class="truck_item5">
                <el-button type="primary" round class="btnSearch" @click="gangFollow">{{$t('instanceTranck.track')}}</el-button>
                <el-button type="primary" round class="btnSearch btnUpload" @click="handleClickUpload">{{$t('instanceTranck.BulkUpload')}}</el-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            gang_place: 'home.billOrBooking', //'home.container'
            isTiandan: 1,
            referenceno: '', //提单号/箱号
            ieid: 'E',//E出口 I 进口 
            vslname: '',//船名
            tidanXiang: [
                {
                    label: '提单号',
                    value: 1
                },
                {
                    label: '箱号',
                    value: 2
                },
            ],
            //用户登录
            userId:
                this.getCookie("authId") !== null && this.getCookie("authId") !== "" && this.getCookie("authId") !== undefined
                ? this.getCookie("authId")
                : 0,
        };
    },
    methods: {
        //港区
        changeXT(val){
            if(val == 1){ //提单号
                this.gang_place = 'home.billOrBooking'
            }else{
                this.gang_place = 'home.container'
            }
        },
        //船名 input事件
        onVesselInput(value){
            if(value != ''){
                this.vessel = value.toUpperCase()
            }
        },
        //点击跟踪
        gangFollow() {
            var that = this
            if(that.referenceno == '' || that.referenceno == null || that.referenceno == undefined) {
                this.$message({
                    message: '请输入提单号或者箱号',
                    type: "warning",
                    customClass:'base-message-zindex'
                });
                return
            }
            if(that.isTiandan == 1){ //提单号
                var reg = /^[A-Za-z]{3}U\d{7}$/
                if(reg.test(that.referenceno)){
                    this.$message({
                        message: that.$t('messages.boxNumber'),
                        type: "error",
                        customClass:'base-message-zindex'
                    })
                    return
                }

                //提单号小于4位  属于不规范
                if(that.referenceno.length <= 4){
                    this.$message({
                        message: that.$t('messages.ladingIrr'),
                        type: "error",
                        customClass:'base-message-zindex'
                    })
                    return
                }
                
            }else{ //箱号
                if(that.referenceno.length !== 11){
                    this.$message({
                        message: that.$t('messages.incorrect'),
                        type: "error",
                        customClass:'base-message-zindex'
                    })
                    return
                }
            }
            //保存所选参数
            var params = {
                isTiandan: that.isTiandan,
                referenceno: that.referenceno ? that.referenceno.toUpperCase() : '',
                ieid: that.ieid,
                vslname: that.vslname,
            }
            that.$parent.getParentEvent(params)
        },
        //批量上传
        handleClickUpload(){
            if(this.userId){
                this.$parent.$refs.PortCnsha.handleClickShowUploadDialog()
            }else{
                this.sampleData(1)
            }
        }
    },
    mounted() {},
};
</script>
