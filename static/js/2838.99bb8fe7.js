"use strict";(self["webpackChunkframe"]=self["webpackChunkframe"]||[]).push([[2838],{2838:function(e,t,a){a.r(t),a.d(t,{default:function(){return _}});var r=function(){var e=this,t=e._self._c;return t("div",[t("HomeHeader",{attrs:{topimgIsShow:!1}}),t("div",{staticClass:"mainContent"},[e.orderData?t("div",[t("div",[t("div",[e._v(e._s(e.$t("orderDetail.course_name")))]),t("div",[e._v(e._s(e.orderData.course_name))])]),t("div",[t("div",[e._v(e._s(e.$t("orderDetail.order_create_time")))]),t("div",[e._v(e._s(e.orderData.createtime))])]),t("div",[t("div",[e._v(e._s(e.$t("orderDetail.order_no")))]),t("div",[e._v(e._s(e.orderData.out_trade_no))])]),t("div",[t("div",[e._v(e._s(e.$t("orderDetail.order_no")))]),t("div",[e._v(e._s(e.orderData.paytime))])]),t("div",[t("div",[e._v(e._s(e.$t("orderDetail.order_status")))]),t("div",[e._v(e._s(e.orderData.status_text))])]),t("div",[t("div",[e._v(e._s(e.$t("student"===e.role?"orderDetail.teacher_info":"orderDetail.student_info")))]),t("div",[t("el-avatar",{attrs:{size:"large",src:"student"===e.role?e.orderData.teacher_avatar:e.orderData.student_avatar}}),t("span",[e._v(e._s("student"===e.role?e.orderData.teacher_username:e.orderData.student_username))])],1)]),t("div",e._l(e.operations,(function(a,r){return t("div",{key:r},[t("el-button",{attrs:{type:"primary",plain:""},on:{click:function(t){return e.doOperate(a.id)}}},[e._v(e._s(a.value))])],1)})),0)]):e._e(),t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.list}},[t("el-table-column",{attrs:{prop:"date",label:e.$t("orderDetail.date"),width:"200"}}),t("el-table-column",{attrs:{prop:"time",label:e.$t("orderDetail.time"),width:"180"}}),t("el-table-column",{attrs:{prop:"price",label:e.$t("orderDetail.ori_price"),width:"150"}}),t("el-table-column",{attrs:{prop:"discounts_price",label:e.$t("orderDetail.dis_price"),width:"150"}}),t("el-table-column",{attrs:{prop:"address",label:e.$t("orderDetail.address")}})],1)],1),e.evaluateDialogVisible?t("evaluate-course-dialog",{attrs:{id:this.orderData.order_id},model:{value:e.evaluateDialogVisible,callback:function(t){e.evaluateDialogVisible=t},expression:"evaluateDialogVisible"}}):e._e()],1)},i=[],o=(a(7658),a(1206)),s=a(3654),d=a(5029),l={name:"MyCourseOrderDetail",components:{EvaluateCourseDialog:d.Z,HomeHeader:s.Z},data(){return{list:[],orderData:null,loading:!1,operating:!1,evaluateDialogVisible:!1,role:""}},mounted(){this.role=this.$route.params.role,this.getDetail()},computed:{weekDay(){return[this.$t("CourseCalendar.xingqi1"),this.$t("CourseCalendar.xingqi2"),this.$t("CourseCalendar.xingqi3"),this.$t("CourseCalendar.xingqi4"),this.$t("CourseCalendar.xingqi5"),this.$t("CourseCalendar.xingqi6"),this.$t("CourseCalendar.xingqi7")]},operations(){if(!this.orderData?.op)return[];let e=["",this.$t("mycourse.cancel_order"),this.$t("mycourse.pay_now"),this.$t("mycourse.apply_refund"),this.$t("mycourse.evaluated"),this.$t("mycourse.refund_agree"),this.$t("mycourse.refund_deny")];return Object.entries(this.orderData.op).map((([t,a])=>({id:t,value:e[parseInt(t)]||a})))}},methods:{async getDetail(){try{this.loading=!0;const e=await(0,o.mh)(this.$route.params.out_trade_no);200===e.code&&(this.orderData=e.data,this.list=e.data?.course_date_time?e.data.course_date_time.map((e=>{let t=`${e.date} (${this.weekDay[e.week]})`,a=`${e.start_time} - ${e.end_time}`;return{...e,date:t,time:a}})):[])}catch(e){console.error(e)}this.loading=!1},async doOperate(e){switch(e){case"1":this.cancelOrder();break;case"2":this.goPay();break;case"3":this.$router.push(`/student/course/orders/refund/${this.orderData.out_trade_no}`);break;case"4":this.evaluateDialogVisible=!0;break;case"5":break;case"6":break}},async cancelOrder(){try{await this.$confirm(this.$t("mycourse.cancel_confirm"),this.$t("mycourse.cancel_order"));const t=this.$loading();try{const e=await(0,o.eh)(this.orderData.out_trade_no);200===e.code&&(this.$message.success(this.$t("ShoppingCart.caozuochenggong")),this.getList())}catch(e){console.error(e)}t.close()}catch(e){console.error(e)}},goPay(){let{course_id:e,out_trade_no:t}=this.orderData;this.$router.push({path:"/CourseXiadan",query:{id:e,out_trade_no:t}})}}},n=l,u=a(1001),c=(0,u.Z)(n,r,i,!1,null,"02b50b26",null),_=c.exports}}]);