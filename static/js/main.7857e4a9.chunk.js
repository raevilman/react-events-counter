/*! For license information please see main.7857e4a9.chunk.js.LICENSE.txt */
(this["webpackJsonpreact-events-counter-example"]=this["webpackJsonpreact-events-counter-example"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);n(6);var r=n(0),a=n.n(r),o=n(3),c=n.n(o),l=(n(1),n(2)),s=(n(4),"_styles-module__counterContainer__2Zn6J"),i="_styles-module__emoji__1PZEU";function u(e,t,n,r){e?t?(console.log("Dry run: postCounts skipped"),r(parseInt(n,10)+1)):console.error("event is a required property!"):console.error("asset is a required property!")}function m(e,t){return e(t={exports:{}},t.exports),t.exports}console.log("Dry run: "+!0);var p="function"===typeof Symbol&&Symbol.for,f=p?Symbol.for("react.element"):60103,d=p?Symbol.for("react.portal"):60106,y=p?Symbol.for("react.fragment"):60107,E=p?Symbol.for("react.strict_mode"):60108,v=p?Symbol.for("react.profiler"):60114,h=p?Symbol.for("react.provider"):60109,b=p?Symbol.for("react.context"):60110,g=p?Symbol.for("react.async_mode"):60111,x=p?Symbol.for("react.concurrent_mode"):60111,C=p?Symbol.for("react.forward_ref"):60112,S=p?Symbol.for("react.suspense"):60113,k=p?Symbol.for("react.suspense_list"):60120,j=p?Symbol.for("react.memo"):60115,w=p?Symbol.for("react.lazy"):60116,O=p?Symbol.for("react.block"):60121,P=p?Symbol.for("react.fundamental"):60117,_=p?Symbol.for("react.responder"):60118,$=p?Symbol.for("react.scope"):60119;function N(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case f:switch(e=e.type){case g:case x:case y:case v:case E:case S:return e;default:switch(e=e&&e.$$typeof){case b:case C:case w:case j:case h:return e;default:return t}}case d:return t}}}function T(e){return N(e)===x}var R={AsyncMode:g,ConcurrentMode:x,ContextConsumer:b,ContextProvider:h,Element:f,ForwardRef:C,Fragment:y,Lazy:w,Memo:j,Portal:d,Profiler:v,StrictMode:E,Suspense:S,isAsyncMode:function(e){return T(e)||N(e)===g},isConcurrentMode:T,isContextConsumer:function(e){return N(e)===b},isContextProvider:function(e){return N(e)===h},isElement:function(e){return"object"===typeof e&&null!==e&&e.$$typeof===f},isForwardRef:function(e){return N(e)===C},isFragment:function(e){return N(e)===y},isLazy:function(e){return N(e)===w},isMemo:function(e){return N(e)===j},isPortal:function(e){return N(e)===d},isProfiler:function(e){return N(e)===v},isStrictMode:function(e){return N(e)===E},isSuspense:function(e){return N(e)===S},isValidElementType:function(e){return"string"===typeof e||"function"===typeof e||e===y||e===x||e===v||e===E||e===S||e===k||"object"===typeof e&&null!==e&&(e.$$typeof===w||e.$$typeof===j||e.$$typeof===h||e.$$typeof===b||e.$$typeof===C||e.$$typeof===P||e.$$typeof===_||e.$$typeof===$||e.$$typeof===O)},typeOf:N},I=(m((function(e,t){0})),m((function(e){e.exports=R})),Object.getOwnPropertySymbols),q=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;function B(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}})()&&Object.assign;var D="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";function L(e,t,n,r,a){}L.resetWarningCache=function(){0};Function.call.bind(Object.prototype.hasOwnProperty);function M(){}function F(){}F.resetWarningCache=M;var A=m((function(e){e.exports=function(){function e(e,t,n,r,a,o){if(o!==D){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:F,resetWarningCache:M};return n.PropTypes=n,n}()}));function W(e){var t=e.asset,n=e.event,o=e.className,c=e.text,i=void 0===c?"":c,m=e.order,p=void 0===m?["text","count"]:m,f=e.formatCount,d=void 0===f?{template:"{count}",countPlaceholder:"{count}"}:f,y=Object(r.useState)(0),E=Object(l.a)(y,2),v=E[0],h=E[1];return Object(r.useEffect)((function(){u(t,n,v,h)}),[]),v?a.a.createElement("div",{key:"".concat(t,"#").concat(n),className:"".concat(s," ").concat(o)},p.map((function(e,t){switch(e){case"text":return a.a.createElement("p",{key:"text"},i);case"count":return a.a.createElement("p",{key:"count"},d.template.replace(d.countPlaceholder,v))}}))):null}function J(e){var t=e.asset,n=e.event,o=e.className,c=e.icon,i=void 0===c?"":c,m=e.text,p=void 0===m?"":m,f=e.order,d=void 0===f?["icon","text","count"]:f,y=e.formatCount,E=void 0===y?{template:"{count}",countPlaceholder:"{count}"}:y,v=Object(r.useState)(0),h=Object(l.a)(v,2),b=h[0],g=h[1];return Object(r.useEffect)((function(){!function(e,t,n){console.log("Dry run: getCounts skipped"),n("0")}(0,0,g)}),[]),b?a.a.createElement("div",{key:"".concat(t,"#").concat(n),className:"".concat(s," ").concat(o)},d.map((function(e,r){switch(e){case"icon":return a.a.createElement("div",{onClick:function(){return u(t,n,b,g)},key:"icon"},i);case"text":return a.a.createElement("p",{key:"text"},p);case"count":return a.a.createElement("p",{key:"count"},E.template.replace(E.countPlaceholder,b))}}))):null}W.propTypes={asset:A.string.isRequired,event:A.string.isRequired},J.propTypes={asset:A.string.isRequired,event:A.string.isRequired};var U=function(e){var t=e.className,n=e.label,r=e.symbol,o=e.size,c=void 0===o?2:o;return a.a.createElement("span",{key:"".concat(n),className:"".concat(i," ").concat(t),role:"img",style:{fontSize:c+"em"},"aria-label":n||"","aria-hidden":n?"false":"true"},r)};U.propTypes={symbol:A.string.isRequired,label:A.string.isRequired};n(14);var Y=function(){return a.a.createElement("div",{className:"container"},a.a.createElement("p",{className:""},"Disclaimer: `dryRun` is set to 1. So no actual API call is being made on this page."),a.a.createElement("section",null,a.a.createElement("h1",null,"1. Basic Load Counter"),a.a.createElement("h3",null,"Description:"),a.a.createElement("p",null,"Increments on load. No click event."),a.a.createElement("h3",null,"Example:"),a.a.createElement("pre",null,"\n<BasicLoadCounter\n  asset='home-page'\n  event='page-views'\n  text='Total views:'\n/>\n          "),a.a.createElement("h3",null,"Result:"),a.a.createElement("div",{className:"result"},a.a.createElement(W,{asset:"home-page",event:"page-views",text:"Total views:"}))),a.a.createElement("hr",null),a.a.createElement("section",null,a.a.createElement("h1",null,"2. Basic Event Counters"),a.a.createElement("h3",null,"Description:"),a.a.createElement("p",null,"Increments on click event only. Click event is attached to the icon supplied."),a.a.createElement("div",{id:"example"},a.a.createElement("h3",null,"Example: Basic event counter"),a.a.createElement("pre",null,"\n<BasicEventCounter\n  asset='home-page'\n  event='likes-page'\n  text=' YES - I liked it &nbsp;'\n  icon={<IconEmoji symbol='\ud83d\udc4d&nbsp;' label='views' />}\n/>          \n            "),a.a.createElement("h3",null,"Result:"),a.a.createElement("span",null,"Click on the emoji icon"),a.a.createElement("div",{className:"result"},a.a.createElement(J,{asset:"home-page",event:"likes-page",text:" YES - I liked it \xa0",icon:a.a.createElement(U,{symbol:"\ud83d\udc4d\xa0",label:"views"})})))),a.a.createElement("hr",null),a.a.createElement("section",null,a.a.createElement("h1",null,"3. Play with the props"),a.a.createElement("div",{id:"example"},a.a.createElement("h3",null,"Example 1: Change the render order using the `order` prop"),a.a.createElement("pre",null,"\n<BasicEventCounter\n  asset='home-page'\n  event='dislikes-page'\n  text='NOPE - I disliked it &nbsp;'\n  icon={<IconEmoji symbol='\ud83d\udc4e&nbsp;' label='views' />}\n  order={['text', 'icon', 'count']}\n/>\n            "),a.a.createElement("h3",null,"Result:"),a.a.createElement("span",null,"Click on the emoji icon"),a.a.createElement("div",{className:"result"},a.a.createElement(J,{asset:"home-page",event:"dislikes-page",text:"NOPE - I disliked it \xa0",icon:a.a.createElement(U,{symbol:"\ud83d\udc4e\xa0",label:"views"}),order:["text","icon","count"]}))),a.a.createElement("div",{id:"example"},a.a.createElement("h3",null,"Example 2: A bigger emoji icon"),a.a.createElement("pre",null,"\n<BasicEventCounter\n  asset='home-page'\n  event='resizes-unicorn'\n  order={['text', 'count', 'icon']}\n  icon={<IconEmoji symbol='\ud83e\udd84' label='views' size={4} />}\n/>\n      "),a.a.createElement("h3",null,"Result:"),a.a.createElement("span",null,"Click on the emoji icon"),a.a.createElement("div",{className:"result"},a.a.createElement(J,{asset:"home-page",event:"resizes-unicorn",order:["text","count","icon"],icon:a.a.createElement(U,{symbol:"\ud83e\udd84",label:"views",size:4})}))),a.a.createElement("div",{id:"example"},a.a.createElement("h3",null,"Example 3: Control how to render the `count` "),a.a.createElement("pre",null,"\n<BasicLoadCounter\n  asset='home-page'\n  event='renders-count'\n  order={['text', 'count']}\n  formatCount={{\n    template: '({count})',\n    countPlaceholder: '{count}'\n  }}\n  text='Total views: '\n/>\n            "),a.a.createElement("h3",null,"Result:"),a.a.createElement("span",null,"Click on the emoji icon"),a.a.createElement("div",{className:"result"},a.a.createElement(J,{asset:"home-page",event:"renders-count",order:["text","count"],formatCount:{template:"({count})",countPlaceholder:"{count}"},text:"Total views: "}))),a.a.createElement("div",{id:"example"},a.a.createElement("h3",null,"Example 4: Pass the CSS "),a.a.createElement("pre",null,"\n<BasicLoadCounter\n  className='cosmetics'\n  asset='home-page'\n  event='customizes-css'\n  order={['text', 'count']}\n  formatCount={{\n    template: '({count})',\n    countPlaceholder: '{count}'\n  }}\n  text='Total views: '\n/>\n            "),a.a.createElement("pre",null,".cosmetics {\n  color: blueviolet !important;\n  text-decoration: underline;\n}"),a.a.createElement("h3",null,"Result:"),a.a.createElement("span",null,"Click on the emoji icon"),a.a.createElement("div",{className:"result"},a.a.createElement(J,{className:"cosmetics",asset:"home-page",event:"customizes-css",order:["text","count"],formatCount:{template:"({count})",countPlaceholder:"{count}"},text:"Total views: "})))),a.a.createElement("hr",null),a.a.createElement("section",null,a.a.createElement("p",{className:"footer"},"~~ Thats all folks! ~~")))};c.a.render(a.a.createElement(Y,null),document.getElementById("root"))},5:function(e,t,n){e.exports=n(15)},6:function(e,t,n){}},[[5,1,2]]]);
//# sourceMappingURL=main.7857e4a9.chunk.js.map