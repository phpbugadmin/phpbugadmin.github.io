"use strict";(self["webpackChunkframe"]=self["webpackChunkframe"]||[]).push([[5254],{5254:function(t,s,e){e.r(s),e.d(s,{default:function(){return k}});var a=function(){var t=this,s=t._self._c;return s("div",{staticClass:"container"},[s("HomeHeader",{attrs:{topimgIsShow:!1}}),s("div",{staticClass:"listCon mainContent"},[s("div",{staticClass:"center"},[s("div",{staticClass:"topTitle"},[t._v(" "+t._s(t.$t("jsdMyYuYueClassrooms.my_classroom_orders"))+" ")]),s("el-tabs",{staticClass:"tab-list",model:{value:t.currentTab,callback:function(s){t.currentTab=s},expression:"currentTab"}},t._l(t.tabList,(function(e){return s("el-tab-pane",{key:e.status,attrs:{name:e.name,status:e.status}},[s("template",{slot:"label"},[s("span",[t._v(t._s(e.lable))])])],2)})),1),t._l(t.tabList,(function(e){return s("div",{key:e.name},[t.currentTab===e.name?s("classroom-order-list",{attrs:{status:e.status}}):t._e()],1)}))],2)])],1)},o=[],l=(e(6229),e(7330),e(2062),e(1176)),r=function(){var t=this,s=t._self._c;return s("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},[s("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"table",staticStyle:{width:"100%"},attrs:{data:t.list}},[s("el-table-column",{attrs:{width:"100"},scopedSlots:t._u([{key:"default",fn:function({row:e}){return[s("img",{staticClass:"img",attrs:{src:e.classroom.images_text[0]},on:{click:function(s){return t.jumpDetail(e)}}})]}}])}),s("el-table-column",{attrs:{label:t.$t("jsdMyYuYueClassrooms.classroom_name"),"header-align":"center",align:"center"},scopedSlots:t._u([{key:"default",fn:function({row:e}){return[s("el-link",{staticClass:"name",on:{click:function(s){return t.toClassroom(e)}}},[t._v(t._s(e.classroom.name_arr))])]}}])}),s("el-table-column",{attrs:{label:t.$t("mycourse.course_time"),"header-align":"center",align:"center",width:"100"},scopedSlots:t._u([{key:"default",fn:function({row:e}){return[s("el-popover",{attrs:{placement:"top-start",width:"200",disabled:e.book_time_arr.length<=1,trigger:"hover"}},[s("div",{staticClass:"popover"},t._l(e.book_time_arr,(function(e,a){return s("div",{key:a},[t._v(" "+t._s(e)+" ")])})),0),s("div",{staticClass:"time",attrs:{slot:"reference"},slot:"reference"},[s("span",[t._v(t._s(e.book_time_arr[0]))]),s("span",{staticClass:"rht"},[e.book_time_arr.length>1?s("i",{staticClass:"el-icon-arrow-right"}):t._e()])])])]}}])}),s("el-table-column",{attrs:{label:t.$t("mycourse.count"),"header-align":"center",align:"center",width:"100"},scopedSlots:t._u([{key:"default",fn:function({row:e}){return[s("span",{staticClass:"count"},[t._v("×"+t._s(e.book_time_arr.length))])]}}])}),s("el-table-column",{attrs:{label:t.$t("mycourse.status"),"header-align":"center",align:"center",width:"110"},scopedSlots:t._u([{key:"default",fn:function({row:e}){return[s("div",{staticClass:"state",class:`status${e.status}`},[t._v(t._s(t.statusMapping[e.status]))])]}}])}),s("el-table-column",{attrs:{label:t.$t("mycourse.price"),"header-align":"center",align:"center",width:"100"},scopedSlots:t._u([{key:"default",fn:function({row:e}){return[s("div",{staticClass:"price"},[t._v("$"+t._s(e.price))])]}}])}),s("el-table-column",{attrs:{label:t.$t("jsdMyYuYueClassrooms.tenant"),"header-align":"center",align:"center"},scopedSlots:t._u([{key:"default",fn:function({row:e}){return[s("div",{staticClass:"studentBox"},[s("div",{staticClass:"flexLine"},[s("div",[s("img",{staticClass:"avatar",attrs:{src:e.user_avatar}}),s("div",[s("span",[t._v(t._s(e.user_name))])])]),s("contact-button",{attrs:{type:"1","target-id":e.user_id}})],1)])]}}])}),s("el-table-column",{attrs:{label:t.$t("mycourse.order_time"),"header-align":"center",align:"center",width:"100"},scopedSlots:t._u([{key:"default",fn:function({row:e}){return[s("div",{staticClass:"timeOrder"},[t._v(t._s(t.$utils.formatDatetime(e.createtime)))])]}}])}),s("el-table-column",{attrs:{label:t.$t("mycourse.operate"),"header-align":"center",align:"center",width:"200"},scopedSlots:t._u([{key:"default",fn:function({row:e}){return[s("div",{staticClass:"btnGroup"},t._l(t.getOperate(e.op),(function(a,o){return s("el-button",{key:o,staticClass:"btn",attrs:{type:"primary",plain:"",size:"mini"},on:{click:function(s){return t.doOperate(a.id,e)}}},[t._v(" "+t._s(a.value)+" ")])})),1)]}}])})],1),s("div",{staticClass:"fenyeCon"},[s("el-pagination",{staticClass:"fenye",attrs:{background:"",layout:"prev, pager, next","page-size":t.query.row,total:t.total},on:{"current-change":t.pageChange}})],1),t.forceCancelClassroomDialogVisible?s("force-cancel-classroom-dialog",{attrs:{classroom:t.forceCancelClassroom},on:{complete:t.onForceCancelComplete},model:{value:t.forceCancelClassroomDialogVisible,callback:function(s){t.forceCancelClassroomDialogVisible=s},expression:"forceCancelClassroomDialogVisible"}}):t._e(),s("el-dialog",{attrs:{title:t.$t("mycourse.refund_deny"),visible:t.dialogVisible,width:"30%","custom-class":"box","before-close":t.handleClose},on:{"update:visible":function(s){t.dialogVisible=s}}},[s("div",[t._v(" "+t._s(t.$t("mycourse.refund_reason"))+" "),s("el-input",{staticClass:"textAreaBox",attrs:{type:"textarea"},model:{value:t.reason,callback:function(s){t.reason=s},expression:"reason"}})],1),s("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:function(s){t.dialogVisible=!1}}},[t._v(t._s(t.$t("mycourse.cancel")))]),s("el-button",{attrs:{type:"primary"},on:{click:t.handleConfirm}},[t._v(t._s(t.$t("mycourse.confirm")))])],1)])],1)},i=[],n=(e(7658),e(1206)),c=function(){var t=this,s=t._self._c;return s("el-dialog",{staticClass:"dialog",attrs:{title:t.$t("mycourse.apply_refund"),visible:t.dialogVisible,width:"400px",center:""},on:{"update:visible":function(s){t.dialogVisible=s},close:()=>t.$emit("input",!1)}},[s("div",{staticClass:"container"},[s("div",{staticClass:"content"},[s("div",{staticClass:"desc"},[t._v(t._s(t.$t("orderDetail.classroom_penalty")))]),s("div",{staticClass:"price"},[s("span",{staticClass:"label"},[t._v(t._s(t.$t("orderDetail.penalty"))+":")]),s("span",{staticClass:"value"},[t._v("$"+t._s(t.penalty))])]),s("el-button",{staticClass:"btn",attrs:{type:"primary",loading:t.submitting},on:{click:t.cancel}},[t._v(t._s(t.$t("mycourse.apply_refund")))])],1)])])},u=[],d=e(794),m={name:"ForceCancelClassroomDialog",props:["value","classroom"],data(){return{dialogVisible:!1,submitting:!1}},created(){this.dialogVisible=this.value},watch:{value(t){this.dialogVisible=t}},computed:{penalty(){return this.classroom?(0,d.Z)(this.classroom.price).times(.1).toFixed(2):"0.00"}},methods:{async cancel(){this.submitting=!0;try{const t=await(0,n.Ik4)(this.classroom.period_id);200===t.code&&(this.$emit("complete"),this.dialogVisible=!1)}catch(t){console.error(t)}this.submitting=!1}}},h=m,_=e(1001),p=(0,_.Z)(h,c,u,!1,null,"c297e202",null),C=p.exports,g=e(1737),f={name:"ClassroomOrderList",components:{ContactButton:g.Z,ForceCancelClassroomDialog:C},props:{status:{type:Number|String,default:null}},data(){return{total:0,query:{page:1,row:10},list:[],dialogVisible:!1,reason:"",selectItem:null,currentEvaluateItem:null,loading:!1,forceCancelClassroomDialogVisible:!1,forceCancelClassroom:null}},computed:{statusMapping(){return{0:this.$t("jsdMyYuYueClassrooms.status_unpaid"),1:this.$t("jsdMyYuYueClassrooms.status_paid"),5:this.$t("jsdMyYuYueClassrooms.status_in_service"),4:this.$t("jsdMyYuYueClassrooms.status_unevaluated"),3:this.$t("jsdMyYuYueClassrooms.status_evaluated"),6:this.$t("jsdMyYuYueClassrooms.status_pending_cancel"),7:this.$t("jsdMyYuYueClassrooms.status_refunded"),2:this.$t("jsdMyYuYueClassrooms.status_cancelled")}}},mounted(){this.getList()},methods:{async getList(){this.loading=!0,this.status&&(this.query.status=this.status);try{const t=await(0,n.j$W)(this.query);if(200===t.code){let s=t.data;this.total=s.total,this.list=s.list?.map((t=>(t.book_time_arr=t.book_time?.split(/,\s*/)||[],t)))}}catch(t){console.error(t)}this.loading=!1},jumpDetail(t){this.$router.push({path:`/classroom/order/detail/owner/${t.out_trade_no}`,query:t.period_id?{id:t.period_id}:null})},goPay(t){let s=t.classroom_id;this.$router.push({path:"/ClassRoomXiadan",query:{id:s,out_trade_no:t.out_trade_no}})},pageChange(t){this.query.page=t,this.getList()},async cancelClassroomOrder(t){try{await this.$confirm(this.$t("jsdMyYuYueClassrooms.cancel_confirm"),this.$t("jsdMyYuYueClassrooms.cancel_order"));const e=this.$loading();try{const s=await(0,n.Ovh)(t.out_trade_no);200===s.code&&(this.$message.success(this.$t("ShoppingCart.caozuochenggong")),this.getList())}catch(s){console.error(s)}e.close()}catch(s){console.error(s)}},async refundConfirm(t,s,e){try{s&&await this.$confirm(this.$t(s?"jsdMyYuYueClassrooms.refund_agree_tip":"jsdMyYuYueClassrooms.refund_deny_tip"),this.$t("jsdMyYuYueClassrooms.refund_confirm"));const o=this.$loading();try{const a=await(0,n.xTe)(t.out_trade_no,s?1:2,e?this.reason:"");200===a.code&&(this.$message.success(this.$t("ShoppingCart.caozuochenggong")),this.getList())}catch(a){console.error(a)}o.close()}catch(a){console.error(a)}},getOperate(t){let s=["",this.$t("jsdMyYuYueClassrooms.cancel_order"),this.$t("jsdMyYuYueClassrooms.pay_now"),this.$t("jsdMyYuYueClassrooms.apply_refund"),this.$t("jsdMyYuYueClassrooms.evaluated"),this.$t("jsdMyYuYueClassrooms.refund_agree"),this.$t("jsdMyYuYueClassrooms.refund_deny")];return Object.entries(t).map((([t,e])=>({id:t,value:s[parseInt(t)]||e})))},handleClose(){this.dialogVisible=!1},handleShow(t){this.dialogVisible=!0,this.selectItem=t},handleConfirm(){this.refundConfirm(this.selectItem,!1,!0),this.dialogVisible=!1},doOperate(t,s){switch(t){case"1":this.cancelClassroomOrder(s);break;case"2":this.goPay(s);break;case"3":this.forceCancel(s);break;case"4":break;case"5":this.refundConfirm(s,!0);break;case"6":this.handleShow(s);break}},forceCancel(t){this.forceCancelClassroom=t,this.forceCancelClassroomDialogVisible=!0},onForceCancelComplete(){this.$message.success(this.$t("CourseCalendar.cancel_success")),this.getList()},toClassroom(t){this.$router.push(`/ClassroomDetail?id=${t.classroom_id}`)}}},b=f,y=(0,_.Z)(b,r,i,!1,null,"092041ea",null),v=y.exports,$={name:"login",components:{ClassroomOrderList:v,HomeHeader:l.Z},data(){return{currentTab:"-1"}},computed:{tabList(){return[{lable:this.$t("jsdMyYuYueClassrooms.status_all"),name:"-1"},{lable:this.$t("jsdMyYuYueClassrooms.status_unpaid"),name:"0",status:"0"},{lable:this.$t("jsdMyYuYueClassrooms.status_paid"),name:"1",status:"1"},{lable:this.$t("jsdMyYuYueClassrooms.status_in_service"),name:"5",status:"5"},{lable:this.$t("jsdMyYuYueClassrooms.status_pending_cancel"),name:"6",status:"6"},{lable:this.$t("jsdMyYuYueClassrooms.status_refunded"),name:"7",status:"7"},{lable:this.$t("jsdMyYuYueClassrooms.status_cancelled"),name:"2",status:"2"}]}},watch:{currentTab:{handler(t){const s=window.location.href.indexOf("#"),e=-1!==s?window.location.href.slice(s):"",a=new URL(window.location.href);a.hash=e.split("?")[0]+`?tab=${t}`,window.history.pushState({path:a.toString()},"",a.toString())}}},created(){this.currentTab=this.$route.query.tab??"-1"},mounted(){},methods:{}},Y=$,w=(0,_.Z)(Y,a,o,!1,null,"c161ecc8",null),k=w.exports}}]);