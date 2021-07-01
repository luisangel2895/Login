<template>
  <div class="data">
    <div class="userinfo">
      <div
        class="enter"
        style="
          margin: 0;
          margin-bottom: 40px;
          margin-left: 44px;
          display: block;
          width: 100%;
        "
      >
        Enter your information
      </div>
      <div>
        <b-form-input
          class="inp"
          type="text"
          value="ISC Examples"
        ></b-form-input>
        <i class="fa fa-user"></i>
        <span>*</span>
      </div>
      <div>
        <b-form-input
          class="inp"
          type="email"
          value="iridium.style@gmail.com"
        ></b-form-input>
        <i class="fa fa-envelope"></i>
        <span>*</span>
      </div>
      <div>
        <b-form-input class="inp" type="tel" placeholder="Phone"></b-form-input>
        <i class="fa fa-phone"></i>
      </div>
      <div>
        <b-form-select
          id="sele"
          v-model="selected"
          :options="accomodations"
          class="select"
        ></b-form-select>
        <i class="fa fa-industry"></i>
      </div>
      <div>
        <b-form-input
          type="url"
          value="https://www.uniontelecomusa.com/"
          class="inp"
        ></b-form-input>
        <i class="fa fa-globe"></i>
      </div>
      <div>
        <b-form-select
          id="sele"
          v-model="selected"
          :options="idiomas"
          class="select"
        ></b-form-select>
        <i class="fa fa-flag"></i>
        <span>*</span>
      </div>
      <div>
        <b-form-select
          id="sele"
          v-model="selected"
          :options="paises"
          class="select"
        ></b-form-select>
        <i class="fa fa-map"></i>
      </div>
      <div>
        <b-form-input type="text" value="Lima" class="inp"></b-form-input>
        <i class="fa fa-map"></i>
      </div>
      <div>
        <b-form-select
          id="sele"
          v-model="selected"
          :options="idiomas"
          class="select"
        ></b-form-select>
        <i class="fa fa-clock-o"></i>
        <span>*</span>
      </div>
      <div
        style="
          margin-bottom: 0px;
          text-align: right;
          width: 884px;
          display: block;
          margin-top: 0px;
          top: -20px;
          position: relative;
          font-size: 11px;
          color: #9ea5b1;
        "
      >
        <sup>*</sup> Obligatory fields
      </div>
    </div>
    <div class="acenter iscbutton">Save</div>
    <br />
    <br />
    <a href="#" class="acenter cotop" style="margin-top: 22px; cursor: pointer">
      <i class="fa fa-unlock-alt"></i> Change password
    </a>
  </div>
</template>

<script>
export default {
  name: 'Data',
  data () {
    return {
      selected: null,
      accomodations: [
        { value: null, text: 'Accomodations' },
        { value: 1, text: 'Alcohol' },
        { value: 2, text: 'Industrial' },
        { value: 3, text: 'Retail' }
      ],
      idiomas: [
        { value: null, text: 'Idiomas' },
        { value: 1, text: 'English' },
        { value: 2, text: 'Español' },
        { value: 3, text: 'Portugues' }
      ],
      paises: [
        { value: null, text: 'Perú' },
        { value: 1, text: 'Colombia' },
        { value: 2, text: 'Brasil' },
        { value: 3, text: 'Argentina' }
      ]
    }
  }
}
</script>

<style >
.data {
  background-color: white;
  width: 966px;
  height: 445px;
  padding-top: 60px;
}
.inp {
  width: 240px;
  border-radius: 3px;
  box-shadow: inset 0px 1px 3px 1px rgb(72 72 72 / 18%);
  border: solid 1px #c7cfe2;
  background-color: #ffffff;
  text-indent: 14px;
  color: #a2acc4;
}
.place {
  margin-left: 40px;
  margin-right: 40px;
  margin-bottom: 40px;
  width: 966px;
  width: 900px;
}
/* .enter {
    margin-top:30px ;
    font-size: 15px;
    font-weight: 600;
    color: #2c3852;
    text-align: left;
} */
.enter {
  font-size: 15px;
  font-weight: 600;
  color: #2c3852;
  text-align: left;
}
.select {
  width: 240px;
  border-radius: 3px;
  box-shadow: inset 0px 1px 3px 1px rgb(72 72 72 / 18%);
  border: solid 1px #c7cfe2;
  background-color: #ffffff;
  text-indent: 14px;
  color: #a2acc4;
  padding: 8px;
}
.colum {
  padding: 0px;
  margin: 0px;
}
.userinfo div {
  position: relative;
  display: inline-block;
  width: 240px;
  margin-left: 40px;
  margin-right: 40px;
  margin-bottom: 40px;
}
.userinfo i {
  position: absolute;
  top: 12px;
  left: 8px;
  color: #a2acc4;
  font-size: 13px;
}
.userinfo span {
  position: absolute;
  top: 30px;
  right: 10px;
  top: -20px;
  right: 2px;
  color: #a2acc4;
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
.acenter {
  text-align: center;
}
.cotop {
  color: #00a5ff !important;
}
a {
  text-decoration: none !important;
}
</style>
