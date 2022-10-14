"use strict";(self.webpackChunkfullstackbook=self.webpackChunkfullstackbook||[]).push([[1477],{10:n=>{n.exports=JSON.parse('{"blogPosts":[{"id":"deploy-nextjs-with-pm2","metadata":{"permalink":"/blog/deploy-nextjs-with-pm2","editUrl":"https://github.com/travisluong/fullstackbook/tree/main/blog/2022-10-13-deploy-nextjs-with-pm2.md","source":"@site/blog/2022-10-13-deploy-nextjs-with-pm2.md","title":"How To Deploy Next.js With PM2","description":"- On local machine:","date":"2022-10-13T00:00:00.000Z","formattedDate":"October 13, 2022","tags":[{"label":"fullstackbook","permalink":"/blog/tags/fullstackbook"}],"readingTime":1.59,"hasTruncateMarker":false,"authors":[{"name":"Travis Luong","title":"Author of Full Stack Book","url":"https://github.com/travisluong","imageURL":"https://github.com/travisluong.png","key":"travis"}],"frontMatter":{"slug":"deploy-nextjs-with-pm2","title":"How To Deploy Next.js With PM2","authors":["travis"],"tags":["fullstackbook"]},"nextItem":{"title":"First Blog Post","permalink":"/blog/first-blog-post"}},"content":"- On local machine:\\n\\n  - Install pm2.\\n\\n        npm i pm2 -g\\n\\n  - Create a new Next.js app.\\n\\n        npx create-next-app\\n        cd my-app\\n\\n  - Push to a private GitHub repo.\\n\\n- On cloud platform:\\n  - Launch a compute instance running Ubuntu.\\n  - Generate the pm2 ecosystem file.\\n\\n        pm2 ecosystem\\n\\n  - Replace the values.\\n\\n        module.exports = {\\n          apps: [{\\n            script: \'npm start\'\\n          }],\\n\\n          deploy: {\\n            production: {\\n              key: \\"PATH_TO_KEY\\",\\n              user: \'ubuntu\',\\n              host: \'SSH_HOSTMACHINE\',\\n              ref: \'origin/main\',\\n              repo: \'GIT_REPOSITORY\',\\n              path: \'/home/ubuntu\',\\n              \'pre-deploy-local\': \'\',\\n              \'post-deploy\': \'source ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production\',\\n              \'pre-setup\': \'\',\\n              \'ssh_options\': \'ForwardAgent=yes\'\\n            }\\n          }\\n        };\\n\\n  - Check in the file.\\n\\n        git add .\\n        git commit -m \\"add ecosystem\\"\\n  \\n  - Push to GitHub.\\n\\n- On local machine:\\n  - SSH into server.\\n\\n        ssh -i [PATH_TO_PEM] ubuntu@[IP_ADDRESS]\\n\\n- On the server:\\n\\n  - Install Node, PM2, and Nginx.\\n\\n        curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash\\n        source .bashrc\\n        nvm install --lts\\n        npm i -g pm2\\n        sudo apt-get update\\n        sudo apt-get install -y nginx\\n        sudo service nginx restart\\n\\n  - Go to the IP address in browser using http protocol and verify Nginx welcome page.\\n  - Configure Nginx.\\n\\n        sudo vim /etc/nginx/conf.d/my-app.conf\\n\\n  - Insert the following configuration.\\n\\n        server {  \\n            listen 80;  \\n            server_name myapp.example.com;\\n            \\n            location / {  \\n                proxy_pass http://127.0.0.1:3000/;\\n            }  \\n        }\\n\\n  - Restart Nginx.\\n\\n        sudo service nginx restart\\n\\n- Deploy Option 1: SSH Agent Forwarding\\n\\n  - On local machine:\\n    - Edit ssh config.\\n\\n          vim ~/.ssh/config\\n\\n    - Insert the following.\\n\\n          Host [IP_ADDRESS]\\n              ForwardAgent yes\\n\\n  - On the server:\\n    - Verify connection to GitHub.\\n\\n          ssh -T git@github.com\\n\\n- Deploy Option 2: Deploy Key\\n\\n  - On the server:\\n    - Run the ssh-keygen procedure.\\n\\n          ssh-keygen\\n    \\n    - Copy the public key.\\n\\n          cat ~/.ssh/id_rsa.pub\\n\\n  - On GitHub:\\n    - Go to the repo Settings > Deploy keys > Add deploy key\\n    - Paste the public key and click Add key.\\n\\n- Deployment\\n\\n  - On local machine:\\n    - Run pm2 setup.\\n\\n          pm2 deploy production setup\\n    \\n    - Run deployment.\\n\\n          pm2 deploy production"},{"id":"first-blog-post","metadata":{"permalink":"/blog/first-blog-post","editUrl":"https://github.com/travisluong/fullstackbook/tree/main/blog/2022-07-31-first-blog-post.md","source":"@site/blog/2022-07-31-first-blog-post.md","title":"First Blog Post","description":"Full Stack Book is under construction. \ud83d\udea7","date":"2022-07-31T00:00:00.000Z","formattedDate":"July 31, 2022","tags":[{"label":"fullstackbook","permalink":"/blog/tags/fullstackbook"}],"readingTime":0.035,"hasTruncateMarker":false,"authors":[{"name":"Travis Luong","title":"Author of Full Stack Book","url":"https://github.com/travisluong","imageURL":"https://github.com/travisluong.png","key":"travis"}],"frontMatter":{"slug":"first-blog-post","title":"First Blog Post","authors":["travis"],"tags":["fullstackbook"]},"prevItem":{"title":"How To Deploy Next.js With PM2","permalink":"/blog/deploy-nextjs-with-pm2"}},"content":"Full Stack Book is under construction. \ud83d\udea7"}]}')}}]);