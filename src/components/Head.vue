<style>
.head_wrapper{
  min-width: 1100px;
  height: 100%;
  margin: 0 3.8%;
}
.download-template .notice-link {
  display: block;
  padding: 0 !important;
}
.download-template .notice-link {
  font-size: 21px;
  color: #fff;
  width: 70px;
  height: 50px;
  margin-top: -10px;
  display: inline-block;
  line-height: 50px;
}
.u-btn.notice-btn.download-template:hover {
  color: #fff !important;
}
.notice-link.nav-link.dropdown-toggle.waves-effect.waves-light:hover {
  color: #fff !important;
}
.userinfo:hover {
  color: #fff !important;
}
.download-template .badge {
  color: #fff;
  position: absolute;
  font-size: 5px;
  margin-left: -10px;
  margin-top: 5px;
}
.notice-btn {
  margin: 0 auto;
  text-align: center;
}
.download-template .userinfo-link {
  display: initial;
}
.download-template .nav-user img {
  margin-top: 10px;
  height: 30px !important;
  width: 30px !important;
}
.userinfo {
  margin-left: 0px !important;
}
.userinfo .pro-user-name {
  flex: 1;
  text-align: center;
  color: #fff !important;
  font-size: 16px !important;
}
.download-template .dropdown-menu-right {
  right: 3% !important;
}
.userinfo-link {
  height: 50px;
  margin-top: -10px;
  line-height: 50px;
}
.download-template .profile-dropdown {
  width: 160px;
}
.download-template .my-rounded-circle {
  padding: 5px;
  border-radius: 50% !important;
  background-color: #fff !important;
}
.download-template .my-img {
  padding: 0;
}
.head-box {
  width: 100%;
  position: relative;
}
.userinfo-link.nav-link.dropdown-toggle.nav-user.mr-0.waves-effect.waves-light{
  display: flex;
  height: 59px;
}
.u-btn .el-dropdown{
  color: #fff;
  font-size: 16px;
  cursor: pointer;
}
.u-btn .task-btn{
  width: 70px;
	height: 26px;
	border-radius: 13px;
  border: solid 1px #ffffff;
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  line-height: 24px;
  text-align: center;
  cursor: pointer;
  position: relative;
  margin-top: 2px;
  margin-right: 32px;
}
.u-btn .task-btn .reddot{
  width: 8px;
	height: 8px;
  background-color: #ff7676;
  border-radius: 50%;
  position: absolute;
  top: 3px;
  right: 8px;
}
.u-btn .consoPage{
  background: #fff;
  color: #072c4c;
}
.menu .downLoad{
  color: #fff;
}
.fob-header-nav .m-login{
  margin-top: 5px !important;
}
.fob-header-nav .menu{
  margin-top: 3px;
}
.logoHomeClick{
  cursor: pointer;
}

