<style lang="scss">
.SharedCabinAdd_dialog{
    .el-dialog__headerbtn{
        top: 0px !important;
    }
    .title{
        height: 14px;
        font-size: 14px;
        font-weight: 600;
        color: #282828;
        text-align: left;
        line-height: 14px;
        margin-bottom: 20px;
    }
    .checkboxs_warp{
        margin-bottom: 20px;
        display: flex;
        .el-checkbox{
            width: 94px;
            font-size: 12px;
            line-height: 12px;
            display: flex;
            margin-right: 53px;
            .el-checkbox__input{
                width: 12px;
                .el-checkbox__inner{
                    width: 12px;
                    height: 12px;
                    &::after{
                        height: 5px;
                        left: 3px;
                    }
                    &:hover{
                        border-color: #26b4b2 !important;
                    }
                }
            }
            .el-checkbox__input.is_focus .el-checkbox__inner{
                border-color: #26b4b2 !important;
            }
            .el-checkbox__input.is-checked .el-checkbox__inner,
            .el-checkbox__input.is-indeterminate .el-checkbox__inner{
                background-color: #26b4b2;
                border-color: #26b4b2;
            }
            .el-checkbox__label{
                flex: 1;
                line-height: 12px;
                font-size: 12px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                color: #282828 !important;
            }
        }
        .el-checkbox:last-of-type{
            margin-right: 0;
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
</style>
<template>
    <!-- 共舱新增弹窗 -->
    <div class="SharedCabinAdd_dialog">
        <div class="title">
            {{ $t('table.CabinCarrier') }}
        </div>
        <div class="checkboxs_warp" v-for="(array,index) in SharedCabinData" :key="index">
            <el-checkbox 
            v-for="(item,index) in array" 
            :key="index" 
            v-model="item.isSelect"
            @change="handleChange($event,item,array)"
            v-title="item.carrier + '(' + item.routeCode + ')'">
                {{item.carrier + '(' + item.routeCode + ')'}}
            </el-checkbox>
        </div>
        <div class="add_route_btn">
            <div class="btn cancel_btn" @click="SharedCabinAddCancel">{{ $t('task.cancel') }}</div>
            <div class="btn Ok_btn" @click="SharedCabinAddOk">{{ $t('task.determine') }}</div>
        </div>
    </div>
</template>

<script>
    export default {
        props: [
            "AllCabinList"
        ],
        data(){
            return {
                userId: '',
                userInfo:
                this.getCookie("authId") !== null && this.getCookie("authId") !== "" && this.getCookie("authId") !== undefined
                ? this.getCookie("authId")
                : "",
                SharedCabinData: [],//共舱数据
            }
        },
        methods: {
            //确定按钮
            SharedCabinAddOk(){
                var AllCabinList = []
                for(let i=0; i<this.SharedCabinData.length; i++){
                    AllCabinList = AllCabinList.concat(this.SharedCabinData[i])
                }
                this.$parent.$parent.AllCabinList = AllCabinList
                this.SharedCabinAddCancel()
            },
            //取消按钮
            SharedCabinAddCancel(){
                this.$parent.$parent.SharedCabinDialogVisible = false
            },
            handleChange(val,value,array){
                var item = value
                for(let i=0; i<array.length; i++){
                    if(array[i].staticId == item.staticId){
                        item.isSelect = val
                        array.splice(i,1,item)
                    }
                }
            },
            //将数组拆分成长度为3的小数组
            group(array) {
                let index = 0;
                let newArray = [];
                while(index < array.length) {
                    newArray.push(array.slice(index, index += 3));
                }
                return newArray;
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
            this.SharedCabinData = JSON.parse(JSON.stringify(this.group(this.AllCabinList)))
        }
    };
</script>

