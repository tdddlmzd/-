<style lang="scss" scoped>
.ipt-box {
  .el-input__inner {
    border: none;
    height: 39px;
  }
}
.el-autocomplete-suggestion .el-popper {
  display: none;
}

.front {
  transition: all 1s;
}
.back {
  background: #fff;
  width: 182px;
  height: 81px;
  transform: rotateY(180deg);
  transition: all 1s;
  opacity: 0;
  margin-top: -103px;
  margin-bottom: 22px;
  box-shadow: 0px 2px 11px 0px rgba(0, 0, 0, 0.17);
}
.company-logo-box:hover .front {
  opacity: 0;
  transform: rotateY(180deg);
}
.company-logo-box:hover .back {
  opacity: 1;
  z-index: 2;
  transform: rotateY(360deg);
}
.back span {
  display: inline-block;
  line-height: 81px;
  font-size: 20px;
  width: 162px;
  white-space: pre-wrap;
  word-wrap: break-word;
  word-break: break-all;
}
</style>
<template>
  <div id="Home-search">
    <div class="fob-banner">
      <div class="banner-main">
        <div class="banner-wrapper bd">
          <div class="banner_txt">
            <h1>让航运更智慧</h1>
            <p>Enjoy AI   Enjoy Shipping</p>
          </div>
          <ul>
            <li class="index_banner_1"></li>
          </ul>
          <div class="searchBox-main">
            <div class="searchBox">
              <div class="port">
                <p class="portname">Origin</p>
                <span class="iconfont icon-chuanmao origin"></span>
                <el-autocomplete
                  size="medium"
                  v-model="pol"
                  :fetch-suggestions="getAllPol"
                  placeholder="请选择起始港"
                  @select="polSelect"
                  class="ipt ipt-box"
                  readonly
                >
                  <template slot-scope="props">
                    <span class="dropdown-search-first">{{ props.item.value.toUpperCase() }}</span>
                    <!-- <span class="dropdown-search-second">{{ props.item.countryCode.toUpperCase() }}</span> -->
                  </template>
                </el-autocomplete>
              </div>
              <div class="iconfont icon-wangfan icon-wangfan-1" @click="changePolPod"></div>
              <div class="port">
                <p class="portname">Destination</p>
                <span class="iconfont icon-chuanmao Destination"></span>
                <el-autocomplete
                  size="medium"
                  v-model="pod"
                  :fetch-suggestions="querySearchAsync2"
                  placeholder="请输入目的港 中文/英文"
                  @select="podSelect"
                  class="ipt ipt-box"
                >
                  <template slot-scope="props">
                    <span class="dropdown-search-first">{{ props.item.value }}</span>
                    <span class="dropdown-search-second">{{ props.item.countryCode }}</span>
                  </template>
                </el-autocomplete>
              </div>
              <div class="dateBox">
                <p class="portname">Date</p>
                <div class="dateBoxIpt">
                  <el-date-picker
                    v-model="date"
                    type="date"
                    placeholder="选择日期"
                    :picker-options="pickerOptions"
                    style="    height: 39px;"
                  ></el-date-picker>
                </div>
              </div>
              <div class="date-radio">
                <el-radio v-model="dateType" label="1">离港日</el-radio>
                <el-radio v-model="dateType" label="2">到港日</el-radio>
              </div>
              <button class="searchBtn" @click="goSearch">搜&nbsp;索</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="superiority">
      <div class="wrapper">
        <el-row :gutter="20">
          <el-col :span="6">
            <div class="superiority-box">
              <img src="../assets/images/icon1.png" />
              <h3>全球船期实时动态</h3>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="superiority-box">
              <img src="../assets/images/icon2.png" />
              <h3>船公司共舱分析</h3>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="superiority-box">
              <img src="../assets/images/icon3.png" />
              <h3>停靠 / 新航线分析</h3>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="superiority-box">
              <img src="../assets/images/icon4.png" />
              <h3>班期准点率分析</h3>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="partners">
      <div class="wrapper">
        <h1>Schedule Partners</h1>
        <h2>船期数据伙伴</h2>
        <el-row :gutter="20">
          <el-col :span="4" v-for="(item,logosKey) in imglist" :key="logosKey">
            <div class="company-logo-box">
              <div class="front logo-box">
                <div class="box">
                  <img :src="item.url" />
                </div>
              </div>
              <div class="back">
                <span :id="item.scac">敬请期待</span>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HomeSearch",
  components: {},
  data() {
    return {
      imglist: [
        {
          url: require("../assets/images/logo/MAEU.jpg"),
          scac: "MAEU"
        },
        {
          url: require("../assets/images/logo/MSCU.jpg"),
          scac: "MSCU"
        },
        {
          url: require("../assets/images/logo/COSU.jpg"),
          scac: "COSU"
        },
        {
          url: require("../assets/images/logo/OOLU.jpg"),
          scac: "OOLU"
        },
        {
          url: require("../assets/images/logo/CMDU.jpg"),
          scac: "CMDU"
        },
        {
          url: require("../assets/images/logo/APLU.jpg"),
          scac: "APLU"
        },
        {
          url: require("../assets/images/logo/HLCU.jpg"),
          scac: "HLCU"
        },
        {
          url: require("../assets/images/logo/ONEY.jpg"),
          scac: "ONEY"
        },
        {
          url: require("../assets/images/logo/EGLV.jpg"),
          scac: "EGLV"
        },
        {
          url: require("../assets/images/logo/YMLU.jpg"),
          scac: "YMLU"
        },
        {
          url: require("../assets/images/logo/HDMU.jpg"),
          scac: "HDMU"
        },
        {
          url: require("../assets/images/logo/PABV.jpg"),
          scac: "PABV"
        },
        {
          url: require("../assets/images/logo/SUDU.jpg"),
          scac: "SUDU"
        },
        {
          url: require("../assets/images/logo/FESO.jpg"),
          scac: "FESO"
        },
        {
          url: require("../assets/images/logo/NIDU.jpg"),
          scac: "NIDU"
        },
        // {
        //   url: require("../assets/images/logo/RCLC.jpg"),
        //   scac: "RCLC"
        // },
        {
          url: require("../assets/images/logo/EPIR.jpg"),
          scac: "EPIR"
        },
        {
          url: require("../assets/images/logo/SKMC.jpg"),
          scac: "SKMC"
        },
        {
          url: require("../assets/images/logo/ANNU.jpg"),
          scac: "ANNU"
        },
        {
          url: require("../assets/images/logo/JINX.jpg"),
          scac: "JINX"
        },
        {
          url: require("../assets/images/logo/SNTU.jpg"),
          scac: "SNTU"
        },
        // {
        //   url: require("../assets/images/logo/ASLE.jpg"),
        //   scac: "ASLE"
        // },
        {
          url: require("../assets/images/logo/SITC.jpg"),
          scac: "SITC"
        },
        {
          url: require("../assets/images/logo/CNCL.jpg"),
          scac: "CNCL"
        },
        {
          url: require("../assets/images/logo/KMBU.jpg"),
          scac: "KMBU"
        },
        // {
        //   url: require("../assets/images/logo/logo1.jpg"),
        //   scac: "logo1"
        // },
        {
          url: require("../assets/images/logo/WHLC.jpg"),
          scac: "WHLC"
        },
        // {
        //   url: require("../assets/images/logo/logo2.jpg"),
        //   scac: "logo2"
        // },
        {
          url: require("../assets/images/logo/SAFM.jpg"),
          scac: "SAFM"
        },
        // {
        //   url: require("../assets/images/logo/logo3.jpg"),
        //   scac: "logo3"
        // },
        {
          url: require("../assets/images/logo/POBU.jpg"),
          scac: "POBU"
        },
        {
          url: require("../assets/images/logo/KMTC.jpg"),
          scac: "KMTC"
        },
        // {
        //   url: require("../assets/images/logo/TCLC.jpg"),
        //   scac: "TCLC"
        // },
        // {
        //   url: require("../assets/images/logo/logo5.jpg"),
        //   scac: "logo5"
        // },
        // {
        //   url: require("../assets/images/logo/HUAD.jpg"),
        //   scac: "HUAD"
        // },
        // {
        //   url: require("../assets/images/logo/KYOW.jpg"),
        //   scac: "KYOW"
        // },
        // {
        //   url: require("../assets/images/logo/logo6.jpg"),
        //   scac: "logo6"
        // },
        {
          url: require("../assets/images/logo/SMLM.jpg"),
          scac: "SMLM"
        },
        // {
        //   url: require("../assets/images/logo/logo7.jpg"),
        //   scac: "logo7"
        // },
        // {
        //   url: require("../assets/images/logo/logo8.jpg"),
        //   scac: "logo8"
        // },
        // {
        //   url: require("../assets/images/logo/logo4.jpg"),
        //   scac: "logo4"
        // },
        // {
        //   url: require("../assets/images/logo/DYSS.jpg"),
        //   scac: "DYSS"
        // },
        // {
        //   url: require("../assets/images/logo/NSRU.jpg"),
        //   scac: "NSRU"
        // },
        {
          url: require("../assets/images/logo/GOTO.jpg"),
          scac: "GOTO"
        },
        // {
        //   url: require("../assets/images/logo/MELL.jpg"),
        //   scac: "MELL"
        // },
        // {
        //   url: require("../assets/images/logo/EASC.jpg"),
        //   scac: "EASC"
        // },
        // {
        //   url: require("../assets/images/logo/logo9.jpg"),
        //   scac: "logo9"
        // },
        // {
        //   url: require("../assets/images/logo/logo10.jpg"),
        //   scac: "logo10"
        // },
        // {
        //   url: require("../assets/images/logo/TSQD.jpg"),
        //   scac: "TSQD"
        // },
        {
          url: require("../assets/images/logo/ZIMU.jpg"),
          scac: "ZIMU"
        }
      ],
      tempId: "",
      pol: "",
      polId: "",
      pod: "",
      podId: "",
      date: "",
      dateType: "1",
      pickerOptions: {},
      allPol:[]
    };
  },
  computed: {},
  methods: {
    //全部国内pol
    loadAllPol() {
        return [
          { "value": "SHANGHAI(上海)", "id": "1466", "countryCode": "CHINA"  },
          { "value": "SHENZHEN(深圳)", "id": "1470", "countryCode": "CHINA"  },
          { "value": "GUANGZHOU(广州)", "id": "568", "countryCode": "CHINA" },
          { "value": "QINGDAO(青岛)", "id": "1289", "countryCode": "CHINA"  },
          { "value": "NINGBO(宁波)", "id": "1093", "countryCode": "CHINA"  },
          { "value": "DALIAN(大连)", "id": "388", "countryCode": "CHINA"  },
          { "value": "TIANJIN(天津)", "id": "1583", "countryCode": "CHINA"  },
          { "value": "XIAMEN(厦门)", "id": "1714", "countryCode": "CHINA" },
          { "value": "FUZHOU(福州)", "id": "516", "countryCode": "CHINA"  },
          { "value": "LIANYUNGANG(连云港)", "id": "849", "countryCode": "CHINA"  },
          { "value": "SHANTOU(汕头)", "id": "1467", "countryCode": "CHINA"  },
          { "value": "YANTAI(烟台)", "id": "1716", "countryCode": "CHINA"  },
          // { "value": "HUANGPU(广州黄埔)", "id": "", "countryCode": "CHINA"  },
          // { "value": "NANSHA(广州南沙)", "id": "", "countryCode": "CHINA"  },
          { "value": "HONG KONG(香港)", "id": "627", "countryCode": "CHINA"  },
        ];
      },
    // 显示国内起始pol
    getAllPol(queryString, cb){
      // 调用 callback 返回建议列表的数据
      cb(this.allPol);
    },
    //搜索
    goSearch() {
      if ($.trim(this.pol) == "" || $.trim(this.polId) == "") {
        this.$message({
          message: "请选择起始港",
          type: "warning",
          customClass:'base-message-zindex'
        });
        return false;
      }
      if ($.trim(this.pod) == "" || $.trim(this.podId) == "") {
        this.$message({
          message: "请选择目的港",
          type: "warning",
          customClass:'base-message-zindex'
        });
        return false;
      }
      if ($.trim(this.date) == "") {
        this.$message({
          message: "请选择日期",
          type: "warning",
          customClass:'base-message-zindex'
        });
        return false;
      }
      var currentDate = new Date();
      this.$router.push({
        name: "List",
        params: {
          pol: this.pol,
          polId: this.polId,
          pod: this.pod,
          podId: this.podId,
          start: this.date,
          dateType: this.dateType,
          t:currentDate.getTime()
        }
      });
    },
    // 下拉框选中事件
    polSelect(item) {
      // 缓存id
      this.polId = item.id;
      if(item.value == '暂无数据' || item.value == '请输入2个以上字符'){
        this.pol = ''
      }
    },
    // 下拉框选中事件
    podSelect(item) {
      // 缓存id
      this.podId = item.id;
      if(item.value == '暂无数据' || item.value == '请输入2个以上字符'){
        this.pod = ''
      }
    },
    //模糊查询港口
    querySearchAsync(queryString, cb) {
      var that = this;
      if (queryString.length >= 2) {
        $.ajax({
          url: that.GLOBAL.url + "schedules/web/queryCity?city=" + queryString.split('(')[0] + (queryString.indexOf(')') != -1?queryString.split(')')[1]:'') + "&pol=0",
          type: "GET",
          headers: {
            Authorization: that.getToken()
          },
          success: function(data) {
            if (data.status == 1 && data.message == "SUCCESS") {
              if (data.content.length) {
                var results = [];
                $.each(data.content, function(k, v) {
                  results.push({
                    value: v.cityEn.toUpperCase() + '(' + v.cityCn + ')',
                    id: v.id,
                    countryCode: v.countryCode,
                    cityCn:v.cityCn
                  });
                });
                cb(results);
              } else {
                cb([
                  {
                    value: "暂无数据"
                  }
                ]);
                that.polId = '';
              }
            } else {
              that.$message({
                message: "获取港口失败",
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
      } else {
        cb([
          {
            value: ""
          }
        ]);
        that.podId = '';
      }
    },
    querySearchAsync2(queryString, cb) {
      var that = this;
      if (queryString.length >= 2) {
        $.ajax({
          url: that.GLOBAL.url + "schedules/web/queryCity?city=" + queryString.split('(')[0] + (queryString.indexOf(')') != -1?queryString.split(')')[1]:'') + "&pol=1",
          type: "GET",
          headers: {
            Authorization: that.getToken()
          },
          success: function(data) {
            if (data.status == 1 && data.message == "SUCCESS") {
              if (data.content.length) {
                var results = [];
                $.each(data.content, function(k, v) {
                  results.push({
                    value: v.cityEn.toUpperCase() + '(' + v.cityCn + ')',
                    id: v.id,
                    countryCode: v.countryCode.toUpperCase(),
                    cityCn:v.cityCn
                  });
                });
                cb(results);
              } else {
                cb([
                  {
                    value: "暂无数据"
                  }
                ]);
                that.podId = '';
              }
            } else {
              that.$message({
                message: "获取港口失败",
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
      } else {
        cb([
          {
            value: ""
          }
        ]);
        that.podId = '';
      }
    },
    //交换起始港目的港
    changePolPod() {
      // var pol = this.pol;
      // var pod = this.pod;
      // var polId = this.polId;
      // var podId = this.podId;
      // this.pol = pod;
      // this.pod = pol;
      // this.polId = podId;
      // this.podId = polId;
    }
  },
  created() {},
  mounted() {
    var that = this;
    that.allPol = that.loadAllPol();
    this.date = new Date();
    var queryString = "";
    //拼接需要查询的船公司scac
    $.each(this.imglist, function(k, v) {
      if (v.scac.indexOf("logo") == -1) {
        queryString += v.scac + ",";
      }
    });
    queryString = queryString.substring(0, queryString.length - 1);
    $.ajax({
      url:
        that.GLOBAL.url +
        "schedules/web/getAllScheduleCount?scacList=" +
        queryString,
      type: "GET",
      headers: {
        Authorization: that.getToken()
      },
      success: function(data) {
        if (data.status == 1 && data.message == "SUCCESS") {
          if (data.content.length > 0) {
            $.each(data.content, function(k, v) {
              $("#" + v.scac).html(v.count + " 条船期");
            });
          }
        } else {
          that.$message({
            message: "获取船期条数失败",
            type: "error",
            customClass: "base-message-zindex"
          });
        }
      },
      error: function(xhr, textStatus, errorThrown) {
      }
    });

    // 确定日期选择器范围
    var currentDate = new Date();
    var week = currentDate.getDay();
    var range = 28;
    if(week != 7 && this.dateType == '1'){
      range = (7 - week) + 21;
    }
    var endDate = new Date(currentDate.getTime() + 86400000*range);
    this.pickerOptions = {
        disabledDate(time) {
          return time.getTime() < (Date.now() - 86400000) || time.getTime() > endDate.getTime();
        }
      }
  },
  watch: {
    dateType(val) {
      var currentDate = new Date();
      var week = currentDate.getDay();
      var range = 28;
      if(week != 7 && val == '1'){
        range = (7 - week) + 21;
      }
      var endDate = new Date(currentDate.getTime() + 86400000*range);
      if(val == '1'){
        this.pickerOptions = {
          disabledDate(time) {
            return time.getTime() < (Date.now() - 86400000) || time.getTime() > endDate.getTime();
          }
        }
      }else{
        this.pickerOptions = {
          disabledDate(time) {
            return time.getTime() < (Date.now() - 86400000) ;
          }
        }
      }
    }
  }
};
</script>
