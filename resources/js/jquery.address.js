/*
 * jQuery Address Plugin v1.2
 * http://www.asual.com/jquery/address/
 *
 * Copyright (c) 2009-2010 Rostislav Hristov
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Date: 2010-05-05 08:15:54 +0300 (Wed, 05 May 2010)
 */
(function(c){c.address=function(){var v=function(a){c(c.address).trigger(c.extend(c.Event(a),function(){for(var b={},g=c.address.parameterNames(),h=0,q=g.length;h<q;h++)b[g[h]]=c.address.parameter(g[h]);return{value:c.address.value(),path:c.address.path(),pathNames:c.address.pathNames(),parameterNames:g,parameters:b,queryString:c.address.queryString()}}.call(c.address)))},w=function(a,b,g){c(c.address).bind(a,b,g);return c.address},p=function(){var a=d.href.indexOf("#");return a!=-1?W(J(t(d.href.substr(a+
1),j))):""},X=function(){return"javascript"},Y=function(a,b){if(i.strict)a=b?a.substr(0,1)!="/"?"/"+a:a:a==""?"/":a;return a},K=function(a,b){return u&&d.protocol=="file:"?b?f.replace(/\?/,"%3F"):f.replace(/%253F/,"?"):a},t=function(a,b){if(i.crawlable&&b)return(a!=""?"!":"")+a;return a.replace(/^\!/,"")},x=function(a,b){return parseInt(a.css(b),10)},Z=function(a){for(var b,g,h=0,q=a.childNodes.length;h<q;h++){if(a.childNodes[h].src)b=String(a.childNodes[h].src);if(g=Z(a.childNodes[h]))b=g}return b},
H=function(){if(!L){var a=p(),b=f!=a;if(y&&m<523){if(D!=F.length){D=F.length;if(typeof z[D-1]!=A)f=z[D-1];G(j)}}else if(u&&m<7&&b)d.reload();else if(b){f=a;G(j)}}},G=function(a){v($);v(a?aa:ba);E(ca,10)},ca=function(){var a=(d.pathname+(/\/$/.test(d.pathname)?"":"/")+(c.address?c.address.value():"")).replace(/\/\//,"/").replace(/^\/$/,""),b=n[i.tracker];if(typeof b==M)b(a);else if(typeof urchinTracker==M)urchinTracker(a);else if(typeof pageTracker!=A&&typeof pageTracker._trackPageview==M)pageTracker._trackPageview(a);
else typeof _gaq!=A&&typeof _gaq.push==M&&_gaq.push(["_trackPageview",a])},da=function(){var a=l.contentWindow.document;a.open();a.write("<html><head><title>"+k.title+"</title><script>var "+o+' = "'+p()+'";<\/script></head></html>');a.close()},fa=function(){if(!ea){ea=e;var a=c("body").ajaxComplete(function(){ja.call(this)}).trigger("ajaxComplete");if(i.wrap){c("body > *").wrapAll('<div style="padding:'+(x(a,"marginTop")+x(a,"paddingTop"))+"px "+(x(a,"marginRight")+x(a,"paddingRight"))+"px "+(x(a,
"marginBottom")+x(a,"paddingBottom"))+"px "+(x(a,"marginLeft")+x(a,"paddingLeft"))+'px;" />').parent().wrap('<div id="'+o+'" style="height:100%; overflow:auto;'+(y?window.statusbar.visible&&!/chrome/i.test(O)?"":" resize:both;":"")+'" />');c("html, body").css({height:"100%",margin:0,padding:0,overflow:"hidden"});y&&c('<style type="text/css" />').appendTo("head").text("#"+o+"::-webkit-resizer { background-color: #fff; }")}if(u&&m<8){a=k.getElementsByTagName("frameset")[0];l=k.createElement((a?"":"i")+
"frame");if(a){a.insertAdjacentElement("beforeEnd",l);a[a.cols?"cols":"rows"]+=",0";l.src=X()+":"+j;l.noResize=e;l.frameBorder=l.frameSpacing=0}else{l.src=X()+":"+j;l.style.display="none";k.body.insertAdjacentElement("afterBegin",l)}E(function(){c(l).bind("load",function(){var b=l.contentWindow;f=typeof b[o]!=A?b[o]:"";if(f!=p()){G(j);d.hash=K(t(f,e),e)}});typeof l.contentWindow[o]==A&&da()},50)}else if(y){if(m<418){c(k.body).append('<form id="'+o+'" style="position:absolute;top:-9999px;" method="get"></form>');
P=k.getElementById(o)}if(typeof d[o]==A)d[o]={};if(typeof d[o][d.pathname]!=A)z=d[o][d.pathname].split(",")}E(function(){v("init");G(j)},1);if(u&&m>7||!u&&"on"+I in n)if(n.addEventListener)n.addEventListener(I,H,false);else n.attachEvent&&n.attachEvent("on"+I,H);else ka(H,50);c("a").filter("[rel*=address:]").address()}},la=function(){if(n.removeEventListener)n.removeEventListener(I,H,false);else n.detachEvent&&n.detachEvent("on"+I,H)},ja=function(){var a=d.pathname.replace(/\/$/,"");c("a:not([href^=http])",
this).each(function(){var b=c(this).attr("href").replace(new RegExp(a+"/?$"),"");if(b==""||b.indexOf("_escaped_fragment_")!=-1)c(this).attr("href","#"+decodeURIComponent(b.replace(/\/(.*)\?_escaped_fragment_=(.*)$/,"!$2")))})},o="jQueryAddress",M="function",A="undefined",I="hashchange",$="change",aa="internalChange",ba="externalChange",e=true,j=false,i={autoUpdate:e,crawlable:j,history:e,strict:e,wrap:j},r=c.browser,m=parseFloat(c.browser.version),ga=r.mozilla,u=r.msie,s=r.opera,y=r.safari,Q=j,n=
function(){try{return top.document!==undefined?top:window}catch(a){return window}}(),k=n.document,F=n.history,d=n.location,ka=setInterval,E=setTimeout,J=decodeURI,W=encodeURI,O=navigator.userAgent,l,P,B=Z(document),ha=B?B.indexOf("?"):-1,R=k.title,D=F.length,L=j,ea=j,S=e,ia=e,N=j,z=[],f=p();if(u){m=parseFloat(O.substr(O.indexOf("MSIE")+4));if(k.documentMode&&k.documentMode!=m)m=k.documentMode!=8?7:8;c(document).bind("propertychange",function(){if(k.title!=R&&k.title.indexOf("#"+p())!=-1)k.title=R})}if(Q=
ga&&m>=1||u&&m>=6||s&&m>=9.5||y&&m>=312){for(r=1;r<D;r++)z.push("");z.push(f);if(u&&d.hash!=f)d.hash="#"+K(t(f,e),e);if(s)history.navigationMode="compatible";if(B&&ha!=-1){B=B.substr(ha+1).split("&");for(r=0;r<B.length;r++){s=B[r].split("=");if(/^(autoUpdate|crawlable|history|strict|wrap)$/.test(s[0]))i[s[0]]=isNaN(s[1])?/^(true|yes)$/i.test(s[1]):parseInt(s[1],10)!==0;if(/^tracker$/.test(s[0]))i[s[0]]=s[1]}}document.readyState=="complete"&&fa();c(fa);c(window).bind("unload",la)}else if(!Q&&p()!=
""||y&&m<418&&p()!=""&&d.search!=""){k.open();k.write('<html><head><meta http-equiv="refresh" content="0;url='+encodeURI(d.href.substr(0,d.href.indexOf("#")))+'" /></head></html>');k.close()}else ca();return{bind:function(a,b,g){return w(a,b,g)},init:function(a){return w("init",a)},change:function(a){return w($,a)},internalChange:function(a){return w(aa,a)},externalChange:function(a){return w(ba,a)},baseURL:function(){var a=d.href;if(a.indexOf("#")!=-1)a=a.substr(0,a.indexOf("#"));if(/\/$/.test(a))a=
a.substr(0,a.length-1);return a},autoUpdate:function(a){if(a!==undefined){i.autoUpdate=a;return this}return i.autoUpdate},crawlable:function(a){if(a!==undefined){i.crawlable=a;return this}return i.crawlable},history:function(a){if(a!==undefined){i.history=a;return this}return i.history},strict:function(a){if(a!==undefined){i.strict=a;return this}return i.strict},tracker:function(a){if(a!==undefined){i.tracker=a;return this}return i.tracker},wrap:function(a){if(a!==undefined){i.wrap=a;return this}return i.wrap},
update:function(){N=e;this.value(f);N=j;return this},title:function(a){if(a!==undefined){a=J(a);E(function(){R=k.title=a;if(ia&&l&&l.contentWindow&&l.contentWindow.document){l.contentWindow.document.title=a;ia=j}if(!S&&ga)d.replace(d.href.indexOf("#")!=-1?d.href:d.href+"#");S=j},50);return this}return k.title},value:function(a){if(a!==undefined){a=W(J(Y(a,e)));if(a=="/")a="";if(f==a&&!N)return;S=e;f=a;if(i.autoUpdate||N){L=e;G(e);z[F.length]=f;if(y)if(i.history){d[o][d.pathname]=z.toString();D=F.length+
1;if(m<418){if(d.search==""){P.action="#"+t(f,e);P.submit()}}else if(m<523||f==""){a=k.createEvent("MouseEvents");a.initEvent("click",e,e);var b=k.createElement("a");b.href="#"+t(f,e);b.dispatchEvent(a)}else d.hash="#"+t(f,e)}else d.replace("#"+t(f,e));else if(f!=p())if(i.history)d.hash="#"+K(t(f,e),e);else d.replace("#"+t(f,e));u&&m<8&&i.history&&E(da,50);if(y)E(function(){L=j},1);else L=j}return this}if(!Q)return null;return J(Y(K(f,j),j))},path:function(a){if(a!==undefined){var b=this.queryString(),
g=this.hash();this.value(a+(b?"?"+b:"")+(g?"#"+g:""));return this}return this.value().split("#")[0].split("?")[0]},queryString:function(a){if(a!==undefined){var b=this.hash();this.value(this.path()+(a?"?"+a:"")+(b?"#"+b:""));return this}a=this.value().split("?");return a.slice(1,a.length).join("?").split("#")[0]},parameter:function(a,b,g){var h,q;if(b!==undefined){var T=this.parameterNames();q=[];for(h=0;h<T.length;h++){var U=T[h],C=this.parameter(U);if(typeof C=="string")C=[C];if(U==a)C=b===null||
b==""?[]:g?C.concat([b]):[b];for(var V=0;V<C.length;V++)q.push(U+"="+C[V])}c.inArray(a,T)==-1&&b!==null&&b!=""&&q.push(a+"="+b);this.queryString(q.join("&"));return this}if(b=this.queryString()){q=b.split("&");b=[];for(h=0;h<q.length;h++){g=q[h].split("=");g[0]==a&&b.push(g[1])}if(b.length!==0)return b.length!=1?b:b[0]}},pathNames:function(){var a=this.path(),b=a.replace(/\/{2,9}/g,"/").split("/");if(a.substr(0,1)=="/"||a.length===0)b.splice(0,1);a.substr(a.length-1,1)=="/"&&b.splice(b.length-1,1);
return b},parameterNames:function(){var a=this.queryString(),b=[];if(a&&a.indexOf("=")!=-1){a=a.split("&");for(var g=0;g<a.length;g++){var h=a[g].split("=")[0];c.inArray(h,b)==-1&&b.push(h)}}return b},hash:function(a){if(a!==undefined){this.value(this.value().split("#")[0]+(a?"#"+a:""));return this}a=this.value().split("#");return a.slice(1,a.length).join("#")}}}();c.fn.address=function(v){var w=function(){if(c(this).is("a")){var p=v?v.call(this):/address:/.test(c(this).attr("rel"))?c(this).attr("rel").split("address:")[1].split(" ")[0]:
c(this).attr("href").replace(/^#\!?/,"");c.address.value(p);return false}};c(this).click(w).live("click",w);c(this).live("submit",function(){if(c(this).is("form")){var p=v?v.call(this):c(this).attr("action")+"?"+c(this).serialize();c.address.value(p);return false}});return this}})(jQuery);