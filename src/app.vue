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
* ::-webkit-scrollbar {
  display: none;
}
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
.login-modal-front {
  z-index: 9999 !important;
  transition: all 0.5s;
  transform: rotateY(0deg);
  transform-style: preserve-3d;
  .el-dialog__body {
    height: 547.97px;
    overflow: auto;
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
    overflow: auto;
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
    goForgetPssword() {},
    // 校验token，不成功就重新获取
    tokenValidor() {
      var that = this;
      var isError = false;
      $.ajax({
        url: that.GLOBAL.url + "auth/user?token=" + that.getToken(),
        type: "GET",
        async: false,
        success: function(data) {
          if (data.status != 1) {
          }
        },
        error: function() {
          isError = true;
        }
      });
      if (isError) {
        var authorization = "";
        $.ajax({
          url:
            that.GLOBAL.url +
            "auth/token?username=webCustomer&password=" +
            that.CryptoJS.SHA256("123456" + that.GLOBAL.salt).toString(),
          type: "GET",
          success: function(data) {
            if (data.status == 1 && data.message == "SUCCESS") {
              authorization = "Bearer " + data.content;
              //保存6小时
              that.setCookie("gateway_token", authorization, 0.25);
              window.location.reload();
            }
          }
        });
      }
    }
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
    var _hmt = _hmt || [];
    (function() {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?31c465cda5ec66376a11ef41ec6a4235";
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(hm, s);
    })();

    $.ajaxSetup({
      complete: function(xhr, status) {
        // 如果不是验证token 的请求出错
        if (status == "error") {
          if (this.url.indexOf("auth/user") == -1) {
            // 验证token
            that.tokenValidor();
          }
        }
      }
    });
  }
};
</script>








