<template>
    <b-container fluid>
        <b-row>
            <b-col class="col-login col-remove"><gif-container></gif-container></b-col>
            <b-col class="col-login"><login-container></login-container></b-col>
        </b-row>
    </b-container>
</template>
<script>
import GifContainer from './GIfContainer.vue'
import LoginContainer from './LoginContainer.vue'

export default {
  name: 'MainContainer',
  components: {
    GifContainer,
    LoginContainer
  }
}
</script>
<style scoped>
.col-login{
  padding: 0px;
}
@media (max-width: 768px) {
  .col-remove{
    display: none;
  }
}
</style>
