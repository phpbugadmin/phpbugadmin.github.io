"use strict";(self["webpackChunkframe"]=self["webpackChunkframe"]||[]).push([[5910],{5910:function(t,e,a){a.r(e),a.d(e,{default:function(){return u}});var s=function(){var t=this,e=t._self._c;return e("div",[e("HomeHeader",{attrs:{topimgIsShow:!1}}),e("div",{staticClass:"mainContent"},[t.orderData?e("div",{staticClass:"borderBox"},[e("dl",[e("dt",[t._v(t._s(t.$t("jsdMyYuYueClassrooms.classroom_name")))]),e("dd",[t._v(t._s(t.orderData.classroom_name))])]),e("div",{staticClass:"line"},[e("dl",[e("dt",[t._v(t._s(t.$t("orderDetail.order_create_time")))]),e("dd",[t._v(t._s(t.orderData.createtime))])]),e("dl",[e("dt",[t._v(t._s(t.$t("orderDetail.order_no")))]),e("dd",[t._v(t._s(t.orderData.out_trade_no))])]),e("dl",[e("dt",[t._v(t._s(t.$t("orderDetail.pay_time")))]),e("dd",[t._v(t._s(t.orderData.paytime))])]),e("dl",[e("dt",[t._v(t._s(t.$t("orderDetail.order_status")))]),e("dd",[t._v(t._s(t.orderData.status_text))])])]),e("div",{staticClass:"lastLine"},[e("div",{staticClass:"userBox"},[e("el-avatar",{attrs:{size:"large",src:"tenant"===t.role?t.orderData.teacher_avatar:t.orderData.student_avatar}}),e("div",{staticClass:"nameBox"},[e("div",[e("span",{staticClass:"userName"},[t._v(t._s("tenant"===t.role?t.orderData.teacher_username:t.orderData.student_username))]),"tenant"===t.role?e("span",[e("i",{staticClass:"iconBox el-icon-chat-dot-round",on:{click:t.contactHouseOwner}})]):t._e()]),e("div",[e("span",{staticClass:"titleBtm"},[t._v(t._s(t.$t("tenant"===t.role?"orderDetail.house_owner":"orderDetail.tenant")))])])])],1),e("div",{staticClass:"flexLine"},t._l(t.operations,(function(a,s){return e("div",{key:s},[e("el-button",{attrs:{type:"primary",plain:""},on:{click:function(e){return t.doOperate(a.id)}}},[t._v(t._s(a.value))])],1)})),0)])]):t._e(),e("el-table",{attrs:{data:t.list}},[e("el-table-column",{attrs:{prop:"date",label:t.$t("orderDetail.date"),width:"200"}}),e("el-table-column",{attrs:{prop:"time",label:t.$t("orderDetail.time"),width:"180"}}),e("el-table-column",{attrs:{prop:"refund_price",label:t.$t("orderDetail.refund_price"),width:"150"}})],1)],1)],1)},r=[],o=(a(7658),a(1206)),i=a(5329),n={name:"MyCourseOrderDetail",components:{HomeHeader:i.Z},data(){return{list:[],orderData:null,contacting:!1,role:""}},mounted(){this.role=this.$route.params.role,this.getDetail()},computed:{weekDay(){return[this.$t("CourseCalendar.xingqi1"),this.$t("CourseCalendar.xingqi2"),this.$t("CourseCalendar.xingqi3"),this.$t("CourseCalendar.xingqi4"),this.$t("CourseCalendar.xingqi5"),this.$t("CourseCalendar.xingqi6"),this.$t("CourseCalendar.xingqi7")]},operations(){if(!this.orderData?.op)return[];let t=["",this.$t("jsdMyYuYueClassrooms.cancel_order"),this.$t("jsdMyYuYueClassrooms.pay_now"),this.$t("jsdMyYuYueClassrooms.apply_refund"),this.$t("jsdMyYuYueClassrooms.evaluated"),this.$t("jsdMyYuYueClassrooms.refund_agree"),this.$t("jsdMyYuYueClassrooms.refund_deny")];return Object.entries(this.orderData.op).map((([e,a])=>({id:e,value:t[parseInt(e)]||a})))}},methods:{async getDetail(){const t=this.$loading();try{const t=await(0,o.ckc)(this.$route.params.out_trade_no);200===t.code&&(this.orderData=t.data,this.list=t.data?.classroom_date_time?t.data.classroom_date_time.map((t=>{let e=`${t.date} (${this.weekDay[t.week]})`,a=`${t.start_time} - ${t.end_time}`;return{...t,date:e,time:a}})):[])}catch(e){console.error(e)}t.close()},async doOperate(t){switch(t){case"1":this.cancelOrder();break;case"2":this.goPay();break;case"3":this.$router.push(`/classroom/orders/refund/${this.orderData.out_trade_no}`);break;case"4":break;case"5":this.refundConfirm(!0);break;case"6":this.refundConfirm(!1);break}},async cancelOrder(){try{await this.$confirm(this.$t("jsdMyYuYueClassrooms.cancel_confirm"),this.$t("jsdMyYuYueClassrooms.cancel_order"));const e=this.$loading();try{const t=await(0,o.Ovh)(this.orderData.out_trade_no);200===t.code&&(this.$message.success(this.$t("ShoppingCart.caozuochenggong")),this.getList())}catch(t){console.error(t)}e.close()}catch(t){console.error(t)}},goPay(){let{classroom_id:t,out_trade_no:e}=this.orderData;this.$router.push({path:"/ClassRoomXiadan",query:{id:t,out_trade_no:e}})},async contactHouseOwner(){console.log(this.orderData);let t=this.orderData.teacher_user_id;if(t){this.contacting=!0;try{const e=await(0,o.d1V)({id:t});200===e.code&&await this.$router.push({path:"/message",query:{targetId:t}})}catch(e){console.error(e)}this.contacting=!1}},async refundConfirm(t){try{await this.$confirm(this.$t(t?"jsdMyYuYueClassrooms.refund_agree_tip":"jsdMyYuYueClassrooms.refund_deny_tip"),this.$t("jsdMyYuYueClassrooms.refund_confirm"));const a=this.$loading();try{const e=await(0,o.xTe)(this.orderData.out_trade_no,t?1:2);200===e.code&&(this.$message.success(this.$t("ShoppingCart.caozuochenggong")),this.getList())}catch(e){console.error(e)}a.close()}catch(e){console.error(e)}}}},d=n,l=a(1001),c=(0,l.Z)(d,s,r,!1,null,"785869a4",null),u=c.exports}}]);