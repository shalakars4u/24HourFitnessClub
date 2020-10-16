# 24HourFitnessClub

A React web app which displays information about the activities organized in 
the 24HourFitnessClub.

This Multi user Web Application is built using React and express framework which
displays information about the activities organized in 24HourFitnessClub.
It implements bcryptjs, a hashing algorithm for user authentication and Express-session 
for session implementation. Used libraries like NeDB,a javascript database to handle
JSON data.Input validation is done with AJV(Another JavaScript Validator).
Server API’s unit testing  is done with Request-Promise-Native library. 

**To Launch this app one has to follow the below steps:**
1. Install Nodejs
2. Install git
3. Clone this repository into local file system.
4. Now to run the below command from the clubServer directory to get the server running from command line.
	* Command : node clubServer.js
	* Command : npm install express to install express.
5. To launch the react app run this command form ReactClub directory from the command line.
	* Command : node devProxy.js
	* Command : npm install -g parcel-bundler If warning like - Please, upgrade your dependencies to the actual version of core-js@3 displays execute the command below.
    * Command : npm install --save core-js@^3 Now install the parcel-bundler after upgrade and run devProxy.js.
Now launch the app with the Link: [URL for React APP](http://localhost:1234) from chrome or firefox.
Link to see the demo of the application :[Check Demo](https://drive.google.com/file/d/1QL_utWG9TPirr_yRqeJiinLVNefBVNdX/view?usp=sharing)
**Functionality:**
* Guest/member users can visit home,about,activities and login page.
* To Add/delete activities he/she can login with details from clubUsers2.json file. 
* Only admin can add/delete activities in the club website.

