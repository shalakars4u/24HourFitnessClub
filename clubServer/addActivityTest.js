const rp = require('request-promise-native');
const verbose=false;
let cookieJar = rp.jar(); // Use this to store cookies in between sessions.

let adminLogin = {url: 'http://127.0.0.11:1711/login',
                    method: "POST",
                    json: true,
                    body: {"email": "tirrivees1820@outlook.com",
					"password": "49OqspUq"
					},
					jar: cookieJar
};

let memberLogin = {url: 'http://127.0.0.11:1711/login',
                    method: "POST",
                    json: true,
                    body: {"email": "chihuahua1899@gmail.com",
					"password": "'E`Gj3iJ"
					},
					jar: cookieJar
};
let firstGoodInfo = {url: 'http://127.0.0.11:1711/activities',
                    method: "POST",
                    json: true,
                    body: {name: "zumba", dates:["saturday", "sunday"]},
					resolveWithFullResponse : false,
					jar: cookieJar
};
let getInfo = {uri: 'http://127.0.0.11:1711/activities',
                    method: "GET",
					json:true,
					resolveWithFullResponse : false,
					jar: cookieJar
};

let badInfo = {uri: 'http://127.0.0.11:1711/activities',
                    method: "POST",
                    json: true,
                    body: {name: "mentorship", dates:["monday","tuesday","wednesday","thursday","friday","satuday","sunday"]},
					resolveWithFullResponse : false,
					jar: cookieJar

};
let anotherGoodInfo = {uri: 'http://127.0.0.11:1711/activities',
                    method: "POST",
                    json: true,
                    body: {name: "aerobics", dates:["friday","saturday", "sunday"]},
					resolveWithFullResponse : false,
					jar: cookieJar
};
let logout = {
    url: 'http://127.0.0.11:1711/logout',
    json: true,
    method: "GET",
	jar: cookieJar
    
};

function displayActivities(record){
	
	console.log(`Currently ${record.length} activities`);
	if(!verbose){
		return;
	}
	record.forEach(function(act,i) {
		
		console.log(`Activity ${i+1} name : ${act.name},dates : ${act.dates}`);
	});
	
}

async function addActivityTests() {
	try {
		 console.log("Add Activity Test 1: Admin Login");
		 let res1 = await rp(adminLogin);
		 console.log(` Admin Login,Cookies: ${cookieJar.getCookieString(adminLogin.url)}`);
		  let res2 = await rp(getInfo);
		console.log(`Number of activities :${res2.length}`);
		 let res3 = await rp(firstGoodInfo);
		console.log(`After add number of activities :${res3.length}`);
		console.log(`After add,Cookies :${cookieJar.getCookieString(firstGoodInfo.url)} `);
		 let res4= await rp(logout);
		 console.log(`After logout,Cookies :${cookieJar.getCookieString(logout.url)} `);
	}
	catch (e) {
        console.log(`Error: ${e}\n`);
    }
	
	try {
		 console.log("Add Activity Test 2: Member Login");
		 let res5 = await rp(memberLogin);
		 console.log(` Member Login,Cookies: ${cookieJar.getCookieString(memberLogin.url)}`);
		  let res6 = await rp(getInfo);
		console.log(`Number of activities :${res6.length}`);
		 let res7 = await rp(firstGoodInfo);
		 	 
	}
	catch (e) {
		
       console.log(`Member add activity error: ${e}\n`);
	    let res8 = await rp(getInfo);
		console.log(`Number of activities :${res8.length}`);
		console.log(`After login test 2,Cookies :${cookieJar.getCookieString(firstGoodInfo.url)} `);
		let res9 = await rp(logout);
		console.log(`After logout,Cookies :${cookieJar.getCookieString(logout.url)} `);
    }
	

	try {
		 console.log("Add Activity Test 3: Guest");
		 let res9 = await rp(getInfo);
		console.log(`Number of activities :${res9.length}`);
		 let res10 = await rp(firstGoodInfo); 
	}
	catch (e) {
	 console.log(` Bad Password login Error: ${e}\n`);
	 console.log(`After Activity test 3,Cookies :${cookieJar.getCookieString(firstGoodInfo.url)} `);
    }
	
}

   
    
addActivityTests();

/*
	rp(getInfo).then( function (res) {
	console.log("Initial Get of activities");
	displayActivities(res);
	return rp(firstGoodInfo);
	}).then(function (res) {
	console.log("After First Good Activity Post");
	displayActivities(res);
	return rp(badInfo);
	}).catch( function(e) {
		console.log("After First Bad Activity Post");
		console.log("Error : "+e );
		return rp(anotherGoodInfo);
	}).then(function(res) {
	console.log("After Another Good Activity Post");
	displayActivities(res);
	});

*/



