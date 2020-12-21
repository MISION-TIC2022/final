<template>
  <div>
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand">MisionTIC2022</a>
        <form class="d-flex">
          <button class="btn btn-outline-danger" type="submit"
           @click.prevent="logoutUser">Salir
          </button>
        </form>
      </div>
    </nav>

    <div>
        <ul class="list-group">
        <li class="list-group-item"> <span>Nombre: </span> {{user.name}}</li>
        <li class="list-group-item"> <span>Email :</span>{{user.email}} </li>        
      </ul>

    </div>

  </div>
</template>



<script>
//vue-jwt-decode decodifica la informacion del token - obtener datos de usuario
import VueJwtDecode from 'vue-jwt-decode';

export default {      
    data() {
    return {
      user: {
      },        
    };
  },
  methods: {
    getUserData(){
        let token = localStorage.getItem('jwt');
        let user = VueJwtDecode.decode(token);
        console.log(user)
        this.user=user;
    },        
      
    logoutUser() {
      localStorage.removeItem("jwt");
      this.$router.push('/'); 
    },
},

created(){
    this.getUserData();
  }
}
</script>