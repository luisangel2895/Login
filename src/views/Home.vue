<template>
  <div class="home">
    <Welcome v-if="condicional == 1"></Welcome>
    <Quickstart v-if="condicional == 2"></Quickstart>
  </div>
</template>
<script>
import Welcome from '@/components/home/Welcome.vue'
import Quickstart from '@/views/QuickStart.vue'
export default {
  name: 'Home',
  components: {
    Welcome,
    Quickstart
  },
  data () {
    return {
      condicional: 1,
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
  mounted () {
    const respStorageUser = JSON.parse(localStorage.getItem('userObj'))
    console.log('respStorageUser: ', respStorageUser)
    this.condicional = respStorageUser.FLG_INICIO_SESION === '1' ? 1 : 2
    console.log('el condicional: ', this.condicional)
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
  margin-right: 5px;
  margin-left: 5px;
}
.titleCardCustom{
  font-family: Oxygen;
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
  width: 150px;
}
</style>
