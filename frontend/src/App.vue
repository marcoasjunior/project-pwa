<template>
    <div>

        <ul class="navbar sticky-top shadow-sm p-3 mb-5 bg-white rounded" role="navigation" id="ul">
            <router-link id="bt_rota" v-for="tab in tabs" :key='tab.id' :to='tab.path'
                class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" role="presentation">
                {{tab.name}}</router-link>
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
                    name: 'Line-up',
                    path: '/home',
                    id: 0
                },

                {
                    name: 'Cadastrar',
                    path: '/cadastro',
                    id: 1
                },

                {
                    name: 'Opções',
                    path: '/options',
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