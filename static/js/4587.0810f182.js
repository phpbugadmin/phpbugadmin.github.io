"use strict";(self["webpackChunkframe"]=self["webpackChunkframe"]||[]).push([[4587],{4587:function(t,e,a){a.r(e),a.d(e,{default:function(){return m}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("HomeHeader",{attrs:{topimgIsShow:!1}}),e("div",{staticClass:"listCon"},[e("div",{staticClass:"center"},[e("div",{staticClass:"topTitle"},[t._v(t._s(t.$t("tax.suifei")))]),e("el-tabs",{staticClass:"tab-list",on:{"tab-click":t.tabChangeTap},model:{value:t.currentTab,callback:function(e){t.currentTab=e},expression:"currentTab"}},t._l(t.tabList,(function(a){return e("el-tab-pane",{key:a.id,attrs:{name:a.name,status:a.status}},[e("template",{slot:"label"},[e("span",[t._v(t._s(a.lable))])])],2)})),1),"纳税人"==t.currentTabLabel?e("div",{staticClass:"list"},[e("div",{staticClass:"item"},[e("div",{staticClass:"title"},[t._v(t._s(t.$t("tax.nasuirenxinxi")))]),e("div",{staticClass:"desc"},[t._v(" "+t._s(t.$t("tax.daduoshuguojia"))+" ")])]),e("div",{staticClass:"nasuirenInfo"},[e("div",{staticClass:"infoItem"},[e("div",{staticClass:"lefttext"},[t._v(t._s(t.$t("tax.lastUpdate")))]),e("div",{staticClass:"right"},[t._v(" "+t._s(t.taxInfoObj.date)+" ")])]),e("div",{staticClass:"infoItem"},[e("div",{staticClass:"lefttext"},[t._v(t._s(t.$t("tax.countryArea")))]),e("div",{staticClass:"right"},[t._v(" "+t._s(t.taxInfoObj.address_1)+" "+t._s(t.taxInfoObj.address_5)+" "+t._s(t.taxInfoObj.address_4)+" ")])]),e("div",{staticClass:"infoItem"},[e("div",{staticClass:"lefttext"},[t._v(t._s(t.$t("tax.category")))]),e("div",{staticClass:"right"},[t._v(" "+t._s(t.taxInfoObj.tax_type)+" ")])]),e("div",{staticClass:"infoItem"},[e("div",{staticClass:"lefttext"},[t._v(t._s(t.$t("tax.nasuihao")))]),e("div",{staticClass:"right"},[t._v(t._s(t.taxInfoObj.tax_num))])]),e("div",{staticClass:"infoItem"},[e("div",{staticClass:"lefttext"},[t._v(t._s(t.$t("tax.address")))]),e("div",{staticClass:"right"},[t._v(" "+t._s(t.taxInfoObj.address_2)+" "+t._s(t.taxInfoObj.address_3)+" ")])]),e("div",{staticClass:"infoItem"},[e("div",{staticClass:"lefttext"},[t._v(" "+t._s(t.taxInfoObj.status_text)+" ")]),e("div",{staticClass:"right"})])]),e("div",{staticClass:"jpBtnGreen btn1",on:{click:function(e){t.NaSuiDialogVisible=!0}}},[t._v(" "+t._s(t.taxInfoObj.name?t.$t("tax.bianjinasuirenxinxi"):t.$t("tax.tianjianasuirenxinxi"))+" ")])]):t._e(),"纳税文件"==t.currentTabLabel?e("div",{staticClass:"addJianyi"},[t.suiWuFileList.length>0?[e("div",{staticClass:"list"},t._l(t.suiWuFileList,(function(a,i){return e("div",{key:a.id,staticClass:"item",on:{click:function(e){return t.downloadFile(a)}}},[e("div",{staticClass:"itemTile"},[t._v(t._s(a.year))]),e("div",{staticClass:"main"},[e("i",{staticClass:"iconfile fa fa-file-o"}),e("div",{staticClass:"middle"},[e("div",{staticClass:"name"},[t._v(" "+t._s(a.name_arr)+" ")]),e("div",{staticClass:"riqi"},[t._v(" 签发日期:"+t._s(a.date)+" ")])]),e("i",{staticClass:"fa fa-angle-right iconNext"})])])})),0)]:e("div",[t._v("暂无数据")])],2):t._e()],1)]),e("HomeFooter"),e("el-dialog",{staticClass:"searchModal",attrs:{title:t.taxInfoObj.name?t.$t("tax.bianjisuiwuxinxi"):t.$t("tax.tianjiasuiwuxinxi"),visible:t.NaSuiDialogVisible,width:"524px",center:""},on:{"update:visible":function(e){t.NaSuiDialogVisible=e}}},[e("div",{staticClass:"modalMain"},[e("div",{staticClass:"title"},[t._v(t._s(t.$t("tax.shouxianqingxuanze")))]),e("div",{staticClass:"item item1"},[e("el-radio",{attrs:{label:"美国"},model:{value:t.guojiaRadioVal,callback:function(e){t.guojiaRadioVal=e},expression:"guojiaRadioVal"}},[t._v(" "+t._s(t.$t("tax.meiguo")))])],1),e("div",{staticClass:"item"},[e("el-radio",{attrs:{label:"other"},model:{value:t.guojiaRadioVal,callback:function(e){t.guojiaRadioVal=e},expression:"guojiaRadioVal"}},[t._v(" "+t._s(t.$t("tax.qitagouojia")))])],1),e("el-cascader",{directives:[{name:"show",rawName:"v-show",value:"other"==t.guojiaRadioVal,expression:"guojiaRadioVal == 'other'"}],staticClass:"areaCon",attrs:{options:t.areaList,props:{value:"name",label:"name_arr",children:"children",expandTrigger:"hover"}},model:{value:t.NaSuiAreaVal,callback:function(e){t.NaSuiAreaVal=e},expression:"NaSuiAreaVal"}}),e("div",{staticClass:"jpBtnGreen btnConfirm",on:{click:t.jumpNaSuiAdd}},[t._v(" "+t._s(t.$t("tax.jixu"))+" ")])],1)]),e("el-dialog",{staticClass:"searchModal2",attrs:{title:t.taxInfoObj.name?t.$t("tax.bianjizengzhisuixinxi"):t.$t("tax.tianjiazengzhisuixinxi"),visible:t.ZengZhiSuiDialogVisible,width:"460px",center:""},on:{"update:visible":function(e){t.ZengZhiSuiDialogVisible=e}}},[e("div",{staticClass:"modalMain"},[e("div",{staticClass:"title"},[t._v(" "+t._s(t.$t("tax.ruguoningzaioumeng"))+" ")]),e("el-form",{ref:"refRuleForm",attrs:{model:t.ruleForm,rules:t.rules}},[e("el-form-item",{attrs:{prop:"country"}},[e("el-cascader",{staticClass:"countrySelect",attrs:{options:t.areaList,placeholder:t.$t("tax.guojiahuodiqu"),props:{value:"name",label:"name_arr",children:"children",expandTrigger:"hover",checkStrictly:!0}},model:{value:t.ruleForm.country,callback:function(e){t.$set(t.ruleForm,"country",e)},expression:"ruleForm.country"}})],1),e("el-form-item",{attrs:{prop:"tax_num"}},[e("el-input",{staticClass:"inpItem",attrs:{placeholder:t.$t("tax.tianjiazengzhisuihao")},model:{value:t.ruleForm.tax_num,callback:function(e){t.$set(t.ruleForm,"tax_num",e)},expression:"ruleForm.tax_num"}})],1),e("el-form-item",{staticClass:"codeFormItem",attrs:{prop:"register_name"}},[e("el-input",{staticClass:"inpItem",attrs:{placeholder:t.$t("tax.zhuchemingcheng")},model:{value:t.ruleForm.register_name,callback:function(e){t.$set(t.ruleForm,"register_name",e)},expression:"ruleForm.register_name"}})],1),e("el-form-item",{staticClass:"codeFormItem",attrs:{prop:"address_1"}},[e("el-input",{staticClass:"inpItem",attrs:{placeholder:t.$t("tax.dizhihang1")},model:{value:t.ruleForm.address_1,callback:function(e){t.$set(t.ruleForm,"address_1",e)},expression:"ruleForm.address_1"}})],1),e("el-form-item",{staticClass:"codeFormItem",attrs:{prop:"address_2"}},[e("el-input",{staticClass:"inpItem",attrs:{placeholder:t.$t("tax.dizhihang2")},model:{value:t.ruleForm.address_2,callback:function(e){t.$set(t.ruleForm,"address_2",e)},expression:"ruleForm.address_2"}})],1),e("el-form-item",{staticClass:"codeFormItem",attrs:{prop:"city"}},[e("el-input",{staticClass:"inpItem",attrs:{placeholder:t.$t("tax.chengshi")},model:{value:t.ruleForm.city,callback:function(e){t.$set(t.ruleForm,"city",e)},expression:"ruleForm.city"}})],1),e("el-form-item",{staticClass:"codeFormItem",attrs:{prop:"province"}},[e("el-input",{staticClass:"inpItem",attrs:{placeholder:t.$t("tax.shenfenhuodiqu")},model:{value:t.ruleForm.province,callback:function(e){t.$set(t.ruleForm,"province",e)},expression:"ruleForm.province"}})],1),e("el-form-item",{staticClass:"codeFormItem",attrs:{prop:"post_code"}},[e("el-input",{staticClass:"inpItem",attrs:{placeholder:t.$t("tax.youzhengbianma")},model:{value:t.ruleForm.post_code,callback:function(e){t.$set(t.ruleForm,"post_code",e)},expression:"ruleForm.post_code"}})],1)],1),e("div",{staticClass:"jpBtnGreen btnConfirm",on:{click:t.ZengZhiSuiSubmit}},[t._v(" "+t._s(t.$t("tax.queren"))+" ")])],1)])],1)},s=[],r=(a(7658),a(8651)),l=a(3530),o=a(1206),n={name:"login",components:{HomeHeader:r.Z,HomeFooter:l.Z},data(){return{currentTab:"new",currentTabLabel:"纳税人",tabList:[{id:1,lable:this.$t("tax.nasuiren"),num:"0",name:"new",status:"纳税人"},{id:2,lable:this.$t("tax.nasuiwenjian"),num:"0",name:"all",status:"纳税文件"}],NaSuiDialogVisible:!1,ZengZhiSuiDialogVisible:!1,guojiaRadioVal:1,ruleForm:{country:[],tax_num:"",register_name:"",address_1:"",address_2:"",city:"",province:"",post_code:""},rules:{country:[{required:!0,message:"不能为空",trigger:["blur","change"]}],tax_num:[{required:!0,message:"不能为空",trigger:"blur"}],register_name:[{required:!0,message:"不能为空",trigger:"blur"}],address_1:[{required:!0,message:"不能为空",trigger:"blur"}],city:[{required:!0,message:"不能为空",trigger:"blur"}],province:[{required:!0,message:"不能为空",trigger:"blur"}],post_code:[{required:!0,message:"不能为空",trigger:"blur"}]},areaList:[],NaSuiAreaVal:[],taxInfoObj:{},zengZhiSuiInfoObj:{},suiWuFileList:[]}},mounted(){this.getAreaList(),this.getTaxInfo(),this.getZengZhiSuiInfo(),this.getTaxFile()},methods:{getTaxFile(){(0,o.FqK)().then((t=>{if(200==t.code){let e=t.data;this.suiWuFileList=e.data}}))},jumpNaSuiAdd(){let t="";if(t="美国"==this.guojiaRadioVal?"美国":this.NaSuiAreaVal.toString(),!t)return this.$message.error(this.$t("tax.qingxuanzeguojiahuodiqu")),!1;this.$router.push({path:"/taxAdd",query:{area:t}})},onSubmit(){},JumpDetail(){this.$router.push({path:"/CourseDetail"})},tabChangeTap(t,e){console.log("tab",t),this.currentTabLabel=t.$attrs.status},getAreaList(){(0,o.TVX)().then((t=>{if(200==t.code){let e=t.data;this.areaList=this.DataConverter(e)}}))},DataConverter(t){for(let e of t){e.children=e.city;for(let t of e.children)t.children=t.area}return t},handleChange(){},getTaxInfo(){(0,o.olk)().then((t=>{if(200==t.code){let e=t.data;this.taxInfoObj=e}}))},ZengZhiSuiSubmit(){let t=o.mob;this.zengZhiSuiInfoObj?.name&&(t=o.oB),this.$refs["refRuleForm"].validate((e=>{if(e){const e={country:this.ruleForm?.country?.toString(),tax_num:this.ruleForm.tax_num,register_name:this.ruleForm.register_name,address_1:this.ruleForm.address_1,address_2:this.ruleForm.address_2,city:this.ruleForm.city,province:this.ruleForm.province,post_code:this.ruleForm.post_code};console.log("console_data",JSON.parse(JSON.stringify(e))),t(e).then((t=>{200==t.code&&(this.$message.success(this.$t("tax.tijiaochenggong")),this.ZengZhiSuiDialogVisible=!1,this.getZengZhiSuiInfo())}))}}))},getZengZhiSuiInfo(){(0,o.fIe)().then((t=>{if(200==t.code){let e=t.data;if(!e)return!1;this.zengZhiSuiInfoObj=e,this.ruleForm.country=e.country.split(","),this.ruleForm.tax_num=e.tax_num,this.ruleForm.register_name=e.name,this.ruleForm.address_1=e.address_1,this.ruleForm.address_2=e.address_2,this.ruleForm.city=e.city,this.ruleForm.province=e.province,this.ruleForm.post_code=e.post_code}}))},downloadFile(t){console.log("citem.file",JSON.parse(JSON.stringify(t.file))),window.open(t.file,"_blank","noopener,noreferrer,resizable")}}},u=n,c=a(1001),d=(0,c.Z)(u,i,s,!1,null,"28d8e8b0",null),m=d.exports}}]);