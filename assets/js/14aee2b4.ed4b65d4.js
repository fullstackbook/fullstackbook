"use strict";(self.webpackChunkfullstackbook=self.webpackChunkfullstackbook||[]).push([[7883],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>f});var n=t(7294);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,s=function(e,r){if(null==e)return{};var t,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var i=n.createContext({}),p=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},l=function(e){var r=p(e.components);return n.createElement(i.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,s=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(t),f=s,d=m["".concat(i,".").concat(f)]||m[f]||u[f]||o;return t?n.createElement(d,a(a({ref:r},l),{},{components:t})):n.createElement(d,a({ref:r},l))}));function f(e,r){var t=arguments,s=r&&r.mdxType;if("string"==typeof e||s){var o=t.length,a=new Array(o);a[0]=m;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c.mdxType="string"==typeof e?e:s,a[1]=c;for(var p=2;p<o;p++)a[p]=t[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2200:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=t(7462),s=(t(7294),t(3905));const o={},a="Processes",c={unversionedId:"backend/topics/processes",id:"backend/topics/processes",title:"Processes",description:"In computing, a process is the instance of a program that is being executed by a computer's operating system. A program can have one or multiple processes, each of which runs in its own memory space and has its own resources, including files, network sockets, and system data.",source:"@site/docs/backend/topics/processes.md",sourceDirName:"backend/topics",slug:"/backend/topics/processes",permalink:"/backend/topics/processes",draft:!1,editUrl:"https://github.com/travisluong/fullstackbook/tree/main/docs/backend/topics/processes.md",tags:[],version:"current",frontMatter:{},sidebar:"backendSidebar",previous:{title:"Object-Relational Mapping (ORM)",permalink:"/backend/topics/object-relational-mapping"},next:{title:"Queues",permalink:"/backend/topics/queues"}},i={},p=[],l={toc:p};function u(e){let{components:r,...t}=e;return(0,s.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"processes"},"Processes"),(0,s.kt)("p",null,"In computing, a process is the instance of a program that is being executed by a computer's operating system. A program can have one or multiple processes, each of which runs in its own memory space and has its own resources, including files, network sockets, and system data."),(0,s.kt)("p",null,"Processes are an essential part of multitasking operating systems, which allow multiple processes to run concurrently on a single processor or across multiple processors. Each process has its own process ID (PID) that the operating system uses to manage the process and its resources."),(0,s.kt)("p",null,"One of the key benefits of using processes is that they provide a way to run programs in a separate memory space, which helps to prevent errors and crashes caused by one program interfering with another. Processes can also be used to break up complex tasks into smaller, more manageable pieces, which can be run in parallel to improve performance."),(0,s.kt)("p",null,"Processes can communicate with each other through inter-process communication (IPC) mechanisms such as pipes, sockets, and message queues. This allows processes to work together and share resources, even if they are running on different computers or operating systems."),(0,s.kt)("p",null,"In summary, processes are the fundamental building blocks of modern operating systems, allowing programs to run concurrently and providing a way to manage resources and prevent interference between different programs."))}u.isMDXComponent=!0}}]);