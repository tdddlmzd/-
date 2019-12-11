<template>
<div id="home">
    <Head ref="head"></Head>
    <HomeSearch></HomeSearch>
    <Footer></Footer>
</div>
</template>
<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import PageHeader from '@components/page-header'
import Head from '@components/Head'
import Footer from '@components/Footer'
import HomeSearch from '@components/HomeSearch'

export default {
  page: {
    title: '船期',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { Layout, PageHeader, Head, Footer, HomeSearch },
  data() {
    return {
      title: '船期',
      items: [
        {
          text: '船期',
          href: '/',
        },
        {
          text: '船期',
          active: true,
        },
      ],
    }
  },
  methods : {
    
  }
 
}
 
</script>


