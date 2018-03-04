import MyFooter from './footer.vue'
// 这里是重点
const Footer = {
    install: function(Vue){
        Vue.component('Footer',MyFooter)
    }
}

// 导出组件
export default Footer