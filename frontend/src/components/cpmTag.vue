<template>
<div>  

    <!-- <button type="submit" class="tag-preferences" v-for="item in tagname" v-bind:key="item.name"> {{item.name}}  <br> </button> -->


    <!-- <b-button pill variant="outline-danger" type="submit" class="tag-preferences" v-for="item in data" v-bind:key="item.id" @click="getTag(item.id)"> -->
   <div v-for="item in data" v-bind:key="item.id">

    <b-button :key="tagKey"  pill variant="outline-danger" type="submit" class="tag-preferences" :class="{ tag_preferences_selected: info[item.id]}" @click="getTag(item.id)">
      {{item.preference}}
    </b-button>

   </div>
      
      

      <!-- {{info}} -->

    <!-- <span v-for="item in data" v-bind:key="item.name" @onload="loadTag()"> {{item.name}}  <br> </span> -->
  


    <!-- <button type="submit" :class=" 'btn white btn-block ' "> </button> -->
</div>

</template>

<script>
import axios from 'axios'

export default {
  name: 'cpmButton',
//    props: ['cName'],
      
  components: {
      
  },
  created() {},
        mounted() {

          this.renderTags()
     
          // this.info['1'] = fals

        },
        data: () => ({

          data:'',
          info:{},
          tagInfo:[],
          tagname: [],
          tagKey:0.
            

        }),
        methods: {
          renderTags(){
            axios.get('http://localhost:3000/api/tags/preferences')
            .then( (response) => {
              this.data = response.data;
               this.createTagArray();
            
            })
          },

          createTagArray(){
            alert(this.data)
            for(let item in this.data){
              this.info[item] = false;
              // this.info['1'] = false
              
              
              /* eslint-disable no-console */
            
            }
              console.log(this.info)
          },




          getTag(dataId){
            this.tagKey = this.tagKey + 1;
            this.info[dataId] = !this.info[dataId] 
              /* eslint-disable no-console */
              console.log(this.info)

            // if(this.info[dataId]){
            //   /* eslint-disable no-console */
            //   console.log(this.info)
            
            // }
          

            
            this.tagInfo.push(dataId)
            alert(this.tagInfo);

          },
          removetag(dataId){
            this.tagInfo = this.tagInfo.filter(function(value){
            return value != dataId;


          })
          }

            
        },
        computed: {
        
        },
        watch: {

        }
}
</script>
