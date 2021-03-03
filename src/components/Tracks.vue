<style lang="scss">
.list-main .container .header_title{
    width: 100%;
    height: 68px;
    line-height: 68px;
    color: #282828;
    font-size: 20px;
    font-weight: 600;
    padding-left: 20px;
}
.list-main .container .header-list{
    width: 100%;
    height: 40px;
    background: #fff;
    border-radius: 4px;
    border: solid 1px #f2f2f2;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    position: relative;
    .sortIcon{
        display: inline-block;
        min-width: 80px;
        height: 24px;
        position: relative;
        margin-left: 24px;
        &.left-mm{
            margin-left: 20px;
        }
    }
    .sortIcon .iconfont{
        position: absolute;
        font-size: 12px;
        color: #a8a8a8;
    }
    .sortIcon p{
        display: inline-block;
        margin-right: 4px;
        line-height: 24px;
        color: #282828;
        font-size: 12px;
        cursor: pointer;
    }
    .sortIcon p.active{
        color: #26B4B2;
        font-weight: 600;
    }
    .iconfont.icon-sj-left{
        top: 2px;
        cursor: pointer;
    }
    .iconfont.icon-xjiffangxiangsanjiaozheng3{
        cursor: pointer;
        top: 9px;
    }
    .sort-active{
        color: #282828 !important;
    }
    .right_conte{
        position: absolute;
        height: 100%;
        right: 20px;
        display: flex;
        align-items: center;
        .search{
            width: 250px;
            height: 24px;
            position: relative;
            overflow: hidden;
            border-radius: 12px;
            border: solid 1px #f2f2f2;
            .inputClass{
                width: 80%;
                height: 24px;
                line-height: 24px;
                border: 0;
                outline: none;
                margin-left: 16px;
                color: #282828;
            }
            input::-webkit-input-placeholder{
                color: #909090;
                font-size: 12px;
            }  
            p{
                position: absolute;
                display: inline-block;
                top: 5px;
                right: 10px;
                img{
                    width: 13px;
                    height: 12px;
                    cursor: pointer;
                }
            }
        }
        .search_hover{
            border: solid 1px #d1d1d1;
        }
        .boxShipFloat{
            min-width: 80px;
            text-align: center;
            padding: 3px 16px;
            border: solid 1px #f2f2f2;
            border-radius: 15px;
            background-color: #fff;
            cursor: pointer;
            user-select: none;
            font-size: 12px;
            color: #282828;
            margin-left: 10px;
            &:hover{
                background-color: #26b4b2;
                border-color: #26b4b2;
                color: #fff;
            }
        }
        .first{
            background-color: #26b4b2;
            border-color: #26b4b2;
            color: #fff;
            &:hover{
                background-color: #51c3c1;
                border-color: #51c3c1;
            }
            .third{
                &:hover{
                    background-color: #ff7676;
                    border-color: #ff7676;
                }
            }
        }
    }
}

.trackMainIformion{
    background: #fff;
    padding: 10px 20px;
     li{
        border-bottom: solid 1px #f2f2f2;
        .trackMainIformion-li{
            width: 100%;
            height: 112px;
            display: flex;
            padding: 15px 0px 15px 0px;
            background: #fff;
            position: relative;
            &:hover{
                background: #f8f8f8;
            }
            .item{
                display: inline-block;
                height: 100%;
                overflow: hidden;
                padding-top: 5px;
                margin-right: 20px;
            }
        }
    }
}
.mainIformion_hui{
    background: transparent;
    border: none;
}
.trackMainIformion li:last-of-type{
    border: none;
}
.trackMainIformion .trackMainIformion-li .item.item-1{
    margin-right: 10px;
}
.trackMainIformion .trackMainIformion-li .item-1 {
    width: 235px;
}
.trackMainIformion .trackMainIformion-li .item-1 .first_p{
    color: #282828;
    font-size: 13px;
    font-weight: 600;
}
.trackMainIformion .trackMainIformion-li .item-1 p{
    font-size: 14px;
    margin-top: 5px;
    margin-left: 14px;
    overflow: hidden;/*超出部分隐藏*/
    text-overflow: ellipsis;/*超出部分显示省略号*/
    white-space: nowrap;/*规定段落中的文本不进行换行 */
    align-items: center;
    .chuan_hui{
        width: 15px;
	    height: 13px;
        transform: translateY(2px);
        margin-right: 8px; 
    }
    .dot_img{
        margin-left: 2px;
        margin-right: 7px;
    }
    .wenjian_img{
        transform: translateY(1px);
    }
    .spanright{
        color: #282828;
        font-size: 12px;
        text-align: left;
        font-weight: 600;
    }
    .qianhui{
        font-size: 12px;
        color: #909090;
    }
    .red{
        color: red;
    }
}
.trackMainIformion .trackMainIformion-li .item.item-2{
    margin-right: 10px;
}
.trackMainIformion .trackMainIformion-li .item-2{
    width: 10%;
}
.trackMainIformion .trackMainIformion-li .item-2 p{
    width: 100%;
    min-height: 19px;
    font-size: 12px;
    margin-top: 5px;
    color: #909090;
    overflow: hidden;/*超出部分隐藏*/
    text-overflow: ellipsis;/*超出部分显示省略号*/
    white-space: nowrap;/*规定段落中的文本不进行换行 */
}
.trackMainIformion .trackMainIformion-li .item_change{
    width: 20px;
    margin-right: 15px;
    position: relative;
    display: inline-block;
}
.trackMainIformion .trackMainIformion-li .item_change .remark_box{
    position: absolute;
    bottom: 54px;
    right: 0;
    cursor: pointer;
}
.trackMainIformion .trackMainIformion-li .item_change .change_box{
    position: absolute;
    bottom: 4px;
    left: 0;
    width: 100%;
    height: 18px;
    line-height: 17px;
    text-align: center;
    background-color: #f2f2f2;
    border-radius: 9px;
    font-size: 12px;
    color: #909090;
    div{
        white-space: nowrap;
    }
}
.trackMainIformion .trackMainIformion-li .item.item-3{
    margin-right: 15px;
}
.trackMainIformion .trackMainIformion-li .item-3{
    flex: 1;
    padding: 0 0 0 20px;
    border-left: 1px solid #f2f2f2;
}
.trackMainIformion .trackMainIformion-li .item-3 .stepitem{
    width: 100%;
    height: 100%;
    padding-top: 10px;
}
.trackMainIformion .trackMainIformion-li .item-3 .stepitem .stepitemLi{
    width: 100%;
    height: 12px;
    display: flex;
    align-items: center;
    .dot_line{
        height: 14px;
        display: flex;
        align-items: center;
        position: relative;
    }
    .dot_line1{
        flex: 1;
    }
    .dot_line2{
        width: 121px;
    }
    .dot{
        width: 14px;
        height: 14px;
        border-radius: 50%;
        position: relative;
    }
    .dot_hui{
        background-color: #ffffff;
        border: solid 2px #d1d1d1;
    }
    .dot_active{
        background-image: url('../assets/images/code_active.png');
        background-repeat: no-repeat;
        background-size: 100%;
    }
    .line{
        flex: 1;
        height: 2px;
        background: #d1d1d1;
    }
    .lin_active{
        background: #26b4b2;
    }
    .left_info{
        width: 80%;
        height: 40px;
        position: absolute;
        left: 0;
        top: 18px;
    }
    .right_info{
        width: 80%;
        height: 40px;
        position: absolute;
        right: 0;
        top: 18px;
    }
    .tes_info{
        width: 80%;
        height: 40px;
        position: absolute;
        right: 12px;
        top: 18px;
    }
    .title{
        width: 100%;
        height: 20px;
        line-height: 20px;
        margin-top: 2px;
        color: #909090;
        font-size: 12px;
        text-align: left;
        white-space: nowrap;/*规定段落中的文本不进行换行 */
    }
    .title_active{
        color: #282828 !important;
    }
    .tes_title{
        overflow: hidden;/*超出部分隐藏*/
        text-overflow: ellipsis;/*超出部分显示省略号*/
        white-space: nowrap;/*规定段落中的文本不进行换行 */
    }
    .time{
        width: 100%;
        height: 20px;
        line-height: 20px;
        color: #909090;
        font-size: 12px;
        text-align: left;
        overflow: hidden;/*超出部分隐藏*/
        text-overflow: ellipsis;/*超出部分显示省略号*/
        white-space: nowrap;/*规定段落中的文本不进行换行 */
    }
    .text_aligin{
        text-align: right !important;
    }
}
.trackMainIformion .trackMainIformion-li .item.item-4{
    min-width: 24px;
    margin-right: 15px;
    position: relative;
    p{
        color: #909090;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        cursor: default;
    }
    p.newWeb{
        color: #007ce3;
        cursor: pointer;
        &:hover{
            font-weight: 600;
        }
    }
}
.trackMainIformion .trackMainIformion-li .item.item-5{
    margin-right: 14px;
}
.trackMainIformion .trackMainIformion-li .item-5{
    width: auto;
    line-height: 60px;
    text-align: center;
    margin-right: 20px;
    .el-checkbox__input.is-checked .el-checkbox__inner{
        background-color: #26b4b2 !important;
        border-color: #26b4b2 !important;
    }
    .el-checkbox__input.is-focus .el-checkbox__inner{
        border-color: #26b4b2 !important;
    }
    .el-checkbox__inner:hover{
        border-color: #26b4b2 !important;
    }
}
.jiaDao{
    width: 100%;
    height: 30px;
    padding-top: 15px;
    .jiaZai{
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        color: #282828;
        .iconLoading{
            color: #000000;
            margin-right: 10px;
            margin-top: 2px;
            font-size: 14px;
        }
    }
}

