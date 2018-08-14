import React, { Component } from 'react';


class Logout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: localStorage.getItem("name")
          }
    }
    
    render() {
        return (
            <button className="btn-primary" onClick={this.handleLogout}>Logout</button>
        );
    }

    handleLogout() {
        // localStorage.clear();
        window.location = "/"
    }
}


export default Logout;