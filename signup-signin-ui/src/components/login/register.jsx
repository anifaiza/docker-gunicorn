import React, { useState, useEffect } from 'react';
import Navbar from "./navbar";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createUsers } from '../../actions/userActions';
import bcrypt from "bcryptjs";

const Register = (props) => {

    const [name, setName] = useState('');
    const [username, setUsername] = useState(' ');
    const [email, setEmail] = useState(' ');
    const [password, setPassword] = useState(' ');

    const onSubmit = e => {
        e.preventDefault();

        const user = {
            name: name,
            username: username,
            email: email,
            password: password
        };
        props.createUsers(user);
    }

    return (
        <div className='base-container'>
            <Navbar />
            <div>
                <h1>Register</h1>
                <form onSubmit={onSubmit}>
                    <div>
                        <label>Name: </label>
                        <br />
                        <input
                            type="text"
                            name="name"
                            onChange={event => setName(event.target.value)}
                            value={name}
                        />
                    </div>
                    <br />
                    <div>
                        <label>Email: </label>
                        <br />
                        <input
                            name="email"
                            onChange={event => setEmail(event.target.value)}
                            value={email}
                        />
                    </div>
                    <br />
                    <div>
                        <label>Username: </label>
                        <br />
                        <input
                            type="text"
                            name="username"
                            onChange={event => setUsername(event.target.value)}
                            value={username}
                        />
                    </div>
                    <br />
                    <div>
                        <label>Password: </label>
                        <br />
                        <input
                            type="password"
                            name="password"
                            onChange={event => setPassword(event.target.value)}
                        />
                    </div>
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

Register.propTypes = {
    createUsers: PropTypes.func.isRequired
};

export default connect(null, { createUsers })(Register);