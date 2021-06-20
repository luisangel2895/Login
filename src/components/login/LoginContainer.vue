<template>
    <b-container fluid class="container-login-inner">
      <div>formulario</div>
    </b-container>
</template>
<script>
export default {
  name: 'LoginContainer',
  mounted () {
    console.log(window.innerHeight)
    if (window.innerHeight >= 937) {
      const heightContainer = window.innerHeight - 62
      const $loginContainer = document.querySelector('.container-login-inner')
      $loginContainer.style.height = String(heightContainer) + 'px'
    } else {
      const $loginContainer = document.querySelector('.container-login-inner')
      $loginContainer.style.height = '875px'
    }
  }
}
</script>
<style scoped>
.container-login-inner{
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
