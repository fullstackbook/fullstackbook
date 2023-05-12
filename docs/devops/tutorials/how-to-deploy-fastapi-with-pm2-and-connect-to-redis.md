---
slug: how-to-deploy-fastapi-with-pm2-and-connect-to-redis
title: How To Deploy FastAPI With PM2 And Connect To Redis
---

- GitHub: https://github.com/travisluong/fullstackbook-nextjs-pm2
- YouTube: [How To Deploy FastAPI With PM2 And Connect To AWS Redis](https://youtu.be/vs8jF9kFszM)

## Initial setup

- On local machine:
  - Install pm2.

        npm i pm2 -g
  
  - Create a new FastAPI app. (See example app)
  - Push to a private GitHub repo.
- In the AWS Console:
  - Launch a compute instance running Ubuntu.
    - Download the pem key.
    - Note the security group.
  - Go to Elasticache in AWS Console.
    - Create a new Redis cluster.
  - Go to VPC in AWS Console.
    - Create a new security group for the redis cluster.
    - Set an inbound rule to allow Custom TCP traffic on port 6379 from the security group of the ec2 instance.
    - Go back to the redis cluster and assign it to the new security group.
- On local machine:
  - Generate the pm2 ecosystem file.

        pm2 ecosystem

  - Replace the values.

    ```js
    module.exports = {
      apps: [{
        script: 'uvicorn main:app'
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
          'post-deploy': 'source ~/.profile && source ~/.nvm/nvm.sh && python3 -m venv venv && . venv/bin/activate && pip install -r requirements.txt && pm2 reload ecosystem.config.js --env production',
          'pre-setup': ''
        }
      }
    };

    ```

  - Check in the file.

        git add .
        git commit -m "add ecosystem"
  
  - Push to GitHub.

## Provision server


- On local machine:
  - Change pem permission.

        chmod 400 key.pem

  - Copy the pem file into project root.
  - SSH into server.

        ssh -i key.pem ubuntu@[SSH_HOSTMACHINE]

- On the server:

  - Install Node, PM2.

        curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
        source .bashrc
        nvm install --lts
        npm i -g pm2

  - Install Nginx.

        sudo apt-get update
        sudo apt-get install -y nginx
        sudo service nginx restart
  
  - Install Python3.

        sudo apt-get install -y python3 python3-venv python3-pip

  - Install Redis. (See https://redis.io/docs/getting-started/installation/install-redis-on-linux/)

        sudo apt install lsb-release
        curl -fsSL https://packages.redis.io/gpg | sudo gpg --dearmor -o /usr/share/keyrings/redis-archive-keyring.gpg
        echo "deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] https://packages.redis.io/deb $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/redis.list
        sudo apt-get update
        sudo apt-get install redis

  - Test the redis connection with the cli.

        redis-cli fish.2lh6ar.ng.0001.usw2.cache.amazonaws.com

  - Set the REDIS_HOST environment variable in `~/.profile`. The endpoint can be found in the Elasticache dashboard in AWS Console.

        export REDIS_HOST=fish.2lh6ar.ng.0001.usw2.cache.amazonaws.com

  - Go to the IP address in browser using http protocol and verify Nginx welcome page.
  - Configure Nginx.

        sudo vim /etc/nginx/conf.d/my-app.conf

  - Insert the following configuration.

        server {  
            listen 80;  
            server_name SSH_HOSTMACHINE;
            
            location / {  
                proxy_pass http://127.0.0.1:3000/;
            }  
        }

  - Restart Nginx.

        sudo service nginx restart

## Deployment Options

Choose one of two deployment options:

### Option 1: SSH Agent Forwarding

- On local machine:
  - Edit ssh config.

        vim ~/.ssh/config

  - Insert the following.

        Host [SSH_HOSTMACHINE]
              ForwardAgent yes

  - Run ssh-add.

        ssh-add

  - SSH into server.

        ssh -i key.pem ubuntu@[SSH_HOSTMACHINE]

- On the server:
  - Verify connection to GitHub.

        ssh -T git@github.com

### Option 2: Deploy Key

- On the server:
  - Run the ssh-keygen procedure.

        ssh-keygen

  - Copy the public key.

        cat ~/.ssh/id_rsa.pub

- On GitHub:
  - Go to the repo Settings > Deploy keys > Add deploy key
  - Paste the public key and click Add key.

## Deployment

- On local machine:
  - Run pm2 setup.

        pm2 deploy production setup

  - Run deployment.

        pm2 deploy production

## Set up domain

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

## Set up SSL

- Go to [certbot.eff.org](https://certbot.eff.org).
- Select Nginx as the Software and Ubuntu as the System.
- Follow the instructions. Below is a condensed version of the commands:

      sudo snap install core; sudo snap refresh core
      sudo apt-get remove certbot
      sudo snap install --classic certbot
      sudo ln -s /snap/bin/certbot /usr/bin/certbot
      sudo certbot --nginx

## References

- https://youtu.be/IwWQG6lEdQQ
- https://docs.github.com/en/developers/overview/managing-deploy-keys
- https://pm2.keymetrics.io/docs/usage/deployment/