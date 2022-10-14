"use strict";(self.webpackChunkfullstackbook=self.webpackChunkfullstackbook||[]).push([[9343],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),m=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=m(e.components);return a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=m(n),k=r,N=c["".concat(o,".").concat(k)]||c[k]||s[k]||p;return n?a.createElement(N,l(l({ref:t},u),{},{components:n})):a.createElement(N,l({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,l=new Array(p);l[0]=c;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var m=2;m<p;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5270:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>s,frontMatter:()=>p,metadata:()=>i,toc:()=>m});var a=n(7462),r=(n(7294),n(3905));const p={slug:"deploy-nextjs-with-pm2",title:"How To Deploy Next.js With PM2",authors:["travis"],tags:["fullstackbook"]},l=void 0,i={permalink:"/blog/deploy-nextjs-with-pm2",editUrl:"https://github.com/travisluong/fullstackbook/tree/main/blog/2022-10-13-deploy-nextjs-with-pm2.md",source:"@site/blog/2022-10-13-deploy-nextjs-with-pm2.md",title:"How To Deploy Next.js With PM2",description:"- On local machine:",date:"2022-10-13T00:00:00.000Z",formattedDate:"October 13, 2022",tags:[{label:"fullstackbook",permalink:"/blog/tags/fullstackbook"}],readingTime:1.615,hasTruncateMarker:!1,authors:[{name:"Travis Luong",title:"Author of Full Stack Book",url:"https://github.com/travisluong",imageURL:"https://github.com/travisluong.png",key:"travis"}],frontMatter:{slug:"deploy-nextjs-with-pm2",title:"How To Deploy Next.js With PM2",authors:["travis"],tags:["fullstackbook"]},nextItem:{title:"First Blog Post",permalink:"/blog/first-blog-post"}},o={authorsImageUrls:[void 0]},m=[],u={toc:m};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"On local machine:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Create a new Next.js app."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"npx create-next-app\ncd my-app\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Install pm2."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"npm i pm2 -g\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Generate the pm2 ecosystem file."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"pm2 ecosystem\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Replace the values."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"module.exports = {\n  apps: [{\n    script: 'npm start'\n  }],\n\n  deploy: {\n    production: {\n      key: \"key.pem\",\n      user: 'ubuntu',\n      host: 'SSH_HOSTMACHINE',\n      ref: 'origin/main',\n      repo: 'GIT_REPOSITORY',\n      path: '/home/ubuntu',\n      'pre-deploy-local': '',\n      'post-deploy': 'source ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production',\n      'pre-setup': '',\n      'ssh_options': 'ForwardAgent=yes'\n    }\n  }\n};\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Check in the file."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'git add .\ngit commit -m "add ecosystem"\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Push to a private GitHub repo.")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"On cloud platform:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Launch a compute instance running Ubuntu."),(0,r.kt)("li",{parentName:"ul"},"Configure security group to allow traffic from anywhere."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"On local machine:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"SSH into server."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"ssh -i [PATH_TO_PEM] ubuntu@[IP_ADDRESS]\n"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"On the server:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Install Node, PM2, and Nginx."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash\nsource .bashrc\nnvm install --lts\nnpm i -g pm2\nsudo apt-get update\nsudo apt-get install -y nginx\nsudo service nginx restart\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Go to the IP address in browser using http protocol and verify Nginx welcome page.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Configure Nginx."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"sudo vim /etc/nginx/conf.d/my-app.conf\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Insert the following configuration."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"server {  \n    listen 80;  \n    server_name myapp.example.com;\n    \n    location / {  \n        proxy_pass http://127.0.0.1:3000/;\n    }  \n}\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Restart Nginx."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"sudo service nginx restart\n"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Deploy Option 1: SSH Agent Forwarding"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"On local machine:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Edit ssh config."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"vim ~/.ssh/config\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Insert the following."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"Host [IP_ADDRESS]\n    ForwardAgent yes\n"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"On the server:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Verify connection to GitHub."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"ssh -T git@github.com\n"))))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Deploy Option 2: Deploy Key"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"On the server:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Run the ssh-keygen procedure."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"ssh-keygen\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Copy the public key."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"cat ~/.ssh/id_rsa.pub\n"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"On GitHub:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Go to the repo Settings > Deploy keys > Add deploy key"),(0,r.kt)("li",{parentName:"ul"},"Paste the public key and click Add key."))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Deployment"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"On local machine:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Run pm2 setup."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"pm2 deploy production setup\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Run deployment."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"pm2 deploy production\n")))))))))}s.isMDXComponent=!0}}]);