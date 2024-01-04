"use strict";(self["webpackChunkframe"]=self["webpackChunkframe"]||[]).push([[195],{2195:function(e,t,a){a.r(t),a.d(t,{default:function(){return S}});var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("HomeHeader",{attrs:{topimgIsShow:!1}}),t("div",{staticClass:"center"},[t("div",{staticClass:"layoutLeft"},[t("weekly-calendar",{on:{onSelectedUpdate:e.onClassSelectedChanged}})],1),t("div",{staticClass:"layoutRight"},[t("el-tabs",{model:{value:e.currentTabName,callback:function(t){e.currentTabName=t},expression:"currentTabName"}},[t("el-tab-pane",{attrs:{label:"设置",name:"0"}},[t("div",[t("dl",[t("dt",[e._v("上课时间")]),e._l(e.selectedClass,(function(a,s){return t("dd",{key:Math.random(),staticClass:"flexLine"},[t("div",[e._v(e._s(`${e.weekDay[parseInt(a.weeks)-1]} ${a.start_time} - ${a.end_time}`))]),t("div",{staticClass:"flex"},[t("div",{staticClass:"time"},[e._v(e._s(e.formatTimeLong(a.start_time,a.end_time)))]),t("el-button",{attrs:{type:"text",size:"small"}},[e._v("移除")])],1)])}))],2),t("dl",[t("dt",[e._v("上课人数")]),t("dd",[t("el-input")],1)]),t("dl",[t("dt",[e._v("上课地点")]),t("dd",[t("el-input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:4}}})],1)])])]),t("el-tab-pane",{attrs:{label:"定价",name:"1"}},[t("div",[t("div",{staticClass:"flex mb20"},[t("div",[e._v("价格")]),t("div",[e._v("USD")])]),t("div",{staticClass:"priceBox"},[t("div",[e._v("每小时")]),t("div",{staticClass:"num"},[t("span",[e._v("$98")]),e._v("USD")])]),t("div",{staticClass:"discount"},[t("div",{staticClass:"title"},[e._v("折扣")]),t("div",{staticClass:"tips"},[e._v("调整当前时间课程价格，以吸引更多学生")]),t("div",{staticClass:"item"},[t("div",[e._v("折扣一")]),t("div",{staticClass:"flex"},[t("div",{staticClass:"num"},[e._v("10%")]),t("div",{staticClass:"tipRht"},[e._v("折扣后的价格为$89USD")])])]),t("div",{staticClass:"item"},[t("div",[e._v("折扣一")]),t("div",{staticClass:"flex"},[t("div",{staticClass:"num"},[e._v("10%")]),t("div",{staticClass:"tipRht"},[e._v("折扣后的价格为$89USD")])])]),t("div",{staticClass:"addBtn"},[t("span",[e._v("添加更多折扣")]),t("i",{staticClass:"el-icon-arrow-right"})])])])]),t("el-tab-pane",{attrs:{label:"学生名单",name:"2"}},[t("div",[t("el-select",{attrs:{editable:!1}}),t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.studentList}},[t("el-table-column",{attrs:{prop:"avatar",label:"头像",width:"50"}}),t("el-table-column",{attrs:{prop:"name",label:"姓名",width:"80"}}),t("el-table-column",{attrs:{prop:"time",label:"课程时间"}}),t("el-table-column",{attrs:{label:"操作",width:"50"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-button",{attrs:{type:"text",size:"small"},on:{click:function(t){return e.handleClick(a.row)}}},[e._v("取消")])]}}])})],1)],1)]),t("el-tab-pane",{attrs:{label:"预定教室",name:"3"}},[t("div",[t("el-select",{attrs:{editable:!1}}),t("div",e._l(e.classroomList,(function(a){return t("div",{staticClass:"lineBox"},[t("div",{staticClass:"liBox"},[t("img",{staticClass:"imgBox",attrs:{src:a.image}}),t("div",{staticClass:"right"},[t("div",{staticClass:"titleTop"},[e._v(e._s(a.name))]),t("div",[e._v(e._s(a.intro))])])]),t("div",[t("div",[e._v(e._s(a.location))]),t("div",{staticClass:"btnRht"},[t("el-button",{attrs:{type:"text"}},[e._v("预定")])],1)])])})),0)],1)])],1)],1)])],1)},i=[],l=a(528),n=(a(1277),a(1206)),d=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("div",{staticClass:"tool-bar"},[t("el-date-picker",{attrs:{format:"yyyy/MM/dd",type:"daterange",editable:!1,size:"large","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.dateRangeValue,callback:function(t){e.dateRangeValue=t},expression:"dateRangeValue"}}),t("el-button",{staticClass:"btn20",attrs:{type:"primary",size:"large",loading:e.addingCycle,disabled:!e.dateRangeValue},on:{click:e.addCycle}},[e._v("添加周期")]),t("el-select",{staticClass:"dateOuter",attrs:{placeholder:"请选择",size:"large"},model:{value:e.currentDateRangeIndex,callback:function(t){e.currentDateRangeIndex=t},expression:"currentDateRangeIndex"}},e._l(e.dateList,(function(e,a){return t("el-option",{key:`${e.id}`,attrs:{label:`${e.begin_date}-${e.end_date}`,value:a}})})),1),t("el-button",{staticClass:"btn20",attrs:{type:"primary",size:"large"},on:{click:e.queryCourses}},[e._v("查询")])],1),t("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loadingCourse,expression:"loadingCourse"}],staticClass:"calendar-box"},[t("div",{staticClass:"time-bar"},e._l(e.hours,(function(a,s){return t("div",{key:s,staticClass:"time-text"},[e._v(e._s(a))])})),0),t("div",[t("div",{staticClass:"head"},e._l(e.headTexts,(function(a,s){return t("div",{key:s,staticClass:"head_col"},[t("div",[e._v(" "+e._s(a)+" ")]),t("div",[e._v(" "+e._s(e.dayCounts[s]?`(${e.dayCounts[s]})`:"")+" ")])])})),0),t("div",{staticClass:"grid",on:{click:e.gridClicked}},[e.selectedPos?t("div",{staticClass:"selected",style:e.selectedPos.style,on:{click:function(t){return t.stopPropagation(),e.handleClassAdd.apply(null,arguments)}}},[e._v(" 点击添加 ")]):e._e(),e._l(e.classList,(function(a,s){return t("div",{key:s,staticClass:"class-item",class:{"class-item-selected":a.selected},style:a.style,on:{click:function(t){return t.stopPropagation(),e.onClassClick(a)}}},[t("div",{staticClass:"flexLine"},[t("div",{staticClass:"lft"},[e._v(e._s(`${a.value.start_time} - ${a.value.end_time}`))]),t("el-button",{attrs:{icon:"el-icon-edit",size:"mini",type:"text"},on:{click:function(t){return t.stopPropagation(),e.handleClassEdit(a.value)}}})],1)])}))],2)])]),e.showDialog?t("class-adding-dialog",{attrs:{"form-value":e.formValue,edit:e.isEditClass},on:{onSubmit:e.onClassUpdate},model:{value:e.showDialog,callback:function(t){e.showDialog=t},expression:"showDialog"}}):e._e(),e.showDelDialog?t("class-delete-dialog",{model:{value:e.showDelDialog,callback:function(t){e.showDelDialog=t},expression:"showDelDialog"}}):e._e()],1)},r=[],o=(a(7658),a(7484)),c=a.n(o),u=function(){var e=this,t=e._self._c;return t("el-dialog",{attrs:{title:e.edit?e.$t("CourseCalendar.bianjikechengshijian"):e.$t("CourseCalendar.tianjiakechengshijian"),visible:e.showAddDialog,width:"460px","custom-class":"box","destroy-on-close":!0,center:""},on:{"update:visible":function(t){e.showAddDialog=t},close:e.onClose}},[t("div",{staticClass:"modalMain"},[t("div",{staticClass:"title"},[e._v(" "+e._s(e.$t("CourseCalendar.keyikaishe15fenzhong"))+" ")]),t("el-form",{ref:"refAddForm",attrs:{model:e.addForm,rules:e.rules}},[t("el-form-item",{attrs:{prop:"weeks"}},[t("el-select",{attrs:{placeholder:e.$t("CourseCalendar.xuanzexingqiji"),editable:!1},model:{value:e.addForm.weeks,callback:function(t){e.$set(e.addForm,"weeks",t)},expression:"addForm.weeks"}},e._l(e.weekOptions,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),t("el-form-item",{attrs:{prop:"start_time"}},[t("el-time-select",{staticClass:"elTimeSelect",attrs:{placeholder:e.$t("CourseCalendar.qishishijian"),editable:!1,"picker-options":{start:"08:00",step:"00:15",end:"23:45"}},on:{change:function(t){return e.startTimeChange(t)}},model:{value:e.addForm.start_time,callback:function(t){e.$set(e.addForm,"start_time",t)},expression:"addForm.start_time"}})],1),t("el-form-item",{staticClass:"codeFormItem",attrs:{prop:"end_time"}},[t("el-time-select",{attrs:{placeholder:e.$t("CourseCalendar.jieshushijian"),editable:!1,"picker-options":{start:"08:00",step:"00:15",end:"23:45"}},on:{change:function(t){return e.endTimeChange(t)}},model:{value:e.addForm.end_time,callback:function(t){e.$set(e.addForm,"end_time",t)},expression:"addForm.end_time"}})],1)],1),t("div",{staticClass:"jpBtnGreen btnConfirm",on:{click:e.addKejieConfirm}},[e._v(" "+e._s(e.$t("CourseCalendar.save_class"))+" ")])],1)])},h=[],m={name:"ClassAddingDialog",props:["value","formValue","edit"],data(){return{showAddDialog:!1,addForm:{weeks:"",start_time:"",end_time:""}}},created(){this.formValue&&(this.addForm.weeks=String(this.formValue.weeks),this.addForm.start_time=this.formValue.start_time,this.addForm.end_time=this.formValue.end_time),this.showAddDialog=this.value},watch:{value(e){this.showAddDialog=e}},computed:{rules(){return{weeks:[{required:!0,message:this.$t("CourseCalendar.the_field_required"),trigger:"change"}],start_time:[{required:!0,message:this.$t("CourseCalendar.the_field_required"),trigger:"change"}],end_time:[{required:!0,message:this.$t("CourseCalendar.the_field_required"),trigger:"change"}]}},weekOptions(){return[{value:"1",label:this.$t("CourseCalendar.xingqi1")},{value:"2",label:this.$t("CourseCalendar.xingqi2")},{value:"3",label:this.$t("CourseCalendar.xingqi3")},{value:"4",label:this.$t("CourseCalendar.xingqi4")},{value:"5",label:this.$t("CourseCalendar.xingqi5")},{value:"6",label:this.$t("CourseCalendar.xingqi6")},{value:"0",label:this.$t("CourseCalendar.xingqi7")}]}},methods:{startTimeChange(e){if(!this.addForm.end_time)return!1;let t=this.isEndTimeGreaterThanStartTime();t||(this.$message.error(this.$t("CourseCalendar.jieshushijianxuyaodayu")),this.addForm.start_time="")},endTimeChange(e){if(!this.addForm.start_time)return!1;let t=this.isEndTimeGreaterThanStartTime();t||(this.$message.error(this.$t("CourseCalendar.jieshushijianxuyaodayu")),this.addForm.end_time="")},isEndTimeGreaterThanStartTime(){let e=this.addForm.start_time,t=this.addForm.end_time;if(!e||!t)return!0;let a=e.split(":"),s=t.split(":"),i=60*parseInt(a[0])+parseInt(a[1]),l=60*parseInt(s[0])+parseInt(s[1]);return l>i},async addKejieConfirm(){try{await this.$refs.refAddForm.validate(),this.showAddDialog=!1,this.$emit("onSubmit",this.addForm)}catch(e){console.log(e)}},onClose(){this.$emit("input",!1)}}},C=m,g=a(1001),v=(0,g.Z)(C,u,h,!1,null,"2ef3fa0e",null),p=v.exports,_=function(){var e=this,t=e._self._c;return t("el-dialog",{attrs:{title:"删除课程","destroy-on-close":!0,visible:e.showDelDialog,center:"",width:"30%"},on:{close:e.onClose,"update:visible":function(t){e.showDelDialog=t}}},[t("span",[e._v("是否删除课程")]),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.showDelDialog=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"danger"},on:{click:function(t){return e.deleteClass(!0)}}},[e._v("删除全部")]),t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.deleteClass(!1)}}},[e._v("删除选中")])],1)])},f=[],b={name:"ClassDeleteDialog",props:["value"],data(){return{showDelDialog:!1}},created(){this.showDelDialog=this.value},watch:{value(e){this.showDelDialog=e}},methods:{onClose(){this.$emit("input",!1)},deleteClass(e){this.showDelDialog=!1}}},y=b,D=(0,g.Z)(y,_,f,!1,null,"46befda9",null),x=D.exports;const w=140,k=100,$=e=>{if(e){let t=e.split(":");return 60*parseInt(t[0])+parseInt(t[1])}return 0};var q={name:"WeeklyCalendar",components:{ClassDeleteDialog:x,ClassAddingDialog:p},data(){return{hours:["08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00","24:00"],headTexts:["周一","周二","周三","周四","周五","周六","周日"],selectedPos:null,dateRangeValue:null,dateList:[],currentDateRangeIndex:null,showDialog:!1,classList:[],formValue:null,showDelDialog:!1,isEditClass:!1,dayCounts:[],id:"",addingCycle:!1,selectedDates:null,loadingCourse:!1}},created(){this.id=this.$route.query.id,this.getCycle()},computed:{selectedClass(){return this.classList.filter((e=>e.selected)).map((e=>e.value))}},watch:{selectedClass(e){this.$emit("onSelectedUpdate",e)}},methods:{gridClicked(e){if(!this.selectedDates)return;let t=e.offsetX,a=e.offsetY,s=Math.floor(t/w),i=Math.floor(a/k),l=s*w,n=i*k;this.selectedPos=`top: ${n}px; left: ${l}px`,this.selectedPos={style:`top: ${n}px; left: ${l}px`,value:{weeks:(s+1)%7,start_time:this.hours[i],end_time:this.hours[i+1]}}},async getCycle(){try{const e=await(0,n.R5)(this.id);if(200===e.code){console.log(e);let t=e.data.map((e=>({id:e.id,begin_date:e.begin_date.replaceAll("-","/"),end_date:e.end_date.replaceAll("-","/")})));t&&(this.dateList=[...t])}}catch(e){console.log(e)}},async addCycle(){console.log("add"),this.addingCycle=!0;try{const e=c()(this.dateRangeValue[0]).format("YYYY-MM-DD"),t=c()(this.dateRangeValue[1]).format("YYYY-MM-DD"),a=await(0,n.Cc)(this.id,e,t);200===a.code&&(this.$message.success("保存成功"),this.dateList.push({id:a.data.id,start_date:e.replaceAll("-","/"),end_date:t.replaceAll("-","/")}),console.log(this.dateList),this.dateRangeValue=null)}catch(e){console.log(e)}this.addingCycle=!1},onClassClick(e){e.selected=!e.selected,this.classList=[...this.classList]},async onClassUpdate(e){try{const t=await(0,n.Vo)(this.id,this.selectedDates.id,JSON.stringify(e));if(200===t.code){let t=(parseInt(e.weeks)+6)%7*w,a=(($(e.start_time)-480)*(k/60)).toFixed(0),s=(($(e.end_time)-$(e.start_time))*(k/60)).toFixed(0),i={style:`top: ${a}px; left: ${t}px; height: ${s}px`,value:e};this.classList.push(i)}}catch(t){console.log(t)}},handleClassAdd(){this.selectedPos&&(this.isEditClass=!1,this.formValue=this.selectedPos.value,this.showDialog=!0,console.log("selected"))},handleClassEdit(e){this.isEditClass=!0,this.formValue=e,this.showDialog=!0},handleClassDelete(e){this.showDelDialog=!0},calcWeekday(){let e=Array(7).fill(0);if(this.selectedDates){let t=c()(this.selectedDates.begin_date,"YYYY/MM/DD"),a=c()(this.selectedDates.end_date,"YYYY/MM/DD");while(!t.isAfter(a))e[t.day()]++,t=t.add(1,"day")}const t=e.shift();e.push(t),this.dayCounts=[...e]},async queryCourses(){this.loadingCourse=!0,this.selectedPos=null,this.selectedDates=this.dateList[this.currentDateRangeIndex],this.calcWeekday();try{await(0,n.mq)(this.id,this.selectedDates.id)}catch(e){console.log(e)}this.loadingCourse=!1}}},F=q,T=(0,g.Z)(F,d,r,!1,null,"08129cec",null),L=T.exports,R={name:"headercom",components:{WeeklyCalendar:L,HomeHeader:l.Z},data(){return{selectedClass:[],currentTabName:0,studentList:[{avatar:"",name:"王小虎",time:"2023/12/29 10:00-11:00"},{avatar:"",name:"王小虎",time:"2023/12/29 10:00-11:00"}],classroomList:[{image:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",name:"50人音乐教室",intro:"教室位于尔湾教育广场，这里交通便利",location:"教室地址:美国,加利福尼亚州,洛杉矶"},{image:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",name:"50人音乐教室",intro:"教室位于尔湾教育广场，这里交通便利",location:"教室地址:美国,加利福尼亚州,洛杉矶"}]}},computed:{weekDay(){return[this.$t("CourseCalendar.xingqi1"),this.$t("CourseCalendar.xingqi2"),this.$t("CourseCalendar.xingqi3"),this.$t("CourseCalendar.xingqi4"),this.$t("CourseCalendar.xingqi5"),this.$t("CourseCalendar.xingqi6"),this.$t("CourseCalendar.xingqi7")]}},watch:{},created(){},methods:{onClassSelectedChanged(e){this.selectedClass=e},formatTimeLong(e,t){let a=e.split(":"),s=t.split(":"),i=60*parseInt(s[0])+parseInt(s[1])-(60*parseInt(a[0])+parseInt(a[1]));return this.$t("CourseCalendar.time_long_pattern",[i])}}},j=R,I=(0,g.Z)(j,s,i,!1,null,"5f623a22",null),S=I.exports}}]);