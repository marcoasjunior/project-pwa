<template>
    <div>

        <ul class="navbar sticky-top shadow-sm p-3 mb-5 bg-white rounded" role="navigation" id="ul">
          
          <router-link to="/feed" role="presentation">
            <svg class="icon-sidebar" aria-hidden="true" focusable="false" data-prefix="fad" data-icon="home" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><g class="fa-group color1"><path fill="currentColor" d="M336 463.59V368a16 16 0 0 0-16-16h-64a16 16 0 0 0-16 16v95.71a16 16 0 0 1-15.92 16L112 480a16 16 0 0 1-16-16V300.06l184.39-151.85a12.19 12.19 0 0 1 15.3 0L480 300v164a16 16 0 0 1-16 16l-112-.31a16 16 0 0 1-16-16.1z" class="fa-secondary color2"></path><path fill="currentColor" d="M573.32 268.35l-25.5 31a12 12 0 0 1-16.9 1.65L295.69 107.21a12.19 12.19 0 0 0-15.3 0L45.17 301a12 12 0 0 1-16.89-1.65l-25.5-31a12 12 0 0 1 1.61-16.89L257.49 43a48 48 0 0 1 61 0L408 116.61V44a12 12 0 0 1 12-12h56a12 12 0 0 1 12 12v138.51l83.6 68.91a12 12 0 0 1 1.72 16.93z" class="fa-primary"></path></g></svg>
          </router-link>
          
          <router-link to="/CreateEvent" role="presentation">
          <svg class="icon-sidebar" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="calendar-star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48zM0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm134.1-143.7l54.7-8 24.5-49.6c4.4-9 17.1-8.8 21.5 0l24.5 49.6 54.7 8c9.8 1.4 13.7 13.5 6.6 20.5L281 379.4l9.4 54.6c1.7 9.9-8.7 17.2-17.4 12.6l-49-25.8-48.9 25.8c-8.7 4.6-19.1-2.8-17.4-12.6l9.4-54.6-39.6-38.6c-7.2-7-3.2-19.1 6.6-20.5z" class="color1"></path></svg>
          </router-link>
          
          <router-link to="/MyEvents" role="presentation">
          <svg class="icon-sidebar" aria-hidden="true" focusable="false" data-prefix="fad" data-icon="calendar-plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><g class="fa-group color1"><path fill="currentColor" d="M0 192v272a48 48 0 0 0 48 48h352a48 48 0 0 0 48-48V192zm328 180a12 12 0 0 1-12 12h-60v60a12 12 0 0 1-12 12h-40a12 12 0 0 1-12-12v-60h-60a12 12 0 0 1-12-12v-40a12 12 0 0 1 12-12h60v-60a12 12 0 0 1 12-12h40a12 12 0 0 1 12 12v60h60a12 12 0 0 1 12 12zm-24-244h32a16 16 0 0 0 16-16V16a16 16 0 0 0-16-16h-32a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16zm-192 0h32a16 16 0 0 0 16-16V16a16 16 0 0 0-16-16h-32a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16z" class="fa-secondary"></path><path fill="currentColor" d="M316 320h-60v-60a12 12 0 0 0-12-12h-40a12 12 0 0 0-12 12v60h-60a12 12 0 0 0-12 12v40a12 12 0 0 0 12 12h60v60a12 12 0 0 0 12 12h40a12 12 0 0 0 12-12v-60h60a12 12 0 0 0 12-12v-40a12 12 0 0 0-12-12zm84-256h-48v48a16 16 0 0 1-16 16h-32a16 16 0 0 1-16-16V64H160v48a16 16 0 0 1-16 16h-32a16 16 0 0 1-16-16V64H48a48 48 0 0 0-48 48v80h448v-80a48 48 0 0 0-48-48z" class="fa-primary color2"></path></g></svg>
          </router-link>
          
          <router-link to="/Options" role="presentation">
          <svg class="icon-sidebar" aria-hidden="true" focusable="false" data-prefix="fad" data-icon="user-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><g class="fa-group color1"><path fill="currentColor" d="M248,8C111,8,0,119,0,256S111,504,248,504,496,393,496,256,385,8,248,8Zm0,96a88,88,0,1,1-88,88A88,88,0,0,1,248,104Zm0,344a191.61,191.61,0,0,1-146.5-68.2C120.3,344.4,157.1,320,200,320a24.76,24.76,0,0,1,7.1,1.1,124.67,124.67,0,0,0,81.8,0A24.76,24.76,0,0,1,296,320c42.9,0,79.7,24.4,98.5,59.8A191.61,191.61,0,0,1,248,448Z" class="fa-secondary"></path><path fill="currentColor" d="M248,280a88,88,0,1,0-88-88A88,88,0,0,0,248,280Zm48,40a24.76,24.76,0,0,0-7.1,1.1,124.67,124.67,0,0,1-81.8,0A24.76,24.76,0,0,0,200,320c-42.9,0-79.7,24.4-98.5,59.8,68.07,80.91,188.84,91.32,269.75,23.25A192,192,0,0,0,394.5,379.8C375.7,344.4,338.9,320,296,320Z" class="fa-primary color2"></path></g></svg>
          </router-link>
          


            <!-- <router-link id="bt_rota" v-for="tab in tabs" :key='tab.id' :to='tab.path'
                class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" role="presentation">
                {{tab.name}} 
            </router-link> -->
        </ul>

      <transition name="router-anim">
   <router-view/>
</transition>

    </div>
</template>

<script>
export default {

          mounted() {
              this.checkLogin()
        },

    name: 'app',
    data: () => {

      

        return {

          icon:'',


            tabs: [{
                    // name: 'feed',
                    path: '/Feed',
                    id: 0 
                },

                {
                    // name: 'Novo Evento',
                    path: '/CreateEvent',
                    id: 1
                },

                {
                    // name: 'Meus Eventos',
                    path: '/MyEvents',
                    id: 2
                },
                {
                    // name: 'Opções',
                    path: '/Options',
                    id: 3
                }

            ],
        }
    },


    methods:{
      checkLogin(){

        if(sessionStorage.id){
        // eslint-disable-next-line no-console
        console.log(sessionStorage.id)
        }else{
          this.$router.push('/main')
        }
        
      }
    },


}

</script>

<style scoped>
#ul {
    margin-bottom: 3px !important
}

a:link {
    text-decoration: none
}

a:visited {
    text-decoration: none
}

a:hover {
    text-decoration: none;
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