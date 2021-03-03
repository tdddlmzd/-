<template>
    <div id="home">
        <Head ref="head"></Head>
        <HomeSearch ref="HomeSearch"></HomeSearch>
    </div>
</template>
<script>
import Head from '@components/Head'
import HomeSearch from '@components/HomeSearch'

export default {
    page: {
        title: "鲸准船期-全球1800港口船期查询_船舶定位_货物跟踪",
        meta: [
            {
                name: 'description',
                content: "鲸准船期通过云计算和大数据技术，对实时全球船期、船舶定位和船公司货物跟踪数据进行挖掘和整合，为广大国际物流企业提升供应链可视化与智能化提供服务与支持!"
            },
            {name: 'keywords', content: "鲸准船期，船期查询，船期表，港航纵横，集运宝典，船公司货物跟踪，船舶定位，船舶计划"},
        ],
    },
    components: {Head, HomeSearch},
    data() {
        return {
            userInfo:
                this.getCookie("authId") !== null && this.getCookie("authId") !== "" && this.getCookie("authId") !== undefined
                    ? this.getCookie("authId")
                    : ""
        }
    },
    async mounted() {
        //看是否是  track.ijingzhun.com
        if (this.urlLocal.indexOf('TRACK') !== -1) {
            //登录情况下
            if (this.userInfo) {
                this.$router.push({
                    path: '/track',
                    name: 'Track',
                });
            } else { //未登录情况下
                this.$router.push({
                    path: '/'
                })
            }
        } else {
            if (this.userInfo) {
                this.$router.push({
                    name: 'Route'
                });
            } else {
                this.$router.push({
                    path: '/'
                })
            }
        }
    },
}
</script>