.customClass{
    p {
        font-size: 14px;
    }
    width: 400px !important;
     .btnCustomSubmit {
        font-size: 12px !important;
        width: 68px !important;
        height: 28px !important;
        text-align: center !important;
        color: #5f6266 !important;
        background: #fff !important;
        border-radius: 5px !important;
        border: 1px solid #ccc !important;
        cursor: pointer;
        float: left !important;
        margin-left: 110px;
      }
      .btnCustomCencel {
        float: left !important;
        font-size: 12px !important;
        width: 68px !important;
        height: 28px !important;
        text-align: center !important;
        color: #fff !important;
        background: #072c4c !important;
        border-radius: 5px !important;
        border: 1px solid #072c4c !important;
        cursor: pointer;
        margin-left: 20px;
      }
      .textarea{
          width: 100%;
          height: 74px;
          resize: none;
          outline: none;
      }
      .textarea p{
          text-align: center;
      }
      .textarea .el-input{
          width: 372px;
          height: 40px;
          line-height: 40px;
          border-radius: 2px;
          margin-bottom: 22px;
          color: #a8a8a8;
      }
}
.el-message-box__header{
    padding-top: 12px;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 0px;
}
.el-dialog__body{
    padding: 20px !important;
}
.el-dialog__header{
    padding: 0;
}
.confirmButtonClass{
    background: #072c4c !important;
}
.trackFomatt{
    .upload_dialog{
        .el-dialog {
            width: 1000px;
            height: 569px;
            border-radius: 4px !important;
            margin: 0 !important;
            background-color: #ffffff;
            box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.1);
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            .el-dialog__body{
                padding: 20px !important;
            }
            .el-dialog__footer{
                padding-top: 0;
                .el-button{
                    width: 120px;
	                height: 30px;
                    border-radius: 16px;
                    line-height: 29px;
                    font-size: 12px;
                    padding: 0;
                }
                .el-button--default{
                    border: 1px solid #f2f2f2 !important;
                    color: #909090;
                    background: #fff;
                    &:hover{
                        background: #f2f2f2;
                    }
                }
                .el-button--primary{
                    background: #26b4b2;
                    color: #fff;
                    margin-left: 50px;
                    &:hover{
                        background:#26b4b2;
                    }
                }
            }
            .dialog{
                position: relative;
                .title{
                    height: 14px;
                    position: relative;
                    font-size: 14px;
                    color: #282828;
                    font-weight: 600;
                    text-align: left;
                    line-height: 14px;
                    padding-bottom: 34px;
                    display: flex;
                    justify-content: space-between;
                    .titleBox{
                        user-select: none;
                    }
                    .deleteBtn{
                        width: 90px;
                        height: 24px;
                        border-radius: 12px;
                        line-height: 22px;
                        font-size: 12px;
                        font-weight: normal;
                        text-align: center;
                        cursor: pointer;
                        user-select: none;
                        border: 1px solid #f2f2f2 !important;
                        color: #909090;
                        background: #fff;
                        margin-right: 28px;
                        margin-top: -2px;
                        &:hover{
                            color: #fff;
                            background: #072c4c;
                            border-color: #072c4c !important;
                        }
                    }
                }
                .el-table{
                    color: #282828;
                    font-size: 12px;
                    &::before{
                        background-color: #f2f2f2;
                    }
                    .el-table__body-wrapper{
                        height: 91% !important;
                    }
                    .el-checkbox__inner:hover{
                        border: 1px solid #072c4c !important;
                    }
                    .el-checkbox__input.is-disabled .el-checkbox__inner{
                        background-color: #fff;
                    }
                    .el-checkbox__input.is-indeterminate .el-checkbox__inner{
                        background: #072c4c !important;
                        border: 1px solid #072c4c !important;
                    }
                    .el-checkbox__input.is-checked .el-checkbox__inner{
                        background: #072c4c !important;
                        border: 1px solid #072c4c !important;
                        color: #fff !important;
                    }
                    .el-checkbox__input.is-focus .el-checkbox__inner{
                        border-color: #072c4c !important;
                    }
                    .el-table__column-filter-trigger{
                        display: none;
                    }
                    .caret-wrapper{
                        width: 14px;
                    }
                    .sort-caret{
                        left: 4px;
                    }
                    .ascending .sort-caret.ascending{
                        border-bottom-color: #072c4c;
                    }
                    .descending  .sort-caret.descending{
                        border-top-color: #072c4c;
                    }
                    .error_icon{
                        width: 12px;
                        height: 12px;
                        position: absolute;
                        right: 6px;
                        top: 14px !important;
                        z-index: 10;
                    }
                    .errorBorderRed td{
                        border-top: 1px solid #ff7676 !important;
                        border-bottom: 1px solid #ff7676 !important;
                    }
                    .errorBorderRed td:first-of-type{
                        border-left: 1px solid #ff7676 !important;
                    }
                    .errorBorderRed td:last-of-type{
                        border-right: 1px solid #ff7676 !important;
                    }
                    .columnPadding{
                        th{
                            background: #f9fafc !important;
                            color: #282828 !important;
                            font-weight: normal !important;
                        }
                        th:nth-of-type(2) div::before{
                            content: '* ';
                            color: #ff7676;
                        }
                        th:nth-of-type(3) div::before{
                            content: '* ';
                            color: #ff7676;
                        }
                        th:nth-of-type(4) div::before{
                            content: '* ';
                            color: #ff7676;
                        }
                    }
                    th.is-leaf{
                        border: none;
                    }
                    .el-table__row:hover td{
                        background: #fff !important;
                    }
                    tr{
                        height: 40px;
                    }
                    th,td{
                        padding: 3px 0;
                    }
                    th>.cell,td>.cell{
                        padding: 0 14px;
                        text-align: center;
                    }
                    .cell.el-tooltip{
                        position: relative;
                    }
                    .el-input__inner{
                        height: 34px;
                        padding: 0 !important;
                        border: none;
                        text-align: center;
                        border-radius: none;
                        font-weight: bold;
                        font-size: 12px;
                        background: rgba(0, 0, 0, 0);
                        color: #072c4c;
                    }
                    .el-input__inner::placeholder{
                        display: none;
                    }
                    .el-select__caret{
                        display: none;
                    }
                    .deleteBtn{
                        cursor: pointer;
                        user-select: none;
                        font-size: 18px;
                        color: #ff7676;
                    }
                }
            } 
        }
    }
}
.carri_select.el-popper{
    margin-top: 0px !important;
}
.teshu_tooip{
  z-index: 3005 !important;
}

