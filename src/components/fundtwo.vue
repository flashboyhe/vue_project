<template>
  <div class="fundtwo">
      {{message}}
      <el-progress type="circle" :percentage="0"></el-progress>
      <el-progress type="circle" :percentage="25"></el-progress>
      <el-progress type="circle" :percentage="100" status="success"></el-progress>
      <el-progress type="circle" :percentage="50" status="exception"></el-progress>
  </div>
</template>

<script>
export default {
  name: 'fundtwo',
  data () {
    return {
      
	  message:"我是资金管理的第二个页面"
		
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
