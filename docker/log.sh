#!/bin/sh


kubectl get events --sort-by='.lastTimestamp' -n test-bitvelo
