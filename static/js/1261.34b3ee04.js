"use strict";(self["webpackChunkframe"]=self["webpackChunkframe"]||[]).push([[1261],{1261:function(t,s,i){i.r(s),i.d(s,{default:function(){return u}});var e=function(){var t=this,s=t._self._c;return s("div",{staticClass:"container"},[s("HomeHeader",{attrs:{topimgIsShow:!1}}),s("div",{staticClass:"listCon"},[s("div",{staticClass:"center"},[s("div",{staticClass:"top"},[s("img",{staticClass:"head",attrs:{src:i(5367),alt:""}}),s("div",{staticClass:"title"},[t._v(t._s(1===t.vuex_Language?t.promotion_info.title:t.promotion_info.title_en))]),s("div",{staticClass:"desc"},[t._v(" "+t._s(1===t.vuex_Language?t.promotion_info.content:t.promotion_info.content_en)+" ")])]),s("div",{staticClass:"shareCon"},[s("div",{staticClass:"title"},[t._v(" "+t._s(t.$t("sharePage.baningdezhuanshu"))+" ")]),s("div",{staticClass:"stitle"},[t._v(" "+t._s(t.$t("sharePage.shejiaowangluoyaoqing"))+" ")]),s("div",{staticClass:"linkCon"},[s("div",{staticClass:"linkText"},[t._v(t._s(t.linkUrl))]),s("div",{staticClass:"jpBtnGreen btn",on:{click:function(s){return t.CopyFlieLink(t.linkUrl)}}},[t._v(" "+t._s(t.$t("sharePage.fuzhilianjie"))+" ")])])]),s("div",{staticClass:"tableCon"},[s("div",{staticClass:"tabCon"},t._l(t.tabList,(function(i,e){return s("div",{key:i.id,staticClass:"item",class:{active:i.select},on:{click:function(s){return t.tabListSelect(i)}}},[t._v(" "+t._s(i.label)+" ")])})),0),s("div",{staticClass:"cusTableCon"},[s("div",{staticClass:"tdRow thRow"},[s("div",{staticClass:"td1"},[t._v(t._s(t.$t("sharePage.xuhao")))]),s("div",{staticClass:"td2"},[t._v(" "+t._s(t.$t("sharePage.yonghumingcheng"))+" ")]),s("div",{staticClass:"td3"},[t._v(" "+t._s(t.$t("sharePage.zhuceshijian"))+" ")]),s("div",{staticClass:"td4"},[t._v(" "+t._s(t.$t("sharePage.shifouzhucejiaoshi"))+" ")])]),t._l(t.List,(function(i,e){return s("div",{key:i.id,staticClass:"tdRow"},[s("div",{staticClass:"td1"},[t._v(t._s(i.id))]),s("div",{staticClass:"td2"},[t._v(" "+t._s(i.name)+" "+t._s(i.last_name)+" ")]),s("div",{staticClass:"td3"},[t._v(t._s(i.jointime))]),s("div",{staticClass:"td4"},[t._v(t._s(i.status_text))])])}))],2),s("div",{staticClass:"fenyeCon"},[s("el-pagination",{staticClass:"fenye",attrs:{layout:"prev, pager, next","page-size":t.query.row,total:t.total},on:{"current-change":t.pageChange}})],1)])])]),s("HomeFooter")],1)},a=[],n=i(7812),o=i(9339),l=i(1206),r={name:"login",components:{HomeHeader:n.Z,HomeFooter:o.Z},data(){return{dialogVisible:!1,linkUrl:"http://localhost:8080/#/?inviter_id=",List:[],tabList:[{id:1,label:this.$t("sharePage.woyaoqingdeyonghu"),select:!0,value:1},{id:2,label:this.$t("sharePage.woyaoqingdejiaoshi"),select:!1,value:2},{id:3,label:this.$t("sharePage.woyaoqingdefangdong"),select:!1,value:3}],total:0,query:{page:1,row:20,type:1},promotion_info:{}}},mounted(){this.getList()},methods:{onSubmit(){},CopyFlieLink(t){let s=this,i=t||"";if(!i)return this.$message.error(s.$t("sharePage.baoqianfuzhishibia")),!1;this.$copyText(i).then((function(t){s.$message.success(s.$t("sharePage.neirongyifuzhidaojianjieban"))}),(function(t){s.$message.error(s.$t("sharePage.baoqianfuzhishibia"))}))},getList(){(0,l.oN)(this.query).then((t=>{if(200===t.code){let s=t.data;this.List=s?.invite_user?.data,this.total=s?.invite_user?.total,this.promotion_info=s?.promotion_info,this.linkUrl=s?.url,this.urlAddInvitationId()}}))},tabListSelect(t){for(let s of this.tabList)s.select=!1;t.select=!0,this.query.type=t.value,this.getList()},pageChange(t){this.query.page=t,this.getList()},urlAddInvitationId(){this.vuex_hasLogin&&(this.linkUrl=this.linkUrl+this.vuex_user?.id||"")}}},c=r,d=i(1001),h=(0,d.Z)(c,e,a,!1,null,"ed4136d4",null),u=h.exports},5367:function(t,s,i){t.exports=i.p+"static/img/studentMainImg1.1745468f.png"}}]);