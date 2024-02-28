"use strict";(self["webpackChunkframe"]=self["webpackChunkframe"]||[]).push([[4710],{74710:function(e,t,a){a.r(t),a.d(t,{default:function(){return D}});var r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("HomeHeader",{attrs:{topimgIsShow:!1}}),t("div",{staticClass:"mainContent"},[t("div",{staticClass:"borderBox"},[t("div",{staticClass:"title"},[e._v(e._s(e.$t("mycourse.refund_tip")))]),t("div",{staticClass:"tips"},[e._v(e._s(e.$t("mycourse.refund_tip_content")))])]),t("div",[t("div",{staticClass:"titleBtm"},[e._v(e._s(e.$t("mycourse.refund_course")))]),t("el-table",{attrs:{data:e.list},on:{"selection-change":e.handleSelectionChange}},[t("el-table-column",{attrs:{prop:"date",label:e.$t("orderDetail.date"),width:"200"}}),t("el-table-column",{attrs:{prop:"time",label:e.$t("orderDetail.time"),width:"160"}}),t("el-table-column",{attrs:{prop:"price",label:e.$t("orderDetail.actually_paid"),width:"120"},scopedSlots:e._u([{key:"default",fn:function({row:t}){return[e._v("$"+e._s(t.price))]}}])}),t("el-table-column",{attrs:{label:e.$t("orderDetail.course_fee"),width:"120"},scopedSlots:e._u([{key:"default",fn:function({row:t}){return[e._v("$"+e._s(t.discounts_price))]}}])}),t("el-table-column",{attrs:{prop:"tax_price",label:e.$t("CourseCalendar.taxes"),width:"120"},scopedSlots:e._u([{key:"default",fn:function({row:t}){return[e._v("$"+e._s(t.tax_price))]}}])}),t("el-table-column",{attrs:{prop:"service_price",label:e.$t("CourseDetail.fuwufei"),width:"120"},scopedSlots:e._u([{key:"default",fn:function({row:t}){return[e._v("$"+e._s(t.service_price))]}}])}),t("el-table-column",{attrs:{prop:"refund_price",label:e.$t("orderDetail.refund_price"),width:"120"},scopedSlots:e._u([{key:"default",fn:function({row:a}){return[t("div",[e._v("$"+e._s(e.BigNumber(a.refund_price).toFixed(2)))])]}}])}),t("el-table-column",{attrs:{prop:"address",label:e.$t("orderDetail.address")}})],1)],1),t("div",[t("el-form",{attrs:{"label-position":"top",model:e.formData}},[t("el-form-item",{attrs:{label:e.$t("mycourse.explain")}},[t("el-input",{attrs:{maxlength:255,"show-word-limit":"",type:"textarea",rows:5},model:{value:e.formData.remark,callback:function(t){e.$set(e.formData,"remark",t)},expression:"formData.remark"}})],1),t("el-form-item",{attrs:{label:e.$t("mycourse.phone")}},[t("el-input",{attrs:{maxlength:20},model:{value:e.formData.phone,callback:function(t){e.$set(e.formData,"phone",t)},expression:"formData.phone"}})],1)],1)],1),t("el-button",{attrs:{type:"primary",disabled:e.disabled},on:{click:e.refund}},[e._v(e._s(e.$t("mycourse.apply_refund")))])],1),e.refundDialogVisible?t("refund-confirm-dialog",{attrs:{"refund-data":e.refundData},model:{value:e.refundDialogVisible,callback:function(t){e.refundDialogVisible=t},expression:"refundDialogVisible"}}):e._e()],1)},s=[],i=a(51206),o=a(64631),n=function(){var e=this,t=e._self._c;return t("el-dialog",{staticClass:"dialog",attrs:{title:e.$t("mycourse.refund_apply"),visible:e.dialogVisible,width:"400px",center:""},on:{"update:visible":function(t){e.dialogVisible=t},close:()=>e.$emit("input",!1)}},[t("div",{staticClass:"container"},[t("div",{staticClass:"content"},[t("div",{staticClass:"row"},[t("span",[e._v(e._s(e.$t("mycourse.refund_course_count")))]),t("span",{staticClass:"value"},[e._v(e._s(e.courseCount))])]),t("div",{staticClass:"row"},[t("span",[e._v(e._s(e.$t("mycourse.refund_amount")))]),t("span",{staticClass:"value"},[e._v("$"+e._s(e.totalFee))])]),t("el-button",{staticClass:"btn",attrs:{loading:e.submitting,type:"primary"},on:{click:e.doRefund}},[e._v(e._s(e.$t("mycourse.submit_refund")))])],1)])])},l=[],u=a(70794),d={name:"RefundConfirmDialog",props:["value","refundData"],data(){return{dialogVisible:!1,submitting:!1}},created(){this.dialogVisible=this.value},watch:{value(e){this.dialogVisible=e}},computed:{courseCount(){return this.refundData?.courses?this.refundData.courses.length:0},totalFee(){return(this.refundData?.courses?this.refundData.courses.reduce(((e,t)=>e.plus(t.refund_price)),(0,u.Z)(0)):0).toFixed(2)},periodIds(){return this.refundData?.courses?this.refundData.courses.map((e=>e.order_period_id)).join(","):""}},methods:{async doRefund(){const{out_trade_no:e,remark:t,phone:a}=this.refundData;this.submitting=!0;try{const r=await(0,i.bmv)(e,this.periodIds,t,a);200===r.code&&(this.$message.success(this.$t("mycourse.refund_request_submitted")),this.dialogVisible=!1,this.$router.go(-1))}catch(r){console.error(r)}this.submitting=!1}}},c=d,f=a(1001),m=(0,f.Z)(c,n,l,!1,null,"b3a72a22",null),p=m.exports,_={name:"CourseOrderRefund",components:{RefundConfirmDialog:p,HomeHeader:o.Z},data(){return{formData:{remark:"",phone:""},orderData:null,list:[],refundDialogVisible:!1,refundCourses:[],refundData:null}},computed:{BigNumber(){return u.Z},weekDay(){return[this.$t("CourseCalendar.xingqi1"),this.$t("CourseCalendar.xingqi2"),this.$t("CourseCalendar.xingqi3"),this.$t("CourseCalendar.xingqi4"),this.$t("CourseCalendar.xingqi5"),this.$t("CourseCalendar.xingqi6"),this.$t("CourseCalendar.xingqi7")]},disabled(){return!this.formData.remark||!this.formData.phone}},mounted(){this.getDetail()},methods:{async getDetail(){const e=this.$loading();try{const e=await(0,i.w08)(this.$route.params.out_trade_no);200===e.code&&(this.orderData=e.data,this.list=e.data?.course_date_time?e.data.course_date_time.map((e=>{let t=`${e.date} (${this.weekDay[e.week]})`,a=`${e.start_time} - ${e.end_time}`;return{...e,date:t,time:a}})):[],console.log(this.list))}catch(t){console.error(t)}e.close()},refund(){this.refundData={...this.formData,out_trade_no:this.orderData.out_trade_no,courses:this.orderData.course_date_time},this.refundDialogVisible=!0},handleSelectionChange(e){this.refundCourses=e}}},h=_,b=(0,f.Z)(h,r,s,!1,null,"11d91726",null),D=b.exports}}]);