"use strict";(self["webpackChunkframe"]=self["webpackChunkframe"]||[]).push([[9610],{29610:function(t,e,s){s.r(e),s.d(e,{default:function(){return ct}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("HomeHeader",{attrs:{topimgIsShow:!1}}),e("div",{staticClass:"content mainContent"},[e("classroom-intro",{attrs:{"detail-obj":t.detailObj},on:{getDetail:t.getDetail}}),e("el-divider"),e("div",{staticClass:"book-classroom"},[e("div",{staticClass:"title"},[t._v(t._s(t.$t("CourseDetail.book_classroom")))]),e("div",{staticClass:"center"},[e("div",{staticClass:"layoutLeft"},[e("select-classroom-calendar",{ref:"calendar",on:{onClassroomSelected:t.onClassroomSelected}})],1),e("div",{staticClass:"layoutRight"},[e("div",{staticClass:"rightPanel"},[e("selected-classroom-panel",{attrs:{"detail-obj":t.detailObj,"selected-classrooms":t.selectedClassrooms},on:{remove:t.onSelectClassroomRemove}})],1)])])]),e("score-info",{attrs:{comment:t.comment}}),e("other-classrooms",{attrs:{"other-classroom":t.detailObj?.other_course}})],1),e("div",{staticClass:"report",on:{click:function(e){t.JubaoVisible=!0}}},[e("img",{staticClass:"icon",attrs:{src:s(65237)}}),e("div",{staticClass:"text"},[t._v(" "+t._s(t.$t("CourseDetail.ju_bao_gai_ke_cheng"))+" ")])]),t.JubaoVisible?e("report-dialog",{model:{value:t.JubaoVisible,callback:function(e){t.JubaoVisible=e},expression:"JubaoVisible"}}):t._e(),e("HomeFooter")],1)},i=[],o=(s(57658),s(51009)),l=s(23730),n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{staticClass:"tool-bar"},[e("el-select",{staticClass:"dateOuter",attrs:{placeholder:t.$t("CourseCalendar.pls_select"),size:"large"},on:{change:t.onSelectChange},model:{value:t.currentDateRangeIndex,callback:function(e){t.currentDateRangeIndex=e},expression:"currentDateRangeIndex"}},t._l(t.dateList,(function(t,s){return e("el-option",{key:`${t.id}`,attrs:{label:`${t.begin_date}-${t.end_date}`,value:s}})})),1)],1),e("div",[e("calendar-box",{directives:[{name:"loading",rawName:"v-loading",value:t.querying,expression:"querying"}],ref:"calendarBox",attrs:{list:t.list,"date-range":t.selectedDates,selectable:!1,editable:!1},on:{onItemClick:t.onClassroomClick}})],1),t.showDialog?e("select-classroom-dialog",{attrs:{classroom:t.selectedClassroom},on:{select:t.onSelected},model:{value:t.showDialog,callback:function(e){t.showDialog=e},expression:"showDialog"}}):t._e()],1)},r=[],c=s(51206),d=function(){var t=this,e=t._self._c;return e("el-dialog",{attrs:{title:t.$t("CourseCalendar.booking_classroom"),visible:t.showDialog,width:"950px","custom-class":"box",center:""},on:{"update:visible":function(e){t.showDialog=e},close:t.onClose}},[t.classroom?e("div",[e("div",[t._v(t._s(t.$t("CourseCalendar.book_date"))+"："),e("el-date-picker",{attrs:{format:"yyyy/MM/dd",type:"daterange",editable:!1,size:"mini","picker-options":t.pickerOptions,"start-placeholder":t.$t("CourseCalendar.begin_date"),"end-placeholder":t.$t("CourseCalendar.end_date")},model:{value:t.dateRangeValue,callback:function(e){t.dateRangeValue=e},expression:"dateRangeValue"}})],1),e("div",[e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:t.list,"tooltip-effect":"dark",size:"mini",height:"360px"},on:{"selection-change":t.handleSelectionChange}},[e("el-table-column",{attrs:{type:"selection",width:"50"}}),e("el-table-column",{attrs:{label:t.$t("CourseCalendar.opening_hours"),width:"250"},scopedSlots:t._u([{key:"default",fn:function({row:e}){return[t._v(t._s(e.date.replaceAll("-","/"))+" ("+t._s(t.weekDay[parseInt(e.week)-1])+") "+t._s(e.start_time)+"-"+t._s(e.end_time))]}}],null,!1,1457871235)}),e("el-table-column",{attrs:{label:t.$t("CourseCalendar.price"),width:"180"},scopedSlots:t._u([{key:"default",fn:function({row:s}){return[e("span",{staticClass:"orange"},[t._v("$"+t._s(s.discount_price||0))]),t._v(" "),e("span",{staticClass:"strickout"},[t._v("$"+t._s(s.price||0))])]}}],null,!1,1520201662)}),e("el-table-column",{attrs:{width:"120",label:t.$t("CourseCalendar.taxes")},scopedSlots:t._u([{key:"default",fn:function({row:e}){return[t._v("$"+t._s(e.tax_price||0))]}}],null,!1,1972095391)}),e("el-table-column",{attrs:{width:"120",label:t.$t("CourseDetail.fuwufei")},scopedSlots:t._u([{key:"default",fn:function({row:e}){return[t._v("$"+t._s(e.service_price||0))]}}],null,!1,4173936687)}),e("el-table-column",{attrs:{label:t.$t("CourseDetail.amount_due")},scopedSlots:t._u([{key:"default",fn:function({row:s}){return[e("b",[t._v("$"+t._s(s.amount_due||0))])]}}],null,!1,1414380082)})],1)],1),e("el-button",{staticClass:"btn",attrs:{size:"mini",type:"primary"},on:{click:t.select}},[t._v(t._s(t.$t("CourseCalendar.select")))])],1):t._e()])},u=[],m=s(70794),C=s(27484),h=s.n(C),_={name:"SelectClassroomDialog",props:["value","classroom"],data(){return{showDialog:!1,list:[],loading:!1,selected:[],dateRangeValue:null,pickerOptions:null}},created(){this.showDialog=this.value,this.updatePickerOption()},computed:{isCheckAll(){if(this.list?.length){let t=this.list.find((t=>!t.checked));return!t}return!1},weekDay(){return[this.$t("CourseCalendar.xingqi1"),this.$t("CourseCalendar.xingqi2"),this.$t("CourseCalendar.xingqi3"),this.$t("CourseCalendar.xingqi4"),this.$t("CourseCalendar.xingqi5"),this.$t("CourseCalendar.xingqi6"),this.$t("CourseCalendar.xingqi7")]}},watch:{value(t){this.showDialog=t},classroom(t){this.getClassList(),this.updatePickerOption()},dateRangeValue(t){if(t){let e=h()(t[0]).format("YYYY-MM-DD"),s=h()(t[1]).format("YYYY-MM-DD");this.getClassList(e,s)}else this.list=[]}},methods:{updatePickerOption(){if(this.classroom){let t=this.classroom.begin_date,e=this.classroom.end_date;this.dateRangeValue=[h()(t),h()(e)],this.pickerOptions={disabledDate(s){let a=s.getTime()<h()(t).hour(0).minute(0).second(0).millisecond(0).toDate(),i=s.getTime()>h()(e).hour(0).minute(0).second(0).millisecond(0).toDate();return a||i}}}},async getClassList(t,e){if(this.list=[],this.classroom){this.loading=!0;try{const s=await(0,c.qbr)(this.classroom.id,t,e);200===s.code&&(this.list=s.data?.map((t=>({...t,amount_due:new m.Z(t.discount_price).plus(t.tax_price).plus(t.service_price).toString()})))||[])}catch(s){console.error(s)}this.loading=!1}},onClose(){this.$emit("input",!1)},select(){this.$emit("select",this.selected),this.showDialog=!1},handleSelectionChange(t){this.selected=t}}},p=_,v=s(1001),g=(0,v.Z)(p,d,u,!1,null,"41535620",null),b=g.exports,f={name:"SelectClassroomCalendar",components:{SelectClassroomDialog:b,CalendarBox:l.Z},data(){return{dateList:[],currentDateRangeIndex:null,showDialog:!1,list:[],id:"",selectedDates:null,querying:!1,selectedClassroom:null}},created(){this.id=this.$route.query.id,this.getCycle()},methods:{async onSelectChange(t){this.queryClassrooms()},async getCycle(){try{const t=await(0,c.EsT)(this.id);if(200===t.code){let e=t.data?.list?.map((t=>({id:t.id,begin_date:t.begin_date.replaceAll("-","/"),end_date:t.end_date.replaceAll("-","/")})));e&&(this.dateList=[...e],this.dateList.length&&(this.currentDateRangeIndex=0,this.queryClassrooms()))}}catch(t){console.log(t)}},onClassroomClick(t){this.selectedClassroom=t,this.showDialog=!0},async queryClassrooms(){this.querying=!0,this.selectedDates=this.dateList[this.currentDateRangeIndex];try{const t=await(0,c.UvP)(this.id,this.selectedDates.id);200===t.code&&(this.list=t.data)}catch(t){console.log(t)}this.querying=!1},onSelected(t){this.$emit("onClassroomSelected",t)}}},$=f,x=(0,v.Z)($,n,r,!1,null,"482cf15e",null),y=x.exports,j=function(){var t=this,e=t._self._c;return t.detailObj?e("div",{staticClass:"box"},[e("div",{staticClass:"ConOne"},[e("div",{staticClass:"title-bar"},[e("div",{staticClass:"title"},[t._v(" "+t._s(t.detailObj.name_arr)+" ")]),e("div",{staticClass:"actionBtns"},[e("el-link",{attrs:{icon:"icon fa fa-share-square-o active"},on:{click:t.shareFun}},[t._v(t._s(t.$t(t.$t("CourseDetail.fenxiang"))))]),e("el-link",{on:{click:function(e){return t.toggleFav(t.detailObj)}}},[e("i",{staticClass:"icon fa fa-heart",class:{active:t.detailObj.is_collect}}),t._v(t._s(t.$t("ClassroomDetail.shoucang"))+" ")])],1)]),e("div",{staticClass:"addr"},[e("div",[e("i",{staticClass:"el-icon-location-information"}),e("span",[t._v(t._s(t.detailObj.area_text))])]),e("div",{staticClass:"price"},[e("div",[t._v("$ "+t._s(t.detailObj.discount_price))]),e("div",{staticClass:"discount"},[t._v("$ "+t._s(t.detailObj.price))])])]),t.detailObj.type_text?e("el-tag",{attrs:{size:"small"}},[t._v(t._s(t.detailObj.type_text))]):t._e(),e("div",{staticClass:"desc"},[t._v(" "+t._s(t.detailObj.brief_text)+" ")])],1),e("image-grid",{attrs:{"image-list":t.detailObj.images_text}}),t.detailObj?.user_info?e("div",{staticClass:"host-box"},[e("div",{staticClass:"host"},[e("el-avatar",{attrs:{src:t.detailObj.user_info.avatar,size:"large"}}),e("span",{staticClass:"username"},[t._v(t._s(t.$t("jsdClassroomPublish.hosted_by",[t.detailObj.user_info.username])))])],1),e("contact-button",{attrs:{type:"1","custom-data":t.getCustomMessage(),text:t.$t("jsdClassroomPublish.contact_host"),"target-id":t.detailObj.user_info.id}})],1):t._e(),e("el-divider"),e("div",{staticClass:"ConTre"},[e("div",{staticClass:"whoCourse"},[e("div",{staticClass:"tagsCon"},[e("div",{staticClass:"label"},[t._v(t._s(t.$t("jsdClassroomPublish.classroom_sp")))]),e("div",{staticClass:"tagBox value"},t._l(t.detailObj.label_text,(function(a,i){return e("div",{key:i,staticClass:"tag"},[e("img",{staticClass:"medal",attrs:{src:s(82459),alt:""}}),e("span",[t._v(t._s(a))])])})),0)])])])],1):t._e()},D=[],w=s(64383),k=s(59190),O=s(61271),q={name:"ClassroomIntro",components:{ContactButton:k.Z,ImageGrid:w.Z},props:["detailObj","getDetail"],data(){return{}},methods:{getCustomMessage(){if(!this.detailObj)return null;let t={id:this.detailObj.user_id,message:JSON.stringify({image:this.detailObj?.images_text[0]||"",name:this.detailObj?.name_arr||"",classroom_id:this.detailObj.id},null,0),type:O.dv};return t},async toggleFav(t){const e=this.$loading();try{const e=await(0,c._J$)({id:t.id});200===e.code&&this.$emit("getDetail")}catch(s){console.error(s)}finally{e.close()}},shareFun(){let t=window.location.href,e=this,s=t||"";if(!s)return this.$message.error(e.$t("CourseDetail.baoqianmeifuzhidao")),!1;this.$copyText(s).then((function(t){e.$message.success(e.$t("CourseDetail.fenxiangwangzhi"))}),(function(t){e.$message.error(e.$t("CourseDetail.baoqianmeifuzhidao"))}))}}},F=q,S=(0,v.Z)(F,j,D,!1,null,"0734dd62",null),Z=S.exports,R=function(){var t=this,e=t._self._c;return t.detailObj?e("div",{staticClass:"panel"},[e("div",{staticClass:"titleBox"},[t._v(t._s(t.detailObj.cancel_rule)+" "),t.detailObj.cancel_rule_text?e("el-tooltip",{staticClass:"item",attrs:{effect:"dark",placement:"top-start"}},[e("div",{attrs:{slot:"content"},slot:"content"},[e("div",{staticClass:"content"},[t._v(t._s(t.detailObj.cancel_rule_text))])]),e("i",{staticClass:"el-icon-question fontColor"})]):t._e()],1),e("ul",{staticClass:"ulBox"},[t.selectedClassrooms?.length>0?t._l(t.selectedClassrooms,(function(s,a){return e("li",{key:`${s.id}-${s.date}`},[e("div",{staticClass:"flexBox"},[e("div",[t._v(t._s(s.date.replaceAll("-","/"))+" ("+t._s(t.weekDay[parseInt(s.week)-1])+") "+t._s(s.start_time)+"-"+t._s(s.end_time))]),e("span",[e("b",[e("i",{staticClass:"el-icon-discount"}),t._v(" $"+t._s(s.discount_price||0))]),e("el-divider",{attrs:{direction:"vertical"}}),e("span",{staticClass:"line-through"},[t._v("$"+t._s(s.price||0))])],1)]),e("el-button",{attrs:{type:"text"},on:{click:function(e){return t.remove(a)}}},[t._v(t._s(t.$t("ClassroomDetail.yichu")))])],1)})):e("el-empty",{staticClass:"empty",attrs:{"image-size":100}})],2),e("div",{staticClass:"fee"},[e("div",{staticClass:"flexLine"},[e("div",[t._v(t._s(t.$t("ClassroomDetail.count")))]),e("b",[t._v(t._s(t.selectedClassrooms?.length||0))])]),e("div",{staticClass:"flexLine"},[e("div",[t._v(t._s(t.$t("ClassroomDetail.rental_fee")))]),e("b",[t._v("$"+t._s(t.totalClassroomPrice))])]),e("div",{staticClass:"flexLine"},[e("div",[t._v(t._s(t.$t("ClassroomDetail.fuwufei")))]),e("b",[t._v("$"+t._s(t.serviceFee))])]),e("div",{staticClass:"flexLine"},[e("div",[t._v(t._s(t.$t("CourseCalendar.taxes")))]),e("b",[t._v("$"+t._s(t.totalTaxesPrice))])]),e("el-divider"),e("div",{staticClass:"flexLine"},[e("div",[t._v(t._s(t.$t("ClassroomDetail.zongjia")))]),e("b",[t._v("$"+t._s(t.totalPrice))])])],1),e("el-button",{staticClass:"w100",attrs:{type:"primary",disabled:t.disabled,loading:t.submitting},on:{click:t.booking}},[t._v(t._s(t.$t("ClassroomDetail.yuding")))])],1):t._e()},P=[],I={name:"SelectedClassroomPanel",props:{detailObj:{type:Object,default:()=>null},selectedClassrooms:{type:Array,default:()=>[]}},data(){return{submitting:!1}},computed:{disabled(){return!this.selectedClassrooms?.length},weekDay(){return[this.$t("CourseCalendar.xingqi1"),this.$t("CourseCalendar.xingqi2"),this.$t("CourseCalendar.xingqi3"),this.$t("CourseCalendar.xingqi4"),this.$t("CourseCalendar.xingqi5"),this.$t("CourseCalendar.xingqi6"),this.$t("CourseCalendar.xingqi7")]},totalClassroomPrice(){return this.selectedClassrooms.reduce(((t,e)=>(t=(0,m.Z)(e.discount_price||0).plus((0,m.Z)(t)),t)),(0,m.Z)(0))},serviceFee(){return this.detailObj?(0,m.Z)(parseFloat(this.detailObj.service_ratio||0)).div(100).times(this.totalClassroomPrice).decimalPlaces(2):0},totalTaxesPrice(){return this.selectedClassrooms.reduce(((t,e)=>(t=(0,m.Z)(e.tax_price||0).plus(t),t)),(0,m.Z)(0))},totalPrice(){return(0,m.Z)(this.totalClassroomPrice).plus(this.serviceFee).plus(this.totalTaxesPrice)}},methods:{remove(t){this.$emit("remove",t)},async booking(){if(this.selectedClassrooms?.length){this.submitting=!0;try{let t=this.selectedClassrooms.map((t=>t.id)).join(",");const e=await(0,c.UaX)(t);if(200===e.code){let t=e.data;this.goPay(t)}}catch(t){console.error(t)}this.submitting=!1}},goPay(t){this.$router.push({path:"/ClassRoomXiadan",query:{out_trade_no:t,id:this.$route.query.id}})}}},z=I,L=(0,v.Z)(z,R,P,!1,null,"32e19ee6",null),U=L.exports,T=function(){var t=this,e=t._self._c;return t.comment?e("div",{staticClass:"pingjiaCon"},[e("div",{staticClass:"totalRate"},[e("img",{staticClass:"rateImg",attrs:{src:s(45727)}}),e("div",{staticClass:"txt"},[t._v(t._s(parseFloat(t.comment.total_value||0).toFixed(2)))]),e("img",{staticClass:"rateImg",attrs:{src:s(18352)}})]),e("div",{staticClass:"miaoshuList"},t._l(t.comment?.option||[],(function(s,a){return e("div",{key:s.id,staticClass:"item"},[e("div",{staticClass:"text"},[t._v(t._s(s.name))]),e("div",{staticClass:"value"},[t._v(t._s(parseFloat(s.value).toFixed(1)))]),e("div",{staticClass:"barCon rateBox"},[e("el-rate",{attrs:{disabled:"","allow-half":!0,colors:["#99A9BF","#ff914c","#ff914c"]},model:{value:s.value,callback:function(e){t.$set(s,"value",e)},expression:"item.value"}})],1)])})),0),t.comment?.content?.length>0?e("div",{staticClass:"comment-count"},[t._v(t._s(t.$t("CourseDetail.tiaopingjia"))+" ("+t._s(t.comment?.content?.length||"0")+")")]):t._e(),t.contents.length>0?e("div",{staticClass:"pingjiaList"},t._l(t.contents,(function(s,a){return e("div",{key:s.id,staticClass:"item"},[e("div",{staticClass:"dect"},[t._v(" "+t._s(s.content)+" ")]),e("div",{staticClass:"top"},[e("img",{staticClass:"img",attrs:{src:s.avatar}}),e("div",{staticClass:"info"},[e("div",{staticClass:"name"},[t._v(t._s(s.nickname))]),e("div",{staticClass:"time"},[t._v(t._s(s.date))])])])])})),0):t._e()]):t._e()},V=[],B={name:"ScoreInfo",props:{comment:{type:Object,default:()=>null}},computed:{contents(){return this.comment?.content?.length?this.comment.content.filter((t=>!!t.content)):[]}}},M=B,A=(0,v.Z)(M,T,V,!1,null,"19807408",null),J=A.exports,E=function(){var t=this,e=t._self._c;return t.otherClassroom?.length>0?e("div",{staticClass:"qitaCounseCon"},[e("div",{staticClass:"sectitle"},[t._v(t._s(t.$t("ClassroomDetail.other_classroom")))]),e("div",{staticClass:"list"},t._l(t.otherClassroom,(function(t){return e("classroom-item",{key:t.id,attrs:{classroom:t}})})),1)]):t._e()},Y=[],H=s(53913),N={name:"OtherClassrooms",components:{ClassroomItem:H.Z},props:{otherClassroom:{type:Array,default:()=>[]}},methods:{}},X=N,G=(0,v.Z)(X,E,Y,!1,null,"05800b9f",null),K=G.exports,Q=s(18031),W=function(){var t=this,e=t._self._c;return e("el-dialog",{staticClass:"jubaoModal",attrs:{title:t.$t("CourseDetail.ningweihejubao"),visible:t.showDialog,width:"524px",center:""},on:{"update:visible":function(e){t.showDialog=e},close:t.onClose}},[e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"modalMain"},[e("el-form",{ref:"RefRuleForm",attrs:{model:t.jubaoForm,rules:t.Rules}},[e("el-radio-group",{model:{value:t.jubaoContent,callback:function(e){t.jubaoContent=e},expression:"jubaoContent"}},t._l(t.jubaoOptions,(function(s,a){return e("div",{key:s.id,staticClass:"item"},[e("div",{staticClass:"leftText"},[t._v(t._s(s.name_arr))]),e("el-radio",{attrs:{label:s.name_arr}})],1)})),0),e("el-input",{attrs:{placeholder:t.$t("CourseDetail.qing_shu_ru_nei_rong"),type:"textarea",clearable:""},model:{value:t.jubaoContentOther,callback:function(e){t.jubaoContentOther=e},expression:"jubaoContentOther"}}),e("el-form-item",{attrs:{prop:"images"}},[e("div",{staticClass:"uploadTitle"},[t._v(" "+t._s(t.$t("CourseDetail.zuo_zheng_tu_pian"))+": ")]),e("div",{staticClass:"uploadCon"},[e("CustomElUpload",{ref:"customElUpload1",attrs:{template_type:"picture-card",upload_tip_text:"",files_limit:10,add_param_data:"",autoUpload:!0},model:{value:t.jubaoForm.images,callback:function(e){t.$set(t.jubaoForm,"images",e)},expression:"jubaoForm.images"}})],1)]),e("el-form-item",{attrs:{prop:"videos"}},[e("div",{staticClass:"uploadTitle"},[t._v(" "+t._s(t.$t("CourseDetail.zuo_zheng_shi_pin"))+": ")]),e("div",{staticClass:"uploadCon"},[e("CustomElUpload",{ref:"customElUpload2",attrs:{template_type:"text",upload_tip_text:"",files_limit:10,add_param_data:"",file_type:"video",autoUpload:!0},model:{value:t.jubaoForm.videos,callback:function(e){t.$set(t.jubaoForm,"videos",e)},expression:"jubaoForm.videos"}})],1)])],1),e("div",[e("el-button",{staticClass:"btnConfirm",attrs:{type:"primary",loading:t.submitting},on:{click:t.jubaoConfirm}},[t._v(" "+t._s(t.$t("CourseDetail.que_ren"))+" ")])],1)],1)])},tt=[],et=s(15936),st={name:"ReportDialog",components:{CustomElUpload:et.Z},props:["value"],data(){return{showDialog:!1,jubaoForm:{images:"",videos:""},jubaoContent:"",jubaoContentOther:"",jubaoOptions:[],Rules:{},loading:!1,submitting:!1}},created(){this.getJubaoOptions(),this.showDialog=this.value},watch:{value(t){this.showDialog=t}},methods:{onClose(){this.$emit("input",!1)},async jubaoConfirm(){let t=this.$route.query.id;if(!this.jubaoContent&&!this.jubaoContentOther)return this.$message.error(this.$t("CourseDetail.qing_shu_ru_nei_rong")),!1;let e=this.$refs.customElUpload1.getAllFileIsUploadComplete();if(!e)return this.$message.error(this.$t("CourseDetail.tu_pian_wen_jian_zheng_zai")),!1;let s=this.$refs.customElUpload2.getAllFileIsUploadComplete();if(!s)return this.$message.error(this.$t("CourseDetail.shi_pin_wen_jian_zheng_zai")),!1;let a={id:t,report_option:this.jubaoContent,report_content:this.jubaoContentOther,images:this.jubaoForm.images,video:this.jubaoForm.videos};try{this.submitting=!0;const t=await(0,c.STb)(a);200===t.code&&(this.jubaoContent="",this.jubaoContentOther="",this.jubaoForm.images="",this.jubaoForm.videos="",this.showDialog=!1,await this.$alert(this.$t("CourseDetail.report_confirm_tips"),this.$t("CourseDetail.report_confirm"),{callback:t=>{this.showDialog=!1}}))}catch(i){console.error(i)}this.submitting=!1},async getJubaoOptions(){try{this.loading=!0;const t=await(0,c.e5F)({type:2});if(200==t.code){let e=t.data;this.jubaoOptions=e}}catch(t){console.error(t)}this.loading=!1}}},at=st,it=(0,v.Z)(at,W,tt,!1,null,"4836efd7",null),ot=it.exports,lt={name:"ClassroomDetail",components:{ReportDialog:ot,HomeFooter:Q.Z,OtherClassrooms:K,ScoreInfo:J,SelectedClassroomPanel:U,ClassroomIntro:Z,SelectClassroomCalendar:y,CalendarBox:l.Z,HomeHeader:o.Z},data(){return{selectedClassrooms:[],comment:{},detailObj:null,JubaoVisible:!1}},mounted(){this.getDetail()},methods:{async getDetail(){const t=this.$loading();let e=this.$route.query.id;try{const t=await(0,c.pM1)({id:e});200===t.code&&(this.detailObj=t.data,this.comment=t.data.comment)}catch(s){console.error(s)}finally{t.close()}},onClassroomSelected(t){let e=[...this.selectedClassrooms,...t];this.selectedClassrooms=e.reduce(((t,e)=>{const s=t.find((t=>t.id===e.id&&t.date===e.date));return s||t.push(e),t}),[])},onSelectClassroomRemove(t){this.selectedClassrooms.splice(t,1)}}},nt=lt,rt=(0,v.Z)(nt,a,i,!1,null,"49ccca3c",null),ct=rt.exports}}]);