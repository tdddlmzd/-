<style lang="scss" scoped>
    .my-list-content {
        position: relative;
        top: 57px;
        overflow: hidden;
    }
    .portCns_dialog{
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        overflow: hidden !important;
        min-width: 1200px;
        z-index: 3001 !important;
        background: rgb(0, 0, 0,.5);
        .guidePage{
            position: absolute;
            top: 57px;
            background: transparent;
            .fucheng{
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 60px;
                background: transparent;
                z-index: 1;
            }
        }
        .dialog_pol{
            position: absolute;
            left: 6%;
            top: 70px;
            .dialog_pol_next{
                position: absolute;
                top: 120px;
                left: 174px;
            }
            .dialog_pol_skip{
                position: absolute;
                top: 158px;
                left: 195px;
            }
        }
        .next{
            width: 90px;
            height: 30px;
            border-radius: 15px;
            cursor: pointer;
        }
        .skip{
            width: 48px;
            height: 12px;
            cursor: pointer;
        }
        .dialog_vessel{
            position: absolute;
            top: 70px;
            right: 38%;
            .dialog_vessel_next{
                position: absolute;
                   top: 135px;
                    left: 95px;
            }
            .dialog_vessel_skip{
                position: absolute;
                top: 172px;
                left: 118px;
            }
        }
        .dialog_chujink{
            position: absolute;
            top: 70px;
            right: 204px;
            .dialog_chujink_next{
                position: absolute;
                top: 115px;
                left: 151px;            
            }
            .dialog_chujink_skip{
                position: absolute;
                top: 152px;
                left: 171px;
            }
        }
        .dialog_guanwang{
            position: absolute;
            top: 250px;
            right: 3%;
            margin-right: 72px;
            .dialog_guanwang_next{
                position: absolute;
                top: 290px;
                left: 203px;        
            }
            .dialog_guanwang_skip{
                position: absolute;
                top: 327px;
                right: 146px;
            }
        }
        .dialog_top{
            position: fixed;
            right: 0;
            bottom: 90px;
            .dialog_top_next{
                position: fixed;
                right: 300px;
                bottom: 221px;
            }
            .dialog_top_skip{
                position: fixed;
                right: 0;
                bottom: 90px;
            }
        }
    }
</style>
<template>
    <div id="list">
        <Head ref="head"></Head>
        <div ref="my_list_content" class="my-list-content">
            <PortCnshaNav ref="PortCnshaNav"></PortCnshaNav>
            <PortCnsha ref="PortCnsha"></PortCnsha>
            <Declare></Declare>
            <div>
                <Footer></Footer>
            </div>
        </div>
        <div v-if="isDialogShow" class="portCns_dialog">
            <div class="truck_contion guidePage">
                <div class="fucheng"></div>
                <div class="container">
                    <!-- 第一步 -->
                    <div class="truck_item1" :style="{opacity: currentNum == 1 ? 1 : 0}">
                        <div class="truck_item1_box"></div>
                        <div class="truck_item1_1">
                            <el-input style="width:100%" value="提单号" readonly></el-input>
                            <i class="el-icon-arrow-down arrow_down"></i>
                        </div>
                        <div class="truck_item1_2">
                            <div class="truck_item1_2_1">
                                <img class="refecInputIcon" src="../../assets/images/cargo/tidanhui.png" width="13" height="16"/>
                                <el-input 
                                    :placeholder="$t('tracks.importNumber')"
                                    class="inputClass"
                                    readonly
                                >
                                </el-input>
                                <span class="onlineRight"></span>
                            </div>
                        </div>
                    </div>
                    <div v-if="currentNum == 1" class="dialog_pol">
                        <img src="../../assets/images/gang1.png">
                        <div class="next dialog_pol_next" @click="handleClickUseCourse(2)"></div>
                        <div class="skip dialog_pol_skip" @click="handleClickSkip"></div>
                    </div>

                    <!-- 第二步 -->
                    <div class="truck_item2" :style="{opacity: currentNum == 2 ? 1 : 0}">
                        <div class="truck_item2_1">
                            <img class="chuanInputIcon" src="../../assets/images/cargo/chuanhui.png" width="18" height="16"/>
                            <el-input 
                                clearable
                                :placeholder="$t('tracks.vessel')"
                                class="inputClass"
                                readonly
                            >
                            </el-input>
                        </div>
                    </div>
                    <div v-if="currentNum == 2" class="dialog_vessel">
                        <img src="../../assets/images/gang2.png">
                        <div class="next dialog_vessel_next" @click="handleClickUseCourse(3)"></div>
                        <div class="skip dialog_vessel_skip" @click="handleClickSkip"></div>
                    </div>

                    <!-- 第三步 -->
                    <div class="truck_item3" :style="{opacity: currentNum == 3 ? 1 : 0}">
                        <div class="truck_item3_1">
                            <div class="home_radio">
                                <el-radio label='1' value='1'>{{ $t('home.out') }}</el-radio>
                                <el-radio label='2' class="chuRodio">{{ $t('home.in') }}</el-radio>
                            </div>
                        </div>
                    </div>
                    <div v-if="currentNum == 3" class="dialog_chujink">
                        <img src="../../assets/images/gang3.png">
                        <div class="next dialog_chujink_next" @click="handleClickUseCourse(4)"></div>
                        <div class="skip dialog_chujink_skip" @click="handleClickSkip"></div>
                    </div>
                    
                    <div v-if="currentNum == 4" class="dialog_guanwang">
                        <img src="../../assets/images/gang4.png">
                        <div class="next dialog_guanwang_next" @click="handleClickUseCourse(5)"></div>
                        <div class="skip dialog_guanwang_skip" @click="handleClickSkip"></div>
                    </div>
                    <div class="truck_item5" style="opacity:0">
                        <el-button type="primary" round class="btnSearch">{{$t('instanceTranck.track')}}</el-button>
                        <el-button type="primary" round class="btnSearch btnUpload">{{$t('instanceTranck.BulkUpload')}}</el-button>
                    </div>
                </div>
            </div>
            <div v-if="currentNum == 5" class="dialog_top">
                <img src="../../assets/images/cargo/ex_dialog_top.png">
                <div class="next dialog_top_next" @click="handleClickSkip"></div>
            </div>
        </div>
    </div>
