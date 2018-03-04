<template>
    <div class="header" v-bind:class="{ font_color: isTrue }">
      <!-- <p class='jj'>{{msg}}</p> -->
       <!--  <p class='jj'>{{haha}}</p> -->
       <!-- 导航条 -->
        <div class="hj_navbar_outer">
        <div class="hj_navbar">
            <!-- 服务电话 -->
            <div class="hj_telephone">
                <ul>
                    <li>服务热线：400-8238238</li>
                    <li>|</li>
                    <li>新手指引</li>
                    <li>下载客户端</li>
                </ul>
            </div>
            <!-- 登录 -->
            <div class="hj_login">
                <ul>
                    <li>
                    <router-link to="/message">{{fifthItem}}</router-link>
                    </li>
                    <li>您好，亲爱的xxx用户</li>
                    <li><img src="institution_img/institution_index_img/hj_ head_portrait.jpg" ></li>
                </ul>
            </div>
        </div>
        </div>

        <!-- 选项卡和iframe嵌套的页面 -->
        <div class="hj_main_content">
            <div class="hj_tab">
                <div class="hj_logo jj">
                     <img src="../../assets/hj_ head_portrait.jpg">
                     <span>闪电科技</span>                     
                </div>
                <div class="hj_tab_items">
                   <ul>
                       <li  class="hj_add_red" >
                       <router-link to="/">{{firstItem}}</router-link>
                       </li>
                       <li>
                        <router-link to="/lesson/flash">{{secondItem}}</router-link>
                       </li>
                       <li>
                       <router-link to="/fund">{{thirdItem}}</router-link>
                       </li>
                       <li>
                       <router-link to="/personal">{{fourthItem}}</router-link>
                       </li>
                   </ul>
                </div>
            </div>
           
        </div>
    </div>
</template>

<script>

export default {
  name: 'header',
  props:['firstItem','secondItem','thirdItem','fourthItem','fifthItem'],
  data () {
    return {
     msg: '我是jquery的按钮',
     isTrue:true,
     isError:false
    }
  }
}

$(function(){
    $(".jj").click(function() {
       alert(1)
    });

    //导航栏的样式，js变色
    $(".hj_tab_items ul li").click(function(){
      $(this).addClass("hj_add_red");
      $(this).siblings().removeClass("hj_add_red");
      $(".hj_login ul li").first().removeClass("hj_add_red");
    });


    //点击消息那一块，改变样式
    $(".hj_login ul li").first().click(function(){
        $(this).addClass("hj_add_red");
        // 让所有导航栏，移除颜色
        $(".hj_tab_items ul li").removeClass("hj_add_red");
     });
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

.font_color{
	/*color:salmon;*/
	/*background: pink;*/
}

/* 何杰的“机构端”的首页的css样式 */
a{
  text-decoration: none;
}

*,html,body,div,p,table,thead,tbody,tr,th,td,ul,ol,li,header,footer,section,dialog{
    margin: 0;
    padding: 0;
    list-style: none;
    font-family: microsoft yahei
 }


 .hj_navbar_outer{
    width: 100%; 
    height: 39px;
    background: #FAFAFA;
    border-bottom: 1px solid #DCDCDC;
 }
 
 .hj_navbar{
     font-size: 13px;
     background: #FAFAFA;
     width: 984px;
     margin: auto;
     height: 39px
 }
 
 .hj_telephone{
     width: 351px;
     float: left;
 }
 
 .hj_login{
     width: 500px;
     float: right;
 }
 
 .hj_telephone,.hj_login{
     padding:11px 0;
     /* outline: 1px solid green */
 }

 .hj_login{
    padding-top:6px;
    padding-bottom: 3px;
    overflow-x : visible;
 }
 
 /* 服务热线 */
 
 .hj_telephone ul li,.hj_login ul li{
     float: left;
     cursor:pointer;
 }

 .hj_login ul li{
    float: right;
 }
 
 .hj_telephone ul li:first-child{
     margin-right: 15px
 }
 
 .hj_telephone ul li:nth-child(2){
     margin-right: 15px;
     cursor:none;
 }
 
 .hj_telephone ul li:nth-child(3){
     margin-right: 30px
 }
 
 /* 登录 */

 .hj_login ul li:last-child{
    margin-right: 5px;
 }

 .hj_login ul li:last-child img{
     width: 25px;
     border-radius: 100%;
 }


.hj_login ul li:nth-child(2){
    margin-right: 30px;
    margin-top: 4px
}

.hj_login ul li:first-child{
   margin-top: 4px
}



.hj_tab{
    height: 64px;
    width: 984px;
    margin: auto;
    border-bottom: 2px solid #666666;
    color:#333333;
}



/* 商标 */
.hj_logo{
    font-size: 30px;
    float: left;
    padding:10px 0;
    width: 200px;
    padding-right: 75px;
    cursor: pointer;
}

.hj_logo span,.hj_logo img{
    vertical-align: bottom
}

.hj_logo img{
    width: 37px
}


/* 选项卡 */

.hj_tab_items{
    font-size: 18px;
    float: left;
}

.hj_tab_items ul li {
    float: left;
    padding: 20px;
    cursor: pointer;
}

/* 导航按钮下边框，添加红色 */
.hj_add_red{
    border-bottom:2px solid #CD3E3A !important;
    color: #CD3E3A !important;
}

</style>
