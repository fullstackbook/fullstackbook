"use strict";(self.webpackChunkfullstackbook=self.webpackChunkfullstackbook||[]).push([[368],{3905:(e,t,o)=>{o.d(t,{Zo:()=>h,kt:()=>d});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},h=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),m=c(o),d=n,u=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return o?r.createElement(u,a(a({ref:t},h),{},{components:o})):r.createElement(u,a({ref:t},h))}));function d(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var c=2;c<i;c++)a[c]=o[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},8073:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=o(7462),n=(o(7294),o(3905));const i={},a="The Law Of Demeter",l={unversionedId:"philosophy/the-law-of-demeter",id:"philosophy/the-law-of-demeter",title:"The Law Of Demeter",description:"The Law of Demeter, also known as the Principle of Least Knowledge, is a design principle in object-oriented programming that emphasizes the importance of reducing the coupling between objects. The idea is that objects should only communicate with their immediate neighbors and not reach out to other objects that are not directly related to their functionality.",source:"@site/docs/philosophy/the-law-of-demeter.md",sourceDirName:"philosophy",slug:"/philosophy/the-law-of-demeter",permalink:"/philosophy/the-law-of-demeter",draft:!1,editUrl:"https://github.com/travisluong/fullstackbook/tree/main/docs/philosophy/the-law-of-demeter.md",tags:[],version:"current",frontMatter:{},sidebar:"philosophySidebar",previous:{title:"SOLID",permalink:"/philosophy/solid"},next:{title:"YAGNI",permalink:"/philosophy/yagni"}},s={},c=[],h={toc:c};function p(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"the-law-of-demeter"},"The Law Of Demeter"),(0,n.kt)("p",null,"The Law of Demeter, also known as the Principle of Least Knowledge, is a design principle in object-oriented programming that emphasizes the importance of reducing the coupling between objects. The idea is that objects should only communicate with their immediate neighbors and not reach out to other objects that are not directly related to their functionality."),(0,n.kt)("p",null,"The principle is based on the idea that objects should have a limited knowledge of other objects in the system. In other words, an object should only know about its own properties and the properties of the objects it interacts with directly. This helps to reduce the complexity of the system and makes it easier to maintain and modify."),(0,n.kt)("p",null,'The Law of Demeter is typically expressed as the "dot rule," which states that an object should only communicate with its immediate neighbors and not with objects further down the chain. For example, if object A wants to get information from object C, it should not call a method on object B, which then calls a method on object C. Instead, object A should call a method on object B, which then returns the necessary information to object A.'),(0,n.kt)("p",null,"The Law of Demeter is an important principle in software design because it helps to reduce the coupling between objects, making the system more modular and easier to maintain. By following this principle, developers can create more flexible and robust systems that are easier to modify and extend over time."))}p.isMDXComponent=!0}}]);