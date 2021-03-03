<style lang="scss">
.list-main .wrapper .header{
    width: 100%;
    min-height: 48px;
    background: #fff;
    margin-bottom: 34px;
}
.list-main .wrapper .header .boxShipFloat{
    min-width: 86px;
    padding: 12px 20px;
    height: 24px;
    line-height: 24px;
    float: right;
    background: #26b4b2;
    border-radius: 20px;
    margin-top: 12px;
    cursor: pointer;
    display: flex;
    align-items: center;
    user-select: none;
    font-size: 12px;
    color: #fff;
    text-align: center;
}
.list-main .wrapper .header .boxShipFloat:hover{
  background-color: #51c3c1;
}
.list-main .wrapper .header .boxShipFloat span{
    display: inline-block;
    width: 100%;
}
.list-main .wrapper .header .boxShipFloat.weiding {
    margin: 12px 43px 0 12px;
    background-color: #072c4c;
    color: #fff;
    &:hover{
        background: #395670;
        color: #fff;
    }
}
.list-main .wrapper .header .boxShipFloat.quding {
    background-color: #26b4b2;
    color: #fff;
    &:hover{
        background: #51c3c1;
        color: #fff;
    }
}
.list-main .wrapper .header .boxShipFloat.quding.teshu{
  margin: 12px 43px 0 12px;
}
.list-main .wrapper .header .listInformat{
    position: absolute;
    top: 18px;
    left: 67px;
    font-size: 12px;
    color: #fff;
    .span{
        display: inline-block;
    }
    .center{
        margin-left: 18px;
        margin-right: 12px;
        font-weight: 600;
    }
    .image{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 20px;
    }
    .currnote{
        font-weight: 600;
    }
}
.list-main .wrapper .seaship{
    background: #fff;;
    margin-bottom: 10px;
    overflow: hidden;
}
.list-main .wrapper .seaship .seaship-title{
    width: 100%;
    display: flex;
    align-items: center;
}
.list-main .wrapper .seaship .seaship-title p{
    display: inline-block;
    font-size: 14px;
    font-weight: 600;
    .voyna{
        display: inline-block;
        margin-left: 10px;
        font-weight: 600;
    }
}
.list-main .wrapper .seaship .shippInfor{
    width: 100%;
    .el-collapse{
        margin-top: 20px;
    }
}
.list-main .wrapper .seaship .shippInfor ul{
    width: 100%;
    padding: 28px 60px 0px 60px;
}
.list-main .wrapper .seaship ul li{
    display: inline-block;
}
.list-main .wrapper .seaship ul li.startVess{
    width: 295px;
    height: 75px;
    .data{
        font-size: 14px;
        margin-top: 2px;
        margin-bottom: 5px;
        color: #a8a8a8;
        width: 295px;
        overflow: hidden;/*超出部分隐藏*/
        text-overflow: ellipsis;/*超出部分显示省略号*/
        white-space: nowrap;/*规定段落中的文本不进行换行 */
    }
    .time{
        font-size: 14px;
        margin-top: 10px;
        color: #282828;
        width: 295px;
        overflow: hidden;/*超出部分隐藏*/
        text-overflow: ellipsis;/*超出部分显示省略号*/
        white-space: nowrap;/*规定段落中的文本不进行换行 */
    }
    .company{
        width: 295px;
        font-size: 20px;
        font-weight: 600;
        color: #282828;
        overflow: hidden;/*超出部分隐藏*/
        text-overflow: ellipsis;/*超出部分显示省略号*/
        white-space: nowrap;/*规定段落中的文本不进行换行 */
    }
}
.list-main .wrapper .seaship ul li.left{
    text-align: right;
    width: auto;
    float: right;
}
.list-main .wrapper .seaship ul li.centerVess{
    width: 140px;
    height: 100%;
    vertical-align: super;
    position: relative;
    margin: 0px 64px 0 83px;
    .dots{
        display: flex;
        align-items: center;
        padding-top: 5px;
        .isdotGreen{
            display: inline-block;
            width: 9px;
            height: 9px;
            background: #072c4c;
            border-radius: 50%;        
        }
        .line{
            display: inline-block;
            width: 510px;
            height: 1px;
            background: #072c4c;
        }
    }
    .infor{
        width: 100%;
        text-align: center;
    }
    .infor:nth-of-type(1){
        margin-bottom: 10px;
    }
    .infor:nth-of-type(3){
        margin-top: 10px;
    }
    .ariPo{
        position: absolute;
        left: 50%;
        top: -4px;
        transform: translateX(-50%)
    }
}
.list-main .wrapper .transship{
    width: 100%;
    min-height: 164px;
    background: #ffffff;
    margin-bottom: 10px;
    overflow: hidden;
    position: relative;
    .theMask{
        position: absolute;
        width: 100%;
        height: 100%;
        background: rgba(40,40,40,.5);
        opacity: .3;
        left: 0;
        top: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        .dalianPort{
            color: #fff;
            font-size: 20px;
        }
    }
}
.list-main .wrapper .transship .seaship-title{
    width: 100%;
    display: flex;
    align-items: center;
}
.list-main .wrapper .transship .seaship-title p{
    display: inline-block;
    font-size: 14px;
    font-weight: 600;
    margin-left: 10px;
}
.list-main .wrapper .transship .shippInfor{
    width: 100%;
}
.list-main .wrapper .transship .shippInfor ul{
    width: 100%;
    margin-top: 18px;
    overflow: hidden;
}
.list-main .wrapper .transship .shippInfor ul .information{
    width: 105px;
    height: 80px;
    margin-right: 344px;
    display: inline-block;
}
.list-main .wrapper .transship .shippInfor ul .information:nth-last-of-type(1){
    margin-right: 0 !important;
}
.list-main .wrapper .transship .shippInfor ul .information .inofr-div{
    width: 100%;
    height: 40px;
    .color{
        color: #a8a8a8;
        margin-bottom: 4px;
    }
}
.infor-magin{
    margin-top: 10px;
}
.collapse .collapseC{
    width: 100%;
    height: 48px;
}
.collapse .collapseC .item{
    display: inline-block;
}
.collapse .collapseC .item-1{
    width: 42%;
    position: absolute;
    top: 0;
    .image{
        position: absolute;
        display: inline-block;
        top: 50%;
        left: 20px;
        transform: translateY(-50%)
    }
    .vess{
        display: inline-block;
        padding-left: 10px;
        color: #282828;
        font-size: 14px;
        font-weight: bold;
    }
    .heft{
        display: inline-block;
        padding-left: 5px;
        color: #839db2;
    }
}
.collapse .collapseC .item-2{
    width: 32%;
    margin-left: 462px;
    text-align: center;
    .heft{
        color: #a8a8a8;
        font-size: 14px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
}
.collapse .collapseC .item-3{
    float: right;
    .heft{
        font-weight: 600;
        color: #282828;
        padding-right: 5px;
    }
}
.collapse .main{
    width: 100%;
    height: 100%;
}
.collapse .main .item{
    display: inline-block;
}
.collapse .main .item-1{
    width: 100%;
    .timeline{
        height: 100%;
        .timeline-item{
          position: relative;
          width: 100%;
          .border_left{
              width: 2px;
              background: #072c4c;
              height: 100%;
          }
          .half_border_left{
              width: 2px;
              background: #072c4c;
              height: 50%;
          }
        }
        .small_dot{
            .el-timeline-item__node{
                width: 6px;
                height: 6px;
                border-radius: 50%;
                left: 3px;
            }
            .item-3{
                margin-top: -10px !important;
            }
        }
        .line_active{
            .el-timeline-item__tail{
                border-left: 2px solid #26b4b2;
            }
        }
        .half_line_active{
            .el-timeline-item__tail{
                border-left: 2px solid #f2f2f2;
                &:after{
                    content: "";
                    height: 56%;
                    width: 2px;
                    margin-left: -2px;
                    position: absolute;
                    top: 0;
                    left: 0;
                    background: #072c4c;
                }
            }
        }
        .item-2{
            width: 100%;
            height: 100%;
            display: inline-block;
            .item-3{
                font-weight: 600;
                color: #282828;
                margin-top: -6px;
                font-size: 14px;
                display: flex;
                align-items: center;
                .statustime{
                    font-size: 12px;
                    color: #282828;
                    font-weight: normal;
                }
                .Overflow{
                    width: 76px;
                    display: inline-block;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
            }
            .stateRoute{
                padding: 2px 8px 2px 8px;
                font-size: 12px;
                line-height: 16px;
                color: #fff;
                border-radius: 10px;
                margin-left: 10px;
            }
            .zhundian{
                background-color: #26b4b2;
            }
            .yanwu{
                background-color: #ff7676;
            }
            .hui{
                color: #aec6d0;
            }
            .item-4{
                text-align: left;
                font-size: 12px;
                color: #282828;
                overflow: hidden;/*超出部分隐藏*/
                text-overflow: ellipsis;/*超出部分显示省略号*/
                white-space: nowrap;/*规定段落中的文本不进行换行 */
                li{
                    height: 29px;
                    line-height: 29px;
                    display: flex;
                    align-items: center;
                }
            }
            .color_hui{
                color: #909090;
            }
            .item-5{
                width: 24%;
                display: inline-block;
                text-align: right;
            }
            .transit{
                width: 300px;
                overflow: hidden;/*超出部分隐藏*/
                text-overflow: ellipsis;/*超出部分显示省略号*/
                white-space: nowrap;/*规定段落中的文本不进行换行 */
                .leftTrans{
                    color: #282828;
                    font-size: 12px;
                    font-weight: 600;
                }
                .rightTrans{
                    color: #839db2;
                    padding-left: 5px;
                    font-size: 12px;
                }
                .endtime{
                    color: #839db2;;
                    font-size: 12px;
                }
            }
            .image{
                position: absolute;
                left: -5px;
                top: 50%;
                width: 22px;
                height: 14px;
            }
            .imagePin{
                position: absolute;
                left: -5px;
                top: 50%;
                width: 20px;
                height: 19px;
            }
            .imageRailway{
                position: absolute;
                left: -2px;
                top: 50%;
                margin-top: -6px;
                width: 16px;
                height: 21px;
            }
            .imageLine{
                position: absolute;
                right: -3px;
                top: 50%;
                width: 18px;
                height: 17px;
            }
        }
        .endtime{
            color: #839db2;
            font-size: 12px;        
        }          

   }
}
.el-timeline-item__tail{
    border-left: 2px solid #f2f2f2;
    left: 5px;
}
.el-timeline-item__node--normal{
    left: 1px;
    border-radius: 0;
}
.el-dialog__body{
    padding: 20px !important;
}
.el-dialog__header{
    padding: 0;
}
.dialogIfdetail{
    position: fixed;
    left: 0;
    top: 20%;
}
.ifdetail .informa{
    width: 100%;
    text-align: center;
    color: #5f6266;
}
.ifdetail .informa .image{
    width: 40px;
    height: 40px;
}
.ifdetail .informa .weichatimage{
    width: 180px;
    height: 180px;
}
.ifdetail .butAll{
    width: 100%;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    .btnBorder{
        display: inline-block;
        font-size: 12px;
        width: 68px;
        height: 28px;
        line-height: 28px;
        text-align: center;
        color: #5f6266;
        background: #fff;
        border-radius: 5px;
        cursor: pointer;
    }
    .greenBorder{
        display: inline-block;
        font-size: 12px;
        width: 68px;
        height: 28px;
        line-height: 28px;
        text-align: center;
        color: #fff;
        background: #26b4b2;
        border-radius: 5px;
        cursor: pointer;
        margin-left: 20px;
    }
    .greenBorder:hover{
      background-color: #51c3c1;
    }
}
.collapse .el-collapse-item{
    position: relative;
    margin-bottom: 10px;
    border-radius: 8px;
    padding: 0 42px;
    background: #fff;
    .viewUrl{
        position: absolute;
        bottom: 0;
        left: 50%;
        display: inline-block;
        width: 72px;
        height: 30px;
        line-height: 30px;
        margin-left: -36px !important;
        text-align: center;
        z-index: 22;
    }
    .viewUrl + .el-collapse-item__arrow{
        position: absolute;
        bottom: 30px;
        left: 50%;
        display: inline-block;
        width: 11px;
        height: 11px;
        margin-left: -5.5px !important;
    }
  .el-collapse-item:last-child{
      margin-bottom: 10px;
  }
  .el-collapse-item__header{
      height: 48px;
      line-height: 48px;
      border: 0;
  }
  .el-timeline-item__wrapper{
      position: static !important;
  }
  .el-collapse-item__arrow.is-active{
      width: 11px;
      height: 11px;
      background: url('../assets/images/cargo/dubleUp.png') no-repeat 100% center;
      background-size: 11px 11px;
      transform: rotate(0deg);
      color: transparent;
      z-index: 22;
  }
  .el-collapse-item__arrow{
      width: 11px;
      height: 11px;
      background: url('../assets/images/cargo/dubleUp.png') no-repeat 100% center;
      background-size: 11px 11px;
      color: transparent;
      right: 20px;
      transform: rotate(180deg);
      margin: 0 0 0 10px !important;
  }
  .el-icon-arrow-right:before{
      content: none !important;
  }
  .el-icon-arrow-right:not(.el-date-picker__next-btn){
      color: transparent;
  }
  .el-icon-arrow-right:before{
      content: "\E6E0";
      width: 16px;
      height: 10px;
  }
}
.el-loading-spinner{
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: fixed;
}
.header{
    position: relative;
    margin: 0 auto;
    background-color: transparent !important;
    .maps{
        width: 100%;
        height: 400px;
        overflow: hidden;
    }
    .listInformat{
        .preveTriangle{
          display: inline-block;
          width: 78px;
          height: 30px;
          line-height: 30px;
          border-radius: 15px;
          background-color: #072c4c;
          text-align: center;
          cursor: pointer;
        }
        .preveTriangle:hover{
          background-color: #395670;
        }
        .triangle{
            cursor: pointer;
            display: inline-block;
            width: 8px;
            height: 8px;
            border-top: 2px solid #fff;
            border-right: 2px solid #fff;
            transform: rotate(-135deg);
            margin-bottom: 1px;
            margin-left: 3px;
        }
    }
    .innerInfoBg{
      width: 1100px;
      margin: 0 auto;
      margin-top: -14px;
      z-index: 100;
      position: relative;
      border-radius: 8px;
      padding-bottom: 24px;
      background: #f5f5f5;
      box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.1);
      .innerTitle{
        width: 100%;
        height: 60px;
        display: flex;
        box-sizing: border-box;
        padding-left: 42px;
        padding-top: 22px;
        .chuan{
          width: 25px;
          height: 15px;
          margin-right: 10px;
        }
        .chuanqi{
            width: 15px;
            height: 13px;
            margin-right: 10px;
            margin-top: 1px;
        }
        .tidan{
            width: 11px;
            height: 13px;
            margin-right: 10px;
        }
        .ulHeaderFooter{
          font-size: 14px;
          line-height: 16px;
          color: #282828;
          font-weight: bold;
        }
        .ship-status{
          font-size: 14px;
          line-height: 16px;
          color: #ff7676;
          font-weight: bold;
          img{
            width: 10px;
            height: 10px;
            margin-left: 18px;
            margin-right: 2px;
          }
        }
      }
      .innerInfo{
          width: 1064px;
          margin: 0 auto;
          position: relative;
          .seaship{
              height: 225px;
              border-radius: 8px;
              padding: 12px 24px 0 24px;
          }
          .transship{
              height: 174px;
              border-radius: 8px;
              padding: 22px 24px 0 24px;
          }
          .collapse{
              border-radius: 8px;
              .el-collapse-item{
                padding: 0 24px;
              }
          }
          .onlineSeash{
              width: 100%;
              height: 1px;
              background: #f2f2f2;
              margin-top: 17px;
          }
          .arrowCvess{
              height: 10px;
              line-height: 10px;
              text-align: center;
          }
      }
    }
    .verticaOnlline{
        display: inline-block;
        width: 3px;
        height: 14px;
        background-color: #072c4c;
        vertical-align: sub;
    }
    .dalianBackColor{
        background-color: #a8a8a8 !important;
    }
    .dalianColor{
        color: #a8a8a8 !important;
    }
    .verticaOnllineF{
        transform: translate(0, -1px);
    }
    .vessNull{
        font-size: 14px;
        font-weight: bold;
    }
    .innerBot{
        display: inline-block;
        width: 6px;
        height: 6px;
        background-color: #072c4c;
        margin-right: 10px;
        border-radius: 50%;
    }
    .lablePlace{
        color: #282828;
        margin-right: 10px;
    }
    .lableTime{
        color: #282828;
    }
    .ferrysList{
        width: 787px;
        height: 82px;
        font-size: 12px;
        color: #fff;
        border-radius: 8px;
        background-color: #637586;
        margin-top: 20px;
        .el-table__header-wrapper{
            height: 41px;
            line-height: 41px;
        }
        
        th{
            color: #fff;
            background-color: #637586;
            padding: 0;
            border: none;
            line-height: 52px;
            .cell{
              font-weight: normal;
            }
        }
        tr{
            background-color: #637586;
            padding: 0;
        }
        .el-table__body tr:hover>td{
            background-color: transparent;
        }
        .el-table__body{
          td{
            height: 30px;
            border: none;
            padding: 0;
          }
        }
    }
    .wayPort{
        margin-top: 30px;
        .wayPort_high{
            color: #282828;
            font-size: 12px;
            font-weight: bold;
        }
    }
}
.el-collapse-item__wrap{
    border: none !important;
}
.list-main .collapse .el-collapse-item__wrap{
  padding-left: 17px !important;
  margin-top: 0 !important;
}
</style>
<style lang="scss" scoped>
.shipseas{
    height: auto !important;
    .collapse{
        border-radius: none;
        box-shadow: none;
        padding: 0 !important;
        ul{
            padding: 0 !important;
        }
    }
}
.airlineSchedule{
    min-height: 338px;
    background-color: #fff;
    border-radius: 6px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, .1);
    padding: 22px 42px 0 42px;
    margin-bottom: 10px;
    .seaship-title {
        width: 100%;
        display: flex;
        align-items: center;
        p {
            display: inline-block;
            font-size: 14px;
            font-weight: 600;
            margin-left: 10px;
        }
    }
}
.advanceNotice{
    min-height: 294px;
    background-color: #fff;
    border-radius: 6px;
    padding: 22px 0px 0 42px;
    margin-bottom: 10px;
    .seaship-title {
        width: 100%;
        display: flex;
        align-items: center;
        p {
            display: inline-block;
            font-size: 14px;
            font-weight: 600;
            margin-left: 10px;
        }
    }
}
.de-content {
  .el-col-4 {
    height: 40px;
  }
  .el-col-8 {
    height: 40px;
  }
}
.docking-order-box.download-template {
  background: #fff;
  width: 1200px;
  height: auto;
  color: #072c4c !important;
  margin-top: 20px;
}
.title-ul-li {
  margin: 0 !important;
  color: #282828 !important;
}
.title-active {
  color: #072c4c;
}
.docking-order-box {
  .tab-box {
    margin-top: 0 !important;
  }
}
.text-uppercase.p-2 {
  display: inline-block;
  margin-left: 15px;
  font-size: 18px;
  color: #072c4c !important;
}
.docking-order {
  background-color: #fff;
  width: 100%;
  overflow: hidden;
  padding-bottom: 20px;
  min-height: 60px;
  li {
    position: relative;
    text-align: center;
    font-size: 12px;
    width: 128.8px;
  }
  .po {
    background-color: #072c4c;
    display: inline-block;
    width: 100%;
  }
  .transit {
    background-color: #c8c8c8;
    display: inline-block;
    padding: 0 10px;
    width: 100%;
    h5 {
      color: #282828 !important;
      width: 108px;
      word-break: break-all;
      white-space: pre-wrap;
    }
  }
  .pol-pod {
    background-color: #ff9500;
    display: inline-block;
    padding: 0 10px;
    width: 100%;
  }
  h5 {
    color: #fff;
    width: 108px;
    word-break: break-all;
    white-space: pre-wrap;
  }
  .left {
    float: left;
  }
  .right {
    float: right;
  }
  .stand {
    line-height: 20px !important;
    margin-top: -12px;
  }
  .center {
    padding: 0 10px;
  }
  .left-arrow {
    background: url(../assets/images/arrows/Horizontal-line.png) right no-repeat;
    width: 50px;
    height: 10px;
    display: inline-block;
  }
  .left-left-arrow {
    background: url(../assets/images/arrows/Arrowright.png) left no-repeat;
    width: 50px;
    height: 10px;
    display: inline-block;
  }
  .right-arrow {
    background: url(../assets/images/arrows/Arrowleft.png) right no-repeat;
    width: 50px;
    height: 10px;
    display: inline-block;
  }
  .stand-arrow-down {
    background: url(../assets/images/arrows/rightArrow.png) center bottom
      no-repeat;
    height: 30px;
    display: block;
    width: 5px;
    margin-left: 1px;
  }
  .stand-arrow-up {
    background: url(../assets/images/arrows/leftArrow.png) center no-repeat;
    height: 15px;
    display: block;
    width: 5px;
  }
  .stand-line {
    background: url(../assets/images/arrows/Vertical-line.png) center no-repeat;
    height: 15px;
    display: block;
    width: 5px;
    display: none;
  }
  .arrow-group {
    display: inline-block;
    line-height: 30px;
    color: #282828;
  }
  .clear-both {
    clear: both;
  }
  .arrow-text {
    margin: 0 6px;
    font-size: 16px;
    display: none;
  }
}
.download-template ol,
.download-template ul,
.download-template dl {
  margin-left: 20px;
  margin-right: 20px;
}
.de-content .ship-main .Origin-txt p {
  height: 24px;
}
.transit-routecode {
  padding-top: 5px;
  font-weight: 200;
  font-size: 18px !important;
  position: absolute;
  width: inherit;
}
.t {
  font-weight: 200;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.mother-ship-border {
  border: 2px solid #ff7676 !important;
  background-color: #fff;
}
.work-ship-border {
  border: 2px solid #26b4b2 !important;
  background-color: #fff;
}

.mother-ship-borderDashed{
    border: none !important;
    background-color: #fff;
}
.timeline-timeline{

  .timeline-item{
    overflow: inherit !important;
    width: 100%;
  }
}
.footerBtn{
  margin-top: 24px;
  position: relative;
  display: flex;
  justify-content: space-between;
  .el-button{
    width: 500px;
    height: 60px;
    color: #fff;
    font-size: 20px;
  }
  .teshuButt{
    margin: 0 auto;
  }
  .el-button.is-round {
    border-radius: 30px;
  }
  .el-button+.el-button{
    margin-left: 0;
  }
  .btnError{
    background-color: #26b4b2;
  }
  .btnError:hover{
    background-color: #51c3c1;
  };
  .btnTrack{
    background-color: #072c4c;
  }
  .btnTrack:hover{
    background-color: #395670;
  }
  .bubble{
    display: none;
    width: 626px;
    height: 137px;
    border-radius: 6px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, .1);
    position: absolute;
    top: -167px;
    right: 0;
    background-color: #fff;
    padding: 22px 16px;
    font-size: 12px;
    color: #282828;
    p{
      margin-top: 13px;
      height: 12px;
      line-height: 12px;
    }
    p:nth-of-type(1){
      font-weight: bold;
      margin: 0;
    }
    p:nth-of-type(2){
      margin-top: 16px;
    }
  }
  .bubbleTail{
    position:absolute;
    top:100%;
    right:190px;
    width:23px;
    height:10px;
    border-width:10px;
    border-style:solid;
    border-color:transparent;
    border-top-width:10px;
    border-top-color:currentColor;
    color:#fff;
  }
}
.logD{
  display: inline-block;
  width: 41px;
  margin-left: -15px;
  position: relative;
}
.logo-p{
  height: 16px;
  margin-top: 5px;  
    p{
      font-size: 12px !important;
      height: 16px;  
      line-height:1 !important;
      .xainWidth{
        max-width: 70px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        display: inline-block;
      }
    }
  }
