import React from 'react';
import Navbar from "./navbar";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createUsers } from '../../actions/userActions';
import bcrypt from "bcryptjs";

class Register extends React.Component {

    constructor() {
        super();
        this.state = {
            name: null,
            username: null,
            email: null,
            password: null,
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this)
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
        this.setState({ [e.target.username]: e.target.value });
        this.setState({ [e.target.email]: e.target.value });
        this.setState({ [e.target.password]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        const user = {
            id: this.state.id,
            name: this.state.name,
            username: this.state.username,
            email: this.state.username,
            password: this.state.password
        };
        this.props.createUsers(user);
    }

    render() {
        return (
            <div className='base-container'>
                <Navbar/>
            <div>
                <h1>Register</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Name: </label>
                        <br />
                        <input
                            type="text"
                            name="name"
                            onChange={this.onChange}
                            value={this.state.name}
                        />
                    </div>
                    <br />
                    <div>
                        <label>Email: </label>
                        <br />
                        <input
                            name="email"
                            onChange={this.onChange}
                            value={this.state.email}
                        />
                    </div>
                    <br />
                    <div>
                        <label>Username: </label>
                        <br />
                        <input
                            type="text"
                            name="username"
                            onChange={this.onChange}
                            value={this.state.username}
                        />
                    </div>
                    <br />
                    <div>
                        <label>Password: </label>
                        <br />
                        <input
                            type="password"
                            name="password"
                            onChange={this.onChange}
                            value={this.state.password}
                        />
                    </div>
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
            </div>
        );
    }
}

Register.propTypes = {
    createUsers: PropTypes.func.isRequired
};

export default connect(null, { createUsers })(Register);