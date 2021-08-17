<template>
  <div class="nas">
    <div class="titleCenter">
        <h3 class="titleHead pt-3">Welcome to the Team</h3>
        <h6 class="titleDetail pb-3">How would you like to start</h6>
    </div>
    <section class="quickstart">
      <section class="menu-option">
        <form id="formListen">
          <input type="hidden" name="token" id="token" value="" />
          <h3>Listen</h3>
          <img src="../../assets/bird.png" alt="Listen" />
          <p>Listen to a Context related to your objective.</p>
          <a
            class="iscbutton"
            id="ttp_listening"
            href="#"
            onclick="return topmenu_listening();"
            >Go</a
          >
        </form>
      </section>
      <section class="menu-option">
        <h3>Monitor</h3>
        <img src="../../assets/fb.png" alt="Monitor" />
        <p>
          Reach your Marketing and sales goals with marketing campaigns over
          multiple Social Media at the same time.
        </p>
        <a id="ttp_camps" class="iscbutton" href="http://isc-overview-monitor.s3-website-us-east-1.amazonaws.com/overview/accounts">Go</a>
      </section>
      <section class="menu-option">
        <h3>Design</h3>
        <img src="../../assets/pieza.png" alt="Design" />
        <p>
          Design lets you design your campaign around a sweepstake, a promotion,
          a form, a landing page or a poll.
        </p>
        <a
          id="ttp_addons"
          class="iscbutton"
          href="#"
          onclick="return topmenu_addons();"
          >Go</a
        >
      </section>
      <section class="menu-option">
        <h3>Advise</h3>
        <img src="../../assets/cohete.png" alt="publish" />
        <p>Post from one place on all your social networks.</p>
        <a
          id="ttp_pub"
          class="iscbutton"
          href="#"
          onclick="return topmenu_advise()"
          >Go</a
        >
      </section>
    </section>
  </div>
</template>

<script>
export default {
  name: 'nas'
}
</script>
<style>
.titleCenter{
  text-align: center;
  width: auto;
  margin-left: 10%;
  margin-right: 10%;
  background-color: white;
}
.titleHead{
  font-family: 'Oxygen', sans-serif !important;
  font-size: 24px;
  text-align: center;
}
.quickstart {
  padding-top: 80px;
}
.menu-option h3 {
  font-weight: 500;
  padding-bottom: 25px;
}
.menu-option {
  background-color: #ffffff;
  margin: 10px;
  padding: 25px;
  display: inline-block;
  vertical-align: top;
  width: 250px;
  min-height: 400px;
}
h3 {
    font-size: 24px;
    line-height: 1.1;
    color: inherit;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
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

.menu-option a {
  width: 100%;
}
.menu-option p {
  margin: 10px 0;
  padding: 0 10px;
  text-align: center;
  min-height: 80px;
}
.nas {
    font-family: 'Oxygen',sans-serif;
    font-size: 12px !important;
    line-height: 1.42857143;
    text-align: center;
}
.nas a {
    text-decoration: none !important;
}

</style>
