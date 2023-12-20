"use strict";(self.webpackChunkfullstackbook=self.webpackChunkfullstackbook||[]).push([[3420],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>h});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),l=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=l(t),h=a,v=f["".concat(i,".").concat(h)]||f[h]||u[h]||o;return t?r.createElement(v,s(s({ref:n},p),{},{components:t})):r.createElement(v,s({ref:n},p))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=f;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var l=2;l<o;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},4411:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=t(7462),a=(t(7294),t(3905));const o={},s="JavaScript Cheat Sheet",c={unversionedId:"cheatsheets/javascript",id:"cheatsheets/javascript",title:"JavaScript Cheat Sheet",description:"Array",source:"@site/docs/cheatsheets/javascript.md",sourceDirName:"cheatsheets",slug:"/cheatsheets/javascript",permalink:"/cheatsheets/javascript",draft:!1,editUrl:"https://github.com/travisluong/fullstackbook/tree/main/docs/cheatsheets/javascript.md",tags:[],version:"current",frontMatter:{},sidebar:"cheatsheetSidebar",previous:{title:"Java Cheat Sheet",permalink:"/cheatsheets/java"},next:{title:"Kubernetes Cheat Sheet",permalink:"/cheatsheets/kubernetes"}},i={},l=[{value:"Array",id:"array",level:2},{value:"String",id:"string",level:2},{value:"Object",id:"object",level:2},{value:"Set",id:"set",level:2}],p={toc:l};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"javascript-cheat-sheet"},"JavaScript Cheat Sheet"),(0,a.kt)("h2",{id:"array"},"Array"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// create\nvar a = [1, 2, 3]\n\n// insert\na.push(1)\na.unshift(1)\n\n// access\na[0] // index\n\n// update\na[0] = 1 // index, value\n\n// access and remove\na.pop()\na.shift()\n\n// size\na.length\n\n// loop\nfor (var i = 0; i < a.length; i++) {\n  console.log(a[i])\n}\n\na.forEach((x) => console.log(x))\n\n// sort\na.sort((a, b) => a - b)\na.sort()\n\n// remove\na.splice(0, 1) // start, deleteCount\n\n// remove and insert\na.splice(0, 1, 2, 3) // start, deleteCount, item1, item2, itemN\n\n// filter\na.filter((x) => x === 1)\n\n// search\na.indexOf(1)\na.find((x) => x === 1)\na.findIndex((x) => x === 1)\n\n// join\na.join(",")\n\n// map\na.map((x) => x * 2)\n\n// reverse\na.reverse()\n\n// min\nMath.min(a)\n\n// max\nMath.max(a)\n')),(0,a.kt)("h2",{id:"string"},"String"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// create\nvar s = "foo"\n\n// size\ns.length\n\n// loop\nfor (var i = 0; i < s.length; i++) {\n  console.log(s[i])\n}\n\n// split\nvar s = "foo,bar"\ns.split(",")\n')),(0,a.kt)("h2",{id:"object"},"Object"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// create\nvar obj = {}\nvar obj = {"foo": "bar"}\n\n// insert\nobj["foo"] = "bar"\n\n// access\nobj["foo"]\nobj.foo\nobj.hasOwnProperty("foo")\n"foo" in obj\n!("foo" in obj)\n\n// size\nObject.keys(obj).length\n\n// loop\nfor (var k in obj) {\n  console.log(obj[k])\n}\n\nfor (var [k, v] of Object.entries(obj)) {\n  console.log(k, v)\n}\n\nObject.entries(obj).forEach(([k,v]) => console.log(k,v))\n\n// remove\ndelete obj["foo"]\n')),(0,a.kt)("h2",{id:"set"},"Set"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// create\nvar s = new Set()\n\n// insert\ns.add("foo")\n\n// access\ns.has("foo")\n\n// size\ns.size\n\n// loop\ns.forEach((x) => console.log(x))\n\n// remove\ns.delete("foo")\n')))}u.isMDXComponent=!0}}]);