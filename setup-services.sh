#!/bin/bash
echo "Installing redis server and nodejs"
sudo apt-get install -y nodejs redis-server


echo "Installing npm packages for nodejs server"
npm install

echo "Installing atarashii api dependencies"
sudo apt-get install -y php5-common php5-curl php5-cli
