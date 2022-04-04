(function(){"use strict";var e={1470:function(e,t,n){n(6992),n(8674),n(9601),n(7727);var r=n(144),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",{attrs:{id:"inspire"}},[r("v-navigation-drawer",{attrs:{app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[r("v-list-item",[r("v-list-item-content",[r("v-list-item-title",{staticClass:"text-h6"},[e._v(" Vue.js ")]),r("v-list-item-subtitle",[e._v(" Lista de tarefas ")])],1)],1),r("v-divider"),r("v-list",{attrs:{dense:"",nav:""}},e._l(e.items,(function(t){return r("v-list-item",{key:t.title,attrs:{to:t.to,link:""}},[r("v-list-item-icon",[r("v-icon",[e._v(e._s(t.icon))])],1),r("v-list-item-content",[r("v-list-item-title",[e._v(e._s(t.title))])],1)],1)})),1)],1),r("v-app-bar",{attrs:{app:"",color:"#fcb69f",dark:"",src:n(3593),prominent:""},scopedSlots:e._u([{key:"img",fn:function(t){var n=t.props;return[r("v-img",e._b({attrs:{gradient:"to top right, rgba(19,84,122,.5), rgba(28,108,199,.8)"}},"v-img",n,!1))]}}])},[r("v-app-bar-nav-icon",{on:{click:function(t){e.drawer=!e.drawer}}}),r("v-app-bar-title",[e._v("...")]),r("v-spacer")],1),r("v-main",[r("router-view")],1)],1)},i=[],a={data:function(){return{drawer:null,items:[{title:"Tarefas",icon:"mdi-view-dashboard",to:"/"},{title:"Sobre",icon:"mdi-help-box",to:"/sobre"}]}}},u=a,c=n(1001),s=n(3453),f=n.n(s),l=n(7524),d=n(426),v=n(5206),p=n(7905),m=n(1418),g=n(6428),h=n(7047),b=n(6816),w=n(7620),y=n(3127),k=n(459),Z=n(7877),_=n(4216),C=n(3631),T=(0,c.Z)(u,o,i,!1,null,"320a5657",null),V=T.exports;f()(T,{VApp:l.Z,VAppBar:d.Z,VAppBarNavIcon:v.Z,VAppBarTitle:p.Z,VDivider:m.Z,VIcon:g.Z,VImg:h.Z,VList:b.Z,VListItem:w.Z,VListItemContent:y.km,VListItemIcon:k.Z,VListItemSubtitle:y.oZ,VListItemTitle:y.V9,VMain:Z.Z,VNavigationDrawer:_.Z,VSpacer:C.Z});var A=n(5205);(0,A.z)("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n(1539),n(8783),n(3948);var S=n(8345);r.Z.use(S.Z);var O=[{path:"/",name:"Tarefas",component:function(){return n.e(566).then(n.bind(n,6566))}},{path:"/sobre",name:"Sobre",component:function(){return n.e(30).then(n.bind(n,9030))}}],j=new S.Z({mode:"history",base:"/",routes:O}),E=j,I=(n(7327),n(629));r.Z.use(I.ZP);var L=new I.ZP.Store({state:{tarefas:[{id:1,titulo:"Ir ao mercado",concluido:!1},{id:2,titulo:"Comprar Pão",concluido:!1}]},getters:{},mutations:{adicionaTarefa:function(e,t){t&&e.tarefas.push({id:(new Date).getTime(),titulo:t,concluido:!1})},removeTarefa:function(e,t){e.tarefas=e.tarefas.filter((function(e){return e.id!=t}))}},actions:{},modules:{}}),N=n(3614);r.Z.use(N.Z);var x=new N.Z({});r.Z.config.productionTip=!1,new r.Z({router:E,store:L,vuetify:x,render:function(e){return e(V)}}).$mount("#app")},3593:function(e,t,n){e.exports=n.p+"img/C.I.T.7d55baea.png"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,i){if(!r){var a=1/0;for(f=0;f<e.length;f++){r=e[f][0],o=e[f][1],i=e[f][2];for(var u=!0,c=0;c<r.length;c++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(u=!1,i<a&&(a=i));if(u){e.splice(f--,1);var s=o();void 0!==s&&(t=s)}}return t}i=i||0;for(var f=e.length;f>0&&e[f-1][2]>i;f--)e[f]=e[f-1];e[f]=[r,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"-legacy."+{30:"ec4af88f",566:"2cfaa69c"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+".7fc90240.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="vue-todo:";n.l=function(r,o,i,a){if(e[r])e[r].push(o);else{var u,c;if(void 0!==i)for(var s=document.getElementsByTagName("script"),f=0;f<s.length;f++){var l=s[f];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==t+i){u=l;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+i),u.src=r),e[r]=[o];var d=function(t,n){u.onerror=u.onload=null,clearTimeout(v);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(n)})),t)return t(n)},v=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e=function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var i=function(i){if(o.onerror=o.onload=null,"load"===i.type)n();else{var a=i&&("load"===i.type?"missing":i.type),u=i&&i.target&&i.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=u,o.parentNode.removeChild(o),r(c)}};return o.onerror=o.onload=i,o.href=t,document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===t))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){o=a[r],i=o.getAttribute("data-href");if(i===e||i===t)return o}},r=function(r){return new Promise((function(o,i){var a=n.miniCssF(r),u=n.p+a;if(t(a,u))return o();e(r,u,o,i)}))},o={143:0};n.f.miniCss=function(e,t){var n={566:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=i);var a=n.p+n.u(t),u=new Error,c=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;u.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,o[1](u)}};n.l(a,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,a=r[0],u=r[1],c=r[2],s=0;if(a.some((function(t){return 0!==e[t]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(c)var f=c(n)}for(t&&t(r);s<a.length;s++)i=a[s],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(f)},r=self["webpackChunkvue_todo"]=self["webpackChunkvue_todo"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(1470)}));r=n.O(r)})();
//# sourceMappingURL=app-legacy.f5171515.js.map