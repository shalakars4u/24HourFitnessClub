const rp = require('request-promise-native');
let cookieJar = rp.jar(); // Use this to store cookies in between sessions.

let adminLogin = {url: 'http://127.0.0.11:1711/login',
                    method: "POST",
                    json: true,
                    body: {"email": "tirrivees1820@outlook.com",
					"password": "49OqspUq"
					},
					resolveWithFullResponse : false,
					jar: cookieJar
};

let memberLogin = {url: 'http://127.0.0.11:1711/login',
                    method: "POST",
                    json: true,
                    body: {"email": "chihuahua1899@gmail.com",
					"password": "'E`Gj3iJ"
					},
					resolveWithFullResponse : false,
					jar: cookieJar
};
let getInfo = {url: 'http://127.0.0.11:1711/users',
                    method: "GET",
					json:true,
					resolveWithFullResponse : false,
					jar: cookieJar
};

let logout = {
    url: 'http://127.0.0.11:1711/logout',
    json: true,
    method: "GET",
	resolveWithFullResponse : false,
	jar: cookieJar
    
};

async function getUserTests() {
	try {
		 console.log("Get User Test 1: Admin Login");
		 let res1 = await rp(adminLogin);
		 console.log(` Admin Login,Cookies: ${cookieJar.getCookieString(adminLogin.url)}`);
		 let res2 = await rp(getInfo);
		console.log(`Number of users :${res2.length}`);
		let res3 = await rp(logout);
		console.log(`After logout,Cookies :${cookieJar.getCookieString(logout.url)} `);
	}
	catch (e) {
        console.log(`Error: ${e}\n`);
    }
	try {
		 console.log("Get User Test 2 : Member Login");
		 let res4 = await rp(memberLogin);
		console.log(` Member Login,Cookies: ${cookieJar.getCookieString(memberLogin.url)}`);
		let res5 = await rp(getInfo);		 
	}
	catch (e) {
		 console.log(`Member get user error: ${e}\n`);
		 let res6 = await rp(logout);
		 console.log(`After logout,Cookies :${cookieJar.getCookieString(logout.url)} `);
    }
	try {
		 console.log("Get User Test 3 :Guest");
		 let res7 = await rp(getInfo);
	}
	catch (e) {
         console.log(`Guest Get Users error: ${e}\n`);
		 console.log(`Get Users test 3,Cookies :${cookieJar.getCookieString(getInfo.url)} `);
    }
	
}
getUserTests();