.container .instafoot{
    width: 100%;
    height: 330px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    .insspan{
        min-width: 388px;
        background: url("../assets/images/cargo/shapeof.png") no-repeat;
        margin-right: 70px;
        background-size: cover;
        height: 112px;
        .span{
            width: 100%;
            height: 100%;
            line-height: 70px;
            font-size: 14px;
            color: #282828;
            text-align: center;
            padding: 12px 20px;
        }
    }
    .image{
        width: 498px;
        height: 206px;
    }
}
.fixe{
    position: fixed;
    height: 64px;
    background: rgba(0, 0, 0, 0);
    opacity: 0.95;
    width: 100%;
    bottom: 20px;
    background: url("../assets/images/genzongBg.jpg") no-repeat center;
    z-index: 100;
    text-align: center;
    cursor: pointer;
    background-size: 100%;
    img{
        margin-top: 10px;
    }
    span{
        position: absolute;
        font-size: 30px;
        display: inline-block;
        color: #fff;
        right: 64px;
        top: 18px;
        cursor: pointer;
    }
}
</style>
<template>
    <div ref="trackFomatt" class="trackFomatt">
        <!-- 跟踪列表页面 -->
        <div class="list-main">
            <!-- <div class="fixe" v-show="genzong" @click="contactCustomer()"><img src="../assets/images/genzong1.png" alt=""><span @click.stop="genzongBg" class="el-icon-close"></span></div> -->
            <div class="container">
                <Loading v-if="loading"></Loading>
                <div class="header_title">
                    {{$t('tracks.companyTrack') + '【共' + total + '条】'}}
                </div>
                <div class="header-list">
                    <!-- 按新增日排序 -->
                    <div class="sortIcon" @click="changeSort('searchTime',0)">
                        <p :class="orderByIndex == 0 ? 'active' : ''">{{ $t('instanceTranck.date') }}</p>
                        <sup
                            class="iconfont icon-sj-left"
                            data-sort="asc"
                            data-type="transSort"
                            data-index="1"
                        ></sup>
                        <sub
                            data-sort="desc"
                            data-type="transSort"
                            data-index="1"
                            class="iconfont icon-xjiffangxiangsanjiaozheng3"
                        ></sub>
                    </div>
                    <!-- 按离港日排序 -->
                    <div class="sortIcon left-mm" @click="changeSort('atdPol',1)">
                        <p :class="orderByIndex == 1 ? 'active' : ''">{{ $t('instanceTranck.etd') }}</p>
                        <sup
                            class="iconfont icon-sj-left"
                            data-sort="asc"
                            data-type="transSort"
                            data-index="1"
                        ></sup>
                        <sub
                            data-sort="desc"
                            data-type="transSort"
                            data-index="1"
                            class="iconfont icon-xjiffangxiangsanjiaozheng3"
                        ></sub>
                    </div>
                    <!-- 按到港日排序 -->
                    <div class="sortIcon" @click="changeSort('ataPod',2)">
                        <p :class="orderByIndex == 2 ? 'active' : ''">{{ $t('instanceTranck.eta') }}</p>
                        <sup
                            class="iconfont icon-sj-left"
                            data-sort="asc"
                            data-type="transSort"
                            data-index="1"
                        ></sup>
                        <sub
                            data-sort="desc"
                            data-type="transSort"
                            data-index="1"
                            class="iconfont icon-xjiffangxiangsanjiaozheng3"
                        ></sub>
                    </div>
                    <div class="right_conte">
                        <!-- 跟踪列表导航栏搜索部分 -->
                        <div class="search" :class="isSearch ? 'search_hover' : ''">
                            <input @keyup.enter="inputSearch" @focus="focusSearch" :placeholder="$t('instanceTranck.inputValue')" v-model="searchStr" suffix-icon="el-icon-search" class="inputClass" :readonly='!userId'/>
                            <p @click="inputSearch">
                                <img src="../assets/images/cargo/fdlan.png" v-if="isSearch">
                                <img src="../assets/images/cargo/fdhui.png" v-else>
                            </p>
                        </div>
                        <!-- 提醒设置按钮 -->
                        <div class="boxShipFloat first" @click="remind">
                            {{ $t('instanceTranck.settings') }}
                        </div>
                        <!-- 使用教程按钮 -->
                        <div class="boxShipFloat second" @click="useCourse">
                            {{ $t('instanceTranck.useCourse') }}
                        </div>
                        <!-- 全选按钮 -->
                        <div class="boxShipFloat third" @click="checkAll">
                            {{ $t('instanceTranck.selectAll') }}
                        </div>
                        <!-- 批量删除按钮 -->
                        <div class="boxShipFloat fourth" @click="delectAll">
                            {{ $t('instanceTranck.deletion') }}
                        </div>
                    </div>
                </div>
                <!-- 跟踪列表部分 -->
                <div class="trackMainIformion" :class="trackDate && trackDate.length > 0 && !isShiyong ?'':'mainIformion_hui'">
                    <ul  v-if="trackDate && trackDate.length > 0 && !isShiyong">
                        <li v-for="item in trackDate" :key="item.id">
                            <!-- 正常状态 -->
                            <div class="trackMainIformion-li">
                                <!-- 船，箱跟踪状态信息部分 -->
                                <div class="item item-1">
                                    <p class="first_p" v-title="item.referenceNo ? item.referenceNo : ''">
                                        <img class="wenjian_img" src="../assets/images/cargo/wenjian.png" style="margin-left: 2px;margin-right: 6px">
                                        {{item.isctnr ? $t('tracks.container') + ": " : $t('tracks.blbk') + ": "}}{{item.referenceNo ? item.referenceNo : ''}}
                                    </p>
                                    <p v-title="item.vessel">
                                        <img class="chuan_hui" src="../assets/images/cargo/chuanhui.png">
                                        <span class="qianhui">{{$t('instanceTranck.vessel') + ": "}}{{item.vessel ? item.vessel : '--'}}</span>
                                    </p>
                                    <p>
                                        <img class="dot_img" src="../assets/images/cargo/item-19.png" v-if="item.isUp == 1 ">
                                        <img class="dot_img" src="../assets/images/cargo/item-20.png" v-else>
                                        <span class="spanright"
                                            :class="item.isUp == 1 ? 'red' : ''"
                                        >   
                                            <span v-if="item.currentNode && $i18n.locale == 'zh-CN'" v-title="item.stateDescription ? item.stateDescription : ''">
                                                {{item.currentNode == '未知' ? item.webNodeCn ? item.webNodeCn + ": " : $t('instanceTranck.unknown') + ": " : $t('nodeInfo.' + item.currentNode) + ": "}}{{item.currentNodeTime ? getProcessTime('mm-dd HH:MM', new Date(item.currentNodeTime)) : '--'}}
                                            </span>
                                            <span v-else-if="item.currentNode && $i18n.locale == 'en-US'" v-title="item.stateDescription ? item.stateDescription : ''">
                                                {{item.currentNode == '未知' ? item.webNodeEn ? item.webNodeEn + ": " : $t('instanceTranck.unknown') + ": " : $t('nodeInfo.' + item.currentNode) + ": "}}{{item.currentNodeTime ? getProcessTime('mm-dd HH:MM', new Date(item.currentNodeTime)) : '--'}}
                                            </span>
                                            <span v-else style="margin-left:5px">--</span>
                                        </span>
                                    </p>
                                </div>
                                <!-- 船，箱跟踪详细信息部分 -->
                                <div class="item item-2">
                                    <div>
                                        <p v-title="item.remark ? item.remark : ''">
                                            {{$t('instanceTranck.Remarks') + ": " + (item.remark ? item.remark : '')}}
                                        </p>
                                        <p v-title="item.carrier ? item.carrier : ''">
                                            {{$t('instanceTranck.carrier') + ": " + (item.carrier ? item.carrier : '--')}}
                                        </p>
                                        <p v-title="item.ctnrType ? item.ctnrType : ''">
                                            {{$t('instanceTranck.boxModel') + ": " + (item.ctnrType ? item.ctnrType : '--')}}
                                        </p>
                                    </div>
                                </div>
                                <div class="item_change">
                                    <!-- 录入备注图标 -->
                                    <div class="remark_box" @click.stop="remarks(item)">
                                        <img src="../assets/images/cargo/remark_icon.png">
                                    </div>
                                </div>
                                <!-- 节点展示部分 -->
                                <div class="item item-3" :style="{cursor: item.currentNode || item.atdPol ||  item.stsp || item.gitm || item.lobd || item.ataPod || item.dsch || item.stcs || item.rcve || item.ctnrType ? 'pointer' : 'default'}" @click="trackDetail(item)">
                                    <ul class="stepitem">
                                        <li class="stepitemLi">
                                            <!-- 提空箱 -->
                                            <div class="dot_line dot_line1" v-if="item.stsp">
                                                <div class="dot dot_active"></div>
                                                <div class="line lin_active"></div>
                                                <div class="left_info">
                                                    <p class="title tes_title title_active">{{$t('nodeInfo.STSP')}}</p>
                                                    <p class="title tes_title title_active">{{item.stsp ? item.stsp : 0}}{{$t('instanceTranck.box')}}</p>
                                                </div>
                                            </div>

                                            <!-- 进场 -->
                                            <div class="dot_line dot_line1" v-if="item.gitm">
                                                <div class="dot dot_active"></div>
                                                <div class="line lin_active"></div>
                                                <div class="left_info">
                                                    <p class="title tes_title title_active">{{$t('nodeInfo.approach')}}</p>
                                                    <p class="title tes_title title_active">{{item.gitm ? item.gitm : 0}}{{$t('instanceTranck.box')}}</p>
                                                </div>
                                            </div>

                                            <!-- 装货 -->
                                            <div class="dot_line dot_line1" v-if="item.lobd">
                                                <div class="dot dot_active"></div>
                                                <div class="line lin_active"></div>
                                                <div class="left_info">
                                                    <p class="title tes_title title_active">{{$t('nodeInfo.Loading')}}</p>
                                                    <p class="title tes_title title_active">{{item.lobd ? item.lobd : 0}}{{$t('instanceTranck.box')}}</p>
                                                </div>
                                            </div>

                                            <!-- 离开 -->
                                            <!-- <div class="dot_line dot_line1" v-if="item.dlpt">
                                                <div class="dot dot_active"></div>
                                                <div class="line lin_active"></div>
                                                <div class="left_info">
                                                    <p class="title tes_title title_active">{{$t('nodeInfo.leave')}}</p>
                                                    <p class="title tes_title title_active">{{item.dlpt ? item.dlpt : 0}}{{$t('instanceTranck.box')}}</p>
                                                </div>
                                            </div> -->

                                            <!-- 起始港 -->
                                            <div class="dot_line" :class="item.stsp || item.gitm || item.lobd ? 'dot_line2' : 'dot_line1'">
                                                <div class="dot" :class="item.atdPol ||  item.stsp || item.gitm || item.lobd || item.ataPod || item.dsch || item.stcs || item.rcve ? 'dot_active' : item.etdPol ? 'dot_hui' : 'dot_hui'"></div>
                                                <div class="line" :class="item.ataPod || item.dsch || item.stcs || item.rcve ? 'lin_active' : ''"></div>
                                                <div class="left_info">
                                                    <p class="title tes_title" :class="item.atdPol ||  item.stsp || item.gitm || item.lobd || item.ataPod || item.dsch || item.stcs || item.rcve ? 'title_active' : ''" v-title="item.pol ? item.pol.toUpperCase() : ''">{{item.pol ? item.pol.toUpperCase() : '--'}}</p>
                                                    <p class="title tes_title" :class="item.atdPol ||  item.stsp || item.gitm || item.lobd || item.ataPod || item.dsch || item.stcs || item.rcve ? 'title_active' : ''" v-title="item.atdPol ? 'ATD:' + getProcessTime('mm-dd HH:MM', new Date(item.atdPol)) : item.etdPol ? 'ETD:' + getProcessTime('mm-dd HH:MM', new Date(item.etdPol)) : ''">{{item.atdPol ? 'ATD:' + getProcessTime('mm-dd HH:MM', new Date(item.atdPol)) : item.etdPol ? 'ETD:' + getProcessTime('mm-dd HH:MM', new Date(item.etdPol)) : ''}}</p>
                                                </div>
                                            </div>
                                            <!-- 目的港 -->
                                            <div class="dot_line" :class="item.stsp || item.gitm || item.lobd ? 'dot_line2' : 'dot_line1'">
                                                <div class="line" :class="item.ataPod || item.dsch || item.stcs || item.rcve ? 'lin_active' : ''"></div>
                                                <div class="dot" :class="item.ataPod || item.dsch || item.stcs || item.rcve ? 'dot_active' : item.etaPol ? 'dot_hui' : 'dot_hui'"></div>
                                                <div class="right_info">
                                                    <p class="title text_aligin tes_title" :class="item.ataPod || item.dsch || item.stcs || item.rcve ? 'title_active' : ''" v-title="item.pod ? item.pod.toUpperCase() : ''">{{item.pod ? item.pod.toUpperCase() : '--'}}</p>
                                                    <p class="title text_aligin tes_title" :class="item.ataPod || item.dsch || item.stcs || item.rcve ? 'title_active' : ''" v-title="item.ataPod ? 'ATA:' + getProcessTime('mm-dd HH:MM', new Date(item.ataPod)) : item.etaPod ? 'ETA:' + getProcessTime('mm-dd HH:MM', new Date(item.etaPod)) : ''">{{item.ataPod ? 'ATA:' + getProcessTime('mm-dd HH:MM', new Date(item.ataPod)) : item.etaPod ? 'ETA:' + getProcessTime('mm-dd HH:MM', new Date(item.etaPod)) : ''}}</p>
                                                </div>
                                            </div>

                                            <!-- 到达 -->
                                            <!-- <div class="dot_line dot_line1" v-if="item.bdar">
                                                <div class="line lin_active"></div>
                                                <div class="dot dot_active"></div>
                                                <div class="right_info">
                                                    <p class="title text_aligin tes_title title_active">{{$t('nodeInfo.arrive')}}</p>
                                                    <p class="title text_aligin tes_title title_active">{{item.bdar ? item.bdar : 0}}{{$t('instanceTranck.box')}}</p>
                                                </div>
                                            </div> -->

                                            <!-- 卸货 -->
                                            <div class="dot_line dot_line1" v-if="item.dsch">
                                                <div class="line lin_active"></div>
                                                <div class="dot dot_active"></div>
                                                <div class="right_info">
                                                    <p class="title text_aligin tes_title title_active">{{$t('nodeInfo.unload')}}</p>
                                                    <p class="title text_aligin tes_title title_active">{{item.dsch ? item.dsch : 0}}{{$t('instanceTranck.box')}}</p>
                                                </div>
                                            </div>
                                            
                                            <!-- 提货 -->
                                            <div class="dot_line dot_line1" v-if="item.stcs">
                                                <div class="line lin_active"></div>
                                                <div class="dot dot_active"></div>
                                                <div class="right_info">
                                                    <p class="title text_aligin tes_title title_active">{{$t('nodeInfo.STCS')}}</p>
                                                    <p class="title text_aligin tes_title title_active">{{item.stcs ? item.stcs : 0}}{{$t('instanceTranck.box')}}</p>
                                                </div>
                                            </div>
                                            <!-- 还空 -->
                                            <div class="dot_line dot_line1" v-if="item.rcve">
                                                <div class="line lin_active"></div>
                                                <div class="dot dot_active"></div>
                                                <div class="right_info">
                                                    <p class="title text_aligin title_active">{{$t('nodeInfo.RCVE')}}</p>
                                                    <p class="title text_aligin title_active">{{item.rcve ? item.rcve : 0}}{{$t('instanceTranck.box')}}</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <!-- 任务部分 -->
                                <div class="item item-4">
                                    <p @click.stop="goWebsite(item)" :class="item.website ? 'newWeb' : ''">{{$t('instanceTranck.website')}}</p>
                                </div>
                                <!-- 列表复选框部分 -->
                                <div class="item item-5">
                                    <el-checkbox v-model="item['checked']" @click.native.stop></el-checkbox>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <!-- 示例的数据 -->
                    <ul v-else-if="isShiyong">
                        <li v-for="item in shiliDate" :key="item.id">
                            <!-- 正常状态 -->
                            <div class="trackMainIformion-li">
                                <!-- 船，箱跟踪状态信息部分 -->
                                <div class="item item-1">
                                    <p class="first_p" v-title="item.referenceNo ? item.referenceNo : ''">
                                        <img class="wenjian_img" src="../assets/images/cargo/wenjian.png" style="margin-left: 2px;margin-right: 6px">
                                        {{item.isctnr ? $t('tracks.container') + ": " : $t('tracks.blbk') + ": "}}{{item.referenceNo ? item.referenceNo : '--'}}
                                    </p>
                                    <p v-title="item.vessel">
                                        <img class="chuan_hui" src="../assets/images/cargo/chuanhui.png">
                                        <span class="qianhui">{{$t('instanceTranck.vessel') + ": "}}{{item.vessel ? item.vessel : '--'}}</span>
                                    </p>
                                    <p>
                                        <img class="dot_img" src="../assets/images/cargo/item-19.png" v-if="item.isUp == 1 ">
                                        <img class="dot_img" src="../assets/images/cargo/item-20.png" v-else>
                                        <span class="spanright"
                                            :class="item.isUp == 1 ? 'red' : ''"
                                        >
                                            <span v-if="item.currentNode && $i18n.locale == 'zh-CN'" v-title="item.stateDescription ? item.stateDescription : ''">
                                                {{item.currentNode == '未知' ? item.webNodeCn ? item.webNodeCn + ": " : $t('instanceTranck.unknown') + ": " : $t('nodeInfo.' + item.currentNode) + ": "}}{{item.currentNodeTime ? getProcessTime('mm-dd HH:MM', new Date(item.currentNodeTime)) : '--'}}
                                            </span>
                                            <span v-else-if="item.currentNode && $i18n.locale == 'en-US'" v-title="item.stateDescription ? item.stateDescription : ''">
                                                {{item.currentNode == '未知' ? item.webNodeEn ? item.webNodeEn + ": " : $t('instanceTranck.unknown') + ": " : $t('nodeInfo.' + item.currentNode) + ": "}}{{item.currentNodeTime ? getProcessTime('mm-dd HH:MM', new Date(item.currentNodeTime)) : '--'}}
                                            </span>
                                            <span v-else style="margin-left:5px">--</span>
                                        </span>
                                    </p>
                                </div>
                                <!-- 船，箱跟踪详细信息部分 -->
                                <div class="item item-2">
                                    <div>
                                        <p v-title="item.remark ? item.remark : ''">
                                            {{$t('instanceTranck.Remarks') + ": " + (item.remark ? item.remark : '')}}
                                        </p>
                                        <p v-title="item.carrier ? item.carrier : ''">
                                            {{$t('instanceTranck.carrier') + ": " + (item.carrier ? item.carrier : '--')}}
                                        </p>
                                        <p v-title="item.ctnrType ? item.ctnrType : ''">
                                            {{$t('instanceTranck.boxModel') + ": " + (item.ctnrType ? item.ctnrType : '--')}}
                                        </p>
                                    </div>
                                </div>
                                <div class="item_change">
                                    <!-- 录入备注图标 -->
                                    <div class="remark_box" @click.stop="remarks(item)">
                                        <img src="../assets/images/cargo/remark_icon.png">
                                    </div>
                                </div>
                                <!-- 节点展示部分 -->
                                <div class="item item-3" :style="{cursor: item.currentNode || item.atdPol ||  item.stsp || item.gitm || item.lobd || item.ataPod || item.dsch || item.stcs || item.rcve || item.ctnrType ? 'pointer' : 'default'}" @click="trackDetail(item)">
                                    <ul class="stepitem">
                                        <li class="stepitemLi">
                                            <!-- 提空箱 -->
                                            <div class="dot_line dot_line1" v-if="item.stsp">
                                                <div class="dot dot_active"></div>
                                                <div class="line lin_active"></div>
                                                <div class="left_info">
                                                    <p class="title tes_title title_active">{{$t('nodeInfo.STSP')}}</p>
                                                    <p class="title tes_title title_active">{{item.stsp ? item.stsp : 0}}{{$t('instanceTranck.box')}}</p>
                                                </div>
                                            </div>

                                            <!-- 进场 -->
                                            <div class="dot_line dot_line1" v-if="item.gitm">
                                                <div class="dot dot_active"></div>
                                                <div class="line lin_active"></div>
                                                <div class="left_info">
                                                    <p class="title tes_title title_active">{{$t('nodeInfo.approach')}}</p>
                                                    <p class="title tes_title title_active">{{item.gitm ? item.gitm : 0}}{{$t('instanceTranck.box')}}</p>
                                                </div>
                                            </div>

                                            <!-- 装货 -->
                                            <div class="dot_line dot_line1" v-if="item.lobd">
                                                <div class="dot dot_active"></div>
                                                <div class="line lin_active"></div>
                                                <div class="left_info">
                                                    <p class="title tes_title title_active">{{$t('nodeInfo.Loading')}}</p>
                                                    <p class="title tes_title title_active">{{item.lobd ? item.lobd : 0}}{{$t('instanceTranck.box')}}</p>
                                                </div>
                                            </div>

                                            <!-- 离开 -->
                                            <!-- <div class="dot_line dot_line1" v-if="item.dlpt">
                                                <div class="dot dot_active"></div>
                                                <div class="line lin_active"></div>
                                                <div class="left_info">
                                                    <p class="title tes_title title_active">{{$t('nodeInfo.leave')}}</p>
                                                    <p class="title tes_title title_active">{{item.dlpt ? item.dlpt : 0}}{{$t('instanceTranck.box')}}</p>
                                                </div>
                                            </div> -->

                                            <!-- 起始港 -->
                                            <div class="dot_line" :class="item.stsp || item.gitm || item.lobd ? 'dot_line2' : 'dot_line1'">
                                                <div class="dot" :class="item.atdPol ||  item.stsp || item.gitm || item.lobd || item.ataPod || item.dsch || item.stcs || item.rcve ? 'dot_active' : item.etdPol ? 'dot_hui' : 'dot_hui'"></div>
                                                <div class="line" :class="item.ataPod || item.dsch || item.stcs || item.rcve ? 'lin_active' : ''"></div>
                                                <div class="left_info">
                                                    <p class="title tes_title" :class="item.atdPol ||  item.stsp || item.gitm || item.lobd || item.ataPod || item.dsch || item.stcs || item.rcve ? 'title_active' : ''" v-title="item.pol ? item.pol.toUpperCase() : ''">{{item.pol ? item.pol.toUpperCase() : '--'}}</p>
                                                    <p class="title tes_title" :class="item.atdPol ||  item.stsp || item.gitm || item.lobd || item.ataPod || item.dsch || item.stcs || item.rcve ? 'title_active' : ''" v-title="item.atdPol ? 'ATD:' + getProcessTime('mm-dd HH:MM', new Date(item.atdPol)) : item.etdPol ? 'ETD:' + getProcessTime('mm-dd HH:MM', new Date(item.etdPol)) : ''">{{item.atdPol ? 'ATD:' + getProcessTime('mm-dd HH:MM', new Date(item.atdPol)) : item.etdPol ? 'ETD:' + getProcessTime('mm-dd HH:MM', new Date(item.etdPol)) : ''}}</p>
                                                </div>
                                            </div>
                                            <!-- 目的港 -->
                                            <div class="dot_line" :class="item.stsp || item.gitm || item.lobd ? 'dot_line2' : 'dot_line1'">
                                                <div class="line" :class="item.ataPod || item.dsch || item.stcs || item.rcve ? 'lin_active' : ''"></div>
                                                <div class="dot" :class="item.ataPod || item.dsch || item.stcs || item.rcve ? 'dot_active' : item.etaPol ? 'dot_hui' : 'dot_hui'"></div>
                                                <div class="right_info">
                                                    <p class="title text_aligin tes_title" :class="item.ataPod || item.dsch || item.stcs || item.rcve ? 'title_active' : ''" v-title="item.pod ? item.pod.toUpperCase() : ''">{{item.pod ? item.pod.toUpperCase() : '--'}}</p>
                                                    <p class="title text_aligin tes_title" :class="item.ataPod || item.dsch || item.stcs || item.rcve ? 'title_active' : ''" v-title="item.ataPod ? 'ATA:' + getProcessTime('mm-dd HH:MM', new Date(item.ataPod)) : item.etaPod ? 'ETA:' + getProcessTime('mm-dd HH:MM', new Date(item.etaPod)) : ''">{{item.ataPod ? 'ATA:' + getProcessTime('mm-dd HH:MM', new Date(item.ataPod)) : item.etaPod ? 'ETA:' + getProcessTime('mm-dd HH:MM', new Date(item.etaPod)) : ''}}</p>
                                                </div>
                                            </div>

                                            <!-- 到达 -->
                                            <!-- <div class="dot_line dot_line1" v-if="item.bdar">
                                                <div class="line lin_active"></div>
                                                <div class="dot dot_active"></div>
                                                <div class="right_info">
                                                    <p class="title text_aligin tes_title title_active">{{$t('nodeInfo.arrive')}}</p>
                                                    <p class="title text_aligin tes_title title_active">{{item.bdar ? item.bdar : 0}}{{$t('instanceTranck.box')}}</p>
                                                </div>
                                            </div> -->

                                            <!-- 卸货 -->
                                            <div class="dot_line dot_line1" v-if="item.dsch">
                                                <div class="line lin_active"></div>
                                                <div class="dot dot_active"></div>
                                                <div class="right_info">
                                                    <p class="title text_aligin tes_title title_active">{{$t('nodeInfo.unload')}}</p>
                                                    <p class="title text_aligin tes_title title_active">{{item.dsch ? item.dsch : 0}}{{$t('instanceTranck.box')}}</p>
                                                </div>
                                            </div>
                                            
                                            <!-- 提货 -->
                                            <div class="dot_line dot_line1" v-if="item.stcs">
                                                <div class="line lin_active"></div>
                                                <div class="dot dot_active"></div>
                                                <div class="right_info">
                                                    <p class="title text_aligin tes_title title_active">{{$t('nodeInfo.STCS')}}</p>
                                                    <p class="title text_aligin tes_title title_active">{{item.stcs ? item.stcs : 0}}{{$t('instanceTranck.box')}}</p>
                                                </div>
                                            </div>
                                            <!-- 还空 -->
                                            <div class="dot_line dot_line1" v-if="item.rcve">
                                                <div class="line lin_active"></div>
                                                <div class="dot dot_active"></div>
                                                <div class="right_info">
                                                    <p class="title text_aligin title_active">{{$t('nodeInfo.RCVE')}}</p>
                                                    <p class="title text_aligin title_active">{{item.rcve ? item.rcve : 0}}{{$t('instanceTranck.box')}}</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <!-- 任务部分 -->
                                <div class="item item-4">
                                    <p @click.stop="goWebsite(item)" :class="item.website ? 'newWeb' : ''">{{$t('instanceTranck.website')}}</p>
                                </div>
                                <!-- 列表复选框部分 -->
                                <div class="item item-5">
                                    <el-checkbox v-model="item['checked']" @click.native.stop></el-checkbox>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div class="flexWrpp" v-else>
                        <div class="instafoot">
                            <div class="insspan">
                                <p class="span">{{ $t('instanceTranck.enterNumber') }}</p>
                            </div>
                            <img src="../assets/images/cargo/container.png" class="image">
                        </div>
                    </div>
                </div>
                <div class="jiaDao" v-if="isLoad && trackDate.length > 0">
                    <div class="jiaZai" v-if='trackDate.length !== total'>
                        <i class="el-icon-loading iconLoading"></i>
                        数据加载中 . . .
                    </div>
                    <div class="jiaZai" v-else>
                        — 已经到底啦 —
                    </div>
                </div>
            </div>
        </div>
        <!-- 提醒设置 -->
        <RemindSet ref="RemindSet"></RemindSet>
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
                <div class="informa" v-show="dialogText == '批量删除'" slot="footer">
                    <img src='../assets/images/cargo/delec.svg' class="image" alt="">
                    <p>{{ $t('tracks.deletion') }}</p>
                </div>
                <div class="textarea" v-show="dialogText == '录入备注'">
                    <p>{{ $t('tracks.enterNote') }}</p>
                    <el-input :placeholder="$t('tracks.enterContent')" v-model="textarea" maxlength="30" show-word-limit></el-input>
                </div>
                <div class="butAll">
                    <span class="btnBorder" @click="dialogPopup=false">{{ $t('tracks.cancel') }}</span>
                    <span class="greenBorder"  @click="comfirmCheck">{{ $t('tracks.confirm') }}</span>
                </div>
            </div>
        </el-dialog>
        <!-- 批量上传模态框部分 -->
        <el-dialog
            class="upload_dialog"
            :visible.sync="uploadDialogVisible"
            :close-on-click-modal="false"
            :close-on-press-escape="false"
            center
        >
            <div class="dialog">
                <Loading v-if="uploadLoading"></Loading>
                <div class="title">
                    <div class="titleBox">
                        {{ $t('instanceTranck.BulkUpload')}}{{ $t('instanceTranck.maximum') }}
                        <span style="font-weight: normal;color: #007ce3;font-size: 12px;margin-left:5px">{{ $t('instanceTranck.zhuyi') }}</span>
                    </div>
                </div>
                <!-- 批量上传--表格部分 -->
                <el-table
                    :data="uploadLists"
                    style="width: 100%;"
                    :border="true"
                    :header-cell-style="{background:'#3bafda',color:'#ffffff',fontSize:'12px'}"
                    :row-class-name="tabRowClassName"
                    tooltip-effect="dark"
                    ref="table"
                    height="450"
                    header-row-class-name="columnPadding"
                >
                    <el-table-column  prop="userName" :label="$t('tracks.no')" align="left" min-width="30" :resizable="false">
                        <template slot-scope="scope">
                            {{scope.$index +1}}
                        </template>
                    </el-table-column>
                    <el-table-column prop="billNumber" :label="$t('tracks.blbk')" align="left" min-width="60" :resizable="false">
                        <template slot-scope="scope">
                            <el-input
                                v-model="scope.row.billNumber"
                                @focus="cursorLocation(scope)"
                                placeholder=""
                                @input="inputTrack($event,scope.$index)"
                            >
                            </el-input>
                        </template>
                    </el-table-column>
                    <el-table-column prop="containerNumber" :label="$t('tracks.container')" align="left" min-width="60" :resizable="false">
                        <template slot-scope="scope">
                            <el-input
                                v-model="scope.row.containerNumber"
                                @focus="cursorLocation(scope)"
                                placeholder=""
                                @input="inputContainer($event,scope.$index)"
                            >
                            </el-input>
                        </template>
                    </el-table-column>
                    <el-table-column prop="carrier" :label="$t('tracks.carriercd')" align="left" min-width="80" :resizable="false">
                        <template slot-scope="scope">
                        <el-select
                            v-model="scope.row.carrier" 
                            filterable
                            remote
                            clearable
                            popper-class="carri_select"
                            placeholder=""
                            :remote-method="remoteCarrier"
                            @focus="focusCarrier(scope)"
                            :ref="'carrerSelect' + scope.$index"
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
                            <!-- <el-input 
                                v-model="scope.row.carrier" 
                                @focus="cursorLocation(scope)"
                                @input="scope.row.carrier = scope.row.carrier.toUpperCase()"
                            >
                            </el-input>  -->
                        </template>          
                    </el-table-column>
                    <el-table-column prop="remark" :label="$t('tracks.remark')" align="left" min-width="70" :resizable="false">
                        <template slot-scope="scope">
                            <el-input 
                                v-model="scope.row.remark" 
                                style="width: 93%"
                                @focus="cursorLocation(scope)"
                                :maxlength="30"
                            >
                            </el-input>
                            <el-tooltip v-if="scope.row.errorMsg" :content="scope.row.errorMsg" placement="bottom" popper-class="teshu_tooip">
                                <img class="error_icon" src="../assets/images/error_icon.png">
                            </el-tooltip>
                        </template>  
                    </el-table-column>
                    <el-table-column :label="$t('tracks.operation')" align="left" min-width="40" :resizable="false">
                        <template slot-scope="scope">
                            <span v-if="
                                scope.row.billNumber.replace(/\s/g, '') != '' ||
                                scope.row.containerNumber.replace(/\s/g, '') != '' ||
                                scope.row.carrier.replace(/\s/g, '') != '' ||
                                scope.row.remark.replace(/\s/g, '') != ''" 
                            class="deleteBtn" @click="deleteRow(scope.$index)"><i class="el-icon-circle-close"></i></span>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="handleClickUploadCancel">{{ $t('instanceTranck.Cancel') }}</el-button>
                <el-button type="primary" @click="clickUpload">{{ $t('instanceTranck.Submit') }}</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
