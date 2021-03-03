<style lang="scss">
.table_select{
  margin-left: -11px;
}
.table_select li:hover{
  padding: 0 16.5px;
  background: #f2f2f2;
  color: #072c4c;
  font-weight: bold;
}
.pol_table_select .el-autocomplete-suggestion__wrap{
  max-height: 272px !important;
}
.pod_table_select .el-select-dropdown__wrap{
  max-height: 266px;
}
.pol_portname li:hover{
  padding: 0 16.5px;
  background: #f2f2f2;
  color: #007ce3;
  font-weight: bold;
}
.pod_table_select li:hover{
  padding: 0 13px;
  background: #f2f2f2;
  color:#007ce3;
  font-weight: bold;
}
.ipt-box {
  .el-input__inner {
    border: none;
    height: 36px;
    line-height: 36px;
    color: #282828;
    font-size: 14px;
  }
  .dropdown-search-first{
    display: block;
    float: left;
  }
  .dropdown-search-second{
    display: block;
    float: right;
    margin-left: 10px;
  }
}
.el-radio__label {
  color: #282828 !important;
}
.el-radio__inner::after{
  width: 6px;
  height: 6px;
}
.from-box {
  .from-box-date{
    .el-input__inner{
      padding-left: 30px !important;
      padding-right: 30px !important;
      color: #282828;
    }
  }
}
.el-date-picker{
  z-index: 3000 !important;
}
.el-autocomplete-suggestion{
  border: 1px solid #f2f2f2;
}

