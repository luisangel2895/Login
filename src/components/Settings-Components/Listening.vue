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
              <div class="pacarow" style="border-top: 1px solid #f3f4f7">
                <div class="pacat cotop">NewContext</div>
                <div class="pacak">0</div>
                <div class="pacar">Peru</div>
                <!--div class="pacai"><i class="fa fa-circle"></i></div -->
                <!--
      <div class="pacai">
        <label class="switch" style="margin:0px">
          <input type="checkbox">
          <span class="slider round"></span>
        </label>
      </div>
      -->
                <!-- <div class="pacai"><a href="https://listening.isocialcube.com/context/V8gxNaBvO"><i class="fa fa-edit"></i></a></div> -->
                <div class="pacai">
                  <i
                    class="fa fa-trash"
                    onclick="pc_del_context(this,'V8gxNaBvO')"
                  ></i>
                </div>
                <div class="pacai">
                  <i
                    class="fa fa-edit"
                    onclick="pc_edit_context(this, 'V8gxNaBvO')"
                  ></i>
                </div>
                <div class="clear"></div>
              </div>
              <div class="pacarow" style="border-top: 1px solid #f3f4f7">
                <div class="pacat cotop">NewContext</div>
                <div class="pacak">0</div>
                <div class="pacar">Peru</div>
                <!--div class="pacai"><i class="fa fa-circle"></i></div -->
                <!--
      <div class="pacai">
        <label class="switch" style="margin:0px">
          <input type="checkbox">
          <span class="slider round"></span>
        </label>
      </div>
      -->
                <!-- <div class="pacai"><a href="https://listening.isocialcube.com/context/H8TqCAxMx"><i class="fa fa-edit"></i></a></div> -->
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
              <div class="pacarow" style="border-top: 1px solid #f3f4f7">
                <div class="pacat cotop">NewContext</div>
                <div class="pacak">0</div>
                <div class="pacar">Peru</div>
                <!--div class="pacai"><i class="fa fa-circle"></i></div -->
                <!--
      <div class="pacai">
        <label class="switch" style="margin:0px">
          <input type="checkbox">
          <span class="slider round"></span>
        </label>
      </div>
      -->
                <!-- <div class="pacai"><a href="https://listening.isocialcube.com/context/mMx3iqkED"><i class="fa fa-edit"></i></a></div> -->
                <div class="pacai">
                  <i
                    class="fa fa-trash"
                    onclick="pc_del_context(this,'mMx3iqkED')"
                  ></i>
                </div>
                <div class="pacai">
                  <i
                    class="fa fa-edit"
                    onclick="pc_edit_context(this, 'mMx3iqkED')"
                  ></i>
                </div>
                <div class="clear"></div>
              </div>
              <div class="pacarow" style="border-top: 1px solid #f3f4f7">
                <div class="pacat cotop">elecciones 2021</div>
                <div class="pacak">2</div>
                <div class="pacar">Peru</div>
                <!--div class="pacai"><i class="fa fa-circle"></i></div -->
                <!--
      <div class="pacai">
        <label class="switch" style="margin:0px">
          <input type="checkbox">
          <span class="slider round"></span>
        </label>
      </div>
      -->
                <!-- <div class="pacai"><a href="https://listening.isocialcube.com/context/qewqdyTNa"><i class="fa fa-edit"></i></a></div> -->
                <div class="pacai">
                  <i
                    class="fa fa-trash"
                    onclick="pc_del_context(this,'qewqdyTNa')"
                  ></i>
                </div>
                <div class="pacai">
                  <i
                    class="fa fa-edit"
                    onclick="pc_edit_context(this, 'qewqdyTNa')"
                  ></i>
                </div>
                <div class="clear"></div>
              </div>
              <div class="pacarow" style="border-top: 1px solid #f3f4f7">
                <div class="pacat cotop">Prueba de muestras 1</div>
                <div class="pacak">4</div>
                <div class="pacar">Peru</div>
                <!--div class="pacai"><i class="fa fa-circle"></i></div -->
                <!--
      <div class="pacai">
        <label class="switch" style="margin:0px">
          <input type="checkbox">
          <span class="slider round"></span>
        </label>
      </div>
      -->
                <!-- <div class="pacai"><a href="https://listening.isocialcube.com/context/omFsH9ZvX"><i class="fa fa-edit"></i></a></div> -->
                <div class="pacai">
                  <i
                    class="fa fa-trash"
                    onclick="pc_del_context(this,'omFsH9ZvX')"
                  ></i>
                </div>
                <div class="pacai">
                  <i
                    class="fa fa-edit"
                    onclick="pc_edit_context(this, 'omFsH9ZvX')"
                  ></i>
                </div>
                <div class="clear"></div>
              </div>
              <div class="pacarow" style="border-top: 1px solid #f3f4f7">
                <div class="pacat cotop">CARABINEROS</div>
                <div class="pacak">2</div>
                <div class="pacar">Peru</div>
                <!--div class="pacai"><i class="fa fa-circle"></i></div -->
                <!--
      <div class="pacai">
        <label class="switch" style="margin:0px">
          <input type="checkbox">
          <span class="slider round"></span>
        </label>
      </div>
      -->
                <!-- <div class="pacai"><a href="https://listening.isocialcube.com/context/_rTcVS7fd"><i class="fa fa-edit"></i></a></div> -->
                <div class="pacai">
                  <i
                    class="fa fa-trash"
                    onclick="pc_del_context(this,'_rTcVS7fd')"
                  ></i>
                </div>
                <div class="pacai">
                  <i
                    class="fa fa-edit"
                    onclick="pc_edit_context(this, '_rTcVS7fd')"
                  ></i>
                </div>
                <div class="clear"></div>
              </div>
              <div class="pacarow" style="border-top: 1px solid #f3f4f7">
                <div class="pacat cotop">NewContext</div>
                <div class="pacak">0</div>
                <div class="pacar">Peru</div>
                <!--div class="pacai"><i class="fa fa-circle"></i></div -->
                <!--
      <div class="pacai">
        <label class="switch" style="margin:0px">
          <input type="checkbox">
          <span class="slider round"></span>
        </label>
      </div>
      -->
                <!-- <div class="pacai"><a href="https://listening.isocialcube.com/context/ayLZsfKtM"><i class="fa fa-edit"></i></a></div> -->
                <div class="pacai">
                  <i
                    class="fa fa-trash"
                    onclick="pc_del_context(this,'ayLZsfKtM')"
                  ></i>
                </div>
                <div class="pacai">
                  <i
                    class="fa fa-edit"
                    onclick="pc_edit_context(this, 'ayLZsfKtM')"
                  ></i>
                </div>
                <div class="clear"></div>
              </div>
              <div class="pacarow" style="border-top: 1px solid #f3f4f7">
                <div class="pacat cotop">alianza lima</div>
                <div class="pacak">13</div>
                <div class="pacar">Peru</div>
                <!--div class="pacai"><i class="fa fa-circle"></i></div -->
                <!--
      <div class="pacai">
        <label class="switch" style="margin:0px">
          <input type="checkbox">
          <span class="slider round"></span>
        </label>
      </div>
      -->
                <!-- <div class="pacai"><a href="https://listening.isocialcube.com/context/ii4aYFd34"><i class="fa fa-edit"></i></a></div> -->
                <div class="pacai">
                  <i
                    class="fa fa-trash"
                    onclick="pc_del_context(this,'ii4aYFd34')"
                  ></i>
                </div>
                <div class="pacai">
                  <i
                    class="fa fa-edit"
                    onclick="pc_edit_context(this, 'ii4aYFd34')"
                  ></i>
                </div>
                <div class="clear"></div>
              </div>
              <div class="pacarow" style="border-top: 1px solid #f3f4f7">
                <div class="pacat cotop">Cripto Moneda</div>
                <div class="pacak">8</div>
                <div class="pacar">Peru</div>
                <!--div class="pacai"><i class="fa fa-circle"></i></div -->
                <!--
      <div class="pacai">
        <label class="switch" style="margin:0px">
          <input type="checkbox">
          <span class="slider round"></span>
        </label>
      </div>
      -->
                <!-- <div class="pacai"><a href="https://listening.isocialcube.com/context/hMs5b7D0J"><i class="fa fa-edit"></i></a></div> -->
                <div class="pacai">
                  <i
                    class="fa fa-trash"
                    onclick="pc_del_context(this,'hMs5b7D0J')"
                  ></i>
                </div>
                <div class="pacai">
                  <i
                    class="fa fa-edit"
                    onclick="pc_edit_context(this, 'hMs5b7D0J')"
                  ></i>
                </div>
                <div class="clear"></div>
              </div>
              <div class="pacarow" style="border-top: 1px solid #f3f4f7">
                <div class="pacat cotop">Municipalidad de Lima</div>
                <div class="pacak">5</div>
                <div class="pacar">Peru</div>
                <!--div class="pacai"><i class="fa fa-circle"></i></div -->
                <!--
      <div class="pacai">
        <label class="switch" style="margin:0px">
          <input type="checkbox">
          <span class="slider round"></span>
        </label>
      </div>
      -->
                <!-- <div class="pacai"><a href="https://listening.isocialcube.com/context/q_5TxeBqk"><i class="fa fa-edit"></i></a></div> -->
                <div class="pacai">
                  <i
                    class="fa fa-trash"
                    onclick="pc_del_context(this,'q_5TxeBqk')"
                  ></i>
                </div>
                <div class="pacai">
                  <i
                    class="fa fa-edit"
                    onclick="pc_edit_context(this, 'q_5TxeBqk')"
                  ></i>
                </div>
                <div class="clear"></div>
              </div>
              <div class="pacarow" style="border-top: 1px solid #f3f4f7">
                <div class="pacat cotop">NewContext</div>
                <div class="pacak">0</div>
                <div class="pacar">Peru</div>
                <!--div class="pacai"><i class="fa fa-circle"></i></div -->
                <!--
      <div class="pacai">
        <label class="switch" style="margin:0px">
          <input type="checkbox">
          <span class="slider round"></span>
        </label>
      </div>
      -->
                <!-- <div class="pacai"><a href="https://listening.isocialcube.com/context/t3B5VKMy0"><i class="fa fa-edit"></i></a></div> -->
                <div class="pacai">
                  <i
                    class="fa fa-trash"
                    onclick="pc_del_context(this,'t3B5VKMy0')"
                  ></i>
                </div>
                <div class="pacai">
                  <i
                    class="fa fa-edit"
                    onclick="pc_edit_context(this, 't3B5VKMy0')"
                  ></i>
                </div>
                <div class="clear"></div>
              </div>
              <div class="pacarow" style="border-top: 1px solid #f3f4f7">
                <div class="pacat cotop">NewContext</div>
                <div class="pacak">0</div>
                <div class="pacar">Peru</div>
                <!--div class="pacai"><i class="fa fa-circle"></i></div -->
                <!--
      <div class="pacai">
        <label class="switch" style="margin:0px">
          <input type="checkbox">
          <span class="slider round"></span>
        </label>
      </div>
      -->
                <!-- <div class="pacai"><a href="https://listening.isocialcube.com/context/QKekGrX_d"><i class="fa fa-edit"></i></a></div> -->
                <div class="pacai">
                  <i
                    class="fa fa-trash"
                    onclick="pc_del_context(this,'QKekGrX_d')"
                  ></i>
                </div>
                <div class="pacai">
                  <i
                    class="fa fa-edit"
                    onclick="pc_edit_context(this, 'QKekGrX_d')"
                  ></i>
                </div>
                <div class="clear"></div>
              </div>
              <div class="pacarow" style="border-top: 1px solid #f3f4f7">
                <div class="pacat cotop">Promart</div>
                <div class="pacak">10</div>
                <div class="pacar">Peru</div>
                <!--div class="pacai"><i class="fa fa-circle"></i></div -->
                <!--
      <div class="pacai">
        <label class="switch" style="margin:0px">
          <input type="checkbox">
          <span class="slider round"></span>
        </label>
      </div>
      -->
                <!-- <div class="pacai"><a href="https://listening.isocialcube.com/context/2Jr4efC9I"><i class="fa fa-edit"></i></a></div> -->
                <div class="pacai">
                  <i
                    class="fa fa-trash"
                    onclick="pc_del_context(this,'2Jr4efC9I')"
                  ></i>
                </div>
                <div class="pacai">
                  <i
                    class="fa fa-edit"
                    onclick="pc_edit_context(this, '2Jr4efC9I')"
                  ></i>
                </div>
                <div class="clear"></div>
              </div>
              <div class="pacarow" style="border-top: 1px solid #f3f4f7">
                <div class="pacat cotop">NewContext</div>
                <div class="pacak">0</div>
                <div class="pacar">Peru</div>
                <!--div class="pacai"><i class="fa fa-circle"></i></div -->
                <!--
      <div class="pacai">
        <label class="switch" style="margin:0px">
          <input type="checkbox">
          <span class="slider round"></span>
        </label>
      </div>
      -->
                <!-- <div class="pacai"><a href="https://listening.isocialcube.com/context/2Elul5sx-"><i class="fa fa-edit"></i></a></div> -->
                <div class="pacai">
                  <i
                    class="fa fa-trash"
                    onclick="pc_del_context(this,'2Elul5sx-')"
                  ></i>
                </div>
                <div class="pacai">
                  <i
                    class="fa fa-edit"
                    onclick="pc_edit_context(this, '2Elul5sx-')"
                  ></i>
                </div>
                <div class="clear"></div>
              </div>
              <div class="pacarow" style="border-top: 1px solid #f3f4f7">
                <div class="pacat cotop">NewContext</div>
                <div class="pacak">0</div>
                <div class="pacar">Peru</div>
                <!--div class="pacai"><i class="fa fa-circle"></i></div -->
                <!--
      <div class="pacai">
        <label class="switch" style="margin:0px">
          <input type="checkbox">
          <span class="slider round"></span>
        </label>
      </div>
      -->
                <!-- <div class="pacai"><a href="https://listening.isocialcube.com/context/XYUoWCdcU"><i class="fa fa-edit"></i></a></div> -->
                <div class="pacai">
                  <i
                    class="fa fa-trash"
                    onclick="pc_del_context(this,'XYUoWCdcU')"
                  ></i>
                </div>
                <div class="pacai">
                  <i
                    class="fa fa-edit"
                    onclick="pc_edit_context(this, 'XYUoWCdcU')"
                  ></i>
                </div>
                <div class="clear"></div>
              </div>
              <div class="pacarow" style="border-top: 1px solid #f3f4f7">
                <div class="pacat cotop">NewContext</div>
                <div class="pacak">0</div>
                <div class="pacar">Peru</div>
                <!--div class="pacai"><i class="fa fa-circle"></i></div -->
                <!--
      <div class="pacai">
        <label class="switch" style="margin:0px">
          <input type="checkbox">
          <span class="slider round"></span>
        </label>
      </div>
      -->
                <!-- <div class="pacai"><a href="https://listening.isocialcube.com/context/7XvuJysGM"><i class="fa fa-edit"></i></a></div> -->
                <div class="pacai">
                  <i
                    class="fa fa-trash"
                    onclick="pc_del_context(this,'7XvuJysGM')"
                  ></i>
                </div>
                <div class="pacai">
                  <i
                    class="fa fa-edit"
                    onclick="pc_edit_context(this, '7XvuJysGM')"
                  ></i>
                </div>
                <div class="clear"></div>
              </div>
              <div class="pacarow" style="border-top: 1px solid #f3f4f7">
                <div class="pacat cotop">Iridium Style</div>
                <div class="pacak">2</div>
                <div class="pacar">Peru</div>
                <!--div class="pacai"><i class="fa fa-circle"></i></div -->
                <!--
      <div class="pacai">
        <label class="switch" style="margin:0px">
          <input type="checkbox">
          <span class="slider round"></span>
        </label>
      </div>
      -->
                <!-- <div class="pacai"><a href="https://listening.isocialcube.com/context/IPM6Xxly7"><i class="fa fa-edit"></i></a></div> -->
                <div class="pacai">
                  <i
                    class="fa fa-trash"
                    onclick="pc_del_context(this,'IPM6Xxly7')"
                  ></i>
                </div>
                <div class="pacai">
                  <i
                    class="fa fa-edit"
                    onclick="pc_edit_context(this, 'IPM6Xxly7')"
                  ></i>
                </div>
                <div class="clear"></div>
              </div>
              <div class="pacarow" style="border-top: 1px solid #f3f4f7">
                <div class="pacat cotop">La popular</div>
                <div class="pacak">13</div>
                <div class="pacar">Peru</div>
                <!--div class="pacai"><i class="fa fa-circle"></i></div -->
                <!--
      <div class="pacai">
        <label class="switch" style="margin:0px">
          <input type="checkbox">
          <span class="slider round"></span>
        </label>
      </div>
      -->
                <!-- <div class="pacai"><a href="https://listening.isocialcube.com/context/lp2WeGvpi"><i class="fa fa-edit"></i></a></div> -->
                <div class="pacai">
                  <i
                    class="fa fa-trash"
                    onclick="pc_del_context(this,'lp2WeGvpi')"
                  ></i>
                </div>
                <div class="pacai">
                  <i
                    class="fa fa-edit"
                    onclick="pc_edit_context(this, 'lp2WeGvpi')"
                  ></i>
                </div>
                <div class="clear"></div>
              </div>
              <div class="pacarow" style="border-top: 1px solid #f3f4f7">
                <div class="pacat cotop">NewContext</div>
                <div class="pacak">0</div>
                <div class="pacar">Peru</div>
                <!--div class="pacai"><i class="fa fa-circle"></i></div -->
                <!--
      <div class="pacai">
        <label class="switch" style="margin:0px">
          <input type="checkbox">
          <span class="slider round"></span>
        </label>
      </div>
      -->
                <!-- <div class="pacai"><a href="https://listening.isocialcube.com/context/W2tB-5361"><i class="fa fa-edit"></i></a></div> -->
                <div class="pacai">
                  <i
                    class="fa fa-trash"
                    onclick="pc_del_context(this,'W2tB-5361')"
                  ></i>
                </div>
                <div class="pacai">
                  <i
                    class="fa fa-edit"
                    onclick="pc_edit_context(this, 'W2tB-5361')"
                  ></i>
                </div>
                <div class="clear"></div>
              </div>
              <div class="pacarow" style="border-top: 1px solid #f3f4f7">
                <div class="pacat cotop">NewContext</div>
                <div class="pacak">0</div>
                <div class="pacar">Peru</div>
                <!--div class="pacai"><i class="fa fa-circle"></i></div -->
                <!--
      <div class="pacai">
        <label class="switch" style="margin:0px">
          <input type="checkbox">
          <span class="slider round"></span>
        </label>
      </div>
      -->
                <!-- <div class="pacai"><a href="https://listening.isocialcube.com/context/KDKy__UTW"><i class="fa fa-edit"></i></a></div> -->
                <div class="pacai">
                  <i
                    class="fa fa-trash"
                    onclick="pc_del_context(this,'KDKy__UTW')"
                  ></i>
                </div>
                <div class="pacai">
                  <i
                    class="fa fa-edit"
                    onclick="pc_edit_context(this, 'KDKy__UTW')"
                  ></i>
                </div>
                <div class="clear"></div>
              </div>
              <div class="pacarow" style="border-top: 1px solid #f3f4f7">
                <div class="pacat cotop">blockchain</div>
                <div class="pacak">0</div>
                <div class="pacar">Peru</div>
                <!--div class="pacai"><i class="fa fa-circle"></i></div -->
                <!--
      <div class="pacai">
        <label class="switch" style="margin:0px">
          <input type="checkbox">
          <span class="slider round"></span>
        </label>
      </div>
      -->
                <!-- <div class="pacai"><a href="https://listening.isocialcube.com/context/JnMjlDg7d"><i class="fa fa-edit"></i></a></div> -->
                <div class="pacai">
                  <i
                    class="fa fa-trash"
                    onclick="pc_del_context(this,'JnMjlDg7d')"
                  ></i>
                </div>
                <div class="pacai">
                  <i
                    class="fa fa-edit"
                    onclick="pc_edit_context(this, 'JnMjlDg7d')"
                  ></i>
                </div>
                <div class="clear"></div>
              </div>
              <div class="pacarow" style="border-top: 1px solid #f3f4f7">
                <div class="pacat cotop">NewContext</div>
                <div class="pacak">0</div>
                <div class="pacar">Peru</div>
                <!--div class="pacai"><i class="fa fa-circle"></i></div -->
                <!--
      <div class="pacai">
        <label class="switch" style="margin:0px">
          <input type="checkbox">
          <span class="slider round"></span>
        </label>
      </div>
      -->
                <!-- <div class="pacai"><a href="https://listening.isocialcube.com/context/X1a0KZuFA"><i class="fa fa-edit"></i></a></div> -->
                <div class="pacai">
                  <i
                    class="fa fa-trash"
                    onclick="pc_del_context(this,'X1a0KZuFA')"
                  ></i>
                </div>
                <div class="pacai">
                  <i
                    class="fa fa-edit"
                    onclick="pc_edit_context(this, 'X1a0KZuFA')"
                  ></i>
                </div>
                <div class="clear"></div>
              </div>
              <div class="pacarow" style="border-top: 1px solid #f3f4f7">
                <div class="pacat cotop">NewContext</div>
                <div class="pacak">0</div>
                <div class="pacar">Peru</div>
                <!--div class="pacai"><i class="fa fa-circle"></i></div -->
                <!--
      <div class="pacai">
        <label class="switch" style="margin:0px">
          <input type="checkbox">
          <span class="slider round"></span>
        </label>
      </div>
      -->
                <!-- <div class="pacai"><a href="https://listening.isocialcube.com/context/j8LuzWksl"><i class="fa fa-edit"></i></a></div> -->
                <div class="pacai">
                  <i
                    class="fa fa-trash"
                    onclick="pc_del_context(this,'j8LuzWksl')"
                  ></i>
                </div>
                <div class="pacai">
                  <i
                    class="fa fa-edit"
                    onclick="pc_edit_context(this, 'j8LuzWksl')"
                  ></i>
                </div>
                <div class="clear"></div>
              </div>
              <div class="pacarow" style="border-top: 1px solid #f3f4f7">
                <div class="pacat cotop">NewContext</div>
                <div class="pacak">0</div>
                <div class="pacar">Peru</div>
                <!--div class="pacai"><i class="fa fa-circle"></i></div -->
                <!--
      <div class="pacai">
        <label class="switch" style="margin:0px">
          <input type="checkbox">
          <span class="slider round"></span>
        </label>
      </div>
      -->
                <!-- <div class="pacai"><a href="https://listening.isocialcube.com/context/2rRF0sYQy"><i class="fa fa-edit"></i></a></div> -->
                <div class="pacai">
                  <i
                    class="fa fa-trash"
                    onclick="pc_del_context(this,'2rRF0sYQy')"
                  ></i>
                </div>
                <div class="pacai">
                  <i
                    class="fa fa-edit"
                    onclick="pc_edit_context(this, '2rRF0sYQy')"
                  ></i>
                </div>
                <div class="clear"></div>
              </div>
              <div class="pacarow" style="border-top: 1px solid #f3f4f7">
                <div class="pacat cotop">NewContext</div>
                <div class="pacak">0</div>
                <div class="pacar">Peru</div>
                <!--div class="pacai"><i class="fa fa-circle"></i></div -->
                <!--
      <div class="pacai">
        <label class="switch" style="margin:0px">
          <input type="checkbox">
          <span class="slider round"></span>
        </label>
      </div>
      -->
                <!-- <div class="pacai"><a href="https://listening.isocialcube.com/context/D1Hxk-_Ab"><i class="fa fa-edit"></i></a></div> -->
                <div class="pacai">
                  <i
                    class="fa fa-trash"
                    onclick="pc_del_context(this,'D1Hxk-_Ab')"
                  ></i>
                </div>
                <div class="pacai">
                  <i
                    class="fa fa-edit"
                    onclick="pc_edit_context(this, 'D1Hxk-_Ab')"
                  ></i>
                </div>
                <div class="clear"></div>
              </div>
              <div class="pacarow" style="border-top: 1px solid #f3f4f7">
                <div class="pacat cotop">NewContext</div>
                <div class="pacak">0</div>
                <div class="pacar">Peru</div>
                <!--div class="pacai"><i class="fa fa-circle"></i></div -->
                <!--
      <div class="pacai">
        <label class="switch" style="margin:0px">
          <input type="checkbox">
          <span class="slider round"></span>
        </label>
      </div>
      -->
                <!-- <div class="pacai"><a href="https://listening.isocialcube.com/context/NPTi_4L84"><i class="fa fa-edit"></i></a></div> -->
                <div class="pacai">
                  <i
                    class="fa fa-trash"
                    onclick="pc_del_context(this,'NPTi_4L84')"
                  ></i>
                </div>
                <div class="pacai">
                  <i
                    class="fa fa-edit"
                    onclick="pc_edit_context(this, 'NPTi_4L84')"
                  ></i>
                </div>
                <div class="clear"></div>
              </div>
              <div class="pacarow" style="border-top: 1px solid #f3f4f7">
                <div class="pacat cotop">Peru Temas Politicos</div>
                <div class="pacak">18</div>
                <div class="pacar">Peru</div>
                <!--div class="pacai"><i class="fa fa-circle"></i></div -->
                <!--
      <div class="pacai">
        <label class="switch" style="margin:0px">
          <input type="checkbox">
          <span class="slider round"></span>
        </label>
      </div>
      -->
                <!-- <div class="pacai"><a href="https://listening.isocialcube.com/context/rkIFHjIUF"><i class="fa fa-edit"></i></a></div> -->
                <div class="pacai">
                  <i
                    class="fa fa-trash"
                    onclick="pc_del_context(this,'rkIFHjIUF')"
                  ></i>
                </div>
                <div class="pacai">
                  <i
                    class="fa fa-edit"
                    onclick="pc_edit_context(this, 'rkIFHjIUF')"
                  ></i>
                </div>
                <div class="clear"></div>
              </div>
              <div class="pacarow" style="border-top: 1px solid #f3f4f7">
                <div class="pacat cotop">NewContext</div>
                <div class="pacak">0</div>
                <div class="pacar">Peru</div>
                <!--div class="pacai"><i class="fa fa-circle"></i></div -->
                <!--
      <div class="pacai">
        <label class="switch" style="margin:0px">
          <input type="checkbox">
          <span class="slider round"></span>
        </label>
      </div>
      -->
                <!-- <div class="pacai"><a href="https://listening.isocialcube.com/context/RDlL3P-6o"><i class="fa fa-edit"></i></a></div> -->
                <div class="pacai">
                  <i
                    class="fa fa-trash"
                    onclick="pc_del_context(this,'RDlL3P-6o')"
                  ></i>
                </div>
                <div class="pacai">
                  <i
                    class="fa fa-edit"
                    onclick="pc_edit_context(this, 'RDlL3P-6o')"
                  ></i>
                </div>
                <div class="clear"></div>
              </div>
              <div class="pacarow" style="border-top: 1px solid #f3f4f7">
                <div class="pacat cotop">GalletasSaludables</div>
                <div class="pacak">5</div>
                <div class="pacar">Peru</div>
                <!--div class="pacai"><i class="fa fa-circle"></i></div -->
                <!--
      <div class="pacai">
        <label class="switch" style="margin:0px">
          <input type="checkbox">
          <span class="slider round"></span>
        </label>
      </div>
      -->
                <!-- <div class="pacai"><a href="https://listening.isocialcube.com/context/FbAHN8A-L"><i class="fa fa-edit"></i></a></div> -->
                <div class="pacai">
                  <i
                    class="fa fa-trash"
                    onclick="pc_del_context(this,'FbAHN8A-L')"
                  ></i>
                </div>
                <div class="pacai">
                  <i
                    class="fa fa-edit"
                    onclick="pc_edit_context(this, 'FbAHN8A-L')"
                  ></i>
                </div>
                <div class="clear"></div>
              </div>
              <div class="pacarow" style="border-top: 1px solid #f3f4f7">
                <div class="pacat cotop">AguaFresca</div>
                <div class="pacak">15</div>
                <div class="pacar">Peru</div>
                <!--div class="pacai"><i class="fa fa-circle"></i></div -->
                <!--
      <div class="pacai">
        <label class="switch" style="margin:0px">
          <input type="checkbox">
          <span class="slider round"></span>
        </label>
      </div>
      -->
                <!-- <div class="pacai"><a href="https://listening.isocialcube.com/context/8797TRSUq"><i class="fa fa-edit"></i></a></div> -->
                <div class="pacai">
                  <i
                    class="fa fa-trash"
                    onclick="pc_del_context(this,'8797TRSUq')"
                  ></i>
                </div>
                <div class="pacai">
                  <i
                    class="fa fa-edit"
                    onclick="pc_edit_context(this, '8797TRSUq')"
                  ></i>
                </div>
                <div class="clear"></div>
              </div>
              <div class="pacarow" style="border-top: 1px solid #f3f4f7">
                <div class="pacat cotop">Copa America Futbol</div>
                <div class="pacak">4</div>
                <div class="pacar">Peru</div>
                <!--div class="pacai"><i class="fa fa-circle"></i></div -->
                <!--
      <div class="pacai">
        <label class="switch" style="margin:0px">
          <input type="checkbox">
          <span class="slider round"></span>
        </label>
      </div>
      -->
                <!-- <div class="pacai"><a href="https://listening.isocialcube.com/context/l_csN-TeI"><i class="fa fa-edit"></i></a></div> -->
                <div class="pacai">
                  <i
                    class="fa fa-trash"
                    onclick="pc_del_context(this,'l_csN-TeI')"
                  ></i>
                </div>
                <div class="pacai">
                  <i
                    class="fa fa-edit"
                    onclick="pc_edit_context(this, 'l_csN-TeI')"
                  ></i>
                </div>
                <div class="clear"></div>
              </div>
              <div class="pacarow" style="border-top: 1px solid #f3f4f7">
                <div class="pacat cotop">NewContext</div>
                <div class="pacak">0</div>
                <div class="pacar">Peru</div>
                <!--div class="pacai"><i class="fa fa-circle"></i></div -->
                <!--
      <div class="pacai">
        <label class="switch" style="margin:0px">
          <input type="checkbox">
          <span class="slider round"></span>
        </label>
      </div>
      -->
                <!-- <div class="pacai"><a href="https://listening.isocialcube.com/context/5OKackAgi"><i class="fa fa-edit"></i></a></div> -->
                <div class="pacai">
                  <i
                    class="fa fa-trash"
                    onclick="pc_del_context(this,'5OKackAgi')"
                  ></i>
                </div>
                <div class="pacai">
                  <i
                    class="fa fa-edit"
                    onclick="pc_edit_context(this, '5OKackAgi')"
                  ></i>
                </div>
                <div class="clear"></div>
              </div>
              <div class="pacarow" style="border-top: 1px solid #f3f4f7">
                <div class="pacat cotop">NewContext</div>
                <div class="pacak">0</div>
                <div class="pacar">Peru</div>
                <!--div class="pacai"><i class="fa fa-circle"></i></div -->
                <!--
      <div class="pacai">
        <label class="switch" style="margin:0px">
          <input type="checkbox">
          <span class="slider round"></span>
        </label>
      </div>
      -->
                <!-- <div class="pacai"><a href="https://listening.isocialcube.com/context/KfwZ--7gM"><i class="fa fa-edit"></i></a></div> -->
                <div class="pacai">
                  <i
                    class="fa fa-trash"
                    onclick="pc_del_context(this,'KfwZ--7gM')"
                  ></i>
                </div>
                <div class="pacai">
                  <i
                    class="fa fa-edit"
                    onclick="pc_edit_context(this, 'KfwZ--7gM')"
                  ></i>
                </div>
                <div class="clear"></div>
              </div>
              <div class="pacarow" style="border-top: 1px solid #f3f4f7">
                <div class="pacat cotop">NewContext</div>
                <div class="pacak">0</div>
                <div class="pacar">Peru</div>
                <!--div class="pacai"><i class="fa fa-circle"></i></div -->
                <!--
      <div class="pacai">
        <label class="switch" style="margin:0px">
          <input type="checkbox">
          <span class="slider round"></span>
        </label>
      </div>
      -->
                <!-- <div class="pacai"><a href="https://listening.isocialcube.com/context/YIwr3yc1i"><i class="fa fa-edit"></i></a></div> -->
                <div class="pacai">
                  <i
                    class="fa fa-trash"
                    onclick="pc_del_context(this,'YIwr3yc1i')"
                  ></i>
                </div>
                <div class="pacai">
                  <i
                    class="fa fa-edit"
                    onclick="pc_edit_context(this, 'YIwr3yc1i')"
                  ></i>
                </div>
                <div class="clear"></div>
              </div>
              <div class="pacarow" style="border-top: 1px solid #f3f4f7">
                <div class="pacat cotop">Seleccion Peruana Futbol</div>
                <div class="pacak">5</div>
                <div class="pacar">Peru</div>
                <!--div class="pacai"><i class="fa fa-circle"></i></div -->
                <!--
      <div class="pacai">
        <label class="switch" style="margin:0px">
          <input type="checkbox">
          <span class="slider round"></span>
        </label>
      </div>
      -->
                <!-- <div class="pacai"><a href="https://listening.isocialcube.com/context/bO6DR3Rp9"><i class="fa fa-edit"></i></a></div> -->
                <div class="pacai">
                  <i
                    class="fa fa-trash"
                    onclick="pc_del_context(this,'bO6DR3Rp9')"
                  ></i>
                </div>
                <div class="pacai">
                  <i
                    class="fa fa-edit"
                    onclick="pc_edit_context(this, 'bO6DR3Rp9')"
                  ></i>
                </div>
                <div class="clear"></div>
              </div>
              <div class="pacarow" style="border-top: 1px solid #f3f4f7">
                <div class="pacat cotop">Music</div>
                <div class="pacak">0</div>
                <div class="pacar">Peru</div>
                <!--div class="pacai"><i class="fa fa-circle"></i></div -->
                <!--
      <div class="pacai">
        <label class="switch" style="margin:0px">
          <input type="checkbox">
          <span class="slider round"></span>
        </label>
      </div>
      -->
                <!-- <div class="pacai"><a href="https://listening.isocialcube.com/context/KZnawDCTO"><i class="fa fa-edit"></i></a></div> -->
                <div class="pacai">
                  <i
                    class="fa fa-trash"
                    onclick="pc_del_context(this,'KZnawDCTO')"
                  ></i>
                </div>
                <div class="pacai">
                  <i
                    class="fa fa-edit"
                    onclick="pc_edit_context(this, 'KZnawDCTO')"
                  ></i>
                </div>
                <div class="clear"></div>
              </div>
              <div class="pacarow" style="border-top: 1px solid #f3f4f7">
                <div class="pacat cotop">NewContext</div>
                <div class="pacak">0</div>
                <div class="pacar">Peru</div>
                <!--div class="pacai"><i class="fa fa-circle"></i></div -->
                <!--
      <div class="pacai">
        <label class="switch" style="margin:0px">
          <input type="checkbox">
          <span class="slider round"></span>
        </label>
      </div>
      -->
                <!-- <div class="pacai"><a href="https://listening.isocialcube.com/context/ZiV7MTiRk"><i class="fa fa-edit"></i></a></div> -->
                <div class="pacai">
                  <i
                    class="fa fa-trash"
                    onclick="pc_del_context(this,'ZiV7MTiRk')"
                  ></i>
                </div>
                <div class="pacai">
                  <i
                    class="fa fa-edit"
                    onclick="pc_edit_context(this, 'ZiV7MTiRk')"
                  ></i>
                </div>
                <div class="clear"></div>
              </div>
              <div class="pacarow" style="border-top: 1px solid #f3f4f7">
                <div class="pacat cotop">Fashion Collection</div>
                <div class="pacak">3</div>
                <div class="pacar">Peru</div>
                <!--div class="pacai"><i class="fa fa-circle"></i></div -->
                <!--
      <div class="pacai">
        <label class="switch" style="margin:0px">
          <input type="checkbox">
          <span class="slider round"></span>
        </label>
      </div>
      -->
                <!-- <div class="pacai"><a href="https://listening.isocialcube.com/context/glNj6YrNo"><i class="fa fa-edit"></i></a></div> -->
                <div class="pacai">
                  <i
                    class="fa fa-trash"
                    onclick="pc_del_context(this,'glNj6YrNo')"
                  ></i>
                </div>
                <div class="pacai">
                  <i
                    class="fa fa-edit"
                    onclick="pc_edit_context(this, 'glNj6YrNo')"
                  ></i>
                </div>
                <div class="clear"></div>
              </div>
              <div class="pacarow" style="border-top: 1px solid #f3f4f7">
                <div class="pacat cotop">Ferreyros Corp FB</div>
                <div class="pacak">9</div>
                <div class="pacar">Peru</div>
                <!--div class="pacai"><i class="fa fa-circle"></i></div -->
                <!--
      <div class="pacai">
        <label class="switch" style="margin:0px">
          <input type="checkbox">
          <span class="slider round"></span>
        </label>
      </div>
      -->
                <!-- <div class="pacai"><a href="https://listening.isocialcube.com/context/Qb9U6P-VO"><i class="fa fa-edit"></i></a></div> -->
                <div class="pacai">
                  <i
                    class="fa fa-trash"
                    onclick="pc_del_context(this,'Qb9U6P-VO')"
                  ></i>
                </div>
                <div class="pacai">
                  <i
                    class="fa fa-edit"
                    onclick="pc_edit_context(this, 'Qb9U6P-VO')"
                  ></i>
                </div>
                <div class="clear"></div>
              </div>
              <div class="pacarow" style="border-top: 1px solid #f3f4f7">
                <div class="pacat cotop">2 chance</div>
                <div class="pacak">4</div>
                <div class="pacar">Peru</div>
                <!--div class="pacai"><i class="fa fa-circle"></i></div -->
                <!--
      <div class="pacai">
        <label class="switch" style="margin:0px">
          <input type="checkbox">
          <span class="slider round"></span>
        </label>
      </div>
      -->
                <!-- <div class="pacai"><a href="https://listening.isocialcube.com/context/MpjLA8OxY"><i class="fa fa-edit"></i></a></div> -->
                <div class="pacai">
                  <i
                    class="fa fa-trash"
                    onclick="pc_del_context(this,'MpjLA8OxY')"
                  ></i>
                </div>
                <div class="pacai">
                  <i
                    class="fa fa-edit"
                    onclick="pc_edit_context(this, 'MpjLA8OxY')"
                  ></i>
                </div>
                <div class="clear"></div>
              </div>
              <div class="pacarow" style="border-top: 1px solid #f3f4f7">
                <div class="pacat cotop">NewContext</div>
                <div class="pacak">0</div>
                <div class="pacar">Peru</div>
                <!--div class="pacai"><i class="fa fa-circle"></i></div -->
                <!--
      <div class="pacai">
        <label class="switch" style="margin:0px">
          <input type="checkbox">
          <span class="slider round"></span>
        </label>
      </div>
      -->
                <!-- <div class="pacai"><a href="https://listening.isocialcube.com/context/x0M19tIU-"><i class="fa fa-edit"></i></a></div> -->
                <div class="pacai">
                  <i
                    class="fa fa-trash"
                    onclick="pc_del_context(this,'x0M19tIU-')"
                  ></i>
                </div>
                <div class="pacai">
                  <i
                    class="fa fa-edit"
                    onclick="pc_edit_context(this, 'x0M19tIU-')"
                  ></i>
                </div>
                <div class="clear"></div>
              </div>
              <div class="pacarow" style="border-top: 1px solid #f3f4f7">
                <div class="pacat cotop">NewContext</div>
                <div class="pacak">0</div>
                <div class="pacar">Peru</div>
                <!--div class="pacai"><i class="fa fa-circle"></i></div -->
                <!--
      <div class="pacai">
        <label class="switch" style="margin:0px">
          <input type="checkbox">
          <span class="slider round"></span>
        </label>
      </div>
      -->
                <!-- <div class="pacai"><a href="https://listening.isocialcube.com/context/oReheYh-Q"><i class="fa fa-edit"></i></a></div> -->
                <div class="pacai">
                  <i
                    class="fa fa-trash"
                    onclick="pc_del_context(this,'oReheYh-Q')"
                  ></i>
                </div>
                <div class="pacai">
                  <i
                    class="fa fa-edit"
                    onclick="pc_edit_context(this, 'oReheYh-Q')"
                  ></i>
                </div>
                <div class="clear"></div>
              </div>
              <div class="pacarow" style="border-top: 1px solid #f3f4f7">
                <div class="pacat cotop">Cuidado Personal</div>
                <div class="pacak">7</div>
                <div class="pacar">Peru</div>
                <!--div class="pacai"><i class="fa fa-circle"></i></div -->
                <!--
      <div class="pacai">
        <label class="switch" style="margin:0px">
          <input type="checkbox">
          <span class="slider round"></span>
        </label>
      </div>
      -->
                <!-- <div class="pacai"><a href="https://listening.isocialcube.com/context/YZc-J-eb-"><i class="fa fa-edit"></i></a></div> -->
                <div class="pacai">
                  <i
                    class="fa fa-trash"
                    onclick="pc_del_context(this,'YZc-J-eb-')"
                  ></i>
                </div>
                <div class="pacai">
                  <i
                    class="fa fa-edit"
                    onclick="pc_edit_context(this, 'YZc-J-eb-')"
                  ></i>
                </div>
                <div class="clear"></div>
              </div>
              <div class="pacarow" style="border-top: 1px solid #f3f4f7">
                <div class="pacat cotop">nuevo1</div>
                <div class="pacak">3</div>
                <div class="pacar">Peru</div>
                <!--div class="pacai"><i class="fa fa-circle"></i></div -->
                <!--
      <div class="pacai">
        <label class="switch" style="margin:0px">
          <input type="checkbox">
          <span class="slider round"></span>
        </label>
      </div>
      -->
                <!-- <div class="pacai"><a href="https://listening.isocialcube.com/context/CgV-Zh3be"><i class="fa fa-edit"></i></a></div> -->
                <div class="pacai">
                  <i
                    class="fa fa-trash"
                    onclick="pc_del_context(this,'CgV-Zh3be')"
                  ></i>
                </div>
                <div class="pacai">
                  <i
                    class="fa fa-edit"
                    onclick="pc_edit_context(this, 'CgV-Zh3be')"
                  ></i>
                </div>
                <div class="clear"></div>
              </div>
              <div class="pacarow" style="border-top: 1px solid #f3f4f7">
                <div class="pacat cotop">NewContext</div>
                <div class="pacak">0</div>
                <div class="pacar">Peru</div>
                <!--div class="pacai"><i class="fa fa-circle"></i></div -->
                <!--
      <div class="pacai">
        <label class="switch" style="margin:0px">
          <input type="checkbox">
          <span class="slider round"></span>
        </label>
      </div>
      -->
                <!-- <div class="pacai"><a href="https://listening.isocialcube.com/context/wtFr-hdU2"><i class="fa fa-edit"></i></a></div> -->
                <div class="pacai">
                  <i
                    class="fa fa-trash"
                    onclick="pc_del_context(this,'wtFr-hdU2')"
                  ></i>
                </div>
                <div class="pacai">
                  <i
                    class="fa fa-edit"
                    onclick="pc_edit_context(this, 'wtFr-hdU2')"
                  ></i>
                </div>
                <div class="clear"></div>
              </div>
              <div class="pacarow" style="border-top: 1px solid #f3f4f7">
                <div class="pacat cotop">NewContext</div>
                <div class="pacak">0</div>
                <div class="pacar">Peru</div>
                <!--div class="pacai"><i class="fa fa-circle"></i></div -->
                <!--
      <div class="pacai">
        <label class="switch" style="margin:0px">
          <input type="checkbox">
          <span class="slider round"></span>
        </label>
      </div>
      -->
                <!-- <div class="pacai"><a href="https://listening.isocialcube.com/context/qOaIyO4zL"><i class="fa fa-edit"></i></a></div> -->
                <div class="pacai">
                  <i
                    class="fa fa-trash"
                    onclick="pc_del_context(this,'qOaIyO4zL')"
                  ></i>
                </div>
                <div class="pacai">
                  <i
                    class="fa fa-edit"
                    onclick="pc_edit_context(this, 'qOaIyO4zL')"
                  ></i>
                </div>
                <div class="clear"></div>
              </div>
              <div class="pacarow" style="border-top: 1px solid #f3f4f7">
                <div class="pacat cotop">NewContext</div>
                <div class="pacak">0</div>
                <div class="pacar">Peru</div>
                <!--div class="pacai"><i class="fa fa-circle"></i></div -->
                <!--
      <div class="pacai">
        <label class="switch" style="margin:0px">
          <input type="checkbox">
          <span class="slider round"></span>
        </label>
      </div>
      -->
                <!-- <div class="pacai"><a href="https://listening.isocialcube.com/context/A7aGRdWPG"><i class="fa fa-edit"></i></a></div> -->
                <div class="pacai">
                  <i
                    class="fa fa-trash"
                    onclick="pc_del_context(this,'A7aGRdWPG')"
                  ></i>
                </div>
                <div class="pacai">
                  <i
                    class="fa fa-edit"
                    onclick="pc_edit_context(this, 'A7aGRdWPG')"
                  ></i>
                </div>
                <div class="clear"></div>
              </div>
              <div class="pacarow" style="border-top: 1px solid #f3f4f7">
                <div class="pacat cotop">Prensa Chile TW</div>
                <div class="pacak">2</div>
                <div class="pacar">Peru</div>
                <!--div class="pacai"><i class="fa fa-circle"></i></div -->
                <!--
      <div class="pacai">
        <label class="switch" style="margin:0px">
          <input type="checkbox">
          <span class="slider round"></span>
        </label>
      </div>
      -->
                <!-- <div class="pacai"><a href="https://listening.isocialcube.com/context/whx9PY-J6"><i class="fa fa-edit"></i></a></div> -->
                <div class="pacai">
                  <i
                    class="fa fa-trash"
                    onclick="pc_del_context(this,'whx9PY-J6')"
                  ></i>
                </div>
                <div class="pacai">
                  <i
                    class="fa fa-edit"
                    onclick="pc_edit_context(this, 'whx9PY-J6')"
                  ></i>
                </div>
                <div class="clear"></div>
              </div>
              <div class="pacarow" style="border-top: 1px solid #f3f4f7">
                <div class="pacat cotop">NewContext</div>
                <div class="pacak">0</div>
                <div class="pacar">Peru</div>
                <!--div class="pacai"><i class="fa fa-circle"></i></div -->
                <!--
      <div class="pacai">
        <label class="switch" style="margin:0px">
          <input type="checkbox">
          <span class="slider round"></span>
        </label>
      </div>
      -->
                <!-- <div class="pacai"><a href="https://listening.isocialcube.com/context/GyiBW0_lq"><i class="fa fa-edit"></i></a></div> -->
                <div class="pacai">
                  <i
                    class="fa fa-trash"
                    onclick="pc_del_context(this,'GyiBW0_lq')"
                  ></i>
                </div>
                <div class="pacai">
                  <i
                    class="fa fa-edit"
                    onclick="pc_edit_context(this, 'GyiBW0_lq')"
                  ></i>
                </div>
                <div class="clear"></div>
              </div>
              <div class="pacarow" style="border-top: 1px solid #f3f4f7">
                <div class="pacat cotop">Pruebas 2021</div>
                <div class="pacak">0</div>
                <div class="pacar">Peru</div>
                <!--div class="pacai"><i class="fa fa-circle"></i></div -->
                <!--
      <div class="pacai">
        <label class="switch" style="margin:0px">
          <input type="checkbox">
          <span class="slider round"></span>
        </label>
      </div>
      -->
                <!-- <div class="pacai"><a href="https://listening.isocialcube.com/context/Jg0OoiPdL"><i class="fa fa-edit"></i></a></div> -->
                <div class="pacai">
                  <i
                    class="fa fa-trash"
                    onclick="pc_del_context(this,'Jg0OoiPdL')"
                  ></i>
                </div>
                <div class="pacai">
                  <i
                    class="fa fa-edit"
                    onclick="pc_edit_context(this, 'Jg0OoiPdL')"
                  ></i>
                </div>
                <div class="clear"></div>
              </div>
              <div class="pacarow" style="border-top: 1px solid #f3f4f7">
                <div class="pacat cotop">Alan Garcia</div>
                <div class="pacak">12</div>
                <div class="pacar">Peru</div>
                <!--div class="pacai"><i class="fa fa-circle"></i></div -->
                <!--
      <div class="pacai">
        <label class="switch" style="margin:0px">
          <input type="checkbox">
          <span class="slider round"></span>
        </label>
      </div>
      -->
                <!-- <div class="pacai"><a href="https://listening.isocialcube.com/context/w9ymTyaUo"><i class="fa fa-edit"></i></a></div> -->
                <div class="pacai">
                  <i
                    class="fa fa-trash"
                    onclick="pc_del_context(this,'w9ymTyaUo')"
                  ></i>
                </div>
                <div class="pacai">
                  <i
                    class="fa fa-edit"
                    onclick="pc_edit_context(this, 'w9ymTyaUo')"
                  ></i>
                </div>
                <div class="clear"></div>
              </div>
              <div class="pacarow" style="border-top: 1px solid #f3f4f7">
                <div class="pacat cotop">NewContext</div>
                <div class="pacak">0</div>
                <div class="pacar">Peru</div>
                <!--div class="pacai"><i class="fa fa-circle"></i></div -->
                <!--
      <div class="pacai">
        <label class="switch" style="margin:0px">
          <input type="checkbox">
          <span class="slider round"></span>
        </label>
      </div>
      -->
                <!-- <div class="pacai"><a href="https://listening.isocialcube.com/context/eJajCaTKu"><i class="fa fa-edit"></i></a></div> -->
                <div class="pacai">
                  <i
                    class="fa fa-trash"
                    onclick="pc_del_context(this,'eJajCaTKu')"
                  ></i>
                </div>
                <div class="pacai">
                  <i
                    class="fa fa-edit"
                    onclick="pc_edit_context(this, 'eJajCaTKu')"
                  ></i>
                </div>
                <div class="clear"></div>
              </div>
              <div class="pacarow" style="border-top: 1px solid #f3f4f7">
                <div class="pacat cotop">NewContext</div>
                <div class="pacak">0</div>
                <div class="pacar">Peru</div>
                <!--div class="pacai"><i class="fa fa-circle"></i></div -->
                <!--
      <div class="pacai">
        <label class="switch" style="margin:0px">
          <input type="checkbox">
          <span class="slider round"></span>
        </label>
      </div>
      -->
                <!-- <div class="pacai"><a href="https://listening.isocialcube.com/context/3xZuR4c3u"><i class="fa fa-edit"></i></a></div> -->
                <div class="pacai">
                  <i
                    class="fa fa-trash"
                    onclick="pc_del_context(this,'3xZuR4c3u')"
                  ></i>
                </div>
                <div class="pacai">
                  <i
                    class="fa fa-edit"
                    onclick="pc_edit_context(this, '3xZuR4c3u')"
                  ></i>
                </div>
                <div class="clear"></div>
              </div>
              <div class="pacarow" style="border-top: 1px solid #f3f4f7">
                <div class="pacat cotop">Banco Continental (BBVA) TW</div>
                <div class="pacak">3</div>
                <div class="pacar">Peru</div>
                <!--div class="pacai"><i class="fa fa-circle"></i></div -->
                <!--
      <div class="pacai">
        <label class="switch" style="margin:0px">
          <input type="checkbox">
          <span class="slider round"></span>
        </label>
      </div>
      -->
                <!-- <div class="pacai"><a href="https://listening.isocialcube.com/context/qZkc658KP"><i class="fa fa-edit"></i></a></div> -->
                <div class="pacai">
                  <i
                    class="fa fa-trash"
                    onclick="pc_del_context(this,'qZkc658KP')"
                  ></i>
                </div>
                <div class="pacai">
                  <i
                    class="fa fa-edit"
                    onclick="pc_edit_context(this, 'qZkc658KP')"
                  ></i>
                </div>
                <div class="clear"></div>
              </div>
              <div class="pacarow" style="border-top: 1px solid #f3f4f7">
                <div class="pacat cotop">ecommerce</div>
                <div class="pacak">20</div>
                <div class="pacar">Peru</div>
                <!--div class="pacai"><i class="fa fa-circle"></i></div -->
                <!--
      <div class="pacai">
        <label class="switch" style="margin:0px">
          <input type="checkbox">
          <span class="slider round"></span>
        </label>
      </div>
      -->
                <!-- <div class="pacai"><a href="https://listening.isocialcube.com/context/jvw25rug5"><i class="fa fa-edit"></i></a></div> -->
                <div class="pacai">
                  <i
                    class="fa fa-trash"
                    onclick="pc_del_context(this,'jvw25rug5')"
                  ></i>
                </div>
                <div class="pacai">
                  <i
                    class="fa fa-edit"
                    onclick="pc_edit_context(this, 'jvw25rug5')"
                  ></i>
                </div>
                <div class="clear"></div>
              </div>
              <div class="pacarow" style="border-top: 1px solid #f3f4f7">
                <div class="pacat cotop">Banco de Credito (BCP)</div>
                <div class="pacak">4</div>
                <div class="pacar">Peru</div>
                <!--div class="pacai"><i class="fa fa-circle"></i></div -->
                <!--
      <div class="pacai">
        <label class="switch" style="margin:0px">
          <input type="checkbox">
          <span class="slider round"></span>
        </label>
      </div>
      -->
                <!-- <div class="pacai"><a href="https://listening.isocialcube.com/context/O7uzrAXmt"><i class="fa fa-edit"></i></a></div> -->
                <div class="pacai">
                  <i
                    class="fa fa-trash"
                    onclick="pc_del_context(this,'O7uzrAXmt')"
                  ></i>
                </div>
                <div class="pacai">
                  <i
                    class="fa fa-edit"
                    onclick="pc_edit_context(this, 'O7uzrAXmt')"
                  ></i>
                </div>
                <div class="clear"></div>
              </div>
              <div class="pacarow" style="border-top: 1px solid #f3f4f7">
                <div class="pacat cotop">Contexto Entretenimiento</div>
                <div class="pacak">1</div>
                <div class="pacar">Peru</div>
                <!--div class="pacai"><i class="fa fa-circle"></i></div -->
                <!--
      <div class="pacai">
        <label class="switch" style="margin:0px">
          <input type="checkbox">
          <span class="slider round"></span>
        </label>
      </div>
      -->
                <!-- <div class="pacai"><a href="https://listening.isocialcube.com/context/9SjaBYapy"><i class="fa fa-edit"></i></a></div> -->
                <div class="pacai">
                  <i
                    class="fa fa-trash"
                    onclick="pc_del_context(this,'9SjaBYapy')"
                  ></i>
                </div>
                <div class="pacai">
                  <i
                    class="fa fa-edit"
                    onclick="pc_edit_context(this, '9SjaBYapy')"
                  ></i>
                </div>
                <div class="clear"></div>
              </div>
              <div class="pacarow" style="border-top: 1px solid #f3f4f7">
                <div class="pacat cotop">NewContext</div>
                <div class="pacak">0</div>
                <div class="pacar">Peru</div>
                <!--div class="pacai"><i class="fa fa-circle"></i></div -->
                <!--
      <div class="pacai">
        <label class="switch" style="margin:0px">
          <input type="checkbox">
          <span class="slider round"></span>
        </label>
      </div>
      -->
                <!-- <div class="pacai"><a href="https://listening.isocialcube.com/context/wDXXZ3kKx"><i class="fa fa-edit"></i></a></div> -->
                <div class="pacai">
                  <i
                    class="fa fa-trash"
                    onclick="pc_del_context(this,'wDXXZ3kKx')"
                  ></i>
                </div>
                <div class="pacai">
                  <i
                    class="fa fa-edit"
                    onclick="pc_edit_context(this, 'wDXXZ3kKx')"
                  ></i>
                </div>
                <div class="clear"></div>
              </div>
              <div class="pacarow" style="border-top: 1px solid #f3f4f7">
                <div class="pacat cotop">politica</div>
                <div class="pacak">4</div>
                <div class="pacar">Peru</div>
                <!--div class="pacai"><i class="fa fa-circle"></i></div -->
                <!--
      <div class="pacai">
        <label class="switch" style="margin:0px">
          <input type="checkbox">
          <span class="slider round"></span>
        </label>
      </div>
      -->
                <!-- <div class="pacai"><a href="https://listening.isocialcube.com/context/fxg5sQP3p"><i class="fa fa-edit"></i></a></div> -->
                <div class="pacai">
                  <i
                    class="fa fa-trash"
                    onclick="pc_del_context(this,'fxg5sQP3p')"
                  ></i>
                </div>
                <div class="pacai">
                  <i
                    class="fa fa-edit"
                    onclick="pc_edit_context(this, 'fxg5sQP3p')"
                  ></i>
                </div>
                <div class="clear"></div>
              </div>
              <div class="pacarow" style="border-top: 1px solid #f3f4f7">
                <div class="pacat cotop">NewContext</div>
                <div class="pacak">0</div>
                <div class="pacar">Peru</div>
                <!--div class="pacai"><i class="fa fa-circle"></i></div -->
                <!--
      <div class="pacai">
        <label class="switch" style="margin:0px">
          <input type="checkbox">
          <span class="slider round"></span>
        </label>
      </div>
      -->
                <!-- <div class="pacai"><a href="https://listening.isocialcube.com/context/uhczUqru9"><i class="fa fa-edit"></i></a></div> -->
                <div class="pacai">
                  <i
                    class="fa fa-trash"
                    onclick="pc_del_context(this,'uhczUqru9')"
                  ></i>
                </div>
                <div class="pacai">
                  <i
                    class="fa fa-edit"
                    onclick="pc_edit_context(this, 'uhczUqru9')"
                  ></i>
                </div>
                <div class="clear"></div>
              </div>
              <div class="pacarow" style="border-top: 1px solid #f3f4f7">
                <div class="pacat cotop">entertaiment</div>
                <div class="pacak">38</div>
                <div class="pacar">Peru</div>
                <!--div class="pacai"><i class="fa fa-circle"></i></div -->
                <!--
      <div class="pacai">
        <label class="switch" style="margin:0px">
          <input type="checkbox">
          <span class="slider round"></span>
        </label>
      </div>
      -->
                <!-- <div class="pacai"><a href="https://listening.isocialcube.com/context/peru-entertaiment"><i class="fa fa-edit"></i></a></div> -->
                <div class="pacai">
                  <i
                    class="fa fa-trash"
                    onclick="pc_del_context(this,'peru-entertaiment')"
                  ></i>
                </div>
                <div class="pacai">
                  <i
                    class="fa fa-edit"
                    onclick="pc_edit_context(this, 'peru-entertaiment')"
                  ></i>
                </div>
                <div class="clear"></div>
              </div>
              <div class="pacarow" style="border-top: 1px solid #f3f4f7">
                <div class="pacat cotop">Ferreyros Corp All</div>
                <div class="pacak">18</div>
                <div class="pacar">Peru</div>
                <!--div class="pacai"><i class="fa fa-circle"></i></div -->
                <!--
      <div class="pacai">
        <label class="switch" style="margin:0px">
          <input type="checkbox">
          <span class="slider round"></span>
        </label>
      </div>
      -->
                <!-- <div class="pacai"><a href="https://listening.isocialcube.com/context/o0ey_zIde"><i class="fa fa-edit"></i></a></div> -->
                <div class="pacai">
                  <i
                    class="fa fa-trash"
                    onclick="pc_del_context(this,'o0ey_zIde')"
                  ></i>
                </div>
                <div class="pacai">
                  <i
                    class="fa fa-edit"
                    onclick="pc_edit_context(this, 'o0ey_zIde')"
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
  name: 'Listening'
}
</script>

<style>
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
