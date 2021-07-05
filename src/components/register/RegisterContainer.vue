<template>
    <b-container fluid class="container-register-inner">
      <div>
        <b-container>
          <div class="title-register">{{ $t('register.title') }}</div>
          <div class="subtitle-register">{{ $t('register.subtitle') }}</div>
          <form action="" @submit.prevent="register()">
            <div><input type="text" class="input-text" v-model="name" :placeholder="$t('register.form.name')"></div>
            <div class="error" v-if="!$v.name.required && registerPressed">{{ $t('register.form.nameRequired') }}</div>
            <div><input type="text" class="input-text" v-model="user" :placeholder="$t('register.form.user')"></div>
            <div class="error" v-if="!$v.user.required && registerPressed">{{ $t('register.form.userRequired') }}</div>
            <div><input type="text" class="input-text" v-model="email" :placeholder="$t('register.form.email')"></div>
            <div class="error" v-if="!$v.email.required && registerPressed">{{ $t('register.form.emailRequired') }}</div>
            <div class="error" v-if="!$v.email.email && registerPressed">{{ $t('register.form.emailValid') }}</div>
            <div><input type="password" class="input-text" v-model="password" :placeholder="$t('register.form.password')"></div>
            <!-- <div class="error" v-if="!$v.password.required && registerPressed">Password ir required</div> -->
            <div class="error" v-if="!goodPassword && registerPressed">{{ $t('register.form.goodPassword1') }} <br> {{ $t('register.form.goodPassword2') }}</div>
            <div><input type="password" class="input-text" v-model="confirmPassword" :placeholder="$t('register.form.confirmPassword')"></div>
            <!-- <div class="error" v-if="!$v.confirmPassword.required && registerPressed">Password Confirmation is required</div> -->
            <div class="error" v-if="!$v.confirmPassword.sameAs && registerPressed">{{ $t('register.form.samePassword') }}</div>
            <div>
              <select v-model="countrySelected" class="input-select">
                <option v-for="(country, key) in countries" v-bind:value="country.value" :key="key">
                  {{ country.text }}
                </option>
              </select>
            </div>
            <div class="error" v-if="!$v.countrySelected.required && registerPressed">{{ $t('register.form.countryRequired') }}</div>
            <div style="display:flex;">
              <div style="width:50%">
                <input type="text" class="input-city" v-model="city" :placeholder="$t('register.form.city')">
                <div class="error" v-if="!$v.city.required && registerPressed">{{ $t('register.form.cityRequired') }}</div>
              </div>
              <div>
                <input type="text" class="input-code" v-model="code" :placeholder="$t('register.form.code')">
                <div class="error" v-if="!$v.code.required && registerPressed">{{ $t('register.form.codeRequired') }}</div>
                <div class="error" v-if="!$v.code.integer && registerPressed">{{ $t('register.form.codeValid') }}</div>
              </div>
            </div>
            <div>
              <select v-model="timezoneSelected" class="input-select">
                <option v-for="(timezone, key) in timezones" v-bind:value="timezone.value" :key="key">
                  {{ timezone.text }}
                </option>
              </select>
            </div>
            <div class="error" v-if="!$v.timezoneSelected.required && registerPressed">{{ $t('register.form.timezoneRequired') }}</div>
            <div><button type="submit" class="button-register">{{ $t('register.form.register') }}</button></div>
          </form>
          <div class="container-bottom-text">{{ $t('register.msg1') }} <router-link to="login" class="link-login">{{ $t('register.link1') }}</router-link></div>
        </b-container>
      </div>
    </b-container>
</template>
<script>
import axios from 'axios'
import { required, email, integer, sameAs } from 'vuelidate/lib/validators'
/* Import the Amplify Auth API */
import Amplify, { Auth } from 'aws-amplify'
import awsconfig from '../../aws-exports'
import Swal from 'sweetalert2'
Amplify.configure(awsconfig)

