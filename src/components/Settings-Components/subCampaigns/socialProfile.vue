<template>
  <div class="socialprofile">
    <div id="kmprofile" class="kmdiv" style="padding-top: 40px">
      <div class="alft" style="float: left; width: 190px">
        <div class="minipark" style="text-align: left">Add profile</div>
        <div class="fbbg confcont" @click="openDialogLogin('facebook')">
          <i class="fab fa-facebook facebook-setting"></i>Connect
        </div>
        <div class="twbg confcont" @click="openDialogLogin('twitter')">
          <i class="fab fa-twitter twitter-setting"></i>Connect
        </div>
        <div class="inbg confcont" @click="openDialogLogin('instagram')">
          <i class="fab fa-instagram instagram-setting"></i>Connect
        </div>
        <div class="ytbg confcont" @click="openDialogLogin('youtube')">
          <i class="fab fa-youtube youtube-setting"></i>Connect
        </div>
      </div>
      <!-- <div id="paccontainer" class="" style="float:left;width:77%;padding-top:30px""> -->
      <div
        id="paccontainer"
        class=""
        style="
          float: left;
          width: 77%;
          height: 210px;
          overflow: scroll;
          overflow-x: hidden;
          border: solid 1px #c2d1e6;
          padding: 3px;
        "
      >
        <div v-for="item in arrSocialProfiles" :key="item.id" class="paconrow">
          <div :class="['paconb' ,item.id_red_social == '1' ? 'fbbg' : '',item.id_red_social == '2' ? 'twbg' : '',item.id_red_social == '3' ? 'ytbg' : '',item.id_red_social == '4' ? 'inbg' : '']"></div>
          <div class="pacont">
            <img
              :src="item.dsc_logo"
            /><i v-if="item.id_red_social=='1'" class="fab fbco fa-facebook"></i>
            <i v-if="item.id_red_social=='2'" class="fab twco fa-twitter"></i>
            <i v-if="item.id_red_social=='3'" class="fab inco fa-instagram"></i>
            <i v-if="item.id_red_social=='4'" class="fab ytco fa-youtube"></i>
            {{item.nom_usuario_redsocial}}
          </div>
          <div class="paconi">
            <i class="fa fa-trash" onclick="pc_del_acc(this,5525);"></i>
          </div>
          <div class="pacond">{{'Date created:'+ getFechaFormat(item.fec_creacion)}}</div>
          <div class="clear"></div>
        </div>

      </div>
      <div class="clear"></div>
    </div>
    <b-modal ref="modal-addAccount" no-close-on-backdrop v-model="modalAddAccount" size="lg" header-class="border-0 pr-5" header-close-variant="primary" hide-footer>
      <add-account-modal :redSocial="redSocialText"/>
    </b-modal>
  </div>
</template>

