<template>
  <div class="configfollows">
    <div id="qstep2" style="">
      <div class="qstitle" style="margin-bottom: 45px; margin-top: 60px">
        Configure who you want to follow
      </div>

      <div
        class=""
        id="qintroaddprof"
        style="display: none; margin-bottom: 10px; color: #b3c1dc"
      >
        You have successfully added this profiles
      </div>
      <div id="qintrobrow"></div>

      <div class="" style="margin-top: 20px; margin-bottom: 10px">
        Add more social profiles
      </div>
      <div class="" style="margin-bottom: 140px">
        <div class="iscbutton fbbg" onclick="pc_bench_add('fb');">
          <i class="fab fa-facebook facebook-setting"></i> Add
        </div>
        <div
          class="iscbutton ytbg"
          onclick="pc_bench_add('yt');"
          style="margin-left: 16px"
        >
          <i class="fab fa-youtube youtube-setting"></i> Add
        </div>
        <div
          class="iscbutton twbg"
          onclick="pc_bench_add('tw');"
          style="margin-left: 16px"
        >
          <i class="fab fa-twitter twitter-setting"></i> Add
        </div>
        <div
          class="iscbutton inbg"
          onclick="pc_bench_add('in');"
          style="margin-left: 16px"
        >
          <i class="fab fa-instagram instagram-setting"></i> Add
        </div>
      </div>

      <div class="qbubox">
        <div class="qbuboxbu" @click="changeStep(1)">Back</div>
        <div class="qbuboxsk" onclick="qskip();">Skip these steps</div>
        <div class="qbuboxnx" @click="changeStep(3)">Next</div>
        <div class="clear"></div>
      </div>
    </div>
  </div>
</template>

<script>
import stepsTop from "@/components/QuickStart/stepsTop.vue";
export default {
  name: "conffollows",
  components: {
    stepsTop,
  },
  methods: {
    changeStep: function (value) {
      this.$emit("change-Step", value);
    },
  },
};
</script>

<style>
.configfollows {
  text-align: center;
  font-size: 12px !important;
  font-family: "Oxygen", sans-serif;
  width: 1281px;
  margin: auto;
}
div {
  display: block;
}
.qbubox {
  width: 700px;
}
.qbuboxsk {
  cursor: pointer;
  text-align: center;
  float: left;
  margin-left: 200px;
  color: #b3c1dc;
  margin-top: 10px;
  font-size: 11px;
}
.qbuboxbu {
  width: 100px;
  text-align: center;
  cursor: pointer;
  padding: 7px;
  float: left;
  background: #f9fafc;
  border: 1px solid #c6d0e4;
  border-radius: 4px;
}
.qbuboxnx {
  width: 100px;
  text-align: center;
  cursor: pointer;
  padding: 7px;
  float: right;
  background: #f9fafc;
  border: 1px solid #c6d0e4;
  border-radius: 4px;
}
.clear {
  clear: both;
}

.fa-twitter{
  color: white !important;
}
</style>