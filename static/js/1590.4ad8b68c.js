"use strict";(self["webpackChunkframe"]=self["webpackChunkframe"]||[]).push([[1590],{1590:function(e,t,s){s.r(t),s.d(t,{default:function(){return u}});var i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("HomeHeader",{attrs:{topimgIsShow:!1}}),t("div",{staticClass:"center"},[t("div",{staticClass:"layoutLeft"},[t("img",{staticClass:"img",attrs:{src:e.currentShowImgUrl,alt:""}})]),t("div",{staticClass:"layoutRight"},[t("div",{staticClass:"title"},[e._v(" "+e._s(e.detailObj.name)+" ")]),t("div",{staticClass:"priceCon"},[t("div",{staticClass:"left"},[e._v("$"+e._s(e.detailObj.price)+" USD")]),t("div",{staticClass:"middle"},[e._v("SKU: "+e._s(e.detailObj.sku))]),t("div",{staticClass:"right"},[e._v(" "+e._s(e.detailObj.score)+e._s(e.$t("ShopDetail.jifen"))+" ")])]),t("div",{staticClass:"stitle stitle1"},[e._v(e._s(e.$t("ShopDetail.yangshi")))]),t("div",{staticClass:"imglistCon"},e._l(e.goodsSpec,(function(s,i){return t("img",{key:s.id,staticClass:"item",class:{active:s.itemSelect},attrs:{src:s.images_text[0],alt:""},on:{click:function(t){return e.yangshiSelect(s)}}})})),0),t("div",{staticClass:"stitle stitle2"},[e._v(e._s(e.$t("ShopDetail.daxiao")))]),t("div",{staticClass:"sizesCon"},e._l(e.currentShowGood.spec_text,(function(s,i){return t("div",{key:s.size,staticClass:"item",class:{active:s.sizeSelect},on:{click:function(t){return e.sizeSelectFun(s)}}},[e._v(" "+e._s(s.size)+" ")])})),0),t("div",{staticClass:"stitle stitle3"},[e._v(" "+e._s(e.$t("ShopDetail.shuliang"))+" ")]),t("el-input-number",{staticClass:"buynumClass",attrs:{size:"small",min:0,max:100,label:"数量"},model:{value:e.buyNum,callback:function(t){e.buyNum=t},expression:"buyNum"}}),t("div",{staticClass:"jpBtnGreen btn1",on:{click:e.AddShoppingCart}},[e._v(" "+e._s(e.$t("ShopDetail.jiarugouwuche"))+" ")]),t("div",{staticClass:"jpBtnGreen btn2",on:{click:e.Shenqingfenxiao}},[e._v(" "+e._s(e.$t("ShopDetail.shenqingfenxiao"))+" ")]),t("div",{staticClass:"descConNew"},[t("el-collapse",{on:{change:e.handleChange},model:{value:e.activeNames,callback:function(t){e.activeNames=t},expression:"activeNames"}},[t("el-collapse-item",{attrs:{title:"DESCRIPTION",name:"1"}},[t("div",[e._v(" "+e._s(e.detailObj.description)+" ")])]),t("el-collapse-item",{attrs:{title:"DESIGNED FOR",name:"2"}},[t("div",[e._v(" "+e._s(e.detailObj.design_for)+" ")])]),t("el-collapse-item",{attrs:{title:"FABRIC + TECHNOLOGY",name:"3"}},[t("div",[e._v(e._s(e.detailObj.fabric))])])],1)],1)],1)]),t("HomeFooter")],1)},a=[],o=(s(7658),s(528)),l=s(9339),c=s(1206),n={name:"login",components:{HomeHeader:o.Z,HomeFooter:l.Z},data(){return{activeNames:["1"],detailObj:{},goodsSpec:{},currentShowGood:{},currentShowImgUrl:"",buyNum:1}},created(){this.getGoodsInfo()},methods:{getGoodsInfo(){let e=this.$route.query.id;(0,c.G1)({goods_id:e}).then((e=>{if(200==e.code){console.log(e);let t=e.data;this.detailObj=t;let s=t.goods_spec;for(let e of s){e.itemSelect=!1;for(let t of e.spec_text)t.sizeSelect=!1}this.goodsSpec=s,this.goodsSpec[0].itemSelect=!0,this.currentShowGood=this.goodsSpec[0],this.currentShowImgUrl=this.currentShowGood?.images_text[0]}}))},handleChange(e){console.log(e)},AddShoppingCart(){let e=this.detailObj?.id,t="",s="",i=this.buyNum;for(let o of this.goodsSpec){o.itemSelect&&(t=o.id);for(let e of o.spec_text)e.sizeSelect&&(s=e.size)}if(!t)return this.$message.error(this.$t("ShopDetail.qszshangpinyangs")),!1;if(!s)return this.$message.error(this.$t("ShopDetail.qszshangpinchicun")),!1;if(!i)return this.$message.error(this.$t("ShopDetail.qszgouwushuliang")),!1;let a={goods_id:e,goods_spec_id:t,size:s,quantity:i};console.log("data",a),(0,c.CS)(a).then((e=>{200==e.code&&(this.$message.success(this.$t("ShopDetail.jirugouwuchechenggong")),this.$router.push({path:"/ShoppingCart"}))}))},Shenqingfenxiao(){let e=this.detailObj?.id,t={goods_id:e};console.log("data",t),(0,c.lD)(t).then((e=>{200==e.code&&this.$message.success("申请成功")}))},yangshiSelect(e){for(let t of this.goodsSpec)t.itemSelect=!1;e.itemSelect=!e.itemSelect,this.$forceUpdate()},sizeSelectFun(e){for(let t of this.goodsSpec)for(let e of t.spec_text)e.sizeSelect=!1;e.sizeSelect=!e.sizeSelect,this.$forceUpdate()}}},r=n,d=s(1001),h=(0,d.Z)(r,i,a,!1,null,"40988c75",null),u=h.exports}}]);