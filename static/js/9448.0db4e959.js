"use strict";(self["webpackChunkframe"]=self["webpackChunkframe"]||[]).push([[9448],{9448:function(t,e,a){a.r(e),a.d(e,{default:function(){return x}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container wallet"},[e("HomeHeader",{staticClass:"header",attrs:{topimgIsShow:!1}}),e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"listCon mainContent"},[t.walletObj?e("div",{staticClass:"center"},[e("div",{staticClass:"top"},[e("div",{staticClass:"item cardBox"},[e("div",{staticClass:"topLine"},[e("div",{staticClass:"title"},[t._v(t._s(t.$t("mywallet.qianbaoyue")))]),e("div",{staticClass:"money"},[e("span",[t._v("$")]),t._v(t._s(t.walletObj.balance))])]),e("div",{staticClass:"flexBtm"},[e("div",{staticClass:"jiluCon",on:{click:t.goRecords}},[e("div",{staticClass:"text"},[t._v(" "+t._s(t.$t("mywallet.assets_records"))+" ")]),e("i",{staticClass:"icon fa fa-angle-right"})]),e("div",{staticClass:"rhtBtm"},[e("div",{staticClass:"btn bntTixian1",on:{click:function(e){t.accountDialogVisible=!0}}},[t._v(" "+t._s(t.$t("mywallet.withdraw_account"))+" ")]),e("div",{staticClass:"btn bntTixian2",on:{click:t.showWithdrawDialog}},[t._v(" "+t._s(t.$t("mywallet.tixian"))+" ")])])])]),e("div",{staticClass:"item item1"},[e("div",{staticClass:"liBox"},[e("div",{staticClass:"title2"},[t._v(" "+t._s(t.$t("mywallet.topup_amount"))+" ")]),e("div",{staticClass:"money2"},[t._v(" $"+t._s(t.walletObj.recharge_money_all)+" ")]),e("div",{staticClass:"jiluCon"},[e("div",{staticClass:"text2"},[e("div",{staticClass:"line"},[e("div",{staticClass:"lab"},[t._v(t._s(t.$t("mywallet.actual_topup_amount")))]),e("span",[t._v("$"+t._s(t.walletObj.recharge_money_real))])]),e("div",{staticClass:"line"},[e("div",{staticClass:"lab"},[t._v(t._s(t.$t("mywallet.giving_amount")))]),e("span",[t._v("$"+t._s(t.walletObj.recharge_money_gift))])])])])]),e("div",{staticClass:"liBox"},[e("div",{staticClass:"title2"},[t._v(" "+t._s(t.$t("mywallet.operating_income"))+" ")]),e("div",{staticClass:"money2"},[t._v("$"+t._s(t.walletObj.order_money_all))]),e("div",{staticClass:"jiluCon"},[e("div",{staticClass:"text2"},[e("div",{staticClass:"line"},[e("div",{staticClass:"lab"},[t._v(" "+t._s(t.$t("mywallet.current_income")))]),e("span",[t._v("$"+t._s(t.walletObj.order_money_available))])]),e("div",{staticClass:"line"},[e("div",{staticClass:"lab"},[t._v(" "+t._s(t.$t("mywallet.future_income")))]),e("span",[t._v("$"+t._s(t.walletObj.order_money_unavailable))])])])])]),e("div",{staticClass:"liBox"},[e("div",{staticClass:"title2"},[t._v(" "+t._s(t.$t("mywallet.invite_reward"))+" ")]),e("div",{staticClass:"money3"},[t._v("$"+t._s(t.walletObj.promotion_money_all))]),e("div",{staticClass:"jiluCon"},[e("div",{staticClass:"text2"},[e("div",{staticClass:"line"},[e("div",{staticClass:"lab"},[t._v(t._s(t.$t("mywallet.reward_amount")))]),e("span",[t._v("$"+t._s(t.walletObj.promotion_money_available))])])])])])])]),e("div",{staticClass:"twoCon"},[e("div",[e("div",{staticClass:"title"},[t._v(t._s(t.$t("mywallet.chongzhi")))]),e("div",{staticClass:"chongzhiList"},t._l(t.rechargeConfigList,(function(a,i){return e("div",{key:a.id,staticClass:"item",class:{active:t.topUpItem?.id===a.id},on:{click:function(e){return t.onTopupItemSelect(a)}}},[t._m(0,!0),e("div",{staticClass:"leftText1"},[t._v("$"),e("span",[t._v(t._s(t.$utils.calc.plus(a.price,a.give_price)))])]),e("div",{staticClass:"righttext"},[e("span",{staticClass:"title"},[t._v(t._s(t.$t("mywallet.price")))]),t._v(" "),e("span",{staticClass:"price"},[t._v("$"+t._s(Number(a.price)))])]),e("div",{staticClass:"leftText2"},[e("span",{staticClass:"title"},[t._v(t._s(t.$t("mywallet.give")))]),t._v(" "),e("span",{staticClass:"discount"},[t._v("$"+t._s(Number(a.give_price)))])])])})),0)]),e("div",[e("div",{staticClass:"left"},[e("el-checkbox",{staticClass:"check",model:{value:t.topUpAgreeChecked,callback:function(e){t.topUpAgreeChecked=e},expression:"topUpAgreeChecked"}}),e("span",{staticClass:"text"},[t._v(t._s(t.$t("mywallet.wotongyi")))]),e("router-link",{staticClass:"lefta",attrs:{to:"/privacyAgreement?type=zhifu"}},[t._v(" "+t._s(t.$t("Zhifu.policy")))])],1),e("el-button",{staticClass:"btn",attrs:{type:"primary",round:"",disabled:!t.topUpItem},on:{click:t.doTopUp}},[t._v(" "+t._s(t.$t("mywallet.chongzhi"))+" ")])],1)])]):t._e()]),t.accountDialogVisible?e("create-account-dialog",{model:{value:t.accountDialogVisible,callback:function(e){t.accountDialogVisible=e},expression:"accountDialogVisible"}}):t._e(),t.topUpDialogVisible?e("withdraw-dialog",{on:{onEditAccount:function(e){t.accountDialogVisible=!0}},model:{value:t.topUpDialogVisible,callback:function(e){t.topUpDialogVisible=e},expression:"topUpDialogVisible"}}):t._e(),e("HomeFooter",{staticClass:"footer"})],1)},s=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"rhtTop"},[e("i",{staticClass:"el-icon-check inner"})])}],l=(a(7658),a(4984)),o=a(1490),n=a(1206),r=function(){var t=this,e=t._self._c;return e("el-dialog",{staticClass:"searchModal2",attrs:{title:t.$t("mywallet.withdraw_account"),visible:t.dialogVisible,width:"460px","close-on-click-modal":!1,"append-to-body":"",center:""},on:{"update:visible":function(e){t.dialogVisible=e},close:()=>t.$emit("input",!1)}},[e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"modalMain"},[e("el-form",{ref:"refRuleForm",staticClass:"form",attrs:{model:t.ruleForm,rules:t.rules,"label-position":"top"}},[e("el-form-item",{attrs:{prop:"firstname",label:t.$t("mywallet.first_name")}},[e("el-input",{staticClass:"inpItem",attrs:{maxLength:30},model:{value:t.ruleForm.firstname,callback:function(e){t.$set(t.ruleForm,"firstname",e)},expression:"ruleForm.firstname"}})],1),e("el-form-item",{staticClass:"codeFormItem",attrs:{prop:"lastname",label:t.$t("mywallet.last_name")}},[e("el-input",{staticClass:"inpItem",attrs:{maxLength:30},model:{value:t.ruleForm.lastname,callback:function(e){t.$set(t.ruleForm,"lastname",e)},expression:"ruleForm.lastname"}})],1),e("el-form-item",{staticClass:"codeFormItem",attrs:{prop:"routing_no",label:t.$t("mywallet.path_no")}},[e("el-input",{staticClass:"inpItem",attrs:{type:"number"},model:{value:t.ruleForm.routing_no,callback:function(e){t.$set(t.ruleForm,"routing_no",e)},expression:"ruleForm.routing_no"}})],1),e("el-form-item",{staticClass:"codeFormItem",attrs:{prop:"account_no",label:t.$t("mywallet.bank_account")}},[e("el-input",{staticClass:"inpItem",attrs:{type:"number",maxLength:30},model:{value:t.ruleForm.account_no,callback:function(e){t.$set(t.ruleForm,"account_no",e)},expression:"ruleForm.account_no"}})],1),e("el-form-item",{staticClass:"codeFormItem",attrs:{label:t.$t("mywallet.cfm_bank_account"),prop:"cfm_account_no"}},[e("el-input",{staticClass:"inpItem",attrs:{type:"number"},model:{value:t.ruleForm.cfm_account_no,callback:function(e){t.$set(t.ruleForm,"cfm_account_no",e)},expression:"ruleForm.cfm_account_no"}})],1),e("el-form-item",{staticClass:"codeFormItem",attrs:{prop:"billing_address",label:t.$t("mywallet.address")}},[e("el-input",{staticClass:"inpItem",attrs:{type:"textarea","show-word-limit":"",maxLength:250},model:{value:t.ruleForm.billing_address,callback:function(e){t.$set(t.ruleForm,"billing_address",e)},expression:"ruleForm.billing_address"}})],1),e("el-form-item",{staticClass:"codeFormItem",attrs:{prop:"email",label:t.$t("mywallet.email")}},[e("el-input",{staticClass:"inpItem",attrs:{maxLength:100},model:{value:t.ruleForm.email,callback:function(e){t.$set(t.ruleForm,"email",e)},expression:"ruleForm.email"}})],1),e("el-form-item",{staticClass:"codeFormItem",attrs:{prop:"birthday",label:t.$t("mywallet.birthday")}},[e("el-date-picker",{staticClass:"inpItem",attrs:{type:"date","value-format":"yyyy-MM-dd"},model:{value:t.ruleForm.birthday,callback:function(e){t.$set(t.ruleForm,"birthday",e)},expression:"ruleForm.birthday"}})],1)],1),e("div",{staticClass:"jpBtnGreen btnConfirm",on:{click:t.save}},[t._v(" "+t._s(t.ruleForm.id?t.$t("mywallet.cfm_modify"):t.$t("mywallet.cfm_add"))+" ")])],1)])},c=[],m={name:"CreateAccountDialog",props:["value"],data(){let t=(t,e,a)=>{e!==this.ruleForm.account_no?a(new Error(this.$t("mywallet.not_same"))):a()};return{dialogVisible:!1,ruleForm:{id:"",accountType:"",firstname:"",lastname:"",routing_no:"",account_no:"",cfm_account_no:"",billing_address:"",email:"",birthday:""},rules:{firstname:[{required:!0,message:this.$t("mywallet.required"),trigger:["blur","change"]}],lastname:[{required:!0,message:this.$t("mywallet.required"),trigger:["blur","change"]}],routing_no:[{required:!0,message:this.$t("mywallet.required"),trigger:["blur","change"]}],account_no:[{required:!0,message:this.$t("mywallet.required"),trigger:["blur","change"]}],cfm_account_no:[{required:!0,message:this.$t("mywallet.required"),trigger:["blur","change"]},{validator:t,trigger:"blur"}],billing_address:[{required:!0,message:this.$t("mywallet.required"),trigger:["blur","change"]}],email:[{required:!0,message:this.$t("mywallet.required"),trigger:["blur","change"]},{pattern:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,message:this.$t("mywallet.format_incorrect"),trigger:["blur"]}],birthday:[{required:!0,message:this.$t("mywallet.required"),trigger:["blur","change"]}]},loading:!1,submitting:!1}},created(){this.dialogVisible=!!this.value,this.getAccountInfo()},watch:{value(t){this.dialogVisible=t},"ruleForm.routing_no"(t){t.length>9&&this.$nextTick((()=>{this.ruleForm.routing_no=t.substring(0,9)}))},"ruleForm.account_no"(t){t.length>30&&this.$nextTick((()=>{this.ruleForm.account_no=t.substring(0,30)}))},"ruleForm.cfm_account_no"(t){t.length>30&&this.$nextTick((()=>{this.ruleForm.cfm_account_no=t.substring(0,30)}))}},methods:{async getAccountInfo(){this.loading=!0;try{const t=await(0,n.nAi)();if(200===t.code){let e=t.data,a=e;a&&(this.ruleForm={id:a.id,accountType:a.type,firstname:a.name,lastname:a.last_name,routing_no:a.path_num,account_no:a.bank_num,cfm_account_no:a.bank_num,billing_address:a.bill_address,email:a.email,birthday:a.brithday})}}catch(t){console.error(t)}this.loading=!1},async save(){this.submitting=!0;try{await this.$refs["refRuleForm"].validate();const t={type:this.ruleForm.accountType,name:this.ruleForm.firstname,last_name:this.ruleForm.lastname,path_num:this.ruleForm.routing_no,bank_num:this.ruleForm.account_no,affirm_bank_num:this.ruleForm.cfm_account_no,bill_address:this.ruleForm.billing_address,email:this.ruleForm.email,brithday:this.ruleForm.birthday};let e=n.HQm;this.ruleForm?.id&&(e=n.KV7);const a=await e(t);200===a.code&&(this.$message.success(this.$t("ShoppingCart.caozuochenggong")),this.dialogVisible=!1)}catch(t){console.error(t)}this.submitting=!1}}},u=m,d=a(1001),_=(0,d.Z)(u,r,c,!1,null,"eb198f3e",null),g=_.exports,h=function(){var t=this,e=t._self._c;return e("el-dialog",{staticClass:"searchModal3",attrs:{title:t.$t("mywallet.withdraw_apply"),visible:t.dialogVisible,width:"460px","append-to-body":"","close-on-click-modal":!1,center:""},on:{"update:visible":function(e){t.dialogVisible=e},close:()=>t.$emit("input",!1)}},[e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"modalMain"},[e("div",[e("div",{staticClass:"tixianZhangHuCon",on:{click:t.onAccountClick}},[t.accountInfo?e("div",{staticClass:"num"},[e("div",{staticClass:"num1"},[t._v(t._s(`${t.accountInfo.name} ${t.accountInfo.last_name}`))]),e("div",{staticClass:"num2"},[t._v(t._s(t.accountInfo.bank_num))])]):e("div",{staticClass:"place-holder"},[t._v(" "+t._s(t.$t("mywallet.pls_add_account"))+" ")]),e("i",{staticClass:"el-icon-arrow-right"})])]),e("div",[e("div",{staticClass:"form"},[e("div",{staticClass:"balance"},[t._v(t._s(t.$t("mywallet.withdraw_balance"))+" "),e("span",[t._v("$"+t._s(t.walletObj.balance)+" ")])]),e("el-form",{ref:"refTixianRuleForm",attrs:{model:t.tixianRuleForm,rules:t.tixianRules}},[e("el-form-item",{attrs:{prop:"jinE"}},[e("div",{staticClass:"inputs"},[e("span",[t._v("$")]),e("el-input",{staticClass:"inpItem",attrs:{placeholder:""},model:{value:t.tixianRuleForm.jinE,callback:function(e){t.$set(t.tixianRuleForm,"jinE",e)},expression:"tixianRuleForm.jinE"}})],1)])],1)],1)]),e("el-button",{staticClass:"btnConfirm",attrs:{type:"primary",round:"",disabled:!t.accountInfo,loading:t.submitting},on:{click:t.tixianConfirm}},[t._v(" "+t._s(t.$t("mywallet.submit_apply"))+" ")])],1)])},p=[],b={name:"WithdrawDialog",props:["value"],data(){return{dialogVisible:!1,walletObj:{},tixianRuleForm:{jinE:""},tixianRules:{jinE:[{required:!0,message:this.$t("mywallet.required"),trigger:["blur","change"]},{pattern:/^(?!0\d)\d{1,7}(?:,\d{3})*(?:\.\d{1,2})?$/,message:this.$t("mywallet.format_incorrect")}]},accountInfo:null,loading:!1,submitting:!1}},created(){this.dialogVisible=!!this.value,this.getAccountInfo()},watch:{value(t){this.dialogVisible=t},"tixianRuleForm.jinE"(t){console.log(t),Number(t)>Number(this.walletObj.balance)&&this.$nextTick((()=>{this.tixianRuleForm.jinE=Number(this.walletObj.balance)}))}},methods:{async getAccountInfo(){this.loading=!0;try{const t=await Promise.all([(0,n.nAi)(),(0,n.fKV)()]);200===t[0].code&&(this.accountInfo=t[0].data),200===t[1].code&&(this.walletObj=t[1].data)}catch(t){console.error(t)}this.loading=!1},async tixianConfirm(){if(!this.accountInfo?.bank_num)return this.$message.error(this.$t("mywallet.pls_add_account")),!1;this.submitting=!0;try{await this.$refs["refTixianRuleForm"].validate();let t={price:this.tixianRuleForm.jinE};const e=await(0,n.Hy2)(t);200===e.code&&(this.$message.success(this.$t("mywallet.submit_success")),this.dialogVisible=!1)}catch(t){console.error(t)}this.submitting=!1},onAccountClick(){this.$emit("onEditAccount"),this.dialogVisible=!1}}},v=b,f=(0,d.Z)(v,h,p,!1,null,"50f0238f",null),C=f.exports,y={name:"login",components:{WithdrawDialog:C,CreateAccountDialog:g,HomeHeader:l.Z,HomeFooter:o.Z},data(){return{currentTab:"new",currentTabIndex:0,currentActive:0,query:{page:1,rows:10,status:0},walletObj:null,topUpAgreeChecked:!1,rechargeConfigList:"",accountDialogVisible:!1,topUpDialogVisible:!1,topUpItem:null,loading:!1}},mounted(){this.getWallet(),this.getRechargeConfig()},methods:{goRecords(){this.$router.push({path:"/expenseDetails"})},async getWallet(){this.loading=!0;try{const t=await(0,n.fKV)();if(200===t.code){let e=t.data;this.walletObj=e}}catch(t){console.error(t)}this.loading=!1},async getRechargeConfig(){try{const t=await(0,n.k2)();if(200===t.code){let e=t.data,a=e;for(let t of a)t.select=!1;this.rechargeConfigList=a}}catch(t){console.error(t)}},onTopupItemSelect(t){this.topUpItem=t},async doTopUp(){if(!this.topUpAgreeChecked)return this.$message.error(this.$t("mywallet.qingxiantongyijiaoyishuoming")),!1;let t={recharge_id:this.topUpItem.id,money:""};try{const e=await(0,n.QSV)(t);if(200===e.code){let t=e.data;this.$alert(this.$t("mywallet.chongzhiwanchenghou"),this.$t("mywallet.tishi"),{confirmButtonText:this.$t("mywallet.quedingbingshuaxin"),callback:t=>{location.reload()}}),window.open(t,"_blank")}}catch(e){console.error(e)}},showWithdrawDialog(){this.topUpDialogVisible=!0,this.getWallet()}}},w=y,$=(0,d.Z)(w,i,s,!1,null,"5ed7dd78",null),x=$.exports}}]);