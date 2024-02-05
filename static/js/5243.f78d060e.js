"use strict";(self["webpackChunkframe"]=self["webpackChunkframe"]||[]).push([[5243],{5243:function(e,t,s){s.r(t),s.d(t,{default:function(){return T}});var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("HomeHeader",{attrs:{topimgIsShow:!1}}),t("div",{staticClass:"content"},[t("classroom-intro",{attrs:{"detail-obj":e.detailObj},on:{getDetail:e.getDetail}}),t("div",{staticClass:"center"},[t("div",{staticClass:"layoutLeft"},[t("select-classroom-calendar",{ref:"calendar",on:{onClassroomSelected:e.onClassroomSelected}})],1),t("div",{staticClass:"layoutRight"},[t("selected-classroom-panel",{attrs:{"detail-obj":e.detailObj,"selected-classrooms":e.selectedClassrooms},on:{remove:e.onSelectClassroomRemove}})],1)])],1)],1)},i=[],l=(s(7658),s(8651)),o=s(6659),r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("div",{staticClass:"tool-bar"},[t("el-select",{staticClass:"dateOuter",attrs:{placeholder:e.$t("CourseCalendar.pls_select"),size:"large"},on:{change:e.onSelectChange},model:{value:e.currentDateRangeIndex,callback:function(t){e.currentDateRangeIndex=t},expression:"currentDateRangeIndex"}},e._l(e.dateList,(function(e,s){return t("el-option",{key:`${e.id}`,attrs:{label:`${e.begin_date}-${e.end_date}`,value:s}})})),1)],1),t("div",[t("calendar-box",{directives:[{name:"loading",rawName:"v-loading",value:e.querying,expression:"querying"}],ref:"calendarBox",attrs:{list:e.list,"date-range":e.selectedDates,selectable:!1,editable:!1},on:{onItemClick:e.onClassroomClick}})],1),e.showDialog?t("select-classroom-dialog",{attrs:{classroom:e.selectedClassroom},on:{select:e.onSelected},model:{value:e.showDialog,callback:function(t){e.showDialog=t},expression:"showDialog"}}):e._e()],1)},n=[],c=s(1206),d=function(){var e=this,t=e._self._c;return t("el-dialog",{attrs:{title:e.$t("CourseCalendar.class_time"),visible:e.showDialog,width:"700px","custom-class":"box",center:""},on:{"update:visible":function(t){e.showDialog=t},close:e.onClose}},[e.classroom?t("div",[t("div",[t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.list,"tooltip-effect":"dark",height:"500px"},on:{"selection-change":e.handleSelectionChange}},[t("el-table-column",{attrs:{type:"selection",width:"55"}}),t("el-table-column",{attrs:{label:e.$t("CourseCalendar.opening_hours"),width:"300"},scopedSlots:e._u([{key:"default",fn:function({row:t}){return[e._v(e._s(t.date.replaceAll("-","/"))+" ("+e._s(e.weekDay[parseInt(t.week)-1])+") "+e._s(t.start_time)+"-"+e._s(t.end_time))]}}],null,!1,1457871235)}),t("el-table-column",{attrs:{label:e.$t("CourseCalendar.price"),width:"180"},scopedSlots:e._u([{key:"default",fn:function({row:s}){return[t("span",{staticClass:"orange"},[e._v("$"+e._s(s.discount_price||0))]),e._v(" "),t("span",{staticClass:"strickout"},[e._v("$"+e._s(s.price||0))])]}}],null,!1,1520201662)}),t("el-table-column",{attrs:{label:e.$t("CourseCalendar.taxes")},scopedSlots:e._u([{key:"default",fn:function({row:t}){return[e._v("$"+e._s(t.tax_price||0))]}}],null,!1,1972095391)})],1)],1),t("el-button",{staticClass:"btn",attrs:{type:"primary"},on:{click:e.select}},[e._v(e._s(e.$t("CourseCalendar.select")))])],1):e._e()])},u=[],C={name:"SelectClassroomDialog",props:["value","classroom"],data(){return{showDialog:!1,list:[],loading:!1,selected:[]}},created(){this.showDialog=this.value,this.getClassList()},computed:{isCheckAll(){if(this.list?.length){let e=this.list.find((e=>!e.checked));return!e}return!1},weekDay(){return[this.$t("CourseCalendar.xingqi1"),this.$t("CourseCalendar.xingqi2"),this.$t("CourseCalendar.xingqi3"),this.$t("CourseCalendar.xingqi4"),this.$t("CourseCalendar.xingqi5"),this.$t("CourseCalendar.xingqi6"),this.$t("CourseCalendar.xingqi7")]}},watch:{value(e){this.showDialog=e},classroom(e){this.getClassList()}},methods:{async getClassList(){if(this.list=[],this.classroom){this.loading=!0;try{const e=await(0,c.qbr)(this.classroom.id,this.classroom.begin_date,this.classroom.end_date);200===e.code&&(this.list=e.data)}catch(e){console.error(e)}this.loading=!1}},onClose(){this.$emit("input",!1)},select(){this.$emit("select",this.selected),this.showDialog=!1},handleSelectionChange(e){this.selected=e}}},h=C,m=s(1001),g=(0,m.Z)(h,d,u,!1,null,"13429e89",null),_=g.exports,v={name:"SelectClassroomCalendar",components:{SelectClassroomDialog:_,CalendarBox:o.Z},data(){return{dateList:[],currentDateRangeIndex:null,showDialog:!1,list:[],id:"",selectedDates:null,querying:!1,selectedClassroom:null}},created(){this.id=this.$route.query.id,this.getCycle()},methods:{async onSelectChange(e){this.queryClassrooms()},async getCycle(){try{const e=await(0,c.EsT)(this.id);if(200===e.code){let t=e.data.list.map((e=>({id:e.id,begin_date:e.begin_date.replaceAll("-","/"),end_date:e.end_date.replaceAll("-","/")})));t&&(this.dateList=[...t],this.dateList.length&&(this.currentDateRangeIndex=0,this.queryClassrooms()))}}catch(e){console.log(e)}},onClassroomClick(e){this.selectedClassroom=e,this.showDialog=!0},async queryClassrooms(){this.querying=!0,this.selectedDates=this.dateList[this.currentDateRangeIndex];try{const e=await(0,c.UvP)(this.id,this.selectedDates.id);200===e.code&&(this.list=e.data)}catch(e){console.log(e)}this.querying=!1},onSelected(e){this.$emit("onClassroomSelected",e)}}},p=v,f=(0,m.Z)(p,r,n,!1,null,"99cdbf62",null),b=f.exports,x=function(){var e=this,t=e._self._c;return e.detailObj?t("div",{staticClass:"box"},[t("div",{staticClass:"ConOne"},[t("div",{staticClass:"title"},[e._v(" "+e._s(e.detailObj.name_arr)+" ")]),t("div",{staticClass:"desc"},[e._v(" "+e._s(e.detailObj.brief_text)+" ")]),t("div",{staticClass:"collectCon"},[t("i",{staticClass:"icon fa fa-heart",class:{active:e.detailObj.is_collect},on:{click:function(t){return t.stopPropagation(),e.toggleFav(e.detailObj)}}}),t("div",{staticClass:"text"},[e._v(e._s(e.$t("ClassroomDetail.shoucang")))])]),t("div",{staticClass:"shareCon",on:{click:e.shareFun}},[t("i",{staticClass:"icon fa fa-share-square-o"}),t("div",{staticClass:"text"},[e._v(e._s(e.$t("CourseDetail.fenxiang")))])])]),t("div",{staticClass:"ConTwo"},e._l(e.detailObj.images_text,(function(s,a){return t("div",{key:a,staticClass:"item",class:"item"+a},[t("el-image",{staticClass:"img",attrs:{src:s,fit:"cover","preview-src-list":e.detailObj.images_text}})],1)})),0),t("div",{staticClass:"ConTre"},[t("div",{staticClass:"whoCourse"},[t("div",{staticClass:"top"},[t("div",{staticClass:"text"},[e._v(e._s(e.detailObj.brief_text))])]),t("div",{staticClass:"tagsCon"},e._l(e.detailObj.label_text,(function(s,a){return t("div",{key:s,staticClass:"item"},[t("div",{staticClass:"text"},[e._v(e._s(s))])])})),0)])])]):e._e()},$=[],y={name:"ClassroomIntro",props:["detailObj","getDetail"],data(){return{}},methods:{async toggleFav(e){const t=this.$loading();try{const t=await(0,c._J$)({id:e.id});200===t.code&&this.$emit("getDetail")}catch(s){console.error(s)}finally{t.close()}},shareFun(){let e=window.location.href,t=this,s=e||"";if(!s)return this.$message.error(t.$t("CourseDetail.baoqianmeifuzhidao")),!1;this.$copyText(s).then((function(e){t.$message.success(t.$t("CourseDetail.fenxiangwangzhi"))}),(function(e){t.$message.error(t.$t("CourseDetail.baoqianmeifuzhidao"))}))}}},D=y,w=(0,m.Z)(D,x,$,!1,null,"06415350",null),k=w.exports,q=function(){var e=this,t=e._self._c;return e.detailObj?t("div",[t("ul",{staticClass:"ulBox"},e._l(e.selectedClassrooms,(function(s,a){return t("li",{key:`${s.id}-${s.date}`},[t("div",[e._v(e._s(s.date.replaceAll("-","/"))+" ("+e._s(e.weekDay[parseInt(s.week)-1])+") "+e._s(s.start_time)+"-"+e._s(s.end_time))]),t("div",{staticClass:"flexLine"},[t("div",{staticClass:"flexBox"},[t("div",[e._v(e._s(e.$t("ClassroomDetail.discount_price"))+": $"+e._s(s.discount_price||0))]),t("div",[e._v(e._s(e.$t("ClassroomDetail.jiage"))+": "),t("span",{staticClass:"line-through"},[e._v("$"+e._s(s.price||0))])])]),t("el-button",{attrs:{type:"text"},on:{click:function(t){return e.remove(a)}}},[e._v(e._s(e.$t("ClassroomDetail.yichu")))])],1)])})),0),t("div",{staticClass:"fee"},[t("div",{staticClass:"flexLine"},[t("div",[e._v(e._s(e.$t("ClassroomDetail.rental_fee")))]),t("div",[e._v("$"+e._s(e.totalClassroomPrice))])]),t("div",{staticClass:"flexLine"},[t("div",[e._v(e._s(e.$t("ClassroomDetail.fuwufei")))]),t("div",[e._v("$"+e._s(e.serviceFee))])]),t("div",{staticClass:"flexLine"},[t("div",[e._v(e._s(e.$t("CourseCalendar.taxes")))]),t("div",[e._v("$"+e._s(e.totalTaxesPrice))])])]),t("div",{staticClass:"flexLine"},[t("div",[e._v(e._s(e.$t("ClassroomDetail.zongjia")))]),t("div",[e._v("$"+e._s(e.totalPrice))])]),t("el-button",{staticClass:"w100",attrs:{type:"primary",disabled:e.disabled,loading:e.submitting},on:{click:e.booking}},[e._v(e._s(e.$t("ClassroomDetail.yuding")))])],1):e._e()},j=[],S=s(794),O={name:"SelectedClassroomPanel",props:{detailObj:{type:Object,default:()=>null},selectedClassrooms:{type:Array,default:()=>[]}},data(){return{submitting:!1}},computed:{disabled(){return!this.selectedClassrooms?.length},weekDay(){return[this.$t("CourseCalendar.xingqi1"),this.$t("CourseCalendar.xingqi2"),this.$t("CourseCalendar.xingqi3"),this.$t("CourseCalendar.xingqi4"),this.$t("CourseCalendar.xingqi5"),this.$t("CourseCalendar.xingqi6"),this.$t("CourseCalendar.xingqi7")]},totalClassroomPrice(){return this.selectedClassrooms.reduce(((e,t)=>(e=(0,S.Z)(t.discount_price||0).plus((0,S.Z)(e)),e)),(0,S.Z)(0))},serviceFee(){return this.detailObj?(0,S.Z)(parseFloat(this.detailObj.service_ratio||0)).div(100).times(this.totalClassroomPrice).decimalPlaces(2):0},totalTaxesPrice(){return this.selectedClassrooms.reduce(((e,t)=>(e=(0,S.Z)(t.tax_price||0).plus(e),e)),(0,S.Z)(0))},totalPrice(){return(0,S.Z)(this.totalClassroomPrice).plus(this.serviceFee).plus(this.totalTaxesPrice)}},methods:{remove(e){this.$emit("remove",e)},async booking(){if(this.selectedClassrooms?.length){this.submitting=!0;try{let e=this.selectedClassrooms.map((e=>e.id)).join(",");const t=await(0,c.UaX)(e);if(200===t.code){let e=t.data;this.goPay(e)}}catch(e){console.error(e)}this.submitting=!1}},goPay(e){this.$router.push({path:"/ClassRoomXiadan",query:{out_trade_no:e,id:this.$route.query.id}})}}},P=O,Z=(0,m.Z)(P,q,j,!1,null,"5d10969e",null),L=Z.exports,I={name:"ClassroomDetail",components:{SelectedClassroomPanel:L,ClassroomIntro:k,SelectClassroomCalendar:b,CalendarBox:o.Z,HomeHeader:l.Z},data(){return{selectedClassrooms:[],detailObj:null}},mounted(){this.getDetail()},methods:{async getDetail(){const e=this.$loading();let t=this.$route.query.id;try{const e=await(0,c.pM1)({id:t});200===e.code&&(this.detailObj=e.data)}catch(s){console.error(s)}finally{e.close()}},onClassroomSelected(e){let t=[...this.selectedClassrooms,...e];this.selectedClassrooms=t.reduce(((e,t)=>{const s=e.find((e=>e.id===t.id&&e.date===t.date));return s||e.push(t),e}),[])},onSelectClassroomRemove(e){this.selectedClassrooms.splice(e,1)}}},R=I,F=(0,m.Z)(R,a,i,!1,null,"0473e9fa",null),T=F.exports}}]);