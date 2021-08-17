<template>
  <div class="first">
    <div id="newpanelcc" align="center">
    <div id="qintro">
        <input type="hidden" id="list_account_id" value="8448b7bd-78d5-4c29-8dc3-5663d802f13d">
        <div class="qstitle" style="margin-top:120px">Welcome</div>
        <div class="" style="margin-bottom:40px;margin-top:10px;font-size:16px;color:#6F7C95">
        Gracias por tu preferencia, transformaremos tu manera de hacer negocios<br>en las Redes Sociales a tráves de la análitica.</div>

        <img src="//www.isocialcube.com/home/images/wiz.logo.png">

        <div style="font-size:16px;margin-top:10px;margin-bottom:40px;color:#6F7C95">Simple. Inteligente.</div>

        <div style="margin-bottom:15px"><img src="//www.isocialcube.com/home/images/wiz.rocket.png"></div>

        <div class="iscbutton" style="width:160px" @click="changeStep()">Start</div>
        

    </div>







</div>
		</div>

</template>

<script>

export default {
name:'firstpage',
methods:{
    changeStep:function(){
        
        this.$emit('change-Step',1)
        console.log(this.$emit('change-Step',1))
    }
}

}
</script>

<style>
.first {
    text-align: center;
    position: relative;
    background: url('https://www.isocialcube.com/home/images/wiz.cloud.png') 100% center / cover no-repeat;
    min-height: 900px;
    font-size: 12px !important;
    font-family: 'Oxygen',sans-serif;
    width: 1281px;
    margin: auto;
}
#newpanelcc {
    padding-right: 0px;
    padding-left: 0px;
}
.row {
    margin-left: 0px;
    margin-right: 0px;
}

img {
    vertical-align: middle;
}
img {
    border: 0;
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
    font-size: 25px !important;
    text-align: center;
    color: #2C3852;
}
</style>