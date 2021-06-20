<template>
  <b-navbar class="nav-bar" fixed="top">
    <b-container is-nav class="nav-container">
      <b-navbar-brand href="/"><img src="../../public/images/logo.png" class="logo-navbar"></b-navbar-brand>
      <b-navbar-nav>
        <b-nav-item><router-link to="/" class="link-navbar">{{ $t('navbar.home') }}</router-link></b-nav-item>
        <b-nav-item @mouseover="hoverEcosystem(true)" @mouseleave="hoverEcosystem(false)">
          <router-link to="#" class="link-navbar">{{ $t('navbar.ecosystem.title') }} <b-icon-chevron-down class="icon-ecosystem"></b-icon-chevron-down></router-link>
        </b-nav-item>
        <b-list-group class="list-ecosystem" v-show="showList" @mouseover="hoverEcosystem(true)" @mouseleave="hoverEcosystem(false)">
            <div class="triangle"></div>
            <b-list-group-item class="item-list-ecosystem" @click="redirect('listen')">{{ $t('navbar.ecosystem.sections.listen') }}</b-list-group-item>
            <b-list-group-item class="item-list-ecosystem" @click="redirect('monitor')">{{ $t('navbar.ecosystem.sections.monitor') }}</b-list-group-item>
            <b-list-group-item class="item-list-ecosystem" @click="redirect('design')">{{ $t('navbar.ecosystem.sections.design') }}</b-list-group-item>
            <b-list-group-item class="item-list-ecosystem" @click="redirect('advice')">{{ $t('navbar.ecosystem.sections.advice') }}</b-list-group-item>
        </b-list-group>
        <b-nav-item><router-link to="/contact" class="link-navbar">{{ $t('navbar.contact') }}</router-link></b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="navbar-rigth">
        <b-nav-item v-if="showLoginButton"><button class="button-nav" type="button" @click="showRegister()"><router-link to="/login" class="link-button-nav">{{ $t('navbar.login') }}</router-link></button></b-nav-item>
        <b-nav-item v-if="showRegisterButton"><button class="button-nav" type="button" @click="showLogin()"><router-link to="/register" class="link-button-nav">{{ $t('navbar.register') }}</router-link></button></b-nav-item>
        <b-nav-item><b-nav-text @click="selectLang('es')" class="change-lang">ES</b-nav-text></b-nav-item>
        <b-nav-item><b-nav-text class="lang-separator">|</b-nav-text></b-nav-item>
        <b-nav-item><b-nav-text @click="selectLang('en')" class="change-lang">EN</b-nav-text></b-nav-item>
      </b-navbar-nav>
    </b-container>
  </b-navbar>
</template>

<script>
export default {
  name: 'NavBar',
  data () {
    return {
      showList: false,
      actualRoute: null,
      showLoginButton: true,
      showRegisterButton: false
    }
  },
  methods: {
    selectLang (lang) {
      this.$i18n.locale = lang
    },
    hoverEcosystem (show) {
      this.showList = show
    },
    redirect (route) {
      if (this.actualRoute !== route) this.$router.push(route)
      this.actualRoute = route
    },
    showRegister () {
      this.showLoginButton = false
      this.showRegisterButton = true
    },
    showLogin () {
      this.showLoginButton = true
      this.showRegisterButton = false
    }
  }
}
</script>

<style scoped>
.nav-bar{
  background-color: #00A5FF;
  height: 62px;
}
.nav-container{
  width: 80%;
}
.navbar-rigth{
  margin-left: auto;
  margin-right: 0%;
}
.logo-navbar{
  width: 36px;
}
.list-ecosystem{
  position: absolute;
  top: 45px;
  margin-left: 90px;
  width: 160px;
}
.triangle{
  width: 0;
  height: 0;
  border-right: 10px solid transparent;
  border-top: 10px solid transparent;
  border-left: 10px solid transparent;
  border-bottom: 10px solid white;
}
.item-list-ecosystem{
  background-color: white;
  border: 1px solid rgb(245, 245, 245);
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
}
.item-list-ecosystem:hover{
  background-color: #00A5FF;
  color: white;
}
.icon-ecosystem{
  color: white;
  width: 10px;
}
.link-navbar{
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  color: white;
  margin: 0px 10px;
}
.link-navbar:active{
  color: #FFBF00;
}
.change-lang{
  font-weight: 600 !important;
  font-size: 14px !important;
  color: white !important;
}
.lang-separator{
  font-weight: 600 !important;
  font-size: 14px !important;
  color: white !important;
}
.button-nav{
  border: 1px solid white;
  background-color: #00A5FF;
  padding:6px 17px;
  border-radius: 5px;
}
.button-nav:hover{
  background-color: rgb(0, 156, 240);
  border: 1px solid white;
}
.link-button-nav{
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  color: white;
}
</style>
