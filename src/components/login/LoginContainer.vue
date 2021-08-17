<template>
    <b-container fluid class="container-login-inner">
        <div class="title-login">{{ $t('login.title') }}</div>
        <div class="subtitle-login">{{ $t('login.subtitle') }}</div>
        <form action="" @submit.prevent="login()">
          <div><input type="text" class="input-text" v-model="username" :placeholder="$t('login.form.user')"></div>
           <div class="error" v-if="!$v.username.required && loginPressed">{{ $t('login.form.userRequired') }}</div>
          <div><input type="password" class="input-text" v-model="password" :placeholder="$t('login.form.password')"></div>
           <div class="error" v-if="!$v.password.required && loginPressed">{{ $t('login.form.passwordRequired') }}</div>
          <div class="button-container"><button type="submit" class="button-login">{{ $t('login.form.login') }}</button></div>
        </form>
        <div class="container-buttom-text">{{ $t('login.msg1') }} <router-link to="/config/register" class="link-bottom">{{ $t('login.link1') }}</router-link></div>
        <div class="container-buttom-text">{{ $t('login.msg2') }} <router-link to="/config/verify" class="link-bottom">{{ $t('login.link2') }}</router-link></div>
    </b-container>
</template>
<script>
import { required } from 'vuelidate/lib/validators'
/* Import the Amplify Auth API */
import Amplify, { Auth } from 'aws-amplify'
import awsconfig from '../../aws-exports'
import Swal from 'sweetalert2'
import axios from 'axios'
import dbConfig from '../../config'
Amplify.configure(awsconfig)
export default {
  name: 'LoginContainer',
  data () {
    return {
      username: null,
      password: null,
      loginPressed: false
    }
  },
  async mounted () {
    if (window.innerWidth >= 768) {
      const heightContainer = window.innerHeight - 62
      const $registerContainer = document.querySelector('.container-login-inner')
      $registerContainer.style.height = String(heightContainer) + 'px'
    }
  },
  methods: {
    async register () {
      // AUTHENTICATION AND LOGIN
      console.log('loging ...')
      try {
        const { user } = await Auth.signUp({
          username: 'MURRUTIA_10',
          password: 'JeronimoU1234567891025',
          attributes: {
            email: 'javichonarco7@gmail.com'
          }
        })
        console.log(user)
      } catch (err) {
        console.log(err)
      }
    },
    async login () {
      // AUTHENTICATION AND LOGIN
      this.loginPressed = true
      console.log(this.username)
      console.log(this.password)
      try {
        const user = await Auth.signIn(this.username, this.password)
        /* Swal.fire({
          title: 'Se registro correctamente el usuario.',
          icon: 'success',
          confirmButtonText: 'Continuar'
        }) */
        console.log(user)
        const respSession = await Auth.currentSession()
        const accessToken = respSession.getAccessToken()
        const jwt = accessToken.getJwtToken()
        // const parseJsonAccessToken = JSON.stringify(accessToken)
        const payload = accessToken.payload
        const clientId = payload.client_id
        // You can print them to see the full objects
        console.log('accessToken: ', accessToken)
        console.log('payload: ', payload)
        console.log('clientId: ', clientId)
        // console.log(`myJwt: ${jwt}`)
        console.log('el token : ', jwt)
        // console.log('el clientId : ', clientId)
        localStorage.setItem('username', this.username)
        localStorage.setItem('clientId', clientId)
        const dataCliente = await axios.post(dbConfig.endpoint + 'user/getUserById', { DSC_USERNAME: this.username })
        console.log('el dataCliente : ', dataCliente.data)
        localStorage.setItem('userObj', JSON.stringify(dataCliente.data.obj))

        // localStorage.setItem('username', this.username)
        sessionStorage.setItem('username', this.username)
        const dataClienteObj = dataCliente.data.obj
        // dataClienteObj.DSC_TELEFONO = '561351684'
        if (dataClienteObj.FLG_INICIO_SESION === '0') {
          dataClienteObj.ID_PAIS = 1// parseInt(dataClienteObj.ID_PAIS)// ? dataClienteObj.ID_PAIS : 1
          const respCreateClient = await axios.post(dbConfig.endpoint + 'client/createClient', dataClienteObj)
          console.log('respCreateClient : ', respCreateClient)
          await axios.put(dbConfig.endpoint + 'user/updateUserByLogin', { DSC_USERNAME: this.username, id_cliente: respCreateClient.data.obj.id_cliente })
          // console.log('el dataCliente : ', dataCliente)
        }
        // window.location.href = 'http://isc-overview-monitor.s3-website-us-east-1.amazonaws.com/overview/accounts'
        window.location.href = 'http://isc-overview-monitor.s3-website-us-east-1.amazonaws.com/settings/home'
      } catch (error) {
        console.log('error signing in', error)
        if (error.code === 'NotAuthorizedException') {
          Swal.fire({
            title: 'Incorrect username or password.',
            icon: 'error',
            confirmButtonText: 'Aceptar'
          })
        } else if (error.code === 's') {
          Swal.fire({
            title: 'Ocurrio un error al loguearse.',
            icon: 'error',
            confirmButtonText: 'Aceptar'
          })
        } else {
          Swal.fire({
            title: 'An error occurred when logging in.',
            icon: 'error',
            confirmButtonText: 'Aceptar'
          })
        }
      }
    },
    async corfirm () {
      try {
        await Auth.confirmSignUp('MURRUTIA_10', '698737')
      } catch (error) {
        console.log('error confirming sign up', error)
      }
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
