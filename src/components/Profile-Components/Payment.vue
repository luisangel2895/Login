<template>
  <div class="payment">
    <div id="divcqpay" clas="acenter" style="padding-top: 20px">
      <div class="payb">
        <div class="paybtop bggreen">Basic</div>
        <div class="paybn cogreen"><sup>$</sup>10.00<span>/mo</span></div>
        <div class="paybdesc">Lorem upsum veritas duc in</div>
        <div class="paybdet">
          1 User <br />1 Campaign <br />1 Context <br />
        </div>
        <div class="iscbutton">Start free trial</div>
        <div class="payminfo cotop">More information</div>
      </div>
      <div class="payb" style="margin-left: 80px; margin-right: 80px">
        <div class="paybtop bgpurple">Advanced</div>
        <div class="paybn copurple"><sup>$</sup>10.00<span>/mo</span></div>
        <div class="paybdesc">Lorem upsum veritas duc in</div>
        <div class="paybdet">
          1 User <br />1 Campaign <br />1 Context <br />
        </div>
        <div class="iscbutton">Start free trial</div>
        <div class="payminfo cotop">More information</div>
      </div>
      <div class="payb">
        <div class="paybtop bgtop">Pro</div>
        <div class="paybn cotop"><sup>$</sup>10.00<span>/mo</span></div>
        <div class="paybdesc">Lorem upsum veritas duc in</div>
        <div class="paybdet">
          1 User <br />1 Campaign <br />1 Context <br />
        </div>
        <div class="iscbutton">Start free trial</div>
        <div class="payminfo cotop">More information</div>
      </div>
      <div class="clear"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Payment'
}
</script>

<style>
.payment {
  height: 445px;
  position: relative;
  padding: 60px 50px 20px;
  font-size: 12px !important;
}
.payb {
  border: 1px solid #f3f4f7;
  padding-bottom: 20px;
  display: inline-block;
  width: 240px;
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 2%);
}
.paybtop {
  padding: 6px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  color: white;
}
.bggreen {
  background: #00ccc0;
}
.paybn {
  font-size: 40px;
  text-align: center;
  font-weight: bold;
  margin-top: 20px;
}
.cogreen {
  color: #00ccc0;
}
.paybdesc {
  margin-top: 10px;
  margin-bottom: 30px;
  text-align: center;
  color: #5d6b88;
}
.paybdet {
  line-height: 30px;
  margin-bottom: 30px;
  color: #5d6b88;
}
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
.payminfo {
  margin-top: 20px;
  font-size: 11px;
}
.cotop {
  color: #00a5ff !important;
}
.bgpurple {
  background: #6b70c2 !important;
}
.copurple {
  color: #6b70c2;
}
.bgtop {
  background: #00a5ff;
}
.paybn sup {
  font-size: 15px;
  top: -17px;
  left: -5px;
}
.paybn span {
  font-size: 12px;
}
</style>
