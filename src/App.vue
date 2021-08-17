<template>
  <div id="app">
    <nav-bar></nav-bar>
    <b-container fluid class="separator" style="background-color: black;"></b-container>
    <router-view/>
    <footer-component></footer-component>
  </div>
</template>
<script>
import NavBar from './components/NavBar.vue'
import FooterComponent from './components/FooterComponent.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    FooterComponent
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;400&display=swap');
#app{
font-family: 'Montserrat', sans-serif, 'Oxygen';
background-color: #d9dddd;
}
::-webkit-scrollbar {
  width: 12px;
}
::-webkit-scrollbar-track {
  background-color: rgba(0, 0, 0, 0.1);
}
::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 20px;
}
::-webkit-scrollbar-corner {
  background-color: rgb(172, 0, 0);
}
.separator{
  height: 62px;
}
</style>
