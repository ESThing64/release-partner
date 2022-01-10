(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[160],{2007:function(e,t,a){"use strict";a.r(t);var r=a(49),o=a(179),s=a(56),i=a(4),l=a(13),n=a(0),c=a(32),d=a(29),b=a(708),p=a.n(b),h=a(33),j=a.n(h),u=a(1),m={chart:{height:350,type:"area"},colors:[j.a.secondaryMain,j.a.primaryMain],dataLabels:{enabled:!1},stroke:{curve:"smooth"},xaxis:{type:"datetime",categories:["2018-09-19T00:00:00.000Z","2018-09-19T01:30:00.000Z","2018-09-19T02:30:00.000Z","2018-09-19T03:30:00.000Z","2018-09-19T04:30:00.000Z","2018-09-19T05:30:00.000Z","2018-09-19T06:30:00.000Z"]},tooltip:{x:{format:"dd/MM/yy HH:mm"}},legend:{show:!0,fontSize:"0.875rem",fontFamily:"'Roboto', sans-serif",position:"bottom",offsetX:10,offsetY:10,labels:{useSeriesColors:!1},markers:{width:16,height:16,radius:5},itemMargin:{horizontal:15,vertical:8}}},O=function(){var e=Object(d.a)(),t=Object(c.d)((function(e){return e.customization})).navType,a=e.palette.text.primary,r=e.palette.dark.light,o=e.palette.grey[200],s=Object(n.useState)([{name:"Series 1",data:[31,40,28,51,42,109,100]},{name:"Series 2",data:[11,32,45,32,34,52,41]}]),b=Object(l.a)(s,1)[0],h=Object(n.useState)(m),j=Object(l.a)(h,2),O=j[0],f=j[1];return Object(n.useEffect)((function(){f((function(s){return Object(i.a)(Object(i.a)({},s),{},{colors:[e.palette.secondary.main,e.palette.primary.main],xaxis:{labels:{style:{colors:[a,a,a,a,a,a,a]}}},yaxis:{labels:{style:{colors:[a]}}},grid:{borderColor:"dark"===t?r+20:o},tooltip:{theme:"dark"===t?"dark":"light"},legend:{labels:{colors:"grey.500"}}})}))}),[t,a,r,o,e]),Object(u.jsx)("div",{id:"chart",children:Object(u.jsx)(p.a,{options:O,series:b,type:"area",height:350})})},f={chart:{type:"bar",height:350},plotOptions:{bar:{borderRadius:4,horizontal:!0}},dataLabels:{enabled:!1},xaxis:{categories:["South Korea","Canada","United Kingdom","Netherlands","Italy","France","Japan","United States","China","Germany"]}},x=function(){var e=Object(d.a)(),t=Object(c.d)((function(e){return e.customization})).navType,a=e.palette.text.primary,r=e.palette.dark.light,o=e.palette.grey[200],s=e.palette.success.dark,b=Object(n.useState)([{data:[400,430,448,470,540,580,690,1100,1200,1380]}]),h=Object(l.a)(b,1)[0],j=Object(n.useState)(f),m=Object(l.a)(j,2),O=m[0],x=m[1];return Object(n.useEffect)((function(){x((function(e){return Object(i.a)(Object(i.a)({},e),{},{colors:[s],xaxis:{labels:{style:{colors:[a,a,a,a,a,a]}}},yaxis:{labels:{style:{colors:[a,a,a,a,a,a,a,a,a,a]}}},grid:{borderColor:"dark"===t?r+20:o},tooltip:{theme:"dark"===t?"dark":"light"}})}))}),[t,a,r,o,s]),Object(u.jsx)("div",{id:"chart",children:Object(u.jsx)(p.a,{options:O,series:h,type:"bar",height:350})})},y={chart:{type:"bar",height:350},plotOptions:{bar:{horizontal:!1,columnWidth:"55%",endingShape:"rounded"}},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},xaxis:{categories:["Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct"]},yaxis:{title:{text:"$ (thousands)"}},fill:{opacity:1},tooltip:{y:{formatter:function(e){return"$ ".concat(e," thousands")}}},legend:{show:!0,fontSize:"0.875rem",fontFamily:"'Roboto', sans-serif",position:"bottom",offsetX:10,offsetY:10,labels:{useSeriesColors:!1},markers:{width:16,height:16,radius:5},itemMargin:{horizontal:15,vertical:8}},responsive:[{breakpoint:600,options:{yaxis:{show:!1}}}]},g=function(){var e=Object(d.a)(),t=Object(c.d)((function(e){return e.customization})).navType,a=e.palette.text.primary,r=e.palette.dark.light,o=e.palette.grey[200],s=e.palette.secondary.main,b=e.palette.primary.main,h=e.palette.success.dark,j=Object(n.useState)([{name:"Net Profit",data:[44,55,57,56,61,58,63,60,66]},{name:"Revenue",data:[76,85,101,98,87,105,91,114,94]},{name:"Free Cash Flow",data:[35,41,36,26,45,48,52,53,41]}]),m=Object(l.a)(j,1)[0],O=Object(n.useState)(y),f=Object(l.a)(O,2),x=f[0],g=f[1];return Object(n.useEffect)((function(){g((function(e){return Object(i.a)(Object(i.a)({},e),{},{colors:[s,b,h],xaxis:{labels:{style:{colors:[a,a,a,a,a,a,a,a,a]}}},yaxis:{labels:{style:{colors:[a]}}},grid:{borderColor:"dark"===t?r+20:o},tooltip:{theme:"dark"===t?"dark":"light"},legend:{labels:{colors:"grey.500"}}})}))}),[t,a,r,o,s,b,h]),Object(u.jsx)("div",{id:"chart",children:Object(u.jsx)(p.a,{options:x,series:m,type:"bar",height:350})})},k={chart:{height:350,type:"line",zoom:{enabled:!1}},dataLabels:{enabled:!1},stroke:{curve:"straight"},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"]}},v=function(){var e=Object(d.a)(),t=Object(c.d)((function(e){return e.customization})).navType,a=e.palette.text.primary,r=e.palette.dark.light,o=e.palette.grey[200],s=e.palette.secondary.main,b=Object(n.useState)([{name:"Desktops",data:[10,41,35,51,49,62,69,91,148]}]),h=Object(l.a)(b,1)[0],j=Object(n.useState)(k),m=Object(l.a)(j,2),O=m[0],f=m[1];return Object(n.useEffect)((function(){f((function(e){return Object(i.a)(Object(i.a)({},e),{},{colors:[s],xaxis:{labels:{style:{colors:[a,a,a,a,a,a,a,a,a]}}},yaxis:{labels:{style:{colors:[a]}}},grid:{borderColor:"dark"===t?r+20:o},tooltip:{theme:"dark"===t?"dark":"light"}})}))}),[t,a,r,o,s]),Object(u.jsx)("div",{id:"chart",children:Object(u.jsx)(p.a,{options:O,series:h,type:"line",height:350})})},w={chart:{type:"line",stacked:!1,height:450},dataLabels:{enabled:!1},stroke:{width:[1,1,4]},xaxis:{categories:[2009,2010,2011,2012,2013,2014,2015,2016]},legend:{show:!0,fontSize:"0.875rem",fontFamily:"'Roboto', sans-serif",position:"bottom",offsetX:10,offsetY:10,labels:{useSeriesColors:!1},markers:{width:16,height:16,radius:5},itemMargin:{horizontal:15,vertical:8}},yaxis:[{axisTicks:{show:!0},axisBorder:{show:!0,color:"#008FFB"},labels:{style:{colors:"#008FFB"}},title:{text:"Income (thousand crores)",style:{color:"#008FFB"}},tooltip:{enabled:!0}},{seriesName:"Income",opposite:!0,axisTicks:{show:!0},axisBorder:{show:!0,color:"#00E396"},labels:{style:{colors:"#00E396"}},title:{text:"Operating Cashflow (thousand crores)",style:{color:"#00E396"}}},{seriesName:"Revenue",opposite:!0,axisTicks:{show:!0},axisBorder:{show:!0,color:"#FEB019"},labels:{style:{colors:"#FEB019"}},title:{text:"Revenue (thousand crores)",style:{color:"#FEB019"}}}],tooltip:{fixed:{enabled:!0,position:"topLeft",offsetY:30,offsetX:60}}},S=function(){var e=Object(d.a)(),t=Object(c.d)((function(e){return e.customization})).navType,a=e.palette.text.primary,r=e.palette.dark.light,o=e.palette.grey[200],s=e.palette.secondary.main,b=e.palette.primary.main,h=e.palette.success.dark,j=Object(n.useState)([{name:"Income",type:"column",data:[14,2,25,15,25,28,38,46]},{name:"Cashflow",type:"column",data:[11,3,31,4,41,49,65,85]},{name:"Revenue",type:"line",data:[20,29,37,36,44,45,50,58]}]),m=Object(l.a)(j,1)[0],O=Object(n.useState)(w),f=Object(l.a)(O,2),x=f[0],y=f[1];return Object(n.useEffect)((function(){y((function(e){return Object(i.a)(Object(i.a)({},e),{},{colors:[s,b,h],xaxis:{labels:{style:{colors:[a,a,a,a,a,a,a,a]}}},yaxis:{labels:{style:{colors:[a]}}},grid:{borderColor:"dark"===t?r+20:o},tooltip:{theme:"dark"===t?"dark":"light"},legend:{labels:{colors:"grey.500"}}})}))}),[t,a,r,o,s,b,h]),Object(u.jsx)("div",{id:"chart",children:Object(u.jsx)(p.a,{options:x,series:m,type:"line"})})},C={chart:{type:"pie",width:450,height:450},labels:["Team A","Team B","Team C","Team D","Team E"],legend:{show:!0,fontSize:"0.875rem",fontFamily:"'Roboto', sans-serif",offsetX:10,offsetY:10,labels:{useSeriesColors:!1},markers:{width:12,height:12,radius:5},itemMargin:{horizontal:25,vertical:4}},responsive:[{breakpoint:450,chart:{width:280,height:280},options:{legend:{show:!1,position:"bottom"}}}]},z=function(){var e=Object(d.a)(),t=Object(c.d)((function(e){return e.customization})).navType,a=e.palette.text.primary,r=e.palette.dark.light,o=e.palette.grey[200],s=e.palette.background.paper,b=Object(n.useState)([44,55,13,43,22]),h=Object(l.a)(b,1)[0],j=Object(n.useState)(C),m=Object(l.a)(j,2),O=m[0],f=m[1],x=e.palette.secondary.main,y=e.palette.primary.main,g=e.palette.success.dark,k=e.palette.error.main,v=e.palette.warning.dark,w=e.palette.orange.dark;return Object(n.useEffect)((function(){f((function(e){return Object(i.a)(Object(i.a)({},e),{},{colors:[x,y,g,k,v,w],xaxis:{labels:{style:{colors:[a,a,a,a,a,a,a]}}},yaxis:{labels:{style:{colors:[a]}}},grid:{borderColor:"dark"===t?r+20:o},legend:{labels:{colors:"grey.500"}},stroke:{colors:[s]}})}))}),[t,a,r,o,s,x,y,g,k,v,w]),Object(u.jsx)("div",{id:"chart",children:Object(u.jsx)(p.a,{options:O,series:h,type:"pie"})})},T={chart:{width:450,height:450,type:"polarArea"},fill:{opacity:1},legend:{show:!0,fontSize:"0.875rem",fontFamily:"'Roboto', sans-serif",offsetX:10,offsetY:10,labels:{useSeriesColors:!1},markers:{width:12,height:12,radius:5},itemMargin:{horizontal:25,vertical:4}},responsive:[{breakpoint:450,chart:{width:280,height:280},options:{legend:{show:!1,position:"bottom"}}}]},F=function(){var e=Object(d.a)(),t=Object(c.d)((function(e){return e.customization})).navType,a=e.palette.text.primary,r=e.palette.dark.light,o=e.palette.grey[200],s=e.palette.background.paper,b=Object(n.useState)([14,23,21,17,15,10,12,17,21]),h=Object(l.a)(b,1)[0],j=Object(n.useState)(T),m=Object(l.a)(j,2),O=m[0],f=m[1],x=e.palette.secondary.main,y=e.palette.primary.main,g=e.palette.success.dark,k=e.palette.error.main,v=e.palette.warning.dark,w=e.palette.orange.dark;return Object(n.useEffect)((function(){f((function(e){return Object(i.a)(Object(i.a)({},e),{},{colors:[x,y,g,k,v,w,k],xaxis:{labels:{style:{colors:[a,a,a,a,a,a,a]}}},yaxis:{labels:{style:{colors:[a]}}},grid:{borderColor:"dark"===t?r+20:o},legend:{labels:{colors:"grey.500"}},stroke:{colors:[s]},plotOptions:{polarArea:{rings:{strokeColor:"dark"===t?r+20:o},spokes:{connectorColors:"dark"===t?r+20:o}}}})}))}),[t,a,r,o,s,x,y,g,k,v,w]),Object(u.jsx)("div",{id:"chart",children:Object(u.jsx)(p.a,{options:O,series:h,type:"polarArea"})})},M={chart:{type:"radialBar",width:450,height:450},plotOptions:{radialBar:{offsetY:0,startAngle:0,endAngle:270,hollow:{margin:5,size:"30%",background:"transparent",image:void 0},dataLabels:{name:{show:!1},value:{show:!1}}}},labels:["Vimeo","Messenger","Facebook","LinkedIn"],legend:{show:!0,floating:!0,fontSize:"1rem",position:"left",offsetX:0,offsetY:15,labels:{useSeriesColors:!0},markers:{size:0},formatter:function(e,t){return"".concat(e,":  ").concat(t.w.globals.series[t.seriesIndex])},itemMargin:{vertical:3}},responsive:[{breakpoint:450,chart:{width:280,height:280},options:{legend:{show:!1,position:"bottom"}}}]},B=function(){var e=Object(d.a)(),t=Object(c.d)((function(e){return e.customization})).navType,a=e.palette.text.primary,r=e.palette.dark.light,o=e.palette.grey[200],s=Object(n.useState)([76,67,61,90]),b=Object(l.a)(s,1)[0],h=Object(n.useState)(M),j=Object(l.a)(h,2),m=j[0],O=j[1],f=e.palette.secondary.main,x=e.palette.primary.main,y=e.palette.success.dark,g=e.palette.error.main;return Object(n.useEffect)((function(){O((function(e){return Object(i.a)(Object(i.a)({},e),{},{colors:[f,x,y,g],xaxis:{labels:{style:{colors:[a,a,a,a,a,a,a]}}},yaxis:{labels:{style:{colors:[a]}}},grid:{borderColor:"dark"===t?r+20:o},plotOptions:{radialBar:{track:{background:"dark"===t?r+20:o}}}})}))}),[t,a,r,o,f,x,y,g]),Object(u.jsx)("div",{id:"chart",children:Object(u.jsx)(p.a,{options:m,series:b,type:"radialBar"})})};t.default=function(){return Object(u.jsxs)(r.a,{container:!0,spacing:s.c,children:[Object(u.jsx)(r.a,{item:!0,xs:12,md:6,lg:6,children:Object(u.jsx)(o.a,{title:"Column Chart",children:Object(u.jsx)(g,{})})}),Object(u.jsx)(r.a,{item:!0,xs:12,md:6,lg:6,children:Object(u.jsx)(o.a,{title:"Bar Chart",children:Object(u.jsx)(x,{})})}),Object(u.jsx)(r.a,{item:!0,xs:12,md:6,lg:4,children:Object(u.jsx)(o.a,{title:"Line Chart",children:Object(u.jsx)(v,{})})}),Object(u.jsx)(r.a,{item:!0,xs:12,md:6,lg:4,children:Object(u.jsx)(o.a,{title:"Area Chart",children:Object(u.jsx)(O,{})})}),Object(u.jsx)(r.a,{item:!0,xs:12,md:6,lg:4,children:Object(u.jsx)(o.a,{title:"Mixed Chart",children:Object(u.jsx)(S,{})})}),Object(u.jsx)(r.a,{item:!0,xs:12,md:6,xl:4,children:Object(u.jsx)(o.a,{title:"Redial Chart",children:Object(u.jsx)(B,{})})}),Object(u.jsx)(r.a,{item:!0,xs:12,md:6,xl:4,children:Object(u.jsx)(o.a,{title:"Polar Chart",children:Object(u.jsx)(F,{})})}),Object(u.jsx)(r.a,{item:!0,xs:12,md:6,xl:4,children:Object(u.jsx)(o.a,{title:"Pie Chart",children:Object(u.jsx)(z,{})})})]})}}}]);
//# sourceMappingURL=160.caf1c051.chunk.js.map