(function(){var k,ba="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ca;
if("function"==typeof Object.setPrototypeOf)ca=Object.setPrototypeOf;else{var da;a:{var ea={wa:!0},fa={};try{fa.__proto__=ea;da=fa.wa;break a}catch(a){}da=!1}ca=da?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ha=ca;
function n(a,b){a.prototype=ba(b.prototype);a.prototype.constructor=a;if(ha)ha(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.u=b.prototype}
var ia="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},ja="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;
function ka(a){if(a){for(var b=ja,c=["Object","assign"],d=0;d<c.length-1;d++){var e=c[d];e in b||(b[e]={});b=b[e]}c=c[c.length-1];d=b[c];a=a(d);a!=d&&null!=a&&ia(b,c,{configurable:!0,writable:!0,value:a})}}
var la="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)Object.prototype.hasOwnProperty.call(d,e)&&(a[e]=d[e])}return a};
ka(function(a){return a||la});
(function(){function a(){function a(){}
Reflect.construct(a,[],function(){});
return new a instanceof a}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(a,d,e){a=b(a,d);e&&Reflect.setPrototypeOf(a,e.prototype);return a}}return function(a,b,e){void 0===e&&(e=a);
e=ba(e.prototype||Object.prototype);return Function.prototype.apply.call(a,e,b)||e}})();
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
function x(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
var ta="closure_uid_"+(1E9*Math.random()>>>0),ua=0;function va(a,b,c){return a.call.apply(a.bind,arguments)}
function wa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function y(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?y=va:y=wa;return y.apply(null,arguments)}
function z(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}
var A=Date.now||function(){return+new Date};
function xa(a,b){t(a,b,void 0)}
function B(a,b){function c(){}
c.prototype=b.prototype;a.u=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.fb=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}}
;function C(a){if(Error.captureStackTrace)Error.captureStackTrace(this,C);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
B(C,Error);C.prototype.name="CustomError";var ya=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(r(a))return r(b)&&1==b.length?a.indexOf(b,0):-1;
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},D=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=r(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},za=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f=r(a)?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},Aa=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e=r(a)?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d};
function Ba(a,b){a:{var c=a.length;for(var d=r(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:r(a)?a.charAt(c):a[c]}
function Ca(a,b){var c=ya(a,b);0<=c&&Array.prototype.splice.call(a,c,1)}
function Da(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Ea(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(ra(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;var Ga=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function Ha(a){if(!Ia.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(Ja,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(Ka,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(La,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(Ma,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(Na,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(Oa,"&#0;"));return a}
var Ja=/&/g,Ka=/</g,La=/>/g,Ma=/"/g,Na=/'/g,Oa=/\x00/g,Ia=/[\x00&<>"']/;function Pa(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var Qa;a:{var Ta=p.navigator;if(Ta){var Ua=Ta.userAgent;if(Ua){Qa=Ua;break a}}Qa=""}function E(a){return-1!=Qa.indexOf(a)}
;function Va(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function Wa(a,b){var c=ra(b),d=c?b:arguments;for(c=c?0:1;c<d.length;c++){if(null==a)return;a=a[d[c]]}return a}
function Xa(a){var b=Ya,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function Za(a){for(var b in a)return!1;return!0}
function $a(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function ab(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(c in b)if(!(c in a))return!1;return!0}
function bb(a){var b={},c;for(c in a)b[c]=a[c];return b}
var cb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function db(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<cb.length;f++)c=cb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var eb=E("Opera"),fb=E("Trident")||E("MSIE"),gb=E("Edge"),hb=E("Gecko")&&!(-1!=Qa.toLowerCase().indexOf("webkit")&&!E("Edge"))&&!(E("Trident")||E("MSIE"))&&!E("Edge"),ib=-1!=Qa.toLowerCase().indexOf("webkit")&&!E("Edge");function jb(){var a=p.document;return a?a.documentMode:void 0}
var kb;a:{var lb="",mb=function(){var a=Qa;if(hb)return/rv:([^\);]+)(\)|;)/.exec(a);if(gb)return/Edge\/([\d\.]+)/.exec(a);if(fb)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(ib)return/WebKit\/(\S+)/.exec(a);if(eb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
mb&&(lb=mb?mb[1]:"");if(fb){var nb=jb();if(null!=nb&&nb>parseFloat(lb)){kb=String(nb);break a}}kb=lb}var ob=kb,pb;var qb=p.document;pb=qb&&fb?jb()||("CSS1Compat"==qb.compatMode?parseInt(ob,10):5):void 0;var rb=!fb||9<=Number(pb);function sb(){this.b="";this.f=tb}
sb.prototype.J=!0;sb.prototype.H=function(){return this.b};
sb.prototype.ea=!0;sb.prototype.Z=function(){return 1};
function ub(a){return a instanceof sb&&a.constructor===sb&&a.f===tb?a.b:"type_error:TrustedResourceUrl"}
var tb={};function F(){this.b="";this.f=vb}
F.prototype.J=!0;F.prototype.H=function(){return this.b};
F.prototype.ea=!0;F.prototype.Z=function(){return 1};
function wb(a){return a instanceof F&&a.constructor===F&&a.f===vb?a.b:"type_error:SafeUrl"}
var xb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function yb(a){if(a instanceof F)return a;a=a.J?a.H():String(a);xb.test(a)||(a="about:invalid#zClosurez");return zb(a)}
var vb={};function zb(a){var b=new F;b.b=a;return b}
zb("about:blank");function Ab(){this.da="";this.va=Bb;this.b=null}
Ab.prototype.ea=!0;Ab.prototype.Z=function(){return this.b};
Ab.prototype.J=!0;Ab.prototype.H=function(){return this.da};
var Bb={};function Cb(a,b){var c=new Ab;c.da=a;c.b=b;return c}
Cb("<!DOCTYPE html>",0);Cb("",0);Cb("<br>",0);function Db(a,b){var c=b instanceof F?b:yb(b);a.href=wb(c)}
function Eb(a,b,c){a.rel=c;a.href=-1!=c.toLowerCase().indexOf("stylesheet")?ub(b):b instanceof sb?ub(b):b instanceof F?wb(b):yb(b).H()}
function Fb(a,b){a.src=ub(b)}
;function Gb(a,b){this.x=q(a)?a:0;this.y=q(b)?b:0}
k=Gb.prototype;k.clone=function(){return new Gb(this.x,this.y)};
k.equals=function(a){return a instanceof Gb&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
k.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
k.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
k.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function Hb(a,b){this.width=a;this.height=b}
k=Hb.prototype;k.clone=function(){return new Hb(this.width,this.height)};
k.aspectRatio=function(){return this.width/this.height};
k.isEmpty=function(){return!(this.width*this.height)};
k.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
k.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
k.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Ib(a){var b=document;return r(a)?b.getElementById(a):a}
function Jb(a,b){Va(b,function(b,d){b&&b.J&&(b=b.H());"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:Kb.hasOwnProperty(d)?a.setAttribute(Kb[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})}
var Kb={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function Lb(a,b,c){var d=arguments,e=document,f=String(d[0]),g=d[1];if(!rb&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',Ha(g.name),'"');if(g.type){f.push(' type="',Ha(g.type),'"');var h={};db(h,g);delete h.type;g=h}f.push(">");f=f.join("")}f=e.createElement(f);g&&(r(g)?f.className=g:w(g)?f.className=g.join(" "):Jb(f,g));2<d.length&&Mb(e,f,d);return f}
function Mb(a,b,c){function d(c){c&&b.appendChild(r(c)?a.createTextNode(c):c)}
for(var e=2;e<c.length;e++){var f=c[e];if(!ra(f)||x(f)&&0<f.nodeType)d(f);else{a:{if(f&&"number"==typeof f.length){if(x(f)){var g="function"==typeof f.item||"string"==typeof f.item;break a}if(sa(f)){g="function"==typeof f.item;break a}}g=!1}D(g?Da(f):f,d)}}}
function Nb(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Ob(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;function Pb(a){Qb();var b=new sb;b.b=a;return b}
var Qb=oa;var Rb=/^[\w+/_-]+[=]{0,2}$/;function Sb(){var a=p.document.querySelector("script[nonce]");if(a&&(a=a.nonce||a.getAttribute("nonce"))&&Rb.test(a))return a}
;var Tb=document,G=window;function Ub(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var Vb=(new Date).getTime();function Wb(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"app"!==a)throw Error("Invalid URI scheme in origin: "+a);c="";var d=b.indexOf(":");if(-1!=d){var e=
b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function Xb(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;u=m=0}
function b(a){for(var b=g,c=0;64>c;c+=4)b[c/4]=a[c]<<24|a[c+1]<<16|a[c+2]<<8|a[c+3];for(c=16;80>c;c++)a=b[c-3]^b[c-8]^b[c-14]^b[c-16],b[c]=(a<<1|a>>>31)&4294967295;a=e[0];var d=e[1],f=e[2],h=e[3],l=e[4];for(c=0;80>c;c++){if(40>c)if(20>c){var m=h^d&(f^h);var u=1518500249}else m=d^f^h,u=1859775393;else 60>c?(m=d&f|h&(d|f),u=2400959708):(m=d^f^h,u=3395469782);m=((a<<5|a>>>27)&4294967295)+m+l+u+b[c]&4294967295;l=h;h=f;f=(d<<30|d>>>2)&4294967295;d=a;a=m}e[0]=e[0]+a&4294967295;e[1]=e[1]+d&4294967295;e[2]=
e[2]+f&4294967295;e[3]=e[3]+h&4294967295;e[4]=e[4]+l&4294967295}
function c(a,c){if("string"===typeof a){a=unescape(encodeURIComponent(a));for(var d=[],e=0,g=a.length;e<g;++e)d.push(a.charCodeAt(e));a=d}c||(c=a.length);d=0;if(0==m)for(;d+64<c;)b(a.slice(d,d+64)),d+=64,u+=64;for(;d<c;)if(f[m++]=a[d++],u++,64==m)for(m=0,b(f);d+64<c;)b(a.slice(d,d+64)),d+=64,u+=64}
function d(){var a=[],d=8*u;56>m?c(h,56-m):c(h,64-(m-56));for(var g=63;56<=g;g--)f[g]=d&255,d>>>=8;b(f);for(g=d=0;5>g;g++)for(var l=24;0<=l;l-=8)a[d++]=e[g]>>l&255;return a}
for(var e=[],f=[],g=[],h=[128],l=1;64>l;++l)h[l]=0;var m,u;a();return{reset:a,update:c,digest:d,ya:function(){for(var a=d(),b="",c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}}}
;function Yb(a,b,c){var d=[],e=[];if(1==(w(c)?2:1))return e=[b,a],D(d,function(a){e.push(a)}),Zb(e.join(" "));
var f=[],g=[];D(c,function(a){g.push(a.key);f.push(a.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];D(d,function(a){e.push(a)});
a=Zb(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Zb(a){var b=Xb();b.update(a);return b.ya().toLowerCase()}
;function $b(a){this.b=a||{cookie:""}}
k=$b.prototype;k.isEnabled=function(){return navigator.cookieEnabled};
k.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');q(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(A()+1E3*c)).toUTCString();this.b.cookie=a+"="+b+e+d+c+f};
k.get=function(a,b){for(var c=a+"=",d=(this.b.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Ga(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
k.remove=function(a,b,c){var d=q(this.get(a));this.set(a,"",0,b,c);return d};
k.isEmpty=function(){return!this.b.cookie};
k.clear=function(){for(var a=(this.b.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=Ga(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var ac=new $b("undefined"==typeof document?null:document);ac.f=3950;function bc(a){var b=Wb(String(p.location.href)),c=p.__OVERRIDE_SID;null==c&&(c=(new $b(document)).get("SID"));if(c&&(b=(c=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?p.__SAPISID:p.__APISID,null==b&&(b=(new $b(document)).get(c?"SAPISID":"APISID")),b)){c=c?"SAPISIDHASH":"APISIDHASH";var d=String(p.location.href);return d&&b&&c?[c,Yb(Wb(d),b,a||null)].join(" "):null}return null}
;function cc(a,b){this.h=a;this.g=b;this.f=0;this.b=null}
cc.prototype.get=function(){if(0<this.f){this.f--;var a=this.b;this.b=a.next;a.next=null}else a=this.h();return a};
function dc(a,b){a.g(b);100>a.f&&(a.f++,b.next=a.b,a.b=b)}
;function ec(a){p.setTimeout(function(){throw a;},0)}
var fc;
function gc(){var a=p.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!E("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow;a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host;a=y(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!E("Trident")&&!E("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(q(c.next)){c=c.next;var a=c.la;c.la=null;a()}};
return function(a){d.next={la:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){p.setTimeout(a,0)}}
;function hc(){this.f=this.b=null}
var jc=new cc(function(){return new ic},function(a){a.reset()});
hc.prototype.add=function(a,b){var c=jc.get();c.set(a,b);this.f?this.f.next=c:this.b=c;this.f=c};
hc.prototype.remove=function(){var a=null;this.b&&(a=this.b,this.b=this.b.next,this.b||(this.f=null),a.next=null);return a};
function ic(){this.next=this.scope=this.b=null}
ic.prototype.set=function(a,b){this.b=a;this.scope=b;this.next=null};
ic.prototype.reset=function(){this.next=this.scope=this.b=null};function kc(a,b){lc||mc();nc||(lc(),nc=!0);oc.add(a,b)}
var lc;function mc(){if(p.Promise&&p.Promise.resolve){var a=p.Promise.resolve(void 0);lc=function(){a.then(pc)}}else lc=function(){var a=pc;
!sa(p.setImmediate)||p.Window&&p.Window.prototype&&!E("Edge")&&p.Window.prototype.setImmediate==p.setImmediate?(fc||(fc=gc()),fc(a)):p.setImmediate(a)}}
var nc=!1,oc=new hc;function pc(){for(var a;a=oc.remove();){try{a.b.call(a.scope)}catch(b){ec(b)}dc(jc,a)}nc=!1}
;var qc=null,rc=null;function sc(){this.f=-1}
;function tc(){this.f=64;this.b=[];this.j=[];this.l=[];this.g=[];this.g[0]=128;for(var a=1;a<this.f;++a)this.g[a]=0;this.i=this.h=0;this.reset()}
B(tc,sc);tc.prototype.reset=function(){this.b[0]=1732584193;this.b[1]=4023233417;this.b[2]=2562383102;this.b[3]=271733878;this.b[4]=3285377520;this.i=this.h=0};
function uc(a,b,c){c||(c=0);var d=a.l;if(r(b))for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.b[0];c=a.b[1];var g=a.b[2],h=a.b[3],l=a.b[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var m=1518500249}else f=c^g^h,m=1859775393;else 60>e?(f=c&g|h&(c|g),m=2400959708):(f=c^g^h,m=
3395469782);f=(b<<5|b>>>27)+f+l+m+d[e]&4294967295;l=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.b[0]=a.b[0]+b&4294967295;a.b[1]=a.b[1]+c&4294967295;a.b[2]=a.b[2]+g&4294967295;a.b[3]=a.b[3]+h&4294967295;a.b[4]=a.b[4]+l&4294967295}
tc.prototype.update=function(a,b){if(null!=a){q(b)||(b=a.length);for(var c=b-this.f,d=0,e=this.j,f=this.h;d<b;){if(0==f)for(;d<=c;)uc(this,a,d),d+=this.f;if(r(a))for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.f){uc(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.f){uc(this,e);f=0;break}}this.h=f;this.i+=b}};
tc.prototype.digest=function(){var a=[],b=8*this.i;56>this.h?this.update(this.g,56-this.h):this.update(this.g,this.f-(this.h-56));for(var c=this.f-1;56<=c;c--)this.j[c]=b&255,b/=256;uc(this,this.j);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.b[c]>>d&255,++b;return a};function H(){this.h=this.h;this.B=this.B}
H.prototype.h=!1;H.prototype.dispose=function(){this.h||(this.h=!0,this.m())};
function vc(a,b){a.h?q(void 0)?b.call(void 0):b():(a.B||(a.B=[]),a.B.push(q(void 0)?y(b,void 0):b))}
H.prototype.m=function(){if(this.B)for(;this.B.length;)this.B.shift()()};
function wc(a){a&&"function"==typeof a.dispose&&a.dispose()}
function xc(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];ra(d)?xc.apply(null,d):wc(d)}}
;function yc(a){if(a.classList)return a.classList;a=a.className;return r(a)&&a.match(/\S+/g)||[]}
function zc(a,b){if(a.classList)var c=a.classList.contains(b);else c=yc(a),c=0<=ya(c,b);return c}
function Ac(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):zc(a,"inverted-hdpi")&&(a.className=za(yc(a),function(a){return"inverted-hdpi"!=a}).join(" "))}
;var Bc="StopIteration"in p?p.StopIteration:{message:"StopIteration",stack:""};function Cc(){}
Cc.prototype.next=function(){throw Bc;};
Cc.prototype.D=function(){return this};
function Dc(a){if(a instanceof Cc)return a;if("function"==typeof a.D)return a.D(!1);if(ra(a)){var b=0,c=new Cc;c.next=function(){for(;;){if(b>=a.length)throw Bc;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function Ec(a,b){if(ra(a))try{D(a,b,void 0)}catch(c){if(c!==Bc)throw c;}else{a=Dc(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==Bc)throw c;}}}
function Fc(a){if(ra(a))return Da(a);a=Dc(a);var b=[];Ec(a,function(a){b.push(a)});
return b}
;function Gc(a,b){this.h={};this.b=[];this.g=this.f=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Gc)for(c=Hc(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function Hc(a){Ic(a);return a.b.concat()}
k=Gc.prototype;k.equals=function(a,b){if(this===a)return!0;if(this.f!=a.f)return!1;var c=b||Jc;Ic(this);for(var d,e=0;d=this.b[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function Jc(a,b){return a===b}
k.isEmpty=function(){return 0==this.f};
k.clear=function(){this.h={};this.g=this.f=this.b.length=0};
k.remove=function(a){return Object.prototype.hasOwnProperty.call(this.h,a)?(delete this.h[a],this.f--,this.g++,this.b.length>2*this.f&&Ic(this),!0):!1};
function Ic(a){if(a.f!=a.b.length){for(var b=0,c=0;b<a.b.length;){var d=a.b[b];Object.prototype.hasOwnProperty.call(a.h,d)&&(a.b[c++]=d);b++}a.b.length=c}if(a.f!=a.b.length){var e={};for(c=b=0;b<a.b.length;)d=a.b[b],Object.prototype.hasOwnProperty.call(e,d)||(a.b[c++]=d,e[d]=1),b++;a.b.length=c}}
k.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.h,a)?this.h[a]:b};
k.set=function(a,b){Object.prototype.hasOwnProperty.call(this.h,a)||(this.f++,this.b.push(a),this.g++);this.h[a]=b};
k.forEach=function(a,b){for(var c=Hc(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
k.clone=function(){return new Gc(this)};
k.D=function(a){Ic(this);var b=0,c=this.g,d=this,e=new Cc;e.next=function(){if(c!=d.g)throw Error("The map has changed since the iterator was created");if(b>=d.b.length)throw Bc;var e=d.b[b++];return a?e:d.h[e]};
return e};(function(){if(!p.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
p.addEventListener("test",oa,b);p.removeEventListener("test",oa,b);return a})();function Kc(a){var b=[];Lc(new Mc,a,b);return b.join("")}
function Mc(){}
function Lc(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(w(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Lc(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Nc(d,c),c.push(":"),Lc(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Nc(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Oc={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Pc=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Nc(a,b){b.push('"',a.replace(Pc,function(a){var b=Oc[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),Oc[a]=b);return b}),'"')}
;function Qc(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0}
function Rc(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}}
;function I(a,b){this.b=0;this.l=void 0;this.g=this.f=this.h=null;this.i=this.j=!1;if(a!=oa)try{var c=this;a.call(b,function(a){Sc(c,2,a)},function(a){Sc(c,3,a)})}catch(d){Sc(this,3,d)}}
function Tc(){this.next=this.context=this.f=this.g=this.b=null;this.h=!1}
Tc.prototype.reset=function(){this.context=this.f=this.g=this.b=null;this.h=!1};
var Uc=new cc(function(){return new Tc},function(a){a.reset()});
function Vc(a,b,c){var d=Uc.get();d.g=a;d.f=b;d.context=c;return d}
function Wc(a){return new I(function(b,c){c(a)})}
function Xc(a,b,c){Yc(a,b,c,null)||kc(z(b,a))}
function Zc(a){return new I(function(b,c){a.length||b(void 0);for(var d=0,e;d<a.length;d++)e=a[d],Xc(e,b,c)})}
function $c(a){return new I(function(b){var c=a.length,d=[];if(c)for(var e=function(a,e,f){c--;d[a]=e?{Y:!0,value:f}:{Y:!1,reason:f};0==c&&b(d)},f=0,g;f<a.length;f++)g=a[f],Xc(g,z(e,f,!0),z(e,f,!1));
else b(d)})}
I.prototype.then=function(a,b,c){return ad(this,sa(a)?a:null,sa(b)?b:null,c)};
Qc(I);function bd(a,b){var c=Vc(b,b,void 0);c.h=!0;cd(a,c);return a}
function dd(a,b){return ad(a,null,b,void 0)}
I.prototype.cancel=function(a){0==this.b&&kc(function(){var b=new ed(a);fd(this,b)},this)};
function fd(a,b){if(0==a.b)if(a.h){var c=a.h;if(c.f){for(var d=0,e=null,f=null,g=c.f;g&&(g.h||(d++,g.b==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.b&&1==d?fd(c,b):(f?(d=f,d.next==c.g&&(c.g=d),d.next=d.next.next):gd(c),hd(c,e,3,b)))}a.h=null}else Sc(a,3,b)}
function cd(a,b){a.f||2!=a.b&&3!=a.b||id(a);a.g?a.g.next=b:a.f=b;a.g=b}
function ad(a,b,c,d){var e=Vc(null,null,null);e.b=new I(function(a,g){e.g=b?function(c){try{var e=b.call(d,c);a(e)}catch(m){g(m)}}:a;
e.f=c?function(b){try{var e=c.call(d,b);!q(e)&&b instanceof ed?g(b):a(e)}catch(m){g(m)}}:g});
e.b.h=a;cd(a,e);return e.b}
I.prototype.o=function(a){this.b=0;Sc(this,2,a)};
I.prototype.w=function(a){this.b=0;Sc(this,3,a)};
function Sc(a,b,c){0==a.b&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.b=1,Yc(c,a.o,a.w,a)||(a.l=c,a.b=b,a.h=null,id(a),3!=b||c instanceof ed||jd(a,c)))}
function Yc(a,b,c,d){if(a instanceof I)return cd(a,Vc(b||oa,c||null,d)),!0;if(Rc(a))return a.then(b,c,d),!0;if(x(a))try{var e=a.then;if(sa(e))return kd(a,e,b,c,d),!0}catch(f){return c.call(d,f),!0}return!1}
function kd(a,b,c,d,e){function f(a){h||(h=!0,d.call(e,a))}
function g(a){h||(h=!0,c.call(e,a))}
var h=!1;try{b.call(a,g,f)}catch(l){f(l)}}
function id(a){a.j||(a.j=!0,kc(a.B,a))}
function gd(a){var b=null;a.f&&(b=a.f,a.f=b.next,b.next=null);a.f||(a.g=null);return b}
I.prototype.B=function(){for(var a;a=gd(this);)hd(this,a,this.b,this.l);this.j=!1};
function hd(a,b,c,d){if(3==c&&b.f&&!b.h)for(;a&&a.i;a=a.h)a.i=!1;if(b.b)b.b.h=null,ld(b,c,d);else try{b.h?b.g.call(b.context):ld(b,c,d)}catch(e){md.call(null,e)}dc(Uc,b)}
function ld(a,b,c){2==b?a.g.call(a.context,c):a.f&&a.f.call(a.context,c)}
function jd(a,b){a.i=!0;kc(function(){a.i&&md.call(null,b)})}
var md=ec;function ed(a){C.call(this,a)}
B(ed,C);ed.prototype.name="cancel";function J(a){H.call(this);this.j=1;this.g=[];this.i=0;this.b=[];this.f={};this.l=!!a}
B(J,H);k=J.prototype;k.subscribe=function(a,b,c){var d=this.f[a];d||(d=this.f[a]=[]);var e=this.j;this.b[e]=a;this.b[e+1]=b;this.b[e+2]=c;this.j=e+3;d.push(e);return e};
function nd(a,b,c,d){if(b=a.f[b]){var e=a.b;(b=Ba(b,function(a){return e[a+1]==c&&e[a+2]==d}))&&a.K(b)}}
k.K=function(a){var b=this.b[a];if(b){var c=this.f[b];0!=this.i?(this.g.push(a),this.b[a+1]=oa):(c&&Ca(c,a),delete this.b[a],delete this.b[a+1],delete this.b[a+2])}return!!b};
k.I=function(a,b){var c=this.f[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.l)for(e=0;e<c.length;e++){var g=c[e];od(this.b[g+1],this.b[g+2],d)}else{this.i++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.b[g+1].apply(this.b[g+2],d)}finally{if(this.i--,0<this.g.length&&0==this.i)for(;c=this.g.pop();)this.K(c)}}return 0!=e}return!1};
function od(a,b,c){kc(function(){a.apply(b,c)})}
k.clear=function(a){if(a){var b=this.f[a];b&&(D(b,this.K,this),delete this.f[a])}else this.b.length=0,this.f={}};
k.m=function(){J.u.m.call(this);this.clear();this.g.length=0};function pd(a){this.b=a}
pd.prototype.set=function(a,b){q(b)?this.b.set(a,Kc(b)):this.b.remove(a)};
pd.prototype.get=function(a){try{var b=this.b.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
pd.prototype.remove=function(a){this.b.remove(a)};function qd(a){this.b=a}
B(qd,pd);function rd(a){this.data=a}
function sd(a){return!q(a)||a instanceof rd?a:new rd(a)}
qd.prototype.set=function(a,b){qd.u.set.call(this,a,sd(b))};
qd.prototype.f=function(a){a=qd.u.get.call(this,a);if(!q(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
qd.prototype.get=function(a){if(a=this.f(a)){if(a=a.data,!q(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};function td(a){this.b=a}
B(td,qd);td.prototype.set=function(a,b,c){if(b=sd(b)){if(c){if(c<A()){td.prototype.remove.call(this,a);return}b.expiration=c}b.creation=A()}td.u.set.call(this,a,b)};
td.prototype.f=function(a){var b=td.u.f.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<A()||c&&c>A())td.prototype.remove.call(this,a);else return b}};function ud(a){this.b=a}
B(ud,td);function vd(){}
;function wd(){}
B(wd,vd);wd.prototype.clear=function(){var a=Fc(this.D(!0)),b=this;D(a,function(a){b.remove(a)})};function xd(a){this.b=a}
B(xd,wd);k=xd.prototype;k.isAvailable=function(){if(!this.b)return!1;try{return this.b.setItem("__sak","1"),this.b.removeItem("__sak"),!0}catch(a){return!1}};
k.set=function(a,b){try{this.b.setItem(a,b)}catch(c){if(0==this.b.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
k.get=function(a){a=this.b.getItem(a);if(!r(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
k.remove=function(a){this.b.removeItem(a)};
k.D=function(a){var b=0,c=this.b,d=new Cc;d.next=function(){if(b>=c.length)throw Bc;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!r(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
k.clear=function(){this.b.clear()};
k.key=function(a){return this.b.key(a)};function yd(){var a=null;try{a=window.localStorage||null}catch(b){}this.b=a}
B(yd,xd);function zd(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.b=a}
B(zd,xd);function Ad(a,b){this.f=a;this.b=null;if(fb&&!(9<=Number(pb))){Bd||(Bd=new Gc);this.b=Bd.get(a);this.b||(b?this.b=document.getElementById(b):(this.b=document.createElement("userdata"),this.b.addBehavior("#default#userData"),document.body.appendChild(this.b)),Bd.set(a,this.b));try{this.b.load(this.f)}catch(c){this.b=null}}}
B(Ad,wd);var Cd={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Bd=null;function Dd(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(a){return Cd[a]})}
k=Ad.prototype;k.isAvailable=function(){return!!this.b};
k.set=function(a,b){this.b.setAttribute(Dd(a),b);Ed(this)};
k.get=function(a){a=this.b.getAttribute(Dd(a));if(!r(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
k.remove=function(a){this.b.removeAttribute(Dd(a));Ed(this)};
k.D=function(a){var b=0,c=this.b.XMLDocument.documentElement.attributes,d=new Cc;d.next=function(){if(b>=c.length)throw Bc;var d=c[b++];if(a)return decodeURIComponent(d.nodeName.replace(/\./g,"%")).substr(1);d=d.nodeValue;if(!r(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
k.clear=function(){for(var a=this.b.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Ed(this)};
function Ed(a){try{a.b.save(a.f)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Fd(a,b){this.f=a;this.b=b+"::"}
B(Fd,wd);Fd.prototype.set=function(a,b){this.f.set(this.b+a,b)};
Fd.prototype.get=function(a){return this.f.get(this.b+a)};
Fd.prototype.remove=function(a){this.f.remove(this.b+a)};
Fd.prototype.D=function(a){var b=this.f.D(!0),c=this,d=new Cc;d.next=function(){for(var d=b.next();d.substr(0,c.b.length)!=c.b;)d=b.next();return a?d.substr(c.b.length):c.f.get(d)};
return d};function Gd(a){if(!sa(a))if(a&&"function"==typeof a.handleEvent)a=y(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(5E3)?-1:p.setTimeout(a,5E3)}
function Hd(){var a=null;return dd(new I(function(b,c){a=Gd(function(){b(void 0)});
-1==a&&c(Error("Failed to schedule timer."))}),function(b){p.clearTimeout(a);
throw b;})}
;var Id=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function K(a){return a.match(Id)}
function Jd(a){return a?decodeURI(a):a}
function Kd(a,b,c){if(w(b))for(var d=0;d<b.length;d++)Kd(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Ld(a){var b=[],c;for(c in a)Kd(c,a[c],b);return b.join("&")}
function Md(a,b){var c=Ld(b);if(c){var d=a.indexOf("#");0>d&&(d=a.length);var e=a.indexOf("?");if(0>e||e>d){e=d;var f=""}else f=a.substring(e+1,d);d=[a.substr(0,e),f,a.substr(d)];e=d[1];d[1]=c?e?e+"&"+c:c:e;c=d[0]+(d[1]?"?"+d[1]:"")+d[2]}else c=a;return c}
;function Od(a,b,c){var d="script";d=void 0===d?"":d;var e=a.createElement("link");Eb(e,b,"preload");d&&(e.as=d);c&&(e.nonce=c);if(a=a.getElementsByTagName("head")[0])try{a.appendChild(e)}catch(f){}}
;var Pd=/^\.google\.(com?\.)?[a-z]{2,3}$/,Qd=/\.(cn|com\.bi|do|sl|ba|by|ma)$/;function Rd(a){return Pd.test(a)&&!Qd.test(a)}
var Sd=p;function Td(a){a="https://"+("adservice"+a+"/adsid/integrator.js");var b=["domain="+encodeURIComponent(p.location.hostname)];L[3]>=A()&&b.push("adsid="+encodeURIComponent(L[1]));return a+"?"+b.join("&")}
var L,N;function Ud(){Sd=p;L=Sd.googleToken=Sd.googleToken||{};var a=A();L[1]&&L[3]>a&&0<L[2]||(L[1]="",L[2]=-1,L[3]=-1,L[4]="",L[6]="");N=Sd.googleIMState=Sd.googleIMState||{};Rd(N[1])||(N[1]=".google.com");w(N[5])||(N[5]=[]);ma(N[6])||(N[6]=!1);w(N[7])||(N[7]=[]);na(N[8])||(N[8]=0)}
function Vd(){Ud();return L[1]}
var O={ca:function(){return 0<N[8]},
Qa:function(){N[8]++},
Ra:function(){0<N[8]&&N[8]--},
Sa:function(){N[8]=0},
shouldRetry:function(){return!1},
ma:function(){return N[5]},
ka:function(a){try{a()}catch(b){p.setTimeout(function(){throw b;},0)}},
ia:function(){if(!O.ca()){var a=p.document,b=function(b){b=Td(b);a:{try{var c=Sb();break a}catch(h){}c=void 0}var d=c;Od(a,b,d);c=a.createElement("script");c.type="text/javascript";d&&(c.nonce=d);c.onerror=function(){return p.processGoogleToken({},2)};
b=Pb(b);Fb(c,b);try{(a.head||a.body||a.documentElement).appendChild(c),O.Qa()}catch(h){}},c=N[1];
b(c);".google.com"!=c&&b(".google.com");b={};var d=(b.newToken="FBT",b);p.setTimeout(function(){return p.processGoogleToken(d,1)},1E3)}}};
function Wd(a){Ud();var b=Sd.googleToken[5]||0;a&&(0!=b||L[3]>=A()?O.ka(a):(O.ma().push(a),O.ia()));L[3]>=A()&&L[2]>=A()||O.ia()}
function Xd(a){p.processGoogleToken=p.processGoogleToken||function(a,c){var b=a,e=c;b=void 0===b?{}:b;e=void 0===e?0:e;var f=b.newToken||"",g="NT"==f,h=parseInt(b.freshLifetimeSecs||"",10),l=parseInt(b.validLifetimeSecs||"",10),m=b["1p_jar"]||"";b=b.pucrd||"";Ud();1==e?O.Sa():O.Ra();if(!f&&O.shouldRetry())Rd(".google.com")&&(N[1]=".google.com"),O.ia();else{var u=Sd.googleToken=Sd.googleToken||{},M=0==e&&f&&r(f)&&!g&&na(h)&&0<h&&na(l)&&0<l&&r(m);g=g&&!O.ca()&&(!(L[3]>=A())||"NT"==L[1]);var aa=!(L[3]>=
A())&&0!=e;if(M||g||aa)g=A(),h=g+1E3*h,l=g+1E3*l,1E-5>Math.random()&&(g="https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err="+e,p.google_image_requests||(p.google_image_requests=[]),aa=p.document.createElement("img"),aa.src=g,p.google_image_requests.push(aa)),u[5]=e,u[1]=f,u[2]=h,u[3]=l,u[4]=m,u[6]=b,Ud();if(M||!O.ca()){e=O.ma();for(f=0;f<e.length;f++)O.ka(e[f]);e.length=0}}};
Wd(a)}
;function Yd(a,b){if(1<b.length)a[b[0]]=b[1];else{var c=b[0],d;for(d in c)a[d]=c[d]}}
var P=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};var Zd=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};t("yt.config_",Zd,void 0);function Q(a){Yd(Zd,arguments)}
function R(a,b){return a in Zd?Zd[a]:b}
function $d(a){return R(a,void 0)}
function ae(){return R("PLAYER_CONFIG",{})}
;function be(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){S(b)}}:a}
function S(a,b,c,d,e){var f=v("yt.logging.errors.log");f?f(a,b,c,d,e):(f=R("ERRORS",[]),f.push([a,b,c,d,e]),Q("ERRORS",f))}
;function U(a){return R("EXPERIMENT_FLAGS",{})[a]}
;function ce(a){a&&(a.dataset?a.dataset[de("loaded")]="true":a.setAttribute("data-loaded","true"))}
function ee(a,b){return a?a.dataset?a.dataset[de(b)]:a.getAttribute("data-"+b):null}
var fe={};function de(a){return fe[a]||(fe[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))}
;function V(a,b){sa(a)&&(a=be(a));return window.setTimeout(a,b)}
function ge(a){window.clearTimeout(a)}
;var he=v("ytPubsubPubsubInstance")||new J;J.prototype.subscribe=J.prototype.subscribe;J.prototype.unsubscribeByKey=J.prototype.K;J.prototype.publish=J.prototype.I;J.prototype.clear=J.prototype.clear;t("ytPubsubPubsubInstance",he,void 0);var ie=v("ytPubsubPubsubSubscribedKeys")||{};t("ytPubsubPubsubSubscribedKeys",ie,void 0);var je=v("ytPubsubPubsubTopicToKeys")||{};t("ytPubsubPubsubTopicToKeys",je,void 0);var ke=v("ytPubsubPubsubIsSynchronous")||{};t("ytPubsubPubsubIsSynchronous",ke,void 0);
function le(a,b){var c=me();if(c){var d=c.subscribe(a,function(){var c=arguments;var f=function(){ie[d]&&b.apply(window,c)};
try{ke[a]?f():V(f,0)}catch(g){S(g)}},void 0);
ie[d]=!0;je[a]||(je[a]=[]);je[a].push(d);return d}return 0}
function ne(a){var b=me();b&&(na(a)?a=[a]:r(a)&&(a=[parseInt(a,10)]),D(a,function(a){b.unsubscribeByKey(a);delete ie[a]}))}
function oe(a,b){var c=me();c&&c.publish.apply(c,arguments)}
function pe(a){var b=me();if(b)if(b.clear(a),a)qe(a);else for(var c in je)qe(c)}
function me(){return v("ytPubsubPubsubInstance")}
function qe(a){je[a]&&(a=je[a],D(a,function(a){ie[a]&&delete ie[a]}),a.length=0)}
;var re=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,se=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function te(a,b){if(window.spf){var c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(re,""),c=c.replace(se,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else ue(a,b)}
function ue(a,b){var c=ve(a),d=document.getElementById(c),e=d&&ee(d,"loaded"),f=d&&!e;if(e)b&&b();else{if(b){e=le(c,b);var g=""+(b[ta]||(b[ta]=++ua));we[g]=e}f||(d=xe(a,c,function(){ee(d,"loaded")||(ce(d),oe(c),V(z(pe,c),0))}))}}
function xe(a,b,c){var d=document.createElement("SCRIPT");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
d.onreadystatechange=function(){switch(d.readyState){case "loaded":case "complete":d.onload()}};
Fb(d,Pb(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(d,a.firstChild);return d}
function ye(a){a=ve(a);var b=document.getElementById(a);b&&(pe(a),b.parentNode.removeChild(b))}
function ze(a,b){if(a&&b){var c=""+(b[ta]||(b[ta]=++ua));(c=we[c])&&ne(c)}}
function ve(a){var b=document.createElement("a");Db(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Pa(a)}
var we={};var Ae=null;function Be(){var a=R("BG_I",null),b=R("BG_IU",null),c=R("BG_P",void 0);b?te(b,function(){window.botguard?Ce(c):(ye(b),S(Error("Unable to load Botguard from "+b),"WARNING"))}):a&&(eval(a),window.botguard?Ce(c):S(Error("Unable to load Botguard from JS"),"WARNING"))}
function Ce(a){Ae=new window.botguard.bg(a);U("botguard_periodic_refresh")&&P()}
function De(){return null!=Ae}
function Ee(){return Ae?Ae.invoke():null}
;A();var Fe=q(XMLHttpRequest)?function(){return new XMLHttpRequest}:q(ActiveXObject)?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;
function Ge(){if(!Fe)return null;var a=Fe();return"open"in a?a:null}
function He(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function Ie(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=decodeURIComponent((e[0]||"").replace(/\+/g," "));e=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?w(b[f])?Ea(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b}
;var Je={"X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},Ke=!1;
function Le(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=K(a)[1]||null,e=Jd(K(a)[3]||null);d&&e?(d=c,c=K(a),d=K(d),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?Jd(K(c)[3]||null)==e&&(Number(K(c)[4]||null)||null)==(Number(K(a)[4]||null)||null):!0;for(var f in Je){if((e=d=R(Je[f]))&&!(e=c)){e=f;var g=R("CORS_HEADER_WHITELIST")||{},h=Jd(K(a)[3]||null);e=h?(g=g[h])?0<=ya(g,e):!1:!0}e&&(b[f]=d)}return b}
function Me(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=Ne(a,b);var d=Oe(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(a){if(!e){e=!0;f&&ge(f);var c=a.ok,d=function(d){d=d||{};var e=b.context||p;c?b.onSuccess&&b.onSuccess.call(e,d,a):b.onError&&b.onError.call(e,d,a);b.ha&&b.ha.call(e,d,a)};
"JSON"==(b.format||"JSON")&&(c||400<=a.status&&500>a.status)?a.json().then(d,function(){d(null)}):d(null)}});
b.oa&&0<b.timeout&&(f=V(function(){e||(e=!0,ge(f),b.oa.call(b.context||p))},b.timeout))}else Pe(a,b)}
function Pe(a,b){var c=b.format||"JSON";a=Ne(a,b);var d=Oe(a,b),e=!1,f,g=Qe(a,function(a){if(!e){e=!0;f&&ge(f);var d=He(a),g=null;if(d||400<=a.status&&500>a.status)g=Re(c,a,b.hb);if(d)a:if(a&&204==a.status)d=!0;else{switch(c){case "XML":d=0==parseInt(g&&g.return_code,10);break a;case "RAW":d=!0;break a}d=!!g}g=g||{};var h=b.context||p;d?b.onSuccess&&b.onSuccess.call(h,a,g):b.onError&&b.onError.call(h,a,g);b.ha&&b.ha.call(h,a,g)}},b.method,d,b.headers,b.responseType,b.withCredentials);
b.L&&0<b.timeout&&(f=V(function(){e||(e=!0,g.abort(),ge(f),b.L.call(b.context||p,g))},b.timeout));
return g}
function Ne(a,b){b.Da&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=R("XSRF_FIELD_NAME",void 0),d=b.cb;if(d){d[c]&&delete d[c];d=d||{};var e=a.split("#",2);c=e[0];e=1<e.length?"#"+e[1]:"";var f=c.split("?",2);c=f[0];f=Ie(f[1]||"");for(var g in d)f[g]=d[g];a=Md(c,f)+e}return a}
function Oe(a,b){var c=R("XSRF_FIELD_NAME",void 0),d=R("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.A,g=$d("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.ib||Jd(K(a)[3]||null)&&!b.withCredentials&&Jd(K(a)[3]||null)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.A&&b.A[g]||(f||(f={}),f[c]=d);f&&r(e)&&(e=Ie(e),db(e,f),e=b.pa&&"JSON"==b.pa?JSON.stringify(e):Ld(e));f=e||f&&!Za(f);!Ke&&f&&"POST"!=b.method&&(Ke=!0,S(Error("AJAX request with postData should use POST")));
return e}
function Re(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?Se(b):null)d={},D(b.getElementsByTagName("*"),function(a){d[a.tagName]=Te(a)})}c&&Ue(d);
return d}
function Ue(a){if(x(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=Cb(a[b],null);a[c]=d}else Ue(a[b])}}
function Se(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Te(a){var b="";D(a.childNodes,function(a){b+=a.nodeValue});
return b}
function Ve(a,b){b.method="POST";b.A||(b.A={});Pe(a,b)}
function Qe(a,b,c,d,e,f,g){function h(){4==(l&&"readyState"in l?l.readyState:0)&&b&&be(b)(l)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var l=Ge();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",h,!1):l.onreadystatechange=h;l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Le(a,e))for(var m in e)l.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");l.send(d);return l}
;var We={},Xe=0;
function Ye(a,b,c,d,e){e=void 0===e?"":e;a&&(c&&(c=Qa,c=!(c&&0<=c.toLowerCase().indexOf("cobalt"))),c?a&&(a instanceof F||(a=a.J?a.H():String(a),xb.test(a)||(a="about:invalid#zClosurez"),a=zb(a)),b=wb(a),"about:invalid#zClosurez"===b?a="":(b instanceof Ab?a=b:(a=null,b.ea&&(a=b.Z()),b=Ha(b.J?b.H():String(b)),a=Cb(b,a)),a=encodeURIComponent(String(Kc(a instanceof Ab&&a.constructor===Ab&&a.va===Bb?a.da:"type_error:SafeHtml")))),/^[\s\xa0]*$/.test(a)||(a=Lb("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+
'+"\\"></body>"',style:"display:none"}),(9==a.nodeType?a:a.ownerDocument||a.document).body.appendChild(a))):e?Qe(a,b,"POST",e,d):R("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d?Qe(a,b,"GET","",d):Ze(a,b))}
function Ze(a,b){var c=new Image,d=""+Xe++;We[d]=c;c.onload=c.onerror=function(){b&&We[d]&&b();delete We[d]};
c.src=a}
;var $e={},af=0;
function bf(a,b,c,d,e,f){f=f||{};f.name=c||R("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||R("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);b=void 0===b?"ERROR":b;e=void 0===e?!1:e;b=void 0===b?"ERROR":b;e=window&&window.yterr||(void 0===e?!1:e)||!1;if(a&&e&&!(5<=af)){e=a.stacktrace;c=a.columnNumber;a.hasOwnProperty("params")&&(f.params=JSON.stringify(a.params));d=v("window.location.href");if(r(a))a={message:a,name:"Unknown error",lineNumber:"Not available",fileName:d,stack:"Not available"};else{var g=
!1;try{var h=a.lineNumber||a.line||"Not available"}catch(M){h="Not available",g=!0}try{var l=a.fileName||a.filename||a.sourceURL||p.$googDebugFname||d}catch(M){l="Not available",g=!0}a=!g&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:{message:a.message||"Not available",name:a.name||"UnknownError",lineNumber:h,fileName:l,stack:a.stack||"Not available"}}e=e||a.stack;h=a.lineNumber.toString();isNaN(h)||isNaN(c)||(h=h+":"+c);if(!($e[a.message]||0<=e.indexOf("/YouTubeCenter.js")||0<=e.indexOf("/mytube.js"))){l=
e;h={cb:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,1E3),line:h,level:b,"client.name":f.name},A:{url:R("PAGE_NAME",window.location.href),file:a.fileName},method:"POST"};f.version&&(h["client.version"]=f.version);l&&(h.A.stack=l);for(var m in f)h.A["client."+m]=f[m];if(m=R("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var u in m)h.A[u]=m[u];Pe(R("ECATCHER_REPORT_HOST","")+"/error_204",h);$e[a.message]=!0;af++}}}
;var cf=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};t("yt.msgs_",cf,void 0);function df(a){Yd(cf,arguments)}
;function ef(){}
function ff(a,b){return gf(a,0,b)}
function hf(a,b){return gf(a,1,b)}
;function jf(){}
n(jf,ef);function gf(a,b,c){isNaN(c)&&(c=void 0);var d=v("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):V(a,c||0)}
function kf(a){if(!isNaN(a)){var b=v("yt.scheduler.instance.cancelJob");b?b(a):ge(a)}}
jf.prototype.start=function(){var a=v("yt.scheduler.instance.start");a&&a()};
jf.prototype.pause=function(){var a=v("yt.scheduler.instance.pause");a&&a()};
pa(jf);jf.getInstance();var lf=[],mf=!1;function nf(){if("1"!=Wa(ae(),"args","privembed")){var a=function(){mf=!0;"google_ad_status"in window?Q("DCLKSTAT",1):Q("DCLKSTAT",2)};
te("//static.doubleclick.net/instream/ad_status.js",a);lf.push(hf(function(){mf||"google_ad_status"in window||(ze("//static.doubleclick.net/instream/ad_status.js",a),Q("DCLKSTAT",3))},5E3))}}
function of(){return parseInt(R("DCLKSTAT",0),10)}
;var pf=0;t("ytDomDomGetNextId",v("ytDomDomGetNextId")||function(){return++pf},void 0);var qf={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function rf(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;if(a=a||window.event){this.event=a;for(var b in a)b in qf||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?
b=a.fromElement:"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.b=a.pageX;this.f=a.pageY}}
function sf(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.b=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.f=a.clientY+b}}
rf.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
rf.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
rf.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var Ya=v("ytEventsEventsListeners")||{};t("ytEventsEventsListeners",Ya,void 0);var tf=v("ytEventsEventsCounter")||{count:0};t("ytEventsEventsCounter",tf,void 0);
function uf(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Xa(function(e){var f=ma(e[4])&&e[4]==!!d,g=x(e[4])&&x(d)&&ab(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var vf=Ob(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function W(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=uf(a,b,c,d);if(e)return e;e=++tf.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(d){d=new rf(d);if(!Nb(d.relatedTarget,function(b){return b==a}))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new rf(b);
b.currentTarget=a;return c.call(a,b)};
g=be(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),vf()||ma(d)?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);Ya[e]=[a,b,c,g,d];return e}
function wf(a){a&&("string"==typeof a&&(a=[a]),D(a,function(a){if(a in Ya){var b=Ya[a],d=b[0],e=b[1],f=b[3];b=b[4];d.removeEventListener?vf()||ma(b)?d.removeEventListener(e,f,b):d.removeEventListener(e,f,!!b.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete Ya[a]}}))}
;function xf(a){this.o=a;this.b=null;this.i=0;this.l=null;this.j=0;this.f=[];for(a=0;4>a;a++)this.f.push(0);this.g=0;this.C=W(window,"mousemove",y(this.F,this));a=y(this.w,this);sa(a)&&(a=be(a));this.G=window.setInterval(a,25)}
B(xf,H);xf.prototype.F=function(a){q(a.b)||sf(a);var b=a.b;q(a.f)||sf(a);this.b=new Gb(b,a.f)};
xf.prototype.w=function(){if(this.b){var a=P();if(0!=this.i){var b=this.l,c=this.b,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.i);this.f[this.g]=.5<Math.abs((d-this.j)/this.j)?1:0;for(c=b=0;4>c;c++)b+=this.f[c]||0;3<=b&&this.o();this.j=d}this.i=a;this.l=this.b;this.g=(this.g+1)%4}};
xf.prototype.m=function(){window.clearInterval(this.G);wf(this.C)};var yf={};
function zf(a){var b=void 0===a?{}:a;a=void 0===b.Ea?!0:b.Ea;b=void 0===b.Oa?!1:b.Oa;if(null==v("_lact",window)){var c=parseInt(R("LACT"),10);c=isFinite(c)?A()-Math.max(c,0):-1;t("_lact",c,window);t("_fact",c,window);-1==c&&Af();W(document,"keydown",Af);W(document,"keyup",Af);W(document,"mousedown",Af);W(document,"mouseup",Af);a&&(b?W(window,"touchmove",function(){Bf("touchmove",200)},{passive:!0}):(W(window,"resize",function(){Bf("resize",200)}),W(window,"scroll",function(){Bf("scroll",200)})));
new xf(function(){Bf("mouse",100)});
W(document,"touchstart",Af,{passive:!0});W(document,"touchend",Af,{passive:!0})}}
function Bf(a,b){yf[a]||(yf[a]=!0,hf(function(){Af();yf[a]=!1},b))}
function Af(){null==v("_lact",window)&&zf();var a=A();t("_lact",a,window);-1==v("_fact",window)&&t("_fact",a,window);(a=v("ytglobal.ytUtilActivityCallback_"))&&a()}
function Cf(){var a=v("_lact",window);return null==a?-1:Math.max(A()-a,0)}
;var Df=Math.pow(2,16)-1,Ef={log_event:"events",log_interaction:"interactions"},Ff=Object.create(null);Ff.log_event="GENERIC_EVENT_LOGGING";Ff.log_interaction="INTERACTION_LOGGING";var Gf={},Hf=0,X=v("ytLoggingTransportLogPayloadsQueue_")||{};t("ytLoggingTransportLogPayloadsQueue_",X,void 0);var If=v("ytLoggingTransportTokensToCttTargetIds_")||{};t("ytLoggingTransportTokensToCttTargetIds_",If,void 0);var Jf=v("ytLoggingTransportDispatchedStats_")||{};t("ytLoggingTransportDispatchedStats_",Jf,void 0);
t("ytytLoggingTransportCapturedTime_",v("ytLoggingTransportCapturedTime_")||{},void 0);function Kf(a,b){if(a.V){var c=a.V;var d={};c.videoId?d.videoId=c.videoId:c.playlistId&&(d.playlistId=c.playlistId);If[a.V.token]=d;c=Lf(a.endpoint,a.V.token)}else c=Lf(a.endpoint);c.push(a.payload);Gf[a.endpoint]=new b;c.length>=(Number(U("web_logging_max_batch")||0)||20)?Mf():Nf()}
function Mf(){ge(Hf);if(!Za(X)){for(var a in X){var b=Gf[a];if(b){var c=void 0,d=a,e=b,f=Ef[d],g=Jf[d]||{};Jf[d]=g;b=Math.round(P());for(c in X[d]){var h=e.b;h={client:{hl:h.Ha,gl:h.Ga,clientName:h.Fa,clientVersion:h.innertubeContextClientVersion}};var l=window.devicePixelRatio;l&&1!=l&&(h.client.screenDensityFloat=String(l));R("DELEGATED_SESSION_ID")&&(h.user={onBehalfOfUser:R("DELEGATED_SESSION_ID")});h={context:h};h[f]=Lf(d,c);g.dispatchedEventCount=g.dispatchedEventCount||0;g.dispatchedEventCount+=
h[f].length;if(l=If[c])a:{var m=h,u=c;if(l.videoId)var M="VIDEO";else if(l.playlistId)M="PLAYLIST";else break a;m.credentialTransferTokenTargetId=l;m.context=m.context||{};m.context.user=m.context.user||{};m.context.user.credentialTransferTokens=[{token:u,scope:M}]}delete If[c];l=h;l.requestTimeMs=b;(M=R("EVENT_ID",void 0))&&U("enable_gel_web_client_event_id")&&(m=(R("BATCH_CLIENT_COUNTER",void 0)||0)+1,m>Df&&(m=1),Q("BATCH_CLIENT_COUNTER",m),l.serializedClientEventId={serializedEventId:M,clientCounter:m});
Of(e,d,h,{retry:!0})}c=g;d=b;c.previousDispatchMs&&(b=d-c.previousDispatchMs,e=c.diffCount||0,c.averageTimeBetweenDispatchesMs=e?(c.averageTimeBetweenDispatchesMs*e+b)/(e+1):b,c.diffCount=e+1);c.previousDispatchMs=d;delete X[a]}}Za(X)||Nf()}}
function Nf(){ge(Hf);Hf=V(Mf,R("LOGGING_BATCH_TIMEOUT",1E4))}
function Lf(a,b){b=void 0===b?"":b;X[a]=X[a]||{};X[a][b]=X[a][b]||[];return X[a][b]}
;function Pf(a,b,c,d){var e=Qf,f={};f.eventTimeMs=Math.round(c||P());f[a]=b;f.context={lastActivityMs:String(c?-1:Cf())};Kf({endpoint:"log_event",payload:f,V:d},e)}
;function Rf(a,b,c){c.context&&c.context.capabilities&&(c=c.context.capabilities,c.snapshot||c.golden)&&(a="vix");return"/youtubei/"+a+"/"+b}
function Sf(a){var b={"X-Goog-Visitor-Id":R("VISITOR_DATA","")},c;a?c="Bearer "+v("gapi.auth.getToken")().eb:c=bc([]);c&&(b.Authorization=c,b["X-Goog-AuthUser"]=R("SESSION_INDEX",0));return b}
function Tf(a){a=Object.assign({},a);delete a.Authorization;var b=bc();if(b){var c=new tc;c.update(R("INNERTUBE_API_KEY",void 0));c.update(b);b=c.digest();if(!qc)for(qc={},rc={},c=0;65>c;c++)qc[c]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(c),rc[c]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(c);c=rc;for(var d=[],e=0;e<b.length;e+=3){var f=b[e],g=e+1<b.length,h=g?b[e+1]:0,l=e+2<b.length,m=l?b[e+2]:0,u=f>>2;f=(f&3)<<4|h>>4;h=(h&15)<<2|m>>
6;m&=63;l||(m=64,g||(h=64));d.push(c[u],c[f],c[h],c[m])}a.hash=d.join("")}return a}
;function Uf(a,b,c,d){ac.set(""+a,b,c,"/",void 0===d?"youtube.com":d,!1)}
;function Vf(){var a=new yd;(a=a.isAvailable()?new Fd(a,"yt.innertube"):null)||(a=new Ad("yt.innertube"),a=a.isAvailable()?a:null);this.b=a?new td(a):null;this.f=document.domain||window.location.hostname}
Vf.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.b)try{this.b.set(a,b,A()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(Kc(b))}catch(f){return}else e=escape(b);Uf(a,e,c,this.f)};
Vf.prototype.get=function(a,b){var c=void 0,d=!this.b;if(!d)try{c=this.b.get(a)}catch(e){d=!0}if(d&&(c=ac.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Vf.prototype.remove=function(a){this.b&&this.b.remove(a);var b=this.f;ac.remove(""+a,"/",void 0===b?"youtube.com":b)};var Wf=new Vf;function Xf(a,b,c,d){if(d)return null;d=Wf.get("nextId",!0)||1;var e=Wf.get("requests",!0)||{};e[d]={method:a,request:b,authState:Tf(c),requestTime:Math.round(P())};Wf.set("nextId",d+1,86400,!0);Wf.set("requests",e,86400,!0);return d}
function Yf(a){var b=Wf.get("requests",!0)||{};delete b[a];Wf.set("requests",b,86400,!0)}
function Zf(a){var b=Wf.get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(P())-d.requestTime)){var e=d.authState,f=Tf(Sf(!1));ab(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(P())),Of(a,d.method,e,{}));delete b[c]}}Wf.set("requests",b,86400,!0)}}
;function Qf(a){var b=this;this.b=a||{innertubeApiKey:$d("INNERTUBE_API_KEY"),innertubeApiVersion:$d("INNERTUBE_API_VERSION"),Fa:R("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:$d("INNERTUBE_CONTEXT_CLIENT_VERSION"),Ha:$d("INNERTUBE_CONTEXT_HL"),Ga:$d("INNERTUBE_CONTEXT_GL"),Ia:$d("INNERTUBE_HOST_OVERRIDE")||"",Ja:!!R("INNERTUBE_USE_THIRD_PARTY_AUTH",!1)};ff(function(){Zf(b)})}
function Of(a,b,c,d){!R("VISITOR_DATA")&&.01>Math.random()&&S(Error("Missing VISITOR_DATA when sending innertube request."),"WARNING");var e={headers:{"Content-Type":"application/json"},method:"POST",A:c,pa:"JSON",L:function(){d.L()},
oa:d.L,onSuccess:function(a,b){if(d.onSuccess)d.onSuccess(b)},
na:function(a){if(d.onSuccess)d.onSuccess(a)},
onError:function(a,b){if(d.onError)d.onError(b)},
jb:function(a){if(d.onError)d.onError(a)},
timeout:d.timeout,withCredentials:!0},f=a.b.Ja||!1,g=Sf(f);Object.assign(e.headers,g);var h="",l=a.b.Ia;l&&(h=l);e.headers.Authorization&&!h&&(e.headers["x-origin"]=window.location.origin);h=""+h+Rf(a.b.innertubeApiVersion,b,c)+"?alt=json&key="+a.b.innertubeApiKey;var m;if(d.retry&&U("retry_web_logging_batches")&&(m=Xf(b,c,g,f))){var u=e.onSuccess,M=e.na;e.onSuccess=function(a,b){Yf(m);u(a,b)};
c.na=function(a,b){Yf(m);M(a,b)}}try{U("use_fetch_for_op_xhr")?Me(h,e):Ve(h,e)}catch(aa){if("InvalidAccessError"==aa)m&&(Yf(m),m=0),S(Error("An extension is blocking network request."),"WARNING");
else throw aa;}m&&ff(function(){Zf(a)},5E3)}
;var $f=A().toString();
function ag(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=A();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if($f)for(a=1,b=0;b<$f.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^$f.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".charAt(d[b]&63));
return a.join("")}
;var bg=ag();function cg(a){this.b=a}
function dg(a){var b={};void 0!==a.b.trackingParams?b.trackingParams=a.b.trackingParams:(b.veType=a.b.veType,null!=a.b.veCounter&&(b.veCounter=a.b.veCounter),null!=a.b.elementIndex&&(b.elementIndex=a.b.elementIndex));void 0!==a.b.dataElement&&(b.dataElement=dg(a.b.dataElement));void 0!==a.b.youtubeData&&(b.youtubeData=a.b.youtubeData);return b}
var eg=1;function fg(){var a=R("ROOT_VE_TYPE",void 0);return a?new cg({veType:a}):null}
function gg(){var a=R("client-screen-nonce")||R("EVENT_ID");return a?a:null}
function hg(a,b){function c(){setTimeout(function(){a&&Pf("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:bg,clientScreenNonce:a})},0)}
Q("client-screen-nonce",a);Q("ROOT_VE_TYPE",b);"requestAnimationFrame"in window?window.requestAnimationFrame(c):c()}
;function ig(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=R("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=R("VALID_SESSION_TEMPDATA_DOMAINS",[]),f=Jd(K(window.location.href)[3]||null);f&&e.push(f);f=Jd(K(d)[3]||null);if(0<=ya(e,f)||!f&&0==d.lastIndexOf("/",0))if(U("autoescape_tempdata_url")&&(e=document.createElement("a"),Db(e,d),d=e.href),d){f=K(d);d=f[5];e=f[6];f=f[7];var g="";d&&(g+=d);e&&(g+="?"+e);f&&(g+="#"+f);d=g;e=d.indexOf("#");if(d=0>e?d:d.substr(0,e)){if(b.itct||b.ved)b.csn=b.csn||
gg();if(h){var h=parseInt(h,10);isFinite(h)&&0<h&&(d="ST-"+Pa(d).toString(36),b=b?Ld(b):"",Uf(d,b,h||5))}else h="ST-"+Pa(d).toString(36),b=b?Ld(b):"",Uf(h,b,5)}}}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var l=void 0===l?{}:l;var m=void 0===m?"":m;var u=void 0===u?window:u;c=u.location;a=Md(a,l)+m;a=a instanceof F?a:yb(a);c.href=wb(a)}return!0}
;function jg(a,b,c){kg({attachChild:{csn:a,parentVisualElement:dg(b),visualElements:[dg(c)]}})}
function kg(a){var b=Qf;a.eventTimeMs=Math.round(P());a.lactMs=Cf();Kf({endpoint:"log_interaction",payload:a},b)}
;function lg(a){a=a||{};this.url=a.url||"";this.args=a.args||bb(mg);this.assets=a.assets||{};this.attrs=a.attrs||bb(ng);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
var mg={enablejsapi:1},ng={};lg.prototype.clone=function(){var a=new lg,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];a[b]="object"==qa(c)?bb(c):c}return a};function og(){H.call(this);this.b=[]}
n(og,H);og.prototype.m=function(){for(;this.b.length;){var a=this.b.pop();a.target.removeEventListener(a.name,a.gb)}H.prototype.m.call(this)};var pg=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function qg(a){a=a||"";if(window.spf){var b=a.match(pg);spf.style.load(a,b?b[1]:"",void 0)}else rg(a)}
function rg(a){var b=sg(a),c=document.getElementById(b),d=c&&ee(c,"loaded");d||c&&!d||(c=tg(a,b,function(){ee(c,"loaded")||(ce(c),oe(b),V(z(pe,b),0))}))}
function tg(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Pb(a);Eb(d,a,"stylesheet");(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function sg(a){var b=document.createElement("A");a=zb(a);Db(b,a);b=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Pa(b)}
;var ug=v("ytLoggingLatencyUsageStats_")||{};t("ytLoggingLatencyUsageStats_",ug,void 0);var vg=0;function wg(a){ug[a]=ug[a]||{count:0};var b=ug[a];b.count++;b.time=P();vg||(vg=ff(xg,5E3));return 10<b.count?(11==b.count&&bf(Error("CSI data exceeded logging limit with key: "+a),0==a.indexOf("info")?"WARNING":"ERROR"),!0):!1}
function xg(){var a=P(),b;for(b in ug)6E4<a-ug[b].time&&delete ug[b];vg=0}
;function yg(a,b){this.version=a;this.args=b}
;function zg(a){this.topic=a}
zg.prototype.toString=function(){return this.topic};var Ag=v("ytPubsub2Pubsub2Instance")||new J;J.prototype.subscribe=J.prototype.subscribe;J.prototype.unsubscribeByKey=J.prototype.K;J.prototype.publish=J.prototype.I;J.prototype.clear=J.prototype.clear;t("ytPubsub2Pubsub2Instance",Ag,void 0);t("ytPubsub2Pubsub2SubscribedKeys",v("ytPubsub2Pubsub2SubscribedKeys")||{},void 0);t("ytPubsub2Pubsub2TopicToKeys",v("ytPubsub2Pubsub2TopicToKeys")||{},void 0);t("ytPubsub2Pubsub2IsAsync",v("ytPubsub2Pubsub2IsAsync")||{},void 0);
t("ytPubsub2Pubsub2SkipSubKey",null,void 0);function Bg(a,b){var c=v("ytPubsub2Pubsub2Instance");c&&c.publish.call(c,a.toString(),a,b)}
;var Y=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};function Cg(){var a=R("TIMING_TICK_EXPIRATION");a||(a={},Q("TIMING_TICK_EXPIRATION",a));return a}
function Dg(){var a=Cg(),b;for(b in a)kf(a[b]);Q("TIMING_TICK_EXPIRATION",{})}
;function Eg(a,b){yg.call(this,1,arguments)}
n(Eg,yg);function Fg(a,b){yg.call(this,1,arguments)}
n(Fg,yg);var Gg=new zg("aft-recorded"),Hg=new zg("timing-sent");var Ig={vc:!0},Jg={ad_allowed:"adTypesAllowed",ad_at:"adType",ad_cpn:"adClientPlaybackNonce",ad_docid:"adVideoId",yt_ad_an:"adNetworks",p:"httpProtocol",t:"transportProtocol",cpn:"clientPlaybackNonce",csn:"clientScreenNonce",docid:"videoId",is_nav:"isNavigation",yt_lt:"loadType",yt_ad:"isMonetized",nr:"webInfo.navigationReason",ncnp:"webInfo.nonPreloadedNodeCount",paused:"playerInfo.isPausedOnLoad",fmt:"playerInfo.itag",yt_pl:"watchInfo.isPlaylist",yt_ad_pr:"prerollAllowed",yt_red:"isRedSubscriber",
st:"serverTimeMs",vph:"viewportHeight",vpw:"viewportWidth",yt_vis:"isVisible"},Kg="ap c cver ei srt yt_fss yt_li plid vpil vpni vpst yt_eil vpni2 vpil2 icrc icrt pa GetBrowse_rid GetPlayer_rid GetSearch_rid GetWatchNext_rid cmt d_vpct d_vpnfi d_vpni pc pfa pfeh pftr prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis yt_ref yt_sts".split(" "),Ng="isNavigation isMonetized playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber isVisible watchInfo.isPlaylist".split(" "),
Og=!1;
function Pg(a){if("_"!=a[0]){var b=a;Y.mark&&(0==b.lastIndexOf("mark_",0)||(b="mark_"+b),Y.mark(b))}b=Qg();var c=P();b[a]&&(b["_"+a]=b["_"+a]||[b[a]],b["_"+a].push(c));b[a]=c;b=Cg();if(c=b[a])kf(c),b[a]=0;Rg()["tick_"+a]=void 0;P();Sg()?(b=Tg(),"_start"==a?wg("baseline_"+b)||Pf("latencyActionBaselined",{clientActionNonce:b},void 0,void 0):wg("tick_"+a+"_"+b)||Pf("latencyActionTicked",{tickName:a,clientActionNonce:b},void 0,void 0),a=!0):a=!1;if(a=!a)a=!v("yt.timing.pingSent_");if(a&&(b=$d("TIMING_ACTION"),a=
Qg(),v("ytglobal.timingready_")&&b&&a._start&&(b=Ug()))){U("tighter_critical_section")&&!Og&&(Bg(Gg,new Eg(Math.round(b-a._start),void 0)),Og=!0);b=!0;c=R("TIMING_WAIT",[]);if(c.length)for(var d=0,e=c.length;d<e;++d)if(!(c[d]in a)){b=!1;break}b&&Vg()}}
function Wg(){var a=Xg().info.yt_lt="hot_bg";Rg().info_yt_lt=a;if(Sg())if("yt_lt"in Jg){var b=Jg.yt_lt;0<=ya(Ng,b)&&(a=!!a);if(Sg()){var c={};b=b.split(".");for(var d=c,e=0;e<b.length-1;e++)d[b[e]]=d[b[e]]||{},d=d[b[e]];d[b[b.length-1]]=a;a=Tg();b=Object.keys(c).join("");wg("info_"+b+"_"+a)||(c.clientActionNonce=a,Pf("latencyActionInfo",c,void 0,void 0))}}else 0<=ya(Kg,"yt_lt")||S(Error("Unknown label yt_lt logged with GEL CSI."))}
function Ug(){var a=Qg();if(a.aft)return a.aft;for(var b=R("TIMING_AFT_KEYS",["ol"]),c=b.length,d=0;d<c;d++){var e=a[b[d]];if(e)return e}return NaN}
function Vg(){Dg();if(!Sg()){var a=Qg(),b=Xg().info,c=a._start,d;for(d in a)if(0==d.lastIndexOf("_",0)&&w(a[d])){var e=d.slice(1);if(e in Ig){var f=Aa(a[d],function(a){return Math.round(a-c)});
b["all_"+e]=f.join()}delete a[d]}e=!!b.ap;if(f=v("ytglobal.timingReportbuilder_")){if(f=f(a,b,void 0))Yg(f,e),Zg(),$g(),ah(!1,void 0),R("TIMING_ACTION")&&Q("PREVIOUS_ACTION",R("TIMING_ACTION")),Q("TIMING_ACTION","")}else{var g=R("CSI_SERVICE_NAME","youtube");f={v:2,s:g,action:R("TIMING_ACTION",void 0)};var h=b.srt;void 0!==a.srt&&delete b.srt;if(b.h5jse){var l=window.location.protocol+v("ytplayer.config.assets.js");(l=Y.getEntriesByName?Y.getEntriesByName(l)[0]:null)?b.h5jse=Math.round(b.h5jse-l.responseEnd):
delete b.h5jse}a.aft=Ug();bh()&&"youtube"==g&&(Wg(),g=a.vc,l=a.pbs,delete a.aft,b.aft=Math.round(l-g));for(var m in b)"_"!=m.charAt(0)&&(f[m]=b[m]);a.ps=P();b={};m=[];for(d in a)"_"!=d.charAt(0)&&(g=Math.round(a[d]-c),b[d]=g,m.push(d+"."+g));f.rt=m.join(",");(a=v("ytdebug.logTiming"))&&a(f,b);Yg(f,e,void 0);Bg(Hg,new Fg(b.aft+(h||0),void 0))}}}
var $g=y(Y.clearResourceTimings||Y.webkitClearResourceTimings||Y.mozClearResourceTimings||Y.msClearResourceTimings||Y.oClearResourceTimings||oa,Y);
function Yg(a,b,c){if(U("debug_csi_data")){var d=v("yt.timing.csiData");d||(d=[],t("yt.timing.csiData",d,void 0));d.push({page:location.href,time:new Date,args:a})}d="";for(var e in a)d+="&"+e+"="+a[e];a="/csi_204?";U("redirect_csi_204_to_qoe")&&(a="/api/stats/qoe?",d+="&redirect_csi_204_to_qoe=true");a+=d.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b){var f=void 0===f?"":f;try{window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,f)||Ye(a,void 0,void 0,void 0,
f)}catch(g){Ye(a,void 0,void 0,void 0,f)}}else Ye(a);ah(!0,c)}
function Tg(){var a=Xg().nonce;a||(a=ag(),Xg().nonce=a);return a}
function Qg(){return Xg().tick}
function Rg(){var a=Xg();"gel"in a||(a.gel={});return a.gel}
function Xg(){return v("ytcsi.data_")||Zg()}
function Zg(){var a={tick:{},info:{}};t("ytcsi.data_",a,void 0);return a}
function ah(a,b){t("yt.timing."+(b||"")+"pingSent_",a,void 0)}
function bh(){var a=Qg(),b=a.pbr,c=a.vc;a=a.pbs;return b&&c&&a&&b<c&&c<a&&1==Xg().info.yt_pvis}
function Sg(){return!!U("csi_on_gel")}
;function ch(a,b){H.call(this);this.l=this.S=a;this.G=b;this.o=!1;this.f={};this.P=this.F=null;this.w=new J;vc(this,z(wc,this.w));this.i={};this.N=this.R=this.g=this.X=this.b=null;this.M=!1;this.j=this.C=null;this.T={};this.ta=["onReady"];this.W=null;this.ja=NaN;this.O={};dh(this);this.U("WATCH_LATER_VIDEO_ADDED",this.La.bind(this));this.U("WATCH_LATER_VIDEO_REMOVED",this.Ma.bind(this));this.U("onAdAnnounce",this.xa.bind(this));this.ua=new og(this);vc(this,z(wc,this.ua))}
n(ch,H);k=ch.prototype;
k.ga=function(a){if(!this.h){a instanceof lg||(a=new lg(a));this.X=a;this.b=a.clone();this.g=this.b.attrs.id||this.g;"video-player"==this.g&&(this.g=this.G,this.b.attrs.id=this.G);this.l.id==this.g&&(this.g+="-player",this.b.attrs.id=this.g);this.b.args.enablejsapi="1";this.b.args.playerapiid=this.G;this.R||(this.R=eh(this,this.b.args.jsapicallback||"onYouTubePlayerReady"));this.b.args.jsapicallback=null;if(a=this.b.attrs.width)this.l.style.width=Ub(Number(a)||a);if(a=this.b.attrs.height)this.l.style.height=Ub(Number(a)||
a);fh(this);this.o&&gh(this)}};
k.Aa=function(){return this.X};
function gh(a){a.b.loaded||(a.b.loaded=!0,"0"!=a.b.args.autoplay?a.f.loadVideoByPlayerVars(a.b.args):a.f.cueVideoByPlayerVars(a.b.args))}
function hh(a){var b=!0,c=ih(a);c&&a.b&&(a=a.b,b=ee(c,"version")==a.assets.js);return b&&!!v("yt.player.Application.create")}
function fh(a){if(!a.h&&!a.M){var b=hh(a);if(b&&"html5"==(ih(a)?"html5":null))a.N="html5",a.o||jh(a);else if(kh(a),a.N="html5",b&&a.j)a.S.appendChild(a.j),jh(a);else{a.b.loaded=!0;var c=!1;a.C=function(){c=!0;var b=a.b.clone();v("yt.player.Application.create")(a.S,b);jh(a)};
a.M=!0;b?a.C():(te(a.b.assets.js,a.C),qg(a.b.assets.css),lh(a)&&!c&&t("yt.player.Application.create",null,void 0))}}}
function ih(a){var b=Ib(a.g);!b&&a.l&&a.l.querySelector&&(b=a.l.querySelector("#"+a.g));return b}
function jh(a){if(!a.h){var b=ih(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);c?(a.M=!1,b.isNotServable&&b.isNotServable(a.b.args.video_id)||mh(a)):a.ja=V(function(){jh(a)},50)}}
function mh(a){dh(a);a.o=!0;var b=ih(a);b.addEventListener&&(a.F=nh(a,b,"addEventListener"));b.removeEventListener&&(a.P=nh(a,b,"removeEventListener"));var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=0;d<c.length;d++){var e=c[d];a.f[e]||(a.f[e]=nh(a,b,e))}for(var f in a.i)a.F(f,a.i[f]);gh(a);a.R&&a.R(a.f);a.w.I("onReady",a.f)}
function nh(a,b,c){var d=b[c];return function(){try{return a.W=null,d.apply(b,arguments)}catch(e){"sendAbandonmentPing"!=c&&(e.message+=" ("+c+")",a.W=e,S(e,"WARNING",void 0,void 0,void 0))}}}
function dh(a){a.o=!1;if(a.P)for(var b in a.i)a.P(b,a.i[b]);for(var c in a.O)ge(parseInt(c,10));a.O={};a.F=null;a.P=null;for(var d in a.f)a.f[d]=null;a.f.addEventListener=a.U.bind(a);a.f.removeEventListener=a.Ta.bind(a);a.f.destroy=a.dispose.bind(a);a.f.getLastError=a.Ba.bind(a);a.f.getPlayerType=a.Ca.bind(a);a.f.getCurrentVideoConfig=a.Aa.bind(a);a.f.loadNewVideoConfig=a.ga.bind(a);a.f.isReady=a.Ka.bind(a)}
k.Ka=function(){return this.o};
k.U=function(a,b){var c=this,d=eh(this,b);if(d){if(!(0<=ya(this.ta,a)||this.i[a])){var e=oh(this,a);this.F&&this.F(a,e)}this.w.subscribe(a,d);"onReady"==a&&this.o&&V(function(){d(c.f)},0)}};
k.Ta=function(a,b){if(!this.h){var c=eh(this,b);c&&nd(this.w,a,c)}};
function eh(a,b){var c=b;if("string"==typeof b){if(a.T[b])return a.T[b];c=function(){var a=v(b);a&&a.apply(p,arguments)};
a.T[b]=c}return c?c:null}
function oh(a,b){var c="ytPlayer"+b+a.G;a.i[b]=c;p[c]=function(c){var d=a.b&&a.b.args&&a.b.args.fflags;if(d&&0>d.indexOf("use_html5_player_event_timeout=true"))a.w.I(b,c);else{var f=V(function(){if(!a.h){a.w.I(b,c);var d=a.O,e=String(f);e in d&&delete d[e]}},0);
$a(a.O,String(f))}};
return c}
k.xa=function(a){oe("a11y-announce",a)};
k.La=function(a){oe("WATCH_LATER_VIDEO_ADDED",a)};
k.Ma=function(a){oe("WATCH_LATER_VIDEO_REMOVED",a)};
k.Ca=function(){return this.N||(ih(this)?"html5":null)};
k.Ba=function(){return this.W};
function kh(a){Pg("dcp");a.cancel();dh(a);a.N=null;a.b&&(a.b.loaded=!1);var b=ih(a);b&&(hh(a)||!lh(a)?a.j=b:(b&&b.destroy&&b.destroy(),a.j=null));for(a=a.S;b=a.firstChild;)a.removeChild(b)}
k.cancel=function(){this.C&&ze(this.b.assets.js,this.C);ge(this.ja);this.M=!1};
k.m=function(){kh(this);if(this.j&&this.b&&this.j.destroy)try{this.j.destroy()}catch(b){S(b)}this.T=null;for(var a in this.i)p[this.i[a]]=null;this.X=this.b=this.f=null;delete this.S;delete this.l;H.prototype.m.call(this)};
function lh(a){return a.b&&a.b.args&&a.b.args.fflags?-1!=a.b.args.fflags.indexOf("player_destroy_old_version=true"):!1}
;var ph={},qh="player_uid_"+(1E9*Math.random()>>>0);function rh(a){var b="player";b=r(b)?Ib(b):b;var c=qh+"_"+(b[ta]||(b[ta]=++ua)),d=ph[c];if(d)return d.ga(a),d.f;d=new ch(b,c);ph[c]=d;oe("player-added",d.f);vc(d,z(sh,d));V(function(){d.ga(a)},0);
return d.f}
function sh(a){delete ph[a.G]}
;function th(){var a=uh(),b=vh();if(!a&&!b||!window.JSON)return null;try{var c=a.get("yt-player-two-stage-token")}catch(d){}if(!r(c))try{c=b.get("yt-player-two-stage-token")}catch(d){}if(!r(c))return null;try{c=JSON.parse(c,void 0)}catch(d){}return c}
var vh=Ob(function(){var a=new yd;return a.isAvailable()?new ud(a):null}),uh=Ob(function(){var a=new zd;
return a.isAvailable()?new ud(a):null});function wh(a){return(0==a.search("cue")||0==a.search("load"))&&"loadModule"!=a}
function xh(a,b,c){r(a)&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});b=/\/([ve]|embed)\/([^#?]+)/.exec(a.mediaContentUrl);a.videoId=b&&b[2]?b[2]:null;return yh(a)}
function yh(a,b,c){if(x(a)){b="endSeconds startSeconds mediaContentUrl suggestedQuality videoId two_stage_token".split(" ");c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}return{videoId:a,startSeconds:b,suggestedQuality:c}}
function zh(a,b,c,d){if(x(a)&&!w(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};r(a)&&16==a.length?b.list="PL"+a:b.playlist=a;return b}
function Ah(a){var b=a.video_id||a.videoId;if(r(b)){var c=th()||{},d=th()||{};q(void 0)?d[b]=void 0:delete d[b];var e=A()+3E5,f=vh();if(f&&window.JSON){r(d)||(d=JSON.stringify(d,void 0));try{f.set("yt-player-two-stage-token",d,e)}catch(g){f.remove("yt-player-two-stage-token")}}(b=c[b])&&(a.two_stage_token=b)}}
;function Bh(a){H.call(this);this.b=a;this.b.subscribe("command",this.qa,this);this.f={};this.i=!1}
B(Bh,H);k=Bh.prototype;k.start=function(){this.i||this.h||(this.i=!0,Ch(this.b,"RECEIVING"))};
k.qa=function(a,b,c){if(this.i&&!this.h){var d=b||{};switch(a){case "addEventListener":r(d.event)&&(a=d.event,a in this.f||(c=y(this.Va,this,a),this.f[a]=c,this.addEventListener(a,c)));break;case "removeEventListener":r(d.event)&&Dh(this,d.event);break;default:this.g.isReady()&&this.g[a]&&(b=Eh(a,b||{}),c=this.g.handleExternalCall(a,b,c||null),(c=Fh(a,c))&&this.i&&!this.h&&Ch(this.b,a,c))}}};
k.Va=function(a,b){this.i&&!this.h&&Ch(this.b,a,this.aa(a,b))};
k.aa=function(a,b){if(null!=b)return{value:b}};
function Dh(a,b){b in a.f&&(a.removeEventListener(b,a.f[b]),delete a.f[b])}
k.m=function(){var a=this.b;a.h||nd(a.b,"command",this.qa,this);this.b=null;for(var b in this.f)Dh(this,b);Bh.u.m.call(this)};function Gh(a,b){Bh.call(this,b);this.g=a;this.start()}
B(Gh,Bh);Gh.prototype.addEventListener=function(a,b){this.g.addEventListener(a,b)};
Gh.prototype.removeEventListener=function(a,b){this.g.removeEventListener(a,b)};
function Eh(a,b){switch(a){case "loadVideoById":return b=yh(b),Ah(b),[b];case "cueVideoById":return b=yh(b),Ah(b),[b];case "loadVideoByPlayerVars":return Ah(b),[b];case "cueVideoByPlayerVars":return Ah(b),[b];case "loadPlaylist":return b=zh(b),Ah(b),[b];case "cuePlaylist":return b=zh(b),Ah(b),[b];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];
case "setLoop":return[b.loopPlaylists];case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey]}return[]}
function Fh(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
Gh.prototype.aa=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return Gh.u.aa.call(this,a,b)};
Gh.prototype.m=function(){Gh.u.m.call(this);delete this.g};function Hh(a,b,c,d){H.call(this);this.f=b||null;this.o="*";this.g=c||null;this.sessionId=null;this.channel=d||null;this.C=!!a;this.l=y(this.w,this);window.addEventListener("message",this.l)}
n(Hh,H);Hh.prototype.w=function(a){if(!("*"!=this.g&&a.origin!=this.g||this.f&&a.source!=this.f)&&r(a.data)){try{var b=JSON.parse(a.data)}catch(c){return}if(!(null==b||this.C&&(this.sessionId&&this.sessionId!=b.id||this.channel&&this.channel!=b.channel))&&b)switch(b.event){case "listening":"null"!=a.origin&&(this.g=this.o=a.origin);this.f=a.source;this.sessionId=b.id;this.b&&(this.b(),this.b=null);break;case "command":this.i&&(!this.j||0<=ya(this.j,b.func))&&this.i(b.func,b.args,a.origin)}}};
Hh.prototype.sendMessage=function(a,b){var c=b||this.f;if(c){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var d=Kc(a);c.postMessage(d,this.o)}catch(e){S(e,"WARNING")}}};
Hh.prototype.m=function(){window.removeEventListener("message",this.l);H.prototype.m.call(this)};function Ih(a,b,c){Hh.call(this,a,b,c||R("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname,"widget");this.j=this.b=this.i=null}
n(Ih,Hh);function Jh(){var a=this.f=new Ih(!!R("WIDGET_ID_ENFORCE")),b=y(this.Pa,this);a.i=b;a.j=null;this.f.channel="widget";if(a=R("WIDGET_ID"))this.f.sessionId=a;this.g=[];this.j=!1;this.i={}}
k=Jh.prototype;k.Pa=function(a,b,c){"addEventListener"==a&&b?(a=b[0],this.i[a]||"onReady"==a||(this.addEventListener(a,Kh(this,a)),this.i[a]=!0)):this.sa(a,b,c)};
k.sa=function(){};
function Kh(a,b){return y(function(a){this.sendMessage(b,a)},a)}
k.addEventListener=function(){};
k.za=function(){this.j=!0;this.sendMessage("initialDelivery",this.ba());this.sendMessage("onReady");D(this.g,this.ra,this);this.g=[]};
k.ba=function(){return null};
function Lh(a,b){a.sendMessage("infoDelivery",b)}
k.ra=function(a){this.j?this.f.sendMessage(a):this.g.push(a)};
k.sendMessage=function(a,b){this.ra({event:a,info:void 0==b?null:b})};
k.dispose=function(){this.f=null};function Mh(a){Jh.call(this);this.b=a;this.h=[];this.addEventListener("onReady",y(this.Na,this));this.addEventListener("onVideoProgress",y(this.Za,this));this.addEventListener("onVolumeChange",y(this.ab,this));this.addEventListener("onApiChange",y(this.Ua,this));this.addEventListener("onPlaybackQualityChange",y(this.Wa,this));this.addEventListener("onPlaybackRateChange",y(this.Xa,this));this.addEventListener("onStateChange",y(this.Ya,this));this.addEventListener("onWebglSettingsChanged",y(this.bb,
this))}
B(Mh,Jh);k=Mh.prototype;k.sa=function(a,b,c){if(this.b[a]){b=b||[];if(0<b.length&&wh(a)){var d=b;if(x(d[0])&&!w(d[0]))d=d[0];else{var e={};switch(a){case "loadVideoById":case "cueVideoById":e=yh.apply(window,d);break;case "loadVideoByUrl":case "cueVideoByUrl":e=xh.apply(window,d);break;case "loadPlaylist":case "cuePlaylist":e=zh.apply(window,d)}d=e}Ah(d);b.length=1;b[0]=d}this.b.handleExternalCall(a,b,c);wh(a)&&Lh(this,this.ba())}};
k.Na=function(){var a=y(this.za,this);this.f.b=a};
k.addEventListener=function(a,b){this.h.push({eventType:a,listener:b});this.b.addEventListener(a,b)};
k.ba=function(){if(!this.b)return null;var a=this.b.getApiInterface();Ca(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c],f=e;if(0==f.search("get")||0==f.search("is")){f=e;var g=0;0==f.search("get")?g=3:0==f.search("is")&&(g=2);f=f.charAt(g).toLowerCase()+f.substr(g+1);try{var h=this.b[e]();b[f]=h}catch(l){}}}b.videoData=this.b.getVideoData();b.currentTimeLastUpdated_=A()/1E3;return b};
k.Ya=function(a){a={playerState:a,currentTime:this.b.getCurrentTime(),duration:this.b.getDuration(),videoData:this.b.getVideoData(),videoStartBytes:0,videoBytesTotal:this.b.getVideoBytesTotal(),videoLoadedFraction:this.b.getVideoLoadedFraction(),playbackQuality:this.b.getPlaybackQuality(),availableQualityLevels:this.b.getAvailableQualityLevels(),videoUrl:this.b.getVideoUrl(),playlist:this.b.getPlaylist(),playlistIndex:this.b.getPlaylistIndex(),currentTimeLastUpdated_:A()/1E3,playbackRate:this.b.getPlaybackRate(),
mediaReferenceTime:this.b.getMediaReferenceTime()};this.b.getProgressState&&(a.progressState=this.b.getProgressState());this.b.getStoryboardFormat&&(a.storyboardFormat=this.b.getStoryboardFormat());Lh(this,a)};
k.Wa=function(a){Lh(this,{playbackQuality:a})};
k.Xa=function(a){Lh(this,{playbackRate:a})};
k.Ua=function(){for(var a=this.b.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.b.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var l=f[g],m=this.b.getOption(e,l);b[e][l]=m}}this.sendMessage("apiInfoDelivery",b)};
k.ab=function(){Lh(this,{muted:this.b.isMuted(),volume:this.b.getVolume()})};
k.Za=function(a){a={currentTime:a,videoBytesLoaded:this.b.getVideoBytesLoaded(),videoLoadedFraction:this.b.getVideoLoadedFraction(),currentTimeLastUpdated_:A()/1E3,playbackRate:this.b.getPlaybackRate(),mediaReferenceTime:this.b.getMediaReferenceTime()};this.b.getProgressState&&(a.progressState=this.b.getProgressState());Lh(this,a)};
k.bb=function(){if(this.b.getSphericalProperties){var a={sphericalProperties:this.b.getSphericalProperties()};Lh(this,a)}};
k.dispose=function(){Mh.u.dispose.call(this);for(var a=0;a<this.h.length;a++){var b=this.h[a];this.b.removeEventListener(b.eventType,b.listener)}this.h=[]};function Nh(){H.call(this);this.b=new J;vc(this,z(wc,this.b))}
B(Nh,H);Nh.prototype.subscribe=function(a,b,c){return this.h?0:this.b.subscribe(a,b,c)};
Nh.prototype.j=function(a,b){this.h||this.b.I.apply(this.b,arguments)};function Oh(a,b,c){Nh.call(this);this.f=a;this.g=b;this.i=c}
B(Oh,Nh);function Ch(a,b,c){if(!a.h){var d=a.f;d.h||a.g!=d.b||(a={id:a.i,command:b},c&&(a.data=c),d.b.postMessage(Kc(a),d.g))}}
Oh.prototype.m=function(){this.g=this.f=null;Oh.u.m.call(this)};function Ph(a,b,c){H.call(this);this.b=a;this.g=c;this.i=W(window,"message",y(this.j,this));this.f=new Oh(this,a,b);vc(this,z(wc,this.f))}
B(Ph,H);Ph.prototype.j=function(a){var b;if(b=!this.h)if(b=a.origin==this.g)a:{b=this.b;do{b:{var c=a.source;do{if(c==b){c=!0;break b}if(c==c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(b=a.data,r(b))){try{b=JSON.parse(b)}catch(d){return}b.command&&(c=this.f,c.h||c.j("command",b.command,b.data,a.origin))}};
Ph.prototype.m=function(){wf(this.i);this.b=null;Ph.u.m.call(this)};function Qh(){var a=bb(Rh),b;return dd(new I(function(c,d){a.onSuccess=function(a){He(a)?c(a):d(new Sh("Request failed, status="+a.status,"net.badstatus",a))};
a.onError=function(a){d(new Sh("Unknown request error","net.unknown",a))};
a.L=function(a){d(new Sh("Request timed out","net.timeout",a))};
b=Pe("//googleads.g.doubleclick.net/pagead/id",a)}),function(a){a instanceof ed&&b.abort();
return Wc(a)})}
function Sh(a,b){C.call(this,a+", errorCode="+b);this.errorCode=b;this.name="PromiseAjaxError"}
n(Sh,C);function Th(a){this.h=void 0===a?null:a;this.f=0;this.b=null}
Th.prototype.then=function(a,b,c){return this.h?this.h.then(a,b,c):1===this.f&&a?(a=a.call(c,this.b),Rc(a)?a:Uh(a)):2===this.f&&b?(a=b.call(c,this.b),Rc(a)?a:Vh(a)):this};
Th.prototype.getValue=function(){return this.b};
Qc(Th);function Vh(a){var b=new Th;a=void 0===a?null:a;b.f=2;b.b=void 0===a?null:a;return b}
function Uh(a){var b=new Th;a=void 0===a?null:a;b.f=1;b.b=void 0===a?null:a;return b}
;function Wh(a){C.call(this,a.message||a.description||a.name);this.isMissing=a instanceof Xh;this.isTimeout=a instanceof Sh&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof ed}
n(Wh,C);Wh.prototype.name="BiscottiError";function Xh(){C.call(this,"Biscotti ID is missing from server")}
n(Xh,C);Xh.prototype.name="BiscottiMissingError";var Rh={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Yh=null;function Zh(){if("1"===Wa(ae(),"args","privembed"))return Wc(Error("Biscotti ID is not available in private embed mode"));Yh||(Yh=dd(Qh().then($h),function(a){return ai(2,a)}));
return Yh}
function $h(a){a=a.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new Xh;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new Xh;a=a.id;bi(a);Yh=Uh(a);ci(18E5,2);return a}
function ai(a,b){var c=new Wh(b);bi("");Yh=Vh(c);0<a&&ci(12E4,a-1);throw c;}
function ci(a,b){V(function(){dd(Qh().then($h,function(a){return ai(b,a)}),oa)},a)}
function bi(a){t("yt.ads.biscotti.lastId_",a,void 0)}
function di(){try{var a=v("yt.ads.biscotti.getId_");return a?a():Zh()}catch(b){return Wc(b)}}
;function ei(a){C.apply(this,arguments)}
n(ei,C);ei.prototype.name="YuzuError";function fi(){var a=new ei("ID is missing"),b=new ei("Timeout"),c=null,d=!1;Xd(function(){c=Vd();d=!0});
if(d)return c?Uh(c):Vh(a);var e=new I(function(b,c){Xd(function(){var d=Vd();d?b(d):c(a)})}),f=Hd().then(function(){return Wc(b)});
return bd(Zc([e,f]),function(){return f.cancel()})}
;function gi(a){if("1"!==Wa(ae(),"args","privembed")){a&&(v("yt.ads.biscotti.getId_")||xa("yt.ads.biscotti.getId_",Zh));try{var b=di();if(U("enable_yuzu")){v("yt.ads.yuzu.getId_")||t("yt.ads.yuzu.getId_",fi,void 0);try{var c=v("yt.ads.yuzu.getId_")()}catch(d){c=Wc(d)}}else c=Wc(new ei("unimplemented"));$c([b,c]).then(function(a){var b=a[0];a=a[1];if(b.Y||a.Y){b=b.value;a=a.value;var c={};c.dt=Vb;c.flash="0";a:{try{var d=window.top.location.href}catch(Sa){d=2;break a}d=null!=d?d==window.document.location.href?
0:1:2}d=(c.frm=d,c);d.u_tz=-(new Date).getTimezoneOffset();var h=void 0===h?G:h;try{var l=h.history.length}catch(Sa){l=0}d.u_his=l;d.u_java=!!G.navigator&&"unknown"!==typeof G.navigator.javaEnabled&&!!G.navigator.javaEnabled&&G.navigator.javaEnabled();G.screen&&(d.u_h=G.screen.height,d.u_w=G.screen.width,d.u_ah=G.screen.availHeight,d.u_aw=G.screen.availWidth,d.u_cd=G.screen.colorDepth);G.navigator&&G.navigator.plugins&&(d.u_nplug=G.navigator.plugins.length);G.navigator&&G.navigator.mimeTypes&&(d.u_nmime=
G.navigator.mimeTypes.length);d.ca_type="image";if(U("enable_server_side_search_pyv")||U("enable_server_side_mweb_search_pyv")){l=window;try{var m=l.screenX;var u=l.screenY}catch(Sa){}try{var M=l.outerWidth;var aa=l.outerHeight}catch(Sa){}try{var Lg=l.innerWidth;var Mg=l.innerHeight}catch(Sa){}m=[l.screenLeft,l.screenTop,m,u,l.screen?l.screen.availWidth:void 0,l.screen?l.screen.availTop:void 0,M,aa,Lg,Mg];u=window.top;try{var T=(u||window).document,Ra="CSS1Compat"==T.compatMode?T.documentElement:
T.body;var Fa=(new Hb(Ra.clientWidth,Ra.clientHeight)).round()}catch(Sa){Fa=new Hb(-12245933,-12245933)}T={};Ra=0;p.SVGElement&&p.document.createElementNS&&(Ra|=1);T.bc=Ra;T.bih=Fa.height;T.biw=Fa.width;T.brdim=m.join();Fa=(T.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[Tb.visibilityState||Tb.webkitVisibilityState||Tb.mozVisibilityState||""]||0,T.wgl=!!G.WebGLRenderingContext,T);for(var Nd in Fa)d[Nd]=Fa[Nd]}void 0!==b&&(d.bid=b);void 0!==a&&(d.anid=a);d.bsq=hi++;Ve("//www.youtube.com/ad_data_204",
{Da:!1,A:d,withCredentials:!0})}});
V(gi,18E5)}catch(d){S(d)}}}
var hi=0;var Z=v("ytglobal.prefsUserPrefsPrefs_")||{};t("ytglobal.prefsUserPrefsPrefs_",Z,void 0);function ii(){this.b=R("ALT_PREF_COOKIE_NAME","PREF");var a=ac.get(""+this.b,void 0);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Z[d]=c.toString())}}}
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
function ui(a){var b=gg();a=pi[a.id];b&&a&&(U("interaction_click_on_gel_web")?Pf("visualElementGestured",{csn:b,ve:dg(a),gestureType:"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK"}):kg({click:{csn:b,visualElement:dg(a)}}))}
function vi(a){a=a.ids;var b=gg();if(b)for(var c=0;c<a.length;c++){var d=pi[a[c]];d&&Pf("visualElementShown",{csn:b,ve:dg(d),eventType:1})}}
function wi(){var a=mi;a&&a.startInteractionLogging&&a.startInteractionLogging()}
;t("yt.setConfig",Q,void 0);t("yt.config.set",Q,void 0);t("yt.setMsg",df,void 0);t("yt.msgs.set",df,void 0);t("yt.logging.errors.log",bf,void 0);
t("writeEmbed",function(){var a=R("PLAYER_CONFIG",void 0);gi(!0);"gvn"==a.args.ps&&(document.body.style.backgroundColor="transparent");var b=document.referrer,c=R("POST_MESSAGE_ORIGIN");window!=window.top&&b&&b!=document.URL&&(a.args.loaderUrl=b);R("LIGHTWEIGHT_AUTOPLAY")&&(a.args.autoplay="1");a.args.autoplay&&Ah(a.args);mi=a=rh(a);a.addEventListener("onScreenChanged",si);a.addEventListener("onLogClientVeCreated",ri);a.addEventListener("onLogServerVeCreated",ti);a.addEventListener("onLogToGel",qi);
a.addEventListener("onLogVeClicked",ui);a.addEventListener("onLogVesShown",vi);a.addEventListener("onReady",wi);b=R("POST_MESSAGE_ID","player");R("ENABLE_JS_API")?oi=new Mh(a):R("ENABLE_POST_API")&&r(b)&&r(c)&&(ni=new Ph(window.parent,b,c),oi=new Gh(a,ni.f));R("BG_P")&&(R("BG_I")||R("BG_IU"))&&Be();nf()},void 0);
t("yt.www.watch.ads.restrictioncookie.spr",function(a){Ye(a+"mac_204?action_fcts=1");return!0},void 0);
var xi=be(function(){Pg("ol");var a=ii.getInstance(),b=!!((li("f"+(Math.floor(119/31)+1))||0)&67108864),c=1<window.devicePixelRatio;if(document.body&&zc(document.body,"exp-invert-logo"))if(c&&!zc(document.body,"inverted-hdpi")){var d=document.body;d.classList?d.classList.add("inverted-hdpi"):zc(d,"inverted-hdpi")||(d.className+=0<d.className.length?" inverted-hdpi":"inverted-hdpi")}else!c&&zc(document.body,"inverted-hdpi")&&Ac();b!=c&&(b="f"+(Math.floor(119/31)+1),d=li(b)||0,d=c?d|67108864:d&-67108865,
0==d?delete Z[b]:Z[b]=d.toString(16).toString(),a.save())}),yi=be(function(){var a=mi;
a&&a.sendAbandonmentPing&&a.sendAbandonmentPing();R("PL_ATT")&&(Ae=null);a=0;for(var b=lf.length;a<b;a++)kf(lf[a]);lf.length=0;ye("//static.doubleclick.net/instream/ad_status.js");mf=!1;Q("DCLKSTAT",0);xc(oi,ni);if(a=mi)a.removeEventListener("onScreenChanged",si),a.removeEventListener("onLogClientVeCreated",ri),a.removeEventListener("onLogServerVeCreated",ti),a.removeEventListener("onLogToGel",qi),a.removeEventListener("onLogVeClicked",ui),a.removeEventListener("onLogVesShown",vi),a.removeEventListener("onReady",
wi),a.destroy();pi={}});
window.addEventListener?(window.addEventListener("load",xi),window.addEventListener("unload",yi)):window.attachEvent&&(window.attachEvent("onload",xi),window.attachEvent("onunload",yi));xa("yt.abuse.botguardInitialized",v("yt.abuse.botguardInitialized")||De);xa("yt.abuse.invokeBotguard",v("yt.abuse.invokeBotguard")||Ee);xa("yt.abuse.dclkstatus.checkDclkStatus",v("yt.abuse.dclkstatus.checkDclkStatus")||of);xa("yt.player.exports.navigate",v("yt.player.exports.navigate")||ig);
xa("yt.util.activity.init",v("yt.util.activity.init")||zf);xa("yt.util.activity.getTimeSinceActive",v("yt.util.activity.getTimeSinceActive")||Cf);xa("yt.util.activity.setTimestamp",v("yt.util.activity.setTimestamp")||Af);}).call(this);
