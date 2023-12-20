"use strict";(self.webpackChunkfullstackbook=self.webpackChunkfullstackbook||[]).push([[3251],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),i=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=i(a),d=r,k=m["".concat(c,".").concat(d)]||m[d]||u[d]||l;return a?n.createElement(k,o(o({ref:t},p),{},{components:a})):n.createElement(k,o({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var i=2;i<l;i++)o[i]=a[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8516:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>i});var n=a(7462),r=(a(7294),a(3905));const l={},o="How To Set Up AWS Load Balancer Controller",s={unversionedId:"devops/how-to-set-up-aws-load-balancer-controller",id:"devops/how-to-set-up-aws-load-balancer-controller",title:"How To Set Up AWS Load Balancer Controller",description:"Set Up AWS Load Balancer Controller",source:"@site/docs/devops/how-to-set-up-aws-load-balancer-controller.md",sourceDirName:"devops",slug:"/devops/how-to-set-up-aws-load-balancer-controller",permalink:"/fullstackbook/devops/how-to-set-up-aws-load-balancer-controller",draft:!1,editUrl:"https://github.com/travisluong/fullstackbook/tree/main/docs/devops/how-to-set-up-aws-load-balancer-controller.md",tags:[],version:"current",frontMatter:{},sidebar:"devopsSidebar",previous:{title:"How To Deploy Spring Boot With Amazon EKS",permalink:"/fullstackbook/devops/how-to-deploy-spring-boot-with-amazon-eks"},next:{title:"Kubernetes Abstractions",permalink:"/fullstackbook/devops/kubernetes-abstractions"}},c={},i=[{value:"Set Up AWS Load Balancer Controller",id:"set-up-aws-load-balancer-controller",level:2},{value:"Set up Ingress",id:"set-up-ingress",level:2},{value:"References",id:"references",level:2}],p={toc:i};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-set-up-aws-load-balancer-controller"},"How To Set Up AWS Load Balancer Controller"),(0,r.kt)("h2",{id:"set-up-aws-load-balancer-controller"},"Set Up AWS Load Balancer Controller"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Go to ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/eks/latest/userguide/aws-load-balancer-controller.html"},"https://docs.aws.amazon.com/eks/latest/userguide/aws-load-balancer-controller.html")," and follow installation instructions.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Get arn account number by running command:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"aws sts get-caller-identity\n")),(0,r.kt)("p",{parentName:"li"},"This is needed for creating the iamserviceaccount.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Here is a condensed version of the instructions:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Create IAM OIDC provider for cluster."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"oidc_id=$(aws eks describe-cluster --name my-cluster --query \"cluster.identity.oidc.issuer\" --output text | cut -d '/' -f 5)\n\naws iam list-open-id-connect-providers | grep $oidc_id\n\neksctl utils associate-iam-oidc-provider --cluster my-cluster --approve\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Set up Load Balancer. Note: Replace the arn account number and cluster name where applicable."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"curl -o iam_policy.json https://raw.githubusercontent.com/kubernetes-sigs/aws-load-balancer-controller/v2.4.4/docs/install/iam_policy.json\n\naws iam create-policy \\\n    --policy-name AWSLoadBalancerControllerIAMPolicy \\\n    --policy-document file://iam_policy.json\n\neksctl create iamserviceaccount \\\n  --cluster=my-cluster \\\n  --namespace=kube-system \\\n  --name=aws-load-balancer-controller \\\n  --role-name \"AmazonEKSLoadBalancerControllerRole\" \\\n  --attach-policy-arn=arn:aws:iam::111122223333:policy/AWSLoadBalancerControllerIAMPolicy \\\n  --approve\n\nkubectl apply \\\n    --validate=false \\\n    -f https://github.com/jetstack/cert-manager/releases/download/v1.5.4/cert-manager.yaml\n\ncurl -Lo v2_4_4_full.yaml https://github.com/kubernetes-sigs/aws-load-balancer-controller/releases/download/v2.4.4/v2_4_4_full.yaml\n\nsed -i.bak -e '480,488d' ./v2_4_4_full.yaml\n\nsed -i.bak -e 's|your-cluster-name|my-cluster|' ./v2_4_4_full.yaml\n\nkubectl apply -f v2_4_4_full.yaml\n\ncurl -Lo v2_4_4_ingclass.yaml https://github.com/kubernetes-sigs/aws-load-balancer-controller/releases/download/v2.4.4/v2_4_4_ingclass.yaml\n\nkubectl apply -f v2_4_4_ingclass.yaml\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Verify controller is installed."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"kubectl get deployment -n kube-system aws-load-balancer-controller\n")))))),(0,r.kt)("h2",{id:"set-up-ingress"},"Set up Ingress"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Go to ",(0,r.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/kubernetes-sigs/aws-load-balancer-controller/v2.4.4/docs/examples/2048/2048_full.yaml"},"https://raw.githubusercontent.com/kubernetes-sigs/aws-load-balancer-controller/v2.4.4/docs/examples/2048/2048_full.yaml"),". Note the Ingress section.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Copy the ingress configuration and change the configuration to point to myapp. ",(0,r.kt)("inlineCode",{parentName:"p"},"ingress.yaml")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  namespace: default\n  name: my-ingress\n  annotations:\n    alb.ingress.kubernetes.io/scheme: internet-facing\n    alb.ingress.kubernetes.io/target-type: ip\nspec:\n  ingressClassName: alb\n  rules:\n    - http:\n        paths:\n          - path: /\n            pathType: Prefix\n            backend:\n              service:\n                name: myapp\n                port:\n                  number: 80\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Apply the ingress."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"kubectl apply -f ingress.yaml\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Confirm load balancer. This may take a few minutes."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"kubectl get ingress\n")))),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/eks/latest/userguide/alb-ingress.html"},"https://docs.aws.amazon.com/eks/latest/userguide/alb-ingress.html")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/eks/latest/userguide/aws-load-balancer-controller.html"},"https://docs.aws.amazon.com/eks/latest/userguide/aws-load-balancer-controller.html")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/services-networking/ingress/"},"https://kubernetes.io/docs/concepts/services-networking/ingress/"))))}u.isMDXComponent=!0}}]);