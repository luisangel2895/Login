<template>
  <div class="profile">
    <div class="isctitle" style="margin-top: 20px">Profile</div>

    <b-tabs class="tab" content-class="mt-3" justified>
      <b-tab title="Data" active>
        <Data class="divs-content"></Data>
        <br />
        <Logo></Logo>
      </b-tab>
      <b-tab title="User">
        <User class="divs-content"></User>
        <br />
        <Logo></Logo>
      </b-tab>
      <b-tab title="Group">
        <Group class="divs-content"></Group>
        <br />
        <Logo></Logo>
      </b-tab>
      <b-tab title="Plan">
        <Plan class="divs-content"></Plan>
        <br />
        <Logo></Logo>
      </b-tab>
      <b-tab title="Payment">
        <Payment class="divs-content"></Payment>
        <br />
        <Logo></Logo>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import Data from '@/components/Profile-Components/Data.vue'
import Group from '@/components/Profile-Components/Group.vue'
import Payment from '@/components/Profile-Components/Payment.vue'
import Plan from '@/components/Profile-Components/Plan.vue'
import User from '@/components/Profile-Components/User.vue'
import Logo from '@/components/Profile-Components/logo.vue'
export default {
  name: 'Profile',
  components: {
    Data,
    Group,
    Payment,
    Plan,
    User,
    Logo
  }
}
</script>

<style>
.profile {
  width: 1359px;
  margin: auto;
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
