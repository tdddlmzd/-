<style lang="scss">
.customer {
  min-width: 1200px;
  min-height: 800px;
  overflow: hidden;
}
.customer_iframe{
    width: 800px;
    height: 600px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
}
.customer_back{
    position: absolute;
    width: 78px;
    height: 30px;
    color: #fff;
    left: 60px;
    top: 50px;    
    .back_span{
        display: inline-block;
        width: 78px;
        height: 30px;
        line-height: 30px;
        border-radius: 15px;
        background-color: #1F8CEB;
        text-align: center;
        cursor: pointer;
    }
    .back_span:hover{
        background-color: #4CA3EF;
    }
    .back_i{
        cursor: pointer;
        display: inline-block;
        width: 8px;
        height: 8px;
        border-top: 2px solid #fff;
        border-right: 2px solid #fff;
        transform: rotate(-135deg);
        margin-bottom: 0px;
        margin-left: 3px;
    }
}
</style>
<template>
  <div class="customer">
    <div class="customer_back" @click="goback">
    <span class="back_span">
        <i class="back_i"></i>
        {{$t('Back')}}
    </span>
    </div>
    <div class="customer_iframe">
    <iframe src="https://tb.53kf.com/code/client/638bf58335176d932b75ab10e96545745/1" width="100%" height="100%" marginwidth="0" frameborder="no" scrolling="no"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
  computed: {},
  methods: {
    goback(){
        window.history.go(-1)
    }
  },
  created() {},
  mounted() {
    
  }
};
</script>