.logDs{
  display: inline-block;
  padding-top: 10px;
  .list-logo-border{
    display: inline-block;
    width: 15px;
    height: 2px;
    background: #072c4c;
    margin-bottom: 15px;
  }
  .list-logo{
    margin: 0;
  }
  .list-logo-track{
    display: inline-block;
    width: 15px;
    height: 2px;
    background: #072c4c;
    margin-bottom: 15px;
  }
}
.logDname{
  p{
    margin-left: 0 !important;
    width: 45px !important;
    height: 26px;
    font-size: 12px !important;
    line-height: 1 !important;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-right: 5px;
  }
  .line{
    margin-left: 15px;
  }
}
.logD:nth-of-type(1){
  margin: 0;
  z-index: 99;
}
.logD:nth-of-type(2){
  z-index: 98;
}
.logD:nth-of-type(3){
  z-index: 97;
}
.logD:nth-of-type(4){
  z-index: 96;
}
.logD:nth-of-type(5){
  z-index: 95;
}
.logD:nth-of-type(6){
  z-index: 94;
}
.logD:nth-of-type(7){
  z-index: 93;
}
.ulHeader{
  li:nth-of-type(1){
    width: auto;

  }
  .ulHeaderCenter{
    p{
      width: 52px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  .ulHeader_btn{
    float: right;
    margin-top: 32px;
    width: 90px;
    height: 24px;
    border-radius: 15px;
    text-align: center;
    font-size: 12px;
    line-height: 23px;
    color: #fff;
    user-select: none;
    cursor: pointer;
    background: #072c4c;
    &:hover{
        background: #395670;
    }
  }
}
.list-logo_TRUCK{
  width: 30px !important;
  height: 16px !important;
  position: relative;
  top: -8px;
  border-radius: inherit !important;
  box-shadow: none !important;
  border: none !important;
}
.list-logo_RAIL{
  width: 20px !important;
  position: relative;
  top: -3px;
  height: 26px !important;
  border-radius: inherit !important;
  box-shadow: none !important;
  border: none !important;
}
.list-logo_FEEDER{
  width: 29px !important;
  height: 17px !important;
  position: relative;
  top: -9px;
  border-radius: inherit !important;
  box-shadow: none !important;
  border: none !important;
}
</style>
<template>
  <div class="list-main">
    <Loading v-if="totalLoading"></Loading>
    <div class="wrapper">
        <!-- 船期详情页 -->
        <div class="header">
          <!-- 船期详情地图部分 -->
          <div class="maps">
            <xmap :xmapProps="xmapProps">
            </xmap>
            <!-- <RouteMap :route-info="routeInfo">
            </RouteMap> -->
          </div>
          <!-- 返回按钮 -->
          <div class="listInformat">
            <span class="preveTriangle"  @click="goBack">
              <i class="triangle"></i>
                {{$t('Back')}}
            </span>
          </div>
          <div class="innerInfoBg">
            <!-- 船名、航次部分 -->
            <div class="innerTitle">
                <img class="chuanqi" src="../assets/images/cargo/chuanqi.png">
                <div class="ulHeaderFooter">{{$t('details.vessel') + '/' +$t('details.voyage') + ':' + (datailInfometion.vessel ? datailInfometion.vessel : '-')}} / {{(datailInfometion.voyage ? datailInfometion.voyage : '-')}}</div>
                <!-- 船期状态 -->
                <div class="ship-status">
                    <img src="../assets/images/cargo/item-19.png">
                    <span>{{datailInfometion.traceState ? "【" + $t(datailInfometion.traceState) + "】" : '【--】'}}</span>
                </div>
            </div>
            <!-- 详情部分 -->
            <div class="innerInfo">
                <div class="seaship shipseas">
                    <div class="seaship-title">
                      <div class="de-content">
                        <div class="shipper">
                            <!-- 共仓船公司logo部分 -->
                            <ul class="ulHeader">
                              <!-- 直达情况 -->
                              <li v-if="datailInfometion.isTransit == 0">
                                <!-- logo部分 -->
                                <div v-for="(url,urlkey) in logos" :key="urlkey" class="logD">
                                  <img 
                                    :src="url.logoUrl" width="33" height="33" 
                                    :class="url.type == '0' ? 'mother-ship-border' : (url.isOvt == '1' && logos.length > 1) ? 'list-logo work-ship-border' : 'list-logo'"
                                  />
                                  <!-- : url.isOvt == '1' ? 'list-logo work-ship-border'  -->
                                  <!-- <img
                                    :class="(logos.length > 1 && urlkey == 0 && url.scac == url.motherShipScac && url.scac) ?
                                    'list-logo mother-ship-border':(logos.length > 1 && url.isDotted == '1') ? 
                                    'list-logo mother-ship-borderDashed' : 'list-logo'"
                                    :src="url.logoUrl"
                                    width="33" height="33"
                                  /> -->
                                </div>
                                <!-- logo下文字部分 -->
                                <div class="logo-p">
                                  <p v-for="(item,index) in portArr" :key="index" v-title="item.roteCodes">
                                    <span v-if="index !== 0">
                                      /
                                    </span>
                                    <span class="xainWidth" :class="item.roteCodes !== '' && item.roteCodes !== 'UNDEFINED' ? '' : 'line'">
                                      {{item.roteCodes !== '' && item.roteCodes !== "UNDEFINED" ? item.roteCodes  : '-'}}
                                    </span>
                                  </p>
                                </div>
                              </li>
                              <!-- 中转情况 -->
                              <li v-else>
                                <!-- logo部分 -->
                                <div v-for="(url,urlkey) in logos" :key="urlkey" class="logDs">
                                  <img :src="url.logoUrl" width="33" height="33" 
                                  :class="url.disPlayName == 'TRUCK' ? 
                                  'list-logo_TRUCK' : url.disPlayName == 'RAIL' ?
                                  'list-logo_RAIL' : url.disPlayName == 'FEEDER' ? 
                                  'list-logo_FEEDER' : 'list-logo'"
                                  />
                                  <!-- : url.isOvt == '1' ? 'list-logo work-ship-border'  -->
                                  <span :class="url.disPlayName == 'TRUCK' || url.disPlayName == 'RAIL' || url.disPlayName == 'FEEDER'? 'list-logo-track' : 'list-logo-border'" v-if="urlkey !== logos.length-1"></span>
                                </div>
                                <!-- logo下文字部分 -->
                                <div class="logDname">
                                  <p v-for="(item,index) in roteCodeList" :key="index" v-title="$t(item.disPlayName)">
                                    <span class="dcoDss" :class='item.disPlayName && item.disPlayName !== "UNDEFINED" ? "": "line"'>
                                      {{item.disPlayName && item.disPlayName !== "UNDEFINED" ? $t(item.disPlayName) : '-'}}
                                    </span>
                                    <!-- <span class="logLineNull" v-if="index !== roteCodeList.length-1"></span> -->
                                  </p>
                                </div>
                              </li>
                              <!-- 船舶定位 -->
                              <div @click="goShippingLine()" class="ulHeader_btn" v-if="userId">{{ $t('route.position') }}</div>
                            </ul>
                        </div>
                      </div>
                    </div>
                    <!-- 下边界线 -->
                    <div class="onlineSeash"></div>
                    <div class="shippInfor">
                      <!-- 起始港——>目的港 -->
                      <ul>
                        <!-- 起始港 -->
                        <li class="startVess">
                          <p class="company" v-title="datailInfometion.pol ? datailInfometion.pol.toUpperCase() : ''">{{datailInfometion.pol ? datailInfometion.pol.toUpperCase() : '--'}}</p>
                          <p class="data" v-if=" $i18n.locale == 'zh-CN'">{{datailInfometion.polTerninal ? datailInfometion.polTerninal : '--'}}</p>
                          <p class="data" v-if=" $i18n.locale == 'en-US'">{{datailInfometion.polTerninalEn ? datailInfometion.polTerninalEn : '--'}}</p>
                          <p class="time">{{ 'ETD: ' + (datailInfometion.staticEtdSort ? getStaticTimeDay(datailInfometion.staticEtdSort) : '--') }}</p>
                        </li>
                        <!-- 中转/直达 -->
                        <li  class="centerVess">
                          <div class="infor">{{datailInfometion.hangcTime && datailInfometion.hangcTime > 0 ? datailInfometion.hangcTime + $t('details.day') : $t('details._day')}}</div>
                          <div class="arrowCvess">
                            <img src="../assets/images/arrow-3.png">
                          </div>
                          <div class="infor" v-if="datailInfometion.isTransit == '0'">{{ $t('details.dir')}}</div>
                          <div class="infor" v-else>{{ $t('details.trans')}}</div>
                        </li>
                        <!-- 目的港 -->
                        <li class="startVess left">
                          <p class="company" v-title="datailInfometion.pod ? datailInfometion.pod.toUpperCase() : ''">{{datailInfometion.pod ? datailInfometion.pod.toUpperCase() : '--'}}</p>
                          <p class="data" v-if=" $i18n.locale == 'zh-CN'">{{datailInfometion.podTerninal ? datailInfometion.podTerninal : '--'}}</p>
                          <p class="data" v-if=" $i18n.locale == 'en-US'">{{datailInfometion.podTerninalEn ? datailInfometion.podTerninalEn : '--'}}</p>
                          <p class="time">{{ 'ETA: ' + (datailInfometion.staticEtaSort ? getStaticTimeDay(datailInfometion.staticEtaSort) : '--') }}</p>
                        </li>
                      </ul>
                      <!-- 完整路径部分 -->
                      <div class="collapse">
                        <el-collapse v-model="activeNamesMore" @change="handleShipChange">
                          <el-collapse-item name='0'>
                            <!-- 收起按钮 -->
                            <template slot="title">
                                <span class="viewUrl">{{$t(viewOrClose)}}</span>
                            </template>
                            <ul class="main">
                              <li class="item item-1">
                                <div class="timeline">
                                  <!-- 时间线部分 -->
                                  <el-timeline class="timeline-timeline">
                                    <el-timeline-item
                                      v-for="(activity, index) in linerTrackStatus"
                                      :key="index"
                                      type="primary"
                                      color="#26b4b2"
                                      class="timeline-item line_active"
                                      size="normal"
                                    >
                                        <div class="item-2">
                                        <!-- 大节点标题 -->
                                          <div class="item-3">
                                            <div class="item-3" v-if=" $i18n.locale == 'zh-CN'">{{activity.basePortCn ? activity.basePortCn : '-'}}</div>
                                            <div class="item-3" v-if=" $i18n.locale == 'en-US'">{{activity.basePortEn ? activity.basePortEn : '-'}}</div>
                                          </div>
                                          <!-- 小节点部分 -->
                                          <ul class="item-4">
                                            <li v-if="index == 0 || index == linerTrackStatus.length - 1">
                                              <!-- 小圆点 -->
                                              <span class="innerBot"></span>
                                              <!-- 计划到港/计划离港 -->
                                              <span class="lablePlace" v-if="activity.str">{{ $t('PlannedArrival')}}</span>
                                              <span class="lablePlace" v-else>{{ $t('PlannedDeparture')}}</span>
                                              <!-- 预计时间 -->
                                              <span class="lableTime">{{ activity.str !== '计划到港' ? getTimeDay(activity.etd) : getTimeDay(activity.eta)}}</span>
                                              <!-- 状态：准点，延误，提前 -->
                                              <span class="stateRoute zhundian" v-if="activity.str !== '计划到港' && isLate == 0">{{ $t('list.onTime') }}</span>
                                              <span class="stateRoute yanwu" v-if="activity.str !== '计划到港' && isLate == 1">{{ $t('list.delay') }}</span>
                                              <span class="stateRoute zhundian" v-if="activity.str !== '计划到港' && isLate == 2">{{ $t('list.advance') }}</span>
                                            </li>
                                          </ul>
                                          <div v-if="!activity.str ? true : false && activity.isShowVess" style="color:#fff;width:787px;height:2px;user-select:none">当前是为了保持样式写的盒子</div>
                                          <!-- 船信息表格 -->
                                          <el-table
                                            :data="new Array(activity.vesselInfo)"
                                            class="ferrysList"
                                            v-if="index !== linerTrackStatus.length-1 && activity.isShowVess"
                                          >
                                            <el-table-column
                                              prop="vessel"
                                              :label="$t('details.vessel')"
                                              :show-overflow-tooltip=true
                                            >
                                            </el-table-column>
                                            <el-table-column
                                              prop="voyage"
                                              :label="$t('details.voyage')"
                                              :show-overflow-tooltip=true
                                              width="80"
                                            >
                                            </el-table-column>
                                            <el-table-column
                                              prop="imo"
                                              label="IMO"
                                              :show-overflow-tooltip=true
                                              width="80"
                                            >
                                            </el-table-column>
                                            <el-table-column
                                              prop="mmsi"
                                              label="MMSI"
                                              :show-overflow-tooltip=true
                                              width="110"
                                            >
                                            </el-table-column>
                                            <el-table-column
                                              prop="buildDate"
                                              :label="$t('details.built')"
                                              :show-overflow-tooltip=true
                                              width="90"
                                            >
                                              <template slot-scope="scope">
                                                  <span>{{scope.row.buildDate ? scope.row.buildDate.split(' ')[0] : ''}}</span>
                                              </template>
                                            </el-table-column>
                                            <el-table-column
                                                prop="authority"
                                                :label="$t('details.master')"
                                                :show-overflow-tooltip=true
                                                width="90"
                                            >
                                            </el-table-column>
                                            <el-table-column
                                              prop="ctnrVolume"
                                              :label="$t('details.volume')"
                                              :show-overflow-tooltip=true
                                              width="80"
                                            >
                                            </el-table-column>
                                            <el-table-column
                                              prop="operator"
                                              :label="$t('details.operator')"
                                              :show-overflow-tooltip=true
                                              width="90"
                                            >
                                            </el-table-column>
                                          </el-table>
                                          <!-- 途经港口 -->
                                          <div class="wayPort" v-if="!activity.str ? true : false">
                                              <div class="wayPort_high" v-if="activity.docking.length > 0">
                                                  {{ $t('details.dockingPort') + "(" + activity.docking.length  + ")"}}
                                              </div>
                                              <ul 
                                                class="item-4" 
                                                v-for="(item,index) in activity.docking"
                                                :key="index"
                                              >
                                                  <li>
                                                      <span class="innerBot"></span>
                                                      <span> {{item}}</span>
                                                  </li>
                                              </ul>
                                          </div>
                                          <!-- 节点间图标 -->
                                          <div v-if="index !== linerTrackStatus.length - 1 && activity.flag">
                                            <img src="../assets/images/cargo/che.png" class="image" v-if="activity.flag.toUpperCase() == 'TRUCK'">
                                            <img src="../assets/images/cargo/tielu.png" class="imageRailway" v-if="activity.flag.toUpperCase() == 'RAIL'">
                                            <img src="../assets/images/cargo/chuan.png" class="imagePin" v-if="activity.flag.toUpperCase() == 'FEEDER'">
                                            <img src="../assets/images/cargo/chuan.png" class="imageLine" v-if="activity.flag.toUpperCase() == 'LINE'">
                                            <!-- <img src="../assets/images/cargo/chuan.png" 
                                              class="imagePin" 
                                              v-if="activity.flag.toUpperCase() !== 'TRUCK' &&
                                              activity.flag.toUpperCase() !== 'RAIL' &&
                                              activity.flag.toUpperCase() !== 'FEEDER'"
                                            > -->
                                          </div>
                                        </div>
                                    </el-timeline-item>
                                  </el-timeline>                                
                                </div>
                              </li>
                            </ul>
                          </el-collapse-item>
                        </el-collapse>
                      </div>
                    </div>
                </div>
                <div class="advanceNotice">
                  <!-- 新船期预告 -->
                  <div class="seaship-title">
                    <span class="verticaOnlline"></span>
                    <p>{{ $t('details.advanceNotice') }}</p>
                  </div>
                  <div>
                    <div class="data-table">
                      <!-- 没有新船期预告 -->
                      <div class="fob-ship-nodata" v-if="isShow" style="height: 268px;padding-top: 20px;">
                        <div v-show="total == 0 || isShow">
                          <div class="fob-ship-nodata-img"></div>
                          <div class="fob-ship-nodata-text">
                            <span>{{ $t('details.sorryFeedback') }}</span>
                            <span class="fob-ship-nodata-text-emoji"></span>
                            <span>！</span>
                          </div>
                          <!-- 立即反馈按钮 -->
                          <button class="fob-ship-nodata-btn" @click="contactCustomer()" style="background: #fff;">{{ $t('details.envelope') }}</button>
                        </div>
                      </div>
                      <div v-else>
                        <!-- th——表格第一行 -->
                        <div class="data-th">
                          <el-row>
                            <el-col :span="8">{{ $t('details.vessel') }}</el-col>
                            <el-col :span="4">{{ $t('details.voyage') }}</el-col>
                            <el-col :span="4">
                            <p>ETD</p>
                            </el-col>
                            <el-col :span="5">
                            <p>ETA</p>
                            </el-col>
                            <el-col :span="2">
                            <p>{{ $t('details.detail') }}</p>
                            </el-col>
                          </el-row>
                        </div>
                        <!-- td——新船期详情行 -->
                        <div class="data-td" v-if="total != 0">
                            <el-row v-for="(item,transitKey) in newScheduleList" :key="transitKey">
                              <!-- 船名 -->
                              <el-col :span="8">{{getMotherShipRouteCode2(item).vessel}}</el-col>
                              <!-- 航次 -->
                              <el-col :span="4">{{getMotherShipRouteCode2(item).voyage}}</el-col>
                              <!-- ETD -->
                              <el-col :span="4">
                                  <p>{{item.etd == '' ? '--' : getObjtermina(item.etd,"week")}}</p>
                              </el-col>
                              <!-- ETA -->
                              <el-col :span="5">
                                  <p>{{item.eta == '' ? '--' : getObjtermina(item.eta,"week")}}</p>
                              </el-col>
                              <!-- 详情按钮 -->
                              <el-col :span="2">
                                <p>
                                    <a
                                    href="javascript:void(0);"
                                    :class="item.state == 0 ? 'btn' : 'btn huis'"
                                    @click="goInnerDetails({
                                      polId:otherParms.polId,
                                      podId:otherParms.podId,
                                      vessel:item.vessel,
                                      voyage:item.voyage,
                                      dateType:dateType,
                                      startTime:item.etd,
                                      endTime:endTime,
                                      id:item.id,
                                      voyageId:item.voyageId,
                                      state: item.state,
                                      totalId:item.totalId,
                                      wayType: 0
                                    },item)"
                                    >{{ $t('details.detail') }}</a>
                                </p>
                              </el-col>
                            </el-row>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- 报错，跟踪按钮部分 -->
                <div class="footerBtn">
                  <!-- 报错按钮 -->
                  <el-button round class="btnError teshuButt" @click="contactCustomer()">{{ $t('details.error')}}</el-button>
                  <!-- 跟踪按钮 -->
                  <!-- <el-button 
                    round 
                    class="btnTrack" 
                    @click="handleTranckClick" 
                    @mouseover.native="handleMouseover" 
                    @mouseout.native="handleMouseout"
                  >
                    {{ datailInfometion.traceStatus == 0 ? $t('details.track') : $t('details.tracked') }}
                  </el-button> -->
                  <!-- 跟踪按钮hover提示信息 -->
                  <!-- <div class="bubble">
                    <p>{{ $t('details.following')}}</p>
                    <p>{{ $t('details.shipPlan')}}</p>
                    <p>{{ $t('details.draught')}}</p>
                    <p>{{ $t('details.portArrival')}}</p>
                    <div class="bubbleTail"></div>
                  </div> -->
                </div>
            </div>
          </div>
        </div>
    </div>
