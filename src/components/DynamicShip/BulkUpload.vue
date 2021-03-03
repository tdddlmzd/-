<style lang="scss">
.BulkUpload{
    margin: 20px 0;
    background: #fff;
    border-radius: 4px;
    border: solid 1px #f2f2f2;
    padding: 0 20px;
    .detail_title{
        padding: 20px 0 26px;
        border-bottom: solid 1px #f2f2f2;
        display: flex;
        .back_icon{
            width: 6px;
            height: 10px;
            background: url('../../assets/images/cargo/back_icon.png') no-repeat;
            background-size: 6px 10px;
            margin-right: 10px;
            margin-top: 1px;
            cursor: pointer;
            &:hover{
                background: url('../../assets/images/cargo/back_icon_hover.png') no-repeat;
                background-size: 6px 10px;
            }
        }
        .detail_title_name{
            font-size: 12px;
            line-height: 12px;
            color: #26b4b2;
            font-weight: 600;
            position: relative;
            &::after{
                content: '';
                display: block;
                position: absolute;
                bottom: -6px;
                left: 0;
                width: 100%;
                height: 2px;
                z-index: 10;
                background: #26b4b2;
            }
        }
    }
    .table_btn_warp{
        padding: 20px 0;
        display: flex;
        justify-content: space-between;
        .btn_warp_left{
            display: flex;
            .choose_file_btn{
                width: 106px;
                height: 24px;
                background-color: #26b4b2;
                border-radius: 12px;
                margin-right: 20px;
                font-size: 12px;
                line-height: 24px;
                color: #fff;
                text-align: center;
                cursor: pointer;
                user-select: none;
                &:hover{
                    background-color: #51c3c1;
                }
            }
            .download_btn{
                height: 12px;
                line-height: 12px;
                font-size: 12px;
                margin-top: 5px;
                color: #007ce3;
                cursor: pointer;
                user-select: none;
            }
        }
        .delete_btn{
            width: 90px;
            height: 24px;
            border-radius: 12px;
            border: solid 1px #f2f2f2;
            font-size: 12px;
            user-select: none;
            line-height: 22px;
            color: #282828;
            text-align: center;
            cursor: pointer;
            &:hover{
                background-color: #f2f2f2;
            }
        }
    }
    .el-table{
        color: #282828;
        font-size: 12px;
        .cell{
            line-height: 32px;
        }
        &::before{
            background-color: #f2f2f2;
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
            position: relative;
            z-index: 10;
        }
        .errorBorderRed td:first-of-type{
            border-left: 1px solid #ff7676 !important;
        }
        .errorBorderRed td:last-of-type{
            border-right: 1px solid #ff7676 !important;
        }
        .errorBorderRed:first-of-type td{
            border-top: 2px solid #ff7676 !important;
        }
        .errorBorderRed:last-of-type td{
            border-bottom: 2px solid #ff7676 !important;
        }
        .columnPadding{
            th{
                background: #f9fafc !important;
                color: #282828 !important;
                font-weight: normal !important;
            }
        }
        th.is-leaf{
            border: none;
        }
        .el-table__row:hover td{
            background: transparent !important;
        }
        tr{
            height: 40px;
        }
        th,td{
            padding: 3px 0;
        }
        th>.cell,td>.cell{
            padding: 0 8px;
        }
        .el-input__inner{
            padding: 0 !important;
            border: none;
            font-size: 12px;
            height: 32px;
            line-height: 32px;
            background: rgba(0, 0, 0, 0);
            color: #282828;
        }
        .el-select__caret{
            display: none;
        }
        .date_picker{
            text-overflow: ellipsis;
            width: 100%;
            height: 32px;
            overflow: hidden;
            white-space: nowrap;
            position: relative;
            .dyEtd_prefix{
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
                opacity: 0;
                .el-input__inner{
                    cursor: pointer;
                }
                .el-input__prefix{
                    display: none;
                }
            }
        }
    }
    .btn_warp{
        padding: 24px 0 20px;
        .btn_Submit{
            margin: 0 auto;
            width: 120px;
            height: 30px;
            border-radius: 15px;
            font-size: 12px;
            line-height: 30px;
            background-color: #26b4b2;
            color: #fff;
            user-select: none;
            text-align: center;
            cursor: pointer;
            &:hover{
                background-color: #51c3c1;
            }
        }
    }
}
</style>
<template>
    <div>
        <!-- 船舶详情批量上传页面 -->
        <Loading v-if="loading"></Loading>
        <div class="BulkUpload">
            <div class="detail_title">
                <div class="back_icon" @click="goDynamicShipDetail"></div>
                <div class="detail_title_name">{{$t('task.VesselDetails')}}</div>
            </div>
            <div class="table_btn_warp">
                <div class="btn_warp_left">
                    <!-- 选择文件上传按钮 -->
                    <el-upload
                    action=""
                    :show-file-list="false"
                    :file-list="fileList"
                    :http-request="uploadFile">
                        <div class="choose_file_btn">{{$t('task.chooseFile')}}</div>
                    </el-upload>
                    <!-- 模板下载按钮 -->
                    <div class="download_btn" @click="handleClickTemplate">{{$t('task.Template')}}</div>
                </div>
                <!-- 删除按钮 -->
                <div class="delete_btn" @click="handleClickDelete">{{$t('task.delete')}}</div>
            </div>
            <!-- 批量上传表格 -->
            <el-table
                :data="uploadLists"
                style="width: 100%;"
                border
                :header-cell-style="{background:'#3bafda',color:'#ffffff',fontSize:'12px'}"
                :row-class-name="tabRowClassName"
                @selection-change="handleSelectionChange"
                tooltip-effect="dark"
                ref="table"
                header-row-class-name="columnPadding"
            >
                <el-table-column type="selection" width="32">
                </el-table-column>
                <el-table-column prop="status" :label="$t('table.type')" align="left" width="60" :resizable="false">
                    <template slot-scope="scope">
                        <span v-if="scope.row.type == 'TEST'">{{scope.row.type}}</span>
                        <el-input 
                            v-else
                            v-model="scope.row.type" 
                        >
                        </el-input>
                    </template>
                </el-table-column>
                <el-table-column prop="pol" :label="$t('table.pol')" align="left" min-width="100" :resizable="false">
                    <template slot-scope="scope">
                        <el-select
                            remote
                            filterable
                            v-model="scope.row.pol"
                            placeholder=""
                            @focus="portStartFocus"
                            @change="portStartChange($event,scope.row)"
                            style="width:100%"
                        >
                            <el-option
                                v-for="item in portStartList"
                                :key="item.id"
                                :label="item.portEn"
                                :value="item.portEn"
                                v-title='item.portEn+"("+ item.portCode+")"'
                            >
                                <span>{{item.portEn+"("+ item.portCode+")" }}</span>
                            </el-option>
                        </el-select>
                    </template>
                </el-table-column>
                <el-table-column prop="carrier" :label="$t('table.carrier')" align="left" min-width="80" :resizable="false">
                    <template slot-scope="scope">
                        <el-select
                            remote
                            filterable
                            v-model="scope.row.carrier"
                            placeholder=""
                            :remote-method="companyNameRemote"
                            @focus="companyNameFocus"
                            @change="companyNameChange($event,scope.row)"
                            style="width:100%"
                        >
                            <el-option
                                v-for="item in companyNameList"
                                :key="item.companyName"
                                :label="item.companyName"
                                :value="item.companyName"
                            >
                            </el-option>
                        </el-select>
                    </template>          
                </el-table-column>
                <el-table-column prop="routeCode" :label="$t('table.RouteCode')" align="left" min-width="80" :resizable="false">
                    <template slot-scope="scope">
                        <el-select 
                            remote  
                            filterable  
                            v-model="scope.row.routeCode" 
                            placeholder=""
                            :remote-method="lineCodeRemote"
                            @focus="lineCodeFocus"
                            @change="lineCodeChange($event,scope.row)"
                            style="width:100%"
                        >
                            <el-option
                                v-for="item in lineCodeList"
                                :key="item.id"
                                :label="item.routeCode"
                                :value="item.routeCode"
                                v-title="item.routeCode"
                            >
                            </el-option>
                        </el-select> 
                    </template>          
                </el-table-column>
                <el-table-column prop="vessel" :label="$t('table.vessel')" align="left" min-width="120" :resizable="false">
                    <template slot-scope="scope">
                        <el-input 
                            v-model="scope.row.vessel" 
                        >
                        </el-input> 
                    </template>          
                </el-table-column>
                <el-table-column prop="voyage" :label="$t('table.ExportVoyage')" align="left" width="140" :resizable="false">
                    <template slot-scope="scope">
                        <el-input 
                            v-model="scope.row.voyage" 
                        >
                        </el-input> 
                    </template>          
                </el-table-column>
                <el-table-column prop="dyDteString" :label="$t('table.dynamicETD')" align="left" width="140" :resizable="false">
                    <template slot-scope="scope">
                        <div class="date_picker">
                            {{scope.row.dyDteString}}
                            <el-date-picker
                                class="dyEtd_prefix"
                                type="datetime"
                                v-model="dyDteString"
                                style="width:100%"
                                value-format="yyyy-MM-dd HH:mm:ss"
                                :clearable="false"
                                :editable="false"
                                placeholder=""
                                @change="datePickerChange($event,scope.$index)"
                            >   
                            </el-date-picker> 
                        </div>
                    </template>          
                </el-table-column>
                <el-table-column prop="uploadLoadTime" :label="$t('table.UploadTime')" align="left" width="160" :resizable="false">
                    <template slot-scope="scope">
                        {{scope.row.uploadLoadTime}}
                        <el-tooltip v-if="scope.row.errorMsg" :content="scope.row.errorMsg" placement="bottom" popper-class="teshu_tooip">
                            <img class="error_icon" src="../../assets/images/error_icon.png">
                        </el-tooltip>
                    </template>  
                </el-table-column>
            </el-table>
            <!-- 上传按钮 -->
            <div class="btn_warp">
                <div class="btn_Submit" @click="handleClickUpload">{{$t('task.Upload')}}</div>
            </div>
        </div>
    </div>  
