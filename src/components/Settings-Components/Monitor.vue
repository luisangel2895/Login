<template>
  <div class="monitor">
    <div id="divhtabca" style="min-height: 350px">
      <div class="acenter elotabs">
        <div
          :class="['elotb', select == 'profile' ? 'elact' : '']"
          v-on:click="select = 'profile'"
        >
          Social Profiles
        </div>
        <div class="elosep">|</div>
        <div
          :class="['elotb', select == 'bench' ? 'elact' : '']"
          v-on:click="select = 'bench'"
        >
          Benchmark
        </div>
        <div class="elosep">|</div>
        <div
          :class="['elotb', select == 'campaign' ? 'elact' : '']"
          v-on:click="select = 'campaign'"
        >
          Campaigns
        </div>
      </div>

      <!-- <div style="padding-left:120px;padding-right:120px;background:url('images/logofullv.png') no-repeat;background-position:right 83px"> -->
      <div
        style="padding-left: 120px; padding-right: 120px; position: relative"
      >
        <SocialProfile v-if="select == 'profile'"></SocialProfile>
        <a
          href="javascript:void();"
          onclick="location.reload()"
          class="btn btn-sm"
          style="position: absolute; right: 180px; top: 10px; color: #7f8996"
          ><i class="fas fa-redo"></i
        ></a>
        <Campaigns v-if="select == 'campaign'"></Campaigns>
        <Benchmark v-if="select == 'bench'"></Benchmark>
      </div>
    </div>
  </div>
</template>

<script>
import SocialProfile from '@/components/Settings-Components/subCampaigns/socialProfile.vue'
import Campaigns from '@/components/Settings-Components/subCampaigns/Campaigns.vue'
import Benchmark from '@/components/Settings-Components/subCampaigns/Benchmark.vue'
export default {
  name: 'Monitor',
  components: {
    SocialProfile,
    Campaigns,
    Benchmark
  },
  data () {
    return {
      select: 'profile'
    }
  },
  methods: {}
}
</script>

<style>
.monitor {
  min-height: 350px;
  display: block;
  font-size: 12px !important;
  position: relative;
  padding: 60px 50px 20px;
}
.elact {
  background: #6b70c2;
  color: white;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 4px;
  width: 110px;
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
}
</style>
