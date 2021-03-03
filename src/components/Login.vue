<style lang="scss">
.logins {
    background-color: #fff;
    overflow: hidden;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;

    .el-carousel__arrow {
        border: none;
        outline: none;
        padding: 0;
        margin: 0;
        height: 36px;
        width: 36px;
        cursor: pointer;
        transition: .3s;
        border-radius: 50%;
        background-color: rgba(31, 45, 61, .11);
        color: #fff;
        position: absolute;
        top: 50%;
        z-index: 10;
        transform: translateY(-50%);
        text-align: center;
        font-size: 12px !important;

        .el-icon-arrow-right, .el-icon-arrow-left {
            color: #fff !important;
            font-size: 12px !important;
        }
    }

    .el-carousel__indicator {
        .el-carousel__button {
            width: 32px;
            height: 6px;
            background-color: #f2f2f2;
            border-radius: 10px;
            display: inline-block;
        }
    }

    .el-carousel {
        width: 407px;
        overflow: hidden;
    }

    .el-carousel__container {
        height: 400px;
    }

    .autoContent {
        width: 948px;
        margin: 0 auto;
    }

    .loginLeftTop {
        width: 100%;
        padding: 31px 0 0 43px;
        margin-bottom: 181px;

        .jingzhunImg {
            display: inline-block;
            height: 24px;
            vertical-align: middle;
            margin-right: 20px;
        }

        .backHome {
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

            .el-icon-arrow-left {
                font-size: 12px !important;
            }
        }

        .backHome:hover {
            background: #395670;
        }
    }

    .carousels {
        display: inline-block;
        vertical-align: middle;

        .carouselsHeader {
            width: 100%;
            font-size: 26px;
            color: #282828;
            text-align: center;
            margin-bottom: 46px;
            margin-left: 22px;
        }
    }

    .formContent {
        min-height: 500px;
        width: 366px;
        margin-left: 175px;
        padding: 23px 22px 24px 22px;
        display: inline-block;
        border-radius: 6px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, .1);
        position: relative;
        vertical-align: middle;

        .loginHome {
            width: 100%;
            text-align: right;

            img {
                cursor: pointer;
            }
        }

        .loginOrPassWorld {
            margin-top: 26px;
            color: #282828;

            p:nth-of-type(1) {
                font-size: 20px;
                font-weight: bold;
            }

            p:nth-of-type(2) {
                font-size: 14px;
                margin-top: 17px;
            }
        }

        .demo-ruleForm {
            margin-top: 40px;

            .el-input--mini {
                font-size: 14px;
            }

            .el-input--mini .el-input__inner {
                height: 44px;
                line-height: 44px;
                border-radius: 4px;
            }

            .el-input--mini .el-input__inner::-webkit-input-placeholder {
                color: #909090;
            }
        }

        .formDownContent {
            width: 100%;
            height: 16px;
            line-height: 16px;
            padding: 0 11px 0 11px;

            p {
                font-size: 14px;
                color: #909090;
                cursor: pointer;
            }

            .phoneLogin {
                float: left;
            }

            .phoneLogin:hover {
                color: #072c4c;
            }

            .forgetPassword {
                float: right;
            }

            .forgetPassword:hover {
                color: #072c4c;
            }
        }

        .loginButton {
            margin-top: 173px;
            width: 100%;

            .el-button {
                width: 100%;
                height: 44px;
                background-color: #072c4c;
                border-color: #072c4c;
            }

            .el-button:hover {
                background: #395670;
            }
        }

        .loginRegist {
            margin-top: 12px;
            font-size: 12px;
            text-align: center;

            .loginNoUser {
                display: inline-block;
                color: #909090;
            }

            .nowRegist {
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
    <!-- 登录页面 -->
    <div class="logins">
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
            <!-- 登录表单部分 -->
            <div class="formContent">
                <!-- 回首页 -->
                <div class="loginHome">
                    <img src="../assets/images/login/home.png" @click="backHome">
                </div>
                <!-- 登录鲸准 -->
                <div class="loginOrPassWorld">
                    <p>
                        {{ $t('login.loginWhale') }}
                    </p>
                    <p>
                        {{ $t('login.accountAndPassword') }}
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
                    <!-- 手机号输入框 -->
                    <el-form-item
                        prop="userMobile"
                        :rules="[{ required: true, message: $t('register.pleasePhoneNumber'), trigger: 'blur'}]"
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
                    <!-- 密码输入框 -->
                    <el-form-item
                        prop="password"
                        :rules="[{ required: true, message: $t('register.pleasePassword'), trigger: 'blur'}]"
                    >
                        <el-input
                            type="password"
                            v-model="ruleForm.password"
                            clearable
                            :placeholder="$t('register.pleasePassword')"
                            maxlength="16"
                            minlength="6"
                        >
                        </el-input>
                    </el-form-item>
                </el-form>
                <div class="formDownContent">
                    <!-- 验证码登录 -->
                    <p class="phoneLogin" @click="phoneVerificationCodeLogin">
                        {{ $t('login.phoneCode') }}
                    </p>
                    <!-- 忘记密码 -->
                    <p class="forgetPassword" @click="goForgetPassword">
                        {{ $t('login.forgetPassword') }}
                    </p>
                </div>
                <!-- 登录按钮 -->
                <div class="loginButton">
                    <el-button type="primary" round @click="login">{{ $t('login.login') }}</el-button>
                </div>
                <!-- 没有账号注册 -->
                <div class="loginRegist">
                    <p class="loginNoUser">
                        {{ $t('login.noAccount') }}
                    </p>
                    <p @click="turnPage" class="nowRegist">
                        {{ $t('login.signUpNow') }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Layout from "@layouts/auth";
import {authMethods} from "@state/helpers";
import appConfig from "@src/app.config";
import dispatch, {getParameters, clearParameters} from "@assets/js/dispatch";

export default {
    page: {
        title: "登录",
        meta: [{name: "登录", content: `登录到 ${appConfig.title}`}]
    },
    components: {Layout},
    data() {
        return {
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
            isValid: false,
            ruleForm: {
                userMobile: "",
                password: "",
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
        },
        language() {
            return localStorage.getItem('language');
        }
    },
    created() {
    },
    methods: {
        // 限制输入为正整数
        number(e) {
            this.ruleForm.userMobile = this.ruleForm.userMobile.replace(/[^\d]/g, '');
        },
        //注册
        turnPage() {
            this.$router.push({
                path: '/Regist'
            });
        },
        //返回首页
        backHome() {
            this.$router.push({
                path: '/',
                name: 'Home',
            });
        },
        //登录
        login() {
            var that = this;
            var params = {
                username: that.ruleForm.userMobile,
                // password:that.CryptoJS.SHA256(that.password + that.GLOBAL.salt).toString(),
                password: that.ruleForm.password,
                isRemeber: that.isRemeber,
                grant_type: "password"
            };
            this.$refs["ruleForm"].validate((valid) => {
                if (valid) {
                    this.loading = true;
                    $.ajax({
                        url: that.GLOBAL.url + "auth/oauth/token",
                        type: "POST",
                        headers: {
                            Authorization: 'Basic YXBwOnNlY3JldA=='
                        },
                        data: params,
                        success: async function (data) {
                            if (data.userId) {
                                that.setCookie("gateway_token", "Bearer " + data.access_token);
                                that.setCookie("userMobile", params.username);
                                that.setCookie("authId", data.userId);
                                that.$message({
                                    message: that.$t('messages.loginSuccessful'),
                                    type: "success",
                                    customClass: 'base-message-zindex',
                                    duration: 1000,
                                });

                                if (sessionStorage.getItem('detailList')) {
                                    let obj = JSON.parse(sessionStorage.getItem('detailList'));
                                    that.$router.push({
                                        path: `/route-detail/${obj.id}`,
                                    });
                                } else {
                                    var urlLocal = window.location.host ? window.location.host.toUpperCase() : ''
                                    if (urlLocal.indexOf('TRACK') !== -1) {
                                        that.$router.push({
                                            path: '/track',
                                            name: 'Track',
                                        });
                                    } else {
                                        if (that.$route.params.redirect) {
                                            let location = that.$route.params.redirect;
                                            if (typeof location === 'function') {
                                                location = location();
                                            }
                                            that.$router.push(location, () => null, () => {
                                                that.$router.push('/route/record');
                                            });
                                        } else if (await dispatch(getParameters() || {}, !!data.userId, that)) {
                                                clearParameters();
                                        } else {
                                            that.$router.push('/route/record');
                                        }
                                    }
                                }
                                ;
                            } else if (data.status == 3) {
                                that.$message({
                                    message: that.$t('messages.mobileRegister'),
                                    type: "warning",
                                    customClass: 'base-message-zindex'
                                });
                            } else if (data.status == 4) {
                                that.$message({
                                    message: that.$t('messages.usernameOrPassword'),
                                    type: "warning",
                                    customClass: 'base-message-zindex'
                                });
                            } else if (data.status == 9) {
                                that.$message({
                                    message: that.$t('messages.usernameDisabled'),
                                    type: "warning",
                                    customClass: 'base-message-zindex'
                                });
                            } else if (data.status == 10) {
                                that.$message({
                                    message: that.$t('messages.InsecurePassword'),
                                    type: "warning",
                                    customClass: 'base-message-zindex'
                                });
                                that.goForgetPassword()
                            } else {
                                that.$message({
                                    message: that.$t('messages.loginFailed'),
                                    type: "error",
                                    customClass: "base-message-zindex"
                                });
                            }
                            that.loading = false;
                        },
                        error: function (e) {
                            that.$message({
                                message: that.$t('messages.erverException'),
                                type: "error",
                                customClass: "base-message-zindex"
                            });
                            that.loading = false;
                        }
                    });
                } else {

                }
            });
        },
        //切换到忘记密码
        goForgetPassword() {
            // this.$parent.$parent.isForget = true;
            this.$router.push({
                path: '/ForgetPassword',
            });
        },
        //切换到手机验证码登录
        phoneVerificationCodeLogin() {
            this.$router.push({
                path: '/PhoneVerificationCodeLogin',
            });
        }
    },
    watch: {
        language: {
            immediate: true,
            handler(newVal) {
                if (newVal == '语言') {
                    this.lang = "zh-CN";
                    this.$i18n.locale = this.lang; //关键语句
                } else if (newVal == 'language') {
                    this.lang = "en-US";
                    this.$i18n.locale = this.lang; //关键语句

                }
            }
        },
        userMobile(val) {
            if (this.isValid) {
                this.validForm({userMobile: val, password: this.password});
            }
        },
        password(val) {
            if (this.isValid) {
                this.validForm({userMobile: this.userMobile, password: val});
            }
        }
    }
};
</script>
