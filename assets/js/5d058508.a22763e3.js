"use strict";(self.webpackChunkfullstackbook=self.webpackChunkfullstackbook||[]).push([[9173],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),h=c(n),d=o,b=h["".concat(l,".").concat(d)]||h[d]||u[d]||a;return n?r.createElement(b,s(s({ref:t},p),{},{components:n})):r.createElement(b,s({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2900:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={},s="Design Patterns",i={unversionedId:"philosophy/design-patterns",id:"philosophy/design-patterns",title:"Design Patterns",description:"Design patterns are proven solutions to common software design problems that have been developed over the years by software developers and architects. They are essentially templates that can be used to solve specific design problems in software development.",source:"@site/docs/philosophy/design-patterns.md",sourceDirName:"philosophy",slug:"/philosophy/design-patterns",permalink:"/fullstackbook/philosophy/design-patterns",draft:!1,editUrl:"https://github.com/travisluong/fullstackbook/tree/main/docs/philosophy/design-patterns.md",tags:[],version:"current",frontMatter:{},sidebar:"philosophySidebar",previous:{title:"Philosophy",permalink:"/fullstackbook/philosophy/"},next:{title:"DRY",permalink:"/fullstackbook/philosophy/dry"}},l={},c=[],p={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"design-patterns"},"Design Patterns"),(0,o.kt)("p",null,"Design patterns are proven solutions to common software design problems that have been developed over the years by software developers and architects. They are essentially templates that can be used to solve specific design problems in software development."),(0,o.kt)("p",null,"Design patterns can be categorized into three main groups: creational, structural, and behavioral patterns. Creational patterns are concerned with object creation mechanisms, trying to create objects in a manner suitable to the situation. Structural patterns deal with object composition and the relationships between objects. Behavioral patterns focus on communication between objects, defining the ways in which they collaborate to perform tasks."),(0,o.kt)("p",null,"Some commonly used design patterns include:"),(0,o.kt)("p",null,"Singleton pattern: This pattern restricts the instantiation of a class to one object, ensuring that only one instance of the class is created and providing a global point of access to it."),(0,o.kt)("p",null,"Factory pattern: This pattern provides an interface for creating objects in a super-class, allowing subclasses to alter the type of objects that will be created."),(0,o.kt)("p",null,"Adapter pattern: This pattern allows two incompatible interfaces to work together by wrapping an object with an interface compatible with another object."),(0,o.kt)("p",null,"Observer pattern: This pattern defines a one-to-many relationship between objects, allowing one object to notify multiple other objects of any state changes."),(0,o.kt)("p",null,"Decorator pattern: This pattern allows behavior to be added to an individual object, either statically or dynamically, without affecting the behavior of other objects from the same class."),(0,o.kt)("p",null,"Design patterns can be used to improve the maintainability, flexibility, and reusability of software systems. However, they should be used judiciously, as overuse of patterns can result in unnecessarily complex code. It is important to understand the specific problem you are trying to solve before deciding which design pattern to use."))}u.isMDXComponent=!0}}]);