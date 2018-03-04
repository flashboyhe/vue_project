import MyHeader from './header.vue'
// 这里是重点
const Header = {
    install: function(Vue){
        Vue.component('Header',MyHeader)
    }
}

// 导出组件
export default Header