<template>
  <div class="plan">
    <div style="padding-left: 120px; padding-right: 120px">
      <div style="height: 70px">
        <div class="pull-left" style="width: 300px">
          <div style="color: #ff7e7e; text-align: left">
            <i class="fa fa-warning" style="font-size: 14px"></i> You have 3155
            days until plan expires [13-02-2030]
          </div>
          <div style="font-weight: bold; font-size: 12px">
            <div class="pull-left">BETA PLAN</div>
            <div style="display: block; text-align: right">251%</div>
          </div>
          <div>
            <div class="progress" style="background-color: #dfe2e9 !important">
              <div
                class="progress-bar"
                role="progressbar"
                aria-valuenow="251"
                aria-valuemin="0"
                aria-valuemax="100"
                style="width: 251%; background-color: #00a5ff"
              >
                <span class="sr-only"></span>
              </div>
            </div>
          </div>
        </div>
        <div class="pull-right" style="color: #000">
          <label class="radio-inline" onclick="elotab_plan(this,'list');">
            <input type="radio" class="radio_profile" name="optradio" /><b
              >Listening</b
            >
          </label>
          <label class="radio-inline" onclick="elotab_plan(this,'camp');">
            <input
              type="radio"
              class="radio_profile"
              name="optradio"
              checked=""
            /><b>Campaings</b>
          </label>
        </div>
      </div>
      <div>
        <div class="pcusrtop">
          <div
            class="pcusn"
            style="width: 55%; padding: 15px 5px 5px 0px; text-align: left"
          >
            Details
          </div>
          <div
            class="pcusu"
            style="width: 15%; padding: 15px 5px 5px 0px; text-align: left"
          >
            Quota
          </div>
          <div
            class="pcusl"
            style="width: 15%; padding: 15px 5px 5px 0px; text-align: left"
          >
            Used
          </div>
          <div
            class="pcuss"
            style="width: 15%; padding: 15px 5px 5px 0px; text-align: left"
          >
            Rest
          </div>
          <div class="clear" style="font-size: 0; width: 0; padding: 0"></div>
        </div>
        <div
          style="
            height: 200px;
            overflow: scroll;
            overflow-x: hidden;
            border: 1px solid #c5d0e4;
            padding: 3px;
          "
        >
          <table
            class="table table-striped table-plan"
            id="plancamp"
            style="border: 0px; margin-bottom: 0px; display: table"
          >
            <tbody>
              <tr>
                <td width="55%">Profiles</td>
                <td width="15%">15</td>
                <td width="15%">24</td>
                <td width="15%">-9</td>
              </tr>
              <tr>
                <td>Benchmark</td>
                <td>30</td>
                <td>10</td>
                <td>20</td>
              </tr>
              <tr>
                <td>Campaigns(Active)</td>
                <td>15</td>
                <td>0</td>
                <td>15</td>
              </tr>
              <tr>
                <td>Users</td>
                <td>6</td>
                <td>1</td>
                <td>5</td>
              </tr>
            </tbody>
          </table>
          <table
            class="table table-striped table-plan"
            id="planlist"
            style="margin-bottom: 0px; display: none"
          >
            <tbody>
              <tr>
                <td width="55%">Keywords(Active)</td>
                <td>35</td>
                <td>218</td>
                <td>-183</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div style="margin-top: 40px">
        <div class="iscbutton">Upgrade Plan</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Plan'
}
</script>

<style>
.plan {
  height: 445px;
  position: relative;
  padding: 60px 50px 20px;
  font-size: 12px !important;
}
.pull-left {
  float: left !important;
}
.pull-right {
  float: right !important;
  color: white;
  font-weight: 400;
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}
.progress-bar {
  float: left;
  height: 100%;
  font-size: 12px;
  line-height: 20px;
  color: #fff;
  text-align: center;
  transition: width 0.6s ease;
}
.progress {
  background-color: #f3f4f7 !important;
  height: 8px !important;
}
.progress {
  border-radius: 0px !important;
  box-shadow: none !important;
}
* {
  box-sizing: border-box;
  font-family: "Oxigen", sans-serif;
}
div {
  display: block;
}
.checkbox-inline,
.radio-inline {
  position: relative;
  display: inline-block;
  padding-left: 20px;
  margin-bottom: 0;
  font-weight: 400;
  vertical-align: middle;
  cursor: pointer;
}
.checkbox-inline + .checkbox-inline,
.radio-inline + .radio-inline {
  margin-top: 0;
  margin-left: 10px;
}
.radio_profile:checked:before {
  position: absolute;
  font: 26px/1 "Arial", Sans-Serif;
  left: 22px;
  top: -7px;
  content: "\2022";
  transform: rotate(40deg);
  color: #00a5ff;
}
b,
strong {
  font-weight: 700;
}
.table.table-plan > tbody > tr > td {
  border: none;
  padding: 15px;
  text-align: left;
}
.table > tbody > tr > td,
.table > tbody > tr > th,
.table > tfoot > tr > td,
.table > tfoot > tr > th,
.table > thead > tr > td,
.table > thead > tr > th {
  line-height: 1.42857143;
  vertical-align: top;
}

.table-plan tbody tr:nth-child(even) {
  background: white;
}
</style>
