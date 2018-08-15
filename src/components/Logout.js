import React, { Component } from 'react';
import "./index.css";

class Logout extends Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }
    render() {
        return (
            <div  onClick={this.handleLogout} className =" txdecor">Logout</div>
        );
    }
    handleLogout() {
        localStorage.clear();
        window.location = "/"
    }
}


export default Logout;