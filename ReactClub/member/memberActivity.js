import React from 'react';
class MemberActivities extends React.Component {
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
		
	render(){
   let that = this;
   let mainContent=null;
   let footerContent=null;
   let allActivities=null;
   let tableContent=null;
   let addActivities=null;
 
   tableContent=this.state.activities.map(function(activity ,i){
	 return  <tr key={"activity"+i}>
	<td> {activity.name}</td>
	<td> {(activity.dates).join(",")}</td>
   </tr>
		});
  allActivities=<section className="listOfActivities">
	<table>
		<thead>
			<tr>
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

export default MemberActivities ;