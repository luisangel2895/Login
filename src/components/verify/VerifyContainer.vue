<template>
    <b-container fluid class="container-verify-inner">
        <div class="title-verify">{{ $t('verify.title') }}</div>
        <div class="subtitle-verify">{{ $t('verify.subtitle') }}</div>
        <form action="" @submit.prevent="validateCode()">
          <div><input type="text" class="input-text" v-model="username" :placeholder="$t('verify.form.user')"></div>
          <div class="error" v-if="!$v.username.required && verifyPressed">{{ $t('verify.form.userRequired') }}</div>
          <div><input type="text" class="input-text" v-model="code" :placeholder="$t('verify.form.code')"></div>
          <div class="error" v-if="!$v.code.required && verifyPressed">{{ $t('verify.form.codeRequired') }}</div>
          <div class="error" v-if="!$v.code.integer && verifyPressed">{{ $t('verify.form.codeValid') }}</div>
          <div class="button-container"><button type="submit" class="button-verify">{{ $t('verify.form.check') }}</button></div>
        </form>
    </b-container>
</template>
<script>
import { required, integer } from 'vuelidate/lib/validators'
/* Import the Amplify Auth API */
import Amplify, { Auth } from 'aws-amplify'
import awsconfig from '../../aws-exports'
import Swal from 'sweetalert2'
Amplify.configure(awsconfig)

export default {
  name: 'VerifyContainer',
  data () {
    return {
      username: null,
      code: null,
      verifyPressed: false
    }
  },
  mounted () {
    if (window.innerWidth >= 768) {
      const heightContainer = window.innerHeight - 62
      const $registerContainer = document.querySelector('.container-verify-inner')
      $registerContainer.style.height = String(heightContainer) + 'px'
    }
  },
  methods: {
    async validateCode () {
      this.verifyPressed = true
      console.log('validating code ...')
      try {
        const respConfirm = await Auth.confirmSignUp(this.username, this.code)
        console.log(respConfirm)
        Swal.fire({
          title: 'Se realizó correctamente la verificación del usuario.',
          icon: 'success',
          confirmButtonText: 'Continuar'
        }).then(result => {
          if (!result.dismiss) {
            window.location.href = 'http://isc-overview-monitor.s3-website-us-east-1.amazonaws.com/isc-login'
          }
        })
      } catch (error) {
        console.log('error confirming sign up', error)
        Swal.fire({
          title: 'Ocurrió un error al realizar la verificación.',
          icon: 'error',
          confirmButtonText: 'Aceptar'
        })
      }
    }
  },
  validations: {
    username: { required },
    code: { required, integer }
  }
}
</script>
<style scoped>
.container-verify-inner{
  background-color: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.title-verify{
  font-size: 52.5px;
  font-weight: 200;
  text-align: center;
}
.subtitle-verify{
  font-size: 16px;
  font-weight: 200;
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
}
.input-text{
  width: 50%;
  margin-left: 25%;
  outline: none;
  border: 0;
  border-bottom: 1px solid rgb(137, 137, 137);
  font-size: 14px;
  font-weight: 400;
  padding: 15px 25px;
}
.button-container{
  text-align: center;
}
.button-verify{
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
.button-verify:hover{
 background-color: rgb(3, 189, 177);
 }
.error{
  margin-top: 5px;
  text-align: center;
  font-size: 12px;
  color: #f44336;
 }
</style>
