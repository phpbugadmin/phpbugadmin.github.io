"use strict";(self["webpackChunkframe"]=self["webpackChunkframe"]||[]).push([[17],{6017:function(t,e,i){i.r(e),i.d(e,{default:function(){return h}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("HomeHeader",{attrs:{topimgIsShow:!1}}),e("div",{staticClass:"center"},[e("div",{staticClass:"ConOne"},[e("div",{staticClass:"title"},[t._v(" "+t._s(t.detailObj.name_arr)+" ")]),e("div",{staticClass:"desc"},[t._v(" "+t._s(t.detailObj.brief_text)+" ")]),t.pageType?t._e():e("div",{staticClass:"collectCon"},[e("i",{staticClass:"icon fa fa-heart",class:{active:t.detailObj.is_collect},on:{click:function(e){return e.stopPropagation(),t.ShouCangOrCancel(t.detailObj)}}}),e("div",{staticClass:"text"},[t._v(t._s(t.$t("ClassroomDetail.shoucang")))])]),t.pageType?t._e():e("div",{staticClass:"shareCon",on:{click:t.shareFun}},[e("i",{staticClass:"icon fa fa-share-square-o"}),e("div",{staticClass:"text"},[t._v(t._s(t.$t("CourseDetail.fenxiang")))])])]),e("div",{staticClass:"ConTwo"},t._l(t.detailObj.images_text,(function(i,s){return e("div",{key:s,staticClass:"item",class:"item"+s},[e("el-image",{staticClass:"img",attrs:{src:i,"preview-src-list":t.detailObj.images_text}})],1)})),0),e("div",{staticClass:"ConTre"},[e("div",{staticClass:"layoutLeft"},[e("div",{staticClass:"whoCourse"},[e("div",{staticClass:"top"},[e("div",{staticClass:"text"},[t._v(t._s(t.detailObj.brief_text))])]),e("div",{staticClass:"tagsCon"},t._l(t.detailObj.label_text,(function(i,s){return e("div",{key:i,staticClass:"item"},[e("div",{staticClass:"text"},[t._v(t._s(i))])])})),0),e("div",{staticClass:"hr"})]),e("div",{staticClass:"CanScheduleTimeCon"},[e("div",{staticClass:"title"},[t._v(" "+t._s(t.$t("ClassroomDetail.keyueyueshijian"))+" ")]),e("div",{staticClass:"timeCon"},[t.timeData?e("DateRangePanel",{attrs:{date:t.timeData,disabledDate:t.disabledDate}}):t._e()],1)])]),t.pageType?t._e():e("div",{staticClass:"layoutRight"},[e("div",{staticClass:"layCon"},[e("div",{staticClass:"courseKapian"},[e("div",{staticClass:"top"},[e("div",{staticClass:"price"},[t._v(" $"+t._s(t.detailObj.price)+"/"+t._s(t.$t("ClassroomDetail.xiaoshi"))+" ")]),e("div",{staticClass:"text"},[t._v(" "+t._s(t.$t("ClassroomDetail.kechengbukequxiao"))+" ")])]),t.timeEditList.length<=1&&!t.timeEditList[0].start_time&&!t.timeEditList[0].end_time?e("div",{staticClass:"courseCon",on:{click:function(e){t.dialogVisible=!0}}},[e("div",{staticClass:"up"},[e("div",{staticClass:"startTime"},[e("div",{staticClass:"text",class:{en:2==t.vuex_Language}},[t._v(" "+t._s(t.$t("CourseDetail.xuanzeyuyuekaishishijian"))+" ")]),e("div",{staticClass:"time"},[t._v(" "+t._s(t.$t("CourseDetail.qingxuan"))+" ")])]),e("div",{staticClass:"endTime"},[e("div",{staticClass:"text",class:{en:2==t.vuex_Language}},[t._v(" "+t._s(t.$t("CourseDetail.xuanzeyuyuejieshushijian"))+" ")]),e("div",{staticClass:"time"},[t._v(" "+t._s(t.$t("CourseDetail.qingxuan"))+" ")])])])]):e("div",{staticClass:"timeEditListShowList",on:{click:function(e){t.dialogVisible=!0}}},t._l(t.timeEditList,(function(i,s){return e("div",{key:i.id,staticClass:"item"},[e("div",{staticClass:"left"},[t._v(" "+t._s(t.$t("ClassroomDetail.kaishishijian"))+"："+t._s(i.riqi)+" "+t._s(i.start_time)+" ")]),e("div",{staticClass:"right"},[t._v(" "+t._s(t.$t("ClassroomDetail.jieshushijian"))+"："+t._s(i.riqi)+" "+t._s(i.end_time)+" ")])])})),0),e("div",{staticClass:"jpBtnGreen yuding",on:{click:t.yudingFun}},[t._v(" "+t._s(t.$t("ClassroomDetail.yuding"))+" ")]),e("div",{staticClass:"tip"},[t._v(" "+t._s(t.$t("ClassroomDetail.ningxianzaibuhuibeishoufei"))+" ")]),e("div",{staticClass:"row1"},[e("div",{staticClass:"lefttext"},[t._v(" "+t._s(t.$t("ClassroomDetail.jiage"))+" ")]),e("div",{staticClass:"righttext"},[t._v("$"+t._s(t.jiage))])]),e("div",{staticClass:"row2"},[e("div",{staticClass:"lefttext"},[t._v(" "+t._s(t.$t("ClassroomDetail.fuwufei"))+" ")]),e("div",{staticClass:"righttext"},[t._v(" $"+t._s(t.serviceCharge)+" ")])]),e("div",{staticClass:"hr"}),e("div",{staticClass:"row3"},[e("div",{staticClass:"lefttext"},[t._v(" "+t._s(t.$t("ClassroomDetail.zongjia"))+" ")]),e("div",{staticClass:"righttext"},[t._v(" $"+t._s(Number(t.jiage)+Number(t.serviceCharge))+" ")])])]),e("div",{staticClass:"jubaoCon",on:{click:function(e){t.JubaoVisible=!0}}},[e("img",{staticClass:"icon",attrs:{src:i(5237)}}),e("div",{staticClass:"text"},[t._v(" "+t._s(t.$t("CourseDetail.ju_bao_gai_ke_cheng"))+" ")])])])])])]),e("el-dialog",{staticClass:"searchModal",attrs:{title:t.$t("ClassroomDetail.jiaoshiyudingshijian"),visible:t.dialogVisible,width:"760px",center:""},on:{"update:visible":function(e){t.dialogVisible=e}}},[e("div",{staticClass:"modalMain"},[e("div",{staticClass:"list"},t._l(t.timeEditList,(function(i,s){return e("div",{key:i.id,staticClass:"item"},[e("el-date-picker",{attrs:{type:"date",placeholder:"选择日期","value-format":"yyyy-MM-dd","picker-options":t.pickerOptions},on:{change:function(e){return t.timeEditListRiqiSelectConfirm(e,i)}},model:{value:i.riqi,callback:function(e){t.$set(i,"riqi",e)},expression:"item.riqi"}}),e("el-time-picker",{attrs:{"picker-options":{selectableRange:i.selectableRangeArr},placeholder:"开始时间","value-format":"HH:mm"},on:{change:function(e){return t.startTimeChange(e,i)}},model:{value:i.start_time,callback:function(e){t.$set(i,"start_time",e)},expression:"item.start_time"}}),e("el-time-picker",{attrs:{"picker-options":{selectableRange:i.selectableRangeArr},placeholder:"结束时间","value-format":"HH:mm"},on:{change:function(e){return t.endTimeChange(e,i)}},model:{value:i.end_time,callback:function(e){t.$set(i,"end_time",e)},expression:"item.end_time"}}),e("el-button",{staticClass:"btn",on:{click:t.timeEditListAdd}},[t._v(" "+t._s(t.$t("ClassroomDetail.xinzeng")))]),e("el-button",{staticClass:"btn",class:{visiHide:t.timeEditList.length<=1},on:{click:function(e){return t.timeEditListRemove(s)}}},[t._v(" "+t._s(t.$t("ClassroomDetail.yichu")))])],1)})),0),e("div",{staticClass:"jpBtnGreen confirmBtn",on:{click:t.timeEditListConfirm}},[t._v(" "+t._s(t.$t("ClassroomDetail.queren"))+" ")])])]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.cusModalConIsShow,expression:"cusModalConIsShow"}],staticClass:"cusModalCon",on:{click:function(e){t.cusModalConIsShow=!1}}},[e("div",{staticClass:"centerCon"},[e("img",{staticClass:"closeIconCon",attrs:{src:i(762),alt:""}}),e("div",{staticClass:"cusModal",on:{click:function(e){return e.stopPropagation(),t.imgShowClick.apply(null,arguments)}}},[e("img",{staticClass:"bigImg",attrs:{src:t.imgShowUrl,alt:""}})])])]),e("el-dialog",{staticClass:"jubaoModal",attrs:{title:t.$t("CourseDetail.ningweihejubao"),visible:t.JubaoVisible,width:"524px",center:""},on:{"update:visible":function(e){t.JubaoVisible=e}}},[e("div",{staticClass:"modalMain"},[e("el-form",{ref:"RefRuleForm",attrs:{model:t.jubaoForm,rules:t.Rules}},[e("el-radio-group",{model:{value:t.jubaoContent,callback:function(e){t.jubaoContent=e},expression:"jubaoContent"}},[t._l(t.jubaoOptions,(function(i,s){return e("div",{key:i.id,staticClass:"item"},[e("div",{staticClass:"leftText"},[t._v(t._s(i.name_arr))]),e("el-radio",{attrs:{label:i.name_arr}})],1)})),e("div",{staticClass:"item itemBot"},[e("div",{staticClass:"leftText"},[t._v(" "+t._s(t.$t("CourseDetail.qi_ta"))+" ")]),e("el-radio",{attrs:{label:"qita"}})],1)],2),e("el-input",{directives:[{name:"show",rawName:"v-show",value:"qita"==t.jubaoContent,expression:"jubaoContent == 'qita'"}],attrs:{placeholder:t.$t("CourseDetail.qing_shu_ru_nei_rong"),clearable:""},model:{value:t.jubaoContentOther,callback:function(e){t.jubaoContentOther=e},expression:"jubaoContentOther"}}),e("el-form-item",{attrs:{prop:"images"}},[e("div",{staticClass:"uploadTitle"},[t._v(" "+t._s(t.$t("CourseDetail.zuo_zheng_tu_pian"))+": ")]),e("div",{staticClass:"uploadCon"},[e("CustomElUpload",{ref:"customElUpload1",attrs:{template_type:"picture-card",upload_tip_text:"",files_limit:10,file_type_only:"",add_param_data:"",autoUpload:!0},model:{value:t.jubaoForm.images,callback:function(e){t.$set(t.jubaoForm,"images",e)},expression:"jubaoForm.images"}})],1)]),e("el-form-item",{attrs:{prop:"videos"}},[e("div",{staticClass:"uploadTitle"},[t._v(" "+t._s(t.$t("CourseDetail.zuo_zheng_shi_pin"))+": ")]),e("div",{staticClass:"uploadCon"},[e("CustomElUpload",{ref:"customElUpload2",attrs:{template_type:"text",upload_tip_text:"",files_limit:10,file_type_only:"",add_param_data:"",autoUpload:!0},model:{value:t.jubaoForm.videos,callback:function(e){t.$set(t.jubaoForm,"videos",e)},expression:"jubaoForm.videos"}})],1)])],1),e("div",{staticClass:"jpBtnGreen btnConfirm",on:{click:t.jubaoConfirm}},[t._v(" "+t._s(t.$t("CourseDetail.que_ren"))+" ")])],1)]),t.pageType?e("div",{staticClass:"caogaobtnCon"},[e("div",{staticClass:"btn btn1",class:{disable:!t.allowSubmit},on:{click:t.FaBuFun}},[t._v(" 教室发布 ")]),e("div",{staticClass:"btn btn2",class:{disable:!t.allowSubmit},on:{click:t.SaveAndExit}},[t._v(" 退出预览 ")])]):t._e()],1)},a=[],o=(i(7658),i(528)),l=i(4339),r=i(1206),n=i(5828),u={name:"headercom",components:{HomeHeader:o.Z,DateRangePanel:l.Z,CustomElUpload:n.Z},data(){return{colors:["#69C8C5","#69C8C5","#69C8C5"],options:[{value:"选项1",label:"黄金糕"},{value:"选项2",label:"双皮奶"}],value:"",timeData:"",detailObj:{},dialogVisible:!1,timeEditList:[{id:1,riqi:"",start_time:"",end_time:"",selectableRangeArr:[]}],jiage:0,zongjia:0,serviceCharge:"",cusModalConIsShow:!1,imgShowUrl:"",JubaoVisible:!1,jubaoContent:"",jubaoContentOther:"",jubaoOptions:[],jubaoForm:{images:"",videos:""},Rules:{},pageType:"",previewForm:{xueke:"",area:"",address:"",classroomImgs:"",classroomName:"",classroomDescribe:"",label_ids:"",price:""},allowSubmit:!0,unYuYueDataArr:[],kaifangRiqiFanweiArr:[],pickerOptions:{}}},watch:{},mounted(){let t=this.$route.query.pagetype;this.pageType=t,this.getList(),this.getJubaoOptions()},methods:{disabledDate(t){const e=t.getFullYear(),i=String(t.getMonth()+1).padStart(2,"0"),s=String(t.getDate()).padStart(2,"0"),a=`${e}-${i}-${s}`,o=this.unYuYueDataArr.includes(a);return o},convertData(t){return new Date(Date.parse(t.replace(/-/g,"/")))},JumpDetail(){this.$router.push({path:"/CourseDetail"})},yudingFun(){let t=this.$route.query.id,e=[];for(let s of this.timeEditList)e.push({start_time:s.riqi+" "+s.start_time,end_time:s.riqi+" "+s.end_time});let i={id:t,book_times:e};(0,r.g5)(i).then((e=>{if(200==e.code){let i=e.data,s=i;this.$u.vuex("vuex_ClassRoomOrderNum."+t,s),this.$router.push({path:"/ClassRoomXiadan",query:{id:t}})}}))},getList(){let t=this.$route.query.id,e=this;if("preview"==this.pageType){let t=this.$route.query.draftid;(0,r.su)({id:t}).then((t=>{if(200==t.code){let e=t.data;this.previewForm={xueke:e.subject_text,area:e.area,address:e.address,classroomImgs:e.images,classroomName:e.name,classroomDescribe:e.brief,label_ids:e.label_ids,price:e.price},this.detailObj=e}}))}else(0,r.pM)({id:t}).then((t=>{if(200==t.code){this.detailObj=t.data;let i=t.data,s=i?.classroom_date,a=i?.book_times,o=[s.start_time,s.end_time];console.log("keYuyueArr",o),this.timeData=o,this.kaifangRiqiFanweiArr=this.generateAvailableSlots(s,a);let l=[],r=[];for(let t of this.kaifangRiqiFanweiArr)"full"==t.AppointmentStatus?l.push(t.time):r.push(t.time);this.unYuYueDataArr=l,this.pickerOptions={disabledDate(t){const i=t.getFullYear(),s=String(t.getMonth()+1).padStart(2,"0"),a=String(t.getDate()).padStart(2,"0"),o=`${i}-${s}-${a}`;if(!r.includes(o))return!0;const l=e.unYuYueDataArr.includes(o);return l}}}}))},generateAvailableSlots(t,e){const i=new Date(t.start_time),s=new Date(t.end_time);let a=[];for(let o=i;o<=s;o.setDate(o.getDate()+1)){const i=o.toISOString().split("T")[0];let s={time:i,AppointmentStatus:"none",OptionalTimePeriod:JSON.parse(JSON.stringify(t.classroom_times))};e.forEach((t=>{const e=new Date(t.start_time),a=new Date(t.end_time),o=e.toISOString().split("T")[0];o===i&&(s.OptionalTimePeriod=s.OptionalTimePeriod.reduce(((t,i)=>{if(e.getHours()<parseInt(i.end_time)&&a.getHours()>parseInt(i.start_time)){if(e.getHours()<=parseInt(i.start_time)&&a.getHours()>=parseInt(i.end_time))return t;e.getHours()>parseInt(i.start_time)&&t.push({start_time:i.start_time,end_time:e.toTimeString().split(" ")[0]}),a.getHours()<parseInt(i.end_time)&&t.push({start_time:a.toTimeString().split(" ")[0],end_time:i.end_time})}else t.push(i);return t}),[]),0===s.OptionalTimePeriod.length?s.AppointmentStatus="full":s.AppointmentStatus="NotFull")})),"none"===s.AppointmentStatus&&(s.AppointmentStatus=s.OptionalTimePeriod.length>0?"none":"full"),a.push(s)}return a},ShouCangOrCancel(t){(0,r._J)({id:t.id}).then((t=>{200==t.code&&this.getList()}))},timeEditListAdd(){this.timeEditList.push({id:this.$commonFun.getRamdomId(8),riqi:"",start_time:"",end_time:"",selectableRangeArr:[]})},timeEditListRemove(t){this.timeEditList.splice(t,1)},timeEditListConfirm(){this.dialogVisible=!1;const t=this.calculateTotalTimeAndPrice(this.timeEditList,this.detailObj.price);this.jiage=t.totalPrice.toFixed(2),this.serviceChargeFun()},calculateTotalTimeAndPrice(t,e){let i=0;for(const o of t){const t=new Date(o.riqi+" "+o.start_time),e=new Date(o.riqi+" "+o.end_time),s=(e-t)/6e4;i+=s}const s=e,a=i/60*s;return{totalTimeInMinutes:i,totalPrice:a}},serviceChargeFun(){let t=this.detailObj?.service_ratio||"",e=t.replace("%",""),i=parseFloat(e)/100;this.serviceCharge=(this.jiage*i).toFixed(2)},timeEditListRiqiSelectConfirm(t,e){let i=[],s=this.kaifangRiqiFanweiArr.find(((e,i,s)=>e.time==t));if(s)for(let a of s.OptionalTimePeriod)i.push(a.start_time+"-"+a.end_time);e.selectableRangeArr=i},startTimeChange(t,e){if(console.log(111),!e.end_time)return!1;const i=this.timeToMinutes(e.start_time),s=this.timeToMinutes(e.end_time);console.log("startTime",e.start_time,"endTime",e.end_time),s<=i?(console.log("小于"),this.$message.error(this.$t("CourseCalendar.jieshushijianxuyaodayu")),e.start_time=""):console.log("大于")},endTimeChange(t,e){if(!e.start_time)return!1;const i=this.timeToMinutes(e.start_time),s=this.timeToMinutes(e.end_time);s<=i&&(this.$message.error(this.$t("CourseCalendar.jieshushijianxuyaodayu")),e.end_time="")},timeToMinutes(t){if(!t)return 0;const[e,i]=t.split(":").map(Number);return 60*e+i},ImgshowFun(t){this.imgShowUrl=t,this.cusModalConIsShow=!0},imgShowClick(){return!1},getJubaoOptions(){(0,r.e5)({type:2}).then((t=>{if(200==t.code){let e=t.data;this.jubaoOptions=e}}))},jubaoConfirm(){let t=this.$route.query.id,e="";if(e="qita"==this.jubaoContent?this.jubaoContentOther?.toString():this.jubaoContent,!e)return this.$message.error(this.$t("CourseDetail.qing_shu_ru_nei_rong")),!1;let i=this.$refs.customElUpload1.getAllFileIsUploadComplete();if(!i)return this.$message.error(this.$t("CourseDetail.tu_pian_wen_jian_zheng_zai")),!1;let s=this.$refs.customElUpload2.getAllFileIsUploadComplete();if(!s)return this.$message.error(this.$t("CourseDetail.shi_pin_wen_jian_zheng_zai")),!1;let a={id:t,report_option:e,images:this.jubaoForm.images,video:this.jubaoForm.videos};(0,r.ST)(a).then((t=>{200==t.code&&(this.$message.success(t.msg),this.JubaoVisible=!1,this.jubaoContent="",this.jubaoContentOther="",this.jubaoForm.images="",this.jubaoForm.videos="")}))},shareFun(){let t=window.location.href,e=this,i=t||"";if(!i)return this.$message.error(e.$t("CourseDetail.baoqianmeifuzhidao")),!1;this.$copyText(i).then((function(t){e.$message.success(e.$t("CourseDetail.fenxiangwangzhi"))}),(function(t){e.$message.error(e.$t("CourseDetail.baoqianmeifuzhidao"))}))},SubData(){let t={draft_id:this.$route.query.draftid,subject_name:this.previewForm.xueke,area:this.previewForm.area,address:this.previewForm.address,classroom_images:this.previewForm.classroomImgs,classroom_name:this.previewForm.classroomName,brief:this.previewForm.classroomDescribe,label_ids:this.previewForm.label_ids,price:this.previewForm.price};return console.log("console_data",JSON.parse(JSON.stringify(t))),t},FaBuFun(){this.allowSubmit=!1;let t=this.SubData();(0,r.ZK)(t).then((t=>{200==t.code?(this.$message.success(t.msg),this.allowSubmit=!0,this.previewForm={xueke:"",area:"",address:"",classroomImgs:"",classroomName:"",classroomDescribe:"",label_ids:"",price:""},this.$router.push({path:"/jsdRentalSharedClassrooms"})):this.allowSubmit=!0})).catch((t=>{this.allowSubmit=!0}))},SaveAndExit(){this.$router.push({path:"/jsdRentalSharedClassrooms"})}}},c=u,d=i(1001),m=(0,d.Z)(c,s,a,!1,null,"73d4e748",null),h=m.exports}}]);