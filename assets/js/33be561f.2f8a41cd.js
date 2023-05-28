"use strict";(self.webpackChunkfullstackbook=self.webpackChunkfullstackbook||[]).push([[4354],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(r),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},1606:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={},i="12 Factor App",p={unversionedId:"backend/topics/factor-app",id:"backend/topics/factor-app",title:"12 Factor App",description:"The 12 Factor App is a set of principles that provide guidelines for building modern, scalable, and maintainable software applications. These principles were developed by Heroku co-founder Adam Wiggins, based on his experiences working with cloud-based applications. The principles are designed to be agnostic of any particular programming language, framework, or platform.",source:"@site/docs/backend/topics/12-factor-app.md",sourceDirName:"backend/topics",slug:"/backend/topics/factor-app",permalink:"/backend/topics/factor-app",draft:!1,editUrl:"https://github.com/travisluong/fullstackbook/tree/main/docs/backend/topics/12-factor-app.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{},sidebar:"backendSidebar",previous:{title:"Spring Boot To Do API",permalink:"/backend/tutorials/springboot-todo"},next:{title:"Back End Web Frameworks",permalink:"/backend/topics/backend-web-frameworks"}},s={},l=[],c={toc:l};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"12-factor-app"},"12 Factor App"),(0,a.kt)("p",null,"The 12 Factor App is a set of principles that provide guidelines for building modern, scalable, and maintainable software applications. These principles were developed by Heroku co-founder Adam Wiggins, based on his experiences working with cloud-based applications. The principles are designed to be agnostic of any particular programming language, framework, or platform."),(0,a.kt)("p",null,"Here are the 12 principles of the 12 Factor App:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Codebase: A single codebase tracked in version control, with multiple deploys."),(0,a.kt)("li",{parentName:"ol"},"Dependencies: Explicitly declare and isolate dependencies."),(0,a.kt)("li",{parentName:"ol"},"Configuration: Store configuration in the environment."),(0,a.kt)("li",{parentName:"ol"},"Backing Services: Treat backing services as attached resources."),(0,a.kt)("li",{parentName:"ol"},"Build, Release, Run: Strictly separate build and run stages."),(0,a.kt)("li",{parentName:"ol"},"Processes: Execute the app as one or more stateless processes."),(0,a.kt)("li",{parentName:"ol"},"Port Binding: Export services via port binding."),(0,a.kt)("li",{parentName:"ol"},"Concurrency: Scale out via the process model."),(0,a.kt)("li",{parentName:"ol"},"Disposability: Maximize robustness with fast startup and graceful shutdown."),(0,a.kt)("li",{parentName:"ol"},"Dev/prod parity: Keep development, staging, and production as similar as possible."),(0,a.kt)("li",{parentName:"ol"},"Logs: Treat logs as event streams."),(0,a.kt)("li",{parentName:"ol"},"Admin processes: Run admin/management tasks as one-off processes.")),(0,a.kt)("p",null,"Adopting the 12 Factor App principles can lead to benefits such as easier scaling, faster development, and more reliable deployments. By following these principles, developers can build applications that are more resilient, scalable, and easier to maintain."))}d.isMDXComponent=!0}}]);