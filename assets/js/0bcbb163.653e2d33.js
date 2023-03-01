"use strict";(self.webpackChunkfullstackbook=self.webpackChunkfullstackbook||[]).push([[2074],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>h});var n=i(7294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function c(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var i=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(i),h=o,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||a;return i?n.createElement(m,r(r({ref:t},p),{},{components:i})):n.createElement(m,r({ref:t},p))}));function h(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=i.length,r=new Array(a);r[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,r[1]=c;for(var s=2;s<a;s++)r[s]=i[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}d.displayName="MDXCreateElement"},6950:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=i(7462),o=(i(7294),i(3905));const a={},r="Monolithic Architecture",c={unversionedId:"backend/topics/monolithic",id:"backend/topics/monolithic",title:"Monolithic Architecture",description:"Monolithic architecture is an older software development approach that involves building applications as a single, large codebase. This means that all of the application's functionality is tightly coupled and interdependent, with changes to one part of the application potentially affecting other parts.",source:"@site/docs/backend/topics/monolithic.md",sourceDirName:"backend/topics",slug:"/backend/topics/monolithic",permalink:"/backend/topics/monolithic",draft:!1,editUrl:"https://github.com/travisluong/fullstackbook/tree/main/docs/backend/topics/monolithic.md",tags:[],version:"current",frontMatter:{},sidebar:"backendSidebar",previous:{title:"Microservice Architecture",permalink:"/backend/topics/microservice"},next:{title:"MVC",permalink:"/backend/topics/mvc"}},l={},s=[],p={toc:s};function u(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"monolithic-architecture"},"Monolithic Architecture"),(0,o.kt)("p",null,"Monolithic architecture is an older software development approach that involves building applications as a single, large codebase. This means that all of the application's functionality is tightly coupled and interdependent, with changes to one part of the application potentially affecting other parts."),(0,o.kt)("p",null,"In monolithic architecture, the entire application is typically deployed as a single unit, making it easier to manage and deploy, but also making it difficult to scale individual components or add new features without affecting the entire system."),(0,o.kt)("p",null,"Some of the benefits of monolithic architecture include:"),(0,o.kt)("p",null,"Simplicity: Monolithic applications are typically simpler to develop, test, and deploy because all the code is in one place."),(0,o.kt)("p",null,"Lower Overhead: Because the entire application is deployed as a single unit, there is no additional overhead associated with managing multiple services or coordinating communication between them."),(0,o.kt)("p",null,"Easier to Secure: Because all of the code is in one place, it is easier to secure the entire application with a single set of security measures."),(0,o.kt)("p",null,"However, monolithic architecture also comes with some challenges, including:"),(0,o.kt)("p",null,"Scalability: Because the entire application is deployed as a single unit, it can be difficult to scale individual components to meet increased demand without scaling the entire system."),(0,o.kt)("p",null,"Flexibility: Monolithic applications can be difficult to modify or update because all the code is tightly coupled, meaning changes to one part of the application can potentially affect other parts."),(0,o.kt)("p",null,"Maintenance: As monolithic applications grow larger and more complex, they can become difficult to maintain, debug, and update."),(0,o.kt)("p",null,"Overall, while monolithic architecture can be a simple and effective approach for smaller applications, it can become unwieldy and difficult to manage as applications grow larger and more complex. Many organizations are now turning to microservices or other alternative architectures to overcome the limitations of monolithic architecture."))}u.isMDXComponent=!0}}]);