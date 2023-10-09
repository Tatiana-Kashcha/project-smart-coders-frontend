"use strict";(self.webpackChunkproject_smart_coders_frontend=self.webpackChunkproject_smart_coders_frontend||[]).push([[439],{5640:function(n,e,t){t.d(e,{r:function(){return c}});var r,o=t(2791),i=["title","titleId"];function a(){return a=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},a.apply(this,arguments)}function l(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}function s(n,e){var t=n.title,s=n.titleId,c=l(n,i);return o.createElement("svg",a({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",ref:e,"aria-labelledby":s},c),t?o.createElement("title",{id:s},t):null,r||(r=o.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.3,d:"m1.667 14.333 3.7-1.423c.236-.09.354-.136.465-.196.098-.052.192-.113.28-.182.1-.077.189-.166.368-.345L14 4.667A1.886 1.886 0 1 0 11.333 2l-7.52 7.52c-.179.18-.268.269-.345.368-.069.088-.13.182-.182.28-.06.11-.105.23-.196.466l-1.423 3.7Zm0 0 1.372-3.567c.098-.255.147-.383.231-.441a.333.333 0 0 1 .253-.054c.1.02.197.116.39.31l1.507 1.505c.193.194.29.29.31.391a.333.333 0 0 1-.054.253c-.059.084-.187.133-.442.231l-3.567 1.372Z"})))}var c=o.forwardRef(s);t.p},525:function(n,e,t){t.d(e,{r:function(){return c}});var r,o=t(2791),i=["title","titleId"];function a(){return a=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},a.apply(this,arguments)}function l(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}function s(n,e){var t=n.title,s=n.titleId,c=l(n,i);return o.createElement("svg",a({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",ref:e,"aria-labelledby":s},c),t?o.createElement("title",{id:s},t):null,r||(r=o.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M18 6 6 18M6 6l12 12"})))}var c=o.forwardRef(s);t.p},2658:function(n,e,t){t.d(e,{Z:function(){return w}});var r,o,i,a,l=t(4164),s=t(2791),c=t(168),d=t(6487),p=t(525),u=t(1607),h=d.ZP.div(r||(r=(0,c.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  z-index: 1200;\n\n  background-color: ",";\n"])),u._s.colors.backdrop),f=d.ZP.div(o||(o=(0,c.Z)(["\n  position: relative;\n  width: 335px;\n  min-height: 155px;\n  padding: 20px;\n\n  border-radius: 8px;\n\n  background-color: ",";\n\n  @media screen and (min-width: 768px) {\n    width: 468px;\n    padding: 32px;\n  }\n"])),(function(n){return n.theme.colors.modalWindow})),x=d.ZP.button(i||(i=(0,c.Z)(["\n  position: absolute;\n  top: 14px;\n  right: 14px;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  padding: 0;\n\n  cursor: pointer;\n  border: none;\n\n  background-color: transparent;\n\n  @media screen and (min-width: 768px) {\n    top: 18px;\n    right: 18px;\n  }\n"]))),m=(0,d.ZP)(p.r)(a||(a=(0,c.Z)(["\n  width: 100%;\n  height: 100%;\n\n  color: ",";\n"])),(function(n){return n.theme.colors.primaryText})),g=t(184),b=document.getElementById("modal-root"),w=function(n){var e=n.onClose,t=n.children;(0,s.useEffect)((function(){var n=function(n){"Escape"===n.code&&e()};return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}),[e]);return(0,l.createPortal)((0,g.jsx)(h,{onClick:function(n){n.currentTarget===n.target&&e()},children:(0,g.jsxs)(f,{children:[(0,g.jsx)(x,{onClick:e,children:(0,g.jsx)(m,{})}),t]})}),b)}},2105:function(n,e,t){t.d(e,{g:function(){return Y}});var r,o=t(9439),i=t(2791),a=t(7892),l=t.n(a),s=t(168),c=t(6487),d=["title","titleId"];function p(){return p=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},p.apply(this,arguments)}function u(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}function h(n,e){var t=n.title,o=n.titleId,a=u(n,d);return i.createElement("svg",p({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 18 18",fill:"none",stroke:"currentColor",ref:e,"aria-labelledby":o},a),t?i.createElement("title",{id:o},t):null,r||(r=i.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M11.25 13.5 6.75 9l4.5-4.5"})))}var f,x=i.forwardRef(h),m=(t.p,["title","titleId"]);function g(){return g=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},g.apply(this,arguments)}function b(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}function w(n,e){var t=n.title,r=n.titleId,o=b(n,m);return i.createElement("svg",g({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 18 18",fill:"none",stroke:"currentColor",ref:e,"aria-labelledby":r},o),t?i.createElement("title",{id:r},t):null,f||(f=i.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"m6.75 13.5 4.5-4.5-4.5-4.5"})))}var y,v,j,Z,k,O,P,I=i.forwardRef(w),E=(t.p,t(1607)),T=c.ZP.div(y||(y=(0,s.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  margin: 0 0 18px 0;\n\n  @media screen and (min-width: ",") {\n    margin: 0;\n  }\n"])),E._s.breakpoints.tablet),C=c.ZP.div(v||(v=(0,s.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  padding: 6px 12px;\n\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 1.28;\n  text-transform: uppercase;\n\n  border-radius: 8px;\n\n  color: ",";\n  background-color: ",";\n\n  @media screen and (min-width: ",") {\n    margin: 0 8px 0 0;\n\n    font-size: 16px;\n  }\n"])),E._s.colors.white,E._s.colors.primary,E._s.breakpoints.tablet),S=c.ZP.div(j||(j=(0,s.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),M=c.ZP.button(Z||(Z=(0,s.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  padding: 7px 10px;\n\n  border-radius: 8px 0px 0px 8px;\n\n  border: ",";\n\n  color: ",";\n  background-color: ",";\n\n  @media screen and (min-width: ",") {\n    padding: 8px 10px;\n  }\n"])),(function(n){return n.theme.colors.borderPeriodPaginator}),(function(n){return n.disabled?n.theme.colors.calendarInnerBackground:n.theme.colors.secondText}),(function(n){return n.theme.colors.secondBackground}),E._s.breakpoints.tablet),_=c.ZP.button(k||(k=(0,s.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  padding: 7px 10px;\n\n  border-radius: 0px 8px 8px 0px;\n\n  border: ",";\n\n  color: ",";\n  background-color: ",";\n\n  @media screen and (min-width: ",") {\n    padding: 8px 10px;\n  }\n"])),(function(n){return n.theme.colors.borderPeriodPaginator}),(function(n){return n.theme.colors.secondText}),(function(n){return n.theme.colors.secondBackground}),E._s.breakpoints.tablet),D=(0,c.ZP)(x)(O||(O=(0,s.Z)(["\n  width: 16px;\n  height: 16px;\n\n  @media screen and (min-width: ",") {\n    width: 18px;\n    height: 18px;\n  }\n"])),E._s.breakpoints.tablet),z=(0,c.ZP)(I)(P||(P=(0,s.Z)(["\n  width: 16px;\n  height: 16px;\n\n  @media screen and (min-width: ",") {\n    width: 18px;\n    height: 18px;\n  }\n"])),E._s.breakpoints.tablet),B=t(184),Y=function(n){var e=n.date,t=n.periodType,r=n.upDateDate,a=(0,i.useState)(!0),s=(0,o.Z)(a,2),c=s[0],d=s[1];(0,i.useEffect)((function(){var n=new Date;e.setDate(e.getDate())>n.setDate(n.getDate())?d(!0):d(!1)}),[e]);var p=l()(e).format("MMMM YYYY"),u=l()(e).format("D MMM YYYY");return(0,B.jsxs)(T,{children:[(0,B.jsx)(C,{children:"month"===t?p:u}),(0,B.jsxs)(S,{children:[(0,B.jsx)(M,{type:"button",disabled:!c,onClick:function(){r(-1)},children:(0,B.jsx)(D,{})}),(0,B.jsx)(_,{type:"button",onClick:function(){r(1)},children:(0,B.jsx)(z,{})})]})]})}},5439:function(n,e,t){t.r(e),t.d(e,{default:function(){return wt}});var r,o,i,a,l,s,c,d,p,u,h,f,x,m,g,b,w,y,v,j=t(9439),Z=t(2791),k=t(7892),O=t.n(k),P=t(9434),I=t(2553),E=t(8427),T=function(){var n=(0,P.I0)();return{tasks:(0,P.v9)(I.Uq),isLoading:(0,P.v9)(I.xU),error:(0,P.v9)(I.zh),getAllTasks:(0,Z.useCallback)((function(e){return n(E.km(e))}),[n]),addTask:function(e){return n(E.gI(e))},deleteTask:function(e){return n(E._5(e))},patchTask:function(e){var t=e.id,r=e.task;return n(E.jt({id:t,task:r}))}}},C=t(8558),S=t(7689),M=t(2105),_=t(168),D=t(6487),z=t(1607),B=D.ZP.div(r||(r=(0,_.Z)(["\n  display: flex;\n  align-items: center;\n"]))),Y=D.ZP.button(o||(o=(0,_.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  padding: 8px 16px;\n\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1.28;\n\n  border-radius: 8px 0px 0px 8px;\n  border: none;\n\n  color: ",";\n  background-color: ",";\n\n  @media screen and (min-width: ",") {\n    font-size: 16px;\n  }\n"])),(function(n){return n.disabled?n.theme.colors.periodTypeBtnActiveContent:n.theme.colors.disabledBatton}),(function(n){return n.disabled?n.theme.colors.periodTypeBtnActive:n.theme.colors.periodTypeBtnNotActive}),z._s.breakpoints.tablet),L=D.ZP.button(i||(i=(0,_.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  padding: 8px 26px;\n\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1.28;\n\n  border-radius: 0px 8px 8px 0px;\n  border: none;\n\n  color: ",";\n  background-color: ",";\n\n  @media screen and (min-width: ",") {\n    font-size: 16px;\n  }\n"])),(function(n){return n.disabled?n.theme.colors.periodTypeBtnActiveContent:n.theme.colors.disabledBatton}),(function(n){return n.disabled?n.theme.colors.periodTypeBtnActive:n.theme.colors.periodTypeBtnNotActive}),z._s.breakpoints.tablet),A=t(184),U=function(n){var e=n.handleChange,t=(0,Z.useState)(!1),r=(0,j.Z)(t,2),o=r[0],i=r[1],a=function(n){"month"===n.target.name?(e("month"),i(!0)):(e("day"),i(!1))};return(0,A.jsxs)(B,{children:[(0,A.jsx)(Y,{type:"button",onClick:a,disabled:o,name:"month",children:"Month"}),(0,A.jsx)(L,{type:"button",onClick:a,disabled:!o,name:"day",children:"Day"})]})},F=D.ZP.div(a||(a=(0,_.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n  margin: 0 0 24px 0;\n\n  @media screen and (min-width: ",") {\n    flex-direction: row;\n\n    margin: 0 0 32px 0;\n  }\n"])),z._s.breakpoints.tablet),R=function(n){var e=n.periodType,t=n.handleChange,r=(0,C.Y)(),o=r.choosedDate,i=r.setChoosedDate,a=(0,Z.useState)(o),l=(0,j.Z)(a,2),s=l[0],c=l[1],d=T().getAllTasks,p=(0,S.s0)(),u=O()(s).format("MM"),h=O()(s).format("YYYY"),f=O()(s).format("MMMM-YYYY").toLowerCase(),x=O()(s).format("YYYY-MM-DD").toLowerCase();(0,Z.useEffect)((function(){i(s)}),[s,i]),(0,Z.useEffect)((function(){p("month"===e?"/calendar/month/".concat(f):"/calendar/day/".concat(x))}),[e,f,x,p]),(0,Z.useEffect)((function(){d({month:u,year:h})}),[d,u,h]);return(0,A.jsxs)(F,{children:[(0,A.jsx)(M.g,{date:s,periodType:e,upDateDate:function(n){if("month"===e){var t=new Date(s);t.setMonth(t.getMonth()+n),c(t)}else{var r=new Date(s);r.setDate(r.getDate()+n),c(r)}}}),(0,A.jsx)(U,{periodType:e,handleChange:t})]})},W=t(2426),N=t.n(W),q=D.ZP.div(l||(l=(0,_.Z)(["\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  grid-template-rows: repeat(6, 1fr);\n  grid-gap: 1px;\n  max-width: 767px;\n  max-height: 625px;\n  margin: 0 auto;\n  height: 470px;\n  border: ",";\n  color: ",";\n  border-radius: 8px;\n  overflow: hidden;\n\n  @media screen and (min-width: 768px) {\n    max-width: 704px;\n    height: calc(100vh - 280px);\n  }\n\n  @media screen and (min-width: 1440px) {\n    max-width: 1087px;\n    height: calc(100vh - 270px);\n  }\n\n  transition-duration: 100ms;\n  transition-timing-function: linear;\n  :focus,\n  :hover {\n    transform: scale(1.05);\n    z-index: 1;\n    border-radius: 3px;\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\n    cursor: pointer;\n  }\n"])),(function(n){return n.theme.colors.userInputBorder}),(function(n){return n.theme.colors.calendarText})),H=D.ZP.div(s||(s=(0,_.Z)(["\n  display: flex;\n"]))),V=D.ZP.div(c||(c=(0,_.Z)(["\n  display: flex;\n  margin-bottom: 0px;\n  padding: 8px 4px;\n  justify-content: flex-end;\n  background-color: ",";\n  @media screen and (min-width: 768px) {\n  }\n  @media screen and (min-width: 1440px) {\n    padding: 14px;\n  }\n"])),(function(n){return n.theme.colors.bgrCalendar})),J=D.ZP.div(d||(d=(0,_.Z)(["\n  width: 24px;\n  height: 26px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  flex-direction: column;\n\n  font-family: Inter;\n  font-weight: 700;\n  font-size: 12px;\n  line-height: 1.17;\n\n  position: relative;\n\n  color: ",";\n  @media screen and (min-width: 768px) {\n    width: 27px;\n    height: 26px;\n\n    font-size: 16px;\n    line-height: 1.12;\n    margin-right: 10px;\n  }\n  animation: scaleAnimation 1s linear infinite alternate;\n"])),(function(n){return n.theme.colors.primaryText})),G=(D.ZP.span(p||(p=(0,_.Z)(["\n  width: 100%;\n  height: 100%;\n\n  display: flex;\n  color: ",";\n\n  align-items: center;\n  justify-content: center;\n  padding: 4px 8px;\n\n  background: ",";\n  border-radius: 50%;\n\n  @media screen and (min-width: 768px) {\n    width: 27px;\n    height: 26px;\n\n    font-size: ",";\n    line-height: ",";\n  }\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.primaryText}),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.lineHeights.heading})),D.ZP.div(u||(u=(0,_.Z)(["\n  position: absolute;\n  top: 20%;\n  right: 120%;\n"])))),K=D.ZP.select(h||(h=(0,_.Z)(["\n  border-radius: 15%;\n  background-color: ",";\n  border: none;\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 1.28;\n"])),z._s.colors.lowTasksBg),Q=D.ZP.option(f||(f=(0,_.Z)(["\n  color: ",";\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  width: 94px;\n  height: 26px;\n  border-radius: 8px;\n"])),z._s.colors.primary),X=D.ZP.div(x||(x=(0,_.Z)(["\n  position: absolute;\n  top: 100%;\n  right: 120%;\n"]))),$=D.ZP.select(m||(m=(0,_.Z)(["\n  border-radius: 15%;\n  background-color: ",";\n  border: none;\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 1.28;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n"])),z._s.colors.lightYellow),nn=D.ZP.option(g||(g=(0,_.Z)(["\n  color: ",";\n"])),z._s.colors.mainYellow),en=D.ZP.div(b||(b=(0,_.Z)(["\n  position: absolute;\n  top: 180%;\n  right: 120%;\n"]))),tn=D.ZP.select(w||(w=(0,_.Z)(["\n  border-radius: 15%;\n  background-color: ",";\n  border: none;\n  font-size: 14px;\n  font-weight: 700;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n"])),z._s.colors.lightRed),rn=D.ZP.option(y||(y=(0,_.Z)(["\n  color: ",";\n"])),z._s.colors.mainRed);D.ZP.span(v||(v=(0,_.Z)(["\n  color: green;\n  position: absolute;\n  left: 2px;\n  top: 15px;\n  font-style: italic;\n  font-size: 10px;\n  line-height: 1.4;\n  font-weight: 600;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n\n  @media (min-width: 768px) {\n    left: 2px;\n    top: 20px;\n\n    font-size: 14px;\n    line-height: 1.29;\n  }\n\n  @media (min-width: 1440px) {\n    left: 4px;\n    top: 25px;\n  }\n"])));N().updateLocale("en",{week:{dow:1}});var on,an,ln,sn=N()().startOf("month"),cn=function(){var n=(0,Z.useState)(sn),e=(0,j.Z)(n,1)[0],t=(0,Z.useState)([]),r=(0,j.Z)(t,2),o=r[0],i=r[1];return(0,Z.useEffect)((function(){for(var n=N()(e).startOf("week").clone(),t=N()(e).endOf("month").endOf("week"),r=[];!n.isAfter(t);)r.push(n.clone()),n.add(1,"day");i(r)}),[e]),(0,A.jsx)("div",{children:(0,A.jsx)(q,{children:o.map((function(n){return(0,A.jsx)(V,{children:(0,A.jsxs)(J,{children:[(0,A.jsx)(H,{children:n.month()===e.month()?(0,A.jsx)("span",{style:{color:n.isSame(N()(),"day")?"blue":null},children:n.format("D")}):null}),n.month()===e.month()?(0,A.jsxs)(G,{children:[(0,A.jsxs)(K,{id:"low",name:"low",children:[(0,A.jsx)(Q,{children:"Extranh "}),(0,A.jsx)(Q,{children:"Small"}),(0,A.jsx)(Q,{children:"Large"})]}),(0,A.jsxs)(K,{id:"low",name:"low",children:[(0,A.jsx)(Q,{children:"Extranh "}),(0,A.jsx)(Q,{children:"Small"}),(0,A.jsx)(Q,{children:"Large"})]})]}):null,n.month()===e.month()?(0,A.jsx)(X,{children:(0,A.jsxs)($,{id:"medium",name:"medium",children:[(0,A.jsx)(nn,{children:"Extranh "}),(0,A.jsx)(nn,{children:"Small"}),(0,A.jsx)(nn,{children:"Large"})]})}):null,n.month()===e.month()?(0,A.jsx)(en,{children:(0,A.jsxs)(tn,{id:"high",name:"high",children:[(0,A.jsx)(rn,{children:"Extranh "}),(0,A.jsx)(rn,{children:"Small"}),(0,A.jsx)(rn,{children:"Large"})]})}):null]})},n.format("DDMMYYYY"))}))})})},dn=D.ZP.ul(on||(on=(0,_.Z)(["\n  display: flex;\n  justify-content: space-around;\n\n  padding: 14px 0px;\n\n  border: ",";\n  border-radius: 8px;\n  margin-bottom: 14px;\n  background-color: ","; //\n\n  @media (min-width: 768px) {\n    margin-bottom: 18px;\n  }\n  @media (min-width: 1440px) {\n    margin-bottom: 15px;\n  }\n"])),(function(n){return n.theme.colors.calendarOutBorder}),(function(n){return n.theme.colors.bgrCalendar})),pn=D.ZP.li(an||(an=(0,_.Z)(["\n  font-family: 'InterSemiBold', sans-serif;\n  font-size: 16px;\n\n  color: ",";\n\n  /* calendarText  */\n  .full-name {\n    display: block;\n  }\n  .short-name {\n    display: none;\n  }\n\n  @media (max-width: 480px) {\n    .full-name {\n      display: none;\n    }\n\n    .short-name {\n      display: block;\n    }\n  }\n"])),(function(n){return"SAT"===n.item||"SUN"===n.item?"#3e85f3":n.theme.colors.calendarText})),un=function(){return(0,A.jsx)(dn,{children:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map((function(n){return(0,A.jsxs)(pn,{item:n.toUpperCase(),children:[(0,A.jsx)("span",{className:"full-name",children:n.toUpperCase()}),(0,A.jsx)("span",{className:"short-name",children:n.toUpperCase().slice(0,1)})]},n)}))})},hn=function(){return(0,A.jsxs)("div",{children:[(0,A.jsx)(un,{}),(0,A.jsx)(cn,{startDay:"startDay"})]})},fn=function(){return(0,A.jsx)("h1",{children:"DayCalendarHead - \u0434\u043d\u0456 \u0442\u0438\u0436\u043d\u044f \u0437 \u0434\u0430\u0442\u0430\u043c\u0438, \u043a\u043b\u0456\u043a \u043f\u043e \u0434\u043d\u044e \u0437 \u0434\u0430\u0442\u043e\u044e \u043f\u043e\u043a\u0430\u0437\u0443\u0454 \u043a\u043e\u043b\u043e\u043d\u043a\u0438 \u0437 \u0437\u0430\u0434\u0430\u0447\u0430\u043c\u0438 \u0437\u0430 \u043e\u0431\u0440\u0430\u043d\u0438\u0439 \u0434\u0435\u043d\u044c."})},xn=t(5984),mn=t(4217),gn=t(2658),bn=t(4165),wn=t(5861),yn=t(4942),vn=t(1413),jn=t(5987),Zn=t(5264),kn=t(5640),On=["title","titleId"];function Pn(){return Pn=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Pn.apply(this,arguments)}function In(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}function En(n,e){var t=n.title,r=n.titleId,o=In(n,On);return Z.createElement("svg",Pn({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",ref:e,"aria-labelledby":r},o),t?Z.createElement("title",{id:r},t):null,ln||(ln=Z.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 5v14m-7-7h14"})))}var Tn,Cn,Sn,Mn,_n,Dn,zn,Bn,Yn,Ln,An,Un,Fn,Rn,Wn,Nn,qn=Z.forwardRef(En),Hn=(t.p,(0,D.ZP)(kn.r)(Tn||(Tn=(0,_.Z)(["\n  height: 100%;\n  color: ",";\n"])),z._s.colors.white)),Vn=(0,D.ZP)(qn)(Cn||(Cn=(0,_.Z)(["\n  height: 100%;\n  color: ",";\n"])),z._s.colors.white),Jn=D.ZP.form(Sn||(Sn=(0,_.Z)(["\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 1.29;\n  color: ",";\n  text-align: left;\n\n  @media (min-width: 768px) {\n    padding: 24px 0px;\n    height: 360px;\n  }\n"])),(function(n){return n.theme.colors.secondText})),Gn=D.ZP.label(Mn||(Mn=(0,_.Z)(["\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n  color: ",";\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 1.17;\n\n  @media (min-width: 768px) {\n    margin-bottom: 8px;\n  }\n"])),z._s.colors.secondText),Kn=(D.ZP.span(_n||(_n=(0,_.Z)(["\n  margin-top: 4px;\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 1.17;\n  color: ",";\n"])),z._s.colors.secondText),D.ZP.input(Dn||(Dn=(0,_.Z)(["\n  height: 46px;\n  margin-bottom: 8px;\n  padding: 14px;\n  width: 100%;\n  outline: none;\n  background-color: ",";\n  border: 1px solid rgba(220, 227, 229, 0.6);\n  border-radius: 8px;\n  font-family: 'Inter';\n  color: ",";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 1.29;\n\n  @media (min-width: 768px) {\n    height: 46px;\n  }\n\n  &::placeholder {\n    color: ",";\n  }\n"])),(function(n){return n.theme.colors.forthBackground}),(function(n){return n.theme.colors.primaryText}),(function(n){return n.theme.colors.black}))),Qn=(D.ZP.span(zn||(zn=(0,_.Z)(["\n  min-height: 14px;\n  margin-top: -6px;\n  // margin-bottom: 2px;\n  color: red;\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 1.17;\n\n  @media (min-width: 768px) {\n    margin-bottom: 4px;\n  }\n"]))),D.ZP.span(Bn||(Bn=(0,_.Z)(["\n  color: white;\n"]))),D.ZP.button(Yn||(Yn=(0,_.Z)(["\n  flex-grow: 1;\n  height: 42px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  column-gap: 12px;\n  padding: 14px;\n  background: ",";\n  box-shadow: ",";\n  border-radius: 8px;\n  border: none;\n  color: ",";\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 1.29;\n  letter-spacing: -0.02em;\n\n  &:hover,\n  :focus {\n    box-shadow: 4px 2px 16px rgba(136, 165, 191, 1);\n    cursor: pointer;\n  }\n\n  @media (min-width: 768px) {\n    height: 48px;\n  }\n"])),z._s.colors.primary,z._s.shadow.boxShadow,z._s.colors.white)),Xn=D.ZP.button(Ln||(Ln=(0,_.Z)(["\n  cursor: pointer;\n  flex-grow: 0.73;\n  height: 42px;\n  padding: 12px;\n  column-gap: 12px;\n  background: #efefef;\n  border-radius: 8px;\n  border: none;\n  text-align: center;\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 1.29;\n  letter-spacing: -0.02em;\n\n  &:hover,\n  :focus {\n    box-shadow: 4px 2px 16px rgba(136, 165, 191, 1);\n    cursor: pointer;\n  }\n\n  @media (min-width: 768px) {\n    height: 48px;\n  }\n"]))),$n=(D.ZP.svg(An||(An=(0,_.Z)(["\n  width: 18px;\n  height: 18px;\n  fill: none;\n  stroke: ",";\n\n  @media (min-width: 768px) {\n    width: 20px;\n    height: 20px;\n  }\n"])),z._s.colors.white),D.ZP.div(Un||(Un=(0,_.Z)(["\n  display: flex;\n  gap: 14px;\n"])))),ne=D.ZP.div(Fn||(Fn=(0,_.Z)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start;\n  margin-bottom: 40px;\n  color: ",";\n"])),(function(n){return n.theme.colors.secondText})),ee=D.ZP.label(Rn||(Rn=(0,_.Z)(["\n  padding-left: 20px;\n\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 1.17;\n  color: ",";\n  cursor: pointer;\n\n  &:not(:last-child) {\n    margin-right: 16px;\n  }\n"])),z._s.colors.secondText),te=D.ZP.input(Wn||(Wn=(0,_.Z)(["\n  appearance: none;\n  position: absolute;\n  height: 0;\n  width: 0;\n  border: none;\n\n  &::before {\n    content: '';\n    position: absolute;\n    top: 2px;\n    left: -17px;\n\n    border-radius: 50%;\n    height: 10px;\n    width: 10px;\n    border: 1px solid var(--btn-text-color);\n\n    ","\n  }\n\n  &:checked::before {\n    content: '';\n    position: absolute;\n    height: 10px;\n    width: 10px;\n    outline: 2px solid;\n  }\n"])),(function(n){switch(n.value){case"Low":default:return"background-color: #72c2f8; color: rgba(114, 194, 248, 0.3)";case"Medium":return"background-color: #f3b249; color: rgba(243, 178, 73, 0.3)";case"High":return"background-color: #ea3d65; color: rgba(234, 61, 101, 0.3)"}})),re=["statusOperation","_id"],oe={title:"",start:"00:00",end:"00:00",priority:"low",category:"in-progress"},ie=function(n){var e=n.initialData,t=n.onClose,r=(0,Z.useState)(oe),o=(0,j.Z)(r,2),i=o[0],a=o[1],l=(0,Z.useState)("create"),s=(0,j.Z)(l,2),c=s[0],d=s[1],p=(0,Z.useState)(null),u=(0,j.Z)(p,2),h=u[0],f=u[1],x=(0,P.I0)(),m=(0,P.v9)(I.Uq),g=(0,P.v9)(I.zh);(0,Z.useEffect)((function(){var n=e.statusOperation,t=e._id,r=(0,jn.Z)(e,re);t&&(r.id=t),a(r),d(n)}),[e]),(0,Z.useEffect)((function(){m&&h&&t()}),[h,m,t]),(0,Z.useEffect)((function(){g&&h&&Zn.Notify.failure("Data save error")}),[g,h]);var b=function(n){var e=n.target,t=e.name,r=e.value;a((function(n){return(0,vn.Z)((0,vn.Z)({},n),{},(0,yn.Z)({},t,r))}))},w=function(){var n=(0,wn.Z)((0,bn.Z)().mark((function n(e){return(0,bn.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.preventDefault(),!(i.start>i.end)){n.next=4;break}return Zn.Notify.failure("Start time cannot be later than end time"),n.abrupt("return");case 4:x("edit"===c?(0,E.jt)(i):(0,E.gI)(i)),f(Date.now());case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return(0,A.jsxs)(Jn,{onSubmit:w,children:[(0,A.jsxs)(Gn,{children:["Title",(0,A.jsx)(Kn,{type:"text",placeholder:"Enter text",name:"title",value:i.title,onChange:b,required:!0})]}),(0,A.jsxs)($n,{children:[(0,A.jsxs)(Gn,{children:["Start",(0,A.jsx)(Kn,{id:"time",type:"time",name:"start",value:i.start,onChange:b,required:!0})]}),(0,A.jsxs)(Gn,{children:["End",(0,A.jsx)(Kn,{type:"time",name:"end",value:i.end,onChange:b,required:!0})]})]}),(0,A.jsx)(ne,{children:["Low","Medium","High"].map((function(n){return(0,A.jsxs)(ee,{children:[(0,A.jsx)(te,{type:"radio",value:n,name:"priority",checked:i.priority===n,onChange:b}),n]},n)}))}),"edit"===c?(0,A.jsxs)(Qn,{type:"submit",children:[(0,A.jsx)(Hn,{}),"Edit"]}):(0,A.jsxs)($n,{children:[(0,A.jsxs)(Qn,{type:"submit",children:[(0,A.jsx)(Vn,{}),"Add"]}),(0,A.jsx)(Xn,{type:"button",onClick:t,children:"Cancel"})]})]})},ae=function(n){var e=n.status,t=n.closeModal,r=n.initialData,o=void 0===r?{}:r;return(0,A.jsx)(A.Fragment,{children:(0,A.jsx)(gn.Z,{onClose:t,children:(0,A.jsx)(ie,{status:e,onClose:t,initialData:o})})})},le=["title","titleId"];function se(){return se=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},se.apply(this,arguments)}function ce(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}function de(n,e){var t=n.title,r=n.titleId,o=ce(n,le);return Z.createElement("svg",se({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",ref:e,"aria-labelledby":r},o),t?Z.createElement("title",{id:r},t):null,Nn||(Nn=Z.createElement("g",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.3,clipPath:"url(#a)"},Z.createElement("path",{d:"M2.225 4.667a6.667 6.667 0 1 1 0 6.667"}),Z.createElement("path",{d:"M8 10.667 10.667 8 8 5.333M1.333 8h9.334"}))))}var pe,ue=Z.forwardRef(de),he=(t.p,["title","titleId"]);function fe(){return fe=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},fe.apply(this,arguments)}function xe(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}function me(n,e){var t=n.title,r=n.titleId,o=xe(n,he);return Z.createElement("svg",fe({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",ref:e,"aria-labelledby":r},o),t?Z.createElement("title",{id:r},t):null,pe||(pe=Z.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.3,d:"M6 2h4M2 4h12M3.333 4l.4 6.009c.075 1.115.112 1.673.295 2.121a3 3 0 0 0 1.835 1.718C6.323 14 6.882 14 8 14v0c1.118 0 1.677 0 2.136-.152a3 3 0 0 0 1.836-1.718c.182-.448.22-1.006.294-2.121l.4-6.009"})))}var ge,be,we,ye,ve,je,Ze,ke,Oe,Pe,Ie,Ee,Te,Ce,Se,Me=Z.forwardRef(me),_e=(t.p,D.ZP.div(ge||(ge=(0,_.Z)(["\n  width: 68px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n"])))),De=(0,D.ZP)(ue)(be||(be=(0,_.Z)(["\n  color: ",";\n  border: none;\n  padding: 0;\n\n  &:hover {\n    color: ",";\n  }\n"])),(function(n){return n.theme.colors.primaryText}),z._s.colors.primary),ze=(0,D.ZP)(kn.r)(we||(we=(0,_.Z)(["\n  color: ",";\n  border: none;\n  padding: 0;\n\n  &:hover {\n    color: ",";\n  }\n"])),(function(n){return n.theme.colors.primaryText}),z._s.colors.primary),Be=(0,D.ZP)(Me)(ye||(ye=(0,_.Z)(["\n  color: ",";\n  border: none;\n  padding: 0;\n\n  &:hover {\n    color: ",";\n  }\n"])),(function(n){return n.theme.colors.primaryText}),z._s.colors.primary),Ye=D.ZP.div(ve||(ve=(0,_.Z)(["\n  width: 115px;\n  height: 70px;\n  padding: 14px;\n\n  border: ",";\n  border-radius: 7px;\n  background-color: ",";\n\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n"])),(function(n){return n.theme.colors.userInputBorder}),(function(n){return n.theme.colors.secondBackground})),Le=((0,D.ZP)(ue)(je||(je=(0,_.Z)(["\n  color: ",";\n\n  &:hover {\n    color: ",";\n  }\n"])),(function(n){return n.theme.colors.primaryText}),z._s.colors.primary),D.ZP.button(Ze||(Ze=(0,_.Z)(["\n  height: 18px;\n  background-color: transparent;\n  border: none;\n  padding: 0;\n  font-size: 12px;\n  color: ",";\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  &:hover {\n    color: ",";\n  }\n"])),(function(n){return n.theme.colors.primaryText}),z._s.colors.primary)),Ae=function(n){var e=n.task,t=(n.groups,n.onDeleteTask,n.onUpdateTask),r=(0,Z.useState)(!1),o=(0,j.Z)(r,2),i=o[0],a=o[1],l=(0,Z.useState)(!1),s=(0,j.Z)(l,2),c=s[0],d=s[1],p=(0,Z.useState)(!1),u=(0,j.Z)(p,2),h=u[0],f=u[1];return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsxs)(_e,{children:[(0,A.jsx)(De,{onClick:function(){a(!0)}}),(0,A.jsx)(ze,{onClick:function(){d(!0)}}),(0,A.jsx)(Be,{onClick:function(){f(!0)},disabled:h}),c&&(0,A.jsx)(ae,{task:e,onClose:function(){return d(!1)},onUpdateTask:t})]}),i&&(0,A.jsxs)(Ye,{children:[(0,A.jsxs)(Le,{children:["In progress",(0,A.jsx)(De,{width:16})]}),(0,A.jsxs)(Le,{children:["Done ",(0,A.jsx)(De,{width:16})]})]})]})},Ue=D.ZP.div(ke||(ke=(0,_.Z)(["\n  width: 300px;\n  height: 112px;\n  padding: 14px 14px 18px 14px;\n  flex-shrink: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  border-radius: 8px;\n  border: 1px solid rgba(220, 227, 229, 0.8);\n  background-color: ",";\n"])),(function(n){return n.theme.colors.secondBackground})),Fe=D.ZP.div(Oe||(Oe=(0,_.Z)(["\n  width: 296px;\n  height: 16px;\n  flex-shrink: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color: ",";\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 18px;\n"])),(function(n){return n.theme.colors.primaryText})),Re=D.ZP.div(Pe||(Pe=(0,_.Z)(["\n  display: flex;\n  justify-content: space-between;\n"]))),We=D.ZP.div(Ie||(Ie=(0,_.Z)(["\n  display: flex;\n  gap: 8px;\n  align-items: flex-end;\n"]))),Ne=D.ZP.div(Ee||(Ee=(0,_.Z)(["\n  display: flex;\n  padding: 4px 12px;\n  border-radius: 4px;\n  background: ",";\n"])),(function(n){switch(n.priority){case"medium":return"yellow";case"low":return"#008000";case"high":return"#FF0000";default:return"#72c2f8"}})),qe=D.ZP.p(Te||(Te=(0,_.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  border-radius: 44px;\n  border: 1.8px solid #3e85f3;\n  background-color: #3e85f3;\n\n  font-family: Inter;\n  font-size: 14px;\n  font-weight: 600;\n  color: ",";\n\n  @media screen and (min-width: 768px) {\n    width: 44px;\n    height: 44px;\n\n    font-family: Inter;\n    font-size: 18px;\n  }\n"])),(function(n){return n.theme.colors.primaryText})),He=D.ZP.img(Ce||(Ce=(0,_.Z)(["\n  display: block;\n  width: 32px;\n  height: 32px;\n  object-position: 50% 50%;\n  border-radius: 44px;\n\n  @media screen and (min-width: 768px) {\n    width: 44px;\n    height: 44px;\n  }\n"]))),Ve=function(n){var e=(0,P.v9)(mn.dy),t=n.description,r=n.priority,o=(0,Z.useState)(!1),i=(0,j.Z)(o,2),a=i[0],l=i[1],s=e.name.slice(0,1).toUpperCase(),c=e.avatarURL;return(0,A.jsxs)(Ue,{children:[(0,A.jsx)(Fe,{children:t}),(0,A.jsxs)(Re,{children:[(0,A.jsxs)(We,{children:[""===c?(0,A.jsx)(qe,{children:s}):(0,A.jsx)(qe,{children:(0,A.jsx)(He,{src:c,alt:"avatar"})}),(0,A.jsx)(Ne,{priority:r,children:r})]}),(0,A.jsx)(Ae,{})]}),a&&(0,A.jsx)(ae,{onCloseModal:function(){l(!1)}})]})},Je=["title","titleId"];function Ge(){return Ge=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Ge.apply(this,arguments)}function Ke(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}function Qe(n,e){var t=n.title,r=n.titleId,o=Ke(n,Je);return Z.createElement("svg",Ge({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",ref:e,"aria-labelledby":r},o),t?Z.createElement("title",{id:r},t):null,Se||(Se=Z.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8v8m-4-4h8m6 0c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"})))}var Xe,$e,nt,et,tt,rt,ot,it,at=Z.forwardRef(Qe),lt=(t.p,D.ZP.div(Xe||(Xe=(0,_.Z)(["\n  width: 100%;\n  padding: 7px 0 7px;\n  display: flex;\n  justify-content: space-between;\n  background-color: ",";\n"])),(function(n){return n.theme.colors.secondBackground}))),st=D.ZP.h2($e||($e=(0,_.Z)(["\n  color: ",";\n  text-align: center;\n  font-size: 20px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 1.2;\n"])),(function(n){return n.theme.colors.primaryText})),ct=(0,D.ZP)(at)(nt||(nt=(0,_.Z)(["\n  width: 22px;\n  height: 22px;\n  color: ",";\n"])),(function(n){return n.theme.colors.primaryText})),dt=function(n){var e=n.title,t=void 0===e?"todo":e,r=n.columnId,o=(0,Z.useState)(!1),i=(0,j.Z)(o,2),a=i[0],l=i[1];return(0,A.jsxs)(lt,{children:[(0,A.jsx)(st,{children:t}),(0,A.jsx)(ct,{onClick:function(){l(!0)}}),a&&(0,A.jsx)(ae,{columnId:r,onClose:function(){l(!1)}})]})},pt=D.ZP.button(et||(et=(0,_.Z)(["\n  color: ",";\n  background-color: ",";\n  border: 1px dashed ",";\n  width: 100%;\n  border-radius: 8px;\n  padding: 14px 0 14px;\n  font-weight: bold;\n  font-size: 14px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])),(function(n){return n.theme.colors.primaryText}),(function(n){return n.theme.colors.addTaskBgBtn}),z._s.colors.primary),ut=(0,D.ZP)(qn)(tt||(tt=(0,_.Z)(["\n  fill: ",";\n  width: 24px;\n  height: 24px;\n  margin-right: 8px;\n"])),z._s.colors.closeButton),ht=function(n){var e=n.groupId,t=(0,Z.useState)(!1),r=(0,j.Z)(t,2),o=r[0],i=r[1];return(0,A.jsxs)("div",{children:[(0,A.jsxs)(pt,{onClick:function(){i(!0)},children:[(0,A.jsx)(ut,{}),"Add task"]}),o&&(0,A.jsx)(ae,{groupId:e,closeModal:function(){i(!1)}})]})},ft=D.ZP.div(rt||(rt=(0,_.Z)(["\n  max-width: 299px;\n  padding: 18px 18px 10px 18px;\n  border: 1px solid #dce3e5;\n  border: ",";\n  border-radius: 7px;\n  background-color: ",";\n\n  @media (min-width: 768px) {\n    max-width: 344px;\n    padding: 18px 20px 28px 20px;\n  }\n"])),(function(n){return n.theme.colors.userInputBorder}),(function(n){return n.theme.colors.secondBackground})),xt=(D.ZP.div(ot||(ot=(0,_.Z)(["\n  margin-top: 24px;\n\n  @media (min-width: 768px) {\n    margin-top: 28px;\n  }\n"]))),function(n){var e=n.groupTitle,t=n.groupId,r=(0,P.v9)(I.Uq),o=(0,S.UO)(),i=(0,Z.useMemo)((function(){return r.filter((function(n){var t=n.category,r=n.date;return t===e&&r===o.currrentDay}))}),[r,e,o.currrentDay]);return(0,A.jsxs)(ft,{children:[(0,A.jsx)(dt,{title:e,columnId:t}),(0,A.jsx)("ul",{children:i.map((function(n){var e=n.title,t=n.priority,r=(0,xn.x0)();return(0,A.jsx)(Ve,{description:e,priority:t},r)}))}),(0,A.jsx)(ht,{groupId:t})]})}),mt=function(){return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(xt,{groupTitle:"in-progress",groupId:"123"}),(0,A.jsx)(xt,{groupTitle:"to-do",groupId:"123"}),(0,A.jsx)(xt,{groupTitle:"done",groupId:"123"})]})},gt=D.ZP.div(it||(it=(0,_.Z)(["\n  display: flex;\n  width: 100%;\n  flex-wrap: wrap;\n  justify-content: space-between;\n"]))),bt=function(){return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(fn,{}),(0,A.jsx)(gt,{children:(0,A.jsx)(mt,{})})]})};function wt(){var n=(0,Z.useState)("month"),e=(0,j.Z)(n,2),t=e[0],r=e[1],o=(0,C.Y)().choosedDate,i=T(),a=i.tasks,l=i.getAllTasks,s=(0,Z.useMemo)((function(){return new Date}),[]),c=s.setMonth(s.getMonth()),d=s.setFullYear(s.getFullYear()),p=O()(c).format("MM"),u=O()(d).format("YYYY"),h=(0,Z.useMemo)((function(){var n=sessionStorage.getItem("isFirstVisit");return!n||JSON.parse(n)}),[]);(0,Z.useEffect)((function(){h?sessionStorage.setItem("isFirstVisit","false"):r("month")}),[h]),(0,Z.useEffect)((function(){0===a.length&&s===o&&l({month:p,year:u})}),[o,s,l,p,a.length,u]);return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(R,{periodType:t,handleChange:function(n){r(n)}}),"month"===t?(0,A.jsx)(hn,{}):(0,A.jsx)(bt,{})]})}},2553:function(n,e,t){t.d(e,{Uq:function(){return r},xU:function(){return o},zh:function(){return i}});var r=function(n){return n.tasks.tasks},o=function(n){return n.tasks.isLoading},i=function(n){return n.tasks.error}}}]);
//# sourceMappingURL=439.a9566d96.chunk.js.map