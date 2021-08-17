<template>
  <div class="configurelisten">
   
    <div id="qstep3" style="">
        <div class="qstitle" style="margin-top:60px">Configure what do you want to listen and where</div>
        <div class="acenter"><i class="fab fa-twitter twco" style="font-size:24px"></i></div>

        <div class="qbubox">

            <div style="width:460px;" class="alft">
                <form id="wizcontext" method="post" abineguid="0B049A4C0E7C475D9CFE2285F8924A9E">
                <div style="margin-bottom:5px;margin-top:30px">Define your keywords</div>
                <input name="keyword1" id="conkey1" class="form-control" placeholder="keyword 1" style="width:220px;display:inline-block;margin-right:17px;margin-bottom:10px">
                <input name="keyword2" id="conkey2" class="form-control" placeholder="keyword 2" style="width:220px;display:inline-block">
                <input name="keyword3" id="conkey3" class="form-control" placeholder="keyword 3" style="width:220px;display:inline-block;margin-right:17px">
                <input name="keyword4" id="conkey4" class="form-control" placeholder="keyword 4" style="width:220px;display:inline-block">

                <div style="margin-bottom:5px;margin-top:30px">Which country?</div>
                <select id="concountry" name="country" style="width:220px" class="form-control">
                    <option value="all">All</option>
                    <option value="pe">Peru</option>
                    <option value="cl">Colombia</option>
                    <option value="ch">Chile</option>
                </select>

                <div style="margin-bottom:5px;margin-top:10px">Title your group of keywords</div>
                <input id="conname" name="name" class="form-control" style="margin-bottom:80px">
                </form>
            </div>

            <!-- img src="images/wizcondemo.png" style="margin-top:35px;margin-bottom:50px"><br -->

            <div class="qbuboxbu" @click="changeStep(2)">Back</div>
            <div class="qbuboxsk" onclick="qskip();">Skip these steps</div>
            <div class="qbuboxnx" onclick="qfinishvalidate();" style="color:white;background:#00CFBD;border:1px solid #00CFBD">Finish</div>
            <div class="clear"></div>
        </div>
    </div>
  </div>
</template>

<script>
import stepsTop from '@/components/QuickStart/stepsTop.vue';
export default {
name:'configurelisten',
components:{
  stepsTop
},
methods:{
    changeStep:function(value){
        
        this.$emit('change-Step',value)
        
    }
}
}
</script>

<style>
.configurelisten{
    text-align: center;
  font-size: 12px !important;
    font-family: 'Oxygen',sans-serif;
    width: 1281px;
    margin: auto;
    box-sizing: border-box;
}
div{
  display: block;
}
.qbubox{
  margin: auto;
}
.qstitle {
    font-size: 25px;
    text-align: center;
    color: #2C3852;
}
.qbubox {
    width: 700px;
}
.acenter {
    text-align: center;
}
.fa-twitter {
    color: #1da1f2;
}
.alft {
    text-align: left;
    margin: auto;
}
.qbuboxbu {
    width: 100px;
    text-align: center;
    cursor: pointer;
    padding: 7px;
    float: left;
    background: #F9FAFC;
    border: 1px solid #C6D0E4;
    border-radius: 4px;
}
.qbuboxsk {
    cursor: pointer;
    text-align: center;
    float: left;
    margin-left: 200px;
    color: #B3C1DC;
    margin-top: 10px;
    font-size: 11px;
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
.form-control {
    border: 1px solid #DDE4EA;
    border-radius: 2px;
}

element.style {
    width: 220px;
    display: inline-block;
    margin-right: 17px;
    margin-bottom: 10px;
}
.form-control {
    border: 1px solid #DDE4EA;
    border-radius: 2px;
    height: 34px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);
    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
}
select:not(:-internal-list-box) {
    overflow: visible !important;
}
.fa, .fas, .far, .fal, .fab {
    
    -webkit-font-smoothing: antialiased;
    display: inline-block;
    font-style: normal;
    font-variant: normal;
    text-rendering: auto;
    line-height: 1;
}

#qstep3 .fa-twitter{
    color: #1da1f2 !important;
}

</style>