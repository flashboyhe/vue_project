<template>
  <div id="app">
  <!--   <el-button type="primary">主要按钮</el-button>
    <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="活动名称">
                      <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="活动区域">
                      <el-select v-model="form.region" placeholder="请选择活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item label="活动时间">
                      <el-col :span="11">
                        <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                      </el-col>
                      <el-col class="line" :span="2">-</el-col>
                      <el-col :span="11">
                        <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
                      </el-col>
                    </el-form-item>
                    <el-form-item label="即时配送">
                      <el-switch v-model="form.delivery"></el-switch>
                    </el-form-item>
                    <el-form-item label="活动性质">
                      <el-checkbox-group v-model="form.type">
                        <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                        <el-checkbox label="地推活动" name="type"></el-checkbox>
                        <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                        <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                      </el-checkbox-group>
                    </el-form-item>
                    <el-form-item label="特殊资源">
                      <el-radio-group v-model="form.resource">
                        <el-radio label="线上品牌商赞助"></el-radio>
                        <el-radio label="线下场地免费"></el-radio>
                      </el-radio-group>
                    </el-form-item>
                    <el-form-item label="活动形式">
                      <el-input type="textarea" v-model="form.desc"></el-input>
                    </el-form-item>
                    <el-form-item>
                      <el-button type="primary" @click="onSubmit">立即创建</el-button>
                      <el-button>取消</el-button>
                    </el-form-item>
                  </el-form> -->
    <Header firstItem="找老师" secondItem="课程管理" thirdItem="资金管理" fourthItem="个人中心" fifthItem="消息（xx）"></Header>
   <!--  <img src="./assets/logo.png"> -->
    
    <div class="hj_iframe_content">
        <div>
            <router-view/>
        </div>
    </div>
   
    <div class="hj_home_footer">
       <Footer></Footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
    data () {
    return {
     msg: '找老师',
     form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
   created: function () {
     // alert("我是created")
      $(function(){

        $(".hj_side_bar ul li ul li").click(function(){
            $(this).addClass("hj_add_selected_style");
            $(this).siblings().removeClass("hj_add_selected_style");
          
         });
      })
  } ,
   methods: {
      onSubmit() {
        console.log('submit!');
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


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /*color: #2c3e50;*/
  
}


/* 主页中iframe的嵌套的内容 */
.hj_iframe_content{
    width: 984px;
    margin: auto;
    /*border:1px solid green;*/
}

.hj_iframe_content>div{
    padding: 40px;
    /*border:1px solid green;*/
}

.hj_home_footer{
  position: fixed;
  width: 100%;
  z-index: 10000;
  left:0;
  bottom: 0;
  background: red;
}

</style>
