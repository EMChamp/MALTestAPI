# MALTestAPI

This is a test API that extends the official MAL API. The intention is to use this for future projects.


Depedencies:
*nodejs
*redis-server

How to run:
Install necessary dependencies and then run the following commands.
$ redis-server
$ node server.js

API endpoints:
/api - Index page
/api/userlist - Return a userlist, takes 'user' as a parameter which corresponds to a MAL username.

