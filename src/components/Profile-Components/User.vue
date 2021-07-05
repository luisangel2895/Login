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
        <div class="pcusrow"  v-for="(timezone, key) in arrListUsers" v-bind:value="timezone.value" :key="key">
          <div class="pcusn">{{ timezone.DSC_NOMBRES }}</div>
          <div class="pcusu">{{ timezone.DSC_USERNAME }}</div>
          <div class="pcusl">English</div>
          <div class="pcuss"><span class="cotop">Active</span></div>
          <div class="pcusd">25/06/2021</div>
          <div class="pcusi"><i class="fa fa-edit"></i></div>
          <div class="pcusi"><i class="fa fa-trash"></i></div>
          <div class="clear"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'User',
  async mounted () {
    const respListUsers = await axios.get('http://localhost:3000/user/listUsers')
    console.log(respListUsers)
    console.log(respListUsers.data)
    this.arrListUsers = respListUsers.data.list
    console.log(this.arrListUsers)
  },
  data () {
    return {
      arrListUsers: null
    }
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
</style>
