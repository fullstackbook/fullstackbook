"use strict";(self.webpackChunkfullstackbook=self.webpackChunkfullstackbook||[]).push([[5880],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>h});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},s=Object.keys(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),d=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=d(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=d(r),h=n,m=p["".concat(c,".").concat(h)]||p[h]||u[h]||s;return r?o.createElement(m,a(a({ref:t},l),{},{components:r})):o.createElement(m,a({ref:t},l))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,a=new Array(s);a[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var d=2;d<s;d++)a[d]=r[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},893:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var o=r(7462),n=(r(7294),r(3905));const s={},a="DNS",i={unversionedId:"devops/topics/dns",id:"devops/topics/dns",title:"DNS",description:"DNS stands for Domain Name System, and it is a critical part of how the internet works. The DNS system translates human-readable domain names into IP addresses that computers can use to communicate with each other. When you enter a website address into your browser, the browser sends a request to a DNS server, which looks up the IP address associated with that domain name and returns it to the browser. The browser can then use that IP address to connect to the website's server and retrieve the website's content.",source:"@site/docs/devops/topics/dns.md",sourceDirName:"devops/topics",slug:"/devops/topics/dns",permalink:"/devops/topics/dns",draft:!1,editUrl:"https://github.com/travisluong/fullstackbook/tree/main/docs/devops/topics/dns.md",tags:[],version:"current",frontMatter:{},sidebar:"devopsSidebar",previous:{title:"Cron Jobs",permalink:"/devops/topics/cron-jobs"},next:{title:"Git",permalink:"/devops/topics/git"}},c={},d=[],l={toc:d};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"dns"},"DNS"),(0,n.kt)("p",null,"DNS stands for Domain Name System, and it is a critical part of how the internet works. The DNS system translates human-readable domain names into IP addresses that computers can use to communicate with each other. When you enter a website address into your browser, the browser sends a request to a DNS server, which looks up the IP address associated with that domain name and returns it to the browser. The browser can then use that IP address to connect to the website's server and retrieve the website's content."),(0,n.kt)("p",null,"DNS works using a hierarchical structure of domain names. The top-level domains (TLDs) are things like .com, .org, .net, and so on. Below the TLDs are second-level domains, such as google.com or amazon.com. Finally, there are subdomains, such as ",(0,n.kt)("a",{parentName:"p",href:"http://www.google.com"},"www.google.com")," or books.amazon.com."),(0,n.kt)("p",null,"DNS is a distributed system, meaning that there are many different DNS servers around the world that work together to provide DNS resolution for domain names. When you make a DNS request, your request is sent to a DNS server that is closest to you, which then sends the request to other DNS servers as needed to resolve the domain name. This distributed system helps to ensure that DNS is reliable and can handle high volumes of traffic."),(0,n.kt)("p",null,"Overall, DNS is a critical component of how the internet works, allowing us to use human-readable domain names to access websites and other internet resources. Without DNS, we would have to memorize IP addresses to access websites, which would be much less convenient and user-friendly."))}u.isMDXComponent=!0}}]);