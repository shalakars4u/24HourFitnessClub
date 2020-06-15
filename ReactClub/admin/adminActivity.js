import React from 'react';
import ReactDOM from 'react-dom';
class AdminActivities extends React.Component {
	constructor(props){
		super(props);
		this.state={activities:[]};
	}

	componentDidMount (){
		let that=this;
		fetch('/activities' , {
            method: 'GET',
            headers: {
                "Content-type": "application/json"
            }
        }).then (function(response) {
		if(response.ok) {
			return response.json();
		}
		else {
			let info=`Status code ${response.status}, ${response.statusText}`
			return Promise.reject(info);

	}})
		.then(function(activities){
          that.setState({activities:activities})
		  console.log(activities);
		})
		.catch(function (info) {
			console.log(info);
		});
		}
	addActivityHandler() {
		let that=this;
		fetch('/activities' , {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
			body : JSON.stringify({
                name: activityName.value,
				dates:activityDate.value.split(",")
			})
        }).then(response => response.json())
          .then(function(activities) {
			that.setState({activities:activities});
        }).catch(function (err) {
			console.log(err);
		});
		}

	delActivity(id) {
		let that=this;
		fetch('/activities/'+id , {
            method: 'DELETE',
            headers: {
                "Content-type": "application/json"
            }
        }).then(response => response.json())
          .then(function(activities) {
			that.setState({activities:activities});
        }).catch(function (err) {
			console.log(err);
		})
	}
	render(){
   let that = this;
   let mainContent=null;
   let footerContent=null;
   let allActivities=null;
   let tableContent=null;
   let addActivities=null;

addActivities=<details>
	<summary>Add Activity</summary>
	<section className="sectionStyle">
		<label>Name</label>
		<input type="text" id="activityName" name="activityName"/>
		<label>Date(s)</label>
		<input type="text" id="activityDate" name="activityDate"/>
		<button onClick={this.addActivityHandler.bind(this)} type="submit">Add</button>
	</section>
</details>;


   tableContent=this.state.activities.map(function(activity ,i){
	 return  <tr key={"activity"+i}>
	<td>
		<button  onClick={that.delActivity.bind(that,activity._id)}  type="submit"> Delete</button>
	</td>
	<td> {activity.name}</td>
	<td> {(activity.dates).join(",")}</td>
</tr>
		});
  allActivities=<section className="listOfActivities">
	<table>
		<thead>
			<tr>
				<td>    </td>
				<td>Event</td>
				<td>Dates</td>
			</tr>
		</thead>
		<tbody>
		{tableContent}
		</tbody>
	</table>
</section>;


mainContent=<main className="maindesign">
	<header>
		<h1>Activity Management</h1>
	</header>
	{addActivities}
	<h2> Activities </h2>
	{allActivities}
</main>;


footerContent=<footer className="footerStyle">
	<p>&#x1f60a; © 2020 Shalaka Shetty.  &#x1F30A;</p>
</footer>;
    return <div>
		{mainContent}
		{footerContent}
</div>
	}
}

export default AdminActivities ;