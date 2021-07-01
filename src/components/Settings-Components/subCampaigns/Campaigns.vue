<template>
  <div class="campaigns">
    <div id="kmcamp" class="kmdiv">
      <div class="alft">
        <div
          style="
            margin-bottom: 20px;
            margin-top: 30px;
            position: relative;
            height: 50px;
          "
        >
          <select
            class="form-control"
            style="
              position: absolute;
              width: 180px;
              border-radius: 3px;
              box-shadow: inset 0px 1px 3px 1px rgba(72, 72, 72, 0.18);
              border: solid 1px #c7cfe2;
              background-color: #ffffff;
            "
          >
            <option>Active Campaings</option>
          </select>
          <div class="iscbutton pull-right" onclick="return camp_create();">
            New Campaign
          </div>
        </div>

        <div
          class=""
          id="table-campaings"
          style="
            border: 1px solid #c2d1e6;
            padding: 3px;
            height: 210px;
            overflow: scroll;
            overflow-x: hidden;
          "
        >
          <div class="pacarow" style="border-bottom: 1px solid #f3f4f7">
            <div class="pacat cotop">demo</div>
            <div class="pacac"></div>
            <div class="pacai">
              <i class="fa fa-trash" onclick="pc_del_camp(this,1775)"></i>
            </div>
            <div class="pacai">
              <i class="fa fa-edit" onclick="return camp_edit(1775);"></i>
            </div>
            <div class="pacad">Date Start: 01/06/2021</div>
            <div class="clear"></div>
          </div>

          <div class="pacarow" style="border-bottom: 1px solid #f3f4f7">
            <div class="pacat cotop">Navidad</div>
            <div class="pacac">
              <i class="fab twco fa-twitter"></i
              ><i class="fab fbco fa-facebook"></i>
            </div>
            <div class="pacai">
              <i class="fa fa-trash" onclick="pc_del_camp(this,1774)"></i>
            </div>
            <div class="pacai">
              <i class="fa fa-edit" onclick="return camp_edit(1774);"></i>
            </div>
            <div class="pacad">Date Start: 09/06/2021</div>
            <div class="clear"></div>
          </div>

          <div class="pacarow" style="border-bottom: 1px solid #f3f4f7">
            <div class="pacat cotop">otoño 2021</div>
            <div class="pacac"><i class="fab twco fa-twitter"></i></div>
            <div class="pacai">
              <i class="fa fa-trash" onclick="pc_del_camp(this,1760)"></i>
            </div>
            <div class="pacai">
              <i class="fa fa-edit" onclick="return camp_edit(1760);"></i>
            </div>
            <div class="pacad">Date Start: 20/03/2021</div>
            <div class="clear"></div>
          </div>

          <div class="pacarow" style="border-bottom: 1px solid #f3f4f7">
            <div class="pacat cotop">sadf</div>
            <div class="pacac"></div>
            <div class="pacai">
              <i class="fa fa-trash" onclick="pc_del_camp(this,1772)"></i>
            </div>
            <div class="pacai">
              <i class="fa fa-edit" onclick="return camp_edit(1772);"></i>
            </div>
            <div class="pacad">Date Start: 01/05/2021</div>
            <div class="clear"></div>
          </div>

          <div class="pacarow" style="border-bottom: 1px solid #f3f4f7">
            <div class="pacat cotop">demo</div>
            <div class="pacac"></div>
            <div class="pacai">
              <i class="fa fa-trash" onclick="pc_del_camp(this,1771)"></i>
            </div>
            <div class="pacai">
              <i class="fa fa-edit" onclick="return camp_edit(1771);"></i>
            </div>
            <div class="pacad">Date Start: 08/05/2021</div>
            <div class="clear"></div>
          </div>

          <div class="pacarow" style="border-bottom: 1px solid #f3f4f7">
            <div class="pacat cotop">Semana Santa</div>
            <div class="pacac"></div>
            <div class="pacai">
              <i class="fa fa-trash" onclick="pc_del_camp(this,1756)"></i>
            </div>
            <div class="pacai">
              <i class="fa fa-edit" onclick="return camp_edit(1756);"></i>
            </div>
            <div class="pacad">Date Start: 15/03/2021</div>
            <div class="clear"></div>
          </div>

          <div class="pacarow" style="border-bottom: 1px solid #f3f4f7">
            <div class="pacat cotop">Promoción</div>
            <div class="pacac">
              <i class="fab fbco fa-facebook"></i
              ><i class="fab twco fa-twitter"></i>
            </div>
            <div class="pacai">
              <i class="fa fa-trash" onclick="pc_del_camp(this,1745)"></i>
            </div>
            <div class="pacai">
              <i class="fa fa-edit" onclick="return camp_edit(1745);"></i>
            </div>
            <div class="pacad">Date Start: 02/02/2021</div>
            <div class="clear"></div>
          </div>

          <div class="pacarow" style="border-bottom: 1px solid #f3f4f7">
            <div class="pacat cotop">vacaciones</div>
            <div class="pacac">
              <i class="fab fbco fa-facebook"></i
              ><i class="fab twco fa-twitter"></i>
            </div>
            <div class="pacai">
              <i class="fa fa-trash" onclick="pc_del_camp(this,1742)"></i>
            </div>
            <div class="pacai">
              <i class="fa fa-edit" onclick="return camp_edit(1742);"></i>
            </div>
            <div class="pacad">Date Start: 01/01/2021</div>
            <div class="clear"></div>
          </div>

          <div class="pacarow" style="border-bottom: 1px solid #f3f4f7">
            <div class="pacat cotop">Demo Carolina</div>
            <div class="pacac"></div>
            <div class="pacai">
              <i class="fa fa-trash" onclick="pc_del_camp(this,325)"></i>
            </div>
            <div class="pacai">
              <i class="fa fa-edit" onclick="return camp_edit(325);"></i>
            </div>
            <div class="pacad">Date Start: 01/08/2020</div>
            <div class="clear"></div>
          </div>

          <div class="pacarow" style="border-bottom: 1px solid #f3f4f7">
            <div class="pacat cotop">28 de julio</div>
            <div class="pacac"></div>
            <div class="pacai">
              <i class="fa fa-trash" onclick="pc_del_camp(this,323)"></i>
            </div>
            <div class="pacai">
              <i class="fa fa-edit" onclick="return camp_edit(323);"></i>
            </div>
            <div class="pacad">Date Start: 19/07/2020</div>
            <div class="clear"></div>
          </div>

          <div class="pacarow" style="border-bottom: 1px solid #f3f4f7">
            <div class="pacat cotop">Campaña Dia de la Madre</div>
            <div class="pacac">
              <i class="fab fbco fa-facebook"></i
              ><i class="fab twco fa-twitter"></i>
            </div>
            <div class="pacai">
              <i class="fa fa-trash" onclick="pc_del_camp(this,298)"></i>
            </div>
            <div class="pacai">
              <i class="fa fa-edit" onclick="return camp_edit(298);"></i>
            </div>
            <div class="pacad">Date Start: 30/04/2020</div>
            <div class="clear"></div>
          </div>

          <div class="pacarow" style="border-bottom: 1px solid #f3f4f7">
            <div class="pacat cotop">Coronavirus Conciencia</div>
            <div class="pacac"><i class="fab fbco fa-facebook"></i></div>
            <div class="pacai">
              <i class="fa fa-trash" onclick="pc_del_camp(this,302)"></i>
            </div>
            <div class="pacai">
              <i class="fa fa-edit" onclick="return camp_edit(302);"></i>
            </div>
            <div class="pacad">Date Start: 25/04/2020</div>
            <div class="clear"></div>
          </div>

          <div class="pacarow" style="border-bottom: 1px solid #f3f4f7">
            <div class="pacat cotop">Campaña Escolar 2020</div>
            <div class="pacac">
              <i class="fab twco fa-twitter"></i
              ><i class="fab fbco fa-facebook"></i
              ><i class="fab inco fa-instagram"></i>
            </div>
            <div class="pacai">
              <i class="fa fa-trash" onclick="pc_del_camp(this,268)"></i>
            </div>
            <div class="pacai">
              <i class="fa fa-edit" onclick="return camp_edit(268);"></i>
            </div>
            <div class="pacad">Date Start: 13/02/2020</div>
            <div class="clear"></div>
          </div>

          <div class="pacarow" style="border-bottom: 1px solid #f3f4f7">
            <div class="pacat cotop">Penetracion al Mercado</div>
            <div class="pacac">
              <i class="fab twco fa-twitter"></i
              ><i class="fab fbco fa-facebook"></i>
            </div>
            <div class="pacai">
              <i class="fa fa-trash" onclick="pc_del_camp(this,269)"></i>
            </div>
            <div class="pacai">
              <i class="fa fa-edit" onclick="return camp_edit(269);"></i>
            </div>
            <div class="pacad">Date Start: 13/02/2020</div>
            <div class="clear"></div>
          </div>

          <div class="pacarow" style="border-bottom: 1px solid #f3f4f7">
            <div class="pacat cotop">Campaña Escolar (MV)</div>
            <div class="pacac">
              <i class="fab fbco fa-facebook"></i
              ><i class="fab twco fa-twitter"></i>
            </div>
            <div class="pacai">
              <i class="fa fa-trash" onclick="pc_del_camp(this,274)"></i>
            </div>
            <div class="pacai">
              <i class="fa fa-edit" onclick="return camp_edit(274);"></i>
            </div>
            <div class="pacad">Date Start: 18/02/2020</div>
            <div class="clear"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Campaigns'
}
</script>

