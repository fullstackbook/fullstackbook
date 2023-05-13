"use strict";(self.webpackChunkfullstackbook=self.webpackChunkfullstackbook||[]).push([[609],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),i=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=i(a),k=n,d=u["".concat(s,".").concat(k)]||u[k]||c[k]||l;return a?r.createElement(d,p(p({ref:t},m),{},{components:a})):r.createElement(d,p({ref:t},m))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,p=new Array(l);p[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,p[1]=o;for(var i=2;i<l;i++)p[i]=a[i];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9639:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>i});var r=a(7462),n=(a(7294),a(3905));const l={},p="How To Deploy Express With Amazon EKS",o={unversionedId:"devops/tutorials/how-to-deploy-express-with-amazon-eks",id:"devops/tutorials/how-to-deploy-express-with-amazon-eks",title:"How To Deploy Express With Amazon EKS",description:"Prerequisites",source:"@site/docs/devops/tutorials/how-to-deploy-express-with-amazon-eks.md",sourceDirName:"devops/tutorials",slug:"/devops/tutorials/how-to-deploy-express-with-amazon-eks",permalink:"/devops/tutorials/how-to-deploy-express-with-amazon-eks",draft:!1,editUrl:"https://github.com/travisluong/fullstackbook/tree/main/docs/devops/tutorials/how-to-deploy-express-with-amazon-eks.md",tags:[],version:"current",frontMatter:{},sidebar:"devopsSidebar",previous:{title:"Uptime Checks",permalink:"/devops/topics/uptime-checks"},next:{title:"How To Deploy FastAPI With PM2 And Connect To Redis",permalink:"/devops/tutorials/how-to-deploy-fastapi-with-pm2-and-connect-to-redis"}},s={},i=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Initial Setup",id:"initial-setup",level:2},{value:"Elastic Container Registry (ECR) Setup",id:"elastic-container-registry-ecr-setup",level:2},{value:"Elastic Kubernetes Service (EKS) Setup",id:"elastic-kubernetes-service-eks-setup",level:2},{value:"Set up AWS Load Balancer Controller",id:"set-up-aws-load-balancer-controller",level:2},{value:"Delete cluster",id:"delete-cluster",level:2},{value:"References",id:"references",level:2}],m={toc:i};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"how-to-deploy-express-with-amazon-eks"},"How To Deploy Express With Amazon EKS"),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Follow the getting started guide and make sure the following are installed:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"AWS CLI"),(0,n.kt)("li",{parentName:"ul"},"kubectl"),(0,n.kt)("li",{parentName:"ul"},"eksctl"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/eks/latest/userguide/getting-started.html"},"https://docs.aws.amazon.com/eks/latest/userguide/getting-started.html"))),(0,n.kt)("h2",{id:"initial-setup"},"Initial Setup"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Install Express."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"npm init\nnpm install express --save\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Create express app. ",(0,n.kt)("inlineCode",{parentName:"p"},"app.js")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const express = require('express')\nconst app = express()\nconst port = 3000\n\napp.get('/', (req, res) => {\n  res.send('Hello World!')\n})\n\napp.listen(port, () => {\n  console.log(`Example app listening on port ${port}`)\n})\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Create Dockerfile."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'FROM node:16\nWORKDIR /usr/src/app\nCOPY package.json ./\nRUN npm install\nCOPY . .\nCMD [ "node", "app.js" ]\n'))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Build image."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"docker build -t express-eks .\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Run container."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"docker run -p 3000:3000 -it --rm --name express-eks-run express-eks\n")))),(0,n.kt)("h2",{id:"elastic-container-registry-ecr-setup"},"Elastic Container Registry (ECR) Setup"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Go to Amazon ECR."),(0,n.kt)("li",{parentName:"ul"},"Create a repository."),(0,n.kt)("li",{parentName:"ul"},'Click on "View push commands".'),(0,n.kt)("li",{parentName:"ul"},"Follow the instructions to push image."),(0,n.kt)("li",{parentName:"ul"},"Copy the image url.")),(0,n.kt)("h2",{id:"elastic-kubernetes-service-eks-setup"},"Elastic Kubernetes Service (EKS) Setup"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Create EKS cluster."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"eksctl create cluster --name my-cluster --region us-west-2\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Confirm communication with cluster."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"kubectl get svc\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Create yaml configuration. ",(0,n.kt)("inlineCode",{parentName:"p"},"k8s.yaml")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: myapp\nspec:\n  selector:\n    matchLabels:\n      app: myapp\n  template:\n    metadata:\n      labels:\n        app: myapp\n    spec:\n      containers:\n        - name: myapp\n          image: 111111111111.dkr.ecr.us-east-2.amazonaws.com/myapp:latest\n          resources:\n            limits:\n              memory: "128Mi"\n              cpu: "500m"\n          ports:\n            - name: tcp\n              containerPort: 3000\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: myapp\nspec:\n  selector:\n    app: myapp\n  ports:\n    - port: 80\n      targetPort: 3000\n  type: LoadBalancer\n'))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Apply manifest."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"kubectl apply -f k8s.yaml\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Confirm pods."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"kubectl get pod\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Open shell into pod."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"kubectl exec -it myapp-7487b94844-wvfmn -- bash\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Confirm load balancer."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"kubectl get svc\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Confirm load balancer domain."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"nslookup af220a880523a491a991ecc793ae1da2-125775810.us-west-2.elb.amazonaws.com\n")),(0,n.kt)("p",{parentName:"li"},"Note: This might take a few minutes.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Confirm response from app."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"curl af220a880523a491a991ecc793ae1da2-125775810.us-west-2.elb.amazonaws.com\n")))),(0,n.kt)("h2",{id:"set-up-aws-load-balancer-controller"},"Set up AWS Load Balancer Controller"),(0,n.kt)("p",null,"For more complex traffic routing, see ",(0,n.kt)("a",{parentName:"p",href:"/devops/tutorials/how-to-set-up-aws-load-balancer-controller"},"how-to-set-up-aws-load-balancer-controller.md"),"."),(0,n.kt)("h2",{id:"delete-cluster"},"Delete cluster"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Delete the cluster avoid large AWS bill."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"eksctl delete cluster --name my-cluster\n")))),(0,n.kt)("h2",{id:"references"},"References"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/eks/index.html"},"https://docs.aws.amazon.com/eks/index.html")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/ecr/index.html"},"https://docs.aws.amazon.com/ecr/index.html"))))}c.isMDXComponent=!0}}]);