"use strict";(self["webpackChunkframe"]=self["webpackChunkframe"]||[]).push([[8128],{68128:function(t,e,i){i.r(e),i.d(e,{default:function(){return g}});var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container pinfo"},[e("HomeHeader",{attrs:{topimgIsShow:!1}}),e("div",{staticClass:"listCon mainContent"},[e("div",{staticClass:"center"},[e("div",{staticClass:"outerTop"},[e("div",{staticClass:"toptitle",on:{click:function(e){return t.toGo(t.vuex_user.id,t.vuex_user.role)}}},[e("div",{staticClass:"avatar"},[e("img",{attrs:{src:t.vuex_user.avatar,alt:""}})]),t._v(" "+t._s(t.vuex_user.name)+", "+t._s(t.$t("studenMain.huanying"))+" "),"student"===t.vuex_user.role?e("i",{staticClass:"el-icon-arrow-right"}):t._e()])]),e("div",{staticClass:"list"},t._l(t.filteredMenus,(function(i,n){return e("div",{key:i.name,staticClass:"item",class:{"item-disabled":i.disabled},on:{click:function(e){!i.disabled&&t.doAction(i)}}},[e("div",{staticClass:"left"},[e("div",{staticClass:"title1"},[t._v(" "+t._s(i.title)+" ")]),e("div",{staticClass:"title2"},[t._v(" "+t._s(i.desc)+" ")]),e("el-button",{attrs:{type:"text",size:"mini"}},[t._v(" "+t._s(i.button)+" ")])],1),e("img",{staticClass:"icon",attrs:{src:i.img,alt:""}})])})),0)])]),e("HomeFooter")],1)},A=[],s=(i(57658),i(38864)),a=i(18031),o=i(51206),u={name:"Index",components:{HomeFooter:a.Z,HomeHeader:s.Z},computed:{menus(){return[{name:"switchToTeacher",title:this.$t("studenMain.qihuanshenfen"),desc:this.$t("studenMain.qiehuanchengjiaoshishenfen"),button:this.$t("studenMain.querenqiehuan"),img:i(87676),action:{custom:"switchToTeacher"},type:1},{name:"switchToStudent",title:this.$t("studenMain.qihuanshenfen"),desc:this.$t("studenMain.qiehuanchengjxuesshenfen"),button:this.$t("studenMain.querenqiehuan"),img:i(87676),action:{custom:"switchToStudent"},type:2},{name:"renzhengTeacher",title:this.$t("studenMain.renzhengchengweijiaoshi"),desc:this.$t("studenMain.need_complete_before",["6-20"]),button:this.$t("studenMain.huoderenzheng"),img:i(87788),action:{path:"/renzhengTeacher"},type:2},{name:"jsdRentalSharedClassrooms",title:this.$t("studenMain.chuzugongxiangjiaoshi"),desc:this.$t("studenMain.guanliwodejiaoshi"),button:this.$t("studenMain.chakan"),img:i(22209),action:{path:"/jsdRentalSharedClassrooms"},type:2},{name:"jsdCourseList",title:this.$t("studenMain.guanlikecheng"),desc:this.$t("studenMain.lookgualikecheng"),button:this.$t("studenMain.chakan"),img:i(22209),action:{path:"/jsdCourseList"},disabled:1!==this.vuex_user?.is_teacher,type:2},{name:"tax",title:this.$t("studenMain.suiwuxinxi"),desc:this.$t("studenMain.looksuiwuxinxi"),button:this.$t("studenMain.chakan"),img:i(50820),action:{path:"/tax"},type:2},{name:"mycourse",title:this.$t("studenMain.yuyuekecheng"),desc:this.$t("studenMain.lookyuyuekecheng"),button:this.$t("studenMain.chakan"),img:i(22209),action:{path:"/course/order/list/student"},type:1},{name:"jsdMyYuYueClassrooms",title:this.$t("studenMain.yiyuyuejiaoshi"),desc:this.$t("studenMain.lookyiyuyuejiaoshi"),button:this.$t("studenMain.chakan"),img:i(24161),action:{path:"/classroom/order/list/tenant"},type:3},{name:"myPersonalInfo",title:this.$t("studenMain.gerenxinxi"),desc:this.$t("studenMain.lookgerenxinxi"),button:this.$t("studenMain.chakan"),img:i(3721),action:{path:"/account-info"},type:3},{name:"mycollect",title:this.$t("studenMain.wodeshouchang"),desc:this.$t("studenMain.lookwodeshouchang"),button:this.$t("studenMain.chakan"),img:i(20866),action:{path:"/mycollect"},type:3},{name:"mywallet",title:this.$t("studenMain.wodeqianbao"),desc:this.$t("studenMain.lookwodeqianbao"),button:this.$t("studenMain.chakan"),img:i(41941),action:{path:"/mywallet"},type:3},{name:"sharePage",title:this.$t("studenMain.yaoqinghaoyou"),desc:this.$t("studenMain.lookyaoqinghaoyou"),button:this.$t("studenMain.chakan"),img:i(64020),action:{path:"/sharePage"},type:3},{name:"mySuggestion",title:this.$t("studenMain.tianjiajianyi"),desc:this.$t("studenMain.looktianjiajianyi"),button:this.$t("studenMain.chakan"),img:i(81567),action:{path:"/mySuggestion"},type:3}]},filteredMenus(){return"teacher"===this.vuex_identity?this.menus.filter((t=>1!==t.type)):"student"===this.vuex_identity?this.menus.filter((t=>2!==t.type)):[]}},mounted(){this.getUserInfo()},methods:{async getUserInfo(){try{const t=await(0,o.LUH)();if(200===t.code){let e={...this.vuex_user,...t.data};this.$u.vuex("vuex_user",e)}}catch(t){console.error(t)}},toGo(t,e){"teacher"!==e&&this.$router.push({path:`/user/student/${t}`})},doAction(t){t.action.path?this.$router.push({path:t.action.path}):t.action.custom&&("switchToStudent"===t.action.custom?(this.$u.vuex("vuex_user.role","student"),this.$u.vuex("vuex_identity","student")):"switchToTeacher"===t.action.custom&&(this.$u.vuex("vuex_user.role","teacher"),this.$u.vuex("vuex_identity","teacher")))}}},h=u,c=i(1001),d=(0,c.Z)(h,n,A,!1,null,"80da7be6",null),g=d.exports},22209:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAQAAABu4E3oAAAAlklEQVR42qWT0Q2EMAxDGS1j+KbxaB6tdzohUEyQhag/+uMnp2my+UF99NP6SyBohsG+rgKDfZQmYCWhGhIBh6ykXB4YrZ4TbF2aMnJORsDm0fR0gf0bUQ2Zu4Jy4NR298tgAwyxJoL7XQdgiByw8lzqCEFvggsMAzkhNmFZ0+DnjOeT/Cjn5Vbm8uSALVu0OwYeeZrsX1OVdnd1i0IEAAAAAElFTkSuQmCC"},64020:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAZCAQAAACf6xZlAAAAgUlEQVR42u2Q0QkDMQxDbzSNIU3j0TRayiU1wZiD5recRQhIz8b4yiJkDZnx7GQQGilGc9BgIhHG/D0daMgFlrOfKPPWmCgwsWOZcb/il9oLgPEV5OWVqUvyFmP9q/1Wu8OMZpiTa3ZpdM3Nu+8TePw/fFRE15P/3rnCPoCJH2ETHzXHFDtuCe6bAAAAAElFTkSuQmCC"},81567:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAZCAQAAACBIibWAAAAgklEQVR42t2UwQnEQAhFf2k2o9jFL83SsgxmWZZM1GviO3jxKcowcNGwYwABowvsmKDhYlx5JtCYGRgILr/yVtA4d6SLSwqj3iufQremMWe0AvC3bi+s/kD2boUki+8EYhPVBO7ZCjXPETRqLoILytC4nLXmZWfVmArIcJl9M9/3/AGLE6TaQjqN9AAAAABJRU5ErkJggg=="},3721:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAQAAABu4E3oAAAAeklEQVR42qWS0QnAQAhDHc1lDG7haI527Z+FO8iFGvzzYcTYqVDRWG+X3VQ61lfpBEDN8EAyEk0BsocgfE+0jGD9RkayMRQ7nyPcmvxKmjQK8FjaTZGP0Gt4jo+fKdTxgm14A6XxwdI371zpMhJtWKosWkTK0lGKrfQHr3nf0gmVS1QAAAAASUVORK5CYII="},87676:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAD1BMVEUAAABUt7NUubVVuLRVuLSTy9wXAAAABHRSTlMAQH+/MHAgfgAAAI1JREFUeNplkckNACEMA331X/M+QmRFO794iIwAC+0klnChY4tSEt28o+KKmChKdpwFqu4pZ6Ya2I10i0MAT1jDHJABBWMWTjfHbOlpslB1TIRBAoqCEKUw3bmLCux7dGtdc1UEZhIv0TN7bT3GKPtGy3nFNjWKt7SG4zHw9/fE4lTp9/eRKHvzIjmJm3/3TAJVCR6scgAAAABJRU5ErkJggg=="},20866:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAQAAABu4E3oAAAAhUlEQVR42r2TUQqAMAxDPVqPkZ6mR+vRKgoSBptLEWz+Rh7ZFnrMB+aFODrjdakBILxupQqY1yNYI4M5OqDn0LzNgSE8vWZCIIY0WrfKuyvaVayNINiCKFaniV+OkC/FQTQAQjLAeUem7SsP/x/pP/87kjCeLPfGk/ZxMdYp5jnaiV0gkRMdUNUtF7SGbQAAAABJRU5ErkJggg=="},41941:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAQAAABu4E3oAAAAaElEQVR42uWTsQ3AQAgDGY0xzDQejdFI8aF5RXlcRuEqJJ8oLOx94JFRYO+j+E0K8QYuxAd34M/sIc5YcUYpwGUl0qJUPq3k1slJAM1AUFJWDYri8Kjhlcb2mXbe/KD9k5KaAKp/mfALOXCIkJaLQLoAAAAASUVORK5CYII="},50820:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAYCAMAAADNlS1EAAAAD1BMVEVZWVkAAABYWFhYWFhZWVkTcIL2AAAABXRSTlP/AEB/v4vsh9kAAABOSURBVHjarckxDgAxDAJBMPz/zRcnKVzQnJRtkMcQRlXshjRKCaGEUEJoo7VrrLUTjdV9/8v2WQ0j2WeRxuwYKxgVzO/MweBg8AoPU6APQHEBEe5afWAAAAAASUVORK5CYII="},24161:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAASCAQAAADr5dYVAAAAYUlEQVR42rWSsQ0AIQwDGc1jHNN4NEbjZembb56kwG6CxEWQeCA8d9ELjblSFL3xyPVRVJAXQKfu6AOc/4H/gNUCcM5NIMItIEJdwPeehC6Mtba4fjT64cONeKc5SlEzRg+QGaXuTJcRiAAAAABJRU5ErkJggg=="},87788:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAD1BMVEUAAAAsg+Mqg+MpguQqguSxUNxrAAAABHRSTlMAQH+/MHAgfgAAAIJJREFUeNp9kUEOxDAMAovh/29eUQnRRt5yaJKZ2JWcKwEpiTMB4ZS5nDk4Ae9mJFaYv67llAbJRDECnChmCUgt76J2rYGYY02LTtMi291I12KMxdVQ/2s+/nOabm2bp3kWAZ2+v+vcposN0Vk7WN7n803TVzMwNideDRxK5XVD4/IfQjQCi9BByjwAAAAASUVORK5CYII="}}]);