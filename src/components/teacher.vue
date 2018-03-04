<template>
  <div class="teacher">
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
          </el-form>
    
                <!-- 找老师的左边栏 -->
       <!--  <div class="hj_side_bar">
            <ul>
                <li>
                    <span>找老师</span>
                    <ul>
                        <li class="hj_add_selected_style" data-url="../../institution_html/teacher/teacher_son_page/add_lesson_table.html">添加课程表1</li>
                        <li data-url="../../institution_html/teacher/teacher_son_page/add_lesson_table2.html">添加课程表2</li>
                       
                    </ul>
                </li>
            </ul>
        </div> -->

        <!-- 找老师的iframe的内容 -->
       <!--  <div class="find_teacher_iframe">
            <div>
                 
            </div>
        </div> -->
   
    <!-- <h1>{{ msg }}</h1> -->

   
  </div>
</template>

<script>
export default {
  name: 'teacher',
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
         // alert(this.form.name+ "\n" +this.form.region + "\n" +this.form.date1 + "\n" +this.form.date2 + "\n" +this.form.delivery + "\n" +this.form.type + "\n" +this.form.resource + "\n" +this.form.desc);
          var _this=this
          this.axios.get('http://localhost/recieve.php', {
          　　  params: { 'name':_this.form.name,'region':_this.form.region,'date1':_this.form.date1}
          }).then(function(response){
          // _this.todos=response.data.stu;
          // _this.picked=response.data.stu[0].name;
          console.log(response.data)
          
        })
      }
    }
}




</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* 何杰的“机构端” -> “找老师”  的css样式 */

*,html,body,div,p,table,thead,tbody,tr,th,td,ul,ol,li,header,footer,section,dialog，a{
   /* margin: 0;
    padding: 0;*/
    list-style: none;
    font-family: microsoft yahei;
    text-decoration: none
 }

/* 左边栏的下拉选项框 */
 .hj_side_bar{
    width: 120px;
    height: 100%;
    border-right: 2px solid #ECECEC;
    position:absolute;
    top: 0;
    left:0;
 }


 .hj_side_bar ul li span{
     display: inline-block;
     font-size: 20px;
     width: 120px;
     height: 40px;
     line-height: 39px;
     cursor:pointer;
 }


.hj_side_bar ul li ul li{
    width: 120px;
    height: 30px;
    line-height: 29px;
    cursor:pointer;
}

.hj_add_selected_style{
    color: #CE3D3A !important;
    border-right: 2px solid #CE3D3A;
}


/* 找老师里边的iframe嵌套框 */
.find_teacher_iframe{
    width: 100%;
}


.find_teacher_iframe div{
   margin-left: 120px;
   /*height: 500px*/
   /* background: red; */
}



</style>
