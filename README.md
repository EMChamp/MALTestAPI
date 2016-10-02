# MALTestAPI

This is a test API that extends the official MAL API. The intention is to use this for future projects.


##Depedencies:
*nodejs
*redis-server
*atarashii-api
*php5-curl
*Must be running Ubuntu (for apt-get package manager).
##How to run:
Install necessary dependencies:
./setup-services.sh

Launch Services:
./startup-services.sh

##API endpoints:
/api - Index page
/api/userlist - Return a userlist, takes 'user' as a parameter which corresponds to a MAL username.

