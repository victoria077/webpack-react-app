import React, { Component } from 'react';
import axios from 'axios';
import config from '../config';

export default class Login extends Component {
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
    axios.post(config.baseUrl + "api/account/signin",
      {
        UserName: this.state.login,
        UserPassword: this.state.password
      }).then(resp => {
        localStorage.setItem("token_id", resp.data.token);
        localStorage.setItem("name", resp.data.name);
        window.location = "/secretpage";
        console.log("yehooo");
      }).catch(error => {
        alert("error ")
      })
    event.preventDefault();
  }

  render() {
    return (
      <div className="row">
        <form className="form-group col-md-3 col-centered " onSubmit={this.handleSubmit}>
          <h2>Login</h2>
          <label>Email address</label>
          <input type="text" className="form-control" name="login" onChange={this.handleInputChange} />
          <label >Password</label>
          <input type="text" className="form-control" name="password" onChange={this.handleInputChange} />
          <div className="text-center">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>

    )
  }
}