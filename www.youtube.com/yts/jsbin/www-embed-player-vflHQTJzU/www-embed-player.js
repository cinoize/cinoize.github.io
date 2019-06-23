(function(){var m;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
function q(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
var ba="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ca;
if("function"==typeof Object.setPrototypeOf)ca=Object.setPrototypeOf;else{var da;a:{var ea={a:!0},fa={};try{fa.__proto__=ea;da=fa.a;break a}catch(a){}da=!1}ca=da?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ha=ca;
function t(a,b){a.prototype=ba(b.prototype);a.prototype.constructor=a;if(ha)ha(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.C=b.prototype}
var ia="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},ja="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;
function ka(a,b){if(b){for(var c=ja,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in c||(c[f]={});c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ia(c,d,{configurable:!0,writable:!0,value:f})}}
function la(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
ka("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=la(this,b,"endsWith");b+="";void 0===c&&(c=d.length);for(var e=Math.max(0,Math.min(c|0,d.length)),f=b.length;0<f&&0<e;)if(d[--e]!=b[--f])return!1;return 0>=f}});
ka("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=la(this,b,"startsWith");b+="";for(var e=d.length,f=b.length,h=Math.max(0,Math.min(c|0,d.length)),g=0;g<f&&h<e;)if(d[h++]!=b[g++])return!1;return g>=f}});
function ma(){ma=function(){};
ja.Symbol||(ja.Symbol=na)}
function oa(a,b){this.f=a;ia(this,"description",{configurable:!0,writable:!0,value:b})}
oa.prototype.toString=function(){return this.f};
var na=function(){function a(c){if(this instanceof a)throw new TypeError("Symbol is not a constructor");return new oa("jscomp_symbol_"+(c||"")+"_"+b++,c)}
var b=0;return a}();
function pa(){ma();var a=ja.Symbol.iterator;a||(a=ja.Symbol.iterator=ja.Symbol("Symbol.iterator"));"function"!=typeof Array.prototype[a]&&ia(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return ra(aa(this))}});
pa=function(){}}
function ra(a){pa();a={next:a};a[ja.Symbol.iterator]=function(){return this};
return a}
function sa(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ta="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)sa(d,e)&&(a[e]=d[e])}return a};
ka("Object.assign",function(a){return a||ta});
ka("Promise",function(a){function b(h){this.g=0;this.h=void 0;this.f=[];var g=this.i();try{h(g.resolve,g.reject)}catch(k){g.reject(k)}}
function c(){this.f=null}
function d(h){return h instanceof b?h:new b(function(g){g(h)})}
if(a)return a;c.prototype.g=function(h){if(null==this.f){this.f=[];var g=this;this.h(function(){g.j()})}this.f.push(h)};
var e=ja.setTimeout;c.prototype.h=function(h){e(h,0)};
c.prototype.j=function(){for(;this.f&&this.f.length;){var h=this.f;this.f=[];for(var g=0;g<h.length;++g){var k=h[g];h[g]=null;try{k()}catch(l){this.i(l)}}}this.f=null};
c.prototype.i=function(h){this.h(function(){throw h;})};
b.prototype.i=function(){function h(l){return function(n){k||(k=!0,l.call(g,n))}}
var g=this,k=!1;return{resolve:h(this.B),reject:h(this.j)}};
b.prototype.B=function(h){if(h===this)this.j(new TypeError("A Promise cannot resolve to itself"));else if(h instanceof b)this.D(h);else{a:switch(typeof h){case "object":var g=null!=h;break a;case "function":g=!0;break a;default:g=!1}g?this.A(h):this.l(h)}};
b.prototype.A=function(h){var g=void 0;try{g=h.then}catch(k){this.j(k);return}"function"==typeof g?this.G(g,h):this.l(h)};
b.prototype.j=function(h){this.w(2,h)};
b.prototype.l=function(h){this.w(1,h)};
b.prototype.w=function(h,g){if(0!=this.g)throw Error("Cannot settle("+h+", "+g+"): Promise already settled in state"+this.g);this.g=h;this.h=g;this.o()};
b.prototype.o=function(){if(null!=this.f){for(var h=0;h<this.f.length;++h)f.g(this.f[h]);this.f=null}};
var f=new c;b.prototype.D=function(h){var g=this.i();h.X(g.resolve,g.reject)};
b.prototype.G=function(h,g){var k=this.i();try{h.call(g,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(h,g){function k(u,p){return"function"==typeof u?function(C){try{l(u(C))}catch(K){n(K)}}:p}
var l,n,r=new b(function(u,p){l=u;n=p});
this.X(k(h,l),k(g,n));return r};
b.prototype["catch"]=function(h){return this.then(void 0,h)};
b.prototype.X=function(h,g){function k(){switch(l.g){case 1:h(l.h);break;case 2:g(l.h);break;default:throw Error("Unexpected state: "+l.g);}}
var l=this;null==this.f?f.g(k):this.f.push(k)};
b.resolve=d;b.reject=function(h){return new b(function(g,k){k(h)})};
b.race=function(h){return new b(function(g,k){for(var l=q(h),n=l.next();!n.done;n=l.next())d(n.value).X(g,k)})};
b.all=function(h){var g=q(h),k=g.next();return k.done?d([]):new b(function(l,n){function r(C){return function(K){u[C]=K;p--;0==p&&l(u)}}
var u=[],p=0;do u.push(void 0),p++,d(k.value).X(r(u.length-1),n),k=g.next();while(!k.done)})};
return b});
ka("WeakMap",function(a){function b(g){this.f=(h+=Math.random()+1).toString();if(g){g=q(g);for(var k;!(k=g.next()).done;)k=k.value,this.set(k[0],k[1])}}
function c(){}
function d(g){if(!sa(g,f)){var k=new c;ia(g,f,{value:k})}}
function e(g){var k=Object[g];k&&(Object[g]=function(l){if(l instanceof c)return l;d(l);return k(l)})}
if(function(){if(!a||!Object.seal)return!1;try{var g=Object.seal({}),k=Object.seal({}),l=new a([[g,2],[k,3]]);if(2!=l.get(g)||3!=l.get(k))return!1;l["delete"](g);l.set(k,4);return!l.has(g)&&4==l.get(k)}catch(n){return!1}}())return a;
var f="$jscomp_hidden_"+Math.random();e("freeze");e("preventExtensions");e("seal");var h=0;b.prototype.set=function(g,k){d(g);if(!sa(g,f))throw Error("WeakMap key fail: "+g);g[f][this.f]=k;return this};
b.prototype.get=function(g){return sa(g,f)?g[f][this.f]:void 0};
b.prototype.has=function(g){return sa(g,f)&&sa(g[f],this.f)};
b.prototype["delete"]=function(g){return sa(g,f)&&sa(g[f],this.f)?delete g[f][this.f]:!1};
return b});
ka("Map",function(a){function b(){var g={};return g.previous=g.next=g.head=g}
function c(g,k){var l=g.f;return ra(function(){if(l){for(;l.head!=g.f;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(g,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++h,f.set(k,l)):l="p_"+k;var n=g.g[l];if(n&&sa(g.g,l))for(var r=0;r<n.length;r++){var u=n[r];if(k!==k&&u.key!==u.key||k===u.key)return{id:l,list:n,index:r,u:u}}return{id:l,list:n,index:-1,u:void 0}}
function e(g){this.g={};this.f=b();this.size=0;if(g){g=q(g);for(var k;!(k=g.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var g=Object.seal({x:4}),k=new a(q([[g,"s"]]));if("s"!=k.get(g)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),n=l.next();if(n.done||n.value[0]!=g||"s"!=n.value[1])return!1;n=l.next();return n.done||4!=n.value[0].x||"t"!=n.value[1]||!l.next().done?!1:!0}catch(r){return!1}}())return a;
pa();var f=new WeakMap;e.prototype.set=function(g,k){g=0===g?0:g;var l=d(this,g);l.list||(l.list=this.g[l.id]=[]);l.u?l.u.value=k:(l.u={next:this.f,previous:this.f.previous,head:this.f,key:g,value:k},l.list.push(l.u),this.f.previous.next=l.u,this.f.previous=l.u,this.size++);return this};
e.prototype["delete"]=function(g){g=d(this,g);return g.u&&g.list?(g.list.splice(g.index,1),g.list.length||delete this.g[g.id],g.u.previous.next=g.u.next,g.u.next.previous=g.u.previous,g.u.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.g={};this.f=this.f.previous=b();this.size=0};
e.prototype.has=function(g){return!!d(this,g).u};
e.prototype.get=function(g){return(g=d(this,g).u)&&g.value};
e.prototype.entries=function(){return c(this,function(g){return[g.key,g.value]})};
e.prototype.keys=function(){return c(this,function(g){return g.key})};
e.prototype.values=function(){return c(this,function(g){return g.value})};
e.prototype.forEach=function(g,k){for(var l=this.entries(),n;!(n=l.next()).done;)n=n.value,g.call(k,n[1],n[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var h=0;return e});
ka("Set",function(a){function b(c){this.f=new Map;if(c){c=q(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.f.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(q([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(h){return!1}}())return a;
pa();b.prototype.add=function(c){c=0===c?0:c;this.f.set(c,c);this.size=this.f.size;return this};
b.prototype["delete"]=function(c){c=this.f["delete"](c);this.size=this.f.size;return c};
b.prototype.clear=function(){this.f.clear();this.size=0};
b.prototype.has=function(c){return this.f.has(c)};
b.prototype.entries=function(){return this.f.entries()};
b.prototype.values=function(){return this.f.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.f.forEach(function(f){return c.call(d,f,f,e)})};
return b});
ka("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==la(this,b,"includes").indexOf(b,c||0)}});
var ua=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=ba(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}();
ka("Reflect.construct",function(){return ua});
var v=this||self;function w(a){return void 0!==a}
function x(a){return"string"==typeof a}
function y(a,b,c){a=a.split(".");c=c||v;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&w(b)?c[d]=b:c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}}
var va=/^[\w+/_-]+[=]{0,2}$/,wa=null;function z(a,b){for(var c=a.split("."),d=b||v,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function xa(){}
function ya(a){a.fa=void 0;a.getInstance=function(){return a.fa?a.fa:a.fa=new a}}
function za(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function Aa(a){return"array"==za(a)}
function Ba(a){var b=za(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Ca(a){return"function"==za(a)}
function Da(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
var Ea="closure_uid_"+(1E9*Math.random()>>>0),Fa=0;function Ga(a,b,c){return a.call.apply(a.bind,arguments)}
function Ha(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function A(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?A=Ga:A=Ha;return A.apply(null,arguments)}
function Ia(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
var B=Date.now||function(){return+new Date};
function Ja(a,b){y(a,b,void 0)}
function D(a,b){function c(){}
c.prototype=b.prototype;a.C=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.mb=function(d,e,f){for(var h=Array(arguments.length-2),g=2;g<arguments.length;g++)h[g-2]=arguments[g];return b.prototype[e].apply(d,h)}}
;var E=window;function F(a){if(Error.captureStackTrace)Error.captureStackTrace(this,F);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
D(F,Error);F.prototype.name="CustomError";var La=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(x(a))return x(b)&&1==b.length?a.indexOf(b,0):-1;
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},G=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=x(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Ma=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f=x(a)?a.split(""):a,h=0;h<c;h++)if(h in f){var g=f[h];
b.call(void 0,g,h,a)&&(d[e++]=g)}return d},Na=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e=x(a)?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},Oa=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
G(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function Pa(a,b){a:{var c=a.length;for(var d=x(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:x(a)?a.charAt(c):a[c]}
function Qa(a,b){var c=La(a,b);0<=c&&Array.prototype.splice.call(a,c,1)}
function Ra(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Sa(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ba(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var h=0;h<f;h++)a[e+h]=d[h]}else a.push(d)}}
;function Ta(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;function Ua(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function Va(a,b){var c=Ba(b),d=c?b:arguments;for(c=c?0:1;c<d.length;c++){if(null==a)return;a=a[d[c]]}return a}
function Wa(a){var b=Xa,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function Ya(a){for(var b in a)return!1;return!0}
function Za(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function $a(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(c in b)if(!(c in a))return!1;return!0}
function ab(a){var b={},c;for(c in a)b[c]=a[c];return b}
function bb(a){var b=za(a);if("object"==b||"array"==b){if(Ca(a.clone))return a.clone();b="array"==b?[]:{};for(var c in a)b[c]=bb(a[c]);return b}return a}
var cb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function db(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<cb.length;f++)c=cb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function eb(a,b){this.f=a===fb&&b||"";this.g=gb}
eb.prototype.J=!0;eb.prototype.I=function(){return this.f};
eb.prototype.toString=function(){return"Const{"+this.f+"}"};
var gb={},fb={},hb;hb=new eb(fb,"");function ib(){this.f="";this.g=jb}
ib.prototype.J=!0;ib.prototype.I=function(){return this.f.toString()};
ib.prototype.ea=!0;ib.prototype.ba=function(){return 1};
function kb(a){if(a instanceof ib&&a.constructor===ib&&a.g===jb)return a.f;za(a);return"type_error:TrustedResourceUrl"}
var jb={};function lb(a){var b=new ib;b.f=a;return b}
;var mb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function nb(a,b){if(b)a=a.replace(ob,"&amp;").replace(pb,"&lt;").replace(qb,"&gt;").replace(rb,"&quot;").replace(sb,"&#39;").replace(tb,"&#0;");else{if(!ub.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(ob,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(pb,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(qb,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(rb,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(sb,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(tb,"&#0;"))}return a}
var ob=/&/g,pb=/</g,qb=/>/g,rb=/"/g,sb=/'/g,tb=/\x00/g,ub=/[\x00&<>"']/;function H(){this.f="";this.g=vb}
H.prototype.J=!0;H.prototype.I=function(){return this.f.toString()};
H.prototype.ea=!0;H.prototype.ba=function(){return 1};
function wb(a){if(a instanceof H&&a.constructor===H&&a.g===vb)return a.f;za(a);return"type_error:SafeUrl"}
var xb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function yb(a){if(a instanceof H)return a;a="object"==typeof a&&a.J?a.I():String(a);xb.test(a)||(a="about:invalid#zClosurez");return zb(a)}
var vb={};function zb(a){var b=new H;b.f=a;return b}
zb("about:blank");var Ab;a:{var Bb=v.navigator;if(Bb){var Cb=Bb.userAgent;if(Cb){Ab=Cb;break a}}Ab=""};function Db(){this.f="";this.h=Eb;this.g=null}
Db.prototype.ea=!0;Db.prototype.ba=function(){return this.g};
Db.prototype.J=!0;Db.prototype.I=function(){return this.f.toString()};
function Gb(a){if(a instanceof Db&&a.constructor===Db&&a.h===Eb)return a.f;za(a);return"type_error:SafeHtml"}
var Eb={};function Hb(a,b){var c=new Db;c.f=a;c.g=b;return c}
Hb("<!DOCTYPE html>",0);var Ib=Hb("",0);Hb("<br>",0);function Jb(a,b){var c=b instanceof H?b:yb(b);a.href=wb(c)}
function Kb(a){var b=lb(hb instanceof eb&&hb.constructor===eb&&hb.g===gb?hb.f:"type_error:Const");a.src=kb(b).toString()}
function Lb(a,b){a.src=kb(b);if(null===wa)b:{var c=v.document;if((c=c.querySelector&&c.querySelector("script[nonce]"))&&(c=c.nonce||c.getAttribute("nonce"))&&va.test(c)){wa=c;break b}wa=""}c=wa;c&&a.setAttribute("nonce",c)}
;function Mb(a){return a=nb(a,void 0)}
function Nb(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var Ob=-1!=Ab.indexOf("Trident")||-1!=Ab.indexOf("MSIE"),Pb;var Qb;if(v.document&&Ob){var Rb=v.document;Qb=Rb?Rb.documentMode:void 0}else Qb=void 0;Pb=Qb;var Sb=null,Tb=null;function Ub(a){this.f=a||{cookie:""}}
m=Ub.prototype;m.isEnabled=function(){return navigator.cookieEnabled};
m.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');w(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(B()+1E3*c)).toUTCString();this.f.cookie=a+"="+b+e+d+c+f};
m.get=function(a,b){for(var c=a+"=",d=(this.f.cookie||"").split(";"),e=0,f;e<d.length;e++){f=mb(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
m.remove=function(a,b,c){var d=w(this.get(a));this.set(a,"",0,b,c);return d};
m.isEmpty=function(){return!this.f.cookie};
m.clear=function(){for(var a=(this.f.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=mb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Vb=new Ub("undefined"==typeof document?null:document);function Wb(a){var b=z("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if(x(a))return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(f){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||v.$googDebugFname||b}catch(f){e="Not available",c=!0}return!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:(b=a.message,null==b&&(a.constructor&&a.constructor instanceof
Function?(a.constructor.name?b=a.constructor.name:(b=a.constructor,Xb[b]?b=Xb[b]:(b=String(b),Xb[b]||(c=/function\s+([^\(]+)/m.exec(b),Xb[b]=c?c[1]:"[Anonymous]"),b=Xb[b])),b='Unknown Error of type "'+b+'"'):b="Unknown Error of unknown type"),{message:b,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:a.stack||"Not available"})}
var Xb={};var Yb=!Ob||9<=Number(Pb);function Zb(a,b){this.x=w(a)?a:0;this.y=w(b)?b:0}
m=Zb.prototype;m.clone=function(){return new Zb(this.x,this.y)};
m.equals=function(a){return a instanceof Zb&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
m.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
m.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
m.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function $b(a,b){this.width=a;this.height=b}
m=$b.prototype;m.clone=function(){return new $b(this.width,this.height)};
m.aspectRatio=function(){return this.width/this.height};
m.isEmpty=function(){return!(this.width*this.height)};
m.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
m.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
m.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function ac(a){var b=document;return x(a)?b.getElementById(a):a}
function bc(a,b){Ua(b,function(c,d){c&&"object"==typeof c&&c.J&&(c=c.I());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:cc.hasOwnProperty(d)?a.setAttribute(cc[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})}
var cc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function dc(a,b,c){var d=arguments,e=document,f=String(d[0]),h=d[1];if(!Yb&&h&&(h.name||h.type)){f=["<",f];h.name&&f.push(' name="',Mb(h.name),'"');if(h.type){f.push(' type="',Mb(h.type),'"');var g={};db(g,h);delete g.type;h=g}f.push(">");f=f.join("")}f=e.createElement(f);h&&(x(h)?f.className=h:Aa(h)?f.className=h.join(" "):bc(f,h));2<d.length&&ec(e,f,d);return f}
function ec(a,b,c){function d(h){h&&b.appendChild(x(h)?a.createTextNode(h):h)}
for(var e=2;e<c.length;e++){var f=c[e];!Ba(f)||Da(f)&&0<f.nodeType?d(f):G(fc(f)?Ra(f):f,d)}}
function fc(a){if(a&&"number"==typeof a.length){if(Da(a))return"function"==typeof a.item||"string"==typeof a.item;if(Ca(a))return"function"==typeof a.item}return!1}
function gc(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function hc(a){ic();return lb(a)}
var ic=xa;function jc(a){var b=kc;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function lc(){var a=[];jc(function(b){a.push(b)});
return a}
var kc={Ya:"allow-forms",Za:"allow-modals",ab:"allow-orientation-lock",bb:"allow-pointer-lock",cb:"allow-popups",eb:"allow-popups-to-escape-sandbox",fb:"allow-presentation",gb:"allow-same-origin",hb:"allow-scripts",ib:"allow-top-navigation",jb:"allow-top-navigation-by-user-activation"},mc=Ta(function(){return lc()});
function nc(){var a=document.createElement("IFRAME").sandbox,b=a&&a.supports;if(!b)return{};var c={};G(mc(),function(d){b.call(a,d)&&(c[d]=!0)});
return c}
;function oc(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var pc=(new Date).getTime();function qc(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"app"!==a)throw Error("Invalid URI scheme in origin: "+a);c="";var d=b.indexOf(":");if(-1!=d){var e=
b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function rc(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;n=l=0}
function b(r){for(var u=h,p=0;64>p;p+=4)u[p/4]=r[p]<<24|r[p+1]<<16|r[p+2]<<8|r[p+3];for(p=16;80>p;p++)r=u[p-3]^u[p-8]^u[p-14]^u[p-16],u[p]=(r<<1|r>>>31)&4294967295;r=e[0];var C=e[1],K=e[2],qa=e[3],uc=e[4];for(p=0;80>p;p++){if(40>p)if(20>p){var Ka=qa^C&(K^qa);var Fb=1518500249}else Ka=C^K^qa,Fb=1859775393;else 60>p?(Ka=C&K|qa&(C|K),Fb=2400959708):(Ka=C^K^qa,Fb=3395469782);Ka=((r<<5|r>>>27)&4294967295)+Ka+uc+Fb+u[p]&4294967295;uc=qa;qa=K;K=(C<<30|C>>>2)&4294967295;C=r;r=Ka}e[0]=e[0]+r&4294967295;e[1]=
e[1]+C&4294967295;e[2]=e[2]+K&4294967295;e[3]=e[3]+qa&4294967295;e[4]=e[4]+uc&4294967295}
function c(r,u){if("string"===typeof r){r=unescape(encodeURIComponent(r));for(var p=[],C=0,K=r.length;C<K;++C)p.push(r.charCodeAt(C));r=p}u||(u=r.length);p=0;if(0==l)for(;p+64<u;)b(r.slice(p,p+64)),p+=64,n+=64;for(;p<u;)if(f[l++]=r[p++],n++,64==l)for(l=0,b(f);p+64<u;)b(r.slice(p,p+64)),p+=64,n+=64}
function d(){var r=[],u=8*n;56>l?c(g,56-l):c(g,64-(l-56));for(var p=63;56<=p;p--)f[p]=u&255,u>>>=8;b(f);for(p=u=0;5>p;p++)for(var C=24;0<=C;C-=8)r[u++]=e[p]>>C&255;return r}
for(var e=[],f=[],h=[],g=[128],k=1;64>k;++k)g[k]=0;var l,n;a();return{reset:a,update:c,digest:d,ta:function(){for(var r=d(),u="",p=0;p<r.length;p++)u+="0123456789ABCDEF".charAt(Math.floor(r[p]/16))+"0123456789ABCDEF".charAt(r[p]%16);return u}}}
;function sc(a,b,c){var d=[],e=[];if(1==(Aa(c)?2:1))return e=[b,a],G(d,function(g){e.push(g)}),tc(e.join(" "));
var f=[],h=[];G(c,function(g){h.push(g.key);f.push(g.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];G(d,function(g){e.push(g)});
a=tc(e.join(" "));a=[c,a];0==h.length||a.push(h.join(""));return a.join("_")}
function tc(a){var b=rc();b.update(a);return b.ta().toLowerCase()}
;function vc(a){var b=qc(String(v.location.href)),c=v.__OVERRIDE_SID;null==c&&(c=(new Ub(document)).get("SID"));if(c&&(b=(c=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?v.__SAPISID:v.__APISID,null==b&&(b=(new Ub(document)).get(c?"SAPISID":"APISID")),b)){c=c?"SAPISIDHASH":"APISIDHASH";var d=String(v.location.href);return d&&b&&c?[c,sc(qc(d),b,a||null)].join(" "):null}return null}
;function wc(a,b){this.h=a;this.i=b;this.g=0;this.f=null}
wc.prototype.get=function(){if(0<this.g){this.g--;var a=this.f;this.f=a.next;a.next=null}else a=this.h();return a};
function xc(a,b){a.i(b);100>a.g&&(a.g++,b.next=a.f,a.f=b)}
;function yc(a){v.setTimeout(function(){throw a;},0)}
var zc;
function Ac(){var a=v.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&-1==Ab.indexOf("Presto")&&(a=function(){var e=document.createElement("IFRAME");e.style.display="none";Kb(e);document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.write(Gb(Ib));e.close();var h="callImmediate"+Math.random(),g="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=A(function(k){if(("*"==g||k.origin==g)&&
k.data==h)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(h,g)}}});
if("undefined"!==typeof a&&-1==Ab.indexOf("Trident")&&-1==Ab.indexOf("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(w(c.next)){c=c.next;var e=c.ia;c.ia=null;e()}};
return function(e){d.next={ia:e};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(e){var f=document.createElement("SCRIPT");
f.onreadystatechange=function(){f.onreadystatechange=null;f.parentNode.removeChild(f);f=null;e();e=null};
document.documentElement.appendChild(f)}:function(e){v.setTimeout(e,0)}}
;function Bc(){this.g=this.f=null}
var Dc=new wc(function(){return new Cc},function(a){a.reset()});
Bc.prototype.add=function(a,b){var c=Dc.get();c.set(a,b);this.g?this.g.next=c:this.f=c;this.g=c};
Bc.prototype.remove=function(){var a=null;this.f&&(a=this.f,this.f=this.f.next,this.f||(this.g=null),a.next=null);return a};
function Cc(){this.next=this.scope=this.f=null}
Cc.prototype.set=function(a,b){this.f=a;this.scope=b;this.next=null};
Cc.prototype.reset=function(){this.next=this.scope=this.f=null};function Ec(a,b){Fc||Gc();Hc||(Fc(),Hc=!0);Ic.add(a,b)}
var Fc;function Gc(){if(v.Promise&&v.Promise.resolve){var a=v.Promise.resolve(void 0);Fc=function(){a.then(Jc)}}else Fc=function(){var b=Jc;
!Ca(v.setImmediate)||v.Window&&v.Window.prototype&&-1==Ab.indexOf("Edge")&&v.Window.prototype.setImmediate==v.setImmediate?(zc||(zc=Ac()),zc(b)):v.setImmediate(b)}}
var Hc=!1,Ic=new Bc;function Jc(){for(var a;a=Ic.remove();){try{a.f.call(a.scope)}catch(b){yc(b)}xc(Dc,a)}Hc=!1}
;function Kc(){this.g=-1}
;function Lc(){this.g=64;this.f=[];this.l=[];this.w=[];this.i=[];this.i[0]=128;for(var a=1;a<this.g;++a)this.i[a]=0;this.j=this.h=0;this.reset()}
D(Lc,Kc);Lc.prototype.reset=function(){this.f[0]=1732584193;this.f[1]=4023233417;this.f[2]=2562383102;this.f[3]=271733878;this.f[4]=3285377520;this.j=this.h=0};
function Mc(a,b,c){c||(c=0);var d=a.w;if(x(b))for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.f[0];c=a.f[1];var h=a.f[2],g=a.f[3],k=a.f[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=g^c&(h^g);var l=1518500249}else f=c^h^g,l=1859775393;else 60>e?(f=c&h|g&(c|h),l=2400959708):(f=c^h^g,l=
3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=g;g=h;h=(c<<30|c>>>2)&4294967295;c=b;b=f}a.f[0]=a.f[0]+b&4294967295;a.f[1]=a.f[1]+c&4294967295;a.f[2]=a.f[2]+h&4294967295;a.f[3]=a.f[3]+g&4294967295;a.f[4]=a.f[4]+k&4294967295}
Lc.prototype.update=function(a,b){if(null!=a){w(b)||(b=a.length);for(var c=b-this.g,d=0,e=this.l,f=this.h;d<b;){if(0==f)for(;d<=c;)Mc(this,a,d),d+=this.g;if(x(a))for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.g){Mc(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.g){Mc(this,e);f=0;break}}this.h=f;this.j+=b}};
Lc.prototype.digest=function(){var a=[],b=8*this.j;56>this.h?this.update(this.i,56-this.h):this.update(this.i,this.g-(this.h-56));for(var c=this.g-1;56<=c;c--)this.l[c]=b&255,b/=256;Mc(this,this.l);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.f[c]>>d&255,++b;return a};function I(){this.g=this.g;this.w=this.w}
I.prototype.g=!1;I.prototype.dispose=function(){this.g||(this.g=!0,this.m())};
function Nc(a,b){a.g?w(void 0)?b.call(void 0):b():(a.w||(a.w=[]),a.w.push(w(void 0)?A(b,void 0):b))}
I.prototype.m=function(){if(this.w)for(;this.w.length;)this.w.shift()()};
function Oc(a){a&&"function"==typeof a.dispose&&a.dispose()}
function Pc(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Ba(d)?Pc.apply(null,d):Oc(d)}}
;function Qc(a){if(a.classList)return a.classList;a=a.className;return x(a)&&a.match(/\S+/g)||[]}
function Rc(a,b){if(a.classList)var c=a.classList.contains(b);else c=Qc(a),c=0<=La(c,b);return c}
function Sc(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):Rc(a,"inverted-hdpi")&&(a.className=Ma(Qc(a),function(b){return"inverted-hdpi"!=b}).join(" "))}
;var Tc="StopIteration"in v?v.StopIteration:{message:"StopIteration",stack:""};function Uc(){}
Uc.prototype.next=function(){throw Tc;};
Uc.prototype.H=function(){return this};
function Vc(a){if(a instanceof Uc)return a;if("function"==typeof a.H)return a.H(!1);if(Ba(a)){var b=0,c=new Uc;c.next=function(){for(;;){if(b>=a.length)throw Tc;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function Wc(a,b){if(Ba(a))try{G(a,b,void 0)}catch(c){if(c!==Tc)throw c;}else{a=Vc(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==Tc)throw c;}}}
function Xc(a){if(Ba(a))return Ra(a);a=Vc(a);var b=[];Wc(a,function(c){b.push(c)});
return b}
;function Yc(a,b){this.h={};this.f=[];this.i=this.g=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Yc)for(c=Zc(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function Zc(a){$c(a);return a.f.concat()}
m=Yc.prototype;m.equals=function(a,b){if(this===a)return!0;if(this.g!=a.g)return!1;var c=b||ad;$c(this);for(var d,e=0;d=this.f[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function ad(a,b){return a===b}
m.isEmpty=function(){return 0==this.g};
m.clear=function(){this.h={};this.i=this.g=this.f.length=0};
m.remove=function(a){return Object.prototype.hasOwnProperty.call(this.h,a)?(delete this.h[a],this.g--,this.i++,this.f.length>2*this.g&&$c(this),!0):!1};
function $c(a){if(a.g!=a.f.length){for(var b=0,c=0;b<a.f.length;){var d=a.f[b];Object.prototype.hasOwnProperty.call(a.h,d)&&(a.f[c++]=d);b++}a.f.length=c}if(a.g!=a.f.length){var e={};for(c=b=0;b<a.f.length;)d=a.f[b],Object.prototype.hasOwnProperty.call(e,d)||(a.f[c++]=d,e[d]=1),b++;a.f.length=c}}
m.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.h,a)?this.h[a]:b};
m.set=function(a,b){Object.prototype.hasOwnProperty.call(this.h,a)||(this.g++,this.f.push(a),this.i++);this.h[a]=b};
m.forEach=function(a,b){for(var c=Zc(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
m.clone=function(){return new Yc(this)};
m.H=function(a){$c(this);var b=0,c=this.i,d=this,e=new Uc;e.next=function(){if(c!=d.i)throw Error("The map has changed since the iterator was created");if(b>=d.f.length)throw Tc;var f=d.f[b++];return a?f:d.h[f]};
return e};function bd(a){var b=[];cd(new dd,a,b);return b.join("")}
function dd(){}
function cd(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Aa(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),cd(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),ed(d,c),c.push(":"),cd(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":ed(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var fd={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},gd=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function ed(a,b){b.push('"',a.replace(gd,function(c){var d=fd[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),fd[c]=d);return d}),'"')}
;function hd(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}}
;function J(a){this.f=0;this.w=void 0;this.i=this.g=this.h=null;this.j=this.l=!1;if(a!=xa)try{var b=this;a.call(void 0,function(c){id(b,2,c)},function(c){id(b,3,c)})}catch(c){id(this,3,c)}}
function jd(){this.next=this.context=this.onRejected=this.g=this.f=null;this.h=!1}
jd.prototype.reset=function(){this.context=this.onRejected=this.g=this.f=null;this.h=!1};
var kd=new wc(function(){return new jd},function(a){a.reset()});
function ld(a,b,c){var d=kd.get();d.g=a;d.onRejected=b;d.context=c;return d}
function md(a){return new J(function(b,c){c(a)})}
J.prototype.then=function(a,b,c){return nd(this,Ca(a)?a:null,Ca(b)?b:null,c)};
J.prototype.$goog_Thenable=!0;function od(a,b){return nd(a,null,b,void 0)}
J.prototype.cancel=function(a){0==this.f&&Ec(function(){var b=new pd(a);qd(this,b)},this)};
function qd(a,b){if(0==a.f)if(a.h){var c=a.h;if(c.g){for(var d=0,e=null,f=null,h=c.g;h&&(h.h||(d++,h.f==a&&(e=h),!(e&&1<d)));h=h.next)e||(f=h);e&&(0==c.f&&1==d?qd(c,b):(f?(d=f,d.next==c.i&&(c.i=d),d.next=d.next.next):rd(c),sd(c,e,3,b)))}a.h=null}else id(a,3,b)}
function td(a,b){a.g||2!=a.f&&3!=a.f||ud(a);a.i?a.i.next=b:a.g=b;a.i=b}
function nd(a,b,c,d){var e=ld(null,null,null);e.f=new J(function(f,h){e.g=b?function(g){try{var k=b.call(d,g);f(k)}catch(l){h(l)}}:f;
e.onRejected=c?function(g){try{var k=c.call(d,g);!w(k)&&g instanceof pd?h(g):f(k)}catch(l){h(l)}}:h});
e.f.h=a;td(a,e);return e.f}
J.prototype.A=function(a){this.f=0;id(this,2,a)};
J.prototype.B=function(a){this.f=0;id(this,3,a)};
function id(a,b,c){if(0==a.f){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.f=1;a:{var d=c,e=a.A,f=a.B;if(d instanceof J){td(d,ld(e||xa,f||null,a));var h=!0}else if(hd(d))d.then(e,f,a),h=!0;else{if(Da(d))try{var g=d.then;if(Ca(g)){vd(d,g,e,f,a);h=!0;break a}}catch(k){f.call(a,k);h=!0;break a}h=!1}}h||(a.w=c,a.f=b,a.h=null,ud(a),3!=b||c instanceof pd||wd(a,c))}}
function vd(a,b,c,d,e){function f(k){g||(g=!0,d.call(e,k))}
function h(k){g||(g=!0,c.call(e,k))}
var g=!1;try{b.call(a,h,f)}catch(k){f(k)}}
function ud(a){a.l||(a.l=!0,Ec(a.o,a))}
function rd(a){var b=null;a.g&&(b=a.g,a.g=b.next,b.next=null);a.g||(a.i=null);return b}
J.prototype.o=function(){for(var a;a=rd(this);)sd(this,a,this.f,this.w);this.l=!1};
function sd(a,b,c,d){if(3==c&&b.onRejected&&!b.h)for(;a&&a.j;a=a.h)a.j=!1;if(b.f)b.f.h=null,xd(b,c,d);else try{b.h?b.g.call(b.context):xd(b,c,d)}catch(e){yd.call(null,e)}xc(kd,b)}
function xd(a,b,c){2==b?a.g.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function wd(a,b){a.j=!0;Ec(function(){a.j&&yd.call(null,b)})}
var yd=yc;function pd(a){F.call(this,a)}
D(pd,F);pd.prototype.name="cancel";function L(a){I.call(this);this.l=1;this.i=[];this.j=0;this.f=[];this.h={};this.o=!!a}
D(L,I);m=L.prototype;m.subscribe=function(a,b,c){var d=this.h[a];d||(d=this.h[a]=[]);var e=this.l;this.f[e]=a;this.f[e+1]=b;this.f[e+2]=c;this.l=e+3;d.push(e);return e};
function zd(a,b,c,d){if(b=a.h[b]){var e=a.f;(b=Pa(b,function(f){return e[f+1]==c&&e[f+2]==d}))&&a.M(b)}}
m.M=function(a){var b=this.f[a];if(b){var c=this.h[b];0!=this.j?(this.i.push(a),this.f[a+1]=xa):(c&&Qa(c,a),delete this.f[a],delete this.f[a+1],delete this.f[a+2])}return!!b};
m.L=function(a,b){var c=this.h[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.o)for(e=0;e<c.length;e++){var h=c[e];Ad(this.f[h+1],this.f[h+2],d)}else{this.j++;try{for(e=0,f=c.length;e<f;e++)h=c[e],this.f[h+1].apply(this.f[h+2],d)}finally{if(this.j--,0<this.i.length&&0==this.j)for(;c=this.i.pop();)this.M(c)}}return 0!=e}return!1};
function Ad(a,b,c){Ec(function(){a.apply(b,c)})}
m.clear=function(a){if(a){var b=this.h[a];b&&(G(b,this.M,this),delete this.h[a])}else this.f.length=0,this.h={}};
m.m=function(){L.C.m.call(this);this.clear();this.i.length=0};function Bd(a){this.f=a}
Bd.prototype.set=function(a,b){w(b)?this.f.set(a,bd(b)):this.f.remove(a)};
Bd.prototype.get=function(a){try{var b=this.f.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Bd.prototype.remove=function(a){this.f.remove(a)};function Cd(a){this.f=a}
D(Cd,Bd);function Dd(a){this.data=a}
function Ed(a){return!w(a)||a instanceof Dd?a:new Dd(a)}
Cd.prototype.set=function(a,b){Cd.C.set.call(this,a,Ed(b))};
Cd.prototype.g=function(a){a=Cd.C.get.call(this,a);if(!w(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Cd.prototype.get=function(a){if(a=this.g(a)){if(a=a.data,!w(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Fd(a){this.f=a}
D(Fd,Cd);Fd.prototype.set=function(a,b,c){if(b=Ed(b)){if(c){if(c<B()){Fd.prototype.remove.call(this,a);return}b.expiration=c}b.creation=B()}Fd.C.set.call(this,a,b)};
Fd.prototype.g=function(a){var b=Fd.C.g.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<B()||c&&c>B())Fd.prototype.remove.call(this,a);else return b}};function Gd(){}
;function Hd(){}
D(Hd,Gd);Hd.prototype.clear=function(){var a=Xc(this.H(!0)),b=this;G(a,function(c){b.remove(c)})};function Id(a){this.f=a}
D(Id,Hd);m=Id.prototype;m.isAvailable=function(){if(!this.f)return!1;try{return this.f.setItem("__sak","1"),this.f.removeItem("__sak"),!0}catch(a){return!1}};
m.set=function(a,b){try{this.f.setItem(a,b)}catch(c){if(0==this.f.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
m.get=function(a){a=this.f.getItem(a);if(!x(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.f.removeItem(a)};
m.H=function(a){var b=0,c=this.f,d=new Uc;d.next=function(){if(b>=c.length)throw Tc;var e=c.key(b++);if(a)return e;e=c.getItem(e);if(!x(e))throw"Storage mechanism: Invalid value was encountered";return e};
return d};
m.clear=function(){this.f.clear()};
m.key=function(a){return this.f.key(a)};function Jd(){var a=null;try{a=window.localStorage||null}catch(b){}this.f=a}
D(Jd,Id);function Kd(a,b){this.g=a;this.f=null;if(Ob&&!(9<=Number(Pb))){Ld||(Ld=new Yc);this.f=Ld.get(a);this.f||(b?this.f=document.getElementById(b):(this.f=document.createElement("userdata"),this.f.addBehavior("#default#userData"),document.body.appendChild(this.f)),Ld.set(a,this.f));try{this.f.load(this.g)}catch(c){this.f=null}}}
D(Kd,Hd);var Md={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Ld=null;function Nd(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Md[b]})}
m=Kd.prototype;m.isAvailable=function(){return!!this.f};
m.set=function(a,b){this.f.setAttribute(Nd(a),b);Od(this)};
m.get=function(a){a=this.f.getAttribute(Nd(a));if(!x(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.f.removeAttribute(Nd(a));Od(this)};
m.H=function(a){var b=0,c=this.f.XMLDocument.documentElement.attributes,d=new Uc;d.next=function(){if(b>=c.length)throw Tc;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if(!x(e))throw"Storage mechanism: Invalid value was encountered";return e};
return d};
m.clear=function(){for(var a=this.f.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Od(this)};
function Od(a){try{a.f.save(a.g)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Pd(a,b){this.g=a;this.f=b+"::"}
D(Pd,Hd);Pd.prototype.set=function(a,b){this.g.set(this.f+a,b)};
Pd.prototype.get=function(a){return this.g.get(this.f+a)};
Pd.prototype.remove=function(a){this.g.remove(this.f+a)};
Pd.prototype.H=function(a){var b=this.g.H(!0),c=this,d=new Uc;d.next=function(){for(var e=b.next();e.substr(0,c.f.length)!=c.f;)e=b.next();return a?e.substr(c.f.length):c.g.get(e)};
return d};var Qd=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function M(a){return a?decodeURI(a):a}
function N(a,b){return b.match(Qd)[a]||null}
function Rd(a,b,c){if(Aa(b))for(var d=0;d<b.length;d++)Rd(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Sd(a){var b=[],c;for(c in a)Rd(c,a[c],b);return b.join("&")}
function Td(a,b){var c=Sd(b);if(c){var d=a.indexOf("#");0>d&&(d=a.length);var e=a.indexOf("?");if(0>e||e>d){e=d;var f=""}else f=a.substring(e+1,d);d=[a.substr(0,e),f,a.substr(d)];e=d[1];d[1]=c?e?e+"&"+c:c:e;c=d[0]+(d[1]?"?"+d[1]:"")+d[2]}else c=a;return c}
var Ud=/#|$/;function Vd(a,b){var c=a.search(Ud);a:{var d=0;for(var e=b.length;0<=(d=a.indexOf(b,d))&&d<c;){var f=a.charCodeAt(d-1);if(38==f||63==f)if(f=a.charCodeAt(d+e),!f||61==f||38==f||35==f)break a;d+=e+1}d=-1}if(0>d)return null;e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.substr(d,e-d).replace(/\+/g," "))}
;function Wd(){this.g=[];this.f=-1}
Wd.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.g[a]!=b&&(this.g[a]=b,this.f=-1)};
Wd.prototype.get=function(a){return!!this.g[a]};
function Xd(a){-1==a.f&&(a.f=Oa(a.g,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.f}
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
function Yd(a,b){if(1<b.length)a[b[0]]=b[1];else{var c=b[0],d;for(d in c)a[d]=c[d]}}
var O=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};var Zd=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};y("yt.config_",Zd,void 0);function P(a){Yd(Zd,arguments)}
function Q(a,b){return a in Zd?Zd[a]:b}
function $d(a){return Q(a,void 0)}
function ae(){return Q("PLAYER_CONFIG",{})}
;function be(){var a=ce;z("yt.ads.biscotti.getId_")||y("yt.ads.biscotti.getId_",a,void 0)}
function de(a){y("yt.ads.biscotti.lastId_",a,void 0)}
;function ee(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){R(b)}}:a}
function R(a,b,c,d,e){var f=z("yt.logging.errors.log");f?f(a,b,c,d,e):(f=Q("ERRORS",[]),f.push([a,b,c,d,e]),P("ERRORS",f))}
function fe(a){R(a,"WARNING",void 0,void 0,void 0)}
;function ge(){var a=he(),b=[];Ua(a,function(c,d){var e=encodeURIComponent(String(d)),f;Aa(c)?f=c:f=[c];G(f,function(h){""==h?b.push(e):b.push(e+"="+encodeURIComponent(String(h)))})});
return b.join("&")}
function ie(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length)try{var f=decodeURIComponent((e[0]||"").replace(/\+/g," ")),h=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?Aa(b[f])?Sa(b[f],h):b[f]=[b[f],h]:b[f]=h}catch(k){var g=Error("Error decoding URL component");g.params="key: "+e[0]+", value: "+e[1];"q"==e[0]?fe(g):R(g)}}return b}
function je(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=ie(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return Td(a,e)+d}
;function he(a){var b=ke;a=void 0===a?z("yt.ads.biscotti.lastId_")||"":a;b=Object.assign(le(b),me(b));b.ca_type="image";a&&(b.bid=a);return b}
function le(a){var b={};b.dt=pc;b.flash="0";a:{try{var c=a.f.top.location.href}catch(f){a=2;break a}a=c?c===a.g.location.href?0:1:2}b=(b.frm=a,b);b.u_tz=-(new Date).getTimezoneOffset();var d=void 0===d?E:d;try{var e=d.history.length}catch(f){e=0}b.u_his=e;b.u_java=!!E.navigator&&"unknown"!==typeof E.navigator.javaEnabled&&!!E.navigator.javaEnabled&&E.navigator.javaEnabled();E.screen&&(b.u_h=E.screen.height,b.u_w=E.screen.width,b.u_ah=E.screen.availHeight,b.u_aw=E.screen.availWidth,b.u_cd=E.screen.colorDepth);
E.navigator&&E.navigator.plugins&&(b.u_nplug=E.navigator.plugins.length);E.navigator&&E.navigator.mimeTypes&&(b.u_nmime=E.navigator.mimeTypes.length);return b}
function me(a){var b=a.f;try{var c=b.screenX;var d=b.screenY}catch(r){}try{var e=b.outerWidth;var f=b.outerHeight}catch(r){}try{var h=b.innerWidth;var g=b.innerHeight}catch(r){}b=[b.screenLeft,b.screenTop,c,d,b.screen?b.screen.availWidth:void 0,b.screen?b.screen.availTop:void 0,e,f,h,g];c=a.f.top;try{var k=(c||window).document,l="CSS1Compat"==k.compatMode?k.documentElement:k.body;var n=(new $b(l.clientWidth,l.clientHeight)).round()}catch(r){n=new $b(-12245933,-12245933)}k=n;n={};l=new Wd;v.SVGElement&&
v.document.createElementNS&&l.set(0);c=nc();c["allow-top-navigation-by-user-activation"]&&l.set(1);c["allow-popups-to-escape-sandbox"]&&l.set(2);v.crypto&&v.crypto.subtle&&l.set(3);v.TextDecoder&&v.TextEncoder&&l.set(4);l=Xd(l);n.bc=l;n.bih=k.height;n.biw=k.width;n.brdim=b.join();a=a.g;return n.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0,n.wgl=!!E.WebGLRenderingContext,n}
var ke=new function(){var a=window.document;this.f=window;this.g=a};
y("yt.ads_.signals_.getAdSignalsString",function(){return ge()},void 0);B();function ne(a,b){var c=S(a);return void 0===c&&void 0!==b?b:Number(c||0)}
function S(a){return Q("EXPERIMENT_FLAGS",{})[a]}
;var oe=w(XMLHttpRequest)?function(){return new XMLHttpRequest}:w(ActiveXObject)?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;
function pe(){if(!oe)return null;var a=oe();return"open"in a?a:null}
function qe(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function T(a,b){Ca(a)&&(a=ee(a));return window.setTimeout(a,b)}
function U(a){window.clearTimeout(a)}
;var re={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},se="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" "),
te=!1;
function ue(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=N(1,a),e=M(N(3,a));d&&e?(d=c,c=a.match(Qd),d=d.match(Qd),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?M(N(3,c))==e&&(Number(N(4,c))||null)==(Number(N(4,a))||null):!0;d=!!S("web_ajax_ignore_global_headers_if_set");for(var f in re)e=Q(re[f]),!e||!c&&!ve(a,f)||d&&void 0!==b[f]||(b[f]=e);if(c||ve(a,"X-YouTube-Utc-Offset"))b["X-YouTube-Utc-Offset"]=-(new Date).getTimezoneOffset();(S("pass_biscotti_id_in_header_ajax")||S("pass_biscotti_id_in_header_ajax_tv"))&&(c||
ve(a,"X-YouTube-Ad-Signals"))&&(b["X-YouTube-Ad-Signals"]=ge());return b}
function we(a){var b=window.location.search,c=M(N(3,a)),d=M(N(5,a));d=(c=c&&c.endsWith("youtube.com"))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=ie(b),f={};G(se,function(h){e[h]&&(f[h]=e[h])});
return je(a,f||{},!1)}
function ve(a,b){var c=Q("CORS_HEADER_WHITELIST")||{},d=M(N(3,a));return d?(c=c[d])?0<=La(c,b):!1:!0}
function xe(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=ye(a,b);var d=ze(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(h){if(!e){e=!0;f&&U(f);var g=h.ok,k=function(l){l=l||{};var n=b.context||v;g?b.onSuccess&&b.onSuccess.call(n,l,h):b.onError&&b.onError.call(n,l,h);b.ga&&b.ga.call(n,l,h)};
"JSON"==(b.format||"JSON")&&(g||400<=h.status&&500>h.status)?h.json().then(k,function(){k(null)}):k(null)}});
b.ka&&0<b.timeout&&(f=T(function(){e||(e=!0,U(f),b.ka.call(b.context||v))},b.timeout))}else Ae(a,b)}
function Ae(a,b){var c=b.format||"JSON";a=ye(a,b);var d=ze(a,b),e=!1,f,h=Be(a,function(g){if(!e){e=!0;f&&U(f);var k=qe(g),l=null,n=400<=g.status&&500>g.status,r=500<=g.status&&600>g.status;if(k||n||r)l=Ce(c,g,b.ob);if(k)a:if(g&&204==g.status)k=!0;else{switch(c){case "XML":k=0==parseInt(l&&l.return_code,10);break a;case "RAW":k=!0;break a}k=!!l}l=l||{};n=b.context||v;k?b.onSuccess&&b.onSuccess.call(n,g,l):b.onError&&b.onError.call(n,g,l);b.ga&&b.ga.call(n,g,l)}},b.method,d,b.headers,b.responseType,
b.withCredentials);
b.N&&0<b.timeout&&(f=T(function(){e||(e=!0,h.abort(),U(f),b.N.call(b.context||v,h))},b.timeout));
return h}
function ye(a,b){b.ya&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=Q("XSRF_FIELD_NAME",void 0),d=b.Xa;d&&(d[c]&&delete d[c],a=je(a,d||{},!0));return a}
function ze(a,b){var c=Q("XSRF_FIELD_NAME",void 0),d=Q("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.F,h=$d("XSRF_FIELD_NAME"),g;b.headers&&(g=b.headers["Content-Type"]);b.qb||M(N(3,a))&&!b.withCredentials&&M(N(3,a))!=document.location.hostname||"POST"!=b.method||g&&"application/x-www-form-urlencoded"!=g||b.F&&b.F[h]||(f||(f={}),f[c]=d);f&&x(e)&&(e=ie(e),db(e,f),e=b.la&&"JSON"==b.la?JSON.stringify(e):Sd(e));f=e||f&&!Ya(f);!te&&f&&"POST"!=b.method&&(te=!0,R(Error("AJAX request with postData should use POST")));
return e}
function Ce(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?De(b):null)d={},G(b.getElementsByTagName("*"),function(e){d[e.tagName]=Ee(e)})}c&&Fe(d);
return d}
function Fe(a){if(Da(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=Hb(a[b],null);a[c]=d}else Fe(a[b])}}
function De(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Ee(a){var b="";G(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Ge(a,b){b.method="POST";b.F||(b.F={});Ae(a,b)}
function Be(a,b,c,d,e,f,h){function g(){4==(k&&"readyState"in k?k.readyState:0)&&b&&ee(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=pe();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",g,!1):k.onreadystatechange=g;S("debug_forward_web_query_parameters")&&(a=we(a));k.open(c,a,!0);f&&(k.responseType=f);h&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=ue(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;var He={},Ie=0;
function Je(a,b,c,d,e){e=void 0===e?"":e;a&&(c&&(c=Ab,c=!(c&&0<=c.toLowerCase().indexOf("cobalt"))),c?a&&(a instanceof H||(a="object"==typeof a&&a.J?a.I():String(a),xb.test(a)||(a="about:invalid#zClosurez"),a=zb(a)),b=wb(a).toString(),"about:invalid#zClosurez"===b?a="":(b instanceof Db?a=b:(d="object"==typeof b,a=null,d&&b.ea&&(a=b.ba()),b=nb(d&&b.J?b.I():String(b)),a=Hb(b,a)),a=Gb(a).toString(),a=encodeURIComponent(String(bd(a)))),/^[\s\xa0]*$/.test(a)||(a=dc("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+
'+"\\"></body>"',style:"display:none"}),(9==a.nodeType?a:a.ownerDocument||a.document).body.appendChild(a))):e?Be(a,b,"POST",e,d):Q("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d?Be(a,b,"GET","",d):((d=Zd.EXPERIMENT_FLAGS)&&d.web_use_beacon_api_for_ad_click_server_pings&&-1!=M(N(5,a)).indexOf("/aclk")&&"1"===Vd(a,"ae")&&"1"===Vd(a,"act")?Ke(a)?(b&&b(),d=!0):d=!1:d=!1,d||Le(a,b)))}
function Ke(a,b){try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,void 0===b?"":b))return!0}catch(c){}return!1}
function Le(a,b){var c=new Image,d=""+Ie++;He[d]=c;c.onload=c.onerror=function(){b&&He[d]&&b();delete He[d]};
c.src=a}
;var Me={},Ne=0;
function Oe(a,b,c,d,e,f){f=f||{};f.name=c||Q("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||Q("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);b=void 0===b?"ERROR":b;e=void 0===e?!1:e;b=void 0===b?"ERROR":b;e=window&&window.yterr||(void 0===e?!1:e)||!1;if(!(!a||!e||5<=Ne||(S("console_log_js_exceptions")&&(e=a,c=[],c.push("Name: "+e.name),c.push("Message: "+e.message),e.hasOwnProperty("params")&&c.push("Error Params: "+JSON.stringify(e.params)),c.push("File name: "+e.fileName),c.push("Stacktrace: "+e.stack),
window.console.log(c.join("\n"),e)),e=a.stacktrace,c=a.columnNumber,a.hasOwnProperty("params")&&(d=String(JSON.stringify(a.params)),f.params=d.substr(0,500)),a=Wb(a),e=e||a.stack,d=a.lineNumber.toString(),isNaN(d)||isNaN(c)||(d=d+":"+c),window.yterr&&Ca(window.yterr)&&window.yterr(a),Me[a.message]||0<=e.indexOf("/YouTubeCenter.js")||0<=e.indexOf("/mytube.js")))){b={Xa:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,250),line:d,level:b,"client.name":f.name},F:{url:Q("PAGE_NAME",window.location.href),
file:a.fileName},method:"POST"};f.version&&(b["client.version"]=f.version);e&&(b.F.stack=e);for(var h in f)b.F["client."+h]=f[h];if(h=Q("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var g in h)b.F[g]=h[g];Ae(Q("ECATCHER_REPORT_HOST","")+"/error_204",b);Me[a.message]=!0;Ne++}}
;var Pe=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};y("yt.msgs_",Pe,void 0);function Qe(a){Yd(Pe,arguments)}
;function Re(a){a&&(a.dataset?a.dataset[Se("loaded")]="true":a.setAttribute("data-loaded","true"))}
function Te(a,b){return a?a.dataset?a.dataset[Se(b)]:a.getAttribute("data-"+b):null}
var Ue={};function Se(a){return Ue[a]||(Ue[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var Ve=z("ytPubsubPubsubInstance")||new L;L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.M;L.prototype.publish=L.prototype.L;L.prototype.clear=L.prototype.clear;y("ytPubsubPubsubInstance",Ve,void 0);var We=z("ytPubsubPubsubSubscribedKeys")||{};y("ytPubsubPubsubSubscribedKeys",We,void 0);var Xe=z("ytPubsubPubsubTopicToKeys")||{};y("ytPubsubPubsubTopicToKeys",Xe,void 0);var Ye=z("ytPubsubPubsubIsSynchronous")||{};y("ytPubsubPubsubIsSynchronous",Ye,void 0);
function Ze(a,b){var c=$e();if(c){var d=c.subscribe(a,function(){var e=arguments;var f=function(){We[d]&&b.apply(window,e)};
try{Ye[a]?f():T(f,0)}catch(h){R(h)}},void 0);
We[d]=!0;Xe[a]||(Xe[a]=[]);Xe[a].push(d);return d}return 0}
function af(a){var b=$e();b&&("number"==typeof a?a=[a]:x(a)&&(a=[parseInt(a,10)]),G(a,function(c){b.unsubscribeByKey(c);delete We[c]}))}
function bf(a,b){var c=$e();c&&c.publish.apply(c,arguments)}
function cf(a){var b=$e();if(b)if(b.clear(a),a)df(a);else for(var c in Xe)df(c)}
function $e(){return z("ytPubsubPubsubInstance")}
function df(a){Xe[a]&&(a=Xe[a],G(a,function(b){We[b]&&delete We[b]}),a.length=0)}
;var ef=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,ff=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function gf(a,b,c){c=void 0===c?null:c;if(window.spf){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(ef,""),c=c.replace(ff,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else hf(a,b,c)}
function hf(a,b,c){c=void 0===c?null:c;var d=jf(a),e=document.getElementById(d),f=e&&Te(e,"loaded"),h=e&&!f;f?b&&b():(b&&(f=Ze(d,b),b=""+(b[Ea]||(b[Ea]=++Fa)),kf[b]=f),h||(e=lf(a,d,function(){Te(e,"loaded")||(Re(e),bf(d),T(Ia(cf,d),0))},c)))}
function lf(a,b,c,d){d=void 0===d?null:d;var e=document.createElement("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Lb(e,hc(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function mf(a){a=jf(a);var b=document.getElementById(a);b&&(cf(a),b.parentNode.removeChild(b))}
function nf(a,b){if(a&&b){var c=""+(b[Ea]||(b[Ea]=++Fa));(c=kf[c])&&af(c)}}
function jf(a){var b=document.createElement("a");Jb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Nb(a)}
var kf={};function of(){}
function pf(a,b){return qf(a,1,b)}
;function rf(){}
t(rf,of);function qf(a,b,c){isNaN(c)&&(c=void 0);var d=z("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):T(a,c||0)}
function sf(a){if(!isNaN(a)){var b=z("yt.scheduler.instance.cancelJob");b?b(a):U(a)}}
rf.prototype.start=function(){var a=z("yt.scheduler.instance.start");a&&a()};
rf.prototype.pause=function(){var a=z("yt.scheduler.instance.pause");a&&a()};
ya(rf);rf.getInstance();var tf=[],uf=!1;function vf(){if("1"!=Va(ae(),"args","privembed")){var a=function(){uf=!0;"google_ad_status"in window?P("DCLKSTAT",1):P("DCLKSTAT",2)};
gf("//static.doubleclick.net/instream/ad_status.js",a);tf.push(pf(function(){uf||"google_ad_status"in window||(nf("//static.doubleclick.net/instream/ad_status.js",a),uf=!0,P("DCLKSTAT",3))},5E3))}}
function wf(){return parseInt(Q("DCLKSTAT",0),10)}
;function xf(){this.g=!1;this.f=null}
xf.prototype.initialize=function(a,b,c,d,e){var f=this;b?(this.g=!0,gf(b,function(){f.g=!1;if(window.botguard)yf(f,c,d);else{mf(b);var h=Error("Unable to load Botguard");h.params="from "+b;fe(h)}},e)):a&&(eval(a),window.botguard?yf(this,c,d):fe(Error("Unable to load Botguard from JS")))};
function yf(a,b,c){try{a.f=new window.botguard.bg(b)}catch(d){fe(d)}c&&c(b)}
xf.prototype.dispose=function(){this.f=null};var zf=new xf,Af=!1,Bf=0,Cf="";function Df(a){S("botguard_periodic_refresh")?Bf=O():S("botguard_always_refresh")&&(Cf=a)}
function Ef(a){if(a){if(zf.g)return!1;if(S("botguard_periodic_refresh"))return 72E5<O()-Bf;if(S("botguard_always_refresh"))return Cf!=a}else return!1;return!Af}
function Ff(){return!!zf.f}
function Gf(a){a=void 0===a?{}:a;a=void 0===a?{}:a;return zf.f?zf.f.invoke(void 0,void 0,a):null}
;var Hf=0;y("ytDomDomGetNextId",z("ytDomDomGetNextId")||function(){return++Hf},void 0);var If={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Jf(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{a=a||window.event;if(!a)return;this.event=a}catch(c){return}for(var b in a)b in If||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==
this.type?b=a.fromElement:"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.f=a.pageX;this.g=a.pageY}
function Kf(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.f=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.g=a.clientY+b}}
Jf.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Jf.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Jf.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var Xa=z("ytEventsEventsListeners")||{};y("ytEventsEventsListeners",Xa,void 0);var Lf=z("ytEventsEventsCounter")||{count:0};y("ytEventsEventsCounter",Lf,void 0);
function Mf(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Wa(function(e){var f="boolean"==typeof e[4]&&e[4]==!!d,h=Da(e[4])&&Da(d)&&$a(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||h)})}
var Nf=Ta(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function V(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Mf(a,b,c,d);if(e)return e;e=++Lf.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var h=f?function(g){g=new Jf(g);if(!gc(g.relatedTarget,function(k){return k==a}))return g.currentTarget=a,g.type=b,c.call(a,g)}:function(g){g=new Jf(g);
g.currentTarget=a;return c.call(a,g)};
h=ee(h);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Nf()||"boolean"==typeof d?a.addEventListener(b,h,d):a.addEventListener(b,h,!!d.capture)):a.attachEvent("on"+b,h);Xa[e]=[a,b,c,h,d];return e}
function Of(a){a&&("string"==typeof a&&(a=[a]),G(a,function(b){if(b in Xa){var c=Xa[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Nf()||"boolean"==typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete Xa[b]}}))}
;function Pf(a){this.A=a;this.f=null;this.j=0;this.o=null;this.l=0;this.h=[];for(a=0;4>a;a++)this.h.push(0);this.i=0;this.D=V(window,"mousemove",A(this.G,this));a=A(this.B,this);Ca(a)&&(a=ee(a));this.K=window.setInterval(a,25)}
D(Pf,I);Pf.prototype.G=function(a){w(a.f)||Kf(a);var b=a.f;w(a.g)||Kf(a);this.f=new Zb(b,a.g)};
Pf.prototype.B=function(){if(this.f){var a=O();if(0!=this.j){var b=this.o,c=this.f,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.j);this.h[this.i]=.5<Math.abs((d-this.l)/this.l)?1:0;for(c=b=0;4>c;c++)b+=this.h[c]||0;3<=b&&this.A();this.l=d}this.j=a;this.o=this.f;this.i=(this.i+1)%4}};
Pf.prototype.m=function(){window.clearInterval(this.K);Of(this.D)};var Qf={};
function Rf(a){var b=void 0===a?{}:a;a=void 0===b.za?!0:b.za;b=void 0===b.Ma?!1:b.Ma;if(null==z("_lact",window)){var c=parseInt(Q("LACT"),10);c=isFinite(c)?B()-Math.max(c,0):-1;y("_lact",c,window);y("_fact",c,window);-1==c&&Sf();V(document,"keydown",Sf);V(document,"keyup",Sf);V(document,"mousedown",Sf);V(document,"mouseup",Sf);a&&(b?V(window,"touchmove",function(){Tf("touchmove",200)},{passive:!0}):(V(window,"resize",function(){Tf("resize",200)}),V(window,"scroll",function(){Tf("scroll",200)})));
new Pf(function(){Tf("mouse",100)});
V(document,"touchstart",Sf,{passive:!0});V(document,"touchend",Sf,{passive:!0})}}
function Tf(a,b){Qf[a]||(Qf[a]=!0,pf(function(){Sf();Qf[a]=!1},b))}
function Sf(){null==z("_lact",window)&&Rf();var a=B();y("_lact",a,window);-1==z("_fact",window)&&y("_fact",a,window);(a=z("ytglobal.ytUtilActivityCallback_"))&&a()}
function Uf(){var a=z("_lact",window);return null==a?-1:Math.max(B()-a,0)}
;var Vf=Math.pow(2,16)-1,Wf=null,Xf=0,Yf={log_event:"events",log_interaction:"interactions"},Zf=Object.create(null);Zf.log_event="GENERIC_EVENT_LOGGING";Zf.log_interaction="INTERACTION_LOGGING";var $f=new Set(["log_event"]),ag={},bg=0,cg=0,W=z("ytLoggingTransportLogPayloadsQueue_")||{};y("ytLoggingTransportLogPayloadsQueue_",W,void 0);var dg=z("ytLoggingTransportTokensToCttTargetIds_")||{};y("ytLoggingTransportTokensToCttTargetIds_",dg,void 0);var eg=z("ytLoggingTransportDispatchedStats_")||{};
y("ytLoggingTransportDispatchedStats_",eg,void 0);y("ytytLoggingTransportCapturedTime_",z("ytLoggingTransportCapturedTime_")||{},void 0);function fg(){U(bg);U(cg);cg=0;if(!Ya(W)){for(var a in W){var b=ag[a];b&&(gg(a,b),delete W[a])}Ya(W)||hg()}}
function hg(){S("web_gel_timeout_cap")&&!cg&&(cg=T(fg,3E4));U(bg);bg=T(fg,Q("LOGGING_BATCH_TIMEOUT",ne("web_gel_debounce_ms",1E4)))}
function ig(a,b){b=void 0===b?"":b;W[a]=W[a]||{};W[a][b]=W[a][b]||[];return W[a][b]}
function gg(a,b){var c=Yf[a],d=eg[a]||{};eg[a]=d;var e=Math.round(O());for(l in W[a]){var f=bb,h=b.f;h={client:{hl:h.Fa,gl:h.Ea,clientName:h.Ca,clientVersion:h.Da}};var g=window.devicePixelRatio;g&&1!=g&&(h.client.screenDensityFloat=String(g));Q("DELEGATED_SESSION_ID")&&!S("pageid_as_header_web")&&(h.user={onBehalfOfUser:Q("DELEGATED_SESSION_ID")});f=f({context:h});f[c]=ig(a,l);d.dispatchedEventCount=d.dispatchedEventCount||0;d.dispatchedEventCount+=f[c].length;if(h=dg[l])a:{var k=l;if(h.videoId)g=
"VIDEO";else if(h.playlistId)g="PLAYLIST";else break a;f.credentialTransferTokenTargetId=h;f.context=f.context||{};f.context.user=f.context.user||{};f.context.user.credentialTransferTokens=[{token:k,scope:g}]}delete dg[l];f.requestTimeMs=e;if(h=$d("EVENT_ID"))g=(Q("BATCH_CLIENT_COUNTER",void 0)||0)+1,g>Vf&&(g=1),P("BATCH_CLIENT_COUNTER",g),h={serializedEventId:h,clientCounter:g},f.serializedClientEventId=h,Wf&&Xf&&S("log_gel_rtt_web")&&(f.previousBatchInfo={serializedClientEventId:Wf,roundtripMs:Xf}),
Wf=h,Xf=0;jg(b,a,f,{retry:$f.has(a),onSuccess:A(kg,this,O())})}if(d.previousDispatchMs){c=e-d.previousDispatchMs;var l=d.diffCount||0;d.averageTimeBetweenDispatchesMs=l?(d.averageTimeBetweenDispatchesMs*l+c)/(l+1):c;d.diffCount=l+1}d.previousDispatchMs=e}
function kg(a){Xf=Math.round(O()-a)}
;var lg=z("ytLoggingGelSequenceIdObj_")||{};y("ytLoggingGelSequenceIdObj_",lg,void 0);
function mg(a,b,c,d){d=void 0===d?{}:d;var e={};e.eventTimeMs=Math.round(d.timestamp||O());e[a]=b;e.context={lastActivityMs:String(d.timestamp?-1:Uf())};S("interaction_logging_sequence_info_enabled")&&d.O&&(a=e.context,b=d.O,lg[b]=b in lg?lg[b]+1:0,a.sequence={index:lg[b],groupKey:b},d.pb&&delete lg[d.O]);(d=d.aa)?(a={},d.videoId?a.videoId=d.videoId:d.playlistId&&(a.playlistId=d.playlistId),dg[d.token]=a,d=ig("log_event",d.token)):d=ig("log_event");d.push(e);c&&(ag.log_event=new c);d.length>=(ne("web_logging_max_batch")||
100)?fg():hg()}
;function ng(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||Q("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.lb||Q("AUTHORIZATION"))||(a?b="Bearer "+z("gapi.auth.getToken")().kb:b=vc([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=Q("SESSION_INDEX",0),S("pageid_as_header_web")&&(d["X-Goog-PageId"]=Q("DELEGATED_SESSION_ID")));return d}
function og(a){a=Object.assign({},a);delete a.Authorization;var b=vc();if(b){var c=new Lc;c.update(Q("INNERTUBE_API_KEY",void 0));c.update(b);b=c.digest();Ba(b);if(!Sb)for(Sb={},Tb={},c=0;65>c;c++)Sb[c]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(c),Tb[c]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(c);c=Tb;for(var d=[],e=0;e<b.length;e+=3){var f=b[e],h=e+1<b.length,g=h?b[e+1]:0,k=e+2<b.length,l=k?b[e+2]:0,n=f>>2;f=(f&3)<<4|g>>4;g=(g&15)<<
2|l>>6;l&=63;k||(l=64,h||(g=64));d.push(c[n],c[f],c[g],c[l])}a.hash=d.join("")}return a}
;function pg(a,b,c,d){Vb.set(""+a,b,c,"/",void 0===d?"youtube.com":d,!1)}
;function qg(){var a=new Jd;(a=a.isAvailable()?new Pd(a,"yt.innertube"):null)||(a=new Kd("yt.innertube"),a=a.isAvailable()?a:null);this.f=a?new Fd(a):null;this.g=document.domain||window.location.hostname}
qg.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.f)try{this.f.set(a,b,B()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(bd(b))}catch(f){return}else e=escape(b);pg(a,e,c,this.g)};
qg.prototype.get=function(a,b){var c=void 0,d=!this.f;if(!d)try{c=this.f.get(a)}catch(e){d=!0}if(d&&(c=Vb.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
qg.prototype.remove=function(a){this.f&&this.f.remove(a);var b=this.g;Vb.remove(""+a,"/",void 0===b?"youtube.com":b)};var rg=new qg;function sg(a,b,c,d){if(d)return null;d=rg.get("nextId",!0)||1;var e=rg.get("requests",!0)||{};e[d]={method:a,request:b,authState:og(c),requestTime:Math.round(O())};rg.set("nextId",d+1,86400,!0);rg.set("requests",e,86400,!0);return d}
function tg(a){var b=rg.get("requests",!0)||{};delete b[a];rg.set("requests",b,86400,!0)}
function ug(a){var b=rg.get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(O())-d.requestTime)){var e=d.authState,f=og(ng(!1));$a(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(O())),jg(a,d.method,e,{}));delete b[c]}}rg.set("requests",b,86400,!0)}}
;function vg(a){var b=this;this.f=a||{Aa:$d("INNERTUBE_API_KEY"),Ba:$d("INNERTUBE_API_VERSION"),Ca:Q("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Da:$d("INNERTUBE_CONTEXT_CLIENT_VERSION"),Fa:$d("INNERTUBE_CONTEXT_HL"),Ea:$d("INNERTUBE_CONTEXT_GL"),Ga:$d("INNERTUBE_HOST_OVERRIDE")||"",Ha:!!Q("INNERTUBE_USE_THIRD_PARTY_AUTH",!1)};qf(function(){ug(b)},0,5E3)}
function jg(a,b,c,d){!Q("VISITOR_DATA")&&.01>Math.random()&&R(Error("Missing VISITOR_DATA when sending innertube request."),"WARNING");var e={headers:{"Content-Type":"application/json"},method:"POST",F:c,la:"JSON",N:function(){d.N()},
ka:d.N,onSuccess:function(u,p){if(d.onSuccess)d.onSuccess(p)},
ja:function(u){if(d.onSuccess)d.onSuccess(u)},
onError:function(u,p){if(d.onError)d.onError(p)},
rb:function(u){if(d.onError)d.onError(u)},
timeout:d.timeout,withCredentials:!0},f="",h=a.f.Ga;h&&(f=h);h=a.f.Ha||!1;var g=ng(h,f,d);Object.assign(e.headers,g);e.headers.Authorization&&!f&&(e.headers["x-origin"]=window.location.origin);var k=""+f+("/youtubei/"+a.f.Ba+"/"+b)+"?alt=json&key="+a.f.Aa,l;if(d.retry&&S("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=f&&(l=sg(b,c,g,h))){var n=e.onSuccess,r=e.ja;e.onSuccess=function(u,p){tg(l);n(u,p)};
c.ja=function(u,p){tg(l);r(u,p)}}try{S("use_fetch_for_op_xhr")?xe(k,e):Ge(k,e)}catch(u){if("InvalidAccessError"==u)l&&(tg(l),l=0),R(Error("An extension is blocking network request."),"WARNING");
else throw u;}l&&qf(function(){ug(a)},0,5E3)}
;var wg=B().toString();
function xg(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=B();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(wg)for(a=1,b=0;b<wg.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^wg.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var yg=z("ytLoggingTimeDocumentNonce_")||xg();y("ytLoggingTimeDocumentNonce_",yg,void 0);function zg(a){this.f=a}
function Ag(a){var b={};void 0!==a.f.trackingParams?b.trackingParams=a.f.trackingParams:(b.veType=a.f.veType,null!=a.f.veCounter&&(b.veCounter=a.f.veCounter),null!=a.f.elementIndex&&(b.elementIndex=a.f.elementIndex));void 0!==a.f.dataElement&&(b.dataElement=Ag(a.f.dataElement));void 0!==a.f.youtubeData&&(b.youtubeData=a.f.youtubeData);return b}
zg.prototype.toString=function(){return JSON.stringify(Ag(this))};
var Bg=1;function Cg(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function Dg(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function Eg(a){return Q(Dg(void 0===a?0:a),void 0)}
y("yt_logging_screen.getRootVeType",Eg,void 0);function Fg(){var a=Eg(0),b;a?b=new zg({veType:a,youtubeData:void 0}):b=null;return b}
function Gg(a){a=void 0===a?0:a;var b=Q(Cg(a));b||0!=a||(b=Q("EVENT_ID"));return b?b:null}
y("yt_logging_screen.getCurrentCsn",Gg,void 0);function Hg(a,b,c){c=void 0===c?0:c;if(a!==Q(Cg(c))||b!==Q(Dg(c)))P(Cg(c),a),P(Dg(c),b),0==c&&(b=function(){setTimeout(function(){a&&mg("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:yg,clientScreenNonce:a},vg)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b())}
y("yt_logging_screen.setCurrentScreen",Hg,void 0);function Ig(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=Q("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=void 0===e?!0:e;var f=Q("VALID_SESSION_TEMPDATA_DOMAINS",[]),h=M(N(3,window.location.href));h&&f.push(h);h=M(N(3,d));if(0<=La(f,h)||!h&&0==d.lastIndexOf("/",0))if(S("autoescape_tempdata_url")&&(f=document.createElement("a"),Jb(f,d),d=f.href),d){h=d.match(Qd);d=h[5];f=h[6];h=h[7];var g="";d&&(g+=d);f&&(g+="?"+f);h&&(g+="#"+h);d=g;f=d.indexOf("#");if(d=0>f?d:d.substr(0,f))if(e&&(b.itct||b.ved)&&
(b.csn=b.csn||Gg()),k){var k=parseInt(k,10);isFinite(k)&&0<k&&(e="ST-"+Nb(d).toString(36),b=b?Sd(b):"",pg(e,b,k||5))}else k="ST-"+Nb(d).toString(36),b=b?Sd(b):"",pg(k,b,5)}}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var l=void 0===l?{}:l;var n=void 0===n?"":n;var r=void 0===r?window:r;c=r.location;a=Td(a,l)+n;a=a instanceof H?a:yb(a);c.href=wb(a)}return!0}
;function Jg(a,b,c){b={csn:a,parentVe:Ag(b),childVes:Na(c,function(e){return Ag(e)})};
c=q(c);for(var d=c.next();!d.done;d=c.next())d=Ag(d.value),(Ya(d)||!d.trackingParams&&!d.veType)&&Oe(Error("Child VE logged with no data"),"WARNING");mg("visualElementAttached",b,vg,{aa:void 0,O:a})}
;function Kg(a){a=a||{};var b={enablejsapi:1},c={};this.url=a.url||"";this.args=a.args||ab(b);this.assets=a.assets||{};this.attrs=a.attrs||ab(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
Kg.prototype.clone=function(){var a=new Kg,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==za(c)?a[b]=ab(c):a[b]=c}return a};function Lg(){I.call(this);this.f=[]}
t(Lg,I);Lg.prototype.m=function(){for(;this.f.length;){var a=this.f.pop();a.target.removeEventListener(a.name,a.nb)}I.prototype.m.call(this)};var Mg=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function Ng(a){a=a||"";if(window.spf){var b=a.match(Mg);spf.style.load(a,b?b[1]:"",void 0)}else Og(a)}
function Og(a){var b=Pg(a),c=document.getElementById(b),d=c&&Te(c,"loaded");d||c&&!d||(c=Qg(a,b,function(){Te(c,"loaded")||(Re(c),bf(b),T(Ia(cf,b),0))}))}
function Qg(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=hc(a);d.rel="stylesheet";d.href=kb(a).toString();(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function Pg(a){var b=document.createElement("A");a=zb(a);Jb(b,a);b=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Nb(b)}
;function Rg(a,b){I.call(this);this.l=this.U=a;this.D=b;this.o=!1;this.api={};this.S=this.B=null;this.G=new L;Nc(this,Ia(Oc,this.G));this.i={};this.P=this.T=this.h=this.Z=this.f=null;this.K=!1;this.j=this.A=null;this.V={};this.qa=["onReady"];this.Y=null;this.ha=NaN;this.R={};Sg(this);this.W("WATCH_LATER_VIDEO_ADDED",this.Ja.bind(this));this.W("WATCH_LATER_VIDEO_REMOVED",this.Ka.bind(this));this.W("onAdAnnounce",this.sa.bind(this));this.ra=new Lg(this);Nc(this,Ia(Oc,this.ra))}
t(Rg,I);m=Rg.prototype;m.getId=function(){return this.D};
m.loadNewVideoConfig=function(a){if(!this.g){a instanceof Kg||(a=new Kg(a));this.Z=a;this.f=a.clone();this.h=this.f.attrs.id||this.h;"video-player"==this.h&&(this.h=this.D,this.f.attrs.id=this.D);this.l.id==this.h&&(this.h+="-player",this.f.attrs.id=this.h);this.f.args.enablejsapi="1";this.f.args.playerapiid=this.D;this.T||(this.T=Tg(this,this.f.args.jsapicallback||"onYouTubePlayerReady"));this.f.args.jsapicallback=null;if(a=this.f.attrs.width)this.l.style.width=oc(Number(a)||a);if(a=this.f.attrs.height)this.l.style.height=
oc(Number(a)||a);Ug(this);this.o&&Vg(this)}};
m.va=function(){return this.Z};
function Vg(a){a.f.loaded||(a.f.loaded=!0,"0"!=a.f.args.autoplay?a.api.loadVideoByPlayerVars(a.f.args):a.api.cueVideoByPlayerVars(a.f.args))}
function Wg(a){var b=!0,c=Xg(a);c&&a.f&&(a=a.f,b=Te(c,"version")==a.assets.js);return b&&!!z("yt.player.Application.create")}
function Ug(a){if(!a.g&&!a.K){var b=Wg(a);if(b&&"html5"==(Xg(a)?"html5":null))a.P="html5",a.o||Yg(a);else if(Zg(a),a.P="html5",b&&a.j)a.U.appendChild(a.j),Yg(a);else{a.f.loaded=!0;var c=!1;a.A=function(){c=!0;var d=a.f.clone();z("yt.player.Application.create")(a.U,d);Yg(a)};
a.K=!0;b?a.A():(gf(a.f.assets.js,a.A),Ng(a.f.assets.css),$g(a)&&!c&&y("yt.player.Application.create",null,void 0))}}}
function Xg(a){var b=ac(a.h);!b&&a.l&&a.l.querySelector&&(b=a.l.querySelector("#"+a.h));return b}
function Yg(a){if(!a.g){var b=Xg(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);c?(a.K=!1,b.isNotServable&&b.isNotServable(a.f.args.video_id)||ah(a)):a.ha=T(function(){Yg(a)},50)}}
function ah(a){Sg(a);a.o=!0;var b=Xg(a);b.addEventListener&&(a.B=bh(a,b,"addEventListener"));b.removeEventListener&&(a.S=bh(a,b,"removeEventListener"));var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=0;d<c.length;d++){var e=c[d];a.api[e]||(a.api[e]=bh(a,b,e))}for(var f in a.i)a.B(f,a.i[f]);Vg(a);a.T&&a.T(a.api);a.G.L("onReady",a.api)}
function bh(a,b,c){var d=b[c];return function(){try{return a.Y=null,d.apply(b,arguments)}catch(e){"sendAbandonmentPing"!=c&&(e.message+=" ("+c+")",a.Y=e,fe(e))}}}
function Sg(a){a.o=!1;if(a.S)for(var b in a.i)a.S(b,a.i[b]);for(var c in a.R)U(parseInt(c,10));a.R={};a.B=null;a.S=null;for(var d in a.api)a.api[d]=null;a.api.addEventListener=a.W.bind(a);a.api.removeEventListener=a.Oa.bind(a);a.api.destroy=a.dispose.bind(a);a.api.getLastError=a.wa.bind(a);a.api.getPlayerType=a.xa.bind(a);a.api.getCurrentVideoConfig=a.va.bind(a);a.api.loadNewVideoConfig=a.loadNewVideoConfig.bind(a);a.api.isReady=a.Ia.bind(a)}
m.Ia=function(){return this.o};
m.W=function(a,b){var c=this,d=Tg(this,b);if(d){if(!(0<=La(this.qa,a)||this.i[a])){var e=ch(this,a);this.B&&this.B(a,e)}this.G.subscribe(a,d);"onReady"==a&&this.o&&T(function(){d(c.api)},0)}};
m.Oa=function(a,b){if(!this.g){var c=Tg(this,b);c&&zd(this.G,a,c)}};
function Tg(a,b){var c=b;if("string"==typeof b){if(a.V[b])return a.V[b];c=function(){var d=z(b);d&&d.apply(v,arguments)};
a.V[b]=c}return c?c:null}
function ch(a,b){var c="ytPlayer"+b+a.D;a.i[b]=c;v[c]=function(d){var e=T(function(){if(!a.g){a.G.L(b,d);var f=a.R,h=String(e);h in f&&delete f[h]}},0);
Za(a.R,String(e))};
return c}
m.sa=function(a){bf("a11y-announce",a)};
m.Ja=function(a){bf("WATCH_LATER_VIDEO_ADDED",a)};
m.Ka=function(a){bf("WATCH_LATER_VIDEO_REMOVED",a)};
m.xa=function(){return this.P||(Xg(this)?"html5":null)};
m.wa=function(){return this.Y};
function Zg(a){a.cancel();Sg(a);a.P=null;a.f&&(a.f.loaded=!1);var b=Xg(a);b&&(Wg(a)||!$g(a)?a.j=b:(b&&b.destroy&&b.destroy(),a.j=null));for(a=a.U;b=a.firstChild;)a.removeChild(b)}
m.cancel=function(){this.A&&nf(this.f.assets.js,this.A);U(this.ha);this.K=!1};
m.m=function(){Zg(this);if(this.j&&this.f&&this.j.destroy)try{this.j.destroy()}catch(b){R(b)}this.V=null;for(var a in this.i)v[this.i[a]]=null;this.Z=this.f=this.api=null;delete this.U;delete this.l;I.prototype.m.call(this)};
function $g(a){return a.f&&a.f.args&&a.f.args.fflags?-1!=a.f.args.fflags.indexOf("player_destroy_old_version=true"):!1}
;var dh={},eh="player_uid_"+(1E9*Math.random()>>>0);function fh(a){var b="player";b=x(b)?ac(b):b;var c=eh+"_"+(b[Ea]||(b[Ea]=++Fa)),d=dh[c];if(d)return d.loadNewVideoConfig(a),d.api;d=new Rg(b,c);dh[c]=d;bf("player-added",d.api);Nc(d,Ia(gh,d));T(function(){d.loadNewVideoConfig(a)},0);
return d.api}
function gh(a){delete dh[a.getId()]}
;function hh(a,b,c){c=void 0===c?{}:c;var d=vg;Q("ytLoggingEventsDefaultDisabled",!1)&&vg==vg&&(d=null);mg(a,b,d,c)}
;var ih=z("ytLoggingLatencyUsageStats_")||{};y("ytLoggingLatencyUsageStats_",ih,void 0);var jh=0;function kh(a){ih[a]=ih[a]||{count:0};var b=ih[a];b.count++;b.time=O();jh||(jh=qf(lh,0,5E3));if(5<b.count){if(6==b.count&&1>1E5*Math.random()){b=0==a.indexOf("info")?"WARNING":"ERROR";var c=Error("CSI data exceeded logging limit with key");c.params=a;Oe(c,b)}return!0}return!1}
function lh(){var a=O(),b;for(b in ih)6E4<a-ih[b].time&&delete ih[b];jh=0}
;function mh(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(!nh(a)||c.some(function(e){return!nh(e)}))throw Error("Only objects may be merged.");
c=q(c);for(d=c.next();!d.done;d=c.next())oh(a,d.value)}
function oh(a,b){for(var c in b)if(nh(b[c])){if(c in a&&!nh(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});oh(a[c],b[c])}else if(ph(b[c])){if(c in a&&!ph(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);qh(a[c],b[c])}else a[c]=b[c];return a}
function qh(a,b){for(var c=q(b),d=c.next();!d.done;d=c.next())d=d.value,nh(d)?a.push(oh({},d)):ph(d)?a.push(qh([],d)):a.push(d);return a}
function nh(a){return"object"===typeof a&&!Array.isArray(a)}
function ph(a){return"object"===typeof a&&Array.isArray(a)}
;function rh(a,b){this.version=a;this.args=b}
;function sh(a){this.topic=a}
sh.prototype.toString=function(){return this.topic};var th=z("ytPubsub2Pubsub2Instance")||new L;L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.M;L.prototype.publish=L.prototype.L;L.prototype.clear=L.prototype.clear;y("ytPubsub2Pubsub2Instance",th,void 0);y("ytPubsub2Pubsub2SubscribedKeys",z("ytPubsub2Pubsub2SubscribedKeys")||{},void 0);y("ytPubsub2Pubsub2TopicToKeys",z("ytPubsub2Pubsub2TopicToKeys")||{},void 0);y("ytPubsub2Pubsub2IsAsync",z("ytPubsub2Pubsub2IsAsync")||{},void 0);
y("ytPubsub2Pubsub2SkipSubKey",null,void 0);function uh(a,b){var c=z("ytPubsub2Pubsub2Instance");c&&c.publish.call(c,a.toString(),a,b)}
;var X=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};function vh(){var a=Q("TIMING_TICK_EXPIRATION");a||(a={},P("TIMING_TICK_EXPIRATION",a));return a}
function wh(){var a=vh(),b;for(b in a)sf(a[b]);P("TIMING_TICK_EXPIRATION",{})}
;function xh(a,b){rh.call(this,1,arguments)}
t(xh,rh);function yh(a,b){rh.call(this,1,arguments)}
t(yh,rh);var zh=new sh("aft-recorded"),Ah=new sh("timing-sent");var Bh={vc:!0},Y={},Ch=(Y.ad_allowed="adTypesAllowed",Y.yt_abt="adBreakType",Y.ad_cpn="adClientPlaybackNonce",Y.ad_docid="adVideoId",Y.yt_ad_an="adNetworks",Y.ad_at="adType",Y.browse_id="browseId",Y.p="httpProtocol",Y.t="transportProtocol",Y.cpn="clientPlaybackNonce",Y.csn="clientScreenNonce",Y.docid="videoId",Y.is_continuation="isContinuation",Y.is_nav="isNavigation",Y.b_p="kabukiInfo.browseParams",Y.is_prefetch="kabukiInfo.isPrefetch",Y.is_secondary_nav="kabukiInfo.isSecondaryNav",Y.prev_browse_id=
"kabukiInfo.prevBrowseId",Y.query_source="kabukiInfo.querySource",Y.voz_type="kabukiInfo.vozType",Y.yt_lt="loadType",Y.yt_ad="isMonetized",Y.nr="webInfo.navigationReason",Y.ncnp="webInfo.nonPreloadedNodeCount",Y.prt="playbackRequiresTap",Y.pis="playerInfo.playerInitializedState",Y.paused="playerInfo.isPausedOnLoad",Y.yt_pt="playerType",Y.fmt="playerInfo.itag",Y.yt_pl="watchInfo.isPlaylist",Y.yt_pre="playerInfo.preloadType",Y.yt_ad_pr="prerollAllowed",Y.pa="previousAction",Y.yt_red="isRedSubscriber",
Y.st="serverTimeMs",Y.aq="tvInfo.appQuality",Y.br_trs="tvInfo.bedrockTriggerState",Y.label="tvInfo.label",Y.is_mdx="tvInfo.isMdx",Y.preloaded="tvInfo.isPreloaded",Y.query="unpluggedInfo.query",Y.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",Y.yt_vst="videoStreamType",Y.vph="viewportHeight",Y.vpw="viewportWidth",Y.yt_vis="isVisible",Y),Dh="ap c cver cbrand cmodel ei srt yt_fss yt_li plid vpil vpni vpst yt_eil vpni2 vpil2 icrc icrt pa GetBrowse_rid GetPlayer_rid GetSearch_rid GetWatchNext_rid cmt d_vpct d_vpnfi d_vpni pc pfa pfeh pftr prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis yt_ref yt_sts".split(" "),
Eh="isContinuation isNavigation kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),Fh={},Gh=(Fh.pa="LATENCY_ACTION_",Fh.yt_pt="LATENCY_PLAYER_",Fh.yt_vst="VIDEO_STREAM_TYPE_",Fh.pis="PLAYER_INITIALIZED_STATE_",Fh),Hh=!1;
function Ih(){Jh().info.yt_lt="hot_bg";if(Kh()){var a="hot_bg";Lh().info_yt_lt=a;if("yt_lt"in Ch){var b=Ch.yt_lt;0<=La(Eh,b)&&(a=!!a);"yt_lt"in Gh&&(a=Gh.yt_lt+a.toUpperCase());var c={};b=b.split(".");for(var d=c,e=0;e<b.length-1;e++)d[b[e]]=d[b[e]]||{},d=d[b[e]];d[b[b.length-1]]=a;Kh()&&(a=Jh(),"gelInfo"in a||(a.gelInfo={}),mh(a.gelInfo,c),a=Mh(),b=Object.keys(c).join(""),kh("info_"+b+"_"+a)||(c.clientActionNonce=a,hh("latencyActionInfo",c)))}else 0<=La(Dh,"yt_lt")||(c=Error("Unknown label logged with GEL CSI"),
c.params="yt_lt",fe(c))}}
function Nh(){var a=Oh();if(a.aft)return a.aft;for(var b=Q("TIMING_AFT_KEYS",["ol"]),c=b.length,d=0;d<c;d++){var e=a[b[d]];if(e)return e}return NaN}
A(X.clearResourceTimings||X.webkitClearResourceTimings||X.mozClearResourceTimings||X.msClearResourceTimings||X.oClearResourceTimings||xa,X);function Mh(){var a=Jh().nonce;a||(a=xg(),Jh().nonce=a);return a}
function Oh(){return Jh().tick}
function Lh(){var a=Jh();"gel"in a||(a.gel={});return a.gel}
function Jh(){var a;(a=z("ytcsi.data_"))||(a={tick:{},info:{}},Ja("ytcsi.data_",a));return a}
function Ph(){var a=Oh(),b=a.pbr,c=a.vc;a=a.pbs;return b&&c&&a&&b<c&&c<a&&1==Jh().info.yt_pvis}
function Kh(){return!!S("csi_on_gel")||!!Jh().useGel}
function Qh(){wh();if(!Kh()){var a=Oh(),b=Jh().info,c=a._start;for(f in a)if(0==f.lastIndexOf("_",0)&&Aa(a[f])){var d=f.slice(1);if(d in Bh){var e=Na(a[f],function(l){return Math.round(l-c)});
b["all_"+d]=e.join()}delete a[f]}e=Q("CSI_SERVICE_NAME","youtube");var f={v:2,s:e,action:Q("TIMING_ACTION",void 0)};d=Ih.srt;void 0!==a.srt&&delete b.srt;if(b.h5jse){var h=window.location.protocol+z("ytplayer.config.assets.js");(h=X.getEntriesByName?X.getEntriesByName(h)[0]:null)?b.h5jse=Math.round(b.h5jse-h.responseEnd):delete b.h5jse}a.aft=Nh();Ph()&&"youtube"==e&&(Ih(),e=a.vc,h=a.pbs,delete a.aft,b.aft=Math.round(h-e));for(var g in b)"_"!=g.charAt(0)&&(f[g]=b[g]);a.ps=O();g={};e=[];for(var k in a)"_"!=
k.charAt(0)&&(h=Math.round(a[k]-c),g[k]=h,e.push(k+"."+h));f.rt=e.join(",");(a=z("ytdebug.logTiming"))&&a(f,g);Rh(f,!!b.ap);uh(Ah,new yh(g.aft+(d||0),void 0))}}
function Rh(a,b){if(S("debug_csi_data")){var c=z("yt.timing.csiData");c||(c=[],y("yt.timing.csiData",c,void 0));c.push({page:location.href,time:new Date,args:a})}c="";for(var d in a)c+="&"+d+"="+a[d];d="/csi_204?"+c.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b){var e=void 0===e?"":e;Ke(d,e)||Je(d,void 0,void 0,void 0,e)}else Je(d);Ja("yt.timing.pingSent_",!0)}
;function Sh(a){return(0==a.search("cue")||0==a.search("load"))&&"loadModule"!=a}
function Th(a,b,c){x(a)&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});b=/\/([ve]|embed)\/([^#?]+)/.exec(a.mediaContentUrl);a.videoId=b&&b[2]?b[2]:null;return Uh(a)}
function Uh(a,b,c){if(Da(a)){b=["endSeconds","startSeconds","mediaContentUrl","suggestedQuality","videoId"];c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}return{videoId:a,startSeconds:b,suggestedQuality:c}}
function Vh(a,b,c,d){if(Da(a)&&!Aa(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};x(a)&&16==a.length?b.list="PL"+a:b.playlist=a;return b}
;function Wh(a){I.call(this);this.f=a;this.f.subscribe("command",this.ma,this);this.h={};this.j=!1}
D(Wh,I);m=Wh.prototype;m.start=function(){this.j||this.g||(this.j=!0,Xh(this.f,"RECEIVING"))};
m.ma=function(a,b,c){if(this.j&&!this.g){var d=b||{};switch(a){case "addEventListener":x(d.event)&&(a=d.event,a in this.h||(c=A(this.Qa,this,a),this.h[a]=c,this.addEventListener(a,c)));break;case "removeEventListener":x(d.event)&&Yh(this,d.event);break;default:this.i.isReady()&&this.i.isExternalMethodAvailable(a,c||null)&&(b=Zh(a,b||{}),c=this.i.handleExternalCall(a,b,c||null),(c=$h(a,c))&&this.j&&!this.g&&Xh(this.f,a,c))}}};
m.Qa=function(a,b){this.j&&!this.g&&Xh(this.f,a,this.ca(a,b))};
m.ca=function(a,b){if(null!=b)return{value:b}};
function Yh(a,b){b in a.h&&(a.removeEventListener(b,a.h[b]),delete a.h[b])}
m.m=function(){var a=this.f;a.g||zd(a.f,"command",this.ma,this);this.f=null;for(var b in this.h)Yh(this,b);Wh.C.m.call(this)};function ai(a,b){Wh.call(this,b);this.i=a;this.start()}
D(ai,Wh);ai.prototype.addEventListener=function(a,b){this.i.addEventListener(a,b)};
ai.prototype.removeEventListener=function(a,b){this.i.removeEventListener(a,b)};
function Zh(a,b){switch(a){case "loadVideoById":return b=Uh(b),[b];case "cueVideoById":return b=Uh(b),[b];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return b=Vh(b),[b];case "cuePlaylist":return b=Vh(b),[b];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey]}return[]}
function $h(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
ai.prototype.ca=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return ai.C.ca.call(this,a,b)};
ai.prototype.m=function(){ai.C.m.call(this);delete this.i};function bi(a,b,c,d){I.call(this);this.h=b||null;this.A="*";this.i=c||null;this.sessionId=null;this.channel=d||null;this.D=!!a;this.o=A(this.B,this);window.addEventListener("message",this.o)}
t(bi,I);bi.prototype.B=function(a){if(!("*"!=this.i&&a.origin!=this.i||this.h&&a.source!=this.h)&&x(a.data)){try{var b=JSON.parse(a.data)}catch(c){return}if(!(null==b||this.D&&(this.sessionId&&this.sessionId!=b.id||this.channel&&this.channel!=b.channel))&&b)switch(b.event){case "listening":"null"!=a.origin&&(this.i=this.A=a.origin);this.h=a.source;this.sessionId=b.id;this.f&&(this.f(),this.f=null);break;case "command":this.j&&(!this.l||0<=La(this.l,b.func))&&this.j(b.func,b.args,a.origin)}}};
bi.prototype.sendMessage=function(a,b){var c=b||this.h;if(c){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var d=bd(a);c.postMessage(d,this.A)}catch(e){R(e,"WARNING")}}};
bi.prototype.m=function(){window.removeEventListener("message",this.o);I.prototype.m.call(this)};function ci(a,b,c){bi.call(this,a,b,c||Q("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname,"widget");this.l=this.f=this.j=null}
t(ci,bi);function di(){var a=this.g=new ci(!!Q("WIDGET_ID_ENFORCE")),b=A(this.Na,this);a.j=b;a.l=null;this.g.channel="widget";if(a=Q("WIDGET_ID"))this.g.sessionId=a;this.i=[];this.l=!1;this.j={}}
m=di.prototype;m.Na=function(a,b,c){"addEventListener"==a&&b?(a=b[0],this.j[a]||"onReady"==a||(this.addEventListener(a,ei(this,a)),this.j[a]=!0)):this.oa(a,b,c)};
m.oa=function(){};
function ei(a,b){return A(function(c){this.sendMessage(b,c)},a)}
m.addEventListener=function(){};
m.ua=function(){this.l=!0;this.sendMessage("initialDelivery",this.da());this.sendMessage("onReady");G(this.i,this.na,this);this.i=[]};
m.da=function(){return null};
function fi(a,b){a.sendMessage("infoDelivery",b)}
m.na=function(a){this.l?this.g.sendMessage(a):this.i.push(a)};
m.sendMessage=function(a,b){this.na({event:a,info:void 0==b?null:b})};
m.dispose=function(){this.g=null};function gi(a){di.call(this);this.f=a;this.h=[];this.addEventListener("onReady",A(this.La,this));this.addEventListener("onVideoProgress",A(this.Ua,this));this.addEventListener("onVolumeChange",A(this.Va,this));this.addEventListener("onApiChange",A(this.Pa,this));this.addEventListener("onPlaybackQualityChange",A(this.Ra,this));this.addEventListener("onPlaybackRateChange",A(this.Sa,this));this.addEventListener("onStateChange",A(this.Ta,this));this.addEventListener("onWebglSettingsChanged",A(this.Wa,
this))}
D(gi,di);m=gi.prototype;m.oa=function(a,b,c){if(this.f.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&Sh(a)){var d=b;if(Da(d[0])&&!Aa(d[0]))d=d[0];else{var e={};switch(a){case "loadVideoById":case "cueVideoById":e=Uh.apply(window,d);break;case "loadVideoByUrl":case "cueVideoByUrl":e=Th.apply(window,d);break;case "loadPlaylist":case "cuePlaylist":e=Vh.apply(window,d)}d=e}b.length=1;b[0]=d}this.f.handleExternalCall(a,b,c);Sh(a)&&fi(this,this.da())}};
m.La=function(){var a=A(this.ua,this);this.g.f=a};
m.addEventListener=function(a,b){this.h.push({eventType:a,listener:b});this.f.addEventListener(a,b)};
m.da=function(){if(!this.f)return null;var a=this.f.getApiInterface();Qa(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c],f=e;if(0==f.search("get")||0==f.search("is")){f=e;var h=0;0==f.search("get")?h=3:0==f.search("is")&&(h=2);f=f.charAt(h).toLowerCase()+f.substr(h+1);try{var g=this.f[e]();b[f]=g}catch(k){}}}b.videoData=this.f.getVideoData();b.currentTimeLastUpdated_=B()/1E3;return b};
m.Ta=function(a){a={playerState:a,currentTime:this.f.getCurrentTime(),duration:this.f.getDuration(),videoData:this.f.getVideoData(),videoStartBytes:0,videoBytesTotal:this.f.getVideoBytesTotal(),videoLoadedFraction:this.f.getVideoLoadedFraction(),playbackQuality:this.f.getPlaybackQuality(),availableQualityLevels:this.f.getAvailableQualityLevels(),currentTimeLastUpdated_:B()/1E3,playbackRate:this.f.getPlaybackRate(),mediaReferenceTime:this.f.getMediaReferenceTime()};this.f.getVideoUrl&&(a.videoUrl=
this.f.getVideoUrl());this.f.getVideoContentRect&&(a.videoContentRect=this.f.getVideoContentRect());this.f.getProgressState&&(a.progressState=this.f.getProgressState());this.f.getPlaylist&&(a.playlist=this.f.getPlaylist());this.f.getPlaylistIndex&&(a.playlistIndex=this.f.getPlaylistIndex());this.f.getStoryboardFormat&&(a.storyboardFormat=this.f.getStoryboardFormat());fi(this,a)};
m.Ra=function(a){fi(this,{playbackQuality:a})};
m.Sa=function(a){fi(this,{playbackRate:a})};
m.Pa=function(){for(var a=this.f.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.f.getOptions(e);b[e]={options:f};for(var h=0,g=f.length;h<g;h++){var k=f[h],l=this.f.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
m.Va=function(){fi(this,{muted:this.f.isMuted(),volume:this.f.getVolume()})};
m.Ua=function(a){a={currentTime:a,videoBytesLoaded:this.f.getVideoBytesLoaded(),videoLoadedFraction:this.f.getVideoLoadedFraction(),currentTimeLastUpdated_:B()/1E3,playbackRate:this.f.getPlaybackRate(),mediaReferenceTime:this.f.getMediaReferenceTime()};this.f.getProgressState&&(a.progressState=this.f.getProgressState());fi(this,a)};
m.Wa=function(){var a={sphericalProperties:this.f.getSphericalProperties()};fi(this,a)};
m.dispose=function(){gi.C.dispose.call(this);for(var a=0;a<this.h.length;a++){var b=this.h[a];this.f.removeEventListener(b.eventType,b.listener)}this.h=[]};function hi(a){a=void 0===a?!1:a;I.call(this);this.f=new L(a);Nc(this,Ia(Oc,this.f))}
D(hi,I);hi.prototype.subscribe=function(a,b,c){return this.g?0:this.f.subscribe(a,b,c)};
hi.prototype.j=function(a,b){this.g||this.f.L.apply(this.f,arguments)};function ii(a,b,c){hi.call(this);this.h=a;this.i=b;this.l=c}
D(ii,hi);function Xh(a,b,c){if(!a.g){var d=a.h;d.g||a.i!=d.f||(a={id:a.l,command:b},c&&(a.data=c),d.f.postMessage(bd(a),d.i))}}
ii.prototype.m=function(){this.i=this.h=null;ii.C.m.call(this)};function ji(a,b,c){I.call(this);this.f=a;this.i=c;this.j=V(window,"message",A(this.l,this));this.h=new ii(this,a,b);Nc(this,Ia(Oc,this.h))}
D(ji,I);ji.prototype.l=function(a){var b;if(b=!this.g)if(b=a.origin==this.i)a:{b=this.f;do{b:{var c=a.source;do{if(c==b){c=!0;break b}if(c==c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(b=a.data,x(b))){try{b=JSON.parse(b)}catch(d){return}b.command&&(c=this.h,c.g||c.j("command",b.command,b.data,a.origin))}};
ji.prototype.m=function(){Of(this.j);this.f=null;ji.C.m.call(this)};function ki(){var a=ab(li),b;return od(new J(function(c,d){a.onSuccess=function(e){qe(e)?c(e):d(new mi("Request failed, status="+e.status,"net.badstatus",e))};
a.onError=function(e){d(new mi("Unknown request error","net.unknown",e))};
a.N=function(e){d(new mi("Request timed out","net.timeout",e))};
b=Ae("//googleads.g.doubleclick.net/pagead/id",a)}),function(c){c instanceof pd&&b.abort();
return md(c)})}
function mi(a,b){F.call(this,a+", errorCode="+b);this.errorCode=b;this.name="PromiseAjaxError"}
t(mi,F);function ni(){this.g=0;this.f=null}
ni.prototype.then=function(a,b,c){return 1===this.g&&a?(a=a.call(c,this.f),hd(a)?a:oi(a)):2===this.g&&b?(a=b.call(c,this.f),hd(a)?a:pi(a)):this};
ni.prototype.getValue=function(){return this.f};
ni.prototype.$goog_Thenable=!0;function pi(a){var b=new ni;a=void 0===a?null:a;b.g=2;b.f=void 0===a?null:a;return b}
function oi(a){var b=new ni;a=void 0===a?null:a;b.g=1;b.f=void 0===a?null:a;return b}
;function qi(a){F.call(this,a.message||a.description||a.name);this.isMissing=a instanceof ri;this.isTimeout=a instanceof mi&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof pd}
t(qi,F);qi.prototype.name="BiscottiError";function ri(){F.call(this,"Biscotti ID is missing from server")}
t(ri,F);ri.prototype.name="BiscottiMissingError";var li={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},si=null;function ce(){if("1"===Va(ae(),"args","privembed"))return md(Error("Biscotti ID is not available in private embed mode"));si||(si=od(ki().then(ti),function(a){return ui(2,a)}));
return si}
function ti(a){a=a.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new ri;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new ri;a=a.id;de(a);si=oi(a);vi(18E5,2);return a}
function ui(a,b){var c=new qi(b);de("");si=pi(c);0<a&&vi(12E4,a-1);throw c;}
function vi(a,b){T(function(){od(ki().then(ti,function(c){return ui(b,c)}),xa)},a)}
function wi(){try{var a=z("yt.ads.biscotti.getId_");return a?a():ce()}catch(b){return md(b)}}
;function xi(a){if("1"!==Va(ae(),"args","privembed")){a&&be();try{wi().then(function(b){S("pass_biscotti_id_in_header_ajax_tv")||S("pass_biscotti_id_in_header_ajax")||(b=he(b),b.bsq=yi++,Ge("//www.youtube.com/ad_data_204",{ya:!1,F:b,withCredentials:!0}))},function(){}),T(xi,18E5)}catch(b){R(b)}}}
var yi=0;var Z=z("ytglobal.prefsUserPrefsPrefs_")||{};y("ytglobal.prefsUserPrefsPrefs_",Z,void 0);function zi(){this.f=Q("ALT_PREF_COOKIE_NAME","PREF");var a=Vb.get(""+this.f,void 0);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Z[d]=c.toString())}}}
m=zi.prototype;m.get=function(a,b){Ai(a);Bi(a);var c=void 0!==Z[a]?Z[a].toString():null;return null!=c?c:b?b:""};
m.set=function(a,b){Ai(a);Bi(a);if(null==b)throw Error("ExpectedNotNull");Z[a]=b.toString()};
m.remove=function(a){Ai(a);Bi(a);delete Z[a]};
m.save=function(){pg(this.f,this.dump(),63072E3)};
m.clear=function(){for(var a in Z)delete Z[a]};
m.dump=function(){var a=[],b;for(b in Z)a.push(b+"="+encodeURIComponent(String(Z[b])));return a.join("&")};
function Bi(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function Ai(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function Ci(a){a=void 0!==Z[a]?Z[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
ya(zi);var Di=null,Ei=null,Fi=null,Gi={};function Hi(a){var b=a.id;a=a.ve_type;var c=Bg++;a=new zg({veType:a,veCounter:c,elementIndex:void 0,dataElement:void 0,youtubeData:void 0});Gi[b]=a;b=Gg();c=Fg();b&&c&&Jg(b,c,[a])}
function Ii(a){var b=a.csn;a=a.root_ve_type;if(b&&a&&(Hg(b,a),a=Fg()))for(var c in Gi){var d=Gi[c];d&&Jg(b,a,[d])}}
function Ji(a){Gi[a.id]=new zg({trackingParams:a.tracking_params})}
function Ki(a){var b=Gg();a=Gi[a.id];b&&a&&mg("visualElementGestured",{csn:b,ve:Ag(a),gestureType:"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK"},vg,{aa:void 0,O:b})}
function Li(a){a=a.ids;var b=Gg();if(b)for(var c=0;c<a.length;c++){var d=Gi[a[c]];d&&mg("visualElementShown",{csn:b,ve:Ag(d),eventType:1},vg,{aa:void 0,O:b})}}
;y("yt.setConfig",P,void 0);y("yt.config.set",P,void 0);y("yt.setMsg",Qe,void 0);y("yt.msgs.set",Qe,void 0);y("yt.logging.errors.log",Oe,void 0);
y("writeEmbed",function(){var a=Q("PLAYER_CONFIG",void 0);xi(!0);"gvn"==a.args.ps&&(document.body.style.backgroundColor="transparent");var b=document.referrer,c=Q("POST_MESSAGE_ORIGIN");window!=window.top&&b&&b!=document.URL&&(a.args.loaderUrl=b);Q("LIGHTWEIGHT_AUTOPLAY")&&(a.args.autoplay="1");Di=a=fh(a);a.addEventListener("onScreenChanged",Ii);a.addEventListener("onLogClientVeCreated",Hi);a.addEventListener("onLogServerVeCreated",Ji);a.addEventListener("onLogVeClicked",Ki);a.addEventListener("onLogVesShown",
Li);b=Q("POST_MESSAGE_ID","player");Q("ENABLE_JS_API")?Fi=new gi(a):Q("ENABLE_POST_API")&&x(b)&&x(c)&&(Ei=new ji(window.parent,b,c),Fi=new ai(a,Ei.h));c=$d("BG_P");Ef(c)&&(Q("BG_I")||Q("BG_IU"))&&(Af=!0,zf.initialize(Q("BG_I",null),Q("BG_IU",null),c,Df,void 0));vf()},void 0);
y("yt.www.watch.ads.restrictioncookie.spr",function(a){Je(a+"mac_204?action_fcts=1");return!0},void 0);
var Mi=ee(function(){var a="ol";X.mark&&(0==a.lastIndexOf("mark_",0)||(a="mark_"+a),X.mark(a));a=Oh();var b=O();a.ol&&(a._ol=a._ol||[a.ol],a._ol.push(b));a.ol=b;a=vh();if(b=a.ol)sf(b),a.ol=0;Lh().tick_ol=void 0;O();Kh()?(a=Mh(),kh("tick_ol_"+a)||hh("latencyActionTicked",{tickName:"ol",clientActionNonce:a},{timestamp:void 0}),a=!0):a=!1;if(a=!a)a=!z("yt.timing.pingSent_");if(a&&(b=Q("TIMING_ACTION",void 0),a=Oh(),z("ytglobal.timingready_")&&b&&a._start&&(b=Nh()))){Hh||(uh(zh,new xh(Math.round(b-a._start),
void 0)),Hh=!0);b=!0;var c=Q("TIMING_WAIT",[]);if(c.length)for(var d=0,e=c.length;d<e;++d)if(!(c[d]in a)){b=!1;break}b&&Qh()}a=zi.getInstance();c=!!((Ci("f"+(Math.floor(119/31)+1))||0)&67108864);b=1<window.devicePixelRatio;document.body&&Rc(document.body,"exp-invert-logo")&&(b&&!Rc(document.body,"inverted-hdpi")?(d=document.body,d.classList?d.classList.add("inverted-hdpi"):Rc(d,"inverted-hdpi")||(d.className+=0<d.className.length?" inverted-hdpi":"inverted-hdpi")):!b&&Rc(document.body,"inverted-hdpi")&&
Sc());c!=b&&(c="f"+(Math.floor(119/31)+1),d=Ci(c)||0,d=b?d|67108864:d&-67108865,0==d?delete Z[c]:(b=d.toString(16),Z[c]=b.toString()),a.save())}),Ni=ee(function(){var a=Di;
a&&a.sendAbandonmentPing&&a.sendAbandonmentPing();Q("PL_ATT")&&zf.dispose();a=0;for(var b=tf.length;a<b;a++)sf(tf[a]);tf.length=0;mf("//static.doubleclick.net/instream/ad_status.js");uf=!1;P("DCLKSTAT",0);Pc(Fi,Ei);if(a=Di)a.removeEventListener("onScreenChanged",Ii),a.removeEventListener("onLogClientVeCreated",Hi),a.removeEventListener("onLogServerVeCreated",Ji),a.removeEventListener("onLogVeClicked",Ki),a.removeEventListener("onLogVesShown",Li),a.destroy();Gi={}});
window.addEventListener?(window.addEventListener("load",Mi),window.addEventListener("unload",Ni)):window.attachEvent&&(window.attachEvent("onload",Mi),window.attachEvent("onunload",Ni));Ja("yt.abuse.player.botguardInitialized",z("yt.abuse.player.botguardInitialized")||Ff);Ja("yt.abuse.player.invokeBotguard",z("yt.abuse.player.invokeBotguard")||Gf);Ja("yt.abuse.dclkstatus.checkDclkStatus",z("yt.abuse.dclkstatus.checkDclkStatus")||wf);
Ja("yt.player.exports.navigate",z("yt.player.exports.navigate")||Ig);Ja("yt.util.activity.init",z("yt.util.activity.init")||Rf);Ja("yt.util.activity.getTimeSinceActive",z("yt.util.activity.getTimeSinceActive")||Uf);Ja("yt.util.activity.setTimestamp",z("yt.util.activity.setTimestamp")||Sf);}).call(this);
