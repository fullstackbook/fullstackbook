"use strict";(self.webpackChunkfullstackbook=self.webpackChunkfullstackbook||[]).push([[4272],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),f=o,m=u["".concat(l,".").concat(f)]||u[f]||p[f]||a;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8232:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={},i="Test-driven development (TDD)",s={unversionedId:"backend/tdd",id:"backend/tdd",title:"Test-driven development (TDD)",description:"Test-driven development (TDD) is a software development approach that involves writing automated tests before writing the actual code. The idea behind TDD is to ensure that the code being developed meets the requirements and is free of bugs from the very beginning.",source:"@site/docs/backend/tdd.md",sourceDirName:"backend",slug:"/backend/tdd",permalink:"/fullstackbook/backend/tdd",draft:!1,editUrl:"https://github.com/travisluong/fullstackbook/tree/main/docs/backend/tdd.md",tags:[],version:"current",frontMatter:{},sidebar:"backendSidebar",previous:{title:"SQL",permalink:"/fullstackbook/backend/sql"},next:{title:"Threads",permalink:"/fullstackbook/backend/threads"}},l={},c=[],d={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"test-driven-development-tdd"},"Test-driven development (TDD)"),(0,o.kt)("p",null,"Test-driven development (TDD) is a software development approach that involves writing automated tests before writing the actual code. The idea behind TDD is to ensure that the code being developed meets the requirements and is free of bugs from the very beginning."),(0,o.kt)("p",null,"The TDD process typically involves three steps: writing a failing test, writing the minimum code necessary to make the test pass, and then refactoring the code to improve its design and maintainability."),(0,o.kt)("p",null,"One of the main benefits of TDD is that it helps developers catch bugs early in the development process, which can save a lot of time and effort later on. By writing tests before writing code, developers can ensure that their code meets the requirements and is easy to test."),(0,o.kt)("p",null,"TDD also promotes good design practices, as developers are encouraged to write modular and testable code. By focusing on writing code that is easy to test, developers are also writing code that is easy to maintain and modify."),(0,o.kt)("p",null,"However, TDD is not a silver bullet and has its limitations. For example, it can be difficult to apply TDD to certain types of projects, such as those with complex user interfaces or those that involve a lot of external dependencies."),(0,o.kt)("p",null,"In conclusion, TDD is a valuable approach to software development that can improve the quality of code and save time in the long run. While it may not be suitable for every project or situation, developers should consider incorporating TDD into their development process when possible."))}p.isMDXComponent=!0}}]);