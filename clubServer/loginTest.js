/* Testing the POST /club/add API */
const rp = require('request-promise-native');

 let cookieJar = rp.jar(); // Use this to store cookies in between sessions.

let printActivities = {
    url: 'http://127.0.0.11:1711/activities',
    json: true,
    method: "GET",
	jar: cookieJar
};

let goodEmailAndPassword = {
    url: 'http://127.0.0.11:1711/login',
    json: true,
    method: "POST",
    body: {
        "email": "tirrivees1820@outlook.com",
        "password": "49OqspUq"
    },
	jar: cookieJar
    
};

let badEmail = {
    url: 'http://127.0.0.11:1711/login',
    json: true,
    method: "POST",
    body: { 
        "email": "deepakshetty@gmail.com",
        "password": "R.r<E&xt"
    },
	jar: cookieJar
};

let goodEmailIncorrectPassword = {
    url: 'http://127.0.0.11:1711/login',
    json: true,
    method: "POST",
    body: { 
        "email": "chihuahua1899@gmail.com",
        "password": "nMSPs)5Vi"
    },
	jar: cookieJar
};

let logout = {
    url: 'http://127.0.0.11:1711/logout',
    json: true,
    method: "GET",
	jar: cookieJar
    
};

async function loginTests() {
	try {
		 console.log("Login Test 1: Good Login");
        let res1 = await rp(printActivities);
		console.log(` Called activities,Cookies: ${cookieJar.getCookieString(printActivities.url)}`);
		let res2 = await rp(goodEmailAndPassword);
		console.log("Good Login test result:", JSON.stringify(res2));
		console.log(`After good login, Cookies: ${cookieJar.getCookieString(goodEmailAndPassword.url)}`);
		 let res3= await rp(logout);
		 console.log(`After logout,Cookies :${cookieJar.getCookieString(logout.url)} `);
	}
	catch (e) {
        console.log(`Error: ${e}\n`);
    }
	
    try {
		 console.log("Login Test 2: Bad Email");
		 let res4 = await rp(printActivities);
		console.log(`called activities, Cookies: ${cookieJar.getCookieString(printActivities.url)}`);
		 let res5 = await rp(badEmail);
	}
	catch (e) {
        console.log(`Bad Email Login Error: ${e}\n`);
		console.log(`After Login Test 2, Cookies: ${cookieJar.getCookieString(badEmail.url)}`);
    }
    
    try {
		console.log("Login Test 3: Bad Password");
		let res6 = await rp(printActivities);
		console.log(`called activities, Cookies: ${cookieJar.getCookieString(printActivities.url)}`);
		let res7 = await rp(goodEmailIncorrectPassword);
	}
	 catch (e) {
        console.log(`Bad Password Login Error: ${e}\n`);
		console.log(`After Login test 3, Cookies:  ${cookieJar.getCookieString(goodEmailIncorrectPassword.url)}`);
    }
}

loginTests();