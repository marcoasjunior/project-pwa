<template>
    <div class="card-modal shadow rounded">
        <div id="preview">
            <b-img v-show="url" :src="url" fluid />
        </div>
        <b-form-file v-model="filev" :state="Boolean(filev)" placeholder="Imagem" name='avatar'
            ref="fileInput" @change="onFileChange($event)" required capture accept="image/*,.pdf"></b-form-file>
        <div class="card-body">
            <form @submit="sendForm">
                <div class="form-group">
                    <label for="InputName">Novo nome</label>
                    <input type="text" class="form-control" id="InputName1" aria-describedby="emailHelp"
                        v-model="newData.name" required>
                </div>
                <div class="form-group">
                    <label for="InputLocal">Novo local</label>
                    <input type="text" class="form-control" id="InputLocal1" aria-describedby="emailHelp"
                        v-model="newData.local" required>
                </div>
                <div class="form-group">
                    <label for="InputLocal">Novo endereço</label>
                    <input type="text" class="form-control" id="InputAdress1" aria-describedby="emailHelp"
                        v-model="newData.address" required>
                </div>
                <div class="form-group">
                    <label for="InputPassword">Nova data</label>
                    <input type="text" class="form-control" id="InputDate1" v-model="newData.edate" required>
                </div>
                <b-button @click="deleteEvent" variant="warning">Deletar Evento</b-button>
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
            filev: null,
            
            newData: {
                name: null,
                local: null,
                edate: null,
                address: null,
                file: null

            }

        }
    },
    methods: {

    deleteEvent() {
        axios
            .delete(`http://localhost:3000/api/delete/event/${this.post.id}`)
            .then(response => this.putResponse = response)
            .catch(e => {
                this.errors.push(e)
            })
        this.$emit('modalOff', this.post.id)
    },

    onFileChange(e) {
            const file = e.target.files[0];
            this.url = URL.createObjectURL(file);
            this.newData.file = file
        },


    sendForm() {
        const formData = new FormData()
        formData.append('file', this.newData.file)
        formData.append('name', this.newData.name)
        formData.append('local', this.newData.local)
        formData.append('edate', this.newData.edate)
        formData.append('address', this.newData.address)
        formData.append('id', this.post.id)
        this.putResponse = formData

        const config = {
            header: {
                'Content-Type': 'multipart/form-data'
            }
        }

        axios
            .put('http://localhost:3000/api/update/event', formData, config)
            .then(response => this.putResponse = response)
            .catch(e => {
                this.errors.push(e)
            })
        this.$emit('modalOff')

    }

    },

    
    }

</script>

