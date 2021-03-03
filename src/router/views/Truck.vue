<style lang="scss" scoped>
#truck {
}
.roadLoading {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  z-index: 2000;
  .loading_div {
    padding: 15px 24px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    background: rgba(7, 44, 76, 0.8);
  }
  .loding_icon {
    font-size: 18px;
    color: #fff;
  }
  .icon_p {
    font-size: 14px;
    margin-left: 10px;
    color: #fff;
  }
}
.Truck {
  position: relative;
  overflow: hidden;
}
.road_main {
  position: relative;
  background: #fff;
  display: flex;
  overflow: hidden;
  .road_left {
    width: 370px;
    height: 40px;
    background-color: #fff;
    border-radius: 6px;
    overflow: hidden;
    position: absolute;
    left: 20px;
    top: 27px;
    z-index: 2;
    display: flex;
    align-items: center;
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);
    z-index: 150;
    .el-input {
      height: 40px;
      width: 82%;
    }
    .el-input__inner {
      border-radius: 6px;
      padding-right: 20px !important;
      padding-left: 19px !important;
      cursor: text;
    }
    .el-input__suffix {
      right: 1px !important;
    }
    .searchBtn {
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #072c4c;
    }
    .search_btn {
      font-size: 16px;
      cursor: pointer;
    }
    .iconLeft {
      position: absolute;
      width: 38px;
      height: 38px;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      display: flex;
      align-items: center;
      cursor: pointer;
      .icon_jian {
        font-size: 20px;
        color: #072c4c;
        margin-right: 9px;
      }
      .icon_line {
        width: 1px;
        height: 20px;
        background-color: #f2f2f2;
        margin-right: 5px;
      }
    }
  }
  .road_content {
    position: absolute;
    width: 370px;
    min-height: 300px;
    left: 20px;
    top: 76px;
    overflow: hidden;
    background-color: #fff;
    border-radius: 6px;
    box-shadow: 0px 8px 40px 0px rgba(0, 0, 0, 0.2);
    z-index: 150;
  }
  .scottMap {
    width: 100%;
    height: 100%;
  }
}
.agreement {
  position: absolute;
  width: 370px;
  height: 539px;
  left: 20px;
  top: 27px;
  overflow: hidden;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);
  .age_h_title {
    width: 100%;
    height: 46px;
    line-height: 46px;
    background: rgba(7, 44, 76, 0.8);
    color: #fff;
    text-align: center;
    font-size: 14px;
  }
  .zhuyi {
    width: 100%;
    height: 34px;
    line-height: 34px;
    color: #ff7676;
    text-align: center;
    font-size: 14px;
  }
  .agree_main {
    height: 366px;
    background-color: #f2f2f2;
    border-radius: 6px;
    margin-left: 20px;
    margin-right: 20px;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 10px;
    p {
      font-size: 14px;
      text-indent: 20px;
      line-height: 21px;
    }
  }
  .yuedu {
    margin-left: 20px;
    margin-top: 10px;
    .el-checkbox__input.is-checked .el-checkbox__inner,
    .el-checkbox__input.is-indeterminate .el-checkbox__inner {
      background-color: #282828;
      border-color: #282828;
    }
    .el-checkbox__input.is-checked + .el-checkbox__label {
      color: #282828;
    }
  }
  .agre_bottom {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    .agre_btn1 {
      width: 130px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      font-size: 14px;
      border-radius: 15px;
      border: solid 1px #f2f2f2;
      color: #909090;
      margin-right: 30px;
      cursor: pointer;
      &:hover {
        background: #f2f2f2;
      }
    }
    .agre_btn2 {
      width: 130px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      font-size: 14px;
      background-color: #072c4c;
      border-radius: 15px;
      color: #fff;
      cursor: pointer;
      &:hover {
        background: #395670;
      }
    }
  }
}
.chaxjl {
  position: absolute;
  width: 370px;
  left: 20px;
  top: 76px;
  height: 124px;
  background-color: #ffffff;
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);
  border-radius: 6px;
  padding: 20px 20px 10px 20px;
  z-index: 151;
  .his_h {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    .his_g {
      width: 3px;
      height: 14px;
      background-color: #072c4c;
      margin-right: 10px;
    }
    .his_cha {
      font-size: 14px;
      color: #282828;
      font-weight: 600;
    }
  }
  .his_main {
    padding-left: 10px;
    display: flex;
    align-content: center;
    flex-wrap: wrap;
    .his_li {
      width: 100px;
      height: 26px;
      line-height: 26px;
      text-align: center;
      background-color: #f2f2f2;
      color: #909090;
      border-radius: 16px;
      margin-right: 10px;
      margin-bottom: 10px;
      padding: 0 10px;
      cursor: pointer;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      word-break: break-all;
    }
    .his_li:nth-child(3n) {
      margin-right: 0;
    }
  }
}
.posiDetails {
  width: 800px;
  height: 438px;
  background-color: #ffffff;
  border-radius: 6px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  z-index: 150;
  .posi_title {
    height: 32px;
    display: flex;
    justify-content: space-between;
    padding: 20px 20px 0px 21px;
    margin-bottom: 12px;
    cursor: move;
    .title_p {
      color: #282828;
      font-size: 14px;
      font-weight: 600;
    }
    .icon_delect {
      font-size: 14px;
      cursor: pointer;
    }
  }
  .posi_table {
    padding: 10px 20px 0px 20px;
  }
  .el-table td,
  .el-table th {
    height: 40px !important;
    padding: 0 !important;
    color: #282828;
    font-size: 12px !important;
  }
  .el-table td,
  .el-table th.is-leaf {
    border-bottom: 1px solid #f2f2f2;
  }
  .pagination {
    padding: 10px 20px 0px 20px;
  }
}
.customYISClass {
  width: 504px;
  height: 110px;
  overflow: hidden;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  margin-top: 0 !important;
  .footer {
    width: 100%;
    height: 24px;
    text-align: center;
  }
  .closeButton {
    font-size: 14px;
    color: #909090;
    position: absolute;
    right: 14px;
    top: 14px;
    cursor: pointer;
  }
}
</style>
<style lang="scss">
.road_left {
  .el-input__inner {
    border: none !important;
  }
}
</style>
<template>
  <div id="truck">
    <!-- 航线页面 -->
    <div class="Truck" @click="hideHis()">
      <div class="roadLoading" v-if="loading">
        <div class="loading_div">
          <i class="el-icon-loading loding_icon"></i>
          <p class="icon_p">{{ $t("route.dataLoading") }}</p>
        </div>
      </div>
      <div
        class="road_main"
        :style="{ width: styleWidth, height: styleHeight }"
      >
        <div class="road_left" id="road_left" v-show="isAgreXie">
          <el-input
            v-model="vclN"
            :placeholder="$t('ScottMap.frame')"
            clearable
            @focus="focuesVcln"
            @blur="blurVcln"
            @keyup.enter.native="searchLicense(vclN)"
          ></el-input>
          <div class="searchBtn">
            <i
              class="el-icon-search search_btn"
              @click="searchLicense(vclN)"
            ></i>
          </div>
          <div class="iconLeft">
            <p class="icon_line"></p>
            <i
              class="el-icon-caret-left icon_jian"
              id="icon_jian"
              @click="plate()"
            ></i>
          </div>
        </div>
        <!-- 地图信息 -->
        <div
          class="scottMap"
          :style="{ width: styleWidth, height: styleHeight }"
        >
          <ScottMap :vehicleList="vehicleList"></ScottMap>
        </div>
        <!-- 集卡信息 -->
        <div
          class="road_content"
          :style="{ maxHeight: inforHeight }"
          v-if="isRoadInf"
          id="road_content"
        >
          <RoadInfor
            :vehicleList="vehicleList"
            @showAdrres="showAdrres"
          ></RoadInfor>
        </div>

        <!-- 位置明细 -->
        <div class="posiDetails" v-drag v-if="isPosiDe">
          <div class="posi_title" id="posi_title" @mousedown="clickPosition">
            <p class="title_p" id="title_p">{{ $t("ScottMap.pos_de") }}</p>
            <i class="el-icon-close icon_delect" @click="closePoD()"></i>
          </div>
          <div class="posi_table">
            <el-table
              :data="tableData"
              :header-cell-style="{
                background: '#f2f2f2',
                color: '#282828',
                fontSize: '14px',
              }"
              style="width: 100%"
              height="320"
            >
              <el-table-column
                type="index"
                fixed
                :label="$t('ScottMap.serial')"
                width="50"
              >
              </el-table-column>
              <el-table-column
                prop="time"
                :label="$t('ScottMap.updateTime')"
                width="142"
              >
              </el-table-column>
              <el-table-column
                prop="gps"
                :label="$t('ScottMap.GPMileage')"
                width="120"
              >
                <template slot-scope="scope">
                  {{ scope.row.gps ? scope.row.gps + $t("ScottMap.km") : "" }}
                </template>
              </el-table-column>
              <el-table-column
                prop="speed"
                :label="$t('ScottMap.speeds')"
                width="120"
              >
                <template slot-scope="scope">
                  {{ scope.row.speed ? scope.row.speed + "km/h" : "" }}
                </template>
              </el-table-column>
              <el-table-column
                prop="localMsg"
                :label="$t('ScottMap.posiDes')"
                min-width="550"
                :show-overflow-tooltip="true"
              >
              </el-table-column>
            </el-table>
          </div>
          <!--分页-->
          <div class="pagination">
            <el-pagination
              background
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page.sync="page.pageNo"
              :page-size="page.pageSize"
              :page-sizes="[10, 20, 30, 50]"
              :total="page.total"
              layout="total, sizes, next, pager, prev"
              ref="pagination"
            ></el-pagination>
          </div>
        </div>

        <!-- 历史查询记录 -->
        <div
          class="chaxjl"
          v-if="isHisSe"
          @mouseenter="mouseenter"
          @mouseleave="mouseleave"
        >
          <div class="his_h">
            <p class="his_g"></p>
            <p class="his_cha">{{ $t("ScottMap.queryLog") }}</p>
          </div>
          <ul class="his_main">
            <li
              v-for="(item, index) in history_s"
              :key="index"
              class="his_li"
              @click="hisClick(item)"
              v-title="item"
            >
              {{ item }}
            </li>
          </ul>
        </div>

        <!-- 隐私协议 -->
        <div class="agreement" v-if="isAgreement">
          <div class="age_h_title">{{ $t("ScottMap.stCard") }}</div>
          <div class="zhuyi">{{ $t("ScottMap.Attention") }}</div>
          <div class="agree_main">
            <p>{{ $t("ScottMap.p1") }}</p>
            <p>{{ $t("ScottMap.p2") }}</p>
            <p>{{ $t("ScottMap.p3") }}</p>
            <p>{{ $t("ScottMap.p4") }}</p>
            <p>{{ $t("ScottMap.p5") }}</p>
            <p>{{ $t("ScottMap.p6") }}</p>
            <p>{{ $t("ScottMap.p7") }}</p>
          </div>
          <div class="yuedu">
            <el-checkbox v-model="isAgreet">{{
              $t("ScottMap.agreeTi")
            }}</el-checkbox>
          </div>
          <div class="agre_bottom">
            <div class="agre_btn1" @click="jujue">
              {{ $t("ScottMap.refused") }}
            </div>
            <div class="agre_btn2" @click="tongyi">
              {{ $t("ScottMap.agree") }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <el-dialog
      :visible.sync="isShipShow"
      custom-class="customYISClass"
      center
      :show-close="false"
    >
      <i class="el-icon-close closeButton" @click="jika"></i>
      <div
        style="
          width: 100%;
          text-align: center;
          margin-bottom: 14px;
          margin-top: 7px;
          font-size: 16px;
          color: #282828;
        "
      >
        {{ $t("ScottMap.noAgree")
        }}<span style="color: #007ce3; cursor: pointer" @click="jika">{{
          $t("ScottMap.userCard")
        }}</span
        >{{ $t("ScottMap.services") }}
      </div>
      <div class="footer">
        <el-button
          type="primary"
          @click="jika"
          style="
            font-size: 12px;
            width: 90px;
            height: 24px;
            line-height: 1px;
            color: #909090;
            border: 1px solid #d1d1d1 !important;
            background: #fff;
            margin-right: 20px;
            border-radius: 20px;
            cursor: pointer;
          "
          >{{ $t("ScottMap.cancel") }}</el-button
        >
        <el-button
          type="primary"
          @click="jika"
          style="
            font-size: 12px;
            width: 90px;
            height: 24px;
            line-height: 1px;
            color: #fff;
            background: #072c4c;
            border-radius: 20px;
            cursor: pointer;
          "
          >{{ $t("ScottMap.toAgree") }}</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
import ScottMap from "@components/ScottMap/ScottMap";
import RoadInfor from "@components/ScottMap/RoadInfor";
export default {
  page: {
    title: "集卡",
  },
  data() {
    return {
      loading: false,
      styleWidth: "", //可视区宽度
      styleHeight: "", //可视区高度
      isPlate: false, //显示和隐藏
      inforHeight: "",
      existToken: "",

      //隐私协议
      isAgreet: false, //是否要签署隐私协议
      isAgreement: false, //是否显示隐私协议
      isShipShow: false, //隐私协议拒绝弹窗
      isAgreXie: false, //是否同意了隐私协议

      //集卡信息窗口
      vclN: "", //车牌号/车架号
      isRoadInf: false,
      vehicleList: [], //多条车辆信息

      //位置明细
      isPosiDe: false, //是否显示位置明细
      tableData: [],
      isVcIn: "", //当前点击的位置信息明细的车牌号

      //分页默认状态
      page: {
        // 当前页数
        pageNo: 1,
        // 每页默认显示条数
        pageSize: 10,
        // 总条数
        total: 0,
      },

      //查询记录
      isHisSe: false, //查询记录显示
      history_s: [], //查询记录列表
      isEnter: false, // 是否取消查询记录显示
      isHEn: false, //是否进入查询记录里
      truckNo: "", // 车牌号
    };
  },
  //注册局部组件指令
  directives: {
    drag: function (el) {
      let dragBox = el; //获取当前元素
      dragBox.onmousedown = (e) => {
        var id = e.target.id;
        if (id == "posi_title") {
          e.preventDefault();
          e.stopPropagation();
          //算出鼠标相对元素的位置
          let disX = e.clientX - dragBox.offsetLeft;
          let disY = e.clientY - dragBox.offsetTop;
          document.onmousemove = (e) => {
            //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
            let left = e.clientX - disX;
            let top = e.clientY - disY;
            //移动当前元素
            dragBox.style.left = left + "px";
            dragBox.style.top = top + "px";
          };
          document.onmouseup = (e) => {
            e.preventDefault();
            e.stopPropagation();
            //鼠标弹起来的时候不再移动
            document.onmousemove = null;
            //预防鼠标弹起来后还会循环（即预防鼠标放上去的时候还会移动）
            document.onmouseup = null;
          };
        }
      };
    },
  },
  components: {
    ScottMap,
    RoadInfor,
  },
  methods: {
    //focues
    focuesVcln() {
      //查询记录出现  集卡信息消失
      this.isEnter = true;
      this.isHisSe = true;
    },
    blurVcln() {
      if (!this.isHEn) {
        this.isEnter = false;
      }
    },
    //隐藏查询记录
    hideHis() {
      if (!this.isEnter) {
        this.isHisSe = false;
        this.isHEn = false;
      }
    },
    mouseenter() {
      this.isHEn = true;
      this.isEnter = true;
    },
    mouseleave() {
      this.isHEn = false;
      this.isEnter = false;
    },
    //点击查询记录
    hisClick(item) {
      //调取集卡信息
      this.vclN = item;
      this.searchLicense(item);
    },
    //调取的查询记录
    initQuery() {
      var that = this;
      this.$Axios
        .get(that.GLOBAL.url + `truck/iframe/userQueryLog`, {
          headers: {
            Authorization: this.getToken(),
          },
        })
        .then((res) => {
          if (res.data.status == 1) {
            if (res.data.content) {
              //有值
              that.history_s = res.data.content.split(",");
            } else {
              that.history_s = [];
            }
          }
        });
    },
    //存查询记录
    setQuery(item) {
      var that = this;
      this.$Axios
        .get(
          that.GLOBAL.url + `truck/iframe/updateUserQueryLog?queryLog=${item}`,
          {
            headers: {
              Authorization: this.getToken(),
            },
          }
        )
        .then((res) => {
          if (res.data.status == 1) {
            that.initQuery();
          }
        });
    },
    //搜索车牌
    searchLicense(item) {
      var val = item.trim();
      //每次搜索顶掉上次搜索的信息
      //粤BHK663
      var that = this;
      if (val) {
        that.loading = true;
        that.isHisSe = false;
        that.isEnter = false;
        that.isHEn = false;
        that.isPosiDe = false;
        that.tableData = [];
        //获取数据
        this.$Axios
          .get(that.GLOBAL.url + `truck/iframe/getVclNWeb?vclN=${val}`, {
            headers: {
              Authorization: this.getToken(),
            },
          })
          .then((res) => {
            if (res.data.status == 1) {
              //成功
              var newObej = {
                isExist: res.data.content.isExist,
                mileageMsg: res.data.content.mileageMsg,
                positionInfo: res.data.content.positionInfo,
                track24s: res.data.content.track24s
                  ? res.data.content.track24s
                  : [],
                truckNo: res.data.content.truckNo,
              };
              that.vehicleList.splice(0, 1, newObej);
              that.isRoadInf = true;
              that.loading = false;
            } else if (res.data.status == 1000) {
              //车辆未入网
              that.$message({
                message: res.data.message,
                type: "error",
                customClass: "base-message-zindex",
              });
              var newObej = {
                isExist: false,
                mileageMsg: "",
                positionInfo: "",
                track24s: [],
                truckNo: val,
              };
              that.vehicleList.splice(0, 1, newObej);
              that.isRoadInf = false;
              that.loading = false;
            }
          });
        //存查询记录
        that.setQuery(val);
      } else {
        this.vclN = "";
        that.$message({
          message: that.$t("ScottMap.License"),
          type: "error",
          customClass: "base-message-zindex",
        });
      }
    },
    /**窗口改变 这个页面的布局页改变**/
    getResize() {
      var that = this;
      if (document.documentElement.clientWidth < 1200) {
        that.styleWidth = 1200 + "px";
      } else {
        that.styleWidth = document.documentElement.clientWidth + "px";
      }
      if (document.documentElement.clientHeight < 0) {
        that.styleHeight = 0 + "px";
      } else {
        that.styleHeight = document.documentElement.clientHeight + "px";
      }
      that.inforHeight = document.documentElement.clientHeight - 10 - 76 + "px";
      window.onresize = () => {
        return (() => {
          if (document.documentElement.clientWidth < 1200) {
            that.styleWidth = 1200 + "px";
          } else {
            that.styleWidth = document.documentElement.clientWidth + "px";
          }
          if (document.documentElement.clientHeight < 0) {
            that.styleHeight = 0 + "px";
          } else {
            that.styleHeight = document.documentElement.clientHeight + "px";
          }
          that.inforHeight =
            document.documentElement.clientHeight - 10 - 76 + "px";
        })();
      };
    },

    //判断用户是否签署了隐私协议
    signAgreement() {
      var that = this;
      that.loading = true;
      this.$Axios
        .get(that.GLOBAL.url + `truck/iframe/userAuthen`, {
          headers: {
            Authorization: this.getToken(),
          },
        })
        .then((res) => {
          if (res.data.status == 1) {
            that.loading = false;
            if (res.data.content.authen == 1) {
              //签署隐私协议
              that.isAgreement = false;
              that.initQuery();
              that.isAgreXie = true;
              if (this.truckNo) {
                // 如果传了参数自动查询一次
                this.searchLicense(this.truckNo);
              }
            } else {
              //未签署隐私协议
              that.isAgreement = true;
              that.isAgreXie = false;
            }
          }
        })
        .catch((error) => {
          that.loading = false;
          if (error.response.status == 403) {
            that.$message({
              message: that.$t("messages.contactAdmin"),
              type: "error",
              customClass: "base-message-zindex",
            });
          }
          if (error.response.status == 401) {
            that.$message({
              message: that.$t("messages.accessFail"),
              type: "error",
              customClass: "base-message-zindex",
            });
          }
        });
    },
    //点击集卡定位隐私协议 或者去同意
    jika() {
      this.isAgreement = true;
      this.isShipShow = false;
    },
    //隐私拒绝
    jujue() {
      this.isAgreement = false;
      this.isShipShow = true;
    },
    //隐私同意
    tongyi() {
      var that = this;
      if (!that.isAgreet) {
        //没有点击同意
        that.$message({
          message: that.$t("ScottMap.selectAgreet"),
          type: "error",
          customClass: "base-message-zindex",
        });
        return;
      }

      //同意协议
      that.loading = true;

      this.$Axios
        .get(that.GLOBAL.url + `truck/iframe/userSign`, {
          headers: {
            Authorization: this.getToken(),
          },
        })
        .then((res) => {
          if (res.data.status == 1) {
            that.loading = false;
            that.isAgreement = false;
            that.isAgreXie = true;
          }
        })
        .catch((error) => {
          that.loading = false;
          if (error.response.status == 403) {
            that.$message({
              message: that.$t("messages.contactAdmin"),
              type: "error",
              customClass: "base-message-zindex",
            });
          }
        });
    },
    // 隐藏 和 显示
    plate() {
      this.isPlate = !this.isPlate;
      //收起
      if (this.isPlate) {
        $("#road_left").animate(
          {
            left: "-329px",
          },
          800
        );
        // 箭头旋转180
        $("#icon_jian").css(
          {
            transform: "rotate(180deg)",
          },
          800
        );

        $("#road_content").animate(
          {
            left: "-380px",
          },
          800
        );
      } else {
        //展开
        $("#road_left").animate(
          {
            left: "20px",
          },
          800
        );

        $("#icon_jian").css(
          {
            transform: "rotate(0deg)",
          },
          800
        );
        $("#road_content").animate(
          {
            left: "20px",
          },
          800
        );
      }
    },
    //显示明细
    showAdrres(vclN, pageNo, pageSize, isY) {
      var newVc = "";
      if (isY == 1) {
        //代表是从 位置信息明细传进来的车牌号
        newVc = vclN;
        this.isVcIn = vclN; //这个时候更新车牌号
        this.page.pageNo = pageNo;
        this.page.pageSize = pageSize;
      } else if (isY == 2) {
        //代表我要当前位置明细的车牌号
        newVc = this.isVcIn;
      }
      var that = this;
      that.loading = true;
      this.$Axios
        .get(
          that.GLOBAL.url +
            `truck/iframe/getVclNWeb24TruckMsg?vclN=${newVc}&page=${pageNo}&pageSize=${pageSize}`,
          {
            headers: {
              Authorization: this.getToken(),
            },
          }
        )
        .then((res) => {
          if (res.data.status == 1) {
            that.loading = false;
            that.tableData = data.content.track24s;
            that.page.total = data.content.totalNumber;
            that.isPosiDe = true;
          } else {
            that.loading = false;
            that.tableData = [];
            that.page.total = 0;
            that.isPosiDe = true;
          }
        });
    },
    //关闭位置明细
    closePoD() {
      this.isPosiDe = false;
      this.tableData = [];
    },

    //切换第几页
    handleCurrentChange(val) {
      this.page.pageNo = val;
      this.showAdrres(this.isVcIn, this.page.pageNo, this.page.pageSize, 2);
    },

    //切换每页显示几个
    handleSizeChange(val) {
      this.page.pageNo = 1;
      this.page.pageSize = val;
      this.showAdrres(this.isVcIn, this.page.pageNo, this.page.pageSize, 2);
    },
    clickPosition() {
      console.log(this.$refs.pagination, "pagination");
    },
    getToken() {
      return this.existToken;
    },
  },
  mounted() {
    this.existToken = this.$route.params.basicAuth
      ? this.getTruckToken(this.$route.params.basicAuth)
      : null;
    this.truckNo = this.$route.params.truckNo;
    this.getResize();
    this.signAgreement();
  },
  watch: {
    language: {
      immediate: true,
      handler(newVal) {
        if (newVal == "语言") {
          this.lang = "zh-CN";
          this.$i18n.locale = this.lang; //关键语句
        } else if (newVal == "language") {
          this.lang = "en-US";
          this.$i18n.locale = this.lang; //关键语句
        }
      },
    },
  },
};
</script>