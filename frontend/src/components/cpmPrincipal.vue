<template>
  <div>
    <div class="container-buttons-home">
      <router-link to="/Login"> <button type="button" class="button-home btn btn-primary btn-lg btn-block">Entrar</button> </router-link>
      <router-link to="/Signup"> <button type="button" class="button-home btn btn-primary btn-lg btn-block">Cadastrar</button> </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

