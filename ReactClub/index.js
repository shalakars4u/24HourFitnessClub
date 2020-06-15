import React from "react";
import ReactDOM from "react-dom";
import GuestApp from './guest/GuestApp';
import MemberApp from './member/MemberApp';
import AdminApp from './admin/AdminApp';
class App extends React.Component {
    constructor(props) {
        super(props);
		this.loginCheckHandler=this.loginCheckHandler.bind(this);
        this.state = {role: "guest",userInfo:{}}; // We will have "user" and "admin" roles too.
    }
    // Renders component based on current state and props
	
	loginCheckHandler(roleVal,userInfoVal) {
			this.setState({role: roleVal,userInfo:userInfoVal});
	 }
	    
    render() {
		let contents=null;
		switch(this.state.role){
			case "guest":
			contents=<GuestApp loginCheckHandler={this.loginCheckHandler}  userInfo={this.state.userInfo}  />;
			break;
			
			case "member":
			contents=<MemberApp loginCheckHandler={this.loginCheckHandler} userInfo={this.state.userInfo} />;
			break; 
			
			case "admin":
			contents=<AdminApp loginCheckHandler={this.loginCheckHandler}  userInfo={this.state.userInfo}/>;
			break;
			
			default:
            contents = <h2>Not Implemented Yet.</h2>;
		}
		
        return <div>
		{contents}
		</div>
		
    }
}

ReactDOM.render(<App />, document.getElementById("root")); 