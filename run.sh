#!/bin/sh

cd ./backend
pm2 delete run-web
pm2 start server.js --time --name "run-web" --output ../log/run.log --error ../log/run-error.log


