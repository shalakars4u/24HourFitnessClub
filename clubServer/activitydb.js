const Datastore = require('nedb-promises')
let db = Datastore.create('./activityDB')

const activities = require('./activities.json');

db.insert(activities).then(newDocs => {
	console.log("Added " + newDocs.length + " activities");
})
.catch(function (err){
		console.log(` Some type of err : ${err}`);
});
