<style lang="scss">
</style>
<template>
    <!-- 港港船期 -->
    <div ref="PortSchedule">
        <PortScheduleList v-if="PortSchedule"></PortScheduleList>
        <PortScheduleDetail v-else></PortScheduleDetail>
    </div>
</template>

<script>
    import appConfig from "@src/app.config";
    import PortScheduleList from "@components/PortSchedule/PortScheduleList";
    import PortScheduleDetail from "@components/PortSchedule/PortScheduleDetail";
    export default {
        page: {
            title: '港港船期',
            meta: [{ name: 'description', content: appConfig.description }],
        },
        data(){
            return {
               PortSchedule: true,
               detailStatus: '',
               pol: '',
               polCode: '',
               polId: '',
               polCityId: '',
               listInfo: {}, //港港船期列表页面搜索信息
               pageSize: 10,
            }
        },
        methods: {

        },
        computed: {
            
        },
        watch: {
            
        },
        mounted(){
            this.$refs.PortSchedule.style.minHeight = document.documentElement.clientHeight - 122 + 'px'
        },
        components: {
            PortScheduleList,
            PortScheduleDetail,
            appConfig
        },
    };
</script>