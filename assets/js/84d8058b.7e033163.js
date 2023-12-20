"use strict";(self.webpackChunkfullstackbook=self.webpackChunkfullstackbook||[]).push([[7698],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||a;return n?o.createElement(f,i(i({ref:t},d),{},{components:n})):o.createElement(f,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4425:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const a={},i="CI/CD",l={unversionedId:"devops/cicd",id:"devops/cicd",title:"CI/CD",description:"CI/CD, or continuous integration and continuous delivery/deployment, is a software development practice that aims to streamline the process of building, testing, and deploying code changes. By automating these processes, CI/CD enables developers to deliver high-quality software faster and more reliably.",source:"@site/docs/devops/cicd.md",sourceDirName:"devops",slug:"/devops/cicd",permalink:"/fullstackbook/devops/cicd",draft:!1,editUrl:"https://github.com/travisluong/fullstackbook/tree/main/docs/devops/cicd.md",tags:[],version:"current",frontMatter:{},sidebar:"devopsSidebar",previous:{title:"Alerts",permalink:"/fullstackbook/devops/alerts"},next:{title:"Cron Jobs",permalink:"/fullstackbook/devops/cron-jobs"}},s={},c=[],d={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cicd"},"CI/CD"),(0,r.kt)("p",null,"CI/CD, or continuous integration and continuous delivery/deployment, is a software development practice that aims to streamline the process of building, testing, and deploying code changes. By automating these processes, CI/CD enables developers to deliver high-quality software faster and more reliably."),(0,r.kt)("p",null,"Continuous integration involves the frequent integration of code changes into a shared repository, which is then automatically built and tested. This allows developers to catch and fix issues early in the development process, reducing the risk of bugs and improving overall code quality."),(0,r.kt)("p",null,"Continuous delivery/deployment involves automating the process of deploying code changes to production environments. With continuous delivery, code changes are automatically built, tested, and prepared for release, but are not deployed to production until they are manually approved. With continuous deployment, code changes are automatically deployed to production without manual intervention, once they have passed all necessary tests and checks."),(0,r.kt)("p",null,"Implementing CI/CD requires the use of several tools and practices, including version control systems, automated build and testing tools, and deployment pipelines. Popular CI/CD tools include Jenkins, Travis CI, and CircleCI, while popular deployment tools include Kubernetes and AWS Elastic Beanstalk."),(0,r.kt)("p",null,"There are several benefits to implementing CI/CD in software development. Firstly, it enables developers to catch and fix issues early in the development process, leading to higher code quality and reduced development time. Secondly, it automates many time-consuming tasks, allowing developers to focus on higher-level tasks such as developing new features. Finally, it enables faster and more reliable deployments, reducing downtime and improving user satisfaction."),(0,r.kt)("p",null,"Overall, CI/CD is a valuable practice for software development teams looking to improve their development process and deliver high-quality software faster and more reliably. By implementing CI/CD, teams can streamline their development process, reduce the risk of bugs, and deliver better software more quickly."))}p.isMDXComponent=!0}}]);