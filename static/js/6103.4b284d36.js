"use strict";(self["webpackChunkframe"]=self["webpackChunkframe"]||[]).push([[6103],{66103:function(e,t,a){a.r(t),a.d(t,{default:function(){return $}});var r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"all"},[t("HomeHeader",{attrs:{topimgIsShow:!1}}),t("div",{staticClass:"mainContent tt"},[e.orderData?t("div",{staticClass:"borderBox"},[t("div",{staticClass:"line"},[t("dl",[t("dt",[e._v(e._s(e.$t("jsdMyYuYueClassrooms.classroom_name")))]),t("dd",[e._v(e._s(e.orderData.classroom_name))])]),t("dl",{staticClass:"flex1"},[t("dt",[e._v(e._s(e.$t("orderDetail.address")))]),t("dd",[e._v(e._s(e.orderData.address))])])]),t("div",{staticClass:"line"},[t("dl",[t("dt",[e._v(e._s(e.$t("orderDetail.order_create_time")))]),t("dd",[e._v(e._s(e.orderData.createtime))])]),t("dl",[t("dt",[e._v(e._s(e.$t("orderDetail.order_no")))]),t("dd",[e._v(e._s(e.orderData.out_trade_no))])]),t("dl",[t("dt",[e._v(e._s(e.$t("orderDetail.pay_time")))]),t("dd",[e._v(e._s(e.orderData.paytime))])])]),t("div",{staticClass:"lastLine"},[t("div",{staticClass:"userBox"},[t("el-avatar",{attrs:{size:"large",src:"tenant"===e.role?e.orderData.teacher_avatar:e.orderData.student_avatar}}),t("div",{staticClass:"nameBox"},[t("div",{staticClass:"name"},[t("span",{staticClass:"userName"},[e._v(e._s("tenant"===e.role?e.orderData.teacher_username:e.orderData.student_username))]),t("span",[e.orderData&&e.classroomDetail?t("contact-button",{attrs:{"custom-data":e.getCustomMessage(),"target-id":"tenant"===e.role?e.orderData.teacher_user_id:e.orderData.student_user_id}}):e._e()],1)]),t("div",[t("span",{staticClass:"titleBtm"},[e._v(e._s(e.$t("tenant"===e.role?"orderDetail.house_owner":"orderDetail.tenant")))])])])],1),t("div",{staticClass:"flexLine"},e._l(e.operations,(function(a,r){return t("div",{key:r},[t("el-button",{attrs:{type:"primary",plain:""},on:{click:function(t){return e.doOperate(a.id)}}},[e._v(e._s(a.value))])],1)})),0)])]):e._e(),t("el-table",{attrs:{"summary-method":e.getSummaries,"show-summary":"",data:e.list}},[t("el-table-column",{attrs:{prop:"date",label:e.$t("orderDetail.date"),width:"200"}}),t("el-table-column",{attrs:{prop:"time",label:e.$t("orderDetail.time")}}),"tenant"===e.role?[t("el-table-column",{attrs:{prop:"price",label:e.$t("orderDetail.actually_paid")},scopedSlots:e._u([{key:"default",fn:function({row:t}){return[e._v("$"+e._s(t.price))]}}],null,!1,2382547165)})]:e._e(),t("el-table-column",{attrs:{label:e.$t("orderDetail.rent")},scopedSlots:e._u([{key:"default",fn:function({row:t}){return[e._v("$"+e._s(t.discounts_price))]}}])}),"tenant"===e.role?[t("el-table-column",{attrs:{prop:"tax_price",label:e.$t("CourseCalendar.taxes")},scopedSlots:e._u([{key:"default",fn:function({row:t}){return[e._v("$"+e._s(t.tax_price))]}}],null,!1,1258724847)}),t("el-table-column",{attrs:{prop:"service_price",label:e.$t("CourseDetail.fuwufei")},scopedSlots:e._u([{key:"default",fn:function({row:t}){return[e._v("$"+e._s(t.service_price))]}}],null,!1,1535347359)})]:e._e(),"owner"===e.role?[t("el-table-column",{attrs:{label:e.$t("orderDetail.commission")},scopedSlots:e._u([{key:"default",fn:function({row:t}){return[e._v("$"+e._s(t.commission_price))]}}],null,!1,2557939119)}),t("el-table-column",{attrs:{label:e.$t("orderDetail.actual_income")},scopedSlots:e._u([{key:"default",fn:function({row:t}){return[e._v("$"+e._s(t.real_price))]}}],null,!1,958759e3)})]:e._e(),t("el-table-column",{attrs:{prop:"status_text",label:e.$t("orderDetail.order_status")}})],2),e.dialogVisible?t("evaluate-classroom-dialog",{attrs:{type:e.role,period_id:e.period_id},on:{complete:function(t){return e.getDetail()}},model:{value:e.dialogVisible,callback:function(t){e.dialogVisible=t},expression:"dialogVisible"}}):e._e()],1),t("HomeFooter")],1)},s=[],o=(a(57658),a(51206)),i=a(73588),l=a(70794),d=a(19053),n=a(18031),u=a(62371),c=a(61271),_={name:"MyCourseOrderDetail",components:{EvaluateClassroomDialog:u.Z,HomeFooter:n.Z,ContactButton:d.Z,HomeHeader:i.Z},data(){return{list:[],orderData:null,contacting:!1,role:"",dialogVisible:!1,period_id:"",classroomDetail:null}},mounted(){this.period_id=this.$route.query.id||"",this.role=this.$route.params.role,this.getDetail()},computed:{BigNumber(){return l.Z},weekDay(){return[this.$t("CourseCalendar.xingqi1"),this.$t("CourseCalendar.xingqi2"),this.$t("CourseCalendar.xingqi3"),this.$t("CourseCalendar.xingqi4"),this.$t("CourseCalendar.xingqi5"),this.$t("CourseCalendar.xingqi6"),this.$t("CourseCalendar.xingqi7")]},operations(){if(!this.orderData?.op)return[];let e=["",this.$t("jsdMyYuYueClassrooms.cancel_order"),this.$t("jsdMyYuYueClassrooms.pay_now"),this.$t("jsdMyYuYueClassrooms.apply_refund"),this.$t("jsdMyYuYueClassrooms.evaluated"),this.$t("jsdMyYuYueClassrooms.refund_agree"),this.$t("jsdMyYuYueClassrooms.refund_deny")];return Object.entries(this.orderData.op).map((([t,a])=>({id:t,value:e[parseInt(t)]||a})))}},methods:{async getDetail(){const e=this.$loading();try{const e=await(0,o.ckc)(this.$route.params.out_trade_no,this.period_id);if(200===e.code){this.orderData=e.data,this.list=e.data?.classroom_date_time?e.data.classroom_date_time.map((e=>{let t=`${e.date} (${this.weekDay[e.week-1]})`,a=`${e.start_time} - ${e.end_time}`;return{...e,date:t,time:a}})):[];const t=await(0,o.pM1)({id:this.orderData.classroom_id});200===t.code&&(this.classroomDetail=t.data)}}catch(t){console.error(t)}e.close()},async doOperate(e){switch(e){case"1":this.cancelOrder();break;case"2":this.goPay();break;case"3":this.$router.push(`/classroom/orders/refund/${this.orderData.out_trade_no}`);break;case"4":this.dialogVisible=!0;break;case"5":this.refundConfirm(!0);break;case"6":this.refundConfirm(!1);break}},async cancelOrder(){try{await this.$confirm(this.$t("jsdMyYuYueClassrooms.cancel_confirm"),this.$t("jsdMyYuYueClassrooms.cancel_order"));const t=this.$loading();try{const e=await(0,o.Ovh)(this.orderData.out_trade_no);200===e.code&&(this.$message.success(this.$t("ShoppingCart.caozuochenggong")),this.getDetail())}catch(e){console.error(e)}t.close()}catch(e){console.error(e)}},goPay(){let{classroom_id:e,out_trade_no:t}=this.orderData;this.$router.push({path:"/ClassRoomXiadan",query:{id:e,out_trade_no:t}})},async refundConfirm(e){try{await this.$confirm(this.$t(e?"jsdMyYuYueClassrooms.refund_agree_tip":"jsdMyYuYueClassrooms.refund_deny_tip"),this.$t("jsdMyYuYueClassrooms.refund_confirm"));const a=this.$loading();try{let t=this.orderData.classroom_date_time.map((e=>e.order_period_id)).join(",");const a=await(0,o.xTe)(this.orderData.out_trade_no,t,e?1:2);200===a.code&&(this.$message.success(this.$t("ShoppingCart.caozuochenggong")),this.getDetail())}catch(t){console.error(t)}a.close()}catch(t){console.error(t)}},getSummaries(e){const{columns:t,data:a}=e;if("tenant"===this.role){let e=a.reduce(((e,t)=>(e[2]=(0,l.Z)(e[2]).plus(t.price),e[3]=(0,l.Z)(e[3]).plus((0,l.Z)(t.discounts_price)),e[4]=(0,l.Z)(e[4]).plus(t.tax_price),e[5]=(0,l.Z)(e[5]).plus(t.service_price),e)),["","",0,0,0,0]);return e=e.map((e=>e?`$${e.toFixed(2)}`:"")),e[0]=this.$t("orderDetail.total"),e}if("owner"===this.role){let e=a.reduce(((e,t)=>(e[2]=(0,l.Z)(e[2]).plus((0,l.Z)(t.discounts_price)),e[3]=(0,l.Z)(e[3]).plus(t.commission_price),e[4]=(0,l.Z)(e[4]).plus(t.real_price),e)),["","",0,0,0]);return e=e.map((e=>e?`$${e.toFixed(2)}`:"")),e[0]=this.$t("orderDetail.total"),e}},getCustomMessage(){if(!this.classroomDetail||!this.orderData)return null;let e={id:"tenant"===this.role?this.orderData.teacher_user_id:this.orderData.student_user_id,message:JSON.stringify({image:this.classroomDetail.images_text[0]||"",name:this.orderData.classroom_name||"",classroom_id:this.orderData.classroom_id},null,0),type:c.dv};return e}}},m=_,h=a(1001),p=(0,h.Z)(m,r,s,!1,null,"1ebd1b21",null),$=p.exports}}]);