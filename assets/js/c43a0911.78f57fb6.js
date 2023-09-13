"use strict";(self.webpackChunkfullstackbook=self.webpackChunkfullstackbook||[]).push([[4863],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8247:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>a,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const l={},i="Full Stack Development with Next.js 13",a={unversionedId:"courses/full-stack-development-with-nextjs-13",id:"courses/full-stack-development-with-nextjs-13",title:"Full Stack Development with Next.js 13",description:"Full Stack Development with Next.js 13",source:"@site/docs/courses/full-stack-development-with-nextjs-13.md",sourceDirName:"courses",slug:"/courses/full-stack-development-with-nextjs-13",permalink:"/courses/full-stack-development-with-nextjs-13",draft:!1,editUrl:"https://github.com/travisluong/fullstackbook/tree/main/docs/courses/full-stack-development-with-nextjs-13.md",tags:[],version:"current",frontMatter:{},sidebar:"coursesSidebar",previous:{title:"FastAPI Fundamentals: API Development",permalink:"/courses/fastapi-fundamentals-api-development"}},s={},u=[{value:"What you\u2019ll learn",id:"what-youll-learn",level:2},{value:"Description",id:"description",level:2},{value:"Are there any course requirements or prerequisites?",id:"are-there-any-course-requirements-or-prerequisites",level:2},{value:"Who this course is for:",id:"who-this-course-is-for",level:2},{value:"Pricing",id:"pricing",level:2}],c={toc:u};function p(e){let{components:t,...l}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"full-stack-development-with-nextjs-13"},"Full Stack Development with Next.js 13"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Full Stack Development with Next.js 13",src:n(6683).Z,width:"1092",height:"612"})),(0,o.kt)("h2",{id:"what-youll-learn"},"What you\u2019ll learn"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"How to use NextJS to build a simple social media app"),(0,o.kt)("li",{parentName:"ul"},"How to create modular React components"),(0,o.kt)("li",{parentName:"ul"},"How to work with TypeScript"),(0,o.kt)("li",{parentName:"ul"},"How to work with PostgreSQL"),(0,o.kt)("li",{parentName:"ul"},"How to work with pg, a low level database driver for NodeJS"),(0,o.kt)("li",{parentName:"ul"},"How to secure the app with json web token authentication (JWT)"),(0,o.kt)("li",{parentName:"ul"},"How to implement simple role based authorization logic"),(0,o.kt)("li",{parentName:"ul"},"How to create, deploy, and secure cron jobs using Vercel Cron"),(0,o.kt)("li",{parentName:"ul"},"How to run scripts locally and on production"),(0,o.kt)("li",{parentName:"ul"},"How to deploy the app to Vercel"),(0,o.kt)("li",{parentName:"ul"},"How to style the app with TailwindCSS"),(0,o.kt)("li",{parentName:"ul"},"How to use SWR for data fetching and mutations"),(0,o.kt)("li",{parentName:"ul"},"How to use Postman to test an API"),(0,o.kt)("li",{parentName:"ul"},"How to use NextJS route groups to organize routes"),(0,o.kt)("li",{parentName:"ul"},"How to use Git and GitHub for source control")),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"Drawing inspiration from Meta's recent unveiling of Threads, this comprehensive course is meticulously crafted to empower students with the skills and knowledge needed to construct their very own Twitter Clone. Immerse yourself in a dynamic learning journey designed to mirror the authentic design and development processes of the real world. Through this course, you'll master indispensable proficiencies essential for crafting modern web applications employing cutting-edge tools and technologies."),(0,o.kt)("p",null,"In the ever-evolving landscape of the tech industry, the demand for Full Stack Developers is at an all-time high. These technical polymaths excel in Front End Development, Back End Development, and DevOps, often spearheading entire feature sets and projects from inception to deployment. Their versatility renders them indispensable assets, equally sought after by startups and corporate giants alike."),(0,o.kt)("p",null,"Upon completing this transformative course, you will have successfully conceptualized, constructed, and deployed a fully functional web app to the cloud. Armed with this foundational expertise, you'll possess the competence to delve into more advanced domains of study, setting the stage for a highly lucrative and fulfilling career in the ever-expanding tech sector."),(0,o.kt)("p",null,'Delve into this immersive learning experience structured as a step-by-step tutorial series. Seamlessly follow along on your computer as you unlock the secrets of web development. Beyond the lines of code, each tutorial will unravel the underlying thought processes, providing you with not only the "how" but also the essential "why" behind every strategic decision.'),(0,o.kt)("p",null,"This course is ideally suited for students possessing a foundational understanding of programming. However, even if you lack prior programming experience, your innate technical aptitude will be nurtured through our meticulously crafted tutorials, allowing you to seamlessly engage with the content and thrive in your learning journey."),(0,o.kt)("h2",{id:"are-there-any-course-requirements-or-prerequisites"},"Are there any course requirements or prerequisites?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"No programming experience is needed, but some is recommended"),(0,o.kt)("li",{parentName:"ul"},"Basic knowledge of HTML, CSS, JavaScript, Git, and SQL is recommended"),(0,o.kt)("li",{parentName:"ul"},"Basic computer skills")),(0,o.kt)("h2",{id:"who-this-course-is-for"},"Who this course is for:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Beginner and intermediate developers looking to learn Full Stack Development with NextJS"),(0,o.kt)("li",{parentName:"ul"},"Pro developers looking to learn more about NextJS 13 features like App Router"),(0,o.kt)("li",{parentName:"ul"},"Anyone wishing to learn how to build a web app using modern web technologies")),(0,o.kt)("h2",{id:"pricing"},"Pricing"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Original Price: ",(0,o.kt)("del",{parentName:"li"},"$189.99")),(0,o.kt)("li",{parentName:"ul"},"Limited Time Discount: 93% Off"),(0,o.kt)("li",{parentName:"ul"},"Price After Discount: $12.99"),(0,o.kt)("li",{parentName:"ul"},"Coupon Code: 54345E62C72E39781D45"),(0,o.kt)("li",{parentName:"ul"},"Expires 9/14/23")),(0,o.kt)("a",{href:"https://www.udemy.com/course/full-stack-development-with-nextjs-13/?couponCode=C59EF9BA7FC61412EBC8",className:"enroll-btn"},"Enroll on Udemy Today"))}p.isMDXComponent=!0},6683:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/full-stack-development-with-nextjs-13-d97c609a60380bbc6ceffd810c530e72.png"}}]);