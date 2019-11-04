<template>
  <div>
    <div class="container-fluid">
      <div class="card testimonial-card">
        <div class="avatar mx-auto white">
          <img :src="info.picture" class="rounded-circle img-fluid">
        </div>
        <div class="container">
          <div class="row">
            <div class="col" id="titulo">
              <span>{{info.name}}</span>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <form @submit="sendForm"> 
                <div class="form-group">
                  <label for="InputEmail">E-mail</label>
                  <input type="email" class="form-control" id="InputEmail1" aria-describedby="emailHelp" v-model="newData.email"
                    :placeholder="info.email" required>
                  <small id="emailHelp" class="form-text text-muted">Deseja mudar os seus dados?</small>
                </div>
                <div class="form-group">
                  <label for="InputPassword">Password</label>
                  <input type="password" class="form-control" id="InputPassword1" v-model="newData.password" placeholder="Novo Password" required>
                </div>
                <button type="submit" class="btn btn-primary">Alterar Dados</button>
              </form>
            </div>
          </div>
        </div>
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
        id: 1
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
    }
  },

  mounted() {

    // requisição inicial para pegar o usuario

    axios
      .get('http://localhost:3000/api/user/1')
      .then(response => this.info = response.data)
      .catch(e => {
        this.errors.push(e)
      })

  }

}
</script>

<style scoped>

.avatar {
  vertical-align: middle;
  width: 80px;
  height: 80px;
  margin-top: 10px
}

.h3 {
 
  margin-top: 10px;
  margin-bottom: 10px
}

.p-2 {
  margin: 0px;
}

#titulo {
  text-align: center;
  font-size: 2.5vh;
  margin-top: 10px
}

</style>