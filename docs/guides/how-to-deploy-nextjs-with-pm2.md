---
slug: how-to-deploy-nextjs-with-pm2
title: How To Deploy Next.js With PM2
---

- On local machine:

  - Install pm2.

        npm i pm2 -g

  - Create a new Next.js app.

        npx create-next-app
        cd my-app

  - Push to a private GitHub repo.

- On cloud platform:
  - Launch a compute instance running Ubuntu.
  - Generate the pm2 ecosystem file.

        pm2 ecosystem

  - Replace the values.

      ```js
      module.exports = {
        apps: [{
          script: 'npm start'
        }],

        deploy: {
          production: {
            key: "PATH_TO_KEY",
            user: 'ubuntu',
            host: 'SSH_HOSTMACHINE',
            ref: 'origin/main',
            repo: 'GIT_REPOSITORY',
            path: '/home/ubuntu',
            'pre-deploy-local': '',
            'post-deploy': 'source ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production',
            'pre-setup': '',
            'ssh_options': 'ForwardAgent=yes'
          }
        }
      };
      ```

  - Check in the file.

        git add .
        git commit -m "add ecosystem"
  
  - Push to GitHub.

- On local machine:
  - SSH into server.

        ssh -i [PATH_TO_PEM] ubuntu@[IP_ADDRESS]

- On the server:

  - Install Node, PM2, and Nginx.

        curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
        source .bashrc
        nvm install --lts
        npm i -g pm2
        sudo apt-get update
        sudo apt-get install -y nginx
        sudo service nginx restart

  - Go to the IP address in browser using http protocol and verify Nginx welcome page.
  - Configure Nginx.

        sudo vim /etc/nginx/conf.d/my-app.conf

  - Insert the following configuration.

        server {  
            listen 80;  
            server_name myapp.example.com;
            
            location / {  
                proxy_pass http://127.0.0.1:3000/;
            }  
        }

  - Restart Nginx.

        sudo service nginx restart

- Deploy Option 1: SSH Agent Forwarding

  - On local machine:
    - Edit ssh config.

          vim ~/.ssh/config

    - Insert the following.

          Host [IP_ADDRESS]
              ForwardAgent yes

  - On the server:
    - Verify connection to GitHub.

          ssh -T git@github.com

- Deploy Option 2: Deploy Key

  - On the server:
    - Run the ssh-keygen procedure.

          ssh-keygen
    
    - Copy the public key.

          cat ~/.ssh/id_rsa.pub

  - On GitHub:
    - Go to the repo Settings > Deploy keys > Add deploy key
    - Paste the public key and click Add key.

- Deployment

  - On local machine:
    - Run pm2 setup.

          pm2 deploy production setup
    
    - Run deployment.

          pm2 deploy production