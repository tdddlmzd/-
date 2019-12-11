<style lang="scss">
.logo-img {
  width: 132px;
  height: 29px;
}
.card {
  border: none !important;
}
.valid {
  border-color: #1abc9c !important;
  padding-right: calc(1.5em + 0.9rem) !important;
  // background-image: url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8… 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e);
  background-repeat: no-repeat !important;
  background-position: center right calc(0.375em + 0.1875rem) !important;
  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem) !important;
}
.invalid {
  border-color: #f1556c !important;
  padding-right: calc(1.5em + 0.9rem) !important;
  // background-image: url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23f1556…%3e%3ccircle cy='3' r='.5'/%3e%3ccircle cx='3' cy='3' r='.5'/%3e%3c/svg%3E);
  background-repeat: no-repeat !important;
  background-position: center right calc(0.375em + 0.1875rem) !important;
  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem) !important;
}
</style>
<template>
  <Layout>
    <div class="download-template login-page row justify-content-center">
      <div class>
        <div class="card">
          <div class="card-body">
            <div class="text-center m-auto">
              <a href="/">
                <span>
                  <img class="logo-img" src="@assets/images/logo220190929.png" alt height="22" />
                </span>
              </a>
              <p class="text-muted mb-4 mt-3">感谢体验我们的产品，欢迎登录！</p>
            </div>

            <b-alert v-model="isAuthError" variant="danger" dismissible>{{authError}}</b-alert>

            <form
              @submit.prevent="tryToLogIn"
              style="margin-top:50px;margin-bottom:30px;"
              action="return false"
              class="loginform parsley-form needs-validation"
              novalidate
              v-loading="loading"
            >
              <div class="form-group">
                <label for="userMobile">
                  手机号码
                  <span style="color:red">*</span>
                </label>
                <input
                  type="text"
                  required
                  id="userMobile"
                  placeholder="请输入您的手机号码"
                  v-model="userMobile"
                  maxlength="11"
                  minlength="11"
                  :class="userMobileClass"
                />
                <div
                  class="invalid-feedback"
                  :style="userMobileMsg != ''  ?'display:block':'display:none'"
                >{{userMobileMsg}}</div>
              </div>
              <div class="form-group">
                <label for="password">
                  密码
                  <span style="color:red">*</span>
                </label>
                <input
                  type="password"
                  required
                  id="password"
                  placeholder="请输入密码"
                  v-model="password"
                  maxlength="16"
                  minlength="6"
                  :class="passwordClass"
                />
                <div
                  class="invalid-feedback"
                  :style="passwordMsg != '' ?'display:block':'display:none'"
                >{{passwordMsg}}</div>
              </div>

              <div class="form-group mb-3">
                <div class="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="checkbox-signin"
                    v-model="isRemeber"
                  />
                  <label class="custom-control-label" for="checkbox-signin">记住我</label>
                </div>
              </div>

              <b-form-group id="button-group" class="mt-4">
                <b-button type="submit" variant="primary" class="btn-block" @click="login">登录</b-button>
              </b-form-group>
            </form>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card -->

        <div class="row mt-3">
          <div class="col-12 text-center">
            <p>
              <a href="javascript:void(0);" class="ml-1" @click="goForgetPassword">忘记密码?</a>
            </p>
            <p class="text-muted">
              还没有账号?
              <a
                href="javascript:void(0);"
                class="text-primary font-weight-medium ml-1"
                @click="turnPage"
              >立即注册</a>
            </p>
          </div>
          <!-- end col -->
        </div>
        <!-- end row -->
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->
  </Layout>
</template>

<script>
import Layout from "@layouts/auth";
import { authMethods } from "@state/helpers";
import appConfig from "@src/app.config";
import { setTimeout } from "timers";

