"use strict";(self.webpackChunkfullstackbook=self.webpackChunkfullstackbook||[]).push([[4179],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),d=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),h=d(r),m=o,p=h["".concat(c,".").concat(m)]||h[m]||u[m]||s;return r?n.createElement(p,a(a({ref:t},l),{},{components:r})):n.createElement(p,a({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var d=2;d<s;d++)a[d]=r[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},8067:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var n=r(7462),o=(r(7294),r(3905));const s={},a="DNS",i={unversionedId:"devops/dns",id:"devops/dns",title:"DNS",description:"DNS stands for Domain Name System, and it is a critical part of how the internet works. The DNS system translates human-readable domain names into IP addresses that computers can use to communicate with each other. When you enter a website address into your browser, the browser sends a request to a DNS server, which looks up the IP address associated with that domain name and returns it to the browser. The browser can then use that IP address to connect to the website's server and retrieve the website's content.",source:"@site/docs/devops/dns.md",sourceDirName:"devops",slug:"/devops/dns",permalink:"/devops/dns",draft:!1,editUrl:"https://github.com/travisluong/fullstackbook/tree/main/docs/devops/dns.md",tags:[],version:"current",frontMatter:{},sidebar:"devopsSidebar",previous:{title:"Cron Jobs",permalink:"/devops/cron-jobs"},next:{title:"Git",permalink:"/devops/git"}},c={},d=[],l={toc:d};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"dns"},"DNS"),(0,o.kt)("p",null,"DNS stands for Domain Name System, and it is a critical part of how the internet works. The DNS system translates human-readable domain names into IP addresses that computers can use to communicate with each other. When you enter a website address into your browser, the browser sends a request to a DNS server, which looks up the IP address associated with that domain name and returns it to the browser. The browser can then use that IP address to connect to the website's server and retrieve the website's content."),(0,o.kt)("p",null,"DNS works using a hierarchical structure of domain names. The top-level domains (TLDs) are things like .com, .org, .net, and so on. Below the TLDs are second-level domains, such as google.com or amazon.com. Finally, there are subdomains, such as ",(0,o.kt)("a",{parentName:"p",href:"http://www.google.com"},"www.google.com")," or books.amazon.com."),(0,o.kt)("p",null,"DNS is a distributed system, meaning that there are many different DNS servers around the world that work together to provide DNS resolution for domain names. When you make a DNS request, your request is sent to a DNS server that is closest to you, which then sends the request to other DNS servers as needed to resolve the domain name. This distributed system helps to ensure that DNS is reliable and can handle high volumes of traffic."),(0,o.kt)("p",null,"Overall, DNS is a critical component of how the internet works, allowing us to use human-readable domain names to access websites and other internet resources. Without DNS, we would have to memorize IP addresses to access websites, which would be much less convenient and user-friendly."))}u.isMDXComponent=!0}}]);