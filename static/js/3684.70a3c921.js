"use strict";(self["webpackChunkframe"]=self["webpackChunkframe"]||[]).push([[3684],{3684:function(s,t,e){e.r(t),e.d(t,{default:function(){return ws}});var a=function(){var s=this,t=s._self._c;return t("div",{staticClass:"container1"},[t("HomeHeader",{attrs:{topimgIsShow:!1}}),t("div",{staticClass:"listCon"},[t("div",{staticClass:"center"},[t("div",{staticClass:"layoutLeft"},[t("vue-custom-scrollbar",{staticClass:"listScroll",attrs:{settings:s.settings},on:{"ps-scroll-y":s.scrollHanle}},[t("div",{staticClass:"list"},s._l(s.ChatList,(function(e,a){return t("div",{key:e.id,on:{click:function(t){return s.chatSessionSelected(e)}}},[-1===e.targetId?[t("sys-msg-session-item",{key:e.targetId,class:{active:e.targetId===s.targetId},attrs:{item:e}})]:[t("chat-session-item",{key:e.targetId,class:{active:e.targetId===s.targetId},attrs:{item:e}})]],2)})),0)])],1),t("div",{staticClass:"layoutRight"},[t("chat-list",{directives:[{name:"show",rawName:"v-show",value:s.targetId>0,expression:"targetId > 0"}],attrs:{"target-id":s.targetId}}),s.targetId&&-1!==s.targetId?s._e():t("sys-msg-list")],1),s.fanyiIsShow?t("div",{staticClass:"fanyiCon"},[t("div",{staticClass:"top"},[t("div",{staticClass:"title"},[s._v(s._s(s.$t("message.fanyi")))]),t("i",{staticClass:"icon fa fa-close",on:{click:function(t){s.fanyiIsShow=!1}}})]),t("div",{staticClass:"main"},[t("div",{staticClass:"twoTop"},[t("div",{staticClass:"leftText"},[s._v(" "+s._s(s.$t("message.fanyiciduihua"))+" ")]),t("el-switch",{attrs:{"active-color":"green","inactive-color":"#000"},model:{value:s.value,callback:function(t){s.value=t},expression:"value"}})],1),t("div",{staticClass:"text2"},[s._v(" "+s._s(s.$t("message.yaogenggaisuoyoufanyi"))+" ")]),t("div",{staticClass:"text3"},[s._v(s._s(s.$t("message.fanyishezhi")))])])]):s._e()])]),t("HomeFooter")],1)},i=[],r=e(6973),n=e(5113),l=e(949),o=e.n(l),c=e(1206),d=function(){var s=this,t=s._self._c;return s.item?t("div",{staticClass:"msg_text",class:{self:s.item.is_self}},[s._v(" "+s._s(s.item.message)+" ")]):s._e()},g=[],m={name:"TextMessage",props:["item"]},h=m,u=e(1001),C=(0,u.Z)(h,d,g,!1,null,"cd8f03b8",null),v=C.exports,f=function(){var s=this,t=s._self._c;return s.message?t("div",{staticClass:"box"},[t("div",{staticClass:"datetime"},[s._v(s._s(`${s.message.date} (${s.weekDay[parseInt(s.message.week)-1]}) ${s.message.start_time} - ${s.message.end_time}`))]),t("div",{staticClass:"content"},[s._v(s._s(s.message.result?s.$t("message.cancel_success"):s.message.content))]),s.message.result?s._e():t("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){return s.cancel(s.message)}}},[s._v(s._s(s.$t("message.cancel")))])],1):s._e()},p=[],_=e(1271),A={name:"CancelCourseMessage",props:["item"],computed:{weekDay(){return[this.$t("CourseCalendar.xingqi1"),this.$t("CourseCalendar.xingqi2"),this.$t("CourseCalendar.xingqi3"),this.$t("CourseCalendar.xingqi4"),this.$t("CourseCalendar.xingqi5"),this.$t("CourseCalendar.xingqi6"),this.$t("CourseCalendar.xingqi7")]},message(){return this.item?JSON.parse(this.item.message):null}},methods:{async cancel(s){try{const t=await(0,c.gCz)(s.id);if(200===t.code){this.$message.success(this.$t("CourseCalendar.cancel_success"));let t={id:this.item.user_id,message:JSON.stringify({...s,result:!0},null,0),type:_.I_};const e=await(0,c.zKd)(t);200===e.code&&this.$emit("onSendComplete")}}catch(t){let s=err||"出错了";this.$message.error("失败，"+s),console.error(t)}}}},y=A,w=(0,u.Z)(y,f,p,!1,null,"42f2ac20",null),I=w.exports,x=function(){var s=this,t=s._self._c;return s.message?t("div",{staticClass:"box"},[t("div",{staticClass:"datetime"},[s._v(s._s(`${s.message.date} (${s.weekDay[parseInt(s.message.week)-1]}) ${s.message.start_time} - ${s.message.end_time}`))]),t("div",{staticClass:"content"},[s._v(s._s(s.message.result?s.$t("message.cancel_success"):s.message.content))]),s.message.result?s._e():t("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){return s.cancel(s.message)}}},[s._v(s._s(s.$t("message.cancel_classroom")))])],1):s._e()},S=[],$={name:"CancelClassroomMessage",props:["item"],computed:{weekDay(){return[this.$t("CourseCalendar.xingqi1"),this.$t("CourseCalendar.xingqi2"),this.$t("CourseCalendar.xingqi3"),this.$t("CourseCalendar.xingqi4"),this.$t("CourseCalendar.xingqi5"),this.$t("CourseCalendar.xingqi6"),this.$t("CourseCalendar.xingqi7")]},message(){return this.item?JSON.parse(this.item.message):null}},methods:{async cancel(s){try{const t=await(0,c.Ik4)(s.id);if(200===t.code){this.$message.success(this.$t("CourseCalendar.cancel_success"));let t={id:this.item.user_id,message:JSON.stringify({...s,result:!0},null,0),type:_.NW};const e=await(0,c.zKd)(t);200===e.code&&this.$emit("onSendComplete")}}catch(t){let s=err||"出错了";this.$message.error("失败，"+s),console.error(t)}}}},T=$,k=(0,u.Z)(T,x,S,!1,null,"1a304e4e",null),b=k.exports,R=function(){var s=this,t=s._self._c;return t("div",{staticClass:"box",class:{self:s.item.is_self}},[s.message?t("div",{staticClass:"content",on:{click:function(t){return t.stopPropagation(),s.goCourse(s.message.course_id)}}},[t("img",{staticClass:"img",attrs:{src:s.message.image}}),t("div",{staticClass:"title"},[s._v(s._s(s.message.name))])]):s._e()])},M=[],V=(e(7658),{name:"CourseMessage",props:["item"],computed:{message(){return this.item?JSON.parse(this.item.message):null}},methods:{goCourse(s){s&&this.$router.push({path:"/CourseDetail",query:{id:s}})}}}),L=V,N=(0,u.Z)(L,R,M,!1,null,"c8bfb910",null),B=N.exports,O=function(){var s=this,t=s._self._c;return t("div",{staticClass:"chat-list"},[t("virtual-list",{directives:[{name:"show",rawName:"v-show",value:!!s.list?.length,expression:"!!list?.length"}],ref:"vsl",staticClass:"stream scroll-touch",class:{overflow:s.overflow},attrs:{"data-key":"id","data-sources":s.list,"data-component":s.messageComponent,"item-class":"stream-item","estimate-size":100,keeps:100,"item-class-add":s.addItemClass},on:{resized:s.onItemRendered,totop:s.onTotop}},[t("div",{directives:[{name:"show",rawName:"v-show",value:s.overflow,expression:"overflow"}],staticClass:"header",attrs:{slot:"header"},slot:"header"},[t("i",{directives:[{name:"show",rawName:"v-show",value:!s.finished,expression:"!finished"}],staticClass:"el-icon-loading iconSize"}),t("div",{directives:[{name:"show",rawName:"v-show",value:s.finished,expression:"finished"}],staticClass:"finished"},[s._v("No more data")])])]),s.list?.length?s._e():t("div",{directives:[{name:"loading",rawName:"v-loading",value:s.loading,expression:"loading"}],staticClass:"empty"},[s.loading?s._e():t("el-empty")],1),t("div",{directives:[{name:"show",rawName:"v-show",value:s.targetId,expression:"targetId"}],staticClass:"inpCon"},[t("el-input",{staticClass:"input",attrs:{type:"text",maxlength:"255"},on:{keyup:function(t){return!t.type.indexOf("key")&&s._k(t.keyCode,"enter",13,t.key,"Enter")?null:s.sendMessage.apply(null,arguments)}},model:{value:s.SendVal,callback:function(t){s.SendVal=t},expression:"SendVal"}}),s.sending?s._e():t("i",{staticClass:"icon fa fa-send",on:{click:s.sendMessage}}),s.sending?t("i",{staticClass:"icon el-icon-loading"}):s._e()],1)],1)},Z=[],q=e(1450),G=function(){var s=this,t=s._self._c;return t("div",{class:[s.source.is_self?"rightChart":"leftChart"]},[s.source.user_info?t("img",{staticClass:"head",attrs:{src:s.source.user_info.avatar_text||e(8117),alt:""}}):s._e(),t("div",{staticClass:"infoCon"},[t("div",{staticClass:"top"},[s.source.user_info?t("div",{staticClass:"name"},[s._v(s._s(s.source.user_info.name))]):s._e(),t("div",{staticClass:"time"},[s._v(s._s(s.source.createtime))])]),s.isCancelCourseType(s.source.type)?t("cancel-course-message",{attrs:{item:s.source}}):s.isCancelClassroomType(s.source.type)?t("cancel-classroom-message",{attrs:{item:s.source}}):s.isCourseType(s.source.type)?t("course-message",{attrs:{item:s.source}}):t("text-message",{attrs:{item:s.source}})],1)])},F=[],U={name:"ChatItem",components:{CancelCourseMessage:I,CancelClassroomMessage:b,TextMessage:v,CourseMessage:B},props:{source:{type:Object,default:()=>{}}},data(){return{}},created(){},methods:{isCancelCourseType(s){return s===_.I_},isCancelClassroomType(s){return s===_.NW},isCourseType(s){return s===_.QC}}},D=U,E=(0,u.Z)(D,G,F,!1,null,"06a4ce9e",null),H=E.exports,P={name:"ChatList",components:{VirtualList:q.Z},props:{targetId:{type:String|Number,default:null}},data(){return{overflow:!1,messageComponent:H,isFirstPageReady:!1,list:[],SendVal:"",loading:!1,sending:!1,finished:!1,fetching:!1}},created(){this.getChatContent()},watch:{targetId(s){this.isFirstPageReady=!1,this.finished=!1,this.list=[],s>0&&this.getChatContent()},vuex_new_msg(s){s&&(s.is_self||this.targetId!=s.user_id||(this.list.push(s),this.setVirtualListToBottom(),this.$store.dispatch("setMessageReadState",{targetId:this.targetId,msgId:s.id})),this.$emit("onNewMessage",s))}},methods:{async onTotop(){this.finished||this.fetching||await this.loadMore()},addItemClass(s){},onItemRendered(){this.$refs.vsl&&(this.isFirstPageReady||(this.isFirstPageReady=!0,this.setVirtualListToBottom()),this.checkOverFlow())},checkOverFlow(){const s=this.$refs.vsl;s&&(this.overflow=s.getScrollSize()>s.getClientSize())},setVirtualListToIndex(s){this.$refs.vsl&&this.$refs.vsl.scrollToIndex(s)},setVirtualListToOffset(s){this.$refs.vsl&&this.$refs.vsl.scrollToOffset(s)},setVirtualListToBottom(){this.$refs.vsl&&this.$refs.vsl.scrollToBottom()},async sendMessage(){if(!this.targetId||!this.SendVal)return;this.sending=!0;let s={id:this.targetId,message:this.SendVal,type:_.PY};try{const t=await(0,c.zKd)(s);if(200===t.code){let e=t.data;this.SendVal="",this.targetId===s.id&&(e.is_self=1,this.list.push(e),this.setVirtualListToBottom(),await this.$store.dispatch("setMessageReadState",{targetId:this.targetId,msgId:e.id})),this.$emit("onNewMessage",e)}}catch(t){console.log(t);let s=t||"出错了";this.$message.error("失败，"+s)}this.sending=!1},async getChatContent(){if(this.targetId){this.loading=!0;try{let s={id:this.targetId};const t=await(0,c.H$c)(s);if(200===t.code&&s.id===this.targetId){let s=t.data;if(this.list=s||[],console.log(this.list.length),this.list.length<50&&(this.finished=!0),this.setVirtualListToBottom(),this.list.length){let s=this.list[this.list.length-1].id;await this.$store.dispatch("setMessageReadState",{targetId:this.targetId,msgId:s})}}}catch(s){console.error(s)}this.loading=!1}},async loadMore(){this.fetching=!0;try{let s={id:this.targetId,max_id:this.list[0].id};const t=await(0,c.H$c)(s);if(200===t.code&&s.id===this.targetId){let s=t.data;s?.length<50&&(this.finished=!0),this.list=[...s,...this.list],this.$nextTick((()=>{this.setVirtualListToIndex(s.length)}))}}catch(s){console.error(s)}this.fetching=!1}}},Q=P,z=(0,u.Z)(Q,O,Z,!1,null,"6b745dbd",null),W=z.exports,j=function(){var s=this,t=s._self._c;return t("div",{staticClass:"chat-list"},[t("virtual-list",{directives:[{name:"show",rawName:"v-show",value:!!s.list?.length,expression:"!!list?.length"}],ref:"vsl",staticClass:"stream scroll-touch",class:{overflow:s.overflow},attrs:{"data-key":"id","data-sources":s.list,"data-component":s.messageComponent,"item-class":"stream-item","estimate-size":100,keeps:100,"item-class-add":s.addItemClass},on:{resized:s.onItemRendered,totop:s.onTotop}}),s.list?.length?s._e():t("div",{directives:[{name:"loading",rawName:"v-loading",value:s.loading,expression:"loading"}],staticClass:"empty"},[s.loading?s._e():t("el-empty")],1)],1)},Y=[],K=function(){var s=this,t=s._self._c;return t("div",{staticClass:"leftChart"},[t("img",{staticClass:"head",attrs:{src:e(3873),alt:""}}),t("div",{staticClass:"infoCon"},[t("div",{staticClass:"top"},[t("div",{staticClass:"name"},[s._v(s._s(s.$t("message.sys_msg")))]),t("div",{staticClass:"time"},[s._v(" "+s._s(s.$utils.formatDatetime(s.source.createtime))+" ")])]),t("div",{staticClass:"sys_msg"},[s._v(s._s(s.source.message))])])])},X=[],J={name:"SysMsgItem",props:{source:{type:Object,default:()=>{}}}},ss=J,ts=(0,u.Z)(ss,K,X,!1,null,"03cf267a",null),es=ts.exports,as={name:"SysMsgList",components:{VirtualList:q.Z},data(){return{overflow:!1,messageComponent:es,isFirstPageReady:!1,list:[],loading:!1,targetId:-1}},created(){this.getSysMesContent()},watch:{targetId(s){this.isFirstPageReady=!1,this.list=[],this.getSysMesContent()}},methods:{onTotop(){},addItemClass(s){return this.list[s]&&this.list[s].isCreator?"creator":""},onItemRendered(){this.$refs.vsl&&(this.isFirstPageReady||(this.isFirstPageReady=!0,this.setVirtualListToBottom()),this.checkOverFlow())},checkOverFlow(){const s=this.$refs.vsl;s&&(this.overflow=s.getScrollSize()>s.getClientSize())},setVirtualListToIndex(s){this.$refs.vsl&&this.$refs.vsl.scrollToIndex(s)},setVirtualListToOffset(s){this.$refs.vsl&&this.$refs.vsl.scrollToOffset(s)},setVirtualListToBottom(){this.$refs.vsl&&this.$refs.vsl.scrollToBottom()},async getSysMesContent(){this.loading=!0;try{const s=await(0,c.xjF)();if(200===s.code){let t=s.data;if(this.list=t||[],this.setVirtualListToBottom(),this.list=this.list.reverse(),this.list.length){let s=this.list[this.list.length-1].id;await this.$store.dispatch("setMessageReadState",{targetId:this.targetId,msgId:s})}}}catch(s){console.error(s)}this.loading=!1}}},is=as,rs=(0,u.Z)(is,j,Y,!1,null,"41542d7d",null),ns=rs.exports,ls=function(){var s=this,t=s._self._c;return s.item?t("div",{staticClass:"sessionItem"},[t("el-badge",{staticClass:"badge",attrs:{"is-dot":"",hidden:!s.hasUnRead}},[s.item.user_info?t("img",{staticClass:"headimg",attrs:{src:s.item.user_info.avatar_text||e(8117),alt:""}}):s._e()]),t("div",{staticClass:"right"},[t("div",{staticClass:"name"},[s._v(" "+s._s(s.item.user_info.username)+" ")]),s.item.message?t("div",{staticClass:"cont"},[s._v(" "+s._s(s.getMessagePreview(s.item.message.type,s.item.message.message))+" ")]):s._e(),s.item.message?t("div",{staticClass:"time"},[s._v(" "+s._s(s.$t("message.yudingzixun"))+" "+s._s(s.item.message.createtime)+" ")]):s._e()]),s.item.user_info&&s.item.user_info.is_super_teacher?t("div",{staticClass:"superTeacherTipCon"},[t("el-tooltip",{attrs:{effect:"dark",content:s.$t("message.super_teacher"),placement:"top-start"}},[t("img",{staticClass:"iconimg",attrs:{src:e(5371)}})])],1):s._e(),s.item.user_info&&s.item.user_info.is_super?t("div",{staticClass:"superStudentTipCon"},[t("el-tooltip",{attrs:{effect:"dark",content:s.$t("message.super_student"),placement:"top-start"}},[t("img",{staticClass:"iconimg",attrs:{src:e(6733)}})])],1):s._e()],1):s._e()},os=[],cs={name:"ChatSessionItem",props:["item"],computed:{hasUnRead(){return!(!this.item||!this.item.targetId)&&this.$store.getters.unReadStatus.get(this.item.targetId)}},methods:{getMessagePreview(s,t){switch(s){case _.NW:case _.I_:return`[${this.$t("message.cancel_book")}]`;case _.QC:return`[${this.$t("message.msg_course")}]`}return t}}},ds=cs,gs=(0,u.Z)(ds,ls,os,!1,null,"0ecb64f0",null),ms=gs.exports,hs=function(){var s=this,t=s._self._c;return s.item?t("div",{staticClass:"sessionItem"},[t("el-badge",{staticClass:"badge",attrs:{"is-dot":"",hidden:!s.hasUnRead}},[t("img",{staticClass:"headimg",attrs:{src:e(3873)}})]),t("div",{staticClass:"right"},[t("div",{staticClass:"state"},[s._v(s._s(s.$t("message.sys_msg")))]),t("div",{staticClass:"cont"},[s._v(" "+s._s(s.item.message)+" ")]),t("div",{staticClass:"time"},[s._v(" "+s._s(s.item.createtime_text)+" ")])])],1):s._e()},us=[],Cs={name:"SysMsgSessionItem",props:["item"],computed:{hasUnRead(){return!(!this.item||!this.item.targetId)&&this.$store.getters.unReadStatus.get(this.item.targetId)}}},vs=Cs,fs=(0,u.Z)(vs,hs,us,!1,null,"d0824df2",null),ps=fs.exports,_s={name:"login",components:{SysMsgSessionItem:ps,ChatSessionItem:ms,SysMsgList:ns,ChatList:W,CourseMessage:B,CancelClassroomMessage:b,CancelCourseMessage:I,TextMessage:v,HomeHeader:r.Z,HomeFooter:n.Z,vueCustomScrollbar:o()},data(){return{currentTab:"new",currentTabIndex:0,value:!1,fanyiIsShow:!1,settings:{suppressScrollY:!1,suppressScrollX:!1,wheelPropagation:!1},ChatList:[],ChatContent:null,SendVal:"",currentChatTargetObj:{},sysMessageObj:{},isSysMess:!1,targetId:"",selectedItem:null}},watch:{vuex_chat_list(s){this.ChatList=s||[]}},mounted(){this.targetId=this.$route.query.targetId||"",this.getChatList()},methods:{scrollHanle(s){},async getChatList(){await this.$store.dispatch("syncChatList")},chatSessionSelected(s){this.selectedItem=s,this.targetId=s.targetId}}},As=_s,ys=(0,u.Z)(As,a,i,!1,null,"6716da25",null),ws=ys.exports},6733:function(s){s.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAANCAQAAAAz1Zf0AAAAVElEQVR42q2QwQnAMAwDNZo302ga7QqlcULa/nJP65BBmmAgmNIKxqyEav+TYFHkL5akt2BMYd0MIWScOsRtTdFPbZcVNV5Mc+NUaHayDxgA0uPpAq6K5RGPZth4AAAAAElFTkSuQmCC"},3873:function(s){s.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAADgklEQVR4AdyXg7MjWRhHV8Xln7G2jeLatu3dmXkorG27sLatZ8a2bXbS6fub79noG+dUnRgnnVvdX+9QLQAOIG8j3yH7SBcpYAZh9n7f7PO3kQfs0AwA7EM+SVrAh2X2/fs0IvYQ8lPUlk/JQ+oV/Czqy7O1jD2cVKAxKMjDqw2+iBTRWETyIt7ga9BcruHYwi3BRXLWsIjWQCKP2ky0Aq2FhtyFY7fWdF5Z58DR0hy/WvSnaG1+WjlLyKTCGFJiGf/HIvg9Glrib5EgyNn7qz/3dzwCkUmQyTGLo5+EDBgFR0oCzlAM40mrEZ94XbL8zOfGt0EfypLs6LcXR1sgg3ylgjuMakymk3AXcvgpFMCPQf+m/InU0PskxsBBfPE8LAcKzeNRq2E6fjgRw92aSdytVeA+cotBhS160rCG9JyP3s8ompOTKRq3QSaJcgk36RQIC0UoU0mcNvQv9vrlG1wxOYwXbKZVfXHR9WA8CgZueiga70AmDAw/hP0UroQ1n8MNqjHs9vNXeNZhhiWfhTk3o4Wk5+dv2+g2CZ9QQLRc5l0iX1E0+sABfSEUmRTe8Ltx2kjfdPTVmgncblThMu0Euu1G3KRXotduwrn0o172OvEmvfYtv2f6+qNwAIJUAQdqioaLBG94iUnoNulw2mgf3vU48InPhSfsZvTFI3jLacMQrfktZh2SYhkiY/NKs/8YB1GKhgB+wEh9Jj29vjXpFD6nrfiUw4IBWrfvuGwYTcaxzaxHRhRRK3ZADaEt2LBooR2jXY2OLtDtnFiel2dN9zUympH3K0Zx/tD/OPv/v3De0H9ce493Gh09Hg3jb78XF/3/J7502bn207c1Y00LlQq2KMfhzee5jogHNCv6IVomnnxO9uyx/pTHMWN/4ffgaacFQxT9vtuOMYrusqyMLtL9ByZlR8fXn6c5j5C6TApbKDIkFBEtCdDS/S6bAcVls3OJ7j+l1yBcLHDP0/uQqNXWft5pxZ0mDZ60m3GmcmR6SJLAVvzArChCpHgZHCPjHFF+uDqdxH+xCLIVEYzu14CfOuNsfPsG+7jHkBxhGnJjeUNu1HQYj09jhvjfAUgSoZROYZiDMgMdM505tSaLWEDFDq2LNZA9tJiWswHVTNQeDQWZS49JUEsgngnEb8l06FuofsuBmnJ2AOIaIF4DxBeB+DV6nw4qvgaqzoFSOwEmLgBpO58dZgAAAABJRU5ErkJggg=="},8117:function(s){s.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAATlBMVEUAAABocGhsbGxqbGprbGtrbGtra2tra2tqbWpra2tsbGxra2tqbWpra2trbGtrbWtsbGxmbmZra2tra2tra2trbmtqbmprbGtrbGtrbWs8mmz9AAAAGnRSTlMAIEB/v//fn2Dn47evw8/r+zz3cNtYnO/3iA/AuCAAAAIcSURBVHgB7VVHYiMxDAtFglK6W1z+/9BtqYA0Gm/O4c2mgAGgwpufWi2zb0OLR+BvZUZt//tdr+DKOYfC30BR3Vut70r8Sry/gv0rZatXU5QEkL1ea3EVReNVTJHrDBWAz8OZMVgAWab5JpC22I7lLjFM8CGSvVY5AFaBOsa74D3xWmzLYiGHwvrtFf5GUtnFMKgECtEhvf29Ta1CuIcxNKAxPjR7XcvFrGCf5tS27CU4kXZJW1C/9TtBO1DUpPq20AVNBXQxN8246B3gDemPIKk2PXPU5V9jCHtgB/wxhrAHcmBE0EY3PVmQK7s2pWTvA0HNGO8pB7PsKGdNjmnsSDS3gYcATI7ucmrWv0xFbTlgy6m1LgXo0WtTAgug2vQVckBDJAYaAQ5WRIefNpUZkLUVcwfjdaf0F0/Y17pl/b1oR87wQPr8XOn1tvqKu7t/eHy6Ywo6V3RXqQtks/eueep0oAw1hNp/0Fz+YwfsIWgpUTg7GL+ZwWJpDZxuxvBZd8VzNE1vm0oogleGNH51qek8IccMwQnwrCg3Ltq0Aig6d2i8Q7WNF41VOvDMAsYSntgAM7CAsQS9mhQDNts5wXaneO1u9jP8HsBuxh/AJqYJ4LAaEjYP417djP1zvWwAbI5942GDqUGyAWwOR/rvCWB36xTA5nR4OkYcTmeAd2+d4niA1Eng6xyXw2n3KmRzisvNN2u73a6u+anf35UT7+U+y5EAAAAASUVORK5CYII="}}]);