<template>
  <div id="app">
    <div class="container">
      <div id="nav">
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
          <a class="navbar-brand" href="#"
            ><img src="../public/imagenes/flag2.png" alt="" />Human Resourses
            Consultant</a
          >
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#"><router-link to="/">Home</router-link> |</a>
              
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><router-link to="/login">Login</router-link> |</a>
              
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><router-link to="/about">About</router-link> |</a>
              
            </li>
            <li class="nav-item" style="">
              <a class="nav-link" href="#"><router-link to="/vip">VIP</router-link> |</a>
              
            </li>
            |

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbardrop"
                data-toggle="dropdown"
              >
                Soluciones
              </a>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">
                  <router-link to="/solucion1">Manejo de horarios flexibles</router-link></a
                >
                <a class="dropdown-item" href="#"
                  ><router-link to="/solucion2">Reuniones virtuales</router-link></a
                >
                <a class="dropdown-item" href="#"
                  ><router-link to="/solucion3">Capacitación para el HomeOffice</router-link></a
                >
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
    <div class="container-fluid">
      <top-banner> </top-banner>
    </div>
    <router-view />
    <area-footer> </area-footer>
  </div>
</template>

<script>
import TopBanner from "../src/components/TopBanner.vue";
import AreaFooter from "./components/AreaFooter.vue";
import Solucion1 from "./components/solucion1.vue";
import Solucion2 from "./components/solucion2.vue";
import Solucion3 from "./components/solucion3.vue";

export default {
  components: {
    TopBanner,
    AreaFooter,
    Solucion1,
    Solucion2,
    Solucion3,
  },
};
</script>



<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #ffffff;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
