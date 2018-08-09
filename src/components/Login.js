import React, { Component } from 'react';
import axios from 'axios';
import { Navbar} from 'reactstrap';

export default class Login extends Component {
  baseUrl = "http://localhost:5000/";
  constructor(props) {
    super(props);
    this.state = { login: '', password: '' };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    axios.post(this.baseUrl + "api/account/signin",
      {
        UserName: this.state.login,
        UserPassword: this.state.password
      }).then(resp => {
        localStorage.setItem("token_id", resp.data);

        window.location = "/secretpage"
      }).catch(error =>{
        alert("error " )
      })
    event.preventDefault();
  }

  render() {
    return (
      
      <form onSubmit={this.handleSubmit} >
      <h1>Login Page</h1>
        <label>
          login:
        <input type="text"  className="form-control" name="login" onChange={this.handleInputChange} />
        </label>
        <label>
          password:
        <input type="password" name="password" className="form-control" onChange={this.handleInputChange} />
        </label>
        <input type="submit"   className="btn btn-info" value="Submit Button" />
      </form>
      
    )
  }
}