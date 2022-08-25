import axios from 'axios'

let request = axios.create({
    baseURL: 'http://localhost:8082',
})

// request.defaults.withCredentials = true // 设置来传递cookie，但会有跨域问题

export default request

// 1 暴露封装的axios
// 2 在src/api文件夹下引入并统一所有接口，暴露对象
// 3 在App.vue跟组件中的vue实例引入并挂载方法
/* Vue.prototype.$api = request  */