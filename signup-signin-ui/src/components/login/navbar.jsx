import React, { Component } from 'react';
import { Link } from "react-router-dom"

class Navbar extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/userlist">Users</Link></li>
                    {
                        localStorage.getItem('Login') ?
                            <li><Link to="/logout">Logout</Link></li>
                            :
                            <div>
                                <li><Link to="/login">Login</Link></li>
                                <li><Link to="/register">Register</Link></li>
                            </div>
                    }
                </ul>
            </div>
        );
    }
}

export default Navbar;