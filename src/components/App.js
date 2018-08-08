import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from "react-router-dom";
import Signup from "./Signup"
import Login from "./Login"
import SecretComponent from './SecretComponent';

class App extends Component {

    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Signup} />
                    <Route path="/login" component={Login} />
                    <Route path="/secretpage" component={SecretComponent} />
                </div>
            </Router>
        );
    }
}

export default App;