const rp = require('request-promise-native');
let applicantTest1 = {url: 'http://127.0.0.11:1711/applicants',
                    method: "POST",
                    json: true,
					resolveWithFullResponse : false,
                    body: {"firstName":"Deepak",
							"lastName":"Shetty",
							"email":"deepakshetty4u@gmail.com",
							"password":"Stocks@13mark",
							"level":"Beginner",
						    "comments":"valid input"
					},
};

let applicantTest2 = {url: 'http://127.0.0.11:1711/applicants',
                    method: "POST",
                    json: true,
					resolveWithFullResponse : false,
                    body: {"firstName":"Disha",
							"lastName":"Gupta",
							"email":"dishagupta@gmail.com",
							"password":"dance@stud9",
							"level":"Intermediate",
							"comments":"valid input"     
						}
};

let applicantTest3 = {url: 'http://127.0.0.11:1711/applicants',
                    method: "POST",
                    json: true,
					resolveWithFullResponse : false,
                    body: {"firstName":"Chavi",
							"lastName":"Gupta",
							"email":"dishagupta@gmail.com",
							"password":"dance@stud9",
							"level":"123",
							"comments":"Level should be in String and the one defined in enum"     
						}
};


let applicantTest4 = {url: 'http://127.0.0.11:1711/applicants',
                    method: "POST",
                    json: true,
					resolveWithFullResponse : false,
                    body: {"firstName":"Disha",
						"lastName":"Gupta",
						 "email":"dishagupta@gmail.com",
						"password":"dance@",
						"level":"Beginner",
						"comments":"Password minimum length should be 8"     
					}
};


async function applicantTests() {
	try {
		 console.log("Applicant Test 1: Good #1");
		 let res1 = await rp(applicantTest1);
		 console.log(`Application result: ${JSON.stringify(res1)}`);	 
	}
	catch (e) {
       console.log(`error :${e}`); 
    }
	try {
		 console.log("Applicant Test 2: Good #2");
		 let res2 = await rp(applicantTest2);
		 console.log(`Application result: ${JSON.stringify(res2)}`);	 
	}
	catch (e) {
       console.log(`error :${e}`); 
    }
	try {
		 console.log("Applicant Test 3: Bad #1");
		 let res3 = await rp(applicantTest3);
		 console.log(`Application result: ${JSON.stringify(res3)}`);	 
	}
	catch (e) {
       console.log(`error :${e}`); 
    }
	try {
		 console.log("Applicant Test 4: bad #2");
		 let res4 = await rp(applicantTest4);
		 console.log(`Application result: ${JSON.stringify(res4)}`); 
	}
	catch (e) {
       console.log(`error :${e}`); 
    }

} 
applicantTests();
