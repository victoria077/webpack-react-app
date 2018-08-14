

import React, {Component  } from "react";
import axios from 'axios';
import  "./index.css";


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
      
            <div className="row h-100 justify-content-center">

            <form className="form-group col-md-4 " onSubmit={this.handleSubmit}>
            <h2>Register</h2>

            <label>Email address</label>
                    <input type="text" className="form-control" name="login" onChange={this.handleInputChange}/>    
            <label >Password</label>
                    <input type="text"className="form-control"  name="password" onChange={this.handleInputChange}/>    
               <div className = "text-center">  
             <button type="submit" className="btn btn-primary">Submit</button>   
             </div>
         </form>   
         </div>
        );
    }
}

export default Signup;
