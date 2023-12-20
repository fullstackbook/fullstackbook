"use strict";(self.webpackChunkfullstackbook=self.webpackChunkfullstackbook||[]).push([[8785],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,h=d["".concat(l,".").concat(f)]||d[f]||u[f]||i;return r?n.createElement(h,a(a({ref:t},p),{},{components:r})):n.createElement(h,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5503:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const i={},a="DRY",s={unversionedId:"philosophy/dry",id:"philosophy/dry",title:"DRY",description:"DRY (Don't Repeat Yourself) is a principle of software development that advocates for the elimination of redundancy in code. The goal of DRY is to reduce the amount of duplicate code, thereby making the codebase easier to maintain, less prone to errors, and more scalable.",source:"@site/docs/philosophy/dry.md",sourceDirName:"philosophy",slug:"/philosophy/dry",permalink:"/fullstackbook/philosophy/dry",draft:!1,editUrl:"https://github.com/travisluong/fullstackbook/tree/main/docs/philosophy/dry.md",tags:[],version:"current",frontMatter:{},sidebar:"philosophySidebar",previous:{title:"Design Patterns",permalink:"/fullstackbook/philosophy/design-patterns"},next:{title:"KISS",permalink:"/fullstackbook/philosophy/kiss"}},l={},c=[],p={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"dry"},"DRY"),(0,o.kt)("p",null,"DRY (Don't Repeat Yourself) is a principle of software development that advocates for the elimination of redundancy in code. The goal of DRY is to reduce the amount of duplicate code, thereby making the codebase easier to maintain, less prone to errors, and more scalable."),(0,o.kt)("p",null,"The DRY principle is based on the idea that every piece of knowledge or logic should have a single, unambiguous representation within a system. If the same information or logic is repeated in multiple places, it becomes more difficult to modify or update the system, as changes have to be made in each location where the information or logic appears."),(0,o.kt)("p",null,"By applying the DRY principle, developers can improve the quality of their codebase by reducing complexity, increasing maintainability, and reducing the risk of introducing errors. Instead of duplicating code, developers can use techniques such as abstraction, modularization, and inheritance to reuse existing code and keep the codebase as concise and maintainable as possible."),(0,o.kt)("p",null,"In practice, adhering to the DRY principle requires developers to be mindful of the code they write, as well as the code that already exists in the system. By identifying patterns and opportunities for reuse, developers can eliminate redundancy and ensure that every piece of information and logic has a single, unambiguous representation within the system."))}u.isMDXComponent=!0}}]);