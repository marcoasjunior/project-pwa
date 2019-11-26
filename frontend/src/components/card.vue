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
        
        <b-list-group-item @click='showLocal' class=''><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt"
            role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
            class="svg-inline--fa fa-map-marker-alt fa-w-12 fa-3x">
            <path fill="currentColor"
              d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
              class=""></path>
          </svg> {{post.local}}<br>
          <small class="text-muted">{{post.address}}</small>
          <transition name="router-anim">
          <hereMap v-if="showMe" :coord='coord' />
          </transition>

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

        <b-container class="row ac">
          <b-row align-v="center" align-h="center" class="container-footer">

            <b-col cols='.5'><b-img left :src='avatar.picture' class="rounded-circle avatar" alt="avatar" @click='showProfile' /></b-col>

            <b-col align-self="center"><em> Postado {{post.createdAt | formatCreateDate}}</em></b-col>
            
            <b-col cols='1'>
             
             
              <!-- <b-button> -->
                <svg  class="fire-icon" aria-hidden="true" focusable="false" data-prefix="fad" data-icon="fire" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <g class="fire-icon">
                    <path class="color1" fill="currentColor" d="M216 23.86C216 9.06 204.15 0 192 0a24 24 0 0 0-20.1 10.82C48 191.85 224 200 224 288v.81A64 64 0 0 1 160 352h-.87C124 351.5 96 322.18 96 287v-85.5c0-14.52-11.83-24-24.15-24a23.63 23.63 0 0 0-17.28 7.5C27.8 213.16 0 261.33 0 320c0 105.87 86.13 192 192 192s192-86.13 192-192c0-170.29-168-193-168-296.14zM192 444a123.61 123.61 0 0 1-87.78-36.5l2.63 1.21a129.9 129.9 0 0 0 51.39 11.23h1.78A132 132 0 0 0 292 289.71V288c0-27.83-8.69-54.44-25.84-79.11l-.3-.43c10.81 11 20.62 22.28 28.61 34.68C309.16 265.92 316 290.34 316 320a124.15 124.15 0 0 1-124 124z"></path>
                    <path class="color2" fill="currentColor" d="M265.86 208.46c10.81 11 20.62 22.28 28.61 34.68C309.16 265.92 316 290.34 316 320a123.94 123.94 0 0 1-211.78 87.5l2.63 1.21a129.9 129.9 0 0 0 51.39 11.23h1.78A132 132 0 0 0 292 289.71V288c0-27.83-8.69-54.44-25.84-79.11l-.3-.43" ></path>
                  </g>
                </svg>
              <!-- </b-button> -->
            
            </b-col>
          
          </b-row> 
          
        </b-container>

        <transition name="router-anim">
        <b-container v-if="profile">
          <b-img center :src='avatar.picture' class="rounded-circle avatarPlus" alt="avatar" @click='showProfile' />
          <b-row align-h="center" class="container-footer">
            <h3 id="emailHelp" class="form-text text-muted">{{avatar.name}}</h3>
          </b-row>
        </b-container>
        </transition>

        </div>
      </template>

      </b-card>
      </b-container>


</template>

<script>

import {moment} from '../main'
import {axios} from '../main'
import hereMap from '../components/hereMap'

export default {
    props: {
        post: Object
      },
      data() {
        return {
          avatar: '',
          errors: [],
          showMe: false,
          coord: Object,
          profile: false
        }

      },

      components: {
        hereMap
      },

      methods: {

        showLocal() {

          this.showMe = this.showMe ? false : axios
                                                .get(`http://localhost:3000/api/event/coord/${this.post.id}`)
                                                .then(response => {
                                                  this.coord = {
                                                    Latitude: response.data[0].latitude,
                                                    Longitude: response.data[0].longitude
                                                  }
                                                  this.showMe = true             
                                                })
                                                .catch(e => {
                                                  this.errors.push(e)
                                                }) 

                   
          },

        showProfile() {
          this.profile = this.profile ? false : true  
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
                return moment(value).locale('pt-br').calendar()
              }
        }
        
      },

    mounted() {

  // requisição inicial para pegar o avatar 

    axios
      .get(`http://localhost:3000/api/avatar/${this.post.id}`)
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

.avatarPlus {
  width: 100px;
  height: 100px;
  margin: 10px
}

.router-anim-enter-active {
  animation: coming 1s;
  animation-delay: .5s;
  opacity: 0;
}
.router-anim-leave-active {
  animation: going .2s;
}

@keyframes going {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-30px);
    opacity: 0;
  }
}
@keyframes coming {
  from {
    transform: translateY(-30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

</style>