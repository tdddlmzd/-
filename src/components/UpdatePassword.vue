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
}
.invalid {
  border-color: #f1556c !important;
  padding-right: calc(1.5em + 0.9rem) !important;
}
.el-dialog__headerbtn .el-dialog__close{
  margin-top: 4px;
  font-size: 18px;
}
.el-dialog__headerbtn .el-dialog__close:hover{
  color: #909399;
}
.download-template .card-body{
  padding: 36px 2px 0;
}
.changePassword{
  font-size: 20px;
  color: #282828;
  line-height: 20px;
  font-weight: bold;
  margin-bottom: 16px;
}
.changePassword_p{
  font-size: 14px;
  color: #282828;
  line-height: 14px;
  margin-bottom: 36px !important;
}
.download-template .btn-block{
  width: 280px !important;
  height: 44px !important;
  background-color: #072c4c !important;
  border: none !important;
  border-radius: 22px !important;
  color: #fff;
  font-size: 14px !important;
}
.download-template .btn-block:hover{
  background-color: #395670 !important;
}
.download-template .form-group{
  margin-bottom: 16px !important;
}
.download-template #button-group{
  margin-top: 40px !important;
}
.download-template .form-group input{
  height: 44px !important;
  border-radius: 4px !important;
  border: 1px solid #dcdfe6 !important;
  color: #282828 !important;
}
.download-template .form-group input:hover{
  border-color: #c0c4cc !important;
}
.download-template .form-group input:focus{
  border-color: #409eff !important;
}
.download-template .form-group input::-webkit-input-placeholder{
    color:#909090;
}
.download-template .form-group input::-moz-placeholder{
    color:#909090;
}
.download-template .form-group input:-moz-placeholder{
    color:#909090;
}
.download-template .form-group input:-ms-input-placeholder{
    color:#909090;
}
#button-group .download-template .btn-primary{
  color: #fff;
  background: #072c4c !important;
  border: 1px solid #072c4c !important;
}
#button-group .download-template .btn-primary:hover{
  color: #fff;
  background: #072c4c !important;
  border: 1px solid #072c4c !important;
}

</style>
<template>
<!-- 账号设置页面——更改密码组件 -->
  <Layout>
    <div class="download-template row justify-content-center">
      <div style="width:100%;">
        <div class="card">
          <div class="card-body">
            <div class="card_title">
              <div class="changePassword">{{$t('changePassword.ChangePassword')}}</div>
              <p class="changePassword_p">{{$t('changePassword.changePassword')}}</p>
            </div>

            <form
              @submit.prevent="tryToUpdatePassword"
              action="return false"
              class="forgetPasswordform parsley-form needs-validation"
              novalidate
              v-loading="loading"
            >
              <!-- 原密码输入框 -->
              <div class="form-group">
                <div class="input-group">
                  <input
                    type="password"
                    required
                    id="oldPassword"
                    :placeholder="$t('changePassword.pleaseOriginalPassword')"
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
              <!-- 新密码输入框 -->
              <div class="form-group">
                <input
                  type="password"
                  required
                  id="password"
                  :placeholder="$t('changePassword.pleasePassword')"
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
              <!-- 确认新密码输入框 -->
              <div class="form-group">
                <input
                  type="password"
                  required
                  id="repassword"
                  :placeholder="$t('changePassword.pleaseConfirmPassword')"
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
              <!-- 保存按钮 -->
              <b-form-group id="button-group" class="mt-4">
                <b-button
                  type="submit"
                  variant="primary"
                  style
                  class="btn-block"
                  @click="updatePassword"
                >{{$t('changePassword.save')}}</b-button>
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
      isSuccess: false
    };
  },
  computed: {},
  methods: {
    ...authMethods,
    tryToUpdatePassword() {
    },
    //重置密码
    updatePassword() {
      var that = this
      if (this.validForm({
          oldPassword: that.oldPassword,
          password: that.password,
          repassword: that.repassword
      })) {
        this.loading = true
        var fd = new FormData()
        fd.append('userMobile', that.getCookie("userMobile"))
        fd.append('oldPassword', that.oldPassword)
        fd.append('password', that.password)
        that.$Axios.post(that.GLOBAL.url + "schedules/web/updatePassword",fd,{
          headers: {
              Authorization: that.getToken(),
        },
        }).then(res => {
          if (res.data.status == 1) {
            that.$message({
              message: that.$t('messages.successfullyModified'),
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
          } else if(res.data.status == 3){
            that.$message({
              message: that.$t('messages.passwordIncorrect'),
              type: "warning",
              customClass:'base-message-zindex'
            });
          }else {
            that.$message({
              message: that.$t('messages.failEdit'),
              type: "error",
              customClass: "base-message-zindex"
            });
          }
          that.loading = false;
        }).catch((err)=>{
            that.$message({
              message: that.$t('messages.erverException'),
              type: "error",
              customClass: "base-message-zindex"
            });
            that.loading = false
            
        })
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
