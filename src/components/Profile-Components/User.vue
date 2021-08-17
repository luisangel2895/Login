<template>
  <div class="user">
    <div style="padding-left: 120px; padding-right: 120px">
      <div class="argt" style="margin-bottom: 20px">
        <div class="iscbutton">New User</div>
      </div>
    </div>
    <div class="" id="pcusercontainer">
      <div class="pcusrtop">
        <div class="pcusn">Name</div>
        <div class="pcusu">Username</div>
        <div class="pcusl">Language</div>
        <div class="pcuss">Status</div>
        <div class="pcusd">Last Login</div>
        <div class="clear" style="font-size: 0; width: 0; padding: 0"></div>
      </div>
      <div
        id="data-users"
        style="
          border: 1px solid #c5d0e4;
          padding: 3px;
          height: 210px;
          width: 100%;
          overflow: scroll;
          overflow-x: hidden;
        "
      >
        <div class="pcusrow"  v-for="(objUsuario, key) in arrListUsers" v-bind:value="objUsuario.value" :key="key">
          <div class="pcusn">{{ objUsuario.DSC_NOMBRES }}</div>
          <div class="pcusu">{{ objUsuario.DSC_USERNAME }}</div>
          <div class="pcusl">English</div>
          <div class="pcuss"><span class="cotop">Active</span></div>
          <div class="pcusd">25/06/2021</div>
          <div class="pcusi" v-on:click="getModalUser(objUsuario)"><i class="fa fa-edit"></i></div>
          <div class="pcusi" v-on:click="disableUser(objUsuario)"><i class="fa fa-trash"></i></div>
          <div class="clear"></div>
        </div>
      </div>
    </div>
    <div>
      <b-modal ref="my-modal1" size="lg" hide-footer title="">
        <div class="row">
          <div class="col-2"></div>
          <div class="col-8">
            <div class="d-block ">
            <h3>{{name}}</h3>
            <div>
              <b-form-input class="inputModal inputs-format" type="text" placeholder="Ingrese los nombres" v-model="name" ></b-form-input>
            </div>
            <div>
              <b-form-input class="inputModal inputs-format" type="text" placeholder="Ingrese el email" v-model="email" ></b-form-input>
            </div>
            <b-form-checkbox
              id="checkbox-1" v-model="statusCheckbox"
              name="checkbox-1" value="accepted"
              unchecked-value="not_accepted" v-on:change="setFlagPassword()"
            >Change password</b-form-checkbox>
            <div>
              <b-form-input class="inputModal inputs-format" type="password" placeholder="Contraseña" v-model="password" :disabled="!status"></b-form-input>
            </div>
            <div>
              <b-form-input class="inputModal inputs-format" type="password" placeholder="Confirmar contraseña" v-model="confirmPassword" :disabled="!status"></b-form-input>
            </div>
            <div>
              <b-form-select id="paisesId" v-model="paisSelected" :options="arrPaises" class="selectModal" ></b-form-select>
            </div>
            <div>
              <b-form-input class="inputModal inputs-format" type="text" placeholder="Ingrese la ciudad" v-model="ciudad" ></b-form-input>
            </div>
            <div>
              <b-form-select id="rolId" v-model="rolSelect" :options="arrRol" class="selectModal inputs-format" ></b-form-select>
            </div>
            <div>
              <b-form-select id="zonaHorariaId" v-model="zonaHorariaSelected" :options="arrZonaHoraria" class="selectModal inputs-format"></b-form-select>
            </div>
            <div>
              <b-form-select id="idiomasId" v-model="idiomaSelected" :options="arrIdiomas" class="selectModal inputs-format"></b-form-select>
            </div>
          </div>
          </div>
          <div class="col-2"></div>
        </div>

        <div class="argt" style="margin-bottom: 20px;margin-right:50px;">
          <div class="iscbutton" v-on:click="guardar()">Guardar</div>
        </div>
      </b-modal>
    </div>
  </div>
