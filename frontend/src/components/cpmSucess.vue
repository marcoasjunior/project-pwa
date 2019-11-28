<template>
  <div class="home">
        <!-- <topBar></topBar> -->

    <div class="container-text-login">

        <h4 class="h4">Sucesso!</h4>
        <b-img src="https://res.cloudinary.com/dvzbogxib/image/upload/v1574904024/gifs/giphy_1_iiyyj6.gif" fluid alt="Responsive image"></b-img>

    </div>

    <div class="row wp-cntr-1 wp-center">

        <div class="col-12 m0">
            <router-link to="/Feed"> 
            <b-button variant="primary">Party!</b-button>
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
