import React, { Component } from 'react';


class Logout extends Component {

    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
       
    }
    render() {
      return (
        <button onClick={this.handleLogout}>Logout</button>
      );
    }
  
    handleLogout () {
        // localStorage.clear();
        window.location =  "/"
    }
  }

  
export default Logout;