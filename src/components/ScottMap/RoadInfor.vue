<style lang="scss">
#RoadInfor {
    .road_title {
        display: flex;
        align-items: center;
        font-size: 14px;
        font-weight: 600;
        width: 100%;
        height: 46px;
        background-color: #072c4c;
        opacity: 0.8;
        color: #fff;
        padding: 0px 20px 0px 20px;
        cursor: pointer;
        position: relative;
        box-sizing: content-box;
    }
    .road_main_content {
        margin-top: 16px;
        padding: 0px 20px 10px 20px;
    }
    .h_title {
            display: flex;
            align-items: center;
            font-size: 14px;
            font-weight: 600;
            margin-bottom: 11px;
            position: relative;
        .line_P {
            width: 3px;
            height: 14px;
            background-image: linear-gradient(#072c4c, #072c4c),
                linear-gradient(#0983f8, #0983f8);
            background-blend-mode: normal, normal;
            margin-right: 10px;
        }
        .flo_ic{
            position: absolute;
            right: 0;
            display: flex;
            align-items: center;
            .positi_icon{
                width: 17px;
	            height: 18px;
                // margin-right: 10px;
                cursor: pointer;
            }
            .tingliu{
                width: 14px;
	            height: 16px;
                cursor: pointer;
            }
            .image_icon{
                width: 100%;
                height: 100%;
            }
        }
        .GPS_mill{
            position: absolute;
            right: 0;
            color: #282828;
            font-size: 12px;
            font-weight: normal;
        }
    }
  .road_infor_ul {
        width: 100%;
        padding-left: 13px;
        position: relative;
        border-bottom: 1px solid #f2f2f2;
        padding-bottom: 20px;
        margin-bottom: 20px;
        .road_infor_li {
            color: #282828;
            font-size: 12px;
            .road_li_P {
                width: 50%;
                box-sizing: border-box;
                padding-right: 10px;
                display: inline-block;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                word-break: break-all;
            }
            .road_li_tesP{
                width: 100%;
                line-height: 2;
                box-sizing: border-box;
                padding-right: 10px;
                display: inline-block;
                word-wrap:break-word;
            }
        }
  }
    .road_qi_z{
        width: 100%;
        min-height: 74px;
        padding-bottom: 20px;
        border-bottom: 1px solid #f2f2f2;
        .qis_z{
            display: flex;
            align-items: flex-start;
            position: relative;
            min-height: 18px;
        }
        .qi_img_z{
            width: 18px;
	        height: 18px;
            position: absolute;
            left: 0;
            top: 1px;
        }
        .qi_p_z{
            color: #282828;
            font-size: 12px;
            padding-left: 30px;
        }
        .j_road{
            width: 100%;
            height: 14px;
            margin-top: 3px;
            margin-bottom: 3px;
        }
        .jiant_road{
            width: 5px;
            height: 12px;
            margin-left: 6px;        
        }
    }

.road_tip{
    padding: 10px 20px 20px 20px;
    display: flex;
    align-items: flex-start;
    .tiTitle{
        color: #007ce3;
        font-size: 12px;
    }
    .tisyu{
        flex: 1;
    }
    .tip_infor{
        color: #007ce3;
        font-size: 12px;
    }
    .tes_tip{
        margin-top: 2px;
        color: #007ce3;
        font-size: 12px;
        line-height: 20px;
    }
}
}
</style>
<template>
    <div id="RoadInfor" style="width: 100%; height: 100%">
        <div v-for="(item, index) in collecData" :key="index">
            <div class="road_title">
                <p>{{item.truckNo}}</p>
            </div>
            <div class="road_main_content">
                <div class="road_infor">
                    <div class="h_title">
                        <p class="line_P"></p>
                        <p>{{ $t("ScottMap.cardInfor") }}</p>
                        <div class="flo_ic">
                            <!-- <div class="positi_icon">
                                <el-tooltip effect="dark" :content="$t('ScottMap.pos_de')" placement="bottom">
                                    <img src="./images/position.png" class="image_icon" @click="showAdrres(item)"/>
                                </el-tooltip>    
                            </div> -->
                            <!-- <div class="tingliu">
                                <el-tooltip effect="dark" :content="$t('ScottMap.stop')" placement="bottom">
                                    <img src="./images/xiang.png" class="image_icon"/>
                                </el-tooltip>                                
                            </div> -->
                        </div>
                    </div>
                    <ul class="road_infor_ul">
                        <li class="road_infor_li">
                            <p class="road_li_P">{{ $t("ScottMap.speed") }}: {{ item.positionInfo.spd }} </p>
                            <p class="road_li_P">{{ $t("ScottMap.mileage") }}: {{ item.positionInfo.mil ? item.positionInfo.mil + $t('ScottMap.km') : '' }}</p>
                        </li>
                        <li class="road_infor_li">
                            <p class="road_li_tesP">{{ $t("ScottMap.update") }}: {{ item.positionInfo.updatime }}</p>
                        </li>
                        <li class="road_infor_li">
                            <p class="road_li_tesP">{{ $t("ScottMap.currentPosition") }}: {{ item.positionInfo.adr }}</p>
                        </li>
                    </ul>
                </div>
                <div class="aff_infor">
                    <div class="h_title">
                        <p class="line_P"></p>
                        <p>{{ $t("ScottMap.mileInf") }}</p>
                        <p class="GPS_mill">{{ $t("ScottMap.GPS") }}: {{ item.mileageMsg.mileageNum ? item.mileageMsg.mileageNum + 'km' : '' }}</p>
                    </div>
                    <div class="road_qi_z">
                        <div class="qis_z">
                            <img src="./images/road_qi.png" class="qi_img_z"/>
                            <p class="qi_p_z" v-title="item.mileageMsg.startLocation">{{ item.mileageMsg.startLocation }}</p>
                        </div>
                        <div class="j_road">
                            <!-- <img src="./images/qi_z.png" class="jiant_road"> -->
                        </div>
                        <div class="qis_z">
                            <img src="./images/road_zhong.png" class="qi_img_z"/>
                            <p class="qi_p_z" v-title="item.mileageMsg.endLocation">{{ item.mileageMsg.endLocation }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="road_tip">
                <div class="tiTitle">{{ $t("ScottMap.TtIT") }}</div>
                <div class="tisyu">
                    <div class="tip_infor">{{ $t("ScottMap.Tip") }}</div>
                    <div class="tes_tip">{{ $t("ScottMap.tesT") }}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ["vehicleList"],
    data() {
        return {
            collecData: [], //最多几条数据
            currentIndex: 0,
            isWeiMing: false,
        };
    },
    watch: {
        //集卡信息
        vehicleList: {
            handler: function (val) {
                var that = this
                if (val.length > 0) {
                    for (let i = 0; i < val.length; i++) {
                        if(!val[i].positionInfo){
                            val[i].positionInfo.spd = ''
                            val[i].positionInfo.mil = ''
                            val[i].positionInfo.utc = ''
                            val[i].positionInfo.adr = ''
                        }
                        if(!val[i].mileageMsg){
                            val[i].mileageMsg = {
                                mileageNum:'',
                                startLocation: '',
                                endLocation: '',
                            }
                        }
                        val[i].positionInfo['updatime'] = val[i].positionInfo.utc ? that.getProcessTime("YY-mm-dd HH:MM",new Date(val[i].positionInfo.utc - 0)) : ''
                    }
                    that.collecData = val
                }
            },
            immediate: true,
            deep: true,
        },
    },
    methods: {
        mouseenter(){
            this.isWeiMing = true
        },
        mouseleave(){
            this.isWeiMing = false
        },
        //显示位置明细
        showAdrres(val){
            this.$emit('showAdrres',val.truckNo,1,10,1)
        },
        getProcessTime(fmt, date) {
            let ret
            let opt = {
                "Y+": date.getFullYear().toString(),        // 年
                "m+": (date.getMonth() + 1).toString(),     // 月
                "d+": date.getDate().toString(),            // 日
                "H+": date.getHours().toString(),           // 时
                "M+": date.getMinutes().toString(),         // 分
                "S+": date.getSeconds().toString()          // 秒
                // 有其他格式化字符需求可以继续添加，必须转化成字符串
            };
            for (let k in opt) {
                ret = new RegExp("(" + k + ")").exec(fmt);
                if (ret) {
                    fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
                };
            };
            return fmt
        }    
    },
    mounted() {},
};
</script>