<script>
import axios from 'axios'
import endpoint from '../../../config'
import addAccountModal from '../modalAddAccount/addAccountModal'
export default {
  name: 'SocialProfile',
  components: {
    addAccountModal
  },
  async mounted () {
    await this.getSocialProfiles()
  },
  data () {
    return {
      redSocialText: '',
      ruta: endpoint.endpoint,
      profiles: [
        {
          id: 1,
          name: 'Iridium Style - Ventas por Internet',
          image: 'https://graph.facebook.com/1154729827974715/picture?type=large',
          rss: 'facebook',
          date: '13/02/2020'
        },
        {
          id: 1,
          name: 'Iridium Style - Ventas por Internet',
          image: 'https://graph.facebook.com/1154729827974715/picture?type=large',
          rss: 'twitter',
          date: '13/02/2020'
        },
        {
          id: 1,
          name: 'Iridium Style - Ventas por Internet',
          image: 'https://graph.facebook.com/1154729827974715/picture?type=large',
          rss: 'youtube',
          date: '13/02/2020'
        },
        {
          id: 1,
          name: 'Iridium Style - Ventas por Internet',
          image: 'https://graph.facebook.com/1154729827974715/picture?type=large',
          rss: 'instagram',
          date: '13/02/2020'
        }
      ],
      arrSocialProfiles: [],
      arrBenchmark: []
    }
  },
  methods: {
    showModal () {
      this.$refs['modal-addAccount'].show()
    },
    hideModal () {
      this.$refs['modal-addAccount'].hide()
    },
    async getSocialProfiles () {
      try {
        const respListSocialProfiles = await axios.get(this.ruta + 'monitor/getSocialProfiles')
        console.log(respListSocialProfiles)
        console.log(respListSocialProfiles.data)
        this.arrSocialProfiles = respListSocialProfiles.data.list
      } catch (error) {
        console.log('el error: ', error)
      }
    },
    getFechaFormat (fecha) {
      try {
        console.log('la fecha: ', fecha)
        const fechaFormat = new Date(fecha)
        fechaFormat.setHours(fechaFormat.getHours() + 5)
        const respFecha = fechaFormat.getDay() + '/' + fechaFormat.getMonth() + '/' + fechaFormat.getFullYear() + ' ' + fechaFormat.getHours() + ':' + fechaFormat.getMinutes()
        return respFecha
      } catch (error) {
        console.error('error en fecha: ', error)
        return 'Sin fecha'
      }
    },
    openDialogLogin (socialNetwork) {
      this.redSocialText = socialNetwork
      this.showModal()
      /* const w = 680
      const h = 830
      const left = screen.width / 2 - w / 2
      const top = screen.height / 2 - h / 2
      return window.open(socialNetwork === 'instagram' ? `http://localhost:3000/api/v1/facebook/auth/${socialNetwork}` : `http://localhost:3000/api/v1/${socialNetwork}/auth`,
        '_blank',
        'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' +
          w +
          ', height=' +
          h +
          ', top=' +
          top +
          ', left=' +
          left
      ) */
    }
  }
}
</script>

<style>
.elotabs {
  text-align: center;
}
.elotabs > div {
  display: inline-block;
}
.elotb {
  padding: 10px;
  padding-left: 0;
  padding-right: 0;
  font-weight: bold;
  cursor: pointer;
}
.elosep {
  width: 30px;
  font-size: 23px;
  color: #d9d9d9;
  font-weight: 200;
}

.alft {
  text-align: left;
}
.minipark {
  font-size: 11px;
  color: #9ea5b1;
}
.confcont {
  color: white;
  margin-top: 10px;
  padding: 8px;
  border-radius: 3px;
  text-align: center;
  width: 110px;
  cursor: pointer;
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
}
.fbbg {
  background: #1778f2 !important;
}
.twbg {
  background: #1da1f2 !important;
}
.inbg {
  background: #ff69a1 !important;
}
.ytbg {
  background: #ff6564 !important;
}
.confcont .facebook-setting,
.confcont .instagram-setting,
.confcont .twitter-setting,
.confcont .youtube-setting,
.confcont .linkedin-setting,
.iscbutton .facebook-setting,
.iscbutton .twitter-setting,
.iscbutton .instagram-setting,
.iscbutton .youtube-setting,
.iscbutton .linkedin-setting {
  color: white;
}
.confcont i {
  margin-right: 10px;
  font-size: 17px;
}
.btn-group-sm > .btn,
.btn-sm {
  padding: 5px 10px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 3px;
}
.clear {
  clear: both;
}
.paconrow {
  background: #f3f4f7;
  height: 50px;
  margin-bottom: 1px;
}
.paconb {
  font-size: 1px;
  height: 50px;
  width: 5px;
  float: left;
}
.pacont {
  float: left;
  padding-left: 20px;
  padding-top: 11px;
  color: #79849b;
}
.paconi {
  float: right;
  width: 70px;
  height: 50px;
  text-align: center;
  font-size: 18px;
  padding-top: 10px;
  color: #b0b8cc;
}
.pacond {
  float: right;
  color: #b0b8cc;
  text-align: right;
  padding-right: 10px;
  padding-top: 15px;
  font-size: 10px;
}
.paconrow img {
  width: 30px;
  height: 30px;
  margin-right: 10px;
  border-radius: 15px;
}
img {
  vertical-align: middle;
}
img {
  border: 0;
}
.pacont i {
  font-size: 16px;
  margin-right: 10px;
}
.fbco {
  color: #1877f2;
}
.paconi i {
  cursor: pointer;
}
.inco {
  color: #ff69a1;
}
.twco {
  color: #1da1f2;
}
.ytco {
  color: #ff6564;
}
</style>
