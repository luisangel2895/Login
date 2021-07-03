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
          <div v-for="item in campaigns" :key="item.id" class="pacarow" style="border-bottom: 1px solid #f3f4f7">
            <div class="pacat cotop">{{item.name}}</div>
            <div class="pacac" v-if="item.redsocials">
              <div v-for="itrss in item.redsocials" :key="itrss.idrss">
                <i  v-if="itrss.rsss=='twitter'" class="fab twco fa-twitter"></i>
              </div>
              <div v-for="itrss in item.redsocials" :key="itrss.idrss">
                <i v-if="itrss.rsss=='facebook'" class="fab fbco fa-facebook"></i>
              </div>
              <div v-for="itrss in item.redsocials" :key="itrss.idrss">
                <i v-if="itrss.rsss=='instagram'" class="fab inco fa-instagram"></i>
              </div>
              <div v-for="itrss in item.redsocials" :key="itrss.idrss">
                <i v-if="itrss.rsss=='youtube'" class="fab ytco fa-youtube"></i>
              </div>
            </div>
            <div class="pacai">
              <i class="fa fa-trash" onclick="pc_del_camp(this,1775)"></i>
            </div>
            <div class="pacai">
              <i class="fa fa-edit" onclick="return camp_edit(1775);"></i>
            </div>
            <div class="pacad">{{'Date Start:'+ item.datestart}}</div>
            <div class="clear"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Campaigns',
  data () {
    return {
      campaigns: [
        {
          id: 0,
          name: 'DEMO',
          redsocials: [
            {
              idrss: 10,
              rsss: 'facebook'
            },
            {
              idrss: 11,
              rsss: 'facebook'
            }
          ],
          datestart: '01/06/2021'
        },
        {
          id: 1,
          name: 'das',
          redsocials: [
            {
              idrss: 10,
              rsss: 'youtube'
            },
            {
              idrss: 11,
              rsss: 'youtube'
            },
            {
              idrss: 11,
              rsss: 'facebook'
            },
            {
              idrss: 11,
              rsss: 'instagram'
            },
            {
              idrss: 11,
              rsss: 'twitter'
            }
          ],
          datestart: '01/06/2021'
        },
        {
          id: 2,
          name: 'lomo',
          redsocials: [
            {
              idrss: 10,
              rsss: 'twitter'
            },
            {
              idrss: 11,
              rsss: 'instagram'
            }
          ],
          datestart: '01/06/2021'
        },
        {
          id: 3,
          name: 'KAKASHI',
          redsocials: [
            {
              idrss: 10,
              rsss: 'facebook'
            },
            {
              idrss: 11,
              rsss: 'facebook'
            }
          ],
          datestart: '01/06/2021'
        },
        {
          id: 4,
          name: 'PERU',
          redsocials: [
            {
              idrss: 10,
              rsss: 'facebook'
            },
            {
              idrss: 11,
              rsss: 'facebook'
            }
          ],
          datestart: '01/06/2021'
        },
        {
          id: 5,
          name: 'PADULA',
          redsocials: [
            {
              idrss: 10,
              rsss: 'facebook'
            },
            {
              idrss: 11,
              rsss: 'facebook'
            }
          ],
          datestart: '01/06/2021'
        },
        {
          id: 6,
          name: 'JHOSE SE',
          redsocials: [
            {
              idrss: 10,
              rsss: 'facebook'
            },
            {
              idrss: 11,
              rsss: 'facebook'
            }
          ],
          datestart: '01/06/2021'
        }
      ]
    }
  }
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
.pacac div{
  float: left;
}
</style>
