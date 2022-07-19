#!/bin/sh

git config --add --global credential.helper 'cache --timeout=864000'

git config --global user.name "changraekang"
git config --global user.email storkcr@gmail.com
git config --global core.editor vim
git config --global pull.ff only