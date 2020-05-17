import React from 'react';
//import loginImg from '../../login.svg';
import Navbar  from "./navbar";
import bcrypt from "bcryptjs";

class Register extends React.Component{

    constructor(){
        super();
        this.state={
            id: null,
            name: null,
            username: null,
            email: null,
            password: null,
        }
    }

    create(){
        fetch("http://localhost:3000/users",{
            method: "Post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }).then((result)=>{
            result.json().then((resp)=>{
                alert('User added to list')
            })
        })
    }

    render(){
        return(
            <div className='base-container'>
                <Navbar/>
                <div className='header'>Register</div>
                <div className='content'>
                    <div className='form'>
                    <div className='form-group'>
                            <label htmlFor="id">Id</label>
                            <input type='text' name='id' placeholder='id' onChange={(event)=>{this.setState({id: event.target.value})}}/>
                        </div>
                        <div className='form-group'>
                            <label htmlFor="name">Name</label>
                            <input type='text' name='name' placeholder='name' onChange={(event)=>{this.setState({name: event.target.value})}}/>
                        </div>
                        <div className='form-group'>
                            <label htmlFor="email">Email</label>
                            <input type='text' name='email' placeholder='email' onChange={(event)=>{this.setState({email: event.target.value})}}/>
                        </div>
                        <div className='form-group'>
                            <label htmlFor="username">Username</label>
                            <input type='text' name='username' placeholder='username' onChange={(event)=>{this.setState({username: event.target.value})}}/>
                        </div>
                        <div className='form-group'>
                            <label htmlFor="password">Password</label>
                            <input type='password' name='password' placeholder='password' onChange={(event)=>{this.setState({password: event.target.value})}}/>
                        </div>
                    </div>
                </div>
                <div className='footer'>
                    <button type="submit" className='btn' onClick={()=>{this.create()}}>Register</button>
                </div>
            </div>
        )
    }
}

export default Register;