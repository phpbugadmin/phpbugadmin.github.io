"use strict";(self["webpackChunkframe"]=self["webpackChunkframe"]||[]).push([[5430],{5430:function(s,e,t){t.r(e),t.d(e,{default:function(){return gs}});var a=function(){var s=this,e=s._self._c;return e("div",{staticClass:"container1"},[e("HomeHeader",{attrs:{topimgIsShow:!1}}),e("div",{staticClass:"listCon"},[e("div",{staticClass:"center"},[e("div",{staticClass:"layoutLeft"},[e("vue-custom-scrollbar",{staticClass:"listScroll",attrs:{settings:s.settings},on:{"ps-scroll-y":s.scrollHanle}},[e("div",{staticClass:"list"},s._l(s.ChatList,(function(a,i){return e("div",{key:a.id,staticClass:"item",class:{active:a.targetId===s.targetId},on:{click:function(e){return s.chatSessionSelected(a)}}},[-1===a.targetId?[e("img",{staticClass:"headimg",attrs:{src:t(3873)}}),e("div",{staticClass:"right"},[e("div",{staticClass:"state"},[s._v(s._s(s.$t("message.sys_msg")))]),e("div",{staticClass:"cont"},[s._v(" "+s._s(s.sysMessageObj.message)+" ")]),e("div",{staticClass:"time"},[s._v(" "+s._s(s.sysMessageObj.createtime_text)+" ")])])]:[a.user_info?e("img",{staticClass:"headimg",attrs:{src:a.user_info.avatar_text||t(8117),alt:""}}):s._e(),e("div",{staticClass:"right"},[e("div",{staticClass:"name"},[s._v(" "+s._s(a.user_info.username)+" ")]),a.message?e("div",{staticClass:"cont"},[s._v(" "+s._s(s.getMessagePreview(a.message.type,a.message.message))+" ")]):s._e(),a.message?e("div",{staticClass:"time"},[s._v(" "+s._s(s.$t("message.yudingzixun"))+" "+s._s(a.message.createtime)+" ")]):s._e()]),a.user_info&&a.user_info.is_super_teacher?e("div",{staticClass:"superTeacherTipCon"},[e("el-tooltip",{attrs:{effect:"dark",content:s.$t("message.super_teacher"),placement:"top-start"}},[e("img",{staticClass:"iconimg",attrs:{src:t(5371)}})])],1):s._e(),a.user_info&&a.user_info.is_super?e("div",{staticClass:"superStudentTipCon"},[e("el-tooltip",{attrs:{effect:"dark",content:s.$t("message.super_student"),placement:"top-start"}},[e("img",{staticClass:"iconimg",attrs:{src:t(6733)}})])],1):s._e()]],2)})),0)])],1),e("div",{staticClass:"layoutRight"},[e("chat-list",{directives:[{name:"show",rawName:"v-show",value:s.targetId>0,expression:"targetId > 0"}],attrs:{"target-id":s.targetId}}),e("sys-msg-list",{directives:[{name:"show",rawName:"v-show",value:!s.targetId||-1===s.targetId,expression:"!targetId || targetId === -1 "}]})],1),s.fanyiIsShow?e("div",{staticClass:"fanyiCon"},[e("div",{staticClass:"top"},[e("div",{staticClass:"title"},[s._v(s._s(s.$t("message.fanyi")))]),e("i",{staticClass:"icon fa fa-close",on:{click:function(e){s.fanyiIsShow=!1}}})]),e("div",{staticClass:"main"},[e("div",{staticClass:"twoTop"},[e("div",{staticClass:"leftText"},[s._v(" "+s._s(s.$t("message.fanyiciduihua"))+" ")]),e("el-switch",{attrs:{"active-color":"green","inactive-color":"#000"},model:{value:s.value,callback:function(e){s.value=e},expression:"value"}})],1),e("div",{staticClass:"text2"},[s._v(" "+s._s(s.$t("message.yaogenggaisuoyoufanyi"))+" ")]),e("div",{staticClass:"text3"},[s._v(s._s(s.$t("message.fanyishezhi")))])])]):s._e()])]),e("HomeFooter")],1)},i=[],r=(t(7658),t(271)),n=t(5113),o=t(949),l=t.n(o),c=t(1206),g=function(){var s=this,e=s._self._c;return s.item?e("div",{staticClass:"msg_text",class:{self:s.item.is_self}},[s._v(" "+s._s(s.item.message)+" ")]):s._e()},u=[],d={name:"TextMessage",props:["item"]},m=d,h=t(1001),C=(0,h.Z)(m,g,u,!1,null,"78fc0433",null),v=C.exports,f=t(1271),p=function(){var s=this,e=s._self._c;return s.message?e("div",{staticClass:"box"},[e("div",{staticClass:"datetime"},[s._v(s._s(`${s.message.date} (${s.weekDay[parseInt(s.message.week)-1]}) ${s.message.start_time} - ${s.message.end_time}`))]),e("div",{staticClass:"content"},[s._v(s._s(s.message.result?s.$t("message.cancel_success"):s.message.content))]),s.message.result?s._e():e("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){return s.cancel(s.message)}}},[s._v(s._s(s.$t("message.cancel")))])],1):s._e()},A=[],_={name:"CancelCourseMessage",props:["item"],computed:{weekDay(){return[this.$t("CourseCalendar.xingqi1"),this.$t("CourseCalendar.xingqi2"),this.$t("CourseCalendar.xingqi3"),this.$t("CourseCalendar.xingqi4"),this.$t("CourseCalendar.xingqi5"),this.$t("CourseCalendar.xingqi6"),this.$t("CourseCalendar.xingqi7")]},message(){return console.log(this.item),this.item?JSON.parse(this.item.message):null}},methods:{async cancel(s){try{const e=await(0,c.gCz)(s.id);if(200===e.code){this.$message.success(this.$t("CourseCalendar.cancel_success"));let e={id:this.item.user_id,message:JSON.stringify({...s,result:!0},null,0),type:f.I_};const t=await(0,c.zKd)(e);200===t.code&&this.$emit("onSendComplete")}}catch(e){let s=err||"出错了";this.$message.error("失败，"+s),console.error(e)}}}},y=_,w=(0,h.Z)(y,p,A,!1,null,"6d1591d7",null),x=w.exports,I=function(){var s=this,e=s._self._c;return s.message?e("div",{staticClass:"box"},[e("div",{staticClass:"datetime"},[s._v(s._s(`${s.message.date} (${s.weekDay[parseInt(s.message.week)-1]}) ${s.message.start_time} - ${s.message.end_time}`))]),e("div",{staticClass:"content"},[s._v(s._s(s.message.result?s.$t("message.cancel_success"):s.message.content))]),s.message.result?s._e():e("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){return s.cancel(s.message)}}},[s._v(s._s(s.$t("message.cancel_classroom")))])],1):s._e()},S=[],T={name:"CancelClassroomMessage",props:["item"],computed:{weekDay(){return[this.$t("CourseCalendar.xingqi1"),this.$t("CourseCalendar.xingqi2"),this.$t("CourseCalendar.xingqi3"),this.$t("CourseCalendar.xingqi4"),this.$t("CourseCalendar.xingqi5"),this.$t("CourseCalendar.xingqi6"),this.$t("CourseCalendar.xingqi7")]},message(){return this.item?JSON.parse(this.item.message):null}},methods:{async cancel(s){try{const e=await(0,c.Ik4)(s.id);if(200===e.code){this.$message.success(this.$t("CourseCalendar.cancel_success"));let e={id:this.item.user_id,message:JSON.stringify({...s,result:!0},null,0),type:f.NW};const t=await(0,c.zKd)(e);200===t.code&&this.$emit("onSendComplete")}}catch(e){let s=err||"出错了";this.$message.error("失败，"+s),console.error(e)}}}},$=T,b=(0,h.Z)($,I,S,!1,null,"1a304e4e",null),k=b.exports,M=function(){var s=this,e=s._self._c;return e("div",{staticClass:"box",class:{self:s.item.is_self}},[s.message?e("div",{staticClass:"content",on:{click:function(e){return e.stopPropagation(),s.goCourse(s.message.course_id)}}},[e("img",{staticClass:"img",attrs:{src:s.message.image}}),e("div",{staticClass:"title"},[s._v(s._s(s.message.name))])]):s._e()])},B=[],L={name:"CourseMessage",props:["item"],computed:{message(){return this.item?JSON.parse(this.item.message):null}},methods:{goCourse(s){s&&this.$router.push({path:"/CourseDetail",query:{id:s}})}}},O=L,V=(0,h.Z)(O,M,B,!1,null,"c8bfb910",null),N=V.exports,R=function(){var s=this,e=s._self._c;return e("div",{staticClass:"chat-list"},[e("virtual-list",{directives:[{name:"show",rawName:"v-show",value:!!s.list?.length,expression:"!!list?.length"}],ref:"vsl",staticClass:"stream scroll-touch",class:{overflow:s.overflow},attrs:{"data-key":"id","data-sources":s.list,"data-component":s.messageComponent,"item-class":"stream-item","estimate-size":100,keeps:100,"item-class-add":s.addItemClass},on:{resized:s.onItemRendered,totop:s.onTotop}}),s.list?.length?s._e():e("div",{directives:[{name:"loading",rawName:"v-loading",value:s.loading,expression:"loading"}],staticClass:"empty"},[s.loading?s._e():e("el-empty")],1),e("div",{directives:[{name:"show",rawName:"v-show",value:s.targetId,expression:"targetId"}],staticClass:"inpCon"},[e("el-input",{staticClass:"input",attrs:{type:"text"},on:{keyup:function(e){return!e.type.indexOf("key")&&s._k(e.keyCode,"enter",13,e.key,"Enter")?null:s.sendMessage.apply(null,arguments)}},model:{value:s.SendVal,callback:function(e){s.SendVal=e},expression:"SendVal"}}),e("i",{staticClass:"icon fa fa-send",on:{click:s.sendMessage}})],1)],1)},q=[],F=t(1450),G=function(){var s=this,e=s._self._c;return e("div",{class:[s.source.is_self?"rightChart":"leftChart"]},[s.source.user_info?e("img",{staticClass:"head",attrs:{src:s.source.user_info.avatar_text||t(8117),alt:""}}):s._e(),e("div",{staticClass:"infoCon"},[e("div",{staticClass:"top"},[s.source.user_info?e("div",{staticClass:"name"},[s._v(s._s(s.source.user_info.name))]):s._e(),e("div",{staticClass:"time"},[s._v(s._s(s.source.createtime))])]),s.isCancelCourseType(s.source.type)?e("cancel-course-message",{attrs:{item:s.source}}):s.isCancelClassroomType(s.source.type)?e("cancel-classroom-message",{attrs:{item:s.source}}):s.isCourseType(s.source.type)?e("course-message",{attrs:{item:s.source}}):e("text-message",{attrs:{item:s.source}})],1)])},Z=[],j={name:"ChatItem",components:{CancelCourseMessage:x,CancelClassroomMessage:k,TextMessage:v,CourseMessage:N},props:{source:{type:Object,default:()=>{}}},data(){return{}},created(){},methods:{isCancelCourseType(s){return s===f.I_},isCancelClassroomType(s){return s===f.NW},isCourseType(s){return s===f.QC}}},D=j,E=(0,h.Z)(D,G,Z,!1,null,"06a4ce9e",null),H=E.exports,Q={name:"ChatList",components:{VirtualList:F.Z},props:{targetId:{type:String|Number,default:null}},data(){return{overflow:!1,messageComponent:H,isFirstPageReady:!1,list:[],SendVal:"",loading:!1}},created(){this.getChatContent()},watch:{targetId(s){this.isFirstPageReady=!1,this.list=[],this.getChatContent()}},methods:{onTotop(){},addItemClass(s){return this.list[s]&&this.list[s].isCreator?"creator":""},onItemRendered(){this.$refs.vsl&&(this.isFirstPageReady||(this.isFirstPageReady=!0,this.setVirtualListToBottom()),this.checkOverFlow())},checkOverFlow(){const s=this.$refs.vsl;s&&(this.overflow=s.getScrollSize()>s.getClientSize())},setVirtualListToIndex(s){this.$refs.vsl&&this.$refs.vsl.scrollToIndex(s)},setVirtualListToOffset(s){this.$refs.vsl&&this.$refs.vsl.scrollToOffset(s)},setVirtualListToBottom(){this.$refs.vsl&&this.$refs.vsl.scrollToBottom()},async sendMessage(){if(!this.targetId)return;let s={id:this.targetId,message:this.SendVal,type:f.PY};try{const e=await(0,c.zKd)(s);if(200===e.code){e.data;this.SendVal="",this.getChatContent()}}catch(e){console.log(e);let s=e||"出错了";this.$message.error("失败，"+s)}},async getChatContent(){if(this.targetId){this.loading=!0;try{const s=await(0,c.H$c)({id:this.targetId});if(200===s.code){let e=s.data;this.list=e||[],this.setVirtualListToBottom()}}catch(s){console.error(s)}this.loading=!1}}}},P=Q,W=(0,h.Z)(P,R,q,!1,null,"5f6726f0",null),z=W.exports,U=function(){var s=this,e=s._self._c;return e("div",{staticClass:"chat-list"},[e("virtual-list",{directives:[{name:"show",rawName:"v-show",value:!!s.list?.length,expression:"!!list?.length"}],ref:"vsl",staticClass:"stream scroll-touch",class:{overflow:s.overflow},attrs:{"data-key":"id","data-sources":s.list,"data-component":s.messageComponent,"item-class":"stream-item","estimate-size":100,keeps:100,"item-class-add":s.addItemClass},on:{resized:s.onItemRendered,totop:s.onTotop}}),s.list?.length?s._e():e("div",{directives:[{name:"loading",rawName:"v-loading",value:s.loading,expression:"loading"}],staticClass:"empty"},[s.loading?s._e():e("el-empty")],1)],1)},Y=[],K=function(){var s=this,e=s._self._c;return e("div",{staticClass:"leftChart"},[e("img",{staticClass:"head",attrs:{src:t(3873),alt:""}}),e("div",{staticClass:"infoCon"},[e("div",{staticClass:"top"},[e("div",{staticClass:"name"},[s._v(s._s(s.$t("message.sys_msg")))]),e("div",{staticClass:"time"},[s._v(" "+s._s(s.$utils.formatDatetime(s.source.createtime))+" ")])]),e("div",{staticClass:"sys_msg"},[s._v(s._s(s.source.message))])])])},X=[],J={name:"SysMsgItem",props:{source:{type:Object,default:()=>{}}}},ss=J,es=(0,h.Z)(ss,K,X,!1,null,"03cf267a",null),ts=es.exports,as={name:"SysMsgList",components:{VirtualList:F.Z},data(){return{overflow:!1,messageComponent:ts,isFirstPageReady:!1,list:[],loading:!1}},created(){this.getSysMesContent()},watch:{targetId(s){this.isFirstPageReady=!1,this.list=[],this.getSysMesContent()}},methods:{onTotop(){},addItemClass(s){return this.list[s]&&this.list[s].isCreator?"creator":""},onItemRendered(){this.$refs.vsl&&(this.isFirstPageReady||(this.isFirstPageReady=!0,this.setVirtualListToBottom()),this.checkOverFlow())},checkOverFlow(){const s=this.$refs.vsl;s&&(this.overflow=s.getScrollSize()>s.getClientSize())},setVirtualListToIndex(s){this.$refs.vsl&&this.$refs.vsl.scrollToIndex(s)},setVirtualListToOffset(s){this.$refs.vsl&&this.$refs.vsl.scrollToOffset(s)},setVirtualListToBottom(){this.$refs.vsl&&this.$refs.vsl.scrollToBottom()},async getSysMesContent(){this.loading=!0;try{const s=await(0,c.xjF)();if(200===s.code){let e=s.data;this.list=e||[],this.setVirtualListToBottom()}}catch(s){console.error(s)}this.loading=!1}}},is=as,rs=(0,h.Z)(is,U,Y,!1,null,"db1ae634",null),ns=rs.exports,os={name:"login",components:{SysMsgList:ns,ChatList:z,CourseMessage:N,CancelClassroomMessage:k,CancelCourseMessage:x,TextMessage:v,HomeHeader:r.Z,HomeFooter:n.Z,vueCustomScrollbar:l()},data(){return{currentTab:"new",currentTabIndex:0,value:!1,fanyiIsShow:!1,settings:{suppressScrollY:!1,suppressScrollX:!1,wheelPropagation:!1},ChatList:[],ChatContent:null,SendVal:"",currentChatTargetObj:{},sysMessageObj:{},isSysMess:!1,sysMessContent:null,targetId:"",selectedItem:null}},mounted(){this.targetId=this.$route.query.targetId||"",this.getChatList()},methods:{sendCancelComplete(){this.getChatContent()},isCancelCourseType(s){return s===f.I_},isCancelClassroomType(s){return s===f.NW},isCourseType(s){return s===f.QC},getMessagePreview(s,e){switch(s){case f.NW:case f.I_:return`[${this.$t("message.cancel_book")}]`;case f.QC:return`[${this.$t("message.msg_course")}]`}return e},scrollHanle(s){console.log(s)},getChatList(){(0,c.FBR)().then((s=>{if(200===s.code){let e=s.data,t=[],a=e.chat_list||[],i=e.message;i&&(i.targetId=-1,t.push(i)),t.push(...a.map((s=>(s.targetId=s?.user_info?.id||"",s)))),this.ChatList=t}}))},chatSessionSelected(s){this.selectedItem=s,this.targetId=s.targetId},selectSysMessage(){this.isSysMess=!0,this.sysMessageObj.select=!0,this.currentChatTargetObj={},this.getSysContent()},getChatContent(s){let e="";if(s){let t=this.ChatList.find((e=>e.user_info?.id==s));if(!t)return this.$message.error("没有找到聊天对象"),!1;this.currentChatTargetObj=t,e=t.user_info?.id}else e=this.currentChatTargetObj?.user_info?.id;e&&(0,c.H$c)({id:e}).then((s=>{if(200===s.code){let e=s.data;this.ChatContent=e||[]}}))},getSysContent(){(0,c.xjF)().then((s=>{if(200==s.code){let e=s.data;this.sysMessContent=e||[]}}))}}},ls=os,cs=(0,h.Z)(ls,a,i,!1,null,"8cee6ae8",null),gs=cs.exports},6733:function(s){s.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAANCAQAAAAz1Zf0AAAAVElEQVR42q2QwQnAMAwDNZo302ga7QqlcULa/nJP65BBmmAgmNIKxqyEav+TYFHkL5akt2BMYd0MIWScOsRtTdFPbZcVNV5Mc+NUaHayDxgA0uPpAq6K5RGPZth4AAAAAElFTkSuQmCC"},3873:function(s){s.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAADgklEQVR4AdyXg7MjWRhHV8Xln7G2jeLatu3dmXkorG27sLatZ8a2bXbS6fub79noG+dUnRgnnVvdX+9QLQAOIG8j3yH7SBcpYAZh9n7f7PO3kQfs0AwA7EM+SVrAh2X2/fs0IvYQ8lPUlk/JQ+oV/Czqy7O1jD2cVKAxKMjDqw2+iBTRWETyIt7ga9BcruHYwi3BRXLWsIjWQCKP2ky0Aq2FhtyFY7fWdF5Z58DR0hy/WvSnaG1+WjlLyKTCGFJiGf/HIvg9Glrib5EgyNn7qz/3dzwCkUmQyTGLo5+EDBgFR0oCzlAM40mrEZ94XbL8zOfGt0EfypLs6LcXR1sgg3ylgjuMakymk3AXcvgpFMCPQf+m/InU0PskxsBBfPE8LAcKzeNRq2E6fjgRw92aSdytVeA+cotBhS160rCG9JyP3s8ompOTKRq3QSaJcgk36RQIC0UoU0mcNvQv9vrlG1wxOYwXbKZVfXHR9WA8CgZueiga70AmDAw/hP0UroQ1n8MNqjHs9vNXeNZhhiWfhTk3o4Wk5+dv2+g2CZ9QQLRc5l0iX1E0+sABfSEUmRTe8Ltx2kjfdPTVmgncblThMu0Euu1G3KRXotduwrn0o172OvEmvfYtv2f6+qNwAIJUAQdqioaLBG94iUnoNulw2mgf3vU48InPhSfsZvTFI3jLacMQrfktZh2SYhkiY/NKs/8YB1GKhgB+wEh9Jj29vjXpFD6nrfiUw4IBWrfvuGwYTcaxzaxHRhRRK3ZADaEt2LBooR2jXY2OLtDtnFiel2dN9zUympH3K0Zx/tD/OPv/v3De0H9ce493Gh09Hg3jb78XF/3/J7502bn207c1Y00LlQq2KMfhzee5jogHNCv6IVomnnxO9uyx/pTHMWN/4ffgaacFQxT9vtuOMYrusqyMLtL9ByZlR8fXn6c5j5C6TApbKDIkFBEtCdDS/S6bAcVls3OJ7j+l1yBcLHDP0/uQqNXWft5pxZ0mDZ60m3GmcmR6SJLAVvzArChCpHgZHCPjHFF+uDqdxH+xCLIVEYzu14CfOuNsfPsG+7jHkBxhGnJjeUNu1HQYj09jhvjfAUgSoZROYZiDMgMdM505tSaLWEDFDq2LNZA9tJiWswHVTNQeDQWZS49JUEsgngnEb8l06FuofsuBmnJ2AOIaIF4DxBeB+DV6nw4qvgaqzoFSOwEmLgBpO58dZgAAAABJRU5ErkJggg=="},8117:function(s){s.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAATlBMVEUAAABocGhsbGxqbGprbGtrbGtra2tra2tqbWpra2tsbGxra2tqbWpra2trbGtrbWtsbGxmbmZra2tra2tra2trbmtqbmprbGtrbGtrbWs8mmz9AAAAGnRSTlMAIEB/v//fn2Dn47evw8/r+zz3cNtYnO/3iA/AuCAAAAIcSURBVHgB7VVHYiMxDAtFglK6W1z+/9BtqYA0Gm/O4c2mgAGgwpufWi2zb0OLR+BvZUZt//tdr+DKOYfC30BR3Vut70r8Sry/gv0rZatXU5QEkL1ea3EVReNVTJHrDBWAz8OZMVgAWab5JpC22I7lLjFM8CGSvVY5AFaBOsa74D3xWmzLYiGHwvrtFf5GUtnFMKgECtEhvf29Ta1CuIcxNKAxPjR7XcvFrGCf5tS27CU4kXZJW1C/9TtBO1DUpPq20AVNBXQxN8246B3gDemPIKk2PXPU5V9jCHtgB/wxhrAHcmBE0EY3PVmQK7s2pWTvA0HNGO8pB7PsKGdNjmnsSDS3gYcATI7ucmrWv0xFbTlgy6m1LgXo0WtTAgug2vQVckBDJAYaAQ5WRIefNpUZkLUVcwfjdaf0F0/Y17pl/b1oR87wQPr8XOn1tvqKu7t/eHy6Ywo6V3RXqQtks/eueep0oAw1hNp/0Fz+YwfsIWgpUTg7GL+ZwWJpDZxuxvBZd8VzNE1vm0oogleGNH51qek8IccMwQnwrCg3Ltq0Aig6d2i8Q7WNF41VOvDMAsYSntgAM7CAsQS9mhQDNts5wXaneO1u9jP8HsBuxh/AJqYJ4LAaEjYP417djP1zvWwAbI5942GDqUGyAWwOR/rvCWB36xTA5nR4OkYcTmeAd2+d4niA1Eng6xyXw2n3KmRzisvNN2u73a6u+anf35UT7+U+y5EAAAAASUVORK5CYII="}}]);