import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom"

class Navbar extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/userlist">Users</Link></li>
                    {
                        localStorage.getItem('Login') ?
                            <li><Link to="/logout">Logout</Link></li>
                            :
                            <li><Link to="/login">Login</Link></li>
                    }
                </ul>
            </div>
        );
    }
}

export default Navbar;