</template>

<script>
    import Loading from "@components/loading";
    import ThePagination from "@components/ThePagination";
    export default {
        data(){
            return {
                userId: '',
                userInfo:
                this.getCookie("authId") !== null && this.getCookie("authId") !== "" && this.getCookie("authId") !== undefined
                ? this.getCookie("authId")
                : "",
                loading: false,
                dyDteString: '',
                multipleSelection: [],//全选列表
                uploadLists: [],//批量上传表格
                portStartList: [],//起运港列表
                companyNameList: [],//船公司列表
                lineCodeList: [],//航线代码列表
                fileList: []
            }
        },
        methods: {
            // 初始化获取历史错误数据
            getUploadFailedRecord(){
                this.loading = true
                this.$Axios.get(this.GLOBAL.url + `expert/dynamic/getUploadFailedRecord?userId=${this.userId}`,{
                    headers: {
                        Authorization: this.getToken()
                },
                }).then(res => {
                    if(res.data.status == 1){
                        this.uploadLists = res.data.content
                        this.loading = false
                    }
                })
            },
            // 返回动态船舶详情页面
            goDynamicShipDetail(){
                this.$parent.changeComponents('List')
            },
            //自定义文件上传
            uploadFile(param){
                let extension = param.file.name.split('.')[1] === 'xls'
                let extension2 = param.file.name.split('.')[1] === 'xlsx'
                if(!extension && !extension2){
                    this.$message({//上传模板错误
                        message: this.$t('task.UploadError'),
                        type: "warning",
                        customClass: "base-message-zindex"
                    });
                    return
                }
                var fileObj = param.file
                var file = new FormData()
                file.append("file", fileObj)
                file.append('userId', this.userId)
                this.loading = true
                this.$Axios.post(this.GLOBAL.url + `expert/dynamic/excelUpload`, file,{
                    headers: {
                        Authorization: this.getToken(),
                        'Content-Type': 'multipart/form-data'
                },
                }).then(res => {
                    if(res.data.status == 1){
                        this.$message({//上传成功
                            message: this.$t('task.UploadSucceeded'),
                            type: "success",
                            customClass: "base-message-zindex"
                        });
                    }else if(res.data.status == 7){
                        this.$message({//上传模板错误
                            message: this.$t('task.UploadError'),
                            type: "warning",
                            customClass: "base-message-zindex"
                        });
                    }else if(res.data.status == 0){
                        this.$message({//N条错误信息
                            message: res.data.message + this.$t('task.errorMessage'),
                            type: "warning",
                            customClass: "base-message-zindex"
                        });
                    }else{
                        this.$message({//上传失败
                            message: this.$t('task.UploadFailed'),
                            type: "error",
                            customClass: "base-message-zindex"
                        });
                    }
                    this.uploadLists = res.data.content
                    this.loading = false
                }).catch((err)=>{
                    this.$message({//上传失败
                        message: this.$t('task.UploadFailed'),
                        type: "error",
                        customClass: "base-message-zindex"
                    });
                    this.loading = false
                })
            },
            // 模板下载按钮
            handleClickTemplate(){
                window.location.href = this.GLOBAL.excelUrl + 'excel/%E8%88%B9%E8%88%B6%E8%88%B9%E6%9C%9F%E6%89%B9%E9%87%8F%E4%B8%8A%E4%BC%A0.xlsx'
            },
            // 删除按钮
            handleClickDelete(){
                if(this.multipleSelection.length == 0){
                    this.$message({//请选择一条或者多条进行删除
                        message: this.$t('task.chooseDelete'),
                        type: "warning",
                        customClass: "base-message-zindex"
                    });
                    return
                }
                var ids = ''
                var indexList = []
                for (let i = 0; i < this.multipleSelection.length; i++) {
                    var index = this.multipleSelection[i].index
                    indexList.push(index)
                    ids += (this.multipleSelection[i].id.toString() + ',')
                }
                indexList.sort((a, b)=>{ return b - a});
                for (let i = 0; i < indexList.length; i++) {
                    this.uploadLists.splice(indexList[i], 1)
                }
                if(ids.length > 0){
                    ids = ids.substr(0, ids.length - 1)
                }
                this.$Axios.get(this.GLOBAL.url + `expert/dynamic/delFailedRecord?ids=${ids}`, {
                    headers: {
                        Authorization: this.getToken()
                },
                }).then(res => {
                    if(res.data.status == 1){
                    }
                })
            },
            // 上传按钮
            handleClickUpload(){
                if(this.uploadLists.length !== 0){
                    this.loading = true
                    this.$Axios.post(this.GLOBAL.url + `expert/dynamic/upload`, this.uploadLists, {
                        headers: {
                            Authorization: this.getToken()
                    },
                    }).then(res => {
                        if(res.data.status == 1){
                            this.uploadLists = res.data.content
                            this.$message({//上传成功
                                message: this.$t('task.UploadSucceeded'),
                                type: "success",
                                customClass: "base-message-zindex"
                            }); 
                        }else if(res.data.status == 0){
                            this.$message({//N条错误信息
                                message: res.data.message + this.$t('task.errorMessage'),
                                type: "warning",
                                customClass: "base-message-zindex"
                            });
                        }
                        this.loading = false
                    })
                }else{
                    this.$message({//暂无错误数据
                        message: this.$t('task.NoErrorData'),
                        type: "warning",
                        customClass: "base-message-zindex"
                    }); 
                }
            },
            //全选
            handleSelectionChange(val){
                this.multipleSelection = val;
            },
            //批量上传表格行样式
            tabRowClassName({row, rowIndex}){
                row.index = rowIndex;
                if(row.errorMsg){
                    return 'errorBorderRed'
                }
            },
             //起运港 foucs
            portStartFocus() {
                //获取航线专家起始港下拉框
                this.$Axios.get(this.GLOBAL.url + `expert/mission/pol?userId=${this.userId}`,{
                    headers: {
                        Authorization: this.getToken()
                },
                }).then(res => {
                    if(res.data.status == 1){
                        this.portStartList = res.data.content
                    }
                }).catch((err)=>{
                    
                })
            },
            //起运港 change
            portStartChange(val,item) {
                if(val){
                    for (let i = 0; i < this.portStartList.length; i++) {
                        if(this.portStartList[i].portEn == val){
                            item.polCode = this.portStartList[i].portCode
                            item.polId = this.portStartList[i].id
                            item.polCityId = this.portStartList[i].cityId
                        }
                    }
                }else{
                    item.polCode = ''
                    item.polId = ''
                    item.polCityId = ''
                }
            },
            //船公司搜索      
            companyNameRemote(value){
                //获取航线专家起始港下拉框
                this.$Axios.get(this.GLOBAL.url + `expert/path/getCompany?userId=${this.userId}&companyName=${value}`,{
                    headers: {
                        Authorization: this.getToken()
                },
                }).then(res => {
                    if(res.data.status == 1){
                        this.companyNameList = res.data.content
                    }
                }).catch((err)=>{
                    
                })
            },
            //船公司Focus事件
            companyNameFocus(){
                //获取航线专家起始港下拉框
                this.$Axios.get(this.GLOBAL.url + `expert/path/getCompany?userId=${this.userId}`,{
                    headers: {
                        Authorization: this.getToken()
                },
                }).then(res => {
                    if(res.data.status == 1){
                        this.companyNameList = res.data.content
                    }
                }).catch((err)=>{
                    
                })
            },
            //船公司change事件
            companyNameChange(value,item){
                if(value === ''){
                    item.scac = ''
                }else{
                    for (let i = 0; i < this.companyNameList.length; i++) {
                        if(this.companyNameList[i].companyName === value){
                            item.scac = this.companyNameList[i].scac
                        }
                    }
                }    
            },
            //新增路径航线代码搜索
            lineCodeRemote(value){
                var that = this
                $.ajax({
                    url: that.GLOBAL.url + `schedules/route/queryRouteByScac?routeCode=${value}&scac=${this.scac}`,
                    type: "GET",
                    headers: {
                        Authorization: that.getToken()
                    },
                    success: function(data) {
                        if (data.status == 1) {
                            that.lineCodeList = data.content;
                        }
                    },
                    error: function(e) {
                    },
                });
            },
            //新增路径航线代码focus事件
            lineCodeFocus(){
                var that = this
                $.ajax({
                    url: that.GLOBAL.url + `schedules/route/queryRouteByScac?scac=${this.scac}`,
                    type: "GET",
                    headers: {
                        Authorization: that.getToken()
                    },
                    success: function(data) {
                        if (data.status == 1) {
                            that.lineCodeList = data.content;
                        }
                    },
                    error: function(e) {
                    },
                });
            },
            //新增路径航线代码change事件
            lineCodeChange(value,item){
                if(value){
                    for (let i = 0; i < this.lineCodeList.length; i++) {
                        if(this.lineCodeList[i].routeCode == value){
                            item.staticId = this.lineCodeList[i].id
                            item.disPlayName = this.lineCodeList[i].disPlayName ? this.lineCodeList[i].disPlayName : ''
                        }
                    }    
                }else{
                    item.staticId = ''
                }
            },
            //动态ETD change事件
            datePickerChange(val,index){
                console.log(val,'datePickerChangedatePickerChangedatePickerChange')
                this.uploadLists[index].dyDteString = val
            }
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
            }
        },
        mounted(){
            if(this.userInfo){ //登录
            }else{ //未登录的时候跳到登录页
                this.$router.push({
                    path: '/Login'
                });
            }
            this.userId = this.userInfo
            this.getUploadFailedRecord()
            this.portStartFocus()
        },
        components: {
            ThePagination,
            Loading
        },
    };
</script>

