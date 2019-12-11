<style lang="scss" scoped>
.de-content {
  .el-col-4 {
    height: 40px;
  }
  .el-col-8 {
    height: 40px;
  }
}
.docking-order-box.download-template {
  background: #fff;
  width: 1200px;
  height: auto;
  color: #02b2ff !important;
  margin-top: 20px;
}
.title-ul-li {
  margin: 0 !important;
  color: #43637c !important;
}
.title-active {
  color: #02b2ff;
}
.docking-order-box {
  .tab-box {
    margin-top: 0 !important;
  }
}
.text-uppercase.p-2 {
  display: inline-block;
  margin-left: 15px;
  font-size: 18px;
  color: #02b2ff !important;
}
.docking-order {
  background-color: #fff;
  width: 100%;
  overflow: hidden;
  padding-bottom: 20px;
  min-height: 60px;
  li {
    position: relative;
    text-align: center;
    font-size: 12px;
    width: 128.8px;
  }
  .po {
    background-color: #02b2ff;
    display: inline-block;
    width: 100%;
  }
  .transit {
    background-color: #f1f6f8;
    display: inline-block;
    padding: 0 10px;
    width: 100%;
    h5 {
      color: #43637c !important;
      width: 108px;
      word-break: break-all;
      white-space: pre-wrap;
    }
  }
  .pol-pod {
    background-color: #ff9500;
    display: inline-block;
    padding: 0 10px;
    width: 100%;
  }
  h5 {
    color: #fff;
    width: 108px;
    word-break: break-all;
    white-space: pre-wrap;
  }
  .left {
    float: left;
  }
  .right {
    float: right;
  }
  .stand {
    line-height: 20px !important;
    margin-top: -12px;
  }
  .center {
    padding: 0 10px;
  }
  .left-arrow {
    background: url(../assets/images/arrows/Horizontal-line.png) right no-repeat;
    width: 50px;
    height: 10px;
    display: inline-block;
  }
  .left-left-arrow {
    background: url(../assets/images/arrows/Arrowright.png) left no-repeat;
    width: 50px;
    height: 10px;
    display: inline-block;
  }
  .right-arrow {
    background: url(../assets/images/arrows/Arrowleft.png) right no-repeat;
    width: 50px;
    height: 10px;
    display: inline-block;
  }
  .stand-arrow-down {
    background: url(../assets/images/arrows/rightArrow.png) center bottom
      no-repeat;
    height: 30px;
    display: block;
    width: 5px;
    margin-left: 1px;
  }
  .stand-arrow-up {
    background: url(../assets/images/arrows/leftArrow.png) center no-repeat;
    height: 15px;
    display: block;
    width: 5px;
  }
  .stand-line {
    background: url(../assets/images/arrows/Vertical-line.png) center no-repeat;
    height: 15px;
    display: block;
    width: 5px;
    display: none;
  }
  .arrow-group {
    display: inline-block;
    line-height: 30px;
    color: #43637c;
  }
  .clear-both {
    clear: both;
  }
  .arrow-text {
    margin: 0 6px;
    font-size: 16px;
    display: none;
  }
}
.download-template ol,
.download-template ul,
.download-template dl {
  margin-left: 20px;
  margin-right: 20px;
}
// .ship-main-direct .direct-list-img {
//   display: inline-block;
//   line-height: 90px;
// }
.de-content .ship-main .Origin-txt p {
  height: 24px;
}
.transit-routecode {
  padding-top: 5px;
  font-weight: 200;
  font-size: 18px !important;
  position: absolute;
  width: inherit;
}
.t {
  font-weight: 200;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.mother-ship-border {
  border: 3px solid #ffa931 !important;
  height: 38px;
  width: 38px;
  background-color: #fff;
}
</style>
<template>
  <div class="de-content" v-loading="totalLoading">
    <div class="wrapper">
      <div class="con-header">
        <el-row>
          <el-col :span="12">
            <div class="shipper">
              <ul>
                <li v-for="(url,urlkey) in logos" :key="urlkey">
                  <img
                    :class="(logos.length > 1 && urlkey == 0 && url.scac == url.motherShipScac) ?'list-logo mother-ship-border':'list-logo'"
                    :src="url.logoUrl"
                  />
                </li>
              </ul>
              <p>{{routeCodes.toUpperCase()}}</p>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="voyage">
              <p>船名/航次：{{vessel.toUpperCase()}} / {{(firstVoyage.toUpperCase() == ''?'-':firstVoyage.toUpperCase())}}</p>
            </div>
          </el-col>
        </el-row>
      </div>

      <div class="ship-main" v-if="isTransit == '直达'">
        <el-row>
          <el-col :span="10">
            <div class="Origin-txt">
              <h5>{{polCityEn.toUpperCase()}}</h5>
              <p class="t" :title="pol.toUpperCase()">{{pol.toUpperCase()}}</p>
              <p>计划离港 {{etd}}</p>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="arrow">
              <p>{{isTransit}}，{{transTime}}到达</p>
            </div>
          </el-col>
          <el-col :span="10">
            <div class="Origin-txt">
              <h5>{{podCityEn.toUpperCase()}}</h5>
              <p class="t" :title="pod.toUpperCase()">{{pod.toUpperCase()}}</p>
              <p>计划到港 {{eta}}</p>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="ship-main-direct" v-if="isTransit == '中转'">
        <div class="direct-box max-transit-polpod">
          <div class="Origin-txt">
            <h5>{{polCityEn.toUpperCase()}}</h5>
            <p class="t" :title="pol.toUpperCase()">{{pol.toUpperCase()}}</p>
            <p>计划离港 {{etd}}</p>
          </div>
        </div>
        <div class="direct-box">
          <div class="direct-list">
            <div class="direct-list-img">
              <img src="../assets/images/arrow-1.png" />
            </div>
            <div
              class="max-transit"
              :style="minWidth"
              v-if="transitPortEn != ''"
              :title="transitPortEn"
            >
              {{transitPortEn.toUpperCase()}}
              <div :title="transitRouteCode" class="transit-routecode">{{transitRouteCode}}</div>
            </div>
            <div class="direct-list-img" v-if="transitPortEn != ''">
              <img src="../assets/images/arrow-1.png" />
            </div>
            <div
              class="max-transit"
              :style="minWidth"
              v-if="secondTransitPortEn != ''"
              :title="secondTransitPortEn"
            >
              {{secondTransitPortEn.toUpperCase()}}
              <div
                v-if="secondTransitRouteCode != ''"
                :title="secondTransitRouteCode"
                class="transit-routecode"
              >{{secondTransitRouteCode}}</div>
            </div>
            <div class="direct-list-img" v-if="secondTransitPortEn != ''">
              <img src="../assets/images/arrow-1.png" />
            </div>
            <div
              class="max-transit"
              :style="minWidth"
              v-if="thirdTransitPortEn != ''"
              :title="thirdTransitPortEn"
            >
              {{thirdTransitPortEn.toUpperCase()}}
              <div
                v-if="thirdTransitRouteCode != ''"
                :title="thirdTransitRouteCode"
                class="transit-routecode"
              >{{thirdTransitRouteCode}}</div>
            </div>
            <div class="direct-list-img" v-if="thirdTransitPortEn != ''">
              <img src="../assets/images/arrow-1.png" />
            </div>
          </div>
          <div class="clearboth"></div>

          <p class="bottom">{{isTransit}}，{{transTime}}到达</p>
        </div>
        <div class="direct-box max-transit-polpod">
          <div class="Origin-txt">
            <h5>{{podCityEn.toUpperCase()}}</h5>
            <p class="t" :title="pod.toUpperCase()">{{pod.toUpperCase()}}</p>
            <p>计划到港 {{eta}}</p>
          </div>
        </div>
      </div>
      <div class="clearboth"></div>
      <div class="tab-box">
        <ul>
          <li class="active" @click="getOtherSchedule(otherParms)">
            <span class="iconfont icon-RectangleCopy"></span>新船期预告
          </li>
          <li @click="getThisPortOtherSchedule(otherParms)">该港口的其他船期</li>
        </ul>
      </div>
      <div class="clearboth"></div>
      <div class="data-table" v-loading="loading">
        <div class="data-th">
          <el-row>
            <el-col :span="8">船名</el-col>
            <el-col :span="4">航次</el-col>
            <el-col :span="4">
              <p>离港日期</p>
            </el-col>
            <el-col :span="4">
              <p>到港日期</p>
            </el-col>
            <el-col :span="4">
              <p>详情</p>
            </el-col>
          </el-row>
        </div>
        <div class="fob-ship-nodata" v-if="isShow" style="height: 268px;padding-top: 20px;">
          <div v-show="total == 0">
            <div class="fob-ship-nodata-img"></div>
            <div class="fob-ship-nodata-text">
              <span>抱歉，未找到符合条件的船期，一定是哪里出现了问题，期待您的反馈</span>
              <span class="fob-ship-nodata-text-emoji"></span>
              <span>！</span>
            </div>
            <button class="fob-ship-nodata-btn" @click="feedback" style="background: #fff;">立即反馈，拿红包</button>
          </div>
        </div>
        <div class="data-td" v-if="total != 0">
          <el-row v-for="(item,transitKey) in newScheduleList" :key="transitKey">
            <el-col :span="8">{{getMotherShipRouteCode2(item).vessel}}</el-col>
            <el-col :span="4">{{getMotherShipRouteCode2(item).voyage}}</el-col>
            <el-col :span="4">
              <p>{{item.etd}}（{{item.etdWeek}}）</p>
            </el-col>
            <el-col :span="4">
              <p>{{item.eta}}（{{item.etaWeek}}）</p>
            </el-col>
            <el-col :span="4">
              <p>
                <a
                  href="javascript:void(0);"
                  class="btn"
                  @click="goInnerDetails({
                    polId:otherParms.polId,
                    podId:otherParms.podId,
                    vessel:item.vessel,
                    voyage:item.voyage,
                    dateType:dateType,
                    startTime:startTime,
                    endTime:endTime,
                    id:item.id
                  })"
                >详情</a>
              </p>
            </el-col>
          </el-row>
        </div>
      </div>
      <!-- <div class="declare" style="display:none">
        <h5>货代助手提供 全球船期，码头船舶计划，船舶定位，全球运价查询：</h5>
        <dl>
          <dt>上海到鹿特丹相关：</dt>
          <dd>
            <a href="#">上海到鹿特丹船期</a>
            <a href="#">鹿特丹到上海船期</a>
            <a href="#">上海到鹿特丹海运费</a>
            <a href="#">鹿特丹到上海海运费</a>
            <a href="#">上海到鹿特丹拼箱</a>
            <a href="#">鹿特丹到上海拼箱</a>
          </dd>
        </dl>
        <dl>
          <dt>船期助手：</dt>
          <dd class="longer">
            <a href="#">上海到鹿特丹MSC船期</a>
            <a href="#">上海到鹿特丹APL船期</a>
            <a href="#">海到鹿特丹COSCO船期</a>
            <a href="#">上海到鹿特丹MSK船期</a>
            <a href="#">海到鹿特丹MSC船期</a>
            <a href="#">上海到鹿特丹APL船期</a>
            <a href="#">上海到鹿特丹COSCO船期</a>
            <a href="#">上海到鹿特丹MSC船期</a>
            <a href="#">上海到鹿特丹APL船期</a>
            <a href="#">上海到鹿特丹COSCO船期</a>
            <a href="#">上海到鹿特丹MSK船期</a>
            <a href="#">上海到鹿特丹MSC船期</a>
            <a href="#">上海到鹿特丹APL船期</a>
            <a href="#">上海到鹿特丹COSCO船期</a>
          </dd>
        </dl>
        <dl>
          <dt>港口助手：</dt>
          <dd>
            <a href="#">上海港</a>
            <a href="#">鹿特丹港</a>
            <a href="#">中国有哪些港口</a>
            <a href="#">荷兰有哪些港口</a>
          </dd>
        </dl>
      </div>-->
      <div class="docking-order-box download-template" style="display:none">
        <div>
          <h5 class="text-uppercase p-2">
            <i class="remixicon-route-fill mr-1"></i> 港口挂靠路径
          </h5>
        </div>
        <div class="tab-box">
          <ul class="title-ul-li">
            <li
              :id="'docking_title_'+item"
              :class="dockingScac == 0 ?'title-active':''"
              @click="changeTab(item)"
              v-for="(item,dockingScac) in routeCodeList"
              :key="dockingScac"
            >{{item}}</li>
          </ul>
        </div>
        <div class="docking-order" v-loading="orderLoading">
          <div class="date" style="margin-left: 0px;">
            <div class="animateDatebarScroll">
              <ul
                class="animateItem"
                :id="'docking_'+docking.route"
                v-show="allDockingIndex == 0"
                v-for="(docking,allDockingIndex) in allDocking"
                :key="allDockingIndex"
              >
                <li
                  :class="(!item.left) && item.clearboth?'right clear-both' :
                  item.left && item.clearboth?'left clear-both':
                  item.left?'left':'right'"
                  v-for="(item,dockingIndex) in docking.datas"
                  :key="dockingIndex"
                >
                  <!-- <div
                    :class="item.isEqs? 'item pol-pod center' :item.isTransit ?'item transit center':'item po center'"
                    v-if="(dockingIndex + 1)%2 != 0"
                  >-->
                  <div
                    :class="item.isEqs? 'item pol-pod center' :'item po center'"
                    v-if="(dockingIndex + 1)%2 != 0"
                  >
                    <h5>{{item.PORT}}</h5>
                  </div>
                  <div
                    :class="(dockingIndex+1)%10 == 0 ?'arrow-group stand':'arrow-group'"
                    v-if="(dockingIndex + 1)%2 == 0"
                  >
                    <span
                      :class="(dockingIndex+1)%10 == 0 ?'stand-line':item.left?'left-arrow':'left-left-arrow'"
                      class
                    ></span>
                    <span class="arrow-text">{{item.transitTime}}天</span>
                    <span
                      :class="(dockingIndex+1)%10 == 0 ?'stand-arrow-down':item.left?'right-arrow':'left-arrow'"
                      class
                    ></span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { setTimeout } from "timers";
