<template>
    <div>

        <ul class="navbar sticky-top shadow-sm p-3 mb-5 bg-white rounded" role="navigation" id="ul">
            <router-link id="bt_rota" v-for="tab in tabs" :key='tab.id' :to='tab.path' class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" role="presentation">
                {{tab.name}}
            </router-link>
        </ul>

        <router-view></router-view>

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
                    name: 'Create Event',
                    path: '/CreateEvent',
                    id: 1
                },

                {
                    name: 'Options',
                    path: '/Options',
                    id: 2
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

</style>