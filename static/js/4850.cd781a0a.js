"use strict";(self["webpackChunkframe"]=self["webpackChunkframe"]||[]).push([[4850],{4850:function(e,t,r){r.r(t),r.d(t,{default:function(){return p}});var a=function(){var e=this,t=e._self._c;return t("div",[t("HomeHeader",{attrs:{topimgIsShow:!1}}),t("div",{staticClass:"mainContent"},[e.orderData?t("div",{staticClass:"borderBox"},[t("dl",[t("dt",[e._v(e._s(e.$t("orderDetail.course_name")))]),t("dd",[e._v(e._s(e.orderData.course_name))])]),t("div",{staticClass:"line"},[t("dl",[t("dt",[e._v(e._s(e.$t("orderDetail.order_create_time")))]),t("dd",[e._v(e._s(e.orderData.createtime))])]),t("dl",[t("dt",[e._v(e._s(e.$t("orderDetail.order_no")))]),t("dd",[e._v(e._s(e.orderData.out_trade_no))])]),t("dl",[t("dt",[e._v(e._s(e.$t("orderDetail.pay_time")))]),t("dd",[e._v(e._s(e.orderData.paytime))])]),t("dl",[t("dt",[e._v(e._s(e.$t("orderDetail.order_status")))]),t("dd",[e._v(e._s(e.orderData.status_text))])])]),t("div",{staticClass:"lastLine"},[t("div",{staticClass:"userBox"},[t("el-avatar",{attrs:{size:"large",src:"student"===e.role?e.orderData.teacher_avatar:e.orderData.student_avatar}}),t("div",{staticClass:"nameBox"},[t("div",{staticClass:"name"},[t("span",{staticClass:"userName"},[e._v(e._s("student"===e.role?e.orderData.teacher_username:e.orderData.student_username))]),t("span",[t("contact-button",{attrs:{"target-id":"student"===e.role?e.orderData.teacher_user_id:e.orderData.student_user_id}})],1)]),t("div",[t("span",{staticClass:"titleBtm"},[e._v(e._s(e.$t("student"===e.role?"orderDetail.teacher_info":"orderDetail.student_info")))])])])],1),t("div",{staticClass:"flexLine"},e._l(e.operations,(function(r,a){return t("div",{key:a},[t("el-button",{attrs:{type:"primary",plain:""},on:{click:function(t){return e.doOperate(r.id)}}},[e._v(e._s(r.value))])],1)})),0)])]):e._e(),t("el-table",{attrs:{"summary-method":e.getSummaries,"show-summary":"",data:e.list}},[t("el-table-column",{attrs:{prop:"date",label:e.$t("orderDetail.date"),width:"200"}}),t("el-table-column",{attrs:{prop:"time",label:e.$t("orderDetail.time"),width:"160"}}),t("el-table-column",{attrs:{prop:"price",label:e.$t("CourseDetail.course_fee"),width:"120"},scopedSlots:e._u([{key:"default",fn:function({row:t}){return[e._v("$"+e._s(t.price))]}}])}),t("el-table-column",{attrs:{label:e.$t("orderDetail.dis_price"),width:"120"},scopedSlots:e._u([{key:"default",fn:function({row:t}){return[e._v("$"+e._s(t.discounts_price))]}}])}),t("el-table-column",{attrs:{prop:"tax_price",label:e.$t("CourseCalendar.taxes"),width:"120"},scopedSlots:e._u([{key:"default",fn:function({row:t}){return[e._v("$"+e._s(t.tax_price))]}}])}),t("el-table-column",{attrs:{prop:"service_price",label:e.$t("CourseDetail.fuwufei"),width:"120"},scopedSlots:e._u([{key:"default",fn:function({row:t}){return[e._v("$"+e._s(t.service_price))]}}])}),t("el-table-column",{attrs:{prop:"address",label:e.$t("orderDetail.address")}})],1)],1),e.evaluateDialogVisible?t("evaluate-course-dialog",{attrs:{period_id:this.period_id},on:{complete:e.getDetail},model:{value:e.evaluateDialogVisible,callback:function(t){e.evaluateDialogVisible=t},expression:"evaluateDialogVisible"}}):e._e()],1)},s=[],i=(r(7658),r(122)),o=r(8699),d=r(1571),n=r(794),l=r(2675),c={name:"MyCourseOrderDetail",components:{ContactButton:l.Z,EvaluateCourseDialog:d.Z,HomeHeader:o.Z},data(){return{list:[],orderData:null,contacting:!1,evaluateDialogVisible:!1,role:"",period_id:""}},mounted(){this.period_id=this.$route.query.id||"",this.role=this.$route.params.role,this.getDetail()},computed:{BigNumber(){return n.Z},weekDay(){return[this.$t("CourseCalendar.xingqi1"),this.$t("CourseCalendar.xingqi2"),this.$t("CourseCalendar.xingqi3"),this.$t("CourseCalendar.xingqi4"),this.$t("CourseCalendar.xingqi5"),this.$t("CourseCalendar.xingqi6"),this.$t("CourseCalendar.xingqi7")]},operations(){if(!this.orderData?.op)return[];let e=["",this.$t("mycourse.cancel_order"),this.$t("mycourse.pay_now"),this.$t("mycourse.apply_refund"),this.$t("mycourse.evaluated"),this.$t("mycourse.refund_agree"),this.$t("mycourse.refund_deny")];return Object.entries(this.orderData.op).map((([t,r])=>({id:t,value:e[parseInt(t)]||r})))}},methods:{async getDetail(){const e=this.$loading();try{const e=await(0,i.mhX)(this.$route.params.out_trade_no,this.period_id);200===e.code&&(this.orderData=e.data,this.list=e.data?.course_date_time?e.data.course_date_time.map((e=>{let t=`${e.date} (${this.weekDay[e.week]})`,r=`${e.start_time} - ${e.end_time}`;return{...e,date:t,time:r}})):[])}catch(t){console.error(t)}e.close()},async doOperate(e){switch(e){case"1":this.cancelOrder();break;case"2":this.goPay();break;case"3":this.$router.push(`/course/orders/refund/${this.orderData.out_trade_no}`);break;case"4":this.evaluateDialogVisible=!0;break;case"5":this.refundConfirm(!0);break;case"6":this.refundConfirm(!1);break}},async cancelOrder(){try{await this.$confirm(this.$t("mycourse.cancel_confirm"),this.$t("mycourse.cancel_order"));const t=this.$loading();try{const e=await(0,i.ehR)(this.orderData.out_trade_no);200===e.code&&(this.$message.success(this.$t("ShoppingCart.caozuochenggong")),this.getList())}catch(e){console.error(e)}t.close()}catch(e){console.error(e)}},goPay(){let{course_id:e,out_trade_no:t}=this.orderData;this.$router.push({path:"/CourseXiadan",query:{id:e,out_trade_no:t}})},async contact(){console.log(this.role);let e="student"===this.role?this.orderData.teacher_user_id:this.orderData.student_user_id;if(e){this.contacting=!0;try{const t=await(0,i.d1V)({id:e});200===t.code&&await this.$router.push({path:"/message",query:{targetId:e}})}catch(t){console.error(t)}this.contacting=!1}},async refundConfirm(e){try{await this.$confirm(this.$t(e?"mycourse.refund_agree_tip":"mycourse.refund_deny_tip"),this.$t("mycourse.refund_confirm"));const r=this.$loading();try{const t=await(0,i.Pvt)(this.orderData.out_trade_no,e?1:2);200===t.code&&(this.$message.success(this.$t("ShoppingCart.caozuochenggong")),this.getList())}catch(t){console.error(t)}r.close()}catch(t){console.error(t)}},getSummaries(e){const{columns:t,data:r}=e;let a=r.reduce(((e,t)=>(e[2]=(0,n.Z)(e[2]).plus(t.price),e[3]=(0,n.Z)(e[3]).plus(t.discounts_price),e[4]=(0,n.Z)(e[4]).plus(t.tax_price),e[5]=(0,n.Z)(e[5]).plus(t.service_price),e)),["","",0,0,0,0,""]);return a=a.map((e=>e?`$${e.toFixed(2)}`:"")),a[0]=this.$t("orderDetail.total"),a}}},u=c,_=r(1001),h=(0,_.Z)(u,a,s,!1,null,"85faa5c2",null),p=h.exports}}]);