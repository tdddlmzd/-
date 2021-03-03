<style lang="scss">
.el-dialog{
  margin-top: 23vh !important;
}
  .contentB{
    margin-top: 22px;
    width: 100%;
    min-height: 840px;
    height:auto !important;
    position: relative;
  }
  .el-carousel__arrow {
    width: 30px;
    height: 56px;
    float: left;
    line-height: 100%;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    color: #072c4c;
    border-radius: 0;
    background-color: #fff;
  }

  .el-carousel__arrow--left {
    left: 0;
    border-right: 1px solid #f2f2f2;
  }

  .el-carousel__arrow--right {
    right: 0;
    border-left: 1px solid #f2f2f2;
  }

  .el-icon-arrow-left:not(.el-date-picker__prev-btn) {
    font-size: 24px;
    font-weight: 700;
  }

  .el-icon-arrow-right:not(.el-date-picker__next-btn) {
    font-size: 14px;
    font-weight: 700;
  }
  .contentB .side-box{
    .el-checkbox__input.is-disabled .el-checkbox__inner {
      background-color: #fff;
      border-color: #f2f2f2;
    }
    .el-checkbox__input.is-checked .el-checkbox__inner{
        background-color: #072c4c !important;
        border-color: #072c4c !important;
    }
    .el-checkbox__input.is-focus .el-checkbox__inner{
        border-color: #072c4c !important;
    }
    .el-checkbox__inner:hover{
        border-color: #072c4c !important;
    }
    .el-checkbox__input.is-checked+.el-checkbox__label{
      color: #072c4c;
    }
  }


  .el-slider__bar {
    position: absolute;
    height: 12px !important;
    top: 0;
    left: 0;
    background-color: #072c4c !important;
  }

  .el-slider__runway {
    border-radius: 0 !important;
    height: 12px !important;
    margin-bottom: 0 !important;
    margin-top: 0 !important;
    width: 96% !important;
    // margin-left: 5%;
  }

  .el-slider__bar {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  .el-slider__button {
    margin-top: 6px;
    border: 2px solid #072c4c !important;
  }

  .el-icon-arrow-right:not(.el-date-picker__next-btn) {
    color: #072c4c;
  }

  .el-collapse-item__content {
    padding-bottom: 10px;
  }
  .content-box .fob-ship .shipper p {
    max-width: 277px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    height: 16px;
    margin-top: 4px;
    .spanOverflow{
      display: inline-block;
      max-width: 70px;
      height: 16px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  .list-logo_TRUCK{
    width: 30px !important;
    height: 16px !important;
    border-radius: inherit !important;
    box-shadow: none !important;
    border: none !important;
  }
  .list-logo_TRUCK + .list-logo-border{
    margin-bottom: 9px !important;
  }
  .list-logo_RAIL{
    width: 18px !important;
    height: 23px !important;
    border-radius: inherit !important;
    box-shadow: none !important;
    border: none !important;
  }
  .list-logo_FEEDER{
    width: 29px !important;
    height: 17px !important;
    border-radius: inherit !important;
    box-shadow: none !important;
    border: none !important;
  }
  .list_text_TRUCK{
    position: relative;
    bottom: -8px;
  }
  .list_text_RAIL{
    position: relative;
    bottom: -4px;
  }
   .list_text_FEEDER{
    position: relative;
    bottom: -8px;
  }
  .list-logo_RAIL + .list-logo-border{
    margin-bottom: 7px !important;
    margin-left: 0 !important;
  }
  .list-logo_FEEDER + .list-logo-border{
    margin-bottom: 7px !important;
    margin-left: 0 !important;
  }
  .content-box .fob-ship .shipper .list-logo-border {
    display: inline-block;
    width: 15px;
    height: 2px;
    background: #072c4c;
    margin-bottom: 18px;
    margin-left: 3px;
  }

  .content-box .fob-ship .shipper .list-logo-trans {
    display: inline-block;
    width: 20px;
    height: 2px;
    background: #072c4c;
    margin-bottom: 15px;
  }

  .content-box .fob-ship .shipper .list-logo-scacs-trans {
    font-size: 12px;
    width: 45px;
    height: 23px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: inherit;
  }

  .content-box .fob-ship .shipper .list-logo-cargo {
    border: 0px !important;
    box-shadow: 0 0 0 0 !important;
    display: inline-block;
  }

  .content-box .fob-ship .shipper .list-logo-scacs {
    font-size: 12px;
    width: 33px;
    height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
  }

  .content-box .fob-ship .shipper .list-logo-scacs-top {
    font-size: 12px;
    width: 38px;
    margin-left: 10px;
    height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .content-box .fob-ship .shipper .list-logo-scacs-bottom {
    font-size: 12px;
    width: 38px;
    margin-left: 20px;
    height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .pod-item {
    padding-top: 19px;
    height: 56px;
    cursor: pointer;
    border-bottom: 2px solid #072c4c;
    background: url(../assets/images/weeks_line.png) left no-repeat;
  }
   .pod-item .active>.week-schedules-count {
    background-color: #ff9500 !important;
    color: #fff !important;
  }

  .pod-item>.week-schedules-count {
    background-color: #c8c8c8;
    color: #fff;
  }

  .transit-port {
    height: 35px;
    overflow: hidden;
    /*超出部分隐藏*/
    text-overflow: ellipsis;
    /*超出部分显示省略号*/
    white-space: nowrap;
    /*规定段落中的文本不进行换行 */
    font-size: 12px;
  }

  .mother-ship-border {
    border: 2px solid #ff7676 !important;
    background-color: #fff;
  }
  .work-ship-border {
    border: 2px solid #26b4b2 !important;
    background-color: #fff;
  }

  .mother-ship-borderDashed {
    border: none !important;
    background-color: #fff;
  }

  .mother-ship {
    float: right;
  }

  .mother-ship-logo {
    height: 14px;
    width: 14px;
    border: 2px solid #ff7676;
    border-radius: 50%;
    display: inline-block;
    margin: -2px;
  }

  .mother-ship-logospeci {
    height: 14px;
    width: 14px;
    border: 2px solid #cccccc;
    border-radius: 50%;
    display: inline-block;
    margin: -2px;
  }
  .mother-ship-workShipp {
    height: 14px;
    width: 14px;
    border: 2px solid #26b4b2;
    border-radius: 50%;
    display: inline-block;
    margin: -2px;
  }
  .mother-ship-des {
    display: inline-block;
    margin-left: 10px;
    margin-right: 20px;
  }

  .total-count-p {
    display: inline;
  }

  .el-collapse {
    border-top: none !important;
  }

  .el-popover {
    padding: 0;
    color: #a8a8a8;
  }
  .itemElpopover{
    overflow: hidden;
    line-height: 20px;
    height: 20px;
  }
  .shippNew{
    min-width: 50px;
    height: 80px;
    border-radius: 6px;
    padding: 20px 15px 15px 15px;
    background: #fff;
    ul{
      display: flex;
      li{
        img{
          width: 33px;
          height: 33px;
          border-radius: 100%;
          box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.17);
          border: 2px solid #072c4c;
        }
      }
    }
    .list-logo{
      height: 33px;
      width: 33px;
      margin-right: -5px;
      margin-top: -8px;
    }
    .list-logo-scacs-trans {
      font-size: 12px;
      width: 45px;
      height: 23px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      text-align: inherit;
      color: #282828;
    }
    .list-logo-trans {
      display: inline-block;
      width: 20px;
      height: 2px;
      background: #072c4c;
      margin-bottom: 15px;
    }
    .list-logo-border {
      display: inline-block;
      width: 15px;
      height: 2px;
      background: #072c4c;
      margin-bottom: 18px;
      margin-left: 3px;
    }
    .list-logo_TRUCK{
      width: 30px !important;
      height: 16px !important;
      border-radius: inherit !important;
      box-shadow: none !important;
      border: none !important;
    }
    .list-logo_TRUCK + .list-logo-border{
      margin-bottom: 9px !important;
    }
    .list-logo_RAIL{
      width: 18px !important;
      height: 23px !important;
      border-radius: inherit !important;
      box-shadow: none !important;
      border: none !important;
    }
    .list-logo_FEEDER{
      width: 29px !important;
      height: 17px !important;
      border-radius: inherit !important;
      box-shadow: none !important;
      border: none !important;
    }
    .list_text_TRUCK{
      position: relative;
      bottom: -8px;
    }
    .list_text_RAIL{
      position: relative;
      bottom: -4px;
    }
    .list_text_FEEDER{
      position: relative;
      bottom: -8px;
    }
    .list-logo_RAIL + .list-logo-border{
      margin-bottom: 7px !important;
      margin-left: 0 !important;
    }
    .list-logo_FEEDER + .list-logo-border{
      margin-bottom: 7px !important;
      margin-left: 0 !important;
    }
    .list-logo-scacs-trans_line {
      text-indent: 1.1em;
    }

    p {
      max-width: 277px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      height: 16px;
      color: #282828;
      font-size: 12px;
    }
  }
  .elPopover {
    overflow: hidden;
    line-height: 20px;
    height: 20px;
  }
   .ShipInformation {
    min-width: 254px;
    height: 120px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    background: #fff;
    overflow: hidden;
    padding-right: 10px;
    border-radius: 4px;
  }

  .ShipInformation .ShipInformationp {
    font-weight: 600;
    height: 12px;
    line-height: 12px;
    padding-left: 10px;
    margin-left: 10px;
    margin-top: 10px;
    border-left: 2px solid #072c4c;
    color: #282828;
    font-size: 12px;
    margin-bottom: 7px;
  }

  .ShipInformation .shipinfo-UL {
    list-style: none;
    padding-left: 22px;
  }

  .ShipInformation .shipinfo-UL .shipinfo_LI {
    padding: 0;
    list-style: none;
    margin-top: 4px;
    font-size: 12px;
    color: #909090;
  }

  .ShipInformation .shipinfo-UL .shipinfo_LI .shipSpan {
    display: inline-block;
    width: 100px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .ShipInformation .shipinfo-UL .shipinfo_LI .shipSpanSpeci {
    margin-left: 20px;
  }

  .runner {
    display: inline-block;
    max-width: 300px;
    overflow: hidden;
    /*超出部分隐藏*/
    text-overflow: ellipsis;
    /*超出部分显示省略号*/
    white-space: nowrap;
    /*规定段落中的文本不进行换行 */
  }

  .ppp {
    margin-left: -2px;
  }

  .ccc {
    color: #cccccc;
  }

  .dialogDate {
    position: fixed;
    left: 0;
    top: 30%;
  }

  .el-dialog__header {
    padding: 0;
  }
   .dataquery {
    width: 280px;
    height: 100px;
  }

  .dataquery .proTitle {
    width: 100%;
    height: 100px;
    line-height: 100px;
    text-align: center;
    font-size: 16px;
  }
  .delay {
    border-radius: 12px;
    background-color: #ff7676;
    color: #fff;
    display: inline-block;
    padding: 2px 8px 2px 8px;
    font-size: 12px;
    position: absolute;
    right: 10px;
  }

  .advance {
    border-radius: 12px;
    background-color: #26b4b2;
    ;
    color: #fff;
    display: inline-block;
    padding: 2px 8px 2px 8px;
    font-size: 12px;
    position: absolute;
    right: 10px;
  }

  .accurate {
    display: inline-block;
    color: #072c4c;
    font-size: 12px;
    position: absolute;
    right: 10px;
  }

  .headerCenter {
    height: 40px;
    display: inline-block;
    vertical-align: top;
  }

  .headerCenter .iconfont {
    line-height: 33px;
    font-weight: normal;
    margin-left: 4px;
  }

  .overtimeBoat {
    width: 78px;
    height: 16px;
    position: absolute;
    left: 0;
    top: 0;
    background: url('../assets/images/_table/overtimeBoat.png') center no-repeat;
    color: #fff;
    text-align: center;
    font-size: 12px;
    line-height: 16px;
  }

  .el-slider__bar {
    background-color: #072c4c;
  }
   .content-box .fob-ship .item-2 span {
    font-size: 12px
  }

  .content-box .fob-ship .item-4 span {
    font-size: 12px
  }

  .autoInfo {
    margin: 0 auto;
  }

  .stop:after,
  .jump:after,
  .pendingReplace:after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-width: 4px;
    border-style: solid;
    border-color: transparent;
    border-top-width: 3px;
    border-top-color: currentColor;
    color: #a8a8a8;
  }

  .suspensionOrJump {
    text-align: center;
  }

  .suspensionOrJump span {
    display: block;
    line-height: 21px;
    position: relative;
  }

  .suspensionOrJump span:nth-of-type(1) {
    font-size: 12px;
    background: #a8a8a8;
    padding: 1px 8px;
    border-radius: 12px;
    color: #fff;
    line-height: inherit;
    margin-bottom: 4px;
  }

  // .moreProgram {
  //   width: 100%;
  //   margin-top: 20px;
  //   margin-bottom: 20px;
  //   padding-left: 18px;
  //   font-size: 12px;
  //   font-weight: bold;
  // }
  // .moreZhongProgram{
  //   width: 100%;
  //   height: 20px !important;
  //   margin-top: 3px;
  //   margin-bottom: 12px;    
  //   padding-left: 18px;
  //   font-size: 12px;
  //   font-weight: bold;
  // }

  .list-logo-scacs-trans_line {
    text-indent: 1.1em;
  }
  .port-box{
    .el-checkbox{
      margin-right: 5px;
    }
    .el-checkbox-group{
      .el-checkbox-double{
        width: 80px;
        overflow: hidden;
      }
    }
  }
  .list-content{
    // width: 981px;
  }
  .list-main .el-collapse-item__header {
    border-bottom: 1px solid #f2f2f2;
  }
.el-checkbox__input.is-disabled+span.el-checkbox__label{
  color: #a8a8a8;
}
.el-collapse-item__wrap{
  border-bottom: 1px solid #f2f2f2;
}
.el-collapse-item__arrow{
  margin: 0 1px 0 auto;
}
.week_time{
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.week_time_p{
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.week_time_p:hover{
  color:#26b4b2;
  font-weight: bold;
}
.week_time_p_bottom{
  border-bottom: 2px solid #26b4b2;
  color:#26b4b2;
  font-weight: bold;
}
.zhengq{
  width: 18px;
  height: 18px;
  cursor: pointer;
}


.block_zhund{
  width: 100%;
  height: 100%;
}
.red_yanc{
  width: 100%;
  height: 100%;
}
.like_footer{
    width: 100%;
    height: 56px;
    background-color: rgba(38, 180, 178, 0.7);
    position: fixed;
    right: 0;
    bottom: 43px;
  .giveLike{
    width: 100%;
    height: 100%;
    .thumbNews{
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      .charaImage{
        width: 32px;
        height: 32px;
        margin-right: 4; 
        cursor: pointer;
      }
      .p1{
        font-size: 14px;
        color: #fff;
        margin-right: 10px;
        .icon_circe{
          font-size: 13px;
          color: #fff;
        }
      }
      .p2{
        font-size: 14px;
        color: #fff;
      }
      .like{
        display: flex;
        align-items: center;
        margin-left: 64px;
      }
      .image_ll{
        width: 11px;
        height: 11px;      
        margin-right: 5px;
        cursor: pointer;
      }
      .p_ll{
        margin-right: 10px;
        font-size: 14px;
        color: #fff;
      }
    }
    .icon_close{
      font-size: 11px;
      color: #fff;
      cursor: pointer;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 33px;
    }
  }
  .dianzhan{
    width: 100%;
    height: 100%;
    background: #072c4c;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    .dianzhan_image{
        width: 22px;
        height: 23px; 
    }
  }
}
.popver_image{
  width: 224px;
  height: 124px;
  background-color: #ffffff;
  box-shadow: 0px 0px 12px 0px 
    rgba(0, 0, 0, 0.1);
  border-radius: 4px;      
  padding: 14px 20px;
  .heade_start{
    width: 100%;
    height: 48px;
    display: flex;
    align-items: center;
    .heade_left{
      width: 48px;
      height: 48px;   
      margin-right: 20px;         
      .heade_left_image{
        width: 100%;
        height: 100%;            
      }
    }
    .heade_right{
      flex: 1;
      .heade_right_p1{
        width: 100%;
        height: 14px;
        line-height: 14px;
        font-size: 14px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        word-break: break-all;
        color: #282828;
      }
      .heade_right_p2{
        width: 100%;
        height: 14px;
        line-height: 14px;
        font-size: 12px;
        margin-top: 10px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        word-break: break-all;
        color: #909090;
      }
      .heade_right_image{
        width: 9px;
        height: 12px;
        margin-left: 10px;
      }
    }
  }
  .header_center{
    width: 100%;
    height: 14px;
    line-height: 14px;
    font-size: 12px;
    margin-top: 14px;
    color: #282828;
    font-weight: 600;
  }
  .header_end{
    width: 100%;
    height: 14px;
    line-height: 14px;
    font-size: 12px;
    margin-top: 10px;
    color: #282828;
    font-weight: 600;
    display: flex;
    align-items: center;
    .header_end_image{
      width: 12px;
	    height: 12px;
    }
  }
}
.hoverButt{
  background: url('../assets/images/details/shipHover.png') center no-repeat;
  background-position:center 0;
  height: 24px;
}
.hoverButt:hover{
  background: url('../assets/images/details/ship.png') center no-repeat;
  background-position:center 0;
}

.teshuPover[x-placement^=bottom]{
  margin-top: 6px !important;
}
.el-message-box__btns .el-button{
  color: #fff !important;
}
.el-message-box__content{
  padding: 10px !important;
}
.feeder{
  font-size: 12px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #282828;
  margin-left: 20px;
  width:30%;
}
.fob-ship-title{
  height: 56px !important;
  font-size: 14px;
  font-family: Source Han Sans CN;
  font-weight: bold;
  line-height: 56px;
  color: #282828;
  border-bottom: 1px solid #F2F2F2;
}
.list-main .side-box .hdtxt1 .el-checkbox{
  width: 45.5% !important;
}
.list-main .ship-checkbox .el-checkbox{
  width: 45% !important;
}
.port-box .el-checkbox-group .el-checkbox-double{
  width: 45% !important;
}
.content-box .data-list-title{
  line-height: 25px !important;
  padding: 0 40px !important;
}
.headerCenter .iconfont{
  line-height: 18px !important;
}
.hdtext{
  font-weight: bold;
  color: #282828;
}
.left-bar{
  border: 1px solid #f2f2f2;
  padding: 16px;
}
.ship-checkbox .el-checkbox-group .el-checkbox .el-checkbox__label{
    width: 80%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 11px;
}
.el-dialog__body{
    padding: 0px 10px 20px 20px !important;
}
.DetailsShow{
  .el-dialog__headerbtn .el-dialog__close{
        margin-top: 12px !important;
  }
  .el-dialog__header {
    padding: 20px 20px 10px;
  }
  .el-dialog__body {
    padding: 0px 10px 20px 20px !important;
  }
}
</style>
<style lang="scss" scoped>
.el-message-box__wrapper{
  z-index: 3001 !important;
}
.v-modal{
    z-index: 3000 !important;
}
.teshuPover[x-placement^=bottom]{
  margin-top: 6px !important;
}
.rightvESS:hover{
  text-decoration: underline;
  cursor: pointer;
}
.el-message-box{
  padding: 10px 20px !important;
}
.kongban{
  position: absolute;
  background: transparent;
  height: 30px;
  width: 30px;
}
</style>
<template>
<!-- 船期列表页面 -->
  <div>
    <div class="list-main" style="overflow: hidden;">
      <div class="wrapper">
        <!-- 船期列表周次导航栏 -->
        <div style="position: fixed;z-index: 99;width: 100%;left:0;top:132px;background:#f8f8f8">
          <div class="m-datebar-bd" style="margin:25px 3.8% 0;border:1px solid #f2f2f2;">
            <el-carousel :arrow="totalWeeks >4 ? 'always':'never'" height="40px" :autoplay="false"
              indicator-position="none">
              <el-carousel-item v-for="(item,bannerKey) in weekBanner" :key="bannerKey+item">
                <div v-if="totalWeeks <=4" class="prev">
                  <span class="iconfont icon-jiankuohaoxizuo"></span>
                </div>
                <div class="date" :style="totalWeeks <=4 ?'margin-left: 0':'margin-left: 30px'">
                  <div class="animateDatebarScroll">
                    <ul class="animateItem">
                      <li v-for="(week,weekKey) in item" :key="weekKey+week">
                        <div :class="dateType == '1'?'item':'pod-item'"
                          :id="'week_tab_'+weekKey+'_'+bannerKey+'_'+week.week"
                          @click.stop="changeWeek('week_tab_'+weekKey+'_'+bannerKey+'_'+week.week)">
                          <div class="week_time">
                            <p class="week_time_p" :class="weekId == '' ? weekKey == 0 ? 'week_time_p_bottom' : '': weekId == ('week_tab_'+weekKey+'_'+bannerKey+'_'+week.week) ? 'week_time_p_bottom' : ''">{{ $t(week.titleLang)}} {{week.name}}</p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div v-if="totalWeeks <=4" class="next">
                  <span class="iconfont icon-jiankuohaoxiyou"></span>
                </div>
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>

        <div class="contentB">
          <Loading v-if="loading" style="z-index:9999"></Loading>
          <!-- 左侧精准筛选部分 -->
          <div class="left-bar side-box" ref="bar">
            <div class="hdtxt" v-if="hideFilterFlag">
              <span class="hdtext">
                {{ $t('list.screening') }}
              </span>
              <span class="iconfont icon-shouqi" @click="hideFilter"></span>
            </div>
            <div class="closeXg" v-else @click="hideFilter">
              <div class="el-icon-s-fold icon_zhankai"></div>
              <div class="zksxx" style="cursor: pointer;">展开筛选项</div>
              <!-- <div class="zksxx">{{ $t('list.expandFilter') }}</div> -->
            </div>
            <transition name="el-zoom-in-center">
              <div class="el-zoom-in-left">
                <!-- 直达，中转部分 -->
                <div class="hdtxt1">
                  <el-checkbox-group v-model="isTransitGroup" @change="checkBoxFilter">
                    <el-checkbox label="0" :disabled="isTransitGroup2[0]">{{ $t('list.dir') }}</el-checkbox><!-- 直达 -->
                    <el-checkbox label="1" :disabled="isTransitGroup2[1]" style="margin-left: 8px">{{ $t('list.trans') }}</el-checkbox><!-- 中转 -->
                  </el-checkbox-group>
                  <el-checkbox-group v-model="isStopGroup" @change="checkBoxFilter">
                    <el-checkbox label="0" :disabled="isStopGroup2[0]">{{ $t('list.normal') }}</el-checkbox>
                    <el-checkbox label="1" :disabled="isStopGroup2[1]" style="margin-left: 8px">{{ $t('list.stop') }}</el-checkbox>
                  </el-checkbox-group>
                </div>

                <div role="tablist" aria-multiselectable="true" class="el-collapse">
                  <el-collapse v-model="activeNames">
                    <!-- 船公司部分 -->
                    <el-collapse-item v-title="$t('list.carrier')" name="2">
                      <div class="el-collapse-item__content">
                        <div class="ship-checkbox">
                          <el-checkbox-group v-model="companyGroup" @change="checkBoxFilter">
                            <el-checkbox :indeterminate="allCompany" :label="$t('list.all')" class="el-checkbox-double"
                              @change="allCompanyChange" :disabled="allCompanyDisabled">{{ $t('list.all') }}</el-checkbox>
                            <el-checkbox :label="name" class="el-checkbox-double" v-for="name in companyList" :key="name"
                              :v-model="true" v-title="name">{{name}}</el-checkbox>
                          </el-checkbox-group>
                        </div>
                      </div>
                    </el-collapse-item>
                    <el-collapse-item v-title="$t('list.terminal')" name="3">
                      <div class="el-collapse-item__content">
                        <div class="port-box">
                          <!-- 起运港部分 -->
                          <h5>{{ $t('list.pol') }}</h5>
                          <div class="polPodPadd">
                            <el-checkbox-group v-model="polGroup" @change="checkBoxFilter">
                              <el-checkbox :indeterminate="allPol" :label="$t('list.all')"
                                class="el-checkbox-double" @change="allPolChange" :disabled="allPolDisabled">
                                {{ $t('list.all') }}</el-checkbox>
                              <el-checkbox 
                                :label="item.val" 
                                class="el-checkbox-double"
                                v-for="item in ($i18n.locale == 'zh-CN' ? polTerninalList : polTerninalListEn)"
                                :key="item.name" 
                                v-title="item.name"
                              >
                                {{item.name}}
                              </el-checkbox>
                            </el-checkbox-group>
                          </div>
                          <!-- 目的港部分 -->
                          <h5 class="boder-line">{{ $t('list.pod') }}</h5>
                          <div class="polPodPadd">
                            <el-checkbox-group v-model="podGroup" @change="checkBoxFilter">
                              <el-checkbox :indeterminate="allPod" :label="$t('list.all')"
                                class="el-checkbox-double" @change="allPodChange" :disabled="allPodDisabled">
                                {{ $t('list.all') }}</el-checkbox>
                              <el-checkbox 
                                :label="item.name"
                                class="el-checkbox-double"
                                v-for="item in ($i18n.locale == 'zh-CN' ? podTerninalList :podTerninalListEn) " 
                                :key="item.name" 
                                v-title="item.name"
                              >
                                  {{item.name}}
                                </el-checkbox>
                            </el-checkbox-group>
                          </div>
                        </div>
                      </div>
                    </el-collapse-item>
                    <!-- 时间部分 -->
                    <el-collapse-item v-title="$t('list.time')" name="1">
                      <div class="el-collapse-item__content">
                        <div class="time-box">
                          <div>ETD</div>
                          <div>
                            <el-checkbox-group v-model="etdGroup" @change="checkBoxFilter">
                              <el-checkbox label="1" :disabled="etdGroup2[0]">{{ $t('list.mon') }}</el-checkbox>
                              <el-checkbox label="2" :disabled="etdGroup2[1]">{{ $t('list.tue') }}</el-checkbox>
                              <el-checkbox label="3" :disabled="etdGroup2[2]">{{ $t('list.wed') }}</el-checkbox>
                              <el-checkbox label="4" :disabled="etdGroup2[3]">{{ $t('list.thu') }}</el-checkbox>
                              <el-checkbox label="5" :disabled="etdGroup2[4]">{{ $t('list.fri') }}</el-checkbox>
                              <el-checkbox label="6" :disabled="etdGroup2[5]">{{ $t('list.sat') }}</el-checkbox>
                              <el-checkbox label="7" :disabled="etdGroup2[6]" style="margin-right:0">{{ $t('list.sun') }}</el-checkbox>
                            </el-checkbox-group>
                          </div>
                          <div class="range-picker-wrapper">
                            <div>T/T</div>
                            <div class="range-picker">
                              <el-slider v-model="range" :step="1" :min="minTime" :max="maxTime" @change="checkBoxFilter">
                              </el-slider>
                              <span class="label range-label">{{minTime}}</span>
                              <span class="label range-label end-label">{{maxTime}}</span>
                            </div>
                          </div>
                          <!-- <div>ETA</div>
                          <div>
                            <el-checkbox-group v-model="etaGroup" @change="checkBoxFilter">
                              <el-checkbox label="1" :disabled="etaGroup2[0]">{{ $t('list.mon') }}</el-checkbox>
                              <el-checkbox label="2" :disabled="etaGroup2[1]">{{ $t('list.tue') }}</el-checkbox>
                              <el-checkbox label="3" :disabled="etaGroup2[2]">{{ $t('list.wed') }}</el-checkbox>
                              <el-checkbox label="4" :disabled="etaGroup2[3]">{{ $t('list.thu') }}</el-checkbox>
                              <el-checkbox label="5" :disabled="etaGroup2[4]">{{ $t('list.fri') }}</el-checkbox>
                              <el-checkbox label="6" :disabled="etaGroup2[5]">{{ $t('list.sat') }}</el-checkbox>
                              <el-checkbox label="7" :disabled="etaGroup2[6]" style="margin-right:0">{{ $t('list.sun') }}</el-checkbox>
                            </el-checkbox-group>
                          </div> -->
                        </div>
                      </div>
                    </el-collapse-item>
                    <!-- 码头部分 -->
                    
                  </el-collapse>
                  <!-- 清空条件按钮 -->
                  <div class="btn-box">
                    <el-button type="primary" round class="searchBtn" @click="reSetAll">{{ $t('list.clearConditions') }}
                    </el-button>
                  </div>
                </div>
              </div>
            </transition>
          </div>
          <!-- 右侧船期列表部分 -->
          <!-- v-loading="loading" -->
          <div class="list-content">
            <div class="content-box">
              <!-- 船期列表顶部筛选导航 -->
              <div class="data-list-title">
                <!-- 按船期方案筛选 -->
                  <!-- 按ETA筛选 -->
                  <div class="item item-1">
                    <span class="headerCenter">{{ $t('list.Vessels') }}ETD</span>
                    <span class="headerCenter">
                      <sup class="iconfont icon-sj-left" data-sort="asc" data-type="staticEtdSort" data-index="0"
                        @click="sort('asc','staticEtdSort',0,true)"></sup>
                      <sub data-sort="desc" data-type="etaTime" data-index="0"
                        class="iconfont icon-xjiffangxiangsanjiaozheng3" @click="sort('desc','staticEtdSort',0,true)"></sub>
                    </span>
                  </div>
                  <!-- 按航程筛选 -->
                  <div class="item item-7">
                    <span class="headerCenter">{{ $t('list.TotalVoyage') }}</span>
                    <span class="headerCenter">
                      <sup class="iconfont icon-sj-left" data-sort="asc" data-type="transTime" data-index="1"
                        @click="sort('asc','transTime',1,true)"></sup>
                      <sub data-sort="desc" data-type="transTime" data-index="1"
                        class="iconfont icon-xjiffangxiangsanjiaozheng3" @click="sort('desc','transTime',1,true)"></sub>
                    </span>
                  </div>
                  <!-- 按码头筛选 -->
                  <div class="item item-7">
                    <span class="headerCenter">{{ $t('list.terminal') }}</span>
                    
                  </div>
                  <!-- 按共舱船公司(航线代码) -->
                  <div class="item item-2">
                    <span class="headerCenter">{{ $t('list.CommonRoute') }}</span>
                    <span class="headerCenter">
                      <sup class="iconfont icon-sj-left" data-sort="asc" data-type="solution" data-index="2"
                        @click="sort('asc','solution',2,true)"></sup>
                      <sub data-sort="desc" data-type="solution" data-index="2"
                        class="iconfont icon-xjiffangxiangsanjiaozheng3" @click="sort('desc','solution',2,true)"></sub>
                    </span>
                  </div>
                  <!-- 按大船船名/航次 -->
                  <div class="item item-3">
                    <span class="headerCenter">{{ $t('list.nameVoyage') }}</span>
                  </div>
                  <!--  -->
                  <!-- <div class="item item-4">
                    <span class="headerCenter"></span>
                  </div> -->
                  <!-- 认证 -->
                  <div class="item item-5" style="text-align: center;">
                    <span class="headerCenter">{{ $t('list.check') }}</span>
                  </div>
                  <!-- 船定位 -->
                  <div class="item item-6">
                    <span class="headerCenter">{{ $t('list.VesselsPositioning') }}</span>
                  </div>
              </div>
              <div style="padding: 0px 20px 10px;background: #fff;border-radius: 4px;border: 1px solid #f2f2f2;">
                <!-- 船期列表无数据状态 -->
                <div class="fob-ship-nodata" v-if="scheduleListDirect.length == 0 && scheduleListTransit.length == 0" :style="{height: LeftHeight}">
                  <div v-show="!haveRes">
                    <div class="fob-ship-nodata-img"></div>
                    <div class="fob-ship-nodata-text">
                      <span>{{ $t('list.sorryFeedback') }}</span>
                      <span class="fob-ship-nodata-text-emoji"></span>
                      <span>！</span>
                    </div>
                    <button class="fob-ship-nodata-btn" @click="contactCustomer()">{{ $t('list.envelope') }}</button>
                  </div>
                </div>
                <!-- 直达方案列表部分 -->
                <div class="fob-ship-title" v-if="scheduleListDirect.length == 0 ? false : true">
                  <span>
                    {{ $t('list.DirectPlan') + '(' + zhida + $t('list.group') + ')'}}
                  </span>
                </div>
                <!-- 直达列表部分 -->
                <div class="fob-ship" v-for="(schedule,scheduleKey) in scheduleListDirect" :key="schedule.id + scheduleKey">
                  <div class="overtimeBoat" v-if="schedule.isOvt == 1">
                    {{$t('list.overtimeBoat')}}
                  </div>
                  <!-- ETD部分 -->
                  <div class="item item-1" :style="schedule.state == 0 ? 'font-weight:600' : 'color:#909090'">
                    {{schedule.staticEtdSort ? getStaticTimeDay(schedule.staticEtdSort) : ''}}
                  </div>
                  <!-- 航程部分 -->
                  <div class="item item-7">
                    {{schedule.transTime && schedule.transTime > 0 ? schedule.transTime + $t('list.day') : ''}}
                  </div>
                  <!-- 码头 -->
                  <div class="item item-7" :style="schedule.state == 0 ? '' : 'color:#909090'">
                    <span v-if=" $i18n.locale == 'zh-CN'">{{schedule.polt}}</span>
                    <span v-if=" $i18n.locale == 'en-US'">{{schedule.polTerninalEn}}</span>
                  </div>
                  <!-- ETD -->
                  <!-- <div class="item item-1">
                    {{schedule.staticEtaSort ? getStaticTimeDay(schedule.staticEtaSort) : ''}}
                  </div> -->
                  <!-- 按共舱船公司(航线代码) -->
                  <div class="item item-2" style="display:flex;align-items:center">
                      <ul style="display:flex;flex-wrap:wrap">
                        <!-- routeTitle -->
                        <li v-for="(item,index) in schedule.sameRoutes" :key="index">
                        <!-- item.type === 0  母船 -->
                        <el-tooltip effect="dark" :content="$t('list.mohterShip')" placement="top" v-if="item.type === 0">
                          <span>
                            <span style="font-weight:600">{{item.carrierName}}</span>
                            <span>{{item.disPlayName == '' ?  item.routeCode == "UNDEFINED" ? '(-)' : '(' + item.routeCode + ')' : '(' + item.disPlayName + ')'}}</span>
                          </span>
                        </el-tooltip>

                        <!-- item.flag == '1' 临时共舱-->
                        <el-tooltip effect="dark" :content="$t('list.totalTank')" placement="top" v-if="item.type !== 0 && item.flag == '1'">
                          <span>
                            <span style="color:#ff7676">{{item.carrierName}}</span>
                            <span>{{item.disPlayName == '' ?  item.routeCode == "UNDEFINED" ? '(-)' : '(' + item.routeCode + ')' : '(' + item.disPlayName + ')'}}</span>
                          </span>
                        </el-tooltip>
                          <span v-if="item.type !== 0 && ((item.flag !== 1 && item.flag !== '1') || item.flag == 0)">
                            <span :style="schedule.state == 0 ? '' : 'color:#909090'">{{item.carrierName}}</span>
                            <span :style="schedule.state == 0 ? '' : 'color:#909090'">{{item.disPlayName == '' ?  item.routeCode == "UNDEFINED" ? '(-)' : '(' + item.routeCode + ')' : '(' + item.disPlayName + ')'}}</span>
                          </span>
                          <span v-if="index !== schedule.sameRoutes.length - 1" :style="schedule.state == 0 ? '' : 'color:#909090'">&nbsp;&nbsp;/&nbsp;&nbsp;</span>
                        </li>
                      </ul>
                  </div>              
                  <!-- 大船船名/航次 -->
                  <div class="item item-3">
                    <div v-if="schedule.state == 0">
                        <!-- 船名/航次 -->
                        <!-- <el-popover placement="bottom-start" min-width="300" popper-class="teshuPover" :visible-arrow="false" trigger="hover" :open-delay=300> -->
                          <p slot="reference" class="rightvESS" @click="goToDetail(schedule)" style="color: #007CE3;overflow:hidden;text-overflow:ellipsis;white-space:nowrap" v-title="schedule.info.vessel + '/' + schedule.firstVoyage">
                          {{getMotherShipRouteCode2(schedule.info).vessel.toUpperCase()}}/{{schedule.firstVoyage}}</p>
                          <!-- <el-dialog
                            :visible.sync="DetailsShow"
                            width="40%"
                            :close-on-click-modal="false"
                            :before-close="handleClose">
                             <DetailsList></DetailsList>
                          </el-dialog> -->
                          <!-- <div class="ShipInformation">
                            <p class="ShipInformationp">{{ $t('list.vesselInformation') }}</p>
                            <ul class="shipinfo-UL">
                              <li class="shipinfo_LI">
                                {{ $t('list.vessel') + ':' + getMotherShipRouteCode2(schedule.info).vessel}}
                              </li>
                              <li class="shipinfo_LI">
                                <span class="shipSpan">{{'IMO' + ':' + getMotherShipRouteCode2(schedule.info).imoNumber}}</span>
                                <span class="shipSpanSpeci">{{'MMSi' + ':' + getMotherShipRouteCode2(schedule.info).mmsi}}</span>
                              </li>
                              <li class="shipinfo_LI">
                                <span class="shipSpan">{{$t('list.callSign') + ':' + getMotherShipRouteCode2(schedule.info).callsign}}</span>
                                <span class="shipSpanSpeci">{{$t('list.banner') + ':' + getMotherShipRouteCode2(schedule.info).flag}}</span>
                              </li>
                              <li class="shipinfo_LI runner" v-title="getMotherShipRouteCode2(schedule.info).runner">
                                {{$t('list.manage') + ':' + getMotherShipRouteCode2(schedule.info).runner}}
                              </li>
                            </ul>
                          </div> -->
                        <!-- </el-popover> -->
                    </div>
                    <div v-else :style="schedule.state == 0 ? '' : 'color:#909090'">
                        <!-- 船期状态：state == 0正常，1空班 -->
                        {{$t('list.stop')}}
                    </div>
                  </div>
                  <!-- 状态 -->
                  <div class="item item-4" @click="goToDetail(schedule)" style="cursor: pointer;">
                    <!-- <el-tooltip effect="dark" placement="top"> -->
                        <!-- <div slot="content">
                          <span>ETD: {{schedule.info.etd}}</span>
                        </div> -->
                        <div style="position: relative;width: 100%;height:20px" v-if="schedule.state == 0">
                          <!-- 准点 或者提前-->
                          <img src="../assets/images/_table/block.png" class="block_zhund" v-if="schedule.isLate == 0 || schedule.isLate == 2 " />

                          <!-- 延误 -->
                          <img src="../assets/images/_table/red.png" class="red_yanc" v-if="schedule.isLate == 1" />

                          <!-- 准点 -->
                          <span style="position: absolute;left:50%;top:50%;transform: translate(-50%,-50%);margin-left:2px;color: #ffffff;" v-if="schedule.isLate == 0" >{{schedule.differDay > 0 ? $t('list.onTime') + schedule.differDay + $t('list.day') : $t('list.onTime')}}</span>
                          <!-- 提前 -->
                          <span style="position: absolute;left:50%;top:50%;transform: translate(-50%,-50%);margin-left:2px;color: #ffffff;" v-if="schedule.isLate == 2 && $i18n.locale == 'zh-CN'" >{{schedule.differDay > 0 ? '提前' + schedule.differDay + '天' : '提前'}}</span>
                          <span style="position: absolute;left:50%;top:50%;transform: translate(-50%,-50%);margin-left:2px;color: #ffffff;" v-if="schedule.isLate == 2 && $i18n.locale == 'en-US'" >{{schedule.differDay > 0 ? schedule.differDay + ' day early' : '提前'}}</span>
                          <!-- 延误 -->
                          <span style="position: absolute;left:50%;top:50%;transform: translate(-50%,-50%);margin-left:2px;color: #ffffff;" v-if="schedule.isLate == 1 " >{{schedule.differDay > 0 ? $t('list.delay') + schedule.differDay + $t('list.day') : $t('list.delay')}}</span>
                        </div>
                      <!-- </el-tooltip>                     -->
                  </div>
                  <!-- 认证 -->
                  <div class="item item-5" style="padding-left:11px;padding-top: 3px;text-align: center;">
                    <el-tooltip effect="dark" :content="$t('list.checked')" placement="top">
                      <img v-if="schedule.isAsync == 1" src="../assets/images/_table/zhengq.png" class="zhengq"/>
                    </el-tooltip>
                  </div>                  
                  <!-- 跳转船舶定位按钮 -->
                  <div class="item item-6">
                    <p @click="goScheduleDetails(schedule)" class="details_button hoverButt" v-if="schedule.state == 0"></p>
                  </div>
                </div>
                <!-- 中转方案列表部分 111 -->
                <div class="fob-ship-title" v-if="scheduleListTransit.length == 0 ? false : true">
                  <span>
                    {{ $t('list.TransitPlan') + '(' + zhongzhuan + $t('list.group') + ')'}}
                  </span>
                </div>
                <div class="fob-ship" v-for="(schedule,scheduleKey) in scheduleListTransit" :key="schedule.id + scheduleKey" >
                  <div class="overtimeBoat" v-if="schedule.isOvt == 1">
                    {{$t('list.overtimeBoat')}}
                  </div>
                  <!-- ETD部分 -->
                  <div class="item item-1" :style="schedule.state == 0 ? 'font-weight:600' : 'color:#909090'">
                    {{schedule.staticEtdSort ? getStaticTimeDay(schedule.staticEtdSort) : ''}}
                  </div>
                  <!-- 航程部分 -->
                  <div class="item item-7">
                    {{schedule.transTime && schedule.transTime > 0 ? schedule.transTime + $t('list.day') : ''}}
                  </div>
                  <!-- 码头 -->
                  <div class="item item-7" :style="schedule.state == 0 ? '' : 'color:#909090'">
                    <span v-if=" $i18n.locale == 'zh-CN'">{{schedule.polt}}</span>
                    <span v-if=" $i18n.locale == 'en-US'">{{schedule.polTerninalEn}}</span>
                  </div>
                  <!-- ETD -->
                  <!-- <div class="item item-1">
                    {{schedule.staticEtaSort ? getStaticTimeDay(schedule.staticEtaSort) : ''}}
                  </div> -->
                  <!-- 按共舱船公司(航线代码) -->
                    <div class="item item-2">
                      <div style="display:flex;align-items:center;width:100%;height:100%">
                        <ul style="display:flex;flex-wrap:wrap;align-items:center;width:35%;overflow: hidden">
                          <!-- <li v-for="(trans,transKey) in schedule.routeCodes" :key="transKey + 1">
                              <span>{{schedule.info.carrierName}}</span>
                              <span>{{trans.disPlayName == '' ?  trans.routeCode == "UNDEFINED" ? '(-)' : '(' + trans.routeCode + ')' : '(' + trans.disPlayName + ')'}}</span>
                              <span v-if="transKey !== schedule.routeCodes.length - 1">&nbsp;&nbsp;/&nbsp;&nbsp;</span>
                          </li> -->
                          <li>
                              <span :style="schedule.state == 0 ? '' : 'color:#909090'">{{schedule.info.carrierName}}</span>
                              <span :style="schedule.state == 0 ? '' : 'color:#909090'">{{schedule.routeCodes[0].disPlayName == '' ?  schedule.routeCodes[0].routeCode == "UNDEFINED" ? '(-)' : '(' + schedule.routeCodes[0].routeCode + ')' : '(' + schedule.routeCodes[0].disPlayName + ')'}}</span>
                          </li>                        </ul>
                        <!-- <el-tooltip effect="dark" placement="right"> -->
                          <!-- <div slot="content">
                            <P v-if="schedule.routeCodes.length > 1" :style="{marginBottom:schedule.routeCodes.length > 2 ? '5px' : ''}">{{$t('list.FirstLeg')}}: {{schedule.routeCodes[0].portName}}</P>
                            <P v-if="schedule.routeCodes.length > 2" :style="{marginBottom:schedule.routeCodes.length > 3 ? '5px' : ''}">{{$t('list.secondLeg')}}: {{schedule.routeCodes[1].portName}}</P>
                            <P v-if="schedule.routeCodes.length > 3" :style="{marginBottom:schedule.routeCodes.length > 4 ? '5px' : ''}">{{$t('list.thirdLeg')}}: {{schedule.routeCodes[2].portName}}</P>
                            <P v-if="schedule.routeCodes.length > 4" :style="{marginBottom:schedule.routeCodes.length > 5 ? '5px' : ''}">{{$t('list.fourLeg')}}: {{schedule.routeCodes[3].portName}}</P>
                            <P v-if="schedule.routeCodes.length > 5" :style="{marginBottom:schedule.routeCodes.length > 6 ? '5px' : ''}">{{$t('list.fiveLeg')}}: {{schedule.routeCodes[4].portName}}</P>
                          </div> -->
                          <div style="cursor:pointer;margin-left:10px;min-width:25px;max-width:35px;text-align:center">
                            <p v-if="schedule.state == 1" class="kongban"></p>
                            <p style="color: #007CE3;font-size: 12px;"  @click="goToDetail(schedule)">{{schedule.routeCodes.length > 0 ? schedule.routeCodes.length + $t('list.period') : ''}}</p>
                            <p style="width:100%;height:1px;background:#007CE3;"></p>
                          </div>
                        <!-- </el-tooltip> -->
                        <div style="margin-left:20px;color: #282828;font-size:12px">{{ $t('list.Transit') }}</div>                   
                        <div style="margin-left:20px;width:30%;color: #909090" v-if="schedule.routeCodes[0].flag !='FEEDER'">
                          {{schedule.routeCodes[0].portName}}
                        </div>
                        <div v-else class="feeder" v-title="'NANSHA' + ' [' + $t('list.barge') + '] ' + 'ETD:' + (schedule.etd.split(' ')[0]).substring(5) + ' ' + getWeek(schedule.etd)">
                          {{'NANSHA' + ' [' + $t('list.barge') + '] ' + 'ETD:' + (schedule.etd.split(' ')[0]).substring(5) + ' ' + getWeek(schedule.etd)}}
                        </div>    
                      </div>
                    </div>              
                    <!-- 大船船名/航次 -->
                    <div class="item item-3">
                      <div v-if="schedule.state == 0">
                          <!-- 船名/航次 -->
                          <!-- <el-popover placement="bottom-start" min-width="300" popper-class="teshuPover" :visible-arrow="false" trigger="hover" :open-delay=300> -->
                            <p slot="reference" class="rightvESS" @click="goToDetail(schedule)" style="color: #007CE3;overflow:hidden;text-overflow:ellipsis;white-space:nowrap" v-title="schedule.info.vessel + '/' + schedule.firstVoyage">
                            {{getMotherShipRouteCode2(schedule.info).vessel.toUpperCase()}}/{{schedule.firstVoyage}}</p>
                            
                            <!-- <div class="ShipInformation">
                              <p class="ShipInformationp">{{ $t('list.vesselInformation') }}</p>
                              <ul class="shipinfo-UL">
                                <li class="shipinfo_LI">
                                  {{ $t('list.vessel') + ':' + getMotherShipRouteCode2(schedule.info).vessel}}
                                </li>
                                <li class="shipinfo_LI">
                                  <span class="shipSpan">{{'IMO' + ':' + getMotherShipRouteCode2(schedule.info).imoNumber}}</span>
                                  <span class="shipSpanSpeci">{{'MMSi' + ':' + getMotherShipRouteCode2(schedule.info).mmsi}}</span>
                                </li>
                                <li class="shipinfo_LI">
                                  <span class="shipSpan">{{$t('list.callSign') + ':' + getMotherShipRouteCode2(schedule.info).callsign}}</span>
                                  <span class="shipSpanSpeci">{{$t('list.banner') + ':' + getMotherShipRouteCode2(schedule.info).flag}}</span>
                                </li>
                                <li class="shipinfo_LI runner" v-title="getMotherShipRouteCode2(schedule.info).runner">
                                  {{$t('list.manage') + ':' + getMotherShipRouteCode2(schedule.info).runner}}
                                </li>
                              </ul>
                            </div> -->
                          <!-- </el-popover> -->
                      </div>
                      <div v-else :style="schedule.state == 0 ? '' : 'color:#909090'">
                          <!-- 船期状态：state == 0正常，1空班 -->
                          {{$t('list.stop')}}
                      </div>
                    </div>
                    <!-- 状态 -->
                    <div class="item item-4" @click="goToDetail(schedule)" style="cursor: pointer;">
                      <!-- <el-tooltip effect="dark" placement="top"> -->
                          <!-- <div slot="content">
                            <span>ETD: {{schedule.info.etd}}</span>
                          </div> -->
                          <div style="position: relative;width: 100%;height:20px" v-if="schedule.state == 0">
                            <!-- 准点 或者提前-->
                            <img src="../assets/images/_table/block.png" class="block_zhund" v-if="schedule.isLate == 0 || schedule.isLate == 2 " />

                            <!-- 延误 -->
                            <img src="../assets/images/_table/red.png" class="red_yanc" v-if="schedule.isLate == 1" />

                            <!-- 准点 -->
                            <span style="position: absolute;left:50%;top:50%;transform: translate(-50%,-50%);margin-left: 2px;color: #ffffff;" v-if="schedule.isLate == 0" >{{schedule.differDay > 0 ? $t('list.onTime') + schedule.differDay + $t('list.day') : $t('list.onTime')}}</span>
                            <!-- 提前 -->
                            <span style="position: absolute;left:50%;top:50%;transform: translate(-50%,-50%);margin-left: 2px;color: #ffffff;" v-if="schedule.isLate == 2 " >{{schedule.differDay > 0 ? $t('list.advance') + schedule.differDay + $t('list.day') : $t('list.advance')}}</span>
                            <!-- 延误 -->
                            <span style="position: absolute;left:50%;top:50%;transform: translate(-50%,-50%);margin-left: 2px;color: #ffffff;" v-if="schedule.isLate == 1 " >{{schedule.differDay > 0 ? $t('list.delay') + schedule.differDay + $t('list.day') : $t('list.delay')}}</span>
                          </div>
                        <!-- </el-tooltip>                     -->
                    </div>
                    <!-- 认证 -->
                    <div class="item item-5" style="padding-left:11px;padding-top: 3px;text-align: center;">
                      <el-tooltip effect="dark" :content="$t('list.checked')" placement="top">
                        <img v-if="schedule.isAsync == 1" src="../assets/images/_table/zhengq.png" class="zhengq"/>
                      </el-tooltip>
                    </div>                  
                    <!-- 跳转船舶定位按钮 -->
                    <div class="item item-6">
                      <p @click="goScheduleDetails(schedule)" class="details_button hoverButt" v-if="schedule.state == 0">
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <el-dialog
        class="DetailsShow"
        :visible.sync="DetailsShow"
        width="780px"
        :close-on-click-modal="false"
        append-to-body>
        <!-- <Loading v-if="loading" style="z-index:9999"></Loading> -->
        <DetailsList :datailInfometionList="datailInfometionList" @loadingDiagio="loadingDiagio" @goScheduleDetails="goScheduleDetails"></DetailsList>
      </el-dialog>
    <!-- 数据正在查询，请稍后在试-模态框 -->
    <!-- <el-dialog class="dialogDate" :visible.sync="dialogDate" ref="dialogDate" width="300px" append-to-body
      :close-on-click-modal="false" :close-on-press-escape="false" :show-close="false">
      <div class="dataquery">
        <p class="proTitle">{{ $t('list.queried') }}</p>
      </div>
    </el-dialog> -->

    <!-- 点赞功能 -->
    <!-- <div class="like_footer" id="like_footer" v-if="!loading">
      <div class="giveLike" v-if="isLikeGive">
        <div class="thumbNews">
          <el-popover
            placement="top-start"
            trigger="click"
            width="224"
          >
            <div class="popver_image">
              <div class="heade_start">
                <div class="heade_left">
                  <img src="../assets/images/headpor.png" class="heade_left_image"/>
                </div>
                <div class="heade_right">
                  <p class="heade_right_p1">董修通</p>
                  <p class="heade_right_p2">上海叁陆伍<img src="../assets/images/_table/re_ze.png" class="heade_right_image"/></p>
                </div>
              </div>
              <div class="header_center">从业经验：22年</div>
              <div class="header_end">
                <p>专业度：</p>
                <img src="../assets/images/_table/xing.png" class="header_end_image"/>
                <img src="../assets/images/_table/xing.png" class="header_end_image"/>
                <img src="../assets/images/_table/xing.png" class="header_end_image"/>
                <img src="../assets/images/_table/xing.png" class="header_end_image"/>
              </div>
            </div>
            <img slot="reference" src="../assets/images/headpor.png" class="charaImage"/>
          </el-popover>          
          <img src="../assets/images/headpor.png" class="charaImage"/>
          <img src="../assets/images/headpor.png" class="charaImage"/>
          <p class="p1">{{$t('list.shippQua')}}&nbsp;&nbsp;16{{$t('list.groups')}}<i class="el-icon-circle-check icon_circe"></i></p>
          <p class="p2">3{{$t('list.beGroups')}}</p>
          <div class="like">
            <img src="../assets/images/_table/small_huang.png" class="image_ll">
            <p class="p_ll">10</p>
            <img src="../assets/images/_table/die_white.png" class="image_ll">
            <p class="p_ll">10</p>
          </div>
        </div>
        <i class="el-icon-close icon_close" @click="closeThumb()"></i>
      </div>
      <div v-if="isFooteLike" class="dianzhan" @click="openThumb()">
        <img src="../assets/images/_table/larger_white.png" class="dianzhan_image">
      </div>
    </div> -->
  </div>
</template>

<script>
  import {
    fips
  } from "crypto"
  import {
    setTimeout
  } from "timers"
  import Loading from "@components/loading"
  import DetailsList from "./DetailsList"
  export default {
    data() {
      return {
        LeftHeight:'',
        datailInfometionList:{},
        DetailsShow:false,
        dialogDate: false,
        scheduleListDirect: [],
        scheduleListTransit: [],
        total: 0,
        loading: true,
        haveRes: true,
        weekBanner: [],
        companyList: [],
        polTerninalList: [],
        polTerninalListEn: [],
        podTerninalList: [],
        podTerninalListEn: [],
        range: 0,
        minTime: 0,
        maxTime: 0,
        allCompany: false,
        allPol: false,
        allPod: false,
        isTransitGroup: [],
        isStopGroup: [],
        etdGroup: [],
        etaGroup: [], //"1", "2", "3", "4", "5", "6", "7"
        companyGroup: [],
        polGroup: [],
        podGroup: [],
        tempList: [],
        tempListTransit: [],
        activeNames: ["1", "2", "3"],
        totalWeeks: 4,
        isTransitGroup2: [true, true],
        isStopGroup2: [true, true],
        etdGroup2: [true, true, true, true, true, true, true],
        etaGroup2: [true, true, true, true, true, true, true],
        allCompanyDisabled: true,
        allPolDisabled: true,
        allPodDisabled: true,
        hideFilterFlag: false,
        isZhakai: false, //本来默认收起
        userId:this.getCookie("authId") != null && this.getCookie("authId") != ""? this.getCookie("authId"): 0,
        dateType: "1",
        weekCountList: [],
        zhida: 0,
        zhongzhuan: 0,
        isFirstInit: true,
        weeksOut: '',
        newLang: '中文',
        weekId: '',
        recordType: 0,
        getSearchTime: '',
        isLikeGive: true, //展开得点赞
        isFooteLike: false //收起得点赞
      };
    },
    components: {
      Loading,
      DetailsList
    },
    computed: {
      language() {
        return localStorage.getItem('language');
      }
    },
    methods: {
      getDays(val){
            console.log(val)
            var oDate1;
            var iDays;
            oDate1= strDateStart.split(' ');
            oDate1= oDate1[0].substring(4);
            console.log(oDate1)
            return oDate1 ;
        },
      //详情页弹窗
      goToDetail(schedule){
        console.log(schedule)
        var id = $(document)
          .find(".animateItem")
          .find(".active")
          .attr("id");
          console.log(id)
        var startTime = id.split("_")[4].split("to")[0];
        var sm = startTime.split("-")[1];
        var sd = startTime.split("-")[2];
        if (sm < 10) {
          sm = "0" + sm;
        }
        if (sd < 10) {
          sd = "0" + sd;
        }
        startTime = startTime.split("-")[0] + "-" + sm + "-" + sd;

        var userId = this.userId ? this.userId : null;
        var userIp = returnCitySN.cip;
        var userType = this.getCookie('authId') ? '0' : '1';
        //列表详情获取
          this.loading = true;
          // this.DetailsShow = true;
          this.$Axios.get(this.GLOBAL.url + "schedules/web/details?id=" + schedule.voyageId + "&userId=" + userId + "&userIp=" + userIp+ "&userType=" + userType + "&startTime=" + startTime,{
          headers: {
              Authorization: this.getToken()
            },
          }).then(res => {
            // res.data.content[0] = schedule;
            // this.$nextTick(() => {
              this.datailInfometionList = Object.assign(res.data.content[0], {schedule});
              this.DetailsShow = true;
                // this.loading = true;
            // })
            // this.$bus.emit("datailInfometionList", this.datailInfometionList)
        })
        
      },
      loadingDiagio(){
        this.loading = false
      },
      //弹窗关闭前的回调
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
              done();
          })
          .catch(_ => {
          });
      },
      typeSort(attr){
        return function(a,b){
          var ai = parseInt(a[attr]);
          var bi = b[attr];
          var c = 0
          return  a[attr].localeCompare(b[attr])
        }
      },
      sortmUC(attr){
        debugger
        return function(a,b){
          var ai = parseInt(a[attr]);
          var bi = parseInt(b[attr]);
          return  ai > bi
        }
      },
      // 合并
      merge(arr) {
        $.each(arr, function (k, v) {
          $.each(arr, function (i, j) {
            if (arr) {

            }
          })
        })
      },
      // 取大船航线code
      getMotherShipRouteCode(info) {
        var littleShip = [
          "WATER",
          "TRACE",
          "FEEDER",
          "BARGE",
          "FEEDER SERVICE FAR EAST",
          "FEEDER SERVICE FESEA",
          "RAIL"
        ];
        var routeCode = "";
        var voyage = "";
        var vessel = "";
        // 两种条件判断
        // 1，航线code
        // 2，船名航次
        // 航线code、船名航次是否有效，不为空，不为空串，不属于内支线，陆运等
        // 如果航线code不为空或者船名航次有效
        if (
          (info.routeCode &&
            littleShip.indexOf(info.routeCode.toUpperCase()) == -1) ||
          (info.voyage &&
            info.vessel &&
            littleShip.indexOf(info.voyage.toUpperCase()) == -1 &&
            littleShip.indexOf(info.vessel.toUpperCase()) == -1)
        ) {
          routeCode = info.routeCode;
          voyage = info.voyage;
          vessel = info.vessel;
        } else if (
          (info.transitRouteCode &&
            littleShip.indexOf(info.transitRouteCode.toUpperCase()) == -1) ||
          (info.voyageAfterTransit &&
            info.vesselAfterTransit &&
            littleShip.indexOf(info.voyageAfterTransit.toUpperCase()) == -1 &&
            littleShip.indexOf(info.vesselAfterTransit.toUpperCase()) == -1)
        ) {
          routeCode = info.transitRouteCode;
          voyage = info.voyageAfterTransit;
          vessel = info.vesselAfterTransit;
        } else if (
          (info.secondTransitRouteCode &&
            littleShip.indexOf(info.secondTransitRouteCode.toUpperCase()) ==
            -1) ||
          (info.secondVoyageAfterTransit &&
            info.secondVesselAfterTransit &&
            littleShip.indexOf(info.secondVoyageAfterTransit.toUpperCase()) ==
            -1 &&
            littleShip.indexOf(info.secondVesselAfterTransit.toUpperCase()) == -1)
        ) {
          routeCode = info.secondTransitRouteCode;
          voyage = info.secondVoyageAfterTransit;
          vessel = info.secondVesselAfterTransit;
        } else if (
          (info.thirdTransitRouteCode &&
            littleShip.indexOf(info.thirdTransitRouteCode.toUpperCase()) == -1) ||
          (info.thirdVoyageAfterTransit &&
            info.thirdVesselAfterTransit &&
            littleShip.indexOf(info.thirdVoyageAfterTransit.toUpperCase()) ==
            -1 &&
            littleShip.indexOf(info.thirdVesselAfterTransit.toUpperCase()) == -1)
        ) {
          routeCode = info.thirdTransitRouteCode;
          voyage = info.thirdVoyageAfterTransit;
          vessel = info.thirdVoyageAfterTransit;
        }
        return {
          routeCode: routeCode ? routeCode : "-",
          voyage: voyage ? voyage : "-",
          vessel: vessel ? vessel : "-"
        };
      },
      // 分表后取大船航线code
      getMotherShipRouteCode2(info) {
        var littleShip = [
          "WATER",
          "TRACE",
          "FEEDER",
          "BARGE",
          "FEEDER SERVICE FAR EAST",
          "FEEDER SERVICE FESEA",
          "RAIL",
          "UNDEFINED",
          "-",
          "FEEDER VESSEL",
          "TRUCK",
        ];
        var routeCode = "";
        var voyage = "";
        var vessel = "";
        var mmsi = "";
        var imoNumber = "";
        var callsign = "";
        var flag = "";
        var runner = "";
        // 两种条件判断
        // 1，航线code
        // 2，船名航次
        // 航线code、船名航次是否有效，不为空，不为空串，不属于内支线，陆运等
        // 如果航线code不为空或者船名航次有效
        let length = info.transitInfoList.length;
        let list = info.transitInfoList;
        if (
          (info.firstRouteCode &&
            littleShip.indexOf(info.firstRouteCode.toUpperCase()) == -1) ||
          (info.voyage &&
            info.vessel &&
            littleShip.indexOf(info.voyage.toUpperCase()) == -1 &&
            littleShip.indexOf(info.vessel.toUpperCase()) == -1) ||
          length == 0
        ) {
          routeCode = info.routeCode;
          voyage = info.voyage;
          vessel = info.vessel;
          mmsi = info.mmsi;
          imoNumber = info.imoNumber;
          callsign = info.callsign;
          flag = info.flag;
          runner = info.runner;
        } else if (
          (length > 0 &&
            (list[0].transitRouteCode &&
              littleShip.indexOf(list[0].transitRouteCode.toUpperCase()) ==
              -1)) ||
          (length > 0 && list[0].transitVessel &&
            list[0].transitVoyage &&
            littleShip.indexOf(list[0].transitVessel.toUpperCase()) == -1 &&
            littleShip.indexOf(list[0].transitVoyage.toUpperCase()) == -1)
        ) {
          routeCode = list[0].transitRouteCode;
          voyage = list[0].transitVoyage;
          vessel = list[0].transitVessel;
          mmsi = list[0].mmsi;
          imoNumber = list[0].imoNumber;
          callsign = list[0].callsign;
          flag = list[0].flag;
          runner = list[0].runner;
        } else if (
          (length > 1 &&
            (list[1].transitRouteCode &&
              littleShip.indexOf(list[1].transitRouteCode.toUpperCase()) ==
              -1)) ||
          (length > 1 && list[1].transitVessel &&
            list[1].transitVoyage &&
            littleShip.indexOf(list[1].transitVessel.toUpperCase()) == -1 &&
            littleShip.indexOf(list[1].transitVoyage.toUpperCase()) == -1)
        ) {
          routeCode = list[1].transitRouteCode;
          voyage = list[1].transitVoyage;
          vessel = list[1].transitVessel;
          mmsi = list[1].mmsi;
          imoNumber = list[1].imoNumber;
          callsign = list[1].callsign;
          flag = list[1].flag;
          runner = list[1].runner;
        } else if (
          (length > 2 &&
            (list[2].transitRouteCode &&
              littleShip.indexOf(list[2].transitRouteCode.toUpperCase()) ==
              -1)) ||
          (length > 2 && list[2].transitVessel &&
            list[2].transitVoyage &&
            littleShip.indexOf(list[2].transitVessel.toUpperCase()) == -1 &&
            littleShip.indexOf(list[2].transitVoyage.toUpperCase()) == -1)
        ) {
          routeCode = list[2].transitRouteCode;
          voyage = list[2].transitVoyage;
          vessel = list[2].transitVessel;
          mmsi = list[2].mmsi;
          imoNumber = list[2].imoNumber;
          callsign = list[2].callsign;
          flag = list[2].flag;
          runner = list[2].runner;
        }
        var result = {
          routeCode: (!routeCode || routeCode == 'UNDEFINED') ? "-" : routeCode,
          voyage: voyage ? voyage : "-",
          vessel: vessel ? vessel : "-",
          mmsi: mmsi,
          imoNumber: imoNumber,
          callsign: callsign,
          flag: flag,
          runner: runner,
        }
        return result;
      },
      //获取搜索结果
      getSearchResult(params, id) {
        var that = this;
        //刷新标签页
        this.weekTabInit(id, function () {
          that.getTotalCount(params);
          var weekArr = $("div[id^='week_tab_']");
          var eqindex = 0;
          //日期格式化
          var y = params.start.getFullYear();
          var m = params.start.getMonth() + 1;
          var d = params.start.getDate();
          if (m < 10) {
            m = "0" + m;
          }
          if (d < 10) {
            d = "0" + d;
          }
          var startTime = y + "-" + m + "-" + d;
          var endTime = "";
          //  拼接参数，是离港日还是到港日
          if (params.dateType == 1) {
            //如果查的是离港日，搜索时间就是起始时间，结束时间就是周tab的第一个结束时间，当前周日
            if (id == undefined || typeof id != "string") {
              //如果没有id那么就是首次进入页面
              //定位当前搜索日期属于哪一个标签页
              var searchDate = new Date(that.$parent.$refs.searchBar.start);
              var YYS = searchDate.getFullYear() + '-';
              var MMS = (searchDate.getMonth() + 1 < 10 ? '0' + (searchDate.getMonth() + 1) : searchDate.getMonth() + 1) + '-';
              var DDS = (searchDate.getDate() < 10 ? '0' + (searchDate.getDate()) : searchDate.getDate());              
              that.getSearchTime = YYS + MMS + DDS
              var compareStr = searchDate.getTime();
              $.each(weekArr, function (x, y) {
                var compareStr2 = new Date($(y).attr("id").split("_")[4].split("to")[0].replace(/-/g, "/"));
                var compareStr3 = new Date($(y).attr("id").split("_")[4].split("to")[1].replace(/-/g, "/"));
                if (compareStr <= compareStr3.getTime() && compareStr >= compareStr2.getTime()) {
                  eqindex = x;
                }
              });
              that.changeWeek(weekArr.eq(eqindex).attr("id"))
              var idstr = weekArr.eq(eqindex).attr("id").split("_")[4].split("to")[0];
              if (idstr.indexOf("-") != -1) {
                idstr = idstr.replace(/-/g, "/");
              }
              var sss = new Date(idstr);
              var y = sss.getFullYear();
              var m = sss.getMonth() + 1;
              var d = sss.getDate();
              if (m < 10) {
                m = "0" + m;
              }
              if (d < 10) {
                d = "0" + d;
              }
              startTime = y + "-" + m + "-" + d;
              var idstr = weekArr.eq(eqindex).attr("id").split("_")[4].split("to")[1];
              if (idstr.indexOf("-") != -1) {
                idstr = idstr.replace(/-/g, "/");
              }
              params.end = new Date(idstr);
            } else {
              var darr = id.split("_");
              var dateStr = darr[darr.length - 1].split("to")[0];
              if (dateStr.indexOf("-") != -1) {
                dateStr = dateStr.replace(/-/g, "/");
              }
              params.start = new Date(dateStr);
              var y = params.start.getFullYear();
              var m = params.start.getMonth() + 1;
              var d = params.start.getDate();
              if (m < 10) {
                m = "0" + m;
              }
              if (d < 10) {
                d = "0" + d;
              }
              startTime = y + "-" + m + "-" + d;
              var dateStr = darr[darr.length - 1].split("to")[1];
              if (dateStr.indexOf("-") != -1) {
                dateStr = dateStr.replace(/-/g, "/");
              }
              params.end = new Date(dateStr);
            }
          } else {
            //如果查的是到港日，搜索时间就是结束时间，开始时间就是周tab的第一个开始时间
            if (id == undefined || typeof id != "string") {
              var idstr = weekArr.eq(weekArr.length - 1).attr("id").split("_")[4].split("to")[0];
              if (idstr.indexOf("-") != -1) {
                idstr = idstr.replace(/-/g, "/");
              }
              params.start = new Date(idstr);
              var y = params.start.getFullYear();
              var m = params.start.getMonth() + 1;
              var d = params.start.getDate();
              if (m < 10) {
                m = "0" + m;
              }
              if (d < 10) {
                d = "0" + d;
              }
              startTime = y + "-" + m + "-" + d;
              var idstr = weekArr.eq(weekArr.length - 1).attr("id").split("_")[4].split("to")[1];
              if (idstr.indexOf("-") != -1) {
                idstr = idstr.replace(/-/g, "/");
              }
              params.end = new Date(idstr);
            } else {
              var darr = id.split("_");
              var dateStr = darr[darr.length - 1].split("to")[0];
              if (dateStr.indexOf("-") != -1) {
                dateStr = dateStr.replace(/-/g, "/");
              }
              params.start = new Date(dateStr);
              var y = params.start.getFullYear();
              var m = params.start.getMonth() + 1;
              var d = params.start.getDate();
              if (m < 10) {
                m = "0" + m;
              }
              if (d < 10) {
                d = "0" + d;
              }
              startTime = y + "-" + m + "-" + d;
              var dateStr = darr[darr.length - 1].split("to")[1];
              if (dateStr.indexOf("-") != -1) {
                dateStr = dateStr.replace(/-/g, "/");
              }
              params.end = new Date(dateStr);
            }
          }
          //日期格式化
          var y = params.end.getFullYear();
          var m = params.end.getMonth() + 1;
          var d = params.end.getDate();
          if (m < 10) {
            m = "0" + m;
          }
          if (d < 10) {
            d = "0" + d;
          }
          endTime = y + "-" + m + "-" + d;

          //确定当前tab
          //id不为空是切换标签页时的搜索
          if (id != undefined && typeof id == "string") {
            $("#" + id).addClass("active");
            // $(".fob-ship-nodata").css("height",$(".hdtxt1").next().css("height"));
            that.haveRes = true;
          } else {
            that.recordType = 1 //说明当前是点击首页查询 和当前页的搜索查询的
            // id为空是点击搜索按钮时的搜索
            // 搜索时清空复选框
            // 详情页回退用户的过滤条件在这里取
            $("div[id^='week_tab_']").removeClass("active");
            if (that.$parent.$refs.searchBar.dateType == "1") {
              weekArr.eq(eqindex).addClass("active");
            } else {
              weekArr.eq(weekArr.length - 1).addClass("active");
            }
          }
          let userType = that.getCookie('authId') ? '0' : '1';
          that.loading = true
          // 获取船期列表接口
          that.$Axios.get(that.GLOBAL.url +"schedules/web/schedule?polCode=" +params.polId +"&podCode=" +params.podId +"&startTime=" +startTime +"&dateType=" +params.dateType +"&endTime=" +endTime +"&userType=" +userType +"&userId=" +that.userId +"&recordType=" +that.recordType +"&searchTime=" +that.getSearchTime +"&userIp=" +returnCitySN.cip +"&weeksOut=" + that.weeksOut,{
            headers: {
                Authorization: that.getToken()
          },
          }).then(res => {
              var data = res.data
              if (data.status == 1) {
                that.recordType = 0 //搜索传参初始化为0
                that.companyList = [] //船公司筛选情况
                that.polTerninalList = [] //起运港筛选情况
                that.podTerninalList = [] //目的港筛选情况
                that.polTerninalListEn = [] //英语起运港筛选情况
                that.podTerninalListEn = [] //英语目的港筛选情况
                that.zhida = 0 //初始直达数为0
                // 这里处理的共仓，特别恶心，这里注释多写点
                var ids = []; // 这个ids是根据共仓条件生成的一个唯一字符串
                var schedules = []; // 根据共仓条件处理完的船期数据
                var transTimeList = []; // 全部船期的最小和最大航程，左边筛选条件的最大值和最小值
                data.content.direct = that.unique(data.content.direct); // 去重，不知道起没起作用

                var idsTransit = []; // 这个ids是根据共仓条件生成的一个唯一字符串
                var schedulesTransit = []; // 根据共仓条件处理完的船期数据
                data.content.transit = that.unique(data.content.transit); // 去重，不知道起没起作用

                //data.content = that.merge(data.content);// 把码头不同其他字段相同的数据合并为一条，比如原来是南港和北港两条数据，合并为一条 南港/北港
                // 循环每一条，找这一条有没有共仓的船期  
                //(循环直达)
                $.each(data.content.direct, function (k, v) {
                  // 判断是有船还是空班
                  if (v.state == '0') {
                    v.state = '0' //有船
                  } else {
                    v.state = '1' //空班
                  }
                  // 这条船期是不是已经处理过了
                  var totalDuration = "";
                  if (ids.indexOf(v.id) == -1) {
                    // 如果没处理过，继续走
                    // 判断是不是母船，共仓的条件是，pol+pod+船名+同一周
                    // 如果共仓，多个船公司共同经营这一艘船，需要判断这艘船是属于哪家船公司的
                    // 母船属于哪家船公司是去一个网站爬取的
                    if (v.carrierName == v.motherShipScac) {
                      // 如果母船所属船公司等于当前的船公司，把scac前面拼一个0，做排序用，这个船公司就会排在第一位
                      v.scac = "0" + v.scac;
                    }
                    var motherShipScacs = [v.scac + "@" + v.motherShipScac];
                    var carrierNames = [v.scac + "@" + v.carrierName];
                    // logo名跟四字码一样，如pabv.png
                    var logos = [];
                    // var logos = [v.scac];
                    // 拼接出来的航线名
                    var routeCodeStr = "";
                    // 航线list，拼上scac做排序
                    var routeCodeList = [
                      v.scac + "@" + that.getMotherShipRouteCode2(v).routeCode
                    ];
                    // 码头list，拼上scac做排序
                    var polterminalList = [
                      v.scac + "@" + v.polTerninal
                    ];
                    var podterminalList = [
                      v.scac + "@" + v.podTerninal
                    ];
                    // 公司四字码
                    var scacs = [v.scac];
                    // 公司名集合，里面是scac和名字，详情需要用到这两个参数
                    var companyNameList = [{
                      scac: v.scac,
                      name: v.carrierName
                    }];
                    // 航线代码list，拼上scac做排序
                    var paramList = [
                      v.scac + "@" + that.getMotherShipRouteCode2(v).routeCode
                    ];
                    // ETA,ETD的list，拼上scac做排序
                    var timeList = [v.scac + "@" + v.etd + "@" + v.eta];
                    //
                    var timeSort = [v.scac + "@" + v.staticEtdSort + "@" + v.staticEtaSort]
                    //
                    var EtdEtASort = [v.scac + "@" + v.staticEtd + "@" + v.staticEta]
                    // 延误拼上scac做排序
                    var isLateSort = [v.scac + "@" + v.isLate]
                    // 航次list，拼上scac做排序
                    var voyageList = [
                      v.scac + "@" + that.getMotherShipRouteCode2(v).voyage
                    ];
                    // 航程list，拼上scac做排序
                    var transitTimeList = [v.scac + "@" + v.totalDuration];
                    // 离港日星期list，拼上scac做排序
                    var dweekList = [v.scac + "@" + v.etdWeek];
                    // 到港日星期list，拼上scac做排序
                    var aweekList = [v.scac + "@" + v.etaWeek];
                    // 我定义的id的list，拼上scac做排序
                    var idList = [v.scac + "@" + v.id];
                    // 第一艘船名
                    var firstVoyage = "";
                    // 公司名list
                    var cnameList = [];
                    // 航线正序排序
                    routeCodeList.sort();
                    // 时间正序排序
                    timeSort.sort()
                    timeList.sort();
                    EtdEtASort.sort()
                    isLateSort.sort()
                    // 航次正序排序
                    voyageList.sort();
                    // id正序排序
                    idList.sort();
                    // 航行时间正序排序
                    transitTimeList.sort();
                    // 离港星期正序排序
                    dweekList.sort();
                    // 到港星期正序排序
                    aweekList.sort();
                    polterminalList.sort();
                    podterminalList.sort();
                    // 取到第一个航次里的航次名，分割出来的0是scac，1是航次，下面类似的代码也是这个意思
                    firstVoyage = voyageList[0].split("@")[1];
                    totalDuration = transitTimeList[0].split("@")[1];
                    var etdWeek = dweekList[0].split("@")[1];
                    var etaWeek = aweekList[0].split("@")[1];

                    
                    var logoRouteCode = []
                    var logoRoute = ''
                    var routeTitle = ''
                    if (v.sameRoute.length > 0) {
                      that.zhida = that.zhida + v.sameRoute.length
                      for (let i = 0; i < v.sameRoute.length; i++) {
                        var gang = i !== 0 ? '\xa0\xa0' + '/' + '\xa0\xa0' : ''
                        var carrierName = v.sameRoute[i].carrierName
                        var textName = v.sameRoute[i].disPlayName == '' ?  v.sameRoute[i].routeCode == "UNDEFINED" ? '(-)' : '(' + v.sameRoute[i].routeCode + ')' : '(' + v.sameRoute[i].disPlayName + ')'
                        routeTitle = routeTitle + gang + carrierName + textName
                        let scacLogo = v.sameRoute[i].scac ? v.sameRoute[i].scac.toUpperCase() : ''
                        companyNameList.push({
                          scac: scacLogo,
                          name: v.sameRoute[i].carrierName
                        });
                        logoRoute += '/' +  v.sameRoute[i].disPlayName
                        logoRouteCode.push(v.sameRoute[i].disPlayName)
                        logos.push({
                          scac: scacLogo,
                          logoUrl: require("../assets/images/my-logos2/" + scacLogo.replace("0",
                            "") + ".png"),
                          isDotted: '1',
                          type: v.sameRoute[i].type + '',
                          isOvt: v.sameRoute[i].isOvt + '',
                          carrierName:v.sameRoute[i].carrierName
                        })
                      }
                    }



                    // companyNameList 去重
                    if(companyNameList.length > 0){
                      companyNameList = that.dupliRemova(companyNameList)
                    }
                    // 取出ETD
                    v.etd = timeList[0].split("@")[1];
                    // 取出ETA
                    v.eta = timeList[0].split("@")[2];
                    //
                    v.staticEtdSort = timeSort[0].split("@")[1]
                    v.staticEtaSort = timeSort[0].split("@")[2]
                    //
                    v.staticEtd = EtdEtASort[0].split("@")[1]
                    v.staticEta = EtdEtASort[0].split("@")[2]
                    //
                    v.isLate = isLateSort[0].split("@")[1]
                    // 处理显示时间的格式
                    var etd = v.etd
                    var eta = v.eta
                    var staticEtdSort = v.staticEtdSort
                    var staticEtaSort = v.staticEtaSort
                    var staticEta = v.staticEta
                    var staticEtd = v.staticEtd
                    var isLate = v.isLate
                   
                    var transSort = v.totalDuration;
                    var isTransit = "dir";
                    // 如果船名是空，放减号占位
                    if (v.vessel == "") {
                      v.vessel = "-";
                    }
                    // 如果航次是空，放减号占位
                    if (v.voyage == "") {
                      v.voyage = "-";
                    }
                    // 这里处理js里的new Date()兼容问题，safari等苹果的浏览器不识别2019-02-02里的-，必须的替换成/才能识别，否则显示Nan
                    if (v.etd.indexOf("-") != -1) {
                      v.etd = v.etd.replace(/-/g, "/");
                    }
                    if (v.eta.indexOf("-") != -1) {
                      v.eta = v.eta.replace(/-/g, "/");
                    }
                    var ids2 = "";
                    $.each(idList, function (idIndex, id) {
                      ids2 += id.split("@")[1] + "-";
                    });
                    ids2 = ids2.substring(0, ids2.length - 1);
                    // 把处理完的数据添加到新的schedule里，用于列表显示
                    var polt = polterminalList[0].split("@")[1]
                    var podt = podterminalList[0].split("@")[1]
                    var staticEtdSort = v.staticEtdSort
                    var staticEtaSort = v.staticEtaSort

                    var transTime = v.editTransitTime ? v.editTransitTime : v.transTime ? v.transTime : v.totalDuration ? v.totalDuration : 0
                    schedules.push({
                      id:v.id,
                      isAsync: v.isAsync,
                      differDay: v.differDay,
                      sameRoutes: v.sameRoute,
                      routeTitle: routeTitle,
                      isOvt: v.isOvt,
                      logoRoute: logoRoute,
                      logoRouteCode: logoRouteCode,
                      logos: logos,
                      info: v,
                      routeCodes: routeCodeStr == "" ? "-" : routeCodeStr,
                      etd: etd,
                      eta: eta,
                      staticEtd: staticEtd,
                      staticEta: staticEta,
                      transTime: transTime ,
                      isTransit: isTransit,
                      podTerninalEn: v.podTerninalEn,
                      polTerninalEn: v.polTerninalEn,
                      onTime: v.onTime,
                      polt: polt ? polt : '',
                      podt: podt ? podt : '',
                      polterminalList: polterminalList,
                      podterminalList: podterminalList,
                      isLate: isLate,
                      etdTime: staticEtdSort,
                      etaTime: staticEtaSort,
                      staticEtaSort: staticEtaSort,
                      staticEtdSort: staticEtdSort,
                      etdWeek: etdWeek,
                      etaWeek: etaWeek,
                      scacs: scacs,
                      companyNameList: companyNameList,
                      paramList: paramList,
                      firstVoyage: firstVoyage,
                      firstId: ids2, // 第一个id
                      transSort: transSort,
                      state: v.state,
                      voyageId: v.voyageId,
                      temStaticEtd: v.temStaticEtd,
                      totalId: v.totalId
                    });
                  }
                  if(polt){ //如果有起运港
                    let polZArry = polt.split('/')
                    for (let pp = 0; pp < polZArry.length; pp++) {
                      that.polTerninalList.push({
                        val : polt,
                        name: polZArry[pp]
                      })
                    }
                  }
                  if(podt){ //如果有目的港
                    let podZArry = podt.split('/')
                    for (let pp = 0; pp < podZArry.length; pp++) {
                      that.podTerninalList.push({
                        val : podt,
                        name: podZArry[pp]
                      })
                    }
                  }
                  if(v.polTerninalEn){ //如果有英语起运港
                    let polYArry = v.polTerninalEn.split('/')
                    for (let pp = 0; pp < polYArry.length; pp++) {
                      that.polTerninalListEn.push({
                        val : v.polTerninalEn,
                        name: polYArry[pp]
                      })
                    }
                  }
                  if(v.podTerninalEn){ //如果有英语目的港
                    let podYArry = v.podTerninalEn.split('/')
                    for (let pp = 0; pp < podYArry.length; pp++) {
                      that.podTerninalListEn.push({
                        val : v.podTerninalEn,
                        name: podYArry[pp]
                      })
                    }
                  }
                  for (let index = 0; index < companyNameList.length; index++) {
                    that.companyList.push(companyNameList[index].name)
                  }
                  // 添加到航程列表
                  transTimeList.push(transTime);
                });
                var i = 0;

                //循环中转
                $.each(data.content.transit, function (k, v) {
                  // 判断是有船还是空班
                  if (v.state == '0') {
                    v.state = '0' //有船
                  } else {
                    v.state = '1' //空班
                  }
                  // 这条船期是不是已经处理过了
                  var totalDuration = "";
                  if (idsTransit.indexOf(v.id) == -1) {
                    // 如果没处理过，继续走
                    // 判断是不是母船，共仓的条件是，pol+pod+船名+同一周
                    // 如果共仓，多个船公司共同经营这一艘船，需要判断这艘船是属于哪家船公司的
                    // 母船属于哪家船公司是去一个网站爬取的
                    if (v.carrierName == v.motherShipScac) {
                      // 如果母船所属船公司等于当前的船公司，把scac前面拼一个0，做排序用，这个船公司就会排在第一位
                      v.scac = "0" + v.scac;
                    }
                    var motherShipScacs = [v.scac + "@" + v.motherShipScac];
                    var carrierNames = [v.scac + "@" + v.carrierName];
                    // logo名跟四字码一样，如pabv.png
                    var logos = [v.scac];
                    // 拼接出来的航线名
                    var routeCodeStr = "";
                    // 码头list，拼上scac做排序
                    var polterminalList = [
                      v.scac + "@" + v.polTerninal
                    ];
                    var podterminalList = [
                      v.scac + "@" + v.podTerninal
                    ];
                    // 公司四字码
                    var scacs = [v.scac];
                    // 公司名集合，里面是scac和名字，详情需要用到这两个参数
                    var companyNameList = [{
                      scac: v.scac,
                      name: v.carrierName
                    }];
                    // 航线代码list，拼上scac做排序
                    var paramList = [
                      v.scac + "@" + that.getMotherShipRouteCode2(v).routeCode
                    ];
                    // ETA,ETD的list，拼上scac做排序
                    var timeList = [v.scac + "@" + v.etd + "@" + v.eta];
                    //
                    var timeSort = [v.scac + "@" + v.staticEtdSort + "@" + v.staticEtaSort]
                    //
                    var EtdEtASort = [v.scac + "@" + v.staticEtd + "@" + v.staticEta]
                    // 延误拼上scac做排序
                    var isLateSort = [v.scac + "@" + v.isLate]
                    // 航次list，拼上scac做排序
                    var voyageList = [
                      v.scac + "@" + that.getMotherShipRouteCode2(v).voyage
                    ];
                    // 航程list，拼上scac做排序
                    var transitTimeList = [v.scac + "@" + v.totalDuration];
                    // 离港日星期list，拼上scac做排序
                    var dweekList = [v.scac + "@" + v.etdWeek];
                    // 到港日星期list，拼上scac做排序
                    var aweekList = [v.scac + "@" + v.etaWeek];
                    // 我定义的id的list，拼上scac做排序
                    var idList = [v.scac + "@" + v.id];
                    // 第一艘船名
                    var firstVoyage = "";
                    // 公司名list
                    var cnameList = [];
                    // 时间正序排序
                    timeSort.sort()
                    timeList.sort();
                    EtdEtASort.sort()
                    isLateSort.sort()
                    // 航次正序排序
                    voyageList.sort();
                    // id正序排序
                    idList.sort();
                    // 航行时间正序排序
                    transitTimeList.sort();
                    // 离港星期正序排序
                    dweekList.sort();
                    // 到港星期正序排序
                    aweekList.sort();
                    polterminalList.sort();
                    podterminalList.sort();
                    // 取到第一个航次里的航次名，分割出来的0是scac，1是航次，下面类似的代码也是这个意思
                    firstVoyage = voyageList[0].split("@")[1];
                    totalDuration = transitTimeList[0].split("@")[1];
                    var etdWeek = dweekList[0].split("@")[1];
                    var etaWeek = aweekList[0].split("@")[1];
                    // logos去一遍重
                    logos = that.unique(logos);
                    var Routes = [] // 取出要显示的所有的 scac
                    var newArr = [] // 取出 Routes  logos 里 不一样的地方
                    if (v.isTransit == "1") {
                      //直达才有共舱  logos没有共舱里的船公司 则未收货
                      Routes.push({
                        scac: v.scac
                      })
                      if (v.sameRoute.length > 0) {
                        for (let i = 0; i < v.sameRoute.length; i++) {
                          if (v.sameRoute[i].vessel == v.vessel && (v.sameRoute[i].routeCode)
                            .toUpperCase() !== 'UNDEFINED') { // 取出是相同船公司的 scac
                            Routes.push(v.sameRoute[i])
                          }
                        }
                        newArr = Routes.filter(function (v) {
                          return logos.indexOf(v.scac) == -1
                        }) // 取出两个数组的差集
                      }
                    }
                    // newArr 去重  根据 displayName+scac 去重
                    newArr = that.dupRemoval(newArr)
                    // logo正序排序
                    motherShipScacs.sort();
                    carrierNames.sort();
                    logos.sort();
                    var logoUrl = '';
                    var disPlayName = '';
                    var routeTitle = ''
                    $.each(v.routeCodeList, function (roterCodesK, roterCodesV) {

                      var gang = roterCodesK !== 0 ? '\xa0\xa0' + '/' + '\xa0\xa0' : ''
                      var carrierName = v.carrierName
                      var textName = roterCodesV.disPlayName == '' ?  roterCodesV.routeCode == "UNDEFINED" ? '(-)' : '(' + roterCodesV.routeCode + ')' : '(' + roterCodesV.disPlayName + ')'
                      routeTitle = routeTitle + gang + carrierName + textName
                      
                      //如果判断条件成立 说明当前有 RAIL FEEDER TRUCK
                      let scacLogo = v.scac ? v.scac.toUpperCase() : ''
                      if(roterCodesV.flag == "RAIL" || roterCodesV.flag == "FEEDER" || roterCodesV.flag == "TRUCK"){
                        disPlayName = roterCodesV.flag
                        roterCodesV.disPlayName = disPlayName
                        roterCodesV.logoUrl = require(
                        "../assets/images/my-logos2/" + 
                        (disPlayName !==''? disPlayName : scacLogo).replace("0", "") + "0.png")
                      }else{
                        disPlayName = roterCodesV.disPlayName == undefined ? scacLogo : '';
                        roterCodesV.logoUrl = require(
                        "../assets/images/my-logos2/" + 
                        (disPlayName !==''? disPlayName : scacLogo).replace("0", "") + ".png")
                      }
                    });
                    var logoRouteCode = []
                    var logoRoute = ''
                    // 取出ETD
                    v.etd = timeList[0].split("@")[1];
                    // 取出ETA
                    v.eta = timeList[0].split("@")[2];
                    //
                    v.staticEtdSort = timeSort[0].split("@")[1]
                    v.staticEtaSort = timeSort[0].split("@")[2]
                    //
                    v.staticEtd = EtdEtASort[0].split("@")[1]
                    v.staticEta = EtdEtASort[0].split("@")[2]
                    //
                    v.isLate = isLateSort[0].split("@")[1]
                    // 处理显示时间的格式
                    var etd = v.etd
                    var eta = v.eta
                    var staticEtdSort = v.staticEtdSort
                    var staticEtaSort = v.staticEtaSort
                    var staticEta = v.staticEta
                    var staticEtd = v.staticEtd
                    var isLate = v.isLate

                    var transSort = v.totalDuration;
                    var isTransit = "trans";

                    // 如果船名是空，放减号占位
                    if (v.vessel == "") {
                      v.vessel = "-";
                    }
                    // 如果航次是空，放减号占位
                    if (v.voyage == "") {
                      v.voyage = "-";
                    }
                    // 这里处理js里的new Date()兼容问题，safari等苹果的浏览器不识别2019-02-02里的-，必须的替换成/才能识别，否则显示Nan
                    if (v.etd.indexOf("-") != -1) {
                      v.etd = v.etd.replace(/-/g, "/");
                    }
                    if (v.eta.indexOf("-") != -1) {
                      v.eta = v.eta.replace(/-/g, "/");
                    }
                    var ids2 = "";
                    $.each(idList, function (idIndex, id) {
                      ids2 += id.split("@")[1] + "-";
                    });
                    ids2 = ids2.substring(0, ids2.length - 1);
                    // 把处理完的数据添加到新的schedule里，用于列表显示
                    var polt = polterminalList[0].split("@")[1]
                    var podt = podterminalList[0].split("@")[1]
                    var staticEtdSort = v.staticEtdSort
                    var staticEtaSort = v.staticEtaSort

                    var transTime = v.editTransitTime ? v.editTransitTime : v.transTime ? v.transTime : v.totalDuration ? v.totalDuration : 0
                    schedulesTransit.push({
                      id:v.id,
                      isAsync: v.isAsync,
                      differDay: v.differDay,
                      isOvt: v.isOvt,
                      logoRoute: logoRoute,
                      logoRouteCode: logoRouteCode,
                      logos: logos,
                      info: v,
                      routeCodes: v.routeCodeList,
                      routeTitle: routeTitle,
                      etd: etd,
                      eta: eta,
                      staticEtd: staticEtd,
                      staticEta: staticEta,
                      transTime: transTime,
                      isTransit: isTransit,
                      podTerninalEn: v.podTerninalEn,
                      polTerninalEn: v.polTerninalEn,
                      polt: polt ? polt : '',
                      podt: podt ? podt : '',
                      polterminalList: polterminalList,
                      podterminalList: podterminalList,
                      onTime: v.onTime,
                      isLate: isLate,
                      etdTime: staticEtdSort,
                      etaTime: staticEtaSort,
                      staticEtaSort: staticEtaSort,
                      staticEtdSort: staticEtdSort,
                      etdWeek: etdWeek,
                      etaWeek: etaWeek,
                      scacs: scacs,
                      companyNameList: companyNameList,
                      paramList: paramList,
                      firstVoyage: firstVoyage,
                      firstId: ids2, // 第一个id
                      transSort: transSort,
                      state: v.state,
                      voyageId: v.voyageId,
                      temStaticEtd: v.temStaticEtd,
                      transitPortName: v.routeCodeList[0] ? v.routeCodeList[0].portName : 'trans',
                      totalId: v.totalId
                    });
                  }
                  if(polt){ //如果有起运港
                    let polZArry = polt.split('/')
                    for (let pp = 0; pp < polZArry.length; pp++) {
                      that.polTerninalList.push({
                        val : polt,
                        name: polZArry[pp]
                      })
                    }
                  }
                  if(podt){ //如果有目的港
                    let podZArry = podt.split('/')
                    for (let pp = 0; pp < podZArry.length; pp++) {
                      that.podTerninalList.push({
                        val : podt,
                        name: podZArry[pp]
                      })
                    }
                  }
                  if(v.polTerninalEn){ //如果有英语起运港
                    let polYArry = v.polTerninalEn.split('/')
                    for (let pp = 0; pp < polYArry.length; pp++) {
                      that.polTerninalListEn.push({
                        val : v.polTerninalEn,
                        name: polYArry[pp]
                      })
                    }
                  }
                  if(v.podTerninalEn){ //如果有英语目的港
                    let podYArry = v.podTerninalEn.split('/')
                    for (let pp = 0; pp < podYArry.length; pp++) {
                      that.podTerninalListEn.push({
                        val : v.podTerninalEn,
                        name: podYArry[pp]
                      })
                    }
                  }
                  for (let index = 0; index < companyNameList.length; index++) {
                    that.companyList.push(companyNameList[index].name)
                  }
                  // 添加到航程列表
                  transTimeList.push(transTime)
                });

                let obj = {}
                //下面去重
                that.companyList = Array.from(new Set(that.companyList))
                that.companyList.sort()
                that.polTerninalList = that.polTerninalList.reduce((cur,next) => {
                    obj[next.name] ? "" : obj[next.name] = true && cur.push(next);
                    return cur;
                },[])
                that.podTerninalList = that.podTerninalList.reduce((cur,next) => {
                    obj[next.name] ? "" : obj[next.name] = true && cur.push(next);
                    return cur;
                },[])
                that.polTerninalListEn = that.polTerninalListEn.reduce((cur,next) => {
                    obj[next.name] ? "" : obj[next.name] = true && cur.push(next);
                    return cur;
                },[])
                that.podTerninalListEn = that.podTerninalListEn.reduce((cur,next) => {
                    obj[next.name] ? "" : obj[next.name] = true && cur.push(next);
                    return cur;
                },[])
                if(that.isZhakai){
                  that.hideFilterFlag = false
                  that.hideFilter() //则收起
                }
                that.loading = false;
                // 直达list
                that.scheduleListDirect = schedules;
                // 中转list
                that.scheduleListTransit = schedulesTransit;
                // console.log(that.scheduleListTransit)
                that.tempList = schedules;
                that.tempListTransit = that.scheduleListTransit
                // 排序，取出最大和最小值(直达)
                transTimeList.sort(function (a, b) {
                  return a - b;
                });
                // 把直达与中转list合并筛选出最大值与最小值
                if (transTimeList.length > 0) {
                  that.minTime = Number(transTimeList[0]); // 最小值
                  that.maxTime = Number(transTimeList[transTimeList.length - 1]); // 最大值
                  that.range = Number(transTimeList[transTimeList.length - 1]); // 范围
                } else {
                  that.minTime = 0;
                  that.maxTime = 0;
                  that.range = 0;
                }
                if (that.scheduleListDirect.length > 0) {
                  // 复选框初始化
                  that.allCompanyDisabled = false;
                  that.allPolDisabled = false;
                  that.allPodDisabled = false;
                }
                //设置复选框，没有的设置为不可点击
                that.setCheckBoxDisAbled(that.scheduleListDirect.concat(that.scheduleListTransit));
                that.checkBoxFilter();
                if (params.dateType == 1) {
                  // 离港首次排序etd正序
                  that.sort("asc", "etdTime", 0, false);
                } else {
                  // 到港首次排序eta正序
                  that.sort("asc", "etaTime", 2, false);
                }
                //中转数量
                if(schedulesTransit.length > 0){
                  that.zhongzhuan = schedulesTransit.length
                }
              }else if(data.status == 9){
                    that.loading = false
                    that.sampleData(2, {path: that.$route.path})
              }else {
                that.loading = false;
                that.haveRes = false;
                that.$message({
                  message: "获取船期列表失败",
                  type: "error",
                  customClass: "base-message-zindex"
                });
              }
          }).catch((err)=>{
              that.loading = false
              that.haveRes = false
          }).finally(() => {
            that.$nextTick(() => {
              console.log(that.$refs.bar, that.$refs.bar.clientHeight);
              that.LeftHeight= that.$refs.bar.clientHeight - 50 + 'px'; 
              console.log(that.LeftHeight);
              console.log(that);
            })
          })
        });
      },
      getStaticWeek(week){
        var weekDay = [
          this.$t('list.mons'), 
          this.$t('list.tues'),
          this.$t('list.weds'), 
          this.$t('list.thus'),
          this.$t('list.fris'), 
          this.$t('list.sats'),
          this.$t('list.suns')
        ];
        return weekDay[week-1] + '(--)'
      },
      getWeek(time){
        var a = new Date(time).getDay()
        return a
      },
      getStaticTimeDay (time) {
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
          var time = Number(time)
          var geS = this.getProcessTime("mm-dd",new Date(time)) //格式化时间
          var b = geS.split(' ')[0]
          var c = weekDay[new Date(time).getDay()]
          // return c + '(' + b + ')'
          return c
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
      //去重
      dupliRemova(arr){
        var result = []
        var obj = {}
        for(var i =0; i<arr.length; i++){
          if(!obj[arr[i].scac]){
            result.push(arr[i])
            obj[arr[i].scac] = true;
          }
        }
        return result 
      },
      // 搜索时重置筛选条件
      resetList() {
        // this.scheduleListDirect = []
        // this.scheduleListTransit = []
        // this.companyList = []
        // this.polTerninalList = []
        // this.polTerninalListEn = []
        // this.podTerninalListEn = []
        // this.podTerninalList = []
        // this.range = 0
        // this.minTime = 0
        // this.maxTime = 0
        // this.allCompany = false
        // this.allPol = false
        // this.allPod = false
        // this.isTransitGroup = []
        // this.isStopGroup = []
        // this.etdGroup = []
        // this.etaGroup = [] //"1", "2", "3", "4", "5", "6", "7"
        // this.companyGroup = []
        // this.polGroup = []
        // this.podGroup = []
        // this.isTransitGroup2 = [true, true]
        // this.isStopGroup2 = [true, true]
        // this.etdGroup2 = [true, true, true, true, true, true, true]
        // this.etaGroup2 = [true, true, true, true, true, true, true]
        // this.allCompanyDisabled = true
        // this.allPolDisabled = true
        // this.allPodDisabled = true
      },
      sameTerminalFilter(terminalList, flag) {
        var that = this;
        var flag = false;
        $.each(terminalList, function (k, v) {
          if (flag == 1) {
            if (that.polGroup.indexOf(v.split("@")[1]) != -1) {
              flag = true;
            }
          } else {
            if (that.podGroup.indexOf(v.split("@")[1]) != -1) {
              flag = true;
            }
          }
        });
        return flag;
      },
      //重置复选框
      resetCheckbox() {
        var that = this;
        var companyGroup = that.companyGroup;
        that.companyGroup = [];
        //场景：选择one这个公司，切换标签页后没有one这家公司，选择的复选框去掉one这个选择
        $.each(that.companyList, function (k, v) {
          $.each(companyGroup, function (i, j) {
            if (v == j) {
              that.companyGroup.push(v);
            }
          });
        });
        var polGroup = that.polGroup;
        that.polGroup = [];
        $.each(that.polGroup, function (k, v) {
          $.each(polGroup, function (i, j) {
            if (v == j) {
              that.polGroup.push(v);
            }
          });
        });
        var podGroup = that.podGroup;
        that.podGroup = [];
        $.each(that.podGroup, function (k, v) {
          $.each(podGroup, function (i, j) {
            if (v == j) {
              that.podGroup.push(v);
            }
          });
        });
      },
      //去重
      unique(arr) {
        var x = new Set(arr);
        return [...x];
      },
      //不接货去重
      dupRemoval(arr) {
        var nn = [...arr]
        let obj = {};
        let peon = nn.reduce((cur, next) => {
          obj[next.scac + next.disPlayName] ? "" : obj[next.scac + next.disPlayName] = true && cur.push(next);
          return cur;
        }, []) //设置cur默认类型为数组，并且初始值为空的数组
        return peon
      },
      //获取搜索结果
      getTotalCount(params) {
        var weekArr = $("div[id^='week_tab_']");
        var that = this;
        var idstr = weekArr
          .eq(0)
          .attr("id")
          .split("_")[4]
          .split("to")[0];
        if (idstr.indexOf("-") != -1) {
          idstr = idstr.replace(/-/g, "/");
        }
        params.start = new Date(idstr);
        //日期格式化
        var y = params.start.getFullYear();
        var m = params.start.getMonth() + 1;
        var d = params.start.getDate();
        if (m < 10) {
          m = "0" + m;
        }
        if (d < 10) {
          d = "0" + d;
        }
        var startTime = y + "-" + m + "-" + d;
        var endTime = "";
        //取最后一个tab页的结束时间
        var idstr = weekArr
          .eq(weekArr.length - 1)
          .attr("id")
          .split("_")[4]
          .split("to")[1];
        if (idstr.indexOf("-") != -1) {
          idstr = idstr.replace(/-/g, "/");
        }
        params.end = new Date(idstr);
        //日期格式化
        var y = params.end.getFullYear();
        var m = params.end.getMonth() + 1;
        var d = params.end.getDate();
        if (m < 10) {
          m = "0" + m;
        }
        if (d < 10) {
          d = "0" + d;
        }
        endTime = y + "-" + m + "-" + d;

        // 2019-12-18 start 结束时间不取页面上的四周，取28天，页面上第一周是当前时间到周末的天数+三周，小于28天，数据分组出错
        var weeksOutDate = params.start;
        weeksOutDate.setDate(weeksOutDate.getDate() + 28);
        var weeksOutm = weeksOutDate.getMonth() + 1;
        var weeksOutd = weeksOutDate.getDate();
        if (weeksOutm < 10) {
          weeksOutm = "0" + weeksOutm;
        }
        if (weeksOutd < 10) {
          weeksOutd = "0" + weeksOutd;
        }
        var weeksOut = weeksOutDate.getFullYear() + "-" + weeksOutm + "-" + weeksOutd;
        that.weeksOut = weeksOut
        // 2019-12-18 end

        // 20191118 start 传每一周时间段，获取每周的船公司、条数、码头
        var weekStr = "";
        $.each(this.weekBanner, function (weekBannerIndex, weekBanner) {
          $.each(weekBanner, function (weekIndex, week) {
            weekStr += week.week + ",";
          });
        });
        weekStr = weekStr.substring(0, weekStr.length - 1);
        // 20191118 end
      },
      //日期格式化
      getWeek(date) {
        if (date.indexOf("-") != -1) {
          date = date.replace(/-/g, "/");
        }
        var weekArray = new Array(
          "周日",
          "周一",
          "周二",
          "周三",
          "周四",
          "周五",
          "周六"
        );
        return weekArray[new Date(date).getDay()];
      },
      // 分组
      group(array, subGroupLength) {
        let index = 0;
        let newArray = [];
        while (index < array.length) {
          newArray.push(array.slice(index, (index += subGroupLength)));
        }
        return newArray;
      },
      // 切换周
      changeWeek(id) {    
        this.weekId = id
        if (this.loading == true) {
          this.dialogDate = true
          setTimeout(() => {
            this.dialogDate = false
          }, 1000)
        } else {
          this.dialogDate = false
          // this.resetList()
          this.scheduleListDirect = []
          this.scheduleListTransit = []

          //如果当前切换筛选是展开得  则
          if(this.hideFilterFlag){
            this.isZhakai = true //下次需要展开
            this.hideFilter() //则收起
          }else{
            this.isZhakai = false //下次需要收起
          }

          $("div[id^='week_tab_']").removeClass("active");
          $("#" + id).addClass("active");

          $('body,html').animate({scrollTop: 0}, 500)
          // 切换筛选框
          var index = 0;
          var weekArray = $("div[id^='week_tab_']");
          var weekLength = weekArray.length - 1;
          $.each(weekArray, function (k, v) {
            if ($(v).attr("id") == id) {
              index = k;
            }
          });

          //参数
          // var params = {
          //   pol: this.$parent.pol,
          //   polId: this.$parent.polId,
          //   pod: this.$parent.pod,
          //   podId: this.$parent.podId,
          //   start: this.$parent.start,
          //   dateType: this.$parent.dateType
          // };
          
          this.$parent.goSearch(
            $("#" + id)
            .addClass("active")
            .attr("id")
          )
        }
      },
      // 跳转船舶定位页面
      goScheduleDetails(schedule) {
        console.log(schedule)
         if(this.userId){ //登录
         var query = {
              mmsi : '', //schedule.info ? schedule.info.mmsi : schedule.vesselInfo.mmsi
              shipdt : schedule.info ? schedule.info.vessel : schedule.vesselInfo.vessel,
              isGoBack : this.webClient ? false : true,
              isDan: false, //true 多条船  false单条船
          }
          //两个对象合并
          var setParamDate = Object.assign({},this.$route.params,query)
          
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
  //       if (schedule.state == 0) {
  //         //week_tab_0_0_2019-8-7to2019-8-11
  //         var id = $(document)
  //           .find(".animateItem")
  //           .find(".active")
  //           .attr("id");
  //           console.log(id)
  //         var startTime = id.split("_")[4].split("to")[0];
  //         var endTime = id.split("_")[4].split("to")[1];
  //         var sm = startTime.split("-")[1];
  //         var sd = startTime.split("-")[2];
  //         if (sm < 10) {
  //           sm = "0" + sm;
  //         }
  //         if (sd < 10) {
  //           sd = "0" + sd;
  //         }
  //         var em = endTime.split("-")[1];
  //         var ed = endTime.split("-")[2];
  //         if (em < 10) {
  //           em = "0" + em;
  //         }
  //         if (ed < 10) {
  //           ed = "0" + ed;
  //         }
  //         startTime = startTime.split("-")[0] + "-" + sm + "-" + sd;
  //         endTime = endTime.split("-")[0] + "-" + em + "-" + ed;

  //         if(this.hideFilterFlag == true){
  //           this.isZhakai = true
  //         }
  //         //打开新标签
  //         var pol = this.$parent.$refs.searchBar.pol
  //         var polId = this.$parent.$refs.searchBar.polId
  //         var pod = this.$parent.$refs.searchBar.pod
  //         var podId = this.$parent.$refs.searchBar.podId
  //         var vessel = schedule.info.vessel
  //         var voyage = schedule.info.voyage
  //         var dateType = this.$parent.$refs.searchBar.dateType
  //         var start = this.$parent.$refs.searchBar.start
  //         var id = schedule.firstId
  //         var voyageId = schedule.voyageId
  //         var isTransit = schedule.info.isTransit
  //         var isGc = schedule.scacs.length > 1 ? 1 : 0
  //         var isLate = schedule.info.isLate
  //         var startTime = startTime
  //         var endTime = endTime
  //         var routeCode = schedule.info.routeCode
  //         var totalId = schedule.info.totalId
  //         var wayType = schedule.info.wayType
          
  //         var userId = this.userId ? this.userId : null;
  //         var userIp = returnCitySN.cip;
  //         var userType = this.getCookie('authId') ? '0' : '1';

  //         // 处理中转的信息 已传给地图
  //         var transitMap = []
  //         if(schedule.info.isTransit == '1'){ //代表中转
  //             for (let i = 0; i < schedule.info.routeCodeList.length; i++) {
  //               let c = schedule.info.routeCodeList[i]
  //               if(c.lat && c.lon && schedule.info.pod !== c.portName){ //如果当前中转港有坐标
  //                 transitMap.push({
  //                   name:c.portName ? (c.portName.replace(' ','')).toUpperCase() : '',
  //                   lat:Number(c.lat),
  //                   lon:Number(c.lon)
  //                 })
  //               }
  //             }
  //           }
  //         //地图参数
  //         var xmapProps = {
  //           vessel:schedule.info.vessel,
  //           voyage:schedule.info.voyage,
  //           mmsi:schedule.info.mmsi,
  //           pol:{
  //             name:schedule.info.pol ? (schedule.info.pol.replace(' ','')).toUpperCase() : '',
  //             terminal:schedule.info.polTerninal, 
  //             code:schedule.info.polCode,
  //             eta:'',
  //             etd:schedule.info.etd,
  //             lat:schedule.info.polLat ? Number(schedule.info.polLat) : '', //36.062630,
  //             lon:schedule.info.polLon ? Number(schedule.info.polLon) : ''//120.310500
  //           },
  //           pod:{
  //             name:schedule.info.pod ? (schedule.info.pod.replace(' ','')).toUpperCase() : '',
  //             terminal:schedule.info.podTerninal, 
  //             code:schedule.info.podCode,
  //             eta: schedule.info.eta,
  //             etd:'',
  //             lat:schedule.info.podLat ? Number(schedule.info.podLat) : '' ,//22.342263,
  //             lon:schedule.info.podLon ? Number(schedule.info.podLon) : ''//114.107302
  //           },
  //           transit:transitMap, //中转港
  //           polTime: schedule.info.etd ? new Date(schedule.info.etd).getTime() : '', //起始港时间
  //           podTime: schedule.info.eta ? new Date(schedule.info.eta).getTime() : '', //目的港时间
  //           during: 1000*3600*24*30,
  //           isEntre:schedule.info.isTransit == 0 ? '0' : '1', //0 直达 ,1 中转 
  //         }
  //         //列表详情获取
  //         this.$Axios.get(this.GLOBAL.url + "schedules/web/details?id=" + schedule.voyageId + "&userId=" + userId + "&userIp=" + userIp+ "&userType=" + userType + "&startTime=" + startTime,{
  //         headers: {
  //             Authorization: this.getToken()
  //           },
  //         }).then(res => {
  //           this.datailInfometionList = res.data.content[0]
  //           var setParamDate = {
  //             mmsi: this.datailInfometionList.mmsi,
  //             staticId: this.datailInfometionList.staticId,
  //             polCode: this.datailInfometionList.linePolCode,
  //             podCode: this.datailInfometionList.linePodCode,
  //             carrierName: this.datailInfometionList.carrierName,
  //             disRouteCode: this.datailInfometionList.routeCode, //详情页routeCode
  //             voyageId: voyageId,
  //             id:id,
  //             polId:polId,
  //             podId:podId,
  //             pol:pol,
  //             pod:pod,
  //             vessel:vessel,
  //             voyage:voyage,
  //             dateType:dateType,
  //             start:start,
  //             isGc:isGc,
  //             isLate:isLate,
  //             startTime:startTime,
  //             endTime:endTime,
  //             userId:userId,
  //             userIp:userIp,
  //             userType:userType,
  //             routeCode:routeCode,
  //             totalId:totalId,
  //             wayType:wayType,
  //             xmapProps:xmapProps,
  //             week: this.weekId,
  //             isZhakai: this.isZhakai,
  //             filterCond: { //携带的过滤条件
  //               isTransitGroup : this.isTransitGroup, //中转直达
  //               isStopGroup : this.isStopGroup, //有船空班
  //               etdGroup : this.etdGroup, //ETD
  //               etaGroup : this.etaGroup, //ETA
  //               companyGroup : this.companyGroup, //船公司
  //               polGroup : this.polGroup, //起始港
  //               podGroup : this.podGroup, //目的港
  //               range : this.range, //航程
  //             }
  //           }
  //           var paramDate = this.setParams(setParamDate)
  //           // 网站跳转船舶定位页面
  //           if(this.webClient){
  //           // 网站跳转新页面
  //           let routeData = this.$router.resolve({
  //               path: `/shippingLine/${paramDate}`
  //             });
  //             window.open(routeData.href, '_blank')
  //           }else{
  //             // 客户端当前页跳转
  //             this.$router.push({
  //               path: `/shippingLine/${paramDate}`,
  //             });
  //           }    
  //         })
  //       }
      },
      //定义按字段排序的规则函数
      by(name, orderBy) {
        return function (o, p) {
          var a, b
          if (typeof o === "object" && typeof p === "object" && o && p) {
            if (name == 'solution' && orderBy == "desc") {
              for (let item of o.logos) {
                if (o.scacs[0] < p.scacs[0]) {
                  return -1;
                } else if (o.scacs[0] > p.scacs[0]) {
                  return 1;
                } else {
                  return 0;
                }
              }
            };
            if (name == 'solution' && orderBy == "asc") {
              for (let item of o.logos) {
                if (o.scacs[0] > p.scacs[0]) {
                  return -1;
                } else if (o.scacs[0] < p.scacs[0]) {
                  return 1;
                } else {
                  return 0;
                }
              }
            };
            if (name == 'etdTime' && orderBy == "desc") {
              if(o.staticEtdSort < p.staticEtdSort){
                return 1;
              }else if(o.staticEtdSort > p.staticEtdSort){
                return -1;
              }else{
                return 0;
              }
            };
            if (name == 'etdTime' && orderBy == "asc") {
              if(o.staticEtdSort > p.staticEtdSort){
                return 1;
              }else if(o.staticEtdSort < p.staticEtdSort){
                return -1;
              }else{
                return 0;
              }
            };
            if (name == 'etaTime' && orderBy == "desc") {
              if(o.etaWeek < p.etaWeek){
                return 1;
              }else if(o.etaWeek > p.etaWeek){
                return -1;
              }else{
                return 0;
              }
            };
            if (name == 'etaTime' && orderBy == "asc") {
              if(o.etaWeek > p.etaWeek){
                return 1;
              }else if(o.etaWeek < p.etaWeek){
                return -1;
              }else{
                return 0;
              }
            };
            if (orderBy == "desc") {
              a = p[name];
              b = o[name];
            } else {
              a = o[name];
              b = p[name];
            }
            if (a === b) {
              return 0;
            }
            var aIsNumber = false;
            var bIsNumber = false;
            try {
              var t = Number(a);
              aIsNumber = true;
            } catch {}
            try {
              var t = Number(b);
              bIsNumber = true;
            } catch {}
            if (aIsNumber && bIsNumber) {
              return Number(a) < Number(b) ? -1 : 1;
            } else {
              if (typeof a === typeof b) {
                return a < b ? -1 : 1;
              }
            }
            return typeof a < typeof b ? -1 : 1;
          } else {
            throw "error";
          }
        };
      },
      // 排序
      sort(orderBy, column, index, isClass) {
        console.log(orderBy, column, index, isClass)
        var scheduleListDirect = [];
        var scheduleListTransit = [];
        if (orderBy == "desc") {
          if (isClass) {
            $(".icon-xjiffangxiangsanjiaozheng3").removeClass("sort-active");
            $(".icon-sj-left").removeClass("sort-active");
            $(".icon-xjiffangxiangsanjiaozheng3")
              .eq(index)
              .addClass("sort-active");
          }
          scheduleListDirect = this.scheduleListDirect.sort(this.by(column, orderBy));
          scheduleListTransit = this.scheduleListTransit.sort(this.by(column, orderBy));
        } else if (orderBy == "asc") {
          if (isClass) {
            $(".icon-xjiffangxiangsanjiaozheng3").removeClass("sort-active");
            $(".icon-sj-left").removeClass("sort-active");
            $(".icon-sj-left")
              .eq(index)
              .addClass("sort-active");
          }
          //正序
          scheduleListDirect = this.scheduleListDirect.sort(this.by(column, orderBy));
          scheduleListTransit = this.scheduleListTransit.sort(this.by(column, orderBy));
        }
        // }
        this.scheduleListDirect = scheduleListDirect;
        this.scheduleListTransit = scheduleListTransit;
      },
      //清空
      reSetAll() {
        // window.location.reload()
        // this.$parent.$refs.searchBar.goSearch()
        this.isTransitGroup = []
        this.range = this.maxTime
        this.isStopGroup = []
        this.companyGroup = []
        this.etdGroup = []
        this.etaGroup = []
        this.polGroup = []
        this.podGroup = []
        this.checkBoxFilter()
      },
      checkBoxFilter() {
        var that = this
        //拼一个拉姆达表达式
        var filterStr = "item=> item != undefined";
        if (this.isTransitGroup.length > 0) {
          filterStr += "&& this.isTransitGroup.indexOf(item.info.isTransit) != -1";
        }
        if (this.isStopGroup.length > 0) {
          filterStr += "&& this.isStopGroup.indexOf(item.state) != -1";
        }
        if (this.etdGroup.length > 0) {
          filterStr += "&& this.etdGroup.indexOf(item.etdWeek) != -1";
        }
        if (this.etaGroup.length > 0) {
          filterStr += "&& this.etaGroup.indexOf(item.etaWeek) != -1";
        }
        if (this.companyGroup.length > 0) {
          filterStr += "&& (this.companyGroup.indexOf(item.info.carrierName) != -1 || this.sameFilter(item.companyNameList))";
        }
        if (this.polGroup.length > 0) {
          if(this.newLang == '中文'){
            if (this.polGroup.indexOf("全部") == -1) {
              filterStr += "&& this.polGroup.indexOf(item.info.polTerninal) != -1 ";
            } else {
              filterStr += "&& (this.polGroup.indexOf(item.info.polTerninal) != -1 || item.info.polTerninal == '') || this.sameTerminalFilter(item.polterminalList,1)";
            }
          }else if(this.newLang == '英文'){
            if (this.polGroup.indexOf("All") == -1) {
              filterStr += "&& this.polGroup.indexOf(item.info.polTerninalEn) != -1 ";
            } else {
              filterStr += "&& (this.polGroup.indexOf(item.info.polTerninalEn) != -1 || item.info.polTerninalEn == '') || this.sameTerminalFilter(item.polTerninalListEn,1)";
            }
          }
        }
        if (this.podGroup.length > 0) {
          if(this.newLang == '中文'){
            if (this.podGroup.indexOf("全部") == -1) {
              filterStr += "&& this.podGroup.indexOf(item.info.podTerninal) != -1"
            } else {
              filterStr += "&& (this.podGroup.indexOf(item.info.podTerninal) != -1 || item.info.podTerninal == '') || this.sameTerminalFilter(item.podterminalList,1)";
            }
          }else if(this.newLang == '英文'){
            if (this.podGroup.indexOf("全部") == -1) {
              filterStr += "&& this.podGroup.indexOf(item.info.podTerninalEn) != -1";
            } else {
              filterStr += "&& (this.podGroup.indexOf(item.info.podTerninalEn) != -1 || item.info.podTerninalEn == '') || this.sameTerminalFilter(item.podTerninalListEn,1)";
            }
          }
        }
        if (this.range >= 0) {
          filterStr += "&& this.range >= item.transTime";
        }
        // 直达过滤条件
        this.scheduleListDirect = this.tempList.filter(eval(filterStr));
        // 中转过滤条件
        this.scheduleListTransit = this.tempListTransit.filter(eval(filterStr));
        if (this.scheduleListDirect == 0 && this.scheduleListTransit == 0) {
          this.haveRes = false;
        }
        // 取当前排序
        var sortType = $(".sort-active").data("sort");
        var name = $(".sort-active").data("type");
        var index = $(".sort-active").data("index");
        if (sortType && name && index) {
          this.sort(sortType, name, index, true);
        } else {
          if (this.$parent.$refs.searchBar !== undefined && this.$parent.$refs.searchBar.dateType == 1) {
            // 离港首次排序etd正序
            this.sort("asc", "etdTime", 0, false);
          } else {
            // 到港首次排序eta正序
            this.sort("asc", "etaTime", 2, false);
          }
        }
      },
      //共仓筛选
      sameFilter(companyNameList) {
        var that = this;
        var flag = false;
        $.each(companyNameList, function (k, v) {
          if (that.companyGroup.indexOf(v.name) != -1) {
            flag = true;
          }
        });
        return flag;
      },
      //全选公司
      allCompanyChange(val) {
        // 全选框是单独的，其他复选框是接口返回的，全选的时候要把全部加到其他复选框之前，否则效果不是全选
        var arr = ["全部"];
        this.companyGroup = val ? arr.concat(this.companyList) : [];
      },
      //全选起始码头
      allPolChange(val) {
        if(this.newLang == '中文'){
          var arr = ["全部"]
          var polZ = this.polTerninalList.map(item => item.val)
          this.polGroup = val ? arr.concat(polZ) : [];
        }else if(this.newLang == '英文'){
          var arr = ["All"]
          var polY = this.polTerninalListEn.map(item => item.val)
          this.polGroup = val ? arr.concat(polY) : [];
        }
      },
      //全选目的码头
      allPodChange(val) {
        if(this.newLang == '中文'){
          var arr = ["全部"];
          var podZ = this.podTerninalList.map(item => item.name)
          this.podGroup = val ? arr.concat(podZ) : [];
        }else if(this.newLang == '英文'){
          var arr = ["All"];
          var podY = this.podTerninalListEn.map(item => item.name)
          this.podGroup = val ? arr.concat(podY) : [];
        }
      },
      //设置复选框，没有的设置成不可点击
      setCheckBoxDisAbled(allList) {
        var that = this;
        $.each(allList, function (k, v) {
          that.isTransitGroup2[Number(v.info.isTransit)] = false;
          that.isStopGroup2[Number(v.state)] = false;
          that.etdGroup2[Number(v.etdWeek) - 1] = false;
          that.etaGroup2[Number(v.etaWeek) - 1] = false;
        });
      },
      weekTabInit(id, callBack) {
        if (this.isFirstInit) {
          var weekList = [];
          //初始化tab切换里的星期和日期,写死四周
          //this.totalWeeks现在写死的，正常是数据里有多少周的数据就是多少周
          var weekArray = new Array(
            '一',
            '二',
            '三',
            '四',
            '五',
            '六',
            '七',
            '八',
            '九',
          );
          var currentDate = new Date();
          // 离港日搜索正序推n周
          var dateType = this.$parent.$refs.searchBar.dateType ?
            this.$parent.$refs.searchBar.dateType :
            "1";
          // dateType = "1" 为到港 "2"为离港
          if (dateType == "1") {
            for (var i = 0; i < this.totalWeeks; i++) {
              var title = "";
              var name = "";
              // title
              if (i == 0) {
                title = '本周';
              } else {
                title = '下' + weekArray[i - 1] + '周';
              }
              //还有几天周日
              var m1 = 0;
              if (currentDate.getDay() != 0) {
                m1 = (8 - currentDate.getDay()) * 86400000;
              }else{
                m1 = 86400000;
              }
              // 周一到当前过了几天
              var startDate = new Date(currentDate.getTime() + m1 + 604800000 * (i - 1));
              var startYear = startDate.getFullYear();
              var startmonth = startDate.getMonth() + 1;
              var startday = startDate.getDate();
              // i周的当天时间
              var now = startmonth + "." + startday;
              // 加第i周六天的时间
              var m2 = 0;
              if (startDate.getDay() != 0) {
                m2 = (7 - startDate.getDay()) * 86400000;
              }
              var endDate = new Date(startDate.getTime() + m2);
              if (i != 0) {
                endDate = new Date(startDate.getTime() + 518400000);
              }
              var endYear = endDate.getFullYear();
              var endmonth = endDate.getMonth() + 1;
              var endtday = endDate.getDate();
              var end = endmonth + "." + endtday;
              weekList.push({
                title: title,
                name: now + "-" + end,
                week: startYear +
                  "-" +
                  startmonth +
                  "-" +
                  startday +
                  "to" +
                  endYear +
                  "-" +
                  endmonth +
                  "-" +
                  endtday
              });
            }
          } else {
            this.dateType = "2";
            this.totalWeeks = 4;
            var dateStr = this.$parent.$refs.searchBar.start;
            if (typeof dateStr == "string" && dateStr.indexOf("-") != -1) {
              dateStr = dateStr.replace(/-/g, "/");
            }
            var currentDate = new Date(dateStr);
            // 到港日搜索倒着推n周
            for (var i = 0; i < this.totalWeeks; i++) {
              var title = "";
              var name = "";
              var m1 = 7 * 86400000;
              var endtDate = new Date(currentDate.getTime());
              if (i != 0) {
                var endtDate = new Date(
                  currentDate.getTime() - m1 - 604800000 * (i - 1)
                );
              }
              var endYear = endtDate.getFullYear();
              var endmonth = endtDate.getMonth() + 1;
              var endday = endtDate.getDate();
              // i周的当天时间
              var end = endmonth + "." + endday;
              // 加第i周六天的时间
              var m2 = 6 * 86400000;
              var startDate = new Date(endtDate.getTime() - m2);
              if (i != 0) {
                startDate = new Date(endtDate.getTime() - 518400000);
              }
              var startYear = startDate.getFullYear();
              var startmonth = startDate.getMonth() + 1;
              var startday = startDate.getDate();
              var start = startmonth + "." + startday;
              weekList.push({
                index: i,
                title: start + "-" + end,
                name: start + "-" + end,
                week: startYear +
                  "-" +
                  startmonth +
                  "-" +
                  startday +
                  "to" +
                  endYear +
                  "-" +
                  endmonth +
                  "-" +
                  endday
              });
              //倒序
              weekList.sort(function (v1, v2) {
                return v2.index - v1.index;
              });
            }
          }
          // 分组放入banner
          this.weekBanner = this.group(weekList, 4);
          for (var i = 0; i < this.weekBanner.length; i++) {
            for (var j = 0; j < this.weekBanner[i].length; j++) {
              if (this.weekBanner[i][j].title == "本周") {
                this.weekBanner[i][j]['titleLang'] = 'thisWeek';
              };
              if (this.weekBanner[i][j].title == "下一周") {
                this.weekBanner[i][j]['titleLang'] = 'nextWeek'
              };
              if (this.weekBanner[i][j].title == "下二周") {
                this.weekBanner[i][j]['titleLang'] = 'nextTwoWeeks'
              };
              if (this.weekBanner[i][j].title == "下三周") {
                this.weekBanner[i][j]['titleLang'] = 'nextThreeWeeks'
              };
            }
          }
        }

        this.$nextTick(function () {
          callBack();
        });
      },
      //收起过滤栏
      hideFilter() {
        //自定义jquer 左右滑动效果
        $.fn.mySlide = function (style, speed, callback) {
          this.animate(style, speed, callback);
        };
        if (this.hideFilterFlag) {
          $(".el-zoom-in-left").mySlide({
              width: "hide",
              paddingLeft: "hide",
              paddingRight: "hide",
              marginLeft: "hide",
              marginRight: "hide"
            },
            0
          );
          $(".list-content").mySlide({
              width: "94%"
            },
            0
          );
          // $(".hdtext").mySlide({
          //    width: "hide",
          //   }
          // );
          $(".left-bar.side-box").mySlide({
              width: "50px"
            },
            0
          );
          // if(document.body.clientWidth > '1500'){
          //   $(".list-content").mySlide({
          //       width: "1140px"
          //     },
          //     0
          //   );
          // }else if(document.body.clientWidth <= '1500'){
          //     $(".list-content").mySlide({
          //         // width: "1040px"
          //         width: "1140px"
          //       },
          //       0
          //     );
          // }
          this.hideFilterFlag = false;
        } else {
          $(".el-zoom-in-left").mySlide({
              width: "show",
              paddingLeft: "show",
              paddingRight: "show",
              marginLeft: "show",
              marginRight: "show"
            },
            0
          );
          $(".list-content").mySlide({
              width: "83.8%"
            },
            0
          );
          // $(".hdtext").mySlide({
          //    width: "show",
          //   }
          // );
          $(".left-bar.side-box").mySlide({
              width: "14.7%",
            },
            0
          );
          // if(document.body.clientWidth > '1500'){
          //   $(".list-content").mySlide({
          //       width: "981px"
          //     },
          //     0
          //   );
          // }else if(document.body.clientWidth <= '1500'){
          //   $(".list-content").mySlide({
          //       // width: "881px"
          //       width: "981px"
          //     },
          //     0
          //   );
          // }
          this.hideFilterFlag = true;
        }
      },
      //点赞收起
      closeThumb(){
        this.isLikeGive = false
        $("#like_footer").animate({
          width: '60px',
          height: '56PX',
          right: '18px',
          borderTopLeftRadius: '4px',
        },500,'',()=>{
          this.isFooteLike = true
        })
      },
      //点赞展开
      openThumb(){
        this.isFooteLike = false
        $("#like_footer").animate({
          width: '100%',
          height: '56px',
          right: 0,
        },500,'',()=>{
          this.isLikeGive = true
        })
      },
    },
    watch: {
      language: {
        immediate: true,
        handler(newVal) {
          if (newVal == '语言') {
            this.lang = "zh-CN";
            this.$i18n.locale = this.lang; //关键语句
          } else if (newVal == 'language') {
            this.lang = "en-US";
            this.$i18n.locale = this.lang; //关键语句

          }
        }
      },
      // scheduleListDirect() {
      //     this.$nextTick(() => {
      //         this.LeftHeight= this.$refs.bar.clientHeight - 50 + 'px';
      //     });
      // }

    },
    created() {

    },
    mounted() {
      // $(".fob-ship-nodata").css(
      //   "height",
      //   $(".left-bar")
      //   .next()
      //   .css("height")
      // );
      this.hideFilter()
      // if(this.$route.query && this.$route.query.query && this.$route.query.query.filterCond){
      //   var filterCond = this.$route.query.query.filterCond
      //   this.isTransitGroup = filterCond.isTransitGroup
      //   this.isStopGroup = filterCond.isStopGroup
      //   this.etdGroup = filterCond.etdGroup
      //   this.etaGroup = filterCond.etaGroup
      //   this.companyGroup = filterCond.companyGroup
      //   this.polGroup = filterCond.polGroup
      //   this.podGroup = filterCond.podGroup
      //   this.range = filterCond.range
      // }
      this.LeftHeight= this.$refs.bar.clientHeight - 145 + 'px';
    },
    updated(){
        var newLang = localStorage.getItem('language')
        if(newLang == '语言'){
          this.newLang = '中文'
        }else if(newLang == 'language'){
          this.newLang = '英文'
        }
    },
  };
</script>