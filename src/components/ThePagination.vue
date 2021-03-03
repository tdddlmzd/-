<template>
    <!-- 配置分页的组件 -->
    <section>
        <div class="pagination">
            <el-pagination
                background
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="page.pageNo"
                :page-size="page.pageSize"
                :page-sizes="[10, 50, 100, 200]"
                :total="page.total"
                layout="total, sizes, next, pager, prev"
                ref="pagination"
            ></el-pagination>
        </div>
    </section>
</template>
<script>
/**
 * 分页共通组件
 */
export default {
    name: "ThePagination",
    props: {
        /**
         * 定义 ThePagination组件特有的属性
         */
        attribute: {
            handleChange() {}
        },
        pageNumber: {
            type: Number,
        },
        visibilityHeight: {
            type: Number,
            default: 400
        },
        backPosition: {
            type: Number,
            default: 0
        },
    },
    data() {
        return {
            visible: false,
            interval: null,
            page: {
                // 当前页数
                pageNo: 1,
                // 每页默认显示条数
                pageSize: 10,
                // 总条数
                total: 0
            },
        };
    },
    methods: {
        handleScroll() {
            let scrollTop = document.querySelector('.tasksContent').pageYOffset || document.querySelector('.tasksContent').scrollTop
        },
        easeInOutQuad(t, b, c, d) {
            if ((t /= d / 2) < 1) return (c / 2) * t * t + b;
            return (-c / 2) * (--t * (t - 2) - 1) + b;
        },
        backTo(){
            const start = document.querySelector('.tasksContent').pageYOffset || document.querySelector('.tasksContent').scrollTop
            let i = 0;
            this.interval = setInterval(() => {
                const next = Math.floor(
                    this.easeInOutQuad(10 * i, start, -start, 500)
                );
                if (next <= this.backPosition) {
                    document.querySelector('.tasksContent').scrollTo(0, this.backPosition);
                    clearInterval(this.interval);
                } else {
                    document.querySelector('.tasksContent').scrollTo(0, next);
                }
                i++;
            }, 16.7);
        },
        /**
         * 选择每页多个条事件
         *
         * @param pageSize
         */
        handleSizeChange(pageSize) {
            this.page.pageNo = 1
            this.page.pageSize = pageSize;
            this.attribute.handleChange({
                pageNo: 1,
                pageSize: this.page.pageSize,
                total: this.page.total
            });
            setTimeout(() => {
                this.backTo();
            },500);
        },

        /**
         * 点击页码事件
         *
         * @param pageNo
         */
        handleCurrentChange(pageNo) {
            this.page.pageNo = pageNo;
            this.attribute.handleChange({
                pageNo: this.page.pageNo,
                pageSize: this.page.pageSize,
                total: this.page.total
            });
            setTimeout(() => {
                this.backTo();
            },500);
        },
        changeValue() {
            this.$nextTick(()=>{
                this.$refs.pagination.$children[0].$el.innerHTML = '总共' + ' ' + this.page.total + ' ' + '条记录';
                var offsetPaginationWidth = Math.round(this.$refs.pagination.$children[0].$el.offsetWidth) + 10 + 'px';
                this.$refs.pagination.$children[1].$el.style.left =  offsetPaginationWidth;
            })
        },
    },
    watch:{
        'pageNumber':{
            immediate:true,
            handler(newVal,oldVal){
                if(newVal === 1){
                    this.page.pageNo = newVal;
                }
            }
        }
    },
    mounted() {
        document.querySelector('.tasksContent').addEventListener("scroll", this.handleScroll);
    },
    beforeDestroy() {
        if(document.querySelector('.tasksContent')){
            document.querySelector('.tasksContent').removeEventListener("scroll", this.handleScroll);
            if (this.interval) {
                clearInterval(this.interval);
            }
        }
    },
};
</script>

<style>
    .pagination{
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 24px;
        display: inline-block;
        padding: 0 20px;
    }
    .el-pagination{
        padding: 0;
        color: #282828;
        font-size: 12px;
        font-weight: normal;
    }
    .btn-prev,
    .el-pager,
    .btn-next{
        float: right;
    }
    .el-pagination__total{
        color: #282828;
    }
    .el-pagination.is-background .el-pager li:not(.disabled).active{
        background-color: #072c4c;
        border: 1px solid #072c4c;
        border-radius: 2px;
        overflow: hidden;
    }
    .el-pagination.is-background .btn-next, .el-pagination.is-background .btn-prev, .el-pagination.is-background .el-pager li{
        background-color: #fff;
        border: 1px solid #f2f2f2;
    }
</style>
