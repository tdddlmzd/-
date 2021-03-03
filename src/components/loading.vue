<template>
    <div class="Loading">
        <div class="loading_image">
            <img v-if="clearcloading" :src="loading_chuan" class="loading_chuan"/>
            <img v-if="clearcloading" :src="loading_line" class="loading_line"/>
            <img v-if="clearcloading" :src="loading_num" class="loading_num"/>
        </div>
    </div>
</template>
<script>
import loading_chuan from '../assets/images/loading_chuan.gif'
import loading_line from '../assets/images/loading_line.gif'
import loading_num from '../assets/images/loading_num.gif'

export default {
    data() {
        return{
            clearcloading: Boolean
        }
    },
    created() {
        this.clearcloading = true
    },
    destroyed() {
        this.clearcloading = false
    },
    computed:{
        loading_chuan() {
            return loading_chuan + '?+' + new Date()
        },
        loading_line() {
            return loading_line + '?+' + new Date()
        },
        loading_num() {
            return loading_num + '?+' + new Date()
        }
    }
}
</script>
<style>
    .Loading{
        width: 100%;
        height: 100%;
        position: fixed;
        z-index: 2000;
        background-color: rgba(255,255,255,.9);
        margin: 0;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        -webkit-transition: opacity .3s;
        transition: opacity .3s
    }
    .Loading .loading_image{
        margin-top: -21px;
        width: 100%;
        height: 140px;
        text-align: center;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        position: fixed;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .Loading .loading_image .loading_chuan{
        position: absolute;
        width: 100px;
        height: 100px;
    }
    .Loading .loading_image .loading_line{
        position: absolute;
        width: 100px;
        height: 100px;
    }
    .Loading .loading_image .loading_num{
        position: absolute;
        width: 100px;
        height: 100px;
    }
</style>