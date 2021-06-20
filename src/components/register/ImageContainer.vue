<template>
    <b-container fluid class="container-register">
      <img src="../../../public/images/register-opt.jpg" class="image-register">
    </b-container>
</template>
<script>
export default {
  name: 'ImageContainer',
  mounted () {
    console.log(window.innerHeight)
    if (window.innerHeight >= 937) {
      const heightContainer = window.innerHeight - 62
      const $imageContainer = document.querySelector('.container-register')
      $imageContainer.style.height = String(heightContainer) + 'px'
      const $image = document.querySelector('.image-register')
      $image.style.maxHeight = String(heightContainer) + 'px'
    } else {
      const $imageContainer = document.querySelector('.container-register')
      $imageContainer.style.height = '875px'
      const $image = document.querySelector('.image-register')
      $image.style.maxHeight = '875px'
    }
  }
}
</script>
<style scoped>
.container-register{
  background-color: #00A5FF;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
}
.image-register{
  width: 100%;
    -webkit-animation: fadein 0.7s; /* Safari, Chrome and Opera > 12.1 */
       -moz-animation: fadein 0.7s; /* Firefox < 16 */
        -ms-animation: fadein 0.7s; /* Internet Explorer */
         -o-animation: fadein 0.7s; /* Opera < 12.1 */
            animation: fadein 0.7s;
}

@keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Firefox < 16 */
@-moz-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Safari, Chrome and Opera > 12.1 */
@-webkit-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Internet Explorer */
@-ms-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Opera < 12.1 */
@-o-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}
</style>
