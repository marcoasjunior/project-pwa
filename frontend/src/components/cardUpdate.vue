<template>
    <div class="card-modal shadow rounded">
        <div id="preview">
            <b-img v-show="url" :src="url" fluid />
        </div>
        <b-form-file v-model="filev" :state="Boolean(filev)" placeholder="Imagem" name='avatar' ref="fileInput"
            @change="onFileChange($event)" required capture accept="image/*,.pdf"></b-form-file>
        <div class="card-body">
            <form @submit="sendForm">

                <b-form-input class="mt-5 mb-3" v-model="data.name" required placeholder="Nome do Evento"></b-form-input>

                <b-form-input class="mt-2 mb-3" v-model="data.local" required placeholder="Local do Evento"></b-form-input>

                <b-form-input class="mt-2 mb-3" v-model="query" required placeholder="Endereço"></b-form-input>

                <cardAddress @renderMap='renderingMap' @address='query = $event' :query='query'> </cardAddress>

                <HereMap v-if="coord" :coord='coord' />

                <b-form-input type="datetime-local" class="mt-2 mb-3" v-model="data.edate" required></b-form-input>

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
import cardAddress from './cardAddress'
import HereMap from './hereMap'

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
            coord: null,
            query: "",
            data: {
                name: '',
                local: '',
                edate: '',
                address: '',
                file: '',
                latitude: null,
                longitude: null
            }

            }

        
    },
    methods: {

        
        renderingMap() {

            let replace = (this.query.replace(/, /g, '%20')).replace(/ /g, '%20')

           axios
                .get(`https://geocoder.api.here.com/6.2/geocode.json?app_id=g4qzn6OUOLYfn2OFO6Z8&app_code=pAi1rwxOkCnBaQHm4CbURg&searchtext=${replace}`)
                .then(response => {
                    this.coord = response.data.Response.View[0].Result[0].Location.DisplayPosition
                    this.data.latitude = this.coord.Latitude
                    this.data.longitude = this.coord.Longitude
                })

        },

    deleteEvent() {
        
  
        if (confirm("Quer mesmo deletar este evento?")) {
        axios
            .delete(`http://localhost:3000/api/delete/event/${this.post.id}`)
            .then(response => this.putResponse = response)
            .catch(e => {
                this.errors.push(e)
            })
            this.$emit('dModalOff', this.post.id)}
    },
       

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
            formData.append('address', this.query)
            formData.append('id', this.post.id)
            this.putResponse = formData

            const config = {
                header: {
                    'Content-Type': 'multipart/form-data'
                }
            }

            axios
                .put(`${process.env.PROD_API}/update/event`, formData, config)
                .then(response => this.putResponse = response)
                .catch(e => {
                    this.errors.push(e)
                })
            this.$emit('modalOff')

    }

    },

    components: {
        cardAddress,
        HereMap
    }

    
    }

</script>

