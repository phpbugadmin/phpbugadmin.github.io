"use strict";(self["webpackChunkframe"]=self["webpackChunkframe"]||[]).push([[7420],{7420:function(t,a,s){s.r(a),s.d(a,{default:function(){return m}});var e=function(){var t=this,a=t._self._c;return a("div",{staticClass:"container"},[a("HomeHeader",{attrs:{topimgIsShow:!1}}),a("div",{staticClass:"center"},[a("div",{staticClass:"layoutLeft"},[a("div",{staticClass:"toptitle"},[t._v(" "+t._s(t.$t("ShopXiadan.querenbingfukuan"))+" ")]),t.shopList.length>0?t._l(t.shopList,(function(s,e){return a("div",{key:s.id,staticClass:"shopItem"},[a("div",{staticClass:"classroomName"},[t._v(" "+t._s(s.goods_name)+" ")]),a("div",{staticClass:"detailCon"},[a("div",{staticClass:"left"},[a("div",{staticClass:"item"},[a("div",{staticClass:"text"},[t._v(" $"+t._s(t._f("moneyFormat")(s.price))+" USD ")])])]),a("div",{staticClass:"right"},[a("div",{staticClass:"item"},[a("div",{staticClass:"text"},[t._v(" SKU: "+t._s(s.goods_spec)+" ")])])])])])})):[a("div",{staticClass:"zanwudata"},[t._v(" "+t._s(t.$t("ShopXiadan.zanwushangpin"))+" ")])],a("Zhifu",{staticClass:"zhifuCon",attrs:{shopType:"shop",AddData:t.payAddData}})],2),a("div",{staticClass:"layoutRight"},[a("div",{staticClass:"topInfo"},[a("div",{staticClass:"listCon"},t._l(t.shopList,(function(s,e){return a("div",{key:s.id,staticClass:"topItem"},[a("img",{staticClass:"img",attrs:{src:s.goods_image[0],alt:""}}),a("div",{staticClass:"middle"},[a("div",{staticClass:"title"},[t._v(" "+t._s(s.goods_name)+" ")]),a("div",{staticClass:"desc"},[t._v(" "+t._s(s.goods_description)+" ")])])])})),0),a("div",{staticClass:"hr visiHide"}),a("div",{staticClass:"infoCon"},[a("div",{staticClass:"row row3"},[a("div",{staticClass:"left"},[t._v(" "+t._s(t.$t("ShopXiadan.jiagegoumai"))+" ")]),a("div",{staticClass:"right"},[t._v(" $"+t._s(t._f("moneyFormat")(t.detailObj.total_price))+" ")])]),a("div",{staticClass:"row row3"},[a("div",{staticClass:"left"},[t._v(" "+t._s(t.$t("ShopXiadan.jifengoumai"))+" ")]),a("div",{staticClass:"right"},[t._v(" "+t._s(t.detailObj.total_score)+t._s(t.$t("ShopXiadan.jifen"))+" ")])])])]),a("div",{staticClass:"Contre"},[a("div",{staticClass:"title"},[t._v(t._s(t.$t("ShopXiadan.shouhuodizhi")))]),a("el-form",{ref:"refRuleForm",staticClass:"elForm",attrs:{model:t.payAddData,rules:t.RuleFormRules}},[a("div",{staticClass:"towRow"},[a("el-form-item",{staticClass:"elFormItem elFormItem2",attrs:{prop:"fistName"}},[a("el-input",{staticClass:"inpItem inpItem1",attrs:{placeholder:"Fist name"},model:{value:t.payAddData.fistName,callback:function(a){t.$set(t.payAddData,"fistName",a)},expression:"payAddData.fistName"}})],1),a("el-form-item",{staticClass:"elFormItem",attrs:{prop:"lastName"}},[a("el-input",{staticClass:"inpItem inpItem1",attrs:{placeholder:"last name"},model:{value:t.payAddData.lastName,callback:function(a){t.$set(t.payAddData,"lastName",a)},expression:"payAddData.lastName"}})],1)],1),a("el-form-item",{staticClass:"elFormItem",attrs:{prop:"address"}},[a("el-input",{staticClass:"inpItem inpItem1",attrs:{placeholder:"Address"},model:{value:t.payAddData.address,callback:function(a){t.$set(t.payAddData,"address",a)},expression:"payAddData.address"}})],1),a("el-form-item",{staticClass:"elFormItem",attrs:{prop:"apartment"}},[a("el-input",{staticClass:"inpItem inpItem1",attrs:{placeholder:"Apartment,suite,etc.(optional)"},model:{value:t.payAddData.apartment,callback:function(a){t.$set(t.payAddData,"apartment",a)},expression:"payAddData.apartment"}})],1),a("el-form-item",{staticClass:"elFormItem",attrs:{prop:"city"}},[a("el-input",{staticClass:"inpItem inpItem1",attrs:{placeholder:"City"},model:{value:t.payAddData.city,callback:function(a){t.$set(t.payAddData,"city",a)},expression:"payAddData.city"}})],1),a("el-form-item",{staticClass:"elFormItem",attrs:{prop:"phone"}},[a("el-input",{staticClass:"inpItem inpItem1",attrs:{placeholder:"Phone(optional)"},model:{value:t.payAddData.phone,callback:function(a){t.$set(t.payAddData,"phone",a)},expression:"payAddData.phone"}})],1)],1)],1)])])],1)},i=[],l=(s(7658),s(4631)),d=s(9851),o=s(1206),r={name:"headercom",components:{HomeHeader:l.Z,Zhifu:d.Z},data(){return{detailObj:{},shopList:[],payAddData:{cart_ids:"",fistName:"",lastName:"",address:"",apartment:"",city:"",phone:""},RuleFormRules:{fistName:[{required:!0,message:this.$t("ShopXiadan.bunengweikong"),trigger:"blur"}],lastName:[{required:!0,message:this.$t("ShopXiadan.bunengweikong"),trigger:"blur"}],address:[{required:!0,message:this.$t("ShopXiadan.bunengweikong"),trigger:"blur"}],city:[{required:!0,message:this.$t("ShopXiadan.bunengweikong"),trigger:"blur"}],phone:[{required:!0,message:this.$t("ShopXiadan.bunengweikong"),trigger:"blur"}]}}},watch:{},created(){this.getCartGoodsPayPage()},methods:{getCartGoodsPayPage(){let t=this.$route.query.ids;(0,o.vKo)({cart_ids:t}).then((t=>{if(200==t.code){let a=t.data;this.detailObj=a,this.shopList=a.list;let s=[];for(let t of this.shopList)s.push(t.id);let e=s.toString();this.payAddData.cart_ids=e}}))}}},n=r,p=s(1001),c=(0,p.Z)(n,e,i,!1,null,"be95ce74",null),m=c.exports}}]);