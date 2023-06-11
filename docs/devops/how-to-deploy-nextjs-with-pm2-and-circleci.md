---
slug: how-to-deploy-nextjs-with-pm2-and-circleci
title: How To Deploy Next.js With PM2 And CircleCI
---

# How To Deploy Next.js with PM2 and CircleCI

- GitHub: https://github.com/travisluong/fullstackbook-nextjs-pm2-circleci
- YouTube: https://youtu.be/NveYyDT7UWk

## Prerequisite

[How to Deploy Next.js with PM2](./how-to-deploy-nextjs-with-pm2.md)

## Set up Circle CI Config

- Objective: Get a build passing on CircleCI.
- Go to CircleCI.
- Log in with GitHub.
- Authorize CircleCI.
- Go to Projects.
- Click `Set Up Project` on your project.
- Click on `Fast`.
- Click on `Set Up Project`.
- Select `Node (Advanced)`.
- Click `Commit and Run`.
- The test should fail.
- Check out the `circleci-project-setup` branch locally.
- Add `"test": "exit 0"` to the `scripts` in `package.json`. This is just to get the tests to pass. Real tests can be added later.
- Go back to the project in CircleCI. The build should be passing.
- The config file should like like this:

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

workflows:
  sample:
    jobs:
      - build-and-test

```

## Deploy to EC2 Instance

- Objective: Successful build should trigger a deployment.
- Base64 encode the key.pem.

    ```
    cat key.pem | base64 | clip
    ```

- In CircleCI, go to Project Settings.
- Go to Environment Variables.
- Click `Add Environment Variable`.
- Name the variable `KEY_PEM`.
- Paste in the base64 encoded key as the value.
- Change `config.yml` to look like this:

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
      - image: cimg/node:16.10
    steps:
      - checkout
      - node/install-packages:
          pkg-manager: npm
      - run:
          name: Create key.pem
          command: |
              echo $KEY_PEM | base64 -d -i > key.pem
              chmod 400 key.pem
      - run:
          name: Add to known hosts
          command: ssh-keyscan -H 54.200.60.31 >> ~/.ssh/known_hosts
      - run:
          name: Install pm2
          command: sudo npm i -g pm2
      - run:
          name: Deploy to EC2
          command: pm2 deploy production

workflows:
  sample:
    jobs:
      - build-and-test
      - deploy_to_production:
          requires:
              - build-and-test

```
- Create a key.pem from the environment variable, add host to known hosts, install pm2, and deploy.
- Job added to the workflow.
- Push to git with `git add .` and `git commit -m "update circleci config"` and `git push`.
- Verify that the build has succeeded and deployed to production.

## Branch level job execution

- Objective: Merges into staging should trigger a deployment to staging. Merges into main should trigger a deployment to production.
- Change `ecosystem.config.js` to look like this:

```js
module.exports = {
  apps: [
    {
      script: "npm start",
    },
  ],

  deploy: {
    production: {
      key: "key.pem",
      user: "ubuntu",
      host: "54.200.60.31",
      ref: "origin/main",
      repo: "git@github.com:travisluong/fullstackbook-nextjs-pm2.git",
      path: "/home/ubuntu",
      "pre-deploy-local": "",
      "post-deploy":
        "source ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production",
      "pre-setup": "",
      ssh_options: "ForwardAgent=yes",
    },
    staging: {
      key: "key.pem",
      user: "ubuntu",
      host: "54.200.60.31",
      ref: "origin/staging",
      repo: "git@github.com:travisluong/fullstackbook-nextjs-pm2.git",
      path: "/home/ubuntu",
      "pre-deploy-local": "",
      "post-deploy":
        "source ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env staging",
      "pre-setup": "",
      ssh_options: "ForwardAgent=yes",
    },
  },
};

```

