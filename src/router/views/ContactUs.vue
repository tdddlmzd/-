<style lang="scss">
#contact{
  background: #fff;
}
.contact_us{
    width: 1200px;
    height: 481px;
    display: flex;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    img{
      width: 710px;
      height: 100%;
      box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.1);
      border-radius: 8px;
      position: relative;
      z-index: 10px;
    }
    .contact_us_info{
      flex: 1;
      height: 367px;
      background-color: #ffffff;
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
      margin: auto 0;
      box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.1);
      padding-top: 68px;
      padding-left: 74px;
      .title{
        text-align: left;
        font-size: 20px;
        line-height: 20px;
        margin-bottom: 34px;
        color: #131313;
        font-weight: 600;
      }
      .left_box{
        width: 230px;
        height: 72px;
      }
      .right_box{
        height: 72px;
      }
      h5{
        font-size: 14px;
        line-height: 14px;
        margin-bottom: 3px;
      }
      p{
        font-size: 14px;
        line-height: 22px;
        color: #282828;
      }
    }
}

</style>

<template>
<div id="contact">
    <Head ref="head"></Head>
    <div ref="main_contact" class="main_contact">
      <div class="contact_us">
        <img src="../../assets/images/contact_us.png">
        <div class="contact_us_info">
          <div class="title">{{$t('introduction.contactUs')}}</div>
          <div style="display: flex;">
            <div>
              <div class="left_box">
                <h5>{{$t('introduction.company')}}</h5>
                <p>{{$t('introduction.companyName')}}</p>
              </div>
              <div class="left_box">
                <h5>{{$t('introduction.phone')}}</h5>
                <p>17321278188</p>
              </div>
            </div>
            <div>
              <div class="right_box">
                <h5>{{$t('introduction.tele')}}</h5>
                <p>021-65873950</p>
              </div>
              <div class="right_box">
                <h5>QQ：</h5>
                <p>2881968968</p>
              </div>
            </div>
          </div>
          <div>
            <h5>{{$t('introduction.address')}}</h5>
            <p>{{$t('introduction.detailedAddress')}}</p>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
</div>
</template>

<script>
import Head from "@components/Head";
import Footer from "@components/Footer";
import appConfig from "@src/app.config";
export default {
    page: {
        title: '简介',
        meta: [{ name: 'description', content: appConfig.description }],
    },
  data() {
    return {
    };
  },
  components: {
    Head,
    Footer,
  },
  computed: {
    language(){
      return localStorage.getItem('language');
    }
  },
  watch:{
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
  },
  methods: {},
  created() {},
  mounted() {
    this.$refs.main_contact.style.height = document.documentElement.clientHeight - 65 + 'px'
  },
};
</script>