# Kubernetes Cheat Sheet

## Basics

```bash
# Get information about Kubernetes resources

kubectl get <resource>                       # Get a list of resources
kubectl describe <resource> <name>           # Show detailed information about a specific resource
kubectl logs <pod>                            # Print the logs for a container in a pod
kubectl top <resource>                        # Show resource usage

# Interact with Kubernetes resources

kubectl create -f <file.yaml>                 # Create a resource from a YAML file
kubectl apply -f <file.yaml>                  # Apply changes to a resource from a YAML file
kubectl delete <resource> <name>              # Delete a resource
kubectl edit <resource> <name>                # Edit a resource in real-time
kubectl exec <pod> <command>                  # Execute a command in a container of a pod
kubectl port-forward <pod> <local_port>:<remote_port>  # Forward a local port to a pod

# Troubleshooting Kubernetes resources

kubectl get events                            # Get events for a namespace
kubectl describe pod <pod>                    # Describe a pod's current state
kubectl logs <pod>                            # Print the logs for a container in a pod
kubectl exec <pod> --stdin --tty /bin/bash    # Start a shell in a container
kubectl rollout status <deployment>           # Get the status of a deployment rollout
kubectl rollout undo <deployment>             # Undo a deployment rollout

# Note: Replace <resource> and <name> with the actual resource and name you want to interact with. Also, replace <file.yaml>, <pod>, <command>, <local_port>, <remote_port>, and <deployment> with the appropriate values for your use case.

# Tailing the logs of a specific service
kubectl logs -f -l app=<service_name>    # Replace <service_name> with the name of the service you want to tail the logs for

# This command uses the -l flag to filter the pods by label, specifically by the app label. By default, this will tail the logs for all containers in all pods with the specified label. The -f flag is used to continuously stream the logs, similar to the tail -f command.
# Note: If you have multiple containers running in each pod, the logs for all containers will be interleaved in the output. You can filter the logs by container name by adding the --container flag followed by the name of the container you want to see logs for.



```


## Secret Management

```bash
# Create a new secret

kubectl create secret <type> <name> --from-literal=<key>=<value> # Create a new secret with a single key-value pair
kubectl create secret <type> <name> --from-file=<path>           # Create a new secret from a file
kubectl create secret <type> <name> --from-literal=<key1>=<value1> --from-literal=<key2>=<value2>  # Create a new secret with multiple key-value pairs

# View secrets

kubectl get secret                               # List all secrets in the current namespace
kubectl get secret <name>                        # Get details about a specific secret
kubectl describe secret <name>                    # Show detailed information about a specific secret

# Update a secret

kubectl edit secret <name>                        # Edit an existing secret in real-time
kubectl apply -f <file.yaml>                      # Apply changes to a secret from a YAML file

# Delete a secret

kubectl delete secret <name>                      # Delete a secret

# Base64 encode a string

echo -n 'my_secret_value' | base64                   # Output: bXlfc2VjcmV0X3ZhbHVl

# Create a new secret with a base64 encoded value

kubectl create secret generic <name> --from-literal=<key>=<base64_encoded_value> # Replace <base64_encoded_value> with the output of the 'echo' command above

# Base64 decode a string

echo -n 'bXlfc2VjcmV0X3ZhbHVl' | base64 --decode     # Output: my_secret_value

# View the base64 decoded value of a secret

kubectl get secret <name> -o jsonpath='{.data.<key>}' | base64 --decode  # Replace <key> with the key whose value you want to decode


# Note: Replace <type>, <name>, <key>, <value>, and <path> with the appropriate values for your use case. Also, keep in mind that secrets are base64 encoded in Kubernetes, so you'll need to encode any values you want to store in a secret before creating the secret.

```