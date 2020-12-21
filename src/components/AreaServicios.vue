<template>
  <div class="container-fluid">
    <!-- services -->
    <div class="container-fluid" id="services">
      <div class="row justify-content-center mb-5">
        <div class="col-xs-12 col-sm-6 col-lg-4 mt-5">
          <div class="card bg-warning text-white shadow" style="border-radius: 25px 25px 25px 25px; border: 0px;">
            <div class="d-flex justify-content-center p-2" >
              <img class="card-img-top img-fluid p-1" src="../../public/imagenes/humanresource.jpg" style="border-radius: 25px;" alt="HR" width=350 height=300 >
            </div>
            <div class="card-body text-center" style="widht:350px; height:280px; ">
              <h5 class="card-title" style="font-size:30px;">Consultorias</h5>
              <p class="card-text" style="font-size:22px;">
                Somos una consultora experta en la administracion del recurso humano de su empresa.
              </p>
              <!-- <a href="http://www.google.com" class="btn btn-primary">Saber mas>></a> -->
            </div>
          </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-lg-4 mt-5" >
          <div class="card  bg-info text-white shadow" style="border-radius: 25px 25px 25px 25px; border: 0px;">
            <div class="d-flex justify-content-center p-2 ">
            <img class="card-img-top img-fluid p-1" src="../../public/imagenes/services2.png" style="border-radius: 25px" alt="HR" width=100% height="300">  
            </div>
            <div class="card-body text-center" style="widht:350px; height:280px">
              <h5 class="card-title" style="font-size:30px;">Optimizacion de recursos</h5>
              <p class="card-text" style="font-size:25px;">
                Optimizamos los recursos de su empresa.
              </p>
              <!-- <a href="http://www.google.com" class="btn btn-primary">Saber mas>></a> -->
            </div>
          </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-lg-4 mt-5">
          <div class="card bg-warning text-white shadow" style="border-radius: 25px 25px 25px 25px; border: 0px;">
            <div class="d-flex justify-content-center p-2">
              <img class="card-img-top img-fluid p-1" src="../../public/imagenes/service3.jpg" style="border-radius: 25px" alt="HR" width=100% height=300>  
            </div>
            <div class="card-body text-center" style="widht:350px; height:280px">
              <h5 class="card-title" style="font-size:30px;">Contamos su Historia</h5>
              <p class="card-text" style="font-size:22px; height: 100%;">
                Cada cliente tiene una historia particular, somo especialitas es potenciar el crecimiento
                de su empresa a partir de alli.
              </p>
              <!-- <a href="http://www.google.com" class="btn btn-primary">Saber mas>></a> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AreaServicios",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

</style>
