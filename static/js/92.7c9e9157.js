"use strict";(self["webpackChunkframe"]=self["webpackChunkframe"]||[]).push([[92],{92:function(e,t,s){s.r(t),s.d(t,{default:function(){return h}});var i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("div",{staticClass:"head"},[t("HomeHeader",{ref:"refHomeHeader",on:{seach:e.topSeachFun}}),t("XuekeMenu",{ref:"refXuekeMenu",attrs:{seachVal:e.query.search_word,classifyType:"course"},on:{XuekeClick:e.getXuekeSelect,Saixuan:e.getSaixuan}})],1),t("div",{staticClass:"listCon"},[t("div",{staticClass:"center"},[t("div",{staticClass:"list"},e._l(e.List,(function(i){return t("div",{key:i.id,staticClass:"item",on:{click:function(t){return e.JumpDetail(i)}}},[t("div",{staticClass:"imgCon"},[t("el-carousel",{attrs:{height:"280px",autoplay:!1,"indicator-position":"none",loop:!1}},e._l(i.course_images_text,(function(e,s){return t("el-carousel-item",{key:s},[t("img",{staticClass:"img",attrs:{src:e,alt:""}})])})),1)],1),t("div",{staticClass:"bot"},[t("div",{staticClass:"titleCon"},[t("div",{staticClass:"title"},[e._v(e._s(i.name_arr))]),t("div",{staticClass:"right"},[t("span",{staticClass:"pingfen"},[e._v(e._s(i.total_value))]),t("i",{staticClass:"star fa fa-star"})])]),t("div",{staticClass:"dec"},[e._v(" "+e._s(i.subject_text)+"/"+e._s(e.ToXieGangString(i.course_label_text))+"/ "),i.teaching_age?t("span",[e._v(" 教龄"+e._s(i.teaching_age)+"年/ ")]):e._e(),i.education?t("span",[e._v("学历"+e._s(i.education)+"/")]):e._e(),i.course_times?t("span",[e._v("授课课时"+e._s(i.course_times)+"小时")]):e._e()]),t("div",{staticClass:"area el-icon-location-information"},[e._v(e._s(i.area_text))]),t("div",{staticClass:"price"},[e._v(" $"+e._s(i.price)+" / "+e._s(e.$t("timeText.xiaoshi"))+" ")]),i.is_super_teacher?t("div",{staticClass:"superTeacherTipCon"},[t("img",{staticClass:"iconimg",attrs:{src:s(5371)}}),t("div",{staticClass:"text"},[e._v("超级教师")])]):e._e()]),t("i",{staticClass:"collect fa fa-heart",class:{active:i.is_collect},on:{click:function(t){return t.stopPropagation(),e.ShouCangOrCancel(i)}}})])})),0),t("div",{directives:[{name:"loading",rawName:"v-loading",value:e.querying,expression:"querying"}],staticClass:"loading"})])]),t("div",{staticClass:"foot"},[t("HomeFooter")],1)])},a=[],r=(s(7658),s(4401)),o=s(8282),n=s(7102),c=s(122),u={name:"login",components:{HomeHeader:r.Z,HomeFooter:o.Z,XuekeMenu:n.Z},data(){return{List:[],total:-1,query:{page:1,row:15,search_word:"",subject_id:"0",area:"",course_type:"",course_way:"",gender:"",language:""},querying:!1}},created(){this.getYaoQingMa(),this.getList()},mounted(){window.addEventListener("scroll",this.handleScroll)},destroyed(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll(){window.innerHeight+window.scrollY>=document.body.offsetHeight&&(console.log("已经滚动到页面底部"),this.getList())},async getList(){if(!this.querying&&this.List?.length!==this.total){console.log("getList()",this.query),this.querying=!0;try{const e=await(0,c.Q6o)(this.query);if(200===e.code){let t=e.data;this.total=t.total,this.List=[...this.List,...t.data],this.query.page++}}catch(e){console.error(e)}this.querying=!1}},JumpDetail(e){this.$u.vuex("vuex_CourseYuYue."+e.id,""),this.$router.push({path:"/CourseDetail",query:{id:e.id}})},getXuekeSelect(e){this.query={page:1,row:15,search_word:"",subject_id:e.id,area:"",course_type:"",course_way:"",gender:"",language:""},this.getList()},getSaixuan(e){console.log("console_data",JSON.parse(JSON.stringify(e))),this.query.area=e?.area.toString()||"",this.query.course_type=e.coureType,this.query.course_way=e.coureFangshi,this.query.gender=e.teacherGender,this.query.language=e.teacherLanguage,this.getList()},pageChange(e){this.query.page=e,this.getList()},ShouCangOrCancel(e){(0,c.VPS)({id:e.id}).then((e=>{200==e.code&&this.getList()}))},topSeachFun(e){this.query.search_word=e,this.getList()},ToXieGangString(e){return!e||e.length<=0?"":e.join("/")},getYaoQingMa(){let e=this.$route.query.inviter_id;e&&this.$u.vuex("vuex_inviter_id",e),console.log(e)}},watch:{"$route.query.first":function(e,t){this.query={page:1,row:15,search_word:"",subject_id:"0",area:"",course_type:"",course_way:"",gender:"",language:""},this.$refs.refXuekeMenu.refLRScrollMenuReset(),this.$refs.refHomeHeader.searchVal="",this.getList()}}},l=u,d=s(1001),g=(0,d.Z)(l,i,a,!1,null,"5d5d01d5",null),h=g.exports}}]);