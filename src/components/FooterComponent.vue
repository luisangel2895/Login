<template>
    <b-container fluid id="footer">
        <b-container id="footer-information" fluid>
            <b-container class="footer-container">
                <b-row>
                    <b-col class="col-email">
                        <img src="../../public/images/logo.png" class="logo-navbar" style="margin-bottom:30px">
                        <div>Simple, Inteligente</div>
                        <div>sales@isocialcube.com</div>
                    </b-col>
                    <b-col class="col-info">
                        <div style="margin-bottom:20px;">
                            <div>Av. Benavides 1238, Miraflores, Oficina No. 301</div>
                            <div>Miraflores / Lima - Perú</div>
                            <div>+51 1 2422786</div>
                        </div>
                        <div>
                            <div>6001 W Parmer Ln Ste 370 PMB 5987</div>
                            <div>Austin, TX 78727, EE. UU.</div>
                            <div>+1 512 994 1015</div>
                        </div>
                    </b-col>
                    <b-col class="col-rrss">
                        <b-container style="text-align:right;">
                            <div style="margin-bottom:10px; margin-right:50px">Siguenos en:</div>
                            <div>
                                <b-icon-facebook class="icon-footer"></b-icon-facebook>
                                <b-icon-instagram class="icon-footer">/</b-icon-instagram>
                                <b-icon-linkedin class="icon-footer"></b-icon-linkedin>
                                <b-icon-youtube class="icon-footer"></b-icon-youtube>
                            </div>
                        </b-container>
                    </b-col>
                </b-row>
            </b-container>
        </b-container>
        <b-container id="footer-rights" fluid>
            <span>@2021 ANGEL ORELLANA</span>
        </b-container>
    </b-container>
</template>
<script>
export default {
  name: 'FooterComponent'
}
</script>
<style scoped>
    #footer{
        padding: 0px;
    }
    .footer-container{
        padding-top: 70px;
    }
    .col-email{
        color: white;
        font-size: 14px;
    }
    .col-info{
        color: rgb(136, 153, 179);
        font-size: 14px;
    }
    .col-rrss{
        color: rgb(136, 153, 179);
        font-size: 14px;
    }
    #footer-information{
        background-color: #232438;
        height: 308px;
    }
    #footer-rights{
        text-align: center;
        padding-top: 50px;
        height: 113px;
        background-color: #1F2032;
        color: rgb(136, 153, 179);
        font-size: 13px;
    }
    .icon-footer{
        font-size: 19px;
        margin: 0px 5px;
    }
</style>
