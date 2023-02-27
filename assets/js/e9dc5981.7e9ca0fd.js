"use strict";(self.webpackChunkfullstackbook=self.webpackChunkfullstackbook||[]).push([[7720],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(r),f=o,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||a;return r?n.createElement(m,s(s({ref:t},u),{},{components:r})):n.createElement(m,s({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},6220:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={},s="REST API",i={unversionedId:"backend/rest-api",id:"backend/rest-api",title:"REST API",description:"REST (Representational State Transfer) is a popular architectural style for building web services, and RESTful APIs are a common way of exposing functionality over HTTP. A well-designed RESTful API should be easy to understand, simple to use, and reliable.",source:"@site/docs/backend/rest-api.md",sourceDirName:"backend",slug:"/backend/rest-api",permalink:"/backend/rest-api",draft:!1,editUrl:"https://github.com/travisluong/fullstackbook/tree/main/docs/backend/rest-api.md",tags:[],version:"current",frontMatter:{},sidebar:"backendSidebar",previous:{title:"Object-Relational Mapping (ORM)",permalink:"/backend/object-relational-mapping"},next:{title:"Express To Do API",permalink:"/backend/tutorials/express-todo"}},c={},l=[],u={toc:l};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"rest-api"},"REST API"),(0,o.kt)("p",null,"REST (Representational State Transfer) is a popular architectural style for building web services, and RESTful APIs are a common way of exposing functionality over HTTP. A well-designed RESTful API should be easy to understand, simple to use, and reliable."),(0,o.kt)("p",null,"Here are some tips for designing a RESTful API:"),(0,o.kt)("p",null,'Use nouns to describe resources - RESTful APIs are all about resources. Use nouns to describe the resources you want to expose, such as "users," "products," or "orders."'),(0,o.kt)("p",null,"Use HTTP methods for CRUD operations - HTTP provides a standard set of methods for interacting with resources. Use the appropriate HTTP method for each CRUD operation (Create, Read, Update, Delete): POST for creating, GET for reading, PUT or PATCH for updating, and DELETE for deleting."),(0,o.kt)("p",null,"Use resource identifiers - Each resource should have a unique identifier, such as a URL or URI. Use this identifier to interact with the resource using HTTP methods."),(0,o.kt)("p",null,"Use standard response codes - HTTP provides a set of standard response codes that indicate the status of a request. Use these codes to provide feedback to the client, such as 200 OK for successful requests, 404 Not Found for requests that reference a non-existent resource, or 500 Internal Server Error for server errors."),(0,o.kt)("p",null,"Use consistent naming conventions - Use consistent naming conventions for resources, methods, and parameters to make the API easy to understand and use."),(0,o.kt)("p",null,"Versioning - If you need to make changes to the API, consider versioning the API to avoid breaking changes for existing clients."),(0,o.kt)("p",null,"Provide documentation - Good documentation is essential for any API. Provide clear and concise documentation that describes the API's functionality, resources, parameters, and response codes."),(0,o.kt)("p",null,"By following these best practices, you can design a RESTful API that is easy to understand, simple to use, and reliable."))}d.isMDXComponent=!0}}]);