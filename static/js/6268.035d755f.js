"use strict";(self["webpackChunkframe"]=self["webpackChunkframe"]||[]).push([[6268],{86268:function(e,t,r){r.r(t),r.d(t,{default:function(){return p}});var i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("HomeHeader",{attrs:{topimgIsShow:!1}}),t("div",{staticClass:"listCon"},[t("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"center"},[e.loading?e._e():t("div",{staticClass:"layoutLeft"},[t("div",{staticClass:"title"},[e._v(" "+e._s(e.$t("renzhengTeacher.renzhengjiaoshi"))+" ")]),t("div",{staticClass:"twoTitle"},[e._v(" "+e._s(e.$t("renzhengTeacher.tigongdeningdegeren"))+" ")]),t("el-form",{ref:"refRuleForm",staticClass:"ruleForm",attrs:{disabled:e.disabled,"label-width":"130px","label-position":"top",model:e.ruleForm,rules:e.rules}},[t("el-form-item",{attrs:{prop:"first_name",label:e.$t("renzhengTeacher.first_name")}},[t("el-input",{staticClass:"inpItem inpItem1",attrs:{maxlength:"30","show-word-limit":"",placeholder:e.$t("renzhengTeacher.enter_first_name")},model:{value:e.ruleForm.first_name,callback:function(t){e.$set(e.ruleForm,"first_name",t)},expression:"ruleForm.first_name"}})],1),t("el-form-item",{attrs:{prop:"last_name",label:e.$t("renzhengTeacher.last_name")}},[t("el-input",{staticClass:"inpItem inpItem1",attrs:{maxlength:"30","show-word-limit":"",placeholder:e.$t("renzhengTeacher.enter_last_name")},model:{value:e.ruleForm.last_name,callback:function(t){e.$set(e.ruleForm,"last_name",t)},expression:"ruleForm.last_name"}})],1),t("el-form-item",{attrs:{prop:"sheAnHao",label:e.$t("renzhengTeacher.sheanhao")}},[t("el-input",{staticClass:"inpItem inpItem1",attrs:{maxlength:"11","show-word-limit":"",placeholder:e.$t("renzhengTeacher.qingshurusheanhao")},model:{value:e.ruleForm.sheAnHao,callback:function(t){e.$set(e.ruleForm,"sheAnHao",t)},expression:"ruleForm.sheAnHao"}})],1),t("el-form-item",{attrs:{prop:"idHaoMa",label:e.$t("renzhengTeacher.idhaoma")}},[t("el-input",{staticClass:"inpItem inpItem1",attrs:{maxlength:"8","show-word-limit":"",placeholder:e.$t("renzhengTeacher.qingshuruidhaoma")},model:{value:e.ruleForm.idHaoMa,callback:function(t){e.$set(e.ruleForm,"idHaoMa",t)},expression:"ruleForm.idHaoMa"}})],1),e.disabled&&e.ruleForm.id_photo?t("el-form-item",{attrs:{prop:"id_photo",label:e.$t("renzhengTeacher.idPhoto")}},[t("div",{staticClass:"item"},[t("div",{staticClass:"top"},[t("div",{staticClass:"rightText"},[e._v(" "+e._s(e.$t("renzhengTeacher.tupiandaxiaobuneng"))+" ")])]),t("div",{staticClass:"imgOuter"},e._l(e.ruleForm.id_photo?.split(","),(function(e,r){return t("div",{key:r,staticClass:"item"},[t("img",{attrs:{src:e,alt:""}})])})),0)])]):e._e(),e.disabled?e._e():t("el-form-item",{attrs:{prop:"id_photo",label:e.$t("renzhengTeacher.idPhoto")}},[t("div",{staticClass:"item"},[t("div",{staticClass:"top"},[t("div",{staticClass:"rightText"},[e._v(" "+e._s(e.$t("renzhengTeacher.tupiandaxiaobuneng"))+" ")])]),t("CustomElUpload",{ref:"customElUpload2",attrs:{template_type:"picture-card",upload_tip_text:"",files_limit:3,add_param_data:"",autoUpload:!0},model:{value:e.ruleForm.id_photo,callback:function(t){e.$set(e.ruleForm,"id_photo",t)},expression:"ruleForm.id_photo"}})],1)]),t("el-form-item",{attrs:{prop:"phone",label:e.$t("renzhengTeacher.dianhuahaoma")}},[t("el-input",{staticClass:"inpItem inpItem1",attrs:{maxlength:"20","show-word-limit":"",placeholder:e.$t("renzhengTeacher.qingshurudianhuahaoma")},model:{value:e.ruleForm.phone,callback:function(t){e.$set(e.ruleForm,"phone",t)},expression:"ruleForm.phone"}})],1),t("div",{staticClass:"addrCon"},[t("el-form-item",{staticClass:"elFormItem",attrs:{prop:"region",label:e.$t("LoginAndRegister.guojiahuodiqu")}},[t("el-input",{staticClass:"inpItem inpItem1",attrs:{maxlength:"100","show-word-limit":"",placeholder:e.$t("LoginAndRegister.guojiahuodiqu")},model:{value:e.ruleForm.region,callback:function(t){e.$set(e.ruleForm,"region",t)},expression:"ruleForm.region"}})],1),t("el-form-item",{staticClass:"elFormItem",attrs:{prop:"address",label:e.$t("renzhengTeacher.dizhi")}},[t("el-input",{staticClass:"inpItem inpItem1",attrs:{maxlength:"100","show-word-limit":"",placeholder:e.$t("renzhengTeacher.dizhi")},model:{value:e.ruleForm.address,callback:function(t){e.$set(e.ruleForm,"address",t)},expression:"ruleForm.address"}})],1),t("el-form-item",{staticClass:"elFormItem",attrs:{prop:"apartment",label:e.$t("renzhengTeacher.apartment")}},[t("el-input",{staticClass:"inpItem inpItem1",attrs:{maxlength:"100","show-word-limit":"",placeholder:e.$t("renzhengTeacher.apartment")},model:{value:e.ruleForm.apartment,callback:function(t){e.$set(e.ruleForm,"apartment",t)},expression:"ruleForm.apartment"}})],1),t("el-form-item",{staticClass:"elFormItem",attrs:{prop:"zipCode",label:e.$t("renzhengTeacher.zip")}},[t("el-input",{staticClass:"inpItem inpItem1",attrs:{maxlength:"10","show-word-limit":"",placeholder:e.$t("renzhengTeacher.zip")},model:{value:e.ruleForm.zipCode,callback:function(t){e.$set(e.ruleForm,"zipCode",t)},expression:"ruleForm.zipCode"}})],1)],1),t("el-form-item",{staticClass:"noLeft",attrs:{prop:"certificate_images",label:e.$t("renzhengTeacher.zhengshu")}},[t("div",{staticClass:"item"},[t("div",{staticClass:"top"},[t("div",{staticClass:"rightText"},[e._v(" "+e._s(e.$t("renzhengTeacher.tupiandaxiaobuneng"))+" ")])]),e.disabled?t("div",{staticClass:"imgOuter"},e._l(e.ruleForm.certificate_images.split(","),(function(e,r){return t("div",{key:r,staticClass:"item"},[t("img",{attrs:{src:e,alt:""}})])})),0):t("div",[t("CustomElUpload",{ref:"customElUpload2",attrs:{template_type:"picture-card",upload_tip_text:"",files_limit:15,add_param_data:"",autoUpload:!0},model:{value:e.ruleForm.certificate_images,callback:function(t){e.$set(e.ruleForm,"certificate_images",t)},expression:"ruleForm.certificate_images"}})],1)])]),e.disabled&&e.ruleForm.photo_images?t("el-form-item",{staticClass:"noLeft",attrs:{prop:"photo_images",label:e.$t("renzhengTeacher.huojiangtupian")}},[t("div",{staticClass:"item"},[t("div",{staticClass:"top"},[t("div",{staticClass:"rightText"},[e._v(" "+e._s(e.$t("renzhengTeacher.tupiandaxiaobuneng"))+" ")])]),t("div",{staticClass:"imgOuter"},e._l(e.ruleForm.photo_images.split(","),(function(e,r){return t("div",{key:r,staticClass:"item"},[t("img",{attrs:{src:e,alt:""}})])})),0)])]):e._e(),e.disabled?e._e():t("el-form-item",{staticClass:"noLeft",attrs:{prop:"photo_images",label:e.$t("renzhengTeacher.huojiangtupian")}},[t("div",{staticClass:"item"},[t("div",{staticClass:"top"},[t("div",{staticClass:"rightText"},[e._v(" "+e._s(e.$t("renzhengTeacher.tupiandaxiaobuneng"))+" ")])]),t("div",[t("CustomElUpload",{ref:"customElUpload1",attrs:{template_type:"picture-card",upload_tip_text:"",files_limit:15,add_param_data:"",autoUpload:!0},model:{value:e.ruleForm.photo_images,callback:function(t){e.$set(e.ruleForm,"photo_images",t)},expression:"ruleForm.photo_images"}})],1)])]),t("el-form-item",{attrs:{prop:"videos",label:e.$t("renzhengTeacher.shipinzhangshi")}},[t("el-input",{staticClass:"inpItem inpItem1",attrs:{maxlength:"255","show-word-limit":"",placeholder:e.$t("renzhengTeacher.enter_youtube")},model:{value:e.ruleForm.videos,callback:function(t){e.$set(e.ruleForm,"videos",t)},expression:"ruleForm.videos"}})],1),t("el-form-item",{attrs:{prop:"url",label:e.$t("renzhengTeacher.gerenwangzhanlianjie")}},[t("el-input",{staticClass:"inpItem inpItem1",attrs:{maxlength:"255","show-word-limit":"",placeholder:e.$t("renzhengTeacher.qingshrugerenwangzhanlianjie")},model:{value:e.ruleForm.url,callback:function(t){e.$set(e.ruleForm,"url",t)},expression:"ruleForm.url"}})],1),t("el-form-item",{attrs:{prop:"describe",label:e.$t("renzhengTeacher.renzhengmiaoshu")}},[t("el-input",{attrs:{type:"textarea",maxlength:"500","show-word-limit":""},model:{value:e.ruleForm.describe,callback:function(t){e.$set(e.ruleForm,"describe",t)},expression:"ruleForm.describe"}})],1)],1),""!==e.status?t("div",{staticClass:"renzhengStateClass"},[t("div",{staticClass:"title"},[e._v(" "+e._s(e.$t("renzhengTeacher.renzhengzhuangtai"))+" ")]),t("div",[t("div",{style:{color:e.statusColor[e.detailObj.status]}},[e._v(e._s(e._f("shenheFilter")(e.detailObj.status)))]),e._v(" "+e._s(2==e.detailObj?.status?e.detailObj.certify_msg:e.$t("renzhengTeacher.CertifiedTips"))+" ")])]):e._e(),t("div",{staticClass:"nextBtn"},[t("el-button",{staticClass:"btn",attrs:{type:"primary",loading:e.submitting,disabled:e.disabled},on:{click:e.formSubmit}},[e._v(" "+e._s(e.$t("renzhengTeacher.queren"))+" ")])],1)],1)])]),t("HomeFooter")],1)},a=[],s=(r(57658),r(38864)),o=r(18031),l=r(15936),n=r(51206);let m;var h={name:"login",components:{HomeHeader:s.Z,HomeFooter:o.Z,CustomElUpload:l.Z},data(){return{dialogVisible:!1,ruleForm:{first_name:"",last_name:"",sheAnHao:"",idHaoMa:"",id_photo:"",phone:"",region:"",addr:"",photo_images:"",certificate_images:"",videos:"",url:"",describe:"",country:"",province:"",city:"",address:"",apartment:"",zipCode:""},rules:{first_name:[{required:!0,message:this.$t("tip.required"),trigger:"blur"}],last_name:[{required:!0,message:this.$t("tip.required"),trigger:"blur"}],sheAnHao:[{required:!0,message:this.$t("tip.required"),trigger:"blur"},{pattern:/^\d{3}-\d{2}-\d{4}$/,message:this.$t("renzhengTeacher.sheAnHaoGeshi"),trigger:"blur"}],idHaoMa:[{required:!0,message:this.$t("tip.required"),trigger:"blur"},{pattern:/^[A-Za-z]\d{7}$/,message:this.$t("renzhengTeacher.idHaoMaGeshi"),trigger:"blur"}],id_photo:[{required:!0,message:this.$t("tip.required"),trigger:"blur"}],phone:[{required:!0,message:this.$t("tip.required"),trigger:"blur"},{pattern:/^(?:\+|\d{1,4})\s?\d{1,3}[-.\s]?\d{1,3}[-.\s]?\d{1,9}$|^\d{3}-\d{3}-\d{4}$/,message:this.$t("renzhengTeacher.geshibuzhengque"),trigger:"blur"}],region:[{required:!0,message:this.$t("tip.required"),trigger:["change","blur"]}],addr:[{required:!0,message:this.$t("tip.required"),trigger:["blur","change"]}],certificate_images:[{required:!0,message:this.$t("tip.required"),trigger:"blur"}],country:[{required:!0,message:this.$t("tip.required"),trigger:["blur","change"]}],province:[{required:!0,message:this.$t("tip.required"),trigger:"blur"}],city:[{required:!0,message:this.$t("tip.required"),trigger:"blur"}],address:[{required:!0,message:this.$t("tip.required"),trigger:"blur"}],zipCode:[{required:!0,message:this.$t("tip.required"),trigger:"blur"}]},detailObj:{},countryOptions:[],stateOptions:[],options:[{value:"美国",label:"美国"},{value:"选项2",label:"双皮奶"}],loading:!1,submitting:!1,status:""}},beforeCreate(){m=this},computed:{disabled(){return 0===this.status||1===this.status},statusColor(){return{0:"#2f7ef3",1:"#079d2b",2:"#b42b14"}}},mounted(){this.init()},methods:{async init(){this.loading=!0;try{await this.getRenZhengTeacherInfo()}catch(e){console.error(e)}this.loading=!1},JumpDetail(){this.$router.push({path:"/CourseDetail"})},formSubmit(){this.$refs["refRuleForm"].validate((e=>{e&&this.doSubmit()}))},async doSubmit(){const e={first_name:this.ruleForm.first_name,last_name:this.ruleForm.last_name,social_num:this.ruleForm.sheAnHao,id_num:this.ruleForm.idHaoMa,id_photo:this.ruleForm.id_photo,phone:this.ruleForm.phone,photo_images:this.ruleForm.photo_images,certificate_images:this.ruleForm.certificate_images,videos:this.ruleForm.videos,url:this.ruleForm.url,describe:this.ruleForm.describe,region:this.ruleForm.region,address:this.ruleForm.address,apartment:this.ruleForm.apartment,zip_code:this.ruleForm.zipCode};console.log("console_data",JSON.parse(JSON.stringify(e))),this.submitting=!0;try{const t=await(0,n.b44)(e);200===t.code&&(this.$message.success(t.msg),await this.getRenZhengTeacherInfo())}catch(t){console.error(t)}this.submitting=!1},async getRenZhengTeacherInfo(){try{const e=await(0,n.q$g)();if(200===e.code&&e.data){let t=e.data;this.ruleForm.first_name=t.first_name,this.ruleForm.last_name=t.last_name,this.ruleForm.sheAnHao=t.social_num,this.ruleForm.idHaoMa=t.id_num,this.ruleForm.id_photo=t.id_photo,this.ruleForm.phone=t.phone,this.ruleForm.photo_images=t.photo_images_text?.toString(),this.ruleForm.certificate_images=t.certificate_images_text?.toString(),this.ruleForm.videos=t.videos_text?.toString(),this.ruleForm.url=t.url,this.ruleForm.describe=t.describe,this.ruleForm.region=t.region,this.ruleForm.address=t.address,this.ruleForm.apartment=t.apartment,this.ruleForm.zipCode=t.zip_code,this.status=t.status,this.detailObj=t}}catch(e){console.error(e)}},async getAreaList(){try{const e=await(0,n.TVX)();if(200===e.code){let t=e.data;this.countryOptions=this.DataConverter(t)}}catch(e){console.error(e)}},DataConverter(e){for(let t of e){t.children=t.city;for(let e of t.children)e.children=e.area}return e},countryChange(e){let t=this.countryOptions.find(((t,r,i)=>t.name_arr==e));this.stateOptions=t.children}},filters:{shenheFilter(e){return 0==e?m.$t("renzhengTeacher.daishenhe"):1==e?m.$t("renzhengTeacher.shenhetongguo"):2==e?m.$t("renzhengTeacher.shenheshibai"):void 0}}},u=h,d=r(1001),c=(0,d.Z)(u,i,a,!1,null,"134ade2b",null),p=c.exports}}]);