export default {
  name: "DetailsMode",
  data() {
    return {
      info: {},
      logos: [],
      routeCodes: "",
      vessel: "",
      voyage: "",
      pol: "",
      pod: "",
      polTerninal: "",
      podTerninal: "",
      isTransit: "",
      transTime: "",
      etd: "",
      eta: "",
      newScheduleList: [],
      loading: false,
      scacs: "",
      total: 1,
      isShow: true,
      transitPortEn: "",
      secondTransitPortEn: "",
      thirdTransitPortEn: "",
      totalLoading: false,
      orderLoading: false,
      companyNameList: [],
      dockingList: [],
      paramList: [],
      allDocking: [],
      otherParms: {},
      minWidth: "",
      userId:
        this.getCookie("authId") != null && this.getCookie("authId") != ""
          ? this.getCookie("authId")
          : "",
      routeCodeList: [],
      transitList: [],
      dateType: "1",
      startTime: "",
      endTime: "",
      scac: "",
      firstVoyage: "",
      transitRouteCode: "",
      secondTransitRouteCode: "",
      thirdTransitRouteCode: "",
      id: "",
      polCityEn: "",
      podCityEn: ""
    };
  },
  components: {},
  computed: {},
  methods: {
    // 取大船航线code
    getMotherShipRouteCode(info) {
      var littleShip = [
        "WATER",
        "TRACE",
        "FEEDER",
        "BARGE",
        "FEEDER SERVICE FAR EAST",
        "FEEDER SERVICE FESEA",
        "RAIL",
        "-",
      ];
      var routeCode = "";
      var voyage = "";
      var vessel = "";
      // 两种条件判断
      // 1，航线code
      // 2，船名航次
      // 航线code、船名航次是否有效，不为空，不为空串，不属于内支线，陆运等
      // 如果航线code不为空或者船名航次有效
      if (
        (info.routeCode &&
          littleShip.indexOf(info.routeCode.toUpperCase()) == -1) ||
        (info.voyage &&
          info.vessel &&
          littleShip.indexOf(info.voyage.toUpperCase()) == -1 &&
          littleShip.indexOf(info.vessel.toUpperCase()) == -1)
      ) {
        routeCode = info.routeCode;
        voyage = info.voyage;
        vessel = info.vessel;
      } else if (
        (info.transitRouteCode &&
          littleShip.indexOf(info.transitRouteCode.toUpperCase()) == -1) ||
        (info.voyageAfterTransit &&
          info.vesselAfterTransit &&
          littleShip.indexOf(info.voyageAfterTransit.toUpperCase()) == -1 &&
          littleShip.indexOf(info.vesselAfterTransit.toUpperCase()) == -1)
      ) {
        routeCode = info.transitRouteCode;
        voyage = info.voyageAfterTransit;
        vessel = info.vesselAfterTransit;
      } else if (
        (info.secondTransitRouteCode &&
          littleShip.indexOf(info.secondTransitRouteCode.toUpperCase()) ==
            -1) ||
        (info.secondVoyageAfterTransit &&
          info.secondVesselAfterTransit &&
          littleShip.indexOf(info.secondVoyageAfterTransit.toUpperCase()) ==
            -1 &&
          littleShip.indexOf(info.secondVesselAfterTransit.toUpperCase()) == -1)
      ) {
        routeCode = info.secondTransitRouteCode;
        voyage = info.secondVoyageAfterTransit;
        vessel = info.secondVesselAfterTransit;
      } else if (
        (info.thirdTransitRouteCode &&
          littleShip.indexOf(info.thirdTransitRouteCode.toUpperCase()) == -1) ||
        (info.thirdVoyageAfterTransit &&
          info.thirdVesselAfterTransit &&
          littleShip.indexOf(info.thirdVoyageAfterTransit.toUpperCase()) ==
            -1 &&
          littleShip.indexOf(info.thirdVesselAfterTransit.toUpperCase()) == -1)
      ) {
        routeCode = info.thirdTransitRouteCode;
        voyage = info.thirdVoyageAfterTransit;
        vessel = info.thirdVoyageAfterTransit;
      }
      return {
        routeCode: (!routeCode || routeCode == 'UNDEFINED') ? "-" : routeCode,
        voyage: voyage ? voyage : "-",
        vessel: vessel ? vessel : "-"
      };
    },
    // 分表后取大船航线code
    getMotherShipRouteCode2(info) {
      var littleShip = [
        "WATER",
        "TRACE",
        "FEEDER",
        "BARGE",
        "FEEDER SERVICE FAR EAST",
        "FEEDER SERVICE FESEA",
        "RAIL",
        "UNDEFINED",
        "-",
        "FEEDER VESSEL",
		    "TRUCK",
      ];
      var routeCode = "";
      var voyage = "";
      var vessel = "";
      // 两种条件判断
      // 1，航线code
      // 2，船名航次
      // 航线code、船名航次是否有效，不为空，不为空串，不属于内支线，陆运等
      // 如果航线code不为空或者船名航次有效
      let length = info.transitInfoList.length;
      let list = info.transitInfoList;
      if (
        (info.firstRouteCode &&
          littleShip.indexOf(info.firstRouteCode.toUpperCase()) == -1) ||
        (info.voyage &&
          info.vessel &&
          littleShip.indexOf(info.voyage.toUpperCase()) == -1 &&
          littleShip.indexOf(info.vessel.toUpperCase()) == -1) ||
        length == 0
      ) {
        routeCode = info.routeCode;
        voyage = info.voyage;
        vessel = info.vessel;
      } else if (
        (length > 0 &&
          (list[0].transitRouteCode &&
            littleShip.indexOf(list[0].transitRouteCode.toUpperCase()) ==
              -1)) ||
        (length > 0 && list[0].transitVessel &&
          list[0].transitVoyage &&
          littleShip.indexOf(list[0].transitVessel.toUpperCase()) == -1 &&
          littleShip.indexOf(list[0].transitVoyage.toUpperCase()) == -1)
      ) {
        routeCode = list[0].transitRouteCode;
        voyage = list[0].transitVoyage;
        vessel = list[0].transitVessel;
      } else if (
        (length > 1 &&
          (list[1].transitRouteCode &&
            littleShip.indexOf(list[1].transitRouteCode.toUpperCase()) ==
              -1)) ||
        (length > 1 && list[1].transitVessel &&
          list[1].transitVoyage &&
          littleShip.indexOf(list[1].transitVessel.toUpperCase()) == -1 &&
          littleShip.indexOf(list[1].transitVoyage.toUpperCase()) == -1)
      ) {
        routeCode = list[1].transitRouteCode;
        voyage = list[1].transitVoyage;
        vessel = list[1].transitVessel;
      } else if (
        (length > 2 &&
          (list[2].transitRouteCode &&
            littleShip.indexOf(list[2].transitRouteCode.toUpperCase()) ==
              -1)) ||
        (length > 2 && list[2].transitVessel &&
          list[2].transitVoyage &&
          littleShip.indexOf(list[2].transitVessel.toUpperCase()) == -1 &&
          littleShip.indexOf(list[2].transitVoyage.toUpperCase()) == -1)
      ) {
        routeCode = list[2].transitRouteCode;
        voyage = list[2].transitVoyage;
        vessel = list[2].transitVessel;
      }
      var result = {
        routeCode: (!routeCode || routeCode == 'UNDEFINED') ? "-" : routeCode,
        voyage: voyage ? voyage : "-",
        vessel: vessel ? vessel : "-"
      }
      return result;
    },
    //切换标签页
    changeTab(id) {
      //
      $(document)
        .find(".docking-order-box")
        .find(".title-ul-li")
        .find("li")
        .removeClass("title-active");
      $(document)
        .find("#docking_title_" + id)
        .addClass("title-active");
      $(document)
        .find(".docking-order-box")
        .find(".animateItem")
        .css("display", "none");
      $(document)
        .find("#docking_" + id)
        .css("display", "block");
    },
    //参数初始化
    init(item) {
      this.goInnerDetails(item);
    },
    //日期格式化
    getWeek(date) {
      if (date.indexOf("-") != -1) {
        date = date.replace(/-/g, "/");
      }
      var weekArray = new Array(
        "周日",
        "周一",
        "周二",
        "周三",
        "周四",
        "周五",
        "周六"
      );
      return weekArray[new Date(date).getDay()];
    },
    // 船期详情
    goInnerDetails(params) {
      // 回到顶部
      $("body,html").animate({ scrollTop: 0 }, 500);
      var that = this;
      this.totalLoading = true;
      that.startTime = params.startTime;
      that.endTime = params.endTime;
      that.dateType = params.dateType;
      that.id = params.id;
      //获取详情信息
      // "&voyage=" + (params.voyage == "-" ? "" : params.voyage) +
      $.ajax({
        url:
          this.GLOBAL.url +
          "schedules/web/details?userId=" +
          that.userId +
          "&userIp=" +
          returnCitySN.cip +
          "&ids=" +
          params.id,
        type: "GET",
        headers: {
          Authorization: this.getToken()
        },
        success: function(data) {
          that.totalLoading = false;
          if (data.status == 1 && data.message == "SUCCESS") {
            if (data.content.length > 0) {
              // 整理数据，使结构形态跟列表传进来的一样
              var logos = [];
              var v = data.content[0];
              var routeCodeStr = "";
              var scacs = [];
              var companyNameList = [];
              var paramList = [];
              var timeList = [];
              var cnameList = [];
              var routeCodeList = [];
              var motherShipScacs = [];
              var carrierNames = [];
              var polList = [];
              var podList = [];
              if (v.carrierName == v.motherShipScac) {
                v.scac = "0" + v.scac;
              }
              var voyageList = [
                v.scac + "@" + that.getMotherShipRouteCode2(v).voyage
              ];
              // 多条时是共仓，只要直达做共仓
              if (data.content.length > 1) {
                data.content = data.content.filter(
                  item => item.isTransit == "0"
                );
              }
              $.each(data.content, function(key, value) {
                //如果共仓
                if (logos.indexOf(value.scac) == -1) {
                  logos.push(value.scac);
                }
                motherShipScacs.push(value.scac + "@" + value.motherShipScac);
                carrierNames.push(value.scac + "@" + value.carrierName);
                if (scacs.indexOf(value.scac) == -1) {
                  scacs.push(value.scac);
                }
                that.scac = scacs.sort()[0].replace("0", "");

                var routeCodeTemp =
                  value.scac +
                  "@" +
                  that.getMotherShipRouteCode2(value).routeCode;
                if (routeCodeList.indexOf(routeCodeTemp) == -1) {
                  routeCodeList.push(routeCodeTemp);
                }
                var param =
                  value.scac +
                  "@" +
                  that.getMotherShipRouteCode2(value).routeCode;
                if (paramList.indexOf(param) == -1) {
                  paramList.push(param);
                }
                var timeStr = value.scac + "@" + value.etd + "@" + value.eta;
                if (timeList.indexOf(timeStr) == -1) {
                  timeList.push(timeStr);
                }
                var polStr = value.scac + "@" + value.pol;
                if (polList.indexOf(polStr) == -1) {
                  polList.push(polStr);
                }
                var podStr = value.scac + "@" + value.pod;
                if (podList.indexOf(podStr) == -1) {
                  podList.push(podStr);
                }
                if (cnameList.indexOf(value.carrierName) == -1) {
                  cnameList.push(value.carrierName);
                  companyNameList.push({
                    scac: value.scac,
                    name: value.carrierName
                  });
                }
                var voyageStr =
                  value.scac + "@" + that.getMotherShipRouteCode2(value).voyage;
                if (voyageList.indexOf(voyageStr) == -1) {
                  voyageList.push(voyageStr);
                }
              });
              routeCodeList.sort();
              timeList.sort();
              voyageList.sort();
              that.firstVoyage = voyageList[0].split("@")[1];
              $.each(routeCodeList, function(routeK, routeCodeV) {
                if (routeK == routeCodeList.length - 1) {
                  routeCodeStr += routeCodeV.split("@")[1];
                } else {
                  routeCodeStr += routeCodeV.split("@")[1] + "/";
                }
                that.routeCodeList.push(routeCodeV.split("@")[1]);
              });
              logos.sort();
              motherShipScacs.sort();
              carrierNames.sort();
              podList.sort();
              polList.sort();
              var logosTemp = [];
              $.each(logos, function(logosK, logosV) {
                var logoUrl = require("../assets/images/my-logos2/" +
                  logosV.replace("0", "") +
                  ".png");
                logosTemp.push({
                  logoUrl: logoUrl,
                  motherShipScac: motherShipScacs[logosK].split("@")[1],
                  scac: carrierNames[logosK].split("@")[1]
                });
              });

              logos = logosTemp;
              v.etd = timeList[0].split("@")[1];
              v.eta = timeList[0].split("@")[2];
              var etdDate = v.etd.substring(5, 10).replace("-", "/");
              if (Number(etdDate.split("/")[0]) < 10) {
                etdDate =
                  etdDate.split("/")[0].replace("0", "") +
                  "/" +
                  etdDate.split("/")[1];
              }
              if (Number(etdDate.split("/")[1]) < 10) {
                etdDate =
                  etdDate.split("/")[0] +
                  "/" +
                  etdDate.split("/")[1].replace("0", "");
              }
              var etaDate = v.eta.substring(5, 10).replace("-", "/");
              if (Number(etaDate.split("/")[0]) < 10) {
                etaDate =
                  etaDate.split("/")[0].replace("0", "") +
                  "/" +
                  etaDate.split("/")[1];
              }
              if (Number(etaDate.split("/")[1]) < 10) {
                etaDate =
                  etaDate.split("/")[0] +
                  "/" +
                  etaDate.split("/")[1].replace("0", "");
              }
              // 处理显示时间
              var etd =
                (etdDate != "/undefined" ? etdDate : "-") +
                "（" +
                (that.getWeek(v.etd) ? that.getWeek(v.etd) : "-") +
                "）";
              var eta =
                (etaDate != "/undefined" ? etaDate : "-") +
                "（" +
                (that.getWeek(v.eta) ? that.getWeek(v.eta) : "-") +
                "）";
              if (
                v.totalDuration == undefined ||
                v.totalDuration == "" ||
                v.totalDuration == null
              ) {
                v.totalDuration = 0;
              }
              var transTime = v.totalDuration + "天";
              var isTransit = "直达";
              if (v.isTransit == "1") {
                isTransit = "中转";
              } else {
                that.transitList = v.transitList;
              }
              if (v.vessel == "") {
                v.vessel = "-";
              }
              if (v.voyage == "") {
                v.voyage = "-";
              }
              if (v.etd.indexOf("-") != -1) {
                v.etd = v.etd.replace(/-/g, "/");
              }
              if (v.eta.indexOf("-") != -1) {
                v.eta = v.eta.replace(/-/g, "/");
              }
              var firstPol = polList[0].split('@')[1];
              var firstPod = podList[0].split('@')[1];
              var item = {
                logos: logos,
                info: v,
                routeCodes: routeCodeStr,
                etd: etd,
                eta: eta,
                transTime: transTime,
                isTransit: isTransit,
                polt: v.polTerninal,
                podt: v.podTerninal,
                etdTime: new Date(v.etd).getTime(),
                etaTime: new Date(v.eta).getTime(),
                scacs: scacs,
                paramList: paramList,
                companyNameList: companyNameList,
                firstVoyage: that.firstVoyage
              };
              that.info = item;
              that.logos = item.logos;
              that.routeCodes = item.routeCodes;
              that.vessel = that.getMotherShipRouteCode2(item.info).vessel;
              that.voyage = that.getMotherShipRouteCode2(item.info).voyage;
              that.pol = firstPol;
              that.pod = firstPod;
              that.polCityEn = item.info.polCityEn;
              that.podCityEn = item.info.podCityEn;
              that.polTerninal = item.polt;
              that.podTerninal = item.podt;
              that.isTransit = item.isTransit;
              that.transTime = item.transTime;
              that.etd = item.etd;
              that.eta = item.eta;
              that.scacs = item.scacs;
              let transitListLength = item.info.transitInfoList.length;
              if (transitListLength > 0) {
                that.transitPortEn = item.info.transitInfoList[0].transitPortEn;
                that.transitRouteCode =
                  item.info.transitInfoList[0].transitRouteCode;
              }
              if (transitListLength > 1) {
                that.transitPortEn = item.info.transitInfoList[0].transitPortEn;
                that.secondTransitPortEn =
                  item.info.transitInfoList[1].transitPortEn;
                that.transitRouteCode =
                  item.info.transitInfoList[0].transitRouteCode;
                that.secondTransitRouteCode =
                  item.info.transitInfoList[1].transitRouteCode;
              }
              if (transitListLength > 2) {
                that.transitPortEn = item.info.transitInfoList[0].transitPortEn;
                that.secondTransitPortEn =
                  item.info.transitInfoList[1].transitPortEn;
                that.thirdTransitPortEn =
                  item.info.transitInfoList[2].transitPortEn;
                that.transitRouteCode =
                  item.info.transitInfoList[0].transitRouteCode;
                that.secondTransitRouteCode =
                  item.info.transitInfoList[1].transitRouteCode;
                that.thirdTransitRouteCode =
                  item.info.transitInfoList[2].transitRouteCode;
              }
              that.paramList = item.paramList;
              that.companyNameList = item.companyNameList;
              if (that.transitPortEn != "") {
                that.minWidth = "width: 170px;";
              }
              if (that.secondTransitPortEn != "") {
                that.minWidth = "width: 130px;";
              }
              if (that.thirdTransitPortEn != "") {
                that.minWidth = "width: 110px;";
              }
              that.otherParms = {
                polId: params.polId,
                podId: params.podId,
                etd: item.info.etd,
                scacs: that.scacs,
                dateType: params.dateType,
                startTime: params.startTime,
                endTime: params.endTime
              };
              that.getOtherSchedule(that.otherParms);
              // that.getDockingOrder();
            }
          } else if (data.status == 3) {
            that.totalLoading = false;
            that
              .$alert("游客每日最多查询3次，立即登录？", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning",
                center: true
              })
              .then(() => {
                that.$parent.$parent.loginAndRegist = true;
                that.$parent.$parent.registDialogFormVisible = false;
                that.$parent.$parent.loginDialogFormVisible = true;
              })
              .catch(() => {});
          } else {
            that.totalLoading = false;
            that.$message({
              message: "获取船期预告失败",
              type: "error",
              customClass: "base-message-zindex"
            });
          }
        },
        error: function(e) {
          that.totalLoading = false;
          that.$message({
            message: "服务器异常",
            type: "error",
            customClass: "base-message-zindex"
          });
        }
      });
      //替换本页数据
    },
    //反馈
    feedback() {
      document
        .getElementsByClassName("class_qidian_wpa")[0]
        .contentWindow.document.getElementsByClassName("btn-im btn")[0]
        .click();
    },
    //获取新船期预告
    getOtherSchedule(params) {
      this.total = 1;
      $(".tab-box")
        .find("li")
        .removeClass("active");
      $(".tab-box")
        .find("li")
        .eq(0)
        .addClass("active");
      var that = this;

      // //拼接公司五子码
      // var scacs = "";
      // $.each(params.scacs, function(k, v) {
      //   if (scacs.indexOf(v) == -1) {
      //     scacs += v + ",";
      //   }
      // });
      // scacs = scacs.substring(0, scacs.length - 1);
      this.loading = true;
      $.ajax({
        url:
          this.GLOBAL.url +
          "schedules/web/notice?polCity=" +
          params.polId +
          "&podCity=" +
          params.podId +
          "&routeCode=" +
          that.routeCodeList[0] +
          "&scac=" +
          that.scac,
        type: "GET",
        headers: {
          Authorization: this.getToken()
        },
        success: function(data) {
          that.loading = false;
          if (data.status == 1 && data.message == "SUCCESS") {
            if (data.content.length > 0) {
              var list = [];
              var idlist = [];
              $.each(data.content, function(k, d) {
                var etdWeek = that.getWeek(d.etd);
                var etaWeek = that.getWeek(d.eta);
                var d2 = {
                  eta: d.eta,
                  etd: d.etd,
                  etaWeek: etaWeek,
                  etdWeek: etdWeek,
                  vessel: d.vessel,
                  voyage: d.voyage,
                  id: d.id,
                  transitInfoList:d.transitInfoList
                };
                // var vesselvoyage = d.vessel+'@'+d.voyage;
                // if(idlist.indexOf(vesselvoyage) == -1){
                //   idlist.push(vesselvoyage);

                // }
                list.push(d2);
              });
              that.newScheduleList = list.filter(item => item.id != that.id);
              that.total = that.newScheduleList.length;
              if (that.total == 0) {
                that.isShow = true;
              } else {
                that.isShow = false;
              }
            } else {
              that.isShow = true;
              that.total = 0;
              that.newScheduleList = [];
            }
          } else {
            that.loading = false;
            that.$message({
              message: "获取船期预告失败",
              type: "error",
              customClass: "base-message-zindex"
            });
          }
        },
        error: function(e) {
          that.loading = false;
          that.$message({
            message: "服务器异常",
            type: "error",
            customClass: "base-message-zindex"
          });
        }
      });
    },
    //获取该港口其他船期
    getThisPortOtherSchedule(params) {
      this.total = 1;
      $(".tab-box")
        .find("li")
        .removeClass("active");
      $(".tab-box")
        .find("li")
        .eq(1)
        .addClass("active");
      var that = this;
      //拼接公司五子码
      var scacs = "";
      $.each(params.scacs, function(k, v) {
        if (scacs.indexOf(v) == -1) {
          scacs += v + ",";
        }
      });
      scacs = scacs.substring(0, scacs.length - 1).replace("0", "");
      this.loading = true;

      $.ajax({
        url:
          this.GLOBAL.url +
          "schedules/web/other?polCity=" +
          params.polId +
          "&podCity=" +
          params.podId +
          "&scac=" +
          scacs.toLowerCase(),
        type: "GET",
        headers: {
          Authorization: this.getToken()
        },
        success: function(data) {
          that.loading = false;
          if (data.status == 1 && data.message == "SUCCESS") {
            if (data.content.length > 0) {
              var list = [];
              var idlist = [];
              $.each(data.content, function(k, d) {
                var etdWeek = that.getWeek(d.etd);
                var etaWeek = that.getWeek(d.eta);
                var d2 = {
                  eta: d.eta,
                  etd: d.etd,
                  etaWeek: etaWeek,
                  etdWeek: etdWeek,
                  vessel: d.vessel,
                  voyage: d.voyage,
                  id: d.id,
                  transitInfoList:d.transitInfoList
                };
                var vesselvoyage = d.vessel + "@" + d.voyage;
                if (idlist.indexOf(vesselvoyage) == -1) {
                  idlist.push(vesselvoyage);
                  list.push(d2);
                }
              });
              that.isShow = false;
              that.newScheduleList = list;
              that.total = that.newScheduleList.length;
            } else {
              that.isShow = true;
              that.total = 0;
              that.newScheduleList = [];
            }
          } else {
            that.loading = false;
            that.$message({
              message: "获取其他船期失败",
              type: "error",
              customClass: "base-message-zindex"
            });
          }
        },
        error: function(e) {
          that.loading = false;
          that.$message({
            message: "服务器异常",
            type: "error",
            customClass: "base-message-zindex"
          });
        }
      });
    },
    //获取港口挂靠顺序
    getDockingOrder() {
      var that = this;
      this.orderLoading = true;
      // var map = {};
      // $.each(that.paramList, function(k, v) {
      //   var key = v.split("@")[0];
      //   var value = v.split("@")[1];
      //   map[key] = value;
      // });
      var routeCodes = "";
      if (that.isTransit == "直达") {
        routeCodes =
          that.routeCodes.split("/")[0] == "-"
            ? ""
            : that.routeCodes.split("/")[0];
      } else {
        routeCodes +=
          (that.info.info.routeCode == "" ? "-" : that.info.info.routeCode) +
          "/";
        routeCodes +=
          (that.info.info.transitRouteCode == ""
            ? "-"
            : that.info.info.transitRouteCode) + "/";
        routeCodes +=
          (that.info.info.secondTransitRouteCode == ""
            ? "-"
            : that.info.info.secondTransitRouteCode) + "/";
        routeCodes +=
          that.info.info.thirdTransitRouteCode == ""
            ? "-"
            : that.info.info.thirdTransitRouteCode;
      }
      //获取详情信息
      $.ajax({
        url:
          that.GLOBAL.url +
          "schedules/web/getDockingOrder?scac=" +
          that.scac +
          "&routeCodes=" +
          routeCodes,
        type: "GET",
        headers: {
          Authorization: that.getToken(),
          "Content-Type": "application/json"
        },
        success: function(data) {
          that.orderLoading = false;
          var docking = [];
          if (data.status == 1) {
            // 不考虑同一航线匹配出多个routecode的情况
            var routeCodeList = routeCodes.split("/");
            // that.routeCodeList = [routeCodeList[0]]
            $.each(data.content, function(k, v) {
              $.each(v.datas, function(i, j) {
                if (that.routeCodeList.indexOf(j.routeCode) == -1) {
                  that.routeCodeList.push(j.routeCode);
                }
              });
            });
            var pdocking = [];
            $.each(routeCodeList, function(k, v) {
              if (k == 0) {
                data.content[k].datas;
              }
            });

            //处理数据
            $.each(data.content, function(k, v) {
              var lineNo = 1;
              var datas = [];
              var before = "";
              $.each(v.datas, function(i, j) {
                var n = i + 1;
                var clearboth = false;
                //每5条数据换行
                if (n % 5 == 0) {
                  lineNo++;
                }
                if (n % 5 == 1 && n != 1) {
                  clearboth = true;
                }
                var left = true;
                //判断向左还是向右浮动
                if (lineNo % 2 == 0) {
                  left = false;
                }
                //判断是否是当前港口
                var isEqs = false;
                var port = j.PORT;
                //中转港变成字表后，循环加入中转港
                if (that.transitList && that.transitList.length == 0) {
                  if (that.transitPortEn != "") {
                    that.transitList.push(that.transitPortEn);
                  }
                  if (that.secondTransitPortEn != "") {
                    that.transitList.push(that.secondTransitPortEn);
                  }
                  if (that.thirdTransitPortEn != "") {
                    that.transitList.push(that.thirdTransitPortEn);
                  }
                }
                $.each(that.transitList, function(k, transit) {
                  if (
                    $.trim(j.PORT)
                      .toUpperCase()
                      .indexOf($.trim(transit)) != -1 ||
                    $.trim(transit)
                      .toUpperCase()
                      .indexOf($.trim(j.PORT)) != -1
                  ) {
                    isEqs = true;
                    if (port.indexOf("中转") == -1) {
                      port = port + "（中转）";
                    }
                  }
                });
                //判断是否是中转
                var isTransit = false;

                docking.push({
                  routeCode: j.routeCode,
                  PORT: port,
                  portNumber: j.portNumber,
                  isEqs: isEqs,
                  left: left, //向右
                  isTransit: isTransit,
                  clearboth: clearboth
                });
                if (i != v.datas.length - 1) {
                  var clearboth1 = false;
                  if (n % 5 == 0) {
                    clearboth1 = true;
                  }
                  //加入箭头
                  docking.push({
                    routeCode: j.routeCode,
                    transitTime: v.datas[i + 1].transitTime,
                    left: left, //向右,
                    clearboth: clearboth1
                  });
                }
              });
            });
            $.each(that.routeCodeList, function(k, v) {
              var dockingSmList = docking.filter(item => v == item.routeCode);
              that.allDocking.push({
                route: v,
                datas: dockingSmList
              });
            });
          } else {
            that.orderLoading = false;
            that.$message({
              message: "获取挂靠顺序失败",
              type: "error",
              customClass: "base-message-zindex"
            });
          }
        },
        error: function(e) {
          that.orderLoading = false;
          that.$message({
            message: "服务器异常",
            type: "error",
            customClass: "base-message-zindex"
          });
        }
      });
    }
  },
  created() {},
  mounted() {
    var that = this;
    $("body,html").animate({ scrollTop: 0 }, 500);
    that.init(that.$route.params);
  }
};
</script>