/*! For license information please see main.72c866d1.chunk.js.LICENSE.txt */
(this["webpackJsonpreact-events-counter-example"]=this["webpackJsonpreact-events-counter-example"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);n(6);var a=n(0),l=n.n(a),r=n(2),o=n.n(r),c=(n(1),n(4)),s=(n(3),"_styles-module__counterContainer__2Zn6J"),u="_styles-module__emoji__1PZEU";function i(e,t,n,a,l,r){e?t?(console.log("Dry run: postCounts skipped"),a(parseInt(n,10)+1)):console.error("event is a required property!"):console.error("asset is a required property!")}function m(e,t){return e(t={exports:{}},t.exports),t.exports}console.log("Dry run: "+!0);var p="function"===typeof Symbol&&Symbol.for,E=p?Symbol.for("react.element"):60103,d=p?Symbol.for("react.portal"):60106,f=p?Symbol.for("react.fragment"):60107,y=p?Symbol.for("react.strict_mode"):60108,h=p?Symbol.for("react.profiler"):60114,b=p?Symbol.for("react.provider"):60109,v=p?Symbol.for("react.context"):60110,g=p?Symbol.for("react.async_mode"):60111,x=p?Symbol.for("react.concurrent_mode"):60111,w=p?Symbol.for("react.forward_ref"):60112,C=p?Symbol.for("react.suspense"):60113,S=p?Symbol.for("react.suspense_list"):60120,k=p?Symbol.for("react.memo"):60115,O=p?Symbol.for("react.lazy"):60116,j=p?Symbol.for("react.block"):60121,_=p?Symbol.for("react.fundamental"):60117,P=p?Symbol.for("react.responder"):60118,N=p?Symbol.for("react.scope"):60119;function $(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case E:switch(e=e.type){case g:case x:case f:case h:case y:case C:return e;default:switch(e=e&&e.$$typeof){case v:case w:case O:case k:case b:return e;default:return t}}case d:return t}}}function T(e){return $(e)===x}var R={AsyncMode:g,ConcurrentMode:x,ContextConsumer:v,ContextProvider:b,Element:E,ForwardRef:w,Fragment:f,Lazy:O,Memo:k,Portal:d,Profiler:h,StrictMode:y,Suspense:C,isAsyncMode:function(e){return T(e)||$(e)===g},isConcurrentMode:T,isContextConsumer:function(e){return $(e)===v},isContextProvider:function(e){return $(e)===b},isElement:function(e){return"object"===typeof e&&null!==e&&e.$$typeof===E},isForwardRef:function(e){return $(e)===w},isFragment:function(e){return $(e)===f},isLazy:function(e){return $(e)===O},isMemo:function(e){return $(e)===k},isPortal:function(e){return $(e)===d},isProfiler:function(e){return $(e)===h},isStrictMode:function(e){return $(e)===y},isSuspense:function(e){return $(e)===C},isValidElementType:function(e){return"string"===typeof e||"function"===typeof e||e===f||e===x||e===h||e===y||e===C||e===S||"object"===typeof e&&null!==e&&(e.$$typeof===O||e.$$typeof===k||e.$$typeof===b||e.$$typeof===v||e.$$typeof===w||e.$$typeof===_||e.$$typeof===P||e.$$typeof===N||e.$$typeof===j)},typeOf:$},I=(m((function(e,t){0})),m((function(e){e.exports=R})),Object.getOwnPropertySymbols),z=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;function D(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var a={};return"abcdefghijklmnopqrst".split("").forEach((function(e){a[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},a)).join("")}catch(l){return!1}})()&&Object.assign;var M="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";function L(e,t,n,a,l){}L.resetWarningCache=function(){0};Function.call.bind(Object.prototype.hasOwnProperty);function F(){}function A(){}A.resetWarningCache=F;var W=m((function(e){e.exports=function(){function e(e,t,n,a,l,r){if(r!==M){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:A,resetWarningCache:F};return n.PropTypes=n,n}()}));function B(e){var t=e.asset,n=e.event,r=(e.application,e.user,e.className),o=e.countOnLoad,u=void 0!==o&&o,m=e.icon,p=void 0===m?"":m,E=e.text,d=void 0===E?"":E,f=e.order,y=void 0===f?["icon","text","count"]:f,h=e.formatCount,b=void 0===h?"{count}":h,v=Object(a.useState)(0),g=Object(c.a)(v,2),x=g[0],w=g[1];return Object(a.useEffect)((function(){u?i(t,n,x,w):function(e,t,n){console.log("Dry run: getCounts skipped"),n("0")}(0,0,w)}),[]),x?l.a.createElement("div",{key:"".concat(t,"#").concat(n),className:"".concat(s," ").concat(r)},y.map((function(e,a){switch(e){case"icon":return l.a.createElement("div",{onClick:function(){return i(t,n,x,w)},key:"icon"},p);case"text":return l.a.createElement("p",{key:"text"},d);case"count":return l.a.createElement("p",{key:"count"},b.replace("{count}",x))}}))):null}B.propTypes={asset:W.string.isRequired,event:W.string.isRequired};var J=function(e){var t=e.className,n=e.label,a=e.symbol,r=e.size,o=void 0===r?2:r;return l.a.createElement("span",{key:"".concat(n),className:"".concat(u," ").concat(t),role:"img",style:{fontSize:o+"em"},"aria-label":n||"","aria-hidden":n?"false":"true"},a)};J.propTypes={symbol:W.string.isRequired,label:W.string.isRequired};n(14);var U=function(){return l.a.createElement("div",{className:"container"},l.a.createElement("section",null,l.a.createElement("h1",null,"Events Counter"),l.a.createElement("h3",null,"Props:"),l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Description"),l.a.createElement("th",null,"Required"),l.a.createElement("th",null,"Default")),l.a.createElement("tr",null,l.a.createElement("td",null,"asset"),l.a.createElement("td",null,"asset identifier"),l.a.createElement("td",null,"yes"),l.a.createElement("td",null)),l.a.createElement("tr",null,l.a.createElement("td",null,"event"),l.a.createElement("td",null,"asset identifier"),l.a.createElement("td",null,"yes"),l.a.createElement("td",null)),l.a.createElement("tr",null,l.a.createElement("td",null,"user"),l.a.createElement("td",null,"user identifier, in case you want to link the event to a user"),l.a.createElement("td",null,"no"),l.a.createElement("td",null)),l.a.createElement("tr",null,l.a.createElement("td",null,"application"),l.a.createElement("td",null,"name of the application"),l.a.createElement("td",null,"no"),l.a.createElement("td",null)),l.a.createElement("tr",null,l.a.createElement("td",null,"text"),l.a.createElement("td",null,"text to be shown along side count"),l.a.createElement("td",null,"no"),l.a.createElement("td",null)),l.a.createElement("tr",null,l.a.createElement("td",null,"icon"),l.a.createElement("td",null,"icon to be shown along side count"),l.a.createElement("td",null,"no"),l.a.createElement("td",null)),l.a.createElement("tr",null,l.a.createElement("td",null,"order"),l.a.createElement("td",null,"order in which to render icon, text and count.",l.a.createElement("br",null),"type: list of string"),l.a.createElement("td",null,"no"),l.a.createElement("td",null,"['icon', 'text', 'count']")),l.a.createElement("tr",null,l.a.createElement("td",null,"countOnLoad"),l.a.createElement("td",null,"whether to count on load or not i.e. without user interaction",l.a.createElement("br",null),"useful when counting page-views."),l.a.createElement("td",null,"no"),l.a.createElement("td",null,"false")),l.a.createElement("tr",null,l.a.createElement("td",null,"formatCount"),l.a.createElement("td",null,"format the rendering of the count.",l.a.createElement("br",null),"Must contain {count}",l.a.createElement("br",null)," type: string"),l.a.createElement("td",null,"no"),l.a.createElement("td",null,"{count}")),l.a.createElement("tr",null,l.a.createElement("td",null,"className"),l.a.createElement("td",null,"CSS class names"),l.a.createElement("td",null,"no"),l.a.createElement("td",null))))),l.a.createElement("p",null," ","Please refer to"," ",l.a.createElement("a",{href:"https://docs.eventscounter.com/",target:"_blank",className:""},"Events Counter Documentation")," ","for general concepts."," "),l.a.createElement("hr",null),l.a.createElement("p",{className:""},"Disclaimer: `dryRun` is set to 1. So no actual API call is being made on this page."),l.a.createElement("section",null,l.a.createElement("h1",null,"1. Basic Events Counter"),l.a.createElement("pre",null,"\n<EventsCounter\n  asset='home-page'\n  event='page-views'\n  text='Total views:'\n  countOnLoad={true}\n/>\n          "),l.a.createElement("h3",null,"Result:"),l.a.createElement("div",{className:"result"},l.a.createElement(B,{asset:"home-page",event:"page-views",text:"Total views:",countOnLoad:!0}))),l.a.createElement("hr",null),l.a.createElement("section",null,l.a.createElement("h1",null,"2. With icon"),l.a.createElement("h3",null,"Description:"),l.a.createElement("p",null,"Increments on click event only. Click event is attached to the icon supplied."),l.a.createElement("div",{id:"example"},l.a.createElement("h3",null,"Example: Basic event counter"),l.a.createElement("pre",null,"\n<EventsCounter\n  asset='home-page'\n  event='likes-page'\n  text=' YES - I liked it &nbsp;'\n  icon={<IconEmoji symbol='\ud83d\udc4d&nbsp;' label='views' />}\n/>          \n            "),l.a.createElement("h3",null,"Result:"),l.a.createElement("span",null,"Click on the emoji icon"),l.a.createElement("div",{className:"result"},l.a.createElement(B,{asset:"home-page",event:"likes-page",text:" YES - I liked it \xa0",icon:l.a.createElement(J,{symbol:"\ud83d\udc4d\xa0",label:"views"})})))),l.a.createElement("hr",null),l.a.createElement("section",null,l.a.createElement("h1",null,"3. Play with the props"),l.a.createElement("div",{id:"example"},l.a.createElement("h3",null,"Example 1: Change the render order using the `order` prop"),l.a.createElement("pre",null,"\n<EventsCounter\n  asset='home-page'\n  event='dislikes-page'\n  text='NOPE - I disliked it &nbsp;'\n  icon={<IconEmoji symbol='\ud83d\udc4e&nbsp;' label='views' />}\n  order={['text', 'icon', 'count']}\n/>\n            "),l.a.createElement("h3",null,"Result:"),l.a.createElement("span",null,"Click on the emoji icon"),l.a.createElement("div",{className:"result"},l.a.createElement(B,{asset:"home-page",event:"dislikes-page",text:"NOPE - I disliked it \xa0",icon:l.a.createElement(J,{symbol:"\ud83d\udc4e\xa0",label:"views"}),order:["text","icon","count"]}))),l.a.createElement("div",{id:"example"},l.a.createElement("h3",null,"Example 2: A bigger emoji icon"),l.a.createElement("pre",null,"\n<EventsCounter\n  asset='home-page'\n  event='resizes-unicorn'\n  order={['text', 'count', 'icon']}\n  icon={<IconEmoji symbol='\ud83e\udd84' label='views' size={4} />}\n/>\n      "),l.a.createElement("h3",null,"Result:"),l.a.createElement("span",null,"Click on the emoji icon"),l.a.createElement("div",{className:"result"},l.a.createElement(B,{asset:"home-page",event:"resizes-unicorn",order:["text","count","icon"],icon:l.a.createElement(J,{symbol:"\ud83e\udd84",label:"views",size:4})}))),l.a.createElement("div",{id:"example"},l.a.createElement("h3",null,"Example 3: Control how to render the `count` "),l.a.createElement("pre",null,"\n<EventsCounter\n  asset='home-page'\n  event='renders-count'\n  order={['text', 'count']}\n  formatCount='({count})'\n  text='Total views: '\n/>\n            "),l.a.createElement("h3",null,"Result:"),l.a.createElement("span",null,"Click on the emoji icon"),l.a.createElement("div",{className:"result"},l.a.createElement(B,{asset:"home-page",event:"renders-count",order:["text","count"],formatCount:"({count})",text:"Total views: "}))),l.a.createElement("div",{id:"example"},l.a.createElement("h3",null,"Example 4: Pass the CSS "),l.a.createElement("pre",null,"\n<EventsCounter\n  className='cosmetics'\n  asset='home-page'\n  event='customizes-css'\n  order={['text', 'count']}\n  formatCount='({count})'\n  text='Total views: '\n/>\n            "),l.a.createElement("pre",null,".cosmetics {\n  color: blueviolet !important;\n  text-decoration: underline;\n}"),l.a.createElement("h3",null,"Result:"),l.a.createElement("span",null,"Click on the emoji icon"),l.a.createElement("div",{className:"result"},l.a.createElement(B,{className:"cosmetics",asset:"home-page",event:"customizes-css",order:["text","count"],formatCount:"({count})",text:"Total views: "})))),l.a.createElement("hr",null),l.a.createElement("section",null,l.a.createElement("p",{className:"footer"},"~~ Thats all folks! ~~"),l.a.createElement("p",{className:"footer"},l.a.createElement("a",{href:"https://github.com/raevilman/react-events-counter",target:"_blank"},"GitHub Repo"))))};o.a.render(l.a.createElement(U,null),document.getElementById("root"))},5:function(e,t,n){e.exports=n(15)},6:function(e,t,n){}},[[5,1,2]]]);
//# sourceMappingURL=main.72c866d1.chunk.js.map