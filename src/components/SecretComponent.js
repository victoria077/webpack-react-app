import React, { Component } from 'react';
import axios from 'axios';

export default class SecretComponent extends Component {
  
  checkUser() {
    let conf = {
      headers: { 'Authorization': localStorage.getItem("token_id")
      }
    }

   axios.get("http://localhost:5000/api/account/checksecretuser", conf)
    .then(ok =>{ 
      alert("Submit" )
          }).catch(error =>{
      alert("Error" )
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.checkUser} > "Push me"</button>
      </div>
    )
  }
}