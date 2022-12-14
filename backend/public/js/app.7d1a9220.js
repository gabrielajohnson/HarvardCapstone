(function(){"use strict";var e={7030:function(e,t,n){var o=n(2201);const r=[{path:"/",component:()=>n.e(846).then(n.bind(n,7824))},{name:"search",path:"/search",component:()=>n.e(545).then(n.bind(n,7545)),props:!0},{name:"bookMedia",path:"/media/books/:id",component:()=>n.e(369).then(n.bind(n,6369)),props:!0},{name:"articleMedia",path:"/media/articles/:id",component:()=>n.e(115).then(n.bind(n,1115)),props:!0},{name:"movieMedia",path:"/media/movies/:id",component:()=>n.e(573).then(n.bind(n,1573)),props:!0},{name:"podcastMedia",path:"/media/podcasts/:id",component:()=>n.e(824).then(n.bind(n,824)),props:!0}],i=o.p7({history:o.PO(),routes:r});t["Z"]=i},8827:function(e,t,n){var o=n(9963),r=n(7030),i=n(8465),a=n(6252),u=n(3577);const c={class:"main"},s=(0,a._)("h3",null,"Learning Locus",-1);function d(e,t,n,o,r,i){const d=(0,a.up)("router-link"),f=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)("div",c,[(0,a._)("nav",null,[s,(0,a._)("ul",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.links,(e=>((0,a.wg)(),(0,a.j4)(d,{key:e,to:r.paths[e],exact:"","data-test":e+"-link"},{default:(0,a.w5)((()=>[(0,a._)("li",null,(0,u.zw)(e),1)])),_:2},1032,["to","data-test"])))),128))])]),(0,a.Wm)(f)])}n(7658);var f=n(196),l={name:"App",data(){return{links:["Home","Search"],paths:{Home:"/",Search:"/search"},books:[],description:"",title:""}},async mounted(){const e=await f.ZP.get("api/books/");this.books=e.data},methods:{async addBook(e){e.preventDefault();const t=await f.ZP.post("api/books/",{title:this.title,description:this.description});this.books.push(t.data),this.title="",this.description=""},async removeBook(e,t){await f.ZP["delete"]("api/books/"+e._id),this.books.splice(t,1)}}},p=n(3744);const h=(0,p.Z)(l,[["render",d]]);var m=h;const v=(0,o.ri)(m);v.use(r.Z),v.component("mediaTabs",i.mQ).component("mediaTab",i.OK).mount("#app")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,i){if(!o){var a=1/0;for(d=0;d<e.length;d++){o=e[d][0],r=e[d][1],i=e[d][2];for(var u=!0,c=0;c<o.length;c++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[c])}))?o.splice(c--,1):(u=!1,i<a&&(a=i));if(u){e.splice(d--,1);var s=r();void 0!==s&&(t=s)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[o,r,i]}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{115:"9c00dce5",369:"b20eac94",545:"50b6b2ef",573:"9c87cafd",824:"eaaaee43",846:"1d33e128"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+".ef819bf7.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="frontend:";n.l=function(o,r,i,a){if(e[o])e[o].push(r);else{var u,c;if(void 0!==i)for(var s=document.getElementsByTagName("script"),d=0;d<s.length;d++){var f=s[d];if(f.getAttribute("src")==o||f.getAttribute("data-webpack")==t+i){u=f;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+i),u.src=o),e[o]=[r];var l=function(t,n){u.onerror=u.onload=null,clearTimeout(p);var r=e[o];if(delete e[o],u.parentNode&&u.parentNode.removeChild(u),r&&r.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(l.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=l.bind(null,u.onerror),u.onload=l.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e=function(e,t,n,o){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var i=function(i){if(r.onerror=r.onload=null,"load"===i.type)n();else{var a=i&&("load"===i.type?"missing":i.type),u=i&&i.target&&i.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=u,r.parentNode.removeChild(r),o(c)}};return r.onerror=r.onload=i,r.href=t,document.head.appendChild(r),r},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],i=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(i===e||i===t))return r}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){r=a[o],i=r.getAttribute("data-href");if(i===e||i===t)return r}},o=function(o){return new Promise((function(r,i){var a=n.miniCssF(o),u=n.p+a;if(t(a,u))return r();e(o,u,r,i)}))},r={143:0};n.f.miniCss=function(e,t){var n={545:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=o(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=i);var a=n.p+n.u(t),u=new Error,c=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;u.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,r[1](u)}};n.l(a,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,i,a=o[0],u=o[1],c=o[2],s=0;if(a.some((function(t){return 0!==e[t]}))){for(r in u)n.o(u,r)&&(n.m[r]=u[r]);if(c)var d=c(n)}for(t&&t(o);s<a.length;s++)i=a[s],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(d)},o=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(8827)}));o=n.O(o)})();
//# sourceMappingURL=app.7d1a9220.js.map