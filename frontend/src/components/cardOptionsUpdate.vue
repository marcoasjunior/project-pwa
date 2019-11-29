<template>
    <div class="card shadow rounded">
        <div id="preview">
            <b-img v-show="url" :src="url" fluid />
        </div>

            <b-form-file
                v-model="file"
                :state="Boolean(file)"
                placeholder="Escolha uma imagem"
                name='avatar'
                ref="fileInput"
                @change="onFileChange($event)"
                required 
                capture 
                accept="image/*,.pdf"
                ></b-form-file>

            <button type="submit" class="btn btn-primary" @click="sendForm">Alterar Dados</button>
       
    </div>
</template>

<script>
import {
    axios
} from '../main'

export default {



    data() {
        return {
            errors: [],
            url: null,
            newFile: null,
            putResponse: []
            }

        },


    methods: {

        onFileChange(e) {
                const file = e.target.files[0];
                this.url = URL.createObjectURL(file);
                this.newFile  = file
                
 
            },


        sendForm() {
            const formData = new FormData()
            formData.append('file', this.newFile)
            formData.append('id', sessionStorage.getItem('id'))
            this.putResponse = formData

            const config = {
                header: {
                    'Content-Type': 'multipart/form-data'
                }
            }

            axios
                // .put('http://localhost:3000/api/update/user/image', formData, config)
                .put('https://weparty-app.herokuapp.com/api/update/user/image', formData, config)
                .then(response => this.putResponse = response)
                .catch(e => {
                    this.errors.push(e)
                })
            this.$emit('modalOff')

        }

        },
        mounted() {

    },
}

</script>
