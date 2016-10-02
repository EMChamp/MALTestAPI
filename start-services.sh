#!/bin/bash


#start redis database
if $(redis-server &>/dev/null &); then
	echo "redis server started"
else
	echo "redis-server failed to start. Run sudo apt-get install -y redis-server to install"
fi

#start nodejs server
if $(nodemon --ignore ./atarashii-api/ server.js &>/dev/null &); then
	echo "nodejs server started on port 3000 via iptables. Go to https://localhost:3000/"
else
	echo "nodejs server failed to start."
fi

cd ./atarashii-api
#atarashii-api server
if $(php app/console server:run &>/dev/null &); then
	echo "atarashii api started"
else
	echo "atarashii api failed to start."
fi
