<style lang="scss">
    .datain{
        position: relative;
        width: 100%;
    }
    .datain .datain-banner{
        height: 532px;
        background-image: url('../assets/images/newbanner.png');
        background-position: center 0px;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .datain .datain-banner .buttons{
        position: absolute;
        top: 400px;
        width: 100%;
        text-align: center;
        z-index: 100;
        color: #282828;
    }
    .datain .datain-banner .searchBtn {
        min-width: 152px;
        height: 48px;
        background-color: #fff;
        border-radius: 24px;
        color: #282828;
        font-size: 20px;
        border: none;
    }
    .datain .datain-banner .searchBtn:hover{
        background-color: #ccc;
    }
    .datain .pointinfor{
        width: 100%;
        display: flex;
        justify-content: center;
        margin: auto;
    }
    .datain .pointinfor ul{
        width: 940px;
        display: flex;
        justify-content: space-between;
        padding: 45px 0 88px 0;
    }
    .datain .pointinfor ul li{
        text-align: center;
        cursor: pointer;
        height: 129px;
    }
    .datain .pointinfor ul li.teli{
        margin-left: 15px;
    }
    .datain .pointinfor ul li .pdata{
        font-size: 16px;
        color: #282828;
    }
    .datain .pointinfor ul li .line{
        display: inline-block;
        width: 46px;
        height: 2px;
    }
    .datain .pointinfor ul li .blend-line{
        background-image: linear-gradient(#282828, #282828), 
        linear-gradient(#282828, #282828);
        background-blend-mode: normal, normal;
    }
    .datamain{
        width: 100%;
        position: relative;
        height: 394px;
        margin-bottom: 66px;
    }
    .tsdatmain{
        margin-bottom: 0 !important;
    }
    .tsdatmain{
        height: 600px !important;
    }
    .datamain .flexmain{
        width: 1100px;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 0;
    }
    .datamain h2{
        text-align: center;
        font-size: 36px;
        color: #282828;
    }
    .datamain .datamm{
        width: 100%;
        display: flex;
        margin-top: 66px;
        justify-content: space-between;
    }
    .datamain .datamm li{
        box-shadow: 0px 3px 10px 0px#e7eaf0;
        width: 338px;
    }
    .datamain .datamm .backgro {
        width: 100%;
        height: 155px;
        background-position: center 0px;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .hxcq{
        background-image: url('../assets/images/datainfor/s-hxcq.png');
    }
    .cbcq{
        background-image: url('../assets/images/datainfor/s-cbcq.png');
    }
    .lszdl{
        background-image: url('../assets/images/datainfor/s-lszdl.png');
    }
    .macbji{
        background-image: url('../assets/images/datainfor/s-mtjh.png');
    }
    .mtxhgz{
        background-image: url('../assets/images/datainfor/s-mtxhgz.png');
    }
    .cgsxhgz{
        background-image: url('../assets/images/datainfor/s-xhgz.png');
    }
    .datamain .datamm .titlemain{
        width: 100%;
        height: 128px;
        background: #fff;
        .p1{
            font-family: SourceHanSansCN-Regular;
            color: #282828;
            font-size: 20px;
            padding-top: 28px;
            padding-left: 28px;
            padding-bottom: 10px;
            padding-right: 30px;
        }
        .p2{
            font-family: SourceHanSansCN-Regular;
            color: #a8a8a8;
            font-size: 14px;
            line-height: 20px;
            padding-left: 28px;
            padding-right: 30px;
        }
    }
    .datamain .xhgz{
        width: 100%;
        display: flex;
        height: 390px;
        margin-top: 66px;
        flex-direction: column;
        align-items: center;
        box-shadow: 0px 3px 10px 0px#e7eaf0;
    }
    .datamain .xhgz .dtsxh{
        width: 100%;
        height: 267px;
        background-position: center 0px;
        background-repeat: no-repeat;
        background-size: cover;
        background-image: url('../assets/images/datainfor/dtsxhgz.png');
    }
    .datamain .xhgz .tidah{
        width: 100%;
        height: 123px;
        padding: 52px 0 54px 0;
        text-align: center;
        color: #a8a8a8;
        background: #fff;
        font-size: 14px;
    }
    .datain .shucfoo{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 405px;
        background: #0a3052;
        .shujh{
            font-size: 41px;
            font-family: SourceHanSansCN-Regular;
            color: #fff;
            padding: 120px 50px 71px 50px;
        }
        .buttons{
            color: #282828;
            height: 54px;
            background: #fff;;
            border-radius: 27px;
            color: #282828;
            font-size: 20px;
            border: none;
            cursor:pointer;
            display: flex;
            align-items: center;
            padding: 0 36px;
            .img{
                margin-right: 13px;
            }
            &:hover{
                background-color: #ccc;
            }
        }       
    }
    .datain-bannerHeader{
        color: #fff;
        text-align: center;
        position: absolute;
        top: 190px;
        width: 100%;
        .whaleCallingDataApiService{
            font-size: 42px;
        }
        .makshipping{
            font-size: 26px;
            margin-top: 50px;
        }
    }
</style>
<template>
    <!-- 鲸准API页面 -->
    <div class="datain">
        <!-- 在线申请部分 -->
        <div class="datain-banner">
            <div class="datain-bannerHeader">
                <p class="whaleCallingDataApiService">{{$t('apis.whaleCallingDataApiService')}}</p>
                <p class="makshipping">{{$t('apis.makshipping')}}</p>
            </div>
            <div class="buttons">
                <el-button round class="searchBtn" @click="contactCustomer()">{{ $t('apis.onlineApplication') }}</el-button>
            </div>
        </div>
        <!-- 船期，箱货，地图导航部分 -->
        <div class="pointinfor">
            <ul>
                <li @click="anchor(1,'a01')">
                        <img src="../assets/images/datainfor/icon_chuanqi.png">
                        <p class="pdata">{{ $t('apis.shipSchedule') }}</p>
                        <span class="line blend-line"></span>
                </li>
                <li @click="anchor(2,'a02')" class="teli">
                        <img src="../assets/images/datainfor/icon_xianghuo.png">
                        <p class="pdata">{{ $t('apis.containerTracking') }}</p>
                        <span class="line"></span>
                </li>
                <li @click="anchor(3,'a03')">
                        <img src="../assets/images/datainfor/icon_ditu.png">
                        <p class="pdata">{{ $t('apis.mapVisualization') }}</p>
                        <span class="line"></span>
                </li>
            </ul>
        </div>
        <!-- 船期数据部分 -->
        <div class="datamain" id="a01">
            <div class="flexmain">
                <h2>{{ $t('apis.shipSchedule') }}</h2>
                <ul class="datamm">
                    <li>
                        <div class="backgro hxcq"></div>
                        <div class="titlemain">
                            <p class="p1">{{ $t('apis.routeSchedule') }}</p>
                            <p class="p2">{{ $t('apis.queryDestination') }}</p>
                        </div>
                    </li>
                    <li>
                        <div class="backgro cbcq"></div>
                        <div class="titlemain">
                            <p class="p1">{{ $t('apis.vesselSchedule') }}</p>
                            <p class="p2">{{ $t('apis.queryName') }}</p>
                        </div>
                    </li>
                    <li>
                        <div class="backgro lszdl"></div>
                        <div class="titlemain">
                            <p class="p1">{{ $t('apis.historicalPunctuality') }}</p>
                            <p class="p2">{{ $t('apis.pressDays') }}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 箱货跟踪部分 -->
        <div class="datamain" id="a02">
            <div class="flexmain">
                <h2>{{ $t('apis.containerTracking') }}</h2>
                <ul class="datamm">
                    <li>
                        <div class="backgro macbji"></div>
                        <div class="titlemain">
                            <p class="p1">{{ $t('apis.terminalShipPlan') }}</p>
                            <p class="p2">{{ $t('apis.checkNumber') }}</p>
                        </div>
                    </li>
                    <li>
                        <div class="backgro mtxhgz"></div>
                        <div class="titlemain">
                            <p class="p1">{{ $t('apis.terminalContainerTracking') }}</p>
                            <p class="p2">{{ $t('apis.pressTerminal') }}</p>
                        </div>
                    </li>
                    <li>
                        <div class="backgro cgsxhgz"></div>
                        <div class="titlemain">
                            <p class="p1">{{ $t('apis.carrierContainerTracking') }}</p>
                            <p class="p2">{{ $t('apis.searchContainer') }}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 地图式箱货追踪部分 -->
        <div class="datamain tsdatmain" id="a03">
            <div class="flexmain">
                <h2>{{ $t('apis.mapVisualization') }}</h2>
                <div class="xhgz">
                    <div class="dtsxh"></div>
                    <p class="tidah">{{ $t('apis.accordingVoyage') }}</p>
                </div>
            </div>
        </div>
        <!-- 在线咨询部分 -->
        <div class="shucfoo">
            <div class="shujh">{{ $t('download.professional') }}</div>
            <div class="buttons" @click="contactCustomer()">
                <img src="../assets/images/datainfor/smallkefu.png" class="img">
                <span>{{ $t('apis.onlineConsultation') }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
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
    },
  },
  methods: {
      anchor(index,togo) {
          var that = this
            $(".pointinfor .line").removeClass("blend-line");
            $(".pointinfor .line")
                .eq(index-1)
                .addClass("blend-line");
            $('body,html').animate(
                {scrollTop: $(`#` + togo).offset().top - 100}, 500);
        },
  },
  created() {},
  mounted() {}
};
</script>
