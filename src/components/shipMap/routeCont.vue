<style lang="scss">
    #routeCont{
        .customCon{
            display: flex;
            align-items: center;
            margin-top: 12px;
            width: 220px;
            .custiom_button{
                width: 63px;
                height: 35px;
                line-height: 35px;
                margin-left: 13px;
                text-align: center;
                color: #282828;
                border: 1px solid #dcdcdc;
                cursor: pointer;
                border-radius: 5px;
            }
            .tes_bittus{
                border: 0;
            }
        }
        .el-input__inner{
            border-radius: 5px;
            height: 35px;
            line-height: 35px;
        }
        .el-icon-time:before{
            display: none;
        }
        .ship_route{
            display: flex;
            align-items: center;
            width: 100%;
            height: 40px;
            position: relative;
            .ship_name{
                width: 82%;
                padding-left: 5px;
            }
            .t_echarts{
                width: 14px;
                height: 14px;
                background-image: url('./images/t_echarts.png');
                background-repeat: no-repeat;
                background-size: 100% 100%;
                cursor: pointer;
                position: absolute;
                right: 2px;
                top: 50%;
                transform: translateY(-50%);
            }
            .icon_download{
                font-size: 16px;
                cursor: pointer;
            }
        }
        .ship_select{
            .ship_select_route{
                display: flex;
                align-items: center;
                width: 100%;
                height: 30px;
                .ship_name{
                    width: 82%;
                    padding-left: 5px;
                }
                .t_echarts{
                    width: 14px;
                    height: 14px;
                    background-image: url('./images/t_echarts.png');
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                    // margin-right: 10px;
                    cursor: pointer;
                }
                .icon_download{
                    font-size: 16px;
                    cursor: pointer;
                }
                .icon_close{
                    font-size: 16px;
                    cursor: pointer;
                    margin-left: 10px;
                }
            }
        }
        .el-icon-time:before{
            display: none;
        }

    }
    
</style>
<template>
    <div id="routeCont" style="width:100%;height:100%">
        <div class="customCon">
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
            <p class="custiom_button tes_bittus"></p>
        </div>
        <div class="customCon">
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
            <p class="custiom_button" @click="clickTime">确定</p>
        </div>
        <div class="ship_route">
            <div class="ship_name">{{first_shipName}}</div>
            <div class="t_echarts" @click="clickEcharts(1)"></div>
            <!-- <div class="el-icon-download icon_download" @click="downLode()"></div> -->
        </div>
        <div class="ship_select">
            <div class="ship_select_route" v-if="isShipName">
                <div class="ship_name">{{sconed_shipName}}</div>
                <div class="t_echarts" @click="clickEcharts(2)"></div>
                <!-- <div class="el-icon-download icon_download" @click="downLode()"></div> -->
                <div class="el-icon-close icon_close" @click="isClickName()"></div>
            </div>
            <el-select
                v-model="sconed_mmsi"
                placeholder="请选择"
                filterable
                remote
                :remote-method="remoteSelect"
                @focus="focusSelect"
                @change="changeSelect"
                v-else
                style="width:100%"
            >
                <el-option
                    v-for="item in shippCompany"
                    :key="item.mmsi"
                    :label="item.name"
                    :value="item.mmsi">
                    <span>{{item.name + '(' + item.mmsi + ')'}}</span>
                </el-option>
            </el-select>
        </div>
    </div>
</template>
<script>

