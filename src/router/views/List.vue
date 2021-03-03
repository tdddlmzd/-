<style>
.my-list-content {
  position: relative;
  top: 57px;
}
.teshu_head{
  position: fixed;
  z-index: 3001;
}
.ted_nav{
  position: fixed;
  z-index: 100;
  width: 100%;
  left: 0;
  top: 56px;
}

</style>

<template>
  <div id="list" @click="clickHide()">
    <Head ref="head" class="teshu_head"></Head>
    <div class="my-list-content" style="top: 192px">
      <HeadLocationNav ref="searchBar" class="ted_nav"></HeadLocationNav>
      <Table ref="Table" v-if="contentType =='Table'"></Table>
      <Declare></Declare>
      <div>
        <Footer></Footer>
      </div>
    </div>
  </div>
</template>

<script>
import Head from "@components/Head";
import HeadLocationNav from "@components/HeadLocationNav";
import Footer from "@components/Footer";
import Table from "@components/Table";
import Declare from "@components/Declare";

export default {
  page: {
      title: '船期',
  },
  data() {
    return {
      contentType: "Table",
      loading: false
    };
  },
  components: {
    Head,
    HeadLocationNav,
    Footer,
    Table,
    Declare
  },
  computed: {},
  methods: {
    // 搜索栏组件初始化
    searchBarInit(params) {
      //下标1是搜索栏组件
      this.$refs.searchBar.init(params);
    },
    //子组件调用此方法
    getSearchResult(params, id) {
      this.contentType = "Table";
      // 动态组件必须等到子组件渲染完成才能找到这个组件，.nextTick组件渲染完成回调
      this.$nextTick(function() {
        //由此组件再调用另一个子组件局部刷新页面数据
      
        this.$refs.Table.getSearchResult(params, id);
      });
    },
    //子组件调用搜索
    goSearch(id) {
      this.$refs.Table.weekId = id
      this.$refs.searchBar.goSearch(id)
    },
    clickHide(){
      if(this.$refs.searchBar){
        if(this.$refs.searchBar.isRouteSelect && this.$refs.searchBar.isMouse){
          this.$refs.searchBar.isRouteSelect = false
        }
      }

      if(this.$refs.Table){
        if(this.$refs.Table.selectRout && this.$refs.Table.isMouse){
          this.$refs.Table.selectRout = false
        }
      }
    },
    //监听页面刷新
    upLoad(e){
      sessionStorage.setItem('uploadList',2)
    },
  },
  created() {
    
  },
  mounted() {
    if(this.$route.params && this.$route.params.id){
      var paramDate = this.getParams(this.$route.params.id)
      var pol = paramDate.pol;
      var pod = paramDate.pod;
      var start = paramDate.start;
      var dateType = paramDate.dateType;
      if (pol == undefined || $.trim(pol) == "") {
        return false;
      }
      if (pod == undefined || $.trim(pod) == "") {
        return false;
      }
      if (start == undefined || $.trim(start) == "") {
        paramDate.start = new Date()
      }
      if (dateType == undefined) {
        paramDate.dateType = localDateType;
      }
      this.searchBarInit(paramDate)

      if(paramDate.week && (!sessionStorage.getItem('uploadList') || sessionStorage.getItem('uploadList') == 1)){
        this.goSearch(paramDate.week)
      }else{
        this.getSearchResult(paramDate)
      }
      if(!sessionStorage.getItem('uploadList') || sessionStorage.getItem('uploadList') == 1){ //代表不是刷新页面 则        
        if(paramDate.isZhakai){
          this.$refs.Table.isZhakai = paramDate.isZhakai
        }
        if(paramDate.filterCond){
          if(this.$refs.Table){
            var filterCond = paramDate.filterCond
            this.$refs.Table.isTransitGroup = filterCond.isTransitGroup
            this.$refs.Table.isStopGroup = filterCond.isStopGroup
            this.$refs.Table.etdGroup = filterCond.etdGroup
            this.$refs.Table.etaGroup = filterCond.etaGroup
            this.$refs.Table.companyGroup = filterCond.companyGroup
            this.$refs.Table.polGroup = filterCond.polGroup
            this.$refs.Table.podGroup = filterCond.podGroup
            this.$refs.Table.range = filterCond.range
          }
        }
      }
    }
    window.addEventListener('beforeunload', e => this.upLoad(e)) //监听用户的刷新
  },
  destroyed() {
      sessionStorage.setItem('uploadList',1)
      window.removeEventListener('beforeunload', e => this.upLoad(e)) //销毁卸载注册的事件
  }

};
</script>