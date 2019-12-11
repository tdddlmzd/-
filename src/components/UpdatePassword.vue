<style lang="scss">
.logo-img {
  width: 132px;
  height: 29px;
}
.card {
  border: none !important;
}
.download-template .mt-3,
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
      <div style="width:100%;">
        <div class="card">
          <div class="card-body">
            <div class="text-center m-auto">
              <a href="/">
                <span>
                  <img class="logo-img" src="@assets/images/logo220190929.png" alt height="22" />
                </span>
              </a>
              <p class="text-muted mb-4 mt-3" style="margin-bottom: 15px !important;">验证您的原密码来修改密码</p>
            </div>

            <b-alert v-model="isResetError" variant="danger" dismissible>{{error}}</b-alert>

            <b-alert v-model="isSuccess" variant="success" dismissible>{{successMessage}}</b-alert>

            <form
              style="margin-top:50px;margin-bottom:30px;"
              @submit.prevent="tryToUpdatePassword"
              action="return false"
              class="forgetPasswordform parsley-form needs-validation"
              novalidate
              v-loading="loading"
            >
              <div class="form-group">
                <label for="oldPassword">
                  原密码
                  <span style="color:red">*</span>
                </label>
                <div class="input-group">
                  <input
                    type="password"
                    required
                    id="oldPassword"
                    placeholder="请输入原密码"
                    v-model="oldPassword"
                    maxlength="16"
                    minlength="6"
                    :class="oldPasswordClass"
                  />
                </div>
                <div
                  class="invalid-feedback"
                  :style="oldPasswordMsg != '' ?'display:block':'display:none'"
                >{{oldPasswordMsg}}</div>
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
              </div>

              <b-form-group id="button-group" class="mt-4">
                <b-button
                  type="submit"
                  variant="primary"
                  style
                  class="btn-block"
                  @click="updatePassword"
                >保存</b-button>
              </b-form-group>
            </form>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card -->
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
import { setTimeout, setInterval } from "timers";
export default {
  page: {
    title: "修改密码",
    meta: [{ name: "修改密码", content: `修改 ${appConfig.title} 密码` }]
  },
  components: { Layout },
  data() {
    return {
      oldPassword: "",
      oldPasswordHidden: "",
      password: "",
      repassword: "",
      authError: null,
      tryingToLogIn: false,
      isAuthError: false,
      oldPasswordMsg: "",
      passwordMsg: "",
      repasswordMsg: "",
      oldPasswordClass: "form-control",
      passwordClass: "form-control",
      repasswordClass: "form-control",
      valid: true,
      loading: false,
      isValid: false,
      isResetError: false,
      isSuccess: false,
      error: "",
      successMessage: ""
    };
  },
  computed: {},
  methods: {
    ...authMethods,
    // Try to register the user in with the email, fullname
    // and password they provided.
    tryToUpdatePassword() {
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
    updatePassword() {
      var that = this;
      var params = {
        userMobile: that.getCookie("userMobile"),
        oldPassword: that.CryptoJS.MD5(
          that.oldPassword + that.GLOBAL.salt
        ).toString(),
        // password:that.CryptoJS.SHA256(that.password + that.GLOBAL.salt).toString(),
        password: that.CryptoJS.MD5(that.password + that.GLOBAL.salt).toString()
      };
      if (this.validForm({
        oldPassword: that.oldPassword,
        password: that.password,
        repassword: that.repassword
      })) {
        this.loading = true;
        $.ajax({
          url: that.GLOBAL.url + "schedules/web/updatePassword",
          type: "POST",
          headers: {
            Authorization: that.getToken()
          },
          data: params,
          success: function(data) {
            if (data.status == 1) {
              that.$message({
                message: "修改成功",
                type: "success",
                customClass:'base-message-zindex'
              });
              //改变head绑定的值
              setTimeout(function() {
                that.resetForm();
                $(document)
                  .find(".el-dialog__headerbtn")
                  .trigger("click");
              }, 1000);
            } else if(data.status == 3){
              that.$message({
                message: "原密码不正确",
                type: "warning",
                customClass:'base-message-zindex'
              });
            }else {
              that.$message({
                message: "修改失败",
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
    resetForm() {
      this.oldPassword = "";
      this.password = "";
      this.repassword = "";
      this.authError = null;
      this.isAuthError = false;
      this.oldPasswordMsg = "";
      this.passwordMsg = "";
      this.repasswordMsg = "";
      this.oldPasswordClass = "form-control";
      this.passwordClass = "form-control";
      this.repasswordClass = "form-control";
      this.valid = true;
      this.loading = false;
      this.isResetError = false;
      this.isSuccess = false;
      this.error = "";
      this.successMessage = "";
      this.isValid = false;
    },
    //表单验证
    validForm(form) {
      this.valid = true;
      //原密码
      if (this.validate.isNull(form.oldPassword)) {
        this.oldPasswordMsg = "原密码不能为空";
        this.oldPasswordClass = "form-control invalid";
        this.valid = false;
      } else {
        this.oldPasswordMsg = "";
        this.oldPasswordClass = "form-control valid";
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
      //确认密码
      if (this.validate.isNull(form.repassword)) {
        this.repasswordMsg = "确认密码不能为空";
        this.repasswordClass = "form-control invalid";
        this.valid = false;
      } else {
        if (form.repassword != form.password) {
          this.repasswordMsg = "两次密码不一致";
          this.repasswordClass = "form-control invalid";
          this.valid = false;
        } else {
          this.repasswordMsg = "";
          this.repasswordClass = "form-control valid";
        }
      }
      this.isValid = true;
      return this.valid;
    }
  },
  watch: {
    oldPassword(val) {
      if (this.isValid) {
        this.validForm({
          oldPassword: val,
          password: this.password,
          repassword: this.repassword
        });
      }
    },
    password(val) {
      if (this.isValid) {
        this.validForm({
          oldPassword: this.oldPassword,
          password: val,
          repassword: this.repassword
        });
      }
    },
    repassword(val) {
      if (this.isValid) {
        this.validForm({
          oldPassword: this.oldPassword,
          password: this.password,
          repassword: val
        });
      }
    }
  }
};
</script>
