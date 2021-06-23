import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
  en: {
    navbar: {
      home: 'Home',
      ecosystem: {
        title: 'Our Ecosystem',
        sections: {
          listen: 'Listen',
          monitor: 'Monitor',
          design: 'Design',
          advice: 'Advice'
        }
      },
      contact: 'Contact',
      login: 'Login',
      register: 'Regiser'
    },
    login: {
      title: 'Welcome',
      subtitle: 'Enter you data',
      form: {
        user: 'User',
        password: 'Pasword',
        userRequired: 'User is required',
        passwordRequired: 'Password is required',
        login: 'Login'
      },
      msg1: 'Do not you have an account yet?',
      link1: 'Register now',
      msg2: 'Already have a verification code?',
      link2: 'Validate your account'
    },
    register: {
      title: 'Register',
      subtitle: 'Enter your data',
      form: {
        name: 'Name',
        user: 'User',
        email: 'Email',
        password: 'Password',
        confirmPassword: 'Confirm Password',
        country: 'Choose your country',
        city: 'City',
        code: 'Postal Code',
        timezone: 'Choose your timezone',
        register: 'Register',
        nameRequired: 'Name is required',
        userRequired: 'User is required',
        emailRequired: 'Email is required',
        emailValid: 'Email is not valid',
        goodPassword1: 'The password must be at least 8 characters and contain a',
        goodPassword2: 'lowercase character, uppercase character and a number.',
        samePassword: 'The passwords must be the same',
        countryRequired: 'Country is required',
        cityRequired: 'City is required',
        codeRequired: 'Postal code is required',
        codeValid: 'Postal code is not valid',
        timezoneRequired: 'Timezone is required'
      },
      msg1: 'Do you already have an account?',
      link1: 'Login'
    },
    verify: {
      title: 'Welcome',
      subtitle: 'Enter your code',
      form: {
        user: 'User',
        code: 'Code',
        check: 'Check',
        userRequired: 'User is requerido',
        codeRequired: 'Code is required',
        codeValid: 'The code is not valid'
      }
    }
  },
  es: {
    navbar: {
      home: 'Inicio',
      ecosystem: {
        title: 'Nuestro Ecosistema',
        sections: {
          listen: 'Escucha',
          monitor: 'Monitor',
          design: 'Diseno',
          advice: 'Consejo'
        }
      },
      contact: 'Contacto',
      login: 'Login',
      register: 'Registro'
    },
    login: {
      title: 'Bienvenido',
      subtitle: 'Ingresa tus datos',
      form: {
        user: 'Usuario',
        password: 'Contraseña',
        userRequired: 'Usuario es requerido',
        passwordRequired: 'Contraseña es requerida',
        login: 'Ingresar'
      },
      msg1: 'Aun no tienes una cuenta?',
      link1: 'Registrate ahora',
      msg2: 'Ya tienes un codigo de verificacion?',
      link2: 'Valida tu cuenta'
    },
    register: {
      title: 'Regístrate',
      subtitle: 'Ingresa tus datos',
      form: {
        name: 'Nombre',
        user: 'Usuario',
        email: 'Correo electronico',
        password: 'Contraseña',
        confirmPassword: 'Confirmar contraseña',
        country: 'Escoja su pais',
        city: 'Ciudad',
        code: 'Codigo postal',
        timezone: 'Escoja su zona horaria',
        register: 'Registrar',
        nameRequired: 'Nombre es requerido',
        userRequired: 'Usuario es requrido',
        emailRequired: 'Email es requerido',
        emailValid: 'Email no es valido',
        goodPassword1: 'La contraseña debe tener al menos 8 caracteres y',
        goodPassword2: 'contener minusculas, mayusculas y numeros.',
        samePassword: 'La contraseña debe ser la misma',
        countryRequired: 'Pais es requerido',
        cityRequired: 'Ciudad es requerida',
        codeRequired: 'Codigo postal es requerido',
        codeValid: 'Codigo postal no es valido',
        timezoneRequired: 'Zona horaria es requerida'
      },
      msg1: 'Ya tienes una cuenta?',
      link1: 'Ingresa'
    },
    verify: {
      title: 'Bienvenido',
      subtitle: 'Ingresa tu codigo',
      form: {
        user: 'Usuario',
        code: 'Codigo',
        check: 'Verificar',
        userRequired: 'Usuario es requerido',
        codeRequired: 'Codigo es requerido',
        codeValid: 'El codigo no es valido'
      }
    }
  }
}

const i18n = new VueI18n({
  locale: window.navigator.language.split('-')[0],
  fallbackLocale: 'en',
  messages
})

export default i18n
