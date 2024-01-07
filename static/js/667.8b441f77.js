"use strict";(self["webpackChunkframe"]=self["webpackChunkframe"]||[]).push([[667],{6667:function(e,t,s){s.r(t),s.d(t,{default:function(){return le}});var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("HomeHeader",{attrs:{topimgIsShow:!1}}),t("div",{staticClass:"center"},[t("div",{staticClass:"layoutLeft"},[t("weekly-calendar",{ref:"weekCalendar",on:{onSelectedUpdate:e.onClassSelectedChanged}})],1),t("div",{staticClass:"layoutRight"},[t("el-tabs",{model:{value:e.currentTabName,callback:function(t){e.currentTabName=t},expression:"currentTabName"}},[t("el-tab-pane",{attrs:{label:"设置",name:"0"}},[t("courses",{attrs:{selectedClassInfo:e.selectedClassInfo},on:{onCourseDelete:e.onCourseDelete,saveSuccess:e.onCourseSaveSuccess}})],1),t("el-tab-pane",{attrs:{label:"定价",name:"1"}},[t("prices",{attrs:{selectedClassInfo:e.selectedClassInfo},on:{saveSuccess:e.onPriceSaveSuccess}})],1),t("el-tab-pane",{attrs:{label:"学生名单",name:"2"}},[t("students",{attrs:{selectedClassInfo:e.selectedClassInfo}})],1),t("el-tab-pane",{attrs:{label:"预定教室",name:"3"}},[t("classrooms",{attrs:{selectedClassInfo:e.selectedClassInfo}})],1)],1)],1)])],1)},i=[],l=s(528),o=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("div",{staticClass:"tool-bar"},[t("div",{staticClass:"courseName"},[e._v(e._s(e.courseName))]),t("el-date-picker",{attrs:{format:"yyyy/MM/dd",type:"daterange",editable:!1,size:"large","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.dateRangeValue,callback:function(t){e.dateRangeValue=t},expression:"dateRangeValue"}}),t("el-button",{staticClass:"btn20",attrs:{type:"primary",size:"large",loading:e.addingCycle,disabled:!e.dateRangeValue},on:{click:e.addCycle}},[e._v("添加周期")]),t("el-select",{staticClass:"dateOuter",attrs:{placeholder:"请选择",size:"large"},model:{value:e.currentDateRangeIndex,callback:function(t){e.currentDateRangeIndex=t},expression:"currentDateRangeIndex"}},e._l(e.dateList,(function(e,s){return t("el-option",{key:`${e.id}`,attrs:{label:`${e.begin_date}-${e.end_date}`,value:s}})})),1),t("el-button",{staticClass:"btn20",attrs:{type:"primary",size:"large"},on:{click:e.queryCourses}},[e._v("查询")])],1),t("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loadingCourse,expression:"loadingCourse"}],staticClass:"calendar-box"},[t("div",{staticClass:"time-bar"},e._l(e.hours,(function(s,a){return t("div",{key:a,staticClass:"time-text"},[e._v(e._s(s))])})),0),t("div",[t("div",{staticClass:"head"},e._l(e.headTexts,(function(s,a){return t("div",{key:a,staticClass:"head_col"},[t("div",[e._v(" "+e._s(s)+" ")]),t("div",[e._v(" "+e._s(e.dayCounts[a]?`(${e.dayCounts[a]})`:"")+" ")])])})),0),t("div",{staticClass:"grid",on:{click:e.gridClicked}},[e.selectedPos?t("div",{staticClass:"selected",style:e.selectedPos.style,on:{click:function(t){return t.stopPropagation(),e.handleClassAdd.apply(null,arguments)}}},[e._v(" 点击添加 ")]):e._e(),e._l(e.classList,(function(s,a){return t("div",{key:a,staticClass:"class-item",class:{"class-item-selected":s.selected},style:s.style,on:{click:function(t){return t.stopPropagation(),e.onClassClick(s)}}},[t("div",{staticClass:"flexLine"},[t("div",{staticClass:"lft"},[e._v(e._s(`${s.value.start_time} - ${s.value.end_time}`))]),t("el-button",{attrs:{icon:"el-icon-edit",size:"mini",type:"text"},on:{click:function(t){return t.stopPropagation(),e.handleClassEdit(s.value)}}})],1)])}))],2)])]),e.showDialog?t("class-adding-dialog",{attrs:{"form-value":e.formValue},on:{onSubmit:e.onClassUpdate},model:{value:e.showDialog,callback:function(t){e.showDialog=t},expression:"showDialog"}}):e._e(),e.showDelDialog?t("class-delete-dialog",{model:{value:e.showDelDialog,callback:function(t){e.showDelDialog=t},expression:"showDelDialog"}}):e._e()],1)},n=[],r=(s(7658),s(7484)),d=s.n(r),c=function(){var e=this,t=e._self._c;return t("el-dialog",{attrs:{title:e.formValue?.id?e.$t("CourseCalendar.bianjikechengshijian"):e.$t("CourseCalendar.tianjiakechengshijian"),visible:e.showAddDialog,width:"460px","custom-class":"box","destroy-on-close":!0,center:""},on:{"update:visible":function(t){e.showAddDialog=t},close:e.onClose}},[t("div",{staticClass:"modalMain"},[t("div",{staticClass:"title"},[e._v(" "+e._s(e.$t("CourseCalendar.keyikaishe15fenzhong"))+" ")]),t("el-form",{ref:"refAddForm",attrs:{model:e.addForm,rules:e.rules}},[t("el-form-item",{attrs:{prop:"weeks"}},[t("el-select",{attrs:{placeholder:e.$t("CourseCalendar.xuanzexingqiji"),editable:!1,disabled:!!e.formValue?.id},model:{value:e.addForm.week,callback:function(t){e.$set(e.addForm,"week",t)},expression:"addForm.week"}},e._l(e.weekOptions,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),t("el-form-item",{attrs:{prop:"start_time"}},[t("el-time-select",{staticClass:"elTimeSelect",attrs:{placeholder:e.$t("CourseCalendar.qishishijian"),editable:!1,"picker-options":{start:"08:00",step:"00:15",end:"23:45"}},on:{change:function(t){return e.startTimeChange(t)}},model:{value:e.addForm.start_time,callback:function(t){e.$set(e.addForm,"start_time",t)},expression:"addForm.start_time"}})],1),t("el-form-item",{staticClass:"codeFormItem",attrs:{prop:"end_time"}},[t("el-time-select",{attrs:{placeholder:e.$t("CourseCalendar.jieshushijian"),editable:!1,"picker-options":{start:"08:00",step:"00:15",end:"23:45"}},on:{change:function(t){return e.endTimeChange(t)}},model:{value:e.addForm.end_time,callback:function(t){e.$set(e.addForm,"end_time",t)},expression:"addForm.end_time"}})],1)],1),t("div",{staticClass:"jpBtnGreen btnConfirm",on:{click:e.addKejieConfirm}},[e._v(" "+e._s(e.$t("CourseCalendar.save_class"))+" ")])],1)])},u=[],h={name:"ClassAddingDialog",props:["value","formValue"],data(){return{showAddDialog:!1,addForm:{week:"",start_time:"",end_time:""}}},created(){this.formValue&&(this.addForm.id=this.formValue.id,this.addForm.week=this.formValue.week,this.addForm.start_time=this.formValue.start_time,this.addForm.end_time=this.formValue.end_time),this.showAddDialog=this.value},watch:{value(e){this.showAddDialog=e}},computed:{rules(){return{week:[{required:!0,message:this.$t("CourseCalendar.the_field_required"),trigger:"change"}],start_time:[{required:!0,message:this.$t("CourseCalendar.the_field_required"),trigger:"change"}],end_time:[{required:!0,message:this.$t("CourseCalendar.the_field_required"),trigger:"change"}]}},weekOptions(){return[{value:1,label:this.$t("CourseCalendar.xingqi1")},{value:2,label:this.$t("CourseCalendar.xingqi2")},{value:3,label:this.$t("CourseCalendar.xingqi3")},{value:4,label:this.$t("CourseCalendar.xingqi4")},{value:5,label:this.$t("CourseCalendar.xingqi5")},{value:6,label:this.$t("CourseCalendar.xingqi6")},{value:7,label:this.$t("CourseCalendar.xingqi7")}]}},methods:{startTimeChange(e){if(!this.addForm.end_time)return!1;let t=this.isEndTimeGreaterThanStartTime();t||(this.$message.error(this.$t("CourseCalendar.jieshushijianxuyaodayu")),this.addForm.start_time="")},endTimeChange(e){if(!this.addForm.start_time)return!1;let t=this.isEndTimeGreaterThanStartTime();t||(this.$message.error(this.$t("CourseCalendar.jieshushijianxuyaodayu")),this.addForm.end_time="")},isEndTimeGreaterThanStartTime(){let e=this.addForm.start_time,t=this.addForm.end_time;if(!e||!t)return!0;let s=e.split(":"),a=t.split(":"),i=60*parseInt(s[0])+parseInt(s[1]),l=60*parseInt(a[0])+parseInt(a[1]);return l>i},async addKejieConfirm(){try{await this.$refs.refAddForm.validate(),this.showAddDialog=!1,this.$emit("onSubmit",this.addForm)}catch(e){console.log(e)}},onClose(){this.$emit("input",!1)}}},m=h,C=s(1001),p=(0,C.Z)(m,c,u,!1,null,"2e2cf542",null),g=p.exports,v=function(){var e=this,t=e._self._c;return t("el-dialog",{attrs:{title:"删除课程","destroy-on-close":!0,visible:e.showDelDialog,center:"",width:"30%"},on:{close:e.onClose,"update:visible":function(t){e.showDelDialog=t}}},[t("span",[e._v("是否删除课程")]),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.showDelDialog=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"danger"},on:{click:function(t){return e.deleteClass(!0)}}},[e._v("删除全部")]),t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.deleteClass(!1)}}},[e._v("删除选中")])],1)])},_=[],f={name:"ClassDeleteDialog",props:["value"],data(){return{showDelDialog:!1}},created(){this.showDelDialog=this.value},watch:{value(e){this.showDelDialog=e}},methods:{onClose(){this.$emit("input",!1)},deleteClass(e){this.showDelDialog=!1}}},b=f,y=(0,C.Z)(b,v,_,!1,null,"46befda9",null),D=y.exports,k=s(1206);const w=140,x=100,$=e=>{if(e){let t=e.split(":");return 60*parseInt(t[0])+parseInt(t[1])}return 0};var I={name:"WeeklyCalendar",components:{ClassDeleteDialog:D,ClassAddingDialog:g},data(){return{hours:["08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00","24:00"],headTexts:["周一","周二","周三","周四","周五","周六","周日"],selectedPos:null,dateRangeValue:null,dateList:[],currentDateRangeIndex:null,showDialog:!1,classList:[],formValue:null,showDelDialog:!1,dayCounts:[],id:"",courseName:"",addingCycle:!1,selectedDates:null,loadingCourse:!1}},created(){this.id=this.$route.query.id,this.getCycle(),this.getDetail()},computed:{selectedClass(){return this.classList.filter((e=>e.selected)).map((e=>e.value))}},watch:{selectedClass(e){this.$emit("onSelectedUpdate",{courses:e,course_date_id:this.dateList[this.currentDateRangeIndex].id})}},methods:{async getDetail(){try{const e=await(0,k.or)(this.id);200===e.code&&(this.courseName=e.data.name)}catch(e){console.error(e)}},gridClicked(e){if(!this.selectedDates)return;let t=e.offsetX,s=e.offsetY,a=Math.floor(t/w),i=Math.floor(s/x),l=a*w,o=i*x;this.selectedPos=`top: ${o}px; left: ${l}px`,this.selectedPos={style:`top: ${o}px; left: ${l}px`,value:{week:a+1,start_time:this.hours[i],end_time:this.hours[i+1]}}},async getCycle(){try{const e=await(0,k.R5)(this.id);if(200===e.code){console.log(e);let t=e.data.map((e=>({id:e.id,begin_date:e.begin_date.replaceAll("-","/"),end_date:e.end_date.replaceAll("-","/")})));t&&(this.dateList=[...t])}}catch(e){console.log(e)}},async addCycle(){console.log("add"),this.addingCycle=!0;try{const e=d()(this.dateRangeValue[0]).format("YYYY-MM-DD"),t=d()(this.dateRangeValue[1]).format("YYYY-MM-DD"),s=await(0,k.Cc)(this.id,e,t);200===s.code&&(this.$message.success("保存成功"),this.dateList.push({id:s.data.id,begin_date:e.replaceAll("-","/"),end_date:t.replaceAll("-","/")}),console.log(this.dateList),this.dateRangeValue=null)}catch(e){console.log(e)}this.addingCycle=!1},onClassClick(e){e.selected=!e.selected,this.classList=[...this.classList]},toCalendarItem(e){let t=(parseInt(e.week)-1)*w,s=(($(e.start_time)-480)*(x/60)).toFixed(0),a=(($(e.end_time)-$(e.start_time))*(x/60)).toFixed(0);return{style:`top: ${s}px; left: ${t}px; height: ${a}px`,value:e}},async onClassUpdate(e){this.selectedPos=null,this.loadingCourse=!0;try{if(e.id){const t=await(0,k.RW)(e.id,{day:e.week,...e});200===t.code&&await this.queryCourses()}else{const t=await(0,k.Vo)(this.id,this.selectedDates.id,{day:e.week,...e});200===t.code&&await this.queryCourses()}}catch(t){console.log(t)}this.loadingCourse=!1},handleClassAdd(){this.selectedPos&&(this.formValue=this.selectedPos.value,this.showDialog=!0,console.log("selected"))},handleClassEdit(e){this.formValue=e,this.showDialog=!0},handleClassDelete(e){this.showDelDialog=!0},calcWeekday(){let e=Array(7).fill(0);if(this.selectedDates){let t=d()(this.selectedDates.begin_date,"YYYY/MM/DD"),s=d()(this.selectedDates.end_date,"YYYY/MM/DD");while(!t.isAfter(s))e[t.day()]++,t=t.add(1,"day")}const t=e.shift();e.push(t),this.dayCounts=[...e]},async queryCourses(){this.loadingCourse=!0,this.selectedPos=null,this.selectedDates=this.dateList[this.currentDateRangeIndex],this.calcWeekday();try{const e=await(0,k.mq)(this.id,this.selectedDates.id);200===e.code&&(this.classList=e.data.map((e=>this.toCalendarItem(e))))}catch(e){console.log(e)}this.loadingCourse=!1},unselectClassById(e){const t=this.classList.find((t=>t.value.id===e));t&&(t.selected=!1),this.classList=[...this.classList]}}},L=I,F=(0,C.Z)(L,o,n,!1,null,"4c8ce662",null),S=F.exports,q=function(){var e=this,t=e._self._c;return t("div",[e._m(0),t("div",{staticClass:"priceBox"},[t("div",[e._v("每小时")]),t("div",{staticClass:"num"},[t("span",[e._v("$")]),t("el-input",{attrs:{clearable:!0},model:{value:e.price,callback:function(t){e.price=t},expression:"price"}}),t("span",[e._v("USD")])],1)]),t("div",{staticClass:"discount"},[t("div",{staticClass:"title"},[e._v("折扣")]),t("div",{staticClass:"tips"},[e._v("调整当前时间课程价格，以吸引更多学生")]),e._l(e.discountList,(function(s,a){return t("div",{key:s.id,staticClass:"item",class:e.selectedDiscount?.id===s.id?"selected":"",on:{click:function(t){return e.selected(s)}}},[t("div",[e._v(e._s(s.name))]),t("div",{staticClass:"flex"},[t("div",{staticClass:"num"},[e._v(e._s(s.discount)+"%")]),t("div",{staticClass:"tipRht"},[e._v("折扣后的价格为$"+e._s(s.price)+"USD")])])])})),t("div",{staticClass:"addBtn",on:{click:e.addDiscount}},[t("span",[e._v("添加更多折扣")]),t("i",{staticClass:"el-icon-arrow-right"})]),t("el-button",{attrs:{type:"primary",disabled:e.submitDisabled,loading:e.saving},on:{click:e.save}},[e._v("保存")])],2),t("el-dialog",{attrs:{title:"新折扣",visible:e.showNewDiscount,width:"500px"},on:{"update:visible":function(t){e.showNewDiscount=t}}},[t("div",[t("el-form",{ref:"form",attrs:{model:e.addDiscountForm,rules:e.rules,"label-width":"80px"}},[t("el-form-item",{attrs:{label:"折扣名称",prop:"name"}},[t("el-input",{model:{value:e.addDiscountForm.name,callback:function(t){e.$set(e.addDiscountForm,"name",t)},expression:"addDiscountForm.name"}})],1),t("el-form-item",{attrs:{label:"折扣比例",prop:"discount"}},[t("el-input",{model:{value:e.addDiscountForm.discount,callback:function(t){e.$set(e.addDiscountForm,"discount",t)},expression:"addDiscountForm.discount"}},[t("template",{slot:"append"},[e._v("%")])],2)],1),t("el-form-item",[t("el-button",{on:{click:function(t){e.showNewDiscount=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.onAddSubmit}},[e._v("确 定")])],1)],1)],1)])],1)},j=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"flex mb20"},[t("div",[e._v("价格")]),t("div",[e._v("USD")])])}],R=s(794),T={name:"Prices",props:{selectedClassInfo:{type:Object,default:()=>{}}},data(){return{addDiscountForm:{name:"",discount:""},rules:{name:[{required:!0,message:"请输入折扣名称",trigger:"blur"}],discount:[{required:!0,message:"请输入折扣比例",trigger:"blur"}]},price:"",showNewDiscount:!1,discounts:[],selectedDiscount:null,saving:!1}},watch:{selectedClass(e){1===e.length?(this.price=e[0].price,this.selectedDiscount=this.discountList.find((t=>t.id===e[0].discount_id))):(this.price="",this.selectedDiscount=null)}},computed:{submitDisabled(){return this.selectedClass.length<=0||!this.selectedDiscount||!this.price||(0,R.Z)(this.price).lte(0)},selectedClass(){return this.selectedClassInfo?.courses||[]},discountList(){return this.discounts.map((e=>({price:this.price?(0,R.Z)(this.price).multipliedBy(1-(0,R.Z)(e.discount).div(100)).decimalPlaces(2):0,...e})))}},mounted(){this.getDiscountList()},methods:{selected(e){this.selectedDiscount=e},async save(){this.saving=!0;try{let e=this.selectedClass.map((e=>e.id)).join(",");const t=await(0,k.z6)(this.selectedClassInfo.course_date_id,e,this.price,this.selectedDiscount.id);200===t.code&&(this.$message.success(this.$t("jsdCourseList.shezhichenggong")),this.$emit("saveSuccess"))}catch(e){console.error(e)}finally{this.saving=!1}},async getDiscountList(){try{const e=await(0,k.eE)();200===e.code&&(this.discounts=e.data)}catch(e){console.error(e)}},addDiscount(){this.addDiscountForm.name="",this.addDiscountForm.discount="",this.showNewDiscount=!0},async onAddSubmit(){try{await this.$refs["form"].validate();const e=await(0,k.ck)(this.addDiscountForm);200===e.code&&(this.showNewDiscount=!1,this.getDiscountList())}catch(e){console.error(e)}}}},V=T,A=(0,C.Z)(V,q,j,!1,null,"6e99cea9",null),Y=A.exports,P=function(){var e=this,t=e._self._c;return t("div",[t("el-select",{attrs:{editable:!1}}),t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.studentList}},[t("el-table-column",{attrs:{label:"头像",width:"50"},scopedSlots:e._u([{key:"default",fn:function(e){return[t("img",{staticClass:"avatar",attrs:{src:e.row.avatar}})]}}])}),t("el-table-column",{attrs:{prop:"username",label:"姓名",width:"80"}}),t("el-table-column",{attrs:{label:"课程时间"},scopedSlots:e._u([{key:"default",fn:function({row:{date:s,start_time:a,end_time:i}}){return[t("span",[e._v(e._s(s)+" "+e._s(a)+"-"+e._s(i))])]}}])}),t("el-table-column",{attrs:{label:"操作",width:"50"},scopedSlots:e._u([{key:"default",fn:function(s){return[t("el-button",{attrs:{type:"text",size:"small"},on:{click:function(t){return e.handleClick(s.row)}}},[e._v("取消")])]}}])})],1),t("el-pagination",{attrs:{background:"","pager-count":"5",layout:"prev, pager, next",total:1e3}})],1)},N=[],z={name:"Students",props:{selectedClassInfo:{type:Object,default:()=>{}}},data(){return{studentList:[]}},computed:{selectedClass(){return this.selectedClassInfo?.courses||[]}},watch:{selectedClass(e){e&&e.length?this.getStudents():this.studentList=[]}},mounted(){},methods:{async getDateList(){},async getStudents(){try{this.studentList=[];let e=this.selectedClass.map((e=>e.id)).join(",");const t=await(0,k.mr)(e,1,20);200===t.code&&(this.studentList=t.data)}catch(e){console.error(e)}}}},M=z,Z=(0,C.Z)(M,P,N,!1,null,"cc9c0478",null),B=Z.exports,O=function(){var e=this,t=e._self._c;return t("div",[t("el-select",{attrs:{editable:!1}}),t("div",e._l(e.classroomList,(function(s){return t("div",{staticClass:"lineBox"},[t("div",{staticClass:"liBox"},[t("img",{staticClass:"imgBox",attrs:{src:s.images[0]??""}}),t("div",{staticClass:"right"},[t("div",{staticClass:"titleTop"},[e._v(e._s(s.name))]),t("div",[e._v(e._s(s.brief))])])]),t("div",[t("div",[e._v(e._s(s.address))]),t("div",{staticClass:"btnRht"},[t("el-button",{attrs:{type:"text"}},[e._v("预定")])],1)])])})),0)],1)},U=[],E={name:"Classrooms",props:{selectedClassInfo:{type:Object,default:()=>{}}},data(){return{classroomList:[]}},computed:{selectedClass(){return this.selectedClassInfo?.courses||[]}},watch:{selectedClass(e){e&&e.length?this.getClassRooms():this.classroomList=[]}},methods:{async getClassRooms(){try{this.classroomList=[];let e=this.selectedClass.map((e=>e.id)).join(",");const t=await(0,k.$Y)(e,1,20);200===t.code&&(this.classroomList=t.data.map((e=>({...e,images:e.images.split(",")}))))}catch(e){console.error(e)}}}},W=E,G=(0,C.Z)(W,O,U,!1,null,"0655725b",null),H=G.exports,K=function(){var e=this,t=e._self._c;return t("div",[t("dl",[t("dt",[e._v("上课时间")]),e._l(e.selectedClass,(function(s,a){return t("dd",{key:Math.random(),staticClass:"flexLine"},[t("div",[e._v(e._s(`${e.weekDay[parseInt(s.week)-1]} ${s.start_time} - ${s.end_time}`))]),t("div",{staticClass:"flex"},[t("div",{staticClass:"time"},[e._v(e._s(e.formatTimeLong(s.start_time,s.end_time)))]),t("el-popconfirm",{attrs:{title:"确定移除该课节么？"},on:{confirm:function(t){return e.remove(s.id)}}},[t("el-button",{attrs:{slot:"reference",type:"text",size:"small"},slot:"reference"},[e._v("移除")])],1)],1)])}))],2),t("dl",[t("dt",[e._v("上课人数")]),t("dd",[t("el-input",{attrs:{clearable:!0},model:{value:e.book_num,callback:function(t){e.book_num=t},expression:"book_num"}})],1)]),t("dl",[e._m(0),t("dd",[t("el-input",{attrs:{clearable:!0},model:{value:e.book_min_num,callback:function(t){e.book_min_num=t},expression:"book_min_num"}})],1)]),t("dl",[t("dt",[e._v("上课地点")]),t("dd",[t("el-input",{attrs:{type:"textarea",clearable:!0,autosize:{minRows:2,maxRows:4}},model:{value:e.address,callback:function(t){e.address=t},expression:"address"}})],1)]),t("el-button",{attrs:{type:"primary",disabled:e.submitDisabled,loading:e.saving},on:{click:e.save}},[e._v("保存")])],1)},X=[function(){var e=this,t=e._self._c;return t("dt",[e._v("最低开课人数 "),t("span",{staticClass:"tips"},[e._v("(未达标课节自动取消)")])])}],J={name:"Courses",props:{selectedClassInfo:{type:Object,default:()=>{}}},data(){return{book_num:"",book_min_num:"",address:"",saving:!1}},watch:{selectedClass(e){1===e.length?(this.book_num=e[0].book_num,this.book_min_num=e[0].book_min_num,this.address=e[0].address):(this.book_num="",this.book_min_num="",this.address="")}},computed:{submitDisabled(){return this.selectedClass.length<=0||!this.book_num||!this.book_min_num||!this.address},selectedClass(){return this.selectedClassInfo?.courses||[]},weekDay(){return[this.$t("CourseCalendar.xingqi1"),this.$t("CourseCalendar.xingqi2"),this.$t("CourseCalendar.xingqi3"),this.$t("CourseCalendar.xingqi4"),this.$t("CourseCalendar.xingqi5"),this.$t("CourseCalendar.xingqi6"),this.$t("CourseCalendar.xingqi7")]}},methods:{async save(){try{this.saving=!0;let e=this.selectedClass.map((e=>e.id)).join(",");const t=await(0,k.uz)(this.selectedClassInfo.course_date_id,e,this.address,this.book_num,this.book_min_num);200===t.code&&(this.$message.success(this.$t("jsdCourseList.shezhichenggong")),this.$emit("saveSuccess"))}catch(e){console.error(e)}finally{this.saving=!1}},formatTimeLong(e,t){let s=e.split(":"),a=t.split(":"),i=60*parseInt(a[0])+parseInt(a[1])-(60*parseInt(s[0])+parseInt(s[1]));return this.$t("CourseCalendar.time_long_pattern",[i])},async remove(e){console.log(e);try{this.$emit("onCourseDelete",e)}catch(t){console.log()}}}},Q=J,ee=(0,C.Z)(Q,K,X,!1,null,"95033b84",null),te=ee.exports,se={name:"headercom",components:{Courses:te,Classrooms:H,Students:B,Prices:Y,WeeklyCalendar:S,HomeHeader:l.Z},data(){return{selectedClassInfo:null,currentTabName:0}},watch:{},created(){},methods:{onClassSelectedChanged(e){console.log(e),this.selectedClassInfo=e},onCourseDelete(e){this.$refs.weekCalendar.unselectClassById(e)},onPriceSaveSuccess(){this.$refs.weekCalendar.queryCourses()},onCourseSaveSuccess(){this.$refs.weekCalendar.queryCourses()}}},ae=se,ie=(0,C.Z)(ae,a,i,!1,null,"3904d0ae",null),le=ie.exports}}]);