(function(t){function e(e){for(var r,a,s=e[0],l=e[1],c=e[2],u=0,d=[];u<s.length;u++)a=s[u],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&d.push(i[a][0]),i[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);h&&h(e);while(d.length)d.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,a=1;a<n.length;a++){var s=n[a];0!==i[s]&&(r=!1)}r&&(o.splice(e--,1),t=l(l.s=n[0]))}return t}var r={},a={index:0},i={index:0},o=[];function s(t){return l.p+"js/"+({about:"about"}[t]||t)+"."+{about:"d2d25b45"}[t]+".js"}function l(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(t){var e=[],n={about:1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({about:"about"}[t]||t)+"."+{about:"e1b56963"}[t]+".css",i=l.p+r,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var c=o[s],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===r||u===i))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){c=d[s],u=c.getAttribute("data-href");if(u===r||u===i)return e()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=e,h.onerror=function(e){var r=e&&e.target&&e.target.src||i,o=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[t],h.parentNode.removeChild(h),n(o)},h.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(h)})).then((function(){a[t]=0})));var r=i[t];if(0!==r)if(r)e.push(r[2]);else{var o=new Promise((function(e,n){r=i[t]=[e,n]}));e.push(r[2]=o);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=s(t);var d=new Error;c=function(e){u.onerror=u.onload=null,clearTimeout(h);var n=i[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}i[t]=void 0}};var h=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=r,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)l.d(n,r,function(e){return t[e]}.bind(null,r));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var h=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"1a9c":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"top"}},[n("p",[t._l(t.topmenus,(function(e,r){return[n("a",{staticStyle:{cursor:"hand",color:"#D7CFCD"},attrs:{href:e.href,title:e.title,target:e.target},domProps:{textContent:t._s(e.title)}}),r+1<t.topmenus.length?n("span",[t._v(" | ")]):t._e()]}))],2)]),n("div",{attrs:{id:"header"}},[t._m(0),n("div",{staticClass:"meun"},[n("ul",{attrs:{id:"nav"}},t._l(t.headermenus,(function(e){return n("li",[e.vueurl?n("router-link",{attrs:{to:e.href,title:e.title,target:e.target},domProps:{textContent:t._s(e.title)}},[t._v("Home")]):n("a",{attrs:{href:e.href,title:e.title,target:e.target},domProps:{textContent:t._s(e.title)}})],1)})),0)])]),n("router-view"),n("div",{staticClass:"footer"},[n("div",{staticClass:"backgu"},[n("p",{staticClass:"fontLink"},[t._l(t.fontLink,(function(e,r){return[e.vueurl?n("router-link",{attrs:{to:e.jumpurl,target:e.target},domProps:{textContent:t._s(e.title)}}):n("a",{attrs:{href:e.jumpurl,target:e.target},domProps:{textContent:t._s(e.title)}}),r+1<t.fontLink.length?n("span",[t._v("|")]):t._e()]}))],2),n("p",{staticClass:"copyright"},[n("table",{attrs:{border:"0",cellpadding:"0",cellspacing:"0",width:"100%",id:"table1"}},[n("tbody",t._l(t.flhandle,(function(e,r){return n("tr",{},[n("td",{staticStyle:{"font-weight":"bold"},attrs:{align:"center"}},[t._v(t._s(0==r?"友情链接:":""))]),t._l(e,(function(e,r){return n("td",{attrs:{align:"center"}},[n("a",{attrs:{href:e.jumpurl,title:e.title,target:e.target},domProps:{textContent:t._s(e.title)}})])}))],2)})),0)])]),n("br"),n("p",{staticStyle:{"text-align":"center"}},[t._v(" 前端设计 By 李耀辉(QQ:46325112)、李观俊、赵宏恩 ; 静态化重构 By 小黄 ; 素材提供 By Mr.Chen、Mr.Liao ")]),n("p",{staticStyle:{"text-align":"center"}},[t._v(" Copyright ©2002-"+t._s(t.currentyear)+" 教育技术工作室 "),t._m(1),t._m(2)]),t._m(3)])]),n("transition",{attrs:{name:"fade"}},[n("a",{directives:[{name:"show",rawName:"v-show",value:t.showb2t,expression:"showb2t"}],staticClass:"float",attrs:{href:"javascript:;"},on:{click:function(e){return t.dob2t()}}},[n("img",{staticStyle:{width:"8em"},attrs:{src:"images/loli.gif"}})])])],1)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"logo"},[n("a",{attrs:{href:"javascript:;",title:"教育技术工作室-示范性学生组织"}},[n("img",{attrs:{src:"images/logo.gif",alt:"教育技术工作室-示范性学生组织",width:"289",height:"55"}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticStyle:{"margin-left":"1px"},attrs:{href:"https://beian.miit.gov.cn/",target:"_blank"}},[n("img",{staticStyle:{width:"18px",height:"18px","vertical-align":"bottom"},attrs:{src:"images/miit_logo.png"}}),t._v("粤ICP备10073925号 ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticStyle:{"margin-left":"1px"},attrs:{href:"http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44070502000497",target:"_blank"}},[n("img",{staticStyle:{width:"18px",height:"18px","vertical-align":"bottom"},attrs:{src:"images/gaba_logo.png"}}),t._v("粤公网安备44070502000497号 ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticStyle:{"text-align":"center","padding-top":"3px"}},[n("img",{staticStyle:{height:"45px","padding-right":"3px"},attrs:{src:"images/turste_logo.svg",title:"通过TRUSTe隐私验证"}}),n("img",{staticStyle:{height:"45px","padding-right":"3px"},attrs:{src:"images/kexin_logo.png",title:"可信网站"}}),n("img",{staticStyle:{height:"45px","padding-right":"3px"},attrs:{src:"images/support_ipv6_logo.png",title:"网站已安全升级到IPv6"}}),n("img",{staticStyle:{height:"45px"},attrs:{src:"images/myssl_logo.png",title:"通过MySSL安全认证"}})])}],o=(n("fb6a"),n("a9e3"),n("96cf"),n("1da1")),s=n("bc3a"),l=n.n(s),c=n("1157"),u=n.n(c),d={data:function(){return{topmenus:null,headermenus:null,fontLink:null,friendslinks:null,showb2t:!1,isshow_useripinfo:0,useripinfo_ip:null,useripinfo_detail:null}},beforeMount:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l.a.get("datas/app_datas.json");case 2:n=e.sent,t.topmenus=n.data.topmenus,t.headermenus=n.data.headermenus,t.fontLink=n.data.fontLink,t.friendslinks=n.data.friendslinks;case 7:case"end":return e.stop()}}),e)})))()},computed:{flhandle:function(){return this.splitarray(this.friendslinks,"5")},currentyear:function(){var t=new Date;return t.getFullYear()}},mounted:function(){window.addEventListener("scroll",this.showb2tbtn,!0)},methods:{splitarray:function(t,e){var n=[];e=Number(e);if(t)for(var r=0;r<t.length;r+=e)n.push(t.slice(r,r+e));return n},showb2tbtn:function(){var t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;this.showb2t=t>1},dob2t:function(){u()("html,body").animate({scrollTop:0},400)}}},h=d,f=(n("d826"),n("2877")),p=Object(f["a"])(h,a,i,!1,null,"edebff48",null),m=p.exports,g=(n("d3b7"),n("8c4f")),v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"main"}},[n("div",{attrs:{id:"mainLeft"}},[n("div",{staticClass:"flash",attrs:{id:"left_show",title:"工作室flash"},domProps:{innerHTML:t._s(t.imgorswf(t.leftshow))}}),n("div",{staticClass:"aboutgzs",attrs:{title:"关于工作室"}}),n("div",{staticClass:"aboutgzs_1",attrs:{title:"关于工作室"}}),n("div",{staticClass:"aboutgzs_2",attrs:{title:"关于工作室"}},[n("p",{staticStyle:{color:"#CC0000","text-indent":"2em","max-width":"560px"}},[t._v("教育技术工作室是江门职业技术学院现代教育技术中心倡导并建立的示范性学生组织...")]),n("p",{staticStyle:{"text-indent":"2em","max-width":"560px"}},[t._v("教育技术工作室于2002年成立于江门教育学院。教育技术工作室与其他组织，社团有着与众不同的地方。教育技术工作室是学院唯一一个掌握精品课程制作、网页制作及维护、图片图像美工、电脑系统维护、摄影摄像舞台音响技术、电教（多媒体）设备的使用和管理等知识为一体，是以技术为主导、服务为宗旨、也是一个以人为服务第一的组织... "),n("router-link",{attrs:{to:"/about/team"}},[t._v(">>>更多")])],1)])]),n("div",{attrs:{id:"mainRight"}},[n("div",{staticClass:"flashJng",attrs:{id:"right_show",title:"工作室flash"},domProps:{innerHTML:t._s(t.imgorswf(t.rightshow))}}),n("div",{staticClass:"newsgzs"},[n("div",{staticClass:"falshR"},[n("div",{staticClass:"wrapper",staticStyle:{height:"160px",border:"5px solid #bbb7b3","border-radius":"20px",overflow:"hidden"}},[n("slider",{ref:"slider",attrs:{options:t.options}},[t._l(t.banner_lists,(function(e,r){return n("slideritem",{key:r,style:e.style},[t._v(t._s(e.html))])})),n("div",{attrs:{slot:"loading"},slot:"loading"},[t._v("loading...")])],2)],1)]),n("div",{staticClass:"news_gzs"},[n("div",{attrs:{id:"tab"}},[n("div",{staticClass:"menuBox"},[n("ul",t._l(t.trendstitles,(function(e,r){return n("li",{class:0==r?"hover":"",attrs:{title:e.title},on:{click:function(e){return t.setTab(e,r)},mouseover:function(e){return t.setTab(e,r)}}},[n("a",{staticStyle:{"-webkit-user-select":"none","-moz-user-select":"none","-o-user-select":"none","user-select":"none","pointer-events":"none"},attrs:{href:e.href,title:e.title,target:e.target},domProps:{textContent:t._s(e.title)}})])})),0)]),n("div",{staticClass:"contentBox"},[[n("div",{staticClass:"mNew"},[n("div",{staticClass:"mNewPic"},[n("div",{attrs:{align:"center"}},[n("table",{attrs:{border:"0",cellpadding:"0",cellspacing:"0",width:"100%",id:"tableasdaDF1"}},[n("tbody",[n("tr",[n("td",{staticStyle:{"font-size":"9pt","line-height":"150%"},attrs:{align:"center"}},[null!=t.tthover?n("a",{attrs:{href:t.trendscontents[t.tthover].image.jumpurl,target:t.trendscontents[t.tthover].image.target,title:t.trendscontents[t.tthover].image.title}},[n("img",{directives:[{name:"image-preview",rawName:"v-image-preview"}],attrs:{hspace:"2",vspace:"2",border:"0",width:"73",height:"93",src:t.trendscontents[t.tthover].image.imgurl}}),n("font",{staticStyle:{"font-size":"9pt"}})],1):t._e()])])])])])]),n("ul",[n("li",[n("table",{attrs:{border:"0",cellpadding:"0",cellspacing:"0",width:"100%"}},[n("tbody",t._l(null!=t.tthover?t.trendscontents[t.tthover].contents:"",(function(e,r){return n("tr",[n("td",{staticStyle:{"max-width":"130px",overflow:"hidden","text-overflow":"ellipsis","white-space":"nowrap"},attrs:{height:"22"}},[n("a",{attrs:{href:e.jumpurl,target:e.target,title:e.title}},[n("font",{staticStyle:{"font-size":"9pt"},style:{fontWeight:e.titlefw},attrs:{color:e.titlecolor},domProps:{textContent:t._s(e.title)}})],1)]),n("td",{staticStyle:{"max-width":"70px",overflow:"hidden","text-overflow":"ellipsis","white-space":"nowrap"},attrs:{align:"right"}},[n("font",{staticStyle:{"font-size":"9pt"},style:{fontWeight:e.timefw},attrs:{color:e.timecolor}},[t._v("("+t._s(e.time)+")")])],1)])})),0)]),n("div",{attrs:{align:"right"}},[n("a",{attrs:{href:"javascript:;"}},[n("font",{staticStyle:{"font-size":"9pt"}},[t._v("更多内容 >>")])],1)])])])])]],2)])])])])])},b=[],w=n("b190"),_={name:"Home",data:function(){return{leftshow:null,rightshow:null,trendstitles:null,tthover:null,trendscontents:null,banner_lists:null,options:{currentPage:0,thresholdDistance:100,thresholdTime:500,autoplay:5e3,loop:!0,direction:"horizontal",loopedSlides:1,slidesToScroll:1,timingFunction:"ease",speed:300}}},beforeMount:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l.a.get("datas/home_datas.json");case 2:n=e.sent,t.leftshow=n.data.leftshow,t.rightshow=n.data.rightshow,t.trendstitles=n.data.trendstitles,t.tthover=n.data.tthover,t.trendscontents=n.data.trendscontents,t.banner_lists=n.data.banner_lists;case 9:case"end":return e.stop()}}),e)})))()},components:{slider:w["slider"],slideritem:w["slideritem"]},mounted:function(){this.hasUsableFlash()||alert("检测到浏览器不支持Flash！Flash动画部分将显示为静态图片。请更换支持Flash的浏览器以获得更棒的体验！")},methods:{hasUsableFlash:function(){var t;return t="undefined"!=typeof window.ActiveXObject?new ActiveXObject("ShockwaveFlash.ShockwaveFlash"):navigator.plugins["Shockwave Flash"],!!t},imgorswf:function(t){if(t)return this.hasUsableFlash()?'<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,28,0" width="'+t.width+'" height="'+t.height+'"> <param name="movie" value="'+t.swfurl+'" /> <param name="quality" value="high" /> <embed src="'+t.swfurl+'" quality="high" pluginspage="http://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash" type="application/x-shockwave-flash" width="'+t.width+'" height="'+t.height+'"></embed> </object>':'<img src="'+t.imgurl+'" width="'+t.width+'" height="'+t.height+'" alt="">'},setTab:function(t,e){this.tthover=e,u()(t.target).addClass("hover"),u()(t.target).siblings().removeClass("hover")}}},y=_,x=(n("cccb"),Object(f["a"])(y,v,b,!1,null,null,null)),C=x.exports,k=n("323e"),S=n.n(k);n("a5d8");S.a.inc(),S.a.configure({easing:"ease"}),r["a"].use(g["a"]);var j=[{path:"/",name:"Home",component:C,meta:{title:"欢迎访问教育技术工作室"}},{path:"/about",name:"About",redirect:"/about/team",component:function(){return n.e("about").then(n.bind(null,"f820"))},children:[{path:"contact",name:"Contact",component:function(){return n.e("about").then(n.bind(null,"b8fa"))},meta:{title:"联系我们-教育技术工作室"}},{path:"team",name:"Team",component:function(){return n.e("about").then(n.bind(null,"0767"))},meta:{title:"团队建设-教育技术工作室"}},{path:"constitute",name:"Constitute",component:function(){return n.e("about").then(n.bind(null,"3e45"))},meta:{title:"团队构成-教育技术工作室"}},{path:"log",name:"Log",component:function(){return n.e("about").then(n.bind(null,"f836"))},meta:{title:"网站更新日志-教育技术工作室"}},{path:"leader",name:"Leader",component:function(){return n.e("about").then(n.bind(null,"22a2"))},meta:{title:"历届主席团成员-教育技术工作室"}},{path:"privacy",name:"Privacy",component:function(){return n.e("about").then(n.bind(null,"6f9f"))},meta:{title:"隐私政策-教育技术工作室"}}]},{path:"/news",name:"News",component:function(){return n.e("about").then(n.bind(null,"a2f9"))},meta:{title:"新闻中心-教育技术工作室"}},{path:"/department",name:"Department",component:function(){return n.e("about").then(n.bind(null,"6f15"))},meta:{title:"部门职能-教育技术工作室"}},{path:"/culture",name:"Culture",component:function(){return n.e("about").then(n.bind(null,"aced"))},meta:{title:"组织文化-教育技术工作室"}},{path:"/information",name:"Information",component:function(){return n.e("about").then(n.bind(null,"5798"))},meta:{title:"校园信息-教育技术工作室"}},{path:"/activity",name:"Activity",redirect:"/Activity/promotional-video",component:function(){return n.e("about").then(n.bind(null,"abae"))},children:[{path:"promotional-video",name:"Promotional-video",component:function(){return n.e("about").then(n.bind(null,"9ff1"))},meta:{title:"宣传片合集-教育技术工作室"}}]}],P=new g["a"]({scrollBehavior:function(t,e,n){return n||{x:0,y:0}},routes:j});P.beforeEach((function(t,e,n){S.a.start(),t.meta.title&&(document.title=t.meta.title),n()})),P.afterEach((function(t,e){S.a.done()}));var E=P,T=n("7ca1"),O=n.n(T),L=(n("d77d"),n("c99f"),n("9483"));Object(L["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),r["a"].config.productionTip=!1,r["a"].use(O.a,{background:{color:"#000",backgroundColor:"rgba(255, 255, 255, 0.9)"},animate:{duration:600,delay:500},cursor:"pointer"}),new r["a"]({router:E,render:function(t){return t(m)}}).$mount("#app")},a5ee:function(t,e,n){},c99f:function(t,e,n){},cccb:function(t,e,n){"use strict";var r=n("1a9c"),a=n.n(r);a.a},d826:function(t,e,n){"use strict";var r=n("a5ee"),a=n.n(r);a.a}});