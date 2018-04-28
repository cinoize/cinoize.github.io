(function(){var k,aa="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ca;
if("function"==typeof Object.setPrototypeOf)ca=Object.setPrototypeOf;else{var da;a:{var ea={wa:!0},fa={};try{fa.__proto__=ea;da=fa.wa;break a}catch(a){}da=!1}ca=da?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ha=ca;
function n(a,b){a.prototype=aa(b.prototype);a.prototype.constructor=a;if(ha)ha(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.u=b.prototype}
var ia="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},ja="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;
function ka(a){if(a){for(var b=ja,c=["Object","assign"],d=0;d<c.length-1;d++){var e=c[d];e in b||(b[e]={});b=b[e]}c=c[c.length-1];d=b[c];a=a(d);a!=d&&null!=a&&ia(b,c,{configurable:!0,writable:!0,value:a})}}
var la="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)Object.prototype.hasOwnProperty.call(d,e)&&(a[e]=d[e])}return a};
ka(function(a){return a||la});
(function(){function a(){function a(){}
Reflect.construct(a,[],function(){});
return new a instanceof a}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(a,d,e){a=b(a,d);e&&Reflect.setPrototypeOf(a,e.prototype);return a}}return function(a,b,e){void 0===e&&(e=a);
e=aa(e.prototype||Object.prototype);return Function.prototype.apply.call(a,e,b)||e}})();
var p=this;function q(a){return void 0!==a}
function r(a){return"string"==typeof a}
function ma(a){return"boolean"==typeof a}
function na(a){return"number"==typeof a}
function t(a,b,c){a=a.split(".");c=c||p;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&q(b)?c[d]=b:c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}}
function v(a,b){for(var c=a.split("."),d=b||p,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function oa(){}
function pa(a){a.fa=void 0;a.getInstance=function(){return a.fa?a.fa:a.fa=new a}}
function qa(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function w(a){return"array"==qa(a)}
function ra(a){var b=qa(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function sa(a){return"function"==qa(a)}
function ta(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
var ua="closure_uid_"+(1E9*Math.random()>>>0),va=0;function wa(a,b,c){return a.call.apply(a.bind,arguments)}
function xa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function x(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?x=wa:x=xa;return x.apply(null,arguments)}
function y(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}
var z=Date.now||function(){return+new Date};
function ya(a,b){t(a,b,void 0)}
function A(a,b){function c(){}
c.prototype=b.prototype;a.u=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.fb=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}}
;function B(a){if(Error.captureStackTrace)Error.captureStackTrace(this,B);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
A(B,Error);B.prototype.name="CustomError";var za=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(r(a))return r(b)&&1==b.length?a.indexOf(b,0):-1;
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},C=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=r(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Aa=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f=r(a)?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},Ba=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e=r(a)?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d};
function Ca(a,b){a:{var c=a.length;for(var d=r(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:r(a)?a.charAt(c):a[c]}
function Da(a,b){var c=za(a,b);0<=c&&Array.prototype.splice.call(a,c,1)}
function Ea(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Fa(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(ra(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;var Ha=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function Ia(a){if(!Ja.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(Ka,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(La,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(Ma,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(Na,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(Oa,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(Pa,"&#0;"));return a}
var Ka=/&/g,La=/</g,Ma=/>/g,Na=/"/g,Oa=/'/g,Pa=/\x00/g,Ja=/[\x00&<>"']/;function Qa(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var Ra;a:{var Ua=p.navigator;if(Ua){var Va=Ua.userAgent;if(Va){Ra=Va;break a}}Ra=""}function D(a){return-1!=Ra.indexOf(a)}
;function Wa(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function Xa(a,b){var c=ra(b),d=c?b:arguments;for(c=c?0:1;c<d.length;c++){if(null==a)return;a=a[d[c]]}return a}
function Ya(a){var b=Za,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function $a(a){for(var b in a)return!1;return!0}
function ab(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function bb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(c in b)if(!(c in a))return!1;return!0}
function cb(a){var b={},c;for(c in a)b[c]=a[c];return b}
var db="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function eb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<db.length;f++)c=db[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var fb=D("Opera"),gb=D("Trident")||D("MSIE"),hb=D("Edge"),ib=D("Gecko")&&!(-1!=Ra.toLowerCase().indexOf("webkit")&&!D("Edge"))&&!(D("Trident")||D("MSIE"))&&!D("Edge"),jb=-1!=Ra.toLowerCase().indexOf("webkit")&&!D("Edge");function kb(){var a=p.document;return a?a.documentMode:void 0}
var lb;a:{var mb="",nb=function(){var a=Ra;if(ib)return/rv:([^\);]+)(\)|;)/.exec(a);if(hb)return/Edge\/([\d\.]+)/.exec(a);if(gb)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(jb)return/WebKit\/(\S+)/.exec(a);if(fb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
nb&&(mb=nb?nb[1]:"");if(gb){var ob=kb();if(null!=ob&&ob>parseFloat(mb)){lb=String(ob);break a}}lb=mb}var pb=lb,qb;var rb=p.document;qb=rb&&gb?kb()||("CSS1Compat"==rb.compatMode?parseInt(pb,10):5):void 0;var sb=!gb||9<=Number(qb);function tb(){this.b="";this.f=ub}
tb.prototype.J=!0;tb.prototype.H=function(){return this.b};
tb.prototype.ea=!0;tb.prototype.Z=function(){return 1};
function vb(a){return a instanceof tb&&a.constructor===tb&&a.f===ub?a.b:"type_error:TrustedResourceUrl"}
var ub={};function E(){this.b="";this.f=wb}
E.prototype.J=!0;E.prototype.H=function(){return this.b};
E.prototype.ea=!0;E.prototype.Z=function(){return 1};
function xb(a){return a instanceof E&&a.constructor===E&&a.f===wb?a.b:"type_error:SafeUrl"}
var yb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function zb(a){if(a instanceof E)return a;a=a.J?a.H():String(a);yb.test(a)||(a="about:invalid#zClosurez");return Ab(a)}
var wb={};function Ab(a){var b=new E;b.b=a;return b}
Ab("about:blank");function Bb(){this.da="";this.va=Cb;this.b=null}
Bb.prototype.ea=!0;Bb.prototype.Z=function(){return this.b};
Bb.prototype.J=!0;Bb.prototype.H=function(){return this.da};
var Cb={};function Db(a,b){var c=new Bb;c.da=a;c.b=b;return c}
Db("<!DOCTYPE html>",0);Db("",0);Db("<br>",0);function Eb(a,b){var c=b instanceof E?b:zb(b);a.href=xb(c)}
function Fb(a,b,c){a.rel=c;a.href=-1!=c.toLowerCase().indexOf("stylesheet")?vb(b):b instanceof tb?vb(b):b instanceof E?xb(b):zb(b).H()}
function Gb(a,b){a.src=vb(b)}
;function Hb(a,b){this.x=q(a)?a:0;this.y=q(b)?b:0}
k=Hb.prototype;k.clone=function(){return new Hb(this.x,this.y)};
k.equals=function(a){return a instanceof Hb&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
k.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
k.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
k.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function Ib(a,b){this.width=a;this.height=b}
k=Ib.prototype;k.clone=function(){return new Ib(this.width,this.height)};
k.aspectRatio=function(){return this.width/this.height};
k.isEmpty=function(){return!(this.width*this.height)};
k.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
k.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
k.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Jb(a){var b=document;return r(a)?b.getElementById(a):a}
function Kb(a,b){Wa(b,function(b,d){b&&b.J&&(b=b.H());"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:Lb.hasOwnProperty(d)?a.setAttribute(Lb[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})}
var Lb={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function Mb(a,b,c){var d=arguments,e=document,f=String(d[0]),g=d[1];if(!sb&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',Ia(g.name),'"');if(g.type){f.push(' type="',Ia(g.type),'"');var h={};eb(h,g);delete h.type;g=h}f.push(">");f=f.join("")}f=e.createElement(f);g&&(r(g)?f.className=g:w(g)?f.className=g.join(" "):Kb(f,g));2<d.length&&Nb(e,f,d);return f}
function Nb(a,b,c){function d(c){c&&b.appendChild(r(c)?a.createTextNode(c):c)}
for(var e=2;e<c.length;e++){var f=c[e];if(!ra(f)||ta(f)&&0<f.nodeType)d(f);else{a:{if(f&&"number"==typeof f.length){if(ta(f)){var g="function"==typeof f.item||"string"==typeof f.item;break a}if(sa(f)){g="function"==typeof f.item;break a}}g=!1}C(g?Ea(f):f,d)}}}
function Ob(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Pb(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;function Qb(a){Rb();var b=new tb;b.b=a;return b}
var Rb=oa;var Sb=/^[\w+/_-]+[=]{0,2}$/;function Tb(){var a=p.document.querySelector("script[nonce]");if(a&&(a=a.nonce||a.getAttribute("nonce"))&&Sb.test(a))return a}
;var Ub=document,F=window;function Vb(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var Wb=(new Date).getTime();function Xb(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"app"!==a)throw Error("Invalid URI scheme in origin: "+a);c="";var d=b.indexOf(":");if(-1!=d){var e=
b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function Yb(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;u=m=0}
function b(a){for(var b=g,c=0;64>c;c+=4)b[c/4]=a[c]<<24|a[c+1]<<16|a[c+2]<<8|a[c+3];for(c=16;80>c;c++)a=b[c-3]^b[c-8]^b[c-14]^b[c-16],b[c]=(a<<1|a>>>31)&4294967295;a=e[0];var d=e[1],f=e[2],h=e[3],l=e[4];for(c=0;80>c;c++){if(40>c)if(20>c){var m=h^d&(f^h);var u=1518500249}else m=d^f^h,u=1859775393;else 60>c?(m=d&f|h&(d|f),u=2400959708):(m=d^f^h,u=3395469782);m=((a<<5|a>>>27)&4294967295)+m+l+u+b[c]&4294967295;l=h;h=f;f=(d<<30|d>>>2)&4294967295;d=a;a=m}e[0]=e[0]+a&4294967295;e[1]=e[1]+d&4294967295;e[2]=
e[2]+f&4294967295;e[3]=e[3]+h&4294967295;e[4]=e[4]+l&4294967295}
function c(a,c){if("string"===typeof a){a=unescape(encodeURIComponent(a));for(var d=[],e=0,g=a.length;e<g;++e)d.push(a.charCodeAt(e));a=d}c||(c=a.length);d=0;if(0==m)for(;d+64<c;)b(a.slice(d,d+64)),d+=64,u+=64;for(;d<c;)if(f[m++]=a[d++],u++,64==m)for(m=0,b(f);d+64<c;)b(a.slice(d,d+64)),d+=64,u+=64}
function d(){var a=[],d=8*u;56>m?c(h,56-m):c(h,64-(m-56));for(var g=63;56<=g;g--)f[g]=d&255,d>>>=8;b(f);for(g=d=0;5>g;g++)for(var l=24;0<=l;l-=8)a[d++]=e[g]>>l&255;return a}
for(var e=[],f=[],g=[],h=[128],l=1;64>l;++l)h[l]=0;var m,u;a();return{reset:a,update:c,digest:d,ya:function(){for(var a=d(),b="",c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}}}
;function Zb(a,b,c){var d=[],e=[];if(1==(w(c)?2:1))return e=[b,a],C(d,function(a){e.push(a)}),$b(e.join(" "));
var f=[],g=[];C(c,function(a){g.push(a.key);f.push(a.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];C(d,function(a){e.push(a)});
a=$b(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function $b(a){var b=Yb();b.update(a);return b.ya().toLowerCase()}
;function ac(a){this.b=a||{cookie:""}}
k=ac.prototype;k.isEnabled=function(){return navigator.cookieEnabled};
k.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');q(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(z()+1E3*c)).toUTCString();this.b.cookie=a+"="+b+e+d+c+f};
k.get=function(a,b){for(var c=a+"=",d=(this.b.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Ha(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
k.remove=function(a,b,c){var d=q(this.get(a));this.set(a,"",0,b,c);return d};
k.isEmpty=function(){return!this.b.cookie};
k.clear=function(){for(var a=(this.b.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=Ha(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var bc=new ac("undefined"==typeof document?null:document);bc.f=3950;function cc(a){var b=Xb(String(p.location.href)),c=p.__OVERRIDE_SID;null==c&&(c=(new ac(document)).get("SID"));if(c&&(b=(c=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?p.__SAPISID:p.__APISID,null==b&&(b=(new ac(document)).get(c?"SAPISID":"APISID")),b)){c=c?"SAPISIDHASH":"APISIDHASH";var d=String(p.location.href);return d&&b&&c?[c,Zb(Xb(d),b,a||null)].join(" "):null}return null}
;function dc(a,b){this.h=a;this.g=b;this.f=0;this.b=null}
dc.prototype.get=function(){if(0<this.f){this.f--;var a=this.b;this.b=a.next;a.next=null}else a=this.h();return a};
function ec(a,b){a.g(b);100>a.f&&(a.f++,b.next=a.b,a.b=b)}
;function fc(a){p.setTimeout(function(){throw a;},0)}
var gc;
function hc(){var a=p.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!D("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow;a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host;a=x(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!D("Trident")&&!D("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(q(c.next)){c=c.next;var a=c.la;c.la=null;a()}};
return function(a){d.next={la:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){p.setTimeout(a,0)}}
;function ic(){this.f=this.b=null}
var kc=new dc(function(){return new jc},function(a){a.reset()});
ic.prototype.add=function(a,b){var c=kc.get();c.set(a,b);this.f?this.f.next=c:this.b=c;this.f=c};
ic.prototype.remove=function(){var a=null;this.b&&(a=this.b,this.b=this.b.next,this.b||(this.f=null),a.next=null);return a};
function jc(){this.next=this.scope=this.b=null}
jc.prototype.set=function(a,b){this.b=a;this.scope=b;this.next=null};
jc.prototype.reset=function(){this.next=this.scope=this.b=null};function lc(a,b){mc||nc();oc||(mc(),oc=!0);pc.add(a,b)}
var mc;function nc(){if(p.Promise&&p.Promise.resolve){var a=p.Promise.resolve(void 0);mc=function(){a.then(qc)}}else mc=function(){var a=qc;
!sa(p.setImmediate)||p.Window&&p.Window.prototype&&!D("Edge")&&p.Window.prototype.setImmediate==p.setImmediate?(gc||(gc=hc()),gc(a)):p.setImmediate(a)}}
var oc=!1,pc=new ic;function qc(){for(var a;a=pc.remove();){try{a.b.call(a.scope)}catch(b){fc(b)}ec(kc,a)}oc=!1}
;var rc=null,sc=null;function tc(){this.f=-1}
;function uc(){this.f=64;this.b=[];this.j=[];this.l=[];this.g=[];this.g[0]=128;for(var a=1;a<this.f;++a)this.g[a]=0;this.i=this.h=0;this.reset()}
A(uc,tc);uc.prototype.reset=function(){this.b[0]=1732584193;this.b[1]=4023233417;this.b[2]=2562383102;this.b[3]=271733878;this.b[4]=3285377520;this.i=this.h=0};
function vc(a,b,c){c||(c=0);var d=a.l;if(r(b))for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.b[0];c=a.b[1];var g=a.b[2],h=a.b[3],l=a.b[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var m=1518500249}else f=c^g^h,m=1859775393;else 60>e?(f=c&g|h&(c|g),m=2400959708):(f=c^g^h,m=
3395469782);f=(b<<5|b>>>27)+f+l+m+d[e]&4294967295;l=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.b[0]=a.b[0]+b&4294967295;a.b[1]=a.b[1]+c&4294967295;a.b[2]=a.b[2]+g&4294967295;a.b[3]=a.b[3]+h&4294967295;a.b[4]=a.b[4]+l&4294967295}
uc.prototype.update=function(a,b){if(null!=a){q(b)||(b=a.length);for(var c=b-this.f,d=0,e=this.j,f=this.h;d<b;){if(0==f)for(;d<=c;)vc(this,a,d),d+=this.f;if(r(a))for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.f){vc(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.f){vc(this,e);f=0;break}}this.h=f;this.i+=b}};
uc.prototype.digest=function(){var a=[],b=8*this.i;56>this.h?this.update(this.g,56-this.h):this.update(this.g,this.f-(this.h-56));for(var c=this.f-1;56<=c;c--)this.j[c]=b&255,b/=256;vc(this,this.j);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.b[c]>>d&255,++b;return a};function G(){this.h=this.h;this.B=this.B}
G.prototype.h=!1;G.prototype.dispose=function(){this.h||(this.h=!0,this.m())};
function wc(a,b){a.h?q(void 0)?b.call(void 0):b():(a.B||(a.B=[]),a.B.push(q(void 0)?x(b,void 0):b))}
G.prototype.m=function(){if(this.B)for(;this.B.length;)this.B.shift()()};
function xc(a){a&&"function"==typeof a.dispose&&a.dispose()}
function yc(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];ra(d)?yc.apply(null,d):xc(d)}}
;function zc(a){if(a.classList)return a.classList;a=a.className;return r(a)&&a.match(/\S+/g)||[]}
function Ac(a,b){if(a.classList)var c=a.classList.contains(b);else c=zc(a),c=0<=za(c,b);return c}
function Bc(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):Ac(a,"inverted-hdpi")&&(a.className=Aa(zc(a),function(a){return"inverted-hdpi"!=a}).join(" "))}
;var Cc="StopIteration"in p?p.StopIteration:{message:"StopIteration",stack:""};function Dc(){}
Dc.prototype.next=function(){throw Cc;};
Dc.prototype.D=function(){return this};
function Ec(a){if(a instanceof Dc)return a;if("function"==typeof a.D)return a.D(!1);if(ra(a)){var b=0,c=new Dc;c.next=function(){for(;;){if(b>=a.length)throw Cc;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function Fc(a,b){if(ra(a))try{C(a,b,void 0)}catch(c){if(c!==Cc)throw c;}else{a=Ec(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==Cc)throw c;}}}
function Gc(a){if(ra(a))return Ea(a);a=Ec(a);var b=[];Fc(a,function(a){b.push(a)});
return b}
;function Hc(a,b){this.h={};this.b=[];this.g=this.f=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Hc)for(c=Ic(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function Ic(a){Jc(a);return a.b.concat()}
k=Hc.prototype;k.equals=function(a,b){if(this===a)return!0;if(this.f!=a.f)return!1;var c=b||Kc;Jc(this);for(var d,e=0;d=this.b[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function Kc(a,b){return a===b}
k.isEmpty=function(){return 0==this.f};
k.clear=function(){this.h={};this.g=this.f=this.b.length=0};
k.remove=function(a){return Object.prototype.hasOwnProperty.call(this.h,a)?(delete this.h[a],this.f--,this.g++,this.b.length>2*this.f&&Jc(this),!0):!1};
function Jc(a){if(a.f!=a.b.length){for(var b=0,c=0;b<a.b.length;){var d=a.b[b];Object.prototype.hasOwnProperty.call(a.h,d)&&(a.b[c++]=d);b++}a.b.length=c}if(a.f!=a.b.length){var e={};for(c=b=0;b<a.b.length;)d=a.b[b],Object.prototype.hasOwnProperty.call(e,d)||(a.b[c++]=d,e[d]=1),b++;a.b.length=c}}
k.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.h,a)?this.h[a]:b};
k.set=function(a,b){Object.prototype.hasOwnProperty.call(this.h,a)||(this.f++,this.b.push(a),this.g++);this.h[a]=b};
k.forEach=function(a,b){for(var c=Ic(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
k.clone=function(){return new Hc(this)};
k.D=function(a){Jc(this);var b=0,c=this.g,d=this,e=new Dc;e.next=function(){if(c!=d.g)throw Error("The map has changed since the iterator was created");if(b>=d.b.length)throw Cc;var e=d.b[b++];return a?e:d.h[e]};
return e};(function(){if(!p.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
p.addEventListener("test",oa,b);p.removeEventListener("test",oa,b);return a})();function Lc(a){var b=[];Mc(new Nc,a,b);return b.join("")}
function Nc(){}
function Mc(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(w(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Mc(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Oc(d,c),c.push(":"),Mc(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Oc(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Pc={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Qc=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Oc(a,b){b.push('"',a.replace(Qc,function(a){var b=Pc[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),Pc[a]=b);return b}),'"')}
;function Rc(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0}
function Sc(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}}
;function H(a,b){this.b=0;this.l=void 0;this.g=this.f=this.h=null;this.i=this.j=!1;if(a!=oa)try{var c=this;a.call(b,function(a){Tc(c,2,a)},function(a){Tc(c,3,a)})}catch(d){Tc(this,3,d)}}
function Uc(){this.next=this.context=this.f=this.g=this.b=null;this.h=!1}
Uc.prototype.reset=function(){this.context=this.f=this.g=this.b=null;this.h=!1};
var Vc=new dc(function(){return new Uc},function(a){a.reset()});
function Wc(a,b,c){var d=Vc.get();d.g=a;d.f=b;d.context=c;return d}
function Xc(a){return new H(function(b,c){c(a)})}
function Yc(a,b,c){Zc(a,b,c,null)||lc(y(b,a))}
function $c(a){return new H(function(b,c){a.length||b(void 0);for(var d=0,e;d<a.length;d++)e=a[d],Yc(e,b,c)})}
function ad(a){return new H(function(b){var c=a.length,d=[];if(c)for(var e=function(a,e,f){c--;d[a]=e?{Y:!0,value:f}:{Y:!1,reason:f};0==c&&b(d)},f=0,g;f<a.length;f++)g=a[f],Yc(g,y(e,f,!0),y(e,f,!1));
else b(d)})}
H.prototype.then=function(a,b,c){return bd(this,sa(a)?a:null,sa(b)?b:null,c)};
Rc(H);function cd(a,b){var c=Wc(b,b,void 0);c.h=!0;dd(a,c);return a}
function ed(a,b){return bd(a,null,b,void 0)}
H.prototype.cancel=function(a){0==this.b&&lc(function(){var b=new fd(a);gd(this,b)},this)};
function gd(a,b){if(0==a.b)if(a.h){var c=a.h;if(c.f){for(var d=0,e=null,f=null,g=c.f;g&&(g.h||(d++,g.b==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.b&&1==d?gd(c,b):(f?(d=f,d.next==c.g&&(c.g=d),d.next=d.next.next):hd(c),id(c,e,3,b)))}a.h=null}else Tc(a,3,b)}
function dd(a,b){a.f||2!=a.b&&3!=a.b||jd(a);a.g?a.g.next=b:a.f=b;a.g=b}
function bd(a,b,c,d){var e=Wc(null,null,null);e.b=new H(function(a,g){e.g=b?function(c){try{var e=b.call(d,c);a(e)}catch(m){g(m)}}:a;
e.f=c?function(b){try{var e=c.call(d,b);!q(e)&&b instanceof fd?g(b):a(e)}catch(m){g(m)}}:g});
e.b.h=a;dd(a,e);return e.b}
H.prototype.o=function(a){this.b=0;Tc(this,2,a)};
H.prototype.w=function(a){this.b=0;Tc(this,3,a)};
function Tc(a,b,c){0==a.b&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.b=1,Zc(c,a.o,a.w,a)||(a.l=c,a.b=b,a.h=null,jd(a),3!=b||c instanceof fd||kd(a,c)))}
function Zc(a,b,c,d){if(a instanceof H)return dd(a,Wc(b||oa,c||null,d)),!0;if(Sc(a))return a.then(b,c,d),!0;if(ta(a))try{var e=a.then;if(sa(e))return ld(a,e,b,c,d),!0}catch(f){return c.call(d,f),!0}return!1}
function ld(a,b,c,d,e){function f(a){h||(h=!0,d.call(e,a))}
function g(a){h||(h=!0,c.call(e,a))}
var h=!1;try{b.call(a,g,f)}catch(l){f(l)}}
function jd(a){a.j||(a.j=!0,lc(a.B,a))}
function hd(a){var b=null;a.f&&(b=a.f,a.f=b.next,b.next=null);a.f||(a.g=null);return b}
H.prototype.B=function(){for(var a;a=hd(this);)id(this,a,this.b,this.l);this.j=!1};
function id(a,b,c,d){if(3==c&&b.f&&!b.h)for(;a&&a.i;a=a.h)a.i=!1;if(b.b)b.b.h=null,md(b,c,d);else try{b.h?b.g.call(b.context):md(b,c,d)}catch(e){nd.call(null,e)}ec(Vc,b)}
function md(a,b,c){2==b?a.g.call(a.context,c):a.f&&a.f.call(a.context,c)}
function kd(a,b){a.i=!0;lc(function(){a.i&&nd.call(null,b)})}
var nd=fc;function fd(a){B.call(this,a)}
A(fd,B);fd.prototype.name="cancel";function I(a){G.call(this);this.j=1;this.g=[];this.i=0;this.b=[];this.f={};this.l=!!a}
A(I,G);k=I.prototype;k.subscribe=function(a,b,c){var d=this.f[a];d||(d=this.f[a]=[]);var e=this.j;this.b[e]=a;this.b[e+1]=b;this.b[e+2]=c;this.j=e+3;d.push(e);return e};
function od(a,b,c,d){if(b=a.f[b]){var e=a.b;(b=Ca(b,function(a){return e[a+1]==c&&e[a+2]==d}))&&a.K(b)}}
k.K=function(a){var b=this.b[a];if(b){var c=this.f[b];0!=this.i?(this.g.push(a),this.b[a+1]=oa):(c&&Da(c,a),delete this.b[a],delete this.b[a+1],delete this.b[a+2])}return!!b};
k.I=function(a,b){var c=this.f[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.l)for(e=0;e<c.length;e++){var g=c[e];pd(this.b[g+1],this.b[g+2],d)}else{this.i++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.b[g+1].apply(this.b[g+2],d)}finally{if(this.i--,0<this.g.length&&0==this.i)for(;c=this.g.pop();)this.K(c)}}return 0!=e}return!1};
function pd(a,b,c){lc(function(){a.apply(b,c)})}
k.clear=function(a){if(a){var b=this.f[a];b&&(C(b,this.K,this),delete this.f[a])}else this.b.length=0,this.f={}};
k.m=function(){I.u.m.call(this);this.clear();this.g.length=0};function qd(a){this.b=a}
qd.prototype.set=function(a,b){q(b)?this.b.set(a,Lc(b)):this.b.remove(a)};
qd.prototype.get=function(a){try{var b=this.b.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
qd.prototype.remove=function(a){this.b.remove(a)};function rd(a){this.b=a}
A(rd,qd);function sd(a){this.data=a}
function td(a){return!q(a)||a instanceof sd?a:new sd(a)}
rd.prototype.set=function(a,b){rd.u.set.call(this,a,td(b))};
rd.prototype.f=function(a){a=rd.u.get.call(this,a);if(!q(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
rd.prototype.get=function(a){if(a=this.f(a)){if(a=a.data,!q(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};function ud(a){this.b=a}
A(ud,rd);ud.prototype.set=function(a,b,c){if(b=td(b)){if(c){if(c<z()){ud.prototype.remove.call(this,a);return}b.expiration=c}b.creation=z()}ud.u.set.call(this,a,b)};
ud.prototype.f=function(a){var b=ud.u.f.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<z()||c&&c>z())ud.prototype.remove.call(this,a);else return b}};function vd(a){this.b=a}
A(vd,ud);function wd(){}
;function xd(){}
A(xd,wd);xd.prototype.clear=function(){var a=Gc(this.D(!0)),b=this;C(a,function(a){b.remove(a)})};function yd(a){this.b=a}
A(yd,xd);k=yd.prototype;k.isAvailable=function(){if(!this.b)return!1;try{return this.b.setItem("__sak","1"),this.b.removeItem("__sak"),!0}catch(a){return!1}};
k.set=function(a,b){try{this.b.setItem(a,b)}catch(c){if(0==this.b.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
k.get=function(a){a=this.b.getItem(a);if(!r(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
k.remove=function(a){this.b.removeItem(a)};
k.D=function(a){var b=0,c=this.b,d=new Dc;d.next=function(){if(b>=c.length)throw Cc;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!r(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
k.clear=function(){this.b.clear()};
k.key=function(a){return this.b.key(a)};function zd(){var a=null;try{a=window.localStorage||null}catch(b){}this.b=a}
A(zd,yd);function Ad(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.b=a}
A(Ad,yd);function Bd(a,b){this.f=a;this.b=null;if(gb&&!(9<=Number(qb))){Cd||(Cd=new Hc);this.b=Cd.get(a);this.b||(b?this.b=document.getElementById(b):(this.b=document.createElement("userdata"),this.b.addBehavior("#default#userData"),document.body.appendChild(this.b)),Cd.set(a,this.b));try{this.b.load(this.f)}catch(c){this.b=null}}}
A(Bd,xd);var Dd={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Cd=null;function Ed(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(a){return Dd[a]})}
k=Bd.prototype;k.isAvailable=function(){return!!this.b};
k.set=function(a,b){this.b.setAttribute(Ed(a),b);Fd(this)};
k.get=function(a){a=this.b.getAttribute(Ed(a));if(!r(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
k.remove=function(a){this.b.removeAttribute(Ed(a));Fd(this)};
k.D=function(a){var b=0,c=this.b.XMLDocument.documentElement.attributes,d=new Dc;d.next=function(){if(b>=c.length)throw Cc;var d=c[b++];if(a)return decodeURIComponent(d.nodeName.replace(/\./g,"%")).substr(1);d=d.nodeValue;if(!r(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
k.clear=function(){for(var a=this.b.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Fd(this)};
function Fd(a){try{a.b.save(a.f)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Gd(a,b){this.f=a;this.b=b+"::"}
A(Gd,xd);Gd.prototype.set=function(a,b){this.f.set(this.b+a,b)};
Gd.prototype.get=function(a){return this.f.get(this.b+a)};
Gd.prototype.remove=function(a){this.f.remove(this.b+a)};
Gd.prototype.D=function(a){var b=this.f.D(!0),c=this,d=new Dc;d.next=function(){for(var d=b.next();d.substr(0,c.b.length)!=c.b;)d=b.next();return a?d.substr(c.b.length):c.f.get(d)};
return d};function Hd(a){if(!sa(a))if(a&&"function"==typeof a.handleEvent)a=x(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(5E3)?-1:p.setTimeout(a,5E3)}
function Id(){var a=null;return ed(new H(function(b,c){a=Hd(function(){b(void 0)});
-1==a&&c(Error("Failed to schedule timer."))}),function(b){p.clearTimeout(a);
throw b;})}
;var Jd=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function J(a){return a.match(Jd)}
function Kd(a){return a?decodeURI(a):a}
function Ld(a,b,c){if(w(b))for(var d=0;d<b.length;d++)Ld(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Md(a){var b=[],c;for(c in a)Ld(c,a[c],b);return b.join("&")}
function Nd(a,b){var c=Md(b);if(c){var d=a.indexOf("#");0>d&&(d=a.length);var e=a.indexOf("?");if(0>e||e>d){e=d;var f=""}else f=a.substring(e+1,d);d=[a.substr(0,e),f,a.substr(d)];e=d[1];d[1]=c?e?e+"&"+c:c:e;c=d[0]+(d[1]?"?"+d[1]:"")+d[2]}else c=a;return c}
;function Pd(a,b,c){var d="script";d=void 0===d?"":d;var e=a.createElement("link");Fb(e,b,"preload");d&&(e.as=d);c&&(e.nonce=c);if(a=a.getElementsByTagName("head")[0])try{a.appendChild(e)}catch(f){}}
;var Qd=/^\.google\.(com?\.)?[a-z]{2,3}$/,Rd=/\.(cn|com\.bi|do|sl|ba|by|ma)$/;function Sd(a){return Qd.test(a)&&!Rd.test(a)}
var Td=p;function Ud(a){a="https://"+("adservice"+a+"/adsid/integrator.js");var b=["domain="+encodeURIComponent(p.location.hostname)];K[3]>=z()&&b.push("adsid="+encodeURIComponent(K[1]));return a+"?"+b.join("&")}
var K,L;function Vd(){Td=p;K=Td.googleToken=Td.googleToken||{};var a=z();K[1]&&K[3]>a&&0<K[2]||(K[1]="",K[2]=-1,K[3]=-1,K[4]="",K[6]="");L=Td.googleIMState=Td.googleIMState||{};Sd(L[1])||(L[1]=".google.com");w(L[5])||(L[5]=[]);ma(L[6])||(L[6]=!1);w(L[7])||(L[7]=[]);na(L[8])||(L[8]=0)}
function Wd(){Vd();return K[1]}
var M={ca:function(){return 0<L[8]},
Qa:function(){L[8]++},
Ra:function(){0<L[8]&&L[8]--},
Sa:function(){L[8]=0},
shouldRetry:function(){return!1},
ma:function(){return L[5]},
ka:function(a){try{a()}catch(b){p.setTimeout(function(){throw b;},0)}},
ia:function(){if(!M.ca()){var a=p.document,b=function(b){b=Ud(b);a:{try{var c=Tb();break a}catch(h){}c=void 0}var d=c;Pd(a,b,d);c=a.createElement("script");c.type="text/javascript";d&&(c.nonce=d);c.onerror=function(){return p.processGoogleToken({},2)};
b=Qb(b);Gb(c,b);try{(a.head||a.body||a.documentElement).appendChild(c),M.Qa()}catch(h){}},c=L[1];
b(c);".google.com"!=c&&b(".google.com");b={};var d=(b.newToken="FBT",b);p.setTimeout(function(){return p.processGoogleToken(d,1)},1E3)}}};
function Xd(a){Vd();var b=Td.googleToken[5]||0;a&&(0!=b||K[3]>=z()?M.ka(a):(M.ma().push(a),M.ia()));K[3]>=z()&&K[2]>=z()||M.ia()}
function Yd(a){p.processGoogleToken=p.processGoogleToken||function(a,c){var b=a,e=c;b=void 0===b?{}:b;e=void 0===e?0:e;var f=b.newToken||"",g="NT"==f,h=parseInt(b.freshLifetimeSecs||"",10),l=parseInt(b.validLifetimeSecs||"",10),m=b["1p_jar"]||"";b=b.pucrd||"";Vd();1==e?M.Sa():M.Ra();if(!f&&M.shouldRetry())Sd(".google.com")&&(L[1]=".google.com"),M.ia();else{var u=Td.googleToken=Td.googleToken||{},N=0==e&&f&&r(f)&&!g&&na(h)&&0<h&&na(l)&&0<l&&r(m);g=g&&!M.ca()&&(!(K[3]>=z())||"NT"==K[1]);var ba=!(K[3]>=
z())&&0!=e;if(N||g||ba)g=z(),h=g+1E3*h,l=g+1E3*l,1E-5>Math.random()&&(g="https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err="+e,p.google_image_requests||(p.google_image_requests=[]),ba=p.document.createElement("img"),ba.src=g,p.google_image_requests.push(ba)),u[5]=e,u[1]=f,u[2]=h,u[3]=l,u[4]=m,u[6]=b,Vd();if(N||!M.ca()){e=M.ma();for(f=0;f<e.length;f++)M.ka(e[f]);e.length=0}}};
Xd(a)}
;function Zd(a,b){if(1<b.length)a[b[0]]=b[1];else{var c=b[0],d;for(d in c)a[d]=c[d]}}
var O=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};var $d=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};t("yt.config_",$d,void 0);function P(a){Zd($d,arguments)}
function Q(a,b){return a in $d?$d[a]:b}
function ae(a){return Q(a,void 0)}
function be(){return Q("PLAYER_CONFIG",{})}
;function ce(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){R(b)}}:a}
function R(a,b,c,d,e){var f=v("yt.logging.errors.log");f?f(a,b,c,d,e):(f=Q("ERRORS",[]),f.push([a,b,c,d,e]),P("ERRORS",f))}
;function S(a){return Q("EXPERIMENT_FLAGS",{})[a]}
;function de(a){a&&(a.dataset?a.dataset[ee("loaded")]="true":a.setAttribute("data-loaded","true"))}
function fe(a,b){return a?a.dataset?a.dataset[ee(b)]:a.getAttribute("data-"+b):null}
var ge={};function ee(a){return ge[a]||(ge[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))}
;function T(a,b){sa(a)&&(a=ce(a));return window.setTimeout(a,b)}
function he(a){window.clearTimeout(a)}
;var ie=v("ytPubsubPubsubInstance")||new I;I.prototype.subscribe=I.prototype.subscribe;I.prototype.unsubscribeByKey=I.prototype.K;I.prototype.publish=I.prototype.I;I.prototype.clear=I.prototype.clear;t("ytPubsubPubsubInstance",ie,void 0);var je=v("ytPubsubPubsubSubscribedKeys")||{};t("ytPubsubPubsubSubscribedKeys",je,void 0);var ke=v("ytPubsubPubsubTopicToKeys")||{};t("ytPubsubPubsubTopicToKeys",ke,void 0);var le=v("ytPubsubPubsubIsSynchronous")||{};t("ytPubsubPubsubIsSynchronous",le,void 0);
function me(a,b){var c=ne();if(c){var d=c.subscribe(a,function(){var c=arguments;var f=function(){je[d]&&b.apply(window,c)};
try{le[a]?f():T(f,0)}catch(g){R(g)}},void 0);
je[d]=!0;ke[a]||(ke[a]=[]);ke[a].push(d);return d}return 0}
function oe(a){var b=ne();b&&(na(a)?a=[a]:r(a)&&(a=[parseInt(a,10)]),C(a,function(a){b.unsubscribeByKey(a);delete je[a]}))}
function pe(a,b){var c=ne();c&&c.publish.apply(c,arguments)}
function qe(a){var b=ne();if(b)if(b.clear(a),a)re(a);else for(var c in ke)re(c)}
function ne(){return v("ytPubsubPubsubInstance")}
function re(a){ke[a]&&(a=ke[a],C(a,function(a){je[a]&&delete je[a]}),a.length=0)}
;var se=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,te=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function ue(a,b){if(window.spf){var c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(se,""),c=c.replace(te,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else ve(a,b)}
function ve(a,b){var c=we(a),d=document.getElementById(c),e=d&&fe(d,"loaded"),f=d&&!e;if(e)b&&b();else{if(b){e=me(c,b);var g=""+(b[ua]||(b[ua]=++va));xe[g]=e}f||(d=ye(a,c,function(){fe(d,"loaded")||(de(d),pe(c),T(y(qe,c),0))}))}}
function ye(a,b,c){var d=document.createElement("SCRIPT");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
d.onreadystatechange=function(){switch(d.readyState){case "loaded":case "complete":d.onload()}};
Gb(d,Qb(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(d,a.firstChild);return d}
function ze(a){a=we(a);var b=document.getElementById(a);b&&(qe(a),b.parentNode.removeChild(b))}
function Ae(a,b){if(a&&b){var c=""+(b[ua]||(b[ua]=++va));(c=xe[c])&&oe(c)}}
function we(a){var b=document.createElement("a");Eb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Qa(a)}
var xe={};var Be=null;function Ce(){var a=Q("BG_I",null),b=Q("BG_IU",null),c=Q("BG_P",void 0);b?ue(b,function(){window.botguard?De(c):(ze(b),R(Error("Unable to load Botguard from "+b),"WARNING"))}):a&&(eval(a),window.botguard?De(c):R(Error("Unable to load Botguard from JS"),"WARNING"))}
function De(a){Be=new window.botguard.bg(a);S("botguard_periodic_refresh")&&O()}
function Ee(){return null!=Be}
function Fe(){return Be?Be.invoke():null}
;z();var Ge=q(XMLHttpRequest)?function(){return new XMLHttpRequest}:q(ActiveXObject)?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;
function He(){if(!Ge)return null;var a=Ge();return"open"in a?a:null}
function Ie(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function Je(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=decodeURIComponent((e[0]||"").replace(/\+/g," "));e=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?w(b[f])?Fa(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b}
;var Ke={"X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},Le=!1;
function Me(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=J(a)[1]||null,e=Kd(J(a)[3]||null);d&&e?(d=c,c=J(a),d=J(d),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?Kd(J(c)[3]||null)==e&&(Number(J(c)[4]||null)||null)==(Number(J(a)[4]||null)||null):!0;for(var f in Ke){if((e=d=Q(Ke[f]))&&!(e=c)){e=f;var g=Q("CORS_HEADER_WHITELIST")||{},h=Kd(J(a)[3]||null);e=h?(g=g[h])?0<=za(g,e):!1:!0}e&&(b[f]=d)}return b}
function Ne(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=Oe(a,b);var d=Pe(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(a){if(!e){e=!0;f&&he(f);var c=a.ok,d=function(d){d=d||{};var e=b.context||p;c?b.onSuccess&&b.onSuccess.call(e,d,a):b.onError&&b.onError.call(e,d,a);b.ha&&b.ha.call(e,d,a)};
"JSON"==(b.format||"JSON")&&(c||400<=a.status&&500>a.status)?a.json().then(d,function(){d(null)}):d(null)}});
b.oa&&0<b.timeout&&(f=T(function(){e||(e=!0,he(f),b.oa.call(b.context||p))},b.timeout))}else Qe(a,b)}
function Qe(a,b){var c=b.format||"JSON";a=Oe(a,b);var d=Pe(a,b),e=!1,f,g=Re(a,function(a){if(!e){e=!0;f&&he(f);var d=Ie(a),g=null;if(d||400<=a.status&&500>a.status)g=Se(c,a,b.hb);if(d)a:if(a&&204==a.status)d=!0;else{switch(c){case "XML":d=0==parseInt(g&&g.return_code,10);break a;case "RAW":d=!0;break a}d=!!g}g=g||{};var h=b.context||p;d?b.onSuccess&&b.onSuccess.call(h,a,g):b.onError&&b.onError.call(h,a,g);b.ha&&b.ha.call(h,a,g)}},b.method,d,b.headers,b.responseType,b.withCredentials);
b.L&&0<b.timeout&&(f=T(function(){e||(e=!0,g.abort(),he(f),b.L.call(b.context||p,g))},b.timeout));
return g}
function Oe(a,b){b.Da&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=Q("XSRF_FIELD_NAME",void 0),d=b.cb;if(d){d[c]&&delete d[c];d=d||{};var e=a.split("#",2);c=e[0];e=1<e.length?"#"+e[1]:"";var f=c.split("?",2);c=f[0];f=Je(f[1]||"");for(var g in d)f[g]=d[g];a=Nd(c,f)+e}return a}
function Pe(a,b){var c=Q("XSRF_FIELD_NAME",void 0),d=Q("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.A,g=ae("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.ib||Kd(J(a)[3]||null)&&!b.withCredentials&&Kd(J(a)[3]||null)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.A&&b.A[g]||(f||(f={}),f[c]=d);f&&r(e)&&(e=Je(e),eb(e,f),e=b.pa&&"JSON"==b.pa?JSON.stringify(e):Md(e));f=e||f&&!$a(f);!Le&&f&&"POST"!=b.method&&(Le=!0,R(Error("AJAX request with postData should use POST")));
return e}
function Se(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?Te(b):null)d={},C(b.getElementsByTagName("*"),function(a){d[a.tagName]=Ue(a)})}c&&Ve(d);
return d}
function Ve(a){if(ta(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=Db(a[b],null);a[c]=d}else Ve(a[b])}}
function Te(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Ue(a){var b="";C(a.childNodes,function(a){b+=a.nodeValue});
return b}
function We(a,b){b.method="POST";b.A||(b.A={});Qe(a,b)}
function Re(a,b,c,d,e,f,g){function h(){4==(l&&"readyState"in l?l.readyState:0)&&b&&ce(b)(l)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var l=He();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",h,!1):l.onreadystatechange=h;l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Me(a,e))for(var m in e)l.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");l.send(d);return l}
;var Xe={},Ye=0;
function Ze(a,b,c,d,e){e=void 0===e?"":e;a&&(c&&(c=Ra,c=!(c&&0<=c.toLowerCase().indexOf("cobalt"))),c?a&&(a instanceof E||(a=a.J?a.H():String(a),yb.test(a)||(a="about:invalid#zClosurez"),a=Ab(a)),b=xb(a),"about:invalid#zClosurez"===b?a="":(b instanceof Bb?a=b:(a=null,b.ea&&(a=b.Z()),b=Ia(b.J?b.H():String(b)),a=Db(b,a)),a=encodeURIComponent(String(Lc(a instanceof Bb&&a.constructor===Bb&&a.va===Cb?a.da:"type_error:SafeHtml")))),/^[\s\xa0]*$/.test(a)||(a=Mb("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+
'+"\\"></body>"',style:"display:none"}),(9==a.nodeType?a:a.ownerDocument||a.document).body.appendChild(a))):e?Re(a,b,"POST",e,d):Q("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d?Re(a,b,"GET","",d):$e(a,b))}
function $e(a,b){var c=new Image,d=""+Ye++;Xe[d]=c;c.onload=c.onerror=function(){b&&Xe[d]&&b();delete Xe[d]};
c.src=a}
;var af={},bf=0;
function cf(a,b,c,d,e,f){f=f||{};f.name=c||Q("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||Q("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);b=void 0===b?"ERROR":b;e=void 0===e?!1:e;b=void 0===b?"ERROR":b;e=window&&window.yterr||(void 0===e?!1:e)||!1;if(a&&e&&!(5<=bf)){e=a.stacktrace;c=a.columnNumber;a.hasOwnProperty("params")&&(f.params=JSON.stringify(a.params));d=v("window.location.href");if(r(a))a={message:a,name:"Unknown error",lineNumber:"Not available",fileName:d,stack:"Not available"};else{var g=
!1;try{var h=a.lineNumber||a.line||"Not available"}catch(N){h="Not available",g=!0}try{var l=a.fileName||a.filename||a.sourceURL||p.$googDebugFname||d}catch(N){l="Not available",g=!0}a=!g&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:{message:a.message||"Not available",name:a.name||"UnknownError",lineNumber:h,fileName:l,stack:a.stack||"Not available"}}e=e||a.stack;h=a.lineNumber.toString();isNaN(h)||isNaN(c)||(h=h+":"+c);if(!(af[a.message]||0<=e.indexOf("/YouTubeCenter.js")||0<=e.indexOf("/mytube.js"))){l=
e;h={cb:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,1E3),line:h,level:b,"client.name":f.name},A:{url:Q("PAGE_NAME",window.location.href),file:a.fileName},method:"POST"};f.version&&(h["client.version"]=f.version);l&&(h.A.stack=l);for(var m in f)h.A["client."+m]=f[m];if(m=Q("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var u in m)h.A[u]=m[u];Qe(Q("ECATCHER_REPORT_HOST","")+"/error_204",h);af[a.message]=!0;bf++}}}
;var df=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};t("yt.msgs_",df,void 0);function ef(a){Zd(df,arguments)}
;function ff(){}
function gf(a,b){return hf(a,1,b)}
;function jf(){}
n(jf,ff);function hf(a,b,c){isNaN(c)&&(c=void 0);var d=v("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):T(a,c||0)}
function kf(a){if(!isNaN(a)){var b=v("yt.scheduler.instance.cancelJob");b?b(a):he(a)}}
jf.prototype.start=function(){var a=v("yt.scheduler.instance.start");a&&a()};
jf.prototype.pause=function(){var a=v("yt.scheduler.instance.pause");a&&a()};
pa(jf);jf.getInstance();var lf=[],mf=!1;function nf(){if("1"!=Xa(be(),"args","privembed")){var a=function(){mf=!0;"google_ad_status"in window?P("DCLKSTAT",1):P("DCLKSTAT",2)};
ue("//static.doubleclick.net/instream/ad_status.js",a);lf.push(gf(function(){mf||"google_ad_status"in window||(Ae("//static.doubleclick.net/instream/ad_status.js",a),P("DCLKSTAT",3))},5E3))}}
function of(){return parseInt(Q("DCLKSTAT",0),10)}
;var pf=0;t("ytDomDomGetNextId",v("ytDomDomGetNextId")||function(){return++pf},void 0);var qf={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function rf(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;if(a=a||window.event){this.event=a;for(var b in a)b in qf||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?
b=a.fromElement:"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.b=a.pageX;this.f=a.pageY}}
function sf(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.b=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.f=a.clientY+b}}
rf.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
rf.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
rf.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var Za=v("ytEventsEventsListeners")||{};t("ytEventsEventsListeners",Za,void 0);var tf=v("ytEventsEventsCounter")||{count:0};t("ytEventsEventsCounter",tf,void 0);
function uf(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Ya(function(e){var f=ma(e[4])&&e[4]==!!d,g=ta(e[4])&&ta(d)&&bb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var vf=Pb(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function V(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=uf(a,b,c,d);if(e)return e;e=++tf.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(d){d=new rf(d);if(!Ob(d.relatedTarget,function(b){return b==a}))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new rf(b);
b.currentTarget=a;return c.call(a,b)};
g=ce(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),vf()||ma(d)?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);Za[e]=[a,b,c,g,d];return e}
function wf(a){a&&("string"==typeof a&&(a=[a]),C(a,function(a){if(a in Za){var b=Za[a],d=b[0],e=b[1],f=b[3];b=b[4];d.removeEventListener?vf()||ma(b)?d.removeEventListener(e,f,b):d.removeEventListener(e,f,!!b.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete Za[a]}}))}
;function xf(a){this.o=a;this.b=null;this.i=0;this.l=null;this.j=0;this.f=[];for(a=0;4>a;a++)this.f.push(0);this.g=0;this.C=V(window,"mousemove",x(this.F,this));a=x(this.w,this);sa(a)&&(a=ce(a));this.G=window.setInterval(a,25)}
A(xf,G);xf.prototype.F=function(a){q(a.b)||sf(a);var b=a.b;q(a.f)||sf(a);this.b=new Hb(b,a.f)};
xf.prototype.w=function(){if(this.b){var a=O();if(0!=this.i){var b=this.l,c=this.b,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.i);this.f[this.g]=.5<Math.abs((d-this.j)/this.j)?1:0;for(c=b=0;4>c;c++)b+=this.f[c]||0;3<=b&&this.o();this.j=d}this.i=a;this.l=this.b;this.g=(this.g+1)%4}};
xf.prototype.m=function(){window.clearInterval(this.G);wf(this.C)};var yf={};
function zf(a){var b=void 0===a?{}:a;a=void 0===b.Ea?!0:b.Ea;b=void 0===b.Oa?!1:b.Oa;if(null==v("_lact",window)){var c=parseInt(Q("LACT"),10);c=isFinite(c)?z()-Math.max(c,0):-1;t("_lact",c,window);t("_fact",c,window);-1==c&&Af();V(document,"keydown",Af);V(document,"keyup",Af);V(document,"mousedown",Af);V(document,"mouseup",Af);a&&(b?V(window,"touchmove",function(){Bf("touchmove",200)},{passive:!0}):(V(window,"resize",function(){Bf("resize",200)}),V(window,"scroll",function(){Bf("scroll",200)})));
new xf(function(){Bf("mouse",100)});
V(document,"touchstart",Af,{passive:!0});V(document,"touchend",Af,{passive:!0})}}
function Bf(a,b){yf[a]||(yf[a]=!0,gf(function(){Af();yf[a]=!1},b))}
function Af(){null==v("_lact",window)&&zf();var a=z();t("_lact",a,window);-1==v("_fact",window)&&t("_fact",a,window);(a=v("ytglobal.ytUtilActivityCallback_"))&&a()}
function Cf(){var a=v("_lact",window);return null==a?-1:Math.max(z()-a,0)}
;var Df=Math.pow(2,16)-1,Ef={log_event:"events",log_interaction:"interactions"},Ff=Object.create(null);Ff.log_event="GENERIC_EVENT_LOGGING";Ff.log_interaction="INTERACTION_LOGGING";var Gf={},Hf=0,W=v("ytLoggingTransportLogPayloadsQueue_")||{};t("ytLoggingTransportLogPayloadsQueue_",W,void 0);var If=v("ytLoggingTransportTokensToCttTargetIds_")||{};t("ytLoggingTransportTokensToCttTargetIds_",If,void 0);var Jf=v("ytLoggingTransportDispatchedStats_")||{};t("ytLoggingTransportDispatchedStats_",Jf,void 0);
t("ytytLoggingTransportCapturedTime_",v("ytLoggingTransportCapturedTime_")||{},void 0);function Kf(a,b){if(a.V){var c=a.V;var d={};c.videoId?d.videoId=c.videoId:c.playlistId&&(d.playlistId=c.playlistId);If[a.V.token]=d;c=Lf(a.endpoint,a.V.token)}else c=Lf(a.endpoint);c.push(a.payload);Gf[a.endpoint]=new b;c.length>=(Number(S("web_logging_max_batch")||0)||20)?Mf():Nf()}
function Mf(){he(Hf);if(!$a(W)){for(var a in W){var b=Gf[a];if(b){var c=void 0,d=a,e=b,f=Ef[d],g=Jf[d]||{};Jf[d]=g;b=Math.round(O());for(c in W[d]){var h=e.b;h={client:{hl:h.Ha,gl:h.Ga,clientName:h.Fa,clientVersion:h.innertubeContextClientVersion}};var l=window.devicePixelRatio;l&&1!=l&&(h.client.screenDensityFloat=String(l));Q("DELEGATED_SESSION_ID")&&(h.user={onBehalfOfUser:Q("DELEGATED_SESSION_ID")});h={context:h};h[f]=Lf(d,c);g.dispatchedEventCount=g.dispatchedEventCount||0;g.dispatchedEventCount+=
h[f].length;if(l=If[c])a:{var m=h,u=c;if(l.videoId)var N="VIDEO";else if(l.playlistId)N="PLAYLIST";else break a;m.credentialTransferTokenTargetId=l;m.context=m.context||{};m.context.user=m.context.user||{};m.context.user.credentialTransferTokens=[{token:u,scope:N}]}delete If[c];l=h;l.requestTimeMs=b;(N=Q("EVENT_ID",void 0))&&S("enable_gel_web_client_event_id")&&(m=(Q("BATCH_CLIENT_COUNTER",void 0)||0)+1,m>Df&&(m=1),P("BATCH_CLIENT_COUNTER",m),l.serializedClientEventId={serializedEventId:N,clientCounter:m});
Of(e,d,h,{retry:!0})}c=g;d=b;c.previousDispatchMs&&(b=d-c.previousDispatchMs,e=c.diffCount||0,c.averageTimeBetweenDispatchesMs=e?(c.averageTimeBetweenDispatchesMs*e+b)/(e+1):b,c.diffCount=e+1);c.previousDispatchMs=d;delete W[a]}}$a(W)||Nf()}}
function Nf(){he(Hf);Hf=T(Mf,Q("LOGGING_BATCH_TIMEOUT",1E4))}
function Lf(a,b){b=void 0===b?"":b;W[a]=W[a]||{};W[a][b]=W[a][b]||[];return W[a][b]}
;function Pf(a,b,c,d){var e=Qf,f={};f.eventTimeMs=Math.round(c||O());f[a]=b;f.context={lastActivityMs:String(c?-1:Cf())};Kf({endpoint:"log_event",payload:f,V:d},e)}
;function Rf(a,b,c){c.context&&c.context.capabilities&&(c=c.context.capabilities,c.snapshot||c.golden)&&(a="vix");return"/youtubei/"+a+"/"+b}
function Sf(a){var b={"X-Goog-Visitor-Id":Q("VISITOR_DATA","")},c;a?c="Bearer "+v("gapi.auth.getToken")().eb:c=cc([]);c&&(b.Authorization=c,b["X-Goog-AuthUser"]=Q("SESSION_INDEX",0));return b}
function Tf(a){a=Object.assign({},a);delete a.Authorization;var b=cc();if(b){var c=new uc;c.update(Q("INNERTUBE_API_KEY",void 0));c.update(b);b=c.digest();if(!rc)for(rc={},sc={},c=0;65>c;c++)rc[c]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(c),sc[c]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(c);c=sc;for(var d=[],e=0;e<b.length;e+=3){var f=b[e],g=e+1<b.length,h=g?b[e+1]:0,l=e+2<b.length,m=l?b[e+2]:0,u=f>>2;f=(f&3)<<4|h>>4;h=(h&15)<<2|m>>
6;m&=63;l||(m=64,g||(h=64));d.push(c[u],c[f],c[h],c[m])}a.hash=d.join("")}return a}
;function Uf(a,b,c,d){bc.set(""+a,b,c,"/",void 0===d?"youtube.com":d,!1)}
;function Vf(){var a=new zd;(a=a.isAvailable()?new Gd(a,"yt.innertube"):null)||(a=new Bd("yt.innertube"),a=a.isAvailable()?a:null);this.b=a?new ud(a):null;this.f=document.domain||window.location.hostname}
Vf.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.b)try{this.b.set(a,b,z()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(Lc(b))}catch(f){return}else e=escape(b);Uf(a,e,c,this.f)};
Vf.prototype.get=function(a,b){var c=void 0,d=!this.b;if(!d)try{c=this.b.get(a)}catch(e){d=!0}if(d&&(c=bc.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Vf.prototype.remove=function(a){this.b&&this.b.remove(a);var b=this.f;bc.remove(""+a,"/",void 0===b?"youtube.com":b)};var Wf=new Vf;function Xf(a,b,c,d){if(d)return null;d=Wf.get("nextId",!0)||1;var e=Wf.get("requests",!0)||{};e[d]={method:a,request:b,authState:Tf(c),requestTime:Math.round(O())};Wf.set("nextId",d+1,86400,!0);Wf.set("requests",e,86400,!0);return d}
function Yf(a){var b=Wf.get("requests",!0)||{};delete b[a];Wf.set("requests",b,86400,!0)}
function Zf(a){var b=Wf.get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(O())-d.requestTime)){var e=d.authState,f=Tf(Sf(!1));bb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(O())),Of(a,d.method,e,{}));delete b[c]}}Wf.set("requests",b,86400,!0)}}
;function Qf(a){var b=this;this.b=a||{innertubeApiKey:ae("INNERTUBE_API_KEY"),innertubeApiVersion:ae("INNERTUBE_API_VERSION"),Fa:Q("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:ae("INNERTUBE_CONTEXT_CLIENT_VERSION"),Ha:ae("INNERTUBE_CONTEXT_HL"),Ga:ae("INNERTUBE_CONTEXT_GL"),Ia:ae("INNERTUBE_HOST_OVERRIDE")||"",Ja:!!Q("INNERTUBE_USE_THIRD_PARTY_AUTH",!1)};hf(function(){Zf(b)},0,5E3)}
function Of(a,b,c,d){!Q("VISITOR_DATA")&&.01>Math.random()&&R(Error("Missing VISITOR_DATA when sending innertube request."),"WARNING");var e={headers:{"Content-Type":"application/json"},method:"POST",A:c,pa:"JSON",L:function(){d.L()},
oa:d.L,onSuccess:function(a,b){if(d.onSuccess)d.onSuccess(b)},
na:function(a){if(d.onSuccess)d.onSuccess(a)},
onError:function(a,b){if(d.onError)d.onError(b)},
jb:function(a){if(d.onError)d.onError(a)},
timeout:d.timeout,withCredentials:!0},f=a.b.Ja||!1,g=Sf(f);Object.assign(e.headers,g);var h="",l=a.b.Ia;l&&(h=l);e.headers.Authorization&&!h&&(e.headers["x-origin"]=window.location.origin);h=""+h+Rf(a.b.innertubeApiVersion,b,c)+"?alt=json&key="+a.b.innertubeApiKey;var m;if(d.retry&&S("retry_web_logging_batches")&&(m=Xf(b,c,g,f))){var u=e.onSuccess,N=e.na;e.onSuccess=function(a,b){Yf(m);u(a,b)};
c.na=function(a,b){Yf(m);N(a,b)}}try{S("use_fetch_for_op_xhr")?Ne(h,e):We(h,e)}catch(ba){if("InvalidAccessError"==ba)m&&(Yf(m),m=0),R(Error("An extension is blocking network request."),"WARNING");
else throw ba;}m&&hf(function(){Zf(a)},0,5E3)}
;var $f=z().toString();
function ag(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=z();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if($f)for(a=1,b=0;b<$f.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^$f.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".charAt(d[b]&63));
return a.join("")}
;var bg=ag();function cg(a){this.b=a}
function dg(a){var b={};void 0!==a.b.trackingParams?b.trackingParams=a.b.trackingParams:(b.veType=a.b.veType,null!=a.b.veCounter&&(b.veCounter=a.b.veCounter),null!=a.b.elementIndex&&(b.elementIndex=a.b.elementIndex));void 0!==a.b.dataElement&&(b.dataElement=dg(a.b.dataElement));void 0!==a.b.youtubeData&&(b.youtubeData=a.b.youtubeData);return b}
var eg=1;function fg(){var a=Q("ROOT_VE_TYPE",void 0);return a?new cg({veType:a}):null}
function gg(){var a=Q("client-screen-nonce")||Q("EVENT_ID");return a?a:null}
function hg(a,b){function c(){setTimeout(function(){a&&Pf("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:bg,clientScreenNonce:a})},0)}
P("client-screen-nonce",a);P("ROOT_VE_TYPE",b);"requestAnimationFrame"in window?window.requestAnimationFrame(c):c()}
;function ig(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=Q("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=Q("VALID_SESSION_TEMPDATA_DOMAINS",[]),f=Kd(J(window.location.href)[3]||null);f&&e.push(f);f=Kd(J(d)[3]||null);if(0<=za(e,f)||!f&&0==d.lastIndexOf("/",0))if(S("autoescape_tempdata_url")&&(e=document.createElement("a"),Eb(e,d),d=e.href),d){f=J(d);d=f[5];e=f[6];f=f[7];var g="";d&&(g+=d);e&&(g+="?"+e);f&&(g+="#"+f);d=g;e=d.indexOf("#");if(d=0>e?d:d.substr(0,e)){if(b.itct||b.ved)b.csn=b.csn||
gg();if(h){var h=parseInt(h,10);isFinite(h)&&0<h&&(d="ST-"+Qa(d).toString(36),b=b?Md(b):"",Uf(d,b,h||5))}else h="ST-"+Qa(d).toString(36),b=b?Md(b):"",Uf(h,b,5)}}}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var l=void 0===l?{}:l;var m=void 0===m?"":m;var u=void 0===u?window:u;c=u.location;a=Nd(a,l)+m;a=a instanceof E?a:zb(a);c.href=xb(a)}return!0}
;function jg(a,b,c){kg({attachChild:{csn:a,parentVisualElement:dg(b),visualElements:[dg(c)]}})}
function kg(a){var b=Qf;a.eventTimeMs=Math.round(O());a.lactMs=Cf();Kf({endpoint:"log_interaction",payload:a},b)}
;function lg(a){a=a||{};this.url=a.url||"";this.args=a.args||cb(mg);this.assets=a.assets||{};this.attrs=a.attrs||cb(ng);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
var mg={enablejsapi:1},ng={};lg.prototype.clone=function(){var a=new lg,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];a[b]="object"==qa(c)?cb(c):c}return a};function og(){G.call(this);this.b=[]}
n(og,G);og.prototype.m=function(){for(;this.b.length;){var a=this.b.pop();a.target.removeEventListener(a.name,a.gb)}G.prototype.m.call(this)};var pg=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function qg(a){a=a||"";if(window.spf){var b=a.match(pg);spf.style.load(a,b?b[1]:"",void 0)}else rg(a)}
function rg(a){var b=sg(a),c=document.getElementById(b),d=c&&fe(c,"loaded");d||c&&!d||(c=tg(a,b,function(){fe(c,"loaded")||(de(c),pe(b),T(y(qe,b),0))}))}
function tg(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Qb(a);Fb(d,a,"stylesheet");(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function sg(a){var b=document.createElement("A");a=Ab(a);Eb(b,a);b=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Qa(b)}
;var ug=v("ytLoggingLatencyUsageStats_")||{};t("ytLoggingLatencyUsageStats_",ug,void 0);var vg=0;function wg(a){ug[a]=ug[a]||{count:0};var b=ug[a];b.count++;b.time=O();vg||(vg=hf(xg,0,5E3));return 10<b.count?(11==b.count&&cf(Error("CSI data exceeded logging limit with key: "+a),0==a.indexOf("info")?"WARNING":"ERROR"),!0):!1}
function xg(){var a=O(),b;for(b in ug)6E4<a-ug[b].time&&delete ug[b];vg=0}
;function yg(a,b){this.version=a;this.args=b}
;function zg(a){this.topic=a}
zg.prototype.toString=function(){return this.topic};var Ag=v("ytPubsub2Pubsub2Instance")||new I;I.prototype.subscribe=I.prototype.subscribe;I.prototype.unsubscribeByKey=I.prototype.K;I.prototype.publish=I.prototype.I;I.prototype.clear=I.prototype.clear;t("ytPubsub2Pubsub2Instance",Ag,void 0);t("ytPubsub2Pubsub2SubscribedKeys",v("ytPubsub2Pubsub2SubscribedKeys")||{},void 0);t("ytPubsub2Pubsub2TopicToKeys",v("ytPubsub2Pubsub2TopicToKeys")||{},void 0);t("ytPubsub2Pubsub2IsAsync",v("ytPubsub2Pubsub2IsAsync")||{},void 0);
t("ytPubsub2Pubsub2SkipSubKey",null,void 0);function Bg(a,b){var c=v("ytPubsub2Pubsub2Instance");c&&c.publish.call(c,a.toString(),a,b)}
;var X=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};function Cg(){var a=Q("TIMING_TICK_EXPIRATION");a||(a={},P("TIMING_TICK_EXPIRATION",a));return a}
function Dg(){var a=Cg(),b;for(b in a)kf(a[b]);P("TIMING_TICK_EXPIRATION",{})}
;function Eg(a,b){yg.call(this,1,arguments)}
n(Eg,yg);function Fg(a,b){yg.call(this,1,arguments)}
n(Fg,yg);var Gg=new zg("aft-recorded"),Hg=new zg("timing-sent");var Ig={vc:!0},Y={},Jg=(Y.ad_allowed="adTypesAllowed",Y.ad_at="adType",Y.ad_cpn="adClientPlaybackNonce",Y.ad_docid="adVideoId",Y.yt_ad_an="adNetworks",Y.p="httpProtocol",Y.t="transportProtocol",Y.cpn="clientPlaybackNonce",Y.csn="clientScreenNonce",Y.docid="videoId",Y.is_nav="isNavigation",Y.yt_lt="loadType",Y.yt_ad="isMonetized",Y.nr="webInfo.navigationReason",Y.ncnp="webInfo.nonPreloadedNodeCount",Y.paused="playerInfo.isPausedOnLoad",Y.fmt="playerInfo.itag",Y.yt_pl="watchInfo.isPlaylist",Y.yt_ad_pr=
"prerollAllowed",Y.yt_red="isRedSubscriber",Y.st="serverTimeMs",Y.vph="viewportHeight",Y.vpw="viewportWidth",Y.yt_vis="isVisible",Y),Kg="ap c cver ei srt yt_fss yt_li plid vpil vpni vpst yt_eil vpni2 vpil2 icrc icrt pa GetBrowse_rid GetPlayer_rid GetSearch_rid GetWatchNext_rid cmt d_vpct d_vpnfi d_vpni pc pfa pfeh pftr prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis yt_ref yt_sts".split(" "),Lg="isNavigation isMonetized playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber isVisible watchInfo.isPlaylist".split(" "),
Og=!1;function Pg(){var a=Qg().info.yt_lt="hot_bg";Rg().info_yt_lt=a;if(Sg())if("yt_lt"in Jg){var b=Jg.yt_lt;0<=za(Lg,b)&&(a=!!a);if(Sg()){var c={};b=b.split(".");for(var d=c,e=0;e<b.length-1;e++)d[b[e]]=d[b[e]]||{},d=d[b[e]];d[b[b.length-1]]=a;a=Tg();b=Object.keys(c).join("");wg("info_"+b+"_"+a)||(c.clientActionNonce=a,Pf("latencyActionInfo",c,void 0,void 0))}}else 0<=za(Kg,"yt_lt")||R(Error("Unknown label yt_lt logged with GEL CSI."))}
function Ug(){var a=Vg();if(a.aft)return a.aft;for(var b=Q("TIMING_AFT_KEYS",["ol"]),c=b.length,d=0;d<c;d++){var e=a[b[d]];if(e)return e}return NaN}
var Wg=x(X.clearResourceTimings||X.webkitClearResourceTimings||X.mozClearResourceTimings||X.msClearResourceTimings||X.oClearResourceTimings||oa,X);function Tg(){var a=Qg().nonce;a||(a=ag(),Qg().nonce=a);return a}
function Vg(){return Qg().tick}
function Rg(){var a=Qg();"gel"in a||(a.gel={});return a.gel}
function Qg(){return v("ytcsi.data_")||Xg()}
function Xg(){var a={tick:{},info:{}};t("ytcsi.data_",a,void 0);return a}
function Yg(a,b){t("yt.timing."+(b||"")+"pingSent_",a,void 0)}
function Zg(){var a=Vg(),b=a.pbr,c=a.vc;a=a.pbs;return b&&c&&a&&b<c&&c<a&&1==Qg().info.yt_pvis}
function Sg(){return!!S("csi_on_gel")}
function $g(){Dg();if(!Sg()){var a=Vg(),b=Qg().info,c=a._start;for(f in a)if(0==f.lastIndexOf("_",0)&&w(a[f])){var d=f.slice(1);if(d in Ig){var e=Ba(a[f],function(a){return Math.round(a-c)});
b["all_"+d]=e.join()}delete a[f]}var f=!!b.ap;if(d=v("ytglobal.timingReportbuilder_")){if(a=d(a,b,void 0))ah(a,f),Xg(),Wg(),Yg(!1,void 0),Q("TIMING_ACTION")&&P("PREVIOUS_ACTION",Q("TIMING_ACTION")),P("TIMING_ACTION","")}else{var g=Q("CSI_SERVICE_NAME","youtube");d={v:2,s:g,action:Q("TIMING_ACTION",void 0)};e=Pg.srt;void 0!==a.srt&&delete b.srt;if(b.h5jse){var h=window.location.protocol+v("ytplayer.config.assets.js");(h=X.getEntriesByName?X.getEntriesByName(h)[0]:null)?b.h5jse=Math.round(b.h5jse-h.responseEnd):
delete b.h5jse}a.aft=Ug();Zg()&&"youtube"==g&&(Pg(),g=a.vc,h=a.pbs,delete a.aft,b.aft=Math.round(h-g));for(var l in b)"_"!=l.charAt(0)&&(d[l]=b[l]);a.ps=O();b={};l=[];for(var m in a)"_"!=m.charAt(0)&&(g=Math.round(a[m]-c),b[m]=g,l.push(m+"."+g));d.rt=l.join(",");(a=v("ytdebug.logTiming"))&&a(d,b);ah(d,f,void 0);Bg(Hg,new Fg(b.aft+(e||0),void 0))}}}
function ah(a,b,c){if(S("debug_csi_data")){var d=v("yt.timing.csiData");d||(d=[],t("yt.timing.csiData",d,void 0));d.push({page:location.href,time:new Date,args:a})}d="";for(var e in a)d+="&"+e+"="+a[e];a="/csi_204?";S("redirect_csi_204_to_qoe")&&(a="/api/stats/qoe?",d+="&redirect_csi_204_to_qoe=true");a+=d.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b){var f=void 0===f?"":f;try{window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,f)||Ze(a,void 0,void 0,void 0,
f)}catch(g){Ze(a,void 0,void 0,void 0,f)}}else Ze(a);Yg(!0,c)}
function bh(a){if("_"!=a[0]){var b=a;X.mark&&(0==b.lastIndexOf("mark_",0)||(b="mark_"+b),X.mark(b))}b=Vg();var c=O();b[a]&&(b["_"+a]=b["_"+a]||[b[a]],b["_"+a].push(c));b[a]=c;b=Cg();if(c=b[a])kf(c),b[a]=0;Rg()["tick_"+a]=void 0;O();Sg()?(b=Tg(),"_start"==a?wg("baseline_"+b)||Pf("latencyActionBaselined",{clientActionNonce:b},void 0,void 0):wg("tick_"+a+"_"+b)||Pf("latencyActionTicked",{tickName:a,clientActionNonce:b},void 0,void 0),a=!0):a=!1;if(a=!a)a=!v("yt.timing.pingSent_");if(a&&(b=ae("TIMING_ACTION"),
a=Vg(),v("ytglobal.timingready_")&&b&&a._start&&(b=Ug()))){S("tighter_critical_section")&&!Og&&(Bg(Gg,new Eg(Math.round(b-a._start),void 0)),Og=!0);b=!0;c=Q("TIMING_WAIT",[]);if(c.length)for(var d=0,e=c.length;d<e;++d)if(!(c[d]in a)){b=!1;break}b&&$g()}}
;function ch(a,b){G.call(this);this.l=this.S=a;this.G=b;this.o=!1;this.f={};this.P=this.F=null;this.w=new I;wc(this,y(xc,this.w));this.i={};this.N=this.R=this.g=this.X=this.b=null;this.M=!1;this.j=this.C=null;this.T={};this.ta=["onReady"];this.W=null;this.ja=NaN;this.O={};dh(this);this.U("WATCH_LATER_VIDEO_ADDED",this.La.bind(this));this.U("WATCH_LATER_VIDEO_REMOVED",this.Ma.bind(this));this.U("onAdAnnounce",this.xa.bind(this));this.ua=new og(this);wc(this,y(xc,this.ua))}
n(ch,G);k=ch.prototype;
k.ga=function(a){if(!this.h){a instanceof lg||(a=new lg(a));this.X=a;this.b=a.clone();this.g=this.b.attrs.id||this.g;"video-player"==this.g&&(this.g=this.G,this.b.attrs.id=this.G);this.l.id==this.g&&(this.g+="-player",this.b.attrs.id=this.g);this.b.args.enablejsapi="1";this.b.args.playerapiid=this.G;this.R||(this.R=eh(this,this.b.args.jsapicallback||"onYouTubePlayerReady"));this.b.args.jsapicallback=null;if(a=this.b.attrs.width)this.l.style.width=Vb(Number(a)||a);if(a=this.b.attrs.height)this.l.style.height=Vb(Number(a)||
a);fh(this);this.o&&gh(this)}};
k.Aa=function(){return this.X};
function gh(a){a.b.loaded||(a.b.loaded=!0,"0"!=a.b.args.autoplay?a.f.loadVideoByPlayerVars(a.b.args):a.f.cueVideoByPlayerVars(a.b.args))}
function hh(a){var b=!0,c=ih(a);c&&a.b&&(a=a.b,b=fe(c,"version")==a.assets.js);return b&&!!v("yt.player.Application.create")}
function fh(a){if(!a.h&&!a.M){var b=hh(a);if(b&&"html5"==(ih(a)?"html5":null))a.N="html5",a.o||jh(a);else if(kh(a),a.N="html5",b&&a.j)a.S.appendChild(a.j),jh(a);else{a.b.loaded=!0;var c=!1;a.C=function(){c=!0;var b=a.b.clone();v("yt.player.Application.create")(a.S,b);jh(a)};
a.M=!0;b?a.C():(ue(a.b.assets.js,a.C),qg(a.b.assets.css),lh(a)&&!c&&t("yt.player.Application.create",null,void 0))}}}
function ih(a){var b=Jb(a.g);!b&&a.l&&a.l.querySelector&&(b=a.l.querySelector("#"+a.g));return b}
function jh(a){if(!a.h){var b=ih(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);c?(a.M=!1,b.isNotServable&&b.isNotServable(a.b.args.video_id)||mh(a)):a.ja=T(function(){jh(a)},50)}}
function mh(a){dh(a);a.o=!0;var b=ih(a);b.addEventListener&&(a.F=nh(a,b,"addEventListener"));b.removeEventListener&&(a.P=nh(a,b,"removeEventListener"));var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=0;d<c.length;d++){var e=c[d];a.f[e]||(a.f[e]=nh(a,b,e))}for(var f in a.i)a.F(f,a.i[f]);gh(a);a.R&&a.R(a.f);a.w.I("onReady",a.f)}
function nh(a,b,c){var d=b[c];return function(){try{return a.W=null,d.apply(b,arguments)}catch(e){"sendAbandonmentPing"!=c&&(e.message+=" ("+c+")",a.W=e,R(e,"WARNING",void 0,void 0,void 0))}}}
function dh(a){a.o=!1;if(a.P)for(var b in a.i)a.P(b,a.i[b]);for(var c in a.O)he(parseInt(c,10));a.O={};a.F=null;a.P=null;for(var d in a.f)a.f[d]=null;a.f.addEventListener=a.U.bind(a);a.f.removeEventListener=a.Ta.bind(a);a.f.destroy=a.dispose.bind(a);a.f.getLastError=a.Ba.bind(a);a.f.getPlayerType=a.Ca.bind(a);a.f.getCurrentVideoConfig=a.Aa.bind(a);a.f.loadNewVideoConfig=a.ga.bind(a);a.f.isReady=a.Ka.bind(a)}
k.Ka=function(){return this.o};
k.U=function(a,b){var c=this,d=eh(this,b);if(d){if(!(0<=za(this.ta,a)||this.i[a])){var e=oh(this,a);this.F&&this.F(a,e)}this.w.subscribe(a,d);"onReady"==a&&this.o&&T(function(){d(c.f)},0)}};
k.Ta=function(a,b){if(!this.h){var c=eh(this,b);c&&od(this.w,a,c)}};
function eh(a,b){var c=b;if("string"==typeof b){if(a.T[b])return a.T[b];c=function(){var a=v(b);a&&a.apply(p,arguments)};
a.T[b]=c}return c?c:null}
function oh(a,b){var c="ytPlayer"+b+a.G;a.i[b]=c;p[c]=function(c){var d=a.b&&a.b.args&&a.b.args.fflags;if(d&&0>d.indexOf("use_html5_player_event_timeout=true"))a.w.I(b,c);else{var f=T(function(){if(!a.h){a.w.I(b,c);var d=a.O,e=String(f);e in d&&delete d[e]}},0);
ab(a.O,String(f))}};
return c}
k.xa=function(a){pe("a11y-announce",a)};
k.La=function(a){pe("WATCH_LATER_VIDEO_ADDED",a)};
k.Ma=function(a){pe("WATCH_LATER_VIDEO_REMOVED",a)};
k.Ca=function(){return this.N||(ih(this)?"html5":null)};
k.Ba=function(){return this.W};
function kh(a){bh("dcp");a.cancel();dh(a);a.N=null;a.b&&(a.b.loaded=!1);var b=ih(a);b&&(hh(a)||!lh(a)?a.j=b:(b&&b.destroy&&b.destroy(),a.j=null));for(a=a.S;b=a.firstChild;)a.removeChild(b)}
k.cancel=function(){this.C&&Ae(this.b.assets.js,this.C);he(this.ja);this.M=!1};
k.m=function(){kh(this);if(this.j&&this.b&&this.j.destroy)try{this.j.destroy()}catch(b){R(b)}this.T=null;for(var a in this.i)p[this.i[a]]=null;this.X=this.b=this.f=null;delete this.S;delete this.l;G.prototype.m.call(this)};
function lh(a){return a.b&&a.b.args&&a.b.args.fflags?-1!=a.b.args.fflags.indexOf("player_destroy_old_version=true"):!1}
;var ph={},qh="player_uid_"+(1E9*Math.random()>>>0);function rh(a){var b="player";b=r(b)?Jb(b):b;var c=qh+"_"+(b[ua]||(b[ua]=++va)),d=ph[c];if(d)return d.ga(a),d.f;d=new ch(b,c);ph[c]=d;pe("player-added",d.f);wc(d,y(sh,d));T(function(){d.ga(a)},0);
return d.f}
function sh(a){delete ph[a.G]}
;function th(){var a=uh(),b=vh();if(!a&&!b||!window.JSON)return null;try{var c=a.get("yt-player-two-stage-token")}catch(d){}if(!r(c))try{c=b.get("yt-player-two-stage-token")}catch(d){}if(!r(c))return null;try{c=JSON.parse(c,void 0)}catch(d){}return c}
var vh=Pb(function(){var a=new zd;return a.isAvailable()?new vd(a):null}),uh=Pb(function(){var a=new Ad;
return a.isAvailable()?new vd(a):null});function wh(a){return(0==a.search("cue")||0==a.search("load"))&&"loadModule"!=a}
function xh(a,b,c){r(a)&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});b=/\/([ve]|embed)\/([^#?]+)/.exec(a.mediaContentUrl);a.videoId=b&&b[2]?b[2]:null;return yh(a)}
function yh(a,b,c){if(ta(a)){b="endSeconds startSeconds mediaContentUrl suggestedQuality videoId two_stage_token".split(" ");c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}return{videoId:a,startSeconds:b,suggestedQuality:c}}
function zh(a,b,c,d){if(ta(a)&&!w(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};r(a)&&16==a.length?b.list="PL"+a:b.playlist=a;return b}
function Ah(a){var b=a.video_id||a.videoId;if(r(b)){var c=th()||{},d=th()||{};q(void 0)?d[b]=void 0:delete d[b];var e=z()+3E5,f=vh();if(f&&window.JSON){r(d)||(d=JSON.stringify(d,void 0));try{f.set("yt-player-two-stage-token",d,e)}catch(g){f.remove("yt-player-two-stage-token")}}(b=c[b])&&(a.two_stage_token=b)}}
;function Bh(a){G.call(this);this.b=a;this.b.subscribe("command",this.qa,this);this.f={};this.i=!1}
A(Bh,G);k=Bh.prototype;k.start=function(){this.i||this.h||(this.i=!0,Ch(this.b,"RECEIVING"))};
k.qa=function(a,b,c){if(this.i&&!this.h){var d=b||{};switch(a){case "addEventListener":r(d.event)&&(a=d.event,a in this.f||(c=x(this.Va,this,a),this.f[a]=c,this.addEventListener(a,c)));break;case "removeEventListener":r(d.event)&&Dh(this,d.event);break;default:this.g.isReady()&&this.g[a]&&(b=Eh(a,b||{}),c=this.g.handleExternalCall(a,b,c||null),(c=Fh(a,c))&&this.i&&!this.h&&Ch(this.b,a,c))}}};
k.Va=function(a,b){this.i&&!this.h&&Ch(this.b,a,this.aa(a,b))};
k.aa=function(a,b){if(null!=b)return{value:b}};
function Dh(a,b){b in a.f&&(a.removeEventListener(b,a.f[b]),delete a.f[b])}
k.m=function(){var a=this.b;a.h||od(a.b,"command",this.qa,this);this.b=null;for(var b in this.f)Dh(this,b);Bh.u.m.call(this)};function Gh(a,b){Bh.call(this,b);this.g=a;this.start()}
A(Gh,Bh);Gh.prototype.addEventListener=function(a,b){this.g.addEventListener(a,b)};
Gh.prototype.removeEventListener=function(a,b){this.g.removeEventListener(a,b)};
function Eh(a,b){switch(a){case "loadVideoById":return b=yh(b),Ah(b),[b];case "cueVideoById":return b=yh(b),Ah(b),[b];case "loadVideoByPlayerVars":return Ah(b),[b];case "cueVideoByPlayerVars":return Ah(b),[b];case "loadPlaylist":return b=zh(b),Ah(b),[b];case "cuePlaylist":return b=zh(b),Ah(b),[b];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];
case "setLoop":return[b.loopPlaylists];case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey]}return[]}
function Fh(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
Gh.prototype.aa=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return Gh.u.aa.call(this,a,b)};
Gh.prototype.m=function(){Gh.u.m.call(this);delete this.g};function Hh(a,b,c,d){G.call(this);this.f=b||null;this.o="*";this.g=c||null;this.sessionId=null;this.channel=d||null;this.C=!!a;this.l=x(this.w,this);window.addEventListener("message",this.l)}
n(Hh,G);Hh.prototype.w=function(a){if(!("*"!=this.g&&a.origin!=this.g||this.f&&a.source!=this.f)&&r(a.data)){try{var b=JSON.parse(a.data)}catch(c){return}if(!(null==b||this.C&&(this.sessionId&&this.sessionId!=b.id||this.channel&&this.channel!=b.channel))&&b)switch(b.event){case "listening":"null"!=a.origin&&(this.g=this.o=a.origin);this.f=a.source;this.sessionId=b.id;this.b&&(this.b(),this.b=null);break;case "command":this.i&&(!this.j||0<=za(this.j,b.func))&&this.i(b.func,b.args,a.origin)}}};
Hh.prototype.sendMessage=function(a,b){var c=b||this.f;if(c){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var d=Lc(a);c.postMessage(d,this.o)}catch(e){R(e,"WARNING")}}};
Hh.prototype.m=function(){window.removeEventListener("message",this.l);G.prototype.m.call(this)};function Ih(a,b,c){Hh.call(this,a,b,c||Q("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname,"widget");this.j=this.b=this.i=null}
n(Ih,Hh);function Jh(){var a=this.f=new Ih(!!Q("WIDGET_ID_ENFORCE")),b=x(this.Pa,this);a.i=b;a.j=null;this.f.channel="widget";if(a=Q("WIDGET_ID"))this.f.sessionId=a;this.g=[];this.j=!1;this.i={}}
k=Jh.prototype;k.Pa=function(a,b,c){"addEventListener"==a&&b?(a=b[0],this.i[a]||"onReady"==a||(this.addEventListener(a,Kh(this,a)),this.i[a]=!0)):this.sa(a,b,c)};
k.sa=function(){};
function Kh(a,b){return x(function(a){this.sendMessage(b,a)},a)}
k.addEventListener=function(){};
k.za=function(){this.j=!0;this.sendMessage("initialDelivery",this.ba());this.sendMessage("onReady");C(this.g,this.ra,this);this.g=[]};
k.ba=function(){return null};
function Lh(a,b){a.sendMessage("infoDelivery",b)}
k.ra=function(a){this.j?this.f.sendMessage(a):this.g.push(a)};
k.sendMessage=function(a,b){this.ra({event:a,info:void 0==b?null:b})};
k.dispose=function(){this.f=null};function Mh(a){Jh.call(this);this.b=a;this.h=[];this.addEventListener("onReady",x(this.Na,this));this.addEventListener("onVideoProgress",x(this.Za,this));this.addEventListener("onVolumeChange",x(this.ab,this));this.addEventListener("onApiChange",x(this.Ua,this));this.addEventListener("onPlaybackQualityChange",x(this.Wa,this));this.addEventListener("onPlaybackRateChange",x(this.Xa,this));this.addEventListener("onStateChange",x(this.Ya,this));this.addEventListener("onWebglSettingsChanged",x(this.bb,
this))}
A(Mh,Jh);k=Mh.prototype;k.sa=function(a,b,c){if(this.b[a]){b=b||[];if(0<b.length&&wh(a)){var d=b;if(ta(d[0])&&!w(d[0]))d=d[0];else{var e={};switch(a){case "loadVideoById":case "cueVideoById":e=yh.apply(window,d);break;case "loadVideoByUrl":case "cueVideoByUrl":e=xh.apply(window,d);break;case "loadPlaylist":case "cuePlaylist":e=zh.apply(window,d)}d=e}Ah(d);b.length=1;b[0]=d}this.b.handleExternalCall(a,b,c);wh(a)&&Lh(this,this.ba())}};
k.Na=function(){var a=x(this.za,this);this.f.b=a};
k.addEventListener=function(a,b){this.h.push({eventType:a,listener:b});this.b.addEventListener(a,b)};
k.ba=function(){if(!this.b)return null;var a=this.b.getApiInterface();Da(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c],f=e;if(0==f.search("get")||0==f.search("is")){f=e;var g=0;0==f.search("get")?g=3:0==f.search("is")&&(g=2);f=f.charAt(g).toLowerCase()+f.substr(g+1);try{var h=this.b[e]();b[f]=h}catch(l){}}}b.videoData=this.b.getVideoData();b.currentTimeLastUpdated_=z()/1E3;return b};
k.Ya=function(a){a={playerState:a,currentTime:this.b.getCurrentTime(),duration:this.b.getDuration(),videoData:this.b.getVideoData(),videoStartBytes:0,videoBytesTotal:this.b.getVideoBytesTotal(),videoLoadedFraction:this.b.getVideoLoadedFraction(),playbackQuality:this.b.getPlaybackQuality(),availableQualityLevels:this.b.getAvailableQualityLevels(),videoUrl:this.b.getVideoUrl(),playlist:this.b.getPlaylist(),playlistIndex:this.b.getPlaylistIndex(),currentTimeLastUpdated_:z()/1E3,playbackRate:this.b.getPlaybackRate(),
mediaReferenceTime:this.b.getMediaReferenceTime()};this.b.getProgressState&&(a.progressState=this.b.getProgressState());this.b.getStoryboardFormat&&(a.storyboardFormat=this.b.getStoryboardFormat());Lh(this,a)};
k.Wa=function(a){Lh(this,{playbackQuality:a})};
k.Xa=function(a){Lh(this,{playbackRate:a})};
k.Ua=function(){for(var a=this.b.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.b.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var l=f[g],m=this.b.getOption(e,l);b[e][l]=m}}this.sendMessage("apiInfoDelivery",b)};
k.ab=function(){Lh(this,{muted:this.b.isMuted(),volume:this.b.getVolume()})};
k.Za=function(a){a={currentTime:a,videoBytesLoaded:this.b.getVideoBytesLoaded(),videoLoadedFraction:this.b.getVideoLoadedFraction(),currentTimeLastUpdated_:z()/1E3,playbackRate:this.b.getPlaybackRate(),mediaReferenceTime:this.b.getMediaReferenceTime()};this.b.getProgressState&&(a.progressState=this.b.getProgressState());Lh(this,a)};
k.bb=function(){if(this.b.getSphericalProperties){var a={sphericalProperties:this.b.getSphericalProperties()};Lh(this,a)}};
k.dispose=function(){Mh.u.dispose.call(this);for(var a=0;a<this.h.length;a++){var b=this.h[a];this.b.removeEventListener(b.eventType,b.listener)}this.h=[]};function Nh(){G.call(this);this.b=new I;wc(this,y(xc,this.b))}
A(Nh,G);Nh.prototype.subscribe=function(a,b,c){return this.h?0:this.b.subscribe(a,b,c)};
Nh.prototype.j=function(a,b){this.h||this.b.I.apply(this.b,arguments)};function Oh(a,b,c){Nh.call(this);this.f=a;this.g=b;this.i=c}
A(Oh,Nh);function Ch(a,b,c){if(!a.h){var d=a.f;d.h||a.g!=d.b||(a={id:a.i,command:b},c&&(a.data=c),d.b.postMessage(Lc(a),d.g))}}
Oh.prototype.m=function(){this.g=this.f=null;Oh.u.m.call(this)};function Ph(a,b,c){G.call(this);this.b=a;this.g=c;this.i=V(window,"message",x(this.j,this));this.f=new Oh(this,a,b);wc(this,y(xc,this.f))}
A(Ph,G);Ph.prototype.j=function(a){var b;if(b=!this.h)if(b=a.origin==this.g)a:{b=this.b;do{b:{var c=a.source;do{if(c==b){c=!0;break b}if(c==c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(b=a.data,r(b))){try{b=JSON.parse(b)}catch(d){return}b.command&&(c=this.f,c.h||c.j("command",b.command,b.data,a.origin))}};
Ph.prototype.m=function(){wf(this.i);this.b=null;Ph.u.m.call(this)};function Qh(){var a=cb(Rh),b;return ed(new H(function(c,d){a.onSuccess=function(a){Ie(a)?c(a):d(new Sh("Request failed, status="+a.status,"net.badstatus",a))};
a.onError=function(a){d(new Sh("Unknown request error","net.unknown",a))};
a.L=function(a){d(new Sh("Request timed out","net.timeout",a))};
b=Qe("//googleads.g.doubleclick.net/pagead/id",a)}),function(a){a instanceof fd&&b.abort();
return Xc(a)})}
function Sh(a,b){B.call(this,a+", errorCode="+b);this.errorCode=b;this.name="PromiseAjaxError"}
n(Sh,B);function Th(a){this.h=void 0===a?null:a;this.f=0;this.b=null}
Th.prototype.then=function(a,b,c){return this.h?this.h.then(a,b,c):1===this.f&&a?(a=a.call(c,this.b),Sc(a)?a:Uh(a)):2===this.f&&b?(a=b.call(c,this.b),Sc(a)?a:Vh(a)):this};
Th.prototype.getValue=function(){return this.b};
Rc(Th);function Vh(a){var b=new Th;a=void 0===a?null:a;b.f=2;b.b=void 0===a?null:a;return b}
function Uh(a){var b=new Th;a=void 0===a?null:a;b.f=1;b.b=void 0===a?null:a;return b}
;function Wh(a){B.call(this,a.message||a.description||a.name);this.isMissing=a instanceof Xh;this.isTimeout=a instanceof Sh&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof fd}
n(Wh,B);Wh.prototype.name="BiscottiError";function Xh(){B.call(this,"Biscotti ID is missing from server")}
n(Xh,B);Xh.prototype.name="BiscottiMissingError";var Rh={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Yh=null;function Zh(){if("1"===Xa(be(),"args","privembed"))return Xc(Error("Biscotti ID is not available in private embed mode"));Yh||(Yh=ed(Qh().then($h),function(a){return ai(2,a)}));
return Yh}
function $h(a){a=a.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new Xh;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new Xh;a=a.id;bi(a);Yh=Uh(a);ci(18E5,2);return a}
function ai(a,b){var c=new Wh(b);bi("");Yh=Vh(c);0<a&&ci(12E4,a-1);throw c;}
function ci(a,b){T(function(){ed(Qh().then($h,function(a){return ai(b,a)}),oa)},a)}
function bi(a){t("yt.ads.biscotti.lastId_",a,void 0)}
function di(){try{var a=v("yt.ads.biscotti.getId_");return a?a():Zh()}catch(b){return Xc(b)}}
;function ei(a){B.apply(this,arguments)}
n(ei,B);ei.prototype.name="YuzuError";function fi(){var a=new ei("ID is missing"),b=new ei("Timeout"),c=null,d=!1;Yd(function(){c=Wd();d=!0});
if(d)return c?Uh(c):Vh(a);var e=new H(function(b,c){Yd(function(){var d=Wd();d?b(d):c(a)})}),f=Id().then(function(){return Xc(b)});
return cd($c([e,f]),function(){return f.cancel()})}
;function gi(a){if("1"!==Xa(be(),"args","privembed")){a&&(v("yt.ads.biscotti.getId_")||ya("yt.ads.biscotti.getId_",Zh));try{var b=di();if(S("enable_yuzu")){v("yt.ads.yuzu.getId_")||t("yt.ads.yuzu.getId_",fi,void 0);try{var c=v("yt.ads.yuzu.getId_")()}catch(d){c=Xc(d)}}else c=Xc(new ei("unimplemented"));ad([b,c]).then(function(a){var b=a[0];a=a[1];if(b.Y||a.Y){b=b.value;a=a.value;var c={};c.dt=Wb;c.flash="0";a:{try{var d=window.top.location.href}catch(Ta){d=2;break a}d=null!=d?d==window.document.location.href?
0:1:2}d=(c.frm=d,c);d.u_tz=-(new Date).getTimezoneOffset();var h=void 0===h?F:h;try{var l=h.history.length}catch(Ta){l=0}d.u_his=l;d.u_java=!!F.navigator&&"unknown"!==typeof F.navigator.javaEnabled&&!!F.navigator.javaEnabled&&F.navigator.javaEnabled();F.screen&&(d.u_h=F.screen.height,d.u_w=F.screen.width,d.u_ah=F.screen.availHeight,d.u_aw=F.screen.availWidth,d.u_cd=F.screen.colorDepth);F.navigator&&F.navigator.plugins&&(d.u_nplug=F.navigator.plugins.length);F.navigator&&F.navigator.mimeTypes&&(d.u_nmime=
F.navigator.mimeTypes.length);d.ca_type="image";if(S("enable_server_side_search_pyv")||S("enable_server_side_mweb_search_pyv")){l=window;try{var m=l.screenX;var u=l.screenY}catch(Ta){}try{var N=l.outerWidth;var ba=l.outerHeight}catch(Ta){}try{var Mg=l.innerWidth;var Ng=l.innerHeight}catch(Ta){}m=[l.screenLeft,l.screenTop,m,u,l.screen?l.screen.availWidth:void 0,l.screen?l.screen.availTop:void 0,N,ba,Mg,Ng];u=window.top;try{var U=(u||window).document,Sa="CSS1Compat"==U.compatMode?U.documentElement:
U.body;var Ga=(new Ib(Sa.clientWidth,Sa.clientHeight)).round()}catch(Ta){Ga=new Ib(-12245933,-12245933)}U={};Sa=0;p.SVGElement&&p.document.createElementNS&&(Sa|=1);U.bc=Sa;U.bih=Ga.height;U.biw=Ga.width;U.brdim=m.join();Ga=(U.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[Ub.visibilityState||Ub.webkitVisibilityState||Ub.mozVisibilityState||""]||0,U.wgl=!!F.WebGLRenderingContext,U);for(var Od in Ga)d[Od]=Ga[Od]}void 0!==b&&(d.bid=b);void 0!==a&&(d.anid=a);d.bsq=hi++;We("//www.youtube.com/ad_data_204",
{Da:!1,A:d,withCredentials:!0})}});
T(gi,18E5)}catch(d){R(d)}}}
var hi=0;var Z=v("ytglobal.prefsUserPrefsPrefs_")||{};t("ytglobal.prefsUserPrefsPrefs_",Z,void 0);function ii(){this.b=Q("ALT_PREF_COOKIE_NAME","PREF");var a=bc.get(""+this.b,void 0);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Z[d]=c.toString())}}}
k=ii.prototype;k.get=function(a,b){ji(a);ki(a);var c=void 0!==Z[a]?Z[a].toString():null;return null!=c?c:b?b:""};
k.set=function(a,b){ji(a);ki(a);if(null==b)throw Error("ExpectedNotNull");Z[a]=b.toString()};
k.remove=function(a){ji(a);ki(a);delete Z[a]};
k.save=function(){var a=this.b,b=[],c;for(c in Z)b.push(c+"="+encodeURIComponent(String(Z[c])));Uf(a,b.join("&"),63072E3)};
k.clear=function(){for(var a in Z)delete Z[a]};
function ki(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function ji(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function li(a){a=void 0!==Z[a]?Z[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
pa(ii);var mi=null,ni=null,oi=null,pi={};function qi(a){Pf(a.payload_name,a.payload,void 0,void 0)}
function ri(a){var b=a.id;a=a.ve_type;var c=eg++;a=new cg({veType:a,veCounter:c,elementIndex:void 0,dataElement:void 0,youtubeData:void 0});pi[b]=a;b=gg();c=fg();b&&c&&jg(b,c,a)}
function si(a){var b=a.csn;a=a.root_ve_type;if(b&&a&&(hg(b,a),a=fg()))for(var c in pi){var d=pi[c];d&&jg(b,a,d)}}
function ti(a){pi[a.id]=new cg({trackingParams:a.tracking_params})}
function ui(a){var b=gg();a=pi[a.id];b&&a&&(S("interaction_click_on_gel_web")?Pf("visualElementGestured",{csn:b,ve:dg(a),gestureType:"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK"}):kg({click:{csn:b,visualElement:dg(a)}}))}
function vi(a){a=a.ids;var b=gg();if(b)for(var c=0;c<a.length;c++){var d=pi[a[c]];d&&Pf("visualElementShown",{csn:b,ve:dg(d),eventType:1})}}
function wi(){var a=mi;a&&a.startInteractionLogging&&a.startInteractionLogging()}
;t("yt.setConfig",P,void 0);t("yt.config.set",P,void 0);t("yt.setMsg",ef,void 0);t("yt.msgs.set",ef,void 0);t("yt.logging.errors.log",cf,void 0);
t("writeEmbed",function(){var a=Q("PLAYER_CONFIG",void 0);gi(!0);"gvn"==a.args.ps&&(document.body.style.backgroundColor="transparent");var b=document.referrer,c=Q("POST_MESSAGE_ORIGIN");window!=window.top&&b&&b!=document.URL&&(a.args.loaderUrl=b);Q("LIGHTWEIGHT_AUTOPLAY")&&(a.args.autoplay="1");a.args.autoplay&&Ah(a.args);mi=a=rh(a);a.addEventListener("onScreenChanged",si);a.addEventListener("onLogClientVeCreated",ri);a.addEventListener("onLogServerVeCreated",ti);a.addEventListener("onLogToGel",qi);
a.addEventListener("onLogVeClicked",ui);a.addEventListener("onLogVesShown",vi);a.addEventListener("onReady",wi);b=Q("POST_MESSAGE_ID","player");Q("ENABLE_JS_API")?oi=new Mh(a):Q("ENABLE_POST_API")&&r(b)&&r(c)&&(ni=new Ph(window.parent,b,c),oi=new Gh(a,ni.f));Q("BG_P")&&(Q("BG_I")||Q("BG_IU"))&&Ce();nf()},void 0);
t("yt.www.watch.ads.restrictioncookie.spr",function(a){Ze(a+"mac_204?action_fcts=1");return!0},void 0);
var xi=ce(function(){bh("ol");var a=ii.getInstance(),b=!!((li("f"+(Math.floor(119/31)+1))||0)&67108864),c=1<window.devicePixelRatio;if(document.body&&Ac(document.body,"exp-invert-logo"))if(c&&!Ac(document.body,"inverted-hdpi")){var d=document.body;d.classList?d.classList.add("inverted-hdpi"):Ac(d,"inverted-hdpi")||(d.className+=0<d.className.length?" inverted-hdpi":"inverted-hdpi")}else!c&&Ac(document.body,"inverted-hdpi")&&Bc();b!=c&&(b="f"+(Math.floor(119/31)+1),d=li(b)||0,d=c?d|67108864:d&-67108865,
0==d?delete Z[b]:Z[b]=d.toString(16).toString(),a.save())}),yi=ce(function(){var a=mi;
a&&a.sendAbandonmentPing&&a.sendAbandonmentPing();Q("PL_ATT")&&(Be=null);a=0;for(var b=lf.length;a<b;a++)kf(lf[a]);lf.length=0;ze("//static.doubleclick.net/instream/ad_status.js");mf=!1;P("DCLKSTAT",0);yc(oi,ni);if(a=mi)a.removeEventListener("onScreenChanged",si),a.removeEventListener("onLogClientVeCreated",ri),a.removeEventListener("onLogServerVeCreated",ti),a.removeEventListener("onLogToGel",qi),a.removeEventListener("onLogVeClicked",ui),a.removeEventListener("onLogVesShown",vi),a.removeEventListener("onReady",
wi),a.destroy();pi={}});
window.addEventListener?(window.addEventListener("load",xi),window.addEventListener("unload",yi)):window.attachEvent&&(window.attachEvent("onload",xi),window.attachEvent("onunload",yi));ya("yt.abuse.botguardInitialized",v("yt.abuse.botguardInitialized")||Ee);ya("yt.abuse.invokeBotguard",v("yt.abuse.invokeBotguard")||Fe);ya("yt.abuse.dclkstatus.checkDclkStatus",v("yt.abuse.dclkstatus.checkDclkStatus")||of);ya("yt.player.exports.navigate",v("yt.player.exports.navigate")||ig);
ya("yt.util.activity.init",v("yt.util.activity.init")||zf);ya("yt.util.activity.getTimeSinceActive",v("yt.util.activity.getTimeSinceActive")||Cf);ya("yt.util.activity.setTimestamp",v("yt.util.activity.setTimestamp")||Af);}).call(this);
