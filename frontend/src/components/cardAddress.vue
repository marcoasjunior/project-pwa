<template>
    <div class="information">
        <div>
            <label for="street">Street</label><br />
            <input type="text" v-model="street" disabled />
        </div>
        <div>
            <label for="city">City</label><br />
            <input type="text" v-model="city" disabled />
        </div>
        <div>
            <label for="state">State</label><br />
            <input type="text" v-model="state" disabled />
        </div>
        <div>
            <label for="postcode">Postal Code</label><br />
            <input type="text" v-model="postcode" disabled />
        </div>
        <div>
            <label for="country">Country</label><br />
            <input type="text" v-model="country" disabled />
        </div>
    </div>
</template>
<script>
    export default {
        name: "cardAddress",
        data() {
            return {
                street: "",
                city: "",
                state: "",
                postcode: "",
                country: ""
            };
        },
        props: {
            query: String
        },
        watch: {
            query: function(value) {
                fetch(`https://autocomplete.geocoder.api.here.com/6.2/suggest.json?app_id=g4qzn6OUOLYfn2OFO6Z8&app_code=pAi1rwxOkCnBaQHm4CbURg&maxresults=1&query=${value}`)
                    .then(result => result.json())
                    .then(result => {
                        if(result.suggestions && result.suggestions.length > 0) {
                            if(result.suggestions[0].address.houseNumber && result.suggestions[0].address.street) {
                                this.street = result.suggestions[0].address.houseNumber + " " + result.suggestions[0].address.street;
                            } else {
                                this.street = "";
                            }
                            this.city = result.suggestions[0].address.city ? result.suggestions[0].address.city : "";
                            this.state = result.suggestions[0].address.state ? result.suggestions[0].address.state : "";
                            this.postcode = result.suggestions[0].address.postalCode ? result.suggestions[0].address.postalCode : "";
                            this.country = result.suggestions[0].address.country ? result.suggestions[0].address.country : "";
                        } else {
                            this.street = "";
                            this.city = "";
                            this.state = "";
                            this.postalCode = "";
                            this.country = "";
                        }
                    }, error => {
                        console.error(error);
                    });
            }
        } },
        methods: {
            validate: function(query) {
                return fetch(`https://geocoder.api.here.com/6.2/geocode.json?app_id=APP_ID_HERE&app_code=APP_CODE_HERE&searchtext=${query}`)
                    .then(result => result.json())
                    .then(result => {
                        if(result.Response.View.length > 0 && result.Response.View[0].Result.length > 0) {
                            let data = result.Response.View[0].Result[0];
                            return data;
                        }
                    }, error => {
                        console.error(error);
                    });
    }
} 
    }
</script>
<style scoped>
    .information {
        width: 50%;
        margin: 15px 0px;
    }
    .information input {
        width: 100%;
        padding: 5px;
        margin: 5px 0px;
    }
</style>