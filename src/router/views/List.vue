<style>
.my-list-content {
  position: relative;
  top: 50px;
}
</style>

<template>
  <div id="list">
    <Head ref="head"></Head>
    <div class="my-list-content">
      <HeadLocationNav ref="searchBar"></HeadLocationNav>
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
  name: "List",
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
      this.$refs.searchBar.goSearch(id);
    },
    //跳转详情
    goDetails(item) {
      var that = this;
      setTimeout(function() {
        that.$router.push({
          name: "Details",
          params: item
        });
      }, 500);
    }
  },
  created() {},
  mounted() {
    var pol = this.$route.params.pol;
    var pod = this.$route.params.pod;
    var start = this.$route.params.start;
    var dateType = this.$route.params.dateType;
    if (pol == undefined || $.trim(pol) == "") {
      return false;
    }
    if (pod == undefined || $.trim(pod) == "") {
      return false;
    }
    if (start == undefined || $.trim(start) == "") {
      this.$route.params.start = new Date();
    }
    if (dateType == undefined) {
      this.$route.params.dateType = localDateType;
    }
    this.searchBarInit(this.$route.params);
    this.getSearchResult(this.$route.params);
  }
};
</script>