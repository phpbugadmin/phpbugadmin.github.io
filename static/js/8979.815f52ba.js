"use strict";(self["webpackChunkframe"]=self["webpackChunkframe"]||[]).push([[8979],{8979:function(t,e,s){s.r(e),s.d(e,{default:function(){return V}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("HomeHeader",{attrs:{topimgIsShow:!1}}),e("div",{staticClass:"listCon mainContent"},[e("div",{staticClass:"center"},[e("div",{staticClass:"topTitle"},[t._v(t._s(t.$t("mycourse.wodekecheng")))]),e("el-tabs",{staticClass:"tab-list",model:{value:t.currentTab,callback:function(e){t.currentTab=e},expression:"currentTab"}},t._l(t.tabList,(function(s){return e("el-tab-pane",{key:s.status,attrs:{name:s.name,status:s.status}},[e("template",{slot:"label"},[e("span",[t._v(t._s(s.lable))])])],2)})),1),t._l(t.tabList,(function(s){return e("div",{key:s.name},[t.currentTab===s.name?e("course-order-list",{attrs:{status:s.status}}):t._e()],1)}))],2)])],1)},i=[],r=s(2826),o=s(6318),n=function(){var t=this,e=t._self._c;return e("div",[e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"table",staticStyle:{width:"100%"},attrs:{data:t.list}},[e("el-table-column",{attrs:{width:"50"},scopedSlots:t._u([{key:"default",fn:function({row:s}){return[e("img",{staticClass:"img",attrs:{src:s.course.course_images_text[0]},on:{click:function(e){return t.goOrderDetail(s)}}})]}}])}),e("el-table-column",{attrs:{label:"课程名称","header-align":"center",align:"center",width:"100"},scopedSlots:t._u([{key:"default",fn:function({row:s}){return[e("el-link",{staticClass:"name",on:{click:function(e){return t.toCourse(s)}}},[t._v(t._s(s.course.name_arr))])]}}])}),e("el-table-column",{attrs:{label:"课程","header-align":"center",align:"center",width:"200"},scopedSlots:t._u([{key:"default",fn:function({row:s}){return[e("el-popover",{attrs:{placement:"top-start",width:"200",disabled:s.book_time_arr.length<=1,trigger:"hover"}},[e("div",{staticClass:"popover"},t._l(s.book_time_arr,(function(s,a){return e("div",{key:a},[t._v(" "+t._s(s)+" ")])})),0),e("div",{staticClass:"time",attrs:{slot:"reference"},slot:"reference"},[e("span",[t._v(t._s(`${s.book_time_arr[0]} ${s.book_time_arr.length>1?",...":""}`))])])])]}}])}),e("el-table-column",{attrs:{label:"课节数","header-align":"center",align:"center",width:"100"},scopedSlots:t._u([{key:"default",fn:function({row:s}){return[e("span",{staticClass:"count"},[t._v("×"+t._s(s.book_time_arr.length))])]}}])}),e("el-table-column",{attrs:{label:"状态","header-align":"center",align:"center",width:"100"},scopedSlots:t._u([{key:"default",fn:function({row:s}){return[e("div",{staticClass:"state"},[t._v(t._s(t.statusMapping[s.status]))])]}}])}),e("el-table-column",{attrs:{label:"价格","header-align":"center",align:"center",width:"100"},scopedSlots:t._u([{key:"default",fn:function({row:s}){return[e("div",{staticClass:"price"},[t._v("$"+t._s(s.price))])]}}])}),e("el-table-column",{attrs:{label:"学生","header-align":"center",align:"center",width:"200"},scopedSlots:t._u([{key:"default",fn:function({row:s}){return[e("div",[e("img",{staticClass:"img",attrs:{src:s.user_avatar}}),e("span",[t._v(t._s(s.user_name))]),e("contact-button",{attrs:{"target-id":s.user_id}})],1)]}}])}),e("el-table-column",{attrs:{label:"操作","header-align":"center",align:"center",width:"200"},scopedSlots:t._u([{key:"default",fn:function({row:s}){return t._l(t.getOperate(s.op),(function(a,i){return e("div",{key:i,staticClass:"btn"},[e("el-button",{attrs:{type:"primary",plain:"",size:"mini"},on:{click:function(e){return t.doOperate(a.id,s)}}},[t._v(" "+t._s(a.value)+" ")])],1)}))}}])})],1),e("div",{staticClass:"fenyeCon"},[e("el-pagination",{staticClass:"fenye",attrs:{"page-size":t.query.row,total:t.total,layout:"prev, pager, next"},on:{"current-change":t.pageChange}})],1),t.handleSwapVisible?e("swap-course-handle-dialog",{attrs:{course:t.handleSwapItem},on:{complete:t.getList},model:{value:t.handleSwapVisible,callback:function(e){t.handleSwapVisible=e},expression:"handleSwapVisible"}}):t._e(),t.forceCancelDialogVisible?e("force-cancel-course-dialog",{attrs:{id:t.forceCancelCourse.period_id},on:{complete:t.onForceCancelComplete},model:{value:t.forceCancelDialogVisible,callback:function(e){t.forceCancelDialogVisible=e},expression:"forceCancelDialogVisible"}}):t._e(),e("el-dialog",{attrs:{title:t.$t("mycourse.refund_deny"),visible:t.dialogVisible,width:"30%","custom-class":"box","before-close":t.handleClose},on:{"update:visible":function(e){t.dialogVisible=e}}},[e("div",[t._v(" "+t._s(t.$t("mycourse.refund_reason"))+" "),e("el-input",{staticClass:"textAreaBox",attrs:{type:"textarea"},model:{value:t.reason,callback:function(e){t.reason=e},expression:"reason"}})],1),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v(t._s(t.$t("mycourse.cancel")))]),e("el-button",{attrs:{type:"primary"},on:{click:t.handleConfirm}},[t._v(t._s(t.$t("mycourse.confirm")))])],1)])],1)},l=[],c=(s(7658),s(122)),u=s(5695),d=s(2675),h=function(){var t=this,e=t._self._c;return e("el-dialog",{staticClass:"dialog",attrs:{title:t.$t("mycourse.swap_request"),visible:t.dialogVisible,center:"",width:"540px"},on:{"update:visible":function(e){t.dialogVisible=e},close:()=>t.$emit("input",!1)}},[e("div",{staticClass:"container"},[e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},[e("div",{staticClass:"title"},[t._v(t._s(t.course.course.name_arr))]),e("div",{staticClass:"swap-box"},[e("div",{staticClass:"item from"},[e("div",{staticClass:"label"},[t._v(t._s(t.$t("mycourse.leave_date")))]),e("div",{staticClass:"time"},[t._v("2024-01-01 20:20-21:20")])]),e("i",{staticClass:"arrow el-icon-right"}),e("div",{staticClass:"item to"},[e("div",{staticClass:"label"},[t._v(t._s(t.$t("mycourse.makeup_date")))]),e("div",{staticClass:"time"},[t._v("2024-01-01 20:20-21:20")])])]),e("div",{staticClass:"reason-box"},[e("div",{staticClass:"label"},[t._v(t._s(t.$t("mycourse.leave_reason")))]),e("div",{staticClass:"reason"},[t._v("asdfdasf")])]),e("div",{staticClass:"btn-box"},[e("el-button",{staticClass:"btn",attrs:{type:"danger",round:""},on:{click:t.deny}},[t._v(t._s(t.$t("mycourse.reject")))]),e("el-button",{staticClass:"btn",attrs:{type:"primary",round:""},on:{click:function(e){return t.submit(1,"")}}},[t._v(t._s(t.$t("mycourse.approve")))])],1)])])])},m=[],_={name:"SwapCourseHandleDialog",props:["value","course"],data(){return{dialogVisible:!1,submitting:!1,loading:!0}},created(){this.dialogVisible=this.value,this.getDetail()},watch:{value(t){this.dialogVisible=t}},methods:{async getDetail(){this.loading=!0;try{const t=await(0,c.Pl9)(this.course.period_id);t.code}catch(t){console.error(t)}this.loading=!1},async deny(){try{const{value:t}=await this.$prompt(this.$t("mycourse.enter_reject_reason"),this.$t("mycourse.reject"));this.submit(2,t)}catch(t){console.error(t)}},async submit(t,e){this.submitting=!0;try{const s=await(0,c.pGy)(this.course.period_id,t,e);200===s.code&&(this.$message.success(this.$t("mycourse.swap_request_handled")),this.$emit("complete"))}catch(s){console.error(s)}this.submitting=!1}}},p=_,g=s(1001),b=(0,g.Z)(p,h,m,!1,null,"512584e5",null),f=b.exports,y={name:"CourseOrderList",components:{SwapCourseHandleDialog:f,ContactButton:d.Z,ForceCancelCourseDialog:u.Z},props:{status:{type:Number|String,default:null}},data(){return{total:0,reason:"",dialogVisible:!1,query:{page:1,row:10},selectItem:null,list:[],currentEvaluateItem:null,currentRefundItem:null,loading:!1,forceCancelDialogVisible:!1,forceCancelCourse:null,handleSwapItem:null,handleSwapVisible:!1}},computed:{statusMapping(){return{0:this.$t("mycourse.status_unpaid"),1:this.$t("mycourse.status_pending_review"),5:this.$t("mycourse.status_in_service"),4:this.$t("mycourse.status_unevaluated"),3:this.$t("mycourse.status_evaluated"),6:this.$t("mycourse.status_pending_cancel"),7:this.$t("mycourse.status_refunded"),2:this.$t("mycourse.status_cancelled"),8:this.$t("mycourse.status_swapping")}}},mounted(){this.getList()},methods:{async getList(){this.status&&(this.query.status=this.status),this.loading=!0;try{const t=await(0,c.kkj)(this.query);if(200===t.code){let e=t.data;this.list=e.list?.map((t=>(t.book_time_arr=t.book_time?.split(/,\s*/)||[],t))),this.total=e.total}}catch(t){console.error(t)}this.loading=!1},pageChange(t){this.query.page=t,this.getList()},goOrderDetail(t){this.$router.push({path:"/course/order/detail/teacher/"+t.out_trade_no,query:t.period_id?{id:t.period_id}:{}})},goPay(t){let e=t.course_id;this.$router.push({path:"/CourseXiadan",query:{id:e,out_trade_no:t.out_trade_no}})},async cancelCourseOrderFun(t){try{await this.$confirm(this.$t("mycourse.cancel_confirm"),this.$t("mycourse.cancel_order"));const s=this.$loading();try{const e=await(0,c.ehR)(t.out_trade_no);200===e.code&&(this.$message.success(this.$t("ShoppingCart.caozuochenggong")),this.getList())}catch(e){console.error(e)}s.close()}catch(e){console.error(e)}},async refundConfirm(t,e,s){try{e&&await this.$confirm(this.$t(e?"mycourse.refund_agree_tip":"mycourse.refund_deny_tip"),this.$t("mycourse.refund_confirm"));const i=this.$loading();try{const a=await(0,c.Pvt)(t.out_trade_no,e?1:2,s?this.reason:"");200===a.code&&(this.$message.success(this.$t("ShoppingCart.caozuochenggong")),this.getList())}catch(a){console.error(a)}i.close()}catch(a){console.error(a)}},handleClose(){this.dialogVisible=!1},handleShow(t){this.dialogVisible=!0,this.selectItem=t},handleConfirm(){this.refundConfirm(this.selectItem,!1,!0),this.dialogVisible=!1},handleSwap(t){this.handleSwapItem=t,this.handleSwapVisible=!0},getOperate(t){let e=["",this.$t("mycourse.cancel_order"),this.$t("mycourse.pay_now"),this.$t("mycourse.apply_refund"),this.$t("mycourse.evaluated"),this.$t("mycourse.refund_agree"),this.$t("mycourse.refund_deny"),"",this.$t("mycourse.swap_cfm")];return Object.entries(t).map((([t,s])=>({id:t,value:e[parseInt(t)]||s})))},doOperate(t,e){switch(t){case"1":this.cancelCourseOrderFun(e);break;case"2":this.goPay(e);break;case"3":this.forceCancel(e);break;case"4":break;case"5":this.refundConfirm(e,!0);break;case"6":this.handleShow(e);break;case"8":this.handleSwap(e);break}},forceCancel(t){this.forceCancelCourse=t,this.forceCancelDialogVisible=!0},onForceCancelComplete(){this.$message.success(this.$t("CourseCalendar.cancel_success")),this.getList()},toCourse(t){this.$router.push(`/CourseDetail?id=${t.course_id}`)}}},v=y,C=(0,g.Z)(v,n,l,!1,null,"03c6467c",null),w=C.exports,$={name:"login",components:{CourseOrderList:w,HomeHeader:r.Z,HomeFooter:o.Z},data(){return{currentTab:"-1"}},computed:{tabList(){return[{lable:this.$t("mycourse.status_all"),name:"-1"},{lable:this.$t("mycourse.status_unpaid"),name:"0",status:"0"},{lable:this.$t("mycourse.status_pending_review"),name:"1",status:"1"},{lable:this.$t("mycourse.status_in_service"),name:"5",status:"5"},{lable:this.$t("mycourse.status_pending_cancel"),name:"6",status:"6"},{lable:this.$t("mycourse.status_refunded"),name:"7",status:"7"},{lable:this.$t("mycourse.status_swapping"),name:"8",status:"8"}]}}},k=$,S=(0,g.Z)(k,a,i,!1,null,"0829bc63",null),V=S.exports}}]);