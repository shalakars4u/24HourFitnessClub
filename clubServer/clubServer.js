var express = require('express');
var app = express();
let fdata=require('./activities.json');
const users = require('./clubUsersHash.json');
const session = require('express-session');
const bcrypt = require('bcryptjs');
const SIZE_LIMIT='60b';
var cookieParser = require("cookie-parser"); // For cookies
app.use(cookieParser());
const Datastore = require('nedb-promises')
let db = Datastore.create('./activityDB')
const cookieName = "WZ7389Clubsid"; 

var Ajv = require('ajv');
var schema=require('./schema.json');


app.use(session({
	secret: 'Club Server Development',
	resave: false,
	saveUninitialized: false,
	name: cookieName 
}));

// This initializes session state
function setUpSessionMiddleware(req, res, next) {
console.log(`\nsession object: ${JSON.stringify(req.session)}`);
	console.log(`session id: ${req.session.id}`);
	if (!req.session.user) {
		req.session.user = {role: "guest"};
	};
	next();
};

app.use(setUpSessionMiddleware);

app.get('/activities', function (req, res, next) {
	db.find({}).then(function (activities) {
		res.json(activities);
	})
	.catch(function (err) {
		console.log(` Some type of err : ${err}`);
	})
    
});

// Use this middleware to restrict paths to only logged in users
function checkMemberMiddleware(req, res, next) {
	if (req.session.user.role === "member") {
		res.status(401).json({error: "Not permitted"});
	} else {
//		console.log(`\nSession info: ${JSON.stringify(req.session)} \n`);
		next();
	}
};

// User this middlewave to restrict paths only to admins
function checkAdminMiddleware(req, res, next) {
	if (req.session.user.role !== "admin") {
		res.status(401).json({error: "Not permitted"});;
	} else {
		next();
	}
};


function activityErrors(err, req, res, next) {
	res.status(413).send({error:true,message:"bad activity"});
	console.log("Had an error!!!!");
    console.log(JSON.stringify(err));
  return;
}

app.post('/activities',checkAdminMiddleware, express.json({limit:SIZE_LIMIT}), function(req,res) {
    console.log(`${JSON.stringify(req.body)}`);
	db.insert([req.body]).then(newDocs =>{
	console.log("Added " + newDocs.length + " activities");	
    return (db.find({}));
	})
	.then(function (activities) {
		res.json(activities);
	})
	.catch(function (err) {
		console.log(` Some type of err : ${err}`);
	})     
},activityErrors);

app.delete('/activities/:id', express.json(), function(req,res) {
	let index=req.params.id;
	console.log(`Trying to delete activity : ${index}`);
	db.remove({_id:index}).then(numRemoved => {	
		console.log("removed " + numRemoved);
		 return (db.find({}));
	})
	.then(function (activities) {
		res.json(activities);
	})
	.catch(function (err){
		res.status(404).send({error:true,message:" Not Found"});
		console.log(` Some type of err : ${err}`);
	})
})

app.post('/login', express.json(), function(req,res) {
	let email = req.body.email;
	let password = req.body.password;
	let newUserInfo=null;
    let auser = users.find(function (user) {
		return user.email === email;
	});
	if (!auser) {// Not found
		res.status(401).json({error: true, message: "User/Password error"});
		return;
	}
	let verified = bcrypt.compareSync(password, auser.passHash);
	if (verified) {
		let oldInfo = req.session.user;
		req.session.regenerate(function (err) {
			if (err) {
				console.log(err);
			}
			let newUserInfo = Object.assign(oldInfo, auser);
			delete newUserInfo.passHash;
			req.session.user = newUserInfo;
			res.json(newUserInfo);


		});
		//newUserInfo={firstName:auser.firstName,lastName:auser.lastName,email:auser.email,role:auser.role};
	}
	 else {
		res.status(401).json({error: true, message: "User/Password error"});
	}
});


app.get('/logout', function (req, res) {
	let options = req.session.cookie;
	req.session.destroy(function (err) {
		if (err) {
			console.log(err);
		}
		res.clearCookie(cookieName, options); // the cookie name and options
		res.json({message: "Goodbye"});
	})
});


app.get('/users',checkAdminMiddleware, express.json(),function (req, res, next) {
	let newUserInfo=JSON.parse(JSON.stringify(users));
	newUserInfo.map(function (user) {
	delete user.passHash;
	});

    res.json(newUserInfo);

});

app.post('/applicants', express.json(),function (req, res, next) {
	var ajv = new Ajv();
    var valid = ajv.validate(schema,req.body);
   if(valid) {
   res.json({message:"received your application"});
   }
   else {
	   res.json({error:true,message:ajv.errors}); 
   }
});

port = 1711; 
host = '127.0.0.11'; 
app.listen(port,host, function () {
    console.log(`ClubServer listening on IPV4: ${host}:${port}`);
});

	