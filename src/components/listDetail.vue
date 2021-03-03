<style lang="scss">
.list-main{
    background: #f8f8f8;
}
.track_detail{
    margin-left: 3.8%;
    display: flex;
    .left_part{
        width: 64%;
        padding-right: 20px;
        padding-top: 30px;
        overflow: hidden;
        .left_header{
            display: flex;
            align-items: center;
            position: relative;
            .back_icon{
                width: 17px;
                height: 20px;
                background-image: url('../assets/images/cargo/back_icon.png');
                background-repeat: no-repeat;
                background-size: 9px 14px;
                background-position: center;
                cursor: pointer;
                margin-right: 8px;
                &:hover{
                    background-image: url('../assets/images/cargo/back_icon_hover.png');
                }
            }
            .back_number{
                font-size: 16px;
                font-weight: 600;
                color: #282828;
            }
            .follow_btn{
                width: 80px;
                height: 24px;
                background: #26b4b2;
                border-radius: 12px;
                line-height: 24px;
                color: #fff;
                text-align: center;
                font-size: 12px;
                cursor: pointer;
                position: absolute;
                right: 0;
                &:hover{
                    background: #51c3c1;
                }
            }
        }
        .left_nav{
            margin: 20px 0 25px 15px;
            display: flex;
            .nav_li{
                color: #282828;
                font-size: 12px;
                cursor: pointer;
            }
            .li_active{
                font-weight: 600;
                color: #26b4b2;
                position: relative;
                &::after{
                    content: '';
                    height: 2px;
                    width: 100%;
                    background: #26b4b2;
                    position: absolute;
                    left: 0;
                    bottom: -4px;
                }
            }
        }
        .left_content{
            background: #fff;
            border-radius: 4px;
            border: solid 1px #f2f2f2;
            width: 100%;
            overflow: hidden;
            .content_line1{
                margin: 0 20px;
                padding: 20px 0;
                display: flex;
                border-bottom: solid 1px #f2f2f2;
                .content_line1_item{
                    width: 40%;
                    padding-right: 20px;
                    .title{
                        font-size: 12px;
                        line-height: 12px;
                        color: #282828;
                        margin-bottom: 10px;
                        text-align: left;
                        font-weight: 600;
                        display: flex;
                        img{
                            display: inline-block;
                            margin-left: 10px;
                            cursor: pointer;
                        }
                    }
                    .content{
                        width: 100%;
                        font-size: 12px;
                        line-height: 12px;
                        color: #282828;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        word-break: break-all;                    
                    }
                    .remark{
                        white-space: nowrap;
                    }
                    .tiaoz{
                        color: #007ce3;
                        cursor: pointer;
                    }
                    .tiaoz:hover{
                        font-weight: 600;
                    }
                    .hui_tao{
                        color: #909090;
                    }
                }
                .tesLine{
                    width: 140px;
                }
            }
            .content_line2{
                margin: 0 20px;
                padding-top: 20px;
                border-bottom: solid 1px #f2f2f2;
                position: relative;
                .wharf_title{
                    font-size: 12px;
                    color: #282828;
                    font-weight: 600;
                    margin-bottom: 20px;
                    display: flex;
                    align-items: center;
                    .wharf_Line{
                        margin-left: 5px;
                        width: 1px;
                        height: 12px;
                        background: #e8e6e6;
                        margin-top: 1px;
                    }
                    .wharf_title_name{
                        font-weight: normal;
                        font-size: 12px;
                        padding-left: 10px;
                    }
                }
                .wharf_content{
                    display: flex;
                    .wharf_content_item{
                        width: 40%;
                        .title{
                            font-size: 12px;
                            line-height: 12px;
                            color: #909090;
                            margin-bottom: 10px;
                            text-align: left;
                            img{
                                display: inline-block;
                                margin-left: 10px;
                                position: relative;
                                top: 2px;
                                cursor: pointer;
                            }
                        }
                        .content{
                            font-size: 12px;
                            line-height: 12px;
                            color: #282828;
                            margin-bottom: 20px;
                        }
                    }
                    .teshuWharf{
                        width: 140px;
                    }
                }
                .wharf_mask{
                    background: rgba(255, 255, 255, 0.8);
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: absolute;
                    top: 0;
                    left: 0;
                    p{
                        color: #282828;
                        font-size: 14px;
                        font-weight: 600;
                    }
                }
            }
            .content_line3{
                padding: 20px;
                .content_line3_title{
                    margin-bottom: 16px;
                    font-size: 12px;
                    line-height: 12px;
                    color: #282828;
                    font-weight: 600;
                }
                .content_line3_item{
                    border-bottom: 1px solid #f2f2f2;
                    font-size: 12px;
                    padding: 15px 20px 15px 20px;
                    color: #282828;
                    display: flex;
                    .name_item{
                        width: 12%;
                        margin-right: 10px;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        word-break: break-all;
                    }
                    .right_item{
                        flex: 1;
                        overflow: hidden;
                    }
                    .nodata_hui{
                        color: #909090;
                    }
                    .conti_bottom{
                        margin-bottom: 15px;
                    }
                    .conti_right{
                        display: flex;
                        font-size: 12px;
                        color: #282828;
                        .conti_p1{
                            width: 65%;
                            display: flex;
                            overflow: hidden;
                            .left_left{
                                width: 15%;
                                margin-right: 10px;
                                white-space: nowrap;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                word-break: break-all;
                                margin-right: 10px;
                            }
                            .left_center{
                                width: 36%;
                                white-space: nowrap;
                                text-overflow: ellipsis;
                                overflow: hidden;
                                word-break: break-all;
                            }
                            .left_right{
                                width: 38%;
                                white-space: nowrap;
                                text-overflow: ellipsis;
                                overflow: hidden;
                                word-break: break-all;
                                margin-right: 10px;
                            }
                        }
                        .conti_p2{
                            width: 35%;
                            overflow: hidden;
                            display: flex;
                            .left_p2{
                                width: 100%;
                                white-space: nowrap;
                                text-overflow: ellipsis;
                                overflow: hidden;
                                word-break: break-all;
                            }
                            .chep{
                                color: #909090;
                                width: 50%;
                                white-space: nowrap;
                                text-overflow: ellipsis;
                                overflow: hidden;
                                word-break: break-all;
                                margin-right: 5px;
                            }
                            .cheBold{
                                color: #282828;
                            }
                            .plus_add{
                                font-size: 15px;
                                color: #d1d1d1;
                                cursor: pointer;
                                margin-right: 5px;
                                &:hover{
                                    color:#26b4b2;
                                }
                            }
                            .icon_delect{
                                font-size: 15px;
                                color: #d1d1d1;
                                cursor: pointer;
                                margin-right: 20px;
                                margin-top: -1px;
                                &:hover{
                                    color: #26b4b2;
                                }
                            }
                            .delect_trans{
                                font-size: 15px;
                                color: transparent;
                                margin-right: 20px;
                                margin-top: -1px;
                            }
                            .location_blue{
                                color: #007ce3;
                                cursor: pointer;
                                &:hover{
                                    font-weight: 600;
                                }
                            }
                        }
                    }
                }
                .nodata{
                    border: 0;
                    width: 100%;
                    height: 160px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding-top: 30px;
                    .image_p{
                        width: 173px;
	                    height: 77px;
                    }
                    .nodata_p{
                        font-size: 12px;
                        color: #282828;
                        margin-top: 10px;
                    }
                }     
                .grey_item{
                    background: #f9fafc;
                    border: none;                
                }
            }
        }
    }
    .right_part{
        width: 36%;
        background: #fff;
        margin-bottom: 1px;
        border-left: 1px solid #f2f2f2;
        padding-left: 20px;
        padding-right: 3.8%;
        .right_header{
            display: flex;
            padding: 20px 0;
            position: relative;
            border-bottom: 1px solid #f2f2f2;
            .state_icon{
                width: 36px;
                height: 36px;
                position: relative;
                background-color: #fff;
                margin-right: 8px;
                border-radius: 50%;
                border:  1px solid #072c4c;
                .sacsImage{
                    width: 100%;
                    height: 100%;
                }
            }
            .state_tou{
                border: 0;
            }
            .ship_info{
                flex: 1;
                width: 0;
                padding: 2px 0;
                padding-right: 90px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                .ship_info_num{
                    font-size: 14px;
                    font-weight: 600;
                    line-height: 31px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
                .ship_info_name{
                    font-size: 12px;
                    line-height: 12px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
                .ship_state{
                    color: #ff7676;
                }
            }
            .shipdt_btn{
                position: absolute;
                right: 0;
                top: 50%;
                transform: translateY(-50%);
                width: 80px;
                height: 24px;
                background-color: #e4f6f6;
                border-radius: 12px;
                font-size: 12px;
                color: #26b4b2;
                line-height: 24px;
                text-align: center;
                cursor: pointer;
                &:hover{
                    background: #D5EEEE;
                }
            }
        }
        .route_info{
            height: 77px;
            box-sizing: border-box;
            display: flex;
            padding: 20px 0;
            border-bottom: 1px solid #f2f2f2;
            .route_info_pol{
                flex: 1;
                width: 0;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                text-align: left;
                p{
                    padding-right: 20px;
                    font-size: 12px;
                    line-height: 12px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                .pol_name{
                    font-size: 14px;
                    line-height: 14px;
                    font-weight: 600;
                }
            }
            .route_info_day{
                width: 63px;
                text-align: center;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                div{
                    height: 12px;
                    font-size: 12px;
                    line-height: 14px;
                }
                img{
                    display: block;
                }
            }
            .route_info_pod{
                flex: 1;
                width: 0;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                text-align: right;
                p{  
                    padding-left: 20px;
                    font-size: 12px;
                    line-height: 12px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                .pod_name{
                    font-size: 14px;
                    line-height: 14px;
                    font-weight: 600;
                }
            }
        }
        .track_box{
            .track_box_item{
                padding-top: 20px;
                border-bottom: 1px solid #f2f2f2;
                .track_box_title{
                    display: flex;
                    justify-content: space-between;
                    font-size: 14px;
                    line-height: 14px;
                    padding-bottom: 10px;
                    font-weight: 600;
                    cursor: pointer;
                    .rotate{
                        transform: rotateZ(180deg);
                        transition: 0.3s;
                    }
                }
                .track_box_info{
                    display: flex;
                    cursor: pointer;
                    font-size: 12px;
                    line-height: 12px;
                    color: #909090;
                    margin-bottom: 20px;
                    .track_box_time{
                        padding-right: 6px;
                        margin-right: 8px;
                    }
                }
                .track_box_timeline{
                    padding-left: 8px;
                    .box_timeline_li{
                        position: relative;
                        padding-bottom: 1px;
                    }
                    .box_li{
                        border-left: 2px solid #d1d1d1;
                    }
                    .box_li_active{
                        border-left: 2px solid #26b4b2;
                    }
                    .box_li_tou{
                        border-left: 2px solid transparent !important;
                    }

                    .box_dot{
                        width: 14px;
                        height: 14px;
                        border-radius: 50%;
                        position: absolute;
                        left: -8px;
                        top: 0;
                    }
                    .box_dot_hui{
                        background-color: #ffffff;
                        border: solid 2px #d1d1d1;
                    }
                    .box_dot_active{
                        background-image: url('../assets/images/code_active.png');
                        background-repeat: no-repeat;
                        background-size: 100%;
                    }
                    .bigTitle{
                        padding-left: 17px;
                        font-size: 14px;
                        line-height: 14px;
                        div{
                            width: 100%;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            overflow: hidden;
                            word-break: break-all;
                        }
                    }
                    .bigTitle_active{
                        color: #282828;
                        font-weight: 600;
                    }
                    .bigTitle_hui{
                        color: #909090;
                    }
                    .timeline_item{
                        position: relative;
                        .small_li{
                            width: 100%;
                            padding-left: 17px;
                            height: 24px;
                            line-height: 24px;
                            display: flex;
                            align-items: center;
                            position: relative;
                        }
                        .small_li_hui{
                            color: #909090;
                        }
                        .small_li_active{
                            color: #282828;
                        }
                        .small_line{
                            position: absolute;
                            width: 2px;
                            left: -2px;
                            top: 0;
                            background: #26b4b2;
                        }
                        .small_line_ban{
                            height: 50%;
                        }
                        .small_line_quan{
                            height: 100%;
                        }
                        .small_line_huiquan{
                            height: 100%;
                            background: #d1d1d1;
                        }
                        .small_line_huiban{
                            height: 50%;
                            background: #d1d1d1;
                        }
                        .small_xu_line{
                            position: absolute;
                            width: 2px;
                            height: 50%;
                            background: #d1d1d1;
                            left: -2px;
                            top: 50%;
                        }                 
                        .small_dot{
                            position: absolute;
                            width: 8px;
                            height: 8px;
                            border-radius: 50%;
                            left: -5px;
                            top: 50%;
                            transform: translateY(-50%);
                        }
                        .small_dot_hui{
                            background: #d1d1d1;
                        }
                        .small_dot_transparent{
                            background: transparent;
                        }
                        .small_dot_active{
                            background: #26b4b2;
                        }
                        .item_small_name{
                            width: 140px;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            overflow: hidden;
                            word-break: break-all;
                            margin-right: 10px;
                        }
                        .item_small_time{

                        }                        
                        .vessel_info{
                            margin-top: 20px;
                            margin-bottom: 20px;
                            .vessel_mar{
                                width: 368px;
                                background-color: #fff;
                                border-radius: 4px;
                                position: relative;
                                padding: 10px 76px 0px 10px;
                                max-height: 120px;
                                background-color: #f2f2f2;
                                border-radius: 4px;
                                margin-left: 17px;
                            }
                            .chaunb_ding{
                                position: absolute;
                                color: #007ce3;
                                font-size: 12px;
                                right: 10px;
                                bottom: 10px;
                                cursor: pointer;
                            }
                            .chaunb_ding:hover{
                                font-weight: 600;
                            }
                            i{
                                position: absolute;
                                top: 10px;
                                right: 8px;
                                font-size: 12px;
                                line-height: 12px;
                                color: #909090;
                                cursor: pointer;
                            }
                            .i_rotate{
                                transform: rotateZ(180deg);
                                transition: 0.3s;
                            }
                            p{
                                font-size: 12px;
                                line-height: 12px;
                                color: #909090;
                                padding-bottom: 10px;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                white-space: nowrap;
                            }
                            .vessel_info_detail{
                                display: flex;
                                div{
                                    flex: 1;
                                    width: 0;
                                }
                            }
                        }
                    }
                    .timeline_item .small_li:nth-child(1){
                        padding-top: 5px;
                        height: 30px;
                        line-height: 30px;
                    }
                    .timeline_item  .small_li:nth-child(1) .small_dot{
                        top: 19px !important;
                    }
                }
            }
        }
    }
}
.el-dialog__header{
    padding: 0;
}
.guanggao{
    height: 46px;
    background: rgba(0, 0, 0, 0);
    width: 100%;
    background: url("../assets/images/guanggaoBg.jpg") no-repeat center;
    z-index: 100;
    text-align: center;
    cursor: pointer;
    background-size: 100%;
    img{
        margin-top: 11px;
    }
}
</style>
<template>
    <div>
        <div class="list-main">
            <div class="guanggao" @click="contactCustomer()"><img src="../assets/images/guangao.svg" alt=""></div>
            <div class="track_detail" ref="track_detail">
                <Loading v-if="loadings"></Loading>
                <!-- 箱跟踪详情 -->
                <!-- 左侧功能展示区 -->
                <div class="left_part">
                    <div class="left_header">
                        <div class="back_icon" @click="goBack"></div>
                        <div class="back_number">{{detailData.billNo ? $t('tracks.blbk') + ':' + detailData.billNo : detailData.containerNo ? $t('tracks.container') + ':' + detailData.containerNo : $t('tracks.blbk') + ':' + '--'}}</div>
                        <!-- 未关注微信公众号 提醒设置 -->
                        <div class="follow_btn" @click="remind()" v-if='!isWhat && userId'>{{ $t('instanceTranck.settings')}}</div>
                        <!-- 关注了微信公众号 取消提醒-->
                        <div class="follow_btn" @click="focusOn(0)" v-if="isWhat && detailData.isSub == 1">{{ $t('instanceTranck.cancel')}}</div>
                        <!-- 关注了微信公众号 关注 -->
                        <div class="follow_btn" @click="focusOn(1)" v-if="isWhat && detailData.isSub == 0 || !userId">{{ $t('instanceTranck.remind')}}</div>
                    </div>
                    <ul class="left_nav">
                        <li class="nav_li" @click="goClickColor(0)">{{$t('instanceTranck.service')}}</li>
                    </ul>
                    <div class="left_content">
                        <div class="content_line1">
                            <div class="content_line1_item">
                                <div class="title">{{ $t('instanceTranck.Service') }}</div>
                                <!-- 上海码头 出口 -->
                                <div class="content" v-if="detailData.isPort == 'E' && isShangHai == 'CNSHA'" v-title="$t('instanceTranck.serveSta1')">{{$t('instanceTranck.serveSta1')}}</div>
                                <!-- 上海码头 进口 -->
                                <div class="content" v-if="detailData.isPort == 'I' && isShangHai == 'CNSHA'" v-title="$t('instanceTranck.serveSta2')">{{$t('instanceTranck.serveSta2')}}</div>
                                <!-- 非上海码头 -->
                                <div class="content" v-if="isShangHai !== 'CNSHA'" v-title="$t('instanceTranck.serveSta3')">{{$t('instanceTranck.serveSta3')}}</div>
                            </div>
                            <div class="content_line1_item">
                                <div class="title">{{ $t('instanceTranck.Remarks') }}<img src="../assets/images/cargo/remark_icon.png" @click="remark('录入备注')"></div>
                                <div class="content remark" v-title="detailData.remark ? detailData.remark : ''">{{detailData.remark ? detailData.remark : $t('instanceTranck.no')}}</div>
                            </div>
                            <div class="content_line1_item tesLine">
                                <div class="title">{{$t('instanceTranck.jGo')}}</div>
                                <div class="content" @click="goWebsite()" :class="detailData.carrierUrl ? 'tiaoz' : 'hui_tao'">{{$t('instanceTranck.checkWebsite')}}</div>
                            </div>
                        </div>
                        <div class="content_line2">
                            <div class="wharf_title">
                                <template>
                                    <p>
                                        {{
                                            (detailData.terminal ? detailData.terminal  : '--') 
                                            + $t('instanceTranck.gangInfor') 
                                            + ' ' 
                                            + '【 ' + $t('instanceTranck.terminal') 
                                            + ': ' 
                                        }}
                                        <span style="font-weight:normal;margin-right:5px">{{(detailData.terminal_code ? detailData.terminal_code : detailData.terminal_name ? detailData.terminal_name : '--')}}</span>
                                        {{$t('instanceTranck.vessle') + ': ' }}
                                        <span style="font-weight:normal">{{(detailData.terminal_voyname ? detailData.terminal_voyname : '--')}}</span>
                                        {{
                                            ' 】'
                                        }}
                                    </p>
                                    <!-- <p class="wharf_Line"></p>
                                    <p class="wharf_title_name" v-title="$t('details.vessel') + '/' +$t('details.voyage') + ': ' +  detailData.voyname">{{$t('details.vessel') + '/' +$t('details.voyage') + ': ' +  (detailData.voyname ? detailData.voyname : '')}}</p> -->
                                </template>
                            </div>
                            <div class="wharf_content">
                                <template>
                                    <div class="wharf_content_item">
                                        <div>
                                            <div class="title">{{ $t('details.cyOpen') }}</div>
                                            <div class="content">{{detailData.terminal_open && !isShippPlan ? getTimeDay(detailData.terminal_open,'YY-mm-dd HH:MM') : '--'}}</div>
                                        </div>
                                        <div>
                                            <div class="title">{{ $t('details.cyClose') }}</div>
                                            <div class="content">{{detailData.terminal_close && !isShippPlan ? getTimeDay(detailData.terminal_close,'YY-mm-dd HH:MM') : '--'}}</div>
                                        </div>
                                    </div>
                                    <div class="wharf_content_item">
                                        <div>
                                            <div class="title">{{ $t('details.plannedBerth') }}</div>
                                            <div class="content">{{detailData.terminal_eta && !isShippPlan ? getTimeDay(detailData.terminal_eta,'YY-mm-dd HH:MM') : '--'}}</div>
                                        </div>
                                        <div>
                                            <div class="title">{{ $t('details.actualBerth') }}</div>
                                            <div class="content">{{detailData.terminal_ata && !isShippPlan ? getTimeDay(detailData.terminal_ata,'YY-mm-dd HH:MM') : '--'}}</div>
                                        </div>
                                    </div>
                                    <div class="wharf_content_item teshuWharf">
                                        <div>
                                            <div class="title">{{$t('details.plannedDepartured')}}</div>
                                            <div class="content">{{detailData.terminal_etd && !isShippPlan ? getTimeDay(detailData.terminal_etd,'YY-mm-dd HH:MM') : '--'}}</div>
                                        </div>
                                        <div>
                                            <div class="title">{{ $t('details.actualDepartured') }}</div>
                                            <div class="content">{{detailData.terminal_atd && !isShippPlan ? getTimeDay(detailData.terminal_atd,'YY-mm-dd HH:MM') : '--'}}</div>
                                        </div>
                                    </div>
                                </template>
                            </div>
                            <div class="wharf_mask" v-if="isShippPlan == 'CNDLC'">
                                <p>{{$t('Sorry, DaLian Port does not provide the ship plan at present')}}</p>
                            </div>
                            <div class="wharf_mask" v-if="isShippPlan == 'CNTXG'">
                                <p>{{$t('Sorry, TianJin Port does not provide the ship plan at present')}}</p>
                            </div>
                            <div class="wharf_mask" v-if="isShippPlan == 'CNCAN'">
                                <p>{{$t('Sorry, GuangZhou Port does not provide the ship plan at present')}}</p>
                            </div>
                        </div>
                        <!-- 服务 -->
                        <div class="content_line3">
                            <!-- 服务的名称 -->
                            <div class="content_line3_title">{{ $t('instanceTranck.serviceMatters') }}</div>
                            <!-- 表头 -->
                            <div class="content_line3_item grey_item">
                                <div class="name_item">{{ $t('instanceTranck.type') }}</div>
                                <div class="right_item">
                                    <div class="conti_right">
                                        <div class="conti_p1">{{ $t('instanceTranck.state') }}</div>
                                        <div class="conti_p2">{{ $t('instanceTranck.operation') }}</div>
                                    </div>
                                </div>
                            </div>
                            <!-- 出口 -->
                            <div v-if="detailData.isPort == 'E' && isShangHai == 'CNSHA'">
                                <div class="content_line3_item">
                                    <div class="name_item" v-title="$t('instanceTranck.serveSta3')">{{ $t('instanceTranck.serveSta3') }}</div>
                                    <div class="right_item">
                                            <div class="conti_right conti_bottom" v-for="(item,index) in EIRList" :key="index">
                                                <div class="conti_p1">
                                                    <div class="left_left">{{item.status ? item.status : ''}}</div>
                                                    <div class="left_center">{{item.statusTime ? getProcessTime('YY-mm-dd HH:MM',new Date(item.statusTime)) : ''}}</div>
                                                    <div class="left_right" v-title="item.key ? $t('tracks.container') + ':' + item.key : ''">{{item.key ? $t('tracks.container') + ':' + item.key : ''}}</div>
                                                </div>
                                                <div class="conti_p2">
                                                    <div class="chep cheBold">{{ item.carNumber ? item.carNumber : ''}}</div>
                                                    <i class="el-icon-delete" :class="item.edit == 1 ? 'icon_delect' : 'delect_trans'" @click="delectLicense(item,index)"></i>
                                                    <div class="location_blue" @click="local_position(item)" v-if="item.carNumber">{{ $t('instanceTranck.location') }}</div>
                                                </div>
                                            </div>
                                        <div class="conti_right">
                                            <div class="conti_p1">
                                                <div class="left_left"><div class="nodata_hui" v-if="EIRList.length == 0">{{$t('no Date')}}</div></div>
                                                <div class="left_center"></div>
                                                <div class="left_right"></div>
                                            </div>
                                            <div class="conti_p2">
                                                <div class="chep">{{$t('tracks.ebterC')}}</div>
                                                <i class="el-icon-circle-plus-outline plus_add" @click="addLicense()"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="content_line3_item">
                                    <div class="name_item" v-title="$t('instanceTranck.dockPlan')">{{$t('instanceTranck.dockPlan')}}</div>
                                    <div class="right_item" v-if="DockList.length > 0">
                                        <div class="conti_right" :class="index !== DockList.length - 1 ? 'conti_bottom' : ''" v-for="(item,index) in DockList" :key="index">
                                            <div class="conti_p1">
                                                <div class="left_left">{{item.status ? item.status : ''}}</div>
                                                <div class="left_center">{{item.statusTime ? getProcessTime('YY-mm-dd HH:MM',new Date(item.statusTime)) : ''}}</div>
                                                <div class="left_right" v-title="item.key ? $t('instanceTranck.closeSingle') + ':' + item.key : ''">{{item.key ? $t('instanceTranck.closeSingle') + ':' + item.key : ''}}</div>
                                            </div>
                                            <div class="conti_p2">
                                                <div class="left_p2" v-title="(item.piece ? $t('instanceTranck.A') + item.piece + '/' : '') + (item.weight ? $t('instanceTranck.heavy') + item.weight + 'KG' : '')">
                                                    {{(item.piece ? $t('instanceTranck.A') + item.piece + '/' : '') + (item.weight ? $t('instanceTranck.heavy') + item.weight + 'KG' : '')}}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div v-else class="nodata_hui">
                                        {{$t('no Date')}}
                                    </div>
                                </div>
                                <div class="content_line3_item">
                                    <div class="name_item" v-title="'VGM'">{{'VGM'}}</div>
                                    <div class="right_item" v-if="VGMList.length > 0">
                                        <div class="conti_right" :class="index !== VGMList.length - 1 ? 'conti_bottom' : ''" v-for="(item,index) in VGMList" :key="index">
                                            <div class="conti_p1">
                                                <div class="left_left">{{item.status ? item.status : ''}}</div>
                                                <div class="left_center">{{item.statusTime ? getProcessTime('YY-mm-dd HH:MM',new Date(item.statusTime)) : ''}}</div>
                                                <div class="left_right" v-title="item.key ? $t('instanceTranck.box') + ':' + item.key : ''">{{item.key ? $t('instanceTranck.box') + ':' + item.key : ''}}</div>
                                            </div>
                                            <div class="conti_p2">
                                                <div class="left_p2" v-title="item.vgm ? $t('instanceTranck.VgmWeight') + ':' + item.vgm + 'KG' : ''">
                                                    {{item.vgm ? $t('instanceTranck.VgmWeight') + ':' + item.vgm + 'KG' : ''}}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div v-else class="nodata_hui">
                                        {{$t('no Date')}}
                                    </div>
                                </div>
                                <div class="content_line3_item">
                                    <div class="name_item" v-title="$t('instanceTranck.arrR')">{{$t('instanceTranck.arrR')}}</div>
                                    <div class="right_item" v-if="ReportList.length > 0">
                                        <div class="conti_right" :class="index !== ReportList.length - 1 ? 'conti_bottom' : ''" v-for="(item,index) in ReportList" :key="index">
                                            <div class="conti_p1">
                                                <div class="left_left">{{item.status ? item.status : ''}}</div>
                                                <div class="left_center">{{item.statusTime ? getProcessTime('YY-mm-dd HH:MM',new Date(item.statusTime)) : ''}}</div>
                                                <div class="left_right" v-title="item.key ? $t('instanceTranck.box') + ':' + item.key : ''">{{item.key ? $t('instanceTranck.box') + ':' + item.key : ''}}</div>
                                            </div>
                                            <div class="conti_p2">
                                                <div class="left_p2" v-title="(item.caseWeight ? $t('instanceTranck.totalWeight') + ':' + item.caseWeight + 'KG' + '/' : '') + (item.tareWeight ? $t('instanceTranck.tareWeight') + ':' + item.tareWeight + 'KG' : '')">
                                                    {{(item.caseWeight ? $t('instanceTranck.totalWeight') + ':' + item.caseWeight + 'KG' + '/' : '') + (item.tareWeight ? $t('instanceTranck.tareWeight') + ':' + item.tareWeight + 'KG' : '')}}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div v-else class="nodata_hui">
                                        {{$t('no Date')}}
                                    </div>
                                </div>
                                <div class="content_line3_item">
                                    <div class="name_item" v-title="$t('instanceTranck.decla')">{{$t('instanceTranck.decla')}}</div>
                                    <div class="right_item" v-if="CusList.length > 0">
                                        <div class="conti_right" :class="index !== CusList.length - 1 ? 'conti_bottom' : ''" v-for="(item,index) in CusList" :key="index">
                                            <div class="conti_p1">
                                                <div class="left_left">{{item.status ? item.status : ''}}</div>
                                                <div class="left_center">{{item.statusTime ? getProcessTime('YY-mm-dd HH:MM',new Date(item.statusTime)) : ''}}</div>
                                                <div class="left_right" v-title="item.key ? $t('instanceTranck.closeSingle') + ':' + item.key : ''">{{item.key ? $t('instanceTranck.closeSingle') + ':' + item.key : ''}}</div>
                                            </div>
                                            <div class="conti_p2">
                                                <div class="left_p2" v-title="(item.piece ? $t('instanceTranck.A') + item.piece + '/' : '') + (item.weight ? $t('instanceTranck.heavy') + item.weight + 'KG' + '/' : '') + (item.volume ? $t('instanceTranck.body') + item.volume + 'CBM' : '')">
                                                    {{(item.piece ? $t('instanceTranck.A') + item.piece + '/' : '') + (item.weight ? $t('instanceTranck.heavy') + item.weight + 'KG' + '/' : '') + (item.volume ? $t('instanceTranck.body') + item.volume + 'CBM' : '')}}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div v-else class="nodata_hui">
                                        {{$t('no Date')}}
                                    </div>
                                </div>
                            </div>
                            <!-- 进口 -->
                            <div v-if="detailData.isPort == 'I' && isShangHai == 'CNSHA'">
                                <div class="content_line3_item">
                                    <div class="name_item" v-title="$t('instanceTranck.origi')">{{ $t('instanceTranck.origi') }}</div>
                                    <div class="right_item" v-if="OrigList.length > 0">
                                        <div class="conti_right" :class="index !== OrigList.length - 1 ? 'conti_bottom' : ''" v-for="(item,index) in OrigList" :key="index">
                                            <div class="conti_p1">
                                                <div class="left_left">{{item.status ? item.status : ''}}</div>
                                                <div class="left_center">{{item.statusTime ? getProcessTime('YY-mm-dd HH:MM',new Date(item.statusTime)) : ''}}</div>
                                                <div class="left_right" v-title="item.key ? $t('instanceTranck.closeSingle') + ':' + item.key : ''">{{item.key ? $t('instanceTranck.closeSingle') + ':' + item.key : ''}}</div>
                                            </div>
                                            <div class="conti_p2">
                                                <div class="left_p2" v-title="(item.piece ? $t('instanceTranck.A') + item.piece + '/' : '') + (item.weight ? $t('instanceTranck.heavy') + item.weight + 'KG' : '')">
                                                    {{(item.piece ? $t('instanceTranck.A') + item.piece + '/' : '') + (item.weight ? $t('instanceTranck.heavy') + item.weight + 'KG' : '')}}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div v-else class="nodata_hui">
                                        {{$t('no Date')}}
                                    </div>
                                </div>
                                <div class="content_line3_item">
                                    <div class="name_item" v-title="$t('instanceTranck.decla')">{{$t('instanceTranck.decla')}}</div>
                                    <div class="right_item" v-if="CusList.length > 0">
                                        <div class="conti_right" :class="index !== CusList.length - 1 ? 'conti_bottom' : ''" v-for="(item,index) in CusList" :key="index">
                                            <div class="conti_p1">
                                                <div class="left_left">{{item.status ? item.status : ''}}</div>
                                                <div class="left_center">{{item.statusTime ? getProcessTime('YY-mm-dd HH:MM',new Date(item.statusTime)) : ''}}</div>
                                                <div class="left_right" v-title="item.key ? $t('instanceTranck.closeSingle') + ':' + item.key : ''">{{item.key ? $t('instanceTranck.closeSingle') + ':' + item.key : ''}}</div>
                                            </div>
                                            <div class="conti_p2">
                                                <div class="left_p2" v-title="(item.piece ? $t('instanceTranck.A') + item.piece + '/' : '') + (item.weight ? $t('instanceTranck.heavy') + item.weight + 'KG' + '/' : '') + (item.volume ? $t('instanceTranck.body') + item.volume + 'CBM' : '')">
                                                    {{(item.piece ? $t('instanceTranck.A') + item.piece + '/' : '') + (item.weight ? $t('instanceTranck.heavy') + item.weight + 'KG' + '/' : '') + (item.volume ? $t('instanceTranck.body') + item.volume + 'CBM' : '')}}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div v-else class="nodata_hui">
                                        {{$t('no Date')}}
                                    </div>
                                </div>
                                <div class="content_line3_item">
                                    <div class="name_item" v-title="$t('instanceTranck.serveSta3')">{{ $t('instanceTranck.serveSta3') }}</div>
                                    <div class="right_item">
                                        <div class="conti_right conti_bottom" v-for="(item,index) in EIRList" :key="index">
                                            <div class="conti_p1">
                                                <div class="left_left">{{item.status ? item.status : ''}}</div>
                                                <div class="left_center">{{item.statusTime ? getProcessTime('YY-mm-dd HH:MM',new Date(item.statusTime)) : ''}}</div>
                                                <div class="left_right" v-title="item.key ? $t('tracks.container') + ':' + item.key : ''">{{item.key ? $t('tracks.container') + ':' + item.key : ''}}</div>
                                            </div>
                                            <div class="conti_p2">
                                                <div class="chep cheBold">{{item.carNumber ? item.carNumber : ''}}</div>
                                                <i class="el-icon-delete" :class="item.edit == 1 ? 'icon_delect' : 'delect_trans'" @click="delectLicense(item,index)"></i>
                                                <div class="location_blue" @click="local_position(item)" v-if="item.carNumber">{{ $t('instanceTranck.location') }}</div>
                                            </div>
                                        </div>
                                        <div class="conti_right">
                                            <div class="conti_p1">
                                                <div class="left_left"><div class="nodata_hui" v-if="EIRList.length == 0">{{$t('no Date')}}</div></div>
                                                <div class="left_center"></div>
                                                <div class="left_right"></div>
                                            </div>
                                            <div class="conti_p2">
                                                <div class="chep">{{$t('tracks.ebterC')}}</div>
                                                <i class="el-icon-circle-plus-outline plus_add" @click="addLicense()"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- 非上海港 -->
                            <div v-if="isShangHai !== 'CNSHA'">
                                <div class="content_line3_item">
                                    <div class="name_item" v-title="$t('instanceTranck.serveSta3')">{{ $t('instanceTranck.serveSta3') }}</div>
                                    <div class="right_item">
                                        <div class="conti_right conti_bottom" v-for="(item,index) in EIRList" :key="index">
                                            <div class="conti_p1">
                                                <div class="left_left">{{item.status ? item.status : ''}}</div>
                                                <div class="left_center">{{item.statusTime ? getProcessTime('YY-mm-dd HH:MM',new Date(item.statusTime)) : ''}}</div>
                                                <div class="left_right" v-title="item.key ? $t('tracks.container') + ':' + item.key : ''">{{item.key ? $t('tracks.container') + ':' + item.key : ''}}</div>
                                            </div>
                                            <div class="conti_p2">
                                                <div class="chep cheBold">{{item.carNumber ? item.carNumber : ''}}</div>
                                                <i class="el-icon-delete" :class="item.edit == 1 ? 'icon_delect' : 'delect_trans'" @click="delectLicense(item,index)"></i>
                                                <div class="location_blue" @click="local_position(item)" v-if="item.carNumber">{{ $t('instanceTranck.location') }}</div>
                                            </div>
                                        </div>
                                        <div class="conti_right">
                                            <div class="conti_p1">
                                                <div class="left_left"><div class="nodata_hui" v-if="EIRList.length == 0">{{$t('no Date')}}</div></div>
                                                <div class="left_center"></div>
                                                <div class="left_right"></div>
                                            </div>
                                            <div class="conti_p2">
                                                <div class="chep">{{$t('tracks.ebterC')}}</div>
                                                <i class="el-icon-circle-plus-outline plus_add" @click="addLicense()"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="content_line3_item nodata">
                                    <img src="../assets/images/detail_p.png" class="image_p">
                                    <p class="nodata_p">{{$t('instanceTranck.stayServe')}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 右侧详情展示区 -->
                <div class="right_part">
                    <div class="right_header">
                        <div class="state_icon" :class="imageUrl ? '' : 'state_tou'">
                            <img :src="imageUrl" alt="无" class="sacsImage" v-if="imageUrl" />
                        </div>
                        <div class="ship_info">
                            <div class="ship_info_num">{{detailData.billNo ? $t('tracks.blbk') + ':' + detailData.billNo : detailData.containerNo ? $t('tracks.container') + ':' + detailData.containerNo : $t('tracks.blbk') + ':' + '--'}}
                                <span class="ship_state" v-title="detailData.descriptionEn ? detailData.descriptionEn : ''" v-if="$i18n.locale == 'zh-CN'">
                                    {{detailData.currentnode ? '【' + $t('nodeInfo.' + detailData.currentnode) + '】' : detailData.webNodeCn ? '【' + detailData.webNodeCn + '】' : '【' + $t('instanceTranck.unknown') + '】'}}
                                </span>
                                <span class="ship_state" v-title="detailData.descriptionEn ? detailData.descriptionEn : ''" v-if=" $i18n.locale == 'en-US'">
                                    {{detailData.currentnode ? '【' + $t('nodeInfo.' + detailData.currentnode) + '】' : detailData.webNodeEn ? '【' + detailData.webNodeEn + '】' : '【' + $t('instanceTranck.unknown') + '】'}}
                                </span>
                            </div>
                            <!-- <div class="ship_info_name" v-title="$t('details.vessel') + '/' +$t('details.voyage') + ': ' +  detailData.voyname">{{$t('details.vessel') + '/' +$t('details.voyage') + ': ' +  (detailData.voyname ? detailData.voyname : '')}}</div> -->
                        </div>
                        <div class="shipdt_btn" @click="allToShipdt()">{{ $t('route.position') }}</div>
                    </div>
                    <div class="route_info">
                        <!-- 起始港信息 -->
                        <div class="route_info_pol">
                            <p class="pol_name" v-title="detailData.polName ? detailData.polName : ''">{{detailData.polName ? detailData.polName.toUpperCase() : '--'}}</p>
                            <p v-title="detailData.atd ? 'ATD: ' + getTimeDay(detailData.atd,'mm-dd HH:MM') : detailData.etd ?  'ETD: ' + getTimeDay(detailData.etd,'mm-dd HH:MM') : ''">
                                {{detailData.atd ? 'ATD: ' + getTimeDay(detailData.atd,'mm-dd HH:MM') : detailData.etd ?  'ETD: ' + getTimeDay(detailData.etd,'mm-dd HH:MM') : '--'}}
                            </p>
                        </div>
                        <div class="route_info_day">
                            <div></div>
                            <img src="../assets/images/arrow-3.png">
                            <div></div>
                        </div>
                        <!-- 目的港信息 -->
                        <div class="route_info_pod">
                            <p class="pod_name" v-title="detailData.podName ? detailData.podName : ''">{{detailData.podName ? detailData.podName.toUpperCase() : '--'}}</p>
                            <p v-title="detailData.ata ? 'ATA: ' + getTimeDay(detailData.ata,'mm-dd HH:MM') : detailData.eta ?  'ETA: ' + getTimeDay(detailData.eta,'mm-dd HH:MM') : ''">
                                {{detailData.ata ? 'ATA: ' + getTimeDay(detailData.ata,'mm-dd HH:MM') : detailData.eta ?  'ETA: ' + getTimeDay(detailData.eta,'mm-dd HH:MM') : '--'}}
                            </p>
                        </div>
                    </div>
                    <ul class="track_box">
                        <li class="track_box_item" v-for="(item,index) in detailData.boxList" :key="item.containerNo">
                            <div class="track_box_title" @click="changeTrackBox(item, index)">
                                <div>
                                    <span>{{item.containerNo}}</span>
                                    <span>{{'【' + (item.containerSize ? item.containerSize : '-') + (item.containerType ? item.containerType : '') + '】'}}</span>
                                </div>
                                <div>
                                    <span v-if=" $i18n.locale == 'zh-CN'" v-title="item.currentStatusDescriptionEn ? item.currentStatusDescriptionEn : ''">
                                        {{item.currentStatusCode ? '【' + $t('nodeInfo.' + item.currentStatusCode) + '】' : item.webNodeCn ? '【' + item.webNodeCn + '】' : '【' + $t('instanceTranck.unknown') + '】'}}
                                    </span>
                                    <span v-if=" $i18n.locale == 'en-US'" v-title="item.currentStatusDescriptionEn ? item.currentStatusDescriptionEn : ''">
                                        {{item.currentStatusCode ? '【' + $t('nodeInfo.' + item.currentStatusCode) + '】' : item.webNodeEn ? '【' + item.webNodeEn + '】' : '【' + $t('instanceTranck.unknown') + '】'}}
                                    </span>
                                    <i class="el-icon-caret-top" :class="(currentIndex == index) && isTrackBoxShow?'rotate':''"></i>
                                </div>
                            </div>
                            <div class="track_box_info" @click="changeTrackBox(item, index)">
                                <div class="track_box_time" v-title=" $t('instanceTranck.seal') + ': '+ (item.sealNo ? item.sealNo : '')">{{ $t('instanceTranck.seal') + ': '+ (item.sealNo ? item.sealNo : '')}}</div>
                            </div>
                            <!-- 箱子信息 -->
                            <ul class="track_box_timeline" v-if="(currentIndex == index) && isTrackBoxShow">
                                <li v-for="(activity,acindex) in item.nodeList" :key="acindex" class="box_timeline_li" :class="acindex == item.nodeList.length - 1 ? 'box_li_tou' : activity.lineColor == 1 ? 'box_li_active' : 'box_li'">
                                    <!-- 图标 -->
                                    <div class="box_dot" :class="activity.nodeColor == 1 ? 'box_dot_active' : 'box_dot_hui'"></div>
                                    <!-- 大节点标题 -->
                                    <div class="bigTitle" v-if=" $i18n.locale == 'zh-CN'" :class="activity.nodeColor == 1 ? 'bigTitle_active' : 'bigTitle_hui'">
                                        <div style='line-height: 14px;' v-title="activity.name ? activity.name : ''">{{activity.type == 1 ? $t('instanceTranck.Receive') : activity.type == 2 ? $t('instanceTranck.pol') : activity.type == 3 ? $t('instanceTranck.Transit') : activity.type == 4 ? $t('instanceTranck.pod') : activity.type == 5 ? $t('instanceTranck.Delivery') : ''}}{{activity.name ? activity.name.toUpperCase() : '-'}}</div>
                                    </div>
                                    <div class="bigTitle" v-if=" $i18n.locale == 'en-US'" :class="activity.nodeColor == 1 ? 'bigTitle_active' : 'bigTitle_hui'">
                                        <div style='line-height: 14px;' v-title="activity.name ? activity.name : ''">{{activity.type == 1 ? $t('instanceTranck.Receive') : activity.type == 2 ? $t('instanceTranck.pol') : activity.type == 3 ? $t('instanceTranck.Transit') : activity.type == 4 ? $t('instanceTranck.pod') : activity.type == 5 ? $t('instanceTranck.Delivery') : ''}}{{activity.name ? activity.name.toUpperCase() : '-'}}</div>
                                    </div>
                                    <!-- 箱跟踪节点部分 -->
                                    <div class="timeline_item">
                                        <!-- 小节点部分 -->
                                        <div class="small_li" v-for="(itemInnerActiv,itemIndex) in activity.statusNode" :key="itemIndex">
                                            <div class="small_line" :class="itemInnerActiv.innerColor == 2 ? 'small_line_ban' : itemInnerActiv.innerColor == 1 ? 'small_line_quan' : itemInnerActiv.innerColor == 3 ? 'small_line_huiquan' : itemInnerActiv.innerColor == 4 ? 'small_line_huiban' : ''"></div>
                                            <div class="small_xu_line" v-if="acindex == item.nodeList.length - 1 && itemInnerActiv.innerColor == 2 && itemIndex !== activity.statusNode.length - 1"></div>
                                            <div class="small_dot" :class="itemInnerActiv.innerColor == 2 ? 'small_dot_active' : itemInnerActiv.innerColor == 1 ? 'small_dot_transparent' : itemInnerActiv.innerColor == 4 ? 'small_dot_hui' : ''"></div>
                                            <!-- 节点名称 -->
                                            <div class="item_small_name" v-if="$i18n.locale == 'zh-CN'" :style="{color: itemInnerActiv.isEsti == 'N' ? '#282828' : '#909090'}" v-title="itemInnerActiv.descriptionEn ? itemInnerActiv.descriptionEn : ''">
                                                {{itemInnerActiv.eventCode ? $t('nodeInfo.' + itemInnerActiv.eventCode) : itemInnerActiv.webNodeCn ? itemInnerActiv.webNodeCn : $t('instanceTranck.unknown')}}
                                            </div>
                                            <div class="item_small_name" v-if="$i18n.locale == 'en-US'" :style="{color: itemInnerActiv.isEsti == 'N' ? '#282828' : '#909090'}" v-title="itemInnerActiv.descriptionEn ? itemInnerActiv.descriptionEn : ''">
                                                {{itemInnerActiv.eventCode ? $t('nodeInfo.' + itemInnerActiv.eventCode) : itemInnerActiv.webNodeEn ? itemInnerActiv.webNodeEn : $t('instanceTranck.unknown')}}
                                            </div>
                                            <!-- 节点时间 -->
                                            <!-- 实际发生的时间节点，没有时间用Y补齐，预计节点有时间显示，没时间为空 -->
                                            <div class="item_small_time" :style="{color: itemInnerActiv.isEsti == 'N' ? '#282828' : '#909090'}">
                                                {{itemInnerActiv.eventTime ? getTimeDay(itemInnerActiv.eventTime,'YY-mm-dd HH:MM') : itemInnerActiv.isEsti == 'N' ? 'Y' : ''}}
                                            </div>
                                        </div>
                                        <!-- 船信息部分 -->
                                        <div class="vessel_info">
                                            <div class="vessel_mar" v-for="(vesselItem,vesselIndex) in activity.vesselList" :key="vesselIndex">
                                                <i class="el-icon-caret-top" :class="vesselItem.isShow?'i_rotate':''" @click="clickVessel(vesselItem)"></i>
                                                <p>{{$t('details.vessel') + ': ' + (vesselItem.vessel ? vesselItem.vessel : '')}}</p>                          
                                                <p>{{$t('details.voyage') + ': ' + (vesselItem.voyage ? vesselItem.voyage : '')}}</p>
                                                <span class="chaunb_ding" @click="clickToShipdt(vesselItem)">{{ $t('route.position') }}</span>
                                                <div class="vessel_info_detail" v-if="vesselItem.isShow">
                                                    <div>
                                                        <p v-title="vesselItem.imo ? vesselItem.imo : ''">
                                                            {{'IMO: ' + (vesselItem.imo ? vesselItem.imo : '')}}
                                                        </p>
                                                        <p v-title="vesselItem.dateBuild ? getProcessTime('YY-mm-dd',new Date(vesselItem.dateBuild)) : ''">
                                                            {{$t('details.built') + ': '}}{{vesselItem.dateBuild ? getProcessTime('YY-mm-dd',new Date(vesselItem.dateBuild)) : ''}}
                                                        </p>
                                                        <p v-title="vesselItem.containerSize ? vesselItem.containerSize : ''">
                                                            {{$t('details.volume') + ': ' + (vesselItem.containerSize ? vesselItem.containerSize : '')}}
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <p v-title="vesselItem.mmsi ? vesselItem.mmsi : ''">
                                                            {{'MMSI: ' + (vesselItem.mmsi ? vesselItem.mmsi : '')}}
                                                        </p>
                                                        <p v-title="vesselItem.flagName ? vesselItem.flagName : ''">
                                                            {{$t('details.master') + ': ' + (vesselItem.flagName ? vesselItem.flagName : '')}}
                                                        </p>
                                                        <p v-title="vesselItem.shipOwner ? vesselItem.shipOwner : ''">
                                                            {{$t('details.operator') + ': ' + (vesselItem.shipOwner ? vesselItem.shipOwner : '')}}
                                                        </p>
                                                    </div>
                                                </div>                                            
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- 提醒设置 -->
        <RemindSet ref="RemindSet" @tiXshe="tiXshe"></RemindSet>
        <!-- 备注删除 -->
        <el-dialog
            class="dialogPopup"
            :visible.sync="dialogPopup"
            width="400px"
            append-to-body
            top="0"
            :close-on-click-modal="false"
            :close-on-press-escape="false"
            :show-close="false"
        >
            <div class="iframe">
                <i class="el-icon-close" style="float:right;cursor: pointer;" @click="dialogPopup=false"></i>
                <div class="textarea" v-show="dialogText == '提醒'">
                    <p>{{ $t('tracks.remind') }}</p>
                    <p class="willpushed">{{ $t('tracks.publicAccount') }}</p>
                </div>
                <div class="textarea" v-show="dialogText == '取消提醒'">
                    <p>{{ $t('tracks.unsubscribe') }}</p>
                    <p class="willpushed">{{ $t('tracks.willpushed') }}</p>
                </div>
                <div class="textarea" v-show="dialogText == '录入备注'">
                    <p>{{ $t('tracks.enterNote') }}</p>
                    <el-input :placeholder="$t('tracks.enterContent')" v-model="textarea" maxlength="30" show-word-limit></el-input>
                </div>
                <div class="textarea" v-show="dialogText == '请输入车牌号'">
                    <p>{{ $t('tracks.ebterC') }}</p>
                    <el-input :placeholder="$t('tracks.enterContent')" v-model="textarea" maxlength="10" show-word-limit></el-input>
                </div>                
                <div class="butAll">
                    <span class="btnBorder" @click="dialogPopup=false">{{ $t('tracks.cancel') }}</span>
                    <span class="greenBorder"  @click="comfirmCheck">{{ $t('tracks.confirm') }}</span>
                </div>
            </div>
        </el-dialog>
    </div>
</template>
<script>
import Loading from "@components/loading"
import RemindSet from '@components/RemindSet'

export default {
    data() {
        return {
            loadings: false,
            currentnode: '', //当前节点英文名称
            isWhat: '',

            //船公司图标
            imageUrl: '',
            imageUrlArray: [
                'ACIC','ALSE','ANNU','APLU','ASLE','ATLC','BAOU','BENL','CCLU','CCNR',
                'CKLC','CKLU','CMDU','CNCL','COHU','COSU','CULU','DELC','DJSL','DYSL',
                'DYSS','EASC','EGLV','EPIR','FESO','FSCS','GOSU','GOTO','HALC','HASU',
                'HDMU','HEUN','HLCU','IALU','JINX','KLEU','KMBU','KMTC','KNAY','MAEU',
                'MATS','MCLU','MCPU','MELL','MOLU','MSCU','MSSU','MXMU','NEPL','NIDU',
                'NOLU','NOSC','NOSU','NSRU','NSSC','NYKU','NZLU','ONEY','OOLU','PABV',
                'PASU','PCLC','POBU','QGIC','QGIL','QMNS','RCLC','SAFM','SITC','SKMC',
                'SKMC1','SMLM','SNTU','SUDU','SSLL','SWIU','TCLC','TSQD','UASU','UASC',
                'USL','UWSU','WFLU','WHLC','YMLU','ZIMU','ZSH','logo_TYS',
            ],

            allVessel: [], //全部船名

            //是否显示船舶计划
            isShippPlan: '' ,//当前是否显示船舶计划 哪个城市不显示
            isShangHai: '', //上海码头

            //备注 微信关注 输入车牌号
            dialogPopup: false, //弹出框
            dialogText: '',//当前是备注还是删除
            textarea: '', //用户备注的内容

            //右侧节点
            currentIndex: 0, //当前点开得信息
            isTrackBoxShow: true, //是否展开详细节点

            //接口调用的详情页数据
            detailData: {},

            EIRList: [], //集卡-EIR
            OrigList: [], //原始舱单
            DockList: [], //预配舱单
            VGMList: [], //VGM
            ReportList: [], //运抵报告
            CusList: [], //报关

            //用户带入得值
            inForm: {},
            //用户ID
            userId:
                this.getCookie("authId") != null && this.getCookie("authId") != ""
                ? this.getCookie("authId")
                : 0,

            loadNum: 0,
        }
    },
    components:{
        Loading,
        RemindSet,
    },
    methods:{
        //初始化获取数据
        initialize(params) {
            var that = this;
            that.loadings = true
            that.loadNum = that.loadNum + 1
            //获取箱跟踪状态
            // this.GLOBAL.url
            this.$Axios.get(this.GLOBAL.url + 'trace/detail/getTrackDetail?id=' + params.recordId,{
                headers: {
                    Authorization: this.getToken()
            },
            }).then(res => {
                that.loadNum = that.loadNum - 1
                //默认数据定义
                //不管有没有返回数据 都有的默认值
                var detailData = {
                    isSub: '',
                    remark: '',
                    terminal: '',
                    terminal_name: '',
                    terminal_code: '',
                    terminal_close: '',
                    terminal_open: '',
                    terminal_etd: '',
                    terminal_eta: '',
                    terminal_atd: '',
                    terminal_ata: '',
                    terminal_vessel: '',
                    terminal_voyage: '',
                    terminal_voyname: '',
                    billNo: '',
                    containerNo: '',
                    isPort: 'E',
                    carrierCode: '',
                    carrierNameL: '',
                    carrierNameCn:  '',
                    carrierNameEn:  '',
                    polName: '',
                    atd: '',
                    etd: '',
                    podName: '',
                    ata: '',
                    eta: '',
                    firsVessel: '',
                    firsVoyage: '',
                    voyname: '',
                    currentnode: '',
                    webNodeCn: '',
                    webNodeEn: '',
                    descriptionEn: '',
                    boxList: [],
                }

                var data = res.data

                if (data.status == 1 && JSON.stringify(data.content) !== "{}") {
                    //整个详情页的消息
                    var processData = data.content.data[0]
                    //在这里处理接口返回的数据

                    //是否订阅
                    detailData.isSub = data.content.otherInfo && data.content.otherInfo.isSub ? data.content.otherInfo.isSub : ''

                    //备注信息
                    detailData.remark = data.content.otherInfo && data.content.otherInfo.remark ? data.content.otherInfo.remark : ''

                    //单号箱号进出口
                    if(data.content.query.length > 0){
                        var terminalObj = data.content.query[0]
                        //单号
                        detailData.billNo = terminalObj.billNo ? terminalObj.billNo : ''
                        //箱号
                        detailData.containerNo = terminalObj.containerNo ? terminalObj.containerNo : ''

                        //当前是进口详情 还是出口详情 还是非上海码头的
                        detailData.isPort = terminalObj.isExport ? terminalObj.isExport : ''
                    }

                    //处理码头信息
                    var portCode = processData.terminalPlan && processData.terminalPlan.portCode ? processData.terminalPlan.portCode : ''
                    if(portCode == 'CNDLC' || portCode == 'CNTXG' || portCode == 'CNCAN'){
                        that.isShippPlan = portCode
                    }else{
                        that.isShippPlan = ''
                    }

                    that.isShangHai = processData.terminalPlan && processData.terminalPlan.portCode ? processData.terminalPlan.portCode.toUpperCase() : ''
                    
                    if(!that.isShippPlan){
                        detailData.terminal_name = processData.terminalPlan && processData.terminalPlan.terminalName ? processData.terminalPlan.terminalName : ''
                        detailData.terminal_code = processData.terminalPlan && processData.terminalPlan.terminalCode ? processData.terminalPlan.terminalCode : ''
                        detailData.terminal_close = processData.terminalPlan && processData.terminalPlan.close ? processData.terminalPlan.close : ''
                        detailData.terminal_open = processData.terminalPlan && processData.terminalPlan.open ? processData.terminalPlan.open : ''
                        detailData.terminal_etd = processData.terminalPlan && processData.terminalPlan.etd ? processData.terminalPlan.etd : ''
                        detailData.terminal_eta = processData.terminalPlan && processData.terminalPlan.eta ? processData.terminalPlan.eta : ''
                        detailData.terminal_atd = processData.terminalPlan && processData.terminalPlan.atd ? processData.terminalPlan.atd : ''
                        detailData.terminal_ata = processData.terminalPlan && processData.terminalPlan.ata ? processData.terminalPlan.ata : ''
                        detailData.terminal_vessel = processData.terminalPlan && processData.terminalPlan.vessel ? processData.terminalPlan.vessel + '/' : '-/'
                        detailData.terminal_voyage = processData.terminalPlan && processData.terminalPlan.voyage ? processData.terminalPlan.voyage : '-'
                        detailData.terminal_voyname = detailData.terminal_vessel + detailData.terminal_voyage
                        if(processData.terminalPlan && processData.terminalPlan.vessel){
                            that.allVessel.push(processData.terminalPlan.vessel)
                        }
                    }

                    detailData.terminal = processData.terminalPlan && processData.terminalPlan.portName ? processData.terminalPlan.portName : ''

                    //处理船公司
                    detailData.carrierCode = processData.carrier && processData.carrier.scac ? processData.carrier.scac : ''
                    detailData.carrierNameCn =  processData.carrier && processData.carrier.nameCn ? processData.carrier.nameCn : ''
                    detailData.carrierNameEn =  processData.carrier && processData.carrier.nameEn ? processData.carrier.nameEn : ''
                    detailData.carrierNameL =  processData.carrier && processData.carrier.code ? processData.carrier.code : ''
        
                    //官网地址
                    detailData.carrierUrl =  processData.carrier && processData.carrier.url ? processData.carrier.url : ''

                    //处理起始港
                    if(processData.receipt){
                        detailData.polName = processData.receipt.name ? processData.receipt.name.toUpperCase() : ''
                        detailData.atd = processData.receipt.atd ? processData.receipt.atd : ''
                        detailData.etd = processData.receipt.etd ? processData.receipt.etd : ''
                    }

                    //处理目的港
                    if(processData.delivery){
                        detailData.podName = processData.delivery.name ? processData.delivery.name.toUpperCase() : ''
                        detailData.ata = processData.delivery.ata ? processData.delivery.ata : ''
                        detailData.eta = processData.delivery.eta ? processData.delivery.eta : ''
                    }

                    //头程船名航次
                    detailData.firsVessel = processData.firstVessel && processData.firstVessel.vessel ? processData.firstVessel.vessel + '/' : '-/'
                    detailData.firsVoyage = processData.firstVessel && processData.firstVessel.voyage ? processData.firstVessel.voyage : '-'
                    detailData.voyname = detailData.firsVessel + detailData.firsVoyage

                    //当前状态
                    detailData.currentnode = processData.currentStatus && processData.currentStatus.eventCode? processData.currentStatus.eventCode : ''
                    detailData.descriptionEn = processData.currentStatus && processData.currentStatus.descriptionEn? processData.currentStatus.descriptionEn : ''

                    //处理每个地方对应的节点
                    if(processData.places && processData.places.length > 0){
                        //下面处理每个箱子信息
                        for (var i = 0; i < processData.containers.length; i++) {

                            var boxCon = processData.containers[i]

                            //起始港 目的港判断条件 初始化
                            boxCon.isPodJHD = false //判断交货地 跟 目的港 是否相同
                            boxCon.isPodNode = false //是否正在进行目的港

                            boxCon.isPolJHD = false //判断接货地 跟 起始港 是否想同
                            boxCon.isPolNode = false //是否正在进行起始港

                            //记录箱子的当前节点在第几个
                            boxCon.currentIndex = ''

                            var nodeList = []

                            //循环大节点信息 placesList 深层赋予新值
                            var placesList = JSON.parse(JSON.stringify(processData.places))

                            //先把盒子时间从小到大排序 从后往前 找节点为 N的并且有时间的节点 则 就为最新节点
                            if(boxCon.status == null || !boxCon.status){
                                boxCon.status = []
                            }
                            boxCon.status = boxCon.status.sort()
                            for (let ww = boxCon.status.length - 1; ww >= 0; ww--) {
                                if(boxCon.status[ww].isEsti == "N" && boxCon.status[ww].eventTime && boxCon.status[ww].eventPlace){
                                    //最新节点和状态
                                    boxCon.currentTime = new Date(boxCon.status[ww].eventTime).getTime()
                                    boxCon.descriptionEn = boxCon.status[ww].descriptionEn ? boxCon.status[ww].descriptionEn : ''
                                    boxCon.descriptionCn = boxCon.status[ww].descriptionCn ? boxCon.status[ww].descriptionCn : ''
                                    boxCon.currentnode = boxCon.status[ww].eventCode ? boxCon.status[ww].eventCode : ''
                                    break
                                }
                            }

                            for (var j = 0; j < placesList.length; j++) {
                                var nodeLarge = placesList[j]
                                var nodeStatus = [] //存放小节点
                                for (var q = 0; q < boxCon.status.length; q++) {
                                    //如果小节点跟大节点地点相同 则当前小节点属于这个大节点的
                                    if(nodeLarge.name == boxCon.status[q].eventPlace){
                                        if(boxCon.status[q].eventTime){ //如果节点有时间
                                            boxCon.status[q].webNodeCn = ''
                                            boxCon.status[q].webNodeEn = ''
                                            boxCon.status[q].eventTimeSort = new Date(boxCon.status[q].eventTime).getTime()
                                            nodeStatus.push(boxCon.status[q])
                                        }
                                    }
                                }
                                // 处理看一下小节点状态码是否有一样的若有取N 否则取Y nodeStatus
                                nodeStatus = that.process(nodeStatus)

                                //首先 如果  nodeStatus 为空
                                if(nodeStatus.length > 0){
                                    nodeStatus = nodeStatus.sort(that.compare('eventTimeSort')) //节点按照时间排序
                                    nodeLarge['timeOrder'] = nodeStatus[nodeStatus.length - 1].eventTime ? new Date(nodeStatus[nodeStatus.length - 1].eventTime).getTime() : ''
                                }else{
                                    nodeLarge['timeOrder'] = ''
                                }
                                nodeLarge.statusNode = nodeStatus

                                //处理当前节点的船名航次
                                var vesselList = []
                                if(nodeLarge.plan && nodeLarge.plan.vessel){
                                    //只要有一条船 
                                    that.allVessel.push(nodeLarge.plan.vessel)
                                    //默认都是展开状态
                                    nodeLarge.plan.isShow = true

                                    // vesselList.push(nodeLarge.plan)
                                    //在vessel数组里找有没有同船  有的话直接用
                                    if(processData.vessel && processData.vessel.length > 0){
                                        for (let p = 0; p < processData.vessel.length; p++) {
                                            if(nodeLarge.plan.vessel == processData.vessel[p].vessel){
                                                processData.vessel[p].isShow = true
                                                nodeLarge.plan = Object.assign({},nodeLarge.plan,processData.vessel[p])
                                            }
                                        }
                                    }
                                    vesselList.push(nodeLarge.plan)
                                }

                                nodeLarge.vesselList = that.quChong(vesselList)
                                //当前箱子下的节点动态
                                nodeList.push(nodeLarge)
                            }


                            //大节点排序
                            nodeList = nodeList.sort(that.zhengSort('timeOrder'))


                            //说明有接货地 跟 起运港  如果接货地 跟 起运港地址一样 则把接货地的里节点放入到起运港
                            for (let w = 0; w < nodeList.length; w++) {
                                for (let e = 0; e < nodeList.length; e++) {
                                    if(w !== e){
                                        if(nodeList[w].type == 1){ //有接货地
                                            if(nodeList[e].type == 2){ //有起运港
                                                //接货地和起运港里的节点都不为空
                                                if(nodeList[w].statusNode.length > 0 && nodeList[e].statusNode.length > 0 && nodeList[w].name == nodeList[e].name){
                                                    boxCon.isPolJHD = true
                                                    nodeList[e].plan = {}
                                                    nodeList[w].statusNode = []
                                                    nodeList[w].vesselList = []
                                                    //往nodeList 前 添加交货地
                                                    nodeList.unshift(nodeList[w])
                                                    //删除当前交货地
                                                    nodeList.splice(w+1,1)
                                                    break
                                                }
                                            }
                                        }
                                    }
                                }
                            }

                            //说明有交货地 跟 目的港 如果交货地 跟 目的港地址一样 则把交货地的里节点放入到目的港
                            for (let w = 0; w < nodeList.length; w++) {
                                for (let e = 0; e < nodeList.length; e++) {
                                    if(w !== e){
                                        if(nodeList[w].type == 4){ //有目的港
                                            if(nodeList[e].type == 5){ //有交货地
                                                //交货地和目的港里的节点都不为空
                                                if(nodeList[w].statusNode.length > 0 && nodeList[e].statusNode.length > 0 && nodeList[w].name == nodeList[e].name){
                                                    boxCon.isPodJHD = true
                                                    nodeList[e].plan = {}
                                                    nodeList[e].statusNode = []
                                                    nodeList[e].vesselList = []
                                                    //往nodeList 后 添加交货地
                                                    nodeList.push(nodeList[e])
                                                    //删除当前交货地
                                                    nodeList.splice(e,1)
                                                    break
                                                }
                                            }
                                        }
                                    }
                                }
                            }

                            //看船名航次是否相同 相同的话 保留第一个船名航次
                            for (let w = 0; w < nodeList.length; w++) {
                                for (let e = 0; e < nodeList.length; e++) {
                                    if(w !== e){
                                        if(nodeList[w].plan && nodeList[e].plan && nodeList[w].plan.vessel && nodeList[e].plan.vessel && nodeList[w].plan.voyage && nodeList[e].plan.voyage){
                                            if(nodeList[w].plan.vessel == nodeList[e].plan.vessel && nodeList[w].plan.voyage == nodeList[e].plan.voyage){
                                                nodeList[e].vesselList = []
                                                nodeList[e].plan = {}
                                            }
                                        }else if(nodeList[w].plan && nodeList[e].plan && nodeList[w].plan.vessel && nodeList[e].plan.vessel){
                                            if(nodeList[w].plan.vessel == nodeList[e].plan.vessel){
                                                nodeList[e].vesselList = []
                                                nodeList[e].plan = {}
                                            }
                                        }
                                    }
                                }
                            }



                            //处理小节点图标 小节点线  大节点 线
                            for (let fg = 0; fg < nodeList.length; fg++) {

                                var pp = nodeList[fg]

                                //处理大节点图标 nodeColor 1 过或者半过  2 没有 
                                pp.nodeColor = 2 //默认没有

                                //处理小节点图标和线 innerColor 0 代表暂不赋予线的颜色 1 已经进行 2 正在进行 3 未进行 4最后一段未进行
                                //如果当前节点是还空 或者 提货
                                if(boxCon.currentnode == 'RCVE' || (boxCon.currentnode == 'STCS' && (detailData.carrierCode == 'MAEU' || detailData.carrierCode == 'MCPU'))){

                                    //如果节点是还空 大线全绿
                                    if(boxCon.currentnode == 'RCVE'){
                                        pp.nodeColor = 1
                                        pp.lineColor = 1 //默认全过
                                        for (let dr = 0; dr < pp.statusNode.length; dr++) {
                                            //当前有交货地和目的港相同 并且还空
                                            if(boxCon.isPodJHD){
                                                pp.statusNode[dr].innerColor = 1
                                            }else{ //交货地和目的港不同
                                                if(pp.statusNode[dr].eventCode !== 'RCVE'){ //不是还空的节点
                                                    pp.statusNode[dr].innerColor = 1
                                                }else{
                                                    pp.statusNode[dr].innerColor = 2
                                                }
                                            }
                                        }
                                    }

                                    //特殊处理 MSK/MCC 船公司 永远没有还空节点 则这个时候 只要节点实际提货了 则
                                    if(boxCon.currentnode == 'STCS' && (detailData.carrierCode == 'MAEU' || detailData.carrierCode == 'MCPU')){
                                        if(boxCon.currentnode == 'STCS'){
                                            pp.nodeColor = 1
                                            pp.lineColor = 1
                                        }
                                        for (let dr = 0; dr < pp.statusNode.length; dr++) {
                                            //当前有交货地和目的港相同 并且提货
                                            if(boxCon.isPodJHD){
                                                pp.statusNode[dr].innerColor = 1
                                            }else{ //交货地和目的港不同
                                                if(pp.statusNode[dr].eventCode !== 'STCS'){ //不是还空的节点
                                                    pp.statusNode[dr].innerColor = 1
                                                }else{
                                                    pp.statusNode[dr].innerColor = 2
                                                }
                                            }
                                        }
                                    }
                                }
                                else{
                                    //当前节点不是还空
                                    var isNodePol = false //当前是否有正在进行起始港的节点
                                    var isNodePod = false //当前是否有正在进行目的港的节点

                                    //count 记录当前节点下的节点是否都已经进行了
                                    pp['count' + fg] = 0

                                    //当前这个节点是否正在进行 2在进行
                                    pp.isCurrent = 1

                                    //记录箱子的当前节点

                                    //
                                    for (let r = 0; r < pp.statusNode.length; r++) {
                                        var currentTime = pp.statusNode[r].eventTime ? new Date(pp.statusNode[r].eventTime).getTime() : ''
                                        var descriptionEn = pp.statusNode[r].descriptionEn ? pp.statusNode[r].descriptionEn : ''
                                        var descriptionCn = pp.statusNode[r].descriptionCn ? pp.statusNode[r].descriptionCn : ''
                                        var eventCode = pp.statusNode[r].eventCode ? pp.statusNode[r].eventCode : ''
                                        // 是否是当前节点
                                        pp.statusNode[r].isCurrentNode = false
                                        if(boxCon.currentTime && currentTime){
                                            if(boxCon.currentTime == currentTime){ //说明是正在进行节点
                                                pp['count' + fg] = pp['count' + fg] + 1
                                                pp.nodeColor = 1
                                                if(boxCon.descriptionEn == descriptionEn && boxCon.descriptionCn == descriptionCn && boxCon.currentnode == eventCode){ //看描述是否相同
                                                    boxCon.currentIndex = fg
                                                    pp.statusNode[r].innerColor = 2
                                                    pp.isCurrent = 2
                                                    pp.statusNode[r].isCurrentNode = true
                                                }else{
                                                    pp.statusNode[r].innerColor = 1
                                                }
                                            }else if(boxCon.currentTime > currentTime){ //代表已经进行了
                                                pp.nodeColor = 1
                                                pp['count' + fg] = pp['count' + fg] + 1
                                                pp.statusNode[r].innerColor = 1
                                            }else{ //代表未进行
                                                pp.statusNode[r].innerColor = 3
                                            }
                                            
                                        }

                                        //判断起始港是否已经进行
                                        if(pp.nodeColor == 1){
                                            //判断起始港
                                            if(!isNodePol){
                                                if(pp.type == 1 || pp.type == 2){
                                                    boxCon.isPolNode = true
                                                    isNodePol = true
                                                }
                                            }
                                        }
    
                                        //判断目的港是否正在进行
                                        if(pp.statusNode[r].innerColor == 2){
                                            //判断目的港
                                            if(!isNodePod){
                                                if(pp.type == 4 || pp.type == 5){ //说明正在进行目的港
                                                    isNodePod = true
                                                    boxCon.isPodNode = true
                                                }
                                            }
                                        }
                                    }

                                    //当前是最后一个节点 并且有节点 而且节点下无发生节点
                                    if(fg == nodeList.length - 1 && pp.statusNode.length > 0 && pp.nodeColor == 2){
                                        pp.statusNode[pp.statusNode.length - 1].innerColor = 4
                                    }


                                    //处理大节点线 lineColor 1 全过  2半过或者没有
                                    if((pp['count' + fg] == pp.statusNode.length || pp['count' + fg] == 0) && pp.nodeColor == 1 && pp.isCurrent == 1){
                                        pp.lineColor = 1 //默认全过
                                    }else{
                                        pp.lineColor = 2 //默认半过或者没有
                                    }

                                    //当前是最后一个节点 并且有节点 而且节点下有正在发生的节点 而且节点线未亮 最后一个节点不是已进行或者正在进行
                                    if(fg == nodeList.length - 1 && pp.statusNode.length > 0 && pp.isCurrent == 2 && pp.lineColor == 2){
                                        if(pp.statusNode[pp.statusNode.length - 1].innerColor == 1 || pp.statusNode[pp.statusNode.length - 1].innerColor == 2){
                                            
                                        }else{
                                            pp.statusNode[pp.statusNode.length - 1].innerColor = 4
                                        }
                                    }

                                }
                            }

                            //每个节点进行排序
                            // for (let k = 0; k < nodeList.length; k++) {
                            //     if(nodeList[k].statusNode.length > 0){
                            //         nodeList[k].statusNode = nodeList[k].statusNode.sort(function(a,b){
                            //             //先排时间
                            //             var value1 = a.eventTimeSort
                            //             var value2 = b.eventTimeSort
                            //             if(value1 === value2){
                            //                 //在排 N排前 Y排后
                            //                 var value3 = a.isEsti
                            //                 var value4 = b.isEsti
                            //                 if(value3 == value4){
                            //                     //时间相同 排 当前节点状态
                            //                     return a.innerColor - b.innerColor
                            //                 }
                            //                 return value3 - value4
                            //             }
                            //             return value1 - value2
                            //         })
                            //     }
                            // }

                            //代表 有接货地 和 起始港相同 并且已经进行或者说正在进行目的港
                            if(boxCon.isPolJHD && boxCon.isPolNode){
                                //则当前接货地大图标按钮亮
                                for (let dd = 0; dd < nodeList.length; dd++) {
                                    if(nodeList[dd].type == 1){
                                        nodeList[dd].nodeColor = 1
                                        nodeList[dd].lineColor = 1
                                    }
                                }
                            }

                            //代表 有 交货地和目的港相同 并且正在进行目的港 //并且当前节点不是还空的 则
                            if(boxCon.isPodJHD && boxCon.isPodNode){
                                //则当前交货地大图标按钮不能亮
                                for (let dd = 0; dd < nodeList.length; dd++) {
                                    if(nodeList[dd].type == 5){
                                        nodeList[dd].nodeColor = 2
                                    }
                                }
                            }

                            //根据当前节点 boxCon.currentIndex 让这个节点之前的线全部点亮
                            if(boxCon.currentIndex=== 0 || boxCon.currentIndex){
                                for (let et = 0; et < boxCon.currentIndex; et++) {
                                    nodeList[et].lineColor = 1
                                    nodeList[et].nodeColor = 1
                                    for (let pt = 0; pt < nodeList[et].statusNode.length; pt++) {
                                        nodeList[et].statusNode[pt].innerColor = 1
                                    }
                                }
                            }

                            for (let ppt = 0; ppt < nodeList.length; ppt++) {
                                //如果里面的线 lineColor == 1  全过  则 里面的节点 innerColor = 0 并且不是最后一个节点
                                if(nodeList[ppt].lineColor == 1 && ppt !== nodeList.length - 1){
                                    for (let pl = 0; pl < nodeList[ppt].statusNode.length; pl++) {
                                        nodeList[ppt].statusNode[pl].innerColor = 0
                                    }
                                }
                            }

                            boxCon.nodeList = nodeList.filter(item => item.timeOrder)

                            //如果当前不是还空 或者当前不是 msa mcc 则当前交货地上一条线不能亮
                            if(boxCon.currentnode == 'RCVE' || (boxCon.currentnode == 'STCS' && (detailData.carrierCode == 'MAEU' || detailData.carrierCode == 'MCPU'))){

                            }else{
                                if(boxCon.isPodJHD){
                                    for (let dd = 0; dd < boxCon.nodeList.length; dd++) {
                                        if(boxCon.nodeList[dd].type == 5 && boxCon.nodeList[dd].nodeColor == 2){//交货地
                                            boxCon.nodeList[dd-1].lineColor = 2
                                        }
                                    }
                                }
                            }

                            //每个箱子的信息存放到定义的箱子数组里
                            detailData.boxList.push(boxCon)
                        }
                    }
                }
                that.detailData = detailData

                that.isWhat = localStorage.getItem("weChat") ? localStorage.getItem("weChat") : ''
                if(!that.isWhat){
                    that.detailData.isSub = 0
                }
                if(that.loadNum == 0){
                    that.loadings = false
                }
                //大节点
                that.getLarDes()
                //每个箱子的大节点
                that.getlargN()
                //箱子里的小节点
                that.getUnkown(that.detailData)
            })
        },

        //EIR
        getEir(params){
            var that = this
            this.$Axios.get(this.GLOBAL.url + 'trace/detail/getEIRDetailInfo?recordId=' + params.recordId,{
                headers: {
                    Authorization: this.getToken()
            },
            }).then(res => {
                that.EIRList= [] //集卡-EIR
                
                //1, “集卡-EIR”
                if(res.data.content && res.data.content.length > 0){
                    for (let i = 0; i < res.data.content.length; i++) {
                        var value = res.data.content[i]
                        if(value.type == 1){
                            that.EIRList.push(value)
                        }
                    }
                }
            })
        },
        //报关和舱单
        getBc(params){
            var that = this
            this.$Axios.get(this.GLOBAL.url + 'trace/detail/getBgAndCdDetailInfo?recordId=' + params.recordId,{
                headers: {
                    Authorization: this.getToken()
            },
            }).then(res => {
                that.DockList= [] //预配舱单
                that.OrigList= [] //原始舱单
                that.CusList= [] //报关
                // 2, “预配舱单”； 3, “原始舱单”； 6, “报关”
                if(res.data.content && res.data.content.length > 0){
                    for (let i = 0; i < res.data.content.length; i++) {
                        var value = res.data.content[i]
                        if(value.type == 2){
                            that.DockList.push(value)
                        }
                        if(value.type == 3){
                            that.OrigList.push(value)
                        }
                        if(value.type == 6){
                            that.CusList.push(value)
                        }
                    }
                }
            })
        },

        //VGM和运抵报告
        getVgmArr(params){
            var that = this
            this.$Axios.get(this.GLOBAL.url + 'trace/detail/getVgmANDReportDetail?recordId=' + params.recordId,{
                headers: {
                    Authorization: this.getToken()
            },
            }).then(res => {
                that.VGMList= [] //VGM
                that.ReportList= [] //运抵报告
                //4, “VGM”；5, “运抵报告”
                if(res.data.content && res.data.content.length > 0){
                    for (let i = 0; i < res.data.content.length; i++) {
                        var value = res.data.content[i]
                        if(value.type == 4){
                            that.VGMList.push(value)
                        }
                        if(value.type == 5){
                            that.ReportList.push(value)
                        }
                    }
                }
            })
        },
        twoArry(arr1,arr2) {
            for (let i = 0; i < arr1.length; i++) {
                var smallNode = []
                for (let j = 0; j < arr2.length; j++) {
                    if(arr1[i].name == arr2[j].eventPlace){
                        smallNode.push(arr2[j])
                    }
                }
                arr1[i].nodeList = smallNode
            }            
        },
        //节点筛选
        process(arr) {
            var newArr = []
            if(arr.length > 0){
               for (var i = 0; i < arr.length; i++) {
                    for (var j = i + 1; j < arr.length; j++) {
                        if (
                            arr[i].descriptionCn == arr[j].descriptionCn &&
                            arr[i].descriptionEn == arr[j].descriptionEn &&
                            arr[i].eventCode == arr[j].eventCode &&
                            arr[i].eventPlace == arr[j].eventPlace &&
                            arr[i].eventTimeSort == arr[j].eventTimeSort &&
                            arr[i].isEsti== arr[j].isEsti
                        
                        ) {
                            i++
                            j = i
                        }
                     }
                    newArr.push(arr[i])
                }
            }
            // 缓存用于记录
            var cacheN = [] //N的数组
            var cacheY = [] //Y的数组
            for(var i = 0; i< newArr.length; i++){
                if(newArr[i].isEsti == 'N'){
                    cacheN.push(newArr[i])
                }
                if(newArr[i].isEsti == 'Y'){
                    cacheY.push(newArr[i])
                }
            }
            for (let j = 0; j < cacheN.length; j++) {
                for (let q = 0; q < cacheY.length; q++) {
                     if (cacheY[q].eventCode == cacheN[j].eventCode) {
                        cacheY.splice(q, 1)
                    }
                }
                
            }
            var cache = cacheN.concat(cacheY)
            return cache
        },
        // 切换列表的时候是否展开详细节点
        changeTrackBox(item, index){
            if(this.currentIndex == index){
                this.isTrackBoxShow = !this.isTrackBoxShow
            }else{
                this.isTrackBoxShow = true
                this.currentIndex = index
            }
        },
        // 点击展示船信息详情
        clickVessel(item){
            item.isShow = !item.isShow
        },

        //所有船
        allToShipdt(){
            //多条船
            var newArr = Array.from(new Set(this.allVessel))
            var vessel = newArr.join(',')
            var item = {
                mmsi: '',
                vessel: vessel,
                isDan: true,
            }
            this.clickToShipdt(item)
        },
        //跳转船舶定位页面
        clickToShipdt(item){
            if(this.userId){ //登录
                var query = {
                    mmsi : '', //item.mmsi ? item.mmsi : '',
                    shipdt : item.vessel ? item.vessel : item.imo ? item.imo : '',
                    isGoBack : this.webClient ? false : true,
                    isDan: item.isDan ? true : false, //true 多条船  false单条船
                }
                //两个对象合并
                var setParamDate = Object.assign({},this.inForm,query)

                var paramDate = this.setParams(setParamDate)

                if(this.webClient){
                    // 网站跳转新页面
                    let routeData = this.$router.resolve({
                        name: `vessel`,
                        query: {
                            id: paramDate
                        }
                    });
                    window.open(routeData.href, '_blank')
                }else{
                    // 客户端当前页跳转
                    this.$router.push({
                        name: `vessel`,
                        query: {
                            id: paramDate
                        }
                    });
                }
            }else{
                this.sampleData(1)
            }
        },
        //处理日期时间格式
        getTime(fmt, date) {
            let ret;
            let opt = {
                // "Y+": date.getFullYear().toString(),        // 年
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
        //获取到的节点排序
        compare(property){
            return function(a,b){
                var value1 = a[property]
                var value2 = b[property]
                return value1 - value2
            }
        },
        //获取到的节点排序
        zhengSort(property){
            return function(a,b){
                var value1 = a[property]
                var value2 = b[property]
                return value1 - value2
            }
        },        
        //去重
        quChong(arr){
            var obj = {}
            arr = arr.reduce(function(item, next) {
                obj[next.vessel] ? '' : obj[next.vessel] = true && item.push(next)
                return item
            }, [])
            return arr
        },
        //弹窗事件
        popoEvent(value){
            this.dialogPopup = true
            this.dialogText = value
        },

        //用户扫描二维码
        connect(){
            var that = this
            var socket = new WebSocket(that.GLOBAL.socketUrl + that.userId);
            socket.onopen = function() {
                console.log("socket连接");
            };
            socket.onmessage = function(e) {
                console.log("tracks回执消息",e.data)
                setTimeout(() => {
                    let data = JSON.parse(e.data)
                    if(!localStorage.getItem("weChat") && data.openId){
                        localStorage.setItem("weChat",data.openId)
                        that.$message({
                            message: that.$t('instanceTranck.Successful'),
                            type: "success",
                            customClass: "base-message-zindex"
                        })
                    }
                }, 300);
            };
            socket.onclose = function() {
                console.log("socket关闭");
                setTimeout(() => {
                    that.connect()
                }, 200);
            }; 
        },

        //点击提醒设置
        remind(){
            var that = this
            //登录的时候提示
            if(that.userId){
                if(that.$refs.RemindSet){
                    that.$refs.RemindSet.reminderSettings()
                }
            }else{
                that.sampleData(1)
            }
        },
        //提醒设置点击完成
        tiXshe(){
            this.isWhat = localStorage.getItem("weChat") ? localStorage.getItem("weChat") : ''
            this.detailData.isSub = 1
        },
        // 取消提醒
        focusOn(value){
            if(this.userId){
                if(value == 1){
                    this.dialogText = '提醒'
                    this.dialogPopup = true
                }else{
                    this.dialogText = '取消提醒'
                    this.dialogPopup = true
                }
            }else{
                this.sampleData(1)
            }
        },
        //录入备注
        remark(){
            if(this.userId){
                this.textarea = this.detailData.remark
                this.dialogPopup = true
                this.dialogText = '录入备注'
            }else{
                this.sampleData(1)
            }
        },
        //请输入车牌号
        addLicense(){
            if(this.userId){
                this.textarea = ''
                this.dialogPopup = true
                this.dialogText = '请输入车牌号'
            }else{
                this.sampleData(1)
            }
        },
        //删除对象车牌号
        delectLicense(item,index){
            if(item.edit == 1){ //可删除
                var that = this
                that.$Axios.get(that.GLOBAL.url + "trace/detail/deleteCarNumber?id=" + item.id,{
                    headers: {
                        Authorization: this.getToken()
                },
                }).then(res => {
                    if (res.data.status == 1) {
                        that.EIRList.splice(index,1)
                    }
                })
            }
        },
        //定位
        local_position(item){
            var that = this
            if(that.userId){
                //跳到集卡页
                var query = {
                    vclN: item.carNumber,
                    isGoBack : this.webClient ? false : true,
                }

                //两个对象合并
                var setParamDate = Object.assign({},this.inForm,query)

                var paramDate = this.setParams(setParamDate)

                if(this.webClient){
                    //web端
                    let routeData = this.$router.resolve({
                        name: 'setCards',
                        query: {
                            id: paramDate
                        },
                   });
                    window.open(routeData.href, '_blank')
                }else{
                    //客户端
                    that.$router.push({
                        name: 'setCards',
                        query: {
                            id: paramDate
                        },
                    })
                }
            }else{
                that.sampleData(1)
            }
        },
        //点击确认
        comfirmCheck() {
            var that = this
            var userSelect = ''
            if(that.dialogText == '录入备注') {
                // cnshaTrack: '2', //1是上海港区 2 是跟踪
                if(this.inForm.cnshaTrack == '1'){ //上海港区的备注
                    this.$Axios.get(that.GLOBAL.url + "trace/dock/updareMark?id=" + this.inForm.id + '&recordId=' + this.inForm.recordId + '&remark=' + that.textarea,{
                        headers: {
                            Authorization: this.getToken()
                    },
                    }).then(res => {
                        if (res.data.status == 1) {
                            that.dialogPopup = false //关闭弹窗
                                that.detailData.remark = that.textarea
                        }
                    })
                }else{ //跟踪的备注
                    var fd = {
                        userId: that.userId,
                        id: that.inForm.id,
                        remark: that.textarea,
                    }
                    this.$Axios.post(that.GLOBAL.url + "trace/updateShipRemark",fd,{
                        headers: {
                            Authorization: this.getToken()
                    },
                    }).then(res => {
                        if (res.data.status == 1) {
                            that.dialogPopup = false //关闭弹窗
                                that.detailData.remark = that.textarea
                        }
                    })
                }
            }else if(that.dialogText == '取消提醒'){
                this.$Axios.get(that.GLOBAL.url + "trace/detail/changeIsSub?id=" + this.inForm.recordId + '&isSub=0',{
                    headers: {
                        Authorization: this.getToken()
                },
                }).then(res => {
                    if (res.data.status == 1) {
                        that.dialogPopup = false //关闭弹窗
                        that.detailData.isSub = 0
                    }
                })
            }else if(that.dialogText == '提醒'){
                this.$Axios.get(that.GLOBAL.url + "trace/detail/changeIsSub?id=" + this.inForm.recordId + '&isSub=1',{
                    headers: {
                        Authorization: this.getToken()
                },
                }).then(res => {
                    if (res.data.status == 1) {
                        that.dialogPopup = false //关闭弹窗
                        that.detailData.isSub = 1
                    }
                })
            }else if(that.dialogText == '请输入车牌号'){
                if(that.textarea == ''){
                    that.$message({
                        message: '请输入车牌号',
                        type: "error",
                        customClass: "base-message-zindex"
                    })
                    return
                }
                //看车牌号是否有一样的
                for (let i = 0; i < that.EIRList.length; i++) {
                    if(that.textarea == that.EIRList[i].carNumber){
                        that.$message({
                            message: '已有相同车牌号',
                            type: "error",
                            customClass: "base-message-zindex"
                        })
                        return
                    }
                }
                var fd = {
                    recordId: that.inForm.recordId,
                    carNumber: that.textarea
                }
                this.$Axios.post(that.GLOBAL.url + "trace/detail/addCarNumber",fd,{
                    headers: {
                        Authorization: this.getToken()
                },
                }).then(res => {
                    if (res.data.status == 1) {
                        that.dialogPopup = false //关闭弹窗
                        var newEIR = {
                            carNumber: that.textarea,
                            caseWeight: '',
                            createTime: '',
                            edit: 1,
                            id: '',
                            key: '',
                            piece: '',
                            recordId: '',
                            status: '',
                            statusTime: '',
                            tareWeight: '',
                            type: 1,
                            updateTime: '',
                            vgm: '',
                            volume: '',
                            weight: '',
                        }
                        //增加
                        that.EIRList.push(newEIR)
                    }
                })
            }
        },


        getlargN(){
            var that = this
            for (let i = 0; i < that.detailData.boxList.length; i++) {
                that.detailData.boxList[i].webNodeCn = ''
                that.detailData.boxList[i].webNodeEn = ''
                if(!that.detailData.boxList[i].currentStatusCode && that.detailData.boxList[i].currentStatusDescriptionEn && that.detailData.carrierNameL){
                    that.getlargDesc(that.detailData.boxList[i],i)
                }
            }
        },
        getlargDesc(item,index){
            var that = this
            that.$Axios.get(that.GLOBAL.url + `trace/detail/nodeTranslate?carrier=${that.detailData.carrierNameL}&desc=${item.currentStatusDescriptionEn}`,{
                headers: {
                    Authorization: this.getToken()
            },
            }).then(res => {
                if (res.data.status == 1) {
                    if(res.data.content && (res.data.content.webNodeCn || res.data.content.webNodeEn)){ //返回有值
                        item.webNodeCn = res.data.content.webNodeCn ? res.data.content.webNodeCn : ''
                        item.webNodeEn = res.data.content.webNodeEn ? res.data.content.webNodeEn : ''
                    }
                }
                that.detailData.boxList.splice(index,1,item)
            })
        },


        //处理未知节点
        async getUnkown(detailData){
            var newDetail = JSON.parse(JSON.stringify(detailData))
            var that = this
            
            for (let i = 0; i < newDetail.boxList.length; i++) {
                for (let j = 0; j < newDetail.boxList[i].nodeList.length; j++) {
                    let list = [] //存放未知节点请求的数据
                    for (let f = 0; f < newDetail.boxList[i].nodeList[j].statusNode.length; f++) {
                        var pp = newDetail.boxList[i].nodeList[j].statusNode[f]
                        list.push(that.getDesc(pp))
                    }

                    if(list.length) {
                        list = await Promise.all(list)
                        list = that.nodeProcess(list)
                        console.log(list,'list')
                        that.detailData.boxList[i].nodeList[j].statusNode = list
                    }
                }
            }
        },
        //节点筛选
        nodeProcess(arr) {
            var cache = [] //整理后的数据
            var nodeN = [] //不走接口的
            var nodeY = [] //未知走接口的
            for (let i = 0; i < arr.length; i++) {
                //是未知节点并且有英文描述 并且不是当前节点
                if(!arr[i].eventCode && arr[i].descriptionEn && arr[i].webNodeCn && !arr[i].isCurrentNode){
                    nodeY.push(arr[i])
                }else{
                    nodeN.push(arr[i])
                }
            }

            //nodeY 未知走接口的节点去重
            var newArr = []
            if(nodeY.length > 0){
               for (var i = 0; i < nodeY.length; i++) {
                    for (var j = i + 1; j < nodeY.length; j++) {
                        //去重 未知的单子 必返 webNodeCn 船公司+单号+同一地点+同一中文名+相同时间，进行去重
                        if (
                            nodeY[i].webNodeCn == nodeY[j].webNodeCn &&
                            nodeY[i].eventPlace == nodeY[j].eventPlace &&
                            nodeY[i].eventTimeSort == nodeY[j].eventTimeSort
                        ) {
                            i++
                            j = i
                        }
                     }
                    newArr.push(nodeY[i])
                }
            }
            var cache = nodeN.concat(newArr)
            //节点按照时间排序
            cache = cache.sort(function(a,b){
                //先排时间
                var value1 = a.eventTimeSort
                var value2 = b.eventTimeSort
                if(value1 === value2){
                    //在排 N排前 Y排后
                    var value3 = a.isEsti
                    var value4 = b.isEsti
                    if(value3 == value4){
                        //时间相同 排 当前节点状态
                        return a.innerColor - b.innerColor
                    }
                    return value3 - value4
                }
                return value1 - value2
            })
            return cache
        },
        getDesc(item){
            var that = this
            if(!item.eventCode && that.detailData.carrierNameL && item.descriptionEn){
                return that.$Axios.get(that.GLOBAL.url + `trace/detail/nodeTranslate?carrier=${that.detailData.carrierNameL}&desc=${item.descriptionEn}`,{
                    headers: {
                        Authorization: this.getToken()
                },
                }).then(res => {
                    if (res.data.status == 1) {
                        if(res.data.content && (res.data.content.webNodeCn || res.data.content.webNodeEn)){ //返回有值
                            item.webNodeCn = res.data.content.webNodeCn ? res.data.content.webNodeCn : ''
                            item.webNodeEn = res.data.content.webNodeEn ? res.data.content.webNodeEn : ''
                            return Promise.resolve(item)
                        }else{
                            return Promise.resolve(item)
                        }
                    }else{
                       return Promise.resolve(item)
                    }
                }, () => Promise.resolve())
            }else{
                return Promise.resolve(item)
            }
        },

        getLarDes(){
            var that = this
            if(!that.detailData.currentnode && that.detailData.descriptionEn){
                that.$Axios.get(that.GLOBAL.url + `trace/detail/nodeTranslate?carrier=${that.detailData.carrierNameL}&desc=${that.detailData.descriptionEn}`,{
                    headers: {
                        Authorization: this.getToken()
                },
                }).then(res => {
                    if (res.data.status == 1) {
                        if(res.data.content && (res.data.content.webNodeCn || res.data.content.webNodeEn)){ //返回有值
                            that.detailData.webNodeCn = res.data.content.webNodeCn ? res.data.content.webNodeCn : ''
                            that.detailData.webNodeEn = res.data.content.webNodeEn ? res.data.content.webNodeEn : ''
                        }
                    }
                })
            }
        },
        //处理 时间 (周次)
        getTimeDay (time,type) {
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
            ]
            var geS = this.getProcessTime(type,new Date(time)) //格式化时间
            var c = weekDay[new Date(time).getDay()]
            return geS +  '(' + c + ') '
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
        //查看官网
        goWebsite(){
            if(this.detailData.carrierUrl){
                window.open(this.detailData.carrierUrl, '_blank')
            }
        },
        //返回上一页
        goBack(){
            //1是上海港区 2 是跟踪
            if(this.inForm.cnshaTrack =='1'){
                this.$router.push({
                    name: 'portCnsha',
                    params: {
                        inForm: this.inForm
                    },
                })
            }else{
                this.$router.push({
                    name: 'Track',
                    params: {
                        inForm: this.inForm
                    },
                })
            }
        },
        //以后切换tab用
        goClickColor(index){
            //改变当前点击状态颜色
            $(".left_nav .nav_li").removeClass("li_active");
            $(".left_nav .nav_li").eq(index).addClass("li_active");
        },
    },
    computed: {
        language(){
            return localStorage.getItem('language');
        },
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
        'detailData.carrierCode' : {
            immediate: true,
            handler(newVal){
                var that = this
                if(newVal){
                    for(let i=0; i < that.imageUrlArray.length; i++){
                        // 验证是否有船公司默认图片
                        if (this.imageUrlArray[i] == that.detailData.carrierCode) {
                            that.imageUrl = require(`../assets/images/my-logos2/${that.detailData.carrierCode}.png`)
                            return
                        }
                    }
                    that.imageUrl = require(`../assets/images/my-logos2/HALC.png`)
                    return
                }else{
                    that.imageUrl = require(`../assets/images/my-logos2/WZ.png`)
                    return
                }
            }
        },

    },
    mounted() {
        this.$refs.track_detail.style.minHeight = document.documentElement.clientHeight - 122 - 46 + 'px'
        this.connect()
        //跟踪列表进入详情页全部选择栏索引
        if(this.$route.params && this.$route.params.id){
            var paramDate = this.getParams(this.$route.params.id)
            this.inForm = paramDate
            //调详情页
            this.initialize(paramDate)

            //Vgm 运抵报告
            this.getVgmArr(paramDate)

            //报关和舱单
            this.getBc(paramDate)
            //EIR
            this.getEir(paramDate)
        }
        //以后会有tab
        this.goClickColor(0)
    },
}
</script>