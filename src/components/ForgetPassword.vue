<style lang="scss">
.forgetPasswords{
  background-color: #fff;
  overflow: hidden;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  .el-carousel__arrow{
    border: none;
    outline: none;
    padding: 0;
    margin: 0;
    height: 36px;
    width: 36px;
    cursor: pointer;
    transition: .3s;
    border-radius: 50%;
    background-color: rgba(31,45,61,.11);
    color: #fff;
    position: absolute;
    top: 50%;
    z-index: 10;
    transform: translateY(-50%);
    text-align: center;
    font-size: 12px !important;
    .el-icon-arrow-right,.el-icon-arrow-left{
      color: #fff !important;
      font-size: 12px !important;
    }
  }
  .el-carousel__indicator{
    .el-carousel__button{
      width: 32px;
      height: 6px;
      background-color: #f2f2f2;
      border-radius: 10px;
      display: inline-block;
    }
  }
  .el-carousel{
    width: 407px;
    overflow: hidden;
  }
  .el-carousel__container{
    height: 400px;
  }
  .autoContent{
    width: 948px;
    margin: 0 auto;
  }
  .loginLeftTop{
    width: 100%;
    padding: 31px 0 0 43px;
    margin-bottom: 181px;
    .jingzhunImg{
      display: inline-block;
      height: 24px;
      vertical-align: middle;
      margin-right: 20px;
    }
    .backHome{
      width: 105px;
      height: 30px;
      line-height: 30px;
      padding: 0 10px 0 5px;
      display: inline-block;
      vertical-align: middle;
      background-color: #072c4c;
      color: #fff;
      font-size: 12px;
      text-align: center;
      border-radius: 20px;
      cursor: pointer;
      .el-icon-arrow-left{
        font-size: 12px !important;
      }
    }
    .backHome:hover{
      background: #395670;
    }
  }
  .carousels{
    display: inline-block;
    vertical-align: middle;
    .carouselsHeader{
      width: 100%;
      font-size: 26px;
      color: #282828;
      text-align: center;
      margin-bottom: 46px;
      margin-left: 22px;
    }
  }
  .formItemBorder{
    border: 1px solid #f2f2f2;
    border-radius: 4px;
    width: 100%;
    height: 44px;
    line-height: 44px;
    .el-form-item__error{
      top: 36px;
      left: -65px;
    }
  }
  .formItemInline{
    display: inline-block;
  }
  .formCenterLine{
    display: inline-block;
    width: 2px;
    height: 16px;
    background-color: #f2f2f2;
    vertical-align: text-bottom;
  }
  .formContent{
    min-height: 500px;
    width: 366px;
    margin-left: 175px;
    padding: 23px 22px 24px 22px;
    display: inline-block;
    border-radius: 6px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, .1);
    position: relative;
    vertical-align: middle;
    .loginHome{
      width: 100%;
      height: 16px;
      line-height: 16px;
      .backUp{
        display: inline-block;
        color: #909090;
        float: left;
        font-size: 12px;
        cursor: pointer;
        .el-icon-arrow-left {
          font-size: 12px !important;
        }
      }
      img{
        float: right;
        cursor: pointer;
      }
    }
    .loginOrPassWorld{
      margin-top: 26px;
      color: #282828;
      p:nth-of-type(1){
        font-size: 20px;
        height: 20px;
        line-height: 20px;
        font-weight: bold;
      }
      p:nth-of-type(2){
        font-size: 14px;
        height: 14px;
        line-height: 14px;
        margin-top: 17px;
      }
    }
    .demo-ruleForm{
      margin-top: 20px;
      .el-input--mini{
        font-size: 14px;
      }
      .el-input--mini .el-input__inner{
        line-height: 44px;
        border: none;
        color: #282828;
      }
      .el-input--mini .el-input__inner::-webkit-input-placeholder{
        color: #909090;
      }
      .formInput{
        width: 255px;
      }
      .el-select{
        width: 63px;
      }
      .formItemVerificationCode{
        width: 42px;
        height: 42px;
        display: inline-block;
        margin-right: 14px;
        border: 1px solid #f2f2f2;
        background: #f2f2f2;
        border-radius: 2px;
        overflow: hidden;
        .el-form-item__content{
          font-size: 22px;
          height: 100%;
          line-height: 22px;
          .el-input--mini{
            font-size: 22px;
            height: 100%;
            line-height: 22px;
          }
          .el-input--mini .el-input__inner{
            height: 100%;
            background: #f2f2f2;
            line-height: 22px;
            text-align: center;
          }
        }
      }
      .formItemVerificationCode:nth-of-type(6){
        margin-right: 0px !important;
      }
      .formItemVerificationCodeDownTimeOut{
        font-size: 12px;
        color: #a8a8a8;
        padding: 0;
      }
    }
    .demo-ruleForms{
      margin-top: 40px;
      .el-input--mini .el-input__inner{
        height: 44px;
        line-height: 44px;
        border-radius: 4px;
      }
      .el-input__suffix{
        line-height: 44px;
        cursor: pointer;
      }
    }
    .formDownContent{
      width: 100%;
      height: 16px;
      line-height: 16px;
      padding: 0 11px 0 11px;
      p{
        font-size: 14px;
        color: #a8a8a8;
        cursor: pointer;
      }
      .phoneLogin{
        float: left;
      }
      .forgetPassword{
        float: right;
      }
    }
    .loginButton{
      position: absolute;
      bottom: 47px;
      width: 322px;
      .el-button{
        width: 100%;
        height: 44px;
        background-color: #072c4c;
        border-color: #072c4c;
      }
      .el-button:hover{
        background: #395670;
      }
    }
    .loginRegist{
      position: absolute;
      width: 322px;
      bottom: 24px;
      margin-top: 12px;
      font-size: 12px;
      text-align: center;
      .loginNoUser{
        display: inline-block;
        color: #a8a8a8;
      }
      .nowRegist{
        display: inline-block;
        color: #072c4c;
        cursor: pointer;
        margin-left: 5px;
      }
    }
  }
}
</style>
<template>
<!-- 忘记密码页面 -->
<div class="forgetPasswords">
  <!-- 右上角logo，返回首页按钮 -->
  <div class="loginLeftTop">
    <p class="jingzhunImg">
      <img src="../assets/images/login/loginLogo.png">
    </p>
    <p class="backHome" @click="backHome">
      <i class="el-icon-arrow-left"></i>
      <span>
        {{ $t('login.back') }}
      </span>
    </p>
  </div>

  <div class="autoContent">
    <!-- 左侧轮播部分 -->
    <div class="carousels">
      <el-carousel>
        <el-carousel-item v-for="item in imgList" :key="item.index">
          <p class="carouselsHeader">{{ $t('home.MakesFreight') }}</p>
          <img :src="item.imgs">
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 右侧主体部分 -->
    <div class="formContent">
      <!-- 输入手机号获取验证码部分 -->
      <div v-if="registered">
        <!-- 上一页，返回首页 -->
        <div class="loginHome">
          <p class="backUp" @click="registeredPreviousClick">
            <i class="el-icon-arrow-left"></i>
            <span>
              {{ $t('login.previous') }}
            </span>
          </p>
          <img src="../assets/images/login/home.png" @click="backHome">
        </div>
        <!-- 输入手机号部分 -->
        <div class="loginOrPassWorld">
            <p>
              {{ $t('changePassword.resetPassword') }}
            </p>
            <p>
              {{ $t('changePassword.mobileNumber') }}
            </p>
        </div>
        <el-form
          :model="ruleForm"
          ref="ruleForm"
          label-width="100px"
          label-position="top"
          size="mini"
          class="demo-ruleForm"
        >
          <div class="formItemBorder">
            <el-form-item
              prop="areaCode"
              class="formItemInline"
            >
              <el-select v-model="areaCode">
                <el-option
                  v-for="item in areaCodeList"
                  :key="item.code"
                  :label="item.codeNum"
                  :value="item.code">
                </el-option>
              </el-select>
            </el-form-item>
            <span class="formCenterLine">
            </span> 
            <el-form-item
              prop="userMobile"
              :rules="[{ required: true, message: $t('changePassword.mobileNumber'), trigger: 'blur'},{pattern: /^(0|86|17951)?(1[3-9][0-9])[0-9]{8}$/, message: $t('changePassword.validPhoneNumber'),trigger: 'blur'}]"
              class="formItemInline formInput"
            >
              <el-input 
                v-model="ruleForm.userMobile" 
                clearable 
                :placeholder="$t('changePassword.mobileNumber')" 
                maxlength="11" 
                minlength="11"
              >
              </el-input>
            </el-form-item>
          </div>
        </el-form>
        <!-- 获取验证码 -->
        <div class="loginButton">
            <el-button type="primary" round @click="sendValidCode" :disabled="msgBtnDisabled">获取验证码</el-button>
        </div>
      </div>
      <!-- 输入验证码部分 -->
      <div v-if="verificationCode">
        <!-- 上一页，返回首页 -->
        <div class="loginHome">
          <p class="backUp" @click="verificationCodePreviousClick">
            <i class="el-icon-arrow-left"></i>
            <span>
              {{ $t('login.previous') }}
            </span>
          </p>
          <img src="../assets/images/login/home.png" @click="backHome">
        </div>
        <!-- 输入验证码部分-->
        <div class="loginOrPassWorld">
            <p>
              {{ $t('changePassword.getVerificationCode') }}
            </p>
            <p>
              {{ $t('changePassword.verificationCodeSentTo') + areaCode + ruleForm.userMobile}}
            </p>
        </div>
        <el-form
          :model="ruleForm"
          ref="ruleForm"
          label-width="100px"
          label-position="top"
          size="mini"
          class="demo-ruleForm"
        >
          <el-form-item
            class="formItemVerificationCode"
            v-for="(item,index) in ruleForm.verificationCodeList"
            :key="index"
            @keyup.native="nextFocus($event,index)"
            @keydown.native="changeValue($event,index)"
          >
            <el-input 
              class="codeInput"
              v-model="item.code" 
              @input="item.code=item.code.replace(/[^\d]/g,'')"
            >
            </el-input>
          </el-form-item>
          <div style="clear: both;"></div>
          <el-button type="text" 
            class="formItemVerificationCodeDownTimeOut"
            v-if="countdown !== 60"
          >
            {{countdown + $t('changePassword.retrieveSeconds')}}
          </el-button>
          <el-button type="text" 
            class="formItemVerificationCodeDownTimeOut" 
            v-if="countdown == 60"
            @click="getCodeClick"
          >
            {{ $t('login.retrieve')}}
          </el-button>
        </el-form>
        <!-- 下一步 -->
        <div class="loginButton">
            <el-button type="primary" round @click="nextStep">{{  $t('changePassword.nextStep') }}</el-button>
        </div>
      </div>
      <!-- 重置密码部分 -->
      <div v-if="forgetPassWordCode">
        <!-- 上一页，返回首页 -->
        <div class="loginHome">
          <p class="backUp" @click="forgetPassWordPreviousClick">
            <i class="el-icon-arrow-left"></i>
            <span>
              {{ $t('login.previous') }}
            </span>
          </p>
          <img src="../assets/images/login/home.png" @click="backHome">
        </div>
        <!-- 输入新密码 -->
        <div class="loginOrPassWorld">
            <p>
              重置密码
            </p>
            <p>
              密码可同时包含字母和数字，不少于6个字符
            </p>
        </div>
        <el-form
          :model="ruleForm"
          ref="ruleForm"
          label-width="100px"
          label-position="top"
          size="mini"
          class="demo-ruleForms"
        >
          <el-form-item
            prop="forgetPassword"
            :rules="[{ required: true, message: $t('changePassword.pleasePassword'), trigger: 'blur'}]"
          >
            <el-input 
              :type="passw"
              v-model="ruleForm.forgetPassword"
              :placeholder="$t('changePassword.pleasePassword')" 
            >
              <img slot="suffix" :src="icon" @click="showPass"/>
            </el-input>
          </el-form-item>
        </el-form>
        <!-- 完成修改 -->
        <div class="loginButton">
          <el-button type="primary" round @click="finishedEditing">{{ $t('changePassword.finishedEditing') }}</el-button>
        </div>
      </div>
    </div>
  </div>
