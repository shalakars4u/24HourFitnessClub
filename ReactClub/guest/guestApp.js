import React from "react";
import Home from '/guest/home';
import About from '/guest/about';
import Login from '/guest/login';
import Activities from '/guest/activities'

class GuestApp extends React.Component {
	constructor(props){
		super(props);
		this.state = {show: "home"};
		this.loginCheckHandler=props.loginCheckHandler;
	}
			homeHandler(event) {
			this.setState({show: "home"});
		   }
			aboutHandler(event) {
			this.setState({show: "about"});
		   }
		   loginHandler(event) {
			this.setState({show: "login"});
		   }
		   
		   activityHandler(event) {
			this.setState({show: "activities"});
		   }
		   
		   memberHandler(event) {
			this.setState({show: "member"});
		   }
		   
		    render() {
			let contents=null;
			let navContent=null;	
			navContent=<nav className="navdesign">
				<ul>
					<li className={this.state.show=="home" ? "active":null}>
						<a onClick={this.homeHandler.bind(this)}>Home</a>
					</li>
					<li className={this.state.show=="about" ? "active":null}>
						<a onClick={this.aboutHandler.bind(this)}>About</a>
					</li>
					<li className={this.state.show=="activities" ? "active":null}>
						<a onClick={this.activityHandler.bind(this)}>Activities</a>
					</li>
					<li className={this.state.show=="member" ? "active":null}>
						<a onClick={this.memberHandler.bind(this)}>Membership</a>
					</li>
					<li className={this.state.show=="login" ? "active":null}>
						<a onClick={this.loginHandler.bind(this)}>Login</a>
					</li>
				</ul>
			</nav>;
			
			switch(this.state.show){
			   case "home":
			  contents= <Home/>;
			   break;
			   
			   case "about":
			  contents=<About/>;
			   break;
			   
			   case "login":
			  contents=<Login loginCheckHandler={this.loginCheckHandler} />;
			   break;
			   
			   case "activities":
			  contents=<Activities/>;
			   break;
			   
			   default:
			   contents = <h2>Not Implemented Yet.</h2>;
			}
			  return <div className="bodyStyle">
			  {navContent}
			  {contents}
			  </div>	
			 }			
}
export default GuestApp;