export default {
  name: 'RegisterContainer',
  data () {
    return {
      name: null,
      user: null,
      email: null,
      password: null,
      confirmPassword: null,
      countryData: null,
      countries: [],
      countrySelected: null,
      city: null,
      code: null,
      timezones: [],
      timezoneSelected: null,
      registerPressed: false,
      goodPassword: false
    }
  },
  mounted () {
    if (window.innerWidth >= 768) {
      const heightContainer = window.innerHeight - 62
      const $loginContainer = document.querySelector('.container-register-inner')
      $loginContainer.style.height = String(heightContainer) + 'px'
    }

    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then((response) => {
        this.countryData = response.data
        const arrayCountryNames = this.countryData.map((country) => {
          const objCountry = {}
          objCountry.text = country.name
          objCountry.value = country.name
          return objCountry
        })
        arrayCountryNames.unshift({ text: this.$t('register.form.country'), value: null })
        this.countries = arrayCountryNames
        const arrayTimezones = this.countryData.map((country) => {
          const objTimezone = {}
          objTimezone.text = country.timezones[0]
          objTimezone.value = country.timezones[0]
          return objTimezone
        })
        arrayTimezones.unshift({ text: this.$t('register.form.timezone'), value: null })
        this.timezones = arrayTimezones
        console.log('countries data  bringed success ...')
      })
  },
  methods: {
    async register () {
      this.registerPressed = true
      console.log('register user ...')
      // AUTHENTICATION AND LOGIN
      console.log('loging ...')
      try {
        const { user } = await Auth.signUp({
          username: this.user,
          password: this.password,
          attributes: {
            email: this.email
          }
        })
        const userId = user.pool.clientId
        console.log(user)
        console.log(userId)
        const dataSendSave = {}
        dataSendSave.ID_USUARIO = userId
        dataSendSave.DSC_USERNAME = this.user
        dataSendSave.DSC_NOMBRES = this.name
        dataSendSave.DSC_EMAIL = this.email
        console.log(dataSendSave)
        dataSendSave.DSC_APELLIDOS = this.user
        const respSave = await axios.post('http://localhost:3000/user/register', dataSendSave)
        console.log(respSave)
        Swal.fire({
          title: 'Se registro correctamente el usuario.',
          icon: 'success',
          confirmButtonText: 'Continuar'
        }).then(result => {
          if (result.dismiss) {
            window.location.href = '/verify'
          }
        })
        console.log(user)
      } catch (err) {
        if (err.code === '') {
          Swal.fire({
            title: 'Usuario o contraseña incorrecto.',
            icon: 'error',
            confirmButtonText: 'Aceptar'
          })
        } else {
          Swal.fire({
            title: 'Ocurrio un error al iniciar sesión.',
            icon: 'error',
            confirmButtonText: 'Aceptar'
          })
        }
        console.log(err)
      }
    }
  },
  watch: {
    password (newValue) {
      this.goodPassword = newValue.length >= 8 &&
        /[a-z]/.test(newValue) &&
        /[A-Z]/.test(newValue) &&
        /[0-9]/.test(newValue)
    }
  },
  validations: {
    name: { required },
    user: { required },
    email: { required, email },
    password: { required },
    confirmPassword: { required, sameAs: sameAs('password') },
    countrySelected: { required },
    city: { required },
    code: { required, integer },
    timezoneSelected: { required }
  }
}
</script>
<style scoped>
.container-register-inner{
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
.title-register{
  text-align: center;
  font-size: 52.5px;
  font-weight: 200;
}
.subtitle-register{
  text-align: center;
  font-size: 16px;
  font-weight: lighter;
  margin-bottom: 10px;
}
.input-text{
  width: 100%;
  outline: none;
  border: 0;
  border-bottom: 1px solid rgb(137, 137, 137);
  font-size: 14px;
  font-weight: 400;
  padding: 10px 25px;
}
.input-select{
  width: 100%;
  outline: none;
  border: 0;
  border-bottom: 1px solid rgb(137, 137, 137);
  font-size: 14px;
  font-weight: 400;
  padding: 10px 25px;
}
.input-city{
  margin-right: 10%;
  outline: none;
  border: 0;
  border-bottom: 1px solid rgb(137, 137, 137);
  font-size: 14px;
  font-weight: 400;
  padding: 15px 25px;
}
.input-code{
  outline: none;
  border: 0;
  border-bottom: 1px solid rgb(137, 137, 137);
  font-size: 14px;
  font-weight: 400;
  padding: 15px 25px;
}
.button-register{
 width: 100%;
 margin-top: 50px;
 padding-top: 20px;
 padding-bottom: 20px;
 font-size: 18px;
 font-weight: 600;
 color: white;
 background-color: rgb(0, 206, 193);
 border:none;
 border-radius: 8px;
}
.button-register:hover{
 background-color: rgb(3, 189, 177);
 }
 .container-bottom-text{
  margin-top: 20px;
  font-size: 14px;
  font-weight: 200;
  text-align: center;
 }
 .link-login{
  color: black;
 }
.error{
   margin-top: 5px;
  text-align: center;
  font-size: 12px;
  color: #f44336;
 }
</style>
