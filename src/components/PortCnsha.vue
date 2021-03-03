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
        color: #072c4c !important;
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
                    width: 12px;
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

.truckMainIformion{
    background: #fff;
    padding: 10px 20px;
     li{
        border-bottom: solid 1px #f2f2f2;
        .truckMainIformion-li{
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
.truckMainIformion li:last-of-type{
    border: none;
}
.truckMainIformion .truckMainIformion-li .item.item-1{
    margin-right: 10px;
}
.truckMainIformion .truckMainIformion-li .item-1 {
    width: 185px;
}
.truckMainIformion .truckMainIformion-li .item-1 .first_p{
    color: #282828;
    font-size: 13px;
    font-weight: 600;
}
.truckMainIformion .truckMainIformion-li .item-1 p{
    font-size: 14px;
    margin-top: 5px;
    overflow: hidden;/*超出部分隐藏*/
    text-overflow: ellipsis;/*超出部分显示省略号*/
    white-space: nowrap;/*规定段落中的文本不进行换行 */
    align-items: center;
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
.truckMainIformion .truckMainIformion-li .item.item-2{
    margin-right: 10px;
}
.truckMainIformion .truckMainIformion-li .item-2{
    width: 100px;
    margin-right: 10px;
}
.truckMainIformion .truckMainIformion-li .item-2 p{
    width: 100%;
    min-height: 19px;
    font-size: 12px;
    margin-top: 5px;
    color: #909090;
    overflow: hidden;/*超出部分隐藏*/
    text-overflow: ellipsis;/*超出部分显示省略号*/
    white-space: nowrap;/*规定段落中的文本不进行换行 */
}
.truckMainIformion .truckMainIformion-li .item_change{
    width: 40px;
    margin-right: 15px;
    position: relative;
    display: inline-block;
}
.truckMainIformion .truckMainIformion-li .item_change .remark_box{
    position: absolute;
    bottom: 54px;
    right: 0;
    cursor: pointer;
}
.truckMainIformion .truckMainIformion-li .item_change .change_box{
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
.truckMainIformion .truckMainIformion-li .item_change .change_box .change_hover{
    position: absolute;
    right: 0;
    top: 24px;
	background-color: #fff;
	box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    padding: 5px 10px;
    text-align: center;
    font-size: 12px;
    line-height: 22px;
    color: #909090;
    z-index: 10;
}

.truckMainIformion .truckMainIformion-li .item-3{
    flex: 1;
    padding: 0 0 0 16px;
    border-left: 1px solid #f2f2f2;
}
.truckMainIformion .truckMainIformion-li .item-3 .stepitem{
    width: 100%;
    height: 100%;
    padding-top: 10px;
}
.truckMainIformion .truckMainIformion-li .item-3 .stepitem .stepitemLi{
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
        width: 34%;
    }
    .dot_line2{
        width: 17.5%;
    }
    .dot_line3{
        width: 28%;
    }
    .dot_line4{
        width: 12%;
    }
    .dot_line5{
        width: 47%;
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
    .click_title{
        color: #007ce3 !important;
        cursor: pointer;
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
    .icon_loading{
        font-size: 14px;
        color: #000;
    }
}
.truckMainIformion .truckMainIformion-li .item.item-4{
    min-width: 24px;
    margin-right: 19px;
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
.truckMainIformion .truckMainIformion-li .item-5{
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
.truckMainIformion .truckMainIformion-li .item-10{
    width: 48px;
    height: 100%;
    position: relative;
    margin-left: 20px;
    .box{
        width: 48px;
        height: 48px;
        line-height: 48px;
        border-radius: 4px;
        font-size: 14px;
        text-align: center;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        font-weight: 600;
    }
    .jink{
        background-color: #e4f3ff;
        color: #007ce3;
    }
    .chuk{
        background-color: #e4f6f6;
        color: #26b4b2;
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
.shangHaiFomatt{
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
.pils_select{
    margin-top: 0px !important;
    margin-left: -3px !important;
    //处理的箭头
    .popper__arrow{
        top: 0px !important;
        border-bottom-color: transparent !important;
        &::after{
            border-bottom-color: transparent !important;
        }
    }
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
.fixed{
    position: fixed;
    height: 64px;
    background: rgba(0, 0, 0, 0);
    opacity: 0.95;
    width: 100%;
    bottom: 20px;
    background: url("../assets/images/gangquBg.jpg") no-repeat center;
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
    <div ref="shangHaiFomatt" class="shangHaiFomatt">
        <!-- 跟踪列表页面 -->
        <div class="list-main">
            <!-- <div class="fixed" v-show="gangqubg" @click="contactCustomer()"><img src="../assets/images/gangqu1.png" alt=""><span @click.stop="gangquBg" class="el-icon-close"></span></div> -->
            <div class="container">
                <Loading v-if="loading"></Loading>
                <div class="header_title">
                    {{$t('tracks.tracTrack') + '【共' + total + '条】'}}
                </div>
                <div class="header-list">
                    <!-- 按新增日排序 -->
                    <div class="sortIcon" @click="changeSort('SEARCH_TIME',0)">
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
                    <div class="sortIcon left-mm" @click="changeSort('ATD',1)">
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
                    <div class="sortIcon" @click="changeSort('ATA',2)">
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
                            <input @keyup.enter="inputSearch" @focus="focusSearch"  :placeholder="$t('instanceTranck.inputValue')" v-model="searchStr" suffix-icon="el-icon-search" class="inputClass" :readonly='!userId'/>
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
                <div class="truckMainIformion" :class="(cnshaDate && cnshaDate.length > 0)?'':'mainIformion_hui'">
                    <ul v-if="cnshaDate && cnshaDate.length > 0 && !isShiyong">
                        <li v-for="(item,index) in cnshaDate" :key="item.id + item.referenceno + item.recordId">
                            <!-- 正常状态 -->
                            <div class="truckMainIformion-li">
                                <!-- 进出口图标 -->
                                <div class="item item-10" v-if="item.ieid == 'I'">
                                    <div class="box jink">{{$t('home.in')}}</div>
                                </div>
                                <div class="item item-10" v-if="item.ieid == 'E'">
                                    <div class="box chuk">{{$t('home.out')}}</div>
                                </div>
                                <!-- 状态信息部分 -->
                                <div class="item item-1">
                                    <p class="first_p" v-title="item.referenceno ? item.referenceno : ''">
                                        {{item.isctnr ? $t('tracks.container') : $t('tracks.blbk')}}:{{item.referenceno ? item.referenceno : ''}}
                                    </p>
                                    <p v-title="item.vslname">
                                        <span class="qianhui">{{$t('instanceTranck.vessel') + ': '}}{{item.vslname ? item.vslname : item.vslnameOriginal ? item.vslnameOriginal: '--' }}</span>
                                    </p>
                                    <p>
                                        <span class="spanright"
                                            :class="item.updateMark == 1 ? 'red' : ''"
                                        >
                                            <span v-if="item.currentNode" v-title="item.scriptionEn ? item.scriptionEn : ''">
                                                {{$t('nodeInfo.' + item.currentNode) + ': '}}{{item.currentTime ? getProcessTime('mm-dd HH:MM', new Date(item.currentTime)) : '--'}}
                                            </span>
                                            <span v-else style="margin-left:1px">--</span>
                                        </span>
                                    </p>
                                </div>
                                <!-- 详细信息部分 -->
                                <div class="item item-2">
                                    <p v-title="item.remark ? item.remark : ''">
                                        {{$t('instanceTranck.Remarks') + ": " + (item.remark ? item.remark : '')}}
                                    </p>
                                    <p v-if="item.ieid == 'I'" v-title="item.terminal ? item.terminal : ''">
                                        {{$t('instanceTranck.terminal') + ": " + (item.terminal ? item.terminal : '--')}}
                                    </p>
                                    <p v-if="item.ieid == 'E'" v-title="item.openTime ? getProcessTime('mm-dd HH:MM', new Date(item.openTime)) : ''">
                                        {{$t('instanceTranck.cyOpen') + ": " + (item.openTime ? getProcessTime('mm-dd HH:MM', new Date(item.openTime)) : '--')}}
                                    </p>
                                    <p v-title="item.ata ? 'ATA: ' + getProcessTime('mm-dd HH:MM', new Date(item.ata)) : item.eta ? 'ETA: ' + getProcessTime('mm-dd HH:MM', new Date(item.eta)) : ''">
                                        {{item.ata ? 'ATA: ' + getProcessTime('mm-dd HH:MM', new Date(item.ata)) : item.eta ? 'ETA: ' + getProcessTime('mm-dd HH:MM', new Date(item.eta)) : 'ETA: --'}}
                                    </p>
                                </div>
                                <div class="item_change">
                                    <!-- 录入备注图标 -->
                                    <div class="remark_box" @click.stop="remarks(item)">
                                        <img src="../assets/images/cargo/remark_icon.png">
                                    </div>
                                    <!-- 离港后的跟踪列表，不应该再出现靠泊变化提醒了 -->
                                    <div class="change_box" v-if="!item.ata && item.scheduleHis && item.scheduleHis.length > 0">
                                        <div @mouseenter="changeMouseEnter(index)" @mouseleave="changeMouseLeave">{{$t('instanceTranck.Change')}}</div>
                                        <div v-if="isChangeHover && mouseIndex == index" class="change_hover">
                                            <div v-for="(info,infoIndex) in item.scheduleHis" :key="infoIndex">
                                                {{$t('instanceTranck.Berthing') + ": " + (info.changeValue ? getProcessTime('mm-dd HH:MM', new Date(info.changeValue)) : '--')}}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- 进口 节点展示部分 -->
                                <div class="item item-3" :style="{cursor: item.currentNode ? 'pointer' : 'default'}" @click="portCnshaDetail(item)" v-if="item.ieid == 'I'">
                                    <ul class="stepitem">
                                        <li class="stepitemLi">
                                            <!-- 原始舱单 -->
                                            <div class="dot_line dot_line1">
                                                <div class="dot" :class="getIStatusIndex(item.currentNode) > 0 ? 'dot_active' : 'dot_hui'"></div>
                                                <div class="line" :class="getIStatusIndex(item.currentNode) >= getIStatusIndex('GITM') ? 'lin_active' : ''"></div>
                                                <div class="left_info">
                                                    <p class="title tes_title" :class="getIStatusIndex(item.currentNode) > 0  ? 'title_active' : ''">{{$t('instanceTranck.origi')}}</p>
                                                    <p class="title tes_title" :class="getIStatusIndex(item.currentNode) > 0 ? 'title_active' : ''" v-if="item.manifesStatus">{{item.manifesStatus ? 'Y' : ''}}</p>
                                                    <p class="title" :class="getIStatusIndex(item.currentNode) > 0 ? !item.manifesStatus ? 'click_title' : 'title_active' : ''" v-if="!item.manifesStatus" @click.stop="getManifest(item,index)">
                                                        <i class="el-icon-loading icon_loading" v-if="item.isShowLoading"></i>
                                                        <span v-if="!item.isShowLoading">{{$t('instanceTranck.clcikGet')}}</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <!-- 卸船 出口相当于 进港-->
                                            <div class="dot_line dot_line1">
                                                <div class="dot" :class="getIStatusIndex(item.currentNode) >= getIStatusIndex('GITM') ? 'dot_active' : 'dot_hui'"></div>
                                                <div class="line" :class="getIStatusIndex(item.currentNode) >= getIStatusIndex('PASS') ? 'lin_active' : ''"></div>
                                                <div class="left_info">
                                                    <p class="title tes_title" :class="getIStatusIndex(item.currentNode) >= getIStatusIndex('GITM') ? 'title_active' : ''">{{$t('nodeInfo.DSCH')}}</p>
                                                    <p class="title tes_title" :class="getIStatusIndex(item.currentNode) >= getIStatusIndex('GITM') ? 'title_active' : ''">{{item.gitmnum ? item.gitmnum : 0}}{{$t('instanceTranck.box')}}</p>
                                                </div>
                                            </div>
                                            <!-- 海放 -->
                                            <div class="dot_line dot_line2">
                                                <div class="dot" :class="getIStatusIndex(item.currentNode) >= getIStatusIndex('PASS') ? 'dot_active' : 'dot_hui'"></div>
                                                <div class="line" :class="getIStatusIndex(item.currentNode) >= getIStatusIndex('LOBD') ? 'lin_active' : ''"></div>
                                                <div class="left_info">
                                                    <p class="title tes_title" :class="getIStatusIndex(item.currentNode) >= getIStatusIndex('PASS') ? 'title_active' : ''">{{$t('nodeInfo.PASS')}}</p>
                                                    <p class="title tes_title" :class="getIStatusIndex(item.currentNode) >= getIStatusIndex('PASS') ? 'title_active' : ''">{{item.passnum ? 1 : 0}}{{$t('instanceTranck.single')}}</p>
                                                </div>
                                            </div>
                                            <!-- 提货 进口相当于 上船-->
                                            <div class="dot_line dot_line2">
                                                <div class="line" :class="getIStatusIndex(item.currentNode) >= getIStatusIndex('LOBD') ? 'lin_active' : ''"></div>
                                                <div class="dot" :class="getIStatusIndex(item.currentNode) >= getIStatusIndex('LOBD') ? 'dot_active' : 'dot_hui'"></div>
                                                <div class="right_info">
                                                    <p class="title text_aligin tes_title" :class="getIStatusIndex(item.currentNode) >= getIStatusIndex('LOBD') ? 'title_active' : ''">{{$t('nodeInfo.STCS')}}</p>
                                                    <p class="title text_aligin tes_title" :class="getIStatusIndex(item.currentNode) >= getIStatusIndex('LOBD') ? 'title_active' : ''">{{item.islobd ? item.islobd : '--'}}</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <!-- 出口 节点展示部分 -->
                                <div class="item item-3" :style="{cursor: item.currentNode ? 'pointer' : 'default'}" @click="portCnshaDetail(item)" v-if="item.ieid == 'E'">
                                    <ul class="stepitem">
                                        <li class="stepitemLi">
                                            <!-- 预配舱单 -->
                                            <div class="dot_line dot_line3">
                                                <div class="dot" :class="getNodeIndex(item.currentNode) > 0 || (item.atd && item.currentNode) ? 'dot_active' : 'dot_hui'"></div>
                                                <div class="line" :class="getNodeIndex(item.currentNode) >= getNodeIndex('GITM') || (item.atd && item.currentNode) ? 'lin_active' : ''"></div>
                                                <div class="left_info">
                                                    <p class="title tes_title" :class="getNodeIndex(item.currentNode) > 0 || (item.atd && item.currentNode) ? 'title_active' : ''">{{$t('instanceTranck.dockPlan')}}</p>
                                                    <p class="title tes_title" :class="getNodeIndex(item.currentNode) > 0 || (item.atd && item.currentNode) ? 'title_active' : ''" v-if="item.manifesStatus">{{item.manifesStatus ? 'Y' : ''}}</p>
                                                    <p class="title" :class="getNodeIndex(item.currentNode) > 0 ? !item.manifesStatus ? 'click_title' : 'title_active' : ''" v-if="!item.manifesStatus" @click.stop="getManifest(item,index)">
                                                        <i class="el-icon-loading icon_loading" v-if="item.isShowLoading"></i>
                                                        <span v-if="!item.isShowLoading">{{$t('instanceTranck.clcikGet')}}</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <!-- 进港 -->
                                            <div class="dot_line dot_line3">
                                                <div class="dot" :class="getNodeIndex(item.currentNode) >= getNodeIndex('GITM') || (item.atd && item.currentNode)? 'dot_active' : 'dot_hui'"></div>
                                                <div class="line" :class="getNodeIndex(item.currentNode) >= getNodeIndex('PASS') || (item.atd && item.currentNode)? 'lin_active' : ''"></div>
                                                <div class="left_info">
                                                    <p class="title tes_title" :class="getNodeIndex(item.currentNode) >= getNodeIndex('GITM') || (item.atd && item.currentNode) ? 'title_active' : ''">{{$t('nodeInfo.GITM')}}</p>
                                                    <p class="title tes_title" :class="getNodeIndex(item.currentNode) >= getNodeIndex('GITM') || (item.atd && item.currentNode) ? 'title_active' : ''">{{item.gitmnum ? item.gitmnum : 0}}{{$t('instanceTranck.box')}}</p>
                                                </div>
                                            </div>
                                            <!-- 海放 -->
                                            <div class="dot_line dot_line3">
                                                <div class="dot" :class="getNodeIndex(item.currentNode) >= getNodeIndex('PASS') || (item.atd && item.currentNode) ? 'dot_active' : 'dot_hui'"></div>
                                                <div class="line" :class="getNodeIndex(item.currentNode) >= getNodeIndex('TMPS') || (item.atd && item.currentNode) ? 'lin_active' : ''"></div>
                                                <div class="left_info">
                                                    <p class="title tes_title" :class="getNodeIndex(item.currentNode) >= getNodeIndex('PASS') || (item.atd && item.currentNode) ? 'title_active' : ''">{{$t('nodeInfo.PASS')}}</p>
                                                    <p class="title tes_title" :class="getNodeIndex(item.currentNode) >= getNodeIndex('PASS') || (item.atd && item.currentNode) ? 'title_active' : ''">{{item.passnum ? 1 : 0}}{{$t('instanceTranck.single')}}</p>
                                                </div>
                                            </div>
                                            <!-- 码放 -->
                                            <div class="dot_line dot_line3">
                                                <div class="dot" :class="getNodeIndex(item.currentNode) >= getNodeIndex('TMPS') || (item.atd && item.currentNode) ? 'dot_active' : 'dot_hui'"></div>
                                                <div class="line" :class="getNodeIndex(item.currentNode) >= getNodeIndex('PRLD') || (item.atd && item.currentNode) ? 'lin_active' : ''"></div>
                                                <div class="left_info">
                                                    <p class="title tes_title" :class="getNodeIndex(item.currentNode) >= getNodeIndex('TMPS') || (item.atd && item.currentNode) ? 'title_active' : ''">{{$t('nodeInfo.TMPS')}}</p>
                                                    <p class="title tes_title" :class="getNodeIndex(item.currentNode) >= getNodeIndex('TMPS') || (item.atd && item.currentNode) ? 'title_active' : ''">{{item.tmpsnum ? item.tmpsnum : 0}}{{$t('instanceTranck.box')}}</p>
                                                </div>
                                            </div>
                                            <!-- 配载 -->
                                            <div class="dot_line dot_line3">
                                                <div class="dot" :class="getNodeIndex(item.currentNode) >= getNodeIndex('PRLD') || (item.atd && item.currentNode) ? 'dot_active' : 'dot_hui'"></div>
                                                <div class="line" :class="getNodeIndex(item.currentNode) >= getNodeIndex('PRLD') || (item.atd && item.currentNode) ? 'lin_active' : ''"></div>
                                                <div class="left_info">
                                                    <p class="title tes_title" :class="getNodeIndex(item.currentNode) >= getNodeIndex('PRLD') || (item.atd && item.currentNode) ? 'title_active' : ''">{{$t('nodeInfo.PRLD')}}</p>
                                                    <p class="title tes_title" :class="getNodeIndex(item.currentNode) >= getNodeIndex('PRLD') || (item.atd && item.currentNode) ? 'title_active' : ''">{{item.isprld ? item.isprld : '--'}}</p>
                                                </div>
                                            </div>
                                            <!-- 上船 -->
                                            <div class="dot_line dot_line4">
                                                <div class="dot" :class="getNodeIndex(item.currentNode) >= getNodeIndex('LOBD') || (item.atd && item.currentNode) ? 'dot_active' : 'dot_hui'"></div>
                                                <div class="line" :class="(item.atd && item.currentNode) ? 'lin_active' : ''"></div>
                                                <div class="left_info">
                                                    <p class="title tes_title" :class="getNodeIndex(item.currentNode) >= getNodeIndex('LOBD') || (item.atd && item.currentNode) ? 'title_active' : ''">{{$t('nodeInfo.LOBD')}}</p>
                                                    <p class="title tes_title" :class="getNodeIndex(item.currentNode) >= getNodeIndex('LOBD') || (item.atd && item.currentNode) ? 'title_active' : ''">{{item.islobd ? item.islobd : '--'}}</p>
                                                </div>
                                            </div>
                                            <!-- 离港 -->
                                            <div class="dot_line dot_line5">
                                                <div class="line" :class="(item.atd && item.currentNode) ? 'lin_active' : ''"></div>
                                                <div class="dot" :class="(item.atd && item.currentNode) ? 'dot_active' : 'dot_hui'"></div>
                                                <div class="right_info">
                                                    <p class="title text_aligin tes_title" :class="(item.atd && item.currentNode) ? 'title_active' : ''">{{$t('nodeInfo.DLPT')}}</p>
                                                    <p class="title text_aligin tes_title" :class="(item.atd && item.currentNode) ? 'title_active' : ''" v-title="item.atd && item.currentNode ? 'ATD:' + getProcessTime('mm-dd HH:MM', new Date(item.atd)) : item.etd && item.currentNode ? 'ETD:' + getProcessTime('mm-dd HH:MM', new Date(item.etd)) : ''">{{item.atd && item.currentNode ? 'ATD:' + getProcessTime('mm-dd HH:MM', new Date(item.atd)) : item.etd && item.currentNode ? 'ETD:' + getProcessTime('mm-dd HH:MM', new Date(item.etd)) : '--'}}</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <!-- 任务部分 -->
                                <div class="item item-4">
                                    <p @click.stop="goWebsite(item)" :class="item.shipURL ? 'newWeb' : ''">{{$t('instanceTranck.website')}}</p>
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
                        <li v-for="(item,index) in shiliDate" :key="item.id + item.referenceno + item.recordId">
                            <!-- 正常状态 -->
                            <div class="truckMainIformion-li">
                                <!-- 进出口图标 -->
                                <div class="item item-10" v-if="item.ieid == 'I'">
                                    <div class="box jink">{{$t('home.in')}}</div>
                                </div>
                                <div class="item item-10" v-if="item.ieid == 'E'">
                                    <div class="box chuk">{{$t('home.out')}}</div>
                                </div>
                                <!-- 状态信息部分 -->
                                <div class="item item-1">
                                    <p class="first_p" v-title="item.referenceno ? item.referenceno : ''">
                                        {{item.isctnr ? $t('tracks.container') : $t('tracks.blbk')}}:{{item.referenceno ? item.referenceno : ''}}
                                    </p>
                                    <p v-title="item.vslname">
                                        <span class="qianhui">{{$t('instanceTranck.vessel') + ': '}}{{item.vslname ? item.vslname : item.vslnameOriginal ? item.vslnameOriginal: '--' }}</span>
                                    </p>
                                    <p>
                                        <span class="spanright"
                                            :class="item.updateMark == 1 ? 'red' : ''"
                                        >
                                            <span v-if="item.currentNode" v-title="item.scriptionEn ? item.scriptionEn : ''">
                                                {{$t('nodeInfo.' + item.currentNode) + ': '}}{{item.currentTime ? getProcessTime('mm-dd HH:MM', new Date(item.currentTime)) : '--'}}
                                            </span>
                                            <span v-else style="margin-left:1px">--</span>
                                        </span>
                                    </p>
                                </div>
                                <!-- 详细信息部分 -->
                                <div class="item item-2">
                                    <div>
                                        <p v-title="item.remark ? item.remark : ''">
                                            {{$t('instanceTranck.Remarks') + ": " + (item.remark ? item.remark : '无')}}
                                        </p>
                                        <p v-if="item.ieid == 'I'" v-title="item.terminal ? item.terminal : ''">
                                            {{$t('instanceTranck.terminal') + ": " + (item.terminal ? item.terminal : '--')}}
                                        </p>
                                        <p v-if="item.ieid == 'E'" v-title="item.openTime ? getProcessTime('mm-dd HH:MM', new Date(item.openTime)) : ''">
                                            {{$t('instanceTranck.cyOpen') + ": " + (item.openTime ? getProcessTime('mm-dd HH:MM', new Date(item.openTime)) : '--')}}
                                        </p>
                                        <p v-title="item.ata ? 'ATA: ' + getProcessTime('mm-dd HH:MM', new Date(item.ata)) : item.eta ? 'ETA: ' + getProcessTime('mm-dd HH:MM', new Date(item.eta)) : ''">
                                            {{item.ata ? 'ATA: ' + getProcessTime('mm-dd HH:MM', new Date(item.ata)) : item.eta ? 'ETA: ' + getProcessTime('mm-dd HH:MM', new Date(item.eta)) : 'ETA: --'}}
                                        </p>
                                    </div>
                                </div>
                                <div class="item_change">
                                    <!-- 录入备注图标 -->
                                    <div class="remark_box" @click.stop="remarks(item)">
                                        <img src="../assets/images/cargo/remark_icon.png">
                                    </div>
                                    <!-- 离港后的跟踪列表，不应该再出现靠泊变化提醒了 -->
                                    <div class="change_box" v-if="!item.ata && item.scheduleHis && item.scheduleHis.length > 0">
                                        <div @mouseenter="changeMouseEnter(index)" @mouseleave="changeMouseLeave">{{$t('instanceTranck.Change')}}</div>
                                        <div v-if="isChangeHover && mouseIndex == index" class="change_hover">
                                            <div v-for="(info,infoIndex) in item.scheduleHis" :key="infoIndex">
                                                {{$t('instanceTranck.Berthing') + ": " + (info.changeValue ? getProcessTime('mm-dd HH:MM', new Date(info.changeValue)) : '--')}}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- 进口 节点展示部分 -->
                                <div class="item item-3" :style="{cursor: item.currentNode ? 'pointer' : 'default'}" @click="portCnshaDetail(item)" v-if="item.ieid == 'I'">
                                    <ul class="stepitem">
                                        <li class="stepitemLi">
                                            <!-- 原始舱单 -->
                                            <div class="dot_line dot_line1">
                                                <div class="dot" :class="getIStatusIndex(item.currentNode) > 0 ? 'dot_active' : 'dot_hui'"></div>
                                                <div class="line" :class="getIStatusIndex(item.currentNode) >= getIStatusIndex('GITM') ? 'lin_active' : ''"></div>
                                                <div class="left_info">
                                                    <p class="title tes_title" :class="getIStatusIndex(item.currentNode) > 0  ? 'title_active' : ''">{{$t('instanceTranck.origi')}}</p>
                                                    <p class="title tes_title" :class="getIStatusIndex(item.currentNode) > 0 ? 'title_active' : ''" v-if="item.manifesStatus">{{item.manifesStatus}}</p>
                                                    <p class="title" :class="getIStatusIndex(item.currentNode) > 0 ? !item.manifesStatus ? 'click_title' : 'title_active' : ''" v-if="!item.manifesStatus" @click.stop="getManifest(item,index)">
                                                        <i class="el-icon-loading icon_loading" v-if="item.isShowLoading"></i>
                                                        <span v-if="!item.isShowLoading">{{$t('instanceTranck.clcikGet')}}</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <!-- 卸船 出口相当于 进港-->
                                            <div class="dot_line dot_line1">
                                                <div class="dot" :class="getIStatusIndex(item.currentNode) >= getIStatusIndex('GITM') ? 'dot_active' : 'dot_hui'"></div>
                                                <div class="line" :class="getIStatusIndex(item.currentNode) >= getIStatusIndex('PASS') ? 'lin_active' : ''"></div>
                                                <div class="left_info">
                                                    <p class="title tes_title" :class="getIStatusIndex(item.currentNode) >= getIStatusIndex('GITM') ? 'title_active' : ''">{{$t('nodeInfo.DSCH')}}</p>
                                                    <p class="title tes_title" :class="getIStatusIndex(item.currentNode) >= getIStatusIndex('GITM') ? 'title_active' : ''">{{item.gitmnum ? item.gitmnum : 0}}{{$t('instanceTranck.box')}}</p>
                                                </div>
                                            </div>
                                            <!-- 海放 -->
                                            <div class="dot_line dot_line2">
                                                <div class="dot" :class="getIStatusIndex(item.currentNode) >= getIStatusIndex('PASS') ? 'dot_active' : 'dot_hui'"></div>
                                                <div class="line" :class="getIStatusIndex(item.currentNode) >= getIStatusIndex('LOBD') ? 'lin_active' : ''"></div>
                                                <div class="left_info">
                                                    <p class="title tes_title" :class="getIStatusIndex(item.currentNode) >= getIStatusIndex('PASS') ? 'title_active' : ''">{{$t('nodeInfo.PASS')}}</p>
                                                    <p class="title tes_title" :class="getIStatusIndex(item.currentNode) >= getIStatusIndex('PASS') ? 'title_active' : ''">{{item.passnum ? 1 : 0}}{{$t('instanceTranck.single')}}</p>
                                                </div>
                                            </div>
                                            <!-- 提货 进口相当于 上船-->
                                            <div class="dot_line dot_line2">
                                                <div class="line" :class="getIStatusIndex(item.currentNode) >= getIStatusIndex('LOBD') ? 'lin_active' : ''"></div>
                                                <div class="dot" :class="getIStatusIndex(item.currentNode) >= getIStatusIndex('LOBD') ? 'dot_active' : 'dot_hui'"></div>
                                                <div class="right_info">
                                                    <p class="title text_aligin tes_title" :class="getIStatusIndex(item.currentNode) >= getIStatusIndex('LOBD') ? 'title_active' : ''">{{$t('nodeInfo.STCS')}}</p>
                                                    <p class="title text_aligin tes_title" :class="getIStatusIndex(item.currentNode) >= getIStatusIndex('LOBD') ? 'title_active' : ''">{{item.islobd ? item.islobd : '-'}}</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <!-- 出口 节点展示部分 -->
                                <div class="item item-3" :style="{cursor: item.currentNode ? 'pointer' : 'default'}" @click="portCnshaDetail(item)" v-if="item.ieid == 'E'">
                                    <ul class="stepitem">
                                        <li class="stepitemLi">
                                            <!-- 预配舱单 -->
                                            <div class="dot_line dot_line3">
                                                <div class="dot" :class="getNodeIndex(item.currentNode) > 0 || (item.atd && item.currentNode) ? 'dot_active' : 'dot_hui'"></div>
                                                <div class="line" :class="getNodeIndex(item.currentNode) >= getNodeIndex('GITM') || (item.atd && item.currentNode) ? 'lin_active' : ''"></div>
                                                <div class="left_info">
                                                    <p class="title tes_title" :class="getNodeIndex(item.currentNode) > 0 || (item.atd && item.currentNode) ? 'title_active' : ''">{{$t('instanceTranck.dockPlan')}}</p>
                                                    <p class="title tes_title" :class="getNodeIndex(item.currentNode) > 0 || (item.atd && item.currentNode) ? 'title_active' : ''" v-if="item.manifesStatus">{{item.manifesStatus}}</p>
                                                    <p class="title" :class="getNodeIndex(item.currentNode) > 0 ? !item.manifesStatus ? 'click_title' : 'title_active' : ''" v-if="!item.manifesStatus" @click.stop="getManifest(item,index)">
                                                        <i class="el-icon-loading icon_loading" v-if="item.isShowLoading"></i>
                                                        <span v-if="!item.isShowLoading">{{$t('instanceTranck.clcikGet')}}</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <!-- 进港 -->
                                            <div class="dot_line dot_line3">
                                                <div class="dot" :class="getNodeIndex(item.currentNode) >= getNodeIndex('GITM') || (item.atd && item.currentNode) ? 'dot_active' : 'dot_hui'"></div>
                                                <div class="line" :class="getNodeIndex(item.currentNode) >= getNodeIndex('PASS') || (item.atd && item.currentNode) ? 'lin_active' : ''"></div>
                                                <div class="left_info">
                                                    <p class="title tes_title" :class="getNodeIndex(item.currentNode) >= getNodeIndex('GITM') || (item.atd && item.currentNode) ? 'title_active' : ''">{{$t('nodeInfo.GITM')}}</p>
                                                    <p class="title tes_title" :class="getNodeIndex(item.currentNode) >= getNodeIndex('GITM') || (item.atd && item.currentNode) ? 'title_active' : ''">{{item.gitmnum ? item.gitmnum : 0}}{{$t('instanceTranck.box')}}</p>
                                                </div>
                                            </div>
                                            <!-- 海放 -->
                                            <div class="dot_line dot_line3">
                                                <div class="dot" :class="getNodeIndex(item.currentNode) >= getNodeIndex('PASS') || (item.atd && item.currentNode) ? 'dot_active' : 'dot_hui'"></div>
                                                <div class="line" :class="getNodeIndex(item.currentNode) >= getNodeIndex('TMPS') || (item.atd && item.currentNode) ? 'lin_active' : ''"></div>
                                                <div class="left_info">
                                                    <p class="title tes_title" :class="getNodeIndex(item.currentNode) >= getNodeIndex('PASS') || (item.atd && item.currentNode) ? 'title_active' : ''">{{$t('nodeInfo.PASS')}}</p>
                                                    <p class="title tes_title" :class="getNodeIndex(item.currentNode) >= getNodeIndex('PASS') || (item.atd && item.currentNode) ? 'title_active' : ''">{{item.passnum ? 1 : 0}}{{$t('instanceTranck.single')}}</p>
                                                </div>
                                            </div>
                                            <!-- 码放 -->
                                            <div class="dot_line dot_line3">
                                                <div class="dot" :class="getNodeIndex(item.currentNode) >= getNodeIndex('TMPS') || (item.atd && item.currentNode) ? 'dot_active' : 'dot_hui'"></div>
                                                <div class="line" :class="getNodeIndex(item.currentNode) >= getNodeIndex('PRLD') || (item.atd && item.currentNode) ? 'lin_active' : ''"></div>
                                                <div class="left_info">
                                                    <p class="title tes_title" :class="getNodeIndex(item.currentNode) >= getNodeIndex('TMPS') || (item.atd && item.currentNode) ? 'title_active' : ''">{{$t('nodeInfo.TMPS')}}</p>
                                                    <p class="title tes_title" :class="getNodeIndex(item.currentNode) >= getNodeIndex('TMPS') || (item.atd && item.currentNode) ? 'title_active' : ''">{{item.tmpsnum ? item.tmpsnum : 0}}{{$t('instanceTranck.box')}}</p>
                                                </div>
                                            </div>
                                            <!-- 配载 -->
                                            <div class="dot_line dot_line3">
                                                <div class="dot" :class="getNodeIndex(item.currentNode) >= getNodeIndex('PRLD') || (item.atd && item.currentNode) ? 'dot_active' : 'dot_hui'"></div>
                                                <div class="line" :class="getNodeIndex(item.currentNode) >= getNodeIndex('PRLD') || (item.atd && item.currentNode) ? 'lin_active' : ''"></div>
                                                <div class="left_info">
                                                    <p class="title tes_title" :class="getNodeIndex(item.currentNode) >= getNodeIndex('PRLD') || (item.atd && item.currentNode) ? 'title_active' : ''">{{$t('nodeInfo.PRLD')}}</p>
                                                    <p class="title tes_title" :class="getNodeIndex(item.currentNode) >= getNodeIndex('PRLD') || (item.atd && item.currentNode) ? 'title_active' : ''">{{item.isprld ? item.isprld : '-'}}</p>
                                                </div>
                                            </div>
                                            <!-- 上船 -->
                                            <div class="dot_line dot_line4">
                                                <div class="dot" :class="getNodeIndex(item.currentNode) >= getNodeIndex('LOBD') || (item.atd && item.currentNode) ? 'dot_active' : 'dot_hui'"></div>
                                                <div class="line" :class="(item.atd && item.currentNode) ? 'lin_active' : ''"></div>
                                                <div class="left_info">
                                                    <p class="title tes_title" :class="getNodeIndex(item.currentNode) >= getNodeIndex('LOBD') || (item.atd && item.currentNode) ? 'title_active' : ''">{{$t('nodeInfo.LOBD')}}</p>
                                                    <p class="title tes_title" :class="getNodeIndex(item.currentNode) >= getNodeIndex('LOBD') || (item.atd && item.currentNode) ? 'title_active' : ''">{{item.islobd ? item.islobd : '-'}}</p>
                                                </div>
                                            </div>
                                            <!-- 离港 -->
                                            <div class="dot_line dot_line5">
                                                <div class="line" :class="(item.atd && item.currentNode) ? 'lin_active' : ''"></div>
                                                <div class="dot" :class="(item.atd && item.currentNode) ? 'dot_active' : 'dot_hui'"></div>
                                                <div class="right_info">
                                                    <p class="title text_aligin tes_title" :class="(item.atd && item.currentNode) ? 'title_active' : ''">{{$t('nodeInfo.DLPT')}}</p>
                                                    <p class="title text_aligin tes_title" :class="(item.atd && item.currentNode) ? 'title_active' : ''" v-title="item.atd && item.currentNode ? 'ATD:' + getProcessTime('mm-dd HH:MM', new Date(item.atd)) : item.etd && item.currentNode ? 'ETD:' + getProcessTime('mm-dd HH:MM', new Date(item.etd)) : ''">{{item.atd && item.currentNode ? 'ATD:' + getProcessTime('mm-dd HH:MM', new Date(item.atd)) : item.etd && item.currentNode ? 'ETD:' + getProcessTime('mm-dd HH:MM', new Date(item.etd)) : '--'}}</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <!-- 任务部分 -->
                                <div class="item item-4">
                                    <p @click.stop="goWebsite(item)" :class="item.shipURL ? 'newWeb' : ''">{{$t('instanceTranck.website')}}</p>
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
                <div class="jiaDao" v-if="isLoad && cnshaDate.length > 0">
                    <div class="jiaZai" v-if='cnshaDate.length !== total'>
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
                        <span style="font-weight: normal;color: #007ce3;font-size: 12px;margin-left:5px">{{ $t('instanceTranck.tizhuy') }}</span>
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
                    <el-table-column prop="ieid" :label="$t('tracks.EXIM')" align="left" min-width="40" :resizable="false">
                        <template slot-scope="scope">
                            <el-select
                                v-model="scope.row.ieid"
                                placeholder=""
                                @focus="cursorLocation(scope)"
                                popper-class="pils_select"
                                :ref="'pilsSelect' + scope.$index"
                            >
                                <el-option
                                    v-for="item in ieidList"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                >
                                </el-option>
                            </el-select>
                        </template>
                    </el-table-column>
                    <el-table-column prop="blno" :label="$t('tracks.blbk')" align="left" min-width="80" :resizable="false">
                        <template slot-scope="scope">
                            <el-input 
                                v-model="scope.row.blno" 
                                @focus="cursorLocation(scope)"
                            >
                            </el-input> 
                        </template>          
                    </el-table-column>
                    <el-table-column prop="ctnrno" :label="$t('tracks.container')" align="left" min-width="80" :resizable="false">
                        <template slot-scope="scope">
                            <el-input 
                                v-model="scope.row.ctnrno" 
                                @focus="cursorLocation(scope)"
                            >
                            </el-input> 
                        </template>          
                    </el-table-column>
                    <el-table-column prop="vslname" :label="$t('tracks.vessel')" align="left" min-width="80" :resizable="false">
                        <template slot-scope="scope">
                            <el-input 
                                v-model="scope.row.vslname"
                                @focus="cursorLocation(scope)"
                            >
                            </el-input> 
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
                                scope.row.ieid.replace(/\s/g, '') != '' ||
                                scope.row.blno.replace(/\s/g, '') != '' ||
                                scope.row.ctnrno.replace(/\s/g, '') != '' ||
                                scope.row.vslname.replace(/\s/g, '') != '' ||
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

            //船舶计划变化
            isChangeHover: false,//船舶计划-变化是否hover
            mouseIndex: -1,
            gangqubg:true,
            //批量上传
            uploadLoading: false, //批量上传loading
            uploadDialogVisible: false, //批量上传模态框
            uploadLists: [], //批量上传表格
            errorLists: [],//批量上传后错误数据
            nowFocus: '', //批量上传的当前列
            nowRowIndex: 0, //批量上传的当前行
            ieidList: [ //E出口 I 进口 
                {
                    value: 'I',
                    label: '进口',
                },
                {
                    value: 'E',
                    label: '出口',
                }
            ],

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
            sortPa: false, //是否要反序
            orderByIndex: 0, //当前点击第几个
            orderStr: 'SEARCH_TIME', //排序所需参数
            sort: 'ASC', //正序 倒序
            
            //用户登录
            userId:
                this.getCookie("authId") !== null && this.getCookie("authId") !== "" && this.getCookie("authId") !== undefined
                ? this.getCookie("authId")
                : 0,

            // 列表数据
            cnshaDate: [], //获取的列表数据
            shiliDate: [ //是要教程的数据
                {
                    ata: "2020/10/27 02:00:00",
                    atd: "2020/10/27 22:00:00",
                    blno: "KMTCSGN3486050",
                    carriercd: "KMTC",
                    closeTime: "2020/10/25 18:00:00",
                    ctnrno: "",
                    currentNode: "STCS",
                    currentTime: "2020/10/30 05:12:52",
                    eta: "2020/10/27 01:30:00",
                    etd: "2020/10/27 22:00:00",
                    gitmnum: 1,
                    id: 19,
                    ieid: "I",
                    isctnr: 0,
                    islobd: "Y",
                    isprld: "",
                    manifesStatus: null,
                    openTime: "2020/10/22 09:00:00",
                    passnum: 1,
                    polcd: "CNSHA",
                    recordId: null,
                    referenceno: "KMTCSGN3486050",
                    remark: null,
                    resultStatus: 1,
                    shipURL: "http://www.ekmtc.com/",
                    terminal: "明东",
                    tmpsnum: 0,
                    userid: 125,
                    voy: "2006NA",
                    vslname: "NORTHERN VALENCE",
                },
                {
                    ata: "2020/10/04 02:30:00",
                    atd: "2020/10/05 12:30:00",
                    blno: "COSU6277268580",
                    carriercd: "COSCO",
                    closeTime: "2020/10/04 18:00:00",
                    ctnrno: "",
                    currentNode: "DLPT",
                    currentTime: "2020/10/05 12:30:00",
                    eta: "2020/10/04 01:30:00",
                    etd: "2020/10/05 12:30:00",
                    gitmnum: 1,
                    id: 10,
                    ieid: "E",
                    isctnr: 0,
                    islobd: "Y",
                    isprld: "Y",
                    manifesStatus: null,
                    openTime: "2020/10/01 09:00:00",
                    passnum: 1,
                    polcd: "CNSHA",
                    recordId: null,
                    referenceno: "COSU6277268580",
                    remark: null,
                    resultStatus: 1,
                    shipURL: "http://elines.coscoshipping.com/ebusiness/servers/2002",
                    terminal: "明东",
                    tmpsnum: 1,
                    userid: 125,
                    voy: "045E",
                    vslname: "OOCL GENOA",
                }
            ],
            //是否显示使用教程
            isShiyong: false,
        }
    },
    methods:{
        // gangquBg(){
        //     this.gangqubg = false
        // },
        //搜索栏跟踪获取数据
        getCnshaData(params){
            var that = this
            that.loading = true
            var blno = '' //提单号
            var ctnrno = '' //箱号
            if(params.isTiandan == 1){ //说明输入得是提单号
                blno = params.referenceno
            }else{
                ctnrno = params.referenceno
            }
            if(that.userId){
                that.searchInfor = ''
            }else{
                that.searchInfor = params.referenceno
            }
            var fd = {
                ieid: params.ieid,
                blno: blno,
                ctnrno: ctnrno,
                vslname: params.vslname,
                userid: that.userId,
            }
            this.$Axios.post(that.GLOBAL.url + "trace/dock/dockTrack", fd,{
                headers: {
                    Authorization: this.getToken()
            },
            }).then(res => {
                if (res.data.status == 1) {
                    //删除掉搜索栏内容
                    that.$parent.clearHeadNav()

                    that.getsCnshaList()

                }else if(res.data.status == 9){
                    that.loading = false
                    that.sampleData(1, {
                        name: 'portCnsha',
                        params: params
                    })
                }
            }).catch((err)=>{})
        },

        //获取跟踪列表数据
        getsCnshaList(value){
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
                orderStr: that.orderStr,
                sort: that.sort,
                userid: that.userId,
            }
            this.$Axios.post(this.GLOBAL.url + "trace/dock/getRecordlist",fd,{
                headers: {
                    Authorization: this.getToken()
            },
            }).then(res => {
                that.loading = false
                if (res.data.status == 1) {
                    that.isLoad = false

                    var newArList = []
                    if(value == '1'){ //说明分页
                        newArList = JSON.parse(JSON.stringify(that.cnshaDate))
                    }
                    
                    that.cnshaDate = res.data.content
                    that.total = res.data.total

                    for (let i = 0; i < that.cnshaDate.length; i++) {
                        that.cnshaDate[i]['isShowLoading'] = false
                    }

                    //如果是分页
                    if(value == '1'){ //说明分页
                        that.isFinished = true
                        for (let i = 0; i < that.cnshaDate.length; i++) {
                            for (let j = 0; j < newArList.length; j++) {
                                //相同 referenceno ieid isctnr 相同说明是同一个单子
                                if(newArList[j]['checked'] && that.cnshaDate[i].referenceno == newArList[j].referenceno && that.cnshaDate[i].ieid == newArList[j].ieid && that.cnshaDate[i].isctnr == newArList[j].isctnr){
                                    that.cnshaDate.splice(i,1,newArList[j])
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
                }
            }).catch((err)=>{
                that.loading = false
            })
        },
        //获取舱单
        getManifest(item,index){
            if(item.currentNode){
                item.isShowLoading = true
                var that = this
                var fd = {
                    id: item.id,
                    blno: item.blno,
                    ctnrno: item.ctnrno,
                    ieid: item.ieid,
                    userid: that.userId,
                }
                this.$Axios.post(this.GLOBAL.url + "trace/dock/manifestMessage",fd,{
                    headers: {
                        Authorization: this.getToken()
                },
                }).then(res => {
                    that.loading = false
                    if (res.data.status == 1) {
                        for (let i = 0; i < that.cnshaDate.length; i++) {
                            if(item.id == that.cnshaDate[i].id){
                                if(res.data.content){
                                    that.cnshaDate[i].manifesStatus = res.data.content
                                    that.cnshaDate[i].isShowLoading = false
                                    return
                                }
                            }
                        }
                        that.cnshaDate[index].isShowLoading = false
                        that.$message({
                            message: that.$t('messages.dataAgain'),
                            type: "error",
                            customClass: "base-message-zindex"
                        });
                    }
                })
            }
        },
        //排序
        changeSort(column, index, isX){
            if(isX){
                //代表首次进页面排 和 详情页回来的时候排
            }else{
                //如果当前点击的index跟上一回点击的index不一样 则this.sortPa 格式化
                if(column){
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
                this.sort = this.sortPa ? 'ASC' : 'DESC'
                this.orderStr = column
            }

            if(this.userId){
                this.getsCnshaList()
            }
        },
        //focus
        focusSearch(){
            this.isSearch = true
        },        //回车搜索运单信息
        inputSearch() {
            if(this.userId){
                this.getsCnshaList()
                if(this.searchStr == ''){
                    this.isSearch = false
                }
            }
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
                    //查询记录
                    if(data.referenceno){
                        for (let i = 0; i < that.cnshaDate.length; i++) {
                            if(that.cnshaDate[i].referenceno == data.referenceno && that.cnshaDate[i].ieid == data.ieid && that.cnshaDate[i].isctnr == data.isctnr){
                                data['isShowLoading'] = false
                                that.cnshaDate.splice(i,1,data)
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

        //船舶计划改变鼠标移入事件
        changeMouseEnter(index){
            this.isChangeHover = true
            this.mouseIndex = index
        },
        //船舶计划改变鼠标移出事件
        changeMouseLeave(){
            this.isChangeHover = false
            this.mouseIndex = -1
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
                ieid: '',
                blno: '',
                ctnrno: '',
                vslname: '',
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
                ieid: '',
                blno: '',
                ctnrno: '',
                vslname: '',
                remark: ''
            }
            for(let i=0; i<50; i++){
                this.uploadLists.push(JSON.parse(JSON.stringify(uploadItem)))
            }
            setTimeout(()=>{
                var that = this
                that.$refs.table.bodyWrapper.addEventListener('scroll', () => {
                    if(that.$refs['pilsSelect' + this.nowRowIndex]){
                        that.$refs['pilsSelect' + this.nowRowIndex].handleClose()
                    }
                })
            },500)
        },
        //批量上传获取用户粘贴进来的数据
        copyData(e){
            if (e.clipboardData || e.originalEvent) {
                var clipboardData = (e.clipboardData || window.clipboardData);
                var originData = clipboardData.getData('text');
                var data = originData.split('\n')
                for(let i=0; i<data.length; i++){
                    if (!data[i]) {
                        continue ;
                    }
                    var bugdetData = data[i].split('\t');
                    if(this.nowRowIndex+i<50){
                        if(this.nowFocus == 'ieid'){
                            this.uploadLists[this.nowRowIndex+i].ieid = bugdetData[0] != undefined?bugdetData[0].replace(/\s+/g,'') != ''?bugdetData[0]:this.uploadLists[this.nowRowIndex+i].ieid:this.uploadLists[this.nowRowIndex+i].ieid
                            this.uploadLists[this.nowRowIndex+i].blno = bugdetData[1] != undefined?bugdetData[1].replace(/\s+/g,'') != ''?bugdetData[1]:this.uploadLists[this.nowRowIndex+i].blno:this.uploadLists[this.nowRowIndex+i].blno
                            this.uploadLists[this.nowRowIndex+i].ctnrno = bugdetData[2] != undefined?bugdetData[2].replace(/\s+/g,'') != ''?bugdetData[2]:this.uploadLists[this.nowRowIndex+i].ctnrno:this.uploadLists[this.nowRowIndex+i].ctnrno
                            this.uploadLists[this.nowRowIndex+i].vslname = bugdetData[3] != undefined?bugdetData[3].replace(/\s+/g,'') != ''?bugdetData[3]:this.uploadLists[this.nowRowIndex+i].vslname:this.uploadLists[this.nowRowIndex+i].vslname
                            this.uploadLists[this.nowRowIndex+i].remark = bugdetData[4] != undefined?bugdetData[4].replace(/\s+/g,'') != ''?bugdetData[4].substring(0,30):this.uploadLists[this.nowRowIndex+i].remark:this.uploadLists[this.nowRowIndex+i].remark
                        }else if(this.nowFocus == 'blno'){
                            this.uploadLists[this.nowRowIndex+i].blno = bugdetData[0] != undefined?bugdetData[0].replace(/\s+/g,'') != ''?bugdetData[0]:this.uploadLists[this.nowRowIndex+i].blno:this.uploadLists[this.nowRowIndex+i].blno
                            this.uploadLists[this.nowRowIndex+i].ctnrno = bugdetData[1] != undefined?bugdetData[1].replace(/\s+/g,'') != ''?bugdetData[1]:this.uploadLists[this.nowRowIndex+i].ctnrno:this.uploadLists[this.nowRowIndex+i].ctnrno
                            this.uploadLists[this.nowRowIndex+i].vslname = bugdetData[2] != undefined?bugdetData[2].replace(/\s+/g,'') != ''?bugdetData[2]:this.uploadLists[this.nowRowIndex+i].vslname:this.uploadLists[this.nowRowIndex+i].vslname
                            this.uploadLists[this.nowRowIndex+i].remark = bugdetData[3] != undefined?bugdetData[3].replace(/\s+/g,'') != ''?bugdetData[3].substring(0,30):this.uploadLists[this.nowRowIndex+i].remark:this.uploadLists[this.nowRowIndex+i].remark
                        }else if(this.nowFocus == 'ctnrno'){
                            this.uploadLists[this.nowRowIndex+i].ctnrno = bugdetData[0] != undefined?bugdetData[0].replace(/\s+/g,'') != ''?bugdetData[0]:this.uploadLists[this.nowRowIndex+i].ctnrno:this.uploadLists[this.nowRowIndex+i].ctnrno
                            this.uploadLists[this.nowRowIndex+i].vslname = bugdetData[1] != undefined?bugdetData[1].replace(/\s+/g,'') != ''?bugdetData[1]:this.uploadLists[this.nowRowIndex+i].vslname:this.uploadLists[this.nowRowIndex+i].vslname
                            this.uploadLists[this.nowRowIndex+i].remark = bugdetData[2] != undefined?bugdetData[2].replace(/\s+/g,'') != ''?bugdetData[2].substring(0,30):this.uploadLists[this.nowRowIndex+i].remark:this.uploadLists[this.nowRowIndex+i].remark
                        }else if(this.nowFocus == 'vslname'){
                            this.uploadLists[this.nowRowIndex+i].vslname = bugdetData[0] != undefined?bugdetData[0].replace(/\s+/g,'') != ''?bugdetData[0]:this.uploadLists[this.nowRowIndex+i].vslname:this.uploadLists[this.nowRowIndex+i].vslname
                            this.uploadLists[this.nowRowIndex+i].remark = bugdetData[1] != undefined?bugdetData[1].replace(/\s+/g,'') != ''?bugdetData[1].substring(0,30):this.uploadLists[this.nowRowIndex+i].remark:this.uploadLists[this.nowRowIndex+i].remark
                        }else if(this.nowFocus == 'remark'){
                            this.uploadLists[this.nowRowIndex+i].remark = bugdetData[0] != undefined?bugdetData[0].replace(/\s+/g,'') != ''?bugdetData[0].substring(0,30):this.uploadLists[this.nowRowIndex+i].remark:this.uploadLists[this.nowRowIndex+i].remark
                        }
                    }
                }

                
                for (let i = 0; i < this.uploadLists.length; i++) {
                    var item = JSON.parse(JSON.stringify(this.uploadLists[i]))
                    var newItem = JSON.parse(JSON.stringify(this.uploadLists[i]))
                    if(item.ieid){
                        if(item.ieid.replace(/\s+/g,'') == '进口' || item.ieid.replace(/\s+/g,'') == 'I' || item.ieid.replace(/\s+/g,'') == 'i'){
                            newItem.ieid = 'I'
                            this.uploadLists.splice(i,1,newItem)
                        }else if(item.ieid.replace(/\s+/g,'') == '出口' || item.ieid.replace(/\s+/g,'') == 'E' || item.ieid.replace(/\s+/g,'') == 'e'){
                            newItem.ieid = 'E'
                            this.uploadLists.splice(i,1,newItem)
                        }
                    }
                }
                e.preventDefault()
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
                if(item.ieid.replace(/\s+/g,'') != '' || item.blno.replace(/\s+/g,'') != ''  || item.ctnrno.replace(/\s+/g,'') != '' || item.vslname.replace(/\s+/g,'') != '' || item.remark.replace(/\s+/g,'') != ''){
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
                if(!item.ieid.replace(/\s+/g,"") && !item.blno.replace(/\s+/g,"") && !item.ctnrno.replace(/\s+/g,"") && !item.vslname.replace(/\s+/g,"") && !item.remark.replace(/\s+/g,"")){
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
                    if(updown.ieid.replace(/\s+/g,'') == ''){
                        //进出口为空
                        updown.errorMsg = '进出口不可为空'
                        isgoDown= true
                    }else if(updown.blno.replace(/\s+/g,'') == '' && updown.ctnrno.replace(/\s+/g,'') == ''){
                        //单号并且箱号未填
                        updown.errorMsg = '单号和箱号必填其一'
                        isgoDown= true
                    }else if(updown.blno.replace(/\s+/g,'')){ //如果填了单号
                        var reg = /^[A-Za-z]{3}U\d{7}$/
                        if(reg.test(updown.blno.replace(/\s+/g,''))){ //则看一下单号是否是箱号
                            updown.errorMsg = this.$t('messages.boxNumber')
                            isgoDown= true
                        }
                        if(updown.blno.replace(/\s+/g,'').length <= 4){ // 看一下是否规范
                            updown.errorMsg = this.$t('messages.ladingIrr')
                            isgoDown= true
                        }
                    }else if(updown.ctnrno.replace(/\s+/g,'')){ //说明只填了箱号
                        if(updown.ctnrno.replace(/\s+/g,'').length !== 11){
                            updown.errorMsg = this.$t('messages.incorrect')
                            isgoDown= true
                        }
                    }
                    for (let p = 0; p < this.uploadLists.length; p++) {
                        //进出口相同
                        if(updown.ieid.replace(/\s+/g,'') == this.uploadLists[p].ieid.replace(/\s+/g,'') && this.uploadLists[p].ieid.replace(/\s+/g,'')){
                            // 如果都有单号则比较单号是否相同
                            if(updown.blno.replace(/\s+/g,'') && this.uploadLists[p].blno.replace(/\s+/g,'') && updown.blno.replace(/\s+/g,'') == this.uploadLists[p].blno.replace(/\s+/g,'')){
                                billNumberList.push(p+1)
                            }else if(!updown.blno && updown.ctnrno.replace(/\s+/g,'')){
                                //如果没有单号 只有箱号 则在只填了箱号得条件里看箱号是否相同
                                if(!this.uploadLists[p].blno && this.uploadLists[p].ctnrno.replace(/\s+/g,'')){
                                    if(updown.ctnrno.replace(/\s+/g,'') == this.uploadLists[p].ctnrno.replace(/\s+/g,'')){
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
            this.$Axios.post(that.GLOBAL.url + `trace/dock/dockBatchTrack?userid=${that.userId}`,voList,{
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
                    that.orderByIndex = 0
                    that.orderStr = 'SEARCH_TIME'
                    that.sort = 'DESC'
                    that.searchStr = ''
                    that.getsCnshaList()
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
            var cnshaDate = JSON.parse(JSON.stringify(this.cnshaDate))
            if(this.checkAllAdd){ //全选
                for (let i = 0; i < cnshaDate.length; i++) {
                    cnshaDate[i]['checked'] = true
                }
            }else{ //取消全选
                for (let i = 0; i < cnshaDate.length; i++) {
                    cnshaDate[i]['checked'] = false
                }
            }
            this.cnshaDate = cnshaDate
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
                var fd = {
                    id: item.id,
                    recordId: item.recordId ? item.recordId : '',
                }
                this.checkGroup.push(fd)
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
            for (let i = 0; i < this.cnshaDate.length; i++) {
                if(this.cnshaDate[i].checked) { //遍历数组找出选择的
                    this.checkGroup.push(this.cnshaDate[i].id)
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
                var paramStr = that.checkGroup.join(',')
                this.$Axios.get(that.GLOBAL.url + "trace/dock/delete?userid=" + that.userId + '&paramStr=' + paramStr ,{
                    headers: {
                        Authorization: this.getToken()
                },
                }).then(res => {
                    if (res.data.status == 1) {
                        that.dialogPopup = false
                        that.getsCnshaList()
                        that.$message({
                          message: that.$t('messages.deleteSuccess'),
                          type: "success",
                          customClass:'base-message-zindex'
                        })
                    }
                })
            }else if(that.dialogText == '录入备注') {
                this.$Axios.get(that.GLOBAL.url + "trace/dock/updareMark?id=" + that.checkGroup[0].id + '&recordId=' + that.checkGroup[0].recordId + '&remark=' + that.textarea,{
                    headers: {
                        Authorization: this.getToken()
                },
                }).then(res => {
                    if (res.data.status == 1) {
                        that.dialogPopup = false //关闭弹窗
                        that.getsCnshaList()
                    }
                })
            }
        },
        //点击官网
        goWebsite(item){
            if(item.shipURL){
                window.open(item.shipURL, '_blank')
            }
        },
        //单击列表
        portCnshaDetail(item) {
            var scrollPos
            if (typeof window.pageYOffset != 'undefined') {
                scrollPos = window.pageYOffset
            }
            else if (typeof document.compatMode != 'undefined' && document.compatMode != 'BackCompat') {
                scrollPos = document.documentElement.scrollTop
            }else if (typeof document.body != 'undefined') {
                scrollPos = document.body.scrollTop
            }
            if(item.currentNode) { //则可以进详情页
                var referenceno = item.referenceno ? item.referenceno : 'LiNone'
                var setParamDate = {
                    referenceno: referenceno,
                    id: item.id,
                    recordId: item.recordId,
                    ieid: item.ieid,
                    cnshaTrack: '1', //1是上海港区 2 是跟踪
                    pageSize: this.pageSize, //条数
                    orderStr: this.orderStr, //排序参数
                    sort: this.sort, //正序倒序
                    sortPa: this.sortPa,
                    orderByIndex: this.orderByIndex,
                    scrollPos: scrollPos,
                }
                var paramDate = this.setParams(setParamDate)
                this.$router.push({
                     path: `/port-cnsha-detail/${referenceno}/${paramDate}`,
                });
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
                        if(that.total == that.cnshaDate.length){
                        }else{
                            //每次增加count数
                            that.pageSize = that.pageSize + that.count
                            that.getsCnshaList('1')
                        }
                    }
                }
                
            })
        },
        //监听用户的刷新事件 按 F5 或者单机右键 重新加载
        test(e) {
            sessionStorage.removeItem("sortRecords");
        },
        //只争对进口
        getIStatusIndex(data){
            let weekList = {
                'BKCF': 1, //'订舱',
                'EPRL': 2, //'放箱',
                'STSP': 3, //'提空箱',
                'FCGI': 4, //'返场',
                'CGGI': 5, //'入货',
                'CLOD': 6, //'封箱',
                'CYTC': 7, //'集港',
                'GITM': 8, //'进港',
                'DSCH': 8, //'卸船',
                'PASS': 9, //'海放',
                'TMPS': 10, //'码放',
                'PRLD': 11, //'配载',
                'LOBD': 12, //'上船',
                'STCS': 12, //'提货',
                'DLPT': 13, //'离港',
                'TSGT': 13.5, //中转进场
                'TSDP': 14, //'中转开航',
                'TSLB': 15, //'中转装船',
                'TSBA': 16, //'中转抵港',
                'TSCA': 16.5, //中转停泊
                'TSDC': 17, //'中转卸船',
                'BDAR': 18, //'到港',
                'POCA': 18.5, //停泊
                'IRLB': 20, //铁路
                'IRDP': 21, //铁路
                'IRAR': 22, //铁路
                'IRDS': 23, //铁路
                'RCVE': 25, //'还空',
                'SUOT': 26, //'退关',
                'CUIP': 27, //'查验',
            };
            if (weekList[data]) {
                return weekList[data]
            } else {
                return ''
            }
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
                    if(!newVal && !(JSON.parse(this.getCookie("currentUser")).isRead)){
                        this.$parent.handleClickUseCourse(1)
                    }
                }
            }
        },
        uploadDialogVisible:{
            handler(newVal, oldVal) {
                if(newVal){
                    //监听用户Ctrl+v操作
                    document.addEventListener("paste",this.copyData)
                }else{
                    //销毁监听用户Ctrl+v操作
                    document.removeEventListener("paste",this.copyData)
                }
            }
        }
    },

    mounted() {
        var that = this
        that.connect()
        that.$refs.shangHaiFomatt.style.minHeight = document.documentElement.clientHeight - 300 + 'px'

        if(that.userId){
            //说明详情页回来的
            if(that.$route.params && this.$route.params.inForm){
                that.pageSize = that.$route.params.inForm.pageSize ? that.$route.params.inForm.pageSize : that.count
    
                that.orderStr = that.$route.params.inForm.orderStr
                that.sort = that.$route.params.inForm.sort
                that.orderByIndex = that.$route.params.inForm.orderByIndex
                that.sortPa = that.$route.params.inForm.sortPa
                that.changeSort(that.orderStr, that.orderByIndex,1)
            }else{
                that.changeSort(that.orderStr, that.orderByIndex,1)
            }
        }else{
            if(that.$route.params && this.$route.params.inForm){
                that.getsCnshaList()
            }
        }
        //监听滚动事件
        that.scrollBottom()

        //监听用户的刷新
        window.addEventListener('beforeunload', e => this.test(e))
    },
    destroyed() {
        window.removeEventListener('beforeunload', e => this.test(e)) //销毁卸载注册的事件
    }
}
</script>