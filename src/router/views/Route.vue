<template>
<div id="home">
    <Head ref="head"></Head>
    <routeSearch ref="HomeSearch"></routeSearch>
</div>
</template>
<script>
import Head from '@components/Head'
import routeSearch from '@components/routeSearch'

export default {
  page: {
      title: "船期查询-船期表，船期，海运船期，船期查询，船公司船期",
      meta: [
          {
              name: 'description',
              content: "鲸准港区查询提供港中国-全球1800港口船期查询，船期表查询以及船期ETA,ETD，包括上海船期查询，宁波船期查询，深圳船期查询，广州船期查询，青岛船期查询，厦门船期查询，大连船期查询等。"
          },
          {name: 'keywords', content: "船期表，船期，海运船期，船期查询，船公司船期，船期动态"},
      ],
  },
  components: { Head, routeSearch },
  data() {
    return {
      userInfo:
        this.getCookie("authId") !== null && this.getCookie("authId") !== "" && this.getCookie("authId") !== undefined
        ? this.getCookie("authId")
        : ""
    }
  },
  mounted() {
    //点击船期 未登录 跳到 首页
    if(!this.userInfo){
        this.$router.push({
            path: '/'
        });
      }
  },
}
</script>