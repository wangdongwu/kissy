/*
Copyright 2010, KISSY UI Library v1.1.0
MIT Licensed
build time: Jul 26 16:56
*/
KISSY.add("node",function(a){function f(b,c,h){var j;if(!(this instanceof f))return new f(b,c,h);if(!b)return null;if(o._isSupportedNode(b))j=b;else if(typeof b==="string")j=o.create(b,c,h);this[0]=j}var o=a.DOM;f.TYPE="-ks-Node";a.augment(f,{length:1,getDOMNode:function(){return this[0]},nodeType:f.TYPE});a.one=function(b,c){return new f(a.get(b,c))};a.Node=f});
KISSY.add("nodelist",function(a){function f(c){if(!(this instanceof f))return new f(c);b.push.apply(this,c||[])}var o=a.DOM,b=Array.prototype;a.mix(f.prototype,{length:0,item:function(c){var h=null;if(o._isElementNode(this[c]))h=new a.Node(this[c]);return h},getDOMNodes:function(){return b.slice.call(this)},each:function(c,h){for(var j=this.length,l=0,m;l<j;++l){m=new a.Node(this[l]);c.call(h||m,m,l,this)}return this}});a.all=function(c,h){return new f(a.query(c,h,true))};a.NodeList=f});
KISSY.add("node-attach",function(a,f){function o(d,arguments,e,g){var i=[this[d?r:m]()].concat(a.makeArray(arguments));if(arguments[e]===f)return g.apply(c,i);else{g.apply(c,i);return this}}function b(d,e){a.each(d,function(g){a.each([j,l],function(i,n){i[g]=function(q){switch(e){case s:return function(){return o.call(this,n,arguments,1,q)};case p:return function(){return o.call(this,n,arguments,0,q)};case t:return function(){var k=this[n?r:m]();return(k=q.apply(c,[k].concat(a.makeArray(arguments))))?
new (a[a.isArray(k)?"NodeList":"Node"])(k):null};default:return function(){var k=this[n?r:m]();k=q.apply(c,[k].concat(a.makeArray(arguments)));return k===f?this:k}}}(c[g])})})}var c=a.DOM,h=a.Event,j=a.Node.prototype,l=a.NodeList.prototype,m="getDOMNode",r=m+"s",s=1,p=2,t=4;a.mix(j,{one:function(d){return a.one(d,this[0])},all:function(d){return a.all(d,this[0])}});b(["hasClass","addClass","removeClass","replaceClass","toggleClass"]);b(["attr","removeAttr"],s);b(["val","text"],p);b(["css"],s);b(["width",
"height"],p);b(["offset"],p);b(["scrollIntoView"]);b(["parent","next","prev","siblings","children"],t);b(["contains"]);b(["html"],p);b(["remove"]);a.each(["insertBefore","insertAfter"],function(d){j[d]=function(e){c[d].call(c,this[0],e);return this}});a.each([j,l],function(d){a.mix(d,{append:function(e){e&&a.each(this,function(g){g.appendChild(c.create(e))});return this},appendTo:function(e){if((e=a.get(e))&&e.appendChild)a.each(this,function(g){e.appendChild(g)});return this}})});a.each([j,l],function(d){a.mix(d,
a.EventTarget);d._addEvent=function(e,g){for(var i=0,n=this.length;i<n;i++)h._simpleAdd(this[i],e,g)};d._removeEvent=function(e,g){for(var i=0,n=this.length;i<n;i++)h._simpleRemove(this[i],e,g)};delete d.fire})});
