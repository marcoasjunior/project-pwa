<template>
<div>  
  <!-- {{tagsData}}<br><br> -->
    <!-- <button type="submit" class="tag-preferences" v-for="item in tagname" v-bind:key="item.name"> {{item.name}}  <br> </button> -->


    <!-- <b-button pill variant="outline-danger" type="submit" class="tag-preferences" v-for="item in data" v-bind:key="item.id" @click="getTag(item.id)"> -->
   <div v-for="item in tagsData.data" v-bind:key="item.id" class="container-tag">

    <b-button :key="tagKey"  pill variant="outline-danger" type="submit" class="tag-preferences" :class="{ tag_preferences_selected: info[item.id]}" @click="getTag(item.id)">
      {{item.preference}}
    </b-button>

   </div>
      
      
      <!-- {{tagsData}} -->

    <!-- <span v-for="item in data" v-bind:key="item.name" @onload="loadTag()"> {{item.name}}  <br> </span> -->
  


    <!-- <button type="submit" :class=" 'btn white btn-block ' "> </button> -->
</div>

</template>

<script>
// import axios from 'axios'

export default {
  name: 'cpmButton',
   props: ['tagsData'],
      
  components: {
      
  },
  created() {
    this.setPreferenceOnLoad()
  },
        mounted() {

          // this.renderTags()
     
          // this.info['1'] = fals

        },
        data: () => ({

          data:'',
          info:{},
          tagInfo:[],
          tagname: [],
          sendTags:'',
          tagKey:0,
          // itemsArray:[],

            

        }),
        methods: {
          // renderTags(){
          //   axios.get('http://localhost:3000/api/tags/preferences')
          //   .then( (response) => {
          //     this.data = response.data;
          //      this.createTagArray();
            
          //   })
          // },

        

          createTagArray(){
            // alert(this.data)
            for(let item in this.data){
              this.info[item] = false;
              // this.info['1'] = false
            }

            // if()
              /* eslint-disable no-console */
          },




          getTag(dataId){
            this.tagKey = this.tagKey + 1;
            this.info[dataId] = !this.info[dataId] 
            this.tagInfo.push(dataId)
              /* eslint-disable no-console */
              // console.log(this.info)

            // if(this.info[dataId]){
              //   /* eslint-disable no-console */
            //   console.log(this.info)
            
            // }
          

            

            // for(let ids in this.data){
            //   this.info[ids] = false;
   
            // console.log(this.info)
              
            // }

            // [1,222,4,'teucu',5,6,674,424324,42423]
            // {'1': true, '222': false, 4: false, teucu: true}
            // for( )
            // index !// !!!: 
            // prop

            // this.info['1'] = 'dhudhushd'
            let itemsArray = [];
            for (var prop in this.info) {
              if(this.info[prop]){
                itemsArray.push('' + prop )
            }}
            // console.log(itemsArray)
            this.setPreference(itemsArray)


          },
          removetag(dataId){
            this.tagInfo = this.tagInfo.filter(function(value){
              return value != dataId;

          })
          
          },

          setPreference(param){
  
            // alert(param)
            this.sendTags = param
            // console.log(param)
            this.$emit("setTags", param);


              

            

          // axios.post('http://localhost:3000/api/preferences/event', this.data, {
          //  EventId: 1,
          //  PreferenceId: this.sendTags,
          // }).then(response => (console.log(response)))
        },

        setPreferenceOnLoad(){

          for(let itens in this.tagsData.filtered){
            this.getTag(this.tagsData.filtered[itens])
            // console.log('tag',itens)
          }
        }

            
        },
        computed: {
        
        },
        watch: {

        }
}
</script>
