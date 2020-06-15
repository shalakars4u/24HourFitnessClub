const rp = require('request-promise-native');
let site= {uri :'http://127.0.0.11:1711/activities',
           method : 'GET',
		   json :true,
		   resolveWithFullResponse : false
};
rp(site).then(function(res){
	res.forEach( function(act ,i){
		console.log(`Activity ${i+1} name : ${act.name},dates : ${act.dates} id : ${act._id}`);
	})
}).catch (function (e) {
	console.log(`Error : ${e}`);
	
});