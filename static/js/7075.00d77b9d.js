"use strict";(self["webpackChunkframe"]=self["webpackChunkframe"]||[]).push([[7075],{7075:function(s,a,t){t.r(a),t.d(a,{default:function(){return v}});var i=function(){var s=this,a=s._self._c;return a("div",{staticClass:"container"},[a("home-header"),a("div",{directives:[{name:"loading",rawName:"v-loading",value:s.loading,expression:"loading"}],staticClass:"mainContent main"},[s.classroom?a("div",{staticClass:"content"},[a("div",{staticClass:"title"},[a("span",[s._v(s._s(s.classroom.name_arr))])]),a("div",{staticClass:"addr"},[a("i",{staticClass:"el-icon-location-information"}),a("span",[s._v(s._s(s.classroom.area_text))]),a("el-divider",{attrs:{direction:"vertical"}}),a("span",[s._v(s._s(s.classroom.address_text))])],1),s.classroom.type_text?a("el-tag",{attrs:{size:"small"}},[s._v(s._s(s.classroom.type_text))]):s._e(),a("div",{staticClass:"intro"},[s._v(" "+s._s(s.classroom.brief_text)+" ")]),a("image-grid",{attrs:{"image-list":s.classroom.images_text}}),a("el-divider"),a("div",{staticClass:"normalItems"},[a("div",{staticClass:"item"},[a("div",{staticClass:"label"},[s._v(s._s(s.$t("jsdClassroomPublish.classroom_area")))]),a("div",{staticClass:"value"},[s._v(s._s(s.classroom.area_size)+" ft"),a("sup",[s._v("2")])])]),a("div",{staticClass:"item"},[a("div",{staticClass:"label"},[s._v(s._s(s.$t("jsdClassroomPublish.classroom_price")))]),a("div",{staticClass:"value"},[s._v(s._s(s.classroom.price?`$${s.classroom.price}`:""))])])]),a("div",{staticClass:"item"},[a("div",{staticClass:"label"},[s._v(s._s(s.$t("jsdClassroomPublish.classroom_sp")))]),a("div",{staticClass:"tagBox value"},s._l(s.classroom.label_text,(function(t,i){return a("div",{key:i,staticClass:"tag"},[a("i",{staticClass:"el-icon-medal"}),s._v(" "),a("span",[s._v(s._s(t))])])})),0)])],1):s._e()])],1)},e=[],l=t(5675),o=t(122),r=t(8984),c={name:"ClassroomPreview",components:{ImageGrid:r.Z,HomeHeader:l.Z},data(){return{id:"",loading:!1,submitting:!1,classroom:null}},mounted(){this.id=this.$route.params.id,this.getDetail()},methods:{async getDetail(){if(this.id){this.loading=!0;try{const s=await(0,o.j5V)({id:this.id});200===s.code&&(this.classroom=s.data)}catch(s){console.error(s)}this.loading=!1}}}},d=c,n=t(1001),m=(0,n.Z)(d,i,e,!1,null,"6f82dd20",null),v=m.exports}}]);