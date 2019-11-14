<template>
    <div class="card shadow rounded">
        <div id="preview">
            <b-img v-show="url" :src="url" fluid />
        </div>
        <input id='image_uploads' ref="fileInput" type="file" @change="onFileChange($event)" required capture
            accept="image/*,.pdf">
        <div class="card-body">
            <form @submit="sendForm">




                    <b-form-input class="mt-5 mb-3" v-model="data.name" required placeholder="Nome do Evento"></b-form-input>

                    <b-form-input class="mt-2 mb-3" v-model="data.local" required placeholder="local do Evento"></b-form-input>
                    
                    <b-form-input class="mt-2 mb-3" v-model="data.address" required placeholder="endereço do Evento"></b-form-input>
                    
                    <b-form-input type="date" class="mt-2 mb-3" v-model="data.edate" required placeholder="data do Evento"></b-form-input>

                <button type="submit" class="btn btn-primary">Alterar Dados</button>

            </form>
        </div>
    </div>
</template>

<script>
import {
    axios
} from '../main'

export default {

    props: {
        post: Object
    },
    data() {
        return {
            errors: [],
            url: null,
            putResponse: [],
            
            data: {
                name: '',
                local: '',
                edate: '',
                address: '',
                file: '',
            }

        }
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