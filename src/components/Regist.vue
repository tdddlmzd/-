

<style lang="scss" >
.logo-img {
  width: 132px;
  height: 29px;
}
.card{
      border: none !important;
}
.download-template .mt-3, .download-template .my-3 {
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
  .custom-control-label {
    color: #1abc9c;
  }
}
.invalid {
  border-color: #f1556c !important;
  padding-right: calc(1.5em + 0.9rem) !important;
  // background-image: url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23f1556…%3e%3ccircle cy='3' r='.5'/%3e%3ccircle cx='3' cy='3' r='.5'/%3e%3c/svg%3E);
  background-repeat: no-repeat !important;
  background-position: center right calc(0.375em + 0.1875rem) !important;
  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem) !important;
  .custom-control-label {
    color: #f1556c;
  }
}
.custom-control-input.is-valid:checked~.custom-control-label::before, .was-validated .custom-control-input:valid:checked~.custom-control-label::before {
    border-color: #28e1bd;
    background-color: #28e1bd;
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
              <p class="text-muted mb-4 mt-3" style="margin-bottom: 15px !important;">感谢体验我们的产品，欢迎注册！</p>
            </div>

            <b-alert v-model="isRegisterError" variant="danger" dismissible>{{regError}}</b-alert>

            <form @submit.prevent="tryToRegisterIn"  action="return false"  class="registForm parsley-form needs-validation" v-loading="loading" novalidate>

              <div class="form-group">
                <label for="userMobile">
                  手机号码
                  <span style="color:red">*</span>
                </label>
                <input
                  class="form-control"
                  type="text"
                  required
                  id="userMobile"
                  placeholder="请输入手机号码"
                  v-model="userMobile"
                  :class="userMobileClass"
                  maxlength="11"
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
                      class="form-control"
                      type="text"
                      required
                      id="validCode"
                      placeholder="请输入验证码"
                      :class="validCodeClass"
                      v-model="validCode"
                      maxlength="6"
                    />
                    <div class="input-group-append">
                    <button
                      id="sendValidCode"
                      class="btn btn-primary waves-effect waves-light"
                      type="button"
                      @click="sendValidCode"
                      :disabled="msgBtnDisabled"
                    >{{codeButton}}</button>
                  </div>
                  <div
                  class="invalid-feedback"
                  :style="validCodeMsg != '' ?'display:block':'display:none'"
                >{{validCodeMsg}}</div>
                </div>
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

              <div class="form-group">
                <label for="inviteCode">
                  邀请码
                  <span style="color:red">*</span>
                </label>
                <input
                  class="form-control"
                  type="text"
                  required
                  id="inviteCode"
                  placeholder="请输入邀请码"
                  maxlength="11"
                  minlength="11"
                  :class="inviteCodeClass"
                  v-model="inviteCode"
                />
                <div
                  class="invalid-feedback"
                  :style="inviteCodeMsg != '' ?'display:block':'display:none'"
                >{{inviteCodeMsg}}</div>
              </div>

              <div class="form-group" style="margin-bottom:2px" :class="agreeClass">
                <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="checkbox-signup" v-model="agree" />
                  <label for="checkbox-signup" class="custom-control-label">
                    我已阅读并同意
                    <a href="javascript: void(0);" class="text-dark">《 货代助手服务协议 》</a>
                  </label>
                </div>
                <div
                  class="invalid-feedback"
                  :style="agreeMsg != '' ?'display:block':'display:none'"
                >{{agreeMsg}}</div>
              </div>

              <b-form-group id="button-group" class="mt-4" style="margin-top: 0 !important;">
                <b-button type="submit" variant="primary" class="btn-block" @click="regist">注册</b-button>
              </b-form-group>
            </form>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card -->

        <div class="row mt-3" style="margin-top: 0 !important;">
          <div class="col-12 text-center">
            <p class="text-muted">
              有账号?
              <a
                href="javascript:void(0);"
                class="text-primary font-weight-medium ml-1"
                @click="turnPage"
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
export default {
  page: {
    title: "注册",
    meta: [{ name: "注册", content: `注册 ${appConfig.title}` }]
  },
  components: { Layout },
  data() {
    return {
      userMobile: "",
      userMobileClass:"form-control",
      userMobileMsg:"",
      validCode: "",
      validCodeClass:"form-control",
      validCodeMsg:"",
      password: "",
      passwordClass:"form-control",
      passwordMsg:"",
      inviteCode: "",
      inviteCodeClass:"form-control",
      inviteCodeMsg:"",
      regError: null,
      tryingToRegister: false,
      isRegisterError: false,
      loading:false,
      valid: true,
      isValid: false,
      countdown:60,
      codeButton: "发送验证码",
      validCodeHidden: "",
      agree:false,
      agreeMsg:'',
      agreeClass:'form-group',
      msgBtnDisabled:false,
    };
  },
  computed: {},
  methods: {
    ...authMethods,
    // Try to register the user in with the email, fullname
    // and password they provided.
    tryToRegisterIn() {
      // this.tryingToRegister = true;
      // // Reset the regError if it existed.
      // this.regError = null;
      // return this.register({
      //   fullname: this.fullname,
      //   email: this.email,
      //   password: this.password
      // })
      //   .then(token => {
      //     this.tryingToRegister = false;
      //     this.isRegisterError = false;
      //     // Redirect to the originally requested page, or to the confirm-account page
      //     this.$router.push(
      //       this.$route.query.redirectFrom || { name: "confirm-account" }
      //     );
      //   })
      //   .catch(error => {
      //     this.tryingToRegister = false;
      //     this.regError = error.response ? error.response.data.message : "";
      //     this.isRegisterError = true;
      //   });
    },
    //翻面
    turnPage() {
      this.$parent.$parent.turnLogin();
    },
    //重置表单
    resetForm(){
      this.userMobile = "";
      this.userMobileClass ="form-control";
      this.userMobileMsg ="";
      this.validCode = "";
      this.validCodeClass ="form-control";
      this.validCodeMsg ="";
      this.password = "";
      this.passwordClass ="form-control";
      this.passwordMsg ="";
      this.inviteCode = "";
      this.inviteCodeClass ="form-control";
      this.inviteCodeMsg ="";
      this.regError = null;
      this.tryingToRegister = false;
      this.isRegisterError = false;
      this.loading =false;
      this.valid = true;
      this.isValid = false;
      this.countdown =60;
      this.codeButton = "发送验证码";
      this.validCodeHidden = "";
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
            type:0,
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
              that.msgBtnDisabled = true;
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
          that.msgBtnDisabled = false;
      } else {
          val.attr("disabled",true);
          that.codeButton = "重新发送(" + that.countdown + ")";
          that.countdown--;
          setTimeout(function() {
              that.settime(val)
          },1000)
      }
          
    },
    regist(){
      var that = this;
      var params = {
        userMobile: that.userMobile,
        // password:that.CryptoJS.SHA256(that.password + that.GLOBAL.salt).toString(),
        password: that.CryptoJS.MD5(
          that.password + that.GLOBAL.salt
        ).toString(),
        inviteCode: that.inviteCode
      };

      if (this.validForm({userMobile : that.userMobile,validCode:that.validCode, password : that.password,inviteCode:that.inviteCode,agree:that.agree})) {
        this.loading = true;
        $.ajax({
          url: that.GLOBAL.url + "schedules/web/regist",
          type: "POST",
          headers: {
            Authorization: that.getToken()
          },
          data: params,
          success: function(data) {
            if (data.status == 1) {
              that.$message({
                message: "注册成功",
                type: "success",
                customClass:'base-message-zindex'
              });
              setTimeout(function(){
                that.resetForm();
                that.turnPage();
              },1000)
            } else if (data.status == 3) {
              that.$message({
                message: "手机号已注册",
                type: "warning",
                customClass:'base-message-zindex'
              });
            } else if (data.status == 4) {
              that.$message({
                message: "邀请码不正确",
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
      //邀请码
      if(this.validate.isNull(form.inviteCode)){
        this.inviteCodeMsg = "邀请码不能为空";
        this.inviteCodeClass = "form-control invalid";
        this.valid = false;
      }else{
        this.inviteCodeMsg = "";
        this.inviteCodeClass = "form-control valid";
      }
      //阅读协议
      if(!form.agree){
        this.agreeMsg = "请勾选协议";
        this.agreeClass = "form-group invalid";
        this.valid = false;
      }else{
        this.agreeMsg = "";
        this.agreeClass = "form-group valid";
      }
      this.isValid = true;
      return this.valid;
    }
  },
  watch: {
    userMobile(val) {
      if (this.isValid) {
        this.validForm({ userMobile: val, validCode: this.validCode , password: this.password, inviteCode: this.inviteCode,agree:this.agree});
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
        this.validForm({ userMobile: this.userMobile, validCode: val , password: this.password, inviteCode: this.inviteCode,agree:this.agree});
      }
    },
    password(val) {
      if (this.isValid) {
        this.validForm({ userMobile: this.userMobile, validCode: this.validCode , password: val, inviteCode: this.inviteCode,agree:this.agree});
      }
    },
    inviteCode(val) {
      if (this.isValid) {
        this.validForm({ userMobile: this.userMobile, validCode: this.validCode , password: this.password, inviteCode: val,agree:this.agree});
      }
    },
    agree(val){
      if (this.isValid) {
        this.validForm({ userMobile: this.userMobile, validCode: this.validCode , password: this.password, inviteCode: this.inviteCode,agree:val});
      }
    }
  }
};
</script>
