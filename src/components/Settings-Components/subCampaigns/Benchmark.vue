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
            <div class="bncrow">
              <div class="browt">
                <img
                  src="https://graph.facebook.com/137227012964529/picture?type=large"
                />NORKY'S
              </div>
              <div class="browi">
                <i onclick="pc_del_acc(this,9656);" class="fa fa-trash"></i>
              </div>
              <div class="browd">Date created: 24/01/2021</div>
              <div class="clear"></div>
            </div>

            <div class="bncrow">
              <div class="browt">
                <img
                  src="https://graph.facebook.com/1310102402390031/picture?type=large"
                />Ricky Tacna
              </div>
              <div class="browi">
                <i onclick="pc_del_acc(this,9725);" class="fa fa-trash"></i>
              </div>
              <div class="browd">Date created: 14/04/2021</div>
              <div class="clear"></div>
            </div>

            <div class="bncrow">
              <div class="browt">
                <img
                  src="https://graph.facebook.com/360684794005493/picture?type=large"
                />Sandwiches Carlitos
              </div>
              <div class="browi">
                <i onclick="pc_del_acc(this,9726);" class="fa fa-trash"></i>
              </div>
              <div class="browd">Date created: 14/04/2021</div>
              <div class="clear"></div>
            </div>

            <div class="bncrow">
              <div class="browt">
                <img
                  src="https://graph.facebook.com/208751591037/picture?type=large"
                />McDonald's Guatemala
              </div>
              <div class="browi">
                <i onclick="pc_del_acc(this,9733);" class="fa fa-trash"></i>
              </div>
              <div class="browd">Date created: 15/04/2021</div>
              <div class="clear"></div>
            </div>
            <div class="clear"></div>
          </div>
          <div id="bncyt" v-if="selectbench == 'yt'">
            <div class="bncrow">
              <div class="browt">
                <img
                  src="https://yt3.ggpht.com/ytc/AAUvwnjGSlDWa0g_DBPOtf0Y6f5-xMiTTrLwR4Gbfnnpyg=s240-c-k-c0x00ffffff-no-rj"
                />Werevertumorro
              </div>
              <div class="browi">
                <i onclick="pc_del_acc(this,9763);" class="fa fa-trash"></i>
              </div>
              <div class="browd">Date created: 27/05/2021</div>
              <div class="clear"></div>
            </div>

            <div class="bncrow">
              <div class="browt">
                <img
                  src="https://yt3.ggpht.com/ytc/AKedOLQM5I1bLmUuzLqEXcj1BwcOKRdZ3RiH5geNiEuw=s240-c-k-c0x00ffffff-no-rj"
                />Ruth Jacinto
              </div>
              <div class="browi">
                <i onclick="pc_del_acc(this,9765);" class="fa fa-trash"></i>
              </div>
              <div class="browd">Date created: 30/06/2021</div>
              <div class="clear"></div>
            </div>

            <div class="clear"></div>
          </div>
          <div id="bnctw" v-if="selectbench == 'twi'">
            <div class="bncrow">
              <div class="browt">
                <img
                  src="https://pbs.twimg.com/profile_images/1033388433794850823/ds1jnTl3.jpg"
                />jonathan avila
              </div>
              <div class="browi">
                <i onclick="pc_del_acc(this,9738);" class="fa fa-trash"></i>
              </div>
              <div class="browd">Date created: 15/04/2021</div>
              <div class="clear"></div>
            </div>

            <div class="clear"></div>
          </div>
          <div id="bncin" v-if="selectbench == 'ins'">
            <div class="bncrow">
              <div class="browt">
                <img
                  src="https://scontent-iad3-1.xx.fbcdn.net/v/t51.2885-15/13743258_1716321305295888_1751396553_a.jpg?_nc_cat=1&amp;ccb=1-3&amp;_nc_sid=86c713&amp;_nc_ohc=9EdV9-RC0gMAX_vA67-&amp;_nc_ht=scontent-iad3-1.xx&amp;oh=c729f1d11cfe4b7d711c41ab4cca34f0&amp;oe=60DF87AE"
                />McDonald's Perú
              </div>
              <div class="browi">
                <i onclick="pc_del_acc(this,9720);" class="fa fa-trash"></i>
              </div>
              <div class="browd">Date created: 07/04/2021</div>
              <div class="clear"></div>
            </div>

            <div class="bncrow">
              <div class="browt">
                <img
                  src="https://scontent-iad3-1.xx.fbcdn.net/v/t51.2885-15/90091324_559430254680857_7412747651747151872_n.jpg?_nc_cat=109&amp;ccb=1-3&amp;_nc_sid=86c713&amp;_nc_ohc=lX7mL9qcVL0AX8t2AMx&amp;_nc_ht=scontent-iad3-1.xx&amp;oh=531750416b61c95bbdd5ccdff6f5e3d2&amp;oe=60DE3211"
                />Caranegra Oficial Tacna
              </div>
              <div class="browi">
                <i onclick="pc_del_acc(this,9721);" class="fa fa-trash"></i>
              </div>
              <div class="browd">Date created: 07/04/2021</div>
              <div class="clear"></div>
            </div>

            <div class="bncrow">
              <div class="browt">
                <img
                  src="https://scontent-iad3-1.xx.fbcdn.net/v/t51.2885-15/103470437_258712108740755_7062914014190129714_n.jpg?_nc_cat=105&amp;ccb=1-3&amp;_nc_sid=86c713&amp;_nc_ohc=d5ia9grWPLAAX-o09CH&amp;_nc_ht=scontent-iad3-1.xx&amp;oh=13095bfa0686989899a008c6bde818ec&amp;oe=60DF76FC"
                />Ricky Tacna
              </div>
              <div class="browi">
                <i onclick="pc_del_acc(this,9722);" class="fa fa-trash"></i>
              </div>
              <div class="browd">Date created: 07/04/2021</div>
              <div class="clear"></div>
            </div>

            <div class="bncrow">
              <div class="browt">
                <img
                  src="https://scontent-iad3-1.xx.fbcdn.net/v/t51.2885-15/171264888_489570418841923_6117754987811924264_n.jpg?_nc_cat=1&amp;ccb=1-3&amp;_nc_sid=86c713&amp;_nc_ohc=amEx_QJYWwgAX9Crv_j&amp;_nc_ht=scontent-iad3-1.xx&amp;oh=38f46e5c71d0528972d23a681848bacd&amp;oe=60DF6587"
                />La República
              </div>
              <div class="browi">
                <i onclick="pc_del_acc(this,9724);" class="fa fa-trash"></i>
              </div>
              <div class="browd">Date created: 12/04/2021</div>
              <div class="clear"></div>
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
export default {
  name: 'Benchmark',
  data () {
    return {
      selectbench: 'fb'
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
