"use strict";(self["webpackChunkframe"]=self["webpackChunkframe"]||[]).push([[6472],{6472:function(e,t,s){s.r(t),s.d(t,{default:function(){return ue}});var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("HomeHeader",{attrs:{topimgIsShow:!1}}),t("div",{staticClass:"center mainContent"},[t("div",{staticClass:"layoutLeft"},[t("class-calendar",{ref:"weekCalendar",on:{onSelectedUpdate:e.onClassSelectedChanged}})],1),t("div",{staticClass:"layoutRight"},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.selectedClassInfo?.courses?.length>0,expression:"selectedClassInfo?.courses?.length > 0"}]},[t("div",{directives:[{name:"show",rawName:"v-show",value:!e.showSetting,expression:"!showSetting"}]},[t("el-tabs",{model:{value:e.currentTabName,callback:function(t){e.currentTabName=t},expression:"currentTabName"}},[t("el-tab-pane",{attrs:{label:e.$t("CourseCalendar.setting"),name:"0"}},[t("course-list",{attrs:{selectedClassInfo:e.selectedClassInfo},on:{onCourseDelete:e.onCourseDelete,saveSuccess:e.toSetting,clearSelection:e.onCourseClear}})],1),t("el-tab-pane",{attrs:{label:e.$t("CourseCalendar.students_list"),name:"2"}},[t("students",{attrs:{selectedClassInfo:e.selectedClassInfo}})],1),t("el-tab-pane",{attrs:{label:e.$t("CourseCalendar.booking_classroom"),name:"3"}},[t("classrooms",{attrs:{selectedClassInfo:e.selectedClassInfo}})],1)],1)],1),e.showSetting?t("div",[t("prices",{attrs:{selectedClassInfo:e.selectedClassInfo},on:{saveSuccess:e.onPriceSaveSuccess,cancel:function(t){e.showSetting=!1}}})],1):e._e()]),t("el-empty",{directives:[{name:"show",rawName:"v-show",value:!(e.selectedClassInfo?.courses?.length>0),expression:"!(selectedClassInfo?.courses?.length > 0)"}],attrs:{description:e.$t("CourseCalendar.left")}})],1)]),t("HomeFooter")],1)},i=[],l=s(4631),n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("div",[t("div",{staticClass:"courseName"},[e._v(e._s(e.courseName))])]),t("div",{staticClass:"tool-bar"},[t("el-date-picker",{attrs:{format:"yyyy/MM/dd",type:"daterange",editable:!1,size:"large","picker-options":e.pickerOptions,"start-placeholder":e.$t("CourseCalendar.begin_date"),"end-placeholder":e.$t("CourseCalendar.end_date")},model:{value:e.dateRangeValue,callback:function(t){e.dateRangeValue=t},expression:"dateRangeValue"}}),t("el-button",{staticClass:"btn20",attrs:{type:"primary",size:"large",loading:e.addingCycle,disabled:!e.dateRangeValue},on:{click:e.addCycle}},[e._v(e._s(e.$t("CourseCalendar.add_period")))]),t("el-select",{staticClass:"dateOuter",attrs:{placeholder:e.$t("CourseCalendar.pls_select"),size:"large"},on:{change:e.onDateRangeChange},model:{value:e.currentDateRangeIndex,callback:function(t){e.currentDateRangeIndex=t},expression:"currentDateRangeIndex"}},e._l(e.dateList,(function(e,s){return t("el-option",{key:`${e.id}`,attrs:{label:`${e.begin_date}-${e.end_date}`,value:s}})})),1)],1),t("calendar-box",{directives:[{name:"loading",rawName:"v-loading",value:e.loadingCourse,expression:"loadingCourse"}],ref:"calendarBox",attrs:{list:e.classList,"date-range":e.selectedDates},on:{onCreateItem:e.handleClassAdd,onEditItem:e.handleClassEdit,onItemClick:e.onClassClick,onSelectedUpdate:e.onSelectedUpdate}}),e.showDialog?t("class-adding-dialog",{attrs:{"form-value":e.formValue},on:{onSubmit:e.onClassUpdate},model:{value:e.showDialog,callback:function(t){e.showDialog=t},expression:"showDialog"}}):e._e(),e.showDelDialog?t("class-delete-dialog",{model:{value:e.showDelDialog,callback:function(t){e.showDelDialog=t},expression:"showDelDialog"}}):e._e()],1)},r=[],o=(s(7658),s(7484)),d=s.n(o),c=function(){var e=this,t=e._self._c;return t("el-dialog",{attrs:{title:e.formValue?.id?e.$t("CourseCalendar.bianjikechengshijian"):e.$t("CourseCalendar.tianjiakechengshijian"),visible:e.showAddDialog,width:"460px","custom-class":"box","destroy-on-close":!0,center:""},on:{"update:visible":function(t){e.showAddDialog=t},close:e.onClose}},[t("div",{staticClass:"modalMain"},[t("div",{staticClass:"title"},[e._v(" "+e._s(e.$t("CourseCalendar.keyikaishe15fenzhong"))+" ")]),t("el-form",{ref:"refAddForm",attrs:{model:e.addForm,rules:e.rules}},[t("el-form-item",{attrs:{prop:"weeks"}},[t("el-select",{attrs:{placeholder:e.$t("CourseCalendar.xuanzexingqiji"),editable:!1,disabled:!!e.formValue?.id},model:{value:e.addForm.week,callback:function(t){e.$set(e.addForm,"week",t)},expression:"addForm.week"}},e._l(e.weekOptions,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),t("el-form-item",{attrs:{prop:"start_time"}},[t("el-time-select",{staticClass:"elTimeSelect",attrs:{placeholder:e.$t("CourseCalendar.qishishijian"),editable:!1,"picker-options":{start:"06:00",step:"00:15",end:"21:45"}},on:{change:function(t){return e.startTimeChange(t)}},model:{value:e.addForm.start_time,callback:function(t){e.$set(e.addForm,"start_time",t)},expression:"addForm.start_time"}})],1),t("el-form-item",{staticClass:"codeFormItem",attrs:{prop:"end_time"}},[t("el-time-select",{attrs:{placeholder:e.$t("CourseCalendar.jieshushijian"),editable:!1,"picker-options":{start:"06:15",step:"00:15",end:"22:00"}},on:{change:function(t){return e.endTimeChange(t)}},model:{value:e.addForm.end_time,callback:function(t){e.$set(e.addForm,"end_time",t)},expression:"addForm.end_time"}})],1)],1),t("div",{staticClass:"jpBtnGreen btnConfirm",on:{click:e.addKejieConfirm}},[e._v(" "+e._s(e.$t("CourseCalendar.save_class"))+" ")])],1)])},u=[],h={name:"ClassAddingDialog",props:["value","formValue"],data(){return{showAddDialog:!1,addForm:{week:"",start_time:"",end_time:""}}},created(){this.formValue&&(this.addForm.id=this.formValue.id,this.addForm.week=this.formValue.week,this.addForm.start_time=this.formValue.start_time,this.addForm.end_time=this.formValue.end_time),this.showAddDialog=this.value},watch:{value(e){this.showAddDialog=e}},computed:{rules(){return{week:[{required:!0,message:this.$t("CourseCalendar.the_field_required"),trigger:"change"}],start_time:[{required:!0,message:this.$t("CourseCalendar.the_field_required"),trigger:"change"}],end_time:[{required:!0,message:this.$t("CourseCalendar.the_field_required"),trigger:"change"}]}},weekOptions(){return[{value:1,label:this.$t("CourseCalendar.xingqi1")},{value:2,label:this.$t("CourseCalendar.xingqi2")},{value:3,label:this.$t("CourseCalendar.xingqi3")},{value:4,label:this.$t("CourseCalendar.xingqi4")},{value:5,label:this.$t("CourseCalendar.xingqi5")},{value:6,label:this.$t("CourseCalendar.xingqi6")},{value:7,label:this.$t("CourseCalendar.xingqi7")}]}},methods:{startTimeChange(e){if(!this.addForm.end_time)return!1;let t=this.isEndTimeGreaterThanStartTime();t||(this.$message.error(this.$t("CourseCalendar.jieshushijianxuyaodayu")),this.addForm.start_time="")},endTimeChange(e){if(!this.addForm.start_time)return!1;let t=this.isEndTimeGreaterThanStartTime();t||(this.$message.error(this.$t("CourseCalendar.jieshushijianxuyaodayu")),this.addForm.end_time="")},isEndTimeGreaterThanStartTime(){let e=this.addForm.start_time,t=this.addForm.end_time;if(!e||!t)return!0;let s=e.split(":"),a=t.split(":"),i=60*parseInt(s[0])+parseInt(s[1]),l=60*parseInt(a[0])+parseInt(a[1]);return l>i},async addKejieConfirm(){try{await this.$refs.refAddForm.validate(),this.showAddDialog=!1,this.$emit("onSubmit",this.addForm)}catch(e){console.log(e)}},onClose(){this.$emit("input",!1)}}},m=h,C=s(1001),p=(0,C.Z)(m,c,u,!1,null,"70eddb30",null),g=p.exports,_=function(){var e=this,t=e._self._c;return t("el-dialog",{attrs:{title:"删除课程","destroy-on-close":!0,visible:e.showDelDialog,center:"",width:"30%"},on:{close:e.onClose,"update:visible":function(t){e.showDelDialog=t}}},[t("span",[e._v("是否删除课程")]),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.showDelDialog=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"danger"},on:{click:function(t){return e.deleteClass(!0)}}},[e._v("删除全部")]),t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.deleteClass(!1)}}},[e._v("删除选中")])],1)])},v=[],f={name:"ClassDeleteDialog",props:["value"],data(){return{showDelDialog:!1}},created(){this.showDelDialog=this.value},watch:{value(e){this.showDelDialog=e}},methods:{onClose(){this.$emit("input",!1)},deleteClass(e){this.showDelDialog=!1}}},b=f,$=(0,C.Z)(b,_,v,!1,null,"6cc6fb15",null),y=$.exports,k=s(1206),w=s(5752),x={name:"ClassCalendar",components:{CalendarBox:w.Z,ClassDeleteDialog:y,ClassAddingDialog:g},data(){return{dateRangeValue:null,dateList:[],currentDateRangeIndex:null,showDialog:!1,classList:[],formValue:null,showDelDialog:!1,id:"",courseName:"",addingCycle:!1,selectedDates:null,loadingCourse:!1,pickerOptions:{disabledDate(e){return e.getTime()<d()().hour(0).minute(0).second(0).millisecond(0).toDate()}}}},created(){this.id=this.$route.query.id,this.getCycle(),this.getDetail()},methods:{onDateRangeChange(){this.queryCourses()},onSelectedUpdate(e){this.$emit("onSelectedUpdate",{courses:e,course_date_id:this.dateList[this.currentDateRangeIndex].id,course_name:this.courseName})},async getDetail(){try{const e=await(0,k.Yu6)({id:this.id});200===e.code&&(this.courseName=e.data.name_arr)}catch(e){console.error(e)}},async getCycle(){try{const e=await(0,k.R5P)(this.id);if(200===e.code){let t=e.data?.map((e=>({id:e.id,begin_date:e.begin_date.replaceAll("-","/"),end_date:e.end_date.replaceAll("-","/")})));t&&(this.dateList=[...t],this.dateList.length&&(this.currentDateRangeIndex=0,this.queryCourses()))}}catch(e){console.log(e)}},async addCycle(){this.addingCycle=!0;try{const e=d()(this.dateRangeValue[0]).format("YYYY-MM-DD"),t=d()(this.dateRangeValue[1]).format("YYYY-MM-DD"),s=await(0,k.Cct)(this.id,e,t);200===s.code&&(this.$message.success(this.$t("CourseCalendar.tianjiachengg")),this.dateList.push({id:s.data.id,begin_date:e.replaceAll("-","/"),end_date:t.replaceAll("-","/")}),console.log(this.dateList),this.currentDateRangeIndex=this.dateList.findIndex((e=>e.id===s.data.id)),this.dateRangeValue=null,await this.queryCourses())}catch(e){console.log(e)}this.addingCycle=!1},onClassClick(e){},async onClassUpdate(e){this.loadingCourse=!0;try{if(e.id){const t=await(0,k.RWc)(e.id,{day:e.week,...e});200===t.code&&await this.queryCourses()}else{const t=await(0,k.Voo)(this.id,this.selectedDates.id,{day:e.week,...e});200===t.code&&await this.queryCourses()}}catch(t){console.log(t)}this.loadingCourse=!1},handleClassAdd(e){e&&(this.formValue=e,this.showDialog=!0,console.log("selected"))},handleClassEdit(e){this.formValue=e,this.showDialog=!0},async queryCourses(){this.loadingCourse=!0,this.selectedDates=this.dateList[this.currentDateRangeIndex];try{const e=await(0,k.mqU)(this.id,this.selectedDates.id);200===e.code&&(this.classList=e.data?.map((e=>({...e,is_finish:parseFloat(e.price)>0&&parseInt(e.book_num)>0&&parseInt(e.book_min_num)>0&&e.address}))))}catch(e){console.log(e)}this.loadingCourse=!1},unselectClassById(e){this.$refs.calendarBox.unselectItem(e)},unselectClassAll(){this.$refs.calendarBox.unselectAll()}}},D=x,I=(0,C.Z)(D,n,r,!1,null,"4e22f1a5",null),q=I.exports,F=function(){var e=this,t=e._self._c;return t("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"setting-box"},[t("div",{staticClass:"settings"},[t("el-form",{ref:"priceForm",attrs:{model:e.priceForm,rules:e.priceRules}},[t("div",[t("dl",[t("dt",{staticClass:"title"},[e._v(e._s(e.$t("CourseCalendar.number_of_students")))]),t("dd",[t("el-form-item",{attrs:{prop:"book_num"}},[t("el-input",{attrs:{clearable:!0,maxlength:10,type:"text"},model:{value:e.priceForm.book_num,callback:function(t){e.$set(e.priceForm,"book_num",t)},expression:"priceForm.book_num"}})],1)],1)]),t("dl",[t("dt",[t("div",[t("span",{staticClass:"title"},[e._v(e._s(e.$t("CourseCalendar.minimum_number_of_students")))]),t("div",{staticClass:"tips"},[e._v("("+e._s(e.$t("CourseCalendar.unmet_class"))+")")])])]),t("dd",[t("el-form-item",{attrs:{prop:"book_min_num"}},[t("el-input",{attrs:{clearable:!0,maxlength:10},model:{value:e.priceForm.book_min_num,callback:function(t){e.$set(e.priceForm,"book_min_num",t)},expression:"priceForm.book_min_num"}})],1)],1)]),t("dl",[t("dt",{staticClass:"title"},[e._v(e._s(e.$t("CourseCalendar.class_location")))]),t("dd",[t("el-form-item",{attrs:{prop:"address"}},[t("el-input",{attrs:{autosize:{minRows:2,maxRows:4},clearable:!0,maxlength:200,"show-word-limit":"",type:"textarea"},model:{value:e.priceForm.address,callback:function(t){e.$set(e.priceForm,"address",t)},expression:"priceForm.address"}})],1)],1)])]),t("div",{staticClass:"flex mb20"},[t("div",{staticClass:"title"},[e._v(e._s(e.$t("CourseCalendar.set_price")))]),t("div",[e._v("USD")])]),t("div",{staticClass:"tips"},[e._v(e._s(e.$t("tip.price_setting_tip")))]),t("el-form-item",{attrs:{prop:"price"}},[t("div",{staticClass:"priceBox"},[t("div",{staticClass:"num"},[t("span",[e._v("$")]),t("el-input",{staticClass:"inputInner",attrs:{clearable:!0,maxlength:10,type:"text"},model:{value:e.priceForm.price,callback:function(t){e.$set(e.priceForm,"price",t)},expression:"priceForm.price"}}),t("span",[e._v("USD")])],1)])]),t("div",{staticClass:"discount"},[t("div",{staticClass:"title"},[e._v(e._s(e.$t("CourseCalendar.select_discount")))]),t("div",{staticClass:"tips"},[e._v(e._s(e.$t("CourseCalendar.discount_tips")))]),t("div",{staticClass:"discount-list"},e._l(e.discountList,(function(s,a){return t("div",{key:s.id,staticClass:"item",class:e.selectedDiscount?.id===s.id?"selected":""},[t("input",{attrs:{name:"discount",type:"radio"},domProps:{checked:e.selectedDiscount?.id===s.id},on:{click:function(t){return e.selected(s)}}}),t("div",{staticClass:"lftBox"},[t("div",{staticClass:"title-line"},[t("span",[e._v(e._s(s.name))]),t("el-popconfirm",{attrs:{title:e.$t("CourseCalendar.remove_discount_cfm")},on:{confirm:function(t){return e.deleteDiscountItem(s)}}},[t("span",{staticClass:"el-icon-close",attrs:{slot:"reference"},on:{click:function(e){e.stopPropagation()}},slot:"reference"})])],1),t("div",{staticClass:"flex"},[t("div",{staticClass:"num"},[e._v(e._s(s.discount)+"%")]),t("div",{staticClass:"tipRht"},[t("i",{staticClass:"el-icon-discount"}),t("span",[e._v("$"+e._s(s.price))])])])])])})),0),t("div",{staticClass:"addBtn",on:{click:e.addDiscount}},[t("span",[e._v(e._s(e.$t("CourseCalendar.add_more_discounts")))]),t("i",{staticClass:"el-icon-arrow-right"})])])],1)],1),t("div",[t("el-button",{staticClass:"top20",attrs:{loading:e.saving,type:"primary"},on:{click:e.save}},[e._v(e._s(e.$t("CourseCalendar.save")))]),t("el-button",{staticClass:"top20",attrs:{loading:e.saving,type:"default"},on:{click:function(t){return e.$emit("cancel")}}},[e._v(e._s(e.$t("CourseCalendar.cancel")))])],1),t("el-dialog",{attrs:{"close-on-click-modal":!1,title:e.$t("CourseCalendar.new_discount"),visible:e.showNewDiscount,"custom-class":"box",width:"500px"},on:{"update:visible":function(t){e.showNewDiscount=t}}},[t("div",[t("el-form",{ref:"form",attrs:{model:e.addDiscountForm,rules:e.rules}},[t("el-form-item",{attrs:{label:e.$t("CourseCalendar.discount_name"),prop:"name"}},[t("el-input",{model:{value:e.addDiscountForm.name,callback:function(t){e.$set(e.addDiscountForm,"name",t)},expression:"addDiscountForm.name"}})],1),t("el-form-item",{attrs:{label:e.$t("CourseCalendar.discount_proportion"),prop:"discount"}},[t("el-input",{attrs:{value:e.addDiscountForm.discount,type:"number"},on:{input:e.validateInput}},[t("template",{slot:"append"},[e._v("%")])],2)],1),t("el-form-item",[t("el-button",{on:{click:function(t){e.showNewDiscount=!1}}},[e._v(e._s(e.$t("CourseCalendar.cancel")))]),t("el-button",{attrs:{type:"primary"},on:{click:e.onAddSubmit}},[e._v(e._s(e.$t("CourseCalendar.ok")))])],1)],1)],1)])],1)},L=[],S=s(794),R={name:"Prices",props:{selectedClassInfo:{type:Object,default:()=>{}}},data(){return{addDiscountForm:{name:"",discount:""},rules:{name:[{required:!0,message:this.$t("CourseCalendar.the_field_required"),trigger:"blur"}],discount:[{required:!0,message:this.$t("CourseCalendar.the_field_required"),trigger:"blur"}]},priceForm:{book_num:"",book_min_num:"",address:"",price:""},priceRules:{price:[{required:!0,message:this.$t("CourseCalendar.the_field_required"),trigger:["blur"]},{pattern:/^\d*\.?\d+$/,message:this.$t("tip.format_incorrect"),trigger:"blur"}],book_num:[{required:!0,message:this.$t("tip.required"),trigger:["blur"]},{pattern:/^[1-9]\d*$/,message:this.$t("tip.format_incorrect"),trigger:"blur"}],book_min_num:[{required:!0,message:this.$t("tip.required"),trigger:["blur"]},{pattern:/^[1-9]\d*$/,message:this.$t("tip.format_incorrect"),trigger:"blur"}],address:[{required:!0,message:this.$t("tip.required"),trigger:["blur"]}]},showNewDiscount:!1,discounts:[],selectedDiscount:null,saving:!1,loading:!1}},created(){this.setValues()},watch:{selectedClass(e){this.setValues()}},computed:{submitDisabled(){return this.selectedClass.length<=0||!this.priceForm.price},selectedClass(){return this.selectedClassInfo?.courses||[]},discountList(){return this.discounts.map((e=>({price:this.priceForm.price?(0,S.Z)(this.priceForm.price).multipliedBy((0,S.Z)(e.discount).div(100)).decimalPlaces(2):0,...e})))}},mounted(){this.getDiscountList()},methods:{setValues(){let e=this.selectedClass;1===e.length?(this.priceForm.price=e[0].price,this.priceForm.book_num=e[0].book_num,this.priceForm.book_min_num=e[0].book_min_num,this.priceForm.address=e[0].address,this.selectedDiscount=this.discountList.find((t=>t.id===e[0].discount_id))):(this.priceForm.price="",this.priceForm.book_num="",this.priceForm.book_min_num="",this.priceForm.address="",this.selectedDiscount=null)},async deleteDiscountItem(e){this.loading=!0;try{const t=await(0,k.BhJ)(e.id);200===t.code&&await this.getDiscountList()}catch(t){console.error(t)}this.loading=!1},selected(e){this.selectedDiscount&&this.selectedDiscount.id===e.id?this.selectedDiscount=null:this.selectedDiscount=e},validateInput(e){const t=/^\d+(\.\d{0,2})?$/;t.test(e)?parseInt(e)>100?this.addDiscountForm.discount="100":this.addDiscountForm.discount=e:this.addDiscountForm.discount=""},async save(){this.saving=!0;try{await this.$refs.priceForm.validate();let e=this.selectedClass.map((e=>e.id)).join(",");const t=await Promise.all([(0,k.KV$)(this.selectedClassInfo.course_date_id,e,this.priceForm.address,this.priceForm.book_num,this.priceForm.book_min_num),(0,k.z6)(this.selectedClassInfo.course_date_id,e,this.priceForm.price,this.selectedDiscount?.id||"")]);200===t[0].code&&200===t[1].code&&(this.$message.success(this.$t("jsdCourseList.shezhichenggong")),this.$emit("saveSuccess"))}catch(e){console.error(e)}finally{this.saving=!1}},async getDiscountList(){this.loading=!0;try{const e=await(0,k.eEW)();200===e.code&&(this.discounts=e.data)}catch(e){console.error(e)}this.loading=!1},addDiscount(){this.addDiscountForm.name="",this.addDiscountForm.discount="",this.showNewDiscount=!0},async onAddSubmit(){try{await this.$refs["form"].validate();const e=await(0,k.ck3)(this.addDiscountForm);200===e.code&&(this.showNewDiscount=!1,this.getDiscountList())}catch(e){console.error(e)}}}},V=R,j=(0,C.Z)(V,F,L,!1,null,"087d8454",null),T=j.exports,A=function(){var e=this,t=e._self._c;return t("div",[t("el-cascader",{attrs:{options:e.classList,placeholder:"",props:{value:"value",label:"label",children:"children",expandTrigger:"hover"}},on:{change:e.onSelectChange},model:{value:e.currentClassId,callback:function(t){e.currentClassId=t},expression:"currentClassId"}}),t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.querying,expression:"querying"}],staticStyle:{width:"100%"},attrs:{data:e.studentList}},[t("el-table-column",{attrs:{width:"50"},scopedSlots:e._u([{key:"default",fn:function(s){return[t("img",{staticClass:"avatar",attrs:{src:s.row.avatar},on:{click:function(t){return e.$router.push(`/user/student/${s.row.user_id}`)}}})]}}])}),t("el-table-column",{attrs:{prop:"username",label:e.$t("CourseCalendar.name"),width:"80"}}),t("el-table-column",{attrs:{label:e.$t("CourseCalendar.class_time")},scopedSlots:e._u([{key:"default",fn:function({row:{date:s,start_time:a,end_time:i}}){return[t("span",[e._v(e._s(s)+" "+e._s(a)+"-"+e._s(i))])]}}])}),t("el-table-column",{attrs:{label:e.$t("CourseCalendar.operation"),width:"50"},scopedSlots:e._u([{key:"default",fn:function(s){return[t("el-button",{attrs:{type:"text",size:"small"},on:{click:function(t){return e.cancel(s.row)}}},[e._v(e._s(e.$t("CourseCalendar.cancel")))])]}}])})],1),t("div",{staticClass:"pageBox"},[t("el-pagination",{attrs:{background:"","current-page":e.page,"page-size":e.pageSize,layout:"prev, pager, next",total:e.total},on:{"current-change":e.onPageChange,"update:currentPage":function(t){e.page=t},"update:current-page":function(t){e.page=t}}})],1),e.cancelCourseVisible?t("force-cancel-course-dialog",{attrs:{id:e.cancelCourseId},on:{complete:e.getStudents},model:{value:e.cancelCourseVisible,callback:function(t){e.cancelCourseVisible=t},expression:"cancelCourseVisible"}}):e._e()],1)},N=[],B=s(5695),z={name:"Students",components:{ForceCancelCourseDialog:B.Z},props:{selectedClassInfo:{type:Object,default:()=>{}}},data(){return{studentList:[],total:0,pageSize:8,page:1,id:"",currentClassId:[],classList:[],querying:!1,cancelCourseVisible:!1,cancelCourseId:""}},computed:{selectedClass(){return this.selectedClassInfo?.courses||[]},weekDay(){return[this.$t("CourseCalendar.xingqi1"),this.$t("CourseCalendar.xingqi2"),this.$t("CourseCalendar.xingqi3"),this.$t("CourseCalendar.xingqi4"),this.$t("CourseCalendar.xingqi5"),this.$t("CourseCalendar.xingqi6"),this.$t("CourseCalendar.xingqi7")]}},watch:{selectedClass(e){this.studentList=[],this.total=0,this.page=1,this.currentClassId=[],this.classList=[],e&&e.length&&this.getClassList()}},mounted(){this.id=this.$route.query.id},methods:{async getClassList(){try{this.currentClassId=[],this.classList=[];let e=this.selectedClass.map((e=>e.id)).join(",");const t=await(0,k.yZF)(e);200===t.code&&(this.classList=this.convert(t.data),this.classList.length>0&&(this.currentClassId=[this.classList[0].value,this.classList[0].children[0].value,this.classList[0].children[0].children[0].value],this.getStudents()))}catch(e){console.error(e)}},convert(e){if(!e||0===e.length)return[];const t=new Map;e.forEach((e=>{const{week:s,date:a,...i}=e;t.has(s)||t.set(s,new Map),t.get(s).has(a)||t.get(s).set(a,[]),t.get(s).get(a).push({label:`${i.start_time}-${i.end_time}`,value:i.id})}));const s=Array.from(t,(([e,t])=>({label:`${this.weekDay[parseInt(e)-1]}`,value:e,children:Array.from(t,(([e,t])=>({label:e,value:e,children:t})))})));return s.sort(((e,t)=>e.value-t.value))},async getStudents(){this.querying=!0;try{this.studentList=[];let e=this.selectedClass.map((e=>e.id)).join(","),t=this.currentClassId&&this.currentClassId[2]||"";const s=await(0,k.mrM)(e,t,this.page,this.pageSize);200===s.code&&(this.studentList=s.data?.list,this.total=s.data?.total||0)}catch(e){console.error(e)}this.querying=!1},onPageChange(e){console.log(e),this.page=e,this.getStudents()},onSelectChange(e){this.page=1,this.getStudents()},async cancel(e){this.cancelCourseId=e.id,this.cancelCourseVisible=!0}}},Z=z,M=(0,C.Z)(Z,A,N,!1,null,"6c2fc2c6",null),P=M.exports,U=function(){var e=this,t=e._self._c;return t("div",[t("el-cascader",{staticClass:"inpItem inpItem1",attrs:{options:e.classList,placeholder:"",props:{value:"value",label:"label",children:"children",expandTrigger:"hover"}},on:{change:e.onSelectChange},model:{value:e.currentClassId,callback:function(t){e.currentClassId=t},expression:"currentClassId"}}),t("div",{directives:[{name:"loading",rawName:"v-loading",value:e.querying,expression:"querying"}],staticClass:"result-box"},e._l(e.classroomList,(function(s){return t("div",{staticClass:"lineBox"},[t("div",{staticClass:"liBox"},[t("img",{staticClass:"imgBox",attrs:{src:s.images[0]??""}}),t("div",{staticClass:"right"},[t("div",{staticClass:"titleTop"},[e._v(e._s(s.name))]),t("div",{staticClass:"addr"},[e._v(e._s(s.address))]),t("div",{staticClass:"btnRht"},[t("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(t){return e.booking(s)}}},[e._v(e._s(e.$t("CourseCalendar.book")))])],1)])]),t("div")])})),0)],1)},E=[],O={name:"Classrooms",props:{selectedClassInfo:{type:Object,default:()=>{}}},data(){return{classroomList:[],currentClassId:[],classList:[],querying:!1}},computed:{selectedClass(){return this.selectedClassInfo?.courses||[]},weekDay(){return[this.$t("CourseCalendar.xingqi1"),this.$t("CourseCalendar.xingqi2"),this.$t("CourseCalendar.xingqi3"),this.$t("CourseCalendar.xingqi4"),this.$t("CourseCalendar.xingqi5"),this.$t("CourseCalendar.xingqi6"),this.$t("CourseCalendar.xingqi7")]}},watch:{selectedClass(e){this.classroomList=[],this.currentClassId=[],this.classList=[],e&&e.length&&this.getClassList()}},methods:{async getClassList(){try{this.currentClassId=[],this.classList=[];let e=this.selectedClass.map((e=>e.id)).join(",");const t=await(0,k.yZF)(e);200===t.code&&(this.classList=this.convert(t.data),this.classList.length>0&&(this.currentClassId=[this.classList[0].value,this.classList[0].children[0].value,this.classList[0].children[0].children[0].value],this.getClassRooms()))}catch(e){console.error(e)}},convert(e){if(!e||0===e.length)return[];const t=new Map;e.forEach((e=>{const{week:s,date:a,...i}=e;t.has(s)||t.set(s,new Map),t.get(s).has(a)||t.get(s).set(a,[]),t.get(s).get(a).push({label:`${i.start_time}-${i.end_time}`,value:i.id})}));const s=Array.from(t,(([e,t])=>({label:`${this.weekDay[parseInt(e)-1]}`,value:e,children:Array.from(t,(([e,t])=>({label:e,value:e,children:t})))})));return s.sort(((e,t)=>e.value-t.value))},async getClassRooms(){this.querying=!0;try{this.classroomList=[];let e=this.selectedClass.map((e=>e.id)).join(","),t=this.currentClassId&&this.currentClassId[2]||"";const s=await(0,k.$YN)(e,t,1,9999);200===s.code&&(this.classroomList=s.data.map((e=>({...e,images:e.images.split(",")}))))}catch(e){console.error(e)}this.querying=!1},onSelectChange(e){this.getClassRooms()},async booking(e){this.querying=!0;try{const t=await(0,k.UaX)(e.id);if(200===t.code){let s=t.data;this.$router.push({path:"/ClassRoomXiadan",query:{out_trade_no:s,id:e.classroom_id}})}}catch(t){console.error(t)}this.querying=!1}}},Y=O,H=(0,C.Z)(Y,U,E,!1,null,"5965a0d3",null),G=H.exports,K=function(){var e=this,t=e._self._c;return t("div",[t("dl",[t("dt",{staticClass:"title"},[e._v(e._s(e.$t("CourseCalendar.course_time")))]),t("div",{staticClass:"courses"},[e._l(e.selectedClass,(function(s,a){return t("dd",{key:Math.random(),staticClass:"flexLine"},[t("div",[e._v(e._s(`${e.weekDay[parseInt(s.week)-1]} ${s.start_time} - ${s.end_time}`))]),t("div",{staticClass:"time"},[e._v(e._s(e.formatTimeLong(s.start_time,s.end_time)))]),t("el-popconfirm",{attrs:{title:e.$t("CourseCalendar.del_class_cfm")},on:{confirm:function(t){return e.remove(s.id)}}},[t("el-button",{staticClass:"el-icon-close",attrs:{slot:"reference",type:"text"},slot:"reference"})],1)],1)})),e.selectedClass?.length?e._e():t("el-empty",{attrs:{"image-size":50,description:""}})],2)]),t("dl",[t("dt",{staticClass:"title"},[e._v(e._s(e.$t("CourseCalendar.number_of_students")))]),t("dd",[t("el-input",{attrs:{maxlength:10,type:"text",clearable:!0},on:{input:t=>e.validateInput(t,"book_num")},model:{value:e.book_num,callback:function(t){e.book_num=t},expression:"book_num"}})],1)]),t("dl",[t("dt",[t("div",[t("span",{staticClass:"title"},[e._v(e._s(e.$t("CourseCalendar.minimum_number_of_students")))]),e._v(" "),t("div",{staticClass:"tips"},[e._v("("+e._s(e.$t("CourseCalendar.unmet_class"))+")")])])]),t("dd",[t("el-input",{attrs:{maxlength:10,clearable:!0},on:{input:t=>e.validateInput(t,"book_min_num")},model:{value:e.book_min_num,callback:function(t){e.book_min_num=t},expression:"book_min_num"}})],1)]),t("dl",[t("dt",{staticClass:"title"},[e._v(e._s(e.$t("CourseCalendar.class_location")))]),t("dd",[t("el-input",{attrs:{type:"textarea",maxlength:200,"show-word-limit":"",clearable:!0,autosize:{minRows:2,maxRows:4}},model:{value:e.address,callback:function(t){e.address=t},expression:"address"}})],1)]),t("el-button",{attrs:{type:"primary",disabled:e.submitDisabled,loading:e.saving},on:{click:e.save}},[e._v(e._s(e.$t("CourseCalendar.save")))])],1)},W=[],X={name:"Courses",props:{selectedClassInfo:{type:Object,default:()=>{}}},data(){return{book_num:"",book_min_num:"",address:"",saving:!1}},watch:{selectedClass(e){1===e.length?(this.book_num=e[0].book_num,this.book_min_num=e[0].book_min_num,this.address=e[0].address):(this.book_num="",this.book_min_num="",this.address="")}},computed:{submitDisabled(){return this.selectedClass.length<=0||!this.book_num||!this.book_min_num||!this.address},selectedClass(){return this.selectedClassInfo?.courses||[]},weekDay(){return[this.$t("CourseCalendar.xingqi1_short"),this.$t("CourseCalendar.xingqi2_short"),this.$t("CourseCalendar.xingqi3_short"),this.$t("CourseCalendar.xingqi4_short"),this.$t("CourseCalendar.xingqi5_short"),this.$t("CourseCalendar.xingqi6_short"),this.$t("CourseCalendar.xingqi7_short")]}},methods:{validateInput(e,t){const s=/^\d+$/;s.test(e)?this[t]=parseInt(e):this[t]=""},async save(){try{this.saving=!0;let e=this.selectedClass.map((e=>e.id)).join(",");const t=await(0,k.KV$)(this.selectedClassInfo.course_date_id,e,this.address,this.book_num,this.book_min_num);200===t.code&&(this.$message.success(this.$t("jsdCourseList.shezhichenggong")),this.$emit("saveSuccess"))}catch(e){console.error(e)}finally{this.saving=!1}},formatTimeLong(e,t){let s=e.split(":"),a=t.split(":"),i=60*parseInt(a[0])+parseInt(a[1])-(60*parseInt(s[0])+parseInt(s[1]));return this.$t("CourseCalendar.time_long_pattern",[i])},async remove(e){try{this.$emit("onCourseDelete",e)}catch(t){console.log()}}}},J=X,Q=(0,C.Z)(J,K,W,!1,null,"4e62c7b9",null),ee=Q.exports,te=s(8550),se=function(){var e=this,t=e._self._c;return t("div",[t("dl",[t("dt",{staticClass:"title"},[e._v(e._s(e.$t("CourseCalendar.course_time")))]),t("div",{staticClass:"courses"},[e._l(e.selectedClass,(function(s,a){return t("dd",{key:Math.random(),staticClass:"flexLine"},[t("div",{staticClass:"first-line"},[t("div",{staticClass:"lineTop"},[t("span",[e._v(e._s(`${e.weekDay[parseInt(s.week)-1]} ${s.start_time} - ${s.end_time}`))]),t("span",{staticClass:"time"},[e._v(e._s(e.formatTimeLong(s.start_time,s.end_time)))])]),t("div",[e._v("×"+e._s(s.date.length))]),t("el-button",{staticClass:"el-icon-close",attrs:{type:"text"},on:{click:function(t){return e.remove(s.id)}}})],1),t("div",{staticClass:"content"},[t("div",{staticClass:"liBox"},[t("span",{staticClass:"label"},[e._v(e._s(e.$t("CourseCalendar.capacity")))]),e._v(" "),t("span",{staticClass:"value",class:{unset:!s.book_num}},[e._v(e._s(s.book_num||e.$t("CourseCalendar.unset")))]),e._v(" / "),t("span",{staticClass:"label"},[e._v(e._s(e.$t("CourseCalendar.min_num")))]),e._v(" "),t("span",{staticClass:"value",class:{unset:!s.book_min_num}},[e._v(e._s(s.book_min_num||e.$t("CourseCalendar.unset")))])]),t("div",{staticClass:"liBox"},[t("span",{staticClass:"label"},[e._v(e._s(e.$t("CourseCalendar.price"))+" ")]),e._v(" "),t("span",{staticClass:"value",class:{unset:!s.price}},[e._v(e._s((s.price?"$"+s.price:"")||e.$t("CourseCalendar.unset")))]),e._v(" / "),t("span",{staticClass:"label"},[e._v(e._s(e.$t("CourseCalendar.discount"))+" ")]),e._v(" "),t("span",{staticClass:"value",class:{unset:!s.discount}},[e._v(e._s(""+(s.discount?s.discount+"%":"")||e.$t("CourseCalendar.unset")))])]),t("div",{staticClass:"liBox"},[t("span",{staticClass:"label"},[e._v(e._s(e.$t("CourseCalendar.class_location")))]),e._v(" "),t("span",{staticClass:"value",class:{unset:!s.address}},[e._v(e._s(s.address||e.$t("CourseCalendar.unset")))])])])])})),e.selectedClass?.length?e._e():t("el-empty",{attrs:{"image-size":50,description:""}})],2),t("div",[t("el-button",{attrs:{type:"primary",disabled:e.submitDisabled},on:{click:e.save}},[e._v(e._s(e.$t("CourseCalendar.set_course")))]),t("el-button",{attrs:{type:"default"},on:{click:e.clear}},[e._v(e._s(e.$t("CourseCalendar.clear")))])],1)])])},ae=[],ie={name:"CourseList",props:{selectedClassInfo:{type:Object,default:()=>{}}},data(){return{discounts:[]}},computed:{submitDisabled(){return this.selectedClass.length<=0},selectedClass(){return this.selectedClassInfo?.courses||[]},weekDay(){return[this.$t("CourseCalendar.xingqi1_short"),this.$t("CourseCalendar.xingqi2_short"),this.$t("CourseCalendar.xingqi3_short"),this.$t("CourseCalendar.xingqi4_short"),this.$t("CourseCalendar.xingqi5_short"),this.$t("CourseCalendar.xingqi6_short"),this.$t("CourseCalendar.xingqi7_short")]}},created(){this.getDiscountList()},methods:{formatTimeLong(e,t){let s=e.split(":"),a=t.split(":"),i=60*parseInt(a[0])+parseInt(a[1])-(60*parseInt(s[0])+parseInt(s[1]));return this.$t("CourseCalendar.time_long_pattern",[i])},async remove(e){try{this.$emit("onCourseDelete",e)}catch(t){console.log()}},async getDiscountList(){try{const e=await(0,k.eEW)();200===e.code&&(this.discounts=e.data)}catch(e){console.error(e)}},save(){this.$emit("saveSuccess")},clear(){this.$emit("clearSelection")}}},le=ie,ne=(0,C.Z)(le,se,ae,!1,null,"4b9ecc48",null),re=ne.exports,oe={name:"headercom",components:{CourseList:re,HomeFooter:te.Z,Courses:ee,Classrooms:G,Students:P,Prices:T,ClassCalendar:q,HomeHeader:l.Z},data(){return{selectedClassInfo:null,currentTabName:0,showSetting:!1}},watch:{},created(){},methods:{onClassSelectedChanged(e){this.selectedClassInfo=e},onCourseDelete(e){this.$refs.weekCalendar.unselectClassById(e)},onCourseClear(){this.$refs.weekCalendar.unselectClassAll()},onPriceSaveSuccess(){this.$refs.weekCalendar.queryCourses(),this.showSetting=!1},toSetting(){this.showSetting=!0}}},de=oe,ce=(0,C.Z)(de,a,i,!1,null,"21d7bec5",null),ue=ce.exports}}]);