<style lang="scss">
.message-content{
    padding-top: 9px;
    .system_message{
        background-color: #ffffff;
        box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        padding: 20px 14px;
        margin-bottom: 10px;
        .up_section{
            margin-bottom: 14px;
            display: flex;
            .logo_icon{
                width: 48px;
                height: 48px;
                margin-right: 10px;
            }
            .system{
                flex: 1;
                .title{
                    font-size: 14px;
                    color: #282828;
                    line-height: 26px;
                    font-weight: 600;
                    text-align: left;
                }
                .time{
                    font-size: 12px;
                    color: #909090;
                    line-height: 18px;
                }
            }
        }
        .down_section{
            width: 100%;
            background-color: #f2f2f2;
            border-radius: 8px;
            padding: 10px;
            padding-bottom: 4px;
            .message{
                font-size: 14px;
                line-height: 14px;
                color: #282828;
                margin-bottom: 6px;
                font-weight: 600;
            }
            .info{
                font-size: 12px;
                line-height: 22px;
                margin-bottom: 10px;
                color: #282828;
                span{
                    display: inline-block;
                    margin-right: 18px;
                }
            }
            .info:last-of-type{
                margin-bottom: 0;
            }
        }
    }
    .system_message:last-of-type{
        margin-bottom: 146px;
    }
}
.no_message{
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    .no_message_tip_bg{
        background: url("../assets/images/cargo/shapeof.png") no-repeat;
        background-size: 279px 81px;
        width: 279px;
        height: 81px;
        margin: 0 auto 10px;
        .no_message_tip{
            font-size: 14px;
            color: #282828;
            text-align: center;
            line-height: 70px;
        }
    }
    .no_message_img{
        width: 413px;
        height: 181px;
    }
}
</style>
<template>
    <!-- 右侧船期列表部分 -->
    <div ref="message_content" class="message_content">
        <Loading v-if="loading"></Loading>
        <div v-if="consoleData.length > 0" class="message-content">
            <div v-for="(item,index) in consoleData" :key="index" class="system_message">
                <div class="up_section">
                    <img class="logo_icon" src="../assets/images/system_message_icon.png">
                    <div class="system">
                        <div class="title">{{ $t('task.systemMessage') }}</div>
                        <div class="time"><span>{{$t('task.sendTime') + '：'}}</span>{{ item.createTime ? getTime('YY-mm-dd HH:MM', new Date(item.createTime)) : '--' }}</div>
                    </div>
                </div>
                <div class="down_section">
                    <div class="message">{{item.referenceno}} <span>{{item.title + '！'}}</span></div>
                    <div class="info">
                        {{item.message}}
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="no_message">
            <div class="no_message_tip_bg">
                <p class="no_message_tip">{{ $t('task.noMessage') }}</p>
            </div>
            <img src="../assets/images/cargo/no_message.png" class="no_message_img">
        </div>
    </div>
</template>

<script>

    import appConfig from "@src/app.config";
    import Loading from "@components/loading";
    export default {
        page: {
            title: '系统通知',
            meta: [{ name: 'description', content: appConfig.description }],
        },
        data(){
            return {
                userId: '',
                userInfo:
                this.getCookie("authId") !== null && this.getCookie("authId") !== "" && this.getCookie("authId") !== undefined
                ? this.getCookie("authId")
                : "",
                loading: false,
                consoleData: []
            }
        },
        methods: {
            // 获取控制台列表消息
            getConsoleData(){
                this.loading = true
                this.$Axios.get(this.GLOBAL.url + `trace/fore/sysRemindList?userid=${this.userInfo}`,{
                    headers: {
                        Authorization: this.getToken()
                },
                }).then(res => {
                    if(res.data.status == 1){
                        this.consoleData = res.data.content
                        this.$parent.getCount()
                    }
                    this.loading = false
                }).catch((err)=>{
                    this.loading = false
                })
            },
            //处理时间
            getTime(fmt, date) {
                let ret;
                let opt = {
                    "Y+": date.getFullYear().toString(),        // 年
                    "m+": (date.getMonth() + 1).toString(),     // 月
                    "d+": date.getDate().toString(),            // 日
                    "H+": date.getHours().toString(),           // 时
                    "M+": date.getMinutes().toString(),         // 分
                    "S+": date.getSeconds().toString()          // 秒
                    // 有其他格式化字符需求可以继续添加，必须转化成字符串
                };
                for (let k in opt) {
                    ret = new RegExp("(" + k + ")").exec(fmt);
                    if (ret) {
                        fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
                    };
                };
                return fmt;
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
            this.getConsoleData()
            this.$refs.message_content.style.minHeight = document.documentElement.clientHeight - 122 + 'px'
        },
        components: {
            Loading
        },
    };
</script>

