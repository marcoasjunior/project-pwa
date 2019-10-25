<template>
  <div>  
    <div class="container-fluid">
      <div class="card testimonial-card">
        <div class="avatar mx-auto white">
          <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg" class="rounded-circle img-fluid">
        </div>
          <div class="container">
            <div class="row">
              <div class="col" id="titulo">
                <span>Marco Antônio da Silva Júnior</span>
              </div>
            </div>
           <div class="row">
              <div class="col">
                <div class="md-form">
                  <i class="fas fa-envelope prefix"></i>
                  <input type="text" id="inputIconEx1" class="form-control">
                  <label for="inputIconEx1">E-mail address</label>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <div class="md-form">
                  <i class="fas fa-lock prefix"></i>
                  <input type="password" id="inputValidationEx2" class="form-control validate">
                  <label for="inputValidationEx2" data-error="wrong" data-success="right">Type your password</label>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'options-card'
}
</script>

<style scoped>

.avatar {
  vertical-align: middle;
  width: 80px;
  height: 80px;
  margin-top: 10px
}

.h3 {
 
  margin-top: 10px;
  margin-bottom: 10px
}

.p-2 {
  margin: 0px;
}

#titulo {
  text-align: center;
  font-size: 2.5vh;
  margin-top: 10px
}

</style>