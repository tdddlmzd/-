<style lang="scss">

</style>
<template>
    <!-- 动态船舶 -->
    <div ref="DynamicShip">
        <DynamicShipList v-if="DynamicShipList"></DynamicShipList>
        <DynamicShipDetail v-if="DynamicShipDetail"></DynamicShipDetail>
        <BulkUpload v-if="BulkUpload"></BulkUpload>
    </div>
</template>

<script>
    import appConfig from "@src/app.config";
    import DynamicShipList from "@components/DynamicShip/DynamicShipList";
    import DynamicShipDetail from "@components/DynamicShip/DynamicShipDetail";
    import BulkUpload from "@components/DynamicShip/BulkUpload";
    export default {
        page: {
            title: '动态船舶',
            meta: [{ name: 'description', content: appConfig.description }],
        },
        data(){
            return {
               DynamicShipList: true,
               DynamicShipDetail: false,
               BulkUpload: false,
               rowDetail: {},
               listInfo: {}, //动态船舶列表页面搜索信息
            }
        },
        methods: {
            changeComponents(tab){
                if(tab == 'List'){
                    this.DynamicShipList = true
                    this.DynamicShipDetail = false
                    this.BulkUpload = false
                }else if(tab == 'Detail'){
                    this.DynamicShipList = false
                    this.DynamicShipDetail = true
                    this.BulkUpload = false
                }else if(tab == 'Upload'){
                    this.DynamicShipList = false
                    this.DynamicShipDetail = false
                    this.BulkUpload = true
                }
            }
        },
        computed: {
            
        },
        watch: {
            
        },
        mounted(){
            this.$refs.DynamicShip.style.minHeight = document.documentElement.clientHeight - 122 + 'px'
        },
        components: {
            DynamicShipList,
            DynamicShipDetail,
            BulkUpload,
            appConfig
        },
    };
</script>