export default {
  page: {
    title: "登录",
    meta: [{ name: "登录", content: `登录到 ${appConfig.title}` }]
  },
  components: { Layout },
  data() {
    return {
      userMobile: "",
      password: "",
      isRemeber: "",
      authError: null,
      tryingToLogIn: false,
      isAuthError: false,
      userMobileMsg: "",
      passwordMsg: "",
      userMobileClass: "form-control",
      passwordClass: "form-control",
      valid: true,
      loading: false,
      isValid: false
    };
  },
  computed: {
    placeholders() {
      return process.env.NODE_ENV === "production"
        ? {}
        : {
            username: 'Use "admin" to log in with the mock API',
            password: 'Use "password" to log in with the mock API'
          };
    }
  },
  created() {},
  methods: {
    ...authMethods,
    // Try to log the user in with the username
    // and password they provided.
    //重置表单
    resetForm(){
      this.userMobile = "";
      this.password = "";
      this.isRemeber = "";
      this.authError = null;
      this.tryingToLogIn = false;
      this.isAuthError = false;
      this.userMobileMsg = "";
      this.passwordMsg = "";
      this.userMobileClass = "form-control";
      this.passwordClass = "form-control";
      this.valid = true;
      this.loading = false;
      this.isValid = false;
    },
    tryToLogIn() {
      // this.tryingToLogIn = true;
      // // Reset the authError if it existed.
      // this.authError = null;
      // return this.logIn({
      //   username: this.username,
      //   password: this.password
      // })
      //   .then(token => {
      //     this.tryingToLogIn = false;
      //     this.isAuthError = false;
      //     // Redirect to the originally requested page, or to the home page
      //     this.$router.push(this.$route.query.redirectFrom || { name: "home" });
      //   })
      //   .catch(error => {
      //     this.tryingToLogIn = false;
      //     this.authError = error.response ? error.response.data.message : "";
      //     this.isAuthError = true;
      //   });
    },
    //翻面
    turnPage() {
      this.$parent.$parent.turnRegist();
    },
    //登录
    login() {
      var that = this;
      var params = {
        userMobile: that.userMobile,
        // password:that.CryptoJS.SHA256(that.password + that.GLOBAL.salt).toString(),
        password: that.CryptoJS.MD5(
          that.password + that.GLOBAL.salt
        ).toString(),
        isRemeber: that.isRemeber
      };
      if (this.validForm({userMobile : that.userMobile, password : that.password})) {
        this.loading = true;
        $.ajax({
          url: that.GLOBAL.url + "schedules/web/login",
          type: "POST",
          headers: {
            Authorization: that.getToken()
          },
          data: params,
          success: function(data) {
            if (data.status == 1) {
              if (that.isRemeber) {
                that.setCookie("authId", data.content, 7);
                that.setCookie("userMobile", params.userMobile, 7);
                that.setCookie("password", params.password, 7);
              } else {
                that.setCookie("userMobile", params.userMobile);
                that.setCookie("authId", data.content);
              }
              that.$message({
                message: "登录成功",
                type: "success",
                customClass:'base-message-zindex'
              });
              var currentPath = that.$route.fullPath;
              //改变head绑定的值
              eval("that.$parent.$parent.$refs."+currentPath.split('/')[1]+"app.$refs.head.userId = data.content;")
              eval("that.$parent.$parent.$refs."+currentPath.split('/')[1]+"app.$refs.head.getUserInfo(data.content,function(){});");
              //关闭模态框
              $(document)
                .find(".el-dialog__headerbtn")
                .trigger("click");
              that.resetForm();
              window.location.reload();
            } else if (data.status == 3) {
              that.$message({
                message: "手机号未注册",
                type: "warning",
                customClass:'base-message-zindex'
              });
            } else if (data.status == 4) {
              that.$message({
                message: "账号或密码错误",
                type: "warning",
                customClass:'base-message-zindex'
              });
            } else {
              that.$message({
                message: "登录失败",
                type: "error",
                customClass: "base-message-zindex"
              });
            }
            that.loading = false;
          },
          error: function(e) {
            that.$message({
              message: "服务器异常",
              type: "error",
              customClass: "base-message-zindex"
            });
            that.loading = false;
          }
        });
      }
    },
    //切换到忘记密码
    goForgetPassword(){
      this.$parent.$parent.isForget = true;
    },
    //表单验证
    validForm(form) {
      this.valid = true;
      //手机号
      if (this.validate.isNull(form.userMobile)) {
        this.userMobileMsg = "手机号不能为空";
        this.userMobileClass = "form-control invalid";
        this.valid = false;
      } else {
        if (!this.validate.isPhone(form.userMobile)) {
          this.userMobileMsg = "请输入正确的手机号";
          this.userMobileClass = "form-control invalid";
          this.valid = false;
        } else {
          this.userMobileMsg = "";
          this.userMobileClass = "form-control valid";
        }
      }
      //密码
      if (this.validate.isNull(form.password)) {
        this.passwordMsg = "密码不能为空";
        this.passwordClass = "form-control invalid";
        this.valid = false;
      } else {
        this.passwordMsg = "";
        this.passwordClass = "form-control valid";
      }
      this.isValid = true;
      return this.valid;
    }
  },
  watch: {
    userMobile(val) {
      if (this.isValid) {
        this.validForm({userMobile : val, password : this.password});
      }
    },
    password(val) {
      if (this.isValid) {
        this.validForm({userMobile : this.userMobile, password :val});
      }
    }
  }
};
</script>
