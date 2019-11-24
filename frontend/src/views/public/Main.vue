<template>
  <div class="home">

          <vue-particles
        color="#fc6262"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#fff"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0"
        :linesDistance="150"
        :moveSpeed="1"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="false"
        clickMode="bubble"
      >
  </vue-particles>
 
<div class="container-main">

    <div>
      <section>
      <transition name="bounce">
        <div>
      <img v-if="bounce" alt="Vue logo" src="../../assets/logo.svg" class="img-principal">
        </div>
      </transition>
      <button @click="bounce = !bounce">bounce</button>
      </section>
    </div>
      
    <div class="conatiner-button-principal">
      <div class="container-buttons-home col-12">
        <router-link to="/Login"> <button type="button" class=" ac wp-btn-1 btn btn-primary btn-lg btn-block wp-btn-main">Entrar</button> </router-link>
        <router-link to="/Signup"> <button type="button" class=" ac wp-btn-2 btn btn-primary btn-lg btn-block wp-btn-main">Cadastrar</button> </router-link>
    </div>
    </div>
</div>
    
  </div>
</template>

<script>
// @ is an alias to /src
// import cpmMain from '../../components/cpmMain'

export default {
  name: 'Principal',
  data () {
    return{
      bounce: false
    }
  },
  components: {
    // cpmMain
  }
}
</script>


<style>
  section{
    height: 200px;
  }
  .bounce-enter-active{
    animation: bounce-in .5s;
  }
  .bounce-leave-active{
    animation: bounce-in .5s reverse;
  }
  @keyframes bounce-in {
    0%{
      transform: scale(0)
    }
    50%{
      transform: scale(1.5)
    }
    100%{
      transform: scale(1)
    }
  }
</style>
