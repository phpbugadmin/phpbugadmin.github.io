"use strict";(self["webpackChunkframe"]=self["webpackChunkframe"]||[]).push([[888],{888:function(t,e,r){r.r(e),r.d(e,{default:function(){return p}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"all"},[e("HomeHeader",{attrs:{topimgIsShow:!1}}),e("div",{staticClass:"mainContent tt"},[t.orderData?e("div",{staticClass:"borderBox"},[e("div",{staticClass:"line"},[e("dl",[e("dt",[t._v(t._s(t.$t("jsdMyYuYueClassrooms.classroom_name")))]),e("dd",[t._v(t._s(t.orderData.classroom_name))])]),e("dl",{staticClass:"flex1"},[e("dt",[t._v(t._s(t.$t("orderDetail.address")))]),e("dd",[t._v(t._s(t.orderData.address))])])]),e("div",{staticClass:"line"},[e("dl",[e("dt",[t._v(t._s(t.$t("orderDetail.order_create_time")))]),e("dd",[t._v(t._s(t.orderData.createtime))])]),e("dl",[e("dt",[t._v(t._s(t.$t("orderDetail.order_no")))]),e("dd",[t._v(t._s(t.orderData.out_trade_no))])]),e("dl",[e("dt",[t._v(t._s(t.$t("orderDetail.pay_time")))]),e("dd",[t._v(t._s(t.orderData.paytime))])])]),e("div",{staticClass:"lastLine"},[e("div",{staticClass:"userBox"},[e("el-avatar",{attrs:{size:"large",src:"tenant"===t.role?t.orderData.teacher_avatar:t.orderData.student_avatar}}),e("div",{staticClass:"nameBox"},[e("div",{staticClass:"name"},[e("span",{staticClass:"userName"},[t._v(t._s("tenant"===t.role?t.orderData.teacher_username:t.orderData.student_username))]),e("span",[e("contact-button",{attrs:{"target-id":"tenant"===t.role?t.orderData.teacher_user_id:t.orderData.student_user_id}})],1)]),e("div",[e("span",{staticClass:"titleBtm"},[t._v(t._s(t.$t("tenant"===t.role?"orderDetail.house_owner":"orderDetail.tenant")))])])])],1),e("div",{staticClass:"flexLine"},t._l(t.operations,(function(r,a){return e("div",{key:a},[e("el-button",{attrs:{type:"primary",plain:""},on:{click:function(e){return t.doOperate(r.id)}}},[t._v(t._s(r.value))])],1)})),0)])]):t._e(),e("el-table",{attrs:{"summary-method":t.getSummaries,"show-summary":"",data:t.list}},[e("el-table-column",{attrs:{prop:"date",label:t.$t("orderDetail.date"),width:"200"}}),e("el-table-column",{attrs:{prop:"time",label:t.$t("orderDetail.time")}}),e("el-table-column",{attrs:{prop:"price",label:t.$t("orderDetail.ori_price")},scopedSlots:t._u([{key:"default",fn:function({row:e}){return[t._v("$"+t._s(e.price))]}}])}),e("el-table-column",{attrs:{label:t.$t("orderDetail.dis_price")},scopedSlots:t._u([{key:"default",fn:function({row:e}){return[t._v("$"+t._s(e.discounts_price))]}}])}),"tenant"===t.role?[e("el-table-column",{attrs:{prop:"tax_price",label:t.$t("CourseCalendar.taxes")},scopedSlots:t._u([{key:"default",fn:function({row:e}){return[t._v("$"+t._s(e.tax_price))]}}],null,!1,1258724847)}),e("el-table-column",{attrs:{prop:"service_price",label:t.$t("CourseDetail.fuwufei")},scopedSlots:t._u([{key:"default",fn:function({row:e}){return[t._v("$"+t._s(e.service_price))]}}],null,!1,1535347359)})]:t._e(),"owner"===t.role?[e("el-table-column",{attrs:{prop:"tax_price",label:t.$t("orderDetail.commission")},scopedSlots:t._u([{key:"default",fn:function({row:e}){return[t._v("$"+t._s(e.commission_price))]}}],null,!1,2557939119)})]:t._e(),e("el-table-column",{attrs:{prop:"status_text",label:t.$t("orderDetail.order_status")}})],2)],1),e("HomeFooter")],1)},s=[],o=(r(7658),r(1206)),i=r(4631),l=r(794),n=r(1737),d=r(8550),u={name:"MyCourseOrderDetail",components:{HomeFooter:d.Z,ContactButton:n.Z,HomeHeader:i.Z},data(){return{list:[],orderData:null,contacting:!1,role:""}},mounted(){this.role=this.$route.params.role,this.getDetail()},computed:{BigNumber(){return l.Z},weekDay(){return[this.$t("CourseCalendar.xingqi1"),this.$t("CourseCalendar.xingqi2"),this.$t("CourseCalendar.xingqi3"),this.$t("CourseCalendar.xingqi4"),this.$t("CourseCalendar.xingqi5"),this.$t("CourseCalendar.xingqi6"),this.$t("CourseCalendar.xingqi7")]},operations(){if(!this.orderData?.op)return[];let t=["",this.$t("jsdMyYuYueClassrooms.cancel_order"),this.$t("jsdMyYuYueClassrooms.pay_now"),this.$t("jsdMyYuYueClassrooms.apply_refund"),this.$t("jsdMyYuYueClassrooms.evaluated"),this.$t("jsdMyYuYueClassrooms.refund_agree"),this.$t("jsdMyYuYueClassrooms.refund_deny")];return Object.entries(this.orderData.op).map((([e,r])=>({id:e,value:t[parseInt(e)]||r})))}},methods:{async getDetail(){const t=this.$loading();try{const t=this.$route.query.id||"",e=await(0,o.ckc)(this.$route.params.out_trade_no,t);200===e.code&&(this.orderData=e.data,this.list=e.data?.classroom_date_time?e.data.classroom_date_time.map((t=>{let e=`${t.date} (${this.weekDay[t.week-1]})`,r=`${t.start_time} - ${t.end_time}`;return{...t,date:e,time:r}})):[])}catch(e){console.error(e)}t.close()},async doOperate(t){switch(t){case"1":this.cancelOrder();break;case"2":this.goPay();break;case"3":this.$router.push(`/classroom/orders/refund/${this.orderData.out_trade_no}`);break;case"4":break;case"5":this.refundConfirm(!0);break;case"6":this.refundConfirm(!1);break}},async cancelOrder(){try{await this.$confirm(this.$t("jsdMyYuYueClassrooms.cancel_confirm"),this.$t("jsdMyYuYueClassrooms.cancel_order"));const e=this.$loading();try{const t=await(0,o.Ovh)(this.orderData.out_trade_no);200===t.code&&(this.$message.success(this.$t("ShoppingCart.caozuochenggong")),this.getList())}catch(t){console.error(t)}e.close()}catch(t){console.error(t)}},goPay(){let{classroom_id:t,out_trade_no:e}=this.orderData;this.$router.push({path:"/ClassRoomXiadan",query:{id:t,out_trade_no:e}})},async refundConfirm(t){try{await this.$confirm(this.$t(t?"jsdMyYuYueClassrooms.refund_agree_tip":"jsdMyYuYueClassrooms.refund_deny_tip"),this.$t("jsdMyYuYueClassrooms.refund_confirm"));const r=this.$loading();try{const e=await(0,o.xTe)(this.orderData.out_trade_no,t?1:2);200===e.code&&(this.$message.success(this.$t("ShoppingCart.caozuochenggong")),this.getList())}catch(e){console.error(e)}r.close()}catch(e){console.error(e)}},getSummaries(t){const{columns:e,data:r}=t;if("tenant"===this.role){let t=r.reduce(((t,e)=>(t[2]=(0,l.Z)(t[2]).plus(e.price),t[3]=(0,l.Z)(t[3]).plus((0,l.Z)(e.discounts_price)),t[4]=(0,l.Z)(t[4]).plus(e.tax_price),t[5]=(0,l.Z)(t[5]).plus(e.service_price),t)),["","",0,0,0,0]);return t=t.map((t=>t?`$${t.toFixed(2)}`:"")),t[0]=this.$t("orderDetail.total"),t}if("owner"===this.role){let t=r.reduce(((t,e)=>(t[2]=(0,l.Z)(t[2]).plus(e.price),t[3]=(0,l.Z)(t[3]).plus((0,l.Z)(e.discounts_price)),t[4]=(0,l.Z)(t[4]).plus(e.commission_price),t)),["","",0,0,0]);return t=t.map((t=>t?`$${t.toFixed(2)}`:"")),t[0]=this.$t("orderDetail.total"),t}}}},c=u,_=r(1001),m=(0,_.Z)(c,a,s,!1,null,"ca966486",null),p=m.exports}}]);