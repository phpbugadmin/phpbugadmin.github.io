"use strict";(self["webpackChunkframe"]=self["webpackChunkframe"]||[]).push([[7466],{8727:function(e,t,a){a.r(t),a.d(t,{default:function(){return c}});var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("div",{staticClass:"ConTwo"},[t("div",{staticClass:"center"},[t("router-link",{attrs:{to:"/"}},[t("img",{staticClass:"logo",attrs:{src:a(1889)}})]),t("div",{staticClass:"btn",on:{click:e.SaveAndExit}},[e._v(" "+e._s(e.$t("taxAdd.baocunbingtuichu"))+" ")])],1)]),t("div",{staticClass:"mianCon"},[t("div",{staticClass:"center"},[t("div",{staticClass:"topTitle"},[e._v(e._s(e.$t("taxAdd.tianxiesuiwuxinxi")))]),t("div",{staticClass:"title1"},[e._v(" "+e._s(e.$t("taxAdd.zaiqianmingtijiaozhiqian"))+" ")]),t("div",{staticClass:"hr"}),t("el-form",{ref:"refRuleForm",attrs:{model:e.ruleForm,rules:e.rules}},[t("el-form-item",{attrs:{prop:"tax_name",label:e.$t("taxAdd.nasuirenxingminghuogongsimingcheng")}},[t("el-input",{staticClass:"inpItem inpItem1",attrs:{placeholder:e.$t("taxAdd.nasuirenxingminghuogongsimingcheng")},model:{value:e.ruleForm.tax_name,callback:function(t){e.$set(e.ruleForm,"tax_name",t)},expression:"ruleForm.tax_name"}})],1),t("div",{staticClass:"remarks hasBot"},[e._v(" "+e._s(e.$t("taxAdd.qingshurusuodesuo"))+" ")]),t("div",{staticClass:"remarks hasBot"},[e._v(" "+e._s(e.$t("taxAdd.jingdangniyongyou"))+" ")]),t("el-form-item",{attrs:{prop:"tax_type_id",label:e.$t("taxAdd.suiwufenlei")}},[t("el-select",{staticClass:"formSelect countrySelect",attrs:{placeholder:e.$t("taxAdd.suiwufenlei")},model:{value:e.ruleForm.tax_type_id,callback:function(t){e.$set(e.ruleForm,"tax_type_id",t)},expression:"ruleForm.tax_type_id"}},e._l(e.SuiWuClassify,(function(e){return t("el-option",{key:e.id,attrs:{label:e.name_arr,value:e.id}})})),1)],1),t("div",{staticClass:"remarks hasBot"},[e._v(" "+e._s(e.$t("taxAdd.jingdangniyongyou"))+" ")]),t("el-form-item",{attrs:{prop:"tax_num",label:e.$t("taxAdd.suihao")}},[t("div",{staticClass:"remarks"},[e._v(" "+e._s(e.$t("taxAdd.gerenyingtigongssn"))+" ")]),e._l(e.SuiHaoList,(function(a,s){return t("div",{key:a.id,staticClass:"item"},[t("el-radio",{staticClass:"suiHaoClass",attrs:{label:a.id},model:{value:e.ruleForm.tax_num_type,callback:function(t){e.$set(e.ruleForm,"tax_num_type",t)},expression:"ruleForm.tax_num_type"}},[t("div",{staticClass:"radioTop"},[e._v(e._s(a.name))]),t("div",{staticClass:"radioBot"},[e._v(e._s(a.brief))])])],1)})),t("div",{staticClass:"item"},[t("el-input",{staticClass:"inpItem inpItem1",attrs:{placeholder:"SSN"},model:{value:e.ruleForm.tax_num,callback:function(t){e.$set(e.ruleForm,"tax_num",t)},expression:"ruleForm.tax_num"}})],1)],2),t("div",{staticClass:"remarks hasBot"},[e._v(" "+e._s(e.$t("taxAdd.leixinghehaoma"))+" ")]),t("el-form-item",{attrs:{prop:"address_1",label:e.$t("taxAdd.dizhi")}},[t("el-cascader",{staticClass:"areaCon",attrs:{options:e.areaList,props:{value:"name",label:"name_arr",children:"children",expandTrigger:"hover"},placeholder:e.$t("taxAdd.guojiahuodiqu")},model:{value:e.ruleForm.address_1,callback:function(t){e.$set(e.ruleForm,"address_1",t)},expression:"ruleForm.address_1"}})],1),t("el-form-item",{attrs:{prop:"address_2",label:""}},[t("el-input",{staticClass:"inpItem inpItem1",attrs:{placeholder:e.$t("taxAdd.jiedaodizhi")},model:{value:e.ruleForm.address_2,callback:function(t){e.$set(e.ruleForm,"address_2",t)},expression:"ruleForm.address_2"}})],1),t("el-form-item",{attrs:{prop:"address_3",label:""}},[t("el-input",{staticClass:"inpItem inpItem1",attrs:{placeholder:e.$t("taxAdd.gongyuhao")},model:{value:e.ruleForm.address_3,callback:function(t){e.$set(e.ruleForm,"address_3",t)},expression:"ruleForm.address_3"}})],1),t("el-form-item",{attrs:{prop:"address_4",label:""}},[t("el-input",{staticClass:"inpItem inpItem1",attrs:{placeholder:e.$t("taxAdd.shi")},model:{value:e.ruleForm.address_4,callback:function(t){e.$set(e.ruleForm,"address_4",t)},expression:"ruleForm.address_4"}})],1),t("el-form-item",{attrs:{prop:"address_5",label:""}},[t("el-input",{staticClass:"inpItem inpItem1",attrs:{placeholder:e.$t("taxAdd.zhou")},model:{value:e.ruleForm.address_5,callback:function(t){e.$set(e.ruleForm,"address_5",t)},expression:"ruleForm.address_5"}})],1),t("el-form-item",{attrs:{prop:"address_6",label:""}},[t("el-input",{staticClass:"inpItem inpItem1",attrs:{placeholder:e.$t("taxAdd.youzhengbianma")},model:{value:e.ruleForm.address_6,callback:function(t){e.$set(e.ruleForm,"address_6",t)},expression:"ruleForm.address_6"}})],1),t("el-form-item",{attrs:{prop:"expressage",label:e.$t("taxAdd.biangedisong")}},e._l(e.BiaoGeDiSongList,(function(a,s){return t("div",{key:a.id,staticClass:"item"},[t("el-radio",{staticClass:"suiHaoClass",attrs:{label:a.id},model:{value:e.ruleForm.expressage,callback:function(t){e.$set(e.ruleForm,"expressage",t)},expression:"ruleForm.expressage"}},[t("div",{staticClass:"radioTop"},[e._v(e._s(a.name))]),t("div",{staticClass:"radioBot"},[e._v(" "+e._s(a.brief)+" ")])])],1)})),0),t("el-form-item",{attrs:{label:e.$t("taxAdd.qinshubiaogebingzhumingriqi")}},[t("div",{staticClass:"xieyi"},[e._v(" "+e._s(e.$t("taxAdd.xieyi"))+" ")])]),t("el-form-item",{attrs:{label:e.$t("taxAdd.qizibingzhumingriqi")}}),t("el-form-item",{attrs:{prop:"signature"}},[t("div",{staticClass:"qianziInpItemCon"},[t("el-input",{staticClass:"inpItem inpItem1 qianziInpItem",attrs:{placeholder:e.$t("taxAdd.ningdeqianming")},model:{value:e.ruleForm.signature,callback:function(t){e.$set(e.ruleForm,"signature",t)},expression:"ruleForm.signature"}}),t("div",{staticClass:"smallTitle"},[e._v(" "+e._s(e.$t("taxAdd.qianming"))+" ")])],1)]),t("el-form-item",{staticClass:"codeFormItem",attrs:{prop:"date"}},[t("div",{staticClass:"qianziInpItemCon"},[t("el-date-picker",{staticClass:"inpItem qianziInpItem",attrs:{"value-format":"yyyy-MM-dd",type:"date",placeholder:e.$t("taxAdd.xuanzeriqi")},model:{value:e.ruleForm.date,callback:function(t){e.$set(e.ruleForm,"date",t)},expression:"ruleForm.date"}}),t("div",{staticClass:"smallTitle"},[e._v(" "+e._s(e.$t("taxAdd.riqi"))+" ")])],1)]),t("div",{staticClass:"remarks"},[e._v(" "+e._s(e.$t("taxAdd.zaicishuruningdemingzi"))+" ")])],1)],1)])])},r=[],i=(a(7658),a(8726)),d=a(6318),l=a(122),n={name:"login",components:{HomeHeader:i.Z,HomeFooter:d.Z},created(){let e=this.$route.query.area;this.ruleForm.country=e},data(){return{currentTab:"new",currentTabLabel:"纳税人",tabList:[{id:1,lable:this.$t("taxAdd.nasuiren"),num:"0",name:"new",status:"纳税人"},{id:2,lable:this.$t("taxAdd.nasuiwenjian"),num:"0",name:"all",status:"纳税文件"}],dialogVisible:!1,radio:1,ruleForm:{country:"",tax_name:"",tax_type_id:"",tax_num_type:"",tax_num:"",address_1:[],address_2:"",address_3:"",address_4:"",address_5:"",address_6:"",expressage:"",signature:"",date:""},rules:{tax_name:[{required:!0,message:this.$t("taxAdd.bunengweikong"),trigger:"blur"}],tax_type_id:[{required:!0,message:this.$t("taxAdd.bunengweikong"),trigger:"blur"}],tax_num:[{required:!0,message:this.$t("taxAdd.bunengweikong"),trigger:"blur"}],address_1:[{required:!0,message:this.$t("taxAdd.bunengweikong"),trigger:"blur"}],expressage:[{required:!0,message:this.$t("taxAdd.bunengweikong"),trigger:"blur"}],signature:[{required:!0,message:this.$t("taxAdd.bunengweikong"),trigger:"blur"}],date:[{required:!0,message:this.$t("taxAdd.bunengweikong"),trigger:"blur"}]},SuiWuClassify:[],SuiHaoList:[{id:1,name:"SSN",brief:this.$t("taxAdd.shehuibaozhenghaoma")},{id:2,name:"EIN",brief:this.$t("taxAdd.guzhushibiehaoma")}],BiaoGeDiSongList:[{id:1,name:this.$t("taxAdd.youji"),brief:this.$t("taxAdd.ningdebiaogejiang")},{id:2,name:this.$t("taxAdd.jingfasongdianziban"),brief:this.$t("taxAdd.dangbianzibanbiaoge")}],areaList:[],taxInfoObj:""}},mounted(){this.getRaxType(),this.getAreaList(),this.getTaxInfo()},methods:{onSubmit(){},JumpDetail(){this.$router.push({path:"/CourseDetail"})},tabChangeTap(e,t){console.log("tab",e),this.currentTabLabel=e.$attrs.status},getRaxType(){(0,l.fF1)().then((e=>{if(200==e.code){let t=e.data;this.SuiWuClassify=t.data}}))},SaveAndExit(){let e=l.ZgU;this.taxInfoObj.name&&(e=l.VP2),this.$refs["refRuleForm"].validate((t=>{if(t){const t={country:this.ruleForm.country,tax_name:this.ruleForm.tax_name,tax_type_id:this.ruleForm.tax_type_id,tax_num_type:this.ruleForm.tax_num_type,tax_num:this.ruleForm.tax_num,address_1:this.ruleForm?.address_1.toString(),address_2:this.ruleForm.address_2,address_3:this.ruleForm.address_3,address_4:this.ruleForm.address_4,address_5:this.ruleForm.address_5,address_6:this.ruleForm.address_6,expressage:this.ruleForm.expressage,signature:this.ruleForm.signature,date:this.ruleForm.date};e(t).then((e=>{200==e.code&&(this.$message.success(this.$t("taxAdd.tijiaochengg")),this.getTaxInfo())}))}else this.$message.error(this.$t("taxAdd.biandanyangzhengshibai"))}))},getAreaList(){(0,l.TVX)().then((e=>{if(200==e.code){let t=e.data;this.areaList=this.DataConverter(t)}}))},DataConverter(e){for(let t of e){t.children=t.city;for(let e of t.children)e.children=e.area}return e},getTaxInfo(){(0,l.olk)().then((e=>{if(200==e.code){console.error(e.data);let t=e.data;this.taxInfoObj=t,this.ruleForm.country=t.country,this.ruleForm.tax_name=t.name,this.ruleForm.tax_type_id=t.tax_type_id,this.ruleForm.tax_num_type=t.tax_num_type,this.ruleForm.tax_num=t.tax_num,this.ruleForm.address_1=t.address_1.split(","),this.ruleForm.address_2=t.address_2,this.ruleForm.address_3=t.address_3,this.ruleForm.address_4=t.address_4,this.ruleForm.address_5=t.address_5,this.ruleForm.address_6=t.address_6,this.ruleForm.expressage=t.expressage,this.ruleForm.signature=t.signature,this.ruleForm.date=t.date}}))}}},o=n,u=a(1001),m=(0,u.Z)(o,s,r,!1,null,"259a863e",null),c=m.exports},1889:function(e,t,a){e.exports=a.p+"static/img/headlogo.1c2b3a12.png"}}]);