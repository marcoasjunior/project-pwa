<template>
    <div class="card shadow rounded">
        <div id="preview">
            <b-img v-show="url" :src="url" fluid />
        </div>
        <input id='image_uploads' ref="fileInput" type="file" @change="onFileChange($event)" required capture
            accept="image/*,.pdf">
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
                    <label for="InputPassword">Nova data</label>
                    <input type="text" class="form-control" id="InputDate1" v-model="newData.edate" required>
                </div>
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
            
            newData: {
                name: null,
                local: null,
                edate: null,
                picture: null,
                id: this.post.id

            }

        }
    },
    methods: {

    onFileChange(e) {
            const file = e.target.files[0];
            this.url = URL.createObjectURL(file);
            this.newData.picture = file
        },


        sendForm() {

            const config = {
                header: {
                    'Content-Type': 'multipart/form-data'
                }
            }

            axios
                .put('http://localhost:3000/api/update/event', this.newData, config)
                .then(response => this.putResponse = response)
                .catch(e => {
                    this.errors.push(e)
                })
            this.$emit('modalOff')

        },

    }
    }

</script>

<style scoped>
.card {
  margin-top: 1%;
  margin-left: auto;
  margin-right: auto;
  width: 90%
}
svg {
  width: 20px;
  height: 20px;
}
</style>