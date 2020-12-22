<template>
 
<div class="container m-5">
    
    <div class="container">
        <the-login/>
    </div>
    
</div>

</template>


<script>
//Se referencia al componnte TheLogin en una nueva carpeta auth
import TheLogin from "@/components/Auth/TheLogin.vue";
// import AreaFooter from '../components/AreaFooter.vue';
export default {
    components:{
        TheLogin,
        // AreaFooter,
    }
}
</script> 