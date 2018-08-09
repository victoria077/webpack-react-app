

import React, {Component  } from "react";
import axios from 'axios';
//import from "./index.css";



class Signup extends Component {
    baseUrl = "http://localhost:5000/";
    constructor(props) {
        super(props);
        this.state = {login: "", password: ""};

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }    

    handleSubmit(event) {
 axios.post(this.baseUrl + "api/account/signup",
        {
            UserName: this.state.login,
            
            UserPassword: this.state.password
    }).then(resp => {
        window.location =  "/login" 
    }).catch(error => {
        alert("error" )
    })
    event.preventDefault();
    }

    render(){
        return (
            <div className="bs-example" >
            <form action="/examples/actions/confirmation.php" method="post" >
                <div className="form-group">
                    <label htmlFor="inputEmail">Email</label>
                    <input type="email" className="form-control" id="inputEmail" placeholder="Email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="inputPassword">Password</label>
                    <input type="password" className="form-control" id="inputPassword" placeholder="Password" required />
                </div>
                <div className="checkbox">
                    <label><input type="checkbox" /> Remember me</label>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>  
        );
    }
}

export default Signup;
