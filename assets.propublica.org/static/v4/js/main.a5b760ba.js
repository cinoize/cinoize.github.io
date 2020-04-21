// CustomEvent() polyfill
// See: https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent#Polyfill
(function(){if(typeof window.CustomEvent==="function")return false;function CustomEvent(event,params){params=params||{bubbles:false,cancelable:false,detail:undefined};var evt=document.createEvent("CustomEvent");evt.initCustomEvent(event,params.bubbles,params.cancelable,params.detail);return evt}CustomEvent.prototype=window.Event.prototype;window.CustomEvent=CustomEvent})();;// Element.matches() polyfill
// See: https://developer.mozilla.org/en-US/docs/Web/API/Element/matches#Polyfill
if(!Element.prototype.matches){Element.prototype.matches=Element.prototype.msMatchesSelector};// Element.closest() polyfill
// Assumes matches() polyfill is already present
// See: https://developer.mozilla.org/en-US/docs/Web/API/Element/closest#Polyfill
if(!Element.prototype.closest){Element.prototype.closest=function(s){var el=this;if(!document.documentElement.contains(el))return null;do{if(el.matches(s))return el;el=el.parentElement||el.parentNode}while(el!==null&&el.nodeType===1);return null}};/*! fg-ajax-include - v0.2.0 - 2016-07-18
* http://filamentgroup.com/lab/ajax_includes_modular_content/
* Copyright (c) 2016 @scottjehl, Filament Group, Inc.; Licensed MIT */(function($,win,undefined){var AI={boundAttr:"data-ajax-bound",interactionAttr:"data-interaction",// request a url and trigger ajaxInclude on elements upon response
makeReq:function(url,els,isHijax){$.get(url,function(data,status,xhr){els.trigger("ajaxIncludeResponse",[data,xhr])})},plugins:{}};$.fn.ajaxInclude=function(options){var urllist=[],elQueue=$(),o={proxy:null};// Option extensions
// String check: deprecated. Formerly, proxy was the single arg.
if(typeof options==="string"){o.proxy=options}else{o=$.extend(o,options)}// if it's a proxy, queue the element and its url, if not, request immediately
function queueOrRequest(el){var url=el.data("url");if(o.proxy&&$.inArray(url,urllist)===-1){urllist.push(url);elQueue=elQueue.add(el)}else{AI.makeReq(url,el)}}// if there's a url queue
function runQueue(){if(urllist.length){AI.makeReq(o.proxy+urllist.join(","),elQueue);elQueue=$();urllist=[]}}// bind a listener to a currently-inapplicable media query for potential later changes
function bindForLater(el,media){var mm=win.matchMedia(media);function cb(){queueOrRequest(el);runQueue();mm.removeListener(cb)}if(mm.addListener){mm.addListener(cb)}}// loop through els, bind handlers
this.not("["+AI.boundAttr+"]").not("["+AI.interactionAttr+"]").each(function(k){var el=$(this),media=el.attr("data-media"),methods=["append","replace","before","after"],method,url,isHijax=false,target=el.attr("data-target");for(var ml=methods.length,i=0;i<ml;i++){if(el.is("[data-"+methods[i]+"]")){method=methods[i];url=el.attr("data-"+method)}}if(!url){// <a href> or <form action>
url=el.attr("href")||el.attr("action");isHijax=true}if(method==="replace"){method+="With"}el.data("method",method).data("url",url).data("target",target).attr(AI.boundAttr,true).each(function(){for(var j in AI.plugins){AI.plugins[j].call(this,o)}}).bind("ajaxIncludeResponse",function(e,data,xhr){var content=data,targetEl=target?$(target):el;if(o.proxy){var subset=new RegExp("<entry url=[\"']?"+el.data("url")+"[\"']?>((?:(?!</entry>)(.|\n))*)","gmi").exec(content);if(subset){content=subset[1]}}var filteredContent=el.triggerHandler("ajaxIncludeFilter",[content]);if(filteredContent){content=filteredContent}if(method==="replaceWith"){el.trigger("ajaxInclude",[content]);targetEl[el.data("method")](content)}else{targetEl[el.data("method")](content);el.trigger("ajaxInclude",[content])}});// When hijax, ignores matchMedia, proxies/queueing
if(isHijax){AI.makeReq(url,el,true)}else if(!media||win.matchMedia&&win.matchMedia(media).matches){queueOrRequest(el)}else if(media&&win.matchMedia){bindForLater(el,media)}});// empty the queue for proxied requests
runQueue();// return elems
return this};win.AjaxInclude=AI})(jQuery,this);;/*
 * Collapsible widget
 * https://github.com/filamentgroup/collapsible
 * Copyright (c) 2014 Filament Group, Inc.
 * Licensed under the MIT, GPL licenses.
 */;(function($,window,document,undefined){// Defaults
var pluginName="collapsible";var idInt=0;// overrideable defaults
var defaults={pluginClass:pluginName,collapsedClass:pluginName+"-collapsed",expandedClass:pluginName+"-expanded",// NOTE: don't use this class for showing/hiding collapsible-content. Instead, use it for expanded visual exceptions.
headerClass:pluginName+"-header",contentClass:pluginName+"-content",enhancedClass:pluginName+"-enhanced",instructions:false,innerButton:false,// this wraps the text of the header in a button and transfers the aria info to that button
collapsed:false};// plugin constructor
function Plugin(element,options){this.element=$(element);var self=this,dataOptions={};// Allow data-attr option setting
if(this.element.is("[data-config]")){for(var option in defaults){if(defaults.hasOwnProperty(option)){var value=self.element.attr("data-"+option.replace(/[A-Z]/g,function(c){return"-"+c.toLowerCase()}));if(value!==undefined){if(value==="true"||value==="false"){dataOptions[option]=value==="true"}else{dataOptions[option]=value}}}}}this.options=$.extend({},defaults,dataOptions,options);// allow the collapsedClass to set the option if specified
if(this.element.is("."+this.options.collapsedClass)){this.options.collapsed=true}this._defaults=defaults;this._name=pluginName;this.init()}Plugin.prototype={init:function(){this.header=this.element.children().filter("."+this.options.headerClass);if(!this.header.length){this.header=this.element.children().eq(0)}this.content=this.element.children().filter("."+this.options.contentClass);if(!this.content.length){this.content=this.header.next()}if(this.options.innerButton){this.headerHTML=this.header.text();this.headerButton=$("<button></button>").append(this.headerHTML)}this._addAttributes();this._bindEvents();idInt++;this.element.data(pluginName,this);this.element.trigger("init")},_addAttributes:function(){this.element.addClass(this.options.pluginClass).addClass(this.options.enhancedClass);this.header.addClass(this.options.headerClass);this._addA11yAttrs();this.content.addClass(this.options.contentClass)},_addA11yAttrs:function(){if(this.options.innerButton){this.header.html("");this.header.append(this.headerButton)}else{this.header.attr("role","button");this.header.attr("tabindex","0");if(this.options.instructions){this.header.attr("title",this.options.instructions)}}},_removeA11yAttrs:function(){if(this.options.innerButton){this.header.html("");this.header.append(this.headerHTML)}else{this.header.removeAttr("role");this.header.removeAttr("tabindex");this.header.removeAttr("title")}},_isNonInteractive:function(){var computedContent=window.getComputedStyle(this.content[0],null);var computedHeader=window.getComputedStyle(this.header[0],null);if(this.options.innerButton){computedHeader=window.getComputedStyle(this.headerButton[0],null)}return computedContent.getPropertyValue("display")!=="none"&&computedContent.getPropertyValue("visibility")!=="hidden"&&computedHeader.getPropertyValue("cursor")==="default"},_checkInteractivity:function(){if(this._isNonInteractive()){this._removeA11yAttrs()}else{this._addA11yAttrs()}},_bindEvents:function(){var self=this;this.header.bind("click",function(e){self.toggle(e.target);e.preventDefault()}).bind("keydown."+pluginName,function(e){if(e.which===13||e.which===32){self.toggle(e.target);e.preventDefault()}});if(this.options.collapsed){this._collapse()}else{this._expand()}this._checkInteractivity();var resizepoll;$(window).bind("resize",function(){if(resizepoll){clearTimeout(resizepoll)}resizepoll=setTimeout(function(){self._checkInteractivity.call(self)},150)})},collapsed:false,// used internally to expand without triggering events (for init)
_expand:function(){this.element.removeClass(this.options.collapsedClass);this.element.addClass(this.options.expandedClass);if(this.options.innerButton){this.headerButton.attr("aria-expanded","true")}else{this.header.attr("aria-expanded","true")}this.collapsed=false},expand:function(){var self=$(this).data(pluginName)||this;self._expand();self.element.trigger("expand")},// used internally to expand without triggering events (for init)
_collapse:function(){this.element.addClass(this.options.collapsedClass);this.element.removeClass(this.options.expandedClass);if(this.options.innerButton){this.headerButton.attr("aria-expanded","false")}else{this.header.attr("aria-expanded","false")}this.collapsed=true},collapse:function(){var self=$(this).data(pluginName)||this;self._collapse();self.element.trigger("collapse")},toggle:function(){if(this.collapsed){this.expand()}else{this.collapse()}},focusable:"a, input, textarea, select, button, [tabindex='0']"};// lightweight plugin wrapper around the constructor,
// preventing against multiple instantiations
$.fn[pluginName]=function(options){return this.each(function(){if(!$(this).data(pluginName)){new Plugin(this,options)}})};// Simple auto-init by selector that runs when the dom is ready. Trigger "enhance" if desirable.
$(document).bind("enhance",function(e){var selector="."+pluginName;$($(e.target).is(selector)&&e.target).add(selector,e.target).filter(selector)[pluginName]()})})(jQuery,window,document);;/*
 * Collapsible widget extension: external toggle
 * External click targets can toggle a collapsible from outside the collapsible component
 * https://github.com/filamentgroup/collapsible
 * Copyright (c) 2014 Filament Group, Inc.
 * Licensed under the MIT, GPL licenses.
 */;(function($,window,document,undefined){var pluginName="collapsible";var subPluginName="collapsible-target";var attrName="data-"+subPluginName;var dataName=attrName;function ExternalToggle($toggle){this.$toggle=$toggle;this.isLink=this.$toggle.is("a[href]");this.isSelect=!this.isLink&&this.$toggle.is("select");this.isRadio=!this.isSelect&&this.$toggle.is("[type='radio']");this.$target=$($toggle.attr(attrName)||$toggle.attr("href"));this.component=this.$target.data(pluginName)}ExternalToggle.prototype.getForcedElement=function(){if(this.isSelect){return this.$toggle.find("option").eq(this.$toggle[0].selectedIndex)}else{return this.$toggle}};ExternalToggle.prototype.toggle=function(){var $el=this.getForcedElement();if($el.is("[data-force-expand]")){this.component.expand()}else if($el.is("[data-force-collapse]")){this.component.collapse()}else if($el.is("[data-ignore]")){}else{this.component.toggle()}};ExternalToggle.prototype.initSelect=function(){var self=this;if(this.isSelect){this.$toggle.unbind("change."+pluginName).bind("change."+pluginName,function(){self.toggle()})}};ExternalToggle.prototype.onclick=function(event){var self=this;if(this.isLink){event.preventDefault();this.toggle()}else if(this.isSelect){// do nothing, element already initialized globally.
}else if(this.isRadio){$("[name='"+this.$toggle.attr("name")+"']").unbind("change."+pluginName).bind("change."+pluginName,function(){if(self.$toggle[0].checked){self.component.expand()}else{self.component.collapse()}}).trigger("change")}else{this.toggle()}};function init($toggle){var component=$toggle.data(dataName);if(!component){component=new ExternalToggle($toggle);$toggle.data(dataName,component)}return component}// Simple auto-init by selector that runs when the dom is ready. Trigger "enhance" if desirable.
$(document).bind("click."+pluginName,function(event){$(event.target).closest("["+attrName+"]").each(function(){var component=init($(this));component.onclick.call(component,event)})});// Global Init
$(document).bind("enhance",function(e){var selector="select["+attrName+"]";$($(e.target).is(selector)&&e.target).add(selector,e.target).filter(selector).each(function(){var component=init($(this));component.initSelect()})})})(jQuery,window,document);;/*
 * Collapsible widget extension: menu behavior
 * https://github.com/filamentgroup/collapsible
 * Copyright (c) 2014 Filament Group, Inc.
 * Licensed under the MIT, GPL licenses.
 */;(function($,window,document,undefined){$(document).bind("init",function(e){var pluginName="collapsible";if($(e.target).is("."+pluginName)){var $collapsible=$(e.target);var self=$collapsible.data(pluginName);var $trigger=$collapsible.prev().filter("."+pluginName+"-trigger");var triggerExpand=pluginName+"-trigger-expand";// menu behavior (clickout, and optionally hover)
var isMenu=function(){return $collapsible.children("."+pluginName+"-content").css("position")==="absolute"||$collapsible.is("[data-collapsible-ismenu]")};// tapout/clickout behavior
var targetTop;var touchCancel=false;$("body").bind("gesturestart."+pluginName,function(){touchCancel=true}).bind("mousemove."+pluginName,function(){touchCancel=true}).bind("touchstart."+pluginName+" pointerdown."+pluginName+" MSPointerDown."+pluginName,function(a){targetTop=a.target.getBoundingClientRect().top}).bind("focusin."+pluginName+" touchend."+pluginName+" click."+pluginName+" pointerup."+pluginName+" MSPointerUp."+pluginName,function(a){var atype=a.originalEvent?a.originalEvent.type:a.type;if(atype==="touchend"||atype==="pointerup"||atype==="MSPointerUp"){if(targetTop&&Math.abs(targetTop-a.target.getBoundingClientRect().top)>5){touchCancel=true}}// if the event target is not in the collapsible, and the collapsible is expanded, and it's a menu presentation... collapse it!
if(!$(a.target).closest(e.target).length&&!$(a.target).closest($trigger).length&&!$collapsible.data(pluginName).collapsed&&isMenu()&&touchCancel===false){setTimeout(function(){$collapsible.data(pluginName).collapse()});if($(a.target).closest("a,select,input,textarea,button,label").length&&!$(a.target).closest("."+pluginName+"-header").length){a.preventDefault()}}setTimeout(function(){targetTop=null;touchCancel=false},200)});// hover behavior for collapsibles and triggers relies on the presence of data-collapsible-hover attr
// the exclusive hover behavior requires a value of "exclusive"
var startedByTouch=false;var hover=$collapsible.is("[data-collapsible-hover]");var exclusiveHover=$collapsible.is("[data-collapsible-hover='exclusive']");var mouseovertimestamp;if(hover){if(exclusiveHover){self.header.unbind("click tap")}$collapsible.add($trigger).bind("touchstart pointerdown MSPointerDown",function(e){// ignore hovers that begin with touch
var evt=e.originalEvent?e.originalEvent:e;if((evt.type==="pointerdown"||evt.type==="MSPointerDown")&&evt.pointerType&&(evt.pointerType==="mouse"||evt.pointerType===4)){return}startedByTouch=true})// mouseover covers child collapsibles in a more friendly way than mouseleave
.bind("mouseover."+pluginName,function(e){mouseovertimestamp=new Date().getTime();if(!startedByTouch&&isMenu()&&$(e.target).closest(self.header).length){$collapsible.data(pluginName).expand()}}).bind("mouseleave."+pluginName,function(){mouseovertimestamp=null;if(!startedByTouch&&isMenu()&&$(e.target).is($collapsible)){$collapsible.data(pluginName).collapse()}})// make hover menu header links click-through for mouse, though not for touch
.bind("click",function(e){if(!mouseovertimestamp){return}var timesincemouseover=new Date().getTime()-mouseovertimestamp;if($(e.target).is(self.header)&&isMenu()&&$(e.target).is("a[href]")&&!startedByTouch&&timesincemouseover>300){window.location.href=e.target.href}});$collapsible.bind("expand",function(){$trigger.addClass(triggerExpand)}).bind("collapse",function(){$trigger.removeClass(triggerExpand)})}// add keyboard/arrow handling
// arrow method handles the arrow key navigation, which largely maps to the tab key within the component
self.arrow=function(target,back){// find all focusables in this collapsible content area
var $focusables=this.content.find(this.focusable);// nextTab will be the next element receiving focus from this arrow keydown
var nextTab;// if the keydown target is the header and it's down or right, focus on the first focusable
if($(target).is(this.header)&&!back){nextTab=$focusables[0]}else{// if it's a backward arrow, reverse the array
if(back){// this if can go away once https://github.com/filamentgroup/shoestring/issues/80 is fixed
// check if already an array (shoestring with bug above)
if($focusables.reverse){$focusables=$focusables.reverse()}// otherwisejquery will need a get()
else{$focusables=$($focusables.get().reverse())}}// afterTarget becomes true once the target has been passed in the each loop
var afterTarget=false;// loop focusables
$focusables.each(function(){// if nextTab isn't defined yet, we're after the target in the loop, and the target appears to be displayed
// NOTE: the offset checks replaced the following, which tied keyboard behavior to aria state:
// !$( this ).closest( ".collapsible-collapsed .collapsible-content" ).length
// unfortunately, we sometimes display visually elements that are still aria-hidden.
// The current check caters to sighted keyboard users over non-sighted keyboard users. TODO: figure this out.
if(!nextTab&&afterTarget&&this.offsetHeight>0&&this.offsetLeft>-1){nextTab=this}// try to set afterTarget if not already set
if(!afterTarget){afterTarget=$(this).is(target)}})}// if we have a next element to send focus to at this point, do that. Otherwise, focus back on header
if(nextTab){nextTab.focus()}else{// no nextTab? focus back to header
this.header[0].focus()}};// bind keydown handlers.
// arrow key handling applies to the entire collapsible
self.element.bind("keydown."+pluginName,function(e){// arrow key behavior: collapsible must be expanded to accept arrow navigation
if(!self.collapsed&&isMenu()){if(e.which===39||e.which===40){self.arrow(e.target);e.preventDefault()}else if(e.which===37||e.which===38){self.arrow(e.target,true);e.preventDefault()}}})}})})(jQuery,window,document);;/*
 * Collapsible widget extension: set
 * https://github.com/filamentgroup/collapsible
 * Copyright (c) 2014 Filament Group, Inc.
 * Licensed under the MIT, GPL licenses.
 */;(function($,window,document,undefined){var pluginName="collapsible";// Simple auto-init by selector that runs when the dom is ready. Trigger "enhance" if desirable.
$(document).bind("expand."+pluginName,function(e){var setAttr="data-"+pluginName+"-set";var selector="."+pluginName+"["+setAttr+"]";var $collapsible=$(e.target);if($collapsible.is(selector)){var value=$collapsible.attr(setAttr);var $set=$("."+pluginName+"-enhanced["+setAttr+"='"+value+"']").filter(function(){return this!==$collapsible[0]});$set.each(function(){var thisData=$(this).data(pluginName);if(thisData){thisData.collapse()}});var openItemTop=e.target.getBoundingClientRect().top+(document.body.scrollY||document.body.scrollTop||document.documentElement.scrollTop);// from jquery...
var scroll=function(){var prop="pageYOffset",method="scrollTop";return window?prop in window?window[prop]:window.document.documentElement[method]:window.document.body[method]}();if(scroll>openItemTop){window.scrollTo(0,openItemTop)}}})})(jQuery,window,document);;/*
 * Collapsible widget extension: tabs behavior
 * https://github.com/filamentgroup/collapsible
 * Copyright (c) 2014 Filament Group, Inc.
 * Licensed under the MIT, GPL licenses.
 */;(function($,window,document){var pluginName="collapsible";var activeTabClass="tab-active";var defaultAttrs={"tabindex":"-1","aria-selected":false};var uniqueIdPrefix=pluginName+"-id-";var counter=0;function deactivateTab($tabHeader){$tabHeader.removeClass(activeTabClass).attr(defaultAttrs)}function activateTab($tabHeader){$tabHeader.addClass(activeTabClass).attr({"aria-selected":"true"}).removeAttr("tabindex")}$(document).bind("init",function(e){var $collapsible=$(e.target).closest("."+pluginName);var $tabContainer=$collapsible.parent();var $tabNav=$tabContainer.find(".tabnav");var self;var id;var linkId;if($collapsible.is("."+pluginName)&&$tabContainer.is(".tabs")){self=$collapsible.data(pluginName);id=self.content.attr("id");$tabNav.find("[aria-controls="+id+"]").remove();if(!id){id=uniqueIdPrefix+ ++counter;self.content.attr("id",id)}linkId=id+"-link";var attrs={"id":linkId,"aria-controls":id,"role":"tab"};for(var j in defaultAttrs){attrs[j]=defaultAttrs[j]}//self.$tabHeaderListItem = $( "<li>" ).attr( "role", "presentation" );
self.$tabHeaderListItem=$("<li>");self.$tabHeader=$("<a href='#"+id+"'>"+self.header[0].innerHTML+"</a>").attr(attrs);//self.header.css( 'display', 'none' );
self.header.addClass("a11y");self.content.attr({"aria-labelledby":linkId});self.$tabHeader.bind("click",function(e){e.preventDefault();e.stopPropagation();if(!self.$tabHeader.is("."+activeTabClass)){deactivateTab($tabContainer.find("."+activeTabClass));activateTab(self.$tabHeader);self.toggle()}}).bind("keydown",function(e){var $activeTab=$tabNav.find("."+activeTabClass);var direction;// arrow key behavior
if(e.which===39){// forward
direction="next"}else if(e.which===37){// back
direction="prev"}if(direction){$activeTab.parent()[direction]().find("a").trigger("click").focus();e.preventDefault()}});if(!$tabNav.length){$tabNav=$("<ul class='tabnav' role='tablist'></nav>");$tabContainer.prepend($tabNav)}if(!self.collapsed){activateTab(self.$tabHeader);self._expand()}$tabNav.append(self.$tabHeaderListItem.append(self.$tabHeader))}})})(jQuery,window,document);;/*
Various helper functions/handlers related to collapsibles on the ProPublica site
*/(function($){"use strict";// NOTE: Disabled for 07/19 main nav overhaul, DS
//
// // We’re using the ajaxInclude pattern (https://github.com/filamentgroup/Ajax-Include-Pattern)
// // to dynamically load our Series and Topics submenus. Once those menus loaded into the page,
// // we can trigger collapsible, and attach a few event handlers
// $(".with-subnav")
//     .bind("ajaxInclude", function() {
//         var $item = $(this);
//
//         // Lint the LI so that `lib/collapsible.js` knows to act on it
//         $item
//             .addClass("collapsible collapsible-collapsed")
//             .attr("data-collapsible-set", "nav-primary")
//             .attr("data-collapsible-hover", "");
//
//         // Trigger the enhance event (which should, in turn, trigger collapsible)
//         $(document).trigger("enhance");
//     });
//
// // When the viewport’s resized, close all open masthead menus and modals
// $(window).on("resize", function() {
//     $(".masthead .collapsible-expanded .collapsible-header, .modal.collapsible-expanded .collapsible-header").trigger("click");
// });
// When the escape key is pressed, close all open modals
$(document).keyup(function(e){if(e.keyCode===27){$(".modal.collapsible-expanded .collapsible-header").trigger("click")}})})(jQuery);;!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.scrollama=t()}(this,function(){"use strict";function e(e){for(var t=e.length,n=[],r=0;r<t;r+=1)n.push(e[r]);return n}function t(e){return"scrollama__debug-offset--"+e.id}function n(e){!function(e){var n=e.id,r=e.offsetVal,o=e.stepClass,i=document.createElement("div");i.setAttribute("id",t({id:n})),i.setAttribute("class","scrollama__debug-offset"),i.style.position="fixed",i.style.left="0",i.style.width="100%",i.style.height="0px",i.style.borderTop="2px dashed black",i.style.zIndex="9999";var s=document.createElement("p");s.innerText="\"."+o+"\" trigger: "+r,s.style.fontSize="12px",s.style.fontFamily="monospace",s.style.color="black",s.style.margin="0",s.style.padding="6px",i.appendChild(s),document.body.appendChild(i)}({id:e.id,offsetVal:e.offsetVal,stepClass:e.stepEl[0].getAttribute("class")})}function r(e){var n=e.id,r=(e.stepOffsetHeight,e.offsetMargin);e.offsetVal;!function(e){var n=e.id,r=e.offsetMargin,o=(e.offsetVal,t({id:n}));document.querySelector("#"+o).style.top=r+"px"}({id:n,offsetMargin:r})}function o(e){var t=e.id,n=e.index,r=e.state,o=function(e){return"scrollama__debug-step--"+e.id+"-"+e.i}({id:t,i:n}),i=document.querySelector("#"+o+"_above"),s=document.querySelector("#"+o+"_below"),a="enter"===r?"block":"none";i&&(i.style.display=a),s&&(s.style.display=a)}return function(){var t=["stepAbove","stepBelow","stepProgress","viewportAbove","viewportBelow"],i={stepEnter:function(){},stepExit:function(){},stepProgress:function(){}},s={},a=null,f=[],u=[],c=[],d=[],p=0,l=0,v=0,g=0,m=0,b=0,x=!1,w=!1,h=!1,y=!1,E=!1,M=!1,A="down",O=[];function I(e){var t=0;if(e.offsetParent)do{t+=e.offsetTop,e=e.offsetParent}while(e);return t<0?0:t}function S(e){return+e.getAttribute("data-scrollama-index")}function H(){window.pageYOffset>m?A="down":window.pageYOffset<m&&(A="up"),m=window.pageYOffset}function P(e){s[e]&&s[e].forEach(function(e){return e.disconnect()})}function q(){var e,t;v=window.innerHeight,e=document.body,t=document.documentElement,g=Math.max(e.scrollHeight,e.offsetHeight,t.clientHeight,t.scrollHeight,t.offsetHeight),l=p*v,x&&(u=f.map(function(e){return e.offsetHeight}),c=f.map(I),w&&F()),h&&r({id:a,stepOffsetHeight:u,offsetMargin:l,offsetVal:p})}function _(e){if(e&&!w)return x&&F(),w=!0,!0;t.forEach(P),w=!1}function C(e,t){var n=S(e);void 0!==t&&(d[n].progress=t);var r={element:e,index:n,progress:d[n].progress};"enter"===d[n].state&&i.stepProgress(r)}function V(e,t){if("above"===t)for(var n=0;n<e;n++){var r=d[n];"enter"!==r.state&&"down"!==r.direction?(k(f[n],"down",!1),j(f[n],"down")):"enter"===r.state&&j(f[n],"down")}else if("below"===t)for(var o=d.length-1;o>e;o--){var i=d[o];"enter"===i.state&&j(f[o],"up"),"down"===i.direction&&(k(f[o],"up",!1),j(f[o],"up"))}}function k(e,t,n){void 0===n&&(n=!0);var r=S(e),s={element:e,index:r,direction:t};d[r].direction=t,d[r].state="enter",E&&n&&"down"===t&&V(r,"above"),E&&n&&"up"===t&&V(r,"below"),i.stepEnter&&!O[r]&&(i.stepEnter(s,d),h&&o({id:a,index:r,state:"enter"}),M&&(O[r]=!0)),y&&C(e)}function j(e,t){var n=S(e),r={element:e,index:n,direction:t};y&&("down"===t&&d[n].progress<1?C(e,1):"up"===t&&d[n].progress>0&&C(e,0)),d[n].direction=t,d[n].state="exit",i.stepExit(r,d),h&&o({id:a,index:n,state:"exit"})}function T(e){var t=e[0];H();var n=t.isIntersecting,r=t.boundingClientRect,o=t.target,i=r.top,s=r.bottom,a=i-l,f=s-l,u=S(o),c=d[u];n&&a<=0&&f>=0&&"down"===A&&"enter"!==c.state&&k(o,A),!n&&a>0&&"up"===A&&"enter"===c.state&&j(o,A)}function R(e){var t=e[0];H();var n=t.isIntersecting,r=t.boundingClientRect,o=t.target,i=r.top,s=r.bottom,a=i-l,f=s-l,u=S(o),c=d[u];n&&a<=0&&f>=0&&"up"===A&&"enter"!==c.state&&k(o,A),!n&&f<0&&"down"===A&&"enter"===c.state&&j(o,A)}function z(e){var t=e[0];H();var n=t.isIntersecting,r=t.target,o=S(r),i=d[o];n&&"down"===A&&"down"!==i.direction&&"enter"!==i.state&&(k(r,"down"),j(r,"down"))}function B(e){var t=e[0];H();var n=t.isIntersecting,r=t.target,o=S(r),i=d[o];n&&"up"===A&&"down"===i.direction&&"enter"!==i.state&&(k(r,"up"),j(r,"up"))}function N(e){var t=e[0];H();var n=t.isIntersecting,r=t.intersectionRatio,o=t.boundingClientRect,i=t.target,s=o.bottom;n&&s-l>=0&&C(i,+r.toFixed(3))}function Y(){s.stepProgress=f.map(function(e,t){var n=u[t]-l+"px 0px "+(-v+l)+"px 0px",r=function(e){for(var t=Math.ceil(e/b),n=[],r=1/t,o=0;o<t;o++)n.push(o*r);return n}(u[t]),o=new IntersectionObserver(N,{rootMargin:n,threshold:r});return o.observe(e),o})}function F(){t.forEach(P),s.viewportAbove=f.map(function(e,t){var n=g-c[t],r=l-v-u[t],o=new IntersectionObserver(z,{rootMargin:n+"px 0px "+r+"px 0px"});return o.observe(e),o}),s.viewportBelow=f.map(function(e,t){var n=-l-u[t],r=l-v+u[t]+g,o=new IntersectionObserver(B,{rootMargin:n+"px 0px "+r+"px 0px"});return o.observe(e),o}),s.stepAbove=f.map(function(e,t){var n=-l+u[t],r=new IntersectionObserver(T,{rootMargin:n+"px 0px "+(l-v)+"px 0px"});return r.observe(e),r}),s.stepAbove=f.map(function(e,t){var n=-l,r=l-v+u[t],o=new IntersectionObserver(R,{rootMargin:n+"px 0px "+r+"px 0px"});return o.observe(e),o}),y&&Y()}var D={};return D.setup=function(t){var r=t.step,o=t.offset;void 0===o&&(o=.5);var i=t.progress;void 0===i&&(i=!1);var s=t.threshold;void 0===s&&(s=4);var u=t.debug;void 0===u&&(u=!1);var c=t.order;void 0===c&&(c=!0);var l,v,g,m,w,A=t.once;return void 0===A&&(A=!1),v=(l="abcdefghijklmnopqrstuv").length,g=Date.now(),a=""+[0,0,0].map(function(e){return l[Math.floor(Math.random()*v)]}).join("")+g,m=r,void 0===w&&(w=document),(f="string"==typeof m?e(w.querySelectorAll(m)):m instanceof Element?e([m]):m instanceof NodeList?e(m):m instanceof Array?m:[]).length?(h=u,y=i,E=c,M=A,D.offsetTrigger(o),b=Math.max(1,+s),x=!0,h&&n({id:a,stepEl:f,offsetVal:p}),f.forEach(function(e,t){return e.setAttribute("data-scrollama-index",t)}),d=f.map(function(){return{direction:null,state:null,progress:0}}),q(),D.enable(),D):(console.error("scrollama error: no step elements"),D)},D.resize=function(){return q(),D},D.enable=function(){return _(!0),D},D.disable=function(){return _(!1),D},D.destroy=function(){_(!1),Object.keys(i).forEach(function(e){return i[e]=null}),Object.keys(s).forEach(function(e){return s[e]=null})},D.offsetTrigger=function(e){return e&&!isNaN(e)?(p=Math.min(Math.max(0,e),1),D):p},D.onStepEnter=function(e){return"function"==typeof e?i.stepEnter=e:console.error("scrollama error: onStepEnter requires a function"),D},D.onStepExit=function(e){return"function"==typeof e?i.stepExit=e:console.error("scrollama error: onStepExit requires a function"),D},D.onStepProgress=function(e){return"function"==typeof e?i.stepProgress=e:console.error("scrollama error: onStepProgress requires a function"),D},D}});;(function(win,doc,undefined){'use strict';function initMainNavScroll(){const mastheadWrapper=doc.querySelector(".masthead-wrapper");if(mastheadWrapper){const navScroller=scrollama();const fullBleedTop=doc.querySelector(".article-full");if(fullBleedTop){// for pages with “full bleed” opening art
navScroller.setup({step:".article-wrap",offset:0}).onStepEnter(response=>{mastheadWrapper.classList.add("stuck","compact","slide-down")}).onStepExit(response=>{mastheadWrapper.classList.remove("stuck","compact","slide-down")});win.addEventListener("resize",navScroller.resize)}else{// for all other page types
navScroller.setup({step:"main[role=\"main\"]",offset:0}).onStepEnter(response=>{// scrollama returns:
// { element, index, direction }
mastheadWrapper.classList.add("stuck","compact","slide-down")}).onStepExit(response=>{// { element, index, direction }
// TODO: Add conditional to only do this when scrolling back up
mastheadWrapper.classList.remove("stuck","compact","slide-down")});win.addEventListener("resize",navScroller.resize)}}}doc.addEventListener("DOMContentLoaded",initMainNavScroll);// OLDER WAYPOINTS-BASED CUSTOM SCROLL CODE BELOW
// TODO: UPDATE, DROP OR CONVERT THESE FOR 07/19 MAIN NAV OVERHAUL
//
// win.addEventListener("load", function() {
//
// var htmlElement = $('html')[0];
//
// // reached the bottom of page’s main content
// // if ($('.article').length) {
//     var contentBottomWaypoint = new Waypoint({
//         element: $('#content-bottom'),
//         handler: function(direction) {
//             switch (direction) {
//                 case 'down':
//                     $(htmlElement).addClass('content-bottom-reached');
//                     break;
//                 case 'up':
//                     $(htmlElement).removeClass('content-bottom-reached');
//                     break;
//             }
//         },
//         offset: '100%'
//     });
// // }
//
// // reached the global footer
// // if ($('.article').length) {
//     var pageFooterWaypoint = new Waypoint({
//         element: $('footer[role="contentinfo"]'),
//         handler: function(direction) {
//             switch (direction) {
//                 case 'down':
//                     $(htmlElement).addClass('global-footer-reached');
//                     break;
//                 case 'up':
//                     $(htmlElement).removeClass('global-footer-reached');
//                     break;
//             }
//         },
//         offset: '100%'
//     });
// // }
//
// });
})(this,document);;/*
(function(win, doc, undefined) {

    var utils = PP.utils;
    var signupStatus = utils.cookie('pp_newsletter_bigstory_subscribed');
    var displayStatus = utils.cookie('pp_newsletter_roadblock_display');
    var pageCount = utils.cookie('pp_page_count');
    var frequency = 3; // how often this should display (# of pageviews)
    // var frequency = 1; // UNCOMMENT FOR DEBUGGING

    doc.addEventListener("DOMContentLoaded", function() {

        if (pageCount == null) {
            pageCount = 0;
            utils.cookie('pp_page_count', pageCount, 365);
            //
            //
            // TODO: Add fallback for when cookies are blocked? Use session storage?
            //
            //
        }

        if (signupStatus == 'true') {
            frequency = 15;
        } else if (displayStatus == 'false') {
            frequency = 5;
        } else if (displayStatus == null) {
            utils.cookie('pp_newsletter_roadblock_display', 'true', 365);
        }

        if (pageCount % frequency == 0) {
            initFormHandlers(true);
        }

        pageCount++;
        utils.cookie('pp_page_count', pageCount, 365);

        function initFormHandlers(status) {
            if (status) {
                var formHeader = doc.querySelector('#newsletter-roadblock .collapsible-header');
                var modalClick = new Event('click');
                formHeader.dispatchEvent(modalClick);
                //
                //
                // TODO: listen for close btn/link click
                // and update cookie so modal displays fewer times
                //
                //
                // utils.cookie('pp_newsletter_interstitial_display', 'false', 365);
                //
                //
            }
        }

        var newsletterForms = doc.querySelector('.newsletter-ajax');
        newsletterForms.addEventListener("submit", function(event) {
            event.preventDefault();
            var currentForm = this;
            var submitBtn = currentForm.querySelector('input[type="submit"]');
            submitBtn.value = 'Submitting…';
            submitBtn.setAttribute('disabled', '');
            currentForm.classList.add('submitting');

            var paramHolder = [];
            var children = this.children;
            for (var i = 0; i < children.length; i++) {
                if (children[i].name && children[i].value && children[i].type != 'submit') {
                    paramHolder.push(encodeURIComponent(children[i].name) + '=' + encodeURIComponent(children[i].value));
                }
            }
            var myData = paramHolder.join('&');
            var url = this.action;
            var xhr = new XMLHttpRequest();
            xhr.open("POST", url, true);
            xhr.responseType = 'json';
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhr.onload = function(e) {
                if (xhr.status != 200) {
                    // request failed
                    console.log("xhr request failed");
                    console.log(xhr.response);
                    //
                    //
                    // TODO: Add error message text
                    // TODO: Add styles for error
                    //
                    //
                    currentForm.classList.remove('submitting');
                    currentForm.classList.add('error');
                    submitBtn.value = 'Check email address and try again';
                    submitBtn.removeAttribute('disabled');
                } else {
                    // request succeeded
                    console.log('Hooray. You’ve signed up for a newsletter.');
                    console.log(xhr.response);
                    //
                    //
                    // TODO: Add styles for success
                    //
                    //
                    currentForm.classList.remove('submitting');
                    currentForm.classList.remove('error');
                    currentForm.classList.add('success');
                    submitBtn.value = "You’re signed up!";
                    utils.cookie('pp_newsletter_bigstory_subscribed', 'true', 365);
                    //
                    //
                    // TODO: add steps to remove display of modal after success
                    //
                    //
                    // currentForm.addEventListener("animationend", function(e) {
                    //     if (e.target.classList.contains('slide-up')) {
                    //         navMenuToggle.classList.remove('on');
                    //         navMenu.classList.remove('on');
                    //         navMenu.classList.remove('slide-up');
                    //     }
                    // });
                    setTimeout(function() {
                        //
                        // TODO: Update this to use event delegation/bubbling.
                        // Ex. pre-collapsible using 'closest' below.
                        //
                        // var modal = currentForm.closest('.interstitial');
                        // modal.classList.remove('on');
                        //
                        var formHeader = doc.querySelector('#newsletter-roadblock .collapsible-header');
                        var modalClick = new Event('click');
                        formHeader.dispatchEvent(modalClick);
                    }, 2000);

                }
            };
            xhr.onerror = function(e) {
                // non-HTTP error
                console.log("A non-HTTP error occurred with this form.");
                currentForm.classList.remove('submitting');
                currentForm.classList.add('error');
                submitBtn.value = 'Check email address and try again';
                submitBtn.removeAttribute('disabled');
            };
            xhr.send(myData);

        });

    });

})(this, document);
*/;/*

“Browse by” archive jump menu - change window.location.href onchange

*/(function($){"use strict";var componentName="menu-jump",enhancedAttr="data-enhanced-"+componentName,initSelector="."+componentName+":not(["+enhancedAttr+"])";$.fn[componentName]=function(){return this.each(function(){var $select=$(this);// onchange handler
$select.on("change",function(){var select=this;if(select.options.length>0){var value=select.options[select.selectedIndex].value;if(value&&value.length>0){window.location.href=value}}})})};// auto-init on enhance (which is called on domready)
$(document).bind("enhance",function(e){var $sel=$(e.target).is(initSelector)?$(e.target):$(initSelector,e.target);$sel[componentName]().attr(enhancedAttr,"true")})})(jQuery);;/*
 Populate 'Read Next' section
*/(function($){// Define vars
var myurl=window.location.href;/* Onload events */$(window).on("load",function(){$.get("https://www.propublica.org/readnext/",{url:myurl},function(data){// Define vars
var output="<h3 class=\"title\">What to Read Next</h3>";// Loop through input and build mark-up
data.forEach(function(entry){var url=entry.url;output+="<div class=\"story-entry region-national\">";// IMG
if(entry.hasOwnProperty("img")&&entry.img.hasOwnProperty("1:1")){// then 150w, then 300w, and failing that fullsize
var imgurl=entry.img["1:1"].full;if(entry.img["1:1"].oneOne150w){imgurl=entry.img["1:1"].oneOne150w}else if(entry.img["1:1"].oneOne300w){imgurl=entry.img["1:1"].oneOne300w}else if(entry.img["1:1"].oneOne600w){imgurl=entry.img["1:1"].oneOne600w}output+="<div class=\"lead-art\"><a class=\"aspect-1-1\" href=\""+url+"\">";output+="<img src=\""+imgurl+"\" srcset=\"";for(var isize in entry.img["1:1"]){switch(isize){case"oneOne150w":output+=entry.img["1:1"][isize]+" 150w,";break;case"oneOne300w":output+=entry.img["1:1"][isize]+" 300w,";break;case"oneOne600w":output+=entry.img["1:1"][isize]+" 600w,";}}// hack to remove trailing comma
if(output[output.length-1]==","){output=output.slice(0,-1)}output+="\" sizes=\"(min-width: 1720px) 89px, (min-width: 960px) calc(4.86vw + 6px), (min-width: 780px) calc(7.5vw + 4px), (min-width: 600px) 11.88vw, 18.21vw\"";output+="/></a></div>"}// HED + DEK
output+="<div class=\"description\"><h4 class=\"hed\"><a href=\""+url+"\">"+entry.title+"</a></h4>";if(entry.hasOwnProperty("deck")){output+="<p class=\"dek\">"+entry.deck+"</p>"}output+="</div></div>"});// Drop in
$(".related-stories").html(output);// // Make Waypoints recalculate trigger points since we’re adding content to the page
// Waypoint.refreshAll();
})})})(jQuery);;/*
 Generate content for republishing
*/(function($){// Recursively get content of article-body
var ccsimplify=function(el){var tagname=el.tagName;var allowed="h1,h2,h3,h4,h5,h6,a,abbr,acronym,ol,ul,li,blockquote,div,b,cite,code,em,i,p,pre,q,small,strike,span,strong,sub,sup,tt,u,table,td,tr";var allowedArr=(allowed+","+allowed.toUpperCase()).split(",");if(allowedArr.indexOf(tagname)>-1){// skip top & bottom notes
if(el.className=="top-notes"||el.className=="bottom-notes"){return""}var ret="<"+tagname.toLowerCase();if(tagname=="a"||tagname=="A"){ret+=" href="+el.getAttribute("href")}ret+=">";var kiddos=el.childNodes;for(var i=0;i<kiddos.length;i++){if(kiddos[i].nodeName=="#text"){var mytext=$(kiddos[i]).text();checkempty=$.trim($(kiddos[i]).text());if(checkempty!=""){ret+=mytext}}else{ret+=ccsimplify(kiddos[i])}}ret+="</"+tagname.toLowerCase()+">";return ret}else{return""}};var repub=function(){// Define vars
var url="https://"+(window.location.host+"/"+window.location.pathname).replace("//","/");var bigEl=$("main.content");var hed=$("h1.hed",bigEl).html();var byline=$("p.byline",bigEl).text();var articlebody=document.getElementsByClassName("article-body")[0];var newsletter;if(dataLayer[0].contentRegion=="Illinois"){newsletter="<p><em>ProPublica Illinois is an independent, nonprofit newsroom that produces investigative journalism with moral force. Sign up for <a href=\"https://go.propublica.org/ppil-cc\">The ProPublica Illinois newsletter</a> for weekly updates</em>.</p>"}else{newsletter="<p><em>ProPublica is a Pulitzer Prize-winning investigative newsroom.  Sign up for <a href=\"https://go.propublica.org/bigstory-20180905-CC\">The Big Story newsletter</a> to receive stories like this one in your inbox</em>.</p>"}var copy="<h1>"+hed+"</h1>"+newsletter+ccsimplify(articlebody)+"<link rel=\"canonical\" href=\""+url+"\"><meta name=\"syndication-source\" content=\""+url+"\"><script type=\"text/javascript\" src=\"http://pixel.propublica.org/pixel.js\" async></script>";var fulltext=$("<textarea readonly></textarea>");fulltext.text(copy);// Replace text in cc div
var ccEl=$("div#modal-republish");$("h3.title",ccEl).text(hed);$("p.byline",ccEl).text(byline);$("div.republish-copy",ccEl).append(fulltext)};/* Onload events */$(window).on("load",function(){// check for active cc link & if there, generate content
if($("#republish-link").length){repub()}})})(jQuery);;function grecaptchaLoaded(){grecaptcha.ready(function(){grecaptcha.execute("6LdI1rAUAAAAACI0GsFv-yRpC0tPF5ECiIMDUz2x",{action:"pageView"})})}function recaptchaInit(){function createTokenInput(parentForm,name,token){var input=document.createElement("input");input.setAttribute("type","hidden");input.setAttribute("value",token);input.setAttribute("name",name);parentForm.appendChild(input)}grecaptcha.ready(function(){grecaptcha.execute("6LdI1rAUAAAAACI0GsFv-yRpC0tPF5ECiIMDUz2x",{action:"formSubmit"}).then(function(token){var recaptcha=document.querySelectorAll(".g-recaptcha");recaptcha.forEach(function(recapt){var parentForm=recapt.form,response=parentForm.querySelector("[name=\"g-recaptcha-response\"]"),vthree=parentForm.querySelector("[name=\"vthree\"]");if(response===null){createTokenInput(parentForm,"g-recaptcha-response",token)}if(vthree===null){createTokenInput(parentForm,"vthree",token)}})})})};(function($){// Initialize Ajax-Include pattern
$("[data-append], [data-replace], [data-after], [data-before]").ajaxInclude();// Initial appendAround
// $("[data-set] > *").appendAround();
// Trigger the “enhance” event
$(document).trigger("enhance")})(jQuery);
//# sourceMappingURL=main.a5b760ba.js.map