.qiehuanSmall{
  position: relative;
  cursor: pointer;
  margin-right: 20px;
}
.qiehuanSmall .newImage{
  position: absolute;
  width: 12px;
  height: 12px;
  left: -20px;
  top: 9px;
}
.qiehuanSmall .dottode{
  display: inline-block;
  width: 7px;
  height: 7px;
  background: #ff7676;
  border-radius: 50%;
  position: absolute;
  right: -5px;
  top: 8px;
}
.qiehuanLarge{
  position: relative;
  cursor: pointer;
  margin-top: 0px;
  margin-right: 20px;
}
.qiehuanLarge .newImage{
  position: absolute;
  width: 12px;
  height: 12px;
  left: -20px;
  top: 9px;
}
.qiehuanLarge .dottode{
  display: inline-block;
  width: 7px;
  height: 7px;
  background: #ff7676;
  border-radius: 50%;
  position: absolute;
  right: -5px;
  top: 8px;
}
.zhong_en{
  width: 24px;
  height: 20px;
  margin-top: 6px;
  margin-right: 32px;
  color: #fff;
  cursor: pointer;
}
.downLoad_img{
  width: 22px;
  height: 19px;
  margin-top: 5px;
  margin-right: 32px;
  cursor: pointer;
}
.api_img{
  width: 28px;
	height: 23px;  
  margin-top: 3px;
  margin-right: 32px;
  cursor: pointer;
}
.reddot{
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #ff7676;
  position: absolute;
  top: 4px;
  right: 12px;
}
</style>
<template>
<!-- 鲸准共用头部组件 -->
  <div class="head-box">
    <div class="fob-header-nav" :class="this.$route.fullPath == '/api' || this.$route.name == 'API' || this.$route.fullPath == '/introduction' || this.$route.name == 'Introduction'? 'newDown' : 'moveDown'">
      <div class="head_wrapper">
        <!-- 头部logo部分 -->
        <div class="fob-logo logoHomeClick" @click="currentFullPath('/','home')"></div>
        <!-- 菜单导航部分 -->
        <div class="fob-top-nav" v-if="userId != '' || (userId == '' && this.$route.fullPath !== '/')">
          <ul class="menu">
            <!-- 船期 -->
            <li
              :class="(this.$route.fullPath == '/' || this.$route.fullPath == '/route/record' || this.$route.name == 'Route' || this.$route.name == 'List' || this.$route.name == 'Details' || this.$route.name == 'ShippingLine') ?'active':''"
            >
              <p @click="currentFullPath('/route/record','schedule')">
                <router-link to="/route/record">
                  {{ $t('home.schedule') }}
                </router-link>
                <span class="active_line"></span>
              </p>
            </li>
            <!-- 船舶定位 -->
            <li
            :class="(this.$route.fullPath == '/vessel' || this.$route.name == 'vessel') ?'active':''"
            >
                <p @click="currentFullPath('/vessel','shipdt')">
                   <router-link to="/vessel">
                      {{ $t('home.shipPlace') }}
                   </router-link>
                  <span class="active_line"></span>
                </p>
            </li>
            <!-- 集卡 -->
            <li
            :class="(this.$route.fullPath == '/truck' || this.$route.name == 'setCards') ?'active':''"
            >
                <p @click="currentFullPath('/truck','truck')">
                   <router-link to="/truck">
                      {{ $t('home.truck') }}
                   </router-link>
                  <span class="active_line"></span>
                </p>
            </li>
            <!-- 上海港区 -->
            <li
            :class="(this.$route.fullPath == '/port-cnsha' || this.$route.name == 'portCnsha') || this.$route.name == 'portCnshaDetail' ?'active':''"
            >
                <p @click="currentFullPath('/port-cnsha','port')">
                   <router-link to="/port-cnsha">
                      {{ $t('home.gangq') }}
                   </router-link>
                  <span class="active_line"></span>
                </p>
            </li>
            <!-- 跟踪 -->
            <li
            :class="(this.$route.fullPath == '/track' || this.$route.name == 'Track') || this.$route.name == 'TrackDetail' ?'active':''"
            >
                <p @click="currentFullPath('/track','track')">
                   <router-link to="/track">
                      {{ $t('home.tracking') }}
                   </router-link>
                  <span class="active_line"></span>
                </p>
            </li>
            <li>
                <p v-if="webClient" @click="handleClickApi" style="color: #fff;cursor: pointer;"> <span>{{ $t('home.apiInterfaceApplication') }}</span> <span class="active_line"></span></p>
                <!-- 客户端API -->
                <p v-if="!webClient" style="color: #fff;cursor: pointer;">
                  <router-link to="/api">
                    {{ $t('home.apiInterfaceApplication') }}
                  </router-link>
                  <span class="active_line"></span>
                </p>
            </li>
          </ul>
        </div>
        <div class="m-login">
          <!-- 右侧版本切换按钮 -->
          <!-- <div class="u-btn qiehuanSmall" @click="qieNewW" v-if="userId == '' && isNew">
            <img src='../assets/images/qiehuan.png' class="newImage"/>
            <a href="javascript:void(0);">{{$t('Beta')}}</a>
            <span class="dottode"></span>
          </div>
          <div class="u-btn qiehuanLarge" @click="qieNewW" v-if="userId !== '' && isNew">
            <img src='../assets/images/qiehuan.png' class="newImage"/>
            <a href="javascript:void(0);">{{$t('Beta')}}</a>
            <span class="dottode"></span>
          </div> -->
          <!-- 下载按钮 -->
          <div class="u-btn">
            <router-link to="/downLoad">
              <img src='../assets/images/downLoad.png' class="downLoad_img"/>
            </router-link>
          </div>
          <div class="u-btn">
            <!-- 网站API -->
            <img  v-if="webClient" src='../assets/images/API.png' @click="handleClickApi" class="api_img"/>
            <!-- 客户端API -->
            <router-link to="/api" v-if="!webClient">
              <img src='../assets/images/API.png' class="api_img"/>
            </router-link>
          </div>
          <!-- 中文切换按钮 -->
          <div class="u-btn">
            <img src='../assets/images/ying.png' class="zhong_en" @click="handleLanguageClick" v-if="nameRevert == 'English'"/>
            <img src='../assets/images/zhong.png' class="zhong_en" @click="handleLanguageClick" v-else/>
          </div>
          <!-- 控制台按钮 -->
          <div class="u-btn" v-if="userId !== ''">
            <router-link to="/console">
              <div class="task-btn" :class="(this.$route.fullPath == '/console' || this.$route.name == 'Console') ?'consoPage':''">
                {{ $t('task.console') }}
                <span class="reddot" v-if="taskNumber"></span>
              </div>
            </router-link>
          </div>
          <!-- 登录按钮 -->
          <div class="u-btn" v-if="userId == ''">
            <a href="javascript:void(0);" @click="login">
              {{ $t('home.login') }}
            </a>
          </div>
          <!-- 未登录状态——免费试用按钮 -->
          <div class="u-btn register join-ates-top" v-if="userId == ''">
            <a href="javascript:void(0);" @click="regist">
              {{ $t('home.freeTrial') }}
            </a>
          </div>
          <!-- <div class="u-btn notice-btn download-template" v-if="userId != ''">
          <a
            class="notice-link nav-link dropdown-toggle waves-effect waves-light"
            data-toggle="dropdown"
            href="javascript:void(0);"
            role="button"
            aria-haspopup="false"
            aria-expanded="false"
            @click="goNoticePage"
          >
            <i class="fe-bell noti-icon"></i>
            <span
              class="badge badge-danger rounded-circle noti-icon-badge"
              v-if="noticeCount>0"
            >{{noticeCount}}</span>
          </a>
          </div>-->
          <!-- 登录状态——用户信息部分 -->
          <div class="u-btn userinfo download-template" v-if="userId != ''">
            <a
              class="userinfo-link nav-link dropdown-toggle nav-user mr-0 waves-effect waves-light"
              data-toggle="dropdown"
              href="javascript:void(0);"
              role="button"
              aria-haspopup="false"
              aria-expanded="false"
              @click="openDropDown"
            >
              <img
                :src="avatarUrl == '' ? require('../assets/images/headpor.png'):avatarUrl"
                :class="avatarUrl == '' ? '' : 'my-img'"
                alt="user-image"
                class="my-rounded-circle"
              />
            </a>
            <!-- 弹出框部分 -->
            <div
              class="dropdown-menu dropdown-menu-right profile-dropdown"
              x-placement="bottom-end"
              style="position: absolute; will-change: transform; transform: translate3d(-30px, 70px, 0px);"
            >
              <!-- item-->
              <div class="dropdown-header noti-title">
                <h6 class="text-overflow m-0">Welcome !</h6>
              </div>

              <!-- item——账号设置 -->
              <a
                href="javascript:void(0);"
                class="dropdown-item notify-item"
                @click="goUserInfoSetting"
              >
                <i class="remixicon-account-circle-line"></i>
                <span>{{ $t('accountSettings.accountSettings')}}</span>
              </a>

              <div class="dropdown-divider"></div>

              <!-- item——退出登录 -->
              <a href="javascript:void(0);" class="dropdown-item notify-item" @click="logout">
                <i class="remixicon-logout-box-line"></i>
                <span>{{ $t('accountSettings.signOut')}}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "@assets/js/waves.js";
