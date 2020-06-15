import React from 'react';
import activities from '/activities.json';
function Activities(props) {
   let mainContent=null
   let footerContent=null;
   let allActivities=null;
   let tableContent=null;

   tableContent=activities.map(function(choice ,i){
	 return  <tr key={i}>
	<td> {choice.name}</td>
	<td> {choice.dates}</td>
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
		<h1>Club Activities</h1>
	</header>
	<h2> Our Events </h2>
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

export default Activities ;