#!/bin/bash

if $(redis-server &>/dev/null &); then
	echo "redis server started"
else
	echo "redis-server failed to start. Run sudo apt-get install -y redis-server to install"
fi

if $(nodemon server.js &>/dev/null &); then
	echo "nodejs server started on port 80 via iptables"
else
	echo "nodejs server failed to start."
fi
