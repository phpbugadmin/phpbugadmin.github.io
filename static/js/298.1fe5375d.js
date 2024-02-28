"use strict";(self["webpackChunkframe"]=self["webpackChunkframe"]||[]).push([[298],{90298:function(t,e,s){s.r(e),s.d(e,{default:function(){return x}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("HomeHeader",{attrs:{topimgIsShow:!1}}),e("div",{staticClass:"listCon mainContent"},[e("div",{staticClass:"center"},[e("div",{staticClass:"topTitle"},[t._v(t._s(t.$t("mycourse.my_course_orders")))]),e("el-tabs",{staticClass:"tab-list",model:{value:t.currentTab,callback:function(e){t.currentTab=e},expression:"currentTab"}},t._l(t.tabList,(function(s){return e("el-tab-pane",{key:s.status,attrs:{name:s.name,status:s.status}},[e("template",{slot:"label"},[e("span",[t._v(t._s(s.lable))])])],2)})),1),t._l(t.tabList,(function(s){return e("div",{key:s.name},[t.currentTab===s.name?e("course-order-list",{attrs:{status:s.status}}):t._e()],1)}))],2)])],1)},i=[],r=(s(46229),s(17330),s(62062),s(64631)),o=s(88550),l=(s(57658),function(){var t=this,e=t._self._c;return e("div",[e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"table",staticStyle:{width:"100%"},attrs:{data:t.list}},[e("el-table-column",{attrs:{width:"100"},scopedSlots:t._u([{key:"default",fn:function({row:s}){return[e("img",{staticClass:"img",attrs:{src:s.course.course_images_text[0]},on:{click:function(e){return t.goOrderDetail(s)}}})]}}])}),e("el-table-column",{attrs:{label:t.$t("mycourse.course_name"),"header-align":"center",align:"center"},scopedSlots:t._u([{key:"default",fn:function({row:s}){return[e("el-link",{staticClass:"name",on:{click:function(e){return t.toCourse(s)}}},[t._v(t._s(s.course.name_arr))])]}}])}),e("el-table-column",{attrs:{label:t.$t("mycourse.course_time"),"header-align":"center",align:"center",width:"100"},scopedSlots:t._u([{key:"default",fn:function({row:s}){return[e("el-popover",{attrs:{placement:"top-start",disabled:s.book_time_arr.length<=1,trigger:"hover"}},[e("el-table",{attrs:{data:s.book_time_arr,size:"mini",stripe:"","show-header":!1,"max-height":"180"}},[e("el-table-column",{attrs:{align:"center",width:"180"},scopedSlots:t._u([{key:"default",fn:function({row:s}){return[e("span",[t._v(t._s(s))])]}}],null,!0)})],1),e("div",{staticClass:"time",attrs:{slot:"reference"},slot:"reference"},[e("span",[t._v(t._s(s.book_time_arr[0]))]),e("span",{staticClass:"rht"},[s.book_time_arr.length>1?e("i",{staticClass:"el-icon-arrow-right"}):t._e()])])],1)]}}])}),e("el-table-column",{attrs:{label:t.$t("mycourse.count"),"header-align":"center",align:"center",width:"100"},scopedSlots:t._u([{key:"default",fn:function({row:s}){return[e("span",{staticClass:"count"},[t._v("×"+t._s(s.book_time_arr.length))])]}}])}),e("el-table-column",{attrs:{label:t.$t("mycourse.status"),"header-align":"center",align:"center",width:"150"},scopedSlots:t._u([{key:"default",fn:function({row:s}){return[e("div",{staticClass:"state",class:`status${s.status}`},[t._v(t._s(s.status_text))])]}}])}),e("el-table-column",{attrs:{label:t.$t("mycourse.price"),"header-align":"center",align:"center",width:"100"},scopedSlots:t._u([{key:"default",fn:function({row:s}){return[e("div",{staticClass:"price"},[t._v("$"+t._s(s.price))])]}}])}),e("el-table-column",{attrs:{label:t.$t("mycourse.student"),"header-align":"center",align:"center"},scopedSlots:t._u([{key:"default",fn:function({row:s}){return[e("div",{staticClass:"studentBox"},[e("div",{staticClass:"flexLine"},[e("div",[e("img",{staticClass:"avatar",attrs:{src:s.user_avatar},on:{click:function(e){return t.$router.push(`/user/student/${s.user_id}`)}}}),e("div",[e("span",[t._v(t._s(s.user_name))])])]),e("contact-button",{attrs:{type:"1","target-id":s.user_id}})],1)])]}}])}),e("el-table-column",{attrs:{label:t.$t("mycourse.order_time"),"header-align":"center",align:"center",width:"100"},scopedSlots:t._u([{key:"default",fn:function({row:s}){return[e("div",{staticClass:"timeOrder"},[t._v(t._s(t.$utils.formatDatetime(s.createtime)))])]}}])}),e("el-table-column",{attrs:{label:t.$t("mycourse.operate"),"header-align":"center",align:"center",width:"200"},scopedSlots:t._u([{key:"default",fn:function({row:s}){return[e("div",{staticClass:"btn btnGroup"},t._l(t.getOperate(s.op),(function(a,i){return e("el-button",{key:i,attrs:{type:"primary",plain:"",size:"mini"},on:{click:function(e){return t.doOperate(a.id,s)}}},[t._v(" "+t._s(a.value)+" ")])})),1)]}}])})],1),e("div",{staticClass:"fenyeCon"},[e("el-pagination",{staticClass:"fenye",attrs:{"page-size":t.query.row,total:t.total,background:"",layout:"prev, pager, next"},on:{"current-change":t.pageChange}})],1),t.evaluateDialogVisible?e("evaluate-course-dialog",{attrs:{type:"teacher",period_id:t.currentEvaluateItem.period_id},on:{complete:t.getList},model:{value:t.evaluateDialogVisible,callback:function(e){t.evaluateDialogVisible=e},expression:"evaluateDialogVisible"}}):t._e(),t.handleSwapVisible?e("swap-course-handle-dialog",{attrs:{course:t.handleSwapItem},on:{complete:t.getList},model:{value:t.handleSwapVisible,callback:function(e){t.handleSwapVisible=e},expression:"handleSwapVisible"}}):t._e(),t.forceCancelDialogVisible?e("force-cancel-course-dialog",{attrs:{id:t.forceCancelCourse.period_id},on:{complete:t.onForceCancelComplete},model:{value:t.forceCancelDialogVisible,callback:function(e){t.forceCancelDialogVisible=e},expression:"forceCancelDialogVisible"}}):t._e(),e("el-dialog",{attrs:{title:t.$t("mycourse.refund_deny"),visible:t.dialogVisible,width:"30%","custom-class":"box","before-close":t.handleClose},on:{"update:visible":function(e){t.dialogVisible=e}}},[e("div",[t._v(" "+t._s(t.$t("mycourse.refund_reason"))+" "),e("el-input",{staticClass:"textAreaBox",attrs:{type:"textarea"},model:{value:t.reason,callback:function(e){t.reason=e},expression:"reason"}})],1),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v(t._s(t.$t("mycourse.cancel")))]),e("el-button",{attrs:{type:"primary"},on:{click:t.handleConfirm}},[t._v(t._s(t.$t("mycourse.confirm")))])],1)])],1)}),n=[],c=s(51206),u=s(15695),d=s(61737),h=function(){var t=this,e=t._self._c;return e("el-dialog",{staticClass:"dialog",attrs:{title:t.$t("mycourse.swap_request"),visible:t.dialogVisible,center:"",width:"620px"},on:{"update:visible":function(e){t.dialogVisible=e},close:()=>t.$emit("input",!1)}},[e("div",{staticClass:"container"},[e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},[e("div",{staticClass:"title"},[t._v(t._s(t.course.course.name_arr))]),e("div",{staticClass:"swap-box"},[e("div",{staticClass:"item from"},[e("div",{staticClass:"label"},[t._v(t._s(t.$t("mycourse.leave_date")))]),e("div",{staticClass:"time"},[t._v(t._s(t.detail?.input_course_date_time?.datetime))])]),e("i",{staticClass:"arrow el-icon-right"}),e("div",{staticClass:"item to"},[e("div",{staticClass:"label"},[t._v(t._s(t.$t("mycourse.makeup_date")))]),e("div",{staticClass:"time"},[t._v(t._s(t.detail?.output_course_date_time?.datetime))])])]),e("div",{staticClass:"reason-box"},[e("div",{staticClass:"label"},[t._v(t._s(t.$t("mycourse.leave_reason")))]),e("div",{staticClass:"reason"},[t._v(t._s(t.detail?.remark))])]),e("div",{staticClass:"btn-box"},[e("el-button",{staticClass:"btn",attrs:{type:"danger",round:""},on:{click:t.deny}},[t._v(t._s(t.$t("mycourse.reject")))]),e("el-button",{staticClass:"btn",attrs:{type:"primary",round:""},on:{click:function(e){return t.submit(1,"")}}},[t._v(t._s(t.$t("mycourse.approve")))])],1)])])])},m=[],_={name:"SwapCourseHandleDialog",props:["value","course"],data(){return{dialogVisible:!1,submitting:!1,loading:!0,detail:null}},created(){this.dialogVisible=this.value,this.getDetail()},watch:{value(t){this.dialogVisible=t}},methods:{async getDetail(){this.loading=!0;try{const t=await(0,c.Pl9)(this.course.period_id);200===t.code&&(this.detail=t.data)}catch(t){console.error(t)}this.loading=!1},async deny(){try{const{value:t}=await this.$prompt(this.$t("mycourse.enter_reject_reason"),this.$t("mycourse.reject"));this.submit(2,t)}catch(t){console.error(t)}},async submit(t,e){this.submitting=!0;try{const s=await(0,c.pGy)(this.course.period_id,t,e);200===s.code&&(this.$message.success(this.$t("mycourse.swap_request_handled")),this.$emit("complete"),this.dialogVisible=!1)}catch(s){console.error(s)}this.submitting=!1}}},p=_,g=s(1001),b=(0,g.Z)(p,h,m,!1,null,"22fcfa3e",null),y=b.exports,f=s(92715),v={name:"CourseOrderList",components:{EvaluateCourseDialog:f.Z,SwapCourseHandleDialog:y,ContactButton:d.Z,ForceCancelCourseDialog:u.Z},props:{status:{type:Number|String,default:null}},data(){return{total:0,reason:"",dialogVisible:!1,evaluateDialogVisible:!1,query:{page:1,row:10},selectItem:null,list:[],currentEvaluateItem:null,currentRefundItem:null,loading:!1,forceCancelDialogVisible:!1,forceCancelCourse:null,handleSwapItem:null,handleSwapVisible:!1}},computed:{statusMapping(){return{0:this.$t("mycourse.status_unpaid"),1:this.$t("mycourse.status_pending_review"),5:this.$t("mycourse.status_in_service"),4:this.$t("mycourse.status_unevaluated"),3:this.$t("mycourse.status_evaluated"),6:this.$t("mycourse.status_pending_cancel"),7:this.$t("mycourse.status_refunded"),2:this.$t("mycourse.status_cancelled"),8:this.$t("mycourse.status_swapping"),9:this.$t("mycourse.status_evaluated"),10:this.$t("mycourse.status_evaluated")}}},mounted(){this.getList()},methods:{async getList(){this.status&&(this.query.status=this.status),this.loading=!0;try{const t=await(0,c.kkj)(this.query);if(200===t.code){let e=t.data;this.list=e.list?.map((t=>(t.book_time_arr=t.book_time?.split(/,\s*/)||[],t))),this.total=e.total}}catch(t){console.error(t)}this.loading=!1},pageChange(t){this.query.page=t,this.getList()},goOrderDetail(t){this.$router.push({path:"/course/order/detail/teacher/"+t.out_trade_no,query:t.period_id?{id:t.period_id}:{}})},goPay(t){let e=t.course_id;this.$router.push({path:"/CourseXiadan",query:{id:e,out_trade_no:t.out_trade_no}})},async cancelCourseOrderFun(t){try{await this.$confirm(this.$t("mycourse.cancel_confirm"),this.$t("mycourse.cancel_order"));const s=this.$loading();try{const e=await(0,c.ehR)(t.out_trade_no);200===e.code&&(this.$message.success(this.$t("ShoppingCart.caozuochenggong")),this.getList())}catch(e){console.error(e)}s.close()}catch(e){console.error(e)}},async refundConfirm(t,e,s){try{e&&await this.$confirm(this.$t(e?"mycourse.refund_agree_tip":"mycourse.refund_deny_tip"),this.$t("mycourse.refund_confirm"));const i=this.$loading();try{const a=await(0,c.Pvt)(t.out_trade_no,t.period_id,e?1:2,s?this.reason:"");200===a.code&&(this.$message.success(this.$t("ShoppingCart.caozuochenggong")),this.getList())}catch(a){console.error(a)}i.close()}catch(a){console.error(a)}},handleClose(){this.dialogVisible=!1},handleShow(t){this.dialogVisible=!0,this.selectItem=t},handleConfirm(){this.refundConfirm(this.selectItem,!1,!0),this.dialogVisible=!1},handleSwap(t){this.handleSwapItem=t,this.handleSwapVisible=!0},evaluateCourse(t){this.currentEvaluateItem=t,this.evaluateDialogVisible=!0},getOperate(t){let e=["",this.$t("mycourse.cancel_order"),this.$t("mycourse.pay_now"),this.$t("mycourse.apply_refund"),this.$t("mycourse.evaluated"),this.$t("mycourse.refund_agree"),this.$t("mycourse.refund_deny"),"",this.$t("mycourse.swap_cfm")];return Object.entries(t).map((([t,s])=>({id:t,value:e[parseInt(t)]||s})))},doOperate(t,e){switch(t){case"1":this.cancelCourseOrderFun(e);break;case"2":this.goPay(e);break;case"3":this.forceCancel(e);break;case"4":this.evaluateCourse(e);break;case"5":this.refundConfirm(e,!0);break;case"6":this.handleShow(e);break;case"8":this.handleSwap(e);break}},forceCancel(t){this.forceCancelCourse=t,this.forceCancelDialogVisible=!0},onForceCancelComplete(){this.$message.success(this.$t("CourseCalendar.cancel_success")),this.getList()},toCourse(t){this.$router.push(`/CourseDetail?id=${t.course_id}`)}}},C=v,$=(0,g.Z)(C,l,n,!1,null,"4774eeb6",null),w=$.exports,k={name:"login",components:{CourseOrderList:w,HomeHeader:r.Z,HomeFooter:o.Z},data(){return{currentTab:"-1"}},created(){this.currentTab=this.$route.query.tab??"-1"},watch:{currentTab:{handler(t){const e=window.location.href.indexOf("#"),s=-1!==e?window.location.href.slice(e):"",a=new URL(window.location.href);a.hash=s.split("?")[0]+`?tab=${t}`,window.history.pushState({path:a.toString()},"",a.toString())}}},computed:{tabList(){return[{lable:this.$t("mycourse.status_all"),name:"-1"},{lable:this.$t("mycourse.status_unpaid"),name:"0",status:"0"},{lable:this.$t("mycourse.status_pending_review"),name:"1",status:"1"},{lable:this.$t("mycourse.status_in_service"),name:"5",status:"5"},{lable:this.$t("mycourse.status_unevaluated"),name:"4",status:"4"},{lable:this.$t("mycourse.status_evaluated"),name:"3",status:"3"},{lable:this.$t("mycourse.status_pending_cancel"),name:"6",status:"6"},{lable:this.$t("mycourse.status_refunded"),name:"7",status:"7"},{lable:this.$t("mycourse.status_cancelled"),name:"2",status:"2"},{lable:this.$t("mycourse.status_swapping"),name:"8",status:"8"}]}}},S=k,V=(0,g.Z)(S,a,i,!1,null,"a589666e",null),x=V.exports}}]);