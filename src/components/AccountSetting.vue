

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
  cursor: pointer;
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

.download-template .img-fluid {
  height: 236px;
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
  // .el-dialog__footer {
  //   bottom: -605px;
  //   position: absolute;
  //   right: 45%;
  // }
  .el-dialog__body {
    // height: 520px;
    // width: 860px;
    padding: 0 !important;
  }
}
</style>
<template>
  <!-- Start Content-->
  <div class="download-template content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-4 col-xl-4">
          <div class="card-box text-center">
            <img
              :src="userInfo.avatarUrl == '' ? require('../assets/images/default_user.jpg'):userInfo.avatarUrl"
              class="rounded-circle avatar-xl img-thumbnail"
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
              >{{userInfo.validState == 0 ?'未认证':userInfo.validState == 2 ?'已认证':''}}</u>
            </p>
            <!-- <button type="button" class="btn btn-success btn-xs waves-effect mb-2 waves-light">关注</button>
            <button type="button" class="btn btn-danger btn-xs waves-effect mb-2 waves-light">私信</button>-->

            <div class="text-left mt-3">
              <!-- <h4 class="font-13 text-uppercase">关于我 :</h4>
              <p class="text-muted font-13 mb-3">{{userInfo.aboutMe}}</p>-->
              <p class="text-muted mb-2 font-13">
                <strong>真实姓名 :</strong>
                <span class="ml-2">{{userInfo.fullname}}</span>
              </p>

              <p class="text-muted mb-2 font-13">
                <strong>手机号码 :</strong>
                <span class="ml-2">{{userInfo.phone}}</span>
              </p>

              <p class="text-muted mb-2 font-13">
                <strong>邮箱地址 :</strong>
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

        <div class="col-lg-8 col-xl-8">
          <div class="card-box">
            <ul class="nav nav-pills navtab-bg">
              <li class="nav-item" @click="changeTab(0)">
                <a
                  href="javascript: void(0);"
                  data-toggle="tab"
                  aria-expanded="false"
                  class="base-info nav-link active btn-success waves-effect waves-light"
                >
                  <i class="mdi mdi-settings-outline mr-1"></i>基本信息
                </a>
              </li>
              <li class="nav-item" @click="changeTab(1)">
                <a
                  href="javascript: void(0);"
                  data-toggle="tab"
                  aria-expanded="true"
                  class="realname-valid nav-link ml-0 waves-effect waves-light"
                >
                  <i class="mdi mdi-face-profile mr-1"></i>实名认证
                </a>
              </li>
              <li class="nav-item" style="float: right;position: absolute;right: 34px;">
                <p
                  href="javascript: void(0);"
                  data-toggle="tab"
                  aria-expanded="true"
                  class="user-invide-code nav-link active btn-success waves-effect waves-light"
                >您的邀请码：{{userInfo.inviteCode}}</p>
              </li>
            </ul>

            <div class="tab-content">
              <div class="tab-pane active" id="settings" v-if="tabIndex == 0">
                <form autocomplete="off" @submit.prevent="onSubmit" class="userInfoForm">
                  <h5 class="mb-3 text-uppercase bg-light p-2">
                    <i class="mdi mdi-account-circle mr-1"></i> 个人信息
                  </h5>

                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="username">用户名</label>
                        <input
                          type="text"
                          class="form-control"
                          id="username"
                          placeholder="请输入用户名"
                          v-model="form.username"
                          :class="usernameClass"
                          maxlength="6"
                        />
                        <div
                          class="invalid-feedback"
                          :style="usernameMsg != ''  ?'display:block':'display:none'"
                        >{{usernameMsg}}</div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="phone">电话号码</label>
                        <input
                          type="text"
                          class="form-control"
                          id="phone"
                          placeholder="请输入电话号码"
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
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="email">邮箱地址</label>
                        <input
                          type="text"
                          class="form-control"
                          id="email"
                          placeholder="请输入邮箱地址"
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
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="password">密码</label>
                        <input
                          type="password"
                          class="form-control"
                          id="password"
                          placeholder="请输入密码"
                          readonly
                          value="12345678"
                          :class="passwordClass"
                        />
                        <span class="form-text text-muted">
                          <small>
                            如果您想修改密码请
                            <a 
                              class="ship-a"
                              href="javascript: void(0);"
                              @click="openUpdatePassowrdDialog"
                            >点击</a> 这里.
                          </small>
                        </span>
                      </div>
                    </div>
                  </div>
                  <!-- end row -->

                  <h5 class="mb-3 text-uppercase bg-light p-2">
                    <i class="mdi mdi-office-building mr-1"></i> 公司信息
                    <span
                      :class="userInfo.validState == 2 ?'form-company-validstated':'form-company-validstate'"
                      v-show="userInfo.validState == 0 || userInfo.validState == 2"
                      @click="changeTab(1)"
                    >
                      <i v-show="userInfo.validState == 0" class="remixicon-error-warning-line">未认证</i>
                      <i v-show="userInfo.validState == 2" class="remixicon-vip-crown-2-fill">已认证</i>
                    </span>
                  </h5>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="fullname">真实姓名</label>
                        <input
                          type="text"
                          class="form-control"
                          id="fullname"
                          placeholder="请输入真实姓名"
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
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="companyPosition">公司职位</label>
                        <input
                          type="text"
                          class="form-control"
                          id="companyPosition"
                          placeholder="请输入公司职位"
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
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="companyName">公司名称</label>
                        <input
                          type="text"
                          class="form-control"
                          id="companyName"
                          placeholder="请输入公司名称"
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
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="workPhone">办公电话</label>
                        <input
                          type="text"
                          class="form-control"
                          id="workPhone"
                          placeholder="请输入办公电话"
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
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="companySite">公司网址</label>
                        <input
                          type="text"
                          class="form-control"
                          id="companySite"
                          placeholder="请输入公司网址"
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
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="companyAddress">公司地址</label>
                        <input
                          type="text"
                          class="form-control"
                          id="companyAddress"
                          placeholder="请输入公司地址"
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
                    <div class="col-12">
                      <div class="form-group">
                        <label for="businessGoodAt">业务优势</label>
                        <textarea
                          class="form-control"
                          id="businessGoodAt"
                          rows="4"
                          placeholder="请输入业务优势"
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

                  <h5 class="mb-3 text-uppercase bg-light p-2">
                    <i class="mdi mdi-earth mr-1"></i> 社交信息
                  </h5>

                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="qqNumber">QQ</label>
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
                            placeholder="请输入QQ号"
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
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="wechatNumber">微信</label>
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
                            placeholder="请输入微信号"
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
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="sinaNumber">微博</label>
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
                            placeholder="请输入微博号"
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
                            placeholder="请输入Skype号"
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
                            placeholder="请输入Facebook号"
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
                            placeholder="请输入Twitter号"
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
                  <div class="text-right">
                    <button
                      type="submit"
                      class="btn btn-success waves-effect waves-light mt-2"
                      @click="commitForm"
                      v-loading="loadingModal"
                    >
                      <i class="mdi mdi-content-save"></i> 保存
                    </button>
                  </div>
                </form>
              </div>
              <div class="tab-pane active" id="valid" v-if="tabIndex == 1">
                <div class="col-md-12 card-des">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">实名认证：您的特权身份证；通过企业实名，您可以额外获得60的会员使用期限</h5>
                      <p class="card-text">※ 请上传您的名片或工作牌或企业营业执照副本扫描件，我们将在一个工作日以内与您取得联系并完成审核。</p>
                      <p class="card-text">※ 支持GIF/JPEG/PNG/BMP格式,最大支持4M</p>
                    </div>
                    <div class="upload-box" @click="openValidModal" v-loading="uploadLoading">
                      <p class="upload-logo h1 text-muted" v-show="userInfo.validUrl ==''">
                        <i class="mdi mdi-cloud-upload"></i>
                      </p>
                      <h3 v-show="userInfo.validUrl ==''">点击上传图片</h3>
                      <img
                        v-show="userInfo.validUrl !=''"
                        class="card-img-bottom img-fluid valid-img"
                        :src="userInfo.validUrl"
                        alt="实名认证图片"
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
                    <div class="text-right" v-show="userInfo.validState !=2">
                      <button
                        type="submit"
                        class="btn btn-success waves-effect waves-light mt-2"
                        @click="commitRealnameValid"
                        :disabled="userInfo.validState == 1"
                        v-loading="loadingModal"
                      >
                        <i class="remixicon-upload-2-line"></i>
                        {{userInfo.validState == 1 ? '正在审核':'提交实名认证'}}
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
    <el-dialog
      :visible.sync="updatePassword"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      width="384px"
      :top="updatePasswordModalTop"
      :before-close="beforeUpdateClose"
    >
      <UpdatePassword :class="'max-min-height'"></UpdatePassword>
    </el-dialog>
  </div>
  <!-- content -->
