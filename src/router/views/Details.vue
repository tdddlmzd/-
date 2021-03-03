<style>
.my-list-details {
  position: relative;
  top: 57px;
}
</style>
<template>
  <div id="details">
    <Head ref="head"></Head>
    <div class="my-list-details">
    <!-- <HeadLocationNav ref="searchBar"></HeadLocationNav> -->
    <DetailsMode ref="DetailsMode"></DetailsMode>
    <!-- <Declare></Declare> -->
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
import Declare from "@components/Declare";
import DetailsMode from "@components/DetailsMode";
export default {
  page: {
      title: '船期',
  },
  components: {DetailsMode,Head,HeadLocationNav,Footer,Declare},
  data() {
    return {};
  },
  computed: {},
  methods: {
    goSearch(){
      this.$refs.searchBar.goSearchFromDetails()
    }
  },
  created() {
    
  },
  mounted() {
    // this.$refs.searchBar.init(this.$route.params)
  }
};
</script>
