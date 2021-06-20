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
    }
  }
}

const i18n = new VueI18n({
  locale: window.navigator.language.split('-')[0],
  fallbackLocale: 'en',
  messages
})

export default i18n
