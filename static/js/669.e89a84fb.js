"use strict";(self["webpackChunkframe"]=self["webpackChunkframe"]||[]).push([[669],{1669:function(t,a,e){e.r(a),e.d(a,{default:function(){return V}});var i=function(){var t=this,a=t._self._c;return a("div",{staticClass:"container ConSix"},[a("HomeHeader",{attrs:{topimgIsShow:!1}}),a("div",{staticClass:"listCon"},[a("div",{staticClass:"center"},[a("div",{staticClass:"topTitle"},[t._v(" "+t._s(t.$t("jsdSuperTeacher.chaojijiaoshi"))+" ")]),a("el-tabs",{staticClass:"tab-list",on:{"tab-click":t.tabChangeTap},model:{value:t.currentTabLabel,callback:function(a){t.currentTabLabel=a},expression:"currentTabLabel"}},t._l(t.tabList,(function(e){return a("el-tab-pane",{key:e.id,attrs:{name:e.name}},[a("template",{slot:"label"},[a("span",[t._v(t._s(e.lable))])])],2)})),1),a("div",{directives:[{name:"show",rawName:"v-show",value:"上课率"==t.currentTabLabel,expression:"currentTabLabel == '上课率'"}],staticClass:"ConOne"},[a("ShangKeLv",{ref:"refShangKeLv"})],1),a("div",{directives:[{name:"show",rawName:"v-show",value:"预定取消率"==t.currentTabLabel,expression:"currentTabLabel == '预定取消率'"}],staticClass:"ConOne ConTwo"},[a("YuDingQuXiaoLv",{ref:"refYuDingQuXiaoLv"})],1),a("div",{directives:[{name:"show",rawName:"v-show",value:"回复率"==t.currentTabLabel,expression:"currentTabLabel == '回复率'"}],staticClass:"ConOne ConTwo ConTre"},[a("HuiFuLv",{ref:"refHuiFuLv"})],1),a("div",{directives:[{name:"show",rawName:"v-show",value:"预定转化率"==t.currentTabLabel,expression:"currentTabLabel == '预定转化率'"}],staticClass:"ConOne ConTwo ConFour"},[a("YuDingZhuanHua",{ref:"refYuDingZhuanHua"})],1),a("div",{directives:[{name:"show",rawName:"v-show",value:"超级教师"==t.currentTabLabel,expression:"currentTabLabel == '超级教师'"}],staticClass:"ConOne ConTwo ConFive"},[a("ChaoJiJiaoShi",{ref:"refChaoJiJiaoShi"})],1),a("div",{directives:[{name:"show",rawName:"v-show",value:"收入"==t.currentTabLabel,expression:"currentTabLabel == '收入'"}],staticClass:"ConOne ConSix"},[a("ShouRuLv",{ref:"refShouRuLv"})],1)],1)]),a("HomeFooter")],1)},s=[],n=(e(7658),e(528)),v=e(9339),l=function(){var t=this,a=t._self._c;return a("div",{staticClass:"container"},[a("div",{staticClass:"title"},[t._v(t._s(t.$t("STCYuDingZhuanHua.xuanzeshijian")))]),a("el-date-picker",{staticClass:"yueSelect",attrs:{type:"daterange","range-separator":t.$t("STCYuDingZhuanHua.zhi"),"start-placeholder":t.$t("STCYuDingZhuanHua.kaishiriqi"),"end-placeholder":t.$t("STCYuDingZhuanHua.jiehsuriqi"),"value-format":"yyyy-MM-dd"},on:{change:t.LvSelectDayChange},model:{value:t.value1,callback:function(a){t.value1=a},expression:"value1"}}),a("div",{staticClass:"dataCon"},[a("div",{staticClass:"dataItem"},[a("div",{staticClass:"num"},[t._v(t._s(t.LvObj.total_ratio))]),a("div",{staticClass:"text"},[t._v(t._s(t.$t("STCYuDingZhuanHua.pingjunyudingzhuanhualv")))])]),a("div",{staticClass:"dataItem"},[a("div",{staticClass:"num"},[t._v(t._s(t.LvObj.avg_number))]),a("div",{staticClass:"text"},[t._v(t._s(t.$t("STCYuDingZhuanHua.pingjunyudingshu")))])]),a("div",{staticClass:"dataItem"},[a("div",{staticClass:"num"},[t._v(t._s(t.LvObj.number))]),a("div",{staticClass:"text"},[t._v(t._s(t.$t("STCYuDingZhuanHua.pingjunyudingquxiaoshu")))])])]),a("div",{staticClass:"tongjiChart"},[a("div",{staticClass:"left"},[a("div",{staticClass:"title"},[t._v(t._s(t.$t("STCYuDingZhuanHua.pingjunyudingzhuanhualv")))]),a("div",{staticClass:"desc"},[t._v(" "+t._s(t.LvObj.describe)+" ")])]),a("div",{staticClass:"right"},[a("div",{staticClass:"timeSelectCon"},[t._v(" "+t._s(t.LvStartDay)+t._s(t.$t("STCYuDingZhuanHua.zhi"))+t._s(t.LvEndDay)+" ")]),a("div",{staticClass:"charCon",attrs:{id:"yuDingZhuanHuaLvChatDom"}})])])],1)},r=[],h=e(9706),u=e(8495),o=e(1206),d={name:"login",components:{},data(){return{value1:"",LvStartDay:"",LvEndDay:"",LvObj:"",LvData:[],LvChat:"",LvSelectDayVal:""}},mounted(){},methods:{LvGetCurrentMonthDay(){let t=(0,u.SF)();this.LvStartDay=t.startDate,console.log("this.LvStartDay",this.LvStartDay),this.LvEndDay=t.endDate,this.getLv()},getLv(){let t={start_date:this.LvStartDay,end_date:this.LvEndDay};(0,o.w8)(t).then((t=>{if(200==t.code){let a=t.data;this.LvObj=a,this.LvData=a.date_radio,this.LvChartInit()}}))},LvChartInit(){this.LvChat||(this.LvChat=h.S1(document.getElementById("yuDingZhuanHuaLvChatDom")));let t=[],a=[];for(let e of this.LvData)t.push(e.date),a.push(parseFloat(e.radio));this.LvChat.setOption({tooltip:{},xAxis:{type:"category",data:t},yAxis:{type:"value",axisLabel:{formatter:"{value}%"}},series:[{data:a,type:"line",itemStyle:{color:"black"}}]})},LvSelectDayChange(t){this.LvStartDay=t[0],this.LvEndDay=t[1],this.getLv()}}},c=d,C=e(1001),L=(0,C.Z)(c,l,r,!1,null,"33ddc0a6",null),y=L.exports,S=function(){var t=this,a=t._self._c;return a("div",{staticClass:"container"},[a("div",{staticClass:"title"},[t._v(t._s(t.$t("STCChaoJiJiaoShi.xuanzeshijian")))]),a("el-date-picker",{staticClass:"yueSelect",attrs:{type:"daterange","range-separator":t.$t("STCChaoJiJiaoShi.zhi"),"start-placeholder":t.$t("STCChaoJiJiaoShi.kaishiriqi"),"end-placeholder":t.$t("STCChaoJiJiaoShi.jiehsuriqi"),"value-format":"yyyy-MM-dd"},on:{change:t.LvSelectDayChange},model:{value:t.value1,callback:function(a){t.value1=a},expression:"value1"}}),a("div",{staticClass:"dataCon"},[a("div",{staticClass:"dataItem"},[a("div",{staticClass:"num"},[t._v("4.98")]),a("div",{staticClass:"text"},[t._v(t._s(t.$t("STCChaoJiJiaoShi.chaojijiaoshipingfen")))])]),a("div",{staticClass:"dataItem super"},[a("div",{staticClass:"text"},[t._v(t._s(t.$t("STCChaoJiJiaoShi.ningyijingshichaojijiaoshi")))])])]),a("div",{staticClass:"tongjiChart"},[a("div",{staticClass:"left"},[a("div",{staticClass:"title"},[t._v(t._s(t.$t("STCChaoJiJiaoShi.chaojijiaoshi")))]),a("div",{staticClass:"desc"},[t._v(" "+t._s(t.LvObj.describe)+" ")])]),a("div",{staticClass:"right"},[a("div",{staticClass:"timeSelectCon"},[t._v(" "+t._s(t.LvStartDay)+t._s(t.$t("STCChaoJiJiaoShi.zhi"))+t._s(t.LvEndDay)+" ")]),a("div",{staticClass:"charCon",attrs:{id:"chaojijiaoshiChatDom"}})])])],1)},g=[],D={name:"login",components:{},data(){return{value1:"",LvStartDay:"",LvEndDay:"",LvObj:"",LvData:[],LvChat:"",LvSelectDayVal:""}},mounted(){},methods:{LvGetCurrentMonthDay(){let t=(0,u.SF)();this.LvStartDay=t.startDate,console.log("this.LvStartDay",this.LvStartDay),this.LvEndDay=t.endDate,this.getLv()},getLv(){let t={start_date:this.LvStartDay,end_date:this.LvEndDay};(0,o.jM)(t).then((t=>{if(200==t.code){let a=t.data;this.LvObj=a,this.LvData=a.date_radio,this.LvChartInit()}}))},LvChartInit(){this.LvChat||(this.LvChat=h.S1(document.getElementById("chaojijiaoshiChatDom")));let t=[],a=[];for(let e of this.LvData)t.push(e.date),a.push(parseFloat(e.radio));this.LvChat.setOption({tooltip:{},xAxis:{type:"category",data:t},yAxis:{type:"value",axisLabel:{formatter:"{value}%"}},series:[{data:a,type:"line",itemStyle:{color:"black"}}]})},LvSelectDayChange(t){this.LvStartDay=t[0],this.LvEndDay=t[1],this.getLv()}}},m=D,p=(0,C.Z)(m,S,g,!1,null,"8967e64a",null),_=p.exports,b=function(){var t=this,a=t._self._c;return a("div",{staticClass:"container"},[a("div",{staticClass:"title"},[t._v(t._s(t.$t("STCShangKeLv.xuanzeshijian")))]),a("el-date-picker",{staticClass:"yueSelect",attrs:{type:"daterange","range-separator":t.$t("STCShangKeLv.zhi"),"start-placeholder":t.$t("STCShangKeLv.kaishiriqi"),"end-placeholder":t.$t("STCShangKeLv.jiehsuriqi"),"value-format":"yyyy-MM-dd"},on:{change:t.LvSelectDayChange},model:{value:t.value1,callback:function(a){t.value1=a},expression:"value1"}}),a("div",{staticClass:"dataCon"},[a("div",{staticClass:"dataItem"},[a("div",{staticClass:"num"},[t._v(t._s(t.LvObj.total_ratio))]),a("div",{staticClass:"text"},[t._v(t._s(t.$t("STCShangKeLv.pingjunshangkelv")))])]),a("div",{staticClass:"dataItem"},[a("div",{staticClass:"num"},[t._v(t._s(t.LvObj.avg_number))]),a("div",{staticClass:"text"},[t._v(t._s(t.$t("STCShangKeLv.pingjunshangkeshu")))])])]),a("div",{staticClass:"tongjiChart"},[a("div",{staticClass:"left"},[a("div",{staticClass:"title"},[t._v(t._s(t.$t("STCShangKeLv.pingjunshangkelv")))]),a("div",{staticClass:"desc"},[t._v(" "+t._s(t.LvObj.describe)+" ")])]),a("div",{staticClass:"right"},[a("div",{staticClass:"timeSelectCon"},[t._v(" "+t._s(t.LvStartDay)+t._s(t.$t("STCShangKeLv.zhi"))+t._s(t.LvEndDay)+" ")]),a("div",{staticClass:"charCon",attrs:{id:"shangkelvChatDom"}})])])],1)},f=[],T={name:"login",components:{},data(){return{value1:"",LvStartDay:"",LvEndDay:"",LvObj:"",LvData:[],LvChat:"",LvSelectDayVal:""}},mounted(){},methods:{LvGetCurrentMonthDay(){let t=(0,u.SF)();this.LvStartDay=t.startDate,console.log("this.LvStartDay",this.LvStartDay),this.LvEndDay=t.endDate,this.getLv()},getLv(){let t={start_date:this.LvStartDay,end_date:this.LvEndDay};(0,o.EB)(t).then((t=>{if(200==t.code){let a=t.data;this.LvObj=a,this.LvData=a.date_radio,this.LvChartInit()}}))},LvChartInit(){this.LvChat||(this.LvChat=h.S1(document.getElementById("shangkelvChatDom")));let t=[],a=[];for(let e of this.LvData)t.push(e.date),a.push(parseFloat(e.radio));this.LvChat.setOption({tooltip:{},xAxis:{type:"category",data:t},yAxis:{type:"value",axisLabel:{formatter:"{value}%"}},series:[{data:a,type:"line",itemStyle:{color:"black"}}]})},LvSelectDayChange(t){this.LvStartDay=t[0],this.LvEndDay=t[1],this.getLv()}}},j=T,x=(0,C.Z)(j,b,f,!1,null,"003e45a3",null),$=x.exports,O=function(){var t=this,a=t._self._c;return a("div",{staticClass:"container"},[a("div",{staticClass:"title"},[t._v(t._s(t.$t("STCYuDingQuXiaoLv.xuanzeshijian")))]),a("el-date-picker",{staticClass:"yueSelect",attrs:{type:"daterange","range-separator":t.$t("STCYuDingQuXiaoLv.zhi"),"start-placeholder":t.$t("STCYuDingQuXiaoLv.kaishiriqi"),"end-placeholder":t.$t("STCYuDingQuXiaoLv.jiehsuriqi"),"value-format":"yyyy-MM-dd"},on:{change:t.LvSelectDayChange},model:{value:t.value1,callback:function(a){t.value1=a},expression:"value1"}}),a("div",{staticClass:"dataCon"},[a("div",{staticClass:"dataItem"},[a("div",{staticClass:"num"},[t._v(t._s(t.LvObj.total_ratio))]),a("div",{staticClass:"text"},[t._v(t._s(t.$t("STCYuDingQuXiaoLv.pingjunyudingquxiaolv")))])]),a("div",{staticClass:"dataItem"},[a("div",{staticClass:"num"},[t._v(t._s(t.LvObj.avg_number))]),a("div",{staticClass:"text"},[t._v(t._s(t.$t("STCYuDingQuXiaoLv.pingjunyudingquxiaoshu")))])])]),a("div",{staticClass:"tongjiChart"},[a("div",{staticClass:"left"},[a("div",{staticClass:"title"},[t._v(t._s(t.$t("STCYuDingQuXiaoLv.pingjunyudingquxiaolv")))]),a("div",{staticClass:"desc"},[t._v(" "+t._s(t.LvObj.describe)+" ")])]),a("div",{staticClass:"right"},[a("div",{staticClass:"timeSelectCon"},[t._v(" "+t._s(t.LvStartDay)+t._s(t.$t("STCYuDingQuXiaoLv.zhi"))+t._s(t.LvEndDay)+" ")]),a("div",{staticClass:"charCon",attrs:{id:"yudingquxiaolvChatDom"}})])])],1)},k=[],H={name:"login",components:{},data(){return{value1:"",LvStartDay:"",LvEndDay:"",LvObj:"",LvData:[],LvChat:"",LvSelectDayVal:""}},mounted(){},methods:{LvGetCurrentMonthDay(){let t=(0,u.SF)();this.LvStartDay=t.startDate,console.log("this.LvStartDay",this.LvStartDay),this.LvEndDay=t.endDate,this.getLv()},getLv(){let t={start_date:this.LvStartDay,end_date:this.LvEndDay};(0,o.fb)(t).then((t=>{if(200==t.code){let a=t.data;this.LvObj=a,this.LvData=a.date_radio,this.LvChartInit()}}))},LvChartInit(){this.LvChat||(this.LvChat=h.S1(document.getElementById("yudingquxiaolvChatDom")));let t=[],a=[];for(let e of this.LvData)t.push(e.date),a.push(parseFloat(e.radio));this.LvChat.setOption({tooltip:{},xAxis:{type:"category",data:t},yAxis:{type:"value",axisLabel:{formatter:"{value}%"}},series:[{data:a,type:"line",itemStyle:{color:"black"}}]})},LvSelectDayChange(t){this.LvStartDay=t[0],this.LvEndDay=t[1],this.getLv()}}},I=H,E=(0,C.Z)(I,O,k,!1,null,"f1b0ed42",null),Y=E.exports,F=function(){var t=this,a=t._self._c;return a("div",{staticClass:"container"},[a("div",{staticClass:"title"},[t._v(t._s(t.$t("STCHuiFuLv.xuanzeshijian")))]),a("el-date-picker",{staticClass:"yueSelect",attrs:{type:"daterange","range-separator":t.$t("STCHuiFuLv.zhi"),"start-placeholder":t.$t("STCHuiFuLv.kaishiriqi"),"end-placeholder":t.$t("STCHuiFuLv.jiehsuriqi"),"value-format":"yyyy-MM-dd"},on:{change:t.LvSelectDayChange},model:{value:t.value1,callback:function(a){t.value1=a},expression:"value1"}}),a("div",{staticClass:"dataCon"},[a("div",{staticClass:"dataItem"},[a("div",{staticClass:"num"},[t._v(t._s(t.LvObj.total_ratio))]),a("div",{staticClass:"text"},[t._v(t._s(t.$t("STCHuiFuLv.pingjunhuifulv")))])]),a("div",{staticClass:"dataItem"},[a("div",{staticClass:"num"},[t._v(t._s(t.LvObj.avg_number))]),a("div",{staticClass:"text"},[t._v(t._s(t.$t("STCHuiFuLv.pingjunhuifushu")))])])]),a("div",{staticClass:"tongjiChart"},[a("div",{staticClass:"left"},[a("div",{staticClass:"title"},[t._v(t._s(t.$t("STCHuiFuLv.pingjunhuifulv")))]),a("div",{staticClass:"desc"},[t._v(" "+t._s(t.LvObj.describe)+" ")])]),a("div",{staticClass:"right"},[a("div",{staticClass:"timeSelectCon"},[t._v(" "+t._s(t.LvStartDay)+t._s(t.$t("STCHuiFuLv.zhi"))+t._s(t.LvEndDay)+" ")]),a("div",{staticClass:"charCon",attrs:{id:"huifulvChatDom"}})])])],1)},w=[],z={name:"login",components:{},data(){return{value1:"",LvStartDay:"",LvEndDay:"",LvObj:"",LvData:[],LvChat:"",LvSelectDayVal:""}},mounted(){},methods:{LvGetCurrentMonthDay(){let t=(0,u.SF)();this.LvStartDay=t.startDate,console.log("this.LvStartDay",this.LvStartDay),this.LvEndDay=t.endDate,this.getLv()},getLv(){let t={start_date:this.LvStartDay,end_date:this.LvEndDay};(0,o.xf)(t).then((t=>{if(200==t.code){let a=t.data;this.LvObj=a,this.LvData=a.date_radio,this.LvChartInit()}}))},LvChartInit(){this.LvChat||(this.LvChat=h.S1(document.getElementById("huifulvChatDom")));let t=[],a=[];for(let e of this.LvData)t.push(e.date),a.push(parseFloat(e.radio));this.LvChat.setOption({tooltip:{},xAxis:{type:"category",data:t},yAxis:{type:"value",axisLabel:{formatter:"{value}%"}},series:[{data:a,type:"line",itemStyle:{color:"black"}}]})},LvSelectDayChange(t){this.LvStartDay=t[0],this.LvEndDay=t[1],this.getLv()}}},J=z,Z=(0,C.Z)(J,F,w,!1,null,"9ec900ba",null),M=Z.exports,q=function(){var t=this,a=t._self._c;return a("div",{staticClass:"container"},[a("div",{staticClass:"title"},[t._v(t._s(t.$t("STCShouRuLv.xuanzenian")))]),a("el-date-picker",{staticClass:"yueSelect",attrs:{type:"year","value-format":"yyyy"},on:{change:t.LvSelectDayChange},model:{value:t.LvYear,callback:function(a){t.LvYear=a},expression:"LvYear"}}),a("div",{staticClass:"dataCon"},[a("div",{staticClass:"dataItem"},[a("div",{staticClass:"num"},[t._v("$"+t._s(t._f("moneyFormat")(t.LvObj.total_income)))]),a("div",{staticClass:"text"},[t._v("2023"+t._s(t.$t("STCShouRuLv.yujishouru")))])])]),t._m(0)],1)},R=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"tongjiChart"},[a("div",{staticClass:"right"},[a("div",{staticClass:"charCon",attrs:{id:"shourulvChatDom"}})])])}],A={name:"login",components:{},data(){return{value1:"",LvStartDay:"",LvEndDay:"",LvObj:"",LvData:[],LvChat:"",LvYear:""}},mounted(){},methods:{LvGetCurrentMonthDay(){let t=(0,u.H8)();this.LvYear=t.toString(),this.getLv()},getLv(){let t={year:this.LvYear};(0,o.am)(t).then((t=>{if(200==t.code){let a=t.data;this.LvObj=a,this.LvData=a.count,this.ShouruChartInit()}}))},LvSelectDayChange(t){this.LvYear=t,this.getLv()},ShouruChartInit(){this.LvChat||(this.LvChat=h.S1(document.getElementById("shourulvChatDom")));let t="",a="",e=0,i=0,s=[],n=[],v=[];for(let h in this.LvData)s.push(h+this.$t("STCShouRuLv.yue")),n.push(this.LvData[h].income),e+=this.LvData[h].income,v.push(this.LvData[h].expend),i+=this.LvData[h].expend;t="$"+this.DouhaoFenge(e)+".00",a="$"+this.DouhaoFenge(i)+".00";let l=this;const r={title:{text:"",subtext:""},tooltip:{},legend:{data:[this.$t("STCShouRuLv.yizhifu"),this.$t("STCShouRuLv.daizhifu")],formatter:function(e){return e==l.$t("STCShouRuLv.yizhifu")?t+" \n"+e:e==l.$t("STCShouRuLv.daizhifu")?a+" \n"+e:void 0},left:"54px",top:"top"},xAxis:{data:s},yAxis:{axisLabel:{formatter:"${value}"}},series:[{name:this.$t("STCShouRuLv.yizhifu"),type:"bar",data:n,itemStyle:{color:"black"}},{name:this.$t("STCShouRuLv.daizhifu"),type:"bar",data:v,itemStyle:{color:"gray"}}]};this.LvChat.setOption(r)},DouhaoFenge(t){if(!t)return 0;let a=t.toString();const e=a.indexOf(".");return-1!==e&&(a=a.substring(0,e)),a.replace(/\B(?=(\d{3})+(?!\d))/g,",")}}},G=A,K=(0,C.Z)(G,q,R,!1,null,"912575d6",null),Q=K.exports,X={name:"login",components:{HomeHeader:n.Z,HomeFooter:v.Z,YuDingZhuanHua:y,ChaoJiJiaoShi:_,ShangKeLv:$,YuDingQuXiaoLv:Y,HuiFuLv:M,ShouRuLv:Q},data(){return{currentTabLabel:"上课率",tabList:[{id:1,lable:this.$t("jsdSuperTeacher.shangkelv"),name:"上课率"},{id:2,lable:this.$t("jsdSuperTeacher.yudingquxiaolv"),name:"预定取消率"},{id:3,lable:this.$t("jsdSuperTeacher.huifulv"),name:"回复率"},{id:4,lable:this.$t("jsdSuperTeacher.yudingzhuanhualv"),name:"预定转化率"},{id:5,lable:this.$t("jsdSuperTeacher.chaojijiaoshi"),name:"超级教师"},{id:6,lable:this.$t("jsdSuperTeacher.shouru"),name:"收入"}],value2:"",value1:""}},mounted(){this.ChatInit()},methods:{ChatInit(){"上课率"==this.currentTabLabel&&this.$refs.refShangKeLv.LvGetCurrentMonthDay(),"预定取消率"==this.currentTabLabel&&this.$refs.refYuDingQuXiaoLv.LvGetCurrentMonthDay(),"回复率"==this.currentTabLabel&&this.$refs.refHuiFuLv.LvGetCurrentMonthDay(),"预定转化率"==this.currentTabLabel&&this.$refs.refYuDingZhuanHua.LvGetCurrentMonthDay(),"超级教师"==this.currentTabLabel&&this.$refs.refChaoJiJiaoShi.LvGetCurrentMonthDay(),"收入"==this.currentTabLabel&&this.$refs.refShouRuLv.LvGetCurrentMonthDay()},JumpDetail(){this.$router.push({path:"/CourseDetail"})},tabChangeTap(t,a){this.currentTabLabel=t.$options.propsData.name,this.ChatInit()}}},B=X,N=(0,C.Z)(B,i,s,!1,null,"cee28826",null),V=N.exports}}]);