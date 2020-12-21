<template>
  <div id="app">
    <div class="container">
      <div id="nav">
        <nav class="navbar navbar-expand-md bg-dark navbar-dark fixed-top d-flex shadow" >
          <a class="navbar-brand mx-3" style="widht:50%;" href="#"
            ><img class="mx-2"  src="../public/imagenes/flag2.png" alt="" />Human Resourses
            Consultant</a
          >
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav p-4 ml-auto">
              <li class="nav-item active">
                <a class="nav-link"  href="#"><router-link to="/" style="text-decoration:none; color: white;">Home</router-link> |</a>
                
              </li>
              
              <li class="nav-item">
                <a class="nav-link" href="#"><router-link to="/login" style="text-decoration:none; color: white;">Login</router-link> |</a>
                
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><router-link to="/about" style="text-decoration:none; color: white;">About</router-link> |</a>
                
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" ><router-link to="/vip" style="text-decoration:none; color: white;">VIP</router-link> |</a>
                
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
                <div class="dropdown-menu bg-dark">
                  <a class="dropdown-item" href="#">
                    <router-link to="/solucion1" style="text-decoration:none;  color: white;">Manejo de horarios flexibles</router-link></a
                  >
                  <a class="dropdown-item" href="#"
                    ><router-link to="/solucion2" style="text-decoration:none;  color: white;">Reuniones virtuales</router-link></a
                  >
                  <a class="dropdown-item" href="#"
                    ><router-link to="/solucion3" style="text-decoration:none;  color: white;">Capacitación para el HomeOffice</router-link></a
                  >
                </div>
              </li>
            </ul>
          </div>
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
