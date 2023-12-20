"use strict";(self.webpackChunkfullstackbook=self.webpackChunkfullstackbook||[]).push([[5727],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>p});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),h=l(a),p=r,f=h["".concat(s,".").concat(p)]||h[p]||u[p]||i;return a?n.createElement(f,c(c({ref:t},d),{},{components:a})):n.createElement(f,c({ref:t},d))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,c=new Array(i);c[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var l=2;l<i;l++)c[l]=a[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},6075:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=a(7462),r=(a(7294),a(3905));const i={},c="Caching",o={unversionedId:"backend/caching",id:"backend/caching",title:"Caching",description:"Caching is a technique that allows data to be temporarily stored in a faster memory, such as RAM or a local disk, for quick access. This is done in order to reduce the amount of time and resources needed to retrieve the data from the original source, such as a database or a web service.",source:"@site/docs/backend/caching.md",sourceDirName:"backend",slug:"/backend/caching",permalink:"/fullstackbook/backend/caching",draft:!1,editUrl:"https://github.com/travisluong/fullstackbook/tree/main/docs/backend/caching.md",tags:[],version:"current",frontMatter:{},sidebar:"backendSidebar",previous:{title:"Background Jobs",permalink:"/fullstackbook/backend/background-jobs"},next:{title:"CAP Theorem",permalink:"/fullstackbook/backend/cap-theorem"}},s={},l=[],d={toc:l};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"caching"},"Caching"),(0,r.kt)("p",null,"Caching is a technique that allows data to be temporarily stored in a faster memory, such as RAM or a local disk, for quick access. This is done in order to reduce the amount of time and resources needed to retrieve the data from the original source, such as a database or a web service."),(0,r.kt)("p",null,"Caching can greatly improve the performance of applications, especially those that are heavily reliant on data access. By caching frequently accessed data, requests can be served more quickly and with less load on the backend systems."),(0,r.kt)("p",null,"There are several different types of caching techniques, including:"),(0,r.kt)("p",null,"In-memory caching: This involves storing data in a fast-access, volatile memory, such as RAM. This type of caching is typically used for frequently accessed data that changes infrequently, such as configuration data or reference data."),(0,r.kt)("p",null,"Distributed caching: This involves storing data in a distributed cache across multiple nodes or servers. This type of caching is typically used for large-scale applications that need to handle high volumes of traffic and data."),(0,r.kt)("p",null,"Disk caching: This involves storing data on a local disk or SSD. This type of caching is typically used for frequently accessed data that is too large to fit into memory."),(0,r.kt)("p",null,"Client-side caching: This involves caching data on the client side, such as in the user's browser or mobile device. This type of caching is typically used for static content, such as images, CSS, and JavaScript files."),(0,r.kt)("p",null,"Caching can be implemented in a variety of ways, depending on the specific needs of the application. Some common techniques include:"),(0,r.kt)("p",null,"Manual caching: This involves manually storing data in a cache, and retrieving it when needed."),(0,r.kt)("p",null,"Automatic caching: This involves using caching libraries or frameworks to automatically store and retrieve data from the cache."),(0,r.kt)("p",null,"Cache invalidation: This involves removing cached data when it is no longer valid or relevant. This can be done manually or automatically, depending on the application."),(0,r.kt)("p",null,"Overall, caching is an important technique for improving the performance and scalability of applications. By reducing the load on backend systems and improving response times, caching can help ensure that applications are fast, reliable, and efficient."))}u.isMDXComponent=!0}}]);