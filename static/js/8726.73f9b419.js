"use strict";(self["webpackChunkframe"]=self["webpackChunkframe"]||[]).push([[8726],{8726:function(s,t,e){e.r(t),e.d(t,{default:function(){return E}});var a=function(){var s=this,t=s._self._c;return t("div",{staticClass:"container"},[t("HomeHeader",{attrs:{topimgIsShow:!1}}),t("div",{staticClass:"listCon"},[t("div",{staticClass:"center"},[t("div",{staticClass:"layoutLeft"},[t("div",{staticClass:"title"},[s._v(s._s(s.$t("message.xiaoxi")))]),t("vue-custom-scrollbar",{staticClass:"listScroll",attrs:{settings:s.settings},on:{"ps-scroll-y":s.scrollHanle}},[t("div",{staticClass:"list"},[t("div",{staticClass:"item",class:{active:s.sysMessageObj.select},on:{click:s.selectSysMessage}},[t("img",{staticClass:"headimg",attrs:{src:e(3873)}}),t("div",{staticClass:"right"},[t("div",{staticClass:"state"},[s._v("系统消息")]),t("div",{staticClass:"cont"},[s._v(" "+s._s(s.sysMessageObj.message)+" ")]),t("div",{staticClass:"time"},[s._v(" "+s._s(s.sysMessageObj.createtime_text)+" ")])])]),s._l(s.ChatList,(function(a,i){return t("div",{key:a.id,staticClass:"item",class:{active:a.id==s.currentChatTargetObj.id},on:{click:function(t){return s.ChatContentSelect(a)}}},[a.user_info?t("img",{staticClass:"headimg",attrs:{src:a.user_info.avatar_text||e(8117),alt:""}}):s._e(),t("div",{staticClass:"right"},[t("div",{staticClass:"state"},[s._v(" "+s._s(s.$t("message.kechengyudingzixunzhong"))+" ")]),a.user_info?t("div",{staticClass:"name"},[s._v(" "+s._s(a.user_info.name)+" ")]):s._e(),a.message?t("div",{staticClass:"cont"},[s._v(" "+s._s(s.isCancelCourseType(a.message.type)||s.isCancelClassroomType(a.message.type)?`[${s.$t("message.cancel_book")}]`:a.message.message)+" ")]):s._e(),a.message?t("div",{staticClass:"time"},[s._v(" "+s._s(s.$t("message.yudingzixun"))+" "+s._s(a.message.createtime)+" ")]):s._e()]),a.user_info&&a.user_info.is_super_teacher?t("div",{staticClass:"superTeacherTipCon"},[t("img",{staticClass:"iconimg",attrs:{src:e(5371)}}),t("div",{staticClass:"text"},[s._v("超级教师")])]):s._e(),a.user_info&&a.user_info.is_super?t("div",{staticClass:"superStudentTipCon"},[t("img",{staticClass:"iconimg",attrs:{src:e(6733)}}),t("div",{staticClass:"text"},[s._v("超级学生")])]):s._e()])}))],2)])],1),s.ChatList.length>0?t("div",{staticClass:"layoutRight"},[t("vue-custom-scrollbar",{staticClass:"chatScroll",attrs:{settings:s.settings},on:{"ps-scroll-y":s.scrollHanle}},[!s.isSysMess&&s.ChatContent.length>0?t("div",{staticClass:"chatlist"},s._l(s.ChatContent,(function(a,i){return t("div",{key:a.id,class:[a.is_self?"rightChart":"leftChart"]},[a.user_info?t("img",{staticClass:"head",attrs:{src:a.user_info.avatar_text||e(8117),alt:""}}):s._e(),t("div",{staticClass:"infoCon"},[t("div",{staticClass:"top"},[a.user_info?t("div",{staticClass:"name"},[s._v(s._s(a.user_info.name))]):s._e(),t("div",{staticClass:"time"},[s._v(s._s(a.createtime))])]),s.isCancelCourseType(a.type)?t("cancel-course-message",{attrs:{item:a},on:{onSendComplete:s.sendCancelComplete}}):s.isCancelClassroomType(a.type)?t("cancel-classroom-message",{attrs:{item:a},on:{onSendComplete:s.sendCancelComplete}}):t("text-message",{attrs:{item:a}})],1)])})),0):s._e(),s.isSysMess&&s.sysMessContent.length>0?t("div",{staticClass:"chatlist"},s._l(s.sysMessContent,(function(a,i){return t("div",{key:a.id,staticClass:"leftChart"},[t("img",{staticClass:"head",attrs:{src:e(3873),alt:""}}),t("div",{staticClass:"infoCon"},[t("div",{staticClass:"top"},[t("div",{staticClass:"name"},[s._v("系统消息")]),t("div",{staticClass:"time"},[s._v(" "+s._s(a.createtime_text)+" ")])]),t("div",{staticClass:"cont"},[s._v(s._s(a.message))])])])})),0):s._e(),s.ChatContent.length<=0&&s.sysMessContent.length<=0?t("div",{staticClass:"noMessageCon"},[t("div",{staticClass:"text"},[s._v(" "+s._s(s.$t("message.qingxuanzezuobianxiaoxi"))+" ")])]):s._e()]),s.isSysMess?s._e():t("div",{staticClass:"inpCon"},[t("input",{directives:[{name:"model",rawName:"v-model",value:s.SendVal,expression:"SendVal"}],staticClass:"input",attrs:{type:"text"},domProps:{value:s.SendVal},on:{keyup:function(t){return!t.type.indexOf("key")&&s._k(t.keyCode,"enter",13,t.key,"Enter")?null:s.SendMessage.apply(null,arguments)},input:function(t){t.target.composing||(s.SendVal=t.target.value)}}}),t("i",{staticClass:"icon fa fa-send",on:{click:s.SendMessage}})])],1):s._e(),t("img",{staticClass:"fanyiIcon",attrs:{src:e(312),alt:""},on:{click:function(t){s.fanyiIsShow=!0}}}),s.fanyiIsShow?t("div",{staticClass:"fanyiCon"},[t("div",{staticClass:"top"},[t("div",{staticClass:"title"},[s._v(s._s(s.$t("message.fanyi")))]),t("i",{staticClass:"icon fa fa-close",on:{click:function(t){s.fanyiIsShow=!1}}})]),t("div",{staticClass:"main"},[t("div",{staticClass:"twoTop"},[t("div",{staticClass:"leftText"},[s._v(" "+s._s(s.$t("message.fanyiciduihua"))+" ")]),t("el-switch",{attrs:{"active-color":"green","inactive-color":"#000"},model:{value:s.value,callback:function(t){s.value=t},expression:"value"}})],1),t("div",{staticClass:"text2"},[s._v(" "+s._s(s.$t("message.yaogenggaisuoyoufanyi"))+" ")]),t("div",{staticClass:"text3"},[s._v(s._s(s.$t("message.fanyishezhi")))])])]):s._e()])]),t("HomeFooter")],1)},i=[],n=e(1528),r=e(9339),c=e(949),l=e.n(c),o=e(1206),g=function(){var s=this,t=s._self._c;return s.item?t("div",{staticClass:"cont"},[s._v(" "+s._s(s.item.message)+" ")]):s._e()},C=[],u={name:"TextMessage",props:["item"]},m=u,d=e(1001),h=(0,d.Z)(m,g,C,!1,null,"32dc90bc",null),A=h.exports,v=e(1271),f=function(){var s=this,t=s._self._c;return s.message?t("div",{staticClass:"box"},[t("div",{staticClass:"datetime"},[s._v(s._s(`${s.message.date} (${s.weekDay[parseInt(s.message.week)-1]}) ${s.message.start_time} - ${s.message.end_time}`))]),t("div",{staticClass:"content"},[s._v(s._s(s.message.result?s.$t("message.cancel_success"):s.message.content))]),s.message.result?s._e():t("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){return s.cancel(s.message)}}},[s._v(s._s(s.$t("message.cancel")))])],1):s._e()},p=[],_={name:"CancelCourseMessage",props:["item"],computed:{weekDay(){return[this.$t("CourseCalendar.xingqi1"),this.$t("CourseCalendar.xingqi2"),this.$t("CourseCalendar.xingqi3"),this.$t("CourseCalendar.xingqi4"),this.$t("CourseCalendar.xingqi5"),this.$t("CourseCalendar.xingqi6"),this.$t("CourseCalendar.xingqi7")]},message(){return console.log(this.item),this.item?JSON.parse(this.item.message):null}},methods:{async cancel(s){try{const t=await(0,o.gCz)(s.id);if(200===t.code){this.$message.success(this.$t("CourseCalendar.cancel_success"));let t={id:this.item.user_id,message:JSON.stringify({...s,result:!0},null,0),type:v.I_};const e=await(0,o.zKd)(t);200===e.code&&this.$emit("onSendComplete")}}catch(t){let s=err||"出错了";this.$message.error("失败，"+s),console.error(t)}}}},y=_,S=(0,d.Z)(y,f,p,!1,null,"6d1591d7",null),x=S.exports,M=function(){var s=this,t=s._self._c;return s.message?t("div",{staticClass:"box"},[t("div",{staticClass:"datetime"},[s._v(s._s(`${s.message.date} (${s.weekDay[parseInt(s.message.week)-1]}) ${s.message.start_time} - ${s.message.end_time}`))]),t("div",{staticClass:"content"},[s._v(s._s(s.message.result?s.$t("message.cancel_success"):s.message.content))]),s.message.result?s._e():t("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){return s.cancel(s.message)}}},[s._v(s._s(s.$t("message.cancel_classroom")))])],1):s._e()},b=[],w={name:"CancelClassroomMessage",props:["item"],computed:{weekDay(){return[this.$t("CourseCalendar.xingqi1"),this.$t("CourseCalendar.xingqi2"),this.$t("CourseCalendar.xingqi3"),this.$t("CourseCalendar.xingqi4"),this.$t("CourseCalendar.xingqi5"),this.$t("CourseCalendar.xingqi6"),this.$t("CourseCalendar.xingqi7")]},message(){return this.item?JSON.parse(this.item.message):null}},methods:{async cancel(s){try{const t=await(0,o.Ik4)(s.id);if(200===t.code){this.$message.success(this.$t("CourseCalendar.cancel_success"));let t={id:this.item.user_id,message:JSON.stringify({...s,result:!0},null,0),type:v.NW};const e=await(0,o.zKd)(t);200===e.code&&this.$emit("onSendComplete")}}catch(t){let s=err||"出错了";this.$message.error("失败，"+s),console.error(t)}}}},q=w,O=(0,d.Z)(q,M,b,!1,null,"1a304e4e",null),T=O.exports,B={name:"login",components:{CancelClassroomMessage:T,CancelCourseMessage:x,TextMessage:A,HomeHeader:n.Z,HomeFooter:r.Z,vueCustomScrollbar:l()},data(){return{currentTab:"new",currentTabIndex:0,value:!1,fanyiIsShow:!1,settings:{suppressScrollY:!1,suppressScrollX:!1,wheelPropagation:!1},ChatList:[],ChatContent:[],SendVal:"",currentChatTargetObj:{},sysMessageObj:{},isSysMess:!1,sysMessContent:[]}},mounted(){this.getChatList()},methods:{sendCancelComplete(){this.getChatContent()},isCancelCourseType(s){return s===v.I_},isCancelClassroomType(s){return s===v.NW},scrollHanle(s){console.log(s)},getChatList(){(0,o.FBR)().then((s=>{if(200==s.code){let t=s.data;this.ChatList=t.chat_list,this.sysMessageObj=t.message,this.sysMessageObj.select=!1,this.currentChatTargetObj=this.ChatList[0];let e=this.$route.query.targetId||"";e?(this.getChatContent(e),this.isSysMess=!1):(this.selectSysMessage(),this.isSysMess=!0)}}))},ChatContentSelect(s){this.currentChatTargetObj=s,this.getChatContent(),this.isSysMess=!1,this.sysMessageObj.select=!1},selectSysMessage(){this.isSysMess=!0,this.sysMessageObj.select=!0,this.currentChatTargetObj={},this.getSysContent()},getChatContent(s){let t="";if(s){let e=this.ChatList.find((t=>t.user_info?.id==s));if(console.log(s,this.ChatList,e),!e)return this.$message.error("没有找到聊天对象"),!1;t=e.user_info?.id}else t=this.currentChatTargetObj?.user_info?.id,console.log("IdVal",t);(0,o.H$c)({id:t}).then((s=>{if(200==s.code){let t=s.data;this.ChatContent=t}}))},getSysContent(){(0,o.xjF)().then((s=>{if(200==s.code){let t=s.data;this.sysMessContent=t}}))},SendMessage(){let s={id:this.currentChatTargetObj?.user_info?.id,message:this.SendVal,type:v.PY};(0,o.zKd)(s).then((s=>{if(200==s.code){s.data;this.SendVal="",this.getChatContent()}})).catch((s=>{let t=s||"出错了";this.$message.error("失败，"+t)}))}}},k=B,V=(0,d.Z)(k,a,i,!1,null,"34d71249",null),E=V.exports},6733:function(s){s.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAANCAQAAAAz1Zf0AAAAVElEQVR42q2QwQnAMAwDNZo302ga7QqlcULa/nJP65BBmmAgmNIKxqyEav+TYFHkL5akt2BMYd0MIWScOsRtTdFPbZcVNV5Mc+NUaHayDxgA0uPpAq6K5RGPZth4AAAAAElFTkSuQmCC"},3873:function(s){s.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAADgklEQVR4AdyXg7MjWRhHV8Xln7G2jeLatu3dmXkorG27sLatZ8a2bXbS6fub79noG+dUnRgnnVvdX+9QLQAOIG8j3yH7SBcpYAZh9n7f7PO3kQfs0AwA7EM+SVrAh2X2/fs0IvYQ8lPUlk/JQ+oV/Czqy7O1jD2cVKAxKMjDqw2+iBTRWETyIt7ga9BcruHYwi3BRXLWsIjWQCKP2ky0Aq2FhtyFY7fWdF5Z58DR0hy/WvSnaG1+WjlLyKTCGFJiGf/HIvg9Glrib5EgyNn7qz/3dzwCkUmQyTGLo5+EDBgFR0oCzlAM40mrEZ94XbL8zOfGt0EfypLs6LcXR1sgg3ylgjuMakymk3AXcvgpFMCPQf+m/InU0PskxsBBfPE8LAcKzeNRq2E6fjgRw92aSdytVeA+cotBhS160rCG9JyP3s8ompOTKRq3QSaJcgk36RQIC0UoU0mcNvQv9vrlG1wxOYwXbKZVfXHR9WA8CgZueiga70AmDAw/hP0UroQ1n8MNqjHs9vNXeNZhhiWfhTk3o4Wk5+dv2+g2CZ9QQLRc5l0iX1E0+sABfSEUmRTe8Ltx2kjfdPTVmgncblThMu0Euu1G3KRXotduwrn0o172OvEmvfYtv2f6+qNwAIJUAQdqioaLBG94iUnoNulw2mgf3vU48InPhSfsZvTFI3jLacMQrfktZh2SYhkiY/NKs/8YB1GKhgB+wEh9Jj29vjXpFD6nrfiUw4IBWrfvuGwYTcaxzaxHRhRRK3ZADaEt2LBooR2jXY2OLtDtnFiel2dN9zUympH3K0Zx/tD/OPv/v3De0H9ce493Gh09Hg3jb78XF/3/J7502bn207c1Y00LlQq2KMfhzee5jogHNCv6IVomnnxO9uyx/pTHMWN/4ffgaacFQxT9vtuOMYrusqyMLtL9ByZlR8fXn6c5j5C6TApbKDIkFBEtCdDS/S6bAcVls3OJ7j+l1yBcLHDP0/uQqNXWft5pxZ0mDZ60m3GmcmR6SJLAVvzArChCpHgZHCPjHFF+uDqdxH+xCLIVEYzu14CfOuNsfPsG+7jHkBxhGnJjeUNu1HQYj09jhvjfAUgSoZROYZiDMgMdM505tSaLWEDFDq2LNZA9tJiWswHVTNQeDQWZS49JUEsgngnEb8l06FuofsuBmnJ2AOIaIF4DxBeB+DV6nw4qvgaqzoFSOwEmLgBpO58dZgAAAABJRU5ErkJggg=="},8117:function(s){s.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAATlBMVEUAAABocGhsbGxqbGprbGtrbGtra2tra2tqbWpra2tsbGxra2tqbWpra2trbGtrbWtsbGxmbmZra2tra2tra2trbmtqbmprbGtrbGtrbWs8mmz9AAAAGnRSTlMAIEB/v//fn2Dn47evw8/r+zz3cNtYnO/3iA/AuCAAAAIcSURBVHgB7VVHYiMxDAtFglK6W1z+/9BtqYA0Gm/O4c2mgAGgwpufWi2zb0OLR+BvZUZt//tdr+DKOYfC30BR3Vut70r8Sry/gv0rZatXU5QEkL1ea3EVReNVTJHrDBWAz8OZMVgAWab5JpC22I7lLjFM8CGSvVY5AFaBOsa74D3xWmzLYiGHwvrtFf5GUtnFMKgECtEhvf29Ta1CuIcxNKAxPjR7XcvFrGCf5tS27CU4kXZJW1C/9TtBO1DUpPq20AVNBXQxN8246B3gDemPIKk2PXPU5V9jCHtgB/wxhrAHcmBE0EY3PVmQK7s2pWTvA0HNGO8pB7PsKGdNjmnsSDS3gYcATI7ucmrWv0xFbTlgy6m1LgXo0WtTAgug2vQVckBDJAYaAQ5WRIefNpUZkLUVcwfjdaf0F0/Y17pl/b1oR87wQPr8XOn1tvqKu7t/eHy6Ywo6V3RXqQtks/eueep0oAw1hNp/0Fz+YwfsIWgpUTg7GL+ZwWJpDZxuxvBZd8VzNE1vm0oogleGNH51qek8IccMwQnwrCg3Ltq0Aig6d2i8Q7WNF41VOvDMAsYSntgAM7CAsQS9mhQDNts5wXaneO1u9jP8HsBuxh/AJqYJ4LAaEjYP417djP1zvWwAbI5942GDqUGyAWwOR/rvCWB36xTA5nR4OkYcTmeAd2+d4niA1Eng6xyXw2n3KmRzisvNN2u73a6u+anf35UT7+U+y5EAAAAASUVORK5CYII="},312:function(s){s.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAQAAADYBBcfAAACKklEQVR42qWVP2gTURzHP3eXs6R1SAuCqF06tCBYCQVRRDclgpOOUqpLsTgUOiionQQhQ9durYNCQYQUXQodBMHNwb/YbhIzqGBJKSnJ5e6eP9573MMcoaCfzxTI576Pg7sjh6f1cXraHrzcLw8nKJygyPB7tgIxbM3Ea+qraqlWuhWvtWYoENjlPDoKGdibVXXVS31vlgFCApPms2K0rPoQLVPEpfg288UwWgrn6EM4Fy0R2psFWSZrO7fVAezc0as69e1uQFh6gGaTR5l/M7x4rmgytzf0M9s7qcbUWTWm7eX3PENm07c3plC6DI4yNY6Q53CFwB7VbgaFMjiusAHkCScpEJjQM6E/SsZ5RtmSGMriFBfA4h3DN00BbJrh81YEKDLNE/ZpkpEgmTuqqOpYnvFQvAZc5QzPuYgj/e5CS/sjltPcEq8DG0wxzxscnQ9oTKgQG6/JUeEdj5nGIf9SiC5Mx9dVAxy++JKb3OApQxhUY3yd1ITgUWCQEU5sL6gD2F7gOCMMSuGZxZSE7kRtdwX6s7syUSMWE3fUhFiMStXmKn1orpaqRHRJSE2otLJIRGe4+vm++kUPqvHp3nCVDpEe0IUPQGrDNu1TL45e+rK4v5n8AJL0W+vV+7t+ZbJGW5RFUhHwwD3I4iFtSCB6gCIxF9V2baggwKG0qZiIMV0bdLRdMcZmOnToTDbM0XUqK9lW4rJcqFNRL0qYGetMif/7Qv7nT8AfF9l96qB2p0QAAAAASUVORK5CYII="}}]);