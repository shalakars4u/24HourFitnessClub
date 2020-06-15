const fs = require('fs');
const bcrypt = require('bcryptjs');
const users = require('./clubUsers2.json');
let nRounds = 12;
let hashedUsers = [];
let start = new Date(); // timing code
console.log(`Starting password hashing with nRounds = ${nRounds}, ${start}`);
// Your code here to process the passwords
users.map(function (u) {
	
let salt = bcrypt.genSaltSync(nRounds); // New salt everytime!
let passHashVal = bcrypt.hashSync(u.password, salt);
let hashVal ={firstName:u.firstName,lastName:u.lastName,email:u.email,passHash:passHashVal,role:u.role};
return hashedUsers.push(hashVal);
});


let elapsed = new Date() - start; // timing code
console.log(`Finished password hashing, ${elapsed/1000} seconds.`);
fs.writeFileSync("clubUsersHash.json", JSON.stringify(hashedUsers, null, 2));