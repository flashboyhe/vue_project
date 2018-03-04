<template>
  <div class="footer">
        <!-- 页面最下部的条 -->
        <div class="hj_footer">
            <div @click="haha">
                   &copy;2017PingFan京ICP备14023790号-2京公网安备11010802024043号
            </div>
        </div>
  </div>
</template>

<script>
export default {
  name: 'footer',
  data () {
   
  },
  methods:{
     haha:function (){
      alert("我是底部")
    }
  }
}
</script>

<style>

*,html,body,div,p,table,thead,tbody,tr,th,td,ul,ol,li,header,footer,section,dialog{
    margin: 0;
    padding: 0;
    list-style: none;
    font-family: microsoft yahei
 }

 /* 页面底部条 */
.hj_footer{
    font-size: 13px;
    width: 100%;
    height: 53px;
    background: #999999;
    color: white
}

.hj_footer div{
    padding: 18px 0;
    width: 445px;
    margin: auto;
    text-align: center;
    cursor: pointer
}

</style>
