<style lang="scss" scoped>
.newwfooter{
  position: absolute;
  bottom: 0;
  left: 0;
  width: 1px;
  height: 121px;
  text-align: center;
  padding-top: 36px;
  font-size: 14px;
  line-height: 30px;
  color: #fff;
}

#Home-search{
  margin-top: 57px;
  background-color: #072c4c;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-x:hidden;
}
  .homeFooterBanner{
    width: 100%;
    height: 65px;
    background-color: #072c4c;
    color: #fff;
    padding-top: 15px;
    .part_one{
      display: flex;
      justify-content: center;
      margin-bottom: 4px;
    }
    .part_two{
      display: flex;
      justify-content: center;
    }
    p{
      padding-right: 10px;
      padding-left: 10px;
      font-size: 12px;
    }
    p.tesp{
      border: 0;
    }  
    p.underline{
      cursor: pointer;
      &:hover{
        text-decoration:underline;
      }
    }  
    .xian_line{
      display: inline-block;
      width: 1px;
      height: 12px;
      background-color: #fff;
      margin-top: 2px;
    }
  }

</style>
<style lang="scss">
  .rout_main_header{
    margin-top: 23px;
    margin-bottom: 5px;
    .rout_main_header_p{
      color: #282828;
      font-size: 14px;
      font-weight: 600;
    }
  }
  .rout_main_ui{
    width: 100%;
    display: flex;
    align-items: center;
    // justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 49px;
    .rout_main_li{
      width: 23.5%;
      height: 77px;
      background-color: #ffffff;
      box-shadow: 0 7px 10px rgba(0,0,0,.05);
      border-radius: 6px;    
      margin-top: 18px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px;
      cursor: pointer;
      margin-right: 2%;
      // margin-right: 45px;
      &:nth-child(4n){
        margin-right: 0px;
      }
      &:hover{
          box-shadow: 0px 0px 10px rgba(0, 0, 0, .1);
      }
      .polPod{
        width: 120px;
        overflow: hidden;
        color: #282828;
        font-size: 14px;
        // font-weight: 600;
        .polPod_p1{
         width: 100%;
          overflow: hidden;
          text-overflow:ellipsis;
          white-space: nowrap;       
        }
        .polPod_p2{
          width: 100%;
          margin-top: 5px;
          overflow: hidden;
          text-overflow:ellipsis;
          white-space: nowrap;       
        }
      }
      .tesAlign{
        text-align: right;
      }
      .rout_image{
        width: 36px;
	      height: 10px;      
      }
      .rout_image_main{
        width: 100%;
	      height: 100%;      
      }
    }
  }
  .searchImage{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    // position: absolute;
    // top: 40%;
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
    .chatu_image{
        width: 515px;
        height: 276px;
    }
  }
</style>
<template>
  <!-- 首页船期，跟踪搜索栏 -->
  <div id="Home-search" class="scrollStyle" :style="userInfo =='' ?  'background-color: #072c4c' : 'background-color: #f2f2f2'" @click="clickHide()">
    <Loading v-if="isLoading && userInfo"></Loading>
    <!-- 登录时的样式显示 -->
    <!-- 头部导航栏 -->
    <HeadLocationNav ref="searchBar" v-if="userInfo"></HeadLocationNav>
    <!-- 中间内容 -->
    <div v-if="userInfo" :style="{height: MainHeight}" style="min-height:712px">
      <!-- 查询记录 -->
      <div class="wrapper"  style="margin:0 3.8%;min-height:35%">
        <div class="rout_main_header">
          <p class="rout_main_header_p" v-show="historyList.length > 0">{{ $t('home.queryLog')}}</p>
        </div>
        <ul class="rout_main_ui">
          <li class="rout_main_li" v-for="(item,index) in historyList" :key="index" @click="histortSearch(item)">
            <div class="polPod">
              <p class="polPod_p1" v-title="item.pol ? item.pol : ''">{{item.pol}}</p>
              <p class="polPod_p2" v-title="item.polCodeName ? item.polCodeName : ''">{{'(' + item.polCodeName + ')'}}</p>
            </div>
            <div class="rout_image">
              <img src="../assets/images/_table/jian_home.png" class="rout_image_main">
            </div>
            <div class="polPod tesAlign">
              <p class="polPod_p1" v-title="item.pod ? item.pod : ''">{{item.pod}}</p>
              <p class="polPod_p2" v-title="item.podCodeName ? item.podCodeName : ''">{{'(' + item.podCodeName + ')'}}</p>
            </div>
          </li>
        </ul>
      </div>
      <!-- 图片 -->
      <div class="searchImage">
        <div class="no_message_tip_bg">
            <p class="no_message_tip">{{ $t('home.checkPort') }}</p>
        </div>
        <img src="../assets/images/_table/chatu.png" class="chatu_image">
      </div>
    </div>
    <!-- 底部 -->
    <div class="homeFooterBanner" style="background-color: #072c4c;">
      <div class="part_one">
        <p @click="handleClickAboutM" class="underline">{{$t('introduction.aboutM')}}</p>
        <span class="xian_line"></span>
        <p @click="handleClickContactUs" class="underline">{{$t('introduction.contactUs')}}</p>
        <span class="xian_line"></span>
        <p>{{$t('home.complaintPhone')}}</p>
        <span class="xian_line"></span>
        <p class="tesp">©2019 - 2020 Whale Calling. All Rights Reserved</p>
        <span class="xian_line"></span>
        <p @click="handleClickBeiAnNum" class="underline">沪ICP备20010868号-1</p>
      </div>
      <div class="part_two">
        <p style="padding-right: 0">{{$t('introduction.apiJiekou')}}</p>
        <p class="underline" @click="contactCustomer()">{{$t('introduction.chuanqiApi')}}</p>
        <p style="padding-left: 0" class="underline" @click="contactCustomer()">{{$t('introduction.chuanbojihuaApi')}}</p>
        <p style="padding-left: 0" class="underline" @click="contactCustomer()">{{$t('introduction.chuanbodingweiApi')}}</p>
        <p style="padding-left: 0" class="underline" @click="contactCustomer()">{{$t('introduction.gangquApi')}}</p>
        <p style="padding-left: 0" class="underline" @click="contactCustomer()">{{$t('introduction.chuangongsiApi')}}</p>
      </div>
    </div>
    <!-- 右侧回顶部 -->
    <div class="newwfooter">
      <div class="go-top" @click="goTop"></div>
      <div class="inline" @click="contactCustomer()"></div>
      <div class="goTop"></div>
    </div>
  </div>
