#!/bin/bash
echo "Installing redis server composer and nodejs"
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install -y nodejs redis-server

echo "Installing npm packages for nodejs server"
sudo npm install
sudo npm install -g nodemon

#needed for nodemon, it tries to call node
sudo ln -s /usr/bin/nodejs /usr/bin/node
