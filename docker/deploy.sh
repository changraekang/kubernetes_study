#!/bin/sh

#kubectl delete -f deploy-web-prod.yaml -n prod-web
#kubectl apply  -f deploy-web-prod.yaml -n prod-web
#kubectl autoscale deployment web --cpu-percent=50 --min=2 --max=10 -n prod-web
#kubectl rollout  restart deployment web -n prod-web

kubectl rollout  restart deployment ledger -n prod-ledger