"use strict";(self["webpackChunkframe"]=self["webpackChunkframe"]||[]).push([[360],{360:function(t,e,a){a.r(e),a.d(e,{default:function(){return d}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container mySug"},[e("HomeHeader",{attrs:{topimgIsShow:!1}}),e("div",{staticClass:"listCon"},[e("div",{staticClass:"center"},[e("div",{staticClass:"topTitle"},[t._v(t._s(t.$t("mySuggestion.jianyi")))]),e("el-tabs",{staticClass:"tab-list",on:{"tab-click":t.tabChangeTap},model:{value:t.currentTab,callback:function(e){t.currentTab=e},expression:"currentTab"}},t._l(t.tabList,(function(a){return e("el-tab-pane",{key:a.id,attrs:{name:a.name,status:a.status}},[e("template",{slot:"label"},[e("span",[t._v(t._s(a.lable))])])],2)})),1),"我的建议"==t.currentTabLabel?e("div",{staticClass:"list"},[t._l(t.List,(function(a,s){return e("div",{key:a.id,staticClass:"item"},[e("div",{staticClass:"flex"},[e("div",{staticClass:"title"},[t._v(t._s(t.$t("mySuggestion.jianyineirong")))]),e("div",{staticClass:"time"},[t._v(t._s(a.createtime))])]),e("div",{staticClass:"cont"},[t._v(" "+t._s(a.content)+" ")]),e("div",{staticClass:"imgsCon"},t._l(a.images,(function(t,a){return e("img",{key:a,staticClass:"img",attrs:{src:t}})})),0),e("div",{staticClass:"bot"},[a.is_accept?e("div",{staticClass:"cainanCon"},[e("i",{staticClass:"icon fa fa-star"}),e("div",{staticClass:"text"},[t._v(" "+t._s(t.$t("mySuggestion.yicaina"))+" ")])]):t._e()])])})),e("div",{staticClass:"fenyeCon"},[e("el-pagination",{staticClass:"fenye",attrs:{layout:"prev, pager, next",background:"","page-size":t.query.row,total:t.total},on:{"current-change":t.pageChange}})],1)],2):t._e(),"添加建议"==t.currentTabLabel?e("div",{staticClass:"addJianyi"},[e("el-form",{ref:"RefRuleForm",attrs:{model:t.RuleForm,rules:t.Rules}},[e("el-form-item",{attrs:{prop:"content"}},[e("div",{staticClass:"title"},[t._v(" "+t._s(t.$t("mySuggestion.jianyineirong"))+" ")]),e("div",{staticClass:"jinayiCon"},[e("el-input",{staticClass:"content",attrs:{type:"textarea",rows:10,"show-word-limit":!0,maxlength:"500",placeholder:t.$t("mySuggestion.qingshuruningdejianyineirong")},model:{value:t.RuleForm.content,callback:function(e){t.$set(t.RuleForm,"content",e)},expression:"RuleForm.content"}})],1)]),e("el-form-item",{attrs:{prop:"images"}},[e("div",{staticClass:"title"},[t._v(" "+t._s(t.$t("mySuggestion.zuozhengtupian"))+" ")]),e("div",{staticClass:"uploadCon"},[e("CustomElUpload",{ref:"customElUpload1",attrs:{template_type:"picture-card",upload_tip_text:t.$t("tip.size_limit"),files_limit:10,add_param_data:"",autoUpload:!0},model:{value:t.RuleForm.images,callback:function(e){t.$set(t.RuleForm,"images",e)},expression:"RuleForm.images"}})],1)])],1),e("div",{staticClass:"jpBtnGreen btnConfirm",on:{click:t.addSuggest}},[t._v(" "+t._s(t.$t("mySuggestion.queren"))+" ")])],1):t._e()],1)]),e("HomeFooter")],1)},i=[],n=(a(7658),a(690)),l=a(5435),o=a(1206),r=a(1537),u={name:"login",components:{HomeHeader:n.Z,HomeFooter:l.Z,CustomElUpload:r.Z},data(){return{currentTab:"new",currentTabLabel:"我的建议",tabList:[{id:1,lable:this.$t("mySuggestion.wodejianyi"),num:"0",name:"new",status:"我的建议"},{id:2,lable:this.$t("mySuggestion.tianjiajanyi"),num:"0",name:"all",status:"添加建议"}],total:0,query:{page:1,rows:10},List:[],RuleForm:{content:"",images:""},Rules:{content:[{required:!0,message:this.$t("mySuggestion.jianyineirongbunengweikong"),trigger:"blur"}]}}},mounted(){this.getList()},methods:{onSubmit(){},JumpDetail(){this.$router.push({path:"/CourseDetail"})},tabChangeTap(t,e){console.log("tab",t),this.currentTabLabel=t.$attrs.status},getList(){(0,o.tx2)().then((t=>{if(200==t.code){let e=t.data;this.total=e.total,this.List=e.data}}))},pageChange(t){this.query.page=t,this.getList()},addSuggest(){this.$refs["RefRuleForm"].validate((t=>{if(t){let t={content:this.RuleForm.content,images:this.RuleForm.images};(0,o.g6x)(t).then((t=>{if(200==t.code){let e=t.data;console.log("resData",e),this.$message.success(t.msg),this.RuleForm.content="",this.RuleForm.images="",this.getList()}}))}}))}}},c=u,m=a(1001),g=(0,m.Z)(c,s,i,!1,null,"5bfe266c",null),d=g.exports}}]);