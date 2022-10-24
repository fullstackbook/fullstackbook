"use strict";(self.webpackChunkfullstackbook=self.webpackChunkfullstackbook||[]).push([[3346],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),i=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=i(a),k=r,d=u["".concat(p,".").concat(k)]||u[k]||m[k]||l;return a?n.createElement(d,s(s({ref:t},c),{},{components:a})):n.createElement(d,s({ref:t},c))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var i=2;i<l;i++)s[i]=a[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7172:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>i});var n=a(7462),r=(a(7294),a(3905));const l={},s="How To Deploy Express With Amazon EKS",o={unversionedId:"guides/how-to-deploy-express-with-amazon-eks",id:"guides/how-to-deploy-express-with-amazon-eks",title:"How To Deploy Express With Amazon EKS",description:"Prerequisites",source:"@site/docs/guides/how-to-deploy-express-with-amazon-eks.md",sourceDirName:"guides",slug:"/guides/how-to-deploy-express-with-amazon-eks",permalink:"/docs/guides/how-to-deploy-express-with-amazon-eks",draft:!1,editUrl:"https://github.com/travisluong/fullstackbook/tree/main/docs/guides/how-to-deploy-express-with-amazon-eks.md",tags:[],version:"current",frontMatter:{},sidebar:"guidesSidebar",previous:{title:"Guides",permalink:"/docs/guides/"},next:{title:"How To Deploy Next.js With PM2",permalink:"/docs/guides/how-to-deploy-nextjs-with-pm2"}},p={},i=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Initial Setup",id:"initial-setup",level:2},{value:"Elastic Container Registry (ECR) Setup",id:"elastic-container-registry-ecr-setup",level:2},{value:"Elastic Kubernetes Service (EKS) Setup",id:"elastic-kubernetes-service-eks-setup",level:2},{value:"Set up AWS Load Balancer Controller",id:"set-up-aws-load-balancer-controller",level:2},{value:"Set up Ingress",id:"set-up-ingress",level:2},{value:"Delete cluster",id:"delete-cluster",level:2},{value:"References",id:"references",level:2}],c={toc:i};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-deploy-express-with-amazon-eks"},"How To Deploy Express With Amazon EKS"),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Follow the getting started guide and make sure the following are installed:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"AWS CLI"),(0,r.kt)("li",{parentName:"ul"},"kubectl"),(0,r.kt)("li",{parentName:"ul"},"eksctl"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/eks/latest/userguide/getting-started.html"},"https://docs.aws.amazon.com/eks/latest/userguide/getting-started.html"))),(0,r.kt)("h2",{id:"initial-setup"},"Initial Setup"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Install Express."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"npm init\nnpm install express --save\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Create express app. ",(0,r.kt)("inlineCode",{parentName:"p"},"app.js")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const express = require('express')\nconst app = express()\nconst port = 3000\n\napp.get('/', (req, res) => {\n  res.send('Hello World!')\n})\n\napp.listen(port, () => {\n  console.log(`Example app listening on port ${port}`)\n})\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Create Dockerfile."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'FROM node:16\nWORKDIR /usr/src/app\nCOPY package.json ./\nRUN npm install\nCOPY . .\nCMD [ "node", "app.js" ]\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Build image."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"docker build -t hello .\n")))),(0,r.kt)("h2",{id:"elastic-container-registry-ecr-setup"},"Elastic Container Registry (ECR) Setup"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Go to Amazon ECR."),(0,r.kt)("li",{parentName:"ul"},"Create a repository."),(0,r.kt)("li",{parentName:"ul"},'Click on "View push commands".'),(0,r.kt)("li",{parentName:"ul"},"Follow the instructions to push image."),(0,r.kt)("li",{parentName:"ul"},"Copy the image url.")),(0,r.kt)("h2",{id:"elastic-kubernetes-service-eks-setup"},"Elastic Kubernetes Service (EKS) Setup"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Create EKS cluster."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"eksctl create cluster --name my-cluster --region us-west-2\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Confirm communication with cluster."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"kubectl get svc\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Create yaml configuration. ",(0,r.kt)("inlineCode",{parentName:"p"},"k8s.yaml")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: myapp\nspec:\n  selector:\n    matchLabels:\n      app: myapp\n  template:\n    metadata:\n      labels:\n        app: myapp\n    spec:\n      containers:\n        - name: myapp\n          image: 111111111111.dkr.ecr.us-east-2.amazonaws.com/myapp:latest\n          resources:\n            limits:\n              memory: "128Mi"\n              cpu: "500m"\n          ports:\n            - name: tcp\n              containerPort: 3000\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: myapp\nspec:\n  selector:\n    app: myapp\n  ports:\n    - port: 80\n      targetPort: 3000\n  type: LoadBalancer\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Apply manifest."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"kubectl apply k8s.yaml\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Confirm pods."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"kubectl get pod\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Open shell into pod."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"kubectl exec -it myapp-7487b94844-wvfmn -- bash\n")),(0,r.kt)("p",{parentName:"li"},"Note: Replace the pod name with result from previous command.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Confirm load balancer."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"kubectl get svc\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Confirm load balancer domain."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"nslookup af220a880523a491a991ecc793ae1da2-125775810.us-west-2.elb.amazonaws.com\n")),(0,r.kt)("p",{parentName:"li"},"Note: This might take a few minutes.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Confirm response from app."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"curl af220a880523a491a991ecc793ae1da2-125775810.us-west-2.elb.amazonaws.com\n")))),(0,r.kt)("h2",{id:"set-up-aws-load-balancer-controller"},"Set up AWS Load Balancer Controller"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Go to ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/eks/latest/userguide/aws-load-balancer-controller.html"},"https://docs.aws.amazon.com/eks/latest/userguide/aws-load-balancer-controller.html")," and follow installation instructions.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Get arn account number by running command:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"aws sts get-caller-identity\n")),(0,r.kt)("p",{parentName:"li"},"This is needed for creating the iamserviceaccount.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Here is a condensed version of the instructions:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"curl -o iam_policy.json https://raw.githubusercontent.com/kubernetes-sigs/aws-load-balancer-controller/v2.4.4/docs/install/iam_policy.json\n\naws iam create-policy \\\n    --policy-name AWSLoadBalancerControllerIAMPolicy \\\n    --policy-document file://iam_policy.json\n\neksctl create iamserviceaccount \\\n  --cluster=my-cluster \\\n  --namespace=kube-system \\\n  --name=aws-load-balancer-controller \\\n  --role-name \"AmazonEKSLoadBalancerControllerRole\" \\\n  --attach-policy-arn=arn:aws:iam::111122223333:policy/AWSLoadBalancerControllerIAMPolicy \\\n  --approve\n\nkubectl apply \\\n    --validate=false \\\n    -f https://github.com/jetstack/cert-manager/releases/download/v1.5.4/cert-manager.yaml\n\ncurl -Lo v2_4_4_full.yaml https://github.com/kubernetes-sigs/aws-load-balancer-controller/releases/download/v2.4.4/v2_4_4_full.yaml\n\nsed -i.bak -e '480,488d' ./v2_4_4_full.yaml\n\nsed -i.bak -e 's|your-cluster-name|my-cluster|' ./v2_4_4_full.yaml\n\nkubectl apply -f v2_4_4_full.yaml\n\ncurl -Lo v2_4_4_ingclass.yaml https://github.com/kubernetes-sigs/aws-load-balancer-controller/releases/download/v2.4.4/v2_4_4_ingclass.yaml\n\nkubectl apply -f v2_4_4_ingclass.yaml\n\nkubectl get deployment -n kube-system aws-load-balancer-controller\n")))),(0,r.kt)("h2",{id:"set-up-ingress"},"Set up Ingress"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Go to ",(0,r.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/kubernetes-sigs/aws-load-balancer-controller/v2.4.4/docs/examples/2048/2048_full.yaml"},"https://raw.githubusercontent.com/kubernetes-sigs/aws-load-balancer-controller/v2.4.4/docs/examples/2048/2048_full.yaml"),". Note the Ingress section.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Copy the ingress configuration and change the configuration to point to myapp. ",(0,r.kt)("inlineCode",{parentName:"p"},"ingress.yaml")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  namespace: default\n  name: my-ingress\n  annotations:\n    alb.ingress.kubernetes.io/scheme: internet-facing\n    alb.ingress.kubernetes.io/target-type: ip\nspec:\n  ingressClassName: alb\n  rules:\n    - http:\n        paths:\n          - path: /\n            pathType: Prefix\n            backend:\n              service:\n                name: myapp\n                port:\n                  number: 80\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Apply the ingress."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"kubectl apply -f ingress.yaml\n")))),(0,r.kt)("h2",{id:"delete-cluster"},"Delete cluster"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Delete the cluster avoid large AWS bill."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"eksctl delete cluster --name my-cluster\n")))),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/eks/index.html"},"https://docs.aws.amazon.com/eks/index.html")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/ecr/index.html"},"https://docs.aws.amazon.com/ecr/index.html")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/eks/latest/userguide/alb-ingress.html"},"https://docs.aws.amazon.com/eks/latest/userguide/alb-ingress.html")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/eks/latest/userguide/aws-load-balancer-controller.html"},"https://docs.aws.amazon.com/eks/latest/userguide/aws-load-balancer-controller.html")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/services-networking/ingress/"},"https://kubernetes.io/docs/concepts/services-networking/ingress/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://youtu.be/PH-Mcd0Rs1w"},"https://youtu.be/PH-Mcd0Rs1w"))))}m.isMDXComponent=!0}}]);