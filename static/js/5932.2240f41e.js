"use strict";(self["webpackChunkframe"]=self["webpackChunkframe"]||[]).push([[5932],{5932:function(s,t,a){a.r(t),a.d(t,{default:function(){return C}});var i=function(){var s=this,t=s._self._c;return t("div",{staticClass:"container Outerbox"},[t("HomeHeader",{attrs:{topimgIsShow:!1}}),t("div",{directives:[{name:"loading",rawName:"v-loading",value:s.loading,expression:"loading"}],staticClass:"center"},[t("div",{staticClass:"layoutLeft"},[t("div",{staticClass:"toptitle"},[s._v(" "+s._s(s.$t("ClassRoomXiadan.qurenbingfukuan"))+" ")]),t("div",{staticClass:"classroomName"},[s._v(" "+s._s(s.classroomObj.name_arr)+" ")]),t("div",{staticClass:"detailCon"},[t("div",{staticClass:"left"},[t("div",{staticClass:"item"},[t("div",{staticClass:"stitle"},[s._v(" "+s._s(s.$t("ClassRoomXiadan.jianlishijian"))+" ")]),t("div",{staticClass:"text"},[s._v(" "+s._s(s.classroomObj.build_time_text)+" ")])]),t("div",{staticClass:"item"},[t("div",{staticClass:"stitle"},[s._v(" "+s._s(s.$t("ClassRoomXiadan.jianshidizhi"))+" ")]),t("div",{staticClass:"text"},[s._v(" "+s._s(s.classroomObj.area_text)+" ")])])])]),t("Zhifu",{attrs:{AddData:s.zhifuAddData,shopType:"classroom"}})],1),t("div",{staticClass:"layoutRight"},[t("div",{staticClass:"top"},[s.classroomObj.images_text&&s.classroomObj.images_text.length>0?t("img",{staticClass:"img",attrs:{src:s.classroomObj.images_text[0],alt:""}}):s._e(),t("div",{staticClass:"middle"},[t("div",{staticClass:"title"},[s._v(" "+s._s(s.classroomObj.name_arr)+" ")]),t("div",{staticClass:"desc"},[s._v(" "+s._s(s.classroomObj.brief_text)+" ")])])]),t("div",{staticClass:"hr"}),t("div",{staticClass:"infoCon"},[t("div",{staticClass:"row row1"},[t("div",{staticClass:"left"},[s._v(" "+s._s(s.$t("ClassRoomXiadan.original_price"))+" ")]),t("div",{staticClass:"right strickout"},[s._v(" $"+s._s(s.detailObj.classroom_price)+" ")])]),t("div",{staticClass:"row row2"},[t("div",{staticClass:"left"},[s._v(" "+s._s(s.$t("ClassRoomXiadan.discount_price"))+" ")]),t("div",{staticClass:"right"},[s._v(" $"+s._s(s.detailObj.discounts_price)+" ")])]),t("div",{staticClass:"row"},[t("div",{staticClass:"left"},[s._v(" "+s._s(s.$t("ClassRoomXiadan.fuwufei"))+" ")]),t("div",{staticClass:"right"},[s._v("$"+s._s(s.detailObj.service_price))])]),t("div",{staticClass:"row"},[t("div",{staticClass:"left"},[s._v(" "+s._s(s.$t("CourseCalendar.taxes"))+" ")]),t("div",{staticClass:"right"},[s._v("$"+s._s(s.detailObj.tax_price))])]),t("div",{staticClass:"hr2"}),t("div",{staticClass:"row row3"},[t("div",{staticClass:"left"},[s._v(" "+s._s(s.$t("ClassRoomXiadan.zongjia"))+" ")]),t("div",{staticClass:"right"},[s._v("$"+s._s(s.detailObj.price))])])])])]),t("HomeFooter")],1)},e=[],l=a(4631),o=a(6529),r=a(1206),d=a(8550),c={name:"headercom",components:{HomeFooter:d.Z,HomeHeader:l.Z,Zhifu:o.Z},data(){return{loading:!1,value:"",selectYuYueTimeArr:[],zhifuAddData:{},classroomObj:{},detailObj:{}}},watch:{},created(){this.getOrderDetail()},methods:{async getOrderDetail(){this.$route.query.id;let s=this.$route.query.out_trade_no;this.zhifuAddData={orderNumber:s};try{this.loading=!0;const t=await(0,r.TED)({out_trade_no:s});if(200==t.code){let s=t.data;this.detailObj=s,this.classroomObj=s?.classroom}}catch(t){console.error(t)}this.loading=!1}}},v=c,_=a(1001),n=(0,_.Z)(v,i,e,!1,null,"a733ffe6",null),C=n.exports}}]);