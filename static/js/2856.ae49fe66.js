"use strict";(self["webpackChunkframe"]=self["webpackChunkframe"]||[]).push([[2856],{2856:function(e,t,s){s.r(t),s.d(t,{default:function(){return ye}});var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("home-header"),t("div",{staticClass:"mianCon"},[e.courseInfo?t("div",{staticClass:"center"},[1===e.step?t("step-subject",{ref:"step1",attrs:{"course-info":e.courseInfo},on:{next:e.onNext}}):e._e(),2===e.step?t("step-location",{ref:"step2",attrs:{"course-info":e.courseInfo},on:{next:e.onNext,prev:function(t){e.step--}}}):e._e(),3===e.step?t("step-course-picture",{ref:"step3",attrs:{"course-info":e.courseInfo},on:{next:e.onNext,prev:function(t){e.step--}}}):e._e(),4===e.step?t("step-honor-picture",{ref:"step4",attrs:{"course-info":e.courseInfo},on:{next:e.onNext,prev:function(t){e.step--}}}):e._e(),5===e.step?t("step-course-name",{ref:"step5",attrs:{"course-info":e.courseInfo},on:{next:e.onNext,prev:function(t){e.step--}}}):e._e(),6===e.step?t("step-course-desc",{ref:"step6",attrs:{"course-info":e.courseInfo},on:{next:e.onNext,prev:function(t){e.step--}}}):e._e(),7===e.step?t("step-teaching-way",{ref:"step7",attrs:{"course-info":e.courseInfo},on:{next:e.onNext,prev:function(t){e.step--}}}):e._e(),8===e.step?t("step-course-type",{ref:"step8",attrs:{"course-info":e.courseInfo},on:{next:e.onNext,prev:function(t){e.step--}}}):e._e(),9===e.step?t("step-course-tags",{ref:"step9",attrs:{"course-info":e.courseInfo},on:{next:e.onNext,prev:function(t){e.step--}}}):e._e(),10===e.step?t("step-course-video",{ref:"step10",attrs:{"course-info":e.courseInfo},on:{next:e.onNext,prev:function(t){e.step--}}}):e._e(),11===e.step?t("step-course-price",{ref:"step11",attrs:{"course-info":e.courseInfo},on:{next:e.onNext,prev:function(t){e.step--}}}):e._e()],1):e._e()])],1)},i=[],r=(s(7658),s(690)),o=s(1537),n=s(1206),u=function(){var e=this,t=e._self._c;return t("div",{staticClass:"stepCon1"},[t("title-view",{attrs:{title:e.$t("jsdCoursePublish.xiaincongjiben"),"sub-title":e.$t("jsdCoursePublish.qingshuruxueke")}}),t("div",{staticClass:"stepMain"},[t("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"form",attrs:{model:e.formData,rules:e.rules}},[t("el-form-item",{attrs:{prop:"subject_id"}},[t("el-select",{staticClass:"xuekeSelect",attrs:{"no-data-text":""},model:{value:e.formData.subject_id,callback:function(t){e.$set(e.formData,"subject_id",t)},expression:"formData.subject_id"}},e._l(e.subjectOptions,(function(e){return t("el-option",{key:e.id,attrs:{label:e.name_arr,value:String(e.id)}})})),1)],1)],1)],1),t("buttons-view",{attrs:{"show-prev":!1,disabled:e.loading},on:{next:e.next}})],1)},l=[],c=s(662),d=s(1840),m={name:"StepSubject",components:{ButtonsView:d.Z,TitleView:c.Z},props:{courseInfo:{type:Object,required:!0,default:()=>({})}},data(){return{formData:{subject_id:""},rules:{subject_id:[{required:!0,message:this.$t("jsdCoursePublish.xuekebunengweikong"),trigger:"change"}]},subjectOptions:[],loading:!1}},mounted(){this.getSubjectOptions()},methods:{async getSubjectOptions(){this.loading=!0;try{const e=await(0,n.Lfi)();200===e.code&&(this.subjectOptions=e.data,this.formData.subject_id=this.courseInfo.subject_id?.toString()||"")}catch(e){console.error(e)}this.loading=!1},next(e){this.$refs.form.validate((t=>{t&&this.$emit("next",this.formData,e)}))}}},p=m,f=s(1001),h=(0,f.Z)(p,u,l,!1,null,"e13a8994",null),g=h.exports,b=function(){var e=this,t=e._self._c;return t("div",{staticClass:"stepCon2"},[t("title-view",{attrs:{title:e.$t("jsdCoursePublish.ningdejiaoshijiangweiyu"),"sub-title":""}}),t("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"stepMain"},[t("el-form",{ref:"form",attrs:{model:e.formData,rules:e.rules}},[t("el-form-item",{attrs:{prop:"area"}},[t("div",{staticClass:"topSelectCon"},[t("div",{staticClass:"item"},[t("div",{staticClass:"smallTit"},[e._v(" "+e._s(e.$t("jsdCoursePublish.diqu"))+" ")]),t("el-cascader",{staticClass:"countrySelect",attrs:{options:e.countryOptions,placeholder:e.$t("LoginAndRegister.guojiahuodiqu"),props:{value:"name_arr",label:"name_arr",children:"children",expandTrigger:"hover"}},model:{value:e.formData.area,callback:function(t){e.$set(e.formData,"area",t)},expression:"formData.area"}})],1)])])],1)],1),t("buttons-view",{attrs:{disabled:e.loading},on:{prev:function(t){return e.$emit("prev")},next:e.next}})],1)},v=[],C={name:"StepLocation",components:{ButtonsView:d.Z,TitleView:c.Z},props:{courseInfo:{type:Object,required:!0,default:()=>({})}},data(){return{formData:{area:[],address:""},rules:{area:[{required:!0,message:this.$t("renzhengTeacher.bunengweikong"),trigger:["change","blur"]}]},countryOptions:[],loading:!1}},mounted(){this.formData.area=this.courseInfo?.area?.split(",")||[],this.getAreaList()},methods:{async getAreaList(){this.loading=!0;try{const e=await(0,n.TVX)();200===e.code&&(this.countryOptions=this.dataConverter(e.data))}catch(e){console.error(e)}this.loading=!1},dataConverter(e){for(let t of e){t.children=t.city;for(let e of t.children)e.children=e.area}return e},prev(){this.$emit("prev")},next(e){this.$refs.form.validate((t=>{if(t){let t={...this.formData,area:this.formData.area.join(",")};this.$emit("next",t,e)}}))}}},_=C,x=(0,f.Z)(_,b,v,!1,null,"443cb567",null),$=x.exports,w=function(){var e=this,t=e._self._c;return t("div",{staticClass:"stepCon3"},[t("title-view",{attrs:{title:e.$t("jsdCoursePublish.weiningdekechengtianjiatupian"),"sub-title":e.$t("jsdCoursePublish.nixuyaoxiantigongzhaopian")}}),t("el-form",{ref:"form",attrs:{model:e.formData,rules:e.rules}},[t("el-form-item",{attrs:{prop:"course_images"}},[t("div",{staticClass:"stepMain"},[t("CustomElUpload",{ref:"customElUpload1",attrs:{template_type:"picture-card",upload_tip_text:e.$t("tip.size_limit"),files_limit:10,add_param_data:"",autoUpload:!0},on:{isUploading:t=>{e.uploading=t}},model:{value:e.formData.course_images,callback:function(t){e.$set(e.formData,"course_images",t)},expression:"formData.course_images"}})],1)])],1),t("buttons-view",{attrs:{disabled:e.uploading},on:{prev:function(t){return e.$emit("prev")},next:e.next}})],1)},j=[],D={name:"StepCoursePicture",components:{ButtonsView:d.Z,TitleView:c.Z,CustomElUpload:o.Z},props:{courseInfo:{type:Object,required:!0,default:()=>({})}},data(){return{formData:{course_images:""},rules:{course_images:[{required:!0,message:this.$t("jsdCoursePublish.kechengtupianbunengweikong"),trigger:["change","blur"]}]},uploading:!1}},mounted(){this.formData.course_images=this.courseInfo?.course_images||""},methods:{next(e){this.$refs.form.validate((t=>{t&&this.$emit("next",this.formData,e)}))}}},y=D,k=(0,f.Z)(y,w,j,!1,null,"125ca19b",null),P=k.exports,I=function(){var e=this,t=e._self._c;return t("div",{staticClass:"stepCon4"},[t("title-view",{attrs:{title:e.$t("jsdCoursePublish.huojianghuorenherongyu"),"sub-title":e.$t("jsdCoursePublish.ningyekeyixuanzebushangc")}}),t("el-form",{ref:"form",attrs:{model:e.formData}},[t("el-form-item",{attrs:{prop:"other_images"}},[t("div",{staticClass:"stepMain"},[t("CustomElUpload",{ref:"customElUpload2",attrs:{template_type:"picture-card",upload_tip_text:e.$t("tip.size_limit"),files_limit:10,add_param_data:"",autoUpload:!0},on:{isUploading:t=>e.uploading=t},model:{value:e.formData.other_images,callback:function(t){e.$set(e.formData,"other_images",t)},expression:"formData.other_images"}})],1)])],1),t("buttons-view",{attrs:{disabled:e.uploading},on:{prev:function(t){return e.$emit("prev")},next:e.next}})],1)},q=[],S={name:"StepHonorPicture",components:{ButtonsView:d.Z,TitleView:c.Z,CustomElUpload:o.Z},props:{courseInfo:{type:Object,required:!0,default:()=>({})}},data(){return{formData:{other_images:this.courseInfo?.other_images||""},uploading:!1}},methods:{next(e){this.$refs.form.validate((t=>{t&&this.$emit("next",this.formData,e)}))}}},Z=S,T=(0,f.Z)(Z,I,q,!1,null,"230cde28",null),V=T.exports,O=function(){var e=this,t=e._self._c;return t("div",{staticClass:"stepCon5"},[t("title-view",{attrs:{title:e.$t("jsdCoursePublish.xianzaiqinggeinidekecheng"),"sub-title":e.$t("jsdCoursePublish.duanmingxiaoguo")}}),t("div",{staticClass:"stepMain"},[t("el-form",{ref:"ruleForm5",attrs:{model:e.formData,rules:e.rules}},[t("el-form-item",{attrs:{prop:"course_name",label:""}},[t("el-input",{staticClass:"inp",attrs:{type:"text",maxlength:50,"show-word-limit":"",placeholder:e.$t("jsdCoursePublish.qingshuruningdekechengmc")},model:{value:e.formData.course_name,callback:function(t){e.$set(e.formData,"course_name",t)},expression:"formData.course_name"}})],1),t("el-form-item",{attrs:{prop:"shortname"}},[t("el-input",{staticClass:"inp",attrs:{type:"text",maxlength:50,"show-word-limit":"",placeholder:e.$t("jsdCoursePublish.jiandanmingcheng")},model:{value:e.formData.shortname,callback:function(t){e.$set(e.formData,"shortname",t)},expression:"formData.shortname"}})],1)],1)],1),t("buttons-view",{on:{prev:function(t){return e.$emit("prev")},next:e.next}})],1)},N=[],z={name:"StepCourseName",components:{ButtonsView:d.Z,TitleView:c.Z},props:{courseInfo:{type:Object,required:!0,default:()=>({})}},data(){return{formData:{course_name:this.courseInfo?.course_name||"",shortname:this.courseInfo?.shortname||""},rules:{course_name:[{required:!0,message:this.$t("jsdCoursePublish.kechengmingchengbunengweikong"),trigger:["change","blur"]}]}}},methods:{next(e){this.$refs.ruleForm5.validate((t=>{t&&this.$emit("next",this.formData,e)}))}}},L=z,B=(0,f.Z)(L,O,N,!1,null,"134b4c1c",null),M=B.exports,U=function(){var e=this,t=e._self._c;return t("div",{staticClass:"stepCon6"},[t("title-view",{attrs:{title:e.$t("jsdCoursePublish.changjiankechengmiaoshu"),"sub-title":e.$t("jsdCoursePublish.zhanshiningdekechengdute")}}),t("div",{staticClass:"stepMain"},[t("el-form",{ref:"form",attrs:{model:e.formData,rules:e.rules}},[t("el-form-item",{attrs:{prop:"course_describe"}},[t("el-input",{staticClass:"textarea",attrs:{type:"textarea",placeholder:e.$t("jsdCoursePublish.qingshuruningdekechengms"),maxlength:500,"show-word-limit":""},model:{value:e.formData.course_describe,callback:function(t){e.$set(e.formData,"course_describe",t)},expression:"formData.course_describe"}})],1)],1)],1),t("buttons-view",{on:{prev:function(t){return e.$emit("prev")},next:e.next}})],1)},X=[],E={name:"StepCourseDesc",components:{ButtonsView:d.Z,TitleView:c.Z},props:{courseInfo:{type:Object,required:!0,default:()=>({})}},data(){return{formData:{course_describe:this.courseInfo.course_describe||""},rules:{course_describe:[{required:!0,message:this.$t("jsdCoursePublish.kechengmiaoshubunengweikong"),trigger:["change","blur"]}]}}},methods:{next(e){this.$refs.form.validate((t=>{t&&this.$emit("next",this.formData,e)}))}}},H=E,R=(0,f.Z)(H,U,X,!1,null,"30805795",null),F=R.exports,A=function(){var e=this,t=e._self._c;return t("div",{staticClass:"stepCon7"},[t("title-view",{attrs:{title:e.$t("jsdCoursePublish.xuanzkechengdeshangk"),"sub-title":e.$t("jsdCoursePublish.xuanzeningdeshangke")}}),t("div",{staticClass:"stepMain"},[t("el-form",{ref:"form",attrs:{model:e.formData,rules:e.rules}},[t("el-form-item",{attrs:{prop:"course_way"}},[t("div",{staticClass:"moshiCon"},[t("el-checkbox-group",{model:{value:e.formData.course_way,callback:function(t){e.$set(e.formData,"course_way",t)},expression:"formData.course_way"}},e._l(e.wayList,(function(s,a){return t("div",{key:s.id,staticClass:"item"},[t("el-checkbox",{staticClass:"leftRadio",attrs:{label:s.value,name:"shangkeFangshi"}}),t("div",{staticClass:"right"},[t("div",{staticClass:"title"},[e._v(" "+e._s(s.moshiName)+" ")]),t("div",{staticClass:"desc"},[e._v(" "+e._s(s.desc)+" ")])])],1)})),0)],1)])],1)],1),t("buttons-view",{on:{prev:function(t){return e.$emit("prev")},next:e.next}})],1)},W=[],G={name:"StepTeachingWay",components:{ButtonsView:d.Z,TitleView:c.Z},props:{courseInfo:{type:Object,required:!0,default:()=>({})}},data(){return{formData:{course_way:this.courseInfo.course_way?.split(",")||[]},rules:{course_way:[{required:!0,message:this.$t("jsdCoursePublish.shangkefangshibunengweikong"),trigger:["change","blur"]}]}}},computed:{wayList(){return[{id:1,moshiName:this.$t("jsdCoursePublish.mianduimianshouke"),desc:this.$t("jsdCoursePublish.gongxiangjiaoshihuoxueshengjia"),value:"1",select:!1},{id:2,moshiName:this.$t("jsdCoursePublish.wangluoshipinshouke"),desc:this.$t("jsdCoursePublish.shiyonggerenshipinruanjian"),value:"2",select:!1}]}},methods:{next(e){this.$refs.form.validate((t=>{if(t){let t={course_way:this.formData.course_way.join(",")};this.$emit("next",t,e)}}))}}},J=G,K=(0,f.Z)(J,A,W,!1,null,"33998b95",null),Q=K.exports,Y=function(){var e=this,t=e._self._c;return t("div",{staticClass:"stepCon8"},[t("title-view",{attrs:{title:e.$t("jsdCoursePublish.xuanzeshangkeleixing"),"sub-title":e.$t("jsdCoursePublish.zhanshiningdekechengdute")}}),t("div",{staticClass:"stepMain"},[t("el-form",{ref:"form",attrs:{model:e.formData,rules:e.rules}},[t("el-form-item",{attrs:{prop:"course_type",label:""}},[t("div",{staticClass:"moshiCon"},e._l(e.typeList,(function(s,a){return t("div",{key:s.id,staticClass:"item"},[t("el-radio",{staticClass:"leftRadio",attrs:{label:s.value},model:{value:e.formData.course_type,callback:function(t){e.$set(e.formData,"course_type",t)},expression:"formData.course_type"}}),t("div",{staticClass:"right"},[t("div",{staticClass:"title"},[e._v(" "+e._s(s.name)+" ")]),t("div",{staticClass:"desc"},[e._v(" "+e._s(s.desc)+" ")])])],1)})),0)])],1)],1),t("buttons-view",{on:{prev:function(t){return e.$emit("prev")},next:e.next}})],1)},ee=[],te={name:"StepCourseType",components:{ButtonsView:d.Z,TitleView:c.Z},props:{courseInfo:{type:Object,required:!0,default:()=>({})}},data(){return{formData:{course_type:this.courseInfo.course_type?.toString()||""},rules:{course_type:[{required:!0,message:this.$t("jsdCoursePublish.shangkeleixingbunengweikong"),trigger:["change","blur"]}]}}},computed:{typeList(){return[{id:1,name:this.$t("jsdCoursePublish.k12xingquke"),desc:this.$t("jsdCoursePublish.shibasuiyixiaxuedexuexiao"),value:"1"},{id:2,name:this.$t("jsdCoursePublish.zuanqianjinengke"),desc:this.$t("jsdCoursePublish.chengnianrendejinenghexingquaihao"),value:"2"}]}},methods:{next(e){this.$refs.form.validate((t=>{t&&this.$emit("next",this.formData,e)}))}}},se=te,ae=(0,f.Z)(se,Y,ee,!1,null,"112f9076",null),ie=ae.exports,re=function(){var e=this,t=e._self._c;return t("div",{staticClass:"stepCon9"},[t("title-view",{attrs:{title:e.$t("jsdCoursePublish.kechengbiaoqian"),"sub-title":e.$t("jsdCoursePublish.xuanzeshiheningkechengde")}}),t("div",{staticClass:"stepMain"},[t("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"form",attrs:{model:e.formData,rules:e.rules}},[t("el-form-item",{attrs:{prop:"tag1",label:""}},[t("el-select",{staticClass:"bqSelect",attrs:{placeholder:e.$t("jsdClassroomPublish.qingxuanzebiaoqian1")},model:{value:e.formData.tag1,callback:function(t){e.$set(e.formData,"tag1",t)},expression:"formData.tag1"}},e._l(e.courseTagsOptions,(function(e){return t("el-option",{key:e.id,attrs:{label:e.name_arr,value:String(e.id)}})})),1)],1),t("el-form-item",{attrs:{prop:"tag2"}},[t("el-select",{staticClass:"bqSelect",attrs:{placeholder:e.$t("jsdClassroomPublish.qingxuanzebiaoqian2")},model:{value:e.formData.tag2,callback:function(t){e.$set(e.formData,"tag2",t)},expression:"formData.tag2"}},e._l(e.courseTagsOptions,(function(e){return t("el-option",{key:e.id,attrs:{label:e.name_arr,value:String(e.id)}})})),1)],1),t("el-form-item",{attrs:{prop:"tag3",label:""}},[t("el-select",{staticClass:"bqSelect",attrs:{placeholder:e.$t("jsdClassroomPublish.qingxuanzebiaoqian3")},model:{value:e.formData.tag3,callback:function(t){e.$set(e.formData,"tag3",t)},expression:"formData.tag3"}},e._l(e.courseTagsOptions,(function(e){return t("el-option",{key:e.id,attrs:{label:e.name_arr,value:String(e.id)}})})),1)],1)],1)],1),t("buttons-view",{attrs:{disabled:e.loading},on:{prev:function(t){return e.$emit("prev")},next:e.next}})],1)},oe=[],ne={name:"StepCourseTags",components:{ButtonsView:d.Z,TitleView:c.Z},props:{courseInfo:{type:Object,required:!0,default:()=>({})}},data(){return{formData:{tag1:"",tag2:"",tag3:""},rules:{tag1:[{required:!0,message:this.$t("jsdCoursePublish.biaoqian1bunengweikong"),trigger:["change","blur"]}]},courseTagsOptions:[],loading:!1}},mounted(){this.getCourseTagsList()},methods:{next(e){this.$refs.form.validate((t=>{if(t){let t=[this.formData.tag1,this.formData.tag2,this.formData.tag3].join(",");this.$emit("next",{course_label_ids:t},e)}}))},async getCourseTagsList(){this.loading=!0;try{const e=await(0,n.Iul)();if(200===e.code){this.courseTagsOptions=e.data;let t=this.courseInfo.course_label_ids?.split(",");t&&t.length>0&&(this.formData.tag1=t[0],this.formData.tag2=t[1],this.formData.tag3=t[2])}}catch(e){console.error(e)}this.loading=!1}}},ue=ne,le=(0,f.Z)(ue,re,oe,!1,null,"56e50cc9",null),ce=le.exports,de=function(){var e=this,t=e._self._c;return t("div",{staticClass:"stepCon10"},[t("title-view",{attrs:{title:e.$t("jsdCoursePublish.course_video"),"sub-title":e.$t("jsdCoursePublish.paste_youtube_code")}}),t("div",{staticClass:"stepMain"},[t("el-form",{ref:"form",attrs:{model:e.formData}},[t("el-form-item",{attrs:{prop:"video"}},[t("el-input",{staticClass:"textarea",attrs:{type:"textarea",maxlength:200,"show-word-limit":"",placeholder:"https://www.youtube.com/watch?v=xxXXxxXXXXX"},model:{value:e.formData.video,callback:function(t){e.$set(e.formData,"video",t)},expression:"formData.video"}})],1)],1)],1),t("buttons-view",{on:{prev:function(t){return e.$emit("prev")},next:e.next}})],1)},me=[],pe={name:"StepCourseVideo",components:{ButtonsView:d.Z,TitleView:c.Z},props:{courseInfo:{type:Object,required:!0,default:()=>({})}},data(){return{formData:{video:this.courseInfo.video||""}}},methods:{next(e){this.$emit("next",this.formData,e)}}},fe=pe,he=(0,f.Z)(fe,de,me,!1,null,"7cfb3b60",null),ge=he.exports,be=function(){var e=this,t=e._self._c;return t("div",{staticClass:"stepCon11"},[t("title-view",{attrs:{title:e.$t("jsdCoursePublish.xianzaiqingshezhijiage"),"sub-title":e.$t("jsdCoursePublish.keyisuishigenggai")}}),t("div",{staticClass:"stepMain"},[t("div",{staticClass:"PriceSetupCon"},[t("div",{staticClass:"top"},[t("div",{staticClass:"left",on:{click:e.minus}},[t("i",{staticClass:"icon fa fa-minus"})]),t("el-form",{ref:"form",attrs:{model:e.formData,rules:e.rules}},[t("el-form-item",{staticClass:"eleformItem",attrs:{prop:"price",label:""}},[t("div",{staticClass:"midCon"},[t("el-input",{staticClass:"inp",attrs:{type:"number"},model:{value:e.formData.price,callback:function(t){e.$set(e.formData,"price",t)},expression:"formData.price"}},[t("template",{slot:"prepend"},[e._v("$")])],2)],1)])],1),t("div",{staticClass:"right",on:{click:e.plus}},[t("i",{staticClass:"icon fa fa-plus"})])],1)])]),t("buttons-view",{attrs:{"next-text":e.$t("jsdCoursePublish.finish")},on:{prev:function(t){return e.$emit("prev")},next:e.next}})],1)},ve=[],Ce={name:"StepCoursePrice",components:{ButtonsView:d.Z,TitleView:c.Z},props:{courseInfo:{type:Object,required:!0,default:()=>({})}},data(){return{formData:{price:this.courseInfo.price?parseFloat(this.courseInfo.price):""},rules:{price:[{required:!0,message:this.$t("jsdCoursePublish.jiagebunengweikong"),trigger:["change","blur"]}]}}},watch:{"formData.price"(e){e.length>16?this.$nextTick((()=>{this.formData.price=this.formData.price.slice(0,16)})):e<0&&this.$nextTick((()=>{this.formData.price=0}))}},methods:{next(e){this.$refs.form.validate((t=>{t&&this.$emit("next",this.formData,e)}))},minus(){this.formData.price--},plus(){this.formData.price++}}},_e=Ce,xe=(0,f.Z)(_e,be,ve,!1,null,"32b47dea",null),$e=xe.exports,we={name:"CoursePublish",components:{StepCoursePrice:$e,StepCourseVideo:ge,StepCourseTags:ce,StepCourseType:ie,StepTeachingWay:Q,StepCourseDesc:F,StepCourseName:M,StepHonorPicture:V,StepCoursePicture:P,StepLocation:$,StepSubject:g,HomeHeader:r.Z,CustomElUpload:o.Z},data(){return{pageDetail:null,step:1,courseInfo:null,id:"",submitting:!1,currentComponentRef:null}},mounted(){this.id=this.$route.params.id,this.init()},methods:{init(){this.id?this.getCourseInfo():this.courseInfo={}},onNext(e,t){this.courseInfo={...this.courseInfo,...e},console.log(this.courseInfo),this.step<11?this.step++:this.onComplete()},async onComplete(){this.submitting=!0,this.id?await this.editCourse():await this.createCourse(),this.submitting=!1},async getCourseInfo(){const e=this.$loading();try{let e=await(0,n.RnH)({id:this.id});if(e&&200===e.code){let t=e.data,s={};s.subject_id=t.subject_id,s.area=t.area,s.address=t.address,s.course_images=t.course_images,s.other_images=t.other_images,s.course_name=t.name_arr,s.shortname=t.shortname_arr,s.course_describe=t.describe_text,s.course_way=t.course_way,s.course_type=t.course_type,s.course_label_ids=t.course_label_ids,s.video=t.video,s.price=t.price,this.courseInfo=s}}catch(t){console.error(t)}e.close()},async createCourse(){try{const e=await(0,n.bq0)(this.courseInfo);200===e.code&&(this.$message.success(e.msg),await this.$router.push({path:"/jsdCourseList"}))}catch(e){console.error(e)}},async editCourse(){try{const e=await(0,n.Hfm)({...this.courseInfo,id:this.id});200===e.code&&(this.$message.success(e.msg),await this.$router.push({path:"/jsdCourseList"}))}catch(e){console.error(e)}}}},je=we,De=(0,f.Z)(je,a,i,!1,null,"054dfe5c",null),ye=De.exports}}]);