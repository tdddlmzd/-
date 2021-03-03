<script>
import Layout from '@layouts/auth'

export default {
  page: {
    title: '404',
    meta: [{ name: 'description', content: '404' }],
  },
  components: { Layout },
  props: {
    resource: {
      type: String,
      default: '',
    },
  },
}
</script>

<template>
  <Layout>
    <div class="download-template row justify-content-center">
      <div class="card">
        <div class="error-ghost text-center">
            <img src="@assets/images/error.png" alt="error-image">
        </div>
        <div class="text-center">
            <p class="text-prompt">{{$t('Oops, your page is missing')}}</p>
            <router-link tag="a" to="/" class="button">
              {{$t('login.back')}}
            </router-link>
        </div>
      </div>
    </div>
  </Layout>
</template>

<style lang="scss" scoped>
.justify-content-center{
  width: 100%;
  height: 100%;
  background: #ffffff;
  position: absolute;
  top: 0;
  left: 0;
  .card{
    width: 465px;
    margin: 70px auto 0 auto;
    img{
      width: 100%;
      height: 203px;
    }
  }
  .text-center{
    text-align: center;
    .text-prompt{
      font-size: 24px;
      line-height: 58px;
      color: #282828;
      letter-spacing: 3px;
      margin: 0;
    }
    .button{
      display: block;
      margin: 0 auto;
      width: 180px;
      height: 48px;
      background-color: #072c4c;
      border-radius: 24px;
      color: #fff;
      font-size: 18px;
      line-height: 46px;
      letter-spacing: 2px;
      padding-left: 6px;
      box-sizing: border-box;
    }
  }
}
</style>