<style>
.campaigns {
  font-size: 12px !important;
}
.alft {
  text-align: left;
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
.pull-right {
  float: right !important;
  color: white;
  font-weight: 300;
}
.form-control {
  border: 1px solid #dde4ea;
  border-radius: 2px;
}
.form-control {
  display: block;
  width: 100%;
  height: 34px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);
  box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);
  -webkit-transition: border-color ease-in-out 0.15s,
    -webkit-box-shadow ease-in-out 0.15s;
  -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
}
.pacarow {
  padding: 1px;
  border-top: 0px;
}
.pacat {
  float: left;
  width: 180px;
  background: #f3f4f7;
  padding: 15px;
  height: 48px;
}
.cotop {
  color: #00a5ff !important;
}
.pacac {
  float: left;
  padding: 15px;
  padding-left: 38px;
}
.pacai {
  float: right;
  color: #b0b8cc;
  padding: 15px;
}
.pacad {
  float: right;
  color: #b0b8cc;
  padding: 15px;
  font-size: 10px;
}
.clear {
  clear: both;
}
.pacai i {
  font-size: 16px;
  text-align: center;
  cursor: pointer;
}
.inco {
  color: #ff69a1;
}
.twco {
  color: #1da1f2;
}
.ytco {
  color: #ff6564;
}
.fbco {
  color: #1877f2;
}
.pacac i {
  font-size: 16px;
  margin-right: 10px;
}
</style>
