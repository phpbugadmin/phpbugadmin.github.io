"use strict";(self["webpackChunkframe"]=self["webpackChunkframe"]||[]).push([[9980],{49980:function(t,e,s){s.r(e),s.d(e,{default:function(){return x}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("HomeHeader",{attrs:{topimgIsShow:!1}}),e("div",{staticClass:"listCon mainContent"},[e("div",{staticClass:"center"},[e("div",{staticClass:"topTitle"},[t._v(t._s(t.$t("mycourse.wodekecheng")))]),e("el-tabs",{staticClass:"tab-list",model:{value:t.currentTab,callback:function(e){t.currentTab=e},expression:"currentTab"}},t._l(t.tabList,(function(s){return e("el-tab-pane",{key:s.status,attrs:{name:s.name,status:s.status}},[e("template",{slot:"label"},[e("span",[t._v(t._s(s.lable))])])],2)})),1),t._l(t.tabList,(function(s){return e("div",{key:s.name},[t.currentTab===s.name?e("course-order-list",{attrs:{status:s.status}}):t._e()],1)}))],2)])],1)},i=[],r=(s(46229),s(17330),s(62062),s(64631)),o=s(88550),n=function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},[e("div",{staticClass:"list"},t._l(t.list,(function(s,a){return e("div",{key:s.id,staticClass:"item"},[s.course?e("img",{staticClass:"img",attrs:{src:s.course.course_images_text[0],alt:""},on:{click:function(e){return t.goOrderDetail(s)}}}):t._e(),e("div",{staticClass:"item-content"},[s.course?e("div",{staticClass:"title"},[e("span",{staticClass:"name",on:{click:function(e){return t.toCourse(s)}}},[t._v(t._s(s.course.name_arr))]),e("contact-button",{attrs:{"target-id":s.course.user_id}})],1):t._e(),e("el-popover",{attrs:{placement:"top-start",disabled:s.book_time_arr.length<=1,trigger:"hover"}},[e("el-table",{attrs:{data:s.book_time_arr,size:"mini",stripe:"","show-header":!1,"max-height":"180"}},[e("el-table-column",{attrs:{align:"center",width:"180"},scopedSlots:t._u([{key:"default",fn:function({row:s}){return[e("span",[t._v(t._s(s))])]}}],null,!0)})],1),e("div",{staticClass:"time",attrs:{slot:"reference"},slot:"reference"},[e("span",[t._v(t._s(`${s.book_time_arr[0]} ${s.book_time_arr.length>1?",...":""}`))]),e("span",{staticClass:"count"},[t._v("×"+t._s(s.book_time_arr.length))])])],1),e("div",{staticClass:"priceCon"},[e("div",{staticClass:"flexLine"},[e("div",{staticClass:"state"},[t._v(t._s(s.status_text))]),s.leave_reason||s.refund_reason?e("div",[e("el-tooltip",{staticClass:"width100",attrs:{effect:"dark",placement:"top-start"}},[e("div",{attrs:{slot:"content"},slot:"content"},[s.leave_reason?e("div",{staticClass:"liLine"},[t._v(t._s(t.$t("mycourse.rejected_reason_swap"))+":"+t._s(s.leave_reason))]):t._e(),s.refund_reason?e("div",[t._v(t._s(t.$t("mycourse.rejected_reason_refund"))+":"+t._s(s.refund_reason))]):t._e()]),e("div",{staticClass:"stateReject"},[t._v(t._s(t.$t("mycourse.rejected")))])])],1):t._e()]),e("div",{staticClass:"price"},[t._v("$"+t._s(s.price))])]),e("div",{staticClass:"btnCon"},t._l(t.getOperate(s.op),(function(a,i){return e("div",{key:i,staticClass:"btn"},[e("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary",plain:"",size:"mini"},on:{click:function(e){return t.doOperate(a.id,s)}}},[t._v(" "+t._s(a.value)+" ")])],1)})),0)],1)])})),0),e("div",{staticClass:"fenyeCon"},[e("el-pagination",{staticClass:"fenye",attrs:{"page-size":t.query.row,background:"",total:t.total,layout:"prev, pager, next"},on:{"current-change":t.pageChange}})],1),t.swapDialogVisible?e("swap-course-dialog",{attrs:{course:t.currentSwapItem},on:{complete:t.getList},model:{value:t.swapDialogVisible,callback:function(e){t.swapDialogVisible=e},expression:"swapDialogVisible"}}):t._e(),t.evaluateDialogVisible?e("evaluate-course-dialog",{attrs:{type:"student",period_id:t.currentEvaluateItem.period_id},on:{complete:t.getList},model:{value:t.evaluateDialogVisible,callback:function(e){t.evaluateDialogVisible=e},expression:"evaluateDialogVisible"}}):t._e()],1)},l=[],u=(s(57658),s(51206)),c=s(92715),d=s(61737),m=function(){var t=this,e=t._self._c;return e("el-dialog",{staticClass:"dialog",attrs:{title:t.$t("mycourse.swap_request"),visible:t.dialogVisible,center:"","close-on-click-modal":!1,width:"700px"},on:{"update:visible":function(e){t.dialogVisible=e},close:()=>t.$emit("input",!1)}},[e("div",{staticClass:"container"},[e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},[e("div",{staticClass:"title"},[t._v(t._s(t.course.course.name_arr))]),e("div",{staticClass:"time"},[t._v(t._s(t.$t("mycourse.absent_course"))),e("span",[t._v(t._s(t.course.book_time))])]),e("div",{staticClass:"select"},[e("div",{staticClass:"label"},[t._v(t._s(t.$t("mycourse.select_markup")))]),e("div",{staticClass:"tips"},[t._v(t._s(t.$t("mycourse.markup_tips")))]),e("div",{staticClass:"height300"},[e("div",{staticClass:"options"},[t._l(t.timeOptions,(function(s,a){return e("div",{key:s.id,staticClass:"option",class:{active:t.selectedTime?.id===s.id},on:{click:function(e){t.selectedTime=s}}},[t._v(t._s(s.date)+" "+t._s(t.getHourMin(s.start_time))+"-"+t._s(t.getHourMin(s.end_time)))])})),t.timeOptions?.length?t._e():e("div",{staticClass:"noData"},[t._v(" "+t._s(t.$t("mycourse.nodata"))+" ")])],2)])]),e("el-form",{ref:"formData",staticClass:"form",attrs:{model:t.formData,rules:t.rules,"label-position":"top"}},[e("el-form-item",{attrs:{label:t.$t("mycourse.swap_reason"),prop:"reason"}},[e("el-input",{attrs:{maxlength:500,rows:4,"show-word-limit":"",type:"textarea"},model:{value:t.formData.reason,callback:function(e){t.$set(t.formData,"reason",e)},expression:"formData.reason"}})],1)],1),e("el-button",{staticClass:"btn",attrs:{type:"primary",disabled:t.disabled,loading:t.submitting,round:""},on:{click:t.doSubmit}},[t._v(t._s(t.$t("mycourse.submit_swap")))])],1)])])},_=[],p={name:"SwapCourseDialog",props:["value","course"],data(){return{dialogVisible:!1,submitting:!1,loading:!1,selectedTime:null,timeOptions:[],formData:{reason:"",swapTo:""},rules:{reason:[{required:!0,message:this.$t("tip.required"),trigger:"blur"}]}}},created(){this.dialogVisible=this.value,this.getOptionCourse()},watch:{value(t){this.dialogVisible=t}},computed:{disabled(){return!this.selectedTime||!this.formData.reason}},methods:{async getOptionCourse(){this.loading=!0;try{const t=await(0,u.FI$)(this.course?.period_id);200===t.code&&(this.timeOptions=t.data)}catch(t){console.error(t)}this.loading=!1},getHourMin(t){if(t){let e=t.split(":");return e.length>=3?e.slice(0,2).join(":"):t}return""},async doSubmit(){try{await this.$refs.formData.validate(),this.submitting=!0;const t=await(0,u.Zi7)(this.selectedTime.id,this.course.period_id,this.formData.reason);200===t.code&&(this.$message.success(this.$t("mycourse.change_request_submitted")),this.$emit("complete"),this.dialogVisible=!1)}catch(t){console.error(t)}this.submitting=!1}}},h=p,g=s(1001),v=(0,g.Z)(h,m,_,!1,null,"305b5cbb",null),b=v.exports,y={name:"CourseOrderList",components:{SwapCourseDialog:b,ContactButton:d.Z,EvaluateCourseDialog:c.Z},props:{status:{type:Number|String,default:null}},data(){return{total:0,query:{page:1,row:10},list:[],evaluateDialogVisible:!1,currentEvaluateItem:null,currentRefundItem:null,currentSwapItem:null,swapDialogVisible:!1,loading:!1}},computed:{statusMapping(){return{0:this.$t("mycourse.status_unpaid"),1:this.$t("mycourse.status_pending_review"),5:this.$t("mycourse.status_in_service"),4:this.$t("mycourse.status_unevaluated"),3:this.$t("mycourse.status_evaluated"),6:this.$t("mycourse.status_pending_cancel"),7:this.$t("mycourse.status_refunded"),2:this.$t("mycourse.status_cancelled"),8:this.$t("mycourse.status_swapping"),9:this.$t("mycourse.status_evaluated")}}},mounted(){this.getList()},methods:{async getList(){this.status&&(this.query.status=this.status),this.loading=!0;try{const t=await(0,u.JfS)(this.query);if(200===t.code){let e=t.data;this.list=e.list?.map((t=>(t.book_time_arr=t.book_time?.split(/,\s*/)||[],t))),this.total=e.total}}catch(t){console.error(t)}this.loading=!1},pageChange(t){this.query.page=t,this.getList()},goOrderDetail(t){this.$router.push({path:"/course/order/detail/student/"+t.out_trade_no,query:t.period_id?{id:t.period_id}:{}})},goPay(t){let e=t.course_id;this.$router.push({path:"/CourseXiadan",query:{id:e,out_trade_no:t.out_trade_no}})},evaluateCourse(t){this.currentEvaluateItem=t,this.evaluateDialogVisible=!0},swap(t){this.currentSwapItem=t,this.swapDialogVisible=!0},async cancelCourseOrderFun(t){try{await this.$confirm(this.$t("mycourse.cancel_confirm"),this.$t("mycourse.cancel_order"));const s=this.$loading();try{const e=await(0,u.ehR)(t.out_trade_no);200===e.code&&(this.$message.success(this.$t("ShoppingCart.caozuochenggong")),this.getList())}catch(e){console.error(e)}s.close()}catch(e){console.error(e)}},getOperate(t){let e=["",this.$t("mycourse.cancel_order"),this.$t("mycourse.pay_now"),this.$t("mycourse.apply_refund"),this.$t("mycourse.evaluated"),this.$t("mycourse.refund_agree"),this.$t("mycourse.refund_deny"),"",this.$t("mycourse.swap")];return Object.entries(t).map((([t,s])=>({id:t,value:e[parseInt(t)]||s})))},doOperate(t,e){switch(console.log(t),t){case"1":this.cancelCourseOrderFun(e);break;case"2":this.goPay(e);break;case"3":this.$router.push({path:`/course/orders/refund/${e.out_trade_no}`});break;case"4":this.evaluateCourse(e);break;case"8":this.swap(e);break}},toCourse(t){this.$router.push(`/CourseDetail?id=${t.course_id}`)}}},f=y,C=(0,g.Z)(f,n,l,!1,null,"0c84a665",null),$=C.exports,w={name:"login",components:{CourseOrderList:$,HomeHeader:r.Z,HomeFooter:o.Z},data(){return{currentTab:"-1"}},watch:{currentTab:{handler(t){const e=window.location.href.indexOf("#"),s=-1!==e?window.location.href.slice(e):"",a=new URL(window.location.href);a.hash=s.split("?")[0]+`?tab=${t}`,window.history.pushState({path:a.toString()},"",a.toString())}}},created(){this.currentTab=this.$route.query.tab??"-1"},computed:{tabList(){return[{lable:this.$t("mycourse.status_all"),name:"-1"},{lable:this.$t("mycourse.status_unpaid"),name:"0",status:"0"},{lable:this.$t("mycourse.status_pending_review"),name:"1",status:"1"},{lable:this.$t("mycourse.status_in_service"),name:"5",status:"5"},{lable:this.$t("mycourse.status_unevaluated"),name:"4",status:"4"},{lable:this.$t("mycourse.status_evaluated"),name:"3",status:"3"},{lable:this.$t("mycourse.status_pending_cancel"),name:"6",status:"6"},{lable:this.$t("mycourse.status_refunded"),name:"7",status:"7"},{lable:this.$t("mycourse.status_cancelled"),name:"2",status:"2"},{lable:this.$t("mycourse.status_swapping"),name:"8",status:"8"}]}}},k=w,D=(0,g.Z)(k,a,i,!1,null,"251b16c6",null),x=D.exports}}]);