<style lang="scss" scoped>
.my-list-content {
    position: relative;
    top: 57px;
    overflow: hidden;
}
.track_dialog{
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
            left: 109px;        
        }
        .dialog_pol_skip{
            position: absolute;
            top: 158px;
            left: 130px;
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
    .dialog_guanwang{
        position: absolute;
        top: 259px;
        right: 3%;
        margin-right: 63px;
        .dialog_guanwang_next{
            position: absolute;
            top: 163px;
            left: 203px;        
        }
        .dialog_guanwang_skip{
            position: absolute;
            top: 199px;
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
            <HeadHunt ref="searchBar"></HeadHunt>
            <Tracks ref="Tracks"></Tracks>
            <Declare></Declare>
            <div>
                <Footer></Footer>
            </div>
        </div>
        <div v-if="isDialogShow" class="track_dialog">
            <div class="track_contion guidePage">
                <div class="fucheng"></div>
                <div class="container">
                    <!-- 第一步 -->
                    <div class="track_item" :style="{opacity: currentNum == 1 ? 1 : 0}">
                        <div class="truck_item_box"></div>
                        <div class="track_item1">
                            <img class="chuanInputIcon" src="../../assets/images/cargo/tidanhui.png" width="13" height="16"/>
                            <el-input style="width:100%" value="箱号" readonly class="inputClass"></el-input>
                        </div>
                        <div class="track_item2">
                            <div class="track_item2_2">
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
                        <div class="track_item3">
                            <img class="chuanInputIcon" src="../../assets/images/cargo/chuanhui.png" width="18" height="16"/>
                            <el-input 
                                :placeholder="$t('home.company')"
                                class="inputClass"
                                readonly
                            >
                            </el-input>
                        </div>
                    </div>
                    <div v-if="currentNum == 1" class="dialog_pol">
                        <img src="../../assets/images/track_1.png">
                        <div class="next dialog_pol_next" @click="handleClickUseCourse(2)"></div>
                        <div class="skip dialog_pol_skip" @click="handleClickSkip"></div>
                    </div>

                    <!-- 第二步 -->
                    <div v-if="currentNum == 2" class="dialog_guanwang">
                        <img src="../../assets/images/track_2.png">
                        <div class="next dialog_guanwang_next" @click="handleClickUseCourse(3)"></div>
                        <div class="skip dialog_guanwang_skip" @click="handleClickSkip"></div>
                    </div>
                    <div class="truck_item5" style="opacity:0">
                        <el-button type="primary" round class="btnSearch">{{$t('instanceTranck.track')}}</el-button>
                        <el-button type="primary" round class="btnSearch btnUpload">{{$t('instanceTranck.BulkUpload')}}</el-button>
                    </div>
                </div>
            </div>
            <div v-if="currentNum == 3" class="dialog_top">
                <img src="../../assets/images/cargo/ex_dialog_top.png">
                <div class="next dialog_top_next" @click="handleClickSkip"></div>
            </div>
        </div>
    </div>
</template>
<script>
import Head from "@components/Head";
import HeadHunt from "@components/HeadHunt";
import Tracks from "@components/Tracks";
import Declare from "@components/Declare";
import Footer from "@components/Footer";
export default {
    page: {
        title: "船公司货物跟踪-全球40家集装箱船公司货物跟踪查询",
        meta: [
            {
                name: 'description',
                content: "鲸准船公司货物跟踪可提供全球40多家海运集装箱船公司货物跟踪查询，包括MSC船公司，MSK船公司，COSCO船公司，CMA船公司，HMM船公司,赫伯罗特船公司，中远船公司，WHL船公司，KMTC船公司，OOCL船公司，EMC船公司，SITC船公司,YML船公司等船公司货物跟踪查询状态。"
            },
            {name: 'keywords', content: "船公司货物跟踪，MSC船公司货物跟踪，MSK船公司货物跟踪，COSCO船公司货物跟踪，CMA船公司货物跟踪，HMM船公司货物跟踪，赫伯罗特船公司货物跟踪，中远船公司货物跟踪，WHL船公司货物跟踪，KMTC船公司货物跟踪,OOCL船公司货物跟踪，sitc船公司货物跟踪，EMC船公司货物跟踪,YML船公司货物跟踪"},
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
        HeadHunt,
        Tracks,
        Declare,
        Footer
    },
    methods: {
        //upadHeanH 初始化 跟踪栏的数据
        upadHeanH() {
            if(this.$refs.searchBar){
                this.$refs.Tracks.searchStr  = ''
                this.$refs.searchBar.containerNumber  = ''
                this.$refs.searchBar.billNumber  = ''
                this.$refs.searchBar.carrier = ''
            }
        },
        //子组件调用此方法
        getParentTrack(params) {
            this.$nextTick(function() {
                //由此组件再调用另一个子组件局部刷新页面数据
                if(this.$refs.Tracks){
                    this.$refs.Tracks.getTrackData(params)
                };
            });
        },
        //点击使用教程按钮或者新用户第一次登陆
        handleClickUseCourse(value){
            this.isDialogShow = true
            this.currentNum = value
        },
        //点击'跳过引导'或者'我知道了'
        handleClickSkip(){
            this.isDialogShow = false
            this.currentNum = 1
            this.$refs.Tracks.isShiyong = false
            if(this.userId){ //未登录时才走已经有过使用教程的接口
                this.$Axios.get(this.GLOBAL.url + `schedules/web/updateUserIsShipRead?id=` + this.userId,{
                    headers: {
                        Authorization: this.getToken()
                    },
                }).then(res => {
                    if(res.data.status == 1){
                        this.$refs.head.getUserInfo(this.userId, function(){})
                    }
                }).catch((err)=>{
                    
                })
            }
        },
    },
    mounted() {
        var that = this
        if(this.$route && this.$route.params && this.$route.params.carrier){
            if(this.$refs.searchBar){
                this.$refs.searchBar.containerNumber = this.$route.params.containerNumber
                this.$refs.searchBar.billNumber = this.$route.params.billNumber
                this.$refs.searchBar.carrier = this.$route.params.carrier
            }
            if(this.$refs.Tracks){
                this.$refs.Tracks.getTrackData(this.$route.params)
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