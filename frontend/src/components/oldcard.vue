<template>
  
    
      <div class="card shadow rounded">
        <b-img :src="post.picture" fluid alt="Event image"></b-img>
        <div class="card-body">
          <h4 class="card-title">{{post.name}}</h4>
          <hr>
          <p class="card-text"> <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt"
              role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
              class="svg-inline--fa fa-map-marker-alt fa-w-12 fa-3x">
              <path fill="currentColor"
                d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
                class=""></path>
            </svg> {{post.local}}</p>
              
          <p class="card-text"><small class="text-muted"> <svg aria-hidden="true" focusable="false" data-prefix="far"
                data-icon="calendar-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                class="svg-inline--fa fa-calendar-alt fa-w-14 fa-3x">
                <path fill="currentColor"
                  d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"
                  class=""></path>
              </svg> {{post.edate | formatDate}}</small></p>
        </div>
      </div>
 
 
</template>

<script>

import {moment} from '../main'

export default {
    props: {
        post: Object
      },
      data() {
        return {}

      },

      filters: {
          formatDate(value) {

              if (value) {
                return moment(String(value)).format('DD/MM/YYYY - hh:mm')
              }
        }
        
      }


    }

</script>
