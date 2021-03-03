<style lang="scss">
    #InforShip{
        .infro_title{
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
        .delect_icon{
            color: #909090;
            font-size: 16px;
            position: absolute;
            right: 54px;
            top: 50%;
            transform: translateY(-50%);
        }
        .teshu_icon{
            color: #fff;
        }
        .teshuTitle{
            background-color: #fff;
            opacity: 1;
            color: #282828;
        }
        .teshuTitle:hover{
            background-color: #f2f2f2;
        }
        .title_tip{
            margin-left: 5px;
        }
        .ship_content{
            margin-top: 16px;
            padding: 0px 20px 10px 20px;
            .ship_infor{
                // padding-bottom: 15px;
                // border-bottom: 1px solid #f2f2f2;
            }
            .aff_infor{
                padding-top: 17px;
                padding-bottom: 10px;
            }
        }
        .h_title{
            display: flex;
            align-items: center;
            font-size: 14px;
            font-weight: 600;
            margin-bottom: 11px;
            .line_P{
                width: 3px;
                height: 14px;
                background-image: linear-gradient(#072c4c, #072c4c), 
                linear-gradient( #0983f8,  #0983f8);
                background-blend-mode: normal, normal;
                margin-right: 10px;
            }
        }
        .ship_infor_ul{
            width: 100%;
            padding-left: 13px;
            position: relative;
            .ship_infor_li{
                color: #282828;
                font-size: 12px;
                margin-top: 5px;
                p{
                    width: 50%;
                    box-sizing: border-box;
                    padding-right: 10px;
                    display: inline-block;
                    white-space: nowrap; 
                    text-overflow: ellipsis; 
                    overflow: hidden; 
                    word-break: break-all;
                }
                .teBUtoon{
                    position: absolute;
                    width: 30px;
                    height: 12px;
                    font-size: 12px;
                    color: #072c4c;
                    display: inline-block;
                    right: 0;
                    bottom: 6px;
                    text-align: right;
                    cursor: pointer;
                    font-weight: 600;
                }
            }
        }
        .aff_infor_ul{
            width: 100%;
            margin-top: 16px;
            .aff_infor_li{
                position: relative;
                border-left: 2px solid #072c4c;
                padding-bottom: 10px;
                .aff_cirle{
                    display: inline-block;
                    width: 6px;
                    height: 6px;
                    background-image: linear-gradient(#072c4c, #072c4c),
                    linear-gradient(#0983f8,  #0983f8);
                    background-blend-mode: normal, normal;
                    position: absolute;
                    left: -4px;
                    top: 0;
                    border-radius: 50%;
                }
                .hui_aff_cirle{
                    display: inline-block;
                    width: 6px;
                    height: 6px;
                    background-image: linear-gradient(#f2f2f2,#f2f2f2), 
	                linear-gradient(#0983f8,#0983f8);
	                background-blend-mode: normal, normal;
                    position: absolute;
                    left: -4px;
                    top: 0;
                    border-radius: 50%;
                }
                .aff_div_h1{
                    width: 100%;
                    color: #282828;
                    font-size: 12px;
                    font-weight: 600;
                    height: 20px;
                    line-height: 20px;
                    position: absolute;
                    padding-left: 11px;
                    left: 0px;
                    top: -8px;
                    .place_arrid{
                        display: inline-block;
                    }
                    .place_status{
                        display: inline-block;
                    }
                    .transit_p1{
                        font-weight: 500;
                    }
                    .transit_p3{
                        font-weight: 500;
                        margin-left: 18px;
                    }
                    .chuan_zaitu{
                        width: 14px;
                        height: 13px;
                        position: absolute;
                        left: -8px;
                        top: 4px                    
                    }
                }
                .aff_div_state{
                    overflow: hidden;
                    padding-left: 11px;
                    height: 70px;
                    padding-top: 15px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    .state_st{
                        display: flex;
                        align-items: center;
                        color: #282828;
                        font-size: 12px;
                        .daoli{
                            width: 60px;
                        }
                        .state_time{
                            width: 150px;
                            text-align: right;
                        }
                    }
                    .tuImage{
                        position: absolute;
                        top: 35px;
                        right: 0;
                        display: flex;
                        align-items: center;
                    }
                    .tuImage_teshu{
                        position: absolute;
                        top: 25px;
                        left: 0;
                        display: flex;
                        align-items: center;
                        width: 100%;
                        .ship_time{
                            width: 218px;
                            text-align:right;
                            font-weight:600;
                            margin-right: 52px;
                        }
                        .tuImage_tchar_show{
                            position: absolute;
                            right: 0;
                            display: flex;
                            align-items: center;
                        }
                    }
                    .shi_tuImage{
                        position: absolute;
                        top: 42px;
                        left: 0;
                        display: flex;
                        align-items: center;
                        width: 100%;
                        .ship_time{
                            width: 217px;
                            text-align:right;
                            font-weight:600;
                        }
                    }
                    .t_echarts{
                        width: 14px;
                        height: 14px;
                        background-image: url('./images/t_echarts.png');
                        background-repeat: no-repeat;
                        background-size: 100% 100%;
                        margin-right: 10px;
                        cursor: pointer;
                    }
                    .berTime_ship{
                        font-size: 12px;
                        color: #282828;
                        margin-right: 10px;
                    }
                    .y_open{
                        width: 14px;
                        height: 10px;
                        background-image: url('./images/y_open.png');
                        background-repeat: no-repeat;
                        background-size: 100% 100%;
                        cursor: pointer;
                    }
                    .y_close{
                        width: 14px;
                        height: 10px;
                        background-image: url('./images/y_close.png');
                        background-repeat: no-repeat;
                        background-size: 100% 100%;
                        cursor: pointer;
                    }
                }
            }
            .noBorder{
                border-left: 2px solid transparent;
            }
            .huiborder{
                border-left: 2px solid #f2f2f2;
            }
            .noHeight{
                height: 20px;
            }
        }
        .loadMore{
            width: 100%;
            color: #072c4c;
            font-size: 12px;
            font-weight: 600;
            text-align: center;
            margin-top: 6px;
            margin-bottom: 6px;
        }
        .traContrast{
            position: relative;
            display: flex;
            align-items: center;
            padding-top: 12px;
            .guiji{
                color: #282828;
                font-size: 12px;
                font-weight: 600;
            }
            .gui_but{
                position: absolute;
                right: 0;
                display: flex;
                align-items: center;
            }
            .gui_button{
                padding: 5px 10px;
                text-align: center;
                border-radius: 14px;
                border: solid 1px #f2f2f2;
                color: #282828;
                font-size: 12px;
                cursor: pointer;
                margin-left: 8px;
            }
            .gui_b{
                color: #fff;
                background-color: #072c4c;
            }
        }
        .customCon{
            display: flex;
            align-items: center;
            margin-top: 15px;
            .custiom_time{
                width: 154px;
                // height: 24px;
                // overflow: hidden;
            }
            .custiom_button{
                width: 75px;
                margin-left: 8px;
                display: flex;
                align-items: center;
                justify-content: space-around;
                .yes{
                    color: #072c4c;
                    font-weight: 600;
                    cursor: pointer;
                }
                .no{
                    color: #909090;
                    cursor: pointer;
                }
            }
            .hen_g{
                width: 10px;
                height: 1px;
                background-color: #909090;
                margin-left: 2px;
                margin-right: 2px;
            }
        }
        .el-input__inner{
            border-radius: 20px;
            height: 24px;
            line-height: 24px;
        }
        .el-icon-time:before{
            display: none;
        }
        
    }
    .checkDetail{
        width: 100%;
        text-align: center;
        margin-top: 6px;
        .deta_p1{
            font-size: 12px;
            color: #072c4c;
            cursor: pointer;   
            font-weight: 600;
        }
    }
    .packup{
        width: 100%;
        text-align: center;
        margin-top: 6px;
        margin-bottom: 2px;
        .deta_p1{
            font-size: 12px;
            color: #072c4c;
            cursor: pointer;   
            font-weight: 600;
        }
    }
    .zwsj_content{
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: #fff;
        box-shadow: 0px 8px 40px 0px 
                rgba(0, 0, 0, 0.2);
        // border-radius: 6px;        
    }
    .zwsh_content{
        width: 100%;
        height: 218px;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        .image_zwsj{
            width: 181px;
            height: 107px;
            margin-top: 46px;
        }
        .zwsj_P{
            font-size: 12px;
            color: #282828;
            margin-top: 15px;
        }
    }
</style>
<template>
    <div id="InforShip" style="width:100%;height:100%">
        <div v-for="(item,index) in tenData" :key="index">
            <div class="infro_title" :class="currentIndex == index ? '' : 'teshuTitle'" :style="{borderTop: tenData.length > 1 ? (index == 0 && index == currentIndex) ? '' : (index == 0 && index !== currentIndex) ? '8px solid #f2f2f2' : (index !== 0 && index - 1 == currentIndex) ? '8px solid #f2f2f2': '4px solid #f2f2f2' : '',borderBottom: tenData.length > 1 ? currentIndex == index ? '' : (currentIndex !== index && index == tenData.length - 1) ? '8px solid #f2f2f2': '4px solid #f2f2f2' : ''}" @click="changeShip(item,index)">
                <p>{{item.shipNameEn}}</p>
                <p class="title_tip">{{item.isZwsj ? '【' + $t('no Date') + '】' : item.touNavStatu ? '【' + item.touNavStatu + '】' : ''}}</p>
                <i class="el-icon-close delect_icon" v-if='isroute' :class="currentIndex == index ? 'teshu_icon' : ''" @click.stop="delectDate(item,index)"></i>
            </div>
            <div v-if="currentIndex == index">
                <div class="ship_content" v-if="!item.isZwsj">
                    <div class="ship_infor">
                        <div class="h_title">
                            <p class="line_P"></p>
                            <p>{{$t('route.shipInfo')}}</p>
                        </div>
                        <ul class="ship_infor_ul">
                            <li class="ship_infor_li" v-if="isShowInfro">
                                <p>{{$t('route.quantity')}}: {{ship.shipContainerNum}}</p>
                                <p>{{$t('route.buildDate')}}: {{ship.dateBuild}}</p>
                            </li>
                            <li class="ship_infor_li" v-if="isShowInfro">
                                <p>{{$t('route.nationality')}}: {{ship.flagName}}</p>
                                <p>{{$t('route.draft')}}: {{ship.draught}}</p>
                            </li>
                            <li class="ship_infor_li" v-if="isShowInfro">
                                <p>{{$t('route.callSign')}}: {{ship.callSign}}</p>
                                <p>{{$t('route.heading')}}: {{ship.hdg}}</p>
                            </li>
                            <li class="ship_infor_li" v-if="isShowInfro">
                                <p>MMSI: {{ship.mmsi}}</p>
                                <p>{{$t('route.pathToThe')}}: {{ship.cog}}</p>
                            </li>
                            <li class="ship_infor_li" v-if="isShowInfro">
                                <p>IMO: {{ship.imo}}</p>
                                <p>{{$t('route.speed')}}: {{ship.sog}}</p>
                            </li>
                            <li class="ship_infor_li" v-if="isShowInfro">
                                <p v-if=" $i18n.locale == 'zh-CN'">{{$t('route.type')}}: 集装箱船</p>
                                <p v-if=" $i18n.locale == 'en-US'">{{$t('route.type')}}: Container ship</p>
                                <p>{{$t('route.destination')}}: {{ship.dest}}</p>
                            </li>
                            <li class="ship_infor_li" v-if="isShowInfro">
                                <p v-if=" $i18n.locale == 'zh-CN'">{{$t('route.state')}}: {{ship.navStatus|shipStatusZn}}</p>
                                <p v-if=" $i18n.locale == 'en-US'">{{$t('route.state')}}: {{ship.navStatus|shipStatusYn}}</p>
                                <p>{{$t('route.scheduledTime')}}: {{ship.etaStd?ship.eta:''}}</p>
                            </li>
                            <li class="ship_infor_li" v-if="isShowInfro">
                                <p>{{$t('route.shipLength')}}: {{ship.length}}</p>
                                <p>{{$t('route.latitude')}}: {{ship.lat}}</p>
                            </li>
                            <li class="ship_infor_li" v-if="isShowInfro">
                                <p>{{$t('route.shipWidth')}}: {{ship.breadth}}</p>
                                <p>{{$t('route.longitude')}}: {{ship.lon}}</p>
                            </li>
                            <!-- <li class="ship_infor_li" v-if="isShowInfro">
                                <p>{{$t('route.speedTrack')}}: {{ship.sog}}/{{ship.cog}}</p>
                                <p>{{$t('route.draft')}}: {{ship.draught}}</p>
                            </li> -->
                            <li class="ship_infor_li" v-if="!isShowInfro">
                                <p>{{$t('route.quantity')}}: {{ship.shipContainerNum}}</p>
                                <p>{{$t('route.buildDate')}}: {{ship.dateBuild}}</p>
                            </li>
                            <li class="ship_infor_li">
                                <p style="width:100%">{{$t('route.update')}}: {{ship.updateTime}}{{ship.timeDiff}}</p>
                                <span class="teBUtoon" @click="showShipInfor()">{{ isShowInfro ? $t('route.putAway') : $t('route.open')}}</span>
                            </li>
                        </ul>
                        <div class="checkDetail" @click="showShipDetail()" v-if="!isShowDetail">
                            <p class="deta_p1">{{$t('route.checkDetails')}}</p>
                        </div>
                    </div>
                    <div class="aff_infor" v-if="isShowDetail">
                        <div class="h_title" v-if="isHistoRecord">
                            <p class="line_P"></p>
                            <p>{{$t('route.BerthingPath')}}</p>
                        </div>
                        <ul class="aff_infor_ul" v-if="isHistoRecord">
                            <!-- 在途时 显示的目的港地址 -->
                            <li class="aff_infor_li huiborder" v-if="isIntra && ship.dest">
                                <span class="hui_aff_cirle"></span>
                                <div class="aff_div_h1">
                                    <div class="transit_p1" style="color:#909090">{{ship.dest}}</div>
                                </div>
                                <div class="aff_div_state">
                                    <div class="state_st">
                                        <p style="color:#909090">
                                            <span style="display: inline-block;width: 60px">{{ship.etaStd ? $t('route.advance') : ''}}</span>
                                            <span class="transit_p2" style="font-weight: 500;display: inline-block;width: 150px;text-align:right">{{ship.etaStd ? getTimeDay(ship.etaStd) : ''}}</span>
                                        </p>
                                    </div>
                                    <div class="state_st">
                                        <p></p>
                                    </div>
                                    <div class="shi_tuImage">
                                        <p class="ship_time" v-if=" $i18n.locale == 'zh-CN'">{{ship.etaStd ? '还有' + diffTime(new Date().getTime(),new Date(ship.etaStd.replace(/-/g,'/')).getTime()) + '到达' : ''}}</p>
                                        <p class="ship_time" v-if=" $i18n.locale == 'en-US'">{{ship.etaStd ? 'Remaining' + getDatHour(new Date(ship.etaStd.replace(/-/g,'/')).getTime() - new Date().getTime(),2) : ''}}</p>
                                    </div>
                                </div>
                            </li>
                            <li class="aff_infor_li" v-for="(item,index) in shipArry" :key="index" :class=" index < indexLength - 1 ? '' : 'noBorder'" v-if="index < indexLength">
                                <span class="aff_cirle"></span>
                                <!-- 有在途并且是第一个 -->
                                <div class="aff_div_h1" v-if="isIntra && index == 0">
                                    <img src="./images/chuan.png" class="chuan_zaitu"/>
                                    <p class="transit_p1">
                                        <span style="display: inline-block;width: 60px">{{$t('route.transit')}}</span>
                                        <span class='transit_p2' style="font-weight: 500;display: inline-block;width: 150px;text-align:right">{{item.daoTime ? getTimeDay(item.daoTime) : ''}}</span>
                                    </p>
                                </div>

                                <!-- 已靠泊并且第一个 -->
                                <!-- <div class="aff_div_h1" v-if="isKaob && !isIntra">
                                    <p class="place_status">{{'已靠泊'}}</p>
                                </div> -->

                                <div class="aff_div_h1" v-else>
                                    <p class="place_arrid" v-if=" $i18n.locale == 'zh-CN'">{{ (isKaob && index !== 0 || !isKaob) ? item.portname_cn ? item.portname_cn :  item.portname_en ? item.portname_en : '': ""}} {{(isKaob && index !== 0 || !isKaob) ? item.country_cn : ""}}</p>
                                    <p class="place_arrid" v-if=" $i18n.locale == 'en-US'">{{(isKaob && index !== 0 || !isKaob) ? item.portname_en ? item.portname_en : item.portname_cn ? item.portname_cn : '' : ""}} {{(isKaob && index !== 0 || !isKaob) ? item.country_en : ""}}</p>
                                    <p class="place_status" v-if=" $i18n.locale == 'zh-CN'">{{index == 0 ? isKaob ? ($t('route.berthing') + ' ' + (item.portname_cn ? item.portname_cn :  item.portname_en ? item.portname_en : '')) : "【" + item.status + "】" : ''}}</p>
                                    <p class="place_status" v-if=" $i18n.locale == 'en-US'">{{index == 0 ? isKaob ? ($t('route.berthing') + ' ' + (item.portname_cn ? item.portname_cn :  item.portname_en ? item.portname_en : '')) : "【" + item.status + "】" : ''}}</p>
                                </div>

                                <!-- 有在途并且是第一个 -->
                                <div class="aff_div_state" v-if="isIntra && index == 0">
                                    <div class="state_st">
                                        <p></p>
                                    </div>
                                    <div class="state_st">
                                        <!-- 离泊 -->
                                        <p class="daoli">{{$t('route.departured')}}</p>
                                        <p class="state_time">{{item.liTime ? getTimeDay(item.liTime) : ''}}</p>
                                    </div>
                                    <div class="tuImage_teshu">
                                        <p class="ship_time">{{$t('route.sailed') + ' ' + item.berTime}}</p>
                                        <div class="tuImage_tchar_show">
                                            <div class="t_echarts" @click="clickEcharts(item,index)"></div>
                                            <div :class="item.isShow ? 'y_open' : 'y_close'" @click="isOpenTu(item,index)"></div>
                                        </div>
                                    </div>
                                </div>

                                <!-- 不是在途 或者 index! == 0 -->
                                <div class="aff_div_state" v-if="index < indexLength - 1 && (!isIntra || index > 0)">
                                    <div class="state_st">
                                        <!-- 到达 -->
                                        <p class="daoli">{{isKaob && index == 0 ? '' : $t('route.arrivals')}}</p>
                                        <p class="state_time">{{isKaob && index == 0 ? '' : item.daoTime ? getTimeDay(item.daoTime) : ''}}</p>
                                    </div>
                                    <div class="state_st">
                                        <!-- 离泊 -->
                                        <p class="daoli">{{$t('route.departured')}}</p>
                                        <p class="state_time">{{item.liTime ? getTimeDay(item.liTime) : ''}}</p>
                                    </div>
                                    <div class="tuImage" v-if="!isKaob || (isKaob && index !== 0)">
                                        <div class="berTime_ship">{{item.berTime}}</div>
                                        <div class="t_echarts" @click="clickEcharts(item,index)"></div>
                                        <div :class="item.isShow ? 'y_open' : 'y_close'" @click="isOpenTu(item,index)"></div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div class="loadMore"><span @click="loadMore()" style="cursor: pointer;" v-if="isLoadMore">{{$t('route.loadMore')}}</span></div>
                        <div class="traContrast">
                            <p class="guiji">{{$t('route.trajectory')}}</p>
                            <div class="gui_but">
                                <p class="gui_button" :class="activeIndex === 1 ? 'gui_b' : ''" @click="activeWek(1)">{{$t('route.lastTwoWeeks')}}</p>
                                <p class="gui_button" :class="activeIndex === 2 ? 'gui_b' : ''" @click="activeWek(2)">{{$t('route.lastWeek')}}</p>
                                <p class="gui_button" :class="activeIndex === 3 ? 'gui_b' : ''" @click="activeWek(3)">{{$t('route.customize')}}</p>
                            </div>
                        </div>
                        <div class="customCon" v-if="isShowCustom">
                            <div class="custiom_time">
                                <el-date-picker
                                    v-model="startTime"
                                    type="datetime"
                                    placeholder="选择开始时间"
                                    style="width:100%"
                                    :clearable="clearable"
                                    :picker-options="traceStart"
                                    value-format="yyyy-MM-dd HH:mm:ss"
                                    @change="changeStart()"
                                >
                                </el-date-picker>
                            </div>
                            <div class="hen_g"></div>
                            <div class="custiom_time">
                                <el-date-picker
                                    v-model="endTime"
                                    type="datetime"
                                    placeholder="选择结束时间"
                                    style="width:100%"
                                    :clearable="clearable"
                                    :picker-options="traceEnd"
                                    value-format="yyyy-MM-dd HH:mm:ss"
                                    @change="changeEnd()"
                                >
                                </el-date-picker>
                            </div>
                            <div class="custiom_button">
                                <p class="yes" @click="custiomYes()">确认</p>
                                <p class="no" @click="custiomNo()">取消</p>
                            </div>
                        </div>
                    </div>
                    <div class="packup" @click="hideShipDetail()" v-if="tenData.length > 1 && isShowDetail">
                        <p class="deta_p1">{{$t('route.PutThis')}}</p>
                    </div>
                </div>
                <div v-if="item.isZwsj" class="zwsj_content" id="zwsj_content">
                    <div class="zwsh_content">
                        <img src="@components/shipMap/images/icon_Nodata.png" class="image_zwsj">
                        <p class="zwsj_P">{{$t('route.SorryNoData')}}</p>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>
<script>

export default {
  name: "InforShip",
  props: [
      'shipObject',
      'shipTraje',
      'tenShipData',
      'isroute'
  ],
  data() {
    return {
        isHistoRecord: false, //是否显示历史挂靠
        clearable: false, //时间是否显示清除按钮
        isShowInfro: false, //船舶信息是否展开
        activeIndex: '', //当前点击的周次
        startTime: '', //自定义开始时间
        endTime: '',//自定义j结束时间
        traceStart: {},
        traceEnd: {},
        isShowCustom: false, //是否显示自定义时间

        isShowDetail: true, //第一条是否显示靠泊信息
        ship:{ //船信息
            id: '',
            length: "",
            breadth: "",
            gt: "",
            dwt: "",
            dateBuild: "",
            shipContainerNum: "",
            maxSpeed: "",
            avgSpeed: "",
            flagName: "",
            callSign: "",
            mmsi: "",
            imo: "",
            shipType: "",
            navStatus: "",
            navStatusen: "",
            updateTime: "",
            draught: "",
            cog: "",
            hdg: "",
            sog: "",
            dest: "",
            destStd: "",
            destcode: "",
            eta: "",
            etaStd: "",
            lat: "",
            lon: "",
            mileage: "",
            transitTime: "",
            timeDiff: '', //相差时间
        },
        touNavStatu: '', //船当前信息的状态
        indexLength: 4,//当前显示的数量
        isLoadMore: true, //是否显示 加载更多
        shipArry: [],
        isIntra: false, //是否在途
        isKaob: false, //是否靠泊

        tenData: [], //最多10条船得数据
        currentIndex: 0,
      }
    },
    watch: {
        shipObject: { //船舶信息
            handler: function (val) {
                if (val) {
                    this.ship.id = val.id
                    this.ship.nameEn = val.nameEn
                    this.ship.length =  val.length ? val.length + 'm' : ''
                    this.ship.breadth =  val.breadth ? val.breadth + 'm' : ''
                    this.ship.gt =  val.gt
                    this.ship.dwt =  val.dwt
                    this.ship.dateBuild =  val.dateBuild ?  this.getProcessTime("YY-mm-dd",new Date(val.dateBuild.replace(/-/g,'/'))) : ''
                    this.ship.shipContainerNum =  val.shipContainerNum
                    this.ship.maxSpeed =  val.maxSpeed
                    this.ship.avgSpeed =  val.avgSpeed
                    this.ship.flagName =  val.flagName
                    this.ship.callSign =  val.callSign
                    this.ship.mmsi =  val.mmsi
                    this.ship.imo =  val.imo
                    this.ship.shipType =  val.shipType
                    this.ship.navStatus =  val.navStatus
                    this.ship.navStatusen =  val.navStatusen
                    this.ship.updateTime =  val.updateTime
                    this.ship.draught =  val.draught ? val.draught / 1000 : ''
                    this.ship.cog =  val.cog ? (val.cog / 100) + '°' : ''
                    this.ship.hdg =  val.hdg ? (val.hdg / 100) + '°' : ''
                    this.ship.sog =  val.sog ? (val.sog / 1000) + 'kn' : '0.0kn'
                    this.ship.dest =  val.dest
                    this.ship.destStd =  val.destStd
                    this.ship.destcode =  val.destcode
                    this.ship.eta =  val.eta
                    this.ship.etaStd =  val.etaStd
                    this.ship.lat =  val.lat ? this.changeToDFM((val.lat / 1000000.0)) + 'N' : ''
                    this.ship.lon =  val.lon ? this.changeToDFM((val.lon / 1000000.0)) + 'E' : ''
                    this.ship.mileage =  val.mileage
                    this.ship.transitTime =  val.transitTime

                    if(val.updateTime){ //如果有更新时间  计算到离现在时间差多少
                        var upDate = new Date(val.updateTime.replace(/-/g,'/')).getTime()
                        var nowDate = new Date().getTime()
                        if(upDate > nowDate){//说明几天后
                            this.ship.timeDiff = this.diffTime(nowDate,upDate,'后')
                        }else{ //说明几天前
                            this.ship.timeDiff = this.diffTime(upDate,nowDate,'前')
                        }
                    }
                }
            },
            immediate: true,
        },
        shipTraje: { //船舶轨迹
            handler: function (val) {
                var val = JSON.parse(JSON.stringify(val))
                if (val && val.length > 0) {
                    // this.isShowInfro = true
                    if(val.length < 4){
                        this.indexLength = val.length
                        this.isLoadMore = false
                    }else{
                        this.indexLength = 4
                        this.isLoadMore = true
                    }
                    //如果返回回来的轨迹数组 第一个有atd字段  则给数组添加一个在航
                    if(this.ship.etaStd){
                        this.isKaob = new Date().getTime() - new Date(this.ship.etaStd.replace(/-/g,'/')).getTime() >= 0 ? true : false
                    }else{
                        this.isKaob = new Date().getTime() - new Date(this.ship.etaStd).getTime() >= 0 ? true : false
                    }
                    this.touNavStatu = this.isKaob ? '已靠泊' : val[0].status ? val[0].status : ''
                    //this.isKaob  现在时间 >= 预计时间  说明已靠泊 否则就是在途

                    if(val[0].atd && !this.isKaob){
                        //当前时间
                        this.isIntra = true
                        var daoda = this.getProcessTime("YY-mm-dd HH:MM:SS",new Date())
                        var daodaTime = this.getDatHour(new Date().getTime() - new Date(val[0].atd.replace(/-/g,'/')).getTime(),2)
                        var queryInfro = {
                            isShow : false,
                            liTime: val[0].atd, //第一个的atd
                            daoTime: daoda, //当前时间点
                            berTime: daodaTime,
                            status: '在途',
                            startPlace: val[0].portname_cn ? val[0].portname_cn : val[0].portname_en ? val[0].portname_en : '',
                            endPlace: '',
                        }

                        val.unshift(queryInfro)
                        for (let i = 1; i < val.length; i++) {
                            val[i].isShow = false
                            // 离港时间
                            val[i].liTime = (i == val.length - 1) ? '' : val[i+1].atd ? val[i+1].atd : ''
                            // 到达时间 为当前时间
                            val[i].daoTime = val[i].ata ? val[i].ata : ''

                            //靠泊停留时间                        
                            val[i].berTime = val[i].stayinport ? this.getDatHour(val[i].stayinport,1) : ''

                            //开始地方
                            val[i].startPlace = (i == val.length - 1) ? '' : val[i+1].portname_cn ? val[i+1].portname_cn : val[i+1].portname_en ? val[i+1].portname_en : ''

                            //结束地方
                            val[i].endPlace = val[i].portname_cn ? val[i].portname_cn : val[i].portname_en ? val[i].portname_en : ''
                        }
                    }else{
                        this.isIntra = false
                        if(val[0].atd){
                            var daoda = this.getProcessTime("YY-mm-dd HH:MM:SS",new Date())
                            var daodaTime = this.getDatHour(new Date().getTime() - new Date(val[0].atd.replace(/-/g,'/')).getTime(),2)
                            var queryInfro = {
                                isShow : false,
                                liTime: val[0].atd, //第一个的atd
                                daoTime: daoda, //当前时间点
                                berTime: daodaTime,
                                status: '已靠泊',
                                portname_cn: val[0].portname_cn ? val[0].portname_cn : '',
                                portname_en: val[0].portname_en ? val[0].portname_en : '',
                                startPlace: val[0].portname_cn ? val[0].portname_cn : val[0].portname_en ? val[0].portname_en : '',
                                endPlace: '',
                            }
    
                            val.unshift(queryInfro)
                        }
                        
                        for (let i = 0; i < val.length; i++) {
                            val[i].isShow = false
                            // 离港时间
                            val[i].liTime = (i == val.length - 1) ? '' : val[i+1].atd ? val[i+1].atd : ''
                            // 到达时间 为当前时间
                            val[i].daoTime = val[i].ata ? val[i].ata : ''

                            //靠泊停留时间                        
                            val[i].berTime = val[i].stayinport ? this.getDatHour(val[i].stayinport,1) : ''

                            //开始地方
                            val[i].startPlace = (i == val.length - 1) ? '' : val[i+1].portname_cn ? val[i+1].portname_cn : val[i+1].portname_en ? val[i+1].portname_en : ''

                            //结束地方
                            val[i].endPlace = val[i].portname_cn ? val[i].portname_cn : val[i].portname_en ? val[i].portname_en : ''
                        }
                    }
                    this.isHistoRecord = true
                    this.shipArry = JSON.parse(JSON.stringify(val))
                }else{
                    // this.isShowInfro = true
                    this.isHistoRecord = false
                    this.isLoadMore = false
                }
            },
            immediate: true,
        },
        tenShipData: {
            handler: function(val){
                if(val.length > 0){
                    this.tenData = val
                    //这里处理数据
                    //如果有船舶靠泊信息
                    for (let i = 0; i < val.length; i++) {
                        var ele = val[i]
                        if(ele.shipTraje.length > 0){
                            //当前状态
                            if(ele.shipObject.etaStd){
                                var issKaob = new Date().getTime() - new Date(ele.shipObject.etaStd.replace(/-/g,'/')).getTime() >= 0 ? true : false
                            }else{
                                var issKaob = new Date().getTime() - new Date(ele.shipObject.etaStd).getTime() >= 0 ? true : false
                            }
                            ele.touNavStatu = issKaob ? '已靠泊' : ele.shipTraje[0].status ? ele.shipTraje[0].status : ''
                        }
                    }

                    if(val.length == 1){ //是否收起靠泊详情
                        this.isShowDetail = true
                    }else{
                        this.isShowDetail = false
                    }
                }else{
                    this.tenData = []
                    this.isShowDetail = false
                }
                this.currentIndex = 0
            },
            immediate: true
        },
    },
    methods: {
        //经纬度转换坐标
        changeToDFM(value){
            var du = value.toString()
            var str1 = du.split(".")
            var du1 = str1[0]
            var tp = "0."+str1[1]
            var tp = String(tp * 60)//这里进行了强制类型转换
            var str2 = tp.split(".")
            var fen = str2[0]
            tp = "0."+ str2[1]
            return du1 + "°" + fen + "'"
        },
        //切换船信息
        changeShip(val,index){
            if(val.isClick){ //当前有数据 或者当前回数据 可点击
                this.currentIndex = index
                this.isShowDetail = true
    
                //清空 给默认值
                this.isShowInfro = false
                this.isShowCustom = false
                this.activeIndex = ''
                this.startTime = ''
                this.endTime = ''
                this.traceStart = {}
                this.traceEnd = {}
                
                //改变父亲属性
                this.$emit('parentValue',val)
            }
        },
        //删除某个船信息
        delectDate(val,index){
            this.$emit('delectDate',val,index,this.currentIndex)
        },
        //船舶信息的收起与展示
        showShipInfor(){
            this.isShowInfro = !this.isShowInfro
        },
        //当前点击的周次
        activeWek(val){
            this.activeIndex = val
            if(val == 3){ //代表点击的是自定义
                this.isShowCustom = true
                var nowTime = new Date().getTime()
                var lasterTime = new Date().getTime() - 24 * 60 * 60 * 1000
                this.startTime = this.getProcessTime("YY-mm-dd HH:MM:SS",new Date(lasterTime))
                this.endTime = this.getProcessTime("YY-mm-dd HH:MM:SS",new Date(nowTime))
                this.changeStart()
                this.changeEnd()
            }else{
                // this.isShowCustom = false
                // this.startTime = ''
                // this.endTime = ''
                if(val == 1){
                    this.custiomYes(1)
                }else{
                    this.custiomYes(2)
                }
            }
        },

        //当前open close
        isOpenTu(val,index){
            val.isShow = !val.isShow
            var daoTime = ''
            //当当前无到达时间时 取上一段的离泊时间
            if(val.daoTime == ''){
                for (let i = index-1; i < this.shipArry.length; i--) {
                    if(this.shipArry[i].liTime){ 
                        daoTime = this.shipArry[i].liTime
                        break
                    }
                }
            }

            var liTime = ''
            //当前无离泊时间时 取下一段的到达时间时间
            if(val.liTime == ''){
                for (let i = index+1; i < this.shipArry.length; i++) {
                    if(this.shipArry[i].daoTime){ 
                        liTime = this.shipArry[i].daoTime
                        break
                    }
                }
            }
            var vesselVoyage = {
                startTime: val.liTime ? val.liTime : liTime, //开始时间
                endTime: val.daoTime ? val.daoTime : daoTime, //结束时间
                isShow: val.isShow,
                index:index,
                startPlace: val.startPlace,
                endPlace: val.endPlace,
                startPlaceTime: val.liTime, //到达时间
                endPlaceTime: val.atd, //离泊时间
            }
            this.$emit('clickShipMap',vesselVoyage)
        },
        //出现 echarts
        clickEcharts(val,index){
            //创建一个时间变量
            //如果当前点击无到达时间 则循环数组
            var daoTime = ''
            //当当前无到达时间时 取上一段的离泊时间
            if(val.daoTime == ''){
                for (let i = index-1; i < this.shipArry.length; i--) {
                    
                    if(this.shipArry[i].liTime){ 
                        daoTime = this.shipArry[i].liTime
                        break
                    }
                }
            }

            var liTime = ''
            //当前无离泊时间时 取下一段的到达时间时间
            if(val.liTime == ''){
                for (let i = index+1; i < this.shipArry.length; i++) {
                    if(this.shipArry[i].daoTime){ 
                        liTime = this.shipArry[i].daoTime
                        break
                    }
                }
            }
            
            var echarInfor = {
                startTime: val.liTime ? val.liTime : '', //开始时间
                endTime: val.daoTime ? val.daoTime : daoTime, //结束时间
                isRoute: 1, //1代表时从船舶信息过去的
            }
            this.$emit("clickEcharts",echarInfor)
        },
        //自定义确定
        custiomYes(val){
            var startTime = this.getProcessTime("YY-mm-dd HH:MM:SS",new Date(new Date().getTime()))
            var endTime = this.getProcessTime("YY-mm-dd HH:MM:SS",new Date(new Date().getTime()))
            var isZdy = true //是否点击的自定义
            if(val == 1){
                startTime = this.getProcessTime("YY-mm-dd HH:MM:SS",new Date(new Date().getTime() - 3600 * 1000 * 24 * 14))
                isZdy = false
            }else if(val == 2){
                startTime = this.getProcessTime("YY-mm-dd HH:MM:SS",new Date(new Date().getTime() - 3600 * 1000 * 24 * 7))
                isZdy = false
            }else{
                startTime = this.startTime
                endTime = this.endTime
                isZdy = true
            }
            var TimeSet = {
                startTime:startTime,
                endTime:endTime,
                isZdy:isZdy
            }
            this.$emit('clickRoute',TimeSet)
        },
        //自定义取消
        custiomNo(){
            this.isShowCustom = false
        },
        //计算开始时间
        changeStart(){
            if(this.startTime !== null){ //当前值为空 也会进行判断 所以条件最好不要非空验证
                this.traceEnd = {
                    disabledDate: (time) => {
                        return time.getTime() < new Date(this.startTime.replace(/-/g,'/')).getTime() //小于开始时间的不选
                    }
                }
            }else{
                this.traceEnd = {}
            }    
        },
        //计算结束时间
        changeEnd(){
            if(this.endTime !== null){ //当前值为空 也会进行判断 所以条件最好不要非空验证
                this.traceStart = {
                    disabledDate: (time) => {
                        return time.getTime() > new Date(this.endTime.replace(/-/g,'/')).getTime() //小于开始时间的不选
                    }
                }
            }else{
                this.traceStart = {}
            }    
        },
        //处理日期时间格式  2020-01-17(周五) 02:25
        getTimeDay (time) {
            if (time == '') {
                return '--'
            }
            var weekDay = [
                this.$t('list.suns'),
                this.$t('list.mons'), 
                this.$t('list.tues'),
                this.$t('list.weds'), 
                this.$t('list.thus'),
                this.$t('list.fris'), 
                this.$t('list.sats')
            ];
            var newTi = time.replace(/-/g,'/')
            var geS = this.getProcessTime("YY-mm-dd HH:MM",new Date(newTi)) //格式化时间
            var b = geS.split(' ')[0]
            var d = geS.split(' ')[1]
            var c = weekDay[new Date(newTi).getDay()]
            return b + ' ' + d + ' ' +  '(' + c + ') '
        },
        //处理日期时间格式 
        getProcessTime(fmt, date) {
            let ret;
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
            return fmt;
        },
        //获取时间日期
        getFromDate(val){
            var date = new Date().getTime() - 3600 * 1000 * 24 * val
            return date
        },
        //计算换天 /小时
        getDatHour(val,mark){
            if(mark == 1){ //传入的是是小时
                 var diff = Number(val) * 60 * 60 * 1000
            }else if(mark == 2){ //传入的是毫秒
                var diff = Number(val)
            }
            //计算出相差天数 
            var days=Math.floor(diff/(24*3600*1000))
            //计算出小时数 
            var leave1=diff%(24*3600*1000) //计算天数后剩余的毫秒数 
            var hours=Math.floor(leave1/(3600*1000))
            //计算相差分钟数 
            var leave2=leave1%(3600*1000)       //计算小时数后剩余的毫秒数 
            var minutes=Math.floor(leave2/(60*1000))
            var returnStr = ''
            if(minutes > 0) { 
                returnStr = minutes + "m" + returnStr
            } 
            if(hours > 0) { 
                returnStr = hours + "h" + returnStr
            } 
            if(days > 0) { 
                returnStr = days + "d" + returnStr
            } 
            return returnStr
        },
        //计算时间差 天 小时 分 秒格式
        diffTime(startDate,endDate,tiName) { 
            var diff=endDate - startDate //时间差的毫秒数 
            //计算出相差天数 
            var days=Math.floor(diff/(24*3600*1000))
            //计算出小时数 
            var leave1=diff%(24*3600*1000) //计算天数后剩余的毫秒数 
            var hours=Math.floor(leave1/(3600*1000)); 
            //计算相差分钟数 
            var leave2=leave1%(3600*1000)       //计算小时数后剩余的毫秒数 
            var minutes=Math.floor(leave2/(60*1000))
            //计算相差秒数 
            var leave3=leave2%(60*1000)    //计算分钟数后剩余的毫秒数 
            // var seconds=Math.round(leave3/1000)
            var returnStr = '' 

            if(minutes > 0) { 
                returnStr = minutes + "分" + returnStr
            } 
            if(hours > 0) { 
                returnStr = hours + "小时" + returnStr
            } 
            if(days > 0) { 
                returnStr = days + "天" + returnStr
            } 
            if(tiName){
                return '(' + returnStr + tiName + ')'
            }else{
                return returnStr
            }
        },
        //加载更多
        loadMore(){
            if(this.indexLength + 4 < this.shipArry.length){
                this.indexLength = this.indexLength + 4
                this.isLoadMore = true
            }else{
                this.indexLength = this.shipArry.length
                this.isLoadMore = false
            }
        },
        //显示靠泊信息
        showShipDetail(){
            this.isShowDetail = true
        },
        //隐藏靠泊信息
        hideShipDetail(){
            this.isShowDetail = false
        },
    },
    mounted() {},
    filters: {
        shipStatusZn: function(value) { //状态中文
        let status = [
            "在航(主机推动)",
            "锚泊",
            "失控",
            "操作受限",
            "吃水受限",
            "靠泊",
            "搁浅",
            "捕鱼",
            "船帆动力",
            "保留",
            "保留",
            "保留",
            "保留",
            "保留",
            "AIS-SART",
            "未定义"
        ];
        return status[value];
        },
        shipStatusYn: function(value) { //状态中文
        let status = [
            "ON_THE_WAY",
            "ANCHOR",
            "OUT_OF_CONTRO",
            "LIMITED_MANIPULATION",
            "LIMITED_DRAFT",
            "BERTHING",
            "STRANDED",
            "ENGAGED_IN_FISHING",
            "POWERED_BY_SAILS",
            "RESERVED1",
            "RESERVED2",
            "RESERVED3",
            "RESERVED4",
            "RESERVED5",
            "AIS-SART",
            "UNDEFINED"
        ];
        return status[value];
        }
    },
};
</script>