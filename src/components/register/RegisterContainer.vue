<template>
    <b-container fluid class="container-register-inner">
      <div>formulario</div>
    </b-container>
</template>
<script>
export default {
  name: 'RegisterContainer',
  mounted () {
    console.log(window.innerHeight)
    if (window.innerHeight >= 937) {
      const heightContainer = window.innerHeight - 62
      const $registerContainer = document.querySelector('.container-register-inner')
      $registerContainer.style.height = String(heightContainer) + 'px'
    } else {
      const $registerContainer = document.querySelector('.container-register-inner')
      $registerContainer.style.height = '875px'
    }
  }
}
</script>
<style scoped>
.container-register-inner{
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
