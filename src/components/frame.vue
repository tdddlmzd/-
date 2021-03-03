<style lang="scss">
.el-dialog__header{
    padding: 0;
}
.iframe .informa{
    width: 100%;
    text-align: center;
    color: #5f6266;
}
.iframe .informa .image{
    width: 40px;
    height: 40px;
}
.iframe .butAll{
    width: 100%;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    .btnBorder{
        display: inline-block;
        font-size: 12px;
        width: 68px;
        height: 28px;
        line-height: 28px;
        text-align: center;
        color: #5f6266;
        background: #fff;
        border-radius: 5px;
        cursor: pointer;
    }
    .greenBorder{
        display: inline-block;
        font-size: 12px;
        width: 68px;
        height: 28px;
        line-height: 28px;
        text-align: center;
        color: #fff;
        background: #26b4b2;
        border-radius: 5px;
        cursor: pointer;
        margin-left: 20px;
    }
    .greenBorder:hover{
      background-color: #51c3c1;
    }
}
.iframe .textarea{
    text-align: left;
    p{
        margin-bottom: 5px;
    }
}
</style>
<template>
<!-- 手机提醒，订阅，备注，取消订阅模态框 -->
    <div class="iframe">
        <i class="el-icon-close" style="float:right;cursor: pointer;" @click="closeIframe"></i>
        <div class="informa" v-show="dialogSpan == '批量订阅'">
            <img src="../assets/images/cargo/gantan.svg" class="image">
            <!-- <img src='../assets/images/cargo/item-9.png' class="image"> -->
            <p>{{ $t('tranck.subscription')}}</p>
            <p>{{ $t('tranck.publicAccount')}}</p>
        </div>
        <div class="informa" v-show="dialogSpan == '批量删除'">
            <img src='../assets/images/cargo/delec.svg' class="image">
            <p>{{ $t('tranck.deletion')}}</p>
        </div>
        <div class="textarea" v-show="dialogSpan == '备注'">
            <p>{{ $t('tranck.enterNote')}}</p>
            <el-input type="textarea" :placeholder="$t('tranck.enterContent')" v-model="textarea" maxlength="30" show-word-limit resize="none"></el-input>
        </div>
        <div class="informa" v-show="dialogSpan == '取消订阅'">
            <img src='../assets/images/cargo/cancel.svg' class="image">
            <p>{{ $t('tranck.unsubscribe')}}</p>
            <p>{{ $t('tranck.willpushed')}}</p>
        </div>
        <div class="butAll">
            <span class="btnBorder" @click="cancelCheck">{{ $t('tranck.cancel')}}</span>
            <span class="greenBorder"  @click="comfirmCheck">{{ $t('tranck.confirm')}}</span>
        </div>
    </div>
</template>
<script>
import gantan from '../assets/images/cargo/gantan.svg'
import delec from '../assets/images/cargo/delec.svg'
import cancel from '../assets/images/cargo/cancel.svg'
export default {
    props:[
            "dialogText",
            "modalBoxList",
            "checkGroup"
        ],
    data() {
        return {
            textarea:'',
            userId: '',
            dialogSpan: this.dialogText,
            userSelect: this.modalBoxList,
            groupSelect: this.checkGroup,
        }
    },
    methods: {
        //关闭模态框
        closeIframe() {
            this.$emit('handleCloseIframe');
        },
        //点击取消
        cancelCheck() {
            this.closeIframe()
        },
        //点击确认
        comfirmCheck() {
            var userSelect = JSON.stringify(this.userSelect)
            // var userSelect = this.userSelect[0]
            // var groupSelect = JSON.stringify(this.groupSelect)
            var that = this
            if(this.dialogSpan == '批量订阅') {
                $.ajax({ //批量订阅
                    url:this.GLOBAL.url + "trace/fore/subscribe?paramStr=" + userSelect + '&userId=' + that.userId + '&mark=' + 1,
                    type: "POST",
                    headers: {
                        Authorization: this.getToken()
                    },
                    beforeSend: function() {},
                    success: function(data) {
                        if (data.status == 1) {
                            that.$emit('refreshPage');
                            that.closeIframe()
                        }
                    },
                    error: function(e) {}
                });
            }else if(this.dialogSpan == '批量删除') {
                $.ajax({ //批量删除
                    url:this.GLOBAL.url + "trace/fore/delHistoryData?paramStr=" + userSelect + '&userId=' + that.userId,
                    type: "POST",
                    headers: {
                        Authorization: this.getToken()
                    },
                    beforeSend: function() {},
                    success: function(data) {
                        if (data.status == 1) {
                            that.$message({
                              message: that.$t('messages.deleteSuccess'),
                              type: "success",
                              customClass:'base-message-zindex'
                            });
                        }
                    },
                    error: function(e) {}
                });
            }else if(this.dialogSpan == '备注') {
                $.ajax({ //批量删除
                    url:this.GLOBAL.url + "trace/fore/updateMark?identify=" + userSelect + '&userId=' + that.userId + '&remarks=' + that.textarea,
                    type: "POST",
                    headers: {
                        Authorization: this.getToken()
                    },
                    beforeSend: function() {},
                    success: function(data) {
                        if (data.status == 1) {
                            that.$emit('refreshPage');
                            that.closeIframe()
                        }
                    },
                    error: function(e) {}
                });
            }else if(this.dialogSpan == '取消订阅') {
                $.ajax({ //批量订阅
                    url:this.GLOBAL.url + "trace/fore/subscribe?paramStr=" + userSelect + '&userId=' + that.userId + '&mark=' + 0,
                    type: "POST",
                    headers: {
                        Authorization: this.getToken()
                    },
                    beforeSend: function() {},
                    success: function(data) {
                        if (data.status == 1) {
                            that.$emit('refreshPage');
                            that.closeIframe()
                        }
                    },
                    error: function(e) {}
                });
            } 
            // this.closeIframe()
        }
    },
    mounted() {
        var userInfo = JSON.parse(this.getCookie("currentUser"))
        this.userId = userInfo.id
    },
    computed: {
        updateDialogText() {
            return this.dialogText
        },
    },
    watch: {
        updateDialogText(newVal,odlVal) {
            if(newVal == '批量订阅'){
                this.dialogSpan = '批量订阅'
            }else if(newVal == '批量删除'){
                this.dialogSpan = '批量删除'
            }else if(newVal == '备注') {
                this.dialogSpan = '备注'
            }else if(newVal == '取消订阅') {
                this.dialogSpan = '取消订阅'
            }
        },
    },
}
</script>
