<style scoped>
    .my-list-content {
        position: relative;
        top: 57px;
    }
</style>
<template>
    <div id="list">
        <Head ref="head"></Head>
        <div class="my-list-content">
            <listDetail></listDetail>
            <div>
                <Footer></Footer>
            </div>
        </div>
    </div>
</template>
<script>
import Head from "@components/Head";
import HeadHunt from "@components/HeadHunt";
import listDetail from "@components/listDetail";
import Declare from "@components/Declare";
import Footer from "@components/Footer";
export default {
    page: {
        title: '跟踪',
    },
    data() {
        return {
            
        };
    },
    components: {
        Head,
        HeadHunt,
        listDetail,
        Declare,
        Footer
    },
    mounted() {},
}
</script>