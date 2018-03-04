<template>
  <div class="fundone">
      {{message}}
      <el-progress :percentage="0"></el-progress>
      <el-progress :percentage="70"></el-progress>
      <el-progress :percentage="100" status="success"></el-progress>
      <el-progress :percentage="50" status="exception"></el-progress>

      <br>
      <br>
      <br>
       <el-table
    :data="tableData"
    style="width: 100%">
      
      <el-table-column
      label="编号"
      width="180">
      <template slot-scope="scope">
       <span style="margin-left: 10px">{{ scope.row.id }}</span>
      </template>
    </el-table-column>
    
    <el-table-column
      label="日期"
      width="180">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="姓名"
      width="180">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>姓名: {{ scope.row.name }}</p>
          <p>住址: {{ scope.row.address }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.name }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <br>
  <br>
  <br>
  <el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="编号">
    {{form.id}}
  </el-form-item>
  <el-form-item label="姓名">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="住址">
    <el-input v-model="form.address"></el-input>
  </el-form-item>
  <el-form-item label="时间">
    <el-input v-model="form.date"></el-input>
  </el-form-item>
 
  <el-form-item>
    <el-button type="primary" @click="onSubmit">发送修改内容</el-button>
   
  </el-form-item>
</el-form>
<div :class="{bottomDiv:judge}"></div>
  </div>
</template>

<script>
export default {
  name: 'fundone',
  data () {
    return {
    judge:true,
	  message:"我是资金管理的第一个页面",
       tableData: [
        //  {
        //   id:1,
        //   date: '2018-02-08',
        //   name: '小花',
        //   address: '成都市金牛区'
        // }, {
        //   id:2,
        //   date: '2018-02-09',
        //   name: '小杰',
        //   address: '成都市青羊区'
        // }, {
        //   id:3,
        //   date: '2018-02-10',
        //   name: '小丽',
        //   address: '成都市武侯区'
        // }, {
        //   id:4,
        //   date: '2016-02-11',
        //   name: '小刚',
        //   address: '成都市成华区'
        // }
        ],
          form: {
          name: '',
          address: '',
          date: '',
          id:''
         
        }
		
    }
  },
   created: function () {
          var _this=this
          this.axios.get('http://localhost/angular/admin.php/Home/Index/receive3'
          　).then(function(response){
          // _this.todos=response.data.stu;
          // _this.picked=response.data.stu[0].name;
          console.log(response.data);
          _this.tableData=response.data
        })
  } ,

  methods: {
      handleEdit(index, row) {
        console.log(index, row);
        alert(row.name + "\n" + row.date + "\n" + row.address + "\n" + index);
        this.form.id=index+1;
        this.form.name=row.name;
        this.form.address=row.address;
        this.form.date=row.date;
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      onSubmit() {
        //alert(this.form.name + "\n" + this.form.region + "\n" + this.form.date);
        
        var _this=this
        this.axios.get('http://localhost/angular/admin.php/Home/Index/receive3', {
        　　  params: {'id':_this.form.id, 'name':_this.form.name ,'address': _this.form.address,'date':_this.form.date}
        }).then(function(response){
        // _this.todos=response.data.stu;
        // _this.picked=response.data.stu[0].name;
        console.log(response.data);
        
        _this.$alert('发送成功', '提示', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
        //_this.tableData=response.data
      })
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
     .bottomDiv{
        background: pink;
        width: 100%;
        height: 53px;
     }
</style>
