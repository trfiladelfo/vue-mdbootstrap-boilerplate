<template>
  <div id="app">
    <div class="border login">
      <form class="p-4">
        <div class="text-center mb-3">
          <img
            src="https://imgplaceholder.com/420x320/transparent/757575/fa-institution"
            style="widht:200px; height:100px; margin-left: auto; margin-right: auto;"
          >
        </div>
        <div class="form-group md-form mt-5">
          <label for="login">LOGIN</label>
          <input type="text" class="form-control">
        </div>
        <div class="form-group md-form mt-5">
          <label for="login">SENHA</label>
          <input type="password" class="form-control">
        </div>
        <a class="text-secondary">Esqueceu a senha?</a>
        <div class="text-center mt-4">
          <button type="button" class="btn btn-success">ACESSAR</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>

<style lang="scss" scoped>
#app {
  width: 100vw;
  height: 100vh;
  background-image: url("../assets/bg_login.png");
}

.login {
  width: 40vw;
  height: 80vh;
  background-color: white;
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
@media (max-width: 576px) {
  .login {
    width: 86vw;
    height: 80vh;
  }
}
@media (max-width: 768px) {
  .login {
    width: 77vw;
    height: 80vh;
  }
}
</style>
