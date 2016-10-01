#!/bin/bash

if $(redis-server &>/dev/null &); then
	echo "redis server started"
else
	echo "redis-server failed to start. Run sudo apt-get install -y redis-server to install"
fi

