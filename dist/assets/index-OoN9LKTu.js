const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Home-MhiJVFJU.js","assets/Navbar-DQ3wAirG.js","assets/index-BXz00ADW.js","assets/Auth-6T1XnuyZ.js","assets/Dashboard-BpeffwCj.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function n(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=n(o);fetch(o.href,u)}})();function zC(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var ff={exports:{}},co={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ay;function HC(){if(Ay)return co;Ay=1;var i=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(s,o,u){var d=null;if(u!==void 0&&(d=""+u),o.key!==void 0&&(d=""+o.key),"key"in o){u={};for(var f in o)f!=="key"&&(u[f]=o[f])}else u=o;return o=u.ref,{$$typeof:i,type:s,key:d,ref:o!==void 0?o:null,props:u}}return co.Fragment=e,co.jsx=n,co.jsxs=n,co}var Iy;function BC(){return Iy||(Iy=1,ff.exports=HC()),ff.exports}var xt=BC(),pf={exports:{}},se={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ny;function VC(){if(Ny)return se;Ny=1;var i=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),y=Symbol.iterator;function E(S){return S===null||typeof S!="object"?null:(S=y&&S[y]||S["@@iterator"],typeof S=="function"?S:null)}var I={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,B={};function H(S,L,G){this.props=S,this.context=L,this.refs=B,this.updater=G||I}H.prototype.isReactComponent={},H.prototype.setState=function(S,L){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,L,"setState")},H.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function z(){}z.prototype=H.prototype;function W(S,L,G){this.props=S,this.context=L,this.refs=B,this.updater=G||I}var q=W.prototype=new z;q.constructor=W,A(q,H.prototype),q.isPureReactComponent=!0;var ue=Array.isArray,$={H:null,A:null,T:null,S:null,V:null},xe=Object.prototype.hasOwnProperty;function Me(S,L,G,F,K,me){return G=me.ref,{$$typeof:i,type:S,key:L,ref:G!==void 0?G:null,props:me}}function He(S,L){return Me(S.type,L,void 0,void 0,void 0,S.props)}function Te(S){return typeof S=="object"&&S!==null&&S.$$typeof===i}function pt(S){var L={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(G){return L[G]})}var tn=/\/+/g;function Et(S,L){return typeof S=="object"&&S!==null&&S.key!=null?pt(""+S.key):L.toString(36)}function fr(){}function pr(S){switch(S.status){case"fulfilled":return S.value;case"rejected":throw S.reason;default:switch(typeof S.status=="string"?S.then(fr,fr):(S.status="pending",S.then(function(L){S.status==="pending"&&(S.status="fulfilled",S.value=L)},function(L){S.status==="pending"&&(S.status="rejected",S.reason=L)})),S.status){case"fulfilled":return S.value;case"rejected":throw S.reason}}throw S}function bt(S,L,G,F,K){var me=typeof S;(me==="undefined"||me==="boolean")&&(S=null);var re=!1;if(S===null)re=!0;else switch(me){case"bigint":case"string":case"number":re=!0;break;case"object":switch(S.$$typeof){case i:case e:re=!0;break;case _:return re=S._init,bt(re(S._payload),L,G,F,K)}}if(re)return K=K(S),re=F===""?"."+Et(S,0):F,ue(K)?(G="",re!=null&&(G=re.replace(tn,"$&/")+"/"),bt(K,L,G,"",function(bi){return bi})):K!=null&&(Te(K)&&(K=He(K,G+(K.key==null||S&&S.key===K.key?"":(""+K.key).replace(tn,"$&/")+"/")+re)),L.push(K)),1;re=0;var Bt=F===""?".":F+":";if(ue(S))for(var Pe=0;Pe<S.length;Pe++)F=S[Pe],me=Bt+Et(F,Pe),re+=bt(F,L,G,me,K);else if(Pe=E(S),typeof Pe=="function")for(S=Pe.call(S),Pe=0;!(F=S.next()).done;)F=F.value,me=Bt+Et(F,Pe++),re+=bt(F,L,G,me,K);else if(me==="object"){if(typeof S.then=="function")return bt(pr(S),L,G,F,K);throw L=String(S),Error("Objects are not valid as a React child (found: "+(L==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":L)+"). If you meant to render a collection of children, use an array instead.")}return re}function k(S,L,G){if(S==null)return S;var F=[],K=0;return bt(S,F,"","",function(me){return L.call(G,me,K++)}),F}function j(S){if(S._status===-1){var L=S._result;L=L(),L.then(function(G){(S._status===0||S._status===-1)&&(S._status=1,S._result=G)},function(G){(S._status===0||S._status===-1)&&(S._status=2,S._result=G)}),S._status===-1&&(S._status=0,S._result=L)}if(S._status===1)return S._result.default;throw S._result}var ee=typeof reportError=="function"?reportError:function(S){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var L=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof S=="object"&&S!==null&&typeof S.message=="string"?String(S.message):String(S),error:S});if(!window.dispatchEvent(L))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",S);return}console.error(S)};function Ae(){}return se.Children={map:k,forEach:function(S,L,G){k(S,function(){L.apply(this,arguments)},G)},count:function(S){var L=0;return k(S,function(){L++}),L},toArray:function(S){return k(S,function(L){return L})||[]},only:function(S){if(!Te(S))throw Error("React.Children.only expected to receive a single React element child.");return S}},se.Component=H,se.Fragment=n,se.Profiler=o,se.PureComponent=W,se.StrictMode=s,se.Suspense=p,se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=$,se.__COMPILER_RUNTIME={__proto__:null,c:function(S){return $.H.useMemoCache(S)}},se.cache=function(S){return function(){return S.apply(null,arguments)}},se.cloneElement=function(S,L,G){if(S==null)throw Error("The argument must be a React element, but you passed "+S+".");var F=A({},S.props),K=S.key,me=void 0;if(L!=null)for(re in L.ref!==void 0&&(me=void 0),L.key!==void 0&&(K=""+L.key),L)!xe.call(L,re)||re==="key"||re==="__self"||re==="__source"||re==="ref"&&L.ref===void 0||(F[re]=L[re]);var re=arguments.length-2;if(re===1)F.children=G;else if(1<re){for(var Bt=Array(re),Pe=0;Pe<re;Pe++)Bt[Pe]=arguments[Pe+2];F.children=Bt}return Me(S.type,K,void 0,void 0,me,F)},se.createContext=function(S){return S={$$typeof:d,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null},S.Provider=S,S.Consumer={$$typeof:u,_context:S},S},se.createElement=function(S,L,G){var F,K={},me=null;if(L!=null)for(F in L.key!==void 0&&(me=""+L.key),L)xe.call(L,F)&&F!=="key"&&F!=="__self"&&F!=="__source"&&(K[F]=L[F]);var re=arguments.length-2;if(re===1)K.children=G;else if(1<re){for(var Bt=Array(re),Pe=0;Pe<re;Pe++)Bt[Pe]=arguments[Pe+2];K.children=Bt}if(S&&S.defaultProps)for(F in re=S.defaultProps,re)K[F]===void 0&&(K[F]=re[F]);return Me(S,me,void 0,void 0,null,K)},se.createRef=function(){return{current:null}},se.forwardRef=function(S){return{$$typeof:f,render:S}},se.isValidElement=Te,se.lazy=function(S){return{$$typeof:_,_payload:{_status:-1,_result:S},_init:j}},se.memo=function(S,L){return{$$typeof:m,type:S,compare:L===void 0?null:L}},se.startTransition=function(S){var L=$.T,G={};$.T=G;try{var F=S(),K=$.S;K!==null&&K(G,F),typeof F=="object"&&F!==null&&typeof F.then=="function"&&F.then(Ae,ee)}catch(me){ee(me)}finally{$.T=L}},se.unstable_useCacheRefresh=function(){return $.H.useCacheRefresh()},se.use=function(S){return $.H.use(S)},se.useActionState=function(S,L,G){return $.H.useActionState(S,L,G)},se.useCallback=function(S,L){return $.H.useCallback(S,L)},se.useContext=function(S){return $.H.useContext(S)},se.useDebugValue=function(){},se.useDeferredValue=function(S,L){return $.H.useDeferredValue(S,L)},se.useEffect=function(S,L,G){var F=$.H;if(typeof G=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return F.useEffect(S,L)},se.useId=function(){return $.H.useId()},se.useImperativeHandle=function(S,L,G){return $.H.useImperativeHandle(S,L,G)},se.useInsertionEffect=function(S,L){return $.H.useInsertionEffect(S,L)},se.useLayoutEffect=function(S,L){return $.H.useLayoutEffect(S,L)},se.useMemo=function(S,L){return $.H.useMemo(S,L)},se.useOptimistic=function(S,L){return $.H.useOptimistic(S,L)},se.useReducer=function(S,L,G){return $.H.useReducer(S,L,G)},se.useRef=function(S){return $.H.useRef(S)},se.useState=function(S){return $.H.useState(S)},se.useSyncExternalStore=function(S,L,G){return $.H.useSyncExternalStore(S,L,G)},se.useTransition=function(){return $.H.useTransition()},se.version="19.1.0",se}var Oy;function yp(){return Oy||(Oy=1,pf.exports=VC()),pf.exports}var M=yp();const mL=zC(M);var mf={exports:{}},ho={},gf={exports:{}},_f={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dy;function qC(){return Dy||(Dy=1,function(i){function e(k,j){var ee=k.length;k.push(j);e:for(;0<ee;){var Ae=ee-1>>>1,S=k[Ae];if(0<o(S,j))k[Ae]=j,k[ee]=S,ee=Ae;else break e}}function n(k){return k.length===0?null:k[0]}function s(k){if(k.length===0)return null;var j=k[0],ee=k.pop();if(ee!==j){k[0]=ee;e:for(var Ae=0,S=k.length,L=S>>>1;Ae<L;){var G=2*(Ae+1)-1,F=k[G],K=G+1,me=k[K];if(0>o(F,ee))K<S&&0>o(me,F)?(k[Ae]=me,k[K]=ee,Ae=K):(k[Ae]=F,k[G]=ee,Ae=G);else if(K<S&&0>o(me,ee))k[Ae]=me,k[K]=ee,Ae=K;else break e}}return j}function o(k,j){var ee=k.sortIndex-j.sortIndex;return ee!==0?ee:k.id-j.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;i.unstable_now=function(){return u.now()}}else{var d=Date,f=d.now();i.unstable_now=function(){return d.now()-f}}var p=[],m=[],_=1,y=null,E=3,I=!1,A=!1,B=!1,H=!1,z=typeof setTimeout=="function"?setTimeout:null,W=typeof clearTimeout=="function"?clearTimeout:null,q=typeof setImmediate<"u"?setImmediate:null;function ue(k){for(var j=n(m);j!==null;){if(j.callback===null)s(m);else if(j.startTime<=k)s(m),j.sortIndex=j.expirationTime,e(p,j);else break;j=n(m)}}function $(k){if(B=!1,ue(k),!A)if(n(p)!==null)A=!0,xe||(xe=!0,Et());else{var j=n(m);j!==null&&bt($,j.startTime-k)}}var xe=!1,Me=-1,He=5,Te=-1;function pt(){return H?!0:!(i.unstable_now()-Te<He)}function tn(){if(H=!1,xe){var k=i.unstable_now();Te=k;var j=!0;try{e:{A=!1,B&&(B=!1,W(Me),Me=-1),I=!0;var ee=E;try{t:{for(ue(k),y=n(p);y!==null&&!(y.expirationTime>k&&pt());){var Ae=y.callback;if(typeof Ae=="function"){y.callback=null,E=y.priorityLevel;var S=Ae(y.expirationTime<=k);if(k=i.unstable_now(),typeof S=="function"){y.callback=S,ue(k),j=!0;break t}y===n(p)&&s(p),ue(k)}else s(p);y=n(p)}if(y!==null)j=!0;else{var L=n(m);L!==null&&bt($,L.startTime-k),j=!1}}break e}finally{y=null,E=ee,I=!1}j=void 0}}finally{j?Et():xe=!1}}}var Et;if(typeof q=="function")Et=function(){q(tn)};else if(typeof MessageChannel<"u"){var fr=new MessageChannel,pr=fr.port2;fr.port1.onmessage=tn,Et=function(){pr.postMessage(null)}}else Et=function(){z(tn,0)};function bt(k,j){Me=z(function(){k(i.unstable_now())},j)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(k){k.callback=null},i.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):He=0<k?Math.floor(1e3/k):5},i.unstable_getCurrentPriorityLevel=function(){return E},i.unstable_next=function(k){switch(E){case 1:case 2:case 3:var j=3;break;default:j=E}var ee=E;E=j;try{return k()}finally{E=ee}},i.unstable_requestPaint=function(){H=!0},i.unstable_runWithPriority=function(k,j){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var ee=E;E=k;try{return j()}finally{E=ee}},i.unstable_scheduleCallback=function(k,j,ee){var Ae=i.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?Ae+ee:Ae):ee=Ae,k){case 1:var S=-1;break;case 2:S=250;break;case 5:S=1073741823;break;case 4:S=1e4;break;default:S=5e3}return S=ee+S,k={id:_++,callback:j,priorityLevel:k,startTime:ee,expirationTime:S,sortIndex:-1},ee>Ae?(k.sortIndex=ee,e(m,k),n(p)===null&&k===n(m)&&(B?(W(Me),Me=-1):B=!0,bt($,ee-Ae))):(k.sortIndex=S,e(p,k),A||I||(A=!0,xe||(xe=!0,Et()))),k},i.unstable_shouldYield=pt,i.unstable_wrapCallback=function(k){var j=E;return function(){var ee=E;E=j;try{return k.apply(this,arguments)}finally{E=ee}}}}(_f)),_f}var ky;function FC(){return ky||(ky=1,gf.exports=qC()),gf.exports}var vf={exports:{}},wt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var My;function jC(){if(My)return wt;My=1;var i=yp();function e(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)m+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var s={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(p,m,_){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:y==null?null:""+y,children:p,containerInfo:m,implementation:_}}var d=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return wt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,wt.createPortal=function(p,m){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return u(p,m,null,_)},wt.flushSync=function(p){var m=d.T,_=s.p;try{if(d.T=null,s.p=2,p)return p()}finally{d.T=m,s.p=_,s.d.f()}},wt.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,s.d.C(p,m))},wt.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},wt.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var _=m.as,y=f(_,m.crossOrigin),E=typeof m.integrity=="string"?m.integrity:void 0,I=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;_==="style"?s.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:y,integrity:E,fetchPriority:I}):_==="script"&&s.d.X(p,{crossOrigin:y,integrity:E,fetchPriority:I,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},wt.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var _=f(m.as,m.crossOrigin);s.d.M(p,{crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&s.d.M(p)},wt.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var _=m.as,y=f(_,m.crossOrigin);s.d.L(p,_,{crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},wt.preloadModule=function(p,m){if(typeof p=="string")if(m){var _=f(m.as,m.crossOrigin);s.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else s.d.m(p)},wt.requestFormReset=function(p){s.d.r(p)},wt.unstable_batchedUpdates=function(p,m){return p(m)},wt.useFormState=function(p,m,_){return d.H.useFormState(p,m,_)},wt.useFormStatus=function(){return d.H.useHostTransitionStatus()},wt.version="19.1.0",wt}var xy;function GC(){if(xy)return vf.exports;xy=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),vf.exports=jC(),vf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Py;function YC(){if(Py)return ho;Py=1;var i=FC(),e=yp(),n=GC();function s(t){var r="https://react.dev/errors/"+t;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var r=t,a=t;if(t.alternate)for(;r.return;)r=r.return;else{t=r;do r=t,(r.flags&4098)!==0&&(a=r.return),t=r.return;while(t)}return r.tag===3?a:null}function d(t){if(t.tag===13){var r=t.memoizedState;if(r===null&&(t=t.alternate,t!==null&&(r=t.memoizedState)),r!==null)return r.dehydrated}return null}function f(t){if(u(t)!==t)throw Error(s(188))}function p(t){var r=t.alternate;if(!r){if(r=u(t),r===null)throw Error(s(188));return r!==t?null:t}for(var a=t,l=r;;){var c=a.return;if(c===null)break;var h=c.alternate;if(h===null){if(l=c.return,l!==null){a=l;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===a)return f(c),t;if(h===l)return f(c),r;h=h.sibling}throw Error(s(188))}if(a.return!==l.return)a=c,l=h;else{for(var g=!1,v=c.child;v;){if(v===a){g=!0,a=c,l=h;break}if(v===l){g=!0,l=c,a=h;break}v=v.sibling}if(!g){for(v=h.child;v;){if(v===a){g=!0,a=h,l=c;break}if(v===l){g=!0,l=h,a=c;break}v=v.sibling}if(!g)throw Error(s(189))}}if(a.alternate!==l)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:r}function m(t){var r=t.tag;if(r===5||r===26||r===27||r===6)return t;for(t=t.child;t!==null;){if(r=m(t),r!==null)return r;t=t.sibling}return null}var _=Object.assign,y=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),I=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),B=Symbol.for("react.strict_mode"),H=Symbol.for("react.profiler"),z=Symbol.for("react.provider"),W=Symbol.for("react.consumer"),q=Symbol.for("react.context"),ue=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),xe=Symbol.for("react.suspense_list"),Me=Symbol.for("react.memo"),He=Symbol.for("react.lazy"),Te=Symbol.for("react.activity"),pt=Symbol.for("react.memo_cache_sentinel"),tn=Symbol.iterator;function Et(t){return t===null||typeof t!="object"?null:(t=tn&&t[tn]||t["@@iterator"],typeof t=="function"?t:null)}var fr=Symbol.for("react.client.reference");function pr(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===fr?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case A:return"Fragment";case H:return"Profiler";case B:return"StrictMode";case $:return"Suspense";case xe:return"SuspenseList";case Te:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case I:return"Portal";case q:return(t.displayName||"Context")+".Provider";case W:return(t._context.displayName||"Context")+".Consumer";case ue:var r=t.render;return t=t.displayName,t||(t=r.displayName||r.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Me:return r=t.displayName||null,r!==null?r:pr(t.type)||"Memo";case He:r=t._payload,t=t._init;try{return pr(t(r))}catch{}}return null}var bt=Array.isArray,k=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee={pending:!1,data:null,method:null,action:null},Ae=[],S=-1;function L(t){return{current:t}}function G(t){0>S||(t.current=Ae[S],Ae[S]=null,S--)}function F(t,r){S++,Ae[S]=t.current,t.current=r}var K=L(null),me=L(null),re=L(null),Bt=L(null);function Pe(t,r){switch(F(re,r),F(me,t),F(K,null),r.nodeType){case 9:case 11:t=(t=r.documentElement)&&(t=t.namespaceURI)?ty(t):0;break;default:if(t=r.tagName,r=r.namespaceURI)r=ty(r),t=ny(r,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}G(K),F(K,t)}function bi(){G(K),G(me),G(re)}function $c(t){t.memoizedState!==null&&F(Bt,t);var r=K.current,a=ny(r,t.type);r!==a&&(F(me,t),F(K,a))}function bl(t){me.current===t&&(G(K),G(me)),Bt.current===t&&(G(Bt),so._currentValue=ee)}var Zc=Object.prototype.hasOwnProperty,Jc=i.unstable_scheduleCallback,ed=i.unstable_cancelCallback,gT=i.unstable_shouldYield,_T=i.unstable_requestPaint,Nn=i.unstable_now,vT=i.unstable_getCurrentPriorityLevel,Pm=i.unstable_ImmediatePriority,Lm=i.unstable_UserBlockingPriority,Sl=i.unstable_NormalPriority,yT=i.unstable_LowPriority,Um=i.unstable_IdlePriority,ET=i.log,bT=i.unstable_setDisableYieldValue,fa=null,Vt=null;function Si(t){if(typeof ET=="function"&&bT(t),Vt&&typeof Vt.setStrictMode=="function")try{Vt.setStrictMode(fa,t)}catch{}}var qt=Math.clz32?Math.clz32:wT,ST=Math.log,TT=Math.LN2;function wT(t){return t>>>=0,t===0?32:31-(ST(t)/TT|0)|0}var Tl=256,wl=4194304;function mr(t){var r=t&42;if(r!==0)return r;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Cl(t,r,a){var l=t.pendingLanes;if(l===0)return 0;var c=0,h=t.suspendedLanes,g=t.pingedLanes;t=t.warmLanes;var v=l&134217727;return v!==0?(l=v&~h,l!==0?c=mr(l):(g&=v,g!==0?c=mr(g):a||(a=v&~t,a!==0&&(c=mr(a))))):(v=l&~h,v!==0?c=mr(v):g!==0?c=mr(g):a||(a=l&~t,a!==0&&(c=mr(a)))),c===0?0:r!==0&&r!==c&&(r&h)===0&&(h=c&-c,a=r&-r,h>=a||h===32&&(a&4194048)!==0)?r:c}function pa(t,r){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&r)===0}function CT(t,r){switch(t){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zm(){var t=Tl;return Tl<<=1,(Tl&4194048)===0&&(Tl=256),t}function Hm(){var t=wl;return wl<<=1,(wl&62914560)===0&&(wl=4194304),t}function td(t){for(var r=[],a=0;31>a;a++)r.push(t);return r}function ma(t,r){t.pendingLanes|=r,r!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function RT(t,r,a,l,c,h){var g=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var v=t.entanglements,b=t.expirationTimes,R=t.hiddenUpdates;for(a=g&~a;0<a;){var D=31-qt(a),P=1<<D;v[D]=0,b[D]=-1;var N=R[D];if(N!==null)for(R[D]=null,D=0;D<N.length;D++){var O=N[D];O!==null&&(O.lane&=-536870913)}a&=~P}l!==0&&Bm(t,l,0),h!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=h&~(g&~r))}function Bm(t,r,a){t.pendingLanes|=r,t.suspendedLanes&=~r;var l=31-qt(r);t.entangledLanes|=r,t.entanglements[l]=t.entanglements[l]|1073741824|a&4194090}function Vm(t,r){var a=t.entangledLanes|=r;for(t=t.entanglements;a;){var l=31-qt(a),c=1<<l;c&r|t[l]&r&&(t[l]|=r),a&=~c}}function nd(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function id(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function qm(){var t=j.p;return t!==0?t:(t=window.event,t===void 0?32:by(t.type))}function AT(t,r){var a=j.p;try{return j.p=t,r()}finally{j.p=a}}var Ti=Math.random().toString(36).slice(2),St="__reactFiber$"+Ti,It="__reactProps$"+Ti,Jr="__reactContainer$"+Ti,rd="__reactEvents$"+Ti,IT="__reactListeners$"+Ti,NT="__reactHandles$"+Ti,Fm="__reactResources$"+Ti,ga="__reactMarker$"+Ti;function sd(t){delete t[St],delete t[It],delete t[rd],delete t[IT],delete t[NT]}function es(t){var r=t[St];if(r)return r;for(var a=t.parentNode;a;){if(r=a[Jr]||a[St]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(t=ay(t);t!==null;){if(a=t[St])return a;t=ay(t)}return r}t=a,a=t.parentNode}return null}function ts(t){if(t=t[St]||t[Jr]){var r=t.tag;if(r===5||r===6||r===13||r===26||r===27||r===3)return t}return null}function _a(t){var r=t.tag;if(r===5||r===26||r===27||r===6)return t.stateNode;throw Error(s(33))}function ns(t){var r=t[Fm];return r||(r=t[Fm]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function rt(t){t[ga]=!0}var jm=new Set,Gm={};function gr(t,r){is(t,r),is(t+"Capture",r)}function is(t,r){for(Gm[t]=r,t=0;t<r.length;t++)jm.add(r[t])}var OT=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ym={},Wm={};function DT(t){return Zc.call(Wm,t)?!0:Zc.call(Ym,t)?!1:OT.test(t)?Wm[t]=!0:(Ym[t]=!0,!1)}function Rl(t,r,a){if(DT(r))if(a===null)t.removeAttribute(r);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(r);return;case"boolean":var l=r.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(r);return}}t.setAttribute(r,""+a)}}function Al(t,r,a){if(a===null)t.removeAttribute(r);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(r);return}t.setAttribute(r,""+a)}}function Yn(t,r,a,l){if(l===null)t.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(r,a,""+l)}}var ad,Qm;function rs(t){if(ad===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);ad=r&&r[1]||"",Qm=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ad+t+Qm}var od=!1;function ld(t,r){if(!t||od)return"";od=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(r){var P=function(){throw Error()};if(Object.defineProperty(P.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(P,[])}catch(O){var N=O}Reflect.construct(t,[],P)}else{try{P.call()}catch(O){N=O}t.call(P.prototype)}}else{try{throw Error()}catch(O){N=O}(P=t())&&typeof P.catch=="function"&&P.catch(function(){})}}catch(O){if(O&&N&&typeof O.stack=="string")return[O.stack,N.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=l.DetermineComponentFrameRoot(),g=h[0],v=h[1];if(g&&v){var b=g.split(`
`),R=v.split(`
`);for(c=l=0;l<b.length&&!b[l].includes("DetermineComponentFrameRoot");)l++;for(;c<R.length&&!R[c].includes("DetermineComponentFrameRoot");)c++;if(l===b.length||c===R.length)for(l=b.length-1,c=R.length-1;1<=l&&0<=c&&b[l]!==R[c];)c--;for(;1<=l&&0<=c;l--,c--)if(b[l]!==R[c]){if(l!==1||c!==1)do if(l--,c--,0>c||b[l]!==R[c]){var D=`
`+b[l].replace(" at new "," at ");return t.displayName&&D.includes("<anonymous>")&&(D=D.replace("<anonymous>",t.displayName)),D}while(1<=l&&0<=c);break}}}finally{od=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?rs(a):""}function kT(t){switch(t.tag){case 26:case 27:case 5:return rs(t.type);case 16:return rs("Lazy");case 13:return rs("Suspense");case 19:return rs("SuspenseList");case 0:case 15:return ld(t.type,!1);case 11:return ld(t.type.render,!1);case 1:return ld(t.type,!0);case 31:return rs("Activity");default:return""}}function Km(t){try{var r="";do r+=kT(t),t=t.return;while(t);return r}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function nn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Xm(t){var r=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function MT(t){var r=Xm(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,r),l=""+t[r];if(!t.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,h=a.set;return Object.defineProperty(t,r,{configurable:!0,get:function(){return c.call(this)},set:function(g){l=""+g,h.call(this,g)}}),Object.defineProperty(t,r,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(g){l=""+g},stopTracking:function(){t._valueTracker=null,delete t[r]}}}}function Il(t){t._valueTracker||(t._valueTracker=MT(t))}function $m(t){if(!t)return!1;var r=t._valueTracker;if(!r)return!0;var a=r.getValue(),l="";return t&&(l=Xm(t)?t.checked?"true":"false":t.value),t=l,t!==a?(r.setValue(t),!0):!1}function Nl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var xT=/[\n"\\]/g;function rn(t){return t.replace(xT,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function ud(t,r,a,l,c,h,g,v){t.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?t.type=g:t.removeAttribute("type"),r!=null?g==="number"?(r===0&&t.value===""||t.value!=r)&&(t.value=""+nn(r)):t.value!==""+nn(r)&&(t.value=""+nn(r)):g!=="submit"&&g!=="reset"||t.removeAttribute("value"),r!=null?cd(t,g,nn(r)):a!=null?cd(t,g,nn(a)):l!=null&&t.removeAttribute("value"),c==null&&h!=null&&(t.defaultChecked=!!h),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?t.name=""+nn(v):t.removeAttribute("name")}function Zm(t,r,a,l,c,h,g,v){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(t.type=h),r!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||r!=null))return;a=a!=null?""+nn(a):"",r=r!=null?""+nn(r):a,v||r===t.value||(t.value=r),t.defaultValue=r}l=l??c,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=v?t.checked:!!l,t.defaultChecked=!!l,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(t.name=g)}function cd(t,r,a){r==="number"&&Nl(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function ss(t,r,a,l){if(t=t.options,r){r={};for(var c=0;c<a.length;c++)r["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=r.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&l&&(t[a].defaultSelected=!0)}else{for(a=""+nn(a),r=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,l&&(t[c].defaultSelected=!0);return}r!==null||t[c].disabled||(r=t[c])}r!==null&&(r.selected=!0)}}function Jm(t,r,a){if(r!=null&&(r=""+nn(r),r!==t.value&&(t.value=r),a==null)){t.defaultValue!==r&&(t.defaultValue=r);return}t.defaultValue=a!=null?""+nn(a):""}function eg(t,r,a,l){if(r==null){if(l!=null){if(a!=null)throw Error(s(92));if(bt(l)){if(1<l.length)throw Error(s(93));l=l[0]}a=l}a==null&&(a=""),r=a}a=nn(r),t.defaultValue=a,l=t.textContent,l===a&&l!==""&&l!==null&&(t.value=l)}function as(t,r){if(r){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=r;return}}t.textContent=r}var PT=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function tg(t,r,a){var l=r.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="":l?t.setProperty(r,a):typeof a!="number"||a===0||PT.has(r)?r==="float"?t.cssFloat=a:t[r]=(""+a).trim():t[r]=a+"px"}function ng(t,r,a){if(r!=null&&typeof r!="object")throw Error(s(62));if(t=t.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||r!=null&&r.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var c in r)l=r[c],r.hasOwnProperty(c)&&a[c]!==l&&tg(t,c,l)}else for(var h in r)r.hasOwnProperty(h)&&tg(t,h,r[h])}function dd(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var LT=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),UT=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ol(t){return UT.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var hd=null;function fd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var os=null,ls=null;function ig(t){var r=ts(t);if(r&&(t=r.stateNode)){var a=t[It]||null;e:switch(t=r.stateNode,r.type){case"input":if(ud(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),r=a.name,a.type==="radio"&&r!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+rn(""+r)+'"][type="radio"]'),r=0;r<a.length;r++){var l=a[r];if(l!==t&&l.form===t.form){var c=l[It]||null;if(!c)throw Error(s(90));ud(l,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(r=0;r<a.length;r++)l=a[r],l.form===t.form&&$m(l)}break e;case"textarea":Jm(t,a.value,a.defaultValue);break e;case"select":r=a.value,r!=null&&ss(t,!!a.multiple,r,!1)}}}var pd=!1;function rg(t,r,a){if(pd)return t(r,a);pd=!0;try{var l=t(r);return l}finally{if(pd=!1,(os!==null||ls!==null)&&(mu(),os&&(r=os,t=ls,ls=os=null,ig(r),t)))for(r=0;r<t.length;r++)ig(t[r])}}function va(t,r){var a=t.stateNode;if(a===null)return null;var l=a[It]||null;if(l===null)return null;a=l[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,r,typeof a));return a}var Wn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),md=!1;if(Wn)try{var ya={};Object.defineProperty(ya,"passive",{get:function(){md=!0}}),window.addEventListener("test",ya,ya),window.removeEventListener("test",ya,ya)}catch{md=!1}var wi=null,gd=null,Dl=null;function sg(){if(Dl)return Dl;var t,r=gd,a=r.length,l,c="value"in wi?wi.value:wi.textContent,h=c.length;for(t=0;t<a&&r[t]===c[t];t++);var g=a-t;for(l=1;l<=g&&r[a-l]===c[h-l];l++);return Dl=c.slice(t,1<l?1-l:void 0)}function kl(t){var r=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&r===13&&(t=13)):t=r,t===10&&(t=13),32<=t||t===13?t:0}function Ml(){return!0}function ag(){return!1}function Nt(t){function r(a,l,c,h,g){this._reactName=a,this._targetInst=c,this.type=l,this.nativeEvent=h,this.target=g,this.currentTarget=null;for(var v in t)t.hasOwnProperty(v)&&(a=t[v],this[v]=a?a(h):h[v]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Ml:ag,this.isPropagationStopped=ag,this}return _(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ml)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ml)},persist:function(){},isPersistent:Ml}),r}var _r={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xl=Nt(_r),Ea=_({},_r,{view:0,detail:0}),zT=Nt(Ea),_d,vd,ba,Pl=_({},Ea,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ed,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ba&&(ba&&t.type==="mousemove"?(_d=t.screenX-ba.screenX,vd=t.screenY-ba.screenY):vd=_d=0,ba=t),_d)},movementY:function(t){return"movementY"in t?t.movementY:vd}}),og=Nt(Pl),HT=_({},Pl,{dataTransfer:0}),BT=Nt(HT),VT=_({},Ea,{relatedTarget:0}),yd=Nt(VT),qT=_({},_r,{animationName:0,elapsedTime:0,pseudoElement:0}),FT=Nt(qT),jT=_({},_r,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),GT=Nt(jT),YT=_({},_r,{data:0}),lg=Nt(YT),WT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},QT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},KT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function XT(t){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(t):(t=KT[t])?!!r[t]:!1}function Ed(){return XT}var $T=_({},Ea,{key:function(t){if(t.key){var r=WT[t.key]||t.key;if(r!=="Unidentified")return r}return t.type==="keypress"?(t=kl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?QT[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ed,charCode:function(t){return t.type==="keypress"?kl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?kl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ZT=Nt($T),JT=_({},Pl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ug=Nt(JT),ew=_({},Ea,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ed}),tw=Nt(ew),nw=_({},_r,{propertyName:0,elapsedTime:0,pseudoElement:0}),iw=Nt(nw),rw=_({},Pl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),sw=Nt(rw),aw=_({},_r,{newState:0,oldState:0}),ow=Nt(aw),lw=[9,13,27,32],bd=Wn&&"CompositionEvent"in window,Sa=null;Wn&&"documentMode"in document&&(Sa=document.documentMode);var uw=Wn&&"TextEvent"in window&&!Sa,cg=Wn&&(!bd||Sa&&8<Sa&&11>=Sa),dg=" ",hg=!1;function fg(t,r){switch(t){case"keyup":return lw.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var us=!1;function cw(t,r){switch(t){case"compositionend":return pg(r);case"keypress":return r.which!==32?null:(hg=!0,dg);case"textInput":return t=r.data,t===dg&&hg?null:t;default:return null}}function dw(t,r){if(us)return t==="compositionend"||!bd&&fg(t,r)?(t=sg(),Dl=gd=wi=null,us=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return cg&&r.locale!=="ko"?null:r.data;default:return null}}var hw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mg(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r==="input"?!!hw[t.type]:r==="textarea"}function gg(t,r,a,l){os?ls?ls.push(l):ls=[l]:os=l,r=bu(r,"onChange"),0<r.length&&(a=new xl("onChange","change",null,a,l),t.push({event:a,listeners:r}))}var Ta=null,wa=null;function fw(t){Xv(t,0)}function Ll(t){var r=_a(t);if($m(r))return t}function _g(t,r){if(t==="change")return r}var vg=!1;if(Wn){var Sd;if(Wn){var Td="oninput"in document;if(!Td){var yg=document.createElement("div");yg.setAttribute("oninput","return;"),Td=typeof yg.oninput=="function"}Sd=Td}else Sd=!1;vg=Sd&&(!document.documentMode||9<document.documentMode)}function Eg(){Ta&&(Ta.detachEvent("onpropertychange",bg),wa=Ta=null)}function bg(t){if(t.propertyName==="value"&&Ll(wa)){var r=[];gg(r,wa,t,fd(t)),rg(fw,r)}}function pw(t,r,a){t==="focusin"?(Eg(),Ta=r,wa=a,Ta.attachEvent("onpropertychange",bg)):t==="focusout"&&Eg()}function mw(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ll(wa)}function gw(t,r){if(t==="click")return Ll(r)}function _w(t,r){if(t==="input"||t==="change")return Ll(r)}function vw(t,r){return t===r&&(t!==0||1/t===1/r)||t!==t&&r!==r}var Ft=typeof Object.is=="function"?Object.is:vw;function Ca(t,r){if(Ft(t,r))return!0;if(typeof t!="object"||t===null||typeof r!="object"||r===null)return!1;var a=Object.keys(t),l=Object.keys(r);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var c=a[l];if(!Zc.call(r,c)||!Ft(t[c],r[c]))return!1}return!0}function Sg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Tg(t,r){var a=Sg(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=r&&l>=r)return{node:a,offset:r-t};t=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Sg(a)}}function wg(t,r){return t&&r?t===r?!0:t&&t.nodeType===3?!1:r&&r.nodeType===3?wg(t,r.parentNode):"contains"in t?t.contains(r):t.compareDocumentPosition?!!(t.compareDocumentPosition(r)&16):!1:!1}function Cg(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var r=Nl(t.document);r instanceof t.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)t=r.contentWindow;else break;r=Nl(t.document)}return r}function wd(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r&&(r==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||r==="textarea"||t.contentEditable==="true")}var yw=Wn&&"documentMode"in document&&11>=document.documentMode,cs=null,Cd=null,Ra=null,Rd=!1;function Rg(t,r,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Rd||cs==null||cs!==Nl(l)||(l=cs,"selectionStart"in l&&wd(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Ra&&Ca(Ra,l)||(Ra=l,l=bu(Cd,"onSelect"),0<l.length&&(r=new xl("onSelect","select",null,r,a),t.push({event:r,listeners:l}),r.target=cs)))}function vr(t,r){var a={};return a[t.toLowerCase()]=r.toLowerCase(),a["Webkit"+t]="webkit"+r,a["Moz"+t]="moz"+r,a}var ds={animationend:vr("Animation","AnimationEnd"),animationiteration:vr("Animation","AnimationIteration"),animationstart:vr("Animation","AnimationStart"),transitionrun:vr("Transition","TransitionRun"),transitionstart:vr("Transition","TransitionStart"),transitioncancel:vr("Transition","TransitionCancel"),transitionend:vr("Transition","TransitionEnd")},Ad={},Ag={};Wn&&(Ag=document.createElement("div").style,"AnimationEvent"in window||(delete ds.animationend.animation,delete ds.animationiteration.animation,delete ds.animationstart.animation),"TransitionEvent"in window||delete ds.transitionend.transition);function yr(t){if(Ad[t])return Ad[t];if(!ds[t])return t;var r=ds[t],a;for(a in r)if(r.hasOwnProperty(a)&&a in Ag)return Ad[t]=r[a];return t}var Ig=yr("animationend"),Ng=yr("animationiteration"),Og=yr("animationstart"),Ew=yr("transitionrun"),bw=yr("transitionstart"),Sw=yr("transitioncancel"),Dg=yr("transitionend"),kg=new Map,Id="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Id.push("scrollEnd");function yn(t,r){kg.set(t,r),gr(r,[t])}var Mg=new WeakMap;function sn(t,r){if(typeof t=="object"&&t!==null){var a=Mg.get(t);return a!==void 0?a:(r={value:t,source:r,stack:Km(r)},Mg.set(t,r),r)}return{value:t,source:r,stack:Km(r)}}var an=[],hs=0,Nd=0;function Ul(){for(var t=hs,r=Nd=hs=0;r<t;){var a=an[r];an[r++]=null;var l=an[r];an[r++]=null;var c=an[r];an[r++]=null;var h=an[r];if(an[r++]=null,l!==null&&c!==null){var g=l.pending;g===null?c.next=c:(c.next=g.next,g.next=c),l.pending=c}h!==0&&xg(a,c,h)}}function zl(t,r,a,l){an[hs++]=t,an[hs++]=r,an[hs++]=a,an[hs++]=l,Nd|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function Od(t,r,a,l){return zl(t,r,a,l),Hl(t)}function fs(t,r){return zl(t,null,null,r),Hl(t)}function xg(t,r,a){t.lanes|=a;var l=t.alternate;l!==null&&(l.lanes|=a);for(var c=!1,h=t.return;h!==null;)h.childLanes|=a,l=h.alternate,l!==null&&(l.childLanes|=a),h.tag===22&&(t=h.stateNode,t===null||t._visibility&1||(c=!0)),t=h,h=h.return;return t.tag===3?(h=t.stateNode,c&&r!==null&&(c=31-qt(a),t=h.hiddenUpdates,l=t[c],l===null?t[c]=[r]:l.push(r),r.lane=a|536870912),h):null}function Hl(t){if(50<$a)throw $a=0,Lh=null,Error(s(185));for(var r=t.return;r!==null;)t=r,r=t.return;return t.tag===3?t.stateNode:null}var ps={};function Tw(t,r,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jt(t,r,a,l){return new Tw(t,r,a,l)}function Dd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Qn(t,r){var a=t.alternate;return a===null?(a=jt(t.tag,r,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=r,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,r=t.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Pg(t,r){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=r,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,r=a.dependencies,t.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),t}function Bl(t,r,a,l,c,h){var g=0;if(l=t,typeof t=="function")Dd(t)&&(g=1);else if(typeof t=="string")g=CC(t,a,K.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case Te:return t=jt(31,a,r,c),t.elementType=Te,t.lanes=h,t;case A:return Er(a.children,c,h,r);case B:g=8,c|=24;break;case H:return t=jt(12,a,r,c|2),t.elementType=H,t.lanes=h,t;case $:return t=jt(13,a,r,c),t.elementType=$,t.lanes=h,t;case xe:return t=jt(19,a,r,c),t.elementType=xe,t.lanes=h,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case z:case q:g=10;break e;case W:g=9;break e;case ue:g=11;break e;case Me:g=14;break e;case He:g=16,l=null;break e}g=29,a=Error(s(130,t===null?"null":typeof t,"")),l=null}return r=jt(g,a,r,c),r.elementType=t,r.type=l,r.lanes=h,r}function Er(t,r,a,l){return t=jt(7,t,l,r),t.lanes=a,t}function kd(t,r,a){return t=jt(6,t,null,r),t.lanes=a,t}function Md(t,r,a){return r=jt(4,t.children!==null?t.children:[],t.key,r),r.lanes=a,r.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},r}var ms=[],gs=0,Vl=null,ql=0,on=[],ln=0,br=null,Kn=1,Xn="";function Sr(t,r){ms[gs++]=ql,ms[gs++]=Vl,Vl=t,ql=r}function Lg(t,r,a){on[ln++]=Kn,on[ln++]=Xn,on[ln++]=br,br=t;var l=Kn;t=Xn;var c=32-qt(l)-1;l&=~(1<<c),a+=1;var h=32-qt(r)+c;if(30<h){var g=c-c%5;h=(l&(1<<g)-1).toString(32),l>>=g,c-=g,Kn=1<<32-qt(r)+c|a<<c|l,Xn=h+t}else Kn=1<<h|a<<c|l,Xn=t}function xd(t){t.return!==null&&(Sr(t,1),Lg(t,1,0))}function Pd(t){for(;t===Vl;)Vl=ms[--gs],ms[gs]=null,ql=ms[--gs],ms[gs]=null;for(;t===br;)br=on[--ln],on[ln]=null,Xn=on[--ln],on[ln]=null,Kn=on[--ln],on[ln]=null}var Rt=null,je=null,ve=!1,Tr=null,On=!1,Ld=Error(s(519));function wr(t){var r=Error(s(418,""));throw Na(sn(r,t)),Ld}function Ug(t){var r=t.stateNode,a=t.type,l=t.memoizedProps;switch(r[St]=t,r[It]=l,a){case"dialog":fe("cancel",r),fe("close",r);break;case"iframe":case"object":case"embed":fe("load",r);break;case"video":case"audio":for(a=0;a<Ja.length;a++)fe(Ja[a],r);break;case"source":fe("error",r);break;case"img":case"image":case"link":fe("error",r),fe("load",r);break;case"details":fe("toggle",r);break;case"input":fe("invalid",r),Zm(r,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),Il(r);break;case"select":fe("invalid",r);break;case"textarea":fe("invalid",r),eg(r,l.value,l.defaultValue,l.children),Il(r)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||r.textContent===""+a||l.suppressHydrationWarning===!0||ey(r.textContent,a)?(l.popover!=null&&(fe("beforetoggle",r),fe("toggle",r)),l.onScroll!=null&&fe("scroll",r),l.onScrollEnd!=null&&fe("scrollend",r),l.onClick!=null&&(r.onclick=Su),r=!0):r=!1,r||wr(t)}function zg(t){for(Rt=t.return;Rt;)switch(Rt.tag){case 5:case 13:On=!1;return;case 27:case 3:On=!0;return;default:Rt=Rt.return}}function Aa(t){if(t!==Rt)return!1;if(!ve)return zg(t),ve=!0,!1;var r=t.tag,a;if((a=r!==3&&r!==27)&&((a=r===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Zh(t.type,t.memoizedProps)),a=!a),a&&je&&wr(t),zg(t),r===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));e:{for(t=t.nextSibling,r=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(r===0){je=bn(t.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++;t=t.nextSibling}je=null}}else r===27?(r=je,Bi(t.type)?(t=nf,nf=null,je=t):je=r):je=Rt?bn(t.stateNode.nextSibling):null;return!0}function Ia(){je=Rt=null,ve=!1}function Hg(){var t=Tr;return t!==null&&(kt===null?kt=t:kt.push.apply(kt,t),Tr=null),t}function Na(t){Tr===null?Tr=[t]:Tr.push(t)}var Ud=L(null),Cr=null,$n=null;function Ci(t,r,a){F(Ud,r._currentValue),r._currentValue=a}function Zn(t){t._currentValue=Ud.current,G(Ud)}function zd(t,r,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&r)!==r?(t.childLanes|=r,l!==null&&(l.childLanes|=r)):l!==null&&(l.childLanes&r)!==r&&(l.childLanes|=r),t===a)break;t=t.return}}function Hd(t,r,a,l){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var h=c.dependencies;if(h!==null){var g=c.child;h=h.firstContext;e:for(;h!==null;){var v=h;h=c;for(var b=0;b<r.length;b++)if(v.context===r[b]){h.lanes|=a,v=h.alternate,v!==null&&(v.lanes|=a),zd(h.return,a,t),l||(g=null);break e}h=v.next}}else if(c.tag===18){if(g=c.return,g===null)throw Error(s(341));g.lanes|=a,h=g.alternate,h!==null&&(h.lanes|=a),zd(g,a,t),g=null}else g=c.child;if(g!==null)g.return=c;else for(g=c;g!==null;){if(g===t){g=null;break}if(c=g.sibling,c!==null){c.return=g.return,g=c;break}g=g.return}c=g}}function Oa(t,r,a,l){t=null;for(var c=r,h=!1;c!==null;){if(!h){if((c.flags&524288)!==0)h=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var g=c.alternate;if(g===null)throw Error(s(387));if(g=g.memoizedProps,g!==null){var v=c.type;Ft(c.pendingProps.value,g.value)||(t!==null?t.push(v):t=[v])}}else if(c===Bt.current){if(g=c.alternate,g===null)throw Error(s(387));g.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(so):t=[so])}c=c.return}t!==null&&Hd(r,t,a,l),r.flags|=262144}function Fl(t){for(t=t.firstContext;t!==null;){if(!Ft(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Rr(t){Cr=t,$n=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Tt(t){return Bg(Cr,t)}function jl(t,r){return Cr===null&&Rr(t),Bg(t,r)}function Bg(t,r){var a=r._currentValue;if(r={context:r,memoizedValue:a,next:null},$n===null){if(t===null)throw Error(s(308));$n=r,t.dependencies={lanes:0,firstContext:r},t.flags|=524288}else $n=$n.next=r;return a}var ww=typeof AbortController<"u"?AbortController:function(){var t=[],r=this.signal={aborted:!1,addEventListener:function(a,l){t.push(l)}};this.abort=function(){r.aborted=!0,t.forEach(function(a){return a()})}},Cw=i.unstable_scheduleCallback,Rw=i.unstable_NormalPriority,Je={$$typeof:q,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Bd(){return{controller:new ww,data:new Map,refCount:0}}function Da(t){t.refCount--,t.refCount===0&&Cw(Rw,function(){t.controller.abort()})}var ka=null,Vd=0,_s=0,vs=null;function Aw(t,r){if(ka===null){var a=ka=[];Vd=0,_s=Fh(),vs={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Vd++,r.then(Vg,Vg),r}function Vg(){if(--Vd===0&&ka!==null){vs!==null&&(vs.status="fulfilled");var t=ka;ka=null,_s=0,vs=null;for(var r=0;r<t.length;r++)(0,t[r])()}}function Iw(t,r){var a=[],l={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){l.status="fulfilled",l.value=r;for(var c=0;c<a.length;c++)(0,a[c])(r)},function(c){for(l.status="rejected",l.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),l}var qg=k.S;k.S=function(t,r){typeof r=="object"&&r!==null&&typeof r.then=="function"&&Aw(t,r),qg!==null&&qg(t,r)};var Ar=L(null);function qd(){var t=Ar.current;return t!==null?t:Oe.pooledCache}function Gl(t,r){r===null?F(Ar,Ar.current):F(Ar,r.pool)}function Fg(){var t=qd();return t===null?null:{parent:Je._currentValue,pool:t}}var Ma=Error(s(460)),jg=Error(s(474)),Yl=Error(s(542)),Fd={then:function(){}};function Gg(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Wl(){}function Yg(t,r,a){switch(a=t[a],a===void 0?t.push(r):a!==r&&(r.then(Wl,Wl),r=a),r.status){case"fulfilled":return r.value;case"rejected":throw t=r.reason,Qg(t),t;default:if(typeof r.status=="string")r.then(Wl,Wl);else{if(t=Oe,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=r,t.status="pending",t.then(function(l){if(r.status==="pending"){var c=r;c.status="fulfilled",c.value=l}},function(l){if(r.status==="pending"){var c=r;c.status="rejected",c.reason=l}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw t=r.reason,Qg(t),t}throw xa=r,Ma}}var xa=null;function Wg(){if(xa===null)throw Error(s(459));var t=xa;return xa=null,t}function Qg(t){if(t===Ma||t===Yl)throw Error(s(483))}var Ri=!1;function jd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Gd(t,r){t=t.updateQueue,r.updateQueue===t&&(r.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ai(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ii(t,r,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Ee&2)!==0){var c=l.pending;return c===null?r.next=r:(r.next=c.next,c.next=r),l.pending=r,r=Hl(t),xg(t,null,a),r}return zl(t,l,r,a),Hl(t)}function Pa(t,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194048)!==0)){var l=r.lanes;l&=t.pendingLanes,a|=l,r.lanes=a,Vm(t,a)}}function Yd(t,r){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var c=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?c=h=g:h=h.next=g,a=a.next}while(a!==null);h===null?c=h=r:h=h.next=r}else c=h=r;a={baseState:l.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:l.shared,callbacks:l.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=r:t.next=r,a.lastBaseUpdate=r}var Wd=!1;function La(){if(Wd){var t=vs;if(t!==null)throw t}}function Ua(t,r,a,l){Wd=!1;var c=t.updateQueue;Ri=!1;var h=c.firstBaseUpdate,g=c.lastBaseUpdate,v=c.shared.pending;if(v!==null){c.shared.pending=null;var b=v,R=b.next;b.next=null,g===null?h=R:g.next=R,g=b;var D=t.alternate;D!==null&&(D=D.updateQueue,v=D.lastBaseUpdate,v!==g&&(v===null?D.firstBaseUpdate=R:v.next=R,D.lastBaseUpdate=b))}if(h!==null){var P=c.baseState;g=0,D=R=b=null,v=h;do{var N=v.lane&-536870913,O=N!==v.lane;if(O?(pe&N)===N:(l&N)===N){N!==0&&N===_s&&(Wd=!0),D!==null&&(D=D.next={lane:0,tag:v.tag,payload:v.payload,callback:null,next:null});e:{var ne=t,X=v;N=r;var Re=a;switch(X.tag){case 1:if(ne=X.payload,typeof ne=="function"){P=ne.call(Re,P,N);break e}P=ne;break e;case 3:ne.flags=ne.flags&-65537|128;case 0:if(ne=X.payload,N=typeof ne=="function"?ne.call(Re,P,N):ne,N==null)break e;P=_({},P,N);break e;case 2:Ri=!0}}N=v.callback,N!==null&&(t.flags|=64,O&&(t.flags|=8192),O=c.callbacks,O===null?c.callbacks=[N]:O.push(N))}else O={lane:N,tag:v.tag,payload:v.payload,callback:v.callback,next:null},D===null?(R=D=O,b=P):D=D.next=O,g|=N;if(v=v.next,v===null){if(v=c.shared.pending,v===null)break;O=v,v=O.next,O.next=null,c.lastBaseUpdate=O,c.shared.pending=null}}while(!0);D===null&&(b=P),c.baseState=b,c.firstBaseUpdate=R,c.lastBaseUpdate=D,h===null&&(c.shared.lanes=0),Li|=g,t.lanes=g,t.memoizedState=P}}function Kg(t,r){if(typeof t!="function")throw Error(s(191,t));t.call(r)}function Xg(t,r){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Kg(a[t],r)}var ys=L(null),Ql=L(0);function $g(t,r){t=si,F(Ql,t),F(ys,r),si=t|r.baseLanes}function Qd(){F(Ql,si),F(ys,ys.current)}function Kd(){si=Ql.current,G(ys),G(Ql)}var Ni=0,ae=null,we=null,Xe=null,Kl=!1,Es=!1,Ir=!1,Xl=0,za=0,bs=null,Nw=0;function Qe(){throw Error(s(321))}function Xd(t,r){if(r===null)return!1;for(var a=0;a<r.length&&a<t.length;a++)if(!Ft(t[a],r[a]))return!1;return!0}function $d(t,r,a,l,c,h){return Ni=h,ae=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,k.H=t===null||t.memoizedState===null?x_:P_,Ir=!1,h=a(l,c),Ir=!1,Es&&(h=Jg(r,a,l,c)),Zg(t),h}function Zg(t){k.H=nu;var r=we!==null&&we.next!==null;if(Ni=0,Xe=we=ae=null,Kl=!1,za=0,bs=null,r)throw Error(s(300));t===null||st||(t=t.dependencies,t!==null&&Fl(t)&&(st=!0))}function Jg(t,r,a,l){ae=t;var c=0;do{if(Es&&(bs=null),za=0,Es=!1,25<=c)throw Error(s(301));if(c+=1,Xe=we=null,t.updateQueue!=null){var h=t.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}k.H=Lw,h=r(a,l)}while(Es);return h}function Ow(){var t=k.H,r=t.useState()[0];return r=typeof r.then=="function"?Ha(r):r,t=t.useState()[0],(we!==null?we.memoizedState:null)!==t&&(ae.flags|=1024),r}function Zd(){var t=Xl!==0;return Xl=0,t}function Jd(t,r,a){r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~a}function eh(t){if(Kl){for(t=t.memoizedState;t!==null;){var r=t.queue;r!==null&&(r.pending=null),t=t.next}Kl=!1}Ni=0,Xe=we=ae=null,Es=!1,za=Xl=0,bs=null}function Ot(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xe===null?ae.memoizedState=Xe=t:Xe=Xe.next=t,Xe}function $e(){if(we===null){var t=ae.alternate;t=t!==null?t.memoizedState:null}else t=we.next;var r=Xe===null?ae.memoizedState:Xe.next;if(r!==null)Xe=r,we=t;else{if(t===null)throw ae.alternate===null?Error(s(467)):Error(s(310));we=t,t={memoizedState:we.memoizedState,baseState:we.baseState,baseQueue:we.baseQueue,queue:we.queue,next:null},Xe===null?ae.memoizedState=Xe=t:Xe=Xe.next=t}return Xe}function th(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ha(t){var r=za;return za+=1,bs===null&&(bs=[]),t=Yg(bs,t,r),r=ae,(Xe===null?r.memoizedState:Xe.next)===null&&(r=r.alternate,k.H=r===null||r.memoizedState===null?x_:P_),t}function $l(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Ha(t);if(t.$$typeof===q)return Tt(t)}throw Error(s(438,String(t)))}function nh(t){var r=null,a=ae.updateQueue;if(a!==null&&(r=a.memoCache),r==null){var l=ae.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(r={data:l.data.map(function(c){return c.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),a===null&&(a=th(),ae.updateQueue=a),a.memoCache=r,a=r.data[r.index],a===void 0)for(a=r.data[r.index]=Array(t),l=0;l<t;l++)a[l]=pt;return r.index++,a}function Jn(t,r){return typeof r=="function"?r(t):r}function Zl(t){var r=$e();return ih(r,we,t)}function ih(t,r,a){var l=t.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=a;var c=t.baseQueue,h=l.pending;if(h!==null){if(c!==null){var g=c.next;c.next=h.next,h.next=g}r.baseQueue=c=h,l.pending=null}if(h=t.baseState,c===null)t.memoizedState=h;else{r=c.next;var v=g=null,b=null,R=r,D=!1;do{var P=R.lane&-536870913;if(P!==R.lane?(pe&P)===P:(Ni&P)===P){var N=R.revertLane;if(N===0)b!==null&&(b=b.next={lane:0,revertLane:0,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null}),P===_s&&(D=!0);else if((Ni&N)===N){R=R.next,N===_s&&(D=!0);continue}else P={lane:0,revertLane:R.revertLane,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null},b===null?(v=b=P,g=h):b=b.next=P,ae.lanes|=N,Li|=N;P=R.action,Ir&&a(h,P),h=R.hasEagerState?R.eagerState:a(h,P)}else N={lane:P,revertLane:R.revertLane,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null},b===null?(v=b=N,g=h):b=b.next=N,ae.lanes|=P,Li|=P;R=R.next}while(R!==null&&R!==r);if(b===null?g=h:b.next=v,!Ft(h,t.memoizedState)&&(st=!0,D&&(a=vs,a!==null)))throw a;t.memoizedState=h,t.baseState=g,t.baseQueue=b,l.lastRenderedState=h}return c===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function rh(t){var r=$e(),a=r.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var l=a.dispatch,c=a.pending,h=r.memoizedState;if(c!==null){a.pending=null;var g=c=c.next;do h=t(h,g.action),g=g.next;while(g!==c);Ft(h,r.memoizedState)||(st=!0),r.memoizedState=h,r.baseQueue===null&&(r.baseState=h),a.lastRenderedState=h}return[h,l]}function e_(t,r,a){var l=ae,c=$e(),h=ve;if(h){if(a===void 0)throw Error(s(407));a=a()}else a=r();var g=!Ft((we||c).memoizedState,a);g&&(c.memoizedState=a,st=!0),c=c.queue;var v=i_.bind(null,l,c,t);if(Ba(2048,8,v,[t]),c.getSnapshot!==r||g||Xe!==null&&Xe.memoizedState.tag&1){if(l.flags|=2048,Ss(9,Jl(),n_.bind(null,l,c,a,r),null),Oe===null)throw Error(s(349));h||(Ni&124)!==0||t_(l,r,a)}return a}function t_(t,r,a){t.flags|=16384,t={getSnapshot:r,value:a},r=ae.updateQueue,r===null?(r=th(),ae.updateQueue=r,r.stores=[t]):(a=r.stores,a===null?r.stores=[t]:a.push(t))}function n_(t,r,a,l){r.value=a,r.getSnapshot=l,r_(r)&&s_(t)}function i_(t,r,a){return a(function(){r_(r)&&s_(t)})}function r_(t){var r=t.getSnapshot;t=t.value;try{var a=r();return!Ft(t,a)}catch{return!0}}function s_(t){var r=fs(t,2);r!==null&&Kt(r,t,2)}function sh(t){var r=Ot();if(typeof t=="function"){var a=t;if(t=a(),Ir){Si(!0);try{a()}finally{Si(!1)}}}return r.memoizedState=r.baseState=t,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jn,lastRenderedState:t},r}function a_(t,r,a,l){return t.baseState=a,ih(t,we,typeof l=="function"?l:Jn)}function Dw(t,r,a,l,c){if(tu(t))throw Error(s(485));if(t=r.action,t!==null){var h={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){h.listeners.push(g)}};k.T!==null?a(!0):h.isTransition=!1,l(h),a=r.pending,a===null?(h.next=r.pending=h,o_(r,h)):(h.next=a.next,r.pending=a.next=h)}}function o_(t,r){var a=r.action,l=r.payload,c=t.state;if(r.isTransition){var h=k.T,g={};k.T=g;try{var v=a(c,l),b=k.S;b!==null&&b(g,v),l_(t,r,v)}catch(R){ah(t,r,R)}finally{k.T=h}}else try{h=a(c,l),l_(t,r,h)}catch(R){ah(t,r,R)}}function l_(t,r,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){u_(t,r,l)},function(l){return ah(t,r,l)}):u_(t,r,a)}function u_(t,r,a){r.status="fulfilled",r.value=a,c_(r),t.state=a,r=t.pending,r!==null&&(a=r.next,a===r?t.pending=null:(a=a.next,r.next=a,o_(t,a)))}function ah(t,r,a){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do r.status="rejected",r.reason=a,c_(r),r=r.next;while(r!==l)}t.action=null}function c_(t){t=t.listeners;for(var r=0;r<t.length;r++)(0,t[r])()}function d_(t,r){return r}function h_(t,r){if(ve){var a=Oe.formState;if(a!==null){e:{var l=ae;if(ve){if(je){t:{for(var c=je,h=On;c.nodeType!==8;){if(!h){c=null;break t}if(c=bn(c.nextSibling),c===null){c=null;break t}}h=c.data,c=h==="F!"||h==="F"?c:null}if(c){je=bn(c.nextSibling),l=c.data==="F!";break e}}wr(l)}l=!1}l&&(r=a[0])}}return a=Ot(),a.memoizedState=a.baseState=r,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:d_,lastRenderedState:r},a.queue=l,a=D_.bind(null,ae,l),l.dispatch=a,l=sh(!1),h=dh.bind(null,ae,!1,l.queue),l=Ot(),c={state:r,dispatch:null,action:t,pending:null},l.queue=c,a=Dw.bind(null,ae,c,h,a),c.dispatch=a,l.memoizedState=t,[r,a,!1]}function f_(t){var r=$e();return p_(r,we,t)}function p_(t,r,a){if(r=ih(t,r,d_)[0],t=Zl(Jn)[0],typeof r=="object"&&r!==null&&typeof r.then=="function")try{var l=Ha(r)}catch(g){throw g===Ma?Yl:g}else l=r;r=$e();var c=r.queue,h=c.dispatch;return a!==r.memoizedState&&(ae.flags|=2048,Ss(9,Jl(),kw.bind(null,c,a),null)),[l,h,t]}function kw(t,r){t.action=r}function m_(t){var r=$e(),a=we;if(a!==null)return p_(r,a,t);$e(),r=r.memoizedState,a=$e();var l=a.queue.dispatch;return a.memoizedState=t,[r,l,!1]}function Ss(t,r,a,l){return t={tag:t,create:a,deps:l,inst:r,next:null},r=ae.updateQueue,r===null&&(r=th(),ae.updateQueue=r),a=r.lastEffect,a===null?r.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,r.lastEffect=t),t}function Jl(){return{destroy:void 0,resource:void 0}}function g_(){return $e().memoizedState}function eu(t,r,a,l){var c=Ot();l=l===void 0?null:l,ae.flags|=t,c.memoizedState=Ss(1|r,Jl(),a,l)}function Ba(t,r,a,l){var c=$e();l=l===void 0?null:l;var h=c.memoizedState.inst;we!==null&&l!==null&&Xd(l,we.memoizedState.deps)?c.memoizedState=Ss(r,h,a,l):(ae.flags|=t,c.memoizedState=Ss(1|r,h,a,l))}function __(t,r){eu(8390656,8,t,r)}function v_(t,r){Ba(2048,8,t,r)}function y_(t,r){return Ba(4,2,t,r)}function E_(t,r){return Ba(4,4,t,r)}function b_(t,r){if(typeof r=="function"){t=t();var a=r(t);return function(){typeof a=="function"?a():r(null)}}if(r!=null)return t=t(),r.current=t,function(){r.current=null}}function S_(t,r,a){a=a!=null?a.concat([t]):null,Ba(4,4,b_.bind(null,r,t),a)}function oh(){}function T_(t,r){var a=$e();r=r===void 0?null:r;var l=a.memoizedState;return r!==null&&Xd(r,l[1])?l[0]:(a.memoizedState=[t,r],t)}function w_(t,r){var a=$e();r=r===void 0?null:r;var l=a.memoizedState;if(r!==null&&Xd(r,l[1]))return l[0];if(l=t(),Ir){Si(!0);try{t()}finally{Si(!1)}}return a.memoizedState=[l,r],l}function lh(t,r,a){return a===void 0||(Ni&1073741824)!==0?t.memoizedState=r:(t.memoizedState=a,t=Av(),ae.lanes|=t,Li|=t,a)}function C_(t,r,a,l){return Ft(a,r)?a:ys.current!==null?(t=lh(t,a,l),Ft(t,r)||(st=!0),t):(Ni&42)===0?(st=!0,t.memoizedState=a):(t=Av(),ae.lanes|=t,Li|=t,r)}function R_(t,r,a,l,c){var h=j.p;j.p=h!==0&&8>h?h:8;var g=k.T,v={};k.T=v,dh(t,!1,r,a);try{var b=c(),R=k.S;if(R!==null&&R(v,b),b!==null&&typeof b=="object"&&typeof b.then=="function"){var D=Iw(b,l);Va(t,r,D,Qt(t))}else Va(t,r,l,Qt(t))}catch(P){Va(t,r,{then:function(){},status:"rejected",reason:P},Qt())}finally{j.p=h,k.T=g}}function Mw(){}function uh(t,r,a,l){if(t.tag!==5)throw Error(s(476));var c=A_(t).queue;R_(t,c,r,ee,a===null?Mw:function(){return I_(t),a(l)})}function A_(t){var r=t.memoizedState;if(r!==null)return r;r={memoizedState:ee,baseState:ee,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jn,lastRenderedState:ee},next:null};var a={};return r.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jn,lastRenderedState:a},next:null},t.memoizedState=r,t=t.alternate,t!==null&&(t.memoizedState=r),r}function I_(t){var r=A_(t).next.queue;Va(t,r,{},Qt())}function ch(){return Tt(so)}function N_(){return $e().memoizedState}function O_(){return $e().memoizedState}function xw(t){for(var r=t.return;r!==null;){switch(r.tag){case 24:case 3:var a=Qt();t=Ai(a);var l=Ii(r,t,a);l!==null&&(Kt(l,r,a),Pa(l,r,a)),r={cache:Bd()},t.payload=r;return}r=r.return}}function Pw(t,r,a){var l=Qt();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},tu(t)?k_(r,a):(a=Od(t,r,a,l),a!==null&&(Kt(a,t,l),M_(a,r,l)))}function D_(t,r,a){var l=Qt();Va(t,r,a,l)}function Va(t,r,a,l){var c={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(tu(t))k_(r,c);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=r.lastRenderedReducer,h!==null))try{var g=r.lastRenderedState,v=h(g,a);if(c.hasEagerState=!0,c.eagerState=v,Ft(v,g))return zl(t,r,c,0),Oe===null&&Ul(),!1}catch{}finally{}if(a=Od(t,r,c,l),a!==null)return Kt(a,t,l),M_(a,r,l),!0}return!1}function dh(t,r,a,l){if(l={lane:2,revertLane:Fh(),action:l,hasEagerState:!1,eagerState:null,next:null},tu(t)){if(r)throw Error(s(479))}else r=Od(t,a,l,2),r!==null&&Kt(r,t,2)}function tu(t){var r=t.alternate;return t===ae||r!==null&&r===ae}function k_(t,r){Es=Kl=!0;var a=t.pending;a===null?r.next=r:(r.next=a.next,a.next=r),t.pending=r}function M_(t,r,a){if((a&4194048)!==0){var l=r.lanes;l&=t.pendingLanes,a|=l,r.lanes=a,Vm(t,a)}}var nu={readContext:Tt,use:$l,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useLayoutEffect:Qe,useInsertionEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useSyncExternalStore:Qe,useId:Qe,useHostTransitionStatus:Qe,useFormState:Qe,useActionState:Qe,useOptimistic:Qe,useMemoCache:Qe,useCacheRefresh:Qe},x_={readContext:Tt,use:$l,useCallback:function(t,r){return Ot().memoizedState=[t,r===void 0?null:r],t},useContext:Tt,useEffect:__,useImperativeHandle:function(t,r,a){a=a!=null?a.concat([t]):null,eu(4194308,4,b_.bind(null,r,t),a)},useLayoutEffect:function(t,r){return eu(4194308,4,t,r)},useInsertionEffect:function(t,r){eu(4,2,t,r)},useMemo:function(t,r){var a=Ot();r=r===void 0?null:r;var l=t();if(Ir){Si(!0);try{t()}finally{Si(!1)}}return a.memoizedState=[l,r],l},useReducer:function(t,r,a){var l=Ot();if(a!==void 0){var c=a(r);if(Ir){Si(!0);try{a(r)}finally{Si(!1)}}}else c=r;return l.memoizedState=l.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},l.queue=t,t=t.dispatch=Pw.bind(null,ae,t),[l.memoizedState,t]},useRef:function(t){var r=Ot();return t={current:t},r.memoizedState=t},useState:function(t){t=sh(t);var r=t.queue,a=D_.bind(null,ae,r);return r.dispatch=a,[t.memoizedState,a]},useDebugValue:oh,useDeferredValue:function(t,r){var a=Ot();return lh(a,t,r)},useTransition:function(){var t=sh(!1);return t=R_.bind(null,ae,t.queue,!0,!1),Ot().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,r,a){var l=ae,c=Ot();if(ve){if(a===void 0)throw Error(s(407));a=a()}else{if(a=r(),Oe===null)throw Error(s(349));(pe&124)!==0||t_(l,r,a)}c.memoizedState=a;var h={value:a,getSnapshot:r};return c.queue=h,__(i_.bind(null,l,h,t),[t]),l.flags|=2048,Ss(9,Jl(),n_.bind(null,l,h,a,r),null),a},useId:function(){var t=Ot(),r=Oe.identifierPrefix;if(ve){var a=Xn,l=Kn;a=(l&~(1<<32-qt(l)-1)).toString(32)+a,r="«"+r+"R"+a,a=Xl++,0<a&&(r+="H"+a.toString(32)),r+="»"}else a=Nw++,r="«"+r+"r"+a.toString(32)+"»";return t.memoizedState=r},useHostTransitionStatus:ch,useFormState:h_,useActionState:h_,useOptimistic:function(t){var r=Ot();r.memoizedState=r.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=a,r=dh.bind(null,ae,!0,a),a.dispatch=r,[t,r]},useMemoCache:nh,useCacheRefresh:function(){return Ot().memoizedState=xw.bind(null,ae)}},P_={readContext:Tt,use:$l,useCallback:T_,useContext:Tt,useEffect:v_,useImperativeHandle:S_,useInsertionEffect:y_,useLayoutEffect:E_,useMemo:w_,useReducer:Zl,useRef:g_,useState:function(){return Zl(Jn)},useDebugValue:oh,useDeferredValue:function(t,r){var a=$e();return C_(a,we.memoizedState,t,r)},useTransition:function(){var t=Zl(Jn)[0],r=$e().memoizedState;return[typeof t=="boolean"?t:Ha(t),r]},useSyncExternalStore:e_,useId:N_,useHostTransitionStatus:ch,useFormState:f_,useActionState:f_,useOptimistic:function(t,r){var a=$e();return a_(a,we,t,r)},useMemoCache:nh,useCacheRefresh:O_},Lw={readContext:Tt,use:$l,useCallback:T_,useContext:Tt,useEffect:v_,useImperativeHandle:S_,useInsertionEffect:y_,useLayoutEffect:E_,useMemo:w_,useReducer:rh,useRef:g_,useState:function(){return rh(Jn)},useDebugValue:oh,useDeferredValue:function(t,r){var a=$e();return we===null?lh(a,t,r):C_(a,we.memoizedState,t,r)},useTransition:function(){var t=rh(Jn)[0],r=$e().memoizedState;return[typeof t=="boolean"?t:Ha(t),r]},useSyncExternalStore:e_,useId:N_,useHostTransitionStatus:ch,useFormState:m_,useActionState:m_,useOptimistic:function(t,r){var a=$e();return we!==null?a_(a,we,t,r):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:nh,useCacheRefresh:O_},Ts=null,qa=0;function iu(t){var r=qa;return qa+=1,Ts===null&&(Ts=[]),Yg(Ts,t,r)}function Fa(t,r){r=r.props.ref,t.ref=r!==void 0?r:null}function ru(t,r){throw r.$$typeof===y?Error(s(525)):(t=Object.prototype.toString.call(r),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":t)))}function L_(t){var r=t._init;return r(t._payload)}function U_(t){function r(w,T){if(t){var C=w.deletions;C===null?(w.deletions=[T],w.flags|=16):C.push(T)}}function a(w,T){if(!t)return null;for(;T!==null;)r(w,T),T=T.sibling;return null}function l(w){for(var T=new Map;w!==null;)w.key!==null?T.set(w.key,w):T.set(w.index,w),w=w.sibling;return T}function c(w,T){return w=Qn(w,T),w.index=0,w.sibling=null,w}function h(w,T,C){return w.index=C,t?(C=w.alternate,C!==null?(C=C.index,C<T?(w.flags|=67108866,T):C):(w.flags|=67108866,T)):(w.flags|=1048576,T)}function g(w){return t&&w.alternate===null&&(w.flags|=67108866),w}function v(w,T,C,x){return T===null||T.tag!==6?(T=kd(C,w.mode,x),T.return=w,T):(T=c(T,C),T.return=w,T)}function b(w,T,C,x){var Y=C.type;return Y===A?D(w,T,C.props.children,x,C.key):T!==null&&(T.elementType===Y||typeof Y=="object"&&Y!==null&&Y.$$typeof===He&&L_(Y)===T.type)?(T=c(T,C.props),Fa(T,C),T.return=w,T):(T=Bl(C.type,C.key,C.props,null,w.mode,x),Fa(T,C),T.return=w,T)}function R(w,T,C,x){return T===null||T.tag!==4||T.stateNode.containerInfo!==C.containerInfo||T.stateNode.implementation!==C.implementation?(T=Md(C,w.mode,x),T.return=w,T):(T=c(T,C.children||[]),T.return=w,T)}function D(w,T,C,x,Y){return T===null||T.tag!==7?(T=Er(C,w.mode,x,Y),T.return=w,T):(T=c(T,C),T.return=w,T)}function P(w,T,C){if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return T=kd(""+T,w.mode,C),T.return=w,T;if(typeof T=="object"&&T!==null){switch(T.$$typeof){case E:return C=Bl(T.type,T.key,T.props,null,w.mode,C),Fa(C,T),C.return=w,C;case I:return T=Md(T,w.mode,C),T.return=w,T;case He:var x=T._init;return T=x(T._payload),P(w,T,C)}if(bt(T)||Et(T))return T=Er(T,w.mode,C,null),T.return=w,T;if(typeof T.then=="function")return P(w,iu(T),C);if(T.$$typeof===q)return P(w,jl(w,T),C);ru(w,T)}return null}function N(w,T,C,x){var Y=T!==null?T.key:null;if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return Y!==null?null:v(w,T,""+C,x);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case E:return C.key===Y?b(w,T,C,x):null;case I:return C.key===Y?R(w,T,C,x):null;case He:return Y=C._init,C=Y(C._payload),N(w,T,C,x)}if(bt(C)||Et(C))return Y!==null?null:D(w,T,C,x,null);if(typeof C.then=="function")return N(w,T,iu(C),x);if(C.$$typeof===q)return N(w,T,jl(w,C),x);ru(w,C)}return null}function O(w,T,C,x,Y){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return w=w.get(C)||null,v(T,w,""+x,Y);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case E:return w=w.get(x.key===null?C:x.key)||null,b(T,w,x,Y);case I:return w=w.get(x.key===null?C:x.key)||null,R(T,w,x,Y);case He:var ce=x._init;return x=ce(x._payload),O(w,T,C,x,Y)}if(bt(x)||Et(x))return w=w.get(C)||null,D(T,w,x,Y,null);if(typeof x.then=="function")return O(w,T,C,iu(x),Y);if(x.$$typeof===q)return O(w,T,C,jl(T,x),Y);ru(T,x)}return null}function ne(w,T,C,x){for(var Y=null,ce=null,Q=T,Z=T=0,ot=null;Q!==null&&Z<C.length;Z++){Q.index>Z?(ot=Q,Q=null):ot=Q.sibling;var ge=N(w,Q,C[Z],x);if(ge===null){Q===null&&(Q=ot);break}t&&Q&&ge.alternate===null&&r(w,Q),T=h(ge,T,Z),ce===null?Y=ge:ce.sibling=ge,ce=ge,Q=ot}if(Z===C.length)return a(w,Q),ve&&Sr(w,Z),Y;if(Q===null){for(;Z<C.length;Z++)Q=P(w,C[Z],x),Q!==null&&(T=h(Q,T,Z),ce===null?Y=Q:ce.sibling=Q,ce=Q);return ve&&Sr(w,Z),Y}for(Q=l(Q);Z<C.length;Z++)ot=O(Q,w,Z,C[Z],x),ot!==null&&(t&&ot.alternate!==null&&Q.delete(ot.key===null?Z:ot.key),T=h(ot,T,Z),ce===null?Y=ot:ce.sibling=ot,ce=ot);return t&&Q.forEach(function(Gi){return r(w,Gi)}),ve&&Sr(w,Z),Y}function X(w,T,C,x){if(C==null)throw Error(s(151));for(var Y=null,ce=null,Q=T,Z=T=0,ot=null,ge=C.next();Q!==null&&!ge.done;Z++,ge=C.next()){Q.index>Z?(ot=Q,Q=null):ot=Q.sibling;var Gi=N(w,Q,ge.value,x);if(Gi===null){Q===null&&(Q=ot);break}t&&Q&&Gi.alternate===null&&r(w,Q),T=h(Gi,T,Z),ce===null?Y=Gi:ce.sibling=Gi,ce=Gi,Q=ot}if(ge.done)return a(w,Q),ve&&Sr(w,Z),Y;if(Q===null){for(;!ge.done;Z++,ge=C.next())ge=P(w,ge.value,x),ge!==null&&(T=h(ge,T,Z),ce===null?Y=ge:ce.sibling=ge,ce=ge);return ve&&Sr(w,Z),Y}for(Q=l(Q);!ge.done;Z++,ge=C.next())ge=O(Q,w,Z,ge.value,x),ge!==null&&(t&&ge.alternate!==null&&Q.delete(ge.key===null?Z:ge.key),T=h(ge,T,Z),ce===null?Y=ge:ce.sibling=ge,ce=ge);return t&&Q.forEach(function(UC){return r(w,UC)}),ve&&Sr(w,Z),Y}function Re(w,T,C,x){if(typeof C=="object"&&C!==null&&C.type===A&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case E:e:{for(var Y=C.key;T!==null;){if(T.key===Y){if(Y=C.type,Y===A){if(T.tag===7){a(w,T.sibling),x=c(T,C.props.children),x.return=w,w=x;break e}}else if(T.elementType===Y||typeof Y=="object"&&Y!==null&&Y.$$typeof===He&&L_(Y)===T.type){a(w,T.sibling),x=c(T,C.props),Fa(x,C),x.return=w,w=x;break e}a(w,T);break}else r(w,T);T=T.sibling}C.type===A?(x=Er(C.props.children,w.mode,x,C.key),x.return=w,w=x):(x=Bl(C.type,C.key,C.props,null,w.mode,x),Fa(x,C),x.return=w,w=x)}return g(w);case I:e:{for(Y=C.key;T!==null;){if(T.key===Y)if(T.tag===4&&T.stateNode.containerInfo===C.containerInfo&&T.stateNode.implementation===C.implementation){a(w,T.sibling),x=c(T,C.children||[]),x.return=w,w=x;break e}else{a(w,T);break}else r(w,T);T=T.sibling}x=Md(C,w.mode,x),x.return=w,w=x}return g(w);case He:return Y=C._init,C=Y(C._payload),Re(w,T,C,x)}if(bt(C))return ne(w,T,C,x);if(Et(C)){if(Y=Et(C),typeof Y!="function")throw Error(s(150));return C=Y.call(C),X(w,T,C,x)}if(typeof C.then=="function")return Re(w,T,iu(C),x);if(C.$$typeof===q)return Re(w,T,jl(w,C),x);ru(w,C)}return typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint"?(C=""+C,T!==null&&T.tag===6?(a(w,T.sibling),x=c(T,C),x.return=w,w=x):(a(w,T),x=kd(C,w.mode,x),x.return=w,w=x),g(w)):a(w,T)}return function(w,T,C,x){try{qa=0;var Y=Re(w,T,C,x);return Ts=null,Y}catch(Q){if(Q===Ma||Q===Yl)throw Q;var ce=jt(29,Q,null,w.mode);return ce.lanes=x,ce.return=w,ce}finally{}}}var ws=U_(!0),z_=U_(!1),un=L(null),Dn=null;function Oi(t){var r=t.alternate;F(et,et.current&1),F(un,t),Dn===null&&(r===null||ys.current!==null||r.memoizedState!==null)&&(Dn=t)}function H_(t){if(t.tag===22){if(F(et,et.current),F(un,t),Dn===null){var r=t.alternate;r!==null&&r.memoizedState!==null&&(Dn=t)}}else Di()}function Di(){F(et,et.current),F(un,un.current)}function ei(t){G(un),Dn===t&&(Dn=null),G(et)}var et=L(0);function su(t){for(var r=t;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||tf(a)))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}function hh(t,r,a,l){r=t.memoizedState,a=a(l,r),a=a==null?r:_({},r,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var fh={enqueueSetState:function(t,r,a){t=t._reactInternals;var l=Qt(),c=Ai(l);c.payload=r,a!=null&&(c.callback=a),r=Ii(t,c,l),r!==null&&(Kt(r,t,l),Pa(r,t,l))},enqueueReplaceState:function(t,r,a){t=t._reactInternals;var l=Qt(),c=Ai(l);c.tag=1,c.payload=r,a!=null&&(c.callback=a),r=Ii(t,c,l),r!==null&&(Kt(r,t,l),Pa(r,t,l))},enqueueForceUpdate:function(t,r){t=t._reactInternals;var a=Qt(),l=Ai(a);l.tag=2,r!=null&&(l.callback=r),r=Ii(t,l,a),r!==null&&(Kt(r,t,a),Pa(r,t,a))}};function B_(t,r,a,l,c,h,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,g):r.prototype&&r.prototype.isPureReactComponent?!Ca(a,l)||!Ca(c,h):!0}function V_(t,r,a,l){t=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,l),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,l),r.state!==t&&fh.enqueueReplaceState(r,r.state,null)}function Nr(t,r){var a=r;if("ref"in r){a={};for(var l in r)l!=="ref"&&(a[l]=r[l])}if(t=t.defaultProps){a===r&&(a=_({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}var au=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function q_(t){au(t)}function F_(t){console.error(t)}function j_(t){au(t)}function ou(t,r){try{var a=t.onUncaughtError;a(r.value,{componentStack:r.stack})}catch(l){setTimeout(function(){throw l})}}function G_(t,r,a){try{var l=t.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function ph(t,r,a){return a=Ai(a),a.tag=3,a.payload={element:null},a.callback=function(){ou(t,r)},a}function Y_(t){return t=Ai(t),t.tag=3,t}function W_(t,r,a,l){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var h=l.value;t.payload=function(){return c(h)},t.callback=function(){G_(r,a,l)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(t.callback=function(){G_(r,a,l),typeof c!="function"&&(Ui===null?Ui=new Set([this]):Ui.add(this));var v=l.stack;this.componentDidCatch(l.value,{componentStack:v!==null?v:""})})}function Uw(t,r,a,l,c){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(r=a.alternate,r!==null&&Oa(r,a,c,!0),a=un.current,a!==null){switch(a.tag){case 13:return Dn===null?zh():a.alternate===null&&Ge===0&&(Ge=3),a.flags&=-257,a.flags|=65536,a.lanes=c,l===Fd?a.flags|=16384:(r=a.updateQueue,r===null?a.updateQueue=new Set([l]):r.add(l),Bh(t,l,c)),!1;case 22:return a.flags|=65536,l===Fd?a.flags|=16384:(r=a.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=r):(a=r.retryQueue,a===null?r.retryQueue=new Set([l]):a.add(l)),Bh(t,l,c)),!1}throw Error(s(435,a.tag))}return Bh(t,l,c),zh(),!1}if(ve)return r=un.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=c,l!==Ld&&(t=Error(s(422),{cause:l}),Na(sn(t,a)))):(l!==Ld&&(r=Error(s(423),{cause:l}),Na(sn(r,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,l=sn(l,a),c=ph(t.stateNode,l,c),Yd(t,c),Ge!==4&&(Ge=2)),!1;var h=Error(s(520),{cause:l});if(h=sn(h,a),Xa===null?Xa=[h]:Xa.push(h),Ge!==4&&(Ge=2),r===null)return!0;l=sn(l,a),a=r;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=ph(a.stateNode,l,t),Yd(a,t),!1;case 1:if(r=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Ui===null||!Ui.has(h))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Y_(c),W_(c,t,a,l),Yd(a,c),!1}a=a.return}while(a!==null);return!1}var Q_=Error(s(461)),st=!1;function mt(t,r,a,l){r.child=t===null?z_(r,null,a,l):ws(r,t.child,a,l)}function K_(t,r,a,l,c){a=a.render;var h=r.ref;if("ref"in l){var g={};for(var v in l)v!=="ref"&&(g[v]=l[v])}else g=l;return Rr(r),l=$d(t,r,a,g,h,c),v=Zd(),t!==null&&!st?(Jd(t,r,c),ti(t,r,c)):(ve&&v&&xd(r),r.flags|=1,mt(t,r,l,c),r.child)}function X_(t,r,a,l,c){if(t===null){var h=a.type;return typeof h=="function"&&!Dd(h)&&h.defaultProps===void 0&&a.compare===null?(r.tag=15,r.type=h,$_(t,r,h,l,c)):(t=Bl(a.type,null,l,r,r.mode,c),t.ref=r.ref,t.return=r,r.child=t)}if(h=t.child,!Sh(t,c)){var g=h.memoizedProps;if(a=a.compare,a=a!==null?a:Ca,a(g,l)&&t.ref===r.ref)return ti(t,r,c)}return r.flags|=1,t=Qn(h,l),t.ref=r.ref,t.return=r,r.child=t}function $_(t,r,a,l,c){if(t!==null){var h=t.memoizedProps;if(Ca(h,l)&&t.ref===r.ref)if(st=!1,r.pendingProps=l=h,Sh(t,c))(t.flags&131072)!==0&&(st=!0);else return r.lanes=t.lanes,ti(t,r,c)}return mh(t,r,a,l,c)}function Z_(t,r,a){var l=r.pendingProps,c=l.children,h=t!==null?t.memoizedState:null;if(l.mode==="hidden"){if((r.flags&128)!==0){if(l=h!==null?h.baseLanes|a:a,t!==null){for(c=r.child=t.child,h=0;c!==null;)h=h|c.lanes|c.childLanes,c=c.sibling;r.childLanes=h&~l}else r.childLanes=0,r.child=null;return J_(t,r,l,a)}if((a&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},t!==null&&Gl(r,h!==null?h.cachePool:null),h!==null?$g(r,h):Qd(),H_(r);else return r.lanes=r.childLanes=536870912,J_(t,r,h!==null?h.baseLanes|a:a,a)}else h!==null?(Gl(r,h.cachePool),$g(r,h),Di(),r.memoizedState=null):(t!==null&&Gl(r,null),Qd(),Di());return mt(t,r,c,a),r.child}function J_(t,r,a,l){var c=qd();return c=c===null?null:{parent:Je._currentValue,pool:c},r.memoizedState={baseLanes:a,cachePool:c},t!==null&&Gl(r,null),Qd(),H_(r),t!==null&&Oa(t,r,l,!0),null}function lu(t,r){var a=r.ref;if(a===null)t!==null&&t.ref!==null&&(r.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(r.flags|=4194816)}}function mh(t,r,a,l,c){return Rr(r),a=$d(t,r,a,l,void 0,c),l=Zd(),t!==null&&!st?(Jd(t,r,c),ti(t,r,c)):(ve&&l&&xd(r),r.flags|=1,mt(t,r,a,c),r.child)}function ev(t,r,a,l,c,h){return Rr(r),r.updateQueue=null,a=Jg(r,l,a,c),Zg(t),l=Zd(),t!==null&&!st?(Jd(t,r,h),ti(t,r,h)):(ve&&l&&xd(r),r.flags|=1,mt(t,r,a,h),r.child)}function tv(t,r,a,l,c){if(Rr(r),r.stateNode===null){var h=ps,g=a.contextType;typeof g=="object"&&g!==null&&(h=Tt(g)),h=new a(l,h),r.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=fh,r.stateNode=h,h._reactInternals=r,h=r.stateNode,h.props=l,h.state=r.memoizedState,h.refs={},jd(r),g=a.contextType,h.context=typeof g=="object"&&g!==null?Tt(g):ps,h.state=r.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(hh(r,a,g,l),h.state=r.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(g=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),g!==h.state&&fh.enqueueReplaceState(h,h.state,null),Ua(r,l,h,c),La(),h.state=r.memoizedState),typeof h.componentDidMount=="function"&&(r.flags|=4194308),l=!0}else if(t===null){h=r.stateNode;var v=r.memoizedProps,b=Nr(a,v);h.props=b;var R=h.context,D=a.contextType;g=ps,typeof D=="object"&&D!==null&&(g=Tt(D));var P=a.getDerivedStateFromProps;D=typeof P=="function"||typeof h.getSnapshotBeforeUpdate=="function",v=r.pendingProps!==v,D||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(v||R!==g)&&V_(r,h,l,g),Ri=!1;var N=r.memoizedState;h.state=N,Ua(r,l,h,c),La(),R=r.memoizedState,v||N!==R||Ri?(typeof P=="function"&&(hh(r,a,P,l),R=r.memoizedState),(b=Ri||B_(r,a,b,l,N,R,g))?(D||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(r.flags|=4194308)):(typeof h.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=l,r.memoizedState=R),h.props=l,h.state=R,h.context=g,l=b):(typeof h.componentDidMount=="function"&&(r.flags|=4194308),l=!1)}else{h=r.stateNode,Gd(t,r),g=r.memoizedProps,D=Nr(a,g),h.props=D,P=r.pendingProps,N=h.context,R=a.contextType,b=ps,typeof R=="object"&&R!==null&&(b=Tt(R)),v=a.getDerivedStateFromProps,(R=typeof v=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(g!==P||N!==b)&&V_(r,h,l,b),Ri=!1,N=r.memoizedState,h.state=N,Ua(r,l,h,c),La();var O=r.memoizedState;g!==P||N!==O||Ri||t!==null&&t.dependencies!==null&&Fl(t.dependencies)?(typeof v=="function"&&(hh(r,a,v,l),O=r.memoizedState),(D=Ri||B_(r,a,D,l,N,O,b)||t!==null&&t.dependencies!==null&&Fl(t.dependencies))?(R||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(l,O,b),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(l,O,b)),typeof h.componentDidUpdate=="function"&&(r.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof h.componentDidUpdate!="function"||g===t.memoizedProps&&N===t.memoizedState||(r.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&N===t.memoizedState||(r.flags|=1024),r.memoizedProps=l,r.memoizedState=O),h.props=l,h.state=O,h.context=b,l=D):(typeof h.componentDidUpdate!="function"||g===t.memoizedProps&&N===t.memoizedState||(r.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&N===t.memoizedState||(r.flags|=1024),l=!1)}return h=l,lu(t,r),l=(r.flags&128)!==0,h||l?(h=r.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:h.render(),r.flags|=1,t!==null&&l?(r.child=ws(r,t.child,null,c),r.child=ws(r,null,a,c)):mt(t,r,a,c),r.memoizedState=h.state,t=r.child):t=ti(t,r,c),t}function nv(t,r,a,l){return Ia(),r.flags|=256,mt(t,r,a,l),r.child}var gh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function _h(t){return{baseLanes:t,cachePool:Fg()}}function vh(t,r,a){return t=t!==null?t.childLanes&~a:0,r&&(t|=cn),t}function iv(t,r,a){var l=r.pendingProps,c=!1,h=(r.flags&128)!==0,g;if((g=h)||(g=t!==null&&t.memoizedState===null?!1:(et.current&2)!==0),g&&(c=!0,r.flags&=-129),g=(r.flags&32)!==0,r.flags&=-33,t===null){if(ve){if(c?Oi(r):Di(),ve){var v=je,b;if(b=v){e:{for(b=v,v=On;b.nodeType!==8;){if(!v){v=null;break e}if(b=bn(b.nextSibling),b===null){v=null;break e}}v=b}v!==null?(r.memoizedState={dehydrated:v,treeContext:br!==null?{id:Kn,overflow:Xn}:null,retryLane:536870912,hydrationErrors:null},b=jt(18,null,null,0),b.stateNode=v,b.return=r,r.child=b,Rt=r,je=null,b=!0):b=!1}b||wr(r)}if(v=r.memoizedState,v!==null&&(v=v.dehydrated,v!==null))return tf(v)?r.lanes=32:r.lanes=536870912,null;ei(r)}return v=l.children,l=l.fallback,c?(Di(),c=r.mode,v=uu({mode:"hidden",children:v},c),l=Er(l,c,a,null),v.return=r,l.return=r,v.sibling=l,r.child=v,c=r.child,c.memoizedState=_h(a),c.childLanes=vh(t,g,a),r.memoizedState=gh,l):(Oi(r),yh(r,v))}if(b=t.memoizedState,b!==null&&(v=b.dehydrated,v!==null)){if(h)r.flags&256?(Oi(r),r.flags&=-257,r=Eh(t,r,a)):r.memoizedState!==null?(Di(),r.child=t.child,r.flags|=128,r=null):(Di(),c=l.fallback,v=r.mode,l=uu({mode:"visible",children:l.children},v),c=Er(c,v,a,null),c.flags|=2,l.return=r,c.return=r,l.sibling=c,r.child=l,ws(r,t.child,null,a),l=r.child,l.memoizedState=_h(a),l.childLanes=vh(t,g,a),r.memoizedState=gh,r=c);else if(Oi(r),tf(v)){if(g=v.nextSibling&&v.nextSibling.dataset,g)var R=g.dgst;g=R,l=Error(s(419)),l.stack="",l.digest=g,Na({value:l,source:null,stack:null}),r=Eh(t,r,a)}else if(st||Oa(t,r,a,!1),g=(a&t.childLanes)!==0,st||g){if(g=Oe,g!==null&&(l=a&-a,l=(l&42)!==0?1:nd(l),l=(l&(g.suspendedLanes|a))!==0?0:l,l!==0&&l!==b.retryLane))throw b.retryLane=l,fs(t,l),Kt(g,t,l),Q_;v.data==="$?"||zh(),r=Eh(t,r,a)}else v.data==="$?"?(r.flags|=192,r.child=t.child,r=null):(t=b.treeContext,je=bn(v.nextSibling),Rt=r,ve=!0,Tr=null,On=!1,t!==null&&(on[ln++]=Kn,on[ln++]=Xn,on[ln++]=br,Kn=t.id,Xn=t.overflow,br=r),r=yh(r,l.children),r.flags|=4096);return r}return c?(Di(),c=l.fallback,v=r.mode,b=t.child,R=b.sibling,l=Qn(b,{mode:"hidden",children:l.children}),l.subtreeFlags=b.subtreeFlags&65011712,R!==null?c=Qn(R,c):(c=Er(c,v,a,null),c.flags|=2),c.return=r,l.return=r,l.sibling=c,r.child=l,l=c,c=r.child,v=t.child.memoizedState,v===null?v=_h(a):(b=v.cachePool,b!==null?(R=Je._currentValue,b=b.parent!==R?{parent:R,pool:R}:b):b=Fg(),v={baseLanes:v.baseLanes|a,cachePool:b}),c.memoizedState=v,c.childLanes=vh(t,g,a),r.memoizedState=gh,l):(Oi(r),a=t.child,t=a.sibling,a=Qn(a,{mode:"visible",children:l.children}),a.return=r,a.sibling=null,t!==null&&(g=r.deletions,g===null?(r.deletions=[t],r.flags|=16):g.push(t)),r.child=a,r.memoizedState=null,a)}function yh(t,r){return r=uu({mode:"visible",children:r},t.mode),r.return=t,t.child=r}function uu(t,r){return t=jt(22,t,null,r),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Eh(t,r,a){return ws(r,t.child,null,a),t=yh(r,r.pendingProps.children),t.flags|=2,r.memoizedState=null,t}function rv(t,r,a){t.lanes|=r;var l=t.alternate;l!==null&&(l.lanes|=r),zd(t.return,r,a)}function bh(t,r,a,l,c){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:c}:(h.isBackwards=r,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=a,h.tailMode=c)}function sv(t,r,a){var l=r.pendingProps,c=l.revealOrder,h=l.tail;if(mt(t,r,l.children,a),l=et.current,(l&2)!==0)l=l&1|2,r.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=r.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&rv(t,a,r);else if(t.tag===19)rv(t,a,r);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break e;for(;t.sibling===null;){if(t.return===null||t.return===r)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}switch(F(et,l),c){case"forwards":for(a=r.child,c=null;a!==null;)t=a.alternate,t!==null&&su(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=r.child,r.child=null):(c=a.sibling,a.sibling=null),bh(r,!1,c,a,h);break;case"backwards":for(a=null,c=r.child,r.child=null;c!==null;){if(t=c.alternate,t!==null&&su(t)===null){r.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}bh(r,!0,a,null,h);break;case"together":bh(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function ti(t,r,a){if(t!==null&&(r.dependencies=t.dependencies),Li|=r.lanes,(a&r.childLanes)===0)if(t!==null){if(Oa(t,r,a,!1),(a&r.childLanes)===0)return null}else return null;if(t!==null&&r.child!==t.child)throw Error(s(153));if(r.child!==null){for(t=r.child,a=Qn(t,t.pendingProps),r.child=a,a.return=r;t.sibling!==null;)t=t.sibling,a=a.sibling=Qn(t,t.pendingProps),a.return=r;a.sibling=null}return r.child}function Sh(t,r){return(t.lanes&r)!==0?!0:(t=t.dependencies,!!(t!==null&&Fl(t)))}function zw(t,r,a){switch(r.tag){case 3:Pe(r,r.stateNode.containerInfo),Ci(r,Je,t.memoizedState.cache),Ia();break;case 27:case 5:$c(r);break;case 4:Pe(r,r.stateNode.containerInfo);break;case 10:Ci(r,r.type,r.memoizedProps.value);break;case 13:var l=r.memoizedState;if(l!==null)return l.dehydrated!==null?(Oi(r),r.flags|=128,null):(a&r.child.childLanes)!==0?iv(t,r,a):(Oi(r),t=ti(t,r,a),t!==null?t.sibling:null);Oi(r);break;case 19:var c=(t.flags&128)!==0;if(l=(a&r.childLanes)!==0,l||(Oa(t,r,a,!1),l=(a&r.childLanes)!==0),c){if(l)return sv(t,r,a);r.flags|=128}if(c=r.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),F(et,et.current),l)break;return null;case 22:case 23:return r.lanes=0,Z_(t,r,a);case 24:Ci(r,Je,t.memoizedState.cache)}return ti(t,r,a)}function av(t,r,a){if(t!==null)if(t.memoizedProps!==r.pendingProps)st=!0;else{if(!Sh(t,a)&&(r.flags&128)===0)return st=!1,zw(t,r,a);st=(t.flags&131072)!==0}else st=!1,ve&&(r.flags&1048576)!==0&&Lg(r,ql,r.index);switch(r.lanes=0,r.tag){case 16:e:{t=r.pendingProps;var l=r.elementType,c=l._init;if(l=c(l._payload),r.type=l,typeof l=="function")Dd(l)?(t=Nr(l,t),r.tag=1,r=tv(null,r,l,t,a)):(r.tag=0,r=mh(null,r,l,t,a));else{if(l!=null){if(c=l.$$typeof,c===ue){r.tag=11,r=K_(null,r,l,t,a);break e}else if(c===Me){r.tag=14,r=X_(null,r,l,t,a);break e}}throw r=pr(l)||l,Error(s(306,r,""))}}return r;case 0:return mh(t,r,r.type,r.pendingProps,a);case 1:return l=r.type,c=Nr(l,r.pendingProps),tv(t,r,l,c,a);case 3:e:{if(Pe(r,r.stateNode.containerInfo),t===null)throw Error(s(387));l=r.pendingProps;var h=r.memoizedState;c=h.element,Gd(t,r),Ua(r,l,null,a);var g=r.memoizedState;if(l=g.cache,Ci(r,Je,l),l!==h.cache&&Hd(r,[Je],a,!0),La(),l=g.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:g.cache},r.updateQueue.baseState=h,r.memoizedState=h,r.flags&256){r=nv(t,r,l,a);break e}else if(l!==c){c=sn(Error(s(424)),r),Na(c),r=nv(t,r,l,a);break e}else{switch(t=r.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(je=bn(t.firstChild),Rt=r,ve=!0,Tr=null,On=!0,a=z_(r,null,l,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ia(),l===c){r=ti(t,r,a);break e}mt(t,r,l,a)}r=r.child}return r;case 26:return lu(t,r),t===null?(a=cy(r.type,null,r.pendingProps,null))?r.memoizedState=a:ve||(a=r.type,t=r.pendingProps,l=Tu(re.current).createElement(a),l[St]=r,l[It]=t,_t(l,a,t),rt(l),r.stateNode=l):r.memoizedState=cy(r.type,t.memoizedProps,r.pendingProps,t.memoizedState),null;case 27:return $c(r),t===null&&ve&&(l=r.stateNode=oy(r.type,r.pendingProps,re.current),Rt=r,On=!0,c=je,Bi(r.type)?(nf=c,je=bn(l.firstChild)):je=c),mt(t,r,r.pendingProps.children,a),lu(t,r),t===null&&(r.flags|=4194304),r.child;case 5:return t===null&&ve&&((c=l=je)&&(l=hC(l,r.type,r.pendingProps,On),l!==null?(r.stateNode=l,Rt=r,je=bn(l.firstChild),On=!1,c=!0):c=!1),c||wr(r)),$c(r),c=r.type,h=r.pendingProps,g=t!==null?t.memoizedProps:null,l=h.children,Zh(c,h)?l=null:g!==null&&Zh(c,g)&&(r.flags|=32),r.memoizedState!==null&&(c=$d(t,r,Ow,null,null,a),so._currentValue=c),lu(t,r),mt(t,r,l,a),r.child;case 6:return t===null&&ve&&((t=a=je)&&(a=fC(a,r.pendingProps,On),a!==null?(r.stateNode=a,Rt=r,je=null,t=!0):t=!1),t||wr(r)),null;case 13:return iv(t,r,a);case 4:return Pe(r,r.stateNode.containerInfo),l=r.pendingProps,t===null?r.child=ws(r,null,l,a):mt(t,r,l,a),r.child;case 11:return K_(t,r,r.type,r.pendingProps,a);case 7:return mt(t,r,r.pendingProps,a),r.child;case 8:return mt(t,r,r.pendingProps.children,a),r.child;case 12:return mt(t,r,r.pendingProps.children,a),r.child;case 10:return l=r.pendingProps,Ci(r,r.type,l.value),mt(t,r,l.children,a),r.child;case 9:return c=r.type._context,l=r.pendingProps.children,Rr(r),c=Tt(c),l=l(c),r.flags|=1,mt(t,r,l,a),r.child;case 14:return X_(t,r,r.type,r.pendingProps,a);case 15:return $_(t,r,r.type,r.pendingProps,a);case 19:return sv(t,r,a);case 31:return l=r.pendingProps,a=r.mode,l={mode:l.mode,children:l.children},t===null?(a=uu(l,a),a.ref=r.ref,r.child=a,a.return=r,r=a):(a=Qn(t.child,l),a.ref=r.ref,r.child=a,a.return=r,r=a),r;case 22:return Z_(t,r,a);case 24:return Rr(r),l=Tt(Je),t===null?(c=qd(),c===null&&(c=Oe,h=Bd(),c.pooledCache=h,h.refCount++,h!==null&&(c.pooledCacheLanes|=a),c=h),r.memoizedState={parent:l,cache:c},jd(r),Ci(r,Je,c)):((t.lanes&a)!==0&&(Gd(t,r),Ua(r,null,null,a),La()),c=t.memoizedState,h=r.memoizedState,c.parent!==l?(c={parent:l,cache:l},r.memoizedState=c,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=c),Ci(r,Je,l)):(l=h.cache,Ci(r,Je,l),l!==c.cache&&Hd(r,[Je],a,!0))),mt(t,r,r.pendingProps.children,a),r.child;case 29:throw r.pendingProps}throw Error(s(156,r.tag))}function ni(t){t.flags|=4}function ov(t,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!my(r)){if(r=un.current,r!==null&&((pe&4194048)===pe?Dn!==null:(pe&62914560)!==pe&&(pe&536870912)===0||r!==Dn))throw xa=Fd,jg;t.flags|=8192}}function cu(t,r){r!==null&&(t.flags|=4),t.flags&16384&&(r=t.tag!==22?Hm():536870912,t.lanes|=r,Is|=r)}function ja(t,r){if(!ve)switch(t.tailMode){case"hidden":r=t.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?r||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function Be(t){var r=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(r)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,l|=c.subtreeFlags&65011712,l|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,l|=c.subtreeFlags,l|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=l,t.childLanes=a,r}function Hw(t,r,a){var l=r.pendingProps;switch(Pd(r),r.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Be(r),null;case 1:return Be(r),null;case 3:return a=r.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),r.memoizedState.cache!==l&&(r.flags|=2048),Zn(Je),bi(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Aa(r)?ni(r):t===null||t.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Hg())),Be(r),null;case 26:return a=r.memoizedState,t===null?(ni(r),a!==null?(Be(r),ov(r,a)):(Be(r),r.flags&=-16777217)):a?a!==t.memoizedState?(ni(r),Be(r),ov(r,a)):(Be(r),r.flags&=-16777217):(t.memoizedProps!==l&&ni(r),Be(r),r.flags&=-16777217),null;case 27:bl(r),a=re.current;var c=r.type;if(t!==null&&r.stateNode!=null)t.memoizedProps!==l&&ni(r);else{if(!l){if(r.stateNode===null)throw Error(s(166));return Be(r),null}t=K.current,Aa(r)?Ug(r):(t=oy(c,l,a),r.stateNode=t,ni(r))}return Be(r),null;case 5:if(bl(r),a=r.type,t!==null&&r.stateNode!=null)t.memoizedProps!==l&&ni(r);else{if(!l){if(r.stateNode===null)throw Error(s(166));return Be(r),null}if(t=K.current,Aa(r))Ug(r);else{switch(c=Tu(re.current),t){case 1:t=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=c.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof l.is=="string"?c.createElement("select",{is:l.is}):c.createElement("select"),l.multiple?t.multiple=!0:l.size&&(t.size=l.size);break;default:t=typeof l.is=="string"?c.createElement(a,{is:l.is}):c.createElement(a)}}t[St]=r,t[It]=l;e:for(c=r.child;c!==null;){if(c.tag===5||c.tag===6)t.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===r)break e;for(;c.sibling===null;){if(c.return===null||c.return===r)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}r.stateNode=t;e:switch(_t(t,a,l),a){case"button":case"input":case"select":case"textarea":t=!!l.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&ni(r)}}return Be(r),r.flags&=-16777217,null;case 6:if(t&&r.stateNode!=null)t.memoizedProps!==l&&ni(r);else{if(typeof l!="string"&&r.stateNode===null)throw Error(s(166));if(t=re.current,Aa(r)){if(t=r.stateNode,a=r.memoizedProps,l=null,c=Rt,c!==null)switch(c.tag){case 27:case 5:l=c.memoizedProps}t[St]=r,t=!!(t.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||ey(t.nodeValue,a)),t||wr(r)}else t=Tu(t).createTextNode(l),t[St]=r,r.stateNode=t}return Be(r),null;case 13:if(l=r.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Aa(r),l!==null&&l.dehydrated!==null){if(t===null){if(!c)throw Error(s(318));if(c=r.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[St]=r}else Ia(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Be(r),c=!1}else c=Hg(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return r.flags&256?(ei(r),r):(ei(r),null)}if(ei(r),(r.flags&128)!==0)return r.lanes=a,r;if(a=l!==null,t=t!==null&&t.memoizedState!==null,a){l=r.child,c=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(c=l.alternate.memoizedState.cachePool.pool);var h=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(h=l.memoizedState.cachePool.pool),h!==c&&(l.flags|=2048)}return a!==t&&a&&(r.child.flags|=8192),cu(r,r.updateQueue),Be(r),null;case 4:return bi(),t===null&&Wh(r.stateNode.containerInfo),Be(r),null;case 10:return Zn(r.type),Be(r),null;case 19:if(G(et),c=r.memoizedState,c===null)return Be(r),null;if(l=(r.flags&128)!==0,h=c.rendering,h===null)if(l)ja(c,!1);else{if(Ge!==0||t!==null&&(t.flags&128)!==0)for(t=r.child;t!==null;){if(h=su(t),h!==null){for(r.flags|=128,ja(c,!1),t=h.updateQueue,r.updateQueue=t,cu(r,t),r.subtreeFlags=0,t=a,a=r.child;a!==null;)Pg(a,t),a=a.sibling;return F(et,et.current&1|2),r.child}t=t.sibling}c.tail!==null&&Nn()>fu&&(r.flags|=128,l=!0,ja(c,!1),r.lanes=4194304)}else{if(!l)if(t=su(h),t!==null){if(r.flags|=128,l=!0,t=t.updateQueue,r.updateQueue=t,cu(r,t),ja(c,!0),c.tail===null&&c.tailMode==="hidden"&&!h.alternate&&!ve)return Be(r),null}else 2*Nn()-c.renderingStartTime>fu&&a!==536870912&&(r.flags|=128,l=!0,ja(c,!1),r.lanes=4194304);c.isBackwards?(h.sibling=r.child,r.child=h):(t=c.last,t!==null?t.sibling=h:r.child=h,c.last=h)}return c.tail!==null?(r=c.tail,c.rendering=r,c.tail=r.sibling,c.renderingStartTime=Nn(),r.sibling=null,t=et.current,F(et,l?t&1|2:t&1),r):(Be(r),null);case 22:case 23:return ei(r),Kd(),l=r.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(r.flags|=8192):l&&(r.flags|=8192),l?(a&536870912)!==0&&(r.flags&128)===0&&(Be(r),r.subtreeFlags&6&&(r.flags|=8192)):Be(r),a=r.updateQueue,a!==null&&cu(r,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),l=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(l=r.memoizedState.cachePool.pool),l!==a&&(r.flags|=2048),t!==null&&G(Ar),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),r.memoizedState.cache!==a&&(r.flags|=2048),Zn(Je),Be(r),null;case 25:return null;case 30:return null}throw Error(s(156,r.tag))}function Bw(t,r){switch(Pd(r),r.tag){case 1:return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 3:return Zn(Je),bi(),t=r.flags,(t&65536)!==0&&(t&128)===0?(r.flags=t&-65537|128,r):null;case 26:case 27:case 5:return bl(r),null;case 13:if(ei(r),t=r.memoizedState,t!==null&&t.dehydrated!==null){if(r.alternate===null)throw Error(s(340));Ia()}return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 19:return G(et),null;case 4:return bi(),null;case 10:return Zn(r.type),null;case 22:case 23:return ei(r),Kd(),t!==null&&G(Ar),t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 24:return Zn(Je),null;case 25:return null;default:return null}}function lv(t,r){switch(Pd(r),r.tag){case 3:Zn(Je),bi();break;case 26:case 27:case 5:bl(r);break;case 4:bi();break;case 13:ei(r);break;case 19:G(et);break;case 10:Zn(r.type);break;case 22:case 23:ei(r),Kd(),t!==null&&G(Ar);break;case 24:Zn(Je)}}function Ga(t,r){try{var a=r.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var c=l.next;a=c;do{if((a.tag&t)===t){l=void 0;var h=a.create,g=a.inst;l=h(),g.destroy=l}a=a.next}while(a!==c)}}catch(v){Ie(r,r.return,v)}}function ki(t,r,a){try{var l=r.updateQueue,c=l!==null?l.lastEffect:null;if(c!==null){var h=c.next;l=h;do{if((l.tag&t)===t){var g=l.inst,v=g.destroy;if(v!==void 0){g.destroy=void 0,c=r;var b=a,R=v;try{R()}catch(D){Ie(c,b,D)}}}l=l.next}while(l!==h)}}catch(D){Ie(r,r.return,D)}}function uv(t){var r=t.updateQueue;if(r!==null){var a=t.stateNode;try{Xg(r,a)}catch(l){Ie(t,t.return,l)}}}function cv(t,r,a){a.props=Nr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(l){Ie(t,r,l)}}function Ya(t,r){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof a=="function"?t.refCleanup=a(l):a.current=l}}catch(c){Ie(t,r,c)}}function kn(t,r){var a=t.ref,l=t.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(c){Ie(t,r,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Ie(t,r,c)}else a.current=null}function dv(t){var r=t.type,a=t.memoizedProps,l=t.stateNode;try{e:switch(r){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(c){Ie(t,t.return,c)}}function Th(t,r,a){try{var l=t.stateNode;oC(l,t.type,a,r),l[It]=r}catch(c){Ie(t,t.return,c)}}function hv(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Bi(t.type)||t.tag===4}function wh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||hv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Bi(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ch(t,r,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,r?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,r):(r=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,r.appendChild(t),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=Su));else if(l!==4&&(l===27&&Bi(t.type)&&(a=t.stateNode,r=null),t=t.child,t!==null))for(Ch(t,r,a),t=t.sibling;t!==null;)Ch(t,r,a),t=t.sibling}function du(t,r,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,r?a.insertBefore(t,r):a.appendChild(t);else if(l!==4&&(l===27&&Bi(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(du(t,r,a),t=t.sibling;t!==null;)du(t,r,a),t=t.sibling}function fv(t){var r=t.stateNode,a=t.memoizedProps;try{for(var l=t.type,c=r.attributes;c.length;)r.removeAttributeNode(c[0]);_t(r,l,a),r[St]=t,r[It]=a}catch(h){Ie(t,t.return,h)}}var ii=!1,Ke=!1,Rh=!1,pv=typeof WeakSet=="function"?WeakSet:Set,at=null;function Vw(t,r){if(t=t.containerInfo,Xh=Nu,t=Cg(t),wd(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var c=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break e}var g=0,v=-1,b=-1,R=0,D=0,P=t,N=null;t:for(;;){for(var O;P!==a||c!==0&&P.nodeType!==3||(v=g+c),P!==h||l!==0&&P.nodeType!==3||(b=g+l),P.nodeType===3&&(g+=P.nodeValue.length),(O=P.firstChild)!==null;)N=P,P=O;for(;;){if(P===t)break t;if(N===a&&++R===c&&(v=g),N===h&&++D===l&&(b=g),(O=P.nextSibling)!==null)break;P=N,N=P.parentNode}P=O}a=v===-1||b===-1?null:{start:v,end:b}}else a=null}a=a||{start:0,end:0}}else a=null;for($h={focusedElem:t,selectionRange:a},Nu=!1,at=r;at!==null;)if(r=at,t=r.child,(r.subtreeFlags&1024)!==0&&t!==null)t.return=r,at=t;else for(;at!==null;){switch(r=at,h=r.alternate,t=r.flags,r.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&h!==null){t=void 0,a=r,c=h.memoizedProps,h=h.memoizedState,l=a.stateNode;try{var ne=Nr(a.type,c,a.elementType===a.type);t=l.getSnapshotBeforeUpdate(ne,h),l.__reactInternalSnapshotBeforeUpdate=t}catch(X){Ie(a,a.return,X)}}break;case 3:if((t&1024)!==0){if(t=r.stateNode.containerInfo,a=t.nodeType,a===9)ef(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":ef(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=r.sibling,t!==null){t.return=r.return,at=t;break}at=r.return}}function mv(t,r,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Mi(t,a),l&4&&Ga(5,a);break;case 1:if(Mi(t,a),l&4)if(t=a.stateNode,r===null)try{t.componentDidMount()}catch(g){Ie(a,a.return,g)}else{var c=Nr(a.type,r.memoizedProps);r=r.memoizedState;try{t.componentDidUpdate(c,r,t.__reactInternalSnapshotBeforeUpdate)}catch(g){Ie(a,a.return,g)}}l&64&&uv(a),l&512&&Ya(a,a.return);break;case 3:if(Mi(t,a),l&64&&(t=a.updateQueue,t!==null)){if(r=null,a.child!==null)switch(a.child.tag){case 27:case 5:r=a.child.stateNode;break;case 1:r=a.child.stateNode}try{Xg(t,r)}catch(g){Ie(a,a.return,g)}}break;case 27:r===null&&l&4&&fv(a);case 26:case 5:Mi(t,a),r===null&&l&4&&dv(a),l&512&&Ya(a,a.return);break;case 12:Mi(t,a);break;case 13:Mi(t,a),l&4&&vv(t,a),l&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Xw.bind(null,a),pC(t,a))));break;case 22:if(l=a.memoizedState!==null||ii,!l){r=r!==null&&r.memoizedState!==null||Ke,c=ii;var h=Ke;ii=l,(Ke=r)&&!h?xi(t,a,(a.subtreeFlags&8772)!==0):Mi(t,a),ii=c,Ke=h}break;case 30:break;default:Mi(t,a)}}function gv(t){var r=t.alternate;r!==null&&(t.alternate=null,gv(r)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(r=t.stateNode,r!==null&&sd(r)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Le=null,Dt=!1;function ri(t,r,a){for(a=a.child;a!==null;)_v(t,r,a),a=a.sibling}function _v(t,r,a){if(Vt&&typeof Vt.onCommitFiberUnmount=="function")try{Vt.onCommitFiberUnmount(fa,a)}catch{}switch(a.tag){case 26:Ke||kn(a,r),ri(t,r,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ke||kn(a,r);var l=Le,c=Dt;Bi(a.type)&&(Le=a.stateNode,Dt=!1),ri(t,r,a),to(a.stateNode),Le=l,Dt=c;break;case 5:Ke||kn(a,r);case 6:if(l=Le,c=Dt,Le=null,ri(t,r,a),Le=l,Dt=c,Le!==null)if(Dt)try{(Le.nodeType===9?Le.body:Le.nodeName==="HTML"?Le.ownerDocument.body:Le).removeChild(a.stateNode)}catch(h){Ie(a,r,h)}else try{Le.removeChild(a.stateNode)}catch(h){Ie(a,r,h)}break;case 18:Le!==null&&(Dt?(t=Le,sy(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),uo(t)):sy(Le,a.stateNode));break;case 4:l=Le,c=Dt,Le=a.stateNode.containerInfo,Dt=!0,ri(t,r,a),Le=l,Dt=c;break;case 0:case 11:case 14:case 15:Ke||ki(2,a,r),Ke||ki(4,a,r),ri(t,r,a);break;case 1:Ke||(kn(a,r),l=a.stateNode,typeof l.componentWillUnmount=="function"&&cv(a,r,l)),ri(t,r,a);break;case 21:ri(t,r,a);break;case 22:Ke=(l=Ke)||a.memoizedState!==null,ri(t,r,a),Ke=l;break;default:ri(t,r,a)}}function vv(t,r){if(r.memoizedState===null&&(t=r.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{uo(t)}catch(a){Ie(r,r.return,a)}}function qw(t){switch(t.tag){case 13:case 19:var r=t.stateNode;return r===null&&(r=t.stateNode=new pv),r;case 22:return t=t.stateNode,r=t._retryCache,r===null&&(r=t._retryCache=new pv),r;default:throw Error(s(435,t.tag))}}function Ah(t,r){var a=qw(t);r.forEach(function(l){var c=$w.bind(null,t,l);a.has(l)||(a.add(l),l.then(c,c))})}function Gt(t,r){var a=r.deletions;if(a!==null)for(var l=0;l<a.length;l++){var c=a[l],h=t,g=r,v=g;e:for(;v!==null;){switch(v.tag){case 27:if(Bi(v.type)){Le=v.stateNode,Dt=!1;break e}break;case 5:Le=v.stateNode,Dt=!1;break e;case 3:case 4:Le=v.stateNode.containerInfo,Dt=!0;break e}v=v.return}if(Le===null)throw Error(s(160));_v(h,g,c),Le=null,Dt=!1,h=c.alternate,h!==null&&(h.return=null),c.return=null}if(r.subtreeFlags&13878)for(r=r.child;r!==null;)yv(r,t),r=r.sibling}var En=null;function yv(t,r){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Gt(r,t),Yt(t),l&4&&(ki(3,t,t.return),Ga(3,t),ki(5,t,t.return));break;case 1:Gt(r,t),Yt(t),l&512&&(Ke||a===null||kn(a,a.return)),l&64&&ii&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var c=En;if(Gt(r,t),Yt(t),l&512&&(Ke||a===null||kn(a,a.return)),l&4){var h=a!==null?a.memoizedState:null;if(l=t.memoizedState,a===null)if(l===null)if(t.stateNode===null){e:{l=t.type,a=t.memoizedProps,c=c.ownerDocument||c;t:switch(l){case"title":h=c.getElementsByTagName("title")[0],(!h||h[ga]||h[St]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=c.createElement(l),c.head.insertBefore(h,c.querySelector("head > title"))),_t(h,l,a),h[St]=t,rt(h),l=h;break e;case"link":var g=fy("link","href",c).get(l+(a.href||""));if(g){for(var v=0;v<g.length;v++)if(h=g[v],h.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&h.getAttribute("rel")===(a.rel==null?null:a.rel)&&h.getAttribute("title")===(a.title==null?null:a.title)&&h.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){g.splice(v,1);break t}}h=c.createElement(l),_t(h,l,a),c.head.appendChild(h);break;case"meta":if(g=fy("meta","content",c).get(l+(a.content||""))){for(v=0;v<g.length;v++)if(h=g[v],h.getAttribute("content")===(a.content==null?null:""+a.content)&&h.getAttribute("name")===(a.name==null?null:a.name)&&h.getAttribute("property")===(a.property==null?null:a.property)&&h.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&h.getAttribute("charset")===(a.charSet==null?null:a.charSet)){g.splice(v,1);break t}}h=c.createElement(l),_t(h,l,a),c.head.appendChild(h);break;default:throw Error(s(468,l))}h[St]=t,rt(h),l=h}t.stateNode=l}else py(c,t.type,t.stateNode);else t.stateNode=hy(c,l,t.memoizedProps);else h!==l?(h===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):h.count--,l===null?py(c,t.type,t.stateNode):hy(c,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Th(t,t.memoizedProps,a.memoizedProps)}break;case 27:Gt(r,t),Yt(t),l&512&&(Ke||a===null||kn(a,a.return)),a!==null&&l&4&&Th(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Gt(r,t),Yt(t),l&512&&(Ke||a===null||kn(a,a.return)),t.flags&32){c=t.stateNode;try{as(c,"")}catch(O){Ie(t,t.return,O)}}l&4&&t.stateNode!=null&&(c=t.memoizedProps,Th(t,c,a!==null?a.memoizedProps:c)),l&1024&&(Rh=!0);break;case 6:if(Gt(r,t),Yt(t),l&4){if(t.stateNode===null)throw Error(s(162));l=t.memoizedProps,a=t.stateNode;try{a.nodeValue=l}catch(O){Ie(t,t.return,O)}}break;case 3:if(Ru=null,c=En,En=wu(r.containerInfo),Gt(r,t),En=c,Yt(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{uo(r.containerInfo)}catch(O){Ie(t,t.return,O)}Rh&&(Rh=!1,Ev(t));break;case 4:l=En,En=wu(t.stateNode.containerInfo),Gt(r,t),Yt(t),En=l;break;case 12:Gt(r,t),Yt(t);break;case 13:Gt(r,t),Yt(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Mh=Nn()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Ah(t,l)));break;case 22:c=t.memoizedState!==null;var b=a!==null&&a.memoizedState!==null,R=ii,D=Ke;if(ii=R||c,Ke=D||b,Gt(r,t),Ke=D,ii=R,Yt(t),l&8192)e:for(r=t.stateNode,r._visibility=c?r._visibility&-2:r._visibility|1,c&&(a===null||b||ii||Ke||Or(t)),a=null,r=t;;){if(r.tag===5||r.tag===26){if(a===null){b=a=r;try{if(h=b.stateNode,c)g=h.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{v=b.stateNode;var P=b.memoizedProps.style,N=P!=null&&P.hasOwnProperty("display")?P.display:null;v.style.display=N==null||typeof N=="boolean"?"":(""+N).trim()}}catch(O){Ie(b,b.return,O)}}}else if(r.tag===6){if(a===null){b=r;try{b.stateNode.nodeValue=c?"":b.memoizedProps}catch(O){Ie(b,b.return,O)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===t)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break e;for(;r.sibling===null;){if(r.return===null||r.return===t)break e;a===r&&(a=null),r=r.return}a===r&&(a=null),r.sibling.return=r.return,r=r.sibling}l&4&&(l=t.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Ah(t,a))));break;case 19:Gt(r,t),Yt(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Ah(t,l)));break;case 30:break;case 21:break;default:Gt(r,t),Yt(t)}}function Yt(t){var r=t.flags;if(r&2){try{for(var a,l=t.return;l!==null;){if(hv(l)){a=l;break}l=l.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var c=a.stateNode,h=wh(t);du(t,h,c);break;case 5:var g=a.stateNode;a.flags&32&&(as(g,""),a.flags&=-33);var v=wh(t);du(t,v,g);break;case 3:case 4:var b=a.stateNode.containerInfo,R=wh(t);Ch(t,R,b);break;default:throw Error(s(161))}}catch(D){Ie(t,t.return,D)}t.flags&=-3}r&4096&&(t.flags&=-4097)}function Ev(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var r=t;Ev(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),t=t.sibling}}function Mi(t,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)mv(t,r.alternate,r),r=r.sibling}function Or(t){for(t=t.child;t!==null;){var r=t;switch(r.tag){case 0:case 11:case 14:case 15:ki(4,r,r.return),Or(r);break;case 1:kn(r,r.return);var a=r.stateNode;typeof a.componentWillUnmount=="function"&&cv(r,r.return,a),Or(r);break;case 27:to(r.stateNode);case 26:case 5:kn(r,r.return),Or(r);break;case 22:r.memoizedState===null&&Or(r);break;case 30:Or(r);break;default:Or(r)}t=t.sibling}}function xi(t,r,a){for(a=a&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var l=r.alternate,c=t,h=r,g=h.flags;switch(h.tag){case 0:case 11:case 15:xi(c,h,a),Ga(4,h);break;case 1:if(xi(c,h,a),l=h,c=l.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(R){Ie(l,l.return,R)}if(l=h,c=l.updateQueue,c!==null){var v=l.stateNode;try{var b=c.shared.hiddenCallbacks;if(b!==null)for(c.shared.hiddenCallbacks=null,c=0;c<b.length;c++)Kg(b[c],v)}catch(R){Ie(l,l.return,R)}}a&&g&64&&uv(h),Ya(h,h.return);break;case 27:fv(h);case 26:case 5:xi(c,h,a),a&&l===null&&g&4&&dv(h),Ya(h,h.return);break;case 12:xi(c,h,a);break;case 13:xi(c,h,a),a&&g&4&&vv(c,h);break;case 22:h.memoizedState===null&&xi(c,h,a),Ya(h,h.return);break;case 30:break;default:xi(c,h,a)}r=r.sibling}}function Ih(t,r){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(t=r.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Da(a))}function Nh(t,r){t=null,r.alternate!==null&&(t=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==t&&(r.refCount++,t!=null&&Da(t))}function Mn(t,r,a,l){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)bv(t,r,a,l),r=r.sibling}function bv(t,r,a,l){var c=r.flags;switch(r.tag){case 0:case 11:case 15:Mn(t,r,a,l),c&2048&&Ga(9,r);break;case 1:Mn(t,r,a,l);break;case 3:Mn(t,r,a,l),c&2048&&(t=null,r.alternate!==null&&(t=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==t&&(r.refCount++,t!=null&&Da(t)));break;case 12:if(c&2048){Mn(t,r,a,l),t=r.stateNode;try{var h=r.memoizedProps,g=h.id,v=h.onPostCommit;typeof v=="function"&&v(g,r.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(b){Ie(r,r.return,b)}}else Mn(t,r,a,l);break;case 13:Mn(t,r,a,l);break;case 23:break;case 22:h=r.stateNode,g=r.alternate,r.memoizedState!==null?h._visibility&2?Mn(t,r,a,l):Wa(t,r):h._visibility&2?Mn(t,r,a,l):(h._visibility|=2,Cs(t,r,a,l,(r.subtreeFlags&10256)!==0)),c&2048&&Ih(g,r);break;case 24:Mn(t,r,a,l),c&2048&&Nh(r.alternate,r);break;default:Mn(t,r,a,l)}}function Cs(t,r,a,l,c){for(c=c&&(r.subtreeFlags&10256)!==0,r=r.child;r!==null;){var h=t,g=r,v=a,b=l,R=g.flags;switch(g.tag){case 0:case 11:case 15:Cs(h,g,v,b,c),Ga(8,g);break;case 23:break;case 22:var D=g.stateNode;g.memoizedState!==null?D._visibility&2?Cs(h,g,v,b,c):Wa(h,g):(D._visibility|=2,Cs(h,g,v,b,c)),c&&R&2048&&Ih(g.alternate,g);break;case 24:Cs(h,g,v,b,c),c&&R&2048&&Nh(g.alternate,g);break;default:Cs(h,g,v,b,c)}r=r.sibling}}function Wa(t,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var a=t,l=r,c=l.flags;switch(l.tag){case 22:Wa(a,l),c&2048&&Ih(l.alternate,l);break;case 24:Wa(a,l),c&2048&&Nh(l.alternate,l);break;default:Wa(a,l)}r=r.sibling}}var Qa=8192;function Rs(t){if(t.subtreeFlags&Qa)for(t=t.child;t!==null;)Sv(t),t=t.sibling}function Sv(t){switch(t.tag){case 26:Rs(t),t.flags&Qa&&t.memoizedState!==null&&AC(En,t.memoizedState,t.memoizedProps);break;case 5:Rs(t);break;case 3:case 4:var r=En;En=wu(t.stateNode.containerInfo),Rs(t),En=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=Qa,Qa=16777216,Rs(t),Qa=r):Rs(t));break;default:Rs(t)}}function Tv(t){var r=t.alternate;if(r!==null&&(t=r.child,t!==null)){r.child=null;do r=t.sibling,t.sibling=null,t=r;while(t!==null)}}function Ka(t){var r=t.deletions;if((t.flags&16)!==0){if(r!==null)for(var a=0;a<r.length;a++){var l=r[a];at=l,Cv(l,t)}Tv(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)wv(t),t=t.sibling}function wv(t){switch(t.tag){case 0:case 11:case 15:Ka(t),t.flags&2048&&ki(9,t,t.return);break;case 3:Ka(t);break;case 12:Ka(t);break;case 22:var r=t.stateNode;t.memoizedState!==null&&r._visibility&2&&(t.return===null||t.return.tag!==13)?(r._visibility&=-3,hu(t)):Ka(t);break;default:Ka(t)}}function hu(t){var r=t.deletions;if((t.flags&16)!==0){if(r!==null)for(var a=0;a<r.length;a++){var l=r[a];at=l,Cv(l,t)}Tv(t)}for(t=t.child;t!==null;){switch(r=t,r.tag){case 0:case 11:case 15:ki(8,r,r.return),hu(r);break;case 22:a=r.stateNode,a._visibility&2&&(a._visibility&=-3,hu(r));break;default:hu(r)}t=t.sibling}}function Cv(t,r){for(;at!==null;){var a=at;switch(a.tag){case 0:case 11:case 15:ki(8,a,r);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Da(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,at=l;else e:for(a=t;at!==null;){l=at;var c=l.sibling,h=l.return;if(gv(l),l===a){at=null;break e}if(c!==null){c.return=h,at=c;break e}at=h}}}var Fw={getCacheForType:function(t){var r=Tt(Je),a=r.data.get(t);return a===void 0&&(a=t(),r.data.set(t,a)),a}},jw=typeof WeakMap=="function"?WeakMap:Map,Ee=0,Oe=null,he=null,pe=0,be=0,Wt=null,Pi=!1,As=!1,Oh=!1,si=0,Ge=0,Li=0,Dr=0,Dh=0,cn=0,Is=0,Xa=null,kt=null,kh=!1,Mh=0,fu=1/0,pu=null,Ui=null,gt=0,zi=null,Ns=null,Os=0,xh=0,Ph=null,Rv=null,$a=0,Lh=null;function Qt(){if((Ee&2)!==0&&pe!==0)return pe&-pe;if(k.T!==null){var t=_s;return t!==0?t:Fh()}return qm()}function Av(){cn===0&&(cn=(pe&536870912)===0||ve?zm():536870912);var t=un.current;return t!==null&&(t.flags|=32),cn}function Kt(t,r,a){(t===Oe&&(be===2||be===9)||t.cancelPendingCommit!==null)&&(Ds(t,0),Hi(t,pe,cn,!1)),ma(t,a),((Ee&2)===0||t!==Oe)&&(t===Oe&&((Ee&2)===0&&(Dr|=a),Ge===4&&Hi(t,pe,cn,!1)),xn(t))}function Iv(t,r,a){if((Ee&6)!==0)throw Error(s(327));var l=!a&&(r&124)===0&&(r&t.expiredLanes)===0||pa(t,r),c=l?Ww(t,r):Hh(t,r,!0),h=l;do{if(c===0){As&&!l&&Hi(t,r,0,!1);break}else{if(a=t.current.alternate,h&&!Gw(a)){c=Hh(t,r,!1),h=!1;continue}if(c===2){if(h=r,t.errorRecoveryDisabledLanes&h)var g=0;else g=t.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){r=g;e:{var v=t;c=Xa;var b=v.current.memoizedState.isDehydrated;if(b&&(Ds(v,g).flags|=256),g=Hh(v,g,!1),g!==2){if(Oh&&!b){v.errorRecoveryDisabledLanes|=h,Dr|=h,c=4;break e}h=kt,kt=c,h!==null&&(kt===null?kt=h:kt.push.apply(kt,h))}c=g}if(h=!1,c!==2)continue}}if(c===1){Ds(t,0),Hi(t,r,0,!0);break}e:{switch(l=t,h=c,h){case 0:case 1:throw Error(s(345));case 4:if((r&4194048)!==r)break;case 6:Hi(l,r,cn,!Pi);break e;case 2:kt=null;break;case 3:case 5:break;default:throw Error(s(329))}if((r&62914560)===r&&(c=Mh+300-Nn(),10<c)){if(Hi(l,r,cn,!Pi),Cl(l,0,!0)!==0)break e;l.timeoutHandle=iy(Nv.bind(null,l,a,kt,pu,kh,r,cn,Dr,Is,Pi,h,2,-0,0),c);break e}Nv(l,a,kt,pu,kh,r,cn,Dr,Is,Pi,h,0,-0,0)}}break}while(!0);xn(t)}function Nv(t,r,a,l,c,h,g,v,b,R,D,P,N,O){if(t.timeoutHandle=-1,P=r.subtreeFlags,(P&8192||(P&16785408)===16785408)&&(ro={stylesheets:null,count:0,unsuspend:RC},Sv(r),P=IC(),P!==null)){t.cancelPendingCommit=P(Lv.bind(null,t,r,h,a,l,c,g,v,b,D,1,N,O)),Hi(t,h,g,!R);return}Lv(t,r,h,a,l,c,g,v,b)}function Gw(t){for(var r=t;;){var a=r.tag;if((a===0||a===11||a===15)&&r.flags&16384&&(a=r.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var c=a[l],h=c.getSnapshot;c=c.value;try{if(!Ft(h(),c))return!1}catch{return!1}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Hi(t,r,a,l){r&=~Dh,r&=~Dr,t.suspendedLanes|=r,t.pingedLanes&=~r,l&&(t.warmLanes|=r),l=t.expirationTimes;for(var c=r;0<c;){var h=31-qt(c),g=1<<h;l[h]=-1,c&=~g}a!==0&&Bm(t,a,r)}function mu(){return(Ee&6)===0?(Za(0),!1):!0}function Uh(){if(he!==null){if(be===0)var t=he.return;else t=he,$n=Cr=null,eh(t),Ts=null,qa=0,t=he;for(;t!==null;)lv(t.alternate,t),t=t.return;he=null}}function Ds(t,r){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,uC(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Uh(),Oe=t,he=a=Qn(t.current,null),pe=r,be=0,Wt=null,Pi=!1,As=pa(t,r),Oh=!1,Is=cn=Dh=Dr=Li=Ge=0,kt=Xa=null,kh=!1,(r&8)!==0&&(r|=r&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=r;0<l;){var c=31-qt(l),h=1<<c;r|=t[c],l&=~h}return si=r,Ul(),a}function Ov(t,r){ae=null,k.H=nu,r===Ma||r===Yl?(r=Wg(),be=3):r===jg?(r=Wg(),be=4):be=r===Q_?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,Wt=r,he===null&&(Ge=1,ou(t,sn(r,t.current)))}function Dv(){var t=k.H;return k.H=nu,t===null?nu:t}function kv(){var t=k.A;return k.A=Fw,t}function zh(){Ge=4,Pi||(pe&4194048)!==pe&&un.current!==null||(As=!0),(Li&134217727)===0&&(Dr&134217727)===0||Oe===null||Hi(Oe,pe,cn,!1)}function Hh(t,r,a){var l=Ee;Ee|=2;var c=Dv(),h=kv();(Oe!==t||pe!==r)&&(pu=null,Ds(t,r)),r=!1;var g=Ge;e:do try{if(be!==0&&he!==null){var v=he,b=Wt;switch(be){case 8:Uh(),g=6;break e;case 3:case 2:case 9:case 6:un.current===null&&(r=!0);var R=be;if(be=0,Wt=null,ks(t,v,b,R),a&&As){g=0;break e}break;default:R=be,be=0,Wt=null,ks(t,v,b,R)}}Yw(),g=Ge;break}catch(D){Ov(t,D)}while(!0);return r&&t.shellSuspendCounter++,$n=Cr=null,Ee=l,k.H=c,k.A=h,he===null&&(Oe=null,pe=0,Ul()),g}function Yw(){for(;he!==null;)Mv(he)}function Ww(t,r){var a=Ee;Ee|=2;var l=Dv(),c=kv();Oe!==t||pe!==r?(pu=null,fu=Nn()+500,Ds(t,r)):As=pa(t,r);e:do try{if(be!==0&&he!==null){r=he;var h=Wt;t:switch(be){case 1:be=0,Wt=null,ks(t,r,h,1);break;case 2:case 9:if(Gg(h)){be=0,Wt=null,xv(r);break}r=function(){be!==2&&be!==9||Oe!==t||(be=7),xn(t)},h.then(r,r);break e;case 3:be=7;break e;case 4:be=5;break e;case 7:Gg(h)?(be=0,Wt=null,xv(r)):(be=0,Wt=null,ks(t,r,h,7));break;case 5:var g=null;switch(he.tag){case 26:g=he.memoizedState;case 5:case 27:var v=he;if(!g||my(g)){be=0,Wt=null;var b=v.sibling;if(b!==null)he=b;else{var R=v.return;R!==null?(he=R,gu(R)):he=null}break t}}be=0,Wt=null,ks(t,r,h,5);break;case 6:be=0,Wt=null,ks(t,r,h,6);break;case 8:Uh(),Ge=6;break e;default:throw Error(s(462))}}Qw();break}catch(D){Ov(t,D)}while(!0);return $n=Cr=null,k.H=l,k.A=c,Ee=a,he!==null?0:(Oe=null,pe=0,Ul(),Ge)}function Qw(){for(;he!==null&&!gT();)Mv(he)}function Mv(t){var r=av(t.alternate,t,si);t.memoizedProps=t.pendingProps,r===null?gu(t):he=r}function xv(t){var r=t,a=r.alternate;switch(r.tag){case 15:case 0:r=ev(a,r,r.pendingProps,r.type,void 0,pe);break;case 11:r=ev(a,r,r.pendingProps,r.type.render,r.ref,pe);break;case 5:eh(r);default:lv(a,r),r=he=Pg(r,si),r=av(a,r,si)}t.memoizedProps=t.pendingProps,r===null?gu(t):he=r}function ks(t,r,a,l){$n=Cr=null,eh(r),Ts=null,qa=0;var c=r.return;try{if(Uw(t,c,r,a,pe)){Ge=1,ou(t,sn(a,t.current)),he=null;return}}catch(h){if(c!==null)throw he=c,h;Ge=1,ou(t,sn(a,t.current)),he=null;return}r.flags&32768?(ve||l===1?t=!0:As||(pe&536870912)!==0?t=!1:(Pi=t=!0,(l===2||l===9||l===3||l===6)&&(l=un.current,l!==null&&l.tag===13&&(l.flags|=16384))),Pv(r,t)):gu(r)}function gu(t){var r=t;do{if((r.flags&32768)!==0){Pv(r,Pi);return}t=r.return;var a=Hw(r.alternate,r,si);if(a!==null){he=a;return}if(r=r.sibling,r!==null){he=r;return}he=r=t}while(r!==null);Ge===0&&(Ge=5)}function Pv(t,r){do{var a=Bw(t.alternate,t);if(a!==null){a.flags&=32767,he=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!r&&(t=t.sibling,t!==null)){he=t;return}he=t=a}while(t!==null);Ge=6,he=null}function Lv(t,r,a,l,c,h,g,v,b){t.cancelPendingCommit=null;do _u();while(gt!==0);if((Ee&6)!==0)throw Error(s(327));if(r!==null){if(r===t.current)throw Error(s(177));if(h=r.lanes|r.childLanes,h|=Nd,RT(t,a,h,g,v,b),t===Oe&&(he=Oe=null,pe=0),Ns=r,zi=t,Os=a,xh=h,Ph=c,Rv=l,(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Zw(Sl,function(){return Vv(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||l){l=k.T,k.T=null,c=j.p,j.p=2,g=Ee,Ee|=4;try{Vw(t,r,a)}finally{Ee=g,j.p=c,k.T=l}}gt=1,Uv(),zv(),Hv()}}function Uv(){if(gt===1){gt=0;var t=zi,r=Ns,a=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||a){a=k.T,k.T=null;var l=j.p;j.p=2;var c=Ee;Ee|=4;try{yv(r,t);var h=$h,g=Cg(t.containerInfo),v=h.focusedElem,b=h.selectionRange;if(g!==v&&v&&v.ownerDocument&&wg(v.ownerDocument.documentElement,v)){if(b!==null&&wd(v)){var R=b.start,D=b.end;if(D===void 0&&(D=R),"selectionStart"in v)v.selectionStart=R,v.selectionEnd=Math.min(D,v.value.length);else{var P=v.ownerDocument||document,N=P&&P.defaultView||window;if(N.getSelection){var O=N.getSelection(),ne=v.textContent.length,X=Math.min(b.start,ne),Re=b.end===void 0?X:Math.min(b.end,ne);!O.extend&&X>Re&&(g=Re,Re=X,X=g);var w=Tg(v,X),T=Tg(v,Re);if(w&&T&&(O.rangeCount!==1||O.anchorNode!==w.node||O.anchorOffset!==w.offset||O.focusNode!==T.node||O.focusOffset!==T.offset)){var C=P.createRange();C.setStart(w.node,w.offset),O.removeAllRanges(),X>Re?(O.addRange(C),O.extend(T.node,T.offset)):(C.setEnd(T.node,T.offset),O.addRange(C))}}}}for(P=[],O=v;O=O.parentNode;)O.nodeType===1&&P.push({element:O,left:O.scrollLeft,top:O.scrollTop});for(typeof v.focus=="function"&&v.focus(),v=0;v<P.length;v++){var x=P[v];x.element.scrollLeft=x.left,x.element.scrollTop=x.top}}Nu=!!Xh,$h=Xh=null}finally{Ee=c,j.p=l,k.T=a}}t.current=r,gt=2}}function zv(){if(gt===2){gt=0;var t=zi,r=Ns,a=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||a){a=k.T,k.T=null;var l=j.p;j.p=2;var c=Ee;Ee|=4;try{mv(t,r.alternate,r)}finally{Ee=c,j.p=l,k.T=a}}gt=3}}function Hv(){if(gt===4||gt===3){gt=0,_T();var t=zi,r=Ns,a=Os,l=Rv;(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?gt=5:(gt=0,Ns=zi=null,Bv(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(Ui=null),id(a),r=r.stateNode,Vt&&typeof Vt.onCommitFiberRoot=="function")try{Vt.onCommitFiberRoot(fa,r,void 0,(r.current.flags&128)===128)}catch{}if(l!==null){r=k.T,c=j.p,j.p=2,k.T=null;try{for(var h=t.onRecoverableError,g=0;g<l.length;g++){var v=l[g];h(v.value,{componentStack:v.stack})}}finally{k.T=r,j.p=c}}(Os&3)!==0&&_u(),xn(t),c=t.pendingLanes,(a&4194090)!==0&&(c&42)!==0?t===Lh?$a++:($a=0,Lh=t):$a=0,Za(0)}}function Bv(t,r){(t.pooledCacheLanes&=r)===0&&(r=t.pooledCache,r!=null&&(t.pooledCache=null,Da(r)))}function _u(t){return Uv(),zv(),Hv(),Vv()}function Vv(){if(gt!==5)return!1;var t=zi,r=xh;xh=0;var a=id(Os),l=k.T,c=j.p;try{j.p=32>a?32:a,k.T=null,a=Ph,Ph=null;var h=zi,g=Os;if(gt=0,Ns=zi=null,Os=0,(Ee&6)!==0)throw Error(s(331));var v=Ee;if(Ee|=4,wv(h.current),bv(h,h.current,g,a),Ee=v,Za(0,!1),Vt&&typeof Vt.onPostCommitFiberRoot=="function")try{Vt.onPostCommitFiberRoot(fa,h)}catch{}return!0}finally{j.p=c,k.T=l,Bv(t,r)}}function qv(t,r,a){r=sn(a,r),r=ph(t.stateNode,r,2),t=Ii(t,r,2),t!==null&&(ma(t,2),xn(t))}function Ie(t,r,a){if(t.tag===3)qv(t,t,a);else for(;r!==null;){if(r.tag===3){qv(r,t,a);break}else if(r.tag===1){var l=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ui===null||!Ui.has(l))){t=sn(a,t),a=Y_(2),l=Ii(r,a,2),l!==null&&(W_(a,l,r,t),ma(l,2),xn(l));break}}r=r.return}}function Bh(t,r,a){var l=t.pingCache;if(l===null){l=t.pingCache=new jw;var c=new Set;l.set(r,c)}else c=l.get(r),c===void 0&&(c=new Set,l.set(r,c));c.has(a)||(Oh=!0,c.add(a),t=Kw.bind(null,t,r,a),r.then(t,t))}function Kw(t,r,a){var l=t.pingCache;l!==null&&l.delete(r),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Oe===t&&(pe&a)===a&&(Ge===4||Ge===3&&(pe&62914560)===pe&&300>Nn()-Mh?(Ee&2)===0&&Ds(t,0):Dh|=a,Is===pe&&(Is=0)),xn(t)}function Fv(t,r){r===0&&(r=Hm()),t=fs(t,r),t!==null&&(ma(t,r),xn(t))}function Xw(t){var r=t.memoizedState,a=0;r!==null&&(a=r.retryLane),Fv(t,a)}function $w(t,r){var a=0;switch(t.tag){case 13:var l=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(r),Fv(t,a)}function Zw(t,r){return Jc(t,r)}var vu=null,Ms=null,Vh=!1,yu=!1,qh=!1,kr=0;function xn(t){t!==Ms&&t.next===null&&(Ms===null?vu=Ms=t:Ms=Ms.next=t),yu=!0,Vh||(Vh=!0,eC())}function Za(t,r){if(!qh&&yu){qh=!0;do for(var a=!1,l=vu;l!==null;){if(t!==0){var c=l.pendingLanes;if(c===0)var h=0;else{var g=l.suspendedLanes,v=l.pingedLanes;h=(1<<31-qt(42|t)+1)-1,h&=c&~(g&~v),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,Wv(l,h))}else h=pe,h=Cl(l,l===Oe?h:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(h&3)===0||pa(l,h)||(a=!0,Wv(l,h));l=l.next}while(a);qh=!1}}function Jw(){jv()}function jv(){yu=Vh=!1;var t=0;kr!==0&&(lC()&&(t=kr),kr=0);for(var r=Nn(),a=null,l=vu;l!==null;){var c=l.next,h=Gv(l,r);h===0?(l.next=null,a===null?vu=c:a.next=c,c===null&&(Ms=a)):(a=l,(t!==0||(h&3)!==0)&&(yu=!0)),l=c}Za(t)}function Gv(t,r){for(var a=t.suspendedLanes,l=t.pingedLanes,c=t.expirationTimes,h=t.pendingLanes&-62914561;0<h;){var g=31-qt(h),v=1<<g,b=c[g];b===-1?((v&a)===0||(v&l)!==0)&&(c[g]=CT(v,r)):b<=r&&(t.expiredLanes|=v),h&=~v}if(r=Oe,a=pe,a=Cl(t,t===r?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,a===0||t===r&&(be===2||be===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&ed(l),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||pa(t,a)){if(r=a&-a,r===t.callbackPriority)return r;switch(l!==null&&ed(l),id(a)){case 2:case 8:a=Lm;break;case 32:a=Sl;break;case 268435456:a=Um;break;default:a=Sl}return l=Yv.bind(null,t),a=Jc(a,l),t.callbackPriority=r,t.callbackNode=a,r}return l!==null&&l!==null&&ed(l),t.callbackPriority=2,t.callbackNode=null,2}function Yv(t,r){if(gt!==0&&gt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(_u()&&t.callbackNode!==a)return null;var l=pe;return l=Cl(t,t===Oe?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(Iv(t,l,r),Gv(t,Nn()),t.callbackNode!=null&&t.callbackNode===a?Yv.bind(null,t):null)}function Wv(t,r){if(_u())return null;Iv(t,r,!0)}function eC(){cC(function(){(Ee&6)!==0?Jc(Pm,Jw):jv()})}function Fh(){return kr===0&&(kr=zm()),kr}function Qv(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ol(""+t)}function Kv(t,r){var a=r.ownerDocument.createElement("input");return a.name=r.name,a.value=r.value,t.id&&a.setAttribute("form",t.id),r.parentNode.insertBefore(a,r),t=new FormData(t),a.parentNode.removeChild(a),t}function tC(t,r,a,l,c){if(r==="submit"&&a&&a.stateNode===c){var h=Qv((c[It]||null).action),g=l.submitter;g&&(r=(r=g[It]||null)?Qv(r.formAction):g.getAttribute("formAction"),r!==null&&(h=r,g=null));var v=new xl("action","action",null,l,c);t.push({event:v,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(kr!==0){var b=g?Kv(c,g):new FormData(c);uh(a,{pending:!0,data:b,method:c.method,action:h},null,b)}}else typeof h=="function"&&(v.preventDefault(),b=g?Kv(c,g):new FormData(c),uh(a,{pending:!0,data:b,method:c.method,action:h},h,b))},currentTarget:c}]})}}for(var jh=0;jh<Id.length;jh++){var Gh=Id[jh],nC=Gh.toLowerCase(),iC=Gh[0].toUpperCase()+Gh.slice(1);yn(nC,"on"+iC)}yn(Ig,"onAnimationEnd"),yn(Ng,"onAnimationIteration"),yn(Og,"onAnimationStart"),yn("dblclick","onDoubleClick"),yn("focusin","onFocus"),yn("focusout","onBlur"),yn(Ew,"onTransitionRun"),yn(bw,"onTransitionStart"),yn(Sw,"onTransitionCancel"),yn(Dg,"onTransitionEnd"),is("onMouseEnter",["mouseout","mouseover"]),is("onMouseLeave",["mouseout","mouseover"]),is("onPointerEnter",["pointerout","pointerover"]),is("onPointerLeave",["pointerout","pointerover"]),gr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),gr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),gr("onBeforeInput",["compositionend","keypress","textInput","paste"]),gr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),gr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),gr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ja="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rC=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ja));function Xv(t,r){r=(r&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],c=l.event;l=l.listeners;e:{var h=void 0;if(r)for(var g=l.length-1;0<=g;g--){var v=l[g],b=v.instance,R=v.currentTarget;if(v=v.listener,b!==h&&c.isPropagationStopped())break e;h=v,c.currentTarget=R;try{h(c)}catch(D){au(D)}c.currentTarget=null,h=b}else for(g=0;g<l.length;g++){if(v=l[g],b=v.instance,R=v.currentTarget,v=v.listener,b!==h&&c.isPropagationStopped())break e;h=v,c.currentTarget=R;try{h(c)}catch(D){au(D)}c.currentTarget=null,h=b}}}}function fe(t,r){var a=r[rd];a===void 0&&(a=r[rd]=new Set);var l=t+"__bubble";a.has(l)||($v(r,t,2,!1),a.add(l))}function Yh(t,r,a){var l=0;r&&(l|=4),$v(a,t,l,r)}var Eu="_reactListening"+Math.random().toString(36).slice(2);function Wh(t){if(!t[Eu]){t[Eu]=!0,jm.forEach(function(a){a!=="selectionchange"&&(rC.has(a)||Yh(a,!1,t),Yh(a,!0,t))});var r=t.nodeType===9?t:t.ownerDocument;r===null||r[Eu]||(r[Eu]=!0,Yh("selectionchange",!1,r))}}function $v(t,r,a,l){switch(by(r)){case 2:var c=DC;break;case 8:c=kC;break;default:c=lf}a=c.bind(null,r,a,t),c=void 0,!md||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(c=!0),l?c!==void 0?t.addEventListener(r,a,{capture:!0,passive:c}):t.addEventListener(r,a,!0):c!==void 0?t.addEventListener(r,a,{passive:c}):t.addEventListener(r,a,!1)}function Qh(t,r,a,l,c){var h=l;if((r&1)===0&&(r&2)===0&&l!==null)e:for(;;){if(l===null)return;var g=l.tag;if(g===3||g===4){var v=l.stateNode.containerInfo;if(v===c)break;if(g===4)for(g=l.return;g!==null;){var b=g.tag;if((b===3||b===4)&&g.stateNode.containerInfo===c)return;g=g.return}for(;v!==null;){if(g=es(v),g===null)return;if(b=g.tag,b===5||b===6||b===26||b===27){l=h=g;continue e}v=v.parentNode}}l=l.return}rg(function(){var R=h,D=fd(a),P=[];e:{var N=kg.get(t);if(N!==void 0){var O=xl,ne=t;switch(t){case"keypress":if(kl(a)===0)break e;case"keydown":case"keyup":O=ZT;break;case"focusin":ne="focus",O=yd;break;case"focusout":ne="blur",O=yd;break;case"beforeblur":case"afterblur":O=yd;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":O=og;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":O=BT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":O=tw;break;case Ig:case Ng:case Og:O=FT;break;case Dg:O=iw;break;case"scroll":case"scrollend":O=zT;break;case"wheel":O=sw;break;case"copy":case"cut":case"paste":O=GT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":O=ug;break;case"toggle":case"beforetoggle":O=ow}var X=(r&4)!==0,Re=!X&&(t==="scroll"||t==="scrollend"),w=X?N!==null?N+"Capture":null:N;X=[];for(var T=R,C;T!==null;){var x=T;if(C=x.stateNode,x=x.tag,x!==5&&x!==26&&x!==27||C===null||w===null||(x=va(T,w),x!=null&&X.push(eo(T,x,C))),Re)break;T=T.return}0<X.length&&(N=new O(N,ne,null,a,D),P.push({event:N,listeners:X}))}}if((r&7)===0){e:{if(N=t==="mouseover"||t==="pointerover",O=t==="mouseout"||t==="pointerout",N&&a!==hd&&(ne=a.relatedTarget||a.fromElement)&&(es(ne)||ne[Jr]))break e;if((O||N)&&(N=D.window===D?D:(N=D.ownerDocument)?N.defaultView||N.parentWindow:window,O?(ne=a.relatedTarget||a.toElement,O=R,ne=ne?es(ne):null,ne!==null&&(Re=u(ne),X=ne.tag,ne!==Re||X!==5&&X!==27&&X!==6)&&(ne=null)):(O=null,ne=R),O!==ne)){if(X=og,x="onMouseLeave",w="onMouseEnter",T="mouse",(t==="pointerout"||t==="pointerover")&&(X=ug,x="onPointerLeave",w="onPointerEnter",T="pointer"),Re=O==null?N:_a(O),C=ne==null?N:_a(ne),N=new X(x,T+"leave",O,a,D),N.target=Re,N.relatedTarget=C,x=null,es(D)===R&&(X=new X(w,T+"enter",ne,a,D),X.target=C,X.relatedTarget=Re,x=X),Re=x,O&&ne)t:{for(X=O,w=ne,T=0,C=X;C;C=xs(C))T++;for(C=0,x=w;x;x=xs(x))C++;for(;0<T-C;)X=xs(X),T--;for(;0<C-T;)w=xs(w),C--;for(;T--;){if(X===w||w!==null&&X===w.alternate)break t;X=xs(X),w=xs(w)}X=null}else X=null;O!==null&&Zv(P,N,O,X,!1),ne!==null&&Re!==null&&Zv(P,Re,ne,X,!0)}}e:{if(N=R?_a(R):window,O=N.nodeName&&N.nodeName.toLowerCase(),O==="select"||O==="input"&&N.type==="file")var Y=_g;else if(mg(N))if(vg)Y=_w;else{Y=mw;var ce=pw}else O=N.nodeName,!O||O.toLowerCase()!=="input"||N.type!=="checkbox"&&N.type!=="radio"?R&&dd(R.elementType)&&(Y=_g):Y=gw;if(Y&&(Y=Y(t,R))){gg(P,Y,a,D);break e}ce&&ce(t,N,R),t==="focusout"&&R&&N.type==="number"&&R.memoizedProps.value!=null&&cd(N,"number",N.value)}switch(ce=R?_a(R):window,t){case"focusin":(mg(ce)||ce.contentEditable==="true")&&(cs=ce,Cd=R,Ra=null);break;case"focusout":Ra=Cd=cs=null;break;case"mousedown":Rd=!0;break;case"contextmenu":case"mouseup":case"dragend":Rd=!1,Rg(P,a,D);break;case"selectionchange":if(yw)break;case"keydown":case"keyup":Rg(P,a,D)}var Q;if(bd)e:{switch(t){case"compositionstart":var Z="onCompositionStart";break e;case"compositionend":Z="onCompositionEnd";break e;case"compositionupdate":Z="onCompositionUpdate";break e}Z=void 0}else us?fg(t,a)&&(Z="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Z="onCompositionStart");Z&&(cg&&a.locale!=="ko"&&(us||Z!=="onCompositionStart"?Z==="onCompositionEnd"&&us&&(Q=sg()):(wi=D,gd="value"in wi?wi.value:wi.textContent,us=!0)),ce=bu(R,Z),0<ce.length&&(Z=new lg(Z,t,null,a,D),P.push({event:Z,listeners:ce}),Q?Z.data=Q:(Q=pg(a),Q!==null&&(Z.data=Q)))),(Q=uw?cw(t,a):dw(t,a))&&(Z=bu(R,"onBeforeInput"),0<Z.length&&(ce=new lg("onBeforeInput","beforeinput",null,a,D),P.push({event:ce,listeners:Z}),ce.data=Q)),tC(P,t,R,a,D)}Xv(P,r)})}function eo(t,r,a){return{instance:t,listener:r,currentTarget:a}}function bu(t,r){for(var a=r+"Capture",l=[];t!==null;){var c=t,h=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||h===null||(c=va(t,a),c!=null&&l.unshift(eo(t,c,h)),c=va(t,r),c!=null&&l.push(eo(t,c,h))),t.tag===3)return l;t=t.return}return[]}function xs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Zv(t,r,a,l,c){for(var h=r._reactName,g=[];a!==null&&a!==l;){var v=a,b=v.alternate,R=v.stateNode;if(v=v.tag,b!==null&&b===l)break;v!==5&&v!==26&&v!==27||R===null||(b=R,c?(R=va(a,h),R!=null&&g.unshift(eo(a,R,b))):c||(R=va(a,h),R!=null&&g.push(eo(a,R,b)))),a=a.return}g.length!==0&&t.push({event:r,listeners:g})}var sC=/\r\n?/g,aC=/\u0000|\uFFFD/g;function Jv(t){return(typeof t=="string"?t:""+t).replace(sC,`
`).replace(aC,"")}function ey(t,r){return r=Jv(r),Jv(t)===r}function Su(){}function Ce(t,r,a,l,c,h){switch(a){case"children":typeof l=="string"?r==="body"||r==="textarea"&&l===""||as(t,l):(typeof l=="number"||typeof l=="bigint")&&r!=="body"&&as(t,""+l);break;case"className":Al(t,"class",l);break;case"tabIndex":Al(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Al(t,a,l);break;case"style":ng(t,l,h);break;case"data":if(r!=="object"){Al(t,"data",l);break}case"src":case"href":if(l===""&&(r!=="a"||a!=="href")){t.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=Ol(""+l),t.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(r!=="input"&&Ce(t,r,"name",c.name,c,null),Ce(t,r,"formEncType",c.formEncType,c,null),Ce(t,r,"formMethod",c.formMethod,c,null),Ce(t,r,"formTarget",c.formTarget,c,null)):(Ce(t,r,"encType",c.encType,c,null),Ce(t,r,"method",c.method,c,null),Ce(t,r,"target",c.target,c,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=Ol(""+l),t.setAttribute(a,l);break;case"onClick":l!=null&&(t.onclick=Su);break;case"onScroll":l!=null&&fe("scroll",t);break;case"onScrollEnd":l!=null&&fe("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(c.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}a=Ol(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""+l):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":l===!0?t.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,l):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(a,l):t.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(a):t.setAttribute(a,l);break;case"popover":fe("beforetoggle",t),fe("toggle",t),Rl(t,"popover",l);break;case"xlinkActuate":Yn(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Yn(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Yn(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Yn(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Yn(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Yn(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Yn(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Yn(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Yn(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Rl(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=LT.get(a)||a,Rl(t,a,l))}}function Kh(t,r,a,l,c,h){switch(a){case"style":ng(t,l,h);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(c.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof l=="string"?as(t,l):(typeof l=="number"||typeof l=="bigint")&&as(t,""+l);break;case"onScroll":l!=null&&fe("scroll",t);break;case"onScrollEnd":l!=null&&fe("scrollend",t);break;case"onClick":l!=null&&(t.onclick=Su);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Gm.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),r=a.slice(2,c?a.length-7:void 0),h=t[It]||null,h=h!=null?h[a]:null,typeof h=="function"&&t.removeEventListener(r,h,c),typeof l=="function")){typeof h!="function"&&h!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(r,l,c);break e}a in t?t[a]=l:l===!0?t.setAttribute(a,""):Rl(t,a,l)}}}function _t(t,r,a){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":fe("error",t),fe("load",t);var l=!1,c=!1,h;for(h in a)if(a.hasOwnProperty(h)){var g=a[h];if(g!=null)switch(h){case"src":l=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:Ce(t,r,h,g,a,null)}}c&&Ce(t,r,"srcSet",a.srcSet,a,null),l&&Ce(t,r,"src",a.src,a,null);return;case"input":fe("invalid",t);var v=h=g=c=null,b=null,R=null;for(l in a)if(a.hasOwnProperty(l)){var D=a[l];if(D!=null)switch(l){case"name":c=D;break;case"type":g=D;break;case"checked":b=D;break;case"defaultChecked":R=D;break;case"value":h=D;break;case"defaultValue":v=D;break;case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(s(137,r));break;default:Ce(t,r,l,D,a,null)}}Zm(t,h,v,b,R,g,c,!1),Il(t);return;case"select":fe("invalid",t),l=g=h=null;for(c in a)if(a.hasOwnProperty(c)&&(v=a[c],v!=null))switch(c){case"value":h=v;break;case"defaultValue":g=v;break;case"multiple":l=v;default:Ce(t,r,c,v,a,null)}r=h,a=g,t.multiple=!!l,r!=null?ss(t,!!l,r,!1):a!=null&&ss(t,!!l,a,!0);return;case"textarea":fe("invalid",t),h=c=l=null;for(g in a)if(a.hasOwnProperty(g)&&(v=a[g],v!=null))switch(g){case"value":l=v;break;case"defaultValue":c=v;break;case"children":h=v;break;case"dangerouslySetInnerHTML":if(v!=null)throw Error(s(91));break;default:Ce(t,r,g,v,a,null)}eg(t,l,c,h),Il(t);return;case"option":for(b in a)if(a.hasOwnProperty(b)&&(l=a[b],l!=null))switch(b){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Ce(t,r,b,l,a,null)}return;case"dialog":fe("beforetoggle",t),fe("toggle",t),fe("cancel",t),fe("close",t);break;case"iframe":case"object":fe("load",t);break;case"video":case"audio":for(l=0;l<Ja.length;l++)fe(Ja[l],t);break;case"image":fe("error",t),fe("load",t);break;case"details":fe("toggle",t);break;case"embed":case"source":case"link":fe("error",t),fe("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(R in a)if(a.hasOwnProperty(R)&&(l=a[R],l!=null))switch(R){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:Ce(t,r,R,l,a,null)}return;default:if(dd(r)){for(D in a)a.hasOwnProperty(D)&&(l=a[D],l!==void 0&&Kh(t,r,D,l,a,void 0));return}}for(v in a)a.hasOwnProperty(v)&&(l=a[v],l!=null&&Ce(t,r,v,l,a,null))}function oC(t,r,a,l){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,h=null,g=null,v=null,b=null,R=null,D=null;for(O in a){var P=a[O];if(a.hasOwnProperty(O)&&P!=null)switch(O){case"checked":break;case"value":break;case"defaultValue":b=P;default:l.hasOwnProperty(O)||Ce(t,r,O,null,l,P)}}for(var N in l){var O=l[N];if(P=a[N],l.hasOwnProperty(N)&&(O!=null||P!=null))switch(N){case"type":h=O;break;case"name":c=O;break;case"checked":R=O;break;case"defaultChecked":D=O;break;case"value":g=O;break;case"defaultValue":v=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(s(137,r));break;default:O!==P&&Ce(t,r,N,O,l,P)}}ud(t,g,v,b,R,D,h,c);return;case"select":O=g=v=N=null;for(h in a)if(b=a[h],a.hasOwnProperty(h)&&b!=null)switch(h){case"value":break;case"multiple":O=b;default:l.hasOwnProperty(h)||Ce(t,r,h,null,l,b)}for(c in l)if(h=l[c],b=a[c],l.hasOwnProperty(c)&&(h!=null||b!=null))switch(c){case"value":N=h;break;case"defaultValue":v=h;break;case"multiple":g=h;default:h!==b&&Ce(t,r,c,h,l,b)}r=v,a=g,l=O,N!=null?ss(t,!!a,N,!1):!!l!=!!a&&(r!=null?ss(t,!!a,r,!0):ss(t,!!a,a?[]:"",!1));return;case"textarea":O=N=null;for(v in a)if(c=a[v],a.hasOwnProperty(v)&&c!=null&&!l.hasOwnProperty(v))switch(v){case"value":break;case"children":break;default:Ce(t,r,v,null,l,c)}for(g in l)if(c=l[g],h=a[g],l.hasOwnProperty(g)&&(c!=null||h!=null))switch(g){case"value":N=c;break;case"defaultValue":O=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==h&&Ce(t,r,g,c,l,h)}Jm(t,N,O);return;case"option":for(var ne in a)if(N=a[ne],a.hasOwnProperty(ne)&&N!=null&&!l.hasOwnProperty(ne))switch(ne){case"selected":t.selected=!1;break;default:Ce(t,r,ne,null,l,N)}for(b in l)if(N=l[b],O=a[b],l.hasOwnProperty(b)&&N!==O&&(N!=null||O!=null))switch(b){case"selected":t.selected=N&&typeof N!="function"&&typeof N!="symbol";break;default:Ce(t,r,b,N,l,O)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var X in a)N=a[X],a.hasOwnProperty(X)&&N!=null&&!l.hasOwnProperty(X)&&Ce(t,r,X,null,l,N);for(R in l)if(N=l[R],O=a[R],l.hasOwnProperty(R)&&N!==O&&(N!=null||O!=null))switch(R){case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(s(137,r));break;default:Ce(t,r,R,N,l,O)}return;default:if(dd(r)){for(var Re in a)N=a[Re],a.hasOwnProperty(Re)&&N!==void 0&&!l.hasOwnProperty(Re)&&Kh(t,r,Re,void 0,l,N);for(D in l)N=l[D],O=a[D],!l.hasOwnProperty(D)||N===O||N===void 0&&O===void 0||Kh(t,r,D,N,l,O);return}}for(var w in a)N=a[w],a.hasOwnProperty(w)&&N!=null&&!l.hasOwnProperty(w)&&Ce(t,r,w,null,l,N);for(P in l)N=l[P],O=a[P],!l.hasOwnProperty(P)||N===O||N==null&&O==null||Ce(t,r,P,N,l,O)}var Xh=null,$h=null;function Tu(t){return t.nodeType===9?t:t.ownerDocument}function ty(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ny(t,r){if(t===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&r==="foreignObject"?0:t}function Zh(t,r){return t==="textarea"||t==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Jh=null;function lC(){var t=window.event;return t&&t.type==="popstate"?t===Jh?!1:(Jh=t,!0):(Jh=null,!1)}var iy=typeof setTimeout=="function"?setTimeout:void 0,uC=typeof clearTimeout=="function"?clearTimeout:void 0,ry=typeof Promise=="function"?Promise:void 0,cC=typeof queueMicrotask=="function"?queueMicrotask:typeof ry<"u"?function(t){return ry.resolve(null).then(t).catch(dC)}:iy;function dC(t){setTimeout(function(){throw t})}function Bi(t){return t==="head"}function sy(t,r){var a=r,l=0,c=0;do{var h=a.nextSibling;if(t.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(0<l&&8>l){a=l;var g=t.ownerDocument;if(a&1&&to(g.documentElement),a&2&&to(g.body),a&4)for(a=g.head,to(a),g=a.firstChild;g;){var v=g.nextSibling,b=g.nodeName;g[ga]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&g.rel.toLowerCase()==="stylesheet"||a.removeChild(g),g=v}}if(c===0){t.removeChild(h),uo(r);return}c--}else a==="$"||a==="$?"||a==="$!"?c++:l=a.charCodeAt(0)-48;else l=0;a=h}while(a);uo(r)}function ef(t){var r=t.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var a=r;switch(r=r.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ef(a),sd(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function hC(t,r,a,l){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==r.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[ga])switch(r){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(h=t.getAttribute("rel"),h==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(h!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(h=t.getAttribute("src"),(h!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&h&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(r==="input"&&t.type==="hidden"){var h=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===h)return t}else return t;if(t=bn(t.nextSibling),t===null)break}return null}function fC(t,r,a){if(r==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=bn(t.nextSibling),t===null))return null;return t}function tf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function pC(t,r){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")r();else{var l=function(){r(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function bn(t){for(;t!=null;t=t.nextSibling){var r=t.nodeType;if(r===1||r===3)break;if(r===8){if(r=t.data,r==="$"||r==="$!"||r==="$?"||r==="F!"||r==="F")break;if(r==="/$")return null}}return t}var nf=null;function ay(t){t=t.previousSibling;for(var r=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return t;r--}else a==="/$"&&r++}t=t.previousSibling}return null}function oy(t,r,a){switch(r=Tu(a),t){case"html":if(t=r.documentElement,!t)throw Error(s(452));return t;case"head":if(t=r.head,!t)throw Error(s(453));return t;case"body":if(t=r.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function to(t){for(var r=t.attributes;r.length;)t.removeAttributeNode(r[0]);sd(t)}var dn=new Map,ly=new Set;function wu(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ai=j.d;j.d={f:mC,r:gC,D:_C,C:vC,L:yC,m:EC,X:SC,S:bC,M:TC};function mC(){var t=ai.f(),r=mu();return t||r}function gC(t){var r=ts(t);r!==null&&r.tag===5&&r.type==="form"?I_(r):ai.r(t)}var Ps=typeof document>"u"?null:document;function uy(t,r,a){var l=Ps;if(l&&typeof r=="string"&&r){var c=rn(r);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),ly.has(c)||(ly.add(c),t={rel:t,crossOrigin:a,href:r},l.querySelector(c)===null&&(r=l.createElement("link"),_t(r,"link",t),rt(r),l.head.appendChild(r)))}}function _C(t){ai.D(t),uy("dns-prefetch",t,null)}function vC(t,r){ai.C(t,r),uy("preconnect",t,r)}function yC(t,r,a){ai.L(t,r,a);var l=Ps;if(l&&t&&r){var c='link[rel="preload"][as="'+rn(r)+'"]';r==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+rn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+rn(a.imageSizes)+'"]')):c+='[href="'+rn(t)+'"]';var h=c;switch(r){case"style":h=Ls(t);break;case"script":h=Us(t)}dn.has(h)||(t=_({rel:"preload",href:r==="image"&&a&&a.imageSrcSet?void 0:t,as:r},a),dn.set(h,t),l.querySelector(c)!==null||r==="style"&&l.querySelector(no(h))||r==="script"&&l.querySelector(io(h))||(r=l.createElement("link"),_t(r,"link",t),rt(r),l.head.appendChild(r)))}}function EC(t,r){ai.m(t,r);var a=Ps;if(a&&t){var l=r&&typeof r.as=="string"?r.as:"script",c='link[rel="modulepreload"][as="'+rn(l)+'"][href="'+rn(t)+'"]',h=c;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=Us(t)}if(!dn.has(h)&&(t=_({rel:"modulepreload",href:t},r),dn.set(h,t),a.querySelector(c)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(io(h)))return}l=a.createElement("link"),_t(l,"link",t),rt(l),a.head.appendChild(l)}}}function bC(t,r,a){ai.S(t,r,a);var l=Ps;if(l&&t){var c=ns(l).hoistableStyles,h=Ls(t);r=r||"default";var g=c.get(h);if(!g){var v={loading:0,preload:null};if(g=l.querySelector(no(h)))v.loading=5;else{t=_({rel:"stylesheet",href:t,"data-precedence":r},a),(a=dn.get(h))&&rf(t,a);var b=g=l.createElement("link");rt(b),_t(b,"link",t),b._p=new Promise(function(R,D){b.onload=R,b.onerror=D}),b.addEventListener("load",function(){v.loading|=1}),b.addEventListener("error",function(){v.loading|=2}),v.loading|=4,Cu(g,r,l)}g={type:"stylesheet",instance:g,count:1,state:v},c.set(h,g)}}}function SC(t,r){ai.X(t,r);var a=Ps;if(a&&t){var l=ns(a).hoistableScripts,c=Us(t),h=l.get(c);h||(h=a.querySelector(io(c)),h||(t=_({src:t,async:!0},r),(r=dn.get(c))&&sf(t,r),h=a.createElement("script"),rt(h),_t(h,"link",t),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},l.set(c,h))}}function TC(t,r){ai.M(t,r);var a=Ps;if(a&&t){var l=ns(a).hoistableScripts,c=Us(t),h=l.get(c);h||(h=a.querySelector(io(c)),h||(t=_({src:t,async:!0,type:"module"},r),(r=dn.get(c))&&sf(t,r),h=a.createElement("script"),rt(h),_t(h,"link",t),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},l.set(c,h))}}function cy(t,r,a,l){var c=(c=re.current)?wu(c):null;if(!c)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(r=Ls(a.href),a=ns(c).hoistableStyles,l=a.get(r),l||(l={type:"style",instance:null,count:0,state:null},a.set(r,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Ls(a.href);var h=ns(c).hoistableStyles,g=h.get(t);if(g||(c=c.ownerDocument||c,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(t,g),(h=c.querySelector(no(t)))&&!h._p&&(g.instance=h,g.state.loading=5),dn.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},dn.set(t,a),h||wC(c,t,a,g.state))),r&&l===null)throw Error(s(528,""));return g}if(r&&l!==null)throw Error(s(529,""));return null;case"script":return r=a.async,a=a.src,typeof a=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=Us(a),a=ns(c).hoistableScripts,l=a.get(r),l||(l={type:"script",instance:null,count:0,state:null},a.set(r,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Ls(t){return'href="'+rn(t)+'"'}function no(t){return'link[rel="stylesheet"]['+t+"]"}function dy(t){return _({},t,{"data-precedence":t.precedence,precedence:null})}function wC(t,r,a,l){t.querySelector('link[rel="preload"][as="style"]['+r+"]")?l.loading=1:(r=t.createElement("link"),l.preload=r,r.addEventListener("load",function(){return l.loading|=1}),r.addEventListener("error",function(){return l.loading|=2}),_t(r,"link",a),rt(r),t.head.appendChild(r))}function Us(t){return'[src="'+rn(t)+'"]'}function io(t){return"script[async]"+t}function hy(t,r,a){if(r.count++,r.instance===null)switch(r.type){case"style":var l=t.querySelector('style[data-href~="'+rn(a.href)+'"]');if(l)return r.instance=l,rt(l),l;var c=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),rt(l),_t(l,"style",c),Cu(l,a.precedence,t),r.instance=l;case"stylesheet":c=Ls(a.href);var h=t.querySelector(no(c));if(h)return r.state.loading|=4,r.instance=h,rt(h),h;l=dy(a),(c=dn.get(c))&&rf(l,c),h=(t.ownerDocument||t).createElement("link"),rt(h);var g=h;return g._p=new Promise(function(v,b){g.onload=v,g.onerror=b}),_t(h,"link",l),r.state.loading|=4,Cu(h,a.precedence,t),r.instance=h;case"script":return h=Us(a.src),(c=t.querySelector(io(h)))?(r.instance=c,rt(c),c):(l=a,(c=dn.get(h))&&(l=_({},a),sf(l,c)),t=t.ownerDocument||t,c=t.createElement("script"),rt(c),_t(c,"link",l),t.head.appendChild(c),r.instance=c);case"void":return null;default:throw Error(s(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(l=r.instance,r.state.loading|=4,Cu(l,a.precedence,t));return r.instance}function Cu(t,r,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=l.length?l[l.length-1]:null,h=c,g=0;g<l.length;g++){var v=l[g];if(v.dataset.precedence===r)h=v;else if(h!==c)break}h?h.parentNode.insertBefore(t,h.nextSibling):(r=a.nodeType===9?a.head:a,r.insertBefore(t,r.firstChild))}function rf(t,r){t.crossOrigin==null&&(t.crossOrigin=r.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=r.referrerPolicy),t.title==null&&(t.title=r.title)}function sf(t,r){t.crossOrigin==null&&(t.crossOrigin=r.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=r.referrerPolicy),t.integrity==null&&(t.integrity=r.integrity)}var Ru=null;function fy(t,r,a){if(Ru===null){var l=new Map,c=Ru=new Map;c.set(a,l)}else c=Ru,l=c.get(a),l||(l=new Map,c.set(a,l));if(l.has(t))return l;for(l.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var h=a[c];if(!(h[ga]||h[St]||t==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var g=h.getAttribute(r)||"";g=t+g;var v=l.get(g);v?v.push(h):l.set(g,[h])}}return l}function py(t,r,a){t=t.ownerDocument||t,t.head.insertBefore(a,r==="title"?t.querySelector("head > title"):null)}function CC(t,r,a){if(a===1||r.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;switch(r.rel){case"stylesheet":return t=r.disabled,typeof r.precedence=="string"&&t==null;default:return!0}case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function my(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var ro=null;function RC(){}function AC(t,r,a){if(ro===null)throw Error(s(475));var l=ro;if(r.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var c=Ls(a.href),h=t.querySelector(no(c));if(h){t=h._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(l.count++,l=Au.bind(l),t.then(l,l)),r.state.loading|=4,r.instance=h,rt(h);return}h=t.ownerDocument||t,a=dy(a),(c=dn.get(c))&&rf(a,c),h=h.createElement("link"),rt(h);var g=h;g._p=new Promise(function(v,b){g.onload=v,g.onerror=b}),_t(h,"link",a),r.instance=h}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(r,t),(t=r.state.preload)&&(r.state.loading&3)===0&&(l.count++,r=Au.bind(l),t.addEventListener("load",r),t.addEventListener("error",r))}}function IC(){if(ro===null)throw Error(s(475));var t=ro;return t.stylesheets&&t.count===0&&af(t,t.stylesheets),0<t.count?function(r){var a=setTimeout(function(){if(t.stylesheets&&af(t,t.stylesheets),t.unsuspend){var l=t.unsuspend;t.unsuspend=null,l()}},6e4);return t.unsuspend=r,function(){t.unsuspend=null,clearTimeout(a)}}:null}function Au(){if(this.count--,this.count===0){if(this.stylesheets)af(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Iu=null;function af(t,r){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Iu=new Map,r.forEach(NC,t),Iu=null,Au.call(t))}function NC(t,r){if(!(r.state.loading&4)){var a=Iu.get(t);if(a)var l=a.get(null);else{a=new Map,Iu.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<c.length;h++){var g=c[h];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),l=g)}l&&a.set(null,l)}c=r.instance,g=c.getAttribute("data-precedence"),h=a.get(g)||l,h===l&&a.set(null,c),a.set(g,c),this.count++,l=Au.bind(this),c.addEventListener("load",l),c.addEventListener("error",l),h?h.parentNode.insertBefore(c,h.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),r.state.loading|=4}}var so={$$typeof:q,Provider:null,Consumer:null,_currentValue:ee,_currentValue2:ee,_threadCount:0};function OC(t,r,a,l,c,h,g,v){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=td(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=td(0),this.hiddenUpdates=td(null),this.identifierPrefix=l,this.onUncaughtError=c,this.onCaughtError=h,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=v,this.incompleteTransitions=new Map}function gy(t,r,a,l,c,h,g,v,b,R,D,P){return t=new OC(t,r,a,g,v,b,R,P),r=1,h===!0&&(r|=24),h=jt(3,null,null,r),t.current=h,h.stateNode=t,r=Bd(),r.refCount++,t.pooledCache=r,r.refCount++,h.memoizedState={element:l,isDehydrated:a,cache:r},jd(h),t}function _y(t){return t?(t=ps,t):ps}function vy(t,r,a,l,c,h){c=_y(c),l.context===null?l.context=c:l.pendingContext=c,l=Ai(r),l.payload={element:a},h=h===void 0?null:h,h!==null&&(l.callback=h),a=Ii(t,l,r),a!==null&&(Kt(a,t,r),Pa(a,t,r))}function yy(t,r){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<r?a:r}}function of(t,r){yy(t,r),(t=t.alternate)&&yy(t,r)}function Ey(t){if(t.tag===13){var r=fs(t,67108864);r!==null&&Kt(r,t,67108864),of(t,67108864)}}var Nu=!0;function DC(t,r,a,l){var c=k.T;k.T=null;var h=j.p;try{j.p=2,lf(t,r,a,l)}finally{j.p=h,k.T=c}}function kC(t,r,a,l){var c=k.T;k.T=null;var h=j.p;try{j.p=8,lf(t,r,a,l)}finally{j.p=h,k.T=c}}function lf(t,r,a,l){if(Nu){var c=uf(l);if(c===null)Qh(t,r,l,Ou,a),Sy(t,l);else if(xC(c,t,r,a,l))l.stopPropagation();else if(Sy(t,l),r&4&&-1<MC.indexOf(t)){for(;c!==null;){var h=ts(c);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var g=mr(h.pendingLanes);if(g!==0){var v=h;for(v.pendingLanes|=2,v.entangledLanes|=2;g;){var b=1<<31-qt(g);v.entanglements[1]|=b,g&=~b}xn(h),(Ee&6)===0&&(fu=Nn()+500,Za(0))}}break;case 13:v=fs(h,2),v!==null&&Kt(v,h,2),mu(),of(h,2)}if(h=uf(l),h===null&&Qh(t,r,l,Ou,a),h===c)break;c=h}c!==null&&l.stopPropagation()}else Qh(t,r,l,null,a)}}function uf(t){return t=fd(t),cf(t)}var Ou=null;function cf(t){if(Ou=null,t=es(t),t!==null){var r=u(t);if(r===null)t=null;else{var a=r.tag;if(a===13){if(t=d(r),t!==null)return t;t=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;t=null}else r!==t&&(t=null)}}return Ou=t,null}function by(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(vT()){case Pm:return 2;case Lm:return 8;case Sl:case yT:return 32;case Um:return 268435456;default:return 32}default:return 32}}var df=!1,Vi=null,qi=null,Fi=null,ao=new Map,oo=new Map,ji=[],MC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Sy(t,r){switch(t){case"focusin":case"focusout":Vi=null;break;case"dragenter":case"dragleave":qi=null;break;case"mouseover":case"mouseout":Fi=null;break;case"pointerover":case"pointerout":ao.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":oo.delete(r.pointerId)}}function lo(t,r,a,l,c,h){return t===null||t.nativeEvent!==h?(t={blockedOn:r,domEventName:a,eventSystemFlags:l,nativeEvent:h,targetContainers:[c]},r!==null&&(r=ts(r),r!==null&&Ey(r)),t):(t.eventSystemFlags|=l,r=t.targetContainers,c!==null&&r.indexOf(c)===-1&&r.push(c),t)}function xC(t,r,a,l,c){switch(r){case"focusin":return Vi=lo(Vi,t,r,a,l,c),!0;case"dragenter":return qi=lo(qi,t,r,a,l,c),!0;case"mouseover":return Fi=lo(Fi,t,r,a,l,c),!0;case"pointerover":var h=c.pointerId;return ao.set(h,lo(ao.get(h)||null,t,r,a,l,c)),!0;case"gotpointercapture":return h=c.pointerId,oo.set(h,lo(oo.get(h)||null,t,r,a,l,c)),!0}return!1}function Ty(t){var r=es(t.target);if(r!==null){var a=u(r);if(a!==null){if(r=a.tag,r===13){if(r=d(a),r!==null){t.blockedOn=r,AT(t.priority,function(){if(a.tag===13){var l=Qt();l=nd(l);var c=fs(a,l);c!==null&&Kt(c,a,l),of(a,l)}});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Du(t){if(t.blockedOn!==null)return!1;for(var r=t.targetContainers;0<r.length;){var a=uf(t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);hd=l,a.target.dispatchEvent(l),hd=null}else return r=ts(a),r!==null&&Ey(r),t.blockedOn=a,!1;r.shift()}return!0}function wy(t,r,a){Du(t)&&a.delete(r)}function PC(){df=!1,Vi!==null&&Du(Vi)&&(Vi=null),qi!==null&&Du(qi)&&(qi=null),Fi!==null&&Du(Fi)&&(Fi=null),ao.forEach(wy),oo.forEach(wy)}function ku(t,r){t.blockedOn===r&&(t.blockedOn=null,df||(df=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,PC)))}var Mu=null;function Cy(t){Mu!==t&&(Mu=t,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){Mu===t&&(Mu=null);for(var r=0;r<t.length;r+=3){var a=t[r],l=t[r+1],c=t[r+2];if(typeof l!="function"){if(cf(l||a)===null)continue;break}var h=ts(a);h!==null&&(t.splice(r,3),r-=3,uh(h,{pending:!0,data:c,method:a.method,action:l},l,c))}}))}function uo(t){function r(b){return ku(b,t)}Vi!==null&&ku(Vi,t),qi!==null&&ku(qi,t),Fi!==null&&ku(Fi,t),ao.forEach(r),oo.forEach(r);for(var a=0;a<ji.length;a++){var l=ji[a];l.blockedOn===t&&(l.blockedOn=null)}for(;0<ji.length&&(a=ji[0],a.blockedOn===null);)Ty(a),a.blockedOn===null&&ji.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var c=a[l],h=a[l+1],g=c[It]||null;if(typeof h=="function")g||Cy(a);else if(g){var v=null;if(h&&h.hasAttribute("formAction")){if(c=h,g=h[It]||null)v=g.formAction;else if(cf(c)!==null)continue}else v=g.action;typeof v=="function"?a[l+1]=v:(a.splice(l,3),l-=3),Cy(a)}}}function hf(t){this._internalRoot=t}xu.prototype.render=hf.prototype.render=function(t){var r=this._internalRoot;if(r===null)throw Error(s(409));var a=r.current,l=Qt();vy(a,l,t,r,null,null)},xu.prototype.unmount=hf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var r=t.containerInfo;vy(t.current,2,null,t,null,null),mu(),r[Jr]=null}};function xu(t){this._internalRoot=t}xu.prototype.unstable_scheduleHydration=function(t){if(t){var r=qm();t={blockedOn:null,target:t,priority:r};for(var a=0;a<ji.length&&r!==0&&r<ji[a].priority;a++);ji.splice(a,0,t),a===0&&Ty(t)}};var Ry=e.version;if(Ry!=="19.1.0")throw Error(s(527,Ry,"19.1.0"));j.findDOMNode=function(t){var r=t._reactInternals;if(r===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(r),t=t!==null?m(t):null,t=t===null?null:t.stateNode,t};var LC={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:k,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pu.isDisabled&&Pu.supportsFiber)try{fa=Pu.inject(LC),Vt=Pu}catch{}}return ho.createRoot=function(t,r){if(!o(t))throw Error(s(299));var a=!1,l="",c=q_,h=F_,g=j_,v=null;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(l=r.identifierPrefix),r.onUncaughtError!==void 0&&(c=r.onUncaughtError),r.onCaughtError!==void 0&&(h=r.onCaughtError),r.onRecoverableError!==void 0&&(g=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(v=r.unstable_transitionCallbacks)),r=gy(t,1,!1,null,null,a,l,c,h,g,v,null),t[Jr]=r.current,Wh(t),new hf(r)},ho.hydrateRoot=function(t,r,a){if(!o(t))throw Error(s(299));var l=!1,c="",h=q_,g=F_,v=j_,b=null,R=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(v=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(b=a.unstable_transitionCallbacks),a.formState!==void 0&&(R=a.formState)),r=gy(t,1,!0,r,a??null,l,c,h,g,v,b,R),r.context=_y(null),a=r.current,l=Qt(),l=nd(l),c=Ai(l),c.callback=null,Ii(a,c,l),a=l,r.current.lanes=a,ma(r,a),xn(r),t[Jr]=r.current,Wh(t),new xu(r)},ho.version="19.1.0",ho}var Ly;function WC(){if(Ly)return mf.exports;Ly=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),mf.exports=YC(),mf.exports}var QC=WC();const KC="modulepreload",XC=function(i){return"/"+i},Uy={},Jo=function(e,n,s){let o=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),f=(d==null?void 0:d.nonce)||(d==null?void 0:d.getAttribute("nonce"));o=Promise.allSettled(n.map(p=>{if(p=XC(p),p in Uy)return;Uy[p]=!0;const m=p.endsWith(".css"),_=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${_}`))return;const y=document.createElement("link");if(y.rel=m?"stylesheet":KC,m||(y.as="script"),y.crossOrigin="",y.href=p,f&&y.setAttribute("nonce",f),document.head.appendChild(y),m)return new Promise((E,I)=>{y.addEventListener("load",E),y.addEventListener("error",()=>I(new Error(`Unable to preload CSS for ${p}`)))})}))}function u(d){const f=new Event("vite:preloadError",{cancelable:!0});if(f.payload=d,window.dispatchEvent(f),!f.defaultPrevented)throw d}return o.then(d=>{for(const f of d||[])f.status==="rejected"&&u(f.reason);return e().catch(u)})};var fo={},zy;function $C(){if(zy)return fo;zy=1,Object.defineProperty(fo,"__esModule",{value:!0}),fo.parse=d,fo.serialize=m;const i=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,n=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,s=/^[\u0020-\u003A\u003D-\u007E]*$/,o=Object.prototype.toString,u=(()=>{const E=function(){};return E.prototype=Object.create(null),E})();function d(E,I){const A=new u,B=E.length;if(B<2)return A;const H=(I==null?void 0:I.decode)||_;let z=0;do{const W=E.indexOf("=",z);if(W===-1)break;const q=E.indexOf(";",z),ue=q===-1?B:q;if(W>ue){z=E.lastIndexOf(";",W-1)+1;continue}const $=f(E,z,W),xe=p(E,W,$),Me=E.slice($,xe);if(A[Me]===void 0){let He=f(E,W+1,ue),Te=p(E,ue,He);const pt=H(E.slice(He,Te));A[Me]=pt}z=ue+1}while(z<B);return A}function f(E,I,A){do{const B=E.charCodeAt(I);if(B!==32&&B!==9)return I}while(++I<A);return A}function p(E,I,A){for(;I>A;){const B=E.charCodeAt(--I);if(B!==32&&B!==9)return I+1}return A}function m(E,I,A){const B=(A==null?void 0:A.encode)||encodeURIComponent;if(!i.test(E))throw new TypeError(`argument name is invalid: ${E}`);const H=B(I);if(!e.test(H))throw new TypeError(`argument val is invalid: ${I}`);let z=E+"="+H;if(!A)return z;if(A.maxAge!==void 0){if(!Number.isInteger(A.maxAge))throw new TypeError(`option maxAge is invalid: ${A.maxAge}`);z+="; Max-Age="+A.maxAge}if(A.domain){if(!n.test(A.domain))throw new TypeError(`option domain is invalid: ${A.domain}`);z+="; Domain="+A.domain}if(A.path){if(!s.test(A.path))throw new TypeError(`option path is invalid: ${A.path}`);z+="; Path="+A.path}if(A.expires){if(!y(A.expires)||!Number.isFinite(A.expires.valueOf()))throw new TypeError(`option expires is invalid: ${A.expires}`);z+="; Expires="+A.expires.toUTCString()}if(A.httpOnly&&(z+="; HttpOnly"),A.secure&&(z+="; Secure"),A.partitioned&&(z+="; Partitioned"),A.priority)switch(typeof A.priority=="string"?A.priority.toLowerCase():void 0){case"low":z+="; Priority=Low";break;case"medium":z+="; Priority=Medium";break;case"high":z+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${A.priority}`)}if(A.sameSite)switch(typeof A.sameSite=="string"?A.sameSite.toLowerCase():A.sameSite){case!0:case"strict":z+="; SameSite=Strict";break;case"lax":z+="; SameSite=Lax";break;case"none":z+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${A.sameSite}`)}return z}function _(E){if(E.indexOf("%")===-1)return E;try{return decodeURIComponent(E)}catch{return E}}function y(E){return o.call(E)==="[object Date]"}return fo}$C();/**
 * react-router v7.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Hy="popstate";function ZC(i={}){function e(s,o){let{pathname:u,search:d,hash:f}=s.location;return Hf("",{pathname:u,search:d,hash:f},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(s,o){return typeof o=="string"?o:xo(o)}return eR(e,n,null,i)}function qe(i,e){if(i===!1||i===null||typeof i>"u")throw new Error(e)}function Vn(i,e){if(!i){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function JC(){return Math.random().toString(36).substring(2,10)}function By(i,e){return{usr:i.state,key:i.key,idx:e}}function Hf(i,e,n=null,s){return{pathname:typeof i=="string"?i:i.pathname,search:"",hash:"",...typeof e=="string"?ia(e):e,state:n,key:e&&e.key||s||JC()}}function xo({pathname:i="/",search:e="",hash:n=""}){return e&&e!=="?"&&(i+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(i+=n.charAt(0)==="#"?n:"#"+n),i}function ia(i){let e={};if(i){let n=i.indexOf("#");n>=0&&(e.hash=i.substring(n),i=i.substring(0,n));let s=i.indexOf("?");s>=0&&(e.search=i.substring(s),i=i.substring(0,s)),i&&(e.pathname=i)}return e}function eR(i,e,n,s={}){let{window:o=document.defaultView,v5Compat:u=!1}=s,d=o.history,f="POP",p=null,m=_();m==null&&(m=0,d.replaceState({...d.state,idx:m},""));function _(){return(d.state||{idx:null}).idx}function y(){f="POP";let H=_(),z=H==null?null:H-m;m=H,p&&p({action:f,location:B.location,delta:z})}function E(H,z){f="PUSH";let W=Hf(B.location,H,z);m=_()+1;let q=By(W,m),ue=B.createHref(W);try{d.pushState(q,"",ue)}catch($){if($ instanceof DOMException&&$.name==="DataCloneError")throw $;o.location.assign(ue)}u&&p&&p({action:f,location:B.location,delta:1})}function I(H,z){f="REPLACE";let W=Hf(B.location,H,z);m=_();let q=By(W,m),ue=B.createHref(W);d.replaceState(q,"",ue),u&&p&&p({action:f,location:B.location,delta:0})}function A(H){let z=o.location.origin!=="null"?o.location.origin:o.location.href,W=typeof H=="string"?H:xo(H);return W=W.replace(/ $/,"%20"),qe(z,`No window.location.(origin|href) available to create URL for href: ${W}`),new URL(W,z)}let B={get action(){return f},get location(){return i(o,d)},listen(H){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(Hy,y),p=H,()=>{o.removeEventListener(Hy,y),p=null}},createHref(H){return e(o,H)},createURL:A,encodeLocation(H){let z=A(H);return{pathname:z.pathname,search:z.search,hash:z.hash}},push:E,replace:I,go(H){return d.go(H)}};return B}function cb(i,e,n="/"){return tR(i,e,n,!1)}function tR(i,e,n,s){let o=typeof e=="string"?ia(e):e,u=fi(o.pathname||"/",n);if(u==null)return null;let d=db(i);nR(d);let f=null;for(let p=0;f==null&&p<d.length;++p){let m=fR(u);f=dR(d[p],m,s)}return f}function db(i,e=[],n=[],s=""){let o=(u,d,f)=>{let p={relativePath:f===void 0?u.path||"":f,caseSensitive:u.caseSensitive===!0,childrenIndex:d,route:u};p.relativePath.startsWith("/")&&(qe(p.relativePath.startsWith(s),`Absolute route path "${p.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(s.length));let m=ci([s,p.relativePath]),_=n.concat(p);u.children&&u.children.length>0&&(qe(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${m}".`),db(u.children,e,_,m)),!(u.path==null&&!u.index)&&e.push({path:m,score:uR(m,u.index),routesMeta:_})};return i.forEach((u,d)=>{var f;if(u.path===""||!((f=u.path)!=null&&f.includes("?")))o(u,d);else for(let p of hb(u.path))o(u,d,p)}),e}function hb(i){let e=i.split("/");if(e.length===0)return[];let[n,...s]=e,o=n.endsWith("?"),u=n.replace(/\?$/,"");if(s.length===0)return o?[u,""]:[u];let d=hb(s.join("/")),f=[];return f.push(...d.map(p=>p===""?u:[u,p].join("/"))),o&&f.push(...d),f.map(p=>i.startsWith("/")&&p===""?"/":p)}function nR(i){i.sort((e,n)=>e.score!==n.score?n.score-e.score:cR(e.routesMeta.map(s=>s.childrenIndex),n.routesMeta.map(s=>s.childrenIndex)))}var iR=/^:[\w-]+$/,rR=3,sR=2,aR=1,oR=10,lR=-2,Vy=i=>i==="*";function uR(i,e){let n=i.split("/"),s=n.length;return n.some(Vy)&&(s+=lR),e&&(s+=sR),n.filter(o=>!Vy(o)).reduce((o,u)=>o+(iR.test(u)?rR:u===""?aR:oR),s)}function cR(i,e){return i.length===e.length&&i.slice(0,-1).every((s,o)=>s===e[o])?i[i.length-1]-e[e.length-1]:0}function dR(i,e,n=!1){let{routesMeta:s}=i,o={},u="/",d=[];for(let f=0;f<s.length;++f){let p=s[f],m=f===s.length-1,_=u==="/"?e:e.slice(u.length)||"/",y=Yu({path:p.relativePath,caseSensitive:p.caseSensitive,end:m},_),E=p.route;if(!y&&m&&n&&!s[s.length-1].route.index&&(y=Yu({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},_)),!y)return null;Object.assign(o,y.params),d.push({params:o,pathname:ci([u,y.pathname]),pathnameBase:_R(ci([u,y.pathnameBase])),route:E}),y.pathnameBase!=="/"&&(u=ci([u,y.pathnameBase]))}return d}function Yu(i,e){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[n,s]=hR(i.path,i.caseSensitive,i.end),o=e.match(n);if(!o)return null;let u=o[0],d=u.replace(/(.)\/+$/,"$1"),f=o.slice(1);return{params:s.reduce((m,{paramName:_,isOptional:y},E)=>{if(_==="*"){let A=f[E]||"";d=u.slice(0,u.length-A.length).replace(/(.)\/+$/,"$1")}const I=f[E];return y&&!I?m[_]=void 0:m[_]=(I||"").replace(/%2F/g,"/"),m},{}),pathname:u,pathnameBase:d,pattern:i}}function hR(i,e=!1,n=!0){Vn(i==="*"||!i.endsWith("*")||i.endsWith("/*"),`Route path "${i}" will be treated as if it were "${i.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/,"/*")}".`);let s=[],o="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,f,p)=>(s.push({paramName:f,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return i.endsWith("*")?(s.push({paramName:"*"}),o+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":i!==""&&i!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),s]}function fR(i){try{return i.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Vn(!1,`The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),i}}function fi(i,e){if(e==="/")return i;if(!i.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,s=i.charAt(n);return s&&s!=="/"?null:i.slice(n)||"/"}function pR(i,e="/"){let{pathname:n,search:s="",hash:o=""}=typeof i=="string"?ia(i):i;return{pathname:n?n.startsWith("/")?n:mR(n,e):e,search:vR(s),hash:yR(o)}}function mR(i,e){let n=e.replace(/\/+$/,"").split("/");return i.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function yf(i,e,n,s){return`Cannot include a '${i}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function gR(i){return i.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function fb(i){let e=gR(i);return e.map((n,s)=>s===e.length-1?n.pathname:n.pathnameBase)}function pb(i,e,n,s=!1){let o;typeof i=="string"?o=ia(i):(o={...i},qe(!o.pathname||!o.pathname.includes("?"),yf("?","pathname","search",o)),qe(!o.pathname||!o.pathname.includes("#"),yf("#","pathname","hash",o)),qe(!o.search||!o.search.includes("#"),yf("#","search","hash",o)));let u=i===""||o.pathname==="",d=u?"/":o.pathname,f;if(d==null)f=n;else{let y=e.length-1;if(!s&&d.startsWith("..")){let E=d.split("/");for(;E[0]==="..";)E.shift(),y-=1;o.pathname=E.join("/")}f=y>=0?e[y]:"/"}let p=pR(o,f),m=d&&d!=="/"&&d.endsWith("/"),_=(u||d===".")&&n.endsWith("/");return!p.pathname.endsWith("/")&&(m||_)&&(p.pathname+="/"),p}var ci=i=>i.join("/").replace(/\/\/+/g,"/"),_R=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),vR=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,yR=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i;function ER(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}var mb=["POST","PUT","PATCH","DELETE"];new Set(mb);var bR=["GET",...mb];new Set(bR);var ra=M.createContext(null);ra.displayName="DataRouter";var _c=M.createContext(null);_c.displayName="DataRouterState";var gb=M.createContext({isTransitioning:!1});gb.displayName="ViewTransition";var SR=M.createContext(new Map);SR.displayName="Fetchers";var TR=M.createContext(null);TR.displayName="Await";var Gn=M.createContext(null);Gn.displayName="Navigation";var el=M.createContext(null);el.displayName="Location";var _i=M.createContext({outlet:null,matches:[],isDataRoute:!1});_i.displayName="Route";var Ep=M.createContext(null);Ep.displayName="RouteError";function wR(i,{relative:e}={}){qe(tl(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:s}=M.useContext(Gn),{hash:o,pathname:u,search:d}=nl(i,{relative:e}),f=u;return n!=="/"&&(f=u==="/"?n:ci([n,u])),s.createHref({pathname:f,search:d,hash:o})}function tl(){return M.useContext(el)!=null}function ur(){return qe(tl(),"useLocation() may be used only in the context of a <Router> component."),M.useContext(el).location}var _b="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function vb(i){M.useContext(Gn).static||M.useLayoutEffect(i)}function yb(){let{isDataRoute:i}=M.useContext(_i);return i?UR():CR()}function CR(){qe(tl(),"useNavigate() may be used only in the context of a <Router> component.");let i=M.useContext(ra),{basename:e,navigator:n}=M.useContext(Gn),{matches:s}=M.useContext(_i),{pathname:o}=ur(),u=JSON.stringify(fb(s)),d=M.useRef(!1);return vb(()=>{d.current=!0}),M.useCallback((p,m={})=>{if(Vn(d.current,_b),!d.current)return;if(typeof p=="number"){n.go(p);return}let _=pb(p,JSON.parse(u),o,m.relative==="path");i==null&&e!=="/"&&(_.pathname=_.pathname==="/"?e:ci([e,_.pathname])),(m.replace?n.replace:n.push)(_,m.state,m)},[e,n,u,o,i])}M.createContext(null);function nl(i,{relative:e}={}){let{matches:n}=M.useContext(_i),{pathname:s}=ur(),o=JSON.stringify(fb(n));return M.useMemo(()=>pb(i,JSON.parse(o),s,e==="path"),[i,o,s,e])}function RR(i,e){return Eb(i,e)}function Eb(i,e,n,s){var W;qe(tl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o,static:u}=M.useContext(Gn),{matches:d}=M.useContext(_i),f=d[d.length-1],p=f?f.params:{},m=f?f.pathname:"/",_=f?f.pathnameBase:"/",y=f&&f.route;{let q=y&&y.path||"";bb(m,!y||q.endsWith("*")||q.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${q}"> to <Route path="${q==="/"?"*":`${q}/*`}">.`)}let E=ur(),I;if(e){let q=typeof e=="string"?ia(e):e;qe(_==="/"||((W=q.pathname)==null?void 0:W.startsWith(_)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${_}" but pathname "${q.pathname}" was given in the \`location\` prop.`),I=q}else I=E;let A=I.pathname||"/",B=A;if(_!=="/"){let q=_.replace(/^\//,"").split("/");B="/"+A.replace(/^\//,"").split("/").slice(q.length).join("/")}let H=!u&&n&&n.matches&&n.matches.length>0?n.matches:cb(i,{pathname:B});Vn(y||H!=null,`No routes matched location "${I.pathname}${I.search}${I.hash}" `),Vn(H==null||H[H.length-1].route.element!==void 0||H[H.length-1].route.Component!==void 0||H[H.length-1].route.lazy!==void 0,`Matched leaf route at location "${I.pathname}${I.search}${I.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let z=DR(H&&H.map(q=>Object.assign({},q,{params:Object.assign({},p,q.params),pathname:ci([_,o.encodeLocation?o.encodeLocation(q.pathname).pathname:q.pathname]),pathnameBase:q.pathnameBase==="/"?_:ci([_,o.encodeLocation?o.encodeLocation(q.pathnameBase).pathname:q.pathnameBase])})),d,n,s);return e&&z?M.createElement(el.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...I},navigationType:"POP"}},z):z}function AR(){let i=LR(),e=ER(i)?`${i.status} ${i.statusText}`:i instanceof Error?i.message:JSON.stringify(i),n=i instanceof Error?i.stack:null,s="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:s},u={padding:"2px 4px",backgroundColor:s},d=null;return console.error("Error handled by React Router default ErrorBoundary:",i),d=M.createElement(M.Fragment,null,M.createElement("p",null,"💿 Hey developer 👋"),M.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",M.createElement("code",{style:u},"ErrorBoundary")," or"," ",M.createElement("code",{style:u},"errorElement")," prop on your route.")),M.createElement(M.Fragment,null,M.createElement("h2",null,"Unexpected Application Error!"),M.createElement("h3",{style:{fontStyle:"italic"}},e),n?M.createElement("pre",{style:o},n):null,d)}var IR=M.createElement(AR,null),NR=class extends M.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,e){return e.location!==i.location||e.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:e.error,location:e.location,revalidation:i.revalidation||e.revalidation}}componentDidCatch(i,e){console.error("React Router caught the following error during render",i,e)}render(){return this.state.error!==void 0?M.createElement(_i.Provider,{value:this.props.routeContext},M.createElement(Ep.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function OR({routeContext:i,match:e,children:n}){let s=M.useContext(ra);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),M.createElement(_i.Provider,{value:i},n)}function DR(i,e=[],n=null,s=null){if(i==null){if(!n)return null;if(n.errors)i=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)i=n.matches;else return null}let o=i,u=n==null?void 0:n.errors;if(u!=null){let p=o.findIndex(m=>m.route.id&&(u==null?void 0:u[m.route.id])!==void 0);qe(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),o=o.slice(0,Math.min(o.length,p+1))}let d=!1,f=-1;if(n)for(let p=0;p<o.length;p++){let m=o[p];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(f=p),m.route.id){let{loaderData:_,errors:y}=n,E=m.route.loader&&!_.hasOwnProperty(m.route.id)&&(!y||y[m.route.id]===void 0);if(m.route.lazy||E){d=!0,f>=0?o=o.slice(0,f+1):o=[o[0]];break}}}return o.reduceRight((p,m,_)=>{let y,E=!1,I=null,A=null;n&&(y=u&&m.route.id?u[m.route.id]:void 0,I=m.route.errorElement||IR,d&&(f<0&&_===0?(bb("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),E=!0,A=null):f===_&&(E=!0,A=m.route.hydrateFallbackElement||null)));let B=e.concat(o.slice(0,_+1)),H=()=>{let z;return y?z=I:E?z=A:m.route.Component?z=M.createElement(m.route.Component,null):m.route.element?z=m.route.element:z=p,M.createElement(OR,{match:m,routeContext:{outlet:p,matches:B,isDataRoute:n!=null},children:z})};return n&&(m.route.ErrorBoundary||m.route.errorElement||_===0)?M.createElement(NR,{location:n.location,revalidation:n.revalidation,component:I,error:y,children:H(),routeContext:{outlet:null,matches:B,isDataRoute:!0}}):H()},null)}function bp(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function kR(i){let e=M.useContext(ra);return qe(e,bp(i)),e}function MR(i){let e=M.useContext(_c);return qe(e,bp(i)),e}function xR(i){let e=M.useContext(_i);return qe(e,bp(i)),e}function Sp(i){let e=xR(i),n=e.matches[e.matches.length-1];return qe(n.route.id,`${i} can only be used on routes that contain a unique "id"`),n.route.id}function PR(){return Sp("useRouteId")}function LR(){var s;let i=M.useContext(Ep),e=MR("useRouteError"),n=Sp("useRouteError");return i!==void 0?i:(s=e.errors)==null?void 0:s[n]}function UR(){let{router:i}=kR("useNavigate"),e=Sp("useNavigate"),n=M.useRef(!1);return vb(()=>{n.current=!0}),M.useCallback(async(o,u={})=>{Vn(n.current,_b),n.current&&(typeof o=="number"?i.navigate(o):await i.navigate(o,{fromRouteId:e,...u}))},[i,e])}var qy={};function bb(i,e,n){!e&&!qy[i]&&(qy[i]=!0,Vn(!1,n))}M.memo(zR);function zR({routes:i,future:e,state:n}){return Eb(i,void 0,n,e)}function Sb(i){qe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function HR({basename:i="/",children:e=null,location:n,navigationType:s="POP",navigator:o,static:u=!1}){qe(!tl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=i.replace(/^\/*/,"/"),f=M.useMemo(()=>({basename:d,navigator:o,static:u,future:{}}),[d,o,u]);typeof n=="string"&&(n=ia(n));let{pathname:p="/",search:m="",hash:_="",state:y=null,key:E="default"}=n,I=M.useMemo(()=>{let A=fi(p,d);return A==null?null:{location:{pathname:A,search:m,hash:_,state:y,key:E},navigationType:s}},[d,p,m,_,y,E,s]);return Vn(I!=null,`<Router basename="${d}"> is not able to match the URL "${p}${m}${_}" because it does not start with the basename, so the <Router> won't render anything.`),I==null?null:M.createElement(Gn.Provider,{value:f},M.createElement(el.Provider,{children:e,value:I}))}function BR({children:i,location:e}){return RR(Bf(i),e)}function Bf(i,e=[]){let n=[];return M.Children.forEach(i,(s,o)=>{if(!M.isValidElement(s))return;let u=[...e,o];if(s.type===M.Fragment){n.push.apply(n,Bf(s.props.children,u));return}qe(s.type===Sb,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),qe(!s.props.index||!s.props.children,"An index route cannot have child routes.");let d={id:s.props.id||u.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(d.children=Bf(s.props.children,u)),n.push(d)}),n}var Bu="get",Vu="application/x-www-form-urlencoded";function vc(i){return i!=null&&typeof i.tagName=="string"}function VR(i){return vc(i)&&i.tagName.toLowerCase()==="button"}function qR(i){return vc(i)&&i.tagName.toLowerCase()==="form"}function FR(i){return vc(i)&&i.tagName.toLowerCase()==="input"}function jR(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function GR(i,e){return i.button===0&&(!e||e==="_self")&&!jR(i)}var Lu=null;function YR(){if(Lu===null)try{new FormData(document.createElement("form"),0),Lu=!1}catch{Lu=!0}return Lu}var WR=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ef(i){return i!=null&&!WR.has(i)?(Vn(!1,`"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Vu}"`),null):i}function QR(i,e){let n,s,o,u,d;if(qR(i)){let f=i.getAttribute("action");s=f?fi(f,e):null,n=i.getAttribute("method")||Bu,o=Ef(i.getAttribute("enctype"))||Vu,u=new FormData(i)}else if(VR(i)||FR(i)&&(i.type==="submit"||i.type==="image")){let f=i.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=i.getAttribute("formaction")||f.getAttribute("action");if(s=p?fi(p,e):null,n=i.getAttribute("formmethod")||f.getAttribute("method")||Bu,o=Ef(i.getAttribute("formenctype"))||Ef(f.getAttribute("enctype"))||Vu,u=new FormData(f,i),!YR()){let{name:m,type:_,value:y}=i;if(_==="image"){let E=m?`${m}.`:"";u.append(`${E}x`,"0"),u.append(`${E}y`,"0")}else m&&u.append(m,y)}}else{if(vc(i))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Bu,s=null,o=Vu,d=i}return u&&o==="text/plain"&&(d=u,u=void 0),{action:s,method:n.toLowerCase(),encType:o,formData:u,body:d}}function Tp(i,e){if(i===!1||i===null||typeof i>"u")throw new Error(e)}async function KR(i,e){if(i.id in e)return e[i.id];try{let n=await import(i.module);return e[i.id]=n,n}catch(n){return console.error(`Error loading route module \`${i.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function XR(i){return i==null?!1:i.href==null?i.rel==="preload"&&typeof i.imageSrcSet=="string"&&typeof i.imageSizes=="string":typeof i.rel=="string"&&typeof i.href=="string"}async function $R(i,e,n){let s=await Promise.all(i.map(async o=>{let u=e.routes[o.route.id];if(u){let d=await KR(u,n);return d.links?d.links():[]}return[]}));return tA(s.flat(1).filter(XR).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function Fy(i,e,n,s,o,u){let d=(p,m)=>n[m]?p.route.id!==n[m].route.id:!0,f=(p,m)=>{var _;return n[m].pathname!==p.pathname||((_=n[m].route.path)==null?void 0:_.endsWith("*"))&&n[m].params["*"]!==p.params["*"]};return u==="assets"?e.filter((p,m)=>d(p,m)||f(p,m)):u==="data"?e.filter((p,m)=>{var y;let _=s.routes[p.route.id];if(!_||!_.hasLoader)return!1;if(d(p,m)||f(p,m))return!0;if(p.route.shouldRevalidate){let E=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((y=n[0])==null?void 0:y.params)||{},nextUrl:new URL(i,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof E=="boolean")return E}return!0}):[]}function ZR(i,e,{includeHydrateFallback:n}={}){return JR(i.map(s=>{let o=e.routes[s.route.id];if(!o)return[];let u=[o.module];return o.clientActionModule&&(u=u.concat(o.clientActionModule)),o.clientLoaderModule&&(u=u.concat(o.clientLoaderModule)),n&&o.hydrateFallbackModule&&(u=u.concat(o.hydrateFallbackModule)),o.imports&&(u=u.concat(o.imports)),u}).flat(1))}function JR(i){return[...new Set(i)]}function eA(i){let e={},n=Object.keys(i).sort();for(let s of n)e[s]=i[s];return e}function tA(i,e){let n=new Set;return new Set(e),i.reduce((s,o)=>{let u=JSON.stringify(eA(o));return n.has(u)||(n.add(u),s.push({key:u,link:o})),s},[])}function nA(i,e){let n=typeof i=="string"?new URL(i,typeof window>"u"?"server://singlefetch/":window.location.origin):i;return n.pathname==="/"?n.pathname="_root.data":e&&fi(n.pathname,e)==="/"?n.pathname=`${e.replace(/\/$/,"")}/_root.data`:n.pathname=`${n.pathname.replace(/\/$/,"")}.data`,n}function Tb(){let i=M.useContext(ra);return Tp(i,"You must render this element inside a <DataRouterContext.Provider> element"),i}function iA(){let i=M.useContext(_c);return Tp(i,"You must render this element inside a <DataRouterStateContext.Provider> element"),i}var wp=M.createContext(void 0);wp.displayName="FrameworkContext";function wb(){let i=M.useContext(wp);return Tp(i,"You must render this element inside a <HydratedRouter> element"),i}function rA(i,e){let n=M.useContext(wp),[s,o]=M.useState(!1),[u,d]=M.useState(!1),{onFocus:f,onBlur:p,onMouseEnter:m,onMouseLeave:_,onTouchStart:y}=e,E=M.useRef(null);M.useEffect(()=>{if(i==="render"&&d(!0),i==="viewport"){let B=z=>{z.forEach(W=>{d(W.isIntersecting)})},H=new IntersectionObserver(B,{threshold:.5});return E.current&&H.observe(E.current),()=>{H.disconnect()}}},[i]),M.useEffect(()=>{if(s){let B=setTimeout(()=>{d(!0)},100);return()=>{clearTimeout(B)}}},[s]);let I=()=>{o(!0)},A=()=>{o(!1),d(!1)};return n?i!=="intent"?[u,E,{}]:[u,E,{onFocus:po(f,I),onBlur:po(p,A),onMouseEnter:po(m,I),onMouseLeave:po(_,A),onTouchStart:po(y,I)}]:[!1,E,{}]}function po(i,e){return n=>{i&&i(n),n.defaultPrevented||e(n)}}function sA({page:i,...e}){let{router:n}=Tb(),s=M.useMemo(()=>cb(n.routes,i,n.basename),[n.routes,i,n.basename]);return s?M.createElement(oA,{page:i,matches:s,...e}):null}function aA(i){let{manifest:e,routeModules:n}=wb(),[s,o]=M.useState([]);return M.useEffect(()=>{let u=!1;return $R(i,e,n).then(d=>{u||o(d)}),()=>{u=!0}},[i,e,n]),s}function oA({page:i,matches:e,...n}){let s=ur(),{manifest:o,routeModules:u}=wb(),{basename:d}=Tb(),{loaderData:f,matches:p}=iA(),m=M.useMemo(()=>Fy(i,e,p,o,s,"data"),[i,e,p,o,s]),_=M.useMemo(()=>Fy(i,e,p,o,s,"assets"),[i,e,p,o,s]),y=M.useMemo(()=>{if(i===s.pathname+s.search+s.hash)return[];let A=new Set,B=!1;if(e.forEach(z=>{var q;let W=o.routes[z.route.id];!W||!W.hasLoader||(!m.some(ue=>ue.route.id===z.route.id)&&z.route.id in f&&((q=u[z.route.id])!=null&&q.shouldRevalidate)||W.hasClientLoader?B=!0:A.add(z.route.id))}),A.size===0)return[];let H=nA(i,d);return B&&A.size>0&&H.searchParams.set("_routes",e.filter(z=>A.has(z.route.id)).map(z=>z.route.id).join(",")),[H.pathname+H.search]},[d,f,s,o,m,e,i,u]),E=M.useMemo(()=>ZR(_,o),[_,o]),I=aA(_);return M.createElement(M.Fragment,null,y.map(A=>M.createElement("link",{key:A,rel:"prefetch",as:"fetch",href:A,...n})),E.map(A=>M.createElement("link",{key:A,rel:"modulepreload",href:A,...n})),I.map(({key:A,link:B})=>M.createElement("link",{key:A,...B})))}function lA(...i){return e=>{i.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var Cb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Cb&&(window.__reactRouterVersion="7.5.0")}catch{}function uA({basename:i,children:e,window:n}){let s=M.useRef();s.current==null&&(s.current=ZC({window:n,v5Compat:!0}));let o=s.current,[u,d]=M.useState({action:o.action,location:o.location}),f=M.useCallback(p=>{M.startTransition(()=>d(p))},[d]);return M.useLayoutEffect(()=>o.listen(f),[o,f]),M.createElement(HR,{basename:i,children:e,location:u.location,navigationType:u.action,navigator:o})}var Rb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ab=M.forwardRef(function({onClick:e,discover:n="render",prefetch:s="none",relative:o,reloadDocument:u,replace:d,state:f,target:p,to:m,preventScrollReset:_,viewTransition:y,...E},I){let{basename:A}=M.useContext(Gn),B=typeof m=="string"&&Rb.test(m),H,z=!1;if(typeof m=="string"&&B&&(H=m,Cb))try{let Te=new URL(window.location.href),pt=m.startsWith("//")?new URL(Te.protocol+m):new URL(m),tn=fi(pt.pathname,A);pt.origin===Te.origin&&tn!=null?m=tn+pt.search+pt.hash:z=!0}catch{Vn(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let W=wR(m,{relative:o}),[q,ue,$]=rA(s,E),xe=fA(m,{replace:d,state:f,target:p,preventScrollReset:_,relative:o,viewTransition:y});function Me(Te){e&&e(Te),Te.defaultPrevented||xe(Te)}let He=M.createElement("a",{...E,...$,href:H||W,onClick:z||u?e:Me,ref:lA(I,ue),target:p,"data-discover":!B&&n==="render"?"true":void 0});return q&&!B?M.createElement(M.Fragment,null,He,M.createElement(sA,{page:W})):He});Ab.displayName="Link";var cA=M.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:s="",end:o=!1,style:u,to:d,viewTransition:f,children:p,...m},_){let y=nl(d,{relative:m.relative}),E=ur(),I=M.useContext(_c),{navigator:A,basename:B}=M.useContext(Gn),H=I!=null&&vA(y)&&f===!0,z=A.encodeLocation?A.encodeLocation(y).pathname:y.pathname,W=E.pathname,q=I&&I.navigation&&I.navigation.location?I.navigation.location.pathname:null;n||(W=W.toLowerCase(),q=q?q.toLowerCase():null,z=z.toLowerCase()),q&&B&&(q=fi(q,B)||q);const ue=z!=="/"&&z.endsWith("/")?z.length-1:z.length;let $=W===z||!o&&W.startsWith(z)&&W.charAt(ue)==="/",xe=q!=null&&(q===z||!o&&q.startsWith(z)&&q.charAt(z.length)==="/"),Me={isActive:$,isPending:xe,isTransitioning:H},He=$?e:void 0,Te;typeof s=="function"?Te=s(Me):Te=[s,$?"active":null,xe?"pending":null,H?"transitioning":null].filter(Boolean).join(" ");let pt=typeof u=="function"?u(Me):u;return M.createElement(Ab,{...m,"aria-current":He,className:Te,ref:_,style:pt,to:d,viewTransition:f},typeof p=="function"?p(Me):p)});cA.displayName="NavLink";var dA=M.forwardRef(({discover:i="render",fetcherKey:e,navigate:n,reloadDocument:s,replace:o,state:u,method:d=Bu,action:f,onSubmit:p,relative:m,preventScrollReset:_,viewTransition:y,...E},I)=>{let A=gA(),B=_A(f,{relative:m}),H=d.toLowerCase()==="get"?"get":"post",z=typeof f=="string"&&Rb.test(f),W=q=>{if(p&&p(q),q.defaultPrevented)return;q.preventDefault();let ue=q.nativeEvent.submitter,$=(ue==null?void 0:ue.getAttribute("formmethod"))||d;A(ue||q.currentTarget,{fetcherKey:e,method:$,navigate:n,replace:o,state:u,relative:m,preventScrollReset:_,viewTransition:y})};return M.createElement("form",{ref:I,method:H,action:B,onSubmit:s?p:W,...E,"data-discover":!z&&i==="render"?"true":void 0})});dA.displayName="Form";function hA(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ib(i){let e=M.useContext(ra);return qe(e,hA(i)),e}function fA(i,{target:e,replace:n,state:s,preventScrollReset:o,relative:u,viewTransition:d}={}){let f=yb(),p=ur(),m=nl(i,{relative:u});return M.useCallback(_=>{if(GR(_,e)){_.preventDefault();let y=n!==void 0?n:xo(p)===xo(m);f(i,{replace:y,state:s,preventScrollReset:o,relative:u,viewTransition:d})}},[p,f,m,n,s,e,i,o,u,d])}var pA=0,mA=()=>`__${String(++pA)}__`;function gA(){let{router:i}=Ib("useSubmit"),{basename:e}=M.useContext(Gn),n=PR();return M.useCallback(async(s,o={})=>{let{action:u,method:d,encType:f,formData:p,body:m}=QR(s,e);if(o.navigate===!1){let _=o.fetcherKey||mA();await i.fetch(_,n,o.action||u,{preventScrollReset:o.preventScrollReset,formData:p,body:m,formMethod:o.method||d,formEncType:o.encType||f,flushSync:o.flushSync})}else await i.navigate(o.action||u,{preventScrollReset:o.preventScrollReset,formData:p,body:m,formMethod:o.method||d,formEncType:o.encType||f,replace:o.replace,state:o.state,fromRouteId:n,flushSync:o.flushSync,viewTransition:o.viewTransition})},[i,e,n])}function _A(i,{relative:e}={}){let{basename:n}=M.useContext(Gn),s=M.useContext(_i);qe(s,"useFormAction must be used inside a RouteContext");let[o]=s.matches.slice(-1),u={...nl(i||".",{relative:e})},d=ur();if(i==null){u.search=d.search;let f=new URLSearchParams(u.search),p=f.getAll("index");if(p.some(_=>_==="")){f.delete("index"),p.filter(y=>y).forEach(y=>f.append("index",y));let _=f.toString();u.search=_?`?${_}`:""}}return(!i||i===".")&&o.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(u.pathname=u.pathname==="/"?n:ci([n,u.pathname])),xo(u)}function vA(i,e={}){let n=M.useContext(gb);qe(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=Ib("useViewTransitionState"),o=nl(i,{relative:e.relative});if(!n.isTransitioning)return!1;let u=fi(n.currentLocation.pathname,s)||n.currentLocation.pathname,d=fi(n.nextLocation.pathname,s)||n.nextLocation.pathname;return Yu(o.pathname,d)!=null||Yu(o.pathname,u)!=null}new TextEncoder;const yA=M.lazy(()=>Jo(()=>import("./Loader-DT-m_FG8.js"),[])),EA=M.lazy(()=>Jo(()=>import("./Home-MhiJVFJU.js"),__vite__mapDeps([0,1,2]))),bA=M.lazy(()=>Jo(()=>import("./Auth-6T1XnuyZ.js"),__vite__mapDeps([3,1,2]))),SA=M.lazy(()=>Jo(()=>import("./Dashboard-BpeffwCj.js"),__vite__mapDeps([4,2])));function TA(){const i=[{path:"/",element:xt.jsx(EA,{})},{path:"/login",element:xt.jsx(bA,{})},{path:"/panel",element:xt.jsx(SA,{})}];return xt.jsx(M.Suspense,{fallback:xt.jsx(yA,{}),children:xt.jsx(BR,{children:i.map((e,n)=>xt.jsx(Sb,{path:e.path,element:e.element},n))})})}const wA=()=>{};var jy={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nb={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V=function(i,e){if(!i)throw sa(e)},sa=function(i){return new Error("Firebase Database ("+Nb.SDK_VERSION+") INTERNAL ASSERT FAILED: "+i)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ob=function(i){const e=[];let n=0;for(let s=0;s<i.length;s++){let o=i.charCodeAt(s);o<128?e[n++]=o:o<2048?(e[n++]=o>>6|192,e[n++]=o&63|128):(o&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(i.charCodeAt(++s)&1023),e[n++]=o>>18|240,e[n++]=o>>12&63|128,e[n++]=o>>6&63|128,e[n++]=o&63|128):(e[n++]=o>>12|224,e[n++]=o>>6&63|128,e[n++]=o&63|128)}return e},CA=function(i){const e=[];let n=0,s=0;for(;n<i.length;){const o=i[n++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=i[n++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=i[n++],d=i[n++],f=i[n++],p=((o&7)<<18|(u&63)<<12|(d&63)<<6|f&63)-65536;e[s++]=String.fromCharCode(55296+(p>>10)),e[s++]=String.fromCharCode(56320+(p&1023))}else{const u=i[n++],d=i[n++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|d&63)}}return e.join("")},Cp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<i.length;o+=3){const u=i[o],d=o+1<i.length,f=d?i[o+1]:0,p=o+2<i.length,m=p?i[o+2]:0,_=u>>2,y=(u&3)<<4|f>>4;let E=(f&15)<<2|m>>6,I=m&63;p||(I=64,d||(E=64)),s.push(n[_],n[y],n[E],n[I])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(Ob(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):CA(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<i.length;){const u=n[i.charAt(o++)],f=o<i.length?n[i.charAt(o)]:0;++o;const m=o<i.length?n[i.charAt(o)]:64;++o;const y=o<i.length?n[i.charAt(o)]:64;if(++o,u==null||f==null||m==null||y==null)throw new RA;const E=u<<2|f>>4;if(s.push(E),m!==64){const I=f<<4&240|m>>2;if(s.push(I),y!==64){const A=m<<6&192|y;s.push(A)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class RA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Db=function(i){const e=Ob(i);return Cp.encodeByteArray(e,!0)},Wu=function(i){return Db(i).replace(/\./g,"")},Po=function(i){try{return Cp.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AA(i){return Lo(void 0,i)}function Lo(i,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:i===void 0&&(i={});break;case Array:i=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!IA(n)||(i[n]=Lo(i[n],e[n]));return i}function IA(i){return i!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NA=()=>kb().__FIREBASE_DEFAULTS__,OA=()=>{if(typeof process>"u"||typeof jy>"u")return;const i=jy.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},DA=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&Po(i[1]);return e&&JSON.parse(e)},Rp=()=>{try{return wA()||NA()||OA()||DA()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},Mb=()=>{var i;return(i=Rp())===null||i===void 0?void 0:i.config},kA=i=>{var e;return(e=Rp())===null||e===void 0?void 0:e[`_${i}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MA(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",o=i.iat||0,u=i.sub||i.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const d=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},i);return[Wu(JSON.stringify(n)),Wu(JSON.stringify(d)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ap(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(it())}function xb(){var i;const e=(i=Rp())===null||i===void 0?void 0:i.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function xA(){return typeof window<"u"||Pb()}function Pb(){return typeof WorkerGlobalScope<"u"&&typeof self<"u"&&self instanceof WorkerGlobalScope}function PA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Lb(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function yc(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ub(){const i=it();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function LA(){return Nb.NODE_ADMIN===!0}function Qu(){try{return typeof indexedDB=="object"}catch{return!1}}function UA(){return new Promise((i,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(s),i(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var u;e(((u=o.error)===null||u===void 0?void 0:u.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zA="FirebaseError";class Ut extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=zA,Object.setPrototypeOf(this,Ut.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Wr.prototype.create)}}class Wr{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},o=`${this.service}/${e}`,u=this.errors[e],d=u?HA(u,s):"Error",f=`${this.serviceName}: ${d} (${o}).`;return new Ut(o,f,s)}}function HA(i,e){return i.replace(BA,(n,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const BA=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uo(i){return JSON.parse(i)}function tt(i){return JSON.stringify(i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zb=function(i){let e={},n={},s={},o="";try{const u=i.split(".");e=Uo(Po(u[0])||""),n=Uo(Po(u[1])||""),o=u[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:o}},VA=function(i){const e=zb(i),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},qA=function(i){const e=zb(i).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(i,e){return Object.prototype.hasOwnProperty.call(i,e)}function Br(i,e){if(Object.prototype.hasOwnProperty.call(i,e))return i[e]}function Ku(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function Xu(i,e,n){const s={};for(const o in i)Object.prototype.hasOwnProperty.call(i,o)&&(s[o]=e.call(n,i[o],o,i));return s}function Ws(i,e){if(i===e)return!0;const n=Object.keys(i),s=Object.keys(e);for(const o of n){if(!s.includes(o))return!1;const u=i[o],d=e[o];if(Gy(u)&&Gy(d)){if(!Ws(u,d))return!1}else if(u!==d)return!1}for(const o of s)if(!n.includes(o))return!1;return!0}function Gy(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qr(i){const e=[];for(const[n,s]of Object.entries(i))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Bs(i){const e={};return i.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,u]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(u)}}),e}function To(i){const e=i.indexOf("?");if(!e)return"";const n=i.indexOf("#",e);return i.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FA{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let y=0;y<16;y++)s[y]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let y=0;y<16;y++)s[y]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let y=16;y<80;y++){const E=s[y-3]^s[y-8]^s[y-14]^s[y-16];s[y]=(E<<1|E>>>31)&4294967295}let o=this.chain_[0],u=this.chain_[1],d=this.chain_[2],f=this.chain_[3],p=this.chain_[4],m,_;for(let y=0;y<80;y++){y<40?y<20?(m=f^u&(d^f),_=1518500249):(m=u^d^f,_=1859775393):y<60?(m=u&d|f&(u|d),_=2400959708):(m=u^d^f,_=3395469782);const E=(o<<5|o>>>27)+m+p+_+s[y]&4294967295;p=f,f=d,d=(u<<30|u>>>2)&4294967295,u=o,o=E}this.chain_[0]=this.chain_[0]+o&4294967295,this.chain_[1]=this.chain_[1]+u&4294967295,this.chain_[2]=this.chain_[2]+d&4294967295,this.chain_[3]=this.chain_[3]+f&4294967295,this.chain_[4]=this.chain_[4]+p&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let o=0;const u=this.buf_;let d=this.inbuf_;for(;o<n;){if(d===0)for(;o<=s;)this.compress_(e,o),o+=this.blockSize;if(typeof e=="string"){for(;o<n;)if(u[d]=e.charCodeAt(o),++d,++o,d===this.blockSize){this.compress_(u),d=0;break}}else for(;o<n;)if(u[d]=e[o],++d,++o,d===this.blockSize){this.compress_(u),d=0;break}}this.inbuf_=d,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let o=this.blockSize-1;o>=56;o--)this.buf_[o]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let o=0;o<5;o++)for(let u=24;u>=0;u-=8)e[s]=this.chain_[o]>>u&255,++s;return e}}function Hb(i,e){const n=new jA(i,e);return n.subscribe.bind(n)}class jA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let o;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");GA(e,["next","error","complete"])?o=e:o={next:e,error:n,complete:s},o.next===void 0&&(o.next=bf),o.error===void 0&&(o.error=bf),o.complete===void 0&&(o.complete=bf);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function GA(i,e){if(typeof i!="object"||i===null)return!1;for(const n of e)if(n in i&&typeof i[n]=="function")return!0;return!1}function bf(){}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const te=function(i,e,n,s){let o;if(s<e?o="at least "+e:s>n&&(o=n===0?"none":"no more than "+n),o){const u=i+" failed: Was called with "+s+(s===1?" argument.":" arguments.")+" Expects "+o+".";throw new Error(u)}};function zt(i,e){return`${i} failed: ${e} argument `}function ut(i,e,n,s){if(!(s&&!n)&&typeof n!="function")throw new Error(zt(i,e)+"must be a valid function.")}function Yy(i,e,n,s){if(n&&(typeof n!="object"||n===null))throw new Error(zt(i,e)+"must be a valid context object.")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YA=function(i){const e=[];let n=0;for(let s=0;s<i.length;s++){let o=i.charCodeAt(s);if(o>=55296&&o<=56319){const u=o-55296;s++,V(s<i.length,"Surrogate pair missing trail surrogate.");const d=i.charCodeAt(s)-56320;o=65536+(u<<10)+d}o<128?e[n++]=o:o<2048?(e[n++]=o>>6|192,e[n++]=o&63|128):o<65536?(e[n++]=o>>12|224,e[n++]=o>>6&63|128,e[n++]=o&63|128):(e[n++]=o>>18|240,e[n++]=o>>12&63|128,e[n++]=o>>6&63|128,e[n++]=o&63|128)}return e},Ec=function(i){let e=0;for(let n=0;n<i.length;n++){const s=i.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(i){return i&&i._delegate?i._delegate:i}class gn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Pt;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(o)return null;throw u}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(QA(e))try{this.getOrInitializeService({instanceIdentifier:Mr})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=Mr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Mr){return this.instances.has(e)}getOptions(e=Mr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[u,d]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(u);s===f&&d.resolve(o)}return o}onInit(e,n){var s;const o=this.normalizeInstanceIdentifier(n),u=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;u.add(e),this.onInitCallbacks.set(o,u);const d=this.instances.get(o);return d&&e(d,o),()=>{u.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const o of s)try{o(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:WA(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Mr){return this.component?this.component.multipleInstances?e:Mr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function WA(i){return i===Mr?void 0:i}function QA(i){return i.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Vf(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Np=[];var Se;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(Se||(Se={}));const Bb={debug:Se.DEBUG,verbose:Se.VERBOSE,info:Se.INFO,warn:Se.WARN,error:Se.ERROR,silent:Se.SILENT},KA=Se.INFO,XA={[Se.DEBUG]:"log",[Se.VERBOSE]:"log",[Se.INFO]:"info",[Se.WARN]:"warn",[Se.ERROR]:"error"},$A=(i,e,...n)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),o=XA[e];if(o)console[o](`[${s}]  ${i.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class il{constructor(e){this.name=e,this._logLevel=KA,this._logHandler=$A,this._userLogHandler=null,Np.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Bb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Se.DEBUG,...e),this._logHandler(this,Se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Se.VERBOSE,...e),this._logHandler(this,Se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Se.INFO,...e),this._logHandler(this,Se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Se.WARN,...e),this._logHandler(this,Se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Se.ERROR,...e),this._logHandler(this,Se.ERROR,...e)}}function ZA(i){Np.forEach(e=>{e.setLogLevel(i)})}function JA(i,e){for(const n of Np){let s=null;e&&e.level&&(s=Bb[e.level]),i===null?n.userLogHandler=null:n.userLogHandler=(o,u,...d)=>{const f=d.map(p=>{if(p==null)return null;if(typeof p=="string")return p;if(typeof p=="number"||typeof p=="boolean")return p.toString();if(p instanceof Error)return p.message;try{return JSON.stringify(p)}catch{return null}}).filter(p=>p).join(" ");u>=(s??o.logLevel)&&i({level:Se[u].toLowerCase(),message:f,args:d,type:o.name})}}}const eI=(i,e)=>e.some(n=>i instanceof n);let Wy,Qy;function tI(){return Wy||(Wy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function nI(){return Qy||(Qy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Vb=new WeakMap,qf=new WeakMap,qb=new WeakMap,Sf=new WeakMap,Op=new WeakMap;function iI(i){const e=new Promise((n,s)=>{const o=()=>{i.removeEventListener("success",u),i.removeEventListener("error",d)},u=()=>{n(Xi(i.result)),o()},d=()=>{s(i.error),o()};i.addEventListener("success",u),i.addEventListener("error",d)});return e.then(n=>{n instanceof IDBCursor&&Vb.set(n,i)}).catch(()=>{}),Op.set(e,i),e}function rI(i){if(qf.has(i))return;const e=new Promise((n,s)=>{const o=()=>{i.removeEventListener("complete",u),i.removeEventListener("error",d),i.removeEventListener("abort",d)},u=()=>{n(),o()},d=()=>{s(i.error||new DOMException("AbortError","AbortError")),o()};i.addEventListener("complete",u),i.addEventListener("error",d),i.addEventListener("abort",d)});qf.set(i,e)}let Ff={get(i,e,n){if(i instanceof IDBTransaction){if(e==="done")return qf.get(i);if(e==="objectStoreNames")return i.objectStoreNames||qb.get(i);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Xi(i[e])},set(i,e,n){return i[e]=n,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function sI(i){Ff=i(Ff)}function aI(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=i.call(Tf(this),e,...n);return qb.set(s,e.sort?e.sort():[e]),Xi(s)}:nI().includes(i)?function(...e){return i.apply(Tf(this),e),Xi(Vb.get(this))}:function(...e){return Xi(i.apply(Tf(this),e))}}function oI(i){return typeof i=="function"?aI(i):(i instanceof IDBTransaction&&rI(i),eI(i,tI())?new Proxy(i,Ff):i)}function Xi(i){if(i instanceof IDBRequest)return iI(i);if(Sf.has(i))return Sf.get(i);const e=oI(i);return e!==i&&(Sf.set(i,e),Op.set(e,i)),e}const Tf=i=>Op.get(i);function lI(i,e,{blocked:n,upgrade:s,blocking:o,terminated:u}={}){const d=indexedDB.open(i,e),f=Xi(d);return s&&d.addEventListener("upgradeneeded",p=>{s(Xi(d.result),p.oldVersion,p.newVersion,Xi(d.transaction),p)}),n&&d.addEventListener("blocked",p=>n(p.oldVersion,p.newVersion,p)),f.then(p=>{u&&p.addEventListener("close",()=>u()),o&&p.addEventListener("versionchange",m=>o(m.oldVersion,m.newVersion,m))}).catch(()=>{}),f}const uI=["get","getKey","getAll","getAllKeys","count"],cI=["put","add","delete","clear"],wf=new Map;function Ky(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(wf.get(e))return wf.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,o=cI.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(o||uI.includes(n)))return;const u=async function(d,...f){const p=this.transaction(d,o?"readwrite":"readonly");let m=p.store;return s&&(m=m.index(f.shift())),(await Promise.all([m[n](...f),o&&p.done]))[0]};return wf.set(e,u),u}sI(i=>({...i,get:(e,n,s)=>Ky(e,n)||i.get(e,n,s),has:(e,n)=>!!Ky(e,n)||i.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(hI(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function hI(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const $u="@firebase/app",jf="0.11.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pi=new il("@firebase/app"),fI="@firebase/app-compat",pI="@firebase/analytics-compat",mI="@firebase/analytics",gI="@firebase/app-check-compat",_I="@firebase/app-check",vI="@firebase/auth",yI="@firebase/auth-compat",EI="@firebase/database",bI="@firebase/data-connect",SI="@firebase/database-compat",TI="@firebase/functions",wI="@firebase/functions-compat",CI="@firebase/installations",RI="@firebase/installations-compat",AI="@firebase/messaging",II="@firebase/messaging-compat",NI="@firebase/performance",OI="@firebase/performance-compat",DI="@firebase/remote-config",kI="@firebase/remote-config-compat",MI="@firebase/storage",xI="@firebase/storage-compat",PI="@firebase/firestore",LI="@firebase/vertexai",UI="@firebase/firestore-compat",zI="firebase",HI="11.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tr="[DEFAULT]",BI={[$u]:"fire-core",[fI]:"fire-core-compat",[mI]:"fire-analytics",[pI]:"fire-analytics-compat",[_I]:"fire-app-check",[gI]:"fire-app-check-compat",[vI]:"fire-auth",[yI]:"fire-auth-compat",[EI]:"fire-rtdb",[bI]:"fire-data-connect",[SI]:"fire-rtdb-compat",[TI]:"fire-fn",[wI]:"fire-fn-compat",[CI]:"fire-iid",[RI]:"fire-iid-compat",[AI]:"fire-fcm",[II]:"fire-fcm-compat",[NI]:"fire-perf",[OI]:"fire-perf-compat",[DI]:"fire-rc",[kI]:"fire-rc-compat",[MI]:"fire-gcs",[xI]:"fire-gcs-compat",[PI]:"fire-fst",[UI]:"fire-fst-compat",[LI]:"fire-vertex","fire-js":"fire-js",[zI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nr=new Map,Qs=new Map,Ks=new Map;function zo(i,e){try{i.container.addComponent(e)}catch(n){pi.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,n)}}function Fb(i,e){i.container.addOrOverwriteComponent(e)}function ir(i){const e=i.name;if(Ks.has(e))return pi.debug(`There were multiple attempts to register component ${e}.`),!1;Ks.set(e,i);for(const n of nr.values())zo(n,i);for(const n of Qs.values())zo(n,i);return!0}function jb(i,e){const n=i.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),i.container.getProvider(e)}function VI(i,e,n=tr){jb(i,e).clearInstance(n)}function Gb(i){return i.options!==void 0}function Ue(i){return i==null?!1:i.settings!==void 0}function qI(){Ks.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},mn=new Wr("app","Firebase",FI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yb=class{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new gn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw mn.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xy(i,e){const n=Po(i.split(".")[1]);if(n===null){console.error(`FirebaseServerApp ${e} is invalid: second part could not be parsed.`);return}if(JSON.parse(n).exp===void 0){console.error(`FirebaseServerApp ${e} is invalid: expiration claim could not be parsed`);return}const o=JSON.parse(n).exp*1e3,u=new Date().getTime();o-u<=0&&console.error(`FirebaseServerApp ${e} is invalid: the token has expired.`)}class jI extends Yb{constructor(e,n,s,o){const u=n.automaticDataCollectionEnabled!==void 0?n.automaticDataCollectionEnabled:!1,d={name:s,automaticDataCollectionEnabled:u};if(e.apiKey!==void 0)super(e,d,o);else{const f=e;super(f.options,d,o)}this._serverConfig=Object.assign({automaticDataCollectionEnabled:u},n),this._serverConfig.authIdToken&&Xy(this._serverConfig.authIdToken,"authIdToken"),this._serverConfig.appCheckToken&&Xy(this._serverConfig.appCheckToken,"appCheckToken"),this._finalizationRegistry=null,typeof FinalizationRegistry<"u"&&(this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()})),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,n.releaseOnDeref=void 0,Cn($u,jf,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,e!==void 0&&this._finalizationRegistry!==null&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){kp(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw mn.create("server-app-deleted")}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cr=HI;function Dp(i,e={}){let n=i;typeof e!="object"&&(e={name:e});const s=Object.assign({name:tr,automaticDataCollectionEnabled:!1},e),o=s.name;if(typeof o!="string"||!o)throw mn.create("bad-app-name",{appName:String(o)});if(n||(n=Mb()),!n)throw mn.create("no-options");const u=nr.get(o);if(u){if(Ws(n,u.options)&&Ws(s,u.config))return u;throw mn.create("duplicate-app",{appName:o})}const d=new Ip(o);for(const p of Ks.values())d.addComponent(p);const f=new Yb(n,s,d);return nr.set(o,f),f}function GI(i,e){if(xA()&&!Pb())throw mn.create("invalid-server-app-environment");e.automaticDataCollectionEnabled===void 0&&(e.automaticDataCollectionEnabled=!1);let n;Gb(i)?n=i.options:n=i;const s=Object.assign(Object.assign({},e),n);s.releaseOnDeref!==void 0&&delete s.releaseOnDeref;const o=m=>[...m].reduce((_,y)=>Math.imul(31,_)+y.charCodeAt(0)|0,0);if(e.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw mn.create("finalization-registry-not-supported",{});const u=""+o(JSON.stringify(s)),d=Qs.get(u);if(d)return d.incRefCount(e.releaseOnDeref),d;const f=new Ip(u);for(const m of Ks.values())f.addComponent(m);const p=new jI(n,e,u,f);return Qs.set(u,p),p}function YI(i=tr){const e=nr.get(i);if(!e&&i===tr&&Mb())return Dp();if(!e)throw mn.create("no-app",{appName:i});return e}function WI(){return Array.from(nr.values())}async function kp(i){let e=!1;const n=i.name;nr.has(n)?(e=!0,nr.delete(n)):Qs.has(n)&&i.decRefCount()<=0&&(Qs.delete(n),e=!0),e&&(await Promise.all(i.container.getProviders().map(s=>s.delete())),i.isDeleted=!0)}function Cn(i,e,n){var s;let o=(s=BI[i])!==null&&s!==void 0?s:i;n&&(o+=`-${n}`);const u=o.match(/\s|\//),d=e.match(/\s|\//);if(u||d){const f=[`Unable to register library "${o}" with version "${e}":`];u&&f.push(`library name "${o}" contains illegal characters (whitespace or "/")`),u&&d&&f.push("and"),d&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),pi.warn(f.join(" "));return}ir(new gn(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}function Wb(i,e){if(i!==null&&typeof i!="function")throw mn.create("invalid-log-argument");JA(i,e)}function Qb(i){ZA(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QI="firebase-heartbeat-database",KI=1,Ho="firebase-heartbeat-store";let Cf=null;function Kb(){return Cf||(Cf=lI(QI,KI,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(Ho)}catch(n){console.warn(n)}}}}).catch(i=>{throw mn.create("idb-open",{originalErrorMessage:i.message})})),Cf}async function XI(i){try{const n=(await Kb()).transaction(Ho),s=await n.objectStore(Ho).get(Xb(i));return await n.done,s}catch(e){if(e instanceof Ut)pi.warn(e.message);else{const n=mn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});pi.warn(n.message)}}}async function $y(i,e){try{const s=(await Kb()).transaction(Ho,"readwrite");await s.objectStore(Ho).put(e,Xb(i)),await s.done}catch(n){if(n instanceof Ut)pi.warn(n.message);else{const s=mn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});pi.warn(s.message)}}}function Xb(i){return`${i.name}!${i.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $I=1024,ZI=30;class JI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new tN(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=Zy();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(d=>d.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>ZI){const d=nN(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(d,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){pi.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Zy(),{heartbeatsToSend:s,unsentEntries:o}=eN(this._heartbeatsCache.heartbeats),u=Wu(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(n){return pi.warn(n),""}}}function Zy(){return new Date().toISOString().substring(0,10)}function eN(i,e=$I){const n=[];let s=i.slice();for(const o of i){const u=n.find(d=>d.agent===o.agent);if(u){if(u.dates.push(o.date),Jy(n)>e){u.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),Jy(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class tN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Qu()?UA().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await XI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return $y(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return $y(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function Jy(i){return Wu(JSON.stringify({version:2,heartbeats:i})).length}function nN(i){if(i.length===0)return-1;let e=0,n=i[0].date;for(let s=1;s<i.length;s++)i[s].date<n&&(n=i[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iN(i){ir(new gn("platform-logger",e=>new dI(e),"PRIVATE")),ir(new gn("heartbeat",e=>new JI(e),"PRIVATE")),Cn($u,jf,i),Cn($u,jf,"esm2017"),Cn("fire-js","")}iN("");const rN=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:Ut,SDK_VERSION:cr,_DEFAULT_ENTRY_NAME:tr,_addComponent:zo,_addOrOverwriteComponent:Fb,_apps:nr,_clearComponents:qI,_components:Ks,_getProvider:jb,_isFirebaseApp:Gb,_isFirebaseServerApp:Ue,_registerComponent:ir,_removeServiceInstance:VI,_serverApps:Qs,deleteApp:kp,getApp:YI,getApps:WI,initializeApp:Dp,initializeServerApp:GI,onLog:Wb,registerVersion:Cn,setLogLevel:Qb},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sN{constructor(e,n){this._delegate=e,this.firebase=n,zo(e,new gn("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),kp(this._delegate)))}_getService(e,n=tr){var s;this._delegate.checkDestroyed();const o=this._delegate.container.getProvider(e);return!o.isInitialized()&&((s=o.getComponent())===null||s===void 0?void 0:s.instantiationMode)==="EXPLICIT"&&o.initialize(),o.getImmediate({identifier:n})}_removeServiceInstance(e,n=tr){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){zo(this._delegate,e)}_addOrOverwriteComponent(e){Fb(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aN={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},eE=new Wr("app-compat","Firebase",aN);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oN(i){const e={},n={__esModule:!0,initializeApp:u,app:o,registerVersion:Cn,setLogLevel:Qb,onLog:Wb,apps:null,SDK_VERSION:cr,INTERNAL:{registerComponent:f,removeApp:s,useAsService:p,modularAPIs:rN}};n.default=n,Object.defineProperty(n,"apps",{get:d});function s(m){delete e[m]}function o(m){if(m=m||tr,!Jt(e,m))throw eE.create("no-app",{appName:m});return e[m]}o.App=i;function u(m,_={}){const y=Dp(m,_);if(Jt(e,y.name))return e[y.name];const E=new i(y,n);return e[y.name]=E,E}function d(){return Object.keys(e).map(m=>e[m])}function f(m){const _=m.name,y=_.replace("-compat","");if(ir(m)&&m.type==="PUBLIC"){const E=(I=o())=>{if(typeof I[y]!="function")throw eE.create("invalid-app-argument",{appName:_});return I[y]()};m.serviceProps!==void 0&&Lo(E,m.serviceProps),n[y]=E,i.prototype[y]=function(...I){return this._getService.bind(this,_).apply(this,m.multipleInstances?I:[])}}return m.type==="PUBLIC"?n[y]:null}function p(m,_){return _==="serverAuth"?null:_}return n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $b(){const i=oN(sN);i.INTERNAL=Object.assign(Object.assign({},i.INTERNAL),{createFirebaseNamespace:$b,extendNamespace:e,createSubscribe:Hb,ErrorFactory:Wr,deepExtend:Lo});function e(n){Lo(i,n)}return i}const lN=$b();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tE=new il("@firebase/app-compat"),uN="@firebase/app-compat",cN="0.2.53";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dN(i){Cn(uN,cN,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */try{const i=kb();if(i.firebase!==void 0){tE.warn(`
      Warning: Firebase is already defined in the global scope. Please make sure
      Firebase library is only loaded once.
    `);const e=i.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&tE.warn(`
        Warning: You are trying to load Firebase while using Firebase Performance standalone script.
        You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
        `)}}catch{}const vi=lN;dN();var hN="firebase",fN="11.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vi.registerVersion(hN,fN,"app-compat");var nE={};const iE="@firebase/database",rE="1.0.14";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zb="";function Jb(i){Zb=i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pN{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),tt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Uo(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mN{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Jt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eS=function(i){try{if(typeof window<"u"&&typeof window[i]<"u"){const e=window[i];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new pN(e)}}catch{}return new mN},Pr=eS("localStorage"),Gf=eS("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vs=new il("@firebase/database"),tS=function(){let i=1;return function(){return i++}}(),nS=function(i){const e=YA(i),n=new FA;n.update(e);const s=n.digest();return Cp.encodeByteArray(s)},rl=function(...i){let e="";for(let n=0;n<i.length;n++){const s=i[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=rl.apply(null,s):typeof s=="object"?e+=tt(s):e+=s,e+=" "}return e};let Ur=null,sE=!0;const iS=function(i,e){V(!e||i===!0||i===!1,"Can't turn on custom loggers persistently."),i===!0?(Vs.logLevel=Se.VERBOSE,Ur=Vs.log.bind(Vs),e&&Gf.set("logging_enabled",!0)):typeof i=="function"?Ur=i:(Ur=null,Gf.remove("logging_enabled"))},dt=function(...i){if(sE===!0&&(sE=!1,Ur===null&&Gf.get("logging_enabled")===!0&&iS(!0)),Ur){const e=rl.apply(null,i);Ur(e)}},sl=function(i){return function(...e){dt(i,...e)}},Yf=function(...i){const e="FIREBASE INTERNAL ERROR: "+rl(...i);Vs.error(e)},qn=function(...i){const e=`FIREBASE FATAL ERROR: ${rl(...i)}`;throw Vs.error(e),new Error(e)},Ct=function(...i){const e="FIREBASE WARNING: "+rl(...i);Vs.warn(e)},gN=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ct("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},bc=function(i){return typeof i=="number"&&(i!==i||i===Number.POSITIVE_INFINITY||i===Number.NEGATIVE_INFINITY)},_N=function(i){if(document.readyState==="complete")i();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,i())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},rr="[MIN_NAME]",mi="[MAX_NAME]",Kr=function(i,e){if(i===e)return 0;if(i===rr||e===mi)return-1;if(e===rr||i===mi)return 1;{const n=aE(i),s=aE(e);return n!==null?s!==null?n-s===0?i.length-e.length:n-s:-1:s!==null?1:i<e?-1:1}},vN=function(i,e){return i===e?0:i<e?-1:1},mo=function(i,e){if(e&&i in e)return e[i];throw new Error("Missing required key ("+i+") in object: "+tt(e))},Mp=function(i){if(typeof i!="object"||i===null)return tt(i);const e=[];for(const s in i)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=tt(e[s]),n+=":",n+=Mp(i[e[s]]);return n+="}",n},rS=function(i,e){const n=i.length;if(n<=e)return[i];const s=[];for(let o=0;o<n;o+=e)o+e>n?s.push(i.substring(o,n)):s.push(i.substring(o,o+e));return s};function ft(i,e){for(const n in i)i.hasOwnProperty(n)&&e(n,i[n])}const sS=function(i){V(!bc(i),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let o,u,d,f,p;i===0?(u=0,d=0,o=1/i===-1/0?1:0):(o=i<0,i=Math.abs(i),i>=Math.pow(2,1-s)?(f=Math.min(Math.floor(Math.log(i)/Math.LN2),s),u=f+s,d=Math.round(i*Math.pow(2,n-f)-Math.pow(2,n))):(u=0,d=Math.round(i/Math.pow(2,1-s-n))));const m=[];for(p=n;p;p-=1)m.push(d%2?1:0),d=Math.floor(d/2);for(p=e;p;p-=1)m.push(u%2?1:0),u=Math.floor(u/2);m.push(o?1:0),m.reverse();const _=m.join("");let y="";for(p=0;p<64;p+=8){let E=parseInt(_.substr(p,8),2).toString(16);E.length===1&&(E="0"+E),y=y+E}return y.toLowerCase()},yN=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},EN=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function bN(i,e){let n="Unknown Error";i==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":i==="permission_denied"?n="Client doesn't have permission to access the desired data.":i==="unavailable"&&(n="The service is unavailable");const s=new Error(i+" at "+e._path.toString()+": "+n);return s.code=i.toUpperCase(),s}const SN=new RegExp("^-?(0*)\\d{1,10}$"),TN=-2147483648,wN=2147483647,aE=function(i){if(SN.test(i)){const e=Number(i);if(e>=TN&&e<=wN)return e}return null},aa=function(i){try{i()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ct("Exception was thrown by user callback.",n),e},Math.floor(0))}},CN=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Co=function(i,e){const n=setTimeout(i,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RN{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,Ue(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Ct(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AN{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(o=>this.auth_=o)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(dt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ct(e)}}class qs{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}qs.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xp="5",aS="v",oS="s",lS="r",uS="f",cS=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,dS="ls",hS="p",Wf="ac",fS="websocket",pS="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mS{constructor(e,n,s,o,u=!1,d="",f=!1,p=!1,m=null){this.secure=n,this.namespace=s,this.webSocketOnly=o,this.nodeAdmin=u,this.persistenceKey=d,this.includeNamespaceInQueryParams=f,this.isUsingEmulator=p,this.emulatorOptions=m,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Pr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Pr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function IN(i){return i.host!==i.internalHost||i.isCustomHost()||i.includeNamespaceInQueryParams}function gS(i,e,n){V(typeof e=="string","typeof type must == string"),V(typeof n=="object","typeof params must == object");let s;if(e===fS)s=(i.secure?"wss://":"ws://")+i.internalHost+"/.ws?";else if(e===pS)s=(i.secure?"https://":"http://")+i.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);IN(i)&&(n.ns=i.namespace);const o=[];return ft(n,(u,d)=>{o.push(u+"="+d)}),s+o.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NN{constructor(){this.counters_={}}incrementCounter(e,n=1){Jt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return AA(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rf={},Af={};function Pp(i){const e=i.toString();return Rf[e]||(Rf[e]=new NN),Rf[e]}function ON(i,e){const n=i.toString();return Af[n]||(Af[n]=e()),Af[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DN{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let o=0;o<s.length;++o)s[o]&&aa(()=>{this.onMessage_(s[o])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oE="start",kN="close",MN="pLPCommand",xN="pRTLPCB",_S="id",vS="pw",yS="ser",PN="cb",LN="seg",UN="ts",zN="d",HN="dframe",ES=1870,bS=30,BN=ES-bS,VN=25e3,qN=3e4;class Wi{constructor(e,n,s,o,u,d,f){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=o,this.authToken=u,this.transportSessionId=d,this.lastSessionId=f,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=sl(e),this.stats_=Pp(n),this.urlFn=p=>(this.appCheckToken&&(p[Wf]=this.appCheckToken),gS(n,pS,p))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new DN(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(qN)),_N(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Lp((...u)=>{const[d,f,p,m,_]=u;if(this.incrementIncomingBytes_(u),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,d===oE)this.id=f,this.password=p;else if(d===kN)f?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(f,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+d)},(...u)=>{const[d,f]=u;this.incrementIncomingBytes_(u),this.myPacketOrderer.handleResponse(d,f)},()=>{this.onClosed_()},this.urlFn);const s={};s[oE]="t",s[yS]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[PN]=this.scriptTagHolder.uniqueCallbackIdentifier),s[aS]=xp,this.transportSessionId&&(s[oS]=this.transportSessionId),this.lastSessionId&&(s[dS]=this.lastSessionId),this.applicationId&&(s[hS]=this.applicationId),this.appCheckToken&&(s[Wf]=this.appCheckToken),typeof location<"u"&&location.hostname&&cS.test(location.hostname)&&(s[lS]=uS);const o=this.urlFn(s);this.log_("Connecting via long-poll to "+o),this.scriptTagHolder.addTag(o,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Wi.forceAllow_=!0}static forceDisallow(){Wi.forceDisallow_=!0}static isAvailable(){return Wi.forceAllow_?!0:!Wi.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!yN()&&!EN()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=tt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Db(n),o=rS(s,BN);for(let u=0;u<o.length;u++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,o.length,o[u]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[HN]="t",s[_S]=e,s[vS]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=tt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Lp{constructor(e,n,s,o){this.onDisconnect=s,this.urlFn=o,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=tS(),window[MN+this.uniqueCallbackIdentifier]=e,window[xN+this.uniqueCallbackIdentifier]=n,this.myIFrame=Lp.createIFrame_();let u="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(u='<script>document.domain="'+document.domain+'";<\/script>');const d="<html><body>"+u+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(d),this.myIFrame.doc.close()}catch(f){dt("frame writing exception"),f.stack&&dt(f.stack),dt(f)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||dt("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[_S]=this.myID,e[vS]=this.myPW,e[yS]=this.currentSerial;let n=this.urlFn(e),s="",o=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+bS+s.length<=ES;){const d=this.pendingSegs.shift();s=s+"&"+LN+o+"="+d.seg+"&"+UN+o+"="+d.ts+"&"+zN+o+"="+d.d,o++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},o=setTimeout(s,Math.floor(VN)),u=()=>{clearTimeout(o),s()};this.addTag(e,u)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const o=s.readyState;(!o||o==="loaded"||o==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{dt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FN=16384,jN=45e3;let Zu=null;typeof MozWebSocket<"u"?Zu=MozWebSocket:typeof WebSocket<"u"&&(Zu=WebSocket);class hn{constructor(e,n,s,o,u,d,f){this.connId=e,this.applicationId=s,this.appCheckToken=o,this.authToken=u,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=sl(this.connId),this.stats_=Pp(n),this.connURL=hn.connectionURL_(n,d,f,o,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,o,u){const d={};return d[aS]=xp,typeof location<"u"&&location.hostname&&cS.test(location.hostname)&&(d[lS]=uS),n&&(d[oS]=n),s&&(d[dS]=s),o&&(d[Wf]=o),u&&(d[hS]=u),gS(e,fS,d)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Pr.set("previous_websocket_failure",!0);try{let s;LA(),this.mySock=new Zu(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const o=s.message||s.data;o&&this.log_(o),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const o=s.message||s.data;o&&this.log_(o),this.onClosed_()}}start(){}static forceDisallow(){hn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Zu!==null&&!hn.forceDisallow_}static previouslyFailed(){return Pr.isInMemoryStorage||Pr.get("previous_websocket_failure")===!0}markConnectionHealthy(){Pr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Uo(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(V(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=tt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=rS(n,FN);s.length>1&&this.sendString_(String(s.length));for(let o=0;o<s.length;o++)this.sendString_(s[o])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(jN))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}hn.responsesRequiredToBeHealthy=2;hn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{static get ALL_TRANSPORTS(){return[Wi,hn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=hn&&hn.isAvailable();let s=n&&!hn.previouslyFailed();if(e.webSocketOnly&&(n||Ct("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[hn];else{const o=this.transports_=[];for(const u of Xs.ALL_TRANSPORTS)u&&u.isAvailable()&&o.push(u);Xs.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Xs.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GN=6e4,YN=5e3,WN=10*1024,QN=100*1024,If="t",lE="d",KN="s",uE="r",XN="e",cE="o",dE="a",hE="n",fE="p",$N="h";class ZN{constructor(e,n,s,o,u,d,f,p,m,_){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=o,this.authToken_=u,this.onMessage_=d,this.onReady_=f,this.onDisconnect_=p,this.onKill_=m,this.lastSessionId=_,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=sl("c:"+this.id+":"),this.transportManager_=new Xs(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const o=e.healthyTimeout||0;o>0&&(this.healthyTimeout_=Co(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>QN?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>WN?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(o)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(If in e){const n=e[If];n===dE?this.upgradeIfSecondaryHealthy_():n===uE?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===cE&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=mo("t",e),s=mo("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:fE,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:dE,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:hE,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=mo("t",e),s=mo("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=mo(If,e);if(lE in e){const s=e[lE];if(n===$N){const o=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(o.h=this.repoInfo_.host),this.onHandshake_(o)}else if(n===hE){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let o=0;o<this.pendingDataMessages.length;++o)this.onDataMessage_(this.pendingDataMessages[o]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===KN?this.onConnectionShutdown_(s):n===uE?this.onReset_(s):n===XN?Yf("Server Error: "+s):n===cE?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Yf("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,o=e.h;this.sessionId=e.s,this.repoInfo_.host=o,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),xp!==s&&Ct("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Co(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(GN))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Co(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(YN))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:fE,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Pr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SS{put(e,n,s,o){}merge(e,n,s,o){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TS{constructor(e){this.allowedEvents_=e,this.listeners_={},V(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let o=0;o<s.length;o++)s[o].callback.apply(s[o].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const o=this.getInitialEvent(e);o&&n.apply(s,o)}off(e,n,s){this.validateEventType_(e);const o=this.listeners_[e]||[];for(let u=0;u<o.length;u++)if(o[u].callback===n&&(!s||s===o[u].context)){o.splice(u,1);return}}validateEventType_(e){V(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju extends TS{static getInstance(){return new Ju}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Ap()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return V(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pE=32,mE=768;class ye{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let o=0;o<this.pieces_.length;o++)this.pieces_[o].length>0&&(this.pieces_[s]=this.pieces_[o],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function _e(){return new ye("")}function oe(i){return i.pieceNum_>=i.pieces_.length?null:i.pieces_[i.pieceNum_]}function sr(i){return i.pieces_.length-i.pieceNum_}function Ne(i){let e=i.pieceNum_;return e<i.pieces_.length&&e++,new ye(i.pieces_,e)}function Up(i){return i.pieceNum_<i.pieces_.length?i.pieces_[i.pieces_.length-1]:null}function JN(i){let e="";for(let n=i.pieceNum_;n<i.pieces_.length;n++)i.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(i.pieces_[n])));return e||"/"}function Bo(i,e=0){return i.pieces_.slice(i.pieceNum_+e)}function wS(i){if(i.pieceNum_>=i.pieces_.length)return null;const e=[];for(let n=i.pieceNum_;n<i.pieces_.length-1;n++)e.push(i.pieces_[n]);return new ye(e,0)}function ze(i,e){const n=[];for(let s=i.pieceNum_;s<i.pieces_.length;s++)n.push(i.pieces_[s]);if(e instanceof ye)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let o=0;o<s.length;o++)s[o].length>0&&n.push(s[o])}return new ye(n,0)}function le(i){return i.pieceNum_>=i.pieces_.length}function At(i,e){const n=oe(i),s=oe(e);if(n===null)return e;if(n===s)return At(Ne(i),Ne(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+i+")")}function eO(i,e){const n=Bo(i,0),s=Bo(e,0);for(let o=0;o<n.length&&o<s.length;o++){const u=Kr(n[o],s[o]);if(u!==0)return u}return n.length===s.length?0:n.length<s.length?-1:1}function zp(i,e){if(sr(i)!==sr(e))return!1;for(let n=i.pieceNum_,s=e.pieceNum_;n<=i.pieces_.length;n++,s++)if(i.pieces_[n]!==e.pieces_[s])return!1;return!0}function fn(i,e){let n=i.pieceNum_,s=e.pieceNum_;if(sr(i)>sr(e))return!1;for(;n<i.pieces_.length;){if(i.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class tO{constructor(e,n){this.errorPrefix_=n,this.parts_=Bo(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Ec(this.parts_[s]);CS(this)}}function nO(i,e){i.parts_.length>0&&(i.byteLength_+=1),i.parts_.push(e),i.byteLength_+=Ec(e),CS(i)}function iO(i){const e=i.parts_.pop();i.byteLength_-=Ec(e),i.parts_.length>0&&(i.byteLength_-=1)}function CS(i){if(i.byteLength_>mE)throw new Error(i.errorPrefix_+"has a key path longer than "+mE+" bytes ("+i.byteLength_+").");if(i.parts_.length>pE)throw new Error(i.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+pE+") or object contains a cycle "+xr(i))}function xr(i){return i.parts_.length===0?"":"in property '"+i.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hp extends TS{static getInstance(){return new Hp}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return V(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const go=1e3,rO=60*5*1e3,gE=30*1e3,sO=1.3,aO=3e4,oO="server_kill",_E=3;class di extends SS{constructor(e,n,s,o,u,d,f,p){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=o,this.onServerInfoUpdate_=u,this.authTokenProvider_=d,this.appCheckTokenProvider_=f,this.authOverride_=p,this.id=di.nextPersistentConnectionId_++,this.log_=sl("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=go,this.maxReconnectDelay_=rO,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,p)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Hp.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ju.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const o=++this.requestNumber_,u={r:o,a:e,b:n};this.log_(tt(u)),V(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(u),s&&(this.requestCBHash_[o]=s)}get(e){this.initConnection_();const n=new Pt,o={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:d=>{const f=d.d;d.s==="ok"?n.resolve(f):n.reject(f)}};this.outstandingGets_.push(o),this.outstandingGetCount_++;const u=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(u),n.promise}listen(e,n,s,o){this.initConnection_();const u=e._queryIdentifier,d=e._path.toString();this.log_("Listen called for "+d+" "+u),this.listens.has(d)||this.listens.set(d,new Map),V(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),V(!this.listens.get(d).has(u),"listen() called twice for same path/queryId.");const f={onComplete:o,hashFn:n,query:e,tag:s};this.listens.get(d).set(u,f),this.connected_&&this.sendListen_(f)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),o=n._queryIdentifier;this.log_("Listen on "+s+" for "+o);const u={p:s},d="q";e.tag&&(u.q=n._queryObject,u.t=e.tag),u.h=e.hashFn(),this.sendRequest(d,u,f=>{const p=f.d,m=f.s;di.warnOnListenWarnings_(p,n),(this.listens.get(s)&&this.listens.get(s).get(o))===e&&(this.log_("listen response",f),m!=="ok"&&this.removeListen_(s,o),e.onComplete&&e.onComplete(m,p))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Jt(e,"w")){const s=Br(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const o='".indexOn": "'+n._queryParams.getIndex().toString()+'"',u=n._path.toString();Ct(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${o} at ${u} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||qA(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=gE)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=VA(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,o=>{const u=o.s,d=o.d||"error";this.authToken_===e&&(u==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(u,d))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),o=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+o),V(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,o)&&this.connected_&&this.sendUnlisten_(s,o,e._queryObject,n)}sendUnlisten_(e,n,s,o){this.log_("Unlisten on "+e+" for "+n);const u={p:e},d="n";o&&(u.q=s,u.t=o),this.sendRequest(d,u)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,o){const u={p:n,d:s};this.log_("onDisconnect "+e,u),this.sendRequest(e,u,d=>{o&&setTimeout(()=>{o(d.s,d.d)},Math.floor(0))})}put(e,n,s,o){this.putInternal("p",e,n,s,o)}merge(e,n,s,o){this.putInternal("m",e,n,s,o)}putInternal(e,n,s,o,u){this.initConnection_();const d={p:n,d:s};u!==void 0&&(d.h=u),this.outstandingPuts_.push({action:e,request:d,onComplete:o}),this.outstandingPutCount_++;const f=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(f):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,o=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,u=>{this.log_(n+" response",u),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),o&&o(u.s,u.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const u=s.d;this.log_("reportStats","Error sending stats: "+u)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+tt(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Yf("Unrecognized action received from server: "+tt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){V(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=go,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=go,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>aO&&(this.reconnectDelay_=go),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*sO)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),o=this.id+":"+di.nextConnectionId_++,u=this.lastSessionId;let d=!1,f=null;const p=function(){f?f.close():(d=!0,s())},m=function(y){V(f,"sendRequest call when we're not connected not allowed."),f.sendRequest(y)};this.realtime_={close:p,sendRequest:m};const _=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[y,E]=await Promise.all([this.authTokenProvider_.getToken(_),this.appCheckTokenProvider_.getToken(_)]);d?dt("getToken() completed but was canceled"):(dt("getToken() completed. Creating connection."),this.authToken_=y&&y.accessToken,this.appCheckToken_=E&&E.token,f=new ZN(o,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,I=>{Ct(I+" ("+this.repoInfo_.toString()+")"),this.interrupt(oO)},u))}catch(y){this.log_("Failed to get token: "+y),d||(this.repoInfo_.nodeAdmin&&Ct(y),p())}}}interrupt(e){dt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){dt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ku(this.interruptReasons_)&&(this.reconnectDelay_=go,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(u=>Mp(u)).join("$"):s="default";const o=this.removeListen_(e,s);o&&o.onComplete&&o.onComplete("permission_denied")}removeListen_(e,n){const s=new ye(e).toString();let o;if(this.listens.has(s)){const u=this.listens.get(s);o=u.get(n),u.delete(n),u.size===0&&this.listens.delete(s)}else o=void 0;return o}onAuthRevoked_(e,n){dt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=_E&&(this.reconnectDelay_=gE,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){dt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=_E&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Zb.replace(/\./g,"-")]=1,Ap()?e["framework.cordova"]=1:yc()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ju.getInstance().currentlyOnline();return Ku(this.interruptReasons_)&&e}}di.nextPersistentConnectionId_=0;di.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new de(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new de(rr,e),o=new de(rr,n);return this.compare(s,o)!==0}minPost(){return de.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Uu;class RS extends Sc{static get __EMPTY_NODE(){return Uu}static set __EMPTY_NODE(e){Uu=e}compare(e,n){return Kr(e.name,n.name)}isDefinedOn(e){throw sa("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return de.MIN}maxPost(){return new de(mi,Uu)}makePost(e,n){return V(typeof e=="string","KeyIndex indexValue must always be a string."),new de(e,Uu)}toString(){return".key"}}const Bn=new RS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(e,n,s,o,u=null){this.isReverse_=o,this.resultGenerator_=u,this.nodeStack_=[];let d=1;for(;!e.isEmpty();)if(e=e,d=n?s(e.key,n):1,o&&(d*=-1),d<0)this.isReverse_?e=e.left:e=e.right;else if(d===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ct{constructor(e,n,s,o,u){this.key=e,this.value=n,this.color=s??ct.RED,this.left=o??Lt.EMPTY_NODE,this.right=u??Lt.EMPTY_NODE}copy(e,n,s,o,u){return new ct(e??this.key,n??this.value,s??this.color,o??this.left,u??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let o=this;const u=s(e,o.key);return u<0?o=o.copy(null,null,null,o.left.insert(e,n,s),null):u===0?o=o.copy(null,n,null,null,null):o=o.copy(null,null,null,null,o.right.insert(e,n,s)),o.fixUp_()}removeMin_(){if(this.left.isEmpty())return Lt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,o;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Lt.EMPTY_NODE;o=s.right.min_(),s=s.copy(o.key,o.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ct.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ct.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ct.RED=!0;ct.BLACK=!1;class lO{copy(e,n,s,o,u){return this}insert(e,n,s){return new ct(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Lt{constructor(e,n=Lt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Lt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ct.BLACK,null,null))}remove(e){return new Lt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ct.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,o=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return o?o.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(o=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new zu(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new zu(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new zu(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new zu(this.root_,null,this.comparator_,!0,e)}}Lt.EMPTY_NODE=new lO;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uO(i,e){return Kr(i.name,e.name)}function Bp(i,e){return Kr(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qf;function cO(i){Qf=i}const AS=function(i){return typeof i=="number"?"number:"+sS(i):"string:"+i},IS=function(i){if(i.isLeafNode()){const e=i.val();V(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Jt(e,".sv"),"Priority must be a string or number.")}else V(i===Qf||i.isEmpty(),"priority of unexpected type.");V(i===Qf||i.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vE;class lt{static set __childrenNodeConstructor(e){vE=e}static get __childrenNodeConstructor(){return vE}constructor(e,n=lt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,V(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),IS(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new lt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:lt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return le(e)?this:oe(e)===".priority"?this.priorityNode_:lt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:lt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=oe(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(V(s!==".priority"||sr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,lt.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ne(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+AS(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=sS(this.value_):e+=this.value_,this.lazyHash_=nS(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===lt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof lt.__childrenNodeConstructor?-1:(V(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,o=lt.VALUE_TYPE_ORDER.indexOf(n),u=lt.VALUE_TYPE_ORDER.indexOf(s);return V(o>=0,"Unknown leaf type: "+n),V(u>=0,"Unknown leaf type: "+s),o===u?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:u-o}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}lt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let NS,OS;function dO(i){NS=i}function hO(i){OS=i}class fO extends Sc{compare(e,n){const s=e.node.getPriority(),o=n.node.getPriority(),u=s.compareTo(o);return u===0?Kr(e.name,n.name):u}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return de.MIN}maxPost(){return new de(mi,new lt("[PRIORITY-POST]",OS))}makePost(e,n){const s=NS(e);return new de(n,new lt("[PRIORITY-POST]",s))}toString(){return".priority"}}const ke=new fO;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pO=Math.log(2);class mO{constructor(e){const n=u=>parseInt(Math.log(u)/pO,10),s=u=>parseInt(Array(u+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const o=s(this.count);this.bits_=e+1&o}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ec=function(i,e,n,s){i.sort(e);const o=function(p,m){const _=m-p;let y,E;if(_===0)return null;if(_===1)return y=i[p],E=n?n(y):y,new ct(E,y.node,ct.BLACK,null,null);{const I=parseInt(_/2,10)+p,A=o(p,I),B=o(I+1,m);return y=i[I],E=n?n(y):y,new ct(E,y.node,ct.BLACK,A,B)}},u=function(p){let m=null,_=null,y=i.length;const E=function(A,B){const H=y-A,z=y;y-=A;const W=o(H+1,z),q=i[H],ue=n?n(q):q;I(new ct(ue,q.node,B,null,W))},I=function(A){m?(m.left=A,m=A):(_=A,m=A)};for(let A=0;A<p.count;++A){const B=p.nextBitIsOne(),H=Math.pow(2,p.count-(A+1));B?E(H,ct.BLACK):(E(H,ct.BLACK),E(H,ct.RED))}return _},d=new mO(i.length),f=u(d);return new Lt(s||e,f)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nf;const zs={};class oi{static get Default(){return V(zs&&ke,"ChildrenNode.ts has not been loaded"),Nf=Nf||new oi({".priority":zs},{".priority":ke}),Nf}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=Br(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Lt?n:null}hasIndex(e){return Jt(this.indexSet_,e.toString())}addIndex(e,n){V(e!==Bn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let o=!1;const u=n.getIterator(de.Wrap);let d=u.getNext();for(;d;)o=o||e.isDefinedOn(d.node),s.push(d),d=u.getNext();let f;o?f=ec(s,e.getCompare()):f=zs;const p=e.toString(),m=Object.assign({},this.indexSet_);m[p]=e;const _=Object.assign({},this.indexes_);return _[p]=f,new oi(_,m)}addToIndexes(e,n){const s=Xu(this.indexes_,(o,u)=>{const d=Br(this.indexSet_,u);if(V(d,"Missing index implementation for "+u),o===zs)if(d.isDefinedOn(e.node)){const f=[],p=n.getIterator(de.Wrap);let m=p.getNext();for(;m;)m.name!==e.name&&f.push(m),m=p.getNext();return f.push(e),ec(f,d.getCompare())}else return zs;else{const f=n.get(e.name);let p=o;return f&&(p=p.remove(new de(e.name,f))),p.insert(e,e.node)}});return new oi(s,this.indexSet_)}removeFromIndexes(e,n){const s=Xu(this.indexes_,o=>{if(o===zs)return o;{const u=n.get(e.name);return u?o.remove(new de(e.name,u)):o}});return new oi(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _o;class J{static get EMPTY_NODE(){return _o||(_o=new J(new Lt(Bp),null,oi.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&IS(this.priorityNode_),this.children_.isEmpty()&&V(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||_o}updatePriority(e){return this.children_.isEmpty()?this:new J(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?_o:n}}getChild(e){const n=oe(e);return n===null?this:this.getImmediateChild(n).getChild(Ne(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(V(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new de(e,n);let o,u;n.isEmpty()?(o=this.children_.remove(e),u=this.indexMap_.removeFromIndexes(s,this.children_)):(o=this.children_.insert(e,n),u=this.indexMap_.addToIndexes(s,this.children_));const d=o.isEmpty()?_o:this.priorityNode_;return new J(o,d,u)}}updateChild(e,n){const s=oe(e);if(s===null)return n;{V(oe(e)!==".priority"||sr(e)===1,".priority must be the last token in a path");const o=this.getImmediateChild(s).updateChild(Ne(e),n);return this.updateImmediateChild(s,o)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,o=0,u=!0;if(this.forEachChild(ke,(d,f)=>{n[d]=f.val(e),s++,u&&J.INTEGER_REGEXP_.test(d)?o=Math.max(o,Number(d)):u=!1}),!e&&u&&o<2*s){const d=[];for(const f in n)d[f]=n[f];return d}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+AS(this.getPriority().val())+":"),this.forEachChild(ke,(n,s)=>{const o=s.hash();o!==""&&(e+=":"+n+":"+o)}),this.lazyHash_=e===""?"":nS(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const o=this.resolveIndex_(s);if(o){const u=o.getPredecessorKey(new de(e,n));return u?u.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new de(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new de(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(o=>n(o.name,o.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,o=>o);{const o=this.children_.getIteratorFrom(e.name,de.Wrap);let u=o.peek();for(;u!=null&&n.compare(u,e)<0;)o.getNext(),u=o.peek();return o}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,o=>o);{const o=this.children_.getReverseIteratorFrom(e.name,de.Wrap);let u=o.peek();for(;u!=null&&n.compare(u,e)>0;)o.getNext(),u=o.peek();return o}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===al?-1:0}withIndex(e){if(e===Bn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new J(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Bn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(ke),o=n.getIterator(ke);let u=s.getNext(),d=o.getNext();for(;u&&d;){if(u.name!==d.name||!u.node.equals(d.node))return!1;u=s.getNext(),d=o.getNext()}return u===null&&d===null}else return!1;else return!1}}resolveIndex_(e){return e===Bn?null:this.indexMap_.get(e.toString())}}J.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class gO extends J{constructor(){super(new Lt(Bp),J.EMPTY_NODE,oi.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return J.EMPTY_NODE}isEmpty(){return!1}}const al=new gO;Object.defineProperties(de,{MIN:{value:new de(rr,J.EMPTY_NODE)},MAX:{value:new de(mi,al)}});RS.__EMPTY_NODE=J.EMPTY_NODE;lt.__childrenNodeConstructor=J;cO(al);hO(al);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _O=!0;function Ve(i,e=null){if(i===null)return J.EMPTY_NODE;if(typeof i=="object"&&".priority"in i&&(e=i[".priority"]),V(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof i=="object"&&".value"in i&&i[".value"]!==null&&(i=i[".value"]),typeof i!="object"||".sv"in i){const n=i;return new lt(n,Ve(e))}if(!(i instanceof Array)&&_O){const n=[];let s=!1;if(ft(i,(d,f)=>{if(d.substring(0,1)!=="."){const p=Ve(f);p.isEmpty()||(s=s||!p.getPriority().isEmpty(),n.push(new de(d,p)))}}),n.length===0)return J.EMPTY_NODE;const u=ec(n,uO,d=>d.name,Bp);if(s){const d=ec(n,ke.getCompare());return new J(u,Ve(e),new oi({".priority":d},{".priority":ke}))}else return new J(u,Ve(e),oi.Default)}else{let n=J.EMPTY_NODE;return ft(i,(s,o)=>{if(Jt(i,s)&&s.substring(0,1)!=="."){const u=Ve(o);(u.isLeafNode()||!u.isEmpty())&&(n=n.updateImmediateChild(s,u))}}),n.updatePriority(Ve(e))}}dO(Ve);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vp extends Sc{constructor(e){super(),this.indexPath_=e,V(!le(e)&&oe(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),o=this.extractChild(n.node),u=s.compareTo(o);return u===0?Kr(e.name,n.name):u}makePost(e,n){const s=Ve(e),o=J.EMPTY_NODE.updateChild(this.indexPath_,s);return new de(n,o)}maxPost(){const e=J.EMPTY_NODE.updateChild(this.indexPath_,al);return new de(mi,e)}toString(){return Bo(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vO extends Sc{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Kr(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return de.MIN}maxPost(){return de.MAX}makePost(e,n){const s=Ve(e);return new de(n,s)}toString(){return".value"}}const qp=new vO;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DS(i){return{type:"value",snapshotNode:i}}function $s(i,e){return{type:"child_added",snapshotNode:e,childName:i}}function Vo(i,e){return{type:"child_removed",snapshotNode:e,childName:i}}function qo(i,e,n){return{type:"child_changed",snapshotNode:e,childName:i,oldSnap:n}}function yO(i,e){return{type:"child_moved",snapshotNode:e,childName:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fp{constructor(e){this.index_=e}updateChild(e,n,s,o,u,d){V(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const f=e.getImmediateChild(n);return f.getChild(o).equals(s.getChild(o))&&f.isEmpty()===s.isEmpty()||(d!=null&&(s.isEmpty()?e.hasChild(n)?d.trackChildChange(Vo(n,f)):V(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):f.isEmpty()?d.trackChildChange($s(n,s)):d.trackChildChange(qo(n,s,f))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(ke,(o,u)=>{n.hasChild(o)||s.trackChildChange(Vo(o,u))}),n.isLeafNode()||n.forEachChild(ke,(o,u)=>{if(e.hasChild(o)){const d=e.getImmediateChild(o);d.equals(u)||s.trackChildChange(qo(o,u,d))}else s.trackChildChange($s(o,u))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?J.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(e){this.indexedFilter_=new Fp(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Fo.getStartPost_(e),this.endPost_=Fo.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,o,u,d){return this.matches(new de(n,s))||(s=J.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,o,u,d)}updateFullNode(e,n,s){n.isLeafNode()&&(n=J.EMPTY_NODE);let o=n.withIndex(this.index_);o=o.updatePriority(J.EMPTY_NODE);const u=this;return n.forEachChild(ke,(d,f)=>{u.matches(new de(d,f))||(o=o.updateImmediateChild(d,J.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,o,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EO{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Fo(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,o,u,d){return this.rangedFilter_.matches(new de(n,s))||(s=J.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,o,u,d):this.fullLimitUpdateChild_(e,n,s,u,d)}updateFullNode(e,n,s){let o;if(n.isLeafNode()||n.isEmpty())o=J.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){o=J.EMPTY_NODE.withIndex(this.index_);let u;this.reverse_?u=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):u=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let d=0;for(;u.hasNext()&&d<this.limit_;){const f=u.getNext();if(this.withinDirectionalStart(f))if(this.withinDirectionalEnd(f))o=o.updateImmediateChild(f.name,f.node),d++;else break;else continue}}else{o=n.withIndex(this.index_),o=o.updatePriority(J.EMPTY_NODE);let u;this.reverse_?u=o.getReverseIterator(this.index_):u=o.getIterator(this.index_);let d=0;for(;u.hasNext();){const f=u.getNext();d<this.limit_&&this.withinDirectionalStart(f)&&this.withinDirectionalEnd(f)?d++:o=o.updateImmediateChild(f.name,J.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,o,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,o,u){let d;if(this.reverse_){const y=this.index_.getCompare();d=(E,I)=>y(I,E)}else d=this.index_.getCompare();const f=e;V(f.numChildren()===this.limit_,"");const p=new de(n,s),m=this.reverse_?f.getFirstChild(this.index_):f.getLastChild(this.index_),_=this.rangedFilter_.matches(p);if(f.hasChild(n)){const y=f.getImmediateChild(n);let E=o.getChildAfterChild(this.index_,m,this.reverse_);for(;E!=null&&(E.name===n||f.hasChild(E.name));)E=o.getChildAfterChild(this.index_,E,this.reverse_);const I=E==null?1:d(E,p);if(_&&!s.isEmpty()&&I>=0)return u!=null&&u.trackChildChange(qo(n,s,y)),f.updateImmediateChild(n,s);{u!=null&&u.trackChildChange(Vo(n,y));const B=f.updateImmediateChild(n,J.EMPTY_NODE);return E!=null&&this.rangedFilter_.matches(E)?(u!=null&&u.trackChildChange($s(E.name,E.node)),B.updateImmediateChild(E.name,E.node)):B}}else return s.isEmpty()?e:_&&d(m,p)>=0?(u!=null&&(u.trackChildChange(Vo(m.name,m.node)),u.trackChildChange($s(n,s))),f.updateImmediateChild(n,s).updateImmediateChild(m.name,J.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ke}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return V(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return V(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:rr}hasEnd(){return this.endSet_}getIndexEndValue(){return V(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return V(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:mi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return V(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ke}copy(){const e=new Tc;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function bO(i){return i.loadsAllData()?new Fp(i.getIndex()):i.hasLimit()?new EO(i):new Fo(i)}function SO(i,e){const n=i.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="l",n}function TO(i,e){const n=i.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="r",n}function Kf(i,e,n){const s=i.copy();return s.startSet_=!0,e===void 0&&(e=null),s.indexStartValue_=e,n!=null?(s.startNameSet_=!0,s.indexStartName_=n):(s.startNameSet_=!1,s.indexStartName_=""),s}function wO(i,e,n){let s;return i.index_===Bn||n?s=Kf(i,e,n):s=Kf(i,e,mi),s.startAfterSet_=!0,s}function Xf(i,e,n){const s=i.copy();return s.endSet_=!0,e===void 0&&(e=null),s.indexEndValue_=e,n!==void 0?(s.endNameSet_=!0,s.indexEndName_=n):(s.endNameSet_=!1,s.indexEndName_=""),s}function CO(i,e,n){let s;return i.index_===Bn||n?s=Xf(i,e,n):s=Xf(i,e,rr),s.endBeforeSet_=!0,s}function wc(i,e){const n=i.copy();return n.index_=e,n}function yE(i){const e={};if(i.isDefault())return e;let n;if(i.index_===ke?n="$priority":i.index_===qp?n="$value":i.index_===Bn?n="$key":(V(i.index_ instanceof Vp,"Unrecognized index type!"),n=i.index_.toString()),e.orderBy=tt(n),i.startSet_){const s=i.startAfterSet_?"startAfter":"startAt";e[s]=tt(i.indexStartValue_),i.startNameSet_&&(e[s]+=","+tt(i.indexStartName_))}if(i.endSet_){const s=i.endBeforeSet_?"endBefore":"endAt";e[s]=tt(i.indexEndValue_),i.endNameSet_&&(e[s]+=","+tt(i.indexEndName_))}return i.limitSet_&&(i.isViewFromLeft()?e.limitToFirst=i.limit_:e.limitToLast=i.limit_),e}function EE(i){const e={};if(i.startSet_&&(e.sp=i.indexStartValue_,i.startNameSet_&&(e.sn=i.indexStartName_),e.sin=!i.startAfterSet_),i.endSet_&&(e.ep=i.indexEndValue_,i.endNameSet_&&(e.en=i.indexEndName_),e.ein=!i.endBeforeSet_),i.limitSet_){e.l=i.limit_;let n=i.viewFrom_;n===""&&(i.isViewFromLeft()?n="l":n="r"),e.vf=n}return i.index_!==ke&&(e.i=i.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc extends SS{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(V(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,o){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=o,this.log_=sl("p:rest:"),this.listens_={}}listen(e,n,s,o){const u=e._path.toString();this.log_("Listen called for "+u+" "+e._queryIdentifier);const d=tc.getListenId_(e,s),f={};this.listens_[d]=f;const p=yE(e._queryParams);this.restRequest_(u+".json",p,(m,_)=>{let y=_;if(m===404&&(y=null,m=null),m===null&&this.onDataUpdate_(u,y,!1,s),Br(this.listens_,d)===f){let E;m?m===401?E="permission_denied":E="rest_error:"+m:E="ok",o(E,null)}})}unlisten(e,n){const s=tc.getListenId_(e,n);delete this.listens_[s]}get(e){const n=yE(e._queryParams),s=e._path.toString(),o=new Pt;return this.restRequest_(s+".json",n,(u,d)=>{let f=d;u===404&&(f=null,u=null),u===null?(this.onDataUpdate_(s,f,!1,null),o.resolve(f)):o.reject(new Error(f))}),o.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([o,u])=>{o&&o.accessToken&&(n.auth=o.accessToken),u&&u.token&&(n.ac=u.token);const d=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Qr(n);this.log_("Sending REST request for "+d);const f=new XMLHttpRequest;f.onreadystatechange=()=>{if(s&&f.readyState===4){this.log_("REST Response for "+d+" received. status:",f.status,"response:",f.responseText);let p=null;if(f.status>=200&&f.status<300){try{p=Uo(f.responseText)}catch{Ct("Failed to parse JSON response for "+d+": "+f.responseText)}s(null,p)}else f.status!==401&&f.status!==404&&Ct("Got unsuccessful REST response for "+d+" Status: "+f.status),s(f.status);s=null}},f.open("GET",d,!0),f.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RO{constructor(){this.rootNode_=J.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nc(){return{value:null,children:new Map}}function oa(i,e,n){if(le(e))i.value=n,i.children.clear();else if(i.value!==null)i.value=i.value.updateChild(e,n);else{const s=oe(e);i.children.has(s)||i.children.set(s,nc());const o=i.children.get(s);e=Ne(e),oa(o,e,n)}}function $f(i,e){if(le(e))return i.value=null,i.children.clear(),!0;if(i.value!==null){if(i.value.isLeafNode())return!1;{const n=i.value;return i.value=null,n.forEachChild(ke,(s,o)=>{oa(i,new ye(s),o)}),$f(i,e)}}else if(i.children.size>0){const n=oe(e);return e=Ne(e),i.children.has(n)&&$f(i.children.get(n),e)&&i.children.delete(n),i.children.size===0}else return!0}function Zf(i,e,n){i.value!==null?n(e,i.value):AO(i,(s,o)=>{const u=new ye(e.toString()+"/"+s);Zf(o,u,n)})}function AO(i,e){i.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IO{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&ft(this.last_,(s,o)=>{n[s]=n[s]-o}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bE=10*1e3,NO=30*1e3,OO=5*60*1e3;class DO{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new IO(e);const s=bE+(NO-bE)*Math.random();Co(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;ft(e,(o,u)=>{u>0&&Jt(this.statsToReport_,o)&&(n[o]=u,s=!0)}),s&&this.server_.reportStats(n),Co(this.reportStats_.bind(this),Math.floor(Math.random()*2*OO))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Tn;(function(i){i[i.OVERWRITE=0]="OVERWRITE",i[i.MERGE=1]="MERGE",i[i.ACK_USER_WRITE=2]="ACK_USER_WRITE",i[i.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Tn||(Tn={}));function jp(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Gp(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Yp(i){return{fromUser:!1,fromServer:!0,queryId:i,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Tn.ACK_USER_WRITE,this.source=jp()}operationForChild(e){if(le(this.path)){if(this.affectedTree.value!=null)return V(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ye(e));return new ic(_e(),n,this.revert)}}else return V(oe(this.path)===e,"operationForChild called for unrelated child."),new ic(Ne(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(e,n){this.source=e,this.path=n,this.type=Tn.LISTEN_COMPLETE}operationForChild(e){return le(this.path)?new jo(this.source,_e()):new jo(this.source,Ne(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Tn.OVERWRITE}operationForChild(e){return le(this.path)?new Vr(this.source,_e(),this.snap.getImmediateChild(e)):new Vr(this.source,Ne(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Tn.MERGE}operationForChild(e){if(le(this.path)){const n=this.children.subtree(new ye(e));return n.isEmpty()?null:n.value?new Vr(this.source,_e(),n.value):new Zs(this.source,_e(),n)}else return V(oe(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Zs(this.source,Ne(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(le(e))return this.isFullyInitialized()&&!this.filtered_;const n=oe(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kO{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function MO(i,e,n,s){const o=[],u=[];return e.forEach(d=>{d.type==="child_changed"&&i.index_.indexedValueChanged(d.oldSnap,d.snapshotNode)&&u.push(yO(d.childName,d.snapshotNode))}),vo(i,o,"child_removed",e,s,n),vo(i,o,"child_added",e,s,n),vo(i,o,"child_moved",u,s,n),vo(i,o,"child_changed",e,s,n),vo(i,o,"value",e,s,n),o}function vo(i,e,n,s,o,u){const d=s.filter(f=>f.type===n);d.sort((f,p)=>PO(i,f,p)),d.forEach(f=>{const p=xO(i,f,u);o.forEach(m=>{m.respondsTo(f.type)&&e.push(m.createEvent(p,i.query_))})})}function xO(i,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,i.index_)),e}function PO(i,e,n){if(e.childName==null||n.childName==null)throw sa("Should only compare child_ events.");const s=new de(e.childName,e.snapshotNode),o=new de(n.childName,n.snapshotNode);return i.index_.compare(s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cc(i,e){return{eventCache:i,serverCache:e}}function Ro(i,e,n,s){return Cc(new ar(e,n,s),i.serverCache)}function kS(i,e,n,s){return Cc(i.eventCache,new ar(e,n,s))}function rc(i){return i.eventCache.isFullyInitialized()?i.eventCache.getNode():null}function qr(i){return i.serverCache.isFullyInitialized()?i.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Of;const LO=()=>(Of||(Of=new Lt(vN)),Of);class De{static fromObject(e){let n=new De(null);return ft(e,(s,o)=>{n=n.set(new ye(s),o)}),n}constructor(e,n=LO()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:_e(),value:this.value};if(le(e))return null;{const s=oe(e),o=this.children.get(s);if(o!==null){const u=o.findRootMostMatchingPathAndValue(Ne(e),n);return u!=null?{path:ze(new ye(s),u.path),value:u.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(le(e))return this;{const n=oe(e),s=this.children.get(n);return s!==null?s.subtree(Ne(e)):new De(null)}}set(e,n){if(le(e))return new De(n,this.children);{const s=oe(e),u=(this.children.get(s)||new De(null)).set(Ne(e),n),d=this.children.insert(s,u);return new De(this.value,d)}}remove(e){if(le(e))return this.children.isEmpty()?new De(null):new De(null,this.children);{const n=oe(e),s=this.children.get(n);if(s){const o=s.remove(Ne(e));let u;return o.isEmpty()?u=this.children.remove(n):u=this.children.insert(n,o),this.value===null&&u.isEmpty()?new De(null):new De(this.value,u)}else return this}}get(e){if(le(e))return this.value;{const n=oe(e),s=this.children.get(n);return s?s.get(Ne(e)):null}}setTree(e,n){if(le(e))return n;{const s=oe(e),u=(this.children.get(s)||new De(null)).setTree(Ne(e),n);let d;return u.isEmpty()?d=this.children.remove(s):d=this.children.insert(s,u),new De(this.value,d)}}fold(e){return this.fold_(_e(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((o,u)=>{s[o]=u.fold_(ze(e,o),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,_e(),n)}findOnPath_(e,n,s){const o=this.value?s(n,this.value):!1;if(o)return o;if(le(e))return null;{const u=oe(e),d=this.children.get(u);return d?d.findOnPath_(Ne(e),ze(n,u),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,_e(),n)}foreachOnPath_(e,n,s){if(le(e))return this;{this.value&&s(n,this.value);const o=oe(e),u=this.children.get(o);return u?u.foreachOnPath_(Ne(e),ze(n,o),s):new De(null)}}foreach(e){this.foreach_(_e(),e)}foreach_(e,n){this.children.inorderTraversal((s,o)=>{o.foreach_(ze(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e){this.writeTree_=e}static empty(){return new Rn(new De(null))}}function Ao(i,e,n){if(le(e))return new Rn(new De(n));{const s=i.writeTree_.findRootMostValueAndPath(e);if(s!=null){const o=s.path;let u=s.value;const d=At(o,e);return u=u.updateChild(d,n),new Rn(i.writeTree_.set(o,u))}else{const o=new De(n),u=i.writeTree_.setTree(e,o);return new Rn(u)}}}function Jf(i,e,n){let s=i;return ft(n,(o,u)=>{s=Ao(s,ze(e,o),u)}),s}function SE(i,e){if(le(e))return Rn.empty();{const n=i.writeTree_.setTree(e,new De(null));return new Rn(n)}}function ep(i,e){return Xr(i,e)!=null}function Xr(i,e){const n=i.writeTree_.findRootMostValueAndPath(e);return n!=null?i.writeTree_.get(n.path).getChild(At(n.path,e)):null}function TE(i){const e=[],n=i.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ke,(s,o)=>{e.push(new de(s,o))}):i.writeTree_.children.inorderTraversal((s,o)=>{o.value!=null&&e.push(new de(s,o.value))}),e}function $i(i,e){if(le(e))return i;{const n=Xr(i,e);return n!=null?new Rn(new De(n)):new Rn(i.writeTree_.subtree(e))}}function tp(i){return i.writeTree_.isEmpty()}function Js(i,e){return MS(_e(),i.writeTree_,e)}function MS(i,e,n){if(e.value!=null)return n.updateChild(i,e.value);{let s=null;return e.children.inorderTraversal((o,u)=>{o===".priority"?(V(u.value!==null,"Priority writes must always be leaf nodes"),s=u.value):n=MS(ze(i,o),u,n)}),!n.getChild(i).isEmpty()&&s!==null&&(n=n.updateChild(ze(i,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rc(i,e){return US(e,i)}function UO(i,e,n,s,o){V(s>i.lastWriteId,"Stacking an older write on top of newer ones"),o===void 0&&(o=!0),i.allWrites.push({path:e,snap:n,writeId:s,visible:o}),o&&(i.visibleWrites=Ao(i.visibleWrites,e,n)),i.lastWriteId=s}function zO(i,e,n,s){V(s>i.lastWriteId,"Stacking an older merge on top of newer ones"),i.allWrites.push({path:e,children:n,writeId:s,visible:!0}),i.visibleWrites=Jf(i.visibleWrites,e,n),i.lastWriteId=s}function HO(i,e){for(let n=0;n<i.allWrites.length;n++){const s=i.allWrites[n];if(s.writeId===e)return s}return null}function BO(i,e){const n=i.allWrites.findIndex(f=>f.writeId===e);V(n>=0,"removeWrite called with nonexistent writeId.");const s=i.allWrites[n];i.allWrites.splice(n,1);let o=s.visible,u=!1,d=i.allWrites.length-1;for(;o&&d>=0;){const f=i.allWrites[d];f.visible&&(d>=n&&VO(f,s.path)?o=!1:fn(s.path,f.path)&&(u=!0)),d--}if(o){if(u)return qO(i),!0;if(s.snap)i.visibleWrites=SE(i.visibleWrites,s.path);else{const f=s.children;ft(f,p=>{i.visibleWrites=SE(i.visibleWrites,ze(s.path,p))})}return!0}else return!1}function VO(i,e){if(i.snap)return fn(i.path,e);for(const n in i.children)if(i.children.hasOwnProperty(n)&&fn(ze(i.path,n),e))return!0;return!1}function qO(i){i.visibleWrites=xS(i.allWrites,FO,_e()),i.allWrites.length>0?i.lastWriteId=i.allWrites[i.allWrites.length-1].writeId:i.lastWriteId=-1}function FO(i){return i.visible}function xS(i,e,n){let s=Rn.empty();for(let o=0;o<i.length;++o){const u=i[o];if(e(u)){const d=u.path;let f;if(u.snap)fn(n,d)?(f=At(n,d),s=Ao(s,f,u.snap)):fn(d,n)&&(f=At(d,n),s=Ao(s,_e(),u.snap.getChild(f)));else if(u.children){if(fn(n,d))f=At(n,d),s=Jf(s,f,u.children);else if(fn(d,n))if(f=At(d,n),le(f))s=Jf(s,_e(),u.children);else{const p=Br(u.children,oe(f));if(p){const m=p.getChild(Ne(f));s=Ao(s,_e(),m)}}}else throw sa("WriteRecord should have .snap or .children")}}return s}function PS(i,e,n,s,o){if(!s&&!o){const u=Xr(i.visibleWrites,e);if(u!=null)return u;{const d=$i(i.visibleWrites,e);if(tp(d))return n;if(n==null&&!ep(d,_e()))return null;{const f=n||J.EMPTY_NODE;return Js(d,f)}}}else{const u=$i(i.visibleWrites,e);if(!o&&tp(u))return n;if(!o&&n==null&&!ep(u,_e()))return null;{const d=function(m){return(m.visible||o)&&(!s||!~s.indexOf(m.writeId))&&(fn(m.path,e)||fn(e,m.path))},f=xS(i.allWrites,d,e),p=n||J.EMPTY_NODE;return Js(f,p)}}}function jO(i,e,n){let s=J.EMPTY_NODE;const o=Xr(i.visibleWrites,e);if(o)return o.isLeafNode()||o.forEachChild(ke,(u,d)=>{s=s.updateImmediateChild(u,d)}),s;if(n){const u=$i(i.visibleWrites,e);return n.forEachChild(ke,(d,f)=>{const p=Js($i(u,new ye(d)),f);s=s.updateImmediateChild(d,p)}),TE(u).forEach(d=>{s=s.updateImmediateChild(d.name,d.node)}),s}else{const u=$i(i.visibleWrites,e);return TE(u).forEach(d=>{s=s.updateImmediateChild(d.name,d.node)}),s}}function GO(i,e,n,s,o){V(s||o,"Either existingEventSnap or existingServerSnap must exist");const u=ze(e,n);if(ep(i.visibleWrites,u))return null;{const d=$i(i.visibleWrites,u);return tp(d)?o.getChild(n):Js(d,o.getChild(n))}}function YO(i,e,n,s){const o=ze(e,n),u=Xr(i.visibleWrites,o);if(u!=null)return u;if(s.isCompleteForChild(n)){const d=$i(i.visibleWrites,o);return Js(d,s.getNode().getImmediateChild(n))}else return null}function WO(i,e){return Xr(i.visibleWrites,e)}function QO(i,e,n,s,o,u,d){let f;const p=$i(i.visibleWrites,e),m=Xr(p,_e());if(m!=null)f=m;else if(n!=null)f=Js(p,n);else return[];if(f=f.withIndex(d),!f.isEmpty()&&!f.isLeafNode()){const _=[],y=d.getCompare(),E=u?f.getReverseIteratorFrom(s,d):f.getIteratorFrom(s,d);let I=E.getNext();for(;I&&_.length<o;)y(I,s)!==0&&_.push(I),I=E.getNext();return _}else return[]}function KO(){return{visibleWrites:Rn.empty(),allWrites:[],lastWriteId:-1}}function sc(i,e,n,s){return PS(i.writeTree,i.treePath,e,n,s)}function Wp(i,e){return jO(i.writeTree,i.treePath,e)}function wE(i,e,n,s){return GO(i.writeTree,i.treePath,e,n,s)}function ac(i,e){return WO(i.writeTree,ze(i.treePath,e))}function XO(i,e,n,s,o,u){return QO(i.writeTree,i.treePath,e,n,s,o,u)}function Qp(i,e,n){return YO(i.writeTree,i.treePath,e,n)}function LS(i,e){return US(ze(i.treePath,e),i.writeTree)}function US(i,e){return{treePath:i,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $O{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;V(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),V(s!==".priority","Only non-priority child changes can be tracked.");const o=this.changeMap.get(s);if(o){const u=o.type;if(n==="child_added"&&u==="child_removed")this.changeMap.set(s,qo(s,e.snapshotNode,o.snapshotNode));else if(n==="child_removed"&&u==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&u==="child_changed")this.changeMap.set(s,Vo(s,o.oldSnap));else if(n==="child_changed"&&u==="child_added")this.changeMap.set(s,$s(s,e.snapshotNode));else if(n==="child_changed"&&u==="child_changed")this.changeMap.set(s,qo(s,e.snapshotNode,o.oldSnap));else throw sa("Illegal combination of changes: "+e+" occurred after "+o)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZO{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const zS=new ZO;class Kp{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new ar(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Qp(this.writes_,e,s)}}getChildAfterChild(e,n,s){const o=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:qr(this.viewCache_),u=XO(this.writes_,o,n,1,s,e);return u.length===0?null:u[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JO(i){return{filter:i}}function e1(i,e){V(e.eventCache.getNode().isIndexed(i.filter.getIndex()),"Event snap not indexed"),V(e.serverCache.getNode().isIndexed(i.filter.getIndex()),"Server snap not indexed")}function t1(i,e,n,s,o){const u=new $O;let d,f;if(n.type===Tn.OVERWRITE){const m=n;m.source.fromUser?d=np(i,e,m.path,m.snap,s,o,u):(V(m.source.fromServer,"Unknown source."),f=m.source.tagged||e.serverCache.isFiltered()&&!le(m.path),d=oc(i,e,m.path,m.snap,s,o,f,u))}else if(n.type===Tn.MERGE){const m=n;m.source.fromUser?d=i1(i,e,m.path,m.children,s,o,u):(V(m.source.fromServer,"Unknown source."),f=m.source.tagged||e.serverCache.isFiltered(),d=ip(i,e,m.path,m.children,s,o,f,u))}else if(n.type===Tn.ACK_USER_WRITE){const m=n;m.revert?d=a1(i,e,m.path,s,o,u):d=r1(i,e,m.path,m.affectedTree,s,o,u)}else if(n.type===Tn.LISTEN_COMPLETE)d=s1(i,e,n.path,s,u);else throw sa("Unknown operation type: "+n.type);const p=u.getChanges();return n1(e,d,p),{viewCache:d,changes:p}}function n1(i,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const o=s.getNode().isLeafNode()||s.getNode().isEmpty(),u=rc(i);(n.length>0||!i.eventCache.isFullyInitialized()||o&&!s.getNode().equals(u)||!s.getNode().getPriority().equals(u.getPriority()))&&n.push(DS(rc(e)))}}function HS(i,e,n,s,o,u){const d=e.eventCache;if(ac(s,n)!=null)return e;{let f,p;if(le(n))if(V(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const m=qr(e),_=m instanceof J?m:J.EMPTY_NODE,y=Wp(s,_);f=i.filter.updateFullNode(e.eventCache.getNode(),y,u)}else{const m=sc(s,qr(e));f=i.filter.updateFullNode(e.eventCache.getNode(),m,u)}else{const m=oe(n);if(m===".priority"){V(sr(n)===1,"Can't have a priority with additional path components");const _=d.getNode();p=e.serverCache.getNode();const y=wE(s,n,_,p);y!=null?f=i.filter.updatePriority(_,y):f=d.getNode()}else{const _=Ne(n);let y;if(d.isCompleteForChild(m)){p=e.serverCache.getNode();const E=wE(s,n,d.getNode(),p);E!=null?y=d.getNode().getImmediateChild(m).updateChild(_,E):y=d.getNode().getImmediateChild(m)}else y=Qp(s,m,e.serverCache);y!=null?f=i.filter.updateChild(d.getNode(),m,y,_,o,u):f=d.getNode()}}return Ro(e,f,d.isFullyInitialized()||le(n),i.filter.filtersNodes())}}function oc(i,e,n,s,o,u,d,f){const p=e.serverCache;let m;const _=d?i.filter:i.filter.getIndexedFilter();if(le(n))m=_.updateFullNode(p.getNode(),s,null);else if(_.filtersNodes()&&!p.isFiltered()){const I=p.getNode().updateChild(n,s);m=_.updateFullNode(p.getNode(),I,null)}else{const I=oe(n);if(!p.isCompleteForPath(n)&&sr(n)>1)return e;const A=Ne(n),H=p.getNode().getImmediateChild(I).updateChild(A,s);I===".priority"?m=_.updatePriority(p.getNode(),H):m=_.updateChild(p.getNode(),I,H,A,zS,null)}const y=kS(e,m,p.isFullyInitialized()||le(n),_.filtersNodes()),E=new Kp(o,y,u);return HS(i,y,n,o,E,f)}function np(i,e,n,s,o,u,d){const f=e.eventCache;let p,m;const _=new Kp(o,e,u);if(le(n))m=i.filter.updateFullNode(e.eventCache.getNode(),s,d),p=Ro(e,m,!0,i.filter.filtersNodes());else{const y=oe(n);if(y===".priority")m=i.filter.updatePriority(e.eventCache.getNode(),s),p=Ro(e,m,f.isFullyInitialized(),f.isFiltered());else{const E=Ne(n),I=f.getNode().getImmediateChild(y);let A;if(le(E))A=s;else{const B=_.getCompleteChild(y);B!=null?Up(E)===".priority"&&B.getChild(wS(E)).isEmpty()?A=B:A=B.updateChild(E,s):A=J.EMPTY_NODE}if(I.equals(A))p=e;else{const B=i.filter.updateChild(f.getNode(),y,A,E,_,d);p=Ro(e,B,f.isFullyInitialized(),i.filter.filtersNodes())}}}return p}function CE(i,e){return i.eventCache.isCompleteForChild(e)}function i1(i,e,n,s,o,u,d){let f=e;return s.foreach((p,m)=>{const _=ze(n,p);CE(e,oe(_))&&(f=np(i,f,_,m,o,u,d))}),s.foreach((p,m)=>{const _=ze(n,p);CE(e,oe(_))||(f=np(i,f,_,m,o,u,d))}),f}function RE(i,e,n){return n.foreach((s,o)=>{e=e.updateChild(s,o)}),e}function ip(i,e,n,s,o,u,d,f){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let p=e,m;le(n)?m=s:m=new De(null).setTree(n,s);const _=e.serverCache.getNode();return m.children.inorderTraversal((y,E)=>{if(_.hasChild(y)){const I=e.serverCache.getNode().getImmediateChild(y),A=RE(i,I,E);p=oc(i,p,new ye(y),A,o,u,d,f)}}),m.children.inorderTraversal((y,E)=>{const I=!e.serverCache.isCompleteForChild(y)&&E.value===null;if(!_.hasChild(y)&&!I){const A=e.serverCache.getNode().getImmediateChild(y),B=RE(i,A,E);p=oc(i,p,new ye(y),B,o,u,d,f)}}),p}function r1(i,e,n,s,o,u,d){if(ac(o,n)!=null)return e;const f=e.serverCache.isFiltered(),p=e.serverCache;if(s.value!=null){if(le(n)&&p.isFullyInitialized()||p.isCompleteForPath(n))return oc(i,e,n,p.getNode().getChild(n),o,u,f,d);if(le(n)){let m=new De(null);return p.getNode().forEachChild(Bn,(_,y)=>{m=m.set(new ye(_),y)}),ip(i,e,n,m,o,u,f,d)}else return e}else{let m=new De(null);return s.foreach((_,y)=>{const E=ze(n,_);p.isCompleteForPath(E)&&(m=m.set(_,p.getNode().getChild(E)))}),ip(i,e,n,m,o,u,f,d)}}function s1(i,e,n,s,o){const u=e.serverCache,d=kS(e,u.getNode(),u.isFullyInitialized()||le(n),u.isFiltered());return HS(i,d,n,s,zS,o)}function a1(i,e,n,s,o,u){let d;if(ac(s,n)!=null)return e;{const f=new Kp(s,e,o),p=e.eventCache.getNode();let m;if(le(n)||oe(n)===".priority"){let _;if(e.serverCache.isFullyInitialized())_=sc(s,qr(e));else{const y=e.serverCache.getNode();V(y instanceof J,"serverChildren would be complete if leaf node"),_=Wp(s,y)}_=_,m=i.filter.updateFullNode(p,_,u)}else{const _=oe(n);let y=Qp(s,_,e.serverCache);y==null&&e.serverCache.isCompleteForChild(_)&&(y=p.getImmediateChild(_)),y!=null?m=i.filter.updateChild(p,_,y,Ne(n),f,u):e.eventCache.getNode().hasChild(_)?m=i.filter.updateChild(p,_,J.EMPTY_NODE,Ne(n),f,u):m=p,m.isEmpty()&&e.serverCache.isFullyInitialized()&&(d=sc(s,qr(e)),d.isLeafNode()&&(m=i.filter.updateFullNode(m,d,u)))}return d=e.serverCache.isFullyInitialized()||ac(s,_e())!=null,Ro(e,m,d,i.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o1{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,o=new Fp(s.getIndex()),u=bO(s);this.processor_=JO(u);const d=n.serverCache,f=n.eventCache,p=o.updateFullNode(J.EMPTY_NODE,d.getNode(),null),m=u.updateFullNode(J.EMPTY_NODE,f.getNode(),null),_=new ar(p,d.isFullyInitialized(),o.filtersNodes()),y=new ar(m,f.isFullyInitialized(),u.filtersNodes());this.viewCache_=Cc(y,_),this.eventGenerator_=new kO(this.query_)}get query(){return this.query_}}function l1(i){return i.viewCache_.serverCache.getNode()}function u1(i){return rc(i.viewCache_)}function c1(i,e){const n=qr(i.viewCache_);return n&&(i.query._queryParams.loadsAllData()||!le(e)&&!n.getImmediateChild(oe(e)).isEmpty())?n.getChild(e):null}function AE(i){return i.eventRegistrations_.length===0}function d1(i,e){i.eventRegistrations_.push(e)}function IE(i,e,n){const s=[];if(n){V(e==null,"A cancel should cancel all event registrations.");const o=i.query._path;i.eventRegistrations_.forEach(u=>{const d=u.createCancelEvent(n,o);d&&s.push(d)})}if(e){let o=[];for(let u=0;u<i.eventRegistrations_.length;++u){const d=i.eventRegistrations_[u];if(!d.matches(e))o.push(d);else if(e.hasAnyCallback()){o=o.concat(i.eventRegistrations_.slice(u+1));break}}i.eventRegistrations_=o}else i.eventRegistrations_=[];return s}function NE(i,e,n,s){e.type===Tn.MERGE&&e.source.queryId!==null&&(V(qr(i.viewCache_),"We should always have a full cache before handling merges"),V(rc(i.viewCache_),"Missing event cache, even though we have a server cache"));const o=i.viewCache_,u=t1(i.processor_,o,e,n,s);return e1(i.processor_,u.viewCache),V(u.viewCache.serverCache.isFullyInitialized()||!o.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),i.viewCache_=u.viewCache,BS(i,u.changes,u.viewCache.eventCache.getNode(),null)}function h1(i,e){const n=i.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ke,(u,d)=>{s.push($s(u,d))}),n.isFullyInitialized()&&s.push(DS(n.getNode())),BS(i,s,n.getNode(),e)}function BS(i,e,n,s){const o=s?[s]:i.eventRegistrations_;return MO(i.eventGenerator_,e,n,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lc;class VS{constructor(){this.views=new Map}}function f1(i){V(!lc,"__referenceConstructor has already been defined"),lc=i}function p1(){return V(lc,"Reference.ts has not been loaded"),lc}function m1(i){return i.views.size===0}function Xp(i,e,n,s){const o=e.source.queryId;if(o!==null){const u=i.views.get(o);return V(u!=null,"SyncTree gave us an op for an invalid query."),NE(u,e,n,s)}else{let u=[];for(const d of i.views.values())u=u.concat(NE(d,e,n,s));return u}}function qS(i,e,n,s,o){const u=e._queryIdentifier,d=i.views.get(u);if(!d){let f=sc(n,o?s:null),p=!1;f?p=!0:s instanceof J?(f=Wp(n,s),p=!1):(f=J.EMPTY_NODE,p=!1);const m=Cc(new ar(f,p,!1),new ar(s,o,!1));return new o1(e,m)}return d}function g1(i,e,n,s,o,u){const d=qS(i,e,s,o,u);return i.views.has(e._queryIdentifier)||i.views.set(e._queryIdentifier,d),d1(d,n),h1(d,n)}function _1(i,e,n,s){const o=e._queryIdentifier,u=[];let d=[];const f=or(i);if(o==="default")for(const[p,m]of i.views.entries())d=d.concat(IE(m,n,s)),AE(m)&&(i.views.delete(p),m.query._queryParams.loadsAllData()||u.push(m.query));else{const p=i.views.get(o);p&&(d=d.concat(IE(p,n,s)),AE(p)&&(i.views.delete(o),p.query._queryParams.loadsAllData()||u.push(p.query)))}return f&&!or(i)&&u.push(new(p1())(e._repo,e._path)),{removed:u,events:d}}function FS(i){const e=[];for(const n of i.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Zi(i,e){let n=null;for(const s of i.views.values())n=n||c1(s,e);return n}function jS(i,e){if(e._queryParams.loadsAllData())return Ac(i);{const s=e._queryIdentifier;return i.views.get(s)}}function GS(i,e){return jS(i,e)!=null}function or(i){return Ac(i)!=null}function Ac(i){for(const e of i.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let uc;function v1(i){V(!uc,"__referenceConstructor has already been defined"),uc=i}function y1(){return V(uc,"Reference.ts has not been loaded"),uc}let E1=1;class OE{constructor(e){this.listenProvider_=e,this.syncPointTree_=new De(null),this.pendingWriteTree_=KO(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function $p(i,e,n,s,o){return UO(i.pendingWriteTree_,e,n,s,o),o?la(i,new Vr(jp(),e,n)):[]}function b1(i,e,n,s){zO(i.pendingWriteTree_,e,n,s);const o=De.fromObject(n);return la(i,new Zs(jp(),e,o))}function Qi(i,e,n=!1){const s=HO(i.pendingWriteTree_,e);if(BO(i.pendingWriteTree_,e)){let u=new De(null);return s.snap!=null?u=u.set(_e(),!0):ft(s.children,d=>{u=u.set(new ye(d),!0)}),la(i,new ic(s.path,u,n))}else return[]}function ol(i,e,n){return la(i,new Vr(Gp(),e,n))}function S1(i,e,n){const s=De.fromObject(n);return la(i,new Zs(Gp(),e,s))}function T1(i,e){return la(i,new jo(Gp(),e))}function w1(i,e,n){const s=Zp(i,n);if(s){const o=Jp(s),u=o.path,d=o.queryId,f=At(u,e),p=new jo(Yp(d),f);return em(i,u,p)}else return[]}function cc(i,e,n,s,o=!1){const u=e._path,d=i.syncPointTree_.get(u);let f=[];if(d&&(e._queryIdentifier==="default"||GS(d,e))){const p=_1(d,e,n,s);m1(d)&&(i.syncPointTree_=i.syncPointTree_.remove(u));const m=p.removed;if(f=p.events,!o){const _=m.findIndex(E=>E._queryParams.loadsAllData())!==-1,y=i.syncPointTree_.findOnPath(u,(E,I)=>or(I));if(_&&!y){const E=i.syncPointTree_.subtree(u);if(!E.isEmpty()){const I=A1(E);for(let A=0;A<I.length;++A){const B=I[A],H=B.query,z=KS(i,B);i.listenProvider_.startListening(Io(H),Go(i,H),z.hashFn,z.onComplete)}}}!y&&m.length>0&&!s&&(_?i.listenProvider_.stopListening(Io(e),null):m.forEach(E=>{const I=i.queryToTagMap.get(Nc(E));i.listenProvider_.stopListening(Io(E),I)}))}I1(i,m)}return f}function YS(i,e,n,s){const o=Zp(i,s);if(o!=null){const u=Jp(o),d=u.path,f=u.queryId,p=At(d,e),m=new Vr(Yp(f),p,n);return em(i,d,m)}else return[]}function C1(i,e,n,s){const o=Zp(i,s);if(o){const u=Jp(o),d=u.path,f=u.queryId,p=At(d,e),m=De.fromObject(n),_=new Zs(Yp(f),p,m);return em(i,d,_)}else return[]}function rp(i,e,n,s=!1){const o=e._path;let u=null,d=!1;i.syncPointTree_.foreachOnPath(o,(E,I)=>{const A=At(E,o);u=u||Zi(I,A),d=d||or(I)});let f=i.syncPointTree_.get(o);f?(d=d||or(f),u=u||Zi(f,_e())):(f=new VS,i.syncPointTree_=i.syncPointTree_.set(o,f));let p;u!=null?p=!0:(p=!1,u=J.EMPTY_NODE,i.syncPointTree_.subtree(o).foreachChild((I,A)=>{const B=Zi(A,_e());B&&(u=u.updateImmediateChild(I,B))}));const m=GS(f,e);if(!m&&!e._queryParams.loadsAllData()){const E=Nc(e);V(!i.queryToTagMap.has(E),"View does not exist, but we have a tag");const I=N1();i.queryToTagMap.set(E,I),i.tagToQueryMap.set(I,E)}const _=Rc(i.pendingWriteTree_,o);let y=g1(f,e,n,_,u,p);if(!m&&!d&&!s){const E=jS(f,e);y=y.concat(O1(i,e,E))}return y}function Ic(i,e,n){const o=i.pendingWriteTree_,u=i.syncPointTree_.findOnPath(e,(d,f)=>{const p=At(d,e),m=Zi(f,p);if(m)return m});return PS(o,e,u,n,!0)}function R1(i,e){const n=e._path;let s=null;i.syncPointTree_.foreachOnPath(n,(m,_)=>{const y=At(m,n);s=s||Zi(_,y)});let o=i.syncPointTree_.get(n);o?s=s||Zi(o,_e()):(o=new VS,i.syncPointTree_=i.syncPointTree_.set(n,o));const u=s!=null,d=u?new ar(s,!0,!1):null,f=Rc(i.pendingWriteTree_,e._path),p=qS(o,e,f,u?d.getNode():J.EMPTY_NODE,u);return u1(p)}function la(i,e){return WS(e,i.syncPointTree_,null,Rc(i.pendingWriteTree_,_e()))}function WS(i,e,n,s){if(le(i.path))return QS(i,e,n,s);{const o=e.get(_e());n==null&&o!=null&&(n=Zi(o,_e()));let u=[];const d=oe(i.path),f=i.operationForChild(d),p=e.children.get(d);if(p&&f){const m=n?n.getImmediateChild(d):null,_=LS(s,d);u=u.concat(WS(f,p,m,_))}return o&&(u=u.concat(Xp(o,i,s,n))),u}}function QS(i,e,n,s){const o=e.get(_e());n==null&&o!=null&&(n=Zi(o,_e()));let u=[];return e.children.inorderTraversal((d,f)=>{const p=n?n.getImmediateChild(d):null,m=LS(s,d),_=i.operationForChild(d);_&&(u=u.concat(QS(_,f,p,m)))}),o&&(u=u.concat(Xp(o,i,s,n))),u}function KS(i,e){const n=e.query,s=Go(i,n);return{hashFn:()=>(l1(e)||J.EMPTY_NODE).hash(),onComplete:o=>{if(o==="ok")return s?w1(i,n._path,s):T1(i,n._path);{const u=bN(o,n);return cc(i,n,null,u)}}}}function Go(i,e){const n=Nc(e);return i.queryToTagMap.get(n)}function Nc(i){return i._path.toString()+"$"+i._queryIdentifier}function Zp(i,e){return i.tagToQueryMap.get(e)}function Jp(i){const e=i.indexOf("$");return V(e!==-1&&e<i.length-1,"Bad queryKey."),{queryId:i.substr(e+1),path:new ye(i.substr(0,e))}}function em(i,e,n){const s=i.syncPointTree_.get(e);V(s,"Missing sync point for query tag that we're tracking");const o=Rc(i.pendingWriteTree_,e);return Xp(s,n,o,null)}function A1(i){return i.fold((e,n,s)=>{if(n&&or(n))return[Ac(n)];{let o=[];return n&&(o=FS(n)),ft(s,(u,d)=>{o=o.concat(d)}),o}})}function Io(i){return i._queryParams.loadsAllData()&&!i._queryParams.isDefault()?new(y1())(i._repo,i._path):i}function I1(i,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const o=Nc(s),u=i.queryToTagMap.get(o);i.queryToTagMap.delete(o),i.tagToQueryMap.delete(u)}}}function N1(){return E1++}function O1(i,e,n){const s=e._path,o=Go(i,e),u=KS(i,n),d=i.listenProvider_.startListening(Io(e),o,u.hashFn,u.onComplete),f=i.syncPointTree_.subtree(s);if(o)V(!or(f.value),"If we're adding a query, it shouldn't be shadowed");else{const p=f.fold((m,_,y)=>{if(!le(m)&&_&&or(_))return[Ac(_).query];{let E=[];return _&&(E=E.concat(FS(_).map(I=>I.query))),ft(y,(I,A)=>{E=E.concat(A)}),E}});for(let m=0;m<p.length;++m){const _=p[m];i.listenProvider_.stopListening(Io(_),Go(i,_))}}return d}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new tm(n)}node(){return this.node_}}class nm{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ze(this.path_,e);return new nm(this.syncTree_,n)}node(){return Ic(this.syncTree_,this.path_)}}const D1=function(i){return i=i||{},i.timestamp=i.timestamp||new Date().getTime(),i},DE=function(i,e,n){if(!i||typeof i!="object")return i;if(V(".sv"in i,"Unexpected leaf node or priority contents"),typeof i[".sv"]=="string")return k1(i[".sv"],e,n);if(typeof i[".sv"]=="object")return M1(i[".sv"],e);V(!1,"Unexpected server value: "+JSON.stringify(i,null,2))},k1=function(i,e,n){switch(i){case"timestamp":return n.timestamp;default:V(!1,"Unexpected server value: "+i)}},M1=function(i,e,n){i.hasOwnProperty("increment")||V(!1,"Unexpected server value: "+JSON.stringify(i,null,2));const s=i.increment;typeof s!="number"&&V(!1,"Unexpected increment value: "+s);const o=e.node();if(V(o!==null&&typeof o<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!o.isLeafNode())return s;const d=o.getValue();return typeof d!="number"?s:d+s},XS=function(i,e,n,s){return rm(e,new nm(n,i),s)},im=function(i,e,n){return rm(i,new tm(e),n)};function rm(i,e,n){const s=i.getPriority().val(),o=DE(s,e.getImmediateChild(".priority"),n);let u;if(i.isLeafNode()){const d=i,f=DE(d.getValue(),e,n);return f!==d.getValue()||o!==d.getPriority().val()?new lt(f,Ve(o)):i}else{const d=i;return u=d,o!==d.getPriority().val()&&(u=u.updatePriority(new lt(o))),d.forEachChild(ke,(f,p)=>{const m=rm(p,e.getImmediateChild(f),n);m!==p&&(u=u.updateImmediateChild(f,m))}),u}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Oc(i,e){let n=e instanceof ye?e:new ye(e),s=i,o=oe(n);for(;o!==null;){const u=Br(s.node.children,o)||{children:{},childCount:0};s=new sm(o,s,u),n=Ne(n),o=oe(n)}return s}function $r(i){return i.node.value}function am(i,e){i.node.value=e,sp(i)}function $S(i){return i.node.childCount>0}function x1(i){return $r(i)===void 0&&!$S(i)}function Dc(i,e){ft(i.node.children,(n,s)=>{e(new sm(n,i,s))})}function ZS(i,e,n,s){n&&e(i),Dc(i,o=>{ZS(o,e,!0)})}function P1(i,e,n){let s=i.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function ll(i){return new ye(i.parent===null?i.name:ll(i.parent)+"/"+i.name)}function sp(i){i.parent!==null&&L1(i.parent,i.name,i)}function L1(i,e,n){const s=x1(n),o=Jt(i.node.children,e);s&&o?(delete i.node.children[e],i.node.childCount--,sp(i)):!s&&!o&&(i.node.children[e]=n.node,i.node.childCount++,sp(i))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U1=/[\[\].#$\/\u0000-\u001F\u007F]/,z1=/[\[\].#$\u0000-\u001F\u007F]/,Df=10*1024*1024,kc=function(i){return typeof i=="string"&&i.length!==0&&!U1.test(i)},JS=function(i){return typeof i=="string"&&i.length!==0&&!z1.test(i)},H1=function(i){return i&&(i=i.replace(/^\/*\.info(\/|$)/,"/")),JS(i)},Yo=function(i){return i===null||typeof i=="string"||typeof i=="number"&&!bc(i)||i&&typeof i=="object"&&Jt(i,".sv")},Fn=function(i,e,n,s){s&&e===void 0||ul(zt(i,"value"),e,n)},ul=function(i,e,n){const s=n instanceof ye?new tO(n,i):n;if(e===void 0)throw new Error(i+"contains undefined "+xr(s));if(typeof e=="function")throw new Error(i+"contains a function "+xr(s)+" with contents = "+e.toString());if(bc(e))throw new Error(i+"contains "+e.toString()+" "+xr(s));if(typeof e=="string"&&e.length>Df/3&&Ec(e)>Df)throw new Error(i+"contains a string greater than "+Df+" utf8 bytes "+xr(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let o=!1,u=!1;if(ft(e,(d,f)=>{if(d===".value")o=!0;else if(d!==".priority"&&d!==".sv"&&(u=!0,!kc(d)))throw new Error(i+" contains an invalid key ("+d+") "+xr(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);nO(s,d),ul(i,f,s),iO(s)}),o&&u)throw new Error(i+' contains ".value" child '+xr(s)+" in addition to actual children.")}},B1=function(i,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const u=Bo(s);for(let d=0;d<u.length;d++)if(!(u[d]===".priority"&&d===u.length-1)){if(!kc(u[d]))throw new Error(i+"contains an invalid key ("+u[d]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(eO);let o=null;for(n=0;n<e.length;n++){if(s=e[n],o!==null&&fn(o,s))throw new Error(i+"contains a path "+o.toString()+" that is ancestor of another path "+s.toString());o=s}},e0=function(i,e,n,s){const o=zt(i,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(o+" must be an object containing the children to replace.");const u=[];ft(e,(d,f)=>{const p=new ye(d);if(ul(o,f,ze(n,p)),Up(p)===".priority"&&!Yo(f))throw new Error(o+"contains an invalid value for '"+p.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");u.push(p)}),B1(o,u)},om=function(i,e,n){if(bc(e))throw new Error(zt(i,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!Yo(e))throw new Error(zt(i,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},cl=function(i,e,n,s){if(n!==void 0&&!kc(n))throw new Error(zt(i,e)+'was an invalid key = "'+n+`".  Firebase keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]").`)},Wo=function(i,e,n,s){if(!JS(n))throw new Error(zt(i,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},V1=function(i,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Wo(i,e,n)},pn=function(i,e){if(oe(e)===".info")throw new Error(i+" failed = Can't modify data under /.info/")},t0=function(i,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!kc(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!H1(n))throw new Error(zt(i,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q1{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Mc(i,e){let n=null;for(let s=0;s<e.length;s++){const o=e[s],u=o.getPath();n!==null&&!zp(u,n.path)&&(i.eventLists_.push(n),n=null),n===null&&(n={events:[],path:u}),n.events.push(o)}n&&i.eventLists_.push(n)}function n0(i,e,n){Mc(i,n),i0(i,s=>zp(s,e))}function en(i,e,n){Mc(i,n),i0(i,s=>fn(s,e)||fn(e,s))}function i0(i,e){i.recursionDepth_++;let n=!0;for(let s=0;s<i.eventLists_.length;s++){const o=i.eventLists_[s];if(o){const u=o.path;e(u)?(F1(i.eventLists_[s]),i.eventLists_[s]=null):n=!1}}n&&(i.eventLists_=[]),i.recursionDepth_--}function F1(i){for(let e=0;e<i.events.length;e++){const n=i.events[e];if(n!==null){i.events[e]=null;const s=n.getEventRunner();Ur&&dt("event: "+n.toString()),aa(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r0="repo_interrupt",j1=25;class G1{constructor(e,n,s,o){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=o,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new q1,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=nc(),this.transactionQueueTree_=new sm,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Y1(i,e,n){if(i.stats_=Pp(i.repoInfo_),i.forceRestClient_||CN())i.server_=new tc(i.repoInfo_,(s,o,u,d)=>{kE(i,s,o,u,d)},i.authTokenProvider_,i.appCheckProvider_),setTimeout(()=>ME(i,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{tt(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}i.persistentConnection_=new di(i.repoInfo_,e,(s,o,u,d)=>{kE(i,s,o,u,d)},s=>{ME(i,s)},s=>{W1(i,s)},i.authTokenProvider_,i.appCheckProvider_,n),i.server_=i.persistentConnection_}i.authTokenProvider_.addTokenChangeListener(s=>{i.server_.refreshAuthToken(s)}),i.appCheckProvider_.addTokenChangeListener(s=>{i.server_.refreshAppCheckToken(s.token)}),i.statsReporter_=ON(i.repoInfo_,()=>new DO(i.stats_,i.server_)),i.infoData_=new RO,i.infoSyncTree_=new OE({startListening:(s,o,u,d)=>{let f=[];const p=i.infoData_.getNode(s._path);return p.isEmpty()||(f=ol(i.infoSyncTree_,s._path,p),setTimeout(()=>{d("ok")},0)),f},stopListening:()=>{}}),lm(i,"connected",!1),i.serverSyncTree_=new OE({startListening:(s,o,u,d)=>(i.server_.listen(s,u,o,(f,p)=>{const m=d(f,p);en(i.eventQueue_,s._path,m)}),[]),stopListening:(s,o)=>{i.server_.unlisten(s,o)}})}function s0(i){const n=i.infoData_.getNode(new ye(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function dl(i){return D1({timestamp:s0(i)})}function kE(i,e,n,s,o){i.dataUpdateCount++;const u=new ye(e);n=i.interceptServerDataCallback_?i.interceptServerDataCallback_(e,n):n;let d=[];if(o)if(s){const p=Xu(n,m=>Ve(m));d=C1(i.serverSyncTree_,u,p,o)}else{const p=Ve(n);d=YS(i.serverSyncTree_,u,p,o)}else if(s){const p=Xu(n,m=>Ve(m));d=S1(i.serverSyncTree_,u,p)}else{const p=Ve(n);d=ol(i.serverSyncTree_,u,p)}let f=u;d.length>0&&(f=ea(i,u)),en(i.eventQueue_,f,d)}function ME(i,e){lm(i,"connected",e),e===!1&&X1(i)}function W1(i,e){ft(e,(n,s)=>{lm(i,n,s)})}function lm(i,e,n){const s=new ye("/.info/"+e),o=Ve(n);i.infoData_.updateSnapshot(s,o);const u=ol(i.infoSyncTree_,s,o);en(i.eventQueue_,s,u)}function xc(i){return i.nextWriteId_++}function Q1(i,e,n){const s=R1(i.serverSyncTree_,e);return s!=null?Promise.resolve(s):i.server_.get(e).then(o=>{const u=Ve(o).withIndex(e._queryParams.getIndex());rp(i.serverSyncTree_,e,n,!0);let d;if(e._queryParams.loadsAllData())d=ol(i.serverSyncTree_,e._path,u);else{const f=Go(i.serverSyncTree_,e);d=YS(i.serverSyncTree_,e._path,u,f)}return en(i.eventQueue_,e._path,d),cc(i.serverSyncTree_,e,n,null,!0),u},o=>(ua(i,"get for query "+tt(e)+" failed: "+o),Promise.reject(new Error(o))))}function um(i,e,n,s,o){ua(i,"set",{path:e.toString(),value:n,priority:s});const u=dl(i),d=Ve(n,s),f=Ic(i.serverSyncTree_,e),p=im(d,f,u),m=xc(i),_=$p(i.serverSyncTree_,e,p,m,!0);Mc(i.eventQueue_,_),i.server_.put(e.toString(),d.val(!0),(E,I)=>{const A=E==="ok";A||Ct("set at "+e+" failed: "+E);const B=Qi(i.serverSyncTree_,m,!A);en(i.eventQueue_,e,B),lr(i,o,E,I)});const y=dm(i,e);ea(i,y),en(i.eventQueue_,y,[])}function K1(i,e,n,s){ua(i,"update",{path:e.toString(),value:n});let o=!0;const u=dl(i),d={};if(ft(n,(f,p)=>{o=!1,d[f]=XS(ze(e,f),Ve(p),i.serverSyncTree_,u)}),o)dt("update() called with empty data.  Don't do anything."),lr(i,s,"ok",void 0);else{const f=xc(i),p=b1(i.serverSyncTree_,e,d,f);Mc(i.eventQueue_,p),i.server_.merge(e.toString(),n,(m,_)=>{const y=m==="ok";y||Ct("update at "+e+" failed: "+m);const E=Qi(i.serverSyncTree_,f,!y),I=E.length>0?ea(i,e):e;en(i.eventQueue_,I,E),lr(i,s,m,_)}),ft(n,m=>{const _=dm(i,ze(e,m));ea(i,_)}),en(i.eventQueue_,e,[])}}function X1(i){ua(i,"onDisconnectEvents");const e=dl(i),n=nc();Zf(i.onDisconnect_,_e(),(o,u)=>{const d=XS(o,u,i.serverSyncTree_,e);oa(n,o,d)});let s=[];Zf(n,_e(),(o,u)=>{s=s.concat(ol(i.serverSyncTree_,o,u));const d=dm(i,o);ea(i,d)}),i.onDisconnect_=nc(),en(i.eventQueue_,_e(),s)}function $1(i,e,n){i.server_.onDisconnectCancel(e.toString(),(s,o)=>{s==="ok"&&$f(i.onDisconnect_,e),lr(i,n,s,o)})}function xE(i,e,n,s){const o=Ve(n);i.server_.onDisconnectPut(e.toString(),o.val(!0),(u,d)=>{u==="ok"&&oa(i.onDisconnect_,e,o),lr(i,s,u,d)})}function Z1(i,e,n,s,o){const u=Ve(n,s);i.server_.onDisconnectPut(e.toString(),u.val(!0),(d,f)=>{d==="ok"&&oa(i.onDisconnect_,e,u),lr(i,o,d,f)})}function J1(i,e,n,s){if(Ku(n)){dt("onDisconnect().update() called with empty data.  Don't do anything."),lr(i,s,"ok",void 0);return}i.server_.onDisconnectMerge(e.toString(),n,(o,u)=>{o==="ok"&&ft(n,(d,f)=>{const p=Ve(f);oa(i.onDisconnect_,ze(e,d),p)}),lr(i,s,o,u)})}function eD(i,e,n){let s;oe(e._path)===".info"?s=rp(i.infoSyncTree_,e,n):s=rp(i.serverSyncTree_,e,n),n0(i.eventQueue_,e._path,s)}function ap(i,e,n){let s;oe(e._path)===".info"?s=cc(i.infoSyncTree_,e,n):s=cc(i.serverSyncTree_,e,n),n0(i.eventQueue_,e._path,s)}function a0(i){i.persistentConnection_&&i.persistentConnection_.interrupt(r0)}function tD(i){i.persistentConnection_&&i.persistentConnection_.resume(r0)}function ua(i,...e){let n="";i.persistentConnection_&&(n=i.persistentConnection_.id+":"),dt(n,...e)}function lr(i,e,n,s){e&&aa(()=>{if(n==="ok")e(null);else{const o=(n||"error").toUpperCase();let u=o;s&&(u+=": "+s);const d=new Error(u);d.code=o,e(d)}})}function nD(i,e,n,s,o,u){ua(i,"transaction on "+e);const d={path:e,update:n,onComplete:s,status:null,order:tS(),applyLocally:u,retryCount:0,unwatcher:o,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},f=cm(i,e,void 0);d.currentInputSnapshot=f;const p=d.update(f.val());if(p===void 0)d.unwatcher(),d.currentOutputSnapshotRaw=null,d.currentOutputSnapshotResolved=null,d.onComplete&&d.onComplete(null,!1,d.currentInputSnapshot);else{ul("transaction failed: Data returned ",p,d.path),d.status=0;const m=Oc(i.transactionQueueTree_,e),_=$r(m)||[];_.push(d),am(m,_);let y;typeof p=="object"&&p!==null&&Jt(p,".priority")?(y=Br(p,".priority"),V(Yo(y),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):y=(Ic(i.serverSyncTree_,e)||J.EMPTY_NODE).getPriority().val();const E=dl(i),I=Ve(p,y),A=im(I,f,E);d.currentOutputSnapshotRaw=I,d.currentOutputSnapshotResolved=A,d.currentWriteId=xc(i);const B=$p(i.serverSyncTree_,e,A,d.currentWriteId,d.applyLocally);en(i.eventQueue_,e,B),Pc(i,i.transactionQueueTree_)}}function cm(i,e,n){return Ic(i.serverSyncTree_,e,n)||J.EMPTY_NODE}function Pc(i,e=i.transactionQueueTree_){if(e||Lc(i,e),$r(e)){const n=l0(i,e);V(n.length>0,"Sending zero length transaction queue"),n.every(o=>o.status===0)&&iD(i,ll(e),n)}else $S(e)&&Dc(e,n=>{Pc(i,n)})}function iD(i,e,n){const s=n.map(m=>m.currentWriteId),o=cm(i,e,s);let u=o;const d=o.hash();for(let m=0;m<n.length;m++){const _=n[m];V(_.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),_.status=1,_.retryCount++;const y=At(e,_.path);u=u.updateChild(y,_.currentOutputSnapshotRaw)}const f=u.val(!0),p=e;i.server_.put(p.toString(),f,m=>{ua(i,"transaction put response",{path:p.toString(),status:m});let _=[];if(m==="ok"){const y=[];for(let E=0;E<n.length;E++)n[E].status=2,_=_.concat(Qi(i.serverSyncTree_,n[E].currentWriteId)),n[E].onComplete&&y.push(()=>n[E].onComplete(null,!0,n[E].currentOutputSnapshotResolved)),n[E].unwatcher();Lc(i,Oc(i.transactionQueueTree_,e)),Pc(i,i.transactionQueueTree_),en(i.eventQueue_,e,_);for(let E=0;E<y.length;E++)aa(y[E])}else{if(m==="datastale")for(let y=0;y<n.length;y++)n[y].status===3?n[y].status=4:n[y].status=0;else{Ct("transaction at "+p.toString()+" failed: "+m);for(let y=0;y<n.length;y++)n[y].status=4,n[y].abortReason=m}ea(i,e)}},d)}function ea(i,e){const n=o0(i,e),s=ll(n),o=l0(i,n);return rD(i,o,s),s}function rD(i,e,n){if(e.length===0)return;const s=[];let o=[];const d=e.filter(f=>f.status===0).map(f=>f.currentWriteId);for(let f=0;f<e.length;f++){const p=e[f],m=At(n,p.path);let _=!1,y;if(V(m!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),p.status===4)_=!0,y=p.abortReason,o=o.concat(Qi(i.serverSyncTree_,p.currentWriteId,!0));else if(p.status===0)if(p.retryCount>=j1)_=!0,y="maxretry",o=o.concat(Qi(i.serverSyncTree_,p.currentWriteId,!0));else{const E=cm(i,p.path,d);p.currentInputSnapshot=E;const I=e[f].update(E.val());if(I!==void 0){ul("transaction failed: Data returned ",I,p.path);let A=Ve(I);typeof I=="object"&&I!=null&&Jt(I,".priority")||(A=A.updatePriority(E.getPriority()));const H=p.currentWriteId,z=dl(i),W=im(A,E,z);p.currentOutputSnapshotRaw=A,p.currentOutputSnapshotResolved=W,p.currentWriteId=xc(i),d.splice(d.indexOf(H),1),o=o.concat($p(i.serverSyncTree_,p.path,W,p.currentWriteId,p.applyLocally)),o=o.concat(Qi(i.serverSyncTree_,H,!0))}else _=!0,y="nodata",o=o.concat(Qi(i.serverSyncTree_,p.currentWriteId,!0))}en(i.eventQueue_,n,o),o=[],_&&(e[f].status=2,function(E){setTimeout(E,Math.floor(0))}(e[f].unwatcher),e[f].onComplete&&(y==="nodata"?s.push(()=>e[f].onComplete(null,!1,e[f].currentInputSnapshot)):s.push(()=>e[f].onComplete(new Error(y),!1,null))))}Lc(i,i.transactionQueueTree_);for(let f=0;f<s.length;f++)aa(s[f]);Pc(i,i.transactionQueueTree_)}function o0(i,e){let n,s=i.transactionQueueTree_;for(n=oe(e);n!==null&&$r(s)===void 0;)s=Oc(s,n),e=Ne(e),n=oe(e);return s}function l0(i,e){const n=[];return u0(i,e,n),n.sort((s,o)=>s.order-o.order),n}function u0(i,e,n){const s=$r(e);if(s)for(let o=0;o<s.length;o++)n.push(s[o]);Dc(e,o=>{u0(i,o,n)})}function Lc(i,e){const n=$r(e);if(n){let s=0;for(let o=0;o<n.length;o++)n[o].status!==2&&(n[s]=n[o],s++);n.length=s,am(e,n.length>0?n:void 0)}Dc(e,s=>{Lc(i,s)})}function dm(i,e){const n=ll(o0(i,e)),s=Oc(i.transactionQueueTree_,e);return P1(s,o=>{kf(i,o)}),kf(i,s),ZS(s,o=>{kf(i,o)}),n}function kf(i,e){const n=$r(e);if(n){const s=[];let o=[],u=-1;for(let d=0;d<n.length;d++)n[d].status===3||(n[d].status===1?(V(u===d-1,"All SENT items should be at beginning of queue."),u=d,n[d].status=3,n[d].abortReason="set"):(V(n[d].status===0,"Unexpected transaction status in abort"),n[d].unwatcher(),o=o.concat(Qi(i.serverSyncTree_,n[d].currentWriteId,!0)),n[d].onComplete&&s.push(n[d].onComplete.bind(null,new Error("set"),!1,null))));u===-1?am(e,void 0):n.length=u+1,en(i.eventQueue_,ll(e),o);for(let d=0;d<s.length;d++)aa(s[d])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sD(i){let e="";const n=i.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let o=n[s];try{o=decodeURIComponent(o.replace(/\+/g," "))}catch{}e+="/"+o}return e}function aD(i){const e={};i.charAt(0)==="?"&&(i=i.substring(1));for(const n of i.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Ct(`Invalid query segment '${n}' in query '${i}'`)}return e}const op=function(i,e){const n=oD(i),s=n.namespace;n.domain==="firebase.com"&&qn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&qn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||gN();const o=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new mS(n.host,n.secure,s,o,e,"",s!==n.subdomain),path:new ye(n.pathString)}},oD=function(i){let e="",n="",s="",o="",u="",d=!0,f="https",p=443;if(typeof i=="string"){let m=i.indexOf("//");m>=0&&(f=i.substring(0,m-1),i=i.substring(m+2));let _=i.indexOf("/");_===-1&&(_=i.length);let y=i.indexOf("?");y===-1&&(y=i.length),e=i.substring(0,Math.min(_,y)),_<y&&(o=sD(i.substring(_,y)));const E=aD(i.substring(Math.min(i.length,y)));m=e.indexOf(":"),m>=0?(d=f==="https"||f==="wss",p=parseInt(e.substring(m+1),10)):m=e.length;const I=e.slice(0,m);if(I.toLowerCase()==="localhost")n="localhost";else if(I.split(".").length<=2)n=I;else{const A=e.indexOf(".");s=e.substring(0,A).toLowerCase(),n=e.substring(A+1),u=s}"ns"in E&&(u=E.ns)}return{host:e,port:p,domain:n,subdomain:s,secure:d,scheme:f,pathString:o,namespace:u}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PE="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",lD=function(){let i=0;const e=[];return function(n){const s=n===i;i=n;let o;const u=new Array(8);for(o=7;o>=0;o--)u[o]=PE.charAt(n%64),n=Math.floor(n/64);V(n===0,"Cannot push at time == 0");let d=u.join("");if(s){for(o=11;o>=0&&e[o]===63;o--)e[o]=0;e[o]++}else for(o=0;o<12;o++)e[o]=Math.floor(Math.random()*64);for(o=0;o<12;o++)d+=PE.charAt(e[o]);return V(d.length===20,"nextPushId: Length should be 20."),d}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c0{constructor(e,n,s,o){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=o}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+tt(this.snapshot.exportVal())}}class d0{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return V(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let uD=class{constructor(e,n){this._repo=e,this._path=n}cancel(){const e=new Pt;return $1(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){pn("OnDisconnect.remove",this._path);const e=new Pt;return xE(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){pn("OnDisconnect.set",this._path),Fn("OnDisconnect.set",e,this._path,!1);const n=new Pt;return xE(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}setWithPriority(e,n){pn("OnDisconnect.setWithPriority",this._path),Fn("OnDisconnect.setWithPriority",e,this._path,!1),om("OnDisconnect.setWithPriority",n);const s=new Pt;return Z1(this._repo,this._path,e,n,s.wrapCallback(()=>{})),s.promise}update(e){pn("OnDisconnect.update",this._path),e0("OnDisconnect.update",e,this._path);const n=new Pt;return J1(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e,n,s,o){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=o}get key(){return le(this._path)?null:Up(this._path)}get ref(){return new vn(this._repo,this._path)}get _queryIdentifier(){const e=EE(this._queryParams),n=Mp(e);return n==="{}"?"default":n}get _queryObject(){return EE(this._queryParams)}isEqual(e){if(e=ie(e),!(e instanceof Ht))return!1;const n=this._repo===e._repo,s=zp(this._path,e._path),o=this._queryIdentifier===e._queryIdentifier;return n&&s&&o}toJSON(){return this.toString()}toString(){return this._repo.toString()+JN(this._path)}}function Uc(i,e){if(i._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function dr(i){let e=null,n=null;if(i.hasStart()&&(e=i.getIndexStartValue()),i.hasEnd()&&(n=i.getIndexEndValue()),i.getIndex()===Bn){const s="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",o="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(i.hasStart()){if(i.getIndexStartName()!==rr)throw new Error(s);if(typeof e!="string")throw new Error(o)}if(i.hasEnd()){if(i.getIndexEndName()!==mi)throw new Error(s);if(typeof n!="string")throw new Error(o)}}else if(i.getIndex()===ke){if(e!=null&&!Yo(e)||n!=null&&!Yo(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(V(i.getIndex()instanceof Vp||i.getIndex()===qp,"unknown index type."),e!=null&&typeof e=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function zc(i){if(i.hasStart()&&i.hasEnd()&&i.hasLimit()&&!i.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class vn extends Ht{constructor(e,n){super(e,n,new Tc,!1)}get parent(){const e=wS(this._path);return e===null?null:new vn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}let Hc=class lp{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ye(e),s=Fr(this.ref,e);return new lp(this._node.getChild(n),s,ke)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,o)=>e(new lp(o,Fr(this.ref,s),ke)))}hasChild(e){const n=new ye(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}};function h0(i,e){return i=ie(i),i._checkNotDeleted("ref"),e!==void 0?Fr(i._root,e):i._root}function LE(i,e){i=ie(i),i._checkNotDeleted("refFromURL");const n=op(e,i._repo.repoInfo_.nodeAdmin);t0("refFromURL",n);const s=n.repoInfo;return!i._repo.repoInfo_.isCustomHost()&&s.host!==i._repo.repoInfo_.host&&qn("refFromURL: Host name does not match the current database: (found "+s.host+" but expected "+i._repo.repoInfo_.host+")"),h0(i,n.path.toString())}function Fr(i,e){return i=ie(i),oe(i._path)===null?V1("child","path",e):Wo("child","path",e),new vn(i._repo,ze(i._path,e))}function cD(i,e){i=ie(i),pn("push",i._path),Fn("push",e,i._path,!0);const n=s0(i._repo),s=lD(n),o=Fr(i,s),u=Fr(i,s);let d;return e!=null?d=fm(u,e).then(()=>u):d=Promise.resolve(u),o.then=d.then.bind(d),o.catch=d.then.bind(d,void 0),o}function dD(i){return pn("remove",i._path),fm(i,null)}function fm(i,e){i=ie(i),pn("set",i._path),Fn("set",e,i._path,!1);const n=new Pt;return um(i._repo,i._path,e,null,n.wrapCallback(()=>{})),n.promise}function hD(i,e){i=ie(i),pn("setPriority",i._path),om("setPriority",e);const n=new Pt;return um(i._repo,ze(i._path,".priority"),e,null,n.wrapCallback(()=>{})),n.promise}function fD(i,e,n){if(pn("setWithPriority",i._path),Fn("setWithPriority",e,i._path,!1),om("setWithPriority",n),i.key===".length"||i.key===".keys")throw"setWithPriority failed: "+i.key+" is a read-only object.";const s=new Pt;return um(i._repo,i._path,e,n,s.wrapCallback(()=>{})),s.promise}function pD(i,e){e0("update",e,i._path);const n=new Pt;return K1(i._repo,i._path,e,n.wrapCallback(()=>{})),n.promise}function mD(i){i=ie(i);const e=new hm(()=>{}),n=new hl(e);return Q1(i._repo,i,n).then(s=>new Hc(s,new vn(i._repo,i._path),i._queryParams.getIndex()))}class hl{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new c0("value",this,new Hc(e.snapshotNode,new vn(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new d0(this,e,n):null}matches(e){return e instanceof hl?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Bc{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new d0(this,e,n):null}createEvent(e,n){V(e.childName!=null,"Child events should have a childName.");const s=Fr(new vn(n._repo,n._path),e.childName),o=n._queryParams.getIndex();return new c0(e.type,this,new Hc(e.snapshotNode,s,o),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Bc?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function fl(i,e,n,s,o){let u;if(typeof s=="object"&&(u=void 0,o=s),typeof s=="function"&&(u=s),o&&o.onlyOnce){const p=n,m=(_,y)=>{ap(i._repo,i,f),p(_,y)};m.userCallback=n.userCallback,m.context=n.context,n=m}const d=new hm(n,u||void 0),f=e==="value"?new hl(d):new Bc(e,d);return eD(i._repo,i,f),()=>ap(i._repo,i,f)}function up(i,e,n,s){return fl(i,"value",e,n,s)}function UE(i,e,n,s){return fl(i,"child_added",e,n,s)}function zE(i,e,n,s){return fl(i,"child_changed",e,n,s)}function HE(i,e,n,s){return fl(i,"child_moved",e,n,s)}function BE(i,e,n,s){return fl(i,"child_removed",e,n,s)}function VE(i,e,n){let s=null;const o=n?new hm(n):null;e==="value"?s=new hl(o):e&&(s=new Bc(e,o)),ap(i._repo,i,s)}class In{}class f0 extends In{constructor(e,n){super(),this._value=e,this._key=n,this.type="endAt"}_apply(e){Fn("endAt",this._value,e._path,!0);const n=Xf(e._queryParams,this._value,this._key);if(zc(n),dr(n),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new Ht(e._repo,e._path,n,e._orderByCalled)}}function gD(i,e){return cl("endAt","key",e),new f0(i,e)}class _D extends In{constructor(e,n){super(),this._value=e,this._key=n,this.type="endBefore"}_apply(e){Fn("endBefore",this._value,e._path,!1);const n=CO(e._queryParams,this._value,this._key);if(zc(n),dr(n),e._queryParams.hasEnd())throw new Error("endBefore: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new Ht(e._repo,e._path,n,e._orderByCalled)}}function vD(i,e){return cl("endBefore","key",e),new _D(i,e)}class p0 extends In{constructor(e,n){super(),this._value=e,this._key=n,this.type="startAt"}_apply(e){Fn("startAt",this._value,e._path,!0);const n=Kf(e._queryParams,this._value,this._key);if(zc(n),dr(n),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new Ht(e._repo,e._path,n,e._orderByCalled)}}function yD(i=null,e){return cl("startAt","key",e),new p0(i,e)}class ED extends In{constructor(e,n){super(),this._value=e,this._key=n,this.type="startAfter"}_apply(e){Fn("startAfter",this._value,e._path,!1);const n=wO(e._queryParams,this._value,this._key);if(zc(n),dr(n),e._queryParams.hasStart())throw new Error("startAfter: Starting point was already set (by another call to startAt, startAfter, or equalTo).");return new Ht(e._repo,e._path,n,e._orderByCalled)}}function bD(i,e){return cl("startAfter","key",e),new ED(i,e)}class SD extends In{constructor(e){super(),this._limit=e,this.type="limitToFirst"}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");return new Ht(e._repo,e._path,SO(e._queryParams,this._limit),e._orderByCalled)}}function TD(i){if(typeof i!="number"||Math.floor(i)!==i||i<=0)throw new Error("limitToFirst: First argument must be a positive integer.");return new SD(i)}class wD extends In{constructor(e){super(),this._limit=e,this.type="limitToLast"}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new Ht(e._repo,e._path,TO(e._queryParams,this._limit),e._orderByCalled)}}function CD(i){if(typeof i!="number"||Math.floor(i)!==i||i<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new wD(i)}class RD extends In{constructor(e){super(),this._path=e,this.type="orderByChild"}_apply(e){Uc(e,"orderByChild");const n=new ye(this._path);if(le(n))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const s=new Vp(n),o=wc(e._queryParams,s);return dr(o),new Ht(e._repo,e._path,o,!0)}}function AD(i){if(i==="$key")throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if(i==="$priority")throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if(i==="$value")throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return Wo("orderByChild","path",i),new RD(i)}class ID extends In{constructor(){super(...arguments),this.type="orderByKey"}_apply(e){Uc(e,"orderByKey");const n=wc(e._queryParams,Bn);return dr(n),new Ht(e._repo,e._path,n,!0)}}function ND(){return new ID}class OD extends In{constructor(){super(...arguments),this.type="orderByPriority"}_apply(e){Uc(e,"orderByPriority");const n=wc(e._queryParams,ke);return dr(n),new Ht(e._repo,e._path,n,!0)}}function DD(){return new OD}class kD extends In{constructor(){super(...arguments),this.type="orderByValue"}_apply(e){Uc(e,"orderByValue");const n=wc(e._queryParams,qp);return dr(n),new Ht(e._repo,e._path,n,!0)}}function MD(){return new kD}class xD extends In{constructor(e,n){super(),this._value=e,this._key=n,this.type="equalTo"}_apply(e){if(Fn("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new f0(this._value,this._key)._apply(new p0(this._value,this._key)._apply(e))}}function PD(i,e){return cl("equalTo","key",e),new xD(i,e)}function Sn(i,...e){let n=ie(i);for(const s of e)n=s._apply(n);return n}f1(vn);v1(vn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LD="FIREBASE_DATABASE_EMULATOR_HOST",cp={};let UD=!1;function zD(i,e,n,s){i.repoInfo_=new mS(e,!1,i.repoInfo_.namespace,i.repoInfo_.webSocketOnly,i.repoInfo_.nodeAdmin,i.repoInfo_.persistenceKey,i.repoInfo_.includeNamespaceInQueryParams,!0,n),s&&(i.authTokenProvider_=s)}function m0(i,e,n,s,o){let u=s||i.options.databaseURL;u===void 0&&(i.options.projectId||qn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),dt("Using default host for project ",i.options.projectId),u=`${i.options.projectId}-default-rtdb.firebaseio.com`);let d=op(u,o),f=d.repoInfo,p,m;typeof process<"u"&&nE&&(m=nE[LD]),m?(p=!0,u=`http://${m}?ns=${f.namespace}`,d=op(u,o),f=d.repoInfo):p=!d.repoInfo.secure;const _=o&&p?new qs(qs.OWNER):new AN(i.name,i.options,e);t0("Invalid Firebase Database URL",d),le(d.path)||qn("Database URL must point to the root of a Firebase Database (not including a child path).");const y=BD(f,i,_,new RN(i,n));return new VD(y,i)}function HD(i,e){const n=cp[e];(!n||n[i.key]!==i)&&qn(`Database ${e}(${i.repoInfo_}) has already been deleted.`),a0(i),delete n[i.key]}function BD(i,e,n,s){let o=cp[e.name];o||(o={},cp[e.name]=o);let u=o[i.toURLString()];return u&&qn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),u=new G1(i,UD,n,s),o[i.toURLString()]=u,u}let VD=class{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Y1(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new vn(this._repo,_e())),this._rootInternal}_delete(){return this._rootInternal!==null&&(HD(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&qn("Cannot call "+e+" on a deleted database.")}};function g0(){Xs.IS_TRANSPORT_INITIALIZED&&Ct("Transport has already been initialized. Please call this function before calling ref or setting up a listener")}function qD(){g0(),Wi.forceDisallow()}function FD(){g0(),hn.forceDisallow(),Wi.forceAllow()}function jD(i,e,n,s={}){i=ie(i),i._checkNotDeleted("useEmulator");const o=`${e}:${n}`,u=i._repoInternal;if(i._instanceStarted){if(o===i._repoInternal.repoInfo_.host&&Ws(s,u.repoInfo_.emulatorOptions))return;qn("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let d;if(u.repoInfo_.nodeAdmin)s.mockUserToken&&qn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),d=new qs(qs.OWNER);else if(s.mockUserToken){const f=typeof s.mockUserToken=="string"?s.mockUserToken:MA(s.mockUserToken,i.app.options.projectId);d=new qs(f)}zD(u,o,s,d)}function GD(i){i=ie(i),i._checkNotDeleted("goOffline"),a0(i._repo)}function YD(i){i=ie(i),i._checkNotDeleted("goOnline"),tD(i._repo)}function WD(i,e){iS(i,e)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QD(i){Jb(cr),ir(new gn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("auth-internal"),u=e.getProvider("app-check-internal");return m0(s,o,u,n)},"PUBLIC").setMultipleInstances(!0)),Cn(iE,rE,i),Cn(iE,rE,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KD={".sv":"timestamp"};function XD(){return KD}function $D(i){return{".sv":{increment:i}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ZD=class{constructor(e,n){this.committed=e,this.snapshot=n}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}};function JD(i,e,n){var s;if(i=ie(i),pn("Reference.transaction",i._path),i.key===".length"||i.key===".keys")throw"Reference.transaction failed: "+i.key+" is a read-only object.";const o=(s=n==null?void 0:n.applyLocally)!==null&&s!==void 0?s:!0,u=new Pt,d=(p,m,_)=>{let y=null;p?u.reject(p):(y=new Hc(_,new vn(i._repo,i._path),ke),u.resolve(new ZD(m,y)))},f=up(i,()=>{});return nD(i._repo,i._path,e,d,f,o),u.promise}di.prototype.simpleListen=function(i,e){this.sendRequest("q",{p:i},e)};di.prototype.echo=function(i,e){this.sendRequest("echo",{d:i},e)};QD();const ek="@firebase/database-compat",tk="2.0.5";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nk=new il("@firebase/database-compat"),_0=function(i){const e="FIREBASE WARNING: "+i;nk.warn(e)};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ik=function(i,e,n,s){if(n!==void 0&&typeof n!="boolean")throw new Error(zt(i,e)+"must be a boolean.")},rk=function(i,e,n){if(e!==void 0)switch(e){case"value":case"child_added":case"child_removed":case"child_changed":case"child_moved":break;default:throw new Error(zt(i,"eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sk{constructor(e){this._delegate=e}cancel(e){te("OnDisconnect.cancel",0,1,arguments.length),ut("OnDisconnect.cancel","onComplete",e,!0);const n=this._delegate.cancel();return e&&n.then(()=>e(null),s=>e(s)),n}remove(e){te("OnDisconnect.remove",0,1,arguments.length),ut("OnDisconnect.remove","onComplete",e,!0);const n=this._delegate.remove();return e&&n.then(()=>e(null),s=>e(s)),n}set(e,n){te("OnDisconnect.set",1,2,arguments.length),ut("OnDisconnect.set","onComplete",n,!0);const s=this._delegate.set(e);return n&&s.then(()=>n(null),o=>n(o)),s}setWithPriority(e,n,s){te("OnDisconnect.setWithPriority",2,3,arguments.length),ut("OnDisconnect.setWithPriority","onComplete",s,!0);const o=this._delegate.setWithPriority(e,n);return s&&o.then(()=>s(null),u=>s(u)),o}update(e,n){if(te("OnDisconnect.update",1,2,arguments.length),Array.isArray(e)){const o={};for(let u=0;u<e.length;++u)o[""+u]=e[u];e=o,_0("Passing an Array to firebase.database.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}ut("OnDisconnect.update","onComplete",n,!0);const s=this._delegate.update(e);return n&&s.then(()=>n(null),o=>n(o)),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ak{constructor(e,n){this.committed=e,this.snapshot=n}toJSON(){return te("TransactionResult.toJSON",0,1,arguments.length),{committed:this.committed,snapshot:this.snapshot.toJSON()}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(e,n){this._database=e,this._delegate=n}val(){return te("DataSnapshot.val",0,0,arguments.length),this._delegate.val()}exportVal(){return te("DataSnapshot.exportVal",0,0,arguments.length),this._delegate.exportVal()}toJSON(){return te("DataSnapshot.toJSON",0,1,arguments.length),this._delegate.toJSON()}exists(){return te("DataSnapshot.exists",0,0,arguments.length),this._delegate.exists()}child(e){return te("DataSnapshot.child",0,1,arguments.length),e=String(e),Wo("DataSnapshot.child","path",e),new Ji(this._database,this._delegate.child(e))}hasChild(e){return te("DataSnapshot.hasChild",1,1,arguments.length),Wo("DataSnapshot.hasChild","path",e),this._delegate.hasChild(e)}getPriority(){return te("DataSnapshot.getPriority",0,0,arguments.length),this._delegate.priority}forEach(e){return te("DataSnapshot.forEach",1,1,arguments.length),ut("DataSnapshot.forEach","action",e,!1),this._delegate.forEach(n=>e(new Ji(this._database,n)))}hasChildren(){return te("DataSnapshot.hasChildren",0,0,arguments.length),this._delegate.hasChildren()}get key(){return this._delegate.key}numChildren(){return te("DataSnapshot.numChildren",0,0,arguments.length),this._delegate.size}getRef(){return te("DataSnapshot.ref",0,0,arguments.length),new $t(this._database,this._delegate.ref)}get ref(){return this.getRef()}}class vt{constructor(e,n){this.database=e,this._delegate=n}on(e,n,s,o){var u;te("Query.on",2,4,arguments.length),ut("Query.on","callback",n,!1);const d=vt.getCancelAndContextArgs_("Query.on",s,o),f=(m,_)=>{n.call(d.context,new Ji(this.database,m),_)};f.userCallback=n,f.context=d.context;const p=(u=d.cancel)===null||u===void 0?void 0:u.bind(d.context);switch(e){case"value":return up(this._delegate,f,p),n;case"child_added":return UE(this._delegate,f,p),n;case"child_removed":return BE(this._delegate,f,p),n;case"child_changed":return zE(this._delegate,f,p),n;case"child_moved":return HE(this._delegate,f,p),n;default:throw new Error(zt("Query.on","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}}off(e,n,s){if(te("Query.off",0,3,arguments.length),rk("Query.off",e),ut("Query.off","callback",n,!0),Yy("Query.off","context",s),n){const o=()=>{};o.userCallback=n,o.context=s,VE(this._delegate,e,o)}else VE(this._delegate,e)}get(){return mD(this._delegate).then(e=>new Ji(this.database,e))}once(e,n,s,o){te("Query.once",1,4,arguments.length),ut("Query.once","callback",n,!0);const u=vt.getCancelAndContextArgs_("Query.once",s,o),d=new Pt,f=(m,_)=>{const y=new Ji(this.database,m);n&&n.call(u.context,y,_),d.resolve(y)};f.userCallback=n,f.context=u.context;const p=m=>{u.cancel&&u.cancel.call(u.context,m),d.reject(m)};switch(e){case"value":up(this._delegate,f,p,{onlyOnce:!0});break;case"child_added":UE(this._delegate,f,p,{onlyOnce:!0});break;case"child_removed":BE(this._delegate,f,p,{onlyOnce:!0});break;case"child_changed":zE(this._delegate,f,p,{onlyOnce:!0});break;case"child_moved":HE(this._delegate,f,p,{onlyOnce:!0});break;default:throw new Error(zt("Query.once","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}return d.promise}limitToFirst(e){return te("Query.limitToFirst",1,1,arguments.length),new vt(this.database,Sn(this._delegate,TD(e)))}limitToLast(e){return te("Query.limitToLast",1,1,arguments.length),new vt(this.database,Sn(this._delegate,CD(e)))}orderByChild(e){return te("Query.orderByChild",1,1,arguments.length),new vt(this.database,Sn(this._delegate,AD(e)))}orderByKey(){return te("Query.orderByKey",0,0,arguments.length),new vt(this.database,Sn(this._delegate,ND()))}orderByPriority(){return te("Query.orderByPriority",0,0,arguments.length),new vt(this.database,Sn(this._delegate,DD()))}orderByValue(){return te("Query.orderByValue",0,0,arguments.length),new vt(this.database,Sn(this._delegate,MD()))}startAt(e=null,n){return te("Query.startAt",0,2,arguments.length),new vt(this.database,Sn(this._delegate,yD(e,n)))}startAfter(e=null,n){return te("Query.startAfter",0,2,arguments.length),new vt(this.database,Sn(this._delegate,bD(e,n)))}endAt(e=null,n){return te("Query.endAt",0,2,arguments.length),new vt(this.database,Sn(this._delegate,gD(e,n)))}endBefore(e=null,n){return te("Query.endBefore",0,2,arguments.length),new vt(this.database,Sn(this._delegate,vD(e,n)))}equalTo(e,n){return te("Query.equalTo",1,2,arguments.length),new vt(this.database,Sn(this._delegate,PD(e,n)))}toString(){return te("Query.toString",0,0,arguments.length),this._delegate.toString()}toJSON(){return te("Query.toJSON",0,1,arguments.length),this._delegate.toJSON()}isEqual(e){if(te("Query.isEqual",1,1,arguments.length),!(e instanceof vt)){const n="Query.isEqual failed: First argument must be an instance of firebase.database.Query.";throw new Error(n)}return this._delegate.isEqual(e._delegate)}static getCancelAndContextArgs_(e,n,s){const o={cancel:void 0,context:void 0};if(n&&s)o.cancel=n,ut(e,"cancel",o.cancel,!0),o.context=s,Yy(e,"context",o.context);else if(n)if(typeof n=="object"&&n!==null)o.context=n;else if(typeof n=="function")o.cancel=n;else throw new Error(zt(e,"cancelOrContext")+" must either be a cancel callback or a context object.");return o}get ref(){return new $t(this.database,new vn(this._delegate._repo,this._delegate._path))}}class $t extends vt{constructor(e,n){super(e,new Ht(n._repo,n._path,new Tc,!1)),this.database=e,this._delegate=n}getKey(){return te("Reference.key",0,0,arguments.length),this._delegate.key}child(e){return te("Reference.child",1,1,arguments.length),typeof e=="number"&&(e=String(e)),new $t(this.database,Fr(this._delegate,e))}getParent(){te("Reference.parent",0,0,arguments.length);const e=this._delegate.parent;return e?new $t(this.database,e):null}getRoot(){return te("Reference.root",0,0,arguments.length),new $t(this.database,this._delegate.root)}set(e,n){te("Reference.set",1,2,arguments.length),ut("Reference.set","onComplete",n,!0);const s=fm(this._delegate,e);return n&&s.then(()=>n(null),o=>n(o)),s}update(e,n){if(te("Reference.update",1,2,arguments.length),Array.isArray(e)){const o={};for(let u=0;u<e.length;++u)o[""+u]=e[u];e=o,_0("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}pn("Reference.update",this._delegate._path),ut("Reference.update","onComplete",n,!0);const s=pD(this._delegate,e);return n&&s.then(()=>n(null),o=>n(o)),s}setWithPriority(e,n,s){te("Reference.setWithPriority",2,3,arguments.length),ut("Reference.setWithPriority","onComplete",s,!0);const o=fD(this._delegate,e,n);return s&&o.then(()=>s(null),u=>s(u)),o}remove(e){te("Reference.remove",0,1,arguments.length),ut("Reference.remove","onComplete",e,!0);const n=dD(this._delegate);return e&&n.then(()=>e(null),s=>e(s)),n}transaction(e,n,s){te("Reference.transaction",1,3,arguments.length),ut("Reference.transaction","transactionUpdate",e,!1),ut("Reference.transaction","onComplete",n,!0),ik("Reference.transaction","applyLocally",s);const o=JD(this._delegate,e,{applyLocally:s}).then(u=>new ak(u.committed,new Ji(this.database,u.snapshot)));return n&&o.then(u=>n(null,u.committed,u.snapshot),u=>n(u,!1,null)),o}setPriority(e,n){te("Reference.setPriority",1,2,arguments.length),ut("Reference.setPriority","onComplete",n,!0);const s=hD(this._delegate,e);return n&&s.then(()=>n(null),o=>n(o)),s}push(e,n){te("Reference.push",0,2,arguments.length),ut("Reference.push","onComplete",n,!0);const s=cD(this._delegate,e),o=s.then(d=>new $t(this.database,d));n&&o.then(()=>n(null),d=>n(d));const u=new $t(this.database,s);return u.then=o.then.bind(o),u.catch=o.catch.bind(o,void 0),u}onDisconnect(){return pn("Reference.onDisconnect",this._delegate._path),new sk(new uD(this._delegate._repo,this._delegate._path))}get key(){return this.getKey()}get parent(){return this.getParent()}get root(){return this.getRoot()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e,n){this._delegate=e,this.app=n,this.INTERNAL={delete:()=>this._delegate._delete(),forceWebSockets:qD,forceLongPolling:FD}}useEmulator(e,n,s={}){jD(this._delegate,e,n,s)}ref(e){if(te("database.ref",0,1,arguments.length),e instanceof $t){const n=LE(this._delegate,e.toString());return new $t(this,n)}else{const n=h0(this._delegate,e);return new $t(this,n)}}refFromURL(e){te("database.refFromURL",1,1,arguments.length);const s=LE(this._delegate,e);return new $t(this,s)}goOffline(){return te("database.goOffline",0,0,arguments.length),GD(this._delegate)}goOnline(){return te("database.goOnline",0,0,arguments.length),YD(this._delegate)}}Qo.ServerValue={TIMESTAMP:XD(),increment:i=>$D(i)};function ok({app:i,url:e,version:n,customAuthImpl:s,customAppCheckImpl:o,namespace:u,nodeAdmin:d=!1}){Jb(n);const f=new Ip("database-standalone"),p=new Vf("auth-internal",f);p.setComponent(new gn("auth-internal",()=>s,"PRIVATE"));let m;return o&&(m=new Vf("app-check-internal",f),m.setComponent(new gn("app-check-internal",()=>o,"PRIVATE"))),{instance:new Qo(m0(i,p,m,e,d),i),namespace:u}}var lk=Object.freeze({__proto__:null,initStandalone:ok});/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uk=Qo.ServerValue;function ck(i){i.INTERNAL.registerComponent(new gn("database-compat",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app-compat").getImmediate(),o=e.getProvider("database").getImmediate({identifier:n});return new Qo(o,s)},"PUBLIC").setServiceProps({Reference:$t,Query:vt,Database:Qo,DataSnapshot:Ji,enableLogging:WD,INTERNAL:lk,ServerValue:uk}).setMultipleInstances(!0)),i.registerVersion(ek,tk)}ck(vi);function pm(i,e){var n={};for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&e.indexOf(s)<0&&(n[s]=i[s]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(i);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(i,s[o])&&(n[s[o]]=i[s[o]]);return n}const yo={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",TWITTER:"twitter.com"},Hs={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dk(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registered for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements.","invalid-hosting-link-domain":"The provided Hosting link domain is not configured in Firebase Hosting or is not owned by the current project. This cannot be a default Hosting domain (`web.app` or `firebaseapp.com`)."}}function v0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const hk=dk,fk=v0,y0=new Wr("auth","Firebase",v0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dc=new il("@firebase/auth");function pk(i,...e){dc.logLevel<=Se.WARN&&dc.warn(`Auth (${cr}): ${i}`,...e)}function qu(i,...e){dc.logLevel<=Se.ERROR&&dc.error(`Auth (${cr}): ${i}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(i,...e){throw gm(i,...e)}function nt(i,...e){return gm(i,...e)}function mm(i,e,n){const s=Object.assign(Object.assign({},fk()),{[e]:n});return new Wr("auth","Firebase",s).create(e,{appName:i.name})}function ht(i){return mm(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ca(i,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&yt(i,"argument-error"),mm(i,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function gm(i,...e){if(typeof i!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(n,...s)}return y0.create(i,...e)}function U(i,e,...n){if(!i)throw gm(e,...n)}function Hn(i){const e="INTERNAL ASSERTION FAILED: "+i;throw qu(e),new Error(e)}function An(i,e){i||Hn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ko(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function _m(){return qE()==="http:"||qE()==="https:"}function qE(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(_m()||Lb()||"connection"in navigator)?navigator.onLine:!0}function gk(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(e,n){this.shortDelay=e,this.longDelay=n,An(n>e,"Short delay should be less than long delay!"),this.isMobile=Ap()||yc()}get(){return mk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vm(i,e){An(i.emulator,"Emulator should always be set here");const{url:n}=i.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E0{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Hn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Hn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Hn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _k={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vk=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],yk=new pl(3e4,6e4);function Ye(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function We(i,e,n,s,o={}){return b0(i,o,async()=>{let u={},d={};s&&(e==="GET"?d=s:u={body:JSON.stringify(s)});const f=Qr(Object.assign({key:i.config.apiKey},d)).slice(1),p=await i._getAdditionalHeaders();p["Content-Type"]="application/json",i.languageCode&&(p["X-Firebase-Locale"]=i.languageCode);const m=Object.assign({method:e,headers:p},u);return PA()||(m.referrerPolicy="no-referrer"),E0.fetch()(await S0(i,i.config.apiHost,n,f),m)})}async function b0(i,e,n){i._canInitEmulator=!1;const s=Object.assign(Object.assign({},_k),e);try{const o=new bk(i),u=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const d=await u.json();if("needConfirmation"in d)throw wo(i,"account-exists-with-different-credential",d);if(u.ok&&!("errorMessage"in d))return d;{const f=u.ok?d.errorMessage:d.error.message,[p,m]=f.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw wo(i,"credential-already-in-use",d);if(p==="EMAIL_EXISTS")throw wo(i,"email-already-in-use",d);if(p==="USER_DISABLED")throw wo(i,"user-disabled",d);const _=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(m)throw mm(i,_,m);yt(i,_)}}catch(o){if(o instanceof Ut)throw o;yt(i,"network-request-failed",{message:String(o)})}}async function yi(i,e,n,s,o={}){const u=await We(i,e,n,s,o);return"mfaPendingCredential"in u&&yt(i,"multi-factor-auth-required",{_serverResponse:u}),u}async function S0(i,e,n,s){const o=`${e}${n}?${s}`,u=i,d=u.config.emulator?vm(i.config,o):`${i.config.apiScheme}://${o}`;return vk.includes(n)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(d).toString():d}function Ek(i){switch(i){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class bk{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(nt(this.auth,"network-request-failed")),yk.get())})}}function wo(i,e,n){const s={appName:i.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const o=nt(i,e,s);return o.customData._tokenResponse=n,o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FE(i){return i!==void 0&&i.getResponse!==void 0}function jE(i){return i!==void 0&&i.enterprise!==void 0}class T0{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Ek(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sk(i){return(await We(i,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function w0(i,e){return We(i,"GET","/v2/recaptchaConfig",Ye(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tk(i,e){return We(i,"POST","/v1/accounts:delete",e)}async function wk(i,e){return We(i,"POST","/v1/accounts:update",e)}async function hc(i,e){return We(i,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function No(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ck(i,e=!1){const n=ie(i),s=await n.getIdToken(e),o=Vc(s);U(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,d=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:No(Mf(o.auth_time)),issuedAtTime:No(Mf(o.iat)),expirationTime:No(Mf(o.exp)),signInProvider:d||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function Mf(i){return Number(i)*1e3}function Vc(i){const[e,n,s]=i.split(".");if(e===void 0||n===void 0||s===void 0)return qu("JWT malformed, contained fewer than 3 sections"),null;try{const o=Po(n);return o?JSON.parse(o):(qu("Failed to decode base64 JWT payload"),null)}catch(o){return qu("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function GE(i){const e=Vc(i);return U(e,"internal-error"),U(typeof e.exp<"u","internal-error"),U(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gi(i,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Ut&&Rk(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function Rk({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ak{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=No(this.lastLoginAt),this.creationTime=No(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xo(i){var e;const n=i.auth,s=await i.getIdToken(),o=await gi(i,hc(n,{idToken:s}));U(o==null?void 0:o.users.length,n,"internal-error");const u=o.users[0];i._notifyReloadListener(u);const d=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?C0(u.providerUserInfo):[],f=Nk(i.providerData,d),p=i.isAnonymous,m=!(i.email&&u.passwordHash)&&!(f!=null&&f.length),_=p?m:!1,y={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:f,metadata:new dp(u.createdAt,u.lastLoginAt),isAnonymous:_};Object.assign(i,y)}async function Ik(i){const e=ie(i);await Xo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Nk(i,e){return[...i.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function C0(i){return i.map(e=>{var{providerId:n}=e,s=pm(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ok(i,e){const n=await b0(i,{},async()=>{const s=Qr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=i.config,d=await S0(i,o,"/v1/token",`key=${u}`),f=await i._getAdditionalHeaders();return f["Content-Type"]="application/x-www-form-urlencoded",E0.fetch()(d,{method:"POST",headers:f,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Dk(i,e){return We(i,"POST","/v2/accounts:revokeToken",Ye(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){U(e.idToken,"internal-error"),U(typeof e.idToken<"u","internal-error"),U(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):GE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){U(e.length!==0,"internal-error");const n=GE(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(U(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:o,expiresIn:u}=await Ok(e,n);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:o,expirationTime:u}=n,d=new Fs;return s&&(U(typeof s=="string","internal-error",{appName:e}),d.refreshToken=s),o&&(U(typeof o=="string","internal-error",{appName:e}),d.accessToken=o),u&&(U(typeof u=="number","internal-error",{appName:e}),d.expirationTime=u),d}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Fs,this.toJSON())}_performRefresh(){return Hn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yi(i,e){U(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class wn{constructor(e){var{uid:n,auth:s,stsTokenManager:o}=e,u=pm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ak(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new dp(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const n=await gi(this,this.stsTokenManager.getToken(this.auth,e));return U(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Ck(this,e)}reload(){return Ik(this)}_assign(e){this!==e&&(U(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new wn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Xo(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ue(this.auth.app))return Promise.reject(ht(this.auth));const e=await this.getIdToken();return await gi(this,Tk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,o,u,d,f,p,m,_;const y=(s=n.displayName)!==null&&s!==void 0?s:void 0,E=(o=n.email)!==null&&o!==void 0?o:void 0,I=(u=n.phoneNumber)!==null&&u!==void 0?u:void 0,A=(d=n.photoURL)!==null&&d!==void 0?d:void 0,B=(f=n.tenantId)!==null&&f!==void 0?f:void 0,H=(p=n._redirectEventId)!==null&&p!==void 0?p:void 0,z=(m=n.createdAt)!==null&&m!==void 0?m:void 0,W=(_=n.lastLoginAt)!==null&&_!==void 0?_:void 0,{uid:q,emailVerified:ue,isAnonymous:$,providerData:xe,stsTokenManager:Me}=n;U(q&&Me,e,"internal-error");const He=Fs.fromJSON(this.name,Me);U(typeof q=="string",e,"internal-error"),Yi(y,e.name),Yi(E,e.name),U(typeof ue=="boolean",e,"internal-error"),U(typeof $=="boolean",e,"internal-error"),Yi(I,e.name),Yi(A,e.name),Yi(B,e.name),Yi(H,e.name),Yi(z,e.name),Yi(W,e.name);const Te=new wn({uid:q,auth:e,email:E,emailVerified:ue,displayName:y,isAnonymous:$,photoURL:A,phoneNumber:I,tenantId:B,stsTokenManager:He,createdAt:z,lastLoginAt:W});return xe&&Array.isArray(xe)&&(Te.providerData=xe.map(pt=>Object.assign({},pt))),H&&(Te._redirectEventId=H),Te}static async _fromIdTokenResponse(e,n,s=!1){const o=new Fs;o.updateFromServerResponse(n);const u=new wn({uid:n.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await Xo(u),u}static async _fromGetAccountInfoResponse(e,n,s){const o=n.users[0];U(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?C0(o.providerUserInfo):[],d=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),f=new Fs;f.updateFromIdToken(s);const p=new wn({uid:o.localId,auth:e,stsTokenManager:f,isAnonymous:d}),m={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new dp(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(p,m),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YE=new Map;function Zt(i){An(i instanceof Function,"Expected a class definition");let e=YE.get(i);return e?(An(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,YE.set(i,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}R0.type="NONE";const ta=R0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zr(i,e,n){return`firebase:${i}:${e}:${n}`}class js{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=zr(this.userKey,o.apiKey,u),this.fullPersistenceKey=zr("persistence",o.apiKey,u),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await hc(this.auth,{idToken:e}).catch(()=>{});return n?wn._fromGetAccountInfoResponse(this.auth,n,e):null}return wn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new js(Zt(ta),e,s);const o=(await Promise.all(n.map(async m=>{if(await m._isAvailable())return m}))).filter(m=>m);let u=o[0]||Zt(ta);const d=zr(s,e.config.apiKey,e.name);let f=null;for(const m of n)try{const _=await m._get(d);if(_){let y;if(typeof _=="string"){const E=await hc(e,{idToken:_}).catch(()=>{});if(!E)break;y=await wn._fromGetAccountInfoResponse(e,E,_)}else y=wn._fromJSON(e,_);m!==u&&(f=y),u=m;break}}catch{}const p=o.filter(m=>m._shouldAllowMigration);return!u._shouldAllowMigration||!p.length?new js(u,e,s):(u=p[0],f&&await u._set(d,f.toJSON()),await Promise.all(n.map(async m=>{if(m!==u)try{await m._remove(d)}catch{}})),new js(u,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WE(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(O0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(A0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(D0(e))return"Blackberry";if(k0(e))return"Webos";if(I0(e))return"Safari";if((e.includes("chrome/")||N0(e))&&!e.includes("edge/"))return"Chrome";if(ml(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function A0(i=it()){return/firefox\//i.test(i)}function I0(i=it()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function N0(i=it()){return/crios\//i.test(i)}function O0(i=it()){return/iemobile/i.test(i)}function ml(i=it()){return/android/i.test(i)}function D0(i=it()){return/blackberry/i.test(i)}function k0(i=it()){return/webos/i.test(i)}function gl(i=it()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function kk(i=it()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(i)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(i)}function Mk(i=it()){var e;return gl(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function xk(){return Ub()&&document.documentMode===10}function M0(i=it()){return gl(i)||ml(i)||k0(i)||D0(i)||/windows phone/i.test(i)||O0(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x0(i,e=[]){let n;switch(i){case"Browser":n=WE(it());break;case"Worker":n=`${WE(it())}-${i}`;break;default:n=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${cr}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=u=>new Promise((d,f)=>{try{const p=e(u);d(p)}catch(p){f(p)}});s.onAbort=n,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lk(i,e={}){return We(i,"GET","/v2/passwordPolicy",Ye(i,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uk=6;class zk{constructor(e){var n,s,o,u;const d=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=d.minPasswordLength)!==null&&n!==void 0?n:Uk,d.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=d.maxPasswordLength),d.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=d.containsLowercaseCharacter),d.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=d.containsUppercaseCharacter),d.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=d.containsNumericCharacter),d.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=d.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(u=e.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,o,u,d,f;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(n=p.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),p.isValid&&(p.isValid=(s=p.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),p.isValid&&(p.isValid=(o=p.containsLowercaseLetter)!==null&&o!==void 0?o:!0),p.isValid&&(p.isValid=(u=p.containsUppercaseLetter)!==null&&u!==void 0?u:!0),p.isValid&&(p.isValid=(d=p.containsNumericCharacter)!==null&&d!==void 0?d:!0),p.isValid&&(p.isValid=(f=p.containsNonAlphanumericCharacter)!==null&&f!==void 0?f:!0),p}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),o&&(n.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hk{constructor(e,n,s,o){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new QE(this),this.idTokenSubscription=new QE(this),this.beforeStateQueue=new Pk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=y0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Zt(n)),this._initializationPromise=this.queue(async()=>{var s,o,u;if(!this._deleted&&(this.persistenceManager=await js.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((u=this.currentUser)===null||u===void 0?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await hc(this,{idToken:e}),s=await wn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Ue(this.app)){const d=this.app.settings.authIdToken;return d?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(d).then(f,f))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const d=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,f=o==null?void 0:o._redirectEventId,p=await this.tryRedirectSignIn(e);(!d||d===f)&&(p!=null&&p.user)&&(o=p.user,u=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(o)}catch(d){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(d))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Xo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=gk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ue(this.app))return Promise.reject(ht(this));const n=e?ie(e):null;return n&&U(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&U(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ue(this.app)?Promise.reject(ht(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ue(this.app)?Promise.reject(ht(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Zt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Lk(this),n=new zk(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Wr("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await Dk(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Zt(e)||this._popupRedirectResolver;U(n,this,"argument-error"),this.redirectPersistenceManager=await js.create(this,[Zt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,o){if(this._deleted)return()=>{};const u=typeof n=="function"?n:n.next.bind(n);let d=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(U(f,this,"internal-error"),f.then(()=>{d||u(this.currentUser)}),typeof n=="function"){const p=e.addObserver(n,s,o);return()=>{d=!0,p()}}else{const p=e.addObserver(n);return()=>{d=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=x0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(n["X-Firebase-AppCheck"]=o),n}async _getAppCheckToken(){var e;if(Ue(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&pk(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Fe(i){return ie(i)}class QE{constructor(e){this.auth=e,this.observer=null,this.addObserver=Hb(n=>this.observer=n)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _l={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Bk(i){_l=i}function ym(i){return _l.loadJS(i)}function Vk(){return _l.recaptchaV2Script}function qk(){return _l.recaptchaEnterpriseScript}function Fk(){return _l.gapiScript}function P0(i){return`__${i}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jk=500,Gk=6e4,Hu=1e12;class Yk{constructor(e){this.auth=e,this.counter=Hu,this._widgets=new Map}render(e,n){const s=this.counter;return this._widgets.set(s,new Kk(e,this.auth.name,n||{})),this.counter++,s}reset(e){var n;const s=e||Hu;(n=this._widgets.get(s))===null||n===void 0||n.delete(),this._widgets.delete(s)}getResponse(e){var n;const s=e||Hu;return((n=this._widgets.get(s))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const s=e||Hu;return(n=this._widgets.get(s))===null||n===void 0||n.execute(),""}}class Wk{constructor(){this.enterprise=new Qk}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class Qk{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class Kk{constructor(e,n,s){this.params=s,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const o=typeof e=="string"?document.getElementById(e):e;U(o,"argument-error",{appName:n}),this.container=o,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=Xk(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},Gk)},jk))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function Xk(i){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let s=0;s<i;s++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}const $k="recaptcha-enterprise",Oo="NO_RECAPTCHA";class L0{constructor(e){this.type=$k,this.auth=Fe(e)}async verify(e="verify",n=!1){async function s(u){if(!n){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(d,f)=>{w0(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const m=new T0(p);return u.tenantId==null?u._agentRecaptchaConfig=m:u._tenantRecaptchaConfigs[u.tenantId]=m,d(m.siteKey)}}).catch(p=>{f(p)})})}function o(u,d,f){const p=window.grecaptcha;jE(p)?p.enterprise.ready(()=>{p.enterprise.execute(u,{action:e}).then(m=>{d(m)}).catch(()=>{d(Oo)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Wk().execute("siteKey",{action:"verify"}):new Promise((u,d)=>{s(this.auth).then(f=>{if(!n&&jE(window.grecaptcha))o(f,u,d);else{if(typeof window>"u"){d(new Error("RecaptchaVerifier is only supported in browser"));return}let p=qk();p.length!==0&&(p+=f),ym(p).then(()=>{o(f,u,d)}).catch(m=>{d(m)})}}).catch(f=>{d(f)})})}}async function Eo(i,e,n,s=!1,o=!1){const u=new L0(i);let d;if(o)d=Oo;else try{d=await u.verify(n)}catch{d=await u.verify(n,!0)}const f=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in f){const p=f.phoneEnrollmentInfo.phoneNumber,m=f.phoneEnrollmentInfo.recaptchaToken;Object.assign(f,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:m,captchaResponse:d,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in f){const p=f.phoneSignInInfo.recaptchaToken;Object.assign(f,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:d,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return f}return s?Object.assign(f,{captchaResp:d}):Object.assign(f,{captchaResponse:d}),Object.assign(f,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(f,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),f}async function er(i,e,n,s,o){var u,d;if(o==="EMAIL_PASSWORD_PROVIDER")if(!((u=i._getRecaptchaConfig())===null||u===void 0)&&u.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const f=await Eo(i,e,n,n==="getOobCode");return s(i,f)}else return s(i,e).catch(async f=>{if(f.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const p=await Eo(i,e,n,n==="getOobCode");return s(i,p)}else return Promise.reject(f)});else if(o==="PHONE_PROVIDER")if(!((d=i._getRecaptchaConfig())===null||d===void 0)&&d.isProviderEnabled("PHONE_PROVIDER")){const f=await Eo(i,e,n);return s(i,f).catch(async p=>{var m;if(((m=i._getRecaptchaConfig())===null||m===void 0?void 0:m.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(p.code==="auth/missing-recaptcha-token"||p.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const _=await Eo(i,e,n,!1,!0);return s(i,_)}return Promise.reject(p)})}else{const f=await Eo(i,e,n,!1,!0);return s(i,f)}else return Promise.reject(o+" provider is not supported.")}async function Zk(i){const e=Fe(i),n=await w0(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),s=new T0(n);e.tenantId==null?e._agentRecaptchaConfig=s:e._tenantRecaptchaConfigs[e.tenantId]=s,s.isAnyProviderEnabled()&&new L0(e).verify()}function Jk(i,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Zt);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function eM(i,e,n){const s=Fe(i);U(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!!(n!=null&&n.disableWarnings),u=U0(e),{host:d,port:f}=tM(e),p=f===null?"":`:${f}`,m={url:`${u}//${d}${p}/`},_=Object.freeze({host:d,port:f,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){U(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),U(Ws(m,s.config.emulator)&&Ws(_,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=m,s.emulatorConfig=_,s.settings.appVerificationDisabledForTesting=!0,o||nM()}function U0(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function tM(i){const e=U0(i),n=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:KE(s.substr(u.length+1))}}else{const[u,d]=s.split(":");return{host:u,port:KE(d)}}}function KE(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function nM(){function i(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Hn("not implemented")}_getIdTokenResponse(e){return Hn("not implemented")}_linkToIdToken(e,n){return Hn("not implemented")}_getReauthenticationResolver(e){return Hn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z0(i,e){return We(i,"POST","/v1/accounts:resetPassword",Ye(i,e))}async function iM(i,e){return We(i,"POST","/v1/accounts:update",e)}async function rM(i,e){return We(i,"POST","/v1/accounts:signUp",e)}async function sM(i,e){return We(i,"POST","/v1/accounts:update",Ye(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aM(i,e){return yi(i,"POST","/v1/accounts:signInWithPassword",Ye(i,e))}async function qc(i,e){return We(i,"POST","/v1/accounts:sendOobCode",Ye(i,e))}async function oM(i,e){return qc(i,e)}async function lM(i,e){return qc(i,e)}async function uM(i,e){return qc(i,e)}async function cM(i,e){return qc(i,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dM(i,e){return yi(i,"POST","/v1/accounts:signInWithEmailLink",Ye(i,e))}async function hM(i,e){return yi(i,"POST","/v1/accounts:signInWithEmailLink",Ye(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o extends da{constructor(e,n,s,o=null){super("password",s),this._email=e,this._password=n,this._tenantId=o}static _fromEmailAndPassword(e,n){return new $o(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new $o(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return er(e,n,"signInWithPassword",aM,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return dM(e,{email:this._email,oobCode:this._password});default:yt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return er(e,s,"signUpPassword",rM,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return hM(e,{idToken:n,email:this._email,oobCode:this._password});default:yt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hi(i,e){return yi(i,"POST","/v1/accounts:signInWithIdp",Ye(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fM="http://localhost";class jn extends da{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new jn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):yt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o}=n,u=pm(n,["providerId","signInMethod"]);if(!s||!o)return null;const d=new jn(s,o);return d.idToken=u.idToken||void 0,d.accessToken=u.accessToken||void 0,d.secret=u.secret,d.nonce=u.nonce,d.pendingToken=u.pendingToken||null,d}_getIdTokenResponse(e){const n=this.buildRequest();return hi(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,hi(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,hi(e,n)}buildRequest(){const e={requestUri:fM,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Qr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XE(i,e){return We(i,"POST","/v1/accounts:sendVerificationCode",Ye(i,e))}async function pM(i,e){return yi(i,"POST","/v1/accounts:signInWithPhoneNumber",Ye(i,e))}async function mM(i,e){const n=await yi(i,"POST","/v1/accounts:signInWithPhoneNumber",Ye(i,e));if(n.temporaryProof)throw wo(i,"account-exists-with-different-credential",n);return n}const gM={USER_NOT_FOUND:"user-not-found"};async function _M(i,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return yi(i,"POST","/v1/accounts:signInWithPhoneNumber",Ye(i,n),gM)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr extends da{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new Hr({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Hr({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return pM(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return mM(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return _M(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:s,verificationCode:o}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:s,code:o}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:s,phoneNumber:o,temporaryProof:u}=e;return!s&&!n&&!o&&!u?null:new Hr({verificationId:n,verificationCode:s,phoneNumber:o,temporaryProof:u})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vM(i){switch(i){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function yM(i){const e=Bs(To(i)).link,n=e?Bs(To(e)).deep_link_id:null,s=Bs(To(i)).deep_link_id;return(s?Bs(To(s)).link:null)||s||n||e||i}class Fc{constructor(e){var n,s,o,u,d,f;const p=Bs(To(e)),m=(n=p.apiKey)!==null&&n!==void 0?n:null,_=(s=p.oobCode)!==null&&s!==void 0?s:null,y=vM((o=p.mode)!==null&&o!==void 0?o:null);U(m&&_&&y,"argument-error"),this.apiKey=m,this.operation=y,this.code=_,this.continueUrl=(u=p.continueUrl)!==null&&u!==void 0?u:null,this.languageCode=(d=p.languageCode)!==null&&d!==void 0?d:null,this.tenantId=(f=p.tenantId)!==null&&f!==void 0?f:null}static parseLink(e){const n=yM(e);try{return new Fc(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(){this.providerId=hr.PROVIDER_ID}static credential(e,n){return $o._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Fc.parseLink(n);return U(s,"argument-error"),$o._fromEmailAndCode(e,s.code,s.tenantId)}}hr.PROVIDER_ID="password";hr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";hr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha extends Ei{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Gs extends ha{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return U("providerId"in n&&"signInMethod"in n,"argument-error"),jn._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return U(e.idToken||e.accessToken,"argument-error"),jn._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Gs.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Gs.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:u,nonce:d,providerId:f}=e;if(!s&&!o&&!n&&!u||!f)return null;try{return new Gs(f)._credential({idToken:n,accessToken:s,nonce:d,pendingToken:u})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn extends ha{constructor(){super("facebook.com")}static credential(e){return jn._fromParams({providerId:Pn.PROVIDER_ID,signInMethod:Pn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pn.credentialFromTaggedObject(e)}static credentialFromError(e){return Pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pn.credential(e.oauthAccessToken)}catch{return null}}}Pn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Pn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln extends ha{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return jn._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ln.credentialFromTaggedObject(e)}static credentialFromError(e){return Ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Ln.credential(n,s)}catch{return null}}}Ln.GOOGLE_SIGN_IN_METHOD="google.com";Ln.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un extends ha{constructor(){super("github.com")}static credential(e){return jn._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Un.credential(e.oauthAccessToken)}catch{return null}}}Un.GITHUB_SIGN_IN_METHOD="github.com";Un.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EM="http://localhost";class na extends da{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return hi(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,hi(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,hi(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o,pendingToken:u}=n;return!s||!o||!u||s!==o?null:new na(s,u)}static _create(e,n){return new na(e,n)}buildRequest(){return{requestUri:EM,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bM="saml.";class fc extends Ei{constructor(e){U(e.startsWith(bM),"argument-error"),super(e)}static credentialFromResult(e){return fc.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return fc.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=na.fromJSON(e);return U(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:s}=e;if(!n||!s)return null;try{return na._create(s,n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn extends ha{constructor(){super("twitter.com")}static credential(e,n){return jn._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return zn.credential(n,s)}catch{return null}}}zn.TWITTER_SIGN_IN_METHOD="twitter.com";zn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H0(i,e){return yi(i,"POST","/v1/accounts:signUp",Ye(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,o=!1){const u=await wn._fromIdTokenResponse(e,s,o),d=$E(s);return new _n({user:u,providerId:d,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const o=$E(s);return new _n({user:e,providerId:o,_tokenResponse:s,operationType:n})}}function $E(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SM(i){var e;if(Ue(i.app))return Promise.reject(ht(i));const n=Fe(i);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new _n({user:n.currentUser,providerId:null,operationType:"signIn"});const s=await H0(n,{returnSecureToken:!0}),o=await _n._fromIdTokenResponse(n,"signIn",s,!0);return await n._updateCurrentUser(o.user),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc extends Ut{constructor(e,n,s,o){var u;super(n.code,n.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,pc.prototype),this.customData={appName:e.name,tenantId:(u=e.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,o){return new pc(e,n,s,o)}}function B0(i,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(i):n._getIdTokenResponse(i)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?pc._fromErrorAndOperation(i,u,e,s):u})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V0(i){return new Set(i.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TM(i,e){const n=ie(i);await jc(!0,n,e);const{providerUserInfo:s}=await wk(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),o=V0(s||[]);return n.providerData=n.providerData.filter(u=>o.has(u.providerId)),o.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Em(i,e,n=!1){const s=await gi(i,e._linkToIdToken(i.auth,await i.getIdToken()),n);return _n._forOperation(i,"link",s)}async function jc(i,e,n){await Xo(e);const s=V0(e.providerData),o=i===!1?"provider-already-linked":"no-such-provider";U(s.has(n)===i,e.auth,o)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q0(i,e,n=!1){const{auth:s}=i;if(Ue(s.app))return Promise.reject(ht(s));const o="reauthenticate";try{const u=await gi(i,B0(s,o,e,i),n);U(u.idToken,s,"internal-error");const d=Vc(u.idToken);U(d,s,"internal-error");const{sub:f}=d;return U(i.uid===f,s,"user-mismatch"),_n._forOperation(i,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&yt(s,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function F0(i,e,n=!1){if(Ue(i.app))return Promise.reject(ht(i));const s="signIn",o=await B0(i,s,e),u=await _n._fromIdTokenResponse(i,s,o);return n||await i._updateCurrentUser(u.user),u}async function Gc(i,e){return F0(Fe(i),e)}async function j0(i,e){const n=ie(i);return await jc(!1,n,e.providerId),Em(n,e)}async function G0(i,e){return q0(ie(i),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wM(i,e){return yi(i,"POST","/v1/accounts:signInWithCustomToken",Ye(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CM(i,e){if(Ue(i.app))return Promise.reject(ht(i));const n=Fe(i),s=await wM(n,{token:e,returnSecureToken:!0}),o=await _n._fromIdTokenResponse(n,"signIn",s);return await n._updateCurrentUser(o.user),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?bm._fromServerResponse(e,n):"totpInfo"in n?Sm._fromServerResponse(e,n):yt(e,"internal-error")}}class bm extends vl{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new bm(n)}}class Sm extends vl{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new Sm(n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yc(i,e,n){var s;U(((s=n.url)===null||s===void 0?void 0:s.length)>0,i,"invalid-continue-uri"),U(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,i,"invalid-dynamic-link-domain"),U(typeof n.linkDomain>"u"||n.linkDomain.length>0,i,"invalid-hosting-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.linkDomain=n.linkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(U(n.iOS.bundleId.length>0,i,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(U(n.android.packageName.length>0,i,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tm(i){const e=Fe(i);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function RM(i,e,n){const s=Fe(i),o={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&Yc(s,o,n),await er(s,o,"getOobCode",lM,"EMAIL_PASSWORD_PROVIDER")}async function AM(i,e,n){await z0(ie(i),{oobCode:e,newPassword:n}).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&Tm(i),s})}async function IM(i,e){await sM(ie(i),{oobCode:e})}async function Y0(i,e){const n=ie(i),s=await z0(n,{oobCode:e}),o=s.requestType;switch(U(o,n,"internal-error"),o){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":U(s.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":U(s.mfaInfo,n,"internal-error");default:U(s.email,n,"internal-error")}let u=null;return s.mfaInfo&&(u=vl._fromServerResponse(Fe(n),s.mfaInfo)),{data:{email:(s.requestType==="VERIFY_AND_CHANGE_EMAIL"?s.newEmail:s.email)||null,previousEmail:(s.requestType==="VERIFY_AND_CHANGE_EMAIL"?s.email:s.newEmail)||null,multiFactorInfo:u},operation:o}}async function NM(i,e){const{data:n}=await Y0(ie(i),e);return n.email}async function OM(i,e,n){if(Ue(i.app))return Promise.reject(ht(i));const s=Fe(i),d=await er(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",H0,"EMAIL_PASSWORD_PROVIDER").catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&Tm(i),p}),f=await _n._fromIdTokenResponse(s,"signIn",d);return await s._updateCurrentUser(f.user),f}function DM(i,e,n){return Ue(i.app)?Promise.reject(ht(i)):Gc(ie(i),hr.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&Tm(i),s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kM(i,e,n){const s=Fe(i),o={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function u(d,f){U(f.handleCodeInApp,s,"argument-error"),f&&Yc(s,d,f)}u(o,n),await er(s,o,"getOobCode",uM,"EMAIL_PASSWORD_PROVIDER")}function MM(i,e){const n=Fc.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function xM(i,e,n){if(Ue(i.app))return Promise.reject(ht(i));const s=ie(i),o=hr.credentialWithLink(e,n||Ko());return U(o._tenantId===(s.tenantId||null),s,"tenant-id-mismatch"),Gc(s,o)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PM(i,e){return We(i,"POST","/v1/accounts:createAuthUri",Ye(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LM(i,e){const n=_m()?Ko():"http://localhost",s={identifier:e,continueUri:n},{signinMethods:o}=await PM(ie(i),s);return o||[]}async function UM(i,e){const n=ie(i),o={requestType:"VERIFY_EMAIL",idToken:await i.getIdToken()};e&&Yc(n.auth,o,e);const{email:u}=await oM(n.auth,o);u!==i.email&&await i.reload()}async function zM(i,e,n){const s=ie(i),u={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await i.getIdToken(),newEmail:e};n&&Yc(s.auth,u,n);const{email:d}=await cM(s.auth,u);d!==i.email&&await i.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HM(i,e){return We(i,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BM(i,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const s=ie(i),u={idToken:await s.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},d=await gi(s,HM(s.auth,u));s.displayName=d.displayName||null,s.photoURL=d.photoUrl||null;const f=s.providerData.find(({providerId:p})=>p==="password");f&&(f.displayName=s.displayName,f.photoURL=s.photoURL),await s._updateTokensIfNecessary(d)}function VM(i,e){const n=ie(i);return Ue(n.auth.app)?Promise.reject(ht(n.auth)):W0(n,e,null)}function qM(i,e){return W0(ie(i),null,e)}async function W0(i,e,n){const{auth:s}=i,u={idToken:await i.getIdToken(),returnSecureToken:!0};e&&(u.email=e),n&&(u.password=n);const d=await gi(i,iM(s,u));await i._updateTokensIfNecessary(d,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FM(i){var e,n;if(!i)return null;const{providerId:s}=i,o=i.rawUserInfo?JSON.parse(i.rawUserInfo):{},u=i.isNewUser||i.kind==="identitytoolkit#SignupNewUserResponse";if(!s&&(i!=null&&i.idToken)){const d=(n=(e=Vc(i.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(d){const f=d!=="anonymous"&&d!=="custom"?d:null;return new Ys(u,f)}}if(!s)return null;switch(s){case"facebook.com":return new jM(u,o);case"github.com":return new GM(u,o);case"google.com":return new YM(u,o);case"twitter.com":return new WM(u,o,i.screenName||null);case"custom":case"anonymous":return new Ys(u,null);default:return new Ys(u,s,o)}}class Ys{constructor(e,n,s={}){this.isNewUser=e,this.providerId=n,this.profile=s}}class Q0 extends Ys{constructor(e,n,s,o){super(e,n,s),this.username=o}}class jM extends Ys{constructor(e,n){super(e,"facebook.com",n)}}class GM extends Q0{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class YM extends Ys{constructor(e,n){super(e,"google.com",n)}}class WM extends Q0{constructor(e,n,s){super(e,"twitter.com",n,s)}}function QM(i){const{user:e,_tokenResponse:n}=i;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:FM(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e,n,s){this.type=e,this.credential=n,this.user=s}static _fromIdtoken(e,n){return new Lr("enroll",e,n)}static _fromMfaPendingCredential(e){return new Lr("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,s;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return Lr._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((s=e.multiFactorSession)===null||s===void 0)&&s.idToken)return Lr._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(e,n,s){this.session=e,this.hints=n,this.signInResolver=s}static _fromError(e,n){const s=Fe(e),o=n.customData._serverResponse,u=(o.mfaInfo||[]).map(f=>vl._fromServerResponse(s,f));U(o.mfaPendingCredential,s,"internal-error");const d=Lr._fromMfaPendingCredential(o.mfaPendingCredential);return new wm(d,u,async f=>{const p=await f._process(s,d);delete o.mfaInfo,delete o.mfaPendingCredential;const m=Object.assign(Object.assign({},o),{idToken:p.idToken,refreshToken:p.refreshToken});switch(n.operationType){case"signIn":const _=await _n._fromIdTokenResponse(s,n.operationType,m);return await s._updateCurrentUser(_.user),_;case"reauthenticate":return U(n.user,s,"internal-error"),_n._forOperation(n.user,n.operationType,m);default:yt(s,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function KM(i,e){var n;const s=ie(i),o=e;return U(e.customData.operationType,s,"argument-error"),U((n=o.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,s,"argument-error"),wm._fromError(s,o)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZE(i,e){return We(i,"POST","/v2/accounts/mfaEnrollment:start",Ye(i,e))}function XM(i,e){return We(i,"POST","/v2/accounts/mfaEnrollment:finalize",Ye(i,e))}function $M(i,e){return We(i,"POST","/v2/accounts/mfaEnrollment:withdraw",Ye(i,e))}class Cm{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(s=>vl._fromServerResponse(e.auth,s)))})}static _fromUser(e){return new Cm(e)}async getSession(){return Lr._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,n){const s=e,o=await this.getSession(),u=await gi(this.user,s._process(this.user.auth,o,n));return await this.user._updateTokensIfNecessary(u),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,s=await this.user.getIdToken();try{const o=await gi(this.user,$M(this.user.auth,{idToken:s,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:u})=>u!==n),await this.user._updateTokensIfNecessary(o),await this.user.reload()}catch(o){throw o}}}const xf=new WeakMap;function ZM(i){const e=ie(i);return xf.has(e)||xf.set(e,Cm._fromUser(e)),xf.get(e)}const mc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(mc,"1"),this.storage.removeItem(mc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JM=1e3,ex=10;class X0 extends K0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=M0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),o=this.localCache[n];s!==o&&e(n,o,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((d,f,p)=>{this.notifyListeners(d,p)});return}const s=e.key;n?this.detachListener():this.stopPolling();const o=()=>{const d=this.storage.getItem(s);!n&&this.localCache[s]===d||this.notifyListeners(s,d)},u=this.storage.getItem(s);xk()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,ex):o()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},JM)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}X0.type="LOCAL";const Rm=X0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $0 extends K0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}$0.type="SESSION";const jr=$0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tx(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(o=>o.isListeningto(e));if(n)return n;const s=new Wc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:o,data:u}=n.data,d=this.handlersMap[o];if(!(d!=null&&d.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const f=Array.from(d).map(async m=>m(n.origin,u)),p=await tx(f);n.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:p})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Wc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yl(i="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return i+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nx{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,d;return new Promise((f,p)=>{const m=yl("",20);o.port1.start();const _=setTimeout(()=>{p(new Error("unsupported_event"))},s);d={messageChannel:o,onMessage(y){const E=y;if(E.data.eventId===m)switch(E.data.status){case"ack":clearTimeout(_),u=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),f(E.data.response);break;default:clearTimeout(_),clearTimeout(u),p(new Error("invalid_response"));break}}},this.handlers.add(d),o.port1.addEventListener("message",d.onMessage),this.target.postMessage({eventType:e,eventId:m,data:n},[o.port2])}).finally(()=>{d&&this.removeMessageHandler(d)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(){return window}function ix(i){Ze().location.href=i}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Am(){return typeof Ze().WorkerGlobalScope<"u"&&typeof Ze().importScripts=="function"}async function rx(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function sx(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function ax(){return Am()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z0="firebaseLocalStorageDb",ox=1,gc="firebaseLocalStorage",J0="fbase_key";class El{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Qc(i,e){return i.transaction([gc],e?"readwrite":"readonly").objectStore(gc)}function lx(){const i=indexedDB.deleteDatabase(Z0);return new El(i).toPromise()}function hp(){const i=indexedDB.open(Z0,ox);return new Promise((e,n)=>{i.addEventListener("error",()=>{n(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(gc,{keyPath:J0})}catch(o){n(o)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(gc)?e(s):(s.close(),await lx(),e(await hp()))})})}async function JE(i,e,n){const s=Qc(i,!0).put({[J0]:e,value:n});return new El(s).toPromise()}async function ux(i,e){const n=Qc(i,!1).get(e),s=await new El(n).toPromise();return s===void 0?null:s.value}function eb(i,e){const n=Qc(i,!0).delete(e);return new El(n).toPromise()}const cx=800,dx=3;class eT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await hp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>dx)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Am()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Wc._getInstance(ax()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await rx(),!this.activeServiceWorker)return;this.sender=new nx(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||sx()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await hp();return await JE(e,mc,"1"),await eb(e,mc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>JE(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>ux(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>eb(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=Qc(o,!1).getAll();return new El(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),n.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),n.push(o));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),cx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}eT.type="LOCAL";const Zo=eT;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tb(i,e){return We(i,"POST","/v2/accounts/mfaSignIn:start",Ye(i,e))}function hx(i,e){return We(i,"POST","/v2/accounts/mfaSignIn:finalize",Ye(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pf=P0("rcb"),fx=new pl(3e4,6e4);class px{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=Ze().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return U(mx(n),e,"argument-error"),this.shouldResolveImmediately(n)&&FE(Ze().grecaptcha)?Promise.resolve(Ze().grecaptcha):new Promise((s,o)=>{const u=Ze().setTimeout(()=>{o(nt(e,"network-request-failed"))},fx.get());Ze()[Pf]=()=>{Ze().clearTimeout(u),delete Ze()[Pf];const f=Ze().grecaptcha;if(!f||!FE(f)){o(nt(e,"internal-error"));return}const p=f.render;f.render=(m,_)=>{const y=p(m,_);return this.counter++,y},this.hostLanguage=n,s(f)};const d=`${Vk()}?${Qr({onload:Pf,render:"explicit",hl:n})}`;ym(d).catch(()=>{clearTimeout(u),o(nt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=Ze().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function mx(i){return i.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(i)}class gx{async load(e){return new Yk(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Do="recaptcha",_x={theme:"light",type:"image"};let vx=class{constructor(e,n,s=Object.assign({},_x)){this.parameters=s,this.type=Do,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Fe(e),this.isInvisible=this.parameters.size==="invisible",U(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const o=typeof n=="string"?document.getElementById(n):n;U(o,this.auth,"argument-error"),this.container=o,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new gx:new px,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),s=n.getResponse(e);return s||new Promise(o=>{const u=d=>{d&&(this.tokenChangeListeners.delete(u),o(d))};this.tokenChangeListeners.add(u),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){U(!this.parameters.sitekey,this.auth,"argument-error"),U(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),U(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(s=>s(n)),typeof e=="function")e(n);else if(typeof e=="string"){const s=Ze()[e];typeof s=="function"&&s(n)}}}assertNotDestroyed(){U(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){U(_m()&&!Am(),this.auth,"internal-error"),await yx(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await Sk(this.auth);U(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return U(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function yx(){let i=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}i=()=>e(),window.addEventListener("load",i)}).catch(e=>{throw i&&window.removeEventListener("load",i),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Hr._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function Ex(i,e,n){if(Ue(i.app))return Promise.reject(ht(i));const s=Fe(i),o=await Kc(s,e,ie(n));return new Im(o,u=>Gc(s,u))}async function bx(i,e,n){const s=ie(i);await jc(!1,s,"phone");const o=await Kc(s.auth,e,ie(n));return new Im(o,u=>j0(s,u))}async function Sx(i,e,n){const s=ie(i);if(Ue(s.auth.app))return Promise.reject(ht(s.auth));const o=await Kc(s.auth,e,ie(n));return new Im(o,u=>G0(s,u))}async function Kc(i,e,n){var s;if(!i._getRecaptchaConfig())try{await Zk(i)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let o;if(typeof e=="string"?o={phoneNumber:e}:o=e,"session"in o){const u=o.session;if("phoneNumber"in o){U(u.type==="enroll",i,"internal-error");const d={idToken:u.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await er(i,d,"mfaSmsEnrollment",async(_,y)=>{if(y.phoneEnrollmentInfo.captchaResponse===Oo){U((n==null?void 0:n.type)===Do,_,"argument-error");const E=await Lf(_,y,n);return ZE(_,E)}return ZE(_,y)},"PHONE_PROVIDER").catch(_=>Promise.reject(_))).phoneSessionInfo.sessionInfo}else{U(u.type==="signin",i,"internal-error");const d=((s=o.multiFactorHint)===null||s===void 0?void 0:s.uid)||o.multiFactorUid;U(d,i,"missing-multi-factor-info");const f={mfaPendingCredential:u.credential,mfaEnrollmentId:d,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await er(i,f,"mfaSmsSignIn",async(y,E)=>{if(E.phoneSignInInfo.captchaResponse===Oo){U((n==null?void 0:n.type)===Do,y,"argument-error");const I=await Lf(y,E,n);return tb(y,I)}return tb(y,E)},"PHONE_PROVIDER").catch(y=>Promise.reject(y))).phoneResponseInfo.sessionInfo}}else{const u={phoneNumber:o.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await er(i,u,"sendVerificationCode",async(m,_)=>{if(_.captchaResponse===Oo){U((n==null?void 0:n.type)===Do,m,"argument-error");const y=await Lf(m,_,n);return XE(m,y)}return XE(m,_)},"PHONE_PROVIDER").catch(m=>Promise.reject(m))).sessionInfo}}finally{n==null||n._reset()}}async function Tx(i,e){const n=ie(i);if(Ue(n.auth.app))return Promise.reject(ht(n.auth));await Em(n,e)}async function Lf(i,e,n){U(n.type===Do,i,"argument-error");const s=await n.verify();U(typeof s=="string",i,"argument-error");const o=Object.assign({},e);if("phoneEnrollmentInfo"in o){const u=o.phoneEnrollmentInfo.phoneNumber,d=o.phoneEnrollmentInfo.captchaResponse,f=o.phoneEnrollmentInfo.clientType,p=o.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(o,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:s,captchaResponse:d,clientType:f,recaptchaVersion:p}}),o}else if("phoneSignInInfo"in o){const u=o.phoneSignInInfo.captchaResponse,d=o.phoneSignInInfo.clientType,f=o.phoneSignInInfo.recaptchaVersion;return Object.assign(o,{phoneSignInInfo:{recaptchaToken:s,captchaResponse:u,clientType:d,recaptchaVersion:f}}),o}else return Object.assign(o,{recaptchaToken:s}),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gr=class Fu{constructor(e){this.providerId=Fu.PROVIDER_ID,this.auth=Fe(e)}verifyPhoneNumber(e,n){return Kc(this.auth,e,ie(n))}static credential(e,n){return Hr._fromVerification(e,n)}static credentialFromResult(e){const n=e;return Fu.credentialFromTaggedObject(n)}static credentialFromError(e){return Fu.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:s}=e;return n&&s?Hr._fromTokenResponse(n,s):null}};Gr.PROVIDER_ID="phone";Gr.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zr(i,e){return e?Zt(e):(U(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm extends da{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return hi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return hi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return hi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function wx(i){return F0(i.auth,new Nm(i),i.bypassAuthState)}function Cx(i){const{auth:e,user:n}=i;return U(n,e,"internal-error"),q0(n,new Nm(i),i.bypassAuthState)}async function Rx(i){const{auth:e,user:n}=i;return U(n,e,"internal-error"),Em(n,new Nm(i),i.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tT{constructor(e,n,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:o,tenantId:u,error:d,type:f}=e;if(d){this.reject(d);return}const p={auth:this.auth,requestUri:n,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(p))}catch(m){this.reject(m)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return wx;case"linkViaPopup":case"linkViaRedirect":return Rx;case"reauthViaPopup":case"reauthViaRedirect":return Cx;default:yt(this.auth,"internal-error")}}resolve(e){An(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){An(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ax=new pl(2e3,1e4);async function Ix(i,e,n){if(Ue(i.app))return Promise.reject(nt(i,"operation-not-supported-in-this-environment"));const s=Fe(i);ca(i,e,Ei);const o=Zr(s,n);return new li(s,"signInViaPopup",e,o).executeNotNull()}async function Nx(i,e,n){const s=ie(i);if(Ue(s.auth.app))return Promise.reject(nt(s.auth,"operation-not-supported-in-this-environment"));ca(s.auth,e,Ei);const o=Zr(s.auth,n);return new li(s.auth,"reauthViaPopup",e,o,s).executeNotNull()}async function Ox(i,e,n){const s=ie(i);ca(s.auth,e,Ei);const o=Zr(s.auth,n);return new li(s.auth,"linkViaPopup",e,o,s).executeNotNull()}class li extends tT{constructor(e,n,s,o,u){super(e,n,o,u),this.provider=s,this.authWindow=null,this.pollId=null,li.currentPopupAction&&li.currentPopupAction.cancel(),li.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return U(e,this.auth,"internal-error"),e}async onExecution(){An(this.filter.length===1,"Popup operations only handle one event");const e=yl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(nt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(nt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,li.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Ax.get())};e()}}li.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dx="pendingRedirect",ko=new Map;class kx extends tT{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=ko.get(this.auth._key());if(!e){try{const s=await Mx(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}ko.set(this.auth._key(),e)}return this.bypassAuthState||ko.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Mx(i,e){const n=iT(e),s=nT(i);if(!await s._isAvailable())return!1;const o=await s._get(n)==="true";return await s._remove(n),o}async function Om(i,e){return nT(i)._set(iT(e),"true")}function xx(){ko.clear()}function Dm(i,e){ko.set(i._key(),e)}function nT(i){return Zt(i._redirectPersistence)}function iT(i){return zr(Dx,i.config.apiKey,i.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Px(i,e,n){return Lx(i,e,n)}async function Lx(i,e,n){if(Ue(i.app))return Promise.reject(ht(i));const s=Fe(i);ca(i,e,Ei),await s._initializationPromise;const o=Zr(s,n);return await Om(o,s),o._openRedirect(s,e,"signInViaRedirect")}function Ux(i,e,n){return zx(i,e,n)}async function zx(i,e,n){const s=ie(i);if(ca(s.auth,e,Ei),Ue(s.auth.app))return Promise.reject(ht(s.auth));await s.auth._initializationPromise;const o=Zr(s.auth,n);await Om(o,s.auth);const u=await rT(s);return o._openRedirect(s.auth,e,"reauthViaRedirect",u)}function Hx(i,e,n){return Bx(i,e,n)}async function Bx(i,e,n){const s=ie(i);ca(s.auth,e,Ei),await s.auth._initializationPromise;const o=Zr(s.auth,n);await jc(!1,s,e.providerId),await Om(o,s.auth);const u=await rT(s);return o._openRedirect(s.auth,e,"linkViaRedirect",u)}async function Vx(i,e){return await Fe(i)._initializationPromise,Xc(i,e,!1)}async function Xc(i,e,n=!1){if(Ue(i.app))return Promise.reject(ht(i));const s=Fe(i),o=Zr(s,e),d=await new kx(s,o,n).execute();return d&&!n&&(delete d.user._redirectEventId,await s._persistUserIfCurrent(d.user),await s._setRedirectUser(null,e)),d}async function rT(i){const e=yl(`${i.uid}:::`);return i._redirectEventId=e,await i.auth._setRedirectUser(i),await i.auth._persistUserIfCurrent(i),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qx=10*60*1e3;class sT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Fx(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!aT(e)){const o=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(nt(this.auth,o))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=qx&&this.cachedEventUids.clear(),this.cachedEventUids.has(nb(e))}saveEventToCache(e){this.cachedEventUids.add(nb(e)),this.lastProcessedEventTime=Date.now()}}function nb(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function aT({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Fx(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return aT(i);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oT(i,e={}){return We(i,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jx=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Gx=/^https?/;async function Yx(i){if(i.config.emulator)return;const{authorizedDomains:e}=await oT(i);for(const n of e)try{if(Wx(n))return}catch{}yt(i,"unauthorized-domain")}function Wx(i){const e=Ko(),{protocol:n,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const d=new URL(i);return d.hostname===""&&s===""?n==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&d.hostname===s}if(!Gx.test(n))return!1;if(jx.test(i))return s===i;const o=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qx=new pl(3e4,6e4);function ib(){const i=Ze().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let n=0;n<i.CP.length;n++)i.CP[n]=null}}function Kx(i){return new Promise((e,n)=>{var s,o,u;function d(){ib(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ib(),n(nt(i,"network-request-failed"))},timeout:Qx.get()})}if(!((o=(s=Ze().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((u=Ze().gapi)===null||u===void 0)&&u.load)d();else{const f=P0("iframefcb");return Ze()[f]=()=>{gapi.load?d():n(nt(i,"network-request-failed"))},ym(`${Fk()}?onload=${f}`).catch(p=>n(p))}}).catch(e=>{throw ju=null,e})}let ju=null;function Xx(i){return ju=ju||Kx(i),ju}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $x=new pl(5e3,15e3),Zx="__/auth/iframe",Jx="emulator/auth/iframe",eP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},tP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function nP(i){const e=i.config;U(e.authDomain,i,"auth-domain-config-required");const n=e.emulator?vm(e,Jx):`https://${i.config.authDomain}/${Zx}`,s={apiKey:e.apiKey,appName:i.name,v:cr},o=tP.get(i.config.apiHost);o&&(s.eid=o);const u=i._getFrameworks();return u.length&&(s.fw=u.join(",")),`${n}?${Qr(s).slice(1)}`}async function iP(i){const e=await Xx(i),n=Ze().gapi;return U(n,i,"internal-error"),e.open({where:document.body,url:nP(i),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:eP,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const d=nt(i,"network-request-failed"),f=Ze().setTimeout(()=>{u(d)},$x.get());function p(){Ze().clearTimeout(f),o(s)}s.ping(p).then(p,()=>{u(d)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},sP=500,aP=600,oP="_blank",lP="http://localhost";class rb{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function uP(i,e,n,s=sP,o=aP){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),d=Math.max((window.screen.availWidth-s)/2,0).toString();let f="";const p=Object.assign(Object.assign({},rP),{width:s.toString(),height:o.toString(),top:u,left:d}),m=it().toLowerCase();n&&(f=N0(m)?oP:n),A0(m)&&(e=e||lP,p.scrollbars="yes");const _=Object.entries(p).reduce((E,[I,A])=>`${E}${I}=${A},`,"");if(Mk(m)&&f!=="_self")return cP(e||"",f),new rb(null);const y=window.open(e||"",f,_);U(y,i,"popup-blocked");try{y.focus()}catch{}return new rb(y)}function cP(i,e){const n=document.createElement("a");n.href=i,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dP="__/auth/handler",hP="emulator/auth/handler",fP=encodeURIComponent("fac");async function fp(i,e,n,s,o,u){U(i.config.authDomain,i,"auth-domain-config-required"),U(i.config.apiKey,i,"invalid-api-key");const d={apiKey:i.config.apiKey,appName:i.name,authType:n,redirectUrl:s,v:cr,eventId:o};if(e instanceof Ei){e.setDefaultLanguage(i.languageCode),d.providerId=e.providerId||"",Ku(e.getCustomParameters())||(d.customParameters=JSON.stringify(e.getCustomParameters()));for(const[_,y]of Object.entries(u||{}))d[_]=y}if(e instanceof ha){const _=e.getScopes().filter(y=>y!=="");_.length>0&&(d.scopes=_.join(","))}i.tenantId&&(d.tid=i.tenantId);const f=d;for(const _ of Object.keys(f))f[_]===void 0&&delete f[_];const p=await i._getAppCheckToken(),m=p?`#${fP}=${encodeURIComponent(p)}`:"";return`${pP(i)}?${Qr(f).slice(1)}${m}`}function pP({config:i}){return i.emulator?vm(i,hP):`https://${i.authDomain}/${dP}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uf="webStorageSupport";class mP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=jr,this._completeRedirectFn=Xc,this._overrideRedirectResult=Dm}async _openPopup(e,n,s,o){var u;An((u=this.eventManagers[e._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const d=await fp(e,n,s,Ko(),o);return uP(e,d,yl())}async _openRedirect(e,n,s,o){await this._originValidation(e);const u=await fp(e,n,s,Ko(),o);return ix(u),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:o,promise:u}=this.eventManagers[n];return o?Promise.resolve(o):(An(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await iP(e),s=new sT(e);return n.register("authEvent",o=>(U(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Uf,{type:Uf},o=>{var u;const d=(u=o==null?void 0:o[0])===null||u===void 0?void 0:u[Uf];d!==void 0&&n(!!d),yt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Yx(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return M0()||I0()||gl()}}const gP=mP;class _P{constructor(e){this.factorId=e}_process(e,n,s){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,s);case"signin":return this._finalizeSignIn(e,n.credential);default:return Hn("unexpected MultiFactorSessionType")}}}class km extends _P{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new km(e)}_finalizeEnroll(e,n,s){return XM(e,{idToken:n,displayName:s,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return hx(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class lT{constructor(){}static assertion(e){return km._fromCredential(e)}}lT.FACTOR_ID="phone";var sb="@firebase/auth",ab="1.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yP(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function EP(i){ir(new gn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:d,authDomain:f}=s.options;U(d&&!d.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:d,authDomain:f,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:x0(i)},m=new Hk(s,o,u,p);return Jk(m,n),m},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),ir(new gn("auth-internal",e=>{const n=Fe(e.getProvider("auth").getImmediate());return(s=>new vP(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Cn(sb,ab,yP(i)),Cn(sb,ab,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bP=5*60;kA("authIdTokenMaxAge");function SP(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}Bk({loadJS(i){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=o=>{const u=nt("internal-error");u.customData=o,n(u)},s.type="text/javascript",s.charset="UTF-8",SP().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});EP("Browser");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yr(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TP=2e3;async function wP(i,e,n){var s;const{BuildInfo:o}=Yr();An(e.sessionId,"AuthEvent did not contain a session ID");const u=await NP(e.sessionId),d={};return gl()?d.ibi=o.packageName:ml()?d.apn=o.packageName:yt(i,"operation-not-supported-in-this-environment"),o.displayName&&(d.appDisplayName=o.displayName),d.sessionId=u,fp(i,n,e.type,void 0,(s=e.eventId)!==null&&s!==void 0?s:void 0,d)}async function CP(i){const{BuildInfo:e}=Yr(),n={};gl()?n.iosBundleId=e.packageName:ml()?n.androidPackageName=e.packageName:yt(i,"operation-not-supported-in-this-environment"),await oT(i,n)}function RP(i){const{cordova:e}=Yr();return new Promise(n=>{e.plugins.browsertab.isAvailable(s=>{let o=null;s?e.plugins.browsertab.openUrl(i):o=e.InAppBrowser.open(i,kk()?"_blank":"_system","location=yes"),n(o)})})}async function AP(i,e,n){const{cordova:s}=Yr();let o=()=>{};try{await new Promise((u,d)=>{let f=null;function p(){var y;u();const E=(y=s.plugins.browsertab)===null||y===void 0?void 0:y.close;typeof E=="function"&&E(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function m(){f||(f=window.setTimeout(()=>{d(nt(i,"redirect-cancelled-by-user"))},TP))}function _(){(document==null?void 0:document.visibilityState)==="visible"&&m()}e.addPassiveListener(p),document.addEventListener("resume",m,!1),ml()&&document.addEventListener("visibilitychange",_,!1),o=()=>{e.removePassiveListener(p),document.removeEventListener("resume",m,!1),document.removeEventListener("visibilitychange",_,!1),f&&window.clearTimeout(f)}})}finally{o()}}function IP(i){var e,n,s,o,u,d,f,p,m,_;const y=Yr();U(typeof((e=y==null?void 0:y.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",i,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),U(typeof((n=y==null?void 0:y.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",i,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),U(typeof((u=(o=(s=y==null?void 0:y.cordova)===null||s===void 0?void 0:s.plugins)===null||o===void 0?void 0:o.browsertab)===null||u===void 0?void 0:u.openUrl)=="function",i,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),U(typeof((p=(f=(d=y==null?void 0:y.cordova)===null||d===void 0?void 0:d.plugins)===null||f===void 0?void 0:f.browsertab)===null||p===void 0?void 0:p.isAvailable)=="function",i,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),U(typeof((_=(m=y==null?void 0:y.cordova)===null||m===void 0?void 0:m.InAppBrowser)===null||_===void 0?void 0:_.open)=="function",i,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function NP(i){const e=OP(i),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(o=>o.toString(16).padStart(2,"0")).join("")}function OP(i){if(An(/[0-9a-zA-Z]+/.test(i),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(i);const e=new ArrayBuffer(i.length),n=new Uint8Array(e);for(let s=0;s<i.length;s++)n[s]=i.charCodeAt(s);return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DP=20;class kP extends sT{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInitialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInitialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function MP(i,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:LP(),postBody:null,tenantId:i.tenantId,error:nt(i,"no-auth-event")}}function xP(i,e){return pp()._set(mp(i),e)}async function ob(i){const e=await pp()._get(mp(i));return e&&await pp()._remove(mp(i)),e}function PP(i,e){var n,s;const o=zP(e);if(o.includes("/__/auth/callback")){const u=Gu(o),d=u.firebaseError?UP(decodeURIComponent(u.firebaseError)):null,f=(s=(n=d==null?void 0:d.code)===null||n===void 0?void 0:n.split("auth/"))===null||s===void 0?void 0:s[1],p=f?nt(f):null;return p?{type:i.type,eventId:i.eventId,tenantId:i.tenantId,error:p,urlResponse:null,sessionId:null,postBody:null}:{type:i.type,eventId:i.eventId,tenantId:i.tenantId,sessionId:i.sessionId,urlResponse:o,postBody:null}}return null}function LP(){const i=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<DP;n++){const s=Math.floor(Math.random()*e.length);i.push(e.charAt(s))}return i.join("")}function pp(){return Zt(Rm)}function mp(i){return zr("authEvent",i.config.apiKey,i.name)}function UP(i){try{return JSON.parse(i)}catch{return null}}function zP(i){const e=Gu(i),n=e.link?decodeURIComponent(e.link):void 0,s=Gu(n).link,o=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Gu(o).link||o||s||n||i}function Gu(i){if(!(i!=null&&i.includes("?")))return{};const[e,...n]=i.split("?");return Bs(n.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HP=500;class BP{constructor(){this._redirectPersistence=jr,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Xc,this._overrideRedirectResult=Dm}async _initialize(e){const n=e._key();let s=this.eventManagers.get(n);return s||(s=new kP(e),this.eventManagers.set(n,s),this.attachCallbackListeners(e,s)),s}_openPopup(e){yt(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,s,o){IP(e);const u=await this._initialize(e);await u.initialized(),u.resetRedirect(),xx(),await this._originValidation(e);const d=MP(e,s,o);await xP(e,d);const f=await wP(e,d,n),p=await RP(f);return AP(e,u,p)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=CP(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:s,handleOpenURL:o,BuildInfo:u}=Yr(),d=setTimeout(async()=>{await ob(e),n.onEvent(lb())},HP),f=async _=>{clearTimeout(d);const y=await ob(e);let E=null;y&&(_!=null&&_.url)&&(E=PP(y,_.url)),n.onEvent(E||lb())};typeof s<"u"&&typeof s.subscribe=="function"&&s.subscribe(null,f);const p=o,m=`${u.packageName.toLowerCase()}://`;Yr().handleOpenURL=async _=>{if(_.toLowerCase().startsWith(m)&&f({url:_}),typeof p=="function")try{p(_)}catch(y){console.error(y)}}}}const VP=BP;function lb(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:nt("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qP(i,e){Fe(i)._logFramework(e)}var FP="@firebase/auth-compat",jP="0.5.20";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GP=1e3;function Mo(){var i;return((i=self==null?void 0:self.location)===null||i===void 0?void 0:i.protocol)||null}function YP(){return Mo()==="http:"||Mo()==="https:"}function uT(i=it()){return!!((Mo()==="file:"||Mo()==="ionic:"||Mo()==="capacitor:")&&i.toLowerCase().match(/iphone|ipad|ipod|android/))}function WP(){return yc()||xb()}function QP(){return Ub()&&(document==null?void 0:document.documentMode)===11}function KP(i=it()){return/Edge\/\d+/.test(i)}function XP(i=it()){return QP()||KP(i)}function cT(){try{const i=self.localStorage,e=yl();if(i)return i.setItem(e,"1"),i.removeItem(e),XP()?Qu():!0}catch{return Mm()&&Qu()}return!1}function Mm(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function zf(){return(YP()||Lb()||uT())&&!WP()&&cT()&&!Mm()}function dT(){return uT()&&typeof document<"u"}async function $P(){return dT()?new Promise(i=>{const e=setTimeout(()=>{i(!1)},GP);document.addEventListener("deviceready",()=>{clearTimeout(e),i(!0)})}):!1}function ZP(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xt={LOCAL:"local",NONE:"none",SESSION:"session"},bo=U,hT="persistence";function JP(i,e){if(bo(Object.values(Xt).includes(e),i,"invalid-persistence-type"),yc()){bo(e!==Xt.SESSION,i,"unsupported-persistence-type");return}if(xb()){bo(e===Xt.NONE,i,"unsupported-persistence-type");return}if(Mm()){bo(e===Xt.NONE||e===Xt.LOCAL&&Qu(),i,"unsupported-persistence-type");return}bo(e===Xt.NONE||cT(),i,"unsupported-persistence-type")}async function gp(i){await i._initializationPromise;const e=fT(),n=zr(hT,i.config.apiKey,i.name);e&&e.setItem(n,i._getPersistenceType())}function eL(i,e){const n=fT();if(!n)return[];const s=zr(hT,i,e);switch(n.getItem(s)){case Xt.NONE:return[ta];case Xt.LOCAL:return[Zo,jr];case Xt.SESSION:return[jr];default:return[]}}function fT(){var i;try{return((i=ZP())===null||i===void 0?void 0:i.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tL=U;class Ki{constructor(){this.browserResolver=Zt(gP),this.cordovaResolver=Zt(VP),this.underlyingResolver=null,this._redirectPersistence=jr,this._completeRedirectFn=Xc,this._overrideRedirectResult=Dm}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,s,o){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,s,o)}async _openRedirect(e,n,s,o){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,s,o)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return dT()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return tL(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await $P();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pT(i){return i.unwrap()}function nL(i){return i.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iL(i){return mT(i)}function rL(i,e){var n;const s=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const o=e;o.resolver=new sL(i,KM(i,e))}else if(s){const o=mT(e),u=e;o&&(u.credential=o,u.tenantId=s.tenantId||void 0,u.email=s.email||void 0,u.phoneNumber=s.phoneNumber||void 0)}}function mT(i){const{_tokenResponse:e}=i instanceof Ut?i.customData:i;if(!e)return null;if(!(i instanceof Ut)&&"temporaryProof"in e&&"phoneNumber"in e)return Gr.credentialFromResult(i);const n=e.providerId;if(!n||n===yo.PASSWORD)return null;let s;switch(n){case yo.GOOGLE:s=Ln;break;case yo.FACEBOOK:s=Pn;break;case yo.GITHUB:s=Un;break;case yo.TWITTER:s=zn;break;default:const{oauthIdToken:o,oauthAccessToken:u,oauthTokenSecret:d,pendingToken:f,nonce:p}=e;return!u&&!d&&!o&&!f?null:f?n.startsWith("saml.")?na._create(n,f):jn._fromParams({providerId:n,signInMethod:n,pendingToken:f,idToken:o,accessToken:u}):new Gs(n).credential({idToken:o,accessToken:u,rawNonce:p})}return i instanceof Ut?s.credentialFromError(i):s.credentialFromResult(i)}function Mt(i,e){return e.catch(n=>{throw n instanceof Ut&&rL(i,n),n}).then(n=>{const s=n.operationType,o=n.user;return{operationType:s,credential:iL(n),additionalUserInfo:QM(n),user:ui.getOrCreate(o)}})}async function _p(i,e){const n=await e;return{verificationId:n.verificationId,confirm:s=>Mt(i,n.confirm(s))}}class sL{constructor(e,n){this.resolver=n,this.auth=nL(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Mt(pT(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e){this._delegate=e,this.multiFactor=ZM(e)}static getOrCreate(e){return ui.USER_MAP.has(e)||ui.USER_MAP.set(e,new ui(e)),ui.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Mt(this.auth,j0(this._delegate,e))}async linkWithPhoneNumber(e,n){return _p(this.auth,bx(this._delegate,e,n))}async linkWithPopup(e){return Mt(this.auth,Ox(this._delegate,e,Ki))}async linkWithRedirect(e){return await gp(Fe(this.auth)),Hx(this._delegate,e,Ki)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Mt(this.auth,G0(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return _p(this.auth,Sx(this._delegate,e,n))}reauthenticateWithPopup(e){return Mt(this.auth,Nx(this._delegate,e,Ki))}async reauthenticateWithRedirect(e){return await gp(Fe(this.auth)),Ux(this._delegate,e,Ki)}sendEmailVerification(e){return UM(this._delegate,e)}async unlink(e){return await TM(this._delegate,e),this}updateEmail(e){return VM(this._delegate,e)}updatePassword(e){return qM(this._delegate,e)}updatePhoneNumber(e){return Tx(this._delegate,e)}updateProfile(e){return BM(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return zM(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}ui.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const So=U;class vp{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:s}=e.options;So(s,"invalid-api-key",{appName:e.name}),So(s,"invalid-api-key",{appName:e.name});const o=typeof window<"u"?Ki:void 0;this._delegate=n.initialize({options:{persistence:aL(s,e.name),popupRedirectResolver:o}}),this._delegate._updateErrorMap(hk),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?ui.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){eM(this._delegate,e,n)}applyActionCode(e){return IM(this._delegate,e)}checkActionCode(e){return Y0(this._delegate,e)}confirmPasswordReset(e,n){return AM(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return Mt(this._delegate,OM(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return LM(this._delegate,e)}isSignInWithEmailLink(e){return MM(this._delegate,e)}async getRedirectResult(){So(zf(),this._delegate,"operation-not-supported-in-this-environment");const e=await Vx(this._delegate,Ki);return e?Mt(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){qP(this._delegate,e)}onAuthStateChanged(e,n,s){const{next:o,error:u,complete:d}=ub(e,n,s);return this._delegate.onAuthStateChanged(o,u,d)}onIdTokenChanged(e,n,s){const{next:o,error:u,complete:d}=ub(e,n,s);return this._delegate.onIdTokenChanged(o,u,d)}sendSignInLinkToEmail(e,n){return kM(this._delegate,e,n)}sendPasswordResetEmail(e,n){return RM(this._delegate,e,n||void 0)}async setPersistence(e){JP(this._delegate,e);let n;switch(e){case Xt.SESSION:n=jr;break;case Xt.LOCAL:n=await Zt(Zo)._isAvailable()?Zo:Rm;break;case Xt.NONE:n=ta;break;default:return yt("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Mt(this._delegate,SM(this._delegate))}signInWithCredential(e){return Mt(this._delegate,Gc(this._delegate,e))}signInWithCustomToken(e){return Mt(this._delegate,CM(this._delegate,e))}signInWithEmailAndPassword(e,n){return Mt(this._delegate,DM(this._delegate,e,n))}signInWithEmailLink(e,n){return Mt(this._delegate,xM(this._delegate,e,n))}signInWithPhoneNumber(e,n){return _p(this._delegate,Ex(this._delegate,e,n))}async signInWithPopup(e){return So(zf(),this._delegate,"operation-not-supported-in-this-environment"),Mt(this._delegate,Ix(this._delegate,e,Ki))}async signInWithRedirect(e){return So(zf(),this._delegate,"operation-not-supported-in-this-environment"),await gp(this._delegate),Px(this._delegate,e,Ki)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return NM(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}vp.Persistence=Xt;function ub(i,e,n){let s=i;typeof i!="function"&&({next:s,error:e,complete:n}=i);const o=s;return{next:d=>o(d&&ui.getOrCreate(d)),error:e,complete:n}}function aL(i,e){const n=eL(i,e);if(typeof self<"u"&&!n.includes(Zo)&&n.push(Zo),typeof window<"u")for(const s of[Rm,jr])n.includes(s)||n.push(s);return n.includes(ta)||n.push(ta),n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm{static credential(e,n){return Gr.credential(e,n)}constructor(){this.providerId="phone",this._delegate=new Gr(pT(vi.auth()))}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}xm.PHONE_SIGN_IN_METHOD=Gr.PHONE_SIGN_IN_METHOD;xm.PROVIDER_ID=Gr.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oL=U;class lL{constructor(e,n,s=vi.app()){var o;oL((o=s.options)===null||o===void 0?void 0:o.apiKey,"invalid-api-key",{appName:s.name}),this._delegate=new vx(s.auth(),e,n),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uL="auth-compat";function cL(i){i.INTERNAL.registerComponent(new gn(uL,e=>{const n=e.getProvider("app-compat").getImmediate(),s=e.getProvider("auth");return new vp(n,s)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Hs.EMAIL_SIGNIN,PASSWORD_RESET:Hs.PASSWORD_RESET,RECOVER_EMAIL:Hs.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Hs.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Hs.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Hs.VERIFY_EMAIL}},EmailAuthProvider:hr,FacebookAuthProvider:Pn,GithubAuthProvider:Un,GoogleAuthProvider:Ln,OAuthProvider:Gs,SAMLAuthProvider:fc,PhoneAuthProvider:xm,PhoneMultiFactorGenerator:lT,RecaptchaVerifier:lL,TwitterAuthProvider:zn,Auth:vp,AuthCredential:da,Error:Ut}).setInstantiationMode("LAZY").setMultipleInstances(!1)),i.registerVersion(FP,jP)}cL(vi);const dL={apiKey:"AIzaSyCZ5UgQTkmyg9IyCek6lDUAzUt_mGl2les",authDomain:"new-quizey.firebaseapp.com",databaseURL:"https://new-quizey-default-rtdb.europe-west1.firebasedatabase.app",projectId:"new-quizey",storageBucket:"new-quizey.firebasestorage.app",messagingSenderId:"1078059578066",appId:"1:1078059578066:web:f1fc0c7bd21906cc6e330b",measurementId:"G-CG3YXS5BE5"};vi.initializeApp(dL);const bL=vi.database(),hL=vi.auth(),SL=new vi.auth.GoogleAuthProvider,fL=M.lazy(()=>Jo(()=>import("./Loader-DT-m_FG8.js"),[]));function pL(){const i=ur(),[e,n]=M.useState(!1),[s,o]=M.useState(!0),u=i.pathname,d=yb();return M.useEffect(()=>{if(u==="/"){o(!1);return}setTimeout(()=>{hL.onAuthStateChanged(f=>{if(f){if(u==="/panel"){o(!1),n(!0);return}n(!0),o(!1),d("/panel")}else{if(u==="/login"){o(!1);return}o(!1),d("/login")}})},1e3)},[u]),xt.jsx(xt.Fragment,{children:s?xt.jsx(fL,{}):xt.jsx(TA,{})})}QC.createRoot(document.getElementById("root")).render(xt.jsx(M.StrictMode,{children:xt.jsx(uA,{children:xt.jsx(pL,{})})}));export{Ab as L,mL as R,hL as a,bL as d,zC as g,xt as j,SL as p,M as r,Ix as s};
