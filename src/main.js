import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false

const base = axios.create({
        // Heroku creado con mi cuenta en gustavoadolfo@agp
        baseURL: 'https://blooming-sea-37374.herokuapp.com/'
    })
    // se define que se usa base a traves de $http
Vue.prototype.$http = base;




new Vue({
    router,
    render: h => h(App)
}).$mount('#app')