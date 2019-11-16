<template>
    <div>

            <form>
                    
                    <b-form-input class="mt-2 mb-3" v-model="complement" required placeholder="Apto, Bloco... se existir"></b-form-input>
                    
                    <b-form-input class="mt-2 mb-3" v-model="street" required disabled placeholder="Rua"></b-form-input>

                    <b-form-input class="mt-2 mb-3" v-model="city" required disabled placeholder="Cidade"></b-form-input>

                    <b-form-input class="mt-2 mb-3" v-model="district" required disabled placeholder="Bairro"></b-form-input>

                    <b-form-input class="mt-2 mb-3" v-model="state" required disabled placeholder="Estado"></b-form-input>

                    <b-form-input class="mt-2 mb-3" v-model="postcode" required disabled placeholder="CEP"></b-form-input>

                    <b-form-input class="mt-2 mb-3" v-model="country" required disabled placeholder="País"></b-form-input>

                    <b-button size="sm" variant="info" @click="completeAddress">Endereço correto?</b-button>

            </form>
    </div>
</template>

<script>

export default {

    props: {
        query: String
    },
    data() {
        return {

            street: "",
            city: "",
            state: "",
            district: "",
            postcode: "",
            country: "",
            complement: ""

        }
    },
    methods: {

        completeAddress() {
            this.$emit('address', `${this.street}, ${this.complement}, ${this.district}, ${this.city}, ${this.postcode}, ${this.country}`)
        }
        
    },

    watch: {
        query: function(value) {
            fetch(`https://autocomplete.geocoder.api.here.com/6.2/suggest.json?app_id=g4qzn6OUOLYfn2OFO6Z8&app_code=pAi1rwxOkCnBaQHm4CbURg&maxresults=1&language=pt&query=${value}&country=BRA`)
                .then(result => result.json())
                .then(result => {
                    if(result.suggestions && result.suggestions.length > 0) {
                        if(result.suggestions[0].address.houseNumber && result.suggestions[0].address.street) {
                            this.street = result.suggestions[0].address.street + ", " + result.suggestions[0].address.houseNumber 
                        } else {
                            this.street = "";
                        }
                        this.city = result.suggestions[0].address.city ? result.suggestions[0].address.city : "";
                        this.state = result.suggestions[0].address.state ? result.suggestions[0].address.state : "";
                        this.postcode = result.suggestions[0].address.postalCode ? result.suggestions[0].address.postalCode : "";
                        this.district = result.suggestions[0].address.district ? result.suggestions[0].address.district : "";
                        this.country = result.suggestions[0].address.country ? result.suggestions[0].address.country : "";
                    } else {
                        this.street = "";
                        this.city = "";
                        this.state = "";
                        this.postalCode = "";
                        this.country = "";
                    }
                })
    }
}




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