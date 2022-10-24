# How To Set Up AWS Load Balancer Controller

## Set Up AWS Load Balancer Controller

- Go to https://docs.aws.amazon.com/eks/latest/userguide/aws-load-balancer-controller.html and follow installation instructions.

- Get arn account number by running command:

      aws sts get-caller-identity

  This is needed for creating the iamserviceaccount.

- Here is a condensed version of the instructions:
  - Create IAM OIDC provider for cluster.

    ```
    oidc_id=$(aws eks describe-cluster --name my-cluster --query "cluster.identity.oidc.issuer" --output text | cut -d '/' -f 5)

    aws iam list-open-id-connect-providers | grep $oidc_id

    eksctl utils associate-iam-oidc-provider --cluster my-cluster --approve
    ```

  -  Set up Load Balancer. Note: Replace the arn account number and cluster name where applicable.
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
    ```

  - Verify controller is installed.

        kubectl get deployment -n kube-system aws-load-balancer-controller

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

- Confirm load balancer. This may take a few minutes.

      kubectl get ingress

## References

- https://docs.aws.amazon.com/eks/latest/userguide/alb-ingress.html
- https://docs.aws.amazon.com/eks/latest/userguide/aws-load-balancer-controller.html
- https://kubernetes.io/docs/concepts/services-networking/ingress/