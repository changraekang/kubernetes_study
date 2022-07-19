#!/bin/sh

kubectl exec -it deployment.apps/web -n test-bitvelo -- /bin/bash
