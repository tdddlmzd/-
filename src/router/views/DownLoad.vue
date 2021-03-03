<template>
<!-- 下载页面 -->
    <div class="downLoads">
        <Head ref="head"></Head>
        <div class="downLoadsContentCenter" ref="downLoads">
            <div class="downLoadsContent" :class="isShowSmall?'downLoadsContentSmall':''">
                <div class="downLoadsContentHeader">
                    <p class="downLoadsContentHeaderTitle">
                        {{ $t('download.professional') }}
                    </p>
                    <p class="downLoadsContentHeaderTitleDownLoad">
                        <el-button @click="handleDownLoad">{{ $t('download.downloadNow') }}</el-button>
                    </p>
                </div>
                <div class="downLoadsContentInfoImg"></div>
                <div class="downLoadsContentFooter">
                    <p class="p_diannao" @click="handleDownLoad">
                        <i class="icon_diannao"></i>
                        <span>{{ $t('download.windows') }}</span>
                    </p>
                    <p class="p_shouji">
                        <i class="icon_shouji"></i>
                        <span>{{ $t('download.Android') }}</span>
                    </p>
                    <p class="p_gongzhonghao">
                        <i class="icon_gongzhonghao"></i>
                        <span>{{ $t('download.weChat') }}</span>
                    </p>
                </div>
            </div>
        </div>
        <Footer ref="footer" class="footer"></Footer>
    </div>
</template>

<script>
    import Head from "@components/Head";
    import Footer from "@components/Footer";
    export default {
        page: {
            title: '下载',
        },
        data(){
            return {
                isShowSmall: false,
            }
        },
        methods: {
            handleDownLoad(){
                window.open(this.clientUrl)
            },
        },
        computed: {
            language(){
                return localStorage.getItem('language');
            }
        },
        watch: {
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
        mounted(){
            this.$refs.downLoads.style.minHeight = document.documentElement.clientHeight - 65 + 'px'
            if(document.documentElement.clientHeight > 850){
                this.isShowSmall = false
            }else{
                this.isShowSmall = true
            }
        },
        components: {
            Head,
            Footer
        },
    };
</script>

<style lang="scss" scoped>
.downLoads{
    width: 100%;
    background-color: #fff;
    .downLoadsContentCenter{
        width: 1100px;
        text-align: center;
        margin: 0 auto;
        padding-top: 110px;
        position: relative;
        .downLoadsContent{
            position: absolute;
            top: 53.8%;
            left: 50%;
            transform: translate(-50%, -50%);
            .downLoadsContentHeader{
                text-align: center;
                .downLoadsContentHeaderTitle{
                    min-height: 46px;
                    line-height: 46px;
                    font-size: 46px;
                    color: #282828;
                }
                .downLoadsContentHeaderTitleLetter{
                    height: 20px;
                    line-height: 20px;
                    font-size: 20px;
                    margin-top: 21px;
                    color: #a8a8a8;
                }
                .downLoadsContentHeaderTitleDownLoad{
                    margin-top: 24px;
                    .el-button{
                        min-width: 152px;
                        height: 48px;
                        font-size: 20px;
                        border-radius: 24px;
                        background-color: #072c4c;
                        color: #fff;
                        &:hover{
                            background: #395670;
                        }
                    }
                }
            }
            .downLoadsContentInfoImg{
                width: 699px;
                height: 345px;
                background: url("../../assets/images/downLoad/tu.png") no-repeat;
                background-size: 699px 345px;
                margin: 64px auto 0 auto;
            }
            .downLoadsContentFooter{
                margin-top: 24px;
                display: flex;
                justify-content: space-around;
                p{
                    display: inline-block;
                    user-select: none;
                    cursor: pointer;
                    i{
                        margin: 0 auto;
                    }
                    .icon_diannao{
                        background: url("../../assets/images/home/icon_diannao.png") no-repeat;
                        background-size: 117px 117px;
                        display: block;
                        width: 117px;
                        height: 117px;
                    }
                    .icon_shouji{
                        background: url("../../assets/images/downLoad/icon_shouji.png") no-repeat;
                        background-size: 116px 116px;
                        display: block;
                        width: 116px;
                        height: 116px;
                    }
                    .icon_gongzhonghao{
                        background: url("../../assets/images/home/icon_gongzhonghao.png") no-repeat;
                        background-size: 117px 117px;
                        display: block;
                        width: 117px;
                        height: 117px;
                    }
                    span{
                        margin-top: 12px;
                        display: block;
                        font-size: 16px;
                        height: 16px;
                        line-height: 16px;
                    }
                }
                .p_diannao:hover{
                    .icon_diannao{
                        background: url("../../assets/images/downLoad/icon_downLoad.png") no-repeat;
                        background-position: 50%;
                    }
                }
                .p_shouji:hover{
                    .icon_shouji{
                        background: url("../../assets/images/downLoad/icon_shoujiCode.png") no-repeat;
                        background-size: 117px 117px;
                    }
                }
                .p_gongzhonghao:hover{
                    .icon_gongzhonghao{
                        background: url("../../assets/images/home/icon_gongzhonghaoCode.jpg") no-repeat;
                        background-size: 117px 117px;
                    }
                }
            }
        }
        .downLoadsContentSmall{
            .downLoadsContentHeader{
                .downLoadsContentHeaderTitle{
                    font-size: 32px;
                }
                .downLoadsContentHeaderTitleDownLoad{
                    margin-top: 14px;
                    .el-button{
                        min-width: 90px;
                        height: 30px;
                        border-radius: 15px;
                        font-size: 12px;
                        padding: 0;
                    }
                }
            }
            .downLoadsContentInfoImg{
                width: 474px;
                height: 234px;
                background: url("../../assets/images/downLoad/tu_min.png") no-repeat;
                background-size: 474px 234px;
                margin-top: 15px;
            }
            .downLoadsContentFooter{
                margin-top: 0px;
                p{
                    .icon_diannao{
                        background: url("../../assets/images/downLoad/icon_diannao_min.png") no-repeat;
                        background-size: 80px 80px;
                        width: 80px;
                        height: 80px;
                    }
                    .icon_shouji{
                        background: url("../../assets/images/downLoad/icon_shouji_min.png") no-repeat;
                        background-size: 80px 80px;
                        width: 80px;
                        height: 80px;
                    }
                    .icon_gongzhonghao{
                        background: url("../../assets/images/downLoad/icon_gongzhonghao_min.png") no-repeat;
                        background-size: 80px 80px;
                        width: 80px;
                        height: 80px;
                    }
                    span{
                        margin-top: 10px;
                        font-size: 12px;
                        height: 12px;
                        line-height: 12px;
                    }
                }
                .p_diannao:hover{
                    .icon_diannao{
                        background: url("../../assets/images/downLoad/icon_downLoad_min.png") center center no-repeat;  
                    }
                }
                .p_shouji:hover{
                    .icon_shouji{
                        background: url("../../assets/images/downLoad/icon_shoujiCode_min.png") no-repeat;
                        background-size: 78px 78px;
                    }
                }
                .p_gongzhonghao:hover{
                    .icon_gongzhonghao{
                        background: url("../../assets/images/downLoad/icon_gongzhonghaoCode_min.png") no-repeat;
                        background-size: 80px 80px;
                    }
                }
            }
        }
    }
    
    
    
    
}
</style>