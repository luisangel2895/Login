<template>
  <div class="group">
    <div style="padding-left: 120px; padding-right: 120px; min-height: 300px">
      <div class="alft" style="margin-bottom: 20px; text-align: right">
        <div class="iscbutton">New Group</div>
      </div>
      <div class="" id="pcgroupcontainer">
        <div class="pcusrtop">
          <div class="pcusgn">Name</div>
          <div class="pcusgm">Members</div>
          <div class="clear" style="font-size: 0; padding: 0"></div>
        </div>
        <div
          style="
            border: 1px solid #c5d0e4;
            padding: 3px;
            height: 210px;
            width: 100%;
            overflow: scroll;
            overflow-x: hidden;
          "
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Group'
}
</script>

<style >
.iscbutton {
  border-radius: 3px;
  border: none;
  padding: 0 20px;
  height: 35px;
  line-height: 35px;
  font-size: 1em;
  background: #00a5ff;
  display: inline-block;
  color: #fff;
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
  cursor: pointer;
}
.group {
  height: 445px;
  position: relative;
  padding: 60px 50px 20px;
}
.pcusrtop div {
  padding: 15px;
  text-align: center;
  color: #bdc4d5;
  font-size: 11px;
  padding-bottom: 5px;
}
.pcusgn {
  float: left;
  width: 40%;
  text-align: left !important;
}
.pcusgm {
  float: left;
  width: 40%;
  text-align: center;
}
</style>
