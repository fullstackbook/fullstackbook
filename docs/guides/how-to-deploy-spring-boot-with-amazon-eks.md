# How To Deploy Spring Boot With Amazon EKS

- [How To Deploy Spring Boot With Amazon EKS](https://youtu.be/CU8fXHK8Smk)

## Prerequisites

- Follow the getting started guide and make sure the following are installed:
  - AWS CLI
  - kubectl
  - eksctl
- https://docs.aws.amazon.com/eks/latest/userguide/getting-started.html

## Initial Setup

- Set up Spring Boot.
  - Use Spring Initializr to generate a new project.
  - Select Spring Web as dependency.

- Create a Hello Controller `HelloController.java`.
    ```java
    package com.example.demo.controller;

    import org.springframework.web.bind.annotation.GetMapping;
    import org.springframework.web.bind.annotation.RestController;

    @RestController
    public class HelloController {
        @GetMapping("/")
        public String hello() {
            return "Hello World!";
        }
    }

    ```

- Create Dockerfile.
    ```Dockerfile
    FROM openjdk:17
    WORKDIR /usr/src/myapp
    COPY target/demo-0.0.1-SNAPSHOT.jar /usr/src/myapp
    CMD ["java", "-jar", "/usr/src/myapp/demo-0.0.1-SNAPSHOT.jar"]
    ```

- Create an executable jar.

      ./mvnw clean package

- Build image.

      docker build -t myapp .

- Run container.

      docker run -p 8080:8080 -it --rm --name my-running-app myapp

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
                containerPort: 8080
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
        targetPort: 8080
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
