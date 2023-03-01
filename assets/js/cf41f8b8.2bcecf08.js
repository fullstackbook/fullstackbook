"use strict";(self.webpackChunkfullstackbook=self.webpackChunkfullstackbook||[]).push([[9406],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,y=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?o.createElement(y,a(a({ref:t},p),{},{components:n})):o.createElement(y,a({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8047:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const i={},a="CI/CD",s={unversionedId:"devops/topics/cicd",id:"devops/topics/cicd",title:"CI/CD",description:"CI/CD, or continuous integration and continuous delivery/deployment, is a software development practice that aims to streamline the process of building, testing, and deploying code changes. By automating these processes, CI/CD enables developers to deliver high-quality software faster and more reliably.",source:"@site/docs/devops/topics/cicd.md",sourceDirName:"devops/topics",slug:"/devops/topics/cicd",permalink:"/devops/topics/cicd",draft:!1,editUrl:"https://github.com/travisluong/fullstackbook/tree/main/docs/devops/topics/cicd.md",tags:[],version:"current",frontMatter:{},sidebar:"devopsSidebar",previous:{title:"Alerts",permalink:"/devops/topics/alerts"},next:{title:"Cron Jobs",permalink:"/devops/topics/cron-jobs"}},l={},c=[],p={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cicd"},"CI/CD"),(0,r.kt)("p",null,"CI/CD, or continuous integration and continuous delivery/deployment, is a software development practice that aims to streamline the process of building, testing, and deploying code changes. By automating these processes, CI/CD enables developers to deliver high-quality software faster and more reliably."),(0,r.kt)("p",null,"Continuous integration involves the frequent integration of code changes into a shared repository, which is then automatically built and tested. This allows developers to catch and fix issues early in the development process, reducing the risk of bugs and improving overall code quality."),(0,r.kt)("p",null,"Continuous delivery/deployment involves automating the process of deploying code changes to production environments. With continuous delivery, code changes are automatically built, tested, and prepared for release, but are not deployed to production until they are manually approved. With continuous deployment, code changes are automatically deployed to production without manual intervention, once they have passed all necessary tests and checks."),(0,r.kt)("p",null,"Implementing CI/CD requires the use of several tools and practices, including version control systems, automated build and testing tools, and deployment pipelines. Popular CI/CD tools include Jenkins, Travis CI, and CircleCI, while popular deployment tools include Kubernetes and AWS Elastic Beanstalk."),(0,r.kt)("p",null,"There are several benefits to implementing CI/CD in software development. Firstly, it enables developers to catch and fix issues early in the development process, leading to higher code quality and reduced development time. Secondly, it automates many time-consuming tasks, allowing developers to focus on higher-level tasks such as developing new features. Finally, it enables faster and more reliable deployments, reducing downtime and improving user satisfaction."),(0,r.kt)("p",null,"Overall, CI/CD is a valuable practice for software development teams looking to improve their development process and deliver high-quality software faster and more reliably. By implementing CI/CD, teams can streamline their development process, reduce the risk of bugs, and deliver better software more quickly."))}d.isMDXComponent=!0}}]);