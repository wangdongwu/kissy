/*
Copyright (c) 2009, Kissy UI Library. All rights reserved.
MIT Licensed.
http://kissy.googlecode.com/

Date: 2009-10-12 13:37:54
Revision: 191
*/
var KISSY=window.KISSY||{};(function(){var scripts=document.getElementsByTagName("script"),currentScript=scripts[scripts.length-1],ua=navigator.userAgent,startTime=0,endTime=0,sections=[],sectionMaxImgLoadTime=0;function get(id){return typeof id==="string"?document.getElementById(id):id}function addEvent(el,type,listener){if(window.attachEvent){el.attachEvent("on"+type,function(){listener.call(el)})}else{el.addEventListener(type,listener,false)}}function getOSInfo(){var token=[["Windows NT 5.1","WinXP"],["Windows NT 6.0","WinVista"],["Windows NT 6.1","Win7"],["Windows NT 5.2","Win2003"],["Windows NT 5.0","Win2000"],["Macintosh","Macintosh"],["Windows","WinOther"],["Ubuntu","Ubuntu"],["Linux","Linux"]];for(var i=0,len=token.length;i<len;++i){if(ua.indexOf(token[i][0])!=-1){return token[i][1]}}return"Other"}function getBrowserInfo(){var token=["Opera","Chrome","Safari","MSIE 6","MSIE 7","MSIE 8","Firefox"];for(var i=0,len=token.length;i<len;++i){if(ua.indexOf(token[i])!=-1){return token[i].replace(" ","")}}return"Other"}function getScreenInfo(){var screen=window.screen;return screen?screen.width+"x"+screen.height:""}KISSY.Monitor={init:function(cfg){var config=cfg||{},apiUrl=config.apiUrl||"http://igw.monitor.taobao.com/monitor-gw/receive.do",pageId="pageId" in config?config.pageId:0,sampleRate="sampleRate" in config?config.sampleRate:10000,self=this;if(!pageId){return}if(parseInt(Math.random()*sampleRate)){return}startTime=window.g_ks_monitor_st;if(!startTime){return}endTime=+new Date;sections=config.sections||[],sectionMaxImgLoadTime=endTime;if(sections.length>0){this.monitorSection(sections[0])}addEvent(window,"load",function(){self.sendData(+new Date,apiUrl,pageId)})},monitorSection:function(id){var section=get(id);if(!section||section.nodeType!==1){return}var images=section.getElementsByTagName("img");for(var i=0,len=images.length;i<len;++i){addEvent(images[i],"load",function(){var currTime=+new Date;if(currTime>sectionMaxImgLoadTime){sectionMaxImgLoadTime=currTime}})}},sendData:function(onLoadTime,apiUrl,pageId){var results=[apiUrl,"?page_id=",pageId,"&os=",getOSInfo(),"&bt=",getBrowserInfo(),"&scr=",getScreenInfo(),"&fl=",(onLoadTime-startTime),"&dl=",(endTime-startTime)];if(sections.length>0){results.push("&sl="+(sectionMaxImgLoadTime-endTime))}new Image().src=results.join("")}};try{eval(currentScript.innerHTML)}catch(ex){}})();