"use strict";(self.webpackChunkproject_smart_coders_frontend=self.webpackChunkproject_smart_coders_frontend||[]).push([[766],{9766:function(n,e,t){t.r(e),t.d(e,{default:function(){return Rn}});var i,o=t(4165),r=t(5861),a=t(9439),l=t(2791),p=t(9434),d=t(4217),s=t(5705),c=t(1652),h=t(4750),u=t(7892),x=t.n(u),m=t(5568),f=t(6727),g=/^[a-z0-9.]+@[a-z]+\.[a-z]{2,3}$/,b=/^(\+\d{1,3}|\d{1,3}) \(\d{3}\) \d{3} \d{2} \d{2}$/,y=/^(\+\d{1,3}|\d{1,3}) \(\d{3}\) \d{3} \d{2} \d{2}$/,w=/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[01])$/,M=function(){return f.Ry().shape({name:f.Z_().required("Name is required").min(3,"Name is too short - must be at least 3 characters").max(20,"Name is too long - must be no more than 29 characters"),birthday:f.Z_().matches(w,"Valid birthday has format YYYY-MM-DD").notRequired(),email:f.Z_().matches(g,"Invalid email format").required("Email is required"),phone:f.Z_().matches(b,"Valid number is +38 (000) 123 45 67 or 38 (000) 123 45 67 and country code consist of 1-3 numbers or empty field phone").notRequired(),skype:f.Z_().matches(y,"Valid skype number is +38 (000) 123 45 67 or 38 (000) 123 45 67 and country code consist of 1-3 numbers or empty field skype").notRequired()})},C=t(5667),j=t(168),B=["title","titleId"];function F(){return F=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},F.apply(this,arguments)}function v(n,e){if(null==n)return{};var t,i,o=function(n,e){if(null==n)return{};var t,i,o={},r=Object.keys(n);for(i=0;i<r.length;i++)t=r[i],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(i=0;i<r.length;i++)t=r[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}function k(n,e){var t=n.title,o=n.titleId,r=v(n,B);return l.createElement("svg",F({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",fill:"#3E85F3",fillOpacity:.18,ref:e,"aria-labelledby":o},r),t?l.createElement("title",{id:o},t):null,i||(i=l.createElement("path",{d:"M43.297 39.75c-2.855-4.937-7.256-8.477-12.391-10.155a13.5 13.5 0 1 0-13.812 0C11.96 31.271 7.558 34.811 4.703 39.75a1.5 1.5 0 1 0 2.596 1.5C10.832 35.145 17.076 31.5 24 31.5c6.924 0 13.168 3.645 16.7 9.75a1.502 1.502 0 0 0 2.515.19 1.5 1.5 0 0 0 .082-1.69ZM13.5 18A10.5 10.5 0 1 1 24 28.5 10.511 10.511 0 0 1 13.5 18Z"})))}var P,Z=l.forwardRef(k),O=(t.p,t(1607)),I=["title","titleId"];function E(){return E=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},E.apply(this,arguments)}function z(n,e){if(null==n)return{};var t,i,o=function(n,e){if(null==n)return{};var t,i,o={},r=Object.keys(n);for(i=0;i<r.length;i++)t=r[i],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(i=0;i<r.length;i++)t=r[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}function S(n,e){var t=n.title,i=n.titleId,o=z(n,I);return l.createElement("svg",E({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":i},o),t?l.createElement("title",{id:i},t):null,P||(P=l.createElement("path",{d:"M10.6 13.8L8.425 11.625C8.24167 11.4417 8.01267 11.3543 7.738 11.363C7.46267 11.371 7.23333 11.4667 7.05 11.65C6.86667 11.8333 6.775 12.0667 6.775 12.35C6.775 12.6333 6.86667 12.8667 7.05 13.05L9.9 15.9C10.0833 16.0833 10.3167 16.175 10.6 16.175C10.8833 16.175 11.1167 16.0833 11.3 15.9L16.975 10.225C17.1583 10.0417 17.246 9.81233 17.238 9.537C17.2293 9.26233 17.1333 9.03333 16.95 8.85C16.7667 8.66667 16.5333 8.575 16.25 8.575C15.9667 8.575 15.7333 8.66667 15.55 8.85L10.6 13.8ZM12 22C10.6167 22 9.31667 21.7373 8.1 21.212C6.88333 20.6873 5.825 19.975 4.925 19.075C4.025 18.175 3.31267 17.1167 2.788 15.9C2.26267 14.6833 2 13.3833 2 12C2 10.6167 2.26267 9.31667 2.788 8.1C3.31267 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.31233 8.1 2.787C9.31667 2.26233 10.6167 2 12 2C13.3833 2 14.6833 2.26233 15.9 2.787C17.1167 3.31233 18.175 4.025 19.075 4.925C19.975 5.825 20.6873 6.88333 21.212 8.1C21.7373 9.31667 22 10.6167 22 12C22 13.3833 21.7373 14.6833 21.212 15.9C20.6873 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6873 15.9 21.212C14.6833 21.7373 13.3833 22 12 22ZM12 20C14.2167 20 16.1043 19.221 17.663 17.663C19.221 16.1043 20 14.2167 20 12C20 9.78333 19.221 7.89567 17.663 6.337C16.1043 4.779 14.2167 4 12 4C9.78333 4 7.896 4.779 6.338 6.337C4.77933 7.89567 4 9.78333 4 12C4 14.2167 4.77933 16.1043 6.338 17.663C7.896 19.221 9.78333 20 12 20Z",fill:"#3CBC81"})))}var A,D=l.forwardRef(S),Y=(t.p,["title","titleId"]);function H(){return H=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},H.apply(this,arguments)}function L(n,e){if(null==n)return{};var t,i,o=function(n,e){if(null==n)return{};var t,i,o={},r=Object.keys(n);for(i=0;i<r.length;i++)t=r[i],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(i=0;i<r.length;i++)t=r[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}function _(n,e){var t=n.title,i=n.titleId,o=L(n,Y);return l.createElement("svg",H({width:24,height:24,viewBox:"0 0 24 24",fill:"#E74A3B",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":i},o),t?l.createElement("title",{id:i},t):null,A||(A=l.createElement("path",{d:"M11 15H13V17H11V15ZM11 7H13V13H11V7ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z",fill:"#E74A3B"})))}var R,T,V,q=l.forwardRef(_),N=(t.p,t(6487)),W=["title","titleId"];function U(){return U=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},U.apply(this,arguments)}function $(n,e){if(null==n)return{};var t,i,o=function(n,e){if(null==n)return{};var t,i,o={},r=Object.keys(n);for(i=0;i<r.length;i++)t=r[i],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(i=0;i<r.length;i++)t=r[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}function J(n,e){var t=n.title,i=n.titleId,o=$(n,W);return l.createElement("svg",U({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":i},o),t?l.createElement("title",{id:i},t):null,R||(R=l.createElement("circle",{cx:12,cy:12,r:12,fill:"#3E85F3"})),T||(T=l.createElement("path",{d:"M12 6.75V17.25",stroke:"white",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),V||(V=l.createElement("path",{d:"M6.75 12H17.25",stroke:"white",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})))}var G,K,Q,X,nn,en,tn,on,rn,an,ln,pn,dn,sn,cn,hn,un,xn,mn,fn=l.forwardRef(J),gn=(t.p,N.ZP.div(G||(G=(0,j.Z)(["\n  margin: 0 auto;\n  max-width: 100%;\n  padding-bottom: 40px;\n  position: relative;\n  @media screen and (min-width: 375px) and (max-width: 768px) {\n    max-width: 335px;\n  }\n  @media (min-width: 768px) and (max-width: 1439px) {\n    max-width: 704px;\n    padding-bottom: 38px;\n  }\n  @media (min-width: 1440px) {\n    min-width: 100%;\n    padding-bottom: 32px;\n  }\n"])))),bn=(0,N.ZP)(s.l0)(K||(K=(0,j.Z)(["\n  min-width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n  padding-top: 59px;\n  padding-bottom: 40px;\n  padding-left: 18px;\n  padding-right: 18px;\n  background-color: ",";\n  border-radius: 16px;\n  /* border-color: rgba(17, 17, 17, 0.15); */\n  @media (min-width: 768px) {\n    align-items: center;\n    padding-top: 40px;\n  }\n  @media (min-width: 1440px) {\n    padding-top: 60px;\n    padding-bottom: 60px;\n  }\n"])),(function(n){return n.theme.colors.secondBackground})),yn=(0,N.ZP)(s.gN)(Q||(Q=(0,j.Z)(["\n  display: none;\n"]))),wn=(0,N.ZP)(Z)(X||(X=(0,j.Z)(["\n  position: absolute;\n  left: calc(50% - 25px);\n  top: 5px;\n  width: 50px;\n  height: 50px;\n  //   /* fill: '#3E85F3'; */\n  @media (min-width: 768px) {\n    left: calc(50% - 25px);\n    top: 74px;\n    width: 48px;\n    height: 48px;\n  }\n  @media (min-width: 1440px) {\n    left: calc(50% - 47px);\n    top: 65px;\n    width: 95px;\n    height: 95px;\n  }\n"]))),Mn=N.ZP.div(nn||(nn=(0,j.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n  @media (min-width: 1440px) {\n    flex-direction: row;\n    gap: 50px;\n  }\n"]))),Cn=N.ZP.label(en||(en=(0,j.Z)(["\n  display: flex;\n  flex-direction: column;\n  font-family: Inter;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.3;\n  border-color: rgba(17, 17, 17, 0.15);\n  row-gap: 8px;\n  max-width: 100%;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 1.17;\n  color: ","; //\u043a\u043e\u043b\u0456\u0440 \u043d\u0430\u0437\u0432 \u0456\u043d\u043f\u0443\u0442\u0456\u0432\n\n  @media screen and (min-width: 375px) and (max-width: 768px) {\n    min-width: 299px;\n  }\n\n  @media (min-width: 768px) {\n    width: 354px;\n    font-size: 14px;\n    line-height: 1.3;\n  }\n"])),(function(n){return n.theme.colors.userLabelColor})),jn=(0,N.ZP)(s.gN)(tn||(tn=(0,j.Z)(["\n  position: relative;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1.3;\n  height: 42px;\n  width: 100%;\n  border-radius: 8px;\n  border: 1px solid ",";\n  border-color: ",";\n  background-color: transparent;\n  padding: 12px 14px;\n  color: ",";\n  /* transition: ","; */\n  display: flex;\n\n  &::placeholder {\n    color: ",";\n  }\n  :hover,\n  :focus {\n    border-color: ",";\n    border: 1px solid;\n  }\n  /* border: 1px solid ","; */\n\n  @media (min-width: 768px) {\n    font-size: 16px;\n    line-height: 1.13;\n    padding: 14px 18px;\n    height: 46px;\n  }\n"])),(function(n){return n.theme.colors.textareaBorder}),(function(n){return n.theme.colors.userLabelColor}),(function(n){return n.theme.colors.primaryText}),(function(n){return n.theme.colors.defaultTransition}),(function(n){return n.theme.colors}),(function(n){return n.theme.colors.userInputBorder}),(function(n){return n.theme.colors.textareaBorder})),Bn=N.ZP.div(on||(on=(0,j.Z)(["\n  position: relative;\n  height: 46px;\n  display: flex;\n  @media (min-width: 768px) {\n    height: 46px;\n  }\n"]))),Fn=N.ZP.div(rn||(rn=(0,j.Z)(["\n  margin-bottom: 14px;\n  width: 72px;\n  height: 72px;\n  position: absolute;\n  left: calc(50% - 36px);\n  top: -36px;\n  fill: rgba(62, 133, 243, 0.18);\n  background-color: ",";\n  border: 2px solid #3e85f3;\n  border-radius: 50%;\n  overflow: hidden;\n\n  @media (min-width: 768px) {\n    position: static;\n    width: 124px;\n    height: 124px;\n  }\n  @media (min-width: 1440px) {\n    margin-bottom: 20px;\n  }\n"])),(function(n){return n.theme.colors.bgrAvatar})),vn=N.ZP.img(an||(an=(0,j.Z)(["\n  display: block;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: 50% 50%;\n"]))),kn=N.ZP.div(ln||(ln=(0,j.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n  border-color: rgba(17, 17, 17, 0.15);\n  @media (min-width: 768px) {\n    gap: 24px;\n  }\n"]))),Pn=N.ZP.div(pn||(pn=(0,j.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  margin-top: 40px;\n\n  @media (min-width: 1440px) {\n    margin-top: 88px;\n  }\n"]))),Zn=N.ZP.button(dn||(dn=(0,j.Z)(["\n  align-items: center;\n  min-width: 195px;\n  height: 46px;\n  border-radius: 16px;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 1.3;\n  background-color: ",";\n  color: ",";\n  transition: ",";\n  border: none;\n  cursor: pointer;\n  &:hover,\n  &:focus {\n    background-color: ",";\n  }\n  &:disabled {\n    opacity: 0.45;\n  }\n  @media screen and (max-width: 240px) {\n    min-width: 100px;\n    font-size: 10px;\n  }\n  @media (min-width: 768px) {\n    min-width: 262px;\n    height: 48px;\n  }\n"])),O._s.colors.primary,O._s.colors.white,O._s.colors.defaultTransition,O._s.colors.secondary),On=(0,N.ZP)(fn)(sn||(sn=(0,j.Z)(["\n  position: absolute;\n  left: 53%;\n  top: 25px;\n  width: 14px;\n  height: 14px;\n  cursor: pointer;\n\n  @media (min-width: 768px) {\n    width: 24px;\n    height: 24px;\n    top: 147px;\n    left: 52%;\n  }\n  @media (min-width: 1440px) {\n    top: 170px;\n    left: 51%;\n  }\n"]))),In=(0,N.ZP)(q)(cn||(cn=(0,j.Z)(["\n  width: 24px;\n  height: 24px;\n  position: absolute;\n  right: 18px;\n  top: 50%;\n  transform: translateY(-50%);\n"]))),En=(0,N.ZP)(D)(hn||(hn=(0,j.Z)(["\n  width: 24px;\n  height: 24px;\n  position: absolute;\n  right: 18px;\n  top: 50%;\n  transform: translateY(-50%);\n"]))),zn=N.ZP.h2(un||(un=(0,j.Z)(["\n  color: ",";\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 1.3;\n  margin-bottom: 4px;\n  @media (min-width: 768px) {\n    font-size: 18px;\n    margin-bottom: 8px;\n  }\n"])),(function(n){return n.theme.colors.thirdText})),Sn=N.ZP.p(xn||(xn=(0,j.Z)(["\n  color: ",";\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 1.17;\n  margin-bottom: 40px;\n  @media (min-width: 768px) {\n    font-size: 14px;\n    line-height: 1.3;\n  }\n  @media (min-width: 1440px) {\n    margin-bottom: 44px;\n  }\n"])),(function(n){return n.theme.colors.userLabelColor})),An=t(1144),Dn=(0,N.ZP)(An.M)(mn||(mn=(0,j.Z)(["\n  box-sizing: border-box;\n  width: 100%;\n  font-weight: 600;\n  font-family: 'Inter', sans-serif;\n  font-size: 16px;\n  line-height: 1.3;\n  outline: none;\n  border-radius: 8px;\n  border-color: ",";\n  /* /* border: 1px solid ","; */\n\n  border-color: ",";\n  /* transition: all 250ms; */\n  &:hover .MuiOutlinedInput-root,\n  &:focus .MuiOutlinedInput-root {\n    border: 1px solid ",";\n  }\n\n  & .MuiInputBase-input {\n    position: relative;\n    height: 46px;\n    display: flex;\n    font-size: 14px;\n    padding: 0px 0px 0px 14px;\n\n    line-height: 1.29;\n    height: 18px;\n    font-weight: 600;\n    color: ","; // global styled color\n\n    @media (min-width: 768px) {\n      height: 46px;\n      font-size: 16px;\n    }\n  }\n  /* Input value */\n  .MuiOutlinedInput-root {\n    outline: none;\n    border: 1px solid ","; //\u043a\u043e\u043b\u0456\u0440 Birthday\n    transition: ",";\n\n    /* \u0434\u0430\u0442\u0430 \u043d\u0430\u0440\u043e\u0434\u0436\u0435\u043d\u043d\u044f */\n    .MuiOutlinedInput-notchedOutline {\n      border: none;\n    }\n  }\n\n  .MuiInputBase-root {\n    height: 42px;\n    border-radius: 8px;\n    border-radius: 8px;\n    font-family: 'Inter', sans-serif;\n    padding-right: 0;\n  }\n\n  &.input::placeholder {\n    font-size: 14px;\n    color: ",";\n    font-weight: 600;\n    opacity: 1;\n    outline: none;\n    @media (min-width: 768px) {\n      font-size: 16px;\n    }\n  }\n\n  & .MuiButtonBase-root {\n    // margin-left: 18px;\n    padding: 4px;\n    stroke: #ffffff;\n    margin: 0px 12px;\n    border-color: ",";\n  }\n\n  && .MuiSvgIcon-root {\n    // color: #111111;\n    // width: 30px;\n    // height: 30px;\n    // font-size: 18px;\n  }\n\n  &.MuiFormControl-root {\n    background-color: inherit;\n  }\n\n  & div input::placeholder {\n    font-size: 14px;\n    color: ",";\n    font-weight: 600;\n    opacity: 1;\n    outline: none;\n\n    @media (min-width: 768px) {\n      font-size: 16px;\n    }\n  }\n\n  @media (min-width: 375px) {\n    width: 299px;\n  }\n\n  @media (min-width: 768px) {\n    width: 354px;\n    font-size: 16px;\n    line-height: 1.12;\n\n    .MuiStack-root {\n      color: ",";\n    }\n\n    && .MuiInputBase-root {\n      height: 46px;\n    }\n\n    && .MuiInputBase-input {\n      padding: 0px 0px 0px 18px;\n      font-size: 16px;\n      line-height: 1.12;\n      height: 20px;\n      font-weight: 600;\n    }\n  }\n"])),(function(n){return n.theme.colors.textareaBorder}),(function(n){return n.theme.colors.textareaBorder}),(function(n){return n.theme.colors.userPlaceholder}),(function(n){return n.theme.colors.primaryText}),(function(n){return n.theme.colors.primaryText}),(function(n){return n.theme.colors.userLabelColor}),O._s.colors.defaultTransition,O._s.colors.placeholderColor,(function(n){return n.theme.colors.userPlaceholder}),O._s.colors.placeholderColor,(function(n){return n.theme.colors.inputText})),Yn={"& .MuiDateCalendar-root":{height:"354px",fontFamily:"Inter sans-serif"},"& .MuiPaper-root":{backgroundColor:"#3E85F3",borderRadius:"16px",position:"absolute",top:"5px",left:"-10px",fontSize:"34px"},"& .MuiPickersCalendarHeader-root":{position:"relative",justifyContent:"center"},"& .MuiPickersCalendarHeader-labelContainer":{margin:0,color:"#FFFFFF",fontSize:"20px",lineHeight:1.2},"& .MuiButtonBase-root.MuiIconButton-root.MuiPickersCalendarHeader-switchViewButton":{display:"none"},"& .MuiPickersDay-root":{color:"#FFFFFF",fontWeight:300,fontSize:"14px",lineHeight:1.33,padding:"20px"},"& .MuiPickersArrowSwitcher-spacer":{display:"none"},"& .MuiButtonBase-root.MuiIconButton-root.MuiIconButton-edgeEnd.MuiIconButton-sizeMedium.MuiPickersArrowSwitcher-button":{position:"absolute",left:"35px",top:"9px",color:"#FFFFFF",width:"18px",height:"18px"},"& .MuiButtonBase-root.MuiIconButton-root.MuiIconButton-edgeStart.MuiIconButton-sizeMedium.MuiPickersArrowSwitcher-button":{position:"absolute",top:"9px",right:"35px",color:"#FFFFFF",width:"18px",height:"18px"},"& .MuiDayCalendar-header":{borderBottom:"1px solid rgba(255, 255, 255, 0.2)"},"& .MuiTypography-root.MuiTypography-caption.MuiDayCalendar-weekDayLabel":{color:"#FFFFFF",fontWeight:500,fontSize:"14px",lineHeight:1.28},"& .MuiPickersYear-yearButton":{color:"#FFFFFF",fontWeight:600,fontSize:"14px",lineHeight:1.28},"& .MuiPickersYear-yearButton.Mui-selected":{backgroundColor:"#FFFFFF",color:"#3E85F3",borderRadius:"24px"},"& .MuiPickersYear-yearButton.Mui-weekend":{opacity:"35%"},"& .MuiPickersYear-yearButton.Mui-today.Mui-selected":{backgroundColor:"#FFFFFF",color:"#3E85F3",borderRadius:"24px",border:"none"},"& .MuiButtonBase-root.MuiPickersDay-root.Mui-selected":{backgroundColor:"#FFFFFF",color:"#3E85F3",borderRadius:"24px",width:"32px",height:"32px"},"& .MuiButtonBase-root.MuiPickersDay-root.Mui-selected.MuiPickersDay-dayWithMargin.MuiPickersDay-today":{fill:"#FFFFFF",backgroundColor:"#FFFFFF",color:"#3E85F3",borderRadius:"24px",width:"32px",height:"32px"},"@media (min-width: 768px)":{"& .MuiDateCalendar-root":{width:"337px",minHeight:"354px"},"& .MuiPaper-root":{padding:"15px 18px",scroll:"none",position:"absolute",top:"5px",left:"-10px"},"& .MuiPickersCalendarHeader-labelContainer":{fontSize:"24px",lineHeight:1.17},"& .MuiTypography-root.MuiTypography-caption.MuiDayCalendar-weekDayLabel":{fontSize:"18px",lineHeight:1.33,padding:"22px"},"& .MuiPickersYear-yearButton":{fontSize:"18px",lineHeight:1.33},"& .MuiButtonBase-root.MuiIconButton-root.MuiIconButton-edgeEnd.MuiIconButton-sizeMedium.MuiPickersArrowSwitcher-button":{left:"55px",top:"9px"},"& .MuiButtonBase-root.MuiIconButton-root.MuiIconButton-edgeStart.MuiIconButton-sizeMedium.MuiPickersArrowSwitcher-button":{top:"9px",right:"55px"},"& .MuiPickersDay-root":{color:"#FFFFFF",fontWeight:300,fontSize:"18px",lineHeight:1.33,padding:"22px"}},"@media (min-width: 1440px)":{"& .MuiDateCalendar-root":{width:"337px",minHeight:"334px"},"& .MuiPaper-root":{padding:"15px 18px",scroll:"none",position:"absolute",top:"-190px",left:"190px"},"& .MuiPickersCalendarHeader-labelContainer":{fontSize:"24px",lineHeight:1.17},"& .MuiTypography-root.MuiTypography-caption.MuiDayCalendar-weekDayLabel":{fontSize:"18px",lineHeight:1.33},"& .MuiDayCalendar-weekend":{opacity:"35%"},"& .MuiPickersYear-yearButton":{fontSize:"18px",lineHeight:1.33},"& .MuiButtonBase-root.MuiIconButton-root.MuiIconButton-edgeEnd.MuiIconButton-sizeMedium.MuiPickersArrowSwitcher-button":{left:"55px",top:"9px"},"& .MuiButtonBase-root.MuiIconButton-root.MuiIconButton-edgeStart.MuiIconButton-sizeMedium.MuiPickersArrowSwitcher-button":{top:"9px",right:"55px"}}},Hn=t(184),Ln=x()(new Date).format("DD/MM/YYYY"),_n=function(){var n=(0,p.I0)(),e=(0,p.v9)(d.dy),t=(0,l.useState)(null),i=(0,a.Z)(t,2),u=i[0],f=i[1],g=(0,l.useState)(!1),b=(0,a.Z)(g,2),y=b[0],w=b[1],j=function(){var e=(0,r.Z)((0,o.Z)().mark((function e(t){var i;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(i=new FormData).append("name",t.name),i.append("email",t.email),t.phone&&i.append("phone",t.phone),t.skype&&i.append("skype",t.skype),i.append("birthday",x()(t.birthday).format("DD/MM/YYYY")),u&&i.append("avatar",u),e.prev=7,e.next=10,n((0,C.N)(i));case 10:m.Am.success("Profile data changed successfully"),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(7),m.Am.error("Something went wrong... Try again!");case 16:case"end":return e.stop()}}),e,null,[[7,13]])})));return function(n){return e.apply(this,arguments)}}();return(0,Hn.jsx)(Hn.Fragment,{children:(0,Hn.jsx)(gn,{children:(0,Hn.jsx)(s.J9,{validationSchema:M,initialValues:{name:e.name||"",birthday:e.birthday||"".concat(Ln),email:e.email||"",phone:e.phone||"",skype:e.skype||""},onSubmit:j,children:function(n){n.values;var t=n.setFieldValue,i=n.dirty,o=(n.isSubmitting,n.touched),r=n.errors;return(0,Hn.jsxs)(bn,{children:[(0,Hn.jsxs)("div",{children:[(0,Hn.jsx)(Fn,{children:u?(0,Hn.jsx)("label",{htmlFor:"avatar",children:(0,Hn.jsx)(vn,{src:URL.createObjectURL(u),alt:"Avatar"})}):e.avatarURL?(0,Hn.jsx)("label",{htmlFor:"avatar",children:(0,Hn.jsx)(vn,{src:e.avatarURL,alt:"Avatar"})}):(0,Hn.jsx)(wn,{})}),(0,Hn.jsx)(yn,{id:"add-avatar",name:"avatar",type:"file",accept:"image/*, .png,.jpg, .gif",onChange:function(n){f(n.target.files[0]),w(!0)}}),(0,Hn.jsx)("label",{htmlFor:"add-avatar",children:(0,Hn.jsx)(On,{})})]}),(0,Hn.jsx)(zn,{children:e.name||"****"}),(0,Hn.jsx)(Sn,{children:"User"}),(0,Hn.jsxs)(Mn,{children:[(0,Hn.jsxs)(kn,{children:[(0,Hn.jsxs)(Cn,{style:{color:o.name&&r.name?"#E74A3B":o.name&&!r.name&&"#3CBC81"},children:[(0,Hn.jsx)("p",{children:"User Name"}),(0,Hn.jsxs)(Bn,{children:[(0,Hn.jsx)(jn,{name:"name",placeholder:"Your name",style:{borderColor:o.name&&r.name?"#E74A3B":o.name&&!r.name&&"#3CBC81"}}),o.name&&r.name&&(0,Hn.jsx)(In,{}),o.name&&!r.name&&(0,Hn.jsx)(En,{})]}),(0,Hn.jsx)(s.Bc,{name:"name",component:"span"})]}),(0,Hn.jsxs)(Cn,{style:{borderColor:o.birthday&&r.birthday?"#E74A3B":o.birthday&&!r.birthday&&"#3CBC81"},children:[(0,Hn.jsx)("p",{children:"Birthday"}),(0,Hn.jsx)(c._,{dateAdapter:h.y,children:(0,Hn.jsx)(Bn,{children:(0,Hn.jsx)(Dn,{name:"birthday",type:"date",style:{borderColor:o.birthday&&r.birthday?"#E74A3B":o.birthday&&!r.birthday&&"#3CBC81"},slotProps:{popper:{sx:Yn},textField:{placeholder:e.birthday||"".concat(Ln),style:{color:o.birthday&&r.birthday?"#E74A3B":o.birthday&&!r.birthday&&"#3CBC81"}}},views:["year","month","day"],format:"DD.MM.YYYY",closeOnSelect:!0,disableFuture:!0,onChange:function(n){n||t("birthday",""),t("birthday",n)}})})})]}),(0,Hn.jsxs)(Cn,{style:{color:o.email&&r.email?"#E74A3B":o.email&&!r.email&&"#3CBC81"},children:[(0,Hn.jsx)("p",{children:"Email"}),(0,Hn.jsxs)(Bn,{children:[(0,Hn.jsx)(jn,{name:"email",placeholder:"Your email",style:{borderColor:o.email&&r.email?"#E74A3B":o.email&&!r.email&&"#3CBC81"}}),o.email&&r.email&&(0,Hn.jsx)(In,{}),o.email&&!r.email&&(0,Hn.jsx)(En,{})]}),(0,Hn.jsx)(s.Bc,{name:"email",component:"span"})]})]}),(0,Hn.jsxs)(kn,{children:[(0,Hn.jsxs)(Cn,{style:{color:o.phone&&r.phone?"#E74A3B":o.phone&&!r.phone&&"#3CBC81"},children:[(0,Hn.jsx)("p",{children:"Phone"}),(0,Hn.jsxs)(Bn,{children:[(0,Hn.jsx)(jn,{name:"phone",type:"tel",placeholder:"Add a skype number",style:{borderColor:o.phone&&r.phone?"#E74A3B":o.phone&&!r.phone&&"#3CBC81"}}),o.phone&&r.phone&&(0,Hn.jsx)(In,{}),o.phone&&!r.phone&&(0,Hn.jsx)(En,{})]}),(0,Hn.jsx)(s.Bc,{name:"phone",component:"span"})]}),(0,Hn.jsxs)(Cn,{style:{color:o.skype&&r.skype?"#E74A3B":o.skype&&!r.skype&&"#3CBC81"},children:[(0,Hn.jsx)("p",{children:"Skype"}),(0,Hn.jsxs)(Bn,{children:[(0,Hn.jsx)(jn,{name:"skype",type:"text",placeholder:"Add a phone number",style:{borderColor:o.skype&&r.skype?"#E74A3B":o.skype&&!r.skype&&"#3CBC81"}}),o.skype&&r.skype&&(0,Hn.jsx)(In,{}),o.skype&&!r.skype&&(0,Hn.jsx)(En,{})]}),(0,Hn.jsx)(s.Bc,{name:"skype",component:"span"})]})]})]}),(0,Hn.jsx)(Pn,{children:(0,Hn.jsx)(Zn,{type:"submit",disabled:!i&&!y,children:"Save changes"})})]})}})})})};function Rn(){return(0,Hn.jsx)(Hn.Fragment,{children:(0,Hn.jsx)(_n,{})})}}}]);
//# sourceMappingURL=766.a1284b87.chunk.js.map