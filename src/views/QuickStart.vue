<template>
  <div class="quick">
     <stepsTop :stepselect=selectStep  v-if="selectStep>0"></stepsTop>
     <FirstPage class="firstpageCustom" v-on:change-Step="change($event)" v-if="selectStep==0"></FirstPage>
     <SetUpAccount v-on:change-Step="change($event)" v-if="selectStep==1"></SetUpAccount>
     <ConfigureFollows v-on:change-Step="change($event)" v-if="selectStep==2"></ConfigureFollows>
     <ConfigureListen v-on:change-Step="change($event)" v-if="selectStep==3"></ConfigureListen>
  </div>
</template>

<script>
import FirstPage from '@/components/QuickStart/FirstPage.vue';
import SetUpAccount from '@/components/QuickStart/SetUpAccount.vue';
import ConfigureFollows from '@/components/QuickStart/ConfigureFollows.vue';
import ConfigureListen from '@/components/QuickStart/ConfigureListen.vue';
import stepsTop from '@/components/QuickStart/stepsTop.vue';
export default {
name:'quickstart',
data(){
  return{
   selectStep:0
  }
},
methods:{
  change: function(event){
    this.selectStep=event
    console.log(this.selectStep);
  }
},
components:{
  FirstPage,
  SetUpAccount,
  ConfigureFollows,
  ConfigureListen,
  stepsTop
}
}
</script>

<style>
.quick{
  text-align: center;
  align-items: center;
}
.firstpageCustom{
  text-align: center;
  margin: auto;
}
</style>