</template>
<script>
import HeadLocationNav from "@components/HeadLocationNav";
import Loading from "@components/loading"
export default {
  components: {
    Loading,
    HeadLocationNav
  },
  data() {
    return {
      currentImage: '',
      isLoading: false,
      dateType: "1",
      userInfo:
          this.getCookie("authId") !== null && this.getCookie("authId") !== "" && this.getCookie("authId") !== undefined
          ? this.getCookie("authId")
          : "",
      minHeight: '',
      heightInner: '',
      heightScreen: '',
      MainHeight:'',
      historyList: [],
    };
  },
  computed: {
    authIdUser(){
      return this.getCookie("authId")
    },
    language(){
      return localStorage.getItem('language');
    }
  },
  methods: {
    getResize(){
      const that = this
      that.heightScreen = document.documentElement.clientHeight
      window.onresize = () => {
          return (() => {
            if($("#podLeftTop")){
              if($('#podLeftTop').offset()){
                that.podLeft = $('#podLeftTop').offset().left
                that.podTop = $('#podLeftTop').offset().top - 5
              }
            }
              that.heightScreen = document.documentElement.clientHeight
          })();
      };
    },
    handleClickAboutM(){
      this.$router.push({
        path: '/Introduction',
      });
    },
    handleClickContactUs(){
      this.$router.push({
        path: '/ContactUs',
      });
    },
    handleClickBeiAnNum(){
      window.open('https://beian.miit.gov.cn/'); 
    },
    goTop() {
      $("#Home-search").animate({ scrollTop: 0 }, 500);
      return false;
    },
    test(e) {
        
    },
    //获取历史查询记录
    getHistory(val){
      var that = this
      this.isLoading = true
      this.$Axios.get(this.GLOBAL.url + "schedules/operLog/getRecordByName?polCityId=1466&userMobile=" + val.userMobile,{
        headers: {
            Authorization: this.getToken()
      },
      }).then(res => {
          if(res.data.status == 1){
              if(res.data.content.length > 0){
                if(res.data.content.length > 9){
                  that.historyList = res.data.content.slice(0,8)
                }else{
                  that.historyList = res.data.content
                }
              }else{
                that.historyList = []
              }
              that.isLoading = false
          }else{
            that.isLoading = false
          }
        }).catch((err)=>{
            
        })
    },
    histortSearch(item){
      var currentDate = new Date()
      var y = currentDate.getFullYear();
      var m = currentDate.getMonth() + 1;
      var d = currentDate.getDate();
      var startTime = y + "-" + m + "-" + d
      var setParamDate = {
        pol: item.pol + '(' + item.polCodeName + ')',
        polId: item.polCode,
        pod: item.pod + '(' + item.podCodeName + ')',
        podId: item.podCode,
        start: startTime,
        dateType: this.dateType,
        t:currentDate.getTime(),
      }

      var paramDate = this.setParams(setParamDate)

      var POLPOD = item.polCode.toLowerCase() + '-' + item.podCode.toLowerCase()
      this.$router.push({
        path: `/route/${POLPOD}/${paramDate}`
      });
    },
    clickHide(){
      if(this.$refs.searchBar){
        if(this.$refs.searchBar.isRouteSelect && this.$refs.searchBar.isMouse){
          this.$refs.searchBar.isRouteSelect = false
        }
      }
    },
  },
  created() {},
  mounted() {
      var that = this
      that.heightScreen = document.documentElement.clientHeight
      console.log(that.heightScreen)
      that.heightInner = that.heightScreen - 150  + 'px'
      that.minHeight = that.heightScreen - 200  + 'px'
      that.MainHeight = that.heightScreen - 227  + 'px'
      window.addEventListener('resize', this.getResize)
      window.addEventListener('scroll', this.handleScroll,true)
      window.addEventListener('beforeunload', e => this.test(e)) //监听用户的刷新
  },
  watch: {
    heightScreen (val) {
        this.heightInner = val - 150  + 'px'
        if(this.historyList > 0){
          this.minHeight = val - 200  + 'px'
        }
    },
    'authIdUser': {
      immediate: true,
      deep: true,
      handler(newVal,oldVal){
        var that = this
        if(newVal){
          if(localStorage.getItem('currentUser')){
            var user = JSON.parse(JSON.parse(localStorage.getItem('currentUser')).value)
            that.getHistory(user)
          }else{
            that.isLoading = true
            that.$Axios.get(that.GLOBAL.url + "schedules/web/getUserInfo?id=" + newVal,{
              headers: {
                  Authorization: that.getToken()
            },
            }).then(res => {
              if(res.data.status == 1){
                that.getHistory(res.data.content)
              }else{
                that.isLoading = false
              }
            }).catch((err)=>{
                
            })
          }
        }else{
          that.isLoading = false
        }
      }
    },
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
  destroyed() {
      window.removeEventListener('beforeunload', e => this.test(e)) //销毁卸载注册的事件
  },

};
</script>