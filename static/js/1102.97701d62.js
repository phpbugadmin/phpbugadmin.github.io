"use strict";(self["webpackChunkframe"]=self["webpackChunkframe"]||[]).push([[1102],{1102:function(t,e,s){s.r(e),s.d(e,{default:function(){return Dt}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("HomeHeader",{attrs:{topimgIsShow:!1}}),e("div",{staticClass:"content mainContent"},[e("course-intro",{attrs:{"detail-obj":t.detailObj,"teacher-info":t.teacherInfo}}),e("div",{staticClass:"center"},[e("div",{staticClass:"layoutLeft"},[e("select-course-calendar",{on:{onCourseSelected:t.onCourseSelected}})],1),e("div",{staticClass:"layoutRight"},[e("div",{staticClass:"rightPanel"},[e("selected-course-panel",{attrs:{"detail-obj":t.detailObj,selectedCourses:t.selectedCourses},on:{remove:t.onSelectCourseRemove}})],1)])]),e("teacher-info",{attrs:{"teacher-info":t.teacherInfo,comment:t.comment,"detail-obj":t.detailObj}}),e("awards-info",{attrs:{"detail-obj":t.detailObj}}),e("score-info",{attrs:{comment:t.comment}}),e("other-courses",{attrs:{"other-course":t.otherCourse}})],1),e("div",{staticClass:"report",on:{click:function(e){t.JubaoVisible=!0}}},[e("img",{staticClass:"icon",attrs:{src:s(5237)}}),e("div",{staticClass:"text"},[t._v(" "+t._s(t.$t("CourseDetail.ju_bao_gai_ke_cheng"))+" ")])]),t.JubaoVisible?e("report-dialog",{model:{value:t.JubaoVisible,callback:function(e){t.JubaoVisible=e},expression:"JubaoVisible"}}):t._e()],1)},i=[],o=(s(7658),s(5675)),l=s(122),r=s(2725),n=function(){var t=this,e=t._self._c;return t.detailObj?e("div",[e("div",{staticClass:"ConOne"},[e("div",{staticClass:"title-bar"},[e("div",{staticClass:"title"},[t._v(t._s(t.detailObj.name_arr))]),e("div",{staticClass:"actions"},[e("el-link",{on:{click:t.shareFun}},[e("i",{staticClass:"icon fa fa-share-square-o"}),t._v(t._s(t.$t("CourseDetail.fenxiang")))]),e("el-link",{on:{click:t.toggleFav}},[e("i",{staticClass:"icon fa fa-heart",class:{red:t.detailObj.is_collect}}),t._v(t._s(t.$t("CourseDetail.shoucang")))])],1)]),e("div",{staticClass:"smalltitle"},[t._v(t._s(t.detailObj.shortname_arr))]),e("div",{staticClass:"desc hide"},[t._v(" "+t._s(t.detailObj.describe_text)+" ")])]),e("image-grid",{attrs:{"image-list":t.detailObj.course_images_text}}),e("div",{staticClass:"ConTre"},[e("div",{staticClass:"layoutLeft"},[e("div",{staticClass:"whoCourse"},[e("div",{staticClass:"top"},[e("div",{staticClass:"text"},[t._v(" "+t._s(t.$t("CourseDetail.you"))+t._s(t.teacherInfo.username)+" "+t._s(t.$t("CourseDetail.jiaoshoudekecheng"))+" ")])]),e("div",{staticClass:"tagsCon"},t._l(t.detailObj.course_label_text,(function(s,a){return e("div",{key:a,staticClass:"item"},[e("div",{staticClass:"text"},[t._v(t._s(s))])])})),0)])])])],1):t._e()},c=[],u=s(8984),d={name:"CourseIntro",components:{ImageGrid:u.Z},props:{detailObj:{type:Object,default:()=>null},teacherInfo:{type:Object,default:()=>null}},data(){return{toggling:!1}},methods:{async toggleFav(){if(this.toggling)return;this.toggling=!0;let t=this.$route.query.id;try{const e=await(0,l.VPS)({id:t});200===e.code&&(this.detailObj.is_collect=!this.detailObj.is_collect)}catch(e){console.error(e)}this.toggling=!1},shareFun(){let t=window.location.href,e=this,s=t||"";if(!s)return this.$message.error(e.$t("CourseDetail.baoqianmeifuzhidao")),!1;this.$copyText(s).then((function(t){e.$message.success(e.$t("CourseDetail.fenxiangwangzhi"))}),(function(t){e.$message.error(e.$t("CourseDetail.baoqianmeifuzhidao"))}))},viewOtherInfo(t){this.$router.push({path:"/otherInfo",query:{id:t.id}})}}},C=d,h=s(1001),_=(0,h.Z)(C,n,c,!1,null,"a4e2c27c",null),g=_.exports,m=function(){var t=this,e=t._self._c;return t.teacherInfo&&t.comment&&t.detailObj?e("div",{staticClass:"teacherInfo"},[e("div",{staticClass:"onetitle"},[t._v(" "+t._s(t.$t("CourseDetail.nidelaoshi"))+" ")]),e("div",{staticClass:"contCon"},[e("div",{staticClass:"top"},[e("div",{staticClass:"leftCon"},[e("div",{staticClass:"left"},[e("img",{staticClass:"headImg",attrs:{src:t.teacherInfo.avatar_text}}),e("div",{staticClass:"text"},[t._v(" "+t._s(t.teacherInfo.username)+" ")])]),e("div",{staticClass:"right"},[e("div",{staticClass:"item"},[e("div",{staticClass:"num"},[t._v(" "+t._s(t.comment.total)+" ")]),e("div",{staticClass:"wenzi"},[t._v(" "+t._s(t.$t("CourseDetail.tiaopingjia"))+" ")])]),e("div",{staticClass:"shr"}),e("div",{staticClass:"item"},[e("div",{staticClass:"num"},[t._v(" "+t._s(t.comment.total_value)),e("i",{staticClass:"sicon fa fa-star"})]),e("div",{staticClass:"wenzi"},[t._v(" "+t._s(t.$t("CourseDetail.pingjia"))+" ")])]),e("div",{staticClass:"shr"}),e("div",{staticClass:"item"},[e("div",{staticClass:"num"},[t._v(" "+t._s(t.teacherInfo.teaching_age)+" ")]),e("div",{staticClass:"wenzi"},[t._v(" "+t._s(t.$t("CourseDetail.nianjiaoxuejingyan"))+" ")])])])]),e("div",{staticClass:"rightCon"},[e("div",{staticClass:"item"},[e("img",{staticClass:"headImg",attrs:{src:s(8480)}}),e("div",{staticClass:"stext"},[t._v(" "+t._s(t.teacherInfo.birthday)+" ")])]),e("div",{staticClass:"item"},[e("img",{staticClass:"headImg",attrs:{src:s(9079)}}),e("div",{staticClass:"stext"},[t._v(" "+t._s(t.$t("CourseDetail.jiaoxuenianling"))+"： "+t._s(t.teacherInfo.teaching_age)+t._s(t.$t("CourseDetail.nian"))+" ")])]),e("div",{staticClass:"item"},[e("img",{staticClass:"headImg",attrs:{src:s(7528)}}),e("div",{staticClass:"stext"},[t._v(" "+t._s(t.$t("CourseDetail.cengjiuduyu"))+"："+t._s(t.teacherInfo.school)+" ")])]),e("div",{staticClass:"item"},[e("img",{staticClass:"headImg",attrs:{src:s(8815)}}),e("div",{staticClass:"stext"},[t._v(" "+t._s(t.$t("CourseDetail.xueli"))+"："+t._s(t.teacherInfo.education)+" ")])]),e("div",{staticClass:"item"},[e("img",{staticClass:"headImg",attrs:{src:s(8258)}}),e("div",{staticClass:"stext"},[t._v(" "+t._s(t.$t("CourseDetail.zhuanyexueke"))+"："+t._s(t.teacherInfo.major)+" ")])]),e("div",{staticClass:"item"},[e("img",{staticClass:"headImg",attrs:{src:s(4505)}}),e("div",{staticClass:"stext"},[t._v(" "+t._s(t.$t("CourseDetail.chaojijiaoshi"))+" ")])])])]),e("div",{staticClass:"contit contit1"},[t._v(" "+t._s(t.$t("CourseDetail.jiaoshijieshao"))+" ")]),e("div",{staticClass:"desc"},[t._v(" "+t._s(t.teacherInfo.about_you)+" ")]),e("div",{staticClass:"contit"},[t._v(" "+t._s(t.$t("CourseDetail.kechengjieshao"))+" ")]),e("div",{staticClass:"desc"},[t._v(" "+t._s(t.detailObj.describe_text)+" ")]),t.detailObj.video_text?e("div",{staticClass:"contit"},[t._v(" "+t._s(t.$t("CourseDetail.kechengshipin"))+" ")]):t._e(),e("div",{staticClass:"botCon"},[e("youtube-player",{attrs:{width:"416",height:"234",src:t.detailObj?.video_text}}),e("el-button",{staticClass:"jpBtnGreen btnSendInfo",attrs:{loading:t.contacting},on:{click:function(e){return t.sendMessage(t.teacherInfo.id)}}},[t._v(" "+t._s(t.$t("CourseDetail.geilaoshifaxiaoxi"))+" ")])],1)])]):t._e()},v=[],p=s(7849),A={name:"TeacherInfo",components:{YoutubePlayer:p.Z},props:{teacherInfo:{type:Object,default:()=>null},comment:{type:Object,default:()=>null},detailObj:{type:Object,default:()=>null}},data(){return{contacting:!1}},watch:{detailObj(t){}},methods:{async sendMessage(t){this.contacting=!0;try{const e=await(0,l.d1V)({id:t});200===e.code&&this.$router.push({path:"/message",query:{targetId:t}})}catch(e){console.error(e)}finally{this.contacting=!1}}}},f=A,b=(0,h.Z)(f,m,v,!1,null,"596dee48",null),j=b.exports,x=function(){var t=this,e=t._self._c;return t.detailObj.other_images_text&&t.detailObj.other_images_text.length>0?e("div",{staticClass:"classRoom"},[e("div",{staticClass:"title"},[t._v(" "+t._s(t.$t("CourseDetail.huo_jiang_huo_ren_he"))+" ")]),e("div",{staticClass:"imglist"},t._l(t.detailObj.other_images_text,(function(s,a){return e("el-image",{key:a,staticClass:"img",attrs:{src:s,"preview-src-list":t.detailObj.other_images_text}})})),1)]):t._e()},y=[],D={name:"AwardsInfo",props:{detailObj:{type:Object,default:()=>null}}},$=D,w=(0,h.Z)($,x,y,!1,null,"e97763b2",null),O=w.exports,k=function(){var t=this,e=t._self._c;return t.comment?e("div",{staticClass:"pingjiaCon"},[e("div",{staticClass:"sectitle"},[e("i",{staticClass:"sicon fa fa-star"}),t._v(t._s(t.comment?.total)+t._s(t.$t("CourseDetail.tiaopingjia"))+" ")]),e("div",{staticClass:"miaoshuList"},t._l(t.comment?.option||[],(function(s,a){return e("div",{key:s.id,staticClass:"item"},[e("div",{staticClass:"text"},[t._v(t._s(s.name))]),e("div",{staticClass:"barCon"},[e("el-progress",{attrs:{percentage:s.value,color:"#55B8B4","show-text":!1}})],1),e("div",{staticClass:"num"},[t._v(t._s(s.value))])])})),0),e("div",{staticClass:"pingjiaList"},t._l(t.comment?.content||[],(function(s,a){return e("div",{key:s.id,staticClass:"item"},[e("div",{staticClass:"top"},[e("img",{staticClass:"img",attrs:{src:s.avatar}}),e("div",{staticClass:"info"},[e("div",{staticClass:"name"},[t._v(t._s(s.nickname))]),e("div",{staticClass:"time"},[t._v(t._s(s.date))])])]),e("div",{staticClass:"dect"},[t._v(" "+t._s(s.content)+" ")])])})),0)]):t._e()},R=[],B={name:"ScoreInfo",props:{comment:{type:Object,default:()=>null}}},I=B,U=(0,h.Z)(I,k,R,!1,null,"10da6222",null),S=U.exports,q=function(){var t=this,e=t._self._c;return e("div",{staticClass:"qitaCounseCon"},[e("div",{staticClass:"sectitle"},[t._v(t._s(t.$t("CourseDetail.qitakecheng")))]),e("div",{staticClass:"list"},t._l(t.otherCourse,(function(s){return e("div",{key:s.id,staticClass:"item",on:{click:function(e){return t.JumpCourse(s)}}},[e("div",{staticClass:"imgCon"},[e("el-carousel",{attrs:{height:"280px",autoplay:!1,"indicator-position":"none",loop:!1}},t._l(s.course_images_text,(function(t,s){return e("el-carousel-item",{key:s},[e("img",{staticClass:"img",attrs:{src:t,alt:""}})])})),1)],1),e("div",{staticClass:"bot"},[e("div",{staticClass:"titleCon"},[e("div",{staticClass:"title"},[t._v(t._s(s.name_arr))]),e("div",{staticClass:"right"},[e("span",{staticClass:"pingfen"},[t._v(t._s(s.total_value))]),e("i",{staticClass:"star fa fa-star"})])]),e("div",{staticClass:"dec"},[t._v(" "+t._s(s.subject_text)+","+t._s(s.course_label_text.toString())+" ")]),e("div",{staticClass:"price"},[t._v(" $"+t._s(s.price)+"/"+t._s(t.$t("CourseDetail.xiaoshi"))+" ")])]),e("i",{staticClass:"collect fa fa-heart"})])})),0)])},E=[],F={name:"OtherCourses",props:{otherCourse:{type:Array,default:()=>[]}},methods:{JumpCourse(t){const{href:e}=this.$router.resolve({path:"/CourseDetail",query:{id:t.id}});window.open(e,"_blank")}}},Q=F,G=(0,h.Z)(Q,q,E,!1,null,"09dff142",null),V=G.exports,M=function(){var t=this,e=t._self._c;return e("div",{staticClass:"tuijianJiaojuCon"},[e("div",{staticClass:"sectitle"},[t._v(" "+t._s(t.$t("CourseDetail.tuijianjiaoju"))+" ")]),e("div",{staticClass:"list"},t._l(t.goods,(function(a){return e("div",{key:a.id,staticClass:"item",on:{click:function(e){return t.jumpDetail(a)}}},[a.images_text&&a.images_text.length>0?e("img",{staticClass:"img",attrs:{src:a.images_text[0]}}):t._e(),e("div",{staticClass:"title"},[t._v(" "+t._s(a.name_arr)+" ")]),e("div",{staticClass:"price"},[t._v("$"+t._s(a.price))]),e("div",{staticClass:"pinfen"},[e("div",{staticClass:"left"},[e("el-rate",{attrs:{value:4,disabled:"",colors:t.colors}})],1),e("img",{staticClass:"sicon",attrs:{src:s(8787),alt:""}})])])})),0)])},Z=[],P={name:"TeachingAids",props:{goods:{type:Array,default:()=>[]}},data(){return{colors:["#69C8C5","#69C8C5","#69C8C5"]}},methods:{jumpDetail(){this.$router.push({path:"/CourseDetail"})}}},L=P,Y=(0,h.Z)(L,M,Z,!1,null,"32879e31",null),J=Y.exports,T=function(){var t=this,e=t._self._c;return e("el-dialog",{staticClass:"jubaoModal",attrs:{title:t.$t("CourseDetail.ningweihejubao"),visible:t.showDialog,width:"524px",center:""},on:{"update:visible":function(e){t.showDialog=e},close:t.onClose}},[e("div",{staticClass:"modalMain"},[e("el-form",{ref:"RefRuleForm",attrs:{model:t.jubaoForm,rules:t.Rules}},[e("el-radio-group",{model:{value:t.jubaoContent,callback:function(e){t.jubaoContent=e},expression:"jubaoContent"}},[t._l(t.jubaoOptions,(function(s,a){return e("div",{key:s.id,staticClass:"item"},[e("div",{staticClass:"leftText"},[t._v(t._s(s.name_arr))]),e("el-radio",{attrs:{label:s.name_arr}})],1)})),e("div",{staticClass:"item itemBot"},[e("div",{staticClass:"leftText"},[t._v(" "+t._s(t.$t("CourseDetail.qi_ta"))+" ")]),e("el-radio",{attrs:{label:"qita"}})],1)],2),e("el-input",{directives:[{name:"show",rawName:"v-show",value:"qita"==t.jubaoContent,expression:"jubaoContent == 'qita'"}],attrs:{placeholder:t.$t("CourseDetail.qing_shu_ru_nei_rong"),clearable:""},model:{value:t.jubaoContentOther,callback:function(e){t.jubaoContentOther=e},expression:"jubaoContentOther"}}),e("el-form-item",{attrs:{prop:"images"}},[e("div",{staticClass:"uploadTitle"},[t._v(" "+t._s(t.$t("CourseDetail.zuo_zheng_tu_pian"))+": ")]),e("div",{staticClass:"uploadCon"},[e("CustomElUpload",{ref:"customElUpload1",attrs:{template_type:"picture-card",upload_tip_text:"",files_limit:10,file_type_only:"",add_param_data:"",autoUpload:!0},model:{value:t.jubaoForm.images,callback:function(e){t.$set(t.jubaoForm,"images",e)},expression:"jubaoForm.images"}})],1)]),e("el-form-item",{attrs:{prop:"videos"}},[e("div",{staticClass:"uploadTitle"},[t._v(" "+t._s(t.$t("CourseDetail.zuo_zheng_shi_pin"))+": ")]),e("div",{staticClass:"uploadCon"},[e("CustomElUpload",{ref:"customElUpload2",attrs:{template_type:"text",upload_tip_text:"",files_limit:10,file_type_only:"",add_param_data:"",autoUpload:!0},model:{value:t.jubaoForm.videos,callback:function(e){t.$set(t.jubaoForm,"videos",e)},expression:"jubaoForm.videos"}})],1)])],1),e("div",{staticClass:"jpBtnGreen btnConfirm",on:{click:t.jubaoConfirm}},[t._v(" "+t._s(t.$t("CourseDetail.que_ren"))+" ")])],1)])},z=[],K={name:"ReportDialog",components:{CustomElUpload:r.Z},props:["value"],data(){return{showDialog:!1,jubaoForm:{images:"",videos:""},jubaoContent:"",jubaoContentOther:"",jubaoOptions:[],Rules:{}}},created(){this.getJubaoOptions(),this.showDialog=this.value},watch:{value(t){this.showDialog=t}},methods:{onClose(){this.$emit("input",!1)},jubaoConfirm(){let t=this.$route.query.id,e="";if(e="qita"==this.jubaoContent?this.jubaoContentOther?.toString():this.jubaoContent,!e)return this.$message.error(this.$t("CourseDetail.qing_shu_ru_nei_rong")),!1;let s=this.$refs.customElUpload1.getAllFileIsUploadComplete();if(!s)return this.$message.error(this.$t("CourseDetail.tu_pian_wen_jian_zheng_zai")),!1;let a=this.$refs.customElUpload2.getAllFileIsUploadComplete();if(!a)return this.$message.error(this.$t("CourseDetail.shi_pin_wen_jian_zheng_zai")),!1;let i={id:t,report_option:e,images:this.jubaoForm.images,video:this.jubaoForm.videos};(0,l.JRR)(i).then((t=>{200==t.code&&(this.$message.success(t.msg),this.showDialog=!1,this.jubaoContent="",this.jubaoContentOther="",this.jubaoForm.images="",this.jubaoForm.videos="")}))},getJubaoOptions(){(0,l.e5F)({type:1}).then((t=>{if(200==t.code){let e=t.data;this.jubaoOptions=e}}))}}},H=K,N=(0,h.Z)(H,T,z,!1,null,"1682cfa5",null),W=N.exports,X=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{staticClass:"tool-bar"},[e("el-select",{staticClass:"dateOuter",attrs:{placeholder:t.$t("CourseCalendar.pls_select"),size:"large"},on:{change:t.onSelectChange},model:{value:t.currentDateRangeIndex,callback:function(e){t.currentDateRangeIndex=e},expression:"currentDateRangeIndex"}},t._l(t.dateList,(function(t,s){return e("el-option",{key:`${t.id}`,attrs:{label:`${t.begin_date}-${t.end_date}`,value:s}})})),1)],1),e("div",[e("calendar-box",{directives:[{name:"loading",rawName:"v-loading",value:t.querying,expression:"querying"}],ref:"calendarBox",attrs:{list:t.list,"date-range":t.selectedDates,selectable:!1,editable:!1},on:{onItemClick:t.onCourseClick}})],1),t.showDialog?e("select-course-dialog",{attrs:{course:t.selectedCourse},on:{select:t.onSelected},model:{value:t.showDialog,callback:function(e){t.showDialog=e},expression:"showDialog"}}):t._e()],1)},tt=[],et=s(2553),st=s(5252),at=function(){var t=this,e=t._self._c;return e("el-dialog",{attrs:{title:t.$t("CourseCalendar.select_time"),visible:t.showDialog,width:"800px","custom-class":"box",center:""},on:{"update:visible":function(e){t.showDialog=e},close:t.onClose}},[t.course?e("div",[e("div",[t._v(t._s(t.$t("CourseCalendar.class_date"))+"："),e("el-date-picker",{attrs:{format:"yyyy/MM/dd",type:"daterange",editable:!1,size:"large","picker-options":t.pickerOptions,"start-placeholder":t.$t("CourseCalendar.begin_date"),"end-placeholder":t.$t("CourseCalendar.end_date")},model:{value:t.dateRangeValue,callback:function(e){t.dateRangeValue=e},expression:"dateRangeValue"}})],1),e("div",[e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:t.list,"tooltip-effect":"dark",height:"500px"},on:{"selection-change":t.handleSelectionChange}},[e("el-table-column",{attrs:{type:"selection",width:"55"}}),e("el-table-column",{attrs:{prop:"date",label:t.$t("CourseCalendar.class_date"),width:"120"}}),e("el-table-column",{attrs:{label:t.$t("CourseCalendar.price"),width:"180"},scopedSlots:t._u([{key:"default",fn:function({row:s}){return[e("span",{staticClass:"orange"},[t._v("$"+t._s(s.discount_price||0))]),t._v(" "),e("span",{staticClass:"strickout"},[t._v("$"+t._s(s.price||0))])]}}],null,!1,1520201662)}),e("el-table-column",{attrs:{width:"120",label:t.$t("CourseCalendar.taxes")},scopedSlots:t._u([{key:"default",fn:function({row:e}){return[t._v("$"+t._s(e.tax_price||0))]}}],null,!1,814605215)}),e("el-table-column",{attrs:{prop:"book_min_num",label:t.$t("CourseCalendar.required_num")}}),e("el-table-column",{attrs:{prop:"order_num",label:t.$t("CourseCalendar.booked_num")}})],1)],1),e("el-button",{staticClass:"btn",attrs:{type:"primary"},on:{click:t.select}},[t._v(t._s(t.$t("CourseCalendar.select")))])],1):t._e()])},it=[],ot=s(7484),lt=s.n(ot),rt={name:"SelectCourseDialog",props:["value","course"],data(){return{showDialog:!1,list:[],loading:!1,dateRangeValue:null,pickerOptions:null,selected:[]}},created(){this.showDialog=this.value},mounted(){this.updatePickerOption()},computed:{isCheckAll(){if(this.list?.length){let t=this.list.find((t=>!t.checked));return!t}return!1}},watch:{value(t){this.showDialog=t},course(t){this.updatePickerOption()},dateRangeValue(t){if(t){let e=lt()(t[0]).format("YYYY-MM-DD"),s=lt()(t[1]).format("YYYY-MM-DD");this.getCourse(e,s)}else this.list=[]}},methods:{updatePickerOption(){if(this.course){let t=this.course.begin_date,e=this.course.end_date;this.dateRangeValue=[lt()(t),lt()(e)],this.pickerOptions={disabledDate(s){let a=s.getTime()<lt()(t).hour(0).minute(0).second(0).millisecond(0).toDate(),i=s.getTime()>lt()(e).hour(0).minute(0).second(0).millisecond(0).toDate();return a||i}}}},async getCourse(t,e){if(this.list=[],this.course){this.loading=!0;try{const s=await(0,l.MPt)(this.course.id,t,e);200===s.code&&(this.list=s.data)}catch(s){console.error(s)}this.loading=!1}},onClose(){this.$emit("input",!1)},select(){this.$emit("select",this.selected),this.showDialog=!1},handleSelectionChange(t){console.log(t),this.selected=t}}},nt=rt,ct=(0,h.Z)(nt,at,it,!1,null,"e8f32d98",null),ut=ct.exports,dt={name:"SelectCourseCalendar",components:{ReportDialog:W,SelectCourseDialog:ut,ClassroomAddingDialog:st.Z,CalendarBox:et.Z},data(){return{dateList:[],currentDateRangeIndex:null,showDialog:!1,list:[],id:"",selectedDates:null,querying:!1,selectedCourse:null}},created(){this.id=this.$route.query.id,this.getCycle()},methods:{async onSelectChange(t){this.queryCourses()},async getCycle(){try{const t=await(0,l.zgA)(this.id);if(200===t.code){let e=t.data.list.map((t=>({id:t.id,begin_date:t.begin_date.replaceAll("-","/"),end_date:t.end_date.replaceAll("-","/")})));e&&(this.dateList=[...e],this.dateList.length&&(this.currentDateRangeIndex=0,this.queryCourses()))}}catch(t){console.log(t)}},onCourseClick(t){this.selectedCourse=t,this.showDialog=!0},async queryCourses(){this.querying=!0,this.selectedDates=this.dateList[this.currentDateRangeIndex];try{const t=await(0,l.wDd)(this.id,this.selectedDates.id);200===t.code&&(this.list=t.data)}catch(t){console.log(t)}this.querying=!1},onSelected(t){this.$emit("onCourseSelected",t)}}},Ct=dt,ht=(0,h.Z)(Ct,X,tt,!1,null,"6b8fb436",null),_t=ht.exports,gt=function(){var t=this,e=t._self._c;return t.detailObj?e("div",{staticClass:"panel"},[e("div",{staticClass:"titleBox"},[t._v(t._s(t.detailObj.discount_rule))]),e("ul",{staticClass:"ulBox"},[t.selectedCourses?.length>0?t._l(t.selectedCourses,(function(s,a){return e("li",{key:`${s.id}-${s.date}`},[e("div",{staticClass:"flexBox"},[e("div",[t._v(t._s(s.date.replaceAll("-","/"))+" ("+t._s(t.weekDay[parseInt(s.week)-1])+") "+t._s(s.start_time)+"-"+t._s(s.end_time))]),e("div",[e("b",[e("i",{staticClass:"el-icon-discount"}),t._v(" $"+t._s(s.discount_price||0))]),e("el-divider",{attrs:{direction:"vertical"}}),e("span",{staticClass:"line-through"},[t._v("$"+t._s(s.price||0))])],1)]),e("el-button",{attrs:{type:"text"},on:{click:function(e){return t.remove(a)}}},[t._v(t._s(t.$t("CourseDetail.delete")))])],1)})):e("el-empty",{staticClass:"empty",attrs:{"image-size":100}})],2),e("div",{staticClass:"fee"},[e("div",{staticClass:"flexLine"},[e("div",[t._v(t._s(t.$t("CourseDetail.jieshu")))]),e("b",[t._v(t._s(t.selectedCourses?.length||0))])]),e("div",{staticClass:"flexLine"},[e("div",[t._v(t._s(t.$t("CourseDetail.course_fee")))]),e("b",[t._v("$"+t._s(t.totalCoursePrice))])]),e("div",{staticClass:"flexLine"},[e("div",[t._v(t._s(t.$t("CourseDetail.fuwufei")))]),e("b",[t._v("$"+t._s(t.serviceFee))])]),e("div",{staticClass:"flexLine"},[e("div",[t._v(t._s(t.$t("CourseCalendar.taxes")))]),e("b",[t._v("$"+t._s(t.totalTaxesPrice))])]),e("el-divider"),e("div",{staticClass:"flexLine"},[e("div",[t._v(t._s(t.$t("CourseDetail.zongjia")))]),e("b",[t._v("$"+t._s(t.totalPrice))])])],1),e("el-button",{staticClass:"w100",attrs:{type:"primary",disabled:t.disabled,loading:t.submitting},on:{click:t.booking}},[t._v(t._s(t.$t("CourseDetail.yuding")))])],1):t._e()},mt=[],vt=s(794),pt={name:"SelectedCoursePanel",props:{detailObj:{type:Object,default:()=>null},selectedCourses:{type:Array,default:()=>[]}},data(){return{submitting:!1}},computed:{disabled(){return!this.selectedCourses?.length},weekDay(){return[this.$t("CourseCalendar.xingqi1"),this.$t("CourseCalendar.xingqi2"),this.$t("CourseCalendar.xingqi3"),this.$t("CourseCalendar.xingqi4"),this.$t("CourseCalendar.xingqi5"),this.$t("CourseCalendar.xingqi6"),this.$t("CourseCalendar.xingqi7")]},totalCoursePrice(){return this.selectedCourses.reduce(((t,e)=>(t=(0,vt.Z)(e.discount_price||0).plus(t),t)),(0,vt.Z)(0))},totalTaxesPrice(){return this.selectedCourses.reduce(((t,e)=>(t=(0,vt.Z)(e.tax_price||0).plus(t),t)),(0,vt.Z)(0))},serviceFee(){return this.detailObj?(0,vt.Z)(parseFloat(this.detailObj.serve_ratio||0)).div(100).times(this.totalCoursePrice).decimalPlaces(2):0},totalPrice(){return(0,vt.Z)(this.totalCoursePrice).plus(this.serviceFee).plus(this.totalTaxesPrice)}},methods:{remove(t){this.$emit("remove",t)},async booking(){if(this.selectedCourses?.length){this.submitting=!0;try{let t=this.selectedCourses.map((t=>t.id)).join(",");const e=await(0,l.Ec8)(t);if(200===e.code){let t=e.data;this.goPay(t)}}catch(t){console.error(t)}this.submitting=!1}},goPay(t){this.$router.push({path:"/CourseXiadan",query:{out_trade_no:t,id:this.$route.query.id}})}}},At=pt,ft=(0,h.Z)(At,gt,mt,!1,null,"c2971982",null),bt=ft.exports,jt={name:"headercom",components:{SelectedCoursePanel:bt,SelectCourseCalendar:_t,ReportDialog:W,TeachingAids:J,OtherCourses:V,ScoreInfo:S,AwardsInfo:O,TeacherInfo:j,CourseIntro:g,HomeHeader:o.Z,CustomElUpload:r.Z},data(){return{detailObj:{},teacherInfo:{},otherCourse:[],recommenGoodList:[],JubaoVisible:!1,comment:{},selectedCourses:[]}},mounted(){this.getHomeCourseDetail()},methods:{async getHomeCourseDetail(){const t=this.$loading();let e=this.$route.query.id;try{const t=await(0,l.Yu6)({id:e});if(200===t.code){let e=t.data;this.detailObj=e,this.teacherInfo=e.user_info,this.otherCourse=e.other_course,this.recommenGoodList=e.goods,this.comment=e.comment}}catch(s){console.error(s)}t.close()},onCourseSelected(t){let e=[...this.selectedCourses,...t];this.selectedCourses=e.reduce(((t,e)=>{const s=t.find((t=>t.id===e.id&&t.date===e.date));return s||t.push(e),t}),[])},onSelectCourseRemove(t){this.selectedCourses.splice(t,1)}}},xt=jt,yt=(0,h.Z)(xt,a,i,!1,null,"05772134",null),Dt=yt.exports},8480:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAARCAMAAADqmnyMAAAAPFBMVEUAAAAiGBQjGBUkGBQkGBIjFxckGBYjGBYiGRQjGRUjGBUjGBUjGBUjGBUjGhIjFxYiGhEiEREjGBUjGBXBH+X1AAAAE3RSTlMAf79AKiyAgnCRwMOn1h2ZHg+TbnkXxAAAAHJJREFUeNoFwYdBAAAMArBQ3Fv5/1cTAIALAJqkZAMg22677QC6BW2yALoAdAXcAbAAXQHICu7wCA9Y0Ox42jMveyW7ugve9s7HPpGLpfj6/uH37wHNyXYAcFuRBYAuQA6AO0B3AHcAuqU0WwGQbdsC/APVtARUO55vlQAAAABJRU5ErkJggg=="},9079:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAQAAAAngNWGAAAAOklEQVR42mNAA/sZ/kMgkIUX/B/OCuthEL/CegR/ABWCOPuh0AG/QgSzflQhpsL9yAoRoQrmOcB5+wFJjegCpTgp5QAAAABJRU5ErkJggg=="},7528:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAQAAAA6heU+AAAAfUlEQVR42n2RwQnAMAwDb7RsptE0mgtFH2Pj+6SkFxkjBsKYBzeiMKbwLRVq34OHKTRuzFuyjueH1EMeib94v4puNeNrLrINNkWo5C5azlAZoJHVxShpJL+Us9EbSfYhZjURpmiKDWMa2itcbmeRqWKSnc1DKCUcdTlbu2sfeeFrPZ5G4f8AAAAASUVORK5CYII="},8815:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAQAAABOkSfeAAAAYUlEQVR42o3QUQqAMAwE0TlabrZH69EU1BBM7GLyVx60U8YIsQjaTHTcu8dRyOBCBhfyeFlSlF80rw+DBfnOPRaChMWiYV0bHWZdPCh/Y8LqS/QFMb0NglizuMfMdr1OOQGmOKlPltjTrwAAAABJRU5ErkJggg=="},8258:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAQAAAA6heU+AAAAi0lEQVR42oWRwRFEIQhDX2l0ltIojb0wZPjDjvGCJkSDLAiRFEWSBDdGInLqE5sIkrpdRSELu/Hpab/bc15n9xM5YcQTInjj/2BE0quzavKbC6hZlgRFkIsjSZzZjWa6EsUeeKDehUc/tKVDCqaO/R/bRb74e6Vb/KRs1tLv765Brf5CvM4m64Z89gMkdXsoAOeb6AAAAABJRU5ErkJggg=="},4505:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAVCAQAAADs3AYjAAAAd0lEQVR42p2RyQ3EQAzDWJo6U2kqzftbGFEuRP5yOLDMISIMgxE3MbPGt9ieK2sKDKeZt2C+g+Y0KvBdPU9NmhCM+B6hS4MwBgBXFcbVrfYCWg99WC7sendFdasqJH+jG2wnwBRYTgNusJ2GPmdoZ/sMwuXsf/gBpHXTnzi9+aoAAAAASUVORK5CYII="},5237:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAARCAQAAAB6UzRyAAAAW0lEQVR42o2QwQ3AMAgDGY3N/PRYHo0qjxSlKnV9n0g5yUBQBHMT76FYN5oksEZyS2mllVGRL/RSl7lCTGc4SVfYmj/DOZWIxceOBNWvB9lShQ+L8JL+SKCmvwvD1O0Kn4sAhwAAAABJRU5ErkJggg=="}}]);