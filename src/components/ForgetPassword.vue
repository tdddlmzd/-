<style lang="scss">
.logo-img {
  width: 132px;
  height: 29px;
}
.card {
  border: none !important;
}
.download-template .mt-3,
.download-template .my-3 {
  margin-top: 0 !important;
}
.download-template .card-body {
  padding-bottom: 0;
}
.el-dialog__body {
  padding: 4px 20px 0 20px !important;
}
.download-template .card-body {
  padding: 0 1.5rem !important;
}
.card {
  margin-bottom: 0 !important;
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
    <div class="download-template row justify-content-center">
      <div class>
        <div class="card">
          <div class="card-body">
            <div class="text-center m-auto">
              <a href="/">
                <span>
                  <img class="logo-img" src="@assets/images/logo220190929.png" alt height="22" />
                </span>
              </a>
              <p
                class="text-muted mb-4 mt-3"
                style="margin-bottom: 15px !important;"
              >输入您的手机号，我们将向您的手机发送验证码来帮您找回密码</p>
            </div>

            <b-alert v-model="isResetError" variant="danger" dismissible>{{error}}</b-alert>

            <b-alert v-model="isSuccess" variant="success" dismissible>{{successMessage}}</b-alert>

            <form
              style="margin-top:50px;margin-bottom:30px;"
              @submit.prevent="tryToReset"
              action="return false"
              class="forgetPasswordform parsley-form needs-validation"
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
                <label for="validCode">
                  验证码
                  <span style="color:red">*</span>
                </label>
                <div class="input-group">
                  <input
                    type="text"
                    required
                    id="validCode"
                    placeholder="请输入验证码"
                    v-model="validCode"
                    maxlength="6"
                    minlength="6"
                    :class="validCodeClass"
                  />
                  <div class="input-group-append">
                    <button
                      id="sendValidCode"
                      class="btn btn-primary waves-effect waves-light"
                      type="button"
                      @click="sendValidCode"
                    >{{codeButton}}</button>
                  </div>
                </div>
                <div
                  class="invalid-feedback"
                  :style="validCodeMsg != '' ?'display:block':'display:none'"
                >{{validCodeMsg}}</div>
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

              <!-- <div class="form-group">
                <label for="repassword">
                  确认密码
                  <span style="color:red">*</span>
                </label>
                <input
                  type="password"
                  required
                  id="repassword"
                  placeholder="请确认密码"
                  v-model="repassword"
                  maxlength="16"
                  minlength="6"
                  :class="repasswordClass"
                />
                <div
                  class="invalid-feedback"
                  :style="repasswordMsg != '' ?'display:block':'display:none'"
                >{{repasswordMsg}}</div>
              </div> -->

              <b-form-group id="button-group" class="mt-4">
                <b-button
                  type="submit"
                  variant="primary"
                  style=""
                  class="btn-block"
                  @click="resetPassword"
                >提交</b-button>
              </b-form-group>
            </form>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card -->

        <div class="row mt-3" style="">
          <div class="col-12 text-center">
            <p class="text-muted">
              有账号?
              <a
                href="javascript:void(0);"
                class="text-primary font-weight-medium ml-1"
                @click="goLoginPage"
              >直接登录</a>
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
import { setTimeout, setInterval } from 'timers';
export default {
  page: {
    title: "忘记密码",
    meta: [{ name: "忘记密码", content: `忘记 ${appConfig.title} 密码` }]
  },
  components: { Layout },
  data() {
    return {
      userMobile: "",
      validCode: "",
      validCodeHidden: "",
      password: "",
      repassword: "",
      authError: null,
      tryingToLogIn: false,
      isAuthError: false,
      userMobileMsg: "",
      validCodeMsg: "",
      passwordMsg: "",
      repasswordMsg: "",
      userMobileClass: "form-control",
      validCodeClass: "form-control",
      passwordClass: "form-control",
      repasswordClass: "form-control",
      valid: true,
      loading: false,
      isValid: false,
      isResetError: false,
      isSuccess: false,
      error: "",
      successMessage: "",
      countdown:60,
      codeButton: "发送验证码",
    };
  },
  computed: {},
  methods: {
    ...authMethods,
    // Try to register the user in with the email, fullname
    // and password they provided.
    tryToReset() {
      // this.tryingToReset = true
      // // Reset the authError if it existed.
      // this.error = null
      // return this.resetPassword({
      //   email: this.email
      // })
      //   .then((data) => {
      //     this.tryingToReset = false
      //     this.isResetError = false
      //     this.isSuccess = true
      //     this.successMessage = data.message
      //   })
      //   .catch((error) => {
      //     this.tryingToReset = false
      //     this.error = error? error.response.data.message: ""
      //     this.isResetError = true
      //     this.isSuccess = false
      //   })
    },
    //重置密码
    resetPassword() {
      var that = this;
      
      ;
      var params = {
        userMobile: that.userMobile,
        // password:that.CryptoJS.SHA256(that.password + that.GLOBAL.salt).toString(),
        password: that.CryptoJS.MD5(
          that.password + that.GLOBAL.salt
        ).toString(),
      };
      if (this.validForm({ 
        userMobile: that.userMobile,
         validCode: that.validCode ,
         password: that.password ,
         repassword: that.repassword ,
         })) {
        this.loading = true;
        $.ajax({
          url: that.GLOBAL.url + "schedules/web/resetPassword",
          type: "POST",
          headers: {
            Authorization: that.getToken()
          },
          data: params,
          success: function(data) {
            if (data.status == 1) {
              that.$message({
                message: "重置成功",
                type: "success",
                customClass:'base-message-zindex'
              });
              //改变head绑定的值
              setTimeout(function(){
                that.resetForm();
                that.goLoginPage();
              },1000)
            } else if (data.status == 3) {
              that.$message({
                message: "手机号未注册",
                type: "warning",
                customClass:'base-message-zindex'
              });
            } else {
              that.$message({
                message: "重置失败",
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
    //重置表单
    resetForm(){
      this.userMobile = "";
      this.validCode =  "";
      this.validCodeHidden =  "";
      this.password = "";
      this.repassword = "";
      this.authError = null;
      this.isAuthError = false;
      this.userMobileMsg = "";
      this.validCodeMsg = "";
      this.passwordMsg = "";
      this.repasswordMsg = "";
      this.userMobileClass = "form-control";
      this.validCodeClass = "form-control";
      this.passwordClass = "form-control";
      this.repasswordClass = "form-control";
      this.valid = true;
      this.loading = false;
      this.isResetError = false;
      this.isSuccess = false;
      this.error = "";
      this.successMessage = "";
      this.countdown = 60;
      this.codeButton = "发送验证码";
      this.isValid = false;
    },
    //切换到登录页
    goLoginPage() {
      this.$parent.$parent.isForget = false;
    },
    //发送验证码
    sendValidCode() {
      var that = this;
      var valid = false;
      //手机号
      if (this.validate.isNull(this.userMobile)) {
        this.userMobileMsg = "手机号不能为空";
        this.userMobileClass = "form-control invalid";
        valid = false;
      } else {
        if (!this.validate.isPhone(this.userMobile)) {
          this.userMobileMsg = "请输入正确的手机号";
          this.userMobileClass = "form-control invalid";
          valid = false;
        } else {
          this.userMobileMsg = "";
          this.userMobileClass = "form-control valid";
          valid = true;
        }
      }
      if (valid) {
        $.ajax({
          url: that.GLOBAL.url + "schedules/web/validCode",
          type: "POST",
          headers: {
            Authorization: that.getToken()
          },
          data: {
            userMobile:that.userMobile,
            type:1,
          },
          success: function(data) {
            if (data.status == 1 && data.content.statusCode == "000000") {
              that.validCodeHidden = data.content.captcha;
              that.$message({
                message: "发送成功",
                type: "success",
                customClass:'base-message-zindex'
              });
              that.settime($('#sendValidCode'));
            } else {
              that.$message({
                message: "发送失败",
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
      }
    },
    //倒计时
    settime(val) {
      var that = this;
      if (that.countdown == 0) {
          val.attr("disabled",false);
          that.codeButton = "发送验证码";
          that.countdown = 60;
      } else {
          val.attr("disabled",true);
          that.codeButton = "重新发送(" + that.countdown + ")";
          that.countdown--;
          setTimeout(function() {
              that.settime(val)
          },1000)
      }
          
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
      //验证码
      if(this.validate.isNull(form.validCode)){
        this.validCodeMsg = "验证码不能为空";
        this.validCodeClass = "form-control invalid";
        this.valid = false;
      }else{
        if(form.validCode != this.validCodeHidden){
          this.validCodeMsg = "验证码错误";
          this.validCodeClass = "form-control invalid";
          this.valid = false;
        }else{
          this.validCodeMsg = "";
          this.validCodeClass = "form-control valid";
        }
      }
      //密码
      if (this.validate.isNull(form.password)) {
        this.passwordMsg = "密码不能为空";
        this.passwordClass = "form-control invalid";
        this.valid = false;
      } else {
        if (!this.validate.isvalidPassword(form.password)) {
          this.passwordMsg = "密码为6-16位，可包含数字、字母、减号、下划线";
          this.passwordClass = "form-control invalid";
          this.valid = false;
        } else {
          this.passwordMsg = "";
          this.passwordClass = "form-control valid";
        }
      }
      // //确认密码
      // if(this.validate.isNull(form.repassword)){
      //   this.repasswordMsg = "确认密码不能为空";
      //   this.repasswordClass = "form-control invalid";
      //   this.valid = false;
      // }else{
      //   if(form.repassword != form.password){
      //   this.repasswordMsg = "两次密码不一致";
      //   this.repasswordClass = "form-control invalid";
      //   this.valid = false;
      // }else{
      //   this.repasswordMsg = "";
      //   this.repasswordClass = "form-control valid";
      //   this.valid = true;
      // }
      // }
      this.isValid = true;
      return this.valid;
    }
  },
  watch: {
    userMobile(val) {
      if (this.isValid) {
        this.validForm({ userMobile: val, validCode: this.validCode , password: this.password, repassword: this.repassword});
      } else {//单独校验手机号
        if (this.validate.isNull(this.userMobile)) {
          this.userMobileMsg = "手机号不能为空";
          this.userMobileClass = "form-control invalid";
        } else {
          if (!this.validate.isPhone(this.userMobile)) {
            this.userMobileMsg = "请输入正确的手机号";
            this.userMobileClass = "form-control invalid";
          } else {
            this.userMobileMsg = "";
            this.userMobileClass = "form-control valid";
          }
        }
      }
    },
    validCode(val) {
      if (this.isValid) {
        this.validForm({ userMobile: this.userMobile, validCode: val , password: this.password, repassword: this.repassword});
      }
    },
    password(val) {
      if (this.isValid) {
        this.validForm({ userMobile: this.userMobile, validCode: this.validCode , password: val, repassword: this.repassword});
      }
    },
    // repassword(val) {
    //   if (this.isValid) {
    //     this.validForm({ userMobile: this.userMobile, validCode: this.validCode , password: this.password, repassword: val});
    //   }
    // }
  }
};
</script>
