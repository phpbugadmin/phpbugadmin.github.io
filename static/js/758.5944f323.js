"use strict";(self["webpackChunkframe"]=self["webpackChunkframe"]||[]).push([[758],{6101:function(e,t,r){r.r(t),r.d(t,{default:function(){return d}});var i=function(){var e=this,t=e._self._c;return t("div",[t("HomeHeader"),t("div",{staticClass:"box"},[t("div",{staticClass:"mian"},[t("div",{staticClass:"title",domProps:{innerHTML:e._s(e.PrivacyAgreementTitle)}}),t("div",{domProps:{innerHTML:e._s(e.PrivacyAgreementContent)}})])]),t("HomeFooter")],1)},a=[],s=r(528),n=r(9339),c=r(1206),y={data(){return{PrivacyAgreementTitle:"",PrivacyAgreementContent:"",query:{id:"",type:0}}},components:{HomeHeader:s.Z,HomeFooter:n.Z},created(){this.getPrivacyAgreement()},methods:{getPrivacyAgreement(){let e=this.$route.query.type,t=c.XC;switch(e){case"zhifu":this.query.type=1;break;case"baoxian":this.query.type=2;break;case"yisi":this.query.type=3;break;case"fuwu":this.query.type=4;break;case"yinsi2":this.query.type=5;break;case"zhengce":this.query.type=6;break;case"zhichiheziyuan":this.query.type="",this.query.id=this.$route.query.id,t=c.c9;break;default:break}t(this.query).then((e=>{200==e.code&&(console.log("console_data",JSON.parse(JSON.stringify(e))),this.PrivacyAgreementContent=e.data?.content_arr)}))}},watch:{"$route.query.id"(e,t){this.getPrivacyAgreement()},"$route.query.type"(e,t){this.getPrivacyAgreement()}}},u=y,o=r(1001),h=(0,o.Z)(u,i,a,!1,null,"38d577c6",null),d=h.exports}}]);