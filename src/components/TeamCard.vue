<template>
  <div>
    <!-- members -->
    <div class="container" id="team">
      <div class="row justify-content mb-5">
        <div class="card text-white bg-dark shadow-lg" style="border-radius: 15px; height:100%; min-width:400px;" >
          <div class="d-flex justify-content-center py-3">
            <!-- v-bind para llamar propiedades dinamicas -->
            <img
              v-bind:src="member.image"
              alt="Foto del equipo"
              height="150"
              width="auto"
              style="border-radius: 15px"
            />
          </div>
          <div class="card-body">
            <h3 class="card-title text-center">{{ member.nombre }}</h3>
            <p class="card-text pt-3">{{ member.descripcion }}</p>
            <p class="card-text"><span>Rol: </span> {{ member.rol }}</p>
            <p class="card-text"><span>Codigo: </span> {{ member.rol }}</p>
          </div>

          <div class="card-footer">
            <small class="text-muted">Last update 15/Dic/2020</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeamCard",
  props: ["member"],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

</style>
