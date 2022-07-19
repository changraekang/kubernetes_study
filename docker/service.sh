#!/bin/sh

kubectl delete -f web-test-svc.yaml -n test-bitvelo
kubectl apply -f web-test-svc.yaml -n test-bitvelo
