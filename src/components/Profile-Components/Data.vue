<template>
  <div class="data">
    <div class="userinfo">
      <div
        class="enter"
        style="
          margin: 0;
          margin-bottom: 40px;
          margin-left: 44px;
          display: block;
          width: 100%;
        "
      >
        Enter your information
      </div>
      <div>
        <b-form-input class="inp" type="text" placeholder="ISC Examples" v-model="name" ></b-form-input>
        <i class="fa fa-user"></i>
        <span>*</span>
      </div>
      <div>
        <b-form-input class="inp" type="email" v-model="email" ></b-form-input>
        <i class="fa fa-envelope"></i>
        <span>*</span>
      </div>
      <div>
        <b-form-input v-model="phone" class="inp" type="tel" placeholder="Phone"></b-form-input>
        <i class="fa fa-phone"></i>
      </div>
      <div>
        <b-form-select id="acomodationSelectId" v-model="accomodationSelected" :options="accomodations" class="select" ></b-form-select>
        <i class="fa fa-industry"></i>
      </div>
      <div>
        <b-form-input type="url" class="inp" v-model="web" ></b-form-input>
        <i class="fa fa-globe"></i>
      </div>
      <div>
        <b-form-select id="idiomaSelectId" v-model="idiomaSelected" :options="arrIdiomas" class="select"
        ></b-form-select>
        <i class="fa fa-flag"></i>
        <span>*</span>
      </div>
      <div>
        <b-form-select id="paisesId" v-model="paisSelected" :options="arrPaises" class="select" ></b-form-select>
        <i class="fa fa-map"></i>
      </div>
      <div>
        <b-form-input type="text" v-model="ciudad" class="inp"></b-form-input>
        <i class="fa fa-map"></i>
      </div>
      <div>
        <b-form-select id="zonaHorariaSelectId" v-model="zonaHorariaSelected" :options="arrZonaHoraria" class="select" ></b-form-select>
        <i class="fa fa-clock-o"></i>
        <span>*</span>
      </div>
      <div
        style="
          margin-bottom: 0px;
          text-align: right;
          width: 884px;
          display: block;
          margin-top: 0px;
          top: -20px;
          position: relative;
          font-size: 11px;
          color: #9ea5b1;
        "
      >
        <sup>*</sup> Obligatory fields
      </div>
    </div>
    <div class="acenter iscbutton" v-on:click="save()">Save</div>
    <br />
    <br />
    <a href="#" class="acenter cotop" style="margin-top: 22px; cursor: pointer">
      <i class="fa fa-unlock-alt"></i> Change password
    </a>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import axios from 'axios'
