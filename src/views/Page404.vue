<template>
  <b-container fluid class="container-404">
     <img src="../../public/images/404.jpg" class="image-404">
  </b-container>
</template>
<script>
export default {
  name: 'Page404',
  mounted () {
    if (window.innerHeight >= 937) {
      const heightContainer = window.innerHeight - 62 - 421
      const $imageContainer = document.querySelector('.container-404')
      $imageContainer.style.height = String(heightContainer) + 'px'
    } else {
      const $imageContainer = document.querySelector('.container-404')
      $imageContainer.style.height = '454px'
    }
  }
}
</script>
<style scoped>
.container-404{
  text-align: center;
  /* height: 454px; */
}
.image-404{
  height: 100%;
}
</style>
