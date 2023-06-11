# Kubernetes Requests And Limits

Kubernetes is a popular container orchestration tool that allows developers to deploy, manage, and scale their applications. One of the key features of Kubernetes is the ability to specify resource requests and limits for containers running in a cluster.

Resource requests are the amount of resources a container needs to run. When a container is created, Kubernetes reserves these resources for it so that they are available when the container needs them. These resources include CPU and memory, as well as other types of resources like network bandwidth or disk space.

Resource limits, on the other hand, specify the maximum amount of resources a container is allowed to use. This is important because containers that use too much CPU or memory can impact the performance of other containers running on the same node. By setting resource limits, Kubernetes can prevent containers from using more than their fair share of resources and ensure that the cluster runs smoothly.

When setting resource requests and limits, it is important to consider the requirements of your application and the resources available in your cluster. If you set requests or limits too high, you may not have enough resources available to run all of your containers. If you set them too low, your application may not have enough resources to run properly.

To set resource requests and limits for a container in Kubernetes, you can use the resources field in the container spec. Here is an example:

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: my-pod
spec:
  containers:
  - name: my-container
    image: my-image
    resources:
      requests:
        cpu: "100m"
        memory: "256Mi"
      limits:
        cpu: "200m"
        memory: "512Mi"
```

In this example, the container requests 100 milli CPUs and 256 megabytes of memory, and has a limit of 200 milli CPUs and 512 megabytes of memory.

Overall, setting resource requests and limits in Kubernetes is an important aspect of ensuring your applications run smoothly and efficiently in a cluster. By carefully managing your resources, you can ensure that your applications are performant and available to your users.