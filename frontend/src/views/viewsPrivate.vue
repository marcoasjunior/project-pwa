<template>
    <div>

        <ul class="navbar sticky-top shadow-sm p-3 mb-5 bg-white rounded" role="navigation" id="ul">
            <router-link id="bt_rota" v-for="tab in tabs" :key='tab.id' :to='tab.path'
                class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" role="presentation">
                {{tab.name}}
            </router-link>
        </ul>

      <transition name="router-anim">
   <router-view/>
</transition>

    </div>
</template>

<script>
export default {

    name: 'app',
    data: () => {
        return {
            tabs: [{
                    name: 'Feed',
                    path: '/Feed',
                    id: 0
                },

                {
                    name: 'Novo Evento',
                    path: '/CreateEvent',
                    id: 1
                },

                {
                    name: 'Meus Eventos',
                    path: '/MyEvents',
                    id: 2
                },
                {
                    name: 'Opções',
                    path: '/Options',
                    id: 3
                }

            ]
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
    transform: translateX(0);
  }
  to {
    transform: translateX(-30px);
    opacity: 0;
  }
}
@keyframes coming {
  from {
    transform: translateX(-30px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

</style>