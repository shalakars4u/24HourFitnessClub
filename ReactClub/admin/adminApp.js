import React from "react";
import Home from '/guest/home';
import About from '/guest/about';
import AdminActivities from '/admin/adminActivity';
class AdminApp extends React.Component{

	constructor(props){
		super(props);
		this.state={show:"home"};
		this.loginCheckHandler=props.loginCheckHandler;
		this.role=props.role;
		this.userInfo=props.userInfo;

	}
	
	homeHandler(event) {
	 this.setState({show: "home"});
	}
	
	aboutHandler(event) {
		this.setState({show: "about"});
	}
	
	logoutHandler(event) {
		let that=this;
		  fetch('/logout', {
            method: 'GET',
            headers: {
                "Content-type": "application/json"
            }
           
        }).then(response => response.json())
           .then(function(data) {
			   console.log(data);
			that.loginCheckHandler("guest",data);
        })
		.catch(function (err) {
			console.log(err);
		});
		this.loginCheckHandler("guest","");
    }
	
     activityHandler(event) {
		this.setState({show: "edit-act"});
	}
		   
	 memberHandler(event) {
		this.setState({show: "member"});
	}

	render(){
	let navContent=null;
	let contents=null;
	navContent=<nav className="navdesign">
	<ul>
		<li className={this.state.show=="home" ? "active":null}>
		<a onClick={this.homeHandler.bind(this)}>Home</a>
		</li>
		<li className={this.state.show=="about" ? "active":null}>
			<a onClick={this.aboutHandler.bind(this)}>About</a>
		</li>
		<li className={this.state.show=="edit-act" ? "active":null}>
			<a onClick={this.activityHandler.bind(this)}>Edit Activities</a>
		</li>
		<li className={this.state.show=="member" ? "active":null}>
			<a onClick={this.memberHandler.bind(this)}>Members Only</a>
		</li>
		<li className={this.state.show=="logout" ? "active":null}>
			<a onClick={this.logoutHandler.bind(this)}>Logout</a>
		</li>
		</ul>
		</nav>;
		let heading=<p>{this.userInfo.firstName} {this.userInfo.lastName} : {this.userInfo.role} </p>;
		
		switch(this.state.show){
	     case "home":
			  contents= <Home/>;
			   break;

		case "about":
			  contents=<About/>;
			   break;
		
		case "edit-act":
			  contents=<AdminActivities/>;
			   break;
		default:
	     contents = <h2>Not Implemented Yet.</h2>;
	    }
	    return <div className="bodyStyle">
	     {navContent}
			{heading}
	     {contents}
		</div>	
	  }
}
export default AdminApp;