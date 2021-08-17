<template>
  <div class="benchmark">
    <div id="kmbench" class="kmdiv" style="padding-top: 40px">
      <div class="alft" style="float: left; width: 190px">
        <div class="minipark" style="text-align: left">Add profile</div>
        <div class="fbbg confcont" onclick="pc_bench_add('fb');">
          <i class="fab fa-facebook facebook-setting"></i>Add
        </div>
        <div class="twbg confcont" onclick="pc_bench_add('tw');">
          <i class="fab fa-twitter twitter-setting"></i>Add
        </div>
        <div class="inbg confcont" onclick="pc_bench_add('in');">
          <i class="fab fa-instagram instagram-setting"></i>Add
        </div>
        <div class="ytbg confcont" onclick="pc_bench_add('yt');">
          <i class="fab fa-youtube youtube-setting"></i>Add
        </div>
      </div>
      <div class="" style="float: left; width: 77%">
        <div class="bncbox">
          <div
            :class="['bnct', selectbench == 'fb' ? 'bncact' : '']"
            v-on:click="selectbench = 'fb'"
          >
            <i class="fbco fab fa-facebook"></i>
          </div>
          <div
            :class="['bnct', selectbench == 'twi' ? 'bncact' : '']"
            v-on:click="selectbench = 'twi'"
          >
            <i class="twco fab fa-twitter"></i>
          </div>
          <div
            :class="['bnct', selectbench == 'ins' ? 'bncact' : '']"
            v-on:click="selectbench = 'ins'"
          >
            <i class="inco fab fa-instagram"></i>
          </div>
          <div
            :class="['bnct', selectbench == 'yt' ? 'bncact' : '']"
            v-on:click="selectbench = 'yt'"
          >
            <i class="ytco fab fa-youtube"></i>
          </div>
          <div class="clear"></div>
          <div id="bncfb" v-if="selectbench == 'fb'">
            <div v-for="item in arrBenchmark" :key="item.id_cuenta_redsocial">
              <div class="bncrow" v-if="item.id_red_social=='1'">
              <div class="browt">
                <img
                  :src="item.dsc_logo"
                />{{item.nom_cuenta_red_social}}
              </div>
              <div class="browi">
                <i onclick="pc_del_acc(this,9656);" class="fa fa-trash"></i>
              </div>
              <div class="browd">{{'Date created: ' +getFechaFormat(item.fec_creacion)}}</div>
              <div class="clear"></div>
              </div>
            </div>
            <div class="clear"></div>
          </div>
          <div id="bncyt" v-if="selectbench == 'yt'">
            <div v-for="item in arrBenchmark" :key="item.id_cuenta_redsocial">
              <div class="bncrow" v-if="item.id_red_social=='2'">
              <div class="browt">
                <img
                  :src="item.dsc_logo"
                />{{item.nom_cuenta_red_social}}
              </div>
              <div class="browi">
                <i onclick="pc_del_acc(this,9656);" class="fa fa-trash"></i>
              </div>
              <div class="browd">{{'Date created: ' +getFechaFormat(item.fec_creacion)}}</div>
              <div class="clear"></div>
              </div>
            </div>
            <div class="clear"></div>
          </div>
          <div id="bnctw" v-if="selectbench == 'twi'">
            <div v-for="item in arrBenchmark" :key="item.id_cuenta_redsocial">
              <div class="bncrow" v-if="item.id_red_social=='3'">
              <div class="browt">
                <img
                  :src="item.dsc_logo"
                />{{item.nom_cuenta_red_social}}
              </div>
              <div class="browi">
                <i onclick="pc_del_acc(this,9656);" class="fa fa-trash"></i>
              </div>
              <div class="browd">{{'Date created: ' +getFechaFormat(item.fec_creacion)}}</div>
              <div class="clear"></div>
              </div>
            </div>

            <div class="clear"></div>
          </div>
          <div id="bncin" v-if="selectbench == 'ins'">
            <div v-for="item in arrBenchmark" :key="item.id_cuenta_redsocial">
              <div class="bncrow" v-if="item.id_red_social=='4'">
              <div class="browt">
                <img
                  :src="item.dsc_logo"
                />{{item.nom_cuenta_red_social}}
              </div>
              <div class="browi">
                <i onclick="pc_del_acc(this,9656);" class="fa fa-trash"></i>
              </div>
              <div class="browd">{{'Date created: ' +getFechaFormat(item.fec_creacion)}}</div>
              <div class="clear"></div>
              </div>
            </div>
            <div class="clear"></div>
          </div>
        </div>
      </div>
      <div class="clear"></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import endpoint from '../../../config'
