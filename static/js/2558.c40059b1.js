"use strict";(self["webpackChunkframe"]=self["webpackChunkframe"]||[]).push([[2558],{2558:function(e,i,t){t.r(i),t.d(i,{default:function(){return C}});var s=function(){var e=this,i=e._self._c;return i("div",{staticClass:"container"},[i("HomeHeader",{attrs:{topimgIsShow:!1}}),i("div",{staticClass:"center"},[i("div",{staticClass:"layoutLeft"},[i("CourseCalendar",{ref:"refCourseCalendar",attrs:{useTo:"studentYuyue",courseId:e.$route.query.id,schoolTimetableCourseEndTime:e.courseEndTime},on:{currentSelectKejieObj:e.reciveSelectKejieFun,selectKeJieRiliList:e.reciveSelectKeJieRiliList}})],1),i("div",{staticClass:"layoutRight"},[i("div",{staticClass:"layoutTop"},[i("div",{staticClass:"top"},[e.detailObj.course_images_text&&e.detailObj.course_images_text.length>0?i("img",{staticClass:"img",attrs:{src:e.detailObj.course_images_text[0],alt:""}}):e._e(),i("div",{staticClass:"middle"},[i("div",{staticClass:"title"},[e._v(" "+e._s(e.detailObj.name_arr)+" ")]),i("div",{staticClass:"desc"},[e._v(" "+e._s(e.detailObj.describe)+" ")]),i("div",{staticClass:"price"},[e._v(" $ "+e._s(e.detailObj.price)+"/"+e._s(e.$t("CourseYuyue.xiaoshi"))+" ")])])]),i("div",{staticClass:"hr"}),i("div",{staticClass:"infoCon"},[i("div",{staticClass:"title title1"},[e._v(" "+e._s(e.$t("CourseYuyue.xuanzhongkechengxinxi"))+" ")]),i("div",{staticClass:"row row1"},[i("div",{staticClass:"left"},[e._v(" "+e._s(e.$t("CourseYuyue.kashishijian"))+" ")]),i("div",{staticClass:"mid"}),i("div",{staticClass:"right"},[e._v(" "+e._s(e.selectKejieObj.start_time)+" ")])]),i("div",{staticClass:"row row2"},[i("div",{staticClass:"left"},[e._v(" "+e._s(e.$t("CourseYuyue.jieshushijian"))+" ")]),i("div",{staticClass:"mid"}),i("div",{staticClass:"right"},[e._v(" "+e._s(e.selectKejieObj.end_time)+" ")])]),i("div",{staticClass:"row row3"},[i("div",{staticClass:"left"},[e._v(" "+e._s(e.$t("CourseYuyue.kechengrenshu"))+" ")]),i("div",{staticClass:"mid"}),i("div",{staticClass:"right"},[e._v(" "+e._s(e.$t("CourseYuyue.ren"))+" ")])]),i("div",{staticClass:"row row4"},[i("div",{staticClass:"left"},[e._v(" "+e._s(e.$t("CourseYuyue.keyueyuerenshu"))+" ")]),i("div",{staticClass:"mid"}),i("div",{staticClass:"right"},[e._v(" "+e._s(e.selectKejieObj.book_num)+e._s(e.$t("CourseYuyue.ren"))+" ")])])]),i("div",{staticClass:"hr2"}),i("div",{staticClass:"infoCon"},[i("div",{staticClass:"title title1"},[e._v(" "+e._s(e.$t("CourseYuyue.yixuankechengxinxi"))+" ")]),i("div",{staticClass:"row row1"},[i("div",{staticClass:"left"},[e._v(" "+e._s(e.$t("CourseYuyue.yixuankecheng"))+" ")]),i("div",{staticClass:"mid"}),i("div",{staticClass:"right"},[e._v(" "+e._s(e.lapingKejieArr.length)+e._s(e.$t("CourseYuyue.jie"))+" ")])]),i("div",{staticClass:"row row2"},[i("div",{staticClass:"left"},[e._v(" "+e._s(e.$t("CourseYuyue.yiyouhui"))+" ")]),i("div",{staticClass:"mid"}),i("div",{staticClass:"right"},[e._v("$"+e._s(e.youhuiPrice))])]),i("div",{staticClass:"row row3"},[i("div",{staticClass:"left"},[e._v(" "+e._s(e.$t("CourseYuyue.zongjia"))+" ")]),i("div",{staticClass:"mid"}),i("div",{staticClass:"right"},[e._v(" $"+e._s(e.selectKejieTotalPrice-e.youhuiPrice)+" ")])]),i("div",{staticClass:"jpBtnGreen btnYuDing",on:{click:e.courseYuDing}},[e._v(" "+e._s(e.$t("CourseYuyue.yuding"))+" ")])])]),i("div",{staticClass:"layoutBot"},[i("div",{staticClass:"infoCon"},[i("div",{staticClass:"titCon"},[i("div",{staticClass:"title"},[e._v(" "+e._s(e.$t("CourseYuyue.shifoujiangyixuanz"))+" "),i("el-tooltip",{staticClass:"item",attrs:{effect:"light",content:e.$t("jsdCourseEdit.ningkeyixuanzeyige"),placement:"right-start"}},[i("span",{staticClass:"tip"},[e._v("i")])])],1),i("el-switch",{attrs:{"active-color":"rgba(85, 184, 180, 1)","inactive-color":"#ddd"},model:{value:e.WeiKeBiaoSwich,callback:function(i){e.WeiKeBiaoSwich=i},expression:"WeiKeBiaoSwich"}})],1),i("div",{staticClass:"row row1"},[i("div",{staticClass:"left"},[e._v(" "+e._s(e.$t("jsdCourseEdit.kechengjishushijian"))+" ")]),i("div",{staticClass:"right"},[i("el-date-picker",{staticClass:"eldatepicker",attrs:{"value-format":"yyyy-MM-dd",type:"date",placeholder:e.$t("jsdCourseEdit.xuanzeriqi"),size:"small"},model:{value:e.courseEndTime,callback:function(i){e.courseEndTime=i},expression:"courseEndTime"}})],1)]),i("div",{staticClass:"jpBtnGreen btnConfirm",class:{disabled:!e.WeiKeBiaoSwich},on:{click:e.WeiKeBiaoConfirm}},[e._v(" "+e._s(e.$t("jsdCourseEdit.queren"))+" ")])])])])])],1)},a=[],l=(t(7658),t(8651)),r=t(1277),c=t(1206),o={name:"headercom",components:{HomeHeader:l.Z,CourseCalendar:r.Z},data(){return{navlist:[],dialogVisible:!1,cusModalConIsShow:!1,value:!0,tabList:[],selectKejieObj:{},selectRiliList:[],lapingKejieArr:[],detailObj:{},selectKejieTotalPrice:0,WeiKeBiaoSwich:!0,courseEndTime:"",youhuiPrice:""}},watch:{},created(){this.getHomeCourseDetail()},mounted(){},methods:{courseYuDing(){let e=this.$route.query.id;this.$u.vuex("vuex_CourseYuYue."+e,this.selectRiliList),this.$router.push({path:"/CourseDetail",query:{id:e}})},reciveSelectKejieFun(e){this.selectKejieObj=e},reciveSelectKeJieRiliList(e){if(!this.detailIsLoaded)return this.awaitComputeData=e,!1;this.selectRiliList=e,this.lapingKejieArr=e,this.calculateTotalPrice(e)},calculateTotalPrice(e){const i=this.detailObj.price||0;let t=0;for(const s of e){const e=s.date.split("-"),a=parseInt(e[0]),l=parseInt(e[1])-1,r=parseInt(e[2]),c=new Date(a,l,r,s.start_time.split(":")[0],s.start_time.split(":")[1]),o=new Date(a,l,r,s.end_time.split(":")[0],s.end_time.split(":")[1]),u=(o-c)/36e5,d=u*i;t+=d}this.selectKejieTotalPrice=t,this.youhuiPrice=this.selectKejieTotalPrice*this.baiFenBiConverNum(this.detailObj.serve_ratio)},baiFenBiConverNum(e){let i=e,t=i.replace("%",""),s=parseFloat(t),a=s/100;return a},getHomeCourseDetail(){let e=this.$route.query.id;(0,c.Yu6)({id:e}).then((e=>{if(200==e.code){let i=e.data;this.detailObj=i,this.detailIsLoaded=!0,this.awaitComputeData&&this.reciveSelectKeJieRiliList(this.awaitComputeData)}}))},WeiKeBiaoConfirm(){if(!this.courseEndTime)return this.$message.error(this.$t("jsdCourseEdit.riqixuanzebunengweikong")),!1;this.$refs.refCourseCalendar.gaizhouCouseWeiKebiaoFun(this.courseEndTime),this.$message.success(this.$t("jsdCourseEdit.qingfankan"))}}},u=o,d=t(1001),n=(0,d.Z)(u,s,a,!1,null,"c5a9e6ba",null),C=n.exports}}]);