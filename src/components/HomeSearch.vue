<style lang="scss">
  #Home-search::-webkit-scrollbar {
    width:0px;
    height:0px; 
  }
  #Home-search{
    margin-top: 57px;
    background-color: #072c4c;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow-x:hidden;
    min-width: 1200px;
    .homeHeader{
      width: 1850px;
      position: relative;
      margin: 0 auto;
      .homeHeaderContent{
        margin: 331px auto 0 auto;
      }
      .homeHeaderMap{
        display: inline-block;
        background: url("../assets/images/home/ditu.png") no-repeat;
        width: 750px;
        height: 536px;
        position: relative;
      }
      .homeHeaderMapleft{
        position: absolute;
        top: -61px;
        left: 83px;
      }
      .homeHeaderShip{
        margin-left: 379px;
        display: inline-block;
        background: url("../assets/images/home/chuan.png") no-repeat;
        width: 721px;
        height: 347px;
        vertical-align: top;
        position: relative;
      }
      .homeHeaderShipRight{
        position: absolute;
        top: 4px;
        left: -24px;
        img{
          width: 546px;
        }
      }
    }
    .homeSearchShipTitle{
      text-align: center;
      font-size: 46px;
      height: 46px;
      line-height: 46px;
      color: #fff;
      margin-bottom: 32px;
    }
    .newYearTitle{
      display: block;
      width: 470px;
      height: 44px;
      margin: 0 auto;
      margin-bottom: 32px;
    }
    .homeSearchShip{
      position: absolute;
      width: 980px;
      top: -63px;
      left: 50%;
      margin-left: -490px;
      .homeSearchShipBorder{
        width: 100%;
        height: 60px;
        border-radius: 30px;
        border: 1px solid #f2f2f2;
        margin-top: 14px;
        padding: 11px 24px 11px 36px;
        background-color: #fff;
        display: flex;
        align-items: center;
        .homeSearchShipBorderContent{
          display: inline-block;
        }
        .portname{
            font-size: 14px;
            height: 12px;
            line-height: 16px;
            color: #909090;
            margin-bottom: 10px;
        }
        .mainname{
          width: 100%;
          height: 20px;
          display: flex;
          align-items: center;
          // background: yellow;
          img{
            margin-right: 8px;
          }
          .el-input__inner{
            flex: 1;
            // background: red;
          }
        }
      }
      .homeSearchShipBreadcrumb{
        margin-top: 12px;
        font-size: 14px;
        color: #fff;
        padding: 0 36px;
        white-space: nowrap;
        overflow-x: scroll;
        li{
          display: inline-block;
          cursor: pointer;
          margin-right: 20px;
          }
          i{
            margin-left: 5px;
          }
          li.hot{
            margin-right: 14px;
            font-weight: bold;
        }
      }
      .homeSearchShipBreadcrumb::-webkit-scrollbar {
        width: 5px;
        height: 5px;
      }
      .homeSearchShipBreadcrumb::-webkit-scrollbar-thumb {
        background-color: #072c4c;
        border-radius: 10px;
        -webkit-box-shadow: inset 1px 1px 0 #072c4c;
      }

      .homeSearchShipBreadcrumb:hover::-webkit-scrollbar-thumb {
        background-color: #072c4c;
        border-radius: 10px;
        -webkit-box-shadow: inset 1px 1px 0 #072c4c;
      }
      .homeSearchShipSearchBtn{
        text-align: center;
        margin-top: 59px;
        .el-button{
          width: 152px;
          height: 48px;
          border-radius: 24px;
          font-size: 22px;
          background-color: #fff;
          color: #282828;
        }
        .el-button:hover{
          background-color: #ccc;
        }
      }
    }
    .homeWhite{
      background: url("../assets/images/home/bolang.png") no-repeat;
      background-size: 100% 100%;
      width: 100%;
      height: 80px;
    }
    .homeContent{
      width: 100%;
      height: 3000px;
      background-color: #fff;
      position: relative;
      .homeContentInfor{
        ul{
          width: 100%;
          width: 1245px;
          margin: 0 auto;
          padding: 0 131px 44px 131px;
          li{
            display: inline-block;
            margin-right: 314px;
            width: 107px;
            text-align: center;
            font-size: 16px;
            cursor: pointer;
            p:nth-of-type(1){
              width: 107px;
              height: 107px;
            }
            p:nth-of-type(2){
              margin-top: 15px;
              width: 107px;
            }
            img{
              width: 107px;
              height: 107px;
            }
          }
          li:nth-last-of-type(1){
            margin-right: 0px;
          }
        }
      }
      .homeContentInforMap{ 
        background: url("../assets/images/home/guocheng.gif") no-repeat;
        background-size: 1100px 650px;
        width: 1100px;
        height: 650px;
        position: absolute;
        top: 182px;
        left: 50%;
        margin-left: -550px;
      }
      .homeContentInforRight{
        background: url("../assets/images/home/bg_right.png") no-repeat;
        background-size: 920px 1313px;
        width: 920px;
        height: 1313px;
        position: absolute;
        top: 650px;
        right: 0;
      }
      .homeContentInforPlannedSchedule{
        width: 1200px;
        height: 465px;  
        position: absolute;
        top: 990px;
        left: 50%;
        margin-left: -543.5px;
        .ImgLeft{
          display: inline-block;
          vertical-align: middle;
          margin-left: 44px;
          img{
            width: 702px;
          }
        }
        .TextRight{
          display: inline-block;
          margin-left: 50px;
          margin-bottom: 20px;
          vertical-align: middle;
          .TextRightHt{
            justify-content: center;
            display: flex;
            img{
              width: 44px;
              height: 44px;
              margin-right: 20px;
            }
            span{
              font-size: 36px;
              display: inline-block;
              height: 36px;
              line-height: 40px;
            }
          }
          .TextRightHf{
            margin-top: 35px;
            padding: 0 40px 0 40px;
            p{
              margin-top: 16px;
            }
            p:nth-of-type(1){
              margin-top: 0;
            }
            img{
              width: 12px;
              height: 8px;
              margin-right: 9px;
            }
            span{
              font-size: 17px;
              display: inline-block;
              height: 17px;
              line-height: 17px;
            }
          }
        }
      }
      .homeContentInforShipTracking{
        width: 1200px;
        height: 532px;  
        position: absolute;
        bottom: 860px;
        left: 50%;
        margin-left: -570px;
        
        .ImgLeft{
          display: inline-block;
          vertical-align: middle;
          img{
            width: 702px;
          }
        }
        .TextRight{
          display: inline-block;
          margin-left: 80px;
          margin-right: 70px;
          vertical-align: middle;
          .TextRightHt{
            justify-content: center;
            display: flex;
            img{
              width: 44px;
              height: 44px;
              margin-right: 20px;
            }
            span{
              font-size: 36px;
              display: inline-block;
              height: 36px;
              line-height: 40px;
            }
          }
          .TextRightHf{
            margin-top: 35px;
            padding: 0 0 0 45px;
            p{
              margin-top: 16px;
            }
            p:nth-of-type(1){
              margin-top: 0;
            }
            img{
              width: 12px;
              height: 8px;
              margin-right: 9px;
            }
            span{
              font-size: 17px;
              display: inline-block;
              height: 17px;
              line-height: 17px;
            }
          }
        }
      }
      .homeContentInforContainerTracking{
        width: 1200px;
        height: 449px;  
        position: absolute;
        bottom: 350px;
        left: 50%;
        margin-left: -571px;
        .ImgLeft{
          display: inline-block;
          margin-left: 60px;
          vertical-align: middle;
          img{
            width: 702px;
          }
        }
        .TextRight{
          display: inline-block;
          margin-left: 32px;
          vertical-align: middle;
          .TextRightHt{
            justify-content: center;
            display: flex;
            img{
              width: 44px;
              height: 44px;
              margin-right: 20px;
            }
            span{
              font-size: 36px;
              display: inline-block;
              height: 36px;
              line-height: 40px;
            }
          }
          .TextRightHf{
            margin-top: 35px;
            padding: 0 0 0 46px;
            p{
              margin-top: 16px;
            }
            p:nth-of-type(1){
              margin-top: 0;
            }
            img{
              width: 12px;
              height: 8px;
              margin-right: 9px;
            }
            span{
              font-size: 17px;
              display: inline-block;
              height: 17px;
              line-height: 17px;
            }
          }
        }
      }
      .homeContentInforLeft{
        background: url("../assets/images/home/bg_left.png") no-repeat;
        background-size: 860px 1223px;
        width: 860px;
        height: 1223px;
        position: absolute;
        bottom: 0;
      }
    }
    .homeFooterBanner{
      width: 100%;
      height: 65px;
      background-color: #072c4c;
      color: #fff;
      padding-top: 15px;
      .part_one{
        display: flex;
        justify-content: center;
        margin-bottom: 4px;
      }
      .part_two{
        display: flex;
        justify-content: center;
      }
      p{
        padding-right: 10px;
        padding-left: 10px;
        font-size: 12px;
      }
      p.tesp{
        border: 0;
      }  
      p.underline{
        cursor: pointer;
        &:hover{
          text-decoration:underline;
        }
      }  
      .xian_line{
        display: inline-block;
        width: 1px;
        height: 12px;
        background-color: #fff;
        margin-top: 2px;
      }
    }
    .homeFooterBannerTr{
      background: url("../assets/images/home/bolang.png") no-repeat;
      background-size: 100% 100%;
      position: fixed;
      bottom: 0;
      width: 100%;
      height: 65px;
      background-color: #072c4c;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      p{
        padding-right: 10px;
        padding-left: 10px;
        font-size: 12px;
      }
      p.tesp{
        border: 0;
      }  
      p.underline{
        cursor: pointer;
        &:hover{
          text-decoration:underline;
        }
      }  
      .xian_line{
        display: inline-block;
        width: 1px;
        height: 12px;
        background-color: #fff;
        margin-top: 2px;
      }
    }
  }
  .homeFooter{
    height: 464px;
    text-align: center;
    position: relative;
    background: #0b365a;
    color: #fff;
    .homeFooterContent{
      width: 100%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      .homeFooterDownLoad{
        margin-top: 67px;
        font-size: 46px;
        height: 46px;
        line-height: 46px;
        margin-bottom: 54px;
      }
      .homeFooterDownLoadDb{
        p{
          display: inline-block;
          .icon_diannao{
            background: url("../assets/images/home/icon_diannao.png") no-repeat;
            background-size: 175px 175px;
            display: block;
            width: 175px;
            height: 175px;
            cursor: pointer;
          }
          .icon_diannao:hover{
            background: url("../assets/images/home/icon_downLoad.png") no-repeat;
            background-position: 50%;
          }
          .icon_android{
            background: url("../assets/images/home/androidIm.png") no-repeat;
            background-size: 175px 175px;
            display: block;
            width: 175px;
            height: 175px;
            cursor: pointer;
          }
          .icon_android:hover{
            background: url("../assets/images/home/androidMa.png") no-repeat;
            background-position: 50%;
          }
          .icon_gongzhonghao{
            background: url("../assets/images/home/icon_gongzhonghao.png") no-repeat;
            background-size: 175px 175px;
            display: block;
            width: 175px;
            height: 175px;
            cursor: pointer;
          }
          .icon_gongzhonghao:hover{
            background: url("../assets/images/home/icon_gongzhonghaoCode.jpg") no-repeat;
            background-size: 175px 175px;
          }
          span{
            margin-top: 39px;
            display: block;
            font-size: 16px;
            height: 16px;
            line-height: 16px;
          }
        }
        p.android_image{
          margin: 0 180px;
        }
      }
    }
  }
  .homeFooterBanner{
    width: 100%;
    height: 65px;
    background-color: #072c4c;
    color: #fff;
    padding-top: 15px;
    p{
      padding-right: 10px;
      padding-left: 10px;
      font-size: 12px;
    }
    p.tesp{
      border: 0;
    }  
    p.underline{
      cursor: pointer;
      &:hover{
        text-decoration:underline;
      }
    }  
    .xian_line{
      display: inline-block;
      width: 1px;
      height: 12px;
      background-color: #fff;
      margin-top: 2px;
    }
  }
  .homeFooterBannerTr{
    background: url("../assets/images/home/bolang.png") no-repeat;
    background-size: 100% 100%;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 65px;
    background-color: #072c4c;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    p{
      padding-right: 10px;
      padding-left: 10px;
      font-size: 12px;
    }
    p.tesp{
      border: 0;
    }  
    p.underline{
      cursor: pointer;
      &:hover{
        text-decoration:underline;
      }
    }  
    .xian_line{
      display: inline-block;
      width: 1px;
      height: 12px;
      background-color: #fff;
      margin-top: 2px;
    }
  }
