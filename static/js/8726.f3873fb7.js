"use strict";(self["webpackChunkframe"]=self["webpackChunkframe"]||[]).push([[8726],{8726:function(s,e,t){t.r(e),t.d(e,{default:function(){return U}});var a=function(){var s=this,e=s._self._c;return e("div",{staticClass:"container"},[e("HomeHeader",{attrs:{topimgIsShow:!1}}),e("div",{staticClass:"listCon"},[e("div",{staticClass:"center"},[e("div",{staticClass:"layoutLeft"},[e("div",{staticClass:"title"},[s._v(s._s(s.$t("message.xiaoxi")))]),e("vue-custom-scrollbar",{staticClass:"listScroll",attrs:{settings:s.settings},on:{"ps-scroll-y":s.scrollHanle}},[e("div",{staticClass:"list"},[e("div",{staticClass:"item",class:{active:s.sysMessageObj.select},on:{click:s.selectSysMessage}},[e("img",{staticClass:"headimg",attrs:{src:t(3873)}}),e("div",{staticClass:"right"},[e("div",{staticClass:"state"},[s._v("系统消息")]),e("div",{staticClass:"cont"},[s._v(" "+s._s(s.sysMessageObj.message)+" ")]),e("div",{staticClass:"time"},[s._v(" "+s._s(s.sysMessageObj.createtime_text)+" ")])])]),s._l(s.ChatList,(function(a,i){return e("div",{key:a.id,staticClass:"item",class:{active:a.id==s.currentChatTargetObj.id},on:{click:function(e){return s.ChatContentSelect(a)}}},[a.user_info?e("img",{staticClass:"headimg",attrs:{src:a.user_info.avatar_text||t(8117),alt:""}}):s._e(),e("div",{staticClass:"right"},[e("div",{staticClass:"state"},[s._v(" "+s._s(s.$t("message.kechengyudingzixunzhong"))+" ")]),a.user_info?e("div",{staticClass:"name"},[s._v(" "+s._s(a.user_info.name)+" ")]):s._e(),a.message?e("div",{staticClass:"cont"},[s._v(" "+s._s(s.isCancelCourseType(a.message.type)||s.isCancelClassroomType(a.message.type)?`[${s.$t("message.cancel_book")}]`:a.message.message)+" ")]):s._e(),a.message?e("div",{staticClass:"time"},[s._v(" "+s._s(s.$t("message.yudingzixun"))+" "+s._s(a.message.createtime)+" ")]):s._e()]),a.user_info&&a.user_info.is_super_teacher?e("div",{staticClass:"superTeacherTipCon"},[e("img",{staticClass:"iconimg",attrs:{src:t(5371)}}),e("div",{staticClass:"text"},[s._v("超级教师")])]):s._e(),a.user_info&&a.user_info.is_super?e("div",{staticClass:"superStudentTipCon"},[e("img",{staticClass:"iconimg",attrs:{src:t(6733)}}),e("div",{staticClass:"text"},[s._v("超级学生")])]):s._e()])}))],2)])],1),s.ChatList.length>0?e("div",{staticClass:"layoutRight"},[e("vue-custom-scrollbar",{staticClass:"chatScroll",attrs:{settings:s.settings},on:{"ps-scroll-y":s.scrollHanle}},[!s.isSysMess&&s.ChatContent.length>0?e("div",{staticClass:"chatlist"},s._l(s.ChatContent,(function(a,i){return e("div",{key:a.id,class:[a.is_self?"rightChart":"leftChart"]},[a.user_info?e("img",{staticClass:"head",attrs:{src:a.user_info.avatar_text||t(8117),alt:""}}):s._e(),e("div",{staticClass:"infoCon"},[e("div",{staticClass:"top"},[a.user_info?e("div",{staticClass:"name"},[s._v(s._s(a.user_info.name))]):s._e(),e("div",{staticClass:"time"},[s._v(s._s(a.createtime))])]),s.isCancelCourseType(a.type)?e("cancel-course-message",{attrs:{item:a},on:{onSendComplete:s.sendCancelComplete}}):s.isCancelClassroomType(a.type)?e("cancel-classroom-message",{attrs:{item:a},on:{onSendComplete:s.sendCancelComplete}}):e("text-message",{attrs:{item:a}})],1)])})),0):s._e(),s.isSysMess&&s.sysMessContent.length>0?e("div",{staticClass:"chatlist"},s._l(s.sysMessContent,(function(a,i){return e("div",{key:a.id,staticClass:"leftChart"},[e("img",{staticClass:"head",attrs:{src:t(3873),alt:""}}),e("div",{staticClass:"infoCon"},[e("div",{staticClass:"top"},[e("div",{staticClass:"name"},[s._v("系统消息")]),e("div",{staticClass:"time"},[s._v(" "+s._s(a.createtime_text)+" ")])]),e("div",{staticClass:"cont"},[s._v(s._s(a.message))])])])})),0):s._e(),s.ChatContent.length<=0&&s.sysMessContent.length<=0?e("div",{staticClass:"noMessageCon"},[e("div",{staticClass:"text"},[s._v(" "+s._s(s.$t("message.qingxuanzezuobianxiaoxi"))+" ")])]):s._e()]),s.isSysMess?s._e():e("div",{staticClass:"inpCon"},[e("input",{directives:[{name:"model",rawName:"v-model",value:s.SendVal,expression:"SendVal"}],staticClass:"input",attrs:{type:"text"},domProps:{value:s.SendVal},on:{keyup:function(e){return!e.type.indexOf("key")&&s._k(e.keyCode,"enter",13,e.key,"Enter")?null:s.SendMessage.apply(null,arguments)},input:function(e){e.target.composing||(s.SendVal=e.target.value)}}}),e("i",{staticClass:"icon fa fa-send",on:{click:s.SendMessage}})])],1):s._e(),e("img",{staticClass:"fanyiIcon",attrs:{src:t(312),alt:""},on:{click:function(e){s.fanyiIsShow=!0}}}),s.fanyiIsShow?e("div",{staticClass:"fanyiCon"},[e("div",{staticClass:"top"},[e("div",{staticClass:"title"},[s._v(s._s(s.$t("message.fanyi")))]),e("i",{staticClass:"icon fa fa-close",on:{click:function(e){s.fanyiIsShow=!1}}})]),e("div",{staticClass:"main"},[e("div",{staticClass:"twoTop"},[e("div",{staticClass:"leftText"},[s._v(" "+s._s(s.$t("message.fanyiciduihua"))+" ")]),e("el-switch",{attrs:{"active-color":"green","inactive-color":"#000"},model:{value:s.value,callback:function(e){s.value=e},expression:"value"}})],1),e("div",{staticClass:"text2"},[s._v(" "+s._s(s.$t("message.yaogenggaisuoyoufanyi"))+" ")]),e("div",{staticClass:"text3"},[s._v(s._s(s.$t("message.fanyishezhi")))])])]):s._e()])]),e("HomeFooter")],1)},i=[],n=t(1384),c=t(9339),r=t(949),l=t.n(r),o=t(1206),C=function(){var s=this,e=s._self._c;return s.item?e("div",{staticClass:"cont"},[s._v(" "+s._s(s.item.message)+" ")]):s._e()},g=[],A={name:"TextMessage",props:["item"]},u=A,d=t(1001),m=(0,d.Z)(u,C,g,!1,null,"32dc90bc",null),h=m.exports,v=t(1271),p=function(){var s=this,e=s._self._c;return s.message?e("div",{staticClass:"box"},[e("div",{staticClass:"datetime"},[s._v(s._s(`${s.message.date} (${s.weekDay[parseInt(s.message.week)-1]}) ${s.message.start_time} - ${s.message.end_time}`))]),e("div",{staticClass:"content"},[s._v(s._s(s.message.result?s.$t("message.cancel_success"):s.message.content))]),s.message.result?s._e():e("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){return s.cancel(s.message)}}},[s._v(s._s(s.$t("message.cancel")))])],1):s._e()},y=[],f={name:"CancelCourseMessage",props:["item"],computed:{weekDay(){return[this.$t("CourseCalendar.xingqi1"),this.$t("CourseCalendar.xingqi2"),this.$t("CourseCalendar.xingqi3"),this.$t("CourseCalendar.xingqi4"),this.$t("CourseCalendar.xingqi5"),this.$t("CourseCalendar.xingqi6"),this.$t("CourseCalendar.xingqi7")]},message(){return console.log(this.item),this.item?JSON.parse(this.item.message):null}},methods:{async cancel(s){try{const e=await(0,o.gC)(s.id);if(200===e.code){this.$message.success(this.$t("CourseCalendar.cancel_success"));let e={id:this.item.user_id,message:JSON.stringify({...s,result:!0},null,0),type:v.I_};const t=await(0,o.zK)(e);200===t.code&&this.$emit("onSendComplete")}}catch(e){let s=err||"出错了";this.$message.error("失败，"+s),console.error(e)}}}},b=f,w=(0,d.Z)(b,p,y,!1,null,"6d1591d7",null),x=w.exports,S=function(){var s=this,e=s._self._c;return s.message?e("div",{staticClass:"box"},[e("div",{staticClass:"datetime"},[s._v(s._s(`${s.message.date} (${s.weekDay[parseInt(s.message.week)-1]}) ${s.message.start_time} - ${s.message.end_time}`))]),e("div",{staticClass:"content"},[s._v(s._s(s.message.result?s.$t("message.cancel_success"):s.message.content))]),s.message.result?s._e():e("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){return s.cancel(s.message)}}},[s._v(s._s(s.$t("message.cancel_classroom")))])],1):s._e()},_=[],B={name:"CancelClassroomMessage",props:["item"],computed:{weekDay(){return[this.$t("CourseCalendar.xingqi1"),this.$t("CourseCalendar.xingqi2"),this.$t("CourseCalendar.xingqi3"),this.$t("CourseCalendar.xingqi4"),this.$t("CourseCalendar.xingqi5"),this.$t("CourseCalendar.xingqi6"),this.$t("CourseCalendar.xingqi7")]},message(){return this.item?JSON.parse(this.item.message):null}},methods:{async cancel(s){try{const e=await(0,o.Ik)(s.id);if(200===e.code){this.$message.success(this.$t("CourseCalendar.cancel_success"));let e={id:this.item.user_id,message:JSON.stringify({...s,result:!0},null,0),type:v.NW};const t=await(0,o.zK)(e);200===t.code&&this.$emit("onSendComplete")}}catch(e){let s=err||"出错了";this.$message.error("失败，"+s),console.error(e)}}}},k=B,q=(0,d.Z)(k,S,_,!1,null,"1a304e4e",null),N=q.exports,I={name:"login",components:{CancelClassroomMessage:N,CancelCourseMessage:x,TextMessage:h,HomeHeader:n.Z,HomeFooter:c.Z,vueCustomScrollbar:l()},data(){return{currentTab:"new",currentTabIndex:0,value:!1,fanyiIsShow:!1,settings:{suppressScrollY:!1,suppressScrollX:!1,wheelPropagation:!1},ChatList:[],ChatContent:[],SendVal:"",currentChatTargetObj:{},sysMessageObj:{},isSysMess:!1,sysMessContent:[]}},mounted(){this.getChatList()},methods:{sendCancelComplete(){this.getChatContent()},isCancelCourseType(s){return s===v.I_},isCancelClassroomType(s){return s===v.NW},scrollHanle(s){console.log(s)},getChatList(){(0,o.FB)().then((s=>{if(200==s.code){let e=s.data;this.ChatList=e.chat_list,this.sysMessageObj=e.message,this.sysMessageObj.select=!1,this.currentChatTargetObj=this.ChatList[0];let t=this.$route.query.targetId||"";t?(this.getChatContent(t),this.isSysMess=!1):(this.selectSysMessage(),this.isSysMess=!0)}}))},ChatContentSelect(s){this.currentChatTargetObj=s,this.getChatContent(),this.isSysMess=!1,this.sysMessageObj.select=!1},selectSysMessage(){this.isSysMess=!0,this.sysMessageObj.select=!0,this.currentChatTargetObj={},this.getSysContent()},getChatContent(s){let e="";if(s){let t=this.ChatList.find((e=>e.user_info?.id==s));if(console.log(s,this.ChatList,t),!t)return this.$message.error("没有找到聊天对象"),!1;e=t.user_info?.id}else e=this.currentChatTargetObj?.user_info?.id,console.log("IdVal",e);(0,o.H$)({id:e}).then((s=>{if(200==s.code){let e=s.data;this.ChatContent=e}}))},getSysContent(){(0,o.xj)().then((s=>{if(200==s.code){let e=s.data;this.sysMessContent=e}}))},SendMessage(){let s={id:this.currentChatTargetObj?.user_info?.id,message:this.SendVal,type:v.PY};(0,o.zK)(s).then((s=>{if(200==s.code){s.data;this.SendVal="",this.getChatContent()}})).catch((s=>{let e=s||"出错了";this.$message.error("失败，"+e)}))}}},Q=I,M=(0,d.Z)(Q,a,i,!1,null,"34d71249",null),U=M.exports},6733:function(s){s.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAANCAYAAACZ3F9/AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAACFSURBVCiRrZFLDoQwDEOf52L0ZoWTUU6WWdCgUDWCkcabJortfAoTmFm1E3uPy4wXyS6YYb8ZPJAzg4qZlZ78JFboXIAKZPus/T2ARWM1GDiapG2oL7FjBYikxLABJQptGOsI+bWCJAFkwhQu/Lwhz/AX4fqC3zy4fYdflvMQZSBvki7hF8j3zNiyxrtIAAAAAElFTkSuQmCC"},3873:function(s){s.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAR2SURBVFiF3ZnPbxRVHMA/3zezbHe3S3/QQtkKBUwNiCjVJkhTFM+oNxLkAGqiF6NH4oG7B4xRPPkXcFFPPeGlh5qGRFvopkBaCYVEhKY/tw3sdmfn62F21227lJ3ZZWn9nGZn5r33mbdvvu+97whVoqpHgH6gBzgI7AU6gDCQAR4C94HbwCgwJCLJatsNInpIVb9R1QkNxkS+/KF6yPao6pWAok/jiqr2PC/hSzWWXculWsr2qurIcxYuMKKqvdUKn1bVbJ2EC2RV9XRQ4fN1ll3L+SA9vBko2+NSRrgXGAbsQH9RbXGBPhG5VnqynPQI3kSxWUgCb4qIUzhhSq+qF3Y2kzDAEeC70hPFnlYvwI/U28gHJ0RkCFb39IUXJFMpXxcOBLy1BHDTTw05VZZzDjcWF0iru+qaqnqVy7pXpngtZFm807IDW8y6ezagT0SGCxHinJ+SqspcdoVPxkfpjzfT1RDxUxwjQtiyUKVMKNiQj4HhQk9PAN2Vlnycy3FhcpxPE3tpC4VIplLFHnwWAuyNRjkcb8KU+SeewZyI7LDVWw9XLAwws5Khww5xMBZnLLXA1el/QAQL2GYZ2KgHFb5s6vbZwUVaVfWkjbeA90XctrmfSbPsZGkwFuPLKf5cmOfUrt281dRStozw37Pce/KYRCQaTBv6bQLE5eZQiA/ad3Hxr9tc2N/NvmiMa/OzHG1p5f1dCQojRfBeRlcVgeJwaLAMs9ksrbYdZIgctfG2SL4QhFPtu3kpEuO3hVmm0mkAkstL3M3cYd5xOBCNMZ1O09EQIbmU4r0d7WwzBkFQlIgd4kzbTsJi+W2+28bb0/nGiPBG43YON8b5e2kJBE40txIzhqlMhv7mFm6mUrze1MyK43Cuo5NGy15VXqjs5V1DwsbbhAbCiBBCOJvYw1f7XuZRJsOt5UWMCAbBCFj5YwvBXjcUAr2ObTberjkwArwa3w5A67Ywt5YXq6muIgzeNn9LYePlJbrq2egTx8EtGc8xO+Sn+IyNl0ipm7QCF5MjTKXTONksVsjm1+Pv+qnigcHL/NSVj/bs44uuA4RRzib2+C0+aeOlquqGAL1tO8nkclydfsjb7b6D13UDDNVerTJcdVH/sXrI5JOBk7WQELzZUsQLS5ZIfipff6+q4vqfW+ZEZLCwAv+lCtcihZg9l81yINbIhx2dRCwLjBAyqxf7xhjaGyKEja9NwM+FdgLtXJ5GTpUf7t3hbuYJnaEwv6fm+f6V19gfjWJKZkBXlce5HA3GYFcu3iciw8VfWsNsqOO6emNxXgdnpnXJyarrurWodqDgurV34yIyCnz7wpQ25seCMPwfMkx5PgecMudfBC7wWakwlJEWkT+As/WyegZn1iYfN0S3Wn66RPy0qubqLJvToF8CSsSPqepYnYTHVPVYVcIl4raqXn7OwpdVtfaJfFXtV9WBGssOqKrvhFEQ+eOq+pOqzgYUnc2XPx6k/YAptVUPcBIvtXYULyeYANpKbpkBHuAtf6/jfRsfrKbNfwEx1Tjsa3w4vwAAAABJRU5ErkJggg=="},8117:function(s){s.exports="data:image/png;base64,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"},312:function(s){s.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAOcSURBVEiJrZbPS2NXFIC/l5cYk0grlaTSjoUEZhYVK0FwobU7iwHpPyBuHBgK3ZRZFLpw68I/YLpxcONy0FkVQbBgCxERF5GKQexC7SIukkDI08SXe7vIva83Lz/M2B44vMe795zv3HvOO/daPC5Wl3dTZJf3Ngn2AbK6qHbu177AnWABFVAIGKxWqy9d130npbyUUrpSSlcI8Zfruu+q1epLIKzm2sq22250hNnKOFypVF5JKa/k43JVqVRe+cCPQk1YpF6vv+kD1CL1ev0NEOkHasKiT4H5oNFeUJ2zEBApFovfPxWmpVgs/mCs1MupWYk2zSIZEEL8aVnWMx3N3t4eh4eHbVuyurraKz2FmZmZL7PZbBVwAQFIs8xtYKBQKCwnEolfTMvx8XHu7+9JJBLc3t563y8vL3sBKRaLP46MjGwAdaAByIB/hcPDw992c5BOp9nZ2SEej/cEaRkaGlrA95uYwABgB4PBdDcHmUyG3d3dvmAAoVDoK5pp8gpHkz1gIBAY62Q8OzvL2NgY5+fnZDIZoLnidDrN1NQUc3NzbTaWZX2m/Hocs6OEgaiU8m8VkScTExM4jtPiLBKJsLKywubmpjfWIacNBb0DaoCre6lXPFLKK8uykqbV1tYWJycnAJydnbG9vc3i4iLT09NkMhnW19c5ODhoW6EQ4tq3i6A+hIGPgFHHcd73+r+y2axMpVJycnJSOo4j5+fnZSqVkqlUqm2u4zjvgVHlOwwEdNF43f7m5ua3tlA7yMLCAsfHx6ytrbG8vNxxjvLVcpJ4xaIiiABRIcQf5o9vytHREUtLS4RCIWq1GsFgENd1icVi5HI5b56U8iYQCHwNOPybw4aGBmn2vk+AZ/l8/vV/bW35fP418LnyGVUMr73ZwCDwMfApkCyXyxtPhZXL5Q0gqXzp/NkmUDfuGDCiInteKpXefiisVCq9BZ4bq4vha+Dmtg6qiOLAF8CL09PTn4UQhcdAQojrXC73E/BC2caN1bVsp362nBhq4iAQTiQSkf39/e+SyeQ34XB4wrbtUaAhhLi+u7s7vbi4+D2dTv9Ks0nXgHv1rNM8KRq6Uv03Mt2GQkoHDNWHqXmgSuWsATwogNYHpUKphNZbm1QDqInScOiquUFfLrSNq/TB92yBmVtqirlS3WdtWru+bhjamQ5KPwUdYN2A+rt5iujm4O+LeheEgpkQ/z21J9Ac+9CLsDTGujrtJf/rVf8fOikb2paCrGUAAAAASUVORK5CYII="}}]);