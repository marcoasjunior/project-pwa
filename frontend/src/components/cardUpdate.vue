<template>
    <div class="card shadow rounded">
        <button class="upload-image-event">Carrege a nova imagem</button>
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
            newData: {
                name: null,
                local: null,
                edate: null,
                id: this.post.id

            }

        }
    },
    methods: {

        sendForm() {
            axios
                .put('http://localhost:3000/api/update/event', this.newData)
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