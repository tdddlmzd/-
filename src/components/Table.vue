<style>
.el-carousel__arrow {
  width: 30px;
  height: 56px;
  float: left;
  line-height: 100%;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  color: #02b2ff;
  border-radius: 0;
  background-color: #fff;
}
.el-carousel__arrow--left {
  left: 0;
  border-right: 1px solid #ececec;
}
.el-carousel__arrow--right {
  right: 0;
  border-left: 1px solid #ececec;
}
.el-icon-arrow-left:not(.el-date-picker__prev-btn) {
  font-size: 24px;
  font-weight: 700;
}
.el-icon-arrow-right:not(.el-date-picker__next-btn) {
  font-size: 24px;
  font-weight: 700;
}
.el-checkbox__input.is-checked .el-checkbox__inner,
.el-checkbox__input.is-indeterminate .el-checkbox__inner {
  background-color: #02b2ff;
  border-color: #02b2ff;
}
.el-slider__bar {
  position: absolute;
  height: 12px;
  top: 0;
  left: 0;
  background-color: #02b2ff;
}
.el-slider__runway {
  border-radius: 0;
  height: 12px;
  margin-bottom: 0;
  margin-top: 0;
  width: 90%;
  margin-left: 5%;
}
.el-slider__bar {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.el-slider__button {
  margin-top: 6px;
  /* display: block;
  z-index: 0;
  bottom: 0;
  font-family: monospace;
  white-space: nowrap;
  background-color: #02b2ff;
  color: #fff;
  border: none;
  border-radius: 0;
  width: 20px;
  height: 21px;
  font-size: 16px; */
}
.el-icon-arrow-right:not(.el-date-picker__next-btn) {
  color: #60cfff;
}
.el-collapse-item__content {
  padding-bottom: 10px;
}
.content-box .fob-ship .shipper p {
  max-width: 277px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  height: 16px;
}
.pod-item {
  padding-top: 19px;
  height: 56px;
  cursor: pointer;
  /* border-right: solid 1px #f3f3f3; */
  border-bottom: 2px solid #02b2ff;
  /* font-style: #43637c !important; */
  background: url(../assets/images/weeks_line.png) left no-repeat;
}
.pod-item .active > .week-schedules-count {
  background-color: #ff9500 !important;
  color: #fff !important;
}
.pod-item > .week-schedules-count {
  background-color: #f1f6f8;
  color: #b9b9b9;
}
.transit-port {
  height: 35px;
}
.mother-ship-border {
  border: 3px solid #ffa931 !important;
  height: 38px;
  width: 38px;
  background-color: #fff;
}
.mother-ship {
  float: right;
}
.mother-ship-logo {
  height: 17px;
  width: 17px;
  border: solid rgb(255, 149, 0);
  border-radius: 50%;
  display: inline-block;
  margin: -3px;
}
.mother-ship-des {
  display: inline-block;
  margin-left: 10px;
  margin-right: 20px;
}
.mother-ship-logospeci {
  height: 17px;
  width: 17px;
  border: 1px dashed #cccccc;
  border-radius: 50%;
  display: inline-block;
  margin: -3px;
}
.total-count-p {
  display: inline;
}
.el-collapse {
  border-top: none !important;
}
</style>

<template>
  <div>
    <div class="list-main">
      <div class="wrapper">
        <div class="m-datebar-bd">
          <el-carousel
            :arrow="totalWeeks >4 ? 'always':'never'"
            height="56px"
            :autoplay="false"
            indicator-position="none"
          >
            <el-carousel-item v-for="(item,bannerKey) in weekBanner" :key="bannerKey+item">
              <div v-if="totalWeeks <=4" class="prev">
                <span class="iconfont icon-jiankuohaoxizuo"></span>
              </div>
              <div class="date" :style="totalWeeks <=4 ?'margin-left: 0':'margin-left: 30px'">
                <div class="animateDatebarScroll">
                  <ul class="animateItem">
                    <li v-for="(week,weekKey) in item" :key="weekKey+week">
                      <div
                        :class="dateType == '1'?'item':'pod-item'"
                        :id="'week_tab_'+weekKey+'_'+bannerKey+'_'+week.week"
                        @click.stop="changeWeek('week_tab_'+weekKey+'_'+bannerKey+'_'+week.week)"
                      >
                        <p>{{week.title}}</p>
                        <p>{{week.name}}</p>
                        <div class="week-schedules-count">{{week.count?week.count:0}}</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div v-if="totalWeeks <=4" class="next">
                <span class="iconfont icon-jiankuohaoxiyou"></span>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="search-count">
          <p
            class="total-count-p"
          >由{{this.$route.params.pol}}发往{{this.$route.params.pod}} 共有 {{zhida}} 组直航服务，{{zhongzhuan}} 组中转服务</p>
          <div class="mother-ship">
            <p class="mother-ship-logo"></p>
            <p class="mother-ship-des">代表母船</p>
            <!-- <p class="mother-ship-logospeci"></p>
            <p class="mother-ship-des">本周不带获</p> -->
          </div>
        </div>
        <div class="left-bar side-box">
          <div class="hdtxt">
            精准筛选
            <span class="iconfont icon-shouqi" @click="hideFilter"></span>
          </div>
          <transition name="el-zoom-in-center">
            <div class="el-zoom-in-left">
              <!-- <div v-show="hideFilterFlag"> -->
              <div class="hdtxt1">
                <el-checkbox-group v-model="isTransitGroup" @change="checkBoxFilter">
                  <el-checkbox label="0" :disabled="isTransitGroup2[0]">直达</el-checkbox>
                  <el-checkbox label="1" :disabled="isTransitGroup2[1]">中转</el-checkbox>
                </el-checkbox-group>
              </div>
              <div role="tablist" aria-multiselectable="true" class="el-collapse">
                <el-collapse v-model="activeNames">
                  <el-collapse-item title="时间" name="1">
                    <div class="el-collapse-item__content">
                      <div class="time-box">
                        <div>ETD</div>
                        <div>
                          <el-checkbox-group v-model="etdGroup" @change="checkBoxFilter">
                            <el-checkbox label="1" :disabled="etdGroup2[0]">一</el-checkbox>
                            <el-checkbox label="2" :disabled="etdGroup2[1]">二</el-checkbox>
                            <el-checkbox label="3" :disabled="etdGroup2[2]">三</el-checkbox>
                            <el-checkbox label="4" :disabled="etdGroup2[3]">四</el-checkbox>
                            <el-checkbox label="5" :disabled="etdGroup2[4]">五</el-checkbox>
                            <el-checkbox label="6" :disabled="etdGroup2[5]">六</el-checkbox>
                            <el-checkbox label="7" :disabled="etdGroup2[6]" style="margin-right:0">日</el-checkbox>
                          </el-checkbox-group>
                        </div>
                        <div class="range-picker-wrapper">
                          <div>T/T</div>
                          <div class="range-picker">
                            <el-slider
                              v-model="range"
                              :step="1"
                              :min="minTime"
                              :max="maxTime"
                              @change="checkBoxFilter"
                            ></el-slider>
                            <span class="label range-label">{{minTime}}</span>
                            <span class="label range-label end-label">{{maxTime}}</span>
                            <!-- <span class="label select-label" style="left: 60.4px; z-index: 1;">21</span> -->
                          </div>
                        </div>
                        <div>ETA</div>
                        <div>
                          <el-checkbox-group v-model="etaGroup" @change="checkBoxFilter">
                            <el-checkbox label="1" :disabled="etaGroup2[0]">一</el-checkbox>
                            <el-checkbox label="2" :disabled="etaGroup2[1]">二</el-checkbox>
                            <el-checkbox label="3" :disabled="etaGroup2[2]">三</el-checkbox>
                            <el-checkbox label="4" :disabled="etaGroup2[3]">四</el-checkbox>
                            <el-checkbox label="5" :disabled="etaGroup2[4]">五</el-checkbox>
                            <el-checkbox label="6" :disabled="etaGroup2[5]">六</el-checkbox>
                            <el-checkbox label="7" :disabled="etaGroup2[6]" style="margin-right:0">日</el-checkbox>
                          </el-checkbox-group>
                        </div>
                      </div>
                    </div>
                  </el-collapse-item>
                  <el-collapse-item title="船公司" name="2">
                    <div class="el-collapse-item__content">
                      <div class="ship-checkbox">
                        <el-checkbox-group v-model="companyGroup" @change="checkBoxFilter">
                          <el-checkbox
                            :indeterminate="allCompany"
                            label="全部"
                            class="el-checkbox-double"
                            @change="allCompanyChange"
                            :disabled="allCompanyDisabled"
                          >全部</el-checkbox>
                          <el-checkbox
                            :label="name"
                            class="el-checkbox-double"
                            v-for="name in companyList"
                            :key="name"
                            :v-model="true"
                            @change="saveRecordByCompany($event,name)"
                          >{{name}}</el-checkbox>
                        </el-checkbox-group>
                      </div>
                    </div>
                  </el-collapse-item>
                  <el-collapse-item title="码头" name="3">
                    <div class="el-collapse-item__content">
                      <div class="port-box">
                        <h5>起运港</h5>
                        <div>
                          <el-checkbox-group v-model="polGroup" @change="checkBoxFilter">
                            <el-checkbox
                              :indeterminate="allPol"
                              label="全部"
                              class="el-checkbox-double-terninal"
                              @change="allPolChange"
                              :disabled="allPolDisabled"
                            >全部</el-checkbox>
                            <el-checkbox
                              :label="name"
                              class="el-checkbox-double-terninal"
                              v-for="name in polTerninalList"
                              :key="name"
                              :title="name"
                            >{{name}}</el-checkbox>
                          </el-checkbox-group>
                        </div>
                        <h5 class="boder-line">目的港</h5>
                        <div>
                          <el-checkbox-group v-model="podGroup" @change="checkBoxFilter">
                            <el-checkbox
                              :indeterminate="allPod"
                              label="全部"
                              class="el-checkbox-double-terninal"
                              @change="allPodChange"
                              :disabled="allPodDisabled"
                            >全部</el-checkbox>
                            <el-checkbox
                              :label="name"
                              class="el-checkbox-double-terninal"
                              v-for="name in podTerninalList"
                              :key="name"
                              :title="name"
                            >{{name}}</el-checkbox>
                          </el-checkbox-group>
                        </div>
                      </div>
                    </div>
                  </el-collapse-item>
                </el-collapse>
                <div class="btn-box">
                  <button class="searchBtn" @click="reSetAll">清空条件</button>
                </div>
              </div>
            </div>
          </transition>
        </div>
        <div class="list-content">
          <div class="content-box" v-loading="loading">
            <div class="data-list-title">
              <div class="m-condition-box">
                <div class="item item-1">船公司/航线/船名/航次</div>
                <div class="item item-2">
                  ETD
                  <sup
                    class="iconfont icon-sj-left"
                    data-sort="asc"
                    data-type="etdTime"
                    data-index="0"
                    @click="sort('asc','etdTime',0,true)"
                  ></sup>
                  <sub
                    data-sort="desc"
                    data-type="etdTime"
                    data-index="0"
                    class="iconfont icon-xjiffangxiangsanjiaozheng3"
                    @click="sort('desc','etdTime',0,true)"
                  ></sub>
                </div>
                <div class="item item-3">
                  航程
                  <sup
                    class="iconfont icon-sj-left"
                    data-sort="asc"
                    data-type="transSort"
                    data-index="1"
                    @click="sort('asc','transSort',1,true)"
                  ></sup>
                  <sub
                    data-sort="desc"
                    data-type="transSort"
                    data-index="1"
                    class="iconfont icon-xjiffangxiangsanjiaozheng3"
                    @click="sort('desc','transSort',1,true)"
                  ></sub>
                </div>
                <div class="item item-4">
                  ETA
                  <sup
                    class="iconfont icon-sj-left"
                    data-sort="asc"
                    data-type="etaTime"
                    data-index="2"
                    @click="sort('asc','etaTime',2,true)"
                  ></sup>
                  <sub
                    data-sort="desc"
                    data-type="etaTime"
                    data-index="2"
                    class="iconfont icon-xjiffangxiangsanjiaozheng3"
                    @click="sort('desc','etaTime',2,true)"
                  ></sub>
                </div>
                <div class="item item-5">详情</div>
              </div>
            </div>
            <div>
              <div class="fob-ship-nodata" v-if="scheduleList.length == 0">
                <div v-show="!haveRes">
                  <div class="fob-ship-nodata-img"></div>
                  <div class="fob-ship-nodata-text">
                    <span>抱歉，未找到符合条件的船期，一定是哪里出现了问题，期待您的反馈</span>
                    <span class="fob-ship-nodata-text-emoji"></span>
                    <span>！</span>
                  </div>
                  <button class="fob-ship-nodata-btn" @click="feedback">立即反馈，拿红包</button>
                </div>
              </div>

              <div
                class="fob-ship"
                v-for="(schedule,scheduleKey) in scheduleList"
                :key="scheduleKey"
              >
                <div class="item item-1">
                  <div class="shipper">
                    <ul>
                      <li v-for="(scac,scacKey) in schedule.logos" :key="scacKey">
                        <img
                          :class="(schedule.logos.length > 1 && scacKey == 0 && scac.scac == scac.motherShipScac) ?'list-logo mother-ship-border':'list-logo'"
                          :src="scac.logoUrl"
                        />
                      </li>
                    </ul>
                    <p
                      :title="schedule.routeCodes.toUpperCase()"
                    >{{schedule.routeCodes.toUpperCase()}}</p>
                    <p
                      class="blue"
                    >{{getMotherShipRouteCode2(schedule.info).vessel.toUpperCase()}}/{{schedule.firstVoyage}}</p>
                  </div>
                </div>
                <div class="item item-2">
                  <h5>{{schedule.etd}}</h5>
                  {{schedule.polt.toUpperCase()}}
                </div>
                <div class="item item-3">
                  <div class="direct">
                    <h6>{{schedule.transTime}}</h6>
                    <p class="transit-port">{{schedule.isTransit.toUpperCase()}}</p>
                  </div>
                </div>
                <div class="item item-4">
                  <h5>{{schedule.eta}}</h5>
                  {{schedule.podt.toUpperCase()}}
                </div>
                <div class="item item-5">
                  <p @click="goScheduleDetails(schedule)">
                    <a href="javascript:void(0);" class="btn">详情</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fips } from "crypto";
