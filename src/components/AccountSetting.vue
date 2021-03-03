

<style lang="scss" >
.content.download-template {
  padding-top: 20px;
}
.container-fluid {
  width: 1200px !important;
  margin: 0 auto;
  min-height: 725px;
}
.download-template .btn-xs {
  margin: 0 2px;
}
.company-validstate {
  margin-left: 20px;
  color: #f1556c;
  position: absolute;
  cursor: pointer;
}
.company-validstated {
  margin-left: 20px;
  color: #1abc9c;
  position: absolute;
  cursor: pointer;
}
.form-company-validstate {
  margin-left: 20px;
  color: #f1556c;
  cursor: pointer;
  float: right;
}
.form-company-validstated {
  margin-left: 20px;
  color: #1abc9c;
  cursor: pointer;
  float: right;
}
.download-template .btn-success {
  color: #fff !important;
  background-color: #1abc9c !important;
  border-color: #1abc9c;
}
.download-template .rounded-circle {
  cursor: pointer
}
.download-template .img{
  width: 96px !important;
  height: 96px !important;
}
.col-md-12.card-des {
  margin-top: 10px;
}
.card-img-bottom.img-fluid.valid-img {
  width: 360px;
}
.upload-box {
  margin: 25px;
  border: 2px dashed rgba(50, 58, 70, 0.3);
  background: #fff;
  border-radius: 6px;
  width: 360px;
  height: 240px;
  text-align: center;
}
.upload-logo {
  margin-top: 45px !important;
}
.user-invide-code {
  cursor: text !important;
  user-select: text !important;
}

.img-review-box {
  margin: 0 auto;
  text-align: center;
  overflow-y: scroll;
  overflow-x: scroll;
  height: 500px;
  width: 820px;
  position: absolute;
  top: 30px;
  right: 0;
  left: 0;
  bottom: 0;
  padding: 0;
}
.img-review {
  width: 100%;
}

.img-review-box-modal .el-dialog__body {
  padding-bottom: 20px !important;
}
.img-review-turn {
  font-size: 16px;
  cursor: pointer;
}
.img-review-turn :hover {
  color: #1abc9c;
}

