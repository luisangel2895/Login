<template>
  <div class="settings">
    <div class="isctitle" style="margin-top: 20px">Settings</div>

    <b-tabs class="tab" content-class="mt-3" justified>
      <b-tab title="Monitor" active>
        <Monitor class="divs-content"></Monitor>
        <br />

        <Logo></Logo>
      </b-tab>
      <b-tab title="Listening">
        <Listening class="divs-content"></Listening>
        <br />
        <Logo></Logo>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import Monitor from '@/components/Settings-Components/Monitor.vue'
import Listening from '@/components/Settings-Components/Listening.vue'

import Logo from '@/components/Profile-Components/logo.vue'
export default {
  name: 'Settings',
  components: {
    Listening,
    Monitor,
    Logo
  }
}
</script>

<style>
.settings {
  width: 1359px;
  margin: auto;
  font-family: 'Oxygen';
  font-size: 12px !important;
}
.isctitle {
  font-size: 18px;
  font-weight: 600;
  color: #2c3852;
  text-align: left;
}
.tab {
  background-color: white;
  margin-top: 40px;
  height: 620px;
}
.divs-content {
  margin: auto;
}
</style>
