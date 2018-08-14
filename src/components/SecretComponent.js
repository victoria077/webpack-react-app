import React, { Component } from 'react';
import axios from 'axios';
import Logout from './Logout';

export default class SecretComponent extends Component {
  constructor(props){
    super(props)
    this.state = { label: ""};
   
  }
  componentWillMount() {
   
    
    let conf = {
      headers: { 'Authorization': localStorage.getItem("token_id")
      }
    }

   axios.get("http://localhost:5000/api/account/checksecretuser", conf)
    .then(ok =>{ 
     
     this.setState({label: "Hello, Mr/Ms" + " " + ok.data});
    
          }).catch(error =>{
      alert("Error" )
    })
  }

  render() {
    return (
      <div>
        
        <nav class="navbar navbar-light bg-light justify-content-between">
  <div>{this.state.label}</div>
  
   
  <Logout />
  
</nav>
      </div>
    )
  }
}