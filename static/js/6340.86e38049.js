"use strict";(self["webpackChunkframe"]=self["webpackChunkframe"]||[]).push([[6340],{96340:function(s,a,t){t.r(a),t.d(a,{default:function(){return _}});var i=function(){var s=this,a=s._self._c;return a("div",{staticClass:"container"},[a("home-header"),a("div",{directives:[{name:"loading",rawName:"v-loading",value:s.loading,expression:"loading"}],staticClass:"mainContent main"},[s.classroom?a("div",{staticClass:"content"},[a("div",{staticClass:"title"},[a("span",[s._v(s._s(s.classroom.name_arr))])]),a("div",{staticClass:"addr"},[a("i",{staticClass:"el-icon-location-information"}),a("span",[s._v(s._s(s.classroom.area_text))]),a("el-divider",{attrs:{direction:"vertical"}}),a("span",[s._v(s._s(s.classroom.address_text))])],1),s.classroom.type_text?a("el-tag",{attrs:{size:"small"}},[s._v(s._s(s.classroom.type_text))]):s._e(),a("div",{staticClass:"intro"},[s._v(" "+s._s(s.classroom.brief_text)+" ")]),a("image-grid",{attrs:{"image-list":s.classroom.images_text}}),a("el-divider"),a("div",{staticClass:"normalItems"},[a("div",{staticClass:"item"},[a("div",{staticClass:"label"},[s._v(s._s(s.$t("jsdClassroomPublish.classroom_area")))]),a("div",{staticClass:"value"},[s._v(s._s(s.classroom.area_size)+" ft"),a("sup",[s._v("2")])])]),a("div",{staticClass:"item"},[a("div",{staticClass:"label"},[s._v(s._s(s.$t("jsdClassroomPublish.classroom_price")))]),a("div",{staticClass:"value"},[s._v(s._s(s.classroom.price?`$${s.classroom.price}`:""))])])]),a("div",{staticClass:"item"},[a("div",{staticClass:"label"},[s._v(s._s(s.$t("jsdClassroomPublish.classroom_sp")))]),a("div",{staticClass:"tagBox value"},s._l(s.classroom.label_text,(function(i,e){return a("div",{key:e,staticClass:"tag"},[a("img",{staticClass:"medal",attrs:{src:t(82459),alt:""}}),a("span",[s._v(s._s(i))])])})),0)])],1):s._e()]),a("HomeFooter")],1)},e=[],l=t(64631),o=t(51206),r=t(64383),c=t(88550),d={name:"ClassroomPreview",components:{HomeFooter:c.Z,ImageGrid:r.Z,HomeHeader:l.Z},data(){return{id:"",loading:!1,submitting:!1,classroom:null}},mounted(){this.id=this.$route.params.id,this.getDetail()},methods:{async getDetail(){if(this.id){this.loading=!0;try{const s=await(0,o.j5V)({id:this.id});200===s.code&&(this.classroom=s.data)}catch(s){console.error(s)}this.loading=!1}}}},n=d,m=t(1001),v=(0,m.Z)(n,i,e,!1,null,"120d34e7",null),_=v.exports}}]);