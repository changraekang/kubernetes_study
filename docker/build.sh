#!/bin/bash



docker build -f ./Docker.web-test -t test-bitvleo:latest ..

docker tag test-bitvleo:latest 644421735833.dkr.ecr.ap-northeast-1.amazonaws.com/test-bitvleo:latest
aws ecr get-login-password --region ap-northeast-1 | docker login --username AWS --password-stdin 644421735833.dkr.ecr.ap-northeast-1.amazonaws.com

docker push 644421735833.dkr.ecr.ap-northeast-1.amazonaws.com/test-bitvleo:latest
