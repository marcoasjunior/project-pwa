<template>
  <div class="home">
        <!-- <topBar></topBar> -->

    <div class="container-text-login">

      <h1 class="mb-6">Sucesso!</h1>
        <b-img fluid alt="Responsive image"></b-img>
      <br>
      <br>
      <br>
      <p> Let's party!</p>
    </div>

    <div class="row wp-cntr-1 wp-center">

        <div class="col-12 m0">
            <router-link to="/Feed"> 
            <b-button variant="primary">PARTY!</b-button>
             </router-link>
        </div>
    </div>
    </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Login',
  components: {
    // inputs,
    // topBar,
    // buttons,
  },
  created() {},
        mounted() {

        },
        data: () => ({
          
        }),
        methods: {
        },
        computed: {
        
        },
        watch: {}
}
</script>
