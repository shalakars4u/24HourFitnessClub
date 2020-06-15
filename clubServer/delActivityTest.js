const rp = require('request-promise-native');
let deleteId=[];
let getInfo = {uri: 'http://127.0.0.11:1711/activities',
                    method: "GET",
					json:true,
					resolveWithFullResponse : false
};
 rp(getInfo).then(function(res){
	 res.map( function (result) {
		 deleteId.push(result._id);
		 return deleteId;
	 });
 }).then (function(res){
	 
let firstDeleteInfo = {uri: 'http://127.0.0.11:1711/activities/'+deleteId[0],
                    method: "DELETE",
					 json: true,
					resolveWithFullResponse : false
};
let badInfo = {uri: 'http://127.0.0.11:1711/activities/'+deleteId[1],
                    method: "DELETE",
					 json: true,
					resolveWithFullResponse : false
};
let anotherDeleteInfo = {uri: 'http://127.0.0.11:1711/activities/'+deleteId[2],
                    method: "DELETE",
					json: true,
					resolveWithFullResponse : false
}; 
	
    rp(getInfo).then(function(res){
	console.log("Initial Get of activities");
	console.log(`Currently ${res.length} activities`);
	return rp(firstDeleteInfo);
	}).then(function (res) {
	console.log("After First Good Activity Deletion");
	console.log(`Currently ${res.length} activities`);
	return rp(badInfo);
	})
    .catch(function(e) {
		console.log("After First Bad Activity Delete");
		console.log("Error : "+e );
		return rp(anotherDeleteInfo);
	})
	.then(function (res) {
	console.log("After Another Good Activity Delete");
	console.log(`Currently ${res.length} activities`);
	});
 });




