(function(){var aa="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},m;
if("function"==typeof Object.setPrototypeOf)m=Object.setPrototypeOf;else{var n;a:{var ba={u:!0},ca={};try{ca.__proto__=ba;n=ca.u;break a}catch(a){}n=!1}m=n?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var da=m;
function q(a,b){a.prototype=aa(b.prototype);a.prototype.constructor=a;if(da)da(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.D=b.prototype}
var ea="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},fa="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;
function r(a,b){if(b){for(var c=fa,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in c||(c[f]={});c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ea(c,d,{configurable:!0,writable:!0,value:f})}}
function ha(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
r("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=ha(this,b,"endsWith");b+="";void 0===c&&(c=d.length);for(var e=Math.max(0,Math.min(c|0,d.length)),f=b.length;0<f&&0<e;)if(d[--e]!=b[--f])return!1;return 0>=f}});
r("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=ha(this,b,"startsWith");b+="";for(var e=d.length,f=b.length,g=Math.max(0,Math.min(c|0,d.length)),h=0;h<f&&g<e;)if(d[g++]!=b[h++])return!1;return h>=f}});
var ia="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)Object.prototype.hasOwnProperty.call(d,e)&&(a[e]=d[e])}return a};
r("Object.assign",function(a){return a||ia});
var t=this||self;function u(a){return"string"==typeof a}
function v(a){a=a.split(".");for(var b=t,c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function w(){}
function x(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function ja(a){var b=x(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function y(a){return"function"==x(a)}
function ka(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function la(a,b,c){return a.call.apply(a.bind,arguments)}
function ma(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function z(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?z=la:z=ma;return z.apply(null,arguments)}
var na=Date.now||function(){return+new Date};
function A(a,b){var c=a.split("."),d=t;c[0]in d||"undefined"==typeof d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d[e]&&d[e]!==Object.prototype[e]?d=d[e]:d=d[e]={}:d[e]=b}
function oa(a,b){function c(){}
c.prototype=b.prototype;a.D=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.R=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
;var B=window;function C(a){if(Error.captureStackTrace)Error.captureStackTrace(this,C);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
oa(C,Error);C.prototype.name="CustomError";var pa=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(u(a))return u(b)&&1==b.length?a.indexOf(b,0):-1;
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},D=Array.prototype.forEach?function(a,b){Array.prototype.forEach.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=u(a)?a.split(""):a,e=0;e<c;e++)e in d&&b.call(void 0,d[e],e,a)},qa=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
D(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function ra(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(ja(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function sa(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function ta(a,b){var c=ja(b),d=c?b:arguments;for(c=c?0:1;c<d.length;c++){if(null==a)return;a=a[d[c]]}return a}
function ua(){var a=va,b={},c;for(c in a)b[c]=a[c];return b}
var wa="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function xa(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<wa.length;f++)c=wa[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function F(a,b){this.a=a===ya&&b||"";this.b=za}
F.prototype.toString=function(){return"Const{"+this.a+"}"};
var za={},ya={},G=new F(ya,"");function Aa(){this.a="";this.b=Ba}
var Ba={};var H;a:{var Ca=t.navigator;if(Ca){var Da=Ca.userAgent;if(Da){H=Da;break a}}H=""};function Ea(){this.a="";this.b=Fa}
var Fa={};function I(a){var b=new Ea;b.a=a;return b}
I("<!DOCTYPE html>");var J=I("");I("<br>");function Ga(a){var b=new Aa;b.a=G instanceof F&&G.constructor===F&&G.b===za?G.a:"type_error:Const";a.src=(b instanceof Aa&&b.constructor===Aa&&b.b===Ba?b.a:"type_error:TrustedResourceUrl").toString()}
;function K(a,b){this.width=a;this.height=b}
K.prototype.aspectRatio=function(){return this.width/this.height};
K.prototype.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
K.prototype.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
K.prototype.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Ha(a){var b=Ia;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function Ja(){var a=[];Ha(function(b){a.push(b)});
return a}
var Ia={F:"allow-forms",G:"allow-modals",H:"allow-orientation-lock",I:"allow-pointer-lock",J:"allow-popups",K:"allow-popups-to-escape-sandbox",L:"allow-presentation",M:"allow-same-origin",N:"allow-scripts",O:"allow-top-navigation",P:"allow-top-navigation-by-user-activation"},Ka=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){return Ja()});
function La(){var a=document.createElement("IFRAME").sandbox,b=a&&a.supports;if(!b)return{};var c={};D(Ka(),function(d){b.call(a,d)&&(c[d]=!0)});
return c}
;var Ma=(new Date).getTime();function Na(a,b){this.f=a;this.g=b;this.b=0;this.a=null}
Na.prototype.get=function(){if(0<this.b){this.b--;var a=this.a;this.a=a.next;a.next=null}else a=this.f();return a};
function Oa(a,b){a.g(b);100>a.b&&(a.b++,b.next=a.a,a.a=b)}
;function Pa(a){t.setTimeout(function(){throw a;},0)}
var Qa;
function Ra(){var a=t.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&-1==H.indexOf("Presto")&&(a=function(){var e=document.createElement("IFRAME");e.style.display="none";Ga(e);document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.write(J instanceof Ea&&J.constructor===Ea&&J.b===Fa?J.a:"type_error:SafeHtml");e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+
f.location.host;e=z(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&-1==H.indexOf("Trident")&&-1==H.indexOf("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.j;c.j=null;e()}};
return function(e){d.next={j:e};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(e){var f=document.createElement("SCRIPT");
f.onreadystatechange=function(){f.onreadystatechange=null;f.parentNode.removeChild(f);f=null;e();e=null};
document.documentElement.appendChild(f)}:function(e){t.setTimeout(e,0)}}
;function Sa(){this.b=this.a=null}
var Ua=new Na(function(){return new Ta},function(a){a.reset()});
Sa.prototype.add=function(a,b){var c=Ua.get();c.set(a,b);this.b?this.b.next=c:this.a=c;this.b=c};
Sa.prototype.remove=function(){var a=null;this.a&&(a=this.a,this.a=this.a.next,this.a||(this.b=null),a.next=null);return a};
function Ta(){this.next=this.b=this.a=null}
Ta.prototype.set=function(a,b){this.a=a;this.b=b;this.next=null};
Ta.prototype.reset=function(){this.next=this.b=this.a=null};function Va(a,b){L||Wa();Xa||(L(),Xa=!0);Ya.add(a,b)}
var L;function Wa(){if(t.Promise&&t.Promise.resolve){var a=t.Promise.resolve(void 0);L=function(){a.then(Za)}}else L=function(){var b=Za,c;
!(c=!y(t.setImmediate))&&(c=t.Window&&t.Window.prototype)&&(c=-1==H.indexOf("Edge")&&t.Window.prototype.setImmediate==t.setImmediate);c?(Qa||(Qa=Ra()),Qa(b)):t.setImmediate(b)}}
var Xa=!1,Ya=new Sa;function Za(){for(var a;a=Ya.remove();){try{a.a.call(a.b)}catch(b){Pa(b)}Oa(Ua,a)}Xa=!1}
;function $a(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}}
;function M(a){this.a=0;this.l=void 0;this.g=this.b=this.f=null;this.h=this.i=!1;if(a!=w)try{var b=this;a.call(void 0,function(c){N(b,2,c)},function(c){N(b,3,c)})}catch(c){N(this,3,c)}}
function ab(){this.next=this.context=this.b=this.f=this.a=null;this.g=!1}
ab.prototype.reset=function(){this.context=this.b=this.f=this.a=null;this.g=!1};
var bb=new Na(function(){return new ab},function(a){a.reset()});
function cb(a,b,c){var d=bb.get();d.f=a;d.b=b;d.context=c;return d}
function db(a){return new M(function(b,c){c(a)})}
M.prototype.then=function(a,b,c){return eb(this,y(a)?a:null,y(b)?b:null,c)};
M.prototype.$goog_Thenable=!0;function O(a,b){return eb(a,null,b,void 0)}
M.prototype.cancel=function(a){0==this.a&&Va(function(){var b=new P(a);fb(this,b)},this)};
function fb(a,b){if(0==a.a)if(a.f){var c=a.f;if(c.b){for(var d=0,e=null,f=null,g=c.b;g&&(g.g||(d++,g.a==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.a&&1==d?fb(c,b):(f?(d=f,d.next==c.g&&(c.g=d),d.next=d.next.next):gb(c),hb(c,e,3,b)))}a.f=null}else N(a,3,b)}
function ib(a,b){a.b||2!=a.a&&3!=a.a||jb(a);a.g?a.g.next=b:a.b=b;a.g=b}
function eb(a,b,c,d){var e=cb(null,null,null);e.a=new M(function(f,g){e.f=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.b=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof P?g(h):f(k)}catch(l){g(l)}}:g});
e.a.f=a;ib(a,e);return e.a}
M.prototype.w=function(a){this.a=0;N(this,2,a)};
M.prototype.C=function(a){this.a=0;N(this,3,a)};
function N(a,b,c){if(0==a.a){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.a=1;a:{var d=c,e=a.w,f=a.C;if(d instanceof M){ib(d,cb(e||w,f||null,a));var g=!0}else if($a(d))d.then(e,f,a),g=!0;else{if(ka(d))try{var h=d.then;if(y(h)){kb(d,h,e,f,a);g=!0;break a}}catch(k){f.call(a,k);g=!0;break a}g=!1}}g||(a.l=c,a.a=b,a.f=null,jb(a),3!=b||c instanceof P||lb(a,c))}}
function kb(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function jb(a){a.i||(a.i=!0,Va(a.v,a))}
function gb(a){var b=null;a.b&&(b=a.b,a.b=b.next,b.next=null);a.b||(a.g=null);return b}
M.prototype.v=function(){for(var a;a=gb(this);)hb(this,a,this.a,this.l);this.i=!1};
function hb(a,b,c,d){if(3==c&&b.b&&!b.g)for(;a&&a.h;a=a.f)a.h=!1;if(b.a)b.a.f=null,mb(b,c,d);else try{b.g?b.f.call(b.context):mb(b,c,d)}catch(e){nb.call(null,e)}Oa(bb,b)}
function mb(a,b,c){2==b?a.f.call(a.context,c):a.b&&a.b.call(a.context,c)}
function lb(a,b){a.h=!0;Va(function(){a.h&&nb.call(null,b)})}
var nb=Pa;function P(a){C.call(this,a)}
oa(P,C);P.prototype.name="cancel";var ob=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Q(a){return a.match(ob)}
function R(a){return a?decodeURI(a):a}
function pb(a,b,c){if("array"==x(b))for(var d=0;d<b.length;d++)pb(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function qb(a){var b=[],c;for(c in a)pb(c,a[c],b);return b.join("&")}
;function rb(){this.b=[];this.a=-1}
rb.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.b[a]!=b&&(this.b[a]=b,this.a=-1)};
rb.prototype.get=function(a){return!!this.b[a]};
function sb(a){-1==a.a&&(a.a=qa(a.b,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.a}
;function tb(a){A("yt.ads.biscotti.lastId_",a)}
;var S=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};A("yt.config_",S);function ub(a){var b=arguments;if(1<b.length)S[b[0]]=b[1];else{b=b[0];for(var c in b)S[c]=b[c]}}
function T(a,b){return a in S?S[a]:b}
;function vb(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){U(b)}}:a}
function U(a,b,c,d,e){var f=v("yt.logging.errors.log");f?f(a,b,c,d,e):(f=T("ERRORS",[]),f.push([a,b,c,d,e]),ub("ERRORS",f))}
;function wb(){var a=xb(),b=[];sa(a,function(c,d){var e=encodeURIComponent(String(d)),f;"array"==x(c)?f=c:f=[c];D(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function yb(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length)try{var f=decodeURIComponent((e[0]||"").replace(/\+/g," ")),g=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?"array"==x(b[f])?ra(b[f],g):b[f]=[b[f],g]:b[f]=g}catch(k){var h=Error("Error decoding URL component");h.params="key: "+e[0]+", value: "+e[1];"q"==e[0]?U(h,"WARNING",void 0,void 0,void 0):U(h)}}return b}
function zb(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=yb(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);b=a;a=qb(e);a?(c=b.indexOf("#"),0>c&&(c=b.length),f=b.indexOf("?"),0>f||f>c?(f=c,e=""):e=b.substring(f+1,c),b=[b.substr(0,f),e,b.substr(c)],c=b[1],b[1]=a?c?c+"&"+a:a:c,a=b[0]+(b[1]?"?"+b[1]:"")+b[2]):a=b;return a+d}
;function xb(){var a=Ab;var b=void 0===b?v("yt.ads.biscotti.lastId_")||"":b;a=Object.assign(Bb(a),Cb(a));a.ca_type="image";b&&(a.bid=b);return a}
function Bb(a){var b={};b.dt=Ma;b.flash="0";a:{try{var c=a.a.top.location.href}catch(f){a=2;break a}a=c?c===a.b.location.href?0:1:2}b=(b.frm=a,b);b.u_tz=-(new Date).getTimezoneOffset();var d=void 0===d?B:d;try{var e=d.history.length}catch(f){e=0}b.u_his=e;b.u_java=!!B.navigator&&"unknown"!==typeof B.navigator.javaEnabled&&!!B.navigator.javaEnabled&&B.navigator.javaEnabled();B.screen&&(b.u_h=B.screen.height,b.u_w=B.screen.width,b.u_ah=B.screen.availHeight,b.u_aw=B.screen.availWidth,b.u_cd=B.screen.colorDepth);
B.navigator&&B.navigator.plugins&&(b.u_nplug=B.navigator.plugins.length);B.navigator&&B.navigator.mimeTypes&&(b.u_nmime=B.navigator.mimeTypes.length);return b}
function Cb(a){var b=a.a;try{var c=b.screenX;var d=b.screenY}catch(E){}try{var e=b.outerWidth;var f=b.outerHeight}catch(E){}try{var g=b.innerWidth;var h=b.innerHeight}catch(E){}b=[b.screenLeft,b.screenTop,c,d,b.screen?b.screen.availWidth:void 0,b.screen?b.screen.availTop:void 0,e,f,g,h];c=a.a.top;try{var k=(c||window).document,l="CSS1Compat"==k.compatMode?k.documentElement:k.body;var p=(new K(l.clientWidth,l.clientHeight)).round()}catch(E){p=new K(-12245933,-12245933)}k=p;p={};l=new rb;t.SVGElement&&
t.document.createElementNS&&l.set(0);c=La();c["allow-top-navigation-by-user-activation"]&&l.set(1);c["allow-popups-to-escape-sandbox"]&&l.set(2);t.crypto&&t.crypto.subtle&&l.set(3);t.TextDecoder&&t.TextEncoder&&l.set(4);l=sb(l);p.bc=l;p.bih=k.height;p.biw=k.width;p.brdim=b.join();a=a.b;return p.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0,p.wgl=!!B.WebGLRenderingContext,p}
var Ab=new function(){var a=window.document;this.a=window;this.b=a};
A("yt.ads_.signals_.getAdSignalsString",function(){return wb()});na();function V(a){return T("EXPERIMENT_FLAGS",{})[a]}
;var Db=void 0!==XMLHttpRequest?function(){return new XMLHttpRequest}:void 0!==ActiveXObject?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;
function Eb(){if(!Db)return null;var a=Db();return"open"in a?a:null}
function Fb(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function Gb(a,b){y(a)&&(a=vb(a));return window.setTimeout(a,b)}
;var Hb={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},Ib="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" "),
Jb=!1;
function Kb(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=Q(a)[1]||null,e=R(Q(a)[3]||null);d&&e?(d=c,c=Q(a),d=Q(d),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?R(Q(c)[3]||null)==e&&(Number(Q(c)[4]||null)||null)==(Number(Q(a)[4]||null)||null):!0;d=!!V("web_ajax_ignore_global_headers_if_set");for(var f in Hb)e=T(Hb[f]),!e||!c&&!Lb(a,f)||d&&void 0!==b[f]||(b[f]=e);if(c||Lb(a,"X-YouTube-Utc-Offset"))b["X-YouTube-Utc-Offset"]=-(new Date).getTimezoneOffset();(V("pass_biscotti_id_in_header_ajax")||V("pass_biscotti_id_in_header_ajax_tv"))&&
(c||Lb(a,"X-YouTube-Ad-Signals"))&&(b["X-YouTube-Ad-Signals"]=wb());return b}
function Mb(a){var b=window.location.search,c=R(Q(a)[3]||null),d=R(Q(a)[5]||null);d=(c=c&&c.endsWith("youtube.com"))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=yb(b),f={};D(Ib,function(g){e[g]&&(f[g]=e[g])});
return zb(a,f||{},!1)}
function Lb(a,b){var c=T("CORS_HEADER_WHITELIST")||{},d=R(Q(a)[3]||null);return d?(c=c[d])?0<=pa(c,b):!1:!0}
function Nb(a){var b=a.format||"JSON";var c=Ob("//googleads.g.doubleclick.net/pagead/id",a);var d=Pb(c,a),e=!1,f,g=Qb(c,function(h){if(!e){e=!0;f&&window.clearTimeout(f);var k=Fb(h),l=null,p=400<=h.status&&500>h.status,E=500<=h.status&&600>h.status;if(k||p||E)l=Rb(b,h,a.S);if(k)a:if(h&&204==h.status)k=!0;else{switch(b){case "XML":k=0==parseInt(l&&l.return_code,10);break a;case "RAW":k=!0;break a}k=!!l}l=l||{};p=a.context||t;k?a.m&&a.m.call(p,h,l):a.onError&&a.onError.call(p,h,l);a.A&&a.A.call(p,h,
l)}},a.method,d,a.headers,a.responseType,a.withCredentials);
a.o&&0<a.timeout&&(f=Gb(function(){e||(e=!0,g.abort(),window.clearTimeout(f),a.o.call(a.context||t,g))},a.timeout));
return g}
function Ob(a,b){b.U&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=T("XSRF_FIELD_NAME",void 0),d=b.W;d&&(d[c]&&delete d[c],a=zb(a,d||{},!0));return a}
function Pb(a,b){var c=T("XSRF_FIELD_NAME",void 0),d=T("XSRF_TOKEN",void 0),e=b.V||"",f=b.s,g=T("XSRF_FIELD_NAME",void 0),h;b.headers&&(h=b.headers["Content-Type"]);b.T||R(Q(a)[3]||null)&&!b.withCredentials&&R(Q(a)[3]||null)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.s&&b.s[g]||(f||(f={}),f[c]=d);f&&u(e)&&(e=yb(e),xa(e,f),e=b.B&&"JSON"==b.B?JSON.stringify(e):qb(e));if(!(c=e)&&(c=f)){a:{for(var k in f){f=!1;break a}f=!0}c=!f}!Jb&&c&&"POST"!=b.method&&
(Jb=!0,U(Error("AJAX request with postData should use POST")));return e}
function Rb(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?Sb(b):null)d={},D(b.getElementsByTagName("*"),function(e){d[e.tagName]=Tb(e)})}c&&Ub(d);
return d}
function Ub(a){if(ka(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=I(a[b]);a[c]=d}else Ub(a[b])}}
function Sb(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Tb(a){var b="";D(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Qb(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&vb(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=Eb();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;V("debug_forward_web_query_parameters")&&(a=Mb(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Kb(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;function Vb(){var a=ua(),b;return O(new M(function(c,d){a.m=function(e){Fb(e)?c(e):d(new W("Request failed, status="+e.status,"net.badstatus",e))};
a.onError=function(e){d(new W("Unknown request error","net.unknown",e))};
a.o=function(e){d(new W("Request timed out","net.timeout",e))};
b=Nb(a)}),function(c){c instanceof P&&b.abort();
return db(c)})}
function W(a,b){C.call(this,a+", errorCode="+b);this.errorCode=b;this.name="PromiseAjaxError"}
q(W,C);function X(){this.a=0;this.b=null}
X.prototype.then=function(a,b,c){return 1===this.a&&a?(a=a.call(c,this.b),$a(a)?a:Wb(a)):2===this.a&&b?(a=b.call(c,this.b),$a(a)?a:Xb(a)):this};
X.prototype.$goog_Thenable=!0;function Xb(a){var b=new X;a=void 0===a?null:a;b.a=2;b.b=void 0===a?null:a;return b}
function Wb(a){var b=new X;a=void 0===a?null:a;b.a=1;b.b=void 0===a?null:a;return b}
;function Yb(a){C.call(this,a.message||a.description||a.name);this.isMissing=a instanceof Y;this.isTimeout=a instanceof W&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof P}
q(Yb,C);Yb.prototype.name="BiscottiError";function Y(){C.call(this,"Biscotti ID is missing from server")}
q(Y,C);Y.prototype.name="BiscottiMissingError";var va={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Z=null;function Zb(){if("1"===ta(T("PLAYER_CONFIG",{}),"args","privembed"))return db(Error("Biscotti ID is not available in private embed mode"));Z||(Z=O(Vb().then($b),function(a){return ac(2,a)}));
return Z}
function $b(a){a=a.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new Y;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new Y;a=a.id;tb(a);Z=Wb(a);bc(18E5,2);return a}
function ac(a,b){var c=new Yb(b);tb("");Z=Xb(c);0<a&&bc(12E4,a-1);throw c;}
function bc(a,b){Gb(function(){O(Vb().then($b,function(c){return ac(b,c)}),w)},a)}
;v("yt.ads.biscotti.getId_")||A("yt.ads.biscotti.getId_",Zb);var cc;try{var dc=v("yt.ads.biscotti.getId_");cc=dc?dc():Zb()}catch(a){cc=db(a)}O(cc,w);}).call(this);
