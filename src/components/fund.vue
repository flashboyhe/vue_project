<template>
  <div class="fund">
  
  <div class="hj_layout_left">
    
  <el-row class="tac">
  <el-col :span="24">
    <!-- <h5>默认颜色</h5> -->
    <el-menu
      default-active="1-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">
           <router-link to="/fundone">资金管理1</router-link>
          </el-menu-item>
          <el-menu-item index="1-2">
           <router-link to="/fundtwo">资金管理2</router-link>
          </el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-setting"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
    </el-menu>
  </el-col>
</el-row>
  </div>


  <div class="hj_layout_right">
          <router-view/>
  </div>

  </div>
</template>
<!-- balabalabala -->
<script>
export default {
  name: 'fund',
  data () {
    return {
      msg: '资金管理'
    }
  },
     methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .hj_layout_left{
      width: 200px;
      height: 300px;
     /* background: red;*/
      position: absolute;
      z-index: 2;
    }


    .hj_layout_right{
      width: 100%;
      height: 300px;
      /*background: pink;*/
      padding-left: 200px;
      width: 704px;
    }

   
   
</style>
