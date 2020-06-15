import React from "react";
class Login extends React.Component{
	constructor(props){
		super(props);
		this.loginCheckHandler=props.loginCheckHandler;
	}
	
	
	changeData(){
		let that=this;
		  fetch('/login', {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                email: emailId.value,
				password:password.value
            })
        }).then(response => response.json())
           .then(function(data) {
			   console.log(data);
			that.loginCheckHandler(data.role,data);
        })
		.catch(function (err) {
			console.log(err);
		});
		}
       
		/*let userInfo={"name":"Shalaka","netId": "wz7389"};
		if(emailId.value=="admin@email.org"){
			this.loginCheckHandler("admin",userInfo);
		}
		else if(emailId.value=="member@email.org"){
			this.loginCheckHandler("member",userInfo);
		}
		else{
			this.loginCheckHandler("guest","");*/
		//}
		
	//}
	render(){
	let mainContent=null;
	let footerContent=null;
	mainContent=<main className="maindesign">
	            <header>
				<h1> Login </h1>
				</header>
				<section className="sectionStyle">
				<label>Email</label>
				<input type="text"  name="emailId" id="emailId"  />
				<label>Password</label>
				<input name="password" id="password" />
			    <button onClick={this.changeData.bind(this)} type="submit">Login</button>
				</section>
				</main>;
				footerContent=<footer className="footerStyle">
				<p>&#x1f60a; © 2020 Shalaka Shetty.  &#x1F30A;</p>
				</footer>;
			
			return <div> {mainContent} {footerContent}</div>
	}

}

export default Login;
