<template>
  <div class="home">
    <div class="container">
    </div>
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <area-servicios> </area-servicios>
    <area-footer> </area-footer>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import AreaServicios from '@/components/AreaServicios.vue'
// import AreaFooter from '@/components/AreaFooter.vue'
import TheLogin from '../components/Auth/TheLogin.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    AreaServicios,
    // AreaFooter,
    TheLogin

  }
}
</script>
