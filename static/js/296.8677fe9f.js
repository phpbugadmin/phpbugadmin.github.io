"use strict";(self["webpackChunkframe"]=self["webpackChunkframe"]||[]).push([[296],{7296:function(s,t,e){e.r(t),e.d(t,{default:function(){return _}});var i=function(){var s=this,t=s._self._c;return t("div",{staticClass:"container"},[t("HomeHeader",{attrs:{topimgIsShow:!1}}),t("div",{staticClass:"center"},[t("div",{staticClass:"layoutLeft"},[t("div",{staticClass:"title"},[s._v(" "+s._s(s.$t("CourseXiadan.querenbingfukuan"))+" ")]),t("div",{staticClass:"shangkeTime"},[s._v(" "+s._s(s.$t("CourseXiadan.ningdeshangkeshijian"))+" ")]),t("div",{staticClass:"riqiTitle"},[s._v(s._s(s.$t("CourseXiadan.riqi")))]),t("div",{staticClass:"riqiCon"},[t("div",{staticClass:"left"},s._l(s.selectKejieArr,(function(e,i){return t("span",{key:e.id},[s._v(" "+s._s(e.date)+" ")])})),0),t("div",{staticClass:"edit"},[s._v(s._s(s.$t("CourseXiadan.bianji")))])]),t("div",{staticClass:"jieshuTitle"},[s._v(" "+s._s(s.$t("CourseXiadan.shangkejieshu"))+" ")]),t("div",{staticClass:"jieshuCon"},[t("div",{staticClass:"left"},[s._v(" "+s._s(s.selectKejieArr.length)+s._s(s.$t("CourseXiadan.jie"))+" ")]),t("div",{staticClass:"edit"},[s._v(s._s(s.$t("CourseXiadan.bianji")))])]),t("Zhifu",{attrs:{jifenShow:!0,AddData:s.zhifuAddData,shopType:"couse"}})],1),t("div",{staticClass:"layoutRight"},[t("div",{staticClass:"top"},[s.courseObj.course_images_text&&s.courseObj.course_images_text.length>0?t("img",{staticClass:"img",attrs:{src:s.courseObj.course_images_text[0],alt:""}}):s._e(),t("div",{staticClass:"middle"},[t("div",{staticClass:"title"},[s._v(" "+s._s(s.courseObj.name_arr)+" ")]),t("div",{staticClass:"desc"},[s._v(" "+s._s(s.courseObj.describe_text)+" ")])])]),t("div",{staticClass:"hr"}),t("div",{staticClass:"infoCon"},[t("div",{staticClass:"row row1"},[t("div",{staticClass:"left"},[s._v(" $"+s._s(s.detailObj.course_price)+"X"+s._s(s.selectKejieArr.length)+s._s(s.$t("CourseXiadan.jie"))+" ")]),t("div",{staticClass:"right"},[s._v("$"+s._s(s.detailObj.price))])]),t("div",{staticClass:"row row2"},[t("div",{staticClass:"left"},[s._v(s._s(s.$t("CourseXiadan.fuwufei")))]),t("div",{staticClass:"right"},[s._v("$"+s._s(s.detailObj.service_price))])]),t("div",{staticClass:"row row2"},[t("div",{staticClass:"left"},[s._v("优惠价")]),t("div",{staticClass:"right"},[s._v("$"+s._s(s.detailObj.service_price))])]),t("div",{staticClass:"hr2"}),t("div",{staticClass:"row row3"},[t("div",{staticClass:"left"},[s._v(s._s(s.$t("CourseXiadan.zongjia")))]),t("div",{staticClass:"right"},[s._v("$"+s._s(s.detailObj.total_price))])])])])])],1)},a=[],r=(e(7658),e(528)),d=e(5048),l=e(1206),o={name:"headercom",components:{HomeHeader:r.Z,Zhifu:d.Z},data(){return{value:"",selectKejieArr:[],shangkeJieShu:0,zhifuAddData:{},courseObj:{},detailObj:{}}},watch:{},created(){},mounted(){this.getOrderDetail()},methods:{getSelectKejieArr(){let s=this.$route.query.id,t=this.vuex_CourseYuYue[s]||[];this.selectKejieArr=t;for(let i of t)this.shangkeJieShu=this.shangkeJieShu+i.selectCourse.length;let e=[];for(let i of t){console.log("item",i);for(let s of i.selectCourse)e.push({date:i.date,weeks:s.weeks,start_time:s.start_time,end_time:s.end_time})}console.log("book_times",e),this.zhifuAddData={courseId:s,book_times:e}},getOrderDetail(){let s=this.$route.query.id,t=this.vuex_CourseOrderNum[s];this.zhifuAddData={courseId:s,orderNumber:t},(0,l.dV)({out_trade_no:t}).then((s=>{if(200==s.code){let t=s.data;this.detailObj=t,this.courseObj=t?.course,this.selectKejieArr=t?.book_time}}))}}},c=o,u=e(1001),n=(0,u.Z)(c,i,a,!1,null,"97a54fe0",null),_=n.exports}}]);