</template>
<script>
import Head from "@components/Head";
import PortCnshaNav from "@components/PortCnshaNav";
import PortCnsha from "@components/PortCnsha";
import Declare from "@components/Declare";
import Footer from "@components/Footer";
import appConfig from "@src/app.config";
export default {
    page: {
        title: "上海港区查询-港航纵横，港航纵横船期，上海船舶计划，上海船舶动态，集运宝典",
        meta: [
            {
                name: 'description',
                content: "鲸准港区查询提供港航纵横船舶动态查询，上海船舶计划查询，上海船期查询，洋山一期查询,洋山三期查询,外港码头查询,外一码头查询以及上海集装箱货物状态查询的一站式货物跟踪查询平台"
            },
            {name: 'keywords', content: "港航纵横，港航纵横船舶动态,上海港船期，港航纵横船舶计划，港航纵横船期，上海船舶计划，上海船期查询"},
        ],
    },
    data() {
        return {
            isDialogShow: false,
            currentNum: 1,
            userId:
                this.getCookie("authId") !== null && this.getCookie("authId") !== "" && this.getCookie("authId") !== undefined
                ? this.getCookie("authId")
                : 0
        };
    },
    components: {
        Head,
        PortCnshaNav,
        PortCnsha,
        Declare,
        Footer
    },
    methods: {
        //初始化 跟踪栏的数据
        clearHeadNav() {
            if(this.$refs.PortCnshaNav){
                this.$refs.PortCnsha.searchStr = ''
                this.$refs.PortCnshaNav.isTiandan = 1
                this.$refs.PortCnshaNav.referenceno = ''
                // this.$refs.PortCnshaNav.ieid = 'E'
                this.$refs.PortCnshaNav.vslname = ''
            }
        },
        //搜索栏跟踪
        getParentEvent(params){
            this.$nextTick(function() {
                if(this.$refs.PortCnsha){
                    this.$refs.PortCnsha.getCnshaData(params)
                }
            })
        },
        //调取教程
        handleClickUseCourse(value){
            this.isDialogShow = true
            this.currentNum = value
        },
        //点击'跳过引导'或者'我知道了'
        handleClickSkip(){
            this.isDialogShow = false
            this.currentNum = 1
            this.$refs.PortCnsha.isShiyong = false
            if(this.userId){ //未登录时才走已经有过使用教程的接口
                this.$Axios.get(this.GLOBAL.url + `schedules/web/updateUserIsRead?id=` + this.userId,{
                    headers: {
                        Authorization: this.getToken()
                    },
                }).then(res => {
                    if(res.data.status == 1){
                        this.$refs.head.getUserInfo(this.userId, function(){})
                    }
                })
            }
        },
    },
    mounted() {
        if(this.$route && this.$route.params && this.$route.params.referenceno){
            if(this.$refs.PortCnshaNav){
                this.$refs.PortCnshaNav.isTiandan = this.$route.params.isTiandan
                this.$refs.PortCnshaNav.referenceno = this.$route.params.referenceno
                this.$refs.PortCnshaNav.ieid = this.$route.params.ieid
                this.$refs.PortCnshaNav.vslname = this.$route.params.vslname
            }
            if(this.$refs.PortCnsha){
                this.$refs.PortCnsha.getCnshaData(this.$route.params)
            }
        }
    },
    watch: {
        isDialogShow : {
            // immediate: true,
            handler(newVal){
                if(newVal){
                   this.$refs.my_list_content.style.height = document.documentElement.clientHeight - 65 + 'px'
                }else{
                   this.$refs.my_list_content.style.height = 'auto'
                }
            }
        }
    },
}   
</script>