.img-review-box-modal {
  .el-dialog__header {
    display: none;
  }
  .el-dialog__footer {
    bottom: -22px;
    position: absolute;
    right: 0;
    display: none;
  }
  .el-dialog__body {
    padding: 0 !important;
  }
}
.UpdatePassword{
  min-height: 440px !important;
}
</style>
<template>
  <!-- Start Content-->
  <!-- 账号设置页面 -->
  <div class="download-template content">
    <div class="container-fluid">
      <div class="row">
        <!-- 左侧认证信息部分 -->
        <div class="col-lg-4 col-xl-4">
          <div class="card-box text-center">
            <img
              :src="userInfo.avatarUrl == '' ? require('../assets/images/l-headpor.png'):userInfo.avatarUrl"
              class="rounded-circle avatar-xl img-thumbnail img"
              :class="userInfo.avatarUrl == '' ? '' : 'padd-thumbnail'"
              alt="profile-image"
              @click="openSetAvatarModal"
            />

            <h4 class="mb-0">{{userInfo.username == ""? userInfo.userMobile:userInfo.username}}</h4>
            <p class="text-muted">
              {{userInfo.companyName}}
              <u
                :class="userInfo.validState == 2 ?'company-validstated':'company-validstate'"
                :style="userInfo.companyName == ''?'margin-left: -20px;':''"
                @click="changeTab(1)"
              >{{userInfo.validState == 0 ? $t('accountSettings.notCertified') :userInfo.validState == 2 ? $t('accountSettings.verified') :''}}</u>
            </p>
            <!-- <button type="button" class="btn btn-success btn-xs waves-effect mb-2 waves-light">关注</button>
            <button type="button" class="btn btn-danger btn-xs waves-effect mb-2 waves-light">私信</button>-->

            <div class="text-left mt-3">
              <!-- <h4 class="font-13 text-uppercase">关于我 :</h4>
              <p class="text-muted font-13 mb-3">{{userInfo.aboutMe}}</p>-->
              <p class="text-muted mb-2 font-13">
                <strong>{{ $t('accountSettings.realName') }} :</strong>
                <span class="ml-2">{{userInfo.fullname}}</span>
              </p>

              <p class="text-muted mb-2 font-13">
                <strong>{{ $t('accountSettings.phoneNumber') }} :</strong>
                <span class="ml-2">{{userInfo.userMobile}}</span>
              </p>

              <p class="text-muted mb-2 font-13">
                <strong>{{ $t('accountSettings.email') }} :</strong>
                <span class="ml-2">{{userInfo.email}}</span>
              </p>

              <!-- <p class="text-muted mb-1 font-13">
                <strong>国家 :</strong>
                <span class="ml-2">{{userInfo.country}}</span>
              </p>-->
            </div>

            <!-- <ul class="social-list list-inline mt-3 mb-0">
              <li class="list-inline-item">
                <a href="javascript: void(0);" class="social-list-item border-purple text-purple">
                  <i class="mdi mdi-facebook"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="javascript: void(0);" class="social-list-item border-danger text-danger">
                  <i class="mdi mdi-google"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="javascript: void(0);" class="social-list-item border-info text-info">
                  <i class="mdi mdi-twitter"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a
                  href="javascript: void(0);"
                  class="social-list-item border-secondary text-secondary"
                >
                  <i class="mdi mdi-github-circle"></i>
                </a>
              </li>
            </ul>-->
          </div>
          <!-- end card-box -->
        </div>
        <!-- end col-->
        <!-- 右侧详细信息部分 -->
        <div class="col-lg-8 col-xl-8">
          <div class="card-box">
            <ul class="nav nav-pills navtab-bg">
              <!-- 基本信息 -->
              <li class="nav-item" @click="changeTab(0)">
                <a
                  href="javascript: void(0);"
                  data-toggle="tab"
                  aria-expanded="false"
                  class="base-info nav-link active btn-success waves-effect waves-light"
                >
                  <i class="mdi mdi-settings-outline mr-1"></i>
                  {{ $t('accountSettings.basicInformation') }}
                </a>
              </li>
              <!-- 实名认证 -->
              <li class="nav-item" @click="changeTab(1)">
                <a
                  href="javascript: void(0);"
                  data-toggle="tab"
                  aria-expanded="true"
                  class="realname-valid nav-link ml-0 waves-effect waves-light"
                >
                  <i class="mdi mdi-face-profile mr-1"></i>
                  {{ $t('accountSettings.realNameVerified') }}
                </a>
              </li>
              <!-- 我的邀请码 -->
              <li class="nav-item" style="float: right;position: absolute;right: 34px;">
                <p
                  href="javascript: void(0);"
                  data-toggle="tab"
                  aria-expanded="true"
                  class="user-invide-code nav-link active btn-success waves-effect waves-light"
                >{{ $t('accountSettings.yourInvitationCode') + '：' + userInfo.inviteCode}}</p>
              </li>
            </ul>

            <div class="tab-content">
              <!-- 基本信息部分 -->
              <div class="tab-pane active" id="settings" v-if="tabIndex == 0">
                <form autocomplete="off" @submit.prevent="onSubmit" class="userInfoForm">
                  <!-- 个人信息部分 -->
                  <h5 class="mb-3 text-uppercase bg-light p-2">
                    <i class="mdi mdi-account-circle mr-1"></i> {{ $t('accountSettings.personalInformation') }}
                  </h5>
                  <div class="row">
                    <!-- 用户名 -->
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="username">{{ $t('accountSettings.userName') }}</label>
                        <input
                          type="text"
                          class="form-control"
                          id="username"
                          :placeholder="$t('accountSettings.pleaseUserName')"
                          v-model="form.username"
                          :class="usernameClass"
                          maxlength="20"
                          @click="kankanfrom(form)"
                        />
                        <div
                          class="invalid-feedback"
                          :style="usernameMsg != ''  ?'display:block':'display:none'"
                        >{{usernameMsg}}</div>
                      </div>
                    </div>
                    <!-- 手机号码 -->
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="phone">{{ $t('accountSettings.phoneNumber') }}</label>
                        <input
                          type="text"
                          class="form-control"
                          id="phone"
                          :placeholder="$t('accountSettings.pleasePhoneNumber')"
                          v-model="form.phone"
                          :class="phoneClass"
                          maxlength="13"
                        />
                        <div
                          class="invalid-feedback"
                          :style="phoneMsg != ''  ?'display:block':'display:none'"
                        >{{phoneMsg}}</div>
                      </div>
                    </div>
                    <!-- end col -->
                  </div>
                  <div class="row">
                    <!-- 邮箱地址 -->
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="email">{{ $t('accountSettings.email') }}</label>
                        <input
                          type="text"
                          class="form-control"
                          id="email"
                          :placeholder="$t('accountSettings.pleaseEmailAddress')"
                          v-model="form.email"
                          :class="emailClass"
                          maxlength="100"
                        />
                        <div
                          class="invalid-feedback"
                          :style="emailMsg != ''  ?'display:block':'display:none'"
                        >{{emailMsg}}</div>
                      </div>
                    </div>
                    <!-- 密码 -->
                    <div class="col-md-6">
                      <div class="form-group" style="margin-bottom:0;">
                        <label for="password">{{ $t('accountSettings.password') }}</label>
                        <input
                          type="password"
                          class="form-control"
                          id="password"
                          :placeholder="$t('accountSettings.pleasePassword')"
                          :class="passwordClass"
                          readonly
                          value="12345678"
                        />
                        <span class="form-text text-muted">
                          <small>
                            {{ $t('accountSettings.changePassword') }}
                            <a 
                              class="ship-a"
                              href="javascript: void(0);"
                              @click="openUpdatePassowrdDialog"
                            >{{ $t('accountSettings.clickOn') }}</a> {{ $t('accountSettings.here') }}.
                          </small>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <!-- 性别 -->
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="username">{{ $t('accountSettings.gender') }}</label>
                        <el-select v-model="form.gender" clearable :placeholder="$t('accountSettings.pleaseGender')" style="width:100%">
                            <el-option
                                v-for="item in sexSelect"
                                :key="item.value"
                                :label="$i18n.locale == 'zh-CN' ? item.labelCn : item.labelEn"
                                :value="item.value"
                            >
                            </el-option>
                        </el-select>
                        <div
                          class="invalid-feedback"
                          :style="genderMsg != ''  ?'display:block':'display:none'"
                        >{{genderMsg}}</div>
                      </div>
                    </div>
                  </div>
                  <!-- end row -->

                  <!-- 公司信息部分 -->
                  <h5 class="mb-3 text-uppercase bg-light p-2">
                    <i class="mdi mdi-office-building mr-1"></i> {{ $t('accountSettings.companyInformation') }}
                    <span
                      :class="userInfo.validState == 2 ?'form-company-validstated':'form-company-validstate'"
                      v-show="userInfo.validState == 0 || userInfo.validState == 2"
                      @click="changeTab(1)"
                    >
                      <i v-show="userInfo.validState == 0" class="remixicon-error-warning-line">{{ $t('accountSettings.notCertified') }}</i>
                      <i v-show="userInfo.validState == 2" class="remixicon-vip-crown-2-fill">{{ $t('accountSettings.verified') }}</i>
                    </span>
                  </h5>
                  <div class="row">
                    <!-- 真实姓名 -->
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="fullname">{{ $t('accountSettings.realName') }}</label>
                        <input
                          type="text"
                          class="form-control"
                          id="fullname"
                          :placeholder="$t('accountSettings.pleaseRealName')"
                          v-model="form.fullname"
                          :class="fullnameClass"
                          maxlength="10"
                        />
                        <div
                          class="invalid-feedback"
                          :style="fullnameMsg != ''  ?'display:block':'display:none'"
                        >{{fullnameMsg}}</div>
                      </div>
                    </div>
                    <!-- 公司职位 -->
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="companyPosition">{{ $t('accountSettings.positionCompany') }}</label>
                        <input
                          type="text"
                          class="form-control"
                          id="companyPosition"
                          :placeholder="$t('accountSettings.pleasePositionCompany')"
                          v-model="form.companyPosition"
                          :class="companyPositionClass"
                          maxlength="20"
                        />
                        <div
                          class="invalid-feedback"
                          :style="companyPositionMsg != ''  ?'display:block':'display:none'"
                        >{{companyPositionMsg}}</div>
                      </div>
                    </div>
                    <!-- end col -->
                  </div>
                  <!-- end row -->
                  <div class="row">
                    <!-- 公司名称 -->
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="companyName">{{ $t('accountSettings.companyName') }}</label>
                        <input
                          type="text"
                          class="form-control"
                          id="companyName"
                          :placeholder="$t('accountSettings.pleaseCompanyName')"
                          v-model="form.companyName"
                          :class="companyNameClass"
                          maxlength="20"
                        />
                        <div
                          class="invalid-feedback"
                          :style="companyNameMsg != ''  ?'display:block':'display:none'"
                        >{{companyNameMsg}}</div>
                      </div>
                    </div>
                    <!-- 办公电话 -->
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="workPhone">{{ $t('accountSettings.officePhone') }}</label>
                        <input
                          type="text"
                          class="form-control"
                          id="workPhone"
                          :placeholder="$t('accountSettings.pleaseOfficePhone')"
                          v-model="form.workPhone"
                          :class="workPhoneClass"
                          maxlength="13"
                        />
                        <div
                          class="invalid-feedback"
                          :style="workPhoneMsg != ''  ?'display:block':'display:none'"
                        >{{workPhoneMsg}}</div>
                      </div>
                    </div>
                    <!-- end col -->
                  </div>
                  <!-- end row -->
                  <div class="row">
                    <!-- 公司网址 -->
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="companySite">{{ $t('accountSettings.companyWebsite') }}</label>
                        <input
                          type="text"
                          class="form-control"
                          id="companySite"
                          :placeholder="$t('accountSettings.pleaseCompanyWebsite')"
                          v-model="form.companySite"
                          :class="companySiteClass"
                          maxlength="50"
                        />
                        <div
                          class="invalid-feedback"
                          :style="companySiteMsg != ''  ?'display:block':'display:none'"
                        >{{companySiteMsg}}</div>
                      </div>
                    </div>
                    <!-- 公司地址 -->
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="companyAddress">{{ $t('accountSettings.companyAddress') }}</label>
                        <input
                          type="text"
                          class="form-control"
                          id="companyAddress"
                          :placeholder="$t('accountSettings.pleaseCompanyAddress')"
                          v-model="form.companyAddress"
                          :class="companyAddressClass"
                          maxlength="50"
                        />
                        <div
                          class="invalid-feedback"
                          :style="companyAddressMsg != ''  ?'display:block':'display:none'"
                        >{{companyAddressMsg}}</div>
                      </div>
                    </div>
                    <!-- end col -->
                  </div>
                  <!-- end row -->
                  <div class="row">
                    <!-- 业务优势 -->
                    <div class="col-12">
                      <div class="form-group">
                        <label for="businessGoodAt">{{ $t('accountSettings.businessAdvantage') }}</label>
                        <textarea
                          class="form-control"
                          id="businessGoodAt"
                          rows="4"
                          :placeholder="$t('accountSettings.pleaseBusinessAdvantage')"
                          v-model="form.businessGoodAt"
                          :class="businessGoodAtClass"
                          maxlength="100"
                        ></textarea>
                        <div
                          class="invalid-feedback"
                          :style="businessGoodAtMsg != ''  ?'display:block':'display:none'"
                        >{{businessGoodAtMsg}}</div>
                      </div>
                    </div>
                    <!-- end col -->
                  </div>
                  <!-- end row -->

                  <!-- 社交信息部分 -->
                  <h5 class="mb-3 text-uppercase bg-light p-2">
                    <i class="mdi mdi-earth mr-1"></i> 
                    {{ $t('accountSettings.socialInformation') }}
                  </h5>
                  <div class="row">
                    <!-- QQ -->
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="qqNumber">{{ $t('accountSettings.qq') }}</label>
                        <div class="input-group">
                          <div class="input-group-prepend">
                            <span class="input-group-text">
                              <i class="remixicon-qq-fill"></i>
                            </span>
                          </div>
                          <input
                            type="text"
                            class="form-control"
                            id="qqNumber"
                            :placeholder="$t('accountSettings.pleaseQQ')"
                            v-model="form.qqNumber"
                            :class="qqNumberClass"
                            maxlength="20"
                          />
                          <div
                            class="invalid-feedback"
                            :style="qqNumberMsg != ''  ?'display:block':'display:none'"
                          >{{qqNumberMsg}}</div>
                        </div>
                      </div>
                    </div>
                    <!-- 微信 -->
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="wechatNumber">{{ $t('accountSettings.wechat') }}</label>
                        <div class="input-group">
                          <div class="input-group-prepend">
                            <span class="input-group-text">
                              <i class="remixicon-wechat-fill"></i>
                            </span>
                          </div>
                          <input
                            type="text"
                            class="form-control"
                            id="wechatNumber"
                            :placeholder="$t('accountSettings.pleaseWechat')"
                            v-model="form.wechatNumber"
                            :class="wechatNumberClass"
                            maxlength="20"
                          />
                          <div
                            class="invalid-feedback"
                            :style="wechatNumberMsg != ''  ?'display:block':'display:none'"
                          >{{wechatNumberMsg}}</div>
                        </div>
                      </div>
                    </div>
                    <!-- end col -->
                  </div>
                  <!-- end row -->
                  <div class="row">
                    <!-- 微博 -->
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="sinaNumber">{{ $t('accountSettings.weibo') }}</label>
                        <div class="input-group">
                          <div class="input-group-prepend">
                            <span class="input-group-text">
                              <i class="remixicon-weibo-fill"></i>
                            </span>
                          </div>
                          <input
                            type="text"
                            class="form-control"
                            id="sinaNumber"
                            :placeholder="$t('accountSettings.pleaseWeibo')"
                            v-model="form.sinaNumber"
                            :class="sinaNumberClass"
                            maxlength="20"
                          />
                          <div
                            class="invalid-feedback"
                            :style="sinaNumberMsg != ''  ?'display:block':'display:none'"
                          >{{sinaNumberMsg}}</div>
                        </div>
                      </div>
                    </div>
                    <!-- Skype -->
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="skypeNumber">Skype</label>
                        <div class="input-group">
                          <div class="input-group-prepend">
                            <span class="input-group-text">
                              <i class="fab fa-skype"></i>
                            </span>
                          </div>
                          <input
                            type="text"
                            class="form-control"
                            id="skypeNumber"
                            :placeholder="$t('accountSettings.pleaseSkype')"
                            v-model="form.skypeNumber"
                            :class="skypeNumberClass"
                            maxlength="20"
                          />
                          <div
                            class="invalid-feedback"
                            :style="skypeNumberMsg != ''  ?'display:block':'display:none'"
                          >{{skypeNumberMsg}}</div>
                        </div>
                      </div>
                    </div>

                    <!-- end col -->
                  </div>
                  <!-- end row -->
                  <div class="row">
                    <!-- Facebook -->
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="facebookNumber">Facebook</label>
                        <div class="input-group">
                          <div class="input-group-prepend">
                            <span class="input-group-text">
                              <i class="fab fa-facebook-square"></i>
                            </span>
                          </div>
                          <input
                            type="text"
                            class="form-control"
                            id="facebookNumber"
                            :placeholder="$t('accountSettings.pleaseFacebook')"
                            v-model="form.facebookNumber"
                            :class="facebookNumberClass"
                            maxlength="20"
                          />
                          <div
                            class="invalid-feedback"
                            :style="facebookNumberMsg != ''  ?'display:block':'display:none'"
                          >{{facebookNumberMsg}}</div>
                        </div>
                      </div>
                    </div>
                    <!-- Twitter -->
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="twitterNumber">Twitter</label>
                        <div class="input-group">
                          <div class="input-group-prepend">
                            <span class="input-group-text">
                              <i class="fab fa-twitter"></i>
                            </span>
                          </div>
                          <input
                            type="text"
                            class="form-control"
                            id="twitterNumber"
                            :placeholder="$t('accountSettings.pleaseTwitter')"
                            v-model="form.twitterNumber"
                            :class="twitterNumberClass"
                            maxlength="20"
                          />
                          <div
                            class="invalid-feedback"
                            :style="twitterNumberMsg != ''  ?'display:block':'display:none'"
                          >{{twitterNumberMsg}}</div>
                        </div>
                      </div>
                    </div>
                    <!-- end col -->
                  </div>
                  <!-- end row -->
                  <!-- 保存按钮 -->
                  <div class="text-right">
                    <button
                      type="submit"
                      class="btn btn-success waves-effect waves-light mt-2"
                      @click="commitForm"
                      v-loading="loadingModal"
                    >
                      <i class="mdi mdi-content-save"></i> 
                      {{ $t('accountSettings.save') }}
                    </button>
                  </div>
                </form>
              </div>
              <!-- 实名认证部分 -->
              <div class="tab-pane active" id="valid" v-if="tabIndex == 1">
                <div class="col-md-12 card-des">
                  <div class="card">
                    <!-- 提示语部分 -->
                    <div class="card-body">
                      <h5 class="card-title">{{ $t('accountSettings.memberPeriod') }}</h5>
                      <p class="card-text">※ {{ $t('accountSettings.completeReview') }}</p>
                      <p class="card-text">※ {{ $t('accountSettings.support') }}</p>
                    </div>
                    <!-- 身份证上传部分 -->
                    <div class="upload-box" @click="openValidModal" v-loading="uploadLoading">
                      <p class="upload-logo h1 text-muted" v-show="userInfo.validUrl ==''">
                        <i class="mdi mdi-cloud-upload"></i>
                      </p>
                      <h3 v-show="userInfo.validUrl ==''">{{ $t('accountSettings.uploadPicture') }}</h3>
                      <img
                        v-show="userInfo.validUrl !=''"
                        class="card-img-bottom img-fluid valid-img"
                        :src="userInfo.validUrl"
                        :alt="$t('accountSettings.realNameVerifiedPicture')"
                        style="object-fit: contain;height: 100%;width: 100%;"
                      />
                      <viewer style="display:none">
                        <img class="review-picture" :src="userInfo.validUrl" />
                      </viewer>
                      <input
                        id="validImgUploader"
                        type="file"
                        accept=".gif, .jpeg, .jpg, .png, .bmp"
                        style="display:none"
                        @change="validImgChange"
                        ref="inputer"
                      />
                    </div>
                    <!-- 提交按钮 -->
                    <div class="text-right" v-show="userInfo.validState !=2">
                      <button
                        type="submit"
                        class="btn btn-success waves-effect waves-light mt-2"
                        @click="commitRealnameValid"
                        :disabled="userInfo.validState == 1"
                        v-loading="loadingModal"
                      >
                        <i class="remixicon-upload-2-line"></i>
                        {{userInfo.validState == 1 ? $t('accountSettings.underReview') : $t('accountSettings.submit')}}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- end settings content-->
            </div>
            <!-- end tab-content -->
          </div>
          <!-- end card-box-->
        </div>
        <!-- end col -->
      </div>
      <!-- end row-->
    </div>
    <!-- container -->
    <!-- 上传图片组件 -->
    <AvatarUpload
      :url="this.GLOBAL.url + 'schedules/web/imgUpload'"
      img-format="jpg"
      img-bgc="#fff"
      v-model="avatarDigLog"
      field="file"
      ki="0"
      @crop-success="cropSuccess"
      @crop-upload-success="cropUploadSuccess"
      @crop-upload-fail="cropUploadFail"
      :no-rotate="false"
      :headers="headers"
    ></AvatarUpload>
    <!-- 更改密码模态框 -->
    <el-dialog
      :visible.sync="updatePassword"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      width="366px"
      :top="updatePasswordModalTop"
      :before-close="beforeUpdateClose"
    >
      <UpdatePassword :class="'max-min-height UpdatePassword'"></UpdatePassword>
    </el-dialog>
  </div>
  <!-- content -->
