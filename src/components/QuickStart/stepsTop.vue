<template>
  <div class="steptop">
      <div class="quicktop bw" style="">
			<div id="quitopst1" :class="['qutbox',stepselect == 1 ? 'active' : '']">
				<div class="qutl"><div class="qucn">1</div></div>
				<div class="qutr">Set up your accounts</div>
			</div>
			<div id="quitopst2" :class="['qutbox',stepselect == 2 ? 'active' : '']">
				<div class="qutl"><div class="qucn">2</div></div>
				<div class="qutr">Configure who you want to<br>follow</div>
			</div>
			<div id="quitopst3" :class="['qutbox',stepselect == 3 ? 'active' : '']">
				<div class="qutl"><div class="qucn">3</div></div>
				<div class="qutr">Configure what do you want<br>to listen and where</div>
			</div>
		</div>
  </div>
</template>

<script>
export default {
name:'steptop',
props: {
    stepselect: Number
  },
}
</script>

<style>
.steptop{

    font-size: 13px !important;
    font-family: 'Oxygen',sans-serif;
}
.quicktop {
    border-top: 1px solid #C5D0E4;
    border-bottom: 1px solid #C5D0E4;
    height: 72px;
    text-align: center;
}
.bw {
    background: white !important;
}
.qutl {
    float: left;
    width: 50px;
    padding-top: 20px;
}
.quicktop > div.active {
    background: #F3F4F7;
    color: #00A5FF !important;
}
.quicktop > div {
    height: 70px;
    width: 230px;
    text-align: center;
    display: inline-block;
    color: #B7C5DE;
    position: relative;
}
.quicktop .active .qucn {
    border: 1px solid #00A5FF;
    color: #00A5FF !important;
}
.quicktop .qucn {
    display: inline-block;
    border-radius: 11px;
    border: 1px solid #B7C5DE;
    width: 22px;
    height: 22px;
    text-align: center;
    padding: 2px;
    font-size: 12px;
}
.qutr {
    float: left;
    padding-top: 20px;
    text-align: left;
}
.quicktop > div.active:before {
    height: 16px;
    width: 16px;
    background: #F3F4F7;
    left: 105px;
    border-left: 1px solid #C5D0E4;
    top: 62px;
    position: absolute;
    content: '';
    border-top: 1px solid #c5d0e4;
    -webkit-transform: rotate(
45deg
);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(
45deg
);
}
</style>