import { setTimeout } from "timers";
import { debuglog } from "util";
import { name } from '@/node_modules/_body-parser@1.19.0@body-parser';
export default {
  data() {
    return {
      nameRevert: 'English',
      noticeCount: 0,
      missionCount: 0,//任务数量
      consoleCount: 0,//控制台数量
      userDropDown: false,
      username: "",
      userMobile:'',
      avatarUrl: "",
      activeIndex: "1",
      isNew:false,
      loginDialogFormVisible: false,
      loginForm: {
        userMobile: "",
        password: "",
        isRember: false
      },
      languages: localStorage.getItem('language'),
      languageList : [
        {
          id : 0,
          value : '中文',
        },
        {
          id : 1,
          value : 'English',
        },
      ],
      userId:
        this.getCookie("authId") !== null && this.getCookie("authId") !== "" && this.getCookie("authId") !== undefined
          ? this.getCookie("authId")
          : ""
    };
  },
  computed: {
    taskNumber(){
      return this.missionCount + this.consoleCount
    }
  },
  methods: {
    LogoHomeClick(){
      this.$router.push({
        path: '/'
      })
    },
    //跳转到消息页
    goNoticePage() {
      var that = this;
      setTimeout(function() {
        that.$router.push({
          name: "Notice",
          params: {
            id: that.userId
          }
        });
      }, 1000);
    },
    //跳转到百度推广页jingzhun.link
    handleClickApi(){
      window.open("http://open.ijingzhun.com/"); 
    },
    //语言
    handleLanguageClick(){
      if(this.nameRevert == 'English' && localStorage.getItem('language') == '语言'){
        this.nameRevert = '中文';
        this.lang = "en-US";
        this.$i18n.locale = this.lang; //关键语句
        localStorage.setItem('language','language');
      }else{
        this.nameRevert = 'English';
        this.lang = "zh-CN";
        this.$i18n.locale = this.lang; //关键语句
        localStorage.setItem('language','语言');
      };

      // if (this.nameRevert == 'English' || this.lang === "zh-CN") {
      //   this.nameRevert = 'English';
      //   this.lang = "en-US";
      //   this.$i18n.locale = this.lang; //关键语句
      //   localStorage.setItem('language','language');
      // } else {
      //   this.nameRevert = '中文';
      //   this.lang = "zh-CN";
      //   this.$i18n.locale = this.lang; //关键语句
      //   localStorage.setItem('language','语言');
        
      // };
    },
    //登录
    login() {
      this.$router.push({
        path: '/Login',
      });
      // this.$parent.$parent.loginAndRegist = true;
      // this.$parent.$parent.registDialogFormVisible = false;
      // this.$parent.$parent.loginDialogFormVisible = true;
    },
    //注册
    regist() {
      // this.$parent.$parent.loginAndRegist = true;
      // this.$parent.$parent.loginDialogFormVisible = false;
      // this.$parent.$parent.registDialogFormVisible = true;
      this.$router.push({
        path: '/Regist',
      });
    },
    //切换新版本
    qieNewW(){
      window.open("http://new.ijingzhun.com/",'_self')
    },
    //打开下拉框
    openDropDown() {
      if (this.userDropDown) {
        $(".userinfo-link").css("background-color", "inherit");
        $(".dropdown-menu.dropdown-menu-right.profile-dropdown").css(
          "display",
          "none"
        );
        this.userDropDown = false;
      } else {
        // $(".userinfo-link").css("background-color", "rgba(255,255,255,.15)");
        $(".dropdown-menu.dropdown-menu-right.profile-dropdown").css(
          "display",
          "block"
        );
        this.userDropDown = true;
      }
    },
    //获取用户信息
    getUserInfo(id, callBack) {
      var that = this
      this.$Axios.get(that.GLOBAL.url + "schedules/web/getUserInfo?id=" + id,{
        headers: {
            Authorization: this.getToken()
      },
      }).then(res => {
        if (res.data.status == 1) {
          that.missionCount = res.data.content.missionCount
          that.userMobile = res.data.content.userMobile;
          that.username = res.data.content.username;
          that.avatarUrl = res.data.content.avatarUrl;
          that.noticeCount =
            res.data.content.noticeCount == undefined
              ? 0
              : res.data.content.noticeCount;
          var currentUser = JSON.stringify(res.data.content);
          // 给header的用户赋值
          that.setCookie("currentUser", currentUser);
          localStorage.setItem("weChat",res.data.content.openId)
          localStorage.setItem("updateUserName",res.data.content.username)
          callBack();
        }else if(res.data.status == 9){
          that.logout()
        } else {
          that.$message({
            message: that.$t('messages.userInformation'),
            type: "error",
            customClass: "base-message-zindex"
          });
        }
      }).catch((err)=>{
          
      })
    },
    //获取系统通知未读消息
    getUnreadCount(){
      var that = this
      this.$Axios.get(that.GLOBAL.url + "trace/fore/getUnreadCount?userid=" + that.userId,{
        headers: {
            Authorization: this.getToken()
      },
      }).then(res => {
        if(res.data.status == 1){
            that.consoleCount = res.data.content
        }
      }).catch((err)=>{
          
      })
    },
    //跳转账户设置
    goUserInfoSetting() {
      var that = this;
      $(".userinfo-link").css("background-color", "inherit");
      $(".dropdown-menu.dropdown-menu-right.profile-dropdown").css(
        "display",
        "none"
      );
      that.userDropDown = false;
      setTimeout(function() {
        that.$router.push({
          name: "Mine",
          params: {
            id: that.userId,
            page: "userInfoSetting"
          }
        });
      }, 1000);
    },
    //跳转我的消息
    goMyNotice() {
      return false;
      var that = this;
      setTimeout(function() {
        that.$router.push({
          name: "Mine",
          params: {
            id: that.userId,
            page: "notice"
          }
        });
      }, 1000);
    },
    //退出登录
    logout() {
      var that = this;
      this.delCookie("currentUser"); //删除用户信息
      this.delCookie("authId"); // 删除用户id
      this.delCookie("userMobile"); //删除用户名
      this.delCookie("password"); // 删除 密码
      this.delCookie("gateway_token"); // 删除 token
      localStorage.removeItem('userMobile'); // 删除用户登录的用户名/手机号
      localStorage.removeItem('language'); // 删除存储的语言
      localStorage.removeItem('detailList')
      localStorage.removeItem("updateUserName");
      localStorage.removeItem("currentUser"); //删除登录用户信息
      localStorage.removeItem("authId"); //删除登录用户信息
      localStorage.removeItem('weChat')
      localStorage.removeItem('vessel_token')
      localStorage.removeItem('truck_token')
      // 退出登录使用默认token
      that.getToken();
      $(".userinfo-link").css("background-color", "inherit");
      $(".dropdown-menu.dropdown-menu-right.profile-dropdown").css(
        "display",
        "none"
      );
      this.userDropDown = false;

      that.$router.push({
        path: '/',
      })
    },
    currentFullPath(path,val){
      //点击首页
      if(val == 'home'){
        //看是否是  track.ijingzhun.com
        if(this.urlLocal.indexOf('TRACK') !== -1){
          //登录情况下
          if(this.userId){
            this.$router.push({
              path: '/track',
              name: 'Track',
            });
          }else{ //未登录情况下
            this.$router.push({
              path: '/'
            })
          }
        }else{
          if(this.userId){
            this.$router.push({
              path: '/route/record',
              name: 'Route',
            });
          }else{
            this.$router.push({
              path: '/'
            })
          }
        }
      }else{
        if(!this.userId){
            this.$router.push({
              name: 'Home',
              params:{
                activeName: val,
              }
            })
        }
      }
    },
  },
  created() {
    var that = this;
    //下面的说明cookie过期了 要让用户重新登录
    if(that.getCookie("authId") == null || this.getCookie("authId") == "" || this.getCookie("authId") == undefined){
      this.delCookie("currentUser"); //删除用户信息
      // this.delCookie("authId"); // 删除用户id
      this.delCookie("userMobile"); //删除用户名
      this.delCookie("password"); // 删除 密码
      localStorage.removeItem('userMobile'); // 删除用户登录的用户名/手机号
      // localStorage.removeItem('language'); // 删除存储的语言
      localStorage.removeItem("updateUserName") //登录的用户名 其实也是更新的名字
      localStorage.removeItem("currentUser"); //删除登录用户信息
      localStorage.removeItem("authId"); //删除登录用户信息
    }
    //初始化波纹插件
    Waves.init();
    //获取用户信息
    // if(!that.getCookie('gateway_token')){
    //   this.$router.push({
    //     path: '/Login',
    //   });
    // }
    if(that.getCookie('userMobile')){
      if ((that.getCookie('gateway_token') && this.$route.name == "Home" && this.userId !== "") || localStorage.getItem('Setting') || this.userMobile == '') {
        if (that.GLOBAL.tracksocket == null) {
            that.createsocket()
        }
        this.getUserInfo(this.userId, function() {});
        this.getUnreadCount()
      }
    }

    $(document).on("click", function(e) {
      var e = e || window.event; //浏览器兼容性
      var elem = e.target || e.srcElement;
      while (elem) {
        //循环判断至跟节点，防止点击的是div子元素
        if (
          elem.className &&
          (elem.className ==
            "dropdown-menu dropdown-menu-right profile-dropdown" ||
            elem.className == "u-btn userinfo download-template" ||
            elem.className.indexOf("userinfo-link") != -1)
        ) {
          return;
        }
        elem = elem.parentNode;
      }

      $(".dropdown-menu.dropdown-menu-right.profile-dropdown").css(
        "display",
        "none"
      ); //点击的不是div或其子元素
      that.userDropDown = false;
      $(".userinfo-link").css("background-color", "inherit");
    });
  },
  mounted() {
    //或者当前网址
    if(this.urlLocal.indexOf('WWW') !== -1){
      //说明含有 WWW
      this.isNew = true
    }else{
      //没有WWW
      this.isNew = false
    }

    if(!localStorage.getItem('language')){
      localStorage.setItem('language',"语言");
    }else{
      if(localStorage.getItem('language') == "语言"){
        this.nameRevert = 'English'
      }else{
        this.nameRevert = '中文'
      };
    };
    if(this.userMobile == ''){
      this.userMobile = this.getCookie('userMobile')
    }
    if(localStorage.getItem("updateUserName")){
      this.userMobile = localStorage.getItem("updateUserName");
    }
  }
};
</script>
