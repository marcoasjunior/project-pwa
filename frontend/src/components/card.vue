<template>

  <b-container>
    <b-card 
      :title="post.name" 
      :img-src="post.picture" 
      header-tag="header" 
      footer-tag="footer" 
      img-alt="Image" 
      img-top
      class="newcard mb-2 shadow rounded">

      <b-list-group flush>
        <b-list-group-item><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt"
            role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
            class="svg-inline--fa fa-map-marker-alt fa-w-12 fa-3x">
            <path fill="currentColor"
              d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
              class=""></path>
          </svg> {{post.local}}<br>
          <small class="text-muted">{{post.address}}</small>

        </b-list-group-item>
        <b-list-group-item> <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="clock" role="img"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-clock fa-w-16 fa-3x">
            <path fill="currentColor"
              d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"
              class=""></path>
          </svg> {{post.edate | formatDate}} </b-list-group-item>

      </b-list-group>

      <template v-slot:footer>
        <div>       
        <b-container class="row">
          <b-row align-v="center">
            <b-col><b-img left :src='avatar' class="rounded-circle avatar" /></b-col>
            <b-col><em>Postado {{post.createdAt | formatCreateDate}}</em></b-col>
          </b-row>
        </b-container>
        </div>
      </template>

      </b-card>
      </b-container>


</template>

<script>

import {moment} from '../main'
import {axios} from '../main'

export default {
    props: {
        post: Object
      },
      data() {
        return {
          avatar: '',
          errors: []
        }

      },

      filters: {
          formatDate(value) {

              if (value) {
                return moment(String(value)).format('DD/MM/YYYY - hh:mm')
              }
        },

          formatCreateDate(value) {
          
              if (value) {
                return moment(String(value)).locale('pt-br').endOf('day').fromNow()
              }
        }
        
      },

    mounted() {

  // requisição inicial para pegar o avatar 

    axios
      .get(`http://localhost:3000/api/user/${this.post.id}`)
      .then(response => {
        this.avatar = response.data
      })
      .catch(e => {
      this.errors.push(e)

    })

    }}

</script>

<style scoped>

.newcard {
  margin-top: 3%;
  margin-left: auto;
  margin-right: auto;
  width: 90%;
}
svg {
  width: 20px;
  height: 20px;
}

.avatar {
  width: 40px;
  height: 40px;
}

</style>