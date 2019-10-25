<template>
  <div class="home">
    <div>
      <img alt="Vue logo" src="../../assets/logo.svg" class="img-principal">
    </div>
    <div class="conatiner-button-principal">
      <div class="container-buttons-home col-12">
        <router-link to="/Login"> <button type="button" class="wp-btn-1 btn btn-primary btn-lg btn-block">Entrar</button> </router-link>
        <router-link to="/Signup"> <button type="button" class="wp-btn-2 btn btn-primary btn-lg btn-block">Cadastrar</button> </router-link>
    </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import cpmPrincipal from '@/components/cpmPrincipal.vue'

export default {
  name: 'Principal',
  components: {
    // cpmPrincipal
  }
}
</script>
