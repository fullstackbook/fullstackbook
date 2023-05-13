# How To Set Up CircleCI Pipeline To Deploy Express To Amazon EKS

- YouTube: https://youtu.be/4NUrGJXt1cw
- GitHub: git@github.com:travisluong/fullstackbook-express-eks.git

## Prerequisite

- [How To Deploy Express With Amazon EKS](./how-to-deploy-express-with-amazon-eks.md)

## Set Up Environment Variables

- In the AWS Console:
    - Create AWS Access Key ID and AWS Secret Access Key in the AWS Console for CircleCI.

- In CircleCI:
    - Go to Project Settings.
    - Go to Environment Variables.
    - Add the following environment variables:
        - AWS_ACCESS_KEY_ID
        - AWS_SECRET_ACCESS_KEY
        - AWS_DEFAULT_REGION

## Create CircleCI Config

- Go to Projects.
- Click on Set Up Projects.
- Click on Fast.
- Select Node (Advanced).
- Change the configuration to the following:

```yml
version: 2.1

orbs:
  node: circleci/node@4.7

jobs:
  build-and-test:
    docker:
      - image: cimg/node:16.10
    steps:
      - checkout
      - node/install-packages:
          pkg-manager: npm
      - run:
          name: Run tests
          command: npm test
  deploy_to_production:
    docker:
      - image: cimg/python:3.10.2
    steps:
      - checkout
      - setup_remote_docker:
          docker_layer_caching: false
      - run:
          name: Deploy to EKS
          command: |
              curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
              chmod +x ./kubectl
              pip3 install awscli --upgrade
              aws --version
              aws ecr get-login-password --region us-east-2 | docker login --username AWS --password-stdin 207100238581.dkr.ecr.us-east-2.amazonaws.com
              aws eks update-kubeconfig --name my-cluster
              LATEST_SHA=$(git rev-parse HEAD)
              docker build -t express-eks:$LATEST_SHA .
              docker tag express-eks:$LATEST_SHA 207100238581.dkr.ecr.us-east-2.amazonaws.com/express-eks:$LATEST_SHA
              docker push 207100238581.dkr.ecr.us-east-2.amazonaws.com/express-eks:$LATEST_SHA
              ./kubectl set image deployment/myapp myapp=207100238581.dkr.ecr.us-east-2.amazonaws.com/express-eks:$LATEST_SHA -n default              


workflows:
  sample:
    jobs:
      - build-and-test
      - deploy_to_production:
          requires:
            - build-and-test

```

- Make sure to replace the region, image url, and deployment name.
- Click Commit and Run.

## Next Steps

- Read about CircleCI workflows and branch level job execution to set up deployments to staging and production.

## Reference

- https://docs.aws.amazon.com/eks/latest/userguide/install-aws-iam-authenticator.html
- https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-envvars.html
- https://circleci.com/docs/config-intro/
- https://circleci.com/docs/workflows/#branch-level-job-execution