// socket功能
import SockJS from "sockjs-client"
import Stomp from "stompjs"
import Loading from "@components/loading"
import jexcelStyle from "jexcel/dist/jexcel.css";
import jexcel from "jexcel"
import RemindSet from '@components/RemindSet'
export default {
    data() {
        return {
            loading: false, //loading
            genzong:true,
            //批量上传
            uploadLoading: false,//批量上传loading
            uploadDialogVisible: false, //批量上传模态框
            uploadLists: [], //批量上传表格
            nowFocus: '', //批量上传的当前列
            nowRowIndex: 0, //批量上传的当前行
            carrList: [], //船公司

            //全选
            checkAllAdd: false,

            //备注 删除
            dialogPopup: false, //弹出框
            dialogText: '',//当前是备注还是删除
            textarea: '', //用户备注的内容
            checkGroup:[], //用户选择得列表

            //分页
            isFinished: true, //滚动条是否获取数据
            total: 0, //总条数
            pageNum: 1, //页数
            pageSize: 50, //条数
            count: 50, //每次增加多少条
            isLoad: false, //是否加载到底

            //搜索运单信息
            searchStr:'',
            isSearch: false,

            //未登录搜索条件
            searchInfor: '',

            //排序
            sortPa: false,
            orderZd: 'searchTime', //正序倒序
            orderByIndex: 0, //当前点击第几个
            orderBy: '', //排序字段传参

            //用户登录
            userId:
                this.getCookie("authId") !== null && this.getCookie("authId") !== "" && this.getCookie("authId") !== undefined
                ? this.getCookie("authId")
                : 0,
            
            // 列表数据
            trackDate: [], //获取的列表数据
            shiliDate: [ //是要教程的数据
                {
                    ataPod: null,
                    atdPol: "2020-11-08 05:53:00",
                    bdar: 0,
                    billNumber: "205950311",
                    carrier: "MSK",
                    containerNumber: null,
                    createTime: "2021-01-15 11:11:28",
                    ctnrType: "1*40Dry",
                    currentNode: "STCS",
                    currentNodeTime: "2020-12-24 14:01:00",
                    delFlag: null,
                    dlpt: 0,
                    dsch: 1,
                    etaPod: null,
                    etdPol: null,
                    gitm: 1,
                    id: 50,
                    ieId: "E",
                    isUp: 1,
                    isctnr: 0,
                    lobd: 1,
                    pod: "Iquique",
                    podCode: null,
                    pol: "QINGDAO",
                    polCd: "CNTAO",
                    portCode: null,
                    portEn: null,
                    rcve: 0,
                    referenceNo: "205950311",
                    remark: "提单号",
                    resultStatus: 1,
                    stcs: 1,
                    stsp: 1,
                    trackId: 18,
                    trackRecordId: null,
                    updateTime: "2021-01-15 12:00:30",
                    userId: 125,
                    vessel: "",
                    website: "https://www.maersk.com.cn/",
                },
            ],
            //是否显示使用教程
            isShiyong: false,
        }
    },
    methods:{
        // genzongBg(){
        //     this.genzong = false
        // },
        //跟踪搜索栏
        getTrackData(params){
            var that = this
            that.loading = true
            var fd = {
                containerNumber: params.containerNumber,
                billNumber: params.billNumber,
                carrier: params.carrier,
                userId: that.userId,
            }
            if(that.userId){
                that.searchInfor = ''
            }else{
                that.searchInfor = params.billNumber ? params.billNumber : params.containerNumber ? params.containerNumber : ''
            }

            this.$Axios.post(that.GLOBAL.url + "trace/trackShip", fd,{
                headers: {
                    Authorization: this.getToken()
            },
            }).then(res => {
                if (res.data.status == 1) {

                    //删除掉搜索栏内容
                    that.$parent.upadHeanH()

                    that.getTrackList()
                }else if(res.data.status == 9){
                    that.loading = false
                    that.sampleData(1, {
                        name: 'Track',
                        params: {
                            containerNumber: params.containerNumber,
                            billNumber: params.billNumber,
                            carrier: params.carrier,
                        }
                    })
                }
            }).catch((err)=>{})
        },
        //获取跟踪列表数据
        getTrackList(value){
            var that = this
            that.loading = true
            if(value == '1'){ //说明分页
                that.loading = false
            }
            var searchStr = that.searchStr.replace(/^\s+|\s+$/g, '')//去除搜索关键字的首尾空格
            if(!this.userId){
                if(this.$route.params && this.$route.params.inForm && this.$route.params.inForm.referenceno){
                    this.searchInfor = this.$route.params.inForm.referenceno
                }
                searchStr = this.searchInfor
            }
            var fd = {
                searchStr: searchStr,
                pageSize: that.pageSize,
                pageNum: that.pageNum,
                orderBy: that.orderBy,
                userId: that.userId,
            }
            this.$Axios.post(this.GLOBAL.url + "trace/getShipRecordList",fd,{
                headers: {
                    Authorization: this.getToken(),
            },
            }).then(res => {
                that.loading = false
                if (res.data.status == 1) {
                    that.isLoad = false

                    var newArList = []
                    if(value == '1'){ //说明分页
                        newArList = JSON.parse(JSON.stringify(that.trackDate))
                    }

                    that.trackDate = res.data.content
                    that.total = res.data.total

                    //如果是分页
                    if(value == '1'){ //说明分页
                        that.isFinished = true
                        for (let i = 0; i < that.trackDate.length; i++) {
                            for (let j = 0; j < newArList.length; j++) {
                                //id 相同  referenceNo 相同说明是同一个单子
                                if(newArList[j]['checked'] && that.trackDate[i].id == newArList[j].id && that.trackDate[i].referenceNo == newArList[j].referenceNo){
                                    that.trackDate.splice(i,1,newArList[j])
                                }
                            }
                        }
                    }else{
                        that.checkAllAdd = true
                        that.checkAll()
                    }

                    if(that.$route.params && that.$route.params.inForm && that.$route.params.inForm.scrollPos){
                        that.$nextTick(()=>{
                            window.scroll(0,that.$route.params.inForm.scrollPos)
                        })
                    }

                    that.getLarDes()
                }
            }).catch((err)=>{
                that.loading = false
            })
        },

        getLarDes(){
            var that = this
            for (let i = 0; i < that.trackDate.length; i++) {
                if(that.trackDate[i].currentNode == '未知' && that.trackDate[i].stateDescription && that.trackDate[i].carrier){
                    that.getDesc(that.trackDate[i],i)
                }
            }
        },
        getDesc(item,index){
            var that = this
            that.$Axios.get(that.GLOBAL.url + `trace/detail/nodeTranslate?carrier=${item.carrier}&desc=${item.stateDescription}`,{
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
                that.trackDate.splice(index,1,item)
            })
        },

        //排序
        changeSort(column, index,isX){
            if(isX){
                //代表首次进页面排 和 详情页回来的时候排
            }else{
                //当前点击了
                if(column){
                    //如果当前点击的index跟上一回点击的index不一样 则this.sortPa 格式化
                    if(this.orderByIndex !== index){
                        this.sortPa = false
                        this.orderByIndex = index
                    }
                    this.sortPa = !this.sortPa
                }
            }
            //true 为正序 false 倒序
            if(column){
                if (this.sortPa) {
                    $(".icon-xjiffangxiangsanjiaozheng3").removeClass("sort-active");
                    $(".icon-sj-left").removeClass("sort-active");
                    setTimeout(()=>{
                        $(".icon-sj-left")
                            .eq(index)
                            .addClass("sort-active");
                    },1)
                } else{
                    $(".icon-xjiffangxiangsanjiaozheng3").removeClass("sort-active");
                    $(".icon-sj-left").removeClass("sort-active");
                    setTimeout(()=>{
                        $(".icon-xjiffangxiangsanjiaozheng3")
                            .eq(index)
                            .addClass("sort-active");
                    },1)
                }
            }

            var sortPa = this.sortPa ? 'ASC' : 'DESC'
            this.orderZd = column
            if(this.orderZd){
                this.orderBy = this.orderZd + ' ' + sortPa
            }else{
                this.orderBy = ''
            }
            if(this.userId){
                this.getTrackList()
            }
        },
        //focus
        focusSearch(){
            this.isSearch = true
        },
        //回车搜索运单信息
        inputSearch() {
            if(this.userId){
                this.getTrackList()
                if(this.searchStr == ''){
                    this.isSearch = false
                }
            }
        },

        //WebSocket 获取用户返回数据
        connect(){
            var that = this
            var socket = new WebSocket(that.GLOBAL.socketUrl + that.userId)
            socket.onopen = function() {
                console.log("socket连接")
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
                    // 如果是查询记录
                    if(data.id){
                        for (let i = 0; i < that.trackDate.length; i++) {
                            if(that.trackDate[i].id == data.id){
                                that.trackDate.splice(i,1,data)
                            }
                        }
                    }

                }, 300);
            };
            socket.onclose = function() {
                console.log("socket关闭");
                setTimeout(() => {
                    that.connect();
                }, 200);
            }; 
        },
        //点击提醒设置
        remind(){
            if(this.userId){
                if(this.$refs.RemindSet){
                    this.$refs.RemindSet.reminderSettings()
                }
            }else{
                this.sampleData(1)
            }
        },
        //批量上传船公司搜索
        focusCarrier(scope){
            this.nowFocus = scope.column.property
            this.nowRowIndex = scope.$index
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
        //批量上传船公司搜索
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
        //批量上传输入提单号获取对应得船公司
        inputTrack(value,index) {
            var that = this
            that.uploadLists[index].billNumber = value.replace(/[^a-zA-Z0-9]/g,'') //只能输入数字跟字母的组合
            if(value){
                this.$Axios.get(this.GLOBAL.url + "trace/fore/getShipping?nameCn=&ref=" + value,{
                    headers: {
                        Authorization: this.getToken()
                },
                }).then(res => {
                    if(res.data.status == 1){
                        if(res.data.content.length > 0){
                            if(res.data.content[0]){
                                //提单号是9位数字
                                var reg = /^[0-9]*[1-9][0-9]*$/
                                if(reg.test(value) && value.length == 9){
                                    that.uploadLists[index].carrier = ''
                                    // that.isJiuNCarr = true
                                }else{
                                    // that.isJiuNCarr = false
                                    that.uploadLists[index].carrier = res.data.content[0].code ? res.data.content[0].code : ''
                                }
                            }
                        }
                    }
                })
            }else{
                that.uploadLists[index].carrier = ''
            }
        },
        //批量上传输入箱号获取船公司
        inputContainer(val,index){
            var that = this
            that.uploadLists[index].containerNumber = val.replace(/[^a-zA-Z0-9]/g,'')
            if(val && !that.uploadLists[index].billNumber){ //如果没有输入提单号 则 根据箱号匹配船公司
                that.$Axios.get(that.GLOBAL.url + "trace/fore/getContainerShipping?ref=" + val,{
                    headers: {
                        Authorization: that.getToken()
                },
                }).then(res => {
                    if(res.data.status == 1){
                        if(res.data.content.length > 0){
                            if(res.data.content[0]){
                                that.uploadLists[index].carrier = res.data.content[0].code ? res.data.content[0].code : ''
                            }
                        }
                    }
                })
            }else{
                if(!that.uploadLists[index].billNumber){ //没输入值 而且还没有填箱号 则
                    that.uploadLists[index].carrier = ''
                }
            }
        },
        //批量上传光标所在地
        cursorLocation(scope){
            this.nowFocus = scope.column.property
            this.nowRowIndex = scope.$index
        },
        //批量上传单行删除
        deleteRow(index){
            this.uploadLists.splice(index, 1)
            // 补全批量上传表格
            var uploadItem = {
                billNumber: '',
                containerNumber: '',
                carrier: '',
                remark: ''
            }
            this.uploadLists.push(JSON.parse(JSON.stringify(uploadItem)))
        },
        //批量上传
        handleClickShowUploadDialog(){
            this.uploadDialogVisible = true
            this.uploadLists = []
            // 补全批量上传表格
            var uploadItem = {
                billNumber: '',
                containerNumber: '',
                carrier: '',
                remark: ''            
            }
            for(let i=0; i<50; i++){
                this.uploadLists.push(JSON.parse(JSON.stringify(uploadItem)))
            }

            setTimeout(()=>{
                var that = this
                that.$refs.table.bodyWrapper.addEventListener('scroll', () => {
                    if(that.$refs['carrerSelect' + this.nowRowIndex]){
                        that.$refs['carrerSelect' + this.nowRowIndex].handleClose()
                    }
                })
            },500)
        },
        //获取用户粘贴进来的数据
        copyData(e){
            if (e.clipboardData || e.originalEvent) {
                var clipboardData = (e.clipboardData || window.clipboardData)
                var originData = clipboardData.getData('text')
                var data = originData.split('\n')
                for(let i=0; i<data.length; i++){
                    if (!data[i]) {
                        continue ;
                    }
                    var bugdetData = data[i].split('\t')
                    if(this.nowRowIndex+i<50){
                        if(this.nowFocus == 'billNumber'){
                            this.uploadLists[this.nowRowIndex+i].billNumber = bugdetData[0] != undefined?bugdetData[0].replace(/\s+/g,'') != ''?bugdetData[0]:this.uploadLists[this.nowRowIndex+i].billNumber:this.uploadLists[this.nowRowIndex+i].billNumber
                            this.uploadLists[this.nowRowIndex+i].containerNumber = bugdetData[1] != undefined?bugdetData[1].replace(/\s+/g,'') != ''?bugdetData[1]:this.uploadLists[this.nowRowIndex+i].containerNumber:this.uploadLists[this.nowRowIndex+i].containerNumber
                            this.uploadLists[this.nowRowIndex+i].carrier = bugdetData[2] != undefined?bugdetData[2].replace(/\s+/g,'') != ''?bugdetData[2]:this.uploadLists[this.nowRowIndex+i].carrier:this.uploadLists[this.nowRowIndex+i].carrier
                            this.uploadLists[this.nowRowIndex+i].remark = bugdetData[3] != undefined?bugdetData[3].replace(/\s+/g,'') != ''?bugdetData[3].substring(0,30):this.uploadLists[this.nowRowIndex+i].remark:this.uploadLists[this.nowRowIndex+i].remark
                        }else if(this.nowFocus == 'containerNumber'){
                            this.uploadLists[this.nowRowIndex+i].containerNumber = bugdetData[0] != undefined?bugdetData[0].replace(/\s+/g,'') != ''?bugdetData[0]:this.uploadLists[this.nowRowIndex+i].containerNumber:this.uploadLists[this.nowRowIndex+i].containerNumber
                            this.uploadLists[this.nowRowIndex+i].carrier = bugdetData[1] != undefined?bugdetData[1].replace(/\s+/g,'') != ''?bugdetData[1]:this.uploadLists[this.nowRowIndex+i].carrier:this.uploadLists[this.nowRowIndex+i].carrier
                            this.uploadLists[this.nowRowIndex+i].remark = bugdetData[2] != undefined?bugdetData[2].replace(/\s+/g,'') != ''?bugdetData[2].substring(0,30):this.uploadLists[this.nowRowIndex+i].remark:this.uploadLists[this.nowRowIndex+i].remark
                        }else if(this.nowFocus == 'carrier'){
                            this.uploadLists[this.nowRowIndex+i].carrier = bugdetData[0] != undefined?bugdetData[0].replace(/\s+/g,'') != ''?bugdetData[0]:this.uploadLists[this.nowRowIndex+i].carrier:this.uploadLists[this.nowRowIndex+i].carrier
                            this.uploadLists[this.nowRowIndex+i].remark = bugdetData[1] != undefined?bugdetData[1].replace(/\s+/g,'') != ''?bugdetData[1].substring(0,30):this.uploadLists[this.nowRowIndex+i].remark:this.uploadLists[this.nowRowIndex+i].remark
                        }else if(this.nowFocus == 'remark'){
                            this.uploadLists[this.nowRowIndex+i].remark = bugdetData[0] != undefined?bugdetData[0].replace(/\s+/g,'') != ''?bugdetData[0].substring(0,30):this.uploadLists[this.nowRowIndex+i].remark:this.uploadLists[this.nowRowIndex+i].remark
                        }
                    }
                }

                e.preventDefault()
     
                //如果 复制粘贴了 单号或者箱号 则走接口 否则不走
                if(this.nowFocus == 'billNumber' || this.nowFocus == 'containerNumber'){
                    this.$Axios.post(this.GLOBAL.url + "trace/matchingCarrier",this.uploadLists,{
                        headers: {
                            Authorization: this.getToken()
                    },
                    }).then(res => {
                        if(res.data.status == 1){
                            var newUpLoadList = []
                            for (let q = 0; q < res.data.content.length; q++) {
                                newUpLoadList.push({
                                    billNumber: res.data.content[q].billNumber ? res.data.content[q].billNumber.toUpperCase() : '',
                                    containerNumber: res.data.content[q].containerNumber ? res.data.content[q].containerNumber.toUpperCase() : '',
                                    carrier: res.data.content[q].carrier ? res.data.content[q].carrier : '',
                                    remark: res.data.content[q].remark ? res.data.content[q].remark : '',
                                })
                            }
                            this.uploadLists = newUpLoadList
                        }
                    })
                }
            }
        },
        //批量上传弹窗--取消按钮
        handleClickUploadCancel(){
            this.uploadDialogVisible = false
        },
        //批量上传弹窗--上传按钮
        clickUpload(){
            //第一次筛选数据 看用户是否填写
            let query = this.uploadLists.filter((item,index) => {
                if(item.billNumber.replace(/\s+/g,'') != '' || item.containerNumber.replace(/\s+/g,'') != '' || item.carrier.replace(/\s+/g,'') != '' || item.remark.replace(/\s+/g,'') != ''){
                    return true
                }
            })
            //判断用户是否未填一条数据
            if(query.length == 0){
                this.uploadLists = this.uploadLists.map(item => {
                    item.errorMsg = ''
                    return item
                })
                this.$message({
                    message: this.$t('instanceTranck.noData'),
                    type: "warning",
                    customClass: "base-message-zindex"
                });
                return false
            }

            //过滤用户处理过的数据
            this.uploadLists = this.uploadLists.map((item,index) => {
                if(!item.billNumber.replace(/\s+/g,"") && !item.containerNumber.replace(/\s+/g,"") && !item.carrier.replace(/\s+/g,"") && !item.remark.replace(/\s+/g,"")){
                    item['strtrue'] = false
                }else{
                    item['strtrue'] = true
                }
                return item
            })
            //定义是否可以走接口
            var isgoDown = false
            var chongBill = []
            var chongCon = []
            for (let i = 0; i < this.uploadLists.length; i++) {
                var updown = this.uploadLists[i]
                updown.errorMsg = ''
                var billNumberList = [] //提单号重复
                var containerList = [] //箱号重复
                if(updown.strtrue){
                    //船公司未填
                    if(updown.carrier.replace(/\s+/g,'') == ''){
                        updown.errorMsg = '船公司不可为空'
                        isgoDown= true
                    }else if(updown.billNumber.replace(/\s+/g,'') == '' && updown.containerNumber.replace(/\s+/g,'') == ''){
                        updown.errorMsg = '单号和箱号必填其一'
                        isgoDown= true
                    }else if(updown.billNumber.replace(/\s+/g,'')){ //如果填了单号
                        var reg = /^[A-Za-z]{3}U\d{7}$/
                        if(reg.test(updown.billNumber.replace(/\s+/g,''))){ //则看一下单号是否是箱号
                            updown.errorMsg = this.$t('messages.boxNumber')
                            isgoDown= true
                        }
                        if(updown.billNumber.replace(/\s+/g,'').length <= 4){ // 看一下是否规范
                            updown.errorMsg = this.$t('messages.ladingIrr')
                            isgoDown= true
                        }
                    }else if(updown.containerNumber.replace(/\s+/g,'')){ //说明只填了箱号
                        if(updown.containerNumber.replace(/\s+/g,'').length !== 11){
                            updown.errorMsg = this.$t('messages.incorrect')
                            isgoDown= true
                        }
                        //只填了箱号 并且是 SINOKOR  JINJIANG  SINO  HAL 这四家船公司
                        if(updown.carrier.replace(/\s+/g,'') == 'SINOKOR' || updown.carrier.replace(/\s+/g,'') == 'JINJIANG' || updown.carrier.replace(/\s+/g,'') == 'SINO' || updown.carrier.replace(/\s+/g,'') == 'HAL'){
                            updown.errorMsg = this.$t('messages.conOnly')
                            isgoDown= true
                        }
                    }
                    for (let p = 0; p < this.uploadLists.length; p++) {
                        //船公司相同
                        if(updown.carrier.replace(/\s+/g,'') == this.uploadLists[p].carrier.replace(/\s+/g,'') && this.uploadLists[p].carrier !== ''){
                            // 如果都有单号则比较单号是否相同
                            if(updown.billNumber.replace(/\s+/g,'') && this.uploadLists[p].billNumber.replace(/\s+/g,'')  && updown.billNumber.replace(/\s+/g,'') == this.uploadLists[p].billNumber.replace(/\s+/g,'')){
                                billNumberList.push(p+1)
                            }else if(!updown.billNumber.replace(/\s+/g,'') && updown.containerNumber.replace(/\s+/g,'')){
                                //如果没有单号 只有箱号 则在只填了箱号得条件里看箱号是否相同
                                if(!this.uploadLists[p].billNumber && this.uploadLists[p].containerNumber.replace(/\s+/g,'')){
                                    if(updown.containerNumber.replace(/\s+/g,'') == this.uploadLists[p].containerNumber.replace(/\s+/g,'')){
                                        containerList.push(p+1)
                                    }
                                }
                            }
                        }
                    }
                }else{
                    updown.errorMsg = ''
                }

                //单号
                if(billNumberList.length > 1){
                    chongBill = chongBill.concat(billNumberList.filter(item => item))
                }

                //箱号
                if(containerList.length > 1){
                    chongCon = chongCon.concat(containerList.filter(item => item))
                }
            }
            if(chongBill.length > 0){
                chongBill = Array.from(new Set(chongBill))
                var stri = ''
                chongBill.filter((item,index) => {
                    var s = (index !== 0 ? '、' : '') + item
                    stri = stri + s
                })
                this.$message({
                    message: '行号:' + stri + '单号重复',
                    type: "warning",
                    customClass: "base-message-zindex"
                });
                return false                
            }
            if(chongCon.length > 0){
                chongCon = Array.from(new Set(chongCon))
                var stri = ''
                chongCon.filter((item,index) => {
                    var s = (index !== 0 ? '、' : '') + item
                    stri = stri + s
                })
                this.$message({
                    message: '行号:' + stri + '箱号重复',
                    type: "warning",
                    customClass: "base-message-zindex"
                });
                return false                
            }
            //说明非空验证未通过
            if(isgoDown){
                return
            }
            var that = this
            this.uploadLoading = true
            var voList = query
            this.$Axios.post(that.GLOBAL.url + `trace/shipBatchUpload?userId=${that.userId}`,voList,{
                headers: {
                    Authorization: this.getToken(),
                    "Content-Type": "application/json"
            },
            }).then(res => {
                if (res.data.status == 1) {
                    that.uploadDialogVisible = false
                    that.uploadLoading = false
                    that.uploadLists = []
                    that.sortPa = false
                    that.orderZd= 'searchTime'
                    that.orderByIndex= 0
                    that.orderBy= ''
                    that.getTrackList()
                }
            }).catch((err)=>{})
        },
        //批量上传表格行样式
        tabRowClassName({row, rowIndex}){
            if(row.errorMsg){
                return 'errorBorderRed'
            }
        },
        //用户点击全选
        checkAll() {
            this.checkAllAdd = !this.checkAllAdd
            var trackDate = JSON.parse(JSON.stringify(this.trackDate))
            if(this.checkAllAdd){ //全选
                for (let i = 0; i < trackDate.length; i++) {
                    trackDate[i]['checked'] = true
                }
            }else{ //取消全选
                for (let i = 0; i < trackDate.length; i++) {
                    trackDate[i]['checked'] = false
                }
            }
            this.trackDate = trackDate
        },
        //使用教程按钮
        useCourse(){
            this.isShiyong = true
            this.$parent.handleClickUseCourse(1)
        },
        //点击备注
        remarks(item) {
            if(this.userId){
                this.checkGroup = []
                this.checkGroup.push(item.id)
                this.textarea = item.remark
                this.dialogText = '录入备注'
                this.dialogPopup = true
            }else{
                this.sampleData(1)
            }
        },
        //批量删除
        delectAll() {
            this.checkGroup = []
            for (let i = 0; i < this.trackDate.length; i++) {
                if(this.trackDate[i].checked) { //遍历数组找出选择的
                    this.checkGroup.push(this.trackDate[i].id)
                }
            }
            if(this.checkGroup.length < 1) { //如果没有选择 则提示最少选择一个
                this.$alert(this.$t('messages.leastDelete'), this.$t('messages.tips'),{
                    confirmButtonText: this.$t('messages.determine'),
                    cancelButtonText: this.$t('messages.cancel'),
                    confirmButtonClass:'confirmButtonClass',
                    type: "warning",
                    center: true
                }).then(() => {}).catch(() => {})
            }else{
                this.dialogText = '批量删除'
                this.dialogPopup = true
            }
        },
        //点击确认
        comfirmCheck() {
            var that = this
            if(that.dialogText == '批量删除') {
                this.$Axios.post(that.GLOBAL.url + "trace/delShipRecord",that.checkGroup,{
                    headers: {
                        Authorization: this.getToken()
                },
                }).then(res => {
                    if (res.data.status == 1) {
                        that.dialogPopup = false
                        that.getTrackList()
                        that.$message({
                          message: that.$t('messages.deleteSuccess'),
                          type: "success",
                          customClass:'base-message-zindex'
                        })
                    }
                })
            }else if(that.dialogText == '录入备注') {
                var fd = {
                    userId: that.userId,
                    id: that.checkGroup[0],
                    remark: that.textarea,
                }
                this.$Axios.post(that.GLOBAL.url + "trace/updateShipRemark",fd,{
                    headers: {
                        Authorization: this.getToken()
                },
                }).then(res => {
                    if (res.data.status == 1) {
                        that.dialogPopup = false //关闭弹窗
                        that.getTrackList()
                    }
                })
            }
        },
        //点击官网
        goWebsite(item){
            if(item.website){
                window.open(item.website, '_blank')
            }
        },
        //单击列表
        trackDetail(item) {
            var scrollPos
            if (typeof window.pageYOffset != 'undefined') {
                scrollPos = window.pageYOffset
            }
            else if (typeof document.compatMode != 'undefined' && document.compatMode != 'BackCompat') {
                scrollPos = document.documentElement.scrollTop
            }else if (typeof document.body != 'undefined') {
                scrollPos = document.body.scrollTop
            }
            if(item.currentNode || item.atdPol ||  item.stsp || item.gitm || item.lobd || item.ataPod || item.dsch || item.stcs || item.rcve || item.ctnrType) { //则可以进详情页
                var referenceno = item.referenceNo ? item.referenceNo : 'LiNone'
                var setParamDate = {
                    referenceno: referenceno,
                    ieid: item.ieid,
                    id: item.id,
                    recordId: item.trackId,
                    cnshaTrack: '2', //1是上海港区 2 是跟踪
                    pageSize: this.pageSize, //条数
                    orderBy: this.orderBy, //排序参数
                    orderZd: this.orderZd,
                    sortPa: false,
                    orderByIndex: 0,
                    scrollPos: scrollPos,
                }
                var paramDate = this.setParams(setParamDate)
                this.$router.push({
                     path: `/track-detail/${referenceno}/${paramDate}`,
                })
            }
        },

        //处理日期时间格式
        getProcessTime(fmt, date) {
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

        scrollBottom(){
            var that = this
            $(window).scroll(function() {
                if(that.isFinished && that.userId){
                    // 变量 scrollHeight 是滚动条的总高度
                    let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
    
                    // 变量 windowHeight 是可视区的高度
                    let windowHeight = document.documentElement.clientHeight || document.body.clientHeight
    
                    // 变量scrollTop为当前页面的滚动条纵坐标位置
                    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
                    // 滚动条到底部得距离 = 滚动条的总高度 - 可视区的高度 - 当前页面的滚动条纵坐标位置
                    var scrollBottom = scrollHeight - windowHeight - scrollTop
                    if(scrollBottom < 80 && scrollTop > 1000){
                        that.isFinished = false
                        that.isLoad = true
                        if(that.total == that.trackDate.length){
                        }else{
                            //每次增加count数
                            that.pageSize = that.pageSize + that.count
                            that.getTrackList('1')
                        }
                    }
                }
            })
        },
        //监听用户的刷新事件 按 F5 或者单机右键 重新加载
        test(e) {
            sessionStorage.removeItem("sortRecords");
        }
    },
    components: {
        Loading,
        RemindSet
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
        loading : {
            immediate: true,
            handler(newVal){
                if(this.getCookie("currentUser")){
                    if(!newVal && !(JSON.parse(this.getCookie("currentUser")).isShipRead)){
                        this.$parent.handleClickUseCourse(1)
                    }
                }
            }
        },
        uploadDialogVisible:{
            handler(newVal, oldVal) {
                if(newVal){
                    //监听用户Ctrl+v操作
                    document.addEventListener("paste",this.copyData);
                }else{
                    //销毁监听用户Ctrl+v操作
                    document.removeEventListener("paste",this.copyData);
                }
            }
        }
    },
    created () {
    },
    mounted() {
        var that = this
        that.connect()
        that.$refs.trackFomatt.style.minHeight = document.documentElement.clientHeight - 300 + 'px'

        if(that.userId){ //登录了
            //说明详情页回来的
            if(that.$route.params && this.$route.params.inForm && this.$route.params.inForm.cnshaTrack){
                that.pageSize = that.$route.params.inForm.pageSize ? that.$route.params.inForm.pageSize : that.count
                that.orderBy = that.$route.params.inForm.orderBy
                that.orderZd = that.$route.params.inForm.orderZd
                that.orderByIndex = that.$route.params.inForm.orderByIndex
                that.sortPa = that.$route.params.inForm.sortPa
                that.changeSort(that.orderZd, that.orderByIndex,1)
            }else{
                that.changeSort(that.orderZd, that.orderByIndex,1)
            }
        }else{ //未登录
            if(that.$route.params && this.$route.params.inForm && this.$route.params.inForm.cnshaTrack){
                that.getTrackList()
            }
        }
        //监听滚动事件
        that.scrollBottom()

        window.addEventListener('beforeunload', e => this.test(e))
    },
    destroyed() {
        window.removeEventListener('beforeunload', e => this.test(e)) //销毁卸载注册的事件
    }
}
</script>