.teIputInner .el-input__inner::-webkit-input-placeholder{
    color: #c8c8c8;
}
.route_select{
  position: absolute;
  max-width: 615px;
  min-width: 530px;
  max-height: 360px;
  min-height: 250px;
  background-color: #ffffff;
  box-shadow: 0px 2px 12px 0px 
    rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  left: 468px;
  top: 71px;
  overflow-y: hidden;
  overflow-x: hidden;
  margin-bottom: 10px;
  z-index: 100;
  .isShowLoading{
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: #fff;
    opacity: .8;
    z-index: 3;
    .loading_div{
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      .icon_ioading{
        font-size: 20px;
      }
    }
  }
  .route_h{
    width:100%;
    height: 31px;
    line-height: 31px;
    background-color: #072c4c;
    opacity: 0.8;     
    padding-left: 20px;
    position: relative;
    margin-bottom: 3px;
    .route_title{
      color: #ffffff;
      font-size: 11px;
    }
    .route_tip{
      position: absolute;
      right: 20px;
      top: 0;
      color: #ffffff;
      font-size: 11px;
    }
  }
  .diyu_ul{
    width: 100%;
    min-height: 45px;
    border-bottom: 1px solid #f2f2f2;
    margin-left: 20px;
    margin-right: 20px;
    padding-bottom: 7px;
    .diyu_li{
      display: inline-block;
      margin-top: 8px;
      padding-bottom: 4px;
      border-bottom: 2px solid transparent;
      margin-right: 18px;
      font-size: 11px;
      color: #282828;
      cursor: pointer;
      font-weight: 600;
      span{
        width: 100%;
        height: 100%;
        display: inline-block;
      }
    }
  }
  .rout_div{
    margin-left: 20px;
    margin-right: 20px;
    padding-top: 14px;
    padding-bottom: 14px;
    border-bottom: 1px solid #f2f2f2;
    .rout_p{
      font-size: 11px;
      color: #282828;
      font-weight: 600;
    }
    .rout_ui{
      width: 100%;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      .rout_li{
        width: 160px;
        margin-right: 38px;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;       
        margin-top: 14px; 
        cursor: pointer;
      }
      .rout_li:nth-child(3n){
        margin-right: 0px;
      }
      .rout_li:hover{
        color: #007ce3;
        font-weight: 600;
      }
    }
  }
  .rout_over{
    width: 100%;
    max-height: 292px;
    min-height: 202px;
    overflow-y: auto;
  }
  ._home_nodate{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    margin-top: 20px;
    .node_image{
      width: 181px;
      height: 107px;
    }
    .node_text{
      font-size: 12px;
      color: #282828;
      margin-top: 5px;
    }
  }
}
.selectRrMatch{
  max-width: 370px;
  min-width: 320px;
  min-height: 70px;
  margin-bottom: 0;
  .match_ul{
    width: 100%;
    max-height: 260px;
    min-height: 40px;
    overflow-y: auto;
    box-sizing: border-box;
    margin: 5px 0;
    .match_li{
      font-size: 12px;
      line-height: 24px;
      padding: 2px 20px;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      .match_li_left{
        width: 200px;
        margin-right: 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .match_li_right{
        flex: 1;
        text-align: right;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis
      }
    }
    .match_li:hover{
      color: #007ce3;
      font-weight: 600;
    }
  }
  ._home_nodate{
    margin-top: 12px;
  }
}
.select_head{
    width: 100%;
    height: 31px;
    border-radius: 4px 4px 0 0px;
}
.teshu_por{
    position: absolute;
    left: 0;
    top: 0;
    height: 31px;
    line-height: 31px;
    background-color: #395670;
    padding-left: 20px;
    color: #fff;
    font-size: 11px;
    border-radius: 4px 4px 0 0px;
    z-index: 4;
}
.teshu_tip{
  position: absolute;
  right: 20px;
  top: 0;
}
.jiant_hide{
  border: 0 !important;
  //处理的箭头
  .popper__arrow{
    top: 0px !important;
    border-bottom-color: transparent !important;
    &::after{
      border-bottom-color: transparent !important;
    }
  }
  //处理的滚动条
  .el-scrollbar__bar.is-vertical{
    top: 31px !important;
  }
}

.sele_nod{
  .head_chi_e{
    width: 100%;
    height: 31px;
    line-height: 31px;
    background-color: #395670;
    padding-left: 20px;
    color: #fff;
    font-size: 11px;
    border-radius: 4px 4px 0 0px;
  }
  .sle_no_text{
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 12px;
    color: #282828;
  }
}
.podClass{
  padding-right: 20px !important;
}
.inputW{
  width: 23% !important;
  .fob-input{
    width: 100%;
  }
}
.from-box .el-date-editor.el-input{
  width: 100% !important;
}
.from-box .icon-wangfan-1{
  margin: 10px 20px 0 0;
}
.from-box .from-box-1{
  margin-right: 20px !important;
}
.teIputInner:hover{
  border: 1px solid #C0C4CC;
}
.inputH:hover{
  border: 1px solid #C0C4CC;
}
.from-box .fob-input:hover{
  border: 1px solid #C0C4CC !important;
}
.from-box .el-input__inner{
      border: 0 !important;
  }
.from-box .from-box-date .el-input__inner{
  border: 1px solid #f2f2f2 !important;
}
.from-box .from-box-date .el-input__inner:hover{
  border: 1px solid #C0C4CC !important;
}
.from-box .fob-input{
  width: 100% !important;
}
</style>
<template>
  <div class="details">
    <!-- 船期列表页头部导航栏 -->
    <div class="wrapper">
      <div class="from-box">
        <!-- 起始港下拉框 -->
        <div class="from-box-1 inputW">
          <div class="fob-input inputH">
            <span class="iconfont icon-chuanmao input__prefix origin"></span>
            <el-select 
              v-model="pol"
              :placeholder="$t('home.port')"
              remote  
              filterable
              :no-data-text="$t('no Date')"
              :remote-method="querySearchPol"
              @blur="handlePolBlur"
              @change="changePolId"
              @focus="focusPol"
              class="ipt ipt-box"
              style="width: 90%;padding-right:20px"
              popper-class="pol_portname select_option jiant_hide"
            >
              <div class='select_head'></div>
              <div class='select_head teshu_por'>
                <p>{{$t('list.China_English')}}</p>
                <p class="teshu_tip">{{$t('list.City')}}</p>
              </div>
              <el-option
                v-for="(item, index) in polList"
                :key="index"
                :label="item.portEn + '(' + item.portCn + ')'"
                :value="item.portCode"
                >
                <template>
                  <span class="dropdown-search-first">{{ item.portEn + '(' + item.portCn + ')'}}</span>
                  <span class="dropdown-search-second" v-if="$i18n.locale == 'zh-CN'">{{item.cityCn}}</span>
                  <span class="dropdown-search-second" v-if="$i18n.locale == 'en-US'">{{item.cityEn}}</span>
                </template>
              </el-option>
              <div slot='empty'>
                <div class='sele_nod'>
                  <div class='head_chi_e'>{{$t('list.China_English')}}</div>
                  <p class="sle_no_text">{{$t('no Date')}}</p>
                </div>
              </div>
            </el-select>
          </div>
        </div>
        <!-- 港口交换按钮 -->
        <div class="iconfont icon-wangfan icon-wangfan-1" @click="changePolPod"></div>
        <!-- 目的港输入框 -->
        <div class="from-box-1 inputW" id="screenLeft">
          <div class="fob-input teIputInner">
            <span class="iconfont icon-chuanmao input__prefix Destination"></span>
            <el-input v-model="pod" :placeholder="$t('home.pleasePort')" class="ipt ipt-box podClass" style="width: 90%" clearable @input="routePort" @click.stop.native @focus="routeFocus" @blur="routeBlur" @clear="routeClear"></el-input>
          </div>
        </div>
        <!-- 日期选择部分 -->
        <div class="from-box-1 inputW data">
          <el-date-picker
            class="from-box-date"
            v-model="start"
            type="date"
            :placeholder="$t('home.selectDate')"
            :picker-options="pickerOptions"
            :clearable=false
          ></el-date-picker>
        </div>
        <!-- 离港 -->
        <div class="from-box-1">
          <div class="date-radio">
            <el-radio v-model="dateType" label="1">{{ $t('home.etd') }}</el-radio>
          </div>
        </div>
        <!-- 搜索按钮 -->
        <div class="from-box-2" style="width:13%">
          <el-button type="primary" round class="searchBtn" @click="goSearch">{{ $t('home.search') }}</el-button>
        </div>
      </div>
    </div>
    <!-- 目的港下拉框--无输入匹配 -->
    <div class="route_select" v-if="isRouteSelect" @mouseenter="mouseenter" @mouseleave="mouseleave" :style="{left:screenLeft + 'px'}">
      <div v-if="isShowLoading" class="isShowLoading">
        <div class="loading_div">
          <i class="el-icon-loading icon_ioading"></i>
        </div>
      </div>
      <div class="route_h">
        <p class="route_title">{{$t('list.China_English')}}</p>
      </div>
      <ul class="diyu_ul" v-if="routeList.length > 0">
        <li class="diyu_li" v-for="(item,index) in routeList" :key="index" :style=" currentIndex == index ? 'border-bottom: 2px solid #072c4c;' : ''" @click="changeRoute(index)">
          <span v-if="$i18n.locale == 'zh-CN'">{{item.areaCn}}</span>
          <span v-if="$i18n.locale == 'en-US'">{{item.areaCode}}</span>
        </li>
      </ul>
      <div class="rout_over myscrollbar" v-if="portService.length > 0" id="rout_over">
        <div class="rout_div" v-for="(item,index) in portService" :key="index">
          <p class="rout_p" v-if="$i18n.locale == 'zh-CN'">{{item.routeCn}}</p>
          <p class="rout_p" v-if="$i18n.locale == 'en-US'">{{item.routeEn}}</p>
          <ul class="rout_ui">
            <li class="rout_li" v-for="route in item.ports" :key="route.portId" v-title="route.portEn + '(' + route.portCn + ')'" @click="selectPod(route)">
              {{route.portEn + '(' + route.portCn + ')'}}
            </li>
          </ul>
        </div>
      </div>
      <div class="_home_nodate" v-if="routeList.length == 0">
        <img src="../assets/images/_table/icon_Nodata.png" class="node_image">
        <p class="node_text">{{$t('no Date')}}</p>
      </div>
    </div>
    <!-- 目的港下拉框--有输入匹配 -->
    <div class="route_select selectRrMatch" v-if="isRouteSelectMatch" @mouseenter="mouseenter" @mouseleave="mouseleave" :style="{left:screenLeft + 'px'}">
      <div v-if="isShowLoading" class="isShowLoading">
        <div class="loading_div">
          <i class="el-icon-loading icon_ioading"></i>
        </div>
      </div>
      <div class="route_h">
        <p class="route_title">{{$t('list.China_English')}}</p>
        <p class="route_tip">{{$t('list.Country_Route')}}</p>
      </div>
      <ul class="match_ul myscrollbar" v-if="partListMatch.length > 0">
        <li class="match_li" v-for="route in partListMatch" :key="route.portId" v-title="route.portEn + '(' + route.portCn + ')'" @click="selectPod(route)">
          <span class="match_li_left" v-title="route.portEn + '(' + route.portCn + ')'">{{route.portEn + '(' + route.portCn + ')'}}</span>
          <span v-if="$i18n.locale == 'zh-CN'" class="match_li_right" v-title="route.countryCn ? route.countryCn + '-' + route.routeCn : route.routeCn">{{route.countryCn ? route.countryCn + '-' : ''}}{{route.routeCn}}</span>
          <span v-if="$i18n.locale == 'en-US'" class="match_li_right" v-title="route.countryCode ? route.countryCode + '-' + route.routeEn : route.routeEn">{{route.countryCode ? route.countryCode + '-' : ''}}{{route.routeEn}}</span>
        </li>
      </ul>
      <div class="_home_nodate" v-if="routeList.length == 0">
        <p class="node_text">{{$t('no Date')}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      polValue: '',
      pol: "SHANGHAI(上海)",
      polId: "CNSHA",
      polList: [],
      pod: "",
      podId: "",
      start: "",
      end: "",
      dateType:
        localStorage.getItem("dateType") != null
          ? localStorage.getItem("dateType")
          : "1",
      pickerOptions: {},
      userInfo:
          this.getCookie("authId") !== null && this.getCookie("authId") !== "" && this.getCookie("authId") !== undefined
          ? this.getCookie("authId")
          : "",
      minHeight: '',
      heightInner: '',
      heightScreen: '',
      screenLeft: 0,
      isRouteSelect: false,
      isRouteSelectMatch: false,
      partListMatch: [],
      currentIndex: 0,
      routeList: [], //地域航线 港口查询
      portService: [], //港口数据
      isMouse: true, //鼠标移入移出
      isShowLoading: true,
      oldPod: '', //旧 input输入值

      num: 0,
    };
  },
  computed: {
    language(){
      return localStorage.getItem('language');
    }
  },
  methods: {
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
      var that = this;
      if ($.trim(this.pol) == "" || $.trim(this.polId) == "") {
        this.$message({
          message: that.$t('messages.portOfOrigin'),
          type: "warning",
          customClass:'base-message-zindex'
        });
        return false;
      }
      if ($.trim(this.pod) == "" || $.trim(this.podId) == "") {
        this.$message({
          message: that.$t('messages.ortOfDestination'),
          type: "warning",
          customClass:'base-message-zindex'
        });
        return false;
      }
      if ($.trim(this.start) == "") {
        this.$message({
          message: that.$t('messages.selectdate'),
          type: "warning",
          customClass:'base-message-zindex'
        });
        return false;
      }
      //封装搜索栏参数传递给父组件
      var currentDate = new Date()
      var setParamDate = {
        pol: this.pol,
        polId: this.polId,
        pod: this.pod,
        podId: this.podId,
        start: this.start,
        end: this.end,
        dateType: this.dateType,
        t:currentDate.getTime()
      }

      var POLPOD = this.polId.toLowerCase() + '-' + this.podId.toLowerCase()
      if(this.$route.name == 'Details'){
        var paramDate = this.setParams(setParamDate)
        this.$router.push({
          path: `/route/${POLPOD}/${paramDate}`
        });
      }else{
        if (id != undefined && typeof id == "string") {
          // 调用父组件搜索方法
          this.$parent.getSearchResult(setParamDate, id);
        } else {
          var paramDate = this.setParams(setParamDate)
          this.$router.push({
            path: `/route/${POLPOD}/${paramDate}`
          });
        }
      }
    },
    // 起始港模糊匹配
    querySearchPol(value){
      this.polValue = value
      var that = this
      this.$Axios.get(this.GLOBAL.url + `schedules/web/queryCity?pol=0&city=` + value,{
        headers: {
            Authorization: this.getToken()
      },
      }).then(res => {
        if(res.data.status == 1){
            that.polList = res.data.content
        }
      }).catch((err)=>{
          
      })
    },
    // 起始港blur事件
    handlePolBlur(){
      if(this.pol ==''){
        this.polValue = ''
      }
    },
    // 起始港change事件
    changePolId(value){
      for (let i = 0; i < this.polList.length; i++) {
        if(this.polList[i].portCode === value){
          this.polId = this.polList[i].portCode
          this.pol = this.polList[i].portEn + '(' + this.polList[i].portCn + ')'
        }
      }
    },
    // 起始港focus事件
    focusPol(){
      var that = this
      this.$Axios.get(this.GLOBAL.url + `schedules/web/queryCity?pol=0&city=`,{
        headers: {
            Authorization: this.getToken()
      },
      }).then(res => {
        if(res.data.status == 1){
            that.polList = res.data.content
        }
      }).catch((err)=>{
          
      })
    },
    // 下拉框选中事件
    podSelect(item) {
      // 缓存id
      this.podId = item.portCode;
      if(item.value == '暂无数据' || item.value == '请输入2个以上字符'){
        this.pod = ''
      }
    },
    //目的港地域航线港口查询
    routePort(value){
      this.num++
      let a = this.num
      this.currentIndex = 0
      var that = this
      this.isShowLoading = true
      if(value != ''){
        this.isRouteSelect = false
        this.isRouteSelectMatch = true
      }else{
        this.isRouteSelect = true
        this.isRouteSelectMatch = false
      }
      var newVal = JSON.parse(JSON.stringify(value))
      if(this.oldPod !== newVal){
        this.oldPod = newVal
        this.$Axios.get(this.GLOBAL.url + "schedules/port/getAreaDetails?search=" + newVal,{
          headers: {
              Authorization: this.getToken()
        },
        }).then(res => {
          console.log('1212121212')
          if(res.data.status == 1){
            if(a == this.num){
              that.isShowLoading = false
              that.routeList = res.data.content
              if(that.routeList.length > 0){
                that.portService = that.routeList[0].routes
                that.partListMatch = []
                for(let i=0; i<that.routeList.length; i++){
                  let portServiceMatch = that.routeList[i].routes
                  for(let j=0; j<portServiceMatch.length; j++){
                    for (let p = 0; p < portServiceMatch[j].ports.length; p++) {
                      portServiceMatch[j].ports[p].routeCn = portServiceMatch[j].routeCn
                      portServiceMatch[j].ports[p].routeEn = portServiceMatch[j].routeEn
                    }
                    that.partListMatch = that.partListMatch.concat(portServiceMatch[j].ports)
                  }
                }
              }else{
                that.portService = []
                that.partListMatch = []
              }

            }
          }
        }).catch((err)=>{
            
        })
      }
    }, 
    routeClear(){
        this.isRouteSelect = false
        this.isRouteSelectMatch = false
    },
    //目的港获取焦点
    routeFocus(){
      var that = this
      if(this.oldPod != ''){
        this.isRouteSelect = false
        this.isRouteSelectMatch = true
      }else{
        this.isRouteSelect = true
        this.isRouteSelectMatch = false
      }
      if((that.routeList.length == 0 || this.pod === '')){
        that.currentIndex = 0
        that.isShowLoading = true
        this.$Axios.get(this.GLOBAL.url + "schedules/port/getAreaDetails?search=",{
          headers: {
              Authorization: this.getToken()
        },
        }).then(res => {
          if(res.data.status == 1){
              that.isShowLoading = false
              that.routeList = res.data.content
              if(that.routeList.length > 0){
                that.portService = that.routeList[0].routes
                that.partListMatch = []
                for(let i=0; i<that.routeList.length; i++){
                  let portServiceMatch = that.routeList[i].routes
                  for(let j=0; j<portServiceMatch.length; j++){
                    for (let p = 0; p < portServiceMatch[j].ports.length; p++) {
                      portServiceMatch[j].ports[p].routeCn = portServiceMatch[j].routeCn
                      portServiceMatch[j].ports[p].routeEn = portServiceMatch[j].routeEn
                    }
                    that.partListMatch = that.partListMatch.concat(portServiceMatch[j].ports)
                  }
                }
                // console.log(that.partListMatch,'that.partListMatchthat.partListMatch')
              }else{
                that.portService = []
                that.partListMatch = []
              }
          }
        }).catch((err)=>{
            
        })
      }
    },
    routeBlur(){
      if(this.isMouse){
        this.isRouteSelect = false
        this.isRouteSelectMatch = false
      }
    },
    mouseenter(){
      this.isMouse = false
    },
    mouseleave(){
      this.isMouse = true
    },
    selectPod(item){
      this.pod = item.portEn + '(' + item.portCn + ')'
      this.podId = item.portCode
      this.isRouteSelect = false
      this.isRouteSelectMatch = false
    },
    changeRoute(index){
      this.currentIndex = index
      this.portService = this.routeList[this.currentIndex].routes
      $('#rout_over').animate({
        scrollTop: 0
      }, 500)
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
    },
    getResize(){
      const that = this
      that.heightScreen = document.documentElement.clientHeight
      window.onresize = () => {
          return (() => {
            if($('#screenLeft')){
              if($('#screenLeft').offset()){
                that.screenLeft = $('#screenLeft').offset().left
              }
            }
              that.heightScreen = document.documentElement.clientHeight
          })();
      };
    },
  },
  created() {},
  mounted() {
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

      var that = this
      that.heightScreen = document.documentElement.clientHeight
      that.heightInner = that.heightScreen - 150  + 'px'
    if($('#screenLeft')){
      if($('#screenLeft').offset()){
        that.screenLeft = $('#screenLeft').offset().left
      }
    }
    window.addEventListener('resize', this.getResize)
  },
  watch: {
    heightScreen (val) {
        this.heightInner = val - 150  + 'px'
        this.minHeight = val - 221  + 'px'
    },
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
