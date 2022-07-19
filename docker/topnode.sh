#!/bin/bash

#kubectl get nodes -o yaml | egrep '\sname:|cpu:|memory:'

#kubectl apply -f https://github.com/kubernetes-sigs/metrics-server/releases/download/v0.6.1/components.yaml
#kubectl edit deployments.apps -n kube-system metrics-server
#- --kubelet-insecure-tls # 추가된 옵션
#- --kubelet-preferred-address-types=InternalIP # 추가된 옵션

while true
do
  sleep 1;
  kubectl top nodes;
  #kubectl top pod --all-namespaces 
done
