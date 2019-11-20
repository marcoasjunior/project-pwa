<template>
  <div>

        <h3 class="mr-a ml-2 mt-2"> Configure Sua Imagem de Perfil</h3>

        <div class="mt-5">
        <small class="mt-5"> Clique na imagem para modificar </small>
        </div>

      <img :src='infoData.picture' class="rounded-circle" @click="showModal">
      
      <h3 id="emailHelp" class="form-text text-muted">{{infoData.name}}</h3>
      
      <!-- <small id="emailHelp" class="form-text text-muted">Deseja mudar os seus dados?</small> -->
      
      <div class="card-body">
        <form @submit="sendForm">
          <div class="form-group">

          </div>
          <div class="form-group">
            
          </div>

          <!-- <button type="submit" class="btn btn-primary" @click="confirmData()" :disabled="!infoData.picture"> Confirma</button> -->
        </form>
      </div>

  </div>
</template>

<script>
import {
  axios
} from '../main'

export default {
  name: 'options-card',
  props: ['infoData'],
  data() {
    return {
      errors: [],
      putResponse: null,
      info: null,
      newData: {
        email: '',
        password: '',
        id: sessionStorage.getItem('id')
      }
    }
  },
  methods: {

    sendForm() {
      axios
        .put('http://localhost:3000/api/update/user', this.newData)
        .then(response => this.putResponse = response)
        .catch(e => {
          this.errors.push(e)
        })
    
    this.newData ={
      email: '',
      password: ''
    }
    },

    showModal() {
      this.$emit('showModal')
    },

  },

  mounted() {

    // requisição inicial para pegar o usuario

    // axios
    //   .get(`http://localhost:3000/api/user/${sessionStorage.getItem('id')}`)
    //   .then(response => this.info = response.data)
    //   .catch(e => {
    //     this.errors.push(e)
    //   })

  }

}
</script>

<style scoped>

img {
  width: 80px;
  height: 80px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px


}




</style>