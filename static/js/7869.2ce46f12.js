"use strict";(self["webpackChunkframe"]=self["webpackChunkframe"]||[]).push([[7869],{7869:function(e,t,s){s.r(t),s.d(t,{default:function(){return y}});var r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("div",{staticClass:"head"},[t("HomeHeader",{ref:"refHomeHeader",on:{seach:e.topSeachFun}}),t("XuekeMenu",{ref:"refXuekeMenu",attrs:{seachVal:e.query.search_word,classifyType:"course"},on:{XuekeClick:e.getXuekeSelect,Saixuan:e.getSaixuan}})],1),t("div",{staticClass:"listCon"},[t("div",{staticClass:"center"},[t("div",{staticClass:"list"},e._l(e.List,(function(e){return t("course-item",{key:e.id,attrs:{course:e}})})),1),t("div",{directives:[{name:"loading",rawName:"v-loading",value:e.querying,expression:"querying"}],staticClass:"loading"})])]),t("div",{staticClass:"foot"},[t("HomeFooter")],1)])},a=[],i=s(4631),o=s(8550),n=s(6826),u=s(1206),l=s(9757),c={name:"login",components:{CourseItem:l.Z,HomeHeader:i.Z,HomeFooter:o.Z,XuekeMenu:n.Z},data(){return{List:[],total:-1,query:{page:1,row:15,search_word:"",subject_id:"0",area:"",course_type:"",course_way:"",gender:"",language:""},querying:!1,flag:""}},created(){this.getYaoQingMa(),this.topSeachFun()},mounted(){window.addEventListener("scroll",this.handleScroll)},destroyed(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll(){window.innerHeight+window.scrollY>=document.body.offsetHeight&&(console.log("已经滚动到页面底部"),this.getList(!1))},async getList(e){if(e)this.total=-1,this.List=[],this.query.page=1,this.flag=Math.random();else if(this.querying)return;if(this.List?.length!==this.total){this.querying=!0;try{let e=await this.getListInternal(this.flag,this.query);if(this.flag===e.flag){let t=e.res;if(200===t.code){let e=t.data;this.total=e.total,this.List=[...this.List,...e.data],this.query.page++}}else console.log("wrong flag")}catch(t){console.error(t)}this.querying=!1}},async getListInternal(e,t){try{const s=await(0,u.Q6o)(t);return{res:s,flag:e}}catch(s){return Promise.reject(s)}},getXuekeSelect(e){this.query={page:1,row:15,search_word:"",subject_id:e.id,area:"",course_type:"",course_way:"",gender:"",language:""},this.getList(!0)},getSaixuan(e){console.log("console_data",JSON.parse(JSON.stringify(e))),this.query.area=e?.area.toString()||"",this.query.course_type=e.coureType,this.query.course_way=e.coureFangshi,this.query.gender=e.teacherGender,this.query.language=e.teacherLanguage,this.getList(!0)},topSeachFun(){this.query.search_word=this.$route.query.search_word,this.getList(!0)},getYaoQingMa(){let e=this.$route.query.inviter_id;e&&this.$u.vuex("vuex_inviter_id",e),console.log(e)}},watch:{"$route.query.first":function(e,t){console.log(e+"==========="),this.query={page:1,row:15,search_word:"",subject_id:"0",area:"",course_type:"",course_way:"",gender:"",language:""},this.$refs.refXuekeMenu.refLRScrollMenuReset(),this.$refs.refHomeHeader.searchVal="",this.getList(!0)}}},h=c,g=s(1001),d=(0,g.Z)(h,r,a,!1,null,"261afcbc",null),y=d.exports}}]);