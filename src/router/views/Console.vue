<style lang="scss">
.tasks{
    width: 100%;
    .tasksContent{
        position: relative;
        top: 57px;
        width: 100%;
        .container{
            .left_part{
                .left_item{
                    margin-top: 20px;
                    margin-right: 20px;
                    background: #fff;
                    font-size: 12px;
                    border-radius: 4px;
                    border: solid 1px #f2f2f2;
                    .schwsule{
                        width: 120px;
                        padding-left: 20px;
                        line-height: 52px;
                        border-bottom: 1px solid #f2f2f2;
                        span{
                            user-select: none;
                        }
                        &:hover{
                            cursor:pointer;
                            background-color: #f2f2f2;
                        }
                        .number{
                            display: inline-block;
                            padding: 0 8px;
                            height: 15px;
                            line-height: 15px;
                            font-size: 12px;
                            margin-left: 4px;
                            background: #ff7676;
                            border-radius: 7px;
                            color: #fff;
                            font-weight: bold;
                        }
                    }
                    .left_item_title{
                        padding: 0 15px 0 20px;
                        line-height: 52px;
                        font-weight: 600;
                        border-bottom: 1px solid #f2f2f2;
                        display: flex;
                        justify-content: space-between;
                        .icon-shouqi{
                            cursor: pointer;
                        }
                    }
                    .schwsule:last-of-type{
                        border: none;
                        padding-bottom: 5px;
                    }
                    .isActive{
                        font-weight: 600;
                        background-color: #f2f2f2;
                    }
                }
            }
            .task-content{
                flex: 1;
            }
        }
        .main_container{
            display: flex;
        }
    }
}
</style>
<template>
<!-- 下载页面 -->
    <div class="tasks">
        <Head ref="head"></Head>
        <div ref="main_contact" class="tasksContent">
            <div class="container main_container">
                <!-- 左侧我的任务部分 -->
                <div class="left_part">
                    <div class="left_item">
                        <div class="left_item_title">
                            <div v-if="hideFilterFlag">{{ $t('task.console') }}</div>
                            <div class="iconfont icon-shouqi" @click="hideFilter"></div>
                        </div>
                        <template v-if="hideFilterFlag">
                            <div v-if="isRouteExpert" @click="handleLeftBarClick('PortSchedule')" class="schwsule" :class="isPortSchedule?'isActive' : ''">
                                <span>{{ $t('task.PortSchedule') }}</span>
                                <!-- <span class="number" v-if="missionCount">{{missionCount}}</span> -->
                            </div>
                            <div v-if="isRouteExpert" @click="handleLeftBarClick('DynamicShip')" class="schwsule" :class="isDynamicShip?'isActive' : ''">
                                <span>{{ $t('task.DynamicShip') }}</span>
                                <!-- <span class="number" v-if="missionCount">{{missionCount}}</span> -->
                            </div>
                            <div @click="handleLeftBarClick('Message')" class="schwsule" :class="isMessageShow?'isActive' : ''">
                                <span>{{ $t('task.systemMessage') }}</span>
                                <!-- <span class="number" v-if="messageCount">{{messageCount}}</span> -->
                            </div>
                        </template>
                    </div>
                </div>
                <!-- 右侧船期列表部分 -->
                <PortSchedule v-if="isPortSchedule && isRouteExpert" class="task-content"></PortSchedule>
                <DynamicShip v-if="isDynamicShip && isRouteExpert" class="task-content"></DynamicShip>
                <Message v-if="isMessageShow" class="task-content"></Message>
            </div>
            <Footer ref="footer"></Footer>
        </div>
    </div>
</template>

<script>
    import Head from "@components/Head";
    import PortSchedule from "@components/PortSchedule/PortSchedule";
    import DynamicShip from "@components/DynamicShip/DynamicShip";
    import Message from "@components/Message";
    import Footer from "@components/Footer";
    import appConfig from "@src/app.config";
    export default {
        page: {
            title: '控制台',
            meta: [{ name: 'description', content: appConfig.description }],
        },
        data(){
            return {
                userId: '',
                userInfo:
                this.getCookie("authId") !== null && this.getCookie("authId") !== "" && this.getCookie("authId") !== undefined
                ? this.getCookie("authId")
                : "",
                isPortSchedule: true,//港港船期展示状态
                isDynamicShip: false,//动态船舶展示状态
                isMessageShow: false,//系统通知展示状态
                isRouteExpert: false,//是否是航线专家
                hideFilterFlag: true,//左侧过滤栏展开状态
                missionCount: '',//待处理数量
                messageCount: '',//系统通知数量
            }
        },
        methods: {
            //左侧导航栏收起展开状态
            hideFilter(){
                this.hideFilterFlag = !this.hideFilterFlag
            },
            //左侧控制台切换点击事件
            handleLeftBarClick(type){
                if(type == 'PortSchedule'){// 港港船期
                    this.isPortSchedule = true
                    this.isDynamicShip = false
                    this.isMessageShow = false
                }else if(type == 'DynamicShip'){// 动态船舶
                    this.isPortSchedule = false
                    this.isDynamicShip = true
                    this.isMessageShow = false
                }else if(type == 'Message'){// 系统通知
                    this.isPortSchedule = false
                    this.isDynamicShip = false
                    this.isMessageShow = true
                }
            },
            getCount(){
                if(this.$refs.head){
                    this.$refs.head.getUnreadCount()
                }
            }
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
            if(this.userInfo){ //登录
                if(localStorage.getItem('currentUser')){
                    var userInfoData = JSON.parse(JSON.parse(localStorage.getItem('currentUser')).value)
                    if(userInfoData.roles.indexOf('ROUTE_EXPERT') != -1){
                        this.isRouteExpert = true
                        this.handleLeftBarClick('PortSchedule')
                    }else{
                        this.isRouteExpert = false
                        this.handleLeftBarClick('Message')
                    }
                }
            }else{ //未登录的时候跳到登录页
                this.$router.push({
                    path: '/Login'
                });
            }
            this.$refs.main_contact.style.height = document.documentElement.clientHeight - 65 + 'px'
            this.userId = this.userInfo
        },
        components: {
            Head,
            PortSchedule,
            DynamicShip,
            Message,
            Footer
        },
    };
</script>

