<template>
    <div class="welcome">
        <div class="titleCenter">
        <h3 class="titleHead pt-3">Welcome to the Team</h3>
        <h6 class="titleDetail pb-3">How would you like to start</h6>
        </div>
        <br>
        <br>
        <div class="allCards">
        <div class="cardCustom" v-for="item in arrViews" :key="item.id">
            <div class="titleCardCustom">{{item.title}}</div>
            <img class="imageCardCustom" v-if="item.id == 1" src="../../assets/bird.png" alt="">
            <img class="imageCardCustom" v-if="item.id == 2" src="../../assets/fb.png" alt="">
            <img class="imageCardCustom" v-if="item.id == 3" src="../../assets/pieza.png" alt="">
            <img class="imageCardCustom" v-if="item.id == 4" src="../../assets/cohete.png" alt="">
            <div class="textCardCustom">{{item.text}}</div>
            <div class="cotentButtonGo">
            <b-button class="buttonGo" variant="primary">Go</b-button>
            </div>
        </div>
        </div>
        <br>
        <br>
        <br>
    </div>
</template>
<script>
export default {
  name: 'Welcome',
  data () {
    return {
      arrViews: [
        {
          id: 1,
          title: 'Listen',
          image: '../assets/bird.png',
          text: 'Listen to a Context related to your objective.',
          redirect: ''
        },
        {
          id: 2,
          title: 'Monitor',
          image: '../assets/fb.png',
          text: 'Reach your Marketing and sales goals with marketing campaigns over multiple Social Media at the same time.',
          redirect: ''
        },
        {
          id: 3,
          title: 'Design',
          image: '../assets/pieza.png',
          text: 'Design lets you design your campaign around a sweepstake, a promotion, a form, a landing page or a poll.',
          redirect: ''
        },
        {
          id: 4,
          title: 'Advise',
          image: '../assets/cohete.png',
          text: 'Post from one place on all your social networks.',
          redirect: ''
        }
      ]
    }
  },
  components: {
  }
}
</script>

<style>
.home {
  width: 1359px;
  margin: auto;
  font-family: 'Oxygen', sans-serif;
  font-size: 12px !important;
}
.isctitle {
  font-size: 18px;
  font-weight: 600;
  color: #2c3852;
  text-align: left;
}
.tab {
  background-color: white;
  margin-top: 40px;
  height: 620px;
}
.divs-content {
  margin: auto;
}
.titleCenter{
  text-align: center;
  width: auto;
  margin-left: 5%;
  margin-right: 5%;
  background-color: white;
}
.allCards{
  width: auto;
  margin-left: 10%;
  margin-right: 10%;
  display: flex;
}

.cardCustom{
  width: 250px;
  height: 400px;
  padding-left: 25px;
  padding-right: 25px;
  background-color: white;
  margin-right: 10px !important;
  margin-left: 10px !important;
}
.titleCardCustom{
  font-weight: 500;
  color: #333333 !important;
  font-family: 'Oxygen', sans-serif !important;
  font-size: 24px;
  text-align: center;
}
.imageCardCustom{
  text-align: center;
  width: 200px;
  height: auto;
  padding-left: 1px;
  padding-right: 1px;
}
.textCardCustom{
  font-size: 12px;
  color: #333333 !important;
  height: 60px;
  width: auto;
}
.cotentButtonGo{
  margin-top: 50px;
  text-align: center;
  padding-left: 10px;
  padding-right: 10px;
}
.buttonGo{
  border: transparent;
  background: #00a5ff;
  font-size: 12px;
  width: 150px;
}
.titleHead{
  font-family: 'Oxygen', sans-serif !important;
  font-size: 24px;
  text-align: center;
}
</style>
