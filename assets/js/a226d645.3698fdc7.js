"use strict";(self.webpackChunkfullstackbook=self.webpackChunkfullstackbook||[]).push([[4317],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),i=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=i(a),d=n,k=m["".concat(c,".").concat(d)]||m[d]||u[d]||l;return a?r.createElement(k,o(o({ref:t},p),{},{components:a})):r.createElement(k,o({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var i=2;i<l;i++)o[i]=a[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7106:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>i});var r=a(7462),n=(a(7294),a(3905));const l={},o="How To Set Up AWS Load Balancer Controller",s={unversionedId:"devops/tutorials/how-to-set-up-aws-load-balancer-controller",id:"devops/tutorials/how-to-set-up-aws-load-balancer-controller",title:"How To Set Up AWS Load Balancer Controller",description:"Set Up AWS Load Balancer Controller",source:"@site/docs/devops/tutorials/how-to-set-up-aws-load-balancer-controller.md",sourceDirName:"devops/tutorials",slug:"/devops/tutorials/how-to-set-up-aws-load-balancer-controller",permalink:"/devops/tutorials/how-to-set-up-aws-load-balancer-controller",draft:!1,editUrl:"https://github.com/travisluong/fullstackbook/tree/main/docs/devops/tutorials/how-to-set-up-aws-load-balancer-controller.md",tags:[],version:"current",frontMatter:{},sidebar:"devopsSidebar",previous:{title:"How To Deploy Spring Boot With Amazon EKS",permalink:"/devops/tutorials/how-to-deploy-spring-boot-with-amazon-eks"}},c={},i=[{value:"Set Up AWS Load Balancer Controller",id:"set-up-aws-load-balancer-controller",level:2},{value:"Set up Ingress",id:"set-up-ingress",level:2},{value:"References",id:"references",level:2}],p={toc:i};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"how-to-set-up-aws-load-balancer-controller"},"How To Set Up AWS Load Balancer Controller"),(0,n.kt)("h2",{id:"set-up-aws-load-balancer-controller"},"Set Up AWS Load Balancer Controller"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Go to ",(0,n.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/eks/latest/userguide/aws-load-balancer-controller.html"},"https://docs.aws.amazon.com/eks/latest/userguide/aws-load-balancer-controller.html")," and follow installation instructions.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Get arn account number by running command:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"aws sts get-caller-identity\n")),(0,n.kt)("p",{parentName:"li"},"This is needed for creating the iamserviceaccount.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Here is a condensed version of the instructions:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Create IAM OIDC provider for cluster."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"oidc_id=$(aws eks describe-cluster --name my-cluster --query \"cluster.identity.oidc.issuer\" --output text | cut -d '/' -f 5)\n\naws iam list-open-id-connect-providers | grep $oidc_id\n\neksctl utils associate-iam-oidc-provider --cluster my-cluster --approve\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Set up Load Balancer. Note: Replace the arn account number and cluster name where applicable."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"curl -o iam_policy.json https://raw.githubusercontent.com/kubernetes-sigs/aws-load-balancer-controller/v2.4.4/docs/install/iam_policy.json\n\naws iam create-policy \\\n    --policy-name AWSLoadBalancerControllerIAMPolicy \\\n    --policy-document file://iam_policy.json\n\neksctl create iamserviceaccount \\\n  --cluster=my-cluster \\\n  --namespace=kube-system \\\n  --name=aws-load-balancer-controller \\\n  --role-name \"AmazonEKSLoadBalancerControllerRole\" \\\n  --attach-policy-arn=arn:aws:iam::111122223333:policy/AWSLoadBalancerControllerIAMPolicy \\\n  --approve\n\nkubectl apply \\\n    --validate=false \\\n    -f https://github.com/jetstack/cert-manager/releases/download/v1.5.4/cert-manager.yaml\n\ncurl -Lo v2_4_4_full.yaml https://github.com/kubernetes-sigs/aws-load-balancer-controller/releases/download/v2.4.4/v2_4_4_full.yaml\n\nsed -i.bak -e '480,488d' ./v2_4_4_full.yaml\n\nsed -i.bak -e 's|your-cluster-name|my-cluster|' ./v2_4_4_full.yaml\n\nkubectl apply -f v2_4_4_full.yaml\n\ncurl -Lo v2_4_4_ingclass.yaml https://github.com/kubernetes-sigs/aws-load-balancer-controller/releases/download/v2.4.4/v2_4_4_ingclass.yaml\n\nkubectl apply -f v2_4_4_ingclass.yaml\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Verify controller is installed."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"kubectl get deployment -n kube-system aws-load-balancer-controller\n")))))),(0,n.kt)("h2",{id:"set-up-ingress"},"Set up Ingress"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Go to ",(0,n.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/kubernetes-sigs/aws-load-balancer-controller/v2.4.4/docs/examples/2048/2048_full.yaml"},"https://raw.githubusercontent.com/kubernetes-sigs/aws-load-balancer-controller/v2.4.4/docs/examples/2048/2048_full.yaml"),". Note the Ingress section.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Copy the ingress configuration and change the configuration to point to myapp. ",(0,n.kt)("inlineCode",{parentName:"p"},"ingress.yaml")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  namespace: default\n  name: my-ingress\n  annotations:\n    alb.ingress.kubernetes.io/scheme: internet-facing\n    alb.ingress.kubernetes.io/target-type: ip\nspec:\n  ingressClassName: alb\n  rules:\n    - http:\n        paths:\n          - path: /\n            pathType: Prefix\n            backend:\n              service:\n                name: myapp\n                port:\n                  number: 80\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Apply the ingress."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"kubectl apply -f ingress.yaml\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Confirm load balancer. This may take a few minutes."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"kubectl get ingress\n")))),(0,n.kt)("h2",{id:"references"},"References"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/eks/latest/userguide/alb-ingress.html"},"https://docs.aws.amazon.com/eks/latest/userguide/alb-ingress.html")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/eks/latest/userguide/aws-load-balancer-controller.html"},"https://docs.aws.amazon.com/eks/latest/userguide/aws-load-balancer-controller.html")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/services-networking/ingress/"},"https://kubernetes.io/docs/concepts/services-networking/ingress/"))))}u.isMDXComponent=!0}}]);