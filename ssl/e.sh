#!/bin/bash

#sudo apt update -y && sudo apt install letsencrypt -y
sudo letsencrypt certonly --standalone -d grnbit.io
