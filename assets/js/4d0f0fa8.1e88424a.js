"use strict";(self.webpackChunkfullstackbook=self.webpackChunkfullstackbook||[]).push([[7565],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=i,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3446:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),i=(n(7294),n(3905));const o={},a="Uptime Checks",s={unversionedId:"devops/uptime-checks",id:"devops/uptime-checks",title:"Uptime Checks",description:"Uptime checks, also known as availability monitoring or synthetic monitoring, are automated tests that regularly check the availability and responsiveness of a web application or website. These checks simulate a user accessing the site and running predefined tests to verify that the application is functioning correctly.",source:"@site/docs/devops/uptime-checks.md",sourceDirName:"devops",slug:"/devops/uptime-checks",permalink:"/devops/uptime-checks",draft:!1,editUrl:"https://github.com/travisluong/fullstackbook/tree/main/docs/devops/uptime-checks.md",tags:[],version:"current",frontMatter:{},sidebar:"devopsSidebar",previous:{title:"Unix",permalink:"/devops/unix"}},c={},l=[],p={toc:l};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"uptime-checks"},"Uptime Checks"),(0,i.kt)("p",null,"Uptime checks, also known as availability monitoring or synthetic monitoring, are automated tests that regularly check the availability and responsiveness of a web application or website. These checks simulate a user accessing the site and running predefined tests to verify that the application is functioning correctly."),(0,i.kt)("p",null,"The purpose of uptime checks is to detect and diagnose issues that can affect the performance of an application or website, such as downtime, slow response times, broken links, and other errors. By detecting and addressing these issues quickly, organizations can minimize the impact of service disruptions and improve the user experience."),(0,i.kt)("p",null,"Uptime checks typically run at regular intervals, ranging from a few seconds to several minutes, depending on the specific needs of the organization. They can be configured to run from various locations around the world to ensure that the application or website is available to users in different geographic locations."),(0,i.kt)("p",null,"Uptime checks can be set up using a variety of tools and services, including open-source software, commercial monitoring tools, and cloud-based services. Some popular tools and services for uptime checks include Pingdom, UptimeRobot, New Relic, and Nagios."),(0,i.kt)("p",null,"Overall, uptime checks are a critical component of any web application or website monitoring strategy. By regularly testing and verifying the availability and performance of an application, organizations can quickly identify and address issues to ensure that their users have the best possible experience."))}u.isMDXComponent=!0}}]);