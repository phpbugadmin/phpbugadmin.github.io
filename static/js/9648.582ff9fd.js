"use strict";(self["webpackChunkframe"]=self["webpackChunkframe"]||[]).push([[9648],{9648:function(e,t,s){s.r(t),s.d(t,{default:function(){return B}});var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("HomeHeader",{attrs:{topimgIsShow:!1}}),t("div",{staticClass:"content"},[t("classroom-intro"),t("div",{staticClass:"center"},[t("div",{staticClass:"layoutLeft"},[t("classroom-calendar",{ref:"calendar",on:{onSelectedUpdate:e.onClassroomSelectedChanged}})],1),t("div",{staticClass:"layoutRight"},[t("el-tabs",{model:{value:e.currentTabName,callback:function(t){e.currentTabName=t},expression:"currentTabName"}},[t("el-tab-pane",{attrs:{label:"定价",name:"0"}},[t("prices",{attrs:{selectedClassroomInfo:e.selectedClassroomInfo},on:{onClassroomDelete:e.onClassroomDelete,saveSuccess:e.onPriceSaveSuccess}})],1),t("el-tab-pane",{attrs:{label:"预定名单",name:"1"}},[t("students",{attrs:{selectedClassroomInfo:e.selectedClassroomInfo}})],1)],1)],1)])],1)],1)},i=[],o=s(528),l=s(2306),n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("div",{staticClass:"tool-bar"},[t("el-date-picker",{attrs:{format:"yyyy/MM/dd",type:"daterange",editable:!1,size:"large","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.dateRangeValue,callback:function(t){e.dateRangeValue=t},expression:"dateRangeValue"}}),t("el-button",{staticClass:"btn20",attrs:{type:"primary",size:"large",loading:e.addingCycle,disabled:!e.dateRangeValue},on:{click:e.addCycle}},[e._v("添加周期")]),t("el-select",{staticClass:"dateOuter",attrs:{placeholder:"请选择",size:"large"},model:{value:e.currentDateRangeIndex,callback:function(t){e.currentDateRangeIndex=t},expression:"currentDateRangeIndex"}},e._l(e.dateList,(function(e,s){return t("el-option",{key:`${e.id}`,attrs:{label:`${e.begin_date}-${e.end_date}`,value:s}})})),1),t("el-button",{staticClass:"btn20",attrs:{type:"primary",size:"large"},on:{click:e.queryClassrooms}},[e._v("查询")])],1),t("div",[t("calendar-box",{directives:[{name:"loading",rawName:"v-loading",value:e.querying,expression:"querying"}],ref:"calendarBox",attrs:{list:e.list,"date-range":e.selectedDates},on:{onCreateItem:e.handleClassroomAdd,onEditItem:e.handleClassroomEdit,onItemClick:e.onClassroomClick,onSelectedUpdate:e.onSelectedUpdate}})],1),e.showDialog?t("classroom-adding-dialog",{attrs:{"form-value":e.formValue},on:{onSubmit:e.onClassroomUpdate},model:{value:e.showDialog,callback:function(t){e.showDialog=t},expression:"showDialog"}}):e._e()],1)},r=[],c=(s(7658),s(7484)),d=s.n(c),u=s(1206),m=s(9612),h={name:"ClassroomCalendar",components:{ClassroomAddingDialog:m.Z,CalendarBox:l.Z},data(){return{dateRangeValue:null,dateList:[],currentDateRangeIndex:null,showDialog:!1,list:[],formValue:null,showDelDialog:!1,id:"",addingCycle:!1,selectedDates:null,querying:!1}},created(){this.id=this.$route.query.id,this.getCycle()},methods:{onSelectedUpdate(e){this.$emit("onSelectedUpdate",{classrooms:e,classroom_date_id:this.dateList[this.currentDateRangeIndex].id})},async getCycle(){try{const e=await(0,u.dR)(this.id);if(200===e.code){console.log(e);let t=e.data.map((e=>({id:e.id,begin_date:e.begin_date.replaceAll("-","/"),end_date:e.end_date.replaceAll("-","/")})));t&&(this.dateList=[...t])}}catch(e){console.log(e)}},async addCycle(){this.addingCycle=!0;try{const e=d()(this.dateRangeValue[0]).format("YYYY-MM-DD"),t=d()(this.dateRangeValue[1]).format("YYYY-MM-DD"),s=await(0,u.ic)(this.id,e,t);200===s.code&&(this.$message.success(this.$t("CourseCalendar.tianjiachengg")),this.dateList.push({id:s.data.id,begin_date:e.replaceAll("-","/"),end_date:t.replaceAll("-","/")}),console.log(this.dateList),this.dateRangeValue=null)}catch(e){console.log(e)}this.addingCycle=!1},onClassroomClick(e){},async onClassroomUpdate(e){this.querying=!0;try{if(e.id){const t=await(0,u.T)(e.id,{day:e.week,...e});200===t.code&&await this.queryClassrooms()}else{const t=await(0,u.a4)(this.id,this.selectedDates.id,{day:e.week,...e});200===t.code&&await this.queryClassrooms()}}catch(t){console.log(t)}this.querying=!1},handleClassroomAdd(e){e&&(this.formValue=e,this.showDialog=!0,console.log("selected"))},handleClassroomEdit(e){this.formValue=e,this.showDialog=!0},async queryClassrooms(){this.querying=!0,this.selectedDates=this.dateList[this.currentDateRangeIndex];try{const e=await(0,u.Qs)(this.id,this.selectedDates.id);200===e.code&&(this.list=e.data)}catch(e){console.log(e)}this.querying=!1},unselectClassroomById(e){this.$refs.calendarBox.unselectItem(e)}}},g=h,C=s(1001),p=(0,C.Z)(g,n,r,!1,null,"398e6c41",null),f=p.exports,v=function(){var e=this,t=e._self._c;return e.detailObj?t("div",{staticClass:"box"},[t("div",{staticClass:"ConOne"},[t("div",{staticClass:"title"},[e._v(" "+e._s(e.detailObj.name_arr)+" ")])])]):e._e()},y=[],_={name:"ClassroomIntro",data(){return{detailObj:null}},mounted(){this.getDetail()},methods:{async getDetail(){let e=this.$route.query.id;try{const t=await(0,u.pM)({id:e});200===t.code&&(this.detailObj=t.data)}catch(t){console.error(t)}}}},b=_,D=(0,C.Z)(b,v,y,!1,null,"27b80bbc",null),w=D.exports,x=function(){var e=this,t=e._self._c;return t("div",[t("dl",[t("dt",[e._v("开放时间")]),e._l(e.selectedClassroom,(function(s,a){return t("dd",{key:Math.random(),staticClass:"flexLine"},[t("div",[e._v(e._s(`${e.weekDay[parseInt(s.week)-1]} ${s.start_time} - ${s.end_time}`))]),t("div",{staticClass:"flex"},[t("div",{staticClass:"time"},[e._v(e._s(e.formatTimeLong(s.start_time,s.end_time)))]),t("el-popconfirm",{attrs:{title:"确定移除该教室么？"},on:{confirm:function(t){return e.remove(s.id)}}},[t("el-button",{attrs:{slot:"reference",type:"text",size:"small"},slot:"reference"},[e._v("移除")])],1)],1)])}))],2),e._m(0),t("div",{staticClass:"priceBox"},[t("div",[e._v("每小时")]),t("div",{staticClass:"num"},[t("span",[e._v("$")]),t("el-input",{attrs:{clearable:!0},model:{value:e.price,callback:function(t){e.price=t},expression:"price"}}),t("span",[e._v("USD")])],1)]),t("div",{staticClass:"discount"},[t("div",{staticClass:"title"},[e._v("折扣")]),e._l(e.discountList,(function(s,a){return t("div",{key:s.id,staticClass:"item",class:e.selectedDiscount?.id===s.id?"selected":"",on:{click:function(t){return e.selected(s)}}},[t("div",[e._v(e._s(s.name))]),t("div",{staticClass:"flex"},[t("div",{staticClass:"num"},[e._v(e._s(s.discount)+"%")]),t("div",{staticClass:"tipRht"},[e._v("折扣后的价格为$"+e._s(s.price)+"USD")])])])})),t("div",{staticClass:"addBtn",on:{click:e.addDiscount}},[t("span",[e._v("添加更多折扣")]),t("i",{staticClass:"el-icon-arrow-right"})]),t("el-button",{attrs:{type:"primary",disabled:e.submitDisabled,loading:e.saving},on:{click:e.save}},[e._v("保存")])],2),t("el-dialog",{attrs:{title:"新折扣",visible:e.showNewDiscount,width:"500px"},on:{"update:visible":function(t){e.showNewDiscount=t}}},[t("div",[t("el-form",{ref:"form",attrs:{model:e.addDiscountForm,rules:e.rules,"label-width":"80px"}},[t("el-form-item",{attrs:{label:"折扣名称",prop:"name"}},[t("el-input",{model:{value:e.addDiscountForm.name,callback:function(t){e.$set(e.addDiscountForm,"name",t)},expression:"addDiscountForm.name"}})],1),t("el-form-item",{attrs:{label:"折扣比例",prop:"discount"}},[t("el-input",{model:{value:e.addDiscountForm.discount,callback:function(t){e.$set(e.addDiscountForm,"discount",t)},expression:"addDiscountForm.discount"}},[t("template",{slot:"append"},[e._v("%")])],2)],1),t("el-form-item",[t("el-button",{on:{click:function(t){e.showNewDiscount=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.onAddSubmit}},[e._v("确 定")])],1)],1)],1)])],1)},$=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"flex mb20"},[t("div",[e._v("价格")]),t("div",[e._v("USD")])])}],I=s(794),k={name:"Prices",props:{selectedClassroomInfo:{type:Object,default:()=>{}}},data(){return{addDiscountForm:{name:"",discount:""},rules:{name:[{required:!0,message:"请输入折扣名称",trigger:"blur"}],discount:[{required:!0,message:"请输入折扣比例",trigger:"blur"}]},price:"",showNewDiscount:!1,discounts:[],selectedDiscount:null,saving:!1}},watch:{selectedClassroom(e){1===e.length?(this.price=e[0].price,this.selectedDiscount=this.discountList.find((t=>t.id===e[0].discount_id))):(this.price="",this.selectedDiscount=null)}},computed:{submitDisabled(){return this.selectedClassroom.length<=0||!this.selectedDiscount||!this.price||(0,I.Z)(this.price).lte(0)},selectedClassroom(){return this.selectedClassroomInfo?.classrooms||[]},discountList(){return this.discounts.map((e=>({price:this.price?(0,I.Z)(this.price).multipliedBy(1-(0,I.Z)(e.discount).div(100)).decimalPlaces(2):0,...e})))},weekDay(){return[this.$t("CourseCalendar.xingqi1"),this.$t("CourseCalendar.xingqi2"),this.$t("CourseCalendar.xingqi3"),this.$t("CourseCalendar.xingqi4"),this.$t("CourseCalendar.xingqi5"),this.$t("CourseCalendar.xingqi6"),this.$t("CourseCalendar.xingqi7")]}},mounted(){this.getDiscountList()},methods:{formatTimeLong(e,t){let s=e.split(":"),a=t.split(":"),i=60*parseInt(a[0])+parseInt(a[1])-(60*parseInt(s[0])+parseInt(s[1]));return this.$t("CourseCalendar.time_long_pattern",[i])},async remove(e){console.log(e);try{this.$emit("onClassroomDelete",e)}catch(t){console.log()}},selected(e){this.selectedDiscount=e},async save(){this.saving=!0;try{let e=this.selectedClassroom.map((e=>e.id)).join(",");const t=await(0,u.Xj)(this.selectedClassroomInfo.classroom_date_id,e,this.price,this.selectedDiscount.id);200===t.code&&(this.$message.success(this.$t("jsdCourseList.shezhichenggong")),this.$emit("saveSuccess"))}catch(e){console.error(e)}finally{this.saving=!1}},async getDiscountList(){try{const e=await(0,u.IR)();200===e.code&&(this.discounts=e.data)}catch(e){console.error(e)}},addDiscount(){this.addDiscountForm.name="",this.addDiscountForm.discount="",this.showNewDiscount=!0},async onAddSubmit(){try{await this.$refs["form"].validate();const e=await(0,u.t2)(this.addDiscountForm);200===e.code&&(this.showNewDiscount=!1,this.getDiscountList())}catch(e){console.error(e)}}}},q=k,S=(0,C.Z)(q,x,$,!1,null,"278e9cbe",null),L=S.exports,R=function(){var e=this,t=e._self._c;return t("div",[t("el-select",{attrs:{editable:!1},on:{change:e.onSelectChange},model:{value:e.currentClassroomId,callback:function(t){e.currentClassroomId=t},expression:"currentClassroomId"}},e._l(e.classList,(function(s,a){return t("el-option",{key:`${s.id}`,attrs:{label:`${e.weekDay[parseInt(s.week)-1]} ${s.date.replaceAll("-","/")} ${s.start_time}-${s.end_time}`,value:s.id}})})),1),t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.querying,expression:"querying"}],staticStyle:{width:"100%"},attrs:{data:e.studentList}},[t("el-table-column",{attrs:{label:"头像",width:"50"},scopedSlots:e._u([{key:"default",fn:function(e){return[t("img",{staticClass:"avatar",attrs:{src:e.row.avatar}})]}}])}),t("el-table-column",{attrs:{prop:"username",label:"姓名",width:"80"}}),t("el-table-column",{attrs:{label:"课程时间"},scopedSlots:e._u([{key:"default",fn:function({row:{date:s,start_time:a,end_time:i}}){return[t("span",[e._v(e._s(s)+" "+e._s(a)+"-"+e._s(i))])]}}])}),t("el-table-column",{attrs:{label:"操作",width:"50"},scopedSlots:e._u([{key:"default",fn:function(s){return[t("el-popconfirm",{attrs:{title:"确定取消该课程么？"},on:{confirm:function(t){return e.cancel(s.row)}}},[t("el-button",{attrs:{slot:"reference",type:"text",size:"small"},slot:"reference"},[e._v("取消")])],1)]}}])})],1),t("el-pagination",{attrs:{background:"","current-page":e.page,"page-size":e.pageSize,"pager-count":5,layout:"prev, pager, next",total:e.total},on:{"current-change":e.onPageChange,"update:currentPage":function(t){e.page=t},"update:current-page":function(t){e.page=t}}})],1)},j=[],N={name:"Students",props:{selectedClassroomInfo:{type:Object,default:()=>{}}},data(){return{studentList:[],total:0,pageSize:10,page:1,id:"",currentClassroomId:"",classList:[],querying:!1}},computed:{selectedClassroom(){return this.selectedClassroomInfo?.classrooms||[]},weekDay(){return[this.$t("CourseCalendar.xingqi1"),this.$t("CourseCalendar.xingqi2"),this.$t("CourseCalendar.xingqi3"),this.$t("CourseCalendar.xingqi4"),this.$t("CourseCalendar.xingqi5"),this.$t("CourseCalendar.xingqi6"),this.$t("CourseCalendar.xingqi7")]}},watch:{selectedClassroom(e){this.studentList=[],this.total=0,this.currentClassroomId="",this.classList=[],e&&e.length&&(this.getStudents(1),this.getClassList())}},mounted(){this.id=this.$route.query.id},methods:{async getClassList(){try{this.currentClassroomId="",this.classList=[];let e=this.selectedClassroom.map((e=>e.id)).join(",");const t=await(0,u.Y0)(e,"");200===t.code&&(this.classList=t.data),console.log(t)}catch(e){console.error(e)}},async getStudents(e){console.log(e),this.querying=!0;try{this.studentList=[],this.total=0;let t=this.selectedClassroom.map((e=>e.id)).join(",");const s=await(0,u.rv)(t,this.currentClassroomId,e,this.pageSize);200===s.code&&(this.studentList=s.data?.list,this.total=s.data?.total,this.page=e)}catch(t){console.error(t)}this.querying=!1},onPageChange(e){this.getStudents(e)},onSelectChange(e){this.getStudents(1)},async cancel(e){try{const t=await(0,u.Ik)(e.id);200===t.code&&(this.$message.success(this.$t("CourseCalendar.cancel_success")),this.getStudents(1))}catch(t){console.error(t)}}}},V=N,Z=(0,C.Z)(V,R,j,!1,null,"29630f8c",null),z=Z.exports,F={name:"ClassroomEdit",components:{Students:z,Prices:L,ClassroomIntro:w,ClassroomCalendar:f,CalendarBox:l.Z,HomeHeader:o.Z},data(){return{currentTabName:0,selectedClassroomInfo:null}},methods:{onClassroomSelectedChanged(e){console.log(e),this.selectedClassroomInfo=e},onClassroomDelete(e){this.$refs.calendar.unselectClassroomById(e)},onPriceSaveSuccess(){this.$refs.calendar.queryClassrooms()}}},A=F,U=(0,C.Z)(A,a,i,!1,null,"c25edf2a",null),B=U.exports}}]);