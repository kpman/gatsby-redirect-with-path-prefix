webpackJsonp([0xd2a57dc1d883],{109:function(e,t){"use strict";function n(e,t,n){var o=r.map(function(n){if(n.plugin[e]){var o=n.plugin[e](t,n.options);return o}});return o=o.filter(function(e){return"undefined"!=typeof e}),o.length>0?o:n?[n]:[]}function o(e,t,n){return r.reduce(function(n,o){return o.plugin[e]?n.then(function(){return o.plugin[e](t,o.options)}):n},Promise.resolve())}t.__esModule=!0,t.apiRunner=n,t.apiRunnerAsync=o;var r=[]},172:function(e,t,n){"use strict";var o;t.components={"component---src-pages-404-js":n(276),"component---src-pages-index-js":n(277),"component---src-pages-page-2-js":n(278)},t.json=(o={"layout-index.json":n(56),"404.json":n(279)},o["layout-index.json"]=n(56),o["index.json"]=n(281),o["layout-index.json"]=n(56),o["page-2.json"]=n(282),o["layout-index.json"]=n(56),o["404-html.json"]=n(280),o),t.layouts={"component---src-layouts-index-js":n(275)}},173:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},c=n(4),s=o(c),l=n(7),f=o(l),p=n(110),d=o(p),h=n(46),g=o(h),m=n(109),y=function(e){var t=e.children;return s.default.createElement("div",null,t())},v=function(e){function t(n){r(this,t);var o=a(this,e.call(this));return o.state={location:n.location,pageResources:d.default.getResourcesForPathname(n.location.pathname)},o}return u(t,e),t.prototype.componentWillReceiveProps=function(e){var t=this;if(this.state.location.pathname!==e.location.pathname){var n=d.default.getResourcesForPathname(e.location.pathname);n?this.setState({location:e.location,pageResources:n}):d.default.getResourcesForPathname(e.location.pathname,function(n){t.setState({location:e.location,pageResources:n})})}},t.prototype.componentDidMount=function(){var e=this;g.default.on("onPostLoadPageResources",function(t){t.page.path===d.default.getPage(e.state.location.pathname).path&&e.setState({pageResources:t.pageResources})})},t.prototype.shouldComponentUpdate=function(e,t){return!t.pageResources||(!(this.state.pageResources||!t.pageResources)||(this.state.pageResources.component!==t.pageResources.component||(this.state.pageResources.json!==t.pageResources.json||!(this.state.location.key===t.location.key||!t.pageResources.page||!t.pageResources.page.matchPath&&!t.pageResources.page.path))))},t.prototype.render=function(){var e=(0,m.apiRunner)("replaceComponentRenderer",{props:this.props}),t=e[0];return this.props.page?this.state.pageResources?t||(0,c.createElement)(this.state.pageResources.component,i({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?t||(0,c.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:y,i({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},t}(s.default.Component);v.propTypes={page:f.default.bool,layout:f.default.bool,location:f.default.object},t.default=v,e.exports=t.default},46:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(295),a=o(r),u=(0,a.default)();e.exports=u},174:function(e,t,n){"use strict";var o=n(63),r={};e.exports=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(n){var a=decodeURIComponent(n),u=a.slice(t.length);if(u.split("#").length>1&&(u=u.split("#").slice(0,-1).join("")),u.split("?").length>1&&(u=u.split("?").slice(0,-1).join("")),r[u])return r[u];var i=void 0;return e.some(function(e){if(e.matchPath){if((0,o.matchPath)(u,{path:e.path})||(0,o.matchPath)(u,{path:e.matchPath}))return i=e,r[u]=e,!0}else{if((0,o.matchPath)(u,{path:e.path,exact:!0}))return i=e,r[u]=e,!0;if((0,o.matchPath)(u,{path:e.path+"index.html"}))return i=e,r[u]=e,!0}return!1}),i}}},280:function(e,t,n){n(16),e.exports=function(e){return n.e(0xa2868bfb69fc,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(289)})})}},279:function(e,t,n){n(16),e.exports=function(e){return n.e(0xe70826b53c04,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(290)})})}},281:function(e,t,n){n(16),e.exports=function(e){return n.e(0x81b8806e4260,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(291)})})}},56:function(e,t,n){n(16),e.exports=function(e){return n.e(60335399758886,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(88)})})}},282:function(e,t,n){n(16),e.exports=function(e){return n.e(0x7b71d9db271c,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(292)})})}},275:function(e,t,n){n(16),e.exports=function(e){return n.e(0x67ef26645b2a,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(175)})})}},110:function(e,t,n){(function(t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(4),a=(o(r),n(174)),u=o(a),i=n(46),c=o(i),s=void 0,l={},f={},p={},d={},h={},g=[],m=[],y={},v=[],R={},w=function(e){return e&&e.default||e},P=void 0,x=!0;P=n(176)({getNextQueuedResources:function(){return v.slice(-1)[0]},createResourceDownload:function(e){j(e,function(){v=v.filter(function(t){return t!==e}),P.onResourcedFinished(e)})}}),c.default.on("onPreLoadPageResources",function(e){P.onPreLoadPageResources(e)}),c.default.on("onPostLoadPageResources",function(e){P.onPostLoadPageResources(e)});var _=function(e,t){return R[e]>R[t]?1:R[e]<R[t]?-1:0},b=function(e,t){return y[e]>y[t]?1:y[e]<y[t]?-1:0},j=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(d[e])t.nextTick(function(){n(null,d[e])});else{var o="component---"===e.slice(0,12)?f.components[e]||f.layouts[e]:f.json[e];o(function(t,o){d[e]=o,n(t,o)})}},E=function(e,n){h[e]?t.nextTick(function(){n(null,h[e])}):j(e,function(t,o){if(t)n(t);else{var r=w(o());h[e]=r,n(t,r)}})},C=1,O={empty:function(){m=[],y={},R={},v=[],g=[]},addPagesArray:function(e){g=e;var t="";t="/gatsby-redirect-with-path-prefix",s=(0,u.default)(e,t)},addDevRequires:function(e){l=e},addProdRequires:function(e){f=e},dequeue:function(e){return m.pop()},enqueue:function(e){if(!g.some(function(t){return t.path===e}))return!1;var t=1/C;C+=1,y[e]?y[e]+=1:y[e]=1,O.has(e)||m.unshift(e),m.sort(b);var n=s(e);return n.jsonName&&(R[n.jsonName]?R[n.jsonName]+=1+t:R[n.jsonName]=1+t,v.indexOf(n.jsonName)!==-1||d[n.jsonName]||v.unshift(n.jsonName)),n.componentChunkName&&(R[n.componentChunkName]?R[n.componentChunkName]+=1+t:R[n.componentChunkName]=1+t,v.indexOf(n.componentChunkName)!==-1||d[n.jsonName]||v.unshift(n.componentChunkName)),v.sort(_),P.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:v,resourcesCount:R}},getPages:function(){return{pathArray:m,pathCount:y}},getPage:function(e){return s(e)},has:function(e){return m.some(function(t){return t===e})},getResourcesForPathname:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};x&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(s(e)||navigator.serviceWorker.getRegistrations().then(function(e){for(var t=e,n=Array.isArray(t),o=0,t=n?t:t[Symbol.iterator]();;){var r;if(n){if(o>=t.length)break;r=t[o++]}else{if(o=t.next(),o.done)break;r=o.value}var a=r;a.unregister()}window.location.reload()})),x=!1;var o=s(e);if(!o)return void console.log("A page wasn't found for \""+e+'"');if(e=o.path,p[e])return t.nextTick(function(){n(p[e]),c.default.emit("onPostLoadPageResources",{page:o,pageResources:p[e]})}),p[e];c.default.emit("onPreLoadPageResources",{path:e});var r=void 0,a=void 0,u=void 0,i=function(){if(r&&a&&(!o.layoutComponentChunkName||u)){p[e]={component:r,json:a,layout:u,page:o};var t={component:r,json:a,layout:u,page:o};n(t),c.default.emit("onPostLoadPageResources",{page:o,pageResources:t})}};return E(o.componentChunkName,function(e,t){e&&console.log("Loading the component for "+o.path+" failed"),r=t,i()}),E(o.jsonName,function(e,t){e&&console.log("Loading the JSON for "+o.path+" failed"),a=t,i()}),void(o.layoutComponentChunkName&&E(o.layoutComponentChunkName,function(e,t){e&&console.log("Loading the Layout for "+o.path+" failed"),u=t,i()}))},peek:function(e){return m.slice(-1)[0]},length:function(){return m.length},indexOf:function(e){return m.length-m.indexOf(e)-1}};e.exports=O}).call(t,n(89))},293:function(e,t){e.exports=[{componentChunkName:"component---src-pages-404-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404.json",path:"/404/"},{componentChunkName:"component---src-pages-index-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"index.json",path:"/"},{componentChunkName:"component---src-pages-page-2-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"page-2.json",path:"/page-2/"},{componentChunkName:"component---src-pages-404-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404-html.json",path:"/404.html"}]},176:function(e,t){"use strict";e.exports=function(e){var t=e.getNextQueuedResources,n=e.createResourceDownload,o=[],r=[],a=function(){var e=t();e&&(r.push(e),n(e))},u=function(e){switch(e.type){case"RESOURCE_FINISHED":r=r.filter(function(t){return t!==e.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":o.push(e.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":o=o.filter(function(t){return t!==e.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===r.length&&0===o.length&&a()},0)};return{onResourcedFinished:function(e){u({type:"RESOURCE_FINISHED",payload:e})},onPreLoadPageResources:function(e){u({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:e})},onPostLoadPageResources:function(e){u({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:e})},onNewResourcesAdded:function(){u({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:o,resourcesDownloading:r}},empty:function(){o=[],r=[]}}}},0:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=n(109),u=n(4),i=o(u),c=n(141),s=o(c),l=n(63),f=n(286),p=n(85),d=o(p),h=n(260),g=o(h),m=n(46),y=o(m),v=n(293),R=o(v),w=n(294),P=o(w),x=n(173),_=o(x),b=n(172),j=o(b),E=n(110),C=o(E);n(250),window.___emitter=y.default,C.default.addPagesArray(R.default),C.default.addProdRequires(j.default),window.asyncRequires=j.default,window.___loader=C.default,window.matchPath=l.matchPath;var O=(0,d.default)(),N=P.default.reduce(function(e,t){return e[t.fromPath]=t,e},{}),k=function(e){var t=N[e];return null!=t&&(O.replace(t.toPath),!0)};k(window.location.pathname),(0,a.apiRunnerAsync)("onClientEntry").then(function(){function e(e){window.___history||(window.___history=e,e.listen(function(e,t){k(e.pathname)||(0,a.apiRunner)("onRouteUpdate",{location:e,action:t})}))}function t(e,t){var n=t.location.pathname,o=(0,a.apiRunner)("shouldUpdateScroll",{prevRouterProps:e,pathname:n});if(o.length>0)return o[0];if(e){var r=e.location.pathname;if(r===n)return!1}return!0}(0,a.apiRunner)("registerServiceWorker").length>0&&n(177);var o=function(e){function t(n){n.page.path===C.default.getPage(e).path&&(y.default.off("onPostLoadPageResources",t),clearTimeout(o),window.___history.push(e))}var n=N[e];if(n&&(e=n.toPath),window.location.pathname!==e){var o=setTimeout(function(){y.default.off("onPostLoadPageResources",t),y.default.emit("onDelayedLoadPageResources",{pathname:e}),window.___history.push(e)},1e3);C.default.getResourcesForPathname(e)?(clearTimeout(o),window.___history.push(e)):y.default.on("onPostLoadPageResources",t)}};window.___navigateTo=o,(0,a.apiRunner)("onRouteUpdate",{location:O.location,action:O.action});var c=(0,a.apiRunner)("replaceRouterComponent",{history:O})[0],p=function(e){var t=e.children;return i.default.createElement(l.Router,{history:O},t)},d=(0,l.withRouter)(_.default);C.default.getResourcesForPathname(window.location.pathname,function(){var n=function(){return(0,u.createElement)(c?c:p,null,(0,u.createElement)(f.ScrollContext,{shouldUpdateScroll:t},(0,u.createElement)(d,{layout:!0,children:function(t){return(0,u.createElement)(l.Route,{render:function(n){e(n.history);var o=t?t:n;return C.default.getPage(o.location.pathname)?(0,u.createElement)(_.default,r({page:!0},o)):(0,u.createElement)(_.default,{location:{page:!0,pathname:"/404.html"}})}})}})))},o=(0,a.apiRunner)("wrapRootComponent",{Root:n},n)[0];(0,g.default)(function(){return s.default.render(i.default.createElement(o,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,a.apiRunner)("onInitialClientRender")})})})})},294:function(e,t){e.exports=[{fromPath:"/gatsby-redirect-with-path-prefix/redirect-page",isPermanent:!0,toPath:"/gatsby-redirect-with-path-prefix/page-2/",redirectInBrowser:!0},{fromPath:"/gatsby-redirect-with-path-prefix/redirect-page/",isPermanent:!0,toPath:"/gatsby-redirect-with-path-prefix/page-2/",redirectInBrowser:!0}]},177:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(46),a=o(r),u="/";u="/gatsby-redirect-with-path-prefix/","serviceWorker"in navigator&&navigator.serviceWorker.register(u+"sw.js").then(function(e){e.addEventListener("updatefound",function(){var t=e.installing;console.log("installingWorker",t),t.addEventListener("statechange",function(){switch(t.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),a.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(e){console.error("Error during service worker registration:",e)})},260:function(e,t,n){!function(t,n){e.exports=n()}("domready",function(){var e,t=[],n=document,o=n.documentElement.doScroll,r="DOMContentLoaded",a=(o?/^loaded|^c/:/^loaded|^i|^c/).test(n.readyState);return a||n.addEventListener(r,e=function(){for(n.removeEventListener(r,e),a=1;e=t.shift();)e()}),function(e){a?setTimeout(e,0):t.push(e)}})},16:function(e,t,n){"use strict";function o(){function e(e){var t=o.lastChild;return"SCRIPT"!==t.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",t)):void(t.onload=t.onerror=function(){t.onload=t.onerror=null,setTimeout(e,0)})}var t,o=document.querySelector("head"),r=n.e,a=n.s;n.e=function(o,u){var i=!1,c=!0,s=function(e){u&&(u(n,e),u=null)};return!a&&t&&t[o]?void s(!0):(r(o,function(){i||(i=!0,c?setTimeout(function(){s()}):s())}),void(i||(c=!1,e(function(){i||(i=!0,a?a[o]=void 0:(t||(t={}),t[o]=!0),s(!0))}))))}}o()},87:function(e,t){"use strict";var n={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},r=Object.defineProperty,a=Object.getOwnPropertyNames,u=Object.getOwnPropertySymbols,i=Object.getOwnPropertyDescriptor,c=Object.getPrototypeOf,s=c&&c(Object);e.exports=function e(t,l,f){if("string"!=typeof l){if(s){var p=c(l);p&&p!==s&&e(t,p,f)}var d=a(l);u&&(d=d.concat(u(l)));for(var h=0;h<d.length;++h){var g=d[h];if(!(n[g]||o[g]||f&&f[g])){var m=i(l,g);try{r(t,g,m)}catch(e){}}}return t}return t}},295:function(e,t){function n(e){return e=e||Object.create(null),{on:function(t,n){(e[t]||(e[t]=[])).push(n)},off:function(t,n){e[t]&&e[t].splice(e[t].indexOf(n)>>>0,1)},emit:function(t,n){(e[t]||[]).map(function(e){e(n)}),(e["*"]||[]).map(function(e){e(t,n)})}}}e.exports=n},89:function(e,t){function n(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function r(e){if(l===setTimeout)return setTimeout(e,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(t){try{return l.call(null,e,0)}catch(t){return l.call(this,e,0)}}}function a(e){if(f===clearTimeout)return clearTimeout(e);if((f===o||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(t){try{return f.call(null,e)}catch(t){return f.call(this,e)}}}function u(){g&&d&&(g=!1,d.length?h=d.concat(h):m=-1,h.length&&i())}function i(){if(!g){var e=r(u);g=!0;for(var t=h.length;t;){for(d=h,h=[];++m<t;)d&&d[m].run();m=-1,t=h.length}d=null,g=!1,a(e)}}function c(e,t){this.fun=e,this.array=t}function s(){}var l,f,p=e.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(e){l=n}try{f="function"==typeof clearTimeout?clearTimeout:o}catch(e){f=o}}();var d,h=[],g=!1,m=-1;p.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];h.push(new c(e,t)),1!==h.length||g||r(i)},c.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=s,p.addListener=s,p.once=s,p.off=s,p.removeListener=s,p.removeAllListeners=s,p.emit=s,p.prependListener=s,p.prependOnceListener=s,p.listeners=function(e){return[]},p.binding=function(e){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},276:function(e,t,n){n(16),e.exports=function(e){return n.e(0x9427c64ab85d,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(179)})})}},277:function(e,t,n){n(16),e.exports=function(e){return n.e(35783957827783,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(180)})})}},278:function(e,t,n){n(16),e.exports=function(e){return n.e(0xc6c285f8fd10,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(181)})})}}});
//# sourceMappingURL=app-68bb9850cad3c8bf6120.js.map