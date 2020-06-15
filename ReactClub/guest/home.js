import React from 'react';
import homeimage from "/images/homeimage.jpg";
function Home(props) {
   let mainContent=null
   let footerContent=null;
			mainContent=<main className="maindesign">
				<header>
					<h1> 24 hour Fitness Club </h1>
					</header>
				<img src={homeimage}/>;
				<h2> Fitness goal to suit your plan</h2>
				<p> A knowledgable team who can  provide 7 day one to one workout session and can also personalize fitness to help you achieve
					your goal.If its just a starting or you want to increase your performance we are here to help you .We have studio classes,Personal training and 
					24 hour fitness App to assist you throughout the process.So don't wait register now!!.
				</p>
			</main>;
			footerContent=<footer className="footerStyle">
				<p>&#x1f60a; © 2020 Shalaka Shetty.  &#x1F30A;</p>
			</footer>;
    return <div>
		{mainContent}
		{footerContent}
		</div>
}

export default Home;