</style>
<style lang="scss">
.tesInner .el-input__suffix{
  top: -8px !important;
}

.pol_portname li:hover{
  padding: 0 16.5px;
  background: #f2f2f2;
  color: #007CE3;
  font-weight: bold;
}
.teshuPolname .el-input__inner::placeholder{
    color: #282828 !important;
}
.polCityInfo_portname{
  width: 200px;
}
.select_option {
  margin-left: -21px;
}
.select_option .el-autocomplete-suggestion__wrap{
  max-height: 228px;
}
.select_option .el-autocomplete-suggestion__wrap li{
  line-height: 33px;
}
.select_option .el-select-dropdown__wrap{
  max-height: 234px;
}
.pod_portname .el-select-dropdown__item:hover{
  padding: 0 13px;
}
.homeSearchShip{
  .el-tabs__item{
    padding: 6px 19px !important;
    color: #fff;
    height: 30px;
    line-height: 18px;
    padding: 0;
    text-align: center;
    border-radius: 15px;
    font-size: 18px;
  }
  .el-tabs__item.is-active{
    padding: 6px 19px !important;
    color: #fff;
    height: 30px;
    border-radius: 15px;
    background-color: #5c74a0;
    font-size: 18px;
  }
  .el-tabs__nav-wrap::after{
    content: none;
  }
  .el-tabs__active-bar{
    height: 0;
  }
  .el-tabs__header{
    margin: 0;
  }
  .el-tabs__nav-wrap{
    height: 30px;
  }
  .el-tabs__nav-scroll{
    height: 30px;
    padding: 0 0 0 18px;
  }
  .el-tabs__nav{
    height: 30px;
  }
  .el-select{
    width: 100%;
    .el-input__icon{
      line-height: 19px !important;
    }
  }
  .el-input__inner{
    border: 0;
    font-size: 16px;
    height: 24px;
    line-height: 22px;
    padding: 0 30px 0 0 !important;
    vertical-align: middle;
    color: #282828;
  }
  .el-input__icon{
    line-height: 24px !important;
  }
  .el-input__inner::placeholder{
    color: #909090;
  }
  .el-input--medium {
    font-size: 14px;
    height: 14px;
    line-height: 14px;
  }
  .polHome{
    width: 289px;
  }
  .podHome{
    width: 374px;
    border-right: 1px solid #f2f2f2;
    margin-right: 24px;
  }
  .dateHome{
    width: 170px;
    .dateBoxIpt{
      width: 100%;
      height: 20px;
      line-height: 20px;
      position: relative;
      .el-date-editor.el-input, .el-date-editor.el-input__inner{
        width: 100%;
      }
      .el-input__inner{
        font-size: 16px;
        padding-left: 20px !important;
      }
      .el-input__icon{
        height: 18px;
        line-height: 18px;
        font-size: 16px;
        position: absolute;
        left: -10px;
        top: -1px;
      }
    }
  }
  .lidaoHome{
    width: 60px;
    .outPort{
      margin-bottom: -6px;
    }
    .el-radio__inner{
      position: relative;
      height: 14px;
      width: 14px;
      line-height: 14px;
      border: 3px solid #d1d1d1;
    }
    .el-radio__label{
      font-size: 16px;
      height: 16px;
      line-height: 17px;
      color: #909090 !important;
    }
    .el-radio__inner::after{
      width: 6px;
      height: 6px;
    }  
  }
  .teshu_por{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 31px;
    line-height: 31px;
    background-color: #395670;
    padding-left: 20px;
    color: #fff;
    font-size: 11px;
    border-radius: 4px 4px 0 0px;
    .teshu_tip{
      position: absolute;
      right: 20px;
      top: 0;
    }
  }
  .dropdown-search-first{
    display: block;
    float: left;
  }
  .dropdown-search-second{
    display: block;
    float: right;
    margin-left: 10px;
  }        
  .sele_nod{
    .head_chi_e{
      width: 100%;
      height: 31px;
      line-height: 31px;
      background-color: #395670;
      padding-left: 20px;
      color: #fff;
      font-size: 11px;
      border-radius: 4px 4px 0 0px;
    }
    .sle_no_text{
      width: 100%;
      height: 40px;
      line-height: 40px;
      text-align: center;
      font-size: 12px;
      color: #282828;
    }
  }
  .polCityInfo{
      width: 172px !important;
      border-right: 1px solid #f2f2f2;
      margin-right: 20px;
  }
  .gangInput{
    width: 350px;
    border-right: 1px solid #f2f2f2;
    margin-right: 20px;
  }
  .tranckInput{
    width: 500px;
    border-right: 1px solid #f2f2f2;
    margin-right: 20px;
  }
  .trackInFo{
      width: 365px !important;
      border-right: 1px solid #f2f2f2;
      margin-right: 20px;
  }
  .tranckInputShip{
    width: 230px;
  }
  
  .home_radio{
    width: auto;
    position: absolute;
    right: 24px;
    top: 39px;
    .el-radio{
      margin-right: 20px;
      .el-radio__label{
        font-size: 16px !important;
      }
    }
    .chuRodio{
      margin-right: 0px;
    }
    .el-radio__inner{
      border: 4px solid #d1d1d1;
    }
  }
  .newwfooter{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 1px;
    height: 121px;
    text-align: center;
    padding-top: 36px;
    font-size: 14px;
    line-height: 30px;
    color: #fff;
  }
}
.gangq_port{
  margin-top: 15px !important;
  //处理的箭头
  .popper__arrow{
    top: 0px !important;
    border-bottom-color: transparent !important;
    &::after{
      border-bottom-color: transparent !important;
    }
  }
}
.pol_portname{
    margin-top: 15px;
  .el-input__inner::placeholder{
      color: #282828 !important;
  }
  border: 0 !important;
  //处理的箭头
  .popper__arrow{
    top: 0px !important;
    border-bottom-color: transparent !important;
    &::after{
      border-bottom-color: transparent !important;
    }
  }
  //处理的滚动条
  .el-scrollbar__bar.is-vertical{
    top: 31px !important;
  }
  li:hover{
    padding: 0 16.5px;
    background: #f2f2f2;
    color: #007CE3;
    font-weight: bold;
  }
}
.select_option {
  margin-left: -21px;
}
.select_option .el-autocomplete-suggestion__wrap{
  max-height: 228px;
}
.select_option .el-autocomplete-suggestion__wrap li{
  line-height: 33px;
}
.el-autocomplete-suggestion .el-popper {
  display: none;
}
.select_option .el-select-dropdown__wrap{
  max-height: 234px;
}
.selectRr{
  position: absolute;
  max-width: 615px;
  min-width: 530px;
  max-height: 240px;
  min-height: 200px;
  background-color: #ffffff;
  box-shadow: 0px 2px 12px 0px 
    rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  left: 468px;
  top: 71px;
  overflow-y: hidden;
  overflow-x: hidden;
  margin-bottom: 10px;
  z-index: 100;
  .showLoading{
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: #fff;
    opacity: .8;
    z-index: 3;
    .loading_div{
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      .icon_ioading{
        font-size: 20px;
      }
    }
  }
  .route_h{
    width:100%;
    height: 30px;
    line-height: 30px;
    background-color: #072c4c;
    opacity: 0.8;     
    padding-left: 20px;
    margin-bottom: 3px;
    .route_title{
      color: #ffffff;
      font-size: 11px;
    }
    .route_tip{
      position: absolute;
      right: 20px;
      top: 0;
      color: #ffffff;
      font-size: 11px;
    }
  }
  .diyu_ul{
    width: 100%;
    min-height: 45px;
    border-bottom: 1px solid #f2f2f2;
    margin-left: 20px;
    margin-right: 20px;
    padding-bottom: 7px;
    .diyu_li{
      display: inline-block;
      margin-top: 8px;
      padding-bottom: 4px;
      border-bottom: 2px solid transparent;
      margin-right: 18px;
      font-size: 11px;
      color: #282828;
      cursor: pointer;
      font-weight: 600;
      span{
        width: 100%;
        height: 100%;
        display: inline-block;
      }
    }
  }
  .rout_div{
    margin-left: 20px;
    margin-right: 20px;
    padding-top: 14px;
    padding-bottom: 14px;
    border-bottom: 1px solid #f2f2f2;
    .rout_p{
      font-size: 11px;
      color: #282828;
      font-weight: 600;
    }
    .rout_ui{
      width: 100%;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      .rout_li{
        width: 160px;
        margin-right: 38px;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;       
        margin-top: 14px; 
        cursor: pointer;
      }
      .rout_li:nth-child(3n){
        margin-right: 0px;
      }
      .rout_li:hover{
        color: #007ce3;
        font-weight: 600;
      }
    }
  }
  .rout_over{
    width: 100%;
    max-height: 160px;
    min-height: 124px;
    overflow-y: auto;
  }
  ._home_nodate{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    margin-top: 20px;
    .node_image{
      width: 181px;
      height: 107px;
    }
    .node_text{
      font-size: 12px;
      color: #282828;
      margin-top: 5px;
    }
  }
}
.selectRrMatch{
  max-width: 370px;
  min-width: 320px;
  min-height: 70px;
  margin-bottom: 0;
  .match_ul{
    width: 100%;
    max-height: 260px;
    min-height: 40px;
    overflow-y: auto;
    box-sizing: border-box;
    margin: 5px 0;
    .match_li{
      font-size: 12px;
      line-height: 24px;
      padding: 2px 20px;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      .match_li_left{
        width: 200px;
        margin-right: 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .match_li_right{
        flex: 1;
        text-align: right;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis
      }
    }
    .match_li:hover{
      color: #007ce3;
      font-weight: 600;
    }
  }
  ._home_nodate{
    margin-top: 12px;
  }
}
</style>
<template>
  <!-- 首页船期，跟踪搜索栏 -->
  <div id="Home-search" :style="userInfo =='' ?  'background-color: #072c4c' : 'background-color: #f2f2f2'">
    <!-- 根据 userInfo 判断用户是否登录-->
    <!-- 未登录时的样式显示 -->
    <div class="homeHeader" v-if="userInfo == ''">
      <!-- 背景图部分 -->
      <div class="homeHeaderContent">
        <div class="homeHeaderMap">
          <div class="homeHeaderMapleft">
            <img src="../assets/images/home/nv.png"/>
            
          </div>
        </div>
        <div class="homeHeaderShip">
          <div class="homeHeaderShipRight">
            <img src="../assets/images/home/nan.png"/>
          </div>
        </div>
      </div>
      <!-- 首页主体内容 -->
      <div class="homeSearchShip">
        <!-- 鲸准数据 -->
        <div class="homeSearchShipTitle">{{ $t('home.MakesFreight') }}</div>
        <div class="homeSearchShipSwitch">
          <!-- 搜索框部分 -->
          <el-tabs v-model="activeName" @tab-click="changeTab">
            <!-- 船期部分 -->
            <el-tab-pane :label="$t('home.schedule')" name="schedule">
              <!-- 选择查询条件部分 -->
              <div class="homeSearchShipBorder">
                <!-- 起运港选择框 -->
                <div class="homeSearchShipBorderContent polHome">
                  <p class="portname">Origin</p>
                  <div class="mainname">
                    <img v-if="polValue || pol" src="../assets/images/ship-icon-right.icon.png" width="18" height="18"/>
                    <img v-else src="../assets/images/ship-icon-right.iconhui.png" width="18" height="18"/>
                    <el-select 
                      v-model="pol"
                      :placeholder="$t('home.port')"
                      remote  
                      filterable
                      :no-data-text="$t('no Date')"
                      :remote-method="querySearchPol"
                      @blur="handlePolBlur"
                      @change="changePolId"
                      @focus="focusPol"
                      popper-class="pol_portname select_option"
                    >
                      <div class='select_head'></div>
                      <div class='select_head teshu_por'>
                        <p>{{$t('list.China_English')}}</p>
                        <p class="teshu_tip">{{$t('list.City')}}</p>
                      </div>
                      <el-option
                        v-for="(item, index) in polList"
                        :key="index"
                        :label="item.portEn + '(' + item.portCn + ')'"
                        :value="item.portCode"
                        >
                        <template>
                          <span class="dropdown-search-first">{{ item.portEn + '(' + item.portCn + ')'}}</span>
                          <span class="dropdown-search-second" v-if="$i18n.locale == 'zh-CN'">{{item.cityCn}}</span>
                          <span class="dropdown-search-second" v-if="$i18n.locale == 'en-US'">{{item.cityEn}}</span>
                        </template>
                      </el-option>
                      <div slot='empty'>
                        <div class='sele_nod'>
                          <div class='head_chi_e'>{{$t('list.China_English')}}</div>
                          <p class="sle_no_text">{{$t('no Date')}}</p>
                        </div>
                      </div>
                    </el-select>
                  </div>
                </div>
                <!-- 目的港输入框 -->
                <div class="homeSearchShipBorderContent podHome" id="podLeftTop">
                  <p class="portname">Destination</p>
                  <div class="mainname">
                    <img v-if="podValue || pod" src="../assets/images/ship-incon-left.icon.png" width="18" height="18"/>
                    <img v-else src="../assets/images/ship-icon-right.iconhui.png" width="18" height="18"/>
                    <el-input v-model="pod" :placeholder="$t('home.pleasePort')" class="podInputInner" clearable @input="handlePodInput" @focus="focusPod" @blur="handlePodBlur" @clear="clearPod"></el-input>
                  </div>
                </div>
                <!-- 日期选择框 -->
                <div class="homeSearchShipBorderContent dateHome">
                  <p class="portname">Date</p>
                  <div class="mainname">
                    <div class="dateBoxIpt">
                      <el-date-picker
                        v-model="start"
                        type="date"
                        :placeholder="$t('home.selectDate')"
                        :picker-options="pickerOptions"
                        :clearable=false
                      ></el-date-picker>
                    </div>
                  </div>
                </div>
                <!-- 离港 -->
                <div class="homeSearchShipBorderContent lidaoHome">
                  <div class="mainname">
                    <el-radio v-model="dateType" label="1" class="outPort">{{ $t('home.etd') }}</el-radio>
                  </div>
                </div>
              </div>
              <!-- 热门查询部分 -->
              <ul class="homeSearchShipBreadcrumb" v-if="!userInfo">
                <li class="hot">{{ $t('home.queryExamples')}}</li>
                <li v-for="(item,index) in shippExamp" :key="index">
                  <span @click="jumpList(item)">{{item.portOriginNameEn + "-" +item.portDestinationNameEn}}</span>
                </li>
              </ul>
              <!-- 查询按钮 -->
              <div class="homeSearchShipSearchBtn">
                <el-button @click="goSearch">{{ $t('home.find') }}</el-button>
              </div>
            </el-tab-pane>
            <!-- 船舶定位部分 -->
            <el-tab-pane :label="$t('home.shipPlace')" name="shipdt">
              <div class="homeSearchShipBorder">
                <div class="homeSearchShipBorderContent">
                  <p class="portname">Vessel, call sign, MMSI, IMO number</p>
                  <div class="mainname">
                    <img v-if="shipValue" src="../assets/images/cargo/tidan.png" width="13" height="18"/>
                    <img v-else src="../assets/images/cargo/tidanhui.png" width="13" height="18"/>
                    <el-select 
                        v-model="shipValue"
                        :placeholder="$t('home.MMSIIMOPlaceholder')"
                        remote  
                        filterable
                        :remote-method="shipdtRemote"
                        @focus="shipdtFocus"
                        @change="shipstChange"
                        :no-data-text="$t('no Date')"
                      >
                        <el-option
                            v-for="item in shipdtData"
                            :key="item.mmsi"
                            :label="item.name"
                            :value="item.mmsi"
                            >
                            <span>{{ item.name + "(" + item.mmsi + ")"}}</span>
                        </el-option>
                    </el-select>
                  </div>
                </div>
              </div>
              <!-- 船舶定位示例占位部分 -->
              <ul class="homeSearchShipBreadcrumb" v-if="!userInfo">
                <li class="hot">{{ $t('home.queryExamples')}}</li>
                <li v-for="(item,index) in shiptExamp" :key="index">
                  <span @click="selectShipt(item)">{{item.key + '(' + item.mmsi + ')'}}</span>
                </li>
              </ul>
              <!-- 船舶定位查询按钮 -->
              <div class="homeSearchShipSearchBtn">
                <el-button @click="handleClickShipdt">{{ $t('home.find') }}</el-button>
              </div>
            </el-tab-pane>
            <!-- 集卡部分 -->
            <el-tab-pane :label="$t('home.truck')" name="truck">
              <div class="homeSearchShipBorder">
                <div class="homeSearchShipBorderContent">
                  <p class="portname">Truck No.</p>
                  <div class="mainname">
                    <img v-if="vclN" src="../assets/images/cargo/truckL.png" width="22" height="14"/>
                    <img v-else src="../assets/images/cargo/truckH.png" width="22" height="14"/>
                    <el-input
                        v-model="vclN"
                        :placeholder="$t('home.license')"
                        :no-data-text="$t('no Date')"
                      >
                    </el-input>
                  </div>
                </div>
              </div>
              <!-- 示例占位部分 -->
              <ul class="homeSearchShipBreadcrumb" v-if="!userInfo">
                <li class="hot">{{ $t('home.queryExamples')}}</li>
                <li v-for="(item,index) in truckExamp" :key="index">
                  <span @click="selectTruck(item)">{{item.licensePlateNumber}}</span>
                </li>
              </ul>
              <!-- 查询按钮 -->
              <div class="homeSearchShipSearchBtn">
                <el-button @click="searchTruck">{{ $t('home.find') }}</el-button>
              </div>
            </el-tab-pane>
            <!-- 港区部分 -->
            <el-tab-pane :label="$t('home.gangq')" name="port">
              <div class="homeSearchShipBorder">
                <!-- 提单号 -->
                <div class="homeSearchShipBorderContent polCityInfo">
                  <p class="portname">Type</p>
                  <div class="mainname">
                    <el-select 
                        v-model="isTiandan"
                        @change="changeXT"
                        popper-class="gangq_port"
                    >
                        <el-option
                            v-for="item in tidanXiang"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        >
                        </el-option>
                    </el-select>
                  </div>
                </div>
                <!-- 提单号输入框 -->
                <div class="homeSearchShipBorderContent gangInput">
                  <p class="portname">{{isTiandan == 1 ? 'Order No.' : 'Container No.'}}</p>
                  <div class="mainname">
                    <img v-if="referenceno" src="../assets/images/cargo/tidan.png" width="13" height="18"/>
                    <img v-else src="../assets/images/cargo/tidanhui.png" width="13" height="18"/>
                    <el-input 
                      v-model="referenceno" 
                      :placeholder="$t(gang_place)"
                      clearable
                      @input="referenceno = referenceno.replace(/[^a-zA-Z0-9]/g,'')"
                    >
                    </el-input>
                  </div>
                </div>
                <!-- 船名输入框 -->
                <div class="homeSearchShipBorderContent tranckInputShip">
                  <p class="portname">Vessel</p>
                  <div class="mainname">
                    <img v-if="vslname !== ''" src="../assets/images/cargo/chuangognsi.png" width="18" height="18"/>
                    <img v-else src="../assets/images/cargo/chuan_hui.png" width="18" height="18"/>
                    <el-input 
                        v-model="vslname" 
                        clearable
                        :placeholder="$t('tracks.vessel')"
                        @input="vslname = vslname.replace(/[^a-zA-Z0-9]/g,'')"
                    >
                    </el-input>
                  </div>
                </div>
                <!-- 进出口 -->
                <div class="homeSearchShipBorderContent home_radio">
                  <!-- 出口 -->
                  <el-radio v-model="ieid" label='E'>{{ $t('home.out') }}</el-radio>
                  <!-- 进口 -->
                  <el-radio v-model="ieid" label='I' class="chuRodio">{{ $t('home.in') }}</el-radio>
                </div>
              </div>
              <!-- 示例占位部分 -->
              <ul class="homeSearchShipBreadcrumb" v-if="!userInfo">
                <li class="hot">{{ $t('home.queryExamples')}}</li>
                <li v-for="(item,index) in portExamp" :key="index">
                  <span @click="selectGangq(item)">{{item.type == 0 ? $t('tracks.Bill') : $t('tracks.container')}}/{{item.billLadingNo}}/{{item.isImport ? '进口' : '出口'}}</span>
                </li>
              </ul>
              <!-- 按钮 -->
              <div class="homeSearchShipSearchBtn">
                <el-button @click="gangqFollow">{{ $t('home.trackGo') }}</el-button>
              </div>
            </el-tab-pane>
            <!-- 跟踪部分 -->
            <el-tab-pane :label="$t('home.tracking')" name="track">
              <!-- 选择查询条件部分 -->
              <div class="homeSearchShipBorder">
                <!-- 箱号 -->
                <div class="homeSearchShipBorderContent trackInFo">
                  <p class="portname">Container No.</p>
                  <div class="mainname">
                    <img v-if="containerNumber" src="../assets/images/cargo/tidan.png" width="13" height="18"/>
                    <img v-else src="../assets/images/cargo/tidanhui.png" width="13" height="18"/>
                    <el-input
                      v-model="containerNumber"
                      :placeholder="$t('home.container')"
                      @input="inputContainer"
                      clearable
                    >
                    </el-input>          
                  </div>
                </div>
                <!-- 提单号输入框 -->
                <div class="homeSearchShipBorderContent tranckInput">
                  <p class="portname">Order No.</p>
                  <div class="mainname">
                    <img v-if="billNumber" src="../assets/images/cargo/tidan.png" width="13" height="18"/>
                    <img v-else src="../assets/images/cargo/tidanhui.png" width="13" height="18"/>
                    <el-input 
                      v-model="billNumber"
                      :placeholder="$t('home.billOrBooking')"
                      @input="inputTrack"
                      clearable
                    >
                    </el-input>
                  </div>
                </div>
                <!-- 船公司输入框 -->
                <div class="homeSearchShipBorderContent tranckInputShip">
                  <p class="portname">Carrier</p>
                  <div class="mainname">
                    <img v-if="carrier !== ''" src="../assets/images/cargo/chuangognsi.png" width="18" height="18"/>
                    <img v-else src="../assets/images/cargo/chuan_hui.png" width="18" height="18"/>
                    <el-select
                        v-model="carrier"
                        :placeholder="$t('home.company')"
                        remote
                        filterable
                        v-if="isJiuNCarr"
                    >
                        <el-option
                            v-for="item in tesCarrList"
                            :key="item.code"
                            :label="item.code"
                            :value="item.code"
                        >
                            <span>{{ item.nameScn + "(" + item.code + ")"}}</span>
                        </el-option>
                    </el-select>
                    <el-select
                        v-model="carrier" 
                        filterable
                        remote
                        :placeholder="$t('home.company')"
                        :remote-method="remoteCarrier"
                        @focus="focusCarrier"
                        v-else
                    >
                        <el-option
                            v-for="item in carrList"
                            :key="item.code"
                            :label="item.code"
                            :value="item.code"
                        >
                          <span>{{ item.nameScn + "(" + item.code + ")"}}</span>
                        </el-option>
                    </el-select>
                  </div>
                </div>
              </div>
              <!-- 示例占位部分 -->
              <ul class="homeSearchShipBreadcrumb" v-if="!userInfo">
                <li class="hot">{{ $t('home.queryExamples')}}</li>
                <li v-for="(item,index) in trackExamp" :key="index">
                  <span @click="selectTrack(item)">{{item.type == 0 ? $t('tracks.Bill') : $t('tracks.container')}}/{{item.billLadingNo}}/{{item.shippingCompany}}</span>
                </li>
              </ul>
              <!-- 跟踪按钮 -->
              <div class="homeSearchShipSearchBtn">
                <el-button @click="trackFollow">{{ $t('home.trackGo') }}</el-button>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
    <div v-if="userInfo ==''">
      <div class="homeWhite">
      </div>
      <div class="homeContent">
        <div class="homeContentInfor">
          <ul>
            <li @click="planShip">
              <p>
                <img src="../assets/images/home/icon_chuanqi.png"/>
              </p>
              <p>
                <span>{{ $t('home.plannedSchedule') }}</span>
              </p>
            </li>
            <li @click="shipTracking">
              <p>
                <img src="../assets/images/home/icon_chuanbo.png"/>
              </p>
              <p>
                <span>{{ $t('home.shipTracking') }}</span>
              </p>
            </li>
            <li @click="containerTracking">
              <p>
                <img src="../assets/images/home/icon_xianghuo.png"/>
              </p>
              <p>
                <span>{{ $t('home.containerTracking') }}</span>
              </p>
            </li>
          </ul>
          <div class="homeContentInforMap">
        
          </div>
          <div class="homeContentInforRight">
        
          </div>
          <div class="homeContentInforLeft">
        
          </div>
          <div class="homeContentInforPlannedSchedule">
            <div class="ImgLeft">
              <img src="../assets/images/home/chanqi.png"/>
            </div>
            <div class="TextRight">
              <div class="TextRightHt">
                <img src="../assets/images/home/icon_chuanqi.png"/>
                <span>{{ $t('home.plannedSchedule') }}</span>
              </div>
              <div class="TextRightHf">
                <p>
                  <img src="../assets/images/home/duihao.png"/>
                  <span>{{ $t('home.RealTime') }}</span>
                </p>
                <p>
                  <img src="../assets/images/home/duihao.png"/>
                  <span>{{ $t('home.commonCabin') }}</span>
                </p>
                <p>
                  <img src="../assets/images/home/duihao.png"/>
                  <span>{{ $t('home.cutOff') }}</span>
                </p>
                <p>
                  <img src="../assets/images/home/duihao.png"/>
                  <span>{{ $t('home.departure') }}</span>
                </p>
                <p>
                  <img src="../assets/images/home/duihao.png"/>
                  <span>{{ $t('home.punctuality') }}</span>
                </p>
              </div>
            </div>
          </div>
          <div class="homeContentInforShipTracking">
            <div class="TextRight">
              <div class="TextRightHt">
                <img src="../assets/images/home/icon_chuanbo.png"/>
                <span>{{ $t('home.shipTracking') }}</span>
              </div>
              <div class="TextRightHf">
                <p>
                  <img src="../assets/images/home/duihao.png"/>
                  <span>{{ $t('home.file') }}</span>
                </p>
                <p>
                  <img src="../assets/images/home/duihao.png"/>
                  <span>{{ $t('home.currentPosition') }}</span>
                </p>
                <p>
                  <img src="../assets/images/home/duihao.png"/>
                  <span>{{ $t('home.trajectory') }}</span>
                </p>
                <p>
                  <img src="../assets/images/home/duihao.png"/>
                  <span>{{ $t('home.dockingPlan') }}</span>
                </p>
              </div>
            </div>
            <div class="ImgLeft">
              <img src="../assets/images/home/chuanbo.png"/>
            </div>
          </div>
          <div class="homeContentInforContainerTracking">
            <div class="ImgLeft">
              <img src="../assets/images/home/xianghuo.png"/>
            </div>
            <div class="TextRight">
              <div class="TextRightHt">
                <img src="../assets/images/home/icon_xianghuo.png"/>
                <span>{{ $t('home.containerTracking') }}</span>
              </div>
              <div class="TextRightHf">
                <p>
                  <img src="../assets/images/home/duihao.png"/>
                  <span>{{ $t('nodeInfo.STSP') }}</span>
                </p>
                <p>
                  <img src="../assets/images/home/duihao.png"/>
                  <span>{{ $t('home.operationPlan') }}</span>
                </p>
                <p>
                  <img src="../assets/images/home/duihao.png"/>
                  <span>{{ $t('home.phoneAlerts') }}</span>
                </p>
                <p>
                  <img src="../assets/images/home/duihao.png"/>
                  <span>{{ $t('home.abnormalWarning') }}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="homeFooter">
        <div class="homeFooterContent">
          <div class="homeFooterDownLoad">
            {{ $t('home.downLoad') }}
          </div>
          <div class="homeFooterDownLoadDb">
            <p @click="handleDownLoad">
              <i class="icon_diannao"></i>
              <span> {{ $t('home.windows') }}</span>
            </p>
            <p class="android_image">
              <i class="icon_android"></i>
              <span> {{ $t('download.Android') }}</span>
            </p>
            <p>
              <i class="icon_gongzhonghao"></i>
              <span> {{ $t('home.weChat') }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部 -->
    <div class="homeFooterBanner" style="background-color: #072c4c;">
      <div class="part_one">
        <p @click="handleClickAboutM" class="underline">{{$t('introduction.aboutM')}}</p>
        <span class="xian_line"></span>
        <p @click="handleClickContactUs" class="underline">{{$t('introduction.contactUs')}}</p>
        <span class="xian_line"></span>
        <p>{{$t('home.complaintPhone')}}</p>
        <span class="xian_line"></span>
        <p class="tesp">©2019 - 2020 Whale Calling. All Rights Reserved</p>
        <span class="xian_line"></span>
        <p @click="handleClickBeiAnNum" class="underline">沪ICP备20010868号-1</p>
      </div>
      <div class="part_two">
        <p style="padding-right: 0">{{$t('introduction.apiJiekou')}}</p>
        <p class="underline" @click="contactCustomer()">{{$t('introduction.chuanqiApi')}}</p>
        <p style="padding-left: 0" class="underline" @click="contactCustomer()">{{$t('introduction.chuanbojihuaApi')}}</p>
        <p style="padding-left: 0" class="underline" @click="contactCustomer()">{{$t('introduction.chuanbodingweiApi')}}</p>
        <p style="padding-left: 0" class="underline" @click="contactCustomer()">{{$t('introduction.gangquApi')}}</p>
        <p style="padding-left: 0" class="underline" @click="contactCustomer()">{{$t('introduction.chuangongsiApi')}}</p>
      </div>
    </div>
    <!-- 右侧回顶部 -->
    <div class="newwfooter">
      <div class="go-top" @click="goTop"></div>
      <div class="inline" @click="contactCustomer()"></div>
      <div class="goTop"></div>
    </div>

    <!-- 目的港下拉框--无输入匹配 -->
    <div class="selectRr" v-if="selectRout" @mouseenter="mouseenter" @mouseleave="mouseleave" :style="{left:podLeft + 'px',top:podTop + 'px'}">
      <div v-if="showLoading" class="showLoading">
        <div class="loading_div">
          <i class="el-icon-loading icon_ioading"></i>
        </div>
      </div>
      <div class="route_h">
        <p class="route_title">{{$t('list.China_English')}}</p>
      </div>
      <ul class="diyu_ul" v-if="selectList.length > 0">
        <li class="diyu_li" v-for="(item,index) in selectList" :key="index" :style=" selectIndex == index ? 'border-bottom: 2px solid #072c4c;' : ''" @click="changeRoute(index)">
          <span v-if="$i18n.locale == 'zh-CN'">{{item.areaCn}}</span>
          <span v-if="$i18n.locale == 'en-US'">{{item.areaCode}}</span>
        </li>
      </ul>
      <div class="rout_over myscrollbar" v-if="partList.length > 0" id="rout_over">
        <div class="rout_div" v-for="(item,index) in partList" :key="index">
          <p class="rout_p" v-if="$i18n.locale == 'zh-CN'">{{item.routeCn}}</p>
          <p class="rout_p" v-if="$i18n.locale == 'en-US'">{{item.routeEn}}</p>
          <ul class="rout_ui">
            <li class="rout_li" v-for="route in item.ports" :key="route.portId" v-title="route.portEn + '(' + route.portCn + ')'" @click="selectPod(route)">
              {{route.portEn + '(' + route.portCn + ')'}}
            </li>
          </ul>
        </div>
      </div>
      <div class="_home_nodate" v-if="selectList.length == 0">
        <img src="../assets/images/_table/icon_Nodata.png" class="node_image">
        <p class="node_text">{{$t('no Date')}}</p>
      </div>
    </div>
    <!-- 目的港下拉框--有输入匹配 -->
    <div class="selectRr selectRrMatch" v-if="selectRoutMatch" @mouseenter="mouseenter" @mouseleave="mouseleave" :style="{left:podLeft + 'px',top:podTop + 'px'}">
      <div v-if="showLoading" class="showLoading">
        <div class="loading_div">
          <i class="el-icon-loading icon_ioading"></i>
        </div>
      </div>
      <div class="route_h">
        <p class="route_title">{{$t('list.China_English')}}</p>
        <p class="route_tip">{{$t('list.Country_Route')}}</p>
      </div>
      <ul class="match_ul myscrollbar" v-if="partListMatch.length > 0">
        <li class="match_li" v-for="route in partListMatch" :key="route.portId" v-title="route.portEn + '(' + route.portCn + ')'" @click="selectPod(route)">
          <span class="match_li_left" v-title="route.portEn + '(' + route.portCn + ')'">{{route.portEn + '(' + route.portCn + ')'}}</span>
          <span v-if="$i18n.locale == 'zh-CN'" class="match_li_right" v-title="route.countryCn ? route.countryCn + '-' + route.routeCn : route.routeCn">{{route.countryCn ? route.countryCn + '-' : ''}}{{route.routeCn}}</span>
          <span v-if="$i18n.locale == 'en-US'" class="match_li_right" v-title="route.countryCode ? route.countryCode + '-' + route.routeEn : route.routeEn">{{route.countryCode ? route.countryCode + '-' : ''}}{{route.routeEn}}</span>
        </li>
      </ul>
      <div class="_home_nodate" v-if="selectList.length == 0">
        <p class="node_text">{{$t('no Date')}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isLoading: false,
      isShowLoading: false,
      activeName: 'schedule',
      //未登录
      //船期
      polValue: '', //起始港value
      podValue: '', //目的港value
      pol: "SHANGHAI(上海)",
      polId: "CNSHA",
      pod: "",
      podId: "",
      podList: [],
      polList: [],
      start: "",
      end: "",
      dateType: "1",
      pickerOptions: {},
      shippExamp:[],

      //船舶
      shipValue: '', //显示船名
      shipdt: '', //接口船名
      shipMmsi: '', //接口mmsi
      shipdtData: [],
      shiptExamp: [],

      //港区
      gang_place: 'home.billOrBooking', //'home.container'
      isTiandan: 1,
      referenceno: '', //提单号/箱号
      ieid: 'E',//E出口 I 进口 
      vslname: '', //船名
      tidanXiang: [
          {
              label: '提单号',
              value: 1
          },
          {
              label: '箱号',
              value: 2
          },
      ],
      portExamp: [],

      //跟踪
      containerNumber: '',//箱号
      billNumber: '', //提单号
      carrier: '', //船公司
      isJiuNCarr: false,
      carrList: [], //船公司列表
      tesCarrList: [// msk mcc
          {
              code: "MSK",
              nameCn: "马士基航运有限公司",
              nameEn: "MAERSK（SEALAND）SHIPPING CO.,LTD. ",
              nameScn: "马士基",
              scac: "MAEU",
          },
          {
              code: "MCC",
              nameCn: "MCC运输新加坡有限公司",
              nameEn: "Mercantile Cargo Consolidators.",
              nameScn: "MCC运输",
              scac: "MCPU",
          }
      ],
      trackExamp: [],

      //集卡
      vclN: "", //车牌号/车架号
      truckExamp: [],

      //登录
      //船期目的港下拉框
      selectIndex: '',
      showLoading: true,
      selectRout: false,
      selectRoutMatch: false,
      oldP: '',
      selectList: [],
      partList: [],
      partListMatch: [],
      isMouse: true,
      podLeft: 0,
      podTop: 0,
      num: 0,

      //其他
      userInfo:
          this.getCookie("authId") !== null && this.getCookie("authId") !== "" && this.getCookie("authId") !== undefined
          ? this.getCookie("authId")
          : "",
    };
  },
  computed: {
    language(){
      return localStorage.getItem('language');
    }
  },
  methods: {    
    querySearchPol(value){
      this.polValue = value
      var that = this
      this.$Axios.get(this.GLOBAL.url + `schedules/web/queryCity?pol=0&city=` + value,{
        headers: {
            Authorization: this.getToken()
      },
      }).then(res => {
        if(res.data.status == 1){
            that.polList = res.data.content
        }
      }).catch((err)=>{
          
      })
    },
    handlePolBlur(){
      if(this.pol ==''){
        this.polValue = ''
      }
    },
    changePolId(value){
      for (let i = 0; i < this.polList.length; i++) {
        if(this.polList[i].portCode === value){
          this.polId = this.polList[i].portCode
          this.pol = this.polList[i].portEn + '(' + this.polList[i].portCn + ')'
        }
      }
    },
    focusPol(){
      var that = this
      this.$Axios.get(this.GLOBAL.url + `schedules/web/queryCity?pol=0&city=`,{
        headers: {
            Authorization: this.getToken()
      },
      }).then(res => {
        if(res.data.status == 1){
            that.polList = res.data.content
        }
      }).catch((err)=>{
          
      })
    },
    querySearchAsync3(value){
      this.podValue = value
      var that = this
      this.$Axios.get(this.GLOBAL.url + "schedules/web/queryPort?search=" + value,{
        headers: {
            Authorization: this.getToken()
      },
      }).then(res => {
        if(res.data.status == 1){
            that.podList = res.data.content
        }
      }).catch((err)=>{
          
      })
    },
    //清空目的港输入框
    clearPod(){
        this.podValue = ''
        this.selectRout = false
        this.selectRoutMatch = false
    },
    focusPod(){
      var that = this
      if(this.oldP != ''){
        this.selectRout = false
        this.selectRoutMatch = true
      }else{
        this.selectRout = true
        this.selectRoutMatch = false
      }
      if(that.selectList.length == 0 || this.pod === ''){
        that.selectIndex = 0
        that.showLoading = true
        this.$Axios.get(this.GLOBAL.url + "schedules/port/getAreaDetails?search=",{
          headers: {
              Authorization: this.getToken()
        },
        }).then(res => {
            if(res.data.status == 1){
                that.showLoading = false
                that.selectList = res.data.content
                if(that.selectList.length > 0){
                  that.partList = that.selectList[0].routes
                  that.partListMatch = []
                  for(let i=0; i<that.selectList.length; i++){
                    let portServiceMatch = that.selectList[i].routes
                    for(let j=0; j<portServiceMatch.length; j++){
                      for (let p = 0; p < portServiceMatch[j].ports.length; p++) {
                        portServiceMatch[j].ports[p].routeCn = portServiceMatch[j].routeCn
                        portServiceMatch[j].ports[p].routeEn = portServiceMatch[j].routeEn
                      }
                      that.partListMatch = that.partListMatch.concat(portServiceMatch[j].ports)
                    }
                  }
                }else{
                  that.partList = []
                  that.partListMatch = []
                }
            }
          }).catch((err)=>{
              
          })
      }
    },
    handlePodInput(value){
      this.num++
      let a = this.num
      this.selectIndex = 0
      var that = this
      that.showLoading = true
      that.selectRout = true
      if(value != ''){
        this.selectRout = false
        this.selectRoutMatch = true
      }else{
        this.selectRout = true
        this.selectRoutMatch = false
      }
      var newVal = JSON.parse(JSON.stringify(value))
      if(this.oldP !== newVal){
        this.oldP = newVal
        this.$Axios.get(this.GLOBAL.url + "schedules/port/getAreaDetails?search=" + newVal,{
          headers: {
              Authorization: this.getToken()
        },
        }).then(res => {
            if(res.data.status == 1){
              if(a == this.num){
                that.showLoading = false
                that.selectList = res.data.content
                if(that.selectList.length > 0){
                  that.partList = that.selectList[0].routes
                  that.partListMatch = []
                  for(let i=0; i<that.selectList.length; i++){
                    let portServiceMatch = that.selectList[i].routes
                    for(let j=0; j<portServiceMatch.length; j++){
                      for (let p = 0; p < portServiceMatch[j].ports.length; p++) {
                        portServiceMatch[j].ports[p].routeCn = portServiceMatch[j].routeCn
                        portServiceMatch[j].ports[p].routeEn = portServiceMatch[j].routeEn
                      }
                      that.partListMatch = that.partListMatch.concat(portServiceMatch[j].ports)
                    }
                  }
                }else{
                  that.partList = []
                  that.partListMatch = []
                }
              }
            }
          }).catch((err)=>{
              
          })
      }
    },
    handlePodBlur(value){
      if(this.isMouse){
        this.selectRout = false
        this.selectRoutMatch = false
      }
    },
    selectPod(item){
      this.pod = item.portEn + '(' + item.portCn + ')'
      this.podId = item.portCode
      this.selectRout = false
      this.selectRoutMatch = false
    },
    changeRoute(index){
      this.selectIndex = index
      this.partList = this.selectList[this.selectIndex].routes
      $('#rout_over').animate({
        scrollTop: 0
      }, 500)
    },
    mouseenter(){
      this.isMouse = false
    },
    mouseleave(){
      this.isMouse = true
    },
    jumpList(item){
      this.pol = item.portOriginNameEn + '(' + item.portOriginNameCn + ')'
      this.polId = item.polcode
      this.pod = item.portDestinationNameEn + '(' + item.portDestinationNameCn + ')'
      this.podId = item.podcode
      this.dateType = item.isDeparture ? '2' : '1'
    },
      async goSearch() {
          try {
              const getPath = await this.$options.goSearch.call(this);
              const example = this.shippExamp || [];

              for (let i = 0; i < example.length; i++) {
                  var pol = example[i].portOriginNameEn + '(' + example[i].portOriginNameCn + ')'
                  var polId = example[i].polcode
                  var pod = example[i].portDestinationNameEn + '(' + example[i].portDestinationNameCn + ')'
                  var podId = example[i].podcode
                  var dateType = example[i].isDeparture ? '2' : '1';
                  if (pol == this.pol && polId == this.polId && pod == this.pod && podId == this.podId && dateType == this.dateType) {
                      //则代表点击的不是示例数据
                      //如果存储的接口 返回有值
                      return this.$router.push({
                          path: getPath()
                      });
                  }
              }
              this.sampleData(2, () => ({path: getPath()}))
          } catch (e) {
              let object = {type: 'warning'};
              if (typeof e === 'string') {
                  object = {type: 'warning', message: e};
              } else if(typeof e === 'object' && typeof e.type === 'string') {
                  object = e;
              } else {
                  return console.error(e);
              }
              this.$message(Object.assign(object, {customClass: 'base-message-zindex'}));
          }
      },

    //船舶事件
    shipdtRemote(value){
      var that = this
      //获取航线专家起始港下拉框
      this.$Axios.get(that.GLOBAL.url + `schedules/web/vessels?kw=${value}`,{
        headers: {
            Authorization: this.getToken()
      },
      }).then(res => {
        if(res.data.status == 1){
            that.shipdtData = res.data.content
        }
      }).catch((err)=>{
          
      })
    },
    shipdtFocus(){
      var that = this
      this.$Axios.get(that.GLOBAL.url + `schedules/web/vessels?kw=${this.shipdt}`,{
        headers: {
            Authorization: this.getToken()
      },
      }).then(res => {
        if(res.data.status == 1){
            that.shipdtData = res.data.content
        }
      }).catch((err)=>{
          
      })
    },
    shipstChange(val){
      if(val){
        for (let i = 0; i < this.shipdtData.length; i++) {
          if(this.shipdtData[i].mmsi == val){
              this.shipdt = this.shipdtData[i].name
              this.shipMmsi = this.shipdtData[i].mmsi
          }
        }
      }else{
        this.shipdt = ''
        this.shipMmsi = ''
      }
    },
    selectShipt(item){
      //item.key是船名
      this.shipValue = item.key
      this.shipdt = item.key
      this.shipMmsi = item.mmsi ? item.mmsi : ''
    },
    handleClickShipdt(){
      var that = this
      if(that.shipdt == ''){
        that.$message({
          message: that.$t('home.MMSIIMO'),
          type: "warning",
          customClass:'base-message-zindex'
        });
        return false
      }

      const parameter = {
          name: 'vessel',
          params: {
              shipdt: that.shipdt,
              mmsi: that.shipMmsi,
          },
      }

      if (this.userInfo) {
          return that.$router.push(parameter)
      }
        const example = that.shiptExamp || [];
      for (let i = 0; i < example.length; i++) {
        if(that.shipdt == example[i].key){
          that.$router.push(parameter)
          return
        }
      }
      this.sampleData(2, parameter)
    },

    //港区
    changeXT(val){
      if(val == 1){ //提单号
        this.gang_place = 'home.billOrBooking'
      }else{
        this.gang_place = 'home.container'
      }
    },
    selectGangq(item){
      this.isTiandan = item.type ?  2 : 1
      this.referenceno = item.billLadingNo
      this.ieid = item.isImport ? 'I' : 'E'
      this.vslname = item.nameOfVessel
    },
    gangqFollow(){
      var that = this
      if(that.referenceno == '' || that.referenceno == null || that.referenceno == undefined) {
          that.$message({
              message: '请输入提单号或者箱号',
              type: "warning",
              customClass:'base-message-zindex'
          });
          return false;
      }
      if(that.isTiandan == 1){ //提单号
          var reg = /^[A-Za-z]{3}U\d{7}$/
          if(reg.test(that.referenceno)){
              that.$message({
                  message: that.$t('messages.boxNumber'),
                  type: "error",
                  customClass:'base-message-zindex'
              })
              return  false
          }

        //提单号小于4位  属于不规范
        if(that.referenceno.length <= 4){
            this.$message({
                message: that.$t('messages.ladingIrr'),
                type: "error",
                customClass:'base-message-zindex'
            })
            return
        }
      }else{ //箱号
          if(that.referenceno.length !== 11){
              that.$message({
                  message: that.$t('messages.incorrect'),
                  type: "error",
                  customClass:'base-message-zindex'
              })
              return  false
          }
      }

      const parameter = {
          name: 'portCnsha',
          params: {
              isTiandan: that.isTiandan,
              referenceno: that.referenceno ? that.referenceno.toUpperCase() : '',
              ieid: that.ieid,
              vslname: that.vslname,
          }
      }

        const example = that.portExamp || [];
      for (let i = 0; i < example.length; i++) {
        var isTiandan = example[i].type ?  2 : 1
        var ieid = example[i].isImport ? 'I' : 'E'
        if(that.isTiandan == isTiandan && that.referenceno ==example[i].billLadingNo && that.ieid == ieid && that.vslname == example[i].nameOfVessel){
          that.$router.push(parameter)
          return
        }
      }
      that.sampleData(2, parameter)
    },
    //输入箱号获取船公司
    inputContainer(val){
        var that = this
        that.containerNumber = val.replace(/[^a-zA-Z0-9]/g,'')
        if(val && !that.billNumber){ //如果没有输入提单号 则 根据箱号匹配船公司
            that.$Axios.get(that.GLOBAL.url + "trace/fore/getContainerShipping?ref=" + val,{
                headers: {
                    Authorization: that.getToken()
            },
            }).then(res => {
                if(res.data.status == 1){
                    if(res.data.content.length > 0){
                        if(res.data.content[0]){
                            that.carrier = res.data.content[0].code ? res.data.content[0].code : ''
                        }
                    }
                }
            })
        }else{
          if(!that.billNumber){ //没输入值 而且还没有填箱号 则
            that.carrier = ''
          }
        }
    },
    //跟踪事件
    inputTrack(value) {
      var that = this
      that.billNumber = value.replace(/[^a-zA-Z0-9]/g,'') //只能输入数字跟字母的组合
      if(value){
        this.$Axios.get(this.GLOBAL.url + "trace/fore/getShipping?nameCn=&ref=" + that.billNumber,{
          headers: {
              Authorization: this.getToken()
        },
        }).then(res => {
          if(res.data.status == 1){
            if(res.data.content.length > 0){
              if(res.data.content[0]){
                //提单号是9位数字
                var reg = /^[0-9]*[1-9][0-9]*$/
                if(reg.test(that.billNumber) && that.billNumber.length == 9){
                  that.carrier = ''
                  that.isJiuNCarr = true
                }else{
                  that.isJiuNCarr = false
                  that.carrier = res.data.content[0].code ? res.data.content[0].code : ''
                }
              }
            }
          }
        })
      }else{
        that.carrier = ''
      }
    },
    focusCarrier(){
      var that = this
      this.$Axios.get(this.GLOBAL.url + "trace/fore/getShipping?nameCn=",{
        headers: {
            Authorization: this.getToken()
      },
      }).then(res => {
        if(res.data.status == 1){
          that.carrList = res.data.content
        }else{
          that.carrList = []
        }
      }).catch((err)=>{
          that.carrList = []
      })
    },
    remoteCarrier(value){
      var that = this
      this.$Axios.get(this.GLOBAL.url + "trace/fore/getShipping?nameCn=" + value,{
        headers: {
            Authorization: this.getToken()
      },
      }).then(res => {
        if(res.data.status == 1){
          that.carrList = res.data.content
        }else{
          that.carrList = []
        }
      }).catch((err)=>{
          that.carrList = []
      })
    },
    selectTrack(item){
      this.containerNumber = item.caseNumber ? item.caseNumber : ''
      this.billNumber = item.billLadingNo ? item.billLadingNo : ''
      this.carrier = item.shippingCompany
    },
      async trackFollow() {
          try {
              const parameter = await this.$options.trackFollow.call(this);

              const example = this.trackExamp || [];
              for (let i = 0; i < example.length; i++) {
                  if (this.billNumber == example[i].billLadingNo && this.carrier == example[i].shippingCompany) {
                      return this.$router.push(parameter)
                  }
              }
              this.sampleData(2, parameter)
          } catch (e) {
              let object = {type: 'warning'};
              if (typeof e === 'string') {
                  object = {type: 'warning', message: e};
              } else if(typeof e === 'object' && typeof e.type === 'string') {
                  object = e;
              } else {
                  return console.error(e);
              }
              this.$message(Object.assign(object, {customClass: 'base-message-zindex'}));
          }
      },

    //集卡事件
    selectTruck(item){
      this.vclN = item.licensePlateNumber
    },
    searchTruck(){
      var that = this
      //判断是否有车牌号
      if(!this.vclN){
        this.$message({
          message: this.$t('home.license'),
          type: "warning",
          customClass:'base-message-zindex'
        });
        return false
      }

      const parameter = {
          name: 'setCards',
          params: {
              vclN: that.vclN,
          },
      }
      const example = this.truckExamp || [];
      for (let i = 0; i < example.length; i++) {
        if(this.vclN == example[i].licensePlateNumber){
          that.$router.push(parameter)
          return
        }
      }
      this.sampleData(2, parameter)
    },

    //示例事件
    interface(){
      var that = this
      //船期
      this.$Axios.get(that.GLOBAL.url + "trace/selectNewTraceDemodata?category=0",{
        headers: {
            Authorization: that.getToken()
      },
      }).then(res => {
        if(res.data.status == 1){
          that.shippExamp = [] //船期
          that.shiptExamp = [] //船舶
          that.truckExamp = [] //集卡
          that.portExamp = [] //上海港区
          that.trackExamp = [] //跟踪
          if(res.data.content.length > 0){
            for (let i = 0; i < res.data.content.length; i++) {
              var item = res.data.content[i]
              if(item.category == 1){ //船期
                that.shippExamp.push(item)
              }
              if(item.category == 2){ //船舶
                that.shiptExamp.push(item)
              }
              if(item.category == 5){ //集卡
                that.truckExamp.push(item)
              }
              if(item.category == 3){ //上海港区
                that.portExamp.push(item)
              }
              if(item.category == 4){ //跟踪
                that.trackExamp.push(item)
              }
            }
          }
        }else{
            that.shippExamp = [] //船期
            that.shiptExamp = [] //船舶
            that.truckExamp = [] //集卡
            that.portExamp = [] //上海港区
            that.trackExamp = []
        }
      }).catch((err)=>{
            that.shippExamp = [] //船期
            that.shiptExamp = [] //船舶
            that.truckExamp = [] //集卡
            that.portExamp = [] //上海港区
            that.trackExamp = []
      })
    },

    //切换tab
    changeTab(){
      this.resetContent()
    },
    //重置内容
    resetContent(){
      //船期
      this.polValue = ''
      this.podValue = ''
      this.pol = "SHANGHAI(上海)"
      this.polId = "CNSHA"
      this.pod = ""
      this.podId = ""
      this.dateType = "1"
      this.start = new Date()
      var range = 28
      if(new Date().getDay() != 7 && this.dateType == '1'){
        range = (7 - new Date().getDay()) + 21
      }
      var endDate = new Date(new Date().getTime() + 86400000*range);
      this.pickerOptions = {
        disabledDate(time) {
          return time.getTime() < (Date.now() - 86400000) || time.getTime() > endDate.getTime();
        }
      }

      //船舶
      this.shipValue = ''
      this.shipdt = ''
      this.shipMmsi = ''

      //港区
      this.isTiandan = 1
      this.referenceno = ''
      this.ieid = 'E'
      this.vslname = ''

      //跟踪
      this.containerNumber = ''
      this.billNumber = ''
      this.carrier = ''

      //集卡
      this.vclN = ""
    },
    //其他事件
    test(e) {
        
    },
    handleScroll () {
      var scrollTop = 0;
      if (document.documentElement && document.documentElement.scrollTop) {
          scrollTop = document.documentElement.scrollTop;
      } else if (document.body) {
          scrollTop = document.body.scrollTop;
      }
    },    
    getResize(){
      const that = this
      //船期目的港输入框
      if($("#podLeftTop")){
        if($('#podLeftTop').offset()){
          that.podLeft = $('#podLeftTop').offset().left
          that.podTop = $('#podLeftTop').offset().top - 5
        }
      }
      window.onresize = () => {
          return (() => {
            if($("#podLeftTop")){
              if($('#podLeftTop').offset()){
                that.podLeft = $('#podLeftTop').offset().left
                that.podTop = $('#podLeftTop').offset().top - 5
              }
            }
          })();
      };
    },
    //跳转
    planShip(){
       document.querySelector(`.homeContentInforPlannedSchedule`).scrollIntoView(); 
    },
    containerTracking(){
       document.querySelector(`.homeContentInforContainerTracking`).scrollIntoView(); 
    },
    shipTracking(){
       document.querySelector(`.homeContentInforShipTracking`).scrollIntoView(); 
    },
    //最上方
    goTop() {
      $("#Home-search").animate({ scrollTop: 0 }, 500);
      return false;
    },
    //下载
    handleDownLoad(){
      window.open(this.clientUrl)
    },
    handleClickBeiAnNum(){
      window.open('https://beian.miit.gov.cn/'); 
    },    
    //关于鲸准
    handleClickAboutM(){
      this.$router.push({
        path: '/Introduction',
      });
    },
    //联系我们
    handleClickContactUs(){
      this.$router.push({
        path: '/ContactUs',
      });
    },
  },
  created() {
      this.start = new Date();

      const query = window.initParameters || {};

      Object.keys(query).forEach(key => {
          if (key === 'date') {
              if (/\d+/.test(query[key])) {
                  query[key] = new Date(parseInt(query[key]));
              } else {
                  query[key] = new Date();
              }
          }

          this[key] = query[key];

          if (key === 'pod' && query[key]) {
              this.oldP = query[key];
          }
      });
  },

  mounted() {
      //处理船期日期 选择当前日期
      var that = this
      var range = 28
      if(new Date().getDay() != 7 && this.dateType == '1'){
        range = (7 - new Date().getDay()) + 21
      }
      var endDate = new Date(new Date().getTime() + 86400000*range);
      this.pickerOptions = {
        disabledDate(time) {
          return time.getTime() < (Date.now() - 86400000) || time.getTime() > endDate.getTime();
        }
      }

      //当前路由地址
      //'TRACK'
      //如果当前域名是 http://track.ijingzhun.com/#/
      //则跳到跟踪页
      if(that.urlLocal.indexOf('TRACK') !== -1){
        if(!that.userInfo){ //说明登录状态
          that.activeName = 'track'
        }
      }

      if(this.$route.params && this.$route.params.activeName){
        this.activeName = this.$route.params.activeName
      }
      // activeName

      //调取示例接口
      this.interface()

      //监听事件
      that.getResize()
      window.addEventListener('scroll', this.handleScroll,true)
      window.addEventListener('beforeunload', e => this.test(e)) //监听用户的刷新
  },
  watch: {
    dateType(val) {
      var currentDate = new Date();
      var week = currentDate.getDay();
      var range = 28;
      if(week != 7 && val == '1'){
        range = (7 - week) + 21;
      }
      var endDate = new Date(currentDate.getTime() + 86400000*range);
      if(val == '1'){
        this.pickerOptions = {
          disabledDate(time) {
            return time.getTime() < (Date.now() - 86400000) || time.getTime() > endDate.getTime();
          }
        }
      }else{
        this.pickerOptions = {
          disabledDate(time) {
            return time.getTime() < (Date.now() - 86400000) ;
          }
        }
      }
    },
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
    }
  },
  destroyed() {
      window.removeEventListener('beforeunload', e => this.test(e)) //销毁卸载注册的事件
  },
    async trackFollow() {

        if (!this.containerNumber && !this.billNumber) {
            throw "请输入提单号或者箱号";
        }

        if (!this.carrier) {
            throw "请选择船公司";
        }

        if (this.billNumber) {
            if (/^[A-Za-z]{3}U\d{7}$/.test(this.billNumber)) {
                throw {
                    message: this.$t('messages.boxNumber'),
                    type: 'error'
                }
            }

            if (this.billNumber.length <= 4) {
                throw {
                    message: this.$t('messages.ladingIrr'),
                    type: 'error'
                }
            }
        }

        //箱号 四位字母+7位数字，第四位是U
        if (!this.billNumber && this.containerNumber) {
            if (this.containerNumber.length !== 11) {
                throw {
                    message: this.$t('messages.incorrect'),
                    type: "error"
                }
            }

            //如果只填了箱号 并且是 SINOKOR  JINJIANG  SINO  HAL 这四家船公司
            if(this.carrier == 'SINOKOR' || this.carrier == 'JINJIANG' || this.carrier == 'HAL'){
                throw {
                    message: this.$t('messages.conOnly'),
                    type: "error"
                }
            }
        }

        //此船公司 箱号提单号必填
        if(this.carrier == 'SINO' && (!this.billNumber || !this.containerNumber)){
              throw {
                  message: this.$t('messages.billOnly'),
                  type: "error"
              }
        }

        // SITC 此船公司 输入提单号前提下 请输入箱号
        if(this.carrier == 'SITC' && this.billNumber && !this.containerNumber){
              throw {
                  message: this.$t('messages.enterBill'),
                  type: "error"
              }
        }

        return {
            name: 'Track',
            params: {
                containerNumber: this.containerNumber ? this.containerNumber.toUpperCase() : '',
                billNumber: this.billNumber ? this.billNumber.toUpperCase() : '',
                carrier: this.carrier,
            }
        }
    },

    async goSearch() {
        if ($.trim(this.pol) === "" || $.trim(this.polId) === "") {
            throw this.$t('messages.portOfOrigin');
        }

        if ($.trim(this.pod) === "" || $.trim(this.podId) === "") {
            throw this.$t('messages.ortOfDestination');
        }

        if ($.trim(this.start) === "") {
            throw this.$t('messages.selectdate');
        }

        return () => {
            const currentDate = new Date()
            const setParamDate = {
                pol: this.pol,
                polId: this.polId,
                pod: this.pod,
                podId: this.podId,
                start: this.start,
                end: this.end,
                dateType: this.dateType,
                t: currentDate.getTime()
            }
            const paramDate = this.setParams(setParamDate)
            const POLPOD = this.polId.toLowerCase() + '-' + this.podId.toLowerCase()
            return `/route/${POLPOD}/${paramDate}`;
        }
    }
};
</script>