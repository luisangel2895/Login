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
        <div class="paconrow">
          <div class="paconb fbbg"></div>
          <div class="pacont">
            <img
              src="https://graph.facebook.com/1154729827974715/picture?type=large"
            /><i class="fab fbco fa-facebook"></i>Iridium Style - Ventas por
            Internet
          </div>
          <div class="paconi">
            <i class="fa fa-trash" onclick="pc_del_acc(this,5525);"></i>
          </div>
          <div class="pacond">Date created: 13/02/2020</div>
          <div class="clear"></div>
        </div>

        <div class="paconrow">
          <div class="paconb twbg"></div>
          <div class="pacont">
            <img
              src="https://pbs.twimg.com/profile_images/974727011921997826/Hi3-8L4b_normal.jpg"
            /><i class="fab twco fa-twitter"></i>Iridium Style
          </div>
          <div class="paconi">
            <i class="fa fa-trash" onclick="pc_del_acc(this,5533);"></i>
          </div>
          <div class="pacond">Date created: 13/02/2020</div>
          <div class="clear"></div>
        </div>

        <div class="paconrow">
          <div class="paconb inbg"></div>
          <div class="pacont">
            <img
              src="https://scontent-iad3-1.xx.fbcdn.net/v/t51.2885-15/28766650_478529229228206_6646025401623642112_n.jpg?_nc_cat=105&amp;ccb=1-3&amp;_nc_sid=86c713&amp;_nc_eui2=AeFBYlLRoZrA4vRliLLsmuwXKY1yn0fwpE4pjXKfR_CkTihtEODimajd9biHW2Iq8pn0pWmhB6O98p2ANSd28cPI&amp;_nc_ohc=H5odWV0auXkAX-r8iAG&amp;_nc_ht=scontent-iad3-1.xx&amp;oh=ac9e6f9c223c3bd119c3b80ae12246fa&amp;oe=60E0DC9A"
            /><i class="fab inco fa-instagram"></i>Iridium Style
          </div>
          <div class="paconi">
            <i class="fa fa-trash" onclick="pc_del_acc(this,9355);"></i>
          </div>
          <div class="pacond">Date created: 13/02/2020</div>
          <div class="clear"></div>
        </div>

        <div class="paconrow">
          <div class="paconb ytbg"></div>
          <div class="pacont">
            <img
              src="https://yt3.ggpht.com/-fD2CLsr5ay8/AAAAAAAAAAI/AAAAAAAAAAA/Ys31kMdkbM8/s240-c-k-no-mo-rj-c0xffffff/photo.jpg"
            /><i class="fab ytco fa-youtube"></i>Iridium Style
          </div>
          <div class="paconi">
            <i class="fa fa-trash" onclick="pc_del_acc(this,5535);"></i>
          </div>
          <div class="pacond">Date created: 13/02/2020</div>
          <div class="clear"></div>
        </div>

        <div class="paconrow">
          <div class="paconb fbbg"></div>
          <div class="pacont">
            <img
              src="https://graph.facebook.com/391235384605810/picture?type=large"
            /><i class="fab fbco fa-facebook"></i>Iridium Logistic - Transporte
            y Turismo
          </div>
          <div class="paconi">
            <i class="fa fa-trash" onclick="pc_del_acc(this,5524);"></i>
          </div>
          <div class="pacond">Date created: 14/02/2020</div>
          <div class="clear"></div>
        </div>

        <div class="paconrow">
          <div class="paconb twbg"></div>
          <div class="pacont">
            <img
              src="https://pbs.twimg.com/profile_images/974723517160845312/z4vQIwMI_normal.jpg"
            /><i class="fab twco fa-twitter"></i>Iridium Logistic
          </div>
          <div class="paconi">
            <i class="fa fa-trash" onclick="pc_del_acc(this,5530);"></i>
          </div>
          <div class="pacond">Date created: 14/02/2020</div>
          <div class="clear"></div>
        </div>

        <div class="paconrow">
          <div class="paconb ytbg"></div>
          <div class="pacont">
            <img
              src="https://yt3.ggpht.com/-7KjfDRBI-es/AAAAAAAAAAI/AAAAAAAAAAA/QRgKgLtgyDc/s240-c-k-no-mo-rj-c0xffffff/photo.jpg"
            /><i class="fab ytco fa-youtube"></i>Iridium Logistic
          </div>
          <div class="paconi">
            <i class="fa fa-trash" onclick="pc_del_acc(this,5532);"></i>
          </div>
          <div class="pacond">Date created: 14/02/2020</div>
          <div class="clear"></div>
        </div>

        <div class="paconrow">
          <div class="paconb fbbg"></div>
          <div class="pacont">
            <img
              src="https://graph.facebook.com/1597363237056737/picture?type=large"
            /><i class="fab fbco fa-facebook"></i>IsocialCube
          </div>
          <div class="paconi">
            <i class="fa fa-trash" onclick="pc_del_acc(this,5635);"></i>
          </div>
          <div class="pacond">Date created: 21/12/2020</div>
          <div class="clear"></div>
        </div>

        <div class="paconrow">
          <div class="paconb inbg"></div>
          <div class="pacont">
            <img
              src="https://scontent-atl3-2.xx.fbcdn.net/v/t51.2885-15/127086926_668187073854766_5193574303588350834_n.jpg?_nc_cat=101&amp;ccb=2&amp;_nc_sid=86c713&amp;_nc_eui2=AeGtq3p0uKeGZZq_FdE1xJ7qNWT1v7BsLN01ZPW_sGws3Qy6GW-IgREVuIYV6LABdbY&amp;_nc_ohc=fxiNSoaJ7fwAX_LkfrC&amp;_nc_ht=scontent-atl3-2.xx&amp;oh=592b2280f42324a06f7c8d7ff5935c06&amp;oe=60379851"
            /><i class="fab inco fa-instagram"></i>Uff
          </div>
          <div class="paconi">
            <i class="fa fa-trash" onclick="pc_del_acc(this,9600);"></i>
          </div>
          <div class="pacond">Date created: 23/12/2020</div>
          <div class="clear"></div>
        </div>

        <div class="paconrow">
          <div class="paconb twbg"></div>
          <div class="pacont">
            <img
              src="https://pbs.twimg.com/profile_images/1349882720067989504/9q05VSWS.jpg"
            /><i class="fab twco fa-twitter"></i>isocialtw
          </div>
          <div class="paconi">
            <i class="fa fa-trash" onclick="pc_del_acc(this,9637);"></i>
          </div>
          <div class="pacond">Date created: 15/01/2021</div>
          <div class="clear"></div>
        </div>

        <div class="paconrow">
          <div class="paconb ytbg"></div>
          <div class="pacont">
            <img
              src="https://yt3.ggpht.com/ytc/AAUvwniSAP-APrSb2_q2rQ_2CcGhUStm8n53Pyq2jvT_=s240-c-k-c0x00ffffff-no-rj"
            /><i class="fab ytco fa-youtube"></i>isocialcube tester
          </div>
          <div class="paconi">
            <i class="fa fa-trash" onclick="pc_del_acc(this,9645);"></i>
          </div>
          <div class="pacond">Date created: 15/01/2021</div>
          <div class="clear"></div>
        </div>

        <div class="paconrow">
          <div class="paconb ytbg"></div>
          <div class="pacont">
            <img
              src="https://yt3.ggpht.com/ytc/AAUvwni31OIobJq5DC6mS5ay_r42le0B4WnZILIx3Q=s240-c-k-c0x00ffffff-no-rj"
            /><i class="fab ytco fa-youtube"></i>Alexander Ortiz
          </div>
          <div class="paconi">
            <i class="fa fa-trash" onclick="pc_del_acc(this,9647);"></i>
          </div>
          <div class="pacond">Date created: 18/01/2021</div>
          <div class="clear"></div>
        </div>

        <div class="paconrow">
          <div class="paconb inbg"></div>
          <div class="pacont">
            <img
              src="https://scontent-iad3-1.xx.fbcdn.net/v/t51.2885-15/139560271_407760773890389_158922638768583292_n.jpg?_nc_cat=107&amp;ccb=1-3&amp;_nc_sid=86c713&amp;_nc_ohc=4n-Yn8wB09YAX8vslLO&amp;_nc_ht=scontent-iad3-1.xx&amp;oh=64b6687d5cae56aab1ef83fa45a01ee7&amp;oe=60E152C2"
            /><i class="fab inco fa-instagram"></i>isocialcubetest
          </div>
          <div class="paconi">
            <i class="fa fa-trash" onclick="pc_del_acc(this,9649);"></i>
          </div>
          <div class="pacond">Date created: 21/01/2021</div>
          <div class="clear"></div>
        </div>

        <div class="paconrow">
          <div class="paconb fbbg"></div>
          <div class="pacont">
            <img
              src="https://scontent-lhr8-1.xx.fbcdn.net/v/t1.0-1/cp0/p50x50/140080000_100160752077184_4610988838484156712_n.png?_nc_cat=107&amp;ccb=2&amp;_nc_sid=dbb9e7&amp;_nc_ohc=UGJa4rujDGwAX-jKN4X&amp;_nc_oc=AQkPq-O7GBii775fYk7h8sKA7E-7K6L5a3DTVuXS1I8veMn3ZfJthuD-nGWZUxedRUI&amp;_nc_ht=scontent-lhr8-1.xx&amp;_nc_tp=30&amp;oh=131ee67110568153313f88ae6a0b6859&amp;oe=602F569C"
            /><i class="fab fbco fa-facebook"></i>Isc develop
          </div>
          <div class="paconi">
            <i class="fa fa-trash" onclick="pc_del_acc(this,9648);"></i>
          </div>
          <div class="pacond">Date created: 22/01/2021</div>
          <div class="clear"></div>
        </div>

        <div class="paconrow">
          <div class="paconb fbbg"></div>
          <div class="pacont">
            <img
              src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-1/cp0/p50x50/135029959_109574277743122_3516300252451078667_n.png?_nc_cat=101&amp;ccb=2&amp;_nc_sid=dbb9e7&amp;_nc_eui2=AeFn15uflLZEjGSQdMonMqnqgYVDNT3Fw8GBhUM1PcXDwS_oqwzUpXI-wsyIrcAOaC908JbszhLIPq-Q-XtpTHLE&amp;_nc_ohc=fLi7mN5wRksAX-KbOcu&amp;_nc_ht=scontent-iad3-1.xx&amp;_nc_tp=30&amp;oh=41eff7970a5d4eec8154ae5deadbae5d&amp;oe=6032CAEF"
            /><i class="fab fbco fa-facebook"></i>Ingeniero errante
          </div>
          <div class="paconi">
            <i class="fa fa-trash" onclick="pc_del_acc(this,9655);"></i>
          </div>
          <div class="pacond">Date created: 24/01/2021</div>
          <div class="clear"></div>
        </div>

        <div class="paconrow">
          <div class="paconb fbbg"></div>
          <div class="pacont">
            <img
              src="https://scontent-lga3-2.xx.fbcdn.net/v/t31.0-1/cp0/c3.0.50.50a/p50x50/11703273_1663023380596365_2576449096159166284_o.jpg?_nc_cat=104&amp;ccb=3&amp;_nc_sid=dbb9e7&amp;_nc_eui2=AeH26NhRcoGGjQ2mjXKfuDmbuCMZj0znHiu4IxmPTOceK674s72YvjQT807VPL3u3sh3jiTBuJ3ow_t5fzgCHXzw&amp;_nc_ohc=-6Aa6fvA7l0AX-WFzPy&amp;_nc_ht=scontent-lga3-2.xx&amp;tp=27&amp;oh=8bc3d348b037ffafb5cc9291273f1135&amp;oe=60511174"
            /><i class="fab fbco fa-facebook"></i>UNI JUDO CLUB
          </div>
          <div class="paconi">
            <i class="fa fa-trash" onclick="pc_del_acc(this,9668);"></i>
          </div>
          <div class="pacond">Date created: 16/02/2021</div>
          <div class="clear"></div>
        </div>

        <div class="paconrow">
          <div class="paconb twbg"></div>
          <div class="pacont">
            <img
              src="https://pbs.twimg.com/profile_images/678232187473408000/SF8Qg-vs.jpg"
            /><i class="fab twco fa-twitter"></i>alexander ortiz
          </div>
          <div class="paconi">
            <i class="fa fa-trash" onclick="pc_del_acc(this,9669);"></i>
          </div>
          <div class="pacond">Date created: 16/02/2021</div>
          <div class="clear"></div>
        </div>

        <div class="paconrow">
          <div class="paconb ytbg"></div>
          <div class="pacont">
            <img
              src="https://yt3.ggpht.com/ytc/AAUvwngChjJudHsByGbBrl1NB61lnH4JhBXYhACRMtCJTA=s240-c-k-c0x00ffffff-no-rj"
            /><i class="fab ytco fa-youtube"></i>Alexander Ortiz
          </div>
          <div class="paconi">
            <i class="fa fa-trash" onclick="pc_del_acc(this,9670);"></i>
          </div>
          <div class="pacond">Date created: 17/02/2021</div>
          <div class="clear"></div>
        </div>

        <div class="paconrow">
          <div class="paconb inbg"></div>
          <div class="pacont">
            <img
              src="https://scontent-iad3-1.xx.fbcdn.net/v/t51.2885-15/75602174_2513184912272076_4896156601683017728_n.jpg?_nc_cat=108&amp;ccb=1-3&amp;_nc_sid=86c713&amp;_nc_eui2=AeFvwAb4z0WKC1csACORH3QvwyKZ-FUgFp7DIpn4VSAWnnbVqNETPk8tPvVS4YX5_w3n-6nsibrJtyet6XNTw37v&amp;_nc_ohc=TrU3AvZy0_UAX8FLPlx&amp;_nc_ht=scontent-iad3-1.xx&amp;oh=1e341702633c9c6f1650a0d6eb11375c&amp;oe=60E189CC"
            /><i class="fab inco fa-instagram"></i>ALEXANDER ORTIZ VARGAS
          </div>
          <div class="paconi">
            <i class="fa fa-trash" onclick="pc_del_acc(this,9694);"></i>
          </div>
          <div class="pacond">Date created: 04/03/2021</div>
          <div class="clear"></div>
        </div>

        <div class="paconrow">
          <div class="paconb fbbg"></div>
          <div class="pacont">
            <img
              src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-1/cp0/p50x50/134089749_204104881353450_3877246989537939103_n.jpg?_nc_cat=108&amp;ccb=1-3&amp;_nc_sid=dbb9e7&amp;_nc_eui2=AeFQV3JUrhWSjzvwplGN0HSjN0uWBRMzpS43S5YFEzOlLlvvkiwt1X3bqafmRjDYpRenPesUfLNAHcDh3sc8tVJK&amp;_nc_ohc=RsMKAEJJG1sAX_TIm-D&amp;_nc_ht=scontent-iad3-1.xx&amp;tp=27&amp;oh=cf99fd92fd0da0a91c764a202dc13c7c&amp;oe=60744533"
            /><i class="fab fbco fa-facebook"></i>Rocky's Burger
          </div>
          <div class="paconi">
            <i class="fa fa-trash" onclick="pc_del_acc(this,9715);"></i>
          </div>
          <div class="pacond">Date created: 15/03/2021</div>
          <div class="clear"></div>
        </div>

        <div class="paconrow">
          <div class="paconb inbg"></div>
          <div class="pacont">
            <img
              src="https://scontent-iad3-1.xx.fbcdn.net/v/t51.2885-15/104527071_188644252568418_2426487623430851410_n.jpg?_nc_cat=105&amp;ccb=1-3&amp;_nc_sid=86c713&amp;_nc_eui2=AeHeZg0FDLoF-jRkGtiFAFuxhztTbclDAMCHO1NtyUMAwN9NszECuRJpZhp3xjz4CRc5xhfXMkzcCk6xz8Ey_Hn0&amp;_nc_ohc=oxTawUcIeJAAX-VH5w3&amp;_nc_ht=scontent-iad3-1.xx&amp;oh=9abce4540edfa7edab75b53c529c5f56&amp;oe=60E1D205"
            /><i class="fab inco fa-instagram"></i>Burgers Rocky's
          </div>
          <div class="paconi">
            <i class="fa fa-trash" onclick="pc_del_acc(this,9716);"></i>
          </div>
          <div class="pacond">Date created: 15/03/2021</div>
          <div class="clear"></div>
        </div>

        <div class="paconrow">
          <div class="paconb ytbg"></div>
          <div class="pacont">
            <img
              src="https://yt3.ggpht.com/ytc/AAUvwnhAL-XTLZJv1mvmcs0PWjO4qxf-DYSTQcuoGJcuWQ=s240-c-k-c0x00ffffff-no-rj"
            /><i class="fab ytco fa-youtube"></i>Jonathan Avila Huamolle
          </div>
          <div class="paconi">
            <i class="fa fa-trash" onclick="pc_del_acc(this,9751);"></i>
          </div>
          <div class="pacond">Date created: 21/05/2021</div>
          <div class="clear"></div>
        </div>

        <div class="paconrow">
          <div class="paconb ytbg"></div>
          <div class="pacont">
            <img
              src="https://yt3.ggpht.com/a/AGF-l7_ToYA-Fr-dezu7mKGTxw4sXmFK2a8tWAggWg=s240-c-k-c0xffffffff-no-rj-mo"
            /><i class="fab ytco fa-youtube"></i>Nevison Aguilar
          </div>
          <div class="paconi">
            <i class="fa fa-trash" onclick="pc_del_acc(this,9412);"></i>
          </div>
          <div class="pacond">Date created: 27/05/2021</div>
          <div class="clear"></div>
        </div>

        <div class="paconrow">
          <div class="paconb fbbg"></div>
          <div class="pacont">
            <img
              src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.6435-1/cp0/p50x50/151007844_193438862207090_5232687970585337525_n.png?_nc_cat=103&amp;ccb=1-3&amp;_nc_sid=dbb9e7&amp;_nc_eui2=AeFZzOhs9O1FZpvWO2bsesm4ilOvZv3DmyOKU69m_cObI8kzgPWA3Z0BEDj-lzvEkxzKcQaiqb-e1Uh6EHqjeQ98&amp;_nc_ohc=q8S9WiQa6hIAX82eKti&amp;_nc_ht=scontent-iad3-1.xx&amp;tp=30&amp;oh=7cfa7818e36108dba8fe73e539c70865&amp;oe=60D592D7"
            /><i class="fab fbco fa-facebook"></i>Prueba
          </div>
          <div class="paconi">
            <i class="fa fa-trash" onclick="pc_del_acc(this,9764);"></i>
          </div>
          <div class="pacond">Date created: 27/05/2021</div>
          <div class="clear"></div>
        </div>
      </div>
      <div class="clear"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SocialProfile'
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