</template>

<script>
import AvatarUpload from "@components/AvatarUpload";
import UpdatePassword from "@components/UpdatePassword";
export default {
  name: "AccountSetting",
  page: {
    title: "账户设置",
    meta: [{ name: "账户设置", content: `账户设置` }]
  },
  components: { AvatarUpload, UpdatePassword },
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
      updatePasswordModalTop: "15vh"
    };
  },
  created() {},
  computed: {},
  methods: {
    //打开修改密码窗口
    openUpdateUserMobileDialog() {
      let { updateUserMobile } = this;
      this.updateUserMobile = !updateUserMobile;
    },
    //提交实名认证
    commitRealnameValid() {
      if(!this.userInfo.validUrl){
        this.$message({
          message: "请上传认证图片！",
          type: "warning",
          customClass: "base-message-zindex"
        });
        return false;
      }
      if (this.userInfo.validState == 1) {
        this.$message({
          message: "正在审核阶段，请耐心等待！",
          type: "warning",
          customClass: "base-message-zindex"
        });
        return false;
      }
      //更新
      this.updateUserInfo({
        id: this.userInfo.id,
        validUrl: this.form.validUrl,
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
      if (this.userInfo.validState == 1) {
        this.$message({
          message: "正在审核阶段，请耐心等待！",
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
          message: "请选择4M以下的图片",
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
          message: "图片格式不正确",
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
          that.uploadLoading = false;
          that.userInfo.validUrl = "http://" + resData.content;
          that.form.validUrl = "http://" + resData.content;
        },
        // 上传失败
        function(sts) {
          that.uploadLoading = false;
          that.$message({
            message: "上传失败",
            type: "error",
            customClass: "base-message-zindex"
          });
        }
      );
    },
    cropSuccess(data, field, key) {},
    cropUploadSuccess(data, field, key) {
      this.userInfo.avatarUrl = "http://" + data.content;
      this.$parent.$refs.head.avatarUrl = "http://" + data.content;
      this.form.avatarUrl = "http://" + data.content;
      //更新
      this.updateUserInfo({
        id: this.userInfo.id,
        avatarUrl: this.form.avatarUrl
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
      this.loadingModal = true;
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
              message: "保存成功",
              type: "success",
              customClass: "base-message-zindex"
            });
            that.$parent.$refs.head.getUserInfo(that.userInfo.id, function() {
              that.userInfo = JSON.parse(that.getCookie("currentUser"));
              that.form = JSON.parse(that.getCookie("currentUser"));
            });
          } else {
            that.$message({
              message: "保存失败",
              type: "error",
              customClass: "base-message-zindex"
            });
          }
          that.loadingModal = false;
        },
        error: function(e) {
          that.$message({
            message: "服务器异常",
            type: "error",
            customClass: "base-message-zindex"
          });
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
      //电话号码
      if (!this.validate.isNull(form.phone)) {
        if (!this.validate.isPhone(form.phone)) {
          this.phoneMsg = "请输入正确的手机号";
          this.phoneClass = "form-control invalid";
          this.valid = false;
          return false;
        } else {
          this.phoneMsg = "";
          this.phoneClass = "form-control valid";
        }
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
  watch: {},
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
