(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=s,t.useAmp=function(){return s(r.default.useContext(a.AmpStateContext))};var c,r=(c=n("q1tI"))&&c.__esModule?c:{default:c},a=n("lwAK");function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,c=e.hybrid,r=void 0!==c&&c,a=e.hasQuery,s=void 0!==a&&a;return n||r&&s}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=h,t.default=void 0;var c,r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=o();if(t&&t.has(e))return t.get(e);var n={},c=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=c?Object.getOwnPropertyDescriptor(e,r):null;a&&(a.get||a.set)?Object.defineProperty(n,r,a):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),a=(c=n("Xuae"))&&c.__esModule?c:{default:c},s=n("lwAK"),i=n("FYa8"),l=n("/0+H");function o(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}function h(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function u(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function j(e,t){return e.reduce((function(e,t){var n=r.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(u,[]).reverse().concat(h(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,c={};return function(r){var a=!0;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){var s=r.key.slice(r.key.indexOf("$")+1);e.has(s)?a=!1:e.add(s)}switch(r.type){case"title":case"base":t.has(r.type)?a=!1:t.add(r.type);break;case"meta":for(var i=0,l=d.length;i<l;i++){var o=d[i];if(r.props.hasOwnProperty(o))if("charSet"===o)n.has(o)?a=!1:n.add(o);else{var h=r.props[o],u=c[o]||new Set;u.has(h)?a=!1:(u.add(h),c[o]=u)}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return r.default.cloneElement(e,{key:n})}))}function f(e){var t=e.children,n=(0,r.useContext)(s.AmpStateContext),c=(0,r.useContext)(i.HeadManagerContext);return r.default.createElement(a.default,{reduceComponentsToState:j,headManager:c,inAmpMode:(0,l.isInAmpMode)(n)},t)}f.rewind=function(){};var m=f;t.default=m},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,n){var c=n("WkPL");e.exports=function(e){if(Array.isArray(e))return c(e)}},RIqP:function(e,t,n){var c=n("Ijbi"),r=n("EbDI"),a=n("ZhPi"),s=n("Bnag");e.exports=function(e){return c(e)||r(e)||a(e)||s()}},WSXl:function(e,t,n){e.exports={main:"style_main__3NH-6"}},Xuae:function(e,t,n){"use strict";var c=n("RIqP"),r=n("lwsE"),a=n("W8MJ"),s=(n("PJYZ"),n("7W2i")),i=n("a1gu"),l=n("Nsbk");function o(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,c=l(e);if(t){var r=l(this).constructor;n=Reflect.construct(c,arguments,r)}else n=c.apply(this,arguments);return i(this,n)}}t.__esModule=!0,t.default=void 0;var h=n("q1tI"),u=function(e){s(n,e);var t=o(n);function n(e){var a;return r(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(c(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(h.Component);t.default=u},YDzH:function(e){e.exports=JSON.parse('{"footer":{"title":"Inaccessible Sites","quote":{"body":"\u201cFar too few designers put any thought into usability, ending up with a great product that\u2019s completely inaccessible.\u201d","citation":"James Dyson"}},"copyright":"\xa92021 N.E.Lilly | All stories, art, posts, and other content are the copyright of their respective authors."}')},YFqc:function(e,t,n){e.exports=n("cTJO")},bgxN:function(e,t,n){e.exports={notice:"style_notice__AWDkc",open:"style_open__3_tiO",noticeInfo:"style_noticeInfo__2QPY6",noticeSuccess:"style_noticeSuccess__1cv5w",noticeWarning:"style_noticeWarning__18P4w",noticeError:"style_noticeError__2aPzh",noticeButton:"style_noticeButton__2iCHp"}},cTJO:function(e,t,n){"use strict";var c=n("J4zp"),r=n("284h");t.__esModule=!0,t.default=void 0;var a,s=r(n("q1tI")),i=n("elyg"),l=n("nOHt"),o=new Map,h=window.IntersectionObserver,u={};var d=function(e,t){var n=a||(h?a=new h((function(e){e.forEach((function(e){if(o.has(e.target)){var t=o.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),o.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),o.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}o.delete(e)}):function(){}};function j(e,t,n,c){(0,i.isLocalURL)(t)&&(e.prefetch(t,n,c).catch((function(e){0})),u[t+"%"+n]=!0)}var f=function(e){var t=!1!==e.prefetch,n=s.default.useState(),r=c(n,2),a=r[0],o=r[1],f=(0,l.useRouter)(),m=f&&f.pathname||"/",b=s.default.useMemo((function(){var t=(0,i.resolveHref)(m,e.href,!0),n=c(t,2),r=n[0],a=n[1];return{href:r,as:e.as?(0,i.resolveHref)(m,e.as):a||r}}),[m,e.href,e.as]),p=b.href,x=b.as;s.default.useEffect((function(){if(t&&h&&a&&a.tagName&&(0,i.isLocalURL)(p)&&!u[p+"%"+x])return d(a,(function(){j(f,p,x)}))}),[t,a,p,x,f]);var O=e.children,v=e.replace,y=e.shallow,_=e.scroll,g=e.locale;"string"===typeof O&&(O=s.default.createElement("a",null,O));var w=s.Children.only(O),N={ref:function(e){e&&o(e),w&&"object"===typeof w&&w.ref&&("function"===typeof w.ref?w.ref(e):"object"===typeof w.ref&&(w.ref.current=e))},onClick:function(e){w.props&&"function"===typeof w.props.onClick&&w.props.onClick(e),e.defaultPrevented||function(e,t,n,c,r,a,s,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(n))&&(e.preventDefault(),null==s&&(s=c.indexOf("#")<0),t[r?"replace":"push"](n,c,{shallow:a,locale:l}).then((function(e){e&&s&&(window.scrollTo(0,0),document.body.focus())})))}(e,f,p,x,v,y,_,g)}};return t&&(N.onMouseEnter=function(e){(0,i.isLocalURL)(p)&&(w.props&&"function"===typeof w.props.onMouseEnter&&w.props.onMouseEnter(e),j(f,p,x,{priority:!0}))}),(e.passHref||"a"===w.type&&!("href"in w.props))&&(N.href=(0,i.addBasePath)((0,i.addLocale)(x,"undefined"!==typeof g?g:f&&f.locale,f&&f.defaultLocale))),s.default.cloneElement(w,N)};t.default=f},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var c;t.__esModule=!0,t.AmpStateContext=void 0;var r=((c=n("q1tI"))&&c.__esModule?c:{default:c}).default.createContext({});t.AmpStateContext=r},ntAx:function(e,t,n){"use strict";var c=n("nKUr"),r=n("YFqc"),a=n.n(r),s=n("WSXl"),i=n("q1tI"),l=n("wAV2"),o=function(){var e=Object(i.useState)(!1),t=e[0],n=e[1];return Object(c.jsxs)("nav",{className:"helm",children:[Object(c.jsx)(a.a,{href:"/",children:Object(c.jsx)("a",{className:"helm__item helm__title",children:"Inaccessible Sites"})}),Object(c.jsx)("a",{href:"#",id:"main_nav",className:"helm__item",onClick:function(e){n(!t),e.preventDefault()},children:Object(c.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"32",width:"32",viewBox:"0 0 100 100",children:[Object(c.jsx)("defs",{children:Object(c.jsx)("path",{id:"helm",d:"M95.065 49.609a2.07 2.07 0 0 0-.414-1.094c-.382-.504-.997-.839-1.667-.99-1.571-.354-3.257.488-4.786.588-1.096.072-2.173.157-3.267.086-.116-.516-.619-.913-1.253-.913h-1.645a31.946 31.946 0 0 0-7.385-17.833l1.162-1.162c.448-.448.523-1.085.24-1.532.724-.824 1.545-1.525 2.371-2.249 1.152-1.01 2.939-1.607 3.8-2.968.497-.786.657-1.719.303-2.474-.212-.452-.604-.823-.975-1.141a2.07 2.07 0 0 0-1.067-.481c-.627-.086-1.298.111-1.879.478-1.361.861-1.958 2.648-2.968 3.8-.724.826-1.425 1.647-2.249 2.371-.447-.283-1.084-.208-1.532.24l-1.162 1.162a31.949 31.949 0 0 0-17.833-7.385v-1.645c0-.634-.397-1.137-.913-1.253-.071-1.094.014-2.171.086-3.267.1-1.529.942-3.214.588-4.786-.204-.907-.751-1.68-1.535-1.964-.47-.17-1.01-.155-1.496-.117a2.07 2.07 0 0 0-1.094.414c-.504.382-.839.997-.99 1.667-.354 1.571.488 3.257.588 4.786.072 1.096.157 2.173.086 3.267-.516.116-.913.619-.913 1.253v1.645a31.946 31.946 0 0 0-17.833 7.385l-1.162-1.162c-.448-.448-1.085-.523-1.532-.24-.824-.724-1.525-1.545-2.249-2.371-1.01-1.152-1.607-2.939-2.968-3.8-.786-.497-1.719-.657-2.474-.303-.452.212-.823.604-1.141.975a2.07 2.07 0 0 0-.481 1.067c-.086.627.111 1.298.478 1.879.861 1.361 2.648 1.958 3.8 2.968.826.724 1.647 1.425 2.371 2.249-.283.447-.208 1.084.24 1.532l1.162 1.162a31.949 31.949 0 0 0-7.385 17.833H16.45c-.634 0-1.137.397-1.253.913-1.094.071-2.171-.014-3.267-.086-1.529-.1-3.214-.942-4.786-.588-.907.204-1.68.751-1.964 1.535-.17.47-.155 1.01-.117 1.496.03.388.167.768.414 1.094.382.504.997.839 1.667.99 1.571.354 3.257-.488 4.786-.588 1.096-.072 2.173-.157 3.267-.086.116.516.619.913 1.253.913h1.645a31.946 31.946 0 0 0 7.385 17.833l-1.162 1.162c-.448.448-.523 1.085-.24 1.532-.724.824-1.545 1.525-2.371 2.249-1.152 1.01-2.939 1.607-3.8 2.968-.497.786-.657 1.719-.303 2.474.212.452.604.823.975 1.141a2.07 2.07 0 0 0 1.067.481c.627.086 1.298-.111 1.879-.478 1.361-.861 1.958-2.648 2.968-3.8.724-.826 1.425-1.647 2.249-2.371.447.283 1.084.208 1.532-.24l1.162-1.162a31.949 31.949 0 0 0 17.833 7.385v1.645c0 .634.397 1.137.913 1.253.071 1.094-.014 2.171-.086 3.267-.1 1.529-.942 3.214-.588 4.786.204.907.751 1.68 1.535 1.964.47.17 1.01.155 1.496.117a2.07 2.07 0 0 0 1.094-.414c.504-.382.839-.997.99-1.667.354-1.571-.488-3.257-.588-4.786-.072-1.096-.157-2.173-.086-3.267.516-.116.913-.619.913-1.253v-1.645a31.946 31.946 0 0 0 17.833-7.385l1.162 1.162c.448.448 1.085.523 1.532.24.824.724 1.525 1.545 2.249 2.371 1.01 1.152 1.607 2.939 2.968 3.8.786.497 1.719.657 2.474.303.452-.212.823-.604 1.141-.975a2.07 2.07 0 0 0 .481-1.067c.086-.627-.111-1.298-.478-1.879-.861-1.361-2.648-1.958-3.8-2.968-.826-.724-1.647-1.425-2.371-2.249.283-.447.208-1.084-.24-1.532l-1.162-1.162a31.949 31.949 0 0 0 7.385-17.833h1.645c.634 0 1.137-.397 1.253-.913 1.094-.071 2.171.014 3.267.086 1.529.1 3.214.942 4.786.588.907-.204 1.68-.751 1.964-1.535.167-.47.152-1.01.114-1.496zm-71.626 1.348a.875.875 0 1 1 0-1.75.875.875 0 0 1 0 1.75zm44.833-20.32a.874.874 0 1 1 1.237 1.235.874.874 0 0 1-1.237-1.235zm-16.383 1.355c.545-.088.971-.609.971-1.267v-1.54a20.973 20.973 0 0 1 10.001 4.144l-1.088 1.088c-.434.434-.517 1.045-.266 1.49l-5.367 5.367c-.445-.251-1.056-.168-1.49.266l-.483.483a8.94 8.94 0 0 0-1.307-.546v-.678c0-.658-.426-1.179-.971-1.267v-7.54zm-1.825-9.41a.875.875 0 1 1 0 1.75.875.875 0 0 1 0-1.75zm-2.796 6.603v1.54c0 .614.373 1.105.865 1.242v7.59c-.492.137-.865.628-.865 1.242v.678a8.894 8.894 0 0 0-1.307.546l-.483-.483c-.465-.465-1.135-.532-1.583-.209L38.563 36c.323-.448.256-1.118-.209-1.583l-1.088-1.088a20.982 20.982 0 0 1 10.002-4.144zm-16.649 1.452a.874.874 0 1 1 1.237 1.235.874.874 0 0 1-1.237-1.235zm2.693 6.647l1.088 1.088c.434.434 1.045.517 1.49.266l5.367 5.367c-.251.445-.168 1.056.266 1.49l.483.483a8.94 8.94 0 0 0-.546 1.307h-.678c-.658 0-1.179.426-1.267.971h-7.54c-.088-.545-.609-.971-1.267-.971h-1.54a20.963 20.963 0 0 1 4.144-10.001zm-1.456 32.243a.874.874 0 1 1-1.237-1.235.874.874 0 0 1 1.237 1.235zm2.543-7.735l-1.088 1.088a20.963 20.963 0 0 1-4.144-10.001h1.54c.614 0 1.105-.373 1.242-.865h7.59c.137.492.628.865 1.242.865h.678c.147.453.332.889.546 1.307l-.483.483c-.465.465-.532 1.135-.209 1.583l-5.332 5.332c-.447-.324-1.117-.257-1.582.208zm13.84 6.38c-.545.088-.971.609-.971 1.267v1.54a20.973 20.973 0 0 1-10.001-4.144l1.088-1.088c.434-.434.517-1.045.266-1.49l5.367-5.367c.445.251 1.056.168 1.49-.266l.483-.483a8.94 8.94 0 0 0 1.307.546v.678c0 .658.426 1.179.971 1.267v7.54zm1.825 9.41a.875.875 0 1 1 0-1.75.875.875 0 0 1 0 1.75zm0-24.773a2.727 2.727 0 1 1 0-5.454 2.727 2.727 0 0 1 0 5.454zm2.797 18.17v-1.54c0-.614-.373-1.104-.865-1.242v-7.59c.492-.137.865-.628.865-1.242v-.678a8.894 8.894 0 0 0 1.307-.546l.483.483c.465.465 1.135.532 1.583.209l5.332 5.332c-.323.448-.256 1.118.209 1.583l1.088 1.088a21 21 0 0 1-10.002 4.143zm16.649-1.452a.874.874 0 1 1-1.237-1.235.874.874 0 0 1 1.237 1.235zm-2.693-6.648l-1.088-1.088c-.434-.434-1.045-.517-1.49-.266l-5.367-5.367c.251-.445.168-1.056-.266-1.49l-.483-.483a8.94 8.94 0 0 0 .546-1.307h.678c.658 0 1.179-.426 1.267-.971h7.54c.088.545.609.971 1.267.971h1.54a20.975 20.975 0 0 1-4.144 10.001zm2.604-15.594c-.614 0-1.104.373-1.242.865h-7.59c-.137-.492-.628-.865-1.242-.865h-.678a8.894 8.894 0 0 0-.546-1.307l.483-.483c.465-.465.532-1.135.209-1.583l5.332-5.332c.448.323 1.118.256 1.583-.209l1.088-1.088a20.959 20.959 0 0 1 4.144 10.001h-1.541zm7.268 3.672a.875.875 0 1 1 0-1.75.875.875 0 0 1 0 1.75z"})}),Object(c.jsx)("use",{href:"#helm"})]})}),Object(c.jsxs)("section",{id:"navigation",className:"".concat(l.menu," ").concat(!0===t?l.open:""),children:[Object(c.jsx)("a",{href:"#",className:l.siteNavButton,onClick:function(e){n(!t),e.preventDefault()},children:"\xd7"}),Object(c.jsxs)("h2",{children:[Object(c.jsx)("svg",{height:"64",width:"64",viewBox:"0 0 100 100",children:Object(c.jsx)("use",{href:"#helm"})})," Navigation"]}),Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:Object(c.jsx)(a.a,{href:"/",children:Object(c.jsx)("a",{className:"".concat(l.menuItem," ").concat(l.menuTitle),children:"Home"})})}),Object(c.jsx)("li",{children:Object(c.jsx)(a.a,{href:"/isolated/",children:Object(c.jsx)("a",{className:"".concat(l.menuItem," ").concat(l.menuTitle),children:"Isolated"})})}),Object(c.jsx)("li",{children:Object(c.jsx)(a.a,{href:"/remote/",children:Object(c.jsx)("a",{className:"".concat(l.menuItem," ").concat(l.menuTitle),children:"Remote"})})}),Object(c.jsx)("li",{children:Object(c.jsx)(a.a,{href:"/nebulous/",children:Object(c.jsx)("a",{className:"".concat(l.menuItem," ").concat(l.menuTitle),children:"Nebulous"})})}),Object(c.jsx)("li",{children:Object(c.jsx)(a.a,{href:"/unreachable/",children:Object(c.jsx)("a",{className:"".concat(l.menuItem," ").concat(l.menuTitle),children:"Unreachable"})})}),Object(c.jsxs)("li",{children:[Object(c.jsx)(a.a,{href:"/colophon/",children:Object(c.jsx)("a",{className:"".concat(l.menuItem," ").concat(l.menuTitle),children:"Colophon"})}),Object(c.jsx)("ul",{children:Object(c.jsx)("li",{children:Object(c.jsx)(a.a,{href:"https://lilly.art/",target:"_blank",rel:"noopener noreferrer",children:"About N.E.Lilly"})})})]})]})]})]})},h=n("wQRP"),u=function(e){var t=e.open;return Object(c.jsxs)("section",{id:"navigation",className:"".concat(h.menu," ").concat(!0===t?h.open:""),children:[Object(c.jsxs)("h2",{children:[Object(c.jsx)("svg",{height:"64",width:"64",viewBox:"0 0 100 100",children:Object(c.jsx)("use",{href:"#helm"})})," Navigation"]}),Object(c.jsxs)("ul",{children:[Object(c.jsxs)("li",{children:[Object(c.jsx)("a",{href:"information",className:"".concat(h.menuItem," ").concat(h.menuTitle),children:"Isolated"}),Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"#philadelphia",className:h.menuItem,children:"Philadelphia"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"#area_51",className:h.menuItem,children:"Area 51"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"#mcmurdo_station",className:h.menuItem,children:"McMurdo Station"})})]})]}),Object(c.jsxs)("li",{children:[Object(c.jsx)("a",{href:"remote",className:"".concat(h.menuItem," ").concat(h.menuTitle),children:"Remote"}),Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"#mount_everest",className:h.menuItem,children:"Mount Everest"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"#easter_island",className:h.menuItem,children:"Easter Island"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"#nan_madol",className:h.menuItem,children:"Nan Madol"})})]})]}),Object(c.jsxs)("li",{children:[Object(c.jsx)("a",{href:"nebulous",className:"".concat(h.menuItem," ").concat(h.menuTitle),children:"Distant"}),Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"#clouds",className:h.menuItem,children:"The Clouds"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"#stratosphere",className:h.menuItem,children:"Stratosphere"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"#moon",className:h.menuItem,children:"The Moon"})})]})]}),Object(c.jsxs)("li",{children:[Object(c.jsx)("a",{href:"unreachable",className:"".concat(h.menuItem," ").concat(h.menuTitle),children:"Unreachable"}),Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"saturn",className:h.menuItem,children:"Saturn"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"uranus",className:h.menuItem,children:"Uranus"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"pluto",className:h.menuItem,children:"Pluto"})})]})]}),Object(c.jsxs)("li",{children:[Object(c.jsx)("a",{href:"info",className:"".concat(h.menuItem," ").concat(h.menuTitle),children:"Site Info"}),Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"/about/",children:"About N.E.Lilly"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"/contact/",children:"Contact"})})]})]})]}),Object(c.jsxs)("fieldset",{className:"search",children:[Object(c.jsx)("legend",{className:"search__legend",children:"Search"}),Object(c.jsx)("input",{className:"searchInput",type:"text",name:"search",placeholder:"Enter Search Term"}),Object(c.jsx)("button",{className:"search__button",type:"submit",children:Object(c.jsxs)("svg",{viewBox:"0 0 100 100",height:"24",width:"24",fill:"none",stroke:"#000",strokeWidth:"6",children:[Object(c.jsx)("circle",{cx:"50",cy:"50",r:"25"}),Object(c.jsx)("path",{d:"M67,67 99,99"})]})})]})]})},d=n("bgxN"),j=function(e){var t=e.message,n=e.level,r=Object(i.useState)("closed"),a=r[0],s=r[1],l=Object(i.useRef)(null);Object(i.useEffect)((function(){"closed"!==localStorage.getItem("noticeOpen")&&setTimeout((function(){return s("open")}),2e3)}),[]);var o="";switch(n){case"info":o=d.noticeInfo;break;case"success":o=d.noticeSuccess;break;case"warning":o=d.noticeWarning;break;case"error":o=d.noticeError;break;default:o=""}return Object(c.jsxs)("div",{className:"".concat(d.notice," ").concat(o," ").concat("open"===a?d.open:""),ref:l,children:[Object(c.jsx)("p",{dangerouslySetInnerHTML:{__html:t}}),Object(c.jsx)("span",{className:d.noticeButton,onClick:function(){s(!a),localStorage.setItem("noticeOpen","closed")},children:"\xd7"})]})},f=n("YDzH");t.a=function(e){var t=e.children;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("header",{className:"site__header",children:[Object(c.jsx)(o,{}),Object(c.jsx)(j,{message:"\u261b NOTICE: There is risk of serious injury posed by emulating activities performed on this site. Participate at your own discretion.",level:"warning"})]}),Object(c.jsx)("div",{id:"main",className:s.main,children:t}),Object(c.jsxs)("footer",{className:"site__footer",children:[Object(c.jsx)("noscript",{children:Object(c.jsx)(u,{open:!1})}),Object(c.jsxs)("section",{className:"site__colophon",children:[Object(c.jsx)("h3",{children:"About"}),Object(c.jsxs)("p",{children:["This site was made by ",Object(c.jsx)("a",{href:"https://lilly.art/",children:"N.E.Lilly"})," in the Greater Philadelphia area, circa 2019. Visit the ",Object(c.jsx)(a.a,{href:"/colophon",children:"Colophon"})," page for technical details."]}),Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"https://github.com/nelilly/inaccessible-website/",children:"Inaccessible Website GitHub Repository"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"https://github.com/nelilly/a11y-manual-testing/",children:"a11y-manual-testing GitHub Repository"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"https://github.com/nelilly/a11y-workflow/",children:"a11y-workflow GitHub Repository"})})]})]}),Object(c.jsxs)("section",{className:"site__connect",children:[Object(c.jsx)("h3",{children:"Connect"}),Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"https://lilly.art/",target:"_blank",rel:"noopener noreferrer",children:Object(c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",children:Object(c.jsx)("path",{d:"M50 95c26 0 21-48 47-48 0-11-19-21-32-4 0-18-1-26-15-38-14 12-15 20-15 38-13-17-32-7-32 4 26 0 21 48 47 48z"})})})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"https://github.com/nelilly/",target:"_blank",rel:"noopener noreferrer",children:Object(c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 21 21",children:Object(c.jsx)("path",{fill:"currentColor",d:"M14.06 11.92c.39 0 .72.19 1 .58.28.38.43.86.43 1.42 0 .56-.14 1.04-.43 1.42-.28.38-.62.58-1 .58-.41 0-.76-.19-1.05-.58-.28-.38-.42-.86-.42-1.42s.14-1.04.42-1.42c.29-.39.64-.58 1.05-.58zm5.03-5.2c1.1 1.19 1.65 2.63 1.65 4.32 0 1.1-.13 2.08-.38 2.96-.25.87-.57 1.59-.96 2.14s-.86 1.04-1.43 1.44c-.57.42-1.09.72-1.56.91-.47.19-1.01.34-1.63.45-.61.11-1.06.16-1.38.18-.31.01-.64.02-1 .02-.08 0-.35.01-.8.02-.44.02-.82.03-1.11.03-.29 0-.67-.01-1.11-.03-.45-.01-.72-.02-.8-.02-.36 0-.7 0-1-.02-.32-.02-.78-.07-1.38-.18-.62-.1-1.16-.25-1.63-.45-.47-.19-.99-.49-1.56-.91a6.3 6.3 0 01-1.43-1.44C1.2 15.59.88 14.88.62 14c-.25-.88-.38-1.86-.38-2.96 0-1.69.55-3.13 1.65-4.32-.1-.06-.11-.66 0-1.78.1-1.13.34-2.17.73-3.12 1.37.14 3.06.92 5.07 2.32.68-.18 1.62-.27 2.8-.27 1.25 0 2.18.09 2.81.27.92-.62 1.8-1.13 2.64-1.52.85-.38 1.47-.61 1.85-.67l.58-.13c.39.95.63 1.99.73 3.12.11 1.12.11 1.72-.01 1.78zm-8.54 11.43c2.46 0 4.32-.3 5.58-.89 1.26-.59 1.9-1.81 1.9-3.65 0-1.07-.4-1.96-1.2-2.67-.41-.39-.9-.62-1.45-.71-.54-.09-1.38-.09-2.51 0s-1.9.13-2.31.13c-.56 0-1.18-.03-1.94-.09s-1.36-.09-1.78-.11c-.44-.01-.9.04-1.4.16-.51.12-.92.32-1.25.62-.77.69-1.16 1.58-1.16 2.68 0 1.84.62 3.06 1.87 3.65 1.24.6 3.1.89 5.56.89h.09zm-3.56-6.23c.39 0 .72.19 1 .58.28.38.42.86.42 1.42 0 .56-.14 1.04-.42 1.42-.28.38-.62.58-1 .58-.42 0-.77-.19-1.05-.58-.28-.38-.42-.86-.42-1.42s.14-1.04.42-1.42c.28-.39.63-.58 1.05-.58z"})})})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"https://linkedin.com/in/nelilly/",target:"_blank",rel:"noopener noreferrer",children:Object(c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -1 19 21",children:Object(c.jsx)("path",{fill:"currentColor",d:"M1.707 0a1.708 1.708 0 11-.004 3.415A1.708 1.708 0 011.707 0zM.234 14.19V4.711h2.945v9.477H.234zm4.792-9.478h2.821v1.295h.04c.393-.746 1.353-1.53 2.785-1.53 2.978 0 3.53 1.961 3.53 4.514v5.198H11.26V9.582c0-1.1-.021-2.515-1.53-2.515-1.531 0-1.764 1.198-1.764 2.433v4.69h-2.94V4.711z",transform:"translate(.479 .48)"})})})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"https://twitter.com/nelilly/",target:"_blank",rel:"noopener noreferrer",children:Object(c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"-1 -1 21 23",children:Object(c.jsx)("path",{fill:"currentColor",d:"M17.996 4.064C18.255 9.851 13.941 16.3 6.303 16.3A11.59 11.59 0 010 14.449a8.247 8.247 0 006.088-1.705 4.11 4.11 0 01-3.84-2.859c.645.12 1.282.086 1.86-.069C2.126 9.42.765 7.638.808 5.726c.551.31 1.189.49 1.86.517A4.119 4.119 0 011.395.749a11.637 11.637 0 008.473 4.305C9.265 2.48 11.22 0 13.872 0c1.18 0 2.256.5 3.005 1.3a8.047 8.047 0 002.609-.999 4.102 4.102 0 01-1.808 2.274 8.245 8.245 0 002.359-.646 8.031 8.031 0 01-2.04 2.135z",transform:"translate(0,2)"})})})})]})]}),Object(c.jsx)("section",{id:"nav",children:"."}),Object(c.jsx)("section",{className:"site__copyright",children:Object(c.jsx)("p",{children:f.copyright})})]})]})}},wAV2:function(e,t,n){e.exports={siteNavButton:"style_siteNavButton__2e8Ms",menu:"style_menu__Sdzds",menuAction:"style_menuAction__2kP64",menuTitle:"style_menuTitle__3ujUw",open:"style_open__3u1hC"}},wQRP:function(e,t,n){e.exports={menu:"style_menu__tG5hT",menuAction:"style_menuAction__2UxYZ",menuTitle:"style_menuTitle__qzSLR",open:"style_open__Jx641"}}}]);