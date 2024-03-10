"use strict";(self["webpackChunkframe"]=self["webpackChunkframe"]||[]).push([[2800],{92800:function(e,t,s){s.r(t),s.d(t,{default:function(){return Le}});var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container publish"},[t("home-header"),t("div",{directives:[{name:"loading",rawName:"v-loading",value:e.submitting,expression:"submitting"}],staticClass:"mianCon"},[e.courseInfo?t("div",{staticClass:"center"},[1===e.step?t("step-subject",{ref:"step1",attrs:{"course-info":e.courseInfo},on:{next:e.onNext}}):e._e(),2===e.step?t("step-location",{ref:"step2",attrs:{"course-info":e.courseInfo},on:{next:e.onNext,prev:function(t){e.step--}}}):e._e(),3===e.step?t("step-course-picture",{ref:"step3",attrs:{"course-info":e.courseInfo},on:{next:e.onNext,prev:function(t){e.step--}}}):e._e(),4===e.step?t("step-honor-picture",{ref:"step4",attrs:{"course-info":e.courseInfo},on:{next:e.onNext,prev:function(t){e.step--}}}):e._e(),5===e.step?t("step-course-name",{ref:"step5",attrs:{"course-info":e.courseInfo},on:{next:e.onNext,prev:function(t){e.step--}}}):e._e(),6===e.step?t("step-course-desc",{ref:"step6",attrs:{"course-info":e.courseInfo},on:{next:e.onNext,prev:function(t){e.step--}}}):e._e(),7===e.step?t("step-teaching-way",{ref:"step7",attrs:{"course-info":e.courseInfo},on:{next:e.onNext,prev:function(t){e.step--}}}):e._e(),8===e.step?t("step-course-type",{ref:"step8",attrs:{"course-info":e.courseInfo},on:{next:e.onNext,prev:function(t){e.step--}}}):e._e(),9===e.step?t("step-course-tags",{ref:"step9",attrs:{"course-info":e.courseInfo},on:{next:e.onNext,prev:function(t){e.step--}}}):e._e(),10===e.step?t("step-course-video",{ref:"step10",attrs:{"course-info":e.courseInfo},on:{next:e.onNext,prev:function(t){e.step--}}}):e._e(),11===e.step?t("step-student-number",{ref:"step11",attrs:{"course-info":e.courseInfo},on:{next:e.onNext,prev:function(t){e.step--}}}):e._e(),12===e.step?t("step-course-price",{ref:"step12",attrs:{"course-info":e.courseInfo},on:{next:e.onNext,prev:function(t){e.step--}}}):e._e()],1):e._e()]),e.showRedirectDialog?t("redirect-dialog",{attrs:{id:e.id},model:{value:e.showRedirectDialog,callback:function(t){e.showRedirectDialog=t},expression:"showRedirectDialog"}}):e._e(),t("HomeFooter")],1)},i=[],r=(s(57658),s(68892)),o=s(15936),n=s(51206),l=function(){var e=this,t=e._self._c;return t("div",{staticClass:"stepCon1"},[t("title-view",{attrs:{title:e.$t("jsdCoursePublish.xiaincongjiben"),"sub-title":e.$t("jsdCoursePublish.qingshuruxueke")}}),t("div",{staticClass:"stepMain"},[t("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"form",attrs:{model:e.formData,rules:e.rules}},[t("el-form-item",{attrs:{prop:"subject_name"}},[t("el-select",{staticClass:"xuekeSelect",attrs:{filterable:"","allow-create":"","no-data-text":"",placeholder:e.$t("tip.please_enter")},model:{value:e.formData.subject_name,callback:function(t){e.$set(e.formData,"subject_name",t)},expression:"formData.subject_name"}},e._l(e.subjectOptions,(function(e){return t("el-option",{key:e.id,attrs:{label:e.name_arr,value:e.name_arr}})})),1)],1)],1)],1),t("buttons-view",{attrs:{"show-prev":!1,disabled:e.loading},on:{next:e.next}})],1)},u=[],c=s(40662),m=s(16016),d={name:"StepSubject",components:{ButtonsView:m.Z,TitleView:c.Z},props:{courseInfo:{type:Object,required:!0,default:()=>({})}},data(){return{formData:{subject_name:""},rules:{subject_name:[{required:!0,message:this.$t("tip.required"),trigger:"blur"}]},subjectOptions:[],loading:!1}},mounted(){this.getSubjectOptions()},methods:{async getSubjectOptions(){this.loading=!0;try{const e=await(0,n.Lfi)();200===e.code&&(this.subjectOptions=e.data,this.formData.subject_name=this.courseInfo.subject_name?.toString()||"")}catch(e){console.error(e)}this.loading=!1},next(e){this.$refs.form.validate((t=>{t&&this.$emit("next",this.formData,e)}))}}},p=d,f=s(1001),h=(0,f.Z)(p,l,u,!1,null,"49ea444e",null),g=h.exports,b=function(){var e=this,t=e._self._c;return t("div",{staticClass:"stepCon2"},[t("title-view",{attrs:{title:e.$t("jsdCoursePublish.ningdejiaoshijiangweiyu"),"sub-title":""}}),t("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"stepMain"},[t("el-form",{ref:"form",attrs:{model:e.formData,rules:e.rules}},[t("el-form-item",{attrs:{prop:"area"}},[t("el-input",{staticClass:"addInp",attrs:{maxlength:200,type:"textarea",rows:"3","show-word-limit":"",placeholder:e.$t("LoginAndRegister.region_tips")},model:{value:e.formData.area,callback:function(t){e.$set(e.formData,"area",t)},expression:"formData.area"}})],1),t("el-form-item",{attrs:{prop:"postal_code"}},[t("el-input",{staticClass:"addInp",attrs:{maxlength:10,placeholder:e.$t("LoginAndRegister.postcode")},model:{value:e.formData.postal_code,callback:function(t){e.$set(e.formData,"postal_code",t)},expression:"formData.postal_code"}})],1)],1)],1),t("buttons-view",{attrs:{disabled:e.loading},on:{prev:function(t){return e.$emit("prev")},next:e.next}})],1)},_=[],v={name:"StepLocation",components:{ButtonsView:m.Z,TitleView:c.Z},props:{courseInfo:{type:Object,required:!0,default:()=>({})}},data(){return{formData:{area:"",postal_code:""},rules:{area:[{required:!0,message:this.$t("tip.required"),trigger:["change","blur"]}],postal_code:[{required:!0,message:this.$t("tip.required"),trigger:["change","blur"]}]},countryOptions:[],loading:!1}},mounted(){this.formData.area=this.courseInfo?.area||"",this.formData.postal_code=this.courseInfo?.postal_code||""},methods:{async getAreaList(){this.loading=!0;try{const e=await(0,n.TVX)();200===e.code&&(this.countryOptions=this.dataConverter(e.data))}catch(e){console.error(e)}this.loading=!1},dataConverter(e){for(let t of e){t.children=t.city;for(let e of t.children)e.children=e.area}return e},prev(){this.$emit("prev")},next(e){this.$refs.form.validate((t=>{if(t){let t={...this.formData};this.$emit("next",t,e)}}))}}},x=v,C=(0,f.Z)(x,b,_,!1,null,"46622e7e",null),$=C.exports,D=function(){var e=this,t=e._self._c;return t("div",{staticClass:"stepCon3"},[t("title-view",{attrs:{title:e.$t("jsdCoursePublish.weiningdekechengtianjiatupian"),"sub-title":e.$t("jsdCoursePublish.nixuyaoxiantigongzhaopian",[this.at_least])}}),t("el-form",{ref:"form",attrs:{model:e.formData,rules:e.rules}},[t("el-form-item",{attrs:{prop:"course_images"}},[t("div",{staticClass:"stepMain"},[t("CustomElUpload",{ref:"customElUpload1",attrs:{template_type:"picture-card",upload_tip_text:e.$t("tip.size_limit"),files_limit:10,add_param_data:"",autoUpload:!0},on:{isUploading:t=>{e.uploading=t}},model:{value:e.formData.course_images,callback:function(t){e.$set(e.formData,"course_images",t)},expression:"formData.course_images"}})],1)])],1),t("buttons-view",{attrs:{disabled:e.uploading},on:{prev:function(t){return e.$emit("prev")},next:e.next}})],1)},w=[],j={name:"StepCoursePicture",components:{ButtonsView:m.Z,TitleView:c.Z,CustomElUpload:o.Z},props:{courseInfo:{type:Object,required:!0,default:()=>({})}},data(){const e=5;let t=(t,s,a)=>{console.log("value",s),!s||s.split(",").length<e?a(new Error):a()};return{formData:{course_images:""},rules:{course_images:[{validator:t,message:this.$t("tip.at_least_upload_image",[e]),trigger:["change"]}]},uploading:!1,at_least:e}},mounted(){this.formData.course_images=this.courseInfo?.course_images||""},methods:{next(e){this.$refs.form.validate((t=>{t&&this.$emit("next",this.formData,e)}))}}},y=j,k=(0,f.Z)(y,D,w,!1,null,"674ba8df",null),I=k.exports,q=function(){var e=this,t=e._self._c;return t("div",{staticClass:"stepCon4"},[t("title-view",{attrs:{title:e.$t("jsdCoursePublish.huojianghuorenherongyu"),"sub-title":e.$t("jsdCoursePublish.ningyekeyixuanzebushangc")}}),t("el-form",{ref:"form",attrs:{model:e.formData}},[t("el-form-item",{attrs:{prop:"other_images"}},[t("div",{staticClass:"stepMain"},[t("CustomElUpload",{ref:"customElUpload2",attrs:{template_type:"picture-card",upload_tip_text:e.$t("tip.size_limit"),files_limit:10,add_param_data:"",autoUpload:!0},on:{isUploading:t=>e.uploading=t},model:{value:e.formData.other_images,callback:function(t){e.$set(e.formData,"other_images",t)},expression:"formData.other_images"}})],1)])],1),t("buttons-view",{attrs:{disabled:e.uploading},on:{prev:function(t){return e.$emit("prev")},next:e.next}})],1)},P=[],S={name:"StepHonorPicture",components:{ButtonsView:m.Z,TitleView:c.Z,CustomElUpload:o.Z},props:{courseInfo:{type:Object,required:!0,default:()=>({})}},data(){return{formData:{other_images:this.courseInfo?.other_images||""},uploading:!1}},methods:{next(e){this.$refs.form.validate((t=>{t&&this.$emit("next",this.formData,e)}))}}},Z=S,V=(0,f.Z)(Z,q,P,!1,null,"230cde28",null),N=V.exports,T=function(){var e=this,t=e._self._c;return t("div",{staticClass:"stepCon5"},[t("title-view",{attrs:{title:e.$t("jsdCoursePublish.xianzaiqinggeinidekecheng"),"sub-title":e.$t("jsdCoursePublish.duanmingxiaoguo")}}),t("div",{staticClass:"stepMain"},[t("el-form",{ref:"ruleForm5",attrs:{model:e.formData,rules:e.rules}},[t("el-form-item",{attrs:{prop:"course_name",label:""}},[t("el-input",{staticClass:"inp",attrs:{type:"text",maxlength:50,"show-word-limit":"",placeholder:e.$t("jsdCoursePublish.qingshuruningdekechengmc")},model:{value:e.formData.course_name,callback:function(t){e.$set(e.formData,"course_name",t)},expression:"formData.course_name"}})],1),t("el-form-item",{attrs:{prop:"shortname"}},[t("el-input",{staticClass:"inp",attrs:{type:"text",maxlength:50,"show-word-limit":"",placeholder:e.$t("jsdCoursePublish.jiandanmingcheng")},model:{value:e.formData.shortname,callback:function(t){e.$set(e.formData,"shortname",t)},expression:"formData.shortname"}})],1)],1)],1),t("buttons-view",{on:{prev:function(t){return e.$emit("prev")},next:e.next}})],1)},O=[],z={name:"StepCourseName",components:{ButtonsView:m.Z,TitleView:c.Z},props:{courseInfo:{type:Object,required:!0,default:()=>({})}},data(){return{formData:{course_name:this.courseInfo?.course_name||"",shortname:this.courseInfo?.shortname||""},rules:{course_name:[{required:!0,message:this.$t("tip.required"),trigger:["change","blur"]}]}}},methods:{next(e){this.$refs.ruleForm5.validate((t=>{t&&this.$emit("next",this.formData,e)}))}}},R=z,B=(0,f.Z)(R,T,O,!1,null,"e6f1cd52",null),L=B.exports,M=function(){var e=this,t=e._self._c;return t("div",{staticClass:"stepCon6"},[t("title-view",{attrs:{title:e.$t("jsdCoursePublish.changjiankechengmiaoshu"),"sub-title":e.$t("jsdCoursePublish.zhanshiningdekechengdute")}}),t("div",{staticClass:"stepMain"},[t("el-form",{ref:"form",attrs:{model:e.formData,rules:e.rules}},[t("el-form-item",{attrs:{prop:"course_describe"}},[t("el-input",{staticClass:"textarea",attrs:{type:"textarea",placeholder:e.$t("jsdCoursePublish.qingshuruningdekechengms"),"show-word-limit":""},model:{value:e.formData.course_describe,callback:function(t){e.$set(e.formData,"course_describe",t)},expression:"formData.course_describe"}})],1)],1)],1),t("buttons-view",{on:{prev:function(t){return e.$emit("prev")},next:e.next}})],1)},U=[],E={name:"StepCourseDesc",components:{ButtonsView:m.Z,TitleView:c.Z},props:{courseInfo:{type:Object,required:!0,default:()=>({})}},data(){return{formData:{course_describe:this.courseInfo.course_describe||""},rules:{course_describe:[{required:!0,message:this.$t("tip.required"),trigger:["change","blur"]}]}}},methods:{next(e){this.$refs.form.validate((t=>{t&&this.$emit("next",this.formData,e)}))}}},F=E,H=(0,f.Z)(F,M,U,!1,null,"8c9f1dc8",null),X=H.exports,A=function(){var e=this,t=e._self._c;return t("div",{staticClass:"stepCon7"},[t("title-view",{attrs:{title:e.$t("jsdCoursePublish.xuanzkechengdeshangk"),"sub-title":e.$t("jsdCoursePublish.xuanzeningdeshangke")}}),t("div",{staticClass:"stepMain"},[t("el-form",{ref:"form",attrs:{model:e.formData,rules:e.rules}},[t("el-form-item",{attrs:{prop:"course_way"}},[t("div",{staticClass:"moshiCon"},[t("el-checkbox-group",{model:{value:e.formData.course_way,callback:function(t){e.$set(e.formData,"course_way",t)},expression:"formData.course_way"}},e._l(e.wayList,(function(s,a){return t("div",{key:s.id,staticClass:"item"},[t("el-checkbox",{staticClass:"leftRadio",attrs:{label:s.value,name:"shangkeFangshi"}}),t("div",{staticClass:"right"},[t("div",{staticClass:"title"},[e._v(" "+e._s(s.moshiName)+" ")]),t("div",{staticClass:"desc"},[e._v(" "+e._s(s.desc)+" ")])])],1)})),0)],1)])],1)],1),t("buttons-view",{on:{prev:function(t){return e.$emit("prev")},next:e.next}})],1)},J=[],W={name:"StepTeachingWay",components:{ButtonsView:m.Z,TitleView:c.Z},props:{courseInfo:{type:Object,required:!0,default:()=>({})}},data(){return{formData:{course_way:this.courseInfo.course_way?.split(",")||[]},rules:{course_way:[{required:!0,message:this.$t("tip.required"),trigger:["change","blur"]}]}}},computed:{wayList(){return[{id:1,moshiName:this.$t("jsdCoursePublish.mianduimianshouke"),desc:this.$t("jsdCoursePublish.gongxiangjiaoshihuoxueshengjia"),value:"1",select:!1},{id:2,moshiName:this.$t("jsdCoursePublish.wangluoshipinshouke"),desc:this.$t("jsdCoursePublish.shiyonggerenshipinruanjian"),value:"2",select:!1}]}},methods:{next(e){this.$refs.form.validate((t=>{if(t){let t={course_way:this.formData.course_way.join(",")};this.$emit("next",t,e)}}))}}},G=W,K=(0,f.Z)(G,A,J,!1,null,"6fdabe7c",null),Q=K.exports,Y=function(){var e=this,t=e._self._c;return t("div",{staticClass:"stepCon8"},[t("title-view",{attrs:{title:e.$t("jsdCoursePublish.xuanzeshangkeleixing"),"sub-title":e.$t("jsdCoursePublish.zhanshiningdekechengdute")}}),t("div",{staticClass:"stepMain"},[t("el-form",{ref:"form",attrs:{model:e.formData,rules:e.rules}},[t("el-form-item",{attrs:{prop:"course_type",label:""}},[t("div",{staticClass:"moshiCon"},e._l(e.typeList,(function(s,a){return t("div",{key:s.id,staticClass:"item"},[t("el-radio",{staticClass:"leftRadio",attrs:{label:s.value},model:{value:e.formData.course_type,callback:function(t){e.$set(e.formData,"course_type",t)},expression:"formData.course_type"}}),t("div",{staticClass:"right"},[t("div",{staticClass:"title"},[e._v(" "+e._s(s.name)+" ")]),t("div",{staticClass:"desc"},[e._v(" "+e._s(s.desc)+" ")])])],1)})),0)])],1)],1),t("buttons-view",{on:{prev:function(t){return e.$emit("prev")},next:e.next}})],1)},ee=[],te={name:"StepCourseType",components:{ButtonsView:m.Z,TitleView:c.Z},props:{courseInfo:{type:Object,required:!0,default:()=>({})}},data(){return{formData:{course_type:this.courseInfo.course_type?.toString()||""},rules:{course_type:[{required:!0,message:this.$t("tip.required"),trigger:["change","blur"]}]}}},computed:{typeList(){return[{id:1,name:this.$t("jsdCoursePublish.k12xingquke"),desc:this.$t("jsdCoursePublish.shibasuiyixiaxuedexuexiao"),value:"1"},{id:2,name:this.$t("jsdCoursePublish.zuanqianjinengke"),desc:this.$t("jsdCoursePublish.chengnianrendejinenghexingquaihao"),value:"2"}]}},methods:{next(e){this.$refs.form.validate((t=>{t&&this.$emit("next",this.formData,e)}))}}},se=te,ae=(0,f.Z)(se,Y,ee,!1,null,"c18e599c",null),ie=ae.exports,re=function(){var e=this,t=e._self._c;return t("div",{staticClass:"stepCon9"},[t("title-view",{attrs:{title:e.$t("jsdCoursePublish.kechengbiaoqian"),"sub-title":e.$t("jsdCoursePublish.xuanzeshiheningkechengde")}}),t("div",{staticClass:"stepMain"},[t("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"form",attrs:{model:e.formData,rules:e.rules}},[t("el-form-item",{attrs:{prop:"tag1",label:""}},[t("el-select",{staticClass:"bqSelect",attrs:{filterable:"","allow-create":"",placeholder:e.$t("jsdClassroomPublish.qingxuanzebiaoqian1")},model:{value:e.formData.tag1,callback:function(t){e.$set(e.formData,"tag1",t)},expression:"formData.tag1"}},e._l(e.courseTagsOptions,(function(e){return t("el-option",{key:e.id,attrs:{label:e.name_arr,value:e.name_arr}})})),1)],1),t("el-form-item",{attrs:{prop:"tag2"}},[t("el-select",{staticClass:"bqSelect",attrs:{filterable:"","allow-create":"",placeholder:e.$t("jsdClassroomPublish.qingxuanzebiaoqian2")},model:{value:e.formData.tag2,callback:function(t){e.$set(e.formData,"tag2",t)},expression:"formData.tag2"}},e._l(e.courseTagsOptions,(function(e){return t("el-option",{key:e.id,attrs:{label:e.name_arr,value:e.name_arr}})})),1)],1),t("el-form-item",{attrs:{prop:"tag3",label:""}},[t("el-select",{staticClass:"bqSelect",attrs:{filterable:"","allow-create":"",placeholder:e.$t("jsdClassroomPublish.qingxuanzebiaoqian3")},model:{value:e.formData.tag3,callback:function(t){e.$set(e.formData,"tag3",t)},expression:"formData.tag3"}},e._l(e.courseTagsOptions,(function(e){return t("el-option",{key:e.id,attrs:{label:e.name_arr,value:e.name_arr}})})),1)],1)],1)],1),t("buttons-view",{attrs:{disabled:e.loading},on:{prev:function(t){return e.$emit("prev")},next:e.next}})],1)},oe=[],ne={name:"StepCourseTags",components:{ButtonsView:m.Z,TitleView:c.Z},props:{courseInfo:{type:Object,required:!0,default:()=>({})}},data(){return{formData:{tag1:"",tag2:"",tag3:""},rules:{tag1:[{required:!0,message:this.$t("tip.required"),trigger:["change","blur"]}]},courseTagsOptions:[],loading:!1}},mounted(){this.getCourseTagsList()},methods:{next(e){this.$refs.form.validate((t=>{if(t){let t=[this.formData.tag1,this.formData.tag2,this.formData.tag3].join(",");this.$emit("next",{label_names:t},e)}}))},async getCourseTagsList(){this.loading=!0;try{const e=await(0,n.Iul)();if(200===e.code){this.courseTagsOptions=e.data;let t=this.courseInfo.label_names?.split(",")||[];this.formData.tag1=t[0],this.formData.tag2=t[1],this.formData.tag3=t[2]}}catch(e){console.error(e)}this.loading=!1}}},le=ne,ue=(0,f.Z)(le,re,oe,!1,null,"29ab89e8",null),ce=ue.exports,me=function(){var e=this,t=e._self._c;return t("div",{staticClass:"stepCon10"},[t("title-view",{attrs:{title:e.$t("jsdCoursePublish.course_video"),"sub-title":e.$t("jsdCoursePublish.paste_youtube_code")}}),t("div",{staticClass:"stepMain"},[t("el-form",{ref:"form",attrs:{model:e.formData}},[t("el-form-item",{attrs:{prop:"video"}},[t("el-input",{staticClass:"textarea",attrs:{type:"textarea",maxlength:200,"show-word-limit":"",rows:3,placeholder:"https://www.youtube.com/watch?v=xxXXxxXXXXX"},model:{value:e.formData.video,callback:function(t){e.$set(e.formData,"video",t)},expression:"formData.video"}})],1)],1)],1),t("buttons-view",{on:{prev:function(t){return e.$emit("prev")},next:e.next}})],1)},de=[],pe={name:"StepCourseVideo",components:{ButtonsView:m.Z,TitleView:c.Z},props:{courseInfo:{type:Object,required:!0,default:()=>({})}},data(){return{formData:{video:this.courseInfo.video||""}}},methods:{next(e){this.$emit("next",this.formData,e)}}},fe=pe,he=(0,f.Z)(fe,me,de,!1,null,"5cc056db",null),ge=he.exports,be=function(){var e=this,t=e._self._c;return t("div",{staticClass:"stepCon11"},[t("title-view",{attrs:{title:e.$t("jsdCoursePublish.xianzaiqingshezhijiage"),"sub-title":e.$t("tip.commission_tip",[this.commission])}}),t("div",{staticClass:"stepMain"},[t("div",{staticClass:"PriceSetupCon"},[t("div",{staticClass:"top"},[t("div",{staticClass:"left",on:{click:e.minus}},[t("i",{staticClass:"icon fa fa-minus"})]),t("el-form",{ref:"form",attrs:{model:e.formData,rules:e.rules}},[t("el-form-item",{staticClass:"eleformItem",attrs:{prop:"price",label:""}},[t("div",{staticClass:"midCon"},[t("el-input",{staticClass:"inp",attrs:{type:"number"},model:{value:e.formData.price,callback:function(t){e.$set(e.formData,"price",t)},expression:"formData.price"}},[t("template",{slot:"prepend"},[e._v("$")])],2)],1)])],1),t("div",{staticClass:"right",on:{click:e.plus}},[t("i",{staticClass:"icon fa fa-plus"})])],1)])]),t("buttons-view",{attrs:{"next-text":e.$t("tip.completed")},on:{prev:function(t){return e.$emit("prev")},next:e.next}})],1)},_e=[],ve={name:"StepCoursePrice",components:{ButtonsView:m.Z,TitleView:c.Z},props:{courseInfo:{type:Object,required:!0,default:()=>({})}},data(){return{formData:{price:this.courseInfo.price?parseFloat(this.courseInfo.price):""},rules:{price:[{required:!0,message:this.$t("tip.required"),trigger:["change","blur"]}]},commission:10}},watch:{"formData.price"(e){e.length>16?this.$nextTick((()=>{this.formData.price=this.formData.price.slice(0,16)})):e<0&&this.$nextTick((()=>{this.formData.price=0}))}},methods:{next(e){this.$refs.form.validate((t=>{t&&this.$emit("next",this.formData,e)}))},minus(){this.formData.price--},plus(){this.formData.price++}}},xe=ve,Ce=(0,f.Z)(xe,be,_e,!1,null,"62d06dd2",null),$e=Ce.exports,De=s(18031),we=function(){var e=this,t=e._self._c;return t("div",{staticClass:"stepCon5"},[t("title-view",{attrs:{title:e.$t("jsdCoursePublish.setup_student_num"),"sub-title":""}}),t("div",{staticClass:"stepMain"},[t("el-form",{ref:"ruleForm5",attrs:{model:e.formData,rules:e.rules}},[t("el-form-item",{attrs:{prop:"book_num",label:""}},[t("el-input",{staticClass:"inp",attrs:{type:"text",maxlength:10,placeholder:e.$t("jsdCoursePublish.enter_student_num")},model:{value:e.formData.book_num,callback:function(t){e.$set(e.formData,"book_num",t)},expression:"formData.book_num"}})],1),t("el-form-item",{attrs:{prop:"book_min_num"}},[t("el-input",{staticClass:"inp",attrs:{type:"text",maxlength:10,placeholder:e.$t("jsdCoursePublish.enter_student_min_num")},model:{value:e.formData.book_min_num,callback:function(t){e.$set(e.formData,"book_min_num",t)},expression:"formData.book_min_num"}})],1)],1)],1),t("buttons-view",{on:{prev:function(t){return e.$emit("prev")},next:e.next}})],1)},je=[],ye={name:"StepStudentNumber",components:{ButtonsView:m.Z,TitleView:c.Z},props:{courseInfo:{type:Object,required:!0,default:()=>({})}},data(){return{formData:{book_num:this.courseInfo?.book_num||"",book_min_num:this.courseInfo?.book_min_num||""},rules:{book_num:[{required:!0,message:this.$t("tip.required"),trigger:["change","blur"]},{pattern:/^[1-9]\d*$/,message:this.$t("tip.format_incorrect"),trigger:"blur"}],book_min_num:[{required:!0,message:this.$t("tip.required"),trigger:["change","blur"]},{pattern:/^[1-9]\d*$/,message:this.$t("tip.format_incorrect"),trigger:"blur"}]}}},methods:{next(e){this.$refs.ruleForm5.validate((t=>{t&&this.$emit("next",this.formData,e)}))}}},ke=ye,Ie=(0,f.Z)(ke,we,je,!1,null,"28681f2f",null),qe=Ie.exports,Pe=function(){var e=this,t=e._self._c;return t("el-dialog",{staticClass:"dialog",attrs:{title:e.$t("jsdCoursePublish.creation_complete"),visible:e.dialogVisible,width:"400px","show-close":!1,"close-on-press-escape":!1,"close-on-click-modal":!1,center:""},on:{"update:visible":function(t){e.dialogVisible=t},close:()=>e.$emit("input",!1)}},[t("div",{staticClass:"container"},[t("ul",{staticClass:"content"},[t("li",{on:{click:function(t){e.$router.replace("/course/publish?ts="+Date.now())}}},[e._v(e._s(e.$t("jsdCoursePublish.continue_to_create"))),t("i",{staticClass:"el-icon-arrow-right"})]),t("li",{on:{click:function(t){return e.$router.replace("/jsdCourseEdit?id="+e.id)}}},[e._v(e._s(e.$t("jsdCoursePublish.setup_time"))),t("i",{staticClass:"el-icon-arrow-right"})]),t("li",{on:{click:function(t){return e.$router.back()}}},[e._v(e._s(e.$t("jsdCoursePublish.back_to_list"))),t("i",{staticClass:"el-icon-arrow-right"})])])])])},Se=[],Ze={name:"RedirectDialog",props:["value","id"],data(){return{dialogVisible:!1}},created(){this.dialogVisible=this.value},watch:{value(e){this.dialogVisible=e}}},Ve=Ze,Ne=(0,f.Z)(Ve,Pe,Se,!1,null,"cb0bca9c",null),Te=Ne.exports,Oe=s(70794),ze={name:"CoursePublish",components:{RedirectDialog:Te,StepStudentNumber:qe,HomeFooter:De.Z,StepCoursePrice:$e,StepCourseVideo:ge,StepCourseTags:ce,StepCourseType:ie,StepTeachingWay:Q,StepCourseDesc:X,StepCourseName:L,StepHonorPicture:N,StepCoursePicture:I,StepLocation:$,StepSubject:g,HomeHeader:r.Z,CustomElUpload:o.Z},data(){return{pageDetail:null,step:1,totalStep:12,courseInfo:null,id:"",submitting:!1,currentComponentRef:null,showRedirectDialog:!1,draftName:""}},mounted(){this.id=this.$route.params.id,this.draftName=this.$route.query.draft,this.init()},methods:{init(){if(this.id)this.getCourseInfo();else if(this.courseInfo={},this.draftName){let e=localStorage.getItem("draft"),t=e?JSON.parse(e):[],s=t.find((e=>e.name==this.draftName));s&&(this.step=s.step,this.courseInfo=s.info)}},onNext(e,t){this.courseInfo={...this.courseInfo,...e},console.log(this.courseInfo),t?this.saveToDraft():this.step<this.totalStep?this.step++:this.onComplete()},async onComplete(){this.submitting=!0;try{this.id?await this.editCourse():this.id=await this.createCourse(),this.showRedirectDialog=!0}catch(e){console.error(e)}this.submitting=!1},saveToDraft(){let e=localStorage.getItem("draft"),t=e?JSON.parse(e):[];t.push({step:this.step,progress:(0,Oe.Z)(this.step).div(this.totalStep).times(100).toFixed(0),name:Date.now(),info:this.courseInfo}),localStorage.setItem("draft",JSON.stringify(t)),this.$router.back()},async getCourseInfo(){const e=this.$loading();try{let e=await(0,n.RnH)({id:this.id});if(e&&200===e.code){let t=e.data,s={};s.subject_name=t.subject_text,s.area=t.area,s.address=t.address,s.course_images=t.course_images,s.other_images=t.other_images,s.course_name=t.name_arr,s.shortname=t.shortname_arr,s.course_describe=t.describe_text,s.course_way=t.course_way,s.course_type=t.course_type,s.label_names=t.course_label_text?.join(",")||"",s.video=t.video,s.price=t.price,this.courseInfo=s}}catch(t){console.error(t)}e.close()},async createCourse(){const e=await(0,n.bq0)(this.courseInfo);return 200===e.code?(this.$message.success(e.msg),e.data.course_id):Promise.reject(e.code)},async editCourse(){const e=await(0,n.Hfm)({...this.courseInfo,id:this.id});return 200===e.code?(this.$message.success(e.msg),this.id):Promise.reject(e.code)}}},Re=ze,Be=(0,f.Z)(Re,a,i,!1,null,"68852136",null),Le=Be.exports}}]);