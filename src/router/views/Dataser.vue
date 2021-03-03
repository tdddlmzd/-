<style>
.my-list-content {
  position: relative;
  top: 57px;
}
</style>

<template>
<div id="home">
    <Head ref="head"></Head>
    <Datainform></Datainform>
    <Footer></Footer>
</div>
</template>

<script>
import Head from "@components/Head";
import Footer from "@components/Footer";
import Datainform from "@components/Datainform";
export default {
    page: {
        title: 'API',
    },
  data() {
    return {
      contentType: "Table",
      loading: false
    };
  },
  components: {
    Head,
    Datainform,
    Footer,
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>