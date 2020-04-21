var _yt_www={};(function(g){var window=this;/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var ca,aaa,da,ha,ia,pa,qa,sa,ta,ua,eaa,faa,gaa,zb,Tb,Ub,kaa,Bc,maa,Fc,Mc,naa,Kc,Rc,Sc,Tc,ad,bd,paa,raa,Pd,saa,taa,Qd,Rd,Sd,uaa,waa,$d,be,ce,ge,xaa,je,qe,pe,zaa,te,ue,ve,we,Baa,ye,ze,De,Caa,Ee,Le,Ne,Te,Xe,Re,Oe,Eaa,We,Ue,Ve,Ze,Daa,Faa,df,ef,kf,Gaa,Haa,Iaa,qf,sf,Kaa,yf,zf,Af,Laa,Df,If,Jf,Kf,Lf,Mf,Of,Rf,Sf,Wf,Tf,Oaa,$f,Paa,fg,wg,Uaa,Kg,Yaa,bh,Xg,eh,oh,wh,Zaa,$aa,bba,Ch,cba,Dh,Eh,dba,Jh,Hh,Fh,eba,Lh,Mh,Nh,Oh,fba,Uh,Vh,bi,ei,gba,hba,iba,hi,ki,li,oi,ti,ui,vi,xi,jba,mba,Di,Ki,kba,Si,$i,cj,ej,nba,gj,oba,
lj,kj,nj,jj,mj,vj,tj,wj,zj,uj,xj,Aj,rba,Dj,sj,Ej,sba,Bj,Cj,yj,tba,Kj,uba,Oj,Pj,vba,Rj,Uj,Vj,Tj,Wj,Xj,Yj,ak,bk,Qj,ck,Zj,ek,xba,fk,hk,gk,ik,jk,lk,mk,ok,rk,nk,sk,uk,tk,vk,Eba,xk,Ck,Dk,yk,Bba,Ek,Fk,Cba,Dba,Lba,Kba,Jba,Kk,Iba,Gba,Hba,Mba,Nba,Oba,Pba,Wk,Uk,Yk,Qba,Zk,al,Rba,Sba,bl,cl,hl,kl,ll,ml,ql,rl,sl,Yba,Zba,il,gl,Xba,jl,wl,yl,vl,$ba,zl,xl,aca,eca,bca,hca,dca,cca,fca,gca,jca,Cl,ica,Al,kca,mca,oca,nca,lca,Dl,El,Fl,fa,ea,caa,va,Fa,daa;g.ba=function(a){return function(){return g.aa[a].apply(this,arguments)}};
ca=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}};
aaa=function(a){a=["object"==typeof globalThis&&globalThis,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global,a];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");};
da=function(){da=function(){};
ea.Symbol||(ea.Symbol=baa)};
ha=function(a,b){this.C=a;fa(this,"description",{configurable:!0,writable:!0,value:b})};
g.ja=function(){da();var a=ea.Symbol.iterator;a||(a=ea.Symbol.iterator=ea.Symbol("Symbol.iterator"));"function"!=typeof Array.prototype[a]&&fa(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return ia(ca(this))}});
g.ja=function(){}};
ia=function(a){g.ja();a={next:a};a[ea.Symbol.iterator]=function(){return this};
return a};
g.ka=function(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:ca(a)}};
g.la=function(a){if(!(a instanceof Array)){a=g.ka(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a};
g.n=function(a,b){a.prototype=ma(b.prototype);a.prototype.constructor=a;if(na)na(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.V=b.prototype};
pa=function(a,b){if(b){for(var c=ea,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in c||(c[f]={});c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&fa(c,d,{configurable:!0,writable:!0,value:f})}};
qa=function(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""};
sa=function(a,b){g.ja();a instanceof String&&(a+="");var c=0,d={next:function(){if(c<a.length){var e=c++;return{value:b(e,a[e]),done:!1}}d.next=function(){return{done:!0,value:void 0}};
return d.next()}};
d[Symbol.iterator]=function(){return d};
return d};
ta=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};
g.t=function(a,b,c){a=a.split(".");c=c||g.p;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b};
g.wa=function(a){if(a&&a!=g.p)return ua(a.document);null===va&&(va=ua(g.p.document));return va};
ua=function(a){return(a=a.querySelector&&a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&caa.test(a)?a:""};
g.u=function(a,b){for(var c=a.split("."),d=b||g.p,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d};
g.xa=function(){};
g.ya=function(a){a.Cc=void 0;a.getInstance=function(){return a.Cc?a.Cc:a.Cc=new a}};
g.za=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b};
g.Aa=function(a){return"array"==g.za(a)};
g.Ca=function(a){var b=g.za(a);return"array"==b||"object"==b&&"number"==typeof a.length};
g.Da=function(a){return"function"==g.za(a)};
g.Ea=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b};
g.Ga=function(a){return Object.prototype.hasOwnProperty.call(a,Fa)&&a[Fa]||(a[Fa]=++daa)};
eaa=function(a,b,c){return a.call.apply(a.bind,arguments)};
faa=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}};
g.v=function(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?g.v=eaa:g.v=faa;return g.v.apply(null,arguments)};
g.w=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}};
g.x=function(a,b){function c(){}
c.prototype=b.prototype;a.V=b.prototype;a.prototype=new c;a.prototype.constructor=a};
gaa=function(a,b){if(!a||/[?&]dsh=1(&|$)/.test(a))return null;if(/[?&]ae=1(&|$)/.test(a)){var c=/[?&]adurl=([^&]+)/.exec(a);if(!c)return null;var d=b?c.index:a.length;try{return{Ot:a.slice(0,d)+"&act=1"+a.slice(d),Lu:decodeURIComponent(c[1])}}catch(f){return null}}if(/[?&]ae=2(&|$)/.test(a)){c=a;d="";if(b){var e=a.indexOf("&adurl=");0<e&&(c=a.slice(0,e),d=a.slice(e))}return{Ot:c+"&act=1"+d,Lu:c+"&dct=1"+d}}return null};
g.Ia=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,g.Ia);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};
g.Ka=function(a,b,c){b=g.Ja(a,b,c);return 0>b?null:"string"===typeof a?a.charAt(b):a[b]};
g.Ja=function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1};
g.Ma=function(a,b){return 0<=(0,g.La)(a,b)};
g.Na=function(a){return 0==a.length};
g.Pa=function(a,b){var c=(0,g.La)(a,b),d;(d=0<=c)&&g.Oa(a,c);return d};
g.Oa=function(a,b){return 1==Array.prototype.splice.call(a,b,1).length};
g.Qa=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};
g.Ra=function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(g.Ca(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var k=0;k<f;k++)a[e+k]=d[k]}else a.push(d)}};
g.Sa=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}};
g.Ta=function(a,b,c){for(var d in a)b.call(c,a[d],d,a)};
g.Ua=function(a,b){for(var c in a)if(b.call(void 0,a[c],c,a))return!0;return!1};
g.Va=function(a,b,c){for(var d in a)if(b.call(c,a[d],d,a))return d};
g.Wa=function(a){for(var b in a)return!1;return!0};
g.Xa=function(a,b){b in a&&delete a[b]};
g.Ya=function(a,b,c){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=c};
g.Za=function(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0};
g.$a=function(a){var b={},c;for(c in a)b[c]=a[c];return b};
g.ab=function(a){var b=g.za(a);if("object"==b||"array"==b){if(g.Da(a.clone))return a.clone();b="array"==b?[]:{};for(var c in a)b[c]=g.ab(a[c]);return b}return a};
g.cb=function(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<bb.length;f++)c=bb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};
g.fb=function(a,b){this.C=a===db&&b||"";this.F=eb};
g.gb=function(a){return a instanceof g.fb&&a.constructor===g.fb&&a.F===eb?a.C:"type_error:Const"};
g.hb=function(a){return new g.fb(db,a)};
g.kb=function(a,b){this.F=a===g.ib&&b||"";this.D=jb};
g.lb=function(a){if(a instanceof g.kb&&a.constructor===g.kb&&a.D===jb)return a.F;g.za(a);return"type_error:TrustedResourceUrl"};
g.mb=function(a){return new g.kb(g.ib,g.gb(a))};
g.nb=function(a,b){return 0==a.lastIndexOf(b,0)};
g.ob=function(a,b){var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c};
g.pb=function(a){return/^[\s\xa0]*$/.test(a)};
g.wb=function(a,b){if(b)a=a.replace(qb,"&amp;").replace(rb,"&lt;").replace(sb,"&gt;").replace(tb,"&quot;").replace(ub,"&#39;").replace(vb,"&#0;");else{if(!haa.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(qb,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(rb,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(sb,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(tb,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(ub,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(vb,"&#0;"))}return a};
g.xb=function(a,b){return-1!=a.indexOf(b)};
g.Ab=function(a,b){for(var c=0,d=(0,g.yb)(String(a)).split("."),e=(0,g.yb)(String(b)).split("."),f=Math.max(d.length,e.length),k=0;0==c&&k<f;k++){var l=d[k]||"",m=e[k]||"";do{l=/(\d*)(\D*)(.*)/.exec(l)||["","","",""];m=/(\d*)(\D*)(.*)/.exec(m)||["","","",""];if(0==l[0].length&&0==m[0].length)break;c=zb(0==l[1].length?0:parseInt(l[1],10),0==m[1].length?0:parseInt(m[1],10))||zb(0==l[2].length,0==m[2].length)||zb(l[2],m[2]);l=l[3];m=m[3]}while(0==c)}return c};
zb=function(a,b){return a<b?-1:a>b?1:0};
g.Db=function(a,b){this.F=a===Bb&&b||"";this.D=Cb};
g.Eb=function(a){if(a instanceof g.Db&&a.constructor===g.Db&&a.D===Cb)return a.F;g.za(a);return"type_error:SafeUrl"};
g.Gb=function(a){a=a.replace(/(%0A|%0D)/g,"");var b=a.match(iaa);b=b&&jaa.test(b[1]);return g.Fb(b?a:"about:invalid#zClosurez")};
g.Ib=function(a){if(a instanceof g.Db)return a;a="object"==typeof a&&a.Ld?a.Tc():String(a);Hb.test(a)||(a="about:invalid#zClosurez");return g.Fb(a)};
g.Jb=function(a,b){if(a instanceof g.Db)return a;a="object"==typeof a&&a.Ld?a.Tc():String(a);if(b&&/^data:/i.test(a)){var c=g.Gb(a);if(c.Tc()==a)return c}Hb.test(a)||(a="about:invalid#zClosurez");return g.Fb(a)};
g.Fb=function(a){return new g.Db(Bb,a)};
g.Lb=function(){this.C="";this.F=g.Kb};
g.Mb=function(a){var b=new g.Lb;b.C=a;return b};
g.Ob=function(){this.C="";this.F=g.Nb};
g.Pb=function(a){var b=new g.Ob;b.C=a;return b};
g.Rb=function(a){return g.xb(g.Qb,a)};
g.Sb=function(){return g.Rb("Trident")||g.Rb("MSIE")};
Tb=function(){return g.Rb("Firefox")||g.Rb("FxiOS")};
g.Vb=function(){return g.Rb("Safari")&&!(Ub()||g.Rb("Coast")||g.Rb("Opera")||g.Rb("Edge")||g.Rb("Edg/")||g.Rb("OPR")||Tb()||g.Rb("Silk")||g.Rb("Android"))};
Ub=function(){return(g.Rb("Chrome")||g.Rb("CriOS"))&&!g.Rb("Edge")};
g.Wb=function(){return g.Rb("Android")&&!(Ub()||Tb()||g.Rb("Opera")||g.Rb("Silk"))};
g.Yb=function(){this.F="";this.G=Xb;this.D=null};
g.$b=function(a){return g.Zb(a).toString()};
g.Zb=function(a){if(a instanceof g.Yb&&a.constructor===g.Yb&&a.G===Xb)return a.F;g.za(a);return"type_error:SafeHtml"};
g.bc=function(a){if(a instanceof g.Yb)return a;var b="object"==typeof a,c=null;b&&a.Qk&&(c=a.C());return g.ac(g.wb(b&&a.Ld?a.Tc():String(a)),c)};
g.ac=function(a,b){return g.cc(a,b)};
g.cc=function(a,b){var c=new g.Yb;c.F=a;c.D=b;return c};
g.dc=function(a,b){var c=b instanceof g.Db?b:g.Jb(b);a.href=g.Eb(c)};
g.ec=function(a,b){a.src=g.lb(b).toString()};
g.fc=function(a,b){var c=b instanceof g.Db?b:g.Jb(b);a.href=g.Eb(c)};
g.gc=function(a){return encodeURIComponent(String(a))};
g.hc=function(a){return decodeURIComponent(a.replace(/\+/g," "))};
g.ic=function(a){return a=g.wb(a,void 0)};
g.kc=function(a,b,c){a=void 0!==c?a.toFixed(c):String(a);c=a.indexOf(".");-1==c&&(c=a.length);return(0,g.jc)("0",Math.max(0,b-c))+a};
g.lc=function(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b};
g.mc=function(a,b,c,d,e,f,k){var l="";a&&(l+=a+":");c&&(l+="//",b&&(l+=b+"@"),l+=c,d&&(l+=":"+d));e&&(l+=e);f&&(l+="?"+f);k&&(l+="#"+k);return l};
g.nc=function(a){return a?decodeURI(a):a};
g.pc=function(a,b){return b.match(g.oc)[a]||null};
g.qc=function(a){return g.nc(g.pc(3,a))};
g.rc=function(a){a=a.match(g.oc);return g.mc(null,null,null,null,a[5],a[6],a[7])};
g.sc=function(a){var b=a.indexOf("#");0>b&&(b=a.length);var c=a.indexOf("?");if(0>c||c>b){c=b;var d=""}else d=a.substring(c+1,b);return[a.substr(0,c),d,a.substr(b)]};
g.tc=function(a,b){return b?a?a+"&"+b:b:a};
g.uc=function(a,b){if(!b)return a;var c=g.sc(a);c[1]=g.tc(c[1],b);return c[0]+(c[1]?"?"+c[1]:"")+c[2]};
g.vc=function(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)g.vc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+g.gc(b)))};
g.wc=function(a){var b=[],c;for(c in a)g.vc(c,a[c],b);return b.join("&")};
g.xc=function(a,b){var c=g.wc(b);return g.uc(a,c)};
g.yc=function(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1};
g.Ac=function(a,b){var c=a.search(g.zc),d=g.yc(a,0,b,c);if(0>d)return null;var e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return g.hc(a.substr(d,e-d))};
kaa=function(a){var b=a.url,c=a.cR;this.H=!!a.lR;this.F=gaa(b,c);a=/[?&]dsh=1(&|$)/.test(b);this.D=!a&&/[?&]ae=1(&|$)/.test(b);this.G=!a&&/[?&]ae=2(&|$)/.test(b);this.C=/[?&]adurl=([^&]*)/.exec(b)};
Bc=function(){return g.Rb("iPhone")&&!g.Rb("iPod")&&!g.Rb("iPad")};
g.Cc=function(){return Bc()||g.Rb("iPad")||g.Rb("iPod")};
g.Dc=function(a){g.Dc[" "](a);return a};
g.Ec=function(a,b){try{return g.Dc(a[b]),!0}catch(c){}return!1};
maa=function(a,b){var c=laa;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)};
Fc=function(){var a=g.p.document;return a?a.documentMode:void 0};
g.Hc=function(a){return maa(a,function(){return 0<=g.Ab(g.Gc,a)})};
g.Jc=function(a){return Number(g.Ic)>=a};
Mc=function(a,b){g.Ca(a);void 0===b&&(b=0);Kc();for(var c=Lc[b],d=[],e=0;e<a.length;e+=3){var f=a[e],k=e+1<a.length,l=k?a[e+1]:0,m=e+2<a.length,q=m?a[e+2]:0,r=f>>2;f=(f&3)<<4|l>>4;l=(l&15)<<2|q>>6;q&=63;m||(q=64,k||(l=64));d.push(c[r],c[f],c[l]||"",c[q]||"")}return d.join("")};
naa=function(){var a=65.25;a%3?a=Math.floor(a):g.xb("=.","k")&&(a=g.xb("=.","1")?a-2:a-1);var b=new Uint8Array(a),c=0;g.Nc("BPr83OIQ0ehMqbAUQWSaFHZOJeRvvXddR5EONgwwQcHR6FRe6G43LgD36pJq1IuGN10mmMv-V7IKSIZludF9G1k",function(d){b[c++]=d});
return b.subarray(0,c)};
g.Nc=function(a,b){function c(m){for(;d<a.length;){var q=a.charAt(d++),r=Oc[q];if(null!=r)return r;if(!g.pb(q))throw Error("Unknown base64 encoding at char: "+q);}return m}
Kc();for(var d=0;;){var e=c(-1),f=c(0),k=c(64),l=c(64);if(64===l&&-1===e)break;b(e<<2|f>>4);64!=k&&(b(f<<4&240|k>>2),64!=l&&b(k<<6&192|l))}};
Kc=function(){if(!Oc){Oc={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;5>c;c++){var d=a.concat(b[c].split(""));Lc[c]=d;for(var e=0;e<d.length;e++){var f=d[e];void 0===Oc[f]&&(Oc[f]=e)}}}};
g.Pc=function(a){this.C=0;this.F=a};
g.Qc=function(){};
Rc=function(a){if(a.C)for(var b in a.C){var c=a.C[b];if(g.Aa(c))for(var d=0;d<c.length;d++)c[d]&&c[d].Yc();else c&&c.Yc()}};
Sc=function(a,b){return"number"!==typeof b||!isNaN(b)&&Infinity!==b&&-Infinity!==b?b:String(b)};
Tc=function(a){if(Array.isArray(a)){for(var b=Array(a.length),c=0;c<a.length;c++){var d=a[c];null!=d&&(b[c]="object"==typeof d?Tc(d):d)}return b}if(g.Uc&&a instanceof Uint8Array)return new Uint8Array(a);b={};for(c in a)d=a[c],null!=d&&(b[c]="object"==typeof d?Tc(d):d);return b};
g.Wc=function(a){var b=g.u("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(f){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||g.p.$googDebugFname||b}catch(f){e="Not available",c=!0}return!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:(b=a.message,null==
b&&(b=a.constructor&&a.constructor instanceof Function?'Unknown Error of type "'+(a.constructor.name?a.constructor.name:g.Vc(a.constructor))+'"':"Unknown Error of unknown type"),{message:b,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:a.stack||"Not available"})};
g.Vc=function(a){if(Xc[a])return Xc[a];a=String(a);if(!Xc[a]){var b=/function\s+([^\(]+)/m.exec(a);Xc[a]=b?b[1]:"[Anonymous]"}return Xc[a]};
g.Yc=function(a){this.C=a||{cookie:""}};
g.Zc=function(a){a=(a.C.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=(0,g.yb)(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}};
g.$c=function(a,b){switch(b){case 1:return 0!=a%4||0==a%100&&0!=a%400?28:29;case 5:case 8:case 10:case 3:return 30}return 31};
g.dd=function(a,b,c){"number"===typeof a?(this.date=ad(a,b||0,c||1),bd(this,c||1)):g.Ea(a)?(this.date=ad(a.getFullYear(),a.getMonth(),a.getDate()),bd(this,a.getDate())):(this.date=new Date((0,g.cd)()),a=this.date.getDate(),this.date.setHours(0),this.date.setMinutes(0),this.date.setSeconds(0),this.date.setMilliseconds(0),bd(this,a))};
ad=function(a,b,c){b=new Date(a,b,c);0<=a&&100>a&&b.setFullYear(b.getFullYear()-1900);return b};
bd=function(a,b){if(a.getDate()!=b){var c=a.getDate()<b?1:-1;a.date.setUTCHours(a.date.getUTCHours()+c)}};
g.ed=function(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0};
g.fd=function(a,b){return a==b?!0:a&&b?a.x==b.x&&a.y==b.y:!1};
g.gd=function(a,b){var c=a.x-b.x,d=a.y-b.y;return Math.sqrt(c*c+d*d)};
g.hd=function(a,b){this.width=a;this.height=b};
g.z=function(a){return g.id(document,a)};
g.id=function(a,b){return"string"===typeof b?a.getElementById(b):b};
g.jd=function(a){return g.id(document,a)};
g.ld=function(a,b){g.Ta(b,function(c,d){c&&"object"==typeof c&&c.Ld&&(c=c.Tc());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:kd.hasOwnProperty(d)?a.setAttribute(kd[d],c):g.nb(d,"aria-")||g.nb(d,"data-")?a.setAttribute(d,c):a[d]=c})};
g.nd=function(a){return g.md(a||window)};
g.md=function(a){a=a.document;a=g.od(a)?a.documentElement:a.body;return new g.hd(a.clientWidth,a.clientHeight)};
g.qd=function(a,b,c){return g.pd(document,arguments)};
g.pd=function(a,b){var c=String(b[0]),d=b[1];if(!oaa&&d&&(d.name||d.type)){c=["<",c];d.name&&c.push(' name="',g.ic(d.name),'"');if(d.type){c.push(' type="',g.ic(d.type),'"');var e={};g.cb(e,d);delete e.type;d=e}c.push(">");c=c.join("")}c=g.rd(a,c);d&&("string"===typeof d?c.className=d:Array.isArray(d)?c.className=d.join(" "):g.ld(c,d));2<b.length&&g.sd(a,c,b,2);return c};
g.sd=function(a,b,c,d){function e(k){k&&b.appendChild("string"===typeof k?a.createTextNode(k):k)}
for(;d<c.length;d++){var f=c[d];!g.Ca(f)||g.Ea(f)&&0<f.nodeType?e(f):(0,g.B)(paa(f)?g.Qa(f):f,e)}};
g.td=function(a){return g.rd(document,a)};
g.rd=function(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)};
g.od=function(a){return"CSS1Compat"==a.compatMode};
g.ud=function(a){for(var b;b=a.firstChild;)a.removeChild(b)};
g.wd=function(a){return a&&a.parentNode?a.parentNode.removeChild(a):null};
g.xd=function(a){return 9==a.nodeType?a:a.ownerDocument||a.document};
paa=function(a){if(a&&"number"==typeof a.length){if(g.Ea(a))return"function"==typeof a.item||"string"==typeof a.item;if(g.Da(a))return"function"==typeof a.item}return!1};
g.yd=function(a,b,c,d){a&&!c&&(a=a.parentNode);for(c=0;a&&(null==d||c<=d);){if(b(a))return a;a=a.parentNode;c++}return null};
g.zd=function(a,b){if(a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)};
g.Ad=function(a){var b=[];g.zd(a,function(c){b.push(c)});
return b};
raa=function(){var a=g.td("IFRAME"),b={};(0,g.B)(qaa(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b};
g.C=function(){this.Qc=this.Qc;this.vf=this.vf};
g.Dd=function(a,b){g.Bd(a,g.w(g.Cd,b))};
g.Bd=function(a,b){a.Qc?b():(a.vf||(a.vf=[]),a.vf.push(b))};
g.Cd=function(a){a&&"function"==typeof a.dispose&&a.dispose()};
g.Ed=function(){this.C=function(a){return void 0===a?!1:a};
this.F=function(a){return void 0===a?0:a}};
g.Gd=function(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d};
g.Hd=function(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a};
g.Id=function(a,b){a.style.width=g.Hd(b,!0)};
g.Jd=function(a,b){return typeof a===b};
g.Ld=function(){var a=void 0===a?g.Kd:a;try{return a.history.length}catch(b){return 0}};
g.Md=function(a){a.u_tz=-(new Date).getTimezoneOffset();a.u_his=g.Ld();a.u_java=!!g.Kd.navigator&&!g.Jd(g.Kd.navigator.javaEnabled,"unknown")&&!!g.Kd.navigator.javaEnabled&&g.Kd.navigator.javaEnabled();g.Kd.screen&&(a.u_h=g.Kd.screen.height,a.u_w=g.Kd.screen.width,a.u_ah=g.Kd.screen.availHeight,a.u_aw=g.Kd.screen.availWidth,a.u_cd=g.Kd.screen.colorDepth);g.Kd.navigator&&g.Kd.navigator.plugins&&(a.u_nplug=g.Kd.navigator.plugins.length);g.Kd.navigator&&g.Kd.navigator.mimeTypes&&(a.u_nmime=g.Kd.navigator.mimeTypes.length)};
g.Nd=function(a,b){try{return(void 0===b?0:b)?(new g.hd(a.innerWidth,a.innerHeight)).round():g.nd(a).round()}catch(c){return new g.hd(-12245933,-12245933)}};
g.Od=function(a){try{var b=a.screenX;var c=a.screenY}catch(l){}try{var d=a.outerWidth;var e=a.outerHeight}catch(l){}try{var f=a.innerWidth;var k=a.innerHeight}catch(l){}return[a.screenLeft,a.screenTop,b,c,a.screen?a.screen.availWidth:void 0,a.screen?a.screen.availTop:void 0,d,e,f,k]};
Pd=function(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"chrome-untrusted"!==a&&"app"!==a)throw Error("Invalid URI scheme in origin: "+a);c="";var d=b.indexOf(":");
if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c};
saa=function(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;r=q=0}
function b(y){for(var A=k,G=0;64>G;G+=4)A[G/4]=y[G]<<24|y[G+1]<<16|y[G+2]<<8|y[G+3];for(G=16;80>G;G++)y=A[G-3]^A[G-8]^A[G-14]^A[G-16],A[G]=(y<<1|y>>>31)&4294967295;y=e[0];var O=e[1],T=e[2],ra=e[3],Ba=e[4];for(G=0;80>G;G++){if(40>G)if(20>G){var Ha=ra^O&(T^ra);var vd=1518500249}else Ha=O^T^ra,vd=1859775393;else 60>G?(Ha=O&T|ra&(O|T),vd=2400959708):(Ha=O^T^ra,vd=3395469782);Ha=((y<<5|y>>>27)&4294967295)+Ha+Ba+vd+A[G]&4294967295;Ba=ra;ra=T;T=(O<<30|O>>>2)&4294967295;O=y;y=Ha}e[0]=e[0]+y&4294967295;e[1]=
e[1]+O&4294967295;e[2]=e[2]+T&4294967295;e[3]=e[3]+ra&4294967295;e[4]=e[4]+Ba&4294967295}
function c(y,A){if("string"===typeof y){y=unescape(encodeURIComponent(y));for(var G=[],O=0,T=y.length;O<T;++O)G.push(y.charCodeAt(O));y=G}A||(A=y.length);G=0;if(0==q)for(;G+64<A;)b(y.slice(G,G+64)),G+=64,r+=64;for(;G<A;)if(f[q++]=y[G++],r++,64==q)for(q=0,b(f);G+64<A;)b(y.slice(G,G+64)),G+=64,r+=64}
function d(){var y=[],A=8*r;56>q?c(l,56-q):c(l,64-(q-56));for(var G=63;56<=G;G--)f[G]=A&255,A>>>=8;b(f);for(G=A=0;5>G;G++)for(var O=24;0<=O;O-=8)y[A++]=e[G]>>O&255;return y}
for(var e=[],f=[],k=[],l=[128],m=1;64>m;++m)l[m]=0;var q,r;a();return{reset:a,update:c,digest:d,su:function(){for(var y=d(),A="",G=0;G<y.length;G++)A+="0123456789ABCDEF".charAt(Math.floor(y[G]/16))+"0123456789ABCDEF".charAt(y[G]%16);return A}}};
taa=function(a,b,c){var d=[],e=[];if(1==(g.Aa(c)?2:1))return e=[b,a],(0,g.B)(d,function(l){e.push(l)}),Qd(e.join(" "));
var f=[],k=[];(0,g.B)(c,function(l){k.push(l.key);f.push(l.value)});
c=Math.floor((new Date).getTime()/1E3);e=g.Na(f)?[c,b,a]:[f.join(":"),c,b,a];(0,g.B)(d,function(l){e.push(l)});
a=Qd(e.join(" "));a=[c,a];g.Na(k)||a.push(k.join(""));return a.join("_")};
Qd=function(a){var b=saa();b.update(a);return b.su().toLowerCase()};
Rd=function(a){var b=Pd(String(g.p.location.href)),c;(c=g.p.__SAPISID||g.p.__APISID||g.p.__OVERRIDE_SID)?c=!0:(c=new g.Yc(document),c=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID"),c=!!c);if(c&&(c=(b=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?g.p.__SAPISID:g.p.__APISID,c||(c=new g.Yc(document),c=c.get(b?"SAPISID":"APISID")||c.get("__Secure-3PAPISID")),c)){b=b?"SAPISIDHASH":"APISIDHASH";var d=String(g.p.location.href);return d&&c&&b?[b,taa(Pd(d),c,a||null)].join(" "):
null}return null};
Sd=function(){this.C=[];this.F=-1};
uaa=function(a){-1==a.F&&(a.F=(0,g.Td)(a.C,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.F};
g.Ud=function(){var a=new Sd;g.p.SVGElement&&g.p.document.createElementNS&&a.set(0);var b=raa();b["allow-top-navigation-by-user-activation"]&&a.set(1);b["allow-popups-to-escape-sandbox"]&&a.set(2);g.p.crypto&&g.p.crypto.subtle&&a.set(3);g.p.TextDecoder&&g.p.TextEncoder&&a.set(4);return uaa(a)};
g.Vd=function(a){return{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0};
g.Wd=function(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.F=!1};
g.Xd=function(a,b){g.Wd.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.G=!1;this.pointerId=0;this.pointerType="";this.yc=null;a&&this.init(a,b)};
g.Zd=function(a){return!(!a||!a[Yd])};
waa=function(a,b,c,d,e){this.listener=a;this.C=null;this.src=b;this.type=c;this.capture=!!d;this.Yg=e;this.key=++vaa;this.jg=this.Oh=!1};
$d=function(a){a.jg=!0;a.listener=null;a.C=null;a.src=null;a.Yg=null};
g.ae=function(a){this.src=a;this.listeners={};this.C=0};
be=function(a,b){var c=b.type;if(!(c in a.listeners))return!1;var d=g.Pa(a.listeners[c],b);d&&($d(b),0==a.listeners[c].length&&(delete a.listeners[c],a.C--));return d};
ce=function(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.jg&&f.listener==b&&f.capture==!!c&&f.Yg==d)return e}return-1};
g.ee=function(a,b,c,d,e){if(d&&d.once)return g.de(a,b,c,d,e);if(Array.isArray(b)){for(var f=0;f<b.length;f++)g.ee(a,b[f],c,d,e);return null}c=g.fe(c);return g.Zd(a)?a.O(b,c,g.Ea(d)?!!d.capture:!!d,e):ge(a,b,c,!1,d,e)};
ge=function(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var k=g.Ea(e)?!!e.capture:!!e,l=g.he(a);l||(a[ie]=l=new g.ae(a));c=l.add(b,c,d,k,f);if(c.C)return c;d=xaa();c.C=d;d.src=a;d.listener=c;if(a.addEventListener)yaa||(e=k),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(je(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");ke++;return c};
xaa=function(){var a=zaa,b=le?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);
if(!c)return c};
return b};
g.de=function(a,b,c,d,e){if(Array.isArray(b)){for(var f=0;f<b.length;f++)g.de(a,b[f],c,d,e);return null}c=g.fe(c);return g.Zd(a)?a.Ae(b,c,g.Ea(d)?!!d.capture:!!d,e):ge(a,b,c,!0,d,e)};
g.me=function(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)g.me(a,b[f],c,d,e);else d=g.Ea(d)?!!d.capture:!!d,c=g.fe(c),g.Zd(a)?a.Va(b,c,d,e):a&&(a=g.he(a))&&(b=a.Ve(b,c,d,e))&&g.ne(b)};
g.ne=function(a){if("number"===typeof a||!a||a.jg)return!1;var b=a.src;if(g.Zd(b))return be(b.ud,a);var c=a.type,d=a.C;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(je(c),d):b.addListener&&b.removeListener&&b.removeListener(d);ke--;(c=g.he(b))?(be(c,a),0==c.C&&(c.src=null,b[ie]=null)):$d(a);return!0};
je=function(a){return a in oe?oe[a]:oe[a]="on"+a};
qe=function(a,b,c,d){var e=!0;if(a=g.he(a))if(b=a.listeners[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.jg&&(f=pe(f,d),e=e&&!1!==f)}return e};
pe=function(a,b){var c=a.listener,d=a.Yg||a.src;a.Oh&&g.ne(a);return c.call(d,b)};
zaa=function(a,b){if(a.jg)return!0;if(!le){var c=b||g.u("window.event"),d=new g.Xd(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(m){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.currentTarget;f;f=f.parentNode)c.push(f);f=a.type;for(var k=c.length-1;!d.F&&0<=k;k--){d.currentTarget=c[k];var l=qe(c[k],f,!0,d);e=e&&l}for(k=0;!d.F&&k<c.length;k++)d.currentTarget=c[k],l=qe(c[k],f,!1,d),e=e&&l}return e}return pe(a,new g.Xd(b,
this))};
g.he=function(a){a=a[ie];return a instanceof g.ae?a:null};
g.fe=function(a){if(g.Da(a))return a;a[re]||(a[re]=function(b){return a.handleEvent(b)});
return a[re]};
g.se=function(){g.C.call(this);this.ud=new g.ae(this);this.Ct=this;this.Nl=null};
te=function(a,b,c,d){b=a.ud.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var k=b[f];if(k&&!k.jg&&k.capture==c){var l=k.listener,m=k.Yg||k.src;k.Oh&&be(a.ud,k);e=!1!==l.call(m,d)&&e}}return e&&!d.defaultPrevented};
ue=function(a,b){this.D=a;this.G=b;this.F=0;this.C=null};
ve=function(a,b){a.G(b);100>a.F&&(a.F++,b.next=a.C,a.C=b)};
we=function(a){g.p.setTimeout(function(){throw a;},0)};
Baa=function(){var a=g.p.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!g.Rb("Presto")&&(a=function(){var e=g.td("IFRAME");e.style.display="none";g.ec(e,g.mb(Aaa));document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.write(g.Zb(g.xe));e.close();var k="callImmediate"+Math.random(),l="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=(0,g.v)(function(m){if(("*"==l||m.origin==
l)&&m.data==k)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(k,l)}}});
if("undefined"!==typeof a&&!g.Sb()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.hn;c.hn=null;e()}};
return function(e){d.next={hn:e};d=d.next;b.port2.postMessage(0)}}return function(e){g.p.setTimeout(e,0)}};
ye=function(){this.F=this.C=null};
ze=function(){this.next=this.scope=this.lc=null};
De=function(a,b){Ae||Caa();Be||(Ae(),Be=!0);Ce.add(a,b)};
Caa=function(){if(g.p.Promise&&g.p.Promise.resolve){var a=g.p.Promise.resolve(void 0);Ae=function(){a.then(Ee)}}else Ae=function(){var b=Ee;
!g.Da(g.p.setImmediate)||g.p.Window&&g.p.Window.prototype&&!g.Rb("Edge")&&g.p.Window.prototype.setImmediate==g.p.setImmediate?(Fe||(Fe=Baa()),Fe(b)):g.p.setImmediate(b)}};
Ee=function(){for(var a;a=Ce.remove();){try{a.lc.call(a.scope)}catch(b){we(b)}ve(Ge,a)}Be=!1};
g.He=function(a){a.prototype.$goog_Thenable=!0};
g.Ie=function(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};
g.Ke=function(a,b){this.C=0;this.M=void 0;this.G=this.F=this.D=null;this.H=this.L=!1;if(a!=g.xa)try{var c=this;a.call(b,function(d){g.Je(c,2,d)},function(d){g.Je(c,3,d)})}catch(d){g.Je(this,3,d)}};
Le=function(){this.next=this.context=this.onRejected=this.F=this.C=null;this.D=!1};
Ne=function(a,b,c){var d=Me.get();d.F=a;d.onRejected=b;d.context=c;return d};
g.Pe=function(a,b,c){Oe(a,b,c,null)||De(g.w(b,a))};
g.Qe=function(a){return new g.Ke(function(b,c){var d=a.length,e=[];if(d)for(var f=function(q,r){d--;e[q]=r;0==d&&b(e)},k=function(q){c(q)},l=0,m;l<a.length;l++)m=a[l],g.Pe(m,g.w(f,l),k);
else b(e)})};
g.Se=function(a,b){return Re(a,null,b,void 0)};
Te=function(a,b){if(0==a.C)if(a.D){var c=a.D;if(c.F){for(var d=0,e=null,f=null,k=c.F;k&&(k.D||(d++,k.C==a&&(e=k),!(e&&1<d)));k=k.next)e||(f=k);e&&(0==c.C&&1==d?Te(c,b):(f?(d=f,d.next==c.G&&(c.G=d),d.next=d.next.next):Ue(c),Ve(c,e,3,b)))}a.D=null}else g.Je(a,3,b)};
Xe=function(a,b){a.F||2!=a.C&&3!=a.C||We(a);a.G?a.G.next=b:a.F=b;a.G=b};
Re=function(a,b,c,d){var e=Ne(null,null,null);e.C=new g.Ke(function(f,k){e.F=b?function(l){try{var m=b.call(d,l);f(m)}catch(q){k(q)}}:f;
e.onRejected=c?function(l){try{var m=c.call(d,l);void 0===m&&l instanceof g.Ye?k(l):f(m)}catch(q){k(q)}}:k});
e.C.D=a;Xe(a,e);return e.C};
g.Je=function(a,b,c){0==a.C&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.C=1,Oe(c,a.Y,a.N,a)||(a.M=c,a.C=b,a.D=null,We(a),3!=b||c instanceof g.Ye||Daa(a,c)))};
Oe=function(a,b,c,d){if(a instanceof g.Ke)return Xe(a,Ne(b||g.xa,c||null,d)),!0;if(g.Ie(a))return a.then(b,c,d),!0;if(g.Ea(a))try{var e=a.then;if(g.Da(e))return Eaa(a,e,b,c,d),!0}catch(f){return c.call(d,f),!0}return!1};
Eaa=function(a,b,c,d,e){function f(m){l||(l=!0,d.call(e,m))}
function k(m){l||(l=!0,c.call(e,m))}
var l=!1;try{b.call(a,k,f)}catch(m){f(m)}};
We=function(a){a.L||(a.L=!0,De(a.J,a))};
Ue=function(a){var b=null;a.F&&(b=a.F,a.F=b.next,b.next=null);a.F||(a.G=null);return b};
Ve=function(a,b,c,d){if(3==c&&b.onRejected&&!b.D)for(;a&&a.H;a=a.D)a.H=!1;if(b.C)b.C.D=null,Ze(b,c,d);else try{b.D?b.F.call(b.context):Ze(b,c,d)}catch(e){$e.call(null,e)}ve(Me,b)};
Ze=function(a,b,c){2==b?a.F.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)};
Daa=function(a,b){a.H=!0;De(function(){a.H&&$e.call(null,b)})};
g.Ye=function(a){g.Ia.call(this,a)};
g.af=function(a,b,c){if(g.Da(a))c&&(a=(0,g.v)(a,c));else if(a&&"function"==typeof a.handleEvent)a=(0,g.v)(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:g.p.setTimeout(a,b||0)};
g.bf=function(a){g.p.clearTimeout(a)};
g.cf=function(a,b,c){g.C.call(this);this.C=a;this.D=b||0;this.F=c;this.Pb=(0,g.v)(this.wk,this)};
Faa=function(){this.F=-1};
df=function(){this.F=64;this.C=[];this.L=[];this.M=[];this.G=[];this.G[0]=128;for(var a=1;a<this.F;++a)this.G[a]=0;this.H=this.D=0;this.reset()};
ef=function(a,b,c){c||(c=0);var d=a.M;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.C[0];c=a.C[1];var k=a.C[2],l=a.C[3],m=a.C[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=l^c&(k^l);var q=1518500249}else f=c^k^l,q=1859775393;else 60>e?(f=c&k|l&(c|k),q=2400959708):
(f=c^k^l,q=3395469782);f=(b<<5|b>>>27)+f+m+q+d[e]&4294967295;m=l;l=k;k=(c<<30|c>>>2)&4294967295;c=b;b=f}a.C[0]=a.C[0]+b&4294967295;a.C[1]=a.C[1]+c&4294967295;a.C[2]=a.C[2]+k&4294967295;a.C[3]=a.C[3]+l&4294967295;a.C[4]=a.C[4]+m&4294967295};
g.ff=function(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""};
g.gf=function(a){return a.classList?a.classList:g.ff(a).match(/\S+/g)||[]};
g.D=function(a,b){return a.classList?a.classList.contains(b):g.Ma(g.gf(a),b)};
g.hf=function(){};
kf=function(a){if(a instanceof g.hf)return a;if("function"==typeof a.ad)return a.ad(!1);if(g.Ca(a)){var b=0,c=new g.hf;c.next=function(){for(;;){if(b>=a.length)throw g.jf;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");};
g.lf=function(a,b,c){if(g.Ca(a))try{(0,g.B)(a,b,c)}catch(d){if(d!==g.jf)throw d;}else{a=kf(a);try{for(;;)b.call(c,a.next(),void 0,a)}catch(d){if(d!==g.jf)throw d;}}};
Gaa=function(a){if(g.Ca(a))return g.Qa(a);a=kf(a);var b=[];g.lf(a,function(c){b.push(c)});
return b};
g.nf=function(a,b){this.F={};this.C=[];this.Ie=this.D=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else a&&g.mf(this,a)};
Haa=function(a,b){return a===b};
g.pf=function(a){if(a.D!=a.C.length){for(var b=0,c=0;b<a.C.length;){var d=a.C[b];g.of(a.F,d)&&(a.C[c++]=d);b++}a.C.length=c}if(a.D!=a.C.length){var e={};for(c=b=0;b<a.C.length;)d=a.C[b],g.of(e,d)||(a.C[c++]=d,e[d]=1),b++;a.C.length=c}};
g.mf=function(a,b){if(b instanceof g.nf)for(var c=b.xc(),d=0;d<c.length;d++)a.set(c[d],b.get(c[d]));else for(c in b)a.set(c,b[c])};
g.of=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};
g.rf=function(a){var b=[];qf(new Iaa,a,b);return b.join("")};
Iaa=function(){};
qf=function(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),qf(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),sf(d,c),c.push(":"),qf(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":sf(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}};
sf=function(a,b){b.push('"',a.replace(Jaa,function(c){var d=tf[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),tf[c]=d);return d}),'"')};
g.uf=function(a){g.C.call(this);this.H=1;this.D=[];this.G=0;this.C=[];this.F={};this.L=!!a};
g.vf=function(a,b,c,d){if(b=a.F[b]){var e=a.C;(b=g.Ka(b,function(f){return e[f+1]==c&&e[f+2]==d}))&&a.od(b)}};
Kaa=function(a,b,c){De(function(){a.apply(b,c)})};
g.xf=function(a){this.C=a};
yf=function(a){this.C=a};
zf=function(a){this.data=a};
Af=function(a){return void 0===a||a instanceof zf?a:new zf(a)};
g.Bf=function(a){this.C=a};
g.Cf=function(a){var b=a.creation;a=a.expiration;return!!a&&a<(0,g.cd)()||!!b&&b>(0,g.cd)()};
Laa=function(){};
Df=function(){};
g.Ef=function(a){this.C=a};
g.Ff=function(){var a=null;try{a=window.localStorage||null}catch(b){}this.C=a};
If=function(a,b){this.F=a;this.C=null;if(g.Gf&&!g.Jc(9)){Hf||(Hf=new g.nf);this.C=Hf.get(a);this.C||(b?this.C=document.getElementById(b):(this.C=document.createElement("userdata"),this.C.addBehavior("#default#userData"),document.body.appendChild(this.C)),Hf.set(a,this.C));try{this.C.load(this.F)}catch(c){this.C=null}}};
Jf=function(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Maa[b]})};
Kf=function(a){try{a.C.save(a.F)}catch(b){throw"Storage mechanism: Quota exceeded";}};
Lf=function(a){return a.C.XMLDocument.documentElement};
Mf=function(a,b){this.F=a;this.C=b+"::"};
g.Nf=function(a){var b=new g.Ff;return b.isAvailable()?a?new Mf(b,a):b:null};
Of=function(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])};
g.Qf=function(a){Of(g.Pf,arguments)};
Rf=function(a,b){var c=g.E(a,void 0);c?c.push(b):g.Qf(a,[b])};
g.E=function(a,b){return a in g.Pf?g.Pf[a]:b};
Sf=function(a){var b=g.Pf.EXPERIMENT_FLAGS;return b?b[a]:void 0};
g.Uf=function(a){a=Tf(a);return"string"===typeof a&&"false"===a?!1:!!a};
g.Vf=function(a,b){var c=Tf(a);return void 0===c&&void 0!==b?b:Number(c||0)};
Wf=function(a){a=Tf(a);return void 0!==a?String(a):""};
Tf=function(a){var b=g.E("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:g.E("EXPERIMENT_FLAGS",{})[a]};
g.F=function(a,b){return a?a.dataset?a.dataset[g.Xf(b)]:a.getAttribute("data-"+b):null};
g.Xf=function(a){return Yf[a]||(Yf[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))};
Oaa=function(a){Naa.forEach(function(b){return b(a)})};
$f=function(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){g.Zf(b),Oaa(b)}}:a};
g.Zf=function(a){var b=g.u("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0):(b=g.E("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0]),g.Qf("ERRORS",b))};
g.ag=function(a){var b=g.u("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0):(b=g.E("ERRORS",[]),b.push([a,"WARNING",void 0,void 0,void 0]),g.Qf("ERRORS",b))};
Paa=function(a,b,c,d,e){b=void 0===b?"Unknown file":b;c=void 0===c?0:c;var f=!1,k=Sf("log_window_onerror_fraction");if(k&&Math.random()<k)f=!0;else{k=document.getElementsByTagName("script");for(var l=0,m=k.length;l<m;l++)if(0<k[l].src.indexOf("/debug-")){f=!0;break}}f&&(f=!1,e?f=!0:("string"===typeof a?k=a:ErrorEvent&&a instanceof ErrorEvent?(f=!0,k=a.message,b=a.filename,c=a.lineno,d=a.colno):(k="Unknown error",b="Unknown file",c=0),a=Error(k),a.name="UnhandledWindowError",e=a,e.message=k,e.fileName=
b,e.lineNumber=c,isNaN(d)?delete e.columnNumber:e.columnNumber=d),f?g.Zf(e):g.ag(e))};
g.bg=function(a,b){g.Da(a)&&(a=$f(a));return window.setTimeout(a,b)};
g.cg=function(a,b){g.Da(a)&&(a=$f(a));return window.setInterval(a,b)};
g.dg=function(a){window.clearTimeout(a)};
g.eg=function(a){window.clearInterval(a)};
g.kg=function(a,b,c){var d=fg();if(d){var e=d.subscribe(a,function(){var f=arguments;var k=function(){hg[e]&&b.apply(c||window,f)};
try{ig[a]?k():g.bg(k,0)}catch(l){g.Zf(l)}},c);
hg[e]=!0;jg[a]||(jg[a]=[]);jg[a].push(e);return e}return 0};
g.lg=function(a){var b=fg();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),(0,g.B)(a,function(c){b.unsubscribeByKey(c);delete hg[c]}))};
g.H=function(a,b){var c=fg();return c?c.publish.apply(c,arguments):!1};
g.mg=function(a,b){ig[a]=!0;var c=fg();c=c?c.publish.apply(c,arguments):!1;ig[a]=!1;return c};
fg=function(){return g.u("ytPubsubPubsubInstance")};
g.og=function(a,b){var c=g.ng(a);spf.script.load(a,c,b)};
g.pg=function(a){a=g.ng(a);spf.script.unload(a)};
g.ng=function(a){var b="";if(a){var c=a.indexOf("jsbin/"),d=a.lastIndexOf(".js"),e=c+6;-1<c&&-1<d&&d>e&&(b=a.substring(e,d),b=b.replace(Qaa,""),b=b.replace(Raa,""),b=b.replace("debug-",""),b=b.replace("tracing-",""))}return b};
g.Eg=function(){g.dg(g.qg);g.dg(g.rg);g.rg=0;if(!g.Wa(g.sg)){for(var a in g.sg){var b=tg[a];if(b&&b.isReady()){var c=void 0,d=a,e=Saa[d],f=Math.round((0,g.ug)());for(c in g.sg[d]){var k=g.ab(g.vg(b));k[e]=wg(d,c);var l=xg[c];if(l)a:{var m=k,q=c;if(l.videoId)var r="VIDEO";else if(l.playlistId)r="PLAYLIST";else break a;m.credentialTransferTokenTargetId=l;m.context=m.context||{};m.context.user=m.context.user||{};m.context.user.credentialTransferTokens=[{token:q,scope:r}]}delete xg[c];l=k;l.requestTimeMs=
f;g.Uf("unsplit_gel_payloads_in_logs")&&(l.unsplitGelPayloadsInLogs=!0);if(r=g.E("EVENT_ID",void 0))m=g.E("BATCH_CLIENT_COUNTER",void 0)||0,!m&&g.Uf("web_client_counter_random_seed")&&(m=Math.floor(Math.random()*yg/2)),m++,m>yg&&(m=1),g.Qf("BATCH_CLIENT_COUNTER",m),r={serializedEventId:r,clientCounter:m},l.serializedClientEventId=r,zg&&Ag&&g.Uf("log_gel_rtt_web")&&(l.previousBatchInfo={serializedClientEventId:zg,roundtripMs:Ag}),zg=r,Ag=0;g.Bg(b,d,k,{retry:Taa.has(d),onSuccess:g.w(Uaa,(0,g.ug)())})}delete g.sg[a];
Cg=!1}}g.Wa(g.sg)||g.Dg()}};
g.Dg=function(){g.Uf("web_gel_timeout_cap")&&!g.rg&&(g.rg=g.bg(g.Eg,6E4));g.dg(g.qg);var a=g.Vf("web_gel_debounce_ms",1E4);a=g.E("LOGGING_BATCH_TIMEOUT",g.Fg||a);g.Uf("shorten_initial_gel_batch_timeout")&&Cg&&(a=Vaa);g.qg=g.bg(g.Eg,a)};
wg=function(a,b){b=void 0===b?"":b;g.sg[a]=g.sg[a]||{};g.sg[a][b]=g.sg[a][b]||[];return g.sg[a][b]};
Uaa=function(a){Ag=Math.round((0,g.ug)()-a)};
g.Hg=function(a){var b=a.__yt_uid_key;b||(b=Gg(),a.__yt_uid_key=b);return b};
g.Ig=function(){var a=document;if("visibilityState"in a)return a.visibilityState;var b=Waa+"VisibilityState";if(b in a)return a[b]};
g.Jg=function(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in Xaa||(this[b]=a[b]);this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?
d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.C=a.pageX;this.F=a.pageY}}catch(e){}};
Kg=function(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.C=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.F=a.clientY+b}};
g.Lg=function(a){void 0===a.C&&Kg(a);return a.C};
g.Mg=function(a){void 0===a.F&&Kg(a);return a.F};
g.Og=function(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return g.Va(Ng,function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,k=g.Ea(e[4])&&g.Ea(d)&&g.Za(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||k)})};
g.I=function(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=g.Og(a,b,c,d);if(e)return e;e=++Pg.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var k=f?function(l){l=new g.Jg(l);if(!g.yd(l.relatedTarget,function(m){return m==a},!0))return l.currentTarget=a,l.type=b,c.call(a,l)}:function(l){l=new g.Jg(l);
l.currentTarget=a;return c.call(a,l)};
k=$f(k);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Sg()||"boolean"===typeof d?a.addEventListener(b,k,d):a.addEventListener(b,k,!!d.capture)):a.attachEvent("on"+b,k);Ng[e]=[a,b,c,k,d];return e};
g.Tg=function(a){a&&("string"==typeof a&&(a=[a]),(0,g.B)(a,function(b){if(b in Ng){var c=Ng[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Sg()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete Ng[b]}}))};
g.Ug=function(a,b,c){var d=void 0===d?{}:d;var e;return e=g.I(a,b,function(){g.Tg(e);c.apply(a,arguments)},d)};
g.Vg=function(a){for(var b in Ng)Ng[b][0]==a&&g.Tg(b)};
g.Wg=function(a){this.Pb=a;this.C=null;this.D=0;this.L=null;this.G=0;this.F=[];for(a=0;4>a;a++)this.F.push(0);this.H=0;this.J=g.I(window,"mousemove",(0,g.v)(this.Y,this));this.N=g.cg((0,g.v)(this.M,this),25)};
Yaa=function(){};
g.Yg=function(a,b){return Xg(a,0,b)};
g.Zg=function(a,b){return Xg(a,1,b)};
g.ah=function(a){for(var b=0,c=a.length;b<c;b++)g.$g(a[b])};
bh=function(){};
g.ch=function(){return!!g.u("yt.scheduler.instance")};
Xg=function(a,b,c){isNaN(c)&&(c=void 0);var d=g.u("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):g.bg(a,c||0)};
g.$g=function(a){if(!isNaN(a)){var b=g.u("yt.scheduler.instance.cancelJob");b?b(a):g.dg(a)}};
g.fh=function(a){var b=void 0===a?{}:a;a=void 0===b.cy?!0:b.cy;b=void 0===b.KF?!1:b.KF;if(null==g.u("_lact",window)){var c=parseInt(g.E("LACT"),10);c=isFinite(c)?(0,g.cd)()-Math.max(c,0):-1;g.t("_lact",c,window);g.t("_fact",c,window);-1==c&&g.dh();g.I(document,"keydown",g.dh);g.I(document,"keyup",g.dh);g.I(document,"mousedown",g.dh);g.I(document,"mouseup",g.dh);a&&(b?g.I(window,"touchmove",function(){eh("touchmove",200)},{passive:!0}):(g.I(window,"resize",function(){eh("resize",200)}),g.I(window,
"scroll",function(){eh("scroll",200)})));
new g.Wg(function(){eh("mouse",100)});
g.I(document,"touchstart",g.dh,{passive:!0});g.I(document,"touchend",g.dh,{passive:!0})}};
eh=function(a,b){gh[a]||(gh[a]=!0,g.Zg(function(){g.dh();gh[a]=!1},b))};
g.dh=function(){null==g.u("_lact",window)&&g.fh();var a=(0,g.cd)();g.t("_lact",a,window);-1==g.u("_fact",window)&&g.t("_fact",a,window);(a=g.u("ytglobal.ytUtilActivityCallback_"))&&a()};
g.hh=function(){var a=g.u("_lact",window);return null==a?-1:Math.max((0,g.cd)()-a,0)};
g.lh=function(a,b,c,d){d=void 0===d?{}:d;var e={};e.eventTimeMs=Math.round(d.timestamp||(0,g.ug)());e[a]=b;e.context={lastActivityMs:String(d.timestamp?-1:g.hh())};g.Uf("log_sequence_info_on_gel_web")&&d.Ee&&(a=e.context,b=d.Ee,ih[b]=b in ih?ih[b]+1:0,a.sequence={index:ih[b],groupKey:b},d.Fu&&delete ih[d.Ee]);(d=d.Nf)?(a={},d.videoId?a.videoId=d.videoId:d.playlistId&&(a.playlistId=d.playlistId),xg[d.token]=a,d=wg("log_event",d.token)):d=wg("log_event");d.push(e);c&&(tg.log_event=new c);c=g.Vf("web_logging_max_batch")||
100;e=(0,g.ug)();d.length>=c?g.Eg():e-g.jh>=g.kh&&(g.Dg(),g.jh=e)};
oh=function(a){a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length)try{var f=g.hc(e[0]||""),k=g.hc(e[1]||"");f in b?g.Aa(b[f])?g.Ra(b[f],k):b[f]=[b[f],k]:b[f]=k}catch(m){if("q"!=e[0]){var l=Error("Error decoding URL component");l.params={key:e[0],value:e[1]};g.Zf(l)}}}return b};
g.ph=function(a){var b=[];g.Ta(a,function(c,d){var e=g.gc(d),f;g.Aa(c)?f=c:f=[c];(0,g.B)(f,function(k){""==k?b.push(e):b.push(e+"="+g.gc(k))})});
return b.join("&")};
g.qh=function(a){"?"==a.charAt(0)&&(a=a.substr(1));return oh(a)};
g.sh=function(a,b){return g.rh(a,b||{},!0)};
g.rh=function(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=g.qh(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return g.xc(a,e)+d};
wh=function(a){var b=g.th;a=void 0===a?g.u("yt.ads.biscotti.lastId_")||"":a;b=Object.assign(g.uh(b),g.vh(b));b.ca_type="image";a&&(b.bid=a);return b};
g.uh=function(a){var b={};b.dt=g.xh;b.flash="0";a:{try{var c=a.C.top.location.href}catch(d){a=2;break a}a=c?c===a.F.location.href?0:1:2}b=(b.frm=a,b);g.Md(b);return b};
g.vh=function(a){var b=g.Od(a.C),c=g.Nd(a.C.top),d={};return d.bc=g.Ud(),d.bih=c.height,d.biw=c.width,d.brdim=b.join(),d.vis=g.Vd(a.F),d.wgl=!!g.Kd.WebGLRenderingContext,d};
Zaa=function(){if(!yh)return null;var a=yh();return"open"in a?a:null};
g.Ah=function(a){switch(g.zh(a)){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}};
g.zh=function(a){return a&&"status"in a?a.status:-1};
$aa=function(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=g.pc(1,a),e=g.qc(a);d&&e?(d=c,c=a.match(g.oc),d=d.match(g.oc),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?g.qc(c)==e&&(Number(g.pc(4,c))||null)==(Number(g.pc(4,a))||null):!0;d=g.Uf("web_ajax_ignore_global_headers_if_set");for(var f in Bh)e=g.E(Bh[f]),!e||!c&&!Ch(a,f)||d&&void 0!==b[f]||(b[f]=e);if(c||Ch(a,"X-YouTube-Utc-Offset"))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());(c||Ch(a,"X-YouTube-Time-Zone"))&&
(f="undefined"!=typeof Intl?(new Intl.DateTimeFormat).resolvedOptions().timeZone:null)&&(b["X-YouTube-Time-Zone"]=f);if(c||Ch(a,"X-YouTube-Ad-Signals"))b["X-YouTube-Ad-Signals"]=g.ph(wh(void 0));return b};
bba=function(a){var b=window.location.search,c=g.qc(a),d=g.nc(g.pc(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=g.qh(b),f={};(0,g.B)(aba,function(k){e[k]&&(f[k]=e[k])});
return g.rh(a,f||{},!1)};
Ch=function(a,b){var c=g.E("CORS_HEADER_WHITELIST")||{},d=g.qc(a);return d?(c=c[d])?g.Ma(c,b):!1:!0};
cba=function(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=Dh(a,b);var d=Eh(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(k){if(!e){e=!0;f&&g.dg(f);var l=k.ok,m=function(q){q=q||{};var r=b.context||g.p;l?b.onSuccess&&b.onSuccess.call(r,q,k):b.onError&&b.onError.call(r,q,k);b.Xa&&b.Xa.call(r,q,k)};
"JSON"==(b.format||"JSON")&&(l||400<=k.status&&500>k.status)?k.json().then(m,function(){m(null)}):m(null)}});
b.gq&&0<b.timeout&&(f=g.bg(function(){e||(e=!0,g.dg(f),b.gq.call(b.context||g.p))},b.timeout))}else g.J(a,b)};
g.J=function(a,b){var c=b.format||"JSON";a=Dh(a,b);var d=Eh(a,b),e=!1,f,k=Fh(a,function(l){if(!e){e=!0;f&&g.dg(f);var m=g.Ah(l),q=null,r=400<=l.status&&500>l.status,y=500<=l.status&&600>l.status;if(m||r||y)q=dba(c,l,b.ob);if(m)a:if(l&&204==l.status)m=!0;else{switch(c){case "XML":m=0==parseInt(q&&q.return_code,10);break a;case "RAW":m=!0;break a}m=!!q}q=q||{};r=b.context||g.p;m?b.onSuccess&&b.onSuccess.call(r,l,q):b.onError&&b.onError.call(r,l,q);b.Xa&&b.Xa.call(r,l,q)}},b.method,d,b.headers,b.responseType,
b.withCredentials);
b.Nc&&0<b.timeout&&(f=g.bg(function(){e||(e=!0,k.abort(),g.dg(f),b.Nc.call(b.context||g.p,k))},b.timeout));
return k};
Dh=function(a,b){b.bR&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=g.E("XSRF_FIELD_NAME",void 0),d=b.Ta;d&&(d[c]&&delete d[c],a=g.sh(a,d));return a};
Eh=function(a,b){var c=g.E("XSRF_FIELD_NAME",void 0),d=g.E("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.ia,k=g.E("XSRF_FIELD_NAME",void 0),l;b.headers&&(l=b.headers["Content-Type"]);b.Ju||g.qc(a)&&!b.withCredentials&&g.qc(a)!=document.location.hostname||"POST"!=b.method||l&&"application/x-www-form-urlencoded"!=l||b.ia&&b.ia[k]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=g.qh(e),g.cb(e,f),e=b.Zq&&"JSON"==b.Zq?JSON.stringify(e):g.wc(e));f=e||f&&!g.Wa(f);!Gh&&f&&"POST"!=b.method&&(Gh=!0,g.Zf(Error("AJAX request with postData should use POST")));
return e};
dba=function(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?Hh(b):null)d={},(0,g.B)(b.getElementsByTagName("*"),function(e){d[e.tagName]=g.Ih(e)})}c&&Jh(d);
return d};
Jh=function(a){if(g.Ea(a))for(var b in a)"html_content"==b||g.ob(b,"_html")?a[b]=g.cc(a[b],null):Jh(a[b])};
Hh=function(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null};
g.Ih=function(a){var b="";(0,g.B)(a.childNodes,function(c){b+=c.nodeValue});
return b};
g.Kh=function(a,b){b.method="POST";b.ia||(b.ia={});return g.J(a,b)};
Fh=function(a,b,c,d,e,f,k){function l(){4==(m&&"readyState"in m?m.readyState:0)&&b&&$f(b)(m)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var m=Zaa();if(!m)return null;"onloadend"in m?m.addEventListener("loadend",l,!1):m.onreadystatechange=l;g.Uf("debug_forward_web_query_parameters")&&(a=bba(a));m.open(c,a,!0);f&&(m.responseType=f);k&&(m.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=$aa(a,e))for(var q in e)m.setRequestHeader(q,e[q]),"content-type"==q.toLowerCase()&&(c=!1);c&&m.setRequestHeader("Content-Type","application/x-www-form-urlencoded");m.send(d);
return m};
eba=function(){for(var a={},b=g.ka(Object.entries(g.qh(g.E("DEVICE","")))),c=b.next();!c.done;c=b.next()){var d=g.ka(c.value);c=d.next().value;d=d.next().value;"cbrand"===c?a.deviceMake=d:"cmodel"===c?a.deviceModel=d:"cbr"===c?a.browserName=d:"cbrver"===c?a.browserVersion=d:"cos"===c?a.osName=d:"cosver"===c?a.osVersion=d:"cplatform"===c&&(a.platform=d)}return a};
Lh=function(){return"INNERTUBE_API_KEY"in g.Pf&&"INNERTUBE_API_VERSION"in g.Pf};
Mh=function(){return{innertubeApiKey:g.E("INNERTUBE_API_KEY",void 0),innertubeApiVersion:g.E("INNERTUBE_API_VERSION",void 0),ey:g.E("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),fy:g.E("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:g.E("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),hy:g.E("INNERTUBE_CONTEXT_HL",void 0),gy:g.E("INNERTUBE_CONTEXT_GL",void 0),iy:g.E("INNERTUBE_HOST_OVERRIDE",void 0)||"",jy:!!g.E("INNERTUBE_USE_THIRD_PARTY_AUTH",!1)}};
Nh=function(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||g.E("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.VQ||g.E("AUTHORIZATION"))||(a?b="Bearer "+g.u("gapi.auth.getToken")().TQ:b=Rd([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=g.E("SESSION_INDEX",0),g.Uf("pageid_as_header_web")&&(d["X-Goog-PageId"]=g.E("DELEGATED_SESSION_ID")));return d};
Oh=function(a){a=Object.assign({},a);delete a.Authorization;var b=Rd();if(b){var c=new df;c.update(g.E("INNERTUBE_API_KEY",void 0));c.update(b);a.hash=Mc(c.digest(),3)}return a};
g.Qh=function(a,b,c,d){g.Ph.set(""+a,b,{ul:c,path:"/",domain:void 0===d?"youtube.com":d,secure:!1})};
g.Rh=function(a,b,c){g.Ph.remove(""+a,void 0===b?"/":b,void 0===c?"youtube.com":c)};
g.Sh=function(a){var b;(b=g.Nf(a))||(a=new If(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.C=(a=b)?new g.Bf(a):null;this.F=document.domain||window.location.hostname};
fba=function(a,b,c,d){if(d)return null;d=Th.get("nextId",!0)||1;var e=Th.get("requests",!0)||{};e[d]={method:a,request:b,authState:Oh(c),requestTime:Math.round((0,g.ug)())};Th.set("nextId",d+1,86400,!0);Th.set("requests",e,86400,!0);return d};
Uh=function(a){var b=Th.get("requests",!0)||{};delete b[a];Th.set("requests",b,86400,!0)};
Vh=function(a){var b=Th.get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round((0,g.ug)())-d.requestTime)){var e=d.authState,f=Oh(Nh(!1));g.Za(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round((0,g.ug)())),g.Bg(a,d.method,e,{}));delete b[c]}}Th.set("requests",b,86400,!0)}};
g.Wh=function(a){var b=this;this.C=null;a?this.C=a:Lh()&&(this.C=Mh());g.Yg(function(){Vh(b)},5E3)};
g.vg=function(a){a=a.C||Mh();a={client:{hl:a.hy,gl:a.gy,clientName:a.fy,clientVersion:a.innertubeContextClientVersion,configInfo:a.ey}};var b=window.devicePixelRatio;b&&1!=b&&(a.client.screenDensityFloat=String(b));b=g.E("EXPERIMENTS_TOKEN","");""!==b&&(a.client.experimentsToken=b);b=[];var c=g.E("EXPERIMENTS_FORCED_FLAGS",{});for(d in c)b.push({key:d,value:String(c[d])});var d=g.E("EXPERIMENT_FLAGS",{});for(var e in d)e.startsWith("force_")&&void 0===c[e]&&b.push({key:e,value:String(d[e])});0<b.length&&
(a.request={internalExperimentFlags:b});g.E("DELEGATED_SESSION_ID")&&!g.Uf("pageid_as_header_web")&&(a.user={onBehalfOfUser:g.E("DELEGATED_SESSION_ID")});g.Uf("enable_device_forwarding_from_xhr_client")&&(a.client=Object.assign(a.client,eba()));return{context:a}};
g.Bg=function(a,b,c,d){!g.E("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&g.ag(Error("Missing VISITOR_DATA when sending innertube request."));var e={headers:{"Content-Type":"application/json"},method:"POST",ia:c,Zq:"JSON",Nc:function(){d.Nc()},
gq:d.Nc,onSuccess:function(A,G){if(d.onSuccess)d.onSuccess(G)},
Yi:function(A){if(d.onSuccess)d.onSuccess(A)},
onError:function(A,G){if(d.onError)d.onError(G)},
fq:function(A){if(d.onError)d.onError(A)},
timeout:d.timeout,withCredentials:!0},f="",k=a.C.iy;k&&(f=k);k=a.C.jy||!1;var l=Nh(k,f,d);Object.assign(e.headers,l);e.headers.Authorization&&!f&&(e.headers["x-origin"]=window.location.origin);var m=g.sh(""+f+("/youtubei/"+a.C.innertubeApiVersion+"/"+b),{alt:"json",key:a.C.innertubeApiKey}),q;if(d.retry&&g.Uf("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=f&&(q=fba(b,c,l,k))){var r=e.onSuccess,y=e.Yi;e.onSuccess=function(A,G){Uh(q);r(A,G)};
c.Yi=function(A,G){Uh(q);y(A,G)}}try{g.Uf("use_fetch_for_op_xhr")?cba(m,e):g.Kh(m,e)}catch(A){if("InvalidAccessError"==A)q&&(Uh(q),q=0),g.ag(Error("An extension is blocking network request."));
else throw A;}q&&g.Yg(function(){Vh(a)},5E3)};
g.Xh=function(a,b,c){c=void 0===c?{}:c;var d=g.Wh;g.E("ytLoggingEventsDefaultDisabled",!1)&&g.Wh==g.Wh&&(d=null);g.lh(a,b,d,c)};
g.Yh=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=Error.call(this,a);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.args=[].concat(g.la(c))};
g.$h=function(a){g.Zh(a,"WARNING")};
g.Zh=function(a,b,c,d,e,f){f=void 0===f?{}:f;f.name=c||g.E("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||g.E("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);c=f||{};b=void 0===b?"ERROR":b;b=void 0===b?"ERROR":b;d=window&&window.yterr||!1;if(a&&d&&!(5<=ai)&&(g.Uf("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),d.push("File name: "+a.fileName),d.push("Stacktrace: "+a.stack),d=d.join("\n"),
window.console.log(d,a)),0!==a.C)){d=a.F;e=a.columnNumber;if(a.args&&a.args.length)for(var k=0,l=0;l<a.args.length;l++){f=a.args[l];var m="params."+l;k+=m.length;if(f)if(Array.isArray(f))for(var q=c,r=0;r<f.length&&!(f[r]&&(k+=bi(r,f[r],m,q),500<k));r++);else if("object"===typeof f)for(q in q=void 0,r=c,f){if(f[q]&&(k+=bi(q,f[q],m,r),500<k))break}else c[m]=String(JSON.stringify(f)).substring(0,500),k+=c[m].length;else c[m]=String(JSON.stringify(f)).substring(0,500),k+=c[m].length;if(500<=k)break}else if(a.hasOwnProperty("params"))if(f=
a.params,"object"===typeof a.params)for(l in m=0,f){if(f[l]&&(k="params."+l,q=String(JSON.stringify(f[l])).substr(0,500),c[k]=q,m+=k.length+q.length,500<m))break}else c.params=String(JSON.stringify(f)).substr(0,500);a=g.Wc(a);(d=d||a.stack)||(d="Not available");f={stackTrace:d};a.fileName&&(f.filename=a.fileName);l=a.lineNumber.toString();isNaN(l)||!e||isNaN(e)||(f.lineNumber=Number(l),f.columnNumber=Number(e),l=l+":"+e);window.yterr&&g.Da(window.yterr)&&(a.params=c,window.yterr(a));if(!(ci.has(a.message)||
0<=d.indexOf("/YouTubeCenter.js")||0<=d.indexOf("/mytube.js"))){if(g.Uf("kevlar_gel_error_routing")){m=b;e={level:"ERROR_LEVEL_UNKNOWN",message:a.message};"ERROR"===m?e.level="ERROR_LEVEL_ERROR":"WARNING"===m&&(e.level="ERROR_LEVEL_WARNNING");f={isObfuscated:!0,browserStackInfo:f};m={pageUrl:window.location.href,kvPairs:[]};k=g.ka(Object.keys(c));for(q=k.next();!q.done;q=k.next())q=q.value,m.kvPairs.push({key:"client."+q,value:String(c[q])});g.Xh("clientError",{errorMetadata:m,stackTrace:f,logMessage:e});
g.Eg()}b={Ta:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,250),line:l,level:b,"client.name":c.name},ia:{url:g.E("PAGE_NAME",window.location.href),file:a.fileName},method:"POST"};c.version&&(b["client.version"]=c.version);if(b.ia){d&&(b.ia.stack=d);d=g.ka(Object.keys(c));for(e=d.next();!e.done;e=d.next())e=e.value,b.ia["client."+e]=c[e];if(c=g.E("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(d=g.ka(Object.keys(c)),e=d.next();!e.done;e=d.next())e=e.value,b.ia[e]=c[e]}g.J(g.E("ECATCHER_REPORT_HOST",
"")+"/error_204",b);ci.add(a.message);ai++}}};
bi=function(a,b,c,d){c+="."+a;a=String(JSON.stringify(b)).substr(0,500);d[c]=a;return c.length+a.length};
g.di=function(){this.F=!1;this.C=null};
ei=function(a,b,c,d){if(d)try{a.C=new window.botguard.bg(b,c?function(){return c(b)}:g.xa)}catch(e){g.$h(e)}else{try{a.C=new window.botguard.bg(b)}catch(e){g.$h(e)}c&&c(b)}};
g.fi=function(a,b){b=void 0===b?{}:b;return a.C?a.C.invoke(void 0,void 0,b):null};
gba=function(){return parseInt(g.E("DCLKSTAT",0),10)};
hba=function(){return g.gi.Md()};
iba=function(a){a=void 0===a?{}:a;return g.fi(g.gi,a)};
hi=function(a){this.D=void 0===a?null:a;this.F=0;this.C=null};
g.ii=function(a){var b=new hi;a=void 0===a?null:a;b.F=2;b.C=void 0===a?null:a;return b};
g.ji=function(a){var b=new hi;a=void 0===a?null:a;b.F=1;b.C=void 0===a?null:a;return b};
ki=function(){g.C.call(this);this.C=[]};
li=function(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||g.$a(b);this.assets=a.assets||{};this.attrs=a.attrs||g.$a(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}};
g.mi=function(a){a instanceof li||(a=new li(a));return a};
oi=function(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=(0,g.cd)();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(ni)for(a=1,b=0;b<ni.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^ni.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&
63));return a.join("")};
g.qi=function(a){a&&g.lh("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:pi,clientScreenNonce:a},g.Wh)};
g.ri=function(a){this.C=a};
g.si=function(a){var b={};void 0!==a.C.trackingParams?b.trackingParams=a.C.trackingParams:(b.veType=a.C.veType,void 0!==a.C.veCounter&&(b.veCounter=a.C.veCounter),void 0!==a.C.elementIndex&&(b.elementIndex=a.C.elementIndex));void 0!==a.C.dataElement&&(b.dataElement=g.si(a.C.dataElement));void 0!==a.C.youtubeData&&(b.youtubeData=a.C.youtubeData);return b};
ti=function(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a};
ui=function(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a};
vi=function(a){return g.E(ui(void 0===a?0:a),void 0)};
g.wi=function(){var a=vi(0),b;a?b=new g.ri({veType:a,youtubeData:void 0}):b=null;return b};
xi=function(){var a=g.E("csn-to-ctt-auth-info");a||(a={},g.Qf("csn-to-ctt-auth-info",a));return a};
g.yi=function(a){a=void 0===a?0:a;var b=g.E(ti(a));if(!b&&!g.E("USE_CSN_FALLBACK",!0))return null;b||0!=a||(g.Uf("kevlar_client_side_screens")||g.Uf("c3_client_side_screens")?b="UNDEFINED_CSN":b=g.E("EVENT_ID"));return b?b:null};
jba=function(a,b,c){var d=xi();(c=g.yi(c))&&delete d[c];b&&(d[a]=b)};
g.zi=function(a){return xi()[a]};
g.Ai=function(a,b,c,d){c=void 0===c?0:c;if(a!==g.E(ti(c))||b!==g.E(ui(c)))if(jba(a,d,c),g.Qf(ti(c),a),g.Qf(ui(c),b),0==c||g.Uf("web_screen_associated_all_layers"))b=function(){setTimeout(function(){g.qi(a)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b()};
g.Bi=function(a,b){this.version=a;this.args=b};
g.Ci=function(a,b){this.topic=a;this.C=b};
g.Ei=function(a,b){var c=Di();c&&c.publish.call(c,a.toString(),a,b)};
g.Ii=function(a,b,c){var d=Di();if(!d)return 0;var e=d.subscribe(a.toString(),function(f,k){var l=g.u("ytPubsub2Pubsub2SkipSubKey");l&&l==e||(l=function(){if(Fi[e])try{if(k&&a instanceof g.Ci&&a!=f)try{var m=a.C,q=k;if(!q.args||!q.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!m.Ie){var r=new m;m.Ie=r.version}var y=m.Ie}catch(A){}if(!y||q.version!=y)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{k=Reflect.construct(m,
g.Qa(q.args))}catch(A){throw A.message="yt.pubsub2.Data.deserialize(): "+A.message,A;}}catch(A){throw A.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+a.toString()+": "+A.message,A;}b.call(c||window,k)}catch(A){g.Zf(A)}},Gi[a.toString()]?g.ch()?g.Zg(l):g.bg(l,0):l())});
Fi[e]=!0;Hi[a.toString()]||(Hi[a.toString()]=[]);Hi[a.toString()].push(e);return e};
mba=function(){var a=kba,b=g.Ii(lba,function(c){a.apply(void 0,arguments);g.Ji(b)},void 0);
return b};
g.Ji=function(a){var b=Di();b&&("number"===typeof a&&(a=[a]),(0,g.B)(a,function(c){b.unsubscribeByKey(c);delete Fi[c]}))};
Di=function(){return g.u("ytPubsub2Pubsub2Instance")};
Ki=function(a){g.Bi.call(this,1,arguments);this.csn=a};
g.Ni=function(a,b,c){Li.push({payloadName:a,payload:b,options:c});Mi||(Mi=mba())};
kba=function(a){if(Li){for(var b=g.ka(Li),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,g.lh(c.payloadName,c.payload,null,c.options));Li.length=0}Mi=0};
g.Ri=function(a,b,c){var d=g.Uf("use_default_events_client")?void 0:g.Wh;(0,g.B)(b,function(e){var f=c;f=void 0===f?!1:f;e={csn:a,ve:g.si(e),eventType:f?16:8};f={Nf:g.zi(a),Ee:a,Fu:f};"UNDEFINED_CSN"==a?g.Ni("visualElementHidden",e,f):d?g.lh("visualElementHidden",e,d,f):g.Xh("visualElementHidden",e,f)})};
Si=function(){var a=g.wi(),b=g.yi();b&&a&&g.Ri(b,[a],!0)};
g.Wi=function(a){if("FOREGROUND_HEARTBEAT_TRIGGER_ON_BACKGROUND"==a||"FOREGROUND_HEARTBEAT_TRIGGER_ON_FOREGROUND"==a){if(Ti==a)return;Ti=a}var b=9E4+2E3*Math.random();if("FOREGROUND_HEARTBEAT_TRIGGER_ON_INTERVAL"!=a||!(g.hh()>b)&&"visible"==g.Ig()){b=-1;g.Ui&&(b=Math.round((0,g.ug)()-g.Ui));var c=String;var d=g.u("_fact",window);d=null==d||-1==d?-1:Math.max((0,g.cd)()-d,0);a={firstActivityMs:c(d),clientDocumentNonce:pi,index:String(Vi),lastEventDeltaMs:String(b),trigger:a};g.lh("foregroundHeartbeat",
a,g.Wh);g.t("_fact",-1,window);Vi++;g.Ui=(0,g.ug)()}};
g.Xi=function(a,b,c,d,e){this.name=a;this.deps=b||[];this.page=c||"";this.L=d?$f(d):null;this.H=e?$f(e):null;this.G=[];this.C=this.F=0};
g.Yi=function(a){g.$g(a.F);a.F=g.Zg((0,g.v)(a.init,a))};
g.aj=function(a){a.name in Zi&&$i(a.name);Zi[a.name]={reqs:[],disable:(0,g.v)(a.disable,a)};(0,g.B)(a.deps,function(b){if(!(b in Zi))throw Error("Module "+b+" required by "+a.name);Zi[b].reqs.push(a.name)});
a.enable()};
$i=function(a){if(a in Zi){var b=Zi[a];(0,g.B)(b.reqs,function(c){$i(c)});
try{b.disable()}catch(c){}delete Zi[a]}};
cj=function(a){Of(g.bj,arguments)};
g.dj=function(a){return a in g.bj};
ej=function(a){Of(g.bj,arguments)};
g.fj=function(a,b,c,d,e){e=void 0===e?"":e;a&&(c&&(c=g.Qb,c=!(c&&0<=c.toLowerCase().indexOf("cobalt"))),c?a&&(a=g.Eb(g.Ib(a)),"about:invalid#zClosurez"===a?a="":(a=g.$b(g.bc(a)),a=g.gc(g.rf(a))),g.pb(a)||(a=g.qd("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',style:"display:none"}),g.xd(a).body.appendChild(a))):e?Fh(a,b,"POST",e,d):g.E("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d?Fh(a,b,"GET","",d):nba(a,b)||oba(a,b))};
nba=function(a,b){if(!Sf("web_use_beacon_api_for_ad_click_server_pings"))return!1;if(Sf("use_sonic_js_library_for_v4_support"))try{var c,d=g.nc(g.pc(5,a));if(!(c=!(d&&d.endsWith("/aclk")))){var e=new kaa({url:a});c=!(e.H?e.D&&e.C&&e.C[1]||e.G:e.F)}if(c)return!1}catch(f){return g.ag(Error("ClickUrl library throws error, url = "+a)),!1}else if(c=g.nc(g.pc(5,a)),!c||-1==c.indexOf("/aclk")||"1"!==g.Ac(a,"ae")||"1"!==g.Ac(a,"act"))return!1;return gj(a)?(b&&b(),!0):!1};
gj=function(a,b){try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,void 0===b?"":b))return!0}catch(c){}return!1};
oba=function(a,b){var c=new Image,d=""+pba++;hj[d]=c;c.onload=c.onerror=function(){b&&hj[d]&&b();delete hj[d]};
c.src=a};
g.ij=function(a,b){a=a||"";var c=a.match(qba);spf.style.load(a,c?c[1]:"",b)};
lj=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(!jj(a)||c.some(function(e){return!jj(e)}))throw Error("Only objects may be merged.");
c=g.ka(c);for(d=c.next();!d.done;d=c.next())kj(a,d.value);return a};
kj=function(a,b){for(var c in b)if(jj(b[c])){if(c in a&&!jj(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});kj(a[c],b[c])}else if(mj(b[c])){if(c in a&&!mj(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);nj(a[c],b[c])}else a[c]=b[c];return a};
nj=function(a,b){for(var c=g.ka(b),d=c.next();!d.done;d=c.next())d=d.value,jj(d)?a.push(kj({},d)):mj(d)?a.push(nj([],d)):a.push(d);return a};
jj=function(a){return"object"===typeof a&&!Array.isArray(a)};
mj=function(a){return"object"===typeof a&&Array.isArray(a)};
g.oj=function(a,b,c){var d=void 0===d?!0:d;var e=g.E("VALID_SESSION_TEMPDATA_DOMAINS",[]),f=g.qc(window.location.href);f&&e.push(f);f=g.qc(a);if(g.Ma(e,f)||!f&&g.nb(a,"/"))if(g.Uf("autoescape_tempdata_url")&&(e=document.createElement("a"),g.dc(e,a),a=e.href),a&&(a=g.rc(a),e=a.indexOf("#"),a=0>e?a:a.substr(0,e)))d&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:g.yi()},b)),c?(c=parseInt(c,10),isFinite(c)&&0<c&&(d="ST-"+g.lc(a).toString(36),b=b?g.wc(b):"",g.Qh(d,b,c||5))):(c=b,b="ST-"+g.lc(a).toString(36),
c=c?g.wc(c):"",g.Qh(b,c,5))};
g.pj=function(a){var b=void 0===b?{}:b;var c=void 0===c?"":c;var d=void 0===d?window:d;g.fc(d.location,g.xc(a,b)+c)};
g.qj=function(a,b){b&&g.oj(a,b);(window.ytspf||{}).enabled?spf.navigate(a):g.pj(a)};
g.rj=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=g.E("EVENT_ID");d&&(b.ei||(b.ei=d));b&&g.oj(a,b);if(c)return!1;g.qj(a);return!0};
vj=function(a,b,c,d){g.C.call(this);var e=this;this.L=this.Ya=a;this.ha=b;this.M=!1;this.api={};this.na=this.N=null;this.Y=new g.uf;g.Dd(this,this.Y);this.G={};this.la=this.qa=this.F=this.nb=this.C=null;this.T=!1;this.H=this.J=null;this.ib={};this.Od=["onReady"];this.kb=null;this.sb=NaN;this.W={};this.D=d;sj(this);this.Ih("WATCH_LATER_VIDEO_ADDED",this.hD.bind(this));this.Ih("WATCH_LATER_VIDEO_REMOVED",this.iD.bind(this));this.Ih("onAdAnnounce",this.Bt.bind(this));this.Hb=new ki(this);g.Dd(this,this.Hb);
this.aa=0;c?this.aa=g.bg(function(){e.loadNewVideoConfig(c)},0):d&&(tj(this),uj(this))};
tj=function(a){var b;a.D?b=a.D.rootElementId:b=a.C.attrs.id;a.F=b||a.F;"video-player"==a.F&&(a.F=a.ha,a.C.attrs.id=a.ha);a.L.id==a.F&&(a.F+="-player",a.C.attrs.id=a.F)};
wj=function(a){a.C&&!a.C.loaded&&(a.C.loaded=!0,"0"!=a.C.args.autoplay?a.api.loadVideoByPlayerVars(a.C.args):a.api.cueVideoByPlayerVars(a.C.args))};
zj=function(a){var b=!0,c=xj(a);c&&a.C&&(a=yj(a),b=g.F(c,"version")===a);return b&&!!g.u("yt.player.Application.create")};
uj=function(a){if(!a.qb()&&!a.T){var b=zj(a);if(b&&"html5"==(xj(a)?"html5":null))a.la="html5",a.M||Aj(a);else if(Bj(a),a.la="html5",b&&a.H)a.Ya.appendChild(a.H),Aj(a);else{a.C&&(a.C.loaded=!0);var c=!1;a.J=function(){c=!0;if(a.D)var d=a.D.serializedExperimentFlags;else a.C&&a.C.args&&(d=a.C.args.fflags);d="true"==oh(d||"").player_bootstrap_method?g.u("yt.player.Application.createAlternate")||g.u("yt.player.Application.create"):g.u("yt.player.Application.create");var e=a.C?a.C.clone():void 0;d(a.Ya,
e,a.D);Aj(a)};
a.T=!0;b?a.J():(g.og(yj(a),a.J),(b=a.D?a.D.cssUrl:a.C.assets.css)&&g.ij(b),Cj(a)&&!c&&g.t("yt.player.Application.create",null,void 0))}}};
xj=function(a){var b=g.z(a.F);!b&&a.L&&a.L.querySelector&&(b=a.L.querySelector("#"+a.F));return b};
Aj=function(a){if(!a.qb()){var b=xj(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);c?(a.T=!1,b.isNotServable&&a.C&&b.isNotServable(a.C.args.video_id)||rba(a)):a.sb=g.bg(function(){Aj(a)},50)}};
rba=function(a){sj(a);a.M=!0;var b=xj(a);b.addEventListener&&(a.N=Dj(a,b,"addEventListener"));b.removeEventListener&&(a.na=Dj(a,b,"removeEventListener"));var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=0;d<c.length;d++){var e=c[d];a.api[e]||(a.api[e]=Dj(a,b,e))}for(var f in a.G)a.N(f,a.G[f]);wj(a);a.qa&&a.qa(a.api);a.Y.oa("onReady",a.api)};
Dj=function(a,b,c){var d=b[c];return function(){try{return a.kb=null,d.apply(b,arguments)}catch(e){"sendAbandonmentPing"!=c&&(e.params=c,a.kb=e,g.ag(e))}}};
sj=function(a){a.M=!1;if(a.na)for(var b in a.G)a.na(b,a.G[b]);for(var c in a.W)g.dg(parseInt(c,10));a.W={};a.N=null;a.na=null;for(var d in a.api)a.api[d]=null;a.api.addEventListener=a.Ih.bind(a);a.api.removeEventListener=a.QF.bind(a);a.api.destroy=a.dispose.bind(a);a.api.getLastError=a.ev.bind(a);a.api.getPlayerType=a.qv.bind(a);a.api.getCurrentVideoConfig=a.Yu.bind(a);a.api.loadNewVideoConfig=a.loadNewVideoConfig.bind(a);a.api.isReady=a.cz.bind(a)};
Ej=function(a,b){var c=b;if("string"==typeof b){if(a.ib[b])return a.ib[b];c=function(){var d=g.u(b);d&&d.apply(g.p,arguments)};
a.ib[b]=c}return c?c:null};
sba=function(a,b){var c="ytPlayer"+b+a.ha;a.G[b]=c;g.p[c]=function(d){var e=g.bg(function(){a.qb()||(a.Y.oa(b,d),g.Xa(a.W,String(e)))},0);
g.Ya(a.W,String(e),!0)};
return c};
Bj=function(a){a.cancel();sj(a);a.la=null;a.C&&(a.C.loaded=!1);var b=xj(a);b&&(zj(a)||!Cj(a)?a.H=b:(b&&b.destroy&&b.destroy(),a.H=null));g.ud(a.Ya)};
Cj=function(a){return a.C&&a.C.args&&a.C.args.fflags?-1!=a.C.args.fflags.indexOf("player_destroy_old_version=true"):!1};
yj=function(a){return a.D?a.D.jsUrl:a.C.assets.js};
g.Hj=function(a,b){var c=void 0===c?!0:c;a="string"===typeof a?g.jd(a):a;var d=g.Fj+"_"+g.Ga(a),e=g.Gj[d];if(e&&c)return b&&b.args&&b.args.fflags&&b.args.fflags.includes("web_player_remove_playerproxy=true")?e.api.loadVideoByPlayerVars(b.args||null):e.loadNewVideoConfig(b),e.api;e=new vj(a,d,b,void 0);g.Gj[d]=e;g.H("player-added",e.api);g.Bd(e,g.w(tba,e));return e.api};
tba=function(a){delete g.Gj[a.getId()]};
g.Ij=function(a){if(!a)return null;var b=g.Fj+"_"+g.Ga(a),c=g.Gj[b];c||(c=new vj(a,b),g.Gj[b]=c);return c.api};
g.Jj=function(a){return g.Ij(document.getElementById(a))};
g.Lj=function(a,b){var c={};c.key=a;c.value=b;return Kj().then(function(d){return new Promise(function(e,f){try{var k=d.transaction("swpushnotificationsstore","readwrite").objectStore("swpushnotificationsstore").put(c);k.onsuccess=function(){e()};
k.onerror=function(){f()}}catch(l){f(l)}})})};
g.Mj=function(a){var b=new g.Yh("Error accessing DB");return Kj().then(function(c){return new Promise(function(d,e){try{var f=c.transaction("swpushnotificationsstore").objectStore("swpushnotificationsstore").get(a);f.onsuccess=function(){var k=f.result;d(k?k.value:null)};
f.onerror=function(){b.params={key:a,source:"onerror"};e(b)}}catch(k){b.params={key:a,
thrownError:String(k)},e(b)}})},function(){return null})};
Kj=function(){return Nj?Promise.resolve(Nj):new Promise(function(a,b){var c=self.indexedDB.open("swpushnotificationsdb");c.onerror=b;c.onsuccess=function(){var d=c.result;if(d.objectStoreNames.contains("swpushnotificationsstore"))Nj=d,a(Nj);else return self.indexedDB.deleteDatabase("swpushnotificationsdb"),Kj()};
c.onupgradeneeded=uba})};
uba=function(a){a=a.target.result;a.objectStoreNames.contains("swpushnotificationsstore")&&a.deleteObjectStore("swpushnotificationsstore");a.createObjectStore("swpushnotificationsstore",{keyPath:"key"})};
Oj=function(a,b){g.Bi.call(this,1,arguments)};
Pj=function(a,b){g.Bi.call(this,1,arguments)};
vba=function(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}};
Rj=function(a){var b=Qj(a);if(b.aft)return b.aft;a=g.E((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return NaN};
Uj=function(){var a;if(g.Uf("csi_use_performance_navigation_timing")){var b,c,d,e=null===(d=null===(c=null===(b=null===(a=null===Sj||void 0===Sj?void 0:Sj.getEntriesByType)||void 0===a?void 0:a.call(Sj,"navigation"))||void 0===b?void 0:b[0])||void 0===c?void 0:c.toJSON)||void 0===d?void 0:d.call(c);e?(e.requestStart=Tj(e.requestStart),e.responseEnd=Tj(e.responseEnd),e.redirectStart=Tj(e.redirectStart),e.redirectEnd=Tj(e.redirectEnd),e.domainLookupEnd=Tj(e.domainLookupEnd),e.connectStart=Tj(e.connectStart),
e.connectEnd=Tj(e.connectEnd),e.responseStart=Tj(e.responseStart),e.secureConnectionStart=Tj(e.secureConnectionStart),e.domainLookupStart=Tj(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=Sj.timing}else a=Sj.timing;return a};
Vj=function(){return g.Uf("csi_use_time_origin")&&Sj.timeOrigin?Math.floor(Sj.timeOrigin):Sj.timing.navigationStart};
Tj=function(a){return Math.round(Vj()+a)};
Wj=function(a){g.t("ytglobal.timingready_",a,void 0)};
Xj=function(a){return!!g.u("yt.timing."+(a||"")+"pingSent_")};
Yj=function(a,b){g.t("yt.timing."+(b||"")+"pingSent_",a,void 0)};
ak=function(a){return g.u("ytcsi."+(a||"")+"data_")||Zj(a)};
bk=function(a){a=ak(a);a.info||(a.info={});return a.info};
Qj=function(a){a=ak(a);a.tick||(a.tick={});return a.tick};
ck=function(a){var b=ak(a).nonce;b||(b=oi(),ak(a).nonce=b);return b};
Zj=function(a){var b={tick:{},info:{}};g.t("ytcsi."+(a||"")+"data_",b,void 0);return b};
ek=function(a){var b=Qj(a||""),c=Rj(a);c&&!dk&&(g.Ei(wba,new Oj(Math.round(c-b._start),a)),dk=!0)};
xba=function(){if(Sj.getEntriesByType){var a=Sj.getEntriesByType("paint");if(a=g.Ka(a,function(b){return"first-paint"===b.name}))return Tj(a.startTime)}a=Sj.timing;
return a.ez?Math.max(0,a.ez):0};
fk=function(){var a=g.u("ytcsi.debug");a||(a=[],g.t("ytcsi.debug",a,void 0),g.t("ytcsi.reference",{},void 0));return a};
hk=function(a){a=a||"";var b=gk();if(b[a])return b[a];var c=fk(),d={timerName:a,info:{},tick:{}};c.push(d);return b[a]=d};
gk=function(){var a=g.u("ytcsi.reference");if(a)return a;fk();return g.u("ytcsi.reference")};
ik=function(){this.C=0};
jk=function(){ik.instance||(ik.instance=new ik);return ik.instance};
lk=function(a,b){kk[b]=kk[b]||{count:0};var c=kk[b];c.count++;c.time=(0,g.ug)();a.C||(a.C=g.Yg(function(){var d=(0,g.ug)(),e;for(e in kk)kk[e]&&6E4<d-kk[e].time&&delete kk[e];a&&(a.C=0)},5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new g.Yh("CSI data exceeded logging limit with key",b),0===b.indexOf("info")?g.$h(c):g.Zh(c)),!0):!1};
mk=function(a){return!!g.E("FORCE_CSI_ON_GEL",!1)||g.Uf("csi_on_gel")||!!ak(a).useGel};
ok=function(a,b,c){var d=nk(c);d.gelTicks&&(d.gelTicks["tick_"+a]=!0);c||b||(0,g.ug)();return mk(c)?(hk(c||"").tick[a]=b||(0,g.ug)(),d=ck(c),"_start"===a?(a=jk(),lk(a,"baseline_"+d)||g.Xh("latencyActionBaselined",{clientActionNonce:d},{timestamp:b})):jk().tick(a,d,b),ek(c),!0):!1};
rk=function(a,b,c){c=nk(c);if(c.gelInfos)c.gelInfos["info_"+a]=!0;else{var d={};c.gelInfos=(d["info_"+a]=!0,d)}if(a in pk){if(a.match("_rid")){var e=a.split("_rid")[0];a="REQUEST_ID"}c=pk[a];g.Ma(yba,c)&&(b=!!b);a in qk&&"string"===typeof b&&(b=qk[a]+b.toUpperCase());a=b;b=c.split(".");for(var f=d={},k=0;k<b.length-1;k++){var l=b[k];f[l]={};f=f[l]}f[b[b.length-1]]="requestId"===c?[{id:a,endpoint:e}]:a;return lj({},d)}g.Ma(zba,a)||g.$h(new g.Yh("Unknown label logged with GEL CSI",a))};
nk=function(a){a=ak(a);if(!("gel"in a))a.gel={gelTicks:{},gelInfos:{}};else if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}return a.gel};
sk=function(a){a=nk(a);"gelInfos"in a||(a.gelInfos={});return a.gelInfos};
uk=function(a,b,c){null!==b&&(bk(c)[a]=b,mk(c)?(a=rk(a,b,c))&&tk(a,c):hk(c||"").info[a]=b)};
tk=function(a,b){if(mk(b)){var c=hk(b||"");lj(c.info,a);lj(sk(b),a);c=ck(b);jk().info(a,c)}};
vk=function(){Zj(void 0);Aba();Yj(!1,void 0);g.E("TIMING_ACTION")&&g.Qf("PREVIOUS_ACTION",g.E("TIMING_ACTION"));g.Qf("TIMING_ACTION","")};
Eba=function(){var a=g.E("TIMING_ACTION",void 0),b=g.E("TIMING_AFT_KEYS");hk("").info.actionType=a;b&&g.Qf("TIMING_AFT_KEYS",b);g.Qf("TIMING_ACTION",a);a=g.E("TIMING_INFO",{});for(var c in a)uk(c,a[c]);uk("is_nav",1);(c=g.yi())&&uk("csn",c);(c=g.E("PREVIOUS_ACTION",void 0))&&!mk()&&uk("pa",c);c=bk();a=g.E("CLIENT_PROTOCOL");b=g.E("CLIENT_TRANSPORT");a&&uk("p",a);b&&uk("t",b);uk("yt_vis",Bba());if("cold"==c.yt_lt){uk("yt_lt","cold");a=Uj();if(b=Vj())g.wk("srt",a.responseStart),1!=c.prerender&&xk("n",
b);c=xba();0<c&&g.wk("fpt",c);yk();Sj.getEntriesByType&&Cba();c=[];if(document.querySelector&&Sj&&Sj.getEntriesByName)for(var d in zk)a=zk[d],Dba(d,a)&&c.push(a);c.length&&uk("rc",c.join(","))}mk(void 0)&&(d={actionType:Ak[g.E("TIMING_ACTION",void 0)]||"LATENCY_ACTION_UNKNOWN",previousAction:Ak[g.E("PREVIOUS_ACTION",void 0)]||"LATENCY_ACTION_UNKNOWN"},c=ck(void 0),jk().info(d,c));d=bk();a=Qj();if("cold"===d.yt_lt&&(c=nk(),b=c.gelTicks?c.gelTicks:c.gelTicks={},c=c.gelInfos?c.gelInfos:c.gelInfos={},
mk())){for(var e in a)"tick_"+e in b||ok(e,a[e]);e=sk();a=ck();b={};for(var f in d)if(!("info_"+f in c)){var k=rk(f,d[f]);k&&(lj(e,k),lj(b,k))}jk().info(b,a)}Wj(!0);g.Bk(!1)};
g.wk=function(a,b,c){var d=Qj(c);if(g.Uf("use_first_tick")&&Ck(a,c))return d[a];if(!b&&"_"!=a[0]){var e=a;Sj.mark&&(g.nb(e,"mark_")||(e="mark_"+e),c&&(e+=" ("+c+")"),Sj.mark(e))}e=b||(0,g.ug)();d[a]=e;ok(a,b,c)||(g.Bk(!1,c),hk(c||"").tick[a]=b||(0,g.ug)());return d[a]};
xk=function(a,b){uk("yt_sts",a,void 0);g.wk("_start",b,void 0)};
Ck=function(a,b){var c=Qj(b);return a in c};
Dk=function(a,b){if(null!==b)if(bk(void 0)[a]=b,mk(void 0)){var c=rk(a,b,void 0);c&&tk(c,void 0)}else hk("").info[a]=b};
yk=function(){var a=Uj();a.isPerformanceNavigationTiming&&uk("pnt",1,void 0);g.wk("nreqs",a.requestStart,void 0);g.wk("nress",a.responseStart,void 0);g.wk("nrese",a.responseEnd,void 0);0<a.redirectEnd-a.redirectStart&&(g.wk("nrs",a.redirectStart,void 0),g.wk("nre",a.redirectEnd,void 0));0<a.domainLookupEnd-a.domainLookupStart&&(g.wk("ndnss",a.domainLookupStart,void 0),g.wk("ndnse",a.domainLookupEnd,void 0));0<a.connectEnd-a.connectStart&&(g.wk("ntcps",a.connectStart,void 0),g.wk("ntcpe",a.connectEnd,
void 0));a.secureConnectionStart>=Vj()&&0<a.connectEnd-a.secureConnectionStart&&(g.wk("nstcps",a.secureConnectionStart,void 0),g.wk("ntcpe",a.connectEnd,void 0))};
g.Bk=function(a,b){if(!Xj(b)){var c=g.E((b||"")+"TIMING_ACTION",void 0),d=Qj(b);if(g.u("ytglobal.timing"+(b||"")+"ready_")&&c&&d._start&&Rj(b))if(ek(b),a||b)Ek(b);else{c=!0;var e=g.E("TIMING_WAIT",[]);if(e.length)for(var f=0,k=e.length;f<k;++f)if(!(e[f]in d)){c=!1;break}c&&Ek(b)}}};
Bba=function(){switch(g.Ig()){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3}return-1};
Ek=function(a){if(!mk(a)){var b=Qj(a),c=bk(a),d=b._start,e=g.E("CSI_SERVICE_NAME","youtube"),f={v:2,s:e,action:g.E((a||"")+"TIMING_ACTION",void 0)},k=c.srt;void 0!==b.srt&&delete c.srt;if(c.h5jse){var l=window.location.protocol+g.u("ytplayer.config.assets.js");(l=Sj.getEntriesByName?Sj.getEntriesByName(l)[0]:void 0)?c.h5jse=Math.round(c.h5jse-l.responseEnd):delete c.h5jse}b.aft=Rj(a);var m=Qj(a);l=m.pbr;var q=m.vc;m=m.pbs;l&&q&&m&&l<q&&q<m&&bk(a).yt_pvis&&"youtube"==e&&(uk("yt_lt","hot_bg",a),e=b.vc,
l=b.pbs,delete b.aft,c.aft=Math.round(l-e));for(var r in c)"_"!=r.charAt(0)&&(f[r]=c[r]);b.ps=(0,g.ug)();r={};e=[];for(var y in b)"_"!=y.charAt(0)&&(l=Math.round(b[y]-d),r[y]=l,e.push(y+"."+l));f.rt=e.join(",");(b=g.u("ytdebug.logTiming"))&&b(f,r);c=!!c.ap;g.Uf("debug_csi_data")&&(b=g.u("yt.timing.csiData"),b||(b=[],g.t("yt.timing.csiData",b,void 0)),b.push({page:location.href,time:new Date,args:f}));b="";for(var A in f)f.hasOwnProperty(A)&&(b+="&"+A+"="+f[A]);f="/csi_204?"+b.substring(1);if(window.navigator&&
window.navigator.sendBeacon&&c){var G=void 0===G?"":G;gj(f,G)||g.fj(f,void 0,void 0,void 0,G)}else g.fj(f);Yj(!0,a);g.Ei(Fba,new Pj(r.aft+(k||0),a))}};
Fk=function(a){if(!mk(void 0)&&!Xj(void 0)){var b=g.E("CSI_SERVICE_NAME","youtube");g.E("TIMING_ACTION",void 0)&&b&&(g.wk("aa",void 0,void 0),uk("ap",1,void 0),uk("yt_fss",a,void 0),Ek(void 0))}};
Cba=function(){var a=window.location.protocol,b=Sj.getEntriesByType("resource");b=(0,g.Gk)(b,function(c){return 0==c.name.indexOf(a+"//fonts.gstatic.com/s/")});
(b=(0,g.Td)(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(g.wk("wffs",Tj(b.startTime)),g.wk("wffe",Tj(b.responseEnd)))};
Dba=function(a,b){var c=document.querySelector(a);if(!c)return!1;var d="",e=c.nodeName;"SCRIPT"==e?(d=c.src,d||(d=c.getAttribute("data-timing-href"))&&(d=window.location.protocol+d)):"LINK"==e&&(d=c.href);g.wa()&&c.setAttribute("nonce",g.wa());return d?(c=Sj.getEntriesByName(d))&&c[0]&&(c=c[0],d=Vj(),g.wk("rsf_"+b,d+Math.round(c.fetchStart)),g.wk("rse_"+b,d+Math.round(c.responseEnd)),void 0!==c.transferSize&&(d=bk(void 0),e=sk(void 0),"rc"in d||"rc"in e||uk("rc",""),0===c.transferSize))?!0:!1:!1};
Lba=function(){Ik++;var a=g.nd(),b=new g.Gd(0,0,a.width,a.height);Dk("vph",a.height);Dk("vpw",a.width);g.wk("vpc");a=document.querySelectorAll(".yt-lockup-thumbnail img[data-ytimg]");var c=a.length,d=[];Jk.start();for(var e=0;e<c;e++){var f=a[e];Kk(f,b)&&(f=Gba(f),f.then(Hba),d.push(f),Lk.push(f))}g.wk("vpcc");b=g.Qe(d).then(Iba);g.Se(b,Jba);b.then(Kba);Lk.push(b);return b};
Kba=function(){Jk.stop()};
Jba=function(){g.wk("vpr")};
Kk=function(a,b){for(var c=a,d=[];c!=document.body;){var e=g.Hg(c);if(e in Mk)return!0;if(e in Nk)return!1;var f=window.getComputedStyle(c);if("none"==f.display||"hidden"==f.visibility)return Nk[e]=!0,!1;f=c.getBoundingClientRect();if(!(b.left<=f.left+f.width&&f.left<=b.left+b.width&&b.top<=f.top+f.height&&f.top<=b.top+b.height))return Nk[e]=!0,!1;d.push(e);c=c.parentElement}for(c=0;c<d.length;c++)Mk[d[c]]=!0;return!0};
Iba=function(a){var b=g.nd();b=new g.Gd(0,0,b.width,b.height);for(var c=0,d=0,e=a.length;d<e;d++){var f=a[d].time;Kk(a[d].by,b)&&c<f&&(c=f)}return c};
Gba=function(a){var b=Ik;return new g.Ke(function(c,d){var e={by:a,time:0};a.loadTime?(e.time=parseInt(a.loadTime,10),c(e)):(a.slt=function(){Ik!=b?d():(e.time=parseInt(a.loadTime,10),c(e),a.slt=void 0)},Ok.push(a))})};
Hba=function(a){Jk.start();a=a.time;Pk<a&&(Pk=a,g.wk("lim",a))};
Mba=function(){g.wk("vptl",Pk);g.wk("vpl",Pk)};
Nba=function(){Lk.forEach(function(a){a.cancel()});
Pk=Lk.length=0;Mk={};Nk={};Ok.forEach(function(a){a.slt=void 0});
Ok.length=0};
g.Qk=function(a,b){g.fj("/gen_204?"+a,b)};
Oba=function(a){if(null==a)return[];var b=[];g.Uf("ima_prevent_mpu_queries_on_cached_playback")&&0>Rk.indexOf("ad3_module")&&Rk.push("ad3_module");Rk.forEach(function(c){c in a&&(delete a[c],b.push(c))});
a.cached_load="1";return b};
g.Sk=function(){return g.D(g.z("page-container"),"remote-connected")};
Pba=function(){Tk=g.cg(Uk,5E3);var a=g.Vk();a&&(a.addEventListener("onReady",Uk),a.addEventListener("onStateChange",Uk))};
Wk=function(a){for(var b in g.Gj){var c=g.Gj[b];c&&c.cancel()}if(a=a||null)g.Hj("player-api",a),a=g.mi(a),a.loaded=!0;Uk();g.t("ytplayer.config",a,void 0)};
g.Vk=function(){return g.Jj("player-api")};
Uk=function(){var a=g.Vk();if(a){var b=1==(a&&a.isReady()?a.getPlayerState():void 0),c="watch"==g.E("PAGE_NAME"),d=g.Sk();!b||c||d||a.pauseVideo()}};
Yk=function(){g.wk("ol");window.requestAnimationFrame&&!document.hidden?window.requestAnimationFrame(function(){setTimeout(function(){g.wk("cpt");g.H("on_cpt_tick",(new Date).getTime())},0)}):document.hidden?(g.wk("cpt"),g.H("on_cpt_tick",(new Date).getTime())):setTimeout(function(){g.wk("cpt");
g.H("on_cpt_tick",(new Date).getTime())},0);
Qba();g.E("CSI_VIEWPORT")&&(Xk=Lba(),Xk.then(function(a){g.wk("vpl",a);Xk=null},function(){}))};
Qba=function(){Zk("init");var a=g.E("PAGE_NAME",void 0);a&&Zk("init-"+a)};
Zk=function(a){g.ch()?$k.push(g.Zg(g.w(g.mg,a),0)):g.H(a)};
al=function(){g.ah($k);$k.length=0;Nba();Xk&&(Xk.cancel(),Xk=null);var a=g.E("PAGE_NAME",void 0);a&&g.mg("dispose-"+a);g.mg("dispose")};
Rba=function(){Yk()};
Sba=function(){g.E("TIMING_REPORT_ON_UNLOAD")&&g.Bk(!0);Fk("u");g.Wi("FOREGROUND_HEARTBEAT_TRIGGER_ON_BACKGROUND");Si();g.Eg();al();g.mg("pageunload")};
bl=function(){g.dh()};
cl=function(){window.yt_spf_loaded_history=!0;g.dh()};
hl=function(){dl=1;el=fl=0;g.E("TIMING_REPORT_ON_UNLOAD")&&g.Bk(!0);if(g.Uf("warm_load_nav_start_web")){var a=gk();a[""]&&delete a[""];var b={timerName:"",info:{},tick:{}};fk().push(b);a[""]=b;Fk("n");vk();Wj(!1);g.Qf("TIMING_AFT_KEYS",[]);uk("yt_lt","warm");g.Qf("TIMING_ACTION","");g.Qf("TIMING_WAIT",[]);delete g.E("TIMING_INFO",{}).yt_lt;xk("n")}else Fk("n"),vk(),xk("n");a="nr";Sj.mark&&(g.nb(a,"mark_")||(a="mark_"+a),Sj.mark(a));gl(Tba);Si();g.mg("navigate")};
kl=function(a){a=a.detail.part||a.detail.partial;g.wk("nc"+fl);++fl;if(a&&a.data&&a.data.deferDispose)"watch"==a.name&&g.wk("bc");else{var b=1==dl;dl=2;b?(gl(Uba),il()):gl(Vba);if(b=a&&a.data&&a.data.swfcfg)jl(a.timing,b.args),Ck("cfg")||g.wk("cfg"),Wk(b)}};
ll=function(){g.wk("np"+el);++el};
ml=function(a){a=a.detail.response;var b=1==dl;dl=3;b&&(gl(Wba),il());if(b=a.data&&a.data.swfcfg)jl(a.timing,b.args),Ck("cfg")||g.wk("cfg"),Wk(b)};
ql=function(a){g.wk("nd");a=a.detail.response;g.nl=a.cacheKey;a=a.timing;var b=window._spf_state;g.ol.navigationCount=b&&b["nav-counter"]||0;g.Uf("warm_load_nav_start_web")?g.wk("srt",a.responseStart):(xk("ne",a.responseStart),b=Uj().responseStart,Dk("srt",Math.max(0,b-Vj())));Dk("yt_lt",a.spfCached?"hot":"warm");g.wk("pfs",a.fetchStart);g.wk("pfrs",a.responseStart);"redirectStart"in a&&yk();gl(pl);document.getElementById("content").style.height="";Yk();dl=0};
rl=function(a){var b=a.detail.url,c=a.detail.err;c&&(a=a.detail.xhr,a&&!a.responseText||a&&a.responseText&&a.responseText.startsWith("<")||(c.params=b,g.ag(c)))};
sl=function(a){g.Qk(g.wc({spfreload:"1",url:a.detail.url,reason:a.detail.reason}))};
Yba=function(){Xba();window.yt_spf_loaded_history=!1};
Zba=function(){};
il=function(){var a=document.getElementById("content");-1<a.className.indexOf("spf-animate")&&(a.style.height=a.clientHeight+"px");al();a=g.E("PREVIOUS_ACTION");for(var b in g.Pf)delete g.Pf[b];g.Qf("PREVIOUS_ACTION",a);g.Qf("SERVED_VIA_SPF_HISTORY",!!window.yt_spf_loaded_history);g.t("ytplayer.config",null,void 0);(b=g.Vk())&&b.stopVideo&&(b.stopVideo(),b.getLastError()&&(b=document.getElementById("movie_player"))&&b.stopVideo&&b.stopVideo());Uk()};
gl=function(a){var b=document.getElementById("progress");b||(b=document.createElement("div"),b.id="progress",b.appendChild(document.createElement("dt")),b.appendChild(document.createElement("dd")),document.body.appendChild(b));g.$g(tl);tl=g.Zg(function(){var c=a[0],d=a[1],e=a[2];b.className="";var f=b.style;f.transitionDuration=f.webkitTransitionDuration=c+"ms";f.width=d+"%";g.dg(ul);ul=g.bg(function(){b.className=e},c)},0)};
Xba=function(){var a=pl[0]+50;g.dg(ul);ul=g.bg(function(){var b=document.getElementById("progress");b&&b.parentNode.removeChild(b)},a)};
jl=function(a,b){var c=a&&a.spfCached,d=a&&a.spfPrefetched,e=[];c&&!d&&null!=b&&(e=Oba(b));g.E("EXP_DEBUG_PREFETCH")&&(e.sort(),c={a:"updatePlayerVarsForCachedLoad",cached:c,prefetched:d,deleted:e.join("")},g.Qk(g.wc(c)))};
wl=function(){return"granted"!=Notification.permission?Promise.resolve():vl().then(function(a){return a?a.pushManager.getSubscription().then(function(b){if(b)return Promise.resolve();b={userVisibleOnly:!0,applicationServerKey:naa()};return a.pushManager.subscribe(b).then(function(){return Promise.resolve()},function(){return Promise.resolve()})}):Promise.resolve()})["catch"](function(){})};
yl=function(){xl({type:"notifications_register",data:g.E("ID_TOKEN")})};
vl=function(){var a=Wf("service_worker_scope");try{return navigator.serviceWorker.getRegistration(a)}catch(b){return Promise.reject(b)}};
$ba=function(){return vl().then(zl)["catch"](function(){return!1})};
zl=function(a){return!(!a||!a.pushManager)};
xl=function(a){return vl().then(function(b){if(!b||!b.active)return Promise.reject("serviceworker.postMessage");b.active.postMessage(a);return Promise.resolve()})};
aca=function(){if(!g.E("LOGGED_IN",void 0))return Promise.resolve(!1);var a=Wf("service_worker_push_force_notification_prompt_tag");return a?g.Mj("PromptTags").then(function(b){if(!b)return!0;var c=[];try{c=JSON.parse(b)}catch(d){return!1}return c&&-1==c.indexOf(a)}):Promise.resolve(!1)};
eca=function(){var a=void 0===a?!1:a;return(navigator.serviceWorker&&navigator.serviceWorker.getRegistration&&window.Notification?$ba():Promise.resolve(!1)).then(function(b){if(!b)return Promise.resolve();b=wl().then(function(){return xl({type:"notifications_check_registration",data:g.E("ID_TOKEN")})});
return"default"!=Notification.permission?b:b.then(function(){return bca(a)}).then(function(c){if(c)return cca(),dca().then(function(){})})["catch"](function(){})})};
bca=function(a){return g.E("SERVICE_WORKER_PROMPT_NOTIFICATIONS",void 0)||g.E("LOGGED_IN",void 0)&&(void 0===a?0:a)?aca().then(function(b){if(b)return!0;b=[fca(),gca()];g.E("LOGGED_IN",void 0)||b.push(hca());return Promise.all(b).then(function(c){return c.every(function(d){return d})})}):Promise.resolve(!1)};
hca=function(){var a=g.Vf("service_worker_push_logged_out_prompt_watches");return-1==a?Promise.resolve(!1):g.Mj("WatchCount").then(function(b){return b>=a})};
dca=function(){var a=arguments;g.Uf("service_worker_push_prompt_modal_enable")&&ica();return Notification.requestPermission().then(function(b){Al();var c=document.getElementById("ticker");c&&(c.className=c.classList.remove("show"));if("granted"==b)return wl().then(function(){g.Lj("NotificationsDisabled",!1);yl();return Promise.resolve(!0)});
"denied"==b&&yl();return Promise.resolve(!1)})["catch"](function(){Al();
return Promise.reject.apply(Promise,g.la(a))})};
cca=function(){g.Mj("PromptCount").then(function(a){return g.Lj("PromptCount",a+1)}).then(function(){return g.Lj("PromptTime",(0,g.cd)())}).then(function(){var a=Wf("service_worker_push_force_notification_prompt_tag");
if(a)return g.Mj("PromptTags").then(function(b){var c=[];if(b)try{c=JSON.parse(b)}catch(d){return!1}c||(c=[]);c.push(a);return g.Lj("PromptTags",JSON.stringify(c))})})};
fca=function(){return-1==g.Vf("service_worker_push_prompt_cap")?Promise.resolve(!0):g.Mj("PromptCount").then(function(a){a||(a=0);return Promise.resolve(a<g.Vf("service_worker_push_prompt_cap"))})};
gca=function(){var a=g.Vf("service_worker_push_prompt_delay_microseconds");return a?g.Mj("PromptTime").then(function(b){return Promise.resolve((0,g.cd)()-a>(b||0))}):Promise.resolve(!0)};
jca=function(){Bl||Al()};
Cl=function(a){a.style.zIndex=2147483648;a.style.pointerEvents="auto";a.style.backgroundColor="rgba(0, 0, 0, 0.6)";a.style.width="100%";a.style.height="100vh";a.style.position="absolute";a.style.top="0";a.style.left="0";a.style.border="none"};
ica=function(){var a=g.z("yt-push-prompt-modal-bg");Bl=g.Uf("service_worker_push_prompt_modal_ignore_click");a?Cl(a):(a=g.qd("div",{id:"yt-push-prompt-modal-bg"}),Cl(a),document.body.appendChild(a),g.Ug(document,"click",jca))};
Al=function(){var a=g.z("yt-push-prompt-modal-bg");a&&g.wd(a)};
kca=function(a){return zl(a)?eca():Promise.resolve()};
mca=function(){navigator.serviceWorker.getRegistrations().then(function(a){a.forEach(lca)})};
oca=function(){var a="/sw.js",b=g.E("SERVICE_WORKER_VFL",void 0);b&&(a+="?vfl="+b);try{var c=Dl(a)["catch"](function(){return new Promise(function(){})});
g.Uf("service_worker_push_enabled")&&c.then(nca).then(kca)}catch(d){if("SecurityError"!=d.name)throw d;}};
nca=function(a){var b=a.installing||a.waiting;return a.active||!b?Promise.resolve(a):new Promise(function(c){function d(e){if("activated"==e.target.state||"redundant"==e.target.state)b.removeEventListener("statechange",d),c(a)}
b.addEventListener("statechange",d)})};
lca=function(a){a&&Dl("/sw.js?0",a.scope)};
Dl=function(a,b){return navigator.serviceWorker.register(a,{scope:b||Wf("service_worker_scope")||"/"})};
El=function(){g.Xi.call(this,"www/base");this.D=0};
Fl=function(a){(a=a.detail.name)&&$i(a)};
g.aa=[];fa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};
ea=aaa(this);ha.prototype.toString=function(){return this.C};
var baa=function(){function a(c){if(this instanceof a)throw new TypeError("Symbol is not a constructor");return new ha("jscomp_symbol_"+(c||"")+"_"+b++,c)}
var b=0;return a}(),ma="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},Gl;
if("function"==typeof Object.setPrototypeOf)Gl=Object.setPrototypeOf;else{var Hl;a:{var pca={a:!0},Il={};try{Il.__proto__=pca;Hl=Il.a;break a}catch(a){}Hl=!1}Gl=Hl?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var na=Gl;
pa("Promise",function(a){function b(k){this.F=0;this.D=void 0;this.C=[];var l=this.H();try{k(l.resolve,l.reject)}catch(m){l.reject(m)}}
function c(){this.C=null}
function d(k){return k instanceof b?k:new b(function(l){l(k)})}
if(a)return a;c.prototype.F=function(k){if(null==this.C){this.C=[];var l=this;this.D(function(){l.H()})}this.C.push(k)};
var e=ea.setTimeout;c.prototype.D=function(k){e(k,0)};
c.prototype.H=function(){for(;this.C&&this.C.length;){var k=this.C;this.C=[];for(var l=0;l<k.length;++l){var m=k[l];k[l]=null;try{m()}catch(q){this.G(q)}}}this.C=null};
c.prototype.G=function(k){this.D(function(){throw k;})};
b.prototype.H=function(){function k(q){return function(r){m||(m=!0,q.call(l,r))}}
var l=this,m=!1;return{resolve:k(this.N),reject:k(this.G)}};
b.prototype.N=function(k){if(k===this)this.G(new TypeError("A Promise cannot resolve to itself"));else if(k instanceof b)this.T(k);else{a:switch(typeof k){case "object":var l=null!=k;break a;case "function":l=!0;break a;default:l=!1}l?this.Y(k):this.L(k)}};
b.prototype.Y=function(k){var l=void 0;try{l=k.then}catch(m){this.G(m);return}"function"==typeof l?this.la(l,k):this.L(k)};
b.prototype.G=function(k){this.M(2,k)};
b.prototype.L=function(k){this.M(1,k)};
b.prototype.M=function(k,l){if(0!=this.F)throw Error("Cannot settle("+k+", "+l+"): Promise already settled in state"+this.F);this.F=k;this.D=l;this.J()};
b.prototype.J=function(){if(null!=this.C){for(var k=0;k<this.C.length;++k)f.F(this.C[k]);this.C=null}};
var f=new c;b.prototype.T=function(k){var l=this.H();k.Ph(l.resolve,l.reject)};
b.prototype.la=function(k,l){var m=this.H();try{k.call(l,m.resolve,m.reject)}catch(q){m.reject(q)}};
b.prototype.then=function(k,l){function m(A,G){return"function"==typeof A?function(O){try{q(A(O))}catch(T){r(T)}}:G}
var q,r,y=new b(function(A,G){q=A;r=G});
this.Ph(m(k,q),m(l,r));return y};
b.prototype["catch"]=function(k){return this.then(void 0,k)};
b.prototype.Ph=function(k,l){function m(){switch(q.F){case 1:k(q.D);break;case 2:l(q.D);break;default:throw Error("Unexpected state: "+q.F);}}
var q=this;null==this.C?f.F(m):this.C.push(m)};
b.resolve=d;b.reject=function(k){return new b(function(l,m){m(k)})};
b.race=function(k){return new b(function(l,m){for(var q=g.ka(k),r=q.next();!r.done;r=q.next())d(r.value).Ph(l,m)})};
b.all=function(k){var l=g.ka(k),m=l.next();return m.done?d([]):new b(function(q,r){function y(O){return function(T){A[O]=T;G--;0==G&&q(A)}}
var A=[],G=0;do A.push(void 0),G++,d(m.value).Ph(y(A.length-1),r),m=l.next();while(!m.done)})};
return b});
pa("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=qa(this,b,"endsWith");b+="";void 0===c&&(c=d.length);for(var e=Math.max(0,Math.min(c|0,d.length)),f=b.length;0<f&&0<e;)if(d[--e]!=b[--f])return!1;return 0>=f}});
pa("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=qa(this,b,"startsWith");b+="";for(var e=d.length,f=b.length,k=Math.max(0,Math.min(c|0,d.length)),l=0;l<f&&k<e;)if(d[k++]!=b[l++])return!1;return l>=f}});
pa("String.prototype.repeat",function(a){return a?a:function(b){var c=qa(this,null,"repeat");if(0>b||1342177279<b)throw new RangeError("Invalid count value");b|=0;for(var d="";b;)if(b&1&&(d+=c),b>>>=1)c+=c;return d}});
pa("Array.prototype.keys",function(a){return a?a:function(){return sa(this,function(b){return b})}});
pa("Array.prototype.values",function(a){return a?a:function(){return sa(this,function(b,c){return c})}});
var qca="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ta(d,e)&&(a[e]=d[e])}return a};
pa("Object.assign",function(a){return a||qca});
pa("WeakMap",function(a){function b(m){this.pb=(l+=Math.random()+1).toString();if(m){m=g.ka(m);for(var q;!(q=m.next()).done;)q=q.value,this.set(q[0],q[1])}}
function c(){}
function d(m){var q=typeof m;return"object"===q&&null!==m||"function"===q}
function e(m){if(!ta(m,k)){var q=new c;fa(m,k,{value:q})}}
function f(m){var q=Object[m];q&&(Object[m]=function(r){if(r instanceof c)return r;e(r);return q(r)})}
if(function(){if(!a||!Object.seal)return!1;try{var m=Object.seal({}),q=Object.seal({}),r=new a([[m,2],[q,3]]);if(2!=r.get(m)||3!=r.get(q))return!1;r["delete"](m);r.set(q,4);return!r.has(m)&&4==r.get(q)}catch(y){return!1}}())return a;
var k="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var l=0;b.prototype.set=function(m,q){if(!d(m))throw Error("Invalid WeakMap key");e(m);if(!ta(m,k))throw Error("WeakMap key fail: "+m);m[k][this.pb]=q;return this};
b.prototype.get=function(m){return d(m)&&ta(m,k)?m[k][this.pb]:void 0};
b.prototype.has=function(m){return d(m)&&ta(m,k)&&ta(m[k],this.pb)};
b.prototype["delete"]=function(m){return d(m)&&ta(m,k)&&ta(m[k],this.pb)?delete m[k][this.pb]:!1};
return b});
pa("Map",function(a){function b(){var l={};return l.previous=l.next=l.head=l}
function c(l,m){var q=l.F;return ia(function(){if(q){for(;q.head!=l.F;)q=q.previous;for(;q.next!=q.head;)return q=q.next,{done:!1,value:m(q)};q=null}return{done:!0,value:void 0}})}
function d(l,m){var q=m&&typeof m;"object"==q||"function"==q?f.has(m)?q=f.get(m):(q=""+ ++k,f.set(m,q)):q="p_"+m;var r=l.C[q];if(r&&ta(l.C,q))for(var y=0;y<r.length;y++){var A=r[y];if(m!==m&&A.key!==A.key||m===A.key)return{id:q,list:r,index:y,kc:A}}return{id:q,list:r,index:-1,kc:void 0}}
function e(l){this.C={};this.F=b();this.size=0;if(l){l=g.ka(l);for(var m;!(m=l.next()).done;)m=m.value,this.set(m[0],m[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var l=Object.seal({x:4}),m=new a(g.ka([[l,"s"]]));if("s"!=m.get(l)||1!=m.size||m.get({x:4})||m.set({x:4},"t")!=m||2!=m.size)return!1;var q=m.entries(),r=q.next();if(r.done||r.value[0]!=l||"s"!=r.value[1])return!1;r=q.next();return r.done||4!=r.value[0].x||"t"!=r.value[1]||!q.next().done?!1:!0}catch(y){return!1}}())return a;
g.ja();var f=new WeakMap;e.prototype.set=function(l,m){l=0===l?0:l;var q=d(this,l);q.list||(q.list=this.C[q.id]=[]);q.kc?q.kc.value=m:(q.kc={next:this.F,previous:this.F.previous,head:this.F,key:l,value:m},q.list.push(q.kc),this.F.previous.next=q.kc,this.F.previous=q.kc,this.size++);return this};
e.prototype["delete"]=function(l){l=d(this,l);return l.kc&&l.list?(l.list.splice(l.index,1),l.list.length||delete this.C[l.id],l.kc.previous.next=l.kc.next,l.kc.next.previous=l.kc.previous,l.kc.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.C={};this.F=this.F.previous=b();this.size=0};
e.prototype.has=function(l){return!!d(this,l).kc};
e.prototype.get=function(l){return(l=d(this,l).kc)&&l.value};
e.prototype.entries=function(){return c(this,function(l){return[l.key,l.value]})};
e.prototype.keys=function(){return c(this,function(l){return l.key})};
e.prototype.values=function(){return c(this,function(l){return l.value})};
e.prototype.forEach=function(l,m){for(var q=this.entries(),r;!(r=q.next()).done;)r=r.value,l.call(m,r[1],r[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var k=0;return e});
pa("Set",function(a){function b(c){this.C=new Map;if(c){c=g.ka(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.C.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(g.ka([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(k){return!1}}())return a;
g.ja();b.prototype.add=function(c){c=0===c?0:c;this.C.set(c,c);this.size=this.C.size;return this};
b.prototype["delete"]=function(c){c=this.C["delete"](c);this.size=this.C.size;return c};
b.prototype.clear=function(){this.C.clear();this.size=0};
b.prototype.has=function(c){return this.C.has(c)};
b.prototype.entries=function(){return this.C.entries()};
b.prototype.values=function(){return this.C.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.C.forEach(function(f){return c.call(d,f,f,e)})};
return b});
pa("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ta(b,d)&&c.push([d,b[d]]);return c}});
pa("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
pa("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length,f=c||0;for(0>f&&(f=Math.max(f+e,0));f<e;f++){var k=d[f];if(k===b||Object.is(k,b))return!0}return!1}});
pa("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==qa(this,b,"includes").indexOf(b,c||0)}});
var rca=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=ma(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}();
pa("Reflect.construct",function(){return rca});
pa("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(l){return l};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var k=0;!(f=b.next()).done;)e.push(c.call(d,f.value,k++))}else for(f=b.length,k=0;k<f;k++)e.push(c.call(d,b[k],k));return e}});
pa("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
pa("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
pa("Promise.prototype.finally",function(a){return a?a:function(b){return this.then(function(c){return Promise.resolve(b()).then(function(){return c})},function(c){return Promise.resolve(b()).then(function(){throw c;
})})}});
pa("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)ta(b,d)&&c.push(b[d]);return c}});
g.Jl=g.Jl||{};g.p=this||self;caa=/^[\w+/_-]+[=]{0,2}$/;va=null;Fa="closure_uid_"+(1E9*Math.random()>>>0);daa=0;g.cd=Date.now||function(){return+new Date};g.x(g.Ia,Error);g.Ia.prototype.name="CustomError";g.La=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};
g.sca=Array.prototype.lastIndexOf?function(a,b){return Array.prototype.lastIndexOf.call(a,b,a.length-1)}:function(a,b){var c=a.length-1;
0>c&&(c=Math.max(0,a.length+c));if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.lastIndexOf(b,c);for(;0<=c;c--)if(c in a&&a[c]===b)return c;return-1};
g.B=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};
g.Gk=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,k="string"===typeof a?a.split(""):a,l=0;l<d;l++)if(l in k){var m=k[l];
b.call(c,m,l,a)&&(e[f++]=m)}return e};
g.Kl=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f="string"===typeof a?a.split(""):a,k=0;k<d;k++)k in f&&(e[k]=b.call(c,f[k],k,a));
return e};
g.Td=Array.prototype.reduce?function(a,b,c,d){d&&(b=(0,g.v)(b,d));return Array.prototype.reduce.call(a,b,c)}:function(a,b,c,d){var e=c;
(0,g.B)(a,function(f,k){e=b.call(d,e,f,k,a)});
return e};
g.Ll=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;
return!1};
g.Ml=Array.prototype.every?function(a,b,c){return Array.prototype.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;
return!0};g.tca=RegExp("[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]");g.uca=RegExp("^[^\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc]*[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]");g.Nl=RegExp("^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc]");var bb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");g.fb.prototype.Ld=!0;g.fb.prototype.Tc=function(){return this.C};
var eb={},db={},Aaa=g.hb("");var jb;g.kb.prototype.Ld=!0;g.kb.prototype.Tc=function(){return this.F.toString()};
g.kb.prototype.Qk=!0;g.kb.prototype.C=function(){return 1};
jb={};g.ib={};var qb,rb,sb,tb,ub,vb,haa;g.yb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
qb=/&/g;rb=/</g;sb=/>/g;tb=/"/g;ub=/'/g;vb=/\x00/g;haa=/[\x00&<>"']/;g.Db.prototype.Ld=!0;g.Db.prototype.Tc=function(){return this.F.toString()};
g.Db.prototype.Qk=!0;g.Db.prototype.C=function(){return 1};
var jaa=/^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font\/\w+|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|text\/csv|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i,iaa=/^data:(.*);base64,[a-z0-9+\/]+=*$/i,Hb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,Cb={},Bb={};g.Lb.prototype.Ld=!0;g.Kb={};g.Lb.prototype.Tc=function(){return this.C};
g.Ol=g.Mb("");g.Pl=RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))","g");g.Ql=RegExp("\\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?)\\([-+*/0-9a-z.%\\[\\], ]+\\)","g");g.Ob.prototype.Ld=!0;g.Nb={};g.Ob.prototype.Tc=function(){return this.C};
g.vca=g.Pb("");a:{var Rl=g.p.navigator;if(Rl){var Sl=Rl.userAgent;if(Sl){g.Qb=Sl;break a}}g.Qb=""};g.Yb.prototype.Qk=!0;g.Yb.prototype.C=function(){return this.D};
g.Yb.prototype.Ld=!0;g.Yb.prototype.Tc=function(){return this.F.toString()};
var Xb={};g.cc("<!DOCTYPE html>",0);g.xe=g.cc("",0);g.Tl=g.cc("<br>",0);g.wca=g.Sa(function(){var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);b=a.firstChild.firstChild;a.innerHTML=g.Zb(g.xe);return!b.parentElement});g.jc=String.prototype.repeat?function(a,b){return a.repeat(b)}:function(a,b){return Array(b+1).join(a)};g.oc=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;g.zc=/#|$/;g.Dc[" "]=g.xa;var am,laa,em;g.Ul=g.Rb("Opera");g.Gf=g.Sb();g.Vl=g.Rb("Edge");g.Wl=g.Vl||g.Gf;g.Xl=g.Rb("Gecko")&&!(g.xb(g.Qb.toLowerCase(),"webkit")&&!g.Rb("Edge"))&&!(g.Rb("Trident")||g.Rb("MSIE"))&&!g.Rb("Edge");g.Yl=g.xb(g.Qb.toLowerCase(),"webkit")&&!g.Rb("Edge");g.Zl=g.Rb("Macintosh");g.$l=g.Rb("Windows");g.xca=g.Rb("Linux")||g.Rb("CrOS");g.yca=g.Rb("Android");g.zca=Bc();g.Aca=g.Rb("iPad");g.Bca=g.Rb("iPod");g.Cca=g.Cc();
a:{var bm="",cm=function(){var a=g.Qb;if(g.Xl)return/rv:([^\);]+)(\)|;)/.exec(a);if(g.Vl)return/Edge\/([\d\.]+)/.exec(a);if(g.Gf)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(g.Yl)return/WebKit\/(\S+)/.exec(a);if(g.Ul)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
cm&&(bm=cm?cm[1]:"");if(g.Gf){var dm=Fc();if(null!=dm&&dm>parseFloat(bm)){am=String(dm);break a}}am=bm}g.Gc=am;laa={};if(g.p.document&&g.Gf){var fm=Fc();em=fm?fm:parseInt(g.Gc,10)||void 0}else em=void 0;g.Ic=em;g.gm=Tb();g.hm=Bc()||g.Rb("iPod");g.im=g.Rb("iPad");g.Dca=g.Wb();g.jm=Ub();g.km=g.Vb()&&!g.Cc();var Lc={},Oc=null;g.Pc.prototype.next=function(){return this.C<this.F.length?{done:!1,value:this.F[this.C++]}:{done:!0,value:void 0}};
"undefined"!=typeof Symbol&&(g.Pc.prototype[Symbol.iterator]=function(){return this});g.Uc="function"==typeof Uint8Array;g.Qc.prototype.Yc=function(){Rc(this);return this.ec};
g.Qc.prototype.F=g.Uc?function(){var a=Uint8Array.prototype.toJSON;Uint8Array.prototype.toJSON=function(){return Mc(this)};
try{return JSON.stringify(this.ec&&this.Yc(),Sc)}finally{Uint8Array.prototype.toJSON=a}}:function(){return JSON.stringify(this.ec&&this.Yc(),Sc)};
g.Qc.prototype.toString=function(){Rc(this);return this.ec.toString()};
g.Qc.prototype.clone=function(){return new this.constructor(Tc(this.Yc()))};g.lm=document;g.Kd=window;var Xc={};g.h=g.Yc.prototype;g.h.isEnabled=function(){return navigator.cookieEnabled};
g.h.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.kR;d=c.secure||!1;var f=c.domain||void 0;var k=c.path||void 0;var l=c.ul}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===l&&(l=-1);c=f?";domain="+f:"";k=k?";path="+k:"";d=d?";secure":"";l=0>l?"":0==l?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date((0,g.cd)()+1E3*l)).toUTCString();this.C.cookie=a+"="+b+c+k+l+d+(null!=e?";samesite="+
e:"")};
g.h.get=function(a,b){for(var c=a+"=",d=(this.C.cookie||"").split(";"),e=0,f;e<d.length;e++){f=(0,g.yb)(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
g.h.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{ul:0,path:b,domain:c});return d};
g.h.xc=function(){return g.Zc(this).keys};
g.h.Db=g.ba(1);g.h.isEmpty=function(){return!this.C.cookie};
g.h.Gb=function(){return this.C.cookie?(this.C.cookie||"").split(";").length:0};
g.h.sd=g.ba(3);g.h.clear=function(){for(var a=g.Zc(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
g.Ph=new g.Yc("undefined"==typeof document?null:document);g.mm={Ha:["BC","AD"],La:["Before Christ","Anno Domini"],Ma:"JFMAMJJASOND".split(""),Na:"JFMAMJJASOND".split(""),wa:"January February March April May June July August September October November December".split(" "),sa:"January February March April May June July August September October November December".split(" "),xa:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),Ca:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),Ea:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
Ka:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),Ba:"Sun Mon Tue Wed Thu Fri Sat".split(" "),Da:"Sun Mon Tue Wed Thu Fri Sat".split(" "),Pa:"SMTWTFS".split(""),Oa:"SMTWTFS".split(""),Ja:["Q1","Q2","Q3","Q4"],Ia:["1st quarter","2nd quarter","3rd quarter","4th quarter"],Aa:["AM","PM"],ra:["EEEE, MMMM d, y","MMMM d, y","MMM d, y","M/d/yy"],za:["h:mm:ss a zzzz","h:mm:ss a z","h:mm:ss a","h:mm a"],Ga:["{1} 'at' {0}","{1} 'at' {0}","{1}, {0}","{1}, {0}"],ua:6,Fa:[5,6],va:5};
g.nm=g.mm;g.nm=g.mm;g.h=g.dd.prototype;g.h.we=g.nm.ua;g.h.Lg=g.nm.va;g.h.clone=function(){var a=new g.dd(this.date);a.we=this.we;a.Lg=this.Lg;return a};
g.h.getFullYear=function(){return this.date.getFullYear()};
g.h.getYear=function(){return this.getFullYear()};
g.h.getMonth=function(){return this.date.getMonth()};
g.h.getDate=function(){return this.date.getDate()};
g.h.getTime=function(){return this.date.getTime()};
g.h.getDay=function(){return this.date.getDay()};
g.h.getUTCFullYear=function(){return this.date.getUTCFullYear()};
g.h.getUTCMonth=function(){return this.date.getUTCMonth()};
g.h.getUTCDate=function(){return this.date.getUTCDate()};
g.h.getUTCDay=function(){return this.date.getDay()};
g.h.getUTCHours=function(){return this.date.getUTCHours()};
g.h.getUTCMinutes=function(){return this.date.getUTCMinutes()};
g.h.getTimezoneOffset=function(){return this.date.getTimezoneOffset()};
g.h.set=function(a){this.date=new Date(a.getFullYear(),a.getMonth(),a.getDate())};
g.h.setFullYear=function(a){this.date.setFullYear(a)};
g.h.setYear=function(a){this.setFullYear(a)};
g.h.setMonth=function(a){this.date.setMonth(a)};
g.h.setDate=function(a){this.date.setDate(a)};
g.h.setTime=function(a){this.date.setTime(a)};
g.h.setUTCFullYear=function(a){this.date.setUTCFullYear(a)};
g.h.setUTCMonth=function(a){this.date.setUTCMonth(a)};
g.h.setUTCDate=function(a){this.date.setUTCDate(a)};
g.h.add=function(a){if(a.C||a.months){var b=this.getMonth()+a.months+12*a.C,c=this.getYear()+Math.floor(b/12);b%=12;0>b&&(b+=12);var d=Math.min(g.$c(c,b),this.getDate());this.setDate(1);this.setFullYear(c);this.setMonth(b);this.setDate(d)}a.days&&(b=new Date(this.getYear(),this.getMonth(),this.getDate(),12),a=new Date(b.getTime()+864E5*a.days),this.setDate(1),this.setFullYear(a.getFullYear()),this.setMonth(a.getMonth()),this.setDate(a.getDate()),bd(this,a.getDate()))};
g.h.be=function(a){return[this.getFullYear(),g.kc(this.getMonth()+1,2),g.kc(this.getDate(),2)].join(a?"-":"")+""};
g.h.equals=function(a){return!(!a||this.getYear()!=a.getYear()||this.getMonth()!=a.getMonth()||this.getDate()!=a.getDate())};
g.h.toString=function(){return this.be()};
g.h.valueOf=function(){return this.date.valueOf()};var oaa;oaa=!g.Gf||g.Jc(9);g.Eca=!g.Xl&&!g.Gf||g.Gf&&g.Jc(9)||g.Xl&&g.Hc("1.9.1");g.om=g.Gf&&!g.Hc("9");g.Fca=g.Gf||g.Ul||g.Yl;g.h=g.ed.prototype;g.h.clone=function(){return new g.ed(this.x,this.y)};
g.h.equals=function(a){return a instanceof g.ed&&g.fd(this,a)};
g.h.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
g.h.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
g.h.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};g.h=g.hd.prototype;g.h.clone=function(){return new g.hd(this.width,this.height)};
g.h.aspectRatio=function(){return this.width/this.height};
g.h.isEmpty=function(){return!(this.width*this.height)};
g.h.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.h.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.h.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};var kd={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};var Gca={JJ:"allow-forms",KJ:"allow-modals",LJ:"allow-orientation-lock",MJ:"allow-pointer-lock",NJ:"allow-popups",OJ:"allow-popups-to-escape-sandbox",PJ:"allow-presentation",QJ:"allow-same-origin",RJ:"allow-scripts",SJ:"allow-top-navigation",TJ:"allow-top-navigation-by-user-activation"},qaa=g.Sa(function(){return g.Ad(Gca)});g.C.prototype.Qc=!1;g.C.prototype.qb=function(){return this.Qc};
g.C.prototype.dispose=function(){this.Qc||(this.Qc=!0,this.X())};
g.C.prototype.X=function(){if(this.vf)for(;this.vf.length;)this.vf.shift()()};/*
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
g.ya(g.Ed);g.h=g.Gd.prototype;g.h.clone=function(){return new g.Gd(this.left,this.top,this.width,this.height)};
g.h.contains=function(a){return a instanceof g.ed?a.x>=this.left&&a.x<=this.left+this.width&&a.y>=this.top&&a.y<=this.top+this.height:this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height};
g.h.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.h.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.h.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};g.pm=g.Xl?"MozUserSelect":g.Yl||g.Vl?"WebkitUserSelect":null;g.qm=!!window.google_async_iframe_id;g.rm=g.qm&&window.parent||window;g.mb(g.hb("//fonts.googleapis.com/css"));g.xh=(new Date).getTime();Sd.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.C[a]!=b&&(this.C[a]=b,this.F=-1)};
Sd.prototype.get=function(a){return!!this.C[a]};g.Wd.prototype.stopPropagation=function(){this.F=!0};
g.Wd.prototype.preventDefault=function(){this.defaultPrevented=!0};var le,Ica,yaa;g.Hca=!g.Gf||g.Jc(9);le=!g.Gf||g.Jc(9);Ica=g.Gf&&!g.Hc("9");yaa=function(){if(!g.p.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{g.p.addEventListener("test",g.xa,b),g.p.removeEventListener("test",g.xa,b)}catch(c){}return a}();g.sm=g.Yl?"webkitTransitionEnd":g.Ul?"otransitionend":"transitionend";g.x(g.Xd,g.Wd);var Jca={2:"touch",3:"pen",4:"mouse"};
g.Xd.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;var e=a.relatedTarget;e?g.Xl&&(g.Ec(e,"nodeName")||(e=null)):"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=void 0!==
a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.G=g.Zl?a.metaKey:a.ctrlKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:Jca[a.pointerType]||"";this.state=
a.state;this.yc=a;a.defaultPrevented&&this.preventDefault()};
g.Xd.prototype.stopPropagation=function(){g.Xd.V.stopPropagation.call(this);this.yc.stopPropagation?this.yc.stopPropagation():this.yc.cancelBubble=!0};
g.Xd.prototype.preventDefault=function(){g.Xd.V.preventDefault.call(this);var a=this.yc;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Ica)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var Yd="closure_listenable_"+(1E6*Math.random()|0),vaa=0;g.h=g.ae.prototype;g.h.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.C++);var k=ce(a,b,d,e);-1<k?(b=a[k],c||(b.Oh=!1)):(b=new waa(b,this.src,f,!!d,e),b.Oh=c,a.push(b));return b};
g.h.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=ce(e,b,c,d);return-1<b?($d(e[b]),g.Oa(e,b),0==e.length&&(delete this.listeners[a],this.C--),!0):!1};
g.h.removeAll=function(a){a=a&&a.toString();var b=0,c;for(c in this.listeners)if(!a||c==a){for(var d=this.listeners[c],e=0;e<d.length;e++)++b,$d(d[e]);delete this.listeners[c];this.C--}return b};
g.h.Uf=g.ba(5);g.h.Ve=function(a,b,c,d){a=this.listeners[a.toString()];var e=-1;a&&(e=ce(a,b,c,d));return-1<e?a[e]:null};
g.h.hasListener=function(a,b){var c=void 0!==a,d=c?a.toString():"",e=void 0!==b;return g.Ua(this.listeners,function(f){for(var k=0;k<f.length;++k)if(!(c&&f[k].type!=d||e&&f[k].capture!=b))return!0;return!1})};var ie="closure_lm_"+(1E6*Math.random()|0),oe={},ke=0,re="__closure_events_fn_"+(1E9*Math.random()>>>0);g.x(g.se,g.C);g.se.prototype[Yd]=!0;g.h=g.se.prototype;g.h.mi=function(){return this.Nl};
g.h.qh=g.ba(6);g.h.addEventListener=function(a,b,c,d){g.ee(this,a,b,c,d)};
g.h.removeEventListener=function(a,b,c,d){g.me(this,a,b,c,d)};
g.h.dispatchEvent=function(a){var b=this.mi();if(b){var c=[];for(var d=1;b;b=b.mi())c.push(b),++d}b=this.Ct;d=a.type||a;if("string"===typeof a)a=new g.Wd(a,b);else if(a instanceof g.Wd)a.target=a.target||b;else{var e=a;a=new g.Wd(d,b);g.cb(a,e)}e=!0;if(c)for(var f=c.length-1;!a.F&&0<=f;f--){var k=a.currentTarget=c[f];e=te(k,d,!0,a)&&e}a.F||(k=a.currentTarget=b,e=te(k,d,!0,a)&&e,a.F||(e=te(k,d,!1,a)&&e));if(c)for(f=0;!a.F&&f<c.length;f++)k=a.currentTarget=c[f],e=te(k,d,!1,a)&&e;return e};
g.h.X=function(){g.se.V.X.call(this);this.removeAllListeners();this.Nl=null};
g.h.O=function(a,b,c,d){return this.ud.add(String(a),b,!1,c,d)};
g.h.Ae=function(a,b,c,d){return this.ud.add(String(a),b,!0,c,d)};
g.h.Va=function(a,b,c,d){return this.ud.remove(String(a),b,c,d)};
g.h.removeAllListeners=function(a){return this.ud?this.ud.removeAll(a):0};
g.h.Uf=g.ba(4);g.h.Ve=function(a,b,c,d){return this.ud.Ve(String(a),b,c,d)};
g.h.hasListener=function(a,b){return this.ud.hasListener(void 0!==a?String(a):void 0,b)};ue.prototype.get=function(){if(0<this.F){this.F--;var a=this.C;this.C=a.next;a.next=null}else a=this.D();return a};var Fe;var Ge=new ue(function(){return new ze},function(a){a.reset()});
ye.prototype.add=function(a,b){var c=Ge.get();c.set(a,b);this.F?this.F.next=c:this.C=c;this.F=c};
ye.prototype.remove=function(){var a=null;this.C&&(a=this.C,this.C=this.C.next,this.C||(this.F=null),a.next=null);return a};
ze.prototype.set=function(a,b){this.lc=a;this.scope=b;this.next=null};
ze.prototype.reset=function(){this.next=this.scope=this.lc=null};var Ae,Be=!1,Ce=new ye;Le.prototype.reset=function(){this.context=this.onRejected=this.F=this.C=null;this.D=!1};
var Me=new ue(function(){return new Le},function(a){a.reset()});
g.Ke.prototype.then=function(a,b,c){return Re(this,g.Da(a)?a:null,g.Da(b)?b:null,c)};
g.He(g.Ke);g.Ke.prototype.cancel=function(a){if(0==this.C){var b=new g.Ye(a);De(function(){Te(this,b)},this)}};
g.Ke.prototype.Y=function(a){this.C=0;g.Je(this,2,a)};
g.Ke.prototype.N=function(a){this.C=0;g.Je(this,3,a)};
g.Ke.prototype.J=function(){for(var a;a=Ue(this);)Ve(this,a,this.C,this.M);this.L=!1};
var $e=we;g.x(g.Ye,g.Ia);g.Ye.prototype.name="cancel";g.x(g.cf,g.C);g.h=g.cf.prototype;g.h.pb=0;g.h.X=function(){g.cf.V.X.call(this);this.stop();delete this.C;delete this.F};
g.h.start=function(a){this.stop();this.pb=g.af(this.Pb,void 0!==a?a:this.D)};
g.h.stop=function(){this.isActive()&&g.bf(this.pb);this.pb=0};
g.h.isActive=function(){return 0!=this.pb};
g.h.wk=function(){this.pb=0;this.C&&this.C.call(this.F)};g.x(df,Faa);df.prototype.reset=function(){this.C[0]=1732584193;this.C[1]=4023233417;this.C[2]=2562383102;this.C[3]=271733878;this.C[4]=3285377520;this.H=this.D=0};
df.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.F,d=0,e=this.L,f=this.D;d<b;){if(0==f)for(;d<=c;)ef(this,a,d),d+=this.F;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.F){ef(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.F){ef(this,e);f=0;break}}this.D=f;this.H+=b}};
df.prototype.digest=function(){var a=[],b=8*this.H;56>this.D?this.update(this.G,56-this.D):this.update(this.G,this.F-(this.D-56));for(var c=this.F-1;56<=c;c--)this.L[c]=b&255,b/=256;ef(this,this.L);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.C[c]>>d&255,++b;return a};g.jf="StopIteration"in g.p?g.p.StopIteration:{message:"StopIteration",stack:""};g.hf.prototype.next=function(){throw g.jf;};
g.hf.prototype.ad=function(){return this};g.h=g.nf.prototype;g.h.Gb=function(){return this.D};
g.h.Db=g.ba(0);g.h.xc=function(){g.pf(this);return this.C.concat()};
g.h.sd=g.ba(2);g.h.equals=function(a,b){if(this===a)return!0;if(this.D!=a.Gb())return!1;var c=b||Haa;g.pf(this);for(var d,e=0;d=this.C[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
g.h.isEmpty=function(){return 0==this.D};
g.h.clear=function(){this.F={};this.Ie=this.D=this.C.length=0};
g.h.remove=function(a){return g.of(this.F,a)?(delete this.F[a],this.D--,this.Ie++,this.C.length>2*this.D&&g.pf(this),!0):!1};
g.h.get=function(a,b){return g.of(this.F,a)?this.F[a]:b};
g.h.set=function(a,b){g.of(this.F,a)||(this.D++,this.C.push(a),this.Ie++);this.F[a]=b};
g.h.forEach=function(a,b){for(var c=this.xc(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
g.h.clone=function(){return new g.nf(this)};
g.h.ad=function(a){g.pf(this);var b=0,c=this.Ie,d=this,e=new g.hf;e.next=function(){if(c!=d.Ie)throw Error("The map has changed since the iterator was created");if(b>=d.C.length)throw g.jf;var f=d.C[b++];return a?f:d.F[f]};
return e};var tf={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Jaa=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;g.x(g.uf,g.C);g.h=g.uf.prototype;g.h.subscribe=function(a,b,c){var d=this.F[a];d||(d=this.F[a]=[]);var e=this.H;this.C[e]=a;this.C[e+1]=b;this.C[e+2]=c;this.H=e+3;d.push(e);return e};
g.h.od=function(a){var b=this.C[a];if(b){var c=this.F[b];0!=this.G?(this.D.push(a),this.C[a+1]=g.xa):(c&&g.Pa(c,a),delete this.C[a],delete this.C[a+1],delete this.C[a+2])}return!!b};
g.h.oa=function(a,b){var c=this.F[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.L)for(e=0;e<c.length;e++){var k=c[e];Kaa(this.C[k+1],this.C[k+2],d)}else{this.G++;try{for(e=0,f=c.length;e<f;e++)k=c[e],this.C[k+1].apply(this.C[k+2],d)}finally{if(this.G--,0<this.D.length&&0==this.G)for(;c=this.D.pop();)this.od(c)}}return 0!=e}return!1};
g.h.clear=function(a){if(a){var b=this.F[a];b&&((0,g.B)(b,this.od,this),delete this.F[a])}else this.C.length=0,this.F={}};
g.h.Gb=function(a){if(a){var b=this.F[a];return b?b.length:0}a=0;for(b in this.F)a+=this.Gb(b);return a};
g.h.X=function(){g.uf.V.X.call(this);this.clear();this.D.length=0};g.xf.prototype.set=function(a,b){void 0===b?this.C.remove(a):this.C.set(a,g.rf(b))};
g.xf.prototype.get=function(a){try{var b=this.C.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
g.xf.prototype.remove=function(a){this.C.remove(a)};g.x(yf,g.xf);yf.prototype.set=function(a,b){yf.V.set.call(this,a,Af(b))};
yf.prototype.F=function(a){a=yf.V.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
yf.prototype.get=function(a){if(a=this.F(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};g.x(g.Bf,yf);g.Bf.prototype.set=function(a,b,c){if(b=Af(b)){if(c){if(c<(0,g.cd)()){g.Bf.prototype.remove.call(this,a);return}b.expiration=c}b.creation=(0,g.cd)()}g.Bf.V.set.call(this,a,b)};
g.Bf.prototype.F=function(a,b){var c=g.Bf.V.F.call(this,a);if(c)if(!b&&g.Cf(c))g.Bf.prototype.remove.call(this,a);else return c};g.x(Df,Laa);Df.prototype.Gb=function(){var a=0;g.lf(this.ad(!0),function(){a++});
return a};
Df.prototype.clear=function(){var a=Gaa(this.ad(!0)),b=this;(0,g.B)(a,function(c){b.remove(c)})};g.x(g.Ef,Df);g.h=g.Ef.prototype;g.h.isAvailable=function(){if(!this.C)return!1;try{return this.C.setItem("__sak","1"),this.C.removeItem("__sak"),!0}catch(a){return!1}};
g.h.set=function(a,b){try{this.C.setItem(a,b)}catch(c){if(0==this.C.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
g.h.get=function(a){a=this.C.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
g.h.remove=function(a){this.C.removeItem(a)};
g.h.Gb=function(){return this.C.length};
g.h.ad=function(a){var b=0,c=this.C,d=new g.hf;d.next=function(){if(b>=c.length)throw g.jf;var e=c.key(b++);if(a)return e;e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
g.h.clear=function(){this.C.clear()};
g.h.key=function(a){return this.C.key(a)};g.x(g.Ff,g.Ef);g.x(If,Df);var Maa={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Hf=null;g.h=If.prototype;g.h.isAvailable=function(){return!!this.C};
g.h.set=function(a,b){this.C.setAttribute(Jf(a),b);Kf(this)};
g.h.get=function(a){a=this.C.getAttribute(Jf(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
g.h.remove=function(a){this.C.removeAttribute(Jf(a));Kf(this)};
g.h.Gb=function(){return Lf(this).attributes.length};
g.h.ad=function(a){var b=0,c=Lf(this).attributes,d=new g.hf;d.next=function(){if(b>=c.length)throw g.jf;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
g.h.clear=function(){for(var a=Lf(this),b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Kf(this)};g.x(Mf,Df);Mf.prototype.set=function(a,b){this.F.set(this.C+a,b)};
Mf.prototype.get=function(a){return this.F.get(this.C+a)};
Mf.prototype.remove=function(a){this.F.remove(this.C+a)};
Mf.prototype.ad=function(a){var b=this.F.ad(!0),c=this,d=new g.hf;d.next=function(){for(var e=b.next();e.substr(0,c.C.length)!=c.C;)e=b.next();return a?e.substr(c.C.length):c.F.get(e)};
return d};g.Pf=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};g.t("yt.config_",g.Pf,void 0);var Yf={};var Naa=[];var Kca=g.u("ytPubsubPubsubInstance")||new g.uf;g.uf.prototype.subscribe=g.uf.prototype.subscribe;g.uf.prototype.unsubscribeByKey=g.uf.prototype.od;g.uf.prototype.publish=g.uf.prototype.oa;g.uf.prototype.clear=g.uf.prototype.clear;g.t("ytPubsubPubsubInstance",Kca,void 0);var hg=g.u("ytPubsubPubsubSubscribedKeys")||{};g.t("ytPubsubPubsubSubscribedKeys",hg,void 0);var jg=g.u("ytPubsubPubsubTopicToKeys")||{};g.t("ytPubsubPubsubTopicToKeys",jg,void 0);var ig=g.u("ytPubsubPubsubIsSynchronous")||{};
g.t("ytPubsubPubsubIsSynchronous",ig,void 0);var Qaa=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Raa=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;var tm;tm=window;g.ug=tm.ytcsi&&tm.ytcsi.now?tm.ytcsi.now:tm.performance&&tm.performance.timing&&tm.performance.now&&tm.performance.timing.navigationStart?function(){return tm.performance.timing.navigationStart+tm.performance.now()}:function(){return(new Date).getTime()};var Vaa,yg,zg,Ag,Saa,Taa,tg,Cg;Vaa=g.Vf("initial_gel_batch_timeout",1E3);yg=Math.pow(2,16)-1;g.kh=10;zg=null;Ag=0;Saa={log_event:"events",log_interaction:"interactions"};Taa=new Set(["log_event"]);tg={};g.qg=0;g.rg=0;g.jh=0;Cg=!0;g.sg=g.u("ytLoggingTransportLogPayloadsQueue_")||{};g.t("ytLoggingTransportLogPayloadsQueue_",g.sg,void 0);var xg=g.u("ytLoggingTransportTokensToCttTargetIds_")||{};g.t("ytLoggingTransportTokensToCttTargetIds_",xg,void 0);var Lca=0,Waa=g.Yl?"webkit":g.Xl?"moz":g.Gf?"ms":g.Ul?"o":"",Gg=g.u("ytDomDomGetNextId")||function(){return++Lca};
g.t("ytDomDomGetNextId",Gg,void 0);var Xaa={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};g.Jg.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
g.Jg.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
g.Jg.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var Ng=g.u("ytEventsEventsListeners")||{};g.t("ytEventsEventsListeners",Ng,void 0);var Pg=g.u("ytEventsEventsCounter")||{count:0};g.t("ytEventsEventsCounter",Pg,void 0);var Sg=g.Sa(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});g.um=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now&&window.performance.timing.navigationStart?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};
g.vm="Microsoft Internet Explorer"==navigator.appName;g.x(g.Wg,g.C);g.Wg.prototype.Y=function(a){this.C=new g.ed(g.Lg(a),g.Mg(a))};
g.Wg.prototype.M=function(){if(this.C){var a=g.um();if(0!=this.D){var b=g.gd(this.L,this.C)/(a-this.D);this.F[this.H]=.5<Math.abs((b-this.G)/this.G)?1:0;for(var c=0,d=0;4>d;d++)c+=this.F[d]||0;3<=c&&this.Pb();this.G=b}this.D=a;this.L=this.C;this.H=(this.H+1)%4}};
g.Wg.prototype.X=function(){g.eg(this.N);g.Tg(this.J)};g.n(bh,Yaa);bh.prototype.start=function(){var a=g.u("yt.scheduler.instance.start");a&&a()};
bh.prototype.pause=function(){var a=g.u("yt.scheduler.instance.pause");a&&a()};
g.ya(bh);bh.getInstance();var gh={};var ih=g.u("ytLoggingGelSequenceIdObj_")||{};g.t("ytLoggingGelSequenceIdObj_",ih,void 0);g.th=new function(){var a=window.document;this.C=window;this.F=a};
g.t("yt.ads_.signals_.getAdSignalsString",function(a){return g.ph(wh(a))},void 0);(0,g.cd)();var yh=void 0!==XMLHttpRequest?function(){return new XMLHttpRequest}:void 0!==ActiveXObject?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;var Bh,aba,Gh;Bh={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"};aba="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ");
Gh=!1;g.zm=Hh;g.Sh.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.C)try{this.C.set(a,b,(0,g.cd)()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(g.rf(b))}catch(f){return}else e=escape(b);g.Qh(a,e,c,this.F)};
g.Sh.prototype.get=function(a,b){var c=void 0,d=!this.C;if(!d)try{c=this.C.get(a)}catch(e){d=!0}if(d&&(c=g.Ph.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
g.Sh.prototype.remove=function(a){this.C&&this.C.remove(a);g.Rh(a,"/",this.F)};var Th=new g.Sh("yt.innertube");g.Wh.prototype.isReady=function(){!this.C&&Lh()&&(this.C=Mh());return!!this.C};g.n(g.Yh,Error);var ci=new Set,ai=0;g.di.prototype.initialize=function(a,b,c,d,e,f){var k=this;f=void 0===f?!1:f;b?(this.F=!0,g.og(b,function(){k.F=!1;window.botguard?ei(k,c,d,f):(g.pg(b),g.$h(new g.Yh("Unable to load Botguard","from "+b)))})):a&&(eval(a),window.botguard?ei(this,c,d,f):g.$h(Error("Unable to load Botguard from JS")))};
g.di.prototype.Md=function(){return!!this.C};
g.di.prototype.dispose=function(){this.C=null};g.gi=new g.di;hi.prototype.then=function(a,b,c){return this.D?this.D.then(a,b,c):1===this.F&&a?(a=a.call(c,this.C),g.Ie(a)?a:g.ji(a)):2===this.F&&b?(a=b.call(c,this.C),g.Ie(a)?a:g.ii(a)):this};
hi.prototype.getValue=function(){return this.C};
g.He(hi);g.n(ki,g.C);ki.prototype.Va=function(a){for(var b=0;b<this.C.length;b++)if(this.C[b]==a){this.C.splice(b,1);a.target.removeEventListener(a.name,a.callback);break}};
ki.prototype.X=function(){for(;this.C.length;){var a=this.C.pop();a.target.removeEventListener(a.name,a.callback)}g.C.prototype.X.call(this)};li.prototype.clone=function(){var a=new li,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==g.za(c)?a[b]=g.$a(c):a[b]=c}return a};var ni=(0,g.cd)().toString();var pi=g.u("ytLoggingDocDocumentNonce_")||oi();g.t("ytLoggingDocDocumentNonce_",pi,void 0);g.ri.prototype.toString=function(){return JSON.stringify(g.si(this))};g.t("yt_logging_screen.getRootVeType",vi,void 0);g.t("yt_logging_screen.getCurrentCsn",g.yi,void 0);g.t("yt_logging_screen.getCttAuthInfo",g.zi,void 0);g.t("yt_logging_screen.setCurrentScreen",g.Ai,void 0);g.Ci.prototype.toString=function(){return this.topic};var Mca=g.u("ytPubsub2Pubsub2Instance")||new g.uf;g.uf.prototype.subscribe=g.uf.prototype.subscribe;g.uf.prototype.unsubscribeByKey=g.uf.prototype.od;g.uf.prototype.publish=g.uf.prototype.oa;g.uf.prototype.clear=g.uf.prototype.clear;g.t("ytPubsub2Pubsub2Instance",Mca,void 0);var Fi=g.u("ytPubsub2Pubsub2SubscribedKeys")||{};g.t("ytPubsub2Pubsub2SubscribedKeys",Fi,void 0);var Hi=g.u("ytPubsub2Pubsub2TopicToKeys")||{};g.t("ytPubsub2Pubsub2TopicToKeys",Hi,void 0);
var Gi=g.u("ytPubsub2Pubsub2IsAsync")||{};g.t("ytPubsub2Pubsub2IsAsync",Gi,void 0);g.t("ytPubsub2Pubsub2SkipSubKey",null,void 0);g.n(Ki,g.Bi);var lba=new g.Ci("screen-created",Ki),Li=[],Mi=0;var Vi,Ti;Vi=0;g.Ui=null;Ti=null;g.h=g.Xi.prototype;g.h.cG=function(){this.Md()||this.init()};
g.h.enable=function(){this.C=1;(0,g.B)("string"==typeof this.page?[this.page]:this.page,function(a){a&&(this.subscribe("init-"+a,this.cG,this),this.subscribe("dispose-"+a,this.dispose,this),g.E("PAGE_NAME")==a&&g.Yi(this))},this)};
g.h.init=function(){g.$g(this.F);this.C=2;this.L&&this.L()};
g.h.Md=function(){return 2==this.C};
g.h.dispose=function(){this.C=3;g.$g(this.F);this.H&&this.H()};
g.h.disable=function(){this.C=4;this.clear();try{this.dispose()}catch(a){g.Zf(a)}};
g.h.subscribe=function(a,b,c){a=g.kg(a,b,c);this.G.push(a);return a};
g.h.clear=function(){g.lg(this.G);this.G=[]};var Zi=g.u("yt.modules.registry_")||{};g.t("yt.modules.registry_",Zi,void 0);g.bj=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};g.t("yt.msgs_",g.bj,void 0);var hj={},pba=0;var qba=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;g.n(vj,g.C);g.h=vj.prototype;g.h.getId=function(){return this.ha};
g.h.loadNewVideoConfig=function(a){if(!this.qb()){this.aa&&(g.dg(this.aa),this.aa=0);this.nb=a=g.mi(a);this.C=a.clone();tj(this);this.qa||(this.qa=Ej(this,this.C.args.jsapicallback||"onYouTubePlayerReady"));this.C.args.jsapicallback=null;(a=this.C.attrs.width)&&g.Id(this.L,Number(a)||a);if(a=this.C.attrs.height)this.L.style.height=g.Hd(Number(a)||a,!0);uj(this);this.M&&wj(this)}};
g.h.Yu=function(){return this.nb};
g.h.cz=function(){return this.M};
g.h.Ih=function(a,b){var c=this,d=Ej(this,b);if(d){if(!g.Ma(this.Od,a)&&!this.G[a]){var e=sba(this,a);this.N&&this.N(a,e)}this.Y.subscribe(a,d);"onReady"==a&&this.M&&g.bg(function(){d(c.api)},0)}};
g.h.QF=function(a,b){if(!this.qb()){var c=Ej(this,b);c&&g.vf(this.Y,a,c)}};
g.h.Bt=function(a){g.H("a11y-announce",a)};
g.h.hD=function(a){g.H("WATCH_LATER_VIDEO_ADDED",a)};
g.h.iD=function(a){g.H("WATCH_LATER_VIDEO_REMOVED",a)};
g.h.qv=function(){return this.la||(xj(this)?"html5":null)};
g.h.ev=function(){return this.kb};
g.h.cancel=function(){if(this.J){var a=this.J,b=g.ng(yj(this));spf.script.ignore(b,a)}g.dg(this.sb);this.T=!1};
g.h.X=function(){Bj(this);if(this.H&&this.C&&this.H.destroy)try{this.H.destroy()}catch(b){g.Zf(b)}this.ib=null;for(var a in this.G)g.p[this.G[a]]=null;this.nb=this.C=this.api=null;delete this.Ya;delete this.L;g.C.prototype.X.call(this)};g.Gj={};g.Fj="player_uid_"+(1E9*Math.random()>>>0);var Nj=null;g.Am=window.performance&&window.performance.memory;g.ol={};g.n(Oj,g.Bi);g.n(Pj,g.Bi);var wba=new g.Ci("aft-recorded",Oj),Fba=new g.Ci("timing-sent",Pj);var Bm=window,Sj=Bm.performance||Bm.mozPerformance||Bm.msPerformance||Bm.webkitPerformance||new vba;var dk=!1;var kk=g.u("ytLoggingLatencyUsageStats_")||{};g.t("ytLoggingLatencyUsageStats_",kk,void 0);ik.prototype.tick=function(a,b,c){lk(this,"tick_"+a+"_"+b)||g.Xh("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c})};
ik.prototype.info=function(a,b){var c=Object.keys(a).join("");lk(this,"info_"+c+"_"+b)||(a.clientActionNonce=b,g.Xh("latencyActionInfo",a))};var Cm={},Ak=(Cm.ad_to_ad="LATENCY_ACTION_AD_TO_AD",Cm.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",Cm.app_startup="LATENCY_ACTION_APP_STARTUP",Cm["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",Cm["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",Cm["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",Cm.browse="LATENCY_ACTION_BROWSE",Cm.channels="LATENCY_ACTION_CHANNELS",Cm.channel="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",Cm["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",
Cm["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",Cm["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",Cm["channel.monetization"]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",Cm["channel.translations"]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",Cm["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",Cm.chips="LATENCY_ACTION_CHIPS",Cm["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",Cm["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",
Cm.embed="LATENCY_ACTION_EMBED",Cm.home="LATENCY_ACTION_HOME",Cm.library="LATENCY_ACTION_LIBRARY",Cm.live="LATENCY_ACTION_LIVE",Cm.onboarding="LATENCY_ACTION_KIDS_ONBOARDING",Cm.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",Cm.prebuffer="LATENCY_ACTION_PREBUFFER",Cm.prefetch="LATENCY_ACTION_PREFETCH",Cm.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",Cm.profile_switcher="LATENCY_ACTION_KIDS_PROFILE_SWITCHER",Cm.results="LATENCY_ACTION_RESULTS",Cm.search_ui="LATENCY_ACTION_SEARCH_UI",
Cm.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",Cm.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",Cm.settings="LATENCY_ACTION_SETTINGS",Cm.tenx="LATENCY_ACTION_TENX",Cm.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",Cm.watch="LATENCY_ACTION_WATCH",Cm.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",Cm["watch,watch7"]="LATENCY_ACTION_WATCH",Cm["watch,watch7_html5"]="LATENCY_ACTION_WATCH",Cm["watch,watch7ad"]="LATENCY_ACTION_WATCH",Cm["watch,watch7ad_html5"]="LATENCY_ACTION_WATCH",Cm.wn_comments=
"LATENCY_ACTION_LOAD_COMMENTS",Cm.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",Cm["video.analytics"]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",Cm["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",Cm["video.edit"]="LATENCY_ACTION_CREATOR_VIDEO_EDIT",Cm["video.translations"]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",Cm["video.video_editor"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",Cm["video.video_editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",Cm["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",
Cm.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",Cm.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",Cm),Dm={},pk=(Dm.ad_allowed="adTypesAllowed",Dm.yt_abt="adBreakType",Dm.ad_cpn="adClientPlaybackNonce",Dm.ad_docid="adVideoId",Dm.yt_ad_an="adNetworks",Dm.ad_at="adType",Dm.browse_id="browseId",Dm.p="httpProtocol",Dm.t="transportProtocol",Dm.cpn="clientPlaybackNonce",Dm.ccs="creatorInfo.creatorCanaryState",Dm.cseg="creatorInfo.creatorSegment",Dm.csn="clientScreenNonce",
Dm.docid="videoId",Dm.GetHome_rid="requestId",Dm.GetSearch_rid="requestId",Dm.GetPlayer_rid="requestId",Dm.GetWatchNext_rid="requestId",Dm.GetBrowse_rid="requestId",Dm.GetLibrary_rid="requestId",Dm.is_continuation="isContinuation",Dm.is_nav="isNavigation",Dm.b_p="kabukiInfo.browseParams",Dm.is_prefetch="kabukiInfo.isPrefetch",Dm.is_secondary_nav="kabukiInfo.isSecondaryNav",Dm.prev_browse_id="kabukiInfo.prevBrowseId",Dm.query_source="kabukiInfo.querySource",Dm.voz_type="kabukiInfo.vozType",Dm.yt_lt=
"loadType",Dm.mver="creatorInfo.measurementVersion",Dm.yt_ad="isMonetized",Dm.nr="webInfo.navigationReason",Dm.nrsu="navigationRequestedSameUrl",Dm.ncnp="webInfo.nonPreloadedNodeCount",Dm.pnt="performanceNavigationTiming",Dm.prt="playbackRequiresTap",Dm.plt="playerInfo.playbackType",Dm.pis="playerInfo.playerInitializedState",Dm.paused="playerInfo.isPausedOnLoad",Dm.yt_pt="playerType",Dm.fmt="playerInfo.itag",Dm.yt_pl="watchInfo.isPlaylist",Dm.yt_pre="playerInfo.preloadType",Dm.yt_ad_pr="prerollAllowed",
Dm.pa="previousAction",Dm.yt_red="isRedSubscriber",Dm.rce="mwebInfo.responseContentEncoding",Dm.scrh="screenHeight",Dm.scrw="screenWidth",Dm.st="serverTimeMs",Dm.aq="tvInfo.appQuality",Dm.br_trs="tvInfo.bedrockTriggerState",Dm.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",Dm.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",Dm.label="tvInfo.label",Dm.is_mdx="tvInfo.isMdx",Dm.preloaded="tvInfo.isPreloaded",Dm.upg_player_vis="playerInfo.visibilityState",Dm.query="unpluggedInfo.query",Dm.upg_chip_ids_string=
"unpluggedInfo.upgChipIdsString",Dm.yt_vst="videoStreamType",Dm.vph="viewportHeight",Dm.vpw="viewportWidth",Dm.yt_vis="isVisible",Dm.rcl="mwebInfo.responseContentLength",Dm.GetSettings_rid="requestId",Dm.GetTrending_rid="requestId",Dm.GetMusicSearchSuggestions_rid="requestId",Dm.REQUEST_ID="requestId",Dm),yba="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),
Em={},qk=(Em.ccs="CANARY_STATE_",Em.mver="MEASUREMENT_VERSION_",Em.pis="PLAYER_INITIALIZED_STATE_",Em.yt_pt="LATENCY_PLAYER_",Em.pa="LATENCY_ACTION_",Em.yt_vst="VIDEO_STREAM_TYPE_",Em),zba="all_vc ap c cver cbrand cmodel cplatform ctheme ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");if(g.Uf("overwrite_polyfill_on_logging_lib_loaded")){var Fm=window;Fm.ytcsi&&(Fm.ytcsi.info=uk)};var zk={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3/mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",
'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",'script[name="mobile_blazer_watch_mod"]':"mbwj"},Aba=(0,g.v)(Sj.clearResourceTimings||
Sj.webkitClearResourceTimings||Sj.mozClearResourceTimings||Sj.msClearResourceTimings||Sj.oClearResourceTimings||g.xa,Sj),Gm=window;g.Uf("csi_on_gel")&&Gm.ytcsi&&(Gm.ytcsi.tick=g.wk);var Pk=0,Lk=[],Ok=[],Ik=0,Mk={},Nk={},Jk=new g.cf(Mba,1E3);var Rk=["server_prefetched_vast","vmap"];var Tk;var Xk=null,$k=[];var dl,ul,tl,fl,el,Tba,Wba,Uba,Vba,pl;fl=0;el=0;Tba=[900,60,"waiting"];Wba=[500,99,"waiting"];Uba=[300,60,"waiting"];Vba=[400,99,"waiting"];pl=[300,101,"done"];var Bl=!1;window.yt=window.yt||{};g.t("yt.setConfig",g.Qf,void 0);g.t("yt.pushConfigArray",Rf,void 0);g.t("yt.getConfig",g.E,void 0);g.t("yt.config.set",g.Qf,void 0);g.t("yt.config.pushArray",Rf,void 0);g.t("yt.config.get",g.E,void 0);g.t("yt.hasMsg",g.dj,void 0);g.t("yt.setMsg",cj,void 0);g.t("yt.setGoogMsg",ej,void 0);g.t("yt.msgs.has",g.dj,void 0);g.t("yt.msgs.set",cj,void 0);g.t("yt.msgs.setGoog",ej,void 0);g.t("yt.pubsub.publish",g.H,void 0);g.t("yt.pubsub.subscribe",g.kg,void 0);
g.t("ytcsi.tick",g.wk,void 0);g.x(El,g.Xi);
El.prototype.enable=function(){window.onload=Rba;window.onunload=Sba;window.onerror=Paa;var a=window.ytspf||{};a.enabled?(window.addEventListener&&(window.addEventListener("spfclick",bl),window.addEventListener("spfhistory",cl),window.addEventListener("spfrequest",hl),window.addEventListener("spfpartprocess",kl),window.addEventListener("spfpartdone",ll),window.addEventListener("spfprocess",ml),window.addEventListener("spfdone",ql),window.addEventListener("spferror",rl),window.addEventListener("spfreload",
sl),window.addEventListener("spfjsbeforeunload",Fl)),a.config=a.config||{},window.ytdepmap?spf.script.ready("spf",function(){a.enabled=spf.init(a.config)}):a.enabled=spf.init(a.config),this.subscribe("init",Yba),this.subscribe("dispose",Zba)):spf.dispose();
this.subscribe("init",this.init,this);this.subscribe("dispose",this.dispose,this)};
El.prototype.init=function(){El.V.init.call(this);(window.ytspf||{}).enabled||spf.dispose();var a=window.ytPageFrameLoaded||!1;if(!a&&g.E("PAGEFRAME_JS")){var b=g.E("PAGEFRAME_JS",void 0);var c=function(){var e=g.u("ytbin.www.pageframe.setup");e&&(window.ytPageFrameLoaded=!0,e())}}else a&&(a=g.u("yt.www.masthead.loadSearchbox"))&&a();
a=g.E("JS_COMMON_MODULE");var d=g.E("JS_PAGE_MODULES");d||(d=[a]);a=g.E("JS_DELAY_LOAD",0);0<a?(g.dg(this.D),this.D=g.bg(function(){b&&g.og(b,c);spf.script.require(d)},a)):(b&&g.og(b,c),spf.script.require(d));
g.t("yt.abuse.player.botguardInitialized",hba,void 0);g.t("yt.abuse.player.invokeBotguard",iba,void 0);g.t("yt.abuse.dclkstatus.checkDclkStatus",gba,void 0);g.t("yt.player.exports.navigate",g.rj,void 0);g.t("yt.util.activity.init",g.fh,void 0);g.t("yt.util.activity.getTimeSinceActive",g.hh,void 0);g.t("yt.util.activity.setTimestamp",g.dh,void 0);Wk(g.u("ytplayer.config"));g.u("ytspf.enabled")&&Pba();Eba();g.E("SERVICE_WORKER_KILLSWITCH",void 0)||navigator.serviceWorker&&navigator.serviceWorker.getRegistrations&&
"https:"==window.location.protocol&&(g.Uf("service_worker_enabled")?oca():mca())};
El.prototype.dispose=function(){g.dg(this.D);var a=g.u("ytbin.www.pageframe.cancelSetup");a&&a();g.eg(Tk);if(a=g.Vk())a.removeEventListener("onReady",Uk),a.removeEventListener("onStateChange",Uk);Wj(!1);(a=(a=(a=document.getElementById("ticker"))&&"TRIGGER_CONDITION_ENABLE_NOTIFICATIONS_PROMPT"==g.F(a,"trigger-condition")?a:null)?a.querySelector(".yt-uix-button-alert-info"):null)&&g.Vg(a);El.V.dispose.call(this)};
El.prototype.disable=function(){El.V.disable.call(this);window.removeEventListener&&(window.removeEventListener("spfclick",bl),window.removeEventListener("spfhistory",cl),window.removeEventListener("spfrequest",hl),window.removeEventListener("spfpartprocess",kl),window.removeEventListener("spfpartdone",ll),window.removeEventListener("spfprocess",ml),window.removeEventListener("spfdone",ql),window.removeEventListener("spferror",rl),window.removeEventListener("spfreload",sl),window.removeEventListener("spfjsbeforeunload",
Fl));window.onload=null;window.onunload=null;window.onerror=null};
g.aj(new El);})(_yt_www);
