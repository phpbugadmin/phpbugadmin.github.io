"use strict";(self["webpackChunkframe"]=self["webpackChunkframe"]||[]).push([[3352],{3352:function(s,t,e){e.r(t),e.d(t,{default:function(){return n}});var a=function(){var s=this,t=s._self._c;return t("div",{staticClass:"container"},[t("home-header"),t("div",{staticClass:"mainContent",attrs:{loading:s.loading}},[s.course?t("div",{staticClass:"content"},[t("div",{staticClass:"title"},[t("span",[s._v(s._s(s.course.name_arr))]),s.course.shortname_arr?t("span",{staticClass:"smalltitle"},[s._v("("+s._s(s.course.shortname_arr)+")")]):s._e()]),t("div",{staticClass:"addr"},[t("i",{staticClass:"el-icon-location-information"}),t("span",[s._v(s._s(s.course.area_text))])]),s.course.subject_text?t("el-tag",{attrs:{size:"small"}},[s._v(s._s(s.course.subject_text))]):s._e(),t("div",{staticClass:"intro"},[s._v(" "+s._s(s.course.describe_text)+" ")]),t("image-grid",{attrs:{"image-list":s.course.course_images_text}}),t("el-divider"),t("div",{staticClass:"normalItems"},[t("div",{staticClass:"item"},[t("div",{staticClass:"label"},[s._v(s._s(s.$t("jsdCoursePublish.course_short_name")))]),t("div",{staticClass:"value"},[s._v(s._s(s.course.shortname_arr))])]),t("div",{staticClass:"item"},[t("div",{staticClass:"label"},[s._v(s._s(s.$t("jsdCoursePublish.course_way")))]),t("div",{staticClass:"value"},[s._v(s._s(s.course.course_way_text))])]),t("div",{staticClass:"item"},[t("div",{staticClass:"label"},[s._v(s._s(s.$t("jsdCoursePublish.course_type")))]),t("div",{staticClass:"value"},[s._v(s._s(s.course.course_type_text))])]),t("div",{staticClass:"item"},[t("div",{staticClass:"label"},[s._v(s._s(s.$t("jsdCoursePublish.course_price")))]),t("div",{staticClass:"value"},[s._v(s._s(s.course.price?`$${s.course.price}`:""))])])]),t("div",{staticClass:"item"},[t("div",{staticClass:"label"},[s._v(s._s(s.$t("jsdCoursePublish.course_sp")))]),t("div",{staticClass:"tagBox value"},s._l(s.course.course_label_text,(function(e,a){return t("div",{key:a,staticClass:"tag"},[t("i",{staticClass:"el-icon-medal"}),s._v(" "),t("span",[s._v(s._s(e))])])})),0)]),t("el-divider"),s.course.other_images_text?.length>0?t("div",{staticClass:"item"},[t("div",{staticClass:"label"},[s._v(s._s(s.$t("jsdCoursePublish.course_honor")))]),t("div",{staticClass:"imgBox value"},s._l(s.course.other_images_text,(function(s,e){return t("img",{key:e,staticClass:"img",attrs:{src:s}})})),0)]):s._e(),s.course.video_text?t("div",{staticClass:"item"},[t("div",{staticClass:"label"},[s._v(s._s(s.$t("jsdCoursePublish.course_video")))]),t("div",{staticClass:"value"},[t("youtube-player",{attrs:{src:s.course.video_text,width:"640",height:"360"}})],1)]):s._e()],1):s._e()])],1)},i=[],r=e(8726),l=e(7849),c=e(122),o=e(8984),u={name:"CoursePreview",components:{ImageGrid:o.Z,YoutubePlayer:l.Z,HomeHeader:r.Z},data(){return{id:"",loading:!1,submitting:!1,course:null}},mounted(){this.id=this.$route.params.id,this.getDetail()},methods:{async getDetail(){if(this.id){this.loading=!0;try{const s=await(0,c.RnH)({id:this.id});200===s.code&&(this.course=s.data)}catch(s){console.error(s)}this.loading=!1}}}},_=u,d=e(1001),v=(0,d.Z)(_,a,i,!1,null,"6e6b7cf9",null),n=v.exports}}]);