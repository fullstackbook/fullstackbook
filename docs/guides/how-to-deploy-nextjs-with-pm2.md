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
  - Download the pem key.
- On local machine:
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
          key: 'key.pem',
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
  - Change pem permission.

        chmod 400 key.pem

  - Copy the pem file into project root.
  - SSH into server.

        ssh -i key.pem ubuntu@[IP_ADDRESS]

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
            server_name IP_ADDRESS;
            
            location / {  
                proxy_pass http://127.0.0.1:3000/;
            }  
        }

  - Restart Nginx.

        sudo service nginx restart

- Choose one of two deployment options:

  - Deploy Option 1: SSH Agent Forwarding

    - On local machine:
      - Edit ssh config.

            vim ~/.ssh/config

      - Insert the following.

            Host [IP_ADDRESS]
                ForwardAgent yes
      
      - Run ssh-add.

            ssh-add

      - SSH into server.

            ssh -i key.pem ubuntu@[IP_ADDRESS]

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

- Set up domain.
  - Go to your DNS provider.
  - Point domain to IP address.
  - Wait for DNS propagation.
  - Verify DNS with dig.

        dig myapp.fullstackbook.com

  - Change the Nginx configuration to use domain instead of IP.

        server {  
            listen 80;  
            server_name myapp.fullstackbook.com;
            
            location / {  
                proxy_pass http://127.0.0.1:3000/;
            }  
        }
  
  - Restart Nginx.

        sudo service nginx restart

- Set up SSL.
  - Go to [certbot.eff.org](https://certbot.eff.org).
  - Select Nginx as the Software and Ubuntu as the System.
  - Follow the instructions. Below is a condensed version of the commands:

        sudo snap install core; sudo snap refresh core
        sudo apt-get remove certbot
        sudo snap install --classic certbot
        sudo ln -s /snap/bin/certbot /usr/bin/certbot
        sudo certbot --nginx