<template>
  <div class="listening">
    <div id="divhtabli" style="">
      <div style="min-height: 370px; padding-left: 120px; padding-right: 120px">
        <div class="alft">
          <div style="display: block; text-align: right; min-height: 36px">
            <a
              href="#"
              onclick=""
              class="iscbutton pull-right"
              style="margin-bottom: 40px"
              >Create Board</a
            >
          </div>

          <div class="">
            <div style="color: #bdc4d5; font-size: 11px">
              <div
                style="
                  float: left;
                  width: 180px;
                  padding: 15px;
                  padding-bottom: 5px;
                "
              >
                Context
              </div>
              <div
                style="
                  float: left;
                  width: 200px;
                  margin-right: 55px;
                  padding: 15px;
                  padding-bottom: 5px;
                  text-align: center;
                "
              >
                Keyword
              </div>
              <div
                style="
                  float: left;
                  width: 200px;
                  padding: 15px;
                  padding-bottom: 5px;
                "
              >
                Region
              </div>
              <div class="clear"></div>
            </div>

            <div
              style="
                border: 1px solid #c2d1e6;
                padding: 3px;
                height: 210px;
                overflow: scroll;
                overflow-x: hidden;
              "
            >
              <div v-for="item in listenings" :key="item.id" class="pacarow" style="border-top: 1px solid #f3f4f7">
                <div class="pacat cotop">{{item.context}}</div>
                <div class="pacak">{{item.keyword}}</div>
                <div class="pacar">{{item.region}}</div>
                <div class="pacai">
                  <i
                    class="fa fa-trash"
                    onclick="pc_del_context(this,'H8TqCAxMx')"
                  ></i>
                </div>
                <div class="pacai">
                  <i
                    class="fa fa-edit"
                    onclick="pc_edit_context(this, 'H8TqCAxMx')"
                  ></i>
                </div>
                <div class="clear"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Listening',
  data () {
    return {
      listenings: [
        {
          id: 0,
          context: 'New Context',
          keyword: 5,
          region: 'Peru'
        },
        {
          id: 1,
          context: 'New TIlt',
          keyword: 5,
          region: 'Peru'
        },
        {
          id: 2,
          context: 'New Product',
          keyword: 5,
          region: 'Peru'
        },
        {
          id: 3,
          context: 'New Paris',
          keyword: 5,
          region: 'Peru'
        },
        {
          id: 4,
          context: 'New Peru',
          keyword: 5,
          region: 'Peru'
        },
        {
          id: 5,
          context: 'New Meta',
          keyword: 5,
          region: 'Peru'
        }
      ]
    }
  }
}
</script>

<style >
.listening {
  font-size: 12px !important;
  height: 445px;
  position: relative;
  padding: 60px 50px 20px;
}
.alft {
  text-align: left;
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
.pacak {
  text-align: center;
  width: 200px;
  padding: 15px;
  float: left;
  margin-right: 55px;
  color: #5d6b88;
}
.pacar {
  text-align: left;
  padding: 15px;
  float: left;
  color: #5d6b88;
}
.cotop {
  color: #00a5ff !important;
}
.pacai {
  float: right;
  color: #b0b8cc;
  padding: 15px;
}
.clear {
  clear: both;
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
  float: right;
}
a {
  text-decoration: none !important;
  color: inherit;
}
.pacai i {
  font-size: 16px;
  text-align: center;
  cursor: pointer;
}
</style>