</div>
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
      msgBtnDisabled:false,
      codeContent: "",
      registered : true,
      verificationCode : false,
      forgetPassWordCode : false,
      ruleForm: {
        userMobile: "",
        password: "",

        forgetPassword: '',
        verificationCodeList: [
          {
            index: 1,
            code: '',
          },
          {
            index: 2,
            code: '',
          },
          {
            index: 3,
            code: '',
          },
          {
            index: 4,
            code: '',
          },
          {
            index: 5,
            code: '',
          },
          {
            index: 6,
            code: '',
          },
        ],
      },
      imgList: [
        {
          index: 1,
          imgs: require('../assets/images/login/login_1.jpg'),
        },
        {
          index: 2,
          imgs: require('../assets/images/login/login_2.png'),
        },
        {
          index: 3,
          imgs: require('../assets/images/login/login_3.jpg'),
        }
      ],
      areaCode: '+86',
      areaCodeList: [
        {
          code: 1,
          codeNum: "+86",
        },
      ],
      //用于改变Input类型
      passw:"password",
      //用于更换Input中的图标
      icon: require('../assets/images/login/hide.png'),
    };
  },
  methods: {
    ...authMethods,
    //验证码对焦
    nextFocus(el,index) {
      if(index !== 5){
        if (el.keyCode != 8) {
          if ((index < (this.ruleForm.verificationCodeList.length - 1))&&(el.key === '0'||el.key === '1'||el.key === '2'||el.key === '3'||el.key === '4'||el.key === '5'||el.key === '6'||el.key === '7'||el.key === '8'||el.key === '9')) {
            document.getElementsByClassName("codeInput")[index + 1].querySelector('input').focus();
          } else {
            document.getElementsByClassName("codeInput")[index].querySelector('input').focus();
          }
        }
      };
      if(index !== 0){
        if(el.keyCode == 8){
          document.getElementsByClassName("codeInput")[index-1].querySelector('input').focus();
        };
      };
    },
    /*当键盘按下的时候清空原有的数*/
    changeValue(el,index) {
      if(el.key === '0'||el.key === '1'||el.key === '2'||el.key === '3'||el.key === '4'||el.key === '5'||el.key === '6'||el.key === '7'||el.key === '8'||el.key === '9'||el.keyCode == 8){
        this.ruleForm.verificationCodeList[index].code = "";
      }else{
        el.returnValue = false
      }
    },
    //注册返回上一页
    registeredPreviousClick(){
      this.$router.push({
        path: '/Login',
      });
    },
    //验证码返回上一页
    verificationCodePreviousClick(){
      this.registered = true;
      this.verificationCode = false;
      this.resetRuleForm();
    },
    //返回上一页
    forgetPassWordPreviousClick(){
      this.verificationCode = true;
      setTimeout(function(){
        document.getElementsByClassName("codeInput")[0].querySelector('input').focus()
      },500)
      this.forgetPassWordCode = false;
      this.resetRuleForm();
    },
    //下一步
    nextStep(){
      let that = this;
      let temp = new Array()
      for(let item of this.ruleForm.verificationCodeList){
        temp.push(item.code);
      };
      that.codeContent = temp.join('');
      if(that.codeContent.length !== 6 || that.codeContent == ''){
        that.$message({
          message: that.$t('messages.verification'),
          type: "warning",
          customClass:'base-message-zindex'
        });
        return;
      };
      //校验验证码接口
      this.$Axios.get(this.GLOBAL.url + `schedules/web/validCode?mobile=${that.ruleForm.userMobile}&code=${that.codeContent}`,{
        headers: {
            Authorization: this.getToken()
      },
      }).then(res => {
        if(res.data.status == 1){
          that.verificationCode = false;
          that.forgetPassWordCode = true;
        }else if(res.data.status == 6){
          that.$message({
            message: that.$t('messages.verification'),
            type: "warning",
            customClass:'base-message-zindex'
          });
        }else if(res.data.status == 7){
          that.$message({
            message: that.$t('messages.inputErrors'),
            type: "warning",
            customClass:'base-message-zindex'
          });
        }else if(res.data.status == 8){
          that.$message({
            message: that.$t('messages.verificationResend'),
            type: "warning",
            customClass:'base-message-zindex'
          });
        }
      }).catch((err)=>{
        that.$message({
          message: that.$t('messages.erverException'),
          type: "error",
          customClass: "base-message-zindex"
        })
      })
    },
    //密码的隐藏和显示
    showPass(){
      //点击图标是密码隐藏或显示
        if( this.passw == "text"){
          this.passw = "password";
          //更换图标
          this.icon = require('../assets/images/login/hide.png');
        }else {
          this.passw = "text";
          this.icon = require('../assets/images/login/show.png');
        };
    },
    //返回首页
    backHome(){
      this.$router.push({
        path: '/',
        name: 'Home',
      });
    },
    //完成修改
    finishedEditing(){
      let that = this;
      if(that.ruleForm.forgetPassword.length < 6){
        that.$message({
            message: that.$t('forgetPassword.passwordSix'),
            type: "error",
            customClass:'base-message-zindex'
          });
          return;
      }
      let params = {
          userMobile : that.ruleForm.userMobile,
          code : that.codeContent,
          password : that.ruleForm.forgetPassword,
      }
      var fd = new FormData()
      fd.append('userMobile', that.ruleForm.userMobile)
      fd.append('code', that.codeContent)
      fd.append('password', that.ruleForm.forgetPassword)
      this.$Axios.post(that.GLOBAL.url + "schedules/web/resetPassword", fd,{
        headers: {
            Authorization: this.getToken()
      },
      }).then(res => {
        if (res.data.status == 1) {
          that.$message({
            message: that.$t('messages.resetSucceeded'),
            type: "success",
            customClass:'base-message-zindex'
          });
          that.$router.push({
            path: 'Login',
          });
        } else if(res.data.status == 3){
          that.$message({
            message: that.$t('messages.notRegistered'),
            type: "warning",
            customClass:'base-message-zindex'
          });
        } else {
          that.$message({
            message: that.$t('messages.resetDailed'),
            type: "error",
            customClass: "base-message-zindex"
          });
        }
      }).catch((err)=>{
          that.$message({
              message: that.$t('messages.erverException'),
              type: "error",
              customClass: "base-message-zindex"
          })
      })
    },
    //重置表单
    resetForm(){
      this.userMobile = "";
      this.validCode =  "";
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
    //重置表单
    resetRuleForm(){
      this.userMobile = "";
      this.validCode =  "";
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
      this.ruleForm =  {
        userMobile: "",
        password: "",

        verificationCodeList: [
          {
            index: 1,
            code: '',
          },
          {
            index: 2,
            code: '',
          },
          {
            index: 3,
            code: '',
          },
          {
            index: 4,
            code: '',
          },
          {
            index: 5,
            code: '',
          },
          {
            index: 6,
            code: '',
          },
        ],
        //用户名
        perfectUserName: '',
        //密码
        perfectPassword: '',
        //企业名称
        perfectCompanyName: '',
        //职位
        perfectOffice: '',
        //邀请码
        perfectInvitationCode: '',
      };
    },
    //切换到登录页
    goLoginPage() {
      this.$parent.$parent.isForget = false;
    },
    //发送验证码
    sendValidCode() {
      var that = this;
      this.$refs["ruleForm"].validate((valid) => {
        if (valid) {
          // var fd = new FormData()
          // fd.append('mobile', that.areaCode.substr(1) + that.ruleForm.userMobile)
          // fd.append('type', 1)
          this.$Axios.post(that.GLOBAL.url + "message/sendCode",{
              mobile:this.areaCode.substr(1) + that.ruleForm.userMobile,
              type:1,
            },{
            headers: {
                Authorization: this.getToken()
          },
          }).then(res => {
            if (res.data.content == true) {
              that.$message({
                message: that.$t('messages.sentSuccessfully'),
                type: "success",
                customClass:'base-message-zindex'
              });
              that.settime($('#sendValidCode'));
              that.msgBtnDisabled = true;
              that.registered = false;
              that.verificationCode = true;
              setTimeout(function(){
                document.getElementsByClassName("codeInput")[0].querySelector('input').focus()
              },500)
            } else {
              that.$message({
                message: that.$t('messages.failedSend'),
                type: "error",
                customClass: "base-message-zindex"
              });
            }
          }).catch((err)=>{
              that.$message({
                message: that.$t('messages.erverException'),
                type: "error",
                customClass: "base-message-zindex"
              })
          })
        }else{
        }
      });
    },
    getCodeClick(){
      this.sendValidCode();
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
  computed: {
    language(){
      return localStorage.getItem('language');
    }
  },
  watch: {
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
    },
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
