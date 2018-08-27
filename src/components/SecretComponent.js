import React, { Component } from 'react';
import axios from 'axios';
import Logout from './Logout';
import "./index.css";
import { NavDropdown, Navbar, MenuItem, Nav } from 'react-bootstrap';
import Sidebar from './Sidebar';
export default class SecretComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      label: ""
    }
  }

  componentWillMount() {
    let conf = {
      headers: {
        'Authorization': localStorage.getItem("token_id")
      }
    }
    axios.get("http://localhost:5000/api/account/checksecretuser", conf)
      .then(ok => {
        this.setState({ label: "Hello, Ms" + " " + ok.data });
      }).catch(error => {
        alert("Error")
      })
  }

  render(title, i) {
    return (
      <div className="wrapper">
       <Navbar className="bgcolor ">
        <Nav id="tx">
          <NavDropdown  id="namestyle" title={this.state.label}>
            <MenuItem><Logout /></MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar> 
      <Sidebar/>
      </div>





    )
  }
}