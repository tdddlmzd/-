<style>
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
  margin-top: -7px;
  height: 30px !important;
  width: 30px !important;
}
.userinfo {
  margin-left: 0px !important;
}
.userinfo .pro-user-name {
  color: #fff !important;
  font-size: 16px !important;
}
.download-template .dropdown-menu-right {
  right: auto !important;
}
.userinfo-link {
  height: 50px;
  display: inline-block !important;
  margin-top: -10px;
  line-height: 50px;
  width: 160px;
}
.download-template .profile-dropdown {
  width: 160px;
}
.download-template .my-rounded-circle {
  border-radius: 50% !important;
  background-color: #fff !important;
}
.head-box {
  width: 100%;
  position: relative;
}
.userinfo-link.nav-link.dropdown-toggle.nav-user.mr-0.waves-effect.waves-light{
  height: 59px;
  padding-top: 5px !important;
}
</style>

<template>
  <div class="head-box">
    <div class="fob-header-nav moveDown">
      <div class="wrapper">
        <a href="/">
          <div class="fob-logo"></div>
        </a>
        <div class="fob-top-nav">
          <ul class="menu">
            <li
              :class="(this.$route.fullPath == '/' || this.$route.name == 'List' || this.$route.name == 'Details') ?'active':''"
            >
              <p>
                <a href="/">船期</a>
                <span class="active_line"></span>
              </p>
            </li>
            <!-- <li>
                          <p><a href="/">
                                  跟踪
                              </a>
                              <span class="active_line"></span>
                          </p>
                      </li>
                      <li>
                          <p><a href="/">
                                  API
                              </a>
                              <span class="active_line"></span>
                          </p>
            </li>-->
          </ul>
        </div>
        <div class="m-login">
          <!-- <div class="u-btn  language"><a href="/">CN</a></div> -->
          <div class="u-btn login-btn" v-if="userId == ''">
            <a href="javascript:void(0);" @click="login">登录</a>
          </div>
          <div class="u-btn register join-ates-top" v-if="userId == ''">
            <a href="javascript:void(0);" @click="regist">免费试用</a>
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
                :src="avatarUrl == '' ? require('../assets/images/default_user.jpg'):avatarUrl"
                alt="user-image"
                class="my-rounded-circle"
              />
              <span class="pro-user-name ml-1">
                {{username == '' ? userMobile : username}}
                <i
                  class="mdi mdi-chevron-down"
                  style="float:right"
                ></i>
              </span>
            </a>
            <div
              class="dropdown-menu dropdown-menu-right profile-dropdown"
              x-placement="bottom-end"
              style="position: absolute; will-change: transform; transform: translate3d(-30px, 70px, 0px);"
            >
              <!-- item-->
              <div class="dropdown-header noti-title">
                <h6 class="text-overflow m-0">Welcome !</h6>
              </div>

              <!-- item-->
              <a
                href="javascript:void(0);"
                class="dropdown-item notify-item"
                @click="goUserInfoSetting"
              >
                <i class="remixicon-account-circle-line"></i>
                <span>账户设置</span>
              </a>

              <!-- item-->
              <!-- <a href="javascript:void(0);" class="dropdown-item notify-item">
              <i class="remixicon-settings-3-line"></i>
              <span>退出登录</span>
              </a>-->

              <!-- item-->
              <!-- <a href="javascript:void(0);" class="dropdown-item notify-item">
              <i class="remixicon-wallet-line"></i>
              <span>
                My Wallet
                <span class="badge badge-success float-right">3</span>
              </span>
              </a>-->

              <!-- item-->
              <!-- <a href="javascript:void(0);" class="dropdown-item notify-item">
              <i class="remixicon-lock-line"></i>
              <span>Lock Screen</span>
              </a>-->

              <div class="dropdown-divider"></div>

              <!-- item-->
              <a href="javascript:void(0);" class="dropdown-item notify-item" @click="logout">
                <i class="remixicon-logout-box-line"></i>
                <span>退出登录</span>
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
export default {
  name: "Head",
  // components: { HomeSearch },
  data() {
    return {
      noticeCount: 0,
      userDropDown: false,
      username: "",
      userMobile:'',
      avatarUrl: "",
      activeIndex: "1",
      loginDialogFormVisible: false,
      loginForm: {
        userMobile: "",
        password: "",
        isRember: false
      },
      userId:
        this.getCookie("authId") != null && this.getCookie("authId") != ""
          ? this.getCookie("authId")
          : ""
    };
  },
  computed: {},
  methods: {
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
    //登录
    login() {
      this.$parent.$parent.loginAndRegist = true;
      this.$parent.$parent.registDialogFormVisible = false;
      this.$parent.$parent.loginDialogFormVisible = true;
    },
    //注册
    regist() {
      this.$parent.$parent.loginAndRegist = true;
      this.$parent.$parent.loginDialogFormVisible = false;
      this.$parent.$parent.registDialogFormVisible = true;
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
        $(".userinfo-link").css("background-color", "rgba(255,255,255,.15)");
        $(".dropdown-menu.dropdown-menu-right.profile-dropdown").css(
          "display",
          "block"
        );
        this.userDropDown = true;
      }
    },
    //获取用户信息
    getUserInfo(id, callBack) {
      var that = this;
      $.ajax({
        url: that.GLOBAL.url + "schedules/web/getUserInfo?id=" + id,
        type: "GET",
        headers: {
          Authorization: that.getToken()
        },
        success: function(data) {
          if (data.status == 1) {
            that.userMobile = data.content.userMobile;
            that.username = data.content.username;
            that.avatarUrl = data.content.avatarUrl;
            that.noticeCount =
              data.content.noticeCount == undefined
                ? 0
                : data.content.noticeCount;
            var currentUser = JSON.stringify(data.content);
            // 给header的用户赋值
            that.setCookie("currentUser", currentUser);
            callBack();
          } else {
            that.$message({
              message: "获取用户信息失败",
              type: "error",
              customClass: "base-message-zindex"
            });
          }
        },
        error: function(e) {
          that.$message({
            message: "服务器异常",
            type: "error",
            customClass: "base-message-zindex"
          });
        }
      });
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
      this.delCookie("currentUser");
      this.delCookie("authId");
      this.delCookie("userMobile");
      this.delCookie("password");
      $(".userinfo-link").css("background-color", "inherit");
      $(".dropdown-menu.dropdown-menu-right.profile-dropdown").css(
        "display",
        "none"
      );
      this.userDropDown = false;
      setTimeout(function() {
        var currentPath = that.$route.fullPath;
        if (currentPath == "/mine") {
          that.$router.push({ path: "/" });
        }
        window.location.reload();
      }, 1000);
    }
  },
  created() {
    var that = this;
    // 初始化波纹插件
    Waves.init();

    //获取用户信息
    if (this.userId != "") {
      this.getUserInfo(this.userId, function() {});
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
  mounted() {}
};
</script>
