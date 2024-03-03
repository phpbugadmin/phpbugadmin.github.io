"use strict";(self["webpackChunkframe"]=self["webpackChunkframe"]||[]).push([[7169],{27169:function(e,t,s){s.r(t),s.d(t,{default:function(){return R}});var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("HomeHeader",{attrs:{topimgIsShow:!1}}),t("div",{staticClass:"listCon mainContent"},[t("div",{staticClass:"center"},[t("div",{staticClass:"topTitle"},[e._v(e._s(e.$t("mycourse.my_course_orders")))]),t("el-tabs",{staticClass:"tab-list",model:{value:e.currentTab,callback:function(t){e.currentTab=t},expression:"currentTab"}},e._l(e.tabList,(function(s){return t("el-tab-pane",{key:s.status,attrs:{name:s.name,status:s.status}},[t("template",{slot:"label"},[t("span",[e._v(e._s(s.lable))])])],2)})),1),e._l(e.tabList,(function(s){return t("div",{key:s.name},[e.currentTab===s.name?t("course-order-list",{attrs:{status:s.status}}):e._e()],1)}))],2)])],1)},i=[],r=(s(46229),s(17330),s(62062),s(38864)),l=s(18031),o=(s(57658),function(){var e=this,t=e._self._c;return t("div",[t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"table",staticStyle:{width:"100%"},attrs:{data:e.list}},[t("el-table-column",{attrs:{width:"100"},scopedSlots:e._u([{key:"default",fn:function({row:s}){return[t("img",{staticClass:"img",attrs:{src:s.course.course_images_text[0]},on:{click:function(t){return e.goOrderDetail(s)}}})]}}])}),t("el-table-column",{attrs:{label:e.$t("mycourse.course_name"),"header-align":"center",align:"center"},scopedSlots:e._u([{key:"default",fn:function({row:s}){return[t("el-link",{staticClass:"name",on:{click:function(t){return e.toCourse(s)}}},[e._v(e._s(s.course.name_arr))])]}}])}),t("el-table-column",{attrs:{label:e.$t("mycourse.course_time"),"header-align":"center",align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function({row:s}){return[t("el-popover",{attrs:{placement:"top-start",disabled:s.book_time_arr.length<=1,trigger:"hover"}},[t("el-table",{attrs:{data:s.book_time_arr,size:"mini",stripe:"","show-header":!1,"max-height":"180"}},[t("el-table-column",{attrs:{align:"center",width:"180"},scopedSlots:e._u([{key:"default",fn:function({row:s}){return[t("span",[e._v(e._s(s))])]}}],null,!0)})],1),t("div",{staticClass:"time",attrs:{slot:"reference"},slot:"reference"},[t("span",[e._v(e._s(s.book_time_arr[0]))]),t("span",{staticClass:"rht"},[s.book_time_arr.length>1?t("i",{staticClass:"el-icon-arrow-right"}):e._e()])])],1)]}}])}),t("el-table-column",{attrs:{label:e.$t("mycourse.count"),"header-align":"center",align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function({row:s}){return[t("span",{staticClass:"count"},[e._v("×"+e._s(s.book_time_arr.length))])]}}])}),t("el-table-column",{attrs:{label:e.$t("mycourse.status"),"header-align":"center",align:"center",width:"150"},scopedSlots:e._u([{key:"default",fn:function({row:s}){return[t("div",{staticClass:"state",class:`status${s.status}`},[e._v(e._s(s.status_text))])]}}])}),t("el-table-column",{attrs:{label:e.$t("orderDetail.course_fee"),"header-align":"center",align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function({row:s}){return[t("div",{staticClass:"price"},[e._v("$"+e._s(s.discounts_price))])]}}])}),t("el-table-column",{attrs:{label:e.$t("mycourse.student"),"header-align":"center",align:"center"},scopedSlots:e._u([{key:"default",fn:function({row:s}){return[t("div",{staticClass:"studentBox"},[t("div",{staticClass:"flexLine"},[t("div",[t("img",{staticClass:"avatar",attrs:{src:s.user_avatar},on:{click:function(t){return e.$router.push(`/user/student/${s.user_id}`)}}}),t("div",[t("span",[e._v(e._s(s.user_name))])])]),t("contact-button",{attrs:{type:"1","target-id":s.user_id}})],1)])]}}])}),t("el-table-column",{attrs:{label:e.$t("mycourse.order_time"),"header-align":"center",align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function({row:s}){return[t("div",{staticClass:"timeOrder"},[e._v(e._s(e.$utils.formatDatetime(s.createtime)))])]}}])}),t("el-table-column",{attrs:{label:e.$t("mycourse.operate"),"header-align":"center",align:"center",width:"200"},scopedSlots:e._u([{key:"default",fn:function({row:s}){return[t("div",{staticClass:"btn btnGroup"},e._l(e.getOperate(s.op),(function(a,i){return t("el-button",{key:i,attrs:{type:"primary",plain:"",size:"mini"},on:{click:function(t){return e.doOperate(a.id,s)}}},[e._v(" "+e._s(a.value)+" ")])})),1)]}}])})],1),t("div",{staticClass:"fenyeCon"},[t("el-pagination",{staticClass:"fenye",attrs:{"page-size":e.query.row,total:e.total,background:"",layout:"prev, pager, next"},on:{"current-change":e.pageChange}})],1),e.dialogVisible?t("refund-course-process-dialog",{attrs:{order:e.currentRefundItem},on:{complete:e.getList},model:{value:e.dialogVisible,callback:function(t){e.dialogVisible=t},expression:"dialogVisible"}}):e._e(),e.evaluateDialogVisible?t("evaluate-course-dialog",{attrs:{type:"teacher",period_id:e.currentEvaluateItem.period_id},on:{complete:e.getList},model:{value:e.evaluateDialogVisible,callback:function(t){e.evaluateDialogVisible=t},expression:"evaluateDialogVisible"}}):e._e(),e.handleSwapVisible?t("swap-course-handle-dialog",{attrs:{course:e.handleSwapItem},on:{complete:e.getList},model:{value:e.handleSwapVisible,callback:function(t){e.handleSwapVisible=t},expression:"handleSwapVisible"}}):e._e(),e.forceCancelDialogVisible?t("force-cancel-course-dialog",{attrs:{id:e.forceCancelCourse.period_id},on:{complete:e.onForceCancelComplete},model:{value:e.forceCancelDialogVisible,callback:function(t){e.forceCancelDialogVisible=t},expression:"forceCancelDialogVisible"}}):e._e()],1)}),n=[],u=s(51206),c=s(69558),d=s(61737),_=function(){var e=this,t=e._self._c;return t("el-dialog",{staticClass:"dialog",attrs:{title:e.$t("mycourse.swap_request"),visible:e.dialogVisible,center:"",width:"620px"},on:{"update:visible":function(t){e.dialogVisible=t},close:()=>e.$emit("input",!1)}},[t("div",{staticClass:"container"},[t("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}]},[t("div",{staticClass:"title"},[e._v(e._s(e.course.course.name_arr))]),t("div",{staticClass:"swap-box"},[t("div",{staticClass:"item from"},[t("div",{staticClass:"label"},[e._v(e._s(e.$t("mycourse.leave_date")))]),t("div",{staticClass:"time"},[e._v(e._s(e.detail?.input_course_date_time?.datetime))])]),t("i",{staticClass:"arrow el-icon-right"}),t("div",{staticClass:"item to"},[t("div",{staticClass:"label"},[e._v(e._s(e.$t("mycourse.makeup_date")))]),t("div",{staticClass:"time"},[e._v(e._s(e.detail?.output_course_date_time?.datetime))])])]),t("div",{staticClass:"reason-box"},[t("div",{staticClass:"label"},[e._v(e._s(e.$t("mycourse.leave_reason")))]),t("div",{staticClass:"reason"},[e._v(e._s(e.detail?.remark))])]),t("div",{staticClass:"btn-box"},[t("el-button",{staticClass:"btn",attrs:{type:"danger",round:""},on:{click:e.deny}},[e._v(e._s(e.$t("mycourse.reject")))]),t("el-button",{staticClass:"btn",attrs:{type:"primary",round:""},on:{click:function(t){return e.submit(1,"")}}},[e._v(e._s(e.$t("mycourse.approve")))])],1)])])])},h=[],m={name:"SwapCourseHandleDialog",props:["value","course"],data(){return{dialogVisible:!1,submitting:!1,loading:!0,detail:null}},created(){this.dialogVisible=this.value,this.getDetail()},watch:{value(e){this.dialogVisible=e}},methods:{async getDetail(){this.loading=!0;try{const e=await(0,u.Pl9)(this.course.period_id);200===e.code&&(this.detail=e.data)}catch(e){console.error(e)}this.loading=!1},async deny(){try{const{value:e}=await this.$prompt(this.$t("mycourse.enter_reject_reason"),this.$t("mycourse.reject"));this.submit(2,e)}catch(e){console.error(e)}},async submit(e,t){this.submitting=!0;try{const s=await(0,u.pGy)(this.course.period_id,e,t);200===s.code&&(this.$message.success(this.$t("mycourse.swap_request_handled")),this.$emit("complete"),this.dialogVisible=!1)}catch(s){console.error(s)}this.submitting=!1}}},p=m,g=s(1001),b=(0,g.Z)(p,_,h,!1,null,"22fcfa3e",null),f=b.exports,v=s(92715),y=function(){var e=this,t=e._self._c;return t("el-dialog",{attrs:{"close-on-click-modal":!1,title:e.$t("mycourse.process_refund_apply"),visible:e.dialogVisible,"custom-class":"box",width:"900px"},on:{"update:visible":function(t){e.dialogVisible=t},close:()=>e.$emit("input",!1)}},[t("div",{staticClass:"content"},[t("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}]},[e.orderData?.refund?.phone?t("div",[t("div",{staticClass:"label"},[e._v(e._s(e.$t("jsdMyYuYueClassrooms.phone")))]),t("div",{staticClass:"value"},[e._v(e._s(e.orderData.refund.phone))])]):e._e(),e.orderData?.refund?.remark?t("div",[t("div",{staticClass:"label"},[e._v(e._s(e.$t("jsdMyYuYueClassrooms.refund_reason")))]),t("div",{staticClass:"reasonText"},[e._v(e._s(e.orderData?.refund?.remark))])]):e._e(),t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.list,"max-height":"220",stripe:"",size:"mini"}},[t("el-table-column",{attrs:{prop:"date",label:e.$t("orderDetail.date"),width:"180"}}),t("el-table-column",{attrs:{prop:"time",label:e.$t("orderDetail.time"),width:"160"}}),t("el-table-column",{attrs:{prop:"discounts_price",label:e.$t("orderDetail.course_fee")},scopedSlots:e._u([{key:"default",fn:function({row:t}){return[e._v("$"+e._s(t.discounts_price))]}}])}),t("el-table-column",{attrs:{prop:"tax_price",label:e.$t("CourseCalendar.taxes")},scopedSlots:e._u([{key:"default",fn:function({row:t}){return[e._v("$"+e._s(t.tax_price))]}}])}),t("el-table-column",{attrs:{prop:"service_price",label:e.$t("CourseDetail.fuwufei"),width:"120"},scopedSlots:e._u([{key:"default",fn:function({row:t}){return[e._v("$"+e._s(t.service_price))]}}])}),t("el-table-column",{attrs:{prop:"refund_price",label:e.$t("orderDetail.refund_price"),width:"120"},scopedSlots:e._u([{key:"default",fn:function({row:s}){return[t("b",[e._v("$"+e._s(s.refund_price))])]}}])})],1),t("div",{staticClass:"total"},[t("span",[e._v(e._s(e.$t("orderDetail.refund_total_price")))]),e._v(" "),t("b",[e._v("$"+e._s(e.totalRefund))])]),t("div",{staticClass:"reason"},[e._v(" "+e._s(e.$t("mycourse.handling_opinion"))+" "),t("el-input",{staticClass:"textAreaBox",attrs:{type:"textarea"},model:{value:e.reason,callback:function(t){e.reason=t},expression:"reason"}})],1),t("div",{staticClass:"dialog-footer"},[t("el-button",{attrs:{loading:e.submitting,type:"danger"},on:{click:function(t){return e.refundConfirm(!1)}}},[e._v(e._s(e.$t("mycourse.refund_deny")))]),t("el-button",{attrs:{loading:e.submitting,type:"primary"},on:{click:function(t){return e.refundConfirm(!0)}}},[e._v(e._s(e.$t("mycourse.refund_agree")))])],1)],1)])])},C=[],$=s(70794),w={name:"RefundCourseProcessDialog",props:["value","order"],data(){return{dialogVisible:!1,submitting:!1,reason:"",loading:!1,orderData:null,list:[]}},created(){this.dialogVisible=this.value,this.getDetail()},watch:{value(e){this.dialogVisible=e}},computed:{weekDay(){return[this.$t("CourseCalendar.xingqi1"),this.$t("CourseCalendar.xingqi2"),this.$t("CourseCalendar.xingqi3"),this.$t("CourseCalendar.xingqi4"),this.$t("CourseCalendar.xingqi5"),this.$t("CourseCalendar.xingqi6"),this.$t("CourseCalendar.xingqi7")]},totalRefund(){let e=this.list&&0!==this.list.length?this.list.reduce(((e,t)=>e.plus(t.refund_price)),new $.Z(0)):new $.Z(0);return e.toString()}},methods:{async getDetail(){this.loading=!0;try{const e=await(0,u.w08)(this.order.out_trade_no);200===e.code&&(this.orderData=e.data,this.list=e.data?.course_date_time?e.data.course_date_time.map((e=>{let t=`${e.date} (${this.weekDay[e.week]})`,s=`${e.start_time} - ${e.end_time}`;return{...e,date:t,time:s}})):[])}catch(e){console.error(e)}this.loading=!1},async refundConfirm(e){this.submitting=!0;try{const t=await(0,u.Pvt)(this.order.out_trade_no,this.order.period_id,e?1:2,this.reason);200===t.code&&(this.$message.success(this.$t("ShoppingCart.caozuochenggong")),this.$emit("complete"),this.dialogVisible=!1)}catch(t){console.error(t)}this.submitting=!1}}},k=w,x=(0,g.Z)(k,y,C,!1,null,"74a4b45a",null),D=x.exports,S={name:"CourseOrderList",components:{RefundCourseProcessDialog:D,EvaluateCourseDialog:v.Z,SwapCourseHandleDialog:f,ContactButton:d.Z,ForceCancelCourseDialog:c.Z},props:{status:{type:Number|String,default:null}},data(){return{total:0,reason:"",dialogVisible:!1,evaluateDialogVisible:!1,query:{page:1,row:10},list:[],currentEvaluateItem:null,currentRefundItem:null,loading:!1,forceCancelDialogVisible:!1,forceCancelCourse:null,handleSwapItem:null,handleSwapVisible:!1}},computed:{statusMapping(){return{0:this.$t("mycourse.status_unpaid"),1:this.$t("mycourse.status_pending_review"),5:this.$t("mycourse.status_in_service"),4:this.$t("mycourse.status_unevaluated"),3:this.$t("mycourse.status_evaluated"),6:this.$t("mycourse.status_pending_cancel"),7:this.$t("mycourse.status_refunded"),2:this.$t("mycourse.status_cancelled"),8:this.$t("mycourse.status_swapping"),9:this.$t("mycourse.status_evaluated"),10:this.$t("mycourse.status_evaluated")}}},mounted(){this.getList()},methods:{async getList(){this.status&&(this.query.status=this.status),this.loading=!0;try{const e=await(0,u.kkj)(this.query);if(200===e.code){let t=e.data;this.list=t.list?.map((e=>(e.book_time_arr=e.book_time?.split(/,\s*/)||[],e))),this.total=t.total}}catch(e){console.error(e)}this.loading=!1},pageChange(e){this.query.page=e,this.getList()},goOrderDetail(e){this.$router.push({path:"/course/order/detail/teacher/"+e.out_trade_no,query:e.period_id?{id:e.period_id}:{}})},goPay(e){let t=e.course_id;this.$router.push({path:"/CourseXiadan",query:{id:t,out_trade_no:e.out_trade_no}})},async cancelCourseOrderFun(e){try{await this.$confirm(this.$t("mycourse.cancel_confirm"),this.$t("mycourse.cancel_order"));const s=this.$loading();try{const t=await(0,u.ehR)(e.out_trade_no);200===t.code&&(this.$message.success(this.$t("ShoppingCart.caozuochenggong")),this.getList())}catch(t){console.error(t)}s.close()}catch(t){console.error(t)}},refundProcess(e){this.currentRefundItem=e,this.dialogVisible=!0},handleClose(){this.dialogVisible=!1},handleSwap(e){this.handleSwapItem=e,this.handleSwapVisible=!0},evaluateCourse(e){this.currentEvaluateItem=e,this.evaluateDialogVisible=!0},getOperate(e){let t=["",this.$t("mycourse.cancel_order"),this.$t("mycourse.pay_now"),this.$t("mycourse.apply_refund"),this.$t("mycourse.evaluated"),this.$t("mycourse.process_refund_apply"),this.$t("mycourse.refund_deny"),"",this.$t("mycourse.swap_cfm")];return Object.entries(e).map((([e,s])=>({id:e,value:t[parseInt(e)]||s})))},doOperate(e,t){switch(e){case"1":this.cancelCourseOrderFun(t);break;case"2":this.goPay(t);break;case"3":this.forceCancel(t);break;case"4":this.evaluateCourse(t);break;case"5":this.refundProcess(t,!0);break;case"8":this.handleSwap(t);break}},forceCancel(e){this.forceCancelCourse=e,this.forceCancelDialogVisible=!0},onForceCancelComplete(){this.$message.success(this.$t("CourseCalendar.cancel_success")),this.getList()},toCourse(e){this.$router.push(`/CourseDetail?id=${e.course_id}`)}}},V=S,q=(0,g.Z)(V,o,n,!1,null,"5e072cbd",null),L=q.exports,O={name:"login",components:{CourseOrderList:L,HomeHeader:r.Z,HomeFooter:l.Z},data(){return{currentTab:"-1"}},created(){this.currentTab=this.$route.query.tab??"-1"},watch:{currentTab:{handler(e){const t=window.location.href.indexOf("#"),s=-1!==t?window.location.href.slice(t):"",a=new URL(window.location.href);a.hash=s.split("?")[0]+`?tab=${e}`,window.history.pushState({path:a.toString()},"",a.toString())}}},computed:{tabList(){return[{lable:this.$t("mycourse.status_all"),name:"-1"},{lable:this.$t("mycourse.status_unpaid"),name:"0",status:"0"},{lable:this.$t("mycourse.status_pending_review"),name:"1",status:"1"},{lable:this.$t("mycourse.status_in_service"),name:"5",status:"5"},{lable:this.$t("mycourse.status_unevaluated"),name:"4",status:"4"},{lable:this.$t("mycourse.status_evaluated"),name:"3",status:"3"},{lable:this.$t("mycourse.status_pending_cancel"),name:"6",status:"6"},{lable:this.$t("mycourse.status_refunded"),name:"7",status:"7"},{lable:this.$t("mycourse.status_cancelled"),name:"2",status:"2"},{lable:this.$t("mycourse.status_swapping"),name:"8",status:"8"}]}}},I=O,Z=(0,g.Z)(I,a,i,!1,null,"a589666e",null),R=Z.exports}}]);