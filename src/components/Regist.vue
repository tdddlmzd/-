<style lang="scss" >
.regist{
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
      min-width: 105px;
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
      margin-left: 24px;
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
    // min-height: 550px;
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
        color: #a8a8a8;
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
        margin-bottom: 10px !important;
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
      .el-button:hover:hover{
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
    .perfectInvitationCode{
      position: relative;
      .contact{
        position: absolute;
        top: 7px;
        left: 84px;
        z-index: 10;
        font-size: 12px;
        color: #909090;
        user-select: none;
      }
    }
  }
  .dialogAgreement{
    .el-dialog{
      width: 500px;
      border-radius: 6px !important;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, .1) !important;
      .el-dialog__header {
        height: 60px;
        line-height: 60px;
        font-size: 20px;
        color: #282828;
      }
      .el-dialog__body{
        height: 500px;
        font-size: 12x;
        padding: 15px 30px;
        color: #282828;
        overflow-y: scroll;
      }
      .el-dialog__footer {
        text-align: right;
      }
    }
    .el-button{
      background-color: #072c4c;
    }
  }
  .perfectInformation{
    .loginButton{
      position: inherit !important;
    }
  }
  .perfectInformationsDown{
    position: initial !important;
  }
}
</style>
<template>
<!-- 鲸准会员注册页面 -->
  <div class="regist">
    <!-- 左侧logo，返回首页部分 -->
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
      <!-- 注册表单部分 -->
      <div class="formContent">
        <!-- 注册表单 -->
        <div v-if="registered">
          <!-- 回首页 -->
          <div class="loginHome">
            <p class="backUp" @click="registeredPreviousClick">
              <i class="el-icon-arrow-left"></i>
              <span>
                {{ $t('login.previous') }}
              </span>
            </p>
            <img src="../assets/images/login/home.png" @click="backHome">
          </div>
          <!-- 注册鲸准 -->
          <div class="loginOrPassWorld">
              <p>
                {{ $t('register.register') }}
              </p>
              <p>
                {{ $t('register.pleasePhoneNumber') }}
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
              <!-- 手机号输入框 -->
              <el-form-item
                prop="userMobile"
                :rules="[{ required: true, message: $t('register.pleasePhoneNumber'), trigger: 'blur'},{pattern: /^(0|86|17951)?(1[3-9][0-9])[0-9]{8}$/, message: this.$t('login.validPhoneNumber'),trigger: 'blur'}]"
                class="formItemInline formInput"
              >
                <el-input 
                  v-model="ruleForm.userMobile" 
                  clearable 
                  :placeholder="$t('register.pleasePhoneNumber')" 
                  maxlength="11" 
                  minlength="11"
                  @keyup.native="number($event)"
                >
                </el-input>
              </el-form-item>
            </div>
          </el-form>
          <!-- 获取验证码按钮 -->
          <div class="loginButton">
              <el-button type="primary" round @click="selectUserByUserMobile" :disabled="msgBtnDisabled">{{ $t('login.getVerificationCode') }}</el-button>
          </div>
        </div>
        <!-- 输入验证码表单 -->
        <div v-if="verificationCode">
          <!-- 上一页，回首页 -->
          <div class="loginHome">
            <p class="backUp" @click="verificationCodePreviousClick">
              <i class="el-icon-arrow-left"></i>
              <span>
                {{ $t('login.previous') }}
              </span>
            </p>
            <img src="../assets/images/login/home.png" @click="backHome">
          </div>
          <!-- 请输入验证码 -->
          <div class="loginOrPassWorld">
              <p>
                {{ $t('register.pleaseVerificationCode') }}
              </p>
              <p>
                {{$t('login.verificationCodeSentTo') + areaCode + ' ' + ruleForm.userMobile}}
              </p>
          </div>
          <!-- 验证码输入部分 -->
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
                name="code"
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
              {{countdown + $t('login.retrieveSeconds')}}
            </el-button>
            <el-button type="text" 
              class="formItemVerificationCodeDownTimeOut" 
              v-if="countdown == 60"
              @click="getCodeClick"
            >
              {{ $t('login.retrieve')}}
            </el-button>
          </el-form>
          <!-- 下一步按钮 -->
          <div class="loginButton">
              <el-button type="primary" round @click="nextStep">{{ $t('register.nextStep' )}}</el-button>
          </div>
        </div>
        <!-- 完善信息表单 -->
        <div v-if="perfectInformation" class="perfectInformation">
          <!-- 上一页，回首页 -->
          <div class="loginHome">
            <p class="backUp" @click="perfectInformationPreviousClick">
              <i class="el-icon-arrow-left"></i>
              <span>
                {{ $t('login.previous') }}
              </span>
            </p>
            <img src="../assets/images/login/home.png" @click="backHome">
          </div>
          <!-- 完善信息 -->
          <div class="loginOrPassWorld">
              <p>
                {{$t('register.information')}}
              </p>
              <p>
                {{$t('register.colleagues')}}
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
            <!-- 用户名输入框 -->
            <el-form-item
              prop="perfectUserName"
              :rules="[{ required: true, message: $t('register.userName'), trigger: 'blur'}]"
            >
              <el-input 
                v-model="ruleForm.perfectUserName" 
                clearable 
                :placeholder="$t('register.userName')" 
              >
              </el-input>
            </el-form-item>
            <!-- 密码输入框 -->
            <el-form-item
              prop="perfectPassword"
              :rules="[{ required: true, message: $t('register.pleasePassword'), trigger: 'blur'}]"
            >
              <el-input 
                v-model="ruleForm.perfectPassword" 
                clearable 
                type="password"
                :placeholder="$t('register.characters')" 
              >
              </el-input>
            </el-form-item>
            <!-- 企业名称输入框 -->
            <el-form-item
              prop="perfectCompanyName"
              :rules="[{ required: true, message: $t('register.companyName'), trigger: 'blur'}]"
            >
              <el-input 
                v-model="ruleForm.perfectCompanyName" 
                clearable 
                :placeholder="$t('register.companyName')" 
              >
              </el-input>
            </el-form-item>
            <!-- 职位输入框 -->
            <el-form-item
              prop="perfectOffice"
              :rules="[{ required: true, message: $t('register.position'), trigger: 'blur'}]"
            >
              <el-input 
                v-model="ruleForm.perfectOffice"
                clearable
                :placeholder="$t('register.position')"
              >
              </el-input>
            </el-form-item>
            <!-- 邀请码输入框 -->
            <!-- <el-form-item
              prop="perfectInvitationCode"
              class="perfectInvitationCode"
            >
              <el-input
                v-model="ruleForm.perfectInvitationCode"
                clearable
                @input="handleInputCodes"
                :placeholder="$t('register.invitation')"
              >
              </el-input>
              <div v-if="isContactShow" class="contact">(<span style="color: #072c4c; cursor:pointer" @click="contactCustomer()">联系客服</span>获取)非必填</div>
            </el-form-item> -->
          </el-form>
          <!-- 完成注册按钮 -->
          <div class="loginButton">
              <el-button type="primary" round @click="completeRegistration">{{$t('register.registration')}}</el-button>
          </div>
        </div>
        <div class="loginRegist" v-if="registered == true || verificationCode == true ? true : false">
          <!-- 已经注册过了 -->
          <p class="loginNoUser">
            {{$t('register.registered') + " "}}
          </p>
          <!-- 立即登录 -->
          <p @click="turnPage" class="nowRegist">
            {{ $t("login.logOn") }}
          </p>
        </div>
        <!-- 鲸准用户注册协议 -->
        <div class="loginRegist perfectInformationsDown" v-if="perfectInformation == true ? true : false">
          <p class="loginNoUser">
            {{ $t('register.agree')}}
          </p>
          <p @click="userRegist" class="nowRegist" style="margin:0;">
            {{"《" + $t('register.agreement') + "》"}}
          </p>
        </div>
      </div>
    </div>
    <!-- 鲸准用户注册协议详情 -->
    <el-dialog
      class="dialogAgreement"
      v-title="$t('protocol.protocol')"
      :visible.sync="dialogFormVisible"
      v-if="dialogFormVisible"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      :show-close="false"
      :modal-append-to-body="false"
      center
    >
        <div class="box-main">
          <p>{{ $t('protocol.protocol_1') }}</p>
          <p>{{ $t('protocol.protocol_2') }}</p>
          <p>{{ $t('protocol.protocol_3') }}</p>
          <p>{{ $t('protocol.protocol_4') }}</p>
          <p>{{ $t('protocol.protocol_5') }}</p>
          <p>{{ $t('protocol.protocol_6') }}</p>
          <p>{{ $t('protocol.protocol_7') }}</p>
          <p>{{ $t('protocol.protocol_8') }}</p>
          <p>{{ $t('protocol.protocol_9') }}</p>
          <p>{{ $t('protocol.protocol_10') }}</p>
          <p>(1){{ $t('protocol.protocol_11') }}</p>
          <p>(2){{ $t('protocol.protocol_12') }}</p>
          <p>(3){{ $t('protocol.protocol_13') }}</p>
          <p>(4){{ $t('protocol.protocol_14') }}</p>
          <p>(5){{ $t('protocol.protocol_15') }}</p>
          <p>(6){{ $t('protocol.protocol_16') }}</p>
          <p>{{ $t('protocol.protocol_17') }}</p>
          <p>{{ $t('protocol.protocol_18') }}</p>
          <p>{{ $t('protocol.protocol_19') }}</p>
          <p>{{ $t('protocol.protocol_20') }}</p>
          <p>{{ $t('protocol.protocol_21') }}</p>
          <p>{{ $t('protocol.protocol_22') }}</p>
          <p>{{ $t('protocol.protocol_23') }}</p>
          <p>{{ $t('protocol.protocol_24') }}</p>
          <p>{{ $t('protocol.protocol_25') }}</p>
          <p>{{ $t('protocol.protocol_26') }}</p>
          <p>{{ $t('protocol.protocol_27') }}</p>
          <p>{{ $t('protocol.protocol_28') }}</p>
          <p>{{ $t('protocol.protocol_29') }}</p>
          <p>{{ $t('protocol.protocol_30') }}</p>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" round @click="dialogFormVisible = false">{{ $t('protocol.protocol_31') }}</el-button>
        </span>
    </el-dialog>
  </div>
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
      isClick: true,
      isValid: false,
      countdown:60,
      codeButton: "发送验证码",
      validCodeHidden: "",
      agree:false,
      agreeMsg:'',
      agreeClass:'form-group',
      msgBtnDisabled:false,
      ispopup: false,
      // isContactShow: true,
      codeContent: "",
      dialogFormVisible: false,
      registered : true,
      verificationCode : false,
      perfectInformation : false,
      ruleForm: {
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
    };
  },
  computed: {
    language(){
      return localStorage.getItem('language');
    }
  },
  methods: {
    //邀请码change事件
    // handleInputCodes(val){
    //   if(val != ''){
    //     this.isContactShow = false
    //   }else{
    //     this.isContactShow = true
    //   }
    // },
    // 限制输入为正整数
    number(e) {
        this.ruleForm.userMobile = this.ruleForm.userMobile.replace(/[^\d]/g,'');
    },
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
      this.resetRuleForm();
      this.registered = true;
      this.verificationCode = false;
    },
    //完善信息返回上一页
    perfectInformationPreviousClick(){
      this.resetRuleForm();
      this.verificationCode = true;
      setTimeout(function(){
        document.getElementsByClassName("codeInput")[0].querySelector('input').focus()
      },500)
      this.perfectInformation = false;
    },
    //下一步
    nextStep(){
      let that = this;
      localStorage.setItem('userMobile',(this.areaCode + that.ruleForm.userMobile));
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
          that.perfectInformation = true;
          that.resetRuleForm();
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
          })
        }
      }).catch((err)=>{
          that.$message({
            message: that.$t('messages.erverException'),
            type: "error",
            customClass: "base-message-zindex"
        })
        
      })

    },
    //完成注册
    completeRegistration(){
      if(this.isClick){
        this.isClick = false
        let that = this
        let params = {
            //用户手机号
            userMobile: localStorage.getItem('userMobile').replace("+86", ''),
            //用户名
            userName: that.ruleForm.perfectUserName,
            //验证码
            code : that.codeContent,
            //加密过的密码
            password: that.ruleForm.perfectPassword,
            //企业名称
            companyName: that.ruleForm.perfectCompanyName,
            //职位
            companyPosition: that.ruleForm.perfectOffice,
            //邀请码
            inviteCode: that.ruleForm.perfectInvitationCode,
        };
        this.$refs["ruleForm"].validate((valid) => {
          if (valid) {
            var fd = new FormData()
            fd.append('userMobile', localStorage.getItem('userMobile').replace("+86", ''))
            fd.append('userName', that.ruleForm.perfectUserName)
            fd.append('code', that.codeContent)
            fd.append('password', that.ruleForm.perfectPassword)
            fd.append('companyName', that.ruleForm.perfectCompanyName)
            fd.append('companyPosition', that.ruleForm.perfectOffice)
            fd.append('inviteCode', that.ruleForm.perfectInvitationCode)
            that.$Axios.post(that.GLOBAL.url + "schedules/web/regist",fd,{
                headers: {
                    Authorization: that.getToken()
            },
            }).then(res => {
              that.isClick = true
              if (res.data.status == 1) {
                that.$message({
                  message: that.$t('messages.registrationSuccess'), //注册成功
                  type: "success",
                  customClass:'base-message-zindex'
                })
                that.$router.push({
                  path: '/Login',
                })
                } else if (res.data.status == 3) {
                  that.$message({
                    message: that.$t('messages.isRegistered'), //手机号已注册
                    type: "warning",
                    customClass:'base-message-zindex'
                  })
                } else if (res.data.status == 4) {
                  that.$message({
                    message: that.$t('messages.InvitationCodeError'), //图片格式不正确
                    type: "warning",
                    customClass:'base-message-zindex'
                  })
                } else {
                  that.$message({
                    message: that.$t('messages.registError'), //注册失败
                    type: "error",
                    customClass: "base-message-zindex"
                  })
                };
            }).catch((err)=>{
              that.isClick = true
              that.$message({
                  message: that.$t('messages.erverException'), //服务器异常
                  type: "error",
                  customClass: "base-message-zindex"
              })
            })
          }
        });
      }
    },
    //返回首页
    backHome(){
      this.$router.push({
        path: '/',
        name: 'Home',
      });
    },
    //翻面
    turnPage() {
      // this.$parent.$parent.turnLogin();
      this.$router.push({
        path: '/Login',
      });
    },
    //重置表单
    resetForm(){
      this.ruleForm.userMobile = "";
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
    //重置表单
    resetRuleForm(){
      this.ruleForm.userMobile = "";
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
    // 查询手机号是否已经注册过
    selectUserByUserMobile(){
      var that = this;
      this.$refs["ruleForm"].validate((valid) => {
        if (valid) {
          var fd = new FormData()
          fd.append('userMobile', that.ruleForm.userMobile)
          this.$Axios.post(that.GLOBAL.url + "schedules/web/selectUserByUserMobile",fd,{
            headers: {
                Authorization: this.getToken(),
          },
          }).then(res => {
            if (res.data.status == 1) {
              // 如果没有注册过发送验证码
              that.sendValidCode()
            } else {
              that.$message({
                message: that.$t('messages.isRegistered'),
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
    //发送验证码
    sendValidCode() {
      var that = this;
      this.$refs["ruleForm"].validate((valid) => {
        if (valid) {
          this.$Axios.post(that.GLOBAL.url + "message/sendCode",{
              mobile: that.areaCode.substr(1) + that.ruleForm.userMobile,
              type:0,
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
          // that.sendValidCode();
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
        userMobile: that.ruleForm.userMobile,
        // password:that.CryptoJS.SHA256(that.password + that.GLOBAL.salt).toString(),
        password: that.password,
        inviteCode: that.inviteCode
      };

      if (this.validForm({userMobile : that.ruleForm.userMobile,validCode:that.validCode, password : that.password,inviteCode:that.inviteCode,agree:that.agree})) {
        this.loading = true;
        var fd = new FormData()
        fd.append('userMobile', that.ruleForm.userMobile)
        fd.append('password', that.password)
        fd.append('inviteCode', that.inviteCode)
        that.$Axios.post(that.GLOBAL.url + "schedules/web/regist",fd,{
            headers: {
                Authorization: this.getToken()
        },
        }).then(res => {
          if (res.data.status == 1) {
            that.$message({
              message: that.$('messages.registrationSuccess'), //注册成功
              type: "success",
              customClass:'base-message-zindex'
            });
            setTimeout(function(){
              that.resetForm();
              that.turnPage();
            },1000)
          } else if (res.data.status == 3) {
            that.$message({
              message: that.$('messages.isRegistered'), //手机号已注册
              type: "warning",
              customClass:'base-message-zindex'
            });
          } else if (res.data.status == 4) {
            that.$message({
              message: that.$('messages.InvitationCodeError'), //图片格式不正确
              type: "warning",
              customClass:'base-message-zindex'
            });
          } else {
            that.$message({
              message: that.$('messages.loginFailed'), //注册失败
              type: "error",
              customClass: "base-message-zindex"
            });
          }
          that.loading = false;
        }).catch((err)=>{
            that.$message({
              message: that.$t('messages.erverException'), //服务器异常
              type: "error",
              customClass: "base-message-zindex"
            });
            that.loading = false;
        })
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
    },
    //弹出框弹出协议 
    userRegist() {
      this.dialogFormVisible = true
    },
    //取消弹出框
    cancleIspop() {
      this.ispopup = false
    },
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
        this.validForm({ userMobile: val, validCode: this.validCode , password: this.password, inviteCode: this.inviteCode,agree:this.agree});
      } else {//单独校验手机号
        if (this.validate.isNull(this.ruleForm.userMobile)) {
          this.userMobileMsg = "手机号不能为空";
          this.userMobileClass = "form-control invalid";
        } else {
          if (!this.validate.isPhone(this.ruleForm.userMobile)) {
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
    },
  }
};
</script>
