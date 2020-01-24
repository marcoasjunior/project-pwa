<template>
<div>  
    <div class="card shadow rounded mb-3">
      <h3 class="mt-4">Preferências de Eventos</h3>
    
    <div class="container box-info box-tags mt-4">
      <tag class="mt-5" :tagsData="{data:tagData}" @setTags="selecTags"></tag>
      <b-button class="mt-5 outline-primary button-return ac btn-s" variant="primary" @click="SetPreference()">Selecionar preferências</b-button>
    </div>

    </div>
</div>

</template>

<script>
import axios from 'axios'

export default {

      
  components: {
      
  },
  created() {
    this.getTags()
  },
        mounted() {
        },
        data: () => ({
            tagData:'',
            tagsSelected:'',
            data:{UserId:'', PreferenceId:''},

        }),
        methods: {
          getTags(){
            axios.get('http://localhost:3000/api/tags/preferences')
            // axios.get('https://weparty-app.herokuapp.com/api/tags/preferences')
            .then( (response) => {
            this.tagData = response.data;
          })
          },
        },
        computed: {
        
        },
        watch: {

        }
}
</script>