- Staging deployment added.
- Change `config.yml` to look like this:

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
      - image: cimg/node:16.10
    steps:
      - checkout
      - node/install-packages:
          pkg-manager: npm
      - run:
          name: Create key.pem
          command: |
              echo $KEY_PEM | base64 -d -i > key.pem
              chmod 400 key.pem
      - run:
          name: Add to known hosts
          command: ssh-keyscan -H 54.200.60.31 >> ~/.ssh/known_hosts
      - run:
          name: Install pm2
          command: sudo npm i -g pm2
      - run:
          name: Deploy to EC2
          command: pm2 deploy production
  deploy_to_staging:
    docker:
      - image: cimg/node:16.10
    steps:
      - checkout
      - node/install-packages:
          pkg-manager: npm
      - run:
          name: Create key.pem
          command: |
              echo $KEY_PEM | base64 -d -i > key.pem
              chmod 400 key.pem
      - run:
          name: Add to known hosts
          command: ssh-keyscan -H 54.200.60.31 >> ~/.ssh/known_hosts
      - run:
          name: Install pm2
          command: sudo npm i -g pm2
      - run:
          name: Deploy to EC2
          command: pm2 deploy staging
workflows:
  build:
    jobs:
      - build-and-test:
          filters:
            branches:
              ignore:
                - main
                - staging
  production:
    jobs:
      - build-and-test:
          filters: &filters-production
            branches:
              only: main
      - deploy_to_production:
          filters:
            <<: *filters-production
          requires:
              - build-and-test
  staging:
    jobs:
      - build-and-test:
          filters: &filters-staging
            branches:
              only: staging
      - deploy_to_staging:
          filters:
            <<: *filters-staging
          requires:
              - build-and-test

```

- `deploy_to_staging` job added.
- There are three workflows now.
    - `build` runs the `build_and_test` job for all branches except main and staging.
    - `production` runs the `build_and_test` job and the `deploy_to_production` job for only the `main` branch.
    - `staging` runs the `build_and_test` job and the `deploy_to_staging` job for only the `staging` branch.
- The `&filters-production` is a yaml anchor. It is a way of re-using the configuration. For example, the nested properties are re-used anywhere `<<: *filters-production` is used.

## Add manual approval

- Objective: Add a button to trigger a deployment, instead of automatically deploying.
- Change `config.yml` to look like this:

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
      - image: cimg/node:16.10
    steps:
      - checkout
      - node/install-packages:
          pkg-manager: npm
      - run:
          name: Create key.pem
          command: |
              echo $KEY_PEM | base64 -d -i > key.pem
              chmod 400 key.pem
      - run:
          name: Add to known hosts
          command: ssh-keyscan -H 54.200.60.31 >> ~/.ssh/known_hosts
      - run:
          name: Install pm2
          command: sudo npm i -g pm2
      - run:
          name: Deploy to EC2
          command: pm2 deploy production
  deploy_to_staging:
    docker:
      - image: cimg/node:16.10
    steps:
      - checkout
      - node/install-packages:
          pkg-manager: npm
      - run:
          name: Create key.pem
          command: |
              echo $KEY_PEM | base64 -d -i > key.pem
              chmod 400 key.pem
      - run:
          name: Add to known hosts
          command: ssh-keyscan -H 54.200.60.31 >> ~/.ssh/known_hosts
      - run:
          name: Install pm2
          command: sudo npm i -g pm2
      - run:
          name: Deploy to EC2
          command: pm2 deploy staging
workflows:
  build:
    jobs:
      - build-and-test:
          filters:
            branches:
              ignore:
                - main
                - staging
  production:
    jobs:
      - build-and-test:
          filters: &filters-production
            branches:
              only: main
      - hold_for_approval:
          type: approval
          requires:
              - build-and-test
      - deploy_to_production:
          filters:
            <<: *filters-production
          requires:
              - build-and-test
              - hold_for_approval
  staging:
    jobs:
      - build-and-test:
          filters: &filters-staging
            branches:
              only: staging
      - hold_for_approval:
          type: approval
          requires:
              - build-and-test
      - deploy_to_staging:
          filters:
            <<: *filters-staging
          requires:
              - build-and-test
              - hold_for_approval

```

- The `hold_for_approval` job was added in both the `production` and `staging` workflow.

## Reference

- https://circleci.com/docs/getting-started/
- https://circleci.com/docs/config-intro/
- https://circleci.com/docs/workflows/#branch-level-job-execution
- https://superuser.com/questions/421074/ssh-the-authenticity-of-host-host-cant-be-established