"use strict";(self.webpackChunkfullstackbook=self.webpackChunkfullstackbook||[]).push([[6126],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),c=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=n,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return r?o.createElement(f,i(i({ref:t},s),{},{components:r})):o.createElement(f,i({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1475:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=r(7462),n=(r(7294),r(3905));const a={sidebar_position:1},i="To Do Project",l={unversionedId:"projects/todo/todo",id:"projects/todo/todo",title:"To Do Project",description:"Description",source:"@site/docs/projects/todo/todo.md",sourceDirName:"projects/todo",slug:"/projects/todo/",permalink:"/docs/projects/todo/",draft:!1,editUrl:"https://github.com/travisluong/fullstackbook/tree/main/docs/projects/todo/todo.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"projectsSidebar",previous:{title:"Projects",permalink:"/docs/projects/"},next:{title:"To Do Back End",permalink:"/docs/category/to-do-back-end"}},p={},c=[{value:"Description",id:"description",level:2},{value:"API Contract",id:"api-contract",level:2},{value:"UI Mockup",id:"ui-mockup",level:2},{value:"Back End Topics",id:"back-end-topics",level:2},{value:"Front End Topics",id:"front-end-topics",level:2}],s={toc:c};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"to-do-project"},"To Do Project"),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Build a simple To Do List application."),(0,n.kt)("li",{parentName:"ul"},"Create To Dos."),(0,n.kt)("li",{parentName:"ul"},"Read To Dos."),(0,n.kt)("li",{parentName:"ul"},"Update To Dos."),(0,n.kt)("li",{parentName:"ul"},"Delete To Dos."),(0,n.kt)("li",{parentName:"ul"},"Filter To Dos by All, Active, and Completed.")),(0,n.kt)("h2",{id:"api-contract"},"API Contract"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://documenter.getpostman.com/view/65303/Uze1xQGS"},"https://documenter.getpostman.com/view/65303/Uze1xQGS")),(0,n.kt)("h2",{id:"ui-mockup"},"UI Mockup"),(0,n.kt)("iframe",{width:"400",height:"600",src:"https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1#R7Vptc6o4GP01ftwZSIDqR9%2BqdArtVi9e%2FRYhQhQMC1HRX38TXrQKndu9q7XO6kxrchKScM7x4ZmEGmwHSS9CoWdQB%2Fs1IDlJDXZqAABJ0%2FiXQLYZ0mgoGeBGxMkg%2BQAMyA7noJSjK%2BLg%2BKgjo9RnJDwGbbpcYpsdYSiK6Oa424z6x7OGyMUlYGAjv4yOiMO8DK2r0gHvY%2BJ6xcyylLcEqOicA7GHHLp5B8FuDbYjSllWCpI29gV5BS%2FZdY8ftO4XFuEl%2B8wFbiceP2kPnTpY9Xe9MFxafwd%2F5aOskb%2FKbzhfLNsWDER0tXSwGESqwdbGIwwPQmSL1g3XnGMeC3xek3kxHw5HDCcfrlPe3z23DaYBZtGWdyk8UxCWOwbU8%2FrmwD8sWPbeca8UHVGuubsf%2B0ALL%2BTM%2FAuWQAVLms%2Bnbc0ovynhPp9GaYv2z0oIyomAWvp5D2lu%2Fo0CwdtyGodpXRp5SAyzxNiJU4fzf1MsfjZ0yWd8LKbjq89mLEb6L1ohn7hLXvbxjJ1JOuVYOqiUpQNahXTqpZRTfu%2Fv37EUh1lcmZFEMJtK3t7rXah8Ef4UoJb5q6APXIq%2BhzOHh0ty93DCnVzhPfkrvVe%2Fbe81ruy9xg17r%2BKR9bXeKya7UfOp2pXNJ587MfpC96nq1d1XlTCdsMfT4VAUSZBm4C1BAeF59zOaYv%2BVxoQRKrKTKWWMBryDLxpayF64KfEFmQ6eoVWaHBUjNPO8htGwysbphM0ClQpEDIUYqsFmVgWP8dqtgVbCJQTt174JJtuWMh0lK3snEdR%2Fk%2BwOXT9DBzpbFRpbdW0H9tqYNzdGu7FzApvovUk47W0aeqCup8EPovcn4eSn055Ct6HPm67Rbm7N9E93Uc8KJ8CTXgd6WneAv3B6op8u6XMl0KHnveySzfjnGz2M%2BxSPR2akk9bidfBkmoPm1rDGYNB5G5ldV7Xmpm4MLVHeGo8C73JMTwYdCw2HtmsMfd7ujMyFC615Vx0tJFXvdCHvl1hzT3%2Bxxokph6YxNHhfJx3rpesmhpzh5rYJxHXWfIJ0wp92rSdiKuNhXH%2BGnK2dIoQ%2Bi8OVxmleBMsOVyrCg3Ipg38ir7wb%2FG7wPzZ449oGV%2B8Gvxv8cgZXtWsbXLvpBFmD106Qb3hrQANXT5A%2FsTdwD6%2F38Pqn4VWDVw6v4BP7D98mPJwcODxI5fBQeeCgXSo8gPLuQ1NcdUIgv2V2zFLMIrrABU%2FL9PCgNSO%2BfwIVW%2F82pwhHFaEhII4jpqmU5Vi4j5QR%2BCBfrHIOmeCJTHL5EVh1tgAvplJ5l6NpM7LGNybUGbSB304bWNKmTYPQx4zT8b%2BTR%2Fl28pT3T4bizLNDb0McKf2cBLl9PXuJAUhn%2Bm2dHqpWPJ7OJB6vHt5HSNvevdUBu78A"}),(0,n.kt)("h2",{id:"back-end-topics"},"Back End Topics"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Controllers"),(0,n.kt)("li",{parentName:"ul"},"Request / Response"),(0,n.kt)("li",{parentName:"ul"},"Services"),(0,n.kt)("li",{parentName:"ul"},"ORM"),(0,n.kt)("li",{parentName:"ul"},"Database Migrations"),(0,n.kt)("li",{parentName:"ul"},"Configuration"),(0,n.kt)("li",{parentName:"ul"},"Exception Handlers"),(0,n.kt)("li",{parentName:"ul"},"Unit Testing")),(0,n.kt)("h2",{id:"front-end-topics"},"Front End Topics"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Component Architecture"),(0,n.kt)("li",{parentName:"ul"},"Props"),(0,n.kt)("li",{parentName:"ul"},"Composition"),(0,n.kt)("li",{parentName:"ul"},"Event Handling"),(0,n.kt)("li",{parentName:"ul"},"AJAX / Fetch"),(0,n.kt)("li",{parentName:"ul"},"Configuration"),(0,n.kt)("li",{parentName:"ul"},"Promises / Async Await")))}u.isMDXComponent=!0}}]);