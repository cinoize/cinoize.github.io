(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};
function ba(a){a=["object"==typeof globalThis&&globalThis,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global,a];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var ca=ba(this),da="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},m;
if("function"==typeof Object.setPrototypeOf)m=Object.setPrototypeOf;else{var n;a:{var ea={u:!0},fa={};try{fa.__proto__=ea;n=fa.u;break a}catch(a){}n=!1}m=n?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ha=m;
function q(a,b){a.prototype=da(b.prototype);a.prototype.constructor=a;if(ha)ha(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c]}
function r(a,b){if(b){for(var c=ca,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in c||(c[f]={});c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&aa(c,d,{configurable:!0,writable:!0,value:f})}}
function ia(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
r("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=ia(this,b,"endsWith");b+="";void 0===c&&(c=d.length);for(var e=Math.max(0,Math.min(c|0,d.length)),f=b.length;0<f&&0<e;)if(d[--e]!=b[--f])return!1;return 0>=f}});
r("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=ia(this,b,"startsWith");b+="";for(var e=d.length,f=b.length,g=Math.max(0,Math.min(c|0,d.length)),k=0;k<f&&g<e;)if(d[g++]!=b[k++])return!1;return k>=f}});
var ja="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)Object.prototype.hasOwnProperty.call(d,e)&&(a[e]=d[e])}return a};
r("Object.assign",function(a){return a||ja});
var t=this||self;function u(a){a=a.split(".");for(var b=t,c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function v(){}
function w(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function ka(a){var b=w(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function x(a){return"function"==w(a)}
function la(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function ma(a,b,c){return a.call.apply(a.bind,arguments)}
function na(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function y(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?y=ma:y=na;return y.apply(null,arguments)}
var oa=Date.now||function(){return+new Date};
function z(a,b){var c=a.split("."),d=t;c[0]in d||"undefined"==typeof d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d[e]&&d[e]!==Object.prototype[e]?d=d[e]:d=d[e]={}:d[e]=b}
function pa(a,b){function c(){}
c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a}
;function A(a){if(Error.captureStackTrace)Error.captureStackTrace(this,A);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
pa(A,Error);A.prototype.name="CustomError";var qa=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},B=Array.prototype.forEach?function(a,b){Array.prototype.forEach.call(a,b,void 0)}:function(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)e in d&&b.call(void 0,d[e],e,a)},ra=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
B(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function sa(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(ka(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function ta(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function ua(a,b){var c=ka(b),d=c?b:arguments;for(c=c?0:1;c<d.length;c++){if(null==a)return;a=a[d[c]]}return a}
function va(){var a=wa,b={},c;for(c in a)b[c]=a[c];return b}
var xa="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ya(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<xa.length;f++)c=xa[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function C(a,b){this.b=a===za&&b||"";this.a=Aa}
var Aa={},za={},E=new C(za,"");function F(a,b){this.b=a===Ba&&b||"";this.a=Ca}
var Ca={},Ba={};var G;a:{var Da=t.navigator;if(Da){var Ea=Da.userAgent;if(Ea){G=Ea;break a}}G=""};function H(){this.a="";this.b=Fa}
var Fa={};function I(a){var b=new H;b.a=a;return b}
I("<!DOCTYPE html>");var J=I("");I("<br>");function Ga(a){var b=new F(Ba,E instanceof C&&E.constructor===C&&E.a===Aa?E.b:"type_error:Const");a.src=(b instanceof F&&b.constructor===F&&b.a===Ca?b.b:"type_error:TrustedResourceUrl").toString()}
;var K=window;function L(a,b){this.width=a;this.height=b}
L.prototype.aspectRatio=function(){return this.width/this.height};
L.prototype.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
L.prototype.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
L.prototype.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Ha(){var a=document;var b="IFRAME";"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
;var Ia=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function M(a){return a.match(Ia)}
function N(a){return a?decodeURI(a):a}
function Ja(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Ja(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Ka(a){var b=[],c;for(c in a)Ja(c,a[c],b);return b.join("&")}
;function La(a){var b=Ma;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function Na(){var a=[];La(function(b){a.push(b)});
return a}
var Ma={D:"allow-forms",F:"allow-modals",G:"allow-orientation-lock",H:"allow-pointer-lock",I:"allow-popups",J:"allow-popups-to-escape-sandbox",K:"allow-presentation",L:"allow-same-origin",M:"allow-scripts",N:"allow-top-navigation",O:"allow-top-navigation-by-user-activation"},Oa=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){return Na()});
function Pa(){var a=Ha(),b={};B(Oa(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
;/*
 Copyright (c) Microsoft Corporation. All rights reserved.
 Licensed under the Apache License, Version 2.0 (the "License"); you may not use
 this file except in compliance with the License. You may obtain a copy of the
 License at http://www.apache.org/licenses/LICENSE-2.0

 THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
 WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
 MERCHANTABLITY OR NON-INFRINGEMENT.

 See the Apache Version 2.0 License for specific language governing permissions
 and limitations under the License.
*/
var Qa=(new Date).getTime();function Ra(){this.b=[];this.a=-1}
Ra.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.b[a]!=b&&(this.b[a]=b,this.a=-1)};
Ra.prototype.get=function(a){return!!this.b[a]};
function Sa(a){-1==a.a&&(a.a=ra(a.b,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.a}
;function Ta(a,b){this.f=a;this.g=b;this.b=0;this.a=null}
Ta.prototype.get=function(){if(0<this.b){this.b--;var a=this.a;this.a=a.next;a.next=null}else a=this.f();return a};
function Ua(a,b){a.g(b);100>a.b&&(a.b++,b.next=a.a,a.a=b)}
;function Va(a){t.setTimeout(function(){throw a;},0)}
var Wa;
function Xa(){var a=t.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&-1==G.indexOf("Presto")&&(a=function(){var e=Ha();e.style.display="none";Ga(e);document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.write(J instanceof H&&J.constructor===H&&J.b===Fa?J.a:"type_error:SafeHtml");e.close();var g="callImmediate"+Math.random(),k="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=
y(function(h){if(("*"==k||h.origin==k)&&h.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,k)}}});
if("undefined"!==typeof a&&-1==G.indexOf("Trident")&&-1==G.indexOf("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.j;c.j=null;e()}};
return function(e){d.next={j:e};d=d.next;b.port2.postMessage(0)}}return function(e){t.setTimeout(e,0)}}
;function Ya(){this.b=this.a=null}
var $a=new Ta(function(){return new Za},function(a){a.reset()});
Ya.prototype.add=function(a,b){var c=$a.get();c.set(a,b);this.b?this.b.next=c:this.a=c;this.b=c};
Ya.prototype.remove=function(){var a=null;this.a&&(a=this.a,this.a=this.a.next,this.a||(this.b=null),a.next=null);return a};
function Za(){this.next=this.b=this.a=null}
Za.prototype.set=function(a,b){this.a=a;this.b=b;this.next=null};
Za.prototype.reset=function(){this.next=this.b=this.a=null};function ab(a,b){O||bb();cb||(O(),cb=!0);db.add(a,b)}
var O;function bb(){if(t.Promise&&t.Promise.resolve){var a=t.Promise.resolve(void 0);O=function(){a.then(eb)}}else O=function(){var b=eb,c;
!(c=!x(t.setImmediate))&&(c=t.Window&&t.Window.prototype)&&(c=-1==G.indexOf("Edge")&&t.Window.prototype.setImmediate==t.setImmediate);c?(Wa||(Wa=Xa()),Wa(b)):t.setImmediate(b)}}
var cb=!1,db=new Ya;function eb(){for(var a;a=db.remove();){try{a.a.call(a.b)}catch(b){Va(b)}Ua($a,a)}cb=!1}
;function fb(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}}
;function P(a){this.a=0;this.l=void 0;this.g=this.b=this.f=null;this.h=this.i=!1;if(a!=v)try{var b=this;a.call(void 0,function(c){Q(b,2,c)},function(c){Q(b,3,c)})}catch(c){Q(this,3,c)}}
function gb(){this.next=this.context=this.b=this.f=this.a=null;this.g=!1}
gb.prototype.reset=function(){this.context=this.b=this.f=this.a=null;this.g=!1};
var hb=new Ta(function(){return new gb},function(a){a.reset()});
function ib(a,b,c){var d=hb.get();d.f=a;d.b=b;d.context=c;return d}
function jb(a){return new P(function(b,c){c(a)})}
P.prototype.then=function(a,b,c){return kb(this,x(a)?a:null,x(b)?b:null,c)};
P.prototype.$goog_Thenable=!0;function R(a,b){return kb(a,null,b,void 0)}
P.prototype.cancel=function(a){if(0==this.a){var b=new S(a);ab(function(){lb(this,b)},this)}};
function lb(a,b){if(0==a.a)if(a.f){var c=a.f;if(c.b){for(var d=0,e=null,f=null,g=c.b;g&&(g.g||(d++,g.a==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.a&&1==d?lb(c,b):(f?(d=f,d.next==c.g&&(c.g=d),d.next=d.next.next):mb(c),nb(c,e,3,b)))}a.f=null}else Q(a,3,b)}
function ob(a,b){a.b||2!=a.a&&3!=a.a||pb(a);a.g?a.g.next=b:a.b=b;a.g=b}
function kb(a,b,c,d){var e=ib(null,null,null);e.a=new P(function(f,g){e.f=b?function(k){try{var h=b.call(d,k);f(h)}catch(l){g(l)}}:f;
e.b=c?function(k){try{var h=c.call(d,k);void 0===h&&k instanceof S?g(k):f(h)}catch(l){g(l)}}:g});
e.a.f=a;ob(a,e);return e.a}
P.prototype.w=function(a){this.a=0;Q(this,2,a)};
P.prototype.C=function(a){this.a=0;Q(this,3,a)};
function Q(a,b,c){if(0==a.a){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.a=1;a:{var d=c,e=a.w,f=a.C;if(d instanceof P){ob(d,ib(e||v,f||null,a));var g=!0}else if(fb(d))d.then(e,f,a),g=!0;else{if(la(d))try{var k=d.then;if(x(k)){qb(d,k,e,f,a);g=!0;break a}}catch(h){f.call(a,h);g=!0;break a}g=!1}}g||(a.l=c,a.a=b,a.f=null,pb(a),3!=b||c instanceof S||rb(a,c))}}
function qb(a,b,c,d,e){function f(h){k||(k=!0,d.call(e,h))}
function g(h){k||(k=!0,c.call(e,h))}
var k=!1;try{b.call(a,g,f)}catch(h){f(h)}}
function pb(a){a.i||(a.i=!0,ab(a.v,a))}
function mb(a){var b=null;a.b&&(b=a.b,a.b=b.next,b.next=null);a.b||(a.g=null);return b}
P.prototype.v=function(){for(var a;a=mb(this);)nb(this,a,this.a,this.l);this.i=!1};
function nb(a,b,c,d){if(3==c&&b.b&&!b.g)for(;a&&a.h;a=a.f)a.h=!1;if(b.a)b.a.f=null,sb(b,c,d);else try{b.g?b.f.call(b.context):sb(b,c,d)}catch(e){tb.call(null,e)}Ua(hb,b)}
function sb(a,b,c){2==b?a.f.call(a.context,c):a.b&&a.b.call(a.context,c)}
function rb(a,b){a.h=!0;ab(function(){a.h&&tb.call(null,b)})}
var tb=Va;function S(a){A.call(this,a)}
pa(S,A);S.prototype.name="cancel";function ub(a){z("yt.ads.biscotti.lastId_",a)}
;var T=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};z("yt.config_",T);function vb(a){var b=arguments;1<b.length?T[b[0]]=b[1]:1===b.length&&Object.assign(T,b[0])}
function U(a,b){return a in T?T[a]:b}
;var wb=[];function xb(a){wb.forEach(function(b){return b(a)})}
function yb(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){zb(b),xb(b)}}:a}
function zb(a){var b=u("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0):(b=U("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0]),vb("ERRORS",b))}
;function Ab(a){var b=[];ta(a,function(c,d){var e=encodeURIComponent(String(d)),f;"array"==w(c)?f=c:f=[c];B(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function Bb(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length)try{var f=decodeURIComponent((e[0]||"").replace(/\+/g," ")),g=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?"array"==w(b[f])?sa(b[f],g):b[f]=[b[f],g]:b[f]=g}catch(h){if("q"!=e[0]){var k=Error("Error decoding URL component");k.params={key:e[0],value:e[1]};zb(k)}}}return b}
function Cb(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Bb(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);b=a;a=Ka(e);a?(c=b.indexOf("#"),0>c&&(c=b.length),f=b.indexOf("?"),0>f||f>c?(f=c,e=""):e=b.substring(f+1,c),b=[b.substr(0,f),e,b.substr(c)],c=b[1],b[1]=a?c?c+"&"+a:a:c,a=b[0]+(b[1]?"?"+b[1]:"")+b[2]):a=b;return a+d}
;function Db(a){var b=Eb;a=void 0===a?u("yt.ads.biscotti.lastId_")||"":a;b=Object.assign(Fb(b),Gb(b));b.ca_type="image";a&&(b.bid=a);return b}
function Fb(a){var b={};b.dt=Qa;b.flash="0";a:{try{var c=a.a.top.location.href}catch(f){a=2;break a}a=c?c===a.b.location.href?0:1:2}b=(b.frm=a,b);b.u_tz=-(new Date).getTimezoneOffset();var d=void 0===d?K:d;try{var e=d.history.length}catch(f){e=0}b.u_his=e;b.u_java=!!K.navigator&&"unknown"!==typeof K.navigator.javaEnabled&&!!K.navigator.javaEnabled&&K.navigator.javaEnabled();K.screen&&(b.u_h=K.screen.height,b.u_w=K.screen.width,b.u_ah=K.screen.availHeight,b.u_aw=K.screen.availWidth,b.u_cd=K.screen.colorDepth);
K.navigator&&K.navigator.plugins&&(b.u_nplug=K.navigator.plugins.length);K.navigator&&K.navigator.mimeTypes&&(b.u_nmime=K.navigator.mimeTypes.length);return b}
function Gb(a){var b=a.a;try{var c=b.screenX;var d=b.screenY}catch(D){}try{var e=b.outerWidth;var f=b.outerHeight}catch(D){}try{var g=b.innerWidth;var k=b.innerHeight}catch(D){}b=[b.screenLeft,b.screenTop,c,d,b.screen?b.screen.availWidth:void 0,b.screen?b.screen.availTop:void 0,e,f,g,k];c=a.a.top;try{var h=(c||window).document,l="CSS1Compat"==h.compatMode?h.documentElement:h.body;var p=(new L(l.clientWidth,l.clientHeight)).round()}catch(D){p=new L(-12245933,-12245933)}h=p;p={};l=new Ra;t.SVGElement&&
t.document.createElementNS&&l.set(0);c=Pa();c["allow-top-navigation-by-user-activation"]&&l.set(1);c["allow-popups-to-escape-sandbox"]&&l.set(2);t.crypto&&t.crypto.subtle&&l.set(3);t.TextDecoder&&t.TextEncoder&&l.set(4);l=Sa(l);p.bc=l;p.bih=h.height;p.biw=h.width;p.brdim=b.join();a=a.b;return p.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0,p.wgl=!!K.WebGLRenderingContext,p}
var Eb=new function(){var a=window.document;this.a=window;this.b=a};
z("yt.ads_.signals_.getAdSignalsString",function(a){return Ab(Db(a))});oa();function Hb(a){var b=U("EXPERIMENTS_FORCED_FLAGS",{});a=void 0!==b[a]?b[a]:U("EXPERIMENT_FLAGS",{})[a];return"string"===typeof a&&"false"===a?!1:!!a}
;var Ib=void 0!==XMLHttpRequest?function(){return new XMLHttpRequest}:void 0!==ActiveXObject?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;
function Jb(){if(!Ib)return null;var a=Ib();return"open"in a?a:null}
function Kb(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function Lb(a,b){x(a)&&(a=yb(a));return window.setTimeout(a,b)}
;var Mb={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},Nb="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" "),
Ob=!1;
function Pb(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=M(a)[1]||null,e=N(M(a)[3]||null);d&&e?(d=c,c=M(a),d=M(d),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?N(M(c)[3]||null)==e&&(Number(M(c)[4]||null)||null)==(Number(M(a)[4]||null)||null):!0;d=Hb("web_ajax_ignore_global_headers_if_set");for(var f in Mb)e=U(Mb[f]),!e||!c&&!V(a,f)||d&&void 0!==b[f]||(b[f]=e);if(c||V(a,"X-YouTube-Utc-Offset"))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());(c||V(a,"X-YouTube-Time-Zone"))&&(f=
"undefined"!=typeof Intl?(new Intl.DateTimeFormat).resolvedOptions().timeZone:null)&&(b["X-YouTube-Time-Zone"]=f);if(c||V(a,"X-YouTube-Ad-Signals"))b["X-YouTube-Ad-Signals"]=Ab(Db(void 0));return b}
function Qb(a){var b=window.location.search,c=N(M(a)[3]||null),d=N(M(a)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=Bb(b),f={};B(Nb,function(g){e[g]&&(f[g]=e[g])});
return Cb(a,f||{},!1)}
function V(a,b){var c=U("CORS_HEADER_WHITELIST")||{},d=N(M(a)[3]||null);return d?(c=c[d])?0<=qa(c,b):!1:!0}
function Rb(a){var b=a.format||"JSON";var c=Sb("//googleads.g.doubleclick.net/pagead/id",a);var d=Tb(c,a),e=!1,f,g=Ub(c,function(k){if(!e){e=!0;f&&window.clearTimeout(f);var h=Kb(k),l=null,p=400<=k.status&&500>k.status,D=500<=k.status&&600>k.status;if(h||p||D)l=Vb(b,k,a.P);if(h)a:if(k&&204==k.status)h=!0;else{switch(b){case "XML":h=0==parseInt(l&&l.return_code,10);break a;case "RAW":h=!0;break a}h=!!l}l=l||{};p=a.context||t;h?a.m&&a.m.call(p,k,l):a.onError&&a.onError.call(p,k,l);a.A&&a.A.call(p,k,
l)}},a.method,d,a.headers,a.responseType,a.withCredentials);
a.o&&0<a.timeout&&(f=Lb(function(){e||(e=!0,g.abort(),window.clearTimeout(f),a.o.call(a.context||t,g))},a.timeout));
return g}
function Sb(a,b){b.S&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=U("XSRF_FIELD_NAME",void 0),d=b.U;d&&(d[c]&&delete d[c],a=Cb(a,d||{},!0));return a}
function Tb(a,b){var c=U("XSRF_FIELD_NAME",void 0),d=U("XSRF_TOKEN",void 0),e=b.T||"",f=b.s,g=U("XSRF_FIELD_NAME",void 0),k;b.headers&&(k=b.headers["Content-Type"]);b.R||N(M(a)[3]||null)&&!b.withCredentials&&N(M(a)[3]||null)!=document.location.hostname||"POST"!=b.method||k&&"application/x-www-form-urlencoded"!=k||b.s&&b.s[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=Bb(e),ya(e,f),e=b.B&&"JSON"==b.B?JSON.stringify(e):Ka(e));if(!(c=e)&&(c=f)){a:{for(var h in f){f=!1;break a}f=!0}c=!f}!Ob&&c&&"POST"!=
b.method&&(Ob=!0,zb(Error("AJAX request with postData should use POST")));return e}
function Vb(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?Wb(b):null)d={},B(b.getElementsByTagName("*"),function(e){d[e.tagName]=Xb(e)})}c&&Yb(d);
return d}
function Yb(a){if(la(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=I(a[b]);a[c]=d}else Yb(a[b])}}
function Wb(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Xb(a){var b="";B(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Ub(a,b,c,d,e,f,g){function k(){4==(h&&"readyState"in h?h.readyState:0)&&b&&yb(b)(h)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var h=Jb();if(!h)return null;"onloadend"in h?h.addEventListener("loadend",k,!1):h.onreadystatechange=k;Hb("debug_forward_web_query_parameters")&&(a=Qb(a));h.open(c,a,!0);f&&(h.responseType=f);g&&(h.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Pb(a,e))for(var l in e)h.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&h.setRequestHeader("Content-Type","application/x-www-form-urlencoded");h.send(d);
return h}
;function Zb(){var a=va(),b;return R(new P(function(c,d){a.m=function(e){Kb(e)?c(e):d(new W("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new W("Unknown request error","net.unknown",e))};
a.o=function(e){d(new W("Request timed out","net.timeout",e))};
b=Rb(a)}),function(c){c instanceof S&&b.abort();
return jb(c)})}
function W(a,b){A.call(this,a+", errorCode="+b);this.errorCode=b;this.name="PromiseAjaxError"}
q(W,A);function X(){this.a=0;this.b=null}
X.prototype.then=function(a,b,c){return 1===this.a&&a?(a=a.call(c,this.b),fb(a)?a:$b(a)):2===this.a&&b?(a=b.call(c,this.b),fb(a)?a:ac(a)):this};
X.prototype.$goog_Thenable=!0;function ac(a){var b=new X;a=void 0===a?null:a;b.a=2;b.b=void 0===a?null:a;return b}
function $b(a){var b=new X;a=void 0===a?null:a;b.a=1;b.b=void 0===a?null:a;return b}
;function bc(a){A.call(this,a.message||a.description||a.name);this.isMissing=a instanceof Y;this.isTimeout=a instanceof W&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof S}
q(bc,A);bc.prototype.name="BiscottiError";function Y(){A.call(this,"Biscotti ID is missing from server")}
q(Y,A);Y.prototype.name="BiscottiMissingError";var wa={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Z=null;function cc(){if("1"===ua(U("PLAYER_CONFIG",{}),"args","privembed"))return jb(Error("Biscotti ID is not available in private embed mode"));Z||(Z=R(Zb().then(dc),function(a){return ec(2,a)}));
return Z}
function dc(a){a=a.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new Y;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new Y;a=a.id;ub(a);Z=$b(a);fc(18E5,2);return a}
function ec(a,b){var c=new bc(b);ub("");Z=ac(c);0<a&&fc(12E4,a-1);throw c;}
function fc(a,b){Lb(function(){R(Zb().then(dc,function(c){return ec(b,c)}),v)},a)}
;u("yt.ads.biscotti.getId_")||z("yt.ads.biscotti.getId_",cc);var gc;try{var hc=u("yt.ads.biscotti.getId_");gc=hc?hc():cc()}catch(a){gc=jb(a)}R(gc,v);}).call(this);
