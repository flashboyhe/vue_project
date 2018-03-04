<template>
  <div class="lesson">
    <el-table
      :data="tableData"
      >
      <el-table-column
        prop="id"
        label="编码"
        >
      </el-table-column>
      <el-table-column
        prop="title"
        label="标题"
        >
      </el-table-column>
      <el-table-column
        prop="content"
        label="内容"
        width="180"
       >
      </el-table-column>
      <el-table-column
        prop="description"
        label="描述"
        width="180">
      </el-table-column>
     
      <el-table-column
        prop="source"
        label="来源"
        >
      </el-table-column>
      <el-table-column
        prop="time"
        label="时间"
        >
      </el-table-column>
    
    </el-table>
     <br>
     <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage1"
      :page-size="5"
      layout="total, prev, pager, next"
      :total="15">
    </el-pagination>
	{{$route.params.id}}
  </div>
</template>

<script>
export default {
  name: 'lesson',
  data () {
    return {
      msg: '课程管理',
      currentPage1: 1,
      // tableData: [{
      //     date: '2016-05-02',
      //     name: '王小虎',
      //     address: '上海市普陀区金沙江路 1518 弄'
      //   }, {
      //     date: '2016-05-04',
      //     name: '王小虎',
      //     address: '上海市普陀区金沙江路 1517 弄'
      //   }, {
      //     date: '2016-05-01',
      //     name: '王小虎',
      //     address: '上海市普陀区金沙江路 1519 弄'
      //   }, {
      //     date: '2016-05-03',
      //     name: '王小虎',
      //     address: '上海市普陀区金沙江路 1516 弄'
      //   }]
      tableData:[]
    }
  },
   created: function () {
          var _this=this
          this.axios.get('http://localhost/angular/admin.php/Home/Index/receive2', {
          　　  params: { 'currentPage':_this.currentPage1}
          }).then(function(response){
          // _this.todos=response.data.stu;
          // _this.picked=response.data.stu[0].name;
          console.log(response.data);
          _this.tableData=response.data
        })
  } ,
   methods: {
      // handleSizeChange(val) {
      //   console.log(`每页 ${val} 条`);
      // },
      handleCurrentChange(val) {
        //console.log(`当前页: ${val}`);
        alert(this.currentPage1);
        var _this=this
        this.axios.get('http://localhost/angular/admin.php/Home/Index/receive2', {
        　　  params: { 'currentPage':_this.currentPage1}
        }).then(function(response){
        // _this.todos=response.data.stu;
        // _this.picked=response.data.stu[0].name;
        console.log(response.data);
        _this.tableData=response.data
      })
      
      
      
      
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    
</style>
