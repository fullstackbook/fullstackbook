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

      docker build -t hello .

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

      kubectl apply k8s.yaml

- Confirm pods.

      kubectl get pod

- Open shell into pod.

      kubectl exec -it myapp-7487b94844-wvfmn -- bash

  Note: Replace the pod name with result from previous command.

- Confirm load balancer.

      kubectl get svc

- Confirm load balancer domain.

      nslookup af220a880523a491a991ecc793ae1da2-125775810.us-west-2.elb.amazonaws.com

  Note: This might take a few minutes.

- Confirm response from app.

      curl af220a880523a491a991ecc793ae1da2-125775810.us-west-2.elb.amazonaws.com

## Set up AWS Load Balancer Controller

- Go to https://docs.aws.amazon.com/eks/latest/userguide/aws-load-balancer-controller.html and follow installation instructions.

- Get arn account number by running command:

      aws sts get-caller-identity

  This is needed for creating the iamserviceaccount.

- Here is a condensed version of the instructions:
  ```
  curl -o iam_policy.json https://raw.githubusercontent.com/kubernetes-sigs/aws-load-balancer-controller/v2.4.4/docs/install/iam_policy.json

  aws iam create-policy \
      --policy-name AWSLoadBalancerControllerIAMPolicy \
      --policy-document file://iam_policy.json

  eksctl create iamserviceaccount \
    --cluster=my-cluster \
    --namespace=kube-system \
    --name=aws-load-balancer-controller \
    --role-name "AmazonEKSLoadBalancerControllerRole" \
    --attach-policy-arn=arn:aws:iam::111122223333:policy/AWSLoadBalancerControllerIAMPolicy \
    --approve

  kubectl apply \
      --validate=false \
      -f https://github.com/jetstack/cert-manager/releases/download/v1.5.4/cert-manager.yaml

  curl -Lo v2_4_4_full.yaml https://github.com/kubernetes-sigs/aws-load-balancer-controller/releases/download/v2.4.4/v2_4_4_full.yaml

  sed -i.bak -e '480,488d' ./v2_4_4_full.yaml

  sed -i.bak -e 's|your-cluster-name|my-cluster|' ./v2_4_4_full.yaml

  kubectl apply -f v2_4_4_full.yaml

  curl -Lo v2_4_4_ingclass.yaml https://github.com/kubernetes-sigs/aws-load-balancer-controller/releases/download/v2.4.4/v2_4_4_ingclass.yaml

  kubectl apply -f v2_4_4_ingclass.yaml

  kubectl get deployment -n kube-system aws-load-balancer-controller
  ```

## Set up Ingress

- Go to https://raw.githubusercontent.com/kubernetes-sigs/aws-load-balancer-controller/v2.4.4/docs/examples/2048/2048_full.yaml. Note the Ingress section.

- Copy the ingress configuration and change the configuration to point to myapp. `ingress.yaml`
  ```yaml
  apiVersion: networking.k8s.io/v1
  kind: Ingress
  metadata:
    namespace: default
    name: my-ingress
    annotations:
      alb.ingress.kubernetes.io/scheme: internet-facing
      alb.ingress.kubernetes.io/target-type: ip
  spec:
    ingressClassName: alb
    rules:
      - http:
          paths:
            - path: /
              pathType: Prefix
              backend:
                service:
                  name: myapp
                  port:
                    number: 80
  ```

- Apply the ingress.

      kubectl apply -f ingress.yaml

## Delete cluster

- Delete the cluster avoid large AWS bill.

      eksctl delete cluster --name my-cluster

## References

- https://docs.aws.amazon.com/eks/index.html
- https://docs.aws.amazon.com/ecr/index.html
- https://docs.aws.amazon.com/eks/latest/userguide/alb-ingress.html
- https://docs.aws.amazon.com/eks/latest/userguide/aws-load-balancer-controller.html
- https://kubernetes.io/docs/concepts/services-networking/ingress/
- https://youtu.be/PH-Mcd0Rs1w