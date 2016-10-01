# MALTestAPI

This is a test API that extends the official MAL API. The intention is to use this for future projects.


##Depedencies:
...*nodejs
...*redis-server
...*atarashii-api
...*php5-curl

##How to run:
Install necessary dependencies and then run the following commands.
...$ redis-server
...$ node server.js
...$ php <location of atarashii-api>/app/console server:run

##API endpoints:
.../api - Index page
.../api/userlist - Return a userlist, takes 'user' as a parameter which corresponds to a MAL username.

