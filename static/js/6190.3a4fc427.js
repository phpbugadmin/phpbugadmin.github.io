"use strict";(self["webpackChunkframe"]=self["webpackChunkframe"]||[]).push([[6190],{6190:function(s,a,t){t.r(a),t.d(a,{default:function(){return v}});var i=function(){var s=this,a=s._self._c;return a("div",{staticClass:"container"},[a("home-header"),a("div",{directives:[{name:"loading",rawName:"v-loading",value:s.loading,expression:"loading"}],staticClass:"mainContent main"},[s.classroom?a("div",{staticClass:"content"},[a("div",{staticClass:"item"},[a("div",{staticClass:"label"},[s._v(s._s(s.$t("jsdClassroomPublish.classroom_name")))]),a("div",{staticClass:"value"},[s._v(s._s(s.classroom.name_arr))])]),a("div",{staticClass:"item"},[a("div",{staticClass:"label"},[s._v(s._s(s.$t("jsdClassroomPublish.classroom_area")))]),a("div",{staticClass:"value"},[s._v(s._s(s.classroom.subject_text))])]),a("div",{staticClass:"item"},[a("div",{staticClass:"label"},[s._v(s._s(s.$t("jsdClassroomPublish.classroom_located")))]),a("div",{staticClass:"value"},[s._v(s._s(s.classroom.area_text))])]),a("div",{staticClass:"item"},[a("div",{staticClass:"label"},[s._v(s._s(s.$t("jsdClassroomPublish.classroom_address")))]),a("div",{staticClass:"value"},[s._v(s._s(s.classroom.address_text))])]),a("div",{staticClass:"item"},[a("div",{staticClass:"label"},[s._v(s._s(s.$t("jsdClassroomPublish.classroom_pic")))]),a("div",{staticClass:"imgBox value"},s._l(s.classroom.images_text,(function(s,t){return a("img",{key:t,staticClass:"img",attrs:{src:s}})})),0)]),a("div",{staticClass:"item"},[a("div",{staticClass:"label"},[s._v(s._s(s.$t("jsdClassroomPublish.classroom_intro")))]),a("div",{staticClass:"value"},[s._v(s._s(s.classroom.brief_text))])]),a("div",{staticClass:"item"},[a("div",{staticClass:"label"},[s._v(s._s(s.$t("jsdClassroomPublish.classroom_tag")))]),a("div",{staticClass:"tagBox value"},s._l(s.classroom.label_text,(function(t,i){return a("div",{key:i,staticClass:"tag"},[s._v(s._s(t))])})),0)]),a("div",{staticClass:"item"},[a("div",{staticClass:"label"},[s._v(s._s(s.$t("jsdClassroomPublish.classroom_price")))]),a("div",{staticClass:"value"},[s._v(s._s(s.classroom.price?`$${s.classroom.price}`:""))])]),a("div",{staticClass:"item"},[a("el-button",{attrs:{type:"primary",loading:s.submitting},on:{click:s.publish}},[s._v(s._s(s.$t("jsdClassroomPublish.publish_classroom")))])],1)]):s._e()])],1)},l=[],o=t(8651),e=t(1206),c={name:"ClassroomPreview",components:{HomeHeader:o.Z},data(){return{id:"",loading:!1,submitting:!1,classroom:null}},mounted(){this.id=this.$route.params.id,this.getDetail()},methods:{async getDetail(){if(this.id){this.loading=!0;try{const s=await(0,e.suw)({id:this.id});200===s.code&&(this.classroom=s.data)}catch(s){console.error(s)}this.loading=!1}},async publish(){this.submitting=!0;let s={};try{const a=await(0,e.ZKv)(s);200===a.code&&this.$message.success(a.msg)}catch(a){console.error(a)}this.submitting=!1}}},r=c,d=t(1001),m=(0,d.Z)(r,i,l,!1,null,"12680ad0",null),v=m.exports}}]);