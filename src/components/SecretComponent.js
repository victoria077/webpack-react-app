import React, { Component } from 'react';
import axios from 'axios';
import Logout from './Logout';
import "./index.css";
import { DropdownButton, MenuItem } from 'react-bootstrap';
export default class SecretComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      label: "",
      showMenu: false,
    }

    this.showMenu = this.showMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({
      showMenu: true,
    });
  }


  componentWillMount() {


    let conf = {
      headers: {
        'Authorization': localStorage.getItem("token_id")
      }
    }

    axios.get("http://localhost:5000/api/account/checksecretuser", conf)
      .then(ok => {

        this.setState({ label: "Hello, Mr/Ms" + " " + ok.data });

      }).catch(error => {
        alert("Error")
      })
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light justify-content-between">
          <div onClick={this.showMenu}>{this.state.label}</div>
        </nav>
        {
          this.state.showMenu
            ? (
              <div className="menu">
                <Logout />
              </div>
            )
            : (
              null
            )
        }
      </div>
    )
  }
}