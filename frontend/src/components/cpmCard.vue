<template>
<div>  

    <!-- <button type="submit" class="tag-preferences" v-for="item in tagname" v-bind:key="item.name"> {{item.name}}  <br> </button> -->
   <div class="ac container_card">

        <span class="ac upload-image-event">
            <h5 class="mt-3"> faça o upload da imagem aqui </h5>

      


            <div class="container-upload ac mt-3">

              <!-- <iframe src="" frameborder="0" name="upload_target"></iframe> -->
              <!-- <div class="image-preview" id="imagePreview"> -->
                <!-- <img :src="batata" alt="Image Preview" class="image-preview"> -->
              <!-- </div> -->

              <embed v-if="batata" :src="batata" class="image-preview"/>
  

              <input target="upload_target" type="file" class="upload" required capture accept="image/*,.pdf" @change="renderImage">


              <svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="file-upload" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class=" upload-icon"><g class="fa-group"><path fill="currentColor" d="M384 128H272a16 16 0 0 1-16-16V0H24A23.94 23.94 0 0 0 0 23.88V488a23.94 23.94 0 0 0 23.88 24H360a23.94 23.94 0 0 0 24-23.88V128zm-94.82 224H224v80a16 16 0 0 1-16 16h-32a16 16 0 0 1-16-16v-80H94.82c-14.28 0-21.41-17.29-11.27-27.36L180 229a17.06 17.06 0 0 1 24 0l96.43 95.65c10.15 10.07 3 27.35-11.25 27.35z" class="fa-secondary color-icon"></path><path fill="currentColor" d="M377 105L279.1 7a24 24 0 0 0-17-7H256v112a16 16 0 0 0 16 16h112v-6.1a23.9 23.9 0 0 0-7-16.9zM204 229a17.06 17.06 0 0 0-24 0l-96.45 95.64C73.41 334.71 80.54 352 94.82 352H160v80a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-80h65.18c14.25 0 21.4-17.29 11.25-27.36z" class="fa-primary"></path></g></svg>

            </div>

        </span>

    <div class="box-info">
        <p>Adicione o local do evento:</p>
    <span> {{ datas }}</span>
    <!-- <span> {{ image.name }}</span> -->

        <input type="text" class="input mt-2" placeholder="nome do Evento:" v-model="datas.name">
        <input type="text" class="input mt-2" placeholder="Local do Evento:" v-model="datas.local">
        <input type="date" class="input mt-2" placeholder="data do Evento:" v-model="datas.date">
        <input type="text" class="input mt-2" placeholder="endereço do Evento:" v-model="datas.addres">
        <input type="text" class="input mt-2 mb-1" placeholder="Evento criado por:" v-model="datas.UserId">
        <!-- deve imprimir mais informações sobre o loacal do evento -->
        <button class="btn btn-primary mt-2 mb-2"  @click="createEvent()">Criar Evento</button>
      </div>
   </div>


    <!-- <span v-for="item in data" v-bind:key="item.name" @onload="loadTag()"> {{item.name}}  <br> </span> -->


    <!-- <button type="submit" :class=" 'btn white btn-block ' "> </button> -->
</div>

</template>

<script>
import axios from 'axios';

export default {
  name: 'cpmButton',
//    props: ['cName'],
      
  components: {
      
  },
  created() {},
        mounted() {

          axios.get('http://localhost:3000/api/tags/preferences')
          .then(response => this.data = response.data)
          

        },
        data: () => ({ 

          batata:'',
          data:'',
          fileData:'',
          datas:{
            name:'',placeName:'',date:'',adress:'',userName:'', image:''
          },


        }),
        methods: {
          loadTag(){
            // console.log(this.data)
          },
          openFile(evento) {
            var input = evento.target;

              var reader = new FileReader();
              reader.onload = function(){
                var dataURL = reader.result;
                this.batata = dataURL;


              };
              reader.readAsDataURL(input.files[0]);
          },



              renderImage(event) {
                this.batata = "";
                var input = event.target;
              
                let action = input.files[0]
                
                if (input.files && action) {
                  var reader = new FileReader();
                  reader.onload = e => {
                    this.batata = e.target.result;
                  };
                  reader.readAsDataURL(input.files[0]);
                  this.onLoad();


                }

              },



          createEvent(){
                // eslint-disable-next-line no-console
                console.log(this.batata);
                const imageData = new FormData();
                imageData.append('file', this.batata);
                imageData.append('id', sessionStorage.getItem('id'));

                const config = {
                    header: {
                        'Content-Type': 'multipart/form-data'
                    }
                };


              axios
                .put('http://localhost:3000/api/update/event', imageData, config)
                .then(response => 
                    // eslint-disable-next-line no-console
                  console.log(response)
                )
              // this.$emit('modalOff')

      

            // axios.post('http://localhost:3000/api/register/event' ,this.data, {
            // name: this.datas.name,
            // placeName: this.datas.local,
            // date: this.datas.date,
            // adress: this.datas.adress,
            // userName: this.datas.userName,
            // updated: this.datas.updated,
            
            // }).then(response => ( this.checkUser(response) ))
          }

            
        },
        computed: {
        
        },
        watch: {

        }
}
</script>
