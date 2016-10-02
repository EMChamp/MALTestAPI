#!/bin/bash
echo "Installing redis server composer and nodejs"
sudo apt-get install -y nodejs redis-server

echo "Installing atarashii api dependencies"
sudo apt-get install -y php5-common php5-curl php5-cli php5 curl npm

echo "Installing npm packages for nodejs server"
npm install
npm install -g nodemon

#needed for nodemon, it tries to call node
ln -s /usr/bin/nodejs /usr/bin/node

echo "Install composer"
curl -sS https://getcomposer.org/installer | sudo php -- --install-dir=/usr/local/bin --filename=composer
cd ./atarashii-api/
composer install
