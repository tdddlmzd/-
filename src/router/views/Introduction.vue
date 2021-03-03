<style lang="scss">
.datain{
    position: relative;
    width: 100%;
    .datain-banner{
        height: 532px;
        background-image: url('../../assets/images/newbanner.png');
        background-position: center 0px;
        background-repeat: no-repeat;
        background-size: cover;
        .datain-banner-info{
            width: 100%;
            position: absolute;
            top: 208px;
            left: 0;
            text-align: center;
            color: #fff;
            h1{
                font-size: 42px;
                margin-bottom: 60px;
                font-weight: normal;
            }
            p{
                font-size: 26px;
                font-weight: normal;
            }
        }
    }
    .introduction{
        min-height: 372px;
        padding-top: 92px;
        margin-bottom: 130px;
        h1{
            font-size: 40px;
            color: #282828;
            margin-bottom: 29px;
            font-weight: normal;
            text-align: center;
        }
        .introduction_content{
            width: 810px;
            margin: 0 auto;
            p{
                text-indent:2em;
                font-size: 18px;
                color: #282828;
                font-weight: normal;
                line-height: 34px;
                text-align: justify;
            }
            p:first-of-type{
                margin-bottom: 32px;
            }
        }
    }
}

</style>

<template>
<div id="home">
    <Head ref="head"></Head>
    <div class="datain">
        <!-- 在线申请部分 -->
        <div class="datain-banner">
            <div class="datain-banner-info">
                <h1>{{$t('introduction.professional')}}</h1>
                <p>{{$t('introduction.committed')}}</p>
            </div>
        </div>
        <div class="introduction">
            <h1>{{$t('introduction.introduction')}}</h1>
            <div class="introduction_content">
                <p>{{$t('introduction.content1')}}</p>
                <p>{{$t('introduction.content2')}}</p>
            </div>
        </div>
    </div>
    <Footer></Footer>
</div>
</template>

<script>
import Head from "@components/Head";
import Footer from "@components/Footer";
export default {
    page: {
        title: '简介',
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
  mounted() {},
};
</script>