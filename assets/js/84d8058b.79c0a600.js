"use strict";(self.webpackChunkfullstackbook=self.webpackChunkfullstackbook||[]).push([[7698],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,y=u["".concat(l,".").concat(m)]||u[m]||p[m]||i;return n?r.createElement(y,a(a({ref:t},d),{},{components:n})):r.createElement(y,a({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4425:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const i={},a="CI/CD",s={unversionedId:"devops/cicd",id:"devops/cicd",title:"CI/CD",description:"CI/CD, or continuous integration and continuous delivery/deployment, is a software development practice that aims to streamline the process of building, testing, and deploying code changes. By automating these processes, CI/CD enables developers to deliver high-quality software faster and more reliably.",source:"@site/docs/devops/cicd.md",sourceDirName:"devops",slug:"/devops/cicd",permalink:"/devops/cicd",draft:!1,editUrl:"https://github.com/travisluong/fullstackbook/tree/main/docs/devops/cicd.md",tags:[],version:"current",frontMatter:{},sidebar:"devopsSidebar",previous:{title:"Kubernetes",permalink:"/devops/kubernetes"},next:{title:"Git",permalink:"/devops/git"}},l={},c=[],d={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cicd"},"CI/CD"),(0,o.kt)("p",null,"CI/CD, or continuous integration and continuous delivery/deployment, is a software development practice that aims to streamline the process of building, testing, and deploying code changes. By automating these processes, CI/CD enables developers to deliver high-quality software faster and more reliably."),(0,o.kt)("p",null,"Continuous integration involves the frequent integration of code changes into a shared repository, which is then automatically built and tested. This allows developers to catch and fix issues early in the development process, reducing the risk of bugs and improving overall code quality."),(0,o.kt)("p",null,"Continuous delivery/deployment involves automating the process of deploying code changes to production environments. With continuous delivery, code changes are automatically built, tested, and prepared for release, but are not deployed to production until they are manually approved. With continuous deployment, code changes are automatically deployed to production without manual intervention, once they have passed all necessary tests and checks."),(0,o.kt)("p",null,"Implementing CI/CD requires the use of several tools and practices, including version control systems, automated build and testing tools, and deployment pipelines. Popular CI/CD tools include Jenkins, Travis CI, and CircleCI, while popular deployment tools include Kubernetes and AWS Elastic Beanstalk."),(0,o.kt)("p",null,"There are several benefits to implementing CI/CD in software development. Firstly, it enables developers to catch and fix issues early in the development process, leading to higher code quality and reduced development time. Secondly, it automates many time-consuming tasks, allowing developers to focus on higher-level tasks such as developing new features. Finally, it enables faster and more reliable deployments, reducing downtime and improving user satisfaction."),(0,o.kt)("p",null,"Overall, CI/CD is a valuable practice for software development teams looking to improve their development process and deliver high-quality software faster and more reliably. By implementing CI/CD, teams can streamline their development process, reduce the risk of bugs, and deliver better software more quickly."))}p.isMDXComponent=!0}}]);