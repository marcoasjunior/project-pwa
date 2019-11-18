<template>
  <div>
    <div class="card shadow rounded">
      <img :src='info.picture' class="rounded-circle" @click="showModal">
      <h3 id="emailHelp" class="form-text text-muted">{{info.name}}</h3>
      <small id="emailHelp" class="form-text text-muted">Deseja mudar os seus dados?</small>
      <div class="card-body">
        <form @submit="sendForm">
          <div class="form-group">
            <label for="InputEmail">E-mail</label>
            <input type="email" class="form-control" id="InputEmail1" aria-describedby="emailHelp"
              v-model="newData.email" :placeholder="info.email" required>
          </div>
          <div class="form-group">
            <label for="InputPassword">Password</label>
            <input type="password" class="form-control" id="InputPassword1" v-model="newData.password"
              placeholder="Novo Password" required>
          </div>
          <button type="submit" class="btn btn-primary">Alterar Dados</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import {
  axios
} from '../main'

export default {
  name: 'options-card',
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
    }
  },

  mounted() {

    // requisição inicial para pegar o usuario

    axios
      .get(`http://localhost:3000/api/user/${sessionStorage.getItem('id')}`)
      .then(response => this.info = response.data)
      .catch(e => {
        this.errors.push(e)
      })

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