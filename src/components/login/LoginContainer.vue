<template>
    <b-container fluid class="container-login-inner">
        <div class="title-login">{{ $t('login.title') }}</div>
        <div class="subtitle-login">{{ $t('login.subtitle') }}</div>
        <form action="" @submit.prevent="login()">
          <div><input type="text" class="input-text" v-model="username" :placeholder="$t('login.form.user')"></div>
           <div class="error" v-if="!$v.username.required && loginPressed">{{ $t('login.form.userRequired') }}</div>
          <div><input type="text" class="input-text" v-model="password" :placeholder="$t('login.form.password')"></div>
           <div class="error" v-if="!$v.password.required && loginPressed">{{ $t('login.form.passwordRequired') }}</div>
          <div class="button-container"><button type="submit" class="button-login">{{ $t('login.form.login') }}</button></div>
        </form>
        <div class="container-buttom-text">{{ $t('login.msg1') }} <router-link to="register" class="link-bottom">{{ $t('login.link1') }}</router-link></div>
        <div class="container-buttom-text">{{ $t('login.msg2') }} <router-link to="verify" class="link-bottom">{{ $t('login.link2') }}</router-link></div>
    </b-container>
</template>
<script>
import { required } from 'vuelidate/lib/validators'

export default {
  name: 'LoginContainer',
  data () {
    return {
      username: null,
      password: null,
      loginPressed: false
    }
  },
  mounted () {
    if (screen.width >= 768) {
      const heightContainer = window.innerHeight
      const $registerContainer = document.querySelector('.container-login-inner')
      $registerContainer.style.height = String(heightContainer) + 'px'
    }
  },
  methods: {
    login () {
      // AUTHENTICATION AND LOGIN
      this.loginPressed = true
      console.log('loging ...')
    }
  },
  validations: {
    username: { required },
    password: { required }
  }
}
</script>
<style scoped>
.container-login-inner{
  background-color: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.title-login{
  font-size: 52.5px;
  text-align: center;
  font-weight: 200;
}
.subtitle-login{
  font-size: 16px;
  font-weight: lighter;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
}
.input-text{
  width: 50%;
  margin-left: 25%;
  outline: none;
  border: 0;
  border-bottom: 1px solid rgb(137, 137, 137);
  font-size: 14px;
  padding: 15px 25px;
}
.button-container{
  text-align: center;
}
.button-login{
 width: 50%;
 margin-top: 50px;
 padding-top: 20px;
 padding-bottom: 20px;
 font-size: 18px;
 font-weight: 600;
 color: white;
 background-color: rgb(0, 206, 193);
 border:none;
 border-radius: 8px;
 margin-bottom: 10px;
}
.button-login:hover{
 background-color: rgb(3, 189, 177);
 }
.container-buttom-text{
  margin-top: 10px;
  font-size: 14px;
  font-weight: 200;
  text-align: center;
 }
 .link-bottom{
  color: black;
 }
 .error{
   margin-top: 5px;
  text-align: center;
  font-size: 12px;
  color: #f44336;
 }
</style>