export default {
  name: 'Benchmark',
  data () {
    return {
      arrBenchmark: [],
      ruta: endpoint.endpoint,
      selectbench: 'fb',
      benchs: [
        {
          id: 0,
          name: 'PERU CARAJOf',
          image: 'https://graph.facebook.com/137227012964529/picture?type=large',
          rss: 'facebook',
          date: '24/01/2021'
        },
        {
          id: 1,
          name: 'PERUsitopt',
          image: 'https://graph.facebook.com/137227012964529/picture?type=large',
          rss: 'twitter',
          date: '24/01/2021'
        },
        {
          id: 2,
          name: 'PERU CARAJOf',
          image: 'https://graph.facebook.com/137227012964529/picture?type=large',
          rss: 'facebook',
          date: '24/01/2021'
        },
        {
          id: 3,
          name: 'PERUsitopt',
          image: 'https://graph.facebook.com/137227012964529/picture?type=large',
          rss: 'twitter',
          date: '24/01/2021'
        },
        {
          id: 4,
          name: 'PERU CARAJOy',
          image: 'https://graph.facebook.com/137227012964529/picture?type=large',
          rss: 'youtube',
          date: '24/01/2021'
        },
        {
          id: 5,
          name: 'PERUsitopi',
          image: 'https://graph.facebook.com/137227012964529/picture?type=large',
          rss: 'instagram',
          date: '24/01/2021'
        }
      ]
    }
  },
  async mounted () {
    await this.getBenchmark()
  },
  methods: {
    async getBenchmark () {
      try {
        const respListBenchmark = await axios.get(this.ruta + 'monitor/getBenchmark')
        console.log(respListBenchmark)
        console.log(respListBenchmark.data)
        this.arrBenchmark = respListBenchmark.data.list
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
    }
  }

}
</script>

<style>
.benchmark {
  font-size: 12px !important;
}
.alft {
  text-align: left;
}
.minipark {
  text-align: center;
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
.twbg {
  background: #1da1f2 !important;
}
.inbg {
  background: #ff69a1 !important;
}
.ytbg {
  background: #ff6564 !important;
}
.bncbox {
  border: solid 1px #c2d1e6;
  padding: 3px;
  width: 100%;
}
.bnct {
  float: left;
  width: 25%;
  text-align: center;
  font-size: 18px;
  background: #f3f4f7;
  height: 40px;
  padding: 10px;
  cursor: pointer;
}
.bncact {
  background: white !important;
}
#bncfb,
#bncyt,
#bnctw,
#bncin {
  height: 162px;
  overflow: scroll;
  overflow-x: hidden;
}
.bncrow {
  border-bottom: 1px solid #f3f4f7;
}
.browt {
  float: left;
  padding-left: 20px;
  padding-top: 11px;
  color: #79849b;
}
.bncrow img {
  width: 30px;
  height: 30px;
  margin-right: 10px;
  border-radius: 15px;
}
.browi i {
  cursor: pointer;
}
.browi {
  float: right;
  width: 70px;
  height: 50px;
  text-align: center;
  font-size: 18px;
  padding-top: 10px;
  color: #b0b8cc;
}
.browd {
  float: right;

  color: #b0b8cc;
  text-align: right;
  padding-right: 10px;
  padding-top: 15px;
  font-size: 10px;
}
</style>