export default {
    name: "routeCont",
    props: [
        'routeInfor',
        'shipObject'
    ],
    data() {
        return {
            clearable: false, //不显示清除按钮
            isShipName: false, //是否选择船名
            startTime: '', //开始时间
            endTime: '', //结束时间
            traceStart: {}, //开始时间范围
            traceEnd: {}, //结束时间范围
            shippCompany: [], //船名
            first_shipName: '', //第一艘船的船名
            frist_id: '', //船舶轨迹第一个默认id
            frist_mmsi: '', //船舶轨迹第一个默认mmsi
            sconed_shipName: '', //船名
            sconed_mmsi: '', //mmsi 船的mmsi
            sconed_id: '', //mmsi 船的id
        }
    },
    watch: {
        routeInfor:{
            handler(val){
                if(val && val.length > 0){
                    this.startTime = val[0].startTime
                    this.endTime = val[0].endTime
                }
            },
            immediate: true,
        },
        shipObject:{
            handler(val){
                console.log(val,'shipObjectshipObjectshipObject')
                this.frist_id = val.id
                this.frist_mmsi = val.mmsi
                this.first_shipName = val.nameEn
            },
            immediate: true
        }
    },

    methods: {
        //select remote
        remoteSelect(val){
            var that = this
            this.$Axios.get(this.GLOBAL.url + "schedules/web/vessels?kw=" + val,{
                headers: {
                    Authorization: this.getToken()
            },
            }).then(res => {
                if (res.data.status == 1) {
                    that.shippCompany = res.data.content
                }
            }).catch((err)=>{})
        },
        //select focus
        focusSelect(){
            var that = this
            that.shippCompany = []
            this.$Axios.get(this.GLOBAL.url + "schedules/web/vessels?kw=" + that.sconed_mmsi,{
                headers: {
                    Authorization: this.getToken()
            },
            }).then(res => {
                if (res.data.status == 1) {
                    that.shippCompany = res.data.content
                }
            }).catch((err)=>{})
        },
        //select change
        changeSelect(val){
            if(val){
                if(val == this.frist_mmsi){
                    this.sconed_shipName = '' //船名
                    this.sconed_mmsi = '' //mmsi 船的mmsi
                    this.sconed_id = '' //mmsi 船的id
                    var pop = 'route.accordPop'
                    this.$emit('accordPop',pop)
                }else{
                    var that = this
                    for (let i = 0; i < this.shippCompany.length; i++) {
                        if(this.shippCompany[i].mmsi == val){
                            this.sconed_shipName = this.shippCompany[i].name
                        }
                    }
                    var query = {
                        mmsi: this.sconed_mmsi,
                        startTime: this.startTime, //开始时间
                        endTime: this.endTime, //结束时间
                    }
                    this.$emit('traContrast',query)
                    this.isShipName = true
                }
            }
        },
        //关闭当前选择得船
        isClickName(){
            this.sconed_shipName = '', //船名
            this.sconed_mmsi = '', //mmsi 船的mmsi
            this.sconed_id = '', //mmsi 船的id
            this.isShipName = false
            this.$emit('clearContrast')
        },
        //点击图像//出现 echarts
        clickEcharts(index){
            var echarInfor = {
                startTime: this.startTime, //开始时间
                endTime: this.endTime, //结束时间
                isRoute: 2, //2代表时从船舶轨迹窗口过去的
                id: index == 1 ? this.frist_id : this.sconed_id,  // index 1 点击的第一个  index 2 点击的第二个
                mmsi: index == 1 ? this.frist_mmsi : this.sconed_mmsi,  // index 1 点击的第一个  index 2 点击的第二个
            }
            this.$emit("clickEcharts",echarInfor)
        },
        //下载文件
        downLode(){
            
        },
        //点击确认时间
        clickTime(){
            var TimeSet = {
                startTime:this.startTime,
                endTime:this.endTime,
            }
            this.$emit('clickTime',TimeSet)
        },
        //计算开始时间
        changeStart(){
            if(this.startTime !== null){ //当前值为空 也会进行判断 所以条件最好不要非空验证
                this.traceEnd = {
                    disabledDate: (time) => {
                        return time.getTime() < new Date(this.startTime).getTime() //小于开始时间的不选
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
                        return time.getTime() > new Date(this.endTime).getTime() //小于开始时间的不选
                    }
                }
            }else{
                this.traceStart = {}
            }    
        },
    },
    mounted() {
        this.changeEnd()
        this.changeStart()
    },
};
</script>