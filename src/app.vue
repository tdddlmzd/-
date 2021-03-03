<!-- This should generally be the only global CSS in the app. -->
<style lang="scss" scoped>
// Allow element/type selectors, because this is global CSS.
// stylelint-disable selector-max-type, selector-class-pattern

// Design variables and utilities from src/design.
// @import '@design';

/*====================reset====================*/
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
font,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
dd,
dl,
dt,
li,
ol,
ul,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td {
  margin: 0;
  padding: 0;
  border: 0;
}
html,
body {
  height: 100%;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}
ol,
ul {
  list-style: none;
}
a {
  text-decoration: none;
}
// * ::-webkit-scrollbar {
//   display: none;
// }
// .container::-webkit-scrollbar {
//   display: none;
// }
// Safari不兼容也不知道这段css是干啥的
// #app :not(.left-bar.side-box) {
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   height: 100%;
// }
@media screen and (max-width: 950px) {
  .type-area {
    width: 50rem;
    height: 100%;
    margin: 0 auto;
  }
}
@media screen and (min-width: 1500px) {
  .type-area {
    width: 75rem;
    height: 100%;
    margin: 0 auto;
  }
}
@media (min-width: 950px) and (max-width: 1500px) {
  .type-area {
    width: 55rem;
    height: 100%;
    margin: 0 auto;
  }
}
</style>

<!-- 静态页css -->
<style lang="scss">
@import "assets/css/iconfont.css";
@import "assets/css/base.css";
@import "assets/css/index.css";
@import "assets/css/list.css";
@import "assets/css/details.css";
@import "assets/css/layout.css";
//下载模板的css
@import "assets/css/app.scss";
@import "assets/css/icons.css";
@import "assets/css/bootstrap.scss";

//登录注册模态框css
.login-modal {
  z-index: 9999 !important;
  transform-style: preserve-3d;
  .el-dialog__body {
    height: 547.97px;
    overflow: auto;
  }
}
.el-dialog__body::-webkit-scrollbar{
  display: none !important;
}
.login-modal-front {
  z-index: 9999 !important;
  transition: all 0.5s;
  transform: rotateY(0deg);
  transform-style: preserve-3d;
  .el-dialog__body {
    height: 547.97px;
    // overflow: auto;
  }
}
.login-modal-back {
  z-index: 9991 !important;
  transition: all 0.5s;
  transform: rotateY(180deg);
  transform-style: preserve-3d;
  .el-dialog__body {
    height: 547.97px;
    overflow: auto;
  }
}
// .login-modal-front{
//   opacity: 1;
//   height:567.97px;
//   transition: all 1s;
//   transform-style: preserve-3d;
//   transform: rotateY(0deg);
// }
.regist-modal {
  z-index: 9999 !important;
  .el-dialog__body {
    height: 547.97px;
    overflow: auto;
  }
}
.regist-modal-front {
  z-index: 9999 !important;
  transform: rotateY(0deg);
  transform-style: preserve-3d;
  transition: all 0.5s;
  .el-dialog__body {
    height: 547.97px;
    // overflow: auto;
  }
}
.regist-modal-back {
  z-index: 9991 !important;
  transform: rotateY(180deg);
  transform-style: preserve-3d;
  transition: all 0.5s;
  .el-dialog__body {
    height: 547.97px;
    overflow: auto;
  }
}
.max-min-height {
  max-height: 522.97px;
  min-height: 522.97px;
  transition: all 0.5s;
}
.el-dialog__wrapper {
  overflow: hidden !important;
}
.el-dialog__headerbtn {
  top: 15px !important;
  z-index: 2;
}
body{
  // overflow: hidden;
  font-family: 'SourceHanSansCN' !important;
}
</style>

<template>
  <div id="app">
    <!--
    Even when routes use the same component, treat them
    as distinct and create the component again.
    -->
    <RouterView :key="$route.fullPath" :ref="$route.fullPath.split('/')[1]+'app'" />
    <div>
      <!-- 登录注册模态框 开始-->
      <el-dialog
        :visible.sync="loginAndRegist"
        :close-on-click-modal="false"
        :close-on-press-escape="false"
        :top="modalHight"
        width="384px"
        :class="loginDialogFormVisible ?'login-modal-front':'login-modal-back'"
        :before-close="beforeLoginClose"
      >
        <Login v-show="!isForget" :class="'max-min-height'"></Login>
        <ForgetPassword v-show="isForget" :class="'max-min-height'"></ForgetPassword>
      </el-dialog>
      <el-dialog
        :visible.sync="loginAndRegist"
        :close-on-click-modal="false"
        :close-on-press-escape="false"
        :top="modalHight"
        width="384px"
        :class="registDialogFormVisible ? 'regist-modal-front':'regist-modal-back'"
        :before-close="beforeRegistClose"
      >
        <Regist :class="'max-min-height'"></Regist>
      </el-dialog>
    </div>
    <!-- 登录注册模态框 结束-->
  </div>
