"use strict";(self["webpackChunkframe"]=self["webpackChunkframe"]||[]).push([[4769],{74769:function(t,s,e){e.r(s),e.d(s,{default:function(){return u}});var a=function(){var t=this,s=t._self._c;return s("div",{staticClass:"container"},[s("HomeHeader",{attrs:{topimgIsShow:!1}}),s("div",{staticClass:"center"},[s("div",{staticClass:"ConOne"},[s("div",{staticClass:"title"},[t._v(" "+t._s(t.studentInfo.name)+" "+t._s(t.studentInfo.last_name)+" ")]),s("div",{staticClass:"desc"},[t._v(" "+t._s(t.studentInfo.brief)+" ")])]),s("div",{staticClass:"ConTwo"},t._l(t.studentImgs,(function(e,a){return s("div",{key:e.index,staticClass:"item",class:"item"+a},[s("el-image",{staticClass:"img",attrs:{src:e,"preview-src-list":t.studentImgs}})],1)})),0),s("div",{staticClass:"sudentDetaiCon"},[s("div",{staticClass:"sectitle"},[t._v("学生详情")]),s("div",{staticClass:"content",domProps:{innerHTML:t._s(t.pageDetail.brief)}})])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.cusModalConIsShow,expression:"cusModalConIsShow"}],staticClass:"cusModalCon",on:{click:function(s){t.cusModalConIsShow=!1}}},[s("div",{staticClass:"centerCon"},[s("img",{staticClass:"closeIconCon",attrs:{src:e(70762),alt:""}}),s("div",{staticClass:"cusModal",on:{click:function(s){return s.stopPropagation(),t.imgShowClick.apply(null,arguments)}}},[s("img",{staticClass:"bigImg",attrs:{src:t.imgShowUrl,alt:""}})])])])],1)},i=[],n=e(38864),o=e(51206),c={name:"headercom",components:{HomeHeader:n.Z},data(){return{cusModalConIsShow:!1,imgShowUrl:"",pageDetail:{},studentInfo:{},studentImgs:[]}},computed:{},created(){this.getSuperStudentInfo()},mounted(){},beforeDestroy(){},methods:{ImgshowFun(t){this.imgShowUrl=t,this.cusModalConIsShow=!0},getSuperStudentInfo(){let t=this.$route.query.id;(0,o.ADb)({id:t}).then((t=>{if(200==t.code){let s=t.data;this.pageDetail=s,this.studentInfo=s.user_info,this.studentImgs=s.images_text}}))}}},l=c,r=e(1001),d=(0,r.Z)(l,a,i,!1,null,"285651ce",null),u=d.exports}}]);