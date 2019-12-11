<style>
.wpa-container {
  display: none;
}
</style>

<template>
  <div id="footer">
    <div class="fob-foot">
      <div class="wrapper">
        <p>Copyright©2012-2017, 360fob.com. All rights reserved. | ICP证：沪ICP备10206787号-3</p>
        <p>
          <span class="records">沪公网备20120612112952982号 投诉电话：021-36520063</span>
        </p>
      </div>
    </div>
    <div class="go-top" @click="goTop"></div>
    <div class="inline"></div>
    <div class="goTop"></div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {
    goTop() {
      $("body,html").animate({ scrollTop: 0 }, 500);
      return false;
    },
    
  },
  created() {
    this.loadJs(
      "https://wp.qiye.qq.com/qidian/2852157543/49c6c01d0ffa5c55b4cadc52bd8c4fc4"
    );
  },
  mounted() {}
};
</script>
