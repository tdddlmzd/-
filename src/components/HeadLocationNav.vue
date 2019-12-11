<style lang="scss">
.ipt-box {
  .el-input__inner {
    border: none;
  }
}
.el-radio__input.is-checked .el-radio__inner {
  border-color: #43637c;
  background: #43637c;
}
.el-radio__label {
  color: #43637c !important;
}

</style>
<template>
  <div class="details">
    <div class="wrapper">
      <div class="from-box">
        <div class="from-box-1">
          <label class="txt">Origin</label>
          <div class="fob-input">
            <span class="iconfont icon-chuanmao input__prefix origin"></span>
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
        </div>
        <div class="iconfont icon-wangfan icon-wangfan-1" @click="changePolPod"></div>
        <div class="from-box-1">
          <label class="txt">Destination</label>
          <div class="fob-input">
            <span class="iconfont icon-chuanmao input__prefix Destination"></span>
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
        </div>
        <div class="from-box-1">
          <label class="txt">Date</label>

          <el-date-picker
            v-model="start"
            type="date"
            placeholder="选择日期"
            :picker-options="pickerOptions"
          ></el-date-picker>
        </div>
        <div class="from-box-1">
          <div class="date-radio">
            <el-radio v-model="dateType" label="1">离港日</el-radio>
            <el-radio v-model="dateType" label="2">到港日</el-radio>
          </div>
        </div>
        <div class="from-box-2">
          <button class="searchBtn" @click="goSearch">搜&nbsp;索</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeadLocationNav",
  components: {},
  data() {
    return {
      tempId: "",
      pol: "",
      polId: "",
      pod: "",
      podId: "",
      start: "",
      end: "",
      dateType:
        localStorage.getItem("dateType") != null
          ? localStorage.getItem("dateType")
          : "1",
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
    //搜索条件初始化
    init(params) {
      this.pol = params.pol;
      this.polId = params.polId;
      this.pod = params.pod;
      this.podId = params.podId;
      this.start = params.start;
      this.end = params.end;
      this.dateType = params.dateType;
    },
    // 点击搜索
    goSearch(id) {
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
      if ($.trim(this.start) == "") {
        this.$message({
          message: "请选择日期",
          type: "warning",
          customClass:'base-message-zindex'
        });
        return false;
      }
      //封装搜索栏参数传递给父组件
      var params = {
        pol: this.pol,
        polId: this.polId,
        pod: this.pod,
        podId: this.podId,
        start: this.start,
        end: this.end,
        dateType: this.dateType
      };
      if(this.$route.name == 'Details'){
        var currentDate = new Date();
        params.t = currentDate.getTime();
        this.$router.push({
          name: "List",
          params: params
        });
      }else{
        if (id != undefined && typeof id == "string") {
          var currentDate = new Date();
          params.t = currentDate.getTime();
          // 调用父组件搜索方法
          this.$parent.getSearchResult(params, id);
        } else {
          var currentDate = new Date();
          params.t = currentDate.getTime();
          this.$router.push({
            name: "List",
            params: params
          });
        }
      }
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
    querySearchAsync(queryString, cb,type) {
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
    //模糊查询港口
    querySearchAsync2(queryString, cb,type) {
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
    this.allPol = this.loadAllPol();
    this.start = new Date();
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
