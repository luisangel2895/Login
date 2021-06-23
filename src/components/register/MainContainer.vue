<template>
    <b-container fluid>
        <b-row>
            <b-col class="col-register col-remove"><image-container></image-container></b-col>
            <b-col class="col-register"><register-container></register-container></b-col>
        </b-row>
    </b-container>
</template>
<script>
import ImageContainer from './ImageContainer.vue'
import RegisterContainer from './RegisterContainer.vue'

export default {
  name: 'MainContainer',
  components: {
    ImageContainer,
    RegisterContainer
  }
}
</script>
<style scoped>
.col-register{
  padding: 0px;
}
@media (max-width: 768px) {
  .col-remove{
    display: none;
  }
}
</style>
