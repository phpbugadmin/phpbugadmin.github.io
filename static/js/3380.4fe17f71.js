"use strict";(self["webpackChunkframe"]=self["webpackChunkframe"]||[]).push([[3380],{3380:function(t,e,s){s.r(e),s.d(e,{default:function(){return f}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("HomeHeader",{attrs:{topimgIsShow:!1}}),e("div",{staticClass:"listCon mainContent"},[e("div",{staticClass:"center"},[e("div",{staticClass:"topTitle"},[t._v(t._s(t.$t("mycourse.wodekecheng")))]),e("el-tabs",{staticClass:"tab-list",model:{value:t.currentTab,callback:function(e){t.currentTab=e},expression:"currentTab"}},t._l(t.tabList,(function(s){return e("el-tab-pane",{key:s.status,attrs:{name:s.name,status:s.status}},[e("template",{slot:"label"},[e("span",[t._v(t._s(s.lable))])])],2)})),1),t._l(t.tabList,(function(s){return e("div",{key:s.name},[t.currentTab===s.name?e("course-order-list",{attrs:{status:s.status}}):t._e()],1)}))],2)])],1)},r=[],i=s(8442),n=s(9339),o=function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},[e("div",{staticClass:"list"},t._l(t.list,(function(s,a){return e("div",{key:s.id,staticClass:"item"},[s.course?e("img",{staticClass:"img",attrs:{src:s.course.course_images_text[0],alt:""},on:{click:function(e){return t.goOrderDetail(s)}}}):t._e(),e("div",{staticClass:"item-content"},[s.course?e("div",{staticClass:"title"},[e("span",[t._v(t._s(s.course.name_arr))])]):t._e(),e("div",{staticClass:"priceCon"},[e("div",{staticClass:"state"},[t._v(t._s(t.statusMapping[s.status]))]),e("div",{staticClass:"price"},[t._v("$"+t._s(s.price))])]),e("div",{staticClass:"btnCon"},t._l(t.getOperate(s.op),(function(a,r){return e("div",{key:r,staticClass:"btn"},[e("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary",plain:"",size:"mini"},on:{click:function(e){return t.doOperate(a.id,s)}}},[t._v(" "+t._s(a.value)+" ")])],1)})),0)])])})),0),e("div",{staticClass:"fenyeCon"},[e("el-pagination",{staticClass:"fenye",attrs:{"page-size":t.query.row,total:t.total,layout:"prev, pager, next"},on:{"current-change":t.pageChange}})],1)])},u=[],c=(s(7658),s(1206)),l={name:"CourseOrderList",components:{},props:{status:{type:Number|String,default:null}},data(){return{total:0,query:{page:1,row:10},list:[],currentEvaluateItem:null,currentRefundItem:null,loading:!1}},computed:{statusMapping(){return{0:this.$t("mycourse.status_unpaid"),1:this.$t("mycourse.status_pending_review"),5:this.$t("mycourse.status_in_service"),4:this.$t("mycourse.status_unevaluated"),3:this.$t("mycourse.status_evaluated"),6:this.$t("mycourse.status_pending_refund"),7:this.$t("mycourse.status_refunded"),2:this.$t("mycourse.status_cancelled")}}},mounted(){this.getList()},methods:{async getList(){this.status&&(this.query.status=this.status),this.loading=!0;try{const t=await(0,c.kkj)(this.query);if(200===t.code){let e=t.data;this.list=e.list,this.total=e.total}}catch(t){console.error(t)}this.loading=!1},pageChange(t){this.query.page=t,this.getList()},goOrderDetail(t){this.$router.push({path:"/course/order/detail/teacher/"+t.out_trade_no})},goPay(t){let e=t.course_id;this.$router.push({path:"/CourseXiadan",query:{id:e,out_trade_no:t.out_trade_no}})},async cancelCourseOrderFun(t){try{await this.$confirm(this.$t("mycourse.cancel_confirm"),this.$t("mycourse.cancel_order"));const s=this.$loading();try{const e=await(0,c.ehR)(t.out_trade_no);200===e.code&&(this.$message.success(this.$t("ShoppingCart.caozuochenggong")),this.getList())}catch(e){console.error(e)}s.close()}catch(e){console.error(e)}},async refundConfirm(t,e){try{await this.$confirm(this.$t(e?"mycourse.refund_agree_tip":"mycourse.refund_deny_tip"),this.$t("mycourse.refund_confirm"));const a=this.$loading();try{const s=await(0,c.Pvt)(t.out_trade_no,e?1:2);200===s.code&&(this.$message.success(this.$t("ShoppingCart.caozuochenggong")),this.getList())}catch(s){console.error(s)}a.close()}catch(s){console.error(s)}},getOperate(t){let e=["",this.$t("mycourse.cancel_order"),this.$t("mycourse.pay_now"),this.$t("mycourse.apply_refund"),this.$t("mycourse.evaluated"),this.$t("mycourse.refund_agree"),this.$t("mycourse.refund_deny")];return Object.entries(t).map((([t,s])=>({id:t,value:e[parseInt(t)]||s})))},doOperate(t,e){switch(t){case"1":this.cancelCourseOrderFun(e);break;case"2":this.goPay(e);break;case"3":this.$router.push(`/course/orders/refund/${e.out_trade_no}`);break;case"4":break;case"5":this.refundConfirm(e,!0);break;case"6":this.refundConfirm(e,!1);break}}}},d=l,h=s(1001),m=(0,h.Z)(d,o,u,!1,null,"478c5db2",null),_=m.exports,p={name:"login",components:{CourseOrderList:_,HomeHeader:i.Z,HomeFooter:n.Z},data(){return{currentTab:"-1"}},computed:{tabList(){return[{lable:this.$t("mycourse.status_all"),name:"-1"},{lable:this.$t("mycourse.status_unpaid"),name:"0",status:"0"},{lable:this.$t("mycourse.status_pending_review"),name:"1",status:"1"},{lable:this.$t("mycourse.status_in_service"),name:"5",status:"5"},{lable:this.$t("mycourse.status_pending_refund"),name:"6",status:"6"},{lable:this.$t("mycourse.status_refunded"),name:"7",status:"7"}]}}},y=p,g=(0,h.Z)(y,a,r,!1,null,"a72bda4c",null),f=g.exports}}]);