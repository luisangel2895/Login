<template>
  <div class="socialprofile">
    <div id="kmprofile" class="kmdiv" style="padding-top: 40px">
      <div class="alft" style="float: left; width: 190px">
        <div class="minipark" style="text-align: left">Add profile</div>
        <div class="fbbg confcont" onclick="open_facebook_allow(11);">
          <i class="fab fa-facebook facebook-setting"></i>Connect
        </div>
        <div class="twbg confcont" onclick="open_twitter_allow(11);">
          <i class="fab fa-twitter twitter-setting"></i>Connect
        </div>
        <div class="inbg confcont" onclick="open_instagram_add(11);">
          <i class="fab fa-instagram instagram-setting"></i>Connect
        </div>
        <div class="ytbg confcont" onclick="open_youtube_allow(11);">
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
        <div v-for="item in profiles" :key="item.id" class="paconrow">
          <div :class="['paconb' ,item.rss == 'facebook' ? 'fbbg' : '',item.rss == 'twitter' ? 'twbg' : '',item.rss == 'youtube' ? 'ytbg' : '',item.rss == 'instagram' ? 'inbg' : '']"></div>
          <div class="pacont">
            <img
              :src="item.image"
            /><i v-if="item.rss=='facebook'" class="fab fbco fa-facebook"></i>
            <i v-if="item.rss=='twitter'" class="fab twco fa-twitter"></i>
            <i v-if="item.rss=='instagram'" class="fab inco fa-instagram"></i>
            <i v-if="item.rss=='youtube'" class="fab ytco fa-youtube"></i>
            {{item.name}}
          </div>
          <div class="paconi">
            <i class="fa fa-trash" onclick="pc_del_acc(this,5525);"></i>
          </div>
          <div class="pacond">{{'Date created:'+ item.date}}</div>
          <div class="clear"></div>
        </div>

      </div>
      <div class="clear"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SocialProfile',
  data () {
    return {
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
      ]
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
