<template>
<div>  
    <div class="box-img-perfil container">
            <img src="../../public/img/logo-jpeg.jpg" class="perfil-picture">
    </div>
</div>

</template>

<script>

export default {
  name: 'cpmButton',
//    props: ['cName'],
      
  components: {
      
  },
  created() {},
        mounted() {

        },
        data: () => ({
            
            tagname: [

                // dados backend
                {name: "Rock"},
                {name: "Balada"},
                {name: "Festival"}
            ]

        }),
        methods: {
            
        },
        computed: {
        
        },
        watch: {

        }
}
</script>