import endpoint from '../../config'
export default {
  name: 'Data',
  data () {
    return {
      ruta: endpoint.endpoint,
      selected: null,
      DSC_USERNAME: null,
      name: null,
      email: null,
      phone: null,
      accomodationSelected: null,
      idiomaSelected: null,
      web: null,
      paisSelected: null,
      ciudad: null,
      zonaHorariaSelected: null,
      ID_USUARIO: null,
      arrRol: [],
      arrZonaHoraria: [],
      arrIdiomas: [],
      arrPaises: [],
      accomodations: [
        { value: 1, text: 'Accomodations' },
        { value: 2, text: 'Alcohol' },
        { value: 3, text: 'Industrial' },
        { value: 4, text: 'Retail' }
      ],
      idiomas: [
        { value: 1, text: 'Idiomas' },
        { value: 2, text: 'English' },
        { value: 3, text: 'Español' },
        { value: 4, text: 'Portugues' }
      ],
      paises: [
        { value: 1, text: 'Perú' },
        { value: 2, text: 'Colombia' },
        { value: 3, text: 'Brasil' },
        { value: 4, text: 'Argentina' }
      ]
    }
  },
  async mounted () {
    this.DSC_USERNAME = localStorage.getItem('username')
    this.ID_USUARIO = localStorage.getItem('clientId')
    const respInfoUser = await this.getInfoUser()
    await this.getAllRol()
    await this.getAllZonaHoraria()
    await this.getAllIdioma()
    await this.getAllPais()
    console.log(respInfoUser)
  },
  methods: {
    async save () {
      try {
        console.log('el evento save')
        const respUpdate = await this.updateInfo()
        if (respUpdate.code === 0) {
          Swal.fire({
            title: 'Se guardo con exito la información.',
            icon: 'success',
            confirmButtonText: 'Aceptar'
          })
        } else {
          Swal.fire({
            title: 'Ocurrio un error vuelvalo a intentar.',
            icon: 'error',
            confirmButtonText: 'Aceptar'
          })
        }
      } catch (error) {
        console.log('el evento save')
      }
    },
    async getInfoUser () {
      try {
        const data = { DSC_USERNAME: this.DSC_USERNAME }
        const respInfoUser = await axios.post(this.ruta + 'user/getUserbyId', data)
        console.log(respInfoUser)
        console.log(respInfoUser.data)
        const dataInfo = respInfoUser.data.obj
        this.DSC_USERNAME = dataInfo.DSC_USERNAME
        this.name = dataInfo.DSC_NOMBRES
        this.email = dataInfo.DSC_EMAIL
        this.phone = dataInfo.DSC_TELEFONO
        this.accomodationSelected = dataInfo.ID_ACOMODATION
        this.idiomaSelected = dataInfo.ID_IDIOMA
        this.web = dataInfo.DSC_SITIO_WEB
        this.paisSelected = dataInfo.ID_PAIS
        this.ciudad = dataInfo.DSC_CIUDAD
        this.zonaHorariaSelected = dataInfo.ID_ZONA_HORARIA
        console.log('EL NAME:', this.name)
        console.log('EL email:', this.email)
        console.log('EL phone:', this.phone)
        console.log('EL accomodationSelected:', this.accomodationSelected)
        console.log('EL idiomaSelected:', this.idiomaSelected)
        console.log('EL ciudad:', this.ciudad)
        console.log('EL zonaHorariaSelected:', this.zonaHorariaSelected)
        return {}
      } catch (error) {
        console.log(error)
        return {}
      }
    },
    async updateInfo () {
      try {
        const inforUpdate = {}
        // inforUpdate.DSC_USERNAME = null
        inforUpdate.DSC_NOMBRES = this.name
        inforUpdate.DSC_APELLIDOS = null
        inforUpdate.ID_ZONA_HORARIA = this.zonaHorariaSelected
        inforUpdate.ID_IDIOMA = this.idiomaSelected
        inforUpdate.DSC_EMAIL = this.email
        inforUpdate.ID_PAIS = this.paisSelected
        inforUpdate.DSC_CIUDAD = this.ciudad
        inforUpdate.ID_ACOMODATION = this.accomodationSelected
        inforUpdate.DSC_USERNAME = this.DSC_USERNAME
        inforUpdate.DSC_SITIO_WEB = this.web
        inforUpdate.DSC_TELEFONO = this.phone
        console.log('inforUpdate : ', inforUpdate)
        const respUpdateUser = await axios.put(this.ruta + 'user/updateUser', inforUpdate)
        console.log('respUpdateUser : ', respUpdateUser)
        await this.getInfoUser()
        return { code: 0 }
      } catch (error) {
        console.log('el error : ', error)
        return { code: 1, message: error }
      }
    },
    async getAllRol () {
      try {
        const respSelect = await axios.get(this.ruta + 'user/allRol')
        respSelect.data.list.forEach(item => {
          this.arrRol.push({ value: item.ID_ROL, text: item.DSC_DESCRIPCION })
        })
      } catch (error) {
        console.log(error)
      }
    },
    async getAllZonaHoraria () {
      try {
        const respSelect = await axios.get(this.ruta + 'user/allZonaHoraria')
        respSelect.data.list.forEach(item => {
          this.arrZonaHoraria.push({ value: item.ID_ZONA_HORARIA, text: item.DSC_DESCRIPCION })
        })
      } catch (error) {
        console.log(error)
      }
    },
    async getAllIdioma () {
      try {
        const respSelect = await axios.get(this.ruta + 'user/allIdioma')
        respSelect.data.list.forEach(item => {
          this.arrIdiomas.push({ value: item.ID_IDIOMA, text: item.DSC_DESCRIPCION })
        })
      } catch (error) {
        console.log(error)
      }
    },
    async getAllPais () {
      try {
        const respSelect = await axios.get(this.ruta + 'user/allPais')
        respSelect.data.list.forEach(item => {
          this.arrPaises.push({ value: item.ID_PAIS, text: item.DSC_DESCRIPCION })
        })
      } catch (error) {
        console.log(error)
      }
    }
  }
}

</script>

<style >
.data {
  background-color: white;
  width: 966px;
  height: 445px;
  padding-top: 60px;
}
.inp {
  width: auto;
  border-radius: 3px;
  box-shadow: inset 0px 1px 3px 1px rgb(72 72 72 / 18%);
  border: solid 1px #c7cfe2;
  background-color: #ffffff;
  text-indent: 14px;
  color: #a2acc4;
}
.place {
  margin-left: 40px;
  margin-right: 40px;
  margin-bottom: 40px;
  width: 966px;
  width: 900px;
}
/* .enter {
    margin-top:30px ;
    font-size: 15px;
    font-weight: 600;
    color: #2c3852;
    text-align: left;
} */
.enter {
  font-size: 15px;
  font-weight: 600;
  color: #2c3852;
  text-align: left;
}
.select {
  width: 240px;
  border-radius: 3px;
  box-shadow: inset 0px 1px 3px 1px rgb(72 72 72 / 18%);
  border: solid 1px #c7cfe2;
  background-color: #ffffff;
  text-indent: 14px;
  color: #a2acc4;
  padding: 8px;
}
.colum {
  padding: 0px;
  margin: 0px;
}
.userinfo div {
  position: relative;
  display: inline-block;
  width: 240px;
  margin-left: 40px;
  margin-right: 40px;
  margin-bottom: 40px;
}
.userinfo i {
  position: absolute;
  top: 12px;
  left: 8px;
  color: #a2acc4;
  font-size: 13px;
}
.userinfo span {
  position: absolute;
  top: 30px;
  right: 10px;
  top: -20px;
  right: 2px;
  color: #a2acc4;
}
.iscbutton {
  border-radius: 3px;
  border: none;
  padding: 0 20px;
  height: 35px;
  line-height: 35px;
  font-size: 1em;
  background: #00a5ff;
  display: inline-block;
  color: #fff;
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
  cursor: pointer;
}
.acenter {
  text-align: center;
}
.cotop {
  color: #00a5ff !important;
}
a {
  text-decoration: none !important;
}
</style>
