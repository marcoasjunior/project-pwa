<template>
    <div class="card shadow rounded">
        <div id="preview">
            <b-img v-show="url" :src="url" fluid />
        </div>

<div class=" ac container-upload mt-3">

        <input class="upload ac" ref="fileInput" type="file" @change="onFileChange($event)" required capture
            accept="image/*,.pdf">


              <svg class="ac upload-icon" v-show="!this.data.file" aria-hidden="true" focusable="false" data-prefix="fad" data-icon="file-upload" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><g class="fa-group"><path fill="currentColor" d="M384 128H272a16 16 0 0 1-16-16V0H24A23.94 23.94 0 0 0 0 23.88V488a23.94 23.94 0 0 0 23.88 24H360a23.94 23.94 0 0 0 24-23.88V128zm-94.82 224H224v80a16 16 0 0 1-16 16h-32a16 16 0 0 1-16-16v-80H94.82c-14.28 0-21.41-17.29-11.27-27.36L180 229a17.06 17.06 0 0 1 24 0l96.43 95.65c10.15 10.07 3 27.35-11.25 27.35z" class="fa-secondary color-icon"></path><path fill="currentColor" d="M377 105L279.1 7a24 24 0 0 0-17-7H256v112a16 16 0 0 0 16 16h112v-6.1a23.9 23.9 0 0 0-7-16.9zM204 229a17.06 17.06 0 0 0-24 0l-96.45 95.64C73.41 334.71 80.54 352 94.82 352H160v80a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-80h65.18c14.25 0 21.4-17.29 11.25-27.36z" class="fa-primary"></path></g></svg>
             <b-button v-show="this.data.file" variant="info">trocar?</b-button>
             
</div>

        <div class="card-body">

            
            <form @submit="sendForm">

                    <b-form-input class="mt-5 mb-3" v-model="data.name" required placeholder="Nome do Evento"></b-form-input>

                    <b-form-input class="mt-2 mb-3" v-model="data.local" required placeholder="Local do Evento"></b-form-input>
                    
                    <b-form-input class="mt-2 mb-3" v-model="query" required placeholder="Endereço"></b-form-input>
                    
                    <cardAddress @address='query = $event' :query='query'> </cardAddress>
                    
                    <b-form-input type="date" class="mt-2 mb-3" v-model="data.edate" required></b-form-input>

                    <b-form-input type="time" class="mt-2 mb-3" v-model="data.edate" required></b-form-input> 

                <button type="submit" class="btn btn-primary">Criar Evento</button>

            </form>
        </div>
    </div>
</template>

<script>
import {
    axios
} from '../main'
import cardAddress from './cardAddress.vue'

export default {

    data() {
        return {
            errors: [],
            url: null,
            putResponse: [],
            query: "",
            data: {
                name: '',
                local: '',
                edate: '',
                address: '',
                file: '',
            }
        }
    },

    components: {
        cardAddress
    },

    methods: {

    

        onFileChange(e) {
            const file = e.target.files[0];
            this.url = URL.createObjectURL(file);
            this.data.file = file

                  
        },

        sendForm() {
            const formData = new FormData()
            formData.append('file', this.data.file)
            formData.append('name', this.data.name)
            formData.append('local', this.data.local)
            formData.append('edate', this.data.edate)
            formData.append('address', this.data.address)
            formData.append('UserId', sessionStorage.getItem('id'))
            this.putResponse = formData

            const config = {
                header: {
                    'Content-Type': 'multipart/form-data'
                }
            }

            axios
                .post('http://localhost:3000/api/create/event', formData, config)
                .then(response => this.putResponse = response)
                .catch(e => {
                    this.errors.push(e)
                })

        }

    },


}

</script>

<style scoped>
.card {
  margin-top: 1%;
  margin-left: auto;
  margin-right: auto;
  width: 90%;
}
svg {
  width: 20px;
  height: 20px;
}
</style>