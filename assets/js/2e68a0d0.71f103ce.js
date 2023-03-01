"use strict";(self.webpackChunkfullstackbook=self.webpackChunkfullstackbook||[]).push([[979],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4015:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={},i="MVC",c={unversionedId:"backend/topics/mvc",id:"backend/topics/mvc",title:"MVC",description:"MVC (Model-View-Controller) is a software architecture pattern commonly used in web development. The MVC pattern separates an application into three interconnected components, allowing for better organization and maintainability.",source:"@site/docs/backend/topics/mvc.md",sourceDirName:"backend/topics",slug:"/backend/topics/mvc",permalink:"/backend/topics/mvc",draft:!1,editUrl:"https://github.com/travisluong/fullstackbook/tree/main/docs/backend/topics/mvc.md",tags:[],version:"current",frontMatter:{},sidebar:"backendSidebar",previous:{title:"Monolithic Architecture",permalink:"/backend/topics/monolithic"},next:{title:"NoSQL",permalink:"/backend/topics/nosql"}},s={},l=[],p={toc:l};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mvc"},"MVC"),(0,o.kt)("p",null,"MVC (Model-View-Controller) is a software architecture pattern commonly used in web development. The MVC pattern separates an application into three interconnected components, allowing for better organization and maintainability."),(0,o.kt)("p",null,"The Model component is responsible for managing the application's data and business logic. This component interacts with the database or other sources of data to retrieve or modify information. It also contains the business rules that define how the data should be processed and presented."),(0,o.kt)("p",null,"The View component is responsible for rendering the data and providing a user interface for the user to interact with the application. This component is often built using HTML, CSS, and JavaScript, and is responsible for displaying the data in a way that is intuitive and easy to use."),(0,o.kt)("p",null,"The Controller component acts as an intermediary between the Model and View components, receiving user input and directing the flow of data between the two. It processes user requests, retrieves data from the Model, and updates the View accordingly. The Controller also contains the logic that handles the application's business rules and coordinates the flow of data throughout the application."),(0,o.kt)("p",null,"By separating an application into these three distinct components, the MVC pattern promotes modularization, making it easier to maintain and update the application over time. It also allows for greater flexibility in development, as changes to one component do not necessarily impact the others."),(0,o.kt)("p",null,"MVC is a popular choice for web development frameworks, such as Ruby on Rails, ASP.NET, and Laravel. However, it is not the only architecture pattern available, and developers should carefully consider their application's requirements and constraints when selecting an architecture pattern."))}d.isMDXComponent=!0}}]);