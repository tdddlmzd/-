<style lang="scss">
.wpa-container {
  display: none;
}
.linajie{
  color: #fff;
  text-decoration:underline !important;
}
.contactUs{
  font-weight: 600;
  display: inline-block;
  margin-left: 10px;
  &:hover{
    cursor: pointer;
    text-decoration: underline;
  }
}
</style>

<template>
<!-- 页面底部信息 -->
  <div id="footer">
    <div class="fob-foot">
      <div class="part_one">
        <p class="underline" @click="handleClickAboutM">{{$t('introduction.aboutM')}}</p>
        <span class="xian_line"></span>
        <p class="underline" @click="handleClickContactUs">{{$t('introduction.contactUs')}}</p>
        <span class="xian_line"></span>
        <p>{{$t('home.complaintPhone')}}</p>
        <span class="xian_line"></span>
        <p class="tesp">©2019 - 2020 Whale Calling. All Rights Reserved</p>
        <span class="xian_line"></span>
        <p class="underline" @click="handleClickBeiAnNum">沪ICP备20010868号-1</p>
      </div>
      <div class="part_two">
        <p style="padding-right: 0">{{$t('introduction.apiJiekou')}}</p>
        <p class="underline" @click="contactCustomer()">{{$t('introduction.chuanqiApi')}}</p>
        <p style="padding-left: 0" class="underline" @click="contactCustomer()">{{$t('introduction.chuanbojihuaApi')}}</p>
        <p style="padding-left: 0" class="underline" @click="contactCustomer()">{{$t('introduction.chuanbodingweiApi')}}</p>
        <p style="padding-left: 0" class="underline" @click="contactCustomer()">{{$t('introduction.gangquApi')}}</p>
        <p style="padding-left: 0" class="underline" @click="contactCustomer()">{{$t('introduction.chuangongsiApi')}}</p>
      </div> 
    </div>
    <div class="go-top" @click="goTop"></div>
    <div class="inline" @click="contactCustomer()"></div>
    <div class="goTop"></div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      boxHeight: '',
      currentImage: ''
    };
  },
  computed: {
  },
  methods: {
    goTop() {
      $("body,html,.downLoadsContent").animate({ scrollTop: 0 }, 500);
      return false;
    },
    handleScroll () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    },
    handleClickAboutM(){
      this.$router.push({
        path: '/Introduction',
      });
    },
    handleClickContactUs(){
      this.$router.push({
        path: '/ContactUs',
      });
    },
    handleClickBeiAnNum(){
      window.open('https://beian.miit.gov.cn/'); 
    },
  },
  // created() {
  //   this.loadJs(
  //     "https://wp.qiye.qq.com/qidian/2852157543/49c6c01d0ffa5c55b4cadc52bd8c4fc4"
  //   );
  // },
  mounted() {
    this.boxHeight = $("body,html").scrollTop()
    window.addEventListener('scroll', this.handleScroll,true);
  },
  // computed:{
  //   boxScroll() {
  //     this.boxHeight = $("body,html").scrollTop()
  //     return this.boxHeight
  //   }
  // },
  // watch:{
  //   boxScroll(newVal,oldVal) {
  //   }
  // }
};
</script>