import { setTimeout } from "timers";
export default {
  name: "Table",
  data() {
    return {
      scheduleList: [],
      total: 0,
      loading: true,
      haveRes: true,
      weekBanner: [],
      companyList: [],
      polTerninalList: [],
      podTerninalList: [],
      range: 0,
      minTime: 0,
      maxTime: 0,
      allCompany: false,
      allPol: false,
      allPod: false,
      isTransitGroup: [],
      etdGroup: [],
      etaGroup: [], //"1", "2", "3", "4", "5", "6", "7"
      companyGroup: [],
      polGroup: [],
      podGroup: [],
      tempList: [],
      activeNames: ["1", "2", "3"],
      totalWeeks: 4,
      isTransitGroup2: [true, true],
      etdGroup2: [true, true, true, true, true, true, true],
      etaGroup2: [true, true, true, true, true, true, true],
      allCompanyDisabled: true,
      allPolDisabled: true,
      allPodDisabled: true,
      hideFilterFlag: true,
      userId:
        this.getCookie("authId") != null && this.getCookie("authId") != ""
          ? this.getCookie("authId")
          : "",
      dateType: "1",
      weekCountList: [],
      zhida: 0,
      zhongzhuan: 0,
      isFirstInit: true,
      weeksOut:'',
    };
  },
  components: {},
  computed: {},
  methods: {
    // 合并
    merge(arr){
      $.each(arr,function(k,v){
        $.each(arr,function(i,j){
          if(arr){

          }
        })
      })
    },
    // 取大船航线code
    getMotherShipRouteCode(info) {
      var littleShip = [
        "WATER",
        "TRACE",
        "FEEDER",
        "BARGE",
        "FEEDER SERVICE FAR EAST",
        "FEEDER SERVICE FESEA",
        "RAIL"
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
        routeCode: routeCode ? routeCode : "-",
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
    // 保存单个船公司查询记录
    saveRecordByCompany(checked, name) {
      if (checked) {
        var params = {};
        var weekArr = $("div[id^='week_tab_']");
        var that = this;
        var idstr = weekArr
          .eq(0)
          .attr("id")
          .split("_")[4]
          .split("to")[0];
        if (idstr.indexOf("-") != -1) {
          idstr = idstr.replace(/-/g, "/");
        }
        params.start = new Date(idstr);
        //日期格式化
        var y = params.start.getFullYear();
        var m = params.start.getMonth() + 1;
        var d = params.start.getDate();
        if (m < 10) {
          m = "0" + m;
        }
        if (d < 10) {
          d = "0" + d;
        }
        var startTime = y + "-" + m + "-" + d;
        var endTime = "";
        //取最后一个tab页的结束时间
        var idstr = weekArr
          .eq(weekArr.length - 1)
          .attr("id")
          .split("_")[4]
          .split("to")[1];
        if (idstr.indexOf("-") != -1) {
          idstr = idstr.replace(/-/g, "/");
        }
        params.end = new Date(idstr);
        //日期格式化
        var y = params.end.getFullYear();
        var m = params.end.getMonth() + 1;
        var d = params.end.getDate();
        if (m < 10) {
          m = "0" + m;
        }
        if (d < 10) {
          d = "0" + d;
        }
        endTime = y + "-" + m + "-" + d;
        params.polId = that.$parent.$refs.searchBar.polId;
        params.podId = that.$parent.$refs.searchBar.podId;
        params.dateType = that.$parent.$refs.searchBar.dateType;
        $.ajax({
          url:
            this.GLOBAL.url +
            "schedules/web/saveRecordByScac?polCity=" +
            params.polId +
            "&podCity=" +
            params.podId +
            "&dateType=" +
            params.dateType +
            "&startTime=" +
            startTime +
            "&endTime=" +
            endTime +
            "&userId=" +
            that.userId +
            "&companyName=" +
            name,
          type: "GET",
          headers: {
            Authorization: this.getToken()
          },
          beforeSend: function() {},
          success: function(data) {
            if (data.status == 1) {
            } else {
            }
          },
          error: function(e) {}
        });
      }
    },
    //获取搜索结果
    getSearchResult(params, id) {
      var that = this;
      //刷新标签页
      this.weekTabInit(id, function() {
        that.getTotalCount(params);
        that.isTransitGroup2 = [true, true];
        that.etdGroup2 = [true, true, true, true, true, true, true];
        that.etaGroup2 = [true, true, true, true, true, true, true];
        var weekArr = $("div[id^='week_tab_']");
        var eqindex = 0;
        //日期格式化
        var y = params.start.getFullYear();
        var m = params.start.getMonth() + 1;
        var d = params.start.getDate();
        if (m < 10) {
          m = "0" + m;
        }
        if (d < 10) {
          d = "0" + d;
        }
        var startTime = y + "-" + m + "-" + d;
        var endTime = "";
        //  拼接参数，是离港日还是到港日
        if (params.dateType == 1) {
          //如果查的是离港日，搜索时间就是起始时间，结束时间就是周tab的第一个结束时间，当前周日
          if (id == undefined || typeof id != "string") {
            //如果没有id那么就是首次进入页面
            //定位当前搜索日期属于哪一个标签页
            var searchDate = new Date(that.$parent.$refs.searchBar.start);
            var compareStr = searchDate.getTime();

            $.each(weekArr, function(x, y) {
              var compareStr2 = new Date(
                $(y)
                  .attr("id")
                  .split("_")[4]
                  .split("to")[0]
                  .replace(/-/g, "/")
              );
              var compareStr3 = new Date(
                $(y)
                  .attr("id")
                  .split("_")[4]
                  .split("to")[1]
                  .replace(/-/g, "/")
              );
              if (
                compareStr <= compareStr3.getTime() &&
                compareStr >= compareStr2.getTime()
              ) {
                eqindex = x;
              }
            });

            var idstr = weekArr
              .eq(eqindex)
              .attr("id")
              .split("_")[4]
              .split("to")[0];
            if (idstr.indexOf("-") != -1) {
              idstr = idstr.replace(/-/g, "/");
            }
            var sss = new Date(idstr);
            var y = sss.getFullYear();
            var m = sss.getMonth() + 1;
            var d = sss.getDate();
            if (m < 10) {
              m = "0" + m;
            }
            if (d < 10) {
              d = "0" + d;
            }
            startTime = y + "-" + m + "-" + d;
            var idstr = weekArr
              .eq(eqindex)
              .attr("id")
              .split("_")[4]
              .split("to")[1];
            if (idstr.indexOf("-") != -1) {
              idstr = idstr.replace(/-/g, "/");
            }
            params.end = new Date(idstr);
          } else {
            var darr = id.split("_");
            var dateStr = darr[darr.length - 1].split("to")[0];
            if (dateStr.indexOf("-") != -1) {
              dateStr = dateStr.replace(/-/g, "/");
            }
            params.start = new Date(dateStr);
            var y = params.start.getFullYear();
            var m = params.start.getMonth() + 1;
            var d = params.start.getDate();
            if (m < 10) {
              m = "0" + m;
            }
            if (d < 10) {
              d = "0" + d;
            }
            startTime = y + "-" + m + "-" + d;
            var dateStr = darr[darr.length - 1].split("to")[1];
            if (dateStr.indexOf("-") != -1) {
              dateStr = dateStr.replace(/-/g, "/");
            }
            params.end = new Date(dateStr);
          }
        } else {
          //如果查的是到港日，搜索时间就是结束时间，开始时间就是周tab的第一个开始时间
          if (id == undefined || typeof id != "string") {
            var idstr = weekArr
              .eq(weekArr.length - 1)
              .attr("id")
              .split("_")[4]
              .split("to")[0];
            if (idstr.indexOf("-") != -1) {
              idstr = idstr.replace(/-/g, "/");
            }
            params.start = new Date(idstr);
            var y = params.start.getFullYear();
            var m = params.start.getMonth() + 1;
            var d = params.start.getDate();
            if (m < 10) {
              m = "0" + m;
            }
            if (d < 10) {
              d = "0" + d;
            }
            startTime = y + "-" + m + "-" + d;
            var idstr = weekArr
              .eq(weekArr.length - 1)
              .attr("id")
              .split("_")[4]
              .split("to")[1];
            if (idstr.indexOf("-") != -1) {
              idstr = idstr.replace(/-/g, "/");
            }
            params.end = new Date(idstr);
          } else {
            var darr = id.split("_");
            var dateStr = darr[darr.length - 1].split("to")[0];
            if (dateStr.indexOf("-") != -1) {
              dateStr = dateStr.replace(/-/g, "/");
            }
            params.start = new Date(dateStr);
            var y = params.start.getFullYear();
            var m = params.start.getMonth() + 1;
            var d = params.start.getDate();
            if (m < 10) {
              m = "0" + m;
            }
            if (d < 10) {
              d = "0" + d;
            }
            startTime = y + "-" + m + "-" + d;
            var dateStr = darr[darr.length - 1].split("to")[1];
            if (dateStr.indexOf("-") != -1) {
              dateStr = dateStr.replace(/-/g, "/");
            }
            params.end = new Date(dateStr);
          }
        }
        //日期格式化
        var y = params.end.getFullYear();
        var m = params.end.getMonth() + 1;
        var d = params.end.getDate();
        if (m < 10) {
          m = "0" + m;
        }
        if (d < 10) {
          d = "0" + d;
        }
        endTime = y + "-" + m + "-" + d;

        //确定当前tab
        //id不为空是切换标签页时的搜索
        if (id != undefined && typeof id == "string") {
          $("#" + id).addClass("active");
          $(".fob-ship-nodata").css(
            "height",
            $(".hdtxt1")
              .next()
              .css("height")
          );
          that.haveRes = true;
        } else {
          //id为空是点击搜索按钮时的搜索
          // 搜索时清空复选框
          that.resetList();
          $("div[id^='week_tab_']").removeClass("active");
          if (that.$parent.$refs.searchBar.dateType == "1") {
            weekArr.eq(eqindex).addClass("active");
          } else {
            weekArr.eq(weekArr.length - 1).addClass("active");
          }
        }
       
        $.ajax({
          url:
            that.GLOBAL.url +
            "schedules/web/schedule?polCity=" +
            params.polId +
            "&podCity=" +
            params.podId +
            "&startTime=" +
            startTime +
            "&dateType=" +
            params.dateType +
            "&endTime=" +
            endTime +
            "&userId=" +
            that.userId +
            "&userIp=" +
            returnCitySN.cip +
            "&weeksOut=" + that.weeksOut,
          type: "GET",
          headers: {
            Authorization: that.getToken()
          },
          beforeSend: function() {
            that.loading = true;
          },
          success: function(data) {
            if (data.status == 1 && data.message == "SUCCESS") {
              // 这里处理的共仓，特别恶心，这里注释多写点
              var ids = []; // 这个ids是根据共仓条件生成的一个唯一字符串
              var schedules = []; // 根据共仓条件处理完的船期数据
              var transTimeList = []; // 全部船期的最小和最大航程，左边筛选条件的最大值和最小值
              data.content = that.unique(data.content); // 去重，不知道起没起作用
              //data.content = that.merge(data.content);// 把码头不同其他字段相同的数据合并为一条，比如原来是南港和北港两条数据，合并为一条 南港/北港
              // 循环每一条，找这一条有没有共仓的船期
              $.each(data.content, function(k, v) {
                // 这条船期是不是已经处理过了
                var totalDuration = "";
                if (ids.indexOf(v.id) == -1) {
                  // 如果没处理过，继续走
                  // 判断是不是母船，共仓的条件是，pol+pod+船名+同一周
                  // 如果共仓，多个船公司共同经营这一艘船，需要判断这艘船是属于哪家船公司的
                  // 母船属于哪家船公司是去一个网站爬取的
                  if (v.carrierName == v.motherShipScac) {
                    // 如果母船所属船公司等于当前的船公司，把scac前面拼一个0，做排序用，这个船公司就会排在第一位
                    v.scac = "0" + v.scac;
                  }
                  var motherShipScacs = [v.scac + "@" + v.motherShipScac];
                  var carrierNames = [v.scac + "@" + v.carrierName];
                  // logo名跟四字码一样，如pabv.png
                  var logos = [v.scac];
                  // 拼接出来的航线名
                  var routeCodeStr = "";
                  // 航线list，拼上scac做排序
                  var routeCodeList = [
                    v.scac + "@" + that.getMotherShipRouteCode2(v).routeCode
                  ];
                  // 码头list，拼上scac做排序
                  var polterminalList = [
                    v.scac + "@" + v.polTerninal
                  ];
                  var podterminalList = [
                    v.scac + "@" + v.podTerninal
                  ];
                  // 公司四字码
                  var scacs = [v.scac];
                  // 公司名集合，里面是scac和名字，详情需要用到这两个参数
                  var companyNameList = [
                    {
                      scac: v.scac,
                      name: v.carrierName
                    }
                  ];
                  // 航线代码list，拼上scac做排序
                  var paramList = [
                    v.scac + "@" + that.getMotherShipRouteCode2(v).routeCode
                  ];
                  // ETA,ETD的list，拼上scac做排序
                  var timeList = [v.scac + "@" + v.etd + "@" + v.eta];
                  // 航次list，拼上scac做排序
                  var voyageList = [
                    v.scac + "@" + that.getMotherShipRouteCode2(v).voyage
                  ];
                  // 航程list，拼上scac做排序
                  var transitTimeList = [v.scac + "@" + v.totalDuration];
                  // 离港日星期list，拼上scac做排序
                  var dweekList = [v.scac + "@" + v.etdWeek];
                  // 到港日星期list，拼上scac做排序
                  var aweekList = [v.scac + "@" + v.etaWeek];
                  // 我定义的id的list，拼上scac做排序
                  var idList = [v.scac + "@" + v.id];
                  // 第一艘船名
                  var firstVoyage = "";
                  // 公司名list
                  var cnameList = [];
                  if (v.isTransit == "0") {
                    // 直达才有共仓这一说法
                    //如果是直达，就找有没有共仓的
                    // $.trim(v.voyage.toUpperCase()) == $.trim(value.voyage.toUpperCase()) &&
                    $.each(data.content, function(key, value) {
                      // 同样这里循环找
                      if (
                        // 如果这里生成的id跟上一层的id一致说明共仓了
                        $.trim(v.polCode.toUpperCase()) ==
                          $.trim(value.polCode.toUpperCase()) &&
                        $.trim(v.podCode.toUpperCase()) ==
                          $.trim(value.podCode.toUpperCase()) &&
                        $.trim(v.vessel.toUpperCase()) ==
                          $.trim(value.vessel.toUpperCase()) &&
                        v.isTransit == value.isTransit && // 必须是直达，而且两个都是直达
                        v.id != value.id && // 并且两个数据不是一条，之前取到的有重复数据
                        v.scac.replace("0", "") != value.scac.replace("0", "")
                      ) {
                        motherShipScacs.push(
                          value.scac + "@" + value.motherShipScac
                        );
                        carrierNames.push(value.scac + "@" + value.carrierName);
                        // 往处理过的共仓id内添加
                        ids.push(value.id);
                        // 添加logos
                        logos.push(value.scac);
                        // 如果scac没有再添加，保证唯一
                        if (scacs.indexOf(value.scac) == -1) {
                          scacs.push(value.scac);
                        }
                        // 如果公司名没有再添加，保证唯一
                        if (cnameList.indexOf(value.carrierName) == -1) {
                          cnameList.push(value.carrierName);
                          // 公司名唯一，再添加公司信息
                          companyNameList.push({
                            scac: value.scac,
                            name: value.carrierName
                          });
                        }
                        if(polterminalList.indexOf(value.scac + "@" + value.polTerninal) == -1){
                          polterminalList.push(value.scac + "@" + value.polTerninal)
                        }
                        if(podterminalList.indexOf(value.scac + "@" + value.podTerninal) == -1){
                          podterminalList.push(value.scac + "@" + value.podTerninal)
                        }
                        // 如果航线code没取到，这里用减号占位
                        if (value.routeCode == "") {
                          value.routeCode = "-";
                        }
                        // 航线代码list，拼上scac做排序，保证跟上面声明的一致
                        var routeCodeTemp =
                          value.scac +
                          "@" +
                          that.getMotherShipRouteCode2(value).routeCode;
                        if (routeCodeList.indexOf(routeCodeTemp) == -1) {
                          // 如果没有再添加
                          routeCodeList.push(routeCodeTemp);
                        }
                        // 航线代码list，详情里需要的，拼上scac做排序，保证跟上面声明的一致
                        var param =
                          value.scac +
                          "@" +
                          that.getMotherShipRouteCode2(value).routeCode;
                        if (paramList.indexOf(param) == -1) {
                          // 如果没有再添加
                          paramList.push(param);
                        }
                        // ETA,ETD的list，拼上scac做排序，保证跟上面声明的一致
                        var timeStr =
                          value.scac + "@" + value.etd + "@" + value.eta;
                        if (timeList.indexOf(timeStr) == -1) {
                          //  如果没有再添加
                          timeList.push(timeStr);
                        }
                        // 航次list，拼上scac做排序，保证跟上面声明的一致
                        var voyageStr =
                          value.scac +
                          "@" +
                          that.getMotherShipRouteCode2(value).voyage;
                        if (voyageList.indexOf(voyageStr) == -1) {
                          // 如果没有再添加
                          voyageList.push(voyageStr);
                        }
                        // 处理的id的list，拼上scac做排序，保证跟上面声明的一致
                        var idStr = value.scac + "@" + value.id;
                        if (idList.indexOf(idStr) == -1) {
                          idList.push(idStr);
                        }
                        // 航行时间list，拼上scac做排序，保证跟上面声明的一致
                        var transitTimeStr =
                          value.scac + "@" + value.totalDuration;
                        if (transitTimeList.indexOf(transitTimeStr) == -1) {
                          transitTimeList.push(transitTimeStr);
                        }
                        // 离港星期list，拼上scac做排序，保证跟上面声明的一致
                        var dweekStr = value.scac + "@" + value.etdWeek;
                        if (dweekList.indexOf(dweekStr) == -1) {
                          dweekList.push(dweekStr);
                        }
                        // 到港星期list，拼上scac做排序，保证跟上面声明的一致
                        var aweekStr = value.scac + "@" + value.etaWeek;
                        if (aweekList.indexOf(aweekStr) == -1) {
                          aweekList.push(aweekStr);
                        }
                      }
                    });
                  }
                  // 航线正序排序
                  routeCodeList.sort();
                  // 时间正序排序
                  timeList.sort();
                  // 航次正序排序
                  voyageList.sort();
                  // id正序排序
                  idList.sort();
                  // 航行时间正序排序
                  transitTimeList.sort();
                  // 离港星期正序排序
                  dweekList.sort();
                  // 到港星期正序排序
                  aweekList.sort();
                  polterminalList.sort();
                  podterminalList.sort();
                  // 取到第一个航次里的航次名，分割出来的0是scac，1是航次，下面类似的代码也是这个意思
                  firstVoyage = voyageList[0].split("@")[1];
                  totalDuration = transitTimeList[0].split("@")[1];
                  var etdWeek = dweekList[0].split("@")[1];
                  var etaWeek = aweekList[0].split("@")[1];
                  $.each(routeCodeList, function(routeK, routeCodeV) {
                    // 这里拼接航线code，用/分隔，保证最后一个航次不加/
                    if (routeK == routeCodeList.length - 1) {
                      routeCodeStr += routeCodeV.split("@")[1];
                    } else {
                      routeCodeStr += routeCodeV.split("@")[1] + "/";
                    }
                  });
                  // logos去一遍重
                  logos = that.unique(logos);
                  // logo正序排序
                  logos.sort();
                  motherShipScacs.sort();
                  carrierNames.sort();
                  // 暂存一下logo
                  var logosTemp = [];
                  $.each(logos, function(logosK, logosV) {
                    // 为了避免页面出现图片404，先require再放到src里
                    var logoUrl = require("../assets/images/my-logos2/" +
                      logosV.replace("0", "") +
                      ".png");
                    logosTemp.push({
                      logoUrl: logoUrl,
                      motherShipScac: motherShipScacs[logosK].split("@")[1],
                      scac: carrierNames[logosK].split("@")[1]
                    });
                  });
                  // 处理完了放回logo列表里
                  logos = logosTemp;
                  // 取出ETD
                  v.etd = timeList[0].split("@")[1];
                  // 取出ETA
                  v.eta = timeList[0].split("@")[2];
                  // 处理显示时间的格式
                  var etd =
                    (that.getWeek(v.etd) ? that.getWeek(v.etd) : "-") +
                    "（" +
                    (v.etd.substring(5, 10) ? v.etd.substring(5, 10) : "-") +
                    "）";
                  var eta =
                    (that.getWeek(v.eta) ? that.getWeek(v.eta) : "-") +
                    "（" +
                    (v.eta.substring(5, 10) ? v.eta.substring(5, 10) : "-") +
                    "）";

                  if (
                    totalDuration == undefined ||
                    totalDuration == "" ||
                    totalDuration == null
                  ) {
                    // 这里如果总航程没抓取到，这里就放个0
                    totalDuration = 0;
                  }
                  // 显示航程+天
                  var transTime = totalDuration + "天";
                  var transSort = totalDuration;
                  var isTransit = "直达";
                  if (v.isTransit == "1") {
                    // 等于1是中转
                    isTransit = "中转";
                    if (v.transitInfoList.length > 0) {
                      isTransit = v.transitInfoList[0].transitPortEn;
                    }
                  }
                  // 如果船名是空，放减号占位
                  if (v.vessel == "") {
                    v.vessel = "-";
                  }
                  // 如果航次是空，放减号占位
                  if (v.voyage == "") {
                    v.voyage = "-";
                  }
                  // 这里处理js里的new Date()兼容问题，safari等苹果的浏览器不识别2019-02-02里的-，必须的替换成/才能识别，否则显示Nan
                  if (v.etd.indexOf("-") != -1) {
                    v.etd = v.etd.replace(/-/g, "/");
                  }
                  if (v.eta.indexOf("-") != -1) {
                    v.eta = v.eta.replace(/-/g, "/");
                  }
                  var ids2 = "";
                  $.each(idList, function(idIndex, id) {
                    ids2 += id.split("@")[1] + "-";
                  });
                  ids2 = ids2.substring(0, ids2.length - 1);
                  // 把处理完的数据添加到新的schedule里，用于列表显示
                  var polt = polterminalList[0].split("@")[1]
                  var podt = podterminalList[0].split("@")[1]
                  schedules.push({
                    logos: logos,
                    info: v,
                    routeCodes: routeCodeStr == "" ? "-" : routeCodeStr,
                    etd: etd,
                    eta: eta,
                    transTime: transTime,
                    isTransit: isTransit,
                    polt: polt?polt:'',
                    podt: podt?podt:'',
                    etdTime: new Date(v.etd).getTime(),
                    etaTime: new Date(v.eta).getTime(),
                    etdWeek: etdWeek,
                    etaWeek: etaWeek,
                    scacs: scacs,
                    companyNameList: companyNameList,
                    paramList: paramList,
                    firstVoyage: firstVoyage,
                    firstId: ids2, // 第一个id
                    transSort: transSort
                  });
                }
                // 添加到航程列表
                transTimeList.push(totalDuration);
              });
              that.loading = false;
              // 赋给vue
              that.scheduleList = schedules;
              that.tempList = schedules;
              // 排序，取出最大和最小值
              transTimeList.sort(function(a, b) {
                return a - b;
              });
              if (transTimeList.length > 0) {
                that.minTime = Number(transTimeList[0]); // 最小值
                that.maxTime = Number(transTimeList[transTimeList.length - 1]); // 最大值
                that.range = Number(transTimeList[transTimeList.length - 1]); // 范围
              } else {
                that.minTime = 0;
                that.maxTime = 0;
                that.range = 0;
              }
              if (that.scheduleList.length > 0) {
                // 复选框初始化
                that.allCompanyDisabled = false;
                that.allPolDisabled = false;
                that.allPodDisabled = false;
              }
              //设置复选框，没有的设置为不可点击
              that.setCheckBoxDisAbled(that.scheduleList);
              that.checkBoxFilter();
              if (params.dateType == 1) {
                // 离港首次排序etd正序
                that.sort("asc", "etdTime", 0, false);
              } else {
                // 到港首次排序eta正序
                that.sort("asc", "etaTime", 2, false);
              }
            } else if (data.status == 3) {
              that.loading = false; // 关闭loading
              that.haveRes = false; // 是否显示反馈页面
              // that.resetList();
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
              that.loading = false;
              that.haveRes = false;
              // that.resetList();
              that.$message({
                message: "获取船期列表失败",
                type: "error",
                customClass: "base-message-zindex"
              });
            }
          },
          error: function(xhr, textStatus, errorThrown) {
            that.loading = false;
            that.haveRes = false;
            // that.resetList();
          }
        });
      });
    },
    // 搜索时重置筛选条件
    resetList() {
      this.scheduleList = [];
      this.companyList = [];
      this.polTerninalList = [];
      this.podTerninalList = [];
      this.range = 0;
      this.minTime = 0;
      this.maxTime = 0;
      this.allCompany = false;
      this.allPol = false;
      this.allPod = false;
      this.isTransitGroup = [];
      this.etdGroup = [];
      this.etaGroup = []; //"1", "2", "3", "4", "5", "6", "7"
      this.companyGroup = [];
      this.polGroup = [];
      this.podGroup = [];
      this.isTransitGroup2 = [true, true];
      this.etdGroup2 = [true, true, true, true, true, true, true];
      this.etaGroup2 = [true, true, true, true, true, true, true];
      this.allCompanyDisabled = true;
      this.allPolDisabled = true;
      this.allPodDisabled = true;
    },
    //重置复选框
    resetCheckbox() {
      var that = this;
      var companyGroup = that.companyGroup;
      that.companyGroup = [];
      //场景：选择one这个公司，切换标签页后没有one这家公司，选择的复选框去掉one这个选择
      $.each(that.companyList, function(k, v) {
        $.each(companyGroup, function(i, j) {
          if (v == j) {
            that.companyGroup.push(v);
          }
        });
      });
      var polGroup = that.polGroup;
      that.polGroup = [];
      $.each(that.polGroup, function(k, v) {
        $.each(polGroup, function(i, j) {
          if (v == j) {
            that.polGroup.push(v);
          }
        });
      });
      var podGroup = that.podGroup;
      that.podGroup = [];
      $.each(that.podGroup, function(k, v) {
        $.each(podGroup, function(i, j) {
          if (v == j) {
            that.podGroup.push(v);
          }
        });
      });
    },
    //去重
    unique(arr) {
      var x = new Set(arr);
      return [...x];
    },
    //获取搜索结果
    getTotalCount(params) {
      var weekArr = $("div[id^='week_tab_']");
      var that = this;
      var idstr = weekArr
        .eq(0)
        .attr("id")
        .split("_")[4]
        .split("to")[0];
      if (idstr.indexOf("-") != -1) {
        idstr = idstr.replace(/-/g, "/");
      }
      params.start = new Date(idstr);
      //日期格式化
      var y = params.start.getFullYear();
      var m = params.start.getMonth() + 1;
      var d = params.start.getDate();
      if (m < 10) {
        m = "0" + m;
      }
      if (d < 10) {
        d = "0" + d;
      }
      var startTime = y + "-" + m + "-" + d;
      var endTime = "";
      //取最后一个tab页的结束时间
      var idstr = weekArr
        .eq(weekArr.length - 1)
        .attr("id")
        .split("_")[4]
        .split("to")[1];
      if (idstr.indexOf("-") != -1) {
        idstr = idstr.replace(/-/g, "/");
      }
      params.end = new Date(idstr);
      //日期格式化
      var y = params.end.getFullYear();
      var m = params.end.getMonth() + 1;
      var d = params.end.getDate();
      if (m < 10) {
        m = "0" + m;
      }
      if (d < 10) {
        d = "0" + d;
      }
      endTime = y + "-" + m + "-" + d;
      that.weeksOut = endTime
      // 20191118 start 传每一周时间段，获取每周的船公司、条数、码头
      var weekStr = "";
      $.each(this.weekBanner, function(weekBannerIndex, weekBanner) {
        $.each(weekBanner, function(weekIndex, week) {
          weekStr += week.week + ",";
        });
      });
      weekStr = weekStr.substring(0, weekStr.length - 1);
      // 20191118 end
      if (that.isFirstInit) {
        $.ajax({
          url:
            this.GLOBAL.url +
            "schedules/web/shipTotal?polCity=" +
            params.polId +
            "&podCity=" +
            params.podId +
            "&dateType=" +
            params.dateType +
            "&startTime=" +
            startTime +
            "&endTime=" +
            endTime +
            "&userId=" +
            that.userId +
            "&weeks=" +
            weekStr,
          type: "GET",
          headers: {
            Authorization: this.getToken()
          },
          beforeSend: function() {},
          success: function(data) {
            if (data.status == 1 && data.message == "SUCCESS") {
              that.weekCountList = data.content;

              if (params.dateType == 1) {
                that.total = data.content[0].shipTotal;
                var carrierList = data.content[0].carrierNameList;
                that.companyList = carrierList;
                that.polTerninalList = data.content[0].polWharfList;
                that.podTerninalList = data.content[0].podWharfList;
                // 直达和中转条数
                that.zhida = data.content[0].zhida;
                that.zhongzhuan = data.content[0].zhongzhuan;
              } else {
                var weekCountListLength = data.content.length - 1;
                that.total = data.content[weekCountListLength].shipTotal;
                var carrierList =
                  data.content[weekCountListLength].carrierNameList;
                that.companyList = carrierList;
                that.polTerninalList =
                  data.content[weekCountListLength].polWharfList;
                that.podTerninalList =
                  data.content[weekCountListLength].podWharfList;
                // 直达和中转条数
                that.zhida = data.content[weekCountListLength].zhida;
                that.zhongzhuan = data.content[weekCountListLength].zhongzhuan;
              }

              // 每一周多少条
              $.each(that.weekBanner, function(k, v) {
                $.each(v, function(i, j) {
                  j.count = data.content[i].shipTotal;
                });
              });
              that.isFirstInit = false;
            } else {
              that.$message({
                message: "获取基础信息失败",
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
    // 分组
    group(array, subGroupLength) {
      let index = 0;
      let newArray = [];
      while (index < array.length) {
        newArray.push(array.slice(index, (index += subGroupLength)));
      }
      return newArray;
    },
    // 切换周
    changeWeek(id) {
      $("div[id^='week_tab_']").removeClass("active");
      $("#" + id).addClass("active");
      // 切换筛选框
      var index = 0;
      var weekArray = $("div[id^='week_tab_']");
      var weekLength = weekArray.length - 1;
      $.each(weekArray, function(k, v) {
        if ($(v).attr("id") == id) {
          index = k;
        }
      });
      this.total = this.weekCountList[index].shipTotal;
      var carrierList = this.weekCountList[index].carrierNameList;
      this.companyList = carrierList;
      this.polTerninalList = this.weekCountList[index].polWharfList;
      this.podTerninalList = this.weekCountList[index].podWharfList;
      this.zhida = this.weekCountList[index].zhida;
      this.zhongzhuan = this.weekCountList[index].zhongzhuan;
      //参数
      var params = {
        pol: this.$parent.pol,
        polId: this.$parent.polId,
        pod: this.$parent.pod,
        podId: this.$parent.podId,
        start: this.$parent.start,
        dateType: this.$parent.dateType
      };
      this.$parent.goSearch(
        $("#" + id)
          .addClass("active")
          .attr("id")
      );
    },
    // 跳转详情页
    goScheduleDetails(schedule) {
      //week_tab_0_0_2019-8-7to2019-8-11
      var id = $(document)
        .find(".animateItem")
        .find(".active")
        .attr("id");
      var startTime = id.split("_")[4].split("to")[0];
      var endTime = id.split("_")[4].split("to")[1];
      var sm = startTime.split("-")[1];
      var sd = startTime.split("-")[2];
      if (sm < 10) {
        sm = "0" + sm;
      }
      if (sd < 10) {
        sd = "0" + sd;
      }
      var em = endTime.split("-")[1];
      var ed = endTime.split("-")[2];
      if (em < 10) {
        em = "0" + em;
      }
      if (ed < 10) {
        ed = "0" + ed;
      }
      startTime = startTime.split("-")[0] + "-" + sm + "-" + sd;
      endTime = endTime.split("-")[0] + "-" + em + "-" + ed;
      //切换到列表
      this.$parent.goDetails({
        pol: this.$parent.$refs.searchBar.pol,
        polId: this.$parent.$refs.searchBar.polId,
        pod: this.$parent.$refs.searchBar.pod,
        podId: this.$parent.$refs.searchBar.podId,
        vessel: schedule.info.vessel,
        voyage: schedule.info.voyage,
        dateType: this.$parent.$refs.searchBar.dateType,
        start: this.$parent.$refs.searchBar.start,
        id: schedule.firstId,
        isTransit: schedule.info.isTransit,
        isGc: schedule.scacs.length > 1 ? 1 : 0,
        startTime: startTime,
        endTime: endTime
      });
    },
    //定义按字段排序的规则函数
    by(name, orderBy) {
      return function(o, p) {
        var a, b;
        if (typeof o === "object" && typeof p === "object" && o && p) {
          if (orderBy == "desc") {
            a = p[name];
            b = o[name];
          } else {
            a = o[name];
            b = p[name];
          }

          if (a === b) {
            return 0;
          }
          var aIsNumber = false;
          var bIsNumber = false;
          try {
            var t = Number(a);
            aIsNumber = true;
          } catch {}
          try {
            var t = Number(b);
            bIsNumber = true;
          } catch {}
          if (aIsNumber && bIsNumber) {
            return Number(a) < Number(b) ? -1 : 1;
          } else {
            if (typeof a === typeof b) {
              return a < b ? -1 : 1;
            }
          }
          return typeof a < typeof b ? -1 : 1;
        } else {
          throw "error";
        }
      };
    },
    // 排序
    sort(orderBy, column, index, isClass) {
      var scheduleList = [];
      if (orderBy == "desc") {
        if (isClass) {
          $(".icon-xjiffangxiangsanjiaozheng3").removeClass("sort-active");
          $(".icon-sj-left").removeClass("sort-active");
          $(".icon-xjiffangxiangsanjiaozheng3")
            .eq(index)
            .addClass("sort-active");
        }
        scheduleList = this.scheduleList.sort(this.by(column, orderBy));
      } else if (orderBy == "asc") {
        if (isClass) {
          $(".icon-xjiffangxiangsanjiaozheng3").removeClass("sort-active");
          $(".icon-sj-left").removeClass("sort-active");
          $(".icon-sj-left")
            .eq(index)
            .addClass("sort-active");
        }
        //正序
        scheduleList = this.scheduleList.sort(this.by(column, orderBy));
      }
      this.scheduleList = scheduleList;
    },
    //清空
    reSetAll() {
      // this.$parent.$refs.searchBar.goSearch();
      window.location.reload();
    },
    checkBoxFilter() {
      var that = this;
      //拼一个拉姆达表达式
      var filterStr = "item=> item != undefined";
      if (this.isTransitGroup.length > 0) {
        filterStr +=
          "&& this.isTransitGroup.indexOf(item.info.isTransit) != -1";
      }
      if (this.etdGroup.length > 0) {
        filterStr += "&& this.etdGroup.indexOf(item.etdWeek) != -1";
      }
      if (this.etaGroup.length > 0) {
        filterStr += "&& this.etaGroup.indexOf(item.etaWeek) != -1";
      }
      if (this.companyGroup.length > 0) {
        filterStr +=
          "&& (this.companyGroup.indexOf(item.info.carrierName) != -1 || this.sameFilter(item.companyNameList))";
        // var nameStr = ''
        // $.each(that.companyGroup,function(k,v){
        //   if(v != '全部'){
        //     if(k != (that.companyGroup.length -1)){
        //       nameStr += v + ','
        //     }else{
        //       nameStr += v
        //     }
        //   }
        // })
        // this.saveRecordByCompany(nameStr);
      }
      if (this.polGroup.length > 0) {
        if (this.polGroup.indexOf("全部") == -1) {
          filterStr += "&& this.polGroup.indexOf(item.info.polTerninal) != -1 ";
        } else {
          filterStr +=
            "&& (this.polGroup.indexOf(item.info.polTerninal) != -1 || item.info.polTerninal == '')";
        }
      }
      if (this.podGroup.length > 0) {
        if (this.podGroup.indexOf("全部") == -1) {
          filterStr += "&& this.podGroup.indexOf(item.info.podTerninal) != -1";
        } else {
          filterStr +=
            "&& (this.podGroup.indexOf(item.info.podTerninal) != -1 || item.info.podTerninal == '')";
        }
      }
      if (this.range > 0) {
        filterStr += "&& this.range >= item.info.totalDuration";
      }
      this.scheduleList = this.tempList.filter(eval(filterStr));
      if (this.scheduleList == 0) {
        this.haveRes = false;
      }
      // 取当前排序
      var sortType = $(".sort-active").data("sort");
      var name = $(".sort-active").data("type");
      var index = $(".sort-active").data("index");
      if (sortType && name && index) {
        this.sort(sortType, name, index, true);
      } else {
        if (this.$parent.$refs.searchBar.dateType == 1) {
          // 离港首次排序etd正序
          this.sort("asc", "etdTime", 0, false);
        } else {
          // 到港首次排序eta正序
          this.sort("asc", "etaTime", 2, false);
        }
      }
    },
    //共仓筛选
    sameFilter(companyNameList) {
      var that = this;
      var flag = false;
      $.each(companyNameList, function(k, v) {
        if (that.companyGroup.indexOf(v.name) != -1) {
          flag = true;
        }
      });
      return flag;
    },
    //全选公司
    allCompanyChange(val) {
      // 全选框是单独的，其他复选框是接口返回的，全选的时候要把全部加到其他复选框之前，否则效果不是全选
      var arr = ["全部"];
      this.companyGroup = val ? arr.concat(this.companyList) : [];
    },
    //全选起始码头
    allPolChange(val) {
      var arr = ["全部"];
      this.polGroup = val ? arr.concat(this.polTerninalList) : [];
    },
    //全选起始码头
    allPodChange(val) {
      var arr = ["全部"];
      this.podGroup = val ? arr.concat(this.podTerninalList) : [];
    },
    //设置复选框，没有的设置成不可点击
    setCheckBoxDisAbled(scheduleList) {
      var that = this;
      $.each(scheduleList, function(k, v) {
        that.isTransitGroup2[Number(v.info.isTransit)] = false;
        that.etdGroup2[Number(v.etdWeek) - 1] = false;
        that.etaGroup2[Number(v.etaWeek) - 1] = false;
      });
    },
    weekTabInit(id, callBack) {
      if (this.isFirstInit) {
        var weekList = [];
        //初始化tab切换里的星期和日期,写死四周
        //this.totalWeeks现在写死的，正常是数据里有多少周的数据就是多少周
        var weekArray = new Array(
          "一",
          "二",
          "三",
          "四",
          "五",
          "六",
          "七",
          "八",
          "九"
        );
        var currentDate = new Date();
        // 离港日搜索正序推n周
        var dateType = this.$parent.$refs.searchBar.dateType
          ? this.$parent.$refs.searchBar.dateType
          : "1";
        if (dateType == "1") {
          for (var i = 0; i < this.totalWeeks; i++) {
            var title = "";
            var name = "";
            // title
            if (i == 0) {
              title = "本周";
            } else {
              title = "下" + weekArray[i - 1] + "周";
            }
            //还有几天周日
            var m1 = (8 - currentDate.getDay()) * 86400000;
            var startDate = new Date(currentDate.getTime());
            if (i != 0) {
              var startDate = new Date(
                currentDate.getTime() + m1 + 604800000 * (i - 1)
              );
            }
            var startYear = startDate.getFullYear();
            var startmonth = startDate.getMonth() + 1;
            var startday = startDate.getDate();
            // i周的当天时间
            var now = startmonth + "." + startday;
            // 加第i周六天的时间
            var m2 = (7 - startDate.getDay()) * 86400000;
            var endDate = new Date(startDate.getTime() + m2);
            if (i != 0) {
              endDate = new Date(startDate.getTime() + 518400000);
            }
            var endYear = endDate.getFullYear();
            var endmonth = endDate.getMonth() + 1;
            var endtday = endDate.getDate();
            var end = endmonth + "." + endtday;
            weekList.push({
              title: title,
              name: now + "-" + end,
              week:
                startYear +
                "-" +
                startmonth +
                "-" +
                startday +
                "to" +
                endYear +
                "-" +
                endmonth +
                "-" +
                endtday
            });
          }
        } else {
          this.dateType = "2";
          this.totalWeeks = 4;
          var dateStr = this.$parent.$refs.searchBar.start;
          if (typeof dateStr == "string" && dateStr.indexOf("-") != -1) {
            dateStr = dateStr.replace(/-/g, "/");
          }
          var currentDate = new Date(dateStr);
          // 到港日搜索倒着推n周
          for (var i = 0; i < this.totalWeeks; i++) {
            var title = "";
            var name = "";
            // title
            // if (i == 0) {
            //   title = "本周";
            // } else {
            //   title = "前" + weekArray[i - 1] + "周";
            // }
            //还有几天周日
            // var m1 = currentDate.getDay() * 86400000;
            var m1 = 7 * 86400000;
            var endtDate = new Date(currentDate.getTime());
            if (i != 0) {
              var endtDate = new Date(
                currentDate.getTime() - m1 - 604800000 * (i - 1)
              );
            }
            var endYear = endtDate.getFullYear();
            var endmonth = endtDate.getMonth() + 1;
            var endday = endtDate.getDate();
            // i周的当天时间
            var end = endmonth + "." + endday;
            // 加第i周六天的时间
            // var m2 = (endtDate.getDay() - 1) * 86400000;
            var m2 = 6 * 86400000;
            var startDate = new Date(endtDate.getTime() - m2);
            if (i != 0) {
              startDate = new Date(endtDate.getTime() - 518400000);
            }
            var startYear = startDate.getFullYear();
            var startmonth = startDate.getMonth() + 1;
            var startday = startDate.getDate();
            var start = startmonth + "." + startday;
            weekList.push({
              index: i,
              title: start + "-" + end,
              name: title,
              week:
                startYear +
                "-" +
                startmonth +
                "-" +
                startday +
                "to" +
                endYear +
                "-" +
                endmonth +
                "-" +
                endday
            });
            //倒序
            weekList.sort(function(v1, v2) {
              return v2.index - v1.index;
            });
          }
        }
        // 分组放入banner
        this.weekBanner = this.group(weekList, 4);
      }

      this.$nextTick(function() {
        callBack();
      });
    },
    //反馈
    feedback() {
      document
        .getElementsByClassName("class_qidian_wpa")[0]
        .contentWindow.document.getElementsByClassName("btn-im btn")[0]
        .click();
    },
    //收起过滤栏
    hideFilter() {
      //自定义jquer 左右滑动效果
      $.fn.mySlide = function(style, speed, callback) {
        this.animate(style, speed, callback);
      };
      if (this.hideFilterFlag) {
        $(".el-zoom-in-left").mySlide(
          {
            width: "hide",
            paddingLeft: "hide",
            paddingRight: "hide",
            marginLeft: "hide",
            marginRight: "hide"
          },
          300
        );
        $(".left-bar.side-box").mySlide(
          {
            width: "120px"
          },
          300
        );
        $(".list-content").mySlide(
          {
            width: "1066px"
          },
          300
        );
        this.hideFilterFlag = false;
        // width: ;
      } else {
        $(".el-zoom-in-left").mySlide(
          {
            width: "show",
            paddingLeft: "show",
            paddingRight: "show",
            marginLeft: "show",
            marginRight: "show"
          },
          300
        );
        $(".left-bar.side-box").mySlide(
          {
            width: "212px"
          },
          300
        );
        $(".list-content").mySlide(
          {
            width: "976px"
          },
          300
        );
        this.hideFilterFlag = true;
      }
    }
  },
  created() {},
  mounted() {
    // 初始化滑块值
    // $(".el-tooltip.el-slider__button").html(this.minTime);
    $(".fob-ship-nodata").css(
      "height",
      $(".hdtxt1")
        .next()
        .css("height")
    );
  },
  watch: {}
};
</script>