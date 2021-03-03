<style>
.my-list-mine {
  position: relative;
  top: 50px;
}
</style>
<template>
  <div id="mine">
    <Head ref="head"></Head>
    <div class="my-list-mine">
    <AccountSetting ref="accountSetting" class="download-template"></AccountSetting>
    <div>
      <Footer></Footer>
    </div>
    </div>
  </div>
</template>

<script>
import Head from "@components/Head";
import Footer from "@components/Footer";
import AccountSetting from "@components/AccountSetting";

export default {
  page: {
    title: "账户设置",
  },
  data() {
    return {
      contentType:'AccountSetting',
      loading:false
    };
  },
  components: {
    Head,
    Footer,
    AccountSetting,
  },
  computed: {},
  methods: {
    
  },
  created() {},
  mounted() {
    
  }
};
</script>