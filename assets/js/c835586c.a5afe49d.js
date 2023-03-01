"use strict";(self.webpackChunkfullstackbook=self.webpackChunkfullstackbook||[]).push([[6057],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=i,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9309:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),i=(n(7294),n(3905));const o={},a="CAP Theorem",s={unversionedId:"backend/topics/cap-theorem",id:"backend/topics/cap-theorem",title:"CAP Theorem",description:"The CAP theorem is a concept in computer science that describes the trade-offs involved in designing distributed systems. CAP stands for Consistency, Availability, and Partition tolerance.",source:"@site/docs/backend/topics/cap-theorem.md",sourceDirName:"backend/topics",slug:"/backend/topics/cap-theorem",permalink:"/backend/topics/cap-theorem",draft:!1,editUrl:"https://github.com/travisluong/fullstackbook/tree/main/docs/backend/topics/cap-theorem.md",tags:[],version:"current",frontMatter:{},sidebar:"backendSidebar",previous:{title:"Caching",permalink:"/backend/topics/caching"},next:{title:"Microservice Architecture",permalink:"/backend/topics/microservice"}},c={},l=[],p={toc:l};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"cap-theorem"},"CAP Theorem"),(0,i.kt)("p",null,"The CAP theorem is a concept in computer science that describes the trade-offs involved in designing distributed systems. CAP stands for Consistency, Availability, and Partition tolerance."),(0,i.kt)("p",null,"Consistency refers to the idea that all nodes in a distributed system should see the same data at the same time. Availability refers to the ability of a distributed system to continue functioning even if some nodes fail. Partition tolerance refers to the ability of a distributed system to continue functioning even if there are network partitions, which can cause nodes to be temporarily disconnected from one another."),(0,i.kt)("p",null,"The CAP theorem states that in a distributed system, it is only possible to achieve two out of the three properties: consistency, availability, and partition tolerance. This means that when designing a distributed system, developers must choose which two properties are most important for their particular use case."),(0,i.kt)("p",null,"For example, if consistency and availability are the top priorities, the system may sacrifice partition tolerance in order to ensure that all nodes see the same data at the same time. On the other hand, if availability and partition tolerance are the top priorities, the system may sacrifice consistency in order to continue functioning even if some nodes are temporarily disconnected."),(0,i.kt)("p",null,"While the CAP theorem provides a useful framework for understanding the trade-offs involved in designing distributed systems, it is important to note that it is not a hard and fast rule. There are many factors that can influence the design of a distributed system, and developers must consider the specific needs of their application when making design decisions."))}d.isMDXComponent=!0}}]);