</div>
</template>

<script>
import { setTimeout } from "timers";
import RouteMap from './RouteMap/RouteMap.vue'
import api from './RouteMap/api.js'
import LineChart from './LineChart/index.vue'
import xmap from './XMap/xmap.vue'
import Loading from "@components/loading"
export default {
  data() {
    return {
      info: {},
      logos: [],
      filterCond: {},
      voyage: "",
      pol: {},
      pod: {},
      polTerninal: "",
      podTerninal: "",
      isTransit: "",
      isLate:'',
      transTime: "",
      etd: new Date(2020,3,30),
      eta: new Date(2020,2,30),
      loading: false,
      totalLoading: true,
      userId:
        this.getCookie("authId") != null && this.getCookie("authId") != ""
          ? this.getCookie("authId")
          : "",
      routeCodeList: [],
      dateType: "1",
      startTime: "",
      endTime: "",
      scac: "",
      id: "",
      viewOrClose: 'putAway',
      linerTrackStatus: [], //箱子详情流程
      ferrysList: [],
      activeNamesMore: ['0'],
      routeInfo: null,
      xmapProps: null,

      datailInfometionList: [],
      datailInfometion: {},
      portArr: [],
      roteCodeList: [],
      pathId: '',
      vessel:'COSCO SHANGHAI',
      isShippPlan: '',

      // 新船期预告
      isShow: true,
      total: 1,
      otherParms: {},
      inForm: {},
    };
  },
  components: {
    RouteMap,
    LineChart,
    xmap,
    Loading
  },
  computed: {},
  methods: {
    handleShipChange(val) {
      if(val.length > 0){
        this.viewOrClose = this.$t('details.putAway')
      }else{
        this.viewOrClose = this.$t('details.viewFullPath')
      }
    },
  //处理日期时间格式
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
      var geS = this.getProcessTime("YY-mm-dd HH:MM",new Date(time)) //格式化时间
      var b = geS.split(' ')[0]
      var d = geS.split(' ')[1]
      var c = weekDay[new Date(time).getDay()]
      return b + ' ' + d + ' ' + '(' + c + ') '
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
      var geS = this.getProcessTime("YY-mm-dd HH:MM",new Date(time)) //格式化时间
      var b = geS.split(' ')[0]
      var c = weekDay[new Date(time).getDay()]
      return b + '(' + c + ')'
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
    //刚进页面的船期详情
      goDetails(params) {
        console.log(params,'paramsparamsparams')
        // 回到顶部
        $("body,html").animate({ scrollTop: 0 }, 500);
        var that = this;
        that.totalLoading = true;
        that.startTime = params.startTime;
        that.endTime = params.endTime;
        that.dateType = params.dateType;
        that.id = params.id;
        //获取详情信息
        // "&voyage=" + (params.voyage == "-" ? "" : params.voyage) +

        this.$Axios.get(this.GLOBAL.url + "schedules/web/details?id=" + params.voyageId + "&userId=" + params.userId + "&userIp=" + params.userIp+ "&userType=" + params.userType + "&startTime=" + params.startTime,{
          headers: {
              Authorization: this.getToken()
        },
        }).then(res => {
          var data = res.data
          if (data.status == 1) {
            if(data.content.length > 0){

              //当前返回的起始港是大连
              if(data.content[0].polCode && data.content[0].polCode == 'CNDLC'){
                  that.isShippPlan = '大连'
              }
              //当前返回的起始港是天津
              if(data.content[0].polCode && data.content[0].polCode == 'CNTXG'){
                  that.isShippPlan = '天津'
              }
              //当前返回的起始港是广州
              if(data.content[0].polCode && data.content[0].polCode == 'CNNSA'){
                  that.isShippPlan = '广州'
              }
              //当前返回的起始港是广州
              if(data.content[0].polCode && data.content[0].polCode == 'CNHUA'){
                  that.isShippPlan = '广州'
              }


              // // 处理中转的信息 已传给地图
              // var transitMap = []
              // if(data.content[0].isTransit == '1'){ //代表中转
              //     for (let i = 0; i < data.content[0].routeCodeList.length; i++) {
              //       let c = data.content[0].routeCodeList[i]
              //       if(c.lat && c.lon && data.content[0].pod !== c.portName){ //如果当前中转港有坐标
              //         transitMap.push({
              //           name:c.portName ? (c.portName.replace(' ','')).toUpperCase() : '',
              //           lat:Number(c.lat),
              //           lon:Number(c.lon)
              //         })
              //       }
              //     }
              //   }
              // //地图参数
              // that.xmapProps = {
              //   vessel:data.content[0].vessel,
              //   voyage:data.content[0].voyage,
              //   mmsi:data.content[0].mmsi,
              //   pol:{
              //     name:data.content[0].pol ? (data.content[0].pol.replace(' ','')).toUpperCase() : '',
              //     terminal:data.content[0].polTerninal, 
              //     code:data.content[0].polCode,
              //     eta:'',
              //     etd:data.content[0].etd,
              //     lat:data.content[0].polLat ? Number(data.content[0].polLat) : '', //36.062630,
              //     lon:data.content[0].polLon ? Number(data.content[0].polLon) : ''//120.310500
              //   },
              //   pod:{
              //     name:data.content[0].pod ? (data.content[0].pod.replace(' ','')).toUpperCase() : '',
              //     terminal:data.content[0].podTerninal, 
              //     code:data.content[0].podCode,
              //     eta: data.content[0].eta,
              //     etd:'',
              //     lat:data.content[0].podLat ? Number(data.content[0].podLat) : '' ,//22.342263,
              //     lon:data.content[0].podLon ? Number(data.content[0].podLon) : ''//114.107302
              //   },
              //   transit:transitMap, //中转港
              //   polTime: data.content[0].etd ? new Date(data.content[0].etd) : '', //起始港时间
              //   podTime: data.content[0].eta ? new Date(data.content[0].eta) : '', //目的港时间
              //   during: 1000*3600*24*30,
              //   isEntre:data.content[0].isTransit == 0 ? '0' : '1', //0 直达 ,1 中转 
              // }

              //为定义的状态赋值
              that.datailInfometionList = data.content
              console.log(that.datailInfometionList,'datailInfometionList')
              //循环数组
              $.each(that.datailInfometionList, function(key, value) {
                if(value.traceState == 'POLP'){//计划离港
                    value.traceState = 'PlannedDeparture' 
                }else if(value.traceState == 'POLA'){ //到达起运港
                    value.traceState = 'ArrivalDeparture'
                }else if(value.traceState == 'TSIN'){//运输中
                    value.traceState = 'InTransit'
                }else if(value.traceState == 'TSAR'){// 到达中转港
                    value.traceState = 'ArrivPort'
                }else if(value.traceState == 'PODA'){//到达目的港
                    value.traceState = 'ArriveDestination'
                };
                console.log(value,'value')
                that.datailInfometion = value

                //下面是航程
                var hangcTime = ''
                hangcTime = value.editTransitTime ? value.editTransitTime : value.transTime ? value.transTime : value.totalDuration ? value.totalDuration : 0
                that.datailInfometion['hangcTime'] = hangcTime

                that.pathId = that.datailInfometion.pathId;
                //船名航次去重
                let totalTemp = [];
                let type = '';
                if(that.datailInfometion.isTransit == 0){
                  for(var i = 0;i < that.datailInfometion.sameRoute.length;i++){
                    that.portArr.push({
                      roteCodes: that.datailInfometion.sameRoute[i].disPlayName ? that.datailInfometion.sameRoute[i].disPlayName : that.datailInfometion.sameRoute[i].routeCode,
                        type: that.datailInfometion.sameRoute[i].type,
                    });
                    let obj = that.datailInfometion.sameRoute[i].scac ? that.datailInfometion.sameRoute[i].scac.toUpperCase() : '';
                    let logoUrl = require("../assets/images/my-logos2/" + obj + ".png");
                    totalTemp.push({
                      logoUrl: logoUrl,
                      type: that.datailInfometion.sameRoute[i].type + '',
                      isOvt: that.datailInfometion.sameRoute[i].isOvt + '',
                      carrierName:that.datailInfometion.sameRoute[i].carrierName
                    });
                  };

                  //把logos按照A-Z排序
                  // totalTemp.sort((a, b) => a.carrierName.charCodeAt(0) - b.carrierName.charCodeAt(0)); //a~z 排序

                  //循环logos 看是否有母船 若是有放到第一位
                  // for (let i = 0; i < totalTemp.length; i++) {
                  //   if(totalTemp[i].type == '0'){ //说明有母船
                  //       let c = totalTemp[i] //当前母船赋值给 c
                  //       totalTemp.splice(i,1) //在logos里删除 母船
                  //       totalTemp.unshift(c) //在数组最前面放上母船
                  //   }
                  // }

                }else{
                  let roteList = that.datailInfometion.routeCodeList;
                  that.roteCodeList = that.datailInfometion.routeCodeList;
                  for (let i = 0; i < that.roteCodeList.length; i++) {
                    if(that.roteCodeList[i].flag == "RAIL" || that.roteCodeList[i].flag == "FEEDER" || that.roteCodeList[i].flag == "TRUCK"){
                      that.roteCodeList[i].disPlayName = roteList[i].flag
                    }
                  }
                  // that.roteCodeList.push({
                  //   routeCode: that.datailInfometion.scac,
                  //   disPlayName: that.datailInfometion.carrierName,
                  //   portName: "",
                  //   realATA: "",
                  //   eid: "",
                  // });
                  // that.roteCodeList.sort(function (a,b){
                  //   if (a.disPlayName > b.disPlayName) {
                  //     return 1
                  //   } else if(a.disPlayName < b.disPlayName){
                  //     return -1
                  //   }
                  // });
                  let scac =  that.datailInfometion.scac ? that.datailInfometion.scac.toUpperCase() : '';
                  for (let i = 0; i < roteList.length; i++) {
                    let logoUrl = '';
                    let disPlayName = ''
                    if(roteList[i].flag == "RAIL" || roteList[i].flag == "FEEDER" || roteList[i].flag == "TRUCK"){
                      disPlayName = roteList[i].flag
                      // if(roteList[i].isOvt == '1'){
                      //   logoUrl = require("../assets/images/my-logos2/" + roteList[i].flag + "1.png");
                      // }else{
                      //   logoUrl = require("../assets/images/my-logos2/" + roteList[i].flag + "0.png");
                      // }
                      logoUrl = require("../assets/images/my-logos2/" + roteList[i].flag + "0.png");
                    }else{
                      disPlayName = roteList[i].disPlayName ? roteList[i].disPlayName : roteList[i].routeCode
                      logoUrl = require("../assets/images/my-logos2/" + scac + ".png");
                    };
                    totalTemp.push({
                      logoUrl: logoUrl,
                      disPlayName: disPlayName,
                      type: '',
                      isOvt: roteList[i].isOvt + ''
                    });
                  }
                }
                that.logos = totalTemp;
              });
            }else{
              this.totalLoading = true
            }
            that.totalLoading = false
          } else if (data.status == 3) {
            that.totalLoading = false;
            that.$alert(that.$t('messages.toThereimesSail'), that.$t('messages.tips'),{
                confirmButtonText: that.$t('messages.determine'),
                cancelButtonText: that.$t('messages.cancel'),
                type: "warning",
                center: true,
                showClose: false
              })
              .then(() => {
              that.$router.push({
                path: '/Login',
              });
                // that.$parent.$parent.loginAndRegist = true;
                // that.$parent.$parent.registDialogFormVisible = false;
                // that.$parent.$parent.loginDialogFormVisible = true;
              })
              .catch(() => {});
          } else {
            that.totalLoading = false;
            that.$message({
              message: that.$t('messages.getAdvanceNotice'),
              type: "error",
              customClass: "base-message-zindex"
            });
          }
        }).catch((err)=>{
            that.totalLoading = false
            that.$message({
              message: that.$t('messages.erverException'),
              type: "error",
              customClass: "base-message-zindex"
            })
        })
    },
    goShippingLine(){
      if(this.datailInfometion){
        var setParamDate = {
          mmsi: this.datailInfometion.mmsi,
          staticId: this.datailInfometion.staticId,
          polCode: this.datailInfometion.linePolCode,
          podCode: this.datailInfometion.linePodCode,
          carrierName: this.datailInfometion.carrierName,
          voyageId: this.inForm.voyageId,
          id: this.inForm.id,
          polId: this.inForm.polId,
          podId: this.inForm.podId,
          pol: this.inForm.pol,
          pod: this.inForm.pod,
          vessel: this.inForm.vessel,
          voyage: this.inForm.voyage,
          dateType: this.inForm.dateType,
          start: this.inForm.start,
          isGc: this.inForm.isGc,
          startTime: this.inForm.startTime,
          endTime: this.inForm.endTime,
          userIp: returnCitySN.cip,
          userType: this.getCookie('authId') ? '0' : '1',
          week: this.weekId,
          isZhakai :this.inForm.isZhakai,
          filterCond: this.filterCond,
          xmapProps: this.xmapProps,
          source: 'Schedule',
          routeCode: this.inForm.routeCode, //列表带得routeCode
          disRouteCode: this.datailInfometion.routeCode, //详情页routeCode
          totalId: this.inForm.totalId,
          wayType: this.inForm.wayType,
        }

        if(this.userId){ //说明当前是登录用户点击了详情
          var paramDate = this.setParams(setParamDate)

          if(this.webClient){
            // 网站跳转新页面
            let routeData = this.$router.resolve({
                path: `/shippingLine/${paramDate}`
              });
            window.open(routeData.href, '_blank')
          }else{
            // 客户端当前页跳转
            this.$router.push({
              path: `/shippingLine/${paramDate}`,
            });
          }          
        }
      }
    },
    //码头船舶计划
    getObjtermina(res,year) {
      if(res){
          var weekDay = [
              this.$t('list.suns'),
              this.$t('list.mons'), 
              this.$t('list.tues'),
              this.$t('list.weds'), 
              this.$t('list.thus'),
              this.$t('list.fris'), 
              this.$t('list.sats')
          ];
          var geS = this.getProcessTime("YY-mm-dd HH:MM",new Date(res)) //格式化时间
          var a = geS.split(' ')
          var b = a[0].replace('/','-').replace('/','-')
          var bY = a[0].replace('/','-').replace('/','-')
          b = b.substring(b.length-5);
          var c = weekDay[new Date(Date.parse(a[0])).getDay()]
          var d = a[1] ? a[1].slice(0,5) : ''
          if(!year){
              return b + '(' + c + ')' + ' ' +  d 
          }else if(year && year == "year"){
              return bY + ' ' + d 
          }else if(year && year == "week"){
              return b + '(' + c + ')'
          }
      }
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
      }
      var result = {
        routeCode: (!routeCode || routeCode == 'UNDEFINED') ? "-" : routeCode,
        voyage: voyage ? voyage : "-",
        vessel: vessel ? vessel : "-"
      }
      return result;
    },
    // 船期详情
    goInnerDetails(params,item) {
      if (params.state == 0) {
          var that = this;
          //打开新页面需要传的参数
          var pol= that.inForm.pol
          var polId= that.inForm.polId
          var pod= that.inForm.pod
          var podId= that.inForm.podId
          var vessel= params.vessel
          var voyage= params.voyage
          var dateType= params.dateType
          var start= that.inForm.start
          var id= params.id
          var isTransit= that.inForm.isTransit
          var isGc= that.inForm.isGc
          var startTime= params.startTime
          var endTime= params.endTime
          var routeCode = params.routeCode
          var totalId = params.totalId
          var wayType = params.wayType
          var voyageId = params.voyageId
          var isZhakai = that.inForm.isZhakai
          var userId = this.getCookie("authId") != null && this.getCookie("authId") != "" ? this.getCookie("authId") : ""
          var userIp =  returnCitySN.cip
          var userType = this.getCookie('authId') ? '0' : '1'

          // 处理中转的信息 已传给地图
          var transitMap = []
          if(item.info.isTransit == '1'){ //代表中转
              for (let i = 0; i < item.info.routeCodeList.length; i++) {
                let c = item.info.routeCodeList[i]
                if(c.lat && c.lon && item.info.pod !== c.portName){ //如果当前中转港有坐标
                  transitMap.push({
                    name:c.portName ? (c.portName.replace(' ','')).toUpperCase() : '',
                    lat:Number(c.lat),
                    lon:Number(c.lon)
                  })
                }
              }
            }
          // //地图参数
          var xmapProps = {
            vessel:item.info.vessel,
            voyage:item.info.voyage,
            mmsi:item.info.mmsi,
            pol:{
              name:item.info.pol ? (item.info.pol.replace(' ','')).toUpperCase() : '',
              terminal:item.info.polTerninal, 
              code:item.info.polCode,
              eta:'',
              etd:item.info.etd,
              lat:item.info.polLat ? Number(item.info.polLat) : '', //36.062630,
              lon:item.info.polLon ? Number(item.info.polLon) : ''//120.310500
            },
            pod:{
              name:item.info.pod ? (item.info.pod.replace(' ','')).toUpperCase() : '',
              terminal:item.info.podTerninal, 
              code:item.info.podCode,
              eta: item.info.eta,
              etd:'',
              lat:item.info.podLat ? Number(item.info.podLat) : '' ,//22.342263,
              lon:item.info.podLon ? Number(item.info.podLon) : ''//114.107302
            },
            transit:transitMap, //中转港
            polTime: item.info.etd ? new Date(item.info.etd) : '', //起始港时间
            podTime: item.info.eta ? new Date(item.info.eta) : '', //目的港时间
            during: 1000*3600*24*30,
            isEntre:item.info.isTransit == 0 ? '0' : '1', //0 直达 ,1 中转 
          }

          var setParamDate = {
            voyageId: voyageId,
            id:id,
            polId:polId,
            podId:podId,
            pol:pol,
            pod:pod,
            vessel:vessel,
            voyage:voyage,
            dateType:dateType,
            start:start,
            isGc:isGc,
            startTime:startTime,
            endTime:endTime,
            userId:userId,
            userIp:userIp,
            userType:userType,
            routeCode:routeCode,
            totalId:totalId,
            wayType:wayType,
            week: that.weekId,
            isZhakai:isZhakai,
            filterCond: that.filterCond,
            xmapProps:xmapProps,
          }

          var paramDate = this.setParams(setParamDate)
          if(that.userId){ //说明当前是登录用户点击了详情
            this.$router.push({
              path: `/route-detail/${paramDate}`,
            });
          }else{ //此时应该跳到登录页
            var detailList = {
              id:paramDate
            }
            sessionStorage.setItem("detailList",JSON.stringify(detailList)) //存储未登录状态时候的船跟踪的数据
            that.$router.push({
              path: '/Login',
            });        
          }
      }
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
    //获取新船期预告
    getOtherSchedule(params) {
      this.total = 1;
      $(".tab-box")
        .find("li")
        .removeClass("active");
      $(".tab-box")
        .find("li")
        .eq(0)
        .addClass("active");
      var that = this;
      var routeCode = params.routeCode
      let etd = params.startTime
      this.$Axios.get(this.GLOBAL.url + "schedules/web/notice?polCode=" + params.polId + "&podCode=" + params.podId + "&routeCode=" + routeCode + "&scac=" + that.scac + "&etd=" + etd,{
        headers: {
            Authorization: this.getToken()
      },
      }).then(res => {
        if (res.data.status == 1) {
          if (res.data.content.length > 0) {
            var list = [];
            var idlist = [];
            $.each(res.data.content, function(k, d) {
              var etdWeek = that.getWeek(d.etd);
              var etaWeek = that.getWeek(d.eta);
              var d2 = {
                eta: d.eta,
                etd: d.etd,
                etaWeek: etaWeek,
                etdWeek: etdWeek,
                vessel: d.state == '0' ? d.vessel : '船名待定',
                voyage: d.state == '0' ? d.voyage : '--',
                state: d.state,
                id: d.id,
                transitInfoList:d.transitInfoList,
                polId: that.inForm.polId,
                podId: that.inForm.podId,
                voyageId: d.voyageId,
                totalId: d.totalId,
                info:d,
              };
              list.push(d2);
            });
            that.newScheduleList = list
            that.total = that.newScheduleList.length;
            if (that.total == 0) {
              that.isShow = true;
            } else {
              that.isShow = false;
            }
          } else {
            that.isShow = true;
            that.total = 0;
            that.newScheduleList = [];
          }
        } else {
          that.$message({
            message: that.$t('messages.getAdvanceNotice'),
            type: "error",
            customClass: "base-message-zindex"
          });
        }
      }).catch((err)=>{
          that.$message({
            message: that.$t('messages.erverException'),
            type: "error",
            customClass: "base-message-zindex"
          })
      })
    },
    //完整路径船
    getFullPath(params){
      let that = this;
      this.$Axios.get(that.GLOBAL.url + `schedules/web/completePath?id=${params.totalId}&wayType=${params.wayType}&voyageId=${params.voyageId}`,{
        headers: {
            Authorization: this.getToken()
      },
      }).then(res => {
        if (res.data.status == 1) {
          that.linerTrackStatus = res.data.content;
          console.log(that.linerTrackStatus)
          if(that.linerTrackStatus.length > 0){
            that.linerTrackStatus[that.linerTrackStatus.length-1]['str'] = '计划到港';
            for (let i = 0; i < that.linerTrackStatus.length; i++) {
              if (i == 0) {
                  that.linerTrackStatus[i].basePortCn = '起运港 ' + that.linerTrackStatus[i].basePort
                  that.linerTrackStatus[i].basePortEn = 'Pol ' + that.linerTrackStatus[i].basePort
              } else if (i == that.linerTrackStatus.length-1) {
                  that.linerTrackStatus[i].basePortCn = '目的港 ' + that.linerTrackStatus[i].basePort
                  that.linerTrackStatus[i].basePortEn = 'Pod ' + that.linerTrackStatus[i].basePort
              } else {
                  that.linerTrackStatus[i].basePortCn = '中转港 ' + that.linerTrackStatus[i].basePort
                  that.linerTrackStatus[i].basePortEn = 'TransitPort ' + that.linerTrackStatus[i].basePort
              }
              that.linerTrackStatus[i].isShowVess = true
              var c = that.linerTrackStatus[i]
              console.log(that.linerTrackStatus[i],'that.linerTrackStatus[i]')
              //下面的是处理是否要显示船节点的信息
              if(c.vesselInfo.vessel == '' && c.vesselInfo.voyage == '' && c.vesselInfo.imo == '' && c.vesselInfo.mmsi == '' && c.vesselInfo.ctnrVolume == '' && c.vesselInfo.buildDate == '' && c.vesselInfo.operator == ''){
                that.linerTrackStatus[i].isShowVess = false
              }
              //下面处理的是 个节点应该显示的标识（显示的应该是下一个节点应该显示的标识）
              if(that.linerTrackStatus[i+1]){
                that.linerTrackStatus[i].flag = that.linerTrackStatus[i+1].flag ? that.linerTrackStatus[i+1].flag : '-'
              }
            }
          }
        } else {}
      }).catch((err)=>{
        that.$message({
            message: that.$t('messages.erverException'),
            type: "error",
            customClass: "base-message-zindex"
        })
      })
    },

    //跟踪按钮
    handleTranckClick(){},
    handleMouseover(){
      document.querySelector('.bubble').style.display = "block"
    },
    handleMouseout(){
      document.querySelector('.bubble').style.display = "none"
    },
    //返回上一页
    goBack(){
        var currentDate = new Date();
        var setParamDate = {
          week: this.weekId,
          filterCond: this.filterCond,
          isZhakai: this.inForm.isZhakai,
          pol: this.inForm.pol,
          polId: this.inForm.polId,
          pod: this.inForm.pod,
          podId: this.inForm.podId,
          start: this.inForm.start,
          dateType: this.inForm.dateType,
          t:currentDate.getTime()
        }
        var paramDate = this.setParams(setParamDate)
        var POLPOD = this.inForm.polId.toLowerCase() + '-' + this.inForm.podId.toLowerCase()

        this.$router.push({
          path: `/route/${POLPOD}/${paramDate}`
        });
      },
  },
  created() {},
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
  mounted() {
    if(sessionStorage.getItem('detailList')){
      sessionStorage.removeItem('detailList')
    }
    $("body,html").animate({ scrollTop: 0 }, 500)
    var that = this;
    if(this.$route.params && this.$route.params.id){
      var paramDate = this.getParams(this.$route.params.id)
      that.inForm = paramDate
      that.goDetails(paramDate)
      //回值之后再请求新船期预告
      that.getOtherSchedule(paramDate)
      // 完整路径
      that.getFullPath(paramDate)
      if(paramDate.xmapProps){
        that.xmapProps = paramDate.xmapProps
      }
      if(paramDate.week){
        that.weekId = paramDate.week
      }
      if(paramDate.isLate){
        that.isLate = paramDate.isLate
      }
      if(paramDate.filterCond){
        that.filterCond = paramDate.filterCond
      }
    }
  }
};
</script>