</template>

<script>
import AvatarUpload from "@components/AvatarUpload";
import UpdatePassword from "@components/UpdatePassword";
export default {
  components: { 
    AvatarUpload, 
    UpdatePassword 
  },
  data() {
    return {
      userInfo: JSON.parse(this.getCookie("currentUser")),
      form: JSON.parse(this.getCookie("currentUser")),
      tabIndex: 0,
      avatarDigLog: false,
      realnameValid: false,
      headers: {},
      updatePassword: false,
      updateUserMobile:false,
      usernameClass: "form-control",
      genderClass: 'form-control',
      genderMsg: '',
      usernameMsg: "",
      phoneClass: "form-control",
      phoneMsg: "",
      emailClass: "form-control",
      emailMsg: "",
      passwordClass: "form-control",
      fullnameClass: "form-control",
      fullnameMsg: "",
      companyPositionClass: "form-control",
      companyPositionMsg: "",
      companyNameClass: "form-control",
      companyNameMsg: "",
      workPhoneClass: "form-control",
      workPhoneMsg: "",
      companySiteClass: "form-control",
      companySiteMsg: "",
      companyAddressClass: "form-control",
      companyAddressMsg: "",
      businessGoodAtClass: "form-control",
      businessGoodAtMsg: "",
      qqNumberClass: "form-control",
      qqNumberMsg: "",
      wechatNumberClass: "form-control",
      wechatNumberMsg: "",
      sinaNumberClass: "form-control",
      sinaNumberMsg: "",
      skypeNumberClass: "form-control",
      skypeNumberMsg: "",
      facebookNumberClass: "form-control",
      facebookNumberMsg: "",
      twitterNumberClass: "form-control",
      twitterNumberMsg: "",
      loadingModal: false,
      valid: true,
      isValid: false,
      uploadLoading: false,
      updatePasswordModalTop: "15vh",
      sexSelect:[
          {
              value: '0',
              labelCn: '男',
              labelEn: 'Male'
          },
          {
              value: '1',
              labelCn: '女',
              labelEn: 'Female'
          },
      ],
      touxUrl: '', // 头像更改传得参数
      simrzUrl: '', //实名认证传得参数
    };
  },
  created() {},
  methods: {
    kankanfrom(from){
      console.log(from, 'kankanfromkankanfromkankanfrom')
    },
    //打开修改密码窗口
    openUpdateUserMobileDialog() {
      let { updateUserMobile } = this;
      this.updateUserMobile = !updateUserMobile;
    },
    //提交实名认证
    commitRealnameValid() {
      var that = this;
      if(!that.userInfo.validUrl){
        that.$message({
          message: that.$t('messages.certification'),
          type: "warning",
          customClass: "base-message-zindex"
        });
        return false;
      }
      if (that.userInfo.validState == 1) {
        that.$message({
          message: that.$t('messages.bePatient'),
          type: "warning",
          customClass: "base-message-zindex"
        });
        return false;
      }
      //更新
      this.updateUserInfo({
        id: that.userInfo.id,
        validUrl: that.simrzUrl,
        validState: 1
      });
    },
    //阻止表单自动提交
    onSubmit() {
      return false;
    },
    //打开头像上传
    openSetAvatarModal() {
      let { avatarDigLog } = this;
      this.avatarDigLog = !avatarDigLog;
      this.headers = {
        Authorization: this.getToken()
      };
    },
    //点击上传实名认证图片
    openValidModal() {
      var that = this;
      if (this.userInfo.validState == 1) {
        this.$message({
          message: that.$t('messages.bePatient'),
          type: "warning",
          customClass: "base-message-zindex"
        });
        return false;
      }
      //如果上传过图片，打开预览
      if (this.userInfo.validState != 0 && this.userInfo.validUrl != "") {
        $(".review-picture").trigger("click");
      }
      if (this.userInfo.validState != 0) {
        return false;
      }
      //手写文件上传
      $("#validImgUploader").val("");
      $("#validImgUploader").trigger("click");
    },
    //图片change事件
    validImgChange(value) {
      var that = this;
      let inputDOM = that.$refs.inputer;
      // 通过DOM取文件数据
      var file = inputDOM.files;
      let len = file.length;
      let size = Math.floor(file[0].size / 1024);
      //验证文件大小
      if (size > 4 * 1024 * 1024) {
        that.$message({
          message: that.$t('messages.belowFM'),
          type: "warning",
          customClass: "base-message-zindex"
        });
        return false;
      }
      //验证文件格式
      var imgType = file[0].name.split(".")[1];
      if (
        [
          "gif",
          "jpeg",
          "jpg",
          "png",
          "bmp",
          "GIF",
          "JPEG",
          "JPG",
          "PNG"
        ].indexOf(imgType) == -1
      ) {
        that.$message({
          message: that.$t('messages.isIncorrect'),
          type: "warning",
          customClass: "base-message-zindex"
        });
        return false;
      }
      //上传图片
      var formData = new FormData();
      formData.append("file", file[0], file[0].name);
      that.uploadLoading = true;
      new Promise(function(resolve, reject) {
        let client = new XMLHttpRequest();
        client.open("POST", that.GLOBAL.url + "schedules/web/imgUpload", true);
        client.setRequestHeader("Authorization", that.getToken());
        client.withCredentials = false;
        client.onreadystatechange = function() {
          if (this.readyState !== 4) {
            return;
          }
          if (this.status === 200 || this.status === 201) {
            resolve(JSON.parse(this.responseText));
          } else {
            reject(this.status);
          }
        };
        // client.upload.addEventListener("progress", uploadProgress, false); //监听进度
        client.send(formData);
      }).then(
        // 上传成功
        function(resData) {
          console.log(resData,'resData')
          console.log(that.GLOBAL.basic_icon + resData.content,'that.GLOBAL.basic_icon + resData.content')
          that.uploadLoading = false;
          that.userInfo.validUrl = that.GLOBAL.basic_icon + resData.content;
          that.form.validUrl = that.GLOBAL.basic_icon + resData.content;
          that.simrzUrl = resData.content
        },
        // 上传失败
        function(sts) {
          that.uploadLoading = false;
          that.$message({
            message: that.$t('messages.uploadFailed'),
            type: "error",
            customClass: "base-message-zindex"
          });
        }
      );
    },
    cropSuccess(data, field, key) {},
    cropUploadSuccess(data, field, key) {
      this.userInfo.avatarUrl = this.GLOBAL.basic_icon + data.content;
      this.$parent.$refs.head.avatarUrl = this.GLOBAL.basic_icon + data.content;
      this.form.avatarUrl = this.GLOBAL.basic_icon + data.content;
      this.touxUrl = data.content
      //更新
      this.updateUserInfo({
        id: this.userInfo.id,
        avatarUrl: this.touxUrl
      });
    },
    cropUploadFail(status, field, key) {},
    //切换标签页
    changeTab(type) {
      if (type == 1) {
        $(".base-info").removeClass("active btn-success");
        $(".realname-valid").addClass("active btn-success");
        this.tabIndex = 1;
      } else if (type == 0) {
        $(".realname-valid").removeClass("active btn-success");
        $(".base-info").addClass("active btn-success");
        this.tabIndex = 0;
      }
    },
    //打开修改密码窗口
    openUpdatePassowrdDialog() {
      let { updatePassword } = this;
      this.updatePassword = !updatePassword;
    },
    //窗口关闭前
    beforeUpdateClose(done) {
      //抓不到css渲染结束事件，这里手动hide，否则点击关闭会再弹出一次
      $(document)
        .find(".el-dialog__wrapper")
        .hide();
      done();
    },
    //提交表单
    commitForm() {
      if (this.validForm(this.form)) {
        
        this.updateUserInfo(this.form);
      }
    },
    //重置表单
    resetForm() {},
    updateUserInfo(data) {
      var that = this;
      this.loadingModal = true
      $.ajax({
        url: that.GLOBAL.url + "schedules/web/updateUserInfo",
        type: "POST",
        headers: {
          Authorization: that.getToken()
        },
        data: data,
        success: function(data) {
          if (data.status == 1) {
            that.$message({
              message: that.$t('messages.savedSuccessfully'),
              type: "success",
              customClass: "base-message-zindex"
            });
            that.$parent.$refs.head.getUserInfo(that.userInfo.id, function() {
              that.userInfo = JSON.parse(that.getCookie("currentUser"));
              that.form = JSON.parse(that.getCookie("currentUser"));
            });
          } else {
            that.$message({
              message: that.$t('messages.saveFailed'),
              type: "error",
              customClass: "base-message-zindex"
            });
          }
          that.loadingModal = false;
        },
        error: function(e) {
          that.loadingModal = false;
        }
      });
    },
    //表单验证
    validForm(form) {
      this.valid = true;
      //用户名
      if (!this.validate.isNull(form.username)) {
        this.usernameMsg = "";
        this.usernameClass = "form-control valid";
      }
      // if(!this.validate.isNull(form.gender)){
      //    if (!this.validate.isPhone(form.gender)) {
      //     this.genderMsg = "请输入性别";
      //     this.genderClass = "form-control invalid";
      //     this.valid = false;
      //     return false;
      //   } else {
      //     this.genderMsg = "";
      //     this.genderClass = "form-control valid";
      //   }
      // }
      //电话号码
      // if (!this.validate.isNull(form.userMobile)) {
      //   if (!this.validate.isPhone(form.userMobile)) {
      //     this.phoneMsg = "请输入正确的手机号";
      //     this.phoneClass = "form-control invalid";
      //     this.valid = false;
      //     return false;
      //   } else {
      //     this.phoneMsg = "";
      //     this.phoneClass = "form-control valid";
      //   }
      // }
      if (!this.validate.isNull(form.userMobile)){
        this.phoneMsg = "";
        this.phoneClass = "form-control valid";
      }
      //邮箱
      if (!this.validate.isNull(form.email)) {
        if (!this.validate.isEmail(form.email)) {
          this.emailMsg = "请输入正确的邮箱";
          this.emailClass = "form-control invalid";
          this.valid = false;
          return false;
        } else {
          this.emailMsg = "";
          this.emailClass = "form-control valid";
        }
      }
      //密码
      this.passwordClass = "form-control valid";
      //真实姓名
      if (!this.validate.isNull(form.fullname)) {
        this.fullnameMsg = "";
        this.fullnameClass = "form-control valid";
      }
      //公司职位，这里感觉应该用下拉框啊
      if (!this.validate.isNull(form.companyPosition)) {
        this.companyPositionClass = "form-control valid";
        this.companyPositionMsg = "";
      }

      //公司名称
      if (!this.validate.isNull(form.companyName)) {
        this.companyNameClass = "form-control valid";
        this.companyNameMsg = "";
      }
      //办公电话
      if (!this.validate.isNull(form.workPhone)) {
        if (
          !this.validate.isPhone(form.workPhone) &&
          !this.validate.isWorkPhone(form.workPhone)
        ) {
          this.workPhoneMsg = "请输入正确的办公电话";
          this.workPhoneClass = "form-control invalid";
          this.valid = false;
          return false;
        } else {
          this.workPhoneMsg = "";
          this.workPhoneClass = "form-control valid";
        }
      }
      //公司官网
      if (!this.validate.isNull(form.companySite)) {
        this.companySiteClass = "form-control valid";
        this.companySiteMsg = "";
      }
      //公司地址
      if (!this.validate.isNull(form.companyAddress)) {
        this.companyAddressClass = "form-control valid";
        this.companyAddressMsg = "";
      }
      //擅长业务
      if (!this.validate.isNull(form.businessGoodAt)) {
        this.businessGoodAtClass = "form-control valid";
        this.businessGoodAtMsg = "";
      }
      // qq号
      if (!this.validate.isNull(form.qqNumber)) {
        this.qqNumberClass = "form-control valid";
        this.qqNumberMsg = "";
      }
      // 微信号
      if (!this.validate.isNull(form.wechatNumber)) {
        this.wechatNumberClass = "form-control valid";
        this.wechatNumberMsg = "";
      }
      //微博号
      if (!this.validate.isNull(form.sinaNumber)) {
        this.sinaNumberClass = "form-control valid";
        this.sinaNumberMsg = "";
      }
      //skype号
      if (!this.validate.isNull(form.skypeNumber)) {
        this.skypeNumberClass = "form-control valid";
        this.skypeNumberMsg = "";
      }
      //脸书号
      if (!this.validate.isNull(form.facebookNumber)) {
        this.facebookNumberClass = "form-control valid";
        this.facebookNumberMsg = "";
      }
      //推特号
      if (!this.validate.isNull(form.twitterNumber)) {
        this.twitterNumberClass = "form-control valid";
        this.twitterNumberMsg = "";
      }
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
  },
  mounted() {
    //浏览器窗口大小兼容处理
    var that = this;
    $(window).resize(function() {
      that.updatePasswordModalTop = (window.innerHeight - 556.97) / 2 + "px";
      that.reviewPicModalTop = (window.innerHeight - 550) / 2 + "px";
      $(".container-fluid").css(
        "min-height",
        window.innerHeight - 50 - 123 + "px"
      );
    });
    $(window).resize();
  }
};
</script>
