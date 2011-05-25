/*
Copyright 2011, KISSY UI Library v1.20dev
MIT Licensed
build time: ${build.time}
*/
KISSY.add("dom/attr",function(k,b,v,o){function w(d){if(k.isArray(d)){for(var a=0;a<d.length;a++)d[a]=w(d[a]);return d}else return d+f}var y=document.documentElement,j=!y.hasAttribute,g=y.textContent!==o?"textContent":"innerText",f="",s=b._isElementNode,m=/^(?:href|src|style)/,p=/^(?:href|src|colspan|rowspan)/,u=/\r/g,t=/^(?:radio|checkbox)/,e={readonly:"readOnly"},l={val:1,css:1,html:1,text:1,data:1,width:1,height:1,offset:1};j&&k.mix(e,{"for":"htmlFor","class":"className"});var r={tabindex:{getter:function(d){return d.tabIndex},
setter:function(d,a){if(isNaN(parseInt(a))){d.removeAttribute("tabindex");d.removeAttribute("tabIndex")}else d.tabIndex=a}},style:{getter:function(d){return d.style.cssText},setter:function(d,a){d.style.cssText=a}},checked:{setter:function(d,a){d.checked=!!a}},disabled:{setter:function(d,a){d.disabled=!!a}}};k.mix(b,{attr:function(d,a,c,h){if(k.isPlainObject(a)){h=c;for(var q in a)b.attr(d,q,a[q],h)}else if(a=k.trim(a)){a=a.toLowerCase();if(h&&l[a])return b[a](d,c);a=e[a]||a;var x=r[a];if(c===o){d=
b.get(d);if(!s(d))return null;if(x&&x.getter)return x.getter(d);var i;m.test(a)||(i=d[a]);if(i===o)i=d.getAttribute(a);if(j)if(p.test(a))i=d.getAttribute(a,2);return i===o?null:i}else k.each(b.query(d),function(n){if(s(n))x&&x.setter?x.setter(n,c):n.setAttribute(a,f+c)})}},removeAttr:function(d,a){a=a.toLowerCase();k.each(b.query(d),function(c){if(s(c)){b.attr(c,a,f);c.removeAttribute(a)}})},hasAttr:j?function(d,a){a=a.toLowerCase();var c=b.get(d).getAttributeNode(a);return!!(c&&c.specified)}:function(d,
a){a=a.toLowerCase();return b.get(d).hasAttribute(a)},val:function(d,a){if(a===o){var c=b.get(d);if(!s(c))return null;if(c&&c.nodeName.toUpperCase()==="option".toUpperCase())return(c.attributes.value||{}).specified?c.value:c.text;if(c&&c.nodeName.toUpperCase()==="select".toUpperCase()){var h=c.selectedIndex,q=c.options;if(h<0)return null;else if(c.type==="select-one")return b.val(q[h]);c=[];for(var x=0,i=q.length;x<i;++x)q[x].selected&&c.push(b.val(q[x]));return c}if(v.webkit&&t.test(c.type))return c.getAttribute("value")===
null?"on":c.value;return(c.value||f).replace(u,f)}k.each(b.query(d),function(n){if(n&&n.nodeName.toUpperCase()==="select".toUpperCase()){a=w(a);var z=k.makeArray(a),A=n.options,B;x=0;for(i=A.length;x<i;++x){B=A[x];B.selected=k.inArray(b.val(B),z)}if(!z.length)n.selectedIndex=-1}else if(s(n))n.value=a})},text:function(d,a){if(a===o){var c=b.get(d);if(s(c))return c[g]||f;else if(b._nodeTypeIs(c,3))return c.nodeValue;return null}else k.each(b.query(d),function(h){if(s(h))h[g]=a;else if(b._nodeTypeIs(h,
3))h.nodeValue=a})}});return b},{requires:["dom/base","ua"]});KISSY.add("dom/base",function(k,b){function v(o,w){return o&&o.nodeType===w}return{_isElementNode:function(o){return v(o,1)},_getWin:function(o){return o&&"scrollTo"in o&&o.document?o:v(o,9)?o.defaultView||o.parentWindow:o==b?window:false},_nodeTypeIs:v,_isNodeList:function(o){return o&&!o.nodeType&&o.item&&!o.setTimeout}}});
KISSY.add("dom/class",function(k,b,v){function o(j,g,f,s){if(!(g=k.trim(g)))return s?false:v;j=b.query(j);var m=0,p=j.length,u=g.split(w);for(g=[];m<u.length;m++){var t=k.trim(u[m]);t&&g.push(t)}for(m=0;m<p;m++){u=j[m];if(b._isElementNode(u)){u=f(u,g,g.length);if(u!==v)return u}}if(s)return false;return v}var w=/[\.\s]\s*\.?/,y=/[\n\t]/g;k.mix(b,{hasClass:function(j,g){return o(j,g,function(f,s,m){if(f=f.className){f=" "+f+" ";for(var p=0,u=true;p<m;p++)if(f.indexOf(" "+s[p]+" ")<0){u=false;break}if(u)return true}},
true)},addClass:function(j,g){o(j,g,function(f,s,m){var p=f.className;if(p){var u=" "+p+" ";p=p;for(var t=0;t<m;t++)if(u.indexOf(" "+s[t]+" ")<0)p+=" "+s[t];f.className=k.trim(p)}else f.className=g},v)},removeClass:function(j,g){o(j,g,function(f,s,m){var p=f.className;if(p)if(m){p=(" "+p+" ").replace(y," ");for(var u=0,t;u<m;u++)for(t=" "+s[u]+" ";p.indexOf(t)>=0;)p=p.replace(t," ");f.className=k.trim(p)}else f.className=""},v)},replaceClass:function(j,g,f){b.removeClass(j,g);b.addClass(j,f)},toggleClass:function(j,
g,f){var s=k.isBoolean(f),m;o(j,g,function(p,u,t){for(var e=0,l;e<t;e++){l=u[e];m=s?!f:b.hasClass(p,l);b[m?"removeClass":"addClass"](p,l)}},v)}});return b},{requires:["dom/base"]});
KISSY.add("dom/create",function(k,b,v,o){function w(i,n){if(k.isPlainObject(n))if(p(i))b.attr(i,n,true);else i.nodeType==11&&k.each(i.childNodes,function(z){b.attr(z,n,true)});return i}function y(i,n){var z=null,A,B;if(i&&(i.push||i.item)&&i[0]){n=n||i[0].ownerDocument;z=n.createDocumentFragment();if(i.item)i=k.makeArray(i);A=0;for(B=i.length;A<B;A++)z.appendChild(i[A])}return z}function j(i,n,z,A){if(z){var B=k.guid("ks-tmp-"),E=RegExp(e);n+='<span id="'+B+'"></span>';k.available(B,function(){var D=
b.get("head"),C,G,H,F,I,J;for(E.lastIndex=0;C=E.exec(n);)if((H=(G=C[1])?G.match(r):false)&&H[2]){C=f.createElement("script");C.src=H[2];if((F=G.match(d))&&F[2])C.charset=F[2];C.async=true;D.appendChild(C)}else if((J=C[2])&&J.length>0)k.globalEval(J);(I=f.getElementById(B))&&b.remove(I);k.isFunction(A)&&A()});g(i,n)}else{g(i,n);k.isFunction(A)&&A()}}function g(i,n){n=(n+"").replace(e,"");try{i.innerHTML=n}catch(z){for(;i.firstChild;)i.removeChild(i.firstChild);n&&i.appendChild(b.create(n))}}var f=
document,s=v.ie,m=b._nodeTypeIs,p=b._isElementNode,u=f.createElement("div"),t=/<(\w+)/,e=/<script([^>]*)>([^<]*(?:(?!<\/script>)<[^<]*)*)<\/script>/ig,l=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,r=/\ssrc=(['"])(.*?)\1/i,d=/\scharset=(['"])(.*?)\1/i;k.mix(b,{create:function(i,n,z){if(m(i,1)||m(i,3)){n=i;z=n.cloneNode(true);if(v.ie<8)z.innerHTML=n.innerHTML;return z}if(!(i=k.trim(i)))return null;var A=null;A=b._creators;var B,E="div",D;if(B=l.exec(i))A=(z||f).createElement(B[1]);else{if((B=t.exec(i))&&(D=B[1])&&
k.isFunction(A[D=D.toLowerCase()]))E=D;i=A[E](i,z).childNodes;A=i.length===1?i[0].parentNode.removeChild(i[0]):y(i,z||f)}return w(A,n)},_creators:{div:function(i,n){var z=n?n.createElement("div"):u;z.innerHTML=i;return z}},html:function(i,n,z,A){if(n===o){i=b.get(i);if(p(i))return i.innerHTML;return null}else k.each(b.query(i),function(B){p(B)&&j(B,n,z,A)})},remove:function(i){k.each(b.query(i),function(n){n.parentNode&&n.parentNode.removeChild(n)})},_nl2frag:y});if(s||v.gecko||v.webkit){var a=b._creators,
c=b.create,h=/(?:\/(?:thead|tfoot|caption|col|colgroup)>)+\s*<tbody/,q={option:"select",td:"tr",tr:"tbody",tbody:"table",col:"colgroup",legend:"fieldset"},x;for(x in q)(function(i){a[x]=function(n,z){return c("<"+i+">"+n+"</"+i+">",null,z)}})(q[x]);if(s){a.script=function(i,n){var z=n?n.createElement("div"):u;z.innerHTML="-"+i;z.removeChild(z.firstChild);return z};if(s<8)a.tbody=function(i,n){var z=c("<table>"+i+"</table>",null,n),A=z.children.tags("tbody")[0];z.children.length>1&&A&&!h.test(i)&&
A.parentNode.removeChild(A);return z}}k.mix(a,{optgroup:a.option,th:a.td,thead:a.tbody,tfoot:a.tbody,caption:a.tbody,colgroup:a.tbody})}return b},{requires:["./base","ua"]});
KISSY.add("dom/data",function(k,b,v){var o=window,w="_ks_data_"+k.now(),y={},j={},g={};g.applet=1;g.object=1;g.embed=1;k.mix(b,{hasData:function(f,s){var m=b.get(f),p;if(!m||m.nodeName&&g[m.nodeName.toLowerCase()])return false;if(m==o)m=j;p=m&&m.nodeType;if(m=(p?y:m)[p?m[w]:w])if(s!==v){if(s in m)return true}else return true;return false},data:function(f,s,m){if(k.isPlainObject(s))for(var p in s)b.data(f,p,s[p]);else if(m===v){f=b.get(f);if(!f||f.nodeName&&g[f.nodeName.toLowerCase()])return null;
if(f==o)f=j;p=f&&f.nodeType;p=f=(p?y:f)[p?f[w]:w];if(k.isString(s)&&f)p=f[s];return p===v?null:p}else b.query(f).each(function(u){if(!(!u||u.nodeName&&g[u.nodeName.toLowerCase()])){if(u==o)u=j;var t=y,e;if(u&&u.nodeType){if(!(e=u[w]))e=u[w]=k.guid()}else{e=w;t=u}if(s&&m!==v){t[e]||(t[e]={});t[e][s]=m}}})},removeData:function(f,s){b.query(f).each(function(m){if(m){if(m==o)m=j;var p,u=y,t,e=m&&m.nodeType;if(e)p=m[w];else{u=m;p=w}if(p){t=u[p];if(s){if(t){delete t[s];k.isEmptyObject(t)&&b.removeData(m)}}else{if(e)m.removeAttribute&&
m.removeAttribute(w);else try{delete m[w]}catch(l){}e&&delete u[p]}}}})}});return b},{requires:["dom/base"]});
KISSY.add("dom/insertion",function(k,b){function v(w,y,j){w=b.query(w);y=b.query(y);if(w=o(w)){var g;if(y.length>1)g=w.cloneNode(true);for(var f=0;f<y.length;f++){var s=y[f],m=f>0?g.cloneNode(true):w;j(m,s)}}}var o=b._nl2frag;k.mix(b,{insertBefore:function(w,y){v(w,y,function(j,g){g.parentNode&&g.parentNode.insertBefore(j,g)})},insertAfter:function(w,y){v(w,y,function(j,g){g.parentNode&&g.parentNode.insertBefore(j,g.nextSibling)})},append:function(w,y){v(w,y,function(j,g){g.appendChild(j)})},prepend:function(w,
y){v(w,y,function(j,g){g.insertBefore(j,g.firstChild)})}});b.prependTo=b.prepend;b.appendTo=b.append;return b},{requires:["dom/base"]});
KISSY.add("dom/offset",function(k,b,v,o){function w(a){var c=0,h=0,q=f(a[u]);if(a[d]){a=a[d]();c=a[t];h=a[e];if(v.mobile!=="apple"){c+=b[l](q);h+=b[r](q)}}return{left:c,top:h}}var y=window,j=b._isElementNode,g=b._nodeTypeIs,f=b._getWin,s=document.compatMode==="CSS1Compat",m=Math.max,p=parseInt,u="ownerDocument",t="left",e="top",l="scrollLeft",r="scrollTop",d="getBoundingClientRect";k.mix(b,{offset:function(a,c){if(!(a=b.get(a))||!a[u])return null;if(c===o)return w(a);var h=a;if(b.css(h,"position")===
"static")h.style.position="relative";var q=w(h),x={},i,n;for(n in c){i=p(b.css(h,n),10)||0;x[n]=i+c[n]-q[n]}b.css(h,x)},scrollIntoView:function(a,c,h,q){if((a=b.get(a))&&a[u]){q=q===o?true:!!q;h=h===o?true:!!h;if(!c||c===y)a.scrollIntoView(h);else{c=b.get(c);if(g(c,9))c=f(c);var x=!!f(c),i=b.offset(a),n=x?{left:b.scrollLeft(c),top:b.scrollTop(c)}:b.offset(c),z={left:i[t]-n[t],top:i[e]-n[e]};i=x?b.viewportHeight(c):c.clientHeight;x=x?b.viewportWidth(c):c.clientWidth;n=b[l](c);var A=b[r](c),B=n+x,E=
A+i,D=a.offsetHeight;a=a.offsetWidth;var C=z.left+n-(p(b.css(c,"borderLeftWidth"))||0);z=z.top+A-(p(b.css(c,"borderTopWidth"))||0);var G=C+a,H=z+D,F,I;if(D>i||z<A||h)F=z;else if(H>E)F=H-i;if(q)if(a>x||C<n||h)I=C;else if(G>B)I=G-x;b[r](c,F);b[l](c,I)}}},docWidth:0,docHeight:0,viewportHeight:0,viewportWidth:0});k.each(["Left","Top"],function(a,c){var h="scroll"+a;b[h]=function(q,x){if(k.isNumber(q))arguments.callee(y,q);else{q=b.get(q);var i=0,n=f(q);if(n){if(x!==o){i=a=="Left"?x:b.scrollLeft(n);var z=
a=="Top"?x:b.scrollTop(n);n.scrollTo(i,z)}i=n.document;i=n[c?"pageYOffset":"pageXOffset"]||i.documentElement[h]||i.body[h]}else if(j(q=b.get(q)))i=x!==o?q[h]=x:q[h];return x===o?i:o}}});k.each(["Width","Height"],function(a){b["doc"+a]=function(c){c=b.get(c);c=f(c).document;return m(s?c.documentElement["scroll"+a]:c.body["scroll"+a],b["viewport"+a](c))};b["viewport"+a]=function(c){c=b.get(c);var h="inner"+a;c=f(c);var q=c.document;return h in c?c[h]:s?q.documentElement["client"+a]:q.body["client"+
a]}});return b},{requires:["./base","ua"]});
KISSY.add("dom/selector",function(k,b,v){function o(e,l){var r,d,a=[],c;d=k.require("sizzle");l=w(l);if(k.isString(e))if(e.indexOf(",")!=-1){r=e.split(",");k.each(r,function(h){a.push.apply(a,k.makeArray(o(h,l)))})}else{e=k.trim(e);if(p.test(e)){if(d=y(e.slice(1),l))a=[d]}else if(r=u.exec(String(e))){d=r[1];c=r[2];r=r[3];if(l=d?y(d,l):l)if(r)if(!d||e.indexOf(m)!==-1)a=k.makeArray(t(r,c,l));else{if((d=y(d,l))&&b.hasClass(d,r))a=[d]}else if(c)a=j(c,l)}else if(d)a=d(e,l);else g(e)}else if(e&&(k.isArray(e)||
s(e)))a=e;else if(e)a=[e];if(s(a))a=k.makeArray(a);a.each=function(h,q){return k.each(a,h,q)};return a}function w(e){if(e===v)e=f;else if(k.isString(e)&&p.test(e))e=y(e.slice(1),f);else if(k.isArray(e)||s(e))e=e[0]||null;else if(e&&e.nodeType!==1&&e.nodeType!==9)e=null;return e}function y(e,l){if(!l)return null;if(l.nodeType!==9)l=l.ownerDocument;return l.getElementById(e)}function j(e,l){return l.getElementsByTagName(e)}function g(e){k.error("Unsupported selector: "+e)}var f=document,s=b._isNodeList,
m=" ",p=/^#[\w-]+$/,u=/^(?:#([\w-]+))?\s*([\w-]+|\*)?\.?([\w-]+)?$/;(function(){var e=f.createElement("div");e.appendChild(f.createComment(""));if(e.getElementsByTagName("*").length>0)j=function(l,r){var d=k.makeArray(r.getElementsByTagName(l));if(l==="*"){for(var a=[],c=0,h=0,q;q=d[c++];)if(q.nodeType===1)a[h++]=q;d=a}return d}})();var t=f.getElementsByClassName?function(e,l,r){r=e=k.makeArray(r.getElementsByClassName(e));var d=0,a=0,c=e.length,h;if(l&&l!=="*"){r=[];for(l=l.toUpperCase();d<c;++d){h=
e[d];if(h.tagName===l)r[a++]=h}}return r}:f.querySelectorAll?function(e,l,r){return r.querySelectorAll((l?l:"")+"."+e)}:function(e,l,r){l=r.getElementsByTagName(l||"*");r=[];var d=0,a=0,c=l.length,h,q;for(e=m+e+m;d<c;++d){h=l[d];if((q=h.className)&&(m+q+m).indexOf(e)>-1)r[a++]=h}return r};k.mix(b,{query:o,get:function(e,l){return o(e,l)[0]||null},filter:function(e,l,r){var d=o(e,r),a=k.require("sizzle"),c,h,q,x=[];if(k.isString(l)&&(c=u.exec(l))&&!c[1]){h=c[2];q=c[3];l=function(i){return!(h&&i.tagName.toLowerCase()!==
h.toLowerCase()||q&&!b.hasClass(i,q))}}if(k.isFunction(l))x=k.filter(d,l);else if(l&&a)x=a._filter(e,l,r);else g(l);return x},test:function(e,l,r){e=o(e,r);return e.length&&b.filter(e,l,r).length===e.length}});return b},{requires:["dom/base"]});
KISSY.add("dom/style-ie",function(k,b,v,o,w){if(!v.ie)return b;o=document;var y=o.documentElement,j=b._CUSTOM_STYLES,g=/^-?\d+(?:px)?$/i,f=/^-?\d/,s=/^(?:width|height)$/;try{if(y.style.opacity==w&&y.filters)j.opacity={get:function(t){var e=100;try{e=t.filters["DXImageTransform.Microsoft.Alpha"].opacity}catch(l){try{e=t.filters("alpha").opacity}catch(r){if(t=((t.currentStyle||0).filter||"").match(/alpha\(opacity[=:]([^)]+)\)/))e=parseInt(k.trim(t[1]))}}return e/100+""},set:function(t,e){var l=t.style,
r=(t.currentStyle||0).filter||"";l.zoom=1;if(r)r=k.trim(r.replace(/alpha\(opacity[=:][^)]+\),?/ig,""));if(r&&e!=1)r+=", ";l.filter=r+(e!=1?"alpha(opacity="+e*100+")":"")}}}catch(m){}v=v.ie==8;var p={},u={get:function(t,e){var l=t.currentStyle[e]+"";if(l.indexOf("px")<0)l=p[l]?p[l]:0;return l}};p.thin=v?"1px":"2px";p.medium=v?"3px":"4px";p.thick=v?"5px":"6px";k.each(["","Top","Left","Right","Bottom"],function(t){j["border"+t+"Width"]=u});if(!(o.defaultView||{}).getComputedStyle&&y.currentStyle)b._getComputedStyle=
function(t,e){var l=t.style,r=t.currentStyle[e];if(s.test(e))r=b[e](t)+"px";else if(!g.test(r)&&f.test(r)){var d=l.left,a=t.runtimeStyle.left;t.runtimeStyle.left=t.currentStyle.left;l.left=e==="fontSize"?"1em":r||0;r=l.pixelLeft+"px";l.left=d;t.runtimeStyle.left=a}return r};return b},{requires:["./base","ua","./style"]});
KISSY.add("dom/style",function(k,b,v,o){function w(d,a){var c=b.get(d);if(k.isWindow(c))return a==f?b.viewportWidth(c):b.viewportHeight(c);else if(c.nodeType==9)return a==f?b.docWidth(c):b.docHeight(c);var h=a===f?c.offsetWidth:c.offsetHeight;k.each(a===f?["Left","Right"]:["Top","Bottom"],function(q){h-=parseFloat(b._getComputedStyle(c,"padding"+q))||0;h-=parseFloat(b._getComputedStyle(c,"border"+q+"Width"))||0});return h}function y(d,a,c){var h=c;if(c===s&&p.test(a)){h=0;if(k.inArray(b.css(d,"position"),
["absolute","fixed"])){c=d[a==="left"?"offsetLeft":"offsetTop"];if(v.ie===8||v.opera)c-=m(b.css(d.offsetParent,"border-"+a+"-width"))||0;h=c-(m(b.css(d,"margin-"+a))||0)}}return h}var j=document,g=j.documentElement,f="width",s="auto",m=parseInt,p=/^(?:left|top)/,u=/^(?:width|height|top|left|right|bottom|margin|padding)/i,t=/-([a-z])/ig,e=function(d,a){return a.toUpperCase()},l={},r={};k.mix(b,{_CUSTOM_STYLES:l,_getComputedStyle:function(d,a){var c="",h=d.ownerDocument;if(d.style)c=h.defaultView.getComputedStyle(d,
null)[a];return c},css:function(d,a,c){if(k.isPlainObject(a))for(var h in a)b.css(d,h,a[h]);else{if(a.indexOf("-")>0)a=a.replace(t,e);h=a;a=l[a]||a;if(c===o){d=b.get(d);var q="";if(d&&d.style){q=a.get?a.get(d,h):d.style[a];if(q===""&&!a.get)q=y(d,a,b._getComputedStyle(d,a))}return q===o?"":q}else{if(c===null||c==="")c="";else if(!isNaN(new Number(c))&&u.test(a))c+="px";(a===f||a==="height")&&parseFloat(c)<0||k.each(b.query(d),function(x){if(x&&x.style){a.set?a.set(x,c):x.style[a]=c;if(c==="")x.style.cssText||
x.removeAttribute("style")}})}}},width:function(d,a){if(a===o)return w(d,f);else b.css(d,f,a)},height:function(d,a){if(a===o)return w(d,"height");else b.css(d,"height",a)},show:function(d){b.query(d).each(function(a){if(a){a.style.display=b.data(a,"display")||"";if(b.css(a,"display")==="none"){var c=a.tagName,h=r[c],q;if(!h){q=j.createElement(c);j.body.appendChild(q);h=b.css(q,"display");b.remove(q);r[c]=h}b.data(a,"display",h);a.style.display=h}}})},hide:function(d){b.query(d).each(function(a){if(a){var c=
a.style,h=c.display;if(h!=="none"){h&&b.data(a,"display",h);c.display="none"}}})},toggle:function(d){b.query(d).each(function(a){if(a)b.css(a,"display")==="none"?b.show(a):b.hide(a)})},addStyleSheet:function(d,a,c){if(k.isString(d)){c=a;a=d;d=window}d=b.get(d);d=b._getWin(d).document;var h;if(c&&(c=c.replace("#","")))h=b.get("#"+c,d);if(!h){h=b.create("<style>",{id:c},d);b.get("head",d).appendChild(h);if(h.styleSheet)h.styleSheet.cssText=a;else h.appendChild(d.createTextNode(a))}},unselectable:function(d){b.query(d).each(function(a){if(a)if(v.gecko)a.style.MozUserSelect=
"none";else if(v.webkit)a.style.KhtmlUserSelect="none";else if(v.ie||v.opera){var c=0,h=a.getElementsByTagName("*");for(a.setAttribute("unselectable","on");a=h[c++];)switch(a.tagName.toLowerCase()){case "iframe":case "textarea":case "input":case "select":break;default:a.setAttribute("unselectable","on")}}})}});if(g.style.cssFloat!==o)l["float"]="cssFloat";else if(g.style.styleFloat!==o)l["float"]="styleFloat";return b},{requires:["dom/base","ua"]});
KISSY.add("dom/traversal",function(k,b,v){function o(j,g,f,s){if(!(j=b.get(j)))return null;if(g===v)g=1;var m=null,p,u;if(k.isNumber(g)&&g>=0){if(g===0)return j;p=0;u=g;g=function(){return++p===u}}for(;j=j[f];)if(y(j)&&(!g||b.test(j,g))&&(!s||s(j))){m=j;break}return m}function w(j,g,f){var s=[];var m=j=b.get(j);if(j&&f)m=j.parentNode;if(m){f=0;for(m=m.firstChild;m;m=m.nextSibling)if(y(m)&&m!==j&&(!g||b.test(m,g)))s[f++]=m}return s}var y=b._isElementNode;k.mix(b,{parent:function(j,g){return o(j,g,
"parentNode",function(f){return f.nodeType!=11})},next:function(j,g){return o(j,g,"nextSibling",v)},prev:function(j,g){return o(j,g,"previousSibling",v)},siblings:function(j,g){return w(j,g,true)},children:function(j,g){return w(j,g,v)},contains:function(j,g){var f=false;if((j=b.get(j))&&(g=b.get(g)))if(j.contains){if(g.nodeType===3){g=g.parentNode;if(g===j)return true}if(g)return j.contains(g)}else if(j.compareDocumentPosition)return!!(j.compareDocumentPosition(g)&16);else for(;!f&&(g=g.parentNode);)f=
g==j;return f},equals:function(j,g){j=k.query(j);g=k.query(g);if(j.length!=g.length)return false;for(var f=j.length;f>=0;f--)if(j[f]!=g[f])return false;return true}});return b},{requires:["./base"]});KISSY.add("dom",function(k,b){return b},{requires:["dom/attr","dom/class","dom/create","dom/data","dom/insertion","dom/offset","dom/style","dom/selector","dom/style-ie","dom/traversal"]});
