import React, { useState, useEffect } from 'react';
//import loginImg from '../../login.svg';
import Navbar from "./navbar";
import bcrypt from "bcryptjs";
var salt = bcrypt.genSaltSync(10);

const Login = (props) => {

    const [username, setUsername] = useState(' ');
    const [password, setPassword] = useState(' ');

    const login = () => {
        //const pass=bcrypt.hashSync(this.state.password, salt);
        fetch("http://localhost:3000/users?username=" + username + "&password=" + password).then((data) => {
            data.json().then((resp) => {
                console.warn("resp", resp)
                if (resp.length > 0) {
                    localStorage.setItem('Login', JSON.stringify(resp))
                    console.warn(props.history.push('/userlist'))
                }
                else {
                    alert("wrong username or password")
                }
            })
        })
    }

    return (
        <div className='base-container'>
            <Navbar />
            <div className='header'>login</div>
            <div className='content'>
                <div className='form'>
                    <div className='form-group'>
                        <label htmlFor="username">Username</label>
                        <input type='text' name='username' placeholder='username' onChange={event => setUsername(event.target.value)} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="password">Password</label>
                        <input type='password' name='password' placeholder='password' onChange={event => setPassword(event.target.value)} />
                    </div>
                </div>
            </div>
            <div className='footer'>
                <button type="submit" className='btn' onClick={login}>Login</button>
            </div>
        </div>
    )
}

export default Login;