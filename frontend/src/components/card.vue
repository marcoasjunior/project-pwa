<template>
  <div class="demo-card-wide mdl-card mdl-shadow--2dp" id="dad">
    <div class="mdl-card__media">
        <img class="img-fluid" :src=vImage>
      </div>

      <div class="mdl-card__supporting-text">
          <span> Evento {{event}} </span>       
          <span> Local {{local}} </span>
          <span> km {{kilo}}</span>           
      </div>
      <div class="mdl-card__actions mdl-card--border">
          <span> Postado há {{date}} </span>
          
      </div>
      <div class="mdl-card__menu">
          <button class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
          <i class="material-icons">share</i>
          </button>
      </div>
  </div>
</template>

<script>

export default {
    
  props: ['event', 'local', 'kilo', 'date', 'image'],
  data() {
    return {
      vImage: this.image
      
  }}}

</script>

<style scoped>

#dad{
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  width: 90%;
}

.mdl-card__media {
  max-width: 100%;
  height: 50%
}

img {
  max-width: 100%;
  height: 30vh;
  margin-left: auto;
  margin-right: auto;
}

.demo-card-wide.mdl-card {
  width: 512px;
}
.demo-card-wide > .mdl-card__title {
  color: #fff;
  height: 176px;
}
.demo-card-wide > .mdl-card__menu {
  color: #fff;
}
</style>