</template>
<script>
import { required, email, integer, sameAs } from 'vuelidate/lib/validators'
import axios from 'axios'
import Swal from 'sweetalert2'
import endpoint from '../../config'
export default {
  name: 'User',
  async mounted () {
    await this.getAllUsers()
    await this.getAllRol()
    await this.getAllZonaHoraria()
    await this.getAllIdioma()
    await this.getAllPais()
  },
  methods: {
    showModal () {
      this.$refs['my-modal1'].show()
    },
    hideModal () {
      this.$refs['my-modal1'].hide()
    },
    toggleModal () {
      // We pass the ID of the button that we want to return focus to
      // when the modal has hidden
      this.$refs['my-modal1'].toggle('#toggle-btn')
    },
    async getAllUsers () {
      try {
        const respListUsers = await axios.get(this.ruta + 'user/listUsers')
        console.log(respListUsers)
        console.log(respListUsers.data)
        this.arrListUsers = respListUsers.data.list
        console.log(this.arrListUsers)
      } catch (error) {
        console.log('se cayo el listado de usuarios: ', error)
      }
    },
    async guardar () {
      console.log('el this.paisSelected: ', this.paisSelected)
      const dataUpdate = {}
      dataUpdate.DSC_USERNAME = (this.DSC_USERNAME + ' ').trim()
      dataUpdate.DSC_NOMBRES = (this.name + ' ').trim()
      dataUpdate.DSC_EMAIL = (this.email + ' ').trim()
      dataUpdate.DSC_CIUDAD = (this.ciudad + ' ').trim()
      dataUpdate.ID_PAIS = this.paisSelected
      dataUpdate.ID_ROL = this.rolSelect
      dataUpdate.ID_ZONA_HORARIA = this.zonaHorariaSelected
      dataUpdate.ID_IDIOMA = this.idiomaSelected
      console.log('el data update: ', dataUpdate)
      Swal.fire({
        title: '¿Está seguro de actualizar la información de este usuario?',
        icon: 'warning',
        confirmButtonText: 'Aceptar'
      }).then(async r => {
        if (!r.dismiss) {
          await axios.put(this.ruta + 'user/updateUser', dataUpdate)
          Swal.fire({
            title: 'Se actualizó correctamente',
            icon: 'success',
            confirmButtonText: 'Aceptar'
          })
          await this.getAllUsers()
          // this.hideModal()
        }
      })
    },
    async getModalUser (obj) {
      try {
        this.showModal()
        console.log('entro al register')
        await this.getUserById(obj)
        const dataUpdate = {}
        dataUpdate.DSC_NOMBRE = this.name
        dataUpdate.DSC_EMAIL = this.email
        dataUpdate.ID_PAIS = this.paisSelected
        dataUpdate.ID_ROL = this.rolSelect
        dataUpdate.ID_ZONA_HORARIA = this.zonaHorariaSelected
        dataUpdate.DSC_CIUDAD = this.ciudad
      } catch (error) {
        console.log('entro al catch de register')
      }
    },
    async getUserById (obj) {
      try {
        console.log('entro al get user')
        const data = { DSC_USERNAME: obj.DSC_USERNAME }
        const respInfoUser = await axios.post(this.ruta + 'user/getUserbyId', data)
        console.log(respInfoUser)
        console.log('EL OBJ DE USUARIO', respInfoUser.data)
        const dataInfo = respInfoUser.data.obj
        this.DSC_USERNAME = dataInfo.DSC_USERNAME
        this.name = dataInfo.DSC_NOMBRES
        this.email = dataInfo.DSC_EMAIL
        // this.phone = dataInfo.DSC_TELEFONO
        // this.accomodationSelected = dataInfo.ID_ACOMODATION
        // this.idiomaSelected = dataInfo.ID_IDIOMA
        // this.web = dataInfo.DSC_SITIO_WEB
        this.paisSelected = dataInfo.ID_PAIS
        this.ciudad = dataInfo.DSC_CIUDAD
        this.zonaHorariaSelected = dataInfo.ID_ZONA_HORARIA
        console.log('EL NAME:', this.name)
        console.log('EL email:', this.email)
        console.log('EL ciudad:', this.ciudad)
        console.log('EL zonaHorariaSelected:', this.zonaHorariaSelected)
        return {}
      } catch (error) {
        console.log('el error : ', error)
      }
    },
    async disableUser (data) {
      try {
        console.log('entro a disable', data)
        Swal.fire({
          title: '¿Está seguro de eliminar este usuario?',
          icon: 'warning',
          confirmButtonText: 'Aceptar'
        }).then(async result => {
          if (!result.dismiss) {
            const sendDataDisable = { DSC_USERNAME: data.DSC_USERNAME }
            const respDisable = await axios.put(this.ruta + 'user/disableUser', sendDataDisable)
            console.log('entro a disable', respDisable)
            await this.getAllUsers()
            Swal.fire({
              title: 'Se eliminó correctamente',
              icon: 'success',
              confirmButtonText: 'Aceptar'
            })
          }
        })
      } catch (error) {
        console.log('el error: ', error)
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
    },
    setFlagPassword () {
      this.status = this.status === true ? !this.status : true
    }
  },
  data () {
    return {
      ruta: endpoint.endpoint,
      arrListUsers: null,
      DSC_USERNAME: null,
      name: null,
      email: null,
      ciudad: null,
      password: null,
      confirmPassword: null,
      rolSelect: null,
      zonaHorariaSelected: null,
      idiomaSelected: null,
      paisSelected: null,
      arrPaises: [],
      arrAcommodations: [
        { id: 1, text: 'Accomodations' },
        { id: 2, text: 'Alcohol' },
        { id: 3, text: 'Industrial' },
        { id: 4, text: 'Retail' }
      ],
      arrIdiomas: [],
      arrZonaHoraria: [],
      arrRol: [],
      status: false,
      statusCheckbox: null
    }
  },
  validations: {
    name: { required },
    user: { required },
    email: { required, email },
    password: { required },
    confirmPassword: { required, sameAs: sameAs('password') },
    ciudad: { required },
    code: { required, integer }
  }
}
</script>

<style>
.user {
  height: 445px;
  position: relative;
  padding: 60px 50px 20px;
}
.argt {
  text-align: right;
}
div {
  display: block;
}
.pcusrtop div {
  padding: 15px;
  text-align: center;
  color: #bdc4d5;
  font-size: 11px;
  padding-bottom: 5px;
}
.pcusn {
  float: left;
  width: 20%;
  text-align: left !important;
}
.pcusu {
  float: left;
  width: 15%;
}
.pcusl {
  float: left;
  width: 15%;
}
.pcuss {
  float: left;
  width: 15%;
}
.pcusd {
  float: left;
  width: 15%;
}
.clear {
  clear: both;
}
.pcusrow {
  height: 50px;
  margin-bottom: 2px;
  background: #f3f4f7;
  color: #7d889f;
}
.pcusrow div {
  padding: 15px;
  text-align: center;
}
.cotop {
  color: #00a5ff !important;
}
.pcusi {
  float: left;
  width: 10%;
}
.pcusi i {
  font-size: 16px;
  color: #9faec6;
  cursor: pointer;
}

.inputs-format{
  margin-top: 10px;
  margin-bottom: 10px;
}

.inputModal {
  width: 400px;
  border-radius: 3px;
  box-shadow: inset 0px 1px 3px 1px rgb(72 72 72 / 18%);
  border: solid 1px #c7cfe2;
  background-color: #ffffff;
  text-indent: 14px;
  color: #a2acc4;
}
.selectModal {
  width: 400px;
  max-width: 500px;
  min-width: 350px;
  border-radius: 3px;
  box-shadow: inset 0px 1px 3px 1px rgb(72 72 72 / 18%);
  border: solid 1px #c7cfe2;
  background-color: #ffffff;
  text-indent: 14px;
  color: #a2acc4;
  padding: 8px;
}
.aligh-center{
  align-items: center;
}
.btn-close{
  background-color: purple;
}

</style>
