<template>
  <div class="home bg-relative-cnt">
    
    <div class="bg-relative-b">
          <vue-particles
        color="#ff4fa1"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#fff"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="bubble"
      >
  </vue-particles>
    </div>


    <div class="conatiner-button-principal bg-relative-f">
      <img alt="Vue logo" src="../../assets/logo.svg" class="img-principal">
      <div class="container-buttons-home col-12">
        <router-link to="/Login"> <button type="button" class=" ac wp-btn-1 btn btn-primary btn-lg btn-block wp-btn-main">Entrar</button> </router-link>
        <router-link to="/Signup"> <button type="button" class=" ac wp-btn-2 btn btn-primary btn-lg btn-block wp-btn-main">Cadastrar</button> </router-link>
    </div>
    </div>


    
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Principal',
  components: {
    
  }
}
</script>
