import React from 'react';
function About(props) {
   let mainContent=null
   let footerContent=null;
			mainContent=<main className="maindesign">
				<header>
						<h1>About</h1>
					</header>
					<h2> Experience the Difference Contact Us!!</h2>
					<p> 24 hour fitness is known for having flexible sessions and even the custom workout at the beginning which makes 
					us different from the rest.Contact us @ Email:24hrsfitness@gmail.com Phone no:4092457892</p>
				</main>;
			footerContent=<footer className="footerStyle">
				<p>&#x1f60a; © 2020 Shalaka Shetty.  &#x1F30A;</p>
			</footer>;
    return <div>
		{mainContent}
		{footerContent}
		</div>
}

export default About;