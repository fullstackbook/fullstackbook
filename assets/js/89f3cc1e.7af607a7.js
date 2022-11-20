"use strict";(self.webpackChunkfullstackbook=self.webpackChunkfullstackbook||[]).push([[1425],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>h});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),u=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=u(r),h=n,k=m["".concat(c,".").concat(h)]||m[h]||p[h]||l;return r?a.createElement(k,i(i({ref:t},s),{},{components:r})):a.createElement(k,i({ref:t},s))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},578:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=r(7462),n=(r(7294),r(3905));const l={},i="Time Complexity Cheat Sheet",o={unversionedId:"cheatsheets/time-complexity",id:"cheatsheets/time-complexity",title:"Time Complexity Cheat Sheet",description:"HashMap",source:"@site/docs/cheatsheets/time-complexity.md",sourceDirName:"cheatsheets",slug:"/cheatsheets/time-complexity",permalink:"/cheatsheets/time-complexity",draft:!1,editUrl:"https://github.com/travisluong/fullstackbook/tree/main/docs/cheatsheets/time-complexity.md",tags:[],version:"current",frontMatter:{},sidebar:"cheatsheetSidebar",previous:{title:"Python Cheat Sheet",permalink:"/cheatsheets/python"}},c={},u=[{value:"HashMap",id:"hashmap",level:2},{value:"HashSet",id:"hashset",level:2},{value:"ArrayList",id:"arraylist",level:2},{value:"Heap",id:"heap",level:2},{value:"Queue",id:"queue",level:2},{value:"Stack",id:"stack",level:2},{value:"Linked List",id:"linked-list",level:2}],s={toc:u};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"time-complexity-cheat-sheet"},"Time Complexity Cheat Sheet"),(0,n.kt)("h2",{id:"hashmap"},"HashMap"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Access: O(1)"),(0,n.kt)("li",{parentName:"ul"},"Search: O(n)"),(0,n.kt)("li",{parentName:"ul"},"Insert: O(1)"),(0,n.kt)("li",{parentName:"ul"},"Remove: O(1)")),(0,n.kt)("h2",{id:"hashset"},"HashSet"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Access: O(1)"),(0,n.kt)("li",{parentName:"ul"},"Search: O(1)"),(0,n.kt)("li",{parentName:"ul"},"Insert: O(1)"),(0,n.kt)("li",{parentName:"ul"},"Remove: O(1)")),(0,n.kt)("h2",{id:"arraylist"},"ArrayList"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Access: O(1)"),(0,n.kt)("li",{parentName:"ul"},"Search: O(n)"),(0,n.kt)("li",{parentName:"ul"},"Insert: O(1) (at the back of the ArrayList)"),(0,n.kt)("li",{parentName:"ul"},"Remove: O(n)"),(0,n.kt)("li",{parentName:"ul"},"Sort: O(nlog(n))")),(0,n.kt)("h2",{id:"heap"},"Heap"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Access Max / Min: O(1)"),(0,n.kt)("li",{parentName:"ul"},"Insert: O(log(n))"),(0,n.kt)("li",{parentName:"ul"},"Remove Max / Min: O(log(n))")),(0,n.kt)("h2",{id:"queue"},"Queue"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Access: O(n)"),(0,n.kt)("li",{parentName:"ul"},"Search: O(n)"),(0,n.kt)("li",{parentName:"ul"},"Insert: O(1)"),(0,n.kt)("li",{parentName:"ul"},"Remove: O(1)")),(0,n.kt)("h2",{id:"stack"},"Stack"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Access: O(n)"),(0,n.kt)("li",{parentName:"ul"},"Search: O(n)"),(0,n.kt)("li",{parentName:"ul"},"Insert: O(1)"),(0,n.kt)("li",{parentName:"ul"},"Remove: O(1)")),(0,n.kt)("h2",{id:"linked-list"},"Linked List"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Access: O(n)"),(0,n.kt)("li",{parentName:"ul"},"Search: O(n)"),(0,n.kt)("li",{parentName:"ul"},"Insert: O(1)"),(0,n.kt)("li",{parentName:"ul"},"Remove: O(1)")))}p.isMDXComponent=!0}}]);