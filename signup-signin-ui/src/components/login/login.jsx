import React from 'react';
//import loginImg from '../../login.svg';
import Navbar  from "./navbar";
import bcrypt from "bcryptjs";
var salt = bcrypt.genSaltSync(10);

class Login extends React.Component{

    constructor(){
        super();
        this.state={
            username: '',
            password: '',
            matched: true,
        }
    }

    login(){
        //const pass=bcrypt.hashSync(this.state.password, salt);
        fetch("http://localhost:3000/users?username="+this.state.username+"&password="+this.state.password).then((data)=>{
            data.json().then((resp)=>{
                console.warn("resp", resp)
                if(resp.length>0)
                {
                    localStorage.setItem('Login', JSON.stringify(resp))
                    console.warn(this.props.history.push('/userlist'))
                }
                else
                {
                    alert("wrong username or password")
                }
            })
        })
    }

    render(){
        return(
            <div className='base-container'>
                <Navbar/>
                <div className='header'>login</div>
                <div className='content'>
                    <div className='form'>
                        <div className='form-group'>
                            <label htmlFor="username">Username</label>
                            <input type='text' name='username' placeholder='username' onChange={(event)=>{this.setState({username: event.target.value})}}/>
                        </div>
                        <div className='form-group'>
                            <label htmlFor="password">Password</label>
                            <input type='password' name='password' placeholder='password' onChange={(event)=>{this.setState({password:event.target.value})}}/>
                        </div>
                    </div>
                </div>
                <div className='footer'>
                    <button type="submit" className='btn' onClick={()=>{this.login()}}>Login</button>
                </div>
            </div>
        )
    }
}

export default Login;