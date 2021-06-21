<template>
    <b-container fluid class="container-register-inner">
      <div>
        <b-container>
          <div class="title-register">Regístrate</div>
          <div class="subtitle-register">Ingresa tus datos</div>
          <form action="" @submit.prevent="register()">
            <div><input type="text" class="input-text" v-model="name" placeholder="Nombre"></div>
            <div><input type="text" class="input-text" v-model="user" placeholder="Usuario"></div>
            <div><input type="text" class="input-text" v-model="email" placeholder="Correo electronico"></div>
            <div><input type="text" class="input-text" v-model="password" placeholder="contrasena"></div>
            <div><input type="text" class="input-text" v-model="confirmPassword" placeholder="Confirmar contrasena"></div>
            <div>
              <select v-model="countrySelected" class="input-select">
                <option v-for="(country, key) in countries" v-bind:value="country.value" :key="key">
                  {{ country.text }}
                </option>
              </select>
            </div>
            <div style="display:flex;">
              <input type="text" class="input-city" v-model="city" placeholder="Ciudad">
              <input type="text" class="input-code" v-model="code" placeholder="Codigo">
            </div>
            <div>
              <select v-model="timezoneSelected" class="input-select">
                <option v-for="(timezone, key) in timezones" v-bind:value="timezone.value" :key="key">
                  {{ timezone.text }}
                </option>
              </select>
            </div>
            <div><button type="submit" class="button-register">Registrar</button></div>
          </form>
          <div class="container-bottom-text">Ya tienes una cuenta? <router-link to="login" class="link-login">Ingresa</router-link></div>
        </b-container>
      </div>
    </b-container>
</template>
<script>
import axios from 'axios'

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
      timezoneSelected: null
    }
  },
  mounted () {
    const heightContainer = window.innerHeight
    const $loginContainer = document.querySelector('.container-register-inner')
    $loginContainer.style.height = String(heightContainer) + 'px'

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
        arrayCountryNames.unshift({ text: 'Escoja un pais', value: null })
        this.countries = arrayCountryNames
        const arrayTimezones = this.countryData.map((country) => {
          const objTimezone = {}
          objTimezone.text = country.timezones[0]
          objTimezone.value = country.timezones[0]
          return objTimezone
        })
        arrayTimezones.unshift({ text: 'Escoja su zona horaria', value: null })
        this.timezones = arrayTimezones
        console.log('countries data  bringed success ...')
      })
  },
  methods: {
    register () {
      console.log('register user ...')
    }
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
  margin-top: 20px;
  margin-bottom: 20px;
}
.input-text{
  width: 100%;
  outline: none;
  border: 0;
  border-bottom: 1px solid rgb(137, 137, 137);
  font-size: 14px;
  font-weight: 400;
  padding: 15px 25px;
}
.input-select{
  width: 100%;
  outline: none;
  border: 0;
  border-bottom: 1px solid rgb(137, 137, 137);
  font-size: 14px;
  font-weight: 400;
  padding: 15px 25px;
}
.input-city{
  width: 60%;
  margin-right: 10%;
  outline: none;
  border: 0;
  border-bottom: 1px solid rgb(137, 137, 137);
  font-size: 14px;
  font-weight: 400;
  padding: 15px 25px;
}
.input-code{
  width: 30%;
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
</style>
