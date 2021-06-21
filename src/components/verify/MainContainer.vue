<template>
    <b-container fluid>
        <b-row>
            <b-col class="col-login"><gif-container></gif-container></b-col>
            <b-col class="col-login"><verify-container></verify-container></b-col>
        </b-row>
    </b-container>
</template>
<script>
import GifContainer from '../login/GIfContainer.vue'
import VerifyContainer from './VerifyContainer.vue'

export default {
  name: 'MainContainer',
  components: {
    GifContainer,
    VerifyContainer
  }
}
</script>
<style scoped>
.col-login{
  padding: 0px;
}
</style>
