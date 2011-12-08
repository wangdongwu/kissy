/*
Copyright 2011, KISSY UI Library v1.1.8dev
MIT Licensed
build time: ${build.time}
*/
KISSY.add("waterfall",function(d){function g(){g.superclass.constructor.apply(this,arguments);this._init()}function n(a,b,c,e){var f=[].concat(d.makeArray(a)),k={},l;if(f.length>0)l=setTimeout(function(){var m=+new Date;do{var j=f.shift();b.call(c,j)}while(f.length>0&&+new Date-m<50);if(f.length>0)l=setTimeout(arguments.callee,25);else e&&e.call(c,a)},25);else e&&d.later(e,0,false,c,[a]);k.stop=function(){if(l){clearTimeout(l);f=[]}};return k}function p(){var a=this._containerRegion;a&&this.get("container").width()===
a.width||this.adjust()}function i(){var a=this.get("container").width(),b=this.get("curColHeights");b.length=Math.max(parseInt(a/this.get("colWidth")),this.get("minColCount"));this._containerRegion={width:a};d.each(b,function(c,e){b[e]=0})}function o(a){var b=this.get("effect");a=new d.Node(a);for(var c=this.get("curColHeights"),e=this.get("container"),f=c.length,k=0,l=this._containerRegion,m=Number.MAX_VALUE,j=0;j<f;j++)if(c[j]<m){m=c[j];k=j}f||(m=0);f=Math.max(l.width-f*this.get("colWidth"),0)/
2;a.css({left:k*this.get("colWidth")+f,top:m});if(!e.contains(a)){b&&b.effect=="fadeIn"&&a.css("opacity",0);e.append(a)}c[k]+=a[0].offsetHeight+(parseInt(a.css("marginTop"))||0)+(parseInt(a.css("marginBottom"))||0);return a}var h=d.Base;d.mix(d,{buffer:function(a,b,c){function e(){e.stop();f=d.later(a,b,false,c||this)}b=b||150;if(b===-1)return function(){a.apply(c||this,arguments)};var f=0;e.stop=function(){if(f){f.cancel();f=0}};return e}});g.ATTRS={container:{setter:function(a){return d.one(a)}},
curColHeights:{value:[]},minColCount:{value:1},effect:{value:{effect:"fadeIn",duration:1}},colWidth:{}};d.extend(g,h,{isAdjusting:function(){return!!this._adjuster},_init:function(){p.call(this);this.__onResize=d.buffer(p,50,this);d.Event.on(window,"resize",this.__onResize)},adjust:function(a){var b=this,c=b.get("container").all(".ks-waterfall"),e=c.length;b.isAdjusting()&&b._adjuster.stop();i.call(b);return b._adjuster=n(c,b._addItem,b,function(){b.get("container").height(Math.max.apply(Math,b.get("curColHeights")));
b._adjuster=0;a&&a.call(b);e&&b.fire("adjustComplete",{items:c})})},addItems:function(a,b){var c=this,e=a.length;c._adder=n(a,c._addItem,c,function(){c.get("container").height(Math.max.apply(Math,c.get("curColHeights")));c._adder=0;b&&b.call(c);e&&c.fire("addComplete",{items:a})});return c._adder},_addItem:function(a){this.get("curColHeights");this.get("container");var b=o.call(this,a);a=this.get("effect");!a.effect||a.effect!=="fadeIn"||b.animate({opacity:1},{duration:a.duration,easing:a.easing||
"easeNone",complete:function(){b.css("opacity","")}})},destroy:function(){d.Event.remove(window,"resize",this.__onResize)}});d.Waterfall=g},{requires:["template"]});
KISSY.add("waterfall/loader",function(d){function g(){g.superclass.constructor.apply(this,arguments)}function n(){if(!(this.__loading||this.__pause))if(this.isAdjusting())this.__onScroll();else{var i=this.get("container").offset().top,o=this.get("diff"),h=this.get("curColHeights");if(h.length)i+=Math.min.apply(Math,h);o+d.DOM.scrollTop()+d.DOM.viewportHeight()>i&&p.call(this)}}function p(){function i(b){h.__loading=false;h.addItems(b)}function o(){h.end()}var h=this;this.get("container");h.__loading=
true;var a=h.get("load");a&&a(i,o)}g.ATTRS={diff:{getter:function(i){return i||0}}};d.extend(g,d.Waterfall,{_init:function(){g.superclass._init.apply(this,arguments);this.__onScroll=d.buffer(n,50,this);d.Event.on(window,"scroll",this.__onScroll);n.call(this)},end:function(){this.__loading=false;d.Event.remove(window,"scroll",this.__onScroll)},pause:function(){this.__pause=1},resume:function(){this.__pause=0},destroy:function(){g.superclass.destroy.apply(this,arguments);d.Event.remove(window,"scroll",
this.__onScroll)}});d.Waterfall.Loader=g},{host:"waterfall"});
