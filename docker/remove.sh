#!/bin/bash
#docker rmi --force $(docker images --filter "dangling=true" -q --no-trunc)
docker rmi --force $(docker images)
