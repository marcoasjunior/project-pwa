<template>
<div>  
    <button v-if="cData.type == 'submit'" type="submit" :class=" 'btn white btn-block ' + cData.class" @click="callAction()"> {{ cData.text }}</button>
</div>

</template>

<script>

export default {
  name: 'cpmButton',
   props: ['cData'],
      
  components: {
      
  },
  created() {},
        mounted() {

        },
        data: () => ({

        }),
        methods: {
            callAction(){
                if(this.cData.actionType){
                    var actionData;
                    switch (this.cData.actionType ) {
                        case 'Path':
                            actionData = this.cData.link;
                        break;
                        default:
                            // console.log('no action defined')
                    }
                    this['callAction'+ this.cData.actionType](actionData);
                }
            },
            callActionPath(path){
                this.$router.push(path)
            }
        },
        computed: {
        
        },
        watch: {}
}
</script>
