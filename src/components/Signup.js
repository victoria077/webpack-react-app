

import React, {Component  } from "react";
import axios from 'axios';

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
            <form onSubmit={this.handleSubmit}>
                <label>
                    login:
                        <input type="text" name="login" onChange={this.handleInputChange}/>    
                 </label> 
                 <label>
                    password:
                        <input type="text" name="password" onChange={this.handleInputChange}/>    
                 </label>  
                 <input type="submit" value="Submit" />    
             </form>   
        );
    }
}

export default Signup;