</template>

<script>
import appConfig from "@src/app.config";
import Login from "@components/Login";
import Regist from "@components/Regist";
import ForgetPassword from "@components/ForgetPassword";
import { fips } from "crypto";

export default {
  page: {
    // All subcomponent titles will be injected into this template.
    titleTemplate(title) {
      title = typeof title === "function" ? title(this.$store) : title;
      return title ? `${title} | ${appConfig.title}` : appConfig.title;
    }
  },
  data() {
    return {
      loginAndRegist: false,
      loginDialogFormVisible: false,
      registDialogFormVisible: false,
      isForget: false,
      modalHight: "15vh"
    };
  },
  components: { Login, Regist, ForgetPassword },
  methods: {
    //转到注册面
    turnRegist() {
      this.loginDialogFormVisible = false;
      this.registDialogFormVisible = true;
    },
    //转到登录面
    turnLogin() {
      this.loginDialogFormVisible = true;
      this.registDialogFormVisible = false;
      this.isForget = false;
    },
    // 关闭模态框前执行
    beforeLoginClose(done) {
      this.isForget = false;
      //抓不到css渲染结束事件，这里手动hide，否则点击关闭会再弹出一次
      $(document)
        .find(".el-dialog__wrapper")
        .hide();
      done();
    },
    // 关闭模态框前执行
    beforeRegistClose(done) {
      //抓不到css渲染结束事件，这里手动hide，否则点击关闭会再弹出一次
      $(document)
        .find(".el-dialog__wrapper")
        .hide();
      // $('.fob-header-nav.moveDown').css('padding-right','0px');
      done();
    },
    //切换到忘记密码
    goForgetPssword() {}
  },
  created() {},
  mounted() {
    //浏览器窗口大小兼容处理
    var that = this;
    $(window).resize(function() {
      that.modalHight = (window.innerHeight - 547.97) / 2 + "px";
    });
    $(window).resize();
    // 百度统计
    // var _hmt = _hmt || [];
    // (function() {
    //   var hm = document.createElement("script");
    //   hm.src = "https://hm.baidu.com/hm.js?31c465cda5ec66376a11ef41ec6a4235";
    //   var s = document.getElementsByTagName("script")[0];
    //   s.parentNode.insertBefore(hm, s);
    // })();
    if(this.$route.name == 'Home'){
      let _body = document.getElementsByTagName('body')
      _body[0].style.overflow = "hidden";
    };
    $.ajaxSetup({
      beforeSend: function(xhr){
        xhr.setRequestHeader("Cache-Control", "no-cache, no-store, max-age=0, must-revalidate")
      },
      complete: function(xhr,status){
          if(xhr.status == 401 || xhr.status == 403){
            that.delCookie("currentUser"); //删除用户信息
            that.delCookie("authId"); // 删除用户id
            that.delCookie("userMobile"); //删除用户名
            that.delCookie("password"); // 删除 密码
            that.delCookie("gateway_token"); // 删除 token
            localStorage.removeItem('userMobile'); // 删除用户登录的用户名/手机号
            localStorage.removeItem('language'); // 删除存储的语言
            localStorage.removeItem('detailList')
            localStorage.removeItem("updateUserName");
            localStorage.removeItem("currentUser"); //删除登录用户信息
            localStorage.removeItem("authId"); //删除登录用户信息
            localStorage.removeItem('weChat')
            localStorage.removeItem('vessel_token')
            localStorage.removeItem('truck_token')
          }
          if(that.$route.name == 'Truck' || that.$route.name == 'vesselifream'){ //代表此处是 ifream表单
            if(xhr.status == 401 || xhr.status == 403){
                
            }
          }else{
            if(xhr.status == 401){
              that.$router.push({
                path: '/Login'
              })
            }
            if(xhr.status == 403){
              console.log(xhr.status,'chuanbye')
              // 退出登录使用默认token
              that.getToken()
              // $(".userinfo-link").css("background-color", "inherit");
              $(".dropdown-menu.dropdown-menu-right.profile-dropdown").css(
                "display",
                "none"
              );
              that.$router.push({
                path: '/Login'
              })
            }
            if(xhr.status == 429){
              that.$message({
                message: "您的操作过于频繁，请稍后再试",
                type: "warning",
                customClass: "base-message-zindex"
              });
              that.loading.closeAll(that)
            }
          }
        }
    })
  },
};
</script>








