# How To Deploy Express With Amazon EKS

## Prerequisites

- Follow the getting started guide and make sure the following are installed:
  - AWS CLI
  - kubectl
  - eksctl
- https://docs.aws.amazon.com/eks/latest/userguide/getting-started.html

## Initial Setup

- Install Express.

    ```    
    npm init
    npm install express --save
    ```

- Create express app. `app.js`
    ```js
    const express = require('express')
    const app = express()
    const port = 3000

    app.get('/', (req, res) => {
      res.send('Hello World!')
    })

    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })
    ```

- Create Dockerfile.
    ```Dockerfile
    FROM node:16
    WORKDIR /usr/src/app
    COPY package.json ./
    RUN npm install
    COPY . .
    CMD [ "node", "app.js" ]
    ```
- Build image.

      docker build -t express-eks .

- Run container.

      docker run -p 3000:3000 -it --rm --name express-eks-run express-eks

## Elastic Container Registry (ECR) Setup

- Go to Amazon ECR.
- Create a repository.
- Click on "View push commands".
- Follow the instructions to push image.
- Copy the image url.

## Elastic Kubernetes Service (EKS) Setup

- Create EKS cluster.

      eksctl create cluster --name my-cluster --region us-west-2

- Confirm communication with cluster.

      kubectl get svc

- Create yaml configuration. `k8s.yaml`

  ```yaml
  apiVersion: apps/v1
  kind: Deployment
  metadata:
    name: myapp
  spec:
    selector:
      matchLabels:
        app: myapp
    template:
      metadata:
        labels:
          app: myapp
      spec:
        containers:
          - name: myapp
            image: 111111111111.dkr.ecr.us-east-2.amazonaws.com/myapp:latest
            resources:
              limits:
                memory: "128Mi"
                cpu: "500m"
            ports:
              - name: tcp
                containerPort: 3000
  ---
  apiVersion: v1
  kind: Service
  metadata:
    name: myapp
  spec:
    selector:
      app: myapp
    ports:
      - port: 80
        targetPort: 3000
    type: LoadBalancer
  ```

- Apply manifest.

      kubectl apply -f k8s.yaml

- Confirm pods.

      kubectl get pod

- Open shell into pod.

      kubectl exec -it myapp-7487b94844-wvfmn -- bash

- Confirm load balancer.

      kubectl get svc

- Confirm load balancer domain.

      nslookup af220a880523a491a991ecc793ae1da2-125775810.us-west-2.elb.amazonaws.com

  Note: This might take a few minutes.

- Confirm response from app.

      curl af220a880523a491a991ecc793ae1da2-125775810.us-west-2.elb.amazonaws.com

## Set up AWS Load Balancer Controller

For more complex traffic routing, see [how-to-set-up-aws-load-balancer-controller.md](./how-to-set-up-aws-load-balancer-controller.md).

## Delete cluster

- Delete the cluster avoid large AWS bill.

      eksctl delete cluster --name my-cluster

## References

- https://docs.aws.amazon.com/eks/index.html
- https://docs.aws.amazon.com/ecr/index.html