<template>
  <div id="app">
    <nav-bar></nav-bar>
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
  #app{}
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
</style>
