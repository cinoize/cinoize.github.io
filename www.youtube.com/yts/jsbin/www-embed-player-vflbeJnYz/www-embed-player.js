(function(){var h;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
function ba(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
var ca="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},da;
if("function"==typeof Object.setPrototypeOf)da=Object.setPrototypeOf;else{var ea;a:{var fa={pa:!0},ha={};try{ha.__proto__=fa;ea=ha.pa;break a}catch(a){}ea=!1}da=ea?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ia=da;
function n(a,b){a.prototype=ca(b.prototype);a.prototype.constructor=a;if(ia)ia(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.A=b.prototype}
var ja="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},ka="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;
function la(a,b){if(b){for(var c=ka,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in c||(c[f]={});c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ja(c,d,{configurable:!0,writable:!0,value:f})}}
function ma(){ma=function(){};
ka.Symbol||(ka.Symbol=na)}
var na=function(){var a=0;return function(b){return"jscomp_symbol_"+(b||"")+a++}}();
function oa(){ma();var a=ka.Symbol.iterator;a||(a=ka.Symbol.iterator=ka.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&ja(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return pa(aa(this))}});
oa=function(){}}
function pa(a){oa();a={next:a};a[ka.Symbol.iterator]=function(){return this};
return a}
function p(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var qa="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)p(d,e)&&(a[e]=d[e])}return a};
la("Object.assign",function(a){return a||qa});
la("WeakMap",function(a){function b(a){this.b=(g+=Math.random()+1).toString();if(a){a=ba(a);for(var b;!(b=a.next()).done;)b=b.value,this.set(b[0],b[1])}}
function c(){}
function d(a){p(a,f)||ja(a,f,{value:new c})}
function e(a){var b=Object[a];b&&(Object[a]=function(a){if(a instanceof c)return a;d(a);return b(a)})}
if(function(){if(!a||!Object.seal)return!1;try{var b=Object.seal({}),c=Object.seal({}),d=new a([[b,2],[c,3]]);if(2!=d.get(b)||3!=d.get(c))return!1;d["delete"](b);d.set(c,4);return!d.has(b)&&4==d.get(c)}catch(A){return!1}}())return a;
var f="$jscomp_hidden_"+Math.random();e("freeze");e("preventExtensions");e("seal");var g=0;b.prototype.set=function(a,b){d(a);if(!p(a,f))throw Error("WeakMap key fail: "+a);a[f][this.b]=b;return this};
b.prototype.get=function(a){return p(a,f)?a[f][this.b]:void 0};
b.prototype.has=function(a){return p(a,f)&&p(a[f],this.b)};
b.prototype["delete"]=function(a){return p(a,f)&&p(a[f],this.b)?delete a[f][this.b]:!1};
return b});
la("Map",function(a){function b(){var a={};return a.previous=a.next=a.head=a}
function c(a,b){var c=a.b;return pa(function(){if(c){for(;c.head!=a.b;)c=c.previous;for(;c.next!=c.head;)return c=c.next,{done:!1,value:b(c)};c=null}return{done:!0,value:void 0}})}
function d(a,b){var c=b&&typeof b;"object"==c||"function"==c?f.has(b)?c=f.get(b):(c=""+ ++g,f.set(b,c)):c="p_"+b;var d=a.f[c];if(d&&p(a.f,c))for(var e=0;e<d.length;e++){var k=d[e];if(b!==b&&k.key!==k.key||b===k.key)return{id:c,list:d,index:e,o:k}}return{id:c,list:d,index:-1,o:void 0}}
function e(a){this.f={};this.b=b();this.size=0;if(a){a=ba(a);for(var c;!(c=a.next()).done;)c=c.value,this.set(c[0],c[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),c=new a(ba([[b,"s"]]));if("s"!=c.get(b)||1!=c.size||c.get({x:4})||c.set({x:4},"t")!=c||2!=c.size)return!1;var d=c.entries(),e=d.next();if(e.done||e.value[0]!=b||"s"!=e.value[1])return!1;e=d.next();return e.done||4!=e.value[0].x||"t"!=e.value[1]||!d.next().done?!1:!0}catch(v){return!1}}())return a;
oa();var f=new WeakMap;e.prototype.set=function(a,b){a=0===a?0:a;var c=d(this,a);c.list||(c.list=this.f[c.id]=[]);c.o?c.o.value=b:(c.o={next:this.b,previous:this.b.previous,head:this.b,key:a,value:b},c.list.push(c.o),this.b.previous.next=c.o,this.b.previous=c.o,this.size++);return this};
e.prototype["delete"]=function(a){a=d(this,a);return a.o&&a.list?(a.list.splice(a.index,1),a.list.length||delete this.f[a.id],a.o.previous.next=a.o.next,a.o.next.previous=a.o.previous,a.o.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.f={};this.b=this.b.previous=b();this.size=0};
e.prototype.has=function(a){return!!d(this,a).o};
e.prototype.get=function(a){return(a=d(this,a).o)&&a.value};
e.prototype.entries=function(){return c(this,function(a){return[a.key,a.value]})};
e.prototype.keys=function(){return c(this,function(a){return a.key})};
e.prototype.values=function(){return c(this,function(a){return a.value})};
e.prototype.forEach=function(a,b){for(var c=this.entries(),d;!(d=c.next()).done;)d=d.value,a.call(b,d[1],d[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
la("Set",function(a){function b(a){this.b=new Map;if(a){a=ba(a);for(var b;!(b=a.next()).done;)this.add(b.value)}this.size=this.b.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),d=new a(ba([b]));if(!d.has(b)||1!=d.size||d.add(b)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=b||f.value[1]!=b)return!1;f=e.next();return f.done||f.value[0]==b||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
oa();b.prototype.add=function(a){a=0===a?0:a;this.b.set(a,a);this.size=this.b.size;return this};
b.prototype["delete"]=function(a){a=this.b["delete"](a);this.size=this.b.size;return a};
b.prototype.clear=function(){this.b.clear();this.size=0};
b.prototype.has=function(a){return this.b.has(a)};
b.prototype.entries=function(){return this.b.entries()};
b.prototype.values=function(){return this.b.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(a,b){var c=this;this.b.forEach(function(d){return a.call(b,d,d,c)})};
return b});
la("Object.is",function(a){return a?a:function(a,c){return a===c?0!==a||1/a===1/c:a!==a&&c!==c}});
la("String.prototype.includes",function(a){return a?a:function(a,c){if(null==this)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(a instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return-1!==(this+"").indexOf(a,c||0)}});
(function(){function a(){function a(){}
Reflect.construct(a,[],function(){});
return new a instanceof a}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(a,d,e){a=b(a,d);e&&Reflect.setPrototypeOf(a,e.prototype);return a}}return function(a,b,e){void 0===e&&(e=a);
e=ca(e.prototype||Object.prototype);return Function.prototype.apply.call(a,e,b)||e}})();
var q=this;function r(a){return void 0!==a}
function t(a){return"string"==typeof a}
function u(a,b,c){a=a.split(".");c=c||q;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&r(b)?c[d]=b:c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}}
var ra=/^[\w+/_-]+[=]{0,2}$/,sa=null;function w(a,b){for(var c=a.split("."),d=b||q,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function ta(){}
function ua(a){a.ca=void 0;a.getInstance=function(){return a.ca?a.ca:a.ca=new a}}
function va(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function wa(a){return"array"==va(a)}
function xa(a){var b=va(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function ya(a){return"function"==va(a)}
function x(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
var za="closure_uid_"+(1E9*Math.random()>>>0),Aa=0;function Ba(a,b,c){return a.call.apply(a.bind,arguments)}
function Ca(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function y(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?y=Ba:y=Ca;return y.apply(null,arguments)}
function Da(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}
var z=Date.now||function(){return+new Date};
function Ea(a,b){u(a,b,void 0)}
function B(a,b){function c(){}
c.prototype=b.prototype;a.A=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.fb=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}}
;var Ga=document,C=window;function D(a){if(Error.captureStackTrace)Error.captureStackTrace(this,D);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
B(D,Error);D.prototype.name="CustomError";var Ha=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(t(a))return t(b)&&1==b.length?a.indexOf(b,0):-1;
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},E=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=t(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Ia=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f=t(a)?a.split(""):a,g=0;g<c;g++)if(g in f){var k=f[g];
b.call(void 0,k,g,a)&&(d[e++]=k)}return d},Ja=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e=t(a)?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},Ka=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
E(a,function(c,f){d=b.call(void 0,d,c,f,a)});
return d};
function La(a,b){a:{var c=a.length;for(var d=t(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:t(a)?a.charAt(c):a[c]}
function Ma(a,b){var c=Ha(a,b);0<=c&&Array.prototype.splice.call(a,c,1)}
function Na(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Oa(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(xa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;var Pa=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function Qa(a){if(!Ra.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(Sa,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(Ta,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(Ua,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(Wa,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(Xa,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(Ya,"&#0;"));return a}
var Sa=/&/g,Ta=/</g,Ua=/>/g,Wa=/"/g,Xa=/'/g,Ya=/\x00/g,Ra=/[\x00&<>"']/;function Za(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var $a;a:{var ab=q.navigator;if(ab){var bb=ab.userAgent;if(bb){$a=bb;break a}}$a=""}function F(a){return-1!=$a.indexOf(a)}
;function cb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function db(a,b){var c=xa(b),d=c?b:arguments;for(c=c?0:1;c<d.length;c++){if(null==a)return;a=a[d[c]]}return a}
function eb(a){var b=fb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function gb(a){for(var b in a)return!1;return!0}
function hb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function ib(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(c in b)if(!(c in a))return!1;return!0}
function jb(a){var b={},c;for(c in a)b[c]=a[c];return b}
var kb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function lb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<kb.length;f++)c=kb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function mb(a){mb[" "](a);return a}
mb[" "]=ta;var nb=F("Opera"),ob=F("Trident")||F("MSIE"),pb=F("Edge"),qb=F("Gecko")&&!(-1!=$a.toLowerCase().indexOf("webkit")&&!F("Edge"))&&!(F("Trident")||F("MSIE"))&&!F("Edge"),rb=-1!=$a.toLowerCase().indexOf("webkit")&&!F("Edge");function sb(){var a=q.document;return a?a.documentMode:void 0}
var tb;a:{var ub="",vb=function(){var a=$a;if(qb)return/rv:([^\);]+)(\)|;)/.exec(a);if(pb)return/Edge\/([\d\.]+)/.exec(a);if(ob)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(rb)return/WebKit\/(\S+)/.exec(a);if(nb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
vb&&(ub=vb?vb[1]:"");if(ob){var wb=sb();if(null!=wb&&wb>parseFloat(ub)){tb=String(wb);break a}}tb=ub}var xb=tb,yb;var zb=q.document;yb=zb&&ob?sb()||("CSS1Compat"==zb.compatMode?parseInt(xb,10):5):void 0;var Ab=null,Bb=null;function Cb(a){this.b=a||{cookie:""}}
h=Cb.prototype;h.isEnabled=function(){return navigator.cookieEnabled};
h.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');r(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(z()+1E3*c)).toUTCString();this.b.cookie=a+"="+b+e+d+c+f};
h.get=function(a,b){for(var c=a+"=",d=(this.b.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Pa(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
h.remove=function(a,b,c){var d=r(this.get(a));this.set(a,"",0,b,c);return d};
h.isEmpty=function(){return!this.b.cookie};
h.clear=function(){for(var a=(this.b.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=Pa(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Db=new Cb("undefined"==typeof document?null:document);Db.f=3950;function Eb(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var Fb=!ob||9<=Number(yb);function Gb(){this.b="";this.f=Hb}
Gb.prototype.J=!0;Gb.prototype.I=function(){return this.b};
Gb.prototype.ba=!0;Gb.prototype.Y=function(){return 1};
function Ib(a){return a instanceof Gb&&a.constructor===Gb&&a.f===Hb?a.b:"type_error:TrustedResourceUrl"}
var Hb={};function G(){this.b="";this.f=Jb}
G.prototype.J=!0;G.prototype.I=function(){return this.b};
G.prototype.ba=!0;G.prototype.Y=function(){return 1};
function Kb(a){return a instanceof G&&a.constructor===G&&a.f===Jb?a.b:"type_error:SafeUrl"}
var Lb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function Mb(a){if(a instanceof G)return a;a="object"==typeof a&&a.J?a.I():String(a);Lb.test(a)||(a="about:invalid#zClosurez");return Nb(a)}
var Jb={};function Nb(a){var b=new G;b.b=a;return b}
Nb("about:blank");function Ob(){this.b="";this.g=Pb;this.f=null}
Ob.prototype.ba=!0;Ob.prototype.Y=function(){return this.f};
Ob.prototype.J=!0;Ob.prototype.I=function(){return this.b};
var Pb={};function Qb(a,b){var c=new Ob;c.b=a;c.f=b;return c}
Qb("<!DOCTYPE html>",0);Qb("",0);Qb("<br>",0);function Rb(a,b){var c=b instanceof G?b:Mb(b);a.href=Kb(c)}
function Sb(a,b){a.src=Ib(b);if(null===sa){a:{var c=q.document;if((c=c.querySelector&&c.querySelector("script[nonce]"))&&(c=c.nonce||c.getAttribute("nonce"))&&ra.test(c))break a;c=null}sa=c||""}(c=sa)&&a.setAttribute("nonce",c)}
;function Tb(a,b){this.x=r(a)?a:0;this.y=r(b)?b:0}
h=Tb.prototype;h.clone=function(){return new Tb(this.x,this.y)};
h.equals=function(a){return a instanceof Tb&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
h.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
h.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
h.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function Ub(a,b){this.width=a;this.height=b}
h=Ub.prototype;h.clone=function(){return new Ub(this.width,this.height)};
h.aspectRatio=function(){return this.width/this.height};
h.isEmpty=function(){return!(this.width*this.height)};
h.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
h.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
h.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Vb(a){var b=document;return t(a)?b.getElementById(a):a}
function Wb(a,b){cb(b,function(b,d){b&&"object"==typeof b&&b.J&&(b=b.I());"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:Xb.hasOwnProperty(d)?a.setAttribute(Xb[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})}
var Xb={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function Yb(a,b,c){var d=arguments,e=document,f=String(d[0]),g=d[1];if(!Fb&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',Qa(g.name),'"');if(g.type){f.push(' type="',Qa(g.type),'"');var k={};lb(k,g);delete k.type;g=k}f.push(">");f=f.join("")}f=e.createElement(f);g&&(t(g)?f.className=g:wa(g)?f.className=g.join(" "):Wb(f,g));2<d.length&&Zb(e,f,d);return f}
function Zb(a,b,c){function d(c){c&&b.appendChild(t(c)?a.createTextNode(c):c)}
for(var e=2;e<c.length;e++){var f=c[e];if(!xa(f)||x(f)&&0<f.nodeType)d(f);else{a:{if(f&&"number"==typeof f.length){if(x(f)){var g="function"==typeof f.item||"string"==typeof f.item;break a}if(ya(f)){g="function"==typeof f.item;break a}}g=!1}E(g?Na(f):f,d)}}}
function $b(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function ac(a){bc();var b=new Gb;b.b=a;return b}
var bc=ta;function cc(){var a=dc;try{var b;if(b=!!a&&null!=a.location.href)a:{try{mb(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}}
function ec(a){var b=fc;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function gc(){var a=[];ec(function(b){a.push(b)});
return a}
var fc={Ra:"allow-forms",Sa:"allow-modals",Ta:"allow-orientation-lock",Ua:"allow-pointer-lock",Va:"allow-popups",Wa:"allow-popups-to-escape-sandbox",Xa:"allow-presentation",Ya:"allow-same-origin",Za:"allow-scripts",ab:"allow-top-navigation",bb:"allow-top-navigation-by-user-activation"},hc=Eb(function(){return gc()});
function ic(){var a=document.createElement("IFRAME").sandbox,b=a&&a.supports;if(!b)return{};var c={};E(hc(),function(d){b.call(a,d)&&(c[d]=!0)});
return c}
;function jc(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var kc=!!window.google_async_iframe_id,dc=kc&&window.parent||window;var lc=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function H(a){return a.match(lc)}
function mc(a){return a?decodeURI(a):a}
function nc(a,b,c){if(wa(b))for(var d=0;d<b.length;d++)nc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function oc(a){var b=[],c;for(c in a)nc(c,a[c],b);return b.join("&")}
function pc(a,b){var c=oc(b);if(c){var d=a.indexOf("#");0>d&&(d=a.length);var e=a.indexOf("?");if(0>e||e>d){e=d;var f=""}else f=a.substring(e+1,d);d=[a.substr(0,e),f,a.substr(d)];e=d[1];d[1]=c?e?e+"&"+c:c:e;c=d[0]+(d[1]?"?"+d[1]:"")+d[2]}else c=a;return c}
;var qc=null;function rc(){var a=q.performance;return a&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):z()}
function sc(){var a=void 0===a?q:a;return(a=a.performance)&&a.now?a.now():null}
;function tc(a,b,c){this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=this.label+"_"+this.type+"_"+Math.random();this.slotId=void 0}
;var I=q.performance,uc=!!(I&&I.mark&&I.measure&&I.clearMarks),vc=Eb(function(){var a;if(a=uc){var b;if(null===qc){qc="";try{a="";try{a=q.top.location.hash}catch(c){a=q.location.hash}a&&(qc=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=qc;a=!!b.indexOf&&0<=b.indexOf("1337")}return a});
function wc(){var a=xc;this.events=[];this.f=a||q;var b=null;a&&(a.google_js_reporting_queue=a.google_js_reporting_queue||[],this.events=a.google_js_reporting_queue,b=a.google_measure_js_timing);this.b=vc()||(null!=b?b:1>Math.random())}
wc.prototype.disable=function(){this.b=!1;this.events!=this.f.google_js_reporting_queue&&(vc()&&E(this.events,yc),this.events.length=0)};
function yc(a){a&&I&&vc()&&(I.clearMarks("goog_"+a.uniqueId+"_start"),I.clearMarks("goog_"+a.uniqueId+"_end"))}
wc.prototype.start=function(a,b){if(!this.b)return null;var c=sc()||rc();c=new tc(a,b,c);var d="goog_"+c.uniqueId+"_start";I&&vc()&&I.mark(d);return c};
wc.prototype.end=function(a){if(this.b&&"number"==typeof a.value){var b=sc()||rc();a.duration=b-a.value;b="goog_"+a.uniqueId+"_end";I&&vc()&&I.mark(b);this.b&&this.events.push(a)}};if(kc&&!cc()){var zc="."+Ga.domain;try{for(;2<zc.split(".").length&&!cc();)Ga.domain=zc=zc.substr(zc.indexOf(".")+1),dc=window.parent}catch(a){}cc()||(dc=window)}var xc=dc,Ac=new wc;if("complete"==xc.document.readyState)xc.google_measure_js_timing||Ac.disable();else if(Ac.b){var Bc=function(){xc.google_measure_js_timing||Ac.disable()},Cc=xc;
Cc.addEventListener&&Cc.addEventListener("load",Bc,!1)};var Dc=(new Date).getTime();function Ec(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"app"!==a)throw Error("Invalid URI scheme in origin: "+a);c="";var d=b.indexOf(":");if(-1!=d){var e=
b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function Fc(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;A=m=0}
function b(a){for(var b=g,c=0;64>c;c+=4)b[c/4]=a[c]<<24|a[c+1]<<16|a[c+2]<<8|a[c+3];for(c=16;80>c;c++)a=b[c-3]^b[c-8]^b[c-14]^b[c-16],b[c]=(a<<1|a>>>31)&4294967295;a=e[0];var d=e[1],f=e[2],k=e[3],l=e[4];for(c=0;80>c;c++){if(40>c)if(20>c){var m=k^d&(f^k);var v=1518500249}else m=d^f^k,v=1859775393;else 60>c?(m=d&f|k&(d|f),v=2400959708):(m=d^f^k,v=3395469782);m=((a<<5|a>>>27)&4294967295)+m+l+v+b[c]&4294967295;l=k;k=f;f=(d<<30|d>>>2)&4294967295;d=a;a=m}e[0]=e[0]+a&4294967295;e[1]=e[1]+d&4294967295;e[2]=
e[2]+f&4294967295;e[3]=e[3]+k&4294967295;e[4]=e[4]+l&4294967295}
function c(a,c){if("string"===typeof a){a=unescape(encodeURIComponent(a));for(var d=[],e=0,g=a.length;e<g;++e)d.push(a.charCodeAt(e));a=d}c||(c=a.length);d=0;if(0==m)for(;d+64<c;)b(a.slice(d,d+64)),d+=64,A+=64;for(;d<c;)if(f[m++]=a[d++],A++,64==m)for(m=0,b(f);d+64<c;)b(a.slice(d,d+64)),d+=64,A+=64}
function d(){var a=[],d=8*A;56>m?c(k,56-m):c(k,64-(m-56));for(var g=63;56<=g;g--)f[g]=d&255,d>>>=8;b(f);for(g=d=0;5>g;g++)for(var l=24;0<=l;l-=8)a[d++]=e[g]>>l&255;return a}
for(var e=[],f=[],g=[],k=[128],l=1;64>l;++l)k[l]=0;var m,A;a();return{reset:a,update:c,digest:d,ra:function(){for(var a=d(),b="",c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}}}
;function Gc(a,b,c){var d=[],e=[];if(1==(wa(c)?2:1))return e=[b,a],E(d,function(a){e.push(a)}),Hc(e.join(" "));
var f=[],g=[];E(c,function(a){g.push(a.key);f.push(a.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];E(d,function(a){e.push(a)});
a=Hc(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Hc(a){var b=Fc();b.update(a);return b.ra().toLowerCase()}
;function Ic(a){var b=Ec(String(q.location.href)),c=q.__OVERRIDE_SID;null==c&&(c=(new Cb(document)).get("SID"));if(c&&(b=(c=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?q.__SAPISID:q.__APISID,null==b&&(b=(new Cb(document)).get(c?"SAPISID":"APISID")),b)){c=c?"SAPISIDHASH":"APISIDHASH";var d=String(q.location.href);return d&&b&&c?[c,Gc(Ec(d),b,a||null)].join(" "):null}return null}
;function Jc(a,b){this.g=a;this.h=b;this.f=0;this.b=null}
Jc.prototype.get=function(){if(0<this.f){this.f--;var a=this.b;this.b=a.next;a.next=null}else a=this.g();return a};
function Kc(a,b){a.h(b);100>a.f&&(a.f++,b.next=a.b,a.b=b)}
;function Lc(a){q.setTimeout(function(){throw a;},0)}
var Mc;
function Nc(){var a=q.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!F("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow;a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host;a=y(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!F("Trident")&&!F("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(r(c.next)){c=c.next;var a=c.ga;c.ga=null;a()}};
return function(a){d.next={ga:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){q.setTimeout(a,0)}}
;function Oc(){this.f=this.b=null}
var Qc=new Jc(function(){return new Pc},function(a){a.reset()});
Oc.prototype.add=function(a,b){var c=Qc.get();c.set(a,b);this.f?this.f.next=c:this.b=c;this.f=c};
Oc.prototype.remove=function(){var a=null;this.b&&(a=this.b,this.b=this.b.next,this.b||(this.f=null),a.next=null);return a};
function Pc(){this.next=this.scope=this.b=null}
Pc.prototype.set=function(a,b){this.b=a;this.scope=b;this.next=null};
Pc.prototype.reset=function(){this.next=this.scope=this.b=null};function Rc(a,b){Sc||Tc();Uc||(Sc(),Uc=!0);Vc.add(a,b)}
var Sc;function Tc(){if(q.Promise&&q.Promise.resolve){var a=q.Promise.resolve(void 0);Sc=function(){a.then(Wc)}}else Sc=function(){var a=Wc;
!ya(q.setImmediate)||q.Window&&q.Window.prototype&&!F("Edge")&&q.Window.prototype.setImmediate==q.setImmediate?(Mc||(Mc=Nc()),Mc(a)):q.setImmediate(a)}}
var Uc=!1,Vc=new Oc;function Wc(){for(var a;a=Vc.remove();){try{a.b.call(a.scope)}catch(b){Lc(b)}Kc(Qc,a)}Uc=!1}
;function Xc(){this.f=-1}
;function Yc(){this.f=64;this.b=[];this.j=[];this.u=[];this.h=[];this.h[0]=128;for(var a=1;a<this.f;++a)this.h[a]=0;this.i=this.g=0;this.reset()}
B(Yc,Xc);Yc.prototype.reset=function(){this.b[0]=1732584193;this.b[1]=4023233417;this.b[2]=2562383102;this.b[3]=271733878;this.b[4]=3285377520;this.i=this.g=0};
function Zc(a,b,c){c||(c=0);var d=a.u;if(t(b))for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.b[0];c=a.b[1];var g=a.b[2],k=a.b[3],l=a.b[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=k^c&(g^k);var m=1518500249}else f=c^g^k,m=1859775393;else 60>e?(f=c&g|k&(c|g),m=2400959708):(f=c^g^k,m=
3395469782);f=(b<<5|b>>>27)+f+l+m+d[e]&4294967295;l=k;k=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.b[0]=a.b[0]+b&4294967295;a.b[1]=a.b[1]+c&4294967295;a.b[2]=a.b[2]+g&4294967295;a.b[3]=a.b[3]+k&4294967295;a.b[4]=a.b[4]+l&4294967295}
Yc.prototype.update=function(a,b){if(null!=a){r(b)||(b=a.length);for(var c=b-this.f,d=0,e=this.j,f=this.g;d<b;){if(0==f)for(;d<=c;)Zc(this,a,d),d+=this.f;if(t(a))for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.f){Zc(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.f){Zc(this,e);f=0;break}}this.g=f;this.i+=b}};
Yc.prototype.digest=function(){var a=[],b=8*this.i;56>this.g?this.update(this.h,56-this.g):this.update(this.h,this.f-(this.g-56));for(var c=this.f-1;56<=c;c--)this.j[c]=b&255,b/=256;Zc(this,this.j);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.b[c]>>d&255,++b;return a};function J(){this.f=this.f;this.u=this.u}
J.prototype.f=!1;J.prototype.dispose=function(){this.f||(this.f=!0,this.l())};
function $c(a,b){a.f?r(void 0)?b.call(void 0):b():(a.u||(a.u=[]),a.u.push(r(void 0)?y(b,void 0):b))}
J.prototype.l=function(){if(this.u)for(;this.u.length;)this.u.shift()()};
function ad(a){a&&"function"==typeof a.dispose&&a.dispose()}
function bd(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];xa(d)?bd.apply(null,d):ad(d)}}
;function cd(a){if(a.classList)return a.classList;a=a.className;return t(a)&&a.match(/\S+/g)||[]}
function dd(a,b){if(a.classList)var c=a.classList.contains(b);else c=cd(a),c=0<=Ha(c,b);return c}
function ed(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):dd(a,"inverted-hdpi")&&(a.className=Ia(cd(a),function(a){return"inverted-hdpi"!=a}).join(" "))}
;var fd="StopIteration"in q?q.StopIteration:{message:"StopIteration",stack:""};function gd(){}
gd.prototype.next=function(){throw fd;};
gd.prototype.F=function(){return this};
function hd(a){if(a instanceof gd)return a;if("function"==typeof a.F)return a.F(!1);if(xa(a)){var b=0,c=new gd;c.next=function(){for(;;){if(b>=a.length)throw fd;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function id(a,b){if(xa(a))try{E(a,b,void 0)}catch(c){if(c!==fd)throw c;}else{a=hd(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==fd)throw c;}}}
function jd(a){if(xa(a))return Na(a);a=hd(a);var b=[];id(a,function(a){b.push(a)});
return b}
;function kd(a,b){this.g={};this.b=[];this.h=this.f=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof kd)for(c=ld(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function ld(a){md(a);return a.b.concat()}
h=kd.prototype;h.equals=function(a,b){if(this===a)return!0;if(this.f!=a.f)return!1;var c=b||nd;md(this);for(var d,e=0;d=this.b[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function nd(a,b){return a===b}
h.isEmpty=function(){return 0==this.f};
h.clear=function(){this.g={};this.h=this.f=this.b.length=0};
h.remove=function(a){return Object.prototype.hasOwnProperty.call(this.g,a)?(delete this.g[a],this.f--,this.h++,this.b.length>2*this.f&&md(this),!0):!1};
function md(a){if(a.f!=a.b.length){for(var b=0,c=0;b<a.b.length;){var d=a.b[b];Object.prototype.hasOwnProperty.call(a.g,d)&&(a.b[c++]=d);b++}a.b.length=c}if(a.f!=a.b.length){var e={};for(c=b=0;b<a.b.length;)d=a.b[b],Object.prototype.hasOwnProperty.call(e,d)||(a.b[c++]=d,e[d]=1),b++;a.b.length=c}}
h.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.g,a)?this.g[a]:b};
h.set=function(a,b){Object.prototype.hasOwnProperty.call(this.g,a)||(this.f++,this.b.push(a),this.h++);this.g[a]=b};
h.forEach=function(a,b){for(var c=ld(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
h.clone=function(){return new kd(this)};
h.F=function(a){md(this);var b=0,c=this.h,d=this,e=new gd;e.next=function(){if(c!=d.h)throw Error("The map has changed since the iterator was created");if(b>=d.b.length)throw fd;var e=d.b[b++];return a?e:d.g[e]};
return e};function od(a){var b=[];pd(new qd,a,b);return b.join("")}
function qd(){}
function pd(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(wa(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),pd(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),rd(d,c),c.push(":"),pd(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":rd(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var sd={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},td=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function rd(a,b){b.push('"',a.replace(td,function(a){var b=sd[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),sd[a]=b);return b}),'"')}
;function ud(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0}
function vd(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}}
;function K(a,b){this.b=0;this.u=void 0;this.h=this.f=this.g=null;this.i=this.j=!1;if(a!=ta)try{var c=this;a.call(b,function(a){wd(c,2,a)},function(a){wd(c,3,a)})}catch(d){wd(this,3,d)}}
function xd(){this.next=this.context=this.onRejected=this.f=this.b=null;this.g=!1}
xd.prototype.reset=function(){this.context=this.onRejected=this.f=this.b=null;this.g=!1};
var yd=new Jc(function(){return new xd},function(a){a.reset()});
function zd(a,b,c){var d=yd.get();d.f=a;d.onRejected=b;d.context=c;return d}
function Ad(a){return new K(function(b,c){c(a)})}
K.prototype.then=function(a,b,c){return Bd(this,ya(a)?a:null,ya(b)?b:null,c)};
ud(K);function Cd(a,b){return Bd(a,null,b,void 0)}
K.prototype.cancel=function(a){0==this.b&&Rc(function(){var b=new Dd(a);Ed(this,b)},this)};
function Ed(a,b){if(0==a.b)if(a.g){var c=a.g;if(c.f){for(var d=0,e=null,f=null,g=c.f;g&&(g.g||(d++,g.b==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.b&&1==d?Ed(c,b):(f?(d=f,d.next==c.h&&(c.h=d),d.next=d.next.next):Fd(c),Gd(c,e,3,b)))}a.g=null}else wd(a,3,b)}
function Hd(a,b){a.f||2!=a.b&&3!=a.b||Id(a);a.h?a.h.next=b:a.f=b;a.h=b}
function Bd(a,b,c,d){var e=zd(null,null,null);e.b=new K(function(a,g){e.f=b?function(c){try{var e=b.call(d,c);a(e)}catch(m){g(m)}}:a;
e.onRejected=c?function(b){try{var e=c.call(d,b);!r(e)&&b instanceof Dd?g(b):a(e)}catch(m){g(m)}}:g});
e.b.g=a;Hd(a,e);return e.b}
K.prototype.w=function(a){this.b=0;wd(this,2,a)};
K.prototype.B=function(a){this.b=0;wd(this,3,a)};
function wd(a,b,c){if(0==a.b){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.b=1;a:{var d=c,e=a.w,f=a.B;if(d instanceof K){Hd(d,zd(e||ta,f||null,a));var g=!0}else if(vd(d))d.then(e,f,a),g=!0;else{if(x(d))try{var k=d.then;if(ya(k)){Jd(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}g||(a.u=c,a.b=b,a.g=null,Id(a),3!=b||c instanceof Dd||Kd(a,c))}}
function Jd(a,b,c,d,e){function f(a){k||(k=!0,d.call(e,a))}
function g(a){k||(k=!0,c.call(e,a))}
var k=!1;try{b.call(a,g,f)}catch(l){f(l)}}
function Id(a){a.j||(a.j=!0,Rc(a.m,a))}
function Fd(a){var b=null;a.f&&(b=a.f,a.f=b.next,b.next=null);a.f||(a.h=null);return b}
K.prototype.m=function(){for(var a;a=Fd(this);)Gd(this,a,this.b,this.u);this.j=!1};
function Gd(a,b,c,d){if(3==c&&b.onRejected&&!b.g)for(;a&&a.i;a=a.g)a.i=!1;if(b.b)b.b.g=null,Ld(b,c,d);else try{b.g?b.f.call(b.context):Ld(b,c,d)}catch(e){Md.call(null,e)}Kc(yd,b)}
function Ld(a,b,c){2==b?a.f.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function Kd(a,b){a.i=!0;Rc(function(){a.i&&Md.call(null,b)})}
var Md=Lc;function Dd(a){D.call(this,a)}
B(Dd,D);Dd.prototype.name="cancel";function L(a){J.call(this);this.j=1;this.h=[];this.i=0;this.b=[];this.g={};this.m=!!a}
B(L,J);h=L.prototype;h.subscribe=function(a,b,c){var d=this.g[a];d||(d=this.g[a]=[]);var e=this.j;this.b[e]=a;this.b[e+1]=b;this.b[e+2]=c;this.j=e+3;d.push(e);return e};
function Nd(a,b,c,d){if(b=a.g[b]){var e=a.b;(b=La(b,function(a){return e[a+1]==c&&e[a+2]==d}))&&a.L(b)}}
h.L=function(a){var b=this.b[a];if(b){var c=this.g[b];0!=this.i?(this.h.push(a),this.b[a+1]=ta):(c&&Ma(c,a),delete this.b[a],delete this.b[a+1],delete this.b[a+2])}return!!b};
h.K=function(a,b){var c=this.g[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.m)for(e=0;e<c.length;e++){var g=c[e];Od(this.b[g+1],this.b[g+2],d)}else{this.i++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.b[g+1].apply(this.b[g+2],d)}finally{if(this.i--,0<this.h.length&&0==this.i)for(;c=this.h.pop();)this.L(c)}}return 0!=e}return!1};
function Od(a,b,c){Rc(function(){a.apply(b,c)})}
h.clear=function(a){if(a){var b=this.g[a];b&&(E(b,this.L,this),delete this.g[a])}else this.b.length=0,this.g={}};
h.l=function(){L.A.l.call(this);this.clear();this.h.length=0};function Pd(a){this.b=a}
Pd.prototype.set=function(a,b){r(b)?this.b.set(a,od(b)):this.b.remove(a)};
Pd.prototype.get=function(a){try{var b=this.b.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Pd.prototype.remove=function(a){this.b.remove(a)};function Qd(a){this.b=a}
B(Qd,Pd);function Rd(a){this.data=a}
function Sd(a){return!r(a)||a instanceof Rd?a:new Rd(a)}
Qd.prototype.set=function(a,b){Qd.A.set.call(this,a,Sd(b))};
Qd.prototype.f=function(a){a=Qd.A.get.call(this,a);if(!r(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Qd.prototype.get=function(a){if(a=this.f(a)){if(a=a.data,!r(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Td(a){this.b=a}
B(Td,Qd);Td.prototype.set=function(a,b,c){if(b=Sd(b)){if(c){if(c<z()){Td.prototype.remove.call(this,a);return}b.expiration=c}b.creation=z()}Td.A.set.call(this,a,b)};
Td.prototype.f=function(a){var b=Td.A.f.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<z()||c&&c>z())Td.prototype.remove.call(this,a);else return b}};function Ud(a){this.b=a}
B(Ud,Td);function Vd(){}
;function Wd(){}
B(Wd,Vd);Wd.prototype.clear=function(){var a=jd(this.F(!0)),b=this;E(a,function(a){b.remove(a)})};function Xd(a){this.b=a}
B(Xd,Wd);h=Xd.prototype;h.isAvailable=function(){if(!this.b)return!1;try{return this.b.setItem("__sak","1"),this.b.removeItem("__sak"),!0}catch(a){return!1}};
h.set=function(a,b){try{this.b.setItem(a,b)}catch(c){if(0==this.b.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
h.get=function(a){a=this.b.getItem(a);if(!t(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
h.remove=function(a){this.b.removeItem(a)};
h.F=function(a){var b=0,c=this.b,d=new gd;d.next=function(){if(b>=c.length)throw fd;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!t(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
h.clear=function(){this.b.clear()};
h.key=function(a){return this.b.key(a)};function Yd(){var a=null;try{a=window.localStorage||null}catch(b){}this.b=a}
B(Yd,Xd);function Zd(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.b=a}
B(Zd,Xd);function $d(a,b){this.f=a;this.b=null;if(ob&&!(9<=Number(yb))){ae||(ae=new kd);this.b=ae.get(a);this.b||(b?this.b=document.getElementById(b):(this.b=document.createElement("userdata"),this.b.addBehavior("#default#userData"),document.body.appendChild(this.b)),ae.set(a,this.b));try{this.b.load(this.f)}catch(c){this.b=null}}}
B($d,Wd);var be={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},ae=null;function ce(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(a){return be[a]})}
h=$d.prototype;h.isAvailable=function(){return!!this.b};
h.set=function(a,b){this.b.setAttribute(ce(a),b);de(this)};
h.get=function(a){a=this.b.getAttribute(ce(a));if(!t(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
h.remove=function(a){this.b.removeAttribute(ce(a));de(this)};
h.F=function(a){var b=0,c=this.b.XMLDocument.documentElement.attributes,d=new gd;d.next=function(){if(b>=c.length)throw fd;var d=c[b++];if(a)return decodeURIComponent(d.nodeName.replace(/\./g,"%")).substr(1);d=d.nodeValue;if(!t(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
h.clear=function(){for(var a=this.b.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);de(this)};
function de(a){try{a.b.save(a.f)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function ee(a,b){this.f=a;this.b=b+"::"}
B(ee,Wd);ee.prototype.set=function(a,b){this.f.set(this.b+a,b)};
ee.prototype.get=function(a){return this.f.get(this.b+a)};
ee.prototype.remove=function(a){this.f.remove(this.b+a)};
ee.prototype.F=function(a){var b=this.f.F(!0),c=this,d=new gd;d.next=function(){for(var d=b.next();d.substr(0,c.b.length)!=c.b;)d=b.next();return a?d.substr(c.b.length):c.f.get(d)};
return d};function fe(){this.f=[];this.b=-1}
fe.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.f[a]!=b&&(this.f[a]=b,this.b=-1)};
fe.prototype.get=function(a){return!!this.f[a]};
function ge(a){-1==a.b&&(a.b=Ka(a.f,function(a,c,d){return c?a+Math.pow(2,d):a},0));
return a.b}
;function he(a,b){if(1<b.length)a[b[0]]=b[1];else{var c=b[0],d;for(d in c)a[d]=c[d]}}
var N=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};var je=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};u("yt.config_",je,void 0);function O(a){he(je,arguments)}
function P(a,b){return a in je?je[a]:b}
function Q(a){return P(a,void 0)}
function ke(){return P("PLAYER_CONFIG",{})}
;z();function le(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){R(b)}}:a}
function R(a,b,c,d,e){var f=w("yt.logging.errors.log");f?f(a,b,c,d,e):(f=P("ERRORS",[]),f.push([a,b,c,d,e]),O("ERRORS",f))}
function me(a){R(a,"WARNING",void 0,void 0,void 0)}
;function S(a){return P("EXPERIMENT_FLAGS",{})[a]}
;var ne=r(XMLHttpRequest)?function(){return new XMLHttpRequest}:r(ActiveXObject)?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;
function oe(){if(!ne)return null;var a=ne();return"open"in a?a:null}
function pe(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function T(a,b){ya(a)&&(a=le(a));return window.setTimeout(a,b)}
function U(a){window.clearTimeout(a)}
;function qe(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=decodeURIComponent((e[0]||"").replace(/\+/g," "));e=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?wa(b[f])?Oa(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b}
function re(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=qe(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return pc(a,e)+d}
;var se={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},te="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments absolute_experiments conditional_experiments sbb sr_bns_address".split(" "),
ue=!1;function ve(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=H(a)[1]||null,e=mc(H(a)[3]||null);d&&e?(d=c,c=H(a),d=H(d),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?mc(H(c)[3]||null)==e&&(Number(H(c)[4]||null)||null)==(Number(H(a)[4]||null)||null):!0;d=!!S("web_ajax_ignore_global_headers_if_set");for(var f in se)e=P(se[f]),!e||!c&&!we(a,f)||d&&void 0!==b[f]||(b[f]=e);if(c||we(a,"X-YouTube-Utc-Offset"))b["X-YouTube-Utc-Offset"]=-(new Date).getTimezoneOffset();return b}
function xe(a){var b=qe(window.location.search),c={};E(te,function(a){b[a]&&(c[a]=b[a])});
return re(a,c||{},!1)}
function we(a,b){var c=P("CORS_HEADER_WHITELIST")||{},d=mc(H(a)[3]||null);return d?(c=c[d])?0<=Ha(c,b):!1:!0}
function ye(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=ze(a,b);var d=Ae(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(a){if(!e){e=!0;f&&U(f);var c=a.ok,d=function(d){d=d||{};var e=b.context||q;c?b.onSuccess&&b.onSuccess.call(e,d,a):b.onError&&b.onError.call(e,d,a);b.ea&&b.ea.call(e,d,a)};
"JSON"==(b.format||"JSON")&&(c||400<=a.status&&500>a.status)?a.json().then(d,function(){d(null)}):d(null)}});
b.ia&&0<b.timeout&&(f=T(function(){e||(e=!0,U(f),b.ia.call(b.context||q))},b.timeout))}else Be(a,b)}
function Be(a,b){var c=b.format||"JSON";a=ze(a,b);var d=Ae(a,b),e=!1,f,g=Ce(a,function(a){if(!e){e=!0;f&&U(f);var d=pe(a),g=null,k=400<=a.status&&500>a.status,v=500<=a.status&&600>a.status;if(d||k||v)g=De(c,a,b.hb);if(d)a:if(a&&204==a.status)d=!0;else{switch(c){case "XML":d=0==parseInt(g&&g.return_code,10);break a;case "RAW":d=!0;break a}d=!!g}g=g||{};k=b.context||q;d?b.onSuccess&&b.onSuccess.call(k,a,g):b.onError&&b.onError.call(k,a,g);b.ea&&b.ea.call(k,a,g)}},b.method,d,b.headers,b.responseType,
b.withCredentials);
b.M&&0<b.timeout&&(f=T(function(){e||(e=!0,g.abort(),U(f),b.M.call(b.context||q,g))},b.timeout));
return g}
function ze(a,b){b.wa&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=P("XSRF_FIELD_NAME",void 0),d=b.Qa;d&&(d[c]&&delete d[c],a=re(a,d||{},!0));return a}
function Ae(a,b){var c=P("XSRF_FIELD_NAME",void 0),d=P("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.C,g=Q("XSRF_FIELD_NAME"),k;b.headers&&(k=b.headers["Content-Type"]);b.ib||mc(H(a)[3]||null)&&!b.withCredentials&&mc(H(a)[3]||null)!=document.location.hostname||"POST"!=b.method||k&&"application/x-www-form-urlencoded"!=k||b.C&&b.C[g]||(f||(f={}),f[c]=d);f&&t(e)&&(e=qe(e),lb(e,f),e=b.ja&&"JSON"==b.ja?JSON.stringify(e):oc(e));f=e||f&&!gb(f);!ue&&f&&"POST"!=b.method&&(ue=!0,R(Error("AJAX request with postData should use POST")));
return e}
function De(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?Ee(b):null)d={},E(b.getElementsByTagName("*"),function(a){d[a.tagName]=Fe(a)})}c&&Ge(d);
return d}
function Ge(a){if(x(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=Qb(a[b],null);a[c]=d}else Ge(a[b])}}
function Ee(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Fe(a){var b="";E(a.childNodes,function(a){b+=a.nodeValue});
return b}
function He(a,b){b.method="POST";b.C||(b.C={});Be(a,b)}
function Ce(a,b,c,d,e,f,g){function k(){4==(l&&"readyState"in l?l.readyState:0)&&b&&le(b)(l)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var l=oe();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",k,!1):l.onreadystatechange=k;S("debug_forward_web_query_parameters")&&(a=xe(a));l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=ve(a,e))for(var m in e)l.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");l.send(d);
return l}
;var Ie={},Je=0;
function Ke(a,b,c,d,e){e=void 0===e?"":e;a&&(c&&(c=$a,c=!(c&&0<=c.toLowerCase().indexOf("cobalt"))),c?a&&(a instanceof G||(a="object"==typeof a&&a.J?a.I():String(a),Lb.test(a)||(a="about:invalid#zClosurez"),a=Nb(a)),b=Kb(a),"about:invalid#zClosurez"===b?a="":(b instanceof Ob?a=b:(d="object"==typeof b,a=null,d&&b.ba&&(a=b.Y()),b=Qa(d&&b.J?b.I():String(b)),a=Qb(b,a)),a=encodeURIComponent(String(od(a instanceof Ob&&a.constructor===Ob&&a.g===Pb?a.b:"type_error:SafeHtml")))),/^[\s\xa0]*$/.test(a)||(a=
Yb("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',style:"display:none"}),(9==a.nodeType?a:a.ownerDocument||a.document).body.appendChild(a))):e?Ce(a,b,"POST",e,d):P("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d?Ce(a,b,"GET","",d):Le(a,b))}
function Le(a,b){var c=new Image,d=""+Je++;Ie[d]=c;c.onload=c.onerror=function(){b&&Ie[d]&&b();delete Ie[d]};
c.src=a}
;var Me={},Ne=0;
function Oe(a,b,c,d,e,f){f=f||{};f.name=c||P("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||P("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);b=void 0===b?"ERROR":b;e=void 0===e?!1:e;b=void 0===b?"ERROR":b;e=window&&window.yterr||(void 0===e?!1:e)||!1;if(a&&e&&!(5<=Ne)){e=a.stacktrace;c=a.columnNumber;a.hasOwnProperty("params")&&(f.params=JSON.stringify(a.params).substr(0,500));d=w("window.location.href");if(t(a))a={message:a,name:"Unknown error",lineNumber:"Not available",fileName:d,stack:"Not available"};else{var g=
!1;try{var k=a.lineNumber||a.line||"Not available"}catch(v){k="Not available",g=!0}try{var l=a.fileName||a.filename||a.sourceURL||q.$googDebugFname||d}catch(v){l="Not available",g=!0}a=!g&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:{message:a.message||"Not available",name:a.name||"UnknownError",lineNumber:k,fileName:l,stack:a.stack||"Not available"}}e=e||a.stack;k=a.lineNumber.toString();isNaN(k)||isNaN(c)||(k=k+":"+c);if(!(Me[a.message]||0<=e.indexOf("/YouTubeCenter.js")||0<=e.indexOf("/mytube.js"))){l=
e;k={Qa:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,1E3),line:k,level:b,"client.name":f.name},C:{url:P("PAGE_NAME",window.location.href),file:a.fileName},method:"POST"};f.version&&(k["client.version"]=f.version);l&&(k.C.stack=l);for(var m in f)k.C["client."+m]=f[m];if(m=P("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var A in m)k.C[A]=m[A];Be(P("ECATCHER_REPORT_HOST","")+"/error_204",k);Me[a.message]=!0;Ne++}}}
;var Pe=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};u("yt.msgs_",Pe,void 0);function Qe(a){he(Pe,arguments)}
;function Re(a){a&&(a.dataset?a.dataset[Se("loaded")]="true":a.setAttribute("data-loaded","true"))}
function Te(a,b){return a?a.dataset?a.dataset[Se(b)]:a.getAttribute("data-"+b):null}
var Ue={};function Se(a){return Ue[a]||(Ue[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))}
;var Ve=w("ytPubsubPubsubInstance")||new L;L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.L;L.prototype.publish=L.prototype.K;L.prototype.clear=L.prototype.clear;u("ytPubsubPubsubInstance",Ve,void 0);var We=w("ytPubsubPubsubSubscribedKeys")||{};u("ytPubsubPubsubSubscribedKeys",We,void 0);var Xe=w("ytPubsubPubsubTopicToKeys")||{};u("ytPubsubPubsubTopicToKeys",Xe,void 0);var Ye=w("ytPubsubPubsubIsSynchronous")||{};u("ytPubsubPubsubIsSynchronous",Ye,void 0);
function Ze(a,b){var c=$e();if(c){var d=c.subscribe(a,function(){var c=arguments;var f=function(){We[d]&&b.apply(window,c)};
try{Ye[a]?f():T(f,0)}catch(g){R(g)}},void 0);
We[d]=!0;Xe[a]||(Xe[a]=[]);Xe[a].push(d);return d}return 0}
function af(a){var b=$e();b&&("number"==typeof a?a=[a]:t(a)&&(a=[parseInt(a,10)]),E(a,function(a){b.unsubscribeByKey(a);delete We[a]}))}
function bf(a,b){var c=$e();c&&c.publish.apply(c,arguments)}
function cf(a){var b=$e();if(b)if(b.clear(a),a)df(a);else for(var c in Xe)df(c)}
function $e(){return w("ytPubsubPubsubInstance")}
function df(a){Xe[a]&&(a=Xe[a],E(a,function(a){We[a]&&delete We[a]}),a.length=0)}
;var ef=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,ff=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function gf(a,b,c){c=void 0===c?null:c;if(window.spf){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(ef,""),c=c.replace(ff,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else hf(a,b,c)}
function hf(a,b,c){c=void 0===c?null:c;var d=jf(a),e=document.getElementById(d),f=e&&Te(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=Ze(d,b),b=""+(b[za]||(b[za]=++Aa)),kf[b]=f),g||(e=lf(a,d,function(){Te(e,"loaded")||(Re(e),bf(d),T(Da(cf,d),0))},c)))}
function lf(a,b,c,d){d=void 0===d?null:d;var e=document.createElement("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Sb(e,ac(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function mf(a){a=jf(a);var b=document.getElementById(a);b&&(cf(a),b.parentNode.removeChild(b))}
function nf(a,b){if(a&&b){var c=""+(b[za]||(b[za]=++Aa));(c=kf[c])&&af(c)}}
function jf(a){var b=document.createElement("a");Rb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Za(a)}
var kf={};function of(){}
function pf(a,b){return qf(a,1,b)}
;function rf(){}
n(rf,of);function qf(a,b,c){isNaN(c)&&(c=void 0);var d=w("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):T(a,c||0)}
function sf(a){if(!isNaN(a)){var b=w("yt.scheduler.instance.cancelJob");b?b(a):U(a)}}
rf.prototype.start=function(){var a=w("yt.scheduler.instance.start");a&&a()};
rf.prototype.pause=function(){var a=w("yt.scheduler.instance.pause");a&&a()};
ua(rf);rf.getInstance();var tf=[],uf=!1;function vf(){if("1"!=db(ke(),"args","privembed")){var a=function(){uf=!0;"google_ad_status"in window?O("DCLKSTAT",1):O("DCLKSTAT",2)};
gf("//static.doubleclick.net/instream/ad_status.js",a);tf.push(pf(function(){uf||"google_ad_status"in window||(nf("//static.doubleclick.net/instream/ad_status.js",a),O("DCLKSTAT",3))},5E3))}}
function wf(){return parseInt(P("DCLKSTAT",0),10)}
;function xf(){this.f=!1;this.b=null}
xf.prototype.initialize=function(a,b,c,d,e){b?(this.f=!0,gf(b,function(){this.f=!1;window.botguard?yf(this,c,d):(mf(b),R(Error("Unable to load Botguard from "+b),"WARNING"))}.bind(this),e)):a&&(eval(a),window.botguard?yf(this,c,d):R(Error("Unable to load Botguard from JS"),"WARNING"))};
function yf(a,b,c){try{a.b=new window.botguard.bg(b)}catch(d){me(d)}c&&c(b)}
xf.prototype.invoke=function(a){a=void 0===a?{}:a;return this.b?this.b.invoke(void 0,void 0,a):null};
xf.prototype.dispose=function(){this.b=null};var zf=new xf,Af=!1,Bf=0,Cf="";function Df(a){S("botguard_periodic_refresh")?Bf=N():S("botguard_always_refresh")&&(Cf=a)}
function Ef(a){if(a){if(zf.f)return!1;if(S("botguard_periodic_refresh"))return 72E5<N()-Bf;if(S("botguard_always_refresh"))return Cf!=a}else return!1;return!Af}
function Ff(){return null!==zf.b}
function Gf(a){a=void 0===a?{}:a;return zf.invoke(a)}
;var Hf=0;u("ytDomDomGetNextId",w("ytDomDomGetNextId")||function(){return++Hf},void 0);var If={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Jf(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;if(a=a||window.event){this.event=a;for(var b in a)b in If||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?
b=a.fromElement:"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.b=a.pageX;this.f=a.pageY}}
function Kf(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.b=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.f=a.clientY+b}}
Jf.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Jf.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Jf.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var fb=w("ytEventsEventsListeners")||{};u("ytEventsEventsListeners",fb,void 0);var Lf=w("ytEventsEventsCounter")||{count:0};u("ytEventsEventsCounter",Lf,void 0);
function Mf(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return eb(function(e){var f="boolean"==typeof e[4]&&e[4]==!!d,g=x(e[4])&&x(d)&&ib(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var Nf=Eb(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function V(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Mf(a,b,c,d);if(e)return e;e=++Lf.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(d){d=new Jf(d);if(!$b(d.relatedTarget,function(b){return b==a}))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new Jf(b);
b.currentTarget=a;return c.call(a,b)};
g=le(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Nf()||"boolean"==typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);fb[e]=[a,b,c,g,d];return e}
function Of(a){a&&("string"==typeof a&&(a=[a]),E(a,function(a){if(a in fb){var b=fb[a],d=b[0],e=b[1],f=b[3];b=b[4];d.removeEventListener?Nf()||"boolean"==typeof b?d.removeEventListener(e,f,b):d.removeEventListener(e,f,!!b.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete fb[a]}}))}
;function Pf(a){this.w=a;this.b=null;this.i=0;this.m=null;this.j=0;this.g=[];for(a=0;4>a;a++)this.g.push(0);this.h=0;this.D=V(window,"mousemove",y(this.G,this));a=y(this.B,this);ya(a)&&(a=le(a));this.H=window.setInterval(a,25)}
B(Pf,J);Pf.prototype.G=function(a){r(a.b)||Kf(a);var b=a.b;r(a.f)||Kf(a);this.b=new Tb(b,a.f)};
Pf.prototype.B=function(){if(this.b){var a=N();if(0!=this.i){var b=this.m,c=this.b,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.i);this.g[this.h]=.5<Math.abs((d-this.j)/this.j)?1:0;for(c=b=0;4>c;c++)b+=this.g[c]||0;3<=b&&this.w();this.j=d}this.i=a;this.m=this.b;this.h=(this.h+1)%4}};
Pf.prototype.l=function(){window.clearInterval(this.H);Of(this.D)};var Qf={};function Rf(a){var b=void 0===a?{}:a;a=void 0===b.b?!0:b.b;b=void 0===b.f?!1:b.f;if(null==w("_lact",window)){var c=parseInt(P("LACT"),10);c=isFinite(c)?z()-Math.max(c,0):-1;u("_lact",c,window);u("_fact",c,window);-1==c&&Sf();V(document,"keydown",Sf);V(document,"keyup",Sf);V(document,"mousedown",Sf);V(document,"mouseup",Sf);a&&(b?V(window,"touchmove",function(){Tf("touchmove",200)},{passive:!0}):(V(window,"resize",function(){Tf("resize",200)}),V(window,"scroll",function(){Tf("scroll",200)})));
new Pf(function(){Tf("mouse",100)});
V(document,"touchstart",Sf,{passive:!0});V(document,"touchend",Sf,{passive:!0})}}
function Tf(a,b){Qf[a]||(Qf[a]=!0,pf(function(){Sf();Qf[a]=!1},b))}
function Sf(){null==w("_lact",window)&&Rf();var a=z();u("_lact",a,window);-1==w("_fact",window)&&u("_fact",a,window);(a=w("ytglobal.ytUtilActivityCallback_"))&&a()}
function Uf(){var a=w("_lact",window);return null==a?-1:Math.max(z()-a,0)}
;var Vf=Math.pow(2,16)-1,Wf=null,Xf=0,Yf={log_event:"events",log_interaction:"interactions"},Zf=Object.create(null);Zf.log_event="GENERIC_EVENT_LOGGING";Zf.log_interaction="INTERACTION_LOGGING";var $f=new Set(["log_event"]),ag={},bg=0,cg=0,W=w("ytLoggingTransportLogPayloadsQueue_")||{};u("ytLoggingTransportLogPayloadsQueue_",W,void 0);var dg=w("ytLoggingTransportTokensToCttTargetIds_")||{};u("ytLoggingTransportTokensToCttTargetIds_",dg,void 0);var eg=w("ytLoggingTransportDispatchedStats_")||{};
u("ytLoggingTransportDispatchedStats_",eg,void 0);u("ytytLoggingTransportCapturedTime_",w("ytLoggingTransportCapturedTime_")||{},void 0);function fg(){U(bg);U(cg);cg=0;if(!gb(W)){for(var a in W){var b=ag[a];b&&(gg(a,b),delete W[a])}gb(W)||hg()}}
function hg(){S("web_gel_timeout_cap")&&!cg&&(cg=T(fg,6E4));U(bg);bg=T(fg,P("LOGGING_BATCH_TIMEOUT",1E4))}
function ig(a,b){b=void 0===b?"":b;W[a]=W[a]||{};W[a][b]=W[a][b]||[];return W[a][b]}
function gg(a,b){var c=Yf[a],d=eg[a]||{};eg[a]=d;var e=Math.round(N());for(m in W[a]){var f=b.b;f={client:{hl:f.za,gl:f.ya,clientName:f.xa,clientVersion:f.innertubeContextClientVersion}};var g=window.devicePixelRatio;g&&1!=g&&(f.client.screenDensityFloat=String(g));P("DELEGATED_SESSION_ID")&&!S("pageid_as_header_web")&&(f.user={onBehalfOfUser:P("DELEGATED_SESSION_ID")});f={context:f};f[c]=ig(a,m);d.dispatchedEventCount=d.dispatchedEventCount||0;d.dispatchedEventCount+=f[c].length;if(g=dg[m])a:{var k=
m;if(g.videoId)var l="VIDEO";else if(g.playlistId)l="PLAYLIST";else break a;f.credentialTransferTokenTargetId=g;f.context=f.context||{};f.context.user=f.context.user||{};f.context.user.credentialTransferTokens=[{token:k,scope:l}]}delete dg[m];f.requestTimeMs=e;if(g=Q("EVENT_ID"))l=(P("BATCH_CLIENT_COUNTER",void 0)||0)+1,l>Vf&&(l=1),O("BATCH_CLIENT_COUNTER",l),g={serializedEventId:g,clientCounter:l},f.serializedClientEventId=g,Wf&&Xf&&S("log_gel_rtt_web")&&(f.previousBatchInfo={serializedClientEventId:Wf,
roundtripMs:Xf}),Wf=g,Xf=0;jg(b,a,f,{retry:$f.has(a),onSuccess:kg.bind(this,N())})}if(d.previousDispatchMs){c=e-d.previousDispatchMs;var m=d.diffCount||0;d.averageTimeBetweenDispatchesMs=m?(d.averageTimeBetweenDispatchesMs*m+c)/(m+1):c;d.diffCount=m+1}d.previousDispatchMs=e}
function kg(a){Xf=Math.round(N()-a)}
;function lg(a,b,c,d,e){var f={};f.eventTimeMs=Math.round(d||N());f[a]=b;f.context={lastActivityMs:String(d?-1:Uf())};e?(a={},e.videoId?a.videoId=e.videoId:e.playlistId&&(a.playlistId=e.playlistId),dg[e.token]=a,e=ig("log_event",e.token)):e=ig("log_event");e.push(f);c&&(ag.log_event=new c);e.length>=(Number(S("web_logging_max_batch")||0)||20)?fg():hg()}
;function mg(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||P("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.eb||P("AUTHORIZATION"))||(a?b="Bearer "+w("gapi.auth.getToken")().cb:b=Ic([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=P("SESSION_INDEX",0),S("pageid_as_header_web")&&(d["X-Goog-PageId"]=P("DELEGATED_SESSION_ID")));return d}
function ng(a){a=Object.assign({},a);delete a.Authorization;var b=Ic();if(b){var c=new Yc;c.update(P("INNERTUBE_API_KEY",void 0));c.update(b);b=c.digest();if(!Ab)for(Ab={},Bb={},c=0;65>c;c++)Ab[c]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(c),Bb[c]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(c);c=Bb;for(var d=[],e=0;e<b.length;e+=3){var f=b[e],g=e+1<b.length,k=g?b[e+1]:0,l=e+2<b.length,m=l?b[e+2]:0,A=f>>2;f=(f&3)<<4|k>>4;k=(k&15)<<2|m>>
6;m&=63;l||(m=64,g||(k=64));d.push(c[A],c[f],c[k],c[m])}a.hash=d.join("")}return a}
;function og(a,b,c,d){Db.set(""+a,b,c,"/",void 0===d?"youtube.com":d,!1)}
;function pg(){var a=new Yd;(a=a.isAvailable()?new ee(a,"yt.innertube"):null)||(a=new $d("yt.innertube"),a=a.isAvailable()?a:null);this.b=a?new Td(a):null;this.f=document.domain||window.location.hostname}
pg.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.b)try{this.b.set(a,b,z()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(od(b))}catch(f){return}else e=escape(b);og(a,e,c,this.f)};
pg.prototype.get=function(a,b){var c=void 0,d=!this.b;if(!d)try{c=this.b.get(a)}catch(e){d=!0}if(d&&(c=Db.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
pg.prototype.remove=function(a){this.b&&this.b.remove(a);var b=this.f;Db.remove(""+a,"/",void 0===b?"youtube.com":b)};var qg=new pg;function rg(a,b,c,d){if(d)return null;d=qg.get("nextId",!0)||1;var e=qg.get("requests",!0)||{};e[d]={method:a,request:b,authState:ng(c),requestTime:Math.round(N())};qg.set("nextId",d+1,86400,!0);qg.set("requests",e,86400,!0);return d}
function sg(a){var b=qg.get("requests",!0)||{};delete b[a];qg.set("requests",b,86400,!0)}
function tg(a){var b=qg.get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(N())-d.requestTime)){var e=d.authState,f=ng(mg(!1));ib(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(N())),jg(a,d.method,e,{}));delete b[c]}}qg.set("requests",b,86400,!0)}}
;function ug(a){var b=this;this.b=a||{innertubeApiKey:Q("INNERTUBE_API_KEY"),innertubeApiVersion:Q("INNERTUBE_API_VERSION"),xa:P("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:Q("INNERTUBE_CONTEXT_CLIENT_VERSION"),za:Q("INNERTUBE_CONTEXT_HL"),ya:Q("INNERTUBE_CONTEXT_GL"),Aa:Q("INNERTUBE_HOST_OVERRIDE")||"",Ba:!!P("INNERTUBE_USE_THIRD_PARTY_AUTH",!1)};qf(function(){tg(b)},0,5E3)}
function jg(a,b,c,d){!P("VISITOR_DATA")&&.01>Math.random()&&R(Error("Missing VISITOR_DATA when sending innertube request."),"WARNING");var e={headers:{"Content-Type":"application/json"},method:"POST",C:c,ja:"JSON",M:function(){d.M()},
ia:d.M,onSuccess:function(a,b){if(d.onSuccess)d.onSuccess(b)},
ha:function(a){if(d.onSuccess)d.onSuccess(a)},
onError:function(a,b){if(d.onError)d.onError(b)},
jb:function(a){if(d.onError)d.onError(a)},
timeout:d.timeout,withCredentials:!0},f="",g=a.b.Aa;g&&(f=g);g=a.b.Ba||!1;var k=mg(g,f,d);Object.assign(e.headers,k);e.headers.Authorization&&!f&&(e.headers["x-origin"]=window.location.origin);var l=""+f+("/youtubei/"+a.b.innertubeApiVersion+"/"+b)+"?alt=json&key="+a.b.innertubeApiKey,m;if(d.retry&&S("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=f&&(m=rg(b,c,k,g))){var A=e.onSuccess,v=e.ha;e.onSuccess=function(a,b){sg(m);A(a,b)};
c.ha=function(a,b){sg(m);v(a,b)}}try{S("use_fetch_for_op_xhr")?ye(l,e):He(l,e)}catch(M){if("InvalidAccessError"==M)m&&(sg(m),m=0),R(Error("An extension is blocking network request."),"WARNING");
else throw M;}m&&qf(function(){tg(a)},0,5E3)}
;var vg=z().toString();
function wg(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=z();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(vg)for(a=1,b=0;b<vg.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^vg.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var xg=w("ytLoggingTimeDocumentNonce_")||wg();u("ytLoggingTimeDocumentNonce_",xg,void 0);function yg(a){this.b=a}
function zg(a){var b={};void 0!==a.b.trackingParams?b.trackingParams=a.b.trackingParams:(b.veType=a.b.veType,null!=a.b.veCounter&&(b.veCounter=a.b.veCounter),null!=a.b.elementIndex&&(b.elementIndex=a.b.elementIndex));void 0!==a.b.dataElement&&(b.dataElement=zg(a.b.dataElement));void 0!==a.b.youtubeData&&(b.youtubeData=a.b.youtubeData);return b}
var Ag=1;function Bg(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function Cg(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function Dg(a){return P(Cg(void 0===a?0:a),void 0)}
u("yt.logging.screen.getRootVeType",Dg,void 0);function Eg(){var a=Dg(0),b;a?b=new yg({veType:a,youtubeData:void 0}):b=null;return b}
function Fg(a){a=void 0===a?0:a;var b=P(Bg(a));b||0!=a||(b=P("EVENT_ID"));return b?b:null}
u("yt.logging.screen.getCurrentCsn",Fg,void 0);function Gg(a,b,c){c=void 0===c?0:c;if(a!==P(Bg(c))||b!==P(Cg(c)))O(Bg(c),a),O(Cg(c),b),0==c&&(b=function(){setTimeout(function(){a&&lg("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:xg,clientScreenNonce:a},ug)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b())}
u("yt.logging.screen.setCurrentScreen",Gg,void 0);function Hg(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=P("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=P("VALID_SESSION_TEMPDATA_DOMAINS",[]),f=mc(H(window.location.href)[3]||null);f&&e.push(f);f=mc(H(d)[3]||null);if(0<=Ha(e,f)||!f&&0==d.lastIndexOf("/",0))if(S("autoescape_tempdata_url")&&(e=document.createElement("a"),Rb(e,d),d=e.href),d){f=H(d);d=f[5];e=f[6];f=f[7];var g="";d&&(g+=d);e&&(g+="?"+e);f&&(g+="#"+f);d=g;e=d.indexOf("#");if(d=0>e?d:d.substr(0,e)){if(b.itct||b.ved)b.csn=b.csn||
Fg();if(k){var k=parseInt(k,10);isFinite(k)&&0<k&&(d="ST-"+Za(d).toString(36),b=b?oc(b):"",og(d,b,k||5))}else k="ST-"+Za(d).toString(36),b=b?oc(b):"",og(k,b,5)}}}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var l=void 0===l?{}:l;var m=void 0===m?"":m;var A=void 0===A?window:A;c=A.location;a=pc(a,l)+m;a=a instanceof G?a:Mb(a);c.href=Kb(a)}return!0}
;function Ig(a,b,c){a={csn:a,parentVe:zg(b),childVes:Ja(c,function(a){return zg(a)})};
lg("visualElementAttached",a,ug)}
;function Jg(a){a=a||{};this.url=a.url||"";this.args=a.args||jb(Kg);this.assets=a.assets||{};this.attrs=a.attrs||jb(Lg);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
var Kg={enablejsapi:1},Lg={};Jg.prototype.clone=function(){var a=new Jg,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];a[b]="object"==va(c)?jb(c):c}return a};function Mg(){J.call(this);this.b=[]}
n(Mg,J);Mg.prototype.l=function(){for(;this.b.length;){var a=this.b.pop();a.target.removeEventListener(a.name,a.gb)}J.prototype.l.call(this)};var Ng=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function Og(a){a=a||"";if(window.spf){var b=a.match(Ng);spf.style.load(a,b?b[1]:"",void 0)}else Pg(a)}
function Pg(a){var b=Qg(a),c=document.getElementById(b),d=c&&Te(c,"loaded");d||c&&!d||(c=Rg(a,b,function(){Te(c,"loaded")||(Re(c),bf(b),T(Da(cf,b),0))}))}
function Rg(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=ac(a);d.rel="stylesheet";d.href=Ib(a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function Qg(a){var b=document.createElement("A");a=Nb(a);Rb(b,a);b=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Za(b)}
;function Sg(a,b,c){var d=ug;P("ytLoggingEventsDefaultDisabled",!1)&&ug==ug&&(d=null);lg(a,b,d,c,void 0)}
;var Tg=w("ytLoggingLatencyUsageStats_")||{};u("ytLoggingLatencyUsageStats_",Tg,void 0);var Ug=0;function Vg(a){Tg[a]=Tg[a]||{count:0};var b=Tg[a];b.count++;b.time=N();Ug||(Ug=qf(Wg,0,5E3));return 10<b.count?(11==b.count&&Oe(Error("CSI data exceeded logging limit with key: "+a),0==a.indexOf("info")?"WARNING":"ERROR"),!0):!1}
function Wg(){var a=N(),b;for(b in Tg)6E4<a-Tg[b].time&&delete Tg[b];Ug=0}
;function Xg(a,b){this.version=a;this.args=b}
;function Yg(a){this.topic=a}
Yg.prototype.toString=function(){return this.topic};var Zg=w("ytPubsub2Pubsub2Instance")||new L;L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.L;L.prototype.publish=L.prototype.K;L.prototype.clear=L.prototype.clear;u("ytPubsub2Pubsub2Instance",Zg,void 0);u("ytPubsub2Pubsub2SubscribedKeys",w("ytPubsub2Pubsub2SubscribedKeys")||{},void 0);u("ytPubsub2Pubsub2TopicToKeys",w("ytPubsub2Pubsub2TopicToKeys")||{},void 0);u("ytPubsub2Pubsub2IsAsync",w("ytPubsub2Pubsub2IsAsync")||{},void 0);
u("ytPubsub2Pubsub2SkipSubKey",null,void 0);function $g(a,b){var c=w("ytPubsub2Pubsub2Instance");c&&c.publish.call(c,a.toString(),a,b)}
;var X=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};function ah(){var a=P("TIMING_TICK_EXPIRATION");a||(a={},O("TIMING_TICK_EXPIRATION",a));return a}
function bh(){var a=ah(),b;for(b in a)sf(a[b]);O("TIMING_TICK_EXPIRATION",{})}
;function ch(a,b){Xg.call(this,1,arguments)}
n(ch,Xg);function dh(a,b){Xg.call(this,1,arguments)}
n(dh,Xg);var eh=new Yg("aft-recorded"),fh=new Yg("timing-sent");var gh={vc:!0},Y={},hh=(Y.ad_allowed="adTypesAllowed",Y.yt_abt="adBreakType",Y.ad_cpn="adClientPlaybackNonce",Y.ad_docid="adVideoId",Y.yt_ad_an="adNetworks",Y.ad_at="adType",Y.browse_id="browseId",Y.p="httpProtocol",Y.t="transportProtocol",Y.cpn="clientPlaybackNonce",Y.csn="clientScreenNonce",Y.docid="videoId",Y.is_continuation="isContinuation",Y.is_nav="isNavigation",Y.b_p="kabukiInfo.browseParams",Y.is_prefetch="kabukiInfo.isPrefetch",Y.is_secondary_nav="kabukiInfo.isSecondaryNav",Y.prev_browse_id=
"kabukiInfo.prevBrowseId",Y.query_source="kabukiInfo.querySource",Y.voz_type="kabukiInfo.vozType",Y.yt_lt="loadType",Y.yt_ad="isMonetized",Y.nr="webInfo.navigationReason",Y.ncnp="webInfo.nonPreloadedNodeCount",Y.paused="playerInfo.isPausedOnLoad",Y.fmt="playerInfo.itag",Y.yt_pl="watchInfo.isPlaylist",Y.yt_ad_pr="prerollAllowed",Y.yt_red="isRedSubscriber",Y.st="serverTimeMs",Y.aq="tvInfo.appQuality",Y.br_trs="tvInfo.bedrockTriggerState",Y.label="tvInfo.label",Y.is_mdx="tvInfo.isMdx",Y.preloaded="tvInfo.isPreloaded",
Y.query="unpluggedInfo.query",Y.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",Y.yt_vst="videoStreamType",Y.vph="viewportHeight",Y.vpw="viewportWidth",Y.yt_vis="isVisible",Y),ih="ap c cver cbrand cmodel ei srt yt_fss yt_li plid vpil vpni vpst yt_eil vpni2 vpil2 icrc icrt pa GetBrowse_rid GetPlayer_rid GetSearch_rid GetWatchNext_rid cmt d_vpct d_vpnfi d_vpni pc pfa pfeh pftr prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis yt_ref yt_sts".split(" "),
jh="isContinuation isNavigation kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist".split(" "),kh={},lh=(kh.yt_vst="VIDEO_STREAM_TYPE_",kh),mh=!1;
function nh(){var a=oh().info.yt_lt="hot_bg";ph().info_yt_lt=a;if(qh())if("yt_lt"in hh){var b=hh.yt_lt;0<=Ha(jh,b)&&(a=!!a);"yt_lt"in lh&&(a=lh.yt_lt+a.toUpperCase());var c=a;if(qh()){a={};b=b.split(".");for(var d=a,e=0;e<b.length-1;e++)d[b[e]]=d[b[e]]||{},d=d[b[e]];d[b[b.length-1]]=c;c=rh();b=Object.keys(a).join("");Vg("info_"+b+"_"+c)||(a.clientActionNonce=c,Sg("latencyActionInfo",a))}}else 0<=Ha(ih,"yt_lt")||R(Error("Unknown label yt_lt logged with GEL CSI."))}
function sh(){var a=th();if(a.aft)return a.aft;for(var b=P("TIMING_AFT_KEYS",["ol"]),c=b.length,d=0;d<c;d++){var e=a[b[d]];if(e)return e}return NaN}
var uh=y(X.clearResourceTimings||X.webkitClearResourceTimings||X.mozClearResourceTimings||X.msClearResourceTimings||X.oClearResourceTimings||ta,X);function rh(){var a=oh().nonce;a||(a=wg(),oh().nonce=a);return a}
function th(){return oh().tick}
function ph(){var a=oh();"gel"in a||(a.gel={});return a.gel}
function oh(){return w("ytcsi.data_")||vh()}
function vh(){var a={tick:{},info:{}};u("ytcsi.data_",a,void 0);return a}
function wh(a,b){u("yt.timing."+(b||"")+"pingSent_",a,void 0)}
function xh(){var a=th(),b=a.pbr,c=a.vc;a=a.pbs;return b&&c&&a&&b<c&&c<a&&1==oh().info.yt_pvis}
function qh(){return!!S("csi_on_gel")||!!oh().useGel}
function yh(){bh();if(!qh()){var a=th(),b=oh().info,c=a._start;for(f in a)if(0==f.lastIndexOf("_",0)&&wa(a[f])){var d=f.slice(1);if(d in gh){var e=Ja(a[f],function(a){return Math.round(a-c)});
b["all_"+d]=e.join()}delete a[f]}var f=!!b.ap;if(d=w("ytglobal.timingReportbuilder_")){if(a=d(a,b,void 0))zh(a,f),vh(),uh(),wh(!1,void 0),P("TIMING_ACTION")&&O("PREVIOUS_ACTION",P("TIMING_ACTION")),O("TIMING_ACTION","")}else{var g=P("CSI_SERVICE_NAME","youtube");d={v:2,s:g,action:P("TIMING_ACTION",void 0)};e=nh.srt;void 0!==a.srt&&delete b.srt;if(b.h5jse){var k=window.location.protocol+w("ytplayer.config.assets.js");(k=X.getEntriesByName?X.getEntriesByName(k)[0]:null)?b.h5jse=Math.round(b.h5jse-k.responseEnd):
delete b.h5jse}a.aft=sh();xh()&&"youtube"==g&&(nh(),g=a.vc,k=a.pbs,delete a.aft,b.aft=Math.round(k-g));for(var l in b)"_"!=l.charAt(0)&&(d[l]=b[l]);a.ps=N();b={};l=[];for(var m in a)"_"!=m.charAt(0)&&(g=Math.round(a[m]-c),b[m]=g,l.push(m+"."+g));d.rt=l.join(",");(a=w("ytdebug.logTiming"))&&a(d,b);zh(d,f,void 0);$g(fh,new dh(b.aft+(e||0),void 0))}}}
function zh(a,b,c){if(S("debug_csi_data")){var d=w("yt.timing.csiData");d||(d=[],u("yt.timing.csiData",d,void 0));d.push({page:location.href,time:new Date,args:a})}d="";for(var e in a)d+="&"+e+"="+a[e];a="/csi_204?"+d.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b){var f=void 0===f?"":f;try{window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,f)||Ke(a,void 0,void 0,void 0,f)}catch(g){Ke(a,void 0,void 0,void 0,f)}}else Ke(a);wh(!0,c)}
function Ah(a){if("_"!=a[0]){var b=a;X.mark&&(0==b.lastIndexOf("mark_",0)||(b="mark_"+b),X.mark(b))}b=th();var c=N();b[a]&&(b["_"+a]=b["_"+a]||[b[a]],b["_"+a].push(c));b[a]=c;b=ah();if(c=b[a])sf(c),b[a]=0;ph()["tick_"+a]=void 0;N();qh()?(b=rh(),"_start"==a?Vg("baseline_"+b)||Sg("latencyActionBaselined",{clientActionNonce:b},void 0):Vg("tick_"+a+"_"+b)||Sg("latencyActionTicked",{tickName:a,clientActionNonce:b},void 0),a=!0):a=!1;if(a=!a)a=!w("yt.timing.pingSent_");if(a&&(b=Q("TIMING_ACTION"),a=th(),
w("ytglobal.timingready_")&&b&&a._start&&(b=sh()))){mh||($g(eh,new ch(Math.round(b-a._start),void 0)),mh=!0);b=!0;c=P("TIMING_WAIT",[]);if(c.length)for(var d=0,e=c.length;d<e;++d)if(!(c[d]in a)){b=!1;break}b&&yh()}}
;function Bh(a,b){J.call(this);this.j=this.T=a;this.D=b;this.m=!1;this.api={};this.P=this.B=null;this.G=new L;$c(this,Da(ad,this.G));this.h={};this.N=this.R=this.g=this.X=this.b=null;this.H=!1;this.i=this.w=null;this.U={};this.na=["onReady"];this.W=null;this.fa=NaN;this.O={};Ch(this);this.V("WATCH_LATER_VIDEO_ADDED",this.Da.bind(this));this.V("WATCH_LATER_VIDEO_REMOVED",this.Ea.bind(this));this.V("onAdAnnounce",this.qa.bind(this));this.oa=new Mg(this);$c(this,Da(ad,this.oa))}
n(Bh,J);h=Bh.prototype;
h.da=function(a){if(!this.f){a instanceof Jg||(a=new Jg(a));this.X=a;this.b=a.clone();this.g=this.b.attrs.id||this.g;"video-player"==this.g&&(this.g=this.D,this.b.attrs.id=this.D);this.j.id==this.g&&(this.g+="-player",this.b.attrs.id=this.g);this.b.args.enablejsapi="1";this.b.args.playerapiid=this.D;this.R||(this.R=Dh(this,this.b.args.jsapicallback||"onYouTubePlayerReady"));this.b.args.jsapicallback=null;if(a=this.b.attrs.width)this.j.style.width=jc(Number(a)||a);if(a=this.b.attrs.height)this.j.style.height=jc(Number(a)||
a);Eh(this);this.m&&Fh(this)}};
h.ta=function(){return this.X};
function Fh(a){a.b.loaded||(a.b.loaded=!0,"0"!=a.b.args.autoplay?a.api.loadVideoByPlayerVars(a.b.args):a.api.cueVideoByPlayerVars(a.b.args))}
function Gh(a){var b=!0,c=Hh(a);c&&a.b&&(a=a.b,b=Te(c,"version")==a.assets.js);return b&&!!w("yt.player.Application.create")}
function Eh(a){if(!a.f&&!a.H){var b=Gh(a);if(b&&"html5"==(Hh(a)?"html5":null))a.N="html5",a.m||Ih(a);else if(Jh(a),a.N="html5",b&&a.i)a.T.appendChild(a.i),Ih(a);else{a.b.loaded=!0;var c=!1;a.w=function(){c=!0;var b=a.b.clone();w("yt.player.Application.create")(a.T,b);Ih(a)};
a.H=!0;b?a.w():(gf(a.b.assets.js,a.w),Og(a.b.assets.css),Kh(a)&&!c&&u("yt.player.Application.create",null,void 0))}}}
function Hh(a){var b=Vb(a.g);!b&&a.j&&a.j.querySelector&&(b=a.j.querySelector("#"+a.g));return b}
function Ih(a){if(!a.f){var b=Hh(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);c?(a.H=!1,b.isNotServable&&b.isNotServable(a.b.args.video_id)||Lh(a)):a.fa=T(function(){Ih(a)},50)}}
function Lh(a){Ch(a);a.m=!0;var b=Hh(a);b.addEventListener&&(a.B=Mh(a,b,"addEventListener"));b.removeEventListener&&(a.P=Mh(a,b,"removeEventListener"));var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=0;d<c.length;d++){var e=c[d];a.api[e]||(a.api[e]=Mh(a,b,e))}for(var f in a.h)a.B(f,a.h[f]);Fh(a);a.R&&a.R(a.api);a.G.K("onReady",a.api)}
function Mh(a,b,c){var d=b[c];return function(){try{return a.W=null,d.apply(b,arguments)}catch(e){"sendAbandonmentPing"!=c&&(e.message+=" ("+c+")",a.W=e,me(e))}}}
function Ch(a){a.m=!1;if(a.P)for(var b in a.h)a.P(b,a.h[b]);for(var c in a.O)U(parseInt(c,10));a.O={};a.B=null;a.P=null;for(var d in a.api)a.api[d]=null;a.api.addEventListener=a.V.bind(a);a.api.removeEventListener=a.Ha.bind(a);a.api.destroy=a.dispose.bind(a);a.api.getLastError=a.ua.bind(a);a.api.getPlayerType=a.va.bind(a);a.api.getCurrentVideoConfig=a.ta.bind(a);a.api.loadNewVideoConfig=a.da.bind(a);a.api.isReady=a.Ca.bind(a)}
h.Ca=function(){return this.m};
h.V=function(a,b){var c=this,d=Dh(this,b);if(d){if(!(0<=Ha(this.na,a)||this.h[a])){var e=Nh(this,a);this.B&&this.B(a,e)}this.G.subscribe(a,d);"onReady"==a&&this.m&&T(function(){d(c.api)},0)}};
h.Ha=function(a,b){if(!this.f){var c=Dh(this,b);c&&Nd(this.G,a,c)}};
function Dh(a,b){var c=b;if("string"==typeof b){if(a.U[b])return a.U[b];c=function(){var a=w(b);a&&a.apply(q,arguments)};
a.U[b]=c}return c?c:null}
function Nh(a,b){var c="ytPlayer"+b+a.D;a.h[b]=c;q[c]=function(c){var d=T(function(){if(!a.f){a.G.K(b,c);var e=a.O,g=String(d);g in e&&delete e[g]}},0);
hb(a.O,String(d))};
return c}
h.qa=function(a){bf("a11y-announce",a)};
h.Da=function(a){bf("WATCH_LATER_VIDEO_ADDED",a)};
h.Ea=function(a){bf("WATCH_LATER_VIDEO_REMOVED",a)};
h.va=function(){return this.N||(Hh(this)?"html5":null)};
h.ua=function(){return this.W};
function Jh(a){Ah("dcp");a.cancel();Ch(a);a.N=null;a.b&&(a.b.loaded=!1);var b=Hh(a);b&&(Gh(a)||!Kh(a)?a.i=b:(b&&b.destroy&&b.destroy(),a.i=null));for(a=a.T;b=a.firstChild;)a.removeChild(b)}
h.cancel=function(){this.w&&nf(this.b.assets.js,this.w);U(this.fa);this.H=!1};
h.l=function(){Jh(this);if(this.i&&this.b&&this.i.destroy)try{this.i.destroy()}catch(b){R(b)}this.U=null;for(var a in this.h)q[this.h[a]]=null;this.X=this.b=this.api=null;delete this.T;delete this.j;J.prototype.l.call(this)};
function Kh(a){return a.b&&a.b.args&&a.b.args.fflags?-1!=a.b.args.fflags.indexOf("player_destroy_old_version=true"):!1}
;var Oh={},Ph="player_uid_"+(1E9*Math.random()>>>0);function Qh(a){var b="player";b=t(b)?Vb(b):b;var c=Ph+"_"+(b[za]||(b[za]=++Aa)),d=Oh[c];if(d)return d.da(a),d.api;d=new Bh(b,c);Oh[c]=d;bf("player-added",d.api);$c(d,Da(Rh,d));T(function(){d.da(a)},0);
return d.api}
function Rh(a){delete Oh[a.D]}
;function Sh(){var a=Th(),b=Uh();if(!a&&!b||!window.JSON)return null;try{var c=a.get("yt-player-two-stage-token")}catch(d){}if(!t(c))try{c=b.get("yt-player-two-stage-token")}catch(d){}if(!t(c))return null;try{c=JSON.parse(c,void 0)}catch(d){}return c}
var Uh=Eb(function(){var a=new Yd;return a.isAvailable()?new Ud(a):null}),Th=Eb(function(){var a=new Zd;
return a.isAvailable()?new Ud(a):null});function Vh(a){return(0==a.search("cue")||0==a.search("load"))&&"loadModule"!=a}
function Wh(a,b,c){t(a)&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});b=/\/([ve]|embed)\/([^#?]+)/.exec(a.mediaContentUrl);a.videoId=b&&b[2]?b[2]:null;return Xh(a)}
function Xh(a,b,c){if(x(a)){b="endSeconds startSeconds mediaContentUrl suggestedQuality videoId two_stage_token".split(" ");c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}return{videoId:a,startSeconds:b,suggestedQuality:c}}
function Yh(a,b,c,d){if(x(a)&&!wa(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};t(a)&&16==a.length?b.list="PL"+a:b.playlist=a;return b}
function Zh(a){var b=a.video_id||a.videoId;if(t(b)){var c=Sh()||{},d=Sh()||{};r(void 0)?d[b]=void 0:delete d[b];var e=z()+3E5,f=Uh();if(f&&window.JSON){t(d)||(d=JSON.stringify(d,void 0));try{f.set("yt-player-two-stage-token",d,e)}catch(g){f.remove("yt-player-two-stage-token")}}(b=c[b])&&(a.two_stage_token=b)}}
;function $h(a){J.call(this);this.b=a;this.b.subscribe("command",this.ka,this);this.g={};this.i=!1}
B($h,J);h=$h.prototype;h.start=function(){this.i||this.f||(this.i=!0,ai(this.b,"RECEIVING"))};
h.ka=function(a,b,c){if(this.i&&!this.f){var d=b||{};switch(a){case "addEventListener":t(d.event)&&(a=d.event,a in this.g||(c=y(this.Ja,this,a),this.g[a]=c,this.addEventListener(a,c)));break;case "removeEventListener":t(d.event)&&bi(this,d.event);break;default:this.h.isReady()&&this.h[a]&&(b=ci(a,b||{}),c=this.h.handleExternalCall(a,b,c||null),(c=di(a,c))&&this.i&&!this.f&&ai(this.b,a,c))}}};
h.Ja=function(a,b){this.i&&!this.f&&ai(this.b,a,this.Z(a,b))};
h.Z=function(a,b){if(null!=b)return{value:b}};
function bi(a,b){b in a.g&&(a.removeEventListener(b,a.g[b]),delete a.g[b])}
h.l=function(){var a=this.b;a.f||Nd(a.b,"command",this.ka,this);this.b=null;for(var b in this.g)bi(this,b);$h.A.l.call(this)};function ei(a,b){$h.call(this,b);this.h=a;this.start()}
B(ei,$h);ei.prototype.addEventListener=function(a,b){this.h.addEventListener(a,b)};
ei.prototype.removeEventListener=function(a,b){this.h.removeEventListener(a,b)};
function ci(a,b){switch(a){case "loadVideoById":return b=Xh(b),Zh(b),[b];case "cueVideoById":return b=Xh(b),Zh(b),[b];case "loadVideoByPlayerVars":return Zh(b),[b];case "cueVideoByPlayerVars":return Zh(b),[b];case "loadPlaylist":return b=Yh(b),Zh(b),[b];case "cuePlaylist":return b=Yh(b),Zh(b),[b];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];
case "setLoop":return[b.loopPlaylists];case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey]}return[]}
function di(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
ei.prototype.Z=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return ei.A.Z.call(this,a,b)};
ei.prototype.l=function(){ei.A.l.call(this);delete this.h};function fi(a,b,c,d){J.call(this);this.g=b||null;this.w="*";this.h=c||null;this.sessionId=null;this.channel=d||null;this.D=!!a;this.m=y(this.B,this);window.addEventListener("message",this.m)}
n(fi,J);fi.prototype.B=function(a){if(!("*"!=this.h&&a.origin!=this.h||this.g&&a.source!=this.g)&&t(a.data)){try{var b=JSON.parse(a.data)}catch(c){return}if(!(null==b||this.D&&(this.sessionId&&this.sessionId!=b.id||this.channel&&this.channel!=b.channel))&&b)switch(b.event){case "listening":"null"!=a.origin&&(this.h=this.w=a.origin);this.g=a.source;this.sessionId=b.id;this.b&&(this.b(),this.b=null);break;case "command":this.i&&(!this.j||0<=Ha(this.j,b.func))&&this.i(b.func,b.args,a.origin)}}};
fi.prototype.sendMessage=function(a,b){var c=b||this.g;if(c){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var d=od(a);c.postMessage(d,this.w)}catch(e){R(e,"WARNING")}}};
fi.prototype.l=function(){window.removeEventListener("message",this.m);J.prototype.l.call(this)};function gi(a,b,c){fi.call(this,a,b,c||P("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname,"widget");this.j=this.b=this.i=null}
n(gi,fi);function hi(){var a=this.f=new gi(!!P("WIDGET_ID_ENFORCE")),b=y(this.Ga,this);a.i=b;a.j=null;this.f.channel="widget";if(a=P("WIDGET_ID"))this.f.sessionId=a;this.h=[];this.j=!1;this.i={}}
h=hi.prototype;h.Ga=function(a,b,c){"addEventListener"==a&&b?(a=b[0],this.i[a]||"onReady"==a||(this.addEventListener(a,ii(this,a)),this.i[a]=!0)):this.ma(a,b,c)};
h.ma=function(){};
function ii(a,b){return y(function(a){this.sendMessage(b,a)},a)}
h.addEventListener=function(){};
h.sa=function(){this.j=!0;this.sendMessage("initialDelivery",this.aa());this.sendMessage("onReady");E(this.h,this.la,this);this.h=[]};
h.aa=function(){return null};
function ji(a,b){a.sendMessage("infoDelivery",b)}
h.la=function(a){this.j?this.f.sendMessage(a):this.h.push(a)};
h.sendMessage=function(a,b){this.la({event:a,info:void 0==b?null:b})};
h.dispose=function(){this.f=null};function ki(a){hi.call(this);this.b=a;this.g=[];this.addEventListener("onReady",y(this.Fa,this));this.addEventListener("onVideoProgress",y(this.Na,this));this.addEventListener("onVolumeChange",y(this.Oa,this));this.addEventListener("onApiChange",y(this.Ia,this));this.addEventListener("onPlaybackQualityChange",y(this.Ka,this));this.addEventListener("onPlaybackRateChange",y(this.La,this));this.addEventListener("onStateChange",y(this.Ma,this));this.addEventListener("onWebglSettingsChanged",y(this.Pa,
this))}
B(ki,hi);h=ki.prototype;h.ma=function(a,b,c){if(this.b[a]){b=b||[];if(0<b.length&&Vh(a)){var d=b;if(x(d[0])&&!wa(d[0]))d=d[0];else{var e={};switch(a){case "loadVideoById":case "cueVideoById":e=Xh.apply(window,d);break;case "loadVideoByUrl":case "cueVideoByUrl":e=Wh.apply(window,d);break;case "loadPlaylist":case "cuePlaylist":e=Yh.apply(window,d)}d=e}Zh(d);b.length=1;b[0]=d}this.b.handleExternalCall(a,b,c);Vh(a)&&ji(this,this.aa())}};
h.Fa=function(){var a=y(this.sa,this);this.f.b=a};
h.addEventListener=function(a,b){this.g.push({eventType:a,listener:b});this.b.addEventListener(a,b)};
h.aa=function(){if(!this.b)return null;var a=this.b.getApiInterface();Ma(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c],f=e;if(0==f.search("get")||0==f.search("is")){f=e;var g=0;0==f.search("get")?g=3:0==f.search("is")&&(g=2);f=f.charAt(g).toLowerCase()+f.substr(g+1);try{var k=this.b[e]();b[f]=k}catch(l){}}}b.videoData=this.b.getVideoData();b.currentTimeLastUpdated_=z()/1E3;return b};
h.Ma=function(a){a={playerState:a,currentTime:this.b.getCurrentTime(),duration:this.b.getDuration(),videoData:this.b.getVideoData(),videoStartBytes:0,videoBytesTotal:this.b.getVideoBytesTotal(),videoLoadedFraction:this.b.getVideoLoadedFraction(),playbackQuality:this.b.getPlaybackQuality(),availableQualityLevels:this.b.getAvailableQualityLevels(),currentTimeLastUpdated_:z()/1E3,playbackRate:this.b.getPlaybackRate(),mediaReferenceTime:this.b.getMediaReferenceTime()};this.b.getVideoUrl&&(a.videoUrl=
this.b.getVideoUrl());this.b.getVideoContentRect&&(a.videoContentRect=this.b.getVideoContentRect());this.b.getProgressState&&(a.progressState=this.b.getProgressState());this.b.getPlaylist&&(a.playlist=this.b.getPlaylist());this.b.getPlaylistIndex&&(a.playlistIndex=this.b.getPlaylistIndex());this.b.getStoryboardFormat&&(a.storyboardFormat=this.b.getStoryboardFormat());ji(this,a)};
h.Ka=function(a){ji(this,{playbackQuality:a})};
h.La=function(a){ji(this,{playbackRate:a})};
h.Ia=function(){for(var a=this.b.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.b.getOptions(e);b[e]={options:f};for(var g=0,k=f.length;g<k;g++){var l=f[g],m=this.b.getOption(e,l);b[e][l]=m}}this.sendMessage("apiInfoDelivery",b)};
h.Oa=function(){ji(this,{muted:this.b.isMuted(),volume:this.b.getVolume()})};
h.Na=function(a){a={currentTime:a,videoBytesLoaded:this.b.getVideoBytesLoaded(),videoLoadedFraction:this.b.getVideoLoadedFraction(),currentTimeLastUpdated_:z()/1E3,playbackRate:this.b.getPlaybackRate(),mediaReferenceTime:this.b.getMediaReferenceTime()};this.b.getProgressState&&(a.progressState=this.b.getProgressState());ji(this,a)};
h.Pa=function(){var a={sphericalProperties:this.b.getSphericalProperties()};ji(this,a)};
h.dispose=function(){ki.A.dispose.call(this);for(var a=0;a<this.g.length;a++){var b=this.g[a];this.b.removeEventListener(b.eventType,b.listener)}this.g=[]};function li(a){a=void 0===a?!1:a;J.call(this);this.b=new L(a);$c(this,Da(ad,this.b))}
B(li,J);li.prototype.subscribe=function(a,b,c){return this.f?0:this.b.subscribe(a,b,c)};
li.prototype.i=function(a,b){this.f||this.b.K.apply(this.b,arguments)};function mi(a,b,c){li.call(this);this.g=a;this.h=b;this.j=c}
B(mi,li);function ai(a,b,c){if(!a.f){var d=a.g;d.f||a.h!=d.b||(a={id:a.j,command:b},c&&(a.data=c),d.b.postMessage(od(a),d.h))}}
mi.prototype.l=function(){this.h=this.g=null;mi.A.l.call(this)};function ni(a,b,c){J.call(this);this.b=a;this.h=c;this.i=V(window,"message",y(this.j,this));this.g=new mi(this,a,b);$c(this,Da(ad,this.g))}
B(ni,J);ni.prototype.j=function(a){var b;if(b=!this.f)if(b=a.origin==this.h)a:{b=this.b;do{b:{var c=a.source;do{if(c==b){c=!0;break b}if(c==c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(b=a.data,t(b))){try{b=JSON.parse(b)}catch(d){return}b.command&&(c=this.g,c.f||c.i("command",b.command,b.data,a.origin))}};
ni.prototype.l=function(){Of(this.i);this.b=null;ni.A.l.call(this)};function oi(){var a=jb(pi),b;return Cd(new K(function(c,d){a.onSuccess=function(a){pe(a)?c(a):d(new qi("Request failed, status="+a.status,"net.badstatus",a))};
a.onError=function(a){d(new qi("Unknown request error","net.unknown",a))};
a.M=function(a){d(new qi("Request timed out","net.timeout",a))};
b=Be("//googleads.g.doubleclick.net/pagead/id",a)}),function(a){a instanceof Dd&&b.abort();
return Ad(a)})}
function qi(a,b){D.call(this,a+", errorCode="+b);this.errorCode=b;this.name="PromiseAjaxError"}
n(qi,D);function ri(a){this.g=void 0===a?null:a;this.f=0;this.b=null}
ri.prototype.then=function(a,b,c){return this.g?this.g.then(a,b,c):1===this.f&&a?(a=a.call(c,this.b),vd(a)?a:si(a)):2===this.f&&b?(a=b.call(c,this.b),vd(a)?a:ti(a)):this};
ri.prototype.getValue=function(){return this.b};
ud(ri);function ti(a){var b=new ri;a=void 0===a?null:a;b.f=2;b.b=void 0===a?null:a;return b}
function si(a){var b=new ri;a=void 0===a?null:a;b.f=1;b.b=void 0===a?null:a;return b}
;function ui(a){D.call(this,a.message||a.description||a.name);this.isMissing=a instanceof vi;this.isTimeout=a instanceof qi&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof Dd}
n(ui,D);ui.prototype.name="BiscottiError";function vi(){D.call(this,"Biscotti ID is missing from server")}
n(vi,D);vi.prototype.name="BiscottiMissingError";var pi={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},wi=null;function xi(){if("1"===db(ke(),"args","privembed"))return Ad(Error("Biscotti ID is not available in private embed mode"));wi||(wi=Cd(oi().then(yi),function(a){return zi(2,a)}));
return wi}
function yi(a){a=a.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new vi;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new vi;a=a.id;Ai(a);wi=si(a);Bi(18E5,2);return a}
function zi(a,b){var c=new ui(b);Ai("");wi=ti(c);0<a&&Bi(12E4,a-1);throw c;}
function Bi(a,b){T(function(){Cd(oi().then(yi,function(a){return zi(b,a)}),ta)},a)}
function Ai(a){u("yt.ads.biscotti.lastId_",a,void 0)}
function Ci(){try{var a=w("yt.ads.biscotti.getId_");return a?a():xi()}catch(b){return Ad(b)}}
;function Di(a){if("1"!==db(ke(),"args","privembed")){a&&(w("yt.ads.biscotti.getId_")||Ea("yt.ads.biscotti.getId_",xi));try{Ei().then(function(a){a.bsq=Fi++;He("//www.youtube.com/ad_data_204",{wa:!1,C:a,withCredentials:!0})},function(){}),T(Di,18E5)}catch(b){R(b)}}}
function Ei(){return Ci().then(function(a){var b={};b.dt=Dc;b.flash="0";a:{try{var c=window.top.location.href}catch(Va){c=2;break a}c=null!=c?c==window.document.location.href?0:1:2}b=(b.frm=c,b);b.u_tz=-(new Date).getTimezoneOffset();var d=void 0===d?C:d;try{var e=d.history.length}catch(Va){e=0}b.u_his=e;b.u_java=!!C.navigator&&"unknown"!==typeof C.navigator.javaEnabled&&!!C.navigator.javaEnabled&&C.navigator.javaEnabled();C.screen&&(b.u_h=C.screen.height,b.u_w=C.screen.width,b.u_ah=C.screen.availHeight,
b.u_aw=C.screen.availWidth,b.u_cd=C.screen.colorDepth);C.navigator&&C.navigator.plugins&&(b.u_nplug=C.navigator.plugins.length);C.navigator&&C.navigator.mimeTypes&&(b.u_nmime=C.navigator.mimeTypes.length);b.ca_type="image";e=window;try{var f=e.screenX;var g=e.screenY}catch(Va){}try{var k=e.outerWidth;var l=e.outerHeight}catch(Va){}try{var m=e.innerWidth;var A=e.innerHeight}catch(Va){}f=[e.screenLeft,e.screenTop,f,g,e.screen?e.screen.availWidth:void 0,e.screen?e.screen.availTop:void 0,k,l,m,A];g=window.top;
try{var v=(g||window).document,M="CSS1Compat"==v.compatMode?v.documentElement:v.body;var Fa=(new Ub(M.clientWidth,M.clientHeight)).round()}catch(Va){Fa=new Ub(-12245933,-12245933)}v={};M=new fe;q.SVGElement&&q.document.createElementNS&&M.set(0);g=ic();g["allow-top-navigation-by-user-activation"]&&M.set(1);g["allow-popups-to-escape-sandbox"]&&M.set(2);M=ge(M);v.bc=M;v.bih=Fa.height;v.biw=Fa.width;v.brdim=f.join();Fa=(v.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[Ga.visibilityState||Ga.webkitVisibilityState||
Ga.mozVisibilityState||""]||0,v.wgl=!!C.WebGLRenderingContext,v);for(var ie in Fa)b[ie]=Fa[ie];b.bid=a;return b})}
var Fi=0;var Z=w("ytglobal.prefsUserPrefsPrefs_")||{};u("ytglobal.prefsUserPrefsPrefs_",Z,void 0);function Gi(){this.b=P("ALT_PREF_COOKIE_NAME","PREF");var a=Db.get(""+this.b,void 0);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Z[d]=c.toString())}}}
h=Gi.prototype;h.get=function(a,b){Hi(a);Ii(a);var c=void 0!==Z[a]?Z[a].toString():null;return null!=c?c:b?b:""};
h.set=function(a,b){Hi(a);Ii(a);if(null==b)throw Error("ExpectedNotNull");Z[a]=b.toString()};
h.remove=function(a){Hi(a);Ii(a);delete Z[a]};
h.save=function(){og(this.b,this.dump(),63072E3)};
h.clear=function(){for(var a in Z)delete Z[a]};
h.dump=function(){var a=[],b;for(b in Z)a.push(b+"="+encodeURIComponent(String(Z[b])));return a.join("&")};
function Ii(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function Hi(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function Ji(a){a=void 0!==Z[a]?Z[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
ua(Gi);var Ki=null,Li=null,Mi=null,Ni={};function Oi(a){var b=a.id;a=a.ve_type;var c=Ag++;a=new yg({veType:a,veCounter:c,elementIndex:void 0,dataElement:void 0,youtubeData:void 0});Ni[b]=a;b=Fg();c=Eg();b&&c&&Ig(b,c,[a])}
function Pi(a){var b=a.csn;a=a.root_ve_type;if(b&&a&&(Gg(b,a),a=Eg()))for(var c in Ni){var d=Ni[c];d&&Ig(b,a,[d])}}
function Qi(a){Ni[a.id]=new yg({trackingParams:a.tracking_params})}
function Ri(a){var b=Fg();a=Ni[a.id];b&&a&&lg("visualElementGestured",{csn:b,ve:zg(a),gestureType:"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK"},ug)}
function Si(a){a=a.ids;var b=Fg();if(b)for(var c=0;c<a.length;c++){var d=Ni[a[c]];d&&lg("visualElementShown",{csn:b,ve:zg(d),eventType:1},ug)}}
function Ti(){var a=Ki;a&&a.startInteractionLogging&&a.startInteractionLogging()}
;u("yt.setConfig",O,void 0);u("yt.config.set",O,void 0);u("yt.setMsg",Qe,void 0);u("yt.msgs.set",Qe,void 0);u("yt.logging.errors.log",Oe,void 0);
u("writeEmbed",function(){var a=P("PLAYER_CONFIG",void 0);Di(!0);"gvn"==a.args.ps&&(document.body.style.backgroundColor="transparent");var b=document.referrer,c=P("POST_MESSAGE_ORIGIN");window!=window.top&&b&&b!=document.URL&&(a.args.loaderUrl=b);P("LIGHTWEIGHT_AUTOPLAY")&&(a.args.autoplay="1");a.args.autoplay&&Zh(a.args);Ki=a=Qh(a);a.addEventListener("onScreenChanged",Pi);a.addEventListener("onLogClientVeCreated",Oi);a.addEventListener("onLogServerVeCreated",Qi);a.addEventListener("onLogVeClicked",
Ri);a.addEventListener("onLogVesShown",Si);a.addEventListener("onReady",Ti);b=P("POST_MESSAGE_ID","player");P("ENABLE_JS_API")?Mi=new ki(a):P("ENABLE_POST_API")&&t(b)&&t(c)&&(Li=new ni(window.parent,b,c),Mi=new ei(a,Li.g));c=Q("BG_P");Ef(c)&&(P("BG_I")||P("BG_IU"))&&(Af=!0,zf.initialize(P("BG_I",null),P("BG_IU",null),c,Df,void 0));vf()},void 0);
u("yt.www.watch.ads.restrictioncookie.spr",function(a){Ke(a+"mac_204?action_fcts=1");return!0},void 0);
var Ui=le(function(){Ah("ol");var a=Gi.getInstance(),b=!!((Ji("f"+(Math.floor(119/31)+1))||0)&67108864),c=1<window.devicePixelRatio;if(document.body&&dd(document.body,"exp-invert-logo"))if(c&&!dd(document.body,"inverted-hdpi")){var d=document.body;d.classList?d.classList.add("inverted-hdpi"):dd(d,"inverted-hdpi")||(d.className+=0<d.className.length?" inverted-hdpi":"inverted-hdpi")}else!c&&dd(document.body,"inverted-hdpi")&&ed();b!=c&&(b="f"+(Math.floor(119/31)+1),d=Ji(b)||0,d=c?d|67108864:d&-67108865,
0==d?delete Z[b]:Z[b]=d.toString(16).toString(),a.save())}),Vi=le(function(){var a=Ki;
a&&a.sendAbandonmentPing&&a.sendAbandonmentPing();P("PL_ATT")&&zf.dispose();a=0;for(var b=tf.length;a<b;a++)sf(tf[a]);tf.length=0;mf("//static.doubleclick.net/instream/ad_status.js");uf=!1;O("DCLKSTAT",0);bd(Mi,Li);if(a=Ki)a.removeEventListener("onScreenChanged",Pi),a.removeEventListener("onLogClientVeCreated",Oi),a.removeEventListener("onLogServerVeCreated",Qi),a.removeEventListener("onLogVeClicked",Ri),a.removeEventListener("onLogVesShown",Si),a.removeEventListener("onReady",Ti),a.destroy();Ni=
{}});
window.addEventListener?(window.addEventListener("load",Ui),window.addEventListener("unload",Vi)):window.attachEvent&&(window.attachEvent("onload",Ui),window.attachEvent("onunload",Vi));Ea("yt.abuse.player.botguardInitialized",w("yt.abuse.player.botguardInitialized")||Ff);Ea("yt.abuse.player.invokeBotguard",w("yt.abuse.player.invokeBotguard")||Gf);Ea("yt.abuse.dclkstatus.checkDclkStatus",w("yt.abuse.dclkstatus.checkDclkStatus")||wf);
Ea("yt.player.exports.navigate",w("yt.player.exports.navigate")||Hg);Ea("yt.util.activity.init",w("yt.util.activity.init")||Rf);Ea("yt.util.activity.getTimeSinceActive",w("yt.util.activity.getTimeSinceActive")||Uf);Ea("yt.util.activity.setTimestamp",w("yt.util.activity.setTimestamp")||Sf);}).call(this);
