<template>
  <div class="setup">
    
    <div id="qstep1" style="" abineguid="5B98E188743141C1B6AAE32F6131B924">
	<div class="qstitle" style="margin-top:60px">Set up your account</div>


    <input type="text" id="qbrandname" class="inpacc"  placeholder="Name">
   
	

	<div class="" style="margin-bottom:40px">
		<div class="" style="fon<t-size:11px;margin-bottom:10px">Connected channels</div>
		<div id="wizconecha"><!-- i class="fab fa-facebook fbco"></i> <i class="fab fa-twitter twco"></i--></div>
	</div>

	<div class="quboxcon" style="margin-bottom:140px">
		<!--  bboxes -->
		<div class="iscbutton fbbg" onclick="open_facebook_allow(11);"><i class="fab fa-facebook facebook-setting"></i> Connect</div>
		<div class="iscbutton twbg" onclick="open_twitter_allow(11);" style="margin-left:16px"><i class="fab fa-twitter twitter-setting"></i> Connect</div>
		<div class="iscbutton inbg" onclick="open_instagram_add(11);" style="margin-left:16px"><i class="fab fa-instagram instagram-setting"></i> Connect</div>
		<div class="iscbutton ytbg" onclick="open_youtube_allow(11);" style="margin-left:16px"><i class="fab fa-youtube youtube-setting"></i> Connect</div>
		<div class="iscbutton libg" onclick="open_linkedin(11);" style="margin-left:16px"><i class="fab fa-linkedin linkedin-setting"></i> Connect</div>
	</div>

	<div class="qbubox">
		<!--  div class="qbuboxbu" onclick="qintrostep(0);">Back</div --->
		<div class="qbuboxsk" onclick="qskip();" style="margin-left:308px">Skip these steps</div>
		<div class="qbuboxnx" @click="changeStep()">Next</div>
		<div class="clear"></div>
	</div>

</div>
  </div>
</template>

<script>
import stepsTop from '@/components/QuickStart/stepsTop.vue';
export default {
name:'SetUpAccount',
components:{
  stepsTop
},
methods:{
    changeStep:function(){
        
        this.$emit('change-Step',2)
        
    }
}
}
</script>

<style>
.setup{
   font-size: 12px !important;
    font-family: 'Oxygen',sans-serif;
    width: 1281px;
    margin: auto;
}
div{
  display: block;
}
.quboxcon .iscbutton {
  
    padding: 0 20px;
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
.qstitle {
    font-size: 25px;
    text-align: center;
    color: #2C3852;
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
input{
  margin: auto;
}
.ytbg {
    background: #ff6564 !important;
}
.quboxcon .iscbutton i {
    font-size: 16px;
    margin-right: 5px;
}
.inpacc {
    border: 1px solid #DDE4EA;
    border-radius: 2px;
    width:464px;
    margin-top:70px;
    margin-bottom:20px;
    
}
.inpacc {
    display: block !important;
    
    height: 34px !important;
    padding: 6px 12px !important;
    font-size: 14px !important;
    line-height: 1.42857143 !important;
    color: #555 !important;
    background-color: #fff !important; 
    background-image: none;
  
   
  
    box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%) !important;
   
    
}


.qbuboxsk {
    cursor: pointer;
    text-align: center;
    float: left;
 
    color: #B3C1DC;
    margin-top: 10px;
    font-size: 11px;
}
.qbubox {
    width: 700px;
    margin: auto;
}


.qbuboxnx {
    width: 100px;
    text-align: center;
    cursor: pointer;
    padding: 7px;
    float: right;
    background: #F9FAFC;
    border: 1px solid #C6D0E4;
    border-radius: 4px;
}
.clear {
    clear: both;
 }
</style>