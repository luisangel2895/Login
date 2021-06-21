<template>
    <b-container fluid class="container-gift">
      <img src="../../../public/images/login.gif" class="gift-login">
    </b-container>
</template>
<script>
export default {
  name: 'GifContainer',
  mounted () {
    if (window.innerHeight >= 937) {
      const heightContainer = window.innerHeight
      const $imageContainer = document.querySelector('.container-gift')
      $imageContainer.style.height = String(heightContainer) + 'px'
    } else {
      const $imageContainer = document.querySelector('.container-gift')
      $imageContainer.style.height = '875px'
    }
  }
}
</script>
<style scoped>
.container-gift{
  background-color: #00A5FF;
  display: flex;
  justify-content: center;
  align-items: center;
}
.gift-login{
  width: 60%;
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
