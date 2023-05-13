"use strict";(self.webpackChunkfullstackbook=self.webpackChunkfullstackbook||[]).push([[4261],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(a),d=r,k=m["".concat(s,".").concat(d)]||m[d]||u[d]||l;return a?n.createElement(k,o(o({ref:t},p),{},{components:a})):n.createElement(k,o({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3242:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const l={},o="How To Deploy Express With Amazon EKS And CircleCI",i={unversionedId:"devops/tutorials/how-to-deploy-express-with-amazon-eks-and-circleci",id:"devops/tutorials/how-to-deploy-express-with-amazon-eks-and-circleci",title:"How To Deploy Express With Amazon EKS And CircleCI",description:"- GitHub//github.com/travisluong/fullstackbook-express-eks-circleci",source:"@site/docs/devops/tutorials/how-to-deploy-express-with-amazon-eks-and-circleci.md",sourceDirName:"devops/tutorials",slug:"/devops/tutorials/how-to-deploy-express-with-amazon-eks-and-circleci",permalink:"/devops/tutorials/how-to-deploy-express-with-amazon-eks-and-circleci",draft:!1,editUrl:"https://github.com/travisluong/fullstackbook/tree/main/docs/devops/tutorials/how-to-deploy-express-with-amazon-eks-and-circleci.md",tags:[],version:"current",frontMatter:{},sidebar:"devopsSidebar",previous:{title:"DevOps",permalink:"/devops/"},next:{title:"How To Deploy Express With Amazon EKS",permalink:"/devops/tutorials/how-to-deploy-express-with-amazon-eks"}},s={},c=[{value:"Prerequisite",id:"prerequisite",level:2},{value:"Set Up Environment Variables",id:"set-up-environment-variables",level:2},{value:"Create CircleCI Config",id:"create-circleci-config",level:2},{value:"Next Steps",id:"next-steps",level:2},{value:"Reference",id:"reference",level:2}],p={toc:c};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-deploy-express-with-amazon-eks-and-circleci"},"How To Deploy Express With Amazon EKS And CircleCI"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GitHub: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/travisluong/fullstackbook-express-eks-circleci"},"https://github.com/travisluong/fullstackbook-express-eks-circleci")),(0,r.kt)("li",{parentName:"ul"},"YouTube: ",(0,r.kt)("a",{parentName:"li",href:"https://youtu.be/ojOnxQwC28k"},"https://youtu.be/ojOnxQwC28k"))),(0,r.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/devops/tutorials/how-to-deploy-express-with-amazon-eks"},"How To Deploy Express With Amazon EKS"))),(0,r.kt)("h2",{id:"set-up-environment-variables"},"Set Up Environment Variables"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In the AWS Console:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Create a new user named ",(0,r.kt)("inlineCode",{parentName:"li"},"circleci"),"."),(0,r.kt)("li",{parentName:"ul"},"Create a group named ",(0,r.kt)("inlineCode",{parentName:"li"},"cicd"),"."),(0,r.kt)("li",{parentName:"ul"},"Give the group the following permissions:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"AmazonEC2ContainerRegistryFullAccess"),(0,r.kt)("li",{parentName:"ul"},"AmazonEKSClusterPolicy"),(0,r.kt)("li",{parentName:"ul"},"AmazonEKS_CNI_Policy"),(0,r.kt)("li",{parentName:"ul"},"AmazonEKSWorkerNodePolicy"),(0,r.kt)("li",{parentName:"ul"},"AmazonEKSVPCResourceController"),(0,r.kt)("li",{parentName:"ul"},"AmazonEKSLocalOutpostClusterPolicy"))),(0,r.kt)("li",{parentName:"ul"},"Make sure the user belongs to the group."),(0,r.kt)("li",{parentName:"ul"},"Create AWS Access Key ID and AWS Secret Access Key for the user."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In local terminal:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Run the following command:")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"eksctl create iamidentitymapping --cluster my-cluster --region=us-west-2     --arn arn:aws:iam::207100238581:user/circleci --username circleci --group system:masters --no-duplicate-arns\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Note: ",(0,r.kt)("inlineCode",{parentName:"p"},"system:masters")," permissions is granted to the principal that originally created the cluster.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Troubleshooting:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"kubectl describe configmap -n kube-system aws-auth")," to view the aws auth."),(0,r.kt)("li",{parentName:"ul"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"kubectl edit -n kube-system configmap/aws-auth")," to manually edit."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In CircleCI:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Go to Project Settings."),(0,r.kt)("li",{parentName:"ul"},"Go to Environment Variables."),(0,r.kt)("li",{parentName:"ul"},"Add the following environment variables:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"AWS_ACCESS_KEY_ID"),(0,r.kt)("li",{parentName:"ul"},"AWS_SECRET_ACCESS_KEY"),(0,r.kt)("li",{parentName:"ul"},"AWS_DEFAULT_REGION")))))),(0,r.kt)("h2",{id:"create-circleci-config"},"Create CircleCI Config"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Go to Projects."),(0,r.kt)("li",{parentName:"ul"},"Click on Set Up Projects."),(0,r.kt)("li",{parentName:"ul"},"Click on Fast."),(0,r.kt)("li",{parentName:"ul"},"Select Node (Advanced)."),(0,r.kt)("li",{parentName:"ul"},"Change the configuration to the following:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},'version: 2.1\n\norbs:\n  node: circleci/node@4.7\n\njobs:\n  build-and-test:\n    docker:\n      - image: cimg/node:16.10\n    steps:\n      - checkout\n      - node/install-packages:\n          pkg-manager: npm\n      - run:\n          name: Run tests\n          command: npm test\n  deploy_to_production:\n    docker:\n      - image: cimg/python:3.10.2\n    steps:\n      - checkout\n      - setup_remote_docker:\n          docker_layer_caching: false\n      - run:\n          name: Deploy to EKS\n          command: |\n              curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"\n              chmod +x ./kubectl\n              pip3 install awscli --upgrade\n              aws --version\n              aws ecr get-login-password --region us-east-2 | docker login --username AWS --password-stdin 207100238581.dkr.ecr.us-east-2.amazonaws.com\n              aws eks update-kubeconfig --name my-cluster\n              LATEST_SHA=$(git rev-parse HEAD)\n              docker build -t express-eks:$LATEST_SHA .\n              docker tag express-eks:$LATEST_SHA 207100238581.dkr.ecr.us-east-2.amazonaws.com/express-eks:$LATEST_SHA\n              docker push 207100238581.dkr.ecr.us-east-2.amazonaws.com/express-eks:$LATEST_SHA\n              ./kubectl set image deployment/myapp myapp=207100238581.dkr.ecr.us-east-2.amazonaws.com/express-eks:$LATEST_SHA -n default              \n\n\nworkflows:\n  sample:\n    jobs:\n      - build-and-test\n      - deploy_to_production:\n          requires:\n            - build-and-test\n\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Make sure to replace the region, image url, and deployment name."),(0,r.kt)("li",{parentName:"ul"},"Click Commit and Run.")),(0,r.kt)("h2",{id:"next-steps"},"Next Steps"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Read about CircleCI workflows and branch level job execution to set up deployments to staging and production.")),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/eks/latest/userguide/install-aws-iam-authenticator.html"},"https://docs.aws.amazon.com/eks/latest/userguide/install-aws-iam-authenticator.html")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-envvars.html"},"https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-envvars.html")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://circleci.com/docs/config-intro/"},"https://circleci.com/docs/config-intro/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://circleci.com/docs/workflows/#branch-level-job-execution"},"https://circleci.com/docs/workflows/#branch-level-job-execution")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/eks/latest/userguide/add-user-role.html"},"https://docs.aws.amazon.com/eks/latest/userguide/add-user-role.html"))))}u.isMDXComponent=!0}}]);