<template>
    <div class="quickstart">
        <div class="contentInfo">
            <div class="centerInfo">
                <h3 class="title">Welcome</h3>
                <div class="textCustom">Gracias por tu preferencia, transformaremos tu manera de hacer negocios en las Redes Sociales a tráves de la análitica.</div>
                <img class="imageCustomTitle" src="../../assets/wiz.logo.png" alt="">
                <div class="textCustom">Simple. Inteligente.</div>
                <img class="imageCustomDetail" src="../../assets/wiz.rocket.png" alt="" @click="redirectGo()">
            </div>
        </div>
    </div>
</template>
<script>

export default {
  name: 'Quickstart',
  methods: {
    redirectGo () {
      console.log('en el redirect')
    }
  }
}
</script>
<style>
.contentInfo{
    width: auto;
    height: 100%;
    padding-left: 300px;
    padding-right: 300px;
    margin-top: 10%;
    margin-left: 10%;
    margin-right: 10%;
    background-color: transparent;
    background: url('../../assets/wiz.cloud.png');
}
.quickstart{
    height: 100% !important;
    width: 100%;
}
.textCustom{
    margin-top: 10px;
    text-align: center;
    align-items: center;
    width: auto;
    height: 80px;

}
.centerInfo{
    text-align: center;
    align-items: center;
}
.title{
    font-size: 24px;
}
.imageCustomDetail{
    margin-bottom: 10%;
    cursor: pointer;
}
</style>
